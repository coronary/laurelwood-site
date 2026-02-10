export interface Beer {
	filePath: string;
	beerName: string;
	ariaText: string;
}

const evergreen: Beer[] = [
	{
		beerName: "Workhorse IPA 12oz Cans",
		filePath: "/src/assets/sell_sheets/evergreen/workhorse_sell_small.png",
		ariaText:
			"Workhorse IPA 12oz Cans: West Coast-Style India Pale Ale: An extremely well-balanced and super flavorful IPA brewed in the west coast style.",
	},
	{
		beerName: "Free Range Red 12oz Cans",
		filePath: "/src/assets/sell_sheets/evergreen/free_range_red_sell.png",
		ariaText:
			"Free Range Red 12oz Cans: Red Ale: Caramel malt sweetness and smooth hop flaver makes free range red the quintessential northwest red ale. Free Range Red delivers slightly more bitterness and hop aroma than your classic amber to balance out the strong malt backbone.",
	},
	{
		beerName: "Workhorse IPA 19.2oz Cans",
		filePath: "/src/assets/sell_sheets/evergreen/workhorse_sell_large.png",
		ariaText:
			"Workhorse IPA 19.2oz Cans: West Coast-Style India Pale Ale: An extremely well-balanced and super flavorful IPA brewed in the west coast style.",
	},
];

const seasonal: Beer[] = [
	{
		beerName: "Cold Brewed Coffee Stout w/ Cocoa Nibs",
		filePath: "/src/assets/sell_sheets/rotating/cold_brew_sell.png",
		ariaText:
			"Cold Brewed Coffee Stout w/ Cocoa Nibs: Cold Brewed Coffee Stout is a collaboration with Columbia River Coffee Roaster in Astoria, featuring a blend of coffees sourced from Colombia, Mexico, Sumatra, and Guatemala. The cold brew process enhances the stouts rich roast, chocolate and coffee flavors. Smooth, dark and layered.",
	},
	{
		beerName: "Tree Hugger Porter",
		filePath: "/src/assets/sell_sheets/rotating/treehugger_sell.png",
		ariaText:
			"Tree Hugger Porter: Porter: Tree Hugger Porter is one of Laurelwood's longest running beers! Brewed since we opened in 2001 Tree Hugger is about as easy drinking as a porter gets. It has a dark black color but don't let that fool you. The light body and wonderful balance of sweet caramel and toffee flavers intertwine with the mildfloral, woody hop bitterness and make this beer a great choice when you want something dark without it being too intense. We hope you enjoy one of our favorite beers, cheers!",
	},
	{
		beerName: "Vinter Varmer Winter Ale",
		filePath: "/src/assets/sell_sheets/rotating/vinter_varmer_sell.png",
		ariaText:
			"Vinter Varmer Winter Ale: Vinter Varmer in an interpretation of a special version of an english style old or stock ale brewed for the beginning of winter. A smooth, strong, malt driven beer with a nice balance of mild, pleasant hops to fortify against the cold. we use a blend of six malts and four hops to create an ale with deep caramel character, spicy hop flavor and a dry roasty finish. This Winter Warmer Ale is as rich and complex as it is drinkable.",
	},
];

export const fetchBeers = () => {
	return { evergreen, seasonal };
};
