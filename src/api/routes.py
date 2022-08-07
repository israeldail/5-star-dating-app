from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Profile
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    # email = request.json.get("email")
    # password = request.json.get("password")
    if "email" not in data or data["email"]:
        raise APIException('Email Not Found', status_code=400)
    if "password" not in data or data["password"]:
        raise APIException('Password Not Found', status_code=400)

    profile =  Profile.query.filter_by(email=data["email"]).first()
    if profile == None or data["password"] != profile.password or data['email'] != profile.email:
        return "Email or Password is not correct"
    else:
        return "Success"
    return "Logged In!"

@api.route('/profile', methods=['GET'])
def get_profile():

    profile = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile))

    return jsonify(all_profiles), 200

@api.route('/profile/<int:id>', methods=['GET'])
def get_profile_id(id):

    profile = Profile.query.filter_by(id=id).first()
    

    return jsonify(profile.serialize()), 200


@api.route('/signup',methods=['GET'])
def get_signup():
    users = Profile.query.all()
    userlist = list(map(lambda x: x.serialize(), users))
    return jsonify(userlist), 200


@api.route('/signup', methods=['POST'])
def handle_signup():
    response_body = request.get_json()
    profile = Profile(email=response_body["email"], first_name=response_body["first_name"], last_name=response_body["last_name"], password=response_body["password"], image_url=response_body["image_url"], bio=response_body["bio"], traits_and_interests=response_body["traits_and_interests"])
    db.session.add(profile)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
    }

    return jsonify(payload), 200



