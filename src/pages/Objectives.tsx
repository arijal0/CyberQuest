import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  BookOpen,
  Lightbulb,
  Circle,
  Loader2,
} from "lucide-react";
import { courses, experientialTasks, researchAreas, type Course } from "@/data/objectives";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

type Status = "done" | "in-progress" | "planned";

interface Objective {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  status: Status;
  statusLabel: string;
  icon: typeof BookOpen;
  color: string; // tailwind accent shades
}

const objectives: Objective[] = [
  {
    id: "curriculum",
    number: 1,
    title: "Curriculum Development",
    subtitle: "18-credit cybersecurity concentration",
    status: "in-progress",
    statusLabel: "In Progress",
    icon: BookOpen,
    color: "text-amber-500",
  },
  {
    id: "experiential",
    number: 2,
    title: "Experiential Learning",
    subtitle: "XR simulations & virtual labs",
    status: "planned",
    statusLabel: "Planned",
    icon: Lightbulb,
    color: "text-muted-foreground",
  },
  {
    id: "buddy",
    number: 3,
    title: "Research Buddy System",
    subtitle: "Fisk–Meharry collaboration",
    status: "planned",
    statusLabel: "Planned",
    icon: Users,
    color: "text-muted-foreground",
  },
];

const statusConfig: Record<
  Status,
  { icon: typeof CheckCircle2; ring: string; bg: string; text: string; pulse?: boolean }
> = {
  done: {
    icon: CheckCircle2,
    ring: "ring-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
  },
  "in-progress": {
    icon: Loader2,
    ring: "ring-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    pulse: true,
  },
  planned: {
    icon: Circle,
    ring: "ring-muted-foreground/20",
    bg: "bg-muted/50",
    text: "text-muted-foreground",
  },
};

