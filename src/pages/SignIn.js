import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Field,
  Form,
  FormNav,
  Input,
  InputPassword,
  Label,
} from "../component";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithFacebook,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
import Swal from "sweetalert2";

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
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validateScheme),
  });
  const { userInfo } = useAuth();
  console.log("🚀 ~ file: SignIn.js ~ line 48 ~ SignIn ~ userInfo", userInfo);
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "Login";
  }, []);
  React.useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/");
    } catch (error) {
      // toast.error(error.message);
      Swal.fire({
        // title: "Your account or password is incorrect",
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
      const accountFacebook = await signInWithPopup(auth, provider);
      navigate("/");
      toast.success("Login successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Sign-in with google
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const accountGoogle = await signInWithPopup(auth, provider);
      navigate("/");
      toast.success("Login successfully!");
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
