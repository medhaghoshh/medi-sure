import { ChevronLeft, Sun, Sunrise, Sunset, Moon, Edit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const DoseTiming = () => {
  const navigate = useNavigate();

  const schedules = [
    {
      period: "Morning",
      icon: Sunrise,
      color: "text-yellow-500",
      beforeMeals: { time: "9 AM - 9 AM", value: "09:30" },
      afterMeals: { time: "9 AM - 12 PM", value: "09:10" }
    },
    {
      period: "Afternoon", 
      icon: Sun,
      color: "text-orange-500",
      beforeMeals: { time: "12 PM - 1 PM", value: "12:35" },
      afterMeals: { time: "1 PM - 3 PM", value: "13:12" }
    },
    {
      period: "Evening",
      icon: Sunset, 
      color: "text-orange-600",
      beforeMeals: { time: "3 PM - 5 PM", value: "15:30" },
      afterMeals: { time: "5 PM - 7 PM", value: "17:00" }
    },
    {
      period: "Night",
      icon: Moon,
      color: "text-blue-600",
      beforeMeals: { time: "7 PM - 9 PM", value: "19:00" },
      afterMeals: { time: "9 PM - 11 PM", value: "22:49" }
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
          <h1 className="text-lg font-semibold">Dose Timing</h1>
        </div>
      </div>

      <div className="p-4">
        <Card className="p-6">
          <div className="space-y-6">
            {schedules.map((schedule, index) => {
              const Icon = schedule.icon;
              
              return (
                <div key={index} className="space-y-3">
                  {/* Period Header */}
                  <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${schedule.color}`} />
                    <h3 className="text-lg font-semibold text-foreground">{schedule.period}</h3>
                  </div>

                  {/* Before Meals */}
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Before meals -</p>
                      <p className="text-xs text-muted-foreground">{schedule.beforeMeals.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground">{schedule.beforeMeals.value}</span>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* After Meals */}
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">After meals -</p>
                      <p className="text-xs text-muted-foreground">{schedule.afterMeals.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground">{schedule.afterMeals.value}</span>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {index < schedules.length - 1 && (
                    <div className="border-b border-border pt-3"></div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Save Button */}
        <Button 
          className="w-full mt-6 bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-base font-semibold"
          size="lg"
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};