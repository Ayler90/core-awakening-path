import { useEffect } from "react";

const FORM_HTML = `
<style type="text/css">@import url("https://assets.mlcdn.com/fonts.css?version=1774528");</style>
<style type="text/css">
.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}
.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#fff #fff #fff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}
@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
#mlb2-39140121.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}
#mlb2-39140121.ml-form-embedContainer h4,
#mlb2-39140121.ml-form-embedContainer p,
#mlb2-39140121.ml-form-embedContainer span,
#mlb2-39140121.ml-form-embedContainer button{text-transform:none!important;letter-spacing:normal!important}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper{background-color:transparent;border-width:0;border-color:transparent;border-radius:5px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:100%;width:100%}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child{margin:0}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent{margin:0 0 20px;width:100%}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px;width:100%}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin:0;padding:10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::placeholder{color:#999}
/* Checkbox personalizzata bianca */
#mlb2-39140121 .ml-form-checkboxRow input[type="checkbox"]{
  -webkit-appearance:none;appearance:none;
  width:16px!important;height:16px!important;min-width:16px!important;
  border:2px solid rgba(255,255,255,0.85)!important;
  border-radius:3px!important;
  background-color:transparent!important;
  cursor:pointer!important;
  position:relative!important;opacity:1!important;z-index:1!important;
  margin:2px 0 0 0!important;padding:0!important;
  box-sizing:border-box!important;flex-shrink:0!important;
}
#mlb2-39140121 .ml-form-checkboxRow input[type="checkbox"]:checked{
  background-color:#ffffff!important;border-color:#ffffff!important;
}
#mlb2-39140121 .ml-form-checkboxRow input[type="checkbox"]:checked::after{
  content:''!important;position:absolute!important;
  left:3px!important;top:0px!important;
  width:5px!important;height:9px!important;
  border:2px solid #bd4033!important;border-top:none!important;border-left:none!important;
  transform:rotate(45deg)!important;
}
#mlb2-39140121 .ml-form-checkboxRow .label-description{color:#fff;display:block;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;text-align:left;margin-bottom:0;position:relative;vertical-align:top}
#mlb2-39140121 .ml-form-checkboxRow label{font-weight:normal;margin:0;padding:0;position:relative;display:flex;align-items:flex-start;gap:8px;min-height:24px;cursor:pointer}
#mlb2-39140121 .ml-form-checkboxRow label p{color:#ffffff!important;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:normal!important;line-height:18px!important;padding:0!important;margin:0!important}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px;float:left;width:100%}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#F2E0DA!important;border:none!important;border-radius:50px!important;box-shadow:none!important;color:#bd4033!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:15px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:15px!important;width:100%!important;box-sizing:border-box!important;transition:box-shadow 0.25s ease,background-color 0.25s ease!important}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#e8cdc5!important;box-shadow:0 6px 24px rgba(189,64,51,0.25)!important}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions{text-align:left;float:left;width:100%}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent{margin:0 0 15px;text-align:left}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;line-height:22px;margin:0 0 10px}
#mlb2-39140121.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a{color:#000;text-decoration:underline}
.ml-error input,.ml-error textarea,.ml-error select{border-color:red!important}
.ml-error .label-description,.ml-error .label-description p,.ml-error label:first-child{color:#ffcccc!important}

/* ── Personalizzazioni OfficinaMM ── */
#mlb2-39140121 .ml-form-embedWrapper{background-color:transparent!important;border-radius:0!important;padding:0!important}
#mlb2-39140121 .ml-form-embedBody,
#mlb2-39140121 .ml-form-successBody{padding:0!important}
#mlb2-39140121 .ml-form-embedSubmit button.primary{background-color:#F2E0DA!important;color:#bd4033!important;font-size:15px!important;padding:15px!important;border-radius:50px!important;transition:box-shadow 0.25s ease,background-color 0.25s ease!important}
#mlb2-39140121 .ml-form-embedSubmit button.primary::after{content:' →';display:inline-block;transition:transform 0.25s ease}
#mlb2-39140121 .ml-form-embedSubmit button.primary:hover{background-color:#e8cdc5!important;box-shadow:0 6px 24px rgba(189,64,51,0.25)!important}
#mlb2-39140121 .ml-form-embedSubmit button.primary:hover::after{transform:translateX(5px)}
#mlb2-39140121 .ml-form-embedPermissionsContent p,
#mlb2-39140121 .ml-form-embedPermissionsContent p a{color:rgba(255,255,255,0.88)!important}
#mlb2-39140121 .ml-form-checkboxRow{margin-bottom:16px!important;float:left;width:100%}
</style>

<div id="mlb2-39140121" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-39140121">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent" style=""></div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2229860/forms/183260045405849430/subscribe" data-code="" method="post" target="_blank">
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
              <p>Puoi disiscriverti quando vuoi e non ti invieremo SPAM. Leggi qui la <span><a href="https://www.officinamm.com/privacy" target="_blank">Privacy Policy</a></span>.</p>
            </div>
          </div>
          <div class="ml-form-checkboxRow ml-validate-required">
            <label class="checkbox">
              <input type="checkbox" id="ml-checkbox-39140121">
              <div class="label-description">
                <p>Voglio ricevere comunicazioni relative al Training Live*</p>
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
          <h4>Grazie!</h4>
          <p>Ci vediamo il 20 aprile su Telegram.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

function setupCheckboxValidation() {
  const form = document.querySelector("#mlb2-39140121 .ml-block-form");
  if (!form) return;

  const checkbox = form.querySelector(
    '.ml-form-checkboxRow.ml-validate-required input[type="checkbox"]'
  ) as HTMLInputElement | null;

  if (checkbox) {
    checkbox.setCustomValidity("Devi accettare questa casella");
    checkbox.addEventListener("change", function (this: HTMLInputElement) {
      this.setCustomValidity(this.checked ? "" : "Devi accettare questa casella");
    });
  }

  // Intercept submit in capture phase (before MailerLite)
  form.addEventListener(
    "submit",
    (e) => {
      const cb = form.querySelector(
        '.ml-form-checkboxRow.ml-validate-required input[type="checkbox"]'
      ) as HTMLInputElement | null;
      if (cb && !cb.checked) {
        cb.setCustomValidity("Devi accettare questa casella");
        cb.reportValidity();
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    true
  );
}

const MailerLiteForm = () => {
  useEffect(() => {
    // Callback di successo
    (window as any).ml_webform_success_39140121 = function () {
      try {
        (window.top as Window).location.href =
          "https://core101.officinamm.com/grazie";
      } catch {
        window.location.href =
          "https://core101.officinamm.com/grazie";
      }
    };

    // Carica script MailerLite una sola volta
    if (!document.querySelector('script[src*="webforms.min.js"]')) {
      const script = document.createElement("script");
      script.src =
        "https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b";
      script.type = "text/javascript";
      script.onload = () => setTimeout(setupCheckboxValidation, 200);
      document.body.appendChild(script);
    } else {
      setTimeout(setupCheckboxValidation, 200);
    }

    fetch(
      "https://assets.mailerlite.com/jsonp/2229860/forms/183260045405849430/takel"
    );
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: FORM_HTML }} />;
};

export default MailerLiteForm;
