// Example navigation data; you can import this from another file too
const navFooterLinksMain = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const FooterMainNav: React.FC = () => {
  return (
    <ul
      style={{
        display: "flex",
        gap: "20px",
        paddingLeft: 0,
        listStyle: "none",
        margin: "1rem 0 0 0",
      }}
    >
      {navFooterLinksMain.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            style={{ fontSize: "12px" }}
            className="text-white text-decoration-none hover-gold"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterMainNav;
