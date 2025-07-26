interface HistoricalPricePoint {
	date: string;
	price: number;
}
export interface HistoricalDataResponse {
	historicalPrices: HistoricalPricePoint[];
}

export interface BitcoinPriceData {
	price: number;
}
