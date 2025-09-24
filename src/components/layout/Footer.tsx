import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">TC</span>
              </div>
              <span className="font-medium">TelecomTools Enterprise</span>
            </div>
            <span>© 2025 All rights reserved</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              Privacy Policy
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              Terms of Service
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="px-2 py-1 bg-muted rounded text-xs font-mono">
              v1.0
            </span>
            <a
              href="#"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              Internal Support
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}