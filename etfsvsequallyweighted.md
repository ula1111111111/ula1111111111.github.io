

---

*What does ETF analysis reveal about the performance of market leaders,sector averages, and followers, and about overall market concentration?*
*How does survivorship bias impact the validity of our conclusions, and what steps can be taken to reduce its effects?* 
*Which time window should be analyzed?*

## Introduction

This analysis explores the long-term performance dynamics between two distinct investment approaches within the NASDAQ market: **Value-Weighted (ETFs)** and **Equally-Weighted Portfolios**.

Beyond a simple performance comparison, this study serves as a proxy for understanding market structure:

<div class="comparison-cards-interactive">
  <div class="comparison-card-interactive leaders-card-interactive">
    <div class="card-icon-interactive">👑</div>
    <h3>Market Leaders (ETFs)</h3>
    <p>Value-weighted indices give more importance to large firms, representing the dominance of market giants.</p>
  </div>
  
  <div class="comparison-card-interactive followers-card-interactive">
    <div class="card-icon-interactive">🌐</div>
    <h3>Market Followers (Equally-Weighted)</h3>
    <p>By treating every company the same regardless of size, these portfolios capture the collective behavior of the broader market, including small and mid-sized firms.</p>
  </div>
</div>

We apply this comparative framework at two levels:

<div class="auto-scroll-container">
  <div class="auto-scroll-wrapper">
    <div class="auto-scroll-item">
      <div class="auto-scroll-card">
        <div class="scroll-number-big">01</div>
        <h3>Global Analysis</h3>
        <p>Comparing a general value-weighted benchmark against a comprehensive <strong>Equally-Weighted portfolio</strong> of all eligible NASDAQ stocks to assess overall market drivers.</p>
        <div class="scroll-stats-big">
          <span class="stat-big"><strong>2,074</strong> stocks</span>
          <span class="stat-big"><strong>15</strong> years</span>
        </div>
      </div>
    </div>
    
    <div class="auto-scroll-item">
      <div class="auto-scroll-card">
        <div class="scroll-number-big">02</div>
        <h3>Sector Analysis</h3>
        <p>Focusing on four major sectors (Health Care, Finance, Technology, Consumer Services) to see if these patterns hold true across different industries.</p>
        <div class="scroll-sectors-big">
          <span class="sector-tag-big">Health Care</span>
          <span class="sector-tag-big">Finance</span>
          <span class="sector-tag-big">Technology</span>
          <span class="sector-tag-big">Consumer Services</span>
        </div>
      </div>
    </div>
    
    <!-- Duplicate items for seamless loop -->
    <div class="auto-scroll-item">
      <div class="auto-scroll-card">
        <div class="scroll-number-big">01</div>
        <h3>Global Analysis</h3>
        <p>Comparing a general value-weighted benchmark against a comprehensive <strong>Equally-Weighted portfolio</strong> of all eligible NASDAQ stocks to assess overall market drivers.</p>
        <div class="scroll-stats-big">
          <span class="stat-big"><strong>2,074</strong> stocks</span>
          <span class="stat-big"><strong>15</strong> years</span>
        </div>
      </div>
    </div>
    
    <div class="auto-scroll-item">
      <div class="auto-scroll-card">
        <div class="scroll-number-big">02</div>
        <h3>Sector Analysis</h3>
        <p>Focusing on four major sectors (Health Care, Finance, Technology, Consumer Services) to see if these patterns hold true across different industries.</p>
        <div class="scroll-sectors-big">
          <span class="sector-tag-big">Health Care</span>
          <span class="sector-tag-big">Finance</span>
          <span class="sector-tag-big">Technology</span>
          <span class="sector-tag-big">Consumer Services</span>
        </div>
      </div>
    </div>
  </div>
</div>

**Key Question:** Is market performance primarily driven by the concentrated power of a few "Leaders", or does the diversified strength of the "Followers" provide a superior edge?

---

## Methodology

