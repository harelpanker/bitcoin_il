import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Settings } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import logo from '@/public/logo.svg';

const links = [
	{ href: '/en/analytics', label: 'Analytics' },
	{ href: '/he', label: 'HE' },
];

export default function Header() {
	return (
		<Section element='header' className='py-4'>
			<Container className='flex max-w-full items-center justify-between'>
				<Link href='/en' className='max-w-1/2'>
					<Image src={logo} alt='Bitcoin IL' priority={true} />
				</Link>
				<NavigationMenu viewport={false}>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href='/en/analytics'>Analytics</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem className='flex'>
							<DropdownMenu>
								<DropdownMenuTrigger className='aspect-square cursor-pointer px-2.5 opacity-60'>
									<Settings size={16} />
								</DropdownMenuTrigger>
								<DropdownMenuContent align='end'>
									<DropdownMenuLabel>Language</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<Link href='/en'>English</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link href='/he'>Hebrew</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				{/* <nav>
					{links.map((link) => (
						<Button variant='ghost' asChild key={link.href}>
							<Link href={link.href}>{link.label}</Link>
						</Button>
					))}
				</nav> */}
			</Container>
		</Section>
	);
}
