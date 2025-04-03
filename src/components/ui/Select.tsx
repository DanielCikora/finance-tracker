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
      className='cursor-pointer p-2.5 text-center w-full border-2 border-dark border-navy rounded'
    >
      {children}
    </select>
  );
}
