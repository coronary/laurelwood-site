import '~home/App.css'
import './beers.css'
import FreeRangeRed from '~assets/sell_sheets/evergreen/free_range_red_sell.png'
import WorkHorseSmall from '~assets/sell_sheets/evergreen/workhorse_sell_small.png'
import WorkHorseLarge from '~assets/sell_sheets/evergreen/workhorse_sell_large.png'

import CoffeeStout from '~assets/sell_sheets/rotating/cold_brew_sell.png'
import TreeHugger from '~assets/sell_sheets/rotating/treehugger_sell.png'
import VinterVarmer from '~assets/sell_sheets/rotating/vinter_varmer_sell.png'

export const Beers = () => {
	return (
		<>
			<p className="text-4xl mb-4">Always On</p>
			<img src={WorkHorseSmall} />
			<img src={FreeRangeRed} />
			<img src={WorkHorseLarge} />
			<p className="text-4xl mb-4">Rotating Beers - look for these seasonal brews at your favorite beer retailer now</p>
			<img src={CoffeeStout} />
			<img src={TreeHugger} />
			<img src={VinterVarmer} />
		</>
	)
}
