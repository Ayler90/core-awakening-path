import { useState, useEffect, useRef } from "react";
import {
  Download, BookOpen, Users, ChevronDown,
  FileText, Compass, Heart, Zap, Eye, RotateCcw, Activity,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const RED = "#AF2B43";
const VIOLET = "#61438C";

// ─── Infinite Slider ──────────────────────────────────────────────────────────

const sliderItems = [
  "◆ Guida PDF gratuita",
  "◇ Video guidati inclusi",
  "◆ 7 passi per ritrovare il tuo corpo",
  "◇ Connessione · Consapevolezza · Sicurezza",
  "◆ Mini training gratuito via email",
  "◇ Pavimento pelvico · Respiro · Diastasi",
  "◆ Di Michela e Moreno",
  "◇ Ripartire davvero dalle basi",
  "◆ Mini training per email",
  "◇ Scaricabile subito",
];

const SliderStrip = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let animId: number;
    const animate = () => {
      pos -= 0.5;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...sliderItems, ...sliderItems];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-border" style={{ backgroundColor: RED }}>
      <div ref={trackRef} className="flex gap-0 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm font-semibold font-body text-white px-8 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── MailerLite Form ──────────────────────────────────────────────────────────

const MAILERLITE_CSS = `
.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}.g-recaptcha{transform:scale(1);-webkit-transform:scale(1);transform-origin:0 0;-webkit-transform-origin:0 0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#ffffff #ffffff #ffffff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}#mlb2-43222508.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}#mlb2-43222508.ml-form-embedContainer h4,#mlb2-43222508.ml-form-embedContainer p,#mlb2-43222508.ml-form-embedContainer span,#mlb2-43222508.ml-form-embedContainer button{text-transform:none!important;letter-spacing:normal!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper{background-color:transparent;border-width:0px;border-color:transparent;border-radius:5px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper.embedDefault{width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:100%;width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-align-left{text-align:left}#mlb2-43222508.ml-form-embedContainer .ml-form-align-center{text-align:center}#mlb2-43222508.ml-form-embedContainer .ml-form-align-default{display:table-cell!important;vertical-align:middle!important;text-align:center!important}#mlb2-43222508.ml-form-embedContainer .ml-form-align-right{text-align:right}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#000000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:30px;font-weight:400;margin:0 0 10px 0;text-align:left;word-break:break-word}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:#000000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin:0 0 10px 0;text-align:left}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child{margin:0}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{margin:0 0 20px 0;width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{float:left}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px 0;width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#ffffff!important;color:#333333!important;border-color:#cccccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin:0;padding:10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder{color:#333333}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder{color:#333333}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder{color:#333333}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{border-color:#cccccc!important;background-color:#ffffff!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type="checkbox"]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{border-radius:4px!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before{border-color:#000000!important;background-color:#000000!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after{top:2px;box-sizing:border-box}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after{top:0px!important;box-sizing:border-box!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#ffffff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after{position:absolute;top:2px!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#ffffff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after{position:absolute;top:0px!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after{background:no-repeat 50%/50% 50%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:#000000;font-size:12px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;line-height:22px;margin-bottom:0;position:relative;vertical-align:top;font-style:normal;font-weight:700}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px 0;float:left;width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#000000!important;border:none!important;border-radius:4px!important;box-shadow:none!important;color:#ffffff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#333333!important}.ml-error input,.ml-error textarea,.ml-error select{border-color:red!important}.ml-error .label-description,.ml-error .label-description p,.ml-error label:first-child{color:#ff0000!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p{color:#ff0000!important}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions{text-align:left;float:left;width:100%}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent{margin:0 0 15px 0;text-align:left}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p{color:#000000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;line-height:22px;margin:0 0 10px 0}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a{color:#000000;text-decoration:underline}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p:last-child{margin:0 0 15px 0}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:#000000;display:block;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;text-align:left;margin-bottom:0;position:relative;vertical-align:top}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label{font-weight:normal;margin:0;padding:0;position:relative;display:block;min-height:24px;padding-left:24px}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a{color:#000000;text-decoration:underline}#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p{color:#000000!important;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:normal!important;line-height:18px!important;padding:0!important;margin:0 5px 0 0!important}@media only screen and (max-width:400px){.ml-form-embedWrapper.embedDefault{width:100%!important}}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper{background-color:transparent!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody{padding:0!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:0!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:rgba(255,255,255,0.15)!important;border-color:rgba(255,255,255,0.35)!important;color:#ffffff!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder{color:rgba(255,255,255,0.65)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder{color:rgba(255,255,255,0.65)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder{color:rgba(255,255,255,0.65)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#ffffff!important;color:#AF2B43!important;border-radius:8px!important;font-size:15px!important;padding:14px!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:rgba(255,255,255,0.92)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p{color:rgba(255,255,255,0.7)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a{color:rgba(255,255,255,0.9)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:rgba(255,255,255,0.85)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p{color:rgba(255,255,255,0.85)!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#ffffff!important}
#mlb2-43222508.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:rgba(255,255,255,0.85)!important}
`;

const MAILERLITE_HTML = `
<div id="mlb2-43222508" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-43222508">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent" style=""></div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2229860/forms/191709364703200291/subscribe" data-code="" method="post" target="_blank">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow">
              <div class="ml-field-group ml-field-name ml-validate-required">
                <input aria-label="name" aria-required="true" type="text" class="form-control" name="fields[name]" placeholder="Inserisci il tuo Nome*" autocomplete="given-name">
              </div>
            </div>
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="Inserisci la tua Email*" autocomplete="email">
              </div>
            </div>
          </div>
          <div class="ml-form-embedPermissions">
            <div class="ml-form-embedPermissionsContent default privacy-policy">
              <p>Puoi disiscriverti quando vuoi e non ti invieremo SPAM. Leggi qui la <a href="https://www.officinamm.com/privacy" target="_blank">Privacy Policy</a>.</p>
            </div>
          </div>
          <div class="ml-form-checkboxRow ml-validate-required">
            <label class="checkbox">
              <input type="checkbox">
              <div class="label-description">
                <p>Voglio ricevere comunicazioni sulla guida e sul training gratuito*</p>
              </div>
            </label>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Voglio iscrivermi</button>
            <button disabled="disabled" style="display:none;" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display:none">
        <div class="ml-form-successContent">
          <h4>Perfetto!</h4>
          <p>Controlla la tua email: troverai la guida e le istruzioni per accedere al mini training.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const MailerLiteForm = () => {
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://assets.mlcdn.com/fonts.css?version=1782740";
    document.head.appendChild(fontLink);

    const style = document.createElement("style");
    style.textContent = MAILERLITE_CSS;
    document.head.appendChild(style);

    (window as any).ml_webform_success_43222508 = function () {
      try {
        window.top!.location.href =
          "https://core101.officinamm.com/hai-scaricato-guida-ritrovare-corpo-post-parto";
      } catch (e) {
        window.location.href =
          "https://core101.officinamm.com/hai-scaricato-guida-ritrovare-corpo-post-parto";
      }
    };

    fetch(
      "https://assets.mailerlite.com/jsonp/2229860/forms/191709364703200291/takel"
    ).catch(() => {});

    const script = document.createElement("script");
    script.src =
      "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";
    script.type = "text/javascript";
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (document.head.contains(script)) document.head.removeChild(script);
      delete (window as any).ml_webform_success_43222508;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MAILERLITE_HTML }} />;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const RitrovareCorpoPostParto = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-16">
      <NavBar
        showCountdown={false}
        ctaText="Scarica gratis →"
        ctaHref="#scarica"
        centerText={<>Per chi sta attraversando il <span style={{ color: "#AF2B43" }}>post parto</span> e desidera <span style={{ color: "#AF2B43" }}>ritrovare il proprio corpo</span>.</>}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div className="container mx-auto px-4 sm:px-6 pt-10 pb-20 lg:pt-14 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "18", borderColor: RED + "40", color: RED }}
              >
                ◆ Guida PDF gratuita · Con video-esercizi guidati
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-foreground mb-6">
                Dopo il parto il tuo corpo non risponde più come prima.{" "}
                <br className="hidden sm:block" />
                <span className="italic" style={{ color: RED }}>
                  Questa guida ti aiuta a ritrovarlo, passo dopo passo.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                Il pavimento pelvico che sembra sparito, l'addome che non senti più, la sensazione
                di non sapere come muoverti senza sbagliare qualcosa, e nessuno che ti spiega
                davvero da dove iniziare.
              </p>

              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                <strong className="text-foreground">7 passi per ritrovare il tuo corpo dopo il parto</strong> è
                una guida gratuita con video-esercizi guidati: un percorso concreto per imparare a sentire
                di nuovo pavimento pelvico e addome, capire cosa è cambiato e riprendere il controllo.
                Senza fretta e senza paura di sbagliare.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#scarica"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-white font-semibold font-body text-base shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  <Download className="w-4 h-4" />
                  Scarica la guida gratuita →
                </a>
                <a
                  href="#cosa-trovi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 font-semibold font-body text-base transition-all hover:bg-foreground/5"
                  style={{ borderColor: RED, color: RED }}
                >
                  Scopri i 7 passi ↓
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-5 font-body">
                ✓ PDF + video gratuiti · ✓ Scaricabile subito · ✓ Mini training per email
              </p>
            </div>

            <div className="relative">
              {/* Placeholder — sostituire con immagine reale */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] flex items-center justify-center"
                style={{ backgroundColor: RED + "10" }}
              >
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 mx-auto mb-3" style={{ color: RED + "60" }} />
                  <p className="text-sm font-body" style={{ color: RED + "80" }}>Immagine hero</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-border max-w-xs">
                <p className="text-sm font-bold font-display leading-snug" style={{ color: RED }}>
                  Una guida per ritrovare il tuo corpo dopo il parto. Senza giudizio e senza fretta.
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">Con l'aiuto di Michela e Moreno - Officina.MM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SLIDER ───────────────────────────────────────────────────────── */}
      <SliderStrip />

      {/* ─── DOWNLOAD SECTION ─────────────────────────────────────────────── */}
      <section
        id="scarica"
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(160deg, hsl(30 25% 97%), hsl(20 50% 94%))" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto"
            style={{ backgroundColor: RED }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.35)", color: "white" }}
                >
                  ◆ Guida PDF + video-esercizi guidati – gratis
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3 leading-tight">
                  Scarica gratis{" "}
                  <span className="italic">
                    7 passi per ritrovare il tuo corpo dopo il parto
                  </span>
                </h2>

                <p className="font-body leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                  7 passi pratici per riconnetterti al tuo corpo dopo il parto, comprendere cosa è
                  cambiato e iniziare a costruire, con gradualità, le basi del tuo recupero. Con
                  esercizi guidati da Michela, senza attrezzi, senza giudizio e da seguire al tuo ritmo.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: <FileText className="w-3.5 h-3.5" />, text: "PDF + video-esercizi guidati" },
                    { icon: <BookOpen className="w-3.5 h-3.5" />, text: "7 passi pratici" },
                    { icon: <Compass className="w-3.5 h-3.5" />, text: "Mini training per email" },
                    { icon: <Users className="w-3.5 h-3.5" />, text: "100% gratuito" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-body" style={{ color: "rgba(255,255,255,0.8)" }}>
                      <span style={{ color: "rgba(255,255,255,0.9)" }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>

                <MailerLiteForm />

                <p className="text-xs font-body mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  ✓ Completamente gratuita – ✓ PDF scaricabile – ✓ Mini training gratuito via email
                </p>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                  <img
                    src="https://static.wixstatic.com/media/40e4ee_19fed71ae15c4d6d8abe2d1d3ddb5356~mv2.jpg/v1/crop/x_218,y_399,w_1588,h_1521/fill/w_860,h_824,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Michela%20e%20Moreno%202.jpg"
                    alt="Michela e Moreno di Officina.MM"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -left-4 rounded-xl p-4 shadow-lg border"
                  style={{ backgroundColor: "hsl(30 25% 97%)", borderColor: RED + "20" }}
                >
                  <p className="font-bold font-display text-sm" style={{ color: RED }}>Michela & Moreno</p>
                  <p className="text-xs text-muted-foreground font-body">Officina.MM</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SYMPTOMS SECTION ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
              >
                ◆ Guida gratuita per il post parto
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Riconosci{" "}
                <span className="italic" style={{ color: RED }}>
                  qualcuna di queste situazioni?
                </span>
              </h2>

              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Se hai risposto "sì", sappi che non sei l'unica e non c'è niente di sbagliato in te.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Ti guardi la pancia e la senti diversa da prima",
                    desc: "Ti sembra cambiata, più morbida, meno reattiva. Ti chiedi se tornerà mai come prima. Provi a muoverti e ad attivare l'addome, ma fai fatica a percepire una risposta: è come se avessi perso il dialogo con quella parte del tuo corpo.",
                  },
                  {
                    title: "Hai qualche piccola perdita quando ridi, starnutisci o tossisci",
                    desc: "Poca cosa, ti dici. Ti hanno detto che è normale dopo un parto. Ma continua a succedere e dentro di te senti che non andrebbe ignorato.",
                  },
                  {
                    title: "Ti senti meno stabile nei movimenti di tutti i giorni",
                    desc: "Prendere in braccio il bambino, piegarti, alzarti dal divano, salire le scale… gesti che prima erano automatici e che ora possono richiedere più fatica, farti sentire meno stabile o meno sicura. E a volte sono accompagnati da fastidi o piccoli dolori.",
                  },
                  {
                    title: "Vorresti muoverti, ma hai paura di fare la cosa sbagliata",
                    desc: "Hai letto e sentito tante cose: diastasi, pavimento pelvico, esercizi da evitare, esercizi da fare. Hai paura che un esercizio sbagliato possa peggiorare la situazione o rallentare il recupero. E così, nel dubbio, resti ferma, in attesa di un segnale chiaro che sembra non arrivare mai.",
                  },
                  {
                    title: "Ti confronti con chi sembra essere già 'tornata come prima'",
                    desc: "Vedi post di mamme con super routine di allenamento a poche settimane dal parto, mentre tu stai ancora cercando di ritrovare il tuo corpo e capire come iniziare. E inevitabilmente ti chiedi perché per te sia così diverso. Quel confronto non ti aiuta, ma è difficile smettere di farlo.",
                  },
                  {
                    title: "Vorresti iniziare a prenderti cura di te, ma non sai da dove cominciare",
                    desc: "Tra la mancanza di sonno, l'allattamento, le attenzioni per il tuo bambino e mille consigli che si contraddicono, trovare un punto di partenza chiaro sembra impossibile. E così finisci per rimandare ancora.",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                    <span className="text-sm mt-0.5 shrink-0 font-bold" style={{ color: RED }}>◆</span>
                    <div>
                      <p className="font-semibold font-body text-foreground text-sm mb-0.5">{s.title}</p>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#scarica"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: RED }}
              >
                Scarica la guida gratuita →
              </a>
              <p className="text-xs text-muted-foreground font-body mt-3">
                ◇ PDF + video gratuiti – ◇ 7 passi pratici – ◇ Di Michela e Moreno, Officina.MM
              </p>
            </div>

            <div className="relative">
              {/* Placeholder — sostituire con immagine */}
              <div
                className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] flex items-center justify-center"
                style={{ backgroundColor: RED + "10" }}
              >
                <p className="text-sm font-body" style={{ color: RED + "80" }}>Immagine sezione</p>
              </div>
              <div
                className="absolute -bottom-5 -right-4 rounded-xl p-4 shadow-lg border border-white/20"
                style={{ backgroundColor: RED }}
              >
                <p className="text-white font-semibold font-body text-sm">Non tornare come prima.</p>
                <p className="text-white/80 font-body text-xs">Vai avanti, nel tuo corpo di adesso.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EDUCATIONAL SECTION ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 96%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-12">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
              >
                ◆ La verità che quasi nessuno dice
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Il recupero non inizia con gli esercizi.{" "}
                <span className="italic" style={{ color: RED }}>
                  Inizia con il tornare a sentire.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Prima ancora di rinforzare, allenare o "cercare di sistemare": c'è un passo fondamentale che quasi nessuno insegna.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
                <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                  Il tuo corpo ha appena fatto una delle cose più straordinarie che possa fare. L'addome si è allungato,
                  il pavimento pelvico è cambiato profondamente e ha sostenuto, e tutto il corpo si è adattato per
                  accompagnare la gravidanza e il parto.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Ora non ha bisogno solo di essere allenato. Ha bisogno, prima di tutto, di essere ascoltato.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Eppure è proprio questo il passaggio che quasi nessuno ti insegna. Si parla di rinforzare il core,
                  di tornare in forma, di esercizi per la diastasi. Ma prima ancora degli esercizi, c'è un bisogno
                  fondamentale: ritrovare la connessione con il tuo corpo.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                  Perché se fai fatica a percepire il pavimento pelvico, a sentire l'addome o a fidarti dei tuoi
                  movimenti, è difficile costruire un recupero che poggi su fondamenta solide.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
                <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                  Riconnettersi al proprio corpo significa, prima di tutto,{" "}
                  <em style={{ color: RED }}>ri-conoscerlo e tornare in relazione con parti di esso</em>{" "}
                  che dopo il parto possono sembrarti diverse, lontane, quasi estranee.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Significa osservare, comprendere e tornare a fidarti di certe sensazioni e movimenti;
                  tornare a percepire il pavimento pelvico, l'addome e quella connessione con il respiro
                  che li accompagna in ogni gesto quotidiano. Solo partendo da qui il recupero può
                  costruirsi su basi solide.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Ed è proprio da qui che inizia questa guida, accompagnandoti, un passo alla volta,
                  con video-esercizi e spiegazioni chiare.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 lg:p-8 border text-center"
                style={{ backgroundColor: RED + "10", borderColor: RED + "30" }}
              >
                <p className="text-foreground font-display font-bold text-xl mb-2">
                  Scarica gratis la guida.
                </p>
                <p className="text-muted-foreground font-body text-sm mb-5">
                  7 passi con video per ritrovare il contatto con il tuo corpo dopo il parto.
                </p>
                <a
                  href="#scarica"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  Scarica la guida gratuita →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BENEFITS SECTION ─────────────────────────────────────────────── */}
      <section className="pt-20 lg:pt-28 bg-background" id="cosa-trovi">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              Cosa cambia in{" "}
              <span className="italic" style={{ color: VIOLET }}>questi 7 passi</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Non esercizi a caso. Un percorso con una logica precisa: prima impari a sentire, poi a coordinare, poi a integrare nella vita di ogni giorno.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                color: RED,
                title: "Tornare a sentire il tuo corpo",
                text: "La consapevolezza corporea è il punto di partenza di tutto. Prima ancora di rinforzare, imparerai a riconnetterti: sentire cosa c'è, come risponde, cosa è cambiato.",
              },
              {
                icon: <Compass className="w-5 h-5" />,
                color: VIOLET,
                title: "Capire postura e schemi post parto",
                text: "Durante la gravidanza il corpo ha trovato nuovi equilibri, e dopo il parto questi schemi non spariscono da soli. Imparerai a ridare spazio e allineamento senza sforzo.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                color: RED,
                title: "Usare il respiro come alleato",
                text: "Il respiro è uno degli strumenti più potenti che hai. Quando torna funzionale, il pavimento pelvico si muove in modo più naturale, l'addome si attiva e le pressioni si gestiscono meglio.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                color: VIOLET,
                title: "Capire il pavimento pelvico davvero",
                text: "Non è solo 'stringere i kegel'. Il pavimento pelvico funziona bene quando è elastico e sa attivarsi e lasciar andare nel momento giusto. Imparerai a ritrovare il contatto con questa zona.",
              },
              {
                icon: <Activity className="w-5 h-5" />,
                color: RED,
                title: "Fare chiarezza sulla pancia e la diastasi",
                text: "Il recupero non passa dal fare di più, ma dal fare nel modo giusto. Imparerai come coinvolgere l'addome in modo sicuro ed efficace, senza forzare e senza paura.",
              },
              {
                icon: <RotateCcw className="w-5 h-5" />,
                color: VIOLET,
                title: "Portare il recupero nella vita reale",
                text: "Non vivi sul tappetino. Imparerai a integrare quello che hai imparato nei movimenti di ogni giorno: prendere in braccio, piegarti, camminare. In modo automatico e naturale.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: "hsl(30 20% 97%)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: b.color + "18", color: b.color }}
                >
                  {b.icon}
                </div>
                <h3 className="font-bold font-display text-base text-foreground leading-snug">{b.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              <Download className="w-4 h-4" />
              Scarica la guida gratuita →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ PDF + video gratuiti – ◇ 7 passi pratici – ◇ Di Michela e Moreno, Officina.MM
            </p>
          </div>

        </div>
      </section>

      {/* ─── CURRICULUM SECTION (7 passi) ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-4 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ Guida PDF + video-esercizi guidati – gratis
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              I 7 passi{" "}
              <span className="italic" style={{ color: RED }}>della guida</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ogni giorno un tema, un video e una pratica. Una progressione pensata per costruire
              basi solide, passo dopo passo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
            {[
              {
                num: "Giorno 1",
                title: "Tornare a sentire il tuo corpo",
                desc: "La riconnessione è la base di tutto. Prima ancora di allenare, impari a percepire e riconoscere il tuo corpo di adesso.",
              },
              {
                num: "Giorno 2",
                title: "Quel modo di stare nel corpo che è cambiato",
                desc: "Gli schemi posturali della gravidanza non spariscono da soli. Lavoriamo per ridare spazio e allineamento, senza sforzo.",
              },
              {
                num: "Giorno 3",
                title: "Il respiro che ti aiuta davvero",
                desc: "Quando il respiro torna funzionale, tutto cambia: il pavimento pelvico si muove meglio, l'addome si attiva, le pressioni si gestiscono.",
              },
              {
                num: "Giorno 4",
                title: "Il pavimento pelvico: quello che nessuno ti spiega",
                desc: "Non solo 'stringere'. Il pavimento pelvico funziona bene quando sa attivarsi e lasciar andare nel momento giusto. Iniziamo dal contatto.",
              },
              {
                num: "Giorno 5",
                title: "La pancia e la diastasi: fare chiarezza",
                desc: "Cosa sta succedendo davvero all'addome e come lavorarci in modo sicuro, efficace e rispettoso. Senza fretta e senza paura.",
              },
              {
                num: "Giorno 6",
                title: "Muoverti nella vita reale, non solo negli esercizi",
                desc: "Non si vive sul tappetino. Porti quello che hai imparato nei movimenti quotidiani: prendere in braccio, piegarti, camminare.",
              },
              {
                num: "Giorno 7",
                title: "Da dove riparti, davvero",
                desc: "Una routine completa che unisce tutto. E la direzione per continuare con metodo, progressione e la guida giusta.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border flex flex-col gap-3"
                style={{ borderColor: "hsl(30 20% 90%)", backgroundColor: "hsl(30 20% 97%)" }}
              >
                <span
                  className="text-xs font-bold font-body px-2.5 py-1 rounded-full self-start"
                  style={{ backgroundColor: RED + "15", color: RED }}
                >
                  {v.num}
                </span>
                <h3 className="font-bold font-display text-base text-foreground leading-snug">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              <Download className="w-4 h-4" />
              Scarica la guida gratuita →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ Gratuita – ◇ Scaricabile subito – ◇ Di Michela e Moreno, Officina.MM
            </p>
          </div>

        </div>
      </section>

      {/* ─── TEACHERS SECTION ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ Chi ha creato la guida
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              Ciao, siamo{" "}
              <span className="italic" style={{ color: RED }}>Michela e Moreno</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Lavoriamo ogni giorno con donne nel post parto e sappiamo quanto
              sia difficile orientarsi, e quanto faccia differenza avere una guida davvero competente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Michela",
                photo: "https://static.wixstatic.com/media/40e4ee_5975f0a365f8489185bace7f83a0dca2~mv2.jpg/v1/crop/x_0,y_60,w_960,h_1038/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Michi.jpg",
                role: "Esperta in Pavimento Pelvico e Core",
                bio: [
                  "Dott.ssa in Educazione Professionale ed Educazione Sessuale.",
                  "Personal Trainer esperta nel movimento in gravidanza e post parto.",
                ],
                desc: "Con passione e delicatezza, guido ogni persona nell'esplorazione del proprio corpo. So quanto sia difficile il post parto, e per questo creo uno spazio sicuro in cui ogni domanda è benvenuta e ogni passo è rispettato.",
              },
              {
                name: "Moreno",
                photo: "https://static.wixstatic.com/media/40e4ee_c1421113ec974ee187a7e6c7198798de~mv2.jpg/v1/crop/x_0,y_204,w_960,h_977/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Mori.jpg",
                role: "Infermiere e specialista in Movimento Funzionale",
                bio: [
                  "Dott. in Infermieristica esperto in Riabilitazione pelvi-perineale.",
                  "CrossTraining Coach esperto in gravidanza e post parto.",
                ],
                desc: "Porto chiarezza e competenza in ogni contenuto. Con un approccio professionale ma accessibile, accompagno negli esercizi pratici con attenzione al dettaglio e rispetto per il corpo.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: "hsl(30 20% 90%)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.photo}
                    alt={`Foto di ${t.name}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground">{t.name}</h3>
                    <p className="text-xs font-semibold font-body uppercase tracking-wide mt-0.5" style={{ color: RED }}>
                      {t.role}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {t.bio.map((line, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                        <span style={{ color: RED }} className="mt-0.5">◇</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p
                    className="text-sm font-body text-muted-foreground leading-relaxed border-t pt-3"
                    style={{ borderColor: "hsl(30 20% 92%)" }}
                  >
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              Scarica la guida gratuita →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ Gratuita – ◇ Scaricabile subito
            </p>
          </div>

        </div>
      </section>

      {/* ─── FAQ SECTION ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3 leading-tight">
              Domande{" "}
              <span className="italic" style={{ color: RED }}>frequenti</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Tutto quello che vuoi sapere prima di scaricare. E se hai altre domande, scrivici!
            </p>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {[
              {
                q: "È davvero gratuita?",
                a: "Sì, completamente. Ti iscrivi con nome e email, ricevi il PDF scaricabile e un mini training gratuito via email. Nessun costo nascosto.",
              },
              {
                q: "Per chi è questa guida?",
                a: "È pensata per chi è nel post parto, vicino o lontano dal giorno del parto, e si sente disconnessa dal proprio corpo, non sa da dove iniziare o vuole capire come ritrovare connessione e controllo in modo sicuro.",
              },
              {
                q: "Cosa trovo esattamente? Solo testo o ci sono anche gli esercizi?",
                a: "Ogni giorno ha una scheda scritta con spiegazioni chiare e un video con esercizi guidati da Michela. Non devi solo leggere: puoi seguire le pratiche video direttamente.",
              },
              {
                q: "Da quanti giorni dopo il parto posso iniziare?",
                a: "La guida è pensata per accompagnare il corpo nel post parto, in modo graduale e rispettoso. Puoi iniziarla sia nelle prime settimane dopo il parto, sia molto dopo: non è mai troppo tardi per ripartire dalle basi.",
              },
              {
                q: "Devo avere attrezzatura o esperienza con gli esercizi?",
                a: "No. Gli esercizi sono pensati per ripartire davvero dalle basi, senza attrezzi e senza esperienza previa. Ti basta uno spazio tranquillo e voglia di iniziare.",
              },
              {
                q: "Dopo i 7 passi, c'è un percorso per continuare?",
                a: (
                  <>
                    Sì. Al termine dei 7 passi troverai nella guida indicazioni su come continuare con un percorso
                    guidato e progressivo. Puoi anche scriverci a{" "}
                    <a href="mailto:ciao@officinamm.com" style={{ color: RED, textDecoration: "underline" }}>
                      ciao@officinamm.com
                    </a>{" "}
                    per qualsiasi domanda.
                  </>
                ),
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: openFaq === i ? RED + "40" : "hsl(30 20% 90%)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  style={{ backgroundColor: openFaq === i ? RED + "06" : "hsl(30 20% 97%)" }}
                >
                  <span className="font-semibold font-body text-sm text-foreground leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-300"
                    style={{ color: RED, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 pt-1 text-sm font-body text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4a4580 0%, #61438C 60%, #52398a 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body border border-white/30 text-white/80 mb-8">
              <Download className="w-3 h-3" />
              PDF + video-esercizi guidati – 100% gratuiti
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-6 leading-tight">
              Smetti di aspettare il momento giusto.{" "}
              <span className="italic">Il momento giusto è adesso.</span>
            </h2>

            <p className="text-white/80 font-body leading-relaxed mb-4 text-base sm:text-lg">
              7 passi per tornare a sentire il tuo corpo, capire cosa è cambiato
              e riprendere il controllo, con video-esercizi guidati da Michela e Moreno, gratis.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm font-body text-white/70">
              <span>◇ PDF + video gratuiti</span>
              <span className="text-white/30">·</span>
              <span>◇ 7 passi pratici</span>
              <span className="text-white/30">·</span>
              <span>◇ Di Michela e Moreno</span>
            </div>

            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "#4a4580" }}
            >
              <Download className="w-4 h-4" />
              Scarica la guida gratuita →
            </a>

            <p className="text-white/50 font-body text-xs mt-5">
              ◇ 100% gratuita – ◇ Mini training per email – ◇ Di Officina.MM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RitrovareCorpoPostParto;