<div style="max-width:1000px;margin:32px auto;padding:20px 24px;border-radius:16px;background:linear-gradient(135deg, rgba(255,77,136,.08), rgba(176,57,202,.06));border:1px solid rgba(176,57,202,.2);">
  <p style="margin:0;font-size:1.05rem;line-height:1.7;color:#222;">
    <strong>🔬 Our Approach:</strong> We compare two investment philosophies using rigorous data science to understand whether market performance is driven by a handful of giants or by the collective strength of the broader market.
  </p>
</div>

---

### 1. Conceptual Framework: Leaders vs. Followers

<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:32px 0;max-width:900px;margin-left:auto;margin-right:auto;">

<div style="padding:24px;border-radius:14px;background:linear-gradient(135deg, rgba(255,77,136,.08), rgba(255,255,255,.5));border:2px solid rgba(255,77,136,.2);box-shadow:0 8px 20px rgba(0,0,0,.05);">
  <div style="font-size:2.8rem;margin-bottom:12px;">👑</div>
  <h3 style="margin:0 0 10px 0;font-size:1.15rem;color:#b039ca;font-weight:700;">Market Leaders</h3>
  <p style="margin:0;color:#333;line-height:1.6;font-size:0.95rem;">
    <strong>Value-Weighted (ETFs)</strong><br>
    Weights proportional to market cap. Performance driven by large-cap firms.
  </p>
</div>

<div style="padding:24px;border-radius:14px;background:linear-gradient(135deg, rgba(176,57,202,.08), rgba(255,255,255,.5));border:2px solid rgba(176,57,202,.2);box-shadow:0 8px 20px rgba(0,0,0,.05);">
  <div style="font-size:2.8rem;margin-bottom:12px;">🌐</div>
  <h3 style="margin:0 0 10px 0;font-size:1.15rem;color:#b039ca;font-weight:700;">Market Followers</h3>
  <p style="margin:0;color:#333;line-height:1.6;font-size:0.95rem;">
    <strong>Equally-Weighted (Portfolios)</strong><br>
    Equal weight (1/n) for every company. Captures broader market participation.
  </p>
</div>

</div>

<div style="max-width:900px;margin:24px auto;padding:16px 18px;border-radius:12px;background:#f8f9fa;border-left:4px solid #ff4d88;">
  <p style="margin:0;color:#444;line-height:1.7;font-size:0.95rem;">
    <strong>📊 Interpretation Logic:</strong><br>
    • If <strong>ETF > Equally-Weighted</strong> → Leaders dominate (concentration wins)<br>
    • If <strong>Equally-Weighted > ETF</strong> → Followers outperform (breadth wins)
  </p>
</div>

---

### 2. Data Sources & Preparation

<div style="max-width:900px;margin:32px auto;">

<div style="margin-bottom:20px;padding:18px;border-radius:12px;background:linear-gradient(90deg, rgba(255,77,136,.10), transparent);border-left:4px solid #ff4d88;">
  <h4 style="margin:0 0 10px 0;font-size:1rem;color:#2b2b2b;">📂 Dataset #1: NASDAQ Company List</h4>
  <p style="margin:0;color:#555;line-height:1.6;font-size:0.93rem;">Metadata including Sector, Industry, and Market Cap to classify firms.</p>
</div>

<div style="margin-bottom:20px;padding:18px;border-radius:12px;background:linear-gradient(90deg, rgba(176,57,202,.10), transparent);border-left:4px solid #b039ca;">
  <h4 style="margin:0 0 10px 0;font-size:1rem;color:#2b2b2b;">📈 Dataset #2: Stock Market Data</h4>
  <p style="margin:0;color:#555;line-height:1.6;font-size:0.93rem;">Daily price data (Open, Close, Adjusted Close) to compute returns.</p>
</div>

</div>

