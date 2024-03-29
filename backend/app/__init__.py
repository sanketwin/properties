from flask import Flask
from flask_cors import CORS
from .extensions import api, db, jwt
from .users import user
from .properties import ns



def create_app():
    app = Flask(__name__)

    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"]="mysql://root:root@localhost/lease"       #mysql://username:password@localhost/database
    app.config["JWT_SECRET_KEY"] = "f3422f49517f852da686694bc2f01fac"

    api.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    api.add_namespace(user)
    api.add_namespace(ns)

    return app