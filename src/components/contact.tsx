
import portfolioData from "@/data.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  if (!portfolioData.showSections.contact) return null;

  const { email, linkedin, github, resume } = portfolioData.contact;

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <Card className="max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center gap-6">
            <p className="text-lg">
              Interested in working together? Feel free to reach out through any of these channels:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {email && (
                <Button asChild size="lg" className="gap-2">
                  <a href={`mailto:${email}`}>
                    <Mail className="h-5 w-5" />
                    Email Me
                  </a>
                </Button>
              )}
              {linkedin && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              )}
              {github && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              )}
              {resume && (
                <Button asChild variant="secondary" size="lg" className="gap-2">
                  <a href={resume} download>
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
