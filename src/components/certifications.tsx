
import portfolioData from "@/data.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Certifications() {
  if (!portfolioData.showSections.certifications) return null;

  return (
    <section id="certifications" className="section-container bg-muted/30">
      <h2 className="section-title">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <Card key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{cert.organization}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
              {cert.url && (
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
