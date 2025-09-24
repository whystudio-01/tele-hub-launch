import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Settings, Play } from "lucide-react";

const subcategoryData: Record<string, any> = {
  "network-monitor": {
    title: "Network Monitor",
    category: "Tools",
    description: "Real-time network monitoring and analysis tools for comprehensive network health tracking.",
    features: [
      "Real-time network traffic monitoring",
      "Bandwidth usage analytics",
      "Device connectivity status",
      "Network performance metrics",
      "Automated alert system",
      "Historical data analysis"
    ],
    status: "Active",
    version: "v2.1.4",
    lastUpdated: "2025-01-15"
  },
  "database-manager": {
    title: "Database Manager",
    category: "Tools", 
    description: "Comprehensive database management and optimization tools for enterprise-level data operations.",
    features: [
      "Database performance monitoring",
      "Query optimization tools",
      "Backup and restore utilities",
      "User access management",
      "Schema visualization",
      "Automated maintenance tasks"
    ],
    status: "Active",
    version: "v3.0.2",
    lastUpdated: "2025-01-12"
  },
  "security-scanner": {
    title: "Security Scanner",
    category: "Tools",
    description: "Advanced security scanning and vulnerability assessment tools for network infrastructure.",
    features: [
      "Vulnerability scanning",
      "Security compliance checks",
      "Threat detection analysis",
      "Risk assessment reports", 
      "Automated security updates",
      "Incident response tracking"
    ],
    status: "Active",
    version: "v1.8.6",
    lastUpdated: "2025-01-10"
  },
  "configuration": {
    title: "Configuration Tool",
    category: "Tools",
    description: "Centralized configuration management for network devices and system settings.",
    features: [
      "Device configuration management",
      "Template-based configurations",
      "Change tracking and rollback",
      "Configuration validation",
      "Bulk configuration updates",
      "Compliance monitoring"
    ],
    status: "Active", 
    version: "v2.5.1",
    lastUpdated: "2025-01-08"
  }
};

export default function SubcategoryPage() {
  const { category, subcategory } = useParams();
  const data = subcategoryData[subcategory || ""];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const statusColor = data.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground";

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{data.category}</span>
          <span>/</span>
          <span className="text-foreground font-medium">{data.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tool Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{data.title}</CardTitle>
                  <CardDescription className="mt-2">{data.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={statusColor}>{data.status}</Badge>
                  <Badge variant="outline">{data.version}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Button className="gradient-primary">
                  <Play className="h-4 w-4 mr-2" />
                  Launch Tool
                </Button>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
                <Button variant="ghost">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>
                Comprehensive capabilities and functionality overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tool Details */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg">Tool Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Category</label>
                <p className="text-sm mt-1">{data.category}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Version</label>
                <p className="text-sm mt-1">{data.version}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Status</label>
                <p className="text-sm mt-1">{data.status}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                <p className="text-sm mt-1">{data.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Tool Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ExternalLink className="h-4 w-4 mr-2" />
                Support Portal
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}