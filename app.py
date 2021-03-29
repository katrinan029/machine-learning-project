import numpy as np
import pandas as pd
import json
import datetime

import sqlalchemy
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import Flask, render_template

from config import username, pw

# ENV = 'dev'

# if ENV == 'dev'
#     app.config['SQLALCHEMY_DATABASE_URI'] = (f'postgresql://{username}:{pw}@localhost:5432/disneyland_db')

# else:
#     app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLalchemy(app)

# Reviews = create_classes(db)

# Create engine
engine = create_engine('postgresql://postgres:' +
                       pw + '@localhost:5432/disneyland_db')
conn = engine.connect()


#create instance of flask app
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/sunburst.html")
def sunburst():
    return render_template("sunburst.html")

@app.route("/disneylandreviews")
def disneylandreviews():
    engine = create_engine('postgresql://postgres:' +
                       pw + '@localhost:5432/disneyland_db')
    conn = engine.connect()

    disneyland_reviews = pd.read_sql("SELECT * FROM reviews_data", conn)

    return jsonify(disneyland_reviews.to_dict("record"))

@app.route("/data_for_plotting")
def data_for_plotting():
    engine = create_engine('postgresql://postgres:' +
                       pw + '@localhost:5432/disneyland_db')
    conn = engine.connect()

    data_for_plotting = pd.read_sql("SELECT * FROM data_for_plotting", conn)

    return jsonify(data_for_plotting.to_dict("record"))

if __name__ == "__main__":
    app.run(debug=True)