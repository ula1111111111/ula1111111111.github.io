
---

### Answering research Questions and Key Findings

1. How do we define a “leader” and a “follower” in stock movements?

A **leader** is defined as a stock whose past daily returns improve the prediction of another stock’s future returns.
A **follower** is a stock whose returns respond with a short delay to movements in the leader.

In practice, leadership is assigned only when both:

- a lead–lag correlation is detected at a positive time shift, and

- a Granger causality test confirms predictive precedence in one direction.

2. How can we detect directional influence between stocks within a sector?

Directional influence is detected using a two-step statistical pipeline:

Cross-correlation analysis to identify potential lead–lag relationships.

Granger causality testing to confirm directional predictability.

Only relationships supported by both steps are retained.

Can daily return time series reveal influence through lagged correlations or Granger causality?

Yes.
Daily return series are sufficiently granular to reveal short-term lead–lag effects at horizons of a few trading days.
While these effects are generally moderate in magnitude, they are statistically meaningful and robust across sectors.

3. Are leader–follower dynamics consistent across sectors?

No.
Leadership patterns are sector-dependent:

Some sectors exhibit structured hierarchies with multiple leaders,

Others show only one or two dominant leader–follower pairs,

A few sectors display minimal detectable leadership.

This heterogeneity highlights differences in information transmission across industries.

Do some sectors exhibit stronger leadership patterns than others?

Yes.
Sectors such as Health Care, Finance, and Public Utilities show denser and more structured leadership networks, while others exhibit sparse or isolated relationships.

This suggests that sector-specific characteristics influence how quickly information propagates among firms.
---

Financial markets rarely move at random. Often, price changes in one company are followed—sometimes within days—by similar or opposite movements in others.
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

These networks reveal whether leadership is centralized around a few firms or distributed across multiple channels.

