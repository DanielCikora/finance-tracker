"use client";
import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type PlusButtonDataTypes = {
  onClick: () => void;
  className?: string;
};
export default function PlusButton({
  onClick,
  className,
}: PlusButtonDataTypes) {
  const [buttonTitle, setButtonTitle] = useState<string>("");
  return (
    <button
      className={`plus-button relative cursor-pointer transition-all duration-200 ease-in-out text-white hover:bg-black bg-[#0077B6]  ${className}`}
      onClick={onClick}
      type='button'
    >
      <FontAwesomeIcon className='block text-2xl' icon={faPlus} />
      {buttonTitle && (
        <p className='absolute -top-2 -right-5 w-fit h-fit p-2 bg-red-200'>
          {buttonTitle}
        </p>
      )}
    </button>
  );
}
