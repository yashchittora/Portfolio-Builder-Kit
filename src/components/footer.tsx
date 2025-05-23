
import { ThemeSwitcher } from "./theme-switcher";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>&copy; {year}. All rights reserved.</p>
          <p>Built with React, Typescript, and Tailwind CSS.</p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
