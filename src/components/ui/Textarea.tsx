import { TextAreaDataTypes } from "@/types/reusablesDataTypes";
export default function Textarea({
  onChange,
  className,
  value,
  placeholder,
  name,
  rows,
  cols,
}: TextAreaDataTypes) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      rows={rows}
      cols={cols}
      className={`block p-2 border-2 border-solid border-white rounded placeholder:text-white/10 ${className}`}
    />
  );
}
