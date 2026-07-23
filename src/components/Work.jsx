import { useState, useEffect, useRef } from 'react'
import GradientText from './GradientText'
import { BORDER, TEXT, MUTED, DIMMED, PURPLE, FONT } from '../theme'

// ── Edit portfolio projects here ──
// To add a real screenshot: set image to a URL, e.g. '/screenshots/breezzz.png'
const PROJECTS = [
  {
    category: 'FOOD & NIGHTLIFE · ENUGU',
    name: 'Breezzz Bar & Lounge',
    desc: 'A fully custom PWA ordering system — guests scan a QR code, browse the full menu, order drinks and food, and pay via Paystack without a single waiter interaction.',
    status: 'LIVE',
    image: null,
    accent: '#c9a227',
    bg: 'linear-gradient(135deg, #1a0e00, #2e1a00)',
    orb: 'rgba(201,162,39,0.3)',
    initial: 'B',
  },
  {
    category: 'PERSONAL BRAND · LAGOS',
    name: 'MRBOBBY.me',
    desc: 'A sleek personal brand website built to showcase identity, content, and presence online — fast, responsive, and designed to convert visitors into followers.',
    status: 'LIVE',
    image: null,
    accent: '#38bdf8',
    bg: 'linear-gradient(135deg, #00071a, #001433)',
    orb: 'rgba(56,189,248,0.28)',
    initial: 'M',
  },
  {
    category: 'PORTFOLIO · LAGOS',
    name: 'Eric Gugua',
    desc: 'A professional portfolio website crafted to highlight work, skills, and story — built with clean design and optimised for every device.',
    status: 'LIVE',
    image: null,
    accent: '#22c55e',
    bg: 'linear-gradient(135deg, #001a0e, #002e1a)',
    orb: 'rgba(34,197,94,0.25)',
    initial: 'E',
  },
  {
    category: 'FOOD & LIFESTYLE · ENUGU',
    name: 'XtremeGrills',
    desc: 'A modern business website for a premium grill brand — showcasing menu, vibe, and booking experience with bold visuals and a mobile-first approach.',
    status: 'LIVE',
    image: null,
    accent: '#f97316',
    bg: 'linear-gradient(135deg, #1a0500, #2e0d00)',
    orb: 'rgba(249,115,22,0.28)',
    initial: 'X',
  },
  {
    category: 'RESTAURANT · IKEJA',
    name: 'Cilantro Restaurant',
    desc: 'A premium restaurant website designed to showcase the menu, ambience, and dining experience — built to drive reservations and bring customers through the door.',
    status: 'LIVE',
    image: null,
    accent: '#10b981',
    bg: 'linear-gradient(135deg, #001a08, #002e14)',
    orb: 'rgba(16,185,129,0.25)',
    initial: 'C',
  },
  {
    category: 'TRAVEL & LIFESTYLE · OWERRI',
    name: 'CruiseWithJoe',
    desc: 'A lifestyle and travel website built to capture leads, grow an audience, and showcase destinations — delivered with speed and style.',
    status: 'LIVE',
    image: null,
    accent: '#8b5cf6',
    bg: 'linear-gradient(135deg, #0a001a, #180033)',
    orb: 'rgba(139,92,246,0.28)',
    initial: 'J',
  },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function BrowserPlaceholder({ project }) {
  return (
    <div style={{ borderRadius: '12px 12px 0 0', overflow: 'hidden', border: `1px solid rgba(255,255,255,0.07)`, borderBottom: 'none' }}>
      {/* Browser chrome */}
      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        </div>
        <div style={{ flex: 1, height: 22, borderRadius: 6, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 10, color: DIMMED, letterSpacing: '0.04em' }}>{project.name.toLowerCase().replace(/\s/g, '')}.com</span>
        </div>
      </div>

      {/* Screenshot area */}
      <div style={{
        height: 220,
        background: project.bg,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {project.image ? (
          <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <>
            {/* Orb */}
            <div style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: `radial-gradient(ellipse, ${project.orb} 0%, transparent 70%)` }} />
            <div style={{ position: 'absolute', bottom: -30, left: -30, width: 140, height: 140, borderRadius: '50%', background: `radial-gradient(ellipse, ${project.orb} 0%, transparent 70%)`, opacity: 0.5 }} />

            {/* Big initial */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                fontSize: 72,
                fontWeight: 900,
                color: project.accent,
                opacity: 0.15,
                fontFamily: FONT,
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {project.initial}
              </div>
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${project.accent}22`, border: `1px solid ${project.accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <span style={{ fontSize: 11, color: DIMMED, letterSpacing: '0.06em' }}>Screenshot coming soon</span>
              </div>
            </div>

            {/* Grid lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }} viewBox="0 0 400 220" preserveAspectRatio="none">
              {[40,80,120,160,200,240,280,320,360].map(x => <line key={x} x1={x} y1="0" x2={x} y2="220" stroke="white" strokeWidth="1"/>)}
              {[44,88,132,176].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeWidth="1"/>)}
            </svg>
          </>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div style={{
      minWidth: 0,
      width: '100%',
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px solid ${BORDER}`,
      background: 'rgba(255,255,255,0.02)',
      flexShrink: 0,
    }}>
      <BrowserPlaceholder project={project} />

      {/* Info */}
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: project.accent, letterSpacing: '0.14em' }}>{project.category}</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: DIMMED, display: 'inline-block' }} />
          <span style={{ padding: '3px 9px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 10, fontWeight: 700, color: '#22c55e' }}>{project.status}</span>
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: TEXT, letterSpacing: '-0.03em', fontFamily: FONT }}>
          {project.name}
        </h3>
        <p style={{ margin: 0, fontSize: 13, color: MUTED, lineHeight: 1.75 }}>{project.desc}</p>
      </div>
    </div>
  )
}

export default function Work() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const total = PROJECTS.length

  const go = (idx) => setCurrent((idx + total) % total)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % total), 4500)
    return () => clearInterval(timerRef.current)
  }, [paused, total])

  return (
    <section id="work" style={{ padding: '100px 24px', fontFamily: FONT }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 48, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', fontSize: 11, fontWeight: 600, color: PURPLE, letterSpacing: '0.16em', marginBottom: 18 }}>
              RECENT WORK
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.04em' }}>
              <GradientText>Live products</GradientText> we shipped.
            </h2>
          </div>

          {/* Arrow controls */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ dir: -1, label: '←' }, { dir: 1, label: '→' }].map(({ dir, label }) => (
              <button
                key={dir}
                onClick={() => go(current + dir)}
                style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid ${BORDER}`, background: 'rgba(255,255,255,0.03)', color: TEXT, fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', fontFamily: FONT }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = PURPLE; e.currentTarget.style.background = 'rgba(139,92,246,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div
          style={{ overflow: 'hidden', borderRadius: 20 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${total}, calc(50% - 8px))`,
            gap: 16,
            transform: `translateX(calc(-${current} * (50% + 0px) - ${current} * 8px))`,
            transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            {PROJECTS.map(p => <ProjectCard key={p.name} project={p} />)}
          </div>
        </div>

        {/* Dots + counter */}
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 100, border: 'none', background: i === current ? PURPLE : 'rgba(255,255,255,0.15)', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }}
              />
            ))}
          </div>

          <span style={{ fontSize: 12, color: DIMMED, letterSpacing: '0.08em' }}>
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* CTA strip */}
        <div style={{ marginTop: 20, borderRadius: 16, padding: '28px 32px', background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.06))', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 800, color: TEXT }}>Your business could be next.</p>
            <p style={{ margin: 0, fontSize: 13, color: MUTED }}>Tell us what you want to build — we'll make it happen.</p>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            style={{ flexShrink: 0, padding: '12px 26px', borderRadius: 12, border: 'none', background: `linear-gradient(135deg, ${PURPLE}, #a855f7)`, color: '#fff', fontFamily: FONT, fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 6px 24px rgba(139,92,246,0.4)', transition: 'all 0.2s' }}
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
