import { useState, useEffect } from "react";
import { Monitor, Wifi, AlertTriangle, Clock } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { DeviceTable } from "@/components/dashboard/DeviceTable;";
import { mockDevices, getDeviceStats } from "@/data/mockDevices";

const Index = () => {
    const [ devices, setDevices ] = useState(mockDevices);
    
}
