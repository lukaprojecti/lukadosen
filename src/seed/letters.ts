import type { Block } from './lexical'

export type SeedLetter = {
  title: string
  slug: string
  category: 'development' | 'architecture' | 'construction' | 'my-agency'
  excerpt: string
  publishedAt: string
  blocks: Block[]
}

/* ── Letter 1 ── */

const letter1: SeedLetter = {
  title: 'What oil shocks do to real estate',
  slug: 'what-oil-shocks-do-to-real-estate',
  category: 'development',
  excerpt:
    'The Strait of Hormuz is closed. Here is the documented sequence from oil shock to property values — and a five-point check for any project or asset you are evaluating now.',
  publishedAt: '2026-03-16',
  blocks: [
    {
      type: 'p',
      text: 'The Strait of Hormuz is closed. Here is the documented sequence from oil shock to property values — and a five-point check for any project or asset you are evaluating now.',
    },
    { type: 'p', text: 'On March 9th, 2026, the Strait of Hormuz got closed.' },
    {
      type: 'p',
      text: 'Roughly 20 million barrels a day flow through that passage — about 20% of global supply. When it shut, WTI posted its largest weekly gain in futures market history.',
    },
    { type: 'p', text: 'Most people looked at pump prices.' },
    {
      type: 'p',
      text: 'If you are in real estate, the more relevant question is: what happens next?',
    },

    { type: 'h4', text: 'Oil does not stop only at petrol stations' },
    { type: 'p', text: 'The chain is documented:' },
    {
      type: 'p',
      text: 'Oil spikes → construction materials rise → broad inflation picks up → central banks hold rates higher → mortgage costs stay elevated → property values compress → transaction volumes slow.',
    },
    {
      type: 'p',
      text: 'Germany ran through this in real time after 2022. Nominal house prices fell 3.94% that year, then a further 7.11% in 2023 — the sharpest correction since systematic price recording began. Adjusted for inflation, the real losses were 11.53% and 10.30%. By end of 2024, apartments still sat 18.2% below their 2022 peak in real terms.',
    },
    { type: 'p', text: 'The chain is not a forecast. It is a precedent.' },

    { type: 'h4', text: 'The market dropped its hedge' },
    {
      type: 'p',
      text: 'After 2022, Europe moved with urgency. Heat pump orders surged. Governments launched subsidy programmes. The narrative was clear: the continent was cutting its fossil fuel dependence for good.',
    },
    { type: 'p', text: 'Then the urgency faded.' },
    {
      type: 'p',
      text: 'In 2024, European heat pump sales fell 22% across 19 countries. Germany was down 48%. The drivers were predictable: subsidy schemes became unpredictable, electricity stayed expensive relative to gas, and cost-of-living pressure pushed buyers toward cheaper upfront options.',
    },
    {
      type: 'p',
      text: 'The UK took the opposite path. Sales rose 63% in 2024, backed by consistent grants and a firm 2035 phase-out commitment. The contrast is useful: consistent policy produces different outcomes.',
    },
    {
      type: 'p',
      text: 'The result: millions of planned retrofits were cancelled. Then the shock arrived.',
    },
    {
      type: 'p',
      text: 'Investors who treated energy upgrades as discretionary environmental spending — rather than operational risk management — are now absorbing the full, unmitigated cost of $100+ oil.',
    },

    { type: 'h4', text: 'Winners, losers, and the 9-month wave' },
    {
      type: 'p',
      text: 'Not every market suffers equally. The variable most commentary ignores: whether the local economy is a net energy exporter or importer.',
    },
    {
      type: 'p',
      text: 'In oil-exporting regions — Houston, Calgary, Abu Dhabi — a sustained price spike triggers closer to a local boom. Energy sector investment rises. Employment follows. Housing demand picks up. Research from the Federal Reserve Bank of Dallas shows house prices in these markets absorb up to 21% of the cumulative oil price effect over 20 quarters.',
    },
    {
      type: 'p',
      text: 'In net-importing economies — Europe, Japan, most of the US — the opposite occurs. Capital drains out. Consumer income shrinks. Transaction volumes fall.',
    },
    {
      type: 'p',
      text: 'A reader evaluating assets in Texas is asking a different question than one in Munich or Zurich.',
    },
    { type: 'p', text: 'For developers, the worst has not arrived yet.' },
    {
      type: 'p',
      text: 'Raw material prices spike immediately. But construction output prices — the actual bids contractors submit — lag by 6 to 9 months. The 2022 precedent: steel rose 40.4%, flat glass 49.3%, bitumen 15 to 25% for every $10 per barrel increase in crude.',
    },
    {
      type: 'p',
      text: 'If you are running a feasibility study right now, your Q1 2026 cost assumptions are already stale. The full weight of this shock will show up in Q3 and Q4 contractor pricing.',
    },

    { type: 'h4', text: 'How the math changes' },
    {
      type: 'p',
      text: 'Properties with outdated energy systems just became riskier assets. Riskier assets get repriced.',
    },
    {
      type: 'p',
      text: 'In European commercial real estate, top-tier energy-efficient properties already command capital value premiums of 16 to 25% over fossil-dependent equivalents. Nearly half of all real estate professionals globally now underwrite a brown discount — treating fossil fuel dependency as a measurable risk factor, not an environmental preference.',
    },
    {
      type: 'p',
      text: 'The operating cost gap between a fossil-heated property and a heat pump system runs roughly $2,000 per year at baseline oil prices. At $120 per barrel sustained, that gap widens to over $3,500 annually. Model that across a typical hold period and the conversation around acquisition price changes.',
    },
    {
      type: 'p',
      text: 'There is also a regulatory dimension that does not depend on oil prices at all. Austria has banned all fossil boilers. Ireland prohibited new oil and gas heating installations in 2025. The UK is banning fossil boilers in new builds this year. A property still running on a fossil system is carrying a compliance risk that compounds quietly — until it does not.',
    },

    { type: 'h4', text: 'The Energy Exposure Check' },
    {
      type: 'p',
      text: 'These five questions apply to any property, project, or market you are currently evaluating.',
    },
    {
      type: 'p',
      text: '**1. What powers the building?** Identify the heating system. Model operating costs at $100+ oil sustained for 12 months against a heat pump scenario. The $2,000 to $3,500 annual gap compounds quickly across a hold period.',
    },
    {
      type: 'p',
      text: '**2. What powers the construction?** Identify which materials in your budget are petroleum-derived or transport-heavy — cement, bitumen, plastics, insulation. Check your contingencies against the 6 to 9 month bid lag. What Q1 assumed will not match what Q3 bids say.',
    },
    {
      type: 'p',
      text: '**3. How fossil-dependent is your target market?** Switzerland sits at 52% fossil fuel dependency across its building stock. The UK near 98%. The US Northeast runs heavily on heating oil. High-dependency markets carry more downside when energy reprices.',
    },
    {
      type: 'p',
      text: '**4. Is your market an exporter or importer?** This is the variable most underwriting skips. Oil-exporting regions can see property demand increase during a shock. Net-importing regions absorb the cost. Know which side of that line your market sits on before drawing conclusions.',
    },
    {
      type: 'p',
      text: "**5. Where is regulation heading in 5 years?** Build and acquire to where code will be — not where it is today. A building that meets today's minimum standard may carry a compliance liability before your hold period ends.",
    },
    {
      type: 'p',
      text: 'This is the third major energy shock in four years. The post-pandemic supply crunch. Russia in 2022. Now the Strait of Hormuz. Each time, the impact on real estate is treated as a surprise.',
    },
    {
      type: 'p',
      text: 'The buildings we plan and acquire today will still be standing in 2050. The question worth sitting with: will our assumptions about what powers them hold up that long?',
    },
    {
      type: 'p',
      text: 'Are you running a live feasibility study or mid-project right now — and have you stress-tested your cost assumptions against Q3/Q4 contractor pricing? Reply and tell me where you are.',
    },
  ],
}

