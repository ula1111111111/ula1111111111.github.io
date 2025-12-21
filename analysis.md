
---
Rather than assuming leadership a priori, we let the data reveal which companies tend to move first.

We conclude by revisiting our main research questions and summarizing the empirical insights provided by the leader–follower analysis.
<section style="max-width:900px; line-height:1.65; font-size:16px;">
  <hr style="margin:22px 0;">

  <p><em>How do we define a “leader” and a “follower” in stock movements?</em></p>

  <p>
    A <strong>leader</strong> is a stock whose past daily returns improve the prediction
    of another stock’s future returns. A <strong>follower</strong> is a stock that reacts
    with a short delay to movements in the leader.
  </p>

  <p>
    In practice, leadership is assigned only when two conditions are met:
  </p>

  <ul>
    <li>a statistically significant lead–lag correlation at a positive time shift, and</li>
    <li>a Granger causality test confirming predictive precedence in one direction.</li>
  </ul>

  <hr style="margin:22px 0;">

  <p><em>How can directional influence be detected within sectors?</em></p>

  <p>
    Directional influence is detected through a two-step statistical pipeline.
    First, cross-correlation analysis identifies candidate lead–lag relationships.
    Second, Granger causality tests verify whether past returns of one stock
    improve prediction of another beyond its own history.
  </p>

  <p>
    Only relationships supported by both steps are retained, ensuring that
    detected links reflect directional predictability rather than simple co-movement.
  </p>

  <hr style="margin:22px 0;">

  <p><em>Can daily return time series reveal short-term influence?</em></p>

  <p>
    Yes. Daily return series are sufficiently granular to reveal lead–lag effects
    over horizons of a few trading days. While these effects are moderate in
    magnitude, they are statistically meaningful and consistently detected
    across multiple sectors.
  </p>

  <hr style="margin:22px 0;">

  <p><em>Are leader–follower dynamics consistent across sectors?</em></p>

  <p>
    No. Leadership patterns are strongly sector-dependent. Some sectors exhibit
    structured hierarchies with multiple leaders, others display only a few isolated
    leader–follower pairs, and several sectors show minimal detectable leadership.
  </p>

  <p>
    Sectors such as Health Care, Energy, and Transportation tend to form denser
    and more structured leadership networks, suggesting faster or more coordinated
    information transmission within these industries.
  </p>

</section>


---

<!-- Financial markets rarely move at random. Often, price changes in one company are followed—sometimes within days—by similar or opposite movements in others.
Our goal is to detect these short-term leader–follower relationships within sectors and visualize how information appears to propagate across firms.

Rather than assuming leadership a priori, we let the data reveal which companies tend to move first.

Within each sector, we compare companies pairwise and ask a simple question:

If company A moves today, does company B tend to move shortly afterward?

To answer this, we shift one return series forward in time and measure how strongly it aligns with another.
We test several short delays (up to a few trading days) and retain the lag that produces the strongest relationship.

This step acts as a screening mechanism, identifying candidate leader–follower pairs.

Correlation alone is not enough: two stocks may move together without one leading the other.
To establish directionality, we apply Granger causality tests, which check whether past returns of one stock improve the prediction of another stock’s future returns beyond what the stock’s own history explains.

Only pairs that pass this test in one direction—and not the reverse—are retained.
This ensures that detected relationships reflect predictive precedence, not simple co-movement.
We repeat this process sector by sector, restricting attention to a limited number of representative firms to maintain interpretability.

The final output is a directed network:

- nodes represent companies,

- arrows point from leaders to followers,

- arrow thickness reflects the strength of the detected relationship.

These networks reveal whether leadership is centralized around a few firms or distributed across multiple channels. -->





