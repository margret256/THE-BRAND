import Link from "next/link";

const categories = [
  { label: "Training Gear", image: "/images/training-gear.jpeg", count: "12 Items" },
  { label: "Shirts", image: "/images/shirts.jpeg", count: "08 Items" },
  { label: "Bags", image: "/images/bags.jpeg", count: "06 Items" },
  { label: "Hydration Bottles", image: "/images/bottles.jpeg", count: "04 Items" },
];

const products = [
  { name: "Grand Pro Duffel XL", category: "Bags", price: 59.00, oldPrice: 79.00, image: "/images/duffel.jpeg", badge: "New Arrival" },
  { name: "Aero-Strike Football", category: "Balls", price: 35.00, image: "/images/football.jpeg", badge: "New Arrival" },
  { name: "Precision Grip Gloves", category: "Training", price: 48.00, image: "/images/gloves.jpeg", badge: "New Arrival" },
  { name: "Elite Speed Jump Rope", category: "Training", price: 28.00, image: "/images/jumprope.jpeg", badge: "New Arrival" },
  { name: "Titanium Grip Bottle", category: "Hydration", price: 19.00, image: "/images/bottle2.jpeg", badge: "New Arrival" },
  { name: "Carbon Recovery Roller", category: "Recovery", price: 40.00, image: "/images/roller.jpeg", badge: "New Arrival" },
  { name: "Pro League Elite Ball", category: "Balls", price: 85.00, image: "/images/ball2.jpeg", badge: "New Arrival" },
  { name: "Team Training Kit", category: "Training", price: 60.00, image: "/images/kit.jpeg", badge: "New Arrival" },
];

const filters = ["All", "Bags", "Balls", "Training", "Recovery"];

export default function SportsAccessoriesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/accessories-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-6">
            EQUIP YOUR<br />
            <span className="text-[#E8001C]">AMBITION.</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-xl">
            High-performance gear engineered for the elite. From tactical bags to precision-weighted balls, we provide the tools for your next victory.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-10">
            {[
              { label: "Quality Gear", sub: "Professional Grade" },
              { label: "Custom Design", sub: "Tailored to You" },
              { label: "Expert Team", sub: "Pro Branding" },
              { label: "Fast Delivery", sub: "Quick Turnaround" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-black text-xs uppercase tracking-widest">{stat.label}</p>
                <p className="text-[#888888] text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-black uppercase text-white mb-2">
                SPORTS <span className="text-[#E8001C]">ACCESSORIES</span>
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed">
                Browse our curated collections of specialized equipment designed for durability and peak performance.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div key={cat.label} className="card group relative overflow-hidden cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="absolute top-2 left-2 badge-red text-xs">
                    {cat.count}
                  </span>
                  <div className="p-3">
                    <p className="text-white text-xs font-black uppercase tracking-widest">{cat.label}</p>
                    <p className="text-[#888888] text-xs">Professional Grade Equipment</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED DROPS ── */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            FEATURED <span className="text-[#E8001C]">DROPS</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-8" />

          {/* Filter Tabs */}
          <div className="flex items-center gap-4 justify-center mb-10 flex-wrap">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`text-xs uppercase tracking-widest font-bold px-4 py-2 border transition-colors duration-200 ${
                  i === 0
                    ? "bg-[#E8001C] border-[#E8001C] text-white"
                    : "border-[#2a2a2a] text-[#888888] hover:border-[#E8001C] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card group cursor-pointer">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 badge-red">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-[#888888] text-xs uppercase tracking-widest mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-white font-black text-sm uppercase mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.oldPrice && (
                      <span className="text-[#888888] text-xs line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-[#E8001C] font-black text-sm">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <button className="btn-primary w-full text-xs mt-3 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}