function spiralLayout(n) {
  // Positions sur une spirale (lisible + stable)
  const X = [];
  const Y = [];

  for (let i = 0; i < n; i++) {
    const t = i * 0.75;         // angle step
    const r = 0.55 + i * 0.22;  // radius growth
    X.push(r * Math.cos(t));
    Y.push(r * Math.sin(t));
  }
  return { X, Y };
}

document.addEventListener("DOMContentLoaded", async () => {
  const chartEl = document.getElementById("sector-bubbles");
  if (!chartEl) return;

  const [sectorsRes, compRes] = await Promise.all([
    fetch(window.SECTORS_JSON_URL),
    fetch(window.COMPANIES_BY_SECTOR_URL),
  ]);

  const sectorsData = await sectorsRes.json(); // [{sector,count},...]
  const companiesBySector = await compRes.json(); // { "Tech":[...], ... }

  // Sort by count desc (bigger = easier to click)
  sectorsData.sort((a, b) => b.count - a.count);

  const sectors = sectorsData.map(d => d.sector);
  const counts  = sectorsData.map(d => d.count);

  // Bubble sizes (controlled)
  const maxC = Math.max(...counts);
  const sizes = counts.map(c => 18 + 72 * Math.sqrt(c / maxC)); // ~18..90

  // Positions
  const { X, Y } = spiralLayout(sectors.length);

  // Labels only for top sectors to reduce clutter
  const topK = 5;
  const texts = sectors.map((s, i) => (i < topK ? s : ""));

  const trace = {
    x: X,
    y: Y,
    mode: "markers+text",
    text: texts,
    textposition: "middle center",
    textfont: { size: 12, color: "rgba(20,20,20,0.85)" },
    marker: {
      size: sizes,
      sizemode: "diameter",
      opacity: 0.92,
      color: counts,
      colorscale: [
        [0,   "#fde2e4"],
        [0.3, "#f9a1b4"],
        [0.6, "#f06595"],
        [1,   "#8b0000"]
      ],
      showscale: false,
      line: { width: 3, color: "rgba(255,255,255,0.95)" }
    },
    hovertemplate:
      "<b>%{customdata.sector}</b><br>" +
      "%{customdata.count} companies<br>" +
      "<span style='color:#666'>Click to open list →</span>" +
      "<extra></extra>",
    customdata: sectors.map((s, i) => ({ sector: s, count: counts[i] })),
  };

  const layout = {
    margin: { t: 10, l: 10, r: 10, b: 10 },
    xaxis: { visible: false, fixedrange: false },
    yaxis: { visible: false, fixedrange: false, scaleanchor: "x" },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    showlegend: false,
    dragmode: "pan",
    hovermode: "closest",
  };

  Plotly.newPlot(chartEl, [trace], layout, {
    responsive: true,
    displayModeBar: false,
    scrollZoom: true
  });

  // ----------------------------
  // Panel behavior (UNCHANGED)
  // ----------------------------
  const panel = document.getElementById("sector-panel");
  const panelTitle = document.getElementById("panel-title");
  const panelSub = document.getElementById("panel-sub");
  const panelList = document.getElementById("panel-list");
  const panelSearch = document.getElementById("panel-search");
  const panelClose = document.getElementById("panel-close");

  let currentSector = null;

  function renderList(sector, query = "") {
    const list = (companiesBySector[sector] || []);
    const q = query.trim().toLowerCase();

    const filtered = q
      ? list.filter(x =>
          (x.name || "").toLowerCase().includes(q) ||
          (x.symbol || "").toLowerCase().includes(q) ||
          (x.industry || "").toLowerCase().includes(q)
        )
      : list;

    panelList.innerHTML = filtered.map(x => `
      <div class="company-row">
        <div class="name">${x.name || x.symbol || "Unknown"}</div>
        <div class="meta">
          <span><b>${x.symbol || ""}</b></span>
          ${x.industry ? " • " + x.industry : ""}
          ${x.marketCap ? " • MktCap: " + x.marketCap : ""}
        </div>
      </div>
    `).join("");

    panelSub.textContent = `${filtered.length} / ${list.length} companies`;
  }

  chartEl.on("plotly_click", (ev) => {
    const sector = ev.points?.[0]?.customdata?.sector;
    if (!sector) return;
    currentSector = sector;

    panelTitle.textContent = sector;
    panelSearch.value = "";
    renderList(sector);

    // Mobile: scroll to panel
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  panelSearch.addEventListener("input", () => {
    if (!currentSector) return;
    renderList(currentSector, panelSearch.value);
  });

  panelClose.addEventListener("click", () => {
    currentSector = null;
    panelTitle.textContent = "Select a sector";
    panelSub.textContent = "Click a bubble to load companies";
    panelSearch.value = "";
    panelList.innerHTML = "";
  });
});
