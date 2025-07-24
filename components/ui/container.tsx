import clsx from 'clsx';

export default function Container({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div {...props} className={clsx(className, 'relative z-20 mx-auto w-[92svw] max-w-[80rem]')}>
			{children}
		</div>
	);
}
