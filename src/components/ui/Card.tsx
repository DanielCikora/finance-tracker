import { MouseEventHandler } from "react";
interface CardProps {
  cardTitle: string;
  cardNumber: number | null;
  buttonText: string;
  cardSymbol: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const Card: React.FC<CardProps> = ({
  cardTitle,
  cardNumber,
  buttonText,
  cardSymbol,
  className,
  onClick,
}) => {
  return (
    <div className='bg-gradient-to-b from-offBlack text-center to-mainBlack shadow-lg border-2 border-mainMint border-solid rounded-md p-6 w-full max-w-xs hover:scale-105 transition-transform duration-300 ease-in-out'>
      <h2 className='md:text-3xl text-xl font-bold text-offWhite mb-4'>
        {cardTitle}
      </h2>
      <p className={`md:text-4xl text-2xl font-extrabold mb-6 ${className}`}>
        {cardNumber} <span className='text-offWhite'>{cardSymbol}</span>
      </p>
      <div className='flex justify-center'>
        <button
          className='font-semibold text-offWhite border border-mainMint rounded-full py-2 px-6 text-xl hover:bg-mainMint transition-all duration-200 ease-in-out'
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default Card;
