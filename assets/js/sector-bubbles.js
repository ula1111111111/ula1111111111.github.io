document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("sector-bubbles");
  if (!el) return;

  fetch("/assets/data/sectors.json")
    .then(r => r.json())
    .then(data => {
      const sectors = data.map(d => d.sector);
      const counts  = data.map(d => d.count);

      const trace = {
        x: sectors,
        y: counts,
        mode: "markers",
        marker: {
          size: counts,
          sizemode: "area",
          sizeref: 2.0 * Math.max(...counts) / (80 ** 2),
          color: counts,
          showscale: false,
          line: { width: 1 }
        },
        text: sectors.map((s,i) => `${s}<br>${counts[i]} companies`),
        hoverinfo: "text"
      };

      const layout = {
        title: { text: "NASDAQ companies by sector" },
        xaxis: { title: "Sector", tickangle: -30 },
        yaxis: { title: "Number of companies" },
        margin: { t: 60, l: 60, r: 30, b: 120 }
      };

      Plotly.newPlot("sector-bubbles", [trace], layout, { responsive: true });
    })
    .catch(err => {
      el.innerHTML = "<p><b>Error:</b> Could not load sectors.json.</p>";
      console.error(err);
    });
});
