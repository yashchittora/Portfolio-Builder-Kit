
import portfolioData from "@/data.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { name, tagline, bio, dp } = portfolioData.profile;
  const { email, linkedin, github } = portfolioData.contact;
  
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent dark:from-primary/10"></div>
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">{name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">{tagline}</p>
          <p className="mb-8 max-w-lg">{bio}</p>
          <div className="flex flex-wrap gap-4">
            {email && (
              <Button asChild variant="outline" className="gap-2">
                <a href={`mailto:${email}`}>
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            )}
            {linkedin && (
              <Button asChild variant="outline" className="gap-2">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            )}
            {github && (
              <Button asChild variant="outline" className="gap-2">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-fade-in">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={dp} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="w-full h-full text-4xl">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
