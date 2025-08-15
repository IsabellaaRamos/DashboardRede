import { Bell, Search, User, RefreshCw } from "lucide-react";
import { Button } from  "../components/ui/button";
import { Input } from  "./components/ui/input";

interface DashboardHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const DashboardHeader = ({ onRefresh, isRefreshing, searchQuery, onSearchChange }: DashboardHeaderProps) => {
  return (
    <header className="bg-dashboard-header border-b border-border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-foreground">
            Dashboard de Rede
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-status-online rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Sistema Online</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar dispositivos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          
          <Button
            onClick={onRefresh}
            disabled={isRefreshing}
            variant="outline"
            size="icon"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>

          <Button variant="outline" size="icon">
            <Bell className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="icon">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};