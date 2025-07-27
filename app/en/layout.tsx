import type { Metadata } from 'next';
import { openSans } from '@/lib/fonts/fonts';
import { Children } from '@/lib/types/children';
import Header from '@/components/global/header';
import '../globals.css';

export const metadata: Metadata = {
	title: 'Bitcoin IL',
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='ltr'>
			<body className={`${openSans.variable} font-inter`}>
				<div className='relative flex grow flex-col'>
					<Header />
					{children}
				</div>
				{/* footer */}
			</body>
		</html>
	);
}
