from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/reservas')
def reservas():
    return render_template('reserva.html', cliente="Invitado")



@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

@app.route('/servicios')
def servicios():
    return render_template('servicios.html')

if __name__ == '__main__':
    app.run(debug=True)
