import { MouseEventHandler } from "react";
type ButtonDataTypes = {
  type: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  className?: string;
  disabled?: boolean | undefined;
};
export default function Button({
  type,
  text,
  onClick,
  className,
  disabled,
}: ButtonDataTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`block font-medium cursor-pointer px-2 w-full text-white py-2.5 rounded bg-action hover:bg-action-hover transition-all duration-200 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
}
