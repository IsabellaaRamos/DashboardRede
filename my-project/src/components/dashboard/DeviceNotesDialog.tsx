import { useState } from "react";
import { Button } from "components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

interface DeviceNotesDialogProps {
  device: Device;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DeviceNotesDialog = ({ device, open, onOpenChange }: DeviceNotesDialogProps) => {
  const [notes, setNotes] = useState(device.notes || "");

  const handleSave = () => {
    // Here you would save the notes to your backend
    console.log("Saving notes for device:", device.id, notes);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-dashboard-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            Observações - {device.hostname}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            IP: {device.ip} | MAC: {device.mac}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="notes" className="text-foreground">
              Observações
            </Label>
            <Textarea
              id="notes"
              placeholder="Adicione observações sobre este dispositivo..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[120px] bg-background border-border text-foreground"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            Salvar Observações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};