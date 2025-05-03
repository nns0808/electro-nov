# from flask import Flask, request, jsonify, render_template
# from flask_cors import CORS
# import sqlite3

# app = Flask(__name__)
# CORS(app)

# # Database initialization
# def init_db():
#     conn = sqlite3.connect("electro_nov.db")
#     conn.execute("""
#         CREATE TABLE IF NOT EXISTS testimonials (
#             id INTEGER PRIMARY KEY AUTOINCREMENT,
#             name TEXT NOT NULL,
#             message TEXT NOT NULL
#         )
#     """)
#     conn.close()

# @app.route("/")
# def home():
#     conn = sqlite3.connect("electro_nov.db")
#     cursor = conn.cursor()
#     cursor.execute("SELECT name, message FROM testimonials")
#     testimonials = cursor.fetchall()
#     conn.close()
#     return render_template("index.html", testimonials=testimonials)

# @app.route("/api/testimonials", methods=["POST"])
# def add_testimonial():
#     data = request.get_json()
#     name = data.get("name")
#     message = data.get("message")
#     if not name or not message:
#         return jsonify({"error": "Missing name or message"}), 400

#     conn = sqlite3.connect("electro_nov.db")
#     cursor = conn.cursor()
#     cursor.execute("INSERT INTO testimonials (name, message) VALUES (?, ?)", (name, message))
#     conn.commit()
#     conn.close()
#     return jsonify({"status": "success"}), 201

# if __name__ == "__main__":
#     init_db()
#     app.run(debug=True)


