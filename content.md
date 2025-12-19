<div class="intro-section" markdown="1">

Here we do the whole storytelling and introduction about the project, nice graphics (story related, check how the best projwect from last years look like) and research questions. TASK#1

__Motivations:__

Financial markets are often portrayed as dominated by a handful of giants, but do the biggest companies truly drive the movements of their entire industry? This project investigates whether industry leaders systematically influence smaller peers within NASDAQ sectors. Using historical stock price data enriched with external metadata, we will group companies by industry, develop objective criteria to rank them, and analyze how information and volatility propagate across the market. Our methodology combines time-series modeling and Granger causality testing to detect leader-follower patterns in price dynamics. We will also assess how persistent these relationships are and how they evolve during major market events. Another component compares value-weighted ETFs with equally weighted portfolios to quantify whether performance is concentrated among large-cap leaders or broadly distributed. By highlighting where price discovery originates, from dominant firms or distributed behavior, this project offers insights into market power and the dynamics of information diffusion.


<div class="research-questions-box" markdown="1">
## Research Questions

1. **How do we define a "leader" and a "follower" in stock movements?** How to sectorize and hierarchize company?
2. **How can we detect directional influence between stocks within a sector?** (use daily return time series, detect this using lagged correlations or Granger causality)
3. **Are leader-follower dynamics consistent across sectors?** Do some sectors have stronger leadership patterns than others?
4. **How stable are these influence patterns over time,** and how do they evolve during major market events?
5. **What does ETF analysis reveal about the performance of market leaders,** sector averages, and followers, and about overall market concentration?
6. **How does survivorship bias impact the validity of our conclusions,** and what steps can be taken to reduce its effects? and Which time window should we analyze?

</div>

</div>


**Dataset 1: NASDAQ Company List**
- Source: NASDAQ dataset (`companylist.csv`)
- Contents: Company information only (no ETFs)
- Key fields: Symbol, Name, MarketCap, Sector, Industry, IPO year
- Purpose: Provides sector classification and market capitalization for companies

**Dataset 2: Stock Market Dataset**
- Source: Kaggle Stock Market Dataset
- Contains: Stocks, ETFs, and symbols metadata
- Components:
  - **`stocks/` folder**: Individual CSV files for each stock with daily price data (OHLCV + Adjusted Close)
  - **`etfs/` folder**: Individual CSV files for each ETF with daily price data (OHLCV + Adjusted Close)
  - **`symbols_valid_meta.csv`**: Metadata for all securities (stocks AND ETFs), including ETF flags, exchange listings, security names
- Purpose: Provides historical price data and security type classification (stock vs ETF)



<h2>Dataset overview</h2>
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

