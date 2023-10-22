const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2",
};
const disabled = "opacity-60 cursor-not-allowed";

const PrimaryBtn = ({
  children,
  size = "md",
  isDisabled,
  sx = {},
  ...props
}) => {
  return (
    <button
      className={`center font-semibold rounded-[4rem] text-gray-50 bg-emerald-600 hover:bg-emerald-700 w-full
      ${sizes[size]}
      ${isDisabled && disabled}
      `}
      style={{ ...sx }}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
export default PrimaryBtn;
