
import { cn } from "@/lib/utils";
import { Home, Apple, Stethoscope, HeartPulse, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Apple, label: "Ask about food", path: "/food" },
  { icon: Stethoscope, label: "Diagnose diseases", path: "/diagnose" },
  { icon: HeartPulse, label: "Monitor health", path: "/health" },
  { icon: ShoppingBag, label: "Shopping", path: "/shopping" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="min-h-screen w-64 bg-white/80 backdrop-blur-sm border-r border-gray-200 fixed left-0 top-0">
      <div className="flex flex-col h-full px-3 py-4">
        <div className="mb-8 px-4">
          <h1 className="text-2xl font-semibold text-gray-800">Tailwise</h1>
          <p className="text-sm text-gray-500">Pet Care Companion</p>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg transition-colors",
                    "hover:bg-primary hover:text-primary-foreground",
                    location.pathname === item.path &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
