export default function SpanGradient({ children }: { children: React.ReactNode }) {
	return (
		<span className='to-primary inline-block bg-gradient-to-br from-orange-400 bg-clip-text text-transparent'>
			{children}
		</span>
	);
}
