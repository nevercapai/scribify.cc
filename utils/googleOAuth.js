import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie.js";

export function injectGoogleScript(useHead) {
  useHead({
    script: [
      {
        src: "https://accounts.google.com/gsi/client",
        async: true
      }
    ]
  });
}
function getGoogleOAuthLanguage() {
  const googleOAuthLanguages = {
    "en-US": "en",
    "es-ES": "es",
    "it-IT": "it",
    "fr-FR": "fr",
    "de-DE": "de",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW",
    "ja-JP": "ja",
    "ko-KR": "ko",
    "nl-NL": "nl",
    "pl-PL": "pl",
    "da-DK": "da",
    "hu-HU": "hu",
    "no-NO": "no",
    "pt-PT": "pt",
    "fi-FI": "fi",
    "sv-SE": "sv",
    "ru-RU": "ru",
    "tr-TR": "tr",
    "el-GR": "el",
    "uk-UA": "uk",
    "he-IL": "iw",
    "ar-SA": "ar"
  };

  // 获取当前语言 - 支持多种方式
  let currentLocale = "en-US"; // 默认值

  if (typeof window !== "undefined" && window.localStorage) {
    const cookie = useCrossDomainCookie('i18n_localLanguage')
    currentLocale = cookie.value || "en-US";
  }

  return googleOAuthLanguages[currentLocale] || "en";
}

export function oauthSignUp() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var origin = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", origin);
  // form.setAttribute('target', '_blank');

  const config = useRuntimeConfig();
  let clientId = config.public.googleClientId;
  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    client_id: clientId,
    // client_id:
    //   "872836101862-ib5d3rffoeso3tm9h5evqrq4kodvqa1e.apps.googleusercontent.com",
    redirect_uri: `${window.location.origin}/googleAuthCallback`,
    response_type: "token",
    scope: "email profile",
    // scope: 'https://www.googleapis.com/auth/userinfo.email',
    // scope: 'https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    include_granted_scopes: "true",
    state: "GoogleState"
    // hl: getGoogleOAuthLanguage(),
    // prompt: 'consent'  // 强制显示同意屏幕
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
