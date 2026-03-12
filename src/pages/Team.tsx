import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import TeamProfileGrid from "@/components/TeamProfileGrid";
import { facultyMembers, studentResearchAssistants } from "@/data/team";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Team | CyberQuest</title>
        <meta
          name="description"
          content="Meet the CyberQuest project leadership, faculty investigators, and student research assistants at Fisk University."
        />
      </Helmet>
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Project Leadership and Research Team
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the faculty leaders at Fisk University guiding CyberQuest research, curriculum,
                and student mentorship.
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

            <div className="mx-auto mt-16 max-w-6xl" id="student-research-assistants">
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    Student Research Assistants (RAs)
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    CyberQuest student researchers contribute to course development, lab setup, and
                    testing to ensure a high-quality learning experience.
                  </p>
                </div>
              </div>

              <TeamProfileGrid members={studentResearchAssistants} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Team;
