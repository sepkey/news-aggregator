import { MoonIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

export default function DarkLightToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle('dark');
      }}
      size="icon"
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
