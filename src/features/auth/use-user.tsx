"use client";

import { useContext } from "react";
import { UserContext } from "./auth-provider";

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
