import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

function MainCta({
	className,
	asChild = false,
	...props
}: React.ComponentProps<'button'> & {
	asChild?: boolean;
}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot='button'
			className={cn(
				'bg-theme-white hover:opacity-85 text-theme-black rounded-full px-6 py-2.5 text-lg font-semibold transition duration-300 hover:scale-105',
				{ className }
			)}
			{...props}
		/>
	);
}

export { MainCta };
