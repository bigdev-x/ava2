import { useState } from 'react'
import { PURPLE, MUTED, TEXT, FONT } from '../theme'

// ── Edit nav links here ──
const LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Work',     id: 'work' },
  { label: 'Contact',  id: 'contact' },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'default' }}>
          <div style={{ width: 32, height: 32, background: PURPLE, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: '#fff', fontFamily: FONT }}>A</div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: TEXT, letterSpacing: '0.09em', textTransform: 'uppercase', lineHeight: 1.1, fontFamily: FONT }}>AvaMax</div>
            <div style={{ fontSize: 7, fontWeight: 600, color: MUTED, letterSpacing: '0.28em', textTransform: 'uppercase', lineHeight: 1.4, fontFamily: FONT }}>Studio</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          {LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: MUTED, fontFamily: FONT, transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = TEXT}
              onMouseLeave={e => e.currentTarget.style.color = MUTED}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{ padding: '9px 20px', borderRadius: 8, background: PURPLE, border: 'none', color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: FONT, cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Get Started
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => { scrollTo(id); setOpen(false) }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: MUTED, fontFamily: FONT, textAlign: 'left', padding: '10px 0' }}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => { scrollTo('contact'); setOpen(false) }}
          style={{ marginTop: 8, padding: '12px', borderRadius: 10, background: PURPLE, border: 'none', color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}
