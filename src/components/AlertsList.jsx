import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const severityClass = severity => (severity || "info").toLowerCase();

export default function AlertsList({ alerts = [], compact = false }) {
  const rows = compact ? alerts.slice(0, 5) : alerts;
  return (
    <div className="alerts-list">
      {rows.map(alert => <div className="alert-row" key={alert.id || `${alert.title}-${alert.time}`}>
        <span className={`severity-dot ${severityClass(alert.severity)}`} />
        <div className="alert-content"><strong>{alert.title}</strong><span>{alert.detail || alert.source_ip || "Security event recorded"}</span></div>
        <time>{alert.time || alert.created_at || "—"}</time>
      </div>)}
      {!rows.length && <div className="empty-state">No alerts to display.</div>}
      {compact && <Link to="/alerts" className="card-link">View all <ArrowUpRight size={14}/></Link>}
    </div>
  );
}