<div style="max-width:900px;margin:24px auto;padding:20px;border-radius:12px;background:#f5f5f5;border:1px solid #ddd;">
  <h4 style="margin:0 0 14px 0;font-size:1rem;color:#2b2b2b;text-align:center;">🔧 Data Cleaning Rules</h4>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;text-align:center;">
    <div style="padding:10px;background:#fff;border-radius:8px;border:1px solid #eee;">
      <div style="font-size:2rem;margin-bottom:4px;">⏱️</div>
      <p style="margin:0;font-size:0.9rem;color:#333;"><strong>Time Period:</strong><br>15 years (2005–2020)</p>
    </div>
    <div style="padding:10px;background:#fff;border-radius:8px;border:1px solid #eee;">
      <div style="font-size:2rem;margin-bottom:4px;">📊</div>
      <p style="margin:0;font-size:0.9rem;color:#333;"><strong>Inclusion Criteria:</strong><br>2+ years historical data (2,074 stocks)</p>
    </div>
    <div style="padding:10px;background:#fff;border-radius:8px;border:1px solid #eee;">
      <div style="font-size:2rem;margin-bottom:4px;">⚠️</div>
      <p style="margin:0;font-size:0.9rem;color:#333;"><strong>Outlier Handling:</strong><br>Daily returns clipped at ±50%</p>
    </div>
    <div style="padding:10px;background:#fff;border-radius:8px;border:1px solid #eee;">
      <div style="font-size:2rem;margin-bottom:4px;">✅</div>
      <p style="margin:0;font-size:0.9rem;color:#333;"><strong>Quality Check:</strong><br>Remove data errors & anomalies</p>
    </div>
  </div>
</div>

---

### 3. Portfolio Construction

<div style="max-width:900px;margin:32px auto;">

<details style="border:1px solid rgba(176,57,202,.3);border-radius:12px;padding:16px;background:linear-gradient(135deg, rgba(176,57,202,.04), transparent);margin-bottom:16px;">
  <summary style="cursor:pointer;font-weight:700;color:#b039ca;font-size:1.05rem;padding:0;">
    📌 Equally-Weighted Portfolios
  </summary>
  <div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(176,57,202,.2);">
    <div style="display:grid;gap:10px;">
      <div style="padding:10px;background:#fff;border-radius:8px;border-left:3px solid #b039ca;">
        <strong>Weighting:</strong> Each stock gets identical weight (1/n)
      </div>
      <div style="padding:10px;background:#fff;border-radius:8px;border-left:3px solid #b039ca;">
        <strong>Rebalancing:</strong> <span style="background:rgba(176,57,202,.15);padding:2px 6px;border-radius:4px;">Daily</span> to maintain equal exposure
      </div>
      <div style="padding:10px;background:#fff;border-radius:8px;border-left:3px solid #b039ca;">
        <strong>Calculation:</strong> Mean-based averaging of daily returns across all constituents
      </div>
    </div>
  </div>
</details>

<details style="border:1px solid rgba(255,77,136,.3);border-radius:12px;padding:16px;background:linear-gradient(135deg, rgba(255,77,136,.04), transparent);">
  <summary style="cursor:pointer;font-weight:700;color:#ff4d88;font-size:1.05rem;padding:0;">
    📌 ETF Benchmarks
  </summary>
  <div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(255,77,136,.2);">
    <div style="display:grid;gap:10px;">
      <div style="padding:10px;background:#fff;border-radius:8px;border-left:3px solid #ff4d88;">
        <strong>Weighting:</strong> Value-weighted (Market Capitalization)
      </div>
      <div style="padding:10px;background:#fff;border-radius:8px;border-left:3px solid #ff4d88;">
        <strong>Rebalancing:</strong> <span style="background:rgba(255,77,136,.15);padding:2px 6px;border-radius:4px;">Quarterly</span> index methodology
      </div>
    </div>
  </div>
</details>

</div>

---

### 4. Limitations: Survivorship Bias

