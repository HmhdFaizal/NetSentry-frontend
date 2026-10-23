import React from "react";
import { useEffect, useState } from "react";
import { CalendarDays, ChevronDown, RefreshCw } from "lucide-react";
import PageHeader from "../components/PageHeader";
import MetricCard from "../components/MetricCard";
import TrafficChart from "../components/TrafficChart";
import ThreatDonut from "../components/ThreatDonut";
import AlertsList from "../components/AlertsList";
import DataTable from "../components/DataTable";
import SystemStatus from "../components/SystemStatus";
import { getDashboardData } from "../services/dashboardService";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [period, setPeriod] = useState("Last 24 hours");
  const [refreshing, setRefreshing] = useState(false);

  async function load() {
    setRefreshing(true);
    setError("");
    try { setData(await getDashboardData()); }
    catch (e) { setError(e.message || "Could not load dashboard data."); }
    finally { setRefreshing(false); }
  }

  useEffect(() => { load(); }, []);

  const stats = data?.stats;
  const columns = [
    { key: "ip", label: "IP Address" },
    { key: "country", label: "Country" },
    { key: "attacks", label: "Attacks" },
    { key: "lastSeen", label: "Last Seen" }
  ];

  return <div className="dashboard-page">
    <PageHeader title="Dashboard" description="Real-time network security overview and threat intelligence">
      <div className="date-display"><CalendarDays size={15}/><span>Oct 22, 2026</span><span className="date-time">14:32</span></div>
      <label className="period-select"><select value={period} onChange={e => setPeriod(e.target.value)}><option>Last 24 hours</option><option>Last 7 days</option><option>Last 30 days</option></select><ChevronDown size={14}/></label>
      <button className="refresh-button" onClick={load} title="Refresh dashboard" aria-label="Refresh dashboard"><RefreshCw size={15} className={refreshing ? "spin" : ""}/></button>
    </PageHeader>

    {error && <div className="inline-error" role="alert">Backend data could not be loaded: {error}. Check the API URL and endpoint configuration.</div>}
    {!data && !error && <div className="loading-panel">Loading dashboard…</div>}
    {data && <>
      <section className="metric-grid" aria-label="Security metrics">
        <MetricCard type="traffic" title="Total Traffic" value={`${Number(stats.totalTrafficGb || 0).toFixed(2)} GB`} change={stats.trafficChangePercent} tone="green"/>
        <MetricCard type="threats" title="Active Threats" value={stats.activeThreats ?? "—"} change={stats.threatsChangePercent} tone="red"/>
        <MetricCard type="blocked" title="Blocked IPs" value={stats.blockedIps ?? "—"} change={stats.blockedIpsChangePercent} tone="green"/>
        <MetricCard type="connections" title="Monitored Connections" value={Number(stats.monitoredConnections || 0).toLocaleString()} change={stats.connectionsChangePercent} tone="purple"/>
      </section>

      <section className="dashboard-grid">
        <article className="panel traffic-panel"><div className="panel-heading"><h2>Network Traffic</h2><div className="chart-legend"><span><i className="legend-incoming"/>Incoming</span><span><i className="legend-outgoing"/>Outgoing</span></div></div><TrafficChart data={data.traffic || []}/></article>
        <article className="panel threat-panel"><div className="panel-heading"><h2>Threat Distribution</h2></div><ThreatDonut data={data.threats || []}/></article>
        <article className="panel alerts-panel"><div className="panel-heading"><h2>Recent Alerts</h2></div><AlertsList alerts={data.alerts || []} compact/></article>
        <article className="panel attacking-panel"><div className="panel-heading"><h2>Top Attacking IPs</h2><a href="/attack-map" className="card-link">View all <span>→</span></a></div><DataTable columns={columns} rows={(data.attackingIps || []).slice(0, 3)}/></article>
        <article className="panel status-panel"><SystemStatus/></article>
      </section>
    </>}
  </div>;
}
