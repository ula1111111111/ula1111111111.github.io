---
layout: default
title: "Interactive Analysis: Sector Leadership Heatmaps and Networks"
---
<!-- Load Plotly from CDN -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<h2>Interactive Sector Leadership Heatmap</h2>
<p>
  This heatmap shows, for each sector, how strongly each stock (rows) appears to <b>lead</b> others (columns)
  based on our cross-correlation + Granger causality analysis.
</p>

<label for="sectorSelect"><b>Select sector:</b></label>
<select id="sectorSelect"></select>

<div id="leadership-heatmap" style="width:100%;max-width:900px;height:600px;"></div>

<script>
// Adjust this URL if needed (depends on where you saved the JSON file)
const DATA_URL = "{{ '/assets/leadership_heatmap.json' | relative_url }}";
let heatmapData = null;

function populateSectorSelect(sectors) {
  const sel = document.getElementById('sectorSelect');
  sel.innerHTML = '';
  sectors.forEach(sec => {
    const opt = document.createElement('option');
    opt.value = sec;
    opt.textContent = sec;
    sel.appendChild(opt);
  });
}

function plotSector(sector) {
  if (!heatmapData || !heatmapData[sector]) return;

  const data = heatmapData[sector];
  const leaders = data.leaders;
  const followers = data.followers;
  const z = data.z;

  const trace = {
    z: z,
    x: followers,
    y: leaders,
    type: 'heatmap',
    hoverongaps: false,
    colorscale: [
    [0, '#fde2e4ff'],
    [0.5, '#f582ae'],
    [1, '#ea1792ff']
    ],
    colorbar: { title: 'Correlation' }
  };

  const layout = {
    title: 'Leader → Follower Correlations in ' + sector,
    xaxis: {
      title: 'Follower',
      tickangle: -45,
      automargin: true
    },
    yaxis: {
      title: 'Leader',
      automargin: true
    },
    margin: { t: 50, l: 100, r: 20, b: 120 }
  };

  Plotly.newPlot('leadership-heatmap', [trace], layout);
}

// Load JSON, then initialize dropdown and default plot
fetch(DATA_URL)
  .then(resp => resp.json())
  .then(json => {
    heatmapData = json;
    const sectors = Object.keys(heatmapData).sort();
    if (sectors.length === 0) {
      console.warn("No sectors in leadership_heatmap.json");
      return;
    }
    populateSectorSelect(sectors);
    plotSector(sectors[0]);

    document.getElementById('sectorSelect').addEventListener('change', (e) => {
      plotSector(e.target.value);
    });
  })
  .catch(err => {
    console.error("Failed to load leadership heatmap data:", err);
  });
</script>



<!-- D3.js from CDN -->
<script src="https://d3js.org/d3.v7.min.js"></script>

<h2>Leader–Follower Network Graph (per sector)</h2>
<p>
  Each node is a stock. Arrows point from <b>leader → follower</b>. 
  Edge thickness reflects the strength of the relationship (correlation).
</p>

<label for="networkSectorSelect"><b>Select sector:</b></label>
<select id="networkSectorSelect"></select>

<div id="network-container" style="width:100%; max-width:900px; height:600px; border:1px solid #ccc; margin-top:10px;"></div>

<script>
const DATA_URL_NETWORK = "{{ '/assets/leadership_network.json' | relative_url }}";

let networkData = null;
let svg, linkGroup, nodeGroup, labelGroup, simulation;
const width = 900;
const height = 600;

function initSvg() {
  const container = document.getElementById('network-container');
  container.innerHTML = ''; // clear previous svg if any

  svg = d3.select('#network-container')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${width} ${height}`);

  linkGroup = svg.append('g').attr('class', 'links');
  nodeGroup = svg.append('g').attr('class', 'nodes');
  labelGroup = svg.append('g').attr('class', 'labels');
}

function populateNetworkSectorSelect(sectors) {
  const sel = document.getElementById('networkSectorSelect');
  sel.innerHTML = '';
  sectors.forEach(sec => {
    const opt = document.createElement('option');
    opt.value = sec;
    opt.textContent = sec;
    sel.appendChild(opt);
  });
}

function plotNetworkSector(sector) {
  if (!networkData || !networkData[sector]) return;

  console.log("Plotting sector:", sector);

  const data = networkData[sector];
  const nodes = data.nodes.map(d => Object.assign({}, d)); // shallow copy
  const links = data.links.map(d => Object.assign({}, d));

  console.log("Nodes:", nodes.length, "Links:", links.length);

  // Initialize SVG & groups
  initSvg();

  // Force simulation
  simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(120).strength(0.5))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(30));

  // Edge thickness based on |corr|
  const corrVals = links.map(d => Math.abs(d.corr));
  const corrMin = d3.min(corrVals);
  const corrMax = d3.max(corrVals);
  const widthScale = d3.scaleLinear()
    .domain([corrMin || 0, corrMax || 1])  // avoid undefined if no links
    .range([1, 5]);

  // Draw links (edges)
  const link = linkGroup.selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', '#b039cadc')
    .attr('stroke-opacity', 0.7)
    .attr('stroke-width', d => widthScale(Math.abs(d.corr)));

  // Draw nodes
  const node = nodeGroup.selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', 8)
    .attr('fill', '#e60b78ff')
    .attr('stroke', '#333')
    .attr('stroke-width', 1.0)
    .call(d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded));

  // Tooltip via <title>
  node.append('title')
    .text(d => d.id);

  // Labels
  const labels = labelGroup.selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .attr('font-size', 10)
    .attr('dx', 10)
    .attr('dy', 3)
    .text(d => d.id);

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    labels
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  });

  function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}

// Load JSON and initialize
fetch(DATA_URL_NETWORK)
  .then(resp => resp.json())
  .then(json => {
    console.log("Loaded network data:", json);
    networkData = json;
    const sectors = Object.keys(networkData).sort();
    if (!sectors.length) {
      console.warn('No sectors in leadership_network.json');
      return;
    }
    populateNetworkSectorSelect(sectors);
    plotNetworkSector(sectors[0]);

    document.getElementById('networkSectorSelect').addEventListener('change', (e) => {
      plotNetworkSector(e.target.value);
    });
  })
  .catch(err => {
    console.error('Failed to load network data:', err);
  });
</script>

<div style="margin-top:15px; padding:10px; border-left:4px solid #ff4d88; background:#ffe5ec;">
  <b>Legend:</b><br>
  • <b>Nodes</b> represent companies in the selected sector.<br>
  • <b>Arrows</b> point from the <b>Leader → Follower</b> stock.<br>
  • <b>Thickness of arrows</b> represents the strength of the statistical link
    (stronger cross-correlation at the optimal positive lag).<br>
  • <b>Hover</b> over a node to see the company ticker.<br>
  • <b>Drag</b> nodes to explore the structure of the sector.
</div>