<div style="max-width:900px;margin:32px auto;padding:20px;border-radius:14px;background:linear-gradient(135deg, rgba(255,77,136,.08), rgba(176,57,202,.04));border-left:5px solid #ff4d88;">
  <div style="display:flex;gap:14px;align-items:flex-start;">
    <div style="font-size:2.5rem;flex-shrink:0;line-height:1;">⚡</div>
    <div>
      <h3 style="margin:0 0 10px 0;color:#b039ca;font-size:1.1rem;">The Survivorship Bias Challenge</h3>
      <p style="margin:0;color:#333;line-height:1.7;font-size:0.95rem;">
        Our NASDAQ dataset includes only companies listed in 2020. Firms that went bankrupt, were delisted, or merged before 2020 are excluded. This primarily affects small and mid-cap firms and may lead to:
      </p>
      <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="padding:8px;background:rgba(255,77,136,.15);border-radius:6px;font-size:0.9rem;color:#333;">
          ❌ Overestimation of small-cap performance
        </div>
        <div style="padding:8px;background:rgba(255,77,136,.15);border-radius:6px;font-size:0.9rem;color:#333;">
          ❌ Underestimation of market volatility
        </div>
      </div>
    </div>
  </div>
</div>

---

### 5. Global & Sector Benchmarks

<div style="max-width:1000px;margin:32px auto;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);box-shadow:0 8px 24px rgba(0,0,0,.06);">
  <div style="background:linear-gradient(90deg, rgba(176,57,202,.1), rgba(255,77,136,.08));padding:16px 20px;border-bottom:1px solid rgba(0,0,0,.08);">
    <h4 style="margin:0;color:#b039ca;font-size:1rem;">📋 Five Scopes of Analysis</h4>
  </div>
  <table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr style="background:#f8f9fa;border-bottom:2px solid rgba(0,0,0,.1);">
        <th style="padding:12px;text-align:left;font-weight:700;color:#2b2b2b;font-size:0.9rem;">Scope</th>
        <th style="padding:12px;text-align:left;font-weight:700;color:#2b2b2b;font-size:0.9rem;">ETF Benchmark</th>
        <th style="padding:12px;text-align:left;font-weight:700;color:#2b2b2b;font-size:0.9rem;">Stock Count</th>
        <th style="padding:12px;text-align:left;font-weight:700;color:#2b2b2b;font-size:0.9rem;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid rgba(0,0,0,.05);background:linear-gradient(90deg, rgba(176,57,202,.02), transparent);">
        <td style="padding:12px;font-weight:700;color:#b039ca;">Global Market</td>
        <td style="padding:12px;">ONEQ</td>
        <td style="padding:12px;text-align:center;"><strong>2,074</strong></td>
        <td style="padding:12px;font-size:0.9rem;color:#555;">Fidelity Nasdaq Composite</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(0,0,0,.05);background:linear-gradient(90deg, rgba(255,77,136,.02), transparent);">
        <td style="padding:12px;font-weight:700;color:#ff4d88;">Health Care</td>
        <td style="padding:12px;">IBB</td>
        <td style="padding:12px;text-align:center;">564</td>
        <td style="padding:12px;font-size:0.9rem;color:#555;">NASDAQ Biotechnology</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(0,0,0,.05);background:linear-gradient(90deg, rgba(176,57,202,.02), transparent);">
        <td style="padding:12px;font-weight:700;color:#b039ca;">Finance</td>
        <td style="padding:12px;">FTXO</td>
        <td style="padding:12px;text-align:center;">484</td>
        <td style="padding:12px;font-size:0.9rem;color:#555;">First Trust NASDAQ Bank</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(0,0,0,.05);background:linear-gradient(90deg, rgba(255,77,136,.02), transparent);">
        <td style="padding:12px;font-weight:700;color:#ff4d88;">Technology</td>
        <td style="padding:12px;">QTEC</td>
        <td style="padding:12px;text-align:center;">377</td>
        <td style="padding:12px;font-size:0.9rem;color:#555;">First Trust NASDAQ-100 Tech</td>
      </tr>
      <tr style="background:linear-gradient(90deg, rgba(176,57,202,.02), transparent);">
        <td style="padding:12px;font-weight:700;color:#b039ca;">Consumer Services</td>
        <td style="padding:12px;">FTXD</td>
        <td style="padding:12px;text-align:center;">283</td>
        <td style="padding:12px;font-size:0.9rem;color:#555;">First Trust Consumer Discretionary</td>
      </tr>
    </tbody>
  </table>
