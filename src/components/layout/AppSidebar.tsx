import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Wrench,
  Settings,
  Cpu,
  Users,
  ChevronRight,
  Database,
  Shield,
  Network,
  FileText,
  Workflow,
  GitBranch,
  CheckCircle,
  Book,
  Phone,
  GraduationCap,
  HeadphonesIcon,
} from "lucide-react";

const navigationItems = [
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { title: "Network Monitor", icon: Network, url: "/tools/network-monitor" },
      { title: "Database Manager", icon: Database, url: "/tools/database-manager" },
      { title: "Security Scanner", icon: Shield, url: "/tools/security-scanner" },
      { title: "Configuration Tool", icon: Settings, url: "/tools/configuration" },
    ],
  },
  {
    title: "Processes",
    icon: Workflow,
    items: [
      { title: "Workflow Builder", icon: GitBranch, url: "/processes/workflow-builder" },
      { title: "Approval System", icon: CheckCircle, url: "/processes/approval-system" },
      { title: "Documentation", icon: FileText, url: "/processes/documentation" },
      { title: "Quality Control", icon: Settings, url: "/processes/quality-control" },
    ],
  },
  {
    title: "Technical",
    icon: Cpu,
    items: [
      { title: "System Status", icon: Network, url: "/technical/system-status" },
      { title: "Performance Metrics", icon: Database, url: "/technical/performance" },
      { title: "Error Logs", icon: FileText, url: "/technical/error-logs" },
      { title: "API Gateway", icon: Shield, url: "/technical/api-gateway" },
    ],
  },
  {
    title: "Contacts & Training",
    icon: Users,
    items: [
      { title: "Team Directory", icon: Users, url: "/contacts/team-directory" },
      { title: "Training Materials", icon: GraduationCap, url: "/contacts/training" },
      { title: "Documentation Hub", icon: Book, url: "/contacts/documentation" },
      { title: "Support Center", icon: HeadphonesIcon, url: "/contacts/support" },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Tools: true,
  });

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary/10 text-primary border-r-2 border-primary font-medium"
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="pt-4">
        {navigationItems.map((group) => (
          <SidebarGroup key={group.title}>
            <Collapsible
              open={openGroups[group.title]}
              onOpenChange={() => toggleGroup(group.title)}
            >
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="group/label text-sm font-medium px-2 py-2 hover:bg-muted/50 rounded-md cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <group.icon className="h-4 w-4" />
                    {!collapsed && <span>{group.title}</span>}
                  </div>
                  {!collapsed && (
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        openGroups[group.title] ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.url}
                            className={getNavClassName}
                          >
                            <item.icon className="h-4 w-4 ml-2" />
                            {!collapsed && <span className="ml-2">{item.title}</span>}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}