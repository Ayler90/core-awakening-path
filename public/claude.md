# Contesto Progetto – OfficinaMM / CORE 101

## Stack
- React + TypeScript + Vite
- Tailwind CSS con tema custom (terracotta, sage, warm-peach)
- shadcn/ui + framer-motion
- Deploy: Netlify (auto-deploy su push a main)

## Struttura pagina (src/pages/Index.tsx)
HeroSection → AwarenessSection → BenefitsSection → TargetSection →
CurriculumSection → VideoPreviewSection → TeachersSection →
ReviewsSection → BonusSection → FaqSection → FinalCtaSection

## Progetto
Landing page opt-in per CORE 101 — training gratuito 14 giorni su Telegram
sul pavimento pelvico post parto. Gestito da Michela e Moreno (OfficinaMM).

## Cliente ideale
Donne post parto con sintomi: perdite urina, diastasi, prolasso, 
disconnessione corpo. Livello consapevolezza basso-medio.
Non sa cosa sia il pavimento pelvico, arriva quando ha sintomi.

## Tono contenuti
Empatico, caldo, diretto. Mai medico-freddo. 
Italiano. Font display = Playfair Display (serif), body = DM Sans.

## Problemi principali audience
1. Perdite urina involontarie
2. Diastasi addominale post parto
3. Pesantezza/prolasso
4. Non sa come iniziare il recupero
5. Disconnessione dal corpo
6. Mancanza di tempo e senso di colpa
7. Sovraccarico di info online

## Falsi miti da sfatare nei contenuti
- "Dopo il parto è normale, devi conviverci"
- "Basta fare Kegel"
- "Alla visita dei 40 giorni era tutto ok"
- "Se mi impegno torno come prima"

## Note tecniche
- GitHub collegato a Netlify → push su main = deploy automatico
- Modifiche hero: src/components/HeroSection.tsx
- Colori primary = terracotta hsl(15 55% 52%), secondary = sage
