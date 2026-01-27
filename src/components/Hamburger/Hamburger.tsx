import "~home/App.css"
import "./Hamburger.css"
import { useState, type Dispatch, type ReactElement, type SetStateAction } from "react"
import type { PAGES } from "../../definitions/pages"

interface HamburgerProps {
	setDisplay: Dispatch<SetStateAction<PAGES>>
}

export const Hamburger: (props: HamburgerProps) => ReactElement = ({ setDisplay }) => {
	const [isOpen, setIsOpen] = useState(false);
	const hamburgerClosed = (
		<div onClick={() => setIsOpen(true)} className="hamburgerClosed sm:hidden">
			<div className="hamLine"></div>
			<div className="hamLine"></div>
			<div className="hamLine"></div>
		</div>
	)
	const hamburgerOpen = (
		<div onClick={() => setIsOpen(false)} className="hamburgerClosed">
			<div className="hamLine close1"></div>
			<div className="hamLine close2"></div>
		</div>)
	return isOpen ? hamburgerOpen : hamburgerClosed
}
