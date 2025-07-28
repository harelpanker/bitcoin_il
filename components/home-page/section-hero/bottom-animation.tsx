import Image from 'next/image';
import img from '@/public/bg.png';
import styles from './styles.module.css';

export default function BottomAnimation() {
	return (
		<figure className={`${styles.imgWrap} absolute inset-0`}>
			<div className='absolute inset-0 -bottom-[10rem] left-[10%] top-auto md:-bottom-[15rem] xl:-bottom-[30rem]'>
				<Image
					className='relative left-1/2 max-w-[400svw] -translate-x-1/2'
					src={img}
					alt='bg'
					width={2277}
					height={1075}
					priority
				/>
			</div>
		</figure>
	);
}
