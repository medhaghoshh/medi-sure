import { ChevronLeft, Plus, Users, Shield, Phone, Mail, UserCheck, UserX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export const Caregiver = () => {
  const navigate = useNavigate();

  const caregivers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Primary Doctor",
      phone: "+1 (555) 123-4567",
      email: "dr.johnson@medicalcenter.com",
      status: "active",
      permissions: ["View Vitals", "Medication Access", "Emergency Contact"],
      avatar: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Family Caregiver",
      phone: "+1 (555) 987-6543",
      email: "maria.r@email.com",
      status: "active",
      permissions: ["View Vitals", "Medication Reminders"],
      avatar: "👩"
    },
    {
      id: 3,
      name: "John Smith",
      role: "Emergency Contact",
      phone: "+1 (555) 456-7890",
      email: "john.smith@email.com",
      status: "pending",
      permissions: ["Emergency Only"],
      avatar: "👨"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "inactive": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="text-primary-foreground hover:bg-primary-light"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">Caregivers</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-light"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Access Control Notice */}
        <Card className="p-4 bg-accent/50">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Secure Access Control</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Caregivers are verified through fingerprint and facial recognition on your MediSure device.
              </p>
            </div>
          </div>
        </Card>

        {/* Add Caregiver */}
        <Card className="p-4 border-2 border-dashed border-muted-foreground/30 hover:border-primary cursor-pointer transition-colors">
          <div className="flex items-center justify-center py-4 text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Add New Caregiver</h3>
                <p className="text-sm text-muted-foreground">Invite family member or healthcare provider</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Caregiver List */}
        <div className="space-y-3">
          {caregivers.map((caregiver) => (
            <Card key={caregiver.id} className="p-4">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                  {caregiver.avatar}
                </div>

                {/* Caregiver Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{caregiver.name}</h3>
                    <Badge className={getStatusColor(caregiver.status)}>
                      {caregiver.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{caregiver.role}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      <span>{caregiver.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      <span>{caregiver.email}</span>
                    </div>
                  </div>

                  {/* Permissions */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {caregiver.permissions.map((permission, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  {caregiver.status === "active" ? (
                    <Button variant="outline" size="sm">
                      <UserCheck className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <UserX className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Contacts */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-destructive" />
            Emergency Contacts
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
              <span className="text-sm text-foreground">Primary Emergency</span>
              <span className="text-sm font-medium text-foreground">Dr. Sarah Johnson</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
              <span className="text-sm text-foreground">Family Contact</span>
              <span className="text-sm font-medium text-foreground">Maria Rodriguez</span>
            </div>
          </div>
        </Card>

        {/* Caregiver Stats */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3">Access Overview</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-xs text-muted-foreground">Active Caregivers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-warning">1</p>
              <p className="text-xs text-muted-foreground">Pending Approval</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-success">5</p>
              <p className="text-xs text-muted-foreground">Access Granted</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};