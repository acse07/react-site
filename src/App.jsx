
import './App.css'
import Header from './components/Header/Header'
import IntroSection from './components/IntroSection'
// import Button from './components/Button/Button'
import TeachingSection from './components/TeachingSection'
import Osobenosti from './components/Osobenosti'
import TabsSection from './components/TabsSection'
import FeedBackSection from './components/FeedBackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'
// import { useState } from 'react'
// import {differences} from './data'




function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />
        <main>
          <IntroSection />
          <TabsSection active={tab} onChange={(current) => setTab(current)}/>

          {tab === 'main' && (
           <>
            <TeachingSection />
            <Osobenosti />
          </>)}

          {tab === 'feedback' && <FeedBackSection /> }

          {tab === 'effect' && <EffectSection /> }
        </main>
    </>
  )
}

export default App
