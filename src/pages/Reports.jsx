import React from "react";
import { Download, FileText } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { alertsData, mockStats, threatDistribution } from "../data/mockData";

export default function Reports() {
  function exportCsv() {
    const lines = [["Metric", "Value"], ["Total traffic (GB)", mockStats.totalTrafficGb], ["Active threats", mockStats.activeThreats], ["Blocked IPs", mockStats.blockedIps], ["Monitored connections", mockStats.monitoredConnections], ...threatDistribution.map(t => [`${t.name} threats`, t.value]), ...alertsData.map(a => [`Alert: ${a.title}`, a.severity])];
    const csv = lines.map(row => row.map(v => `"${String(v).replaceAll('"', '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const a = document.createElement("a"); a.href = url; a.download = "netsentry-incident-report.csv"; a.click(); URL.revokeObjectURL(url);
  }
  return <><PageHeader title="Incident Reports" description="Summaries and exportable security statistics"><button className="primary-button" onClick={exportCsv}><Download size={15}/> Export CSV</button></PageHeader><div className="report-grid">{[{label:"Total traffic",value:"1.24 GB"},{label:"Active threats",value:"12"},{label:"Blocked IPs",value:"8"},{label:"Monitored connections",value:"4,892"}].map(item => <article className="metric-card report-metric" key={item.label}><span className="metric-label">{item.label}</span><strong className="metric-value">{item.value}</strong><span className="metric-footnote">Sample data</span></article>)}</div><section className="panel standalone-panel"><div className="panel-heading"><h2><FileText size={18}/> Report notes</h2></div><p className="muted-copy">Report figures are illustrative mock data. After FastAPI integration, connect this page to the reporting endpoint to export actual incident data.</p></section></>;
}
