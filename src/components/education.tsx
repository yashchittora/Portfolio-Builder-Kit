
import portfolioData from "@/data.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  if (!portfolioData.showSections.education) return null;

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="grid gap-6">
        {portfolioData.education.map((edu, index) => (
          <Card key={index} className="overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
            <CardHeader className="bg-muted/50">
              <CardTitle>{edu.college}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-muted-foreground">{edu.year}</span>
                  <span className="font-medium text-primary">CGPA: {edu.cgpa}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
