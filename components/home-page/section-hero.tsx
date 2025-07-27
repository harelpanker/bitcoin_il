import Section from '@/components/ui/section';
import Top from '@/components/home-page/section-hero/top';
import Bottom from '@/components/home-page/section-hero/bottom';
import BottomAnimation from '@/components/home-page/section-hero/bottom-animation';

export default function SectionHero({ isHebrew = false }: { isHebrew?: boolean }) {
	return (
		<Section className='flex grow flex-col justify-between gap-y-12 overflow-hidden pb-6 pt-6 text-center lg:py-24'>
			<Top isHebrew={isHebrew} />
			<Bottom isHebrew={isHebrew} />
			<BottomAnimation />
		</Section>
	);
}
