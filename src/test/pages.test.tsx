import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { describe, it, expect } from "vitest";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Outcomes from "@/pages/Outcomes";
import IntroToCybersecurity from "@/pages/IntroToCybersecurity";
import Cryptography from "@/pages/Cryptography";
import Milestones from "@/pages/Milestones";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <HelmetProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </HelmetProvider>,
  );
}

describe("Page smoke tests", () => {
  it("renders the Index page", () => {
    renderWithProviders(<Index />);
    expect(screen.getByText("Project Objectives")).toBeInTheDocument();
  });

  it("renders the About page", () => {
    renderWithProviders(<About />);
    expect(screen.getByText("What Is CyberQuest?")).toBeInTheDocument();
  });

  it("renders the Team page", () => {
    renderWithProviders(<Team />);
    expect(screen.getByText("Project Leadership and Research Team")).toBeInTheDocument();
  });

  it("renders the Outcomes page", () => {
    renderWithProviders(<Outcomes />);
    expect(screen.getByText("Curriculum and Educational Outcomes")).toBeInTheDocument();
  });

  it("renders the IntroToCybersecurity page", () => {
    renderWithProviders(<IntroToCybersecurity />);
    expect(screen.getByText("Introduction to Cybersecurity")).toBeInTheDocument();
  });

  it("renders the Cryptography page", () => {
    renderWithProviders(<Cryptography />);
    expect(screen.getByText("Cryptography")).toBeInTheDocument();
  });

  it("renders the Milestones page", () => {
    renderWithProviders(<Milestones />);
    expect(screen.getByText("Project Milestones")).toBeInTheDocument();
  });

  it("renders the News page", () => {
    renderWithProviders(<News />);
    expect(screen.getByText("News and Updates")).toBeInTheDocument();
  });

  it("renders the Contact page", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders the NotFound page", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Return to Home")).toBeInTheDocument();
  });
});
