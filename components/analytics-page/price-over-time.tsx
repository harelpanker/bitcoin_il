// components/analytics-page/price-over-time.tsx
'use client';

import useSWR from 'swr';

interface HistoricalPricePoint {
	date: string;
	price: number;
}

interface HistoricalDataResponse {
	historicalPrices: HistoricalPricePoint[];
}

const fetcher = async (url: string): Promise<HistoricalDataResponse> => {
	const response = await fetch(url);
	if (!response.ok) {
		const errorBody = await response.json();
		throw new Error(errorBody.error || 'Failed to fetch historical data from API');
	}
	return response.json();
};

export default function AnalyticsClientPage() {
	const { data, error, isLoading } = useSWR<HistoricalDataResponse>('/api/bitcoin-price/price-over-time', fetcher);

	// useEffect(() => {
	// 	if (data) {
	// 		console.log('Historical Bitcoin Data Array:', data.historicalPrices);
	// 	}
	// }, [data]);

	if (isLoading) {
		return <div className='py-4 text-center'>Loading Bitcoin historical price data...</div>;
	}

	if (error) {
		console.error('Error fetching historical Bitcoin price:', error);
		return <div className='py-4 text-center text-red-500'>Failed to load historical data: {error.message}</div>;
	}

	if (!data?.historicalPrices || data.historicalPrices.length === 0) {
		return <div className='py-4 text-center text-yellow-500'>No historical Bitcoin price data available.</div>;
	}

	const historicalData = data.historicalPrices;

	return (
		<div className='container mx-auto p-4'>
			<h1 className='mb-4 text-3xl font-bold'>Bitcoin Historical Analytics</h1>
			<div className='rounded-lg bg-white p-6 shadow-md'>
				<p>Number of data points: {historicalData.length}</p>
				<p>
					First data point: Date: {historicalData[0].date}, Price: ${historicalData[0].price.toFixed(2)}
				</p>
			</div>
		</div>
	);
}
