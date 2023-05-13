import LogoIcon from "component/icon/LogoIcon";
import React from "react";
import styled from "styled-components";
// import image from "../component/image/logo.png"
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
        {/* <img src="image/logo.png" alt="" /> */}
        <div className="mb-[5px]">
          {" "}
          <LogoIcon width={101} height={136}></LogoIcon>
        </div>
      </div>
      {children}
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
