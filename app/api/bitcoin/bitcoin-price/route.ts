import { NextResponse } from 'next/server';

export async function GET() {
	const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

	if (!COINMARKETCAP_API_KEY) {
		// In a real application, you might want more sophisticated logging here
		console.error('COINMARKETCAP_API_KEY is not set in environment variables.');
		return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
	}

	try {
		const response = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin`, {
			headers: {
				'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
				Accept: 'application/json',
				'Accept-Encoding': 'deflate, gzip',
			},
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error('CoinMarketCap API Error:', errorData);
			return NextResponse.json(
				{ error: errorData.status.error_message || 'External API call failed' },
				{ status: response.status }
			);
		}

		const data = await response.json();
		const bitcoinId = Object.keys(data.data)[0]; // Dynamically get the Bitcoin ID (usually '1')
		const bitcoinPrice = data.data[bitcoinId]?.quote?.USD?.price;

		if (typeof bitcoinPrice === 'number') {
			return NextResponse.json({ price: bitcoinPrice });
		} else {
			console.error('Bitcoin price not found in CoinMarketCap response:', data);
			return NextResponse.json({ error: 'Bitcoin price data not found.' }, { status: 500 });
		}
	} catch (error) {
		console.error('Server-side error fetching Bitcoin price:', error);
		return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
	}
}
