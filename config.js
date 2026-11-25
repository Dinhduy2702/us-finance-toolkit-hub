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
    url: "https://www.youtube.com/@TheLedgerCapital"
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
    },
    {
      id: "equityoffer",
      badge: "3 Tools · Tech & RSU Comp",
      category: "web",
      tags: "job offer comparison rsu stock options vesting 22% withholding tax salary negotiation relocation",
      title: "EquityOffer US — Job Offer, RSU Tax & Negotiation Planner",
      summary: "Compare 2 US job offers after 50-state taxes (Base + Bonus + 4-Year RSU Vesting + 401k Match), calculate RSU 22% withholding gaps, and reverse-calculate relocation salary.",
      highlights: [
        "4-year side-by-side Offer A vs. Offer B after Federal, FICA & 50-State taxes",
        "Exposes the IRS 22% RSU supplemental tax underwithholding shortfall",
        "State-to-state relocation & counter-offer negotiation script generator"
      ],
      url: "https://dinhduy2702.github.io/us-equity-offer-calculator/"
    },
    {
      id: "capgain",
      badge: "3 Tools · 2026 IRS & 1031",
      category: "web",
      tags: "capital gains tax stocks crypto real estate niit 3.8% tax loss harvesting section 121 1031 exchange short term long term",
      title: "CapGain US — Stocks, Crypto & Real Estate Capital Gains Tax",
      summary: "Calculate 2026 Short-Term vs. Long-Term capital gains (0%/15%/20%), 3.8% NIIT surtax, 50-state taxes, Tax-Loss Harvesting, Section 121 ($250k/$500k), 1031 Exchange, and Wait-vs-Sell breakeven drop.",
      highlights: [
        "Stocks & Crypto LTCG vs. STCG + 3.8% NIIT + 50 States + Tax-Loss Harvesting",
        "Real Estate Section 121 ($250k/$500k), 25% Depreciation Recapture & 1031 Exchange",
        "Wait-vs-Sell Reverse: exact max price drop absorbed while waiting for Day 366"
      ],
      url: "https://dinhduy2702.github.io/us-capgain-tax-calculator/"
    },
    {
      id: "homemath",
      badge: "3 Tools · 2026 Mortgage & Refi",
      category: "web",
      tags: "mortgage calculator pmi auto drop 80% ltv property tax 50 states rent vs buy s&p 500 refinance break even extra payment",
      title: "HomeMath US — 2026 Mortgage, PMI Auto-Drop & Rent vs. Buy",
      summary: "True all-in monthly mortgage cost with 50-state property taxes, PMI auto-drop at 80% LTV & 30-yr SVG chart, Rent vs. Buy vs. S&P 500 brutal math, and Refinance break-even.",
      highlights: [
        "All-in PITI + 50-state property tax + PMI that automatically terminates at 80% LTV",
        "Rent vs. Buy brutal math: 5/10/30-yr Net Worth vs. S&P 500 + Break-Even Year",
        "3-way Refinance Break-Even & Extra Monthly Principal payoff simulator"
      ],
      url: "https://dinhduy2702.github.io/us-mortgage-rent-vs-buy-calculator/"
    }
  ],
  sheetsOs: [
    {
      id: "os-wealth",
      badge: "Google Sheets · $0 Lite / $19 Full",
      category: "sheets",
      tags: "personal finance wealth budget net worth fire 50/30/20 google sheets gumroad",
      title: "US Personal Finance & Wealth OS (2026 Edition)",
      summary: "All-in-one 50/30/20 paycheck budget, monthly debt snowball tracker, live FIRE countdown, and automated net worth dashboard in Google Sheets + Apps Script.",
      ctaLabel: "Get Free Lite / $19 Full &rarr;",
      url: "https://897833387907.gumroad.com/l/us-personal-finance-wealth-os-2026",
      modules: [
        "50-State Paycheck & 50/30/20 Monthly Cash-Flow Allocator",
        "Automated Debt Snowball & Avalanche Payoff Rollover Tracker",
        "Net Worth Dashboard combining 401(k), Roth IRA, Brokerage & Home Equity",
        "Live FIRE & Coast FIRE progress gauge with 4% Safe Withdrawal target"
      ]
    },
    {
      id: "os-freelance",
      badge: "Google Sheets · $0 Lite / $24 Full",
      category: "sheets",
      tags: "freelancer 1099 tax os schedule c quarterly irs s-corp bookkeeping gumroad",
      title: "US Freelancer 1099 Tax & P&L OS (2026 Edition)",
      summary: "Schedule C expense ledger, $0.70/mi business mileage log, IRS 1040-ES quarterly tax vault, and S-Corp break-even profit monitor + Apps Script.",
      ctaLabel: "Get Free Lite / $24 Full &rarr;",
      url: "https://897833387907.gumroad.com/l/us-freelancer-1099-tax-pnl-os-2026",
      modules: [
        "Client Invoice & Schedule C Business Write-Off Ledger",
        "Automated 2026 IRS 1040-ES Quarterly Tax Vault (Apr/Jun/Sep/Jan)",
        "S-Corp Break-Even Profit Alert & W-2 Salary Ratio Tracker",
        "Solo 401(k) Employee + Employer Contribution Limit Monitor"
      ]
    },
    {
      id: "os-realestate",
      badge: "Google Sheets · $0 Lite / $24 Full",
      category: "sheets",
      tags: "real estate brrrr rental property deal tracker schedule e landlord gumroad",
      title: "US Rental Property Schedule E & BRRRR OS (2026 Edition)",
      summary: "Compare up to 20 rental properties side by side, track BRRRR rehab budgets, 75% LTV refi, DSCR ratios, CapEx vault, and Schedule E landlord expenses.",
      ctaLabel: "Get Free Lite / $24 Full &rarr;",
      url: "https://897833387907.gumroad.com/l/us-rental-property-schedule-e-brrrr-os-2026",
      modules: [
        "Multi-Property Deal Pipeline (Cap Rate, CoC, DSCR & 1% Rule Scoring)",
        "BRRRR Rehab Budget vs. Actual Variance & 75% LTV Refi Calculator",
        "Rent Roll, Vacancy & CapEx Reserve Vault Dashboard",
        "Tax-Ready IRS Schedule E Annual Income & Expense Summary"
      ]
    },
    {
      id: "os-youtube",
      badge: "Google Sheets · $0 Lite / $19 Full",
      category: "sheets",
      tags: "youtube creator faceless channel empire os dashboard apps script gumroad",
      title: "YouTube & Faceless Channel Empire OS (2026 Edition)",
      summary: "Production pipeline, RPM/revenue analytics, Shorts-to-Long tracking, and automated Apps Script workflows for multi-channel creators.",
      ctaLabel: "Get Free Lite / $19 Full &rarr;",
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
      badge: "Edge & Firefox Pro · $15 Lifetime",
      category: "extensions",
      tags: "sheetsnap extension google sheets table clip csv export youtube transcript pro",
      title: "SheetSnap Pro — 1-Click Web Table & YT Transcript Clipper",
      summary: "Capture financial tables, mortgage rate sheets, or YouTube transcripts straight into clean CSV / Google Sheets with instant Gumroad License Key.",
      ctaLabel: "Get Pro ($15 Lifetime) &rarr;",
      url: "https://897833387907.gumroad.com/l/sheetsnap-yt-transcript-pro",
      modules: [
        "Detects HTML tables & YouTube transcripts automatically in 1 click",
        "Cleans currency symbols and exports clean CSV or clipboard TSV instantly",
        "100% local MV3 Edge/Firefox package — one-time $15 lifetime license"
      ]
    },
    {
      id: "ext-tubepulse",
      badge: "Edge & Firefox Pro · $15 Lifetime",
      category: "extensions",
      tags: "tubepulse extension youtube thumbnail injector mobile 390px readability hidden seo tags rpm estimator pro",
      title: "TubePulse Pro — YouTube Thumbnail Injector & 8-Niche US RPM",
      summary: "YouTube Thumbnail Injector, Mobile 390px Readability Check, Hidden SEO Tags & 8-Niche US RPM Estimator directly inside Edge & Firefox.",
      ctaLabel: "Get Pro ($15 Lifetime) &rarr;",
      url: "https://897833387907.gumroad.com/l/tubepulse-yt-pro",
      modules: [
        "Live YouTube Thumbnail Injector & Mobile 390px Readability Check on real feeds",
        "Extracts hidden video SEO tags and competitor keyword structures in 1 click",
        "Built-in 8-Niche US RPM & revenue estimator + $15 Lifetime License Key"
      ]
    },
    {
      id: "ext-billsnap",
      badge: "Edge & Firefox Pro · $15 Lifetime",
      category: "extensions",
      tags: "billsnap extension freelance timer toolbar badge 1099 tax vault client invoice pdf schedule c csv pro",
      title: "BillSnap Pro — Local Freelance Timer & 1099 Tax Vault",
      summary: "Local Freelance Timer, Live Toolbar Badge, Auto 1099 Tax Vault & 1-Click Client Invoice PDF / Schedule C CSV — 100% private.",
      ctaLabel: "Get Pro ($15 Lifetime) &rarr;",
      url: "https://897833387907.gumroad.com/l/billsnap-freelance-pro",
      modules: [
        "1-click Local Freelance Timer with Live Toolbar Badge tracking active sessions",
        "Auto 1099 Tax Vault calculating quarterly set-aside amounts on every billable hour",
        "1-Click Client Invoice PDF & Schedule C CSV export + $15 Lifetime License Key"
      ]
    }
  ],
  bundles: [
    {
      id: "bundle-money-1099",
      badge: "Save $14 · $29 Bundle",
      category: "bundles",
      tags: "bundle money 1099 tax personal finance wealth freelancer os save 14",
      title: "US Money & 1099 Tax Bundle 2026 ($29)",
      summary: "Includes FULL US Personal Finance & Wealth OS ($19) + FULL US Freelancer 1099 Tax & P&L OS ($24) — everything W-2 earners & solopreneurs need.",
      ctaLabel: "Get Bundle ($29 · Save $14) &rarr;",
      url: "https://897833387907.gumroad.com/l/us-money-1099-tax-bundle-2026",
      modules: [
        "Full US Personal Finance & Wealth OS 2026 ($19 value)",
        "Full US Freelancer 1099 Tax & P&L OS 2026 ($24 value)",
        "Instant Google Sheets /copy links, .xlsx backups & Apps Script automation"
      ]
    },
    {
      id: "bundle-yt-creator",
      badge: "Save $14 · $35 Bundle",
      category: "bundles",
      tags: "bundle youtube creator power empire os sheetsnap tubepulse pro save 14",
      title: "YouTube Creator Power Bundle 2026 ($35)",
      summary: "Includes FULL YouTube Empire OS ($19) + SheetSnap Pro ($15) + TubePulse Pro ($15) with lifetime extension licenses.",
      ctaLabel: "Get Bundle ($35 · Save $14) &rarr;",
      url: "https://897833387907.gumroad.com/l/youtube-creator-power-bundle-2026",
      modules: [
        "Full YouTube & Faceless Channel Empire OS 2026 ($19 value)",
        "SheetSnap Pro + TubePulse Pro MV3 Extensions ($30 combined value)",
        "Zero monthly subscriptions — one-time $35 lifetime creator stack"
      ]
    },
    {
      id: "bundle-mega-39",
      badge: "Best Value · Save $14 · $39",
      category: "bundles",
      tags: "mega bundle creator wealth youtube empire personal finance sheetsnap pro save 14",
      title: "Creator & Wealth Mega-Bundle 2026 ($39)",
      summary: "Includes FULL YouTube Empire OS ($19) + FULL US Personal Finance & Wealth OS ($19) + SheetSnap Pro ($15) — build revenue and compound wealth.",
      ctaLabel: "Get Mega-Bundle ($39 · Save $14) &rarr;",
      url: "https://897833387907.gumroad.com/l/creator-wealth-mega-bundle-2026",
      modules: [
        "Full YouTube & Faceless Channel Empire OS 2026 ($19 value)",
        "Full US Personal Finance & Wealth OS 2026 ($19 value)",
        "SheetSnap Pro Lifetime License ($15 value) — save $14 total"
      ]
    }
  ]
};
