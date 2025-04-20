import { SelectDataTypes } from "@/types/reusablesDataTypes";
export default function Select({
  name,
  onChange,
  value,
  children,
}: SelectDataTypes) {
  return (
    <select
      onChange={onChange}
      value={value}
      name={name}
      className='cursor-pointer text-white focus:outline-none placeholder:text-muted p-2.5 text-center w-full border border-white border-navy rounded'
    >
      {children}
    </select>
  );
}
