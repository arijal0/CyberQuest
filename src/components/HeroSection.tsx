import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-pattern">
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid" />
      
      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-teal/20 rounded-full opacity-50" />
      <div className="absolute bottom-10 left-10 w-48 h-48 border border-teal/10 rotate-45 opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-teal/15 rounded-lg rotate-12 opacity-30" />
      
      <div className="relative container-wide section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
            CyberQuest: Curriculum Innovation and Experiential Learning for Cybersecurity Workforce Development
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl animate-fade-in [animation-delay:200ms]">
            CyberQuest is an NSF-funded Targeted Infusion Project (TIP) building a cybersecurity 
            concentration through new courses and experiential learning at Fisk University.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:400ms]">
            <Link to="/about">
              <Button variant="hero" size="xl">
                Explore the Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/outcomes">
              <Button variant="heroOutline" size="xl">
                <BookOpen className="mr-2 h-5 w-5" />
                View Outcomes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
