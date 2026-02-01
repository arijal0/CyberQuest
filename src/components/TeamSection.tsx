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
              Supported 6 students last semester, 1 currently, with additional roles opening soon.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Research assistants contribute to lab development, outreach events, and the creation
              of hands-on learning materials.
            </p>
          </div>

          <div className="text-center">
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
