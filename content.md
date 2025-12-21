## Motivations

*Who really moves the market?*

Financial markets are often portrayed as being ruled by a handful of giants.  
But when an entire sector shifts, is it truly the leaders pulling the strings, or is that impression simply a byproduct of size?

In this project, we treat the Nasdaq not as a single voice, but as a set of sectors where firms have very different weights and roles. Rather than assuming large caps dominate, we test it: we rank companies within each sector and track how returns and volatility propagate over time.

Think of each sector as a group moving together — but not everyone steps at the same time. Below, we explore who tends to move first and who follows. We also compare two ways of “building the market”: one where big companies weigh more, and one where every company counts equally.
Side by side, this tells us whether performance comes from a few giants or from the whole pack.

*Do signals originate from industry leaders and cascade downward? Or do they form collectively, across companies of all sizes?*

By following the data, and letting the charts speak, this project offers a clearer view of market power, sector dynamics, and how information actually diffuses through the Nasdaq.


<!-- NASDAQ acronym -->
<div class="nasdaq-reveal" id="nasdaqReveal" aria-label="NASDAQ acronym reveal">

  <div class="nasdaq-letters" role="list" aria-label="Reveal each letter">
    <button class="nasdaq-letter" type="button" data-word="Not" aria-label="N - Not">
      <span class="L">N</span>
      <span class="word">Not</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Always" aria-label="A - Always">
      <span class="L">A</span>
      <span class="word">Always</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Size" aria-label="S - Size">
      <span class="L">S</span>
      <span class="word">Size</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Driven" aria-label="D - Driven">
      <span class="L">D</span>
      <span class="word">Driven</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Across" aria-label="A - Across">
      <span class="L">A</span>
      <span class="word">Across</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Quotes" aria-label="Q - Quotes">
      <span class="L">Q</span>
      <span class="word">Quotes</span>
    </button>
  </div>

  <div class="nasdaq-full" aria-live="polite">
    <span class="label">Decoded:</span>
    <span class="sentence" id="nasdaqSentence">
      Hover or tap each letter to discover our first intuition.
    </span>
  </div>

</div>
<!-- end NASDAQ acronym -->



## Data Overview

- NASDAQ Stock Market Dataset (Kaggle): daily OHLCV price data for stocks and ETFs + unified metadata (`symbols_valid_meta.csv`)  

- External Data: NASDAQ Company List (Kaggle): companies only, with Market Cap, Sector/Industry, and IPO Year (`companylist.csv`) 

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

