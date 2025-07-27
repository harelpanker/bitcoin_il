import clsx from 'clsx';

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	isRtl?: boolean;
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export function Heading({ className, level = 2, isRtl = false, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return (
		<Element
			{...props}
			className={clsx(
				`text-pretty text-3xl lg:text-4xl ${!isRtl ? 'font-be-vietnam-pro font-semibold' : 'font-bold'}`,
				className
			)}
		/>
	);
}
