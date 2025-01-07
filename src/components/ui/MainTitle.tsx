interface TitleProps {
  titleText: string;
  className: string;
}
const MainTitle: React.FC<TitleProps> = ({ titleText, className }) => {
  return (
    <h2
      className={`md:text-5xl m-0 text-3xl font-semibold text-offWhite ${className}`}
    >
      {titleText}
    </h2>
  );
};
export default MainTitle;
