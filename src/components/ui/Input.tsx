import { InputDataTypes } from "@/types/reusablesDataTypes";
export default function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
  className,
}: InputDataTypes) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`block focus:outline-none w-full p-3 border border-solid border-white text-white rounded no-spinners placeholder:text-white/10 ${className}`}
    />
  );
}
