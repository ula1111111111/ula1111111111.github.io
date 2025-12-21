Let's dive into our data !
We start by stripping the dataset down to what matters for our question: single firms.  
For the first part of the project, we therefore exclude ETFs (we only use some of them in the last section) and focus on individual NASDAQ-listed companies.
 
To enrich the metadata dataset, we merge it with the external company list, adding key descriptors for the 2,074 remaining stocks (market cap, IPO year, sector). With the universe cleaned and mapped, we can finally “see” what the NASDAQ looks like once split into sectors:

<div class="flourish-embed flourish-chart" data-src="visualisation/26923902"></div>
<script src="https://public.flourish.studio/resources/embed.js"></script>
<noscript>
  <img src="https://public.flourish.studio/visualisation/26923902/thumbnail" width="100%" alt="chart visualization" />
</noscript>

A first striking pattern is how uneven size is within sectors: the top 5% firms by market cap often capture a large share of the sector’s total value. The magnitude differs across sectors, but the takeaway is consistent: sectors may contain many firms, yet value can still be concentrated in a handful of giants (*in terms of market cap*), exactly the kind of structure where “leadership” effects could emerge.


<div class="flourish-embed flourish-chart" data-src="visualisation/26924472"></div>
<noscript>
  <img src="https://public.flourish.studio/visualisation/26924472/thumbnail" width="100%" alt="chart visualization" />
</noscript>

To complement this snapshot of "size", we use IPO year as a proxy for sector growth through new entrants: the stacked area chart tracks the cumulative number of listed companies by sector. This helps compare sector dynamics as some expand steadily while others remain relatively stable. This also motivates that there must be additional ranking dimensions beyond market cap (e.g., *how established a company is*, and *how “crowded” its sector is*).

This section sets the stage for the next steps, as we now have handful of elements to hierarchize the companies within each sector, to then be able to process our leadership analysis, testing whether influence follows the same concentration patterns (or not).