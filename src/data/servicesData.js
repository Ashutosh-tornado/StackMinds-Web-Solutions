// StackMinds, services data (Evergreen). Grouped Build / Market / Grow.

export const services = [
  // ---------------- BUILD ----------------
  {
    slug: 'web-design',
    name: 'Web Design & Development',
    pillar: 'Build',
    short: 'Fast, distinctive websites designed and engineered to convert, the foundation everything else stands on.',
    h1: { lead: 'Websites that look ', serif: 'expensive', tail: ' and actually convert.' },
    sub: 'We design and build custom websites from scratch, fast, distinctive, and engineered to turn visitors into customers. No bloated templates, no cookie-cutter themes.',
    whyHead: 'Your first impression',
    why: [
      { lead: 'Your website is your storefront.', text: 'Most people judge your business in seconds. A slow, generic site quietly costs you customers before they ever contact you.' },
      { lead: 'Design is not decoration.', text: 'Every layout, word, and interaction is a decision about whether a visitor trusts you and takes action. We sweat those details so your site earns its keep.' },
    ],
    includedHead: "What's included",
    included: [
      { title: 'Custom design', desc: 'A bespoke design built around your brand and goals, not a template everyone else is using.' },
      { title: 'Frontend engineering', desc: 'Hand-built, fast, and accessible. Smooth interactions and clean code under the hood.' },
      { title: 'Responsive everything', desc: 'Looks and works beautifully from a small phone to a large desktop.' },
      { title: 'Performance first', desc: 'Optimised load times and Core Web Vitals, speed that helps both users and search rankings.' },
      { title: 'Conversion-focused', desc: 'Clear structure and calls-to-action that guide visitors toward enquiries and sales.' },
      { title: 'SEO-ready foundation', desc: 'Clean, semantic markup so the site is ready to be found from day one.' },
    ],
    processIntro: 'A clear, collaborative build with no black box and no surprises.',
    process: [
      { label: '01 / Discover', title: 'Understand', desc: 'Your business, audience, and goals, before any design begins.' },
      { label: '02 / Design', title: 'Shape it', desc: 'We design the look and feel with your input at every step.' },
      { label: '03 / Build', title: 'Engineer', desc: 'We develop it cleanly, fast, and responsive across devices.' },
      { label: '04 / Launch', title: 'Ship', desc: 'We launch, test, and set up analytics so it is measured from day one.' },
    ],
    deliverables: [
      { title: 'A custom, responsive website', note: 'Designed and built around your brand.' },
      { title: 'Fast, clean code', note: 'Optimised for speed and search engines.' },
      { title: 'A CMS or easy edits', note: 'So you can update content yourself where it makes sense.' },
      { title: 'Launch & handover', note: 'Analytics wired up and everything explained.' },
    ],
    honest: '// We have shipped and maintained real, live sites, a news platform, a B2B client site, and a service business. The work speaks for itself; go visit them.',
    cta: { lead: 'Ready for a site that', serif: 'works?', text: "Tell us about your business and we'll show you what a proper website could do for it." },
  },
  {
    slug: 'wordpress',
    name: 'WordPress Websites',
    pillar: 'Build',
    short: 'Polished, custom WordPress sites you can actually manage yourself, without the bloat.',
    h1: { lead: 'WordPress sites you can ', serif: 'actually', tail: ' manage.' },
    sub: 'Beautiful, custom WordPress websites built for businesses that want to update their own content, without wrestling clunky page builders or slow, bloated themes.',
    whyHead: 'Power without the pain',
    why: [
      { lead: 'WordPress runs a huge share of the web for a reason.', text: 'It is flexible, familiar, and lets you manage your own content. But done badly, it gets slow and messy fast.' },
      { lead: 'We build it right.', text: 'Clean structure, only the plugins you need, and a tidy editing experience so updates stay simple as you grow.' },
    ],
    includedHead: "What's included",
    included: [
      { title: 'Custom theme / design', desc: 'A tailored look mapped to your brand, not an off-the-shelf theme.' },
      { title: 'Clean page building', desc: 'An intuitive editing setup so you can update pages without breaking the design.' },
      { title: 'Performance tuning', desc: 'Caching, image optimisation, and lean plugins for fast loads.' },
      { title: 'Security & maintenance', desc: 'Sensible hardening and guidance so your site stays safe.' },
      { title: 'SEO-ready', desc: 'Structured and optimised so search engines understand your pages.' },
      { title: 'Responsive design', desc: 'Sharp on every screen size.' },
    ],
    processIntro: 'A straightforward WordPress build you stay in control of.',
    process: [
      { label: '01 / Discover', title: 'Plan', desc: 'We map your pages, content, and what you need to manage yourself.' },
      { label: '02 / Design', title: 'Design', desc: 'A custom look built for your brand and buyers.' },
      { label: '03 / Build', title: 'Develop', desc: 'Clean WordPress build with an editor you can actually use.' },
      { label: '04 / Launch', title: 'Handover', desc: 'We launch and show you exactly how to run it.' },
    ],
    deliverables: [
      { title: 'A custom WordPress site', note: 'Designed and built for your business.' },
      { title: 'Editable content', note: 'Update pages, posts, and products yourself.' },
      { title: 'Speed & security setup', note: 'Optimised and hardened.' },
      { title: 'Training & handover', note: 'A walkthrough so you feel confident.' },
    ],
    honest: '// Rudr Textile Solutions, a real client, runs on a WordPress build by StackMinds. Go see it live.',
    cta: { lead: 'Want a WordPress site done', serif: 'properly?', text: "Let's build you something clean, fast, and easy to manage." },
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    pillar: 'Build',
    short: 'Online stores built to sell, smooth browsing, easy checkout, and a path to purchase that converts.',
    h1: { lead: 'Online stores built to ', serif: 'sell.', tail: '' },
    sub: 'From catalog to checkout, we build ecommerce experiences that make it easy and enjoyable to buy, and that keep customers coming back.',
    whyHead: 'Every step costs a sale',
    why: [
      { lead: 'Online, friction is the enemy.', text: 'A confusing catalog or clunky checkout quietly kills sales. A great store removes every reason to hesitate.' },
      { lead: 'We design the whole journey.', text: 'From the first product view to the confirmation screen, we shape a path that feels effortless and builds trust.' },
    ],
    includedHead: "What's included",
    included: [
      { title: 'Custom storefront', desc: 'A shopping experience that fits your brand and your products.' },
      { title: 'Smooth product & cart UX', desc: 'Clean catalogs, clear product pages, and a frictionless cart.' },
      { title: 'Secure checkout & payments', desc: 'Trusted payment gateways set up to convert, not scare people off.' },
      { title: 'Mobile-first', desc: 'Most shopping happens on phones, so that is where we start.' },
      { title: 'Built to scale', desc: 'Structured to handle growth and busy sale periods.' },
      { title: 'SEO & performance', desc: 'Fast, findable product pages that bring in organic traffic.' },
    ],
    processIntro: 'A store build focused on one thing: making it easy to buy.',
    process: [
      { label: '01 / Discover', title: 'Plan', desc: 'Products, catalog structure, and the buying journey.' },
      { label: '02 / Design', title: 'Design', desc: 'A storefront that showcases products and builds trust.' },
      { label: '03 / Build', title: 'Develop', desc: 'Cart, checkout, and payments wired up cleanly.' },
      { label: '04 / Launch', title: 'Go live', desc: 'Testing, analytics, and a smooth launch.' },
    ],
    deliverables: [
      { title: 'A custom online store', note: 'Designed to convert browsers into buyers.' },
      { title: 'Payments & checkout', note: 'Secure and frictionless.' },
      { title: 'Product management', note: 'Add and edit products yourself.' },
      { title: 'Analytics & handover', note: 'Know what sells and why.' },
    ],
    honest: '// Ecommerce is part of our build practice, with a D2C store of our own launching soon. Ask us about it.',
    cta: { lead: 'Ready to start', serif: 'selling online?', text: "Let's build a store your customers actually enjoy buying from." },
  },

  // ---------------- MARKET ----------------
  {
    slug: 'seo',
    name: 'SEO',
    pillar: 'Market',
    short: 'Get found by the people already searching for you, traffic you own, not rent.',
    h1: { lead: 'Get found by the people ', serif: 'already searching', tail: ' for you.' },
    sub: 'SEO turns your website into a magnet for ready-to-buy customers. We make your site easy for Google to understand, trust, and rank, so the right people find you without paying for every click.',
    whyHead: "Traffic you don't rent",
    why: [
      { lead: 'Ads stop the moment you stop paying. SEO compounds.', text: 'A page that ranks keeps bringing in visitors month after month, the closest thing to a free, always-on sales channel your business can own.' },
      { lead: 'Ranking is not luck.', text: "It's the sum of a fast, well-structured site, pages built around what people search, and the trust signals Google looks for. That's the work we do." },
    ],
    includedHead: 'The full picture',
    included: [
      { title: 'Technical SEO', desc: 'Speed, mobile, crawlability, and clean architecture, the foundation that lets everything else rank.' },
      { title: 'Keyword & intent research', desc: 'We map what your customers actually type, and the intent behind it, so we target searches that turn into enquiries.' },
      { title: 'On-page optimization', desc: 'Titles, headings, content, and links tuned per page so Google understands what you offer.' },
      { title: 'Local SEO', desc: 'Google Business Profile, citations, and location pages so nearby customers find you first.' },
      { title: 'Content & strategy', desc: 'A plan for the pages and articles that attract the right traffic.' },
      { title: 'Tracking & reporting', desc: 'Analytics, Search Console, and plain-English reports so you always know what is working.' },
    ],
    processIntro: 'No black box, no jargon. A steady, transparent process you can follow.',
    process: [
      { label: '01 / Audit', title: 'Find the gaps', desc: 'A full technical and content audit to see where you stand.' },
      { label: '02 / Fix', title: 'Build the base', desc: 'We resolve technical issues and optimize your core pages.' },
      { label: '03 / Grow', title: 'Earn rankings', desc: 'Ongoing content and on-page work for searches that bring customers.' },
      { label: '04 / Measure', title: 'Report & refine', desc: 'We track movement and double down on what works.' },
    ],
    deliverables: [
      { title: 'SEO audit & action plan', note: 'A prioritized roadmap, not a 60-page PDF nobody reads.' },
      { title: 'Technical fixes', note: 'Speed, structure, and indexing sorted properly.' },
      { title: 'Optimized key pages', note: 'Your most important pages tuned to rank and convert.' },
      { title: 'Monthly reporting', note: 'Clear updates on rankings, traffic, and next steps.' },
    ],
    honest: '// Honest note: SEO is a long game, real results take months, and no one can promise a #1 ranking (be wary of anyone who does). We are upfront that we are building our SEO case studies, so early clients get extra care and transparent reporting.',
    cta: { lead: 'Want to rank', serif: 'higher?', text: "Start with a free look at your site's SEO, we'll tell you the biggest opportunities, no strings attached." },
  },
  {
    slug: 'ads',
    name: 'Google & Meta Ads',
    pillar: 'Market',
    short: 'Instant, targeted traffic from Google and social, reaching buyers the moment they are ready.',
    h1: { lead: 'Reach buyers the ', serif: 'moment', tail: " they're ready." },
    sub: 'Paid ads on Google and Meta put you in front of the right people, right now, while your SEO and brand build momentum in the background.',
    whyHead: 'Traffic on demand',
    why: [
      { lead: 'SEO is a marathon; ads are a switch you can flip.', text: 'When you need customers this month, paid search and social put your offer in front of people actively looking.' },
      { lead: 'The money is in the details.', text: 'Right audience, right message, right landing page. Small improvements to targeting and creative make a big difference to what each rupee returns.' },
    ],
    includedHead: "What's included",
    included: [
      { title: 'Campaign strategy', desc: 'A plan matched to your goals, audience, and budget.' },
      { title: 'Google Search & Meta', desc: 'High-intent search ads and attention-grabbing social campaigns.' },
      { title: 'Audience targeting', desc: 'Reaching the people most likely to become customers.' },
      { title: 'Ad creative & copy', desc: 'Scroll-stopping visuals and messaging that earns the click.' },
      { title: 'Landing page alignment', desc: 'Making sure the page the ad points to actually converts.' },
      { title: 'Tracking & optimisation', desc: 'Continuous testing and refinement to lower cost per lead.' },
    ],
    processIntro: 'A measured approach that spends carefully and improves constantly.',
    process: [
      { label: '01 / Plan', title: 'Strategy', desc: 'Goals, audiences, budget, and the right platforms.' },
      { label: '02 / Build', title: 'Launch', desc: 'Campaigns, creative, and tracking set up properly.' },
      { label: '03 / Optimise', title: 'Refine', desc: 'Test, cut what fails, and scale what works.' },
      { label: '04 / Report', title: 'Measure', desc: 'Clear reporting tied to leads and sales, not vanity metrics.' },
    ],
    deliverables: [
      { title: 'Campaign setup', note: 'Google and/or Meta, built to your goals.' },
      { title: 'Ad creative & copy', note: 'Designed to convert.' },
      { title: 'Conversion tracking', note: 'So every rupee is accountable.' },
      { title: 'Regular reporting', note: 'What you spent, and what it returned.' },
    ],
    honest: '// Ads are part of our growing marketing offering. We manage spend carefully and report transparently, and we will never claim results we cannot show.',
    cta: { lead: 'Need customers', serif: 'this month?', text: "Let's talk about a paid campaign that fits your budget and goals." },
  },
  {
    slug: 'social-media',
    name: 'Social Media & Content',
    pillar: 'Market',
    short: 'A consistent, on-brand social presence that builds trust and keeps you top of mind.',
    h1: { lead: 'A social presence that builds your ', serif: 'brand.', tail: '' },
    sub: 'We help you show up consistently on social with content that looks the part and sounds like you, turning followers into a warm audience that trusts and buys.',
    whyHead: 'Show up, stay remembered',
    why: [
      { lead: 'People buy from brands they recognise.', text: 'A steady, quality presence keeps you front of mind so that when someone is ready, you are the obvious choice.' },
      { lead: 'Consistency beats bursts.', text: 'A clear plan and a recognisable style beat sporadic posting every time, and it compounds.' },
    ],
    includedHead: "What's included",
    included: [
      { title: 'Content strategy', desc: 'A plan for what to post, where, and why, mapped to your goals.' },
      { title: 'Content creation', desc: 'On-brand graphics, captions, and creative that stop the scroll.' },
      { title: 'Consistent posting', desc: 'A steady cadence so your presence never goes quiet.' },
      { title: 'Brand consistency', desc: 'A recognisable look and voice across every channel.' },
      { title: 'Community basics', desc: 'Engagement that turns viewers into a warm audience.' },
      { title: 'Insights', desc: 'Simple reporting on what resonates so we do more of it.' },
    ],
    processIntro: 'A calm, consistent content engine, not a frantic scramble.',
    process: [
      { label: '01 / Plan', title: 'Strategy', desc: 'Channels, themes, and a content plan that fits your brand.' },
      { label: '02 / Create', title: 'Produce', desc: 'On-brand content designed to be seen and shared.' },
      { label: '03 / Publish', title: 'Post', desc: 'A steady, reliable cadence you can count on.' },
      { label: '04 / Learn', title: 'Refine', desc: 'We watch what works and lean into it.' },
    ],
    deliverables: [
      { title: 'A content plan', note: 'Clear themes and a posting schedule.' },
      { title: 'On-brand content', note: 'Graphics and captions ready to publish.' },
      { title: 'Consistent posting', note: 'So your presence stays alive.' },
      { title: 'Simple reporting', note: 'What landed, and what is next.' },
    ],
    honest: '// Social is part of our growing marketing offering, we focus on consistent, quality content over empty follower counts.',
    cta: { lead: 'Want to show up', serif: 'consistently?', text: "Let's build a social presence that actually reflects your brand." },
  },

  // ---------------- GROW ----------------
  {
    slug: 'conversion-analytics',
    name: 'Conversion & Analytics',
    pillar: 'Grow',
    short: 'Turn the traffic you already have into more leads and sales, measured and improved.',
    h1: { lead: 'Turn the traffic you have into more ', serif: 'sales.', tail: '' },
    sub: 'Getting visitors is only half the battle. We track what people do on your site, find what is stopping them, and steadily lift the number that turn into customers.',
    whyHead: 'Small lifts, big results',
    why: [
      { lead: 'You already have traffic. Are you using it?', text: 'Most sites leak potential customers at predictable points. Fixing those is often cheaper than buying more traffic.' },
      { lead: 'Decisions, backed by data.', text: 'We measure real behaviour, form a hypothesis, test it, and keep what works, so your site gets better over time, not just prettier.' },
    ],
    includedHead: "What's included",
    included: [
      { title: 'Analytics setup', desc: 'Proper tracking so you can actually see what visitors do.' },
      { title: 'Conversion audit', desc: 'We find the leaks, where and why visitors drop off.' },
      { title: 'Landing page optimisation', desc: 'Sharper pages that guide visitors to act.' },
      { title: 'A/B testing', desc: 'Testing changes so improvements are proven, not guessed.' },
      { title: 'Funnels & follow-up', desc: 'Simple funnels and email nudges to recover lost interest.' },
      { title: 'Clear reporting', desc: 'Plain-English updates on what moved the numbers.' },
    ],
    processIntro: 'A steady loop of measure, improve, repeat.',
    process: [
      { label: '01 / Measure', title: 'Track', desc: 'Set up analytics and see how people really use your site.' },
      { label: '02 / Find', title: 'Diagnose', desc: 'Identify where visitors drop off and why.' },
      { label: '03 / Test', title: 'Improve', desc: 'Make changes and prove them with data.' },
      { label: '04 / Repeat', title: 'Compound', desc: 'Keep refining so results build month over month.' },
    ],
    deliverables: [
      { title: 'Analytics & tracking setup', note: 'See exactly what visitors do.' },
      { title: 'A conversion audit', note: 'Where you are losing customers, and why.' },
      { title: 'Prioritised improvements', note: 'The changes most likely to lift results.' },
      { title: 'Ongoing reporting', note: 'What changed, and what it earned.' },
    ],
    honest: '// The unglamorous work that quietly makes everything else pay off. We measure honestly and report plainly.',
    cta: { lead: 'Want more from the traffic you', serif: 'already have?', text: "Let's find what's leaking and fix it." },
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug) || null;
}

export const pillars = ['Build', 'Market', 'Grow'];
export const pillarInfo = {
  Build: { no: '01', tag: 'Foundation & credibility' },
  Market: { no: '02', tag: 'Get found & drive traffic' },
  Grow: { no: '03', tag: 'Convert & improve' },
};

// Back-compat keyed object
export const servicesData = services.reduce((acc, s) => {
  acc[s.slug] = s;
  return acc;
}, {});
