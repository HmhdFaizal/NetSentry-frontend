export const mockStats = {
  totalTrafficGb: 1.24,
  trafficChangePercent: 12.5,
  activeThreats: 12,
  threatsChangePercent: 33.3,
  blockedIps: 8,
  blockedIpsChangePercent: 14.3,
  monitoredConnections: 4892,
  connectionsChangePercent: 8.7,
};

export const trafficData = [
  { time: "12 AM", incoming: 68, outgoing: 42 },
  { time: "2 AM", incoming: 58, outgoing: 38 },
  { time: "4 AM", incoming: 78, outgoing: 48 },
  { time: "6 AM", incoming: 108, outgoing: 70 },
  { time: "8 AM", incoming: 74, outgoing: 51 },
  { time: "10 AM", incoming: 82, outgoing: 57 },
  { time: "12 PM", incoming: 61, outgoing: 40 },
  { time: "2 PM", incoming: 116, outgoing: 67 },
  { time: "4 PM", incoming: 84, outgoing: 48 },
  { time: "6 PM", incoming: 101, outgoing: 65 },
  { time: "8 PM", incoming: 139, outgoing: 84 },
  { time: "10 PM", incoming: 111, outgoing: 73 },
  { time: "12 AM", incoming: 82, outgoing: 55 }
];

export const threatDistribution = [
  { name: "Critical", value: 2, color: "#F04458" },
  { name: "High", value: 4, color: "#F59E0B" },
  { name: "Medium", value: 4, color: "#FACC15" },
  { name: "Low", value: 2, color: "#3B82F6" }
];

export const alertsData = [
  { id: "ALT-1042", title: "Suspicious connection detected", detail: "2.3.4.56 → 192.168.1.10", severity: "Critical", time: "10m ago" },
  { id: "ALT-1041", title: "DDoS attack attempt blocked", detail: "8.8.8.8 → 192.168.1.20", severity: "High", time: "24m ago" },
  { id: "ALT-1040", title: "Malware signature detected", detail: "5.6.7.8 → 192.168.1.30", severity: "Medium", time: "1h ago" },
  { id: "ALT-1039", title: "Port scan detected", detail: "9.9.9.9 → 192.168.1.40", severity: "Low", time: "2h ago" },
  { id: "ALT-1038", title: "Brute force login attempt", detail: "11.22.33.44 → 192.168.1.50", severity: "Info", time: "3h ago" }
];

export const attackingIps = [
  { ip: "185.199.110.153", country: "United States", attacks: 6, lastSeen: "10m ago" },
  { ip: "45.83.12.21", country: "Germany", attacks: 4, lastSeen: "24m ago" },
  { ip: "103.77.192.18", country: "India", attacks: 3, lastSeen: "1h ago" }
];

export const blockedIpsData = [
  { ip: "192.168.1.88", reason: "Repeated login attempts", blockedAt: "Today, 14:12", status: "Blocked" },
  { ip: "8.8.8.8", reason: "Simulated suspicious activity", blockedAt: "Today, 12:48", status: "Blocked" },
  { ip: "185.199.110.153", reason: "Port scan detected", blockedAt: "Yesterday", status: "Blocked" }
];
