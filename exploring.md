---
layout: default
title: Exploring
permalink: /exploring/
---


Here we present some initial explorations of the datasets used in this project. The goal is to understand the structure and characteristics of the data before diving into deeper analysis. We will look at summary statistics, visualizations, and preliminary findings that can guide our subsequent modeling efforts. Just like Amine did for the milestone2. TASK#2 to copy all the results form exploration in milestone2 and add storytelling.


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

