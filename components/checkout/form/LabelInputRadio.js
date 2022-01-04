const LabelInputRadio = (props) => {
	return (
		<>
			<h5 className="subTitle pt-2 text-orange">payment details</h5>
			<ul className="flex flex-col gap-4">
				<li>
					<input type="radio" className="hidden peer" id="eMoney" name="payment" defaultChecked />
					<label
						className="flex gap-2 p-4 items-center border-2 border-gray rounded-lg font-bold peer-checked:border-orange"
						htmlFor="eMoney"
					>
						<span className="w-4 h-4 border rounded-full"></span> e-Money
					</label>
				</li>
				<li>
					<input type="radio" className="hidden peer" id="cash" name="payment" />
					<label
						className="flex gap-2 p-4 items-center border-2 border-gray rounded-lg font-bold peer-checked:border-orange"
						htmlFor="cash"
					>
						<span className="w-4 h-4 border rounded-full "></span> Cash on Delivery
					</label>
				</li>
			</ul>
		</>
	);
};
export default LabelInputRadio;
