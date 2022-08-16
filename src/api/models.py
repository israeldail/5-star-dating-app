from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID
import uuid

db = SQLAlchemy()

# one to one relationship - item on one table will be related to one item on the other.
# both models need a foreign key constraint and relationship that point to each other.
# user table - user settings, user settings will have foreign key that will point to users table, vice versa

# one to many one table can be related to numerous peices of data on another table. exmaple:
# addresses - one user multiple addresses
# on addresses table have FK to point to users table - users table only relationship

# many to many - multipe favorites - association table
# user table / table of other data and table in middle of both
# left column / right column, users and photos - favoriting photos
# FK on one column to user table and another FK points to photos table


class Profile(db.Model):
    __tablename__ = "profile"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(80),  nullable=True)
    last_name = db.Column(db.String(80),  nullable=True)
    password = db.Column(db.String(80), nullable=False)
    gender_id = db.Column(db.Integer, db.ForeignKey('gender.id'))
    image_url = db.Column(db.String(120), nullable=True)
    bio = db.Column(db.String(250),  nullable=True)
    traits_and_interests = db.Column(db.String(250),  nullable=True)
    age = db.Column(db.Integer, nullable=True)

    gender_options = db.relationship(
        "Gender", backref="gender", uselist=False
    )

    def __repr__(self):
        return f'<Profile {self.first_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "password": self.password,
            "gender": self.gender_id,
            "image": self.image_url,
            "bio": self.bio,
            "traits and interests": self.traits_and_interests,
            "age": self.age
            # do not serialize the password, its a security breach
        }


class Gender(db.Model):
    __tablename__ = "gender"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return "<gender { } >".format(self.name)

    def __str__(self):
        return self.name


class Date(db.Model):
    __tablename__ = "date"
    id = db.Column(db.Integer, primary_key=True)
    p1_id = db.Column(db.Integer, db.ForeignKey('profile.id'))
    p2_id = db.Column(db.Integer, db.ForeignKey('profile.id'))
    p1 = db.relationship('Profile', foreign_keys=[
                         p1_id], backref="dates_created")
    p2 = db.relationship('Profile', foreign_keys=[
                         p2_id], backref="dates_participated")
    p1_accept = db.Column(db.Boolean,  nullable=True)
    p2_accept = db.Column(db.Boolean,  nullable=True)
    p1_rating = db.Column(db.Integer, default=0)
    p2_rating = db.Column(db.Integer, default=0)
    p1_text_reviews = db.Column(db.Text, nullable=True)
    p2_text_reviews = db.Column(db.Text, nullable=True)
    uuid = db.Column(UUID(as_uuid=True), default=uuid.uuid4)

    def serialize(self):
        return {
            "id": self.id,
            "p1_id": self.p1_id,
            "p2_id": self.p2_id,
            "p2_accept": self.p2_accept,
            "p1_rating": self.p1_rating,
            "p2_rating": self.p2_rating,
            "p1_text_reviews": self.p1_text_reviews,
            "p2_text_reviews": self.p2_text_reviews,
            "uuid": self.uuid
        }

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
