# Formulario de reservas
# Formulario de reservas
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

# Formulario de reservas
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class ReservaForm(FlaskForm):
    nombre = StringField('Nombre del cliente', validators=[DataRequired(), Length(min=2, max=200)])
    descripcion = StringField('Descripción de la reserva', validators=[DataRequired(), Length(min=10, max=500)])
    cantidad = IntegerField('Número de personas', validators=[DataRequired(), NumberRange(min=1)])
    precio = DecimalField('Precio de la reserva', validators=[DataRequired(), NumberRange(min=0.00)])
    submit = SubmitField('Confirmar Reserva')

