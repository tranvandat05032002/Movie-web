import React from "react";

export const storeDetailsContext = React.createContext();
export default function storeDetailsProvider() {
  return (
    <storeDetailsContext.Provider value={{}}></storeDetailsContext.Provider>
  );
}
