Let's dive into our data, and extract the most of it for our analysis. We will get rid of the ETFs stocks for the first part of the project, and will only use few of them in the last section. That is because we aim at analyzing single companies impact on Nasdaq, so we will mostly focus on individuals stocks. 
We merged the stock_dataset with company_list to gain more information about each 2,074 remaining stocks (Market_cap, IPO, Sector). We present below the first relevant charts, now that we have separated them into sectors :
 

<div class="flourish-embed flourish-chart" data-src="visualisation/26923902"></div>
<script src="https://public.flourish.studio/resources/embed.js"></script>
<noscript>
  <img src="https://public.flourish.studio/visualisation/26923902/thumbnail" width="100%" alt="chart visualization" />
</noscript>


A first striking look at our data is to witness how the top 5% companies in terms of Market Cap are englobing a big part of their sector. Even though the phenomenon is not exactly the same across all industris, we indeed notice that there are "giants" hidden in every industry *in terms of market cap*


<div class="flourish-embed flourish-chart" data-src="visualisation/26924472"></div>
<noscript>
  <img src="https://public.flourish.studio/visualisation/26924472/thumbnail" width="100%" alt="chart visualization" />
</noscript>

See above the evolution of the companies per sector, this allows to see which sectors are in expansion, and which are not. This is also a key element to compare dynamics across sectors. This could also be a criteria to analyse : how long is this company in the market for ? How big is its industry ? 

We now have handful of elements to keep forward and hierarchize the companies per sector, to then


This section sets the stage for the next steps, as we now have handful of elements to hierarchize the companies within each sector, to then be able to process our leadership analysis, testing whether influence follows the same concentration patterns (or not).