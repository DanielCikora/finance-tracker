import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalDataTypes } from "@/types/reusablesDataTypes";
export default function Modal({
  children,
  closeModal,
  maxWidth,
  maxHeight,
}: ModalDataTypes) {
  return (
    <dialog
      className='fixed inset-0 z-50 p-5 w-dvw h-dvh bg-black/20 bg-opacity-5 grid place-items-center'
      role='dialog'
    >
      <div
        className={`relative w-full h-full max-w-[${maxWidth}px] max-h-[${maxHeight}px] bg-white rounded px-4 pt-12 pb-2`}
      >
        <button
          className='cursor-pointer block absolute top-1 right-2 px-1 hover:bg-red-100 transition-all duration-200 ease-in-out rounded-full'
          onClick={closeModal}
        >
          <FontAwesomeIcon
            className='block text-red-500 text-3xl'
            icon={faXmark}
          />
        </button>
        {children}
      </div>
    </dialog>
  );
}
