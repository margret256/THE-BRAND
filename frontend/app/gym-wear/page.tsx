import Link from "next/link";

const apparel = [
  {
    name: "Titan Compression 1",
    category: "Elite Wear",
    price: 65.00,
    image: "/images/compression.jpeg",
  },
  {
    name: "Apex Velocity Short",
    category: "Elite Wear",
    price: 45.00,
    image: "/images/shorts.jpeg",
  },
  {
    name: "Core Fusion Legging",
    category: "Training Wear",
    price: 75.00,
    image: "/images/legging.jpeg",
  },
  {
    name: "Onyx Thermal Hood",
    category: "Outerwear",
    price: 95.00,
    image: "/images/hoodie.jpeg",
  },
];

const equipment = [
  {
    name: "Hex-Pro Dumbbell Set",
    category: "Pro Hardware",
    price: 299.00,
    features: ["High-Grade Rubber", "Ergonomic Grip", "Weight: 5KG-50KG"],
    image: "/images/dumbbells.jpeg",
  },
  {
    name: "Iron-Grip Olympic Bar",
    category: "Pro Hardware",
    price: 350.00,
    features: ["200KG Loadable", "Chrome Finish", "Needle Bearings"],
    image: "/images/olympic-bar.jpeg",
  },
  {
    name: "Summit Adjustable Bench",
    category: "Pro Hardware",
    price: 420.00,
    features: ["7 Incline Angles", "Heavy-Duty Steel", "350KG Capacity"],
    image: "/images/bench.jpeg",
  },
  {
    name: "Quantum Power Rack",
    category: "Pro Hardware",
    price: 1250.00,
    features: ["J-Hooks Included", "Pull-Up Bar", "Laser-Cut Steel"],
    image: "/images/power-rack.jpeg",
  },
];

const tabs = ["Full Catalog", "Elite Wear", "Pro Gear"];

export default function GymWearPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/gym-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">
            PUSH.<br />
            EVOLVE.<br />
            <span className="text-[#E8001C]">DOMINATE.</span>
          </h1>
          <p className="text-[#888888] text-sm max-w-lg leading-relaxed mt-4">
            Engineered for the elite athlete. Discover our curated collection of high-tensile hardware and precision-fit apparel.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="#apparel" className="btn-primary px-8 py-3 text-sm">
              Shop Now
            </Link>
            <Link href="/contact" className="btn-outline px-8 py-3 text-sm">
              Custom Team Kits
            </Link>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="bg-[#111111] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-8">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`text-xs uppercase tracking-widest font-bold py-4 border-b-2 transition-colors duration-200 ${
                  i === 0
                    ? "border-[#E8001C] text-[#E8001C]"
                    : "border-transparent text-[#888888] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE APPAREL ── */}
      <section id="apparel" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[#E8001C] text-xs uppercase tracking-widest font-bold mb-2">
            Performance Equipment
          </p>
          <h2 className="text-3xl font-black uppercase text-white mb-10">
            PERFORMANCE <span className="text-[#E8001C]">APPAREL</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {apparel.map((item) => (
              <div key={item.name} className="card group cursor-pointer">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[#E8001C] text-xs uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-white font-black text-sm uppercase mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white font-bold text-sm mb-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-[#888888] text-xs leading-relaxed">
                    Premium moisture-wicking technology with anatomical fit.
                  </p>
                  <button className="btn-primary w-full text-xs mt-3 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Team Kits Banner */}
          <div className="mt-12 border border-[#2a2a2a] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-2">
                NEED CUSTOM TEAM KITS?
              </h3>
              <p className="text-[#888888] text-xs">
                Professional printing and branding for your entire gym staff or competition team.
              </p>
            </div>
            <Link href="/printing" className="btn-primary px-8 py-3 text-xs whitespace-nowrap">
              Custom Printing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL EQUIPMENT ── */}
      <section className="py-20 bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[#888888] text-xs uppercase tracking-widest font-bold mb-2">
            High-Tensile Strength
          </p>
          <h2 className="text-3xl font-black uppercase text-white mb-10">
            INDUSTRIAL <span className="text-[#E8001C]">EQUIPMENT</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div key={item.name} className="card group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 badge-red text-xs">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-white font-black text-sm mb-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <h3 className="text-white font-black text-sm uppercase mb-3">
                    {item.name}
                  </h3>
                  <ul className="flex flex-col gap-1 mb-4">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#E8001C] rounded-full shrink-0" />
                        <span className="text-[#888888] text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full text-xs py-2">
                    Add to Cart
                  </button>
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
            GEAR UP FOR <span className="text-[#E8001C]">GREATNESS</span>
          </h2>
          <p className="text-[#888888] text-sm max-w-xl mx-auto mb-8">
            Contact us today for custom gym wear and equipment solutions for your team or training center.
          </p>
          <Link href="/contact" className="btn-primary px-10 py-4 text-sm">
            Contact Us Today
          </Link>
        </div>
      </section>

    </div>
  );
}