</div>

---

### 6. Performance Metrics

<div style="max-width:900px;margin:32px auto;">
  <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:14px;">
    <div style="padding:18px;border-radius:10px;background:linear-gradient(135deg, rgba(255,77,136,.08), transparent);border:1px solid rgba(255,77,136,.2);box-shadow:0 4px 12px rgba(0,0,0,.04);">
      <div style="font-size:2rem;margin-bottom:8px;">📈</div>
      <h4 style="margin:0 0 6px 0;color:#ff4d88;font-size:0.95rem;font-weight:700;">Annualized Returns</h4>
      <p style="margin:0;color:#555;font-size:0.85rem;line-height:1.5;">Geometric average of yearly growth rates.</p>
    </div>
    <div style="padding:18px;border-radius:10px;background:linear-gradient(135deg, rgba(176,57,202,.08), transparent);border:1px solid rgba(176,57,202,.2);box-shadow:0 4px 12px rgba(0,0,0,.04);">
      <div style="font-size:2rem;margin-bottom:8px;">📊</div>
      <h4 style="margin:0 0 6px 0;color:#b039ca;font-size:0.95rem;font-weight:700;">Volatility</h4>
      <p style="margin:0;color:#555;font-size:0.85rem;line-height:1.5;">Annualized standard deviation of daily returns.</p>
    </div>
    <div style="padding:18px;border-radius:10px;background:linear-gradient(135deg, rgba(255,77,136,.08), transparent);border:1px solid rgba(255,77,136,.2);box-shadow:0 4px 12px rgba(0,0,0,.04);">
      <div style="font-size:2rem;margin-bottom:8px;">⚖️</div>
      <h4 style="margin:0 0 6px 0;color:#ff4d88;font-size:0.95rem;font-weight:700;">Sharpe Ratio</h4>
      <p style="margin:0;color:#555;font-size:0.85rem;line-height:1.5;">Risk-adjusted performance measure.</p>
    </div>
    <div style="padding:18px;border-radius:10px;background:linear-gradient(135deg, rgba(176,57,202,.08), transparent);border:1px solid rgba(176,57,202,.2);box-shadow:0 4px 12px rgba(0,0,0,.04);">
      <div style="font-size:2rem;margin-bottom:8px;">🎯</div>
      <h4 style="margin:0 0 6px 0;color:#b039ca;font-size:0.95rem;font-weight:700;">Cumulative Returns</h4>
      <p style="margin:0;color:#555;font-size:0.85rem;line-height:1.5;">Total growth over the 15-year period.</p>
    </div>
  </div>
</div>

  
---



## Global Market Analysis

We begin with an overview of the entire NASDAQ market, comparing the **Fidelity Nasdaq Composite Index Tracking Stock (ONEQ)** against our **Equally-Weighted Global Portfolio** (composed of 2,074 stocks).

Use the dropdown menu below to explore how this relationship changes over different time horizons:

<div style="margin-bottom: 15px;">
  <label for="timePeriodSelect" style="font-weight: bold; margin-right: 10px;">Select Time Period:</label>
  <select id="timePeriodSelect" onchange="updateGlobalAnalysis(this.value)" style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 16px;">
    <option value="full">2005 - 2020 (Full Period)</option>
    <option value="post_crisis">2010 - 2020 (Post-Crisis)</option>
    <option value="recent">2015 - 2020 (Recent Bull Market)</option>
  </select>
</div>

<iframe 
    id="globalGraphFrame"
    src="https://visualize.graphy.app/view/4c192612-84b8-45c4-ac51-93d98b1ce3ef" 
    width="100%" 
    height="510" 
    style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
    allow="fullscreen">
</iframe>

<div id="analysisText" style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
  <strong>Key Observation (2005-2020):</strong><br>
  Over this 15-year period, the equally-weighted portfolio (EW) demonstrates the power of "Market Breadth". While the ETF (ONEQ) is driven by a handful of giants, the EW benefits from the explosive growth of mid-caps during recovery phases (2009-2013), building a lead that allows it to withstand the late dominance of Big Tech. <em>Note: Due to the long duration, these results might be partially influenced by Survivorship Bias.</em>
