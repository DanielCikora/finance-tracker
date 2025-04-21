import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalDataTypes } from "@/types/reusablesDataTypes";
export default function Modal({
  children,
  maxWidth,
  maxHeight,
  closeModal,
}: ModalDataTypes) {
  return (
    <dialog
      className='fixed inset-0 z-50 p-5 w-dvw h-dvh bg-black/20 bg-opacity-5 grid place-items-center'
      role='dialog'
    >
      <div
        className={`relative max-w-[${maxWidth}px] max-h-[${maxHeight}px] bg-card rounded-lg px-4 pt-8 pb-4`}
      >
        <button
          className='cursor-pointer block absolute top-1 right-1 px-1 hover:bg-red-100 transition-all duration-200 ease-in-out rounded-full'
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
