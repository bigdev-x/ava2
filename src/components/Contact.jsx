import GradientText from './GradientText'
import { BORDER, TEXT, MUTED, DIMMED, PURPLE, FONT } from '../theme'

// ── Edit contact section text here ──
const LABEL    = "LET'S WORK TOGETHER"
const HEADLINE = ['Ready for a website that', 'actually grows your business?']
const SUBTITLE = 'Drop us a message — we respond fast and give you a free quote.'
const EMAIL    = 'hello@avamax.studio'
const WA_LINK  = 'https://wa.me/2348135876463'

// ── Edit social links here ──
const SOCIALS = [
  { name: 'Instagram', handle: '@avamaxstudio', url: 'https://instagram.com/avamaxstudio',          color: '#E1306C' },
  { name: 'Twitter/X', handle: '@avamaxstudio', url: 'https://twitter.com/avamaxstudio',            color: '#1DA1F2' },
  { name: 'LinkedIn',  handle: '@avamax-studio', url: 'https://linkedin.com/company/avamax-studio', color: '#0077B5' },
  { name: 'TikTok',   handle: '@avamaxstudio', url: 'https://tiktok.com/@avamaxstudio',            color: '#69C9D0' },
  { name: 'GitHub',   handle: 'AvamaxStudio',  url: 'https://github.com/AvamaxStudio',             color: '#8B5CF6' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px', fontFamily: FONT }}>

      {/* Background orb */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1140, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 52, maxWidth: 680 }}>
          <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', fontSize: 11, fontWeight: 600, color: PURPLE, letterSpacing: '0.16em', marginBottom: 20 }}>
            {LABEL}
          </div>
          <h2 style={{ margin: '0 0 20px', fontSize: 'clamp(24px, 5vw, 46px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            {HEADLINE[0]}<br />
            <GradientText>{HEADLINE[1]}</GradientText>
          </h2>
          <p style={{ margin: '0 0 36px', fontSize: 'clamp(14px, 2vw, 16px)', color: MUTED, lineHeight: 1.75 }}>
            {SUBTITLE}
          </p>

          {/* CTAs */}
          <div className="contact-ctas">
            <a
              href={`mailto:${EMAIL}`}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '15px 30px', borderRadius: 12, background: `linear-gradient(135deg, ${PURPLE}, #a855f7)`, color: '#fff', textDecoration: 'none', fontFamily: FONT, fontWeight: 700, fontSize: 15, boxShadow: '0 6px 24px rgba(139,92,246,0.45)', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {EMAIL}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '15px 30px', borderRadius: 12, background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', textDecoration: 'none', fontFamily: FONT, fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.08)'}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Social section */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: DIMMED, letterSpacing: '0.18em', marginBottom: 16 }}>
            FIND US ON · @avamaxstudio
          </div>
          <div className="social-grid">
            {SOCIALS.map(({ name, handle, url, color }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '18px 12px', borderRadius: 16, background: 'rgba(255,255,255,0.025)', border: `1px solid ${BORDER}`, textDecoration: 'none', transition: 'all 0.22s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}55`; e.currentTarget.style.background = `${color}0d`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{name}</span>
                <span style={{ fontSize: 11, color: DIMMED }}>{handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
