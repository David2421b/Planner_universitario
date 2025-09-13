import sys
import os
sys.path.append(".")

from config.firebase_config import db, auth

class User:
    @staticmethod
    def create_user(email, password):
        user = auth.create_user_with_email_and_password(email, password)
        return user
    
    @staticmethod
    def get_users():
        return db.child("users").get().val()
    

User.create_user("david@gmail.com", "123456789")