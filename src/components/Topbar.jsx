import React from "react";
import { Bell, ChevronDown, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <label className="global-search">
        <Search size={16} />
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search IP, threat, or keyword..." aria-label="Search IP, threat, or keyword" />
        {query && <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
      </label>
      <div className="topbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title="Switch theme">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span className={`toggle-track ${theme === "light" ? "on" : ""}`}><span /></span>
        </button>
        <button className="icon-button notification-button" aria-label="Notifications"><Bell size={18}/><span className="notification-dot" /></button>
        <div className="profile-wrap">
          <button className="profile-button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen}>
            <span className="avatar">{(user?.name || "Administrator").slice(0, 2).toUpperCase()}</span>
            <span className="profile-name">{user?.name || "Administrator"}</span>
            <ChevronDown size={15}/>
          </button>
          {menuOpen && <div className="profile-menu"><div className="profile-menu-label">Account</div><button onClick={logout}>Sign out</button></div>}
        </div>
      </div>
    </header>
  );
}
