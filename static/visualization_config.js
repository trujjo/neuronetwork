<!DOCTYPE html>
<html>
<head>
    <title>Neo4j Force Graph</title>
    <link rel="stylesheet" type="text/css" href="/static/styles.css">
    <script src="https://unpkg.com/neo4j-driver"></script>
    <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
    <div class="filter-tabs">
        <button class="tab-button active" data-tab="tissue">tissue</button>
        <button class="tab-button" data-tab="location">location</button>
        <button class="tab-button" data-tab="relationship">relationship</button>
    </div>
    <div id="tissue" class="tab-content active">
        <div class="tissue-buttons">
            <button class="tissue-button" onclick="toggleButton(this)">nerve</button>
            <button class="tissue-button" onclick="toggleButton(this)">bone</button>
            <button class="tissue-button" onclick="toggleButton(this)">neuro</button>
            <button class="tissue-button" onclick="toggleButton(this)">region</button>
            <button class="tissue-button" onclick="toggleButton(this)">viscera</button>
            <button class="tissue-button" onclick="toggleButton(this)">muscle</button>
            <button class="tissue-button" onclick="toggleButton(this)">sense</button>
            <button class="tissue-button" onclick="toggleButton(this)">vein</button>
            <button class="tissue-button" onclick="toggleButton(this)">artery</button>
            <button class="tissue-button" onclick="toggleButton(this)">cv</button>
            <button class="tissue-button" onclick="toggleButton(this)">function</button>
            <button class="tissue-button" onclick="toggleButton(this)">sensory</button>
            <button class="tissue-button" onclick="toggleButton(this)">gland</button>
            <button class="tissue-button" onclick="toggleButton(this)">lymph</button>
            <button class="tissue-button" onclick="toggleButton(this)">head</button>
            <button class="tissue-button" onclick="toggleButton(this)">organ</button>
            <button class="tissue-button" onclick="toggleButton(this)">sensation</button>
            <button class="tissue-button" onclick="toggleButton(this)">skin</button>
        </div>
    </div>
    <div id="location" class="tab-content">
        <div class="location-group">
            <h3>head</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">brain</button>
                <button class="location-button" onclick="toggleButton(this)">eye</button>
                <button class="location-button" onclick="toggleButton(this)">face</button>
                <button class="location-button" onclick="toggleButton(this)">ear</button>
                <button class="location-button" onclick="toggleButton(this)">nose</button>
                <button class="location-button" onclick="toggleButton(this)">skull</button>
                <button class="location-button" onclick="toggleButton(this)">mouth</button>
                <button class="location-button" onclick="toggleButton(this)">head</button>
            </div>
        </div>
        <div class="location-group">
            <h3>neck</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">cervical spine</button>
                <button class="location-button" onclick="toggleButton(this)">visceral</button>
                <button class="location-button" onclick="toggleButton(this)">vascular</button>
            </div>
        </div>
        <div class="location-group">
            <h3>upper limb</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">wrist</button>
                <button class="location-button" onclick="toggleButton(this)">hand</button>
                <button class="location-button" onclick="toggleButton(this)">fingers</button>
                <button class="location-button" onclick="toggleButton(this)">arm</button>
                <button class="location-button" onclick="toggleButton(this)">forearm</button>
                <button class="location-button" onclick="toggleButton(this)">elbow</button>
                <button class="location-button" onclick="toggleButton(this)">shoulder</button>
            </div>
        </div>
        <div class="location-group">
            <h3>thorax</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">thoracic spine</button>
                <button class="location-button" onclick="toggleButton(this)">ribcage</button>
                <button class="location-button" onclick="toggleButton(this)">heart</button>
                <button class="location-button" onclick="toggleButton(this)">lung</button>
            </div>
        </div>
        <div class="location-group">
            <h3>abdomen</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">lumbar spine</button>
                <button class="location-button" onclick="toggleButton(this)">right upper quadrant</button>
                <button class="location-button" onclick="toggleButton(this)">left upper quadrant</button>
                <button class="location-button" onclick="toggleButton(this)">right lower quadrant</button>
                <button class="location-button" onclick="toggleButton(this)">left lower quadrant</button>
            </div>
        </div>
        <div class="location-group">
            <h3>spine</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">spinal cord</button>
                <button class="location-button" onclick="toggleButton(this)">vertebral</button>
                <button class="location-button" onclick="toggleButton(this)">tracts</button>
                <button class="location-button" onclick="toggleButton(this)">sacral spine</button>
            </div>
        </div>
        <div class="location-group">
            <h3>pelvis</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">sacral spine</button>
                <button class="location-button" onclick="toggleButton(this)">greater pelvis</button>
                <button class="location-button" onclick="toggleButton(this)">lesser pelvis</button>
            </div>
        </div>
        <div class="location-group">
            <h3>lower limb</h3>
            <div class="location-buttons">
                <button class="location-button" onclick="toggleButton(this)">foot</button>
                <button class="location-button" onclick="toggleButton(this)">thigh</button>
                <button class="location-button" onclick="toggleButton(this)">knee</button>
                <button class="location-button" onclick="toggleButton(this)">leg</button>
                <button class="location-button" onclick="toggleButton(this)">ankle</button>
                <button class="location-button" onclick="toggleButton(this)">toes</button>
            </div>
        </div>
    </div>
    <div id="relationship" class="tab-content">
        <div class="relationship-buttons">
            <button class="relationship-button" onclick="toggleButton(this)">includes</button>
            <button class="relationship-button" onclick="toggleButton(this)">perfuses</button>
            <button class="relationship-button" onclick="toggleButton(this)">supplies blood</button>
            <button class="relationship-button" onclick="toggleButton(this)">branches</button>
            <button class="relationship-button" onclick="toggleButton(this)">more details</button>
            <button class="relationship-button" onclick="toggleButton(this)">drains into</button>
            <button class="relationship-button" onclick="toggleButton(this)">lymph drains</button>
            <button class="relationship-button" onclick="toggleButton(this)">innervates</button>
            <button class="relationship-button" onclick="toggleButton(this)">spinal cord</button>
            <button class="relationship-button" onclick="toggleButton(this)">exits or occupies</button>
            <button class="relationship-button" onclick="toggleButton(this)">nerve branches</button>
            <button class="relationship-button" onclick="toggleButton(this)">spinothalamic tract</button>
            <button class="relationship-button" onclick="toggleButton(this)">pumps blood</button>
            <button class="relationship-button" onclick="toggleButton(this)">senses</button>
            <button class="relationship-button" onclick="toggleButton(this)">motor innervation</button>
            <button class="relationship-button" onclick="toggleButton(this)">anterior spinothalamic</button>
            <button class="relationship-button" onclick="toggleButton(this)">lateral spinothalamic</button>
            <button class="relationship-button" onclick="toggleButton(this)">dorsal column</button>
            <button class="relationship-button" onclick="toggleButton(this)">controls</button>
            <button class="relationship-button" onclick="toggleButton(this)">csf flow</button>
            <button class="relationship-button" onclick="toggleButton(this)">releases hormones</button>
            <button class="relationship-button" onclick="toggleButton(this)">sensory input</button>
            <button class="relationship-button" onclick="toggleButton(this)">thalamocortical</button>
            <button class="relationship-button" onclick="toggleButton(this)">corticospinal descending</button>
            <button class="relationship-button" onclick="toggleButton(this)">innervated by</button>
            <button class="relationship-button" onclick="toggleButton(this)">spinothalamic decussation</button>
            <button class="relationship-button" onclick="toggleButton(this)">pyramidal decussation</button>
            <button class="relationship-button" onclick="toggleButton(this)">corticospinal termination</button>
        </div>
    </div>
    <div id="visualization"></div>
    <button id="fetch-nodes" class="location-button">give me 100 random nodes</button>
    <button id="fetch-random-nodes" class="location-button">show random nodes with relationships</button>
    <div id="status">checking neo4j connection...</div>
    <script src="/static/visualization_config.js"></script>
    <script>
        function toggleButton(button) {
            button.classList.toggle('active');
        }

        document.addEventListener('DOMContentLoaded', () => {
            initDriver();
        });

        window.onbeforeunload = () => {
            if (driver) {
                driver.close();
            }
        };
    </script>
</body>
</html>
