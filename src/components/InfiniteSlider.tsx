import { useEffect, useRef } from "react";

const items = [
  "◆ Inizia il 20 aprile",
  "◇ 14 video in 2 settimane",
  "◆ Canale Telegram dedicato",
  "◇ 10 minuti al giorno",
  "◆ 100% gratuito",
  "◇ +300 iscrittə",
  "◆ Nessuna carta richiesta",
  "◇ Per donnə nel post parto e non solo",
  "◆ Esercizi guidati dal vivo",
  "◇ Pavimento pelvico · Diastasi · Core profondo",
];

const InfiniteSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    const speed = 0.5;
    let animId: number;

    const animate = () => {
      pos -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden py-4 border-y border-border"
      style={{ backgroundColor: "#bd4033" }}
    >
      <div
        ref={trackRef}
        className="flex gap-0 whitespace-nowrap will-change-transform"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-sm font-semibold font-body text-white px-8 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
