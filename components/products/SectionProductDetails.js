import ImgComponent from "../UI/image/ImgComponent";
import Button from "../UI/button/Button";

const SectionProductDetails = (props) => {
	const item = props.item;
	console.log(item);
	return (
		<section className="flex-c6 items-start text-left px-6 py-12">
			<button>Go Back</button>
			<article>
				<div>
					<ImgComponent
						css="relative aspect-square w-full"
						fit="cover"
						src={item.image.mobile}
						alt={item.name}
					/>
					<div>
						{item.new && <span className="overl uppercase text-orange">New product</span>}
						<h2>{item.name}</h2>
						<p className="text-para-gray">{item.description}</p>
						<span className="font-bold">$ {item.price}</span>
						<div>
							<span className="flex flex-row">
								<span>-</span>
								<input className="noArr w-16 px-2 text-center outline-none" placeholder="0" type="number" />
								<span>+</span>
							</span>
							<Button>see product</Button>
						</div>
					</div>
				</div>
				<div></div>
				<div></div>
			</article>
		</section>
	);
};

export default SectionProductDetails;
