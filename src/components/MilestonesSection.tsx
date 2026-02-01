import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Circle, ArrowRight } from "lucide-react";

const milestones = [
  {
    status: "complete",
    title: "Launched New Courses",
    description: "Introduction to Cybersecurity and Cryptography courses now offered",
  },
  {
    status: "progress",
    title: "Expanding Experiential Modules",
    description: "Developing additional labs, projects, and research opportunities",
  },
  {
    status: "planned",
    title: "Broadening Pathways",
    description: "Creating connections to workforce opportunities and graduate study",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "complete":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
          <Check className="h-4 w-4" />
        </div>
      );
    case "progress":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md animate-pulse">
          <Loader2 className="h-4 w-4" />
        </div>
      );
    default:
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted-foreground/30 bg-background">
          <Circle className="h-3 w-3 text-muted-foreground/50" />
        </div>
      );
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "complete":
      return <span className="text-xs font-medium text-accent">Completed</span>;
    case "progress":
      return <span className="text-xs font-medium text-accent">In Progress</span>;
    default:
      return <span className="text-xs font-medium text-muted-foreground">Planned</span>;
  }
};

const MilestonesSection = () => {
  return (
    <section className="section-padding bg-muted/30" id="milestones">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Project Milestones
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tracking our progress in building cybersecurity education at Fisk University.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />

            {/* Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10">{getStatusIcon(milestone.status)}</div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                      {getStatusLabel(milestone.status)}
                    </div>
                    <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/milestones">
              <Button variant="outline" size="lg">
                View Full Milestones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
