
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";
import portfolioData from "@/data.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { name } = portfolioData.profile;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={portfolioData.profile.dp} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-lg hidden sm:inline-block">
            {name}
          </span>
        </a>
        <nav>
          <ul className="flex items-center gap-6">
            <li className="hidden md:block">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            {portfolioData.showSections.education && (
              <li className="hidden md:block">
                <a
                  href="#education"
                  className="hover:text-primary transition-colors"
                >
                  Education
                </a>
              </li>
            )}
            {portfolioData.showSections.experience && (
              <li className="hidden md:block">
                <a
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
            )}
            {portfolioData.showSections.projects && (
              <li className="hidden md:block">
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
            )}
            {portfolioData.showSections.skills && (
              <li className="hidden md:block">
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
            )}
            {portfolioData.showSections.contact && (
              <li className="hidden md:block">
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            )}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
