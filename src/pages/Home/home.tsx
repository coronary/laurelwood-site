import '~home/App.css'
import './home.css'
import NextUpLogo from '~assets/2026_label_logo.png'
import AnniversaryLogo from '~assets/anniversary_logo.png'
import type { Dispatch, ReactElement, SetStateAction } from 'react'
import { PAGES } from '../../definitions/pages'

interface HomeProps {
	setDisplay: Dispatch<SetStateAction<PAGES>>
}

export const Home: (props: HomeProps) => ReactElement = ({ setDisplay }) => {
	const setPage = (page: PAGES) => () => setDisplay(page);
	return (
		<section className="mainContent">
			<img className="w-2/3 sm:w-1/2 md:w-1/3 lg:hidden mx-auto" src={AnniversaryLogo} />
			<p id="welcome-text" className="text-4xl lg:text-6xl font-bold">Welcome to Laurelwood Brewing Co</p>
			<p className="bulk-text text-2xl lg:text-4xl font-bold pt-2 pb-4">	This year we're celebrating our 25th anniversary and we couldn't have done it without our faithful customers and hard-working staff. Although we no longer have pubs for you to visit and try our award-winning beers we encourage you to pick up a 6 pack of Workhorse IPA, Free Range Red, or one of our 16oz rotating seasonal beers. <p className="homeLink" onClick={setPage(PAGES.BEERS)}>See what's available here</p>, and <p className="homeLink">where to get it here</p>. We'll also have a special 25th anniversary beer available in mid-March. We're bringing back the first beer we ever canned!
				<br />
				<br />
				We'll also be sharing blasts from the past and highlights from our 25 years in business so stay tuned for some vintage stuff!
				<br />
				<br />
				Stay with us this year. <p className="homeLink" onClick={setPage(PAGES.ARCHIVE)}>Sign up for our newsletter</p>, follow us on all our socials to keep up with what we have happening this year.
				<br />
				<br />
				Cheers!
			</p>
			<div className="logo-display mx-auto flex flex-row justify-center">
				<img className="hidden lg:block lg:w-1/4" src={AnniversaryLogo} />
				<img className="md:w-2/3" src={NextUpLogo} />
			</div>
		</section>
	)
}
