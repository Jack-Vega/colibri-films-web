import Image from 'next/image'

export default function Home() {
  return (
    <main className="font-sans">

      {/* ── HEADER ── */}
      <header style={{backgroundColor: '#87CEEB'}} className="py-4 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-end">
          <nav className="flex gap-8 text-[#061a2b] font-medium text-sm uppercase tracking-widest">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#rebate"   className="hover:opacity-60 transition-opacity">Rebate</a>
            <a href="#contact"  className="hover:opacity-60 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{backgroundColor: '#061a2b'}} className="py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.png"
              alt="Colibri Films Mauritius"
              width={320}
              height={180}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>
          <p className="text-[#87CEEB] uppercase tracking-[0.3em] text-xs mb-8 font-light">
            Mauritius · Indian Ocean
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-6">
            Local expertise.<br />
            <span className="italic">International standards.</span>
          </h1>
          <p className="text-white/65 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-14 leading-relaxed">
            Your trusted production service partner for film, commercials and
            branded content in Mauritius and the Indian Ocean region.
          </p>
          <a
            href="#contact"
            style={{backgroundColor: '#87CEEB', color: '#061a2b'}}
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest rounded hover:opacity-85 transition-opacity"
          >
            Start a Production Enquiry
          </a>
        </div>
      </section>


      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-[#061a2b] text-4xl font-light mb-4">What We Do</h2>
          <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto text-sm">
            Full-service production support for international crews landing in Mauritius.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎬', title: 'Line Production',
                desc: 'End-to-end production management — scheduling, budgeting, crew coordination and on-the-ground execution.' },
              { icon: '🗺️', title: 'Location Scouting',
                desc: "Access to Mauritius's most cinematic beaches, mountains, heritage sites, sugar cane fields and urban landscapes." },
              { icon: '🎭', title: 'Local Crew',
                desc: 'Experienced local HODs and crew across all departments — DPs, gaffers, art directors, stylists and more.' },
              { icon: '📋', title: 'Permits & Logistics',
                desc: 'We handle all filming permits, customs carnets, equipment logistics and government liaisons.' },
              { icon: '✈️', title: 'International Support',
                desc: 'Full support for foreign crews — immigration, accommodation, transport and airport facilitation.' },
              { icon: '💰', title: 'Film Rebate Facilitation',
                desc: "We guide you through Mauritius's up to 40% film rebate incentive — maximising your qualifying spend." },
            ].map((s, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-[#061a2b] text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── REBATE ── */}
      <section id="rebate" style={{backgroundColor: '#EAF5FB'}} className="py-24 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-[#4a9dbf] uppercase tracking-widest text-xs font-semibold mb-4">
              Mauritius Film Incentive
            </p>
            <h2 className="text-[#061a2b] text-4xl font-light mb-6 leading-tight">
              Up to 40% rebate on qualifying production spend
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Mauritius offers one of the most competitive film incentive programmes in the
              region. Qualifying expenditure on local goods, services and labour can attract
              a significant cash rebate — we handle the entire application and compliance process.
            </p>
            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                'Rebate on local goods & services',
                'Labour costs for Mauritian crew',
                'Post-production and VFX spend',
                'Full compliance guidance and reporting',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#87CEEB] text-lg leading-none mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div style={{backgroundColor: '#061a2b'}} className="rounded-2xl p-10 text-white w-full max-w-xs text-center">
              <p style={{color: '#87CEEB'}} className="text-7xl font-light mb-1">40%</p>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-6">Max Rebate</p>
              <p className="text-white/70 text-sm leading-relaxed">
                On qualifying local production spend — one of the most competitive rates
                in Africa and the Indian Ocean.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── CONTACT ── */}
      <section id="contact" style={{backgroundColor: '#061a2b'}} className="py-28 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#87CEEB] uppercase tracking-widest text-xs font-semibold mb-4">
            Let's Talk
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-light mb-6">
            Ready to shoot in Mauritius?
          </h2>
          <p className="text-white/55 mb-12 text-lg leading-relaxed">
            Whether you're scouting locations, planning a commercial shoot, or navigating
            the rebate — get in touch and we'll make it happen.
          </p>
          <a
            href="mailto:Alwyn@colibrifilms.mu"
            style={{backgroundColor: '#87CEEB', color: '#061a2b'}}
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest rounded hover:opacity-85 transition-opacity mb-8"
          >
            Alwyn@colibrifilms.mu
          </a>
          <a
            href="https://wa.me/23057390849"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm mt-6"
          >
            <span>💬</span>
            <span>WhatsApp: +230 5739 0849</span>
          </a>
          <p className="text-white/25 text-sm mt-4">Flic en Flac, Mauritius · Indian Ocean</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{backgroundColor: '#040f18'}} className="py-8 px-8 text-center">
        <p className="text-white/20 text-xs">
          © 2025 Colibri Films Mauritius. All rights reserved. | www.colibrifilms.mu
        </p>
      </footer>

    </main>
  )
}
