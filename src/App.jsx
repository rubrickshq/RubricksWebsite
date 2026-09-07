import Header from './components/Header'
import Hero from './components/Hero'
import Divisions from './components/Divisions'
import Process from './components/Process'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Divisions />
        <Process />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
