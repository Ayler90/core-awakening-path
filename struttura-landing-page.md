# Struttura Landing Page – Template OfficinaMM

Questo file descrive la struttura e il layout delle landing page OfficinaMM per la vendita/iscrizione a training e percorsi. Ogni sezione è descritta in modo generico, senza testo specifico, per poter essere riutilizzata come base per nuove landing page.

---

## Struttura generale

La landing page è una singola pagina a scorrimento verticale. Le sezioni si susseguono nell'ordine:

1. NavBar (fissa)
2. Hero Section
3. Hero Benefits Strip
4. Infinite Slider
5. Registration Section (form o CTA iscrizione)
6. Video Testimonials Section
7. Symptoms / Problem Section
8. Educational / Explainer Section
9. Benefits Section
10. Curriculum / Program Section
11. Teachers Section
12. Reviews Section
13. Bonus / Next Step Section
14. FAQ Section
15. Final CTA Section
16. Footer

---

## Sezioni

---

### 1. NavBar

**Scopo:** Navigazione fissa sempre visibile. Tiene presente il brand, mostra un countdown all'urgenza e facilita l'accesso al form.

**Layout:**
- Barra orizzontale fissa in cima (`fixed top-0 z-50`), altezza 64px
- Tre zone: logo (sinistra) / countdown (centro, solo desktop) / bottone CTA (destra)
- Su mobile: il countdown appare su una seconda riga sotto la barra principale
- Diventa opaca con ombra sottile allo scroll

**Elementi:**
- Logo brand (immagine)
- Countdown timer con etichetta testuale (giorni, ore, minuti, secondi) — opzionale
- Bottone CTA che porta all'ancora del form di iscrizione

---

### 2. Hero Section

**Scopo:** Prima impressione. Presenta il problema del target e la soluzione offerta. Obiettivo: fermare lo scroll e spingere verso il form.

**Layout:**
- Full-height (`min-h-screen`), sfondo bianco
- Griglia a due colonne su desktop, singola colonna su mobile
- Colonna sinistra: contenuto testuale e CTA
- Colonna destra: immagine visiva

**Elementi colonna sinistra:**
- Badge/pill colorato con etichetta breve (nome offerta + dettaglio)
- Titolo H1 grande (4xl–6xl) con parte in corsivo colorata
- Paragrafo che introduce il problema (empatico)
- Paragrafo che descrive la soluzione (cosa si ottiene, come, con chi)
- Due bottoni CTA affiancati: primario (ancora form) + secondario outline (ancora programma)
- Riga di micro-reassurance (es. "✓ Gratuito · ✓ Supporto · ✓ Nessuna carta")

**Elementi colonna destra:**
- Immagine principale in card arrotondata con ombra
- Floating card sovrapposta in basso a sinistra con testo di rinforzo breve

---

### 3. Hero Benefits Strip

**Scopo:** Rafforzare immediatamente i punti di forza chiave dell'offerta, subito sotto l'hero.

**Layout:**
- Sfondo bianco, padding verticale ridotto
- Griglia 2 colonne mobile / 4 colonne desktop
- Ogni item: icona tonda + testo breve

**Elementi:**
- 4 benefici sintetici: icona Lucide su sfondo rosso chiaro + testo bold

---

### 4. Infinite Slider

**Scopo:** Separatore visivo animato tra sezioni, comunicare parole chiave e attributi del prodotto.

**Layout:**
- Full-width, sfondo rosso brand
- Testo bianco animato che scorre in loop continuo verso sinistra
- Bordo sopra e sotto

**Elementi:**
- Lista di keyword/frasi brevi (es. benefici, dettagli, date) duplicate per effetto infinito

---

### 5. Registration Section

**Scopo:** Sezione di iscrizione principale. Alta conversione. Contiene il form (o il messaggio alternativo) e la foto dei teacher.

**Layout:**
- Sfondo esterno con gradiente caldo chiaro
- Card interna grande (`rounded-3xl`) con sfondo rosso brand
- Griglia a due colonne dentro la card: testo + form (sinistra) / immagine (destra)

**Elementi colonna sinistra:**
- Badge pill bianco semi-trasparente
- Titolo H2 bianco con parte in corsivo
- Paragrafo descrittivo dell'offerta
- Mini-griglia 2×2 con 4 dettagli chiave (icona + testo)
- Form di iscrizione (nome + email + checkbox consenso + bottone submit)
  - In alternativa: messaggio "Iscrizioni chiuse"
- Micro-testo di garanzia sotto il form (es. "gratuito, nessuna carta, disiscrizione libera")

