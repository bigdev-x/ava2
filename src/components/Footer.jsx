import { BORDER, TEXT, MUTED, DIMMED, PURPLE, FONT } from '../theme'

// ── Edit footer text here ──
const LOCATION  = 'Nigeria'
const COPYRIGHT = `© ${new Date().getFullYear()} AvaMax Studio. All rights reserved.`

export default function Footer() {
  return (
    <footer style={{ padding: '28px 24px', borderTop: `1px solid ${BORDER}`, fontFamily: FONT }}>
      <div className="footer-inner" style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 26, height: 26, background: PURPLE, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#fff' }}>A</div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: TEXT, letterSpacing: '0.09em', textTransform: 'uppercase', lineHeight: 1.1 }}>AvaMax</div>
            <div style={{ fontSize: 7, fontWeight: 600, color: MUTED, letterSpacing: '0.28em', textTransform: 'uppercase', lineHeight: 1.4 }}>Studio</div>
          </div>
        </div>

        {/* Center: copyright */}
        <span style={{ fontSize: 12, color: DIMMED }}>{COPYRIGHT}</span>

        {/* Right: location */}
        <span style={{ fontSize: 12, color: DIMMED }}>{LOCATION}</span>
      </div>
    </footer>
  )
}
