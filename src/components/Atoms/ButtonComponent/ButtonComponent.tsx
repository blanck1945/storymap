import React from "react";
import { ButtonVariants } from "../../../models/Enums/ButtonEnums";
import { useStyles } from "./styles";

export interface ButtonComponentProps {
  variant: ButtonVariants;
  children: string;
  type?: string;
  rest?: any;
}

const ButtonComponent = ({
  variant,
  children,
  type,
  ...rest
}: ButtonComponentProps) => {
  const classes = useStyles();

  return (
    <button className={`${classes.button} ${classes[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default ButtonComponent;
