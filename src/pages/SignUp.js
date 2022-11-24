import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field, Form, FormNav, Input, Label } from "../component";
import AuthenticationPage from "./AuthenticationPage";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const validationSchema = yup.object({});
  const { control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  return (
    <AuthenticationPage>
      <Form heading="Register">
        <form action="">
          <Field>
            <Label htmlFor={"fullName"}>Full name</Label>
            <Input
              placeholder="Full name"
              control={control}
              name={"fullName"}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor={"email"}>email</Label>
            <Input
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor={"password"}>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              control={control}
            />
          </Field>
          <Button kind="buttonPrimary">Create an account</Button>
          <FormNav kind={"register"}>Login?</FormNav>
        </form>
      </Form>
    </AuthenticationPage>
  );
};

export default SignUp;
