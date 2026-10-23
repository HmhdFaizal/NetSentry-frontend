import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const KEY = "netsentry-session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return sessionStorage.getItem(KEY) ? { name: sessionStorage.getItem(KEY) } : null; }
    catch { return null; }
  });

  function login(name) {
    const safeName = (name || "Administrator").trim() || "Administrator";
    setUser({ name: safeName });
    try { sessionStorage.setItem(KEY, safeName); } catch {}
  }

  function logout() {
    setUser(null);
    try { sessionStorage.removeItem(KEY); } catch {}
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
