// StackMinds — portfolio / case-study data (Evergreen).
// Three real, live builds. Screenshots load from the public/work/ folder.

export const projects = [
  {
    slug: 'thenationbrief',
    index: '01',
    title1: 'TheNation',
    titleSerif: 'Brief',
    name: 'TheNationBrief',
    status: 'Live',
    statusType: 'live',
    category: 'Media Platform · Custom Build · Live',
    liveUrl: 'https://thenationbrief.com',
    urlLabel: 'thenationbrief.com',
    screenshots: [
      '/work/thenationbrief-1.png',
      '/work/thenationbrief-2.png',
    ],
    summary: 'An intelligence-grade news platform for defence and geopolitics. A custom-built, self-published media product with a live "operations terminal" aesthetic, designed, engineered, and updated daily by StackMinds.',
    listDesc: 'A custom-built defence and geopolitics news platform with a live "intelligence terminal" aesthetic. Category feeds, daily publishing, and a distinctive identity that makes an independent outlet feel authoritative.',
    meta: { role: 'Design + Build', type: 'Media / Publishing', year: '2026', stack: 'Custom Frontend', status: 'Live ↗' },
    listMeta: { type: 'Media Platform', build: 'Custom Frontend', year: '2026' },
    tags: ['Custom Frontend', 'CMS', 'SEO', 'Design System'],
    overview: [
      'TheNationBrief is a self-initiated media product: a serious, credible home for defence and geopolitics coverage in India. The goal was to make an independent news site feel authoritative from the first second, competing visually with far larger outlets.',
      'That meant rejecting the generic blog template. Instead, the site was built around an "intelligence terminal" identity, with system readouts, encrypted-channel language, and monospace telemetry, a design language that signals precision and seriousness.',
    ],
    challenge: [
      { lead: 'Credibility on day one.', text: 'A brand-new outlet has no legacy trust. The design had to do the heavy lifting: looking established, rigorous, and distinctive enough to be memorable.' },
      { lead: 'Built to run daily.', text: 'This is not a portfolio piece that ships once. It is a living product with articles published every day, so it needed a fast, maintainable publishing setup.' },
      { lead: 'Performance under density.', text: 'News homepages get heavy fast. The layout had to stay quick and legible even packed with feeds, categories, and constant updates.' },
    ],
    approachIntro: 'A custom front end with a signature identity, a scalable content structure, and the details that make a small outlet punch above its weight.',
    approach: [
      { title: 'Terminal design system', desc: 'A distinctive "operations console" identity, with live system readouts, telemetry type, and encrypted-channel motifs that make the brand instantly recognisable.' },
      { title: 'Category architecture', desc: 'Clean sectioning across Defence, Global Affairs, Infra & Tech, and Strategic Affairs, structured for both readers and search engines.' },
      { title: 'Daily publishing flow', desc: 'A maintainable setup for adding articles and briefs every day without the layout breaking or slowing down.' },
      { title: 'SEO & discoverability', desc: 'Semantic structure and metadata so individual briefs can be found and indexed as the archive grows.' },
      { title: 'Performance & responsive', desc: 'Fast loads and a layout that stays sharp from a phone in the field to a desk with three monitors.' },
    ],
    detailsIntro: 'Built and maintained end-to-end by StackMinds: design, front end, content structure, and SEO.',
    stack: ['Custom Frontend', 'Responsive UI', 'Content Structure', 'SEO', 'Performance', 'Design System'],
    statusGrid: [
      { v: 'Live', k: 'In production now', acc: true },
      { v: 'Daily', k: 'New briefs published' },
      { v: '4', k: 'Coverage verticals' },
    ],
    honest: '// A real, live product you can visit, not a mockup. Reader and traffic figures added once meaningful.',
    next: 'rudr-textile',
  },

  {
    slug: 'rudr-textile',
    index: '02',
    title1: 'Rudr Textile',
    titleSerif: 'Solutions',
    name: 'Rudr Textile Solutions',
    status: 'Client',
    statusType: 'live',
    category: 'B2B Website · WordPress · Live',
    liveUrl: 'https://rudrtextilesolutions.com',
    urlLabel: 'rudrtextilesolutions.com',
    screenshots: [
      '/work/rudr-textile-1.png',
      '/work/rudr-textile-2.png',
      '/work/rudr-textile-3.png',
      '/work/rudr-textile-4.png',
    ],
    summary: 'A credibility-first B2B website for a Jacquard machine-parts supplier in Virar, built to make a growing business look established and turn browsers into enquiries.',
    listDesc: 'A credibility-first B2B website for a Jacquard machine-parts supplier. Clear product pages, an enquiry-driven flow, and trust-building throughout, built to turn browsers into leads.',
    meta: { role: 'Design + Build', type: 'B2B Website', year: '2025', stack: 'WordPress', status: 'Client ↗' },
    listMeta: { type: 'B2B Website', build: 'WordPress', year: '2025' },
    tags: ['WordPress', 'Elementor', 'UI Design', 'Lead Gen'],
    overview: [
      'Rudr Textile Solutions is a Virar-based supplier of Jacquard machine spare parts and harness components, founded in 2023. As a growing B2B business, it needed a website that made it look established and trustworthy to mills and procurement teams evaluating suppliers.',
      'The goal was clarity and credibility: clear product categories, easy ways to enquire, and a professional feel that reassures buyers they are dealing with a reliable partner.',
    ],
    challenge: [
      { lead: 'Trust in a traditional industry.', text: 'B2B textile buyers are cautious. The site had to signal reliability, quality, and after-sales support at a glance.' },
      { lead: 'Turning visitors into enquiries.', text: 'Most visitors will not buy online, they enquire. Every page needed a clear, low-friction path to contact.' },
      { lead: 'Easy to maintain.', text: 'The team needed to update products and content themselves, so it was built on WordPress with a clean, manageable structure.' },
    ],
    approachIntro: 'A professional, trust-first B2B site with a clean product structure and enquiry paths on every page.',
    approach: [
      { title: 'Clear product architecture', desc: 'Jacquard machine parts and harness components organised into clean, scannable categories buyers can navigate fast.' },
      { title: 'Enquiry-driven UX', desc: 'Prominent contact and WhatsApp calls-to-action on every page to capture leads without friction.' },
      { title: 'Trust-building content', desc: 'About, services, and testimonial sections that establish credibility for a young business.' },
      { title: 'WordPress build', desc: 'A maintainable Elementor setup the team can update themselves, no developer needed for day-to-day edits.' },
      { title: 'Responsive & fast', desc: 'Works cleanly on the phones buyers actually use on the factory floor.' },
    ],
    detailsIntro: 'Designed and developed by StackMinds. The site footer credits "Designed & Developed by StackMinds Web Solutions."',
    stack: ['WordPress', 'Elementor', 'UI Design', 'Responsive', 'SEO Basics'],
    statusGrid: [
      { v: 'Live', k: 'Real client project', acc: true },
      { v: '2023', k: 'Business founded' },
      { v: 'B2B', k: 'Lead-gen focus' },
    ],
    honest: '// A real client project for an operating business, built and maintained by StackMinds.',
    next: 'stackminds-research',
  },

  {
    slug: 'stackminds-research',
    index: '03',
    title1: 'StackMinds',
    titleSerif: 'Research',
    name: 'StackMinds Research',
    status: 'Live',
    statusType: 'live',
    category: 'Service Business · Lead Gen · Live',
    liveUrl: 'https://stackmindsresearch.com',
    urlLabel: 'stackmindsresearch.com',
    screenshots: [
      '/work/stackminds-research-1.png',
      '/work/stackminds-research-2.png',
    ],
    summary: 'A conversion-focused site for a research-support studio, with clear services, calm authority, and a WhatsApp-first intake flow that turns hesitant scholars into conversations.',
    listDesc: 'A conversion-focused site for a research-support studio. Clear service breakdown, a guided intake flow, and WhatsApp-first lead capture, designed to feel trustworthy.',
    meta: { role: 'Design + Build', type: 'Service Business', year: '2026', stack: 'Web Design + Dev', status: 'Live ↗' },
    listMeta: { type: 'Service Business', build: 'Web Design + Dev', year: '2026' },
    tags: ['Web Design', 'Frontend', 'Copywriting', 'Lead Gen'],
    overview: [
      'StackMinds Research is a research-support studio that helps scholars format, structure, edit and refine their work, from plagiarism and AI reports to data analysis and thesis formatting. The site needed to feel trustworthy and academic, and be clear about a service people are often nervous to ask about.',
      'The design leans into calm authority and transparency, with an intake flow that funnels enquiries straight to WhatsApp, where scholars keep a written record of everything.',
    ],
    challenge: [
      { lead: 'Trust around a sensitive service.', text: 'Academic support needs to feel legitimate and confidential. The design and copy had to reassure, and clearly state that you stay the author.' },
      { lead: 'Turning readers into conversations.', text: 'The whole site is engineered to move a hesitant scholar toward a single, low-pressure WhatsApp message.' },
      { lead: 'Explaining a lot, clearly.', text: 'Many services (reports, reduction, analysis, formatting) had to be organised so visitors instantly find what they need.' },
    ],
    approachIntro: 'A calm, credible service site with a clear structure and a single, frictionless path to enquiry.',
    approach: [
      { title: 'Service architecture', desc: 'Reports, reduction, data analysis, and formatting grouped into scannable sections a scholar can navigate at a glance.' },
      { title: 'WhatsApp-first intake', desc: 'Every call-to-action routes to WhatsApp for fast, on-record conversations that lower the barrier to reaching out.' },
      { title: 'Trust & transparency', desc: 'Clear terms, confidentiality, and an "authored by you" principle woven throughout to build confidence.' },
      { title: 'Editorial, calm design', desc: 'A serious, academic feel that makes an independent studio look established and reliable.' },
      { title: 'Responsive & fast', desc: 'Smooth on mobile, where most scholars first find and message the studio.' },
    ],
    detailsIntro: 'Designed and built in-house by StackMinds. A real, live service business.',
    stack: ['Web Design', 'Frontend', 'Copywriting', 'Lead Gen', 'Responsive'],
    statusGrid: [
      { v: 'Live', k: 'In production now', acc: true },
      { v: 'WhatsApp', k: 'First-touch channel' },
      { v: '1-day', k: 'Typical reply time' },
    ],
    honest: '// Built in-house by StackMinds. A real, live business you can visit today.',
    next: 'thenationbrief',
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export const portfolioData = projects.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});
