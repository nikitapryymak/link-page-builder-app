const ERROR = "text-red-500";
const BORDER_ERROR = "border-red-600";

const labels = {
  green: "peer-focus:text-emerald-600",
  blue: "peer-focus:text-sky-500",
};

const Input = ({
  id,
  classes = "",
  placeholder = "",
  labelColor = "",
  isError,
  errorMessage,
  value = "",
  onChange,
  ...props
}) => (
  <div className={classes}>
    <div className="relative">
      <input
        id={id}
        type="text"
        placeholder=" "
        className={`peer block w-full max-w-[30rem] rounded-md p-2 text-sm bg-gray-100 border ${
          isError
            ? `${BORDER_ERROR} focus:${BORDER_ERROR}`
            : "border-transparent focus:border-transparent"
        } appearance-none focus:outline-none`}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute text-xs duration-300 -translate-y-[1.85rem] scale-90 top-3 left-2 origin-[0] peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-[1.85rem] ${
          isError ? ERROR : `text-gray-500 ${labels[labelColor]}`
        }`}
      >
        {placeholder}
      </label>
    </div>
    {isError && errorMessage && (
      <p className={`mt-1 ml-1 text-xs ${ERROR}`}>{errorMessage}</p>
    )}
  </div>
);

export default Input;
