import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthenticationPage from "./AuthenticationPage";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithCredential, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import slugify from "slugify";
import {
  Button,
  Field,
  Form,
  FormNav,
  Input,
  InputPassword,
  Label,
} from "component";
import { auth, db } from "firebase-app/firebase-config";

const SignUp = () => {
  const validateScheme = yup.object({
    fullName: yup
      .string()
      .required("Please enter a your fullName")
      .min(6, "must have at least 6 characters"),
    email: yup
      .string()
      .required("Please enter your email address")
      .email("Please enter valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Your password must be at least 8 character or greater"),
  });
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "Register";
  }, []);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validateScheme),
  });
  const handleCreateUser = async (values) => {
    if (!isValid) return;
    // navigate("/sign-in")
    try {
       await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(auth.currentUser, {
        displayName: values.fullName,
        photoURL:
          "https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg",
      });
      //Note: was wrong here
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        fullName: values.fullName,
        avatar:
          "https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg",
        createAt: serverTimestamp(),
        status: 1,
        email: values.email,
        password: values.password,
        userName: slugify(values.fullName, {
          lower: true,
          replacement: " ",
          trim: true,
        }),
      });
      toast.success("Register successFully", {
        pauseOnHover: true,
      });
      reset({
        fullName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.message, {
        pauseOnHover: true,
      });
    }
  };
  //show toast error of react-hook-form
  React.useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  return (
    <AuthenticationPage>
      <Form heading="Register">
        <form
          autoComplete="off"
          className="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
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
              name={"email"}
              placeholder="Youremail@gmail.com"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor={"password"}>Password</Label>
            <InputPassword control={control}></InputPassword>
          </Field>
          <Button
            kind="buttonPrimary"
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Create an account
          </Button>
          <FormNav kind={"register"}>Login?</FormNav>
        </form>
      </Form>
    </AuthenticationPage>
  );
};

export default SignUp;
