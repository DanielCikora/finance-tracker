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
  className?: string;
};

export type TextAreaDataTypes = {
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  rows: number;
  cols: number;
  placeholder: string;
  className?: string;
};

export type XButtonDataTypes = {
  onClick: () => void;
  type: "button" | "reset";
};