**Elementi colonna destra:**
- Foto dei teacher in card con aspect-ratio `[4/5]`
- Floating card in basso a sinistra con nome e sottotitolo dei teacher

---

### 6. Video Testimonials Section

**Scopo:** Prova sociale tramite video testimonianze di partecipanti precedenti.

**Layout:**
- Sfondo bianco, padding solo in alto
- Titolo centrato
- Griglia 3 colonne di player video

**Elementi:**
- Titolo H2 centrato
- 3 embed YouTube in card arrotondate con bordo sottile e aspect-video

---

### 7. Symptoms / Problem Section

**Scopo:** Far riconoscere al lettore il proprio problema specifico. Aumentare l'identificazione con il target.

**Layout:**
- Sfondo bianco, padding standard
- Griglia a due colonne su desktop: lista problemi (sinistra) / immagine (destra)

**Elementi colonna sinistra:**
- Badge pill
- Titolo H2 con domanda di identificazione (parte corsiva colorata)
- Paragrafo introduttivo empatico
- Lista di 5–6 sintomi/problemi: ogni voce in card `rounded-xl border bg-card` con simbolo `◆` + titolo bold + descrizione
- Bottone CTA + micro-testo sotto

**Elementi colonna destra:**
- Immagine `aspect-[4/5]` in card arrotondata
- Floating card sovrapposta in basso a destra con dato sociale (es. numero di partecipanti)

---

### 8. Educational / Explainer Section

**Scopo:** Spiegare il meccanismo o il "perché" del problema in modo educativo. Aumenta la credibilità e la consapevolezza del lettore.

**Layout:**
- Sfondo crema calda
- Contenuto centrato in colonna singola, max-width stretto
- Badge + titolo centrati
- Stack verticale di blocchi di testo in card
- Card finale con CTA

**Elementi:**
- Badge pill centrato
- Titolo H2 grande con termine chiave in corsivo colorato
- Sottotitolo breve
- 2 card bianche con testo esplicativo lungo (`rounded-2xl p-6 border shadow-sm`)
- 1 card highlight rosso chiaro (sfondo `#AF2B4310`, bordo `#AF2B4330`) con titolo centrato e bottone CTA

---

### 9. Benefits Section

**Scopo:** Elenco dettagliato e concreto dei risultati/benefici che si ottengono con il prodotto.

**Layout:**
- Sfondo bianco, padding solo in alto
- Intestazione centrata
- Griglia 3 colonne, max-width 5xl
- CTA centrato sotto la griglia

**Elementi:**
- Titolo H2 con parte in corsivo
- Sottotitolo
- 6 card benefit su sfondo crema caldo: icona colorata (alternando colore primario e secondario) + titolo bold + testo descrittivo
- CTA pill sotto la griglia + micro-testo

---

### 10. Curriculum / Program Section

**Scopo:** Mostrare il programma dettagliato (es. contenuti giornalieri, moduli, lezioni).

**Layout:**
- Sfondo bianco, padding standard
- ID ancora `#programma`
- Intestazione centrata con badge
- Griglia 4 colonne, max-width 6xl
- CTA centrato sotto

**Elementi:**
- Badge pill + Titolo H2 + sottotitolo
- Card per ogni contenuto: thumbnail `aspect-video` con badge identificativo sovrapposto (pill rosso top-left) + titolo
- Hover: scale sull'immagine
- CTA pill dopo la griglia + micro-testo

---

### 11. Teachers Section

**Scopo:** Presentazione dei docenti/trainer per costruire fiducia e autorevolezza.

**Layout:**
- Sfondo crema calda, padding standard
- Intestazione centrata con badge
- Griglia 2 colonne, max-width 3xl

**Elementi:**
- Badge + Titolo H2 + sottotitolo
- Card per ogni insegnante (`rounded-2xl overflow-hidden border`):
  - Foto `aspect-[4/3]` object-top
  - Sezione testo con padding: nome (H3 bold) + ruolo (uppercase xs tracking-wide colorato) + lista qualifiche (con `◇`) + bio breve con bordo separatore
- CTA pill + micro-testo sotto la griglia

---

### 12. Reviews Section

**Scopo:** Prova sociale massiccia tramite screenshot di recensioni reali.

**Layout:**
- Sfondo bianco, padding standard
- Intestazione centrata
- Layout masonry `columns-2 sm:columns-3 lg:columns-4`
- Bottone "mostra altre" + lightbox al click

**Elementi:**
- Titolo H2 + testo introduttivo + 5 stelle colorate
- Griglia masonry di immagini in `rounded-xl border shadow-sm cursor-zoom-in`
- Mostra inizialmente n recensioni (es. 20), poi tutte al click del bottone
- Lightbox: overlay scuro full-screen + immagine scalata con Framer Motion + bottone chiudi

