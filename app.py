import numpy as np
import pandas as pd
import json
import datetime
import os

import sqlalchemy
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import Flask, render_template

from flask_sqlalchemy import SQLAlchemy

from config import *

#create instance of flask app
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Reviews = create_classes(db)

# Create engine
engine = create_engine('postgresql://'+username+':' +
                       pw + '@'+host+':5432/'+database)
conn = engine.connect()




@app.route("/")
def home():
    return render_template("index.html")

@app.route("/sunburst")
def sunburst():
    return render_template("sunburst.html")

@app.route("/common_bigrams")
def common_bigrams():
    return render_template("common_bigrams.html")

@app.route("/filtered_common_bigrams")
def filtered_common_bigrams():
    return render_template("filtered_common_bigrams.html")

@app.route("/disneylandreviews")
def disneylandreviews():

    disneyland_reviews = pd.read_sql("SELECT * FROM reviews_data", conn)

    return jsonify(disneyland_reviews.to_dict("record"))

@app.route("/data_for_plotting")
def data_for_plotting():

    data_for_plotting = pd.read_sql("SELECT * FROM data_for_plotting", conn)

    return jsonify(data_for_plotting.to_dict("record"))

if __name__ == "__main__":
    app.run(debug=True)