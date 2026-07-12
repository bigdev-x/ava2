import { useState } from 'react'
import GradientText from './GradientText'
import { BORDER, TEXT, MUTED, DIMMED, PURPLE, FONT } from '../theme'

// ── Edit portfolio projects here ──
const PROJECTS = [
  {
    category: 'FOOD & NIGHTLIFE · ENUGU',
    name: 'Breezzz Bar & Lounge',
    desc: 'A fully custom PWA ordering system — guests scan a QR code, browse the full menu, order drinks and food, and pay via Paystack without a single waiter interaction. Built and shipped in under 3 weeks.',
    status: 'LIVE',
    bg: 'linear-gradient(135deg, #1a0e00 0%, #2e1a00 60%, #120800 100%)',
    orb: 'rgba(201,162,39,0.25)',
    accent: '#c9a227',
    initial: 'B',
    span: 2,  // featured — spans 2 columns
  },
  {
    category: 'PERSONAL BRAND · LAGOS',
    name: 'MRBOBBY.me',
    desc: 'A sleek personal brand website built to showcase identity, content, and presence online — fast, responsive, and designed to convert visitors into followers.',
    status: 'LIVE',
    bg: 'linear-gradient(135deg, #00071a 0%, #001433 60%, #000c20 100%)',
    orb: 'rgba(56,189,248,0.2)',
    accent: '#38bdf8',
    initial: 'M',
    span: 1,
  },
  {
    category: 'PORTFOLIO · LAGOS',
    name: 'Eric Gugua',
    desc: 'A professional portfolio website crafted to highlight work, skills, and story — built with clean design and optimised for every device.',
    status: 'LIVE',
    bg: 'linear-gradient(135deg, #001a0e 0%, #002e1a 60%, #000f09 100%)',
    orb: 'rgba(34,197,94,0.2)',
    accent: '#22c55e',
    initial: 'E',
    span: 1,
  },
  {
    category: 'FOOD & LIFESTYLE · ENUGU',
    name: 'XtremeGrills',
    desc: 'A modern business website for a premium grill brand — showcasing menu, vibe, and booking experience with bold visuals and a mobile-first approach.',
    status: 'LIVE',
    bg: 'linear-gradient(135deg, #1a0500 0%, #2e0d00 60%, #150300 100%)',
    orb: 'rgba(249,115,22,0.22)',
    accent: '#f97316',
    initial: 'X',
    span: 1,
  },
  {
    category: 'RESTAURANT · IKEJA',
    name: 'Cilantro Restaurant',
    desc: 'A premium restaurant website built to showcase the menu, ambience, and dining experience — designed to drive reservations and bring customers through the door.',
    status: 'LIVE',
    bg: 'linear-gradient(135deg, #001a08 0%, #002e14 60%, #000f05 100%)',
    orb: 'rgba(16,185,129,0.2)',
    accent: '#10b981',
    initial: 'C',
    span: 1,
  },
  {
    category: 'TRAVEL & LIFESTYLE · OWERRI',
    name: 'CruiseWithJoe',
    desc: 'A lifestyle and travel website built to capture leads, grow an audience, and showcase destinations — delivered with speed and style.',
    status: 'LIVE',
    bg: 'linear-gradient(135deg, #0a001a 0%, #180033 60%, #08001a 100%)',
    orb: 'rgba(139,92,246,0.25)',
    accent: '#8b5cf6',
    initial: 'J',
    span: 1,
  },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        background: project.bg,
        border: `1px solid ${hovered ? project.accent + '55' : 'rgba(255,255,255,0.08)'}`,
        minHeight: featured ? 340 : 260,
        cursor: 'default',
        transition: 'border-color 0.3s, transform 0.25s, box-shadow 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 48px ${project.accent}22` : '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Orb */}
      <div style={{
        position: 'absolute',
        top: featured ? '-40px' : '-30px',
        right: featured ? '-40px' : '-30px',
        width: featured ? 260 : 180,
        height: featured ? 260 : 180,
        borderRadius: '50%',
        background: `radial-gradient(ellipse, ${project.orb} 0%, transparent 70%)`,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        opacity: hovered ? 1 : 0.6,
      }} />

      {/* Noise texture overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")', pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', padding: featured ? '36px 36px 32px' : '28px 28px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        {/* Top: initial letter + badges */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'auto' }}>
          <div style={{
            width: featured ? 56 : 44,
            height: featured ? 56 : 44,
            borderRadius: 14,
            background: `${project.accent}22`,
            border: `1px solid ${project.accent}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: featured ? 24 : 18,
            fontWeight: 900,
            color: project.accent,
            fontFamily: FONT,
            flexShrink: 0,
          }}>
            {project.initial}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ padding: '4px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', fontSize: 10, fontWeight: 700, color: '#22c55e', letterSpacing: '0.08em' }}>
              {project.status}
            </div>
          </div>
        </div>

        {/* Bottom: name + category + desc */}
        <div style={{ marginTop: featured ? 48 : 32 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: project.accent, letterSpacing: '0.14em', marginBottom: 8, opacity: 0.85 }}>
            {project.category}
          </div>
          <h3 style={{
            margin: '0 0 10px',
            fontSize: featured ? 'clamp(22px, 3vw, 32px)' : 'clamp(17px, 2vw, 22px)',
            fontWeight: 800,
            color: TEXT,
            letterSpacing: '-0.03em',
            fontFamily: FONT,
            lineHeight: 1.15,
          }}>
            {project.name}
          </h3>
          <p style={{
            margin: 0,
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.75,
            maxWidth: featured ? 420 : '100%',
            opacity: hovered ? 1 : 0.75,
            transition: 'opacity 0.25s',
          }}>
            {project.desc}
          </p>
        </div>
      </div>

      {/* Accent bottom line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 2,
        background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />
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

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: 14 }}>

          {/* Row 1: Breezzz (featured, 2 cols) + MRBOBBY (1 col) */}
          <div style={{ gridColumn: 'span 2' }}>
            <ProjectCard project={PROJECTS[0]} featured />
          </div>
          <div>
            <ProjectCard project={PROJECTS[1]} />
          </div>

          {/* Row 2: Eric Gugua + XtremeGrills + Cilantro (3 equal cols) */}
          {PROJECTS.slice(2, 5).map(p => (
            <div key={p.name}>
              <ProjectCard project={p} />
            </div>
          ))}

          {/* Row 3: CruiseWithJoe (2 cols) + CTA (1 col) */}
          <div style={{ gridColumn: 'span 2' }}>
            <ProjectCard project={PROJECTS[5]} featured />
          </div>

          {/* CTA card */}
          <div style={{
            borderRadius: 20,
            padding: '32px 28px',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.08) 100%)',
            border: `1px solid ${BORDER}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 20,
          }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: DIMMED, letterSpacing: '0.14em', marginBottom: 12 }}>NEXT UP</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                Your business could be next.
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: MUTED, lineHeight: 1.75 }}>
                Tell us what you want to build — we'll make it happen.
              </p>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              style={{ width: '100%', padding: '13px', borderRadius: 12, border: 'none', background: `linear-gradient(135deg, ${PURPLE}, #a855f7)`, color: '#fff', fontFamily: FONT, fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 6px 24px rgba(139,92,246,0.4)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Start a Conversation
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
