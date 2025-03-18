type ErrorDataType = {
  errorMessage: string;
};
export default function Error({ errorMessage }: ErrorDataType) {
  return <h1>Error! {errorMessage}</h1>;
}
