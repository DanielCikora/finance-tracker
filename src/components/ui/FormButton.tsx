interface FormButtonDataTypes {
  buttonText: string;
  buttonType: "submit" | "button";
}
const FormButton: React.FC<FormButtonDataTypes> = ({
  buttonText,
  buttonType,
}) => {
  return (
    <button
      type={buttonType}
      className='block text-md hover:bg-offWhite transition-all duration-200 ease-in-out hover:text-gray-800 w-full py-2 mt-8 px-2 border border-solid border-offWhite rounded'
    >
      {buttonText}
    </button>
  );
};
export default FormButton;
