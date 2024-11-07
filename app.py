# Create app.py content
app_code = ""
from flask import Flask, render_template, jsonify
from neo4j import GraphDatabase
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Neo4j Configuration
NEO4J_URI = os.getenv('NEO4J_URI', 'neo4j+s://4e5eeae5.databases.neo4j.io')
NEO4J_USER = os.getenv('NEO4J_USER', 'neo4j')
NEO4J_PASSWORD = os.getenv('NEO4J_PASSWORD', 'Poconoco16!')

# Initialize Neo4j driver
driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))

def get_nodes_by_type(tx, node_type):
    query = f'''
    MATCH (n:{node_type})-[r]-(m)
    RETURN n, r, m
    LIMIT 100
    '''
    result = tx.run(query)
    return [dict(record) for record in result]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/nodes/<node_type>')
def get_nodes(node_type):
    with driver.session() as session:
        try:
            nodes = session.read_transaction(get_nodes_by_type, node_type)
            return jsonify({'success': True, 'data': nodes})
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})

@app.route('/api/node-types')
def get_node_types():
    node_types = [
        'nerve',
        'bone',
        'neuro',
        'region',
        'viscera',
        'muscle',
        'sense',
        'vein',
        'artery',
        'cv',
        'function',
        'sensory',
        'gland',
        'lymph',
        'head',
        'organ',
        'sensation',
        'skin'
    ]
    return jsonify({'success': True, 'node_types': node_types})

@app.route('/api/graph')
def get_full_graph():
    with driver.session() as session:
        try:
            query = '''
            MATCH (n)-[r]-(m)
            RETURN n, r, m
            LIMIT 100
            '''
            result = session.run(query)
            nodes = [dict(record) for record in result]
            return jsonify({'success': True, 'data': nodes})
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})

# Error handling
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({'success': False, 'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'success': False, 'error': 'Internal server error'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
""

# Save the app code to a file
with open('app.py', 'w') as f:
    f.write(app_code)

print("Created app.py with the following features:")
print("- Neo4j connection configuration")
print("- API endpoints for node types and graph data")
print("- Error handling")
print("- Environment variable support")
print("- Development server configuration")
