interface TitleProps {
  titleText: string;
  className: string;
}
const MainTitle: React.FC<TitleProps> = ({ titleText, className }) => {
  return (
    <h1
      className={`md:text-5xl text-3xl font-semibold text-offWhite ${className}`}
    >
      {titleText}
    </h1>
  );
};
export default MainTitle;
