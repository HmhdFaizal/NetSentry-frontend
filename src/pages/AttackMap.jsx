import React from "react";
import { Network, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { alertsData, attackingIps } from "../data/mockData";

export default function AttackMap() {
  return <><PageHeader title="Attack Map" description="Explore simulated source-to-target security events"/><div className="map-notice">Illustrative visualization only. Actual attack events must be supplied by the backend detection system.</div><section className="panel attack-visual"><div className="network-node source-node"><Network size={26}/><strong>External sources</strong><span>{attackingIps.length} sample IPs</span></div><div className="attack-lines">{alertsData.slice(0, 4).map((a, i) => <div className="attack-line" key={a.id}><span className={`severity-dot ${a.severity.toLowerCase()}`}/><span>{a.title}</span><ArrowRight size={17}/><span className="line-target">Internal network</span></div>)}</div><div className="network-node target-node"><Network size={26}/><strong>NetSentry protected network</strong><span>192.168.1.0/24 · sample target</span></div></section><section className="panel standalone-panel"><div className="panel-heading"><h2>Observed source IPs</h2></div><div className="simple-list">{attackingIps.map(ip => <div key={ip.ip}><div><strong>{ip.ip}</strong><span>{ip.country}</span></div><span>{ip.attacks} sample events</span></div>)}</div></section></>;
}
