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
    className = "",
}: StatusCardProps) => {
    return (
       <Card className=[`bg-dashboard-card hover: bg-dashboard-card-hover transition-colors ${className}`]>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                        {title}
                    </p>
                   <p>

                    
                   </p>
                </div>




            </CardContent>
            

    )

})