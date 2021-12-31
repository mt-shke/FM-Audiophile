import Image from "next/image";

const ImgComponent = (props) => {
	let widthFull = "w-full h-full";
	if (props.css?.includes("w-") || props.css?.includes("h-")) {
		widthFull = "";
	}

	return (
		<div className={`${widthFull} ${props.css ?? ""}`}>
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
