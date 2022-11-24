import React from "react";
import styled from "styled-components";
const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 10px;
`;

const Field = ({ children, ...props }) => {
  return <FieldStyles {...props}>{children}</FieldStyles>;
};

export default Field;
