#Colocarle el siguiente nombre al archivo "firebase_config.py"


import pyrebase

firebaseConfig = {
  "apiKey": "COLOCAR LA API COMPLETA",
  "authDomain": "CONECCION CON EL AUTHENTICATOR",
  "databaseURL": "DIRECCION (URL) DE LA BASE DE DATOS",
  "projectId": "ID DE LA APP EN FIREBASE",
  "storageBucket": "CONECCION DE STORAGE",
  "messagingSenderId": "ID DE MENSAJERIA",
  "appId": "IDENTIFICACION DE LA APP",
  "measurementId": "ID"
}

firebase = pyrebase.initialize_app(firebaseConfig)

# Accesos rápidos
auth = firebase.auth()
db = firebase.database()
storage = firebase.storage()
__all__ = ["auth", "db", "storage"]
