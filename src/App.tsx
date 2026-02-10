import { useState } from 'react'

import './App.css'

import { Beers } from './pages/Beers/beers.tsx'
import { Home } from './pages/Home/home.tsx'
import { Archive } from './pages/Archives/archives.tsx'

import { NavBar } from './components/NavBar/Navbar.tsx'

import { PAGES } from './definitions/pages.ts'
import { Newsletter } from './pages/Newsletter/Newsletter.tsx'
import { AgeGate } from './components/AgeGate/AgeGate.tsx'



function App() {
	const [showAgeGate, setAgeGate] = useState(true)
	const [currPage, setCurrPage] = useState(PAGES.HOME)
	const pageRender = () => {
		switch (currPage) {
			case PAGES.BEERS:
				return <Beers />
			case PAGES.ARCHIVE:
				return <Archive />
			case PAGES.NEWSLETTER:
				return <Newsletter />
			default:
				return <Home setDisplay={setCurrPage} />
		}
	}
	return <>
		<AgeGate handleYes={setAgeGate} show={showAgeGate} />
		<NavBar setDisplay={setCurrPage} />
		{pageRender()}
	</>
}

export default App
