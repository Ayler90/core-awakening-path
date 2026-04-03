import { useState, useEffect } from "react";

const TARGET = new Date("2026-04-19T23:59:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

interface NavBarProps {
  showCountdown?: boolean;
}

const NavBar = ({ showCountdown = false }: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showCountdown) return;
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [showCountdown]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-border"
          : "bg-white"
      }`}
    >
      {/* Riga principale */}
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center">
        {/* Logo - sinistra */}
        <div className={`font-display font-bold text-xl text-foreground ${showCountdown ? "flex-1" : ""}`}>
          <img
            src="https://static.wixstatic.com/media/40e4ee_3fabf91ebc5d418ca1c0be0173f4b3f9~mv2.png"
            alt="Officina.MM"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Countdown - centro (solo desktop, solo se showCountdown) */}
        {showCountdown && timeLeft && (
          <div className="hidden sm:flex flex-col items-center flex-1">
            <span className="text-[11px] text-muted-foreground font-body leading-none mb-0.5">
              Il training inizia tra
            </span>
            <span className="text-sm font-bold font-body tabular-nums" style={{ color: "#AF2B43" }}>
              {timeLeft.days}g {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
            </span>
          </div>
        )}

        {/* CTA - destra */}
        <div className={`${showCountdown ? "flex-1" : ""} flex justify-end`}>
          <a
            href="#iscrizione"
            className="px-3 py-2 rounded-lg text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold font-body text-white transition-all hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#AF2B43" }}
          >
            Voglio partecipare →
          </a>
        </div>
      </div>

      {/* Countdown - seconda riga mobile (solo se showCountdown) */}
      {showCountdown && timeLeft && (
        <div className="sm:hidden flex flex-col items-center py-2">
          <span className="text-[11px] text-muted-foreground font-body leading-none mb-0.5">
            Il training inizia tra
          </span>
          <span className="text-sm font-bold font-body tabular-nums" style={{ color: "#AF2B43" }}>
            {timeLeft.days}g {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
          </span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
