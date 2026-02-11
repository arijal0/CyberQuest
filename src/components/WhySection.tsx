import {
  AlertTriangle,
  TrendingUp,
  Shield,
  Target,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    text: "Evolving cyber threats require increasingly sophisticated defenses",
  },
  {
    icon: TrendingUp,
    text: "Growing demand for qualified cybersecurity professionals",
  },
  {
    icon: Shield,
    text: "Critical need for diverse voices in security research and practice",
  },
];

const solutions = [
  {
    icon: Target,
    title: "Specialized Curriculum",
    text: "Targeted courses in cybersecurity fundamentals and cryptography",
  },
  {
    icon: Briefcase,
    title: "Industry-Ready Skills",
    text: "Practical labs and projects aligned with workforce needs",
  },
  {
    icon: GraduationCap,
    title: "Research Pathways",
    text: "Undergraduate research preparing students for advanced study",
  },
  {
    icon: Users,
    title: "Mentored Learning",
    text: "Faculty guidance through research assistantships and projects",
  },
];

const WhySection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Problem statement */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why CyberQuest?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The cybersecurity landscape presents pressing challenges that demand innovative
            educational responses.
          </p>
        </div>

        {/* Challenges */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.text}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <challenge.icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-muted-foreground">{challenge.text}</p>
            </div>
          ))}
        </div>

        {/* Divider with label */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-medium text-accent">CyberQuest addresses this by</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Solutions */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-accent/30 hover:shadow-soft-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
