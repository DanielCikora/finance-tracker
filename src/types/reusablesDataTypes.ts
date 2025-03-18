import { ChangeEventHandler, ReactNode } from "react";

export type SelectDataTypes = {
  name: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: string;
  children: ReactNode;
};

export type InputDataTypes = {
  name: string;
  type: "number" | "text" | "number" | "email";
  value: string | number;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
