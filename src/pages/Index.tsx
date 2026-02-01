import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import OutcomesSection from "@/components/OutcomesSection";
import MilestonesSection from "@/components/MilestonesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CyberQuest</title>
        <meta
          name="description"
          content="CyberQuest is an NSF-funded project building a cybersecurity concentration at Fisk University through new courses, hands-on labs, and undergraduate research opportunities."
        />
        <meta property="og:title" content="CyberQuest | Cybersecurity Education at Fisk University" />
        <meta
          property="og:description"
          content="NSF-funded Targeted Infusion Project building cybersecurity curriculum and experiential learning opportunities at Fisk University."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CyberQuest" />
        <link rel="canonical" href="https://cyberquest.fisk.edu" />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Project Title
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                  Targeted Infusion Project: CyberQuest – Curriculum Innovation and Experiential
                  Learning for Cybersecurity Workforce Development
                </h2>
              </div>
            </div>
          </section>
          <CredibilityStrip />
          <AboutSection />
          <WhySection />
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Project Objectives
                </h2>
                <p className="text-lg text-muted-foreground">
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
          <OutcomesSection />
          <MilestonesSection />
          <TeamSection />
          <section className="section-padding bg-muted/30">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-muted-foreground">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  NSF Support
                </h2>
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
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
