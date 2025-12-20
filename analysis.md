
---

### Answering research Questions and Key Findings

1. *How do we define a “leader” and a “follower” in stock movements?*

A **leader** is defined as a stock whose past daily returns improve the prediction of another stock’s future returns.
A **follower** is a stock whose returns respond with a short delay to movements in the leader.

In practice, leadership is assigned only when both:

- a lead–lag correlation is detected at a positive time shift, and

- a Granger causality test confirms predictive precedence in one direction.

2. *How can we detect directional influence between stocks within a sector?*

Directional influence is detected using a two-step statistical pipeline:

Cross-correlation analysis to identify potential lead–lag relationships.

Granger causality testing to confirm directional predictability.

Only relationships supported by both steps are retained.

Can daily return time series reveal influence through lagged correlations or Granger causality?

Yes.
Daily return series are sufficiently granular to reveal short-term lead–lag effects at horizons of a few trading days.
While these effects are generally moderate in magnitude, they are statistically meaningful and robust across sectors.

3. *Are leader–follower dynamics consistent across sectors?*

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

<div class="sector-intro-box">
  <p>The analysis identifies sparse but structured leader–follower relationships within sectors. Rather than dense interactions, leadership effects concentrate around a limited number of firms and propagate in clearly defined directions.</p>
</div>

<div class="sectors-interactive-container">
  
  <div class="sector-card" data-sector="basic-industries">
    <div class="sector-header">
      <h3>Basic Industries</h3>
      <span class="sector-badge">Multi-level</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">GOLD</span>
        <span class="leader-tag">MEOH</span>
        <span class="leader-tag">RGLD</span>
        <span class="leader-tag">WDFC</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">SRCL</span>
        <span class="follower-tag">BCPC</span>
      </div>
    </div>
    <p class="sector-description">Leadership is distributed across multiple firms. The sector exhibits a multi-level hierarchical structure, with both reinforcing and opposing effects.</p>
  </div>

  <div class="sector-card" data-sector="capital-goods">
    <div class="sector-header">
      <h3>Capital Goods</h3>
      <span class="sector-badge">Clear Direction</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">GRMN</span>
        <span class="leader-tag">TSLA</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">IEP</span>
        <span class="follower-tag">NDSN</span>
      </div>
    </div>
    <p class="sector-description">Garmin and Tesla emerge as leaders, influencing Icahn Enterprises and Nordson respectively. Leadership effects are clear and directional.</p>
  </div>

  <div class="sector-card" data-sector="consumer-durables">
    <div class="sector-header">
      <h3>Consumer Durables</h3>
      <span class="sector-badge">Mixed Responses</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">CASY</span>
        <span class="leader-tag">CRON</span>
        <span class="leader-tag">POOL</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">HELE</span>
        <span class="follower-tag">IRBT</span>
        <span class="follower-tag">LITE</span>
      </div>
    </div>
    <p class="sector-description">Casey's General Stores, Cronos Group, and Pool Corporation act as leaders. Their influence propagates with mixed positive and negative responses.</p>
  </div>

  <div class="sector-card" data-sector="consumer-non-durables">
    <div class="sector-header">
      <h3>Consumer Non-Durables</h3>
      <span class="sector-badge">Asymmetric</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">CTAS</span>
        <span class="leader-tag">HAS</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">COLM</span>
        <span class="follower-tag">PPC</span>
      </div>
    </div>
    <p class="sector-description">Cintas and Hasbro lead firms such as Columbia Sportswear and Pilgrim's Pride. The sector displays asymmetric responses.</p>
  </div>

  <div class="sector-card" data-sector="consumer-services">
    <div class="sector-header">
      <h3>Consumer Services</h3>
      <span class="sector-badge highlight">Dominant</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag highlight">AMZN</span>
        <span class="leader-tag highlight">CMCSA</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag negative">NFLX</span>
        <span class="follower-tag positive">SBUX</span>
      </div>
    </div>
    <p class="sector-description">Amazon and Comcast dominate leadership dynamics. Amazon's influence on Netflix is negative, while Comcast exerts a positive effect on Starbucks.</p>
  </div>

  <div class="sector-card" data-sector="energy">
    <div class="sector-header">
      <h3>Energy</h3>
      <span class="sector-badge negative">Negative Effects</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">GPOR</span>
        <span class="leader-tag">PTEN</span>
        <span class="leader-tag">VNOM</span>
      </div>
      <div class="flow-arrow negative">→</div>
      <div class="followers-group">
        <span class="follower-tag negative">CDEV</span>
      </div>
    </div>
    <p class="sector-description">Gulfport Energy, Patterson-UTI Energy, and Viper Energy influence Centennial Resource Development. Leadership effects are consistently negative.</p>
  </div>

  <div class="sector-card" data-sector="finance">
    <div class="sector-header">
      <h3>Finance</h3>
      <span class="sector-badge">Network</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">CINF</span>
        <span class="leader-tag">HBAN</span>
        <span class="leader-tag">NTRS</span>
        <span class="leader-tag">PFG</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">NDAQ</span>
        <span class="follower-tag">FITB</span>
        <span class="follower-tag">TROW</span>
      </div>
    </div>
    <p class="sector-description">Multiple firms act as leaders, extending influence toward Nasdaq, Fifth Third Bancorp, and T. Rowe Price, forming a sparse but non-trivial network.</p>
  </div>

  <div class="sector-card" data-sector="health-care">
    <div class="sector-header">
      <h3>Health Care</h3>
      <span class="sector-badge highlight">Richest Structure</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag highlight">BIIB</span>
        <span class="leader-tag highlight">ISRG</span>
        <span class="leader-tag highlight">REGN</span>
        <span class="leader-tag highlight">IDXX</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">VRTX</span>
        <span class="follower-tag">WBA</span>
        <span class="follower-tag">+ others</span>
      </div>
    </div>
    <p class="sector-description">Health Care exhibits the richest internal structure. Biogen, Intuitive Surgical, Regeneron, and IDEXX Laboratories emerge as leaders. Both positive and negative effects coexist.</p>
  </div>

  <div class="sector-card" data-sector="miscellaneous">
    <div class="sector-header">
      <h3>Miscellaneous</h3>
      <span class="sector-badge">Simple</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">BKNG</span>
        <span class="leader-tag">EBAY</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">CDK</span>
        <span class="follower-tag">ZG</span>
      </div>
    </div>
    <p class="sector-description">Booking Holdings and eBay lead firms such as CDK Global and Zillow Group. Leadership relationships are simple but directional.</p>
  </div>

  <div class="sector-card" data-sector="public-utilities">
    <div class="sector-header">
      <h3>Public Utilities</h3>
      <span class="sector-badge highlight">Dense</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">LNT</span>
        <span class="leader-tag">OTTR</span>
        <span class="leader-tag">SHEN</span>
        <span class="leader-tag">TMUS</span>
        <span class="leader-tag">XEL</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">Multiple</span>
      </div>
    </div>
    <p class="sector-description">Leadership is distributed across multiple firms. This sector displays one of the densest leadership structures.</p>
  </div>

  <div class="sector-card" data-sector="technology">
    <div class="sector-header">
      <h3>Technology</h3>
      <span class="sector-badge">Clear Link</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">AVGO</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">AAPL</span>
      </div>
    </div>
    <p class="sector-description">Broadcom exhibits a clear leadership effect on Apple, indicating delayed information transmission rather than purely synchronous movement.</p>
  </div>

  <div class="sector-card" data-sector="transportation">
    <div class="sector-header">
      <h3>Transportation</h3>
      <span class="sector-badge">Multi-subsector</span>
    </div>
    <div class="leadership-flow">
      <div class="leaders-group">
        <span class="leader-tag">JBLU</span>
        <span class="leader-tag">LSTR</span>
        <span class="leader-tag">ODFL</span>
        <span class="leader-tag">UAL</span>
      </div>
      <div class="flow-arrow">→</div>
      <div class="followers-group">
        <span class="follower-tag">CSX</span>
        <span class="follower-tag">EXPD</span>
      </div>
    </div>
    <p class="sector-description">JetBlue, Landstar, Old Dominion Freight Line, and United Airlines influence firms such as CSX and Expeditors. Leadership relationships span multiple transportation subsectors.</p>
  </div>

