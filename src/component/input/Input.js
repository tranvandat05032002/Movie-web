import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyles = styled.div`
  position: relative;
  width: 100%;

  input {
    background-color: ${(prop) => prop.theme.backgroundInput};
    width: 100%;

    border: none;
    outline: none;
    padding: 8px 16px;
    border-radius: 5px;
    border: 1px solid transparent;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: 1px solid #66b3ff;
  }
`;

/**
 * @param {*} placeholder(optional) - placeholder of input
 * @param {*} name(optional) - name of input
 * @param {*} control - control from react-hook-form
 * @returns Input
 */

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <InputStyles>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

export default Input;
