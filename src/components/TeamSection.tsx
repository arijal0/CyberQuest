import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import TeamProfileGrid from "@/components/TeamProfileGrid";
import { facultyMembers } from "@/data/team";

const TeamSection = () => {
  return (
    <section className="section-padding bg-background" id="team">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Faculty leaders from Fisk University shaping CyberQuest through research, mentorship,
            and community engagement.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-10">
          <TeamProfileGrid members={facultyMembers} />

          {/* Student researchers */}
          <div className="rounded-2xl border border-border bg-muted/50 p-8 text-center">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Users className="h-5 w-5" />
              <span className="font-medium">Student Research Assistants</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Student RAs support course development, labs, and infrastructure that power
              CyberQuest.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              They help design learning materials, prepare lab environments, and test experiences
              before they reach the classroom.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/team">
                <Button variant="outline" size="sm">
                  Meet the full team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/team#student-research-assistants">
                <Button size="sm">
                  View student research assistants
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
