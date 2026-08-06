import type { Beer } from "../definitions/beers";
import { client } from "../sanity/client";
import { type SanityDocument } from "@sanity/client/stega";

const POSTS_QUERY = `*[_type == "Beer"]{title, image, ariaText, visibleOnSite, isSeasonal, publishStartDate, publishEndDate}`

const fetch_sanity_beers = client.fetch<SanityDocument[]>(POSTS_QUERY)

const normalize_sanity_beers = (sanity_beers: SanityDocument[]): Beer[] => {
  return sanity_beers.map(beer => {
    return {
      beerName: beer.title,
      sanityImage: beer.image,
      ariaText: beer.ariaText,
      isSeasonal: beer.isSeasonal,
      publishStartDate: beer.publishStartDate,
      publishEndDate: beer.publishEndDate,
      visible: beer.visibleOnSite ?? false
    }
  })
}

export const fetch_beers = async () => await fetch_sanity_beers.then(normalize_sanity_beers)
