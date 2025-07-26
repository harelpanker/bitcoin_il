import clsx from 'clsx';

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export function Heading({ className, level = 2, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return <Element {...props} className={clsx(`text-pretty text-3xl font-bold lg:text-4xl`, className)} />;
}
