"use client";

import { type User } from "@supabase/supabase-js";
import React, { createContext } from "react";

interface UserContextType {
  user: User;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider: React.FC<{
  children: React.ReactNode;
  user: User;
}> = ({ children, user }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
