const PHONE = "(916) 372-2700";
const TEL = "tel:+19163722700";
const ADDRESS = "640 Harbor Blvd, West Sacramento, CA 95691";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=West%20Sac%20Tire%20%26%20Wheel&query_place_id=ChIJV7wJtE3RmoAReFpElBRSPRA";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=640+Harbor+Blvd+West+Sacramento+CA+95691";
const FACEBOOK = "https://www.facebook.com/Westsactire/";
const MAP_EMBED = "https://maps.google.com/maps?q=640%20Harbor%20Blvd%2C%20West%20Sacramento%2C%20CA%2095691&output=embed";

type IconName =
  | "phone" | "star" | "pin" | "clock" | "tag" | "wheel" | "wrench" | "gauge" | "balance" | "patch" | "sparkle"
  | "check" | "chev" | "arrow" | "car" | "facebook" | "dollar" | "bolt" | "nav";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path {...p} d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" />,
    star: <path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />,
    pin: <><path {...p} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle {...p} cx="12" cy="10" r="3" /></>,
    clock: <><circle {...p} cx="12" cy="12" r="10" /><path {...p} d="M12 6v6l4 2" /></>,
    tag: <><path {...p} d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4Z" /><circle fill="currentColor" cx="7.5" cy="7.5" r="1.5" /></>,
    wheel: <><circle {...p} cx="12" cy="12" r="10" /><circle {...p} cx="12" cy="12" r="3.2" /><path {...p} d="M12 2v6.8M12 15.2V22M2 12h6.8M15.2 12H22M4.9 4.9l4.8 4.8M14.3 14.3l4.8 4.8M19.1 4.9l-4.8 4.8M9.7 14.3l-4.8 4.8" /></>,
    wrench: <path {...p} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />,
    gauge: <><path {...p} d="m12 14 4-4" /><path {...p} d="M3.3 19a10 10 0 1 1 17.4 0" /></>,
    balance: <><path {...p} d="M12 3v18M5 21h14M3 7h18" /><path {...p} d="m6 7-3 7a3 3 0 0 0 6 0Zm12 0-3 7a3 3 0 0 0 6 0Z" /></>,
    patch: <><circle {...p} cx="12" cy="12" r="10" /><path {...p} d="M9 12h6M12 9v6" /></>,
    sparkle: <path {...p} d="M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z" />,
    check: <path {...p} d="M20 6 9 17l-5-5" />,
    chev: <path {...p} d="m6 9 6 6 6-6" />,
    arrow: <path {...p} d="M5 12h14M13 6l6 6-6 6" />,
    car: <><path {...p} d="M19 17h2v-4l-2.4-4.8A2 2 0 0 0 16.8 7H7.2a2 2 0 0 0-1.8 1.2L3 13v4h2" /><circle {...p} cx="7.5" cy="17" r="2" /><circle {...p} cx="16.5" cy="17" r="2" /><path {...p} d="M9.5 17h5M3 13h18" /></>,
    facebook: <path fill="currentColor" d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v1.8H7.7v3.2h2.7V22H14V11.7h2.7l.4-3.2Z" />,
    dollar: <><path {...p} d="M12 2v20" /><path {...p} d="M17 5.5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    bolt: <path {...p} d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
    nav: <path {...p} d="m3 11 19-9-9 19-2-8-8-2Z" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="4.5 out of 5 stars">
      {[0, 1, 2, 3].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
      <span className="relative inline-block">
        <Icon name="star" className={`${className} text-line`} />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Icon name="star" className={className} />
        </span>
      </span>
    </span>
  );
}

