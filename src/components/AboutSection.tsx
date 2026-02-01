import { BookOpen, FlaskConical, Users } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "New Cybersecurity Courses",
    description: "Curriculum designed for modern threat landscapes",
  },
  {
    icon: FlaskConical,
    title: "Hands-on Labs & Projects",
    description: "Real-world experience through practical exercises",
  },
  {
    icon: Users,
    title: "Research Assistantships",
    description: "Undergraduate opportunities in cybersecurity research",
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - explanation */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What is CyberQuest?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              CyberQuest is transforming cybersecurity education at Fisk University through 
              an innovative blend of curriculum development and experiential learning. Our 
              NSF-funded Targeted Infusion Project introduces new courses, hands-on laboratory 
              experiences, and undergraduate research opportunities designed to prepare 
              students for careers in the rapidly evolving cybersecurity field.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              By integrating theoretical knowledge with practical skills, we're building 
              pathways that connect students directly to workforce opportunities and 
              graduate studies in cybersecurity.
            </p>
          </div>

          {/* Right column - highlights */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-accent/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
