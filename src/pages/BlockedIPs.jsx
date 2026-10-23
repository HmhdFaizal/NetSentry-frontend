import React from "react";
import { useState } from "react";
import { Ban } from "lucide-react";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { blockedIpsData } from "../data/mockData";

export default function BlockedIPs() {
  const [rows, setRows] = useState(blockedIpsData);
  const [ip, setIp] = useState("");
  const [message, setMessage] = useState("Changes here are local until connected to the backend.");
  function addIp(e) {
    e.preventDefault();
    if (!/^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/.test(ip.trim())) { setMessage("Enter a valid IPv4 address."); return; }
    if (rows.some(row => row.ip === ip.trim())) { setMessage("That IP is already in the list."); return; }
    setRows(current => [{ ip: ip.trim(), reason: "Manually added", blockedAt: "Just now", status: "Blocked" }, ...current]);
    setIp("");
    setMessage("IP added to the local list.");
  }
  const columns = [
    { key: "ip", label: "IP Address" },
    { key: "reason", label: "Reason" },
    { key: "blockedAt", label: "Blocked At" },
    { key: "status", label: "Status", render: value => <span className="status-pill">{value}</span> },
    { key: "action", label: "Action", render: (_, row) => <button className="table-action" onClick={() => { if (window.confirm(`Remove ${row.ip} from the local list?`)) setRows(current => current.filter(item => item.ip !== row.ip)); }}>Remove</button> }
  ];
  return <><PageHeader title="Blocked IPs" description="Review blocked addresses and defensive actions"/><div className="map-notice"><Ban size={16}/> Local preview only. Firewall actions require backend integration.</div><section className="panel standalone-panel"><form className="toolbar" onSubmit={addIp}><input className="filter-input" value={ip} onChange={e => setIp(e.target.value)} placeholder="Enter IPv4 address (e.g. 192.168.1.12)"/><button className="primary-button" type="submit">Add IP</button></form><p className="muted-copy">{message}</p><DataTable columns={columns} rows={rows}/></section></>;
}
