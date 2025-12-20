*How should companies be sectorized and hierarchized?*

## • Building the Power Score: Beyond Market Cap

To answer whether the most powerful firms are also the most influential, we need a way to rank companies that goes beyond simple market capitalization. Size matters, but influence is multidimensional.

<div style="max-width:900px;margin:32px auto;padding:20px 24px;border-radius:16px;background:linear-gradient(135deg, rgba(255,77,136,.08), rgba(176,57,202,.06));border:1px solid rgba(176,57,202,.2);">
  <p style="margin:0;font-size:1.05rem;line-height:1.7;color:#222;">
    <strong>💡 The Challenge:</strong> Market cap alone doesn't tell the full story. A company might be large but have low trading activity, or be volatile despite strong returns. We need a composite measure that captures multiple dimensions of market power.
  </p>
</div>

---

## The Five Pillars of Power

We construct a **Power Score** that integrates five key financial indicators. Each metric captures a different dimension of market strength:

<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:18px;margin:32px 0;">

<div style="padding:20px;border-radius:14px;background:#fff;border:2px solid rgba(255,77,136,.15);box-shadow:0 8px 24px rgba(0,0,0,.06);">
  <div style="font-size:2.5rem;margin-bottom:8px;">📊</div>
  <h3 style="margin:0 0 8px 0;font-size:1.2rem;color:#b039ca;">Market Capitalization</h3>
  <p style="margin:0;color:#555;font-size:0.95rem;line-height:1.6;">
    <strong>What it measures:</strong> Company size and financial solidity<br>
    <strong>Why it matters:</strong> Larger firms typically have more market impact and stability
  </p>
</div>

<div style="padding:20px;border-radius:14px;background:#fff;border:2px solid rgba(255,77,136,.15);box-shadow:0 8px 24px rgba(0,0,0,.06);">
  <div style="font-size:2.5rem;margin-bottom:8px;">💹</div>
  <h3 style="margin:0 0 8px 0;font-size:1.2rem;color:#b039ca;">Trading Volume</h3>
  <p style="margin:0;color:#555;font-size:0.95rem;line-height:1.6;">
    <strong>What it measures:</strong> Average daily liquidity and investor attention<br>
    <strong>Why it matters:</strong> High volume = high visibility and market participation
  </p>
</div>

<div style="padding:20px;border-radius:14px;background:#fff;border:2px solid rgba(255,77,136,.15);box-shadow:0 8px 24px rgba(0,0,0,.06);">
  <div style="font-size:2.5rem;margin-bottom:8px;">📈</div>
  <h3 style="margin:0 0 8px 0;font-size:1.2rem;color:#b039ca;">Mean Return</h3>
  <p style="margin:0;color:#555;font-size:0.95rem;line-height:1.6;">
    <strong>What it measures:</strong> Historical annualized performance<br>
    <strong>Why it matters:</strong> Sustained returns build investor confidence
  </p>
</div>

<div style="padding:20px;border-radius:14px;background:#fff;border:2px solid rgba(255,77,136,.15);box-shadow:0 8px 24px rgba(0,0,0,.06);">
  <div style="font-size:2.5rem;margin-bottom:8px;">⚖️</div>
  <h3 style="margin:0 0 8px 0;font-size:1.2rem;color:#b039ca;">Volatility (Inverse)</h3>
  <p style="margin:0;color:#555;font-size:0.95rem;line-height:1.6;">
    <strong>What it measures:</strong> Price stability (used as $1 - \text{Volatility}$)<br>
    <strong>Why it matters:</strong> Lower volatility signals resilience and institutional appeal
  </p>
</div>

<div style="padding:20px;border-radius:14px;background:#fff;border:2px solid rgba(255,77,136,.15);box-shadow:0 8px 24px rgba(0,0,0,.06);">
  <div style="font-size:2.5rem;margin-bottom:8px;">⏳</div>
  <h3 style="margin:0 0 8px 0;font-size:1.2rem;color:#b039ca;">Age Since IPO</h3>
  <p style="margin:0;color:#555;font-size:0.95rem;line-height:1.6;">
    <strong>What it measures:</strong> Company maturity and time in public markets<br>
    <strong>Why it matters:</strong> Established firms have reputational and structural advantages
  </p>
</div>

</div>

---

## How We Weight Each Factor

Not all metrics are created equal. Based on financial research and market dynamics, we assign weights that reflect each factor's importance in determining market power:

<div style="max-width:900px;margin:32px auto;padding:24px;border-radius:18px;background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 12px 32px rgba(0,0,0,.08);">

