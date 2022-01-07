const Background = (props) => {
	return <div onClick={props.onClick} className={`w-full h-full ${props.className ?? ""}`}></div>;
};
export default Background;
