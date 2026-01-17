import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Statistics from '@/components/Statistics'
import Gallery from '@/components/Gallery'
import Activities from '@/components/Activities'
import Articles from '@/components/Articles'
import BoardMembers from '@/components/BoardMembers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Activities />
      <Gallery />
      <Articles />
      <BoardMembers />
      <Contact />
      <Footer />
    </main>
  )
}
