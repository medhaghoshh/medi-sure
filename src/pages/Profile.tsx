import { ChevronLeft, User, Edit, Phone, Mail, MapPin, Calendar, Heart, AlertTriangle, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const userProfile = {
    name: "Robert Johnson",
    age: 67,
    gender: "Male",
    medicalId: "MED-2023-78945",
    phone: "+1 (555) 234-5678",
    email: "robert.johnson@email.com",
    address: "123 Maple Street, Springfield, IL 62701",
    bloodType: "O+",
    height: "5'10\"",
    weight: "175 lbs",
    emergencyContact: {
      name: "Maria Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543"
    },
    conditions: [
      "Type 2 Diabetes",
      "Hypertension", 
      "High Cholesterol"
    ],
    allergies: [
      "Penicillin",
      "Shellfish"
    ],
    avatar: "👨‍🦳"
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
            <h1 className="text-lg font-semibold">My Profile</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-light"
          >
            <Edit className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Profile Header */}
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-4xl">
                {userProfile.avatar}
              </div>
              <Button
                size="sm"
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full p-0 bg-primary hover:bg-primary-dark"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
              <p className="text-muted-foreground">{userProfile.age} years old • {userProfile.gender}</p>
              <p className="text-sm text-muted-foreground mt-1">ID: {userProfile.medicalId}</p>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            Contact Information
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{userProfile.phone}</p>
                <p className="text-xs text-muted-foreground">Mobile Phone</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{userProfile.email}</p>
                <p className="text-xs text-muted-foreground">Email Address</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{userProfile.address}</p>
                <p className="text-xs text-muted-foreground">Home Address</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Medical Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Medical Information
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-muted-foreground">Blood Type</p>
              <p className="text-sm font-medium text-foreground">{userProfile.bloodType}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Height</p>
              <p className="text-sm font-medium text-foreground">{userProfile.height}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Weight</p>
              <p className="text-sm font-medium text-foreground">{userProfile.weight}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Age</p>
              <p className="text-sm font-medium text-foreground">{userProfile.age} years</p>
            </div>
          </div>

          {/* Medical Conditions */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Medical Conditions</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.conditions.map((condition, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>

          {/* Allergies */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Allergies</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.allergies.map((allergy, idx) => (
                <Badge key={idx} variant="destructive" className="text-xs">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {allergy}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Emergency Contact */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Emergency Contact
          </h3>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-foreground">{userProfile.emergencyContact.name}</p>
              <Badge variant="outline">{userProfile.emergencyContact.relationship}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-foreground">{userProfile.emergencyContact.phone}</p>
            </div>
          </div>
        </Card>

        {/* Device Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3">MediSure Device</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Device Status</span>
              <Badge className="bg-success text-success-foreground">Connected</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Device ID</span>
              <span className="text-sm font-medium text-foreground">MDS-78945</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Last Sync</span>
              <span className="text-sm text-foreground">2 minutes ago</span>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center cursor-pointer hover:bg-accent transition-colors">
            <Edit className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Edit Profile</p>
          </Card>
          
          <Card className="p-4 text-center cursor-pointer hover:bg-accent transition-colors">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Medical History</p>
          </Card>
        </div>
      </div>
    </div>
  );
};