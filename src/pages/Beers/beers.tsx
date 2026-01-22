import '~home/App.css'
import './beers.css'
import fetchBeers from '../../functions/fetchBeers'

export const Beers = () => {
	const { evergreen, seasonal } = fetchBeers()
	return (
		<>
			<p className="text-4xl mb-4">Always On</p>
			{evergreen.map(({ beerName, filePath }) => <img key={beerName} src={filePath} />)}
			<p className="text-4xl mb-4">Rotating Beers - look for these seasonal brews at your favorite beer retailer now</p>
			{seasonal.map(({ beerName, filePath }) => <img key={beerName} src={filePath} />)}
		</>
	)
}
