import Section from '@/components/ui/section';
import Top from '@/components/home-page/section-hero/top';

export default function SectionHero() {
	return (
		<Section className='flex grow flex-col justify-between py-12 lg:py-24'>
			<Top />
			<div></div>
		</Section>
	);
}
