import { MouseEventHandler } from "react";
interface ButtonDataTypes {
  buttonText: string;
  onClick: MouseEventHandler;
}
const Button: React.FC<ButtonDataTypes> = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='block text-md hover:bg-offWhite transition-all duration-200 ease-in-out hover:text-gray-800 py-2 w-full max-w-[150px] px-2 border border-solid border-offWhite rounded'
    >
      {buttonText}
    </button>
  );
};
export default Button;
