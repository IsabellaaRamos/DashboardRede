export interface Device {
  id: string;
  ip: string;
  mac: string;
  hostname: string;
  os: string;
  status: "online" | "offline" | "unknown";
  lastSeen: string;
  notes?: string;
}

export const mockDevices: Device[] = [
  {
    id: "1",
    ip: "192.168.1.10",
    mac: "aa:bb:cc:dd:ee:01",
    hostname: "desktop-admin",
    os: "Windows 11 Pro",
    status: "online",
    lastSeen: "2 minutos atrás",
    notes: "Computador do administrador de sistema"
  },
  {
    id: "2",
    ip: "192.168.1.15",
    mac: "aa:bb:cc:dd:ee:02",
    hostname: "laptop-marketing",
    os: "Windows 10",
    status: "online",
    lastSeen: "5 minutos atrás"
  },
  {
    id: "3",
    ip: "192.168.1.20",
    mac: "aa:bb:cc:dd:ee:03",
    hostname: "server-database",
    os: "Ubuntu Server 22.04",
    status: "online",
    lastSeen: "1 minuto atrás",
    notes: "Servidor principal do banco de dados - Crítico"
  },
  {
    id: "4",
    ip: "192.168.1.25",
    mac: "aa:bb:cc:dd:ee:04",
    hostname: "workstation-01",
    os: "Windows 11",
    status: "offline",
    lastSeen: "2 horas atrás"
  },
  {
    id: "5",
    ip: "192.168.1.30",
    mac: "aa:bb:cc:dd:ee:05",
    hostname: "printer-office",
    os: "Embedded Linux",
    status: "online",
    lastSeen: "10 minutos atrás"
  },
  {
    id: "6",
    ip: "192.168.1.35",
    mac: "aa:bb:cc:dd:ee:06",
    hostname: "macbook-design",
    os: "macOS Monterey",
    status: "online",
    lastSeen: "3 minutos atrás"
  },
  {
    id: "7",
    ip: "192.168.1.40",
    mac: "aa:bb:cc:dd:ee:07",
    hostname: "server-web",
    os: "CentOS 8",
    status: "online",
    lastSeen: "30 segundos atrás",
    notes: "Servidor web principal"
  },
  {
    id: "8",
    ip: "192.168.1.45",
    mac: "aa:bb:cc:dd:ee:08",
    hostname: "tablet-vendas",
    os: "Android 12",
    status: "unknown",
    lastSeen: "1 dia atrás"
  },
  {
    id: "9",
    ip: "192.168.1.50",
    mac: "aa:bb:cc:dd:ee:09",
    hostname: "laptop-contabilidade",
    os: "Windows 10 Pro",
    status: "offline",
    lastSeen: "4 horas atrás"
  },
  {
    id: "10",
    ip: "192.168.1.55",
    mac: "aa:bb:cc:dd:ee:10",
    hostname: "smartphone-001",
    os: "iOS 16",
    status: "online",
    lastSeen: "1 minuto atrás"
  }
];

export const getDeviceStats = (devices: Device[]) => {
  const total = devices.length;
  const online = devices.filter(d => d.status === "online").length;
  const offline = devices.filter(d => d.status === "offline").length;
  const unknown = devices.filter(d => d.status === "unknown").length;
  
  return {
    total,
    online,
    offline,
    unknown,
    onlinePercentage: Math.round((online / total) * 100)
  };
};