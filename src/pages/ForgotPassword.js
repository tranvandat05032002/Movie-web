import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const ForgotPassword = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgPrimary};
  color: ${(prop) => prop.theme.textPrimary};
  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${(prop) => prop.theme.textTitle};
  }
  .description {
    max-width: 800px;
    margin: 0 auto 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    border: 1px solid ${(prop) => prop.theme.borderLine};
  }
  .image {
    max-width: 250px;
    margin: 0 auto 40px;
  }
`;

const PageNotFound = () => {
  return (
    <ForgotPassword>
      <div className="page-content">
        <img src="/404.png" alt="notfound" className="image" />
        <h1 className="heading">404 - I'm Sorry.</h1>
        <p className="description">
          This page is not built, please return to the homepage.
        </p>
        <NavLink to="/" className={"back"}>
          Back to home
        </NavLink>
      </div>
    </ForgotPassword>
  );
};

export default PageNotFound;
