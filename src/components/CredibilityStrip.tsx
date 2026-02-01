import { Award, Building2 } from "lucide-react";

const CredibilityStrip = () => {
  return (
    <section className="border-b border-border bg-muted/50">
      <div className="container-wide py-4">
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            <span className="font-medium">NSF-Funded TIP Project</span>
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-accent" />
            <span>Fisk University — Department of Computer Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
