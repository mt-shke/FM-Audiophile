import { validateLength, validateEmail } from "../utils/formValidation";
import LabelInput from "./form/LabelInput";
import PaymentDetails from "./form/PaymentDetails";

const Form = (props) => {
	return (
		<div className="flex-c6 p-6 bg-white rounded-lg md:grid md:col-start-1 md:col-end-4 lg:p-12 xl:col-start-1 xl:col-end-3">
			<h2>checkout</h2>
			<div>
				<h5 className="subTitle my-4 text-orange">billing details</h5>
				<div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2">
					<LabelInput label="Name" id="name" name="name" validation={validateLength} />
					<LabelInput label="Email Address" id="email" name="email" validation={validateEmail} />
					<LabelInput label="Phone Number" id="phone" name="phone" validation={validateLength} />
				</div>
			</div>
			<div>
				<h5 className="subTitle my-4 text-orange">shipping info</h5>
				<div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2">
					<LabelInput
						className="md:col-span-2"
						label="You Address"
						id="address"
						name="address"
						validation={validateLength}
					/>
					<LabelInput label="ZIP Code" id="ZIPCode" name="ZIPCode" validation={validateLength} />
					<LabelInput label="City" id="city" name="city" validation={validateLength} />
					<LabelInput label="Country" id="country" name="country" validation={validateLength} />
				</div>
			</div>
			<PaymentDetails />
		</div>
	);
};
export default Form;
