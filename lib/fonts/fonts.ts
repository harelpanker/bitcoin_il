import { Open_Sans, Inter, Be_Vietnam_Pro } from 'next/font/google';

export const openSans = Open_Sans({
	variable: '--font-open-sans',
	display: 'swap',
	subsets: ['latin'],
});

export const inter = Inter({
	variable: '--font-inter',
	display: 'swap',
	subsets: ['latin'],
});

export const beVietnamPro = Be_Vietnam_Pro({
	variable: '--font-be-vietnam-pro',
	display: 'swap',
	subsets: ['latin'],
	weight: ['600'],
});
