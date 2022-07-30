from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#one to one relationship - item on one table will be related to one item on the other.
#both models need a foreign key constraint and relationship that point to each other.
#user table - user settings, user settings will have foreign key that will point to users table, vice versa

#one to many one table can be related to numerous peices of data on another table. exmaple:
#addresses - one user multiple addresses
#on addresses table have FK to point to users table - users table only relationship

#many to many - multipe favorites - association table
#user table / table of other data and table in middle of both 
#left column / right column, users and photos - favoriting photos
#FK on one column to user table and another FK points to photos table

class User(db.Model):
    # __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    admin = db.Column(db.Boolean, unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is active": self.is_active,
            # "admin": self.admin
            # do not serialize the password, its a security breach
        }

class Profile(db.Model):
    # __tablename__ = "profile"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80),  nullable=False)
    image_url = db.Column(db.String(120),  nullable=False)
    bio = db.Column(db.String(250),  nullable=False)
    traits_and_interests = db.Column(db.String(250),  nullable=False)

    def __repr__(self):
        return f'<Profile {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image_url,
            "bio": self.bio,
            "traits and interests": self.traits_and_interests
            # do not serialize the password, its a security breach
        }


# class Ratings(db.Model):
#     __tablename__ = "ratings"


# class Matches(db.Model):
#     __tablename__ = "matches"

# class Inbox(db.Model):
#     __tablename__ = "inbox"

# class Thumbsup(db.Model):
#     __tablename__ = "thumbsup"

# class Thumbsdown(db.Model):
#     __tablename__ = "thumbsdown"

# class Unmatch(db.Model):
#     __tablename__ = "unmatch"
