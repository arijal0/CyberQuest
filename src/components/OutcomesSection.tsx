import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Lock, FlaskConical, ArrowRight } from "lucide-react";

const outcomes = [
  {
    icon: BookOpen,
    title: "Introduction to Cybersecurity",
    description:
      "Foundational course covering security principles, threat landscapes, risk assessment, and defensive strategies. Students gain essential knowledge for cybersecurity careers.",
    link: "/outcomes/intro-to-cybersecurity",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description:
      "In-depth study of encryption algorithms, cryptographic protocols, and secure communication methods. Hands-on implementation of modern cryptographic techniques.",
    link: "/outcomes/cryptography",
  },
  {
    icon: FlaskConical,
    title: "Experiential Learning",
    description:
      "Practical labs, capstone projects, and undergraduate research assistantships. Students apply theory through real-world security challenges and faculty-mentored research.",
    link: "/outcomes",
  },
];

const OutcomesSection = () => {
  return (
    <section className="section-padding bg-background" id="outcomes">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Project Outcomes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            New courses and experiential opportunities designed to build cybersecurity expertise.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-soft-lg"
            >
              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-accent to-teal-light" />

              <div className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <outcome.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">{outcome.title}</h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">{outcome.description}</p>

                <Link to={outcome.link} className="mt-6 inline-block">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
