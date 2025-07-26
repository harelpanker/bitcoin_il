import Container from '@/components/ui/container';
import styles from './styles.module.css';
import { Text } from '@/components/ui/text';

const data = [
	{ title: '$118,403', text: 'Bitcoin Price' },
	{ title: '$1,225', text: 'Share Price' },
	{ title: '₿16,352', text: 'BTC Holdings' },
];

export default function Bottom() {
	return (
		<Container
			className={`${styles.stacksContainer} flex w-full max-w-[18rem] flex-col gap-y-5 rounded-3xl px-5 py-8 md:grid md:max-w-[62rem] md:grid-cols-3 md:py-6`}>
			{data.map((item) => (
				<div key={item.title} className='flex flex-col gap-y-2'>
					<Text>
						<span className='text-5xl font-bold xl:text-5xl'>{item.title}</span>
					</Text>
					<Text>
						<span className='text-sm font-semibold'>{item.text}</span>
					</Text>
				</div>
			))}
		</Container>
	);
}
