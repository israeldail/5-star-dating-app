"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)



@api.route('/user', methods=['GET'])
def get_user():

     users = User.query.all()
     all_users = list(map(lambda x: x.serialize(), users))

     return jsonify(all_users), 200


@api.route('/profile', methods=['GET'])
def get_profile():

    profile = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile))

    return jsonify(all_profiles), 200

@api.route('/profile/<int:id>', methods=['GET'])
def get_profile_id(id):

    profile = Profile.query.filter_by(id=id).first()
    

    return jsonify(profile.serialize()), 200
