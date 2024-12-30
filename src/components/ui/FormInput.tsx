import { ChangeEventHandler } from "react";
interface FormInputDataTypes {
  formLabel: string;
  formInputType: string;
  formIsRequired: boolean;
  formValue: string | number | undefined;
  formHtmlFor: string;
  formId: string;
  formPlaceholder: string;
  formOnChange: ChangeEventHandler<HTMLInputElement>;
}
const FormInput: React.FC<FormInputDataTypes> = ({
  formLabel,
  formInputType,
  formIsRequired,
  formHtmlFor,
  formId,
  formValue,
  formPlaceholder,
  formOnChange,
}) => {
  return (
    <>
      <label htmlFor={formHtmlFor} className='block text-lg font-normal mb-1'>
        {formLabel}
      </label>
      <input
        type={formInputType}
        required={formIsRequired}
        id={formId}
        value={formValue}
        onChange={formOnChange}
        placeholder={formPlaceholder}
        className='block py-2 w-full bg-inherit mb-2 px-2 text-md font-semibold border border-solid border-offWhite rounded'
      />
    </>
  );
};

export default FormInput;
