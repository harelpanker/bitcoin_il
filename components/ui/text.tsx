import clsx from 'clsx';
import Link from 'next/link';

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
	return <p data-slot='text' {...props} className={clsx(className, 'text-base xl:text-lg')} />;
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
	return <Link {...props} className={clsx('text-info hover:opacity-85 transition-opacity duration-300', className)} />;
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
	return <strong {...props} className={clsx('font-medium', className)} />;
}
