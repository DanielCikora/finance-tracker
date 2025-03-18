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
      className='cursor-pointer p-2.5 w-full max-w-[100px] border-2 border-solid border-navy rounded'
    >
      {children}
    </select>
  );
}
