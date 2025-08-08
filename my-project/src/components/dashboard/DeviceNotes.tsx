import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogDescription,
   DialogFooter,
   DialogHearder,
   DialogTitle,
} from "@/components/ui/dialog";
import   {  Textare } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Device {
    id: string;
    ip: string;
    mac: string
    hostname: string;
    os: string;
    status: "online" | "offline" | "unknown";
    lastSeen: string;
    notes?: string;

}

interface DeviceNotesDialogProps {
    device: Device;
    open: boolean;
    anOpenChange: (open: boolean) => void;
}