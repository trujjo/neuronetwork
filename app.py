from flask import Flask, render_template_string, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template_string(html_template)

@app.route('/refresh-data')
def refresh_data():
    nodes = [
        {'id': '1', 'label': 'Node 1', 'properties': {'location': 'A', 'type': 'Type1'}},
        {'id': '2', 'label': 'Node 2', 'properties': {'location': 'B', 'type': 'Type2'}}
    ]
    edges = [{'from': '1', 'to': '2', 'label': 'CONNECTS_TO'}]
    
    return jsonify({
        'success': True,
        'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        'graph_data': {'nodes': nodes, 'edges': edges},
        'filters': {
            'locations': ['A', 'B'],
            'types': ['Type1', 'Type2']
        }
    })

html_template = '''
<!DOCTYPE html>
<html>
<head>
    <title>Neo4j Graph Viewer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container { margin-top: 50px; }
        .search-box { margin-bottom: 20px; }
        .refresh-section { margin-bottom: 20px; }
        .last-updated { font-size: 0.9em; color: #666; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Neo4j Graph Explorer</a>
        </div>
    </nav>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="refresh-section">
                    <button id="refreshButton" class="btn btn-primary">Refresh Data</button>
                    <p class="last-updated">Last updated: <span id="lastUpdated">Never</span></p>
                </div>
                <div class="search-box">
                    <input type="text" class="form-control" placeholder="Search nodes... (Coming soon)">
                </div>
                <div id="graph-container">
                    <h3>Graph Visualization</h3>
                    <div id="visualization-area"></div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.getElementById('refreshButton').addEventListener('click', function() {
            fetch('/refresh-data')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('lastUpdated').textContent = data.timestamp;
                    // Here you can add code to update the visualization
                    alert('Data refreshed successfully!');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error refreshing data. Please try again.');
                });
        });
    </script>
</body>
</html>
'''

if __name__ == '__main__':
    app.run(debug=True)
