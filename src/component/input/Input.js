import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyles = styled.input`
  background-color: ${(prop) => prop.theme.backgroundInput};
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid transparent;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #66b3ff;
  }
`;

/**
 * @param {*} placeholder(optional) - placeholder of input
 * @param {*} name(optional) - name of input
 * @param {*} control - control from react-hook-form
 * @returns
 */

const Input = ({
  name = "",
  type = "text",
  placeholder = "",
  control,
  className = "",
  autoComplete = "off",
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div>
      <InputStyles
        type={type}
        id={name}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
        {...props}
        {...field}
      />
    </div>
  );
};

export default Input;
