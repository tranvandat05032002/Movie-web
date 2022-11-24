import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button, Field, Form, FormNav, Input, Label } from "../component";
import AuthenticationPage from "./AuthenticationPage";

const SignIn = () => {
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <>
      <AuthenticationPage>
        <Form heading="Login">
          <form action="">
            <Field>
              <Label htmlFor={"email"}>Email</Label>
              <Input
                placeholder="youremail@gmail.com"
                type="email"
                name="email"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor={"password"}>Password</Label>
              <Input
                placeholder="password"
                type="text"
                name="password"
                control={control}
              ></Input>
            </Field>
            <NavLink
              to={"/forgot-password"}
              className="ml-1 text-sm border-b border-transparent text-hightLight hover:border-b hover:border-hightLight hover:cursor-pointer"
            >
              Forgot password?
            </NavLink>
            <Button kind="buttonPrimary">Login</Button>
            <Button kind="buttonFacebook">Login with Facebook</Button>
            <Button kind="buttonGmail">Login with Gmail</Button>
            <FormNav kind={"login"}>Register?</FormNav>
          </form>
        </Form>
      </AuthenticationPage>
    </>
  );
};

export default SignIn;
