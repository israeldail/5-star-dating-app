import requests
from app import app
from api.models import db, Profile
from tqdm import tqdm

with app.app_context():

    response = requests.get("https://randomuser.me/api/?results=100")
    users = response.json()
    for user in tqdm(users['results']):
        user_profile = Profile(
            email=user['email'],
            first_name=user['name']['first'],
            last_name=user['name']['last'],
            password=user['login']['password'],
            image_url=user['picture']['large'], 
            bio="this is a random bio", 
            traits_and_interests="random")
        db.session.add(user_profile)
    db.session.commit()
        
    # print(user['results'])