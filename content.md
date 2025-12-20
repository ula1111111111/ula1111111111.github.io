## Motivations

### Who really moves the market?

Financial markets are often portrayed as being ruled by a handful of giants.  
But when an entire sector shifts, is it truly the leaders pulling the strings —  
or is that impression simply a byproduct of size?

This project treats the Nasdaq not as a single voice, but as a collection of industries, each composed of firms with very different weights and roles.

---

### From intuition to evidence

Rather than assuming that large-cap companies dominate their sectors, we test this idea directly.

Using historical stock price data enriched with industry and company metadata, we group firms by sector, rank them using objective criteria, and observe how price movements and volatility spread across companies over time.

The charts that follow visualize this process:  
they reveal **who moves first**, **who reacts**, and **whether leadership is consistent or contextual**.

---

### Concentration or collective behavior?

Market indices often hide internal dynamics behind a single performance line.  
To uncover what lies beneath, we compare:

- **Value-weighted ETFs**, where the largest firms carry the most influence  
- **Equally weighted portfolios**, where every company counts the same

By placing these performances side by side, the visuals highlight whether returns are driven by a few dominant players — or emerge from broader, distributed behavior.

---

### Reading the market differently

Together, these visualizations aim to locate the true source of price discovery.  
Do signals originate from industry leaders and cascade downward?  
Or do they form collectively, across companies of all sizes?

By following the data — and letting the charts speak — this project offers a clearer view of market power, sector dynamics, and how information actually diffuses through the Nasdaq.


## Data Overview

### Provided Data: NASDAQ Stock Market Dataset

**Source:** Kaggle Stock Market Dataset  
**Components:** 
- Daily OHLCV price data for individual stocks and ETFs  
- Unified metadata file (`symbols_valid_meta.csv`) identifying security type, exchange, and name  

---
### External Data: NASDAQ Company List

**Source:** Kaggle (`companylist.csv`)
**Components:** 
- Companies only (no ETFs)
- Symbol, Name, Market Capitalization, Sector, Industry, IPO Year  
**Purpose:** Provides sector classification and market capitalization data for listed companies
 
**External Dataset overview:**  
<h2></h2>
<p style="max-width: 900px;">
  Click a sector bubble to reveal the full list of companies in that sector.
</p>

<div class="bubble-layout">
  <div id="sector-bubbles" class="bubble-chart"></div>

  <aside class="bubble-panel" id="sector-panel">
    <div class="panel-header">
      <div>
        <div class="panel-title" id="panel-title">Select a sector</div>
        <div class="panel-sub" id="panel-sub">Click a bubble to load companies</div>
      </div>
      <button class="panel-close" id="panel-close" type="button">×</button>
    </div>

    <input class="panel-search" id="panel-search" placeholder="Search company..." />

    <div class="panel-list" id="panel-list"></div>
  </aside>
</div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script>
  window.SECTORS_JSON_URL = "{{ '/assets/data/sectors.json' | relative_url }}";
  window.COMPANIES_BY_SECTOR_URL = "{{ '/assets/data/companies_by_sector.json' | relative_url }}";
</script>
<script src="{{ '/assets/js/sector-bubbles.js' | relative_url }}"></script>

