# Design System – OfficinaMM Landing Page

Questo file raccoglie tutti i token di design, stili grafici e pattern visivi usati nelle landing page OfficinaMM, in modo da poter replicare o creare nuove pagine in modo coerente.

---

## Tipografia

### Font

| Ruolo | Font family | CSS variable |
|---|---|---|
| Display (titoli) | Poppins | `--font-display: 'Poppins', system-ui, sans-serif` |
| Body (testo corrente) | DM Sans | `--font-body: 'DM Sans', system-ui, sans-serif` |
| Decorativo (disponibile) | Alloha | caricato via `@font-face` da Wix CDN |

### Caricamento font

- **Poppins**: Google Fonts
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
  ```
- **DM Sans**: Google Fonts (da aggiungere se non presente)
- **Alloha**: `@font-face` custom
  ```css
  @font-face {
    font-family: 'Alloha';
    src: url('https://static.wixstatic.com/ufonts/6c539d_b56be1517eb84409b763197dc5f08da3/woff2/file.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  ```

### Pesi font utilizzati

- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

### Dimensioni tipografiche

| Elemento | Classe Tailwind |
|---|---|
| Titolo H1 principale | `text-4xl sm:text-5xl lg:text-6xl` |
| Titolo H2 sezione standard | `text-3xl sm:text-4xl` |
| Titolo H2 sezione grande | `text-3xl sm:text-4xl lg:text-5xl` |
| Titolo H3 card | `text-lg` o `text-base` |
| Paragrafo lead | `text-lg` |
| Paragrafo standard | `text-base` |
| Testo small | `text-sm` |
| Testo extra small / badge / micro | `text-xs` |

### Altezze riga

- `leading-tight` — titoli
- `leading-relaxed` — paragrafi e testo corpo
- `leading-snug` — intestazioni di card

### Usi specifici di font

- `font-display` su tutti gli `h1–h6`, titoli card, numeri di step, nomi insegnanti
- `font-body` su paragrafi, bottoni, badge, label, micro-testi
- Parti in **corsivo** dei titoli: `<span className="italic" style={{ color: "#AF2B43" }}>`

---

## Palette colori

### Colori brand principali

| Nome | Hex | Utilizzo |
|---|---|---|
| Rosso OfficinaMM | `#AF2B43` | Colore primario: CTA, badge, bordi accent, icone, titoli accent |
| Viola OfficinaMM | `#61438C` | Colore secondario: variante benefit cards, gradiente Final CTA, testo bottone submit form |
| Giallo form (MailerLite) | `#FAB72D` | Bottone submit del form MailerLite |

### Varianti del rosso per sfondi e bordi

| Utilizzo | Valore |
|---|---|
| Sfondo badge / pill leggero | `#AF2B4312` o `#AF2B4318` |
| Bordo badge | `#AF2B4330` o `#AF2B4340` |
| Sfondo card highlight molto leggero | `#AF2B4308` o `#AF2B4310` |
| Bordo card highlight | `#AF2B4320` o `#AF2B4325` |
| Sfondo bottone FAQ aperto | `#AF2B4306` |
| Sfondo icona tonda | `#AF2B4315` |

### Colori semantici (Tailwind CSS variables – HSL)

| Token Tailwind | Valore HSL | Note |
|---|---|---|
| `background` | `0 0% 100%` | Bianco puro |
| `foreground` | `250 15% 15%` | Testo principale scuro |
| `muted-foreground` | `250 8% 45%` | Testo secondario grigio |
| `card` | `250 10% 97%` | Sfondo card grigio caldo |
| `border` | `250 10% 86%` | Bordo default |
| `muted` | `250 10% 92%` | Sfondo muted |

### Sfondi sezione ricorrenti

| Contesto | Valore |
|---|---|
| Sezione su bianco puro | `background: "#ffffff"` o `bg-background` |
| Sezione su crema calda | `backgroundColor: "hsl(30 25% 97%)"` o `hsl(30 25% 96%)` |
| Card content su crema | `backgroundColor: "hsl(30 20% 97%)"` |
| Bordo sezioni crema | `hsl(30 20% 90%)` |
| Sezione iscrizione (card rossa) | `backgroundColor: "#AF2B43"` |
| Wrapper iscrizione (gradiente) | `linear-gradient(160deg, hsl(30 25% 97%), hsl(20 50% 94%))` |
| Final CTA (gradiente viola) | `linear-gradient(135deg, #4a4580 0%, #61438C 60%, #52398a 100%)` |

---

## Spaziatura

### Padding verticale sezioni

| Tipo | Classi |
|---|---|
| Sezione standard | `py-20 lg:py-28` |
| Sezione hero | `pt-8 pb-20 lg:pt-12 lg:pb-28` |
| Sezione Final CTA grande | `py-24 lg:py-32` |
| Strip benefits (hero) | `py-6` |
| Infinite slider | `py-4` |
| Video testimonials (solo top) | `pt-16 lg:pt-20` |
| Benefits section (solo top) | `pt-20 lg:pt-28` |

### Padding container e card

- Container principale: `px-4 sm:px-6`
- Card standard: `p-6` o `p-4`
- Card grande: `p-6 sm:p-8` o `p-8 lg:p-12`
- Card insegnanti: `p-7`

### Gap tra elementi

| Contesto | Valore |
|---|---|
| Griglia card principale | `gap-5` o `gap-6` o `gap-8` |
| Flex colonna step/lista | `gap-3` o `gap-4` o `gap-6` |
| Hero cols | `gap-12 lg:gap-16` o `gap-12 lg:gap-20` |
| Stack FAQ | `gap-3` |
| Bottoni hero | `gap-3` |

---

## Border radius

| Elemento | Classe |
|---|---|
| Card principali / immagini | `rounded-2xl` |
| Card piccole, FAQ, floating | `rounded-xl` |
| Container grande iscrizione | `rounded-3xl` |
| Bottoni standard | `rounded-lg` |
| Bottoni pill / CTA secondari | `rounded-full` |
| Icone circolari | `rounded-full` |
| Icone quadrate | `rounded-xl` |
| Badge / pill | `rounded-full` |

---

## Ombre

| Utilizzo | Classe / valore |
|---|---|
| Card standard | `shadow-sm` |
| Card importante / immagini hero | `shadow-lg` |
| Floating card su immagine | `shadow-md` o `shadow-lg` |
| Custom warm shadow | `0 8px 30px -8px hsl(250 22% 46% / 0.2)` |
| Custom card shadow | `0 4px 20px -4px hsl(250 15% 15% / 0.08)` |
| Form submit hover | `0 6px 24px rgba(250,183,45,0.4)` |

---

## Bordi

| Utilizzo | Valore |
|---|---|
| Card standard | `border-border` → `hsl(30 20% 90%)` in contesti crema |
| Card highlight accent | `borderColor: "#AF2B4325"` – `"#AF2B4340"` |
| Slider / barra animata | `border-y border-border` |
| Bottone outline | `border-2` con `borderColor: "#AF2B43"` |
| FAQ item attivo | `borderColor: "#AF2B4340"` |
| Floating card su sfondo bianco | `border border-border` |
| Floating card su sfondo rosso | `border border-white/20` |

---

## Bottoni

### Primario – solido rosso
```
px-7 py-3.5 | rounded-lg | backgroundColor: "#AF2B43" | text-white
font-semibold font-body | shadow-sm | hover:opacity-90 transition-all
```

### Primario variante – pill
```
px-7 py-3.5 | rounded-full | backgroundColor: "#AF2B43" | text-white
font-semibold font-body text-sm | hover:opacity-90 transition-opacity
```

### Primario grande – hero
```
px-7 py-4 | rounded-lg | backgroundColor: "#AF2B43" | text-white
font-semibold font-body text-base | shadow-sm | hover:opacity-90 transition-all
```

### Secondario – outline rosso
```
px-6 py-4 | rounded-lg | border-2 borderColor: "#AF2B43" | color: "#AF2B43"
font-semibold font-body text-base | hover:bg-foreground/5 transition-all
```

### Secondario – outline pill
```
px-7 py-3.5 | rounded-full | border-2 borderColor: "#AF2B43" | color: "#AF2B43"
font-semibold font-body text-sm | hover:opacity-80 transition-all
```

### Final CTA – bianco su viola
```
px-8 py-4 | rounded-full | bg-white | color: "#4a4580"
font-bold font-body text-base | hover:opacity-90 transition-opacity
```

### Form submit – MailerLite
```
background-color: #FAB72D | color: #61438C | border-radius: 50px
font-size: 15px | font-weight: 700 | padding: 15px | width: 100%
hover: background-color #e9a520 + box-shadow 0 6px 24px rgba(250,183,45,0.4)
```

---

## Layout e container

### Container base
```
container mx-auto px-4 sm:px-6
```

### Max-width tipici

| Contesto | Max-width |
|---|---|
| Intestazione sezione centrata | `max-w-2xl mx-auto` |
| Card grid standard | `max-w-5xl mx-auto` |
| Card grid curriculum | `max-w-6xl mx-auto` |
| Container iscrizione | `max-w-5xl mx-auto` |
| Pagine thank-you / editorial | `max-w-3xl` |
| FAQ accordion | `max-w-2xl mx-auto` |
| Educational block centrato | `max-w-3xl mx-auto` |

### Griglie ricorrenti

| Layout | Classi |
|---|---|
| 2 colonne (hero / iscrizione / bonus) | `grid lg:grid-cols-2 gap-12 lg:gap-16 items-center` |
| 2 colonne più spaziose | `grid lg:grid-cols-2 gap-12 lg:gap-20 items-center` |
| 2 colonne insegnanti | `grid sm:grid-cols-2 gap-8` |
| 3 colonne benefit | `grid sm:grid-cols-2 lg:grid-cols-3 gap-5` |
| 4 colonne curriculum | `grid sm:grid-cols-2 lg:grid-cols-4 gap-5` |
| 4 colonne hero benefits | `grid grid-cols-2 lg:grid-cols-4 gap-6` |
| 3 colonne video | `grid sm:grid-cols-3 gap-5` |
| Masonry recensioni | `columns-2 sm:columns-3 lg:columns-4 gap-4` |

---

## Badge / Pill label

### Pattern standard su sfondo chiaro
```
inline-flex items-center gap-1.5 px-3 py-1 rounded-full
text-xs font-semibold font-body border
backgroundColor: "#AF2B4312"
borderColor: "#AF2B4330"
color: "#AF2B43"
```

### Variante su sfondo rosso (sezione iscrizione)
```
backgroundColor: "rgba(255,255,255,0.15)"
borderColor: "rgba(255,255,255,0.35)"
color: white
```

### Simboli decorativi
- `◆` — badge, elementi primari
- `◇` — liste, sub-item, micro-testi
- `·` — separatori inline

---

## Immagini

### Logo brand
```
https://static.wixstatic.com/media/40e4ee_3fabf91ebc5d418ca1c0be0173f4b3f9~mv2.png
NavBar: h-10 w-auto object-contain
Footer: h-16 w-auto object-contain
```

### Immagini contenuto (CDN Wix)

| Sezione | URL immagine | Aspect ratio / note |
|---|---|---|
| Hero illustrazione | `40e4ee_c8cad788f7294407857ed26ec7565041~mv2.png` | Libero, `rounded-2xl shadow-lg` |
| Sezione sintomi | `40e4ee_822cffa15d0e49e990d1543d64c91a9c~mv2.png` | `aspect-[4/5]` |
| Insegnante Michela | `40e4ee_5975f0a365f8489185bace7f83a0dca2~mv2.jpg` | `aspect-[4/3] object-top` |
| Insegnante Moreno | `40e4ee_c1421113ec974ee187a7e6c7198798de~mv2.jpg` | `aspect-[4/3] object-top` |
| Sezione iscrizione | `40e4ee_19fed71ae15c4d6d8abe2d1d3ddb5356~mv2.jpg` | `aspect-[4/5]` |
| Bonus/next step | `40e4ee_9447390c95e64e6580b911076248d791~mv2.jpg` | Libero |

### Pattern floating card su immagine
```
absolute -bottom-4/-5 -left-4 (o -right-4)
bg-background/95 backdrop-blur-sm (o sfondo crema)
rounded-xl p-4 shadow-md/lg border border-border
```

### Thumbnail curriculum
- Ogni card: `aspect-video` con `object-cover`
- Hover: `transition-transform duration-500 group-hover:scale-105`
- Badge giorno: `absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-semibold text-white` su sfondo rosso

---

## Card e contenitori

### Card standard (sfondo bianco)
```
rounded-2xl | border border-border | bg-background | shadow-sm | p-6 o p-4
```

### Card su sfondo crema
```
rounded-2xl | border (hsl 30 20% 90%) | bg white | overflow-hidden
```

### Card benefit (sfondo crema caldo)
```
rounded-2xl | p-6 | flex flex-col gap-4
backgroundColor: "hsl(30 20% 97%)"
```

### Card highlight (sfondo rosso leggero)
```
rounded-xl | p-4 o p-5
backgroundColor: "#AF2B4308" o "#AF2B4310"
borderColor: "#AF2B4325"
```

### Card FAQ (accordion)
```
rounded-xl border overflow-hidden
borderColor (default): "hsl(30 20% 90%)"
borderColor (aperta): "#AF2B4340"
sfondo header (default): "hsl(30 20% 97%)"
sfondo header (aperta): "#AF2B4306"
```

### Card passo (pagine thank-you)
```
bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8
Layout interno: flex items-start gap-5
Numero step: w-12 h-12 rounded-full bg #AF2B43 text-white font-bold text-lg
```

---

## Navbar

- `fixed top-0 left-0 right-0 z-50`
- Altezza: `h-16`
- Sfondo: `bg-white` sempre; allo scroll aggiunge `shadow-sm border-b border-border`
- Struttura tre zone: `[logo] [countdown] [CTA]`
- Logo: sinistra, `flex-1`
- Countdown: centro, `hidden sm:flex flex-col items-center flex-1`
- CTA: destra, `flex-1 flex justify-end`
- Mobile: seconda riga `sm:hidden flex flex-col items-center py-2`
- Testo countdown: `text-[11px] text-muted-foreground` + `text-sm font-bold tabular-nums` color `#AF2B43`
- Main ha `pt-28 sm:pt-16` per compensare la navbar fissa

---

## Footer

- `py-12 bg-background border-t` (bordo `hsl(30 20% 90%)`)
- Container `max-w-5xl mx-auto`
- Layout: `flex flex-col sm:flex-row items-start justify-between gap-10`
- Logo a sinistra (h-16)
- Spacer `flex-1` al centro
- Colonna contatti a destra: titolo bold rosso + nome + testo + email link + link Privacy Policy
- Copyright: `text-center text-xs text-muted-foreground font-body mt-10`

---

## Animazioni e transizioni

| Elemento | Comportamento |
|---|---|
| Tutti i bottoni | `transition-all hover:opacity-90` |
| Bottoni pill CTA | `transition-opacity hover:opacity-90` |
| Thumbnail curriculum hover | `transition-transform duration-500 group-hover:scale-105` |
| FAQ chevron | `transition-transform duration-300` – rotate 0° / 180° |
| Lightbox recensioni (Framer Motion) | `opacity 0→1`, `scale 0.9→1`, duration 0.2s |
| Infinite slider | `requestAnimationFrame` a 0.5px/frame, CSS `will-change-transform` |
| Pattern decorativo Final CTA | `radial-gradient` dots overlay con `opacity-10` |

---

## Librerie

| Libreria | Versione / utilizzo |
|---|---|
| Tailwind CSS | Utility-first, con custom tokens in `:root` |
| Lucide React | Icone SVG (Video, MessageCircle, Calendar, Users, Send, Droplets, Weight, CircleDashed, Zap, Heart, Eye, Star, X, ChevronDown, FolderOpen, CheckCircle2, Mail, CalendarDays) |
| Framer Motion | `AnimatePresence` + `motion.div/img` per lightbox recensioni |
| shadcn/ui | Componenti base disponibili ma non usati nelle sezioni principali |

---

## CSS Custom properties (`:root`)

```css
--background: 0 0% 100%;
--foreground: 250 15% 15%;
--card: 250 10% 97%;
--muted: 250 10% 92%;
--muted-foreground: 250 8% 45%;
--border: 250 10% 86%;
--radius: 0.75rem;

--font-display: 'Poppins', system-ui, sans-serif;
--font-body: 'DM Sans', system-ui, sans-serif;

--gradient-hero: linear-gradient(160deg, hsl(0 0% 100%), hsl(250 15% 97%), hsl(250 22% 93%));
--gradient-cta: linear-gradient(135deg, hsl(250 22% 46%), hsl(250 22% 36%));
--shadow-warm: 0 8px 30px -8px hsl(250 22% 46% / 0.2);
--shadow-card: 0 4px 20px -4px hsl(250 15% 15% / 0.08);
```

---

## Note rapide di implementazione

- Il colore rosso `#AF2B43` viene spesso usato direttamente come `style={{ color/backgroundColor }}` in React/Tailwind per precisione.
- Le opacità hex si aggiungono come suffisso a 2 cifre: es. `#AF2B4318` = 9% opacità.
- I font si applicano con le classi utility `font-display` e `font-body`.
- Tutti i link CTA interni puntano ad `#iscrizione` (anchor della sezione form).
- Il link Programma punta a `#programma` (anchor CurriculumSection).
- Le immagini usano `loading="lazy"` tranne quella hero (`loading="eager"`).
- La navbar è `fixed`, quindi il `<main>` ha `pt-28 sm:pt-16`.
