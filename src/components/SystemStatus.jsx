import React from "react";
import { ShieldCheck } from "lucide-react";

const services = ["Intrusion Detection", "Firewall", "Traffic Analysis"];

export default function SystemStatus() {
  return <div className="system-status-card">
    <div className="system-status-copy"><div className="system-status-heading">System Status</div><div className="system-overall"><span className="status-dot"/>All systems operational</div>
      {services.map(service => <div className="service-row" key={service}><span>{service}</span><strong>Active</strong></div>)}
    </div>
    <ShieldCheck className="system-shield" size={42} strokeWidth={1.6}/>
  </div>;
}
