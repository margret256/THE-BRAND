import Link from "next/link";

const categories = [
  { label: "Sports Accessories", image: "/images/accessories.jpeg", href: "/sports-accessories" },
  { label: "Sports Wear", image: "/images/sportswear.jpeg", href: "/sports-accessories" },
  { label: "Shoes", image: "/images/shoes.jpeg", href: "/sports-accessories" },
  { label: "Cups & Trophies", image: "/images/trophies.jpeg", href: "/engraving" },
  { label: "Gym Wear & Equipment", image: "/images/gym.jpeg", href: "/gym-wear" },
];

const services = [
  {
    title: "Sports Accessories",
    description: "High quality sports accessories for teams, athletes and fans.",
    image: "/images/accessories.jpeg",
    href: "/sports-accessories",
  },
  {
    title: "Sports Wear",
    description: "Premium jerseys, training kits and custom team wear.",
    image: "/images/sportswear.jpeg",
    href: "/sports-accessories",
  },
  {
    title: "Shoes",
    description: "Top performance shoes for all sports.",
    image: "/images/shoes.jpeg",
    href: "/sports-accessories",
  },
  {
    title: "Logo Designing",
    description: "Creative, modern and professional logo designs that represent your brand.",
    image: "/images/logo-design.jpeg",
    href: "/logo-designing",
  },
  {
    title: "Engraving",
    description: "Custom engraving on trophies, medals, plaques, water bottles and more with precision.",
    image: "/images/engraving.jpeg",
    href: "/engraving",
  },
  {
    title: "Printing",
    description: "T-shirt printing, branding, uniforms and custom prints for all needs.",
    image: "/images/printing.jpeg",
    href: "/printing",
  },
  {
    title: "Gym Wear & Equipment",
    description: "Premium gym wear and quality equipment for fitness and training.",
    image: "/images/gym.jpeg",
    href: "/gym-wear",
  },
  {
    title: "Banners & Posters",
    description: "Eye-catching banners and posters for events, promotions and branding.",
    image: "/images/banners.jpeg",
    href: "/banners-posters",
  },
];

const whyUs = [
  { icon: "🛡️", title: "Quality Products", desc: "We deliver only the best quality gear and services." },
  { icon: "🎨", title: "Custom Designs", desc: "Unique designs tailored to your team or brand identity." },
  { icon: "👥", title: "Expert Team", desc: "Experienced professionals ready to serve you." },
  { icon: "🚚", title: "Fast Delivery", desc: "Quick turnaround time for all orders and services." },
  { icon: "🎧", title: "Customer Support", desc: "We are always here to help you anytime, anywhere." },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-6">
            GEAR UP.<br />
            PLAY HARD.<br />
            <span className="text-[#E8001C]">WIN MORE.</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-xl mb-10">
            Premium quality sports gear for champions. Jerseys, shoes, cups and more — all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/auth/login" className="btn-primary text-sm px-8 py-3">
              Login
            </Link>
            <Link href="/auth/register" className="btn-outline text-sm px-8 py-3">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group relative overflow-hidden bg-[#111111] border border-[#2a2a2a] hover:border-[#E8001C] transition-colors duration-200"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    {cat.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            OUR <span className="text-[#E8001C]">SERVICES</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.title}
                className="card group flex gap-4 p-4"
              >
                <div className="w-32 h-24 shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-black uppercase text-sm mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#888888] text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="text-[#E8001C] text-xs font-bold uppercase tracking-widest hover:underline mt-2 inline-block"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Last 2 services — wider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {services.slice(6).map((service) => (
              <div
                key={service.title}
                className="card group flex gap-4 p-4"
              >
                <div className="w-40 h-24 shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-black uppercase text-sm mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#888888] text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="text-[#E8001C] text-xs font-bold uppercase tracking-widest hover:underline mt-2 inline-block"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-[#111111] border-t border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-white font-black uppercase text-xs tracking-widest">
                  {item.title}
                </h3>
                <p className="text-[#888888] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR LOCATION ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black uppercase text-white text-center mb-2">
            OUR <span className="text-[#E8001C]">LOCATION</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8001C] mx-auto mb-14" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="w-full h-80 bg-[#111111] border border-[#2a2a2a] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d32.5811!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTgnNDkuMCJOIDMywrAzNCc1Mi4wIkU!5e0!3m2!1sen!2sug!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[#E8001C] font-black uppercase text-lg tracking-widest">
                THE BRAND SPORTS & BRANDING SOLUTION
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-[#E8001C] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white text-sm">Shop No. ZX 103, Ben Kiwanuka Street, Kampala, Uganda</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 text-[#E8001C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-sm">+256 700 123 456</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 text-[#E8001C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-sm">+256 700 123 456</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 text-[#E8001C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-sm">info@thebrandug.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 text-[#E8001C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white text-sm">Mon - Sat: 8:00 AM - 7:00 PM &nbsp;|&nbsp; Sunday: 10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}