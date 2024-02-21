from .extensions import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255))
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    mobileNumber = db.Column(db.String(255))
    city = db.Column(db.String(255))



class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    propertyName = db.Column(db.String(255))
    propertyType = db.Column(db.String(255))
    propertyStatus = db.Column(db.String(255))