<!-- Flourish Visualization Placeholder - Replace with actual Flourish embed -->
<div style="background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);border-radius:12px;padding:40px;text-align:center;border:2px dashed #b039ca;margin-bottom:24px;">
  <div style="font-size:3rem;margin-bottom:12px;">📊</div>
  <h3 style="margin:0 0 8px 0;color:#b039ca;">Power Score Weight Breakdown</h3>
  <p style="margin:0;color:#666;font-size:0.95rem;">
    <strong>Flourish Visualization:</strong> Interactive donut chart or stacked bar showing weight distribution<br>
    <em>Replace this placeholder with your Flourish embed code</em>
  </p>
  <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;display:inline-block;">
    <code style="font-size:0.85rem;color:#666;">&lt;div class="flourish-embed" data-src="visualisation/YOUR_ID"&gt;&lt;/div&gt;</code>
  </div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;margin-top:24px;">
  <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg, rgba(255,77,136,.12), rgba(255,77,136,.06));border-left:4px solid #ff4d88;">
    <div style="font-size:2rem;font-weight:800;color:#ff4d88;margin-bottom:4px;">40%</div>
    <div style="font-weight:600;color:#333;margin-bottom:4px;">Market Cap</div>
    <div style="font-size:0.85rem;color:#666;">Highest weight - size matters most</div>
  </div>
  
  <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg, rgba(176,57,202,.12), rgba(176,57,202,.06));border-left:4px solid #b039ca;">
    <div style="font-size:2rem;font-weight:800;color:#b039ca;margin-bottom:4px;">25%</div>
    <div style="font-weight:600;color:#333;margin-bottom:4px;">Trading Volume</div>
    <div style="font-size:0.85rem;color:#666;">Liquidity & visibility</div>
  </div>
  
  <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg, rgba(100,149,237,.12), rgba(100,149,237,.06));border-left:4px solid #6495ed;">
    <div style="font-size:2rem;font-weight:800;color:#6495ed;margin-bottom:4px;">15%</div>
    <div style="font-weight:600;color:#333;margin-bottom:4px;">Mean Return</div>
    <div style="font-size:0.85rem;color:#666;">Historical performance</div>
  </div>
  
  <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg, rgba(255,165,0,.12), rgba(255,165,0,.06));border-left:4px solid #ffa500;">
    <div style="font-size:2rem;font-weight:800;color:#ffa500;margin-bottom:4px;">10%</div>
    <div style="font-weight:600;color:#333;margin-bottom:4px;">Volatility</div>
    <div style="font-size:0.85rem;color:#666;">Stability (inverse)</div>
  </div>
  
  <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg, rgba(46,125,50,.12), rgba(46,125,50,.06));border-left:4px solid #2e7d32;">
    <div style="font-size:2rem;font-weight:800;color:#2e7d32;margin-bottom:4px;">10%</div>
    <div style="font-weight:600;color:#333;margin-bottom:4px;">IPO Age</div>
    <div style="font-size:0.85rem;color:#666;">Maturity factor</div>
  </div>
</div>

</div>

---

## The Formula

All metrics are first standardized using z-score normalization to ensure fair comparison:

$$
x_i' = \frac{x_i - \mu_x}{\sigma_x}
$$

Then, the **Power Score** for each company $i$ is calculated as:

$$
S_i = 0.40 \cdot Cap_i + 0.25 \cdot Vol_i + 0.15 \cdot Ret_i + 0.10 \cdot (1 - Volat_i) + 0.10 \cdot Age_i
$$

<div style="max-width:900px;margin:24px auto;padding:20px;border-radius:14px;background:#f8f9fa;border-left:4px solid #b039ca;">
  <p style="margin:0;font-size:0.95rem;color:#555;line-height:1.7;">
    <strong>💡 Why standardization?</strong> Without it, market cap (in billions) would dominate over returns (in percentages). Z-score normalization puts everything on the same scale (mean 0, standard deviation 1), so each factor contributes proportionally to its weight.
  </p>
</div>

---

## Visualizing the Power Hierarchy

<div style="max-width:900px;margin:32px auto;padding:24px;border-radius:18px;background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 12px 32px rgba(0,0,0,.08);">

