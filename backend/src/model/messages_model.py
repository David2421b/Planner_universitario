import sys
sys.path.append(".")

from config.firebase_config import db, firestore_db
from firebase_admin import firestore


class Mensajes:
    @staticmethod
    def agregar_mensaje(id_chat, id_usuario, texto_mensaje):
        chat_reference = firestore_db.collection("chats").document(id_chat)
        mensajes_collections_reference = chat_reference.collection("mensajes")

        datos_mensaje = {
            "remitente_id": id_usuario, # Quién lo envió
            "contenido": texto_mensaje, # El texto del mensaje
            "timestamp": firestore.SERVER_TIMESTAMP, # La hora de envío (segura del servidor)
            "leido": False # Un campo de estado
        }

        try:
            doc_ref, doc_id = mensajes_collections_reference.add(datos_mensaje)

            chat_reference.set({"ultimo_mensaje": firestore.SERVER_TIMESTAMP}, merge = True)
        
        except Exception as e:
            print(f"EL error es {e}")



CONVERSACION_ID = "prueba_chat_entre_laura_y_pedro" 

# 2. Envía un primer mensaje (Simulando a Laura)
Mensajes.agregar_mensaje(
    id_chat=CONVERSACION_ID,
    id_usuario="laura@universidad.com",
    texto_mensaje="Hola Pedro, ¿qué temas entran en el examen de mañana?"
)

# 3. Envía un segundo mensaje (Simulando a Pedro)
Mensajes.agregar_mensaje(
    id_chat=CONVERSACION_ID,
    id_usuario="pedro@universidad.com",
    texto_mensaje="¡Hola Laura! Según el profesor, los capítulos 3 al 5 del libro."
)