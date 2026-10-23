import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function ThreatDonut({ data }) {
  const total = data.reduce((sum, item) => sum + Number(item.value || 0), 0);
  return (
    <div className="threat-distribution">
      <div className="donut-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius="62%" outerRadius="88%" paddingAngle={1.5} stroke="none">
              {data.map(item => <Cell key={item.name} fill={item.color || "#3B82F6"} />)}
            </Pie>
            <Tooltip contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text)", fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center"><strong>{total}</strong><span>Total Threats</span></div>
      </div>
      <div className="threat-legend">
        {data.map(item => <div className="legend-row" key={item.name}><span className="legend-name"><i style={{ background: item.color || "#3B82F6" }}/>{item.name}</span><span>{item.value} <small>({total ? (item.value / total * 100).toFixed(1) : "0.0"}%)</small></span></div>)}
      </div>
    </div>
  );
}
