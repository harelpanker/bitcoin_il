import clsx from 'clsx';

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export function Heading({ className, level = 2, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return (
		<Element
			{...props}
			className={clsx(
				className,
				`text-balance font-semibold ${level === 1 ? 'text-4xl md:text-6xl xl:text-7xl' : ''} ${
					level === 2 ? 'text-3xl md:text-5xl xl:text-6xl' : ''
				} ${level === 3 ? 'text-2xl md:text-4xl xl:text-5xl' : ''}`
			)}
		/>
	);
}
