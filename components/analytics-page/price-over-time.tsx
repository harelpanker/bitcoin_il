'use client';

import useSWR from 'swr';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BitcoinPriceData, HistoricalDataResponse } from '@/lib/types/price-over-time';
import { Skeleton } from '@/components/ui/skeleton';
import { genericFetcher } from '@/lib/generic-fetcher';
import { formatUSD } from '@/lib/formater';
import { DollarSign, CalendarDays } from 'lucide-react';

const priceFetcher = (url: string) => genericFetcher<BitcoinPriceData>(url);
const fetcher = (url: string) => genericFetcher<HistoricalDataResponse>(url);

export default function AnalyticsClientPage() {
	const { data, error, isLoading } = useSWR<HistoricalDataResponse>('/api/bitcoin/price-over-time', fetcher);
	const {
		data: priceData,
		error: priceError,
		isLoading: priceLoading,
	} = useSWR<BitcoinPriceData>('/api/bitcoin/bitcoin-price', priceFetcher);

	if (error) {
		console.error('Error fetching historical Bitcoin price:', error);
		return <div className='py-4 text-center text-orange-500'>Failed to load historical data: {error.message}</div>;
	}

	if (priceError) {
		console.error('Error fetching Bitcoin price:', error);
		return <div className='py-4 text-center text-orange-500'>Failed to load Bitcoin price: {priceError.message}</div>;
	}

	const historicalData = data?.historicalPrices;
	const bitcoinPrice = priceData?.price;

	const chartConfig = {
		price: {
			label: '$',
			color: 'var(--chart-3)',
		},
		data: {
			label: 'Data',
			color: 'var(--chart-3)',
		},
	} satisfies ChartConfig;

	return (
		<Card className='col-span-1 md:col-span-3'>
			<CardHeader>
				<CardTitle>Current Bitcoin Price</CardTitle>
				{!priceLoading && bitcoinPrice ? (
					<CardDescription>
						<span className='font-semibold'>{formatUSD(bitcoinPrice)} USD</span>
					</CardDescription>
				) : (
					<Skeleton className='h-4 w-28 rounded-full'></Skeleton>
				)}
			</CardHeader>
			<CardContent className='aspect-[311/125] w-full lg:aspect-[960/384]'>
				{!isLoading && historicalData ? (
					<ChartContainer config={chartConfig}>
						<AreaChart
							accessibilityLayer
							data={historicalData}
							margin={{
								left: 8,
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

							<ChartTooltip
								content={
									<ChartTooltipContent
										hideLabel
										className='p-4'
										formatter={(value, name, item) => (
											<div className='min-w-36 flex justify-between'>
												<div
													className='bg-(--color-bg) rounded-xs h-full w-1 shrink-0'
													style={
														{
															'--color-bg': `${chartConfig[name as keyof typeof chartConfig]?.color}`,
														} as React.CSSProperties
													}></div>
												<div className='flex w-full grow flex-col gap-y-2'>
													<div className='flex items-center justify-end gap-x-1'>
														<div className='font-medium'>{item.payload.date}</div>
														<CalendarDays size={12} className='text-muted-foreground' />
													</div>
													<div className='flex items-center justify-end gap-x-1'>
														<div className='font-medium'>{formatUSD(Number(value))}</div>
														<DollarSign size={12} className='text-muted-foreground' />
													</div>
												</div>
											</div>
										)}
									/>
								}
								cursor={true}
							/>

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
				) : (
					<Skeleton className='aspect-[311/125] w-full rounded-2xl lg:aspect-[960/384]'></Skeleton>
				)}
			</CardContent>
		</Card>
	);
}