/* ── Letter 2 ── */

const letter2: SeedLetter = {
  title: 'While all eyes are on AI, construction is being overlooked.',
  slug: 'while-all-eyes-are-on-ai-construction-is-being-overlooked',
  category: 'construction',
  excerpt:
    'Office jobs are under real pressure. Meanwhile, profitable construction businesses are closing because their owners are retiring with no buyer. The opening most people are walking past.',
  publishedAt: '2026-03-23',
  blocks: [
    { type: 'p', text: 'AI is more capable than most people think. Deep research, cowork, agents are coming.' },
    {
      type: 'p',
      text: 'Which office jobs it will take. Which skills will still matter. Whether a university degree still makes sense. Whether the career path your parents told you to follow is still the path worth following.',
    },
    { type: 'p', text: 'The fear is real, and the data behind it cannot be overlooked. I get it.' },
    { type: 'p', text: 'But I want to point at something most people in this conversation are missing entirely.' },
    {
      type: 'p',
      text: 'While everyone is staring at the disruption, one of the most accessible business opportunities of this decade are quietly closing down. Not because it failed. Because its owner is retiring, and nobody is stepping in.',
    },
    { type: 'p', text: 'The fear is legitimate. But it is pointing people in the wrong direction.' },

    { type: 'h4', text: 'The office job market is genuinely under pressure.' },
    {
      type: 'ul',
      items: [
        '127,000 tech workers laid off in the US in 2025',
        'Amazon, Intel, Microsoft all cited AI explicitly when announcing cuts',
        'Graduate tech roles in the UK fell 46% in 2024, with a projected further 53% drop by 2026',
        'Displaced workers now spend an average of 6-7 months finding a new role',
      ],
    },
    {
      type: 'p',
      text: 'These are not struggling companies trimming costs. These are the most profitable businesses ever built, restructuring because software now handles what new hires used to do. The entry-level tier is being erased first.',
    },
    {
      type: 'p',
      text: 'If you are a high earner watching this happen around you, the instinct is to adapt — learn AI tools, upgrade your skills, stay relevant inside the system that is changing. That instinct makes sense.',
    },
    {
      type: 'p',
      text: 'But there is another instinct worth considering. What if the disruption in one direction creates a real opening somewhere else?',
    },

    { type: 'h4', text: 'The construction economy is running out of people.' },
    { type: 'p', text: 'While the office market contracts, the construction sector cannot find workers.' },
    {
      type: 'p',
      text: 'The US needs 723,000 new construction workers every year just to keep pace with current demand. The UK needs 251,500 by 2028. In Australia, the vacancy fill rate for trade jobs collapsed from 54% in 2020 to 29% in 2023 — meaning for every ten electrician or plumber postings, only three get filled.',
    },
    { type: 'p', text: 'This is not a temporary shortage. It is structural.' },
    {
      type: 'p',
      text: 'The generation that built these skills is retiring. In the UK, the average electrician leaves the workforce at 48. They take thirty years of knowledge with them. The pipeline of replacements was effectively closed for two decades while the cultural narrative pointed everyone toward a degree and a laptop.',
    },

    { type: 'h4', text: 'The earnings math has quietly flipped.' },
    {
      type: 'ul',
      items: [
        'Senior electrician in New York: $100,000–$120,000/year',
        'Marketing manager in New York: $94,000–$112,000/year',
        'Electrician automation risk: 22%',
        'Electrician student debt: zero',
      ],
    },
    {
      type: 'p',
      text: "Behind this sits demand that is not going away. New York's Local Law 97 mandates building emissions upgrades across thousands of properties. The EU Green Deal targets 30 million heat pump installations by 2030. Housing deficits across every major Western city guarantee construction demand regardless of what the broader economy does.",
    },
    { type: 'p', text: 'Scarcity of supply. Locked-in demand. Real pricing power.' },

    { type: 'h4', text: 'The opportunity is not to reinvent. It is to take over.' },
    { type: 'p', text: 'Here is where I think the conversation usually stops short.' },
    {
      type: 'p',
      text: 'Most people hear "trades" and picture a career change. Learning from scratch. Years of apprenticeship. That is not what I am pointing at.',
    },
    {
      type: 'p',
      text: 'The more interesting lens is the one of a businessman who looks at this structural gap and asks a different question: where are the businesses that already operate in this sector, and what happens to them when their owners retire?',
    },
    {
      type: 'p',
      text: 'The answer is uncomfortable. In Canada, 76% of small business owners plan to exit within the next decade. Only 9% have a formal succession plan. Across Europe the picture is similar. Profitable, solvent businesses built over decades are closing not because they failed, but because their owners are approaching retirement with no buyer in sight, no family member stepping in, and no real exit plan.',
    },
    { type: 'p', text: 'With them goes the knowledge. The client relationships. The team. The reputation built over thirty years.' },
    { type: 'p', text: 'This is the opening.' },
    {
      type: 'p',
      text: 'You do not need to know how to wire a building or install a heat pump. The technical expertise already exists inside the company. The job is to step in before the lights go out — to preserve that knowledge, modernize the operation, and build the systems that allow the business to grow beyond its founder.',
    },
    {
      type: 'p',
      text: 'One person brings the business thinking. The other brings the craft. That combination is what most of these businesses are missing.',
    },
    {
      type: 'p',
      text: 'There is one more layer worth mentioning. Many retiring owners hold the commercial property their business operates from. A well-structured acquisition can include a leaseback arrangement — one transaction, two simultaneous value plays. The market for this profile is thin simply because most aspiring entrepreneurs are not looking in this direction.',
    },
    {
      type: 'p',
      text: 'Low competition. Structural demand. Entry at a price that reflects the fact that most people still think entrepreneurship requires inventing something new.',
    },

    { type: 'h4', text: 'Here is what it can look like.' },
    {
      type: 'p',
      text: 'A regional HVAC and ventilation company in my neighborhood was founded with limited capital and no degree. Over roughly a decade it grew to 23 employees and CHF 7.5 million in annual revenue — about CHF 326,000 per employee, a level of operational efficiency most service businesses never reach.',
    },
    {
      type: 'p',
      text: 'No venture capital. No reinvention narrative. A physical service, executed consistently, in a market where demand never went away.',
    },
    {
      type: 'p',
      text: "In January 2023, the company was acquired by a listed Swiss building services group running a consolidation strategy across the fragmented regional market. The deal was structured in cash and shares, giving the founder participation in the acquiring group's future upside.",
    },
    {
      type: 'p',
      text: 'The business LKE Haustechnik did not need to disrupt anything. It needed to exist, reliably, in a market with real structural tailwinds.',
    },

    { type: 'h4', text: 'The quiet move most people are not making.' },
    { type: 'p', text: 'AI is genuinely changing the rules. I am not dismissing that.' },
    {
      type: 'p',
      text: 'But I think the fixation on adapting to the digital economy is pulling attention away from something older and, right now, arguably more valuable. Businesses built on physical skills, serving demand that will not disappear, are closing because their owners are retiring with nobody to pass them to.',
    },
    { type: 'p', text: 'That is a supply and demand tension. And supply/demand tensions have opportunities.' },
    {
      type: 'p',
      text: 'Building a business does not always mean starting from zero in a market that is already crowded. Sometimes the better move is stepping into something already built, in a sector most ambitious people are walking past.',
    },
    {
      type: 'p',
      text: 'If this made you think of something — a business you have noticed, an owner you know who is approaching retirement, or an idea you have been sitting on — hit reply. I would like to hear where your head goes.',
    },
  ],
}

