from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)
CORS(app)

login.login_view = 'auth.signin'
login.login_message = "Please Login"
login.login_message_category = "warning"

from app.blueprints.api import bp as api_bp
app.register_blueprint(api_bp)

from app import models