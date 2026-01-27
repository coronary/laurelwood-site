import { useState } from 'react'

import './App.css'

import { Beers } from './pages/Beers/beers.tsx'
import { Home } from './pages/Home/home.tsx'
import { Archive } from './pages/Archives/archives.tsx'

import { NavBar } from './components/NavBar/Navbar.tsx'

import { PAGES } from './definitions/pages.ts'



function App() {
	// const [showAgeGate, setAgeGate] = useState(true)
	// <AgeGate handleYes={setAgeGate} show={showAgeGate} />
	const [currPage, setCurrPage] = useState(PAGES.HOME)
	const pageRender = () => {
		switch (currPage) {
			case PAGES.BEERS:
				return <Beers />
			case PAGES.ARCHIVE:
				return <Archive />
			default:
				return <Home setDisplay={setCurrPage} />
		}
	}
	return <>
		<NavBar setDisplay={setCurrPage} />
		{pageRender()}
	</>
}

export default App
