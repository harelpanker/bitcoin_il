import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import SpanGradient from '@/components/ui/span-gradient';
import { Text } from '@/components/ui/text';

export default function Top({ isHebrew = false }: { isHebrew?: boolean }) {
	const topText = isHebrew ? 'סופר. פשוט. בנקאות.' : 'Super. Simple. Banking.';

	return (
		<Container className='flex flex-col items-center justify-center gap-y-6 text-center'>
			<div className='flex flex-col gap-y-3'>
				<Text className='font-semibold'>
					<SpanGradient>{topText}</SpanGradient>
				</Text>
				<Heading isRtl={isHebrew} level={1} className='text-4xl xl:text-7xl'>
					{!isHebrew ? (
						<>
							<span className='xl:block'>Israel's Bitcoin </span>Treasury Company
						</>
					) : (
						<>
							<span className='xl:block'>חברת האוצר של </span>ביטקוין ישראל
						</>
					)}
				</Heading>
			</div>
			<Text className='xl:text-xl'>
				{!isHebrew ? (
					<SpanGradient>
						<span className='xl:block'>Leading Israel's transition into the Bitcoin economy securely, </span>
						strategically, and transparently
					</SpanGradient>
				) : (
					<SpanGradient>הובלת המעבר של ישראל לכלכלת הביטקוין בצורה מאובטחת, אסטרטגית ושקופה.</SpanGradient>
				)}
			</Text>
		</Container>
	);
}
