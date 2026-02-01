import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faculty = [
  { name: "Dr. Ning Zhang", role: "Principal Investigator" },
  { name: "Dr. Hina Raja", role: "Co-Investigator" },
  { name: "Dr. Qi Li", role: "Co-Investigator" },
  { name: "Dr. Yu Zhang", role: "Co-Investigator" },
];

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
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Project Leadership and Research Team
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  The CyberQuest project is led by Computer Science faculty who guide curriculum
                  development, research supervision, and student mentorship.
                </p>
              </div>

              <div className="mx-auto mt-12 max-w-5xl">
                <h2 className="text-2xl font-semibold text-foreground">Computer Science Faculty</h2>
                <p className="mt-2 text-muted-foreground">
                  Headshots and profile links will be added once the full website content is
                  finalized.
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {faculty.map((member) => (
                    <div
                      key={member.name}
                      className="rounded-xl border border-border bg-card p-6 text-center shadow-soft"
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
              </div>

              <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-muted/40 p-6">
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
