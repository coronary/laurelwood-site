import "~home/App.css"
import "./Hamburger.css"
import { useState, type Dispatch, type ReactElement, type SetStateAction } from "react"
import { PAGES } from "../../definitions/pages"

interface HamburgerProps {
	setDisplay: Dispatch<SetStateAction<PAGES>>
}

export const Hamburger: (props: HamburgerProps) => ReactElement = ({ setDisplay }) => {
	const [isOpen, setIsOpen] = useState(false);
	const setPage = (page: PAGES) => () => {
		setDisplay(page);
		setIsOpen(false);
	}

	const navMenu = () => {
		return (<div className="navMenuHolder flex flex-col">
			<button className="" onClick={setPage(PAGES.HOME)}>
				<p className="text-2xl">Home</p>
			</button>
			<button className="" onClick={setPage(PAGES.BEERS)}>
				<p className="text-2xl">Beer</p>
			</button>
			<button className="" onClick={setPage(PAGES.ARCHIVE)}>
				<p className="text-2xl">Archive</p>
			</button>
			<button className="">
				<a href="mailto:info@laurelwoodbrewing.com">
					<p className="text-2xl">Contact</p>
				</a>
			</button>
			<button className="" onClick={setPage(PAGES.NEWSLETTER)}>
				<p className="text-2xl">Newsletter</p>
			</button>
		</div>
		)
	}

	const hamburgerClosed = (
		<div onClick={() => setIsOpen(true)} className="hamburgerClosed flex-1 sm:hidden">
			<div className="hamLine"></div>
			<div className="hamLine"></div>
			<div className="hamLine"></div>
		</div>
	)
	const hamburgerOpen = (
		<>
			<div onClick={() => setIsOpen(false)} className="hamburgerClosed flex-1 ">
				<div className="hamLine close1"></div>
				<div className="hamLine close2"></div>
			</div>
			{navMenu()}
		</>
	)


	return isOpen ? hamburgerOpen : hamburgerClosed
}
