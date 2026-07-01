import Link from "next/link";

const materials = [
  {
    title: "24K Gold Plating",
    description: "The ultimate standard for champions. Mirror-finish with deep contrast laser engraving.",
    image: "/images/gold-plating.jpeg",
  },
  {
    title: "Premium Crystal",
    description: "Elegant light refraction with 3D internal laser etching for a holographic effect.",
    image: "/images/crystal.jpeg",
  },
  {
    title: "Brushed Titanium",
    description: "Industrial strength meets modern aesthetics. Rugged, matte finish with sharp dark markings.",
    image: "/images/titanium.jpeg",
  },
];

const portfolio = [
  { image: "/images/engrave1.jpeg", title: "Trophy Engraving" },
  { image: "/images/engrave2.jpeg", title: "Medal Engraving" },
  { image: "/images/engrave3.jpeg", title: "Bottle Engraving" },
  { image: "/images/engrave4.jpeg", title: "Award Engraving" },
];

const items = [
  "Trophies",
  "Cups",
  "Medals",
  "Awards",
  "Personalized Gifts",
  "Custom Bottles",
  "Plaques",
  "Accessories",
];

export default function EngravingPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/engraving-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">
            ETERNALIZING<br />
            <span className="text-[#E8001C]">VICTORY.</span>
          </h1>
          <p className="text-[#888888] text-sm max-w-lg leading-relaxed">
            From world-class trophies to personalized medals. We use precision laser and diamond-drag technology to engrave your legacy with surgical accuracy.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3 text-sm">
              Get A Quote
            </Link>
            <Link href="#portfolio" className="btn-outline px-8 py-3 text-sm">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT WE ENGRAVE ── */}
      <section className="py-16 bg-[#111111] border-t border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-black uppercase text-white text-center mb-2">
            WHAT WE <span className="text-[#E8001C]">ENGRAVE</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="card p-4 text-center hover:border-[#E8001C] transition-colors duration-200"
              >
                <div className="w-8 h-1 bg-[#E8001C] mx-auto mb-3" />
                <p className="text-white font-black uppercase text-xs tracking-widest">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM MATERIALS ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="text-3xl font-black uppercase text-white">
              PREMIUM <span className="text-[#E8001C]">MATERIALS</span>
            </h2>
            <div className="flex gap-2">
              {["Scratch Resistant", "Weather Proof", "UV Stable"].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#2a2a2a] text-[#888888] text-xs uppercase tracking-widest px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[#888888] text-sm max-w-lg leading-relaxed mb-12">
            Choose the canvas for your recognition. We source only high-grade alloys and clarity-verified crystals for all our engraving projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((mat) => (
              <div key={mat.title} className="card group overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={mat.image}
                    alt={mat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">
                    {mat.title}
                  </h3>
                  <p className="text-[#888888] text-xs leading-relaxed mb-4">
                    {mat.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#E8001C] text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-20 bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            THE <span className="text-[#E8001C]">PORTFOLIO</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-4" />
          <p className="text-[#888888] text-sm text-center max-w-xl mx-auto mb-12">
            Witness the precision of our work across different sectors, from professional sports leagues to corporate excellence awards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="card group relative overflow-hidden aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-black uppercase tracking-widest text-xs text-center px-2">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black uppercase text-white mb-4">
            READY TO ENGRAVE YOUR <span className="text-[#E8001C]">LEGACY?</span>
          </h2>
          <p className="text-[#888888] text-sm max-w-xl mx-auto mb-8">
            Contact us today and let's create something that lasts forever.
          </p>
          <Link href="/contact" className="btn-primary px-10 py-4 text-sm">
            Start Your Order
          </Link>
        </div>
      </section>

    </div>
  );
}