import React from "react";
import styled from "styled-components";
const AuthenticationPageStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(prop) => prop.theme.textTitle};
  background-color: ${(prop) => prop.theme.bgPrimary};

  .container-form {
    max-width: 210px;
    max-height: 210px;
  }
  img {
    margin-bottom: 80px;
    width: 100%;
    height: 100%;
  }
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container-form">
        <img src="/logo.svg" alt="" />
      </div>
      {children}
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
