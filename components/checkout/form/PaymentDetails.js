import { useState } from "react";
import LabelInput from "./LabelInput";
import { validateLength } from "../../utils/formValidation";

const PaymentDetails = (props) => {
	const [payment, setPayment] = useState("eMoney");
	const eMoney = payment === "eMoney";

	return (
		<div>
			<h5 className="subTitle my-4 text-orange">payment details</h5>
			<label htmlFor="payment">
				<input className="hidden" type="radio" id="payment" name="payment" value={payment} />
			</label>
			<ul className="flex flex-col gap-4 pb-4">
				<li
					onClick={() => setPayment("eMoney")}
					className="flex gap-2 p-4 items-center border-2 border-gray rounded-lg font-bold hover:cursor-pointer"
				>
					<span className="w-6 h-6 relative gridc border-2 border-gray rounded-full">
						{eMoney && <span className="w-3 h-3 rounded-full bg-orange"></span>}
					</span>
					e-Money
				</li>
				<li
					onClick={() => setPayment("cash")}
					className="flex gap-2 p-4 items-center border-2 border-gray rounded-lg font-bold hover:cursor-pointer"
				>
					<span className="w-6 h-6 relative gridc border-2 border-gray rounded-full">
						{!eMoney && <span className="w-3 h-3 rounded-full bg-orange"></span>}
					</span>
					Cash on Delivery
				</li>
			</ul>
			<div className="min-h-[170px]">
				{eMoney && (
					<>
						<LabelInput
							label="e-Money Number"
							id="eMoneyNumber"
							name="eMoneyNumber"
							validation={validateLength}
						/>
						<LabelInput label="e-Money PIN" id="eMoneyPIN" name="eMoneyPIN" validation={validateLength} />
					</>
				)}
				{!eMoney && (
					<p className="text-para-gray">
						{`The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
					residence. Just make sure your address is correct so that your order will not be cancelled.`}
					</p>
				)}
			</div>
		</div>
	);
};
export default PaymentDetails;