const services: { icon: IconName; title: string; body: string; badge?: string }[] = [
  {
    icon: "tag",
    title: "New Tires",
    badge: "Customer favorite",
    body:
      "New tires across a wide range of brands and price points, from everyday commuter tires to truck and off-road sets. Customers tell us our quotes regularly come in well under what other shops ask for the same tires. Call with your size and we will price it out on the phone.",
  },
  {
    icon: "dollar",
    title: "Used Tires",
    body:
      "Quality used tires for drivers who need safe tread without paying new-tire prices. Balancing is included with used tire installs. A smart option for a second car, a work truck, or getting you back on the road today.",
  },
  {
    icon: "wrench",
    title: "Installation & Mounting",
    body:
      "Mounting and dismounting for passenger cars, trucks and SUVs, including run-flat tires and off-road tires that some shops turn away. Most installs are quick, so you are not stuck waiting around all afternoon.",
  },
  {
    icon: "balance",
    title: "Wheel Balancing",
    body:
      "A shaky steering wheel at freeway speed usually means a wheel is out of balance. We balance your wheels so the ride is smooth and your new tires wear evenly instead of cupping early.",
  },
  {
    icon: "wheel",
    title: "Custom Wheels",
    body:
      "Looking to change the look of your car or truck? We sell custom wheels and can mount and balance your tires on them in the same visit. Ask about sizes and fitment for your vehicle.",
  },
  {
    icon: "gauge",
    title: "TPMS Service",
    body:
      "Tire pressure light on? We service tire pressure monitoring sensors so the warning light means something again, and so your new tires keep reporting the right pressure.",
  },
  {
    icon: "patch",
    title: "Flat Repair",
    body:
      "Picked up a nail on the freeway? Walk in with your flat. If the tire can be safely repaired, we fix it quickly at a fair price. If it can't, we will show you why and give you options, new or used.",
  },
  {
    icon: "car",
    title: "Free Alignment Check",
    body:
      "Every tire service includes a free alignment check. If your car pulls to one side or your old tires wore unevenly, we will tell you before your new set goes on, so they last as long as they should.",
  },
];

const reviews = [
  {
    quote:
      "Another shop quoted me about $650 for a set of tires. West Sac Tire & Wheel did the same set for around $330, and the install was fast.",
    who: "Google reviewer",
    job: "New tire set",
  },
  {
    quote: "Found good used tires at a budget price, and the balancing was included at no extra charge.",
    who: "Google reviewer",
    job: "Used tires",
  },
  {
    quote: "Walked in with a flat, they fixed it quickly and the price was fair. No pressure to buy anything else.",
    who: "Google reviewer",
    job: "Flat repair",
  },
];

const steps = [
  { title: "Call or stop by", body: `Call ${PHONE} with your tire size, or just pull in on Harbor Blvd. Walk-ins are welcome.` },
  { title: "Get a straight price", body: "We quote new and used options side by side so you can pick what fits your budget. No upsell." },
  { title: "We mount and balance", body: "Your tires go on, get balanced, and your TPMS gets checked. Most jobs are done while you wait." },
  { title: "Free alignment check", body: "Before you drive off, we check the alignment and tell you plainly if anything needs attention." },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: `Most tire jobs and flat repairs are walk-in. If you want to make sure we have your size in stock, call ${PHONE} first and we will check while you are on the phone.`,
  },
  {
    q: "Do you sell used tires?",
    a: "Yes. We carry both new and used tires, so you can choose the price and tread that makes sense for you. Balancing is included with used tire installs.",
  },
  {
    q: "What are your hours?",
    a: "We are open Monday through Saturday, 8:30 a.m. to 6 p.m. We are closed on Sunday.",
  },
  {
    q: "Can you install run-flat or off-road tires?",
    a: "Yes. We mount and dismount run-flats and off-road tires, along with standard passenger, SUV and light truck tires.",
  },
  {
    q: "Can you fix my tire pressure (TPMS) light?",
    a: "We service TPMS sensors. Bring the car in and we will find out why the light is on and get it reading correctly.",
  },
  {
    q: "Where are you located and what areas do you serve?",
    a: "We are at 640 Harbor Blvd in West Sacramento. Customers come to us from West Sacramento, Sacramento, Davis, Woodland and the rest of Yolo County.",
  },
  {
    q: "How do I get a price on tires?",
    a: `The fastest way is to call ${PHONE} with the size printed on the side of your current tire (it looks like 225/65R17). We will give you new and used options over the phone.`,
  },
];

