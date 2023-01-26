import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { useStateContext } from './context/darkContext'
import { Projects } from './components/Projects'
import Footer from './components/Footer'
import { Skills } from './components/Skills'
import StickySidebar from './components/StickySidebar'
function App() {

  const {active} = useStateContext()

  return (
    <div className={active ? "dark" : "" }>
        <div className={"flex flex-col h-full w-full  bg-slate-100 relative ease-in duration-300 dark:bg-gray-800"}>
          <Navbar />
                    <StickySidebar />

          <Header />
          <Projects />
          <Skills />
          <Footer />
        </div>
    </div>
  )
}

export default App
