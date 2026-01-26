import type { Dispatch, ReactElement, SetStateAction } from "react"
import "~home/App.css"
import "./NavBar.css"
import logo_icon from "~assets/logo_icon.png"
import { PAGES } from "../../definitions/pages"

interface NavBarProps {
	setDisplay: Dispatch<SetStateAction<PAGES>>
}

export const NavBar: (props: NavBarProps) => ReactElement = ({ setDisplay }) => {
	const setPage = (page: PAGES) => () => setDisplay(page)
	return <div className="navbar w-full flex flex-row content-evenly justify-center align-center p-4">
		<button onClick={setPage(PAGES.HOME)}>
			<img className="h-8 md:h-12" src={logo_icon} />
		</button>
		<button className="navButton" onClick={setPage(PAGES.BEERS)}>
			<p className="text-2xl sm:text-3xl md:text-4xl">Beer</p>
		</button>
		<button className="navButton" onClick={setPage(PAGES.HOME)}>
			<p className="text-2xl sm:text-3xl md:text-4xl">Archive</p>
		</button>
		<button className="navButton" onClick={setPage(PAGES.HOME)}>
			<p className="text-2xl sm:text-3xl md:text-4xl">Contact</p>
		</button>
		<button className="navButton" onClick={setPage(PAGES.HOME)}>
			<p className="text-2xl sm:text-3xl md:text-4xl">Newsletter</p>
		</button>
	</div>
}
