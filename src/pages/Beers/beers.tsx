import '~home/App.css'
import './beers.css'
import { type Beer } from '../../definitions/beers'

import { fetch_beers } from '../../functions/sanityBeers'
import { useEffect, useState } from 'react'
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { client } from '../../sanity/client'

const {projectId, dataset} = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const Beers = () => {
  const [evergreenBeers, setEvergreenBeers] = useState<Beer[]>([])
	const [seasonalBeers, setSeasonalBeers] = useState<Beer[]>([])
  useEffect(() => {
    fetch_beers().then((beers) => {
      setEvergreenBeers(beers.filter(beer => !beer.isSeasonal))
      setSeasonalBeers(beers.filter(beer => beer.isSeasonal))
    })
	}, [])
	return (
		<section className="mainContent">
			<p className="text-5xl sm:text-8xl mb-4">Always On</p>
			{evergreenBeers.map((beer) => <img className="beerSheet" key={beer.beerName} src={urlFor(beer.sanityImage)?.url()} alt={beer.ariaText} />)}
			<p className="text-5xl sm:text-8xl mt-12 mb-8">Rotating Beers - look for these seasonal brews at your favorite beer retailer now</p>
			{seasonalBeers.map((beer) => <img className="beerSheet" key={beer.beerName} src={urlFor(beer.sanityImage)?.url()} alt={beer.ariaText} />)}
		</section>
	)
}
