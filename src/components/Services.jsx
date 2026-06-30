import GradientText from './GradientText'
import { BORDER, TEXT, MUTED, PURPLE, FONT } from '../theme'

// ── Edit services list here ──
const SERVICES = [
  {
    n: '01',
    title: 'Website Design',
    desc: 'Beautiful, conversion-focused designs that make your business stand out and leave a lasting impression on every visitor.',
  },
  {
    n: '02',
    title: 'Website Development',
    desc: 'Fast, responsive, and mobile-first websites built with clean modern code that performs at scale and loads in under 2 seconds.',
  },
  {
    n: '03',
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces that keep users engaged, reduce friction, and turn casual visitors into loyal paying customers.',
  },
  {
    n: '04',
    title: 'E-commerce Websites',
    desc: 'Online stores that convert browsers into buyers — with Paystack, Flutterwave, and a seamless checkout experience.',
  },
  {
    n: '05',
    title: 'Landing Pages',
    desc: 'High-converting landing pages built to capture leads, drive sales, and grow your email list fast. No fluff, just results.',
  },
  {
    n: '06',
    title: 'Website Maintenance',
    desc: "Keep your site fast, secure, and always up-to-date. We handle the tech so you don't have to think about it.",
  },
  {
    n: '07',
    title: 'SEO Optimization',
    desc: 'Rank higher on Google, drive organic traffic, and get discovered by the customers who actually need what you offer.',
  },
  {
    n: '08',
    title: 'Branding & Graphics',
    desc: 'Logos, brand kits, and visual identity systems that make your business look premium, professional, and unforgettable.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 24px', fontFamily: FONT }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', fontSize: 11, fontWeight: 600, color: PURPLE, letterSpacing: '0.16em', marginBottom: 20 }}>
            WHAT WE DO
          </div>
          <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Everything your business<br />
            <GradientText>needs online.</GradientText>
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: MUTED, lineHeight: 1.75, maxWidth: 460 }}>
            From design to development to SEO — we handle the full digital stack so you can focus on running your business.
          </p>
        </div>

        {/* Services list */}
        <div>
          {SERVICES.map(({ n, title, desc }) => (
            <div key={n} className="svc-row" style={{ padding: '28px 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, letterSpacing: '0.12em', minWidth: 28, paddingTop: 5, flexShrink: 0 }}>{n}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(18px, 2.5vw, 23px)', fontWeight: 700, color: TEXT, letterSpacing: '-0.02em' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
