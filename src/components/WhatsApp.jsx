import { useState, useEffect } from 'react'

// ── Edit WhatsApp details here ──
const WA_NUMBER  = '2348135876463'
const BRAND_NAME = 'AvaMax Studio'
const GREETING   = '👋 Hi there! Welcome to AvaMax Studio.\n\nNeed a stunning website or digital product? We\'re here to help. Chat with us now!'
const CTA_TEXT   = 'Start Chat on WhatsApp'

const WA_LINK = `https://wa.me/${WA_NUMBER}`

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.34L4 29l7.932-2.078A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm5.406 16.578c-.295-.148-1.747-.861-2.018-.959-.271-.098-.468-.148-.665.148-.196.295-.763.959-.935 1.156-.172.197-.344.222-.639.074-.295-.148-1.244-.458-2.37-1.462-.876-.781-1.468-1.746-1.64-2.041-.172-.295-.018-.455.129-.602.132-.132.295-.344.443-.516.148-.172.197-.295.295-.492.098-.197.049-.37-.025-.517-.074-.148-.665-1.602-.91-2.193-.24-.577-.484-.499-.665-.508l-.566-.01c-.197 0-.517.074-.787.37-.271.295-1.033 1.009-1.033 2.461s1.058 2.854 1.206 3.051c.148.197 2.082 3.18 5.046 4.461.706.305 1.256.487 1.685.623.708.225 1.352.193 1.861.117.568-.085 1.747-.714 1.994-1.403.246-.689.246-1.279.172-1.403-.074-.123-.271-.197-.566-.344z"/>
  </svg>
)

export default function WhatsApp() {
  const [open, setOpen] = useState(false)
  const [badge, setBadge] = useState(true)
  const [visible, setVisible] = useState(false)

  const openPopup = () => {
    setOpen(true)
    setBadge(false)
    setTimeout(() => setVisible(true), 10)
  }

  const closePopup = () => {
    setVisible(false)
    setTimeout(() => setOpen(false), 260)
  }

  useEffect(() => {
    if (!sessionStorage.getItem('wa-opened')) {
      const t = setTimeout(() => {
        sessionStorage.setItem('wa-opened', '1')
        openPopup()
      }, 4000)
      return () => clearTimeout(t)
    }
  }, [])

  const font = "'Google Sans', system-ui, sans-serif"

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 99999, fontFamily: font }}>

      {/* Popup */}
      {open && (
        <div style={{ display: 'flex', flexDirection: 'column', width: 300, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.22)', marginBottom: 12, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.25s ease, transform 0.25s ease' }}>

          {/* Header */}
          <div style={{ background: '#075e54', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#fff', flexShrink: 0 }}>A</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>{BRAND_NAME}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span style={{ width: 8, height: 8, background: '#25d366', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ color: '#b2dfdb', fontSize: 12 }}>Typically replies instantly</span>
              </div>
            </div>
            <button onClick={closePopup} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', fontSize: 20, lineHeight: 1, padding: 0 }}>✕</button>
          </div>

          {/* Chat bubble */}
          <div style={{ background: '#e5ddd5', padding: 16 }}>
            <div style={{ background: '#fff', borderRadius: '0 10px 10px 10px', padding: '10px 13px', fontSize: 14, color: '#333', lineHeight: 1.6, boxShadow: '0 1px 2px rgba(0,0,0,0.1)', position: 'relative', maxWidth: '90%' }}>
              <div style={{ position: 'absolute', top: 0, left: -8, borderWidth: '0 8px 8px 0', borderStyle: 'solid', borderColor: 'transparent #fff transparent transparent' }} />
              {GREETING.split('\n').map((line, i) => <span key={i}>{line}{i < GREETING.split('\n').length - 1 && <br />}</span>)}
              <div style={{ textAlign: 'right', fontSize: 11, color: '#999', marginTop: 4 }}>Now</div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: '#fff', padding: '12px 16px' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25d366', color: '#fff', textDecoration: 'none', padding: 11, borderRadius: 10, fontWeight: 600, fontSize: 14 }}
            >
              {WA_ICON}
              {CTA_TEXT}
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <div
        role="button"
        aria-label="Chat with us on WhatsApp"
        tabIndex={0}
        onClick={() => open ? closePopup() : openPopup()}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (open ? closePopup() : openPopup())}
        style={{ width: 58, height: 58, background: '#25d366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 20px rgba(37,211,102,0.5)', transition: 'transform 0.2s, box-shadow 0.2s', position: 'relative' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.65)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)' }}
      >
        {badge && (
          <div style={{ position: 'absolute', top: -2, right: -2, width: 18, height: 18, background: '#ff3b30', borderRadius: '50%', border: '2px solid #050508', fontSize: 10, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.34L4 29l7.932-2.078A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm5.406 16.578c-.295-.148-1.747-.861-2.018-.959-.271-.098-.468-.148-.665.148-.196.295-.763.959-.935 1.156-.172.197-.344.222-.639.074-.295-.148-1.244-.458-2.37-1.462-.876-.781-1.468-1.746-1.64-2.041-.172-.295-.018-.455.129-.602.132-.132.295-.344.443-.516.148-.172.197-.295.295-.492.098-.197.049-.37-.025-.517-.074-.148-.665-1.602-.91-2.193-.24-.577-.484-.499-.665-.508l-.566-.01c-.197 0-.517.074-.787.37-.271.295-1.033 1.009-1.033 2.461s1.058 2.854 1.206 3.051c.148.197 2.082 3.18 5.046 4.461.706.305 1.256.487 1.685.623.708.225 1.352.193 1.861.117.568-.085 1.747-.714 1.994-1.403.246-.689.246-1.279.172-1.403-.074-.123-.271-.197-.566-.344z"/>
        </svg>
      </div>
    </div>
  )
}
