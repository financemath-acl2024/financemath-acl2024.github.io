test_data = {
    "1": {
        "tables": [
            "|               |      Truck*     |     Land**    |\n|---------------|:---------------:|:-------------:|\n| Original cost |     $ 57,000    |    $ 18,000   |\n| Estimated life|     8 years     |               |\n|  Estimated salvage value at purchase |     $ 15,000    |               |\n| Depreciation method | Declining balance, 20% per year |               |\n| Current fair value of item |     $ 27,000    |    $ 21,000   |  \n\n\\* The last sale of a similar truck by the company occurred more than six months ago.  \n\\** The land is one of four identical parcels of land recently sold by the company."
        ],
        "question": "A business chose to swap a truck that it had bought three years ago for a parcel of land owned by a different enterprise. The subsequent table outlines information pertinent to both assets: The profit and loss statement for the enterprise that relinquishes the truck is most likely going to reflect a loss of:",
        "python_solution": "def solution():\n    truck_value = 57000\n    depreciation_rate = 0.20\n    years = 3\n    land_value = 21000\n    \n    truck_carrying_value = truck_value * ((1 - depreciation_rate)**years)\n    loss = land_value - truck_carrying_value\n    \n    return loss",
        "ground_truth": -8184.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "1"
    },
    "2": {
        "tables": [],
        "question": "Given that the spot exchange rate from the \"Kiwi\" (NZD) to sterling (GBP) is 2.0979, the Libor interest rate for the sterling is 1.6025%, and for the \"Kiwi\" it's 3.2875%, all being quoted on a 360-day year basis, what are the 180-day forward points (with a precision of four decimal places) in NZD/GBP?",
        "python_solution": "def solution():\n    spot_rate = 2.0979\n    gbp_interest_rate = 1.6025/100\n    nzd_interest_rate = 3.2875/100\n    time_in_years = 180/360\n\n    gbp_investment = 1 * (1 + gbp_interest_rate * time_in_years)\n    nzd_investment = spot_rate * (1 + nzd_interest_rate * time_in_years)\n    \n    forward_rate = nzd_investment / gbp_investment\n    \n    forward_points = (forward_rate - spot_rate) * 10000\n\n    return int(forward_points)",
        "ground_truth": 175.0,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "2"
    },
    "3": {
        "tables": [
            "| Asset Class | Standard Deviation | Covariance with GIM | Integration with GIM | Sharpe Ratio |\n| ------------ | ------------------ | --------------------- | ------------------ | ------------- |\n| U.S. real estate | 14.0% | 0.0075 | 0.60 | n/a |\n| Global investable market | - | - | - | 0.36 |\n\nAdditional Information:  \n- Risk-free rate: 3.1%\n- Expected return for the GIM:  7.2%"
        ],
        "question": "The CME Foundation, which is based in the United States, has requested their Chief Investment Officer, Pauline Cortez, to conduct an analysis on the advantages of incorporating U.S real estate equities as a fixed asset class. As part of this process, Cortez must establish the relevant risk factor to use in the international capital asset pricing model (ICAPM) in order to appropriately determine the risk premium and expected return for this potential asset class. She will be using selected data provided by GloboStats as shown in Exhibit 1. Given the information in Exhibit 1 and under the assumption of perfect markets, what would be the calculated beta for U.S. real estate equities?",
        "python_solution": "def solution():\n    cov = 0.0075\n    RPM = (7.2/100) - (3.1/100)\n    sigmaM = RPM / 0.36\n    varM = sigmaM ** 2\n    beta = cov / varM\n    return beta",
        "ground_truth": 0.578,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "3"
    },
    "4": {
        "tables": [
            "| Maturity          | At Initiation    | Three Months  Later | At Maturity   |\n|-----------------  |----------------- |---------------------|---------------|\n| Spot (USD/EUR)    | 1.3935/1.3983    | 1.4106/1.4210       | 1.4189/1.4289 |\n| 3-month forward   | -8.1/-7.6        | -21.6/-21.0         |               |\n| 6-month forward   | -19.0/-18.3      |                     | -27.0/-26.2   |\n| USD Libor         | 1.266%           | 1.266%              | 1.266%        |\n| EUR Libor         | 1.814%           | 1.814%              | 1.814%        |"
        ],
        "question": "Martinez took over a Spanish packaging firm. The Spanish venture involved Martinez purchasing 200,000 shares of a packaging firm at EUR90 per share. He resolved to fully secure the position with a six-month USD/EUR forward agreement. Given Exhibit 1, if the Spanish shares were sold after three months, what would have been the cash expenditure (in US dollars) necessary to terminate the forward agreement?",
        "python_solution": "def solution():\n    initial_position_eur = 200000 * 90\n    six_month_forward_rate = 1.3935 - 19 / 10000\n    three_month_forward_rate = 1.4210 - 21 / 10000\n    cash_outflow_at_settlement = initial_position_eur * (three_month_forward_rate - six_month_forward_rate)\n    dollar_libor_rate = 0.01266\n    cash_expenditure = cash_outflow_at_settlement / (1 + dollar_libor_rate * 90 / 360)\n    return int(cash_expenditure)",
        "ground_truth": 489849.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "4"
    },
    "5": {
        "tables": [],
        "question": "A financial risk assessor at a local financial institution is working out the yearly VaR of a collection of investment securities. The collection presently has a market worth of USD 3,700,000 with a daily fluctuation of 0.0004. Provided that there are 250 days of trading in a year and the daily returns on the collection are autonomous and adhere to the same usual distribution with a zero mean, what is the estimated 1-year VaR at the 95% assurance level?",
        "python_solution": "def solution():\n    worth = 3700000\n    volatility = 0.0004\n    days = 250\n    Z = 1.645\n    daily_std_dev = (volatility)**0.5\n    annual_VaR = worth * (days**0.5) * daily_std_dev * Z\n    return annual_VaR",
        "ground_truth": 1924720.298,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "5"
    },
    "6": {
        "tables": [],
        "question": "For the organizations evaluated, it is projected that 40% will face bankruptcy within one year: P(failure) = 0.40. Meanwhile, 55% of these organizations are expected to succeed: P(success) = 0.55. There's an 85% likelihood that an organization will succeed if it stays afloat for a year: P(success | survival) = 0.85. Using the total probability rule, we can calculate the probability of an organization succeeding even if it eventually goes bankrupt. Thus, P(success | failure) is approximately: An examiner establishes a set of standards for analyzing troubled credits. Organizations that fail to achieve a passing score are categorized as probable to face bankruptcy within the upcoming year. The examiner arrives at the following conclusions:",
        "python_solution": "def solution():\n    non_survivor = 0.40\n    survivor = 1 - non_survivor\n    pass_test_for_survivor = 0.85\n    total_pass_test = 0.55\n\n    pass_test_for_non_survivor = (total_pass_test - pass_test_for_survivor * survivor) / non_survivor\n    return pass_test_for_non_survivor",
        "ground_truth": 0.1,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "6"
    },
    "7": {
        "tables": [
            "| Company | Market Share(%) |\n|---------|-----------------|\n| Zeta    | 35              |\n| Yusef   | 25              |\n| Xenon   | 20              |\n| Waters  | 10              |\n| Vlastos | 10              |"
        ],
        "question": "What is the three-firm Herfindahl-Hirschmann Index for the sector, given that a researcher collected the following market share data for a sector made up of five firms?",
        "python_solution": "def solution():\n    # three firms' market shares\n    firm1_share = 0.35\n    firm2_share = 0.25\n    firm3_share = 0.2\n    \n    # Herfindahl-Hirschmann Index\n    hhi = firm1_share**2 + firm2_share**2 + firm3_share**2\n    \n    return hhi",
        "ground_truth": 0.225,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "7"
    },
    "8": {
        "tables": [],
        "question": "A two-year fixed-for-floating Libor swap stands at 1.00% and the two-year US Treasury bond yield is currently 0.63%. What is the difference in rates, also known as the swap spread?",
        "python_solution": "def solution():\n    libor_swap = 1.00\n    us_treasury_bond_yield = 0.63\n    swap_spread = libor_swap - us_treasury_bond_yield\n    return swap_spread * 100  # Result in basis points",
        "ground_truth": 37.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "8"
    },
    "9": {
        "tables": [
            "| Acquisition cost $ 600,000 | |\n|---|---|\n| Acquisition date 1 January 2013 | |\n| Expected residual value at time of acquisition $ 100,000 | |\n| The intangible asset is supposed to bring in profits for 5 years after acquisition. | |"
        ],
        "question": "Using the straight-line method, what is the accumulated amortization cost at the end of 2016 for the relevant information about an intangible asset?",
        "python_solution": "def solution():\n    original_cost = 600000\n    residual_value = 100000\n    useful_life = 5\n    years_passed = 4\n    accumulated_amortization = ((original_cost - residual_value) / useful_life) * years_passed\n    return accumulated_amortization",
        "ground_truth": 400000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "9"
    },
    "10": {
        "tables": [],
        "question": "Based on the regression function from 1972 to 2012, the average mean reversion was 77.5%. The correlation data over a prolonged period averages at 35%. In the case of the 30 by 30 NASDAQ correlation matrices, the correlation averaged at 27% in January 2014. Utilizing the basic s(t) - s(t-1) = alpha \u00d7 [\u03bc - s(t -1)] model, what is the correlated expectation for February 2014?",
        "python_solution": "def solution():\n    return 27.0 + 77.5 * (35.0 - 27.0) / 100",
        "ground_truth": 33.2,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "10"
    },
    "11": {
        "tables": [],
        "question": "Superior Inc. anticipates paying dividends of $0.5 per share for the upcoming two years. Dividends are predicted to increase at a 6% growth rate after that. Given a 10% rate of return, what is the worth of Superior's common equity?",
        "python_solution": "def solution():\n    D01=D02=0.5 \n    P02=0.5*(1.06)/(0.1-0.06)\n    V= (0.5)/1.1+(0.5+P02)/(1.1**2)\n    return V",
        "ground_truth": 11.818,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "11"
    },
    "12": {
        "tables": [],
        "question": "As a dominant entity in the industry, Yahoo Corp. recently conducted a market analysis and discovered that the price elasticity of demand is 1.8. If the marginal cost is $30 and the average cost is $50, what is the most probable price?",
        "python_solution": "def solution():\n    E = 1.8\n    MC = 30\n    price = MC / (1 - (1 / E))\n    return price",
        "ground_truth": 67.5,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "12"
    },
    "13": {
        "tables": [
            "| Total revenue | $460,000 |\n|---------------|----------|\n| Value of buildings and machinery |  |\n| - At the beginning of the year | $320,000 |\n| - At the end of the year | $270,000 |\n| Cost of raw materials | $80,000 |\n| Wages paid during the year | $30,000 |\n| Normal profit for the year | $50,000 |"
        ],
        "question": "What is the annual economic profit for Chace's House Industry based on the collected data?",
        "python_solution": "def solution():\n    opportunity_costs = 80000 + 30000 + 50000\n    economic_depreciation = 320000 - 270000\n    total_revenue = 460000\n    economic_profit = total_revenue - opportunity_costs - economic_depreciation\n    return economic_profit",
        "ground_truth": 250000.0,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "13"
    },
    "14": {
        "tables": [
            "| For Year Ending 31 December | 2012 |\n| --------------------------- | ---- |\n| Revenues                   | $6,456 |\n| Earnings before interest,taxes, depreciation, and amortization (EBITDA) | 1,349 |\n| Depreciation expense | 243 |\n| Operating income     | 1,106 |\n| Interest expense     | 186 |\n| Pretax income        | 920 |\n| Income tax (32%)     | 294 |\n| Net income           | $626 |\n|                           |      |\n| Number of outstanding shares (millions) | 411 |\n| 2012 earnings per share     | $1.52 |\n| 2012 dividends paid (millions) | 148 |\n| 2012 dividends per share    | 0.36 |\n| 2012 fixed capital investment (millions) | 535 |\n|                           |      |\n| Cost of equity           | 12.0% |\n| Weighted average cost of capital (WACC) | 9.0% |",
            "| Assets                      | 2012  | 2011  |\n|-----------------------------|-------|-------|\n| Cash and cash equivalents   | $32   | $21   |\n| Accounts receivable         | 413   | 417   |\n| Inventories                 | 709   | 638   |\n| Other current assets        | 136   | 123   |\n| **Total current assets**    | $1,290| $1,199|\n|                             |       |       |\n| Current liabilities         | $2,783| $2,678|\n| Long-term debt              | 2,249 | 2,449 |\n| Common stockholders' equity | 1,072 | 594   |\n| **Total liabilities and stockholders' equity**| $6,104| $5,721|"
        ],
        "question": "According to Exhibits 1 and 2, what is the FCFF ($ millions) of the Johnson Company for the fiscal year ending on December 31, 2012?",
        "python_solution": "def solution():\n    NI = 626\n    NCC = 243\n    Int = 186\n    Tax_rate = 294/920 \n    FCInv = 535\n    WCInvNet = -25\n    FCFF = NI + NCC + Int*(1 - Tax_rate) - FCInv - WCInvNet\n    return FCFF",
        "ground_truth": 485.561,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "14"
    },
    "15": {
        "tables": [
            "| | C$ |\n| --- | --- |\n| Carrying value of equipment (net book value) | 500,000 |\n| Undiscounted expected future cash flows | 550,000 |\n| Present value of expected future cash flows | 450,000 |\n| Fair Value | 480,000 |\n| Costs to sell | 50,000 |\n| Value in use | 440,000 |"
        ],
        "question": "What is the impairment loss (in C$) for the printing equipment of a Canadian corporation that prepares its financial statements according to IFRS and has seen a decrease in product demand, as of 31 December 2010?",
        "python_solution": "def solution():\n    fair_value = 480000\n    cost_to_sell = 50000\n    value_in_use = 440000\n    carrying_value = 500000\n\n    recoverable_amount = max(fair_value - cost_to_sell, value_in_use)\n    impairment_loss = carrying_value - recoverable_amount\n    return impairment_loss",
        "ground_truth": 60000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "15"
    },
    "16": {
        "tables": [
            "| Coupon rate            | 3%                   |\n|------------------------|---------------------|\n| Interest paid          | Semiannually        |\n| Mature time            | 3 years             |\n| Required rate of return| 5%                  |\n| Par value of the bond  | 100                 |"
        ],
        "question": "The following information pertains to a bond, what will be the bond's price?",
        "python_solution": "def solution():\n\n    N = 2 * 3\n    I_Y = 5 / 2\n    PMT = 3 / 2\n    FV = 100\n\n    PV = 0\n\n    for i in range(1, N + 1):\n        PV += PMT / ((1 + I_Y/100) ** i)\n    PV += FV / ((1 + I_Y/100) ** N)\n\n    return PV",
        "ground_truth": 94.492,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "16"
    },
    "17": {
        "tables": [],
        "question": "In 2009, Shine Kids Ltd., which started its operations in October of that year, bought 10,000 units of a toy at a cost of \u20a410 per unit in October. The toy was a hit in October. Expecting a surge in December sales, Shine purchased an additional 5,000 units in November at a cost of \u20a411 per unit. During 2009, Shine sold 12,000 units at a rate of \u20a415 per unit. What is Shine's cost of goods sold for 2009 using the first in, first out (FIFO) method?",
        "python_solution": "def solution():\n    October_units = 10000\n    November_units = 2000\n    October_unit_cost = 10\n    November_unit_cost = 11\n    cost_of_goods_sold = (October_units * October_unit_cost) + (November_units * November_unit_cost)\n    return cost_of_goods_sold",
        "ground_truth": 122000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "17"
    },
    "18": {
        "tables": [
            "| Scenario              | Probability of scenario (%) | Portfolio return | Probability of return (%) |\n|-----------------------|-----------------------------|------------------|---------------------------|\n| good economic situation | 70                          | 20%             | 50                        |\n| good economic situation | 70                          | 10%             | 50                        |\n| bad economic situation  | 30                          | 5%              | 60                        |\n| bad economic situation  | 30                          | -10%            | 40                        |"
        ],
        "question": "What is the anticipated portfolio return made by an investment company analyst named Maud, under two scenarios of portfolio returns in various economic conditions?",
        "python_solution": "def solution():\n    good_economic_situation_return = 0.2*0.5 + 0.1*0.5\n    bad_economic_situation_return = 0.05*0.6 + -0.1*0.4\n    general_expected_return = 0.7*good_economic_situation_return + 0.3*bad_economic_situation_return\n    return general_expected_return",
        "ground_truth": 0.102,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "18"
    },
    "19": {
        "tables": [],
        "question": "Suppose a US enterprise employs LIFO for its stock accounting. At the start of 2017, the balance sheet shows inventory at $200,000, with a LIFO reserve of $30,000. By the close of 2017, the inventory stands at $250,000, with a LIFO reserve of $40,000. With a tax rate of 30%, what would the inventory be at the end of 2017 after converting from LIFO to FIFO?",
        "python_solution": "def solution():\n    LIFO_inventory = 250000\n    LIFO_reserve = 40000\n    FIFO_inventory = LIFO_inventory + LIFO_reserve\n    return FIFO_inventory",
        "ground_truth": 290000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "19"
    },
    "20": {
        "tables": [],
        "question": "What is the cost per 100 of par value for a zero-coupon bond with a maturity of 15 years, given a yearly market discount rate of 4.5% and assuming yearly compound interest?",
        "python_solution": "def solution():\n    r = 0.045\n    n = 15\n    fv = 100\n    pv = fv / ((1 + r) ** n)\n    return pv",
        "ground_truth": 51.672,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "20"
    },
    "21": {
        "tables": [],
        "question": "A company noted a gain on redemption of $100,000 with a carrying value of $950,000, and a face value of $1 million. Kindly compute the call price:",
        "python_solution": "def solution():\n    carrying_value = 950000\n    gain_on_redemption = 100000\n    call_price = carrying_value - gain_on_redemption\n    return call_price/10000.0",
        "ground_truth": 85.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "21"
    },
    "22": {
        "tables": [
            "| Ratio   | Spot rate |\n|---------|-----------|\n| USD/EUR | 1.3860    |\n| EUR/CAD | 0.6125    |\n| USD/GBP | 1.4208    |"
        ],
        "question": "Based on the provided document, we have three spot rate ratios between USD and other currencies. Which option is most precise for the spot EUR/GBP cross-rate?",
        "python_solution": "def solution():\n    USD_EUR = 1.3860\n    USD_GBP = 1.4208\n    EUR_GBP = (1 / USD_EUR) * USD_GBP\n    return EUR_GBP",
        "ground_truth": 1.025,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "22"
    },
    "23": {
        "tables": [
            "|Maturity   | Par Rate | Spot rate |\n|---|---|---|\n| One-Year  | 2.50%  | 2.50%  |\n| Two-Year  | 2.99%  | 3.00%  |\n| Three-Year  | 3.48%  | 3.50%  |\n| Four-Year  | 3.95%  | 4.00%  |\n| Five-Year  | 4.37%  |   |"
        ],
        "question": "Based on Exhibit 1, what is the five-year spot rate for Steve, a bond trader at a financial institution? Keep in mind that par and spot rates are derived from annual-coupon sovereign bonds.",
        "python_solution": "def solution():\n    # given spot rates and swap rate\n    spot_rates = [0.025, 0.03, 0.035, 0.04]\n    swap_rate = 0.0437\n\n    # calculate the sum of discounted swap rate payments \n    sum_discounted_payments = sum([swap_rate / ((1 + rate) ** i) for i, rate in enumerate(spot_rates, start=1)])\n\n    # calculate the 5-year spot rate solving the formula above for S5\n    S5 = ((1 + swap_rate) / (1 - sum_discounted_payments))**(1/5) - 1\n\n    # return S5 in percentage\n    return S5 * 100",
        "ground_truth": 4.453,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "23"
    },
    "24": {
        "tables": [],
        "question": "A risk manager specializing in market risk is looking to determine the cost of a 2-year zero-coupon bond. The current 1-year interest rate is 8.0%. There's a chance of 50% that the 1-year interest rate will reach 10.0% after one year and an equal probability of its falling to 6.0% in the same period. Suppose the yearly risk premium for duration risk is 40 bps, and the bond faces a value of EUR 1,000. What should be the zero-coupon bond's valuation?",
        "python_solution": "def solution():\n    bond_face_value = 1000\n    risk_free_rate = 0.08\n    risk_premium = 0.004\n    up_interest_rate = 0.10\n    down_interest_rate = 0.06\n    probability_up = 0.5\n    probability_down = 0.5\n\n    up_price_date1 = bond_face_value / (1 + up_interest_rate + risk_premium)\n    down_price_date1 = bond_face_value / (1 + down_interest_rate + risk_premium)\n\n    expected_price_date1 = probability_up * up_price_date1 + probability_down * down_price_date1\n    zero_coupon_bond_price = expected_price_date1 / (1 + risk_free_rate + risk_premium)\n    \n    return zero_coupon_bond_price",
        "ground_truth": 851.313,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "24"
    },
    "25": {
        "tables": [
            "| Sample Size | Sample Mean | Sample Standard Deviation |\n|-------------|-------------|--------------------------|\n| A 25        | 200         | 45                       |\n| B 18        | 185         | 60                       |"
        ],
        "question": "Assuming that the variances of the underlying populations are equal, independent samples taken from normally distributed groups display the following features: The combined estimation of the common variance is 2,678.05. What is the suitable t-test statistic to verify the assumption that the average of the two populations are the same?",
        "python_solution": "def solution():\n    return (200 - 185) / (2678.05 / 25 + 2678.05 / 18)**0.5",
        "ground_truth": 0.938,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "25"
    },
    "26": {
        "tables": [
            "| Income Statement          | Balance Sheet Changes                         |     |\n|---------------------------|-----------------------------------------------|-----|\n| Revenue                   | $56,800  Decrease in accounts receivable $1,324 |     |\n| Cost of goods sold        | $27,264  Decrease in inventory               | 501 |\n| Other operating expense   | $562 Increase in prepaid expense             | 6   |\n| Depreciation expense      | $2,500 Increase in accounts payable          | 1,063 |"
        ],
        "question": "The following data is gleaned from the financial statements of Sugarfall Corporation. How much cash did Sugarfall Corp. pay to its suppliers?",
        "python_solution": "def solution():\n    cost_of_goods_sold = 27264\n    decrease_in_inventory = 501\n    increase_in_accounts_payable = 1063\n    cash_paid_to_suppliers = cost_of_goods_sold - decrease_in_inventory - increase_in_accounts_payable\n    return cash_paid_to_suppliers",
        "ground_truth": 25700.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "26"
    },
    "27": {
        "tables": [],
        "question": "What is the compensation expense for 2011 resulting from the executive stock options provided by the firm in 2011? The firm gave its senior managers 20,000 options on its common stocks on January 1, 2011. The options have a lock-in period of 4 years and lapse after 5 years of being given. The option price on the day they were granted was $2.5 per option. The average option price for the whole year was $2.8 per option. The fair value of the company's stocks on the grant day, January 1, 2011, was $15 per share.",
        "python_solution": "def solution():\n    options = 20000\n    option_price = 2.5\n    vesting_period = 4\n\n    compensation_expense_2011 = options * option_price / vesting_period\n\n    return compensation_expense_2011",
        "ground_truth": 12500.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "27"
    },
    "28": {
        "tables": [],
        "question": "If a security has a yearly adjusted period of 7.020 and an annual convexity of 65.180 and its return to maturity falls by 25 basis points, what is the anticipated percentage change in price?",
        "python_solution": "def solution():\n    ann_mod_dur = 7.020\n    ann_converxity = 65.180\n    delta_yield = -0.0025\n\n    price_change = (-ann_mod_dur * delta_yield) + (0.5 * ann_converxity * (delta_yield ** 2))\n    return price_change * 100  # convert to percentage",
        "ground_truth": 1.775,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "28"
    },
    "29": {
        "tables": [],
        "question": "What is the intrinsic value of preferred stock when the non-exchangeable and non-refundable preferred shares launched by the U.S. life assurance group are 5.80 percent at a par value of $30? The identical issue has a return rate of 5 percent.",
        "python_solution": "def solution(): \n    # Expected annual dividend equals to 5.8% \u00d7 $30\n    dividend = (5.8 / 100) * 30 \n\n    # Value of preferred stock is dividend / 0.05 \n    stock_value = dividend / 0.05 \n\n    return stock_value",
        "ground_truth": 34.8,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "29"
    },
    "30": {
        "tables": [],
        "question": "Assume that the initial value is 400 and the risk-free rate stands at 5%. The asset offers a continuous dividend of 3%. Determine the forward price for a forward contract of 6 months:",
        "python_solution": "def solution():\n    import math\n    F0 = 400 * math.exp((0.05 - 0.03) * 0.5)\n    return F0",
        "ground_truth": 404.02,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "30"
    },
    "31": {
        "tables": [],
        "question": "In the last 36 months, the standard deviation for the monthly returns of an investment portfolio has been 4.9%. To evaluate an assertion that the investment strategy for this portfolio yields a standard deviation of monthly returns below 5.0%, what is the test statistic's value?",
        "python_solution": "def solution():\n    n = 36\n    s = 0.049\n    sigma = 0.05\n    chi_square_statistic = ((n - 1) * s**2) / sigma**2\n    return chi_square_statistic",
        "ground_truth": 33.614,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "31"
    },
    "32": {
        "tables": [
            "|                                           |                    |  2008   |                   |  2007   |\n|-------------------------------------------|--------------------|---------|-------------------|---------|\n| **As of 31 December**                     |                    |         |                   |         |\n| **Assets**                                |                    |         |                   |         |\n| Current assets                            |                    |         |                   |         |\n| Cash and cash equivalents                 |                    |   $372  |                   |  $315   |\n| Accounts receivable                       |                    |   $770  |                   |  $711   |\n| Inventories                               |                    |   $846  |                   |  $780   |\n| Total current assets                      |                    |  $1,988 |                   |  $1,806 |\n| Gross fixed assets                        |   $4,275           |         |   $3,752          |         |\n| Less: Accumulated depreciation            |   $1,176           |  $3,099 |   $906            |  $2,846 |\n| **Total assets**                          |                    |  $5,087 |                   |  $4,652 |\n| **Liabilities and shareholders' equity**  |                    |         |                   |         |\n| Current liabilities                       |                    |         |                   |         |\n| Accounts payable                          |                    |  $476   |                   |  $443   |\n| Accrued taxes and expenses                |                    |  $149   |                   |  $114   |\n| Notes payable                             |                    |  $465   |                   |  $450   |\n| Total current liabilities                 |                    |  $1,090 |                   |  $1,007 |\n| Long-term debt                            |                    |  $1,575 |                   |  $1,515 |\n| Common stock                              |                    |  $525   |                   |  $525   |\n| Retained earnings                         |                    |  $1,897 |                   |  $1,605 |\n| **Total liabilities and shareholders' equity** |              |  $5,087 |                   |  $4,652 |",
            "|   |   |\n|---|---|\n| Total revenues | $3,323 |\n| Cost  of goods  sold | 1,287 |\n| Selling, general, and administrative expenses | 858 |\n| Earnings before interest, taxes, depreciation, and amortization (EBITDA) | 1,178 |\n| Depreciation expense | 270 |\n| Operating income | 908 |\n| Interest expense | 195 |\n| Pretax income | 713 |\n| Income tax (at 32 percent) | 228 |\n| Net income | $485 |"
        ],
        "question": "Using the 2007 and 2008 financial reports for Holt Corporation, which are presented in Exhibits 1 and 2 and in line with US GAAP, what is Holt's 2008 FCFE (in millions) as Jake Thompson is preparing a presentation to analyze the valuation of this company and Emerald Corp's common stock using a FCFE model? Thompson also plans to do a value estimate for Emerald through a dividend discount model for potential recommendations to his firm.",
        "python_solution": "def solution():\n    NI = 485\n    NCC = 270\n    FCInv = 4275 - 3752\n    WCInv = (770-711) + (846-780) - (476-443) - (149-114)\n    Net_borrowing = (465-450) + (1575-1515)\n    FCFE = NI + NCC - FCInv - WCInv + Net_borrowing\n    return FCFE",
        "ground_truth": 250.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "32"
    },
    "33": {
        "tables": [
            "| Items                        | Times |\n| ------------------------     | ----- |\n| net profit margin            | 20%   |\n| retention rate               | 60%   |\n| asset turnover               | 0.8   |\n| financial leverage multiplier| 1.5   |"
        ],
        "question": "What is the sustainable growth rate?",
        "python_solution": "def solution():\n    ROE = 0.2 * 0.8 * 1.5\n    sustainable_growth_rate = 0.6 * ROE\n    return sustainable_growth_rate",
        "ground_truth": 0.144,
        "topic": "Accounting",
        "split": "development",
        "p_id": "33"
    },
    "34": {
        "tables": [
            "| Ratio | Spot rate |\n|-------|-----------|\n| CNY/HKD | 0.8422 |\n| CNY/ZAR | 0.9149 |\n| CNY/SEK | 1.0218 |"
        ],
        "question": "What is the immediate ZAR/HKD exchange rate given by a broker?",
        "python_solution": "def solution():\n    CNY_ZAR = 0.9149\n    CNY_HKD = 0.8422\n    ZAR_HKD = (1/CNY_ZAR) * CNY_HKD\n    return ZAR_HKD",
        "ground_truth": 0.921,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "34"
    },
    "35": {
        "tables": [],
        "question": "What weight will be applied to a four-day-old return when forecasting the conditional variance using a RiskMetrics EWMA model with a decay factor \u03bb = 0.95 on a daily basis?",
        "python_solution": "def solution():\n    decay_factor = 0.95\n    weight_of_last_day = (1 - decay_factor)\n    weight_four_days_ago = weight_of_last_day * pow(decay_factor, 3)\n    return weight_four_days_ago",
        "ground_truth": 0.043,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "35"
    },
    "36": {
        "tables": [],
        "question": "After putting $180,000 in an investment today with an interest rate of 10% that compounds on a daily basis, what will the worth of the investment be after 2 years for a shareholder?",
        "python_solution": "def solution():\n    principal = 180000\n    rate = 10 / 100\n    time = 2\n    n = 365\n\n    amount = principal * (1 + rate / n) ** (n * time)\n    \n    return int(amount)",
        "ground_truth": 219846.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "36"
    },
    "37": {
        "tables": [
            "|   Date   |  Transaction |           Units           |    Unit cost    |\n|:--------:|:------------:|:-------------------------:|:---------------:|\n| June 1   |   Inventory  |          20 units @      |    $5.00/unit   |\n| June 12  |   Purchased  |          70 units @      |    $5.20/unit   |\n| June 16  |     Sold     |   50 units @ $6.00/unit  |                 |\n| June 26  |   Purchased  |   35 units @ $5.5/unit   |                 |\n| June 29  |     Sold     |   40 units @ $6.50/unit  |                 |"
        ],
        "question": "The inventory account of a company experienced the following transactions in June: Under the periodic FIFO inventory costing, what was the gross profit for June?",
        "python_solution": "def solution():\n    sales = (50 * 6) + (40 * 6.5)\n    COGS = (20 * 5) + (70 * 5.2)\n    gross_profit = sales - COGS\n    return gross_profit",
        "ground_truth": 96.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "37"
    },
    "38": {
        "tables": [],
        "question": "A medium-sized American utilities firm requires a return rate of 10%. Johnson and his colleagues predict that, due to a recent reorganization, the firm probably won't distribute dividends for the following three years. However, they anticipate that ABC will start paying an annual dividend of US$1.72 for each share starting from the fourth year onwards. After this, the dividend is predicted to experience a perpetual growth of 4%, though the present price suggests a growth rate of 6% for the identical timeframe. If Johnson's team employs the dividend discount model, what would be the current inherent value of Company ABC stock?",
        "python_solution": "def solution():\n    D4 = 1.72\n    r = 0.10\n    g = 0.04\n    P3 = D4/(r-g)\n    V0 = P3 / ((1+r)**3)\n    return V0",
        "ground_truth": 21.538,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "38"
    },
    "39": {
        "tables": [],
        "question": "Assuming a payout ratio of 50% and a growth rate of 10%, and a return rate of 15%, what is the leading price-to-earnings (P/E) ratio for Tiger Corporation?",
        "python_solution": "def solution():\n    divident_payout_ratio = 0.5\n    k = 0.15\n    g = 0.1\n    P_E = divident_payout_ratio / (k - g)\n    return P_E",
        "ground_truth": 10.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "39"
    },
    "40": {
        "tables": [],
        "question": "What is the present value (PV) of an investment that provides \u20ac300 yearly for five years, starting from this very moment, when discounted at an annual rate of 4%?",
        "python_solution": "def solution():\n    A = 300\n    r = 0.04\n    N = 5\n    PV = A*((1-(1/((1+r)**N)))/r)*(1+r)\n    return int(PV)",
        "ground_truth": 1388.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "40"
    },
    "41": {
        "tables": [],
        "question": "A company recently noted a $15,000 loss from selling equipment used in its production process. If the initial price of the equipment was $100,000 and the accumulated depreciation at the time of sale was $60,000, what sum did the company gain from the sale?",
        "python_solution": "def solution():\n    loss = 15000\n    initial_price = 100000\n    accumulated_depreciation = 60000\n    carrying_value = initial_price - accumulated_depreciation\n    proceeds = carrying_value - loss\n    return proceeds",
        "ground_truth": 25000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "41"
    },
    "42": {
        "tables": [],
        "question": "A business has total liabilities amounting to \u00a335 million and total shareholders' equity of \u00a355 million. What percentage do total liabilities constitute on a vertical common-size balance sheet?",
        "python_solution": "def solution():\n    total_liabilities = 35\n    total_equity = 55\n    total_assets = total_liabilities + total_equity\n\n    return (total_liabilities / total_assets) * 100",
        "ground_truth": 38.889,
        "topic": "Accounting",
        "split": "development",
        "p_id": "42"
    },
    "43": {
        "tables": [],
        "question": "If the Smith company recently paid a dividend of $2, with a required rate of return of 14% per annum and an expected constant growth rate of 8% per year for the dividend, what would the inherent value be for Smith's shares?",
        "python_solution": "def solution():\n    D0 = 2\n    g = 0.08\n    r = 0.14\n    D1 = D0 * (1 + g)\n    P0 = D1 / (r - g)\n    return P0",
        "ground_truth": 36.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "43"
    },
    "44": {
        "tables": [
            "| PV0      | PV+      | PV_      | \u25b3Curve | \u25b3Yield |\n|----------|----------|----------|--------|--------|\n| 99.41172 | 99.32213 | 99.50132 | 3 bps  | 1bp    |"
        ],
        "question": "Taking into account the details for a conventional fixed-rate bond with no options where PV0 signifies the original bond price, PV+ denotes the bond's price when the yield to maturity is raised, PV_ indicates the new price of the bond when yield to maturity is reduced, \u2206Curve shows the modification in the benchmark yield curve, and \u2206Yield explains the alteration in the yield to maturity, what can you estimate as the bond's approximate convexity?",
        "python_solution": "def solution():\n    PV_minus = 99.50132\n    PV_plus = 99.32213\n    PV0 = 99.41172\n    delta_yield = 0.0001\n\n    ApproxConvexity = ((PV_minus + PV_plus) - 2 * PV0) / ((delta_yield) ** 2 * PV0)\n    \n    return ApproxConvexity",
        "ground_truth": 10.059,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "44"
    },
    "45": {
        "tables": [
            "|                | Portfolio return | Benchmark return | Portfolio weight | Benchmark weight |\n|----------------|------------------|------------------|------------------|------------------|\n| Domestic       | 25%              | 15%              | 50               | 35               |\n| Bond           | 9%               | 5%               | 30               | 35               |\n| International  | 15%              | 18%              | 20               | 30               |"
        ],
        "question": "According to the given table, can you compute the value added from the choice of security?",
        "python_solution": "def solution():\n    Wp = 1 # Weight of the portfolio\n    Rp = 6.6 # Return of the portfolio\n    RB = 1 # Return of the benchmark\n\n    # Value added from the choice of security\n    security_selection = Wp*(Rp-RB)\n    \n    return security_selection",
        "ground_truth": 5.6,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "45"
    },
    "46": {
        "tables": [],
        "question": "A dealer has listed a three-month forward exchange rate in CAD/USD at 1.0123. This same dealer also provides a 6.8% quote for 3-month forward points as a percentage. What is the spot rate for CAD/USD?",
        "python_solution": "def solution():\n    forward_rate = 1.0123\n    forward_points_as_percentage = 0.068\n\n    spot_rate = forward_rate / (1 + forward_points_as_percentage)\n\n    return spot_rate",
        "ground_truth": 0.948,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "46"
    },
    "47": {
        "tables": [
            "|                                         | Year Ending | December 31 |\n|-----------------------------------------|-------------|-------------|\n|                                         | 2011        | 2010        |\n| Rental income                           | 339,009     | 296,777     |\n| Other property income                   | 6,112       | 4,033       |\n| Total income                            | 345,121     | 300,810     |\n| Property operating expenses             | 19,195      | 14,273      |\n| Property taxes                          | 3,610       | 3,327       |\n| Total property expenses                 | 22,805      | 17,600      |\n| Net operating income                    | 322,316     | 283,210     |\n| Other income (gains on sale of properties) | 2,162     | 1,003       |\n| General and administrative expenses     | 21,865      | 19,899      |\n| Depreciation and amortization           | 90,409      | 78,583      |\n| Net interest expenses                   | 70,017      | 56,404      |\n| Net income                              | 142,187     | 129,327     |\n| Weighted average shares outstanding     | 121,944     | 121,863     |\n| Earnings per share                      | 1.17        | 1.06        |\n| Dividend per share                      | 0.93        | 0.85        |\n| Price/FFO, based upon year-end stock price | 11.5x    | 12.7x       |"
        ],
        "question": "According to Exhibit 1, what was the share price of Baldwin at the end of 2011?",
        "python_solution": "def solution():\n    accounting_net_income = 142187\n    depreciation_charges = 90409\n    gains_on_sale = 2162\n    shares_outstanding = 121944\n    price_FFO = 11.5\n    FFO_per_share = (accounting_net_income + depreciation_charges - gains_on_sale) / shares_outstanding\n    share_price = FFO_per_share * price_FFO\n    return share_price",
        "ground_truth": 21.731,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "47"
    },
    "48": {
        "tables": [],
        "question": "A researcher is studying a collection composed of 1,000 secondary quality loans and 600 top quality loans. From the secondary quality loans, 200 are delayed in their payments. From the top quality loans, 48 are delayed in their payments. If the researcher arbitrarily picks a loan from the collection and it is presently delayed in its payments, what are the odds that it is a secondary quality loan?",
        "python_solution": "def solution():\n    total_loans = 1000 + 600\n    total_late = 200 + 48\n    late_subprime = 200\n\n    probability_late = total_late / total_loans\n    probability_late_and_subprime = late_subprime / total_loans\n    probability_subprime_given_late = probability_late_and_subprime / probability_late\n\n    return probability_subprime_given_late",
        "ground_truth": 0.806,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "48"
    },
    "49": {
        "tables": [],
        "question": "A researcher is tasked with determining the VaR of a long position in a put option on the shares of Large Pharmaceuticals Corp. The shares are currently priced at USD 26.00, with a daily volatility rate of 1.5%, and the option is at-the-money with a delta of -0.5. What would be the 1-day 95% VaR of the option position, if calculated via the delta-normal method?",
        "python_solution": "def solution():\n    delta = -0.5\n    rate = 0.015\n    price = 26\n    U = 1.645\n    sd = abs(delta) * (rate * price)\n    VaR = sd * U\n    return VaR",
        "ground_truth": 0.321,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "49"
    },
    "50": {
        "tables": [
            "| Net income                                      | $55,000 |\n|-------------------------------------------------|---------|\n| Depreciation                                    | $60,000 |\n| Taxes paid                                      | $25,000 |\n| Interest paid                                   | $5,000  |\n| Dividends paid                                  | $10,000 |\n| Cash received from sale of company building     | $40,000 |\n| Issuance of preferred stock                     | $45,000 |\n| Repurchase of common stock                      | $20,000 |\n| Purchase of machinery                           | $20,000 |\n| Issuance of bonds                               | $40,000 |\n| Debt retired through issuance of common stock   | $45,000 |\n| Paid off long-term bank borrowings              | $10,000 |\n| Profit on sale of building                      | $15,000 |"
        ],
        "question": "Assuming the cash flow from financing activities according to U.S. GAAP is:",
        "python_solution": "def solution():\n    issuance_of_preferred_stock = 45000\n    issuance_of_bonds = 40000\n    principal_payments_on_bank_borrowings = 10000\n    repurchase_of_common_stock = 20000\n    dividends_paid = 10000\n\n    CFF = issuance_of_preferred_stock + issuance_of_bonds - principal_payments_on_bank_borrowings - repurchase_of_common_stock - dividends_paid\n\n    return CFF",
        "ground_truth": 45000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "50"
    },
    "51": {
        "tables": [],
        "question": "What's the price of a bond with a face value of $1000, a coupon rate of 5%, and an annual-pay period of 3 years, assuming the spot rates are 3.6% for the first year, 3.7% for the second year, and 3.8% for the third year?",
        "python_solution": "def solution():\n    bond_value = 50 / 1.036 + 50 / (1.037 ** 2) + 1050 / (1.038 ** 3)\n    return bond_value",
        "ground_truth": 1033.61,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "51"
    },
    "52": {
        "tables": [
            "|                                      |        |\n|--------------------------------------|--------|\n| ABC LA retirement plan information 2018 |        |\n| Current service costs                | 470    |\n| Past service costs                   | 0      |\n| Employer contributions               | 1,200  |\n| Benefit obligation at beginning of year | 45,000 |\n| Benefit obligation at end of year      | 48,395 |\n| Plan assets at beginning of year       | 40,800 |\n| Plan assets at end of year             | 44,300 |\n| Actuarial loss                         | 350    |\n| Actual return on plan assets           | 3,100  |\n| Discount rate on plan liabilities      | 7.5%   |\n| Expected rate of return on plan assets | 8.2%   |"
        ],
        "question": "XYZ NY, a home decor shopping enterprise, provides its employees with a defined benefit pension plan. The related data is as follows: The payment given out during the year is:",
        "python_solution": "def solution():\n    plan_assets_end = 44300\n    plan_assets_begin = 40800\n    employer_contributions = 1200\n    actual_return_assets = 3100\n    benefit_paid = plan_assets_end - (plan_assets_begin + employer_contributions + actual_return_assets)\n    return benefit_paid",
        "ground_truth": -800.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "52"
    },
    "53": {
        "tables": [],
        "question": "What is the percentage of return that is below $100,000 if an investment analyst detects that the market's fund returns are normally distributed with an average of $160,000 and a standard deviation of $30,000?",
        "python_solution": "def solution():\n    from scipy.stats import norm\n    mean = 160000\n    standard_deviation = 30000\n    z = (100000 - mean) / standard_deviation\n    # Return probability in percentage\n    return (1 - norm.cdf(-z))*100",
        "ground_truth": 2.275,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "53"
    },
    "54": {
        "tables": [],
        "question": "What is the maximum leverage ratio linked with a position financed by a 65% minimum margin requirement, if the brokerage firm XYZ has set it?",
        "python_solution": "def solution():\n    equity = 65\n    position = 100\n    leverage_ratio = position/equity\n    return leverage_ratio",
        "ground_truth": 1.538,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "54"
    },
    "55": {
        "tables": [],
        "question": "During a high season for tourism, the need for bottled water can be depicted as: Qbw=30-2Pb (Qbw is the amount of bottled water; Pb is the price of bottled water). If bottled water costs 5, what will the price elasticity of demand be?",
        "python_solution": "def solution():\n    Q = 30 - 2*5\n    P = 5\n    elasticity = -2 * (P/Q)\n    return elasticity",
        "ground_truth": -0.5,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "55"
    },
    "56": {
        "tables": [],
        "question": "A business plans to issue new ordinary shares with flotation costs of 5.0% per share. They anticipate a dividend of $0.32 the following year and foresee a dividend growth rate of 10% indefinitely. Assuming the shares are released at a price of $14.69, what is the firm's cost (%) of external equity?",
        "python_solution": "def solution():\n    D1 = 0.32\n    P0 = 14.69\n    f = 0.05\n    g = 0.1\n    cost_of_external_equity = ((D1/(P0*(1-f)))+g)*100\n    return cost_of_external_equity",
        "ground_truth": 12.293,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "56"
    },
    "57": {
        "tables": [],
        "question": "Robinson is considering adding a new ETF investment to the portfolio. He intends to hold the ETF for nine months. Excluding the effect of compounding, what is the anticipated overall holding period cost of the nine-month investment in the ETF, given that the ETF has these trading expenses and management charges: Annual management fee of 0.32%, Round-trip trading fees of 0.20%, and a Bid\u2013offer spread of 0.10% on buy and sell, as Robinson requests Jones to calculate?",
        "python_solution": "def solution():\n    annual_management_fee = 0.32\n    round_trip_trading_fees = 0.20\n    bid_offer_spread = 0.10\n    holding_period = 9 / 12\n\n    total_expected_holding_period_cost = (holding_period * annual_management_fee) + round_trip_trading_fees + bid_offer_spread\n    return total_expected_holding_period_cost",
        "ground_truth": 0.54,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "57"
    },
    "58": {
        "tables": [],
        "question": "An investment firm implements a \"2 and 20\" fee arrangement, the current value of assets is $515, the management fee is determined by the value of assets at end of the year, a 5% hurdle rate is established prior to the collection of the incentive fee, and the present high-water mark is $540. After a period of one year, the value of the investment firm is $602.5. What is the investor's net return?",
        "python_solution": "def solution():\n    AUM_end_of_year = 602.5\n    high_water_mark = 540\n    management_fee_rate = 0.02\n    previous_assets_value = 515\n    incentive_fee_rate = 0.2\n    hurdle_rate = 0.05\n    \n    management_fee = AUM_end_of_year * management_fee_rate\n    incentive_fee = (AUM_end_of_year - high_water_mark * (1 + hurdle_rate)) * incentive_fee_rate\n    total_fee = management_fee + incentive_fee\n    net_return = (AUM_end_of_year - total_fee) / previous_assets_value - 1\n    return net_return * 100  # it's usually more intuitive to express return rate in percentage.",
        "ground_truth": 13.272,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "58"
    },
    "59": {
        "tables": [
            "| Shares of common stock | 1,000,000 |\n|:----------------------:|:---------:|\n| Net income for the year | $1,500,000 |\n| Par value of convertible bonds with a 4% coupon rate | $10,000,000 |\n| Par value of cumulative preferred stock with a 7% dividend rate | $2,000,000 |\n| Tax rate | 30% |"
        ],
        "question": "Assuming the application of U.S. GAAP unless specified differently, an analyst collected data from a corporation as follows: The bonds were released at par value and are convertible into 300,000 ordinary shares. All securities have been in circulation for the complete year. What is the diluted earnings per share for this corporation?",
        "python_solution": "def solution():\n    # given data\n    net_income = 1500000\n    preferred_stock_dividends = 140000\n    outstanding_shares = 1000000\n    bond_interest = 400000\n    bond_conversion_shares = 300000\n\n    # calculate amount available for common shareholders\n    amount_for_common_shareholders = net_income - preferred_stock_dividends\n\n    # calculate the interest add back to net income\n    add_back_to_income = bond_interest * 0.7  # tax rate is 30%, hence considering 70%\n\n    # calculate diluted earnings\n    diluted_earnings = amount_for_common_shareholders + add_back_to_income\n\n    # calculate diluted EPS\n    diluted_eps = diluted_earnings / (outstanding_shares + bond_conversion_shares)\n\n    return diluted_eps",
        "ground_truth": 1.262,
        "topic": "Accounting",
        "split": "development",
        "p_id": "59"
    },
    "60": {
        "tables": [],
        "question": "A year-long investment of 10,000 ordinary stocks from a corporation yielded a return of 15.5%. Just before selling the stocks at $24 each, the investor obtained a dividend of $2,500. What was the cost per stock that the investor initially paid a year ago?",
        "python_solution": "def solution():\n    initial_investment = 10000\n    return_rate = 15.5/100\n    stock_price_per_share = 24\n    dividend = 2500\n    \n    total_investment = initial_investment * (1 + return_rate)\n\n    total_earnings = (stock_price_per_share * initial_investment) + dividend\n\n    initial_price_per_share = total_earnings / total_investment\n    \n    return initial_price_per_share",
        "ground_truth": 20.996,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "60"
    },
    "61": {
        "tables": [],
        "question": "Smith demonstrates to Harmonica the total return of a recent transaction performed by the Zenith Fund. Smith explains that the Zenith Fund entered a fully collateralized long position in nearby soybean futures contracts at the quoted futures price of 865.0 (US cents/bushel). Three months afterward, the whole futures position was rolled when the short-term futures price was 877.0 and the long-term futures price was 883.0. What is the Zenith Fund\u2019s three-month total return on the soybean futures transaction, factoring in that the collateral earned an annualized rate of 0.60% during the three-month period between when the initial long position was established and the rolling of the contract?",
        "python_solution": "def solution():\n    previous_price = 865.0\n    current_price_short_term = 877.0\n    current_price_long_term = 883.0\n    collateral_rate = 0.60\n    months = 3\n    \n    # Calculating each return\n    price_return = (current_price_short_term - previous_price) / previous_price\n    roll_return = (current_price_short_term - current_price_long_term) / current_price_short_term\n    collateral_return = (months/12) * (collateral_rate/100)\n    \n    # Calculating total return\n    total_return = price_return + roll_return + collateral_return\n    \n    return total_return * 100",
        "ground_truth": 0.853,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "61"
    },
    "62": {
        "tables": [],
        "question": "If an evaluator gathers the following DCF specifications to estimate the worth of a real estate with constant rate of increase in income and value through DCF technique: The initial capitalization rate is 5.5%, the ending capitalization rate is 6%, and the discount rate is 7.25%. What is the growth rate of the property in question?",
        "python_solution": "def solution():\n    discount_rate = 7.25\n    capitalization_rate = 5.5\n    \n    growth_rate = discount_rate - capitalization_rate\n    return growth_rate",
        "ground_truth": 1.75,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "62"
    },
    "63": {
        "tables": [
            "|                           |                  |\n|---------------------------|------------------|\n|Cost of the equipment      |$5,000,000        |\n|Estimated residual value   |$500,000          |\n|Expected useful life       |9 years           |\n|Total productive capacity  |950,000 units     |\n|Production in FY2015       |150,000 units     |\n|Expected production for the next 8 years |100,000 units each year|"
        ],
        "question": "Utilizing the units-of-production approach, what would be the depreciation expense in the initial year for a machine purchased in Jan. 2015, as per the corresponding data provided?",
        "python_solution": "def solution():\n    purchase_price = 5000000\n    salvage_value = 500000\n    total_units = 950000\n    units_produced = 150000\n\n    depreciation_expense = (purchase_price - salvage_value) * (units_produced / total_units)\n    return depreciation_expense",
        "ground_truth": 710526.316,
        "topic": "Accounting",
        "split": "development",
        "p_id": "63"
    },
    "64": {
        "tables": [
            "| Income Statement (in US$ million, except per share data) | 2017 Year End |\n|-----------------------------------------------------|-------------|\n| Total rental income                                 | 450         |\n| Total property expenses                             | 228         |\n| Net operating income                                | 222         |\n| Other expenses (losses on sale of properties)       | 22          |\n| General and administrative expenses                 | 28          |\n| Depreciation and amortization                       | 45          |\n| Net interest expenses                               | 35          |\n| Net income                                          | 92          |\n| Weighted average shares outstanding (million)       | 118         |\n| Earnings per share                                  | 0.78        |\n| Price/FFO, based upon year-end stock price          | 13x         |"
        ],
        "question": "A specialist compiled the financial information for a Real Estate Investment Trust. Using the income statement, what was the Real Estate Investment Trust's share price at the end of 2017 according to the Price / FFO multiple?",
        "python_solution": "def solution():\n    multiple = 13\n    net_income = 92\n    depreciation_and_amortization = 45\n    loss_from_property_disposal = 22\n    shares_outstanding = 118\n    FFO = net_income + depreciation_and_amortization + loss_from_property_disposal\n    FFO_per_share = FFO / shares_outstanding\n    stock_price = multiple * FFO_per_share\n    return stock_price",
        "ground_truth": 17.517,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "64"
    },
    "65": {
        "tables": [],
        "question": "Omega Petroleum Corp. is a monopolistic entity experiencing extremely high entry barriers. Its marginal cost is $40 and its average cost is $70. After recent market research, the price elasticity of demand was discovered to be 1.5. What price is the corporation likely to set?",
        "python_solution": "def solution():\n    MC = 40\n    ED = 1.5\n    P = MC / (1 - 1/ED)\n    return P",
        "ground_truth": 120.0,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "65"
    },
    "66": {
        "tables": [],
        "question": "A two-year floating-rate bond pays 6-month LPR plus 80 basis points. The bond is valued at 97 for every 100 of face value. The present 6-month LPR is 1.00%. Presume a 30/360 day count standard and equally divided periods. What is the discount margin for the bond in basis points (bps)?",
        "python_solution": "def solution():\n    PV = 97\n    Index = 0.01\n    QM = 0.0080\n    FV = 100\n    m = 2\n    r = 0.0168\n    DM = (r * 2 - Index)\n    return DM * 10000",
        "ground_truth": 236.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "66"
    },
    "67": {
        "tables": [
            "| Variable           | Coefficient (bj) | Standard Error | t-Statistic |\n|--------------------|------------------|----------------|-------------|\n| Intercept          | 0.0477           | 0.0019         | 25.11       |\n| Underwriter rank   | 0.0150           | 0.0049         | 3.06        |\n| Pre-offer          | 0.4350           | 0.0202         | 21.53       |\n| price adjustment   |                  |                |             |\n| Offer size         | -0.0009          | 0.0011         | -0.82       |\n| Fraction retained  | 0.0500           | 0.0260         | 1.92        |"
        ],
        "question": "According to previous studies, Smith has chosen the following independent variables to forecast the initial returns of an IPO: Underwriter rank = 1\u201310, with 10 being the highest rank; Pre-offer price adjustment (Represented as a decimal) = (Offer price \u2013 Initial filing price)/Initial filing price; Offer size ($ millions) = Shares sold x Offer price; Fraction retained (Represented as a decimal) = Portion of total company shares kept by insiders Smith's Regression Results Dependent Variable: IPO Initial Return (Represented in Decimal Form, i.e., 1% = 0.01) The forthcoming IPO has these characteristics: underwriter rank = 6; pre-offer price adjustment = 0.04; offer size = $40 million; fraction retained = 0.70. Based on Smith\u2019s regression analysis, what is the anticipated initial return for the forthcoming IPO?",
        "python_solution": "def solution():\n    underwriter_rank = 6\n    pre_offer_price_adjustment = 0.04\n    offer_size = 40 \n    fraction_retained = 0.70\n\n    IR = 0.0477 + (0.0150 * underwriter_rank) + (0.435 * pre_offer_price_adjustment) - (0.0009 * offer_size) + (0.05 * fraction_retained)\n    return IR",
        "ground_truth": 0.154,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "67"
    },
    "68": {
        "tables": [],
        "question": "Without accounting for the compound effects, what is the projected total cost for the holding period when investing in the ETF for nine months, given that the ETF has these trading costs and management fees: an annual management fee of 0.40%, round-trip trading commissions of 0.55%, and a bid-offer spread of 0.20% on buying and selling?",
        "python_solution": "def solution():\n    annual_management_fee = 0.40\n    round_trip_commission = 0.55\n    bid_offer_spread = 0.20\n    holding_period = 9 / 12\n    total_cost_percentage = (holding_period * annual_management_fee) + round_trip_commission + bid_offer_spread\n    return total_cost_percentage",
        "ground_truth": 1.05,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "68"
    },
    "69": {
        "tables": [
            "| Year | Return(%) |\n|------|-----------|\n| 2008 | 14        |\n| 2009 | -10       |\n| 2010 | -2        |"
        ],
        "question": "What is the holding period return for the three-year timeframe, given the following annual rates of return for a mutual fund as reported by a researcher?",
        "python_solution": "def solution():\n    return (1+0.14)*(1-0.10)*(1-0.02)-1",
        "ground_truth": 0.005,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "69"
    },
    "70": {
        "tables": [
            "| Account Item | Amount($ trillions) |\n|---------------|---------------------|\n| Consumption | 20.0 |\n| Capital consumption allowance | 1.9 |\n| Government spending | 4.2 |\n| Imports | 2.2 |\n| Gross private domestic investment | 6.0 |\n| Exports | 1.8 |"
        ],
        "question": "What is the gross domestic product for country B in 2015, according to the provided data?",
        "python_solution": "def solution():\n    Consumption = 20\n    Gross_private_domestic_investment = 6\n    Government_Spending = 4.2\n    Exports = 1.8\n    Imports = 2.2\n    GDP = Consumption + Gross_private_domestic_investment + Government_Spending + Exports - Imports\n    return GDP",
        "ground_truth": 29.8,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "70"
    },
    "71": {
        "tables": [
            "|                   | Stock 1 | Stock 2 |\n|-------------------|---------|---------|\n| Expected return   | 7%      | 10%     |\n| Standard deviation| 12%     | 25%     |\n| Portfolio weights | 0.30    | 0.70    |\n| Correlation       | 0.20    | 0.20    |"
        ],
        "question": "A portfolio consisting of two shares has the following properties: What is the standard deviation of the returns from this portfolio?",
        "python_solution": "def solution():\n    # weights \n    w1 = 0.3\n    w2 = 0.7\n\n    # standard deviations \n    sigma1 = 12\n    sigma2 = 25\n\n    # correlation coefficient \n    rho = 0.2\n\n    # covariance \n    Cov = rho * sigma1 * sigma2\n    \n    # portfolio variance \n    variance = (w1**2 * sigma1**2) + (w2**2 * sigma2**2) + (2*w1*w2*Cov)\n    \n    # portfolio standard deviation \n    std_dev = variance**0.5\n\n    # converting back to percentage \n    std_dev_percent = std_dev / 100.0\n    \n    return std_dev_percent",
        "ground_truth": 0.186,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "71"
    },
    "72": {
        "tables": [
            "| TMT Intangibles Valuation Data | |\n| --- | --- |\n| Working capital balance | $ 22,000,000 |\n| Fair value of fixed assets | $ 57,000,000 |\n| Normalized income to the company | $89,000,000 |\n| Required return on working capital | 6% |\n| Required return on fixed assets | 9% |\n| Required return on intangible assets | 25% |\n| Future growth rate | 7% |"
        ],
        "question": "The Senior VP of RN fund requests Samuel to estimate the value of intangibles for XYZ Corp. Samuel observes that XYZ Corp's intangibles primarily comprise patents and other intangible assets. Consequently, Samuel forecasts the following data for the next year. Applying the excess earnings method, what is the value of the intangibles?",
        "python_solution": "def solution():\n    working_capital_return = 0.06*22000000\n    fixed_assets_return = 0.09*57000000\n    intangible_assets_return = 89000000 - working_capital_return - fixed_assets_return\n    intangible_assets_value = intangible_assets_return / (0.25 - 0.07)\n    return intangible_assets_value/1000000",
        "ground_truth": 458.611,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "72"
    },
    "73": {
        "tables": [
            "|                                            | In Millions ($) |\n|--------------------------------------------|----------------:|\n| Credit sales                               |          40,000 |\n| Cost of goods sold                         |          30,000 |\n| Accounts receivable                        |           3,000 |\n| Inventory-Beginning balance                |           1,500 |\n| Inventory- Ending balance                  |           2,000 |\n| Accounts payable                           |           4,000 |"
        ],
        "question": "Considering the provided financial statement information, what is the cash conversion cycle (net operating cycle) of this specific business?",
        "python_solution": "def solution():\n    inventory_days = ((2000 + 1500)/2)/(30000/365)\n    receivables_days = 3000/(40000/365)\n    operating_cycle = inventory_days + receivables_days\n    purchases = 30000 + 2000 - 1500\n    payables_days = 4000/(purchases/365)\n    net_operating_cycle = operating_cycle - payables_days\n    return net_operating_cycle",
        "ground_truth": 0.798,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "73"
    },
    "74": {
        "tables": [],
        "question": "In 2013, the U.S.-based tech firm Johnson Enterprises, adhering to U.S. GAAP, invested $5 million in research and $3 million in the creation of a financial software. The company aimed to possess the software copyright for 20 years, with a salvage value of $10,000. What would be the book value of the software copyright at the close of 2014?",
        "python_solution": "def solution():\n    research_cost = 5e6\n    development_cost = 3e6\n    total_cost = research_cost + development_cost\n    book_value = total_cost - total_cost\n    return book_value",
        "ground_truth": 0.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "74"
    },
    "75": {
        "tables": [],
        "question": "For a discrete uniform distribution with outcomes for M as: [7, 8, 9, 10], what is the variance of this distribution?",
        "python_solution": "def solution():\n    M = [7, 8, 9, 10]\n    expected_value = sum(M) / len(M)\n    variance = sum((x - expected_value) ** 2 for x in M) / len(M)\n    return variance",
        "ground_truth": 1.25,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "75"
    },
    "76": {
        "tables": [],
        "question": "In 2017, ABC Corporation had sales of $600,000 and an average accounts receivables of $50,000. What was the 2017 receivables collection period for this company?",
        "python_solution": "def solution():\n    revenue = 600000\n    avg_account_receivable = 50000\n    receivables_turnover = revenue / avg_account_receivable\n    receivables_collection_period = 365 / receivables_turnover\n    return receivables_collection_period",
        "ground_truth": 30.417,
        "topic": "Accounting",
        "split": "development",
        "p_id": "76"
    },
    "77": {
        "tables": [],
        "question": "When a trader buys an annual coupon bond with a 6% coupon rate and exactly 20 years left until it reaches maturity at a price that's equivalent to par value. The trader's investment duration is eight years. The approximate modified duration of the bond is 11.470 years. What is the duration gap at the moment of procurement?",
        "python_solution": "def solution():\n    modified_duration = 11.470\n    yield_to_maturity = 0.06\n    investment_horizon = 8\n    macaulay_duration = modified_duration * (1 + yield_to_maturity)\n    duration_gap = macaulay_duration - investment_horizon\n    return duration_gap",
        "ground_truth": 4.158,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "77"
    },
    "78": {
        "tables": [
            "| | | Initial | | Risk- | Contract Price | | |\n|---|---|---|---|---|---|---|---|\n| Price Return | | Roll Return | Collateral Required | Free Rate | Position Size | Current | Longer Term |\n| 4% | | 1.50% | 20% | 1% | $1,500,000 | $750 | $500 |"
        ],
        "question": "What is the overall return for the hedge position of Platte River Foods?",
        "python_solution": "def solution():\n    price_return = 4.0\n    roll_return = 1.5\n    collateral_return = 0.2\n    total_return = price_return + roll_return + collateral_return\n    return total_return",
        "ground_truth": 5.7,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "78"
    },
    "79": {
        "tables": [
            "|                    |      |\n|--------------------|------|\n| ABC LA retirement plan information 2018  |      |\n| Current service costs    |  320 |\n| Past service costs   |  150 |\n| Employer contributions  |  1,200 |\n| Benefit obligation at beginning of year |  45,000 |\n| Benefit obligation at end of year   |  48,395 |\n| Plan assets at beginning of year   |  40,800 |\n| Plan assets at end of year |  44,300 |\n| Actuarial loss   |  350 |\n| Actual return on plan assets   |  3,100 |\n| Discount rate on plan liabilities   |  7.5% |\n| Expected rate of return on plan assets   |  8.2% |"
        ],
        "question": "XYZ NY, a home decor purchasing firm, provides a defined benefit pension scheme for its workers. With reference to the details provided in the subsequent table, presuming that there are no write-offs of past service expenses or actuarial losses and if the actuarial loss is disregarded, can you figure out the recurrent pension expenses which would be presented in I/S as per US GAAP?",
        "python_solution": "def solution():\n    current_service_cost = 320\n    interest_expense = (45000 + 150) * 0.075\n    expected_return = 40800 * 0.082\n    periodic_pension_cost = current_service_cost + interest_expense - expected_return\n    return periodic_pension_cost",
        "ground_truth": 360.65,
        "topic": "Accounting",
        "split": "development",
        "p_id": "79"
    },
    "80": {
        "tables": [],
        "question": "What is the per unit marginal revenue attributed to marketing 250 units instead of 200 units, based on the assessment of the marketing leader from a manufacturer of niche equipment from Switzerland that posits a total income of CHF500,000 from 200 units and CHF600,000 from selling 250 units?",
        "python_solution": "def solution():\n    delta_TR = 600000 - 500000\n    delta_Q = 250 - 200\n    MR = delta_TR / delta_Q\n    return MR",
        "ground_truth": 2000.0,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "80"
    },
    "81": {
        "tables": [
            "| Maturity         | At Initiation | Three Months Later | At Maturity |\n|------------------|--------------|---------------------|------------|\n| Spot (USD/EUR)   | 1.3935/1.3983 | 1.4106/1.4210      | 1.4189/1.4289 |\n| 3-month forward  | -8.1/-7.6      | -21.6/-21.0           |          |\n| 6-month forward  | -19.0/-18.3   | -27.0/-26.2           |          |\n| USD Libor       | 1.266%        | 1.266%               | 1.266%   |\n| EUR Libor       | 1.814%        | 1.814%               | 1.814%   |"
        ],
        "question": "Bradley took over a Spanish packaging firm. The Spanish venture included Bradley purchasing 200,000 shares at a rate of EUR90 each from a packaging company. He elected to entirely hedge the position with a six month USD/EUR forward contract. Further details of the euro hedge at the beginning and three months later are displayed in Exhibit 1. Using the information in Exhibit 1, if the Spanish shares were sold after three months, what is the mark-to-market value (in US dollars) that the manager would report?",
        "python_solution": "def solution():\n    num_shares = 200000\n    price_per_share_eur = 90\n    total_value_eur = num_shares * price_per_share_eur\n    \n    init_forward_rate = 1.3935 - 19/10000\n    settling_forward_rate = 1.4210 - 21/10000\n    \n    diff_rate = init_forward_rate - settling_forward_rate\n    \n    notional_value_usd = diff_rate * total_value_eur\n    \n    libor = 1.266 / 100\n    investment_period = 90\n    \n    mark_to_market_usd = notional_value_usd / (1 + libor * investment_period / 360)\n    \n    return mark_to_market_usd",
        "ground_truth": -489849.626,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "81"
    },
    "82": {
        "tables": [],
        "question": "The existing yearly spot rates are presented as follows: 1 year at 2%, 2 years at 2.5%, 3 years at 3.5%, and 4 years at 5.5%. Can you tell me the forward rate for two years starting from two years from now?",
        "python_solution": "def solution():\n    # Given Spot rates\n    s1, s2, s3, s4 = 0.02, 0.025, 0.035, 0.055\n\n    # Formula for two years forward rate\n    forward_rate = (((1 + s4)**4 / (1 + s2)**2) ** (1/2)) - 1\n    \n    # Convert to percentage\n    forward_rate *= 100\n\n    return forward_rate",
        "ground_truth": 8.588,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "82"
    },
    "83": {
        "tables": [
            "| Time-to- Maturity | Spot Rates |\n| --- | --- |\n| 1 year | 8.0% |\n| 2 years | 9.0% |\n| 3 years | 9.5% |"
        ],
        "question": "Assuming the same series of spot rates, what is the cost of a 3-year bond that provides an annual interest payment at a 10% coupon rate?",
        "python_solution": "def solution():\n    Z1, Z2, Z3, PMT, FV = 0.08, 0.09, 0.095, 10, 100\n    PV1 = PMT / (1 + Z1)\n    PV2 = PMT / (1 + Z2)**2\n    PV3 = (PMT + FV) / (1 + Z3)**3\n    PV = PV1 + PV2 + PV3\n    return PV",
        "ground_truth": 101.458,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "83"
    },
    "84": {
        "tables": [],
        "question": "The unit contribution margin for an item is $20. A business's fixed production costs up to 300,000 units amounts to $500,000. At which production levels (in units) is the degree of operating leverage (DOL) likely to be the least?",
        "python_solution": "def solution():\n    contribution_margin = 20\n    fixed_costs = 500000\n    production_levels = [100000, 200000, 300000]\n    DOLs = []\n\n    for quantity in production_levels:\n        DOL = quantity * contribution_margin / (quantity * contribution_margin - fixed_costs)\n        DOLs.append(DOL)\n\n    minimum_DOL = min(DOLs)\n\n    for i in range(len(DOLs)):\n        if DOLs[i] == minimum_DOL:\n            return production_levels[i]",
        "ground_truth": 300000.0,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "84"
    },
    "85": {
        "tables": [],
        "question": "If the periodic inventory system and FIFO method were utilized, in 2013, Corporation Z commenced operations and acquired 2,000 units of inventory, each unit purchased at\u00a0$50 and sold at $70, with only 1500 units actually sold. In 2014, it acquired another 1,000 units, each unit was purchased at\u00a0$60 and sold at $75, however only 500 units were sold. What is the ending inventory balance for Corporation Z in 2014?",
        "python_solution": "def solution():\n    inventory_in_2014 = 1000\n    cost_per_unit_in_2014 = 60\n    ending_inventory_balance = inventory_in_2014 * cost_per_unit_in_2014\n    return ending_inventory_balance",
        "ground_truth": 60000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "85"
    },
    "86": {
        "tables": [],
        "question": "Johnson's second investment recommendation is to acquire a futures contract for a 10-year Treasury note. The base 2%, semi-annual 10-year Treasury note has a dirty price of 104.17. There have been 30 days since the last coupon payment of the 10-year Treasury note. The futures contract will terminate in 90 days. The quoted price for the futures contract is 129. The current yearly risk-free rate for three months stands at 1.65%. The conversion factor is 0.7025. Smith asks Johnson to compute the quoted futures contract price equilibrium using the carry arbitrage model. What is the equilibrium quoted 10-year Treasury note futures contract price?",
        "python_solution": "def solution():\n    B0 = 104.00\n    AI0 = 0.17\n    AIT = (120/180 * 0.02/2)\n    FVCI = 0\n    CF = 0.7025\n    Ft = (B0 + AI0 + AIT) / (1 - FVCI)\n    F_eq = Ft / CF\n    return F_eq",
        "ground_truth": 148.294,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "86"
    },
    "87": {
        "tables": [
            "| Par Value | Bond Price | Coupon | Modified Duration | Effective Duration | Convexity |\n| --------- | ---------- | ------ | ----------------- | ------------------ | --------- |\n| $25million | 105 | 8% | 7.9 | 8 | 122 |\n| $25million | 100 | 7% | 8.5 | 8.5 | 154 |\n| $20million | 95 | 5% | 6.3 | 2 | 87 |\n| $30million | 87 | 0% | 10.2 | 10.2 | 32 |"
        ],
        "question": "According to the table providing necessary details about four bonds in an investment collection, what is the price value of a basis point for this collection?",
        "python_solution": "def solution():\n    bond_weights = [0.25, 0.25, 0.2, 0.3]\n    bond_prices = [105, 100, 95, 87]\n    bond_durations = [8, 8.5, 2, 10.2]\n\n    portfolio_price = sum([bond_weights[i] * bond_prices[i] for i in range(len(bond_weights))])\n   \n    portfolio_duration = sum([bond_weights[i] * bond_prices[i] * bond_durations[i] for i in range(len(bond_weights))]) / portfolio_price\n\n    price_value_basis_point = portfolio_duration * 0.0001 * portfolio_price * 1000000\n\n    return price_value_basis_point",
        "ground_truth": 72672.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "87"
    },
    "88": {
        "tables": [],
        "question": "Firm XYZ has an outstanding zero-coupon bond with 1 year left until it matures. The bond, which is the company's only debt, has a face value of USD 2,000,000 and a recovery rate of 0% in the event of a default. It is currently trading at 75% of its face value. If we assume that the excess spread solely reflects credit risk and the continuously-compounded risk-free rate is 3% yearly, and using risk-neutral binomial tree methodology, what is the approximately risk-neutral 1-year probability of default for Firm XYZ?",
        "python_solution": "def solution():\n    from math import exp\n    face_value = 2000000\n    bond_price = 0.75 * face_value\n    risk_free_rate = 0.03\n    expected_payoff = bond_price * exp(risk_free_rate)\n\n    PD = 1 - (expected_payoff / face_value)\n    \n    return PD * 100",
        "ground_truth": 22.716,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "88"
    },
    "89": {
        "tables": [
            "| Number of shares outstanding | 10 million   |\n|-----------------------------|--------------|\n| Earnings per share          | $2.00        |\n| P/E                         | 20           |\n| Book value per share        | $30          |"
        ],
        "question": "What will be the subsequent book value per share if the corporation buys back 1 million shares at the current market rate, based on the data collected by the researcher about the corporation?",
        "python_solution": "def solution():\n    market_price_per_share = 40\n    shares_to_buy_back = 1e6\n    equity_reduction = market_price_per_share * shares_to_buy_back\n    book_value_equity_before_buyback = 300e6\n    book_value_equity_after_buyback = book_value_equity_before_buyback - equity_reduction\n    no_of_shares_after_buyback = 9e6\n    book_value_per_share_after_buyback = book_value_equity_after_buyback / no_of_shares_after_buyback\n    return book_value_per_share_after_buyback",
        "ground_truth": 28.889,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "89"
    },
    "90": {
        "tables": [],
        "question": "Recently, Mr. Lee purchased a property in Shanghai and made a down payment of \u00a5 5,000,000. He took out a loan for the remaining balance of \u00a55,000,000 from the bank which he will repay monthly over a period of 10 years. Given that the yearly discount rate is 5.8%, what will the initial mortgage repayment be at the end of this month?",
        "python_solution": "def solution():\n    N = 10 * 12\n    I_Y = 5.8 / 12 / 100\n    PV = 5000000\n    FV = 0\n    PMT = -PV * (I_Y * ((1 + I_Y)**N)) / ((1+I_Y)**N - 1)\n    return abs(PMT)",
        "ground_truth": 55009.405,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "90"
    },
    "91": {
        "tables": [],
        "question": "An organization released a floating-rate note that has a coupon rate equivalent to the three-month MRR + 65 basis points. The interest payments are scheduled for 31 March, 30 June, 30 September, and 31 December. The three-month MRR for 31 March and 30 June stand at 1.55% and 1.35% respectively. What is the coupon rate for the interest remittance done on 30 June?",
        "python_solution": "def solution():\n    MRR_March  = 1.55\n    basis_points = 0.65\n    coupon_rate_June = MRR_March + basis_points\n    return coupon_rate_June",
        "ground_truth": 2.2,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "91"
    },
    "92": {
        "tables": [
            "| Security | Security Weight(%) | Expected Standard Deviation(%) |\n|----------|-------------------|-------------------------------|\n| 1        | 30                | 20                            |\n| 2        | 70                | 12                            |"
        ],
        "question": "What would be the expected standard deviation of the portfolio constructed by a fund manager if the correlation of returns between the two securities is 0.40?",
        "python_solution": "def solution():\n    w1 = 0.3\n    w2 = 0.7\n    sigma1 = 20 / 100    # converting the percentage to a decimal\n    sigma2 = 12 / 100    # converting the percentage to a decimal\n    rho12 = 0.40         # correlation of returns between two securities\n\n    sigma_port = ((w1 ** 2 * sigma1 ** 2) + (w2 ** 2 * sigma2 ** 2) + (2 * w1 * w2 * rho12 * sigma1 * sigma2)) ** 0.5\n\n    return sigma_port * 100    # converting the decimal to a percentage",
        "ground_truth": 12.119,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "92"
    },
    "93": {
        "tables": [
            "| Years to maturity | Present Value Factor |\n|-------------------|----------------------|\n| 0.25              | 0.997506             |\n| 0.5               | 0.992556             |\n| 0.75              | 0.985222             |\n| 1                 | 0.975610             |"
        ],
        "question": "Three months ago, a supervisor initiated a receive-fixed and pay-equity swap. The annualized fixed interest is 3% and the equity index was at 100 at the time of the swap. The expiry of the swap is one year with a quarterly reset, and the nominal amount is valued at $100 million. The present spot rates are as stated: At what equity index level would this equity swap value stand at zero?",
        "python_solution": "def solution():\n    fixed_rate = 0.03\n    nominal_amount = 100000000\n    current_spot_rates = [0.997506, 0.992556, 0.985222]\n    number_of_days = 90\n    denominator = 360\n\n    value_fixed_leg = fixed_rate * (number_of_days / denominator) * nominal_amount * sum(current_spot_rates) + (nominal_amount * current_spot_rates[-1])\n\n    equity_index_price = value_fixed_leg / nominal_amount * 100\n    return equity_index_price",
        "ground_truth": 100.754,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "93"
    },
    "94": {
        "tables": [
            "| Market value of debt | $10 million |\n|----------------------|-------------|\n| Market capitalization| $45 million |\n| Cash and short-term investments | $2.5 million |\n| EBITDA | $15 million |\n| Firm's marginal tax rate | 40% |"
        ],
        "question": "A financier looking to calculate the enterprise value multiple (EV/EBITDA) of a business has collected the relevant information, what is the business's EV/EBITDA multiple?",
        "python_solution": "def solution():\n    market_value_common_preferred_stock = 45\n    market_value_debt = 10\n    cash_short_term_investments = 2.5\n    EBITDA = 15\n    enterprise_value = market_value_common_preferred_stock + market_value_debt - cash_short_term_investments\n    EV_EBITDA = enterprise_value / EBITDA\n    return EV_EBITDA",
        "ground_truth": 3.5,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "94"
    },
    "95": {
        "tables": [],
        "question": "What is the present value (PV) of $5,000 that will be received three years from now, applying a 5% discount rate, compounded monthly?",
        "python_solution": "def solution():\n    FV = 5000\n    r = 0.05\n    m = 12\n    N = 3\n    PV = FV * (1 + r/m) ** (-m*N)\n    return PV",
        "ground_truth": 4304.881,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "95"
    },
    "96": {
        "tables": [
            "| Currency Pair (Price/Base) | Bid    | Offer  | Midpoint |\n|----------------------------|--------|--------|----------|\n| JPY/GBP                    | 187.39 | 187.43 | 187.41   |\n| MXN/USD                    | 17.147 | 17.330 | 17.239   |\n| GBP/EUR                    | 0.7342 | 0.7344 | 0.7343   |\n| USD/EUR                    | 1.1572 | 1.1576 | 1.1574   |\n| USD/GBP                    | 1.5762 | 1.5766 | 1.5764   |",
            "|          |                        |\n|----------|------------------------|\n|Exhibit 2. GBP/EUR Forward Rates||\n| Maturity   | Forward Points  |\n| One month  | 4.40/4.55       |\n| Three months| 14.0/15.0      |\n| Six months  | 29.0/30.0       |\n|          | the GBP 90- day Libor = 0.5800%|"
        ],
        "question": "The chief financial officer of a manufacturing firm based in the UK, Susan Sullivan, gathers the exchange rates from Dealer B as given in Exhibit 1. The company will receive EUR 5,000,000 from a different client in three months. Half a year ago, the firm traded EUR 5,000,000 for GBP using a forward contract of nine months at an inclusive price of GBP/EUR 0.7400. Considering Exhibits 1 and 2, what would be the mark-to-market gain for Sullivan's forward position if the position is marked to the market by gathering the GBP/EUR forward rates displayed in Exhibit 2?",
        "python_solution": "def solution():\n    spot_rate = 0.7344\n    forward_points = 15/10000\n    three_month_forward_rate = spot_rate + forward_points\n    contract_rate = 0.7400\n    eur_amount = 5000000\n    libor_rate = 58/100\n\n    net_cash_flow = eur_amount * (contract_rate - three_month_forward_rate)\n    mark_to_market_gain = net_cash_flow / ((1 + libor_rate/100)**(3/12))\n\n    return mark_to_market_gain",
        "ground_truth": 20470.382,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "96"
    },
    "97": {
        "tables": [
            "| Property subsector          | REIT A Office | REIT B Storage | REIT C Health Care |\n|-----------------------------|---------------|----------------|--------------------|\n| Estimated 12 months cash net operating income (NOI) | $ 350,000    | $ 267,000        | $ 425,000            |\n| Funds from operations (FFO)   | $ 316,965    | $ 290,612        | $ 368,007            |\n| Cash and equivalents         | $ 308,700    | $ 230,850        | $ 341,000            |\n| Accounts receivable         | $ 205,800    | $ 282,150        | $ 279,000            |\n| Debt and other liabilities   | $ 2,014,000  | $ 2,013,500    | $ 2,010,000          |\n| Non-cash rents             | $ 25,991     | $ 24,702        | $ 29,808             |\n| Recurring maintenance-type capital  expenditures | $ 63,769     | $ 60,852        | $ 80,961             |\n| Shares  outstanding        | 56,100       | 67,900          | 72,300              |",
            "| REIT Dividend Forecasts and Average Price Multiples | REIT A   | REIT B   | REIT C   |\n|---------------------------------------------------------------|----------|----------|----------|\n| Expected annual dividend next year                            | $3.80    | $2.25    | $4.00    |\n| Dividend growth rate in years 2 and 3                         | 4.00%    | 5.00%    | 4.50%    |\n| Dividend growth rate (after year 3 into perpetuity)           | 3.50%    | 4.50%    | 4.00%    |\n| Assumed cap rate                                              | 7.00%    | 6.25%    | 6.50%    |\n| Property subsector average P/FFO multiple                     | 14.4x    | 13.5x    | 15.1x    |\n| Property subsector average P/AFFO multiple                    | 18.3x    | 17.1x    | 18.9x    |"
        ],
        "question": "What is the share value of REIT B using valuation Method 4, according to Exhibits 1 and 2?",
        "python_solution": "def solution():\n    FFO = 316965\n    non_cash_rents = 25991\n    recurring_maintenance_capex = 63769\n    shares_outstanding = 56100\n    P_AFFO_multiple = 18.3\n\n    AFFO = FFO - non_cash_rents - recurring_maintenance_capex\n    AFFO_per_share = AFFO / shares_outstanding\n    share_value = AFFO_per_share * P_AFFO_multiple\n\n    return share_value",
        "ground_truth": 74.115,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "97"
    },
    "98": {
        "tables": [],
        "question": "Firms A and B start the year with the same book value of equity and identical tax rate. They have identical operations throughout the year and record all operations similarly except for one. Both firms purchase a printer worth \u00a3300,000 with a three-year useful life and no salvage value on 1st January of the new year. Firm A capitalizes the printer and it undergoes straight-line depreciation, while Firm B expenses the printer. The following year-end data is collected for Firm A. Based on this information, what would Firm B\u2019s return on equity be using year-end equity with the ending shareholders\u2019 equity being \u00a310,000,000, a tax rate of 25%, \u00a30.00 in dividends, and a net income of \u00a3750,000?",
        "python_solution": "def solution():\n    A_net_income = 750000\n    A_equity = 10000000\n    B_net_income = A_net_income - 150000 # B company has larger expense, hence the lower net income\n    B_equity = A_equity - 150000 # B company has lower net income, hence the lower equity\n    B_ROE = B_net_income / B_equity\n    return B_ROE * 100",
        "ground_truth": 6.091,
        "topic": "Accounting",
        "split": "development",
        "p_id": "98"
    },
    "99": {
        "tables": [],
        "question": "As an arbitrage trader, Bob wishes to determine the continuous implied dividend yield of a stock. He is studying the over-the-counter price of a five-year European put and call on this particular stock. The data he has includes: S = $85, K = $90, r = 5%, c = $10, p = $15. What would be the implied dividend yield of the stock?",
        "python_solution": "def solution():\n    import math\n    \n    S = 85  # The stock is currently trading at\n    K = 90  # The strike price of the option\n    r = 5/100  # Interest rate\n    c = 10  # Price of a call option\n    p = 15  # Price of a put option\n    tau = 5  # time to maturity (in years)\n\n    S_tau = c - p + K * math.exp(-r * tau)  # From put-call parity\n    y = -1/tau * math.log(S_tau / S)  # Dividend yield\n\n    return y*100  # convert it to percentage and return",
        "ground_truth": 5.337,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "99"
    },
    "100": {
        "tables": [],
        "question": "The Novartis Company noted a notable rise in its profitability, which led to a material increase in its credit score. Consequently, the market demanded a 100 basis point tighter spread to Gilts on Novartis's 8-year bond. In case the bond's altered duration is 6.0 and its convexity is 55.0, what would be the effect of this change on the return?",
        "python_solution": "def solution():\n    modified_duration = 6.0\n    delta_spread = -0.01\n    convexity = 55.0\n\n    return_impact = -(modified_duration * delta_spread) + 0.5 * convexity * (delta_spread**2)\n    return return_impact*100",
        "ground_truth": 6.275,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "100"
    },
    "101": {
        "tables": [
            "| Time-to-Maturity | Spot Rate |\n|------------------|-----------|\n| 1 year           | 4.86%     |\n| 2 years          | 4.95%     |\n| 3 years          | 5.65%     |"
        ],
        "question": "A company debt security provides a coupon rate of 5% and only has 3 years left until it matures. The interest is given yearly. The benchmark spot curve currently lists a series of rates. Right now, the bond is trading at a Z-spread of 234 basis points. What's the bond's worth?",
        "python_solution": "def solution():\n    PMT = 5\n    FV = 100\n    S1 = 0.0486\n    S2 = 0.0495\n    S3 = 0.0565\n    Z = 0.0234\n\n    PV1 = PMT / ((1 + S1 + Z)**1)\n    PV2 = PMT / ((1 + S2 + Z)**2)\n    PV3 = (PMT + FV) / ((1 + S3 + Z)**3)\n\n    return PV1 + PV2 + PV3",
        "ground_truth": 92.383,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "101"
    },
    "102": {
        "tables": [],
        "question": "What is the expected return for XYZ Company if its stock has a beta of 0.65, the risk-free rate of return is 3% and the expected market return is 9%?",
        "python_solution": "def solution():\n    beta = 0.65\n    risk_free_rate = 0.03\n    expected_market_return = 0.09\n\n    expected_return = risk_free_rate + beta * (expected_market_return - risk_free_rate)\n    return expected_return",
        "ground_truth": 0.069,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "102"
    },
    "103": {
        "tables": [],
        "question": "A researcher collects the following data on a bond: Roughly modified duration 10.3829 and roughly modified convexity 141.217. What is the projected percentage price alteration for the bond should the yield to maturity fall by 50 bps?",
        "python_solution": "def solution():\n    MD = 10.3829\n    Convexity = 141.217\n    Delta_Yield= -0.005\n    Percentage_change_in_bond_price = ((-MD*Delta_Yield)+(0.5*Convexity*(Delta_Yield)**2))  \n    return Percentage_change_in_bond_price*100",
        "ground_truth": 5.368,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "103"
    },
    "104": {
        "tables": [],
        "question": "Currently, Serene Vacation Corp has 1.2 million common shares of stock outstanding with a beta of 2.2. They also have $10 million face value of bonds with five years left to maturity and an 8% coupon with semiannual payments, priced to yield 13.65%. If Serene issues up to $2.5 million of new bonds, they will be priced at par and will have a yield of 13.65%; but if they issue bonds beyond $2.5 million, the entire issuance is expected to yield 16%. Serene has found out it can issue new common stock at $10 a share. The current risk-free interest rate is 3%, and the expected market return is 10%. Serene's marginal tax rate is 30%. If Serene secures $7.5 million of new funding while keeping the same debt-to-equity ratio, what will its weighted average cost of capital be?",
        "python_solution": "def solution():\n    FV = 10000000\n    PMT = 400000\n    N = 10\n    I_YR = 6.825/100\n    PV = FV / ((1 + I_YR)**N)\n    Equity = 1.2 * 1000000 * 10\n    to_be_raised = 7.5 * 1000000\n    bonds = to_be_raised * 0.4\n    rd = 0.16\n    t = 0.3\n    re = 0.03 + 2.2 * (0.10 - 0.03)\n    rdnt = rd * (1 - t)\n    WACC = 0.4 * rdnt + 0.6 * re\n    return WACC*100",
        "ground_truth": 15.52,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "104"
    },
    "105": {
        "tables": [
            "| Time-to-Maturity | Spot rates |\n|-----------------|------------|\n| 1-year            | 7%             |\n| 2-year            | 8%             |\n| 3-year            | 9%             |"
        ],
        "question": "The time-to-maturity for Bond D is 3 years and it has a coupon rate of 8%. The annual payments of interest can be seen. Given the depicted spot rates, what would be the price of Bond D using these spot rates?",
        "python_solution": "def solution():\n    PMT = 8\n    Par = 100\n    S1 = 0.07\n    S2 = 0.08\n    S3 = 0.09\n    PV = PMT/(1+S1) + PMT/((1+S2)**2) + (PMT+Par)/((1+S3)**3)\n    return PV",
        "ground_truth": 97.731,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "105"
    },
    "106": {
        "tables": [
            "|                          | Golden | Frost |\n|--------------------------|--------|-------|\n| Revenue                  | 380    | 460   |\n| Cost of goods sold       | (320)  | (210) |\n| Administrative expenses  | (110)  | (65)  |\n| Depreciation & amortization expense | (106)  | (85)  |\n| Interest expense         | (36)  | (18)   |\n| Income before            | 308    | 82    |\n| Income tax expense       | (125)  | (29)  |\n| Net income               | 183    | 53    |",
            "|                             | Golden | Frost |\n|-----------------------------|--------|-------|\n| Cash                        | 80     | 60    |\n| Account receivable          | 110    | 90    |\n| Inventory                   | 210    | 130   |\n| Total current assets        | 400    | 280   |\n| PP&E                        | 1220   | 770   |\n| Investment in Frost         | 360    | N/A   |\n| Total assets                | 1,980  | 1,050 |\n| Current liabilities         | 130    | 95    |\n| Long-term debt              | 520    | 390   |\n| Total liabilities           | 650    | 485   |\n| Common stock                | 810    | 500   |\n| Retained earnings           | 520    | 65    |\n| Total equity                | 1,330  | 565   |"
        ],
        "question": "Working at the Equity investment company, Jessica, a CFA, noted that Clearwater Primary School had spent \u00a5360 million to acquire a 50 percent stake in Snowflake Early Learning Center on 31 December 2018. The surplus of the acquisition cost over the net assets' fair value of Snowflake was due to previously unregistered licenses. These licenses were estimated to possess an economic lifespan of five years. The value of Snowflake's assets and liabilities, excluding licenses, were equivalent to their documented book value. Clearwater and Snowflake's summarized income statements for the year ending 31 December 2018, and Balance Sheet are presented in the subsequent table: Assuming that both companies' 2019 figures mirror those of 2018 and Clearwater has command over Snowflake, what would be Clearwater\u2019s consolidated depreciation and amortization expense for 2019?",
        "python_solution": "def solution():\n    unrecorded_licenses_value = 155\n    lifetime_of_unrecorded_licenses = 5\n    depreciation_of_unrecorded_licenses = unrecorded_licenses_value / lifetime_of_unrecorded_licenses\n    depreciation_and_amortization_of_Clearwater = 106\n    depreciation_and_amortization_of_Snowflake = 85\n    consolidated_depreciation_and_amortization = depreciation_and_amortization_of_Clearwater + depreciation_and_amortization_of_Snowflake + depreciation_of_unrecorded_licenses\n    return consolidated_depreciation_and_amortization",
        "ground_truth": 222.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "106"
    },
    "107": {
        "tables": [
            "|                  | Value  |\n|------------------|--------|\n| Initial Value    | 87.1876|\n| 2-year shift for 1bp    | 87.3212|\n| 5-year shift for 1bp    | 87.2545|\n| 10-year shift for 1bp   | 87.1454|\n| 30-year shift for 1bp   | 87.3454|"
        ],
        "question": "The table below provides details about a zero-coupon bond. What is the key rate '01 for a shift of 10 years?",
        "python_solution": "def solution():\n    ten_year_shift_for_1_bp = 87.1454\n    initial_value = 87.1876\n    key_rate_01_for_10_year_shift = -(ten_year_shift_for_1_bp - initial_value)\n    return key_rate_01_for_10_year_shift",
        "ground_truth": 0.042,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "107"
    },
    "108": {
        "tables": [],
        "question": "A financial expert predicts that 20% of high-risk bonds will go bankrupt. When he uses a bankruptcy prediction model, he finds that 70% of these bonds will be deemed as \"good\", suggesting a lower risk of failure. Of the bonds that went bankrupt, only 50% were rated as \"good\". Use Bayes' formula to estimate the likelihood of going bankrupt bearing a \"good\" rating. (Hint, let P(A) be the likelihood of bankruptcy, P(B) be the probability of a \"good\" rating, P(B | A) be the probability of a \"good\" rating given bankruptcy, and P(A | B) be the likelihood of bankruptcy given a \"good\" rating.)",
        "python_solution": "def solution():\n    P_A = 0.20 # probability of failure\n    P_B = 0.70 # probability of a \"good\" rating\n    P_B_A = 0.50 # probability of a \"good\" rating given failure\n\n    P_A_B = (P_B_A * P_A) / P_B # probability of failure given a \"good\" rating\n\n    return P_A_B",
        "ground_truth": 0.143,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "108"
    },
    "109": {
        "tables": [],
        "question": "If a customer needs \u00a3100,000 a year from now and the declared yearly rate is 2.50% compounded on a weekly basis, what amount should be deposited today?",
        "python_solution": "def solution():\n    FV = 100000\n    r = 0.025\n    m = 52\n    N = 1\n    PV = FV * (1 + r/m) ** (-m*N)\n    return int(PV)",
        "ground_truth": 97531.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "109"
    },
    "110": {
        "tables": [
            "|      | 31 December 2017 | 31 December 2016 |\n|------|------------------|------------------|\n| EPS  | $1.03            | $0.89            |\n| Core EPS* | $1.31       | $1.01            |",
            "\n|                                                                                               |\n|------------------------------------------------------------------------------------------------|\n| Core EPS is a non-GAAP measure that excludes acquisition charges of                           |\n| $0.18 and $0.12 in 2017 and 2016, respectively, as well as $0.10 in 2017                      |\n| related to the settlement of a lawsuit.                                                       |\n"
        ],
        "question": "Based on Exhibit 1 and Zhang's beliefs about recurring costs, what is the trailing P/E she calculated for Cratt Ltd?",
        "python_solution": "def solution():\n    stock_price = 11.31\n    recurring_eps = 1.03 + 0.10\n    trailing_pe = stock_price / recurring_eps\n    return trailing_pe",
        "ground_truth": 10.009,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "110"
    },
    "111": {
        "tables": [
            "\n|   |   | 2018 |   | 2017 |\n|---|---|------|---|------|\n|   |   |      |   |      |\n| Assets  |   |      |   |      |\n| Current assets |   |      |   |      |\n| Accounts receivable |   | 800  |   | 750  |\n| Inventories |   | 850  |   | 720  |\n| Gross fixed assets |   | 5000 |   | 4250 |\n| Accounts payable |   | $400  |   | $300 |\n| Accrued taxes and expenses  |  | 120  |   | 90  |\n| Notes payable  |  | 550  |   | 500  |\n| Long-term debt  |  | 1,500  |   | 1,400  |\n| Income Statement for the Year Ended 31 December 2018 |   |      |   |      |\n| EBITDA  |  |    |   | 2000 |\n| Depreciation expense  |   |    |   | 400 |\n| EBIT  |  |    |   | 1600 |\n| Interest expense  |  |    |   | 350 |\n| Pretax income  |  |    |   | 1250 |\n| Income tax (at 30 percent)  |  |    |   | 375 |\n| Net income  |   |    |   | $875 |\n"
        ],
        "question": "Given the 2017 and 2018 financial reports provided by the firm, how does Jacques assess the Free Cash Flow to Equity (FCFE) of PZ Inc. for 2018, measured in millions?",
        "python_solution": "def solution():\n    NI = 875 \n    NCC = 400 \n    FCInv = 750 \n    WCInv = 50 \n    Net_borrowing = 150 \n\n    FCFE = NI + NCC - FCInv - WCInv + Net_borrowing\n    return FCFE",
        "ground_truth": 625.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "111"
    },
    "112": {
        "tables": [],
        "question": "The investment manager, Allen, recently took on a new client named Peter. Peter has two primary assets: human capital ($1,200,000) and financial capital ($600,000). He wishes for his total portfolio to have a 30% allocation to stocks. Assuming that human capital is considered to be 25% similar to stocks, what should be the appropriate equity allocation for Peter's financial capital?",
        "python_solution": "def solution():\n    human_capital = 1200000\n    financial_capital = 600000\n    stock_allocation_goal = 0.3\n    human_capital_stock_pct = 0.25\n\n    total_portfolio = human_capital + financial_capital\n    target_stock_percentage = total_portfolio * stock_allocation_goal\n\n    human_capital_stock_alloc = human_capital * human_capital_stock_pct\n\n    financial_capital_stock_alloc = target_stock_percentage - human_capital_stock_alloc\n\n    return financial_capital_stock_alloc",
        "ground_truth": 240000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "112"
    },
    "113": {
        "tables": [
            "| ($ thousands)             |       | 2014 | 2013 |\n|---------------------------|-------|------|------|\n| Sales                     |       | 2125 | 2003 |\n| End of year inventories (LIFO) |       | 312  | 280  |\n| LIFO reserve              |       | 82   | 64   |\n| Net profit margin         |       | 4.9% | 4.0% |"
        ],
        "question": "If a corporation switches from last-in, first-out (LIFO) to first-in, first-out (FIFO), how much higher would the net income (in $ thousands) for 2014 be, considering that the corporate tax rate for the current and all previous years has been 30% according to the data collected by a data analyst?",
        "python_solution": "def solution():\n    net_profit_margin = 0.049\n    sales = 2125\n    tax_rate = 0.3\n    lifo_reserve_2014 = 82\n    lifo_reserve_2013 = 64\n\n    net_income_lifo = net_profit_margin * sales\n    change_in_lifo_reserve = lifo_reserve_2014 - lifo_reserve_2013\n    net_income_fifo = net_income_lifo + change_in_lifo_reserve * (1 - tax_rate)\n\n    increase_in_net_income = net_income_fifo - net_income_lifo\n\n    return increase_in_net_income",
        "ground_truth": 12.6,
        "topic": "Accounting",
        "split": "development",
        "p_id": "113"
    },
    "114": {
        "tables": [],
        "question": "If the 1-year spot rate is 1.02%, the 2-year spot rate is 1.65% and the 3-year spot rate stands at 2.15%, how would you compute the 1-year implied forward rate two years in the future?",
        "python_solution": "def solution():\n    S2 = 1.65 / 100\n    S3 = 2.15 / 100\n    f21 = ((1+S3)**3 / (1+S2)**2) - 1\n    return f21 * 100",
        "ground_truth": 3.157,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "114"
    },
    "115": {
        "tables": [],
        "question": "Based on the BSM model, what is the value of the put option for company XYZ's stock, currently trading at $48.6? Presume that the volatility is 30%, the continuously compounded risk-free rate stands at 0.3%, we assume X is equal to 45, T equals 0.25, N(d1) is 0.6352 and N(d2) is 0.5486.",
        "python_solution": "def solution():\n    import math\n    X = 45 # Strike Price\n    S = 48.6 # Stock Price\n    T = 0.25 # Time to maturity in years\n    r = 0.003 # Risk-free interest rate\n    Nd1 = 0.6352 # Value of cumulative standard normal distribution at d1\n    Nd2 = 0.5486 # Value of cumulative standard normal distribution at d2\n    Nd1_neg = 1 - Nd1 \n    Nd2_neg = 1 - Nd2 \n    \n    put_option_price = math.exp(-r * T) * X * Nd2_neg - S * Nd1_neg\n    \n    return put_option_price",
        "ground_truth": 2.568,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "115"
    },
    "116": {
        "tables": [
            "| Observation | 1  | 2   | 3 | 4   | 5  | 6  | 7  | 8 | 9 | 10  |\n|-------------|----|-----|---|-----|----|----|----|---|---|-----|\n| Value       | -3 | -11 | 3 | -18 | 18 | 20 | -6 | 9 | 2 | -16 |"
        ],
        "question": "What is the sample standard deviation from the following 10 measurements taken from a roughly normal group?",
        "python_solution": "def solution():\n    import math\n    measurements = [-3, -11, 3, -18, 18, 20, -6, 9, 2, -16]\n    mean = sum(measurements) / len(measurements)\n    variance = sum((xi - mean) ** 2 for xi in measurements) / (len(measurements) - 1)\n    return math.sqrt(variance)",
        "ground_truth": 13.181,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "116"
    },
    "117": {
        "tables": [
            "| Stock | Portfolio Weight (%) | Benchmark Weight (%) | 2016 Return (%) |\n|-------|---------------------|----------------------|-----------------|\n| 1     | 30                  | 24                   | 14              |\n| 2     | 30                  | 20                   | 15              |\n| 3     | 20                  | 20                   | 12              |\n| 4     | 10                  | 18                   | 8               |\n| 5     | 10                  | 18                   | 10              |"
        ],
        "question": "The reference weights and yields for each of the five stocks in the Olympia index are presented below. The Kurok Fund employs the Olympia Index as its benchmark, and the fund's portfolio weights are also outlined in the chart. What is the value added (active return) for the Kurok Fund?",
        "python_solution": "def solution():\n    portfolio_weights = [0.30, 0.30, 0.20, 0.10, 0.10]\n    portfolio_returns = [14, 15, 12, 8, 10]\n    benchmark_weights = [0.24, 0.20, 0.20, 0.18, 0.18]\n    benchmark_returns = [14, 15, 12, 8, 10]\n\n    portfolio_return = sum([weight * return_val for weight, return_val in zip(portfolio_weights, portfolio_returns)])\n    benchmark_return = sum([weight * return_val for weight, return_val in zip(benchmark_weights, benchmark_returns)])\n\n    active_return = portfolio_return - benchmark_return\n    \n    return active_return/100",
        "ground_truth": 0.009,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "117"
    },
    "118": {
        "tables": [],
        "question": "An MBS made up of four distinct mortgage pools: $1 million of mortgages maturing in 30 days, $2 million of mortgages maturing in 90 days, $3 million of mortgages maturing in 180 days, and $4 million of mortgages maturing in 360 days, is owned by XYZ Inc. Could you calculate the weighted average maturity (WAM) for this MBS?",
        "python_solution": "def solution():\n    maturity_values = [30, 90, 180, 360] # in days\n    weights = [1, 2, 3, 4] # in million dollars\n    total_maturity = sum([maturity_values[i] * weights[i] for i in range(len(maturity_values))])\n    total_weight = sum(weights)\n    return total_maturity / total_weight",
        "ground_truth": 219.0,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "118"
    },
    "119": {
        "tables": [
            "| Date         |November 2010   |         | December 2010  |         |\n| -------------|:--------------:| -------:|:--------------:| -------:|\n| Goods        |Quantity        |Price    |Quantity        |Price    |\n| Sugar        |70kg            |C0.90/kg |120kg           |\u00a31.00/kg |\n| Cotton       |60kg            |E0.60/kg |50kg            |\u20ac0.80/kg |"
        ],
        "question": "What is the value of the Paasche index for the consumption basket shown in Exhibit 1 for December?",
        "python_solution": "def solution():\n    numerator = (120 * 1) + (50 * 0.8)\n    denominator = (120 * 0.9) + (50 * 0.6)\n    paasche_index = (numerator/denominator) * 100\n    return paasche_index",
        "ground_truth": 115.942,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "119"
    },
    "120": {
        "tables": [],
        "question": "Smith is a tax consultant who offers tax education advice to individual clients. One of Smith's clients is Sarah. Sarah wants Smith to examine Mutual Fund X, which has an embedded gain of 10% of the closing portfolio value. Sarah requests Smith to compute a post-liquidation return for the last three-year period. Mutual Fund X showed after-tax returns of 9.0% in the first year, 5% in the second year, and 8% in the third year, and capital gains are taxed at a 25% rate. What is the annualized after-tax post-liquidation return worked out by Smith?",
        "python_solution": "def solution():\n    # Given\n    returns = [0.09, 0.05, 0.08] # After-tax returns for the three years\n    tax_rate = 0.25 # Capital gains tax rate\n    embedded_gain = 0.10 # Embedded gain of the portfolio\n\n    # Calculate the final after-tax portfolio value\n    portfolio_value = 1\n    for r in returns:\n        portfolio_value *= (1 + r)\n\n    # Account for the unrealized capital gains\n    portfolio_value *= (1 - embedded_gain * tax_rate)\n\n    # Annualize the after-tax post-liquidation return\n    annualized_return = (portfolio_value ** (1 / len(returns))) - 1\n\n    return annualized_return*100 # Converting decimal return to percentage",
        "ground_truth": 6.418,
        "topic": "Accounting",
        "split": "development",
        "p_id": "120"
    },
    "121": {
        "tables": [],
        "question": "Assuming the going rate for the base asset at present is $50, with the risk-free rate being 4%, and the contract ends in three months. If the current value of the advantages is $5, and the current value of the disadvantages is $6. What would be the forward price?",
        "python_solution": "def solution():\n    T = 3 / 12\n    s0 = 50\n    r = 0.04\n    q1 = 5\n    q2 = 6\n    \n    forward_price = s0 * ((1+r)**T) - ((q1 - q2) * ((1+r)**T))\n    \n    return forward_price",
        "ground_truth": 51.503,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "121"
    },
    "122": {
        "tables": [],
        "question": "Currently, the Chinese Yuan is valued at 1.1757 in terms of the Hong Kong Dollar, and the Australian Dollar is valued at 5.0765 in terms of the Chinese Yuan. What is the cross rate for the Hong Kong Dollar to the Australian Dollar?",
        "python_solution": "def solution():\n    HKD_CNY = 1.1757\n    CNY_AUD = 5.0765\n    HKD_AUD = HKD_CNY * CNY_AUD\n    return HKD_AUD",
        "ground_truth": 5.968,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "122"
    },
    "123": {
        "tables": [],
        "question": "What's the cost of the annuity that has a YTM of 5.5% and pays out $100,000 annually for 40 years?",
        "python_solution": "def solution():\n    N = 40\n    PMT = 100000\n    I_Y = 5.5 / 100\n    \n    PV = PMT * ((1 - (1 + I_Y) ** -N) / I_Y)\n    \n    return PV",
        "ground_truth": 1604612.469,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "123"
    },
    "124": {
        "tables": [
            "| Security | Security Weight(%) | Expected Standard Deviation(%) |\n|----------|-------------------|--------------------------------|\n| 1        | 40                | 30                             |\n| 2        | 60                | 15                             |"
        ],
        "question": "What is the anticipated standard deviation for the following portfolio, assuming a correlation of 0.25 between the two securities?",
        "python_solution": "def solution():\n    w1 = 0.4\n    w2 = 0.6\n    sigma1 = 0.3\n    sigma2 = 0.15\n    rho = 0.25\n    sigma_port = ((w1**2 * sigma1**2) + (w2**2 * sigma2**2) + (2*w1*w2*sigma1*sigma2*rho))**0.5\n    return sigma_port*100",
        "ground_truth": 16.703,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "124"
    },
    "125": {
        "tables": [],
        "question": "Given that an artwork was created and sold in 2015 for $1000, and the creation process cost $300. When computing GDP using the sum-of-value-added approach, what is the value of the final step in creating the artwork?",
        "python_solution": "def solution():\n    cost_of_artwork = 1000\n    cost_of_creation = 300\n    final_value = cost_of_artwork - cost_of_creation\n    return final_value",
        "ground_truth": 700.0,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "125"
    },
    "126": {
        "tables": [],
        "question": "What is the effective annual rate if the yearly rate for the stock market is 14.31% and it's compounded quarterly?",
        "python_solution": "def solution():\n    annual_rate = 0.1431\n    compounding_frequency = 4\n\n    ear = (1 + (annual_rate / compounding_frequency))**compounding_frequency - 1\n\n    return ear*100.0",
        "ground_truth": 15.096,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "126"
    },
    "127": {
        "tables": [
            "| 10-Year Historical | Current | Capital Market Expectations |\n|---|---|---|\n| Average government bond yield: 2.8% | 10-year government bond yield:2.3% | |\n| Average annual equity return: 4.6% | Year-over-year equity return:-9.4% | |\n| Average annual inflation rate: 2.3% | Year-over-year inflation rate:2.1% | Expected annual inflation: 2.3% |\n| Equity market P/E (beginning of period): 15x | Current equity market P/E: 14.5x | Expected equity market P/E: 14.0x |\n| Average annual dividend income return: 2.6% | | Expected annual income return: 2.4% |\n| Average annual real earnings growth: 6.0% | | Expected annual real earnings growth: 5.0% |"
        ],
        "question": "An investor from Australia currently manages an equity portfolio valued at A$240 million. He is contemplating adjusting the portfolio based on an evaluation of the risk and return possibilities confronting the Australian economy. The table below contains data pertaining to the Australian investment markets and the economic situation: Using the data in the table, determine the anticipated annual equity return using the Grinold\u2013Kroner model (the number of outstanding shares is presumed to remain unchanged).",
        "python_solution": "def solution():\n    annual_income_return = 2.4 / 100\n    expected_annual_real_earning_growth = 5.0 / 100\n    expected_inflation_rate = 2.3 / 100\n    expected_nominal_earning_growth_return = expected_annual_real_earning_growth + expected_inflation_rate\n    expected_repricing_return = (14 - 14.5) / 14.5 \n    return annual_income_return + expected_nominal_earning_growth_return + expected_repricing_return",
        "ground_truth": 0.063,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "127"
    },
    "128": {
        "tables": [],
        "question": "The variances of shares X and shares Y are 0.25 and 0.64 respectively, and the correlation between these two securities is 0.09. What is the covariance of the returns?",
        "python_solution": "def solution():\n    variance_X = 0.25\n    variance_Y = 0.64\n    correlation = 0.09\n    \n    covariance = correlation * (variance_X**0.5) * (variance_Y**0.5)\n    return covariance",
        "ground_truth": 0.036,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "128"
    },
    "129": {
        "tables": [],
        "question": "The effective annual return on an investment is 9%. What would be the return on a bond-equivalent basis?",
        "python_solution": "def solution():\n    EAR = 0.09\n    BEY = (pow((1 + EAR), 0.5) - 1) * 2\n    return BEY",
        "ground_truth": 0.088,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "129"
    },
    "130": {
        "tables": [],
        "question": "In 2016, Emily purchased a machine for $50,000 and its useful life is ten years. It has a residual value of $5,000. What is the depreciation of this machine in 2016 using the double-declining balance method?",
        "python_solution": "def solution():\n    cost_of_machine = 50000\n    useful_life = 10\n    residual_value = 5000\n    depreciation = cost_of_machine * (2/useful_life)\n    return depreciation",
        "ground_truth": 10000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "130"
    },
    "131": {
        "tables": [],
        "question": "If the exchange rate for the Euro (EUR) in London stands at GBP/EUR 0.8878, what would probably be the exchange rate for the British pound (GBP) in Frankfurt (EUR/GBP)?",
        "python_solution": "def solution():\n    gbp_eur = 0.8878\n    eur_gbp = 1 / gbp_eur\n    return eur_gbp",
        "ground_truth": 1.126,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "131"
    },
    "132": {
        "tables": [],
        "question": "If we assume an existing market risk-free rate of 4% annually, and the yield on the Corporation B bond is 6% annually, what is the inferred probability of default based on the current bond interest rate, presuming the market is fairly priced, and the recovery rate on the corporation's bonds is 70%?",
        "python_solution": "def solution():\n    risk_free_rate = 0.04\n    yield_corp_B_bond = 0.06\n    recovery_rate = 0.7\n\n    credit_spread = yield_corp_B_bond - risk_free_rate\n    LGD = 1 - recovery_rate\n    default_probability = credit_spread / LGD\n\n    return default_probability * 100",
        "ground_truth": 6.667,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "132"
    },
    "133": {
        "tables": [],
        "question": "Analyst Johnson is determining the RAROC of a commercial loan portfolio for Company P. He has gathered the following details: The primary borrowing is $1.3 billion. The predicted pre-tax profit from the loan portfolio is 7%. The estimated direct annual operation cost is around $6 million. The loan portfolio is backed by $1.3 billion of consumer deposits and the interest rate is at 5%. Johnson is also predicting that the expected yearly loss on the portfolio is 0.3% of the principal. On top of this, Johnson estimates the unexpected loss on the principal amount could be as high as 8%. Further, Johnson takes into consideration that the risk-free rate is 1.5% and the effective tax rate is 25%. Finally, Johnson presumes there will not be any transfer pricing issues. Based off the definition of RAROC, what would Johnson's prediction about RAROC be?",
        "python_solution": "def solution():\n    principal = 1300000000\n    predicted_pre_tax_profit_rate = 7/100\n    operation_cost = 6000000\n    interest_rate = 5/100\n    expected_loss_rate = 0.3/100\n    unexpected_loss_rate = 8/100\n    risk_free_rate = 1.5/100\n    tax_rate = 25/100\n    \n    unexpected_loss = principal * unexpected_loss_rate\n    economic_capital = unexpected_loss\n    return_on_economic_capital = economic_capital * risk_free_rate\n    \n    expected_revenue = principal * predicted_pre_tax_profit_rate\n    interest_expense = principal * interest_rate\n    expected_loss = principal * expected_loss_rate\n    \n    RAROC = ((expected_revenue - operation_cost - expected_loss - interest_expense + return_on_economic_capital ) * (1-tax_rate)) / economic_capital\n    \n    return RAROC * 100",
        "ground_truth": 12.736,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "133"
    },
    "134": {
        "tables": [],
        "question": "An insurance firm projects that next year, 40% of clients with only a car insurance plan will renew it, and 70% of clients with only a house insurance plan will do the same. The firm also projects that 80% of clients with both a car and a house insurance plan will renew at least one of these plans next year. According to the firm's records, 70% of clients have a car insurance plan, 50% have a house insurance plan, and 20% have both types of plans. Based on these estimates by the firm, what is the percentage of clients that will renew at least one plan next year?",
        "python_solution": "def solution():\n    PAH = 0.20\n    PAHc = 0.70 - PAH\n    AcH = 0.50 - PAH\n    res = 0.40 * PAHc + 0.70 * AcH + 0.80 * PAH\n    return res * 100",
        "ground_truth": 57.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "134"
    },
    "135": {
        "tables": [],
        "question": "The following spot and forward rates are provided: Present 1-year spot rate is 6%. The one-year forward rate one year from now is 8%. The one-year forward rate two years from now is 10%. What is the worth of a 3-year, 10% annually paid, bond with a par value of $1000?",
        "python_solution": "def solution():\n    bond_value = 100 / (1.06) + 100 / ((1.06) * (1.08)) + 1100 / ((1.06) * (1.08) * (1.1))\n    return int(bond_value)",
        "ground_truth": 1055.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "135"
    },
    "136": {
        "tables": [],
        "question": "If Allison, a CFA, was revising her company's estimates for US equity returns and thought that over time the growth of the US labor input would be 0.9% per year and labor productivity would increase by 1.5%, inflation would stand at 2.1%, the dividend yield would be 2.25%, and the P/E growth would be nonexistent, what was probably her benchmark forecast for continuously compounded long-term US equity returns?",
        "python_solution": "def solution():\n    growth_of_labor_input = 0.9\n    labor_productivity_increase = 1.5\n    inflation = 2.1\n    dividend_yield = 2.25\n    \n    baseline_projection = growth_of_labor_input + labor_productivity_increase + inflation + dividend_yield\n\n    return baseline_projection/100",
        "ground_truth": 0.068,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "136"
    },
    "137": {
        "tables": [],
        "question": "If an $100 million retirement fund has 80% in equity with a beta of 1.2, how many stock index futures would need to be purchased to change the allocation to 60% in equity? This assumes a stock index value of 1,200, a multiplier of $250, and a beta of 0.95.",
        "python_solution": "def solution():\n    target_equity = 0.60\n    initial_equity = 0.80\n    portfolio_value = 100000000\n    futures_value = 1200 * 250\n    beta_stock = 1.2\n    beta_future = 0.95\n    delta_equity = (target_equity - initial_equity) * portfolio_value\n    delta_beta = (0 - beta_stock)/beta_future\n    futures_contracts = delta_beta * (delta_equity/futures_value)\n    return int(futures_contracts)",
        "ground_truth": 84.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "137"
    },
    "138": {
        "tables": [
            "| Security | Expected Standard Deviation(%) | Beta |\n|----------|-------------------------------|------|\n| Security 1 | 25 | 1.50 |\n| Security 2 | 15 | 1.40 |\n| Security 3 | 20 | 1.60 |"
        ],
        "question": "According to the analyst's data within the context of the capital asset pricing model, if the anticipated return for Share B is 11.4% and the risk-free rate is 3%, what is the projected return for the market?",
        "python_solution": "def solution():\n    risk_free_rate = 3.0\n    expected_return_share_b = 11.4\n    beta = 1.4\n    market_risk_premium = (expected_return_share_b - risk_free_rate) / beta\n    return risk_free_rate + market_risk_premium",
        "ground_truth": 9.0,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "138"
    },
    "139": {
        "tables": [
            "| Purchase price | $32,500 |\n| -------------- | ------- |\n| Freight and insurance | $2,100 |\n| Installation  | $800 |\n| Testing | $500 |\n| Training staff on maintaining machine | $1000 |"
        ],
        "question": "What should be the total cost reported on the balance sheet for the scientific equipment that Corporation BMT bought for its product development?",
        "python_solution": "def solution():\n    equipment_cost = 32500\n    delivery_cost = 2100 \n    installation_cost = 800\n    testing_cost = 500\n    total_cost = equipment_cost + delivery_cost + installation_cost + testing_cost\n    return total_cost",
        "ground_truth": 35900.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "139"
    },
    "140": {
        "tables": [],
        "question": "According to the financial information of a PE fund named XZY Corporation with a carried interest rate of 20%, and which has a total pledged capital of $100 million. At the end of the last year, the total paid-in capital was $90 million while $30 million was the total distributions given to LPs. The value of year-end NAV, both before and after distributions, stood at $160 million and $130 million respectively. Their projected NAV before any distributions for the next year is $250 million. What is their forecasted carried interest for the next year?",
        "python_solution": "def solution():\n    committed_capital = 100\n    nav_before_distribution = 250\n    nav_before_distribution_prev = 160\n    carried_interest_rate = 20 / 100\n    if nav_before_distribution > committed_capital:\n        carried_interest = (nav_before_distribution - nav_before_distribution_prev) * carried_interest_rate\n        return carried_interest\n    else:\n        return 0",
        "ground_truth": 18.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "140"
    },
    "141": {
        "tables": [],
        "question": "What will be the worth of $75,000 invested now for six years at an annual interest rate of 7% compounded quarterly?",
        "python_solution": "def solution():\n    PV = 75000\n    r = 0.07\n    N = 6\n    m = 4\n\n    FV = PV * (1 + r/m)**(m*N)\n    \n    return int(FV) # rounding down intentionally as per the requirements.",
        "ground_truth": 113733.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "141"
    },
    "142": {
        "tables": [
            "| Original Values and Estimates (millions) | Accounting Purposes | Tax Purposes |\n| ---------------------------------------- | ------------------- | ------------ |\n| Acquisition cost in 2011                | \u00a38,000              | \u00a38,000       |\n| Depreciation, straight line              | 20 years            | 8 years      |\n| Accumulated depreciation, end of 2013   | \u00a31,200              | \u00a33,000       |\n| Net balance, end of 2013                | \u00a36,800              | \u00a35,000       |\n| **Re-estimated Values and Estimates, Start of 2014** |               |              |\n| Revaluation balance, start of 2014      | \u00a310,000             | Not applicable |\n| New estimated life                      | 20 years            |              |"
        ],
        "question": "Based on the information given in the chart, what is the deferred tax liability (in millions) at the end of 2014 for a firm that has newly appraised a depreciable asset, predicting its remaining lifespan will be an additional 20 years? The tax rate for all the years is 30% and note that tax laws do not recognize the asset's revaluation.",
        "python_solution": "def solution():\n    tax_rate = 0.30\n    tax_base = 4000\n    carrying_amount = 6300\n    deferred_tax_liability = tax_rate * (carrying_amount - tax_base)\n    return deferred_tax_liability",
        "ground_truth": 690.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "142"
    },
    "143": {
        "tables": [
            "| Probability | Sales ($ millions) |\n|-------------|--------------------|\n| 0.05        | 70                 |\n| 0.70        | 40                 |\n| 0.25        | 25                 |"
        ],
        "question": "What is the standard deviation of sales for an organization, given its probability distribution?",
        "python_solution": "def solution():\n    # defining probabilities and sales\n    prob = [0.05, 0.70, 0.25]\n    sales = [70, 40, 25]\n\n    # calculating expected sales\n    expected_sales = sum(p*s for p, s in zip(prob, sales))\n\n    # calculating variance\n    variance = sum(p*((s - expected_sales) ** 2) for p, s in zip(prob, sales))\n\n    # computing the standard deviation\n    std_dev = variance ** 0.5\n\n    return std_dev",
        "ground_truth": 9.808,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "143"
    },
    "144": {
        "tables": [],
        "question": "XYZ SF, a home decor retailing corporation, provides its workers with a defined benefit retirement plan. The company's contributions stand at 1,200. The PBO at the start of the year was 45,000 and by the end of the year, it was 43,500. The plan's assets were valued at 40,800 at the start and 39,650 at the end of the year. Can you compute the overall recurring pension cost utilizing this provided data?",
        "python_solution": "def solution():\n    ending_funded_status = 39650 - 43500\n    beginning_funded_status = 40800 - 45000\n    company_contribution = 1200\n    tppc = ending_funded_status - beginning_funded_status - company_contribution\n    return abs(tppc)",
        "ground_truth": 850.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "144"
    },
    "145": {
        "tables": [
            "| Year | Investment | Return |\n|------|------------|--------|\n| 1    | $500       | 12%    |\n| 2    | $600       | 5%     |\n| 3    | $1000      | 1%     |"
        ],
        "question": "John oversees a fund, with the returns for the first three years displayed below: What will be the holding period return?",
        "python_solution": "def solution():\n    HPR = (1.12 * 1.05 * 1.01) - 1\n    return HPR * 100",
        "ground_truth": 18.776,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "145"
    },
    "146": {
        "tables": [],
        "question": "Taking into account the provided data, what number of shares should be applied when figuring out the business' diluted EPS? The business had 60,000 common shares out in the open all through the year and also had 5,000 outstanding warrants throughout the entire year, each can be converted into share at $25 per share. The stock's price at the end of year was $30, and the average stock price for the year of the business was $20.",
        "python_solution": "def solution():\n    common_shares = 60000\n    warrants = 5000\n    exercise_price = 25\n    avg_price = 20\n\n    if avg_price < exercise_price:\n        return common_shares\n    else:\n        return common_shares + warrants\n    return common_shares",
        "ground_truth": 60000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "146"
    },
    "147": {
        "tables": [],
        "question": "Louis is working on the valuation for XY Corporation, a producer and supplier of red wine that recently purchased a large bottling firm to expand its product range. This purchase will greatly influence XY's future outcomes. Knowing that XY projected EPS and Current share price are $2 and $40 respectively, what would be the most suitable price-to-earnings ratio to apply in the valuation of XY?",
        "python_solution": "def solution():\n    current_price = 40\n    projected_EPS = 2\n    PE_ratio = current_price / projected_EPS\n    return PE_ratio",
        "ground_truth": 20.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "147"
    },
    "148": {
        "tables": [
            "| 1 Year | 3 Years | 5 Years | Since Inception |\n|--------|---------|---------|-----------------|\n| 5.3%   | 6.2%    | 4.7%    | 4.4%            |"
        ],
        "question": "Given the following performance figures for a substitute investment. Presume the highest drawdown risk remains consistent at 10.2% per time period. Also assume the mean drawdown risk remains constant at 6.8% per time period. Based on this information, What does the Calmar ratio turn out to be?",
        "python_solution": "def solution():\n    average_compounded_return = 6.2\n    maximum_drawdown = 10.2\n    calmar_ratio = average_compounded_return / maximum_drawdown\n    return calmar_ratio",
        "ground_truth": 0.608,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "148"
    },
    "149": {
        "tables": [
            "| Trade | Trade Price | Prevailing Bid | Prevailing Offer |\n|-------|-------------|----------------|------------------|\n| 1     | 41.50       | 41.45          | 41.50            |\n| 2     | 41.75       | 41.73          | 41.75            |"
        ],
        "question": "Bloomfield informs Smith that he observed 500 shares of BYYP stock being traded every 20 minutes for a duration of an hour. He also tells Smith that he saw a similar trading pattern in the stock during the previous trading day. Bloomfield instructs Smith to place an order to buy BYYP stock, assuming that a trader is looking for liquidity and is executing a large purchase order by dividing it into smaller parts. Based on Exhibit 1, what is the average effective spread of the BYYP transactions?",
        "python_solution": "def solution():\n    trade1_price = 41.50\n    trade1_midpoint = 41.475\n    trade2_price = 41.75\n    trade2_midpoint = 41.74\n    \n    effective_spread_trade1 = 2 * (trade1_price - trade1_midpoint)\n    effective_spread_trade2 = 2 * (trade2_price - trade2_midpoint)\n    \n    average_effective_spread = (effective_spread_trade1 + effective_spread_trade2) / 2\n    \n    return average_effective_spread",
        "ground_truth": 0.035,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "149"
    },
    "150": {
        "tables": [],
        "question": "If a never-ending preferred share starts its initial three-monthly payout of $2.00 in five quarters, and the annual rate of yield needed is 6% compounding every quarter, what is the current value of the share?",
        "python_solution": "def solution():\n    A = 2.0\n    r = 0.06 / 4\n    N = 4\n    FV = A / r\n    PV = FV / ((1 + r) ** N)\n    return int(PV)",
        "ground_truth": 125.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "150"
    },
    "151": {
        "tables": [],
        "question": "If Corporation B purchases a license for $6,500, intending to utilize it for four years but expecting to gain benefits from it for only three years and applying the straight-line amortization method, what would be the accumulated amortization at the conclusion of Year 2?",
        "python_solution": "def solution():\n    license_cost = 6500\n    useful_years = 3\n    year = 2\n    annual_amortization = license_cost / useful_years\n    accumulated_amortization = annual_amortization * year\n    return accumulated_amortization",
        "ground_truth": 4333.333,
        "topic": "Accounting",
        "split": "development",
        "p_id": "151"
    },
    "152": {
        "tables": [],
        "question": "A buyer is thinking about acquiring a common share that comes with a $2.00 yearly dividend. The dividend is predicted to increase at a pace of 4 percent every year. If the buyer\u2019s necessary return rate is 7 percent, what would be the inherent worth of the share?",
        "python_solution": "def solution():\n    D0 = 2.00\n    g = 0.04\n    r = 0.07\n    D1 = D0 * (1 + g)\n    V0 = D1 / (r - g)\n    return V0",
        "ground_truth": 69.333,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "152"
    },
    "153": {
        "tables": [
            "| Company   | Sales(in millions of\u20ac) |\n|-----------|-----------------------|\n| Ajiwo     | 500                   |\n| Bdfhyj    | 350                   |\n| Cegfd     | 270                   |\n| Ddgh      | 200                   |\n| Ebned     | 150                   |\n| All others| 40                    |"
        ],
        "question": "In the previous quarter, we noted the market share data of various businesses as follows: Based on this information, what is the concentration ratio of the four firms?",
        "python_solution": "def solution():\n    total_market_share = 500 + 350 + 270 + 200 + 150 + 40\n    top_4_firms_share = 500 + 350 + 270 + 200\n    concentration_ratio = top_4_firms_share / total_market_share\n    return concentration_ratio * 100",
        "ground_truth": 87.417,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "153"
    },
    "154": {
        "tables": [
            "|   | Forecasted Balance Sheet Data for Ll at 31 December 2018 |\n|---|--------------------------------------------------------|\n| Cash | 120 |\n| Accounts receivable | 30 |\n| Inventory | 450 |\n| Fixed assets | 800 |\n| Total assets | 1,400 |\n| Liabilities | 320 |\n| Common stock | 780 |\n| Retained earning | 300 |",
            "|                               | Exchange rates ($/\u20ac) |\n|-------------------------------|----------------------|\n| when fixed assets were acquired | 1.55                 |\n| 31 December 2018               | 1.77                 |\n| 2018 average                    | 1.68                 |"
        ],
        "question": "The KY corporation is a company based in the US with US GAAP. It also has two subsidiaries in Europe: ZX financial service and CO financial consultant. Simon, CFA, has put together a forecast for KY's 2018 financial statement: Simon predicts that ZX financial service will have 3,500 in sales and 1,500 in cost of sales in 2018. If KY decides to employ the current rate method to translate the results of subsidiary ZX into US dollars, could you calculate the gross profit margin for 2018?",
        "python_solution": "def solution():\n    sales = 3500\n    cost_of_sales = 1500\n\n    gross_profit = sales - cost_of_sales\n    gross_profit_margin = gross_profit / sales\n    \n    return gross_profit_margin",
        "ground_truth": 0.571,
        "topic": "Accounting",
        "split": "development",
        "p_id": "154"
    },
    "155": {
        "tables": [
            "|             | $ thousands |\n|-------------|-------------|\n| Purchase of securities for trading purposes | 240 |\n| Proceeds from the sale of trading securities | 300 |\n| Proceeds from issuance of bonds | 500 |\n| Purchase of 30% of the shares of an affiliated company | 275 |"
        ],
        "question": "Considering the events recorded in 2014, what was the net cash flow from investing activities for the firm, as shown on the 2014 cash flow statement (in thousands)?",
        "python_solution": "def solution():\n    purchase_affiliated_company = -275000\n    net_cash_flow = purchase_affiliated_company\n    return net_cash_flow/1000",
        "ground_truth": -275.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "155"
    },
    "156": {
        "tables": [
            "\n|              | Market continues to rise |      |      | Market unchanges |      |      | Market continues to decline |      |      |\n|--------------|--------------------------|------|------|------------------|------|------|------------------------------|------|------|\n| stock price  | $25                      | $45  | $60  | $25              | $45  | $60  | $25                          | $45  | $60  |\n| probability  | 5%                       | 65%  | 30%  | 35%              | 55%  | 9%   | 62%                          | 38%  | 0%   |\n"
        ],
        "question": "Given the details about stock market fluctuations, with a 38% chance of it going up, a 46% chance of it staying the same, and a 16% chance of it falling, what is the likelihood that the stock's value will be at $45?",
        "python_solution": "def solution():\n    probability_up = 0.38 * 0.65\n    probability_same = 0.46 * 0.56\n    probability_down = 0.16 * 0.38\n    total_probability = probability_up + probability_same + probability_down\n    return total_probability * 100",
        "ground_truth": 56.54,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "156"
    },
    "157": {
        "tables": [],
        "question": "In a repurchase agreement, Company X sells a bond with a face value of $10 million to Company Y on August 1, with an invoice price of $11 million for a 20-day period. Concurrently, Company X consents to reacquire the $10 million worth bond at a price equal to the initial invoice price plus an interest calculated at a repo rate of 20%. Based on the provided details, what is the repurchase cost?",
        "python_solution": "def solution():\n    face_value = 10  # face value of the bond in million\n    invoice_price = 11  # invoice price of the bond in million\n    repo_rate = 20 / 100  # repo rate\n    time_period = 20  # time period in days\n\n    repurchase_cost = invoice_price * (1 + repo_rate * time_period / 360)  # calculation of repurchase cost\n    return repurchase_cost  # return repurchase cost",
        "ground_truth": 11.122,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "157"
    },
    "158": {
        "tables": [
            "| Balances as of Year Ended 31 December | 2016 | 2017 |\n| --- | --- | --- |\n| Retained earnings | 110 | 125 |\n| Accounts receivable | 45 | 48 |\n| Inventory | 24 | 20 |\n| Accounts payable | 30 | 33 |"
        ],
        "question": "Business B announced and distributed cash dividends worth $8 million and an impairment expense of $12 million in 2017. They categorized the dividend payment as a financing activity. What is the value of Business B's operating cash flow for 2017 (in $ millions)?",
        "python_solution": "def solution():\n    REB = 0\n    NI = 23\n    Div = 0\n    REE = 0\n    impairment = 12\n    AR_change = (48-45)\n    Inv_change = (20-24)\n    AP_change = (33-30)\n    CFO = NI + impairment - AR_change - Inv_change + AP_change\n    return CFO",
        "ground_truth": 39.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "158"
    },
    "159": {
        "tables": [],
        "question": "Suppose the number of defective vehicles adheres to the Possion distribution. Also, suppose that 5% of the vehicles arriving at the production line are defective. Then, if you randomly pick 5 vehicles on the production line, what's the likelihood that one is defective?",
        "python_solution": "def solution():\n    import math\n    n = 5\n    p = 0.05\n    lambda_ = n * p\n    k = 1\n    probability = ((lambda_ ** k) * math.exp(-lambda_)) / math.factorial(k)\n    return probability",
        "ground_truth": 0.195,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "159"
    },
    "160": {
        "tables": [],
        "question": "What is the projected price value of a basis point for a bond that provides a 3% coupon rate with yearly coupons, has nine years until maturity, a yield-to-maturity of 5%, and is valued at 85.784357 per 100 of par value?",
        "python_solution": "def solution():\n    coupon_rate = 3\n    maturity_years = 9\n    yield_to_maturity = 5\n    bond_value = 85.784357\n\n    PV_minus = sum([coupon_rate/(1 + (yield_to_maturity - 0.01)/100)**i for i in range(1, maturity_years+1)])\n    PV_minus += 100/(1 + (yield_to_maturity - 0.01)/100)**maturity_years\n\n    PV_plus = sum([coupon_rate/(1 + (yield_to_maturity + 0.01)/100)**i for i in range(1, maturity_years+1)])\n    PV_plus += 100/(1 + (yield_to_maturity + 0.01)/100)**maturity_years\n\n    PVBP = (PV_minus - PV_plus) / 2\n\n    return PVBP",
        "ground_truth": 0.065,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "160"
    },
    "161": {
        "tables": [],
        "question": "Suppose a community has an established average of 1,000. Imagine that 1,600 samples are randomly selected (with replacement) from this community. The average of these observed samples turns out to be 998.7, and their standard deviation is 100. What is the standard error of the sample mean?",
        "python_solution": "def solution():\n    sample_std_dev = 100\n    n = 1600\n    std_error = sample_std_dev / (n ** 0.5)\n    return std_error",
        "ground_truth": 2.5,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "161"
    },
    "162": {
        "tables": [],
        "question": "The Smith family has an investment portfolio that is comprised of $500,000 in stocks and $330,000 in fixed income products. The Smiths also own a house valued at $350,000, with $175,000 still owed on the mortgage. The total present value of their earnings before they retire is estimated to be $980,000, and the future expected consumption is projected to be worth $870,000 at present. The Smiths have plans to cover their children's college tuition costs amounting to $150,000 at present value. They also wish to establish a family foundation in 25 years, projected to be worth $600,000 at present. Using the information provided, prepare an economic balance sheet for the Smith family. Determine their economic net worth.",
        "python_solution": "def solution():\n    equity = 500000\n    fixed_income = 330000\n    residence = 350000\n    pre_retirement_earnings = 980000\n\n    mortgage_debt = 175000\n    consumption = 870000\n    tuition_fee = 150000\n    foundation = 600000\n\n    total_economic_assets = equity + fixed_income + residence + pre_retirement_earnings\n    total_economic_liabilities = mortgage_debt + consumption + tuition_fee + foundation\n    economic_net_worth = total_economic_assets - total_economic_liabilities\n    return economic_net_worth",
        "ground_truth": 365000.0,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "162"
    },
    "163": {
        "tables": [],
        "question": "The products were sold to clients by XYZ Corporation on 30 June 2006 for an overall cost of \u20ac10,000. The sale conditions stipulate that the payment must be finalized within 30 days. The goods had a cost value of \u20ac8,000. What is the probable net shift in XYZ Corporation's total assets on 30 June 2006 due to this sale?",
        "python_solution": "def solution():\n    sales_price = 10000\n    cost_price = 8000\n    net_increase_assets = sales_price - cost_price\n    return net_increase_assets",
        "ground_truth": 2000.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "163"
    },
    "164": {
        "tables": [],
        "question": "Assuming a tax rate of 35%, if a business is 60% financed by debt and has an equity beta of 1.4, what would be the asset beta of that business?",
        "python_solution": "def solution():\n    tax_rate = 0.35\n    debt_ratio = 0.60\n    equity_beta = 1.4\n    debt_to_equity_ratio = debt_ratio/(1 - debt_ratio)\n    asset_beta = equity_beta / (1 + ((1 - tax_rate)*debt_to_equity_ratio))\n    return asset_beta",
        "ground_truth": 0.709,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "164"
    },
    "165": {
        "tables": [],
        "question": "A retirement fund worth $100 million currently consists of 80% shares and 20% bonds. The beta of the shares section is 1.2, with the term of the bonds part being 5.0. How many stock index futures need to be purchased in order to shift the distribution to 60% shares and 40% bonds? Refer to the additional data: The value of the stock index stands at 1,200, the multiplier is $250, and the beta equals 0.95. The cost of a bond futures agreement is $105,300, which carries an underlying adjusted duration of 6.5.",
        "python_solution": "def solution():\n    current_value = 100000000\n    current_shares_value = 0.8 * current_value\n    target_shares_value = 0.6 * current_value\n    shares_value_to_be_shifted = current_shares_value - target_shares_value\n    beta_shares = 1.2\n    beta_stock_index = 0.95\n    stock_index_value = 1200\n    contract_price = 250\n    number_of_contracts = (0-beta_shares/beta_stock_index)*(shares_value_to_be_shifted/(stock_index_value * contract_price))\n    return int(number_of_contracts)",
        "ground_truth": -84.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "165"
    },
    "166": {
        "tables": [],
        "question": "Assuming a 30% marginal tax rate and an additional 5% risk premium for shares as opposed to bonds, what is the cost of equity using the bond-yield-plus-risk-premium method for a 20-year, $1,000 non-callable bond with 8% annual coupons that is presently valued at $1,105.94?",
        "python_solution": "def solution():\n    # Define constants\n    risk_premium = 5\n    yield_to_maturity = 7\n\n    # Calculate cost of equity\n    cost_of_equity = yield_to_maturity + risk_premium\n    return cost_of_equity",
        "ground_truth": 12.0,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "166"
    },
    "167": {
        "tables": [
            "|          | March 31, 20X7 Share Price | March 31, 20X7 Number of Shares Outstanding (thousands) | April 30, 20X7 Share Price | April 30, 20X7 Number of Shares Outstanding (thousands) |\n|----------|---------------------------|-----------------------------------------------------|----------------------------|--------------------------------------------------------|\n| Stock X  | $15                       | 100                                                 | $20                        | 100                                                    |\n| Stock Y  | $20                       | 1,000                                               | $30                        | 1,000                                                  |\n| Stock Z  | $30                       | 2,000                                               | $25                        | 2,000                                                  |"
        ],
        "question": "Compute the equal-weighted index value for these three shares, assuming the starting index value is 121.",
        "python_solution": "def solution():\n    starting_index = 121\n    shares = [(20/15-1), (30/20-1), (25/30-1)]\n    average_share = sum(shares) / len(shares)\n    new_index = starting_index * (1 + average_share)\n    return new_index",
        "ground_truth": 147.889,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "167"
    },
    "168": {
        "tables": [],
        "question": "Lillian, who is the portfolio manager for BC pension, has recently been considering the inclusion of QX Corp. (New York Stock Exchange:  QX) to her portfolio. After a thorough analysis of the company and its competitors, she is of the opinion that the company will witness exceptional growth for the next 4 years followed by normal growth. Therefore, she concludes that a two-stage DDM is the most suitable for assessing the stock's value. In 2017, the total dividends QX Corp. paid was $0.22. She anticipates a growth rate of 12 percent for the upcoming 4 years and 6 percent thereafter. The required return is projected to be 9 percent. What would be the terminal value of the stock according to this method?",
        "python_solution": "def solution():\n    D_0 = 0.22\n    g_short_term = 0.12\n    g_long_term = 0.06\n    r = 0.09\n    n = 4\n\n    D_n = D_0 * ((1 + g_short_term) ** n)\n    P_n = D_n * (1 + g_long_term) / (r - g_long_term)\n    \n    return P_n",
        "ground_truth": 12.231,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "168"
    },
    "169": {
        "tables": [],
        "question": "A bond is presently priced at 98.722 for every 100 of face value. If the yield-to-maturity (YTM) of this bond increases by 10 basis points, the complete price of the bond is forecasted to descend to 98.669. If the bond's YTM diminishes by 10 basis points, the total price of the bond is projected to ascend to 98.782. Can you determine the approximate convexity of this bond?",
        "python_solution": "def solution():\n    PV_minus = 98.782\n    PV_plus = 98.669\n    PV_0 = 98.722\n    delta_yield = 0.001\n    approx_convexity = (PV_minus + PV_plus - 2*PV_0) / (delta_yield**2 * PV_0)\n    return approx_convexity",
        "ground_truth": 70.906,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "169"
    },
    "170": {
        "tables": [],
        "question": "In light of the recent economic slump that negatively impacted the cyclical petrochemical industry, what would be the most fitting price-to-sales ratio for PetroChem Co, a publicly listed European petrochemical engineering company that Jacques is analyzing, if their net sales per share and current share price are $35 and $56 respectively?",
        "python_solution": "def solution():\n    net_sales_per_share = 35\n    current_share_price = 56\n    price_to_sales_ratio = current_share_price / net_sales_per_share\n    return price_to_sales_ratio",
        "ground_truth": 1.6,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "170"
    },
    "171": {
        "tables": [
            "|                   | Current Year | Previous Year |\n|-------------------|--------------|---------------|\n| Sales             | $12,000      | $10,000       |\n| Cost of goods sold| $9,000       | $7,500        |\n| Inventory         | $1,200       | $1,000        |\n| Accounts payable  | $600         | $600          |"
        ],
        "question": "Given the same data for a different business and assuming a 365-day year, what is the corporation's days of payables for the current year?",
        "python_solution": "def solution():\n    total_payables = 1000000  # assume\n    cost_of_goods_sold = 15324675  # assume\n\n    days_of_payables = (total_payables / cost_of_goods_sold) * 365\n    return days_of_payables",
        "ground_truth": 23.818,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "171"
    },
    "172": {
        "tables": [],
        "question": "What is the percent of contribution to VaR from Asset A in a portfolio, that comprises of two assets: A and B, where Asset A's value is $5,000,000 with a marginal VaR of 0.0452 and Asset B's value is $3,000,000 with a marginal VaR of 0.0332?",
        "python_solution": "def solution():\n    asset_A_value = 5000000\n    asset_B_value = 3000000\n    asset_A_MVaR = 0.0452\n    asset_B_MVaR = 0.0332\n    component_VaR_A = asset_A_value * asset_A_MVaR\n    component_VaR_B = asset_B_value * asset_B_MVaR\n    portfolio_VaR = component_VaR_A + component_VaR_B\n    percent_of_contribution_to_VaR_A = component_VaR_A / portfolio_VaR\n    return percent_of_contribution_to_VaR_A * 100",
        "ground_truth": 69.41,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "172"
    },
    "173": {
        "tables": [],
        "question": "An investment manager has a collection of options on XYZ, a stock that doesn't pay dividends. The collection consists of 5,000 deep in-the-money call options on XYZ and 20,000 deep out-of-the-money call options on XYZ. The portfolio also holds 10,000 future contracts on XYZ. Currently, XYZ is trading at USD 52. Given that there are 252 trading days annually, the volatility of XYZ is 12% per year, and each of the option and future contracts represents one share of XYZ, what is the 1-day 99% VaR of the portfolio?",
        "python_solution": "def solution():\n    position_delta = 1*5000 + 0*20000 + 1*10000\n    price_per_share = 52\n    volatility = 0.12\n    confidence_level = 2.326\n    trading_days = 252\n\n    var = confidence_level * price_per_share * position_delta * volatility * (1/trading_days)**0.5\n\n    return var",
        "ground_truth": 13714.668,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "173"
    },
    "174": {
        "tables": [],
        "question": "The defined contribution pension plan of Redwood Inc. has periodic contributions of $6 million, service costs of $0.8 million, and an actuarial gain of $2.5 million. What is the total of the pension expense?",
        "python_solution": "def solution():\n    contributions = 6\n    service_costs = 0.8\n    gain = 2.5\n    # In a defined contribution pension plan, the pension expense is equal to the contributions made by the company\n    pension_expense = contributions  \n    return pension_expense",
        "ground_truth": 6.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "174"
    },
    "175": {
        "tables": [
            "| Securities and Interest Rates | Expected Yield (%) |\n| --- | --- |\n| 10-yearUS Treasury securities | 3.8 |\n| Short-term real rate | 2 |\n| Long-term real rate | 2.3 |\n| 10-year AA corporate bond yield | 4.4 |\n\n| Type of Premium | Premium (%) |\n| --- | --- |\n| Inflation premium | 0.8 |\n| Illiquidity premium | 0.9 |\n| Equity risk premium | 8.4 |"
        ],
        "question": "In her role as an analyst for REDD, Xiaomei Zhu focuses on the consumer credit sector. Zhu and her team collected data in 2012 to ascertain the projected return for this sector, as depicted in Exhibit 1. After evaluating various strategies, Zhu and her team chose to apply the bond-yield-plus-risk-premium method. Considering the information in Exhibit 1 and the technique employed by Zhu's team, what was the predicted return for the consumer credit industry in 2012?",
        "python_solution": "def solution():\n    government_bond_yield = 3.8\n    equity_risk_premium = 8.4\n    expected_return = government_bond_yield + equity_risk_premium\n    return expected_return",
        "ground_truth": 12.2,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "175"
    },
    "176": {
        "tables": [
            "| Year | ROE   |\n|------|-------|\n| 2013 | 12.00%|\n| 2014 | 13.10%|\n| 2015 | 10.55%|\n| 2016 | 11.20%|\n| 2017 | 12.05%|"
        ],
        "question": "The small securities company's research department director, Brian, is in charge of a team that includes 2 junior analysts using the relative value approach to determine a company's worth. Brian informed the 2 junior analysts that using the earnings from the latest 4 quarters may not accurately reflect cyclical companies' long-term earning potential. Therefore, they may find significantly different P/E ratios even though the company's business outlook remains the same. Brian suggested using normalized EPS to solve this issue. Having gathered information about the company throughout the most recent complete cycle, the 2 junior analysts found that the company's balance sheet reveals total assets worth 2100 million and total liabilities of 1200 million. The value of the preferred equity is $120 million, and there are 32 million common shares outstanding. Given this information, what is the company's normalized EPS?",
        "python_solution": "def solution():\n    total_assets = 2100\n    total_liabilities = 1200\n    preferred_equity = 120\n    common_shares = 32\n    roe_values = [12.00, 13.10, 10.55, 11.20, 12.05]\n\n    average_roe = sum(roe_values) / len(roe_values)\n    total_shareholder_equity = total_assets - total_liabilities\n    common_equity_value = total_shareholder_equity - preferred_equity\n    bvps = common_equity_value / common_shares\n    normalized_eps = (average_roe / 100) * bvps\n\n    return normalized_eps",
        "ground_truth": 2.871,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "176"
    },
    "177": {
        "tables": [
            "| Trade # | Time     | Trade Price | Trade Size | Bid Price | Ask Price |\n|---------|----------|-------------|------------|-----------|-----------|\n| 1       | 9.45 a.m.| $25.20      | 1,200      | $25.17    | $25.20    |\n| 2       | 9.55 a.m.| $25.22      | 1,300      | $25.19    | $25.22    |\n| 3       | 11.30 a.m.| $25.27     | 2,500      | $25.22    | $25.26    |"
        ],
        "question": "Based on Exhibit 1, what is the average effective spread of the three trades when Smith talks about a market buy order for 5,000 shares of a thinly traded stock?",
        "python_solution": "def solution():\n    # trades prices\n    trade_prices = [25.20, 25.22, 25.27]\n    # bid and ask prices for each trade\n    bid_ask_prices = [(25.20, 25.17), (25.22, 25.19), (25.26, 25.22)]\n    \n    # calculate the effective spread for each trade\n    effective_spreads = [2 * (trade_price - ((ask + bid) / 2)) for trade_price, (ask, bid) in zip(trade_prices, bid_ask_prices)]\n    \n    # calculate the average effective spread\n    average_effective_spread = sum(effective_spreads) / len(effective_spreads)\n    \n    return average_effective_spread",
        "ground_truth": 0.04,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "177"
    },
    "178": {
        "tables": [],
        "question": "If a two-year fixed-for-floating MRR swap is at 1.00%, and the yield of the two-year US Treasury bond is 0.63%, what would be the swap spread?",
        "python_solution": "def solution():\n    mrr_swap = 1.00\n    treasury_yield = 0.63\n    swap_spread = mrr_swap - treasury_yield\n    return swap_spread",
        "ground_truth": 0.37,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "178"
    },
    "179": {
        "tables": [
            "| Current risk-free rate | 3.00% |\n|------------------------|-------|\n| Beta of the T REIT     | 1.1   |\n| Market risk premium    | 5.00% |\n| Expected dividend per share, 1 year from today | $1.13 |\n| Expected dividend per share, 2 years from today| $1.22 |\n| Long-term growth rate in dividends, starting in year 3 | 5.00% |"
        ],
        "question": "An expert has compiled the major forecasts and assumptions for a J REIT. What is the inherent worth of the J REIT per share utilizing the two-step dividend discount model?",
        "python_solution": "def solution():\n    discount_rate = 0.085\n    dividend_y1 = 1.13\n    dividend_y2 = 1.22\n    growth_rate = 0.05\n\n    stock_price = (dividend_y1 / (1+discount_rate)) + (dividend_y2 / ((1+discount_rate)**2)) + ((dividend_y2*(1+growth_rate))/(discount_rate-growth_rate))/((1+discount_rate)**2)\n    return stock_price",
        "ground_truth": 33.168,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "179"
    },
    "180": {
        "tables": [
            "| Sentence # | Actual Sentiment | Target p-Value |\n|------------|------------------|----------------|\n| 1          | 1                | 0.75           |\n| 2          | 0                | 0.45           |\n| 3          | 1                | 0.64           |\n| 4          | 1                | 0.81           |\n| 5          | 0                | 0.43           |\n| 6          | 1                | 0.78           |\n| 7          | 0                | 0.59           |\n| 8          | 1                | 0.60           |\n| 9          | 0                | 0.67           |\n| 10         | 0                | 0.54           |"
        ],
        "question": "Azarov has requested Bector to implement the ML model on the test dataset for Dataset XYZ, considering a threshold p-value of 0.65. Exhibit 1 includes a specimen of outcomes from the test dataset corpus. Given the data in Exhibit 1, what is the accuracy computation for the test set sample of Dataset XYZ?",
        "python_solution": "def solution():\n    TP = 3\n    TN = 4\n    FP = 1\n    FN = 2\n    accuracy = (TP + TN)/(TP + FP + TN + FN)\n    return accuracy",
        "ground_truth": 0.7,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "180"
    },
    "181": {
        "tables": [],
        "question": "The collection of investments includes two zero-coupon bonds, each priced at $10. The initial bond possesses a modified duration of a year, while the second bond carries a modified duration of nine years. With an even yield curve and a consistent yield of 5%, all alterations of the yield curve result in equal shifts. Given that the daily instability of the yield equals 1%, can you best estimate the daily value at risk (VAR) for the collection of investments at the 95% certainty level?",
        "python_solution": "def solution():\n    dollar_duration = 1*10 + 9*10\n    daily_var = dollar_duration * 0.01 * 1.65\n    return daily_var",
        "ground_truth": 1.65,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "181"
    },
    "182": {
        "tables": [],
        "question": "For an investment of USD100 that produces after-tax cash flows of USD40 in the first year, USD80 in the second year, and USD120 in the third year, given a required rate of return of 20%, what would be the Net Present Value?",
        "python_solution": "def solution():\n    cash_flows = [-100, 40, 80, 120]\n    rate_of_return = 0.20\n    NPV = 0\n    for t in range(len(cash_flows)):\n        NPV += cash_flows[t] / ((1+rate_of_return) ** t)\n    return NPV",
        "ground_truth": 58.333,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "182"
    },
    "183": {
        "tables": [
            "| | |\n|---|---|\n|Face value|\u00a350 million|\n|Coupon rate, paid annually|4%|\n|Time to maturity|10 years (31 December 2033)|\n|Issue price (per \u00a3100)|\u00a392.28|"
        ],
        "question": "If a corporation issues a bond with specific features on January 1, 2014, and the market interest rate for its bonds stands at 5%, what would be its interest cost ( in millions) for the year 2014 under International Financial Reporting Standards (IFRS)?",
        "python_solution": "def solution():\n    liability_value = 0.9228 * 50\n    market_rate = 0.05\n    interest_expense = liability_value * market_rate\n    return interest_expense",
        "ground_truth": 2.307,
        "topic": "Accounting",
        "split": "development",
        "p_id": "183"
    },
    "184": {
        "tables": [],
        "question": "At present, James has $750,000 in cash and short-term investment. He then consults with his portfolio manager Simmons regarding his investment holdings. As per the assessment, James' human capital is estimated at $1.2 million, out of which 30% appears to be similar to equity. Simmons concludes that a total target allocation of 45% equity is suitable for James. To reach the desired equity allocation for total economic wealth, what should be the financial capital equity allocation for James?",
        "python_solution": "def solution():\n    human_capital = 1200000\n    financial_capital = 750000\n    target_equity_allocation = 0.45\n\n    total_economic_wealth = human_capital + financial_capital\n    target_equity_allocation_value = total_economic_wealth * target_equity_allocation\n    human_capital_equity_allocation = human_capital * 0.30\n    financial_capital_equity_allocation = target_equity_allocation_value - human_capital_equity_allocation\n    financial_capital_equity_allocation_percentage = financial_capital_equity_allocation / financial_capital\n    \n    return financial_capital_equity_allocation_percentage * 100",
        "ground_truth": 69.0,
        "topic": "Accounting",
        "split": "development",
        "p_id": "184"
    },
    "185": {
        "tables": [],
        "question": "Because of considerable growth prospects, Firm B has put a halt to its dividends for the earliest four years. The executives assert that during the fifth year, they will distribute a dividend of $2.5 for each share. After that, the dividend is predicted to expand at a 5% annual rate indefinitely. A 12% return rate is needed. What is the intrinsic value of Firm B's stock?",
        "python_solution": "def solution():\n    D5 = 2.5\n    r = 0.12\n    g = 0.05\n\n    P4 = D5 / (r - g)\n    V0 = P4 / (1 + r)**4\n\n    return V0",
        "ground_truth": 22.697,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "185"
    },
    "186": {
        "tables": [],
        "question": "If ABC Corporation releases three-year bonds dated 1 January 2015 that have a face value of $5,000,000, how are they most likely reported as bonds payable when issued, considering the market interest rate for bonds of similar risk and term is 3% and the bonds yield an annual rate of 2.5% on 31 December?",
        "python_solution": "def solution():\n    FV = 5000000 # Face Value of Bond\n    I_M = 0.03 # Market Interest Rate\n    I_B = 0.025 # Bond Yield Rate\n    N = 3 # Period of Bond in Years\n    PMT = FV * I_B # Annual Payments\n    PV = 0 # Present Value of Bond\n    \n    # Compute for Present value\n    for i in range(1, N+1):\n        PV += PMT/(1+I_M)**i # Compute Present Value based on Discount Factor Formula\n    PV += FV/(1+I_M)**N # Add the Face Value discounted back to today at Market Rate\n    \n    return PV",
        "ground_truth": 4929284.716,
        "topic": "Accounting",
        "split": "development",
        "p_id": "186"
    },
    "187": {
        "tables": [],
        "question": "A financial expert is requested to calculate the VaR for a stake in Mega Healthcare Solutions Ltd. The firm's shares go for USD 26.00, with a daily volatility standing at 1.5%. Utilizing the delta-normal approach, what is the VaR at the 95% confidence level for a long position in an at-the-money put on this share with a delta of -0.5 spanning a 1-day holding period?",
        "python_solution": "def solution():\n    delta = 0.5\n    z_score = 1.645\n    volatility = 0.015\n    share_price = 26.0\n\n    Var = abs(delta) * z_score * volatility * share_price\n    return Var",
        "ground_truth": 0.321,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "187"
    },
    "188": {
        "tables": [
            "| Year | Return(%) |\n|------|----------|\n| 2009 | 20       |\n| 2010 | -30      |\n| 2011 | 15       |"
        ],
        "question": "What is the yearly geometric mean return of this investment over a three-year period?",
        "python_solution": "def solution():\n    return ((1 + 0.2) * (1 - 0.3) * (1 + 0.15))**(1/3) - 1",
        "ground_truth": -0.011,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "188"
    },
    "189": {
        "tables": [],
        "question": "Can you determine the expected return on a stock using the Capital Asset Pricing Model, with a beta value of 0.6, given a risk-free rate of 8%, and a market return of 15%?",
        "python_solution": "def solution():\n    Rf = 8\n    Beta = 0.6\n    Market_return = 15\n    expected_return = Rf + Beta * (Market_return - Rf)\n    return expected_return",
        "ground_truth": 12.2,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "189"
    },
    "190": {
        "tables": [],
        "question": "Assuming the neutral real policy rate is set at 2.25%, the desired inflation rate is 2%, and projected growth is approximately 2.5%. If growth is predicted to be 3.5% and inflation is anticipated to reach 3%, what would be the nominal policy rate based on the Taylor rule?",
        "python_solution": "def solution():\n    neutral_real_policy_rate = 2.25\n    desired_inflation_rate = 2\n    projected_growth = 2.5\n    predicted_growth = 3.5\n    anticipated_inflation = 3\n\n    nominal_policy_rate = neutral_real_policy_rate + anticipated_inflation + 0.5 * (predicted_growth - projected_growth) + 0.5 * (anticipated_inflation - desired_inflation_rate)\n\n    return nominal_policy_rate",
        "ground_truth": 6.25,
        "topic": "Market Analysis & Economics",
        "split": "development",
        "p_id": "190"
    },
    "191": {
        "tables": [
            "| Expected inflation | 1.9% |\n|---|---|\n| Expected growth in the P/E | -1.2% |\n| Expected income component | 1.8% |\n| Expected growth in real earnings per share | 2.7% |\n| Expected change in shares outstanding | 0.0% |\n| Current three-month government bond yield | 0.96% |\n| Long-term geometric average return of market equity index | 9.96% |\n| Long-term geometric average return of short-term government bond | 3.15% |"
        ],
        "question": "What is the forecaster's projected forward-looking ERP for a market using the Grinold-Kroner model based on the same details?",
        "python_solution": "def solution():\n    ERP = (1.8 - 1.2 + (1.9 + 2.7 + 0.0)) - 0.96\n    ERP_percentage = ERP * 100\n    return ERP_percentage",
        "ground_truth": 424.0,
        "topic": "Corporate & Securities Issuance",
        "split": "development",
        "p_id": "191"
    },
    "192": {
        "tables": [
            "|        |             | Actual Training   |           |\n|--------|-------------|:-----------------:|----------:|\n|        |             | Results           |           |\n|        |             | Class \"1\"         | Class \"0\" |\n| Predicted Results | Class \"1\" | TP=182           | FP=52     |\n|                    | Class \"0\" | FN=31            | TN=96     |"
        ],
        "question": "Once happy with the ultimate set of attributes, Williams chooses and operates a model on the training set that categorizes the text as either having positive sentiment (Class \u201c1\u201d or negative sentiment (Class \u201c0\u201d). He then appraises its performance by implementing error analysis. Based on Exhibit 1, what is the accuracy metric of the model in the ensuing confusion matrix?",
        "python_solution": "def solution():\n    TP = 182\n    TN = 96\n    FP = 52\n    FN = 31\n\n    Accuracy = (TP + TN) / (TP + FP + TN + FN)\n    return Accuracy * 100",
        "ground_truth": 77.008,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "192"
    },
    "193": {
        "tables": [],
        "question": "In a sports competition involving 15 participants, prizes of $100, $50, and $10 will be given to the top performers. In how many different ways can this be done?",
        "python_solution": "def solution():\n    import math\n    return math.factorial(15)/(math.factorial(15-3))",
        "ground_truth": 2730.0,
        "topic": "Quantitative Analysis & Valuation",
        "split": "development",
        "p_id": "193"
    },
    "194": {
        "tables": [],
        "question": "Assuming that a broker holds an option stance in crude oil exhibiting a delta of 100000 barrels and a gamma of -50000 barrels per dollar price shift, compute the VaR for this stance utilizing the delta-gamma approach, under the presumption that the maximum crude oil price shift is $2.00 per barrel.",
        "python_solution": "def solution():\n    Delta = 100000\n    Gamma = -50000\n    VAR_ds = 2\n\n    VAR_df = Delta * -VAR_ds + (1 / 2) * Gamma * VAR_ds ** 2\n    return VAR_df",
        "ground_truth": -300000.0,
        "topic": "Risk Management",
        "split": "development",
        "p_id": "194"
    },
    "195": {
        "tables": [],
        "question": "If a stock's present cost is $25 each, you plan to invest your $10,000 and also loan an additional $10,000 from your financial adviser to put $20,000 in the shares. If the preservation margin is 30 percent, what would be the initial price that will trigger a margin call?",
        "python_solution": "def solution():\n    initial_stock_price = 25\n    initial_equity = initial_stock_price * 0.5\n    preservation_margin = 0.30\n    P = initial_equity / (1 - preservation_margin)\n    return P",
        "ground_truth": 17.857,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "195"
    },
    "196": {
        "tables": [],
        "question": "What is the overall fee that Circle has garnered in the current year, considering $288 million in assets under management (AUM) from the end of the previous year, a 2% management fee (based on year-end AUM), a 20% incentive fee calculated after subtracting the management fee using a 5% soft hurdle rate and a high-water mark of $357 million, and the fund yield for the current year being 25%?",
        "python_solution": "def solution():\n    prior_year_end_AUM = 288\n    fund_return = 0.25\n    management_fee_percentage = 2/100\n    \n    end_of_year_AUM = prior_year_end_AUM * (1 + fund_return)\n    management_fee = end_of_year_AUM * management_fee_percentage\n    \n    return management_fee",
        "ground_truth": 7.2,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "196"
    },
    "197": {
        "tables": [],
        "question": "Imagine a portfolio that contains two components. The first component, Component X, makes up 25% of the portfolio and possesses a standard deviation of 17.9%. The second component, Component Y, makes up the rest of the portfolio at 75% and has a standard deviation of 6.2%. If the correlation between these two components is 0.5, what would the portfolio's standard deviation be?",
        "python_solution": "def solution():\n    import math\n    weight_X = 0.25\n    weight_Y = 0.75\n    standard_deviation_X = 0.179\n    standard_deviation_Y = 0.062\n    correlation_XY = 0.5\n\n    portfolio_variance = (weight_X**2 * standard_deviation_X**2) + (weight_Y**2 * standard_deviation_Y**2) + (2 * weight_X * weight_Y * correlation_XY * standard_deviation_X * standard_deviation_Y)\n    portfolio_standard_deviation = math.sqrt(portfolio_variance)\n\n    return portfolio_standard_deviation*100",
        "ground_truth": 7.903,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "197"
    },
    "198": {
        "tables": [],
        "question": "If an investment company starts the year with a value of $160 million and follows a \"2 and 20\" fee scheme, the management fee depends on the end-of-year asset value. With a soft hurdle rate of 10% net of management fee for calculating the incentive fee, and a prior high-water mark of $198 million, how much is the total fees collected if the assets increase by 25% in the coming year?",
        "python_solution": "def solution():\n    initial_aum = 160\n    growth_rate = 0.25\n    management_fee_rate = 0.02\n    soft_hurdle_rate = 0.10\n    high_water_mark = 198\n    \n    end_year_aum = initial_aum * (1 + growth_rate)\n    \n    management_fee = end_year_aum * management_fee_rate\n    \n    net_year_end = end_year_aum - management_fee\n    \n    if net_year_end < high_water_mark:\n        total_fees = management_fee\n\n    return total_fees",
        "ground_truth": 4.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "198"
    },
    "199": {
        "tables": [
            "|     | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Year 6 |\n| --- | ---    | ---    | ---    | ---    | ---    | ---    |\n| NOI  | $2,775,840 | $2,859,119 | $2,944,889 | $3,033,235 | $3,124,232 | $3,217,959 |\n| DCF Assumptions |    |   |   |   |    |    |\n| Investment Hold Period |    |   | 5 years |   |    |    |\n| Going-in Cap Rate |     |   |  5.25% |   |    |    |\n| Terminal Cap Rate |    |   |  6.00% |   |    |    |\n| Discount Rate |     |   |  7.25% |   |    |    |\n| Income/Value Growth |    |   |  Constant |   |    |    |\n| Rate |     |   |   |   |    |    |"
        ],
        "question": "What is the growth rate of Real Estate #1, according to Exhibit 1?",
        "python_solution": "def solution():\n    discount_rate = 7.25\n    going_in_cap_rate = 5.25\n    growth_rate = discount_rate - going_in_cap_rate\n    return growth_rate",
        "ground_truth": 2.0,
        "topic": "Asset Classes & Derivatives",
        "split": "development",
        "p_id": "199"
    },
    "200": {
        "tables": [],
        "question": "Compute the standard deviation of the investment portfolio using the following figures: the percentage weight of asset X is 30%, the weight of asset Y is 70%, the standard deviation for asset X is 25%, that for asset Y is 10%, and their correlation coefficient is 0.8.",
        "python_solution": "def solution():\n    weight_X = 0.30\n    standard_deviation_X = 0.25\n    weight_Y = 0.70\n    standard_deviation_Y = 0.10\n    correlation_coefficient = 0.8\n\n    variance = weight_X**2 * standard_deviation_X**2 + weight_Y**2 * standard_deviation_Y**2 + 2 * weight_X * weight_Y * standard_deviation_X * standard_deviation_Y * correlation_coefficient\n\n    return variance**0.5",
        "ground_truth": 0.138,
        "topic": "Portfolio Management & Strategy",
        "split": "development",
        "p_id": "200"
    },
    "201": {
        "tables": [
            "| Asset Class    | Geometric Return(%) |\n| -------------- | ------------------- |\n| Equities       | 8.0                 |\n| Corporate Bonds| 6.5                 |\n| Treasury bills | 2.5                 |\n| Inflation      | 2.1                 |"
        ],
        "question": "What historical geometric real rate of return for corporate bonds does a researcher identify?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "201"
    },
    "202": {
        "tables": [
            "| Period | Years | Forward Rate |\n|--------|-------|--------------|\n| 1      | 0.5   | 1.20%        |\n| 2      | 1     | 1.80%        |\n| 3      | 1.5   | 2.30%        |\n| 4      | 2     | 2.70%        |\n| 5      | 2.5   | 3.00%        |"
        ],
        "question": "With the given US Treasury forward rates, what's the value of a 2.5-year $100 face value Treasury bond with a 5% interest rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "202"
    },
    "203": {
        "tables": [],
        "question": "Assuming U.S. GAAP is in effect unless stated otherwise, imagine a highly profitable company, Alpha Enterprises, acquired a new asset for $1,000,000 on January 1, 2002. How does the asset acquisition impact Alpha Enterprises' deferred tax liability for 2002 given the following conditions for the asset: for financial statements purposes, straight-line depreciation over 10 years with no salvage value; for tax purposes, the asset is classified under three-year MACRS depreciation with the first year MACRS factor being 0.333, and the tax rate stands at 40%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "203"
    },
    "204": {
        "tables": [],
        "question": "If the average P/E of 30 shares in a particular manufacturing sector is 18 and the sample standard deviation is 3.5, what is the standard error of the mean closest to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "204"
    },
    "205": {
        "tables": [],
        "question": "Suppose there are two stocks, X and Y. If their annual returns are jointly normally distributed, the marginal distribution of each stock has a mean of 2% and a standard deviation of 10%, and the correlation is 0.9, can you tell me the expected annual return of stock X if the annual return of stock Y is 3%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "205"
    },
    "206": {
        "tables": [
            "| Balances as of year ended 31 December | 2004 | 2005 |\n| ------------------------------------- | ---- | ---- |\n| Retained earnings                     | 120  | 145  |\n| Accounts receivable                   | 38   | 43   |\n| Inventory                             | 45   | 48   |\n| Accounts payable                      | 36   | 29   |"
        ],
        "question": "Let's consider that U.S. GAAP is applicable unless stated differently. A research analyst has collected this data from a corporation's financial statements for the year 2005 (in millions of dollars): The firm announced and distributed cash dividends worth $10 million in 2005 and accounted for a depreciation cost of $25 million for the same year. What was the corporation's cash flow from operations, in millions, for 2005?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "206"
    },
    "207": {
        "tables": [],
        "question": "In early 2009, Steel Production procured a new assembly line equipment for $600,000. The equipment is anticipated to have a useful life of 10 years and an estimated salvage value of $50,000. What amount of depreciation would Steel Production record in 2009 for financial statements using the double-declining balance method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "207"
    },
    "208": {
        "tables": [
            "| ASSETS                         |         | Company A | Company B | Sector Average |\n|--------------------------------|---------|-----------|-----------|----------------|\n| Current assets                 |         |           |           |                |\n| Cash and cash equivalents      |         | 5         | 7         |                |\n| Marketable securities          |         | 0         | 2         |                |\n| Accounts receivable, net       |         | 15        | 12        |                |\n| Inventories                    |         | 20        | 16        |                |\n| Prepaid expenses               |         | 15        | 11        |                |\n| Total current assets           |         | 55        | 48        |                |\n| Property, plant, and equipment | net     | 35        | 37        |                |\n| Goodwill                       |         | 0         | 8         |                |\n| Other assets                   |         | 10        | 7         |                |\n| Total assets                   | 100     | 100       | 100       | 100            |\n|--------------------------------|---------|-----------|-----------|----------------|\n| LIABILITIES AND SHAREHOLDERS' EQUITY | | | | |\n| Current liabilities                 |   | | | |\n| Accounts payable                    |   | 10 | 10 | 10 |\n| Short-term debt                     |   | 25 | 10 | 15 |\n| Accrued expenses                    |   | 5  | 3  |    |\n| Total current liabilities           |   | 35 | 25 | 28 |\n| Long-term debt                      |   | 45 | 20 | 28 |\n| Other non-current liabilities       |   | 0  | 10 | 7  |\n| Total liabilities                   |   | 80 | 55 | 63 |\n| Total shareholders' equity          |   | 20 | 45 | 37 |\n| Total liabilities and shareholders' equity | | 100 | 100 | 100 |"
        ],
        "question": "What is the quick ratio for Company B as per the common-size balance sheets displayed in Exhibit 1 for Company A, Company B, and the Sector Average?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "208"
    },
    "209": {
        "tables": [],
        "question": "At the start of the year, the portfolio of Frontier Investment Group, a hedge fund, was valued at $475,000,000. A year later, the value of assets under management has grown to $541,500,000. The hedge fund imposes a 1.5% management fee based on the portfolio value at the end of the year and a 10% incentive fee. If these two fees are calculated separately, what would be the effective return for an investor in this hedge fund?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "209"
    },
    "210": {
        "tables": [],
        "question": "What does an analyst project as the expected return on equity for a corporation using the Bond yield plus risk premium approach, given a yield on the corporation's bonds at 4.3% and a 6.1% historical risk premium obtained by equity investors compared to long-term corporate bond yields?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "210"
    },
    "211": {
        "tables": [
            "|         | RDI=30% | RDI=25% | RDI=15% |\n|---------|---------|---------|---------|\n| RFI=25% | 0.25    |         |         |\n| RFI=15% |         | 0.5     |         |\n| RFI=10% |         |         | 0.25    |"
        ],
        "question": "A specialist generates the subsequent joint probability function for an international index (FI) and a local index (DI). What is the covariance of returns on the international index and the returns on the local index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "211"
    },
    "212": {
        "tables": [
            "| Cost of the equipment | UYP 1,200,000       |\n|----------------------|---------------------|\n| Estimated residual value | UYP 200,000      |\n| Expected useful life | 8 years             |\n| Total productive capacity| 800,000 units    |\n| Production in FY 2009 | 135,000 units      | \n| Expected production for the next 7 years | 95,000 units each |"
        ],
        "question": "If MARIO S.A., a corporation based in Uruguay, uses the straight-line method, then how much is the depreciation expense on their income statement related to the manufacturing equipment, considering that Carlos Lopez from the company is calculating it for the fiscal year ended 31 December 2009? The equipment was obtained on 1 January 2009, and Lopez has gathered the following data (currency in Uruguayan pesos, UYP).",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "212"
    },
    "213": {
        "tables": [
            "|                                      |            |\n|--------------------------------------|------------|\n| **Wood Balance Sheet 2017**          |            |\n| **Assets**                           |            |\n| Cash                                 | $650,000   |\n| Inventory                            | 27,000     |\n| Accounts receivable                  | 25,000     |\n| Plant and equipment (cost less depreciation) | 300,000 |\n| TimberLand                           | 8,086,000  |\n| **Total assets**                     | $9,088,000 |\n| Accounts payables                    | $ 88,000   |\n| Long-term bank loan                  | 2,500,000  |\n| Common stock                         | 6,500,000  |\n| **Total liabilities and equity**     | $9,088,000 |\n| TimberLand (market value)            | 50,000,000 |"
        ],
        "question": "Using the balance sheet as of 31 December 2017, Pierre thinks that an asset-based assessment is suitable for Oak. Based on the extra presumption that other assets and liabilities on the balance sheet, what is the asset-based valuation of Oak?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "213"
    },
    "214": {
        "tables": [
            "| End of Year | Call Price |\n|-------------|------------|\n| 3           | 102        |\n| 4           | 101        |\n| 5           | 100        |"
        ],
        "question": "A bond that has 5 years left until it matures is presently being traded for 101 for every 100 of par value. It provides a coupon rate of 6%, with interest being paid every six months. Considering that the bond can be first called in 3 years, and can be called following that date on interest payment dates per the provided schedule, what is the bond's yearly yield-to-first-call?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "214"
    },
    "215": {
        "tables": [],
        "question": "If Corporation A disclosed a salary expenditure of $30 million and wage payable rose by $2 million, how much money was actually disbursed to workers?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "215"
    },
    "216": {
        "tables": [],
        "question": "Peterson Energy Inc, a US-based, publicly traded energy firm, recently stated its plans to acquire Heartland Energy Inc, a smaller energy company based in the US. The offer from Peterson values Heartland at an enterprise worth of USD40.6 billion, which includes USD4.3 billion of existing Heartland debt. In order to finance the consideration of USD55 in cash along with 2.25 Peterson shares for each Heartland share, Peterson intends to issue 104 million new shares and will raise approximately USD26 billion in new debt, with the remaining being funded by cash on hand. Once the deal has closed, Peterson anticipates having an outstanding debt of nearly USD62 billion. Before the acquisition, Peterson had 1.096 billion shares in circulation, each trading at USD125. With the assumption of a constant share price and the book value of debt being equal to its market value, Jackson plans to ascertain the change in the proportions of debt and equity in Peterson\u2019s capital structure following",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "216"
    },
    "217": {
        "tables": [
            "| 1 Year | 3 Years | 5 Years | Since Inception |\n|--------|---------|---------|-----------------|\n| 5.3%   | 6.2%    | 4.7%    | 4.4%            |"
        ],
        "question": "Given the performance metrics for a different investment option: Let's assume that the highest drawdown risk remains constant at 10.2% for every time interval. Also, suppose that the mean drawdown risk is unchanging at 6.8% for every time interval. Based on the data given, compute the Calmar ratio in the usual manner. What is the resulting Calmar ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "217"
    },
    "218": {
        "tables": [
            "| Returns | RB=50% | RB=20% | RB=-30% |\n|---------|--------|--------|---------|\n| RA=-10% | 0.4    | 0      | 0       |\n| RA=10%  | 0      | 0.3    | 0       |\n| RA=30%  | 0      | 0      | 0.3     |"
        ],
        "question": "Given the above probability matrix, what is the covariance of returns on Portfolio X and Portfolio Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "218"
    },
    "219": {
        "tables": [],
        "question": "If Fairfield Inc. intends to borrow sufficient funds to buy back 100,000 stocks, what would be Fairfield\u2019s earnings per share following the repurchase, with the following data related to the share buyback: Shares outstanding before buyback 3.1 million, Earnings per share before buyback US$4.00, Share price at the time of buyback US$50, and After-tax cost of borrowing 6%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "219"
    },
    "220": {
        "tables": [
            "|      | Adesivo | Enviado | Gesticular |\n|------|---------|---------|------------|\n| Stock's current price | 14.72 | 72.20 | 132.16 |\n| Diluted EPS (last four quarters) | 0.81 | 2.92 | -0.05 |\n| Diluted EPS (next four quarters) | 0.91 | 3.10 | 2.85 |\n| Dividend rate (annualized most recent dividend) | 0.44 | 1.24 | 0.00 |"
        ],
        "question": "Pinho instructs Martins to utilize a valuation metric to facilitate a comprehensive evaluation of the relative share value of the three corporations. The essential financial data for these businesses are shown in Exhibit 1. For Adesivo, Martins examines the base trailing EPS. With a basic trailing EPS of R$0.84, he found a note in the financial reports of Adesivo stating that\u201cOn a per share basis, Adesivo incurred in the last four quartersi. from a lawsuit, a non-recurring gain of R$0.04; andii. Based on Exhibit 1 and Adesivo\u2019s financial reports, what is the trailing P/E for Adesivo using the base EPS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "220"
    },
    "221": {
        "tables": [],
        "question": "An investor bought 200 stocks of a company that doesn't pay dividends on margin for a price of $50 each. The leverage ratio stands at 2.5. Half a year later, the investor offloads these stocks at $60 apiece. Disregarding the interest accrued on the borrowed sum and the transaction costs, what was the investor's return over the half-year period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "221"
    },
    "222": {
        "tables": [
            "|   |   |\n|---|---|\n| BVPS  | $28.25  |\n| ROE  | 14.5%  |\n| Constant long-term growth  | 5.5%  |\n| Cost of equity  | 10.9%  |"
        ],
        "question": "John is assessing the value of Corporation Z using the single-stage residual income model and has compiled pertinent data in the listed table. What is the justified price-to-book ratio for Corporation Z?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "222"
    },
    "223": {
        "tables": [],
        "question": "An employee at a capital management firm, Jonathan, is given the task to determine the gain in 6 months on a transaction of $2,000,000 vega notional of a one-year variance swap on the S&P 500 at a 20% strike (expressed as annual volatility). After a period of six months, the S&P 500 shows a realized volatility of 16%, while the fair strike of a fresh 6-month variance swap on the S&P 500 is now 18%. The yearly interest rate is 2.00%. What is the updated value of the variance swap?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "223"
    },
    "224": {
        "tables": [],
        "question": "If a four-factor market model is being used for the return process of 100 companies, then what is the number of parameters that need to be estimated?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "224"
    },
    "225": {
        "tables": [],
        "question": "A significant purchase has just been declared, aiming at corporation Y. The proposal from corporation X features an exchange offer with a ratio of 2. Directly following the declaration, corporation X and Y's prices are at $50 and $90, respectively. A hedge fund opts to take a long position in corporation Y, hedged with shares from X. Following the completion of the acquisition, the prices shift to $60 and $120. Therefore, the profit for each share from corporation Y is",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "225"
    },
    "226": {
        "tables": [],
        "question": "Presuming the exercise price of a share option is $50, if the share undergoes a 2-to-1 split, what would be the fresh exercise price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "226"
    },
    "227": {
        "tables": [],
        "question": "In 2016, Firm B had 10,000 shares and 1,000 outstanding warrants with an exercise price of $20/share. The average stock price was $25 over the course of that year. What was the net shares issued when computing the EPS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "227"
    },
    "228": {
        "tables": [
            "| Year | Investment | Return |\n|------|------------|--------|\n| 1    | $500       | 12%    |\n| 2    | $600       | 5%     |\n| 3    | $1000      | 1%     |"
        ],
        "question": "The fund overseen by John displays the following returns in year1,2,3: What will be the time-weighted rate of return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "228"
    },
    "229": {
        "tables": [],
        "question": "On today's date, 5 June 2013, a semi-annual bond lasting three years that comes with a coupon rate of 6% just issued its initial coupon payment. The face value stands at 100. The due dates for interest payments are the 5th of April and the 5th of October. The bond's yield-to-maturity is equal to 5%. If the count convention is based on 30/360, figure out the accrued interest on this bond as of 5 June 2013.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "229"
    },
    "230": {
        "tables": [],
        "question": "In 2009, Steel Production acquired a new machine for its production line at an expense of $600,000. The machine is expected to be useful for 10 years and has an approximate residual value of $50,000. Using the straight-line method, what amount of depreciation should Steel report in 2010 for financial accounting?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "230"
    },
    "231": {
        "tables": [
            "| Asset | Annual Return | Volatility of Annual Return | Value |\n|-------|---------------|-----------------------------|-------|\n| A     | 10%           | 25%                         | 100   |\n| B     | 20%           | 20%                         | 50    |"
        ],
        "question": "Assuming there are 250 trading days in a year, how would the daily VaR at 99% level change if the financial institution sells $50 worth of asset A and purchases $50 worth of asset B, given that the institution's trading portfolio includes two assets with a Correlation (A, B) = 0.2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "231"
    },
    "232": {
        "tables": [
            "|Maturity(years)|STRIPS Price|Spot Rate|Forward Rate|\n|---|---|---|---|\n|0.5|98.7654|2.50%|2.50%|\n|1.0|97.0662|3.00%|3.50%|\n|1.5|95.2652|3.26%|3.78%|\n|2.0|93.2775|?.??%|?.??%|"
        ],
        "question": "According to the chart, what is the worth of a 1.5-year, 6% semiannual coupon, $100 face value bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "232"
    },
    "233": {
        "tables": [],
        "question": "The hedge fund known as Sovereign Wealth starts out with an initial capital of $300 million. They levy a 1% management fee anchored on year-end asset value and a 20% incentive fee that applies when returns surpass an 8% hurdle rate. Considering that Sovereign Wealth's first-year appreciation rate stands at 10% and its management fees are predicated on valuation at period's end, what will be the net return for the investor, provided the performance fee is computed after subtracting the management fee?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "233"
    },
    "234": {
        "tables": [
            "| Asset class | Portfolio Weight(%) | Benchmark Weight(%) | Portfolio Return(%) | Benchmark Return(%) |\n| ----------- | ------------------ | ------------------- | ------------------- | ------------------ |\n| Domestic equities | 55 | 40 | 10 | 8 |\n| International equities | 20 | 30 | 10 | 9 |\n| Bonds | 25 | 30 | 5 | 6 |"
        ],
        "question": "Taking into account the asset class returns for the 2016 financial year, what is the value added or active return for the supervised investment portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "234"
    },
    "235": {
        "tables": [
            "| Exhibit 4.Arch way's 2015 Forecasted Price and Volume Changes ||\n| --- | --- |\n| Average price increase per unit | 5.00% |\n| Volume growth | -3.00% |"
        ],
        "question": "French indicates that for the recently concluded year (2014), the cost of goods sold by Bridgeport was 30% of sales. When projecting Bridgeport's income statement for 2015, French assumes that all firms in the industry will encounter an inflation rate of 8% on the cost of goods sold. Exhibit 4 presents French\u2019s predictions about Bridgeport\u2019s price and volume variations. According to Exhibit 4, what is Bridgeport\u2019s anticipated gross profit margin for 2015?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "235"
    },
    "236": {
        "tables": [],
        "question": "Assuming a periodic inventory system, what was the cost of sales in 2008 (\u20ac thousands) for Nutmeg Enterprises, which launched in 2007 and employs the weighted average cost method? During its first year, the company bought 45,000 units of inventory for \u20ac10 each and sold 40,000 units for \u20ac20 each. The following year, it acquired an additional 50,000 units at \u20ac11 each and sold 45,000 units for \u20ac22 each.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "236"
    },
    "237": {
        "tables": [],
        "question": "If a security is valued at 88.692 per 100 of par value, and the security's complete price decreases to 88.642 if the yield-to-maturity rises by 10 basis points and increases to 88.762 if the yield-to-maturity is reduced by 10 basis points, what is the approximate convexity of the security?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "237"
    },
    "238": {
        "tables": [],
        "question": "At the start of 2013, company N released bonds with a face value of $2,000,000 that would mature in 5 years. With the market interest rate being 7%, the bonds will provide an 8% coupon payment every 31st December. What would be the interest expenditure according to the effective interest rate method on the 31st December 2013?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "238"
    },
    "239": {
        "tables": [],
        "question": "If at the start of the year, Alpine Peak Investments, a hedge fund, had a portfolio valued at $475,000,000, which increased to $541,500,000 after a year, what would be the efficient yield for an investor? This is keeping in mind that the hedge fund levies a 1.5% management fee on the final portfolio value and a 10% incentive fee that are calculated separately.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "239"
    },
    "240": {
        "tables": [],
        "question": "Assuming a daily compounded annual interest rate of 2.5%, how long would it take for Alex, who currently has an investment of $1 million, to save up to his required retirement goal of $2million for his everyday costs?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "240"
    },
    "241": {
        "tables": [],
        "question": "If a financial expert predicts that a share may have a $2 dividend next year and could be sold for $38 by the end of next year. What would the share's value be if the required rate of return is 20%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "241"
    },
    "242": {
        "tables": [],
        "question": "A business is pondering on the idea of transitioning from a completely equity-based capital structure to a capital structure comprising of equal parts of equity and debt, keeping assets constant. This alteration would decrease the net income by 30%. If the present return on equity (ROE) is 10%, what would the ROE be with the suggested capital structure?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "242"
    },
    "243": {
        "tables": [
            "|                     | Value  |\n|---------------------|--------|\n| Initial Value       | 87.1876|\n| 2-year shift for 1bp| 87.3212|\n| 5-year shift for 1bp| 87.2545|\n| 10-year shift for 1bp|87.1454|\n| 30-year shift for 1bp|87.3454|"
        ],
        "question": "Based on the given table, what is the key rate duration for a shift of 10 years for a zero-coupon bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "243"
    },
    "244": {
        "tables": [
            "| X   | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |\n|-----|-----|-----|-----|-----|-----|-----|-----|-----|\n| P(X)| 0.14| 0.09| 0.19| 0.25| 0.17| 0.06| 0.03| 0.07|\n\nNote: A discrete random variable X follows the probability distribution as given in the table above."
        ],
        "question": "Based on the provided data, what is the value of P(3\u2264X\u22646)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "244"
    },
    "245": {
        "tables": [
            "| company | Share price | Call premium | Strike price |\n|---------|-------------|--------------|--------------|\n| NZT     | 53.37       | 1.62         | 58           |"
        ],
        "question": "Based on the data in Exhibit 1, if Michael is planning to implement a covered call strategy, what would be the breakeven share price for this strategy? Exhibit 1: Share Price and Option Premiums (share prices and option premiums in $)",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "245"
    },
    "246": {
        "tables": [
            "| Acquisition cost                                       | \u20ac2,300,000           |\n|-------------------------------------------------------|----------------------|\n| Acquisition date                                      | 1 January 2008       |\n| Expected residual value at time of acquisition        | \u20ac500,000             |\n| The customer list is expected to result in extra sales for three years after acquisition. The present value of these expected extra sales exceeds the cost of the list. | |"
        ],
        "question": "If an analyst in the finance team of a French company, PLECCO Inc., calculates the amortization of a client list, an intangible asset, for the fiscal year concluded 31 December 2009 using the straight-line method, what would be the sum of accumulated amortization associated with the client list as of 31 December 2009, based on the data she has collected about the asset?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "246"
    },
    "247": {
        "tables": [
            "|                   | 2017($) | 2018($) |\n|-------------------|---------|---------|\n| net income        | 320,000 | 360,000 |\n| accounts receivable | 23,000  | 25,000  |\n| accounts payable  | 31,000  | 35,000  |\n| depreciation      | 7,000   | 7,000   |"
        ],
        "question": "Can you compute the operational cash flow for the year 2018?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "247"
    },
    "248": {
        "tables": [],
        "question": "An agriculturist intends to sell 50,000 tons of soybeans in six months and opts to short futures contracts to protect against a decrease in price. The present price of soybeans is $508/ton, the contract size is 100 tons, with a soybean storage cost of 1.5% annually. The exponentially compounded rate is 5%, what's the cost of the futures contract?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "248"
    },
    "249": {
        "tables": [],
        "question": "What is the effective annual rate (EAR) if the declared yearly interest rate is 20% and the compounding occurs on a monthly basis?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "249"
    },
    "250": {
        "tables": [],
        "question": "What is the correlation coefficient of the returns of XYZ company and the overall market, given that the covariance of the returns is 0.009, the standard deviation of the overall market returns is 0.08, and the standard deviation of XYZ's returns is 0.15?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "250"
    },
    "251": {
        "tables": [],
        "question": "The trader, Michael, is preparing to establish a regression hedge. He plans to sell a Treasury bond worth $500,000 and buy TIPS as a hedge. Based on past data, the DV01on the T-bond is 0.085, the DV01on the TIPS is 0.063, and the regression beta coefficient (hedge adjustment factor) is 1.1. How much TIPS should Michael acquire?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "251"
    },
    "252": {
        "tables": [],
        "question": "Over the previous 36 months, the standard deviation of monthly returns within a fund's portfolio was recorded at 4.9%. What is the test statistic value to verify an assertion that this fund's investment approach results in a standard deviation of monthly returns of less than 5.0%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "252"
    },
    "253": {
        "tables": [
            "|         | November 2010 |       | December 2010 |       |\n|---------|---------------|-------|---------------|-------|\n| Goods   | Quantity      | Price | Quantity      | Price |\n| Sugar   | 70kg          | \u00a30.90/kg  | 120kg         | \u00a31.00/kg  |\n| Cotton  | 60kg          | \u20ac0.60/kg  | 50kg          | \u20ac0.80/kg  |"
        ],
        "question": "If we set the base period for 2010's consumption to be November and the starting price index at 100, what would be the inflation rate after determining the December price index as a Laspeyres index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "253"
    },
    "254": {
        "tables": [],
        "question": "John is interested in forecasting the earnings of his manufacturing plant in October 20X9, thus he employs income data from January 20X6 to September 20X9 as samples to create a AR(1) model, achieving the following outcome: Xt=293.5742+0.9387Xt\u22121X_t=293.5742+0.9387X_{t-1}Xt\u200b=293.5742+0.9387Xt\u22121\u200b Can you determine the long-term average?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "254"
    },
    "255": {
        "tables": [
            "|   |   |\n|---|---|\n| 1. | Purchased a customer list for $100,000, which is expected to provide equal annual benefits for the next 4 years. |\n| 2. | Recorded $200,000 of goodwill in the acquisition of a competitor. It is estimated that the acquisition would provide substantial benefits for the company for at least the next 10 years. |\n| 3. | Spent $300,000 on media placements announcing the company had donated products and services to the community. The CEO believes the firm's reputation was enhanced substantially and the company will likely benefit from it for the next 5 years. |"
        ],
        "question": "In 2010, certain incidents took place at a corporation. Given those incidents, what should be the corporation's documented amortization expense in 2011?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "255"
    },
    "256": {
        "tables": [],
        "question": "A financier is considering a property valued at $2.5 million. To purchase this property, he needs to pay up front 25% of the total cost and the remaining amount is to be financed at 10%, compounded monthly for a duration of 25 years. Determine the monthly mortgage payment for this scenario.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "256"
    },
    "257": {
        "tables": [],
        "question": "In a reversed head and shoulders formation, if the collar is at \u20ac100, the shoulders are priced at \u20ac90, and the head is at \u20ac75. What is the intended price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "257"
    },
    "258": {
        "tables": [
            "| Security | Security Weight(%) | Expected Standard Deviation(%) |\n|----------|--------------------|--------------------------------|\n| Equity   | 40                 | 30                             |\n| Bond     | 60                 | 15                             |"
        ],
        "question": "Assuming that the covariance between stocks and bonds is 0.058, what is the projected standard deviation of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "258"
    },
    "259": {
        "tables": [],
        "question": "During the same period last year, the stock price of Company H surged by 2.5 times its initial price. What was the continuously compounded return on the company's stock price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "259"
    },
    "260": {
        "tables": [],
        "question": "If a portfolio contains 80 assets, what should be the estimated number of covariances?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "260"
    },
    "261": {
        "tables": [],
        "question": "What is the worth of a bond that has a face value of EUR 1,000, a three-year maturity period, and annually pays a 5% coupon? Please note the following spot rate curve: 1-year, 6%; 2-year, 7%; and 3-year, 8%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "261"
    },
    "262": {
        "tables": [],
        "question": "If the critical value at the 0.05 level of significance is 9.4877, when will Samantha, a data analyst, reject the null hypothesis while using a chi-square distributed test statistic to check the independence of two categorical variables?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "262"
    },
    "263": {
        "tables": [],
        "question": "A company has to choose two out of four executives to join the finance committee. What are the possible combinations of two that can be created?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "263"
    },
    "264": {
        "tables": [],
        "question": "A financier is interested in establishing a bull call spread with the next options: a call option with a strike price of $35 that costs $12.65, and a call option with a strike price of $40 priced at $8.85. What is the maximum profit that can be made from this bull call spread?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "264"
    },
    "265": {
        "tables": [],
        "question": "A financial expert is trying to determine the worth of Sovereign Corporation's shares. The corporation has recently issued a dividend of $0.58 per share. The dividends are projected to increase by 20 percent in the coming year and 15 percent in the following year. From the third year onwards, the dividends are expected to rise at a rate of 5.6 percent per annum perpetually. If the necessary rate of return is 8.3 percent, what is the inherent value of the stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "265"
    },
    "266": {
        "tables": [
            "| Scenario | Probability of Scenario (%) | Amount Recovered ($) | Probability of Amount (%) |\n|----------|-----------------------------|----------------------|--------------------------|\n| 1        | 40                          | 50,000               | 60                       |\n| 1        | 40                          | 30,000               | 40                       |\n| 2        | 60                          | 80,000               | 90                       |\n| 2        | 60                          | 60,000               | 10                       |"
        ],
        "question": "According to the two scenarios proposed by a financial examiner, what is the anticipated recovery value from the principal of defaulted loans amounting to $100,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "266"
    },
    "267": {
        "tables": [],
        "question": "What are the chances of stock A underperforming the market, given an analyst's discovery that it has a 60% probability of outdoing the market?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "267"
    },
    "268": {
        "tables": [],
        "question": "A bank that complies with the Basel I Accord issues a loan of $100 million to a company having a risk weight of 50%. What is the fundamental on-balance-sheet credit risk charge?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "268"
    },
    "269": {
        "tables": [],
        "question": "What is the likelihood that a portfolio with an expected mean return of 8 percent and a standard deviation of 14 percent will have a return between 8 and 11 percent?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "269"
    },
    "270": {
        "tables": [],
        "question": "Calculate Jensen's alpha measure for portfolio named P, which has a beta of 0.7, an expected return of 12.8%, and an equity risk premium of 5.25%. The risk-free rate is 4.85%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "270"
    },
    "271": {
        "tables": [
            "| Expected Security Standard Deviation (%) | Beta |\n|------------------------------------------|------|\n| Security 1 25                            | 1.50 |\n| Security 2 15                            | 1.40 |\n| Security 3 20                            | 1.60 |"
        ],
        "question": "In regards to the capital asset pricing model, if the anticipated return for Bond 2 is 11.4% and the risk-free rate is 3%, what would be the expected market return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "271"
    },
    "272": {
        "tables": [
            "|               | Global Equity | Global Bonds |\n|---------------|---------------|--------------|\n| Global Equity | 0.0225        | 0.0022       |\n| Global Bonds  | 0.0022        | 0.0025       |",
            "|           | Sensitivities |      | Residual Risk |\n|-----------|---------------|------|---------------|\n|           | Global Equity | Global Bonds |   |\n| Market 1  | 1.20          | 0.00 | 12.00%        |\n| Market 2  | 0.90          | 0.00 | 7.00%         |\n| Market 3  | 0.00          | 0.95 | 1.80%         |"
        ],
        "question": "Given the factor covariance matrix for global equity and global bonds presented by Schultz in Exhibit 1, along with market factor sensitivities and residual risk displayed in Exhibit 2, what is the covariance between Market 1 and Market 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "272"
    },
    "273": {
        "tables": [
            "| Company | Market Share (%) |\n|---------|-----------------|\n| Zeta    | 35              |\n| Yusef   | 25              |\n| Xenon   | 20              |\n| Waters  | 10              |\n| Vlastos | 10              |"
        ],
        "question": "What is the three-firm Herfindahl\u2013Hirschmann Index for the sector, taking into account the market share information collected for a sector consisting of five firms?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "273"
    },
    "274": {
        "tables": [
            "|            | as of 31 December |    |\n|------------|------------------|----|\n| Assets     | 2016             | 2017 |\n| Cash and cash equivalents | 5 | 15 |\n| Short-term marketable securities | 5 | 15 |\n| Trade and other receivables | 15 | 5 |\n| Other non-financial assets | 5 | 18 |\n| Tax assets | 5 | 2 |\n| Total current assets | 35 | 55 |",
            "|                       |  as of  31 December  |     |    \n| ---------------       | :--------------:     | :-----:|    \n|   Assets              | 2016                 |  2017  |      \n| Total non-current assets | 65             |  55 |\n| Total assets         | 100                 | 110  |  \n| Equity and Liabilities |  |  |\n| Total current liabilities | 35 | 28 |\n| Total non-current liabilities | 45 | 45 |\n| Total liabilities | 80 | 73 |\n| Total equity | 20 | 37 |\n| Equity and liabilities | 100 | 110 |"
        ],
        "question": "What is the financial leverage ratio for Business B, according to the balance sheet below, as of 31 December 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "274"
    },
    "275": {
        "tables": [
            "| Par value | $100.00 |\n|---|---|\n| Annual coupon rate | 8% |\n| Coupon payment frequency | Semiannual |\n| Coupon payment dates | 15 May and 15 November |\n| Maturity date | 15 November 2017 |\n| Day count convention | Actual/Actual |\n| Annual  yield to maturity | 5.5% |"
        ],
        "question": "The bonds of a corporation named Whakatane and Co. are scheduled for settlement on 15 July 2014 and have several distinct attributes. Given these details, can you identify the discrepancy between the full and flat prices?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "275"
    },
    "276": {
        "tables": [],
        "question": "A spreadsheet containing 108 monthly returns for shares in Saraswoti Inc is owned by Kaleb Perkins. He designs a software program that applies bootstrap resampling to generate 200 resamples from this Saraswoti data through sampling with replacement. Each resample comprises of 108 data points. The software programmed by Perkins computes the average of each of the 200 resamples, then determines that the mean of these 200 resample means equals 0.0261. The program subtracts 0.0261 from each of the 200 resample means, squares each of these 200 differences, and totals up the squared differences, resulting in 0.835. An estimate of the standard error of the sample mean is then calculated by the program. What is the estimated standard error of the sample mean?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "276"
    },
    "277": {
        "tables": [],
        "question": "The financial institution formalized a $30 million credit facility agreement with Firm B, with an outstanding amount of $20 million. Firm B has minimal collateral, therefore, the financial institution estimated the probability of default to be 1% per annum. Because the collateral is industry-specific, the financial institution assigned a loss rate of 90%. What is the projected loss (EL) of the financial institution?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "277"
    },
    "278": {
        "tables": [
            "|                   | 2011 | 2012 | 2013 | 2014 | 2015 | 2016 |\n|-------------------|------|------|------|------|------|------|\n| Called Down       | 120  | 40   | 25   | 60   | 25   | 10   |\n| Realized Results  | 0    | 0    | 25   | 80   | 100  | 195  |\n| Unrealized Results| -15  | -35  | 35   | 25   | 35   | 60   |\n| Distributions     |      |      |      | 60   | 110  | 175  |"
        ],
        "question": "Reviewing the latest annual report for Fund VI (displayed in Exhibit 1) to assess Yushan's previous performance, what is the DPI value that Madan determines for Fund VI, taking into account a fund worth \u00a3300 million from 2011, management costs of 2%, a 20% carried interest, a 7% hurdle rate, and a term of 2018 up to 31st December 2016?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "278"
    },
    "279": {
        "tables": [
            "| Revenue | $2,600,000 |\n| --- | --- |\n| Net profit margin | 35% |\n| Depreciation on PP&E | 180,000 |\n| Increase in accounts receivable | 90,000 |\n| Decrease in accounts payable | 70,000 |\n| Increase in inventory | 500,000 |\n| Gain on sale of equipment | 20,000 |"
        ],
        "question": "Provided the following: The cash flow from operations is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "279"
    },
    "280": {
        "tables": [],
        "question": "If the annual discount rate is 4% and it's compounded yearly, what is the (PV5) present value of $50,000, received as a cash flow at the end of the 20th year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "280"
    },
    "281": {
        "tables": [
            "| Years | Present Value Factor |\n|-------|---------------------|\n| 0.25  | 0.997506            |\n| 0.5   | 0.992556            |\n| 0.75  | 0.985222            |\n| 1     | 0.975610            |"
        ],
        "question": "Based on the following information, the annualized fixed swap rate is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "281"
    },
    "282": {
        "tables": [],
        "question": "For the end of its fiscal year, Tangerine Inc. reported a net income of $200 million and an average of 50,000,000 common shares in circulation. There are 2,000,000 convertible preferred shares circulating that paid a yearly dividend of $5. Each preferred share can be converted into two common shares. What would be the diluted EPS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "282"
    },
    "283": {
        "tables": [
            "| Security | Security Weight(%) | Expected Standard Deviation(%) |\n|---|---|---|\n| Equity | 40 | 30 |\n| Bond | 60 | 25 |"
        ],
        "question": "What is the covariance of the two investments? Presuming the portfolio's standard deviation is 27%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "283"
    },
    "284": {
        "tables": [],
        "question": "For the financial year-end, Everest Aqua Enterprises (EAE) announced a net profit of $12 million and an average of 2,000,000 ordinary shares circulating. The firm disbursed $800,000 as preferred dividends and there were 100,000 options with an average exercise price of $20 still to be exercised. Over the course of the year, EAE's average market price was $25 a share. What is EAE\u2019s diluted EPS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "284"
    },
    "285": {
        "tables": [
            "| S&P Rating | G-Spread | S&P Rating | G-Spread |\n|------------|----------|------------|----------|\n| AAA        | 0.30     | A          | 1.00     |\n| AA+        | 0.45     | A-         | 1.10     |\n| AA         | 0.60     | BBB+       | 1.30     |\n| AA-        | 0.70     | BBB        | 1.45     |\n| A+         | 0.85     | BBB-       | 1.60     |"
        ],
        "question": "Jones mentions that the shift of a firm's ratings can affect the overall return of a bond asset. For instance, he chooses a 10-year maturity, 5% coupon bond presently trading at par and rated A+ by Moody's. He requests Smith to compute the anticipated total return over a one-year term assuming the bond is demoted by two notches and to figure out why the year-end duration for the bond is 6.9. Assuming no modification in market conditions and a horizontal yield curve and utilizing Table 2, what is the projected yield on Jones' demo bond over a one-year span?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "285"
    },
    "286": {
        "tables": [
            "| Year | Return(%) |\n|------|-----------|\n| 2015 | 5         |\n| 2016 | -8        |\n| 2017 | 10        |"
        ],
        "question": "What's the return on investment for a three-year holding period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "286"
    },
    "287": {
        "tables": [],
        "question": "A financier invested $500 million in a hedge fund with a \"2 and 20\" fee arrangement. The management fee is determined by the assets under management at the end of the year, and the incentive fee is based on an 8% hurdle rate. If the hedge fund appreciates by 20% at the end of the year, what is the net return if the incentive fee is calculated after the management fee?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "287"
    },
    "288": {
        "tables": [],
        "question": "Bright Blossom Ltd., a garden supply wholesale company, announced an annual cost of goods sold amounting to $80 million. The total properties increased by $55 million, incorporating a rise of $5 million in their stocks. The total obligations increased by $45 million, which also includes a $2 million rise in bills to be paid. What is the probable amount of cash that the company has paid to its vendors?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "288"
    },
    "289": {
        "tables": [
            "| Income Statement        | 2007  | 2008  |\n|------------------------ |-------|-------|\n| Revenue                 | $474  | $598  |\n| Depreciation            | 20    | 23    |\n| Other operating costs   | 368   | 460   |\n| Income before taxes     | 86    | 115   |\n| Taxes                   | 26    | 35    |\n| Net income              | 60    | 80    |\n| Dividends               | 18    | 24    |\n| Earnings per share      | $0.714| $0.952|\n| Dividends per share     | $0.214| $0.286|\n| Common shares outstanding|84.0  | 84.0  |",
            "| Required rate of ROE | 14% |\n|----------------------|-----|\n| Growth rate of industry | 13% |\n| Industry P/E | 26 |"
        ],
        "question": "Claire Smith, CFA, has been tasked with examining Shyrdak. Smith anticipates that Shyrdak's earnings and dividends will experience a consistent growth rate of 13 percent. The financial statements for the most recent two years (2007 and 2008) along with other details for Shyrdak are supplied in Exhibits 1 and 2. These exhibits offer actual 2007 and 2008 Financial Statements as of May 31st (in Millions exceptPer-ShareData) and selected Financial Information respectively. Based on the data from Exhibits 1 and 2 and Smith's projections for Shyrdak, what are the justified forward P/Es for this company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "289"
    },
    "290": {
        "tables": [
            "| Variable          | Coefficient | Std. Error | t-Statistic |\n|-------------------|-------------|------------|-------------|\n| Intercept         | -2582.791   | 940.613    | -2.746      |\n| GDP               | 0.022       | 0.006      | 3.667       |\n| Fiscal Expenditure| 0.702       | 0.033      | 21.273      |\n| RPI               | 23.985      | 8.738      | 2.745       |"
        ],
        "question": "If Sarah desires to forecast her nation's tax revenue, she chooses GDP, Fiscal expenditure and RPI (Retail Price Index) as three independent variables. She finds that this year's GDP is 104790.6, Fiscal expenditure is 22053.15, and RPI is 98.7. What is the expected value of the tax revenue for this year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "290"
    },
    "291": {
        "tables": [],
        "question": "What is the maximum leverage ratio for a position financed by a minimum margin requirement of 55 percent, as set by an internet-based trading company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "291"
    },
    "292": {
        "tables": [],
        "question": "The stock collection has a market value of $6,000,000. The retirement fund is planning to use a futures contract priced at $250,000 to raise the beta from 0.9 to 1.2 for a span of one month. The futures contract has a beta of 0.95. After one month, the return of the stock market is 5%, the market value of the stock collection becomes $6,250,000, and the cost of the futures contract is $262,000. What is the effective beta of the stock element of the fund?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "292"
    },
    "293": {
        "tables": [],
        "question": "You are creating models to predict earnings per share for two building firms, X and Y. The likelihood of Firm X's EPS growing by the year's end stands at 0.45. The chance of Firm Y's EPS swelling by the end of the year is 0.25. The probability that both firms' EPS will hike is 0.10. According to the predictive models, what is the likelihood that the EPS of at least one of these building firms will surge?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "293"
    },
    "294": {
        "tables": [
            "|                        | Company X      |\n|------------------------|----------------|\n|                        | As of 31 December |\n| Ending shareholders' equity | \u00a310,000,000   |\n| Tax rate               | 25%            |\n| Dividends              | \u00a30.00          |\n| Net income             | \u00a3750,000       |"
        ],
        "question": "Firms A and B start the year with the same book value of equity and identical tax rates. They have the same transactions all year and report them in the same way, except for one. Both firms purchase a printer worth \u00a3300,000 with a lifespan of three years and a salvage value of \u00a30 at the start of the year. Firm A capitalizes the printer and depreciates it using a straight-line method, while Firm B expenses the printer. The following information is collected for Firm A at the end of the year. Given this information, what would be Firm B's return on equity using year-end equity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "294"
    },
    "295": {
        "tables": [],
        "question": "Assuming that active returns do not correlate, according to the basic law of active management, how many securities would a fund overseen by an investment strategist with a 0.75 information ratio, a 0.1819 information coefficient, and a transfer coefficient of 1.0 contain?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "295"
    },
    "296": {
        "tables": [],
        "question": "John is trying to forecast the sales volume of his store in December 20X8, therefore he utilizes the sales volume from January 20X7 to November 20X8 as examples to create a linear trend model and obtains the following result: \u0177t =264.75+2.58t. What is the anticipated sales volume of December 20X8?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "296"
    },
    "297": {
        "tables": [
            "| Spot rate (RMB/USD) | 6.7659 |\n|---|---|\n| 180-day Libor(RMB) | 4.80% |\n| 180-day Libor(USD) | 3.55% |"
        ],
        "question": "Based on the given data, can you compute the forward premium for a half-year RMB/USD forward agreement?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "297"
    },
    "298": {
        "tables": [
            "| Asset | Position | Individual VAR | Marginal VAR | VAR Contribution |\n|-------|----------|----------------|--------------|------------------|\n| 1     | USD 100  | USD 23.3       | 0.176        | USD 17.6         |\n| 2     | USD 100  | USD 46.6       | 0.440        | USD 44.0         |\n| Total | USD 200  | USD 61.6       |              | USD 61.6         |"
        ],
        "question": "If a risk analyst supposes the joint distribution of returns is multivariate normal and calculates the ensuing risk measures for a portfolio of two assets: what would be the decrease in portfolio VAR if we eliminate asset 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "298"
    },
    "299": {
        "tables": [],
        "question": "The portfolio manager of AB pension, Jacques, has recently contemplated incorporating PZ Inc. (New York Stock Exchange: PZ) into the portfolio. Instead of utilizing the two-stage DDM, Jacques intends to use his forecast that the stock of PZ will be valued at 20 times its earnings per share (trailing P/E of 20) in 4 years. With a projected earnings retention ratio of 0.6 and a dividend of $ 0.3461 at that point, what will be the terminal value of the stock according to this method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "299"
    },
    "300": {
        "tables": [],
        "question": "Compute the correlation of the two properties: return variance of property X: 0.16, return variance of property Y: 0.09, covariance between the returns of X and Y: 0.009.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "300"
    },
    "301": {
        "tables": [
            "|                                             | Fund A | Fund B |\n|---------------------------------------------|--------|--------|\n| Portfolio weights (%)                       | 70     | 30     |\n| Expected returns (%)                        | 10     | 16     |\n| Standard deviations (%)                     | 7      | 13     |\n| Correlation between the returns of Fund A and Fund B | 0.80 |      |"
        ],
        "question": "What is the standard deviation of return for a portfolio made up of Investment X and Investment Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "301"
    },
    "302": {
        "tables": [],
        "question": "George Smith and his group gather a lot of analytical and statistical information about the automobile market. Based on this information, they infer that the average cost of SUVs exceeds $46,435 in their nation. Following this, they randomly pick 64 SUVs with an average cost of $46,760. The standard deviation of this sample is assumed to be 1370. George Smith performs a hypothesis test to validate their inference. At what significance level should George Smith reject the null hypothesis?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "302"
    },
    "303": {
        "tables": [],
        "question": "A financial performance evaluator is working on some performance indicators for portfolio XYZ. Portfolio XYZ has a projected return of 9%, a volatility of 21%, and a beta of 0.3. If the riskless rate is 3%, what is the Treynor ratio of portfolio XYZ?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "303"
    },
    "304": {
        "tables": [],
        "question": "The monthly return correlation of equities in a portfolio adheres to the law of mean reverting and the long-term monthly return correlation is approximately 30%. Upon carrying out regression, we determine the mean reverting rate to be around 0.8. If the current month's return correlation is 56%, what would be the projected next monthly return correlation of equities in the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "304"
    },
    "305": {
        "tables": [],
        "question": "A Chinese business organization primarily exports products to US and offers 90 days credit term to US firms. The transactions are settled in USD. The organization from China is concerned that the USD will lose its value and wants to hedge the potential risk by engaging in a short forward contract. The local risk-free rate is 4% and the foreign risk-free rate is 2%. The current spot rate is 6.7523\uffe5per $. What is the cost of the forward contract?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "305"
    },
    "306": {
        "tables": [],
        "question": "What is the holding period return for a trader who purchased 200 shares at $20 each and later sold them all at $22.5 per share, after obtaining a dividend of $0.2 per share for a quarter?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "306"
    },
    "307": {
        "tables": [
            "|                       |       |                         |       |\n|-----------------------|-------|-------------------------|-------|\n| **Exhibit 1. Blanca Co. Balance Sheet at 31 December 2016 ($ millions)** |       |                         |       |\n| Cash                 | 20    | Current liabilities     | 25    |\n| Accounts receivable  | 50    | Noncurrent liabilities  | 30    |\n| Other assets         | 30    | Shareholders' equity    | 45    |\n| Total assets         | 100   | Total liabilities and equity | 100   |"
        ],
        "question": "An analyst from an international securities firm's research department, named John Thronen, is working on a research report for Topmaker, Inc. This publicly-traded company adheres to IFRS. Now, a company named Castello Corp. has a plan to generate $40 million in capital through loans backed by its financial receivables. The plan entails formation of a special-purpose entity (SPE), injecting $10 million into the SPE, getting the SPE to secure a $40 million loan, and then use this capital to acquire $50 million worth of receivables from Castello Corp. Castello Corp., which fits the concept of control, aims to consolidate the SPE, with its balance sheet displayed in Exhibit 1. Considering Exhibit 1 and Castello Corp.'s method of lending against its financial receivables, what will the total assets on the consolidated balance sheet look like?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "307"
    },
    "308": {
        "tables": [],
        "question": "A buyer acquires an annual coupon bond with a 8% coupon rate and exactly 20 years left until maturity at a price equivalent to its par value. The buyer's investment horizon spans eight years. The approximate modified duration of the bond is 12.480 years. What is the duration gap at the moment of acquisition?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "308"
    },
    "309": {
        "tables": [
            "|               | Coefficients | Standard Error | t-Statistic |\n|---------------|--------------|----------------|-------------|\n| Intercept     | 3.7642       | 2.5743         | 1.4622      |\n| Season dummy  | 20.5732      | 10.3958        | 1.9790      |"
        ],
        "question": "Brown is curious about how the change in seasons impacts the sales of the down jacket. He structures a regression model incorporating a dummy variable (1 for winter and 0 for summer) as an independent variable and the sales volume (in thousands) as the dependent variable and achieves the following outcomes: What is the variance in the sales volume between summer and winter in thousands?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "309"
    },
    "310": {
        "tables": [],
        "question": "An executive is looking to establish a synthetic tracker fund tied to the S&P 500. The primary investment stands at $500,000,000. Given that an S&P 500 futures contract is valued at $1,000 with a multiplier of $250, and considering a risk-free rate of 3% and a futures expiration in three months, how many futures contracts does he need to purchase?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "310"
    },
    "311": {
        "tables": [],
        "question": "A business owner purchased the property B using loans. They borrowed $220 and their equity is $110. Based on the provided data, what is their leverage ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "311"
    },
    "312": {
        "tables": [
            "| Quanty(Q) | Total Fixed Cost(TFC) | Total Variable Cost(TVC) |\n|-----------|-----------------------|--------------------------|\n| 0         | 200                   | 0                        |\n| 1         | 200                   | 100                      |\n| 2         | 200                   | 150                      |\n| 3         | 200                   | 200                      |\n| 4         | 200                   | 240                      |\n| 5         | 200                   | 320                      |"
        ],
        "question": "The operations manager of a company collects the following data about the company's cost structure at various output levels: Please refer to the information in Exhibit 1. What is the average fixed cost (AFC) when the production quantity is 4 units?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "312"
    },
    "313": {
        "tables": [],
        "question": "In 2016, the S&P 500 had quarterly returns of 8%, -5%, 3%, and 1%. What is the quarterly arithmetic mean return for the S&P 500?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "313"
    },
    "314": {
        "tables": [],
        "question": "A consultant has projected that the intrinsic worth of company B's share would be $25. If the latest dividend was $2 and is anticipated to rise at 3%, what's the necessitated return rate of a stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "314"
    },
    "315": {
        "tables": [],
        "question": "If an organization's pretax income stands at $1,500,000, with taxable income amounting to $1,000,000 and a tax rate of 35%, what should be the declared current tax expense for the corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "315"
    },
    "316": {
        "tables": [
            "| Days to Maturity | LIBOR | Present Value Factors |\n|------------------|-------|-----------------------|\n| 180              | 3.0%  | 0.985222              |\n| 360              | 3.5%  | 0.966184              |\n| 540              | 4.0%  | 0.943396              |\n| 720              | 4.5%  | 0.917431              |"
        ],
        "question": "The two-year Libor-based interest rate swap with semi-annual resets (30/360 day count). In light of the following data, what is the swap's fixed rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "316"
    },
    "317": {
        "tables": [
            "| Sales price per unit | \u00a385               |\n|---------------------|------------------|\n| Variable cost per unit  | \u00a365               |\n| Fixed operating costs   | \u00a350 million   |\n| Fixed financial costs   | \u00a330 million   |"
        ],
        "question": "What is the company's breakeven volume of sales in million units, given the following data is available for a company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "317"
    },
    "318": {
        "tables": [
            "| Risk free interest rate (1-year, incorporating 2.6% inflation expectation) | 3.8% |\n| --- | --- |\n| Term premium(10-year vs.1-year government bond) | 1% |\n| 10-year BBB credit premium (over 10-year government bond) | 75bp |\n| Estimated liquidity premium on 10-year corporate bonds | 55bp |"
        ],
        "question": "A financial backer is pondering including three new assets into his globally focused fixed income collection. He is focusing on these non-callable assets: 1-year government bond, 10-year government bond and a 10-year BBB rated corporate bond. His plan is to either equally invest in all three assets under scrutiny, or he'll avoid all of them for the time being. His condition to make the additional investment is that the projected spread/premium of the equally weighed investment must be at least 1.5 percent (150bp) greater than the 1-year government bond. Using just the given details, calculate the estimated return that an equal-weighted investment in these three assets could offer.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "318"
    },
    "319": {
        "tables": [],
        "question": "If Apple View Corp.'s dividend policy is characterized by a slow adaptation towards a specific dividend payout proportion, and the company has projected its earnings per share for this year to be $4.00, given that last year, their earnings per share were $3.00 and they paid out a dividend of $0.60 per share, what will be this year's dividend per share, given that they have a predetermined payout proportion of 25 percent and employ a five-year period to adjust their dividend?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "319"
    },
    "320": {
        "tables": [],
        "question": "A firm releases a leveraged floating-rate note which offers a coupon of 1.5 times Libor on notional principle of $1 million. This firm uses the capital to purchase a fixed-rate bond with 6% coupon rate. To counter the risk of fluctuating payments, the firm partakes in a swap with a fixed rate of 5% and a floating rate of 1.5 times Libor. Determine the net income from these transactions.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "320"
    },
    "321": {
        "tables": [],
        "question": "A production company named Silver borrowed USD 500 million from Star Bank. To protect its debt exposure to Silver, Star Bank engages in a credit default swap transaction with Metro Bank, where Metro Bank would wholly reimburse Star Bank if Silver defaults. If the defaults of Star Bank, Metro Bank, and Silver are independent and their default probabilities are considered to be 0.5%, 0.6%, and 4.0%, respectively. What is the likelihood that Star Bank will encounter a credit loss in its exposure to Silver?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "321"
    },
    "322": {
        "tables": [
            "| Time-to-Maturity | Spot Rates |\n| --- | --- |\n| 1 year | 3% |\n| 2 years | 4% |"
        ],
        "question": "Assuming the sequence of spot rates provided, what would be the cost of a 2-year bond with a 5% coupon rate, with interest paid yearly, that a trader is thinking about buying?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "322"
    },
    "323": {
        "tables": [],
        "question": "A bond portfolio contains two bonds, bond X and bond Y. The values of bond X and bond Y are $60 millions and $40 millions respectively. The one-year probabilities of default and the recovery rate of bond X are 5% and 60% respectively, while for bond Y are 7% and 50%. Can you compute the one-year expected credit loss of this compilation? Assume that the default risk between X and Y is independent.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "323"
    },
    "324": {
        "tables": [],
        "question": "The demand schedule in an entirely competitive market is dictated by P = 93 \u2013 1.5Q (for Q \u2264 62) and the enduring cost organization of each corporation is: Total cost: 256 + 2Q +  4Q2 Average cost: 256/Q + 2 + 4Q Marginal cost: 2 + 8Q New corporations will infiltrate the market at any price above:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "324"
    },
    "325": {
        "tables": [],
        "question": "The demand function for groceries is denoted by the equation Qdpg = 80 - 3Ppg + 0.1I + 0.5Ppdr where Qdpg is the quantity of groceries, Ppg is the price of groceries, I is the income, and Ppdr is the price of beverages. We understand that: Ppg = 30, I = 110, and Ppdr = 20. What will the price elasticity of demand for groceries be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "325"
    },
    "326": {
        "tables": [],
        "question": "A financial expert is assessing the liquidity of XYZ Corporation based on the financial data from 2016 and 2017. The total debt was $200 in 2016 and rose to $300 in 2017. The total assets were $500 in 2016, increasing to $800 in 2017. The total equity was $250 in 2016 and went up to $400 in 2017. What is the financial leverage ratio in 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "326"
    },
    "327": {
        "tables": [],
        "question": "An investment director purchased 600 call options on a stock that doesn't pay dividends, with a strike price of USD 60, at a cost of USD 3 each. If the current stock price is at USD 62, the daily stock return volatility is pegged at 1.82%, and the delta of the option stands at 0.5. How can we approximate the 1-day 95% VaR of this position using the delta-normal approach?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "327"
    },
    "328": {
        "tables": [
            "|        | \u00a3 thousands |\n|--------|-------------|\n| Carrying amount | 132 |\n| Undiscounted expected future cash flows | 120 |\n| Present value of expected future cash flows | 100 |\n| Fair value if sold | 105 |\n| Costs to sell | 1 |"
        ],
        "question": "Considering the data analyzed, what will be the impairment loss on this manufacturing plant (in thousands) under IFRS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "328"
    },
    "329": {
        "tables": [],
        "question": "Assuming a tax rate of 28%, what is the annual after-tax cost of debt (%) for a business that releases fresh 20-year $1,000 bonds with a coupon rate of 6.2% payable semiannually at an issuance price of $1,030.34?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "329"
    },
    "330": {
        "tables": [],
        "question": "Kelly is working on the valuation for XYZ Corp. She calculates that the long-term expected dividend payout rate for XYZ is 35 percent and the return on equity will be 12 percent in the long run. What is the long-term FCFE Sustainable growth rate for XYZ Corp.?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "330"
    },
    "331": {
        "tables": [
            "|                |          | Actual Training |        |\n|----------------|----------|--------------|--------------|\n|                |          | results     |              |\n| Predicted      |          | Class \"1\"   | Class \"0\"    |\n| Results        | Class \"1\"| TP=182      | FP=52        |\n|                | Class \"0\"| FN=31       | TN=96        |"
        ],
        "question": "After settling on the last set of features, Johnson chooses and executes a model on the training set which labels the text as having either positive sentiment (Class \"1\") or negative sentiment (Class \"0\"). He subsequently inspects its performance through error analysis. As per Exhibit 1, what is the F1 score of the model?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "331"
    },
    "332": {
        "tables": [],
        "question": "If we consider a decrease in the yield by 90 basis points, what would be the percentage change in the price of a bond with a modified duration of 9.6?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "332"
    },
    "333": {
        "tables": [],
        "question": "If the corporation buys back 1 million stocks at the current market rate, what would be the ensuing book value per share, considering the facts about another company revealed by an investigator which includes: 10 million shares in circulation, Earnings per share is US$2.00, P/E is 20, Book value per share is US$30?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "333"
    },
    "334": {
        "tables": [],
        "question": "What is the carried interest paid to the general partner of the DeepSleep Investment, referenced in the brochure and having a committed capital of $150 million, a management fee of 2%, carried interest of 20%, and a hurdle rate of 9%, at the end of the second year? In the example given in the brochure, the fund demands $100 million in commitments at the start of the first year and disburses $40 million in Company X and $60 million in Company Y. At the onset of the second year, it calls the residual $50 million and invests into Company Z. By the end of the second year, the investment in Company Y is sold for $70 million. The investment in Company X amounts to $54 million by the end of the third year, the investment in Company Z is worth $40 million, and a cash reserve of $46 million is maintained.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "334"
    },
    "335": {
        "tables": [
            "| Compensation of employees | 1,044,005 |\n|---------------------------|-----------|\n| Gross operating surplus | 518,979 |\n| Gross mixed income | 241,415 |\n| Net mixed income | 180,653 |\n| Taxes less subsidies on production | 90,507 |\n| Taxes less subsidies on products and imports | 139,443 |\n| Statistical discrepancy | 1,157 |\n| Net property income | 136,011 |"
        ],
        "question": "Using the income approach, compute the personal income using the details in the succeeding table.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "335"
    },
    "336": {
        "tables": [],
        "question": "An executive intends to determine the price of a put option using a one-period binomial tree. The specifics are as such: The existing stock price is $30, with the put option's exercise price also at $30 The up factor sits at 1.12, while the down factor is at 0.92 The risk-free rate remains at 5%. What is the value of this particular put option?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "336"
    },
    "337": {
        "tables": [
            "|            | Classification  | Cost   | Market value  2018 | Market value 2019 |\n|------------|-----------------|--------|------------------- |-------------------|\n| Shoes Corp | FVOCI           | 12,000 | 15,000             | 16,000            |\n| Angle PD   | Amortized cost  | 35,000 | 32,000             | 33,000            |\n| T-vision   | FVPL            | 42,000 | 45,000             | 56,000            |"
        ],
        "question": "A CFA named Fabian, who is employed at the Equity investment firm, is in the process of preparing an analytical report on the PZ company, which is registered on the HK Exchange and is in compliance with IFRS 9. She has gathered data on three fixed-income investments from the PZ's 2019 year-end financial report (assuming cost equals par value). Could you determine the carrying value of PZ company's investment portfolio at the end of 2019?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "337"
    },
    "338": {
        "tables": [
            "| Time Period | Forward Rate |\n|-------------|--------------|\n| 0y1y        | 0.80%        |\n| 1y1y        | 1.12%        |\n| Z           | 3.94%        |\n| 3y1y        | 3.28%        |\n| 4y1y        | 3.14%        |"
        ],
        "question": "What is the 3-year implied spot rate if all rates are annual rates stated for a periodicity of one (effective annual rates)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "338"
    },
    "339": {
        "tables": [
            "| Investment | Expected Return(%) | Expected Standard Deviation(%) |\n|-----------|------------------|-----------------------------|\n| 1         | 19               | 3                           |\n| 2         | 21               | 9                           |\n| 3         | 24               | 20                          |\n| 4         | 19               | 35                          |"
        ],
        "question": "Assuming the measure of risk aversion is -3, where is Mauricio Garcia, a daring investor who applies utility theory to select his investment portfolio, most likely to invest given a table of potential investments with expected returns and expected standard deviations?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "339"
    },
    "340": {
        "tables": [],
        "question": "A $1 million loan was granted to a vehicle manufacturing corporation by Bank B. The bank has projected a default likelihood of 10% for the vehicle manufacturer and an 80% recovery rate owing to strong collateral. What is the anticipated loss for the bank?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "340"
    },
    "341": {
        "tables": [],
        "question": "A company bond is set to mature in the coming year with a face value of 100 RMB, a market price of 88, a true default-free interest rate of 2.5%, anticipated inflation rate of 3%, and an unexpected inflation rate of 0.5%. Could you determine the implied credit risk premium embedded in the corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "341"
    },
    "342": {
        "tables": [],
        "question": "Assuming a constant 6% interest rate, how much does a shareholder need to invest today in order to make $10,000 in twenty years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "342"
    },
    "343": {
        "tables": [],
        "question": "The corporation known as Delta Enterprises has authorized 160,000 shares of common stock. It has issued 88,000 shares and has 75,000 shares outstanding. How many shares of treasury stock does Delta Enterprises possess?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "343"
    },
    "344": {
        "tables": [
            "| Company M                    | $ millions |\n|---------------------------|----------|\n| Net Income                      | 485        |\n| Depreciation expense      | 270        |\n| Increase in accounts receivable | 59         |\n| Increase in accounts payable    | 33         |\n| Purchase of fixed assets        | 523        |\n| Increase in notes payable       | 15         |\n| Increase in long-term debt      | 60         |"
        ],
        "question": "John is getting ready to assess the value of Company X's equity using the two-stage FCFE model. The anticipated growth rates for the initial three years are projected at 10%, 8%, and 6%, in that order, before potentially growing at 5% annually for an indefinite period. The necessary rate of return on equity for Company X stands at 10%. What is the fundamental value of Company X\u2019s equity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "344"
    },
    "345": {
        "tables": [],
        "question": "If a buyer acquires a three-year bond that has a 5% annual coupon rate, is bought at a rate of 105.657223 per 100 of par value and has a yield-to-maturity of 3%, what would be the estimated modified duration of this bond given a 5-basis point shift in yield-to-maturity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "345"
    },
    "346": {
        "tables": [
            "|       | Beginning of Period Price($) | End of Period Price($) | Total Dividends($) |\n|-------|------------------------------|------------------------|--------------------|\n| A     | 8.00                         | 10.00                  | 0.50               |\n| B     | 22.00                        | 19.00                  | 1.20               |\n| C     | 25.00                        | 25.00                  | 1.50               |"
        ],
        "question": "Recently, an analyst named Ahern from a financial firm gathered data for an equal-weighted index made up of assets A, B, and C: What is the index's price return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "346"
    },
    "347": {
        "tables": [],
        "question": "If John purchased a security for $55 in the first year, $60 in the second year, $64 in the third year, and $70 in the fourth year, what would be the harmonic mean of the price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "347"
    },
    "348": {
        "tables": [],
        "question": "In 2013, AskIt bought a customer list for $100,000, expected to yield equal annual benefits for four years. It also registered $200,000 in goodwill from the takeover of a rival firm, with projections indicating substantial benefits for at least a decade. Furthermore, it allocated $300,000 on media slots publicizing the firm's donations of goods and services in the local community, a move which the CEO believes significantly boosted the company's reputation and anticipates it to yield rewards for five years. Consequently, how much should the company declare as amortization expense in 2014?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "348"
    },
    "349": {
        "tables": [
            "| Bond Class      | Par Value (\u6bdb millions) |\n| ----------- | ----------- |\n| A (senior)      | 200       |\n| B (subordinated)   | 20        |\n| C (subordinated)   | 5        |"
        ],
        "question": "At what level of default in par value would Bond Class A suffer a loss, if issued by a special purpose entity as part of asset-backed securities structure?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "349"
    },
    "350": {
        "tables": [
            "|                                                    | \u00a5millions |\n|----------------------------------------------------|-----------|\n| Net income reported                                | 42        |\n| Dividends paid                                     | 7         |\n| Unrealized loss on investments carried at fair value through other comprehensive income | 3         |\n| Repurchase of company stock, to be held as Treasury stock | 6         |"
        ],
        "question": "During the year, the following events happened: At the start of the year, an organization had total equity from shareholders comprising of \u00a5200 million in common share capital and \u00a550 million in preserved profits. What is the total equity from shareholders (in \u00a5 millions) at the conclusion of the year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "350"
    },
    "351": {
        "tables": [
            "|                  | Asset 1 | Asset 2 | Asset 3 |\n|------------------|---------|---------|---------|\n| Expected return  | 5%      | 6%      | 7%      |\n| Portfolio weight | 0.20    | 0.30    | 0.50    |\n|                  | Asset 1 | Asset 2 | Asset 3 |\n| Asset 1          | 196     | 105     | 140     |\n| Asset 2          | 105     | 225     | 150     |\n| Asset 3          | 140     | 150     | 400     |"
        ],
        "question": "The three-asset portfolio designed by Sophia Milligan is outlined below. Milligan estimated the portfolio return to be 6.3%. What is the standard deviation of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "351"
    },
    "352": {
        "tables": [
            "| Income Statement       | Millions ($) |\n|-----------------------|--------------|\n| Revenues              | 10.2         |\n| Variable operating costs | 4.6       |\n| Fixed operating costs    | 2.0       |\n| Operating income        | 3.6        |\n| Interest                | 1.2        |\n| Taxable income          | 2.4        |\n| Tax                     | 1.0        |\n| Net income              | 1.4        |"
        ],
        "question": "What is the degree of financial leverage (DFL) accessible for a company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "352"
    },
    "353": {
        "tables": [],
        "question": "Using the duration model with convexity adjustment, how much will the bond's price change, in percentage, if interest rates drop 2%, given that the bond's duration is 7.31 and its convexity is -24.85?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "353"
    },
    "354": {
        "tables": [
            "| Bond | Price | Par Amount Held | Modified Duration |\n|------|-------|-----------------|-------------------|\n| A    | 101.43| 3               | 2.36              |\n| B    | 84.89 | 5               | 4.13              |\n| C    | 121.87| 8               | 6.27              |"
        ],
        "question": "Taking into account the given portfolio of bonds (par amounts listed in millions of USD). What is the value of the portfolio's DV01 (dollar value of 1 basis point)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "354"
    },
    "355": {
        "tables": [
            "|   |   |\n|---|---|\n| Coupon rate  | 5%  |\n| Interest paid  | semiannually  |\n| Mature time  | 2 years  |\n| Required rate of return  | 6%  |\n| Par value of the bond  | 100 |"
        ],
        "question": "The bond purchased by Brian has some detailed information summarized below. What is the price of this bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "355"
    },
    "356": {
        "tables": [],
        "question": "The XYZ Company is situated in a region with a 40 percent business tax rate on pre-tax income and a 30 percent individual tax rate on dividends. XYZ hands out all its post-tax income to its shareholders. What is the effective tax rate on XYZ's pre-tax income that is distributed as dividends?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "356"
    },
    "357": {
        "tables": [],
        "question": "A note with a par of $100 and a semiannually paid coupon rate of 6%, with a YTM of 8% and a 10-year maturity timeframe. What is the DV01 of this note?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "357"
    },
    "358": {
        "tables": [
            "| Amount | $1,000.00 |\n| ------- | ------------ |\n| Coupon | 5.00% |\n| Maturity | 3 years |\n| Probability of Default | Year 1: 2.0%. Year 2: 2.5%. Year 3: 3.0% |\n| Recovery Rate | 40% |"
        ],
        "question": "BTB Bank is a top-tier corporate and institutional bank that runs a client-facing credit default swap (CDS) desk. Steve McQueen is a CDS client strategist. Paul Starr is BTB's chief CDS trader. McQueen and Starr are setting up a meeting with Adam Lopez, a portfolio manager for AEB Fund, to explore investment and trading techniques concerning bonds, CDSs, and equities. Lopez kick-starts the conversation by requesting a recap on fundamental CDS principles and parameters. McQueen responds by explaining that a CDS comprises both a premium leg and a payment leg and that anticipated loss forms one of the elements that impact its valuation. McQueen provides data for a bond issued by Zeus Corporation. According to the facts presented in Exhibit 1, what is the forecasted loss for the Zeus Corporation bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "358"
    },
    "359": {
        "tables": [],
        "question": "Assuming that the interest from the coupon is reinvested at the bond's YTM, how much interest will a financier receive over the bond's 10-year lifespan if they buy a bond with a 6% annual coupon for $1,000 at par and holds it until it matures?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "359"
    },
    "360": {
        "tables": [],
        "question": "A buyer bought a stock 20 years ago for $15 and it paid no dividends throughout the investment period, but it had an annual compounded rate of 16%. Based on this information, what is the stock's value today?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "360"
    },
    "361": {
        "tables": [
            "| Information Ratio | 0.66 |\n|-------------------|------|\n| Information Coefficient | 0.5 |\n| Transfer Coefficient | 0.89 |"
        ],
        "question": "Based on essential foundational rules, the researchers gathered some data. Could you compute the annual number of autonomous choices made?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "361"
    },
    "362": {
        "tables": [
            "|      | Current Year ($ thousands) | Projection for Next Year ($ thousands) |\n|------|---------------------------|---------------------------------------|\n| Sales | 2,200 | 2,500 |\n| Variable operating costs (% of sales) | 28% | 30% |\n| Fixed operating costs | 1,400 | 1,400 |\n| Tax rate | 25% | 25% |\n| Dividends paid | 55 | 60 |\n| Interest bearing debt at 5% | 500 | 500 |"
        ],
        "question": "Based on the chosen details, what is the projected net income (in $ thousands) for the corporation next year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "362"
    },
    "363": {
        "tables": [],
        "question": "The floral products seller, Lavender Bloom Corp., announced a yearly cost of goods sold amounting to $75 million. There was an increase in total assets by $55 million, though there was a decrease in inventory by $6 million. Meanwhile, total liabilities escalated by $45 million and there was a surge in accounts payable by $2 million. What would be the probable total of cash that the company paid to its vendors?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "363"
    },
    "364": {
        "tables": [],
        "question": "What is the equity's proportion in a business's capital structure, with a marginal tax rate of 30%, a weighted average cost of capital of 7.4%, a before-tax cost of debt of 5%, and a 10% cost of equity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "364"
    },
    "365": {
        "tables": [],
        "question": "What is R2R^2R2 if the estimate for beta, \u03b2^=0\\widehat\\beta = 0\u03b2\u200b=0?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "365"
    },
    "366": {
        "tables": [
            "| Current year's earnings per share | $2.50 |\n|---|---|\n| Dividend payout ratio | 60% |\n| Dividend growth rate expected during Year 1 and 2 | 25% |\n| Dividend growth rate expected after Year 2 | 5% |\n| Investors' required rate of return | 12% |"
        ],
        "question": "What is the per share value of the common stock a stockholder has collected data on for possible investment in a business?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "366"
    },
    "367": {
        "tables": [],
        "question": "Recently, Bob Inc. acquired a production equipment for $60,000, which is anticipated to produce an annual cash inflow of $25,000 for a duration of six years. The company plans to depreciate the equipment over six years for accounting reasons. Nonetheless, the tax department approximates the useful life of the equipment to be 5 years. Assuming a tax rate of 40% and the equipment has no residual value. What would be the tax payable by Bob Inc. in the 6th year if they use the straight-line depreciation method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "367"
    },
    "368": {
        "tables": [
            "|                            |                |\n|----------------------------|----------------|\n| Exhibit 1 Commercial Property Information |       |\n| Net operating income       | $700,000       |\n| Mortgage on property       | $9,000,000     |\n| Debt service               | $600,000       |\n| Market value of property   | $10,000,000    |"
        ],
        "question": "Johnson inquires from Smith about the most frequently utilized financial ratios for assessing private real estate investments, such as commercial property. Based on the data in Exhibit 1, what is the cash-on-cash return for the property that Smith requires analysis for?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "368"
    },
    "369": {
        "tables": [],
        "question": "By employing the Black-Scholes model, determine the worth of a European call option with these details: spot price = 100; strike rate = 110; risk-free interest rate = 10%; duration until expiration = 0.5 years; N(d1) is 0.457185 and N(d2) is 0.374163.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "369"
    },
    "370": {
        "tables": [
            "| xor z 0 |     | 0.01 0.02 0.03 0.04 0.05 0.06 0.07                                   | 0.08 | 0.09 |\n| 0.10 |     | 0.5398 0.5438 0.5478 0.5517 0.5557 0.5596 0.5636 0.5675 0.5714 0.5753 |     |     |\n| 0.20 |     | 0.5793 0.5832 0.5871 0.5910 0.5948 0.5987 0.6026 0.6064 0.6103 0.6141 |     |     |\n| 0.30 |     | 0.6179 0.6217 0.6255 0.6293 0.6331 0.6368 0.6406 0.6443 0.6480 0.6517 |     |     |\n| 0.40 |     | 0.6554 0.6591 0.6628 0.6664 0.6700 0.6736 0.6772 0.6808 0.6844 0.6879 |     |     |\n| 1.10 |     | 0.8643 0.8665 0.8686 0.8708 0.8729 0.8749 0.8770 0.8790 0.8810 0.883  |     |     |\n| 1.20 | 0.8849 0.8869 0.8888 0.8907 0.8925 0.8944 0.8962 0.8980 0.8997 0.9015 |      |     |\n| 1.30 | 0.9032 0.9049 0.9066 0.9082 0.9099 0.9115 0.9131 0.9147 0.9162 0.9177 |      |     |\n| 1."
        ],
        "question": "Using the given extract from the cumulative distribution function for the standard normal random variable table: Cumulative Probabilities for a Standard Normal DistributionP(Z \u2264 x) = N(x) for x \u2265 0 or P(Z \u2264 z) = N(z) for z \u2265 0, If a variable follows a normal distribution with an average of 2.00 and a variance of 16.00, what's the likelihood of getting a value that is 7.40 or lower?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "370"
    },
    "371": {
        "tables": [],
        "question": "If under LIFO, the ABC organization reported a COGS of $500,000, and an ending inventory of $600,000 in 2017, and it was noted in the footnotes that LIFO reserve increased by $10,000, what would be its cost of goods sold if ABC organization switched its accounting method from LIFO to FIFO?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "371"
    },
    "372": {
        "tables": [],
        "question": "Suppose that in the futures market, the 1-year forward rate stands at NZD/AUD 1.1079. Given that the yearly interest rate is 2.5% in Australia (AUD) and 3% in New Zealand (NZD), what would be the NZD/AUD spot rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "372"
    },
    "373": {
        "tables": [],
        "question": "If a credit commitment totals $10 million, with $8.5 million currently still due, and there's a 1% chance of default with a recovery rate of 40%, what's the predicted loss for the credit?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "373"
    },
    "374": {
        "tables": [
            "| Height interval | Absolute Frequency |\n|----------------|---------------------|\n| 155~160         | 10                       |\n| 160~165         | 20                       |\n| 165~170         | 30                       |\n| 170~175         | 24                       |\n| 175~180         | 10                       |\n| 180~185         | 6                         |"
        ],
        "question": "What is the relative frequency of the height range \"170 ~175\" in the student height distribution for the class?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "374"
    },
    "375": {
        "tables": [],
        "question": "Calculate the forward price of a 6-month forward contract on a bond that is priced at $1,058, has a biannual coupon payment of $30 and had its last payment three months ago, given a continuous interest rate of 5%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "375"
    },
    "376": {
        "tables": [],
        "question": "The Lawson Company has recently paid a dividend of $1.75 per share. If the necessary annual return rate is 12.3 percent and dividends are predicted to consistently grow at 9.2 percent per year without end, what is the intrinsic worth of Lawson Company stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "376"
    },
    "377": {
        "tables": [
            "|        | Spot Rate | Expected Spot Rate in One Year |\n|--------|-----------|------------------------|\n| USD/EUR| 1.3960    | 1.3860                 |\n| USD/CAD| 1.0110    | 1.0300                 |\n| EUR/GBP| 1.2850    | 1.2790                 |"
        ],
        "question": "According to a study carried out by a broker, what is the predicted increase (%) in value of the Canadian dollar (CAD) compared to the British pound (GBP)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "377"
    },
    "378": {
        "tables": [
            "| Bond | Coupon Rate | Time-to-Maturity |\n|------|-------------|------------------|\n| A    | 5%          | 2 years          |\n| B    | 3%          | 2 years          |"
        ],
        "question": "Considering two bonds that pay interest annually, what is the price difference between Bond 1 and Bond 2 per 100 of par value at a market discount rate of 4%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "378"
    },
    "379": {
        "tables": [
            "|                     | Bond A       | Bond B       | Bond C       |\n|---------------------|--------------|--------------|--------------|\n| Time to maturity (years) | 10     | 6     | 4     |\n| Par value         | $10,000,000  | $10,000,000  | $10,000,000  |\n| Market value      | $9,323,381   | $11,189,092  | $10,000,000  |\n| Annualized modified duration  | 7.3105  | 4.6880  | 3.4370  |"
        ],
        "question": "Taking into account the data on three securities: Security X, Security Y, and Security Z. A dividend income portfolio includes Security X and Security Y. If an additional $10 million is invested into the portfolio to acquire Security Z, what will be the yearly modified duration of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "379"
    },
    "380": {
        "tables": [],
        "question": "If the base value is $20 at expiration, the strike price is $18, what is the worth of the European put?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "380"
    },
    "381": {
        "tables": [
            "|   |   |\n|---|---|\n| Net income  | \\$1,000,000.00  |\n| Debt outstanding with a coupon rate of 4%  | \\$5,000,000.00  |\n| Preferred stocks with dividend rate of 4%  | \\$1,000,000.00  |\n| Tax rate  | 35%  |\n| Average weighted number of shares issued  | 500,000  |"
        ],
        "question": "A researcher gathered information about a corporation wherein the preferred shares can be transformed into 10,000 ordinary shares and the debt cannot be converted. What is the diluted earnings per share?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "381"
    },
    "382": {
        "tables": [],
        "question": "Assuming there are 225 days in a year, what is the highest number of daily losses that can go beyond the 1-day 99% VaR acceptable in a 1-year backtest for a financial risk analyst to determine, with 95% certainty, that the model is properly calibrated?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "382"
    },
    "383": {
        "tables": [
            "| estimated beta of TMT Inc. against the S&P 500 Index | 1.4   |\n|------------------------------------------------|-------|\n| 10-year Treasury bond yield                             | 3.5% |\n| Return on S&P 500 Index used as a proxy for the market | 8%   |"
        ],
        "question": "John is contemplating incorporating ABC Corp. into his portfolio. The last dividend payment of the company was 1.45 per share. He observes that the company's dividends have experienced an average growth rate of 6 percent. Using the data provided below, could you calculate the stock\u2019s value of ABC Corp.?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "383"
    },
    "384": {
        "tables": [],
        "question": "In 2016, the quarterly returns for the S&P 500 were 8%, -5%, 3% and 1%. What is the S&P 500's quarterly geometric mean return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "384"
    },
    "385": {
        "tables": [],
        "question": "A researcher establishes that 60% of all US retirement funds possess hedge funds. In assessing this probability, a random array of 10 US retirement funds is selected. Utilizing the binomial probability function, what is the likelihood that precisely 6 of the 10 organizations in the group possess hedge funds?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "385"
    },
    "386": {
        "tables": [],
        "question": "A finance expert is working out the beta for a collection of large-cap utility firm shares. They establish that the correlation between the portfolio's return and the benchmark's return stands at 0.7, the portfolio return's volatility is 6.5%, and the benchmark return's volatility is 5.0%. What is the portfolio's beta in relation to its benchmark?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "386"
    },
    "387": {
        "tables": [],
        "question": "What are the odds of Jack Frost correctly answering more than 3 questions on a challenging multiple choice test that contains 5 questions, each with four nearly identical options, if he's answering randomly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "387"
    },
    "388": {
        "tables": [],
        "question": "A financial consultant is studying the potential anticipated returns of a novel fund created to imitate the directional shifts of the China Shanghai Composite Stock Market Index (SHANGHAI), but with double the volatility of the index. SHANGHAI has an anticipated yearly return of 7.6% and a volatility of 14.0%, and the risk-free rate is 3.0% annually. If the correlation between the fund\u2019s returns and the index's returns is 1.0, what would be the projected return of the fund according to the CAPM?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "388"
    },
    "389": {
        "tables": [],
        "question": "The bond's clean price was set at $1,000. The transaction occurred between coupon dates, with accrued interest equating to $35.50 per bond. What is the bond's dirty price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "389"
    },
    "390": {
        "tables": [
            "| | Cdn $ millions |\n| --- | --- |\n| Cash flow from operating activities | 105.9 |\n| Cash flow from investing activities | (11.8) |\n| Cash flow from financing activities | 46.5 |\n| Net change in cash for the year | 140.6 |\n| Interest paid (included in CFO) | 22.4 |\n| Taxes paid (tax rate of 30%) | 18.0 |\n| Total debt, end of year | 512.8 |"
        ],
        "question": "According to the data collected by a researcher, what is the company's cash flow debt coverage ratio for this year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "390"
    },
    "391": {
        "tables": [],
        "question": "On 1 January 2015, a corporation releases $1,000,000 nominal value of 10-year bonds, when the market interest rate for bonds with similar risk and terms is 5%. These bonds yield 6% interest yearly on 31 December. What is the recorded value of these outstanding bonds on the balance sheet at the time they were issued?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "391"
    },
    "392": {
        "tables": [
            "| Year | End_of-Year Payment |\n|------|---------------------|\n| 1    | $ 100,000           |\n| 2    | $ 150,000           |\n| 3    | $ 200,000           |"
        ],
        "question": "A freelancer commences a job today which is projected to go on for three years. If he anticipates investing these sums at an annual interest rate of 3%, compounded annually until his retirement a decade from now, what is the worth after 10 years, keeping in mind his payment plan encompasses the following?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "392"
    },
    "393": {
        "tables": [
            "| Position (par value) | $100,000,000 |\n|---|---|\n| Flat price | 97.1251 |\n| Accrued interest | 0.4392 |\n| Macaulay duration | 8.586 |\n| Annual modified duration | 8.450 |"
        ],
        "question": "Based on the data collected by a researcher, what is the monetary duration of the bond position?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "393"
    },
    "394": {
        "tables": [],
        "question": "The Second-Hand Bookshop run by Susan generates its financial statements in line with IFRS. Inventory was obtained for \u00a31 million and afterwards reduced to \u00a3550,000. However, it was later found out that one of the books is a rare collector's piece, and the inventory is now approximated to be worth \u00a33 million. The inventory is probably listed on the balance sheet at:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "394"
    },
    "395": {
        "tables": [],
        "question": "Assuming that there is no need for an industry risk adjustment, use the build-up method to determine the equity discount rate for a small business. Here's the information you need:\u2022 5.0 percent is the equity risk premium\u2022 The mid-cap equity risk premium is 3.5 percent\u2022 A small stock risk premium is 4.2 percent\u2022 The income return on long-term bonds is 5.1 percent\u2022 The total return on intermediate-term bonds stands at 5.3 percent\u2022 3.0 percent is the company-specific risk premium\u2022 As of the valuation date, the 20-year Treasury bond yield is 4.5 percent.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "395"
    },
    "396": {
        "tables": [],
        "question": "In an average year, 5% of all enterprise leaders are dismissed due to \"performance\" issues. Presume that the leader's performance is evaluated on the basis of share performance and that 50% of shares earn above-average returns or showcase \"good\" performance. From observed data, 30% of all enterprise leaders who were dismissed demonstrated \"good\" performance. Applying Bayes' theorem, what is the likelihood that an enterprise leader will be dismissed given \"good\" performance? (Hint, let P(A) be the likelihood of an enterprise leader being dismissed, P(B) be the probability of a \"good\" performance rating, P(B I A) represent the possibility of a \"good\" performance rating given that the enterprise leader was dismissed, and P(A I B) signify the probability of the enterprise leader being dismissed given a \"good\" performance rating.)",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "396"
    },
    "397": {
        "tables": [
            "| Time-to-Maturity | Spot Rate |\n| --- | --- |\n| 1-year | 5% |\n| 2-year | 6% |"
        ],
        "question": "The maturity time for Bond B is 2 years with annual interest payments and an 8% coupon rate. The spot rates are given as follows: Compute the cost of Bond B using these spot rates.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "397"
    },
    "398": {
        "tables": [],
        "question": "Let's say a random variable follows a standard distribution with a mean value of 80 and a deviation standard of 24. What is the percentage of this distribution that does not lie between 32 and 116?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "398"
    },
    "399": {
        "tables": [
            "| Items | price$ |\n| --- | --- |\n| replacement cost | 50 |\n| original costs | 41 |\n| selling price | 45 |\n| normal profit margin | 10% |\n| selling costs | 5 |"
        ],
        "question": "Under US GAAP, how should the cost of running shoes be recorded by the Goodluck Company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "399"
    },
    "400": {
        "tables": [],
        "question": "A portfolio manager is looking to hedge the interest risk of a bond position with a 5-year key rate exposure of $9.84. What would be the amount of face value employed to hedge if a hedge instrument with a similar 5-year key rate exposure of 4.12 per $100 of face value can be utilized?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "400"
    },
    "401": {
        "tables": [],
        "question": "What is the bond-equivalent yield if the yield to maturity on a yearly-payment bond is 7.75%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "401"
    },
    "402": {
        "tables": [
            "| Trade # | Time     | Trade Price | Trade Size | Bid Price | Ask Price |\n|---------|----------|-------------|------------|-----------|-----------|\n| 1       | 9.45 a.m.| $25.20      | 1,200      | $25.17    | $25.20    |\n| 2       | 9.55 a.m.| $25.22      | 1,300      | $25.19    | $25.22    |\n| 3       | 11.30 a.m| $25.27      | 2,500      | $25.22    | $25.26    |"
        ],
        "question": "Based on Exhibit 1, what is the market impact per share relating to Trade 2 if Smith talks about a market buy order for 5,000 shares of an illiquid stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "402"
    },
    "403": {
        "tables": [
            "| Revenue              | $1,000,000 |\n|----------------------|------------|\n| Returns of goods sold| $100,000   |\n| Cash collected       | $800,000   |\n| Cost of goods sold   | $700,000   |"
        ],
        "question": "Under the accrual basis of accounting, how much net revenue would be reported on the 2009 income statement of a company called Fairplay, considering that it was their initial business year and this is the information they have about the sale of their products?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "403"
    },
    "404": {
        "tables": [
            "|                  | 2015  | 2014  |\n|------------------|-------|-------|\n| COGS             |50,800 |48,500 |\n| Ending inventories|10,550|10,000 |\n| LIFO reserve     |4,320  |2,600  |"
        ],
        "question": "What is the price of goods sold in 2015 employing the FIFO technique for a business that usually uses the LIFO strategy, as stated in pounds sterling?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "404"
    },
    "405": {
        "tables": [],
        "question": "Let's say :P(occasion X happens)=15%, P(occasion Y happens)=35%, and P(occasion Z happens)=20%. If the occasions X, Y and Z are all not dependent on each other, what is the P(occasion X or occasion Z happens)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "405"
    },
    "406": {
        "tables": [
            "|                         |                      |\n|-------------------------|----------------------|\n| Seagraves Supply Company Operating Cash Flow - Direct Method For the year ended December 31, 20X7 |                      |\n| Cash paid to suppliers  | 265,866              |\n| Cash paid for operating expenses | 124,784             |\n| Cash paid for interest  | 4,326                |\n| Cash paid for taxes     | 14,956               |\n| Operating cash flow     | $ 20,048             |"
        ],
        "question": "Using the direct method, determine the cash received from the client:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "406"
    },
    "407": {
        "tables": [],
        "question": "When we apply vertical common-size analysis to the following financial data from a different business entity: Total liabilities $19 million, Total stockholders\u2019 equity $25 million, what is the percentage of total liabilities represented on the balance sheet?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "407"
    },
    "408": {
        "tables": [
            "| Date     | Closing Price |\n|----------|---------------|\n| 1 August | 112           |\n| 8 August | 160           |\n| 15 August| 120           |"
        ],
        "question": "What is the continuously compounded return of shares for Riddle Inc between August 1 and August 15, taking into account the weekly closing prices of Riddle Inc's shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "408"
    },
    "409": {
        "tables": [],
        "question": "What's the value of Corporation Z, which is currently being appraised by John using the dividend discount model? The latest dividend is $1.0 per share with a required return rate of 7.5%. It is anticipated to have a high growth rate of 5% for the initial three years, and thereafter, the dividend growth rate will be 3% annually indefinitely.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "409"
    },
    "410": {
        "tables": [],
        "question": "Assume a share that has daily returns following a random walk, with an annualized volatility of 34%. Can you calculate the weekly volatility of this share assuming there are 52 weeks in a year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "410"
    },
    "411": {
        "tables": [],
        "question": "What are the odds for an event X if the probability for X is 14% (i.e., P(X) = 14%)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "411"
    },
    "412": {
        "tables": [],
        "question": "Suppose that S0=400 and the risk-free rate stands at 5%. Figure out the forward price of a 6-month forward contract with continuous compounding.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "412"
    },
    "413": {
        "tables": [
            "| Security | Beginning($) | End($) | Shares |\n|----------|--------------|--------|--------|\n| G        | 15.00        | 17.00  | 500    |\n| H        | 35.00        | 33.00  | 300    |\n| 1        | 37.00        | 40.00  | 200    |"
        ],
        "question": "Recently, an analyst named Benedict from a investment firm collected data for a value-weighted index consisting of securities G,H,I. What was the return of the value-weighted index during this period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "413"
    },
    "414": {
        "tables": [
            "|     | $ Millions |\n| --- | --- |\n| Short-term interest-bearing debt | 1,258 |\n| Long-term interest-bearing debt | 321 |\n| Total shareholder's equity | 4,285 |\n| Total assets | 8,750 |\n| EBIT | 2,504 |\n| Interest payments | 52 |"
        ],
        "question": "What is the corporation's debt-to-assets ratio based on the data compiled by an analyst reviewing the corporation's solvency?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "414"
    },
    "415": {
        "tables": [
            "| Next year's earnings per share | $3.00 |\n|---------------------------|-------|\n| Return on equity         | 12.5% |\n| Dividend payout ratio    | 60%   |\n| Required return on shares| 10%   |"
        ],
        "question": "A financier collects the same information to calculate the intrinsic worth of a corporation\u2019s stock using the justified forward P/E method. What is the intrinsic value per share?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "415"
    },
    "416": {
        "tables": [],
        "question": "A fund manager wants to understand the systematic risk of a stock portfolio and thus estimates the following linear regression: RPt\u2212RF=\u03b1P+\u03b2P[RMt\u2212RF]+\u03b5PtRPt\u200b\u2212RF\u200b=\u03b1P\u200b+\u03b2P\u200b[RMt\u200b\u2212RF\u200b]+\u03b5Pt\u200b, where RPtRPt\u200b represents the return of the portfolio at time t, RMtRMt\u200b represents the return of the market portfolio at time t, and RFRFRF\u200b is the risk-free rate, remaining constant throughout. Consider that \u03b1 is 0.008, \u03b2 is 0.977, \u03c3(RP)\\sigma{(R_P)}\u03c3(RP\u200b) is 0.167, and \u03c3(RM)\\sigma{(R_M)}\u03c3(RM\u200b) is 0.156. What is the likely coefficient of determination in this regression?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "416"
    },
    "417": {
        "tables": [
            "| Item | Current Period |\n| --- | --- |\n| Total assets | 24,130 |\n| Total liabilities | 17,560 |\n| Total equity | 6,570 |\n| Total pension cost | 96 |\n| Pension contribution | 66 |\n| Financing cash flow | 2,323 |\n| Operating cash flow | -1,087 |\n| Effective tax rate | 30% |",
            "|   Item                    | 100-bp Increase | 100-bp Decrease |\n|---------------------------|-----------------|-----------------|\n| Benefit obligation change | $93             | -$76            |\n| Benefit expense change    | $12             | -$10            |"
        ],
        "question": "Alexander Boone, a senior portfolio manager, collaborates with Rachel Stevens, a junior analyst. They are assessing the financial records of Corporation ABC (ABC), focusing on post-employment rewards. Stevens modifies the balance sheet and cash flow statement details presented in Exhibit 2 to more accurately represent the financial aspect of certain pension plan related items. Finally, Stevens scrutinizes the details present in Exhibit 3 and determines the effect of a 100-basis-point hike in health care inflation on ABC's debt-to-equity ratio. Considering Exhibits 2 and 3, alongside Boone's projection about future health care inflation, what should the debt-to-equity ratio computed by Stevens for ABC be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "417"
    },
    "418": {
        "tables": [
            "| For Year Ending 31 December | 2012         |\n|----------------------------|------------|\n| Revenues                   | $6,456     |\n| Earnings before interest, taxes, depreciation, and amortization (EBITDA)   | 1,349     |\n| Depreciation expense       | 243        |\n| Operating income           | 1,106      |\n| Interest expense           | 186        |\n| Pretax income              | 920        |\n| Income tax (32%)           | 294        |\n| Net income                 | $626       |\n|                            |            |\n| Number of outstanding shares (millions) | 411     |\n| 2012 earnings per share    | $1.52      |\n| 2012 dividends paid (millions) | 148     |\n| 2012 dividends per share   | 0.36       |\n| 2012 fixed capital investment (millions) | 535  |\n|                            |            |\n| Cost of equity             | 12.0%      |\n| Weighted average cost of capital (WACC) | 9.0%  |",
            "|                                             | 2012  |       | 2011  |\n|---------------------------------------------|-------|-------|-------|\n| **Assets**                                  |       |       |       |\n| Cash and cash equivalents                   | $32   |       | $21   |\n| Accounts receivable                         | 413   |       | 417   |\n| Inventories                                 | 709   |       | 638   |\n| Other current assets                        | 136   |       | 123   |\n| Total current assets                        | $1,290|       | $1,199|\n|                                             |       |       |       |\n| **Liabilities and Stockholders' Equity**   |       |       |       |\n| Current liabilities                         | $2,783|       | $2,678|\n| Long-term debt                              | 2,249 |       | 2,449 |\n| Common stockholders' equity                 | 1,072 |       | 594   |\n| Total liabilities and stockholders' equity  | $6,104|       | $5,721|"
        ],
        "question": "Given the financial documents in Exhibits 1 and 2, Barnes' fiscal year concludes on December 31st. If the 2012 FCFF is equal to $500 million, what would be Barnes' FCFE ($ millions) for 2012, based on the information found in Exhibits 1 and 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "418"
    },
    "419": {
        "tables": [
            "| | |\n| --- | --- |\n| Consumption function | C = 2,500+0.80*(Y-T) |\n| Investment function | l= 500+0.30*Y-25*r |\n| Government spending | G = 1,000 |\n| Tax function | T=-250+0.30*Y |\n| *Y* : Aggregate income *r*:Real interest rate | |"
        ],
        "question": "If the real interest rate in a basic economy with no foreign trade stands at 3% and there's an upsurge in state expenditure to 2,000, what will be the surge in overall earnings?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "419"
    },
    "420": {
        "tables": [],
        "question": "A customer buys a 6-year bond at face value with an 8% coupon rate, where the interest is disbursed once a year. If the customer decides to sell the bond at the close of the 5th year, and the prevailing market interest rate is 7% at that moment. Can you determine the capital gain or loss?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "420"
    },
    "421": {
        "tables": [
            "| Trades | Execution Price | Shares Executed |\n|--------|-----------------|-----------------|\n| Trade 1| $40.75 |    10,000     |\n| Trade 2| $41.25 |    30,000     |\n| Trade 3| $41.50 |    20,000     |\n| Trade 4| $41.75 |    30,000     |\n| Total  |        |    90,000     |"
        ],
        "question": "The following day, Morris instructs Blue to go over their analysis on XYZ Corporation. Blue\u2019s evaluation leads her to believe that the company's shares are undervalued. She shares her discoveries with Morris, who then directs her at 10 a.m. to purchase 120,000 shares at a price of $40.00 through a limit order of $42.00. The buy-side trader proceeds with the market execution when the cost is at $40.50. The sole charge is a commission of $0.02 per share. By the time the market closes, 90,000 shares from the order were bought, with XYZ Corporation closing at $42.50. The transaction was carried out at an average cost of $41.42, with detailed information about the executed trades in Exhibit 1. Based on the details in Exhibit 1, what is the execution cost for buying the 90,000 shares of XYZ Corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "421"
    },
    "422": {
        "tables": [
            "|                      | as of 31 December |       |\n|----------------------|-------------------|-------|\n| Assets               | 2009              | 2008  |\n| Cash and cash equivalents     | 1,884             | 1,280 |\n| Other financial assets        | 486               | 588   |\n| Trade and other receivables   | 2,546             | 3,178 |\n| Other non-financial assets    | 147               | 126   |\n| Tax assets                    | 192               | 399   |\n| Total  current assets         | 5,255             | 5,571 |",
            "|                         | as of 31 December |\n|------------------------ |---------- |---------- |\n| Assets                  | 2009      | 2008      |\n| Total non-current assets| 8,119     | 3,329     |\n| Total assets            | 13,374    | 13,900    |\n| Equity and Liabilities  |           |           |\n| Total current liabilities| 3,416     | 5,824     |\n| Total non-current liabilities| 1,467 | 905       |\n| Total liabilities       | 4,883     | 6,729     |\n| Total equity            | 8,491     | 7,171     |\n| Equity and liabilities  | 13,374    | 13,900    |"
        ],
        "question": "From the data provided in Exhibit 4, what's the nearest quick ratio for the Oracle Corporation as of December 31, 2009? Exhibit 4. Oracle Corporation Consolidated Statements of Financial Position (Excerpt: Current Assets Detail)(In millions of \u20ac)",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "422"
    },
    "423": {
        "tables": [],
        "question": "An executive is interested in determining the cost of a put option using a one-period binomial tree. Here are the relevant details: The existing stock price is $30, while the exercise price of the put option is also $30. The up factor is valued at 1.12 and the down factor stands at 0.92. The risk-free rate is set at 5%. What is the hedge ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "423"
    },
    "424": {
        "tables": [],
        "question": "Using the two-period binomial model, Matt estimates the value of a two-year American-style call option on Alpha Corporation's common shares. The parameters are as follows: the present stock price sits at 96, while the call option's exercise price is 70. The up factor (u) equates to 1.20, with the down factor (d) at 0.83. The risk-free rate of return, calculated with continuous compounding, is 4%. How much is the option worth?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "424"
    },
    "425": {
        "tables": [],
        "question": "If a financier utilizes a multivariate normal distribution to accurately model the returns on 3 stocks, how many parameters does he need to determine at the outset?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "425"
    },
    "426": {
        "tables": [],
        "question": "What's the chance of a pupil correctly answering less than two questions on a multiple-choice test that has four choices for a total of six questions, by just guessing?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "426"
    },
    "427": {
        "tables": [],
        "question": "The head credit analyst of Vigilant Consultants recently stated that the five-year bond of Atlas Co. is currently yielding 7% and a similar CDS contract has a credit spread of 4.25%. Given that the MRR is 2.5%, Lopez advised performing a basis trade to exploit the pricing of Atlas Co.'s bonds and CDS. The basis trade would involve buying both the bond and the CDS contract. Considering the basis trade for Atlas Co., what will be the gain if convergence happens in the bond and CDS markets?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "427"
    },
    "428": {
        "tables": [],
        "question": "Think about the purchaser of a 6x9 FRA. The contract rate is 6.35% on a notional sum of $10 million. Determine the settlement sum for the vendor if the settlement rate is 6.85%. Assume a 30/360-day count basis.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "428"
    },
    "429": {
        "tables": [],
        "question": "A task has been assigned to Jack, a consultant for a global investment firm, to evaluate the worth of an advanced technology enterprise. The collected information about the enterprise is as follows: It has 500 million ordinary shares in circulation. It has a current share price of $7. The enterprise has a declared debt of $3500 million, and its market value equals this figure. The enterprise has reported a cash holding of $1500 million. Furthermore, it has $50 million in preferred equity and $100 million in short-term investments. For this year, its reported net sales are $3000 million. With regard to the information provided, what is the enterprise EV to sales ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "429"
    },
    "430": {
        "tables": [],
        "question": "What is the discount rate if the cash price stands at 97.63 and there are 60 calendar days left on the life of the government bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "430"
    },
    "431": {
        "tables": [],
        "question": "What is the present value of a 10-year annuity due with yearly payments of $2,000 and an annual compound interest rate of 5%, if the present value of a 10-year regular annuity with the same payments and interest rate is $15,443.47?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "431"
    },
    "432": {
        "tables": [],
        "question": "If a 2-year zero-coupon bond's present cost is $0.88035 and its face value is $1, then what is the 2-year spot rate given risk-neutral investors?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "432"
    },
    "433": {
        "tables": [
            "| Year | Spot Rate | Forward Rate |\n|------|-----------|--------------|\n| 1    | 3.00%     |              |\n| 2    | 4.00%     | 5.01%        |\n| 3    | 5.00%     | 7.03%        |\n| 4    | 6.00%     | 9.06%        |\n| 5    | 7.00%     | 11.10%       |"
        ],
        "question": "John acknowledges that this specific US Treasury bond might not be the best choice for investors seeking zero reinvestment risk. He proposes a different vehicle, namely a US Treasury zero-coupon note. This note is fresh off the press, has a term of five years, and is valued at $71.30 (with a face value of $100.00) to yield 7.00% at maturity. John explains that some investors might choose to buy this Treasury zero-coupon note now and keep it until it matures in five years. He also mentions that there are investors who might buy this Treasury zero-coupon note in two years and then keep it for three years until it matures. John requests that Bird calculate the forward rate that would make investors indifferent to either acquiring the Treasury zero-coupon note now or buying it two years down the line. Current spot rates and extrapolated one year forward rates are available in Exhibit 1. Using the data in Exhibit 1, what forward rate would make an",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "433"
    },
    "434": {
        "tables": [
            "|                         |          |                       |         |\n|-------------------------|----------|-----------------------|---------|\n|Price per Share and Shares Outstanding|        ||             |\n|Current market price per share  | $15.0  |    |            |\n|Number of shares outstanding(millions)  | 1.0 |    |            |\n|Balance Sheet Data As of 2012 ($ millions)   |     |            ||\n|Cash and cash equivalents | 0.4 | Current liabilities    | 1.0       |\n|Accounts receivable | 1.2 | Long-term liabilities | 61.0   |\n|Inventories | 40.0 |  |  |\n|Investment securities |   6.0 |Common shareholders' equity | 15.6 |\n|Property, plant, and equipment | 30.0 | | |\n|Total assets  |  77.6 |Total liabilities and equity | 77.6 |"
        ],
        "question": "If a researcher predicts that the market worth of the corporation's investment securities is 115% of their recorded value, what is the corporation's price to adjusted book value ratio, taking into account the corporation's market data and balance sheet details at the close of the fiscal year 2012?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "434"
    },
    "435": {
        "tables": [],
        "question": "A financial instrument has a beta of 1.30. If the risk-free interest rate stands at 3% and the market's expected return is 8%, what is the anticipated return of this particular financial instrument, using the capital asset pricing model (CAPM)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "435"
    },
    "436": {
        "tables": [],
        "question": "The Sakamoto Company has recently distributed a dividend of \u00a5450 for each share. It is anticipated that the annual dividends will rise at a rate of 4 percent yearly for the forthcoming four years. By the conclusion of these four years, the Sakamoto Company's shares are predicted to have a selling price of \u00a59000. If a 12 percent return rate is necessary, what would be the fundamental value of a share of Sakamoto Company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "436"
    },
    "437": {
        "tables": [
            "| Security | Expected Annual Return(%) | Expected Standard Deviation(%) |\n|----------|--------------------------|--------------------------------|\n| 1        | 16                       | 20                             |\n| 2        | 12                       | 20                             |"
        ],
        "question": "If a fund manager constructs a portfolio with two securities that has a projected return of 15%, what is the percentage invested in Security1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "437"
    },
    "438": {
        "tables": [],
        "question": "A fund manager employs a valuation model to calculate the worth of a bond portfolio at USD 125.00 million when the term structure is level. With the same model, the fund manager anticipates that the portfolio's value would surge to USD 127.70 million if all interest rates reduce by 20 bps and would drop to USD 122.20 million if all interest rates increase by 20 bps. Given these assumptions, what is the effective duration of the bond portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "438"
    },
    "439": {
        "tables": [],
        "question": "The current trading price of ABC shares is $50. A 1-year put option on these shares, with an exercise price of $50, is valued at $2.08. Given a continuously compounded risk-free rate of 4%, what would be the value of a call option that has the same exercise price and date?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "439"
    },
    "440": {
        "tables": [
            "|             | Coefficient | Std. Error | t-Statistic |\n|-------------|-------------|------------|-------------|\n| Sample Size | 150         |            |             |\n| Intercept   | 4990.519    | 2280.093   | 2.189       |\n| P           | -35.666     | 17.871     | -1.996      |\n| 1           | 6.193       | 1.652      | 3.749       |"
        ],
        "question": "As an owner of a supermarket, David is keen on using mathematical models to tackle various issues. Lately, he wishes to examine the correlation between the quantity of product demand (V), product pricing (P), and customer earning levels (I). The quantity of product demand acts as the dependent variable while the other two serve as independent variables. After conducting a multiple regression analysis, he obtained the following results: What is the upper confidence interval of the regression coefficient for the customer's earning level at 0.1 level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "440"
    },
    "441": {
        "tables": [],
        "question": "A client requests John to appraise the real estate with the presumption that the net operating income amounts to $125,000, the discount rate is 11%, and the growth rate stands at 6%. Choosing the direct capitalization approach to determine the value, what is the estimated worth of the multifamily property according to John's calculation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "441"
    },
    "442": {
        "tables": [],
        "question": "A trader has set up a bearish option approach using three identical maturity put options. He purchases two $46 puts for $5 each, and then sells one $53 put for $8 and one $37 put for $3. If the underlying asset is valued at $32 at maturity, what is the ultimate gain of this strategy?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "442"
    },
    "443": {
        "tables": [],
        "question": "Let's think about this linear regression equation: Y=a+bX+e. If a equals 0.05, b equals 1.2, standard deviation of Y equals 0.26, and standard deviation of e equals 0.1, what would be the correlation between X and Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "443"
    },
    "444": {
        "tables": [],
        "question": "Enterprise B releases 20 unique bonds and the risk of default for Enterprise B is 2%. The portfolio, made up of the 20 bonds, has a notional value of $1,000,000. Assuming that the default correlation of the 20 bonds is equal to 1 and the recovery rate is 0%, what is the credit VaR of the portfolio at the 99% confidence level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "444"
    },
    "445": {
        "tables": [
            "|                               |        |\n|-------------------------------|--------|\n| Straight bond value           | \u00a3 978  |\n| Value of embedded issuer call option | \u00a3 43   |\n| Value of embedded investor put option | \u00a3 26   |\n| Value of embedded call option on issuer's stock | \u00a3 147 |\n| Conversion price              | \u00a3 12.50|\n| Current common stock share price | \u00a3 11.75|"
        ],
        "question": "Based on the given data about the ZX bond, if ZX bond is identified as a callable-putable convertible bond, what would be the arbitrage-free value of this ZX bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "445"
    },
    "446": {
        "tables": [],
        "question": "If a business has an unprotected credit line and needs to keep its EBIT-to-interest coverage ratio above 2.0. With EBIT expected to be within the range of $36 million to $48 million, all values equally probable, what's the likelihood that the EBIT/interest would exceed 2.0 if the projected annual interest charge is $20 million?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "446"
    },
    "447": {
        "tables": [
            "|       | Volatility (%) |        | Volatility (%) |\n|-------|--------------|--------|--------------|\n| Fund 1 | 9.81         | Fund 8  | 13.99        |\n| Fund 2 | 10.12       | Fund 9  | 14.47        |\n| Fund 3 | 10.84       | Fund 10 | 14.85        |\n| Fund 4 | 11.33       | Fund 11 | 15.00        |\n| Fund 5 | 12.25       | Fund 12 | 17.36        |\n| Fund 6 | 13.39       | Fund 13 | 17.98        |\n| Fund 7 | 13.42       |         |              |"
        ],
        "question": "What is the approximate value of the first quintile, considering the volatility of a chain of funds that are part of the same group, arranged in rising order?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "447"
    },
    "448": {
        "tables": [
            "| Asset Class             | Global Equity | Global Bonds | Residual Risk (%) |\n|-------------------------|---------------|--------------|-------------------|\n| U.S. real estate equities | 0.60          | 0.15         | 4.4               |\n| Global timber equities  | 0.45          | 0.20         | 3.9               |\n\nAdditional Information\n\n| Variances             | 0.025  | 0.0014 |       |\n|-----------------------|--------|--------|-------|\n\nCorrelation between global equities and global bonds:  0.33"
        ],
        "question": "Reviewing the RiteVal data from Exhibit 1, and adopting the two-factor model preferred by Cortez, where global equity and global bonds are the two primary drivers of return for all asset classes, what is the standard deviation of U.S. real estate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "448"
    },
    "449": {
        "tables": [],
        "question": "In 2009, Telecom Corporation had an average of 1,000,000 shares in circulation. During the same year, the company also had 10,000 options in circulation with exercise prices of $10 each. The stock's average price during 2009 was $15. To calculate the diluted earnings per share, how many shares should be considered in the denominator?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "449"
    },
    "450": {
        "tables": [
            "| Year | Net Return (%) |\n|------|----------------|\n| 2008 | -34.8          |\n| 2009 | 32.2           |\n| 2010 | 11.1           |\n| 2011 | -1.4           |"
        ],
        "question": "What would be the required 2012 return to get a trailing five-year geometric mean annualized return of 5% by the end of 2012, assuming a wealth management company has the following yearly returns in their US large-cap equity portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "450"
    },
    "451": {
        "tables": [
            "| End of Year | Call Price |\n|-------------|------------|\n| 3           | 102        |\n| 4           | 101        |\n| 5           | 100        |"
        ],
        "question": "A bond that has 5 years left before maturity is presently being sold for 101 for every 100 of par value. This bond provides a 6% coupon rate, with interest paid twice a year. What is the bond's yearly yield-to-maturity, bearing in mind the bond can first be redeemed after 3 years, with further redemptions possible based on the successive coupon dates, according to the schedule provided?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "451"
    },
    "452": {
        "tables": [],
        "question": "Management at S&Q Enterprises is given the option to receive options on common stocks. The options necessitate a service period of 4 years post the grant date for vesting. S&Q follows a financial year-end of December 31. The enterprise on July 1, 2014, gave out 61,600 options. The market price of the options on the date of grant was \u00a30.5. What is the chunk of the compensation expense associated with the stock option granted in 2014?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "452"
    },
    "453": {
        "tables": [],
        "question": "Leaving out the impacts of compound interest, what would be the predicted overall cost of keeping an investment for nine months in the ETF, keeping in mind an ETF with these management fees and trading expenses: An annual management fee of 0.40%, round-trip trading fees of 0.55%, and a bid-offer spread of 0.20% on buying and selling?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "453"
    },
    "454": {
        "tables": [
            "| ($ thousands) | 2013 | 2012 |\n|---|---|---|\n|Deferred tax assets| 200 | 160 |\n|Deferred tax liabilities| -450 | -360 |\n|Net deferred tax liabilities| -250 | -200 |\n|Earnings before taxes| 4,000 | 3,800 |\n|Income taxes at the statutory rate| 1,200 | 1,140 |\n|Income tax payable (Current income tax expense)| 1,000 | 900 |"
        ],
        "question": "What is the income tax expense (in thousands) in 2013 for the corporation, based on the provided data about the corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "454"
    },
    "455": {
        "tables": [],
        "question": "If corporation AR has a turnover that is 3 times and its sales amount to $5000, could you compute the corporation's AR?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "455"
    },
    "456": {
        "tables": [
            "|       | Fund Y(%) |\n|-------|-----------|\n| Year 1|   19.5    |\n| Year 2|   -1.9    |\n| Year 3|   19.7    |\n| Year 4|   35.0    |\n| Year 5|   5.7     |"
        ],
        "question": "The accompanying display presents the yearly returns for Investment Pool X. What is the geometric mean return for Investment Pool X?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "456"
    },
    "457": {
        "tables": [],
        "question": "Assuming a yearly discount rate of 6.5%, compounded monthly, what is the present worth of a financial agreement that promises to pay \u20ac1,200 each month for a period of five years, with the first payment being done instantly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "457"
    },
    "458": {
        "tables": [],
        "question": "What is the standard deviation of the average weekly return if an investment analyst is estimating the VaR for a portfolio using a data set of 25 weekly returns, with an average weekly return of 7% and a standard deviation for the return series of 15%, given that the weekly returns are independent and identically distributed?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "458"
    },
    "459": {
        "tables": [],
        "question": "Financial institution C provides an unsecured loan worth $10 million to enterprise D. Based on the forecasted data, the likelihood of enterprise D defaulting is 4% and the recovery rate stands at 40%. What is the credit reserve that Financial institution C should maintain equal to the anticipated credit loss?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "459"
    },
    "460": {
        "tables": [
            "|                         | $ millions |\n|-------------------------|-----------|\n| Net Income              | 485       |\n| Depreciation expense    | 270       |\n| Increase in accounts receivable | 59        |\n| Increase in accounts payable | 33        |\n| Purchase of fixed assets | 523       |\n| Increase in notes payable | 15        |\n| Increase in long-term debt | 60        |"
        ],
        "question": "Based on the financial report, what is the FCFE for Company P?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "460"
    },
    "461": {
        "tables": [],
        "question": "What is the lower limit of a 99% confidence interval for the population mean if you have a sample size of 65, a mean of 31, and a variance of 529 from a normally distributed population?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "461"
    },
    "462": {
        "tables": [
            "|                      | Book value | Fair value |\n|----------------------|------------|------------|\n| Plant & equipment    | 2500       | 2800       |\n| Total assets         | 2950       | 3250       |\n| Liabilities          | 1550       | 1550       |\n| Net assets           | 1400       | 1700       |"
        ],
        "question": "On the 1st of January 2019, ABC corporation purchased a 20% stake with voting rights in XYZ Ltd. for $400 million. ABC corporation has a seat on XYZ's board of directors and has a say in their policymaking. An analyst named Anne collects specific financial data for XYZ in 2019. The plant and equipment are depreciated on a linear basis and have a remaining lifespan of 10 years. From the Exhibit mentioned, what is the goodwill included in ABC\u2019s acquisition of XYZ?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "462"
    },
    "463": {
        "tables": [],
        "question": "If rolling the dice, the likelihood that number 1 is on top is 1/6, what are the chances of this happening?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "463"
    },
    "464": {
        "tables": [
            "| Maturity | Coupon | Price |\n|----------|--------|-------|\n| 6 months | 4.5%   | 101.47 |\n| 1 year   | 6.0%   | 102.75 |\n| 2 years  | 7%     | 100.32 |"
        ],
        "question": "According to the table illustrating data about three semiannual coupon payment bonds, what is the discount factor for d(0.5)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "464"
    },
    "465": {
        "tables": [],
        "question": "The following table outlines details from the financial reports of BC Enterprises as of December 31, 20X8. Using this data, can you determine the sustainable growth rate of BC Enterprises? The figures are as follows: revenue: $800,000, dividend paid: $80,000, total asset turnover: 0.58, financial leverage: 1.7, sales to net income: 6.5, tax rate: 20%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "465"
    },
    "466": {
        "tables": [],
        "question": "Assuming equal funding from each source and a marginal tax rate of 30%, what is the weighted average cost of capital (%) if a company's post-tax debt costs, preferred shares, and equity are 8.4%, 14%, and 16% respectively?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "466"
    },
    "467": {
        "tables": [
            "| Liabilities at  year-end | \u00a3 1,000 |\n|-------------------------|---------|\n| Contributed capital at year-end | \u00a3 500 |\n| Beginning retained earnings | \u00a3 600 |\n| Revenue during the year | \u00a3 5,000 |\n| Expenses during the year | \u00a3 4,300 |"
        ],
        "question": "A researcher has gathered the following data about Smithson Enterprises. No distributions have been made to the owners. What would most probably be the researcher's estimate of the total assets at the end of the year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "467"
    },
    "468": {
        "tables": [],
        "question": "Suppose that a random variable Y follows a normal distribution with a mean of 40 and a standard deviation of 14. What is the likelihood that Y is not within the range of 12 to 61?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "468"
    },
    "469": {
        "tables": [],
        "question": "How many permutations can be made when selecting 4 items from a group of 10 items?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "469"
    },
    "470": {
        "tables": [],
        "question": "John is a trader based in the United States. John has posted a 6-month forward exchange rate in USD/GBP at 1.3923. Additionally, John predicts a 6-month forward point percentage of 5.6%. Which among the following selections for the USD/GBP spot rate would be the most precise?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "470"
    },
    "471": {
        "tables": [],
        "question": "The Chief Information Officer of a private equity firm in Canada is looking to secure the interest on a three-month \"bridge\" loan that his company will acquire in six months to finalize an LBO transaction. He trades the applicable interest rate futures contracts at 98.05. After six months, he starts the loan at 2.70% and neutralizes the hedge at 97.30. What is the effective interest rate on the loan?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "471"
    },
    "472": {
        "tables": [],
        "question": "Assuming a functional procedure has a 5% chance of resulting in a substantial financial loss and if not, no significant loss is recorded (i.e., Bernoulli). If the substantial loss happens, the intensity is normally distributed with an average of $4 million and a standard deviation of $2 million. What is the expected shortfall at the 95% confidence level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "472"
    },
    "473": {
        "tables": [],
        "question": "Miller is a tax consultant who gives tax awareness counsel to individual clients. Miller's client is Jane who currently has $10 million invested in a tax-deferred account earning 8% annually. Jane intends to liquidate the investment after five years, accrue the sale proceeds in a lump sum (which are taxed at a 20% rate), and utilize the proceeds to buy a mansion. Jane requested Miller to determine the leftover after-tax wealth after five years. What will be the after-tax wealth in Jane's tax-deferred account at the conclusion of the five years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "473"
    },
    "474": {
        "tables": [
            "|                          | Portfolio W       | Futures Contract and CTD Bond |\n| ------------------------ | --------------- | ----------------------------- |\n| Market value            | $120,349,000      | Price                         | 143.20                      |\n| Modified duration       | 9.30             | Modified duration             | 9.00                         |\n| Basis point value       | $111,924.57      | Basis point value             | 128.88                       |\n|                          |                   | Conversion factor             | 0.75                         |\n|                          |                   | Contract size                 | $100,000                     |"
        ],
        "question": "John, a beginner analyst, oversees a portfolio X. The portfolio is completely committed to US Treasuries. John aims to fully safeguard this bond portfolio against any increase in interest rates. Exhibit 1 discloses certain information regarding Portfolio X, along with the related Treasury futures contract, and the cheapest-to-deliver (CTD) bond. Considering the data in Exhibit 1, how many Treasury futures contracts does John need to sell to fully protect Portfolio X?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "474"
    },
    "475": {
        "tables": [],
        "question": "The current status of the PlayPoint Resort Company is that it has 1.2 million outstanding common shares with a beta of 2.2. Also, it has bonds of a face value of $10 million that will mature in five years and these bonds have an 8% coupon with payments every 6 months, and are calculated to yield 13.65 percent. If PlayPoint decides to issue new bonds up to $2.5 million, the bonds will be priced at par value and will yield 13.65 percent. However, if the company decides to issue bonds beyond $2.5 million, the expected yield on the entire issuance will be 16 percent. PlayPoint recently determined that they can issue new common stock at $10 per share. The present risk-free interest rate is at 3 percent while the expected market return is 10 percent. PlayPoint's marginal tax rate is at 30 percent. What is the weighted average cost of capital if PlayPoint ac",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "475"
    },
    "476": {
        "tables": [
            "|                               |         |\n|-------------------------------|---------|\n|Exhibit 1 10-Year Trailing Risk-Adjusted Performance| |\n| Average annual return        | 8.20%   |\n| Minimum acceptable return (MAR) | 5.00%   |\n| Sharpe ratio                 | 0.95    |\n| Sortino ratio                | 0.87    |\n| Upside capture               | 0.66    |\n| Downside capture             | 0.50    |\n| Maximum drawdown             | -24.00% |\n| Drawdown duration            | 4 months|"
        ],
        "question": "According to Exhibit 1, what is the projected semi-deviation for the investment portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "476"
    },
    "477": {
        "tables": [],
        "question": "An executive is considering pricing a put option through a one-period binomial tree. The relevant data include: The present stock price is $30, the strike price of the put option stands at $30. The upward adjustment factor is 1.12, while the downward one rests at 0.92. The risk-free rate comes at 5%. The risk-neutral likelihood of a downward movement is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "477"
    },
    "478": {
        "tables": [
            "| ($ millions) | 2016 | 2017 |\n| --- | --- | --- |\n| Revenue | 50 | 45 |\n| Cost of goods sold | 17 | 20 |\n| Inventory | 24 | 20 |\n| Accounts receivable | 20 | 17 |\n| Accounts payable | 30 | 33 |"
        ],
        "question": "Based on the given data, how much money was paid to the vendor?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "478"
    },
    "479": {
        "tables": [
            "| | Exports | Imports |\n|---|---|---|\n| Initial Value (DCU) | 4,800 | 6,500 |\n| Demand elasticity | 0.70 | 0.55 |\n| **Note:** DCU:  domestic currency units | | |"
        ],
        "question": "What will the trade balance be for a theoretical economy given the following international trade data if the value of the ZRB depreciates by 12%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "479"
    },
    "480": {
        "tables": [],
        "question": "A portfolio manager possesses a portfolio of options on a non-dividend paying stock named LYR. The portfolio includes 10,000 deep in-the-money call options on LYR and 50,000 deep out-of-the money call options on LYR. Along with this, there are 20,000 forward contracts on LYR. The current trading price of LYR is USD 100. Given 252 trading days in a year and 30 percent per-year volatility of LYR, what would be the 1-day VaR of the portfolio at the 95 percent confidence level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "480"
    },
    "481": {
        "tables": [],
        "question": "If the total assets of the Silver Airways company are $3,275,000 and their total debt is $2,315,000. Determine the financial leverage assuming Silver Airways securitized $200,000 of its account receivables to a SPE.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "481"
    },
    "482": {
        "tables": [],
        "question": "What is the portfolio beta for an investor who opts to borrow an additional $5,000 at the risk-free rate and invest a total of $10,000 in the market portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "482"
    },
    "483": {
        "tables": [],
        "question": "Suppose the Peterson account experienced a return of -5.3% in a particular month, during which the portfolio benchmark saw a return of -5.5% and the market index had a return of -2.8%. What is the return of the Peterson account attributable to active management?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "483"
    },
    "484": {
        "tables": [],
        "question": "If an employee named Anna, FRM, who works as an analyst at Meyer Industries, is calculating the value at risk (VaR) for the company's profit/loss distribution, which is supposed to be normally distributed with a yearly average of $2 million and a standard deviation of $1 million, what would be the VaR at a 99% confidence level using a parametric method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "484"
    },
    "485": {
        "tables": [],
        "question": "John Doe bought a mortgage-backed security that has an 8% coupon rate and a par value of $1,000 for $960. The coupon payments are made monthly. How much is the monthly coupon payment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "485"
    },
    "486": {
        "tables": [
            "| Security | Beginning of Period Price($) | End of Period Price ($) | Dividends per Share ($) | Shares Outstanding |\n|---|---|---|---|---|\n| D | 3,400 | 3,600 | 120 | 1,500 |\n| E | 4,600 | 3,500 | 150 | 1,100 |\n| F | 1,200 | 1,300 | 180 | 5,000 |"
        ],
        "question": "Recently, the total return of a market-capitalization-weighted index made up of securities D, E, F, has been compiled by Stacy, a research analyst from a financial investment firm. What is the total return of the index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "486"
    },
    "487": {
        "tables": [],
        "question": "Assuming that the yield-to-maturity of Bond B decreases by 30 basis points, and given that its annual modified duration is 6.932 and the annual convexity is 59.270, what should be the expected percentage price change?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "487"
    },
    "488": {
        "tables": [],
        "question": "What would the corresponding call option be worth, taking into account that the present share price is $25, an European put option on the share with a $27 strike price and a 9-month expiration is priced at $3, and the risk-free rate stands at 4%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "488"
    },
    "489": {
        "tables": [
            "| Fair value of investment in Gama Company | $ 150,000 |\n| --- | --- |\n| Retained earning | $ 782,000 |\n| Common stock, $1 par value | $ 560,000 |\n| Preferred stock, $100 par value | $ 126,000 |\n| Deferred taxes | $ 75,000 |\n| Accumulated OCI | $ 35,000 |"
        ],
        "question": "The subsequent balance sheet belongs to Omega Firm and includes chosen data at the year's conclusion: The investment in Alpha Firm was $130,000 and is categorised as FVOCI. By the year's end, what is the total owners' equity for Omega Firm?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "489"
    },
    "490": {
        "tables": [
            "| Time=0 | Time=1 | Time=2 |\n|---|---|---|\n| SO=100 | Su=110 | Suu=121 |\n|   | Sd=92 | Sud/du=101.20 |\n|   |   | Sdd=84.64 |"
        ],
        "question": "Suppose a company's share is expected to move as displayed below in the next two periods. The starting price for the share is $100. Considering the odds of an increase in any given period as 40% and the chance of a decrease is 60%, what is the likelihood of the share's price reaching $101.20 after two periods, using the binomial model?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "490"
    },
    "491": {
        "tables": [],
        "question": "If PYTHON Ltd. sells an intangible asset that was originally acquired for \u20ac12 million and has an accumulated amortization of \u20ac2 million, and reported a loss of \u20ac3.2 million on its sale, what is a probable sale price of the asset?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "491"
    },
    "492": {
        "tables": [
            "|                            |REIT B  |\n|----------------------------|--------|\n|Funds from operations (FFO)|$320,514|\n|Shares outstanding          |76,000  |\n|Property subsector average P/FFO multiple|15.3x|"
        ],
        "question": "What is the per share value of REIT B using the average P/FFO multiple method of the property subsector?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "492"
    },
    "493": {
        "tables": [
            "|  | Number of Options | Weighted Average | Exercise Price |\n| --- | --- | --- | --- |\n| Balance, start of year | 3,666,500 | \u00a33.06 | |\n| Granted  during the  year | 872,000 | \u00a33.30 | |\n| Exercised during the year | -278,400 | \u00a32.88 | |\n| Forfeited during the year | -123,700 | \u00a32.96 | |\n| Balance, end of year | 4,136,400 | \u00a33.13 | |\n| Exercisable at end of the year | 827,280 | \u00a32.90 | |",
            "|               | Share Price | Option Fair Value |\n|---------------|-------------|-------------------|\n| January 1,2014  | \u00a32.85       | \u00a30.370            |\n| July 1, 2014    | \u00a33.00       | \u00a30.390            |\n| December 31, 2014 | \u00a33.06     | \u00a30.400            |\n| Average for 2014 | \u00a32.97      | \u00a30.386            |"
        ],
        "question": "Under the present LTIP, the Board awards options on common shares to the management team. These options necessitate a 6-year service period after the date they are granted before they vest. This information about the stock options granted this year under the LTIP is reviewed by Morrison as shown in Exhibit 2. The financial statements of Clarion are prepared in line with International Financial Reporting Standards (IFRS) and their year-end is December 31. All the options in 2014 were granted on July 1, 2014. Given the market price of shares and the fair value of stock options at crucial dates throughout the year as shown in Exhibit 3, what is the chunk of the compensation expense related to the stock option of the LTIP granted in 2014?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "493"
    },
    "494": {
        "tables": [],
        "question": "The yield for a one-year zero-coupon bond is 4.0%. The yields for zero-coupon bonds for the second and third years are 5.0% and 6.0% respectively. The spot rate for a five-year bond is not provided; however, the future price for a two-year zero-coupon bond starting in three years is 0.8479. What is today's price for a five-year zero-coupon bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "494"
    },
    "495": {
        "tables": [],
        "question": "What is the continually compounded return rate if a stock's price increases from $15.00 to $16.20 over the course of a year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "495"
    },
    "496": {
        "tables": [],
        "question": "A corporation bought a storage facility for \u20ac35 million and invested an extra \u20ac2.0 million for improvements to the building's roof and windows, \u20ac0.5 million to adapt the inner arrangement to their standards (repositioning walls, adding and removing dividers, etc.) and \u20ac0.1 million on a training and introduction program to acquaint workers with the premises. What is the cost to be capitalized to the building account (in millions)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "496"
    },
    "497": {
        "tables": [],
        "question": "Suppose that JJ Corporation initially reported an operating income of $360,000, which later changed to $420,000. If the financial cost stands at $120,000, how would you calculate JJ Corporation's degree of financial leverage (DFL)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "497"
    },
    "498": {
        "tables": [
            "| Name National Annual ID Salary Number | Loan Amount | | Model Prediction | Actual Result | Prediction Result | Type 1 Error | Type 2 Error |\n|---|---|---|---|---|---|---|---|\n| Garcia XXX 099 $105,000 | $25,000 | | Default | Default | 1 | 0 | 0 |\n| Rodriquez XXX 810 $58,000 | $10,000 | | No Default | No Default | 1 | 0 | 0 |\n| Brown XXX 129 $75,000 | $15,000 | | Default | No Default | 0 | 1 | 0 |\n| Anderson XXX 193 $43,000 | $7,500 | | No Default | No Default | 1 | 0 | 0 |\n| Lewis XXX 122 $64,500 | $42,000 | | No Default | Default | 0 | 0 | 1 |\n| Number and use of client records | | | | | | | |\n| Total # of historical records | | | | 10,014 | | | |\n| Records removed in data cleansing | | | | 2,996 | | | |\n| Records modeled with correct predictions and errors | | | | 7,018 | 5,851 | 273 | 894 |\n\nNote: 1 in Prediction Result column is a correct prediction; 0 is an incorrect prediction."
        ],
        "question": "Based on the results presented for the BETA model (Exhibit 1) along with its relevant documentation, what is the model's precision? The model was confirmed by Thompson to have accurately forecasted a default in 5,290 cases from the model prediction set after the data was fully processed. This is from a sample of loans taken from the BETA model where anticipated and actual defaults were compared for the previous 12 months.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "498"
    },
    "499": {
        "tables": [],
        "question": "Taking into account the performance of the Russell 1000 from February 1990 to December 2016, with a monthly arithmetic return of 0.878% and a volatility characterized by a 4.199% standard deviation of return, what would be the geometric return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "499"
    },
    "500": {
        "tables": [
            "| Factor    | Time to Maturity (years) - 5 | Time to Maturity (years) - 20 |\n| --------- | ---------------------------- | ----------------------------- |\n| Level     | -0.4352%                     | -0.5128%                      |\n| Steepness | -0.0515%                     | -0.3015%                      |\n| Curvature | 0.3963%                      | 0.5227%                       |"
        ],
        "question": "Display 1. Tri-Factor Model of Term Structure Note: The entries show how the yields would alter for a one standard deviation boost in a factor. How much would you expect the yield on the 20-year bond to change due to an increase in the steepness factor by two standard deviations?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "500"
    },
    "501": {
        "tables": [],
        "question": "In a manufacturing firm, the accountant named Samuel discovered that the acquisition cost of a certain equipment was $50,000 and noted a $10,000 loss in the income statement upon the equipment's sale. If the accumulated depreciation amounted to $35,000, what was the selling price of the equipment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "501"
    },
    "502": {
        "tables": [],
        "question": "When the 95% confidence level VaR model of Chase Corporation is being backtested using the data from the last 750 trading days, how many anticipated irregularities would we expect to find?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "502"
    },
    "503": {
        "tables": [
            "| Country       | Currency   | Spot Exchange Ratea    | One Year Risk-free Rate | Expected Annual Inflation Rate |\n|:-------------:|:----------:|:----------------------:|:-----------------------:|:----------------------:|\n| United States | US$        | NA                     | 4.80%                   | 2.30%                  |\n| Canada        | C$         | 1.2138-1.2259          | 4.10%                   | 1.90%                  |\n| Brazil        | Real (BRL) | 2.3844-2.4082          | 8.80%                   | 6.30%                  |\n\naNumber of foreign currency units per one U.S. dollar."
        ],
        "question": "If the bid-side quote for the CAD/BRL from a merchant is C$0.5250, what is the profit for Johnson from a US$1,000,000 initial investment in the triangular arbitrage opportunity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "503"
    },
    "504": {
        "tables": [],
        "question": "Based on the study, 65% of all businesses possess a scanner. If we choose 8 businesses, what are the chances that five businesses would own a scanner?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "504"
    },
    "505": {
        "tables": [],
        "question": "Assume that the continuously compounded 5-year spot rate is 10% and the 4-year spot rate is 8.8%. Could you determine the 1-year forward rate four years in the future?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "505"
    },
    "506": {
        "tables": [
            "| Asset class     | Portfolio weight (%) | Benchmark weight (%) | Portfolio return (%) | Benchmark return (%) |\n|-----------------|----------------------|----------------------|----------------------|----------------------|\n| Domestic        | 45                   | 50                   | 12                   | 10                   |\n| International equity | 25           | 20                   | 15                   | 12                   |\n| Bonds           | 30                   | 30                   | 7                    | 8                    |"
        ],
        "question": "The research team gathered the following data: Can you compute the value added for the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "506"
    },
    "507": {
        "tables": [
            "| Year | Return(%) |\n|------|-----------|\n| 2008 | 22        |\n| 2009 | -25       |\n| 2010 | 11        |"
        ],
        "question": "What is the yearly geometric mean return of a mutual fund based on the noted annual returns rates?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "507"
    },
    "508": {
        "tables": [],
        "question": "Position 1 (FTSE 100 Futures Contract): Harmony Capital maintains a long position in a FTSE 100 futures contract that is set to mature in three months. The Nikkei 225 Stock Index has a continuously compounded dividend yield of 1.1%, and the current level of the stock index is 16,080. The constantly compounded yearly interest rate is 0.2996%. What is the prevailing no-arbitrage futures price of the FTSE 100 futures contract (Position 1)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "508"
    },
    "509": {
        "tables": [
            "| Revenue        | \u00a3800,000 |\n| -------------- | -------- |\n| Variable cost  | \u00a3400,000 |\n| Fixed cost     | \u00a3200,000 |\n| Operating income | \u00a3200,000 |\n| Interest       | \u00a360,000  |\n| Net income     | \u00a3140,000 |"
        ],
        "question": "What is the company's total degree of leverage (DTL), based on the information provided for the company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "509"
    },
    "510": {
        "tables": [
            "\n|                                             |                               |\n|---------------------------------------------|-------------------------------|\n| Cost of the equipment                       | UYP 1,200,000                 |\n| Estimated residual value                    | UYP 200,000                   |\n| Expected useful life                        | 8 years                       |\n| Total productive capacity                   | 800,000 units                 |\n| Production in FY 2009                       | 135,000 units                 |\n| Expected production for the next 7 years    | 95,000 units each year        |\n"
        ],
        "question": "Carlos Perez from the Uruguayan company LUIGI Ltd., is calculating the depreciation expense of manufacturing machinery for the financial year closing on 31 December 2009. The machinery was purchased on 1 January 2009. Given the information gathered by Perez, what would be the amount of depreciation expense (in UYP) on LUIGI's profit and loss statement related to the manufacturing machinery, if LUIGI uses the units-of-production method? (Currency in Uruguayan pesos, UYP).",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "510"
    },
    "511": {
        "tables": [],
        "question": "A risk assessor is computing the VaR for a portfolio using a data set of 50 weekly returns. The average weekly return calculated from the sample is 8% with a standard deviation of 17%. Given that weekly returns are assumed to be independent and identically distributed, what is the standard deviation of the average weekly return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "511"
    },
    "512": {
        "tables": [],
        "question": "The preferred stock of Company N has a par value of $50 per share and it provides an annual dividend of 3.8%. If Nick thinks that it's reasonably priced at the market cost of $30, what is the capitalization rate of the preferred stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "512"
    },
    "513": {
        "tables": [
            "markdown\n|                                      | 2015 | 2016 |\n|--------------------------------------|------|------|\n| **Cosmetic firm B.S for the ending 31 December** |      |      |\n| Cash                                 | 210  | 310  |\n| Accounts receivable                  |      | 31   |\n| Inventory                            | 60   | 80   |\n| Fixed assets                         | 200  | 200  |\n| Accumulated depreciation             |      | (35) |\n| Total assets                         | 470  | 586  |\n| Accounts payable                     | 105  | 162  |\n| Long-term debt                       | 235  | 273  |\n| Common stock                         | 130  | 130  |\n| Retained earnings                    |      | 21   |\n| Total liabilities and shareholders' equity | 470  | 586  |\n",
            "|                                  | US $/C$ |\n|----------------------------------|---------|\n| Rate on 31 December 2015         | 0.89    |\n|                                  |         |\n| Average rate in 2016             | 0.96    |\n| Weighted-average rate for inventory purchases | 0.94    |\n| Rate on 31 December 2016         | 0.94    |"
        ],
        "question": "Sephora is a US-operated company that specializes in the sale of beauty products. It has a Canadian branch, Glossy Inc, that only carries out operations in Canada. It was established on 31 December 2015, and Glossy Inc uses the US dollar as its main currency. Let's consider that fixed assets were purchased at the company's conceptual stage. The financial statement details for the years ending 2015 and 2016 are provided in the adjacent table: Can you compute the converted value of Glossy Inc's retained earnings as of 31 December 2016?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "513"
    },
    "514": {
        "tables": [],
        "question": "A data set with 25 entries has an average of 8 and a standard deviation of 15. What is the standard error of this data set's mean?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "514"
    },
    "515": {
        "tables": [],
        "question": "At the start of 2013, corporation X released 5-year bonds with a face value of $2,000,000. The market interest rate stands at 6%, and on each 31 December, a 5% coupon is paid on the bonds. What could be the calculated bonds payable at the time they were issued?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "515"
    },
    "516": {
        "tables": [
            "| Net income | | $55 million |\n|---|---|---|\n| Depreciation | | $3 million |\n| Balance Sheet Item | 12/31/2016 | 12/31/2017 |\n| Accounts receivable | $18 million | $20 million |\n| Inventory | $22 million | $17 million |\n| Accounts payable | $6 million | $3 million |"
        ],
        "question": "Based on the given financial reports for Company B, what is the value of the operating cash flow?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "516"
    },
    "517": {
        "tables": [],
        "question": "A trader takes a short stance on a gold futures contract at a price of USD 294.20. Each contract oversees 100 troy ounces. The starting margin stands at USD 3,200, while the sustaining margin is set at USD 2,900. After the initial day, the futures price decreases to USD 286.6. What is the sum of the variation margin at the closure of the first day?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "517"
    },
    "518": {
        "tables": [],
        "question": "For a price-weighted index made up of securities XYZ, MNOP, and QRST, an analyst has collected the following data: The starting and ending prices (in \u20ac) and total dividends (in \u20ac) are as follows: XYZ with 25.00 to 27.00 along with 1.00 in dividends, MNOP with 35.00 to 25.00 and 1.50 in dividends, and QRST from 15.00 to 16.00 with 1.00 in dividends. What is the price return of the index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "518"
    },
    "519": {
        "tables": [
            "| Operating profit margin | 17.5% |\n|-------------------------|-------|\n| Net profit margin       | 11.7% |\n| Total asset turnover    | 0.89 times |\n| Return on assets (ROA)  | 10.4% |\n| Financial leverage      | 1.46  |\n| Debt to equity          | 0.46  |"
        ],
        "question": "What is the return on equity (ROE) of the business that a financial examiner has determined?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "519"
    },
    "520": {
        "tables": [
            "| Interest Rate Assumption | Present Value of Liabilities |\n|-------------------------|-----------------------------|\n| 8%                      | $ 436.2 million             |\n| 9%                      | $ 357.5 million             |\n| 10%                     | $ 298.1 million             |"
        ],
        "question": "John is a manager of a retirement fund who is interested in assessing the responsiveness of his retirement obligations to fluctuations in market interest rates. Supposing the base rate is 9%, with a 100 basis point rise in rates up to 10%, and a 100 basis point decrease in rates down to 8%. The associated data is given as follows: The effective duration of the retirement fund's obligations is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "520"
    },
    "521": {
        "tables": [
            "|                     | $ millions |\n|---------------------|------------|\n| Sales               | 4,800      |\n| Cost of goods sold  | 2,880      |\n| Purchases           | 2,940      |\n| Average receivables | 625        |\n| Average inventory   | 710        |\n| Average payables    | 145        |"
        ],
        "question": "The details for a particular business are given. What is the cash conversion cycle (in days) of this business?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "521"
    },
    "522": {
        "tables": [
            "| Expected Security Standard Deviation (%) | Beta |\n| --- | --- |\n| Security 1 25 | 1.50 |\n| Security 2 15 | 1.40 |\n| Security 3 20 | 1.60 |"
        ],
        "question": "According to the data collected by the researcher, using the capital asset pricing model, what is the predicted return for Investment A if the anticipated market risk premium is 6% and the risk-free rate is 3%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "522"
    },
    "523": {
        "tables": [],
        "question": "When a business releases face value bonds worth \u20ac10,000,000 with a 10-year term dated 1 January 2015, the market interest rate of bonds with similar level of risk and terms stands at 6%. These bonds provide a yearly interest rate of 7%, paid out on December 31. Utilizing the effective interest rate method, what would be the interest cost on 31 December 2015?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "523"
    },
    "524": {
        "tables": [],
        "question": "Smith investigates a technique driven by an event, precisely a potential fusion of B Corporation and U, Inc. B has proposed to acquire Unicorn through a stock-for-stock agreement: the offer ratio is 2 shares of B for every 3 Unicorn shares. B's trading price was \u20ac50 per share before the announcement of fusion, but it decreased to 45 euros per share after the declaration. Before the announcement, U's transaction price per share was 15 euros, and it appreciated to \u20ac20 per share with the expectation of the fusion deal getting necessary permissions and successfully concluding. If we assume the fusion between B and U comes to a successful close, what will be the result of Smith\u2019s merger arbitrage trade if he purchases 24,000 U shares at a rate of 20 euros per share, and goes short on 16,000 B shares at a rate of 45 euros per share?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "524"
    },
    "525": {
        "tables": [],
        "question": "Let's assume that X and Y are random variables, each adheres to a standard normal distribution, and the covariance between X and Y is 0.35. What is the variance of (3X+2Y)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "525"
    },
    "526": {
        "tables": [
            "| Date        | 6-month LIBOR |\n|-------------|---------------|\n| Sep 7, 2016 | 2.46%         |\n| Mar 7, 2017 | 1.13%         |\n| Sept 7, 2017| 0.79%         |\n| Mar 7, 2018 | 0.42%         |\n| Sep 7, 2018 | 0.56%         |"
        ],
        "question": "On September 7, 2016, Bank XYZ initiated a 2-year interest rate swap contract. Per the terms of the swap, Bank XYZ was slated to receive a fixed 4.10% rate while paying a rate equivalent to LIBOR plus 1.30% on a principal amount of USD 7.5 million. Payments were scheduled biannually. The table below presents the actual annual 6-month LIBOR rates measured over the contract's 2-year lifespan: Assuming there was no default, what amount did Bank XYZ receive on September 7, 2018?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "526"
    },
    "527": {
        "tables": [],
        "question": "Smith is a tax consultant who gives tax planning guidance to individual clients. A client of Smith's is Rose who presently has $10 million invested in a tax-deferred account that generates 8% every year. Rose will offload the investment after five years, collect the sales revenue all at once (withdrawals are taxed at 20%), and use the funds to buy a mansion. Rose requested Smith to estimate the after-tax wealth available after five years. What will be the after-tax wealth in Rose's tax-deferred account at the end of the five years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "527"
    },
    "528": {
        "tables": [
            "| Statistic | Value |\n| --- | --- |\n| Covariance between market return and security return [Cov(Rj,Rm)] | 0.01104 |\n| Correlation coefficient between market return and security return (pi,m) | 0.3 |\n| Standard deviation of market return (\u03c3m) | 0.16 |"
        ],
        "question": "What is the beta of security x, \u03b2x, considering the following information about a stock market index y and security x?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "528"
    },
    "529": {
        "tables": [
            "| Portfolio Number | Expected Nominal Returns | Standard Deviation | Sharpe Ratio |\n|------------------|--------------------------|--------------------|--------------|\n| 1                | 3%                       | 2.50%              | 0.4          |\n| 2                | 4%                       | 4.44%              | 0.45         |\n| 3                | 5%                       | 6%                 | 0.5          |\n| 4                | 6%                       | 6.15%              | 0.65         |\n| 5                | 7%                       | 8.33%              | 0.6          |\n| 6                | 8%                       | 10.90%             | 0.55         |"
        ],
        "question": "The overall investment goal of XY endowment is to sustain the real buying power of its portfolio after disbursements. The risk-free rate stands at 2%. An anticipated inflation rate is 1.5%. The cost of returns on earnings investment is 50 bp. XY aims at a 3% annual distribution of assets. Exhibit 1 presents key findings from a mean-variance optimization where the weights of the asset class are bound to be non-negative. To reach XY\u2019s expected return, what is the most suitable percentage for XY\u2019s investment in the corner portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "529"
    },
    "530": {
        "tables": [
            "|   | Cumulative Distribution Function |\n|---|---|\n| Y=y  | F(y)=P(Y\u2264y) |\n| 20 | 0.08 |\n| 21 | 0.20 |\n| 22 | 0.30 |\n| 23 | 0.55 |\n| 24 | 0.75 |\n| 25 | 1.00 |"
        ],
        "question": "Assuming that 'Z' is a discrete random variable, and the set of potential Z values constitutes Z= {20,21,22,23,24,25}. With the cumulative distribution function's probable value denoted in the chart, can you tell the likelihood that Z equals either 23 or 25?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "530"
    },
    "531": {
        "tables": [],
        "question": "The corporation engages in a 2 \u00d7 5 receive-fixed FRA that has an advanced set, advanced settled with a notional amount of $100,000,000. The correct discount rate for the FRA settlement cash flows stands at 1.5%. Following 60 days, the 90-day Libor is 0.80%, and the 60-day Libor is 0.7%. If the original price of the FRA was pegged at 1.20%, what will be the settlement payment received for the 2 \u00d7 5 FRA?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "531"
    },
    "532": {
        "tables": [],
        "question": "A fund manager possesses five bonds in his holdings, and each bond carries a single-year default risk of 17%. The default occurrence for each bond is autonomous. What are the odds that only two bonds will default within the coming year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "532"
    },
    "533": {
        "tables": [
            "| Date | Closing Price |\n|------|---------------|\n| May  | 132           |\n| June | 145           |\n| July | 159           |"
        ],
        "question": "The stocks of BBB corporation have experienced shifting closing prices over the past 3 months: From May to July, what is the continuously compounded return of BBB corporation's stocks?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "533"
    },
    "534": {
        "tables": [],
        "question": "Assuming there are 250 trading days in a year and the daily returns are independently and identically distributed, what is the highest number of daily losses over a 10-year period exceeding the 1-day 99.5% VaR that would still indicate the model being correctly calibrated, for a risk manager who is backtesting an organization's VaR model at the 95% confidence level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "534"
    },
    "535": {
        "tables": [],
        "question": "Eight weeks prior, an investor bought a stock forward contract with a maturity of three months. The starting forward price was $108.5, but the present forward price is $107.6. The risk-free rate remains 3%. What is the value of this forward contract?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "535"
    },
    "536": {
        "tables": [
            "|               |           | Actual training |      |\n|---------------|-----------|-----------------|------|\n|               |           | results         |      |\n| Predicted     |           | Class \"1\"       | Class \"0\"     |\n| Results       | Class \"1\" | TP=182          | FP=52 |\n|               | Class \"0\" | FN=31           | TN=96 |"
        ],
        "question": "After finalizing the chosen features, Thompson executes a model on the training set which identifies the text as either positive sentiment (Class \u201c1\u201d) or negative sentiment (Class \u201c0\u201d). Subsequently, she assesses its effectiveness through error analysis. Referring to Exhibit 1, what is the precision metric of the model as per the given confusion matrix?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "536"
    },
    "537": {
        "tables": [],
        "question": "A shareholder is evaluating the market risk of Orion Portfolio. The portfolio delivers an anticipated annual return of 6.8% and a volatility of 7.0%, and it is benchmarked in contrast with the S&P 500 Index. The shareholder presupposes that the S&P 500 Index has a projected annual return of 7.2% and a volatility of 8.2%. In accordance with the CAPM, if the risk-free rate is 2.2% per annum, what is the beta of Orion Portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "537"
    },
    "538": {
        "tables": [
            "| Exercise Price ($) | Option Premium ($) | Delta |\n|--------------------|--------------------|-------|\n| 88                 | 4.40               | 0.75  |\n| 94                 | 1.00               | 0.30  |"
        ],
        "question": "A customer, Alice Thompson, thinks that large-cap stock prices will witness a slight increase, and she wishes to benefit from this trend using a bull spread technique. Parker suggests that Thompson utilize 1/100 options of the Dow Jones Industrial Average (DJX) which will expire in two months. The current DJX price stands at $91. Exhibit 1 offers current information on two DJX call options which will expire within two months. Exhibit 1 DJX Call Options Expiring in Two Months Thompson decides to use 100 contracts for each position. Each contract equals 100 shares. At the DJX call options expiration, what is the maximum potential gain from the bull spread strategy suggested for Thompson?\n",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "538"
    },
    "539": {
        "tables": [],
        "question": "Can you calculate the net operating cycle for XY corporation given that they have credit sales of $50,000, cost of goods sold is $30,000, average accounts receivable is $3,000, average accounts payable is $2,600, average inventory is $5,000 and purchase inventory is $46,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "539"
    },
    "540": {
        "tables": [],
        "question": "Assuming a monthly compounded annual discount rate of 6.5%, what is the present value of a financial agreement that proposes to provide \u20ac1,200 monthly for a period of five years with the initial payment being made instantly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "540"
    },
    "541": {
        "tables": [
            "|   | Six lowest week returns | Hybrid  Weights | Hybrid  Cumulative weights |\n|---|-----------------------|--------------|---------------------------|\n| 1 | -10.2%                   | 0.0105         | 0.0105                           |\n| 2 | -9.1%                   | 0.0150          | 0.0255                           |\n| 3 | -7.8%                   | 0.0082          | 0.0337                           |\n| 4 | -6.0%                   | 0.0043          | 0.0380                           |\n| 5 | -5.5%                   | 0.0153          | 0.0533                           |\n| 6 | -4.9%                   | 0.0115          | 0.0648                           |"
        ],
        "question": "Using the hybrid approach, what is the 5% VaR for a portfolio with 100 weeks of return history, with its lowest returns over six weeks illustrated in the chart?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "541"
    },
    "542": {
        "tables": [],
        "question": "If the yield decreases by 90 basis points, what would be the convexity impact for a bond having a convexity of 120?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "542"
    },
    "543": {
        "tables": [],
        "question": "Determine the beta of the shares, if the covariance of the market returns with the returns of a particular share is 0.0035 and the standard deviation of the market returns is 0.05.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "543"
    },
    "544": {
        "tables": [
            "| Balances as of Year Ended 31 December 2017-2018 |      |      |\n|-------------------------------------------------|------|------|\n| Retained earnings                               |120 145|      |\n| Accounts receivable                             | 38 43|      |\n| Inventory                                       | 45  48|      |\n| Accounts payable                                | 36 29|      |"
        ],
        "question": "A researcher obtained the data from a business's 2018 financial reports (in $ millions): The business proclaimed and paid cash dividends of $10 million and recognized depreciation expenses of $25 million in 2018. The business views the disbursal of dividends as a financing operation. What was the business's operational cash flow in 2018 (in $ millions)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "544"
    },
    "545": {
        "tables": [],
        "question": "If an analyst named Mary is attempting to evaluate a corporation's stocks, considering that the company recently paid a dividend of $0.50 per share and the dividend is predicted to increase by 25% in the following year, and by 10% in the subsequent year. Furthermore, from the third year and onwards, the dividend expansion is foreseen to be 5% per annum. Given an 8% required rate of return, what would be the stock's intrinsic value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "545"
    },
    "546": {
        "tables": [],
        "question": "What is the 99.9% credit var for a bond valued at $100 million that has a one-year cumulative default probability of 2% with no recovery rate and a 99.9% confidence level for the coming month?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "546"
    },
    "547": {
        "tables": [],
        "question": "If the shares of the BBB corporation have a 30% chance of increasing each year, assuming each yearly attempt is unrelated to the others, what are the odds that it does not manage to increase more than once in the next 3 years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "547"
    },
    "548": {
        "tables": [],
        "question": "A one-year zero-coupon bond has a yield of 4.0%. The yields of the zero-coupon bonds for two and three years are 5.0% and 6.0% respectively. What would be the forward rate for a one-year loan that starts in two years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "548"
    },
    "549": {
        "tables": [
            "| Mature time | 10 years |\n|-------------|----------|\n| Market discount rate | 4% |\n| Par value of the bond | 1000 |"
        ],
        "question": "Assuming yearly compounding, what will be the price of the zero coupon bond given the details below?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "549"
    },
    "550": {
        "tables": [
            "|                                                     | 2018  | 2017  | 2016  |\n|-----------------------------------------------------|-------|-------|-------|\n| Net income                                          | 3,560 | 2,071 | 1,295 |\n| Net cash flow provided by (used in) CFO             | 8,850 | 4,220 | 2,990 |\n| Net cash flow provided by (used in) CFI             | (9,880)| (3,250)| (4,875)|\n| Net cash flow provided by (used in) CFF             | (5,120)| 1,050 | (1,910)|\n| Average net operating assets                         | 42,000| 40,530| 41,600|"
        ],
        "question": "Given the cash flow data in the following table, what was the cash-flow-based accruals ratio for the company PZ in the year 2018?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "550"
    },
    "551": {
        "tables": [
            "| Operating cash flow | 500 |\n|---------------------|-----|\n| Interest paid       | 30  |\n| Investment in working capital | 80 |\n| Investment in fixed asset | 60 |\n| Tax rate | 30% |"
        ],
        "question": "A business expert intends to evaluate a private corporation using the FCF Model. To calculate the free cash flow for all capital providers, what is the free cash flow value the expert intends to find, considering the gathered information (in million)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "551"
    },
    "552": {
        "tables": [],
        "question": "What should be the projected total owners' equity by an analyst, if a firm is expected to have \u20ac2,000 of assets and \u20ac1,200 liabilities by the end of the year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "552"
    },
    "553": {
        "tables": [
            "|                               |   C$   |\n|-------------------------------|--------|\n| Carrying value of equipment (net book value)   | 500,000|\n| Undiscounted expected future cash flows | 550,000|\n| Fair value | 480,000 |\n| Costs to sell | 50,000 |\n| Value in use | 440,000 |"
        ],
        "question": "What is the impairment loss (in C$) associated with the printing equipment of a Canadian printing firm that complies with IFRS, given the drop in demand for its products during this fiscal year end?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "553"
    },
    "554": {
        "tables": [],
        "question": "If a bond with a face value of $100 has a semiannual-pay interest rate of 5% over 10 years, what would be its price assuming that its YTM is 8%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "554"
    },
    "555": {
        "tables": [
            "| Valuation Screen | Probability of Passing |\n|------------------|------------------------|\n| 1                | 0.65                   |\n| 2                | 0.45                   |\n| 3                | 0.40                   |\n| 4                | 0.30                   |"
        ],
        "question": "If a researcher uses four separate assessment measures on a group of 1,200 possible investments, what is the estimated number that will successfully pass through all four assessments?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "555"
    },
    "556": {
        "tables": [],
        "question": "What is the fiscal multiplier of the administration with a 25% tax rate and a 70% marginal propensity to consume?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "556"
    },
    "557": {
        "tables": [],
        "question": "A researcher has collected the below stats: the chance of economic prosperity is 75%, while the possibility of recession stands at 25%. For a business, there's a 10% probability of its EPS being $2.0 and a 90% likelihood of having an EPS of $4.0 during prosperous times. However, during a recession, there is a 25% chance that the EPS might be $2.0 and a 75% possibility that the EPS might be $4.0. What is the variance of this business's EPS in an economic downturn?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "557"
    },
    "558": {
        "tables": [
            "| Carrying amount of plant | 1,604 |\n|-------------------------|-------|\n| Undiscounted expected future net cash flows | 1,350 |\n| Present value of expected future net cash flows | 1,050 |\n| Fair value of plant | 1,225 |\n| Revised estimate of useful life | 4 years |\n| Depreciation method | Straight line |\n| Revised estimate of residual value | $200 |"
        ],
        "question": "In early January 2015, a market researcher spotted a news report stating that a company he's tracking (which submits reports under US GAAP) would be compelled to cut production from a key product line at its highly specialized ceramics factory, due to a new technology launched by a main competitor. The table encapsulates data and predictions from different sources regarding the factory and its forthcoming possibilities. Assuming the chosen information associated with the Ceramics Production Plant by the close of 2014 (in $ thousands) is correct, what would be the depreciation expense to be accounted for in 2015 concerning the factory?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "558"
    },
    "559": {
        "tables": [],
        "question": "What is the price value of a basis point (PVBP) for the bonds that are presently valued at 108.50, issued by GTS Inc., considering that according to a portfolio manager's valuation model, a 1bp rise in interest rates will cause the bond price to drop to 108.40, and a 1bp fall in interest rates will cause the bond price to increase to 108.59?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "559"
    },
    "560": {
        "tables": [],
        "question": "Bergen Inc. commenced business operations in 2007 and implements the FIFO method. In its first year, it bought 45,000 units of inventory for \u20ac10 per unit and sold 40,000 units at \u20ac20 each. The following year, it acquired another 50,000 units at a cost of \u20ac11 each and made sales of 45,000 units priced at \u20ac22 each. Using a periodic inventory system, what was Bergen Inc.'s ending inventory balance in \u20ac thousands for 2008?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "560"
    },
    "561": {
        "tables": [],
        "question": "John is looking to aid his friend Lisa in forecasting the revenue of her store in October 20X9, thus he uses the income from January 20X6 to September 20X9 as examples to create an AR(2) model and attains the following result: X ^ t+1 =1.3458+0.8912Xt+0.3372Xt-1. What would the forecasted revenue of Lisa's store be in October 20X9, provided the income for August 20X9 is $2746.72 and the income for September 20X9 is $2957.63?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "561"
    },
    "562": {
        "tables": [
            "| Borrowing date   | 1-Jan-09                                |\n|------------------|-----------------------------------------|\n| Amount borrowed  | 500 million Brazilian real (BRL)  |\n| Annual interest rate  | 14 percent                        |\n| Term of the loan | 3 years                                 |\n| Payment method   | Annual payment of interest only. Principal amortization is due at the end of the loan term. |"
        ],
        "question": "A Brazilian firm, CRIXUS Inc., takes out a loan from a domestic bank to fund the building of its factory. The terms of the loan are as follows: It takes two years to construct the factory, during which CRIXUS made BRL 10 million by momentarily investing the loan amount. What is the value of interest pertaining to the factory construction (in BRL million) that can be capitalized on CRIXUS's balance sheet?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "562"
    },
    "563": {
        "tables": [],
        "question": "In compliance with the rules of the trading platform, investing in wheat futures calls for an initial margin of $2000 and a maintenance margin of $1500. A trader shorts a wheat future contract at $216, with each contract incorporating 100 tons. The contract's value escalates to $222 after a day. What would the varying margin amount be at the conclusion of day one?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "563"
    },
    "564": {
        "tables": [],
        "question": "Suppose a hedge fund manager is aiming to build a protective put approach. If the stock's current price is $25.1, and the premium of 23 put is $1.8, what would be the maximum loss for this strategy?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "564"
    },
    "565": {
        "tables": [],
        "question": "In March 2017, John purchased 500 pen units at a cost of $2 each. Then in April of the same year, he bought another 600 pen units at an expense of $3 each. John managed to sell 1000 units at $5 each during 2017. When employing the FIFO method, what would be the cost of goods he sold in 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "565"
    },
    "566": {
        "tables": [
            "|   |   |\n|---|---|\n| Fair value  | \u00a3 16,800,000  |\n| Costs to sell  | \u00a3800,000  |\n| Value in use  | \u00a314,500,000  |\n| Net carrying amount  | \u00a319,100,000  |"
        ],
        "question": "A researcher is examining the degradation of the production machinery of Alpha Industries, a corporation based in the UK that abides by IFRS. What is the value of the impairment loss on Alpha Industries' income statement connected to its production machinery, based on the data collected about the machinery?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "566"
    },
    "567": {
        "tables": [],
        "question": "In a discrete uniform distribution with 20 potential results ranging from 1 to 20, what is the probability that X is not less than 3 but not exceeding 5, P(3 \u2264 X < 6)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "567"
    },
    "568": {
        "tables": [],
        "question": "Assume an investment portfolio consists of 40% in property A and 60% in property B. The average and variance of the return on A are 0 and 25 respectively. The average and variance of the return on B are 1 and 121 correspondingly. The correlation coefficient between A and B is 0.3. What is the closest estimate for portfolio volatility?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "568"
    },
    "569": {
        "tables": [
            "| Quarter                   | Income   |\n|---------------------------|----------|\n| The last quarter in 20X8 | $ 4257.63|\n| The third quarter in 20X8| $4153.98 |\n| The second quarter in 20X8| $4322.01 |\n| The first quarter in 20X8| $5763.42 |"
        ],
        "question": "Johnson is looking to forecast the earnings of his manufacturing plant in the first quarter of 20X9. To do this he utilizes earnings data from the first quarter of 20X8 to the last quarter of 20X8 as examples to create an AR(1) model. However, he discovers that the autocorrelations of the residuals indicate a significant, strong seasonal autocorrelation. Johnson then adjusts the model to obtain the new equation, which is Xt=126.7537+0.1387Xt\u22121+0.9324Xt\u22124X_t=126.7537+0.1387X_{t-1}+0.9324X_{t-4}Xt\u200b=126.7537+0.1387Xt\u22121\u200b+0.9324Xt\u22124\u200b. The income for each quarter in 20X8 is presented in the table below. Based on this new model, what is the",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "569"
    },
    "570": {
        "tables": [
            "|    | Borrowing date                             | 1 January 2009                          |\n|:--:|---------------------------------------|----------------------------------|\n|    | Amount borrowed                          | 500 million Brazilian real (BRL) |\n|    | Annual interest rate                 | 14 percent                             |\n|    | Term of the loan                       | 3 years                                   |\n| Payment method  |                                       | Annual payment of interest only. Principal amortization is due at the end of the loan term. |"
        ],
        "question": "The Brazilian corporation, RIO GRANDE, Inc., borrows money from a local financial institution to fund the building of its manufacturing facility. The loan conditions indicate that the facility build will take two years, during which RIO GRANDE generated BRL 10 million via temporary investment of the loan funds. What would be the sum of the interest associated with the plant's build (in BRL million) that RIO GRANDE could include in its financial statement?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "570"
    },
    "571": {
        "tables": [],
        "question": "John, CFA, is assessing the value of Corporation X. With the present dividend and the necessary return rate of $0.5 per share and 10% respectively, he anticipates that the dividend will continue to grow at its current rate of 4.5% per year indefinitely. What is the intrinsic value of Corporation X shares according to the Gordon Growth Model?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "571"
    },
    "572": {
        "tables": [
            "| Jan | Feb | Mar | Apr | May | Jun |\n| --- | --- | --- | --- | --- | --- |\n| 20% | 4%  | -5% | 12% | 3%  | 12% |"
        ],
        "question": "According to the provided table, can you compute the mean absolute deviation of the monthly stock returns for Ivy Corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "572"
    },
    "573": {
        "tables": [],
        "question": "XYZ Corporation has gone into a forward rate agreement (FRA) in which they will receive a continuous compounding rate of 3.75% on a principal amount of USD 1 million from the end of the first year to the end of the second year. The zero rates for one and two years are 3.25% and 3.50%, respectively. What is the value of the FRA at the inception of the agreement?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "573"
    },
    "574": {
        "tables": [
            "| Bond                         | Coupon Rate | Time-to-Maturity | Price  |\n|------------------------------|-------------|------------------|--------|\n| UK Government Benchmark Bond | 2%          | 3 years          | 100.25 |\n| UK Corporate Bond            | 5%          | 3 years          | 100.65 |"
        ],
        "question": "The present three-year EUR interest rate benchmark for swap is 2.12% and both bonds annually yield interest. What is the G-spread measured in basis points (bps) on the corporate bond from the UK?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "574"
    },
    "575": {
        "tables": [
            "|Exhibit 1  Atlantic Preserves, Inc.                   |        |\n|Selected Information from Note F of the 2013 Annual Financial Statements|        |\n|Relating to the Company's Defined Benefit Pension Plan (in $ thousands) |        |\n|Start-of-year pension obligation                      |72,544  |\n|Start-of-year plan assets                             |60,096  |\n|End-of-year pension obligation                        |74,077  |\n|End-of-year plan assets                               |61,812  |\n|Current service cost                                  |1,151   |\n|Interest cost                                         |5,441   |\n|Actual return on plan assets                          |5,888   |\n|Expected return on plan assets                        |4,597   |\n|Benefits paid to retired employees                    |5,059   |\n|Employer's contributions                              |887     |\n|Amortization of past service costs                    |272     |"
        ],
        "question": "Considering that the actual return on pension plan assets of Pacific Reserve surpasses its predicted return, what is the company's total periodical pension expense (in $ thousands) for 2013 as displayed in Exhibit 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "575"
    },
    "576": {
        "tables": [
            "| Shares outstanding before buyback | 3.1 million |\n| --- | --- |\n| Earnings per share before buyback | $4.00 |\n| Share price at time of buyback | $50 |\n| After-tax cost of borrowing | 6% |"
        ],
        "question": "What will be the earnings per share for Blanchard Inc. after repurchasing 100,000 stocks, assuming they borrow precisely the required amount of money for this transaction?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "576"
    },
    "577": {
        "tables": [],
        "question": "What is the return of the perpetual annuity if its price is 870,000 and it pays annually $50,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "577"
    },
    "578": {
        "tables": [
            "|        | Bid Size      | Offer Size     |\n|--------|---------------|----------------|\n| Buyer  |(Number of shares)| Limit price(\u00a3) | (Number of shares) | Seller|\n|-------|---------------|--------------|----------------|--------|\n| Keith  | 1,000         | 19.70        |                |       |\n| Paul   | 200          | 19.84        |                |       |\n| Ann    | 400          | 19.89        |                |       |\n| Mary   | 300          | 20.02        |                |       |\n|        |               | 20.03        | 800            | Jack  |\n|        |               | 20.11        | 1,100          | Margaret |\n|        |               | 20.16        | 400            | Jeff   |"
        ],
        "question": "A marketplace has the following limit orders standing on its book for a specific share: John places a day order to sell 1,000 shares, limit \u00a319.83. Supposing that no further purchase orders are placed on that day after John's order, what would be John\u2019s average trade price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "578"
    },
    "579": {
        "tables": [],
        "question": "If the Break-even inflation rate for Microsoft is 5%, the real default-free interest rate is 4.5%, and the anticipated future inflation is 3.5%. Can you determine the uncertainty of future inflation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "579"
    },
    "580": {
        "tables": [
            "| Purchase price | $12,980 |\n|----------------|---------|\n| Freight and insurance | $1,200 |\n| Installation | $700 |\n| Testing | $100 |\n| Maintenance staff training costs | $500 |"
        ],
        "question": "The corporation TechnoSphere recently acquired and set up a new apparatus for its production factory. What should be the cumulative expense of the apparatus displayed on TechnoSphere's financial statement, given the costs the company had to bear?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "580"
    },
    "581": {
        "tables": [],
        "question": "What is the discount rate if a 30-day Treasury bill is priced at 99.5?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "581"
    },
    "582": {
        "tables": [],
        "question": "For a one-year bond rated BBB, the spread over risk-free Treasuries of the same maturity is 2.5%. If all non-credit factors such as liquidity risk and taxes contribute to a 1% spread, what's the assumed default probability for this bond, if the loss given default rate is 60%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "582"
    },
    "583": {
        "tables": [
            "|  | Bond A |\n| --- | --- |\n| Periodicity | semiannually |\n| Par | 100 |\n| Price | 105 |\n| YTM | 4% |"
        ],
        "question": "The specific data of bond B is given below: What would be the YTM if it is transformed into a quarterly periodicity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "583"
    },
    "584": {
        "tables": [],
        "question": "If a business purchased a client database for $300,000, foreseeing its usefulness for three years, along with a trademark worth $5,000,000 expecting it to be useful indefinitely but it's required to renew it every 10 years with the Patent and Trademark Bureau for a small fee or it will become void. Given that the business applies straight-line depreciation for all its non-physical properties, what would the yearly amortization cost for these two properties amount to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "584"
    },
    "585": {
        "tables": [
            "| Net income                           | $200,000 |\n|--------------------------------------|----------|\n| Decrease in accounts receivable      | 10,000   |\n| Depreciation                         | 36,000   |\n| Increase in inventory                | 12,000   |\n| Increase in accounts payable         | 17,000   |\n| Decrease in wages payable            | 8,000    |\n| Increase in deferred tax liabilities | 12,000   |\n| Profit from the sale of equipment    | 6,000    |"
        ],
        "question": "Given the data provided, what is the company's cash flow generated from operations?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "585"
    },
    "586": {
        "tables": [
            "| Total asset | $5,000 million |\n| --- | --- |\n| ROE | 15% |\n| Cost of equity | 12.5% |"
        ],
        "question": "Company N is financed with a 60% debt and 40% equity ratio. Using the RI model for valuation, John has gathered the necessary data in the provided chart. What is Company N's residual income?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "586"
    },
    "587": {
        "tables": [],
        "question": "If a customer buys a 6-year bond at a price of 109.83, with an 8% coupon rate where the interest is paid yearly. Supposing the consistent market rate during this time is 6%, what would be the horizon yield if the customer decides to offload the bond at the close of year 5?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "587"
    },
    "588": {
        "tables": [],
        "question": "If the preferred shares of Baxter corporation are anticipated to pay a perpetual annual dividend of $12 and the constant required rate of return is 15%, what should the value of the preferred stock be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "588"
    },
    "589": {
        "tables": [],
        "question": "What is the likelihood of a variable falling between 10 and 20 for a random variable adhering to a continuous uniform distribution within the span of 5 to 25?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "589"
    },
    "590": {
        "tables": [],
        "question": "Ultimately, in 2016, Henderson stated that BBBC bought 100% of SongBox (SB), a specific cable music channel in an all-stock transaction. At the point of acquisition, SB had intangible assets for broadcast licenses valued at $2,500. BBBC evaluated the fair market value of these licenses to be $5,500 at that date and estimated the SongBox brand name value to be $2,000, all values are in thousands. The acquisition did not create any goodwill. Prior to the amortization expense calculation, what is the rise in BBBC's intangible assets (in thousands) resulting from the 2016 purchase of SB?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "590"
    },
    "591": {
        "tables": [
            "|                 | Coefficients | Standard Error | t- Statistic | p-Value |\n|-----------------|--------------|----------------|--------------|---------|\n| Intercept       | 0.5987       | 0.0561         | 10.6749      | 0.0000  |\n| FATO            | 0.2951       | 0.0077         | 38.5579      | 0.0000  |"
        ],
        "question": "According to the model lnNPMi=b0+b1FATOi, which is based on data collected from a sample of 35 companies in the most recent fiscal year, what is the projected net profit margin for a corporation that has a fixed asset turnover ratio of 2 times? This is what Sam Braxton is studying, focusing on the relationship between companies' net profit margins (in percent) and their fixed asset turnover (FATO).",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "591"
    },
    "592": {
        "tables": [
            "| (all figures in $ thousands) | 2010 | 2009 |\n|-----------------------------|------|------|\n| Deferred tax assets        | 200  | 160  |\n| Deferred tax liabilities   | (450)| (360)|\n| Net deferred tax liabilities | (250)| (200)|\n|                             |      |      |\n| Earning before taxes         | 4000 | 3800 |\n| Income taxes at the statutory rate| 1200| 1140|\n| Income tax payable (Current income tax expense)| 1000 | 900 |"
        ],
        "question": "What was the 2010 income tax expense (in thousands) for the business, based on the provided details about the business?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "592"
    },
    "593": {
        "tables": [],
        "question": "A set of 25 data points has an average of 8 and a standard deviation of 15. What is the standard error of this average?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "593"
    },
    "594": {
        "tables": [
            "| Security | Beginning($) | End($) | Shares |\n| -------- | ------------ | ------ | ------ |\n| G        | 15.00        | 17.00  | 500    |\n| H        | 35.00        | 33.00  | 300    |\n| 1        | 37.00        | 40.00  | 200    |"
        ],
        "question": "Recently, an analyst named Benedict from a finance corporation collected data for a price-weighted index made up of securities G,H,I. What is the index's price return for that period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "594"
    },
    "595": {
        "tables": [],
        "question": "Firm N adheres to U.S.GAAP, it expended $150 million on acquiring inventory, $10 million on transporting the goods to their existing location and an extra $10 million on their sale. What is the inventory cost of firm N?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "595"
    },
    "596": {
        "tables": [],
        "question": "If the $150 million distressed bond portfolio managed by Sarah Brown undergoes a 4-sigma daily event, can you estimate the change in the portfolio's value? Sarah, who conducts stress tests on the portfolio, has experienced numerous days over the past two years where the portfolio's daily value change was more than 3 standard deviations. This portfolio has an annualized return of 12% and an annualized return volatility of 25%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "596"
    },
    "597": {
        "tables": [],
        "question": "If a firm has total variable expenses of $4 million and set expenses of $3 million, what should be its minimal total income to remain in business over the long haul?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "597"
    },
    "598": {
        "tables": [],
        "question": "Henry Miller and his team gather extensive statistical data on the automobile market. From the information, they deduce that the average cost of SUVs exceeds $46,435 in their nation. Subsequently, they randomly pick 64 SUVs with an average value of $46,760. Assuming that the population's standard deviation is 1370, Henry Miller performs a hypothesis test to verify their hypothesis. What is the figure for the calculated test statistic?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "598"
    },
    "599": {
        "tables": [
            "|                               | 31 Dec 05 |  31 Dec 06  |\n| ----------------------------- | --------- | ----------- |\n| Inventory reported on balance sheet | $500,000  | $600,000 |\n| LIFO reserve                  | $50,000   | $70,000  |\n| Average tax rate              | 30%       | 30%       |"
        ],
        "question": "What would be the inventory on 31 December 2006 for a US business that employs the last in, first out (LIFO) accounting system for inventory, according to the data reviewed by the analyst, once the values have been adjusted to adapt to the first in, first out (FIFO) method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "599"
    },
    "600": {
        "tables": [
            "| Maturity | Par Rate | Spot Rate |\n|----------|---------|---------|\n| 1        | 2.5000% | 2.5000% |\n| 2        | 3.5000% | 3.5177% |",
            "|          | Time 0   | Time 1                  |\n|----------|----------|-------------------------|\n|          |          | 5.8365%                 |\n|          | 2.500%   |                         |\n|          |          | Lower one-period forward rate |"
        ],
        "question": "Given the information in Displays 1 and 2, when aligning a binomial interest rate tree beginning with the computation of implied forward rates illustrated in Display 2, what is the worth of the inferior one-period forward rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "600"
    },
    "601": {
        "tables": [],
        "question": "Suppose the Smith account had a return of -5.3% in a specific month, during which the portfolio benchmark yielded a return of -5.5% and the market index returned -2.8%. What is the return of the Smith account attributing to the manager's style?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "601"
    },
    "602": {
        "tables": [],
        "question": "A telecommunications company based in Europe adheres to International Financial Reporting Standards (IFRS) and capitalizes costs of new product development. In 2014, they invested \u20ac25 million into new product development and reported an amortization expense of \u20ac10 million from the previous year's new product development. The cash flow from operations for this company was reported as \u20ac290 million. An analyst is drawing a comparison between this European company and a telecommunications provider in the US, and has chosen to adjust his financial statements to the US GAAP. Considering US GAAP and not taking tax effects into account, what would be the operational cash flow for the European telecommunications provider?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "602"
    },
    "603": {
        "tables": [
            "| Time to Maturity | Spot Rate |\n|------------------|-----------|\n| 1 year           | 8.0%      |\n| 2 years          | 7.5%      |\n| 3 years          | 7.0%      |\n| 4 years          | 6.5%      |\n| 5 years          | 6.0%      |\n| 6 years          | 5.5%      |"
        ],
        "question": "Based on the given spot rates, what is the present value of the bond issued by Valencia Corp. that pays no coupon for the initial two years, and then commences to pay an annual coupon at a 9% rate until the bond matures after six years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "603"
    },
    "604": {
        "tables": [],
        "question": "Utilizing a two-period binomial model, Emily is looking to compute the terminal value of a put option. Given the current price of the underlying asset is $150 and the strike price stands at $120, the extent of an upward move is 1.69 and a downward move is 0.59. The option will only hold a positive value if the price falls below the strike price, otherwise its value will remain zero. How many terminal nodes could potentially offer a positive return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "604"
    },
    "605": {
        "tables": [],
        "question": "If the one-year spot rate r(1) equals 4%, the forward rate for a one-year loan commencing in one year is 6%, and the forward rate for a one-year loan starting in two years is 8%, which one is the three-year spot rate out of the given rates?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "605"
    },
    "606": {
        "tables": [
            "|       | Time 0  | Time 1  | Time 2  |\n|-------|---------|---------|---------|\n|       |         |         | 2.7183% |\n|       |         | 2.8853% |         |\n|       | 1.500%  |         | 1.6487% |\n|       |         | 1.7500% |         |\n|       |         |         | 1.0000% |",
            "| Bond | Maturity | Coupon Rate |\n| --- | --- | --- |\n| Bond C | 2 years | 2.5% |"
        ],
        "question": "What is the value of Bond Z at the upper node at Time 1, when valuing it using the binomial tree shown in Display 1 and the selected data for both bonds given in Display 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "606"
    },
    "607": {
        "tables": [],
        "question": "A financial expert is looking to determine the comprehensive yield of an recent transaction carried out by an asset fund. The fund entered a completely secured long futures agreement in nearby soybean futures agreements at the listed futures cost of 755.0 (US cents/bushel). After three months, the entire futures agreement was shifted when the near-term futures cost was 768.0 and the further-term futures cost was 773.0. Throughout the three-month timeframe between the initiation of the initial long agreement and the adjustment of the contract, the security earned an yearly rate of 0.40%. What is the fund's three-month comprehensive yield on the soybean futures transaction?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "607"
    },
    "608": {
        "tables": [],
        "question": "What is the delta of a long forward contract on a property with a 10% annum dividend yield and six months to maturity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "608"
    },
    "609": {
        "tables": [],
        "question": "In compliance with IFRS, ABC Corporation obtained a loan to fund the construction of new manufacturing lanes last year. The associated details are provided below: The loan was taken on: 1/1/2017, The borrowed sum was: $100 million, The yearly interest rate: 12%, The loan period: 4 years. The repayment method includes yearly interest payments only, with the principal due at loan maturity. The new manufacturing lanes will take one year to build, and during this time, ABC Corporation succeeded in generating $2 million by investing the loan funds. What would be the total capitalized interest over the loan period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "609"
    },
    "610": {
        "tables": [],
        "question": "If Cindy Corp. recently bought a manufacturing device for $60,000 that is anticipated to usher in an annual cash inflow of $25,000 for six years, how much tax will they have to pay in the first year, given that they will depreciate the equipment over six years for accounting purposes and taxation authorities will deem the machine useful for five years, with no salvage value and a 40% tax rate, assuming the straight-line method is used?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "610"
    },
    "611": {
        "tables": [],
        "question": "A financier acquires a 6% annual payment bond that matures in three years. If the bond's yield-to-maturity stands at 8% and it's currently valued at 94.845806 per 100 of par, what would be the bond's Macaulay duration?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "611"
    },
    "612": {
        "tables": [],
        "question": "In an economy, there are two firms, Firm X and Firm Y. The default rate for Firm X is 10%, and the default rate for Firm Y is 20%. Assuming defaults for the two firms transpire separately, what is the likelihood of both firms defaulting?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "612"
    },
    "613": {
        "tables": [
            "|                   | 2018   | 2017   | 2016   |\n|------------------| ------- | ------- | ------- |\n| Revenue          | 56,455  | 45,882  | 27,265  |\n| EBIT              | 4,579   | 3,671   | 2,905   |\n| EBT               | 4,012   | 2,878   | 1,987   |\n| Net Income   | 3,560   | 2,071   | 1,295   |\n| Asset Turnover | 0.56     | 0.52     | 0.49     |\n| Asset/Equity  | 2.55     | 2.86     | 2.98     |",
            "|   | 2018 | 2017 | 2016 |\n|---|---|---|---|\n| **Net income** | 3,560 | 2,071 | 1,295 |\n| **Net cash flow provided by (used in) CFO** | 8,850 | 4,220 | 2,990 |\n| **Net cash flow provided by (used in) CFI** | (9,880) | (3,250) | (4,875) |\n| **Net cash flow provided by (used in) CFF** | (5,120) | 1,050 | (1,910) |\n| **Average net operating assets** | 42,000 | 40,530 | 41,600 |"
        ],
        "question": "What is the ratio of operating cash flow before interest and taxes to operating income for XYZ Company for 2018, given the financial data and cash flow data gathered by the analyst, and considering that the CFF involves cash paid for interest of 1260 and the CFO involves taxes of 1850 in 2018?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "613"
    },
    "614": {
        "tables": [],
        "question": "If the yield drops by 200 basis points on a bond that has an effective duration of 11 and a convexity of 120, what is the percentage change in the bond's price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "614"
    },
    "615": {
        "tables": [],
        "question": "Christopher is looking to calculate the foreign-currency return for Portfolio Z. The domestic currency is EUR while the foreign currency is GBP. The data shows that the domestic-currency return is 2% and GBP appreciated by 7% against the EUR. What is the return for the foreign-currency portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "615"
    },
    "616": {
        "tables": [],
        "question": "Following a six-month period, the growth portfolio managed by Mia Williams has surpassed its benchmark. Williams posits that her chances of outperforming the benchmark annually stand at 3 to 1. Assuming these odds hold true, what is the likelihood that Williams' portfolio will top the benchmark for the year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "616"
    },
    "617": {
        "tables": [],
        "question": "A community has an average of 25 with an undetermined standard deviation. We choose 100 individuals from this community to create a sample whose mean is 22.5 and variance is 16. What is the standard error of the sample mean?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "617"
    },
    "618": {
        "tables": [],
        "question": "Assuming that the current annualized short-term rate is 3.2% and the annual basis point-volatility is 2.1%, a finance specialist constructs a binomial interest rate tree using the Ho-Lee model with an annualized drift of 80 bps in the first month and 120 bps in the second month using a monthly time step. What is the interest rate in the lowest node after two months?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "618"
    },
    "619": {
        "tables": [],
        "question": "For a normally distributed random variable, what is the likelihood that the random variable exceeds the mean by more than three standard deviations\uff08F\uff083\uff09=0.9987\uff09?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "619"
    },
    "620": {
        "tables": [],
        "question": "In the beginning of 2011, the spot exchange rate between the UK pound (GBP) and the New Zealand dollar (NZD) was pinned at 2.0979. The GBP interest rates, calculated on a 360-day year basis, were established as 1.6025% for the UK pound and 3.2875% for the NZD. What would the 180-day forward points (multiplied by four decimal points) in NZD/GBP look like?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "620"
    },
    "621": {
        "tables": [],
        "question": "What is the consistent sum that, when deposited every quarter, will increase to \u00a325,000 in 10 years at a yearly interest rate of 6% weighted quarterly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "621"
    },
    "622": {
        "tables": [],
        "question": "In their next analysis, Tseng and Collin study a possible investment in the leveraged buyout of Peterson Enterprises. Specifically, they are considering buying all the preference shares and 90% of the common equity in the LBO. The specifics of the LBO are as follows: An initial investment of $10 million is required. The financing includes $6 million in debt, $3.6 million in preference shares with a 15% annual return paid out at exit, and $0.4 million in common equity. The projected exit value in six years is $15 million, with an expected decline in debt of $2.8 million in the six years before exit. What would be the multiple of anticipated proceeds at the time of exiting in relation to the funds invested for JRR\u2019s Peterson LBO investment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "622"
    },
    "623": {
        "tables": [],
        "question": "A trader quotes the BRL/MXN spot rate at 0.1378. The 6-month forward rate is 0.14193. What are the 6-month forward points?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "623"
    },
    "624": {
        "tables": [
            "|        | 2009 | 2008 |\n|--------|------|------|\n| COGS   | 1200 | 1430 |\n| LIFO Reserve | 800  | 820  |"
        ],
        "question": "If a financier gathered inventory information from a business and the business utilized the FIFO technique for recognition, what would be the cost of goods sold?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "624"
    },
    "625": {
        "tables": [
            "|    Face value    |  \u00a350 million  |\n|------------------|---------------|\n| Coupon rate, paid annually |  4%  |\n|  Maturity  date  | December 31,2019 (10 years) |\n|  Issue  price  | 92.28|"
        ],
        "question": "If a business adopts IFRS and its bonds have a market interest rate of 5 percent as of January 1, 2010, what might be the interest expense (in millions) for 2010 based on those bond characteristics?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "625"
    },
    "626": {
        "tables": [],
        "question": "If American and Spanish bonds have return standard deviations of 0.64 and 0.56, respectively, and the correlation between these two bonds is 0.24, what is the return covariance?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "626"
    },
    "627": {
        "tables": [],
        "question": "What is the market price for a zero-coupon bond that matures in 18 years and has a maturity value of $1,000, if it's discounted at an annual interest rate of 12% with compounding happening twice a year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "627"
    },
    "628": {
        "tables": [
            "| Accounting profit (earnings before taxes) | $250,000  |\n|-----------------------------------------|-------|\n| Taxable income                           | $215,000  |\n| Tax rate                                   | 30%   |\n| Income taxes paid in year                | $61,200  |\n| Deferred tax liability, start of year | $82,400  |\n| Deferred tax liability, end of year    | $90,650  |"
        ],
        "question": "Given the available information, what is the reported income tax expense on this year's earnings statement for a corporation during its current financial year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "628"
    },
    "629": {
        "tables": [],
        "question": "The asset has a 9% rate of return and the debt costs 3%. A buyer purchased the asset with equity totaling 15 and a debt of 30. What is the equity return rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "629"
    },
    "630": {
        "tables": [],
        "question": "Imagine a piece of art is made and bought in 2010 for \u00a35,000. The costs for creating this piece of art came to \u00a32,000. Based on the sum-of-value-added technique for GDP calculation, what is the value added by the final process of making the artwork?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "630"
    },
    "631": {
        "tables": [],
        "question": "If ten portfolio managers are in the running for the first, second, and third top portfolio manager award of 2012, determined by the individual assessments of a team of investment analysts, how many possible combinations can each analyst come up with for their rankings?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "631"
    },
    "632": {
        "tables": [
            "| Time-to-Maturity | Spot Rates |\n|----------------|-----------|\n| 1-year         | 7%        |\n| 2-year         | 8%        |\n| 3-year         | 9%        |"
        ],
        "question": "The maturity period of Bond A is 3 years, with annual interest payments and a coupon rate of 6%. Given the spot rates outlined below, what would be the price of Bond A?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "632"
    },
    "633": {
        "tables": [],
        "question": "Corporation X is a crude oil provider. As a researcher, you are tasked with assessing whether Corporation X will undergo new growth by predicting if Corporation X's biggest client, Corporation Y, will enhance their order quantity. You predict that the likelihood of Corporation Y augmenting the order quantity is 30%. If Corporation Y does amplify the order quantity, Corporation X will have a new growth probability of 80%. However, if Corporation Y does not augment the order quantity, then Corporation X will only have a new growth probability of 10%. Later on, you found out that crude oil provider Corporation X has initiated a new growth. Given this scenario, what is the probability that you estimate Corporation Y to enhance the order quantity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "633"
    },
    "634": {
        "tables": [
            "| Jan | Feb | Mar | Apr | May | Jun |\n|-----|-----|-----|-----|-----|-----|\n| 20% | 4%  | -5% | 12% | 3%  | 12% |"
        ],
        "question": "The table underneath indicates the monthly stock returns for Ivy Corp. Based on the information provided in this table, can you compute the mode of the returns for Ivy Corp.?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "634"
    },
    "635": {
        "tables": [],
        "question": "There are 6000 software developers in the population which is expected to have a normal distribution. A sample of 100 is taken from this population. Given a z-statistic, the 95% confidence interval of the sample mean for the yearly salary is 32.5 (in thousands) dollars, fluctuating between 22 (in thousands) dollars and 43 (in thousands) dollars. Compute the standard error of the mean yearly salary:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "635"
    },
    "636": {
        "tables": [],
        "question": "A financial expert has been tasked with identifying potential arbitrage openings in the Treasury bond market by contrasting the cash flows of selected bonds with mixtures of other bonds. If a 1-year zero-coupon bond is valued at USD 98, and a 1-year bond which pays an 8% coupon semi-annually costs USD 103, utilizing a replication methodology, what should be the cost of a 1-year Treasury bond that offers a 6% semi-annual coupon?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "636"
    },
    "637": {
        "tables": [
            "| Items               | Times |\n|---------------------|-------|\n| Receivable turnover | 5     |\n| Inventory turnover  | 4     |\n| Payable turnover    | 10    |"
        ],
        "question": "Can you compute the cash conversion cycle for the firm?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "637"
    },
    "638": {
        "tables": [
            "| Revenue | $4,000,000 |\n| --- | --- |\n| Cost of goods sold | $3,000,000 |\n| Other operating expenses | $500,000 |\n| Interest expense | $100,000 |\n| Tax expense | $120,000 |"
        ],
        "question": "The manufacturing company, Denali Limited, provided the following income statement data: What is the equivalent of Denali's gross profit?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "638"
    },
    "639": {
        "tables": [
            "|     | Portfolio return | Benchmark return | Portfolio weight | Benchmark weight |\n|-----|------------------|------------------|------------------|------------------|\n| Domestic | 25% | 15% | 50% | 35% |\n| Bond 9% | - | 5% | 30% | 35% |\n| International 15% | - | 18% | 20% | 30% |"
        ],
        "question": "Can you calculate the value added from asset allocation according to the given table?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "639"
    },
    "640": {
        "tables": [],
        "question": "Considering that the December 2010 annual report of Adidas AG indicates Depreciation and amortization: \u20ac249 million, Total assets: \u20ac10,618 million, Total debt: \u20ac1,613 million, Shareholders\u2019 equity: \u20ac4,616 million, what is the company's debt/capital ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "640"
    },
    "641": {
        "tables": [
            "|    |    |\n|---|---|\n| Net income | 45.8 |\n| Depreciation | 18.2 |\n| Loss on sale of equipment | 1.6 |\n| Decrease in accounts receivable | 4.2 |\n| Increase in inventories | 5.4 |\n| Increase in accounts payable | 4.5 |\n| Capital expenditures | 7.3 |\n| Proceeds from sale of stock | 8.5 |"
        ],
        "question": "Let's take U.S. GAAP into account unless specified otherwise. What is the annual free cash flow to equity for the business, taking into account that it does not pay out any dividends, carries no debt, and this information was collected over one year by a market researcher?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "641"
    },
    "642": {
        "tables": [
            "|                                   |                 |\n|-----------------------------------|-----------------|\n| Oakstar Timber Balance Sheet (Year Ended 31 December 2008) |        |\n|        **Assets**                    |                 |\n| Cash                                | $500,000        |\n| Inventory                           | $25,000         |\n| Accounts receivable                 | $50,000         |\n| Plant and equipment (cost less depreciation) | $750,000      |\n| Land                                | $10,000,000     |\n| **Total assets**                    | $11,325,000     |\n|       **Liabilities and Equity**   |                 |\n| Accounts payables                   | $75,000         |\n| Long-term bank loan                 | $1,500,000      |\n| Common stock                        | $9,750,000      |\n| **Total liabilities and equity**   | $11,325,000     |"
        ],
        "question": "The primary asset of the company Cedarstar consists of 10,000 hectares of timberland in western Canada, containing both new and mature Douglas fir trees. As of December 31, 2008, Cedarstar's financial details are as follows with additional data collected by Johnson regarding the recent sales of similar timberland properties in western Canada. For pieces of land possessing the same characteristics as Cedarstar, the going rate is $8,750 per hectare. Using these details and an asset-based approach, what is the net worth (after deducting any liabilities) of Cedarstar?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "642"
    },
    "643": {
        "tables": [
            "| 2012 | 2013 | 2014 | 2015 | 2016 | 2017 |\n|------|------|------|------|------|------|\n| 10%  | 15%  | -8%  | 12%  | -6%  | 8%   |"
        ],
        "question": "Calculate the arithmetic mean return for the stock of Boulder Corporation, according to the given table showcasing their annual stock returns.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "643"
    },
    "644": {
        "tables": [
            "| Bond | Par Value Owned | Market Value Owned | Duration |\n|------|-----------------|-------------------|--------- |\n| A    | $8,000,000     | $12,000,000       | 3       |\n| B    | $8,000,000     | $6,000,000        | 7       |\n| C    | $4,000,000     | $6,000,000        | 6       |"
        ],
        "question": "A portfolio manager possesses the following three bonds, all of which are free of options and carry the specified durations. What is the duration of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "644"
    },
    "645": {
        "tables": [],
        "question": "Three years ago, Hamilton Insurance Company launched a fixed-rate perpetual preferred stock and it was privately distributed among institutional investors. The stock was dispensed at $25 per share with a dividend of $1.75. Today, if the firm were to issue preferred stock, the yield would be 6.5 percent. So, what is the present value of the stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "645"
    },
    "646": {
        "tables": [
            "|  | Maturity (Years) |  |  |  |\n|---|---|---|---|---|\n|  | 1 | 2 | 3 | 4 |\n| Government spot rate | 2.25% | 2.70% | 3.30% | 4.05% |"
        ],
        "question": "A buyer purchases a lesser-quality, two-year corporate bond that has a coupon rate of 4.15%. The exhibit underneath displays the Government Spot Rates. The Z-Spreads for this corporate bond is at 0.65%. The bond is possibly trading at a price of:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "646"
    },
    "647": {
        "tables": [],
        "question": "The formula: Qod = 3 - 0.05P0 + 0.009I - 0.16Pt represents a person's demand for onions: with Qod being the demanded quantity of onions, P0 represents the cost per pound of onions, I symbolizes the household income, and Pt indicates the price per pound of tomatoes. Considering a case where the cost of onions is $1.25 per pound, the income of the household is $2,500, and tomatoes are priced at $3.75 per pound, what would be the cross-price elasticity of demand concerning the price of tomatoes for this person's onion demand?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "647"
    },
    "648": {
        "tables": [],
        "question": "After deciding to sell off its non-core assets, experts forecast that the standard deviation of returns for Dell Inc. will increase to 30% and its correlation with the market portfolio will stay the same at 0.8. The risk-free rate and the market risk premium are predicted to stay at 6% and 8% respectively. However, the market portfolio's standard deviation of returns is anticipated to drop to 15%. What is the projected return for the company after the restructuring?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "648"
    },
    "649": {
        "tables": [],
        "question": "If the spot rate for 4 years is at 5% and for 2 years it's at 3.7%, what would be the forward rate for 2 years starting from 2 years in the future?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "649"
    },
    "650": {
        "tables": [
            "|                       | Year 1 | Year 2 | Year 3 |\n|-----------------------|--------|--------|--------|\n| Bt-1                  | $28.25 |        |        |\n| EPS                   | $6.50  | $7.82  | $6.93  |\n| Dividends per share   | $1.75  | $2.63  | $1.97  |\n| Long-term ROE         | 14.5%  | 14.5%  | 14.5%  |\n| Constant long-term growth | 5.5%   | 5.5%   | 5.5%   |\n| Cost of equity        | 10.9%  | 10.9%  | 10.9%  |"
        ],
        "question": "John is examining Company N utilizing the multistage residual income model. He has projected that the residual income per share will remain unchanged from year 3 onwards forever and the short-term ROE exceeds the long-term ROE. He has also calculated the profits and dividends for the upcoming three years as shown in the table below. What is the intrinsic value of Company N?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "650"
    },
    "651": {
        "tables": [],
        "question": "At the start of the year, a large corporation acquired all 600,000 shares of a smaller corporation, priced at $25 per share. The smaller corporation had recognized net assets worth $6.5 million prior to being acquired. The larger corporation determined that the smaller corporation's fair value had appreciated by $3 million. What should be the 'goodwill' amount reported by the larger corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "651"
    },
    "652": {
        "tables": [],
        "question": "Analyst Johnson is employing a GARCH(1,1) model to calculate daily variance on daily returns(rt) : ht:=\u03b10 + \u03b11r2t-1 + \u03b2ht-1 while \u03b10 = 0.000003 \u03b11 = 0.03 \u03b2 = 0.94. Can you provide the estimate for the long-run annualized volatility (taking into consideration that volatility increases by the square root of time and there are 252 trading days in a year)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "652"
    },
    "653": {
        "tables": [
            "| Year | Investment | Return |\n|------|------------|--------|\n| 1    | $500       | 12%    |\n| 2    | $600       | 5%     |\n| 3    | $1000      | 1%     |"
        ],
        "question": "The arithmetic mean annual return for a fund managed by John for year 1,2,3 will be:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "653"
    },
    "654": {
        "tables": [],
        "question": "Based on the data that Roberts Inc. (RI) announced an accounts receivable of $66 million at the end of its second fiscal quarter, and $55 million at the conclusion of its third fiscal quarter, with revenues reported to be $72 million during that quarter. What is the amount of cash RI received from clients during the third fiscal quarter?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "654"
    },
    "655": {
        "tables": [],
        "question": "If a financial institution has total interest costs of 65 million, total raised funds of 1000 million with 750 million of it being earning assets, and other operating costs of 10 million, and the current tax rate is 35%, taking into account that shareholders have invested 100 million with an expected return rate of 12%, what is the weighted average total cost of capital according to the historical average cost methodology?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "655"
    },
    "656": {
        "tables": [
            "|                                                 |         |\n|-------------------------------------------------|---------|\n| Exhibit 3. Selected Financial Data for Topmaker, Inc. ,Estimated Year Ending 31 December 2017 ($ millions) |         |\n| Carrying value of cash-generating unit/reporting unit  | 15,200 |\n| Recoverable amount of cash-generating unit/reporting unit  | 14,900 |\n| Fair value of reporting unit       | 14,800 |\n| Identifiable net assets            | 14,400 |\n| Goodwill                           | 520    |"
        ],
        "question": "Thomas Brooks, a research analyst in a global securities firm, is crafting a research summary on Megacreator, Inc., a company that adheres to IFRS and is publicly traded. On 1 January 2016, Megacreator bought a 15% stake in Brewster Co., holding voting rights, for $300 million. Megacreator maintains a seat at the Brewster board of directors table and has a say in policy decisions. Brooks is anxious about the potential impact of goodwill impairment due to anticipated industry shifts set to take place late in 2017. He computes the impairment loss using the predicted consolidated balance sheet data depicted in Exhibit 3, assuming that Megacreator's cash-generating unit and reporting unit are identical. According to Exhibit 3, the IFRS impairment loss for Megacreator is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "656"
    },
    "657": {
        "tables": [],
        "question": "What is the total revenue generated by the hedge fund company, Bearing, this year, considering it had $288 million in assets under management (AUM) at the end of the previous year, a 2% management fee (based on year-end AUM), 20% incentive fee calculated after the management fee, a 5% soft hurdle rate, and a high-water mark of $357 million, and its fund return for the current year is 25%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "657"
    },
    "658": {
        "tables": [
            "| Bond | Maturity | Market Value Price | Coupon | Yield-to-Maturity | Modified Duration |\n|------|----------|--------------------|--------|-------------------|-------------------|\n| A    | 6 years  | 170,000            | 2.00%  | 4.95%             | 5.42              |\n| B    | 10 years | 120,000            | 2.40%  | 4.99%             | 8.44              |\n| C    | 15 years | 100,000            | 5.00%  | 5.00%             | 10.38             |"
        ],
        "question": "Assuming annual coupon payments and no accrued interest, a collection of bonds includes the following three fixed-rate bonds. Prices are given per 100 of par value. What is the modified duration of this bond portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "658"
    },
    "659": {
        "tables": [],
        "question": "How many shares should be accounted for when calculating the diluted EPS under these circumstances? There are 500,000 shares in circulation. Plus, there are 200,000 exercisable warrants at $42 per share. The average share price stands at $45 while the share price at the end of the year is $50.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "659"
    },
    "660": {
        "tables": [],
        "question": "In 2016, Corporation A announced: Net earnings $50,000, Weighted average of ordinary shares 6,000, Convertible privileged shares 1,000 (Each of these privileged shares can be converted into 3 ordinary shares) preferred dividends are $0.2 per share. What will be the diluted EPS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "660"
    },
    "661": {
        "tables": [
            "| Stock price per share | $60.75 |\n|-----------------------|--------|\n| Comprehensive income (millions) | $193.0 |\n| Other comprehensive income (millions) | $87.6 |\n| Common shares outstanding (millions) | 46.5 |"
        ],
        "question": "Given the existing data on the corporation, what is its P/E on a net income basis?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "661"
    },
    "662": {
        "tables": [],
        "question": "Assuming there are 250 trading days in a year and the portfolio returns are independent and follow the same normal distribution with zero mean, what is the estimated yearly VaR at the 95% confidence level for a local credit union's investment securities portfolio that has a current market value of USD 3,700,000 with a daily variance of 0.0004?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "662"
    },
    "663": {
        "tables": [],
        "question": "The current worth of a portfolio is $89.32, and its anticipated value after 1 year is $100. What is the rate of return for this portfolio when compounded continuously?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "663"
    },
    "664": {
        "tables": [],
        "question": "If the annual spot rate r(1) equals to 4% and the forward price for a one-year zero coupon bond starting in one year equals to 0.9434, then what is the present cost of a two-year zero-coupon bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "664"
    },
    "665": {
        "tables": [
            "| Security | Expected Annual Return(%) | Expected Standard Deviation(%) |\n|---|---|---|\n| 1 | 16 | 20 |\n| 2 | 12 | 20 |"
        ],
        "question": "What is the anticipated standard deviation of an equal-weighted portfolio made by an investment analyst, if the correlation of returns between the two securities is -0.15?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "665"
    },
    "666": {
        "tables": [
            "| Comparable Companies | Tax Rate (%) | Debt/Equity | Equity Beta |\n| -------------------- | ------------ | ----------- | ----------- |\n| Private company      | 30.0         | 1.00        | N.A.        |\n| Public company       | 35.0         | 0.90        | 1.75        |"
        ],
        "question": "What is the projected equity beta for a private firm using the pure-play approach and the data obtained from its publicly traded rival?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "666"
    },
    "667": {
        "tables": [],
        "question": "An investment manager is looking to build a bull spread utilizing call options. A strike price of $50 costs $8 and a strike price of $60 costs $2. Both these calls mature in a month and have the same underlying, currently valued at $55. What is the breakeven underlying price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "667"
    },
    "668": {
        "tables": [],
        "question": "Last year, Corporation Z issued a dividend of $0.5. Earnings for this year are estimated to be $3.0. Assuming the desired payout ratio is 30%, and the dividend is adjusted over a 4-year term. What is the anticipated dividend for the current year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "668"
    },
    "669": {
        "tables": [
            "| Product | Quantity Produced in 2012 | Quantity Produced in 2013 | Product Unit Prices in 2012 | Product Unit Prices in 2013 |\n|-------|-------------------------|-------------------------|---------------------------|---------------------------|\n| X     | 351.0                   | 352.0                   | 13.3                          | 13.8                          |\n| Y     | 179.0                   | 182.5                   | unknown                    | 11.1                          |"
        ],
        "question": "If we take 2012 as the reference year for calculating GDP and the GDP deflator for the economic climate in 2013 is 102.4, what would be the unit cost of item B in 2012 in an economy consisting of two items, A and B, given the details below?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "669"
    },
    "670": {
        "tables": [
            "|                             | 5-Year T-Note | 10-Year T-Note |\n|-----------------------------|---------------|----------------|\n| Yield to maturity           | 6.02%         | 6.41%          |\n| Modified duration           | 4.8           | 9.1            |\n| BPV per 100,000 in par value| 47.22         | 88.41          |\n| Conversion factor for cheapest-to-deliver | 0.88          | 0.90           |"
        ],
        "question": "In addition to contemplating the implementation of financial instruments to control interest rate risk, Sullivan is also contemplating a fresh approach for Shoreline. Sullivan calculates how many bond futures are required to shield the company's total exposure to interest rate risk. The asset portfolio has a basis point value (BPV) of 96,000, while the liability portfolio's BPV is 44,000. Based on the extra data about bond futures that Sullivan has gathered in Exhibit 1, how many five-year note futures contracts need to be sold to readjust the immunizing portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "670"
    },
    "671": {
        "tables": [
            "|                               |                               |                                           |                        |\n|-------------------------------|-------------------------------|-------------------------------------------|------------------------|\n| An individual consumer's demand for tea |                                               | Qdt=1, 800-40Pt+0.5/+150Pc                |                        |\n| Seller's supply of tea        |                                               | QSt=-516+350Pt-120W                        |                        |\n|                               |                               |                                           |                        |\n|                               |                               | **Legend and Initial Values**              | **Assumed Values**     |\n| ad t                          |               Quantity of tea |                                           |                        |\n| Pt                            | Price of tea per 100 grams    |                                           |                        |\n| I                             |       Household income        |                                           | \u00a32,400                 |\n| W                             | Hourly wage rate for labor    |                                           |                        |\n| Pc                            | Price of coffee per 100 grams |                                           | \u00a322.4                  |\n|                               | Equilibrium price of tea      |                                           | \u00a330.6                  |"
        ],
        "question": "Assuming there is a 2.5% rise in the income of the family while G and T remain constant, what would be the adjusted equilibrium quantity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "671"
    },
    "672": {
        "tables": [],
        "question": "If you were to invest 1 million dollars in a financial product today with a stated annual interest rate of 6%, what would its value be three years from now considering it is compounded monthly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "672"
    },
    "673": {
        "tables": [
            "| Stock | Shares Outstanding | % Shares in Market Float | Beginning of Period Price | End of Period Price | Dividends Per Share |\n|-------|-------------------|--------------------------|---------------------------|---------------------|---------------------|\n| A     | 5,000             | 90                       | 40                        | 45                  | 1.00                |\n| B     | 2,000             | 100                      | 68                        | 60                  | 0.50                |\n| C     | 6,000             | 70                       | 60                        | 70                  | 1.50                |\n| D     | 4,000             | 40                       | 20                        | 24                  | 0.80                |"
        ],
        "question": "If we consider the initial value of the float-adjusted market-capitalization-weighted equity index to be 100, what would be the final value considering the data for four stocks in the index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "673"
    },
    "674": {
        "tables": [],
        "question": "What is the price elasticity of demand at the neighborhood fitness center if the membership fee is $35, given that their membership demand is dictated by the equation: Qdfc = 400 - 5 Pfc, with Qdfc representing the number of gym members and Pfc being the membership cost?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "674"
    },
    "675": {
        "tables": [],
        "question": "Assuming that the true risk-free return rate is 3%, the anticipated inflation premium is 5% and the interest rate determined by the market for a certain investment is 12%, what is the total of the default risk premium, the liquidity premium, and the maturity premium for the investment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "675"
    },
    "676": {
        "tables": [
            "| Buyer   | Bid Size (Number of shares) | Limit price($) | Offer size (Number of shares) | Seller   |\n|---------|-----------------------------|----------------|-------------------------------|----------|\n| Liam    | 7,000                       | 20.70          |                               |          |\n| Debbie  | 200                         | 20.88          |                               |          |\n| Philips | 400                         | 21.02          |                               |          |\n| Fiona   | 300                         | 21.89          |                               |          |\n|         |                             | 21.90          | 300                           | Kevin    |\n|         |                             | 22.01          | 1,300                         | Veronica |\n|         |                             | 22.06          | 1,500                         | Ethel    |"
        ],
        "question": "Imagine that a limit order is listed in the stock's order book. Let's say Alex placed a day order with a limit price of $20.87 and sold 1,000 shares, with no other investors placing a buy order after his was submitted. What would be the average price for Alex's transaction?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "676"
    },
    "677": {
        "tables": [],
        "question": "The investment portfolio is worth $10,000,000. The retirement fund intends to employ a futures contract valued at $125,000 to reduce the beta from 1.2 to 0.9 over a span of two months. The futures contract has a beta of 0.95. How many futures contracts should be sold?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "677"
    },
    "678": {
        "tables": [
            "|  |  |  | Year 3 | Year 2 | Year 1 |\n| --- | --- | --- | --- | --- | --- |\n| Earnings before income taxes: | | United States | $88,157 | $75,658 | $59,973 |\n|  | | Foreign | $116,704 | $113,509 | $94,760 |\n|  |  | Total | $204,861 | $189,167 | $154,733 |\n| The components of the provision for income taxes are as follows ($ thousands): | | |  | | |\n| Income taxes: | Current: | Federal | $30,632 | $22,031 | $18,959  |\n|  | | Foreign | $28,140 | $27,961 | $22,263  |\n|  | | | $58,772 | $49,992 | $41,222 |\n| | Deferred: | Federal | ($4,752) | $5,138 | $2,336 |\n|  | | Foreign | $124 | $1,730 | $621 |\n|  | | | ($4,628) | $6,868 | $2,957 |\n|  |  | Total | $54,144 | $56,860 | $44,179 |"
        ],
        "question": "What was the provision for income taxes recorded in the US GAAP income statement of the firm in Year 3, given the elements of earnings before income taxes (in $ thousands)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "678"
    },
    "679": {
        "tables": [],
        "question": "A takeover private equity fund intends to invest in all of Business A's preferred shares and 70% of the ordinary shares. Business A's present valuation stands at $10 million, comprising $6.5 million in debt, $2.8 million in preferred shares and $0.7 million in ordinary shares. The projected exit value in five years time is $15 million, with a predicted decrease in debt by $2.5 million and a 15% yearly return on preferred shares. What is the ratio of anticipated proceeds at exit to the funds invested?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "679"
    },
    "680": {
        "tables": [
            "|         |           |                   |      |\n|---------|-----------|-------------------|------|\n|         |           | Underlying Bond   |      |\n| Futures Contract |   |                   |      |\n| Quoted futures price | 125.00 | Quoted bond price | 112.00 |\n| Conversion factor | 0.90 | Accrued interest since last coup on payment | 0.08 |\n| Time remaining to contract expiration | Three months | Accrued interest at futures contract expiration |0.20 |\n| Accrued interest over life of futures contract | 0.00 |   |   |"
        ],
        "question": "If Minstrel identifies an arbitrage opportunity involving a fixed-income futures contract and its related bond, and the current details on the futures contract and related bond are displayed in Exhibit 1, what would be the arbitrage profit on the bond futures contract given that the existing yearly compounded risk-free rate is 0.30%, assuming annual compounding?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "680"
    },
    "681": {
        "tables": [
            "|                     | $ millions |\n|---------------------|------------|\n| Sales               | 4,800      |\n| Cost of goods sold  | 2,880      |\n| Purchases           | 2,940      |\n| Average receivables | 625        |\n| Average inventory   | 710        |\n| Average payables    | 145        |"
        ],
        "question": "The details for a certain business are given below. How many days does it take for that business to complete its cash conversion cycle?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "681"
    },
    "682": {
        "tables": [
            "| Bond | Maturity | Market Value Price | Coupon | Yield-to-Maturity | Modified Duration |\n| --- | --- | --- | --- | --- | --- |\n| A | 3 years | 150,000 95.0000 | 3.00% | 5.67% | 4.98 |\n| B | 5 years | 110,000 90.0000 | 4.00% | 5.97% | 7.86 |\n| C | 10 years | 100,000 100.0000 | 6.00% | 6.00% | 9.27 |"
        ],
        "question": "The modified duration of a bond collection, which consists of three fixed-rate bonds that pay annual coupons without any accrued interest, is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "682"
    },
    "683": {
        "tables": [],
        "question": "The Bull Corporation anticipates growth rates of 10% and 20% for the initial two years, after which it will drop to 6%. If we consider that the return rate is 10% and Bull's recent dividend was $1, what is the value of Bull's ordinary shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "683"
    },
    "684": {
        "tables": [],
        "question": "The financial institution, TK Bank, gains arbitrage profit from the money market. They utilize a money market tool, a certificate of deposit, that has a maturity period of 300 days under the assumption that a year comprises 360 days. Given that the present value of this instrument is 93.2 and the maturity price is 100, can you determine the bond equivalent yield?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "684"
    },
    "685": {
        "tables": [
            "| Equity | Asset Allocation (%) | Asset Class Return (%) |\n|--------|----------------------|------------------------|\n| Equity A | 10.0 | 3.0 |\n| Equity B | 20.0 | 19.0 |\n| Equity C | 55.0 | -1.0 |\n| Equity D | 15.0 | 6.0 |"
        ],
        "question": "The yield of a portfolio with four stocks is equivalent to:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "685"
    },
    "686": {
        "tables": [
            "| Trades | Execution  Price | Shares Executed |\n|--------|------------------|-----------------|\n| Trade 1 | $40.75 | 10,000 |\n| Trade 2 | $41.25 | 30,000 |\n| Trade 3 | $41.50 | 20,000 |\n| Trade 4 | $41.75 | 30,000 |\n| Total |  | 90,000 |"
        ],
        "question": "On the following day, Roberts advises Green to take another look at her analysis on XYZ Corp. Green's study leads her to conclude that the company's shares are underpriced. She communicates her findings to Roberts, who directs her to buy 120,000 shares at $40.00 using a limit order of $42.00 at 10 a.m. The buy-side dealer implements the order for market execution as the price hits $40.50. The exclusive fee is a commission of $0.02 per share. By market close, 90,000 shares of the order were bought, with XYZ Corp ending at $42.50. The transaction was discharged at an average cost of $41.42. Information about the completed deals is given in Exhibit 1. Based on the information provided in Exhibit 1, what is the opportunity cost of buying the 90,000 shares of XYZ Corp?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "686"
    },
    "687": {
        "tables": [
            "| Dealer | Time   Entered | Price  | Size | Dealer | Time   Entered | Price  | Size |\n|--------|---------------|--------|------|--------|---------------|--------|------|\n| B      | 10.10 a.m.    | $17.15 | 900  | C      | 10.11 a.m.    | $17.19 | 1,200|\n| C      | 10.11 a.m.    | $17.14 | 1,500| B      | 10.10 a.m.    | $17.20 | 800  |\n| A      | 10.11 a.m.    | $17.12 | 1,100| A      | 10.12 a.m.    | $17.22 | 1,100|"
        ],
        "question": "Three brokers are involved in making the market for the stocks of Bright Systems. Using these rates, YNSM's trading desk carries out a market sell order for 1,100 stocks of Bright Systems. Based on Exhibit 1, what is the inside bid\u2013ask spread for the limit order book for Bright Systems?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "687"
    },
    "688": {
        "tables": [],
        "question": "Enterprise Z announced a COGS of $75 million. Over the year, there was a decrease of $12 million in inventory and an increase of $8 million in accounts payable. What is the total cash given to suppliers?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "688"
    },
    "689": {
        "tables": [],
        "question": "What is the covariance of returns for Stock X and Stock Y, given the correlation of their historical returns is 0.75, and the variances for Stock X and Stock Y are 0.16 and 0.09, respectively?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "689"
    },
    "690": {
        "tables": [],
        "question": "What is the worth of a preferred share if the necessary return is 10% and the yearly dividend is $5?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "690"
    },
    "691": {
        "tables": [
            "| Fiscal year end (USD  millions) | December 2018 |\n|---------------------------------|---------------|\n| Revenue                         | $31,218.00    |\n| Cost of goods sold              | $25,454.00    |\n| Sales, general, and administrative| $1,638.00    |\n| Depreciation and amortization   | $441.00       |\n| Operating income                | $3,685.00     |\n| Interest expense                | $103.00       |\n| Income before taxes             | $3,582.00     |\n| Provision for income taxes      | $1,121.00     |\n| Net income                      | $2,461.00     |"
        ],
        "question": "What is the interest coverage ratio of the operating statement, if calculated by the more conservative interest coverage ratio method, for the corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "691"
    },
    "692": {
        "tables": [
            "| Expected inflation | 1.9% |\n|---|---|\n| Expected growth in the P/E | -1.2% |\n| Expected income component | 1.8% |\n| Expected growth in real earnings per share | 2.7% |\n| Expected change in shares outstanding | 0.0% |\n| Current three-month government bond yield | 0.96% |\n| Long-term geometric average return of market equity index | 9.96% |\n| Long-term geometric average return of short-term government bond | 3.15% |"
        ],
        "question": "A researcher is determining a historical ERP for a market based on the same data. What is the historical ERP?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "692"
    },
    "693": {
        "tables": [],
        "question": "If r stands for 4% and E(MR) equals 10%, then what would be the expected yield for a security with a beta of 1.3?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "693"
    },
    "694": {
        "tables": [],
        "question": "A yearly coupon bond is valued at par value, with a coupon rate of 5%, and it will mature in 10 years. If one plans to invest for five years and the approximate modified duration of the bond is 6.872, what should the duration gap be at the point of buying?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "694"
    },
    "695": {
        "tables": [],
        "question": "If an investment analyst is looking into buying a bond that has a 5.5% annual interest rate and matures in three years, and if the anticipated rate of return on the bond is 5%, what should be the bond's price per 100 of par value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "695"
    },
    "696": {
        "tables": [
            "|                                         | Emillions   |\n|-----------------------------------------|-------------|\n| Revenues for the year                   | 12,500      |\n| Total expenses for the year             | 10,000      |\n| Unrealized gains from available-for-sale securities | 1,475       |\n| Loss on foreign currency translation adjustments on a foreign subsidiary | 325         |\n| Dividends paid                          | 500         |"
        ],
        "question": "What is the total comprehensive income (in millions) of the firm as per the data available from the firm's financial documents?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "696"
    },
    "697": {
        "tables": [],
        "question": "John just got $30 million. His blueprint is to put this money at a risk-free rate of 3% and subsequently switch them into euros after six months. To safeguard against the currency risk, John opts to buy forward contracts. The rate for six-month forward is 1.10 USD/EUR, with the spot rate currently at 1.13 USD/EUR. The day-count convention being used is 30/360. If John utilizes a six-month forward contract as his risk hedge, what will his calculated annualized return in euros be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "697"
    },
    "698": {
        "tables": [],
        "question": "A supervisor is interested in implementing a collar strategy. The existing price of shares is $20, a put option with a strike price of $15 is sold at $2.0, and a call option with a strike price of $30 is going for $2.0. What is the profit of this strategy if the price of the base share at the end is $35?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "698"
    },
    "699": {
        "tables": [],
        "question": "What is the price of a Treasury bond quoted at 97-19+ as a percentage of par?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "699"
    },
    "700": {
        "tables": [],
        "question": "A researcher predicts that 20% of high-risk bonds will become insolvent. If he uses an insolvency prediction model, he discovers that 70% of the bonds will be given a \"good\" rating, suggesting they are less likely to become insolvent. Of the bonds that became insolvent, only 50% had a \"good\" rating. Use Bayes' theorem to determine the probability of insolvency given a \"good\" rating. (Hint, let P(A) be the probability of insolvency, P(B) be the probability of a \"good\" rating, P(B | A) be the likelihood of a \"good\" rating given insolvency, and P(A | B) be the likelihood of insolvency given a \"good\" rating.)",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "700"
    },
    "701": {
        "tables": [],
        "question": "If f(0,1)=0.75%, f(1,1)=0.98%, f(2,1)=1.75%, f(2,2)=2.21%, what is the worth of a three-year bond from XYZ Corp. that pays a 6% coupon on a yearly basis?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "701"
    },
    "702": {
        "tables": [],
        "question": "By the conclusion of 2016, Corporation A had an accounts receivable totaling $50 million. By the conclusion of 2017, Corporation A had generated revenues of $60 million, with the year's accounts receivable amounting to $30. What should be the sum of cash collected from the clientele?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "702"
    },
    "703": {
        "tables": [],
        "question": "Two years earlier, a corporation released $20 million in long-term bonds at face value with a 9 percent coupon rate. The firm plans to release another $20 million in bonds and anticipates that the new issue will be priced at face value with a 7 percent coupon rate. The firm has no other outstanding liabilities and is taxed at a rate of 40 percent. What is the proper after-tax debt cost to calculate the firm's weighted average cost of capital?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "703"
    },
    "704": {
        "tables": [],
        "question": "Two years prior, Johnson Industries bought equipment for $800,000. By the close of last year, the equipment was worth $720,000. If Johnson Industries uses the revaluation model, how much, if any, is recorded in Johnson's net income this year if the equipment's fair value has risen to $810,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "704"
    },
    "705": {
        "tables": [],
        "question": "Sagittarius Portfolio of Portfolios invests GBP 100 million in each of Gamma Hedge Fund and XYZ Hedge Fund. Sagittarius POP has a \"1 and 10\" fee structure. Management fees and incentive fees are calculated separately at the end of each year. After one year, net of their respective management and incentive fees, the investment in Gamma is valued at GBP80 million and the investment in XYZ is valued at GBP140 million. What is the yearly return to a shareholder in Sagittarius, after deducting fees at the portfolio of portfolios level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "705"
    },
    "706": {
        "tables": [
            "|      | Beginning of Period Price(\u20ac) | End of Period Price(\u6bdb) | Total Dividends(\u20ac) |\n|------|-------------------------------|-------------------------|---------------------|\n| A    | 8.00                          | 10.00                   | 0.50                |\n| B    | 22.00                         | 19.00                   | 1.20                |\n| C    | 25.00                         | 25.00                   | 1.50                |"
        ],
        "question": "A financial analyst named Ahern from a certain investment firm recently compiled data for an equal-weighted index which includes assets A, B, and C: What is the combined return of this index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "706"
    },
    "707": {
        "tables": [
            "| Financial Statement for Company M | $ millions |\n| --- | --- |\n| Net Income | 212 |\n| Depreciation expense | 88 |\n| Increase in inventories | 50 |\n| Increase in accounts payable | 25 |\n| Purchase of fixed assets | 100 |\n| Increase in notes payable | 60 |\n| Decrease in long-term debt | 50 |\n| Interest expense | 100 |\n\n| Additional information | |\n| --- | --- |\n| Tax rate | 30% |\n| Beta | 0.8 |\n| Before-tax cost of debt | 5% |\n| D/A ratio | 40% |\n| Risk-free rate | 2.4% |\n| Market risk premium | 7% |"
        ],
        "question": "John is getting ready to compute the intrinsic value of Company N's equity utilizing the FCFF model with an infinite growth rate of 5%. The pertinent information can be found in the table below. What's the value of Company N's equity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "707"
    },
    "708": {
        "tables": [],
        "question": "By the conclusion of 2016, XYZ Corporation possessed assets worth $10 million and shareholders' equity of $3 million. What are the liabilities of XYZ Corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "708"
    },
    "709": {
        "tables": [
            "| Issuer             | Coupon Rate | Price   | Bond Description        |\n|--------------------|-------------|---------|-------------------------|\n| Ayrault, Inc. (Al) | 5.25%       | 100.200 | Callable at par in one  |\n|                    |             |         | year and two years from |\n|                    |             |         | today                   |",
            "| Exhibit 2. Binomial Interest Rate Trees | |\n| --- | --- |\n| Panel A Interest Rates Shift Down by 30 bps | | | | | |\n| Year 0, Year 1, Year 2 | | | | | |\n| | |5.1968% | |7.0037% | |\n| 3.7000% | | | |5.7342% | |\n| | |4.2548% | | | |\n| | | | |4.6947% | |\n\n| Panel B Interest Rates Shift Up by 30 bps | | | | | |\n| Year 0, Year 1, Year 2 | | | | | |\n| | |5.8605% | |7.7432% | |\n| 4.3000% | | | |6.3396% | |\n| | |4.7982% | | | |\n| | | | |5.1904% | |"
        ],
        "question": "Keeping in mind that each bond has three years left in its maturity, makes annual coupon payments, and has a BBB credit rating, when Jones constructs a binomial interest rate tree based on a 10% interest rate volatility assumption, with the present one-year rate being 1%, Panel A of Exhibit 2 gives an interest rate tree under the assumption that the benchmark yield curve drops by 30 bps. Panel B offers an interest rate tree presuming an increase in the benchmark yield curve by 30 bps. Jones concludes that the SM bond is currently being traded at an option-adjusted spread (OAS) of 13.95 bps in relation to the benchmark yield curve. Based on the data present in Exhibits 1 and 2, can you determine the effective duration for the SM bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "709"
    },
    "710": {
        "tables": [],
        "question": "In the year 2009, PlayJoy Ltd, a company that started operating in October of that year, bought 10,000 units of a toy costing \u20a410 each in October. The toy had a good sale in October. Expecting high sales in December, PlayJoy acquired another 5,000 units at \u20a411 each in November. During 2009, PlayJoy managed to sell 12,000 units each at a price of \u20a415. What would be the cost of goods sold by PlayJoy under the weighted average cost method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "710"
    },
    "711": {
        "tables": [],
        "question": "What is the annual amortization expense for the third year if firm N employs the double-declining balance method to amortize an $80,000 patent with a useful life of 4 years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "711"
    },
    "712": {
        "tables": [],
        "question": "What is the likelihood that a portfolio with a projected return of 7% and a standard deviation of 13%, won't meet the minimum annual return target of 4%, set by an investor?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "712"
    },
    "713": {
        "tables": [
            "| Security | Expected Annual Return(%) | Expected Standard Deviation(%) |\n|----------|---------------------------|--------------------------------|\n| 1        | 25                        | 30                             |\n| 2        | 20                        | 30                             |"
        ],
        "question": "A portfolio intends to build a portfolio with the following two securities. If the portfolio's return is 21.5%, what is the weighting in Security 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "713"
    },
    "714": {
        "tables": [],
        "question": "XY Corporation has established a defined benefit pension plan with $150m in assets and $135m in commitments. It is predicted that: The expected annual income of the pension plan is 7.5percent, with a volatility of 10percent. The liabilities are expected to increase yearly at a rate of 5 percent and have a variation of 4.5 percent. The correlation coefficient between income from assets and liability growth is 0.7. Determine the 95% risk of surplus of the pension.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "714"
    },
    "715": {
        "tables": [],
        "question": "John is thinking about incorporating ABC Corp. into his investment portfolio. The latest dividend payment by the company is 1.45 per share. He observes that ABC Corp.'s dividends have risen at a standard pace of 6 percent. John concluded that the required return on equity for ABC Corp. is 12%. Can you estimate the value of ABC Corp.'s stock based on this information?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "715"
    },
    "716": {
        "tables": [],
        "question": "A banker's acceptance with a term of 150 days has a quoted discount rate of 5.62% based on a 360-day year. What is the bond equivalent yield?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "716"
    },
    "717": {
        "tables": [],
        "question": "Imagine the following 6x9 FRA, where the purchaser of the FRA consents to a contract rate of 6.35% on a notional value of 10 million USD. Assume a 30/360 day count basis. What would be the settlement sum for the vendor if the settlement rate is 6.85%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "717"
    },
    "718": {
        "tables": [],
        "question": "If Orion Enterprises recently released deferred coupon bonds of $100 par value that will not make any coupon payments for the following four years, and will then offer regular yearly coupon payments at an 8% rate until the end of their 10-year maturity period, and these bonds are currently valued at $87.00, what is the yield to maturity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "718"
    },
    "719": {
        "tables": [
            "| Year | EPS  | DPS  | ROE |\n|------|------|------|-----|\n| 2009 | $3.20| $1.92| 12% |\n| 2008 | $3.60| $1.85| 17% |\n| 2007 | $2.44| $1.74| 13% |\n| 2006 | $2.08| $1.62| 15% |\n| 2005 | $2.76| $1.35| 11% |\n| 2004 | $2.25| $1.25| 9%  |"
        ],
        "question": "Using the identical information below and the same perpetual growth model, if a trader uses the mean value of the dividend growth rate between 2004 and 2009, along with the sustainable growth rate for 2009 to predict growth, and if the trader's required return is at 15 percent, what would be the anticipated value of the enterprise's common shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "719"
    },
    "720": {
        "tables": [
            "|  |  |\n|---|---|\n| Acquisition cost | $60,000,000 |\n| Acquisition date | 1 January 2012 |\n| Patent expiration date | 31 December 2017 |\n| Total plant capacity of patented product | 60,000 units per year |\n| Production of patented product in fiscal year ended 31 December 2012 | 25,000 units |\n| Expected production of patented product during life of the patent | 225,000 units |"
        ],
        "question": "The following information pertains to a patent owned by TDC Corporation. If we use the units-of-production depreciation method, what will be the first year's amortization cost?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "720"
    },
    "721": {
        "tables": [],
        "question": "Marie, the portfolio manager of BC pension, is currently contemplating on incorporating NY Inc. (New York Stock Exchange: NY) into her portfolio. After a thorough evaluation of the company and its competition, she discerns that the company's growth rate steadily decreases from 12 percent in the initial year to 6 percent in year five. The total dividends paid by NY in 2017 amounted to $0.22. The required return is calculated to be at 9 percent. What is the stock's inherent worth?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "721"
    },
    "722": {
        "tables": [],
        "question": "The expected return for Portfolio C is 9% with a volatility of 20%. Meanwhile, the expected return for the market index is forecasted to be 7% with a volatility of 15%, and the correlation between Portfolio C and the market is anticipated to be 0.9. Given that the risk-free rate is observed to be 3%, can you calculate the Jensen's alpha for Portfolio C?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "722"
    },
    "723": {
        "tables": [],
        "question": "XYZ is a firm that trades in derivatives. This firm offloaded a five-year CDS protection on Firm E worth $10 million. The duration of this CDS contract is 3.5 years. After a quarter of a year, the credit spread on Firm E diminished from 225bps to 165 bps. Based on the details provided, how much profit can be expected if XYZ establishes a counterbalancing position?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "723"
    },
    "724": {
        "tables": [],
        "question": "Due to marketing consumer staples, Bayside Essentials (BE) is capable of utilizing significant debt in its capital structure; in particular, 90 percent of the company's total assets of $450,000,000 are financed with debt capital. Its debt costs are 8 percent before taxes, and its equity capital costs are 12 percent. BE attained a pretax income of $5.1 million in 2006 and was taxed at a rate of 40 percent. What was BE's residual income?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "724"
    },
    "725": {
        "tables": [
            "| Interest Rate Assumption | Present Value of Liabilities |\n|-------------------------|-------------------------------|\n| 6%                      | CAD 510.1 million           |\n| 7%                      | CAD 455.4 million           |\n| 8%                      | CAD 373.6 million           |"
        ],
        "question": "A pension fund manager from Canada is trying to gauge the impact of changes in market interest rates on his pension obligations. He calculates the present value of these obligations under three potential interest rate circumstances: a foundational rate of 7%, a rate boosted by 100 basis points to 8%, and a rate lowered by 100 basis points to 6%. Based on the analysis outcomes provided below, what is the effective duration of the liabilities of the pension fund?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "725"
    },
    "726": {
        "tables": [
            "| Path | Time 0 | Time 1 | Time 2 |\n|------|--------|--------|--------|\n| 1    | 1.500% | 2.8853%| 2.7183%|\n| 2    | 1.500  | 2.8853 | 1.6487 |\n| 3    | 1.500  | 1.7500 | 1.6487 |\n| 4    | 1.500  | 1.7500 | 1.0000 |",
            "| Bond   | Maturity | Coupon Rate |\n|--------|----------|-------------|\n| Bond C | 2 years  | 2.5%        |\n| Bond D | 3 years  | 3.0%        |"
        ],
        "question": "In his discussion about pathwise valuations being an alternative way of valuing bonds through a binomial interest rate tree, Thompson describes how Peterson uses the binomial interest rate tree to predict the potential interest rate paths for Bond M shown in Exhibit 9. Referencing Exhibits 6 and 9, what's the current value of Bond M's cash flows along Path 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "726"
    },
    "727": {
        "tables": [
            "\n| Year | Net Return (%) |\n|------|----------------|\n| 2008 | -34.8          |\n| 2009 | 32.2           |\n| 2010 | 11.1           |\n| 2011 | -1.4           |\n"
        ],
        "question": "What is the 2012 return required to realize a trailing five-year geometric mean annualized return of 5% at the conclusion of 2012 for a wealth management company that produced the following annual returns in their US large-cap equity portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "727"
    },
    "728": {
        "tables": [
            "|                        | Income Statement | Balance Sheet Changes                               |\n|------------------------|------------------|-----------------------------------------------------|\n| Revenue                | $22,100          | accounts receivable +$550<br> inventory -131<br> prepaid expense +6<br> accounts payable +1,230   |\n| Cost of goods sold     | $16,230          |                                                     |\n| Other operating expense| $508             |                                                     |\n| Depreciation expense   | $1,500           |                                                     |"
        ],
        "question": "Based on the financial records of Corporation X provided, what is the quantity of cash disbursed to vendors in 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "728"
    },
    "729": {
        "tables": [
            "| Assets                           | 31 Dec 2017 | 31 Dec 2016 |\n|----------------------------------|-------------|-------------|\n| Total current assets             | 11,930      | 11,564      |\n| Total non-current assets         | 30,567      | 32,713      |\n| Total assets                     | 42,497      | 44,277      |\n| Total current liabilities        | 10,210      | 9,674       |\n| Total non-current liabilities    | 6,747       | 8,205       |\n| Total liabilities                | 16,958      | 17,880      |\n| Issued capital                   | 1,229       | 1,229       |\n| Share premium                    | 570         | 599         |\n| Retained earnings                | 24,794      | 22,302      |\n| Other components of equity       | 508         | 3,346       |\n| Treasury shares                  | (1,591)     | (1,099)     |\n| Equity attributable to owners of parent | 25,509  | 26,376  |\n| Non-controlling interests        | 31          | 21          |\n| Total equity                     | 25,540      | 26,397      |\n| Total equity and liabilities     | \u00a342,497     | \u00a344,277     |"
        ],
        "question": "What is the financial leverage ratio for SAP Group on December 31, 2017, based on the data provided in the Exhibit?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "729"
    },
    "730": {
        "tables": [],
        "question": "Currently, XYZ is rated A in terms of credit and has issued two-year zero-coupon bonds. The market anticipates that the company will either maintain its A rating, be downgraded to BBB, or upgraded to AA in the span of a year with chances of 85%, 10%, and 5%, respectively. Presuming a flat risk-free yield curve with a 1% value, and credit spreads of 70, 100 and 300 basis points for the AA, A, and BBB ratings respectively, with all interest rates compounding annually, what is the predicted worth of a zero-coupon bond after a year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "730"
    },
    "731": {
        "tables": [
            "| Asset Class     | Geometric Return(%) |\n| --------------  | ------------------- |\n| Equities        | 8.0                 |\n| Corporate Bonds | 6.5                 |\n| Treasury bills  | 2.5                 |\n| Inflation       | 2.1                 |"
        ],
        "question": "What is the reported historical geometric returns for the real rate of return for equities according to the expert?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "731"
    },
    "732": {
        "tables": [
            "| | Roil =30% | Roil=15% | Roil=10% |\n| - | - | - | - |\n| RMkt=25% | 30% | 0 | 0 |\n| RMkt=20% | 0 | 40% | 0 |\n| RMkt=0% | 0 | 0 | 30% |"
        ],
        "question": "Analyst John has compiled the following data for the return on the market and the return on Crude Oil. Can you compute the covariance of returns between the market and Crude Oil? Probability Matrix",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "732"
    },
    "733": {
        "tables": [],
        "question": "If a bond with a Macaulay duration of 6.0, modified duration of 6.5, and convexity of 50.25 experiences a decrease in yield to maturity by 50 bps, what will be the anticipated percentage change in its price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "733"
    },
    "734": {
        "tables": [
            "| Hi | P(Hi|Good) | P(Hi|Poor) |\n|---|------------|------------|\n| 0 | 0.1           | 0.5            |\n| 10 | 0.3           | 0.3            |\n| 20 | 0.6           | 0.2            |"
        ],
        "question": "Assuming that there's a 0.4 chance of a strong economy and a 0.6 chance of a weak economy. The table below shows the conditional probabilities of product Z's profit. What will be the anticipated profit of product Z?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "734"
    },
    "735": {
        "tables": [],
        "question": "Suppose that ABC Corporation saw a rise in operating income by 16%, and a 10% increase in units sold. If the financial leverage degree (DFL) of ABC Corporation is 1.5, what is most likely the degree of total leverage (DTL) for ABC Corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "735"
    },
    "736": {
        "tables": [],
        "question": "A portfolio is made up of options on Apple and Verizon. The Apple options have a delta of 1000, while the Verizon options have a delta of 20000. The share price of Apple is $120, and Verizon's share price is $30. If we assume that the daily volatility of Apple is 2% and the daily volatility of Verizon is 1%, and the correlation between the daily changes is 0.3, what is the 5-day 95% VaR?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "736"
    },
    "737": {
        "tables": [
            "| CompanyM            | $(millions) |\n|---------------------|-------------|\n| Operating income (EBIT) | 2,000       |\n| Depreciation expense     | 750         |\n| Interest expense         | 300         |\n| Increase in accounts receivable | 1,000   |\n| Increase in inventories  | 100         |\n| Increase in accounts payable | 500     |\n| Purchases of PP&E        | 600         |\n| Borrowing (repayment)    | 400         |\n| Tax rate                 | 30%         |"
        ],
        "question": "As per the financial report, what is the FCFE for Company N?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "737"
    },
    "738": {
        "tables": [
            "|         |     |\n| ------- | --- |\n| ROE     | 10% |\n| Growth rate (first three years) | 6.0% |\n| Growth rate (after first three years) | 4.0% |"
        ],
        "question": "John is assessing the sustainable growth rate of Firm M and has gathered the following data in the provided table. What is the dividend payout ratio of Firm M?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "738"
    },
    "739": {
        "tables": [
            "| Maturity | Coupon | Price |\n|---|---|---|\n| 6 months | 4.5% | 101.47 |\n| 1 year | 6.0% | 102.75 |\n| 2 years | 7.0% | 100.32 |"
        ],
        "question": "According to the data table providing details about three bonds with twice-yearly coupon payments, what is the discount factor for d(1)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "739"
    },
    "740": {
        "tables": [
            "|                    | Maturity (Years) |     |     |     |\n|--------------------|------------------|-----|-----|-----|\n|                    | 1                | 2   | 3   | 4   |\n| Government spot rate | 2.25%           | 2.70% | 3.30% | 4.05% |\n| Swap spread        | 0.25%           | 0.30% | 0.45% | 0.70% |"
        ],
        "question": "If Johnson collects data on spot rates for current annual-coupon government bonds and swap spreads, as shown in the Exhibit below, and purchased a government bond, he would receive an almost risk-free annualized return. According to the no-arbitrage principle, what could Johnson demonstrate the forward price of a one-year government bond, set to be issued in one year, to be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "740"
    },
    "741": {
        "tables": [],
        "question": "Assuming equal financing from each source and a marginal tax rate of 30%, what is the weighted average cost of capital (%) if a company's pre-tax costs of debt, preferred stock, and equity are 12%, 14%, and 16%, respectively?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "741"
    },
    "742": {
        "tables": [],
        "question": "Several months down the line, Jordan gets a phone call from Fatimah. She has now become a board member of the Polar Foundation for Medical Advancements (PFMA). PFMA was created to fund a range of medical research endeavors. Fatimah is thrilled and requests Jordan to work out the return objective of PFMA's portfolio. Kyoto points out the following:\u2022 PFMA\u2019s main investment goal is to preserve the real purchasing power of its portfolio after distributions.\u2022 The risk-free rate is 4.0%.\u2022 An expected inflation rate is 3.5%.\u2022 The portfolio\u2019s standard deviation is 15.0%.\u2022 The cost of earning investment returns is 50 bp.\u2022 PFMA aims for a 5.5% annual distribution of assets. What is PFMA\u2019s return objective?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "742"
    },
    "743": {
        "tables": [],
        "question": "In the second model, given that the present short-term rate stands at 5%, the annual drift is 80bps, and the standard deviation of the short-term rate is 3%. Moreover, consider the ex-post realization of the dw random variable being 0.3. What would the interest rate be in the central node after building a 2-period interest rate tree with yearly periods by the conclusion of the second year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "743"
    },
    "744": {
        "tables": [],
        "question": "The joint probability distribution of random variables A and B is presented by f{(a,b)}=k * a * b where a = 1,2,3, b = 1,2,3, and k is a positive constant. What is the likelihood that A+B will go beyond 5?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "744"
    },
    "745": {
        "tables": [],
        "question": "If each futures contract is for 100 shares and the company undergoes a 2-for-1 split, how many shares does each futures contract now cover?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "745"
    },
    "746": {
        "tables": [],
        "question": "We have a bond assortment containing two bonds, namely bond X and bond Y. The worth of bond X is $60 million, while bond Y is worth $40 million. The one-year default probability for bond X is 5% with a recovery rate of 60%, whereas bond Y has a default probability of 7% and a recovery rate of 50%. Determine the anticipated credit loss for this collection over one year, given that the likelihood of both bonds defaulting is 0.7% and the default relationship is observed to be 20%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "746"
    },
    "747": {
        "tables": [
            "|                                               | REIT A        |\n|-----------------------------------------------|---------------|\n| Estimated 12 months cash net operating income (NOI) | $ 280,000    |\n| Cash and equivalents                          | $ 335,000    |\n| Accounts receivable                           | $ 230,000    |\n| Debt and other liabilities                    | $ 1,680,000  |\n|                                               |               |\n| Shares outstanding                            | 82,000       |\n| Assumed cap rate                              | 8.00%        |"
        ],
        "question": "What is the per share value of REIT B when the net asset value valuation method is applied?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "747"
    },
    "748": {
        "tables": [
            "|                      | 2018 | 2019 |\n|----------------------|------|------|\n| Revenue              | 5000 | 7000 |\n| Cost                 | 2000 | 2300 |\n| Operating income     | 3000 | 4700 |\n| Net profit           | 1650 | 2300 |\n| Total assets         | 4000 | 6000 |\n| Total liabilities    | 1200 | 900  |\n| Equity               | 2800 | 5100 |",
            "|                        | 2018  | 2019  |\n| ---------------------- | ----  | ----  |\n| Revenue                | 2000  | 2500  |\n| Cost                   | 1200  | 1300  |\n| Operating income       | 800   | 1200  |\n| Net profit             | 460   | 820   |\n| Dividends paid         | 230   | 410   |\n| Total assets           | 1000  | 1100  |\n| Total liabilities      | 600   | 650   |\n| Equity                 | 400   | 450   |"
        ],
        "question": "The educational firm based in China, company PZ, operates under IFRS. In 2018, it had a passive equity ownership interest of 15% in the T-internet company. By the close of 2018, PZ decided to increase its ownership to 50% as of 1st January 2019, via a cash purchase. There have been no transactions between companies. In the table containing financial statements for both companies that follows: Could you determine the total liabilities for company PZ under the proportionate consolidation method for 2019?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "748"
    },
    "749": {
        "tables": [
            "|     |             |\n|-----|-------------|\n| Revenue | $5,000,000 |\n| Cost of goods sold | $3,000,000 |\n| SG&A | $100,000 |\n| Interest expense | $200,000 |\n| Tax expense | $100,000 |"
        ],
        "question": "In this document, it is revealed that the operating income amounts to:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "749"
    },
    "750": {
        "tables": [],
        "question": "A risk analyst calculates daily variance hth_tht\u200b using a GARCH method on daily yield rt:ht=\u03b10\u2004+\u03b11rt\u221212+\u03b2ht\u22121,\u2004with\u2004\u03b10=0.005,\u03b11\u2004=0.04,\u03b2=0.94r_t:h_t=\\alpha_0\\;+\\alpha_1r_{t-1}^2+\\beta h_{t-1},\\;with\\;\\alpha_0=0.005,\u03b11\\;=0.04,\\beta=0.94rt\u200b:ht\u200b=\u03b10\u200b+\u03b11\u200brt\u221212\u200b+\u03b2ht\u22121\u200b,with\u03b10\u200b=0.005,\u03b11\u200b=0.04,\u03b2=0.94. The long-term annual volatility is roughly.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "750"
    },
    "751": {
        "tables": [
            "| Year ending 31 December | 2012 |\n|-------------------------|------|\n| Revenue                | 2,230|\n| Operating income       | 322  |\n| Net income             | 102  |\n| Total assets           | 2,100|\n| Shareholders' equity   | 950  |"
        ],
        "question": "P-tech Corporation, adheres to US GAAP and has been growing by purchasing other web-based businesses, the biggest of which is Surge web business. Currently, P-tech Corporation is establishing a 50/50 joint venture with Bravo company where they will together govern Surge web business. P-tech's accounting strategy for the joint venture will employ the equity method. Bravo company, complying with IFRS, will apply the proportionate consolidation method for their joint venture accounting. Joseph, a CFA, is an employee at Investment Equity Corp, and he has predicted the financial specifics for the joint venture in 2012. Joseph is making his approximations regarding each company\u2019s profits and overall financial performance. In light of Joseph's projections, what will the Surge web business's total asset (in \uffe5 millions) be at the end of 2012, as noted in the chart below, that Bravo company will include in their consolidated financial statements?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "751"
    },
    "752": {
        "tables": [],
        "question": "If a property generates an annual yield of 19.9%, shows a standard deviation of returns of 18.5%, and has a market correlation of 0.9, with the market's standard deviation of returns being 15.9% and a risk-free rate of 1%, what is the beta for this property?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "752"
    },
    "753": {
        "tables": [],
        "question": "The following calculations have been derived for XYZ Inc.: Demand curve: P = 150 \u2013 5 \u00d7 Q Total revenue curve: TR = 150 \u00d7 Q \u2013 5 \u00d7 Q2 Marginal revenue curve: MR = 150 \u2013 10 \u00d7 Q Total cost curve: TC = Q3 \u2013 10 \u00d7 Q2 + 73 \u00d7 Q + 120 Average cost curve: AC = Q2 \u2013 10 \u00d7 Q + 73 + 120/Q Marginal cost curve: MC = 3 \u00d7 Q2 \u2013 20 \u00d7 Q + 73 P stands for price per unit, and Q stands for cost per unit. What output (in units) will maximize the profit for XYZ Inc.?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "753"
    },
    "754": {
        "tables": [],
        "question": "A researcher is analyzing a collection that includes 2,500 non-prime mortgages and 800 prime home loans. Out of the non-prime mortgages, 500 are delayed in their payments. Out of the prime home loans, 64 are delayed in their payments. If the researcher randomly picks a home loan from the collection and it is presently delayed on its payments, what is the likelihood that it is a non-prime mortgage?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "754"
    },
    "755": {
        "tables": [],
        "question": "There were no additions to or subtractions from the portfolio during the year. Fees for administration are determined by the value at the end of the period. The fees for administration and incentive are computed separately. What's the return after deductions for the client given the following details: Starting portfolio assets valued at $100M, portfolio assets at the period's close (prior to fee deductions) amounting to $110M, a management fee pegged to the assets under management at 2%, an incentive fee based on the gains of 20%, and a soft hurdle rate of 8%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "755"
    },
    "756": {
        "tables": [],
        "question": "If two stocks have identical volatility and a correlation of -0.5, what is their minimum variance hedge ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "756"
    },
    "757": {
        "tables": [],
        "question": "If Thompson plans to secure a three-month loan using an interest-rate futures contract and decides to sell the interest rate futures contract at 98.00. Then, after six months, he gets a loan directly from the market at 2.4%, and undoes the hedge at 97.00. What would be the overall borrowing rate throughout this procedure?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "757"
    },
    "758": {
        "tables": [],
        "question": "Conservative Fund that has USD 50 million in assets has been performing poorly recently, prompting the institutional sales team to suggest a merger with Assertive Fund, a larger fund valued at USD 200 million. Conservative Fund's returns are usually distributed with an average of 3% and a standard deviation of 7%. As for Assertive Fund, its returns follow a normal distribution with an average of 7% and a standard deviation of 15%. The top executives have tasked a financial analyst to calculate the possibility that the returns on the merged portfolio might surpass 26%. Given that the returns on both funds don't influence each other, how would the analyst estimate the chances of the returns on the merged fund exceeding 26%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "758"
    },
    "759": {
        "tables": [],
        "question": "An investment manager achieved a return rate of 15.5% on a portfolio with a beta of 1.2. If the risk-less return rate is 2.5% and the market return stands at 11.8%, what does Jensen's alpha for the portfolio amount to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "759"
    },
    "760": {
        "tables": [
            "|     | Financial Statement of Company M ($ million) |\n| --- | -------------------------------------------- |\n| Net income | 4,500 |\n| Sales | 40,000 |\n| Total assets, average during year | 50,020 |\n| Shareholders' equity, beginning of year | 39,080 |\n| Dividends paid | 200 |"
        ],
        "question": "Based on the data provided in the subsequent table, what is the sustainable growth of Company N?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "760"
    },
    "761": {
        "tables": [],
        "question": "If a corporation has 1 million shares in circulation and earnings of \u00a32 million, and decides to use \u00a310 million of unused cash to buy back shares on the open market at a trading price of \u00a350 per share, what would be the corporation's earnings per share after the entire \u00a310 million of unused cash is used to buy back shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "761"
    },
    "762": {
        "tables": [],
        "question": "If we presume that the market interest rate abides by the mean reversion law, with the long-term average interest rate at 4%, the current interest rate at 3.5%, and a mean reverting rate of 0.3, what will be the forecasted market interest rate for the subsequent period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "762"
    },
    "763": {
        "tables": [
            "|         | Beginning of the Year (C thousands) | End of the Year ( thousands) |\n|---------|------------------------------------|------------------------------|\n| Investment property | 1,000                            | 1,100                        |\n| Plant    | 1,000                            | 1,200                        |"
        ],
        "question": "A firm adhering to International Financial Reporting Standards (IFRS) doesn't apply the cost model when valuing its investment properties and property, plant, and equipment. Data regarding an investment property and a plant are provided below: The firm will probably record a profit (in thousands) on its income statement for the year of:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "763"
    },
    "764": {
        "tables": [
            "| 10-Year Historical | | Current | Capital Market Expectations |\n| :---: | :---: | :---: | :---: |\n| **Average government bond yield:** 2.8% | | 10-year government bond yield: 2.3% |  |\n| **Average annual equity return:** 4.6% | | Year-over-year equity return: -9.4% |  |\n| **Average annual inflation rate:** 2.3% | | Year-over-year inflation rate:  2.1% | Expected annual inflation: 2.3% |\n| **Equity market P/E (beginning of period):** 15x | | Current equity market P/E: 14.5x | Expected equity market P / E: 14.0x |\n| **Average annual dividend income return:** 2.6% | |  | Expected annual income return: 2.4% |\n| **Average annual real earnings growth:** 6.0% | | |Expected annual real earnings growth:  5.0% |"
        ],
        "question": "A financier from Australia presently owns an equity portfolio worth A$240 million. He's contemplating adjusting the portfolio depending on the evaluation of the risk and return potential concerning the Australian economy. The details associated with the Australian investment markets and economy have all been compiled in this table: Utilizing the data in the table and the Grinold-Kroner model, what is the anticipated yearly equity risk premium?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "764"
    },
    "765": {
        "tables": [
            "|                            |   2018 |   2019 |\n|----------------------------|--------|--------|\n| Revenue                    | 5,000  | 7,000  |\n| Cost                       | 2,000  | 2,300  |\n| Operating income           | 3,000  | 4,700  |\n| Net profit                 | 1,650  | 2,300  |\n| Total assets               | 4,000  | 6,000  |\n| Total liabilities          | 1,200  | 900    |\n| Equity                     | 2,800  | 5,100  |",
            "|                       | 2018 | 2019 |\n|-----------------------|------|------|\n| Revenue               | 2000 | 2500 |\n| Cost                  | 1200 | 1300 |\n| Operating income      | 800  | 1200 |\n| Net profit            | 460  | 820  |\n| Dividends paid        | 230  | 410  |\n| Total assets          | 1000 | 1100 |\n| Total liabilities     | 600  | 650  |\n| Equity                | 400  | 450  |"
        ],
        "question": "The education company ZP, which is based in China and follows IFRS, had a passive equity interest of 15% in U-web company in 2018. ZP decided to bump up its ownership interest to 50% at the beginning of 2019 through a cash purchase. Both companies have no intercompany transactions. The financial data for ZP and U-web companies are provided in the table below. Could you compute the net income of ZP company for 2019 assuming a significant influence over U-web company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "765"
    },
    "766": {
        "tables": [
            "|                                         |            |\n|-----------------------------------------|------------|\n| Exhibit 1. Company A Excerpt from Consolidated Income Statement Year|            |       \n| Ending 31 December 2013 ($ in millions) |            |       \n| Gross profit                            |6,290       |     \n| Royalty and commission income            |130         |      \n| Other operating income                   |140         |      \n| Other operating expenses                 |4,985       |      \n| Operating profit                         |906         |      \n| Interest income                          |37          |      \n| Interest expense                         |135         |      \n| Income before taxes                      |988         |      \n| Income taxes                             |257         |      \n| Net income                               |692         |      \n| Additional Information:                  |            |\n| Depreciation and amortization:  $264 million |264     |"
        ],
        "question": "Based on the provided information, what is the EBITDA interest coverage ratio of company B?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "766"
    },
    "767": {
        "tables": [],
        "question": "Finally, David concentrates on predicting the anticipated returns from direct real estate investments. He reviews a decade's worth of data on returns from multifamily residential real estate. David doubts whether the fluctuations in the observed returns indicate smoothing. He applies a publicly available REIT index to eliminate the smoothing effect on the return flow and accurately represent the risk (gauge by standard deviation) related to multifamily residential real estate investment (the REIT index's variance for the measurement duration is 16; \u03bb is 0.8). What is David\u2019s adjusted standard deviation for multifamily properties for the investment duration?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "767"
    },
    "768": {
        "tables": [
            "| Current industrial sector capitalization rate (\"cap\" rate) | 5.7% |\n|-----------------------------------------------------------|-----|\n| Expected cap rate at the end of the period                | 5.5% |\n| NOI growth rate (real)                                    | 1%   |\n| Inflation expectation                                     | 1.5% |"
        ],
        "question": "A researcher at a property investment company is trying to set predictions for the return rate of industrial properties for the upcoming year. He has gathered the following information: Calculate the anticipated return from the industrial sector properties based on the data presented.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "768"
    },
    "769": {
        "tables": [
            "|          | March 31,20X7                        | April 30,20X7                         |\n|----------|-----------------|---------------------------------|---------------|---------------------------------|\n|          | Share Price     | Number of Shares Outstanding(thousands) | Share Price   | Number of Shares Outstanding(thousands) |\n| Stock X  | $15             | 100                             | $20           | 100                             |\n| Stock Y  | $20             | 1,000                           | $30           | 1,000                           |\n| Stock Z  | $30             | 2,000                           | $25           | 2,000                           |"
        ],
        "question": "Based on the data provided for the trio of shares listed in the chart, determine the return on the price-weighted index over a month's span.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "769"
    },
    "770": {
        "tables": [
            "| Bond | Coupon Rate | Time-to-Maturity | Spot Rates |\n|------|-------------|------------------|------------|\n| X    | 8%          | 3 years          | 8%         |\n| Y    | 7%          | 3 years          | 9%         |\n| Z    | 6%          | 3 years          | 10%        |"
        ],
        "question": "Based upon the presented series of spot rates, what is the price of Bond Y if all three bonds pay their interest yearly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "770"
    },
    "771": {
        "tables": [],
        "question": "A researcher compiled the following details about a business: The business has a taxable income of $40,000 and a pretax income of $50,000. The prevailing tax rate is 50% and the tax rate when the reversal happens will be 40%. What is the business's deferred tax liability at the close of the first year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "771"
    },
    "772": {
        "tables": [],
        "question": "Summit Resale operates through internet for people on an agreed basis. Summit gets the items from the owners, puts them up for sale online, and earns a 25 percent commission for any items sold. Summit collects the entire amount from the buyer and pays the gross amount after commission to the owner. If items remain unsold, they are returned to the owner after 90 days. During 2019, Summit had these details: \u2022 Total sales price of items sold on agreed basis during 2019 was \u20ac2,000,000. \u2022 Total commissions that Summit retained during 2019 for these items totalled \u20ac500,000. How much revenue should Summit report on its 2019 income statement?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "772"
    },
    "773": {
        "tables": [
            "|                   | Asset A, Asset B | A and B |\n|-------------------|------------------|---------|\n| Standard deviation| 4.7%, 7.7%       |         |\n| Portfolio weight  | 0.4, 0.6         |         |\n| Correlation       |                  | 0.3     |"
        ],
        "question": "Given the historical data presented, what is the standard deviation for the two-asset portfolio displayed in the chart?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "773"
    },
    "774": {
        "tables": [],
        "question": "In 2017, Company B had an inventory on hand of 30 days and aimed to reach the standard industry average of 28 days in 2018. The recent year's cost of goods sold was $1.2 million in 2017, and it was projected to lower to $0.35 million in 2018. What was the inventory change?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "774"
    },
    "775": {
        "tables": [
            "| Year | Investment Return |\n|------|-------------------|\n| 1    | $600 13%          |\n| 2    | $700 5%           |\n| 3    | $1,000 -1%        |"
        ],
        "question": "The fund managed by John displays the following returns for the first three years: What will the time-weighted rate of return be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "775"
    },
    "776": {
        "tables": [],
        "question": "Assuming 260 days a year, an option on the Nikkei stock index has a strike price at 3,000 Brazilian reais (BRL) with a delta of 0.6 and an annual volatility on the index of 24%. What is the 10-day VaR at 95% confidence level, under the delta-normal assumptions?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "776"
    },
    "777": {
        "tables": [],
        "question": "The preferred stock of Alpha Enterprises is traded in the financial market for $88 per share. The annual dividend per share is always $6.60. What is the required rate of return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "777"
    },
    "778": {
        "tables": [],
        "question": "For a portfolio that consists of four investments, what is the number of unique covariance terms required to calculate the portfolio's return variance?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "778"
    },
    "779": {
        "tables": [
            "| Acquisition cost | \u00a35,800,000 |\n| --- | --- |\n| Acquisition date | 1 January 2009 |\n| Patent expiration date | 31 December 2015 |\n| Total plant capacity of patented product | 40,000 units per year |\n| Production of patented product in fiscal year ended 31 December 2009 | 20,000 units |\n| Expected production of patented product during life of the patent | 175,000 units |"
        ],
        "question": "If a financial expert is examining the amortization of a product patent purchased by the Italian firm, MAKETTI S.p.A., what would be the 2009 fiscal year's amortization expense on the patent using the units-of-production approach, based on the patent information he has collected?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "779"
    },
    "780": {
        "tables": [],
        "question": "What is the justified trailing P/E of the stock, considering that the firm's present intrinsic value and EPS stand at $25.62 and $4 respectively?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "780"
    },
    "781": {
        "tables": [],
        "question": "A shareholder buys 100 stocks at a price of $40 for each. After exactly one year, this shareholder sells all of them for $41.50 per stock. On the same day of the sale, the shareholder gets dividends amounting to $200. What is the HPR on the investment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "781"
    },
    "782": {
        "tables": [
            "|                        | 2018 | 2017 |\n|------------------------|------|------|\n| Cost of goods sold (COGS) | 50,800 | 48,500 |\n| Ending inventories | 10,550 | 10,000 |\n| LIFO reserve | 4,320 | 2,600 |"
        ],
        "question": "What is the FIFO method's reported Cost of Goods Sold in 2018 by a firm adopting the LIFO method in \u00a3?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "782"
    },
    "783": {
        "tables": [],
        "question": "How many exceptions in backtesting a VAR would we anticipate over a 250-day trading year if we hold a 90% confidence level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "783"
    },
    "784": {
        "tables": [
            "| Investment | Expected Return(%) | Expected Standard Deviation(%) |\n|------------|-------------------|--------------------------------|\n| 1          | 19                | 3                              |\n| 2          | 21                | 9                              |\n| 3          | 24                | 20                             |\n| 4          | 19                | 35                             |"
        ],
        "question": "As a risk-neutral investor, John Smith will use utility theory to select his investment portfolio. Given several investments with their expected return and expected standard deviation on the table, which one would he most probably invest in?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "784"
    },
    "785": {
        "tables": [
            "| Buyer | Bid Size (# of shares) | Limit Price ($) | Seller | Offer Size (# of shares) | Limit Price ($) |\n|-------|------------------------|-----------------|--------|--------------------------|-----------------|\n| 1     | 500                    | 18.50           | 1      | 200                      | 20.20           |\n| 2     | 300                    | 18.90           | 2      | 300                      | 20.35           |\n| 3     | 400                    | 19.20           | 3      | 400                      | 20.50           |\n| 4     | 200                    | 20.10           | 4      | 100                      | 20.65           |\n| 5     | 100                    | 20.15           | 5      | 200                      | 20.70           |"
        ],
        "question": "If an investor places an immediate-or-cancel limit purchase order for 700 shares at a price of $20.50 in a market, what would probably be the average price the investor would be required to pay, considering the existing limit orders on its book for a specific stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "785"
    },
    "786": {
        "tables": [
            "| 2015 | | 2014 |\n| --- | --- | --- |\n| Deferred tax assets $1,000,000 | | $800,000 |\n| Deferred tax liabilities $600,000 | | $700,000 |\n| Valuation allowance $500,000 | | $400,000 |"
        ],
        "question": "How did the alterations in the firm's deferred tax accounts impact the net income of 2015 according to US GAAP?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "786"
    },
    "787": {
        "tables": [
            "| Jan | Feb | Mar | Apr | May | Jun |\n|-----|-----|-----|-----|-----|-----|\n| 20% | 4%  | -5% | 12% | 3%  | 12% |"
        ],
        "question": "The table underneath displays the monthly stock returns for Oak Inc. Based on the provided table, can you compute the standard deviation for Oak Inc.'s returns, considering that there are 6 observations in the population?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "787"
    },
    "788": {
        "tables": [],
        "question": "Smith is a tax consultant who offers tax consciousness guidance to individual patrons. One of Smith's patrons is Emma. Emma requests Smith to assess Mutual Fund B, which has an inherent gain of 10% of the concluding portfolio value. Emma requests Smith to determine a post-disposal yield over the latest three-year duration. Mutual Fund B showed after-tax yields of 9.0% in the first year, 5% in the second year, and 8% in the third year, and capital profits are taxed at a 25% pace. What is the yearly after-tax post-disposal yield measured by Smith?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "788"
    },
    "789": {
        "tables": [
            "| Quantity (unit) | Total Fixed Cost ($) | Total Variable Cost ($) |\n| --------------- | -------------------- | ---------------------- |\n| 0               | 400                  | 0                       |\n| 1               | 400                  | 100                    |\n| 2               | 400                  | 190                    |\n| 3               | 400                  | 275                    |\n| 4               | 400                  | 360                    |"
        ],
        "question": "A company that makes machines is examining its cost structure, and here lays out the meticulous data as specified in the table: If the company fabricates 3 machines, what is the average fixed cost?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "789"
    },
    "790": {
        "tables": [],
        "question": "Amelia, as a fund manager, trades off a $50,000 vega notional of a one-year variance swap on the S&P 500 at a strike of 20% (annual volatility mentioned). As half a year has gone by, the S&P 500 has seen a realized volatility of 16% (annualized). The same day, the fair strike of a new six-month variance swap on the S&P 500 stands at 19%. The present value of the variance swap that Amelia sold (taking into account the annual interest rate is 2.5%) is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "790"
    },
    "791": {
        "tables": [],
        "question": "The yield-to-maturity of a bond, which is stated on a semiannual basis, is at 4.769%. What would this yield-to-maturity be if a financial expert were to adjust it to a monthly basis?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "791"
    },
    "792": {
        "tables": [],
        "question": "A business released bonds worth $2,000,000 having a maturity of 20 years at 96. The business redeemed these bonds seven years down the line at 103, at a time when the unamortized discount stood at $39,000. What would probably be the loss reported by the business in the year these bonds were redeemed?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "792"
    },
    "793": {
        "tables": [
            "| Risk-free rate | 3% |\n| -- | -- |\n| Market risk premium | 7% |\n| Company A's beta | 1.1 |"
        ],
        "question": "Jessica has projected that corporation B will disburse dividends of $1.5 and $2.5 respectively at the close of the first and second year. After the second year, dividends are anticipated to increase at a rate of 5%. Other relevant details can be found in the table below. What is the inherent value of the corporation's stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "793"
    },
    "794": {
        "tables": [
            "|                                     |      |\n|-------------------------------------|------|\n| Cost of the equipment $5,000,000    |      |\n| Estimated residual value $500,000   |      |\n| Expected useful life 9 years        |      |\n| Total productive capacity 950,000 units |      |\n| Production in FY2015 150,000 units  |      |\n| Expected production for the next 9 years 100,000 units each year |      |"
        ],
        "question": "Using the straight-line method, what is the annual depreciation expense for a machine purchased in Jan. 2015, according to the applicable information?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "794"
    },
    "795": {
        "tables": [],
        "question": "What is the likelihood of drawing one of the 3 marked balls if 600 ping pong balls are stored in a dark container?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "795"
    },
    "796": {
        "tables": [],
        "question": "If a share costs $100.00 and it follows a single-stage binomial system with an increase of 1.05 and a decrease of 0.97, and if 1 million Bernoulli tests are done, and the mean final share price is $102.00, what is the likelihood of an increase (p)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "796"
    },
    "797": {
        "tables": [],
        "question": "A yearly annuity of $2,000 is expected to be received for a span of twenty years, with the initial payment anticipated to arrive at the conclusion of year thirteen. If we presume a 7% discount rate for the upcoming years, can you work out the present value of the annuity today?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "797"
    },
    "798": {
        "tables": [],
        "question": "In the spot market, the exchange rate for AUD/USD is 0.50248. If we consider that the yearly interest rate is 3% for USD and 4% for AUD, what would be the one-year forward exchange rate for USD/AUD?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "798"
    },
    "799": {
        "tables": [],
        "question": "An eternal bond is a financial instrument that delivers the same sum of money indefinitely. Suppose it provides a payment of $60 every month, and it has a yearly discount rate of 4% compounded on a monthly basis. What would be the current value of this bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "799"
    },
    "800": {
        "tables": [],
        "question": "Our projection is that 15% of secondary school pupils will participate in employment next year. If we randomly choose 5 secondary school pupils, what is the likelihood that precisely two of them will participate in employment next year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "800"
    },
    "801": {
        "tables": [],
        "question": "The Sunshine Primary School provides its staff members with a defined benefit retirement plan. The school is in accordance with IFRS. The chosen details related to the pension plan in 2018 are this: the benefit obligations at the onset of the year being $3,000,000, the plan assets' fair value at the start of the year being $3,100,000 and the plan assets' book value equalling $2,800,000 at the beginning of 2018. So, what is the funded status of the scheme at the start of 2018?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "801"
    },
    "802": {
        "tables": [
            "| Year | Paid-In Capital | Mgmt Fees | Operating Results | NAV before Distributions | Carried Interest | Distributions | NAV after Distributions |\n|------|-----------------|-----------|-------------------|--------------------------|------------------|---------------|-------------------------|\n| 2005 | 40             | 0.8       | -3                | 36.2                     |                  |               | 36.2                    |\n| 2006 | 55             | 1.1       | 4                 | 54.1                     |                  |               | 54.1                    |\n| 2007 | 80             | 1.6       | 11                | 88.5                     |                  |               | 88.5                    |\n| 2008 | 100            | 2         | 27                | 133.5                    | 4.2              | 19            | 110.3                   |\n| 2009 | 125            | 2         | 34                | 167.3                    | 6.6              | 38            | 122.7                   |"
        ],
        "question": "The pamphlet ends with the backstory of another private equity fund known as Pocatello Fund. As per the cash flows and distributions shown in Exhibit 1 for the initial five years of this fund, what was the total value paid into the Pocatello Fund in 2009?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "802"
    },
    "803": {
        "tables": [],
        "question": "In the spot market, the conversion rate from Canadian dollar to Euro stands at CAD/EUR 1.4808, while the rate for Japanese yen to Euro is JPY/EUR 132.3894. What is the JPY/CAD cross rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "803"
    },
    "804": {
        "tables": [
            "| Market risk premium | 7.0% |\n|---|---|\n| Risk-free rate | 2.0% |\n| Comparable firm return | 10.4% |\n| Comparable firm debt-to-equity ratio | 1.0 |\n| Comparable firm tax rate | 40.0% |"
        ],
        "question": "Based on the given data, what is the company's unleveraged beta?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "804"
    },
    "805": {
        "tables": [
            "|  |  | Units Purchased and Sold (first quarter) |  |  |  |  |\n|---|---|---|---|---|---|---|\n|  |  | Date |  |  |  |  |\n|  |  | Units Purchased | Purchase Price | Units Sold | Selling Price | Inventory Units on Hand |\n|  | 2 Jan | 1,000 | $20.00 |  |  | 1,000 |\n|  | 17 Jan |  |  | 500 |  | $50.00, 500 |\n|  | 16 Feb | 1,000 | $18.00 |  |  | 1,500 |\n|  | 3 Mar |  |  | 1,200 |  | $50.00, 300 |\n|  | 13 Mar | 1,000 | $17.00 |  |  | 1,300 |\n|  | 23 Mar |  |  | 500 |  | $50.00, 800 |\n|  | End of quarter totals: | 3,000 | $55,000 | 2,200 |  | $110,000 |\n| Identifying Header | Exhibit 2: | Comparison of Inventory Methods and Models |  |  |  |  |\n|  | End of Quarter Valuations |  |  |  |  |  |\n| 31 March |  | Perpetual LIFO,Periodic LIFO, Perpetual FIFO |  |  |  |  |\n| Sales |  | $110,000 | $110,000 | $110,000 |  |  |\n|  | Ending inventory |  | $16,000 | $13,600 |  |  |\n|  | Cost of goods sold |  | $39,000 | $41,400 |  |  |\n|  | Gross profit |  | $71,000 | $68,600 |  |  |\n|  | Inventory turnover ratio | 279% |  |  |  |  |\n|  | Note: LIFO is last in, first out and FIFO is first in, first out. |  |  |  |  |  |"
        ],
        "question": "A merchant is analyzing various methods for assessing inventory worth. The merchant has a single product that they trade for $50. What is the final inventory's value for the first quarter if the merchant employs a continuous LIFO inventory evaluation technique?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "805"
    },
    "806": {
        "tables": [
            "| Most recent year's net income | $8.0 million | Cost of equity capital | 12.40% |\n|---|---|---|---|\n| Interest expense | $1.2 million | WACC | 10.60% |\n| Equity capital book value | $20.97 million | Tax rate | 40% |"
        ],
        "question": "Using the multistage RI model for estimating the value of PBRI, John gathers extra data. He predicts a yearly growth rate for residual income of 15% over a prediction range of 5 years (Years 1 to 5) and decides to discount the final year\u2019s residual income as perpetuity. Considering the information in Exhibit 3, what is John's approximation of the contribution that the terminal value of the income stream will make to the present value of equity after five years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "806"
    },
    "807": {
        "tables": [],
        "question": "In the previous year, the total worth of end products and services in nation B escalated from $200 billion to $400 billion, with the GDP deflator surging from 120 to 170. Given this situation, by how much did the actual GDP of nation B increase?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "807"
    },
    "808": {
        "tables": [],
        "question": "What would the YTM be on a zero-coupon, semiannual compound, 10-year bond with a par value of $1,000 that's currently being traded at $366.21?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "808"
    },
    "809": {
        "tables": [],
        "question": "The S&P 500 index currently stands at 1,457, with each futures contract representing 250 times the index. An equity portfolio only long with a market value of USD 300,100,000 has a beta of 1.1. In order to lower the portfolio beta to 0.75, how many S&P futures contracts should be sold?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "809"
    },
    "810": {
        "tables": [],
        "question": "A financial expert is aiming to determine the worth of a 1-year European call option using the BSM model. He has gathered the following data: the present stock price is $90, the strike price is $75, the risk-free rate calculated through continuous compounding is 4%, and the yearly volatility rate is 20%. What would be the call option's value? N(-1.21) =0.1131; N(-1.01) =0.1562.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "810"
    },
    "811": {
        "tables": [],
        "question": "Given that a chart from a credit reporting agency indicates that the count of A-ranked entities that upgraded to AAA is 1, those which advanced to AA were 6, those who maintained at A were 41, those who were demoted to BBB were 2, and those that defaulted were 3. Assuming a fresh entity with an A grade credit score, what is the chance that it will experience a reduction in rating or end up defaulting after one year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "811"
    },
    "812": {
        "tables": [
            "| Date | November 2010 Quantity | November 2010 Price | December 2010 Quantity | December 2010 Price |\n|------|-----------------|-----------------|------------------|------------------|\n| Sugar| 70kg           | \u00a30.90/kg        | 120kg            | \u00a31.00/kg         |\n| Cotton| 60kg           | \u00a30.60/kg        | 50kg             | \u00a30.80/kg         |"
        ],
        "question": "What is the value of the Paasche index for the consumption basket of December displayed in Exhibit 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "812"
    },
    "813": {
        "tables": [],
        "question": "If the business boosts its dividend payout proportion to 40% and employs a necessary return of 12.4%, what would be the justified forward P/E ratio based on the compiled information on the business?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "813"
    },
    "814": {
        "tables": [
            "|                   | Fund X | Fund Y | Fund Z | Benchmark |\n|-------------------|--------|--------|--------|-----------|\n| Sharpe ratio (SR) | 0.45   | 0.50   | 0.49   | 0.44      |\nNote: Data are based on a risk-free rate of 2.3%."
        ],
        "question": "Johnson requests his research team to generate risk and anticipated return predictions for Funds X, Y, and Z as well as the benchmark, shown in Exhibit 1. Johnson opts to introduce a fourth fund to his group, Fund W, that will utilize the same benchmark embedded in Exhibit 1. Given the information from Exhibit 1, what would be the Sharpe ratio if Fund W, which Johnson estimates to have an information ratio of 0.35, is merged with a fund that mimics the benchmark?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "814"
    },
    "815": {
        "tables": [],
        "question": "The debt-to-asset ratio is: total liabilities: $200 short term debt: $10 long-term debt: $100 total equity: $300.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "815"
    },
    "816": {
        "tables": [],
        "question": "A financial advisor is determining the beta of a collection of large-cap industrial firm shares. The advisor establishes that the correlation between the returns from the collection and the returns from its reference point is 0.8, the fluctuation of collection returns is 5%, and the fluctuation of the reference point is 4%. What is the beta of the collection in relation to the reference point?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "816"
    },
    "817": {
        "tables": [
            "| Balances as of Year Ended 31 December | 2009 | 2010 |\n| ------------------------------------- | ---- | ---- |\n| Retained earnings                     | 120  | 145  |\n| Accounts receivable                   | 38   | 43   |\n| Inventory                             | 45   | 48   |\n| Accounts payable                      | 36   | 29   |"
        ],
        "question": "A researcher collected the following data from a corporation's 2010 financial reports (in $ millions): In 2010, the corporation declared and dispersed cash dividends of $10 million, and logged a depreciation expense of $25 million. The corporation classifies dividends paid as a financing activity. What was the corporation\u2019s 2010 operational cash flow (in $ millions)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "817"
    },
    "818": {
        "tables": [
            "| - |  Time=0 | Time=1 | Time=2 |\n|---|:---:|:---:|:---:|\n| - | S0=100 | Su=110 | Suu=121 |\n| - |-| Sd=92 | Sud,du=101.20 |\n| - |-| - | Sdd=84.64 |"
        ],
        "question": "Suppose that the price of a bond over the next two periods is detailed below. The starting value of the bond is $100. The likelihood of a rise in any given period is 40% and the chance of a fall in any given period is 60%. If we apply the binomial model, what is the likelihood that the bond's price will reach $101.20 after two periods?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "818"
    },
    "819": {
        "tables": [],
        "question": "XYZ is a wealth management firm based in France. They have made an investment of $10 million in E Corporation's senior unsecured bond with a term of 10 years. Due to concerns of a potential default by E Corp, XYZ purchased a credit default swap (CDS) on E corp valued at $10 million with a designated coupon rate of 5%. After three months, E Corp goes bankrupt, resulting in a variety of activated CDS contracts. Consequently, XYZ examines the credit quality of the corporate bond they invested and the CDS's value on that bond. Here's some information on the current market status of E Corporation's bonds: Bond 1 is a 5-year senior unsecured bond trading at 40% of par, Bond 2 is a 10-year senior unsecured bond trading at 50% of par. Bond 3 is a 6-year subordinated unsecured bond trading at 30% of par. Based on these details, what is the cheapest",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "819"
    },
    "820": {
        "tables": [],
        "question": "At the start of the year, XYZ Inc. bought a new machinery for its production process. The machine was priced at $25,000. It is anticipated to have a 4-year lifespan and then be resold for $4,000. Using the double-declining-balance method, what's the depreciation cost to be accounted for in the second year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "820"
    },
    "821": {
        "tables": [],
        "question": "What is the yearly return for a trader who has managed a return of 5% over a six-week span?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "821"
    },
    "822": {
        "tables": [
            "| Measure     | 2007   | 2006   | 2005  | 2004  | 2003  |\n|-------------|--------|--------|-------|-------|-------|\n| EPS         | $3.03  | $1.45  | $0.23 | $2.13 | $2.55 |\n| BV per share| $19.20 | $16.21 | $14.52| $13.17| $11.84|\n| ROE         | 16.0%  | 8.9%   | 1.6%  | 16.3% | 21.8% |"
        ],
        "question": "In February 2007, you are investigating a theoretical company called Davis Global that experiences seasonal demand for its offerings. On 2 February 2007, Davis shares ended at $57.98. You believe that the period from 2003 through 2006 provides a fair representation of average earnings. When determining normalized EPS, we can consider the approach of historical average EPS or the average ROE method, so what is the difference in PE calculated using these two methods?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "822"
    },
    "823": {
        "tables": [],
        "question": "An executive agreed to sell an equity forward contract four weeks ago. The contract is set to mature in three months. A profit of $1 will be provided one month prior to the expiry of the contract. The risk-free rate is 3% and is compounded yearly. The existing spot price of the underlying is $56, while the initial forward price was set at $60. What is the value of the executive\u2019s position?\n",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "823"
    },
    "824": {
        "tables": [],
        "question": "A 12-month zero-coupon bond offers a return of 4.0%. The yields for the 24-month and 36-month zero-coupon bonds are 5.0% and 6.0% respectively. What would be the interest rate for a 12-month loan starting in a year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "824"
    },
    "825": {
        "tables": [
            "|                    | S&P 500 | Indigo Fund |\n|--------------------|---------|-------------|\n| Expected annual return | 9.0%    | 10.5%      |\n| Return standard deviation | 18.0%  | 25.0%      |\n| Sharpe ratio | 0.333   | 0.30       |\n| Active return |         | 1.2%       |\n| Active risk |           | 8.0%       |\n| Information ratio |     | 0.15       |"
        ],
        "question": "What is the highest Sharpe ratio achievable by a fund manager when merging the S&P 500 benchmark portfolio and the Indigo Fund?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "825"
    },
    "826": {
        "tables": [],
        "question": "What is the value of an account that a shareholder has deposited \uffe12,000 into if it pays 6% per annum compounded continuously after four years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "826"
    },
    "827": {
        "tables": [],
        "question": "If the consultancy firm, Blue Street Inc, announced total revenues of $100 million, total expenses of $80 million, and net income of $20 million in the last year, and if accounts receivable rose by $10 million, what amount of cash was received by the firm from clients?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "827"
    },
    "828": {
        "tables": [
            "|                         | 2018 | 2019 |\n|-------------------------|------|------|\n| Revenue                 | 5,000| 7,000|\n| Cost                    | 2,000| 2,300|\n| Operating income        | 3,000| 4,700|\n| Net profit              | 1,650| 2,300|\n| Total assets            | 4,000| 6,000|\n| Total liabilities       | 1,200| 900  |\n| Equity                  | 2,800| 5,100|",
            "|                        | 2018  | 2019  |\n| ---------------------- |:-----:| -----:|\n| Revenue                | 2,000 | 2,500 |\n| Cost                   | 1,200 | 1,300 |\n| Operating income       | 800   | 1,200 |\n| Net profit             | 460   | 820   |\n| Dividends paid         | 230   | 410   |\n| Total assets           | 1,000 | 1,100 |\n| Total liabilities      | 600   | 650   |\n| Equity                 | 400   | 450   |"
        ],
        "question": "In China, there's an education business known as PZ Corporation which adheres to IFRS. As of 2018, the corporation had a 15% non-controlling equity stake in T-web Corporation. The executives at PZ decided to boost the company\u2019s stake in T-web to 50% through a straight cash buy on 1st January 2019, with no transactions between the companies. The table provided includes the financial statement details of both PZ and T-web corporations. Could you please compute the consolidated sales for 2019 for PZ corporation, after gaining control over T-web company:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "828"
    },
    "829": {
        "tables": [],
        "question": "A private equity fund employs the individual transaction approach to allot carried interest (20% of profit) to its managing partner. The managing partner put in $10 million in an enterprise three years back and exited with $23 million. What is the share available for the passive investors of the said investment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "829"
    },
    "830": {
        "tables": [],
        "question": "What will be the fourth quintile number of the series 1-10?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "830"
    },
    "831": {
        "tables": [],
        "question": "In early 2013, corporation X released 5-year bonds with a face value of $2,000,000. Given a market interest rate of 6%, these bonds are set to pay a 7% coupon every 31st of December. What would the bonds payable amount to at the time they were issued?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "831"
    },
    "832": {
        "tables": [],
        "question": "The private equity portfolio had a net asset value of $120m at the close of 2019 with all capital called upon. The portfolio predicts a distribution payment of 20% by the conclusion of 2020. The portfolio's net asset value is projected to grow 10% before distribution. What is the projected net asset value after distribution at the end of 2020?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "832"
    },
    "833": {
        "tables": [],
        "question": "In the spot market, the present exchange rate for EUR/USD is 0.8615. In the forward market, the EUR/USD rate for the next 90 days is indicated as +13.5 points. Can you tell me the forward rate for EUR/USD over the next 90 days?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "833"
    },
    "834": {
        "tables": [],
        "question": "Jacob, a US-based financier, is thinking about purchasing a common stock with a yearly dividend of $2.5. This dividend is predicted to increase at a yearly rate of 5%. If the expected return rate of investors is 8%, what would be the inherent worth of the stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "834"
    },
    "835": {
        "tables": [
            "| | Truck* | Land** |\n| --- | --- | --- | \n| Original cost | $57,000 | $18,000 |\n| Estimated  life | 8 years | |\n| Estimated salvage value at purchase | $15,000 | |\n| Depreciation method | Declining balance, 20% per year | |\n| Current fair value of item | $27,000 | $21,000 |\n\n\\* The last sale of a similar truck by the company occurred more than six months ago.\n\n\\*\\* The land is one of four identical parcels of land recently sold by the company."
        ],
        "question": "A corporation decided to trade a truck that it had bought three years prior for a piece of land owned by a different corporation. The following chart includes details about both items: The financial statement for the corporation that is getting rid of the truck is most likely going to report a loss of:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "835"
    },
    "836": {
        "tables": [
            "| Security | Security Weight(%) | Expected Standard Deviation(%) |\n| ---      | ---                | ---                           |\n| 1        | 30                 | 20                            |\n| 2        | 70                 | 12                            |"
        ],
        "question": "Assuming an investment manager constructs this portfolio, and the covariance of returns for the two securities involved is -0.0240, what is the projected standard deviation of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "836"
    },
    "837": {
        "tables": [],
        "question": "A specialist working on the stable-income trade desk noticed that the annual number of defaults in the bond portfolio adheres to a Poisson process. The mean number of defaults is four every year. Given that defaults are independent, what are the odds that there will be a maximum of one default in the coming year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "837"
    },
    "838": {
        "tables": [
            "| Years to maturity | Present Value Factor |\n|------------------|---------------------|\n| 0.25                 | 0.997506               |\n| 0.5                  | 0.992556               |\n| 0.75                | 0.985222               |\n| 1                     | 0.975610               |"
        ],
        "question": "Three months ago, a supervisor agreed to a receive-fixed and pay-equity swap. The yearly fixed rate was set at 3% and the equity index was 100 at the time the swap was made. The swap will mature in one year and has a quarterly reset, and nominal amount of $100 million. The value of the swap is up for evaluation, assuming the equity index is now 101 and the current spot rates are provided:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "838"
    },
    "839": {
        "tables": [],
        "question": "A study reveals that in this structure, 30% of workspaces are equipped with printers. Given a binomial probability distribution, what is the chance that just three companies will possess a printer in a casual selection of five firms?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "839"
    },
    "840": {
        "tables": [],
        "question": "What is the width of a 90% confidence interval using the appropriate t-distribution for a sample size of 37, having a mean of 116.23 and a variance of 245.55?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "840"
    },
    "841": {
        "tables": [],
        "question": "If, in a basic economy without a foreign sector, the ensuing formulas are valid: Consumption formula: C = 2,500 + 0.80 \u00d7 (Y \u2013 T), Investment formula: I = 500 + 0.30 \u00d7 Y \u2013 25 \u00d7 r, State expenditure: G = 1,000, Tax formula: T = \u2013250 + 0.30 \u00d7 Y, where Y signifies total income and r symbolizes real interest rate as a percentage, how much will the total income grow if the actual interest rate is 3% and state expenditure rises to 2,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "841"
    },
    "842": {
        "tables": [],
        "question": "The details provided are related to a hedge fund named Trident Consultancy, which has:     AUM valued at $300 million as per the end of last year     A management fee set at 2% (calculated based on the AUM at year-end)     An incentive fee of 20% factored in: after deducting the management fee, considering a 5% soft hurdle rate, and utilizing a high-water mark (the high-water mark is $357 million)     The gross return for the current year for the fund stands at 20%. Could you calculate the total fee that Trident has earned this year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "842"
    },
    "843": {
        "tables": [],
        "question": "The Aquarius Pool of Funds puts GBP150 million into each of Beta Hedge Fund and XYZ Hedge Fund. Aquarius Pool of Funds operates a \"1 and 10\" fee system. Both management and incentive fees are evaluated separately at the end of each calendar year. After one year, factoring in their individual management and incentive fees, the value of Aquarius's investment in Beta stands at GBP 80 million and it's worth GBP240 million in XYZ. What is the yearly return for a investor in the Aquarius Pool of Funds, after taking into account the fees charged at the fund-of-funds level?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "843"
    },
    "844": {
        "tables": [
            "|                                | 2016 ($US millions) |\n|--------------------------------|---------------------|\n| Cost: Total property, plant, and equipment (PP&E) | 30,815                 |\n| Accumulated depreciation | 16,465                 |\n| Net PP&E                         | 14,350                 |\n| Average net PP&E                 | 12,200                 |\n| Net sales                        | 21,670                 |\n| Net income                       | 2,705                   |"
        ],
        "question": "Considering the available selected fixed asset details for a firm, what is the firm's fixed asset turnover ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "844"
    },
    "845": {
        "tables": [],
        "question": "If the historical returns of Company 1's shares and Company 2's shares have a correlation of 0.75, and the variance of Company 1's shares is 0.16 while the variance of Company 2's shares is 0.09, what is the covariance of returns of Company 1's shares and Company 2's shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "845"
    },
    "846": {
        "tables": [],
        "question": "Imagine a call option that is sold for $4 and has an exercise price of $50. Calculate the value upon expiry and the profit for a purchaser if the price of the underlying asset at expiry is $55.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "846"
    },
    "847": {
        "tables": [],
        "question": "Assuming a consistent interest rate of 8.87%, how much does a shareholder need to invest now if they aim to have $100 in their account in three years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "847"
    },
    "848": {
        "tables": [],
        "question": "Suppose a call option is priced at $4 with an exercise price of $50. Calculate the value at expiration and the profit for the vendor if the price of the underlying asset at expiration is $52.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "848"
    },
    "849": {
        "tables": [
            "| Source | Sum of Squares (SS) |\n|--------|---------------------|\n| Explained | 957 |\n| Total | 1580 |"
        ],
        "question": "What does the term Sum of Squares Residuals (SSR) refer to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "849"
    },
    "850": {
        "tables": [
            "|                                               | \u6bdb millions |\n|-----------------------------------------------|------------:|\n| Revenues for the year                         |      12,500 |\n| Total expenses for the year                   |      10,000 |\n| Gains from available-for-sale securities      |       1,475 |\n| Loss on foreign currency translation adjustments on a foreign subsidiary |         325 |\n| Dividends paid                                |         500 |"
        ],
        "question": "What is the total comprehensive income of the business (in \u20ac millions) based on the information from the business's financial records?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "850"
    },
    "851": {
        "tables": [
            "| Capital component | Book Value (000) | Market Value(000) | Component cost |\n|------------------|-----------------|-----------------|---------------|\n| Debt             | $100            | $80             | 8%            |\n| Preferred stock  | $20             | $20             | 10%           |\n| Common stock     | $100            | $200            | 12%           |"
        ],
        "question": "A researcher collected the subsequent data pertaining to a business's capital structure and pre-tax component costs. What would be the weighted average cost of capital (WACC) of the business, given that the marginal tax rate of the business is 40%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "851"
    },
    "852": {
        "tables": [
            "| EV/EBITDA | 9 |\n| --- | --- |\n| EBITDA | $25,000,000 |\n| Market value of debt | $65,000,000 |\n| Cash | $1,300,000 |"
        ],
        "question": "What is the projected equity value for the Umbrella Corporation as per the data gathered by Paul?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "852"
    },
    "853": {
        "tables": [
            "|                                         |      |\n|-----------------------------------------|------|\n| ABC LA retirement plan information 2018 |      |\n| Current service costs                   | 320  |\n| Past service costs                      | 150  |\n| Employer contributions                  | 1,200|\n| Benefit obligation at beginning of year | 45,000|\n| Benefit obligation at end of year       | 48,395|\n| Plan assets at beginning of year        | 40,800|\n| Plan assets at end of year              | 44,300|\n| Actuarial loss                          | 350  |\n| Actual return on plan assets            | 3,100|\n| Discount rate on plan liabilities       | 7.5% |\n| Expected rate of return on plan assets  | 8.2% |"
        ],
        "question": "XYZ Chicago, a home decor shopping company, provides its employees a defined benefit pension plan. Based on the data provided in the next table, could you compute the regular pension expense to be reported in I/S following IFRS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "853"
    },
    "854": {
        "tables": [
            "| Net income | $120 |\n|---|---|\n| Decrease in accounts receivable | 20 |\n| Depreciation | 25 |\n| Increase in inventory | 10 |\n| Increase in accounts payable | 7 |\n| Decrease in wages payable | 5 |\n| Increase in deferred tax liabilities | 15 |\n| Profit from the sale of land | 2 |"
        ],
        "question": "Based on the provided data, what is the company's cash flow from operations?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "854"
    },
    "855": {
        "tables": [
            "|                   | 2013  | 2012  |\n|-------------------|-------|-------|\n| Sales revenue     | 100,000| 95,000|\n| Cost of goods sold| 47,000 | 47,500|\n| Depreciation expense | 4,000 | 3,500 |\n| Net Income        | 11,122  | 4,556|\n|                   |      |     |\n| **Selected Balance Sheet Data as of 31 August ($ thousands)** |   \n|                   | 2013  | 2012  |\n| Current Assets    ||\n| Cash and investments | 21,122| 25,000|\n| Accounts receivable | 25,000| 13,500|\n| Inventories        | 13,000  | 8,500|\n| Total current assets | 59,122|47,000|\n| Current liabilities |      |     |\n| Accounts payable   | 15,000 |15,000|\n| Other current liabilities | 7,000 |9,000 |\n| Total current liabilities|  22,000|24,000|"
        ],
        "question": "What is the amount of money received from clients in the year 2013 based on the chosen data from a corporation's comparative income statement and balance sheet?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "855"
    },
    "856": {
        "tables": [],
        "question": "You choose to short sell 100 shares of Monticello Equestrian Centers when it's at its annual peak of 56. Your broker informs you that your margin requirement is 45% and the commission on the acquisition is $155. During the term you are shorting the stock, Monticello pays a dividend of $2.50 per share. At the conclusion of a year, you purchase 100 shares of Monticello at 45 to settle your position and are hit with a commission of $145. What is your investment's rate of return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "856"
    },
    "857": {
        "tables": [
            "| Discount rate | 11% |\n| --- | --- |\n| Growth rate | 2% |\n| Terminal cap rate | 8% |"
        ],
        "question": "What is the initial capitalization rate of the property based on the following details?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "857"
    },
    "858": {
        "tables": [],
        "question": "A fund manager of fixed income wishes to decrease the duration from 5.5 to 4.5 using a 3-year interest rate swap with quarterly payments. If the portfolio's market value is $10,000,000 and the modified duration of the payer swap is -2.125, what is the notional principle of the swap?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "858"
    },
    "859": {
        "tables": [],
        "question": "On January 1st, 20X5, Vega Holdings Corporation distributed 55,000 shares to employees as stock options. The exercise price for 24,000 of these shares is $32, while the remaining shares have an exercise price of $35. By the end of 20X5, the company's stock price had reached $42, with 1,800,000 common shares in outstanding circulation overall. The mean stock price for 20X5 was $34. Could you calculate the denominator for the diluted earnings per share?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "859"
    },
    "860": {
        "tables": [],
        "question": "A firm purchases a license for $6,500, planning to use it for a duration of four years. However, the firm's management anticipates deriving advantages from the license for three years, applying the straight-line amortization technique. What would be the accumulated amortization at the close of the second year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "860"
    },
    "861": {
        "tables": [
            "| Years to maturity | MRR   |\n|------------------ |-------|\n| 1                 | 1%    |\n| 2                 | 1.5%  |"
        ],
        "question": "One year ago, a merchant entered into a three-year interest rate swap in which he receives floating payments. Currently, the established fixed swap rate is 1.4853% (a year after the swap was initially made). The starting swap rate was set at 1.82% and the notional principle stands at $100 million. What is the value of this swap?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "861"
    },
    "862": {
        "tables": [],
        "question": "Assuming that the yield-to-maturity of Bond B increases by 20 basis points, and given that the bond's annual modified duration is 6.932 and the annual convexity is 59.270, what should be the anticipated percentage price change?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "862"
    },
    "863": {
        "tables": [],
        "question": "What is the constant maturity mortality if the assumed annual conditional prepayment rate (CPR) for a cluster of mortgages is 5% and the weighted average maturity of the respective mortgages is 15 years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "863"
    },
    "864": {
        "tables": [],
        "question": "What is the anticipated rate of return for a share with CAPM, given a beta of 1.5, a risk-free rate of 5%, and a market return of 8%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "864"
    },
    "865": {
        "tables": [],
        "question": "If the five-year Treasury bond in the US has a yield of 2% and the swap spread is reported at 50 bps, what is the interest rate paid by the fixed payer in a five-year interest rate swap?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "865"
    },
    "866": {
        "tables": [
            "| Convertible Bond Issued by Pro Star, Inc |      |\n|--------------------------------|------|\n| Issue Date                     | 6 December 20X0 |\n| Maturity Date                  | 6 December 20X4 |\n| Coupon Rate                    | 2%  |\n| Issue Price                    | $1,000 |\n| Conversion Ratio               | 31   |"
        ],
        "question": "What is the conversion price of the bond in Exhibit 3, which was issued by Pro Star as a convertible bond, according to the exhibit below?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "866"
    },
    "867": {
        "tables": [],
        "question": "Recently, Parker Inc. acquired a production machine for $60,000 that is anticipated to produce an annual cash inflow of $25,000 for six years. The company will depreciate the machine over six years for accounting reasons, but the tax authority assumes a useful lifespan of five years for the machine. If the tax rate is 40% and the machine has no residual value, what would be the taxable income for Parker Inc. in the first year if the straight-line method is applied?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "867"
    },
    "868": {
        "tables": [
            "|                                             | 2010 | 2011 | 2012 |\n|---------------------------------------------|------|------|------|\n| **Net sales**                               | 46.8 | 50.5 | 53.9 |\n| **Cost of sales**                           | 18.2 | 18.4 | 18.8 |\n| **Gross profit**                            | 28.6 | 32.1 | 35.1 |\n| **Selling, general, and administrative (SG&A) expenses** | 19.3 | 22.5 | 25.1 |\n| **Operating income**                        | 9.3  | 9.6  | 10.0 |\n| **Interest expense**                        | 0.5  | 0.7  | 0.6  |\n| **Income before provision for income tax**  | 8.8  | 8.9  | 9.4  |\n| **Provision for income taxes**              | 2.8  | 2.8  | 3.1  |\n| **Net income**                              | 6.0  | 6.1  | 6.3  |"
        ],
        "question": "Based on Exhibits 1, what is Applicant B's prediction for selling, general, and administrative costs in 2013, considering that his forecast states the following: net sales will increase at the average yearly growth rate in net sales for the years 2010-2012 and the 2013 SG&A/net sales ratio will remain consistent with the average ratio during 2010-2012?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "868"
    },
    "869": {
        "tables": [
            "| Asset Class    | Geometric Return (%) |\n| -------------- | -------------------- |\n| Equities       | 8.0                  |\n| Corporate Bonds| 6.5                  |\n| Treasury bills | 2.5                  |\n| Inflation      | 2.1                  |"
        ],
        "question": "What is the recorded historical geometric actual return rate for company bonds as per the researcher?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "869"
    },
    "870": {
        "tables": [],
        "question": "Firm N, which uses the IFRS system, allocated $22 million for inventory acquisition last year. Following a natural calamity, the inventory's value was reduced to $19 million. However, by the end of the year, certain equipment was still functional, raising the actual inventory value to $25 million. What should be the reported inventory value for Firm N?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "870"
    },
    "871": {
        "tables": [
            "|                      | Portfolio W    | Futures Contract and CTD Bond |\n|----------------------|----------------|------------------------------|\n| Market value         | $120,349,000   | Price                        | 143.20                        |\n| Modified duration    | 9.30           | Modified duration            | 9.00                          |\n| Basis point value    | $111,924.57    | Basis point value            | 128.88                        |\n|                      |                | Conversion factor            | 0.75                          |\n|                      |                | Contract size                | $100,000                      |"
        ],
        "question": "Based on Exhibit 1, to meet the goal of junior analyst, Benjamin, to lower the modified duration of his fully invested US Treasuries portfolio, Portfolio B, to 3.00, how many Treasury futures contracts does Benjamin need to sell?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "871"
    },
    "872": {
        "tables": [],
        "question": "A financial institution has recently received loan applications amounting to $210 million; it plans to acquire $95M in novel Treasury bonds releasing this week and foresees that its top corporate client's credit line withdrawals will reach $115M. The total funds from deposits and other client funds obtained today amount to $210 million, and the expected funds to be garnered next week amounts to an additional $150M. Based on the provided information, what is the discrepancy in available funds?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "872"
    },
    "873": {
        "tables": [],
        "question": "If a foreign exchange broker determined the correlation between the spot and futures to be 0.875, the yearly standard deviation of the spot price to be $1.10, and the yearly standard deviation of the futures price to be $1.3. What would be the hedge ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "873"
    },
    "874": {
        "tables": [
            "| Book value per share, beginning of 2015 | 5.0 |\n| --------------------------------------- | --- |\n| Cost of equity                          | 8%  |\n| Persistence factor                      | 0.85|",
            "|                       | 2015 | 2016 | 2017 |\n|-----------------------|------|------|------|\n| Expected earnings per share | 2.0  | 2.2  | 2.45 |\n| Expected dividend per share | 1.2  | 0.9  | 1.11 |"
        ],
        "question": "Based on the data provided in the table below, Henry is getting ready to reassess the worth of XYZ Corp. The business anticipates a return on equity (ROE) of 34.5% in 2017, but it's expected to gradually decrease towards the cost of equity afterward. From the start of 2015, utilizing the multi-stage residual income (RI) model, determine the fundamental value of XYZ Corp's equity. Can you calculate the fundamental price per share?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "874"
    },
    "875": {
        "tables": [],
        "question": "What is the likelihood that a stock B from the stock market, with an average return of 18 percent and a standard deviation of the estimate return of 25 percent annually, exceeds a return of 22 percent, assuming the returns are normally distributed? A market researcher is currently investigating this.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "875"
    },
    "876": {
        "tables": [],
        "question": "Imagine in 2017, a USD/EUR spot exchange rate hits 1.2865 at a certain period. The one-year forward rate then is 1.28485. What would be the one-year forward points quoted as?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "876"
    },
    "877": {
        "tables": [],
        "question": "Fortune Corporation has a tax burden of 70%, interest burden of 0.8 times, current ratio of 1.5 times, EBIT margin of 20%, asset turnover of 3 times, leverage ratio of 1.6 times. Can you compute the corporation's return on equity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "877"
    },
    "878": {
        "tables": [],
        "question": "The value of the stocks portfolio stands at $10,000,000. The company intends to utilize futures contracts valued at $125,000 to bring down the beta from 1.2 to zero over a span of two months. The beta value of these futures contracts is 0.95. How many futures contracts should the company sell?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "878"
    },
    "879": {
        "tables": [
            "| Accounting profit (earnings before taxes) | $250,000 |\n|---|---|\n| Taxable income | $215,000 |\n| Tax rate | 30% |\n| Income taxes paid in year | $61,200 |\n| Deferred tax liability, start of year | $82,400 |\n| Deferred tax liability, end of year | $90,650 |"
        ],
        "question": "What is the income tax expense listed on this year's earnings statement for a corporation for the current fiscal year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "879"
    },
    "880": {
        "tables": [
            "| Option        | W     | X     | Y     | z     |\n|---------------|-------|-------|-------|-------|\n| Type of Option| Call  | Call  | Put   | Put   |\n| Exercise Price| $38.00| $46.00| $38.00| $36.00|\n| N (d1)        | 0.56  | 0.30  | 0.56  | 0.64  |\n| N (d2)        | 0.45  | 0.21  | 0.45  | 0.553 |"
        ],
        "question": "If she chooses to temporarily hedge the 100,000 shares of Apoth she possesses until the FDA's review concludes, how many option X contracts would Smith need to sell to effectuate the hedge plan, based on the information in Exhibit 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "880"
    },
    "881": {
        "tables": [],
        "question": "Let's assume there's an $80 million exposure to a certain business partner that's backed by $70 million worth of collateral. This collateral is made up of bonds from a company with an A-level rating. The business partner holds a B+ rating. With a 150% risk weight for the business partner and a 50% risk weight for the collateral, what would the risk-weighted assets be for the exposure using a straightforward approach?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "881"
    },
    "882": {
        "tables": [],
        "question": "If Thompson, a credit analyst, is planning to use the data from a 5-year corporate bond labeled Bond E that is presently yielding a return of 7.5%, with a comparable government bond offering 2.5%, and a suitable CDS contract bearing a credit spread of 4.5% to carry out a basis trade, what will be the accrued profit if there's a convergence in the bond and CDS market?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "882"
    },
    "883": {
        "tables": [],
        "question": "Assuming that Corporation N's pretax profits are taxed at the business level of 35%, and the individual tax rate on dividends is at 15%. All the pretax income are dedicated to dividends. What is the effective tax rate on the dividend?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "883"
    },
    "884": {
        "tables": [
            "|       | Classification | Cost   | Market value 2018 | Market value 2019 |\n|-------|----------------|--------|-------------------|-------------------|\n| Shoes Corp | FVOCI   | 12,000 | 15,000  | 16,000  |\n| Angle PD   | Amortized cost  | 35,000 | 32,000  | 33,000  |\n| T-vision   | FVPL   | 42,000 | 45,000  | 56,000  |"
        ],
        "question": "In her role at the Equity investment company, Fabian, a CFA, is preparing a research report on a company known as PZ, which is listed in HK and follows IFRS 9. She pulled information from PZ's year-end 2019 financial report regarding three fixed income investments (assuming cost equals par value). Had Shoes Corp been classified as a Fair Value through P/L in 2019, what would the earnings before taxes have been?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "884"
    },
    "885": {
        "tables": [],
        "question": "The current value of a European-style put option is set to be determined by a CEO using a two-period binomial model. The present stock price is $32, with the put option's exercise price also at $32. The up and down factors are 1.12 and 0.92 respectively, with a risk-free rate of 5%. What is the value of this put option?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "885"
    },
    "886": {
        "tables": [],
        "question": "The 15-month investment duration for a bond yielded a 12% return. What is the annualized yield?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "886"
    },
    "887": {
        "tables": [],
        "question": "A manager of an endowment fund is assessing the market risk of Omega Manufacturing Fund. The fund projects an annual return of 7.1% and a volatility of 7.9%, and it is compared against the Russell 2000 Index. It is assumed by the manager that the anticipated annual return of the Russell 2000 Index is 7.8%, with a yearly volatility of 9.8%. In accordance with the Capital Asset Pricing Model, if the risk-free rate per year is 3.2%, what would be the beta of Omega Manufacturing Fund?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "887"
    },
    "888": {
        "tables": [
            "| Year | Hazard Rate |\n|------|-------------|\n| 1    | 0.15%       |\n| 2    | 0.25%       |\n| 3    | 0.35%       |\n| 4    | 0.50%       |\n| 5    | 0.65%       |"
        ],
        "question": "What is the likelihood of the firm failing to fulfill its obligations on Bond C, a five-year investment-grade bond, within the initial 4 years, as per the given information?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "888"
    },
    "889": {
        "tables": [],
        "question": "If the neckline is positioned at \u20ac100, the shoulders at \u20ac90, and the head at \u20ac75 in a reversed head and shoulders pattern, what is the target value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "889"
    },
    "890": {
        "tables": [],
        "question": "What is the monthly repayment for a customer who buys a car with a loan of \u20ac30,000 that is set to be paid off in five years with fixed monthly installments, an annual nominal interest of 8% and interest compounded monthly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "890"
    },
    "891": {
        "tables": [],
        "question": "Assuming we select 20 students to sit for the university admission test, how many may potentially suffer from anxiety neurosis if it's believed that 45% of all examinees experience it?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "891"
    },
    "892": {
        "tables": [
            "| Spot rate (USD/AUD) | 0.9062/0.9066 |\n| --- | --- |\n| Three-month points | -36.8/-36.4 |\n| Three-month Libor (AUD) | 2.88% |\n| Three-month Libor (USD) | 0.23% |"
        ],
        "question": "At the beginning of the year, Brighton offset a major exposure to the Australian dollar (AUD) by selling AUD 5 million forward against the US dollar (USD) at the all-in forward price of 0.8940 (USD/AUD). Currently, it's three months away from the settlement date and Sanderson wants to mark the forward position to market. Exhibit 1 provides data on the current rates in foreign exchange markets. What is the mark-to-market value for Brighton's forward position?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "892"
    },
    "893": {
        "tables": [],
        "question": "What is the worth of a share which is projected to pay a $3 dividend in the subsequent year, with a consistent growth rate of 3% and a needed return rate of 8%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "893"
    },
    "894": {
        "tables": [],
        "question": "In a perfectly competitive market where the demand schedule is P = 165 - 3Q (for Q \u2264 55), how is the entry price for new players determined given that the long-term total cost for every business is 125 + Q + 5Q2, the average cost is 125/Q + 1 + 5Q, and the marginal cost is 1 + 10Q?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "894"
    },
    "895": {
        "tables": [],
        "question": "A buyer acquires a five-year bond with a 4% annual coupon for 104.58 and sells it precisely three years subsequent to the purchase. Right after the bond is bought and prior to receiving the first coupon, interest rates drop to 2.25%, and they stay at this rate for the following three years. Assuming that the coupon payments are collected and re-invested at 2.25%, what is the buyer's actualized horizon yield?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "895"
    },
    "896": {
        "tables": [],
        "question": "Considering the factors below, calculate the accrued interest for every 100 of par value for Bond H on the settlement day of 16 June 2014. The factors are: Annual Coupon - 5%, Coupon Payment Frequency - Semiannual, Interest Payment Dates - 10 April and 10 October, Maturity Date - 10 October 2016, Day Count Convention - 30/360, Annual Yield-to-Maturity - 4%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "896"
    },
    "897": {
        "tables": [],
        "question": "The corporation Successful Inc. has an operating profit margin of 10%, an asset turnover ratio of 1.5, a financial leverage multiplier of 1.6 times, and an interest burden of 0.8. The firm's ROE is 0.144, can you compute the firm's average tax rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "897"
    },
    "898": {
        "tables": [
            "| Security | Beginning of Period Price (\u20ac) | End of Period Price (\u00a3) | Total Dividends (\u20ac) |\n|----------|-------------------------------|-------------------------|----------------------|\n| Able     | 10.00                          | 12.00                   | 0.75                 |\n| Baker    | 20.00                          | 19.00                   | 1.00                 |\n| Charlie  | 30.00                          | 30.00                   | 2.00                 |"
        ],
        "question": "A financial expert collects the following data for an equal-weighted index made up of assets Alpha, Beta, and Gamma: What is the total return of the index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "898"
    },
    "899": {
        "tables": [],
        "question": "If we take 2016 as the base period, and the GDP in Nation Y for that year and the following year was $200 billion and $220 billion respectively, what would the GDP deflator be for 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "899"
    },
    "900": {
        "tables": [],
        "question": "If every yearly trial is independent of each other, what's the probability that BBB company's stock, which has a 30% chance to increase annually, will go up more than once in the coming three years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "900"
    },
    "901": {
        "tables": [
            "| Security | Expected Annual Return(%) | Expected Standard Deviation(%) |\n|----------|---------------------------|-------------------------------|\n| A        | 20                        | 16                            |\n| B        | 20                        | 12                            |"
        ],
        "question": "If an manager named Laurel from a finance firm recently built a portfolio with two unrelated assets, what would be the estimated standard deviation assuming equal weightage for both assets?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "901"
    },
    "902": {
        "tables": [
            "| Revenue | $4,000,000 |\n|---------|------------|\n| Cost of goods sold | $3,000,000 |\n| Other operating expenses | $500,000 |\n| Interest expense | $100,000 |\n| Tax expense | $120,000 |"
        ],
        "question": "The gross profit of the manufacturing company, Denali Limited, is equal to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "902"
    },
    "903": {
        "tables": [
            "| Labor(L) | Total Product(TP) | Average Product(AP) |\n|----------|-------------------|---------------------|\n| 1        | 100               | 100                 |\n| 2        | 210               | 105                 |\n| 3        | 300               | 100                 |\n| 4        | 360               | 90                  |\n| 5        | 400               | 80                  |"
        ],
        "question": "Based on the provided data chart, what is the marginal product when the labor (L) equals 3?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "903"
    },
    "904": {
        "tables": [
            "|                  |   Prior Year    |        |   Current Year   |        |\n|------------------|-----------------|--------|------------------|--------|\n|      Goods       |    Quantity     | Price  |    Quantity      | Price  |\n| 5 lb.bag sugar   |     150 bags    |  $3.12 |    180 bags      |  $2.92 |\n| 5 lb.bag flour   |     800 bags    |  $2.18 |    750 bags      |  $3.12 |\n| Frozen pizza(each)|    250          |  $2.90 |    250           |  $3.00 |"
        ],
        "question": "What is the Paasche Index if we utilize the consumption basket for this year alongside the subsequent data from a three-item consumption goods basket, which we use to calculate inflation rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "904"
    },
    "905": {
        "tables": [],
        "question": "Assuming the heights of trees in a woodland area are normally distributed and the total number of trees exceeds 10,000. If a z-statistic was calculated using a sample of 200 trees and a 95% confidence interval for the sample mean height ranged from 11 to 35 meters, what would be the standard error of the mean height?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "905"
    },
    "906": {
        "tables": [
            "| Security | Beginning of Period Price(E) | End of Period Price(E) | Total Dividends(E) |\n| --- | --- | --- | --- |\n| Able | 10.00 | 12.00 | 0.75 |\n| Baker | 20.00 | 19.00 | 1.00 |\n| Charlie | 30.00 | 30.00 | 2.00 |"
        ],
        "question": "A researcher collects the following data for an equal-weighted index composed of assets X, Y, and Z: The total return of the index is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "906"
    },
    "907": {
        "tables": [],
        "question": "Smith is a tax consultant who offers tax enlightenment counsel to individual customers. One of Smith's client, Rose, is a U.S. citizen and resides in America. Rose recently came into ownership of AAPL shares from a family member who passed on. This departed family member was a resident of the U.S., which applies a \"step-up\" in basis at death. The deceased family member bought AAPL shares at a cost of $15,000 (inclusive of commissions and other spendings) two decades ago. When the family member passed away, the market value of the AAPL stock owned by them was $220,000, and recently Rose sold these shares for $190,000. Rose's capital gains tax rate sits at 20%. The tax obligation on the sale of the AAPL shares is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "907"
    },
    "908": {
        "tables": [
            "| Return,R         | Frequency |\n| ---------------- | --------- |\n| -5% up to 0%    | 1         |\n| 0% up to 5%     | 6         |\n| 5% up to 10%    | 4         |\n| 10% up to 15%   | 3         |"
        ],
        "question": "Using the provided frequency distribution table, can you determine the relative frequency of the third interval?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "908"
    },
    "909": {
        "tables": [
            "| Net income | $55,000 |\n|---|---|\n| Depreciation | $60,000 |\n| Taxes paid | $25,000 |\n| Interest received | $5,000 |\n| Dividends received | $10,000 |\n| Cash received from sale of company's equipment | $40,000 |\n| Issuance of preferred stock | $45,000 |\n| Repurchase of common stock | $20,000 |\n| Purchase of machinery | $20,000 |\n| Issuance of bonds | $40,000 |\n| Debt retired through issuance of common stock | $45,000 |\n| Paid off long-term bank borrowings | $15,000 |\n| Profit on sale of building | $15,000 |"
        ],
        "question": "Under American GAAP, what is the cash flow from operations?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "909"
    },
    "910": {
        "tables": [],
        "question": "What is the flat price for Bond H, discussed in the display below, which is scheduled for sale on the settlement date of 16 June 2014? Here are some considerations: The Annual Coupon is 5%, the Coupon Payment Frequency is semi-annually, Interest Payment Dates are 10 April and 10 October, the Maturity Date is 10 October 2016, the Day Count Convention is 30/360, and the Annual Yield-to-Maturity is 4%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "910"
    },
    "911": {
        "tables": [
            "|   | Company | Fixed Rate | Floating Rate |\n|---|---------|------------|---------------|\n| a | X       | 8%         | LIBOR+150bps  |\n| b | Y       | 10%        | LIBOR+200bps  |"
        ],
        "question": "The lending rates for corporation A and corporation B are set as such: corporation A and corporation B borrowed money at their respective preferred borrowing rates before engaging in an interest rate swap. What's the overall savings?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "911"
    },
    "912": {
        "tables": [],
        "question": "Assuming a marginal tax rate of 40%, what is the after-tax cost of the preferred stock if a corporation is planning a fresh issue of preferred stock with a $100 par and a 12% dividend, and it can be sold for $95 per share with the corporation having to pay flotation costs equating to 5% of the market price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "912"
    },
    "913": {
        "tables": [],
        "question": "What is the net-of-fees return earned in Year 3 by a hedge fund that started with $98 million, charges a 2% management fee based on assets under management at year end, a 20% incentive fee calculated separately from the management fee, and has a high-water mark provision? The fund was valued at $112 million at the end of Year 1, $100 million at the end of Year 2, and $116 million at the end of Year 3.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "913"
    },
    "914": {
        "tables": [],
        "question": "Considering the details provided regarding a newly constructed showroom by a corporation, what is the depreciation expense (in millions) for the showroom in 2014? Here are the specifics: Construction commenced on 1 January 2012, the grand opening took place on 1 January 2014, a loan of \u20ac30 million was taken out on 1 January 2012, the interest rate on the loan was 8%, payable annually, repayment of the loan was scheduled as a balloon payment due on 1 January 2017. The total construction expenses during 2012 and 2013 amounted to \u20ac38.5 million, the estimated useful life of the showroom was 40 years, the projected residual value of the showroom was \u20ac5 million, and the depreciation approach used was straight line.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "914"
    },
    "915": {
        "tables": [
            "| Security | Beginning of Period Price(\u20ac) | Beginning of Period Shares | End of Period Price(\u20ac) | End of Period Shares |\n|----------|------------------------------|---------------------------|------------------------|----------------------|\n| A        | 20.00                        | 300                       | 22.00                  | 300                  |\n| B        | 50.00                        | 300                       | 48.00                  | 300                  |\n| C        | 26.00                        | 2,000                     | 30.00                  | 2,000                |"
        ],
        "question": "A researcher collects the subsequent data for an equally-weighted index: What is the index's return over the time span?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "915"
    },
    "916": {
        "tables": [],
        "question": "Based on the aforementioned details, what must be the anticipated liquidity requirement for this financial corporation, given that the administration predicts a worst-case scenario next week involving a $25 million liquidity shortage with just a 15% likelihood? Furthermore, the most favorable scenario involves an $80 million liquidity excess, but this has a 10% likelihood. The most likely situation is a $15 million liquidity excess, which has a 75% probability according to administration estimates.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "916"
    },
    "917": {
        "tables": [
            "| Jan | Feb | Mar | Apr | May | Jun |\n|-----|-----|-----|-----|-----|-----|\n| 20% | 4% | -5% | 12% | 3% | 12% |"
        ],
        "question": "The table provided presents the monthly stock returns for Rose Enterprises. Based on the information in the table, can you calculate the median stock return for Rose Enterprises?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "917"
    },
    "918": {
        "tables": [],
        "question": "Currently the 1-year rate is at 5%. If a trader predicts the 1-year rate next year to rise up to 7%, and the 1-year rate in two years to reach 9%, what will the 3-year spot rate be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "918"
    },
    "919": {
        "tables": [],
        "question": "An investor bought 200 stocks of a company that doesn't pay dividends on margin with a cost of $50 each share. The leverage ratio stands at 2.5. Half a year later, the investor offloads these stocks at a price of $60 each share. If we disregard the interest paid on the borrowed money and the transaction expenses, what was the six-month period return for the investor?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "919"
    },
    "920": {
        "tables": [],
        "question": "Imagine a portfolio that consists of two properties. Property X makes up 25% of the portfolio and has a standard deviation of 17.9%. Property Y constitutes 75% of the portfolio and comes with a standard deviation of 6.2%. Given that the correlation between these two properties is 0.5, what would be the standard deviation of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "920"
    },
    "921": {
        "tables": [
            "|    | Joint probabilities |     |     |\n|----|-------------------:|----:|----:|\n|  X |                Y=5 | Y=2 | Y=-3|\n|X=-2|                 0.2|   0 |    0|\n| X=1|                   0| 0.6 |    0|\n|X= 4|                   0|   0 |  0.2|"
        ],
        "question": "Based on the given joint probability table, what is the correlation between X and Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "921"
    },
    "922": {
        "tables": [
            "| Probability | Return of Stock A(%) |\n|-------------|----------------------|\n| 0.20        | 30                   |\n| 0.60        | 10                   |\n| 0.20        | -20                  |"
        ],
        "question": "What is the standard deviation of return for stock A according to the above probability distribution?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "922"
    },
    "923": {
        "tables": [],
        "question": "A manager at a snowboarding park is contemplating providing discounts on weekday snowboarding passes. With the regular price being \u20ac50 per day, it is anticipated that 300 patrons will purchase passes each weekday. However, if the price is lowered to \u20ac40 per day, it is expected that 450 patrons will purchase passes each weekday. What is the marginal revenue per patron gained through providing the discounted price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "923"
    },
    "924": {
        "tables": [],
        "question": "The probabilities for Z are displayed as follows, P(Z=0.4)=30%, P(Z=0.2)= 30%, P(Z=-0.2)= 40%. What is the standard deviation of Z?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "924"
    },
    "925": {
        "tables": [],
        "question": "Using the H-model, John is assessing the worth of Company N at $20 per share. The firm has given a dividend of $1 per share in the most recent year. During the initial four years, the growth rate will gradually reduce from 10% to 6%. The dividend growth rate from that point onwards will be 6% per year indefinitely. What is the necessary rate of return in his model?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "925"
    },
    "926": {
        "tables": [
            "| Comparable Companies | Tax Rate (%) | Debt/Equity | Equity Beta |\n|----------------------|--------------|-------------|-------------|\n| Private company      | 30           | 1           | N.A.        |\n| Public company       | 35           | 0.9         | 1.75        |"
        ],
        "question": "Given the details about a privately-owned corporation and its competitor in the public market and by applying the pure-play method, what would be the projected equity beta for the privately-owned corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "926"
    },
    "927": {
        "tables": [
            "| Jan | Feb | Mar | Apr | May | Jun |\n|-----|-----|-----|-----|-----|-----|\n| 20% | 4%  | -5% | 12% | 3%  | 12% |"
        ],
        "question": "According to the provided table, what is the range for the monthly stock returns of Ivy Corp?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "927"
    },
    "928": {
        "tables": [],
        "question": "If Natsuki Yamamoto has become a part of a new company where he can choose from 10 mutual funds for the company's retirement plan, and he intends to pick four, how many distinct combinations of mutual funds can he select?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "928"
    },
    "929": {
        "tables": [],
        "question": "A 90-day European put option on Apple has a strike price of $30. The current market price for Apple is $30. What is the delta for this option?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "929"
    },
    "930": {
        "tables": [
            "|                  |                  |                                  |\n|------------------|------------------|----------------------------------|\n| **Issue price**             |                  |  \u00a3 1,000 at par                     |\n| **Conversion period**       |                  | 13 September 20X5 to 12 September 20X8 |\n| **Initial conversion price**|                  | \u00a3 10.00 per share                  |\n| **Threshold dividend**      |                  | \u00a3 0.50 per share                   |\n| **Change of control conversion price** |                  | \u00a3 8.00 per share                   |\n| **Common stock share price on issue date** |                  | \u00a3 8.70                       |\n| **Share price on**          | 17 September 20X5| \u00a3 9.10                       |\n| **Convertible bond price on 17 September 20X5**  |                  | \u00a3 1,123                      |"
        ],
        "question": "What is the per share market conversion premium for the DE bond on 17 September 20X5, based on the chosen convertible bond data provided below?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "930"
    },
    "931": {
        "tables": [],
        "question": "Imagine that in a specific defined benefit scheme, the following situation occurs. Workers serve for 40 years with a wage that grows precisely with inflation rate. Pension equals to 60% of the last salary and grows perfectly with inflation rate. Employees always live for 25 years post-retirement. The money within the retirement plan is invested in bonds that yield an inflation rate. Which is the best approximation of the portion of the worker's income that ought to be put into the retirement plan? (Hint: You should perform all calculations in real and not nominal terms so that the income and pensions stay constant and the interest yield is zero.)",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "931"
    },
    "932": {
        "tables": [],
        "question": "What is the operating breakeven point in units if the per unit contribution margin for an item is $12 and it is assumed that fixed costs are $12,000, interest costs are $3,000, and there are taxes of $2,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "932"
    },
    "933": {
        "tables": [],
        "question": "A note is presently selling for $109.246 for every $100 of face value. If the note's yield to maturity decreases by 25 bps, the note's total price is projected to increase to $110.481. If the note's yield to maturity increases by 25 bps, the note's total price is predicted to decrease to $108.029. What is the note's estimated convexity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "933"
    },
    "934": {
        "tables": [],
        "question": "The 4-year spot rate is 9.45%, and the 1-year spot rate is 8.528%. What would be the 3-year forward rate starting a year from now?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "934"
    },
    "935": {
        "tables": [
            "|                               | REIT A     |\n| ----------------------------- | ---------- |\n| Funds from operations (FFO)  | $ 396,400  |\n| Non - cash rents              | $ 56,782   |\n| Recurring maintenance-type capital expenditures | $ 78,600   |\n|                               |            |\n| Shares outstanding            | 73,500     |\n| Property subsector average P/AFFO multiple | 17.3x |"
        ],
        "question": "What is the per share value of REIT A by utilizing the property subsector average P/AFFO multiple method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "935"
    },
    "936": {
        "tables": [
            "|    |    |\n|----|----|\n| Name | Jane Lennon |\n| Occupation and Family Structure | She is the morning news anchor for a national broadcasting company, where she has worked for the past 20 years. She is 56 years of age, divorced, and the sole supporter of her two children, Everett, aged 18, and Marshall, aged 14. Marshall suffers from severe medical and developmental issues. |\n| Current and Expected Future Employment Income | She currently earns $1 million per year as a broadcaster. She plans on retiring in four years. With typical raises in her industry, she estimates that the present value of her pre-retirement income is $4.5 million. |\n| Financial Assets and Liabilities | She has an investment portfolio worth $8 million, which consists of 30% equities and the remainder in fixed-income securities. She also owns $1 million in shares of the broadcasting company she works for, but she is restricted from selling them for two more years. Her primary residence carries no mortgage and was recently valued at $2 million. She also owns a vacation property worth $3 million, with an outstanding mortgage of $1 million. Her defined-contribution pension plan has vested and is valued at $2.5 million. |\n| Aspirational Goals and Extended Liabilities | Everett is just beginning university and plans to pursue a medical degree. Lennon plans on paying for his entire education and living expenses as well as providing some assistance in funding his future practice. She believes that these goals will be covered with $1.5 million in present value terms. She has begun the process of setting up a special needs trust to provide lifetime benefits for Marshall that will not interfere with the government benefits that he is eligible to receive. It will be funded with $2 million within the year. She recently received an honorary doctorate from her alma mater and has started the process of endowing a chair in its communications department. She anticipates that the funding will be made available to the university in two years; it has a present value of $1.75 million. The present value of future consumption is estimated to be $9 million. |"
        ],
        "question": "Fox is currently recruiting an asset allocation analyst and has finished interviewing two applicants, Ambrose Kelly and Catherine Trainor, for the role. Based on the data in Exhibit 1, what is Lennon's economic net worth (in $ millions)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "936"
    },
    "937": {
        "tables": [],
        "question": "A company is contemplating a venture that would demand a starting investment of THB270 million. The venture will aid in augmenting the company's post-tax net cash flows by THB30 million annually indefinitely, and it has been detected to hold a negative NPV of THB20 million. What is the IRR (%) of the venture?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "937"
    },
    "938": {
        "tables": [
            "| Time Period | Forward Rate |\n|-------------|--------------|\n| 0y1y        | 0.50%        |\n| 1y1y        | 0.70%        |\n| 2y1y        | 1.00%        |\n| 3y1y        | 1.50%        |\n| 4y1y        | 2.20%        |"
        ],
        "question": "Let's say the subsequent yearly forward rates were deduced from the yield curve. What would be the spot rate for a four-year period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "938"
    },
    "939": {
        "tables": [
            "|   | Cumulative Distribution Function |\n|---|---|\n| X=x | F(x)=P(X\u2264x) |\n| 1 | 0.15 |\n| 2 | 0.25 |\n| 3 | 0.50 |\n| 4 | 0.60 |\n| 5 | 0.95 |\n| 6 | 1.00 |"
        ],
        "question": "The cumulative distribution function for a discrete random variable is displayed in the subsequent table. What is the possibility that Y will assume a value of either 2 or 4?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "939"
    },
    "940": {
        "tables": [],
        "question": "Kyle has an equity of $100 in cash. He initiates a short position in stock B. The current price of stock B is 100 and Kyle sells it. The cash from the short sale is kept in the dealer's account and is not available for funding other investments. Furthermore, Kyle deposits $50 as collateral. Based on the details provided, what is the leverage of the position?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "940"
    },
    "941": {
        "tables": [
            "| Spot rate (CHF/GBP) | 1.4939/1.4941 |\n|---------------------|---------------|\n| One month           | -8.3/-7.9     |\n| Two month           | -17.4/-16.8   |\n| Three month         | -25.4/-24.6   |\n| Four month          | -35.4/-34.2   |\n| Five month          | -45.9/-44.1   |\n| Six month           | -56.5/-54.0   |"
        ],
        "question": "What is the present comprehensive bid rate for delivery of GBP against the CHF in three months for the CHF/GBP forex pair, taking into account the current spot rate and forward points?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "941"
    },
    "942": {
        "tables": [
            "| Exhibit 1. Consumption Baskets and Price Level Over 2 years |\n|-------------------------------------------------------------|",
            "| Time     | 2015 Q   | 2015 P     | 2016 Q   | 2016 P     |\n| -------- | -------- | ---------- | -------- | ---------- |\n| Soybean  | 110 kg   | $4.8/kg    | 150 kg   | $5.1/kg    |\n| Gasoline | 50 liters| $2.62/liter| 80 liters| $3.1/liter |"
        ],
        "question": "What is the value of the Paasche index for the consumption basket showcased in Exhibit 1 for the year 2016?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "942"
    },
    "943": {
        "tables": [],
        "question": "A bank certificate of deposit with a 365-day year has a starting principal sum of USD 96.5 million and a due amount at maturity of USD 100 million. It has 350 days between settlement and maturation. What is the equivalent yield of the bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "943"
    },
    "944": {
        "tables": [],
        "question": "The current year's consumer price index (CPI) stands at 252 while it was 246 last year. Can you determine this year's rate of inflation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "944"
    },
    "945": {
        "tables": [],
        "question": "A buyer acquires a nine-year bond with an annual coupon rate of 7% at a price equivalent to its par value. Prior to the receipt of the first coupon, interest rates rise to 8%. After holding the bond for five years, the buyer decides to sell it. Let's assume that the interest rates stayed steady at 8% during the five-year period. How much would the reinvested coupon payments be worth at the end of the holding period per 100 of par value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "945"
    },
    "946": {
        "tables": [
            "| Company | Market Share(%) |\n|---------|-----------------|\n| Mddert  | 45              |\n| Nuki    | 35              |\n| Pefa    | 10              |\n| Serds   | 5               |\n| Rsdf    | 5               |"
        ],
        "question": "In an industry consisting of 5 businesses, the market share data of these businesses was provided for the last quarter. What is the three-firm Herfindahl-Hirschmann Index for this industry?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "946"
    },
    "947": {
        "tables": [],
        "question": "If Firm B disclosed a revenue of $80 million and net income of $45 million, what would be the sum of cash obtained from clients if there was a $5 million increase in accounts receivable and a $1 million decrease in accounts payable?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "947"
    },
    "948": {
        "tables": [],
        "question": "If Jane Doe's portfolio has a fixed-income position with a market value of USD 70 million, a modified duration of 6.44 years and a yield of 6.7% compounded semiannually and if there is a positive parallel shift in the yield curve of 25 basis points, which of the following answers best estimates the resulting change in the value of Jane\u2019s portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "948"
    },
    "949": {
        "tables": [],
        "question": "XYZ Inc. released a five-year floating-rate note (FRN) that provides a quarterly coupon of three-month market reference rate (MRR) plus 125 bps. The FRN is valued at 96 for every 100 of par value. Given a 30/360-day count convention, evenly arranged periods, and a consistent three-month market reference rate (MRR) of 5%, what is the discount margin for the FRN?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "949"
    },
    "950": {
        "tables": [
            "| Account Name                               | Amount ($ trillions) |\n|--------------------------------------------|---------------------:|\n| GDP                                        |                 18.0 |\n| Wages, salaries, and other labor income    |                  9.0 |\n| Taxes                                      |                  3.5 |\n| Capital consumption allowance              |                  2.3 |\n| Undistributed corporate profits            |                  1.0 |\n| Transfer payments                          |                  1.9 |"
        ],
        "question": "What is the individual earnings (in $ trillions) for a theoretical nation derived from the chosen data in the GDP records?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "950"
    },
    "951": {
        "tables": [],
        "question": "What will be the 2014 stock-based remuneration cost from the stock grant scheme ($ millions) be, given that since 2010, the yearly executive pay included stock options on the corporation's shares. The enterprise launched a restricted stock grant plan for all non-managerial staff who had been with the enterprise for three years or longer on 1st September 2013. The fair market value of the corporation's shares on the grant date was $4.2 million and the staffer has to stay with the corporation for an additional three years for the shares to vest?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "951"
    },
    "952": {
        "tables": [
            "| | |\n|---|---|\n| **ABC LA retirement plan information  2018** | |\n| Current service costs | 320 |\n| Past service costs | 150 |\n| Employer contributions | 1,200 |\n| Benefit obligation at beginning of year | 45,000 |\n| Benefit obligation at end of year | 48,395 |\n| Plan assets at beginning of year | 40,800 |\n| Plan assets at end of year | 44,300 |\n| Actuarial loss | 350 |\n| Actual return on plan assets | 3,100 |\n| Discount rate on plan liabilities | 7.5% |\n| Expected rate of return on plan assets | 8.2% |"
        ],
        "question": "XYZ NY, a home decor purchasing corporation, provides its workers with a defined benefit pension scheme. The data in the subsequent table: The regular pension expense that would be documented in OCI as per IFRS is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "952"
    },
    "953": {
        "tables": [],
        "question": "A bond that Brian purchased has a maturity period of three years with a par value of $1000. The coupon rate is 4% and it pays interest annually. If the required rate of return on the bond is 3.5%, what would be the bond's price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "953"
    },
    "954": {
        "tables": [],
        "question": "Suppose that the one-year probabilities of default for the bonds rated AAA and BBB are 1% and 4% respectively, and the combined probability of default of these two bonds is 0.07%. What is the correlation of default between these two bonds?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "954"
    },
    "955": {
        "tables": [
            "|  |  |\n|---|---|\n|Exhibit 1. Adidas AG Excerpt from Consolidated Income Statement Year|   |\n|Ending 31 December 2010(\u00a3 in millions)|   |\n|Gross profit|5730|\n|Royalty and commission income|100|\n|Other operating income|110|\n|Other operating expenses|5046|\n|Operating profit|894|\n|Interest income 25| |\n|Interest expense|113|\n|Income before taxes|806|\n|Income taxes|238|\n|Net income|568|\n|Additional Information:| |\n|Depreciation and amortization:  \u00a3249 million| |"
        ],
        "question": "What is the EBITDA interest coverage ratio of Adidas AG as stated in Exhibit 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "955"
    },
    "956": {
        "tables": [
            "| Par Value   | Bond Price | Coupon | Modified Duration | Effective Duration | Convexity |\n|-------------|------------|--------|-------------------|--------------------|-----------|\n| $25million  |     105    |  8%    |     7.9           |     8              |   122     |\n| $25million  |     100    |  7%    |     8.5           |     8.5            |   154     |\n| $20million  |     95     |  5%    |     6.3           |     2              |   87      |\n| $30million  |     87     |  0%    |     10.2          |     10.2           |   32      |"
        ],
        "question": "Given the data in the chart concerning four bonds in an investment collection, what is the portfolio's effective duration?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "956"
    },
    "957": {
        "tables": [],
        "question": "A 2-year zero-coupon bond with a face value of  USD 1,000 is currently valued at USD 952.48. The corporation uses a binomial pricing model with a 1-year time increment for all its valuations. Should interest rates decrease over the forthcoming year, the model predicts the bond's worth to be USD 970, or USD 950 should interest rates increase. Using the risk-neutral probabilities deduced from the model, and assuming the risk-free interest rate is 1% annually, what ought to be the present value of a 1-year European call option on this bond with a exercise price of USD 960?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "957"
    },
    "958": {
        "tables": [
            "| Company M | $(millions) |\n|-----------|-------------|\n| Operating income (EBIT) | 2,000 |\n| Depreciation expense | 750 |\n| Increase in accounts receivable | 1,000 |\n| Increase in inventories | 100 |\n| Increase in accounts payable | 500 |\n| Purchases of PP&E | 600 |\n| Borrowing (repayment) | 400 |\n| Tax rate | 30% |"
        ],
        "question": "Based on the financial report, what is the FCFF for Company N?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "958"
    },
    "959": {
        "tables": [],
        "question": "Recently, a corporation acquired a warehouse and accompanying equipment like shelving and forklifts for a whole sum of \u20ac50 million. This was divided by an evaluator into: Land \u20ac10 million, building structure \u20ac35 million, and accompanying gear \u20ac5 million. For bookkeeping goals, taking into account additional spending like \u20ac2.0 million for enhancements to the building\u2019s roof and windows, \u20ac0.5 million for internal remodeling to suit their requirements (repositioning walls and doors, addition and removal of dividers, and so forth), and \u20ac0.1 million on an orientation and training workshop for employees to familiarize them with the facility, what is the capitalized cost to the building account in millions?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "959"
    },
    "960": {
        "tables": [
            "|    | Today's one-year Libor | Currency pair (Price/Base) | Spot rate today | Projected spot rate in one year |\n|----|------------------------|---------------------------|-----------------|---------------------------------|\n| USD | 0.80% | CAD/USD | 1.0055 | 1.0006 |\n| CAD | 1.71% | EUR/CAD | 0.7218 | 0.7279 |\n| EUR | 2.20% |  |  |  |"
        ],
        "question": "John is contemplating a carry trade between the USD and the Euro. What could be the total USD return on the suggested carry trade, taking into account the spot rates and interest rates?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "960"
    },
    "961": {
        "tables": [
            "| Path | Time 0 | Time 1 | Time 2 |\n|------|--------|--------|--------|\n| 1    | 1.500% | 2.8853%| 2.7183%|\n| 2    | 1.500% | 2.8853%| 1.6487%|\n| 3    | 1.500% | 1.7500%| 1.6487%|\n| 4    | 1.500% | 1.7500%| 1.0000%|"
        ],
        "question": "Bond D is a 3-year annual pay bond that offers a 3% coupon rate. Smith determines the potential interest rate paths for Bond D as shown in the Exhibit below. According to the Exhibit, what is the current value of Bond D's cash flows if we follow Path 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "961"
    },
    "962": {
        "tables": [
            "|  Exhibit 1  | 10 Sample Results of Test Data for Dataset XYZ |\n|-------------|------------------------------------------------|\n| Sentence#   | Actual Sentiment Target p-value               |\n| 1           | 1 0.75                                        |\n| 2           | 0 0.45                                        |\n| 3           | 1 0.64                                        |\n| 4           | 1 0.81                                        |\n| 5           | 0 0.43                                        |\n| 6           | 1 0.78                                        |\n| 7           | 0 0.59                                        |\n| 8           | 1 0.60                                        |\n| 9           | 0 0.67                                        |\n| 10          | 0 0.54                                        |"
        ],
        "question": "Assuming a threshold p-value of 0.65, Smith wants to implement machine learning (ML) models in the company's analytics procedures. Smith applies the ML model on the test data for Dataset XYZ, as described in Exhibit 1, which includes example results from the testing data collection. What is the accuracy metric for the sample test set of Dataset XYZ according to Exhibit 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "962"
    },
    "963": {
        "tables": [
            "| Security | Beginning($) | End($) | Shares |\n|----------|--------------|--------|--------|\n| G        |    15.00     |  17.00 |  500   |\n| H        |    35.00     |  33.00 |  300   |\n| 1        |    37.00     |  40.00 |  200   |"
        ],
        "question": "Recently, an analyst named Benedict from a finance firm collected this data for an equal-weighted index made up of securities G,H,I: What is the return of the index during this time frame?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "963"
    },
    "964": {
        "tables": [],
        "question": "Assuming a product has a unit contribution margin of $12, fixed costs are $12,000, the interest costs amount to $3,000, and the tax rate is 40%, what would be the operating breakeven point (in units)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "964"
    },
    "965": {
        "tables": [
            "| Security | Expected Standard Deviation(%) | Beta |\n| --- | --- | --- |\n| Security 1 | 30 | 1.60 |\n| Security 2 | 20 | 1.70 |\n| Security 3 | 25 | 1.90 |"
        ],
        "question": "According to the capital asset pricing model, can you compute the market risk premium for the market using the provided details? The expected return for Security B is 15.9% and the risk-free rate stands at 4%.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "965"
    },
    "966": {
        "tables": [
            "| Neutral  real policy rate at trend growth and target inflation | 1.2% |\n| --- | --- |\n| Target inflation rate | 0.5% |\n| Expected inflation rate | 1.0% |\n| Trend real GDP growth rate | 1.0% |\n| Expected real GDP growth rate | 2.0% |"
        ],
        "question": "In order to predict the return expectations for Swedish bonds, Oliver chooses to figure out the target nominal policy rate of Sweden by implementing the Taylor rule with the data shown in Exhibit 1. What's the calculated target nominal policy rate for Sweden using the Taylor rule?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "966"
    },
    "967": {
        "tables": [
            "|                                          | ($ thousands) |\n|------------------------------------------|-------------:|\n| Book value of Great Lakes                |      3,256.00|\n| Fair value of Suburban's investment in Great Lakes |         940|\n| Carrying value of Suburban's investment in Great Lakes | 1,264.51|"
        ],
        "question": "Based on Thompson's assessment of Metro's assets in Great Lakes as outlined in Exhibit 3 at the conclusion of 2013, even with government assistance, he thought that the automotive sector was unlikely to make a full recovery. This, coupled with Great Lakes' dependence on the automotive industry, would cause Metro, a company known for acquiring local news organizations across the nation under US GAAP, to possibly consider the investment impaired. According to Thompson's viewpoint concerning the probable impairment of the investment in Great Lakes Free Press as presented in Exhibit 3, what is the impairment loss in thousands as of the end of 2013?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "967"
    },
    "968": {
        "tables": [
            "|Maturity   | Par Rate | Spot rate |\n|-----------|----------|---------- |\n|One-Year   |   2.50%  |   2.50%   |\n|Two-Year   |   2.99%  |   3.00%   |\n|Three-Year |   3.48%  |   3.50%   |\n|Four-Year  |   3.95%  |   4.00%   |\n|Five-Year  |   4.37%  |           |"
        ],
        "question": "Based on the data provided in Display 1 about the present par and spot rates of annual-coupon sovereign bonds, what is the forward rate for a loan for one year that starts in three years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "968"
    },
    "969": {
        "tables": [],
        "question": "A zero-coupon bond with a maturity term of one year has a yield of 4.0%. The yield on zero-coupon bonds with a maturity of two and three years are 5.0% and 6.0% respectively. The forward price of a zero-coupon bond with a two-year term that begins in three years is established at 0.8479. What's the current price of a zero-coupon bond that matures in five years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "969"
    },
    "970": {
        "tables": [
            "| Years Ended 31 December | 2007 | 2008 |\n| --- | --- | --- |\n| Assets |  |  |\n| Current assets |  |  |\n| Cash and equivalents | $210 | $248 |\n| Accounts receivable | 474 | 513 |\n| Inventory | 520 | 564 |\n| Total current assets | 1,204 | 1,325 |\n| Gross fixed assets | 2,501 | 2,850 |\n| Accumulated depreciation | (604) | (784) |\n| Net fixed assets | 1,897 | 2,066 |\n| Total assets | $3,101 | $3,391 |",
            "| Years Ended 31  December | 2007  | 2008  |\n|--------------------------|-------|-------|\n| Liabilities and shareholders' equity | | |\n| Current liabilities | | |\n| Accounts payable        | $295  | $317  |\n| Notes payable           | 300   | 310   |\n| Accrued taxes and expenses| 76   | 99    |\n| Total current liabilities| 671   | 726   |\n| Long-term debt          | 1,010 | 1,050 |\n| Common stock            | 50    | 50    |\n| Additional paid-in capital| 300  | 300   |\n| Retained earnings       | 1,070 | 1,265 |\n| Total shareholders' equity| 1,420 | 1,615 |\n| Total liabilities and shareholders' equity | $3,101 | $3,391 |",
            "| Statement of Income<br>In Millions, except Per-Share Data | 31 December 2008 |\n|----------------------------------------------------------|-----------------|\n| Total revenues                                           | $2,215           |\n| Operating costs and expenses                             | 1,430           |\n| EBITDA                                                   | 785             |\n| Depreciation                                             | 180             |\n| EBIT                                                     | 605             |\n| Interest expense                                         | 130             |\n| Income before tax                                        | 475             |\n| Taxes (at 40 percent)                                    | 190             |\n| Net income                                               | 285             |\n| Dividends                                                | 90              |\n| Addition to retained earnings                            | 195             |",
            "| Statement of Cash Flows In Millions | 31 December 2008 |\n|---|---|\n| Operating activities |   |\n| Net income | $285 |\n| Adjustments |   |\n| Depreciation | 180 |\n| Changes in working capital |   |\n| Accounts receivable | (39) |\n| Inventories | (44) |\n| Accounts payable | 22 |\n| Accrued taxes and expenses | 23 |\n| Cash provided by operating activities | $427 |\n| Investing activities |   |\n| Purchases of fixed assets | $349 |\n| Cash used for investing activities | $349 |\n| Financing activities |   |\n| Notes payable | $(10) |\n| Long-term financing issuances | (40) |\n| Common stock dividends | 90 |\n| Cash used for financing activities | $40 |\n| Cash and equivalents increase (decrease) | 38 |\n| Cash and equivalents at beginning of year | 210 |\n| Cash and equivalents at end of year | $248 |\n| Supplemental cash flow disclosures |   |\n| Interest paid | $130 |\n| Income taxes paid | $190 |"
        ],
        "question": "What is the difference between FCFF and FCFE as per the financial statements provided by the organization?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "970"
    },
    "971": {
        "tables": [],
        "question": "Did Sesame Corp, which complies with IFRS, charge which amount to inventory expense (\u20ac millions) after it acquired inventory worth \u20ac100 million and allocated \u20ac5 million for storage before selling the items?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "971"
    },
    "972": {
        "tables": [
            "|                       | 2015 | 2016  | 2017 | 2018(E) |\n|-----------------------|------|-------|------|---------|\n| Earnings per share    | 5.56 | 6.23  | 4.72 | 6.5     |\n| Return on equity (ROE)| 11%  | 12.32%| 9.25%| 12.5%   |"
        ],
        "question": "As a junior analyst at a modest investment firm, Jacob was tasked with assessing the value of a food service company known as SpeedyEats, based out of Shanghai. The company's stock price on the 20th of January 2018 stood at $35. Jacob collected data and made projections on the company as illustrated below. Based on the provided data, what is the trailing P/E of the company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "972"
    },
    "973": {
        "tables": [],
        "question": "Think about a call option that is trading at $4 where the strike price is $50. What would be the final value and the earnings for the vendor if the price of the underlying asset at expiration is $49?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "973"
    },
    "974": {
        "tables": [
            "| Current share price | 20 |\n|---------------------|----|\n| Book value per share | 15 |\n| Total shares outstanding | 25 millions |\n| Market value of debt | 60 millions |\n| Accounting book value of total capital | 400 millions |"
        ],
        "question": "What is the market value added of the theoretical company, according to the data in the table below?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "974"
    },
    "975": {
        "tables": [
            "|                               |     | 2018 |     | 2017 |\n|-------------------------------|-----|------|-----|------|\n| Assets                           |     |      |     |      |\n| Current assets                   |     |      |     |      |\n| Accounts receivable              |     | 800  |     | 750  |\n| Inventories                      |     | 850  |     | 720  |\n| Gross fixed assets               |     | 5000 |     | 4250 |\n| Accounts payable                 |     | $ 400  |     | $300 |\n| Accrued taxes and expenses       |     | 120  |     | 90   |\n| Notes payable                    |     | 550  |     | 500  |\n| Long-term debt                   |     | 1,500 |     | 1,400 |\n| Income Statement for the Year Ended 31 December 2018 |     |      |     |      |\n| EBITDA                           |     |      |     | 2000 |\n| Depreciation expense             |     |      |     | 400  |\n| EBIT                             |     |      |     | 1600 |\n| Interest expense                 |     |      |     | 350  |\n| Pretax income                    |     |      |     | 1250 |\n| Income tax (at 30 percent)       |     |      |     | 375  |\n| Net income                       |     |      |     | $ 875  |"
        ],
        "question": "What is the evaluation of PZ Inc.'s 2018 FCFF (in millions) according to the 2017 and 2018 financial statements provided by the company, as assessed by Jacques?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "975"
    },
    "976": {
        "tables": [],
        "question": "Gemini is planning to buy a two-year Treasury note futures contract. The base 1.2%, semi-annual two-year Treasury note is listed at a clean price of 103. It's been 60 days since the last coupon payment. Gemini is aiming to determine the total spot price of the base two-year Treasury note:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "976"
    },
    "977": {
        "tables": [],
        "question": "What is the Equivalent YTM if the buying price of a 30-day Treasury Bill is 99.5?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "977"
    },
    "978": {
        "tables": [],
        "question": "If the interest rates are 10% and they surge by 25 basis points, how much will the bond portfolio value diminish by, given that these are the current specifications: Portfolio X has 8 bonds under a long position, a price of $90,000, and a modified duration of 2.5, Portfolio Y is worth $110,000 and holds a short position in 6 bonds with a modified duration of 3, and Portfolio Z's details are a $120,000 price, a modified duration of 3.3, and a long position in 12 bonds?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "978"
    },
    "979": {
        "tables": [
            "|                          |      |\n|--------------------------|------|\n| weight of asset A        | 30%  |\n| weight of asset B        | 70%  |\n| standard deviation of asset A | 10%  |\n| standard deviation of asset B  | 15%  |\n| correlation coefficient  | -0.7 |"
        ],
        "question": "Compute the standard deviation of the portfolio as per the data presented in the below table:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "979"
    },
    "980": {
        "tables": [
            "|       Factor      | Market |  Size  | Value | Momentum |\n|:-----------------:|:------:|:------:|:-----:|:--------:|\n|    Coefficient    |  1.080 |  0.098 | -0.401|  0.034   |\n| Variance of the market factor return and covariances with the market factor return | 0.00109 | 0.00053 | 0.00022 | -0.00025 |\n| Portfolio's monthly standard deviation of returns | | | | 3.74% |"
        ],
        "question": "Referring to Exhibit 1, what percentage of the total portfolio risk is accounted for by the market factor in the current portfolio of Fund 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "980"
    },
    "981": {
        "tables": [],
        "question": "If a luxury vehicle, bought for \u00a3200,000, is financed for a duration of five years with an annual interest rate of 6% compounded monthly with the initial payment due in a month, how much is the monthly payment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "981"
    },
    "982": {
        "tables": [],
        "question": "If a bondholder has a bond with a 9% coupon rate that pays interest biannually and matures in three years and they are thinking about selling it. If the necessary return rate on the bond is 11%, what is the bond's cost per 100 of nominal value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "982"
    },
    "983": {
        "tables": [
            "|           | Hedge Fund | Market Index |\n|-----------|------------|--------------|\n| Hedge Fund   | 256        | 110          |\n| Market Index | 110        | 81           |"
        ],
        "question": "What is the association between the returns of the hedge fund and the market index as per the covariance matrix of returns constructed by a researcher?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "983"
    },
    "984": {
        "tables": [
            "|     |     |     |     |\n|-----|-----|-----|-----|\n|**Return in 2006-2017(%)**||||\n| 2006 | 1.48 | 2012 | -8.19|\n| 2007 | -1.59| 2013 | -4.11|\n| 2008 | 8.47 | 2014 | 0.33 |\n| 2009 | -1.55| 2015 | 5.84 |\n| 2010 | -2.69| 2016 | 2.04 |\n| 2011 | -1.89| 2017 | 3.72 |"
        ],
        "question": "If John invests in a fund and the annual returns range between 1.03% \u2264 x <4.77%, what will be the cumulative relative frequency?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "984"
    },
    "985": {
        "tables": [],
        "question": "Grand Rapids Titanium Corp (GRTC) sustains an 80 percent dividend payout ratio due to its restricted growth possibilities. The company's return on equity stands at 15 percent. The obligatory return rate on GRTC's equity is 12 percent, while its anticipated long-term growth rate is 3 percent. Can you determine the justified P/B using the projected fundamentals, in accordance with the residual income model and under the assumption of a constant growth rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "985"
    },
    "986": {
        "tables": [],
        "question": "In the latest financial year, Farrow Inc. had average days of sales outstanding of 19 days. Farrow is aiming to enhance its credit policies and collection methodologies and reduce its collection phase in the forthcoming financial year to align with the market average of 15 days. The credit sales in the latest fiscal year were $300 million, and they are estimated to rise to $390 million in the next fiscal year. What should be the alteration in the average accounts receivable balance to accomplish Farrow's objective of decreasing the collection period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "986"
    },
    "987": {
        "tables": [],
        "question": "In a set of mortgages, 50% are deemed as subprime. The principal balance of 50% of these subprime mortgages and 25% of the non-subprime mortgages are higher than the value of the property used as collateral. If you randomly pick a mortgage from this set for inspection and its principal balance is more than the value of the collateral, what is the likelihood that it is a subprime mortgage?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "987"
    },
    "988": {
        "tables": [
            "| Time Period | Forward Rate |\n|-------------|--------------|\n| 0y1y        | 0.80%        |\n| 1y1y        | 1.12%        |\n| Z           | 3.94%        |\n| 3y1y        | 3.28%        |\n| 4y1y        | 3.14%        |"
        ],
        "question": "What is the value per 100 of par value for a two-year, 3.5% coupon bond, where interest payments are disbursed once a year, considering all rates mentioned are annual rates with a periodicity of one (effective annual rates)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "988"
    },
    "989": {
        "tables": [
            "|  X  | Y=5 | Y=2 | Y=-3 |\n| --- | --- | --- | ---- |\n| -2  | 0.2 | 0   | 0    |\n|  1  | 0   | 0.6 | 0    |\n|  4  | 0   | 0   | 0.2  |"
        ],
        "question": "Based on the provided data chart, what is the standard deviation of X?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "989"
    },
    "990": {
        "tables": [
            "| Profit | Cumulative  Distribution  Function |\n|--------|-----------------------------------|\n| $0     | 0.2                               |\n| $1     | 0.4                               |\n| $2     | 0.6                               |\n| $3     | 0.8                               |\n| $4     | 1.0                               |"
        ],
        "question": "What is the chance of a profit between $1 and $4, as depicted by the following table displaying the discrete uniform probability distribution of gross profits from buying an option?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "990"
    },
    "991": {
        "tables": [
            "| ($ millions)          | 2017 | 2018 |\n|-----------------------|------|------|\n| Revenue               | 42   | 37   |\n| Cost of goods sold    | 18   | 16   |\n| Inventory             | 36   | 40   |\n| Accounts receivable   | 22   | 19   |\n| Accounts payable      | 14   | 12   |"
        ],
        "question": "In the year 2018, a firm that utilized US GAAP did cash disbursements of $6 million for employee wages, $2 million for interest liabilities, and $4 million for income tax obligations. Based solely on the data provided in the chart, what is the firm's cash flow from operations for 2018?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "991"
    },
    "992": {
        "tables": [],
        "question": "Given that the cost per unit for savings account services is 0.5%, the anticipated overhead costs assigned to these services is 1.2%, the targeted profit margin per unit sold is 0.3%, the variable cost rate is 1.2%, and the mean interest rate is 4.5%, what would be the savings rate as per the Cost Plus Profit Margin method of pricing Savings-related Services?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "992"
    },
    "993": {
        "tables": [],
        "question": "If a client wishes to purchase a ball from a store that has 200 balls, three of which are of the same size, what is the likelihood that one of the three balls will be chosen?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "993"
    },
    "994": {
        "tables": [],
        "question": "Imagine the present 1-year rate for zero-coupon bonds stays at 6%, and the coming 1-year will fall by 2%. What would be the 2-year spot rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "994"
    },
    "995": {
        "tables": [
            "| Current spot rate for the USD/EUR | 0.7500 |\n| --- | --- |\n| Forward rate for the EUR/AUD | 1.4300 |\n| EUR/AUD forward premium to the spot rate | 400 points |\n| USD: US dollar; EUR: Euro; AUD: Australian dollar | |"
        ],
        "question": "Given the same circumstances, what is the USD/AUD spot rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "995"
    },
    "996": {
        "tables": [],
        "question": "If a bond's current price is $101.45 and a financial advisor anticipates that the price will increase to $103.28 if interest rates drop by 0.25% or decrease to $100.81 if interest rates go up by 0.25%, what is the bond's effective duration?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "996"
    },
    "997": {
        "tables": [
            "|                       |        |\n| --------------------- | ------ |\n| Net income $          | 100,000|\n| Increase in accounts receivable | 12,000 |\n| Increase in accounts payable | 9,000   |\n| Depreciation and amortization   | 8,000   |"
        ],
        "question": "What is the operational cash flow, taking into account the chosen data from the business's activities?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "997"
    },
    "998": {
        "tables": [
            "|                           |         |\n|---------------------------|---------|\n| Forecasted Balance Sheet Data for LI at 31 December 2018    |         |\n| Cash                      | 120     |\n| Accounts receivable       | 30      |\n| Inventory                 | 450     |\n| Fixed assets              | 800     |\n| Total assets              | 1,400   |\n| Liabilities               | 320     |\n| Common stock              | 780     |\n| Retained earnings         | 300     |",
            "|                            | Exchange rates ($/\u20ac) |\n|----------------------------|----------------------|\n| when fixed assets were acquired | 1.55                 |\n| 31 December 2018           | 1.77                 |\n| 2018 average               | 1.68                 |"
        ],
        "question": "The XY corporation is an American business that follows US GAAP. It also owns two European subsidiary companies: FS financial service and FC financial consultant. John, a CFA, has compiled a forecast of XY's 2018 financial statement. If XY chooses the current rate method to convert the data of FS into US dollars and the temporal method for converting the data of FC into US dollars, what will the total assets be on 31 December 2018 when XY translates FS's results into US dollars?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "998"
    },
    "999": {
        "tables": [
            "|                         | Delite Beverage |\n|------------------------ |-----------------|\n| 2010 Earnings per share (EPS) | $3.44         |\n| 2011 estimated EPS      | $3.50          |\n| Book value per share end of year | $62.05    |\n| Current share price     | $65.50         |\n| Sales (billions)        | $32.13         |\n| Free cash flow per share| $2.68          |\n| Shares outstanding end of year | 2,322,034,000 |"
        ],
        "question": "Basing on the information provided in Exhibit 1, what would be the most suitable price-to-earnings ratio to apply in the assessment of value for the soft drink manufacturing and distribution company, Delite Beverage, especially considering their recent acquisition of a large water bottling firm?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "999"
    },
    "1000": {
        "tables": [],
        "question": "The following data is provided for the returns on shares X and shares Y: the return variance for shares X is 100; the return variance for shares Y is 225, and the covariance between the returns on shares X and Y is 53.2. At the conclusion of 1999, you have USD 4 million in shares X. It's under consideration to move USD 1 million to shares Y while preserving USD 3 million in shares X. What is the risk reduction percentage, denoted by return standard deviation, that can be achieved with this strategy?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "1000"
    },
    "1001": {
        "tables": [
            "| X     | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    |\n|-------|------|------|------|------|------|------|------|------|\n| P(X)  | 0.14 | 0.09 | 0.19 | 0.25 | 0.17 | 0.06 | 0.03 | 0.07 |"
        ],
        "question": "Based on the provided table, what is the value of F(4)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1001"
    },
    "1002": {
        "tables": [],
        "question": "A bond was purchased by Robert with a remaining maturity of two years. The face value of the bond is 1000. The annual interest rate is 4% and the interest is paid once a year. The current market discount rate is 4.5%. What is the cost of the bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1002"
    },
    "1003": {
        "tables": [],
        "question": "In order to make use of the cash position of assets under management, an investment strategist decides to engage in a long futures position on the S&P 500 index with a multiplier of 250. The cash position stands at $15 million and given the existing futures value of 1,000, requires the strategist to hold 60 contracts long. Given that the present initial margin is $12,500 per contract and the maintenance margin stands at $10,000 per contract, what amount of variation margin is required by the investment strategist if the value of the futures contract drops to 995 on the closing day of the position being initiated?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1003"
    },
    "1004": {
        "tables": [
            "| Return, R     | Frequency |\n| ------------- |:---------:|\n| -5% up to 0%  | 1         |\n| 0% up to 5%   | 6         |\n| 5% up to 10%  | 4         |\n| 10% up to 15% | 3         |"
        ],
        "question": "Based on the provided frequency distribution table, can you compute the sample size?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1004"
    },
    "1005": {
        "tables": [],
        "question": "If we aim to incorporate seasons such as spring, summer, autumn, and winter as independent variables, how many dummy variables are required to construct a regression model?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1005"
    },
    "1006": {
        "tables": [],
        "question": "John is interested in purchasing a 2-year bond with an annual coupon rate of 5%. The spot rates are listed as 4% for one year and 4.5% for two years. What is the cost of the bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1006"
    },
    "1007": {
        "tables": [
            "| Days to maturity | RMB Spot Interest Rates | USD Spot Interest Rates |\n|-----------------|------------------------|------------------------|\n| 90              | 1%                     | 0.4%                   |\n| 180             | 1.5%                   | 0.6%                   |\n| 270             | 2.0%                   | 0.8%                   |\n| 360             | 2.5%                   | 1.0%                   |"
        ],
        "question": "An executive initiates a one-year currency swap which involves receiving RMB fixed and paying USD fixed. She utilizes the following data to determine the annualized fixed swap rate for USD: The annualized fixed swap rate for USD is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1007"
    },
    "1008": {
        "tables": [
            "| Asset Class     | Geometric Return (%) |\n|-----------------|----------------------|\n| Equities        | 8.0                  |\n| Corporate Bonds | 6.5                  |\n| Treasury bills  | 2.5                  |\n| Inflation       | 2.1                  |"
        ],
        "question": "What is the risk premium for business bonds a researcher notes in the following historic geometric returns?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1008"
    },
    "1009": {
        "tables": [],
        "question": "What is the bond-equivalent yield if the yield-to-maturity on a yearly-pay bond is 7.75%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1009"
    },
    "1010": {
        "tables": [
            "|                                             |      |                                        |      |\n|---------------------------------------------|------|----------------------------------------|------|\n| **Exhibit 1 U.S.  Macroeconomic  Data**        |      |                                        |      |\n| Growth in real consumer spending           | 3.1% | Yield on  10-yr. U.S. Treasury bonds   | 2.7% |\n| Growth in potential labor force            | 1.9% | Growth in real investment spending     | 3.1% |\n| Growth in labor force participation        | -0.3%| Growth in total factor productivity    | 0.5% |\n| Growth in labor productivity               | 1.4% | Change in trade deficit                | -0.5%|"
        ],
        "question": "After the financial crises starting in 2008, the squad deliberates on the potential long-term growth trajectory for the U.S. GDP in the wake of external shocks. Reports from several external sources are scrutinized and an agreed perception of the next decade's annual growth projections for the objects in Exhibit 1 is formed. Using the data from Exhibit 1 and adopting the simplest method to review the total trend growth for the U.S. GDP, the most probable projection for the GDP annual growth over the next decade (in %) would be:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1010"
    },
    "1011": {
        "tables": [],
        "question": "The likelihood of Occurrence X is 40%. The likelihood of Occurrence Y is 60%. The combined likelihood of XY is 40%. What is the likelihood (P) that X or Y happens, or both happen?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1011"
    },
    "1012": {
        "tables": [],
        "question": "What should the coupon rate be for the interest payment made on December 15 if Beta Co. issued a five-year semi-annual floating rate bond where the coupon rate is the six-month MRR plus 100 bps, with interest payments made every 15 June and 15 December, and which has a six-month MRR of 3% on June 15 and 3.2% on December 15?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1012"
    },
    "1013": {
        "tables": [
            "| Trades | Execution Price | Shares Executed |\n|--------|-----------------|-----------------|\n| Trade 1 | $40.75 | 10,000 |\n| Trade 2 | $41.25 | 30,000 |\n| Trade 3 | $41.50 | 20,000 |\n| Trade 4 | $41.75 | 30,000 |\n| Total | | 90,000 |"
        ],
        "question": "On the following day, Thompson asks Green to go over their study on ABC Corp again. Green's study leads her to think that its stocks are underpriced. She gives her study findings to Thompson, and at 10 o'clock in the morning, he tells her to buy 120,000 shares at a price of $40.00 each using a limit order of $42.00. When the price is $40.50, the buy-side trader submits the order for market execution. The only cost involved is a share commission of $0.02. By the day's end, 90,000 shares of the order have been acquired, and ABC Corp concludes at $42.50. The trade was completed at an estimate price of $41.42. Exhibit 1 gives additional details about the completed trades. The arrival cost for buying the 90,000 shares of ABC Corp is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1013"
    },
    "1014": {
        "tables": [],
        "question": "If we consider that the yearly continuously compounded spot rates are: Z1=5%, Z2=5.1%, Z3=5.2%, and a 1.5-year bond has a face value of $100 and a 6% semiannual coupon payment, how would you compute the bond price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1014"
    },
    "1015": {
        "tables": [],
        "question": "A two-year outstanding US Treasury bond has a yield of 3.5%. The swap spread for a 2-year interest rate swap is said to be 80 bps. What does the fixed payer in a two-year interest rate swap have to pay?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1015"
    },
    "1016": {
        "tables": [],
        "question": "If the necessary rate of return is 4%, what is the intrinsic worth per share of a standing issue of 5% never-ending preferred stock with a face value of 100 and zero incorporated options?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1016"
    },
    "1017": {
        "tables": [
            "| 10 | 20 | -8 | 2 | -9 | 5 | 0 | -8 | 3 | 21 |"
        ],
        "question": "The following set of 10 elements is chosen from a group. The variance of the group is unclear. What is the standard error of the average of the sample?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1017"
    },
    "1018": {
        "tables": [
            "| Security | Beginning of Period Price(E) | End of Period Price(E) | Total Dividends(E) |\n|----------|------------------------------|------------------------|---------------------|\n| Able     | 10.00                        | 12.00                  | 0.75                |\n| Baker    | 20.00                        | 19.00                  | 1.00                |\n| Charlie  | 30.00                        | 30.00                  | 2.00                |"
        ],
        "question": "A researcher collects the following data for an equal-weighted index made up of assets X, Y, and Z: What is the price return of the index?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1018"
    },
    "1019": {
        "tables": [],
        "question": "John has determined that the DDM model is suitable to evaluate Corporation X. With the present dividend and the necessary rate of return of $0.5 per share and 10% respectively. He anticipates that the dividend will rise at 20% per annum for the first three years and then ascend at 5% annually into the unforeseeable future. What's the present value of Corporation X shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1019"
    },
    "1020": {
        "tables": [],
        "question": "Sam, a market analyst at an investment bank, is conducting research on companies operating in the housing market sector. The leading company in this sector, named LoveYourHome, has recently released its annual financial report, revealing a basic EPS of $56, and a diluted EPS of $52. After examining the footnotes in LoveYourHome's financial report, Sam identifies a nonrecurring profit of $2 per share and a one-time restructuring cost of $3 per share, stemming from an acquisition in the previous year. Utilising a top-down analysis approach, Sam projects that LoveYourHome's basic EPS will rise to 76 in the upcoming year. The company's current share price is $72. Sam is keen to assess the relative worth within the housing sector using the trailing P/E ratio. Given the information provided, what is LoveYourHome's trailing Price/Earnings (P/E) ratio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1020"
    },
    "1021": {
        "tables": [
            "| Component | Cost      | Useful Life |\n|-----------|-----------|-------------|\n| A         | $500,000  | 10 years    |\n| B         | $500,000  | 5 years     |"
        ],
        "question": "A business aiming to increase profits expended $1,000,000 on equipment with two crucial parts, as shown in the table. The equipment is projected to be functional for a total of 10 years, and the business applies the straight-line depreciation approach.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1021"
    },
    "1022": {
        "tables": [],
        "question": "A financier bought an annuity quite some time ago and is projected to get $1,200 annually for the following 40 years from this annuity. If the anticipated interest rate is 7%, what is the current worth of the cashflows the financier is set to receive?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1022"
    },
    "1023": {
        "tables": [
            "| Revenue | $ 500,000 |\n|---|---|\n| Volume Discounts | $ 20,000 |\n| Cash Received | $ 450,000 |\n| Cost of Goods Sold | $ 300,000 |"
        ],
        "question": "Under the accrual basis of accounting, what is the net revenue equivalent to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1023"
    },
    "1024": {
        "tables": [
            "| Compensation of employees | 1,044,005 |\n|---------------------------|-----------|\n| Gross operating surplus | 518,979 |\n| Gross mixed income | 241,415 |\n| Net mixed income | 180,653 |\n| taxes less subsidies on production | 90,507 |\n| taxes less subsidies on products and imports | 139,443 |\n| Statistical discrepancy | 1,157 |\n| Net property income | 136,011 |"
        ],
        "question": "Compute GDP using the income approach based on the information in the given table",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1024"
    },
    "1025": {
        "tables": [],
        "question": "The fee structure of Cedar Ridge Associates, a fund of hedge funds, is as follows: 2/20 underlying fund fees with independently calculated incentive fees, Cedar Ridge's fees are calculated net of all underlying fund fees, a 1% management fee (based on year-end market value), a 10% incentive fee calculated net of the management fee, and there are no hurdle rate or high-water mark fee conditions for the fund and all underlying funds. In the most recent year, Cedar Ridge\u2019s fund value increased from $100 million to $133 million before any deductions for the fund's management and incentive fees or any underlying funds. Given this information, what is the cumulative fee earned by all the funds?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1025"
    },
    "1026": {
        "tables": [],
        "question": "What is the monthly mortgage payment for a level-payment, fixed-rate mortgage with these features: term is 30 years, mortgage rate is 9.0%, servicing fee is 0.5%, and the initial mortgage loan balance is $150,000?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1026"
    },
    "1027": {
        "tables": [],
        "question": "If a bond with a face value of $100 has a 15-year term, an annual payment rate of 10%, and a YTM of 12%, what is its cost?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1027"
    },
    "1028": {
        "tables": [],
        "question": "In 2017, the revenue for Fortune Enterprise was $5000, with a cost of goods sold standing at $900 and depreciation at $700. Given that the firm has an interest coverage ratio that's three times larger, what were its interest expenses in 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1028"
    },
    "1029": {
        "tables": [
            "|                    | Income Statement |         | Balance Sheet Changes |      |\n|--------------------|-----------------:|---------|-----------------------|-----:|\n| Revenue            |         $ 56,800 | Decrease in accounts receivable | $1,324 |\n|                    |                  |         |                       |       |\n| Cost of goods sold |           27,264 | Decrease in inventory          |   501 |\n| Other operating expense           |   562 | Increase in prepaid expense   |     6 |\n| Depreciation expense          |  2,500 | Increase in accounts payable   | 1,063 |"
        ],
        "question": "The subsequent data is derived from the financial statements of Sugarfall Corporation. How much cash did Sugarfall Corp. pay to its suppliers?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1029"
    },
    "1030": {
        "tables": [],
        "question": "Assume that the earnings from a merger arbitrage operation conducted by XYZ Corporation results in $5 million if it's successful, but \u2014$20 million if it isn't. If the likelihood of success is 83%, what would be the expected payoff on this operation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1030"
    },
    "1031": {
        "tables": [],
        "question": "As a portfolio manager, Martin is thinking about including a 2-year bond with a 7% coupon rate and a par value of 100 in his investment portfolio. The bond's interest is paid yearly. Given the current 1-year and 2-year spot rates of 4% and 5% respectively, what is the bond's value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1031"
    },
    "1032": {
        "tables": [
            "|                       | 40 | 35 | 30 | 25 | 20 |\n|-----------------------|----|----|----|----|----|\n| 3-month call option price | 0.56 | 1.45 | 4.05 | 10.30 | 12.42 |\n| 3-month put option price | 9.56 | 5.20 | 2.78 | 1.56 | 0.72 |"
        ],
        "question": "According to the Exhibit 1 Option Contract Pricing Details, what is the break-even price for an at-the-money (ATM) protective put strategy for Dropqik Corporation, where Justine Fisher, a client of Erica Taylor, holds a significant position and which is currently trading at $30.50 per share?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1032"
    },
    "1033": {
        "tables": [],
        "question": "In a living community, the landlords want to choose 3 out of 5 tenants to form a new landlords committee. How many possible scenarios can happen?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1033"
    },
    "1034": {
        "tables": [],
        "question": "If a bond's current value is $101.45, and the director predicts an increase to $103.28 should interest rates drop 0.25%, or a decrease to $100.81 should interest rates rise 0.25%, what is the bond's effective duration?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1034"
    },
    "1035": {
        "tables": [
            "| Quantity (unit) | Total Fixed Cost ($) | Total Variable Cost ($) |\n| --- | --- | --- |\n| 0 | 400 | 0 |\n| 1 | 400 | 100 |\n| 2 | 400 | 190 |\n| 3 | 400 | 275 |\n| 4 | 400 | 360 |"
        ],
        "question": "If a manufacturing company examines its cost structure, and the detailed data is provided in the accompanying table, what is the marginal cost if the production units are elevated from 3 to 4?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1035"
    },
    "1036": {
        "tables": [
            "|   |   |\n|---|---|\n| FCFE0  | $10 million  |\n| Growth rate of FCFE  | 2%  |\n| Risk free rate | 2.5%  |\n| Equity Risk Premium  | 4%  |\n| Size Premium  | 1.5%  |\n| Market value of debt | $4 million |"
        ],
        "question": "Using the provided data, determine the equity value using the CCM.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1036"
    },
    "1037": {
        "tables": [],
        "question": "A yearly coupon bond with a yield-to-maturity rate of 7% has a price tag of 94.75 per 100 of par value, with a coupon rate standing at 5%. There are 3 years left until it matures. What is the Macaulay duration of this bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1037"
    },
    "1038": {
        "tables": [],
        "question": "What are the odds that the returns from a portfolio with an average return rate of 8% and a standard deviation of 14% will range from 8% to 11%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1038"
    },
    "1039": {
        "tables": [],
        "question": "Let's say the present value (S0) of a stock that does not pay dividends is 100, and a put option for this stock has a strike price (X) of $95 with one year left until expiration. Now, a trader thinks that the share price will either rise by 10% or fall by 20%. Which of the subsequent computations of the worth of a put option is correct, presuming a 4% risk-free rate?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1039"
    },
    "1040": {
        "tables": [
            "|     |     | Coefficient |    | Standard Error | t-Statistic |\n|-----|-----|-------------|----|----------------|-------------|\n|     | Intercept | 0.0092 |    | 0.0087 | 1.0582 |\n|     | In Salest-1-In Salest-2 | -0.1279 |    | 0.1137 | -1.1252 |\n|     | In Salest-4-In Salest-5 | 0.7239 |    | 0.1093 | 6.6209 |\n|     | Most Recent Quarterly Sales Data (in billions) |  |    |  |  |\n|     | Dec 2015 (Salest-1) | $3.868 |    |  |  |\n|     | Sept 2015 (Salest-2) | $3.780 |    |  |  |\n|     | June 2015 (Salest-3) | $3.692 |    |  |  |\n|     | Mar 2015 (Salest-4) | $3.836 |    |  |  |\n|     | Dec 2014 (Salest-5) | $3.418 |    |  |  |"
        ],
        "question": "Based on the regression output shown in the Exhibit, what is the predicted quarterly sales value for March 2016 if John is developing a model to predict future quarterly sales, and he starts by running this regression: ln Salest \u2013 ln Salest\u20131 = b0 + b1(ln Salest\u20131 \u2013 ln Salest\u20132) + b2(ln Salest\u20134 \u2013 ln Salest\u20135)+\u03b5t?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1040"
    },
    "1041": {
        "tables": [],
        "question": "In 2009, Pinnacle Parcel sold items online on behalf of individuals under a consignment deal. Pinnacle would receive the goods from the owner, list them for online sale, and earn a 25 percent commission from any sold items. Pinnacle was responsible for collecting the full payment from the purchaser and would then pay the owner the remaining balance after deducting their commissions. If the items did not sell within 90 days, they would be returned to the owner. Throughout 2009, Pinnacle had the following records: The total sales price of items sold on consignment was \u20ac2,000,000. Pinnacle's commission on these items was \u20ac500,000 during 2009. What should Pinnacle declare as revenue in its 2009 income statement?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1041"
    },
    "1042": {
        "tables": [],
        "question": "A valuer has been tasked with calculating the aggregated valuation discounts for a minor shareholding in a privately held firm. The valuer decided that a suitable control premium is 15 percent. A deduction due to the absence of marketability was approximated at 25 percent. In light of these parameters, what is the total discount?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1042"
    },
    "1043": {
        "tables": [],
        "question": "From the given data, what will be the other comprehensive income considering, foreign currency conversion benefits amounting to 4, unrealized depreciation on available-for-sale securities sitting at 2, unrealized depreciation on securities held until their maturity estimating 1, and actuarial profits observing 2?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1043"
    },
    "1044": {
        "tables": [],
        "question": "Utilizing the given data to compute the total return on an equity share: Buying price: $20 Selling price: $28 Dividend received during the holding period: $1",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1044"
    },
    "1045": {
        "tables": [
            "|                                 |     |         |\n|---------------------------------|-----|---------|\n| Rate of return on 3-month Treasury bills  |     | 3.0%    |\n| Rate of return on 10-year Treasury bonds |     | 3.5%    |\n| Market risk premium                      |     | 6.0%    |\n| The company's equity beta               |     | 1.6     |\n| Dividend growth rate                    |     | 8.0%    |\n| Corporate tax rate                      |     | 35%     |"
        ],
        "question": "What is the percentage cost of equity for the organization using the CAPM approach and the collected data?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "1045"
    },
    "1046": {
        "tables": [
            "| Year | The return of this fund(%) |\n| ---- |------------------------ |\n| 2015 | 4.5                    |\n| 2014 | 3                      |\n| 2013 | 16                     |\n| 2012 | 20.1                   |\n| 2011 | -1                     |"
        ],
        "question": "The annual return for a fund purchased by John is illustrated below: What will be the geometric mean of the fund?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1046"
    },
    "1047": {
        "tables": [
            "| Time | Value |\n| --- | --- |\n| Time=0 | SO=80 |\n| Time=1 | Su=88 |\n| Time=1 | Sd=72 |\n| Time=2 | Suu=96.80 |\n| Time=2 | Sud,du=79.20 |\n| Time=2 | Sdd=64.80 |"
        ],
        "question": "Considering a security's anticipated price fluctuation for the next two durations as follows: The starting price of the security is $80. There's a 75% chance of a rise in any given duration and a 25% chance of a decline in any given duration. Employing the binomial model, what are the chances that the security's value will stand at $79.20 after two durations?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1047"
    },
    "1048": {
        "tables": [],
        "question": "An investment firm possesses the subsequent fee structure: 2% Annual management fee dependent on year-end AUM, 20% Incentive fee, and a 4% Hurdle rate prior to starting incentive fee collection. The current high-water mark is at $610 million. The firm's value was $583.1 million at start of the year and reached $642 million before the fees deduction after a year. What would be the net return to an investor for this year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1048"
    },
    "1049": {
        "tables": [],
        "question": "John is an entrepreneur who sells socks in the nearby marketplace. If he sells 100 pairs of socks, he generates an earning of $500. However, if he managed to sell 120 pairs, his overall income would be $590. What is the marginal revenue for socks if the market capacity is 120 pairs?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1049"
    },
    "1050": {
        "tables": [
            "| Year 1 | 15.25% | Year 6 | 30.79% |\n|--------|--------|--------|--------|\n| Year 2 | -10.02% | Year 7 | 12.34% |\n| Year 3 | 20.65% | Year 8 | -5.02% |\n| Year 4 | 9.57% | Year 9 | 16.54% |\n| Year 5 | -40.33% | Year 10 | 27.37% |"
        ],
        "question": "What does the exhibit indicate as the return for the fourth quintile for the MSCI World Index over a span of 10 years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1050"
    },
    "1051": {
        "tables": [
            "| Transaction  Amount | (US$ millions) |\n|---------------------|----------------|\n| Bought raw material from Indonesia | 50.0 |\n| Sold food products to France | 65.0 |\n| Received royalty fees from its branch in the United Kingdom | 0.5 |\n| Donated to a charitable institution in Africa | 0.1 |\n| Borrowed from a bank in Singapore | 2.0 |\n| Paid legal fees to its German legal consultant company | 1.2 |\n| Received interest coupon from its investment in Eurobonds issued in Luxembourg | 0.8 |"
        ],
        "question": "Over the past month, a food corporation based in the US had these transactions: How much is the US current account expected to increase by due to these transactions?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1051"
    },
    "1052": {
        "tables": [
            "| Accounts payable | 3,800 |\n|------------------|-------|\n| Long-term debt | 5,590 |\n| Other long-term liabilities | 800 |\n| Common stock | 1,200 |\n| Retained earnings | 1,810 |"
        ],
        "question": "What is the debt-to-capital ratio of the firm as per the latest balance sheet showcasing the following values (NZ$ thousands)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1052"
    },
    "1053": {
        "tables": [],
        "question": "Assume you simulate the price path of stock ZYX using a geometric Brownian motion model with drift \u03bc = 0, volatility \u03c3 = 0.14, and time step \u0394 = 0.01. Let StS_t St\u200b be the price of the stock at time t. If S0S_0S0\u200b = 100, and the first two simulated (randomly chosen) standard normal variables are \u03b51 \\varepsilon_1 \u03b51\u200b = 0.263 and \u03b52 \\varepsilon_2 \u03b52\u200b= -0.475, what is the simulated stock price after the second step?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1053"
    },
    "1054": {
        "tables": [
            "|                          |                       |\n|--------------------------|-----------------------|\n| Demand curve             | P = 150-5xQ           |\n| Total revenue curve      | TR =150xQ-5xQ2        |\n| Marginal revenue curve   | MR =150-10xQ          |\n| Total cost curve         | TC = Q^3-10xQ^2+73xQ+120 |\n| Average cost curve       | AC = Q-10xQ +73 +120/Q  |\n| Marginal cost curve      | MC=3xQ^2-20xQ+73      |\n|                          | P: price per unit Q: cost per unit    |"
        ],
        "question": "What is the output, in units, that maximizes profit for this organization, based on the developed equations provided for the business?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1054"
    },
    "1055": {
        "tables": [
            "|  X  | Y=5 | Y=2 | Y=-3 |\n|-----|-----|-----|------|\n| -2  | 0.2 |  0  |   0   |\n|  1  |  0  | 0.6 |   0   |\n|  4  |  0  |  0  |  0.2  |"
        ],
        "question": "Based on the provided chart, what is the variance of Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1055"
    },
    "1056": {
        "tables": [
            "| Par Value         | Bond Price | Coupon | Modified Duration | Effective Duration | Convexity |\n|-------------------|------------|--------|-------------------|--------------------|-----------|\n| $25million        | 105        | 8%     | 7.9               | 8                  | 122       |\n| $25million        | 100        | 7%     | 8.5               | 8.5                | 154       |\n| $20million        | 95         | 5%     | 6.3               | 2                  | 87        |\n| $30million        | 87         | 0%     | 10.2              | 10.2               | 32        |"
        ],
        "question": "Referring to the table with pertinent data about four bonds in a portfolio, what is the price fluctuation for the bond with an 8% interest rate using effective duration, if its YTM drops by 10 basis points?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1056"
    },
    "1057": {
        "tables": [],
        "question": "Based on the 2017 annual report data from company B, what is the debt/capital ratio of company B? Given Depreciation and amortization: $265 million, Total assets: $11,324 million, Total debt: $1,756 million, and Shareholders' equity: $5,217 million.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1057"
    },
    "1058": {
        "tables": [],
        "question": "A futures contract for a stock index has two months left until it matures. The annual risk-free rate, when compounded continuously, is 0.25%, while the dividend yield on the stock index, also compounded continuously, is 0.8%. If the index is currently at 1,350, what would be the no-arbitrage futures price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1058"
    },
    "1059": {
        "tables": [
            "|            |                |\n|------------|----------------|\n| Table1: Forward Rates | |\n| Maturity   | Forward Points |\n| Three months | 5.3/6.1        |\n| Six months | 7.8/8.9        |\n| 90-Day Libor | |\n| Currency   | Annualized Rate|\n| GBP        | 0.60%          |\n| USD        | 0.45%          |"
        ],
        "question": "The American company named BBQ Company has exported steel to an English firm and is expected to receive payment of 3,600,000 GBP in six months, which the firm will then convert into dollars. To protect against currency risk, BBQ Company decided to enter into a 6 month forward contract to sell GBP at 1.5512USD/GBP. After three months have passed, now, the spot exchange market rate is 1.5500 USD/GBP for bid and 1.5505 for ask. Given the information on the spot exchange market rate, forward rates, and the 90-Day Libor, what is the mark-to-market value for BBQ Company's forward position?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1059"
    },
    "1060": {
        "tables": [
            "| Account Name                              | Amount ($ billions) |\n| ---------------------------------------- | ------------------- |\n| Personal income                          | 2,456               |\n| Personal disposable income               | 1,930               |\n| Government spending                      | 666                 |\n| Government fixed investment              | 118                 |\n| Business gross fixed investment          | 538                 |\n| Government transfer payments to consumers| 348                 |\n| Total domestic savings                   | 638                 |\n| Tax revenue other than from households   | 440                 |\n| Change in inventories                    | -16                 |"
        ],
        "question": "Chosen data is extracted from the GDP statistics of a fictitious nation. What is the trade shortfall in $ trillions for this nation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1060"
    },
    "1061": {
        "tables": [],
        "question": "The Chief Vice President of XY investment requests John to apply the market approach to assessment prioritizing the guideline transactions methodology. John states that the control premium paid for the most comparable guideline company used for the evaluation implies a lack of control discount of 15 percent. The discount for absence of marketability was assessed at 20 percent. What is the cumulative discount for both control and marketability?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1061"
    },
    "1062": {
        "tables": [],
        "question": "In an economy, there exist two firms, Firm X and Firm Y. The default rate for Firm X stands at 10%, while for Firm Y, it is 20%. Presuming defaults for both firms happen independently, what is the likelihood that either Firm X or Firm Y defaults?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1062"
    },
    "1063": {
        "tables": [
            "| Bond | Coupon Rate | Time-to-Maturity | Spot Rates |\n|------|-------------|------------------|------------|\n| X    | 8%          | 3 years          | 8%         |\n| Y    | 7%          | 3 years          | 9%         |\n| Z    | 6%          | 3 years          | 10%        |"
        ],
        "question": "Given the same sequence of spot rates, what is the cost of Bond X?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1063"
    },
    "1064": {
        "tables": [],
        "question": "The Greenleaf company employs an exponentially weighted moving average model (EWMA) to predict the daily volatility of a stock. With a decay factor of 0.85, the latest estimate for daily volatility sits at 2.5%. If the stock closed at $35 yesterday and stands at $33 today, assuming we use continuously compounded returns, what would be the revised estimate of volatility?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1064"
    },
    "1065": {
        "tables": [
            "\n|                | Coefficient | Standard Error |\n|----------------|-------------|----------------|\n| Intercept      | 0.2248      |                |\n| Sizei          | -0.012      |                |\n| D/Ei           | -0.0172     | 0.00986        |\n|                |             |                |\n| **ANOVA**      | **Degrees of freedom** | **Sum of squares** |\n| Regression     | 2           | 0.0960         |\n| Residual       | 69          | 0.5704         |\n\nNote: Sizei= In (market capitalization)\n"
        ],
        "question": "An analyst with an investment management firm named James Collins is examining the consequences of leverage on yearly ROE in the company's Eurozone equities fund (\"the fund\"). He gathers data on the 72 stocks in the fund, taking company size as an independent variable. The results of estimating the model Ri = b0 + b1(Sizei) + b2(D/Ei) + \u03b5\u03b9 are shown in Exhibit 1. Collins compares the projections of his model to the actual ROE for two portfolio stocks, X and Y, both with identical debt ratios but with market capitalizations of EUR 100 million and 200 million respectively. According to Collins' regression analysis, how much higher is the ROE for company X than for company Y (in percentage points)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1065"
    },
    "1066": {
        "tables": [],
        "question": "Assuming John Smith has short-sold 100 shares of Mega Marts at a rate of $42 for each share and concurrently placed a \"good-till-cancelled, stop 50, limit 55 buy\" order, which would be executed once the stipulated stop condition is met, what is the highest potential loss Smith may incur, ignoring transaction expenses?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1066"
    },
    "1067": {
        "tables": [
            "| Par value of preferred stock offered at a 6% dividend rate | 100  |\n|---------------------------------------------------|------|\n| Company's sustainable growth rate                 | 5%   |\n| Yield on comparable preferred stock issues        | 11.5%|\n| Investor's marginal tax rate                      | 30%  |"
        ],
        "question": "What is the calculated worth of the preferred shares of the corporation, based on the data collected by a shareholder?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1067"
    },
    "1068": {
        "tables": [],
        "question": "The following is the demand function for smartphones: QDmobile=10,000-2Pmobile+0.05income+2Pfixed-linetelephone-5Pwireless. As of now, a smartphone is priced at 3,000 RMB, while a landline and wireless solutions are priced at 1500 RMB and 500 RMB, respectively. With an assumption that income is 10,000 RMB, what would be the respective income elasticity of demand for a smartphone?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1068"
    },
    "1069": {
        "tables": [
            "| Magnitude of the Parallel Shift in the Benchmark Yield Curve | +20bps | -20bps |\n|-------------------------------------------------------------|--------|--------|\n| Full Price of the Bond (% of par)                           | 100.478| 101.238|"
        ],
        "question": "The SW bond offers a 4% annual coupon and matures in three years. It's a callable bond that could be exercised at par at the conclusion of years 1 and 2. In calculating and assessing SW's bonds, Huang employs a projected interest rate volatility of 15% and develops the binomial interest rate tree as outlined in the Exhibit below. Green, a lead analyst, instructs Huang to determine the impact of a 20 bps parallel shift of the benchmark yield curve on the price of this callable bond. What does Huang's computations reveal in the table below about the effective duration of SW's callable bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1069"
    },
    "1070": {
        "tables": [],
        "question": "If a PE fund has a total committed capital of $100 million, and the cumulative paid-in capital by the end of the most recent year was $90 million, with cumulative distributions tallying up to $30 million. Additionally, the end-of-year NAV, taking into consideration the balance before and after distributions, stood at $160 million and $130 million respectively. Moreover, the estimated NAV prior to distributions for the ensuing year is projected to be $250 million and the carried interest rate stands at 20%. Based on these financial figures of the PE fund, what was the TVPI (Total Value to Paid-In Capital) ratio at the close of the most recent year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1070"
    },
    "1071": {
        "tables": [],
        "question": "If a bond provides a yearly coupon rate of 5%, paying interest every six months, and it matures in seven years, what would be the bond's price per 100 of par value, given the market discount rate of 3%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1071"
    },
    "1072": {
        "tables": [],
        "question": "Jane Doe possesses a spreadsheet comprised of 108 monthly returns for shares in the ABC Company. She constructs a software program that employs bootstrap resampling to generate 200 resamples of the ABC data by sampling with replacement. Each resample similarly contains 108 data points. Doe's software measures the average of all 200 resamples and determines that the mean of these 200 resample averages is 0.0261. The software then subtracts 0.0261 from all 200 resample averages, squares each of these 200 differences, and sums up the squared differences. The outcome is 0.835. Subsequently, the software calculates an estimation of the standard error of the sample average. What is the estimated standard error of the sample average?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1072"
    },
    "1073": {
        "tables": [],
        "question": "Given a discrete uniform distribution, the possible outcome contains 25 integers from 1 to 25, what is the accurate value of P( 5 \u2264 X < 10 )?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1073"
    },
    "1074": {
        "tables": [],
        "question": "Travelpro has just distributed a dividend of 500 per share. The annual dividend will increase by 5% per annum over the coming four years. The corporation's shares are projected to be sold for $10,000 at the conclusion of the fourth year. If the necessary return rate is 15%, what is the inherent value of Travelpro's shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1074"
    },
    "1075": {
        "tables": [
            "| Probability Matrix |         |         |         |\n|--------------------|---------|---------|---------|\n| Returns            | RB=70%  | RB=30%  | RB=-20% |\n| RA=-20%, 30%       |         | 0%      | 0%      |\n| RA=20%, 0%         |         | 40%     | 0%      |\n| RA=30%, 0%         |         | 0%      | 30%     |"
        ],
        "question": "Based on the provided probability matrix, what is the covariance of stock X and stock Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1075"
    },
    "1076": {
        "tables": [
            "| Variable | Coefficient | t-statistic | p-value |\n| -------- | ----------- | ----------- | ------- |\n| Constant | -0.0069     | -0.013      | 0.99    |\n| S&P 500  | 0.3625      | 6.190       | <0.01   |\n| SPREAD   | 1.0264      | 4.280       | <0.01   |"
        ],
        "question": "Based on the data provided in Exhibit 1, which consists of the results of a regression of the monthly returns for an index related to a power company's equity over the past 203 months (the dependent variable), against the monthly returns for the S&P 500 Index and the difference between the monthly returns on long-term U.S. government bonds and one-month U.S. Treasury bills (SPREAD) (the two independent variables), what is the test statistic value related to Peterson's null hypothesis on the coefficient value of SPREAD? Peterson's null hypothesis is that this coefficient equals 1, while his alternative hypothesis claims it does not equal to 1.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1076"
    },
    "1077": {
        "tables": [
            "|     | Bid     |       |     | Ask     |       |     |     |\n|-----|---------|-------|-----|---------|-------|-----|-----|\n| Dealer | Time Entered | Price | Size | Dealer | Time Entered | Price | Size |\n| B |   10.10 a.m. | $17.15 | 900 | C | 10.11 a.m. | $17.19 | 1,200 |\n| C |   10.11 a.m. | $17.14 | 1,500 | B | 10.10 a.m. | $17.20 | 800 |\n| A |   10.11 a.m. | $17.12 | 1,100 | A | 10.12 a.m. | $17.22 | 1,100 |"
        ],
        "question": "Three merchants are creating a market for Light Systems shares. From these prices, Wilson's trading desk carries out a market sell order for 1,100 shares of Light Systems. Based on the information in Exhibit 1, what is the cumulative amount that Wilson will receive, per share, for making the market sell order?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1077"
    },
    "1078": {
        "tables": [],
        "question": "John is tasked with approximating the equity value of Company X using the Merton approach. 1)The value of Company X's assets stand at 180. 2)There's a risk-free rate of 5%.3)The company puts forth one-year zero interest bonds with a face value of 100. 4)The worth of a European put option on the company's asset is 3.50 and the strike price is set at 100.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "1078"
    },
    "1079": {
        "tables": [],
        "question": "A corporate bond with a 5-year timeline and a 5% semiannual coupon payment is valued at 104.967 for every 100 of face value. It has a yield-to-maturity of 3.897%, as quoted on a semiannual bond basis. If an economist is instructed to convert this to a monthly rate, what would be the yield-to-maturity?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1079"
    },
    "1080": {
        "tables": [],
        "question": "Based on the provided information that the available stable funding for Bank X is $180 million, their high-quality liquid assets are $200 million, their required stable funding amounts to $330 million, and they have Net cash outflows of $120 million expected over the next 30 days, what is the liquidity coverage ratio of Bank X?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "1080"
    },
    "1081": {
        "tables": [
            "|                             | 2015 | 2016 |\n|-----------------------------|------|------|\n| Cash                        | 210  | 310  |\n| Accounts receivable         |      | 31   |\n| Inventory                   | 60   | 80   |\n| Fixed assets                | 200  | 200  |\n| Accumulated depreciation    | -    | (35) |\n| Total assets                | 470  | 586  |\n| Accounts payable            | 105  | 162  |\n| Long-term debt              | 235  | 273  |\n| Common stock                | 130  | 130  |\n| Retained earnings           | -    | 21   |\n| Total liabilities and shareholders' equity | 470  | 586  |",
            "|                          |                    |    US $/C$    |\n|--------------------------|--------------------|--------------|\n| Rate on                  | 31 December 2015   |    0.89      |\n| Average  rate in 2016    |                    |    0.96      |\n| Weighted-average rate for inventory purchases | |    0.94      |\n| Rate  on  31 December 2016 |                  |    0.94      |"
        ],
        "question": "Sephora is a corporation from the United States that deals with cosmetics. Its Canadian branch, Beauty company, operates exclusively in Canada. It was established on 31st December 2015, and Beauty company uses the US dollar as its working currency. Fixed assets were acquired when the company was instituted. The table provides financial statement data for the years finalised in 2015 and 2016. Could you compute the balance sheet exposure if the working currency were modified?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1081"
    },
    "1082": {
        "tables": [],
        "question": "A business acquired machinery for $50,000 on the 1st of January 2009. The company is implementing straight-line depreciation for accounting reasons over a decade, but applying a declining balance method at a rate of 20% for taxation. Given a 30% tax rate, what is the deferred tax obligation by the end of 2011?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1082"
    },
    "1083": {
        "tables": [
            "| Year | Hazard Rate |\n|---|---|\n| 1 | 0.22% |\n| 2 | 0.35% |\n| 3 | 0.50% |\n| 4 | 0.65% |\n| 5 | 0.80% |"
        ],
        "question": "Johnson inquires Chen to gauge the likelihood of default linked with a five-year investment-grade bond offered by Polaris Corporation. Chosen information on the Polaris Corporation bond is displayed in Exhibit 1.Exhibit 1. Based on Exhibit 1, what is the possibility of Polaris failing to repay the bond within the first three years, taking into account the specific data on Polaris Corporation Five-Year Bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1083"
    },
    "1084": {
        "tables": [],
        "question": "Duhamel starts reviewing the asset collection of an American citizen, Brooke Jensen. Jensen's investments are in American and European securities. On January 1, 2019, Jensen held assets of USD 50 million and EUR 50 million, distributed between shares and bonds. The exchange rate on this day was 1.1 USD/EUR. A year later, on January 1, 2020, the value of Jensen's European asset increased from EUR 50 million to EUR 54 million, having EUR 20 million in shares and EUR 34 million in bonds. The USD/EUR exchange rate at this time is 1.16. Can you determine the domestic currency return on Jensen's European portfolio over the preceding year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1084"
    },
    "1085": {
        "tables": [
            "| Estimated net income | $200 |\n| --- | --- |\n| Beginning retained earnings | $1,400 |\n| Estimated distributions to owners | $100 |"
        ],
        "question": "What should be the projection of the analyst for the final retained earnings of a corporation, ahead of its end-of-year profit declaration (in millions)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1085"
    },
    "1086": {
        "tables": [
            "| Full price of bond (PVFull) | $100,367,242    |\n|-----------------------------|-----------------|\n| Modified duration (AnnModDur) | 8.124 years |\n| Accrued interest               | $303,218        |"
        ],
        "question": "Given the below details about a company's bond, what is the financial duration of this particular bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1086"
    },
    "1087": {
        "tables": [],
        "question": "A business sells a non-refundable, two-year service agreement for \u20ac420. According to previous trends, the business anticipates that the first year will see 25% of service expenses, with the rest expected in the second year. How much revenue does the business acknowledge in the first year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1087"
    },
    "1088": {
        "tables": [],
        "question": "Anna, a researcher, carried out a basic regression to understand the fluctuation in electricity usage based on temperature. She found out that the overall variation of the dependent variable was 132.08 and the variation that was explained stood at 60.38. Given that she had 60 monthly data points, can you calculate the coefficient of determination?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1088"
    },
    "1089": {
        "tables": [],
        "question": "John wants to assist his pal, Lisa, in forecasting the revenue of her store in October 20X9. To do this, he uses the income data from January 20X6 to September 20X9 as examples to create an AR(2) model. The resulting formula is: Xt+1  =1.3458+0.8912Xt+0.3372Xt-1. What would be the anticipated earnings of Lisa\u2019s store in October 20X9 if it is known that the income in August 20X9 was $2746.72 and the income in September 20X9 was $2957.63?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1089"
    },
    "1090": {
        "tables": [],
        "question": "Assume a call option priced at $4 where the strike price is $50. Calculate the worth at expiration and the earnings for a purchaser if the cost of the underlying asset at expiration is $48.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1090"
    },
    "1091": {
        "tables": [
            "| Balance Sheet Item | 12/31/2017 | 12/31/2018 | Change |\n| ------------------ | ---------- | ---------- | ------ |\n| Equipment          | $100 million  | $105 million | $5 million  |\n| Accumulated  depreciation - equipment | $40 million | $46 million | $6 million |"
        ],
        "question": "Using the same figures highlighted in the comparative balance sheets, how much money did Globex Metals International, a global metals corporation, gain from the sale of machinery, following their reported equipment sale loss of $2 million in 2018, a noted depreciation expense of $8 million, and capital outlays amounting to $10 million which was completely used on new machinery purchases?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1091"
    },
    "1092": {
        "tables": [],
        "question": "Suppose interest rate parity is valid and the present spot rate is 1.4808 CAD/EUR. The annual interest rates in the nation of Canada (CAD) and the country of France (EUR) stand at 3% and 4% respectively. What is the 1-year forward rate in CAD/EUR?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1092"
    },
    "1093": {
        "tables": [
            "|  | 2015 | 2016 | 2017 | 2018(E) |\n|---|---|---|---|---|\n| Earnings per share | 6 | 6.3 | 6.62 | 6.95 |\n| Dividends per share | 1.8 | 1.89 | 2.00 | 2.10 |"
        ],
        "question": "Bill is examining a food distribution enterprise, RapidSnacks's fair forward P/E using the Gordon growth offer discount model. The EPS and dividends of RapidSnacks are indicated previously. Bill assumes that the company's necessary rate of return would be 12%, and hypothesizes that the growth rate of the company would be consistent at 5%. Based on this data, what is the justified forward P/E of the enterprise?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1093"
    },
    "1094": {
        "tables": [],
        "question": "A life insurance firm from Canada has an outstanding issue of perpetual, non-convertible, non-callable preferred shares with a 4.80 percent coupon rate and a par value of $25. If the required return on similar issues is 4.49 percent, what would be the intrinsic value of one of these preferred shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1094"
    },
    "1095": {
        "tables": [],
        "question": "An expert finds out that roughly 99% of the observations of daily revenue for a corporation lie between $230,000 and $480,000 and that daily revenue for the corporation follows a normal distribution. If about 99% of all the observations lie in the interval \u03bc \u00b1 3\u03c3, then using the approximate z-value instead of the exact table, what is the standard deviation of daily revenue for the corporation?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1095"
    },
    "1096": {
        "tables": [],
        "question": "A manager in charge of market risk intends to determine the cost of a 2-year zero-coupon bond. The 1-year interest rate currently stands at 10.0%. It's projected that there's a 50% chance that the 1-year interest rate will reach 12.0% and a 50% chance that it could be 8.0% in the next year. If the risk premium of duration risk is assumed to be 50 bps annually, and the bond\u2019s face value is worth EUR 1,000, which would be the accurate price of this zero-coupon bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "1096"
    },
    "1097": {
        "tables": [
            "|     |      |\n| ----| ----|\n| EXHIBIT 1  SELECTED INFORMATION O N INVESTMENTS FOR THE YEAR ENDED 31 DECEMBER 2017 (\u00a3 THOUSANDS, EXCEPT PER SHARE DATA) | |\n| Company Name | Alme AG |\n| Security  description | Bonds maturing  31 December 2026, 5% coupon payable  annually, 6% effective market rate when issued  1 January 2012 |\n| Classification at purchase | Held to maturity |\n| Date of purchase | 1 January 2016 |\n| Amount owned by Dagmar | Face value \u00a34,000 |\n| Market value on  1 January 2017 | \u00a33,600.60 |\n| Market value on  31 December 2017 | \u00a33,634.76 |"
        ],
        "question": "What is the contribution from the investment in Alme to the net earnings (in thousands) for 2017 of Brecht and Co, a European manufacturing company that prepares its financial statements according to International Financial Reporting Standards (IFRS)? This is being reviewed by two treasury group members of Brecht and Co, Hans Braun and Olga Schmitt.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1097"
    },
    "1098": {
        "tables": [
            "| Revenue growth | 5% |\n| --- | --- |\n| Gross profit margin | 30% |\n| Depreciation Expense | 2.5% of revenues |\n| SG&A | 15% of revenues |\n| WCInv | 5% of the incremental revenues |\n| CapEx | 15% of the incremental revenues |\n| Tax rate | 30% |"
        ],
        "question": "John is assessing the FCFF of Corporation N for the upcoming year, which records an annual turnover of $100 million. He has projected the pertinent details in the given table. What is the FCFF?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1098"
    },
    "1099": {
        "tables": [],
        "question": "If we assume an annual interest rate of 8% and an investment made today of $50,000. Let's suppose equal distributions are made at the end of each year for the following twelve years, leaving the account to be closed at the end of the twelfth year. How much would each yearly distribution amount be?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1099"
    },
    "1100": {
        "tables": [],
        "question": "Given that Occurrence A and Occurrence B are independent events. The probability of A is 0.2 [P(A) = 0.2] and the probability of B is 0.5 [P(B) = 0.5]. What is the combined probability of A and B, P(AB)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1100"
    },
    "1101": {
        "tables": [],
        "question": "The portfolio manager of AB pension, Monique, is contemplating the addition of XY Corp. (New York Stock Exchange: XY) to her portfolio. After a thorough evaluation of the company and its competitors, she is of the view that the company will exhibit exceptional growth for the coming 4 years and regular growth following that. Therefore, she has inferred that a two-stage DDM is most suitable for evaluating the stock. The total dividends paid by XY in 2017 amounted to $0.22. She predicts a growth rate of 12 percent for the next 4 years and 6 percent thereafter. She estimates that the required return is 9 percent. What percentage of the total value of the stock is associated with the value of the second stage based on this method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1101"
    },
    "1102": {
        "tables": [],
        "question": "Taking into account the following financial information for a financial institution, in millions of dollars: shareholders' funds: 627.4; retained earnings: 65.6; undisclosed reserves: 33.5; goodwill: 21.3; subordinated debt: 180.0; specific provisions: 11.7. What is the ratio of tier 2 capital to tier 1 capital?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "1102"
    },
    "1103": {
        "tables": [],
        "question": "A dealer submits a limit order to purchase stocks at a rate of $49.94, with the market bid price being $49.49 and the bid-ask spread standing at 0.7%. What will likely be the final fill price for the order?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1103"
    },
    "1104": {
        "tables": [],
        "question": "Currently possessing $750,000 in cash and short investment, Robert consults his investment manager Smith to discuss his investment portfolio. Robert's human capital amounts to $1.2 million with 30% demonstrating an equity-like characteristic according to calculations. Deciding that an overall target allocation of 45% equity is fitting for Robert, Smith must now determine the financial capital equity allocation required for Robert to meet the total economic wealth's targeted equity allocation. What should this allocation amount to?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1104"
    },
    "1105": {
        "tables": [
            "| Bond Class | Par Value(Emillions) |\n|------------|---------------------|\n| A(senior)  | 200                 |\n| B(subordinated) | 20           |\n| C(subordinated) | 5            |"
        ],
        "question": "At what level of default in par value would Bond Class A incur a loss if issued by a special purpose vehicle in the following structure?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1105"
    },
    "1106": {
        "tables": [
            "| Activity                           | Cost of Input (\u00a3/unit) | Price of Output (\u00a3/unit) in Current Period |\n| ---------------------------------- | ---------------------- | ----------------------------------------- |\n| Input materials                    | 3.50                   | 5.42                                      |\n| Production                         | 5.42                   | 8.02                                      |\n| Distributing good to stores (wholesale) | 8.02            | 11.23                                     |\n| Selling good to consumers (retail) | 11.23                  | 16.50                                     |"
        ],
        "question": "What is the contribution per unit (in \u00a3) this product adds to the present GDP, taking into account the production and sale expenses as shown in the subsequent table?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1106"
    },
    "1107": {
        "tables": [
            "| Checking account | $27,000 |\n|------------------|---------|\n| Taxable investment account | $625,000 |\n| Residence | $525,000 |\n| Residential mortgage | $285,000 |\n| Outstanding balance on a $100,000 home equity line of credit | $38,000 |"
        ],
        "question": "Exhibit 1 Smith Family: Personal and Financial Information:Personal Information:1. Estimated present value of the Smiths\u2019 future earnings is $3,900,000.2. The family has two children, ages 10 and 8. Cost of four years of university for the two children, with an estimated present value of $250,000.3. Purchase of a vacation home in the next five years, with an estimated present value of $325,000.4. Estimated present value of the Grahams\u2019 future consumption is $3,500,000. Using the data in Exhibit 1, what is the Smiths\u2019 economic net worth (in thousands)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1107"
    },
    "1108": {
        "tables": [],
        "question": "If John has put money into 50,000 shares of Company N's stock that is being sold for $25 each and the company announces a cash dividend of $2, assuming John will be using all dividends received to buy more shares and considering he is a tax-exempt investor, how many shares will he possess after reinvesting the dividends at the ex-dividend price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Corporate & Securities Issuance",
        "split": "test",
        "p_id": "1108"
    },
    "1109": {
        "tables": [],
        "question": "Assuming a trader acquired a stock initially priced at $20 and sold it at the end of the year for $25, what is the continuously compounded annual rate of return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1109"
    },
    "1110": {
        "tables": [],
        "question": "What is the value of a bond with a par value of $100, a coupon rate of 6% paid twice a year, a YTM of 7%, and a maturity period of a decade?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1110"
    },
    "1111": {
        "tables": [],
        "question": "Michael wishes to assist his buddy James in forecasting the sales volume of his store in January 20X9, so he employs the sales volume data from January 20X6 to December 20X8 as examples to construct a log-linear trend model, achieving the result: Ln( \u0177t ) =2.3748+0.0912t. What is the forecasted sales volume of James's store in January 20X9?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1111"
    },
    "1112": {
        "tables": [],
        "question": "If a Property B has an appraised worth of $36,000,000 with a predicted Year 1 NOI of 900,000, What would be the highest loan amount that Property B could receive if the loan provider is interested in an interest-only loan at 5% mortgage rate, given that the maximum loan to value doesn't exceed 80% and the minimum debt service coverage ratio is no less than 1.2x?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1112"
    },
    "1113": {
        "tables": [],
        "question": "XYZ, a wealth management company based in France, is planning to buy CDS on a firm called E to secure its existing portfolio position. The yearly coupon rate for the CDS is 5%, and the term of the CDS agreement is 5 years. The credit spread for firm E stands at 650 bps. Based on the details provided, what is the initial premium as a percent of the notional for the CDS on firm E?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1113"
    },
    "1114": {
        "tables": [],
        "question": "A merchant initiates an equity swap with a notional principle of $500,000. He will acquire the return on stock ABC and give the return on Dow Jones Index. At the end of the quarter, if the stock ABC has increased by 5% and the index has risen by 1%, what would be the merchant's payoff?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1114"
    },
    "1115": {
        "tables": [],
        "question": "If an individual puts $1000 into an investment now at a 6% interest rate, how much will they make in 10 years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1115"
    },
    "1116": {
        "tables": [],
        "question": "In March 2017, John purchased 500 pen units at a price of $2 each. Then in April 2017, John acquired 600 pen units at a cost of $3 each. Throughout 2017, he made sales of 1000 units at $5 for each unit. Utilizing the Weighted Average method, what will be the cost of goods sold in 2017 for John?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1116"
    },
    "1117": {
        "tables": [
            "| Date | Spot Exchange Rate (USD/RMB) | CPI |\n| --- | --- | --- |\n| 31 Dec 2015 | 6.2 | 100 |\n| 31 Dec 2016 | 8.6 | 130 |\n| 31 Dec 2017 | 17.3 | 200 |\n| Average 2017 | 15.2 | 165 |"
        ],
        "question": "XYZ Inc. is a global company that adheres to IFRS and uses RMB as the currency for reporting. XYZ owns a subsidiary named QRS, located in the US and uses the US dollar (USD) as its operational currency. QRS's revenue for 2017 is USD90 million. What amount should XYZ Inc. report as its December 31, 2017 revenue from QRS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1117"
    },
    "1118": {
        "tables": [],
        "question": "Assuming a continuous compound interest rate of 2.5%, how much will John receive after 5 years from his $1million investment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1118"
    },
    "1119": {
        "tables": [
            "| country  | Inflation rate (%) | Growth in total factor productivity (%) | Output elasticity of capital | Growth rate of capital (%) | Growth rate of labor (%) |\n|----------|----------------|---------------------------------------|-----------------------------|----------------------------|--------------------------|\n| Country A | 1.7              | 1.5                                                 | 0.3                                           | 3.2                                   | 0.4                                     |\n| Country B | 1.8              | 1.3                                                 | 0.4                                           | 3.7                                   | 0.5                                     |"
        ],
        "question": "Based on the information given in Exhibit 1, what is the GDP growth rate in Country A using the Solow growth accounting equation, which is the preferred method of calculation by Thompson?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1119"
    },
    "1120": {
        "tables": [],
        "question": "At the onset of 2017, Corporation Beta had a retained earnings amount of $800. The company's anticipated net income for the entire year falls around $150, and they're planning to distribute a dividend of $200 to the shareholders. What amount of retained earnings will Corporation Beta have by the end of 2017?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1120"
    },
    "1121": {
        "tables": [
            "| Company   | Sales(in millions of) |\n|-----------|----------------------|\n| ABC       | 300                  |\n| Brown     | 250                  |\n| Coral     | 200                  |\n| Delta     | 150                  |\n| Erie      | 100                  |\n| All others| 50                   |"
        ],
        "question": "What is the sector's concentration ratio for four companies, based on the market share data collected by the analyst for a particular industry?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1121"
    },
    "1122": {
        "tables": [],
        "question": "An investment fund implements the succeeding payment structure: Yearly administrative fee based on year-end AUM: 2% Incentive fee: 20% Initial requirement rate before incentive fee starts: 4% Present top earning point: $610 million. The fund starts off the year with a value of $580 million and after one year, it ends with a value of $650 million before the fees are considered. What is the annual net percentage return to a shareholder for this year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1122"
    },
    "1123": {
        "tables": [
            "| Revenue | $1,000,000 |\n|---------|------------|\n| Returns of goods sold | $100,000 |\n| Cash collected | $800,000 |\n| Cost of goods sold | $700,000 |"
        ],
        "question": "In 2009, which was its inaugural year of operations, GameSquare recorded certain data concerning the sale of its products. Under the accrual basis of accounting, how much net revenue would appear on GameSquare's 2009 income statement?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1123"
    },
    "1124": {
        "tables": [],
        "question": "A financial advisor was requested to look for opportunities for arbitrage in the market of Treasury bonds through a comparison of the cash flows from some selected bonds and the cash flows of other bond combinations. If the price of a 1-year zero-coupon bond is USD 97 and a 1-year bond with a 7% coupon and payments every six months comes at USD 102, using a duplication method, what would be the cost of a 1-year Treasury bond with a 6% coupon that has semi-annual payments?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1124"
    },
    "1125": {
        "tables": [
            "|                | Investment A | Investment B | Total |\n|----------------|--------------|--------------|-------|\n| Initial cost   | 100          | 150          | 250   |\n| Profit/loss    | -50          | 30           | -20   |"
        ],
        "question": "A researcher collects the subsequent details (in $ millions) regarding a private investment fund: The supervisor's reward fee is 20% of the earnings. If there is no clawback clause applicable, the total reward fee (in $ millions) under a U.S.-style waterfall is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1125"
    },
    "1126": {
        "tables": [],
        "question": "If the stated price of an option is $1.25, what is the value of a single option contract?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1126"
    },
    "1127": {
        "tables": [],
        "question": "What is the yearly yield-to-maturity, noted with a 12 period frequency, for a 4-year, zero coupon bond priced at 75% of par value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1127"
    },
    "1128": {
        "tables": [],
        "question": "The analyst, Jane, performed a straightforward regression that accounted for the changes in electric usage based on temperature fluctuations. The total variation for the dependent variable totaled 132.08, with the explained variation being 60.38. She made 60 observations on a monthly basis. Can you compute the F-statistic to assess the model's fit?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1128"
    },
    "1129": {
        "tables": [],
        "question": "A one-year zero-coupon bond has a return of 4.0%. The yields on a two-year and a three-year zero-coupon bond are 5.0% and 6.0% respectively. What would be the forward rate for a loan for two years starting in one year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1129"
    },
    "1130": {
        "tables": [],
        "question": "Four years ago, Mike deposited $2,000 into his savings account for home renovations, it compounded annually at an annual interest rate of 3%. Now, Mike has altered his plan and has decided to leave the money in the bank for an additional five years. What is the current value of Mike's account?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1130"
    },
    "1131": {
        "tables": [
            "| Asset Class     | Geometric Return (%) |\n| --------------- | -------------------- |\n| Equities        | 8.0                  |\n| Corporate Bonds | 6.5                  |\n| Treasury bills  | 2.5                  |\n| Inflation       | 2.1                  |"
        ],
        "question": "What is the actual yield for stocks, as per the historic geometric returns observed by a research analyst?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1131"
    },
    "1132": {
        "tables": [],
        "question": "Assuming quarterly compounding, what is the stated annual interest rate if a financial institution offers an effective annual rate (EAR) of 12%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1132"
    },
    "1133": {
        "tables": [
            "|                        | Maturity (Years) |     |     |     |\n|------------------------|------------------|-----|-----|-----|\n|                        | 1                | 2   | 3   | 4   |\n| Government spot rate   | 2.25%            | 2.70% | 3.30% | 4.05% |\n| Swap spread            | 0.25%            | 0.30% | 0.45% | 0.70% |"
        ],
        "question": "Johnson collects data on spot rates for on-the-run yearly-coupon government securities and swap spreads, as shown in the Exhibit below. Johnson purchases a four-year, zero-coupon corporate bond and then sells it after two years. Johnson demonstrates the returns from this approach using the swap rate as a substitute for corporate yields. What should Johnson display as a total return?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1133"
    },
    "1134": {
        "tables": [],
        "question": "If an investment advisor has a bond position valued at USD 100 million with a modified duration of eight years and a convexity of 150 years, with the term structure being flat, what would be the change in the position's value if interest rates were to rise by 25 basis points?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1134"
    },
    "1135": {
        "tables": [],
        "question": "The women's apparel producer, Ivory Ensign, recorded a $20 million expense in salaries. The initial balance of payable salaries was at $3 million and eventually ended at $1 million. How much in salaries did the firm distribute in cash?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1135"
    },
    "1136": {
        "tables": [],
        "question": "The annual spot rate r(1) is 5% and the forward price for a one-year zero-coupon bond starting in a year stands at 0.9346. What would be the spot price of a two-year zero-coupon bond?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1136"
    },
    "1137": {
        "tables": [],
        "question": "The possibility of a variable, which follows a normal distribution with an average of 0.9 and a standard deviation of 1.5, being in the range of 0.9 and 1.2 is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1137"
    },
    "1138": {
        "tables": [],
        "question": "In 2009, Pelican Enterprises reported a net profit of $1,000,000. On the first of January, 2009, there were 1,000,000 shares in circulation. The company issued an additional 100,000 shares at $20 per share on July 1, 2009. Common shareholders received $200,000 in dividends. What is the basic earnings per share for Pelican Enterprises for the year 2009?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1138"
    },
    "1139": {
        "tables": [],
        "question": "A company is planning to acquire 10,000 barrels of West Texas Intermediate Crude Oil and intends to hedge its purchase utilizing the Brent Crude Oil futures contract. Given that the correlation between the spot and futures prices is 0.72 and the annual volatility of the spot price and the Brent Crude Oil futures price are 0.35 and 0.27 respectively, what is the hedge ratio for the company?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1139"
    },
    "1140": {
        "tables": [],
        "question": "What is the cost per 100 of face value for a bond offering a 3% annual interest rate that will mature in two years, given a market discount rate of 4%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1140"
    },
    "1141": {
        "tables": [
            "| coupon | 15% annual-pay coupon |\n| --- | --- |\n| years to maturity | 7 years |\n| current price | trading at par |\n| basis point change in yield | 25 |"
        ],
        "question": "Estimate the approximate modified duration of the bond given the details below:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1141"
    },
    "1142": {
        "tables": [],
        "question": "A financier purchases a Treasury bill that matures in one month for $987. When it matures, he receives $1,000. Work out the effective annual rate (EAR) for him.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1142"
    },
    "1143": {
        "tables": [],
        "question": "Firm B declared COGS of $50 million. Over the year, there was an increase of $8 million in inventory and a decrease of $5 million in accounts payable. What is the total cash the firm paid to its suppliers?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1143"
    },
    "1144": {
        "tables": [],
        "question": "In New York, Mia peddles homemade cakes. On a daily basis, she can sell 250 cakes at $10 each. On Mother's Day, she offers a special discount and anticipates a sale of 350 cakes at the discounted rate of $8 per cake. What is the marginal revenue per cake she earns from the special discount?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1144"
    },
    "1145": {
        "tables": [],
        "question": "If a bond has an annual coupon rate of 4%, and it pays interest twice a year, and is due in two years. Given a 6% market discount rate, what is the cost of this bond for every 100 of nominal value?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1145"
    },
    "1146": {
        "tables": [],
        "question": "If a portfolio contains two investments, both of equal value, with a VaR of $15 million and $30 million respectively, and if these two investments are perfectly correlated, what would be the calculated VaR of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1146"
    },
    "1147": {
        "tables": [
            "| | | Year 1 | Year 2 | Year 3 | Year 4 |\n|---|---|---|---|---|---|\n| | NOI | $1,100,000 | $1,166,000 | $1,236,000 | $1,310,000 |\n| | | **DCF Assumptions** | | | |\n| | | | Investment Hold Period | | 3 years |\n| | | | Going-in Cap Rate | | 5.00% |\n| | | | Terminal Cap Rate | | 6.00% |\n| | | | Discount Rate | | 7.00% |\n| | | | Income /Value  Growth Rate | | Constant |"
        ],
        "question": "Based on the given information, what is the worth of Asset A utilizing the direct capitalization approach?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1147"
    },
    "1148": {
        "tables": [],
        "question": "A business offers a two-year, non-refundable service agreement for \u20ac420. Historically, the business anticipates meeting 25% of service expenses in the first year of the contract, with the rest covered in the second year. How much revenue does the business recognize in the first year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1148"
    },
    "1149": {
        "tables": [],
        "question": "If Sarah intends to purchase a property five years from now, anticipated to be worth $250,000 then, how much should she invest currently, given an annual rate of 3% that is compounded monthly?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1149"
    },
    "1150": {
        "tables": [
            "| Security | Beginning of Period: Price(E) | Beginning of Period: Shares | End of Period: Price(\u20ac) | End of Period: Shares |\n|----------|-------------------------------|-----------------------------|-------------------------|-----------------------|\n| A        | 20.00                         | 300                         | 22.00                   | 300                   |\n| B        | 50.00                         | 300                         | 48.00                   | 300                   |\n| C        | 26.00                         | 2,000                       | 30.00                   | 2,000                 |"
        ],
        "question": "A researcher collects the following information for a value-weighted index: What is the return on the value-weighted index for the given period?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1150"
    },
    "1151": {
        "tables": [],
        "question": "If Corporation X employs the double-declining balance method for amortizing a patent worth $120,000 with a useful lifespan of 4 years, what would be the difference in the net book value at the end of the 3rd year if it switched to the straight-line method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1151"
    },
    "1152": {
        "tables": [
            "| 10-Year Historical | Current | Capital Market Expectations |\n| ----------------- | ------- | ---------------------------- |\n| Average government bond yield: 2.8% | 10-year government bond yield:2.3% |   |\n| Average annual equity return:4.6% | Year-over-year equity return:-9.4% |   |\n| Average annual inflation rate: 2.3% | Year-over-year inflation rate:2.1% | Expected annual inflation: 2.3% |\n| Equity market P/E (beginning of period): 15x | Current equity market P/E:14.5x | Expected equity market P/E: 14.0x |\n| Average annual dividend income return: 2.6% |   | Expected annual income return: 2.4% |\n| Average annual real earnings growth: 6.0% |   | Expected annual real earnings growth: 5.0% |"
        ],
        "question": "A financier from Australia presently possesses an equity portfolio worth A$240 million. Based on his evaluation of the risk and return potential of the Australian economy, he is thinking about reconfiguring his portfolio. A table was generated containing data relevant to the Australian investment markets and the economy: Use the data from the table to determine the historical Australian equity risk premium using the \"equity-vs-bonds\" premium approach.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1152"
    },
    "1153": {
        "tables": [
            "| acquisition cost | $500,000 |\n|---|---|\n| accumulated depreciation | $90,000 |\n| loss on the sale | $100,000 |"
        ],
        "question": "What is the analyst attempting to calculate the selling price of the intangible asset of corporation TDC based on the data provided?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1153"
    },
    "1154": {
        "tables": [],
        "question": "By utilizing the two-stage dividend discount model, John has appraised the worth of Corporation N. The firm has given a dividend of $1 per share in the latest year. In this model, it is forecasted that the dividend will have an annual growth of 10% for the initial three years, then continue to grow at a rate of 5% per year indefinitely. With a required return rate of 10%, what is the present value of Corporation N's stock?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1154"
    },
    "1155": {
        "tables": [],
        "question": "Given the following spot rates term structure: 1-year at 2.50%, 2-year at 3.00%, 3-year at 3.50%, 4-year at 4.00%, and 5-year at 4.50%, can you calculate the two-year forward rate that begins after three years?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1155"
    },
    "1156": {
        "tables": [],
        "question": "A researcher ascertains that roughly 99% of the daily sales observations for a firm fall within the $230,000 to $480,000 bracket, with the sales being distributed normally. If about 99% of all observations fit in the \u03bc\u00b13\u03c3 range, what is the standard deviation of the corporation's daily sales when using the approximate z-value instead of the accurate table?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1156"
    },
    "1157": {
        "tables": [],
        "question": "XYZ corporation rents a machine for its operations for a duration of 6 years with an annual payment of $3000, an 8% interest rate, under an operating lease, what is the present value of the lease payment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1157"
    },
    "1158": {
        "tables": [],
        "question": "If in 2016, Serena purchased a machine for $50,000 that has a useful life of ten years and a residual value of $5,000, what would the depreciation of this machine be in 2017 if we use the straight-line method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1158"
    },
    "1159": {
        "tables": [],
        "question": "On the 1st of January, a company releases ten-year bonds with a principal amount of \u20ac10,000,000 and with yearly interest payments due every 31st of December. The coupon rate is 2.0 percent, and the effective interest rate is 3.0 percent. By applying the effective interest rate method, what is the amortized discount at the conclusion of the first year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1159"
    },
    "1160": {
        "tables": [
            "| Balance Sheet Item                          | 12/31/2016 | 12/31/2017 |\n| ------------------------------------------- | ---------- | ---------- |\n| Common stock                                | $50        | $55        |\n| Additional paid-in capital  common stock    | $80        | $100       |\n| Retained earnings                           | $95        | $150       |"
        ],
        "question": "The net income reported by Corporation B was $56 million. Given the subsequent balance sheets (in $millions), what was the known net financing cash flows for 2017? The assumption is that dividends paid are considered as CFF.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1160"
    },
    "1161": {
        "tables": [],
        "question": "If there is a positive parallel shift in the yield curve of 25 basis points, which of the following answers best estimates the resulting change in the value of Michael\u2019s portfolio which contains a fixed-income position with a market value of USD 70 million, a modified duration of 6.44 years, and yields 6.7% compounded semiannually?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Risk Management",
        "split": "test",
        "p_id": "1161"
    },
    "1162": {
        "tables": [],
        "question": "Assume that the hedge fund known as Global Finance started with an initial capital of $250 million. Global charges a 2% administrative fee based upon assets managed at the close of the year, and a bonus fee of 20% calculated on gains surpassing the 8% mark. The fund's value increased by 16% in its inaugural year. Given that management fees are calculated using end-of-year valuation, what will an investor's net return be, taking into consideration that the performance fee is calculated after the management fee?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1162"
    },
    "1163": {
        "tables": [],
        "question": "Every day, a prominent credit card corporation evaluates 10,000,000 transactions for possible scams. Among these transactions, 0.001% are identified as scam attempts. Should their system detect 90% of all scam transactions, while also erroneously flagging 0.0001% of legitimate transactions, what are the chances that a flagged transaction is actually a scam?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1163"
    },
    "1164": {
        "tables": [
            "| Security | Expected Annual Return(%) | Expected Standard Deviation(%) |\n|---|---|---|\n| A | 20 | 16 |\n| B | 20 | 12 |"
        ],
        "question": "Assuming a correlation of -0.8 between two securities, what would be the anticipated standard deviation if the two assets are given equal weight, as recently structured by Laurel, a manager at an investment firm?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1164"
    },
    "1165": {
        "tables": [
            "|                                       | $ Millions |\n|---------------------------------------|------------|\n| Short-term borrowing                  | 4,231      |\n| Current portion of long-term interest-bearing debt |    |\n| Long-term interest-bearing debt       | 925        |\n| Average shareholders' equity          | 18,752     |\n| Average total assets                  | 45,981     |"
        ],
        "question": "What is the financial leverage ratio for a business, given the provided selected financial data?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1165"
    },
    "1166": {
        "tables": [],
        "question": "The F(18) is supposed to be what, in a continuous uniform distribution defined as U(5, 15)?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1166"
    },
    "1167": {
        "tables": [
            "| Fund | Expected Return | GDP Factor Sensitivity | Inflation Factor Sensitivity |\n|------|-----------------|------------------------|------------------------------|\n| A    | 15%             | 1.2                    | 1                            |\n| B    | 20%             | 2                      | 0.2                          |\n| C    | 10%             | 1.5                    | 0                            |",
            "| Factor     | Forecast | Actual |\n| -----------| ---------| -------|\n| inflation  | 3.5%     | 4.2%   |\n| GDP growth | 6%       | 6.5%   |"
        ],
        "question": "According to the given chart and the details about inflation and GDP growth data, what is the yield for Portfolio X and Z, made up of a 55% allocation to portfolio X and a 45% allocation to portfolio Z?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1167"
    },
    "1168": {
        "tables": [
            "| Metric                        |        |\n|-------------------------------|--------|\n| Sales                         | $421,000 |\n| Cost of goods sold (COGS)     | $315,000 |\n| Cash                          | $30,000  |\n| Average accounts receivable   | $40,000  |\n| Average inventories           | $36,000  |\n| Average accounts payable      | $33,000  |"
        ],
        "question": "According to the selected financial data given, what is the cash conversion cycle (in days) of the business?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1168"
    },
    "1169": {
        "tables": [],
        "question": "If you have a portfolio made up of five shares, how many distinct covariance terms, without considering variances, are needed to compute the return variance of the portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1169"
    },
    "1170": {
        "tables": [],
        "question": "In 2016, Corporation X had a net income of $20,000 and paid out cash dividends of $1,500 to its common shareholders and another $2,000 to preferred shareholders. At the beginning of the year, there were 20,000 shares of common stock. On July 1st, 1,000 additional shares were issued. What is the Basic EPS?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1170"
    },
    "1171": {
        "tables": [
            "|                                            |        |\n|--------------------------------------------|--------|\n| **Exhibit 1  Atlantic Preserves, Inc.**                |        |\n| **Selected Information from Note F of the 2013 Annual Financial Statements** |        |\n| **Relating to the Company's Defined Benefit Pension Plan (in $ thousands)**   |        |\n| Start-of-year pension obligation           | 72,544 |\n| Start-of-year plan assets                  | 60,096 |\n| End-of-year pension obligation             | 74,077 |\n| End-of-year plan assets                    | 61,812 |\n| Current service cost                       | 1,151  |\n| Interest cost                              | 5,441  |\n| Actual return on plan assets               | 5,888  |\n| Expected return on plan assets             | 4,597  |\n| Benefits paid to retired employees         | 5,059  |\n| Employer's contributions                   | 887    |\n| Amortization of past service costs         | 272    |"
        ],
        "question": "If the company Atlantic Preserve prepares its financial statements following U.S. GAAP, what is the reported periodic pension cost on the income statement for 2013 (in $ thousands), as Loris has asked Paul to work out using the data in Exhibit 1?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1171"
    },
    "1172": {
        "tables": [
            "|           | Gross plant and equipments | Accumulated depreciation |\n|-----------|---------------------------|-------------------------|\n| Last year | \u00a3460,000                  | \u00a3110,000                |\n| This year | \u00a3500,000                  | \u00a3120,000                |"
        ],
        "question": "In the latest fiscal report, the depreciation expense for Smiths Ltd. stands at \u00a320,000. Given the company's general information, what is the presumed residual useful life of the factory and machinery?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1172"
    },
    "1173": {
        "tables": [],
        "question": "In nation Y, the odds of a letter sent via the mail service getting to its intended destination are 2/3. Suppose that each mail delivery is not influenced by any other, and if a girlfriend gets a letter from her boyfriend, she will definitely send a reply to him. Imagine a guy in nation Y mails a letter to his girlfriend (also in nation Y) using the mail service. Assuming the guy doesn't get a return letter from his girlfriend, what are the chances that his girlfriend received his letter?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1173"
    },
    "1174": {
        "tables": [
            "|                   |         |\n|-------------------|---------|\n| Fair value        | $500,000|\n| Costs to sell     | $90,000 |\n| Value in use      | $460,000|\n| Net carrying amount | $600,000|"
        ],
        "question": "Under IFRS, the impairment loss for a machine from company TDC is listed as follows:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1174"
    },
    "1175": {
        "tables": [
            "| Bond | A   | B   |\n|------|-----|-----|\n| Number of periods to maturity | 4 years | 4 years |\n| Coupon rate | 6% | 9% |"
        ],
        "question": "If the market discount rate is 5%, what is the variance in the pricing for two bonds per 100 of face value that pay out interest every year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1175"
    },
    "1176": {
        "tables": [],
        "question": "ABC has a three-year floating rate loan. To hedge the risk of increasing interest rates, the organization is considering entering into an interest rate swap. The notional principle of the floating loan is $5 million, the rate is Libor+1%. The swap's fixed rate is 5% and the floating rate is Libor, with payments made every six months. The notional principle of the swap is also $5 million. What is the first net interest payment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1176"
    },
    "1177": {
        "tables": [],
        "question": "In 2017, the net sales of the XYZ corporation were $300,000. Given that accounts receivable fell by $56,000 and accounts payable rose by $9,000, and that the inventory increased by $20,000, what were their cash collections?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1177"
    },
    "1178": {
        "tables": [],
        "question": "Jane Smith is interested in taking a loan of $40,000 to purchase a vehicle with no down payments. She's expected to make even payments at the end of each month for the coming 3 years. If her monthly payment is $1,350, what is the principal portion of her second installment?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1178"
    },
    "1179": {
        "tables": [
            "| Sample mean | 15% |\n|-------------|-----|\n| Sample size | 90  |\n| Population variance | 128 |"
        ],
        "question": "Given the data provided, what is the standard error of the mean sample?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1179"
    },
    "1180": {
        "tables": [],
        "question": "What is the highest possible value for Qy, considering the inverse demand function Py = 13 \u2013 3.7Q where Py equals the price per unit for good Y and Qy is the quantity demanded of good Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1180"
    },
    "1181": {
        "tables": [
            "| Assets                                         |   |   |   |   |\n|------------------------------------------------|---|---|---|---|\n| Current assets                                 |   |   |   |   |\n| Cash and cash equivalents 0                    | 5 | 7 |   |   |\n| Marketable securities 5                        | 0 | 2 |   |   |\n| Accounts receivable, net 5                     | 15|12 |   |   |\n| Inventories 15                                 | 20|16 |   |   |\n| Prepaid expenses 5                             | 15|11 |   |   |\n| Total current assets 35                        | 55|48 |   |   |\n| Property, plant,and equipment, net 40          | 35|37 |   |   |\n| Goodwill 25                                    |  0| 8 |   |   |\n| Other assets 0                                 | 10| 7 |   |   |\n| Total assets 100                               |100|100|   |   |\n| Liabilities and Shareholders' Equity           |   |   |   |   |\n|                                                |   |   |   |   |\n| Accounts payable, Short-term debt              |10 & 10, 25 & 10 & 15| | | |\n| Accrued expenses                               |   |0, 5, 3      |   |   |\n| Total current liabilities                      |   |35, 25, 28   |   |   |\n| Long-term debt                                 |   |45, 20, 28   |   |   |\n| Other non-current liabilities                  |   |0, 10, 7     |   |   |\n| Total liabilities                              |   |80, 55, 63   |   |   |\n| Total shareholders' equity, total liabilities and shareholders' equity | |20 & 45 & 37, 100 & 100 & 100 | | |"
        ],
        "question": "In reference to Exhibit 1: Common-Size Balance Sheets for Corporation X, Corporation Y, and Sector Average, what is the financial leverage ratio for Corporation Y?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1181"
    },
    "1182": {
        "tables": [],
        "question": "A put option from Europe possesses the following traits: S0 = $50; X = $45; r = 5%; T = 1 year; and \u03c3 = 25%. Utilizing the BSM formula, could you determine which value is closest to the put's value? Here are some values for reference: N(-0.78644) = 0.2158, N(-0.74644) = 0.2266, N(-0.49644) = 0.3085, N(-0.56644) = 0.2855.",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1182"
    },
    "1183": {
        "tables": [],
        "question": "Venture Holdings is a hedge fund that started with $250 million in capital. Venture charges a 2% management fee based on assets managed at the end of the year, and a 20% incentive fee if their returns exceed an 8% benchmark in its first year. Venture experienced a 16% increase in its first year. Let's assume that the management fees are calculated using the end-of-period valuation. What would be the net return for the investor, assuming that the performance fee is calculated after deducting the management fee?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1183"
    },
    "1184": {
        "tables": [
            "|                                   |        |\n|-----------------------------------|--------|\n| Net income                        | $55,000|\n| Depreciation                      | $60,000|\n| Taxes paid                        | $25,000|\n| Interest paid                     | $5,000 |\n| Dividends paid                    | $10,000|\n| Cash received from sale of company building | $40,000|\n| Issuance of preferred stock       | $45,000|\n| Repurchase of common stock        | $20,000|\n| Purchase of machinery             | $20,000|\n| Issuance of bonds                 | $40,000|\n| Debt retired through issuance of common stock | $45,000|\n| Paid off long-term bank borrowings | $15,000|\n| Profit on sale of building        | $15,000|"
        ],
        "question": "Assuming Cash flow from investing activities as per U.S. GAAP is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1184"
    },
    "1185": {
        "tables": [
            "|    |    | Longevity Bond |   |\n|----|----|---------------|---|\n|    |    | No Default    | Default |\n| Market Returns | 20% Increase | 61% | 1% |\n|                | 20% Decrease | 35% | 3% |"
        ],
        "question": "A fund manager is evaluating if the 1-year default probability of a longevity bond provided by a life assurance corporation is not related to equity market returns. The fund manager establishes the following probability matrix using 1-year probabilities from the initial investigation: With the data in the table, what is the likelihood that the longevity bond will default in 1 year considering the market declines by 20% over 1 year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1185"
    },
    "1186": {
        "tables": [],
        "question": "If a population with a variance of 2.45 was used to compute a sample mean and the sample size is 40, what would be the standard error of this sample mean?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1186"
    },
    "1187": {
        "tables": [],
        "question": "At the start of the year, XY corporation purchased a new mini-computer for $35,000. The computer is predicted to be used for a decade and then resold for $1,000. Using the double-declining-balance method, what is the declared depreciation expense in the third year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1187"
    },
    "1188": {
        "tables": [],
        "question": "John is interested in purchasing a 3-year bond that has a coupon rate of 5%, paid yearly. The spot rates are as follows: 1-year spot rate is 4%; 2-year spot rate is 4.5%; 3-year spot rate is 5%. What is the bond's price?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1188"
    },
    "1189": {
        "tables": [],
        "question": "Suppose there exists a bond with an annual modified duration of 8.05 and an annual convexity of 58.32. What is the anticipated percentage change in price if the yield-to-maturity of the bond rises by 20 basis points?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1189"
    },
    "1190": {
        "tables": [
            "|     |     |\n| --- | --- |\n| Exhibit 1 10-Year Trailing Risk-Adjusted Performance |     |\n| Average annual return | 8.20% |\n| Minimum acceptable return (MAR) | 5.00% |\n| Sharpe ratio | 0.95 |\n| Sortino ratio | 0.87 |"
        ],
        "question": "According to the provided table, what is the target semideviation for the investment portfolio?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1190"
    },
    "1191": {
        "tables": [],
        "question": "What will the mean absolute deviation be when referring to the range of 1-10?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1191"
    },
    "1192": {
        "tables": [],
        "question": "Thompson is a tax consultant, providing tax-related guidance to individual clients. One of his clients is Jennifer, an American citizen residing within the U.S. Jennifer recently became the owner of AAPL shares, left to her by a deceased relative who was also a U.S. resident. The U.S. uses the \"step-up\" in basis at death system. The shares were originally purchased 20 years ago at a cost of $15,000 (inclusive of commissions and other costs). When the relative passed away, the market value of the AAPL stock was $220,000, and Jennifer just sold these shares for $190,000. Jennifer\u2019s tax rate for capital gains is 20%. The tax obligation from the sale of the AAPL shares is:",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1192"
    },
    "1193": {
        "tables": [],
        "question": "The cost of a three-year zero-coupon bond from the government is $85.16, while a four-year bond of the same type is $79.81. Can you calculate the one-year implied forward rate from the third to the fourth year?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1193"
    },
    "1194": {
        "tables": [],
        "question": "If a bond that has a face value of $100 matures in 10 years and pays a 4.5% coupon semiannually, is priced to yield 5.83%, and has a modified duration of 7.81. What is the approximate percentage price change for the bond if the bond's yield decreases by 0.25%?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Asset Classes & Derivatives",
        "split": "test",
        "p_id": "1194"
    },
    "1195": {
        "tables": [
            "| Component | Cost | Useful Life |\n|-----------|------|-------------|\n| A         | $500,000 | 10 years |\n| B         | $500,000 | 5 years  |"
        ],
        "question": "A business that aims to increase its earnings has invested $1,000,000 in a machine with two key parts, as seen in the provided chart. The machine's anticipated total lifespan is 10 years, and the business employs the straight-line technique of depreciation. How does the first year's depreciation expense calculated in accordance with the International Financial Reporting Standards (IFRS) compare to the one under the US GAAP?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1195"
    },
    "1196": {
        "tables": [],
        "question": "A portion of the financial statement of Alpha Enterprises is presented below: Assets at the end of 2015: $5,000 Revenues for the year: $1,750 Expenses for the year: $1,200 Distributions to owners: $250 Retained earnings at the conclusion of 2014: $2,000 Contributed capital at the conclusion of 2015: $800 What should be the liabilities of Alpha Enterprises at the end of 2015?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1196"
    },
    "1197": {
        "tables": [
            "| Security | Security Weight(%) | Expected Standard Deviation (%) |\n|----------|-------------------|--------------------------------|\n| 1        | 30                | 20                             |\n| 2        | 70                | 12                             |"
        ],
        "question": "If a fund manager constructs a portfolio with a standard deviation of 14.40%, what is the covariance between the two assets?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Portfolio Management & Strategy",
        "split": "test",
        "p_id": "1197"
    },
    "1198": {
        "tables": [
            "| Company | A  | B  | C  | D  | E  | F  |\n|---------|----|----|----|----|----|----|\n| Market  | 30 | 25 | 16 | 12 | 10 | 7  |\n| Share (%) | |  |  |  |  |  |"
        ],
        "question": "If Corporations D and F combined to form a new Entity, G, what would the three-company concentration ratio in the industry be considering that there are six corporations in the sector with respective market shares?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Market Analysis & Economics",
        "split": "test",
        "p_id": "1198"
    },
    "1199": {
        "tables": [],
        "question": "If John's Industries recently acquired a manufacturing machine for $60,000 which is predicted to produce an annual cash inflow of $25,000 for six years, and plans to depreciate the machine over six years for accounting reasons, while the tax authority calculates the machine's useful life to be 5 years. If we consider the tax rate to be 40% and the machines have no resale value. What would be the pretax income for John's Industries in the 6th year using the straight-line method?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Accounting",
        "split": "test",
        "p_id": "1199"
    },
    "1200": {
        "tables": [],
        "question": "John thinks that the average cost of the commercial residential property is more than $155,000. The population standard deviation is $25,000. A random sample of 36 commercial residential properties in the region has an average cost of $159,750. John carry out the hypothesis test at a 1% significance level. What is the value of the computed test statistic?",
        "python_solution": "",
        "ground_truth": null,
        "topic": "Quantitative Analysis & Valuation",
        "split": "test",
        "p_id": "1200"
    }
}