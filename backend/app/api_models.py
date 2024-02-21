from flask_restx import fields
from .extensions import api

registerUser_model = api.model("RegisterUserModel", {
    "name":fields.String,
    "email":fields.String,
    "password":fields.String,
    "mobileNumber":fields.String,
    "city":fields.String,
})

user_model = api.model("UserModel", {
    "id":fields.Integer,
    "name":fields.String,
    "email":fields.String,
    "password":fields.String,
    "mobileNumber":fields.String,
    "city":fields.String,
    "token":fields.String
})

login_model = api.model("LoginModel", {
    "email":fields.String,
    "password":fields.String
})