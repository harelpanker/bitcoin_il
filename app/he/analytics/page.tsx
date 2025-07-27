import AnalyticsClientPage from '@/components/analytics-page/analytics-client-page'; // Import your client component
import PriceOverTime from '@/components/analytics-page/price-over-time';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';

export const metadata = {
	title: 'Bitcoin Analytics',
	description: 'Real-time Bitcoin price and analytics',
};

export default function AnalyticsRootPage() {
	return (
		<Section element='main'>
			<AnalyticsClientPage />
			<Section>
				<Container className='grid max-w-full grid-cols-1 justify-center gap-4 md:grid-cols-6'>
					<PriceOverTime />
				</Container>
			</Section>
		</Section>
	);
}
