import { Button } from "@/components/ui/button";
import DarkLightToggle from "@/components/ui/dark-light-toggle";
import { SettingsIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
import Logo from "./Logo";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-background shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <Link to="/">
          <div className="flex items-center">
            <Logo />
            <h2 className="text-2xl font-bold  ">News Aggregator</h2>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <DarkLightToggle />
          <Link to="/settings">
            <Button
              variant="outline"
              className={
                pathname === "/settings" ? "border border-primary" : ""
              }
              size="icon"
            >
              <SettingsIcon />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
