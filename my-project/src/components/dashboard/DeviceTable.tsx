import { useState } from "react";
import { MoreHorizontal, Edit3, Trash2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeviceNotesDialog } from "./DeviceNotesDialog";

interface Device {
  id: string;
  ip: string;
  mac: string;
  hostname: string;
  os: string;
  status: "online" | "offline" | "unknown";
  lastSeen: string;
  notes?: string;
}

interface DeviceTableProps {
  devices: Device[];
  searchQuery: string;
}

export const DeviceTable = ({ devices, searchQuery }: DeviceTableProps) => {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [isNotesDialogOpen, setIsNotesDialogOpen] = useState(false);

  const filteredDevices = devices.filter(device =>
    device.hostname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.ip.includes(searchQuery) ||
    device.mac.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.os.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: Device["status"]) => {
    switch (status) {
      case "online":
        return "bg-status-online";
      case "offline":
        return "bg-status-offline";
      case "unknown":
        return "bg-status-unknown";
      default:
        return "bg-status-unknown";
    }
  };

  const getStatusText = (status: Device["status"]) => {
    switch (status) {
      case "online":
        return "Online";
      case "offline":
        return "Offline";
      case "unknown":
        return "Desconhecido";
      default:
        return "Desconhecido";
    }
  };

  const handleOpenNotes = (device: Device) => {
    setSelectedDevice(device);
    setIsNotesDialogOpen(true);
  };

  return (
    <>
      <Card className="bg-dashboard-card">
        <CardHeader>
          <CardTitle className="text-foreground">
            Dispositivos da Rede ({filteredDevices.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-dashboard-card-hover">
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Hostname</TableHead>
                  <TableHead className="text-muted-foreground">Endereço IP</TableHead>
                  <TableHead className="text-muted-foreground">MAC Address</TableHead>
                  <TableHead className="text-muted-foreground">Sistema</TableHead>
                  <TableHead className="text-muted-foreground">Última Atividade</TableHead>
                  <TableHead className="text-muted-foreground">Observações</TableHead>
                  <TableHead className="text-muted-foreground w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDevices.map((device) => (
                  <TableRow 
                    key={device.id} 
                    className="border-border hover:bg-dashboard-card-hover"
                  >
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={`${getStatusColor(device.status)} text-white border-0`}
                      >
                        {getStatusText(device.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {device.hostname}
                    </TableCell>
                    <TableCell className="text-foreground font-mono">
                      {device.ip}
                    </TableCell>
                    <TableCell className="text-foreground font-mono text-sm">
                      {device.mac}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {device.os}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {device.lastSeen}
                    </TableCell>
                    <TableCell>
                      {device.notes ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleOpenNotes(device)}
                          className="text-primary hover:text-primary-foreground"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleOpenNotes(device)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleOpenNotes(device)}>
                            <Edit3 className="w-4 h-4 mr-2" />
                            Editar Observações
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-status-offline">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remover Dispositivo
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedDevice && (
        <DeviceNotesDialog
          device={selectedDevice}
          open={isNotesDialogOpen}
          onOpenChange={setIsNotesDialogOpen}
        />
      )}
    </>
  );
};