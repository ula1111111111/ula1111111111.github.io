## Motivations

### Who really moves the market?

Financial markets are often portrayed as being ruled by a handful of giants.  
But when an entire sector shifts, is it truly the leaders pulling the strings, or is that impression simply a byproduct of size?

In this project, we treat the Nasdaq not as a single voice, but as a set of sectors where firms have very different weights and roles. Rather than assuming large caps dominate, we test it: we rank companies within each sector and track how returns and volatility propagate over time.

The visuals that follow visualize this process:  
they reveal **who moves first**, **who reacts**, and **whether leadership is consistent or contextual**.

To look beneath the index-level story, we also compare:
- **Value-weighted ETFs**, where the largest firms naturally carry more influence  
- **Equally weighted portfolios**, where every company counts the same

By placing these performances side by side, the visuals highlight whether returns are driven by a few dominant players — or emerge from broader, distributed behavior.

Do signals originate from industry leaders and cascade downward?  
Or do they form collectively, across companies of all sizes?

By following the data — and letting the charts speak — this project offers a clearer view of market power, sector dynamics, and how information actually diffuses through the Nasdaq.


## Data Overview

- **NASDAQ Stock Market Dataset (Kaggle)**: daily OHLCV price data for stocks and ETFs + unified metadata (`symbols_valid_meta.csv`)  

- **External Data: NASDAQ Company List (Kaggle)**: companies only, with Market Cap, Sector/Industry, and IPO Year (`companylist.csv`) 

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