<style>
  .story-wrap{max-width:900px;margin:18px 0 28px 0;font-size:16px;line-height:1.55}
  .story-hero{
    padding:16px 18px;border-radius:12px;
    background:linear-gradient(90deg, rgba(255,77,136,.12), rgba(176,57,202,.10));
    border:1px solid rgba(176,57,202,.25);
  }
  .story-hero h2{margin:0 0 6px 0;font-size:22px}
  .story-hero p{margin:0;color:#222}
  .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
  @media (max-width:720px){.story-grid{grid-template-columns:1fr}}
  .story-card{
    padding:14px 16px;border-radius:12px;background:#fff;
    border:1px solid rgba(0,0,0,.10);
    box-shadow:0 6px 18px rgba(0,0,0,.05);
  }
  .story-card h3{margin:0 0 6px 0;font-size:16px}
  .story-card p{margin:0;color:#333}
  .pill{
    display:inline-block;margin-top:10px;padding:6px 10px;border-radius:999px;
    background:rgba(255,77,136,.10);border:1px solid rgba(255,77,136,.25);
    font-size:13px;color:#222
  }
  .quote{
    margin-top:12px;padding:12px 14px;border-radius:12px;
    border-left:4px solid #ff4d88;background:#ffe5ec;color:#222
  }
  .quote b{font-weight:700}
  .micro{
    margin-top:10px;color:#444;font-size:14px
  }
  .micro code{background:rgba(0,0,0,.05);padding:2px 6px;border-radius:6px}
</style>

<div class="story-wrap">
  <div class="story-hero">
    <h2>The Pulse of the Market: Who Sets the Rhythm?</h2>
    <p>
      Some stocks tend to move <b>first</b>, while others react a few days later.
      Here we look for short-term <b>leader → follower</b> relationships within each sector,
      using daily returns to track how market information appears to propagate across firms.
    </p>
    <div class="pill">What you’re seeing below: sparse, directional links — not general correlation</div>
  </div>

  <div class="story-grid">
    <div class="story-card">
      <h3>What “leadership” means here</h3>
      <p>
        An arrow <b>A → B</b> indicates that changes in <b>A</b> tend to be followed by changes in <b>B</b>
        after a short delay. This is a statistical notion of <b>predictive precedence</b>, not a claim of
        true economic causality.
      </p>
      <div class="micro">We work with log returns: <code>log(P_t / P_{t-1})</code>.</div>
    </div>

    <div class="story-card">
      <h3>How a link earns its place</h3>
      <p>
        We first search for a clear <b>lead–lag alignment</b> (testing small delays), then keep only pairs
        that also pass a <b>directional predictability</b> check (Granger causality) in one direction but not the reverse.
        The result is a small set of “surviving” edges per sector.
      </p>
      <div class="micro">Delays tested: <code>k = 1…7</code> days · Granger lag order: <code>p = 7</code>.</div>
    </div>
  </div>

  <div class="quote">
    <b>How to read the visuals:</b>
    Heatmaps show the strength of each validated leader–follower correlation, while the network graph highlights
    the structure — hubs, chains, and isolated followers. Thicker arrows indicate stronger relationships.
  </div>
</div>


<style>
  .math-story{max-width:900px;margin:24px 0;font-size:16px;line-height:1.6}
  .math-card{
    background:#ffffff;
    border:1px solid rgba(0,0,0,.1);
    border-radius:14px;
    padding:18px 20px;
    box-shadow:0 8px 22px rgba(0,0,0,.06);
    margin-bottom:16px;
  }
  .math-card h2{
    margin:0 0 8px 0;
    font-size:22px;
  }
  .math-card h3{
    margin:14px 0 6px 0;
    font-size:17px;
  }
  .math-card p{margin:6px 0;color:#222}
  .math-highlight{
    background:rgba(176,57,202,.08);
    border-left:4px solid #b039ca;
    padding:12px 14px;
    border-radius:10px;
    margin:14px 0;
  }
  .math-foot{
    font-size:14px;
    color:#444;
    margin-top:8px;
  }
</style>

<div class="math-story">

  <div class="math-card">
    <h2>Detecting Leadership in Stock Movements</h2>
    <p>
      Financial markets rarely move in isolation. Price changes in one firm are often
      followed—sometimes within days—by reactions in others.
      Our objective is to identify these short-term <b>leader–follower</b> relationships
      within sectors and visualize how information flows across companies.
    </p>
    <p>
      Rather than assuming leadership a priori, we let the data reveal which firms tend
      to move first.
    </p>
  </div>

  <div class="math-card">
    <h3>Returns as the Basic Signal</h3>
    <p>
      All computations are performed on <b>logarithmic daily returns</b>,
      which are additive over time and approximately stationary:
    </p>

    $$ 
    r_{i,t} = \log\!\left(\frac{P_{i,t}}{P_{i,t-1}}\right)
    $$

    <p class="math-foot">
      Working with returns (rather than prices) removes long-term trends and focuses
      attention on short-horizon reactions.
    </p>
  </div>

  <div class="math-card">
    <h3>Searching for Lead–Lag Effects</h3>
    <p>
      For each pair of stocks \( (i,j) \) within a sector, we examine whether movements
      in \( i \) tend to precede movements in \( j \).
      This is done via cross-correlation at small positive delays:
    </p>

    $$
    \rho_{ij}(k) = \mathrm{Corr}\!\big(r_{i,t},\, r_{j,t+k}\big),
    \qquad k = 1,\dots,7
    $$

    <div class="math-highlight">
      If the strongest correlation occurs at a positive lag \( k>0 \),
      stock \( i \) is interpreted as a <b>candidate leader</b> of stock \( j \).
    </div>
  </div>

  <div class="math-card">
    <h3>From Correlation to Directionality</h3>
    <p>
      Correlation alone is not sufficient: two stocks may move together without
      one leading the other.
      To confirm directional influence, we apply a Granger causality test.
    </p>

    <p>
      We compare a baseline model using only the follower’s past returns
      to an augmented model that also includes the leader’s past returns:
    </p>

    $$
    r_{j,t}
    = \alpha + \sum_{\ell=1}^{p} \beta_\ell r_{j,t-\ell}
    + \sum_{\ell=1}^{p} \gamma_\ell r_{i,t-\ell}
    + \varepsilon_t,
    \qquad p = 7
    $$

    <div class="math-highlight">
      A link \( i \rightarrow j \) is retained only if the leader’s lagged returns
      significantly improve prediction in this direction, but not in the reverse.
    </div>
  </div>

  <div class="math-card">
    <h3>What the Visualizations Represent</h3>
    <p>
      The final output is a directed, sector-specific network:
    </p>
    <ul>
      <li><b>Nodes</b> are companies within a sector,</li>
      <li><b>Arrows</b> point from leaders to followers,</li>
      <li><b>Arrow thickness</b> reflects the strength of the detected relationship.</li>
    </ul>

    <p class="math-foot">
      These structures reveal whether leadership is centralized around a few firms
      or distributed across multiple influence channels.
    </p>
  </div>

</div>



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

The analysis identifies sparse but structured leader–follower relationships within sectors.
Rather than dense interactions, leadership effects concentrate around a limited number of firms and propagate in clearly defined directions.

### Basic Industries

Leadership is distributed across Barrick Gold (GOLD), Methanex (MEOH), Royal Gold (RGLD), and WD-40 Company (WDFC).
Firms such as Stericycle (SRCL) and Balchem (BCPC) act as downstream followers.
The sector exhibits a multi-level hierarchical structure, with both reinforcing and opposing effects.

### Capital Goods

Garmin (GRMN) and Tesla (TSLA) emerge as leaders, influencing Icahn Enterprises (IEP) and Nordson (NDSN), respectively.
Leadership effects are clear and directional, though heterogeneous in sign.

### Consumer Durables

Casey’s General Stores (CASY), Cronos Group (CRON), and Pool Corporation (POOL) act as leaders.
Their influence propagates toward Helen of Troy (HELE), iRobot (IRBT), and Lumentum (LITE), with mixed positive and negative responses.

### Consumer Non-Durables

Cintas (CTAS) and Hasbro (HAS) lead firms such as Columbia Sportswear (COLM) and Pilgrim’s Pride (PPC).
The sector displays asymmetric responses, indicating varied short-term adjustment mechanisms.

### Consumer Services

Amazon (AMZN) and Comcast (CMCSA) dominate leadership dynamics.
Amazon’s influence on Netflix (NFLX) is negative, while Comcast exerts a positive leadership effect on Starbucks (SBUX).
Leadership is split across independent channels rather than centralized in a single firm.

### Energy

Gulfport Energy (GPOR), Patterson-UTI Energy (PTEN), and Viper Energy (VNOM) influence Centennial Resource Development (CDEV).
Leadership effects are consistently negative, identifying Centennial as a clear follower.

### Finance

Multiple firms, including Cincinnati Financial (CINF), Huntington Bancshares (HBAN/HBANO), Northern Trust (NTRS), and Principal Financial (PFG), act as leaders.
Their influence extends toward Nasdaq (NDAQ), Fifth Third Bancorp (FITB), and T. Rowe Price (TROW), forming a sparse but non-trivial network.

### Health Care

Health Care exhibits the richest internal structure.
Biogen (BIIB), Intuitive Surgical (ISRG), Regeneron (REGN), and IDEXX Laboratories (IDXX) emerge as leaders, influencing Vertex Pharmaceuticals (VRTX), Walgreens Boots Alliance (WBA), and others.
Both positive and negative leadership effects coexist.

### Miscellaneous

Booking Holdings (BKNG) and eBay (EBAY) lead firms such as CDK Global (CDK) and Zillow Group (ZG).
Leadership relationships are simple but directional.

### Public Utilities

Leadership is distributed across firms including Alliant Energy (LNT), Otter Tail (OTTR), Shenandoah Telecommunications (SHEN), T-Mobile US (TMUS), and Xcel Energy (XEL).
This sector displays one of the densest leadership structures.

### Technology

Broadcom (AVGO) exhibits a clear leadership effect on Apple (AAPL), indicating delayed information transmission rather than purely synchronous movement.

### Transportation

JetBlue (JBLU), Landstar (LSTR), Old Dominion Freight Line (ODFL), and United Airlines (UAL) influence firms such as CSX (CSX) and Expeditors (EXPD).
Leadership relationships span multiple transportation subsectors.

### Takeaway

Across sectors, leadership effects are directional, heterogeneous, and concentrated.
A limited set of firms consistently act as short-term influencers, while most stocks respond passively or exhibit no detectable leadership dynamics.