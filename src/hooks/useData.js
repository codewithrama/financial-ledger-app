import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function useData() {
  const context =useContext(AppContext);
  if (context === undefined) {
    throw new Error("Context must be used within AppContextProvider");
  }
  return context;
}