
import click
from api.models import db, Profile


"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-profiles" that you can run from the command line
    by typing: $ flask insert-test-profiles 5
    Note: 5 is the number of profiles to add
    """
    @app.cli.command("insert-test-profiles") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test profiles")
        for x in range(1, int(count) + 1):
            profile = Profile()
            profile.email = "test_profile" + str(x) + "@test.com"
            profile.password = "123456"
            profile.is_active = True
            db.session.add(profile)
            db.session.commit()
            print("profile: ", profile.email, " created.")

        print("All test profiles created")

        ### Insert the code to populate others tables if needed