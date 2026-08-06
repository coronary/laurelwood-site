import type { Beer } from "../definitions/beers"

export const shouldRenderBeer = (beer: Beer): boolean => {
  const today = new Date()
  const {publishStartDate: start, publishEndDate: end} = beer
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date().setFullYear(today.getFullYear() + 1)
  return beer.visible && today > startDate && today < endDate
}
