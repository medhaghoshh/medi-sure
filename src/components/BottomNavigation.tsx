import { Home, Calendar, Settings, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "tracker", label: "My Tracker", icon: Calendar, path: "/tracker" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
];

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-2 px-4 min-w-0 flex-1 ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};