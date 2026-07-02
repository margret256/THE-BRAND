import Link from "next/link";

const bannerTypes = [
  {
    title: "Stadium Banners",
    description: "Maximum visibility for arenas and large outdoor events.",
    features: ["Weatherproof Vinyl", "UV-Resistant Inks", "Reinforced Eyelets", "Custom Dimensions"],
    image: "/images/stadium-banner.jpeg",
  },
  {
    title: "Roll-Up Stands",
    description: "Portable, sleek branding for trade shows and conferences.",
    features: ["Premium Aluminum Base", "Matte Anti-Curl Fabric", "Carry Case Included", "Interchangeable Graphics"],
    image: "/images/rollup-stand.jpeg",
  },
  {
    title: "Event Posters",
    description: "High-fidelity prints for indoor promotional displays.",
    features: ["250gsm Silk Paper", "Edge-To-Edge Color", "Lamination Options", "Bulk Pricing Available"],
    image: "/images/event-poster.jpeg",
  },
];

const gallery = [
  { image: "/images/banner1.jpeg", title: "Stadium Banner" },
  { image: "/images/banner2.jpeg", title: "Event Poster" },
  { image: "/images/banner3.jpeg", title: "Roll-Up Stand" },
  { image: "/images/banner4.jpeg", title: "Promotional Banner" },
  { image: "/images/banner5.jpeg", title: "Business Banner" },
  { image: "/images/banner6.jpeg", title: "Event Poster" },
];

const sizes = [
  { size: "A4", dims: "210 × 297mm", use: "Flyers & Handouts" },
  { size: "A3", dims: "297 × 420mm", use: "Posters & Notices" },
  { size: "A2", dims: "420 × 594mm", use: "Event Displays" },
  { size: "A1", dims: "594 × 841mm", use: "Large Displays" },
  { size: "A0", dims: "841 × 1189mm", use: "Stadium & Outdoor" },
  { size: "Custom", dims: "Any Size", use: "Your Specifications" },
];

export default function BannersPostersPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/banners-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">
            PRECISION<br />
            <span className="text-[#E8001C]">PRINTING.</span><br />
            UNMATCHED QUALITY.
          </h1>
          <p className="text-[#888888] text-sm max-w-lg leading-relaxed mt-4">
            From high-performance event banners to premium promotional posters, we engineer branding that lasts as long as your legacy.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3 text-sm">
              Get A Quote
            </Link>
            <Link href="#gallery" className="btn-outline px-8 py-3 text-sm">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL VISIBILITY ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-black uppercase text-white mb-1">
            PROFESSIONAL <span className="text-[#E8001C]">VISIBILITY</span>
          </h2>
          <div className="w-12 h-1 bg-[#E8001C] mb-6" />
          <p className="text-[#888888] text-sm max-w-lg mb-14 leading-relaxed">
            We specialize in high-impact physical branding. Every piece is crafted with precision and the highest quality materials to represent your brand with excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bannerTypes.map((type) => (
              <div key={type.title} className="card group overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[#888888] text-xs leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-4">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#E8001C] rounded-full shrink-0" />
                        <span className="text-[#888888] text-xs uppercase tracking-widest">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
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

      {/* ── SIZES ── */}
      <section className="py-16 bg-[#111111] border-t border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-black uppercase text-white text-center mb-2">
            AVAILABLE <span className="text-[#E8001C]">SIZES</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sizes.map((item) => (
              <div
                key={item.size}
                className="card p-4 text-center hover:border-[#E8001C] transition-colors duration-200"
              >
                <p className="text-[#E8001C] font-black text-2xl mb-1">{item.size}</p>
                <p className="text-white text-xs font-bold mb-1">{item.dims}</p>
                <p className="text-[#888888] text-xs">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            OUR <span className="text-[#E8001C]">WORK</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="card group relative overflow-hidden aspect-video"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-black uppercase tracking-widest text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="border border-[#2a2a2a] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-black uppercase text-white mb-2">
                READY TO MAKE AN <span className="text-[#E8001C]">IMPACT?</span>
              </h2>
              <p className="text-[#888888] text-sm max-w-lg">
                Contact us today for custom banners, posters and promotional materials that get your brand noticed.
              </p>
            </div>
            <Link href="/contact" className="btn-primary px-10 py-4 text-sm whitespace-nowrap">
              Start Your Order →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}