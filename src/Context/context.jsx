import React, { useState, useContext } from "react";


const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const switchSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        switchSidebar,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export function useGlobal() {
  return useContext(GlobalContext);
}
export { ContextProvider, GlobalContext };
