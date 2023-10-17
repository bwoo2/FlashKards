from flask import Flask, jsonify, abort, current_app
import os, json

app = Flask(__name__)

@app.route('/Topics')
def topics():
    file_path = os.path.join(os.getcwd(), 'data', 'topics.json')
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)
    return jsonify(data)

@app.route('/topics/<string:subject>/<string:topic_name>')
def get_specific_topic(subject, topic_name):
    file_path = os.path.join(current_app.root_path, 'data', 'Data.json')  
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)

    subject_data = data.get(subject, {})  
    topic_name_lower = topic_name.lower()

    for topic in subject_data:
        
        if topic_name_lower in (key.lower() for key in topic):  
            matched_key = next(key for key in topic if key.lower() == topic_name_lower)
            return jsonify({matched_key: topic[matched_key]})

    abort(404, description=f'Topic {topic_name} not found in subject {subject}')  


app.run(debug=True)
