import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Scope from './components/Scope/Scope'
import Roadmap from './components/Roadmap/Roadmap'
import Section2 from './components/section2/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Section2/>
      <Scope/>
      <Roadmap/>
    </>
  )
}

export default App
