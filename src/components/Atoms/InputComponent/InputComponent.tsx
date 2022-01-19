import React from "react";

interface InputComponentProps {
  name: string;
  placeholder: string;
  onChange: any;
  labelText?: string;
}

const InputComponent = ({
  name,
  placeholder,
  onChange,
  labelText,
}: InputComponentProps) => {
  return <input />;
};

export default InputComponent;
