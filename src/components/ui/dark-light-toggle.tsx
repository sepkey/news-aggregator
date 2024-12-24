import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Tooltip, TooltipProvider } from "./tooltip";

export default function DarkLightToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="outline"
            onClick={() => {
              setIsDarkMode((prev) => !prev);
              document.body.classList.toggle("dark");
            }}
            size="icon"
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-xs">
          {isDarkMode ? "Enable light mode" : "Enable dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
