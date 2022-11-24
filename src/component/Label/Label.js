import React from "react";
import styled from "styled-components";
const LabelStyles = styled.label`
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 28px;
`;

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

export default Label;
