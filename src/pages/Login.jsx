import React from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, LockKeyhole, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Login() {
  const { user, login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  if (user) return <Navigate to="/" replace />;

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !password.trim()) { setError("Enter your username and password to continue."); return; }
    login(name);
    navigate(location.state?.from || "/", { replace: true });
  }

  return <div className="login-screen">
    <button className="login-theme" onClick={toggleTheme}>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</button>
    <form className="login-card" onSubmit={submit}>
      <div className="login-brand"><span className="brand-mark large"><ShieldCheck size={27}/></span><span>NetSentry</span></div>
      <h1>Welcome back</h1><p className="login-subtitle">Sign in to your security dashboard</p>
      <label className="form-label">Username<div className="form-input"><UserRound size={17}/><input value={name} onChange={e => setName(e.target.value)} placeholder="Enter username" autoComplete="username"/></div></label>
      <label className="form-label">Password<div className="form-input"><LockKeyhole size={17}/><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" autoComplete="current-password"/></div></label>
      {error && <div className="form-error">{error}</div>}
      <button className="primary-button login-submit" type="submit">Sign in</button>
    </form>
  </div>;
}
