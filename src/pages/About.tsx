import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CyberQuest | Fisk University</title>
        <meta
          name="description"
          content="CyberQuest is an NSF-funded Targeted Infusion Project focused on curriculum innovation and experiential learning for cybersecurity workforce development."
        />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                    Project Title
                  </p>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Targeted Infusion Project: CyberQuest – Curriculum Innovation and Experiential
                    Learning for Cybersecurity Workforce Development
                  </h1>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground">
                  <h2 className="text-2xl font-semibold text-foreground">What Is CyberQuest?</h2>
                  <p>
                    CyberQuest is an NSF-funded Targeted Infusion Project (TIP) focused on
                    developing a Cybersecurity concentration through curriculum innovation and
                    experiential learning. The project strengthens cybersecurity education by
                    introducing new courses, hands-on learning opportunities, and student research
                    experiences that prepare students for careers in cybersecurity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-muted/30">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">Why CyberQuest?</h2>
                <p>
                  Cybersecurity is a rapidly growing field with increasing demand for a skilled
                  and diverse workforce. As cyber threats continue to evolve, there is a critical
                  need for educational programs that combine strong academic foundations with
                  real-world experience.
                </p>
                <p>
                  CyberQuest addresses this need by expanding access to cybersecurity education,
                  modernizing curriculum, and supporting students as they develop technical skills,
                  problem-solving abilities, and professional readiness for the cybersecurity
                  workforce.
                </p>
              </div>
            </div>
          </section>

          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Project Objectives</h2>
                <p className="text-muted-foreground">
                  Detailed objectives will be provided later. We will add the four objectives once
                  they are finalized.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Objective 1", "Objective 2", "Objective 3", "Objective 4"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground"
                    >
                      <span className="font-semibold text-foreground">{item}</span>
                      <p className="mt-2">Details coming soon.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-muted/30">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">NSF Support</h2>
                <p>
                  CyberQuest is supported by the National Science Foundation through the Targeted
                  Infusion Project (TIP) program, which promotes innovation in STEM education and
                  workforce preparation.
                </p>
                <p className="text-sm">
                  This material is based upon work supported by the National Science Foundation.
                  Any opinions, findings, and conclusions expressed are those of the project team
                  and do not necessarily reflect the views of the National Science Foundation.
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

export default About;
