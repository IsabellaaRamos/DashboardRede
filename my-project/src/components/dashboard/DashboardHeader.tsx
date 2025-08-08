import {Bell, Search, User, RefreshCw } from "lucide-react";
import {Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
    onRefresh: () => void;
    isRefreshing: boolean;
    searchQuery : string;
    onSerchChange: (query: string) => void;

}

export const DashboardHeader = ({ onRefresh, isRefreshing, searchQuery, onSerchChange }: DashboardHeaderProps) => }
    return (
        <header className="bg-dashboard-header border-b border-border p-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-2x1 font-bold text-foreground">
                        Dashboarde de Rede
                    </h1>

                    <div className="flex items-center space-x-2">
                        <div className="w-2 h2 bg-status-online rounded-full animate-pulse"></div>
                        <span className="text-sm text-foreground">Sistema Online</span>
                    </div>
                    </div>
             </div>


        </header>
           

    )