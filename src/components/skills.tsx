
import portfolioData from "@/data.json";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  if (!portfolioData.showSections.skills) return null;
  const { technical, soft } = portfolioData.skills;

  return (
    <section id="skills" className="section-container bg-muted/30">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {technical.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        <div className="opacity-0 animate-fade-in animate-delay-200" style={{ animationFillMode: 'forwards' }}>
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {soft.map((skill, index) => (
              <Badge key={index} className="text-sm py-2 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
