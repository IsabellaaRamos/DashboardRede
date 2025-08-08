import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendDirection?: "up" | "down";
  className?: string;
}

export const StatusCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendDirection,
  className = ""
}: StatusCardProps) => {
  return (
    <Card className={`bg-dashboard-card hover:bg-dashboard-card-hover transition-colors ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <p className="text-3xl font-bold text-foreground">
              {value}
            </p>
            {trend && (
              <p className={`text-sm mt-1 ${
                trendDirection === 'up' ? 'text-status-online' : 
                trendDirection === 'down' ? 'text-status-offline' : 
                'text-muted-foreground'
              }`}>
                {trend}
              </p>
            )}
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};