import Link from "next/link";

const methods = [
  {
    title: "Screen Printing",
    description: "The industry standard for high-volume orders. Ideal for vibrant, long-lasting team apparel and commercial merchandising.",
    features: ["Vivid Color Matching", "Extreme Durability", "Cost Effective Bulk"],
    image: "/images/screen-printing.jpeg",
  },
  {
    title: "DTF Printing",
    description: "Direct-to-Garment technology for complex designs with limitless colors. Perfect for photographic details and small runs.",
    features: ["Limitless Colors", "Soft Feel Texture", "Eco-Friendly Inks"],
    image: "/images/dtf-printing.jpeg",
  },
  {
    title: "Heat Transfer",
    description: "Precision-cut vinyl and digital transfers. Essential for individual names, numbers, and technical sports fabrics.",
    features: ["Quick Turnaround", "High Elasticity", "Custom Finish (Metallic)"],
    image: "/images/heat-transfer.jpeg",
  },
];

const galleryImages = [
  { image: "/images/print1.jpeg" },
  { image: "/images/print2.jpeg" },
  { image: "/images/print3.jpeg" },
  { image: "/images/print4.jpeg" },
  { image: "/images/print5.jpeg" },
  { image: "/images/print6.jpeg" },
  { image: "/images/print7.jpeg" },
  { image: "/images/print8.jpeg" },
];

export default function PrintingPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/printing-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">
            PRECISION<br />
            <span className="text-[#E8001C]">PRINTING.</span><br />
            UNMATCHED QUALITY.
          </h1>
          <p className="text-[#888888] text-sm max-w-lg leading-relaxed mt-4">
            From high-performance jerseys to premium corporate apparel, we engineer branding that lasts as long as your legacy. High-fidelity prints for world-class athletes.
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

      {/* ── PRODUCTION METHODS ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            OUR <span className="text-[#E8001C]">PRODUCTION</span> METHODS
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-4" />
          <p className="text-[#888888] text-sm text-center max-w-xl mx-auto mb-14">
            We utilize state-of-the-art machinery to ensure every fiber of your gear represents your brand with absolute clarity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method) => (
              <div key={method.title} className="card group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={method.image}
                    alt={method.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">
                    {method.title}
                  </h3>
                  <p className="text-[#888888] text-xs leading-relaxed mb-4">
                    {method.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-4">
                    {method.features.map((feature) => (
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

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            OUR <span className="text-[#E8001C]">WORK</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="card group relative overflow-hidden aspect-square"
              >
                <img
                  src={item.image}
                  alt={`Print work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#E8001C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="border border-[#2a2a2a] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-black uppercase text-white mb-2">
                NEED CUSTOM <span className="text-[#E8001C]">TEAM KITS?</span>
              </h2>
              <p className="text-[#888888] text-sm">
                Professional printing and branding for your entire gym staff or competition team.
              </p>
            </div>
            <Link href="/contact" className="btn-primary px-10 py-4 text-sm whitespace-nowrap">
              Custom Printing →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}