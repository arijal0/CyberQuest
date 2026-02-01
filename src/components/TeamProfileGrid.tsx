import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { FacultyMember } from "@/data/team";

type TeamProfileGridProps = {
  members: FacultyMember[];
};

const TeamProfileGrid = ({ members }: TeamProfileGridProps) => {
  const [activeMember, setActiveMember] = useState<FacultyMember | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openMember = (member: FacultyMember) => {
    setActiveMember(member);
    setIsPanelOpen(true);
  };

  const closePanel = () => setIsPanelOpen(false);

  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {members.map((member) => (
          <button
            key={member.id}
            type="button"
            onClick={() => openMember(member)}
            className="group flex w-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft-lg"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-border bg-muted/40">
                <img
                  src={member.photo}
                  alt={`${member.name} headshot`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {member.role}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <p className="text-sm text-muted-foreground">{member.department}</p>
              </div>
            </div>

            <p className="text-sm text-foreground">{member.shortBio}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {member.focus.map((item) => (
                <span key={item} className="rounded-full bg-muted/60 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-accent">
              View profile
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300",
          isPanelOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closePanel}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-2xl translate-x-full bg-background shadow-2xl transition-transform duration-500",
          isPanelOpen && "translate-x-0",
        )}
        aria-hidden={!isPanelOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {activeMember?.role}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                {activeMember?.name}
              </h2>
              <p className="text-sm text-muted-foreground">{activeMember?.title}</p>
              <p className="text-sm text-muted-foreground">{activeMember?.department}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={closePanel} aria-label="Close profile">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[160px_1fr]">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border bg-muted/40">
              {activeMember && (
                <img
                  src={activeMember.photo}
                  alt={`${activeMember.name} portrait`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="space-y-4">
              <p className="text-sm text-foreground">{activeMember?.bio}</p>
              <div className="flex flex-wrap gap-2">
                {activeMember?.focus.map((item) => (
                  <span key={item} className="rounded-full bg-muted px-3 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Education</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                {activeMember?.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase text-muted-foreground">
                Teaching Areas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                {activeMember?.courses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-muted-foreground">
              Leadership Highlights
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {activeMember?.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            Contact details and office hours will be added once faculty profiles are finalized.
          </div>
        </div>
      </aside>
    </>
  );
};

export default TeamProfileGrid;
