'use client';

import useSWR from 'swr';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BitcoinPriceData, HistoricalDataResponse } from '@/lib/types/price-over-time';
import { genericFetcher } from '@/lib/generic-fetcher';
import { formatUSD } from '@/lib/formater';

const priceFetcher = (url: string) => genericFetcher<BitcoinPriceData>(url);
const fetcher = (url: string) => genericFetcher<HistoricalDataResponse>(url);

export default function AnalyticsClientPage() {
	const { data, error, isLoading } = useSWR<HistoricalDataResponse>('/api/bitcoin/price-over-time', fetcher);
	const {
		data: priceData,
		error: priceError,
		isLoading: priceLoading,
	} = useSWR<BitcoinPriceData>('/api/bitcoin/bitcoin-price', priceFetcher);

	if (priceLoading) {
		return <div className='py-4 text-center'>Loading Bitcoin price...</div>;
	}

	if (priceError) {
		console.error('Error fetching Bitcoin price:', error);
		return <div className='py-4 text-center text-orange-500'>Failed to load Bitcoin price: {priceError.message}</div>;
	}

	if (!priceData || typeof priceData.price !== 'number') {
		return <div className='py-4 text-center text-orange-500'>No Bitcoin price data available.</div>;
	}

	if (isLoading) {
		return <div className='py-4 text-center'>Loading Bitcoin historical price data...</div>;
	}

	if (error) {
		console.error('Error fetching historical Bitcoin price:', error);
		return <div className='py-4 text-center text-orange-500'>Failed to load historical data: {error.message}</div>;
	}

	if (!data?.historicalPrices || data.historicalPrices.length === 0) {
		return <div className='py-4 text-center text-orange-500'>No historical Bitcoin price data available.</div>;
	}

	const historicalData = data.historicalPrices;
	const bitcoinPrice = priceData.price;

	const chartConfig = {
		price: {
			label: '$',
			color: 'var(--chart-5)',
		},
	} satisfies ChartConfig;

	return (
		<Card className='col-span-1 md:col-span-4'>
			<CardHeader>
				<CardTitle>Current Bitcoin Price</CardTitle>
				<CardDescription>
					<span className='font-semibold'>
						{bitcoinPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={historicalData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />

						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => value.slice(0, 6)}
						/>

						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickCount={6}
							tickFormatter={(value) => formatUSD(value)}
						/>

						<ChartTooltip cursor={true} content={<ChartTooltipContent />} />

						<defs>
							<linearGradient id='fillPrice' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='var(--chart-3)' stopOpacity={0.8} />
								<stop offset='95%' stopColor='var(--chart-3)' stopOpacity={0.1} />
							</linearGradient>
						</defs>
						<Area
							dataKey='price'
							type='basisOpen'
							fill='url(#fillPrice)'
							fillOpacity={0.4}
							stroke='var(--chart-3)'
							stackId='a'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
