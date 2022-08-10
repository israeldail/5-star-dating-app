from flask import Flask, request, jsonify, url_for, Blueprint, make_response
from api.models import db, Profile
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route("/", methods=["GET"])
def index():
    return " something crazy"


@api.route("/token", methods=["POST"])
def create_token():

    data = request.get_json(force=True)

    if "email" not in data:
        raise APIException('Email Not Found in request', status_code=400)
    if "password" not in data:
        raise APIException('Password Not Found in request', status_code=400)

    profile = Profile.query.filter_by(email=data["email"]).first()

    if profile is None:
        raise APIException(
            'Profile does not exist, please check credentials', status_code=404)
    if data["password"] != profile.password:
        raise APIException('Password is incorrect', status_code=401)

    access_token = create_access_token(identity=data["email"])
    print("just say something")
    print(access_token)
    response = make_response(
        jsonify({'message': 'login successfully', 'access_token': access_token}), 200,)
    response.headers["Content-Type"] = "application/json"

    return response


@api.route('/profiles', methods=['GET'])
def get_profiles():

    profiles = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profiles))

    return jsonify(all_profiles), 200


@api.route('/signup', methods=['POST'])
def handle_signup():
    response_body = request.get_json()
    profile = Profile(
        email=response_body["email"], password=response_body["password"])
    db.session.add(profile)
    db.session.commit()

    payload = {
        'msg': 'Your account has been registered successfully.',
    }

    return jsonify(payload), 200
