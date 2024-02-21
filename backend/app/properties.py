from flask_restx import Resource, Namespace
from flask_jwt_extended import jwt_required
from .models import Property
from .api_models import property_model, createProperty_Model, createPropertyResponse_Model
from .extensions import db


authorizations = {
    "jsonWebToken": {
        "type": "apiKey",
        "in":"header",
        "name":"Authorization"
    }
}

ns = Namespace("property", authorizations=authorizations)

@ns.route('/getProperties')
class GetPropertiesAPI(Resource):

    method_decorators = [jwt_required()]

    @ns.doc(security="jsonWebToken")
    @ns.marshal_list_with(property_model)
    def get(self):
        fetchProperty = Property.query.all()

        return fetchProperty, 200


@ns.route('/createProperty')
class CreatePropertyAPI(Resource):
    method_decorators = [jwt_required()]

    @ns.doc(security="jsonWebToken")
    @ns.expect(createProperty_Model)
    @ns.marshal_with(createPropertyResponse_Model)
    def post(self):
        print(ns.payload)
        newProperty = Property(
            propertyName = ns.payload["propertyName"],
            propertyType = ns.payload["propertyType"],
            propertyStatus = ns.payload["propertyStatus"]
        )
        db.session.add(newProperty)
        db.session.commit()
        print(newProperty)
    
        return {"message":"Property Listed Successfully", "property": newProperty}, 201


