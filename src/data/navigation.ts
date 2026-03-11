export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Objectives", href: "/objectives" },
  { label: "About", href: "/about" },
];

/** Footer includes the Contact link that the Header renders separately as a CTA button. */
export const footerNavItems: NavItem[] = [...navItems, { label: "Contact", href: "/contact" }];
