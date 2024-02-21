from flask_restx import Resource, Namespace
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from .api_models import registerUser_model, user_model, login_model
from .models import Users
from .extensions import db

user = Namespace("user")

    
@user.route('/register')
class Register(Resource):
    @user.expect(registerUser_model)
    @user.marshal_with(user_model)
    def post(self):
        newUser = Users(
            name = user.payload["name"],
            email = user.payload["email"],
            password = generate_password_hash(user.payload["password"]),
            mobileNumber = user.payload["mobileNumber"],
            city = user.payload["city"],
            token = ""
        )
        db.session.add(newUser)
        db.session.commit()

        return newUser, 201


@user.route('/login')
class Register(Resource):
    @user.expect(login_model)
    def post(self):
        fetchUser = Users.query.filter_by(email=user.payload["email"]).first()
        if not fetchUser:
            return {"error": "User does not exist"}, 401
        if not check_password_hash(fetchUser.password, user.password):
            return {"error": "Incorrect Password"}, 401
        
        return {"access_token":}
