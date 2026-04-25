import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import WebWorking from './components/HIW/WebWorking'
import VideoDownloader from './components/Downloader/VideoDownloader'
import PlaylistDownloader from './components/Downloader/PlaylistDownloader'
import Footer from './components/Footer/Footer'
import Switcher from './function/Switcher'

function App() {
  const [activeTab, setActiveTab] = useState('video')

  const handleGetStartedClick = () => {
    setActiveTab('playlist')

    const downloaderSection = document.querySelector('#downloader')
    if (downloaderSection) {
      downloaderSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Header onGetStartedClick={handleGetStartedClick} />
      <main>
        <Home />

        {/* Main Downloader Section */}
        <section id="downloader" className="px-4 py-8 scroll-mt-24">
          <Switcher activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === 'video' ? <VideoDownloader /> : <PlaylistDownloader />}
        </section>
      </main>
      <Features />
      <WebWorking />
      <Footer />
    </>
  )
}

export default App
