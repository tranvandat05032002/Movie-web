import React from "react";
import styled from "styled-components";
const FormStyles = styled.div`
  border: 1px solid #81cff5;
  padding: 2rem;
  width: 430px;
  border-radius: 0.5rem /* 8px */;
  background-color: ${(prop) => prop.theme.backgroundForm};
`;
const H1Styles = styled.h1`
  color: ${(prop) => prop.theme.textTitle};
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
`;
/**
 *
 * @param {*} heading(optional) -title of form
 * @returns
 */

const Form = ({ className = "", heading = "Register", children }) => {
  return (
    <FormStyles className={className}>
      <H1Styles>{heading}</H1Styles>
      {children}
    </FormStyles>
  );
};

export default Form;
