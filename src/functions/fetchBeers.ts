export interface Beer {
	filePath: string;
	beerName: string;
	ariaText: string;
}

const evergreen: Beer[] = [
	{
		beerName: "Workhorse IPA 12oz Cans",
		filePath: "/src/assets/sell_sheets/evergreen/workhorse_sell_small.png",
		ariaText: "test",
	},
	{
		beerName: "Free Range Red 12oz Cans",
		filePath: "/src/assets/sell_sheets/evergreen/free_range_red_sell.png",
		ariaText: "test",
	},
	{
		beerName: "Workhorse IPA 19.2oz Cans",
		filePath: "/src/assets/sell_sheets/evergreen/workhorse_sell_large.png",
		ariaText: "test",
	},
];

const seasonal: Beer[] = [
	{
		beerName: "Cold Brewed Coffee Stout w/ Cocoa Nibs",
		filePath: "/src/assets/sell_sheets/rotating/cold_brew_sell.png",
		ariaText: "test",
	},
	{
		beerName: "Tree Hugger Porter",
		filePath: "/src/assets/sell_sheets/rotating/treehugger_sell.png",
		ariaText: "test",
	},
	{
		beerName: "Vinter Varmer Winter Ale",
		filePath: "/src/assets/sell_sheets/rotating/vinter_varmer_sell.png",
		ariaText: "test",
	},
];

export const fetchBeers = () => {
	return { evergreen, seasonal };
};
