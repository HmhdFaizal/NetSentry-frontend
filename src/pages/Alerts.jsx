import React from "react";
import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { alertsData } from "../data/mockData";

export default function Alerts() {
  const [severity, setSeverity] = useState("All");
  const [query, setQuery] = useState("");
  const rows = useMemo(() => alertsData.filter(a => (severity === "All" || a.severity === severity) && `${a.title} ${a.detail} ${a.id}`.toLowerCase().includes(query.toLowerCase())), [severity, query]);
  const columns = [
    { key: "id", label: "Alert ID" },
    { key: "title", label: "Alert" },
    { key: "detail", label: "Connection" },
    { key: "severity", label: "Severity", render: value => <span className={`severity-pill ${String(value).toLowerCase()}`}>{value}</span> },
    { key: "time", label: "Time" }
  ];
  return <><PageHeader title="Security Alerts" description="Review and filter detected security events"/><section className="panel standalone-panel"><div className="toolbar"><input className="filter-input" placeholder="Search alerts…" value={query} onChange={e => setQuery(e.target.value)}/><select className="filter-select" value={severity} onChange={e => setSeverity(e.target.value)}>{["All", "Critical", "High", "Medium", "Low", "Info"].map(s => <option key={s}>{s}</option>)}</select></div><DataTable columns={columns} rows={rows}/></section></>;
}
