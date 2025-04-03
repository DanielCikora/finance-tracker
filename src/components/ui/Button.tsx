import { MouseEventHandler } from "react";
type ButtonDataTypes = {
  type: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  className?: string;
};
export default function Button({
  type,
  text,
  onClick,
  className,
}: ButtonDataTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`block cursor-pointer px-2 w-full max-w-[200px] text-white py-3 rounded bg-primary hover:bg-black transition-all duration-200 ease-in-out font-semibold ${className}`}
    >
      {text}
    </button>
  );
}
