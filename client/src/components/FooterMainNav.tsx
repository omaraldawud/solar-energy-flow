// Example navigation data; you can import this from another file too
const navFooterLinksMain = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/#solar-servicesces", label: "Services" },
  { href: "/free-solar-system-design", label: "Contact" },
];

const FooterMainNav: React.FC = () => {
  return (
    <ul
      style={{
        display: "flex",
        gap: "20px",
        paddingLeft: 0,
        listStyle: "none",
        margin: "0 0 0 0",
      }}
    >
      {navFooterLinksMain.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            style={{ fontSize: "12px" }}
            className="text-success text-decoration-none"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterMainNav;
