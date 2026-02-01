import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Handshake, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Geometric decorations */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-primary-foreground/10" />
      <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full border border-primary-foreground/5" />
      
      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Partner with CyberQuest
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            We welcome collaboration with academic institutions, industry partners, and 
            organizations committed to advancing cybersecurity education. Whether you're 
            interested in research alignment, student opportunities, or program development, 
            we'd love to connect.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <Mail className="mr-2 h-5 w-5" />
                Contact the Project Team
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                <Handshake className="mr-2 h-5 w-5" />
                Collaborate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
