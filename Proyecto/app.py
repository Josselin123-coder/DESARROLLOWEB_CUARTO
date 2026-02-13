from flask import Flask

# Crea una instancia de la aplicación Flask
app = Flask(__name__)

# Define la ruta principal
@app.route('/')
def index():
    return '¡Hola! Bienvenido a mi aplicación Flask.'

# Define una ruta que acepta un parámetro de usuario
@app.route('/usuario/<nombre>')
def usuario(nombre):
    return f'Bienvenido, {nombre}!'

# Ejecuta la aplicación en modo de depuración
if __name__ == '__main__':
    app.run(debug=True)