'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export const description = 'A bar chart with a label';

const chartData = [
	{ month: 'January', bitcoin: 110 },
	{ month: 'February', bitcoin: 128 },
	{ month: 'March', bitcoin: 112 },
	{ month: 'April', bitcoin: 145 },
	{ month: 'May', bitcoin: 215 },
	{ month: 'June', bitcoin: 245 },
	{ month: 'July', bitcoin: 265 },
];

const chartConfig = {
	bitcoin: {
		label: 'Bitcoin',
		// color: 'var(--chart-2)',
		// icon: Bitcoin,
	},
} satisfies ChartConfig;

export default function CompanyHolding() {
	return (
		<Card className='col-span-1 md:col-span-3'>
			<CardHeader>
				<CardTitle>Company Holding</CardTitle>
				<CardDescription>Past 6 months</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData.slice(-6)} margin={{ top: 20 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideIndicator={false} hideLabel={false} indicator='dot' />}
						/>

						<defs>
							<linearGradient id='fillPrice' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='var(--chart-3)' stopOpacity={0.8} />
								<stop offset='95%' stopColor='var(--chart-3)' stopOpacity={0.1} />
							</linearGradient>
						</defs>

						<Bar dataKey='bitcoin' fill='url(#fillPrice)' fillOpacity={0.8} radius={8}>
							<LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
