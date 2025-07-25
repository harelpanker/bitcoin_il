// app/api/bitcoin-price/price-over-time.ts
import { NextResponse } from 'next/server';

export async function GET() {
	const COINGECKO_API_URL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`;

	try {
		const response = await fetch(COINGECKO_API_URL, {
			next: { revalidate: 3600 },
		});

		console.log('CoinGecko Response Status:', response.status);

		if (!response.ok) {
			const errorText = await response.text();
			console.error('CoinGecko API Error:', response.status, errorText);
			return NextResponse.json(
				{
					error: `Failed to fetch historical data from CoinGecko: ${
						response.statusText
					}. Details: ${errorText.substring(0, 100)}...`,
				},
				{ status: response.status }
			);
		}

		const data = await response.json();
		console.log('CoinGecko raw data received (first 100 chars):', JSON.stringify(data).substring(0, 100), '...'); // <-- Add this

		const formattedData = data.prices.map((item: [number, number]) => {
			const timestamp = item[0];
			const price = item[1];
			const date = new Date(timestamp);
			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const day = String(date.getDate()).padStart(2, '0');
			return {
				date: `${year}-${month}-${day}`,
				price: price,
			};
		});

		console.log('Formatted historical prices count:', formattedData.length); // <-- Add this
		return NextResponse.json({ historicalPrices: formattedData });
	} catch (error: any) {
		console.error('Server-side error fetching historical Bitcoin price:', error);
		// Ensure this error response is always JSON
		return NextResponse.json(
			{ error: 'Internal server error fetching historical data.' + (error.message || '') },
			{ status: 500 }
		);
	}
}
