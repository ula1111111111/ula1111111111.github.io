function packBubbles(values) {
  // Placement simple type “spirale” pour éviter les overlaps, sans dépendance D3.
  // Ça marche très bien pour ~10-30 bulles.
  const nodes = values
    .map((v, i) => ({ v, i }))
    .sort((a, b) => b.v - a.v);

  const radii = nodes.map(n => Math.sqrt(n.v) * 8); // scale visuel
  const placed = [];

  function overlaps(x, y, r) {
    for (const p of placed) {
      const dx = x - p.x, dy = y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < r + p.r + 2) return true;
    }
    return false;
  }

  let angle = 0;
  let step = 0.35;
  let a = 6;

  for (let k = 0; k < nodes.length; k++) {
    const r = radii[k];
    let t = 0;
    let x = 0, y = 0;

    while (t < 4000) {
      const rad = a * angle;
      x = rad * Math.cos(angle);
      y = rad * Math.sin(angle);
      if (!overlaps(x, y, r)) break;
      angle += step;
      t++;
    }

    placed.push({ x, y, r, origIndex: nodes[k].i });
    angle += step;
  }

  // re-map en ordre original
  const X = new Array(values.length);
  const Y = new Array(values.length);
  for (const p of placed) {
    X[p.origIndex] = p.x;
    Y[p.origIndex] = p.y;
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

  // Clean order by count desc
  sectorsData.sort((a,b) => b.count - a.count);

  const sectors = sectorsData.map(d => d.sector);
  const counts = sectorsData.map(d => d.count);

  const { X, Y } = packBubbles(counts);

  const trace = {
    x: X,
    y: Y,
    mode: "markers+text",
    text: sectors.map(s => s),
    textposition: "middle center",
    textfont: { size: 12 },
    marker: {
      size: counts.map(c => Math.sqrt(c) * 12),
      sizemode: "diameter",
      opacity: 0.92,
      line: { width: 2, color: "rgba(255,255,255,0.9)" }
    },
    hovertemplate:
      "<b>%{customdata.sector}</b><br>" +
      "%{customdata.count} companies" +
      "<extra></extra>",
    customdata: sectors.map((s,i) => ({ sector: s, count: counts[i] })),
  };

  const layout = {
    margin: { t: 10, l: 10, r: 10, b: 10 },
    xaxis: { visible: false },
    yaxis: { visible: false },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    showlegend: false,
  };

  Plotly.newPlot(chartEl, [trace], layout, { responsive: true, displayModeBar: false });

  // Panel behavior
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

    // Sur mobile, scroll vers panel
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

