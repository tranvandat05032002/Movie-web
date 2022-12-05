import React from "react";
import styled, { css } from "styled-components";
import LoadingSniper from "../loading/LoadingSniper";
const ButtonStyles = styled.button`
  padding: 11px 10px;
  margin-top: 10px;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 900px;
  font-weight: 700;

  ${(prop) =>
    prop.kind === "buttonPrimary" &&
    css`
      border: 1px solid ${(prop) => prop.theme.borderLine};
      background: transparent;
      &:hover {
        border: 1px dashed ${(prop) => prop.theme.borderLine};
      }
    `}
  ${(prop) =>
    prop.kind === "buttonSecondary" &&
    css`
      border: 1px solid ${(prop) => prop.theme.borderLine};
      border-radius: 5px;
      padding: 5px 10px;
      font-weight: 500;

      &:hover {
        color: white;
      }
    `}
  ${(prop) =>
    prop.kind === "buttonFacebook" &&
    css`
      background-color: #335a9e;
      margin-right: 10px;
      margin-top: 0px;
    `}
  ${(prop) =>
    prop.kind === "buttonGmail" &&
    css`
      background-color: white;
      margin-top: 0px;
      color: ${(prop) => prop.theme.colorGoogleBlue};
    `}

    &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  children,
  className = "",
  type = "button",
  kind = "",
  onClick = () => {},
  ...props
}) => {
  const { isLoading, Navigation } = props;
  const child = !!isLoading ? <LoadingSniper></LoadingSniper> : children;
  let ButtonElement = "div";
  Navigation ? (ButtonElement = "NavLink") : (ButtonElement = "div");
  return (
    <div className="relative">
      {kind === "buttonFacebook" && (
        <img
          src="/facebook.svg"
          className=" max-w-[25px] max-h-[25px] absolute left-[65px] top-[10px]"
          alt=""
        />
      )}
      {kind === "buttonGmail" && (
        <img
          src="/google.svg"
          className=" max-w-[25px] max-h-[25px] absolute left-[65px] top-[10px]"
          alt=""
        />
      )}
      <ButtonElement>
        <ButtonStyles
          className={className}
          type={type}
          kind={kind}
          onClick={onClick}
          {...props}
        >
          {child}
        </ButtonStyles>
      </ButtonElement>
    </div>
  );
};

export default Button;
