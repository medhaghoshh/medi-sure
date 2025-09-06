import { ChevronLeft, Plus, Edit, Trash2, Pill, Clock, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ManageMedicine = () => {
  const navigate = useNavigate();

  const medicines = [
    {
      id: 1,
      name: "Metformin",
      dosage: "500mg",
      frequency: "2 times daily",
      instructions: "Take with meals",
      color: "bg-blue-100",
      image: "💊"
    },
    {
      id: 2,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "1 time daily",
      instructions: "Take in morning",
      color: "bg-green-100",
      image: "💊"
    },
    {
      id: 3,
      name: "Vitamin D3",
      dosage: "1000 IU",
      frequency: "1 time daily",
      instructions: "Take with food",
      color: "bg-yellow-100",
      image: "💊"
    }
  ];

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
            <h1 className="text-lg font-semibold">Manage Medicines</h1>
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
        {/* Add Medicine Card */}
        <Card className="p-4 border-2 border-dashed border-muted-foreground/30 hover:border-primary cursor-pointer transition-colors">
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Add New Medicine</h3>
            <p className="text-sm text-muted-foreground">Tap to add medicine details</p>
          </div>
        </Card>

        {/* Medicine List */}
        <div className="space-y-3">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="p-4">
              <div className="flex items-center gap-4">
                {/* Medicine Icon/Image */}
                <div className={`w-12 h-12 rounded-lg ${medicine.color} flex items-center justify-center text-2xl`}>
                  {medicine.image}
                </div>

                {/* Medicine Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{medicine.name}</h3>
                  <p className="text-sm text-muted-foreground">{medicine.dosage} • {medicine.frequency}</p>
                  <p className="text-xs text-muted-foreground mt-1">{medicine.instructions}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card className="p-4 text-center cursor-pointer hover:bg-accent transition-colors">
            <Camera className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Scan Medicine</p>
            <p className="text-xs text-muted-foreground">Use camera to add</p>
          </Card>
          
          <Card className="p-4 text-center cursor-pointer hover:bg-accent transition-colors">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Set Reminders</p>
            <p className="text-xs text-muted-foreground">Configure alerts</p>
          </Card>
        </div>

        {/* Medicine Stats */}
        <Card className="p-4 mt-6">
          <h3 className="font-semibold text-foreground mb-3">Medicine Overview</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-xs text-muted-foreground">Active Medicines</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-success">8</p>
              <p className="text-xs text-muted-foreground">Doses Today</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-warning">2</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};