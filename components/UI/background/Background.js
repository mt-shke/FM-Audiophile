const Background = (props) => {
	return <div onClick={props.onClick} className={`w-full h-full ${props.css}`}></div>;
};
export default Background;