</div>

<div class="takeaway-box">
  <div class="takeaway-icon">💡</div>
  <div class="takeaway-content">
    <h3>Takeaway</h3>
    <p>Across sectors, leadership effects are directional, heterogeneous, and concentrated. A limited set of firms consistently act as short-term influencers, while most stocks respond passively or exhibit no detectable leadership dynamics.</p>
  </div>
</div>

<script>
// Interactive Sector Cards with Animations
(function() {
  const sectorCards = document.querySelectorAll('.sector-card');
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Animate leadership flow
          const flowArrow = entry.target.querySelector('.flow-arrow');
          const leaders = entry.target.querySelectorAll('.leader-tag');
          const followers = entry.target.querySelectorAll('.follower-tag');
          
          if (flowArrow) {
            flowArrow.style.opacity = '1';
            flowArrow.style.transform = 'scale(1)';
            flowArrow.style.animation = 'flowPulse 2s ease-in-out';
          }
          
          leaders.forEach((leader, i) => {
            setTimeout(() => {
              leader.style.animation = 'fadeInScale 0.5s ease-out forwards';
            }, i * 100);
          });
          
          followers.forEach((follower, i) => {
            setTimeout(() => {
              follower.style.animation = 'fadeInScale 0.5s ease-out forwards';
            }, leaders.length * 100 + i * 100);
          });
        }, index * 100);
      }
    });
  }, observerOptions);
  
  sectorCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    cardObserver.observe(card);
  });
  
  // Interactive hover effects
  sectorCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(176,57,202,0.2)';
      
      // Animate flow arrow
      const arrow = this.querySelector('.flow-arrow');
      if (arrow) {
        arrow.style.transform = 'scale(1.3)';
        arrow.style.animation = 'flowPulse 1s ease-in-out infinite';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
      
      const arrow = this.querySelector('.flow-arrow');
      if (arrow) {
        arrow.style.transform = 'scale(1)';
        arrow.style.animation = 'none';
      }
    });
  });
  
  // Click to highlight connections
  sectorCards.forEach(card => {
    card.addEventListener('click', function() {
      sectorCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
})();
</script>



