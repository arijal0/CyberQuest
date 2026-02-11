export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Milestones", href: "/milestones" },
  { label: "News", href: "/news" },
];

/** Footer includes the Contact link that the Header renders separately as a CTA button. */
export const footerNavItems: NavItem[] = [...navItems, { label: "Contact", href: "/contact" }];
