import { ReactNode } from "react";
type CardPropsDataTypes = {
  cardTitle: string;
  cardDescription?: string | number;
  descriptionStyle?: string;
  children?: ReactNode;
};
export default function Card({
  cardTitle,
  cardDescription,
  descriptionStyle,
  children,
}: CardPropsDataTypes) {
  return (
    <article className='bg-card h-fit p-5 rounded-lg w-full relative grid place-items-center'>
      <h2 className='text-muted font-medium text-2xl mb-6 text-center'>
        {cardTitle}
      </h2>
      <h3
        className={`text-white font-semibold text-3xl text-center ${descriptionStyle}`}
      >
        {cardDescription}
      </h3>
      {children}
    </article>
  );
}
