import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function TrafficChart({ data }) {
  return (
    <div className="chart-wrap traffic-chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 8, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="incomingFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity={0.28}/><stop offset="100%" stopColor="#10B981" stopOpacity={0.015}/></linearGradient>
            <linearGradient id="outgoingFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B82F6" stopOpacity={0.2}/><stop offset="100%" stopColor="#3B82F6" stopOpacity={0.015}/></linearGradient>
          </defs>
          <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
          <XAxis dataKey="time" tick={{ fill: "var(--muted)", fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} tickFormatter={v => `${v} MB`} tick={{ fill: "var(--muted)", fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text)", fontSize: 12 }} />
          <Area type="monotone" dataKey="incoming" name="Incoming" stroke="#10B981" strokeWidth={2} fill="url(#incomingFill)" />
          <Area type="monotone" dataKey="outgoing" name="Outgoing" stroke="#3B82F6" strokeWidth={2} fill="url(#outgoingFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
