import clsx from 'clsx';

type SectionProps = {
	element?: 'section' | 'header' | 'main';
} & React.ComponentPropsWithoutRef<'section' | 'header' | 'main'>;

export default function Section({ className, element = 'section', children, ...props }: SectionProps) {
	const Element = element;
	return (
		<Element {...props} className={clsx(className, `relative z-20 flex flex-col`)}>
			{children}
		</Element>
	);
}
