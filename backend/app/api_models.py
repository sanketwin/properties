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
    "city":fields.String
})

login_model = api.model("LoginModel", {
    "email":fields.String,
    "password":fields.String
})


property_model = api.model("PropertyModel", {
    "id":fields.Integer,
    "propertyName":fields.String,
    "propertyType":fields.String,
    "propertyStatus":fields.String
})

createProperty_Model = api.model("CreatePropertyModel", {
    "propertyName":fields.String,
    "propertyType":fields.String,
    "propertyStatus":fields.String
})

createPropertyResponse_Model = api.model("CreatePropertyResponseModel", {
    "message":fields.String,
    "property":fields.Nested(property_model)
})