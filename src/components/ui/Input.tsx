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
      className={`block w-full p-3 border-2 border-solid border-dark rounded ${className}`}
    />
  );
}
