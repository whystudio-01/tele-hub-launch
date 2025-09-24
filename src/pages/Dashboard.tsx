import { useState } from "react";
import { CategoryCard } from "@/components/dashboard/CategoryCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  Workflow,
  Cpu,
  Users,
  Search,
  Bell,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    title: "Tools",
    description: "Network monitoring, database management, and security tools",
    icon: Wrench,
    itemCount: 4,
    gradient: "gradient-primary",
  },
  {
    title: "Processes",
    description: "Workflow builders, approval systems, and documentation",
    icon: Workflow,
    itemCount: 4,
    gradient: "gradient-accent",
  },
  {
    title: "Technical",
    description: "System status, performance metrics, and API management",
    icon: Cpu,
    itemCount: 4,
    gradient: "gradient-primary",
  },
  {
    title: "Contacts & Training",
    description: "Team directory, training materials, and support resources",
    icon: Users,
    itemCount: 4,
    gradient: "gradient-accent",
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleViewCategory = (categoryTitle: string) => {
    // TODO: Navigate to category page or expand sidebar
    console.log(`Viewing ${categoryTitle} category`);
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 text-white shadow-elevation">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome to Telecom Tools</h1>
          <p className="text-lg opacity-90 mb-6">
            Your comprehensive platform for network management, processes, and technical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              <Search className="h-4 w-4 mr-2" />
              Quick Search
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <BookOpen className="h-4 w-4 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
      </div>

      {/* Category Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Main Categories</h2>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              itemCount={category.itemCount}
              gradient={category.gradient}
              onViewAll={() => handleViewCategory(category.title)}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity />
      </div>

      {/* Getting Started Section */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            New to the platform? Here are some quick tips to get you started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">Explore Categories</h4>
              <p className="text-sm text-muted-foreground">
                Browse through our four main categories to find the tools you need.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">Use the Sidebar</h4>
              <p className="text-sm text-muted-foreground">
                Navigate quickly using the collapsible sidebar menu on the left.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">Get Support</h4>
              <p className="text-sm text-muted-foreground">
                Access help through the Contact Us button or support resources.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}