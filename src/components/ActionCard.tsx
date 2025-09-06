import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ActionCardProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const ActionCard = ({ title, icon: Icon, onClick, className = "" }: ActionCardProps) => {
  return (
    <Card 
      className={`relative overflow-hidden bg-primary hover:bg-primary-dark transition-colors cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {/* Red corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-destructive"></div>
      
      <div className="p-6 text-center">
        <Icon className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
        <h3 className="text-primary-foreground font-medium text-sm">{title}</h3>
      </div>
    </Card>
  );
};