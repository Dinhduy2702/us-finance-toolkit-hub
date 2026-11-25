/**
 * US SmartMoney Hub - Central Ecosystem Configuration
 * Update any Gumroad, Extension Store, or YouTube The Ledger URL here in 1 place.
 */
window.HUB_CONFIG = {
  brand: {
    name: "US SmartMoney Hub",
    subtitle: "2026 Free US Calculators, Sheets OS & Extensions"
  },
  youtubeLedger: {
    label: "Watch The Ledger on YouTube",
    url: "" // AGY 3 dien link kenh YouTube The Ledger khi tao xong
  },
  decisionFinder: [
    {
      question: "Comparing a job offer in California vs. Texas?",
      targetName: "SmartMoney US · 50-State Paycheck",
      url: "https://dinhduy2702.github.io/us-smart-money-calculators/#paycheck"
    },
    {
      question: "Paying 24%+ APR on credit cards?",
      targetName: "DebtFree US · Snowball & 0% Transfer",
      url: "https://dinhduy2702.github.io/us-debt-free-planner/#planner"
    },
    {
      question: "Making $80k+ freelance and wondering about S-Corp?",
      targetName: "SoloTax US · LLC vs. S-Corp Optimizer",
      url: "https://dinhduy2702.github.io/us-solotax-planner/#scorp"
    },
    {
      question: "Debating Rent vs. Buy or underwriting a BRRRR deal?",
      targetName: "PropYield US · Rental & BRRRR Analyzer",
      url: "https://dinhduy2702.github.io/us-propyield-analyzer/#rentbuy"
    },
    {
      question: "Planning early retirement before age 59.5?",
      targetName: "RetireSmart US · Coast FIRE & Roth Ladder",
      url: "https://dinhduy2702.github.io/us-retiresmart-planner/#ladder"
    }
  ],
  calculators: [
    {
      id: "smartmoney",
      badge: "5 Tools · IRS 2026",
      category: "web",
      tags: "paycheck tax 50 states compound s&p 500 mortgage auto loan 1099 freelance",
      title: "SmartMoney US — 50-State Tax & Wealth Suite",
      summary: "Compare take-home pay across any 2 US states, inspect 2026 federal tax brackets, model S&P 500 compounding, mortgage PITI, auto 20/4/10 rule, and 1099 quarterly taxes.",
      highlights: [
        "Side-by-side 50-state paycheck comparison + 401(k)/HSA tax shield",
        "Mortgage Extra Payment & 28/36 Reverse Max Home Price",
        "Year-by-year CSV schedules, Share Link URLs & clean PDF print"
      ],
      url: "https://dinhduy2702.github.io/us-smart-money-calculators/"
    },
    {
      id: "debtfree",
      badge: "3 Tools · Zero Signup",
      category: "web",
      tags: "debt snowball avalanche credit card payoff 0% balance transfer consolidation fico utilization",
      title: "DebtFree US — Credit Card Payoff & 0% Transfer Planner",
      summary: "Compare Debt Avalanche vs. Snowball across multiple cards, reverse-calculate your target debt-free date, and test 0% APR balance transfers vs. consolidation loans.",
      highlights: [
        "Multi-card payoff simulator saved locally in browser (zero account)",
        "3-Way decision table: Keep Cards vs. 0% Transfer vs. Consolidation",
        "Credit utilization FICO meter (30% & 10% payoff targets)"
      ],
      url: "https://dinhduy2702.github.io/us-debt-free-planner/"
    },
    {
      id: "solotax",
      badge: "3 Tools · Solopreneurs",
      category: "web",
      tags: "llc s-corp solo 401k sep ira freelance hourly rate w-2 tax savings 1099",
      title: "SoloTax US — LLC vs. S-Corp & Solo 401(k) Optimizer",
      summary: "Calculate real S-Corp net savings after payroll and Form 1120-S CPA overhead, max 2026 Solo 401(k) vs. SEP-IRA limits, and reverse-price your freelance hourly rate.",
      highlights: [
        "Subtracts real Gusto payroll, CPA 1120-S & state fees for true Break-Even",
        "Separates Sole Prop (Schedule C) vs. S-Corp (W-2 Box 1) Solo 401(k) math",
        "Freelance hourly & day rate reverse calculator from target W-2 salary"
      ],
      url: "https://dinhduy2702.github.io/us-solotax-planner/"
    },
    {
      id: "propyield",
      badge: "3 Tools · Zero Paywall",
      category: "web",
      tags: "rent vs buy rental property cash flow cap rate dscr brrrr refinance real estate",
      title: "PropYield US — Rent vs. Buy, Rental & BRRRR Analyzer",
      summary: "100% free alternative to paywalled real estate analyzers: Rent vs. Buy with S&P 500 opportunity cost, Rental NOI/DSCR + Reverse Max Offer Price, and BRRRR 75% LTV Refi.",
      highlights: [
        "Rent vs. Buy break-even including 6% selling fees & investment returns",
        "Rental underwriting (Cap Rate, CoC, DSCR >= 1.25x) + Max Offer Price",
        "Full BRRRR Buy-Rehab-Rent-Refinance Infinite Return simulator"
      ],
      url: "https://dinhduy2702.github.io/us-propyield-analyzer/"
    },
    {
      id: "retiresmart",
      badge: "3 Tools · Early Retirement",
      category: "web",
      tags: "fire coast fire roth conversion ladder traditional 401k retirement tax",
      title: "RetireSmart US — FIRE, Coast FIRE & Roth Ladder Planner",
      summary: "Map your Lean, Regular, Fat & Coast FIRE numbers, compare Roth vs. Traditional 401(k) tax arbitrage, and build a penalty-free 5-Year Roth Conversion Ladder.",
      highlights: [
        "Coast FIRE age + Reverse Monthly Savings to retire at your target age",
        "Equal pre-tax budget Roth vs. Traditional 401(k) break-even tax check",
        "Year-by-year 5-Year Roth Conversion Ladder schedule with CSV export"
      ],
      url: "https://dinhduy2702.github.io/us-retiresmart-planner/"
    }
  ],
  sheetsOs: [
    {
      id: "os-wealth",
      badge: "Google Sheets · Free Lite + Pro",
      category: "sheets",
      tags: "personal finance wealth budget net worth fire 50/30/20 google sheets",
      title: "US Personal Finance & Wealth OS (2026 Edition)",
      summary: "All-in-one 50/30/20 paycheck budget, monthly debt snowball tracker, live FIRE countdown, and automated net worth dashboard in Google Sheets.",
      url: "", // AGY 5 dien link Gumroad SP #2 khi xong
      modules: [
        "50-State Paycheck & 50/30/20 Monthly Cash-Flow Allocator",
        "Automated Debt Snowball & Avalanche Payoff Rollover Tracker",
        "Net Worth Dashboard combining 401(k), Roth IRA, Brokerage & Home Equity",
        "Live FIRE & Coast FIRE progress gauge with 4% Safe Withdrawal target"
      ]
    },
    {
      id: "os-freelance",
      badge: "Google Sheets · 1099 & S-Corp",
      category: "sheets",
      tags: "freelancer 1099 tax os schedule c quarterly irs s-corp bookkeeping",
      title: "US Freelancer 1099 & S-Corp Tax OS (2026 Edition)",
      summary: "Schedule C expense ledger, $0.70/mi business mileage log, IRS 1040-ES quarterly tax vault, and S-Corp break-even profit monitor.",
      url: "", // AGY 5 dien link Gumroad SP #4 khi xong
      modules: [
        "Client Invoice & Schedule C Business Write-Off Ledger",
        "Automated 2026 IRS 1040-ES Quarterly Tax Vault (Apr/Jun/Sep/Jan)",
        "S-Corp Break-Even Profit Alert & W-2 Salary Ratio Tracker",
        "Solo 401(k) Employee + Employer Contribution Limit Monitor"
      ]
    },
    {
      id: "os-realestate",
      badge: "Google Sheets · Investors",
      category: "sheets",
      tags: "real estate brrrr rental property deal tracker schedule e landlord",
      title: "US Real Estate & BRRRR Deal Tracker OS (2026 Edition)",
      summary: "Compare up to 20 rental properties side by side, track BRRRR rehab budgets, DSCR ratios, CapEx reserves, and Schedule E landlord expenses.",
      url: "", // AGY 5 dien link Gumroad khi xong
      modules: [
        "Multi-Property Deal Pipeline (Cap Rate, CoC, DSCR & 1% Rule Scoring)",
        "BRRRR Rehab Budget vs. Actual Variance & 75% LTV Refi Calculator",
        "Rent Roll, Vacancy & CapEx Reserve Health Dashboard",
        "Tax-Ready IRS Schedule E Annual Income & Expense Summary"
      ]
    },
    {
      id: "os-youtube",
      badge: "Google Sheets · Live on Gumroad",
      category: "sheets",
      tags: "youtube creator faceless channel empire os dashboard apps script",
      title: "YouTube & Faceless Channel Empire OS (2026 Edition)",
      summary: "Production pipeline, RPM/revenue analytics, Shorts-to-Long tracking, and automated Apps Script workflows for multi-channel creators.",
      url: "https://897833387907.gumroad.com/l/youtube-empire-os-2026",
      modules: [
        "Multi-Channel Production Kanban & Upload Calendar",
        "RPM, Sponsorship & Affiliate Revenue Rollup Dashboard",
        "Included .xlsx, Google Sheets /copy link & Apps Script automation"
      ]
    }
  ],
  extensions: [
    {
      id: "ext-sheetsnap",
      badge: "Edge & Firefox · $0 Free",
      category: "extensions",
      tags: "sheetsnap extension google sheets table clip csv export",
      title: "SheetSnap — 1-Click Web Table to Google Sheets Clipper",
      summary: "Capture financial tables, mortgage rate sheets, or dividend data from any webpage straight into clean CSV or Google Sheets format.",
      url: "", // AGY 5 dien link Edge/Firefox Add-on khi duyet store
      modules: [
        "Detects HTML tables on any financial or real estate listing page automatically",
        "Cleans currency symbols and exports clean CSV or clipboard TSV in 1 click",
        "100% local processing — zero tracking, zero account required"
      ]
    },
    {
      id: "ext-tubepulse",
      badge: "Edge & Firefox · $0 Free",
      category: "extensions",
      tags: "tubepulse extension youtube analytics rpm outlier score creator",
      title: "TubePulse — YouTube Outlier & Finance Niche Analyzer",
      summary: "Spot breakout videos, view-to-subscriber outlier ratios, and high-RPM keyword tags directly on YouTube search pages.",
      url: "", // AGY 5 dien link Edge/Firefox Add-on khi duyet store
      modules: [
        "Instant Views-to-Subscribers Outlier Score badge on every video card",
        "1-click metadata, publish velocity & tag copy for topic research",
        "Lightweight zero-bloat side panel for Edge and Firefox"
      ]
    },
    {
      id: "ext-billsnap",
      badge: "Edge & Firefox · $0 Free",
      category: "extensions",
      tags: "billsnap extension subscription bill tracker expense budget",
      title: "BillSnap — Subscription & Recurring Bill Reminder",
      summary: "Log recurring SaaS, credit card annual fees, and 0% APR promo end dates locally in your browser so you never get hit with surprise charges.",
      url: "", // AGY 5 dien link Edge/Firefox Add-on khi duyet store
      modules: [
        "Countdown alerts for 0% APR balance transfer deadlines & free trials",
        "Annualized cost view showing what small monthly bills cost per year",
        "Exports clean CSV straight into US Personal Finance & Wealth OS"
      ]
    }
  ]
};
