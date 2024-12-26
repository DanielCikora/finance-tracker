import { MouseEventHandler } from "react";
interface SetterButtonDataTypes {
  buttonType: "button" | "reset" | "submit";
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const SetterButton: React.FC<SetterButtonDataTypes> = ({
  buttonText,
  buttonType,
  onClick,
}) => {
  return (
    <button className='btn btn-primary' type={buttonType} onClick={onClick}>
      {buttonText}
    </button>
  );
};
export default SetterButton;
