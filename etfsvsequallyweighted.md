---
layout: post
title: "ETF vs Equally-Weighted Portfolios: A Comprehensive Sector Analysis"
date: 2025-01-27
tags: [finance, portfolio-analysis, etf, equally-weighted, market-research]
image: /assets/img/sector_summary_dashboard.png
description: "An in-depth analysis comparing value-weighted ETFs with equally-weighted portfolios across four major sectors (Health Care, Finance, Technology, Consumer Services) from 2005-2020, revealing surprising insights about market leadership and diversification benefits."
social-share: true
gh-repo: ula1111111111/ula1111111111.github.io
gh-badge: [star, fork]
---

## Introduction

This analysis explores the long-term performance dynamics between two distinct investment approaches within the NASDAQ market: **Value-Weighted (ETFs)** and **Equally-Weighted Portfolios**.

Beyond a simple performance comparison, this study serves as a proxy for understanding market structure:
* **Market Leaders (ETFs):** Value-weighted indices give more importance to large firms, representing the dominance of market giants.
* **Market Followers (Equally-Weighted):** By treating every company the same regardless of size, these portfolios capture the collective behavior of the broader market, including small and mid-sized firms.

We apply this comparative framework at two levels:
1.  **Global Analysis:** Comparing a general value-weighted benchmark against a comprehensive **Equally-Weighted portfolio** of all eligible NASDAQ stocks to assess overall market drivers.
2.  **Sector Analysis:** Focusing on four major sectors (Health Care, Finance, Technology, Consumer Services) to see if these patterns hold true across different industries.

**Key Question:** Is market performance primarily driven by the concentrated power of a few "Leaders", or does the diversified strength of the "Followers" provide a superior edge?


---

## Methodology

### 1. Conceptual Framework: Leaders vs. Followers
This analysis employs a comparative method to assess market dynamics:
* **Value-Weighted (ETFs):** Represents "Market Leaders." Weights are proportional to market capitalization, meaning performance is heavily driven by large-cap firms.
* **Equally-Weighted (Portfolios):** Represents "Market Followers" and the broader economy. Every company has the same weight (1/n), regardless of size.

**Interpretation Logic:**
* If **ETF > Equally-Weighted**: Sector performance is driven by large-cap concentration (Leaders).
* If **Equally-Weighted > ETF**: Returns are driven by broader participation of small and mid-sized firms (Followers).

### 2. Data Sources & Preparation
The analysis relies on two primary datasets covering the period **2005-2020**:
1.  **NASDAQ Company List:** Provides metadata (Sector, Industry, Market Cap) to classify firms.
2.  **Stock Market Dataset:** Daily price data (Open, Close, Adjusted Close) used to compute returns.

**Data Cleaning Rules:**
* **Time Period:** 15 years (2005-2020).
* **Inclusion Criteria:** NASDAQ stocks with 2 years or more of historical data (Total: 2,074 companies).
* **Outlier Handling:** Daily returns clipped at +/- 50% to filter data errors.

### 3. Portfolio Construction
To ensure a robust comparison, we applied strict construction rules:

**Equally-Weighted Portfolios:**
* **Weighting:** Each stock is assigned an identical weight of 1/n.
* **Rebalancing:** **Daily rebalancing** is performed to maintain equal exposure, preventing high-performing stocks from dominating the portfolio over time.
* **Calculation:** Mean-based averaging of daily returns across all active constituents.

**ETF Benchmarks:**
* **Weighting:** Value-weighted (Market Capitalization).
* **Rebalancing:** Follows the standard index methodology (typically quarterly).

### 4. Limitations: Survivorship Bias
A general limitation that affects all analyses in this project is the presence of **survivorship bias**. Because the NASDAQ dataset only includes companies that were still active and listed in 2020, firms that went bankrupt, were delisted, or merged before that date are missing from the data.

This exclusion primarily affects small and mid-cap firms, which are more likely to disappear over time, and may lead to an overestimation of their average performance or an underestimation of market volatility.

**Mitigation Strategies Considered:**
* Shortening the analysis window to recent years (e.g., 2015–2020) where firm disappearance is less frequent.
* Weighting companies according to their lifespan (using IPO year) to assign higher stability to long-standing firms.

### 5. Global & Sector Benchmarks
The analysis starts with a global market view before diving into specific sectors:

