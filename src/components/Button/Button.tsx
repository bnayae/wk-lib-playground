import React from 'react';
import './Button.css';
import { ButtonProps } from './ButtonProps';

export const Button = (props: ButtonProps) => {
  return <button className="main">{props.label}</button>;
};
