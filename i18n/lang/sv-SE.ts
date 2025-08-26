// 瑞典语
let message = {
  // Startsida
  HomePage: {
    home: "Alla Transkriptioner",
    times: "{times} gratis transkriptioner per dag, {left} kvar idag. ",
    tips: "Uppgradera till Pro för obegränsade transkriptioner.",
    update: "Uppgradera nu",
    rename: "Byt namn",
    delete: "Radera",
    cancel: "Avbryt",
    confirm: "Skapa",
    dialogLabel: "Mappnamn",
    recently: "Senaste filer",
    loading: "Laddar",
    tour: {
      step0: {
        title: "Välkommen till {name}",
        tip: "Här kan du:",
        content: "Transkribera samtal, möten, föreläsningar och mer",
        next: "Kom igång"
      },
      step1: {
        title: "Transkribera filer",
        content:
          "Stöder tre transkriptionsmetoder: lokala filer, länkar och inspelningar."
      },
      step2: {
        title: "Skapa mappar",
        content: 'Klicka på "+" för att skapa mappar och organisera dina filer.'
      },
      step3: {
        title: "Visa och redigera transkriptioner",
        content:
          "Klicka på ett objekt för att visa och redigera transkriptionsdetaljer, du kan också översätta det."
      },
      next: "Nästa",
      finish: "Jag förstår"
    },
    export: {
      export: "Exportera",
      title: "Vi skapar din exportfil",
      title2: "Din fil är redo",
      singleLoadingContent: "Komprimerar 1 fil.",
      singleSuccessContent: "1 fil komprimerad.",
      loadingContent: "Komprimerar {num} filer.",
      successContent: "{num} filer komprimerade.",
      cancel: "Avbryt export",
      error: "Exportfel",
      dialog: {
        title: "Varning",
        content: "Avbryt export?",
        cancel: "Avbryt export",
        continue: "Fortsätt exportera"
      }
    },
    welcome: {
      title: "Välkommen till Scribify!",
      description: "Här kan du:",
      transcribe:
        "Transkribera utan ansträngning med Scribify—förvandla röstsamtal till tydlig, sökbar och delbar text på ett ögonblick.",
      precision:
        "Få exakta transkriptioner med talaridentifiering och tidsstämplar omedelbart.",
      translate:
        "Bryt språkbarriärer: översätt transkriptioner till mer än 200 språk med lätthet.",
      edit: "Redigera, förfina och exportera dina transkriptioner i format som passar dina behov.",
      collaborate:
        "Samarbeta genom att dela din transkriberade text med andra.",
      button: "Kom igång",
      tip: "Redo att förvandla ljud till transkriberad text? Börja utforska nu!",
      tip2: "Börja utforska nu!",
      tip1: "Redo att förvandla ljud till transkriberad text? "
    },
    subscriptionModal: {
      left: {
        title: "Skaffa Pro-planen för att låsa upp mer",
        c1: "Obegränsade transkriptioner",
        c2: "10 timmars uppladdningar",
        c3: "Högsta prioritet",
        c4: "99% transkriptionsnoggrannhet",
        c5: "100+ språk stöds",
        c6: "Talaridentifiering",
        c7: "Transkriptionsöversättning",
        t1: "Obegränsade transkriptioner för en person.",
        t2: "Varje fil kan vara upp till 10 timmar / 5 GB. Ladda upp 50 filer åt gången.",
        t3: "Vi transkriberar alltid dina filer så snabbt som möjligt med högsta prioritet."
      },
      right: {
        title: "Skaffa Pro-planen",
        yearly: "Årligen",
        monthly: "Månadsvis",
        save: "Besparing",
        preMonth: "per månad",
        preYear: "per år",
        firstMonth: "första månaden",
        afterwards: "därefter"
      },
      subscribe: "Prenumerera"
    }
  },
  // Mappsida
  FolderPage: {
    table: {
      failed: "Misslyckades",
      selected: "Markerad",
      success: "Lyckades",
      fileList: "Fillista"
    },
    dialog: {
      move: {
        title: "Flytta",
        label: "Välj mapp",
        placeholder: "Välj mapp",
        confirm: "Flytta",
        cancel: "Avbryt"
      },
      rename: {
        title: "Byt namn",
        label: "Filnamn",
        confirm: "Byt namn",
        cancel: "Avbryt"
      },
      delete: {
        title: "Radera",
        file: "fil",
        files: "filer",
        label: "Bekräfta radering? Denna åtgärd kan inte ångras.",
        confirm: "Radera",
        cancel: "Avbryt"
      },
      share: {
        title: "Dela",
        label:
          "Alla med följande säkra länk kommer att kunna visa denna transkription och tillhörande mediafiler.",
        confirm: "Kopiera länk",
        success: "Kopiering lyckades"
      },
      export: {
        title: "Exportera",
        select: "Välj det format du behöver",
        settings: "Inställningar",
        speaker: "Inkludera talare",
        timecodes: "Inkludera tidskoder",
        confirm: "Exportera",
        cancel: "Avbryt",
        selectErr: "Välj minst ett format"
      }
    },
    search: {
      placeholder: "Sök"
    },
    recently: "Nyligen",
    record: "Spela in",
    transcribe: "Transkribera",
    unclassified: "Oklassificerad mapp",
    buttons: {
      transcribe: "Transkribera fil",
      url: "Transkribera länk",
      record: "Spela in och transkribera",
      recording: "Spelar in..."
    },
    delSuccess: "Radering lyckades",
    create: "Skapa",
    endRecord: {
      title: "Meddelande",
      content:
        "Du spelar in. Den här åtgärden avslutar inspelningen. Vill du avsluta inspelningen?",
      confirm: "Fortsätt Inspelning",
      cancel: "Avsluta Inspelning"
    }
  },
  // Filuppladdning och inspelning
  FileUploadAndRecording: {
    record: {
      record: "Spela in",
      pause: "Pausa",
      resume: "Fortsätt",
      stop: "Stoppa",
      endRecord: "Avsluta inspelning",
      delete: "Radera",
      transcribe: "Transkribera",
      permissionDenied: "Mikrofontillstånd nekades eller enhet ej tillgänglig",
      dialog: {
        delete: {
          title: "Varning",
          label: "Är du säker på att du vill radera denna inspelning?",
          confirm: "Radera",
          cancel: "Avbryt"
        },
        complete: {
          title: "Inspelning avslutad",
          label:
            "Inspelningen nådde 10 timmar och stoppades automatiskt. Vänligen fortsätt med transkriberingen.",
          confirm: "Jag förstår"
        },
        speaker: {
          content:
            'För talaridentifiering är filer begränsade till 3 timmar. Avmarkera "{text}".'
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkribera online-medier",
        title: "Klistra in länk",
        label:
          "Klistra in din video- eller ljudlänk från: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram och fler plattformar...",
        confirm: "Lägg till",
        cancel: "Avbryt",
        errorTitle:
          "URL-adressen du angett är inte korrekt. Kontrollera och försök igen.",
        linkName: "Länk"
      },
      file: {
        orTitle: "Transkribera från URL",
        dialogTitle: "Ladda upp filer för transkribering",
        tip1: "Dra filer hit eller klicka för att bläddra",
        tip2: "Klicka för att bläddra",
        or: "eller",
        supported: "Format som stöds"
      },
      del: {
        title: "Varning",
        content:
          "All framsteg kommer att förloras. Bekräfta avbrytande av transkription?",
        cancel: "Bekräfta avbryt",
        confirm: "Fortsätt transkribera"
      },
      files: "Filer",
      resultDialogTitle: "Transkribera filer",
      resultDialogTitle2: "Transkribera fil",
      cancel: "Avbryt",
      confirm: "Transkribera",
      return: "Återgå",
      addMore: "Lägg till fler",
      language: "Välj språk",
      failed: "Misslyckades",
      tooLarge: "Filen överskrider gränsen (5 GB).",
      linkUpload: "Laddar upp",
      fileFormat: "Filformatet tillåts inte",
      localFiles: "Lokala filer",
      pasteLink: "Online-länk",
      uploadErr: "Uppladdningsfel",
      hashErr: "Hash-fel",
      table: {
        status: "Status",
        file: "Fil",
        size: "Storlek",
        noData: "Ingen data"
      },
      maxFileNum: "Antalet filer kan inte överstiga {num}.",
      speaker: "Identifiera talare",
      speakerLabel: "Identifiera automatiskt vem som talar",
      guest: {
        transcribe: "Transkribera",
        file: "Fil",
        audio: "Ljud-/videofil",
        Uploading: "Laddar upp..."
      }
    }
  },
  // Transkriptionsdetaljsida
  TranscriptionPage: {
    langChooseV1: {
      recently: "Nyligen",
      popular: "Populära",
      other: "Andra",
      searchLanguage: "Sök språk",
      noMatch: "Inget matchande språk hittades",
      English: "Engelska",
      "English(US)": "Engelska (USA)",
      "English(UK)": "Engelska (Storbritannien)",
      Spanish: "Spanska",
      Portuguese: "Portugisiska",
      French: "Franska",
      Italian: "Italienska",
      German: "Tyska",
      Dutch: "Nederländska",
      Polish: "Polska",
      Danish: "Danska",
      Japanese: "Japanska",
      Korean: "Koreanska",
      Hungarian: "Ungerska",
      Czech: "Tjeckiska",
      Chinese: "Kinesiska",
      Hebrew: "Hebreiska",
      Arabic: "Arabiska",
      Azerbaijani: "Azerbajdzjanska",
      Estonian: "Estniska",
      Belarusian: "Vitryska",
      Bulgarian: "Bulgariska",
      Icelandic: "Isländska",
      Bosnian: "Bosniska",
      Persian: "Persiska",
      Russian: "Ryska",
      "Chinese(Traditional)": "Kinesiska (traditionell)",
      Finnish: "Finska",
      Kazakh: "Kazakiska",
      Galician: "Galiciska",
      Catalan: "Katalanska",
      "Chinese(Simplified)": "Kinesiska (förenklad)",
      Kannada: "Kannada",
      Croatian: "Kroatiska",
      Latvian: "Lettiska",
      Lithuanian: "Litauiska",
      Romanian: "Rumänska",
      Marathi: "Marathi",
      Malay: "Malajiska",
      Macedonian: "Makedonska",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalesiska",
      Norwegian: "Norska",
      Swedish: "Svenska",
      Serbian: "Serbiska",
      Slovak: "Slovakiska",
      Slovenian: "Slovenska",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thailändska",
      Turkish: "Turkiska",
      Welsh: "Walesiska",
      Urdu: "Urdu",
      Ukrainian: "Ukrainska",
      Greek: "Grekiska",
      Armenian: "Armeniska",
      Hindi: "Hindi",
      Indonesian: "Indonesiska",
      Vietnamese: "Vietnamesiska",
      Albanian: "Albanska",
      Amharic: "Amhariska",
      Assamese: "Assamesiska",
      Occitan: "Occitanska",
      Bashkir: "Basjkiriska",
      Basque: "Baskiska",
      Breton: "Bretonska",
      Tibetan: "Tibetanska",
      Faroese: "Färöiska",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgiska",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreol",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgiska",
      Malagasy: "Malagassiska",
      Maltese: "Maltesiska",
      Malayalam: "Malayalam",
      Mongolian: "Mongoliska",
      Bengali: "Bengali",
      Burmese: "Burmesiska",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Singalesiska",
      Shona: "Shona",
      Somali: "Somaliska",
      Tajik: "Tadzjikiska",
      Tatar: "Tatariska",
      Telugu: "Telugu",
      Turkmen: "Turkmeniska",
      Uzbek: "Uzbekiska",
      Hawaiian: "Hawaiiska",
      "Norwegian Nynorsk": "Norska (nynorsk)",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesiska",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanesiska",
      Cantonese: "Kantonesiska",
      Abkhaz: "Abchaziska",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acoli",
      awa: "Awadhi",
      Avaric: "Avariska",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irländska",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetiska",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesiska",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Nordsotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Baluchi",
      bho: "Bhojpuri",
      bua: "Burjatiska",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Tjetjenska",
      chk: "Chuukese",
      Chuvash: "Tjuvasjiska",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Divehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Sydndebele",
      dov: "Dombe",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Franska (Kanada)",
      Fijian: "Fijianska",
      fon: "Fon",
      "Western Frisian": "Västfrisiska",
      fur: "Friuliska",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grönländska",
      gom: "Goan Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgiziska",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikanska",
      "crh-Latn": "Krimtatariska (latinsk)",
      crh: "Krimtatariska (kyrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdiska (Kurmanji)",
      ckb: "Kurdiska (Sorani)",
      trp: "Kok Borok",
      ltg: "Latgaliska",
      lij: "Liguriska",
      Limburgish: "Limburgiska",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardiska",
      rom: "Romani",
      mad: "Maduresiska",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajiska (Jawi)",
      Marshallese: "Marshalliska",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritisk kreol",
      "mni-Mtei": "Meetei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (östra)",
      "Southern Sotho": "Sydsotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugisiska (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotekiska",
      "Northern Sami": "Nordsamiska",
      Samoan: "Samoanska",
      kri: "Sierra Leonean Krio",
      crs: "Seychellisk kreol",
      Sango: "Sango",
      "sat-Latn": "Santali (latinsk)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gäliska",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Berber (Tifinagh)",
      "ber-Latn": "Berber (latinsk)",
      Tahitian: "Tahitiska",
      Tonga: "Tonga",
      Tigrinya: "Tigrinja",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinska",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetianska",
      Uyghur: "Uiguriska",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtiska",
      szl: "Schlesiska",
      scn: "Sicilianska",
      hil: "Hiligaynon",
      jam: "Jamaicansk patois",
      sah: "Jakutiska",
      ace: "Acehnesiska",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (latinsk)",
      Inuktitut: "Inuktitut",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // Inloggning, registrering, lösenordsåterställning
  IdentityInfoManage: {
    or: "eller",
    LoginBtn: "Logga in med e-post",
    LoginGoogle: "Logga in med Google",
    SignupBtn: "Registrera med e-post",
    SignupGoogle: "Registrera med Google",
    SignupDes: "Registrera dig idag och upplev magin — gratis.",
    SignupTitle: "Noggrann & obegränsad transkribering",
    signup: "Registrera",
    sign_up: "Registrera",
    loginByGoogle: "Logga in med Google",
    emailAddress: "Vänligen ange din e-postadress",
    createAccount: "Skapa konto",
    accountExists: "Har du redan ett konto? ",
    agreeTerm: {
      agree: "Genom att fortsätta godkänner du våra {terms} och {policy}.",
      terms: "Villkor",
      policy: "Integritetspolicy"
    },
    setPassword: "Ange lösenord",
    code: "Verifieringskod",
    resend: "Skicka igen",
    enterPassword: "Lösenord: Minst 6 tecken.",
    passwordLeval: "Lösenordsstyrka",
    Weak: "Svagt",
    Medium: "Medium",
    Strong: "Starkt",
    confirmPassword: "Bekräfta lösenord",
    invalidEmail: "Ogiltig e-postadress",
    logInDirectly: "Kontot finns redan, logga in direkt.",
    codeErrorTryAgain: "Felaktig verifieringskod, vänligen försök igen.",
    atLeastSix: "Lösenordet måste innehålla minst 6 tecken.",
    passwordNotMatch: "Lösenorden matchar inte, vänligen försök igen.",
    login: "Logga in",
    log_in: "Logga in",
    log_In: "Logga in",
    password: "Lösenord",
    forgotPassword: "Glömt lösenord?",
    noAccount: "Inget konto?",
    accountNotExists: "Kontot finns inte.",
    passwordError: "Lösenordsfel",
    sendCode: "Skicka verifieringskod",
    resetPassword: "Återställ lösenord",
    resetYourPassword: "Återställ ditt lösenord",
    newOldCantSame: "Nytt lösenord kan inte vara samma som det gamla.",
    passwordResetOk: "Lösenordet har återställts!",
    signupToSaveProgress: "Slutför registreringen för att spara din framsteg.",
    tip: "Tips",
    tipContentEmail:
      "Vi har precis skickat ditt kontos inloggningslösenord till din e-postadress.",
    tipContentPassword:
      "Var god kontrollera din inkorg och logga in med din e-postadress och lösenord.",
    codeToEmail:
      "Vi har precis skickat en verifieringskod till din e-post. Kontrollera din inkorg och klistra in verifieringskoden ovan."
  },
  // Delningssida
  Sharepage: {},
  // Initialsida
  InitPage: {},
  // Kontoinställningar
  AccountSettingsPage: {
    subscription: "Prenumerationsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 avskrifter per dag",
    uploadMinutes: "30 minuters uppladdning",
    lowerPriority: "Lägre prioritet",
    currentPlan: "Nuvarande plan",
    professionalEdition: "professionell version",
    unlimitedTranscription: "Obegränsad avskrift",
    unlimitedNumberOfTimes:
      "Obegränsad transkriptionsfrekvens och varaktighet.",
    filesUploadedAtOnce:
      "Varje fil kan vara upp till 10 timmar lång / 5 GB. Ladda upp 50 filer samtidigt.",
    highestPriority: "högsta prioritet",
    weWillGiveTheHighest:
      "Vi kommer alltid att transkribera dina filer så snart som möjligt med högsta prioritet.",
    theFirstMonth: "Den första månaden",
    subscribeTo: "prenumerera på",
    basicVersionFree: "Grundversion (gratis)",
    return: "Tillbaka",
    annualize: "årlig",
    monthly: "månadsvis",
    everyYear: "varje år",
    saved: "sparad",
    byTheMonth: "per månad",
    firstMonth: "första månaden",
    afterwardsEveryMonth: "Därefter varje månad",
    manageSubscription: "Hantera prenumeration",
    professionalYearbook: "Professionell årsbok",
    professionalMonthly: "Professionell månadsvis",
    subscriptionWillCancelledOn: "Ditt abonnemang kommer att avslutas",
    displayLanguage: "Visningsspråk",
    update: "Uppgradera nu",
    basicversion: "Grundversion (Gratis)",
    daily: "{start} av {end} dagliga avskrifter använda",
    upgradetoPro: "Uppgradera till Pro",
    accountSetting: "Kontoinställningar",
    logOut: "Logga ut",
    account: "Konto",
    email: "E-post",
    id: "ID",
    password: "Lösenord",
    resetPassword: "Återställ lösenord",
    logIn: "Logga in",
    tryForFree: "Prova gratis",
    notFund: "Hittades inte",
    couldntFind: "Vi kunde inte hitta det du letade efter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månadsvis",
    perMonth: "per månad",
    afterwards: "därefter",
    accuracy: "avskriftsnoggrannhet",
    supported: "språk som stöds",
    identification: "Talaridentifiering",
    transcriptSranslation: "Avskriftsöversättning",
    perYear: "per år",
    getProPlan: "Skaffa Pro-planen",
    changeToAnnual: "Byt till årlig",
    automaticRenewalon: "Automatisk förnyelse den",
    eachMonth: "Automatisk förnyelse den {time}. varje månad.",
    automaticRenewal:
      "Automatisk förnyelse misslyckades, kontrollera betalningsmetoden.",
    eachYear: "Automatisk förnyelse den {time} varje år.",
    returnAccountSetting: "Tillbaka",
    needsToWaitLonger: "Vänta längre innan dina filer transkriberas.",
    freeThreeTimesDay: "Transkribera 3 filer gratis varje dag.",
    oneFileUploaded:
      "Varje fil kan vara upp till 30 minuter lång. Ladda upp 1 fil i taget.",
    uploadWithinHours: "10-timmars uppladdningar",
    yourSubscription: "Ditt abonnemang kommer att avslutas {time}.",
    save: "Spara",
      freeversion2: "Gratisplan"
},
  // Språkmappning
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesiska (förenklad)",
      "Chinese(Traditional)": "Kinesiska (traditionell)",
      Japanese: "Japanska",
      Danish: "Danska",
      German: "Tyska",
      English: "Engelska",
      Spanish: "Spanska",
      French: "Franska",
      Italian: "Italienska",
      Hungarian: "Ungerska",
      Dutch: "Nederländska",
      Norwegian: "Norska",
      Polish: "Polska",
      Portuguese: "Portugisiska",
      Finnish: "Finska",
      Swedish: "Svenska",
      Turkish: "Turkiska",
      Greek: "Grekiska",
      Russian: "Ryska",
      Ukrainian: "Ukrainska",
      Hebrew: "Hebreiska",
      Arabic: "Arabiska",
      Korean: "Koreanska"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "En open source Nuxt3 SaaS-mall, förintegrerarad med globala betalningsgateways (Stripe/Cream), Google OAuth, i18n-routing och SEO-optimeringsverktyg. Specialdesignad för utvecklare som bygger flerspråkiga webbapplikationer, med stöd för SSR/SSG och produktionsnivåsäkerhet.",
    startLink: "Starta gratis provperiod~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Gå med i väntelistan för att vara först med att få de senaste nyheterna och rabatterna från NuxtPro!",
      placeholder: "Ange din e-post",
      button: "Gå med i väntelistan",
      joinCountMessage:
        "🔥 Tidig användare #{count} gick just med i väntelistan!"
    },
    seo: {
      title: "Open Source Nuxt SaaS-mall | NuxtPro",
      description:
        "NuxtJS-mall med allt du behöver för att snabbt få din produkt framför kunder. Från idé till produktion på bara 5 minuter."
    },
    api: {
      title: "Detta är en demo",
      corpInfo: "Företagsinformation"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "Fel vid nedladdning av video"
      },
      mse: {
        code: 2,
        msg: "Fel vid tillägg av ström"
      },
      parse: {
        code: 3,
        msg: "Tolkningsfel"
      },
      format: {
        code: 4,
        msg: "Formatfel"
      },
      decoder: {
        code: 5,
        msg: "Avkodningsfel"
      },
      runtime: {
        code: 6,
        msg: "Syntaxfel"
      },
      timeout: {
        code: 7,
        msg: "Uppspelningstidsfel"
      },
      other: {
        code: 8,
        msg: "Annat fel"
      }
    },
    HAVE_NOTHING: "Ingen information om ljud-/videoberedskap",
    HAVE_METADATA: "Ljud-/videometadata redo",
    HAVE_CURRENT_DATA:
      "Data om aktuell uppspelningsposition är tillgänglig, men inte tillräckligt med data för att spela upp nästa bildruta/millisekund",
    HAVE_FUTURE_DATA: "Aktuella data och minst nästa bildruta är tillgängliga",
    HAVE_ENOUGH_DATA: "Tillräckligt med data för att börja uppspelning",
    NETWORK_EMPTY: "Ljud/video har inte initierats än",
    NETWORK_IDLE:
      "Ljud/video är aktivt och resurs har valts, men nätverk används inte",
    NETWORK_LOADING: "Webbläsaren laddar ner data",
    NETWORK_NO_SOURCE: "Ingen ljud-/videokälla hittades",
    MEDIA_ERR_ABORTED: "Hämtning avbröts av användaren",
    MEDIA_ERR_NETWORK: "Nätverksfel",
    MEDIA_ERR_DECODE: "Avkodningsfel",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Ljud-/videoformatet stöds inte",
    REPLAY: "Spela upp igen",
    ERROR: "Det verkar vara ett problem med nätverksanslutningen",
    PLAY_TIPS: "Spela",
    PAUSE_TIPS: "Pausa",
    PLAYNEXT_TIPS: "Nästa avsnitt",
    DOWNLOAD_TIPS: "Ladda ner",
    ROTATE_TIPS: "Rotera",
    RELOAD_TIPS: "Ladda om",
    FULLSCREEN_TIPS: "Fullskärm",
    EXITFULLSCREEN_TIPS: "Avsluta fullskärm",
    CSSFULLSCREEN_TIPS: "CSS-fullskärm",
    EXITCSSFULLSCREEN_TIPS: "Avsluta CSS-fullskärm",
    TEXTTRACK: "Undertexter",
    PIP: "Bild-i-bild",
    SCREENSHOT: "Skärmbild",
    LIVE: "Direktsändning",
    OFF: "Av",
    OPEN: "På",
    MINI_DRAG: "Klicka och håll för att dra video",
    MINISCREEN: "Mini-skärm",
    REFRESH_TIPS: "Försök",
    REFRESH: "Uppdatera",
    FORWARD: "Spola framåt",
    LIVE_TIP: "Direktsändning",
    TM_SUBTITLE_SHOW_TIPS: "Slå på undertexter",
    TM_SUBTITLE_HIDE_TIPS: "Stäng av undertexter",
    TM_MINIMIZE_TIPS: "Dölj video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Integritetspolicy",
    lastUpdated: "Senast uppdaterad: 25 augusti 2025",
    policyDescription:
      'Denna policy beskriver hur Scribify (nedan kallat "Scribify", "vår", "vi", "oss") samlar in, använder och lämnar ut dina personuppgifter när du använder våra tjänster, webbplatser',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      'och programvara (gemensamt kallade "Tjänsterna").',
    policyAgreement:
      "Läs denna integritetspolicy noggrant och se till att du förstår den. Genom att använda någon av våra tjänster godkänner du denna integritetspolicy. Om du inte samtycker till vår användning av dina personuppgifter i enlighet med denna policy måste du omedelbart sluta använda våra tjänster.",
    policyOverview:
      "I denna policy beskriver vi: vilka uppgifter vi samlar in och varför; hur dina uppgifter hanteras; och dina rättigheter avseende dina uppgifter. Vi säljer inte dina uppgifter.",
    scopeTitle: "1. Omfattning av denna integritetspolicy",
    whatWeCollectTitle: "2. Vad vi samlar in och varför",
    accessShareTitle: "3. När vi får åtkomst till eller delar din information",
    secureDataTitle: "4. Hur vi skyddar dina uppgifter",
    deleteContentTitle: "5. Vad händer när du tar bort ditt innehåll",
    locationTitle: "6. Plats och datas placering",
    childrenPrivacyTitle: "7. Barns integritet",
    updatesTitle: "8. Uppdateringar av denna integritetspolicy",
    contactUsTitle: "9. Kontakta oss",
    identityAccessTitle: "2.1 Identitet och åtkomst",
    billingInfoTitle: "2.2 Faktureringsinformation",
    productInteractionsTitle: "2.3 Produktinteraktioner",
    websiteInteractionsTitle: "2.4 Webbplatsinteraktioner",
    cookiesTitle: "2.5 Kakor",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondens",
    scopeContent:
      "Denna integritetspolicy gäller endast vår insamling och behandling av information om användare av Tjänsterna. Denna integritetspolicy gäller inte för några tjänster, webbplatser eller programvara som drivs av tredje part och som är länkade till oss (oavsett om vi tillhandahåller dessa länkar eller om andra användare delar dem), och den gäller inte heller för innehåll, data, applikationer eller material från tredje part. Vi rekommenderar att du kontrollerar integritetspolicyerna för någon tredje parts webbplats eller programvara innan du lämnar någon information till dem.",
    collectPrinciple:
      "Vår vägledande princip är att bara samla in det vi behöver. Här är vad det innebär i praktiken:",
    identityAccessContent:
      "När du registrerar dig för en av våra produkter ber vi om identifierande information som ditt namn och din e-postadress. Detta gör vi för att tillhandahålla viktig produktfunktionalitet och så att vi kan skicka produktuppdateringar och annan viktig information till dig.",
    billingInfoContent:
      "Om du registrerar dig för en betald produkt kommer du att bli ombedd att ange din betalningsinformation och faktureringsadress. Betalningsinformationen skickas direkt till vår betalningsleverantör och når inte våra servrar.",
    productInteractionsContent:
      "Vi lagrar innehållet som du laddar upp, tar emot eller hanterar i dina produktkonton på våra servrar. Om du inte tar bort detta innehåll kan vi komma att behålla det så länge ditt konto är aktivt.",
    websiteInteractionsContent:
      "Vi samlar in information om din surfaktivitet för analys- och statistiska ändamål, såsom tester av konverteringsfrekvens och experiment med nya produktdesigner. Detta inkluderar till exempel dina webbläsar- och operativsystemversioner, din IP-adress, vilka webbsidor du besökte och hur lång tid det tog att ladda dem, och vilken webbplats som hänvisade dig till oss. Om du har ett konto och är inloggad är dessa webbanalysdata kopplade till din IP-adress och ditt användarkonto tills ditt konto inte längre är aktivt.",
    cookiesContent1:
      "Vi använder även permanenta förstapartscookies och vissa tredjepartscookies för att lagra vissa preferenser, göra det enklare för dig att använda våra applikationer och utföra A/B-testning samt stödja viss analys.",
    cookiesContent2:
      "En cookie är en textbit som lagras av din webbläsare. Den kan hjälpa till att komma ihåg inloggningsinformation och webbplatsinställningar. Den kan också samla in information som din webbläsartyp, operativsystem, besökta webbsidor, besökets längd, visat innehåll och annan klickdata. Du kan justera inställningar för cookielagring och acceptera eller blockera enskilda cookies i dina webbläsarinställningar, men våra appar kommer inte att fungera och andra aspekter av vår tjänst kanske inte fungerar korrekt om du inaktiverar cookies.",
    voluntaryCorrespondenceContent:
      "När du mejlar oss med en fråga eller ber om hjälp sparar vi den korrespondensen, inklusive din e-postadress, så att vi har en historik över tidigare korrespondens att hänvisa till om du kontaktar oss i framtiden.",
    accessShareContent1:
      "För att tillhandahålla produkter eller tjänster som du har begärt. Vi använder vissa tredjepartsleverantörer för att köra våra applikationer och tillhandahålla Tjänsterna till dig. Detta inkluderar moln- och analysleverantörer.",
    accessShareContent2:
      "För att undersöka, förebygga eller vidta åtgärder mot missbruk. Att få åtkomst till ett kundkonto vid utredning av potentiellt missbruk är en sista utväg. Vi vill skydda integriteten och säkerheten för både våra kunder och de personer som rapporterar problem till oss, och vi gör vårt bästa för att balansera dessa ansvarsområden under hela processen. Om vi upptäcker att du använder våra produkter för ett begränsat ändamål kommer vi att vidta åtgärder vid behov, inklusive att meddela lämpliga myndigheter där det är motiverat.",
    accessShareContent3: "När det krävs enligt gällande lag.",
    userDataRequests:
      "- Begäran om användardata. Vår policy är att inte svara på myndigheters begäranden om användardata om vi inte är tvungna att dela data genom rättsliga processer eller under begränsade omständigheter i händelse av en nödförfrågan. Om amerikanska brottsbekämpande myndigheter har nödvändig order, stämning eller domstolsbeslut som kräver att vi delar data, måste vi följa detta. Likaså kommer vi endast att svara på förfrågningar från myndigheter utanför USA om vi är tvungna av den amerikanska regeringen genom förfaranden som anges i ett avtal eller avtal om ömsesidig rättslig hjälp. Det är vår policy att meddela berörda användare innan vi delar data om vi inte är lagligt förbjudna att göra det, förutom i vissa nödfall.",
    preservationRequests:
      "- Begäran om bevarande. På samma sätt är vår policy att endast efterkomma begäranden om att bevara data om det krävs enligt US Federal Stored Communications Act, 18 USC Section 2703(f), eller genom en korrekt delgiven amerikansk stämning för civilrättsliga ärenden. Vi delar inte bevarade data om det inte krävs enligt lag eller är tvingat av ett domstolsbeslut som vi väljer att inte överklaga. Dessutom, om vi inte får en korrekt beslutsfattande, domstolsbeslut eller stämning innan den obligatoriska bevarandeperioden löper ut, kommer vi att förstöra alla bevarade kopior av kunddata i slutet av bevarandeperioden.",
    taxAudit:
      "- Om vi granskas av en skattemyndighet kan vi vara skyldiga att dela faktureringsrelaterad information. Om det händer kommer vi endast att dela det minimum som behövs, såsom faktureringsadresser och information om skattebefrielse.",
    secureDataContent1: "All data krypteras via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "när den överförs från våra servrar till din webbläsare.",
    deleteContentContent:
      "Om du tar bort något innehåll blir det omedelbart oåtkomligt.",
    locationContent:
      "Våra produkter och andra webbtjänster drivs i USA. Om du befinner dig i Europeiska unionen, Storbritannien eller någon annanstans utanför USA, vänligen observera att all information du lämnar till oss kommer att överföras till och lagras i USA. Genom att använda våra webbplatser eller tjänster och/eller förse oss med dina personuppgifter samtycker du till denna överföring.",
    childrenPrivacyContent:
      "Tjänsterna riktar sig inte till barn, och vi samlar inte medvetet in personuppgifter från barn under 13 år. Om du är under 13 år, vänligen lämna inte ut någon personlig information via Tjänsterna. Om du tror att ett barn har lämnat oss personuppgifter i strid med denna policy, vänligen kontakta oss enligt nedan.",
    updatesContent:
      "Vi kan komma att uppdatera denna policy vid behov för att följa relevanta bestämmelser och återspegla eventuella nya rutiner. När vi gör en betydande ändring av våra policyer kommer vi att uppdatera datumet högst upp på denna sida.",
    contactUsContent1:
      "Om du har några frågor, kommentarer eller klagomål gällande vår integritetspolicy, vänligen",
    contactUs: "kontakta oss",
    contactUsContent2:
      "och vi kommer att sträva efter att hantera ditt klagomål så snart som möjligt."
  },
  termsOfService: {
    termsOfServiceTitle: "Användarvillkor",
    lastUpdated: "Senast uppdaterad: 21 september 2022",
    thankYouMessage: "Tack för att du använder våra produkter!",
    companyReference:
      'När vi säger "Företag", "vi", "vår" eller "oss" i detta dokument, syftar vi på Scribify.',
    servicesDefinition:
      'När vi säger "Tjänster" menar vi alla produkter som skapats och underhålls av Scribify, oavsett om de levereras i en webbläsare, skrivbordsapplikation, mobilapplikation eller något annat format.',
    termsUpdateNotice:
      "Vi kan komma att uppdatera dessa användarvillkor i framtiden. Vanligtvis har dessa ändringar gjorts för att förtydliga några av dessa villkor genom att länka till en utökad relaterad policy. När vi gör en betydande ändring av våra policyer kommer vi att uppdatera datumet högst upp på denna sida och vidta andra lämpliga åtgärder för att meddela kontoinnehavare.",
    acceptanceOfAgreementTitle: "1. Godkännande av avtal",
    scribifyServicesTitle: "2. Scribifys tjänster",
    accountTermsTitle: "3. Kontovillkor",
    paymentRefundsTitle: "4. Betalning, återbetalningar och planändringar",
    cancellationTerminationTitle: "5. Avbokning och uppsägning",
    submissionsTitle: "6. Inskickade bidrag",
    uptimeSecurityTitle: "7. Drifttid och säkerhet",
    siteManagementTitle: "8. Platshantering",
    copyrightContentTitle: "9. Upphovsrätt och äganderätt till innehåll",
    prohibitedActivitiesTitle: "10. Förbjudna aktiviteter",
    featuresBugsTitle: "11. Funktioner och buggar",
    correctionsTitle: "12. RÄTTELSER",
    userDataTitle: "13. Användardata",
    privacyPolicyTitle: "14. Integritetspolicy",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakta oss",
    acceptanceContent1:
      "Genom att använda våra tjänster anger du att du godkänner detta avtal, vilket därmed blir ett bindande avtal mellan dig och Scribify. Du försäkrar att du har laglig rätt att acceptera dessa villkor och bekräftar att du är myndig nog att ingå ett bindande avtal. Scrifys godkännande är uttryckligen villkorat av att du samtycker till alla villkor i detta avtal.",
    acceptanceContent2:
      "Tjänsterna är inte avsedda för och bör inte användas av någon under 18 år. Genom att använda Tjänsterna försäkrar och garanterar du att du uppfyller ovanstående behörighetskrav.",
    acceptanceContent3:
      'Termerna "du", "din", "själv" ska även omfatta dina anställda, ombud, affärsrepresentanter och alla andra individer som du ger åtkomst till Tjänsterna via ditt Konto (enligt definitionen nedan). Du ansvarar för att alla personer som har åtkomst till Tjänsterna via ditt konto är medvetna om dessa Villkor och följer dem.',
    acceptanceContent4:
      "Scribify förbehåller sig rätten att revidera och uppdatera dessa villkor från tid till annan efter eget gottfinnande. Alla ändringar träder i kraft omedelbart efter publicering. Din fortsatta användning av Tjänsterna efter publiceringen av reviderade villkor innebär att du accepterar och samtycker till ändringarna. Du förväntas kontrollera denna sida då och då så att du är medveten om eventuella ändringar, eftersom de är bindande för dig.",
    servicesContent1:
      "Våra tjänster gör det möjligt för användare att omvandla röstkonversationer till transkriberad text som kan sökas, översättas och delas med andra.",
    servicesContent2:
      'Du kan välja om du vill använda gratisversionen av Tjänsterna ("Gratistjänster") eller den prenumerationsbaserade betalversionen av Tjänsterna för vilken du kan vara skyldig att betala avgifter ("Betaltjänsterna").',
    servicesContent3:
      "Vi kommer att göra Tjänsterna tillgängliga för dig. Du ansvarar för att vidta alla nödvändiga åtgärder för att du ska ha tillgång till Tjänsterna.",
    accountTerms1:
      "- Du är ansvarig för att upprätthålla säkerheten för ditt konto. Företaget kan inte och kommer inte att hållas ansvarigt för någon förlust eller skada till följd av att du inte uppfyller denna säkerhetsskyldighet.",
    accountTerms2:
      "- Du får inte använda Tjänsterna för något olagligt, oetiskt eller omoraliskt syfte.",
    accountTerms3:
      "- Du ansvarar för allt innehåll som publiceras och allt aktivitet som sker på ditt konto. Det inkluderar innehåll som publiceras av andra som antingen: (a) har tillgång till dina inloggningsuppgifter; eller (b) har sina egna inloggningar på ditt konto.",
    accountTerms4:
      '- Du måste vara en människa. Konton som registreras av "botar" eller andra automatiserade metoder är inte tillåtna.',
    paymentContent1:
      "- För betalda tjänster som erbjuder en gratis provperiod förklarar vi provperiodens längd när du registrerar dig. Efter provperioden måste du betala i förskott för att fortsätta använda tjänsten. Om du inte betalar upphör dessa tjänster.",
    paymentContent2:
      "- Om du uppgraderar från ett gratisabonnemang till ett betalt abonnemang debiterar vi ditt kort omedelbart och din faktureringscykel börjar på uppgraderingsdagen.",
    paymentContent3:
      "- Alla avgifter är exklusive alla skatter, avgifter eller tullar som påförs av skattemyndigheterna. Vid behov kommer vi att driva in dessa skatter för skattemyndighetens räkning och betala dem till skattemyndigheterna. Annars är du ansvarig för betalning av alla skatter, avgifter eller tullar.",
    paymentContent4:
      "- Inga köp återbetalas. Du kan när som helst avsluta betalda tjänster genom att logga in på ditt konto. För betalda prenumerationer träder din uppsägning i kraft i slutet av den innevarande betalda perioden, om inte annat anges.",
    cancellationContent1:
      "- Om du säger upp Tjänsten före slutet av en betald period träder din uppsägning i kraft omedelbart och du kommer inte att debiteras igen. Vi beräknar inte automatiskt proportionellt oanvänd tid under den senaste faktureringsperioden.",
    cancellationContent2:
      "- Vi har rätt att stänga av eller säga upp ditt konto och neka all nuvarande eller framtida användning av våra Tjänster av vilken anledning som helst när som helst. Avstängning innebär att du inte kommer att kunna komma åt kontot eller något innehåll på kontot. Uppsägning kommer dessutom att resultera i att ditt konto eller din åtkomst till ditt konto raderas, och att allt innehåll på ditt konto förverkas och avstår. Vi förbehåller oss också rätten att neka vem som helst användning av Tjänsterna av vilken anledning som helst när som helst. Vi har denna klausul eftersom det statistiskt sett, av hundratusentals konton på våra Tjänster, finns minst ett som gör något skändligt.",
    cancellationContent3:
      "- Verbala, fysiska, skriftliga eller andra övergrepp (inklusive hot om övergrepp eller vedergällning) mot företagets anställd eller tjänsteman kan leda till omedelbar uppsägning av kontot.",
    submissionsContent:
      'Du bekräftar och samtycker till att alla frågor, kommentarer, förslag, idéer, feedback eller annan information gällande webbplatsen ("Inskick") som du lämnar till oss inte är konfidentiella och ska bli vår egendom. Vi äger exklusiva rättigheter, inklusive alla immateriella rättigheter, och har rätt till obegränsad användning och spridning av dessa inskickade material för alla lagliga ändamål, kommersiella eller andra, utan erkännande eller ersättning till dig. Du avstår härmed från alla ideella rättigheter till sådana inskickade material och garanterar härmed att sådana inskickade material är original från dig eller att du har rätt att skicka in sådana inskickade material. Du samtycker till att det inte ska finnas någon regressrätt mot oss för påstådda eller faktiska intrång eller missbruk av någon äganderätt i dina inskickade material.',
    uptimeContent1:
      "- Din användning av Tjänsterna sker på egen risk. Vi tillhandahåller dessa Tjänster i befintligt skick och i dess tillgänglighet. Vi erbjuder inga servicenivåavtal för de flesta av våra Tjänster, men tar drifttiden för våra applikationer på största allvar.",
    uptimeContent2:
      "- Vi förbehåller oss rätten att tillfälligt inaktivera ditt konto om din användning avsevärt överstiger den typiska användningen för andra kunder av Tjänsterna. Naturligtvis kommer vi att kontakta dig innan vi vidtar några åtgärder, förutom i sällsynta fall där användningsnivån kan påverka Tjänstens prestanda negativt för andra kunder.",
    uptimeContent3:
      "- Vi vidtar många åtgärder för att skydda och säkra dina data genom säkerhetskopior, redundanser och kryptering. Vi tillämpar kryptering för dataöverföring över det offentliga internet.",
    uptimeContent4:
      "- Vi använder tredjepartsleverantörer och hostingpartners för att tillhandahålla nödvändig hårdvara, programvara, nätverk, lagring och relaterad teknik som krävs för att köra Tjänsterna.",
    siteManagementContent:
      "Vi förbehåller oss rätten, men inte skyldigheten, att: (1) övervaka webbplatsen för brott mot dessa användarvillkor; (2) vidta lämpliga rättsliga åtgärder mot alla som, efter eget gottfinnande, bryter mot lagen eller dessa användarvillkor, inklusive, men inte begränsat till, att rapportera en sådan användare till brottsbekämpande myndigheter; (3) efter eget gottfinnande och utan begränsning, vägra, begränsa åtkomst till, begränsa tillgängligheten till eller inaktivera (i den utsträckning det är tekniskt möjligt) något av dina bidrag eller någon del därav; (4) efter eget gottfinnande och utan begränsning, meddelande eller ansvar, ta bort från webbplatsen eller på annat sätt inaktivera alla filer och innehåll som är för stora eller på något sätt är betungande för våra system; och (5) på annat sätt hantera webbplatsen på ett sätt som är utformat för att skydda våra rättigheter och egendom och för att underlätta webbplatsens korrekta funktion.",
    copyrightContent1:
      "- Allt innehåll som publiceras på Tjänsterna måste följa amerikansk upphovsrättslag.",
    copyrightContent2:
      "- Vi gör inga anspråk på några immateriella rättigheter till det material du tillhandahåller Tjänsterna. Allt uppladdat material förblir ditt.",
    copyrightContent3:
      "- Vi förhandsgranskar inte innehåll, men förbehåller oss rätten (men inte skyldigheten) att efter eget gottfinnande vägra eller ta bort innehåll som är tillgängligt via Tjänsten.",
    copyrightContent4:
      "- Namnen, utseendet och känslan av Tjänsterna är upphovsrättsskyddade © till Företaget. Alla rättigheter förbehållna. Du får inte duplicera, kopiera eller återanvända någon del av HTML, CSS, JavaScript eller visuella designelement utan uttryckligt skriftligt tillstånd från Företaget. Du måste begära tillstånd att använda Företagets logotyp eller någon av Tjänstens logotyper i marknadsföringssyfte. Vänligen",
    emailUs: "mejla oss",
    copyrightContent5:
      "förfrågningar om att använda logotyper. Vi förbehåller oss rätten att återkalla detta tillstånd om du bryter mot dessa användarvillkor.",
    copyrightContent6:
      "- Du samtycker till att inte reproducera, duplicera, kopiera, sälja, vidaresälja eller utnyttja någon del av Tjänsterna, användningen av Tjänsterna eller åtkomsten till Tjänsterna utan uttryckligt skriftligt tillstånd från Företaget.",
    copyrightContent7:
      "- Du får inte modifiera en annan webbplats på ett sätt som falskeligen antyder att den är kopplad till Tjänsterna eller Företaget.",
    copyrightContent8:
      "- Vi respekterar andras immateriella rättigheter. Om du anser att material som är tillgängligt på eller via webbplatsen gör intrång i någon upphovsrätt som du äger eller kontrollerar, vänligen omedelbart",
    contactUs: "kontakta oss",
    copyrightContent9:
      "En kopia av din anmälan kommer att skickas till den person som publicerade eller lagrade materialet som adresseras i anmälan. Observera att du enligt tillämplig lag kan hållas ansvarig för skador om du gör väsentliga felaktiga uppgifter i en anmälan. Om du är osäker på om material som finns på eller länkas till av webbplatsen gör intrång i din upphovsrätt bör du därför överväga att först kontakta en advokat.",
    prohibitedActivitiesIntro:
      "Du får inte besöka eller använda webbplatsen för något annat ändamål än det för vilket vi gör webbplatsen tillgänglig. Webbplatsen får inte användas i samband med några kommersiella strävanden förutom de som uttryckligen rekommenderas eller godkänns av oss.",
    prohibitedActivitiesUserAgreement:
      "Som användare av webbplatsen samtycker du till att inte:",
    prohibitedActivity1:
      "- Systematiskt hämta data eller annat innehåll från webbplatsen för att direkt eller indirekt skapa eller sammanställa en samling, sammanställning, databas eller katalog utan skriftligt tillstånd från oss.",
    prohibitedActivity2:
      "- Lura, bedra eller vilseleda oss och andra användare, särskilt i alla försök att få tillgång till känslig kontoinformation såsom användarlösenord.",
    prohibitedActivity3:
      "- Kringgå, inaktivera eller på annat sätt störa säkerhetsrelaterade funktioner på webbplatsen, inklusive funktioner som förhindrar eller begränsar användning eller kopiering av innehåll eller upprätthåller begränsningar för användningen av webbplatsen och/eller innehållet däri.",
    prohibitedActivity4:
      "- Förringa, fläcka ner eller på annat sätt skada oss och/eller webbplatsen, enligt vår uppfattning.",
    prohibitedActivity5:
      "- Använda information som erhållits från webbplatsen för att trakassera, missbruka eller skada en annan person.",
    prohibitedActivity6:
      "- Använda våra supporttjänster på felaktigt sätt eller skicka in falska rapporter om missbruk eller tjänstefel.",
    prohibitedActivity7:
      "- Använda webbplatsen på ett sätt som inte överensstämmer med tillämpliga lagar eller förordningar.",
    prohibitedActivity8:
      "- Delta i obehörig inramning av eller länkning till webbplatsen.",
    prohibitedActivity9:
      "- Ladda upp eller överföra (eller försöka ladda upp eller överföra) virus, trojanska hästar eller annat material, inklusive överdriven användning av versaler och spam (kontinuerlig publicering av repetitiv text), som stör någons oavbrutna användning och njutning av webbplatsen eller som modifierar, försämrar, stör, ändrar eller stör användningen, funktionerna, driften eller underhållet av webbplatsen.",
    prohibitedActivity10:
      "- Använda systemet automatiskt, till exempel använda skript för att skicka kommentarer eller meddelanden, eller använda datautvinning, robotar eller liknande verktyg för datainsamling och datautvinning.",
    prohibitedActivity11:
      "- Ta bort meddelandet om upphovsrätt eller annan äganderätt från allt innehåll.",
    prohibitedActivity12:
      "- Försöka utge sig för att vara en annan användare eller person eller använda en annan användares användarnamn.",
    prohibitedActivity13:
      '- Ladda upp eller överföra (eller försöka ladda upp eller överföra) material som fungerar som en passiv eller aktiv informationsinsamlings- eller överföringsmekanism, inklusive, men inte begränsat till, tydliga grafikutbytesformat ("gifs"), 1×1-pixlar, webbuggar, cookies eller andra liknande enheter (ibland kallade "spionprogram" eller "passiva insamlingsmekanismer" eller "pcms").',
    prohibitedActivity14:
      "- Störa, avbryta eller skapa en otillbörlig belastning på webbplatsen eller de nätverk eller tjänster som är anslutna till webbplatsen.",
    prohibitedActivity15:
      "- Trakassera, irritera, skrämma eller hota någon av våra anställda eller ombud som är engagerade i att tillhandahålla någon del av webbplatsen till dig.",
    prohibitedActivity16:
      "- Försöka kringgå alla åtgärder på webbplatsen som är utformade för att förhindra eller begränsa åtkomst till webbplatsen, eller någon del av webbplatsen.",
    prohibitedActivity17:
      "- Kopiera eller anpassa webbplatsens programvara, inklusive men inte begränsat till Flash, PHP, HTML, JavaScript eller annan kod.",
    prohibitedActivity18:
      "- Förutom vad som är tillåtet enligt tillämplig lag, dechiffrera, dekompilera, disassemblera eller bakåtkompilera någon av de program som ingår i eller på något sätt utgör en del av webbplatsen.",
    prohibitedActivity19:
      "- Förutom i den mån det är resultatet av användning av vanliga sökmotorer eller webbläsare, använda, starta, utveckla eller distribuera automatiserade system, inklusive men inte begränsat till spindelprogram, robotar, fuskverktyg, skrapprogram eller offline-läsare som har åtkomst till webbplatsen, eller använda eller starta obehöriga skript eller annan programvara.",
    prohibitedActivity20:
      "- Använd en inköpsagent eller inköpsagent för att göra köp på webbplatsen.",
    prohibitedActivity21:
      "- Använda webbplatsen på ett obehörigt sätt, inklusive att samla in användarnamn och/eller e-postadresser till användare elektroniskt eller på annat sätt i syfte att skicka oönskad e-post, eller att skapa användarkonton automatiskt eller under falska förespeglingar.",
    prohibitedActivity22:
      "- Använda webbplatsen som en del av ett försök att konkurrera med oss eller på annat sätt använda webbplatsen och/eller innehållet för intäktsgenererande ändamål eller kommersiella företag.",
    prohibitedActivity23:
      "- Använda webbplatsen för att annonsera eller erbjuda försäljning av varor och tjänster.",
    prohibitedActivity24: "- Sälja eller på annat sätt överföra din profil.",
    featuresContent1:
      "Vi utformar våra tjänster med omsorg, baserat på vår egen erfarenhet och erfarenheterna från kunder som delar med sig av sin tid och feedback. Det finns dock ingen tjänst som tillfredsställer alla. Vi garanterar inte att våra tjänster kommer att uppfylla dina specifika krav eller förväntningar.",
    featuresContent2:
      "Vi testar också alla våra funktioner innan vi skickar dem. Precis som med all programvara har våra tjänster oundvikligen vissa buggar. Vi spårar de buggar som rapporteras till oss och arbetar med dem, särskilt de som rör säkerhet eller integritet. Alla rapporterade buggar kommer inte att åtgärdas och vi garanterar inte helt felfria tjänster.",
    correctionsContent1:
      "Det kan finnas information på webbplatsen som innehåller typografiska fel, felaktigheter eller utelämnanden, inklusive beskrivningar, priser, tillgänglighet och diverse annan information. Vi förbehåller oss rätten att korrigera eventuella fel, felaktigheter eller utelämnanden och att ändra eller uppdatera informationen på webbplatsen när som helst, utan föregående meddelande.",
    correctionsContent2:
      "Vi kan inte garantera att webbplatsen alltid kommer att vara tillgänglig. Vi kan uppleva problem med hårdvara, programvara eller andra problem, eller behöva utföra underhåll relaterat till webbplatsen, vilket kan resultera i avbrott, förseningar eller fel. Vi förbehåller oss rätten att ändra, revidera, uppdatera, stänga av, avbryta eller på annat sätt modifiera webbplatsen när som helst och av vilken anledning som helst utan att meddela dig. Du samtycker till att vi inte har något ansvar för någon förlust, skada eller besvär som orsakas av din oförmåga att komma åt eller använda webbplatsen under driftstopp eller avbrott på webbplatsen. Ingenting i dessa användarvillkor ska tolkas som en förpliktelse för oss att underhålla och stödja webbplatsen eller att tillhandahålla några korrigeringar, uppdateringar eller utgåvor i samband därmed.",
    userDataContent:
      "Vi kommer att behålla vissa uppgifter som du överför till webbplatsen i syfte att hantera webbplatsens prestanda, såväl som uppgifter som rör din användning av webbplatsen. Även om vi regelbundet säkerhetskopierar data är du ensam ansvarig för alla uppgifter som du överför eller som rör aktivitet du har utfört med hjälp av webbplatsen. Du samtycker till att vi inte har något ansvar gentemot dig för förlust eller korruption av sådana uppgifter, och du avstår härmed från all rätt att väcka talan mot oss till följd av sådan förlust eller korruption av sådana uppgifter.",
    privacyPolicyContent1:
      "Vi bryr oss om dataskydd och säkerhet. Vänligen granska våra",
    privacyPolicy: "Integritetspolicy",
    privacyPolicyContent2:
      "Genom att använda webbplatsen godkänner du att vara bunden av vår integritetspolicy, som är införlivad i dessa användarvillkor. Observera att webbplatsen finns i USA. Om du besöker webbplatsen från någon annan region i världen med lagar eller andra krav som reglerar insamling, användning eller utlämnande av personuppgifter som skiljer sig från tillämpliga lagar i USA, överför du genom din fortsatta användning av webbplatsen dina uppgifter till USA, och du samtycker till att dina uppgifter överförs till och behandlas i USA.",
    liabilityIntro:
      "Vi nämner ansvar genomgående i dessa villkor, men för att sammanfatta allt i ett avsnitt:",
    liabilityContent:
      "Du förstår och samtycker uttryckligen till att Bolaget inte ska vara ansvarigt, vare sig enligt lag eller billighetsprincipen, gentemot dig eller någon tredje part för direkta, indirekta, tillfälliga, utebliven vinst, särskilda, följdskador, straffskadestånd eller exemplariska skador, inklusive, men inte begränsat till, skador för utebliven vinst, goodwill, användning, data eller andra immateriella förluster (även om Bolaget har informerats om möjligheten till sådana skador), till följd av: (1) användning eller oförmåga att använda Tjänsterna; (2) fel, misstag eller felaktigheter i innehåll och material; (3) personskada eller egendomsskada, av någon art, till följd av din åtkomst till och användning av webbplatsen; (4) kostnaden för anskaffning av ersättningsvaror och -tjänster till följd av varor, data, information eller tjänster som köpts eller erhållits eller meddelanden som mottagits eller transaktioner som ingåtts via eller från Tjänsterna; (5) obehörig åtkomst till eller användning av våra säkra servrar och/eller all personlig information och/eller finansiell information som lagras däri; (6) avbrott eller upphörande av överföring till eller från webbplatsen; (7) eventuella buggar, virus, trojanska hästar eller liknande som kan överföras till eller via webbplatsen av tredje part, och/eller; (8) eventuella fel eller utelämnanden i innehåll och material eller för förlust eller skada av något slag som uppstår till följd av användningen av innehåll som publicerats, överförts eller på annat sätt gjorts tillgängligt via webbplatsen; (9) uttalanden eller beteende från tredje part i tjänsten; (10) eller andra frågor som rör dessa användarvillkor eller tjänsterna, oavsett om det är ett kontraktsbrott, skadeståndsgrundande handling (inklusive aktiv eller passiv vårdslöshet) eller någon annan ansvarsteori.",
    miscellaneousContent:
      "Dessa användarvillkor och eventuella policyer eller driftsregler som publiceras av oss på webbplatsen eller med avseende på webbplatsen utgör hela avtalet och överenskommelsen mellan dig och oss. Vår underlåtenhet att utöva eller genomdriva någon rättighet eller bestämmelse i dessa användarvillkor ska inte fungera som ett avstående från sådan rättighet eller bestämmelse. Dessa användarvillkor gäller i den utsträckning som lagen tillåter. Vi kan när som helst överlåta några eller alla våra rättigheter och skyldigheter till andra. Vi ska inte vara ansvariga för någon förlust, skada, försening eller underlåtenhet att agera orsakad av någon orsak utanför vår rimliga kontroll. Om någon bestämmelse eller del av en bestämmelse i dessa användarvillkor bedöms vara olaglig, ogiltig eller inte verkställbar, anses den bestämmelsen eller delen av bestämmelsen vara avskiljbar från dessa användarvillkor och påverkar inte giltigheten och verkställbarheten av några återstående bestämmelser. Det finns inget joint venture-, partnerskaps-, anställnings- eller agenturförhållande som skapas mellan dig och oss till följd av dessa användarvillkor eller användning av webbplatsen. Du samtycker till att dessa användarvillkor inte ska tolkas mot oss på grund av att vi har utarbetat dem. Du avstår härmed från alla försvar du kan ha baserat på den elektroniska formen av dessa användarvillkor och avsaknaden av undertecknande av parterna häri för att tillämpa dessa användarvillkor.",
    contactUsContent1:
      "Om du har en fråga om någon av användarvillkoren, vänligen",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funktioner",
    UnlimitedTranscription: "Obegränsad transkription",
    BulkUpload: "Massuppladdning",
    Accuracy: "96 % noggrannhet",
    Pricing: "Prissättning",
    UseCases: "Användningsområden",
    AllUseCases: "Alla användningsområden",
    Podcasters: "Poddsändare",
    Journalists: "Journalister",
    ContentCreators: "Innehållsskapare",
    Researchers: "Forskare",
    BusinessTeams: "Affärsteam",
    Educators: "Utbildare",
    Resources: "Resurser",
    YouTubetoMP4: "YouTube till MP4",
    StartFreeTrial: "Prova gratis"
  },
  Footer: {
    des: "Världens första verkligen obegränsade AI-transkriptionstjänst. Inga tak, inga begränsningar, bara frihet att skapa.",
    Features: "Funktioner",
    UseCases: "Användningsområden",
    Company: "Företag",
    featureMenus: ["Obegränsad transkription", "Massuppladdning", "96 % noggrannhet"],
    useCaseMenus: [
          "Alla användningsområden",
          "Poddsändare",
          "Journalister",
          "Innehållsskapare",
          "Forskare",
          "Affärsteam",
          "Utbildare"
        ],
    companyMenus: [
          "Om oss",
          "Prissättning",
          "Sekretess",
          "Villkor"
        ]
  },
  Index: {
    Hero: {
      badge: 'Ingen mer "Shrinkflation" - Verkligen Obegränsat',
      h1: "Sluta Betala för Begränsningar:",
      gradient: "Verkligen Obegränsad AI-avskrift",
      subtitle: "Vår AI skriver av video och konverterar ljud till text, bearbetar 50 filer samtidigt utan månatliga tak. Avskrift som verkligen växer med dig.",
      FreeTrial: "Prova Gratis - Ingen Kreditkort Krävs",
      HowWorks: "Se Hur Det Fungerar",
      Unlimited: "Obegränsade Filuppladdningar",
      NoCap: "Inget Månatligt Minuttak",
      Hour: "10-Timmars Filer Stöds",
      ExploreUseCases: "Utforska Användningsområden"
    },
    Stats: {
      monthlyMinutes: "Månatliga Minuter",
      fileUploads: "Filuppladdningar",
      batchProcessing: "Batchbearbetning",
      maxFileLength: "Max Fillängd"
    },
    FeaturesGrid: {
      try_now: "Prova Nu",
      no_signup: "Ingen Registrering Krävs",
      experience_unltd: "Upplev verkligen obegränsad avskrift",
      upload_50: "Ladda upp upp till 50 filer samtidigt, precis här.",
      no_limits: "Avancerat",
      no_surprises: "AI-avskrift",
      transparency: "Inga Fler Dolda Begränsningar, Inga Fler Överraskningar - Medan andra tyst minskar dina minuter eller gömmer tak i finstilt text, tror vi på radikal transparens",
      feat_unltd: "Verkligen Obegränsat",
      feat_unltd_desc: 'Ingen "fair use policy" gömd i villkoren. Inga lagringstak förklädda som "obegränsade." Ladda upp hela ditt arkiv, skriv av allt för alla dina ljudavskriftsbehov. Vi menar det.',
      feat_bulk: "Massuppladdningsfrihet",
      feat_bulk_desc: 'Trött på "3 livstidsimport" eller "10 filer per månad"? Ladda upp 50 filer samtidigt, så många gånger du behöver. Perfekt för att bearbeta eftersläpningar.',
      feat_batch: "Batchbearbetning",
      feat_batch_desc: "Bearbeta hela din podcast-säsong över natten. Ladda upp 50 intervjuer samtidigt. Låt vår AI jobba medan du sover. Vakna till färdiga avskrifter.",
      feat_accuracy: "96% Noggrannhet",
      feat_accuracy_desc: "Vår branschledande AI skriver av ljud med smart interpunktion, talardiarisering för upp till 20 talare och hanterar dialekter och tekniska termer felfritt.",
      feat_langs: "100+ Språk",
      feat_langs_desc: "Skriv av video och ljud på 100+ språk, översätt till 249+. Inga extra avgifter för olika språk. Globalt innehåll, ett enkelt pris.",
      feat_pro: "Professionella Funktioner",
      feat_pro_desc: "Ord-nivå tidsstämplar för exakt ljud-/videopositionering, korrekt talaridentifiering även vid snabba konversationsbyten och perfekt formaterad text med stycken, meningar och interpunktion för enkel läsning.",
        features: "Funktioner"
    },
    UseCases: {
      built_for: "Mass-",
      "heavy_users": "Ljud- & Videoavskrift",
      "join_users": 'Byggd för Tunga Användare Som Dig - Gå med YouTubers, innehållsskapare och poddare som bytt från "shrinkflation"-tjänster',
      "podcasters": {
        "title": "Poddare",
        "des": "Ladda upp hela ditt bakkatalog. Skapa shownotes för varje avsnitt. Inget mer välja vilka avsnitt som ska avskrivas."
      },
      "content_creators": {
        "title": "Innehållsskapare",
        "des": "Gör ditt videobibliotek sökbart genom att använda vår tjänst för att automatiskt transkribera videofiler. Generera undertexter till allt. Inget räkna minuter, bara skapa."
      },
      "journalists": {
        "title": "Journalister",
        "des": 'Ladda upp alla dina intervjuer samtidigt. Inget mer \"10 filer per månad\" hinder när deadline närmar sig. Bearbeta allt.'
      },
      researchers: {
        title: "Forskare",
        des: "Skriv av timmar av fokusgrupper och intervjuer. Ladda upp hela din studie på en gång. Få korrekt talaridentifiering."
      },
      business_teams: {
        title: "Företagsteam",
        des: "Spela in varje samtal utan att oroa dig för begränsningar. Få AI-insikter på alla konversationer, inte bara ett utvalt fåtal."
      },
      educators: {
        title: "Utbildare",
        des: "Skriv av hela föreläsningsserier. Gör allt innehåll tillgängligt. Inget välja mellan kurser på grund av minuttak."
      }
    },
    Testimonials: {
      title: "Älskad av",
      highlighted_users: "50 000+ användare",
      subtitle: "Se varför proffs väljer NeverCap framför begränsade alternativ",
      Mike: {
        "text": "Herrejävlar, det här funkar faktiskt! Har hållit på med podcast i 3 år och transkriberat allt manuellt som en idiot. Laddade upp 6 avsnitt på en gång och den separerade mig och min medvärd perfekt. Avsnittet från kaféet jag trodde var förstört? Kristallklar transkription. Jag skriver aldrig det här själv igen.",
        "author": "Mike Rodriguez",
        "role": "Podcasthost"
      },
      Sarah: {
        "text": "Jag undervisar online och behövde undertexter till mina videor. Testade 3 andra verktyg som antingen hade konstiga begränsningar eller tog evigheter. Den här bara... funkar? Laddade upp min föreläsning på spanska, fick perfekta undertexter på typ 2 minuter. Mina studenter med hörselnedsättning är så glada. Önskar jag hittade det här tidigare!",
        "author": "Sarah Chen",
        "role": "Onlineundervisare"
      },
      Jessica: {
        "text": "Har använt det här till mina intervjuer och det är otroligt hur exakt det är. Hade en 2-timmarsintervju på bruten engelska + spanska och den fick allt rätt, till och med tidsstämplarna. Brukade betala min praktikant $200/månad bara för att transkribera. Det här sparar mig bokstavligen pengar varje månad.",
        "author": "Jessica Park",
        "role": "Frilansjournalist"
      }
    },
    PricingPreview: {
      "title": "Transparent prissättning",
      "highlighted_text": "Inga dolda tak",
      "subtitle": "Välj din plan. Inga asterisker, ingen finstilt text, inga överraskningar"
    },
    FAQSection: {
      "title": "Vanliga frågor",
      "titleHighlight": "Frågor",
      "questions": [
            {
              "q": "AI-transkription",
              "question": "Vad är AI-transkription och hur fungerar det?",
              "answer": "AI-transkription är processen att automatiskt omvandla ljud till text med avancerad artificiell intelligens. Hos NeverCap laddar du bara upp dina filer, och vår AI transkriberar innehållet med upp till 96% noggrannhet. Vår tjänst är utformad för att transkribera videofiler (som MP4, MOV) och ljudfiler (som MP3, WAV) till läsbar, redigerbar text, komplett med talarmärkningar och tidsstämplar."
            },
            {
              "q": "unlimited_policy",
              "question": "Är det verkligen obegränsat? Vad är haken?",
              "answer": "Ja, det är verkligen obegränsat! Inga månatliga minutgränser, inga överanvändningsavgifter. De enda begränsningarna är tekniska: enskilda filer kan vara upp till 10 timmar långa eller 5 GB i storlek, och du kan bearbeta 50 filer samtidigt. Men du kan ladda upp så många batchar du vill, hela månaden."
            },
            {
              "q": "accuracy",
              "question": "Hur exakt är transkriptionen?",
              "answer": "Vi garanterar 96% noggrannhet för tydligt ljud. Vår AI är tränad på miljontals timmar av olika innehåll och hanterar dialekter, tekniska termer och flera talare exceptionellt bra. För utmanande ljud hjälper våra smarta förbättringsfunktioner till att förbättra resultaten."
            },
            {
              "q": "languages",
              "question": "Vilka språk stöder ni?",
              "answer": "Vi stöder transkription på över 100 språk inklusive engelska, spanska, mandarin, hindi, arabiska, franska och mer. Dessutom kan du översätta dina transkriptioner till 249 olika språk, vilket gör det perfekt för globalt innehåll."
            },
            {
              "q": "speed",
              "question": "Hur snabb är transkriptionen?",
              "answer": "Blixtsnabb! En 1-timmars ljudfil behandlas vanligtvis på under 5 minuter. Med batchbearbetning kan du ladda upp 50 filer samtidigt och låta dem bearbetas parallellt. De flesta användare vaknar och upptäcker att hela deras bibliotek transkriberats över natten."
            },
            {
              "q": "cancellation",
              "question": "Kan jag avbryta när som helst?",
              "answer": "Absolut! Inga bindningstider, inga avbokningsavgifter. Du kan uppgradera, nedgradera eller avbryta din prenumeration när som helst från din instrumentpanel. Om du avbryter behåller du åtkomst till slutet av din faktureringsperiod."
            },
            {
              "q": "security",
              "question": "Är mina data säkra?",
              "answer": "Din säkerhet är vår prioritet. Vi är SOC 2-certifierade, använder 256-bitars kryptering för all data och använder aldrig ditt innehåll för att träna våra modeller. Du kan ta bort dina filer när som helst, och vi raderar dem automatiskt efter 30 dagar. GDPR- och CCPA-kompatibelt."
            },
            {
              "q": "export_formats",
              "question": "Vilka exportformat finns tillgängliga?",
              "answer": "Ladda ner dina transkriptioner i vilket format du behöver: PDF, Word (DOCX), Excel, CSV, SRText, vanlig text (TXT) och VTT-undertexter. Perfekt för vilket arbetsflöde du än har."
            },
            {
              "q": "file_formats",
              "question": "Vilka ljud- och videofiler kan jag ladda upp?",
              "answer": "Vi stöder i princip alla ljud- och videoformat du stöter på: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV och mer. Om du kan spela upp det kan vi transkribera det."
            }
          ]
    },
    CTASection: {
      "title": "Redo att bryta fri från begränsningar?",
      "subtitle": "Gå med bland 50 000+ proffs som har bytt till verkligen obegränsad transkription",
      "button": "Prova NeverCap gratis",
      "disclaimer": "Inget kreditkort krävs för gratisplanen • Uppgradera när som helst för obegränsad åtkomst"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ingen mer "krympflation"',
      heroTitleLine1: "Verkligen obegränsat",
      heroTitleLine2: "AI-avskrift",
      heroSubtitle: "Medan Trint begränsar dig till 50 timmar och Otter begränsar dig till 10 filer per månad, levererar vi vad vi faktiskt lovar: obegränsad avskrift utan dolda tak.",
      primaryCta: "Prova Gratis - Ingen Kreditkort",
      secondaryCta: "Se Sanningen",
      comparisonBadLabel: "Vad Andra Gör",
      comparisonBadTitle: "Dolda Begränsningar Överallt",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Obegränsat" = 50 timmar/månad tak',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 livstidsimport (gratis), 10/månad (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 minuters lagringsgräns",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Max 30 timmar/månad",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Gömd i villkor & bestämmelser",
      comparisonGoodLabel: "Vad Vi Gör",
      comparisonGoodTitle: "Verkligen Obegränsat",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Inga månatliga minutgränser",
      comparisonGoodItem1Text: "någonsin",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Obegränsade filuppladdningar",
      comparisonGoodItem2Text: "alltid",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Inga lagringsgränser",
      comparisonGoodItem3Text: "alls",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 filer batchuppladdning",
      comparisonGoodItem4Text: "när som helst",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Transparent policy",
      comparisonGoodItem5Text: "på förhand",
      feature1Label: "Inga Gränser",
      feature1TitlePart1: "Avskriva 1 000 Timmar?",
      feature1TitlePart2: "Samma Pris.",
      feature1Description: "Sluta räkna minuter. Sluta titta på tak. Oavsett om du avskriver 10 timmar eller 10 000 timmar per månad, betalar du samma fasta pris. Inga överlagsavgifter. Inga överraskningsräkningar.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Inga "rimlig användning"-policyknep',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ingen hastighetsbegränsning efter X timmar",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ingen månadsslutångest",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Månatliga Timmar",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Överförbrukningsavgifter",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Ladda upp när som helst",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparent",
      feature2Label: "Massfrihet",
      feature2TitlePart1: "Ladda upp din",
      feature2TitlePart2: "Hela arkivet",
      feature2Description: "Otter ger dig 3 livstidsimports gratis, 10 per månad på Pro. Vi ger dig obegränsat. Ladda upp din podcast-efterföljd, alla dina intervjuer, års inspelningar. Inga begränsningar.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 filer per batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-timmarsfiler stöds",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Bearbeta medan du sover",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 livstidsimports",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 filer/månad",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 timmar/månad tak",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Verkligen Obegränsat ✓",
      feature3Label: "Socialt Bevis",
      feature3TitlePart1: "Användare",
      feature3TitlePart2: "Byter Varje Dag",
      feature3Description: '"Jag betalar $100/år för Otter och de begränsar mig till 10 filimports per månad. När det finns ett alternativ med obegränsade imports, är jag borta!" - Riktig Reddit-användare',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000+ användare har bytt",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Från Otters "krympflation"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Återvänder aldrig",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Nöjda Användare",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Bearbetade Filer",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Noggrannhet",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Inga Dolda Avgifter",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuter/Månad",
      trustBadge2Number: "100+",
      trustBadge2Label: "Språk",
      trustBadge3Number: "96%",
      trustBadge3Label: "Noggrannhet",
      trustBadge4Number: "50",
      trustBadge4Label: "Batchuppladdning",
      ctaTitle: "Sluta Betala för Falskt Obegränsat",
      ctaSubtitle: "Gå med i tusentals som bytte till verkligt obegränsad transkribering",
      finalCta: "Prova NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Massuppladdningsfrihet",
      heroTitleLine1: "Ladda upp 50 filer.",
      heroTitleHighlight: "Bearbeta allt.",
      heroSubtitle: "Otter ger dig 3 livstidsimport. TRE. För hela ditt liv. Vi ger dig obegränsade uppladdningar, 50 filer åt gången, när du behöver.",
      primaryCta: "Starta Massuppladdning →",
      secondaryCta: "Se Begränsningarna",
      redditQuote: '"Jag har 3 års poddavsnitt att transkribera. Otter säger att jag får 3 livstidsimport. TRE. Detta är förolämpande."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Riktig frustration från r/podcasting",
      comparisonSectionTitlePart1: "De",
      comparisonSectionTitleHighlight: "Löjliga Begränsningarna",
      comparisonSectionTitlePart2: "De Inför",
      comparisonSubtitle: "Hur konkurrenter begränsar din möjlighet att bearbeta innehåll",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Livstidsimport",
      limitCard1DescriptionLine2: "(Ja, för HELA ditt liv)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Filer per månad",
      limitCard2DescriptionLine2: "($100/år-plan)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fil åt gången",
      limitCard3DescriptionLine2: "(Sekventiell uppladdning)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Obegränsade uppladdningar",
      limitCard4DescriptionLine2: "50 filer per batch",
      feature1Label: "Batchkraft",
      feature1TitlePart1: "Bearbeta Ditt",
      feature1TitleHighlight: "Hela Arkiv",
      feature1TitlePart2: "Över Natten",
      feature1Description: 'Ladda upp 50 filer innan läggdags. Vakna till färdiga transkript. Ingen kö, ingen väntan, inga "uppgradera"-meddelanden. Ren bearbetningskraft vid dina fingertoppar.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samtidiga uppladdningar",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallell bearbetning",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-timmarsfiler stöds",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5GB per fil maximalt",
      uploadAnimationText1: "50 Filer",
      uploadAnimationText2: "Släpp & Bearbeta",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 filer till...",
      feature2Label: "Hastighet",
      feature2TitlePart1: "Från uppladdning till",
      feature2TitleHighlight: "Klart på timmar",
      feature2Description: "Vår parallellbehandlingsinfrastruktur innebär att dina 50 filer inte köar. Alla transkriberas samtidigt. Vad som tidigare tog veckor tar nu timmar.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-timmars fil: 5 minuter",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 filer: behandlas parallellt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-postnotis när klart",
      timelineStep1Icon: "1",
      timelineStep1Title: "Ladda upp",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Bearbetning",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-magi",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Klart",
      timelineStep4Time: "< 2 timmar",
      feature3Label: "Frihet",
      feature3TitlePart1: "Inga köer.",
      feature3TitleHighlight: "Inget väntande.",
      feature3TitlePart2: "Inga gränser.",
      feature3Description: 'Medan andra låter dig vänta i virtuella köer eller uppgradera för "prioriterad behandling", tar vi varje uppladdning på allvar. Ditt innehåll är viktigt och ska inte behöva vänta.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Inga prioriteringsnivåer",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Samma hastighet för alla",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Ladda upp när som helst, dygnet runt",
      feature3VisualNumber: "Dygnet runt",
      feature3VisualTitle: "Alltid redo",
      feature3VisualSubtext: "Ladda upp när inspirationen slår till",
      useCasesTitlePart1: "Perfekt för",
      useCasesTitleHighlight: "Stora uppladdare",
      useCasesSubtitle: "Verkliga scenarier där massuppladdning räddar dagen",
      useCase1Title: "Podcastarkiv",
      useCase1Description: "Ladda upp 3 års avsnitt på en gång. Skriv ut transkriptioner för hela ditt arkiv. Generera SEO-innehåll för varje avsnitt.",
      useCase2Title: "Kursutveckling",
      useCase2Description: "Bearbeta alla dina föreläsningsvideor samtidigt. Skapa tillgängliga transkriptioner för studenter. Bygg sökbara kursmaterial.",
      useCase3Title: "Intervjubacklogg",
      useCase3Description: "Rensa det berg av otranskriberade intervjuer. Bearbeta veckors forskning på timmar. Möt din deadline utan panik.",
      useCase4Title: "YouTube-bibliotek",
      useCase4Description: "Generera undertexter för hela din kanal. Skapa blogginlägg från videor. Förbättra SEO för alla videor.",
      useCase5Title: "Mötesarkiv",
      useCase5Description: "Ladda upp månaders inspelade möten. Skapa sökbara mötesanteckningar. Förlora aldrig viktiga beslut igen.",
      useCase6Title: "Forskningsdata",
      useCase6Description: "Bearbeta fokusgrupper i bulk. Transkribera alla deltagarintervjuer. Analysera kvalitativa data effektivt.",
      ctaTitle: "Sluta Be om Fler Uppladdningar",
      ctaSubtitle: "Få obegränsad bulkbearbetning som faktiskt fungerar",
      finalCta: "Ladda Upp 50 Filer Nu →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Branschledande Noggrannhet",
      heroTitleLine1: "96% Noggrannhet.",
      heroTitleHighlight: "Varje Ord Räknas.",
      heroSubtitle: "Branschledande noggrannhet i 12 huvudspråk. Ordvisa tidsstämplar för perfekt synk. Smart högtalaridentifiering som hanterar snabba samtal. Professionell formatering som faktiskt är läsbar.",
      primaryCta: "Testa Vår Noggrannhet →",
      secondaryCta: "Se Språk",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Noggrannhet i",
      statCard1DescriptionLine2: "12 Huvudspråk",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Noggrannhet med",
      statCard2DescriptionLine2: "Accenter & Dialekter",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Ordvis",
      statCard3DescriptionLine2: "Tidsstämpelprecision",
      languageSectionTitlePart1: "96% Noggrannhet",
      languageSubtitle: "Professionell transkribering för globalt innehåll",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Engelska",
      languageCard1Accuracy: "96% Noggrannhet",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spanska",
      languageCard2Accuracy: "96% Noggrannhet",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96% Noggrannhet",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Franska",
      languageCard4Accuracy: "96% Noggrannhet",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tyska",
      languageCard5Accuracy: "96% Noggrannhet",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japanska",
      languageCard6Accuracy: "96% Noggrannhet",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreanska",
      languageCard7Accuracy: "96% Noggrannhet",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugisiska",
      languageCard8Accuracy: "96% Noggrannhet",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Ryska",
      languageCard9Accuracy: "96% noggrannhet",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italienska",
      languageCard10Accuracy: "96% noggrannhet",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Nederländska",
      languageCard11Accuracy: "96% noggrannhet",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabiska",
      languageCard12Accuracy: "96% noggrannhet",
      moreLanguagesText: "+ 88 fler språk med 95%+ noggrannhet",
      feature1Label: "Precision",
      feature1TitlePart1: "Ord-nivå",
      feature1TitleHighlight: "Tidsstämplar",
      feature1Description: "Varje ord är perfekt synkat med sin ljudposition. Skapa klickbara transkriptioner, generera exakta undertexter eller hoppa till exakta ögonblick i dina inspelningar. 100ms precision som proffs litar på.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms tidsstämpelprecision",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt för videoredigering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klickbara interaktiva transkriptioner",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Bild-exakta undertexter",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Talare 1",
      transcriptLine1Text: "Välkommen till dagens podcastavsnitt.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Talare 2",
      transcriptLine2Text: "Tack för att jag får vara med i programmet!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Talare 1",
      transcriptLine3Text: "Låt oss dyka in i vårt huvudämne...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Talare 2",
      transcriptLine4Text: "Absolut, jag ser fram emot att diskutera detta.",
      feature2Label: "Smart AI",
      feature2TitlePart1: "Hanterar",
      feature2TitleHighlight: "Snabba konversationer",
      feature2Description: "Vår AI identifierar talare exakt även vid överlappande tal, avbrott och snabba fram-och-tillbaka-samtal. Perfekt för intervjuer, podcasts och möten där talare ofta avbryter.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifierar upp till 20 talare",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Hanterar avbrott perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fungerar med överlappande tal",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Bibehåller noggrannhet vid samtidigt tal",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Talare identifierade",
      feature2VisualSubtext: "Även i snabba konversationer",
      feature3Label: "Läsbarhet",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formaterad text",
      feature3Description: "Inga mer textväggar. Vår AI lägger automatiskt till stycken, meningar och skiljetecken precis där de hör hemma. Resultatet? Avskrifter som faktiskt är trevliga att läsa och enkla att skumma.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smarta styckesbrytningar",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Korrekt skiljetecken",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Korrekt stor bokstav",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Ren, skanningsbar utdata",
      formattingTitle: "Före & Efter",
      formattingBeforeLabel: "❌ Andra:",
      formattingBeforeText: "så idag ska vi prata om de nya funktionerna vi har arbetat på jag tror du verkligen kommer gilla dem de har efterfrågats av användare länge och vi har äntligen fått dem klara",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Så idag ska vi prata om de nya funktionerna vi har arbetat med. Jag tror du verkligen kommer gilla dem. De har efterfrågats av användare länge, och vi har äntligen fått dem klara.",
      comparisonSubtitle: "Noggrannhet",
      comparisonSectionTitle: "Jämförelse",
      comparisonDes: "Se hur vi står oss mot konkurrenterna",
      tableHeader1: "Funktion",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Noggrannhet (Tydligt ljud)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Tidsstämplar på ordnivå",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Talaridentifiering",
      tableRow3NeverCap: "20 talare",
      tableRow3Otter: "16 talare",
      tableRow3Descript: "10 talare",
      tableRow3Rev: "✕",
      tableRow4Feature: "Hanterar samtidigt tal",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begränsat",
      tableRow4Descript: "Begränsat",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart formatering",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Grundläggande",
      tableRow6Feature: "12 språk med 96 %",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Upplev 96 % noggrannhet",
      ctaSubtitle: "Ladda upp din mest utmanande ljudfil och se skillnaden",
      finalCta: "Testa vår noggrannhet nu →",
        languageSectionTitlePart2: "i 12 Huvudspråk"
    }
  },
  Pricing: {
    Hero: {
      "title": "Enkla, transparenta priser",
      "highlighted_text": "Inga dolda tak",
      "description": "Välj den plan som passar dina behov. Uppgradera eller nedgradera när som helst. Inga avtal, inga överraskningar."
    },
    Cards: {
      "title": "Enkla, transparenta priser.",
      "highlighted_text": "Inga dolda tak.",
      "description": "Välj den plan som passar dina behov. Uppgradera eller nedgradera när som helst. Inga avtal, inga överraskningar.",
      "plans": [
            {
              "name": "Gratis",
              "price": "$0",
              "period": "månad",
              "discount": "Perfekt för att prova vår tjänst",
              "limits": {
                "title": "Dagliga gränser",
                "items": [
                  "3 filer/dag (≈90 min totalt/dag)",
                  "Upp till 30 min per fil (≤250 MB)",
                  "Ladda upp 1 fil åt gången",
                  "Standardköprioritet"
                ]
              },
              "features": {
                "title": "Funktioner",
                "items": [
                  "100+ språk",
                  "Talarmärkningar",
                  "Översättning",
                  "Alla exportformat"
                ]
              },
              "cta": {
                "text": "Börja gratis. Ingen kreditkort behövs.",
                "button": "Nuvarande abonnemang"
              }
            },
            {
              "name": "Pro Månadsvis",
              "price": "$17.99",
              "period": "månad",
              "discount": "$9.99 första månaden",
              "limits": {
                "title": "Ingen månatlig gräns",
                "items": [
                  "Obegränsade totala minuter",
                  "Upp till 10 timmar / 5 GB per fil",
                  "Ladda upp 50 filer samtidigt",
                  "Prioriterad kö"
                ]
              },
              "features": {
                "title": "Allt i Gratis, plus",
                "items": [
                  "Tidsstämplar på ordnivå",
                  "Avancerad talaridentifiering",
                  "Formaterade stycken & skiljetecken",
                  "Prioriterat stöd"
                ]
              },
              "cta": {
                "text": "Obegränsade minuter. Prioriterad hastighet. Massuppladdning.",
                "button": "Gå Pro"
              },
              "badge": "Mest populär"
            },
            {
              "name": "Pro Årlig",
              "price": "$8.99",
              "period": "månad",
              "discount": "Faktureras årligen $107.88",
              "limits": {
                "title": "Samma som Pro Månadsvis",
                "items": [
                  "Obegränsade totala minuter",
                  "Upp till 10 timmar / 5 GB per fil",
                  "Ladda upp 50 filer samtidigt",
                  "Prioriterad kö"
                ]
              },
              "features": {
                "title": "Allt i Gratis, plus",
                "items": [
                  "Tidsstämplar på ordnivå",
                  "Avancerad talaridentifiering",
                  "Formaterade stycken & skiljetecken",
                  "Prioriterat stöd"
                ]
              },
              "cta": {
                "text": "Obegränsade minuter. Prioriterad hastighet. Massuppladdning.",
                "button": "Gå Pro"
              },
              "badge": "Bästa Värde - "
            }
          ],
      "disclaimer": '\"Obegränsat\" innebär ingen månatlig tak och ingen artificell nedgång. Skäligt bruk gäller för missbruk av automatisering eller vidaredistribution.'
    },
    ComparisonTable: {
      "header": {
        "title": "Jämför",
        "highlighted_text": "Alla funktioner",
        "subtitle": "Se exakt vad du får med varje plan. Inga dolda begränsningar."
      },
      "plans": [
              "Funktioner",
              "Free",
              "Pro Monthly",
              "Pro Annual"
            ],
      "features": [
            {
              "name": "Pris",
              "values": [
                "$0/månad",
                {
                  "main": "$17.99/månad",
                  "note": "$9.99 första månaden"
                },
                {
                  "main": "$8.99/månad",
                  "note": "Faktureras $107.88/år"
                }
              ]
            },
            {
              "name": "Månatliga minuter",
              "values": ["~2,700 (90/dag)", "Obegränsat", "Obegränsat"]
            },
            {
              "name": "Max filvaraktighet",
              "values": ["30 minuter", "10 timmar", "10 timmar"]
            },
            {
              "name": "Max filstorlek",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Massuppladdningar",
              "values": ["1 fil", "50 filer", "50 filer"]
            },
            {
              "name": "Bearbetningshastighet",
              "values": ["Standard", "Prioriterad", "Prioriterad"]
            },
            {
              "name": "Språk som stöds",
              "values": ["100+ språk", "100+ språk", "100+ språk"]
            },
            {
              "name": "Översättning",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Talaridentifiering",
              "values": ["Grundläggande", "Avancerat (20 talare)", "Avancerat (20 talare)"]
            },
            {
              "name": "Tidsstämplar på ordnivå",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formaterade stycken",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Exportformat",
              "values": ["Alla format", "Alla format", "Alla format"]
            },
            {
              "name": "Support",
              "values": ["E-post", "Prioriterad e-post", "Prioriterad e-post"]
            },
            {
              "name": "Datakvarhållning",
              "values": ["30 dagar", "För alltid", "För alltid"]
            }
          ]
    },
    FAQ: {
      "title": "Vanliga Frågor",
      "titleHighligt": "Frågor",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Är det verkligen obegränsat?",
              "answer": "Ja! Pro-planer har inga månatliga minutgränser. De enda begränsningarna är tekniska: max 10 timmars fillängd och 5GB filstorlek. Du kan bearbeta så många filer du behöver."
            },
            {
              "q": "plan_change",
              "question": "Kan jag byta plan när som helst?",
              "answer": "Absolut! Du kan avbryta din prenumeration när som helst från din instrumentpanel. Uppgradera eller nedgradera när du behöver."
            },
            {
              "q": "payment_methods",
              "question": "Vilka betalningsmetoder accepterar ni?",
              "answer": "Vi accepterar alla större kreditkort, betalkort och PayPal för säkra och enkla betalningar."
            },
            {
              "q": "free_trial",
              "question": "Finns det en gratis provperiod för Pro?",
              "answer": "Ja! Prova Pro gratis i 7 dagar, inget kreditkort krävs. Dessutom får du din första månad till 45% rabatt när du prenumererar."
            },
            {
              "q": "file_retention",
              "question": "Hur länge sparar ni mina filer?",
              "answer": "Gratisplan: 30 dagar. Pro-planer: För alltid! Dina transkriptioner är alltid tillgängliga i ditt konto."
            },
            {
              "q": "data_security",
              "question": "Hur är det med datasäkerhet?",
              "answer": "Vi är SOC 2-certifierade och använder 256-bitars kryptering. Vi använder aldrig ditt innehåll för att träna våra modeller. Dina data tillhör dig."
            }
          ]
    },
    CTA: {
      "title": "Redo att gå obegränsat?",
      "subtitle": "Gå med bland 50 000+ professionella som transkriberar utan gränser",
      "button": "Prova NeverCap gratis →",
      "disclaimer": "Inget kreditkort krävs • Börja transkribera på sekunder"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Skapat för",
      heavyUsers: "Tunga användare",
      whoActuallyNeed: "Som verkligen behöver obegränsat",
      heroSubtitle: "Från poddare med årslångt eftersläp till forskare med hundratals intervjuer. Se hur proffs använder NeverCap för att frigöra sig från uppladdningsgränser och minutbegränsningar.",
      podcasters: {
        title: "Podcasters",
        pain: '"Sluta välja vilka avsnitt som förtjänar avskrifter"',
        description: "Ladda upp hela ditt podcastarkiv på en gång. Skapa shownotes, förbättra SEO och återanvänd innehåll utan att räkna minuter.",
        benefits: {
          benefit1: "Ladda upp alla avsnitt, inte bara 3",
          benefit2: "Skapa SEO-vänliga shownotes",
          benefit3: "Skapa sökbara arkiv",
          benefit4: "Återanvänd som blogginnehåll"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Avsnitt"
          },
          stat2: {
            number: "200 tim",
            label: "Sparat"
          },
          stat3: {
            number: "3x",
            label: "SEO-trafik"
          }
        }
      },
      journalists: {
        title: "Journalister & Författare",
        pain: '"Deadlinepress möter uppladdningsbegränsningar"',
        description: "Ladda upp alla intervjuer i batch före deadline. Sök igenom avskrifter direkt och missa aldrig ett avgörande citat.",
        benefits: {
          benefit1: "Batchuppladdning före deadline",
          benefit2: "Sök alla intervjuer på en gång",
          benefit3: "Exakta citat med tidsstämplar",
          benefit4: "Hantera dialekter & språk"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Intervjuer/mån"
          },
          stat2: {
            number: "96%",
            label: "Noggrannhet"
          },
          stat3: {
            number: "5 min",
            label: "Per timme"
          }
        }
      },
      contentCreators: {
        title: "Innehållsskapare",
        pain: '"Tillgänglighet ska inte vara dyrt"',
        description: "Texta hela din YouTube-kanal. Generera undertexter på flera språk och förbättra din video-SEO direkt.",
        benefits: {
          benefit1: "Texta alla videor på en gång",
          benefit2: "249 språköversättningar",
          benefit3: "YouTube-klara SRT-filer",
          benefit4: "Höj videons SEO-ranking"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videor"
          },
          stat2: {
            number: "100+",
            label: "Språk"
          },
          stat3: {
            number: "249",
            label: "Översättningar"
          }
        }
      },
      researchers: {
        title: "Forskare & Akademiker",
        pain: '"Kvalitativ data ska inte stå i kö"',
        description: "Bearbeta hela forskningsstudier på en gång. Hantera fokusgrupper, intervjuer och panelsamtal med perfekt talaridentifiering.",
        benefits: {
          benefit1: "Bearbeta fokusgrupper i bulk",
          benefit2: "20-talarsidentifiering",
          benefit3: "Exportera till analysprogram",
          benefit4: "GDPR-kompatibel säkerhet"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studie"
          },
          stat2: {
            number: "96%",
            label: "Gruppnoggrannhet"
          },
          stat3: {
            number: "GDPR",
            label: "Kompatibel"
          }
        }
      },
      businessTeams: {
        title: "Affärsteam",
        pain: '"Mötesinspelningar ska vara enkla"',
        description: "Spela in möten direkt eller ladda upp ljudfiler för omedelbar transkribering. Skapa sökbara arkiv från obegränsade konversationer och förlorar aldrig viktiga diskussioner igen.",
        benefits: {
          benefit1: "Direkt ljudinspelning & transkribering",
          benefit2: "Obegränsade mötesinspelningar",
          benefit3: "Sökbart mötesarkiv",
          benefit4: "Ladda upp ljudfiler direkt"
        },
        stats: {
          stat1: {
            number: "Live",
            label: "Inspelning"
          },
          stat2: {
            number: "Omedelbar",
            label: "Uppladdning"
          },
          stat3: {
            number: "20+",
            label: "Talare"
          }
        }
      },
      educators: {
        title: "Utbildare",
        pain: '"YouTube-videor behöver omedelbar transkribering"',
        description: "Klistra bara in YouTube-länkar för att få omedelbara transkriptioner och automatgenererade undertexter. Gör alla utbildningsvideor tillgängliga och sökbara.",
        benefits: {
          benefit1: "Direkt transkribering av YouTube-länk",
          benefit2: "Automatgenerera videotext",
          benefit3: "Transkribera hela kurser",
          benefit4: "Sökbara föreläsningsarkiv"
        },
        stats: {
          stat1: {
            number: "1-Klick",
            label: "YouTube Klistra"
          },
          stat2: {
            number: "Auto",
            label: "Undertexter"
          },
          stat3: {
            number: "100+",
            label: "Språk"
          }
        }
      },
      quotes: {
        title: "Riktiga Användare,",
        titleHighlight: "Riktig Frihet",
        subtitle: "Hör från professionella som brutit sig fria från artificiella begränsningar",
        testimonials: {
          mike: {
            textBefore: '"Jag hade',
            highlight: "3 års avsnitt",
            textAfter: 'som låg otranskriberade. Otter ville att jag skulle välja 3. TRE. NeverCap lät mig ladda upp alla 150 avsnitt under en helg."',
            name: "Mike Rodriguez",
            role: "Podcastvärd"
          },
          jessica: {
            textBefore: '"Som frilansjournalist har jag inte råd med Trints',
            highlight: "$100/månad",
            textAfter: ', men jag kan heller inte arbeta med Otters 10 filer per månad. NeverCap räddade min karriär."',
            name: "Jessica Park",
            role: "Frilansjournalist"
          },
          sarah: {
            textBefore: '"Vårt forskarteam hade',
            highlight: "200 timmar",
            textAfter: 'av fokusgruppinspelningar. Vi bearbetade allt under en helg istället för att ransonera månatliga minuter."',
            name: "Dr. Sarah Chen",
            role: "Chefeforskare"
          },
          carlos: {
            textBefore: '"Jag skapar utbildningsinnehåll på spanska. NeverCap transkriberar perfekt och',
            highlight: "översätter till engelska",
            textAfter: 'för bredare räckvidd. Inga begränsningar, bara tillväxt."',
            name: "Carlos Martinez",
            role: "YouTube-utbildare"
          }
        }
      },
      industries: {
        title: "Pålitlig i",
        titleHighlight: "Branscher",
        subtitle: "Professionella överallt byter till verkligt obegränsat",
        list: {
          media: "Media & Utgivning",
          education: "Utbildning",
          healthcare: "Hälsovård",
          technology: "Teknik",
          finance: "Finans",
          legal: "Juridik"
        }
      },
      cta: {
        title: "Din användning behöver också obegränsat",
        subtitle: "Gå med 50 000+ professionella som slutade räkna minuter och började skapa",
        button: "Starta din obegränsade resa →"
      }
    },
    Podcasters: {
      badge: "Skapat för poddare",
      heroTitle: "Transkribera din",
      heroTitleHighlight: "Hela podcastarkiv",
      heroSubtitle: "Ladda upp hela ditt bakkatalog. Skapa avsnittsanteckningar för varje avsnitt. Inget mer val om vilka avsnitt som ska transkriberas.",
      ctaPrimary: "Börja transkribera gratis",
      ctaSecondary: "Se hur det fungerar",
      trustBadge1: "10 000+ poddare",
      trustBadge2: "Obegränsade avsnitt",
      trustBadge3: "SEO-klara transkriptioner",
      stats: {
        stat1: {
          number: "∞",
          label: "Avsnitt/månad"
        },
        stat2: {
          number: "50",
          label: "Massuppladdning"
        },
        stat3: {
          number: "10 tim",
          label: "Max avsnittslängd"
        },
        stat4: {
          number: "96 %",
          label: "Noggrannhet"
        }
      },
      problemTitle: "Det",
      problemTitleHighlight: "Podcasttranskriberingsproblemet",
      problemSubtitle: 'Andra tjänster tvingar dig välja vilka avsnitt som är "värda" att transkribera',
      problems: {
        problem1: {
          title: "Uppladdningsgränser dödar arkiv",
          description: "Otter ger dig 3 livstidsimport på gratis, 10 per månad på Pro. Hur transkriberar du 3 års avsnitt?"
        },
        problem2: {
          title: "Missade SEO-möjligheter",
          description: "Varje otranskriberat avsnitt är förlorad SEO-trafik. Men Descript begränsar dig till 30 timmar/månad som mest."
        },
        problem3: {
          title: "Kostnaderna exploderar med tillväxt",
          description: "När din podcast växer skjuter transkriberingskostnaderna i höjden. $2/timme överbrukavgifter gör skalning omöjlig."
        }
      },
      solutionTitle: "Det",
      solutionTitleHighlight: "NeverCap-lösningen",
      solutionDescription: "Verkligt obegränsad transkribering. Ladda upp hela ditt arkiv. Transkribera varje nytt avsnitt. Generera avsnittsanteckningar i stor skala. Inga tak, inga gränser, bara tillväxt.",
      workflowTitle: "Din podcast-arbetsflöde,",
      workflowTitleHighlight: "Förenklat",
      workflowSubtitle: "Från inspelning till SEO-optimerade avsnittsanteckningar på minuter",
      workflow: {
        step1: {
          title: "Ladda upp avsnitt",
          description: "Släpp 50 avsnitt på en gång. MP3, MP4, WAV - vi hanterar alla."
        },
        step2: {
          title: "AI-transkribering",
          description: "96 % noggrannhet med talaridentifiering. Perfekt för intervjuer."
        },
        step3: {
          title: "Smart formatering",
          description: "AI lägger till stycken, meningar och skiljetecken automatiskt."
        },
        step4: {
          title: "Publicera & Ranka",
          description: "Exportera till din webbplats. Se din SEO-trafik växa."
        }
      },
      featuresTitle: "Funktioner Poddare",
      featuresTitleHighlight: "Verkligen Behöver",
      featuresSubtitle: "Skapat av poddare, för poddare",
      features: {
        feature1: {
          title: "Flerspråksigenkänning",
          description: "Identifierar och etiketterar automatiskt upp till 20 talare. Perfekt för panelsamtal, intervjuer och samproduktioner."
        },
        feature2: {
          title: "Tidsstämpelkapitel",
          description: "Generera klickbara tidsstämplar för YouTube-beskrivningar. Låt lyssnarna hoppa direkt till sina favoritavsnitt."
        },
        feature3: {
          title: "Smart Formatering",
          description: "Lägger automatiskt till stycken, meningar och skiljetecken. Få rena, läsbara avskrifter. Spara timmar på efterproduktion."
        },
        feature4: {
          title: "SEO-Optimering",
          description: "Avskrifter formaterade för sökmotorer. Öka din podds synlighet och nå nya lyssnare."
        },
        feature5: {
          title: "100+ Språk",
          description: "Transkribera på valfritt språk. Översätt till 249+ språk. Nå en global publik utan ansträngning."
        },
        feature6: {
          title: "Batchbearbetning",
          description: "Ladda upp 50 avsnitt innan läggdags. Vakna till färdiga avskrifter. Bearbeta hela ditt arkiv över natten."
        }
      },
      testimonialsTitle: "Poddare Som Gjorde",
      testimonialsTitleHighlight: "Bytet",
      testimonialsSubtitle: "Riktiga berättelser från riktiga poddare",
      testimonials: {
        mike: {
          text: '"Jag har hållit på med en podcast i 3 år och transkriberade allt manuellt som en idiot. Laddade upp 6 avsnitt på en gång och den separerade mig och min medvärd perfekt. Caféavsnittet jag trodde var förstört? Kristallklar avskrift. Jag skriver aldrig det här själv igen."',
          name: "Mike Rodriguez",
          role: 'Värd för "The Daily Grind" Podcast'
        },
        sarah: {
          text: '"Otter begränsade mig till 10 filimports per månad. Jag har 150 avsnitt i eftersläpning. NeverCap lät mig ladda upp allt i 3 omgångar. Min organiska trafik har ökat med 300% sedan jag lade till avskrifter till gamla avsnitt. Det här betalar bokstavligen för sig självt."',
          name: "Sarah Chen",
          role: 'Skapare av "Tech Talks Today"'
        }
      },
      comparisonTitle: "Varför Poddare Väljer",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Se hur vi står oss mot konkurrensen",
      comparison: {
        headers: {
          feature: "Funktion",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Månatlig Avsnittsgräns",
            nevercap: "Obegränsat",
            otter: "~13 avsnitt (1200 min)",
            descript: "~30 avsnitt (30 tim)"
          },
          uploadLimit: {
            feature: "Filuppladdningsgräns",
            nevercap: "Obegränsat",
            otter: "10 per månad",
            descript: "1 åt gången"
          },
          batchProcessing: {
            feature: "Batchbearbetning",
            nevercap: "50 filer",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maximal Avsnittslängd",
            nevercap: "10 timmar",
            otter: "90 minuter",
            descript: "Obegränsat"
          },
          speakerDetection: {
            feature: "Talarigenkänning",
            nevercap: "20 talare",
            otter: "16 talare",
            descript: "10 talare"
          },
          smartFormatting: {
            feature: "Smart formatering",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Pris",
            nevercap: "$17.99/mån",
            otter: "$16.99/mån",
            descript: "$30/mån"
          }
        }
      },
      ctaTitle: "Börja transkribera varje avsnitt",
      ctaSubtitle: "Gå med i 10 000+ poddare som aldrig oroar sig för gränser",
      ctaButton: "Ladda upp dina första 50 avsnitt gratis →",
      ctaDisclaimer: "Ingen kreditkort krävs • Bearbeta obegränsat med avsnitt • Avbryt när som helst"
    },
    Journalists: {
      hero: {
        badge: "För journalister & författare",
        title: "Transkribera varje intervju.",
        titleHighlight: "Missa aldrig ett citat.",
        subtitle: "Sluta välja vilka intervjuer som förtjänar transkribering. Ladda upp alla inspelningar på en gång, sök igenom allt direkt och möt dina deadlines utan uppladdningsångest.",
        ctaPrimary: "Börja med obegränsade uppladdningar →",
        ctaSecondary: "Se hur det fungerar",
        stats: {
          uploads: {
            number: "∞",
            label: "Filuppladdningar"
          },
          accuracy: {
            number: "96%",
            label: "Noggrannhet"
          },
          speed: {
            number: "5 min",
            label: "Per timme"
          }
        },
        dashboard: {
          title: "Intervjukö",
          status: "• All bearbetning",
          interviews: {
            cityCouncil: {
              title: "Kommunfullmäktiges möte",
              duration: "2h 15min • Laddar upp...",
              action: "Bearbetar"
            },
            expertInterview: {
              title: "Expertintervju - Dr. Chen",
              duration: "45min • Transkriberar...",
              action: "96% Klart"
            },
            pressConference: {
              title: "Presskonferens",
              duration: "1h 30min • Klar",
              action: "Visa →"
            },
            phoneInterview: {
              title: "Telefonintervju - Källa",
              duration: "35min • Klar",
              action: "Visa →"
            }
          }
        }
      },
      problem: {
        title: "Den här",
        titleHighlight: "Journalistens transkriberingsproblem",
        subtitle: 'Andra tjänster tvingar dig att välja vilka intervjuer som är "värda" att transkribera',
        problems: {
          uploadLimits: {
            title: "Uppladdningsgränser dödar utredningar",
            description: "Otter ger dig 10 filimport per månad på Pro. Hur transkriberar du 3 veckors utredningsintervjuer?"
          },
          missingQuotes: {
            title: "Missar avgörande citat",
            description: "Varje otranskriberad intervju kan innehålla nyckeln till historien. Men Trint begränsar dig till 50 timmar/månad som mest."
          },
          costExplosion: {
            title: "Kostnaderna exploderar med deadlines",
            description: "När din utredning fördjupas, skjuter transkriptionskostnaderna i höjden. $100/månad i överavgifter gör nyheter i realtid omöjliga."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap-lösningen",
          description: "Sann obegränsad transkription. Ladda upp hela din utredning. Transkribera varje intervju. Sök alla citat direkt. Inga tak, inga begränsningar, bara journalistik."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Bästa intervjutranskriptionsprogrammet",
        titleSuffix: "för Journalister",
        subtitle: "Verkliga fördelar som spelar roll när deadlines är snäva och precision är allt",
        solutions: {
          unlimitedUploads: {
            label: "Obegränsat Volym",
            title: "Obegränsat volym för alla dina intervjuer",
            description: "Till skillnad från program med minutbegränsningar kan du transkribera varje intervju, från en snabb pratstund till en flertimmarsdiskussion. Oroa dig aldrig för att få slut på krediter inför deadline.",
            points: {
              simultaneousUpload: "Inga månatliga minutgränser",
              noLimits: "Stöd för 10-timmarsintervjuer",
              processWhileWrite: "Bearbeta hela utredningar på en gång",
              longRecordings: "10-timmarsinspelningar stöds"
            },
            visual: {
              number: "∞",
              label: "Inga gränser. Någonsin."
            }
          },
          instantSearch: {
            label: "Blixtsnabb Hastighet",
            title: "Hastighet som matchar din nyhetscykel",
            description: "Få din intervjutranskription på minuter, inte dagar. Slutför berättelser snabbare än någonsin. Vår AI bearbetar timmar av ljud medan du tar en kaffe.",
            points: {
              searchAll: "5-minuters leverans för 1-timmarsintervjuer",
              wordTimestamps: "Prioriterad bearbetning för brådskande berättelser",
              jumpToMoments: "Realtidsuppföljning av framsteg"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Per timme ljud",
              results: {
                mayorInterview: '"...vår klimatpolitik kommer att förändras..."',
                expertPanel: '"...policyförklaringen visar tydligt..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Citatklar Noggrannhet",
            title: "Noggrannhet du kan citera",
            description: "Vår AI levererar mycket noggranna transkriptioner, så att citaten du publicerar är exakta och tillförlitliga. Professionell transkription som redaktörer litar på.",
            points: {
              accuracyGuarantee: "96% noggrannhetsgaranti",
              handlesAccents: "Hanterar teknisk terminologi",
              smartPunctuation: "Perfekt talaridentifiering"
            },
            visual: {
              accuracy: "96%",
              label: "Publiceringsklar noggrannhet",
              transcript: {
                speaker1: '"Utredningen avslöjade betydande avvikelser i de finansiella rapporterna."',
                speaker2: '"Kan du utveckla de specifika avvikelserna?"'
              }
            }
          },
            ironclad: {
                  label: "Källskydd",
                  title: "Bombssäkert källskydd",
                  description: "Vi erbjuder robusta säkerhetsfunktioner för att skydda din känsliga intervjudata och konfidentiella källor. Banknivåkryptering säkrar dina utredningar.",
                  points: {
                    accuracyGuarantee: "End-to-end-kryptering",
                    handlesAccents: "Automatiska filraderingsalternativ",
                    smartPunctuation: "GDPR- och integritetskompatibel"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maximal säkerhet"
                  }
                }
        }
      },
      features: {
        title: "Allt en",
        titleHighlight: "Journalist behöver",
        subtitle: "Professionella verktyg som respekterar ditt arbetsflöde",
        featuresList: {
          languages: {
            title: "100+ Språk",
            description: "Intervjua källor globalt på 12 huvudspråk med 96% noggrannhet."
          },
          exportFormats: {
            title: "Exportformat",
            description: "Word, PDF, SRT, TXT. Kompatibelt med alla arbetsflöden."
          },
          sourceProtection: {
            title: "Källskydd",
            description: "Banknivåkryptering. Dina källor förblir konfidentiella."
          },
          timestamps: {
            title: "Tidsstämplar",
            description: "Klicka på valfritt citat för att hoppa till exakt ljudögonblick."
          },
          teamSharing: {
            title: "Teamdelning",
            description: "Samarbeta med redaktörer. Dela avskrifter säkert."
          },
          mobileReady: {
            title: "Mobilanpassad",
            description: "Ladda upp från telefon. Granska avskrifter var som helst."
          },
          smartFormatting: {
            title: "Smart formatering",
            description: "Automatiska stycken och skiljetecken för läsbara avskrifter."
          },
          batchProcessing: {
            title: "Batchbearbetning",
            description: "Ladda upp 50 filer samtidigt. Bearbeta över natten medan du sover."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: '"Jag hade 3 års intervjuer oavskrivna på grund av uppladdningsbegränsningar. NeverCap lät mig bearbeta allt på en helg. En spelväxlare."',
          name: "Jessica Park",
          role: "Frilansjournalist, före detta Otter-användare"
        }
      },
      cta: {
        title: "Börja transkribera",
        titleHighlight: "Utan gränser",
        subtitle: "Gå med i tusentals journalister som slutade räkna uppladdningar och började fokusera på berättelser",
        ctaPrimary: "Prova obegränsat gratis →",
        ctaSecondary: "Se priser"
      }
    },
    ContentCreators: {
      hero: {
        badge: "För innehållsskapare",
        title: "Transkribera YouTube-videor,",
        titleHighlight: "Obegränsat",
        titleSuffix: "1",
        subtitle: "Oavsett om du behöver transkribera en YouTube-video, transkribera en TikTok-video för återanvändning eller lista ut hur man transkriberar en Facebook-video till text, hanterar vår plattform allt sömlöst. Generera undertexter på 100+ språk utan månatliga gränser – ren kreativ frihet.",
        ctaPrimary: "Börja med obegränsad textning →",
        ctaSecondary: "Se hur det fungerar",
        stats: {
          videos: {
            number: "∞",
            label: "Videor/månad"
          },
          languages: {
            number: "100+",
            label: "Språk"
          },
          accuracy: {
            number: "96%",
            label: "Noggrannhet"
          },
          platforms: {
            number: "10+",
            label: "Plattformar"
          }
        }
      },
      platforms: {
        title: "Hämta & transkribera från vilken plattform som helst",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Google Drive",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        },
          titleMax: "Transkribera videor från",
          titleMaxHighlight: "Vilken plattform som helst"
    },
      features: {
        title: "Allt du behöver för att",
        titleHighlight: "Skala upp innehåll",
        subtitle: "Professionella verktyg utan professionella gränser",
        oneClickImport: {
          label: "Enklicksimport",
          title: "Transkribera YouTube, TikTok &",
          titleHighlight: "Instagram-videor genom att klistra in en länk",
          description: "Vårt verktyg förenklar hur du transkriberar videor. För att transkribera en Instagram-video, klistra bara in länken. Samma gäller för att transkribera en Vimeo-video till text. Bearbeta hela din kanals eftersläpning på en helg.",
          points: {
            directYoutube: "Direkt transkription från YouTube-länk",
            multiplePlatforms: "Hämta från 10+ plattformar",
            batchPlaylists: "Bearbeta hela spellistor i batch",
            autoSync: "Auto-synk med dina kanaler"
          },
          demo: {
            instruction: "Klistra in din video-URL:",
            url: "https://youtube.com/watch?v=...",
            status: "Hämtar & Transkriberar..."
          }
        },
        globalReach: {
          label: "Global Räckvidd",
          title: "100+ Språk.",
          titleHighlight: "Inga Gränser.",
          description: "Nå en global publik med automatisk översättning till 100+ språk. Generera undertexter på flera språk samtidigt. Inga extra kostnader, inga månatliga tak för översättningar.",
          points: {
            highAccuracy: "96% noggrannhet i 12 huvudspråk",
            unlimitedTranslations: "Obegränsade översättningar inkluderade",
            multicultural: "Perfekt för mångkulturellt innehåll",
            autoDetect: "Automatisk källspråksdetektering"
          },
          visual: {
            number: "100+",
            title: "Språk som stöds",
            subtitle: "Översätt en gång, nå alla"
          }
        },
        flexibleExport: {
          label: "Flexibel Export",
          title: "Alla Format",
          titleHighlight: "Du Behöver",
          description: "Exportera i det format som passar ditt arbetsflöde. Från SRT-filer för YouTube till VTT för webbläsare, eller redigerbara dokument för manus. Alla exportalternativ obegränsade, alla ingår i varje plan.",
          points: {
            videoFormats: "SRT & VTT för videoplattformar",
            editingFormats: "DOCX & PDF för redigering",
            dataAnalysis: "CSV för dataanalys",
            simpleScripts: "TXT för enkla manus"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "TXT",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "Från Uppladdning till",
        titleHighlight: "Publicerat",
        titleSuffix: "på Minuter",
        subtitle: "Det snabbaste sättet att texta hela ditt innehållsbibliotek",
        steps: {
          pasteLinks: {
            title: "Klistra In Länkar",
            description: "Släpp in en YouTube-, TikTok- eller valfri videolänk. Eller ladda upp filer direkt."
          },
          autoTranscribe: {
            title: "Auto-Transkribera",
            description: "AI bearbetar med 96% noggrannhet. Hanterar dialekter & flera talare."
          },
          editTranslate: {
            title: "Redigera & Översätt",
            description: "Perfektionera dina undertexter. Översätt till 100+ språk direkt."
          },
          exportPublish: {
            title: "Exportera & Publicera",
            description: "Ladda ner i valfritt format. Ladda upp till din plattform. Klart!"
          }
        }
      },
      testimonials: {
        title: "Skapare Byter",
        titleHighlight: "Dagligen",
        subtitle: "Från begränsade planer till obegränsad frihet",
        carlos: {
          textBefore: "Jag skapar utbildningsinnehåll på spanska. NeverCap transkriberar perfekt och",
          textAfter: "för bredare räckvidd. Inga gränser, bara tillväxt. Mina kanalvisningar ökade 3x efter att jag lade till flerspråkiga undertexter.",
          highlight: "översätts till engelska",
          name: "Carlos Martinez",
          role: "YouTube-pedagog • 250 000 prenumeranter"
        },
        sarah: {
          textBefore: "Descript ville ha $30/månad för",
          textAfter: ". Jag hade 500+ videor i backlog. NeverCap lät mig bearbeta allt på en helg. SEO-boosten från undertexter betalade för sig själv den första månaden.",
          highlight: "30 timmar",
          name: "Sarah Lee",
          role: "Livsstilsvlogger • 180 000 prenumeranter"
        },
        jake: {
          textBefore: "Funktionen",
          textAfter: "är en spelväxlare. Jag laddar inte ner något längre. Bara klistra in, transkribera, klart. Att bearbeta mina podcastklipp för TikTok har aldrig varit enklare.",
          highlight: "direkt YouTube-hämtning",
          name: "Jake Wilson",
          role: "Podcastvärd • Topp 1%-skapare"
        },
        yuki: {
          textBefore: "Jag skapar innehåll på 5 språk. Andra tjänster tar betalt",
          textAfter: ". NeverCap ger mig obegränsade översättningar. Min internationella publik växte med 400% sedan jag började använda riktiga inhemska undertexter.",
          highlight: "per översättning",
          name: "Yuki Tanaka",
          role: "Spelskapare • 500 000 prenumeranter"
        }
      },
      cta: {
        title: "Hela din kanal. Undertextad. Idag.",
        subtitle: "Gå med bland 50 000+ skapare som slutade räkna minuter och började skapa",
        button: "Starta obegränsad undertextning →"
      },
        FAQSection: {
              "title": "Dina transkriberingsfrågor,",
              "titleHighlight": "Besvarade",
              subtitle: "Allt du behöver veta om att transkribera videor från olika plattformar",
              "questions": [
                    {
                      "question": "F: Hur transkriberar jag en YouTube-video med NeverCap?",
                      "answer": "Det är enkelt. Hitta bara YouTube-videon du vill transkribera, kopiera dess URL och klistra in den i vår app. Vår AI hämtar videon automatiskt och ger en fullständig texttranskription på några minuter."
                    },
                    {
                      "question": "F: Vad är det bästa sättet att transkribera en Facebook-video till text?",
                      "answer": "Det enklaste sättet är att använda en direktlänk. Kopiera URL:en till Facebook-videon, och vår plattform hanterar resten, konverterar tal till text med upp till 96% noggrannhet och sparar dig från manuell transkribering."
                    },
                    {
                      "question": "F: Kan jag transkribera TikTok- och Instagram-videor?",
                      "answer": "Absolut. Vi stöder transkribering för både TikTok- och Instagram-videor. Detta är perfekt för innehållsskapare som vill återanvända sitt kortformade videomaterial till blogginlägg, artiklar eller textbaserade sociala medieuppdateringar."
                    },
                    {
                      "question": "F: Hur transkriberar jag en Vimeo-video till text?",
                      "answer": "Att transkribera Vimeo-videor är lika enkelt som på andra plattformar. Kopiera bara Vimeo-videons URL och klistra in den i NeverCap. Vår AI bearbetar videon och genererar en korrekt texttranskription som du kan ladda ner i flera format."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Byggd för akademisk excellens",
      heroTitle1: "Transkribera varje intervju.",
      heroTitle2: "Analysera alla dina data.",
      heroSubtitle: "Sluta välja vilka fokusgrupper som ska transkriberas. Bearbeta alla dina kvalitativa data med 96% noggrannhet och felfri talaridentifiering—även med 20 deltagare som pratar samtidigt.",
      heroCtaPrimary: "Prova gratis - inget kreditkort",
      heroCtaSecondary: "Se hur det fungerar",
      statsInterviewHours: "Intervjutimmar",
      statsAccuracy: "Noggrannhet",
      statsSpeakersId: "Talar-ID",
      statsCompliant: "Kompatibel",
      problemTitle: "Den här",
      problemSubtitle: 'Andra tjänster får dig att välja vilka data som är "värda" att transkribera',
      problemCard1Title: "Uppladdningsgränser dödar studier",
      problemCard1Desc: "Otter ger dig 3 livstidsimports. Hur transkriberar du 200 timmars fokusgrupper?",
      problemCard2Title: "Kritisk data saknas",
      problemCard2Desc: "Varje otranskriberad intervju kan innehålla banbrytande insikter. Men Rev tar minst $2/minut.",
      problemCard3Title: "Bidragsmedel försvinner",
      problemCard3Desc: "När din datamängd växer exploderar transkriptionskostnaderna. $500 per fokusgrupp gör skalning omöjlig.",
      solutionTitle: "NeverCap-lösningen",
      solutionDesc: "Sann obegränsad transkription. Ladda upp hela din studie. Transkribera varje intervju. Analysera alla dina data. Inga tak, inga begränsningar, bara forskning.",
      feature1Label: "Inga Gränser",
      feature1Title: "Hantera dina",
      feature1Desc: 'Ladda upp alla 200 timmars intervjuer ikväll. Vakna till färdiga, sökbara transkript. Inga månatliga tak, inga filbegränsningar, ingen "rimlig användning"-skitsnack.',
      feature1Point1: "Massuppladdning av 50 filer samtidigt",
      feature1Point2: "Bearbeta longitudinella studier helt",
      feature1Point3: "Inga lagringsgränser för transkript",
      feature1Point4: "Exportera till NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Obegränsade Timmar",
      feature1Visual2: "Samma pris oavsett 10 eller 10 000 timmar",
      feature2Label: "Smart AI",
      feature2Title: "Exakt precision",
      feature2Desc: "Vår AI spårar upp till 20 talare även när de talar samtidigt, avbryter varandra eller svarar på en gång. Varje röst fångas och etiketteras korrekt.",
      feature2Point1: "20-talaridentifiering",
      feature2Point2: "Hanterar samtalsöverlappningar & avbrott",
      feature2Point3: "Talaretiketter du kan döpa om",
      feature2Point4: "Tidsstämpel för varje ord",
      conversationParticipant1: "Deltagare 1",
      conversationText1: "Det största hindret vi möter är definitivt kostnaden för behandling...",
      conversationParticipant2: "Deltagare 2",
      conversationText2: "Absolut, men jag vill tillägga att tillgången är—",
      conversationParticipant3: "Deltagare 3",
      conversationText3: "—ursäkta att jag avbryter, men transport är också jätteviktigt.",
      conversationText4: "Ja! Precis det jag skulle säga.",
      conversationParticipant4: "Deltagare 4",
      conversationText5: "På landsbygden är det alla tre: kostnad, tillgång OCH transport.",
      feature3Label: "Precision",
      feature3Title: "Pålitlig",
      feature3Desc: "Hanterar fackspråk, starka dialekter och branschspecifik terminologi som en proffs. Tillräckligt exakt för publikation, peer review och din avhandlingskommitté.",
      feature3Point1: "Medicinsk & vetenskaplig terminologi",
      feature3Point2: "100+ språk & dialekter",
      feature3Point3: "Ordagranna & renlästa lägen",
      feature3Point4: "Redigera och exportera i vilket format som helst",
      feature3Visual1: "Forskningsgrad av noggrannhet",
      feature3Visual2: "Förtroende av 50 000+ forskare",
      feature4Label: "Säkerhet",
      feature4Title: "IRB-certifiering",
      feature4Desc: "Din känsliga forskningsdata skyddas med företagsklassad säkerhet. GDPR-uppfyllande, HIPAA-redo alternativ och fullständiga revisionsspår för IRB-krav.",
      feature4Point1: "End-to-end-kryptering",
      feature4Point2: "GDPR & CCPA-uppfyllande",
      feature4Point3: "Automatiska borttagningspolicyer",
      feature4Point4: "Säker teamkollaboration",
      useCasesTitle: "Perfekt för",
      useCasesSubtitle: "Från etnografi till kliniska studier",
      useCase1Title: "Fokusgrupper",
      useCase1Desc: "Hanterar 8-20 deltagare med överlappande tal. Perfekt talaridentifiering även under heta diskussioner. Exportera direkt till kvalitativ analysprogramvara.",
      useCase2Title: "Djupintervjuer",
      useCase2Desc: "Bearbeta hundratals en-mot-en-intervjuer samtidigt. Bibehåll konsistens i hela din datamängd. Sök igenom alla transkriptioner direkt.",
      useCase3Title: "Klinisk forskning",
      useCase3Desc: "HIPAA-kompatibla alternativ för patientintervjuer. Korrekt transkription av medicinsk terminologi. Säker hantering av känslig hälsoinformation.",
      useCase4Title: "Etnografiska studier",
      useCase4Desc: "Fältinspelningar i naturliga miljöer. Hanterar bakgrundsljud och flera talare. Stöd för 100+ språk och dialekter.",
      useCase5Title: "Muntliga historieprojekt",
      useCase5Desc: "Bevara hela arkiv utan begränsningar. Skapa sökbara historiska dokument. Perfekt för longitudinella och generationsstudier.",
      useCase6Title: "Avhandlingsforskning",
      useCase6Desc: "Studentvänliga priser med fullständiga funktioner. Bearbeta hela din datamängd till en överkomlig kostnad. Möt tighta deadlines med batchbearbetning.",
      testimonialTitle: "Förtroende av",
      testimonialText: "Vårt forskningsteam hade 200 timmar fokusgruppinspelningar från vår studie om folkhälsa. Andra tjänster ville att vi skulle välja vilka sessioner som skulle transkriberas på grund av kostnaden. NeverCap lät oss bearbeta allt under en helg. Talaridentifieringen för 20 personer fungerade faktiskt—även under våra rörigaste diskussioner där alla pratade samtidigt. Detta verktyg har helt förändrat hur vi hanterar kvalitativa data.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Cheforskar, Public Health Institute",
      ctaTitle: "Sluta välja vilka data som ska analyseras",
      ctaSubtitle: "Gå med bland 50 000+ forskare som transkriberar allt",
      ctaButton: "Prova NeverCap gratis",
        problemTitle2: "Forskningsavskrivningsproblemet",
        title: "The",
        useCasesTitle2: "Varje Forskningsmetod",
        testimonialTitle2: "Ledande forskare",
        feature1TitleHl: "Hela forskningsprojektet",
        feature1TitlePost: "Allt på ett ställe",
        feature2TitleHl: "Fokusgruppsintervjuer",
        feature2TitlePost: "Framgång varje gång",
        feature3TitleHl: "96% noggrannhet",
        feature4TitleHl: "Säkerhet",
        testimonialText2Hl: "200 timmar",
        testimonialText3: "av fokusgruppinspelningar från vår hälsostudie i samhället. Andra tjänster ville att vi skulle välja vilka sessioner som skulle avskrivas på grund av kostnaden. NeverCap lät oss behandla",
        testimonialText4Hl: "allt på en helg",
        testimonialText5: ". Identifieringen av 20 talare fungerade faktiskt – till och med under våra rörigaste diskussioner där alla pratade samtidigt. Det här verktyget har",
        testimonialText6Hl: "helt förändrat",
        testimonialText7: "hur vi hanterar kvalitativa data."
    },
    BusinessTeams: {
      heroBadge: "För företagsteam",
      heroTitle1: "Mötesinspelning",
      heroTitle2: "Gjort enkelt",
      heroSubtitle: "Spela in möten direkt i din webbläsare eller ladda upp ljudfiler direkt. Bygg sökbara arkiv från obegränsade konversationer. Förlorar aldrig viktiga diskussioner igen med verkligt obegränsad transkription.",
      heroCtaPrimary: "Börja spela in nu →",
      heroCtaSecondary: "Se hur det fungerar",
      recordingStatus: "Spelar in...",
      statsMeetingMinutes: "Mötesanteckningar",
      statsLiveRecording: "Inspelning",
      statsSpeakerID: "Talar-ID",
      statsInstantUpload: "Ladda upp & Bearbeta",
      featuresTitle: "Transkription för alla företag",
      featuresSubtitle: "Från liveinspelning till direktuppladdning—vi har eliminerat alla friktionspunkter",
      feature1Title: "Spela in direkt i din webbläsare",
      feature1Desc: "Inga nedladdningar, inga tillägg. Börja spela in direkt med ett klick. Perfekt ljudkvalitet, automatisk talaridentifiering.",
      feature1Benefit1: "Enklicksinspelning",
      feature1Benefit2: "Ingen programinstallation",
      feature1Benefit3: "Fungerar på alla enheter",
      feature1Benefit4: "Realtidstranskription",
      feature1Visual1: "Klicka & Spela in",
      feature1Visual2: "Ingen installation krävs",
      feature2Title: "Ladda upp vilken ljudfil som helst direkt",
      feature2Desc: "Har du inspelningar från Zoom, Teams eller din telefon? Ladda upp dem direkt. Stöd för alla större ljud- och videoformat. Bearbeta flera filer samtidigt utan väntan.",
      feature2Benefit1: "Stödjer: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Batchuppladdningsfunktion",
      feature2Benefit3: "Filer på upp till 10 timmar stöds",
      feature2Benefit4: "Bearbeta medan du arbetar",
      feature2Visual1: "Dra & Släpp filer",
      feature3Title: "Byggd för teamsamarbete",
      feature3Desc: "Dela transkriptioner med ditt team direkt. Lyssna på inspelningar tillsammans, exportera transkriptioner i flera format och se till att alla håller sig uppdaterade med sökbara mötesarkiv.",
      feature3Benefit1: "Dela transkriptioner med vem som helst",
      feature3Benefit2: "Lyssna på originalinspelningar",
      feature3Benefit3: "Exportera avskrifter i flera format",
      feature3Benefit4: "Teamsökbara arkiv",
      feature3Visual1: "Teammedlemmar",
      feature3Visual2: "Obegränsat samarbete",
      feature4Title: "Hitta vilket samtal som helst direkt",
      feature4Desc: "Sök igenom alla dina möten på en gång. Hitta det viktiga beslutet från förra kvartalet eller kundkravet från månader sedan. AI-driven sökning förstår kontext, inte bara nyckelord.",
      feature4Benefit1: "Sök alla möten på en gång",
      feature4Benefit2: "AI förstår kontext",
      feature4Benefit3: "Filtrera efter talare eller datum",
      feature4SearchPlaceholder: '🔍 Sök: "Q4 intäktmål"',
      feature4SearchResults: "Hittades i 3 möten:",
      feature4Meeting1: "Försäljningsplanering - 15 okt",
      feature4Meeting1Text: '"...mål för Q4 satt till $2M..."',
      feature4Meeting2: "Styrelsemöte - 20 okt",
      feature4Meeting2Text: '"...Q4 intäktsprognoser..."',
      workflowTitle: "Hur man transkriberar en",
      workflowSubtitle: "Ett smidigt arbetsflöde som fångar varje viktigt ögonblick",
      workflowStep1Title: "Spela in eller ladda upp",
      workflowStep1Desc: "Börja spela in live eller ladda enkelt ner mötesinspelningar från Zoom, Google Meet eller Microsoft Teams",
      workflowStep2Title: "Auto-transkribering",
      workflowStep2Desc: "Vår AI transkriberar automatiskt inspelningen till text med 96% noggrannhet på minuter",
      workflowStep3Title: "Samarbeta",
      workflowStep3Desc: "Dela, kommentera och extrahera åtgärdslistor",
      workflowStep4Title: "Sök & analysera",
      workflowStep4Desc: "Hitta insikter i alla dina möten",
      testimonialsTitle: "Team älskar",
      testimonialsSubtitle: "Se hur företag förändrar sin möteskultur",
      testimonial1Text: '"Vi gick från att missa viktiga detaljer till att ha ett sökbart arkiv av varje konversation. Direktinspelningsfunktionen gör att vi aldrig glömmer att fånga viktiga diskussioner."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktchef, TechCorp",
      testimonial2Text: '"Otter begränsade oss till 10 filuppladdningar per månad. Nu laddar vi upp alla våra kundsamtal direkt. En spelväxlare för vårt säljteams uppföljningar."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Säljchef, ConsultPro",
      testimonial3Text: '"Möjligheten att söka igenom månaders möten räddade oss under revisionen. Hittade varje beslut och godkännande på sekunder."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Sluta tappa bort viktiga samtal",
      ctaSubtitle: "Gå med i tusentals team som fångar varje möte med obegränsad transkribering",
      ctaButton: "Börja spela in gratis →",
        featuresTitle2: "Möte",
        workflowTitle2: "Zoom-inspelning till text",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "För lärare & pedagoger",
      heroTitle1: "Gör lärande",
      heroTitle2: "Tillgängligt för alla",
      heroSubtitle: "Klistra bara in YouTube-länkar för att få omedelbara avskrifter med automatgenererade undertexter. Omvandla föreläsningar, guider och utbildningsvideor till sökbart, tillgängligt innehåll som alla elever kan lära sig av.",
      heroCtaPrimary: "Prova gratis - Inget kreditkort",
      heroCtaSecondary: "Se demo",
      stats1Number: "1-klick",
      stats1Label: "YouTube-transkribering",
      stats2Number: "100+",
      stats2Label: "Språk som stöds",
      stats3Number: "∞",
      stats3Label: "Obegränsade videor",
      stats4Number: "96%",
      stats4Label: "Noggrannhetsgrad",
      featuresTitle: "Allt pedagoger behöver för",
      featuresSubtitle: "Från YouTube-föreläsningar till inspelade lektioner – gör allt ditt innehåll tillgängligt",
      feature1Title: "Direktlänkar för YouTube & plattformar",
      feature1Desc: "Klistra in vilken videolänk som helst och få transkript direkt. Fungerar med YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive och mer. Ingen nedladdning, ingen väntan.",
      feature1Point1: "Direkttranskription – ingen nedladdning behövs",
      feature1Point2: "Stöd för alla större plattformar",
      feature1Point3: "Bearbeta hela spellistor på en gång",
      feature1Point4: "Fungerar med privata videor (med tillstånd)",
      feature2Title: "Automatgenererade textningar & undertexter",
      feature2Desc: "Skapa exakta textningar direkt för alla dina utbildningsvideor. Gör innehållet tillgängligt för studenter med hörselnedsättning, icke-modersmålstalare eller de som föredrar att läsa med.",
      feature2Point1: "SRT, VTT och TXT exportformat",
      feature2Point2: "Ordvisa tidsstämplar för perfekt synk",
      feature2Point3: "Redigera och anpassa textningar enkelt",
      feature2Point4: "Ladda direkt upp till YouTube",
      feature2Visual1: "Språköversättningar",
      feature2Visual2: "Gör ditt innehåll globalt tillgängligt",
      feature3Title: "Organisera efter kurser & kategorier",
      feature3Desc: "Skapa mappar för att organisera dina transkript efter kurs, ämne eller termin. Håll allt ditt utbildningsmaterial snyggt kategoriserat och lättsökt. Bygg ett omfattande bibliotek med tillgängligt kursmaterial.",
      feature3Point1: "Skapa obegränsat med mappar och undermappar",
      feature3Point2: "Tagga videor efter ämne eller svårighetsgrad",
      feature3Point3: "Organisera flera transkript i grupp",
      feature3Point4: "Sök igenom allt ditt innehåll direkt",
      feature3VisualTitle: "Ditt kursbibliotek",
      feature3Folder1: "Matematik 101",
      feature3Folder2: "Fysikföreläsningar",
      feature3Folder3: "Biologilabbvideor",
      feature3Folder4: "Historiska dokumentärer",
      feature3Folder5: "Språkinlärning",
      feature4Title: "AI-transkribera ljudfil till studieguide",
      feature4Desc: "Dela inte bara inspelningar. Transkribera automatiskt föreläsningar till text och andra ljudfiler till detaljerade studieguider, kompletta med sammanfattningar och nyckelbegrepp för effektiv studentåterblick. Exportera i TXT, DOCX eller PDF-format.",
      feature4Point1: "TXT för enkel textredigering",
      feature4Point2: "DOCX för formaterade dokument",
      feature4Point3: "PDF för enkel delning och utskrift",
      feature4Point4: "Exportera flera filer i grupp",
      workflowTitle: "Så fungerar det:",
      workflowSubtitle: "Från videolänk till tillgängligt transkript och studiematerial på minuter",
      workflowStep1Title: "Ladda upp din föreläsning",
      workflowStep1Desc: "Ladda upp vilken ljud- eller videofil som helst (MP3, MP4, WAV) eller klistra in en YouTube-länk",
      workflowStep2Title: "AI-transkription",
      workflowStep2Desc: "Vår AI transkriberar ljudet, separerar talare och identifierar nyckelämnen",
      workflowStep3Title: "Generera textning",
      workflowStep3Desc: "Skapa perfekt synkade undertexter automatiskt",
      workflowStep4Title: "Exportera studieguide",
      workflowStep4Desc: "Ladda ner texten, sammanfattningen eller exportera för att skapa din slutliga studieguide",
      useCasesTitle: "Perfekt för alla",
      useCasesSubtitle: "Se hur lärare använder NeverCap för att förbättra lärandet",
      useCase1Title: "Inspelade föreläsningar",
      useCase1Text: "Transkribera hela terminers inspelade föreläsningar. Studenter kan söka efter specifika ämnen, granska nyckelbegrepp och missa aldrig viktig information.",
      useCase2Title: "Onlinekurser",
      useCase2Text: "Gör dina onlinekurser tillgängliga för internationella studenter med översättningar i 100+ språk. Öka antalet anmälningar och tillfredsställelse.",
      useCase3Title: "Studiematerial",
      useCase3Text: "Använd AI för att transkribera ljudfiler till studieguider från videogenomgångar och föreläsningar. Perfekt för studenter som föredrar att läsa eller snabbt behöver granska innehåll med sökbar text.",
      useCase4Title: "Tillgänglighetsanpassning",
      useCase4Text: "Uppfyll tillgänglighetskrav genom att tillhandahålla textning och transkriptioner för allt videomaterial. Säkerställ lika tillgång för alla studenter.",
      useCase5Title: "Omvänd klassrum",
      useCase5Text: "Dela videoföreläsningar med transkriptioner före lektionen. Studenter kan granska i sin egen takt och komma förberedda för diskussioner.",
      useCase6Title: "Forskning & citat",
      useCase6Text: "Hjälp studenter att citera videokällor korrekt med tidsstämplar. Perfekt för forskningsprojekt och akademiska uppsatser.",
      testimonialTitle: "Används av",
      testimonialSubtitle: "Se varför lärare över hela världen väljer NeverCap",
      testimonialText: '"Jag har använt NeverCap för att transkribera hela min YouTube-kanal med mattegenomgångar. Vad som tidigare tog veckor med andra tjänster tar nu timmar. Möjligheten att klistra in länkar direkt och få omedelbara transkriptioner har förändrat hur jag skapar tillgängligt innehåll. Mina internationella studenter älskar särskilt textningen på flera språk!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Matematikprofessor, onlineutbildare",
      ctaTitle: "Gör allt ditt utbildningsmaterial tillgängligt",
      ctaSubtitle: "Gå med i tusentals lärare som använder verkligen obegränsad transkription",
      ctaButton: "Prova NeverCap gratis",
        featuresTitle2: "Videotranskription",
        grid: "Ljudfil till studieguide",
        useCasesTitle2: "Utbildningsbehov",
        testimonialTitle2: "50 000+ lärare"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Ladda ner YouTube-videor som MP4",
        "placeholder": "Sök eller klistra in din YouTube-länk här",
        "clear_icon": "Rensa inmatning",
        "Download": "Ladda ner",
        "loading_text": "Bearbetar länken för nedladdning. Stanna kvar på sidan.",
        "howToDownload": "Hur laddar man ner?",
        "tutorial": "Titta på handledningen"
      },
      part2: {
        "title": "Så här gör du en YouTube-video till en nedladdningsbar MP4-fil i 3 enkla steg",
        "steps": [
                {
                  title: "Kopiera URL:en",
                  content: "Öppna din YouTube-video och kopiera länken från webbläsarens adressfält."
                },
                {
                  title: "Klistra in länken",
                  content: "Gå till ditt videonerladdningsverktyg och klistra in URL:en i inmatningsfältet."
                },
                {
                  title: "Ladda ner MP4:en",
                  content: "När bearbetningen är klar, klicka på nedladdningsknappen för att spara din MP4-fil."
                }
              ]
      },
      part3: {
        content: [
                "Har du någonsin behövt titta på YouTube-videor offline?",
                "Oavsett om du pendlar med tunnelbanan, flyger med ett plan, studerar en viktig handledning, fördjupar dig i färdighetsbyggande innehåll eller arkiverar viktigt videomaterial – att ha tillförlitlig offlineåtkomst är en vanlig frustration. Det är här vår nedladdare utmärker sig.",
                "Nedladdaren låter dig snabbt och enkelt konvertera YouTube-videor till MP4-format för nedladdning. Spara dem på din enhet och titta när som helst.",
                "Processen är snabb, enkel och problemfri. När du har laddat ner kan du njuta av dina favoritvideor när och var du vill – inget internet behövs."
              ]
      },
      part4: {
        content: ["Här är de 5 största fördelarna med att ladda ner", "YouTube-videor som MP4-filer"],
        list: [
                {
                  title: "Spara på datakostnader:",
                  content: "Normalt sett förbrukar det mycket mobildata att titta på videor på YouTube. Genom att ladda ner för offlinevisning kan du undvika dessa onödiga kostnader."
                },
                {
                  title: "Titta var som helst, när som helst:",
                  content: "Njut av dina videor sömlöst, även med dålig internetuppkoppling. Inga mer buffringsbekymmer."
                },
                {
                  title: "Enkel arkivering & bevarande:",
                  content: "Att spara videor som MP4-filer gör det enkelt att bygga din personliga samling, särskilt för innehåll du finner särskilt värdefullt eller viktigt."
                },
                {
                  title: "Enklare delning:",
                  content: "Att dela en MP4-fil är mycket bekvämare än att skicka en länk. Du kan skicka videofilen direkt via appar som WhatsApp eller Instagram och slippa steget att öppna YouTube."
                },
                {
                  title: "Omedelbar visning, delade stunder:",
                  content: "Vill du entusiastiskt visa en favoritvideo för vänner eller familj i närheten? Med MP4-filen nedladdad kan ni alla titta på den smidigt tillsammans direkt, utan besvärliga pauser medan den laddas."
                }
              ]
      },
      part5: {
        title: "Varför vår nedladdare sticker ut",
        cards: [
                {
                  title: "Enklickens enkelhet",
                  content: "Effektfri installation och intuitiv användning."
                },
                {
                  title: "Bländande snabb, obegränsad",
                  content: "Konvertera och ladda ner i högsta hastighet – inga tak, inga begränsningar."
                },
                {
                  title: "Konvertera på direkten",
                  content: "Bearbeta dina filer direkt, ingen väntan krävs."
                },
                {
                  title: "Noll annonser, noll distraktioner",
                  content: "Njut av ett rent gränssnitt utan popup-fönster, banners eller avbrott – bara sömlös videokonvertering."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Originalkvalitet garanterad",
                  content: "Dina nedladdningar behåller källvideons fulla upplösning för pixelfelfri uppspelning varje gång."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fungerar överallt",
                  content: "Fullt kompatibel med alla webbläsare, på alla enheter."
                }
              ]
      },
      part6: {
        title: ["Maximera dina YouTube-videonerladdningar", "Med nedladdaren"],
        content: [
                "Effortless YouTube to MP4-konvertering: Snabb, enkel & gratis.",
                "Det är där vi utmärker oss. Vårt användarvänliga gränssnitt är designat för alla – inga tekniska kunskaper krävs. Oavsett din erfarenhetsnivå kan du konvertera videor direkt. Ingen registrering krävs: Få precis vad du behöver, direkt.",
                "Var säker – dina nedladdade MP4-filer behåller originalvideons kvalitet och klarhet, precis som du såg dem på YouTube.",
                "Fungerar överallt där du är. Fullt kompatibel med alla större plattformar och enheter. Oavsett om du använder Windows, macOS, Linux, Android eller iOS – med en smartphone, surfplatta eller dator – kan du ladda ner videor sömlöst."
              ]
      },
      part7: {
        title: "Viktiga frågor om att ladda ner YouTube-videor",
        list: [
                {
                  question: "Kan jag ladda ner en YouTube-video om den är upphovsrättsskyddad?",
                  answer: "Att ladda ner upphovsrättsskyddade YouTube-videor utan upphovsrättsinnehavarens tillstånd är olagligt."
                },
                {
                  question: "Är detta nedladdningsverktyg säkert?",
                  answer: "Ja, det är säkert och pålitligt. Vi kräver ingen personlig information från användare och vidtar starka åtgärder mot virus. Vi påminner dig om att alltid vara försiktig när du laddar ner filer från internet: undvik att klicka på misstänkta länkar eller ladda ner tvivelaktiga filer."
                },
                {
                  question: "Vilka språk stöder YouTube till MP4-nedladdning?",
                  answer: "Vår tjänst stöder nedladdning av YouTube-videor på alla populära språk."
                },
                {
                  question: "Vilka faktorer påverkar tiden det tar att ladda ner en YouTube-video?",
                  answer: "Även om vi säkerställer den snabbaste möjliga nedladdningsupplevelsen, påverkas nedladdningstiden också av faktorer som videons längd och din internetanslutnings hastighet."
                },
                {
                  question: "När jag laddar ner en MP4-video med min smartphone, var sparas den?",
                  answer: 'Efter att ha laddat ned en MP4-fil på din smartphone hittar du den vanligtvis i mappen "Nedladdningar" i din enhets filhanterarapp.'
                },
                {
                  question: "Minskar videokvaliteten när jag laddar ner en YouTube-video som MP4?",
                  answer: "Nej. Att ladda ner YouTube-videor som MP4 med vårt verktyg behåller originalvideons kvalitet. Konverteringsprocessen bevarar källkvaliteten, så du får samma visningsupplevelse som på YouTube."
                }
              ]
      },
        err1: "Felaktigt YouTube-länkformat.",
        err2: "Tyvärr! Vi stöder för närvarande endast YouTube-länkar. Om du behöver stöd för andra webbplatser kommer vi att uppdatera dig när vi lägger till det i framtiden.",
        videoDownload: {
              title: "Ladda ner YouTube-videor som MP4. Gratis, snabbt och utan reklam.",
              description: "Tack för att du valt vår tjänst! Vi uppskattar verkligen ditt förtroende och hoppas att det förbättrat din upplevelse. Om du kan dela vår webbplats med dina vänner skulle det vara en stor hjälp.",
              downloadButton: "Ladda ner",
              downloadError: "Nedladdningsfel"
            }
    }
  },
  About: {
    Hero: {
      "badge": "Ledande AI-teknik i branschen",
      "title": "Om",
      "highlighted_text": "NeverCap",
      "description": "Vårt uppdrag är att tillhandahålla de mest exakta ljud- och videotranskriberingstjänsterna. Med hjälp av branschledande AI-teknik uppnår vi transkriberingsnoggrannhet på över 96%. För vissa större språk kan vi till och med nå 99% noggrannhet genom teknisk optimering."
    },
    Stats: {
      "title": "Vår",
      "highlighted_text": "Påverkan",
      "subtitle": "Stärker global kommunikation med banbrytande AI-teknik",
      "metrics": [
            {
              "value": "96%+",
              "label": "Noggrannhet",
              "description": "Branschledande transkriberingsnoggrannhet med avancerad AI"
            },
            {
              "value": "100+",
              "label": "Språk som stöds",
              "description": "Taligenkänning för globalt innehåll"
            },
            {
              "value": "249+",
              "label": "Översättningsspråk",
              "description": "Översätt transkriberad text till i princip vilket språk som helst"
            }
          ]
    },
    Mission: {
      "title": "Varför välja",
      "highlighted_text": "NeverCap",
      "subtitle": "Vi tror på att bryta ner språkbarriärer och göra innehåll tillgängligt för alla",
      "features": [
            {
              "icon": "🎯",
              "title": "Oöverträffad noggrannhet",
              "description": "Våra AI-modeller förfinas kontinuerligt för att leverera transkriberingsnoggrannhet över 96%, med vissa större språk som når upp till 99% noggrannhet genom avancerad optimering."
            },
            {
              "icon": "🌍",
              "title": "Global språkstöd",
              "description": "Stöd för över 100 språk i taligenkänning och översättningsmöjligheter för mer än 249 språk, vilket gör ditt innehåll verkligen globalt."
            },
            {
              "icon": "⚡",
              "title": "Blixtsnabb bearbetning",
              "description": "Bearbeta timmar av ljud- och videoinnehåll på minuter, inte timmar. Vår optimerade AI-pipeline säkerställer att du får dina transkriptioner snabbt utan att offra kvalitet."
            },
            {
              "icon": "🔒",
              "title": "Säkerhet på företagsnivå",
              "description": "Din datasäkerhet är vår prioritet. Vi använder branschstandardkryptering och följer globala sekretessregler för att hålla ditt innehåll säkert och konfidentiellt."
            }
          ]
    },
    Company: {
      "title": "Företagets",
      "highlighted_text": "Information",
      "subtitle": "Kontakta oss för frågor eller support",
      "details": [
            {
              "label": "Företagsnamn",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Huvudkontor",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Förenta staterna"]
            },
            {
              "label": "Kontakta oss",
              "value": ["E-post", "Support dygnet runt"]
            }
          ]
    },
    CTA: {
      "title": "Redo att uppleva skillnaden?",
      "subtitle": "Gå med bland tusentals professionella som litar på NeverCap för sina transkriberingsbehov",
      "button": "Prova NeverCap gratis →",
      "disclaimer": "Ingen kreditkort krävs • Börja transkribera på sekunder"
    }
  },
  Privacy: {
    title: "Sekretess",
    titleGradient: "Policy",
    subtitle: "Lär dig hur vi samlar in, använder och skyddar din personliga information",
    "lastUpdated": "Senast uppdaterad: {date}",
    "lastUpdatedDate": "21 juli 2025",
    "privacyPolicyTitle": "Integritetspolicy",
    "policyAgreement": "Läs denna integritetspolicy noggrant och se till att du förstår den. Genom att använda någon av våra Tjänster godkänner du denna integritetspolicy. Om du inte godkänner vår användning av dina personuppgifter i enlighet med denna policy måste du omedelbart sluta använda våra Tjänster.",
    "policyOverview": "I denna policy beskriver vi: vilka data vi samlar in och varför; hur dina data hanteras; och dina rättigheter gällande dina data. Vi säljer inte dina data.",
    "scopeTitle": "1. Omfattning av denna integritetspolicy",
    "scopeDescription": "Denna integritetspolicy gäller endast vår insamling och behandling av information om användare av Tjänsterna. Denna integritetspolicy gäller inte för tjänster, webbplatser eller programvara som drivs av tredje part och som är länkade till oss (oavsett om vi tillhandahåller dessa länkar eller andra användare delar dem) och gäller inte heller för innehåll, data, applikationer eller material från tredje part. Vi rekommenderar att du kontrollerar integritetspolicyn för alla webbplatser eller program från tredje part innan du lämnar någon information till dem.",
    "collectionTitle": "2. Vad vi samlar in och varför",
    "collectionPrinciple": "Vår ledande princip är att endast samla in det vi behöver. Här är vad det betyder i praktiken:",
    "identityTitle": "2.1 Identitet & åtkomst",
    "identityDescription": "När du registrerar dig för en av våra produkter ber vi om identifierande information såsom ditt namn och e-postadress. Detta är för att tillhandahålla grundläggande produktfunktionalitet och så att vi kan skicka dig produktuppdateringar och annan viktig information.",
    "billingTitle": "2.2 Faktureringsinformation",
    "billingDescription": "Om du registrerar dig för en betald produkt kommer du att bli ombedd att ange din betalningsinformation och faktureringsadress. Betalningsinformation skickas direkt till vår betalningsprocessor och når inte våra servrar.",
    "productInteractionsTitle": "2.3 Produktinteraktioner",
    "productInteractionsDescription": "Vi lagrar på våra servrar det innehåll som du laddar upp, tar emot eller förvarar i dina produktkonton. Om du inte tar bort detta innehåll kan vi behålla det så länge ditt konto är aktivt.",
    "websiteInteractionsTitle": "2.4 Webbplatsinteraktioner",
    "websiteInteractionsDescription": "Vi samlar in information om din surfaktivitet för analys- och statistiska ändamål såsom konverteringstestning och experiment med nya produktdesigns. Detta inkluderar till exempel din webbläsare och operativsystemversioner, din IP-adress, vilka webbsidor du besökte och hur lång tid de tog att ladda, samt vilken webbplats som hänvisade dig till oss. Om du har ett konto och är inloggad är dessa webbanalysdata kopplade till din IP-adress och användarkonto tills ditt konto inte längre är aktivt.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Vi använder också beständiga förstaparts-cookies och vissa tredjeparts-cookies för att lagra vissa inställningar, göra det enklare för dig att använda våra applikationer och utföra A/B-testning samt stödja vissa analyser.",
    "cookiesDescription2": "En cookie är en textbit som lagras av din webbläsare. Den kan hjälpa till att komma ihåg inloggningsinformation och webbplatsinställningar. Den kan också samla in information såsom din webbläsartyp, operativsystem, besökta webbsidor, besökstid, visat innehåll och annan klickströmdata. Du kan justera cookie-lagringsinställningar och acceptera eller blockera enskilda cookies i dina webbläsarinställningar, men våra appar kommer inte att fungera och andra aspekter av vår tjänst kan inte fungera korrekt om du stänger av cookies.",
    "correspondenceTitle": "2.6 Frivillig korrespondens",
    "correspondenceDescription": "När du skickar e-post till oss med en fråga eller för att be om hjälp sparar vi denna korrespondens, inklusive din e-postadress, så att vi har en historik över tidigare korrespondens att referera till om du kontaktar oss i framtiden.",
    "accessTitle": "3. När vi kommer åt eller delar din information",
    "accessDescription1": "För att tillhandahålla produkter eller tjänster du har begärt. Vi använder vissa tredjepartsunderleverantörer för att hjälpa till att driva våra applikationer och tillhandahålla Tjänsterna till dig. Detta inkluderar moln- och analysleverantörer.",
    "accessDescription2": "För att undersöka, förhindra eller vidta åtgärder angående missbruk. Att komma åt en kunds konto när man undersöker potentiellt missbruk är en sista utväg. Vi vill skydda både våra kunders integritet och säkerhet och de personer som rapporterar problem till oss, och vi gör vårt bästa för att balansera dessa ansvarsområden under hela processen. Om vi upptäcker att du använder våra produkter för ett begränsat ändamål kommer vi att vidta nödvändiga åtgärder, inklusive att under vissa omständigheter meddela lämpliga myndigheter.",
    "accessDescription3": "När det krävs enligt tillämplig lag.",
    "dataRequests": "Begäran om användardata. Vår policy är att inte svara på statliga begäran om användardata om vi inte tvingas av rättsprocess eller i begränsade omständigheter vid en nödbegäran. Men om amerikanska lagföringsmyndigheter har nödvändigt warrant, straffsubpoena eller domstolsbeslut som kräver att vi delar data, måste vi följa det. Likaså kommer vi endast att svara på begäran från myndigheter utanför USA om vi tvingas av den amerikanska regeringen genom processer som beskrivs i en ömsesidig rättslig biståndsavtal. Det är vår policy att meddela berörda användare innan vi delar data om vi inte är juridiskt förhindrade från att göra det, och förutom i vissa nödsituationer.",
    "preservationRequests": "Bevaring av data. På samma sätt är vår policy att följa begäran om att bevara data endast om vi tvingas av den amerikanska Federal Stored Communications Act, 18 U.S.C. Section 2703(f), eller av en korrekt utfärdad amerikansk subpoena för civila ärenden. Vi delar inte bevarad data om inte lagen kräver det eller om vi tvingas av en domstolsorder som vi väljer att inte överklaga. Dessutom, om vi inte får ett korrekt warrant, domstolsbeslut eller subpoena innan den nödvändiga bevarandeperioden löper ut, kommer vi att förstöra alla bevarade kopior av kunddata vid slutet av bevarandeperioden.",
    "taxAudits": "Om vi granskas av en skattemyndighet kan vi bli tvungna att dela faktureringsrelaterad information. Om det händer kommer vi endast att dela det minsta som behövs, såsom faktureringsadresser och skatteundantagsinformation.",
    "securityTitle": "4. Hur vi skyddar dina data",
    "securityDescription": "All data krypteras via SSL/TLS när den överförs från våra servrar till din webbläsare.",
    "deletionTitle": "5. Vad som händer när du tar bort ditt innehåll",
    "deletionDescription": "Om du tar bort något innehåll blir det omedelbart otillgängligt.",
    "locationTitle": "6. Plats för webbplats och data",
    "locationDescription": "Våra produkter och andra webbegenskaper drivs i USA. Om du befinner dig i EU, Storbritannien eller någon annanstans utanför USA, var medveten om att all information du tillhandahåller oss kommer att överföras till och lagras i USA. Genom att använda våra webbplatser eller Tjänster och/eller tillhandahålla oss med din personliga information samtycker du till denna överföring.",
    "childrenTitle": "7. Barns integritet",
    "updatesTitle": "8. Uppdateringar av denna integritetspolicy",
    "updatesDescription": "Vi kan uppdatera denna policy efter behov för att följa relevanta regler och reflektera nya metoder. När vi gör en betydande ändring av våra policyer uppdaterar vi datumet högst upp på denna sida.",
    "contactTitle": "9. Kontakta oss",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "på",
      policyDescription: 'Denna Policy beskriver hur NeverCap (här kallad \"NeverCap\", \"vi\", \"oss\") samlar in, använder och delar din personliga information när du använder våra tjänster, webbplatser ({url}) och mjukvara (sammanfattningsvis \"Tjänsterna\").',
      childrenDescription: "Tjänsterna är inte avsedda för barn, och vi samlar inte medvetet in personuppgifter från barn under 13 år. Om du är under 13 år, vänligen skicka inte någon personlig information via Tjänsterna. Om du tror att ett barn har lämnat personuppgifter till oss i strid med denna Policy, vänligen kontakta oss {at} {email} enligt nedan.",
      contactDescription: "Om du har frågor, synpunkter eller klagomål om vår Integritetspolicy, vänligen kontakta oss {at} {email} så försöker vi hantera din fråga så snart som möjligt."
},
  TermsOfUse: {
    title: "Användarvillkor",
    titleGradient: "Tjänst",
    subtitle: "Läs noggrant igenom dessa villkor innan du använder våra tjänster",
    "lastUpdated": "Senast uppdaterad: {date}",
    "lastUpdatedDate": "21 juli 2025",
    "termsOfServiceTitle": "Användarvillkor",
    "thankYou": "Tack för att du använder våra produkter!",
    "companyDefinition": 'När vi säger "Företaget", "vi", "vår" eller "oss" i detta dokument avser vi NeverCap.',
    "servicesDefinition": 'När vi säger "Tjänster" menar vi alla produkter som skapats och underhålls av NeverCap, oavsett om de levereras via en webbläsare, skrivbordsapplikation, mobilapplikation eller annat format.',
    "termsUpdate": "Vi kan uppdatera dessa Användarvillkor i framtiden. Vanligtvis har ändringarna gjorts för att klargöra vissa villkor genom att länka till en utökad relaterad policy. När vi gör en betydande ändring av våra policyer uppdaterar vi datumet högst upp på denna sida och vidtar lämpliga åtgärder för att meddela kontoinnehavare.",
    "acceptanceTitle": "1. Godkännande av avtal",
    "acceptanceDescription1": "Genom att använda våra Tjänster godkänner du detta Avtal, som därmed blir ett bindande avtal mellan dig och NeverCap. Du intygar att du har rättslig kapacitet att godkänna dessa Villkor och bekräftar att du är myndig att ingå bindande avtal. NeverCaps godkännande är uttryckligen beroende av ditt samtycke till alla villkor i detta Avtal.",
    "eligibilityRequirement": "Tjänsterna är inte avsedda för och bör inte användas av någon under 18 år. Genom att använda Tjänsterna intygar och garanterar du att du uppfyller ovanstående behörighetskrav.",
    "userResponsibility": 'Termerna "du", "din", "dig" inkluderar även dina anställda, ombud, företagsrepresentanter och andra personer som du ger tillgång till Tjänsterna via ditt Konto (enligt definitionen nedan). Du ansvarar för att alla som använder Tjänsterna via ditt konto känner till och följer dessa Villkor.',
    "termsRevision": "NeverCap förbehåller sig rätten att när som helst efter eget gottfinnande revidera och uppdatera dessa Villkor. Alla ändringar träder i kraft omedelbart efter publicering. Din fortsatta användning av Tjänsterna efter publicering av reviderade Villkor innebär att du accepterar och godkänner ändringarna. Du bör regelbundet kontrollera denna sida för att vara medveten om eventuella ändringar, eftersom de är bindande för dig.",
    "servicesTitle": "2. NeverCaps tjänster",
    "servicesDescription1": "Våra Tjänster gör det möjligt för användare att omvandla röstkonversationer till transkriberad text som kan sökas, översättas och delas med andra.",
    "servicesOptions": 'Du kan välja att använda den kostnadsfria versionen av Tjänsterna ("Gratistjänster") eller den prenumerationsbaserade betalversionen av Tjänsterna där du kan behöva betala avgifter ("Betaltjänster").',
    "servicesAccess": "Vi kommer att göra Tjänsterna tillgängliga för dig. Du ansvarar för alla arrangemang som krävs för att du ska ha tillgång till Tjänsterna.",
    "accountTermsTitle": "3. Kontovillkor",
    "accountSecurity": "Du ansvarar för att upprätthålla säkerheten för ditt konto. Företaget kan inte och kommer inte att vara ansvarigt för eventuella förluster eller skador som uppstår på grund av att du inte följer detta säkerhetskrav.",
    "lawfulUse": "Du får inte använda Tjänsterna för olagliga, oetiska eller omoraliska ändamål.",
    "contentResponsibility": "Du ansvarar för allt innehåll och all aktivitet som sker under ditt konto. Detta inkluderar innehåll som publiceras av andra som antingen: (a) har tillgång till dina inloggningsuppgifter; eller (b) har egna inloggningar under ditt konto.",
    "humanRequirement": 'Du måste vara en människa. Konton som registreras av "bots" eller andra automatiserade metoder är inte tillåtna.',
    "paymentTitle": "4. Betalning, återbetalningar och planändringar",
    "freeTrial": "För betaltjänster som erbjuder en gratis provperiod förklarar vi provperiodens längd när du registrerar dig. Efter provperioden måste du betala i förväg för att fortsätta använda Tjänsten. Om du inte betalar kommer dessa tjänster att upphöra.",
    "upgradePolicy": "Om du uppgraderar från en gratis plan till en betalplan debiterar vi ditt kort omedelbart och din faktureringsperiod börjar på uppgraderingsdagen.",
    "taxes": "Alla avgifter är exklusive skatter, avgifter eller tullar som påförs av skattemyndigheter. Där det krävs kommer vi att samla in dessa skatter på uppdrag av skattemyndigheten och överföra dem till skattemyndigheterna. Annars ansvarar du för betalning av alla skatter, avgifter eller tullar.",
    "refunds": "Alla köp är icke-återbetalningsbara. Du kan när som helst avbryta betalda tjänster genom att logga in på ditt konto. För betalprenumerationer träder din uppsägning i kraft vid slutet av den aktuella betalda perioden, om inte annat anges.",
    "cancellationTitle": "5. Uppsägning och avslut",
    "cancellationPolicy": "Om du säger upp Tjänsten innan den betalda tiden löper ut träder uppsägningen i kraft omedelbart och du kommer inte att debiteras igen. Vi gör inte automatiskt en proportionell återbetalning för oanvänd tid under den sista faktureringsperioden.",
    "terminationRights": "Vi har rätt att när som helst av vilken anledning som helst suspendera eller avsluta ditt konto och vägra all nuvarande eller framtida användning av våra Tjänster. Suspension innebär att du inte kommer att kunna komma åt kontot eller något innehåll i kontot. Avslut kommer dessutom att resultera i radering av ditt konto eller din åtkomst till ditt konto samt förverkande och avstående av allt innehåll i ditt konto. Vi förbehåller oss även rätten att när som helst av vilken anledning som helst vägra användning av Tjänsterna för vem som helst. Vi har denna klausul eftersom det statistiskt sett, bland hundratusentals konton på våra Tjänster, finns minst ett som gör något skadligt.",
    "abusePolicy": "Verbala, fysiska, skriftliga eller andra former av misshandel (inklusive hot om misshandel eller vedergällning) mot företagets anställda eller befattningshavare kan leda till omedelbar kontouppsägning.",
    "submissionsTitle": "6. Inlämningar",
    "submissionsDescription": 'Du erkänner och godkänner att alla frågor, kommentarer, förslag, idéer, feedback eller annan information om Webbplatsen ("Inlämningar") som du lämnar till oss är icke-konfidentiella och blir vår ensakliga egendom. Vi ska äga exklusiva rättigheter, inklusive alla immateriella rättigheter, och ska vara berättigade till obegränsad användning och spridning av dessa Inlämningar för alla lagliga ändamål, kommersiella eller andra, utan erkännande eller ersättning till dig. Härmed avstår du från alla moraliska rättigheter till sådana Inlämningar, och du intygar härmed att sådana Inlämningar är original av dig eller att du har rätt att lämna in sådana Inlämningar. Du godkänner att vi inte kan hållas ansvariga för eventuell eller faktisk intrång eller tillägnelse av någon äganderätt i dina Inlämningar.',
    "uptimeTitle": "7. Upptid och säkerhet",
    "serviceAvailability": 'Din användning av Tjänsterna sker på egen risk. Vi tillhandahåller dessa Tjänster i befintligt skick ("as is") och "tillgängliga" ("as available"). Vi erbjuder inte servicenivåavtal för de flesta av våra Tjänster, men tar våra applikationers upptid på allvar.',
    "throttlingPolicy": "Vi förbehåller oss rätten att tillfälligt begränsa eller minska kontots åtkomst i sällsynta fall där en användares aktivitet verifieras påverka Tjänstens stabilitet och prestanda negativt för andra användare. I alla utom de mest kritiska fallen kommer vi att kontakta dig för att hitta en lösning innan vi vidtar åtgärder.",
    "dataSecurity": "Vi vidtar många åtgärder för att skydda och säkra dina data genom säkerhetskopieringar, redundans och kryptering. Vi tillämpar kryptering för dataöverföring över det offentliga internet.",
    "thirdPartyVendors": "Vi använder tredjepartsleverantörer och hostingpartners för att tillhandahålla den nödvändiga hårdvaran, mjukvaran, nätverket, lagringen och relaterad teknik som krävs för att driva Tjänsterna.",
    "siteManagementTitle": "8. Webbplatshantering",
    "siteManagementDescription": "Vi förbehåller oss rätten, men inte skyldigheten, att: (1) övervaka Webbplatsen för brott mot dessa Användarvillkor; (2) vidta lämpliga rättsliga åtgärder mot den som, efter vårt gottfinnande, bryter mot lagen eller dessa Användarvillkor, inklusive men inte begränsat till att rapportera sådan användare till rättsliga myndigheter; (3) efter vårt gottfinnande och utan begränsning vägra, begränsa åtkomsten till, begränsa tillgängligheten för eller inaktivera (i den utsträckning som är tekniskt möjligt) några av dina Bidrag eller delar därav; (4) efter vårt gottfinnande och utan begränsning, meddelande eller ansvar, ta bort från Webbplatsen eller på annat sätt inaktivera alla filer och innehåll som är för stora i storlek eller på något sätt belastar våra system; och (5) på annat sätt hantera Webbplatsen på ett sätt som är utformat för att skydda våra rättigheter och egendom och underlätta Webbplatsens korrekta funktion.",
    "copyrightTitle": "9. Upphovsrätt och innehållsägande",
    "copyrightCompliance": "Allt innehåll som publiceras på Tjänsterna måste följa amerikansk upphovsrättslagstiftning.",
    "ipRights": "Vi gör inte anspråk på immateriella rättigheter över det material du tillhandahåller till Tjänsterna. Allt uppladdat material förblir ditt.",
    "contentModeration": "Vi granskar inte innehåll i förväg, men förbehåller oss rätten (men inte skyldigheten) att efter eget gottfinnande vägra eller ta bort allt innehåll som finns tillgängligt via Tjänsten.",
    "prohibitedExploitation": "Du godkänner att inte reproducera, duplicera, kopiera, sälja, vidareförsälja eller utnyttja någon del av Tjänsterna, användningen av Tjänsterna eller tillgången till Tjänsterna utan Företagets uttryckliga skriftliga tillstånd.",
    "impersonationProhibition": "Du får inte modifiera en annan webbplats på ett sätt som felaktigt antyder att den är associerad med Tjänsterna eller Företaget.",
    "dmcaPolicy": "Vi respekterar andras immateriella rättigheter. Om du anser att något material som finns tillgängligt på eller via Webbplatsen kränker någon upphovsrätt som du äger eller kontrollerar, vänligen kontakta oss omedelbart. En kopia av din Anmälan kommer att skickas till den person som publicerade eller lagrade det aktuella materialet. Var medveten om att enligt tillämplig lag kan du hållas ansvarig för skadestånd om du lämnar felaktiga uppgifter i en Anmälan. Om du inte är säker på om material som finns på eller länkas från Webbplatsen kränker din upphovsrätt bör du därför överväga att först kontakta en advokat.",
    "prohibitedActivitiesTitle": "10. Förbjudna aktiviteter",
    "generalProhibition": "Du får inte komma åt eller använda webbplatsen för något annat ändamål än det som vi gör webbplatsen tillgänglig för. Webbplatsen får inte användas i samband med några kommersiella verksamheter utom de som specifikt godkänts eller godkänts av oss.",
    "userObligations": "Som användare av webbplatsen samtycker du till att inte:",
    "dataScraping": "Systematiskt hämta data eller annat innehåll från webbplatsen för att skapa eller sammanställa, direkt eller indirekt, en samling, kompilering, databas eller katalog utan skriftligt tillstånd från oss.",
    "fraud": "Lura, bedra eller vilseleda oss och andra användare, särskilt i något försök att få kännedom om känslig kontoinformation som användarlösenord.",
    "securityInterference": "Kringgå, inaktivera eller på annat sätt störa säkerhetsrelaterade funktioner på webbplatsen, inklusive funktioner som förhindrar eller begränsar användningen eller kopieringen av innehåll eller tillämpar begränsningar för användningen av webbplatsen och/eller det innehåll som finns där.",
    "defamation": "Förminska, fläcka eller på annat sätt skada, enligt vår åsikt, oss och/eller webbplatsen.",
    "harassment": "Använda information från webbplatsen för att trakassera, misshandla eller skada en annan person.",
    "supportAbuse": "Missbruka våra supporttjänster eller lämna falska rapporter om missbruk eller olämpligt beteende.",
    "legalCompliance": "Använda webbplatsen på ett sätt som inte överensstämmer med tillämpliga lagar eller föreskrifter.",
    "framingProhibition": "Delta i obehörig inramning eller länkning till webbplatsen.",
    "malware": "Ladda upp eller överföra (eller försöka ladda upp eller överföra) virus, trojanska hästar eller annat material, inklusive överdriven användning av versaler och spam (kontinuerlig publicering av upprepande text), som stör någon parts ostörda användning och njutning av webbplatsen eller ändrar, försämrar, stör eller påverkar användningen, funktionerna, driften eller underhållet av webbplatsen.",
    "automation": "Delta i automatiserad användning av systemet, såsom att använda skript för att skicka kommentarer eller meddelanden, eller använda datamining, robotar eller liknande verktyg för datainsamling och extrahering.",
    "copyrightRemoval": "Ta bort upphovsrättsmeddelanden eller andra äganderättsmeddelanden från innehåll.",
    "impersonation": "Försöka imitera en annan användare eller person eller använda ett annat användarnamn.",
    "spyware": 'Ladda upp eller överföra (eller försöka ladda upp eller överföra) material som fungerar som en passiv eller aktiv informationsinsamlings- eller överföringsmekanism, inklusive men inte begränsat till clear graphics interchange formats (\"gifs\"), 1×1 pixlar, webbbuggar, cookies eller liknande enheter (ibland kallade \"spionprogram\" eller \"passiva insamlingsmekanismer\" eller \"pcms\").',
    "disruption": "Störa, skapa en oskälig belastning på webbplatsen eller de nätverk eller tjänster som är anslutna till webbplatsen.",
    "employeeHarassment": "Trakassera, irritera, hota eller skrämma våra anställda eller agenter som är engagerade i att tillhandahålla webbplatsen för dig.",
    "accessCircumvention": "Försöka kringgå åtgärder på webbplatsen som är utformade för att förhindra eller begränsa åtkomst till webbplatsen eller en del av webbplatsen.",
    "codeCopying": "Kopiera eller anpassa webbplatsens mjukvara, inklusive men inte begränsat till Flash, PHP, HTML, JavaScript eller annan kod.",
    "reverseEngineering": "Utom som tillåtet av tillämplig lag, dechiffrera, dekompilera, disassemblera eller reverse-engineera någon av de programvaror som utgör eller på något sätt är en del av webbplatsen.",
    "bots": "Utom som kan vara resultatet av standardanvändning av sökmotor eller webbläsare, använda, lansera, utveckla eller distribuera automatiserade system, inklusive men inte begränsat till spindlar, robotar, fuskverktyg, skrapare eller offline-läsare som kommer åt webbplatsen, eller använda eller lansera obehöriga skript eller annan programvara.",
    "buyingAgents": "Använda en köpagent eller inköpsagent för att göra inköp på webbplatsen.",
    "unauthorizedUse": "Göra obehörig användning av webbplatsen, inklusive att samla användarnamn och/eller e-postadresser från användare via elektroniska eller andra medel för att skicka oönskad e-post, eller skapa användarkonton via automatiserade medel eller under falska förespeglingar.",
    "competition": "Använda webbplatsen som en del av någon ansträngning att konkurrera med oss eller på annat sätt använda webbplatsen och/eller innehållet för någon inkomstgenererande verksamhet eller kommersiellt företag.",
    "advertising": "Använda webbplatsen för att annonsera eller erbjuda varor och tjänster till försäljning.",
    "profileTransfer": "Sälja eller på annat sätt överföra din profil.",
    "featuresTitle": "11. Funktioner och buggar",
    "featuresDescription": "Vi utformar våra tjänster med omsorg, baserat på vår egen erfarenhet och erfarenheter från kunder som delar sin tid och feedback. Men det finns ingen tjänst som passar alla. Vi ger inga garantier för att våra tjänster kommer att uppfylla dina specifika krav eller förväntningar.",
    "bugsDescription": "Vi testar också alla våra funktioner innan de lanseras. Som med all programvara har våra tjänster oundvikligen vissa buggar. Vi spårar de buggar som rapporteras till oss och arbetar med dem, särskilt de som rör säkerhet eller integritet. Inte alla rapporterade buggar kommer att åtgärdas och vi garanterar inte helt felfria tjänster.",
    "correctionsTitle": "12. Rättelser",
    "informationAccuracy": "Det kan finnas information på webbplatsen som innehåller tryckfel, felaktigheter eller utelämnanden, inklusive beskrivningar, priser, tillgänglighet och annan information. Vi förbehåller oss rätten att rätta till fel, felaktigheter eller utelämnanden och att ändra eller uppdatera informationen på webbplatsen när som helst utan föregående meddelande.",
    "siteAvailability": "Vi kan inte garantera att webbplatsen alltid är tillgänglig. Vi kan uppleva hårdvaru-, mjukvaru- eller andra problem eller behöva utföra underhåll relaterat till webbplatsen, vilket kan leda till avbrott, förseningar eller fel. Vi förbehåller oss rätten att ändra, revidera, uppdatera, avbryta eller på annat sätt modifiera webbplatsen när som helst eller av någon anledning utan meddelande till dig. Du samtycker till att vi inte har något ansvar för förlust, skada eller olägenhet orsakad av din oförmåga att komma åt eller använda webbplatsen under driftstopp eller avbrott. Ingenting i dessa användarvillkor ska tolkas som att vi är skyldiga att underhålla och stödja webbplatsen eller tillhandahålla rättelser, uppdateringar eller versioner i samband med denna.",
    "userDataTitle": "13. Användardata",
    "userDataDescription": "Vi kommer att bevara viss data som du överför till webbplatsen för att hantera webbplatsens prestanda, samt data relaterade till din användning av webbplatsen. Även om vi regelbundet säkerhetskopierar data, är du ensam ansvarig för all data som du överför eller som rör aktiviteter du har utfört med hjälp av webbplatsen. Du samtycker till att vi inte har något ansvar för förlust eller korruption av sådan data, och du avstår härmed från alla rättsliga åtgärder mot oss som uppstår på grund av sådan förlust eller korruption.",
    "privacyPolicyTitle": "14. Integritetspolicy",
    "liabilityTitle": "15. Ansvar",
    "liabilityIntroduction": "Vi nämner ansvar i dessa villkor men sammanfattar allt i detta avsnitt:",
    "liabilityWaiver": "Du förstår och samtycker uttryckligen till att Företaget inte ska vara ansvarigt, enligt lag eller rättvisa, mot dig eller någon tredje part för direkta, indirekta, tillfälliga, förlorade vinster, särskilda, följd-, straff- eller exemplariska skador, inklusive men inte begränsat till skador för förlust av vinster, goodwill, användning, data eller andra immateriella förluster (även om Företaget har informerats om möjligheten till sådana skador), som uppstår från: (1) användning eller oförmåga att använda tjänsterna; (2) fel, misstag eller felaktigheter i innehåll och material; (3) personskada eller egendomsskada av någon art som helst, som uppstår från din åtkomst till och användning av webbplatsen; (4) kostnaden för anskaffning av ersättningsvaror och tjänster som uppstår från varor, data, information eller tjänster som köpts eller erhållits eller meddelanden som mottagits eller transaktioner som ingåtts via eller från tjänsterna; (5) obehörig åtkomst till eller användning av våra säkra servrar och/eller all personlig och/eller finansiell information som lagras där; (6) avbrott eller upphörande av överföring till eller från webbplatsen; (7) buggar, virus, trojanska hästar eller liknande som kan överföras till eller via webbplatsen av någon tredje part, och/eller; (8) fel eller utelämnanden i innehåll och material eller förlust eller skada av något slag som uppstår från användning av innehåll som publicerats, överförts eller annars gjorts tillgängligt via webbplatsen; (9) uttalanden eller beteende från någon tredje part i tjänsten; (10) eller någon annan fråga relaterad till dessa användarvillkor eller tjänsterna, oavsett om det är ett avtalsbrott, skadestånd (inklusive vårdslöshet, aktiv eller passiv), eller någon annan ansvarsteori.",
    "miscellaneousTitle": "16. Diverse",
    "miscellaneousDescription": "Dessa användarvillkor och eventuella policyer eller driftregler som vi publicerar på webbplatsen eller i förhållande till webbplatsen utgör hela avtalet och förståelsen mellan dig och oss. Vår underlåtenhet att utöva eller verkställa någon rättighet eller bestämmelse i dessa användarvillkor ska inte tolkas som ett avstående från sådan rättighet eller bestämmelse. Dessa användarvillkor gäller i den utsträckning som lagen tillåter. Vi kan överlåta alla eller några av våra rättigheter och skyldigheter till andra när som helst. Vi ska inte vara ansvariga eller skyldiga för förlust, skada, försening eller underlåtenhet att agera orsakad av någon omständighet utanför vår rimliga kontroll. Om någon bestämmelse eller del av en bestämmelse i dessa användarvillkor anses vara olaglig, ogiltig eller ogenomförbar, ska den bestämmelsen eller delen anses vara avskiljbar från dessa användarvillkor och påverka inte giltigheten eller genomförbarheten av återstående bestämmelser. Inget joint venture, partnerskap, anställnings- eller agentförhållande skapas mellan dig och oss som ett resultat av dessa användarvillkor eller användning av webbplatsen. Du samtycker till att dessa användarvillkor inte ska tolkas till vår nackdel på grund av att vi har utformat dem. Du avstår härmed från alla försvar du kan ha baserat på den elektroniska formen av dessa användarvillkor och frånvaron av underskrifter från parterna för att verkställa dessa användarvillkor.",
    "contactTitle": "17. Kontakta oss",
    "neverCap": "NeverCap",
    "site": "Webbplats",
    "services": "Tjänster",
    at: "på",
      trademarkProtection: "Namn, utseende och känsla av Tjänsterna är upphovsrättsligt skyddade © av Företaget. Alla rättigheter förbehålls. Du får inte duplicera, kopiera eller återanvända någon del av HTML, CSS, JavaScript eller visuella designelement utan uttryckligt skriftligt tillstånd från Företaget. Du måste begära tillstånd för att använda Företagets logotyp eller tjänstlogotyper för marknadsföringssyften. Vänligen skicka förfrågningar om logoanvändning till oss {at} {email}. Vi förbehåller oss rätten att återkalla detta tillstånd om du bryter mot dessa Användarvillkor.",
      privacyPolicyDescription: "Vi bryr oss om dataprivacy och säkerhet. Läs vår {policy}. Genom att använda Webbplatsen godkänner du vår Integritetspolicy, som ingår i dessa Användarvillkor. Observera att Webbplatsen finns i USA. Om du ansluter till Webbplatsen från andra delar av världen med lagar eller krav om insamling, användning eller delning av personuppgifter som skiljer sig från amerikansk lag, så överför du genom fortsatt användning av Webbplatsen dina data till USA och godkänner att dina data överförs och behandlas där.",
      contactDescription: "Om du har frågor om något av Användarvillkoren, vänligen kontakta oss {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
