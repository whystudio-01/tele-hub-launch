import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  itemCount: number;
  gradient?: string;
  onViewAll: () => void;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  itemCount,
  gradient = "gradient-primary",
  onViewAll,
}: CategoryCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-elevation transition-all duration-300 border-0 shadow-card animate-fade-in">
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl ${gradient} shadow-glow`}>
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {itemCount} tools
          </Badge>
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <Button
          onClick={onViewAll}
          variant="ghost"
          className="w-full justify-between hover:bg-muted/50 group-hover:bg-primary/5"
        >
          View All Tools
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}