<div style="max-width:900px;margin:24px 0;line-height:1.6;font-size:16px;">
  <div style="padding:16px 18px;border-radius:12px;background:linear-gradient(90deg, rgba(255,77,136,.12), rgba(176,57,202,.10));border:1px solid rgba(176,57,202,.25);">
    <h2 style="margin:0 0 6px 0;">Detecting Leadership in Stock Movements</h2>
    <p style="margin:0;color:#222;">
      Financial markets rarely move in isolation. Price changes in one firm are often followed—sometimes within days—by reactions in others.
      We search for short-term <b>leader → follower</b> relationships within sectors and visualize how information appears to flow across companies.
    </p>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">
    <div style="padding:14px 16px;border-radius:12px;background:#fff;border:1px solid rgba(0,0,0,.10);box-shadow:0 6px 18px rgba(0,0,0,.05);">
      <h3 style="margin:0 0 6px 0;font-size:16px;">What “leadership” means here</h3>
      <p style="margin:0;color:#333;">
        An arrow from <b>A</b> to <b>B</b> means that <b>A tends to move first</b> and <b>B tends to react afterward</b> over a short delay.
        This is a statistical notion of predictive precedence, not a claim of true economic causality.
      </p>
    </div>

    <div style="padding:14px 16px;border-radius:12px;background:#fff;border:1px solid rgba(0,0,0,.10);box-shadow:0 6px 18px rgba(0,0,0,.05);">
      <h3 style="margin:0 0 6px 0;font-size:16px;">How a link is selected</h3>
      <p style="margin:0;color:#333;">
        We first screen for short lead–lag alignments between two return series across small delays (up to 7 trading days).
        Then we keep only pairs that pass a directional predictability test (Granger causality) in one direction but not the reverse.
      </p>
    </div>
  </div>

  <div style="margin-top:12px;padding:12px 14px;border-radius:12px;border-left:4px solid #ff4d88;background:#ffe5ec;color:#222;">
    <b>How to read the plots:</b> Heatmaps show the strength of validated leader–follower correlations. Network graphs show the structure:
    hubs, chains, and isolated followers. Thicker arrows indicate stronger relationships.
  </div>
</div>



<details class="math-collapse">
  <summary>Mathematical details</summary>

  <div class="math-card">
    <h3>Lead–Lag Cross-Correlation</h3>
    <p>
      For each ordered pair of stocks \( (i,j) \) within a sector, we test whether
      movements in \( i \) tend to precede movements in \( j \) by computing:
    </p>
    \[
    \rho_{ij}(k)
    = \mathrm{Corr}\!\big(r_{i,t},\, r_{j,t+k}\big),
    \qquad k = 1,\dots,7
    \]
    <div class="math-highlight">
      If the strongest correlation occurs at a positive lag \( k>0 \),
      stock \( i \) is treated as a candidate leader of stock \( j \).
    </div>
    <h3>Granger Causality Test</h3>
    <p>
      To establish directionality, we compare a baseline autoregressive model
      to an augmented model that includes lagged returns of the leader:
    </p>
    \[
    r_{j,t}
    = \alpha
    + \sum_{\ell=1}^{p} \beta_\ell r_{j,t-\ell}
    + \sum_{\ell=1}^{p} \gamma_\ell r_{i,t-\ell}
    + \varepsilon_t,
    \qquad p = 3
    \]
    <div class="math-highlight">
      A directed link \( i \rightarrow j \) is retained only if the coefficients
      \( \gamma_\ell \) are jointly significant, and no reverse causality is detected.
    </div>

  </div>
</details>


