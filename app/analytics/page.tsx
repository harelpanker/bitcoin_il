import AnalyticsClientPage from '@/components/analytics-page/analytics-client-page'; // Import your client component
import PriceOverTime from '@/components/analytics-page/price-over-time';
import Section from '@/components/ui/section';

export const metadata = {
	title: 'Bitcoin Analytics',
	description: 'Real-time Bitcoin price and analytics',
};

export default function AnalyticsRootPage() {
	return (
		<Section element='main'>
			<AnalyticsClientPage />
			<PriceOverTime />
		</Section>
	);
}
