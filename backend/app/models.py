from .extensions import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255))
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    mobileNumber = db.Column(db.String(255))
    city = db.Column(db.String(255))
    token = db.Column(db.String(255))