/* ── Letter 3 ── */

const letter3: SeedLetter = {
  title: 'When does buying a home stop being an investment?',
  slug: 'when-does-buying-a-home-stop-being-an-investment',
  category: 'my-agency',
  excerpt:
    "Your parents built wealth by buying a home. You might build wealth by renting one. Here's why.",
  publishedAt: '2026-03-30',
  blocks: [
    {
      type: 'p',
      text: "Your parents built wealth by buying a home. You might build wealth by renting one. Here's why.",
    },
    { type: 'p', text: 'A young father came to me recently with land he had bought.' },
    { type: 'p', text: 'He had a clear vision. A home for his family. Three small children. A place they could grow into.' },
    { type: 'p', text: 'He wanted me to help him plan it.' },
    {
      type: 'p',
      text: 'We talked through the basics first. Budget. Timeline. What he wanted the house to feel like. The usual starting points.',
    },
    {
      type: 'p',
      text: 'But then I asked him about his broader financial picture. Not because I was being curious. Because the numbers matter when you are committing to settle down long term.',
    },
    { type: 'p', text: 'What I heard made me pause.' },
    {
      type: 'p',
      text: 'He had savings. He had a nice income. He had ambition. But almost all of his future liquidity was about to flow into this one asset. The land. The construction. The financing.',
    },
    { type: 'p', text: 'And then I ran a simple timeline in my head.' },
    {
      type: 'p',
      text: 'Three small children today. In 10 years, teenagers. In 15 years, they start going their way. In 20 years, he and his wife would likely be living in a large house built for five people. Alone.',
    },
    { type: 'p', text: 'That is when I realized something he had not considered yet.' },
    { type: 'p', text: 'This home might give him emotional stability. But it might also quietly prevent him from ever building real wealth.' },

    { type: 'h4', text: 'The Math That Changed' },
    { type: 'p', text: 'This is not just his situation.' },
    {
      type: 'p',
      text: 'This is a pattern I keep seeing across conversations with people in their 30s and early 40s. Stable income. Growing families. They feel the pressure to buy because that is what you are supposed to do.',
    },
    { type: 'p', text: 'But the market has shifted underneath them.' },
    { type: 'p', text: 'In most Western countries and growing metropolitan areas, the price-to-rent ratio is high.' },
    {
      type: 'p',
      text: 'A Price-to-Rent ratio tells you how many years of rent it would take to equal the purchase price of a property. Switzerland sits for reference at 39 years.',
    },
    { type: 'p', text: 'For context:' },
    {
      type: 'ul',
      items: [
        'Below 16 years: buying is generally cheaper than renting',
        '17 to 20 years: buying and renting are roughly equal',
        'Above 21 years: renting is more economical',
      ],
    },
    { type: 'p', text: 'What changed:' },
    {
      type: 'p',
      text: '**Prices decoupled from wages:** Twenty years ago, the median house price was 4–5 times median income. Today it is 6–7 times.',
    },
    {
      type: 'p',
      text: '**Demographics shifted:** Household sizes are shrinking. The average Swiss household today has 2.2 people. Thirty years ago it was 2.6. Yet the housing stock was built for larger families in the 1980s and 1990s.',
    },
    {
      type: 'p',
      text: '**Flexibility matters more:** Careers are less linear. Remote work opened new location options. The long term mortgage made sense when you stayed in one job, one city, one life structure for decades. That world is disappearing.',
    },
    {
      type: 'p',
      text: 'Your parents bought in a different world. Lower prices relative to income. Higher inflation eroding debt. Fewer investment alternatives.',
    },
    { type: 'p', text: 'For them, buying a home was both shelter and wealth building.' },
    { type: 'p', text: 'For you, it is probably one or the other.' },

    { type: 'h4', text: 'Two paths. Choose yours.' },
    { type: 'p', text: 'So I walked the young father through a different lens. Not the dream. The math.' },
    { type: 'p', text: '**Path A: Own Your Home, Lock Your Capital**' },
    { type: 'p', text: 'If he builds this home, here is what happens:' },
    {
      type: 'ul',
      items: [
        '20–25 years of capital locked in: The mortgage ties him to the location.',
        'Maintenance compounds: Typically 1% of property value annually in Switzerland. Property taxes. Insurance. Renovation cycles.',
        'Utilization drops: For the first 10–15 years, the house fits the family. Once the children leave, he holds a large, underutilized asset. Selling means transaction costs, emotional friction, timing risk. Staying means paying for space he no longer needs.',
        'Appreciation might not save him: Even if the home appreciates 2–3% annually, the opportunity cost of locking capital into one illiquid asset remains.',
      ],
    },
    { type: 'p', text: '**Path B: Rent Your Home, Invest Your Capital**' },
    { type: 'p', text: 'What if he rented instead? Not forever. Just strategically.' },
    {
      type: 'p',
      text: 'He could take the capital he would have deployed into construction and down payment — let us say CHF 250,000 — and split it.',
    },
    {
      type: 'p',
      text: 'Half into a small rental unit in a good location. Smaller properties in strong markets generate higher rental yields (4–6%). The tenant pays the mortgage. He builds equity without tying up his own liquidity.',
    },
    { type: 'p', text: 'Half into index funds yielding 6–8% annually. Passive. Diversified. Liquid.' },
    { type: 'p', text: 'Meanwhile, he rents a home for his family. Maybe CHF 2,500–3,500 per month. He pays that from his primary income.' },
    { type: 'p', text: 'But his wealth is working for him, not the other way around.' },
    {
      type: 'p',
      text: 'In 20 years: His rental property is (mostly) paid off by tenants. His fund portfolio has compounded. His net worth has grown faster than if he had paid down his own mortgage. And if his life changes, he has not been locked into one location, one asset, one bet.',
    },

    { type: 'h4', text: 'The Real Trade-Off' },
    { type: 'p', text: 'He does not get the emotional anchor of ownership. That is real. It matters.' },
    { type: 'p', text: 'But if his goal is financial security by retirement, the rent-and-invest path might get him there faster.' },
    { type: 'p', text: 'I was not telling him what to do. I was showing him the two paths.' },
    { type: 'p', text: 'One optimizes for lifestyle and stability.' },
    { type: 'p', text: 'The other optimizes for wealth and flexibility.' },

    { type: 'h4', text: 'Separate Living And Wealth Creation' },
    { type: 'p', text: 'Here is how I think about this decision.' },
    { type: 'p', text: 'Most people collapse two separate questions into one:' },
    { type: 'p', text: '**Question 1: Where do you want to live?**' },
    {
      type: 'p',
      text: 'This is about lifestyle. Stability. Raising a family in a specific place. Being part of a community. Having control over your space.',
    },
    { type: 'p', text: '**Question 2: How do you want to build wealth?**' },
    {
      type: 'p',
      text: 'This is about deploying capital efficiently. Maximizing return on equity. Staying liquid. Diversifying risk.',
    },
    { type: 'p', text: 'The mistake is assuming one asset can answer both questions optimally.' },
    { type: 'p', text: '**Consumption vs. Investment**' },
    {
      type: 'p',
      text: 'A home you live in is consumption. It provides utility. Shelter. Emotional security. But it does not generate cash flow. It costs you money every month, even if you own it outright. Maintenance. Taxes. Opportunity cost. If it appreciates, that appreciation is locked until you sell. And selling means transaction costs, timing risk, emotional friction.',
    },
    {
      type: 'p',
      text: 'A home someone else lives in is investment. It generates rental income. The tenant pays down the mortgage. You build equity without deploying your own liquidity. You can hold it as long as the numbers work, and sell when they do not. You are not emotionally attached to it. It is just an asset.',
    },
    { type: 'p', text: '**What This Looks Like in Practice**' },
    { type: 'p', text: 'If your goal is financial security, separate the two.' },
    { type: 'p', text: 'Live where it makes sense for your life. Rent if the Price-to-Rent ratio is high. Pay that cost from your income.' },
    {
      type: 'p',
      text: 'Invest where the numbers work. Small rental units in good locations. Index funds. Commercial real estate. Corporate structures that optimize for tax efficiency.',
    },
    { type: 'p', text: 'Let your lifestyle be funded by your cash flow. Let your wealth be built by your assets.' },
    {
      type: 'p',
      text: 'Example: You rent a home for 3,000 EUR per month. You pay that from your wage. You invest 250,000 EUR. Half into a rental property yielding 4–5%. Half into funds yielding 6–8%. In 20 years, your rental property is (mostly) paid off by tenants. Your fund portfolio has compounded. Your net worth has grown faster than if you had paid down your own mortgage. And if your life changes, you are not locked into one location, one asset, one bet.',
    },

    { type: 'h4', text: 'What Happens Next' },
    { type: 'p', text: 'So what did the young father decide? He is still thinking.' },
    { type: 'p', text: 'We ran the numbers together. He saw the two paths. He understood the trade-off.' },
    { type: 'p', text: 'But this is not a decision you make in one meeting. It is emotional. It is financial. It is about how you see your future.' },
    { type: 'p', text: 'I do not know what he will choose. And that is fine.' },
    { type: 'p', text: 'My job was not to convince him. It was to show him what most people never calculate.' },
    {
      type: 'p',
      text: 'Here is what I know: Buying a home is not automatically wealth building. It can be. But in a market like Switzerland, where the Price-to-Rent ratio sits at 39 years, it is more often lifestyle consumption dressed up as investment.',
    },
    { type: 'p', text: 'If your goal is financial security by retirement, you need to separate where you live from how you invest.' },
    { type: 'p', text: 'Rent strategically. Invest deliberately. Stay liquid.' },
    { type: 'p', text: 'But I could be wrong.' },
    {
      type: 'p',
      text: 'Maybe you have run these numbers and reached a different conclusion. Maybe you found a way to make homeownership work without sacrificing liquidity. Maybe your market context is different.',
    },
    { type: 'p', text: 'Have you faced this decision? What did you choose? What would you do differently?' },
    { type: 'p', text: 'Share your experience. Your story might be exactly what someone else needs to hear.' },
  ],
}