| Scope | ETF Benchmark | Stock Count (EW Portfolio) | ETF Description |
|-------|---------------|----------------------------|-----------------|
| **Global Market** | **ONEQ** | **2,074** | **Fidelity Nasdaq Composite Index Tracking Stock** |
| **Health Care** | IBB | 564 | iShares NASDAQ Biotechnology ETF |
| **Finance** | FTXO | 484 | First Trust NASDAQ Bank ETF |
| **Technology** | QTEC | 377 | First Trust NASDAQ-100 Tech Index |
| **Consumer Services** | FTXD | 283 | First Trust Consumer Discretionary AlphaDEX |

### 6. Performance Metrics
To evaluate the "Leaders vs. Followers" dynamic, we calculated:
* **Annualized Returns:** Geometric average of yearly growth.
* **Volatility:** Annualized standard deviation of daily returns.
* **Sharpe Ratio:** Risk-adjusted performance measure.
* **Cumulative Returns:** Total growth over the 15-year period.

  
---



## Global Market Analysis

We begin with an overview of the entire NASDAQ market, comparing the **Fidelity Nasdaq Composite Index Tracking Stock (ONEQ)** against our **Equally-Weighted Global Portfolio** (composed of 2,074 stocks).

Use the dropdown menu below to explore how this relationship changes over different time horizons:

<div style="margin-bottom: 15px;">
  <label for="timePeriodSelect" style="font-weight: bold; margin-right: 10px;">Select Time Period:</label>
  <select id="timePeriodSelect" onchange="updateGlobalGraph(this.value)" style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 16px;">
    <option value="https://visualize.graphy.app/view/4c192612-84b8-45c4-ac51-93d98b1ce3ef">2005 - 2020 (Full Period)</option>
    <option value="https://visualize.graphy.app/view/b51fa31b-4f14-41a6-bee0-4c7ef1f6bb21">2010 - 2020 (Post-Crisis)</option>
    <option value="https://visualize.graphy.app/view/588a6339-7cb1-4dea-a15d-a2504e0b83aa">2015 - 2020 (Recent Bull Market)</option>
  </select>
</div>

<iframe 
    id="globalGraphFrame"
    src="https://visualize.graphy.app/view/4c192612-84b8-45c4-ac51-93d98b1ce3ef" 
    width="100%" 
    height="420" 
    style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
    allow="fullscreen">
</iframe>

<script>
function updateGlobalGraph(url) {
  document.getElementById('globalGraphFrame').src = url;
}
</script>

**Key Observations:**
* **2005-2020:** [Insérez ici votre analyse pour la période complète]
* **2010-2020:** [Insérez ici votre analyse post-crise]
* **2015-2020:** [Insérez ici votre analyse récente]

## Executive Summary




![Summary Dashboard](/assets/img/sector_summary_dashboard.png)

<div class="flourish-embed flourish-chart" data-src="visualisation/26797913">
  <script src="https://public.flourish.studio/resources/embed.js"></script>
  <noscript>
    <img src="https://public.flourish.studio/visualisation/26797913/thumbnail" width="100%" alt="chart visualization" />
  </noscript>
</div>
*Comprehensive overview of all sector comparisons*

### Key Findings

🎯 **Equally-Weighted portfolios outperformed in 3 out of 4 sectors (75%)**

| Sector | ETF Return | EW Return | Difference | Winner |
|--------|-----------|-----------|------------|--------|
| Health Care | 9.95% | **15.99%** | +6.04% | ✅ EW |
| Finance | -7.55% | **0.98%** | +8.53% | ✅ EW |
| Technology | 11.43% | **12.82%** | +1.39% | ✅ EW |
| Consumer Services | **-2.59%** | -7.21% | -4.62% | ❌ ETF |

**Average Outperformance:** +2.84% in favor of Equally-Weighted portfolios

---

## Sector-by-Sector Analysis

### 🏥 Health Care Sector (IBB)

![Health Care Analysis](/assets/img/sector_health_care.png)

<iframe 
    src="https://visualize.graphy.app/view/e9449b98-367f-4923-b374-8b9d10814cee" 
    width="100%" 
    height="600" 
    style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
    allow="fullscreen">
</iframe>
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

### 💰 Finance Sector (FTXO)

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