---

### 13. Bonus / Next Step Section

**Scopo:** Presentare il prodotto o percorso successivo. Serve come teaser per l'upsell naturale o come incentivo bonus.

**Layout:**
- Sfondo crema calda, padding standard
- Griglia 2 colonne, max-width 5xl
- Colonna sinistra: testo / Colonna destra: immagine + floating badge

**Elementi colonna sinistra:**
- Badge pill
- Titolo H2 con nome prodotto in corsivo colorato
- Paragrafo descrittivo
- Box highlight (sfondo `#AF2B4308`, bordo `#AF2B4325`) con titolo e descrizione del bonus
- Lista di 3 feature: icona in box colorato + titolo bold + testo xs

**Elementi colonna destra:**
- Immagine `rounded-2xl shadow-lg`
- Floating card in basso a destra

---

### 14. FAQ Section

**Scopo:** Rispondere alle obiezioni e domande frequenti per abbassare la barriera all'iscrizione.

**Layout:**
- Sfondo bianco, padding standard
- Intestazione centrata, max-width 2xl
- Stack verticale di accordion, max-width 2xl

**Elementi:**
- Titolo H2 con parte in corsivo + sottotitolo
- Ogni voce FAQ: card `rounded-xl border`
  - Header (bottone): domanda in font-semibold + chevron animato (ruota 180° quando aperto)
  - Corpo collassabile: risposta in testo sm muted
  - Bordo e sfondo dell'header cambiano colore quando la voce è aperta

---

### 15. Final CTA Section

**Scopo:** Ultima chiamata all'azione forte prima del footer. Chiude la pagina con una spinta definitiva.

**Layout:**
- Sfondo gradiente viola scuro
- Pattern puntini decorativi in overlay (`opacity-10`)
- Tutto il contenuto centrato, max-width 2xl

**Elementi:**
- Pill badge bianco semi-trasparente con icona
- Titolo H2 grande bianco con parte in corsivo
- Paragrafo bianco/80
- Riga di dettagli chiave inline (icone + testi)
- Bottone CTA bianco (testo viola)
- Micro-testo sotto

---

### 16. Footer

**Scopo:** Informazioni di contatto, legale e identità del brand.

**Layout:**
- `py-12 bg-background border-t`
- Max-width 5xl, flex row (desktop) / colonna (mobile)
- Logo a sinistra, spacer centrale, colonna contatti a destra
- Copyright centrato in fondo

**Elementi:**
- Logo brand
- Sezione contatti: titolo, nome studio, testo invito, email cliccabile, link Privacy Policy
- Copyright con anno

---

## Pagine di ringraziamento (post-iscrizione/acquisto)

Le pagine di ringraziamento sono pagine separate (es. `/grazie-iscrizione-*`) con struttura propria.

**Struttura:**

1. **Banner top** — barra colorata orizzontale con messaggio di conferma breve
2. **Hero ringraziamento** — sfondo gradiente caldo, icona check, titolo H1, testo di conferma e benvenuto, avviso email
3. **Sezione prossimi passi** — sfondo bianco/crema, titolo centrato, 3 step card numerate
4. **Firma** — blocco firma dei trainer

**Card step (layout interno):**
```
bg-background rounded-2xl border shadow-sm p-6 sm:p-8
flex items-start gap-5
  [numero circolare colorato w-12 h-12]
  [contenuto: titolo con icona + corpo testo + CTA opzionale]
```

**Step tipo:**
- Step 1 – Link al canale Telegram + bottone
- Step 2 – Informazioni sul percorso (durata, materiali, attrezzatura, date live, cartella Drive)
- Step 3 – Come contattare i teacher (Telegram + email)

---

## Principi generali di design della landing

- **Urgenza:** countdown in navbar, badge con data di inizio
- **Prova sociale:** numero partecipanti nelle edizioni precedenti, recensioni screenshot, video testimonianze
- **Fiducia:** sezione insegnanti con foto e bio, floating card con nomi
- **Chiarezza:** ogni sezione ha un titolo H2 + sottotitolo + CTA, mai sezioni senza uscita
- **Micro-reassurance:** sotto ogni CTA c'è una riga con "gratuito / nessuna carta / disiscrizione libera"
- **Ripetizione CTA:** il bottone di iscrizione appare in Hero, Benefits, Curriculum, Teachers, Explainer, Final CTA
- **Colore e contrasto:** sfondo alternato bianco/crema tra sezioni per separazione visiva senza bordi duri