/* ── Letter 4 ── */

const letter4: SeedLetter = {
  title: 'How to turn half-empty homes into housing opportunities',
  slug: 'how-to-turn-half-empty-homes-into-housing-opportunities',
  category: 'development',
  excerpt:
    "55% of homes sit half-empty while families search for housing. Here's the evaluation framework that unlocks that gap.",
  publishedAt: '2026-04-06',
  blocks: [
    {
      type: 'p',
      text: "55% of homes sit half-empty while families search for housing. Here's the evaluation framework that unlocks that gap.",
    },
    { type: 'p', text: "Meanwhile, young families can't find housing. Rents are rising. Vacancies near zero." },
    {
      type: 'p',
      text: "The gap isn't a mystery. It's a structural misallocation. And the opportunity sits in properties no one's asking about early enough.",
    },

    { type: 'h4', text: 'The invisible pattern' },
    { type: 'p', text: 'An elderly couple lives in a house built for four kids.' },
    { type: 'p', text: "The kids moved out decades ago. The house sits half-empty. The garden's overwhelming. But moving feels impossible." },
    {
      type: 'p',
      text: "They're not alone. In the UK, nearly 9 in 10 people aged 65–79 live in under-occupied housing. Germany, France, Spain. Same story.",
    },
    { type: 'p', text: 'The generation that needs the least space controls the assets with the highest capacity.' },
    { type: 'p', text: 'Bedrooms become storage. Gardens become burdens. Dining rooms get used twice a year.' },
    {
      type: 'p',
      text: "Here's what most people miss: These properties often sit on land zoned for significantly more density than what's currently built.",
    },
    { type: 'p', text: 'A single-family home on 800m² might be using 20% of the allowable building volume.' },
    { type: 'p', text: 'The other 80%? → Dormant potential.' },
    {
      type: 'p',
      text: "For someone who knows what to look for, that's not just an elderly couple's house. That's a development opportunity.",
    },
    { type: 'p', text: "The reason it stays invisible? No one's asking the right questions early enough." },

    { type: 'h4', text: 'Why expert advice falls short' },
    { type: 'p', text: 'When families finally start the conversation, they consult experts. And those experts give narrow answers.' },
    {
      type: 'ul',
      items: [
        'Real estate agents push for quick sales.',
        'Architects design fancy buildings.',
        'Family members want to keep it.',
        'Financial advisors optimize tax.',
      ],
    },
    { type: 'p', text: "None of these perspectives are wrong. They're incomplete." },
    {
      type: 'p',
      text: 'Decisions get made in silos. The property either gets sold as-is, leaving value on the table, or sits indefinitely while the market moves on.',
    },
    {
      type: 'p',
      text: "What's missing: Someone who asks what's the actual development potential, what the owner genuinely needs, what all the realistic options are and what timing makes sense.",
    },

    { type: 'h4', text: 'Signal vs Noise' },
    { type: 'p', text: '**Noise:**' },
    { type: 'p', text: 'Just sell it and move on. The market will figure it out. Renovation is always better than rebuilding.' },
    { type: 'p', text: '**Signal:**' },
    {
      type: 'p',
      text: 'Development potential exists in the gap between current use and allowable density. Early feasibility studies can increase sale value.',
    },
  ],
}

export const seedLetters: SeedLetter[] = [letter1, letter2, letter3, letter4]