### 💻 Technology Sector (QTEC)

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

### 🛒 Consumer Services Sector (FTXD)

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

## Time Period Analysis

To understand how these relationships evolved over time, we analyzed performance across different market periods:

![Time Period Comparison](/assets/img/time_period_comparison.png)

### Period Breakdown

| Period | ETF Return | EW Return | Difference | Market Context |
|--------|-----------|-----------|------------|----------------|
| **2005-2008** | -6.89% | 0.77% | +7.66% | Pre-crisis period |
| **2009-2012** | 17.45% | 32.56% | +15.11% | Post-crisis recovery |
| **2013-2016** | 15.89% | 19.62% | +3.74% | Mid-bull market |
| **2017-2020** | 10.90% | -3.99% | -14.89% | Late bull & COVID |

**Key Insights:**
- **Strongest EW Outperformance:** 2009-2012 recovery period (+15.11%)
- **Only ETF Outperformance:** 2017-2020 period (-14.89% underperformance)
- **Crisis Period (2005-2008):** EW showed resilience (+7.66% outperformance)

---

## Rolling Window Analysis

To capture dynamic changes in the relationship, we performed a rolling 2-year window analysis with monthly steps:

![Rolling Window Analysis](/assets/img/rolling_window_analysis.png)

**Findings:**
- **162 rolling windows analyzed** (2005-2020)
- **EW outperformed in 113/162 windows (69.7%)**
- **ETF outperformed in 49/162 windows (30.3%)**

The rolling analysis reveals that equally-weighted portfolios have been consistently superior across most time periods, with particularly strong performance during recovery phases and market transitions.

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

## Limitations & Considerations

### Survivorship Bias
⚠️ **Important Note:** This analysis includes only companies that survived until 2020. Companies that were delisted, went bankrupt, or merged before 2020 are excluded. This may bias results toward successful companies, potentially inflating equally-weighted portfolio returns.

### Data Quality
- Daily returns were clipped at ±50% to prevent data errors from skewing results
- Minimum 2 years of data required for inclusion
- Some sectors may have limited data availability in earlier periods

### Market Conditions
- Analysis period (2005-2020) includes multiple market cycles
- Results may vary in different market environments
- Sector-specific factors (regulations, disruptions) affect outcomes

---

## Conclusion

This comprehensive analysis reveals that **equally-weighted portfolios outperformed value-weighted ETFs in 75% of sectors analyzed** over the 2005-2020 period. The findings suggest that:

1. **Diversification pays off:** Spreading investments equally across sector companies captures growth opportunities beyond just market leaders

2. **Crisis protection:** Equally-weighted portfolios showed superior resilience during market downturns

3. **Sector matters:** Performance varies significantly by sector, with Health Care and Finance showing the strongest EW advantages

4. **Risk-adjusted superiority:** Better Sharpe ratios indicate that EW portfolios provide superior risk-adjusted returns

5. **Market leadership isn't everything:** Large market cap doesn't always translate to superior returns

### Practical Implications

For investors and portfolio managers:
- Consider equally-weighted sector exposure as an alternative to sector ETFs
- Sector selection matters - some sectors favor EW, others favor value-weighting
- Diversification provides both return and risk benefits
- Market conditions and sector dynamics significantly impact relative performance

---

## Visualizations

All plots and analyses are available in the repository:

- **Summary Dashboard:** Overview of all sector comparisons
- **Individual Sector Plots:** Detailed analysis for each sector
- **Time Period Analysis:** Performance across different market periods
- **Rolling Window Analysis:** Dynamic relationship over time

---

## Technical Details

**Analysis Tools:**
- Python (Pandas, NumPy, Matplotlib, Seaborn)
- Custom portfolio construction algorithms
- Statistical performance metrics calculation

**Data Sources:**
- NASDAQ company listings
- Historical stock price data (2005-2020)
- Sector-specific ETF data

**Code Repository:**
All analysis code and scripts are available in the project repository for reproducibility and further research.

---

*This analysis provides insights into portfolio construction strategies and market dynamics. Past performance does not guarantee future results. Always consult with financial professionals before making investment decisions.*

---

**Tags:** #Finance #PortfolioAnalysis #ETF #EquallyWeighted #MarketResearch #InvestmentStrategy #SectorAnalysis #NASDAQ








