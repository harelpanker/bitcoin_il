'use client';

import useSWR from 'swr';
import React from 'react';

interface BitcoinPriceData {
	price: number;
}

const fetcher = async (url: string): Promise<BitcoinPriceData> => {
	const response = await fetch(url);

	if (!response.ok) {
		const errorBody = await response.json();
		throw new Error(errorBody.error || 'Failed to fetch data from API');
	}
	return response.json();
};

export default function AnalyticsClientPage() {
	const { data, error, isLoading } = useSWR<BitcoinPriceData>('/api/bitcoin-price', fetcher);

	if (isLoading) {
		return <div className='py-4 text-center'>Loading Bitcoin price...</div>;
	}

	if (error) {
		console.error('Error fetching Bitcoin price:', error);
		return <div className='py-4 text-center text-red-500'>Failed to load Bitcoin price: {error.message}</div>;
	}

	if (!data || typeof data.price !== 'number') {
		return <div className='py-4 text-center text-yellow-500'>No Bitcoin price data available.</div>;
	}

	const bitcoinPrice = data.price;

	return (
		<div className='container mx-auto p-4'>
			<h1 className='mb-4 text-3xl font-bold'>Bitcoin Analytics</h1>
			<p className='text-xl'>
				Current Bitcoin Price: <span className='font-semibold text-green-600'>${bitcoinPrice.toFixed(2)} USD</span>
			</p>
		</div>
	);
}
