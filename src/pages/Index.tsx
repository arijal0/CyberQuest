import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import OutcomesSection from "@/components/OutcomesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Lightbulb, Loader2, Users, Circle } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CyberQuest</title>
        <meta
          name="description"
          content="CyberQuest is an NSF-funded project building a cybersecurity concentration at Fisk University through new courses, hands-on labs, and undergraduate research opportunities."
        />
        <meta
          property="og:title"
          content="CyberQuest | Cybersecurity Education at Fisk University"
        />
        <meta
          property="og:description"
          content="NSF-funded Targeted Infusion Project building cybersecurity curriculum and experiential learning opportunities at Fisk University."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CyberQuest" />
        <link rel="canonical" href="https://cyberquestfisk.vercel.app/" />
      </Helmet>

      <Layout>
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
            <div className="mx-auto max-w-5xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Project Objectives
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Three core pillars guide CyberQuest: a new curriculum, immersive experiential
                  learning, and a cross-institution research buddy system.
                </p>
                <div className="mt-6">
                  <Link to="/objectives" className="inline-flex">
                    <Button variant="outline" size="lg">
                      View full roadmap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-soft-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500/80 to-amber-500/20" />
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20 transition-colors group-hover:bg-amber-500/20">
                        <BookOpen className="h-7 w-7" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-600 ring-1 ring-amber-500/20">
                        <Loader2 className="h-3 w-3 animate-spin" />
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      Curriculum Development
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      An 18-credit cybersecurity concentration with required and elective
                      coursework.
                    </p>
                    <Link to="/objectives#curriculum" className="mt-6 inline-block">
                      <Button
                        variant="ghost"
                        className="group/btn p-0 text-accent hover:bg-accent/10 hover:text-accent"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-soft-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent/30" />
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Lightbulb className="h-7 w-7" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground ring-1 ring-border">
                        <Circle className="h-3 w-3" />
                        Planned
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      Experiential Learning
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      XR simulations, virtual labs, and collaborative learning to build real-world
                      skills.
                    </p>
                    <Link to="/objectives#experiential" className="mt-6 inline-block">
                      <Button
                        variant="ghost"
                        className="group/btn p-0 text-accent hover:bg-accent/10 hover:text-accent"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-soft-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/70 to-accent/20" />
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Users className="h-7 w-7" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground ring-1 ring-border">
                        <Circle className="h-3 w-3" />
                        Planned
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      Research Buddy System
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      Fisk–Meharry collaboration enabling interdisciplinary capstone research and
                      mentorship.
                    </p>
                    <Link to="/objectives#buddy" className="mt-6 inline-block">
                      <Button
                        variant="ghost"
                        className="group/btn p-0 text-accent hover:bg-accent/10 hover:text-accent"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OutcomesSection />
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
                This material is based upon work supported by the National Science Foundation. Any
                opinions, findings, and conclusions expressed are those of the project team and do
                not necessarily reflect the views of the National Science Foundation.
              </p>
            </div>
          </div>
        </section>
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