/* ─── Hero Roadmap ─── */
const ObjectivesHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-muted/30 pb-10 pt-12 md:pb-14 md:pt-16">
      <div className="container-wide">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Project Objectives
          </h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Track the progress of CyberQuest&apos;s three core pillars.
          </p>
        </motion.div>

        {/* Roadmap illustration */}
        <div className="mx-auto mt-10 max-w-4xl">
          {/* Desktop: horizontal connected nodes */}
          <div className="hidden md:block">
            {/* connector line */}
            <div className="relative mx-auto flex max-w-3xl items-start justify-between">
              {/* horizontal bar behind nodes */}
              <div className="absolute left-[16.6%] right-[16.6%] top-10 h-0.5">
                <div className="h-full w-full bg-border" />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 origin-left bg-amber-500/40"
                  style={{ width: "0%" }}
                />
              </div>

              {objectives.map((obj, i) => {
                const cfg = statusConfig[obj.status];
                const StatusIcon = cfg.icon;
                return (
                  <motion.button
                    key={obj.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                    onClick={() => scrollTo(obj.id)}
                    className="group relative z-10 flex w-1/3 flex-col items-center text-center"
                  >
                    {/* node circle */}
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${cfg.bg} ${cfg.ring} ring-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                        obj.status === "done"
                          ? "border-emerald-500"
                          : obj.status === "in-progress"
                            ? "border-amber-500"
                            : "border-border"
                      }`}
                    >
                      <obj.icon className={`h-8 w-8 ${cfg.text}`} />
                    </div>

                    {/* status badge */}
                    <div
                      className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${cfg.bg} ${cfg.text}`}
                    >
                      <StatusIcon className={`h-3 w-3 ${cfg.pulse ? "animate-spin" : ""}`} />
                      {obj.statusLabel}
                    </div>

                    {/* text */}
                    <h3 className="mt-2 text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                      {obj.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{obj.subtitle}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden">
            <div className="relative ml-10 border-l-2 border-border pl-8">
              {/* progress overlay on border */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-[-1px] top-0 w-0.5 origin-top bg-amber-500/40"
                style={{ height: "0%" }}
              />

              {objectives.map((obj, i) => {
                const cfg = statusConfig[obj.status];
                const StatusIcon = cfg.icon;
                return (
                  <motion.button
                    key={obj.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.45 }}
                    onClick={() => scrollTo(obj.id)}
                    className="group relative mb-8 flex items-start gap-4 text-left last:mb-0"
                  >
                    {/* node dot on the line */}
                    <div
                      className={`absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-full border-2 ${cfg.bg} ${
                        obj.status === "done"
                          ? "border-emerald-500"
                          : obj.status === "in-progress"
                            ? "border-amber-500"
                            : "border-border"
                      }`}
                    >
                      <obj.icon className={`h-5 w-5 ${cfg.text}`} />
                    </div>

                    <div>
                      <div
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${cfg.bg} ${cfg.text}`}
                      >
                        <StatusIcon className={`h-2.5 w-2.5 ${cfg.pulse ? "animate-spin" : ""}`} />
                        {obj.statusLabel}
                      </div>
                      <h3 className="mt-1 text-sm font-bold text-foreground">{obj.title}</h3>
                      <p className="text-xs text-muted-foreground">{obj.subtitle}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Course Card ─── */
const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="card-hover group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
    >
      <span
        className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
          course.type === "CR" ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
        }`}
      >
        {course.type === "CR" ? "Required" : "Elective"}
      </span>

      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <course.icon className="h-5 w-5" />
      </div>

      <h3 className="text-lg font-semibold text-foreground">{course.name}</h3>
      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
        {course.credits} Credit{course.credits > 1 ? "s" : ""}
      </p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {course.description}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent/80"
      >
        {expanded ? "Hide" : "View"} topics
        <ArrowRight className={`h-3 w-3 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-2 flex flex-wrap gap-1.5"
        >
          {course.topics.map((t) => (
            <span
              key={t}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

/* ─── Objective 1: Curriculum ─── */
const CurriculumSection = () => (
  <section className="bg-background pb-12 pt-8 md:pb-16 md:pt-10" id="curriculum">
    <div className="container-wide">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-sm font-semibold uppercase tracking-wide text-accent"
        >
          Objective 1
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="mt-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Curriculum Development
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-3 text-base text-muted-foreground md:text-lg"
        >
          A rigorous 18-credit cybersecurity concentration — 4 required courses plus at least 2
          electives.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={stagger}
        className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {courses.map((c, i) => (
          <CourseCard key={c.name} course={c} index={i} />
        ))}
      </motion.div>

      {/* Concentration strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/5 to-background p-7 shadow-lg"
      >
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent via-accent/70 to-accent/20" />

          <div className="flex flex-col gap-5 pl-5 sm:flex-row sm:items-start sm:gap-6 sm:pl-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent shadow-sm ring-1 ring-accent/30">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  How Students Earn the Concentration
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                    4 Required (CR)
                  </span>
                  <span className="inline-flex items-center rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground shadow-sm ring-1 ring-border">
                    2+ Electives (E)
                  </span>
                </div>
              </div>

              <p className="text-base leading-relaxed text-foreground/80">
                Complete <span className="font-bold text-foreground">18 credit hours</span> — all 4
                required (CR) courses plus at least 2 elective (E) courses.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Objective 2: Experiential Learning ─── */
const ExperientialSection = () => (
  <section className="bg-muted/30 py-12 md:py-16" id="experiential">
    <div className="container-wide">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-sm font-semibold uppercase tracking-wide text-accent"
        >
          Objective 2
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="mt-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Experiential Learning
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-3 text-base text-muted-foreground md:text-lg"
        >
          Immersive, hands-on learning through XR simulations, gamified platforms, and collaborative
          virtual classrooms.
        </motion.p>
      </motion.div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
        {experientialTasks.map((task, i) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.45 }}
            className="card-hover relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-soft"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent/40" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {task.subtitle}
            </span>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <task.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{task.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{task.description}</p>
            <ul className="mt-4 space-y-1.5">
              {task.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Objective 3: Buddy System ─── */
const BuddySection = () => (
  <section className="bg-background py-12 md:py-16" id="buddy">
    <div className="container-wide">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp}
          custom={0}
          className="text-sm font-semibold uppercase tracking-wide text-accent"
        >
          Objective 3
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="mt-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Research Buddy System
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-3 text-base text-muted-foreground md:text-lg"
        >
          Fisk undergraduates partner with Meharry graduate students and faculty mentors for
          interdisciplinary capstone research across three collaborative tracks.
        </motion.p>
      </motion.div>

      {/* 3-column research cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={stagger}
        className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {researchAreas.map((area, i) => (
          <motion.div
            key={area.title}
            variants={fadeUp}
            custom={i}
            className="card-hover group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent/40" />

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <area.icon className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground/80">
              {area.buddyDetail}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {area.topics.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── Summary ─── */
const SummarySection = () => (
  <section className="relative overflow-hidden bg-accent/5 py-14 md:py-20" id="summary">
    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/5 blur-2xl" />

    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
          <Zap className="h-7 w-7" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Curriculum. Experience. Research.
          <br />
          <span className="text-accent">One Unified Pathway.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          CyberQuest merges rigorous coursework, immersive XR-driven labs, and the Fisk–Meharry
          Research Buddy System to empower minority students with the theoretical depth and hands-on
          expertise the industry demands.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/team">
            <Button size="lg">
              Meet the Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Partner With Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─── */
const Objectives = () => (
  <>
    <Helmet>
      <title>Project Objectives | CyberQuest at Fisk University</title>
      <meta
        name="description"
        content="Explore CyberQuest's three core objectives: cybersecurity curriculum development, experiential learning with XR, and the Fisk–Meharry Research Buddy System."
      />
    </Helmet>
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ObjectivesHero />
        <CurriculumSection />
        <ExperientialSection />
        <BuddySection />
        <SummarySection />
      </main>
      <Footer />
    </div>
  </>
);

export default Objectives;
