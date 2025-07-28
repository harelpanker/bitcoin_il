import styles from './css-gradient.module.css';

export default function SpanGradient({ children }: { children: React.ReactNode }) {
	return (
		<span
			className={`${styles.animateGradient} to-primary inline-block bg-gradient-to-br from-orange-400 bg-clip-text text-transparent`}>
			{children}
		</span>
	);
}
