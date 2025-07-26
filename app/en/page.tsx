import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import Section from '@/components/ui/section';

export default function HomePage() {
	return (
		<Section element='main'>
			<Section className='flex grow flex-col py-12 lg:py-24'>
				<Container className='flex grow flex-col items-center justify-center gap-y-6 text-center'>
					<Heading level={1}>Bitcoin IL</Heading>
				</Container>
			</Section>
		</Section>
	);
}