</div>

<script>
// Data Configuration (URLs and Texts)
const analysisData = {
  "full": {
    url: "https://visualize.graphy.app/view/4c192612-84b8-45c4-ac51-93d98b1ce3ef",
    title: "Key Observation (2005-2020):",
    text: "Over this 15-year period, the equally-weighted portfolio (EW) demonstrates the power of \"Market Breadth\". While the ETF (ONEQ) is driven by a handful of giants, the EW benefits from the explosive growth of mid-caps during recovery phases (2009-2013), building a lead that allows it to withstand the late dominance of Big Tech. <em>Note: Due to the long duration, these results might be partially influenced by Survivorship Bias.</em>"
  },
  "post_crisis": {
    url: "https://visualize.graphy.app/view/b51fa31b-4f14-41a6-bee0-4c7ef1f6bb21",
    title: "Key Observation (2010-2020):",
    text: "This decade shows two faces. The beginning (2010-2014) is marked by an outperformance of the real economy (EW), where small companies rebound stronger after the crisis. However, the gap narrows towards the end of the decade as investors take refuge in safe havens (Large Caps), illustrating a market beginning to concentrate."
  },
  "recent": {
    url: "https://visualize.graphy.app/view/ed9b5f9b-1825-4dce-af2b-71612823dd62",
    title: "Key Observation (2015-2020):",
    text: "This is the period of the 'Leaders' revenge. The ETF (ONEQ) significantly outperforms because the market rally is driven almost exclusively by Tech giants (GAFAM). The equally-weighted portfolio reveals an underlying weakness here: the majority of NASDAQ stocks actually underperformed the weighted index during this phase of extreme concentration."
  }
};

function updateGlobalAnalysis(periodKey) {
  // Retrieve corresponding data
  const data = analysisData[periodKey];
  
  // Update Iframe
  document.getElementById('globalGraphFrame').src = data.url;
  
  // Update Text
  const textContainer = document.getElementById('analysisText');
  textContainer.innerHTML = `<strong>${data.title}</strong><br>${data.text}`;
}
</script>

### Temporal Dynamics: The 2015 Regime Shift

To understand exactly *when* and *why* market leadership changed, we combined a discrete time-period breakdown with a rolling window analysis. Both methods point to a structural pivot in the middle of the last decade.

#### 1. Discrete Period Analysis
We first broke down returns into four distinct market phases. The interactive visualizations below highlight the dramatic reversal in fortune across different time periods:

<div class="visualization-grid" style="margin-top: 8px;">
  <div class="visualization-grid-item">
    <div class="flourish-embed flourish-chart" data-src="visualisation/26918460">
      <script src="https://public.flourish.studio/resources/embed.js"></script>
      <noscript><img src="https://public.flourish.studio/visualisation/26918460/thumbnail" width="100%" alt="chart visualization" /></noscript>
    </div>
  </div>
  
  <div class="visualization-grid-item">
    <div class="flourish-embed flourish-chart" data-src="visualisation/26919316">
      <script src="https://public.flourish.studio/resources/embed.js"></script>
      <noscript><img src="https://public.flourish.studio/visualisation/26919316/thumbnail" width="100%" alt="chart visualization" /></noscript>
    </div>
  </div>
  
  <div class="visualization-grid-item">
    <iframe 
      class="graphy-embed"
      src="https://visualize.graphy.app/view/9c67262d-33df-4dc6-b2e1-1f97980a408e" 
      allow="fullscreen">
    </iframe>
  </div>
  
  <div class="visualization-grid-item">
    <iframe 
      class="graphy-embed"
      src="https://visualize.graphy.app/view/0a4ce090-6615-401b-8ab5-a982da2fc730" 
      allow="fullscreen">
    </iframe>
  </div>
</div>

