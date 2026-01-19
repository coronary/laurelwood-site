import lwood_logo from './assets/text_logo.png'
import './App.css'

function App() {
	return (
		<>
			<header>
				<img src={lwood_logo} />
				<div className="accent-box" />
			</header>
			<main>
				<section id="announcement">
					<p className="text-xl">Thanks for checking in on us! Our family is a little quiet at the moment, but you can still find your favorite Laurelwood 12oz cans wherever better beer is sold. Stay tuned for what we have planned next!</p>
				</section>
			</main>
		</>
	)
}

export default App
