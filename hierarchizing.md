## • Hierarchizing the Companies Within Their Sector

To address our central research question — whether the most powerful firms are also the most influential within their respective sectors on the NASDAQ — it is essential to establish a rigorous and interpretable method to rank companies.

While market capitalization alone provides a straightforward proxy for market dominance, it does not fully capture the multifaceted nature of company influence. We therefore construct a **composite Power Score** that integrates several financial and structural indicators reflecting different dimensions of market strength.

---

### Construction of the Metrics

For each company in the merged dataset, and over a defined observation window, we compute the following metrics:

- **Average daily trading volume**, as a proxy for liquidity and investor attention  
- **Historical volatility**, measuring risk and price stability  
- **Average annualized return**, representing long-term performance  
- **Liquidity measure**, defined as the mean of  
  \[
  \text{Volume} \times \text{Price}
  \]

---

### Standardization of Variables

All quantitative variables are standardized using a z-score normalization:

\[
x_i' = \frac{x_i - \mu_x}{\sigma_x}
\]

where \(\mu_x\) and \(\sigma_x\) denote respectively the mean and standard deviation of the variable across all companies.

This normalization rescales each metric to a comparable scale (mean 0, standard deviation 1), preventing variables with larger numerical ranges (e.g. Market Capitalization versus Returns) from dominating the composite score.

---

### Selected Indicators

The indicators retained to construct the company hierarchy are:

- **Market capitalization** — size and financial solidity  
- **Average trading volume** — liquidity and visibility  
- **Mean return** — historical performance  
- **Volatility** — stability, incorporated inversely as \(1 - \text{Volatility}'\)  
- **Age since IPO** — maturity and resilience  

---

### Definition of the Power Score

The overall **Power Score** for each company \(i\) is defined as:

\[
S_i = w_1 \cdot Cap_i + w_2 \cdot Vol_i + w_3 \cdot Ret_i + w_4 \cdot (1 - Volat_i) + w_5 \cdot Age_i
\]

subject to the constraints:

\[
w_k \ge 0, \quad \sum_k w_k = 1
\]

---

### Choice of Weights

Based on financial reasoning and existing research, we assign the following weights:

- **Market capitalization (0.40)**  
  Receives the highest weight, as firm size is typically the most consistent determinant of market impact and stability.

- **Average trading volume (0.25)**  
  Reflects market participation and visibility, directly linked to liquidity and investor attention.

- **Mean return (0.15)**  
  Captures sustained financial performance, contributing to investor confidence and perceived leadership.

- **Volatility (0.10)**  
  Entered inversely, since lower volatility generally signals resilience and institutional attractiveness.

- **Age since IPO (0.10)**  
  Accounts for reputational and structural advantages associated with mature firms.

Numerically, the weights are:

\[
w_1 = 0.40,\quad w_2 = 0.25,\quad w_3 = 0.15,\quad w_4 = 0.10,\quad w_5 = 0.10
\]

---

### Interpretation and Robustness

This formulation yields a single continuous **Power Score** per company, enabling a sector-specific hierarchy that balances size, liquidity, performance, stability, and maturity.

Finally, to assess robustness, the analysis is replicated across different time periods in order to evaluate the temporal stability of the identified leadership patterns.
