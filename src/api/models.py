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

class Profile(db.Model):
    # __tablename__ = "profile"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(80),  nullable=False)
    last_name = db.Column(db.String(80),  nullable=False)
    password = db.Column(db.String(80), nullable=False)
    gender = db.Column(db.String(80),db.ForeignKey('gender.id'))
    image_url = db.Column(db.String(120), nullable=False)
    bio = db.Column(db.String(250),  nullable=False)
    traits_and_interests = db.Column(db.String(250),  nullable=False)

    gender_options= db.relationship(
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
            "gender": self.gender,
            "image": self.image_url,
            "bio": self.bio,
            "traits and interests": self.traits_and_interests
            # do not serialize the password, its a security breach
        }

class Gender(db.Model):
    __tablename__ = "gender"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)


    def __repr__ (self):
        return "<gender { } >".format(self.name)

    def __str__ (self):
        return self.name 


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
