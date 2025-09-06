import { 
  ChevronLeft, 
  Bell, 
  Shield, 
  Wifi, 
  Smartphone, 
  HelpCircle, 
  Info, 
  LogOut,
  ChevronRight,
  Moon,
  Volume2,
  Lock,
  Database,
  RefreshCw
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const navigate = useNavigate();

  const settingsSections = [
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { label: "Medicine Reminders", type: "toggle", enabled: true },
        { label: "Vitals Alerts", type: "toggle", enabled: true },
        { label: "Caregiver Notifications", type: "toggle", enabled: false },
        { label: "System Updates", type: "toggle", enabled: true }
      ]
    },
    {
      title: "Device & Connectivity",
      icon: Wifi,
      items: [
        { label: "Wi-Fi Settings", type: "link" },
        { label: "Device Pairing", type: "link" },
        { label: "Sync Data", type: "action" },
        { label: "Device Status", type: "link" }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        { label: "Fingerprint Lock", type: "toggle", enabled: true },
        { label: "Data Encryption", type: "toggle", enabled: true },
        { label: "Caregiver Access", type: "link" },
        { label: "Data Export", type: "link" }
      ]
    },
    {
      title: "App Preferences",
      icon: Smartphone,
      items: [
        { label: "Dark Mode", type: "toggle", enabled: false },
        { label: "Sound Effects", type: "toggle", enabled: true },
        { label: "Language", type: "link", value: "English" },
        { label: "Units", type: "link", value: "Imperial" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-light"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Device Status Card */}
        <Card className="p-4 bg-accent/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
              <Wifi className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">MediSure Device Connected</h3>
              <p className="text-sm text-muted-foreground">Last sync: 2 minutes ago</p>
            </div>
            <Button variant="ghost" size="sm">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIdx) => {
          const SectionIcon = section.icon;
          
          return (
            <Card key={sectionIdx} className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <SectionIcon className="w-5 h-5 text-primary" />
                {section.title}
              </h3>
              
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.value && (
                        <p className="text-xs text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                    
                    {item.type === "toggle" && (
                      <Switch 
                        checked={item.enabled}
                        className="ml-2"
                      />
                    )}
                    
                    {(item.type === "link" || item.type === "action") && (
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          );
        })}

        {/* Help & Support */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Help & Support
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-accent rounded-lg px-2 -mx-2">
              <p className="text-sm font-medium text-foreground">User Guide</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-accent rounded-lg px-2 -mx-2">
              <p className="text-sm font-medium text-foreground">Contact Support</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-accent rounded-lg px-2 -mx-2">
              <p className="text-sm font-medium text-foreground">FAQ</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-accent rounded-lg px-2 -mx-2">
              <p className="text-sm font-medium text-foreground">Report Issue</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </Card>

        {/* About */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            About MediSure
          </h3>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Version</span>
              <span className="text-foreground">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>Build</span>
              <span className="text-foreground">2023.08.17</span>
            </div>
            <div className="flex justify-between">
              <span>Device ID</span>
              <span className="text-foreground">MDS-78945</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-accent rounded-lg px-2 -mx-2">
              <p className="text-sm font-medium text-foreground">Privacy Policy</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-accent rounded-lg px-2 -mx-2">
              <p className="text-sm font-medium text-foreground">Terms of Service</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </Card>

        {/* Logout */}
        <Card className="p-4 border-destructive/20">
          <Button 
            variant="ghost" 
            className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </Card>

        {/* Footer Info */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            MediSure connects with ESP32-based Smart Pill Dispenser
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Secure • Reliable • Always Connected
          </p>
        </div>
      </div>
    </div>
  );
};