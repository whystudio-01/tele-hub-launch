import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity,
  AlertTriangle,
  Clock,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";

const quickActions = [
  {
    title: "System Health",
    icon: Activity,
    status: "online",
    description: "All systems operational",
    action: "View Details",
  },
  {
    title: "Recent Alerts",
    icon: AlertTriangle,
    status: "warning",
    description: "3 pending alerts",
    action: "Review",
  },
  {
    title: "Active Users",
    icon: Users,
    status: "info",
    description: "247 users online",
    action: "Manage",
  },
  {
    title: "Database Status",
    icon: Database,
    status: "online",
    description: "Performance optimal",
    action: "Monitor",
  },
];

const statusColors = {
  online: "text-success",
  warning: "text-destructive",
  info: "text-primary",
};

export function QuickActions() {
  return (
    <Card className="shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {quickActions.map((action, index) => (
          <div
            key={action.title}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <action.icon className={`h-4 w-4 ${statusColors[action.status as keyof typeof statusColors]}`} />
              </div>
              <div>
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              {action.action}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}