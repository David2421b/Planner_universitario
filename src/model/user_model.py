import sys
import os
sys.path.append(".")

from config.firebase_config import db, auth

class User:
    @staticmethod
    def create_user(email, password, name, ):
        user = auth.create_user_with_email_and_password(email, password)
        user_id = user["localId"]
        user_data = {"user_id": user_id,
                     "name": name}
        return user

    @staticmethod
    def get_users():
        return db.child("users").get().val()
    

    
valor = int(input("Ingrese 1 o 2: "))
if valor == 1:
    User.create_user("davidh1@gmail.com", "123456789")
else:
    print(User.get_users())