<!-- Flourish Visualization Placeholder - Top Companies by Power Score -->
<div style="background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);border-radius:12px;padding:40px;text-align:center;border:2px dashed #b039ca;margin-bottom:24px;">
  <div style="font-size:3rem;margin-bottom:12px;">📊</div>
  <h3 style="margin:0 0 8px 0;color:#b039ca;">Top Companies by Power Score (by Sector)</h3>
  <p style="margin:0;color:#666;font-size:0.95rem;">
    <strong>Flourish Visualization:</strong> Interactive bar chart race or grouped bar chart<br>
    <em>Shows top 10-15 companies per sector ranked by Power Score</em><br>
    <em>Replace this placeholder with your Flourish embed code</em>
  </p>
  <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;display:inline-block;">
    <code style="font-size:0.85rem;color:#666;">&lt;div class="flourish-embed" data-src="visualisation/YOUR_ID"&gt;&lt;/div&gt;</code>
  </div>
</div>

</div>

---

## Real-World Context

<div style="max-width:900px;margin:32px auto;padding:20px 24px;border-radius:16px;background:linear-gradient(135deg, rgba(255,77,136,.06), rgba(176,57,202,.04));border:1px solid rgba(176,57,202,.15);">

<div style="display:flex;gap:16px;align-items:flex-start;">
  <div style="font-size:2.5rem;flex-shrink:0;">💬</div>
  <div>
    <p style="margin:0 0 12px 0;font-size:1.05rem;line-height:1.7;color:#222;font-style:italic;">
      "Market cap tells you who's big. Power Score tells you who matters."
    </p>
    <p style="margin:0;font-size:0.9rem;color:#666;">
      — Our approach to identifying true market leaders
    </p>
  </div>
</div>

</div>

<div style="max-width:900px;margin:24px auto;padding:20px;border-radius:14px;background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 8px 24px rgba(0,0,0,.06);">

<h3 style="margin:0 0 16px 0;color:#333;">Why This Matters</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:16px;">
  <div>
    <div style="font-size:1.5rem;margin-bottom:8px;">🎯</div>
    <p style="margin:0;font-size:0.95rem;line-height:1.6;color:#555;">
      <strong>Beyond Size:</strong> A smaller company with high volume and strong returns might rank higher than a larger, less active firm.
    </p>
  </div>
  <div>
    <div style="font-size:1.5rem;margin-bottom:8px;">🔍</div>
    <p style="margin:0;font-size:0.95rem;line-height:1.6;color:#555;">
      <strong>Sector-Specific:</strong> Rankings are computed within each sector, so we compare apples to apples.
    </p>
  </div>
  <div>
    <div style="font-size:1.5rem;margin-bottom:8px;">📊</div>
    <p style="margin:0;font-size:0.95rem;line-height:1.6;color:#555;">
      <strong>Robust & Tested:</strong> We validate the Power Score across different time periods to ensure stability.
    </p>
  </div>
</div>

</div>

---

## What's Next?

This Power Score becomes the foundation for our leadership analysis. Once we've ranked companies within each sector, we can investigate:

- **Do high Power Score companies lead price movements?**
- **Is influence proportional to power, or are there surprises?**
- **How consistent are leadership patterns over time?**

<div style="max-width:900px;margin:32px auto;padding:20px;border-radius:14px;background:linear-gradient(135deg, rgba(176,57,202,.08), rgba(255,77,136,.06));border-left:4px solid #b039ca;">
  <p style="margin:0;font-size:0.95rem;line-height:1.7;color:#222;">
    <strong>→ Next:</strong> We'll use these Power Scores to identify leaders and followers, then analyze how information flows between them. The results might surprise you.
  </p>
</div>

---

<details class="math-collapse">
  <summary>Technical Details: Standardization & Weight Selection</summary>
  
  <div class="math-card">
    <h3>Z-Score Normalization</h3>
    <p>
      All quantitative variables are standardized to ensure comparability:
    </p>
    $$
    x_i' = \frac{x_i - \mu_x}{\sigma_x}
    $$
    <p>
      where $\mu_x$ and $\sigma_x$ are the mean and standard deviation across all companies.
    </p>
    
    <h3>Weight Constraints</h3>
    <p>
      The weights satisfy:
    </p>
    $$
    w_k \ge 0, \quad \sum_{k=1}^{5} w_k = 1
    $$
    
    <h3>Complete Formula</h3>
    <p>
      The full Power Score formula:
    </p>
    $$
    S_i = w_1 \cdot Cap_i + w_2 \cdot Vol_i + w_3 \cdot Ret_i + w_4 \cdot (1 - Volat_i) + w_5 \cdot Age_i
    $$
    <p>
      with $w_1 = 0.40$, $w_2 = 0.25$, $w_3 = 0.15$, $w_4 = 0.10$, $w_5 = 0.10$.
    </p>
  </div>
</details>
