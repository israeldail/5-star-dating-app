"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)



@api.route('/user', methods=['GET'])
def get_user():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/profile', methods=['GET'])
def get_profile():

    profile = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile))

    return jsonify(all_profiles), 200