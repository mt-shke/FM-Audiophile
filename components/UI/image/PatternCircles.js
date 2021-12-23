const SvgComponent = (props) => (
	<svg width={300} height={300} xmlns="http://www.w3.org/2000/svg" {...props}>
		<g stroke="#FFF" fill="none" fillRule="evenodd" opacity={1}>
			<circle cx={472} cy={472} r={235.5} />
			<circle cx={472} cy={472} r={270.5} />
			<circle cx={472} cy={472} r={471.5} />
		</g>
	</svg>
);

export default SvgComponent;
