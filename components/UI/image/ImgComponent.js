import Image from "next/image";

const ImgComponent = (props) => {
	let widthFull = "w-full h-full";
	if (props.className?.includes("w-") || props.className?.includes("h-")) {
		widthFull = "";
	}

	return (
		<div className={`${widthFull} ${props.className ?? ""}`}>
			<Image
				className={props.icss ?? ""}
				src={props.src}
				objectFit={props.fit ?? "cover"}
				layout="fill"
				alt={props.alt ?? ""}
			/>
		</div>
	);
};
export default ImgComponent;
