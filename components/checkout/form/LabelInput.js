import useInput from "../../hooks/useInput";

const LabelInput = (props) => {
	const {
		value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	} = useInput(props.validation);

	const error = hasError ? "border-red" : "border-gray";
	const errorMessage = !value ? "Required field" : props.errorMessage ? props.errorMessage : "Wrong format";

	return (
		<label
			className={`${props.className ?? ""} ${hasError && "text-red"} flex flex-col gap-2 font-bold`}
			htmlFor={props.id}
		>
			<div className="flex items-baseline">
				{props.label ?? ""} {hasError && <em className="mr-0 ml-auto text-red text-xs">{errorMessage}</em>}
			</div>
			<input
				className={`${error} h-full px-4 py-2 border-2 text-para-gray font-bold rounded-lg`}
				type={props.type ?? "text"}
				id={props.id}
				value={value}
				onBlur={inputBlurHandler}
				onChange={valueChangeHandler}
			/>
		</label>
	);
};
export default LabelInput;
