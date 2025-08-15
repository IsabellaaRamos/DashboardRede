import { useState, useEffect } from "react";
import { Monitor, Wifi, AlertTriangle, Clock } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { DeviceTable } from "@/components/dashboard/DeviceTable";
import { mockDevices, getDeviceStats } from "@/data/mockDevices";

const Index = () => {
  const [devices, setDevices] = useState(mockDevices);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const stats = getDeviceStats(devices);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simular chamada para API
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLastUpdate(new Date());
    setIsRefreshing(false);
  };

  // Simular atualização automática a cada 5 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 300000); // 5 minutos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="p-6 space-y-6">
        {/* Cards de Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatusCard
            title="Total de Dispositivos"
            value={stats.total}
            icon={Monitor}
            trend={`${stats.onlinePercentage}% ativos`}
            trendDirection="up"
          />
          <StatusCard
            title="Dispositivos Online"
            value={stats.online}
            icon={Wifi}
            trend="Conectados agora"
            trendDirection="up"
            className="border-status-online/20"
          />
          <StatusCard
            title="Dispositivos Offline"
            value={stats.offline}
            icon={AlertTriangle}
            trend="Desconectados"
            trendDirection="down"
            className="border-status-offline/20"
          />
          <StatusCard
            title="Última Atualização"
            value={lastUpdate.toLocaleTimeString('pt-BR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
            icon={Clock}
            trend="Automático"
          />
        </div>

        {/* Tabela de Dispositivos */}
        <DeviceTable 
          devices={devices} 
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
};

export default Index;
