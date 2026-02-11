import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { footerNavItems } from "@/data/navigation";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <img src="/logo.png" alt="CyberQuest logo" className="h-9 w-9 shrink-0" />
              <span>CyberQuest</span>
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              An NSF-funded Targeted Infusion Project building cybersecurity education at Fisk
              University through curriculum innovation and experiential learning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  CyberQuest Project Team
                  <br />
                  Department of Computer Science
                  <br />
                  Fisk University
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="mailto:nzhang@fisk.edu"
                  className="transition-colors hover:text-accent"
                  title="Project contact email"
                >
                  nzhang@fisk.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* NSF Disclaimer */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong>NSF Disclaimer:</strong> This material is based upon work supported by the
            National Science Foundation. Any opinions, findings, and conclusions or recommendations
            expressed are those of the project team and do not necessarily reflect the views of the
            National Science Foundation.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CyberQuest at Fisk University. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">NSF-Funded Targeted Infusion Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
