import { XButtonDataTypes } from "@/types/reusablesDataTypes";
export default function XButton({ onClick, type }: XButtonDataTypes) {
  return (
    <button className='cursor-pointer block' type={type} onClick={onClick}>
      <img
        className='block w-full h-auto max-w-8'
        src='/images/x-mark-image.png'
        alt='x-mark'
      />
    </button>
  );
}