const areas = ["West Sacramento", "Sacramento", "Davis", "Woodland", "Yolo County"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  name: "West Sac Tire & Wheel",
  telephone: "+1-916-372-2700",
  address: {
    "@type": "PostalAddress",
    streetAddress: "640 Harbor Blvd",
    addressLocality: "West Sacramento",
    addressRegion: "CA",
    postalCode: "95691",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  areaServed: ["West Sacramento", "Sacramento", "Davis", "Woodland", "Yolo County"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "61" },
  sameAs: [FACEBOOK],
  hasMap: MAPS_URL,
  priceRange: "$",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-brand">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand text-[0.9rem] text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> {ADDRESS}</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Mon–Sat 8:30 a.m.–6 p.m. · Sunday closed</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="wheel-spin flex items-center gap-2.5 text-brand" aria-label="West Sac Tire & Wheel home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-cta">
              <Icon name="wheel" className="h-6 w-6" />
            </span>
            <span className="font-heading text-[1.35rem] font-bold uppercase leading-none">
              West Sac <span className="text-muted">Tire &amp; Wheel</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.98rem] font-semibold text-ink lg:flex">
            <a className="hover:text-muted" href="#services">Services</a>
            <a className="hover:text-muted" href="#reviews">Reviews</a>
            <a className="hover:text-muted" href="#about">About</a>
            <a className="hover:text-muted" href="#area">Location</a>
            <a className="hover:text-muted" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-heading text-xl font-semibold text-brand md:block">{PHONE}</a>
            <a href={TEL} className="btn hidden h-12 items-center gap-2 rounded-lg bg-cta px-5 font-bold text-brand shadow-sm hover:bg-cta-hover md:inline-flex">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-11 w-11 place-items-center rounded-lg bg-cta text-brand md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden border-b border-line">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="rise mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[0.9rem] font-semibold text-muted">
                <span className="h-2 w-2 rounded-full bg-cta" aria-hidden="true" /> Walk-ins welcome on Harbor Blvd
              </p>
              <h1 className="rise rise-2 text-[clamp(2.3rem,5.2vw,3.9rem)] font-bold uppercase text-brand">
                New &amp; Used Tires in West Sacramento
              </h1>
              <p className="rise rise-3 mt-5 max-w-[56ch] text-[1.15rem] text-muted">
                West Sac Tire &amp; Wheel is the busy independent tire shop at 640 Harbor Blvd. New tires, quality used tires,
                custom wheels and quick flat repairs, at prices our customers say beat the other quotes they got.
              </p>
              <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn inline-flex h-14 items-center gap-2.5 rounded-lg bg-cta px-7 text-[1.1rem] font-bold text-brand shadow-[0_8px_20px_-10px_oklch(0.6_0.15_80)] hover:bg-cta-hover">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href="#services" className="btn inline-flex h-14 items-center gap-2 rounded-lg border-2 border-brand px-6 text-[1.05rem] font-bold text-brand hover:bg-brand hover:text-white">
                  See our services <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
              <div className="rise rise-4 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.98rem] font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars /> 4.5 from 61 reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-5 w-5 text-brand" /> Free alignment check</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-5 w-5 text-brand" /> New &amp; used in stock</span>
              </div>
            </div>

            {/* Featured review card */}
            <aside className="rise rise-4 relative" aria-label="Featured customer review">
              <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-full border-[18px] border-tint lg:block" aria-hidden="true" />
              <div className="relative rounded-2xl border border-line bg-white p-7 shadow-[0_24px_50px_-30px_oklch(0.22_0.012_260/0.45)]">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-[0.9rem] font-semibold text-muted">Google review</span>
                </div>
                <p className="mt-5 font-heading text-[1.6rem] font-semibold uppercase leading-tight text-brand">
                  Quoted $650 elsewhere. Paid about $330 here.
                </p>
                <p className="mt-3 text-muted">
                  Same set of tires, roughly half the price, and a fast install. That is the kind of story we hear every week.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 text-[0.95rem]">
                  <div>
                    <p className="font-bold text-ink">Open today?</p>
                    <p className="text-muted">Mon–Sat 8:30–6</p>
                  </div>
                  <div>
                    <p className="font-bold text-ink">Find us</p>
                    <p className="text-muted">640 Harbor Blvd</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why drivers trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, big: "4.5 ★", small: "61 customer reviews" },
              { icon: "dollar" as IconName, big: "Budget-friendly", small: "New and used tires" },
              { icon: "bolt" as IconName, big: "Fast installs", small: "Most jobs while you wait" },
              { icon: "car" as IconName, big: "Free check", small: "Alignment check with service" },
            ].map((t) => (
              <div key={t.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-cta">
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold uppercase leading-tight">{t.big}</p>
                  <p className="text-[0.92rem] text-white/75">{t.small}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold uppercase text-brand">Tire &amp; wheel services</h2>
              <p className="mt-4 text-[1.1rem] text-muted">
                Everything your tires need under one roof on Harbor Blvd. If you are not sure what you need, call and describe the
                problem. We will tell you honestly whether it is a quick fix or time for new rubber.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className={`card reveal flex flex-col rounded-xl border bg-white p-6 ${s.badge ? "border-brand ring-1 ring-brand" : "border-line"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-tint text-brand">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    {s.badge && (
                      <span className="rounded-full bg-cta px-2.5 py-1 text-[0.78rem] font-bold text-brand">{s.badge}</span>
                    )}
                  </div>
                  <h3 className="mt-5 text-[1.35rem] font-semibold uppercase text-brand">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[1rem] text-muted">{s.body}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand underline-offset-4 hover:underline">
                    Call about this <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <Stars className="h-6 w-6" />
                  <span className="font-heading text-2xl font-semibold text-brand">4.5</span>
                </div>
                <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold uppercase text-brand">Rated 4.5 from 61 reviews</h2>
                <p className="mt-3 max-w-[58ch] text-[1.1rem] text-muted">
                  The same things come up again and again: prices well below the competition, quick service, and no pressure to
                  buy more than you came in for.
                </p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex h-12 shrink-0 items-center gap-2 rounded-lg border-2 border-brand bg-white px-5 font-bold text-brand hover:bg-brand hover:text-white">
                Read all reviews on Google <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reviews.map((r, i) => (
                <figure key={i} className="card reveal flex flex-col rounded-xl border border-line bg-white p-6">
                  <Stars className="h-[1.1rem] w-[1.1rem]" />
                  <blockquote className="mt-4 flex-1 text-[1.06rem] text-ink">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand font-heading text-sm font-semibold text-cta" aria-hidden="true">
                      G
                    </span>
                    <span>
                      <span className="block font-bold text-ink">{r.who}</span>
                      <span className="block text-[0.92rem] text-muted">{r.job}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold uppercase text-brand">
                A neighborhood tire shop that keeps prices honest
              </h2>
              <div className="mt-6 space-y-4 text-[1.08rem] text-muted">
                <p>
                  West Sac Tire &amp; Wheel is an independent tire and wheel shop on Harbor Boulevard in West Sacramento. We are not a chain and we do not have a sales quota. We keep a big
                  stock of new and used tires so we can match the right tire to your car and your budget.
                </p>
                <p>
                  A lot of our customers come in after getting a quote somewhere else. One driver was quoted around $650 for a set
                  and paid about $330 with us for the same tires. That is not a one-time sale price. It is how we run the shop:
                  fair prices, fast installs, and a straight answer about what your car actually needs.
                </p>
                <p>
                  Whether you need a single used tire to get to work tomorrow, a full new set before a road trip, or custom wheels
                  for your truck, stop by or give us a call. We will take care of you.
                </p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "dollar" as IconName, t: "Prices that beat the quote", d: "Customers regularly tell us we came in far under other shops for the same tires." },
                { icon: "tag" as IconName, t: "New or used, your call", d: "We show you both options so you can choose what fits your budget." },
                { icon: "bolt" as IconName, t: "Quick turnaround", d: "Walk-in flats and most installs are done while you wait." },
                { icon: "check" as IconName, t: "No-pressure service", d: "We fix what you came in for and tell you plainly about anything else." },
              ].map((d) => (
                <div key={d.t} className="card reveal rounded-xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-brand">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[1.2rem] font-semibold uppercase text-brand">{d.t}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-muted">{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold uppercase text-brand">How it works</h2>
            <p className="mt-3 max-w-[58ch] text-[1.1rem] text-muted">Getting tires at our shop is simple. Here is what to expect.</p>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-4 rounded-xl border border-line bg-white p-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-cta font-heading text-2xl font-bold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.2rem] font-semibold uppercase text-brand">{s.title}</h3>
                    <p className="mt-1.5 text-[0.98rem] text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold uppercase text-brand">Serving West Sacramento &amp; Yolo County</h2>
              <p className="mt-4 text-[1.08rem] text-muted">
                Our shop is at {ADDRESS}. Drivers come to us from across the river in Sacramento, from Davis and Woodland, and
                from all over Yolo County.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[0.98rem] font-semibold text-ink">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-line bg-white p-5">
                <p className="flex items-center gap-2 font-bold text-ink"><Icon name="clock" className="h-5 w-5 text-brand" /> Shop hours</p>
                <dl className="mt-3 grid grid-cols-2 gap-y-1 text-[1rem]">
                  <dt className="text-muted">Monday – Saturday</dt>
                  <dd className="font-semibold text-ink">8:30 a.m. – 6:00 p.m.</dd>
                  <dt className="text-muted">Sunday</dt>
                  <dd className="font-semibold text-ink">Closed</dd>
                </dl>
              </div>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-6 inline-flex h-12 items-center gap-2 rounded-lg border-2 border-brand px-5 font-bold text-brand hover:bg-brand hover:text-white">
                <Icon name="nav" className="h-5 w-5" /> Get directions
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe
                title="Map showing West Sac Tire & Wheel at 640 Harbor Blvd, West Sacramento"
                src={MAP_EMBED}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold uppercase text-brand">Common questions</h2>
              <p className="mt-4 text-[1.08rem] text-muted">
                Don&rsquo;t see your question here? Call us at{" "}
                <a href={TEL} className="font-bold text-brand underline underline-offset-4">{PHONE}</a> and ask.
              </p>
            </div>
            <div className="divide-y divide-line rounded-xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-1">
                  <summary className="flex items-center justify-between gap-4 py-4 text-[1.08rem] font-bold text-ink">
                    {f.q}
                    <Icon name="chev" className="chev h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="pb-5 text-[1rem] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — inset card */}
        <section aria-label="Call West Sac Tire & Wheel" className="py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-brand px-7 py-12 text-white md:px-14 md:py-16">
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[28px] border-white/5" aria-hidden="true" />
              <div className="absolute -bottom-10 right-24 h-40 w-40 rounded-full border-[16px] border-cta/15" aria-hidden="true" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold uppercase">Need tires today? Give us a call.</h2>
                  <p className="mt-3 max-w-[52ch] text-[1.1rem] text-white/80">
                    Tell us your tire size and we will quote new and used options on the phone. Open Monday to Saturday,
                    8:30 a.m. to 6 p.m.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <a href={TEL} className="btn inline-flex h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-[1.15rem] font-bold text-brand hover:bg-cta-hover">
                    <Icon name="phone" className="h-5 w-5" /> {PHONE}
                  </a>
                  <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-white/85 hover:text-white">
                    Or get directions to 640 Harbor Blvd <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-tint pb-28 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-heading text-2xl font-bold uppercase text-brand">West Sac Tire &amp; Wheel</p>
            <address className="mt-4 space-y-1.5 not-italic text-[1rem] text-muted">
              <span className="block">640 Harbor Blvd</span>
              <span className="block">West Sacramento, CA 95691</span>
              <a href={TEL} className="block font-bold text-brand">{PHONE}</a>
            </address>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="West Sac Tire & Wheel on Facebook" className="mt-5 inline-grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-brand hover:bg-brand hover:text-white">
              <Icon name="facebook" className="h-5 w-5" />
            </a>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-1.5 text-[0.98rem] text-muted">
              {["New tires", "Used tires", "Installation & mounting", "Wheel balancing", "Custom wheels", "TPMS service", "Flat repair"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-brand">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Hours</p>
            <ul className="mt-3 space-y-1.5 text-[0.98rem] text-muted">
              <li>Mon–Sat: 8:30 a.m.–6 p.m.</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Areas served</p>
            <ul className="mt-3 space-y-1.5 text-[0.98rem] text-muted">
              {["West Sacramento", "Sacramento", "Davis", "Woodland", "Yolo County"].map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col justify-between gap-2 border-t border-line px-5 pt-6 text-[0.9rem] text-muted md:flex-row md:px-6">
          <p>&copy; {new Date().getFullYear()} West Sac Tire &amp; Wheel. All rights reserved.</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a>
        </div>
      </footer>

      {/* Mobile tap-to-call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn flex h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-brand">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand">
          <Icon name="nav" className="h-5 w-5" /> Directions
        </a>
      </div>
    </>
  );
}
