import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import WhatsApp from './WhatsApp'

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <WhatsApp />
    </>
  )
}