| Period | ETF Return | EW Return | Difference | Market Context |
|--------|-----------|-----------|------------|----------------|
| **2005-2008** | -6.89% | 0.77% | +7.66% | Pre-crisis period |
| **2009-2012** | 17.45% | 32.56% | +15.11% | Post-crisis recovery |
| **2013-2016** | 15.89% | 19.62% | +3.74% | Mid-bull market |
| **2017-2020** | 10.90% | -3.99% | -14.89% | Late bull & COVID |

#### 2. Rolling Window Visualization
The reversal is even more apparent when viewed dynamically. The chart below shows the rolling 2-year return difference, pinpointing the "Regime Shift" specifically to the 2014-2016 period.

![Rolling Window Analysis](/assets/img/rolling_window_analysis.png)
*Rolling 2-year returns comparison. Green areas indicate periods where the Equally-Weighted portfolio (Followers) outperformed.*

**The "Pivot Point" (2014-2016):**
* **The "Breadth" Era (2009–2014):** Post-crisis recovery was broad-based. Small and mid-cap companies ("Followers") grew faster than established giants. This was a "stock picker's market."
* **The "Concentration" Era (2015–2020):** A clear regime shift occurred around 2015. Investors flocked to "Safe Haven" mega-caps (GAFAM), causing the standard ETF to outperform significantly while the average stock lagged behind.

---

## Sector-by-Sector Analysis

### Health Care Sector (IBB)

![Health Care Analysis](/assets/img/sector_health_care.png)

**Performance Highlights:**
- **Equally-Weighted Return:** 15.99% annually
- **ETF Return:** 9.95% annually
- **Outperformance:** +6.04% in favor of EW portfolio
- **Sharpe Ratio:** EW (0.78) vs ETF (0.42) - **86% better risk-adjusted returns**

**Insights:**
The Health Care sector shows the strongest outperformance of equally-weighted portfolios. With 564 stocks analyzed, the diversification benefits are clear. The biotech and pharmaceutical industries have significant variation between large-cap leaders and smaller innovative companies, allowing equally-weighted portfolios to capture growth across the entire sector spectrum.

**Key Observations:**
- EW portfolio showed remarkable resilience during market downturns
- Consistent outperformance throughout the 15-year period
- Higher volatility in EW portfolio was more than compensated by superior returns

---

### Finance Sector (FTXO)

![Finance Analysis](/assets/img/sector_finance.png)

**Performance Highlights:**
- **Equally-Weighted Return:** 0.98% annually
- **ETF Return:** -7.55% annually
- **Outperformance:** +8.53% in favor of EW portfolio
- **Sharpe Ratio:** EW (0.05) vs ETF (-0.27) - **ETF had negative risk-adjusted returns**

**Insights:**
The Finance sector tells a dramatic story. The 2008 financial crisis devastated large financial institutions (heavily weighted in the ETF), while the equally-weighted portfolio, by diversifying across 484 financial stocks, managed to stay positive. This is a powerful demonstration of how equal weighting can protect against sector-specific crises that disproportionately affect market leaders.

**Key Observations:**
- Both portfolios struggled during 2008-2009 financial crisis
- EW portfolio recovered faster and maintained positive returns
- ETF remained below initial investment value for most of the period
- Largest outperformance difference among all sectors

---

### Technology Sector (QTEC)

![Technology Analysis](/assets/img/sector_technology.png)

**Performance Highlights:**
- **Equally-Weighted Return:** 12.82% annually
- **ETF Return:** 11.43% annually
- **Outperformance:** +1.39% in favor of EW portfolio
- **Sharpe Ratio:** EW (0.59) vs ETF (0.47) - **26% better risk-adjusted returns**

**Insights:**
Technology shows the smallest outperformance gap, suggesting that large tech companies (represented in the ETF) have been strong performers. However, equally-weighted portfolios still edge out, likely due to capturing growth from mid-cap and emerging tech companies that aren't heavily weighted in the ETF.

**Key Observations:**
- Both strategies performed well in the tech sector
- EW portfolio showed more consistent growth trajectory
- Technology sector demonstrated strong overall returns regardless of weighting method

