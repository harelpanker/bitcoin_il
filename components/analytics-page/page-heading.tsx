import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';

export default function PageHeading() {
	return (
		<Section className='py-8'>
			<Container className='flex max-w-full flex-col gap-y-2'>
				<Heading level={1} className='xl:!text-3xl'>
					Bitcoin IL Analytics
				</Heading>
			</Container>
		</Section>
	);
}
