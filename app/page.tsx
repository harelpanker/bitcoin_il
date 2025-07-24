import Link from 'next/link';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import Section from '@/components/ui/section';
import { MainCta } from '@/components/ui/main-cta';

export default function HomePage() {
	return (
		<Section element='main'>
			<Section className='flex grow flex-col py-12 lg:py-24'>
				<Container className='flex grow flex-col items-center justify-center gap-y-6 text-center'>
					<Heading level={1}>Bitcoin IL</Heading>
					<MainCta asChild>
						<Link href='/analytics'>Analytics</Link>
					</MainCta>
				</Container>
			</Section>
		</Section>
	);
}
