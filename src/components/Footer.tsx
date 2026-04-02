const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t" style={{ borderColor: "hsl(30 20% 90%)" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 max-w-5xl mx-auto">

          <div className="flex flex-col items-start gap-3">
            <img
              src="https://static.wixstatic.com/media/40e4ee_7aa4963c885049e4b63f3cfa4accce2a~mv2.png/v1/fill/w_102,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ese%20Logo%20Officina%20MM-educa%20allena%20riabilita_png%202.png"
              alt="Logo OfficinaMM"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex-1" />

          <div className="flex flex-col gap-2">
            <p className="font-bold font-display text-base" style={{ color: "#bd4033" }}>
              Contattaci
            </p>
            <p className="text-sm font-semibold font-body" style={{ color: "#bd4033" }}>
              Officina.MM
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Contattaci per prendere un appuntamento con noi
            </p>
            <a
              href="mailto:ciao@officinamm.com"
              className="text-sm font-body font-medium hover:underline"
              style={{ color: "#bd4033" }}
            >
              ciao@officinamm.com
            </a>
            <a
              href="https://www.officinamm.com/privacy"
              className="text-sm font-body underline mt-1"
              style={{ color: "#bd4033" }}
            >
              Privacy Policy
            </a>
          </div>

        </div>

        <p className="text-center text-xs text-muted-foreground font-body mt-10">
          © 2026 by Officina.MM, Michela Imperio e Moreno Resnati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
