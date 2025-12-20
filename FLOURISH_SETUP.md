# Flourish Visualization Setup Guide

This guide will help you create the interactive Flourish visualizations for the "Hierarchizing Market Participants" section.

## Required Visualizations

You need to create **4 interactive Flourish visualizations**:

### 1. Power Score Weight Breakdown
- **Template:** "Donut chart" or "Stacked bar chart"
- **Data Format:** CSV with columns: `Metric, Weight, Color`
- **Example Data:**
  ```csv
  Metric,Weight,Color
  Market Cap,0.40,#ff4d88
  Trading Volume,0.25,#b039ca
  Mean Return,0.15,#6495ed
  Volatility,0.10,#ffa500
  IPO Age,0.10,#2e7d32
  ```
- **Replace in hierarchizing.md:** `YOUR_WEIGHT_CHART_ID`

### 2. Company Comparison Tool
- **Template:** "Scatter plot" or "Connected dot plot" (with filter enabled)
- **Data Format:** CSV with columns: `Company, Sector, Market_Cap, Trading_Volume, Mean_Return, Volatility, IPO_Age, Power_Score`
- **Features to enable:**
  - Filter by sector
  - Hover tooltips showing all metrics
  - Color by sector
- **Replace in hierarchizing.md:** `YOUR_COMPARISON_ID`

### 3. Top Companies by Power Score
- **Template:** "Bar chart race" (animated) OR "Grouped column chart" (with sector filter)
- **Data Format (for bar chart race):** `Company, Sector, Power_Score, Year`
- **Data Format (for grouped bar):** `Company, Sector, Power_Score`
- **Features to enable:**
  - Filter by sector
  - Sort by Power Score
  - Show top 10-15 per sector
- **Replace in hierarchizing.md:** `YOUR_BAR_RACE_ID`

### 4. Metric Relationships
- **Template:** "Grid scatter" or "Scatter with filter"
- **Data Format:** CSV with columns: `Company, Market_Cap, Trading_Volume, Mean_Return, Volatility, IPO_Age`
- **Features to enable:**
  - Multiple scatter plots showing relationships between metrics
  - Filter by sector
  - Color by Power Score
- **Replace in hierarchizing.md:** `YOUR_CORRELATION_ID`

## Steps to Create Each Visualization

1. Go to [Flourish Studio](https://app.flourish.studio/)
2. Click "New visualization" → Choose the template
3. Upload your CSV data
4. Customize colors to match your website theme:
   - Primary: `#b039ca` (purple)
   - Secondary: `#ff4d88` (pink)
   - Accent: `#6495ed` (blue)
5. Enable interactivity features (filters, tooltips, hover effects)
6. Publish the visualization
7. Copy the visualization ID from the embed code
8. Replace the placeholder ID in `hierarchizing.md`

## Embedding in Your Site

Once you have the visualization IDs, replace in `hierarchizing.md`:

```html
<!-- Change this: -->
<div class="flourish-embed flourish-chart" data-src="visualisation/YOUR_WEIGHT_CHART_ID" ...>

<!-- To this (example): -->
<div class="flourish-embed flourish-chart" data-src="visualisation/1234567" ...>
```

The Flourish embed script is already included in `index.md`, so your visualizations will work automatically once you add the IDs!

## Tips

- **Make it interactive:** Enable filters, hover tooltips, and click interactions
- **Match your theme:** Use colors from your website (#b039ca, #ff4d88, etc.)
- **Mobile-friendly:** Test on mobile - Flourish visualizations are responsive by default
- **Data updates:** If your data changes, just update the CSV in Flourish and republish

