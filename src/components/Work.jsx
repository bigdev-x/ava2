import GradientText from './GradientText'
import { CARD, BORDER, TEXT, MUTED, PURPLE, FONT } from '../theme'

// ── Edit portfolio projects here ──
const PROJECTS = [
  {
    category: 'FOOD & NIGHTLIFE · ENUGU',
    name: 'Breezzz Bar & Lounge',
    desc: 'A fully custom PWA ordering system — guests scan a QR code, browse the full menu, order drinks and food, and pay via Paystack without a single waiter interaction. Built and shipped in under 3 weeks.',
    status: 'LIVE',
  },
  {
    category: 'PERSONAL BRAND · LAGOS',
    name: 'MRBOBBY.me',
    desc: 'A sleek personal brand website built to showcase identity, content, and presence online — fast, responsive, and designed to convert visitors into followers.',
    status: 'LIVE',
  },
  {
    category: 'PORTFOLIO · LAGOS',
    name: 'Eric Gugua',
    desc: 'A professional portfolio website crafted to highlight work, skills, and story — built with clean design and optimised for every device.',
    status: 'LIVE',
  },
  {
    category: 'FOOD & LIFESTYLE · ENUGU',
    name: 'XtremeGrills',
    desc: 'A modern business website for a premium grill brand — showcasing menu, vibe, and booking experience with bold visuals and a mobile-first approach.',
    status: 'LIVE',
  },
  {
    category: 'RESTAURANT · IKEJA',
    name: 'Cilantro Restaurant',
    desc: 'A premium restaurant website built to showcase the menu, ambience, and dining experience — designed to drive reservations and bring hungry customers through the door.',
    status: 'LIVE',
  },
  {
    category: 'TRAVEL & LIFESTYLE · OWERRI',
    name: 'CruiseWithJoe',
    desc: 'A lifestyle and travel website built to capture leads, grow an audience, and showcase destinations — delivered with speed and style.',
    status: 'LIVE',
  },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function ProjectCard({ project, style = {} }) {
  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', background: `linear-gradient(145deg, ${CARD}, rgba(255,255,255,0.04))`, border: `1px solid ${BORDER}`, ...style }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #c9a227, #f0d060, #c9a227, transparent)' }} />
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ padding: '4px 12px', borderRadius: 100, background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', fontSize: 10, fontWeight: 700, color: '#d4af37', letterSpacing: '0.12em' }}>
            {project.category}
          </div>
          <div style={{ padding: '4px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 10, fontWeight: 700, color: '#22c55e' }}>
            {project.status}
          </div>
        </div>
        <h3 style={{ margin: '0 0 10px', fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.03em', fontFamily: FONT }}>
          {project.name}
        </h3>
        <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>
          {project.desc}
        </p>
      </div>
    </div>
  )
}

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

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16, marginBottom: 16 }}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* CTA card */}
        <div style={{ borderRadius: 20, padding: '40px 36px', background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.08) 100%)', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.03em' }}>
              Your business could be next.
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>
              Tell us what you want to build — we'll make it happen.
            </p>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            style={{ flexShrink: 0, padding: '14px 28px', borderRadius: 12, border: 'none', background: `linear-gradient(135deg, ${PURPLE}, #a855f7)`, color: '#fff', fontFamily: FONT, fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 6px 24px rgba(139,92,246,0.4)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start a Conversation
          </button>
        </div>

      </div>
    </section>
  )
}
