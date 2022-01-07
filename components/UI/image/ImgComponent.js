import Image from "next/image";

const ImgComponent = (props) => {
	const widthFull = props.className?.includes("w-") || props.className?.includes("h-") ? "" : "w-full h-full";

	return (
		<div className={`${widthFull} ${props.className ?? ""}`}>
			<Image
				className={props.icss ?? ""}
				src={props.src}
				objectFit={props.fit ?? "cover"}
				layout="fill"
				alt={props.alt ?? ""}
				priority={props.priority ?? "false"}
			/>
		</div>
	);
};
export default ImgComponent;
