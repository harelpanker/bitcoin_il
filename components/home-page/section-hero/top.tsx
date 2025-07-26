import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import SpanGradient from '@/components/ui/span-gradient';
import { Text } from '@/components/ui/text';

export default function Top() {
	return (
		<Container className='flex flex-col items-center justify-center gap-y-6 text-center'>
			<div className='flex flex-col gap-y-3'>
				<Text className='font-semibold'>
					<SpanGradient>Super. Simple. Banking.</SpanGradient>
				</Text>
				<Heading level={1} className='text-4xl xl:text-7xl'>
					<span className='xl:block'>Israel's Bitcoin </span>Treasury Company
				</Heading>
			</div>
			<Text className='xl:text-xl'>
				<SpanGradient>
					<span className='xl:block'>Leading Israel's transition into the Bitcoin economy securely, </span>
					strategically, and transparently
				</SpanGradient>
			</Text>
		</Container>
	);
}
