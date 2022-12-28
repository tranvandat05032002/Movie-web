import EyeClose from "component/icon/EyeClose";
import EyeOpen from "component/icon/EyeOpen";
import React from "react";
import Input from "./Input";
const InputPassword = ({ control }) => {
  const [togglePassword, setTogglePassword] = React.useState(false);
  return (
    <React.Fragment>
      <Input
        type={!togglePassword ? "password" : "text"}
        name="password"
        placeholder="Password"
        control={control}
      >
        {!togglePassword ? (
          <EyeClose onClick={() => setTogglePassword(true)}></EyeClose>
        ) : (
          <EyeOpen onClick={() => setTogglePassword(false)}></EyeOpen>
        )}
      </Input>
    </React.Fragment>
  );
};

export default InputPassword;
