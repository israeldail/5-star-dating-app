from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Profile
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", Profile)
    password = request.json.get("password", Profile)
    if email != email or password != password:
        return jsonify({"msg": "Wrong username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/profile', methods=['GET'])
def get_profile():

    profile = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile))

    return jsonify(all_profiles), 200

@api.route('/profile/<int:id>', methods=['GET'])
def get_profile_id(id):

    profile = Profile.query.filter_by(id=id).first()
    

    return jsonify(profile.serialize()), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    password = request.json.get('password')
    
   
    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter an fname',400
    if not last_name:
        return 'You need to enter an lname',400
    if not password:
        return 'You need to enter a password', 400

    # check_user = User.query.filter_by(email=email)
    check_user = Profile.query.filter_by(email=email).first()

    if check_user :
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    profile = Profile(email=email, first_name=first_name, last_name=last_name, password=password, gender=gender, is_active=True)

    db.session.add(profile)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'profile': profile.serialize()
    }

    return jsonify(payload), 200



