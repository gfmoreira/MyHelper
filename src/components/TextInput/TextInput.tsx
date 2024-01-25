import TextInputProps from "@/services/models/TextInput";

const TextInput = (props: TextInputProps) => {
  const {
    title,
    placeholder,
    value,
    handleOnChange,
    error,
    disabled,
    required,
    maxLength,
    type,
  } = props;

  function handleOnChangeAlphanumeric(event: any): void {
    if (event.target.validity.valid) {
      handleOnChange != null && handleOnChange(event.target.value);
    }
  }

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
        {title} {required ? <span>*</span> : null}
      </label>
      <input
        data-testid="textInput"
        maxLength={maxLength}
        type={type !== "alphanumeric" ? type : "text"}
        pattern={type == "alphanumeric" ? "^[a-zA-Z0-9]*$" : ""}
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
          error && "border-red-500"
        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(event) => {
          type === "alphanumeric"
            ? handleOnChangeAlphanumeric(event)
            : handleOnChange != null && handleOnChange(event.target.value);
        }}
      />
      <div
        data-testid="error-textInput"
        className="text-red-500 text-xs italic"
      >
        {error && "This is a required field"}
      </div>
    </div>
  );
};
export default TextInput;
