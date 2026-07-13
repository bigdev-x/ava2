import { useNavigate } from 'react-router-dom'
import GradientText from './GradientText'
import { PURPLE, MUTED, DIMMED, BORDER, TEXT, FONT } from '../theme'

// ── Edit hero text here ──
const BADGE    = 'MODERN DIGITALIZED STUDIO · AFRICA'
const HEADLINE = ['Turning Ideas Into.', '> Functional Reality.']
const SUBTITLE = 'AvaMax builds fast, responsive, and professional websites that help businesses grow online — delivered in weeks, not months.'
const CTA_PRIMARY   = 'Start Your Project →'
const CTA_SECONDARY = 'See Our Services'

const STATS = [
  { v: '50+',   l: 'projects delivered' },
  { v: '< 4wks', l: 'avg. turnaround' },
  { v: '100%',  l: 'mobile-first' },
  { v: '₦10M+', l: 'client revenue' },
]

export default function Hero() {
  const navigate = useNavigate()
  const go = (path) => { navigate(path); window.scrollTo({ top: 0 }) }
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '110px 24px 100px', textAlign: 'center', fontFamily: FONT }}>

      {/* Background orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 65%)', animation: 'floatOrb 8s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(236,72,153,0.16) 0%, transparent 65%)', animation: 'floatOrb2 6s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '35%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', animation: 'floatOrb2 10s ease-in-out infinite', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', marginBottom: 32 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'dotPulse 2.4s infinite' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: MUTED, letterSpacing: '0.16em' }}>{BADGE}</span>
        </div>

        {/* Headline */}
        <h1 style={{ margin: '0 0 28px', fontSize: 'clamp(44px, 9.5vw, 90px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', color: TEXT }}>
          {HEADLINE[0]}<br />
          <GradientText>{HEADLINE[1]}</GradientText>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: MUTED, lineHeight: 1.8, maxWidth: 560, margin: '0 auto 48px', fontWeight: 400 }}>
          {SUBTITLE}
        </p>

        {/* CTAs */}
        <div className="cta-row" style={{ justifyContent: 'center', marginBottom: 52 }}>
          <button
            onClick={() => go('/contact')}
            style={{ padding: '16px 34px', borderRadius: 12, border: 'none', background: `linear-gradient(135deg, ${PURPLE}, #a855f7)`, color: '#fff', fontFamily: FONT, fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 8px 32px rgba(139,92,246,0.5)', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {CTA_PRIMARY}
          </button>
          <button
            onClick={() => go('/services')}
            style={{ padding: '16px 34px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORDER}`, color: TEXT, fontFamily: FONT, fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'; e.currentTarget.style.background = 'rgba(139,92,246,0.07)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
          >
            {CTA_SECONDARY}
          </button>
        </div>

        {/* Stats */}
        <div className="stats-row">
          {STATS.map(({ v, l }) => (
            <div key={l} style={{ padding: '10px 20px', borderRadius: 100, background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{v}</span>
              <span style={{ fontSize: 12, color: DIMMED, fontWeight: 500, whiteSpace: 'nowrap' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
