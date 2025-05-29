
type TLink = {
  label: string;
  href: string;
};
export const navLinks: TLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Blog", href: "/blog" },
  // { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];


export const settingsLinks: TLink[] = [
  {
    label: "Logos",
    href: "/settings/logos"
  },

  { label: "Home", href: "/settings/home" },
  { label: "About", href: "/settings/about" },
  { label: "Services", href: "/settings/services" },
  { label: "Portfolios", href: "/settings/portfolios" },
  // { label: "Blog", href: "/settings/blog" },
  // { label: "Career", href: "/settings/career" },
  { label: "Contact", href: "/settings/contact" },
  {
    label: "Footer",
    href: "/settings/footer"
  },
]