<!-- Load Plotly from CDN -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<h2>Interactive Sector Leadership Heatmap</h2>
<p>
  This heatmap shows, for each sector, how strongly each stock (rows) appears to <b>lead</b> others (columns)
  based on our cross-correlation.
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
  Edge thickness reflects the strength of the relationship (|correlation|).
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
  container.innerHTML = '';

  svg = d3.select('#network-container')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${width} ${height}`);

  // Arrowhead marker
  const defs = svg.append("defs");
  defs.append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 18)          // distance from node center
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("fill", "#b039cadc");

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

  const data = networkData[sector];
  const nodes = data.nodes.map(d => Object.assign({}, d));
  const links = data.links.map(d => Object.assign({}, d));

  initSvg();

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
    .domain([corrMin || 0, corrMax || 1])
    .range([1, 5]);

  // Draw links with arrowheads
  const link = linkGroup.selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', '#b039cadc')
    .attr('stroke-opacity', 0.7)
    .attr('stroke-width', d => widthScale(Math.abs(d.corr)))
    .attr('marker-end', 'url(#arrowhead)');

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

  node.append('title').text(d => d.id);

  // Labels
  const labels = labelGroup.selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .attr('font-size', 10)
    .attr('dx', 10)
    .attr('dy', 3)
    .text(d => d.id);

  // Offset arrow end so it doesn't sit inside the target node
  const targetOffset = 10; // ~ node radius + margin

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        return d.target.x - (dx / dist) * targetOffset;
      })
      .attr('y2', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        return d.target.y - (dy / dist) * targetOffset;
      });

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
    networkData = json;
    const sectors = Object.keys(networkData).sort();
    if (!sectors.length) return;

    populateNetworkSectorSelect(sectors);
    plotNetworkSector(sectors[0]);

    document.getElementById('networkSectorSelect').addEventListener('change', (e) => {
      plotNetworkSector(e.target.value);
    });
  })
  .catch(err => console.error('Failed to load network data:', err));
</script>

<div style="margin-top:15px; padding:10px; border-left:4px solid #ff4d88; background:#ffe5ec;">
  <b>Legend:</b><br>
  • <b>Nodes</b> represent companies in the selected sector.<br>
  • <b>Arrows</b> point from the <b>Leader → Follower</b> stock.<br>
  • <b>Thickness of arrows</b> represents the strength of the statistical link (|correlation|).<br>
  • <b>Hover</b> over a node to see the ticker.<br>
  • <b>Drag</b> nodes to explore the structure.
</div>


### Sector-by-Sector Leadership Insights

The analysis identifies sparse but structured leader–follower relationships within sectors. Rather than dense interactions, leadership effects concentrate around a limited number of firms and propagate in clearly defined directions.

### Basic Industries

Leadership is shared among several industrial firms, with **Steel Dynamics (STLD)**, **WD-40 Company (WDFC)**, and **Matrix Service (MTRX)** acting as upstream movers. Their influence propagates toward firms such as **Stericycle (SRCL)** and **Codexis (CDXS)**, forming a layered but non-centralized structure.

### Capital Goods

A small group of technology-oriented firms drives leadership. **II-VI (IIVI)** and **Mercury Systems (MRCY)** initiate movements that are followed by **Nordson (MKSI)** and **FLIR Systems (FLIR)**, producing clear and directional influence paths.

### Consumer Durables

Leadership is fragmented across independent channels. **American Superconductor (AMSC)**, **Central Garden & Pet (CENT)**, and **iRobot (IRBT)** each lead specific followers, resulting in localized influence rather than a single sector-wide hierarchy.

### Consumer Non-Durables

The sector is characterized by a few strong but isolated links. **Fossil Group (FOSL)** leads **Crocs (CROX)**, while **Columbia Sportswear (COLM)** influences **Sanderson Farms (SAFM)**, with limited interaction beyond these pairs.

### Consumer Services

Leadership is highly concentrated. **DISH Network (DISH)** emerges as the sole leader, with its movements preceding those of **Starbucks (SBUX)**, indicating a narrow but detectable information channel.

### Energy

Energy exhibits one of the strongest leadership structures. Firms such as **TUSK Energy (TUSK)**, **Diamondback Energy (FANG)**, and **Viper Energy (VNOM)** influence multiple downstream companies, including **Centennial Resource Development (CDEV)**, reflecting strong and widespread propagation effects.

### Finance

Leadership is distributed among several financial institutions. **Carlyle Group (CG)**, **SEI Investments (SEIC)**, and **Principal Financial (PFG)** influence firms such as **Ameritrade (AMTD)** and **T. Rowe Price (TROW)**, forming a sparse but multi-path network.

### Health Care

Health Care displays rich internal structure. **Biomarín (BMRN)**, **Intuitive Surgical (ISRG)**, and **Gilead Sciences (GILD)** act as prominent leaders, influencing firms such as **Vertex Pharmaceuticals (VRTX)** and **Hologic (HOLX)** through both positive and negative effects.

### Miscellaneous

Leadership is spread across platform-oriented firms. **HealthEquity (HQY)**, **CoStar Group (CSGP)**, and **MercadoLibre (MELI)** influence several followers, including **Zillow Group (ZG)** and **GoPro (GPRO)**, producing moderate but consistent directional links.

### Public Utilities

The sector shows multiple localized leadership relationships rather than a dominant hub. Firms such as **NextEra Energy (NEXT)**, **ADTRAN (ADTN)**, and **Spark Energy (SPKE)** influence utilities like **Clean Energy Fuels (CLNE)** and **Casella Waste Systems (CWST)**.

### Technology

Leadership is driven by large platform and semiconductor firms. **Broadcom (AVGO)** leads both **Apple (AAPL)** and **Microsoft (MSFT)**, while **Meta Platforms (FB)** and **Adobe (ADBE)** form an opposing influence channel, highlighting delayed information transmission.

### Transportation

Transportation exhibits multi-channel leadership across logistics and airlines. **Old Dominion Freight Line (ODFL)**, **Hub Group (HUBG)**, and **JetBlue (JBLU)** influence firms such as **Ryder (RYAAY)** and **Werner Enterprises (WERN)**, forming a well-connected but non-centralized network.

### Takeaway

Across sectors, leadership effects are directional, heterogeneous, and concentrated. A limited set of firms consistently act as short-term influencers, while most stocks respond passively or exhibit no detectable leadership dynamics.



