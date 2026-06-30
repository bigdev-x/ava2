import GradientText from './GradientText'
import { CARD, BORDER, TEXT, MUTED, PURPLE, FONT } from '../theme'

// ── Edit "Why AvaMax" cards here ──
const REASONS = [
  {
    n: '01',
    title: 'Fast Delivery',
    body: 'Most projects go live in 2–4 weeks. No endless meetings, no bottlenecks, no excuses.',
  },
  {
    n: '02',
    title: 'Mobile-First',
    body: "Every site is built for phones first — because that's where your customers actually are.",
  },
  {
    n: '03',
    title: 'Built to Convert',
    body: "We don't just make sites look good. We engineer them to bring in real business results.",
  },
  {
    n: '04',
    title: 'Flat-Rate Pricing',
    body: 'One clear quote, no hidden fees. You know the full cost before we write a single line of code.',
  },
]

export default function Why() {
  return (
    <section style={{ padding: '80px 24px', fontFamily: FONT, background: CARD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        <div style={{ marginBottom: 52 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.04em' }}>
            Why choose <GradientText>AvaMax?</GradientText>
          </h2>
        </div>

        <div className="why-grid">
          {REASONS.map(({ n, title, body }) => (
            <div key={n} style={{ padding: 32, borderRadius: 20, border: `1px solid ${BORDER}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, letterSpacing: '0.16em', marginBottom: 12 }}>{n}</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 19, fontWeight: 700, color: TEXT, letterSpacing: '-0.02em' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
