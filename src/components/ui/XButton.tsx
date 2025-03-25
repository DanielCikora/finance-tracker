import { XButtonDataTypes } from "@/types/reusablesDataTypes";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function XButton({ onClick, type }: XButtonDataTypes) {
  return (
    <button className='cursor-pointer block' type={type} onClick={onClick}>
      <FontAwesomeIcon
        className='block text-3xl text-red-500 hover:text-red-700 transition-all duration-200 ease-in-out'
        icon={faXmarkCircle}
      />
    </button>
  );
}
