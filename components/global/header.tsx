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
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';

import logo from '@/public/logo.svg';

const dropLinks = [
	{ href: '/en', label: 'English' },
	{ href: '/he', label: 'Hebrew' },
];

export default function Header() {
	return (
		<Section element='header' className='py-4'>
			<Container className='flex max-w-full items-center justify-between'>
				<Link href='/en' className='max-w-1/2'>
					<Image src={logo} alt='Bitcoin IL' priority={true} />
				</Link>
				<NavigationMenu viewport={false}>
					<NavigationMenuList className='gap-x-2'>
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
									{dropLinks.map((link) => (
										<DropdownMenuItem key={link.href} asChild>
											<Link href={link.href}>{link.label}</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</Container>
		</Section>
	);
}
