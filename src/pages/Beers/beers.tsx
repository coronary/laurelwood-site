import '~home/App.css'
import './beers.css'
import { fetchBeers, type Beer } from '../../functions/fetchBeers'

const renderBeers = ({ beerName, filePath, ariaText }: Beer) => <img key={beerName} aria-label={ariaText} src={filePath} />

export const Beers = () => {
	const { evergreen, seasonal } = fetchBeers()
	return (
		<section className="mainContent">
			<p className="text-8xl mb-4">Always On</p>
			{evergreen.map(renderBeers)}
			<p className="text-8xl mt-12 mb-8">Rotating Beers - look for these seasonal brews at your favorite beer retailer now</p>
			{seasonal.map(renderBeers)}
		</section>
	)
}
