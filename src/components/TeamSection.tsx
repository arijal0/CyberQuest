import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

const faculty = [
  { name: "Dr. Ning Zhang", role: "Principal Investigator" },
  { name: "Dr. Hina Raja", role: "Co-Investigator" },
  { name: "Dr. Qi Li", role: "Co-Investigator" },
  { name: "Dr. Yu Zhang", role: "Co-Investigator" },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-background" id="team">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Faculty leaders and student researchers driving CyberQuest forward.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Faculty grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member) => (
              <div
                key={member.name}
                className="group rounded-xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-accent/30"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-semibold">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Student researchers */}
          <div className="mt-10 rounded-xl border border-border bg-muted/50 p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Users className="h-5 w-5" />
              <span className="font-medium">Student Research Assistants</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              6 supported last semester, 1 currently, expanding soon.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link to="/team">
              <Button variant="outline" size="lg">
                Meet the Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
