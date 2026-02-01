import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamProfileGrid from "@/components/TeamProfileGrid";
import { facultyMembers } from "@/data/team";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Research Team | CyberQuest</title>
        <meta
          name="description"
          content="Meet the CyberQuest project leadership, faculty investigators, and student research assistants at Fisk University."
        />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Project Leadership and Research Team
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Meet the faculty leaders at Fisk University guiding CyberQuest research,
                  curriculum, and student mentorship.
                </p>
              </div>

              <div className="mx-auto mt-12 max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Computer Science Faculty
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Click any faculty photo to view a full profile and project contributions.
                    </p>
                  </div>
                </div>

                <TeamProfileGrid members={facultyMembers} />
              </div>

              <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-muted/40 p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Student Research Assistants (RAs)
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Student involvement is a core part of CyberQuest. Six undergraduate Research
                  Assistants supported the project during the previous semester, and one
                  undergraduate Research Assistant is currently contributing this semester.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Course and curriculum development</li>
                  <li>Learning materials and lab activities</li>
                  <li>Research and project-related tasks</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  We will add names, headshots, and profile links as new students join the team.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

    </>
  );
};

export default Team;
