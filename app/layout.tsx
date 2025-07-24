import type { Metadata } from 'next';
import { dmSans } from '@/lib/fonts/fonts';
import { Children } from '@/lib/types/children';
import './globals.css';

export const metadata: Metadata = {
	title: 'Bitcoin IL',
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='ltr'>
			<body className={`${dmSans.variable}`}>
				<div className='relative flex grow flex-col'>
					{/* header */}
					{children}
				</div>
				{/* footer */}
			</body>
		</html>
	);
}
