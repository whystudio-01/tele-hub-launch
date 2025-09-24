import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Settings, Database, Shield } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "John Smith",
    action: "Updated network configuration",
    time: "2 minutes ago",
    icon: Settings,
    type: "config",
  },
  {
    id: 2,
    user: "Sarah Wilson",
    action: "Ran security scan",
    time: "15 minutes ago",
    icon: Shield,
    type: "security",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Database maintenance completed",
    time: "1 hour ago",
    icon: Database,
    type: "maintenance",
  },
  {
    id: 4,
    user: "Emily Chen",
    action: "Created new workflow",
    time: "2 hours ago",
    icon: Settings,
    type: "workflow",
  },
];

const typeColors = {
  config: "bg-accent/10 text-accent",
  security: "bg-destructive/10 text-destructive",
  maintenance: "bg-success/10 text-success",
  workflow: "bg-primary/10 text-primary",
};

export function RecentActivity() {
  return (
    <Card className="shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="p-2 rounded-lg bg-muted">
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <User className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm font-medium">{activity.user}</span>
                <Badge
                  variant="secondary"
                  className={`text-xs ${typeColors[activity.type as keyof typeof typeColors]}`}
                >
                  {activity.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}