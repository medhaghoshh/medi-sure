import { CircularProgress } from "@/components/CircularProgress";
import { ActionCard } from "@/components/ActionCard";
import { Pill, Clock, Users, User, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  // Mock vitals data from ESP32
  const vitals = {
    bodyTemp: 62,
    heartRate: 62,
    spO2: 62,
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">MediSure</h1>
            <p className="text-sm text-muted-foreground">Connected via Wi-Fi</p>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-success" />
            <span className="text-xs text-success font-medium">Online</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Vitals Section */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Health Vitals</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <CircularProgress 
              value={vitals.bodyTemp} 
              label="Body Temp." 
              size={100}
            />
            <CircularProgress 
              value={vitals.heartRate} 
              label="HeartRate" 
              size={100}
            />
          </div>
          <div className="flex justify-center">
            <CircularProgress 
              value={vitals.spO2} 
              label="SpO2" 
              size={100}
            />
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-2 gap-4">
          <ActionCard
            title="Manage Medicines"
            icon={Pill}
            onClick={() => navigate("/medicines")}
          />
          <ActionCard
            title="Set Dose Time"
            icon={Clock}
            onClick={() => navigate("/dose-timing")}
          />
          <ActionCard
            title="Caregiver"
            icon={Users}
            onClick={() => navigate("/caregiver")}
          />
          <ActionCard
            title="My Profile"
            icon={User}
            onClick={() => navigate("/profile")}
          />
        </div>

        {/* Today's Status */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3">Today's Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Morning Dose</span>
              <span className="text-xs text-success font-medium">TAKEN</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Afternoon Dose</span>
              <span className="text-xs text-destructive font-medium">NOT TAKEN</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Evening Dose</span>
              <span className="text-xs text-warning font-medium">DUE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Night Dose</span>
              <span className="text-xs text-warning font-medium">DUE</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};