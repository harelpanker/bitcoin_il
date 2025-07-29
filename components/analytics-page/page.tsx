import PageHeading from '@/components/analytics-page/page-heading';
import PriceOverTime from '@/components/analytics-page/price-over-time';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import CompanyHolding from '@/components/analytics-page/comapny-holding';

export default function AnalyticsPage() {
	return (
		<Section element='main'>
			<PageHeading />
			<Section>
				<Container className='grid max-w-full grid-cols-1 justify-center gap-4 lg:grid-cols-6'>
					<PriceOverTime />
					<CompanyHolding />
				</Container>
			</Section>
		</Section>
	);
}
