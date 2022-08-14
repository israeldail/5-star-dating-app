from flask import Flask, request, jsonify, url_for, Blueprint, make_response
from api.models import db, Profile, Date
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route("/", methods=["GET"])
def index():
    return " something crazy", 200


@api.route("/token", methods=["GET", "POST"])
def create_token():

    data = request.get_json()

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
    # response = make_response(
    #     jsonify({'message': 'login successfully', 'access_token': access_token}), 200,)
    # response.headers["Content-Type"] = "application/json"

    return jsonify(access_token=access_token), 200


@api.route('/profiles', methods=['GET'])
@jwt_required()
def get_profiles():

    profiles = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profiles))

    return jsonify(all_profiles), 200

# // filter out all the profiles that doesnt have any date table


@api.route('/queue', methods=['GET'])
@jwt_required()
def get_queue():
    active_user = Profile.query.filter_by(email=get_jwt_identity()).first()
    dates = Date.query.filter((Date.p1_id == active_user.id) | (
        Date.p2_id == active_user.id)).all()

    profiles = Profile.query.all()
    # we want to loop through the profile to remove any profile that is in the dates object under p1_id or p2_id
    # queue =
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


@api.route('/profile/<int:profile_id>', methods=['GET'])
def get_person(profile_id):
    person = Profile.query.get(profile_id)
    if person is None:
        raise APIException("user not found", status_code=404)
    one_person = person.serialize()

    db.session.commit()

    return (jsonify(one_person)), 200


@api.route('/profile/dates', methods=['POST'])
@jwt_required()
def get_a_date():
    p2 = request.json.get("p2")
    active_user = Profile.query.filter_by(email=get_jwt_identity()).first()
    p2_user = Profile.query.filter_by(id=p2).first()

    date_request = Date(p1=active_user, p2=p2_user)
    db.session.add(date_request)
    db.session.commit()

    date_request = Date.query.filter_by(
        p1=active_user).order_by(Date.id.desc()).first()
    print(date_request.uuid)

    return jsonify(msg="Date created successfully", date_id=date_request.uuid), 200


@api.route('/profile/dates/<string:date_uuid>', methods=['POST'])
@jwt_required()
def get_date_uuid(date_uuid):
    active_user = Profile.query.filter_by(email=get_jwt_identity()).first()
    accept = request.json.get("accept")
    new_date = Date.query.filter_by(uuid=date_uuid).first()

    # new_date.p2 = active_user
    new_date.accept = accept
    db.session.merge(new_date)
    db.session.commit()

    return jsonify(msg="Date accepted", date_id=new_date.uuid), 200
