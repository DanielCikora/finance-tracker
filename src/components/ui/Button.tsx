import { MouseEventHandler } from "react";
type ButtonDataTypes = {
  type: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
};
export default function Button({ type, text, onClick }: ButtonDataTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      className='cursor-pointer hover:text-red px-2 w-full max-w-[200px] text-white py-3 rounded bg-navy font-semibold'
    >
      {text}
    </button>
  );
}