---

### Consumer Services Sector (FTXD)

![Consumer Services Analysis](/assets/img/sector_consumer_services.png)

**Performance Highlights:**
- **ETF Return:** -2.59% annually
- **Equally-Weighted Return:** -7.21% annually
- **Underperformance:** -4.62% (ETF outperformed)
- **Sharpe Ratio:** ETF (-0.13) vs EW (-0.35) - **ETF had better risk-adjusted returns**

**Insights:**
Consumer Services is the **only sector where ETFs outperformed**. This suggests that in this sector, market leaders (large retailers, service companies) have been more resilient than the average company. The sector faced challenges from e-commerce disruption and changing consumer preferences, where established leaders with scale advantages performed better.

**Key Observations:**
- Both portfolios had negative returns during this period
- ETF's value-weighting favored resilient large-cap companies
- Sector transformation (retail disruption) may have hurt smaller companies more
- Only sector where concentration in leaders was beneficial

---
### Sector Overview & Key Findings

**Key Findings:**

 **Equally-Weighted portfolios outperformed in 3 out of 4 sectors (75%)**

| Sector | ETF Return | EW Return | Difference | Winner |
|--------|-----------|-----------|------------|--------|
| Health Care | 9.95% | **15.99%** | +6.04% | ✅ EW |
| Finance | -7.55% | **0.98%** | +8.53% | ✅ EW |
| Technology | 11.43% | **12.82%** | +1.39% | ✅ EW |
| Consumer Services | **-2.59%** | -7.21% | -4.62% | ❌ ETF |


---

## Key Insights & Implications

### 1. **Diversification Benefits**
Equally-weighted portfolios capture returns across the entire sector spectrum, not just market leaders. This is particularly valuable in sectors with high innovation and growth potential among smaller companies.

### 2. **Crisis Resilience**
During market downturns (2008 financial crisis, 2020 COVID), equally-weighted portfolios showed superior resilience. Diversification across many companies provided protection when large-cap leaders were hit hardest.

### 3. **Sector-Specific Dynamics**
- **Health Care & Finance:** Strong EW outperformance suggests these sectors have significant value beyond just the largest companies
- **Technology:** Smaller outperformance gap indicates large tech companies are also strong performers
- **Consumer Services:** ETF outperformance suggests scale advantages matter more in this sector

### 4. **Risk-Adjusted Returns**
Equally-weighted portfolios generally showed better Sharpe ratios, indicating superior risk-adjusted performance. The additional volatility was more than compensated by higher returns.

### 5. **Market Leadership Question**
The results challenge the assumption that market leaders (value-weighted) always outperform. In most sectors, the "average" company (equally-weighted) delivered better returns, suggesting that:
- Market capitalization may not always reflect future growth potential
- Smaller companies can drive significant sector returns
- Diversification provides both return and risk benefits

---


## Conclusion

This comprehensive analysis reveals that **equally-weighted portfolios outperformed value-weighted ETFs in 75% of sectors analyzed** over the 2005-2020 period. The findings suggest that:

1. **Diversification pays off:** Spreading investments equally across sector companies captures growth opportunities beyond just market leaders

2. **Crisis protection:** Equally-weighted portfolios showed superior resilience during market downturns

3. **Sector matters:** Performance varies significantly by sector, with Health Care and Finance showing the strongest EW advantages

4. **Risk-adjusted superiority:** Better Sharpe ratios indicate that EW portfolios provide superior risk-adjusted returns

5. **Market leadership isn't everything:** Large market cap doesn't always translate to superior returns


---

<script>
// Simple interactive cards
document.addEventListener('DOMContentLoaded', function() {
  // Add click interaction to comparison cards
  document.querySelectorAll('.comparison-card-interactive').forEach(card => {
    card.addEventListener('click', function() {
      // Remove active class from all cards
      document.querySelectorAll('.comparison-card-interactive').forEach(c => {
        c.classList.remove('active');
      });
      // Add active class to clicked card
      this.classList.add('active');
    });
  });
});
</script>















