import firebase_admin

import sys
sys.path.append(".")

from config.firebase_config import db, auth, admin_auth

class UserController:
    @staticmethod
    def create_user(email, password, name, role):
        user = auth.create_user_with_email_and_password(email, password) #Se usa el meto para crear un nuevo usuario en unthentication con email and password
        user_id = user["localId"]

        try:
            admin_auth.set_custom_user_claims(user_id, {"rol": role})

        except Exception as e:
            print(f"Error al asignar el custom claim: {e}")


        user_data = {"user_id": user_id,
                     "name": name,
                     "user_rol": role}
        db.child("users").child(user_id).set(user_data)
        return user

    @staticmethod
    def login(email, password):
        user = auth.sign_in_with_email_and_password(email, password) #Se usa el metodo para consutlar en authentication por email and password
        return user

    @staticmethod
    def get_users():
        return db.child("users").get().val()