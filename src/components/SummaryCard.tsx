
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  variant: "default" | "success" | "warning" | "secondary";
  description: string;
}

const variantStyles = {
  default: "from-blue-500 to-blue-600",
  success: "from-green-500 to-green-600", 
  warning: "from-orange-500 to-orange-600",
  secondary: "from-gray-500 to-gray-600"
};

const badgeVariants = {
  default: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-orange-100 text-orange-800", 
  secondary: "bg-gray-100 text-gray-800"
};

export function SummaryCard({ title, value, icon: Icon, variant, description }: SummaryCardProps) {
  const formatInCrores = (value: number) => {
    return `₹${value.toFixed(2)} Cr`;
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10", variantStyles[variant])} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className={cn("p-2 rounded-full bg-gradient-to-br", variantStyles[variant])}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-2xl font-bold text-gray-900">
          {formatInCrores(value)}
        </div>
        <Badge className={cn("mt-2 text-xs", badgeVariants[variant])}>
          {description}
        </Badge>
      </CardContent>
    </Card>
  );
}
