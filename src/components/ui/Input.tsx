import { ChangeEventHandler } from "react";
interface InputDataTypes {
  inputType: string;
  labelText: string;
  htmlFor: string;
  name: string;
  placeholder: string;
  className: string;
  value: number | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const Input: React.FC<InputDataTypes> = ({
  inputType,
  labelText,
  htmlFor,
  name,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <div className='custom-input w-full text-offWhite'>
      <label htmlFor={htmlFor} className='block text-2xl font-semibold mb-1'>
        {labelText}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        className={`block p-2 w-full bg-offBlack text-xl font-semibold border border-solid border-offWhite rounded ${className}`}
        type={inputType}
        onChange={onChange}
        value={value !== null ? value : ""}
      />
    </div>
  );
};
export default Input;
