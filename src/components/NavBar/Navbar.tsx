import type { ReactElement } from "react"
import "~home/App.css"
import "./NavBar.css"
import logo_icon from "~assets/logo_icon.png"

interface NavBarProps {
	displayComponent?: ReactElement,
	setDisplay?: () => void
}

export const NavBar: (props?: NavBarProps) => ReactElement = () => {
	return <div className="navbar w-full flex flex-row content-evenly justify-center align-center p-4">
		<img className="h-8 md:h-12" src={logo_icon} />
		<button>
			<p className="text-2xl sm:text-3xl md:text-4xl">Beer</p>
		</button>
		<button>
			<p className="text-2xl sm:text-3xl md:text-4xl">Archive</p>
		</button>
		<button>
			<p className="text-2xl sm:text-3xl md:text-4xl">Contact</p>
		</button>
		<button>
			<p className="text-2xl sm:text-3xl md:text-4xl">Newsletter</p>
		</button>
	</div>
}
