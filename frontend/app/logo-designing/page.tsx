import Link from "next/link";

const portfolioImages = [
  { image: "/images/logo1.jpeg", title: "Business Logo" },
  { image: "/images/logo2.jpeg", title: "Team Logo" },
  { image: "/images/logo3.jpeg", title: "Brand Identity" },
  { image: "/images/logo4.jpeg", title: "Creative Concept" },
  { image: "/images/logo5.jpeg", title: "Sports Logo" },
  { image: "/images/logo6.jpeg", title: "Corporate Logo" },
];

const services = [
  {
    title: "Business Logos",
    description: "Professional logos that represent your business identity and values.",
  },
  {
    title: "Team Logos",
    description: "Bold and powerful logos designed for sports teams and clubs.",
  },
  {
    title: "Brand Identity",
    description: "Complete brand identity packages including colors, fonts and style guides.",
  },
  {
    title: "Social Media Design",
    description: "Eye-catching designs optimized for all social media platforms.",
  },
  {
    title: "Flyer Design",
    description: "Promote your business with professionally designed flyers.",
  },
  {
    title: "Business Card Design",
    description: "Make a lasting impression with premium business card designs.",
  },
];

export default function LogoDesigningPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/logo-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <p className="text-[#E8001C] text-xs uppercase tracking-widest font-bold mb-4">
            Custom Logo Design Services
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">
            DEFINE YOUR<br />
            <span className="text-[#E8001C]">LEGACY.</span>
          </h1>
          <p className="text-white text-xl font-light mb-2">
            Unique · Professional · Memorable
          </p>
          <p className="text-[#888888] text-sm max-w-lg mt-4">
            We don't just design logos. We engineer high-performance visual identities that command authority on the field and in the market.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3 text-sm">
              Get A Quote
            </Link>
            <Link href="#portfolio" className="btn-outline px-8 py-3 text-sm">
              View Portfolio
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
          <p className="text-[#888888] text-sm max-w-lg mb-12 leading-relaxed">
            We specialize in high-impact visual branding. Every piece is crafted with precision and the highest quality materials to represent your brand with excellence.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card p-6 hover:border-[#E8001C] transition-colors duration-200"
              >
                <div className="w-10 h-1 bg-[#E8001C] mb-4" />
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">
                  {service.title}
                </h3>
                <p className="text-[#888888] text-xs leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-[#E8001C] text-xs font-bold uppercase tracking-widest hover:underline mt-4 inline-block"
                >
                  Learn More →
                </Link>
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
            A showcase of our logo and branding work across different industries and sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((item) => (
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
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black uppercase text-white mb-4">
            READY TO BUILD YOUR <span className="text-[#E8001C]">BRAND?</span>
          </h2>
          <p className="text-[#888888] text-sm max-w-xl mx-auto mb-8">
            Contact us today and let's create a logo that represents your vision and sets you apart from the competition.
          </p>
          <Link href="/contact" className="btn-primary px-10 py-4 text-sm">
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}