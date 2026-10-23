import React from "react";
import { NavLink } from "react-router-dom";
import { Activity, Bell, ChartNoAxesCombined, FileText, House, Network, Settings, Shield, ShieldCheck, Ban } from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: House },
  { to: "/monitoring", label: "Monitoring", icon: Activity },
  { to: "/alerts", label: "Alerts", icon: Bell, badge: "3" },
  { to: "/attack-map", label: "Attack Map", icon: Network },
  { to: "/blocked-ips", label: "Blocked IPs", icon: Ban },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/settings", label: "Settings", icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark"><ShieldCheck size={20} strokeWidth={2.5} /></span>
        <span>NetSentry</span>
      </div>
      <nav className="nav-list" aria-label="Main navigation">
        {items.map(({ to, label, icon: Icon, badge }) => (
          <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
            <Icon size={18} strokeWidth={1.8} />
            <span>{label}</span>
            {badge && <span className="nav-badge">{badge}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
