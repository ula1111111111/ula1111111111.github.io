---
layout: home
title: ""
subtitle: ""

---
<div class="hero-full">
  <div class="hero-full-inner">
    <div class="hero-full-text">
      <h1>The Pulse of the Market: Who Sets the Rhythm?</h1>
      <p>Detecting leader–follower dynamics in stock returns using cross-correlation and Granger causality.</p>
    </div>

    <div class="hero-full-graphic" aria-label="Leader-follower lag illustration">
      <svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" role="img">
        <!-- faint guide lines -->
        <g opacity="0.25">
          <line x1="20" y1="150" x2="500" y2="150" stroke="#ff4d88" stroke-width="2"/>
          <line x1="20" y1="105" x2="500" y2="105" stroke="#ff4d88" stroke-width="2"/>
          <line x1="20" y1="60"  x2="500" y2="60"  stroke="#ff4d88" stroke-width="2"/>
        </g>

        <!-- leader (pink) -->
        <polyline
          points="25,135 95,118 165,128 235,85 305,98 375,62 445,78 495,40"
          fill="none"
          stroke="#ff4d88"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- follower (blue dashed, lagged) -->
        <polyline
          points="25,150 95,142 165,120 235,128 305,92 375,104 445,70 495,90"
          fill="none"
          stroke="#8ecae6"
          stroke-width="8"
          stroke-dasharray="10 10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- arrows indicating "leads" -->
        <defs>
          <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <polygon points="0 0, 12 6, 0 12" fill="#ff4d88"></polygon>
          </marker>
        </defs>

        <line x1="210" y1="120" x2="255" y2="105" stroke="#ff4d88" stroke-width="6" marker-end="url(#arrowhead)"/>
        <line x1="350" y1="92"  x2="395" y2="77"  stroke="#ff4d88" stroke-width="6" marker-end="url(#arrowhead)"/>
        <line x1="430" y1="72"  x2="470" y2="58"  stroke="#ff4d88" stroke-width="6" marker-end="url(#arrowhead)"/>
      </svg>
    </div>
  </div>
</div>

<h2 id="content">The Pulse of the Market: Who Sets the Rhythm?</h2>


Here we do the whole storytelling and introduction about the project, nice graphics (story related, check how the best projwect from last years look like) and research questions. TASK#1

__Motivations:__

Financial markets are often portrayed as dominated by a handful of giants, but do the biggest companies truly drive the movements of their entire industry? This project investigates whether industry leaders systematically influence smaller peers within NASDAQ sectors. Using historical stock price data enriched with external metadata, we will group companies by industry, develop objective criteria to rank them, and analyze how information and volatility propagate across the market. Our methodology combines time-series modeling and Granger causality testing to detect leader-follower patterns in price dynamics. We will also assess how persistent these relationships are and how they evolve during major market events. Another component compares value-weighted ETFs with equally weighted portfolios to quantify whether performance is concentrated among large-cap leaders or broadly distributed. By highlighting where price discovery originates, from dominant firms or distributed behavior, this project offers insights into market power and the dynamics of information diffusion.


<div class="research-questions-box" markdown="1">
## Research Questions

1. **How do we define a "leader" and a "follower" in stock movements?** How to sectorize and hierarchize company?
2. **How can we detect directional influence between stocks within a sector?** (use daily return time series, detect this using lagged correlations or Granger causality)
3. **Are leader-follower dynamics consistent across sectors?** Do some sectors have stronger leadership patterns than others?
4. **How stable are these influence patterns over time,** and how do they evolve during major market events?
5. **What does ETF analysis reveal about the performance of market leaders,** sector averages, and followers, and about overall market concentration?
6. **How does survivorship bias impact the validity of our conclusions,** and what steps can be taken to reduce its effects? and Which time window should we analyze?

</div>

<style>
.research-questions-box {
    background-color: #f8f9fa;
    border-left: 4px solid #8b0000; /* Merlot red */
    padding: 20px;
    margin: 30px 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.research-questions-box h2 {
    color: #8b0000; /* Merlot red */
    margin-top: 0;
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 10px;
}

.research-questions-box li {
    margin-bottom: 15px;
    line-height: 1.6;
}
</style>



**Dataset 1: NASDAQ Company List**
- Source: NASDAQ dataset (`companylist.csv`)
- Contents: Company information only (no ETFs)
- Key fields: Symbol, Name, MarketCap, Sector, Industry, IPO year
- Purpose: Provides sector classification and market capitalization for companies

**Dataset 2: Stock Market Dataset**
- Source: Kaggle Stock Market Dataset
- Contains: Stocks, ETFs, and symbols metadata
- Components:
  - **`stocks/` folder**: Individual CSV files for each stock with daily price data (OHLCV + Adjusted Close)
  - **`etfs/` folder**: Individual CSV files for each ETF with daily price data (OHLCV + Adjusted Close)
  - **`symbols_valid_meta.csv`**: Metadata for all securities (stocks AND ETFs), including ETF flags, exchange listings, security names
- Purpose: Provides historical price data and security type classification (stock vs ETF)


---

<h2 id="exploring">Exploring The Market</h2>

Here we present some initial explorations of the datasets used in this project. The goal is to understand the structure and characteristics of the data before diving into deeper analysis. We will look at summary statistics, visualizations, and preliminary findings that can guide our subsequent modeling efforts. Just like Amine did for the milestone2. TASK#2 to copy all the results form exploration in milestone2 and add storytelling.

---

<h2 id="hierarchizing">Hierarchizing Market Participants</h2>

<!-- {% include_relative hierarchizing.md %} -->

---

<h2 id="analysis">Analysis of Stock Leadership</h2>

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


---

<h2 id="etfsvsequallyweighted">ETFs vs Equal Weighted Portfolios</h2>

{% include_relative etfsvsequallyweighted.md %}

---

<h2 id="example">Example</h2>

{% include_relative example.md %}
