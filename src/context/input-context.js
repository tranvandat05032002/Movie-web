import React, { createContext } from "react";
const InputContext = createContext();

function InputProvider(props) {
  const [values, setValues] = React.useState("");
  const value = { values, setValues };
  return (
    <InputContext.Provider value={value} {...props}></InputContext.Provider>
  );
}

function useInput() {
  const context = React.useContext(InputContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { InputProvider, useInput };
