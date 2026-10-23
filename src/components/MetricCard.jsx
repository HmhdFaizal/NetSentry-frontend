import React from "react";
import { Activity, Network, ShieldAlert, ShieldCheck, TrendingDown, TrendingUp } from "lucide-react";

const iconMap = { traffic: Activity, threats: ShieldAlert, blocked: ShieldCheck, connections: Network };

export default function MetricCard({ type, title, value, change, suffix = "", tone = "green" }) {
  const Icon = iconMap[type] || Activity;
  const hasChange = typeof change === "number" && Number.isFinite(change);
  const down = hasChange && change < 0;
  return (
    <article className="metric-card">
      <div className={`metric-icon ${tone}`}><Icon size={22} strokeWidth={2.1}/></div>
      <div className="metric-copy">
        <span className="metric-label">{title}</span>
        <strong className="metric-value">{value}</strong>
        <span className="metric-footnote">vs. previous 24h</span>
      </div>
      <div className={`metric-change ${hasChange ? (down ? "down" : "up") : "neutral"}`}>
        {hasChange ? (down ? <TrendingDown size={14}/> : <TrendingUp size={14}/>) : null}
        <span>{hasChange ? `${Math.abs(change).toFixed(1)}%${suffix}` : "No data"}</span>
      </div>
    </article>
  );
}
