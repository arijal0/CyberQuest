import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="w-full px-4" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-accent"
          >
            <img src="/logo.png" alt="CyberQuest logo" className="h-10 w-10 shrink-0" />
            <span>CyberQuest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={item.href === "/" ? handleHomeClick : undefined}
              >
                <Button variant="nav" size="sm">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="navPrimary" size="sm">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="space-y-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => {
                    if (item.href === "/") {
                      handleHomeClick();
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="navPrimary" className="w-full">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
