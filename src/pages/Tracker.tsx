import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Tracker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock calendar data
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Previous month's trailing days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate.getDate(), isCurrentMonth: false, isPrevMonth: true });
    }
    
    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: i, isCurrentMonth: true, isPrevMonth: false });
    }
    
    return days;
  };

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getDaysInMonth(currentDate);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <h1 className="text-xl font-bold text-foreground">My Tracker</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Calendar */}
        <Card className="p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-lg font-semibold text-foreground">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Week Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div
                key={index}
                className={`
                  h-10 flex items-center justify-center text-sm cursor-pointer rounded-md transition-colors
                  ${day.isCurrentMonth 
                    ? 'text-foreground hover:bg-accent' 
                    : 'text-muted-foreground'
                  }
                  ${day.date === 17 && day.isCurrentMonth ? 'bg-primary text-primary-foreground' : ''}
                `}
              >
                {day.date}
              </div>
            ))}
          </div>
        </Card>

        {/* Progress Section */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="text-sm font-medium text-foreground mb-2">Progress Till Now</h3>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-sm text-success font-medium">100.0%</p>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-sm font-medium text-foreground mb-2">Progress Till the Month</h3>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-sm text-success font-medium">100.0%</p>
          </Card>
        </div>

        {/* Today's Schedule */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3">August 17, 2023</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Morning Dose</span>
              <span className="text-xs text-destructive font-medium">NOT AVAILABLE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Afternoon Dose</span>
              <span className="text-xs text-destructive font-medium">NOT AVAILABLE</span>
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