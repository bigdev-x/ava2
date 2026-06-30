import { BORDER, MUTED, FONT } from '../theme'

// ── Edit marquee tags here ──
const TAGS = [
  'Website Design', 'Web Development', 'UI/UX Design', 'E-commerce',
  'Landing Pages', 'SEO Optimization', 'Branding & Graphics', 'PWA Apps',
  'Paystack Integration', 'Website Maintenance', 'Avamax Studio Nigeria',
]

export default function Marquee() {
  const doubled = [...TAGS, ...TAGS]

  return (
    <div style={{ overflow: 'hidden', padding: '18px 0', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: 'rgba(255,255,255,0.01)' }}>
      <div className="marquee-track">
        {doubled.map((tag, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, paddingRight: 48, whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: MUTED, letterSpacing: '0.14em', fontFamily: FONT }}>{tag.toUpperCase()}</span>
            <span style={{ color: '#8b5cf6', fontSize: 12, opacity: 0.6 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
