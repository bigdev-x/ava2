import GradientText from './GradientText'
import { CARD, BORDER, TEXT, MUTED, DIMMED, PURPLE, FONT } from '../theme'

// ── Edit portfolio projects here ──
const PROJECT = {
  category: 'FOOD & NIGHTLIFE · ENUGU',
  name: 'Breezzz Bar & Lounge',
  desc: 'A fully custom PWA ordering system — guests scan a QR code, browse the full menu, order drinks and food, and pay via Paystack without a single waiter interaction. Built and shipped in under 3 weeks.',
  status: 'LIVE',
}

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Work() {
  return (
    <section id="work" style={{ padding: '100px 24px', fontFamily: FONT }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', fontSize: 11, fontWeight: 600, color: PURPLE, letterSpacing: '0.16em', marginBottom: 18 }}>
            RECENT WORK
          </div>
          <h2 style={{ margin: 0, fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.04em' }}>
            <GradientText>Live products</GradientText> we shipped.
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ borderRadius: 28, overflow: 'hidden', background: `linear-gradient(145deg, ${CARD}, rgba(255,255,255,0.04))`, border: `1px solid ${BORDER}` }}>
          {/* Gold accent line */}
          <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #c9a227, #f0d060, #c9a227, transparent)' }} />

          <div className="work-grid">
            {/* Project card */}
            <div style={{ padding: 40, borderRight: `1px solid ${BORDER}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                <div style={{ padding: '4px 12px', borderRadius: 100, background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', fontSize: 10, fontWeight: 700, color: '#d4af37', letterSpacing: '0.12em' }}>
                  {PROJECT.category}
                </div>
                <div style={{ padding: '4px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 10, fontWeight: 700, color: '#22c55e' }}>
                  {PROJECT.status}
                </div>
              </div>

              <h3 style={{ margin: '0 0 12px', fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.03em' }}>
                {PROJECT.name}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>
                {PROJECT.desc}
              </p>
            </div>

            {/* CTA card */}
            <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.08) 100%)' }}>
              <h3 style={{ margin: '0 0 12px', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.03em' }}>
                Your business could be next.
              </h3>
              <p style={{ margin: '0 0 28px', fontSize: 14, color: MUTED, lineHeight: 1.8 }}>
                Tell us what you want to build — we'll make it happen.
              </p>
              <button
                onClick={() => scrollTo('contact')}
                style={{ alignSelf: 'flex-start', padding: '14px 28px', borderRadius: 12, border: 'none', background: `linear-gradient(135deg, ${PURPLE}, #a855f7)`, color: '#fff', fontFamily: FONT, fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 6px 24px rgba(139,92,246,0.4)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
