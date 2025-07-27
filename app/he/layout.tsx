import type { Metadata } from 'next';
import { openSans } from '@/lib/fonts/fonts';
import { Children } from '@/lib/types/children';
import Header from '@/components/global/header';
import '../globals.css';

export const metadata: Metadata = {
	title: 'ביטקויין ישראל',
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='rtl'>
			<body className={`${openSans.variable} font-sans`}>
				<div className='relative flex grow flex-col'>
					<Header />
					{children}
				</div>
				{/* footer */}
			</body>
		</html>
	);
}
