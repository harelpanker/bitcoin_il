import Section from '@/components/ui/section';
import Top from '@/components/home-page/section-hero/top';
import Bottom from '@/components/home-page/section-hero/bottom';

export default function SectionHero() {
	return (
		<Section className='flex grow flex-col justify-between py-12 text-center lg:py-24'>
			<Top />
			<Bottom />
		</Section>
	);
}
