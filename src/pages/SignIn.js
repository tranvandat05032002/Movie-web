import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "firebase-app/firebase-config";
import {
  Button,
  Field,
  Form,
  FormNav,
  Input,
  InputPassword,
  Label,
} from "component";
const SignIn = () => {
  const validateScheme = yup.object({
    email: yup
      .string()
      .required("Please enter your email address")
      .email("Please enter valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Your password must be at least 8 character or greater"),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validateScheme),
  });
  const navigate = useNavigate();
  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/");
      toast.success("Login successfully!!!", {
        pauseOnHover: false,
      });
      setTimeout(() => {
        Swal.fire({
          position: "top-between",
          icon: "success",
          title: `Welcome ${
            values?.fullName
              ? values.fullName.toLowerCase()
              : "".replace(/(^|\s)\S/g, (l) => l.toUpperCase())
          }! 
                  Your work has been saved`,
          showConfirmButton: false,
          timer: 6000,
        });
      }, 500);
    } catch (error) {
      Swal.fire({
        text: "Your account or password is incorrect, please re-enter",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
    }
  };
  //Sign-in with facebook
  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Login successfully!", {
        pauseOnHover: false,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Sign-in with google
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Login successfully!", {
        pauseOnHover: false,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <AuthenticationPage>
        <Form heading="Login">
          <form
            action=""
            autoComplete="off"
            onSubmit={handleSubmit(handleSignIn)}
          >
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
              <InputPassword control={control}></InputPassword>
            </Field>
            <NavLink
              to={"/forgot-password"}
              className="ml-1 text-sm border-b border-transparent text-hightLight hover:border-b hover:border-hightLight hover:cursor-pointer"
            >
              Forgot password?
            </NavLink>
            <Button
              kind="buttonPrimary"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Login
            </Button>
            <Button kind="buttonFacebook" onClick={signInWithFacebook}>
              Login with Facebook
            </Button>
            <Button kind="buttonGmail" onClick={signInWithGoogle}>
              Login with Gmail
            </Button>
            <FormNav kind={"login"}>Register?</FormNav>
          </form>
        </Form>
      </AuthenticationPage>
    </>
  );
};

export default SignIn;
