import { mockStats, trafficData, threatDistribution, alertsData, attackingIps, blockedIpsData } from "../data/mockData";
import { apiGet, USE_MOCK_DATA } from "./apiClient";
import { endpoints } from "./endpoints";

export async function getDashboardData() {
  if (USE_MOCK_DATA) {
    return { stats: mockStats, traffic: trafficData, threats: threatDistribution, alerts: alertsData, attackingIps, blockedIps: blockedIpsData };
  }

  // Expected API response schema is a proposal. Align it with FastAPI before turning mock mode off.
  const stats = await apiGet(endpoints.dashboardStats);
  const [traffic, alerts, blockedIps] = await Promise.all([
    apiGet(endpoints.traffic).catch(() => []),
    apiGet(endpoints.alerts).catch(() => []),
    apiGet(endpoints.blockedIps).catch(() => [])
  ]);

  return {
    stats: {
      totalTrafficGb: stats.total_traffic_gb,
      trafficChangePercent: stats.traffic_change_percent ?? null,
      activeThreats: stats.active_threats,
      threatsChangePercent: stats.threats_change_percent ?? null,
      blockedIps: stats.blocked_ips,
      blockedIpsChangePercent: stats.blocked_ips_change_percent ?? null,
      monitoredConnections: stats.monitored_connections,
      connectionsChangePercent: stats.connections_change_percent ?? null
    },
    traffic: Array.isArray(traffic) ? traffic : (traffic.items || []),
    threats: stats.threat_distribution || threatDistribution,
    alerts: Array.isArray(alerts) ? alerts : (alerts.items || []),
    attackingIps: stats.top_attacking_ips || [],
    blockedIps: Array.isArray(blockedIps) ? blockedIps : (blockedIps.items || [])
  };
}
