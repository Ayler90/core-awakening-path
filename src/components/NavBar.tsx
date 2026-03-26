import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="font-display font-bold text-xl text-foreground">
          Officina<span style={{ color: "#bd4033" }}>MM</span>
        </div>
        <a
          href="#iscrizione"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold font-body text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#bd4033" }}
        >
          Voglio partecipare →
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
