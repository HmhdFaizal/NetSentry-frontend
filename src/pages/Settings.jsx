import React from "react";
import { Moon, Sun, MonitorCog, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  return <><PageHeader title="Settings" description="Customize your NetSentry dashboard experience"/><section className="panel settings-panel"><div className="panel-heading"><h2>Appearance</h2></div><p className="muted-copy">Choose a theme. Your preference is saved in this browser.</p><div className="theme-options"><button className={`theme-option ${theme === "light" ? "selected" : ""}`} onClick={() => setTheme("light")}><Sun size={22}/><strong>Light mode</strong><span>White surfaces with navy-blue accents</span></button><button className={`theme-option ${theme === "dark" ? "selected" : ""}`} onClick={() => setTheme("dark")}><Moon size={22}/><strong>Dark mode</strong><span>Deep charcoal and navy surfaces</span></button></div></section><section className="panel settings-panel"><div className="panel-heading"><h2><MonitorCog size={18}/> Integration status</h2></div><div className="integration-row"><span>Frontend mode</span><strong>Sample data</strong></div><div className="integration-row"><span>Backend</span><strong>FastAPI integration pending</strong></div><div className="integration-row"><span>Authentication</span><strong>Backend authentication not connected</strong></div><div className="settings-note"><ShieldCheck size={17}/> Production login and defensive actions must be secured and validated by the backend.</div></section></>;
}
