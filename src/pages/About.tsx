import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Users,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | CyberQuest</title>
        <meta
          name="description"
          content="CyberQuest is an NSF-funded Targeted Infusion Project focused on curriculum innovation and experiential learning for cybersecurity workforce development."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="md:pb-18 relative overflow-hidden bg-muted/30 pb-14 pt-12 md:pt-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/5 blur-2xl" />
          <div className="container-wide relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Project Title
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Targeted Infusion Project: CyberQuest – Curriculum Innovation and Experiential
                Learning for Cybersecurity Workforce Development
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                An NSF-funded initiative at Fisk University advancing cybersecurity education with
                new courses, hands-on labs, and research mentorship.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/objectives">
                  <Button size="lg">
                    Explore objectives
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/outcomes">
                  <Button variant="outline" size="lg">
                    View outcomes
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
              {[
                { label: "Cybersecurity concentration", value: "18 credits", icon: GraduationCap },
                { label: "Core pillars", value: "3 objectives", icon: Sparkles },
                { label: "Hands-on learning", value: "XR + labs", icon: ShieldCheck },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-background/70 p-6 shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-foreground">{s.value}</div>
                      <div className="text-sm text-muted-foreground">{s.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is CyberQuest */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-4 text-lg text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground">What Is CyberQuest?</h2>
                <p>
                  CyberQuest is an NSF-funded Targeted Infusion Project (TIP) focused on developing
                  a Cybersecurity concentration through curriculum innovation and experiential
                  learning. The project strengthens cybersecurity education by introducing new
                  courses, hands-on learning opportunities, and student research experiences that
                  prepare students for careers in cybersecurity.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: BookOpen,
                    title: "Curriculum development",
                    desc: "A rigorous concentration aligned with workforce needs and academic standards.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Experiential learning",
                    desc: "XR simulations, virtual labs, and collaborative problem-solving.",
                  },
                  {
                    icon: Users,
                    title: "Research buddy system",
                    desc: "Cross-institution mentorship enabling interdisciplinary capstone research.",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent/30" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <f.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why CyberQuest */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="mx-auto max-w-5xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Why CyberQuest?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Cybersecurity demands a skilled and diverse workforce. CyberQuest strengthens
                  foundations and expands access to real-world learning experiences.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Modernized learning",
                    desc: "Blends theory with labs and simulations so students practice what they learn.",
                  },
                  {
                    title: "Workforce readiness",
                    desc: "Builds technical depth and professional readiness for high-demand roles.",
                  },
                  {
                    title: "Mentorship & research",
                    desc: "Creates structured mentorship and interdisciplinary capstone pathways.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-border bg-card p-7 shadow-soft"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NSF Support */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex flex-wrap items-center gap-3">
                  <img
                    src="/NSF%20logo.png"
                    alt="National Science Foundation"
                    className="h-9 w-9 shrink-0 rounded-md object-contain"
                    loading="lazy"
                  />
                  <h2 className="text-2xl font-semibold text-foreground">NSF Support</h2>
                </div>
                <p className="mt-3 text-lg text-muted-foreground">
                  CyberQuest is supported by the National Science Foundation through the Targeted
                  Infusion Project (TIP) program, which promotes innovation in STEM education and
                  workforce preparation.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  This material is based upon work supported by the National Science Foundation. Any
                  opinions, findings, and conclusions expressed are those of the project team and do
                  not necessarily reflect the views of the National Science Foundation.
                </p>
                <div className="mt-6">
                  <a
                    href="https://new.nsf.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="outline">
                      Visit NSF
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
