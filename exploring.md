getting rid of the ETFs for the first part of the project (they are treated in the last part of the website), as we are analyzing single companies impact, we merged the stock_dataset with the company_list to gain more information about each stock. Find below visuals interactions of it, as we now are capable of categoriziing each stock into an industry.


## Exploring the Market

Before we look for “leaders”, we need to map the playing field: **what’s in our universe, how it is distributed across sectors, and how uneven “size” really is.**

### Our analysis-ready universe (after cleaning)
- **2,074 NASDAQ stocks** (common stocks / ADRs) with **at least 2 years of price history**
- **315 ETFs** kept separately as value-weighted benchmarks
- **12 NASDAQ sectors** covered (largest by count: **Health Care (526)**, **Finance (411)**, **Technology (337)**)

### First intuition: the market is wide… but not flat
Market capitalization is extremely skewed:
the **median firm is ~0.4B**, while the largest names reach **hundreds of billions**.
In our metadata snapshot, the **top 10 stocks represent ~44%** of total market cap — a reminder that “the market” can easily look like “a few giants”.

### Why this matters for the rest of the project
This section sets the stage for the next steps:
- **Hierarchization**: ranking firms within each sector (beyond raw size)
- **Leadership analysis**: testing whether influence follows the same concentration patterns (or not)



indeed, there are handful of giant, but do they have the control ?
on voit que ca varie avec le domaine, let's dig into this



<div class="flourish-embed flourish-chart" data-src="visualisation/26923902"></div>
<script src="https://public.flourish.studio/resources/embed.js"></script>
<noscript>
  <img src="https://public.flourish.studio/visualisation/26923902/thumbnail" width="100%" alt="chart visualization" />
</noscript>



<div class="flourish-embed flourish-chart" data-src="visualisation/26924472"></div>
<noscript>
  <img src="https://public.flourish.studio/visualisation/26924472/thumbnail" width="100%" alt="chart visualization" />
</noscript>
