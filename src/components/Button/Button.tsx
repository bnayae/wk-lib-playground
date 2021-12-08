import React from "react";
import { ButtonProps } from "./ButtonProps";

export const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
