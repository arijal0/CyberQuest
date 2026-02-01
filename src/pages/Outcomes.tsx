import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Outcomes = () => {
  return (
    <>
      <Helmet>
        <title>Project Outcomes | CyberQuest</title>
        <meta
          name="description"
          content="Curriculum and educational outcomes from the CyberQuest project at Fisk University."
        />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Curriculum and Educational Outcomes
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  CyberQuest has already achieved several important outcomes that advance
                  cybersecurity education and workforce preparation.
                </p>
              </div>

              <div className="mx-auto mt-12 max-w-5xl grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-xl font-semibold text-foreground">
                    Introduction to Cybersecurity
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Foundational course covering security principles, threat landscapes, risk
                    assessment, and defensive strategies.
                  </p>
                  <Link to="/outcomes/intro-to-cybersecurity" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Course details
                    </Button>
                  </Link>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-xl font-semibold text-foreground">Cryptography</h2>
                  <p className="mt-3 text-muted-foreground">
                    In-depth study of encryption algorithms, cryptographic protocols, and secure
                    communication methods.
                  </p>
                  <Link to="/outcomes/cryptography" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Course details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-muted/30">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">Experiential Learning</h2>
                <p>
                  CyberQuest integrates experiential learning through hands-on labs, student
                  research assistantships, and applied cybersecurity problem-solving.
                </p>
              </div>
            </div>
          </section>

          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">Workforce Preparation</h2>
                <p>
                  The project supports cybersecurity workforce development by aligning curriculum
                  with industry needs, preparing students for internships and entry-level roles,
                  and encouraging pathways to graduate study.
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

export default Outcomes;
