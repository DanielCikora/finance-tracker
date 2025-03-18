export type PostDataTypes<T> = {
  data: T | null;
  loading: boolean;
  error: null | string;
  postData: (body: object) => void;
};
