import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type PlusButtonDataTypes = {
  onClick: () => void;
  className?: string;
};
export default function PlusButton({
  onClick,
  className,
}: PlusButtonDataTypes) {
  return (
    <button
      className={`plus-button cursor-pointer transition-all duration-200 ease-in-out text-white hover:text-black/50 ${className}`}
      onClick={onClick}
      type='button'
    >
      <FontAwesomeIcon className='block text-3xl' icon={faPlusCircle} />
    </button>
  );
}
