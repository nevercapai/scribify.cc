//挪威语
let message = {
  // 首页
  HomePage: {
    home: "Alle Transkripsjoner",
    times: "{times} gratis transkripsjoner per dag, {left} igjen i dag. ",
    tips: "Oppgrader til Pro for ubegrenset transkripsjon.",
    update: "Oppgrader nå",
    rename: "Gi nytt navn",
    delete: "Slett",
    cancel: "Avbryt",
    confirm: "Opprett",
    dialogLabel: "Mappenavn",
    recently: "Nylige filer",
    loading: "Laster",
    tour: {
      step0: {
        title: "Velkommen til {name}",
        tip: "Her kan du:",
        content: "Transkribere enkeltsamtaler, møter, forelesninger og mer",
        next: "Kom i gang"
      },
      step1: {
        title: "Transkriber filer",
        content:
          "Støtter tre transkripsjonsmetoder: lokale filer, lenker og opptak."
      },
      step2: {
        title: "Opprett en mappe",
        content:
          'Klikk på "+" for å opprette en mappe og organisere filene dine.'
      },
      step3: {
        title: "Vis transkripsjonsdetaljer og rediger",
        content:
          "Klikk på elementet for å vise transkripsjonsdetaljer og redigere, samt oversette det."
      },
      next: "neste",
      finish: "Forstått"
    },
    export: {
      export: "Eksporter",
      title: "Vi genererer eksporten din",
      title2: "Filen din er klar",
      singleLoadingContent: "1 fil komprimeres.",
      singleSuccessContent: "1 fil har blitt komprimert.",
      loadingContent: "{num} filer komprimeres.",
      successContent: "{num} filer har blitt komprimert.",
      cancel: "Avbryt eksporten",
      error: "Eksporteringsfeil",
      dialog: {
        title: "Advarsel",
        content: "Avbryte eksporten?",
        cancel: "Avbryt eksport",
        continue: "Fortsett eksport"
      }
    },
    welcome: {
      title: "Velkommen til Scribify!",
      description: "Her kan du:",
      transcribe:
        "Transkriber uanstrengt med Scribify—gjør talesamtaler om til klar, søkbar og delbar tekst på et øyeblikk.",
      precision:
        "Få nøyaktige transkripsjoner med talegjenkjenning og tidsstempler øyeblikkelig.",
      translate:
        "Bryt språkbarrierer: oversett transkripsjoner til mer enn 200 språk med letthet.",
      edit: "Rediger, forbedre og eksporter transkripsjoner i formater som passer dine behov.",
      collaborate: "Samarbeid ved å dele din transkriberte tekst med andre.",
      button: "Kom i gang",
      tip: "Klar til å gjøre lyd om til transkribert tekst? Begynn å utforske nå!",
      tip2: "Begynn å utforske nå!",
      tip1: "Klar til å gjøre om lyd til transkribert tekst? "
    },
    subscriptionModal: {
      left: {
        title: "Få Pro-planen for å låse opp mer",
        c1: "Ubegrenset transkripsjon",
        c2: "10 timers opplastinger",
        c3: "Høyeste prioritet",
        c4: "99% transkripsjons-nøyaktighet",
        c5: "100+ støttede språk",
        c6: "Talegjenkjenning",
        c7: "Transkripsjons-oversettelse",
        t1: "Ubegrenset transkripsjon for én person.",
        t2: "Hver fil kan være opptil 10 timer / 5 GB. Last opp 50 filer om gangen.",
        t3: "Vi vil alltid transkribere filene dine så raskt som mulig med høyeste prioritet."
      },
      right: {
        title: "Få Pro-planen",
        yearly: "Årlig",
        monthly: "Månedlig",
        save: "Spart",
        preMonth: "per måned",
        preYear: "per år",
        firstMonth: "første måned",
        afterwards: "etterpå"
      },
      subscribe: "Abonner"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Mislykket",
      selected: "Valgt",
      success: "Vellykket",
      fileList: "Filliste"
    },
    dialog: {
      move: {
        title: "Flytt",
        label: "Velg en mappe",
        placeholder: "Velg en mappe",
        confirm: "Flytt",
        cancel: "Avbryt"
      },
      rename: {
        title: "Gi nytt navn",
        label: "Filnavn",
        confirm: "Gi nytt navn",
        cancel: "Avbryt"
      },
      delete: {
        title: "Slett",
        file: "fil",
        files: "filer",
        label: "Bekreft sletting? Denne handlingen kan ikke angres.",
        confirm: "Slett",
        cancel: "Avbryt"
      },
      share: {
        title: "Del",
        label:
          "Alle med følgende sikre lenke kan se denne transkripsjonen og den tilknyttede mediefilen.",
        confirm: "Kopier lenke",
        success: "Kopiering vellykket"
      },
      export: {
        title: "Eksporter",
        select: "Velg formatet du trenger",
        settings: "Innstillinger",
        speaker: "Inkluder taler",
        timecodes: "Inkluder tidskoder",
        confirm: "Eksporter",
        cancel: "Avbryt",
        selectErr: "Vennligst velg ett eller flere formater"
      }
    },
    search: {
      placeholder: "Søk"
    },
    recently: "Nylig",
    record: "Ta opp",
    transcribe: "Transkriber",
    unclassified: "Uklassifiserte mapper",
    buttons: {
      transcribe: "Transkriber filer",
      url: "Transkriber lenker",
      record: "Ta opp og transkriber",
      recording: "Tar opp..."
    },
    delSuccess: "Slettet",
    create: "Opprett",
    endRecord: {
      title: "Varsel",
      content:
        "Du tar opp. Denne handlingen vil avslutte opptaket. Vil du avslutte opptaket?",
      confirm: "Fortsett Opptak",
      cancel: "Avslutt Opptak"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Ta opp",
      pause: "Pause",
      resume: "Fortsett",
      stop: "Stopp",
      endRecord: "Avslutt opptak",
      delete: "Slett",
      transcribe: "Transkriber",
      permissionDenied:
        "Mikrofontillatelse nektet eller enheten eksisterer ikke",
      dialog: {
        delete: {
          title: "Advarsel",
          label: "Er du sikker på at du vil slette dette opptaket?",
          confirm: "Slett",
          cancel: "Avbryt"
        },
        complete: {
          title: "Opptak fullført",
          label:
            "Opptaket har nådd 10 timer og har automatisk stoppet. Vennligst transkriber.",
          confirm: "Forstått"
        },
        speaker: {
          content:
            "For talergjenkjenning er filer begrenset til 3 timer. Fjern krysset i '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkriber et nettmedium",
        title: "Lim inn lenker",
        label:
          "Lim inn videolenken eller lydlenken din fra: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram og flere plattformer...",
        confirm: "Legg til",
        cancel: "Avbryt",
        // 请输入正确的链接
        errorTitle:
          "Lenkeadressen du har oppgitt er feil. Vennligst sjekk og prøv igjen.",
        linkName: "Lenke"
      },
      file: {
        orTitle: "Transkriber fra URL",
        dialogTitle: "Last opp filer for transkribering",
        tip1: "Dra filer hit eller klikk for å bla gjennom",
        tip2: "Klikk for å bla gjennom",
        or: "eller",
        supported: "Støttede formater"
      },
      del: {
        title: "Advarsel",
        content:
          "All fremgang vil gå tapt. Bekreft avbrytelse av transkripsjonen?",
        cancel: "Bekreft avbrytelse",
        confirm: "Fortsett transkribering"
      },
      files: "Filer",
      resultDialogTitle: "Transkriber filer",
      resultDialogTitle2: "Transkriber fil",
      cancel: "Avbryt",
      confirm: "Transkriber",
      return: "Tilbake",
      addMore: "Legg til mer",
      language: "Velg språk",
      failed: "Mislykket",
      tooLarge: "Filen overskrider grensen (5 GB).",
      linkUpload: "Laster opp",
      fileFormat: "Filformatet er ikke tillatt",
      localFiles: "Lokale filer",
      pasteLink: "Online lenke",
      uploadErr: "Opplastingsfeil",
      hashErr: "Hash-feil",
      table: {
        status: "Status",
        file: "Fil",
        size: "Størrelse",
        noData: "Ingen data"
      },
      maxFileNum: "Antall filer kan ikke overstige {num}.",
      speaker: "Gjenkjenn talere",
      speakerLabel:
        "Oppdager automatisk hvem som snakker",
      guest: {
        transcribe: "Transkribere",
        file: "Fil",
        audio: "Lyd-/videofil",
        Uploading: "Laster opp..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Nylig",
      popular: "Populær",
      other: "Andre",
      searchLanguage: "Søk språk",
      noMatch: "Ingen samsvarende språk funnet",
      English: "Engelsk",
      "English(US)": "Engelsk (USA)",
      "English(UK)": "Engelsk (Storbritannia)",
      Spanish: "Spansk",
      Portuguese: "Portugisisk",
      French: "Fransk",
      Italian: "Italiensk",
      German: "Tysk",
      Dutch: "Nederlandsk",
      Polish: "Polsk",
      Danish: "Dansk",
      Japanese: "Japansk",
      Korean: "Koreansk",
      Hungarian: "Ungarsk",
      Czech: "Tsjekkisk",
      Chinese: "Kinesisk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Azerbaijani: "Aserbajdsjansk",
      Estonian: "Estisk",
      Belarusian: "Hviterussisk",
      Bulgarian: "Bulgarsk",
      Icelandic: "Islandsk",
      Bosnian: "Bosnisk",
      Persian: "Persisk",
      Russian: "Russisk",
      "Chinese(Traditional)": "Kinesisk (tradisjonell)",
      Finnish: "Finsk",
      Kazakh: "Kasakhisk",
      Galician: "Galisisk",
      Catalan: "Katalansk",
      "Chinese(Simplified)": "Kinesisk (forenklet)",
      Kannada: "Kannada",
      Croatian: "Kroatisk",
      Latvian: "Latvisk",
      Lithuanian: "Litauisk",
      Romanian: "Rumensk",
      Marathi: "Marathi",
      Malay: "Malayisk",
      Macedonian: "Makedonsk",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norsk",
      Swedish: "Svensk",
      Serbian: "Serbisk",
      Slovak: "Slovakisk",
      Slovenian: "Slovensk",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thai",
      Turkish: "Tyrkisk",
      Welsh: "Walisisk",
      Urdu: "Urdu",
      Ukrainian: "Ukrainsk",
      Greek: "Gresk",
      Armenian: "Armensk",
      Hindi: "Hindi",
      Indonesian: "Indonesisk",
      Vietnamese: "Vietnamesisk",
      Albanian: "Albansk",
      Amharic: "Amharisk",
      Assamese: "Assamesisk",
      Occitan: "Occitan",
      Bashkir: "Bashkirisk",
      Basque: "Baskisk",
      Breton: "Breton",
      Tibetan: "Tibetansk",
      Faroese: "Færøysk",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisk",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreolsk",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgisk",
      Malagasy: "Malagasy",
      Maltese: "Maltesisk",
      Malayalam: "Malayalam",
      Mongolian: "Mongolsk",
      Bengali: "Bengali",
      Burmese: "Burmesisk",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Sinhala",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tajik",
      Tatar: "Tatar",
      Telugu: "Telugu",
      Turkmen: "Turkmen",
      Uzbek: "Uzbek",
      Hawaiian: "Hawaiiansk",
      "Norwegian Nynorsk": "Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisk",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanesisk",
      Cantonese: "Kantonesisk",
      Abkhaz: "Abkhazisk",
      Afar: "Afar",
      alz: "Alzh",
      ach: "Acholi",
      awa: "Awa",
      Avaric: "Avarisk",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irsk",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetisk",
      tpi: "Tpi",
      bew: "Badawi",
      ban: "Bali",
      btx: "Bata-Karo",
      bbc: "Bata-Kotabaru",
      bts: "Bata-Simalungun",
      bci: "Bawi",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Sør-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriatisk",
      chm: "Chamorro",
      Chamorro: "Chamorro",
      Chechen: "Chechen",
      chk: "Chukchi",
      Chuvash: "Chuvash",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndebele",
      "South Ndebele": "Sør-Ndebele",
      dov: "Dong",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Fransk (Kanada)",
      Fijian: "Fijiansk",
      fon: "Fon",
      "Western Frisian": "Vestfriesisk",
      fur: "Friulisk",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grønlandsk",
      gom: "Gom",
      Guarani: "Guarani",
      cnh: "Cahuapaneco",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisisk",
      ktu: "Ktu",
      gaa: "Gbe",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikansk",
      "crh-Latn": "Krim-Tatar (Latinsk)",
      crh: "Krim-Tatar (Syrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdisk (Kurmanji)",
      ckb: "Kurdisk (Soran)",
      trp: "Tromelin",
      ltg: "Latgalian",
      lij: "Ligurisk",
      Limburgish: "Limburgisk",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisk",
      rom: "Romansk",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaisk (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauretiusk kreolsk",
      "mni-Mtei": "Mizo (Mtei)",
      min: "Minangkabau",
      lus: "Lusoga",
      hmn: "Hmong",
      nhe: "Navajo (Ost-Sotkav)",
      "Southern Sotho": "Sør-Sotho",
      new: "Nepali språk (Navajo)",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shamkhî)",
      "pt-PT": "Portugisisk (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Lua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Sami (Nord)",
      Samoan: "Samoan",
      kri: "Sierra Leonekreolsk",
      crs: "Seychelleskreolsk",
      Sango: "Sango",
      "sat-Latn": "Santali (Latinsk)",
      sat: "Santali (Ogham)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gaelisk",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight",
      Tahitian: "Tahitian",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinisk",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetian",
      Uyghur: "Uyghur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtisk",
      szl: "Silesisk",
      scn: "Sicilisk",
      hil: "Hiligaynon",
      jam: "Jamaikansk patois",
      sah: "Jakutisk",
      ace: "Acehnesisk",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Latinsk)",
      Inuktitut: "Inuktitut (Stavelse)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "eller", // 或
    LoginBtn: "Logg inn med e-post",
    LoginGoogle: "Logg inn med Google",
    SignupBtn: "Registrer med e-post",
    SignupGoogle: "Registrer med Google",
    SignupDes: "Registrer deg i dag og opplev magien — gratis.",
    SignupTitle: "Nøyaktig og ubegrenset transkribering",
    signup: "Registrer deg", // 注册
    sign_up: "Registrer deg", // 注册
    loginByGoogle: "Fortsett med Google", // 使用Google登录
    emailAddress: "Vennligst oppgi e-postadressen din", // 请输入您的邮箱
    createAccount: "Opprett en ny konto", // 创建账户
    accountExists: "Har du allerede en konto? ", // 已经有账户了？登录
    agreeTerm: {
      agree: "Ved å fortsette, godtar du våre {terms} og {policy}.",
      terms: "Vilkår",
      policy: "Personvernregler"
    },
    setPassword: "Angi et passord", // 设置密码
    code: "Bekreftelseskode", // 验证码
    resend: "Send på nytt", // 重新发送
    enterPassword: "Passord: Minimum 6 tegn.", // 请输入密码
    passwordLeval: "Passordstyrke", // 密码强度
    Weak: "Svak", // 弱 中 强
    Medium: "Middels", // 弱 中 强
    Strong: "Sterk", // 弱 中 强
    confirmPassword: "Bekreft passordet ditt", // 确认密码
    invalidEmail: "Ugyldig e-postadresse", // 无效的邮箱地址
    logInDirectly:
      "Denne kontoen eksisterer allerede. Vennligst logg inn direkte.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Feil bekreftelseskode. Prøv igjen.", // 验证码错误，请重试
    atLeastSix: "Passordet må være minst 6 tegn langt.", // 密码长度至少6位
    passwordNotMatch: "Passordene samsvarer ikke. Vennligst prøv igjen.", // 密码不匹配，请重试
    login: "Logg inn", // 登录
    log_in: "Logg inn", // 登录
    log_In: "Logg Inn", // 登录
    password: "Passord", // 密码
    forgotPassword: "Glemt passordet ditt?", // 忘记密码？
    noAccount: "Har du ikke en konto?", // 没有账户？注册
    accountNotExists: "Denne kontoen eksisterer ikke.", // 账户不存在
    passwordError: "Passordfeil", // 密码错误
    sendCode: "Send bekreftelseskode", // 发送验证码
    resetPassword: "Tilbakestill passord", // 重置密码
    resetYourPassword: "Tilbakestill passordet ditt", // 重置你的密码
    newOldCantSame:
      "Det nye passordet må være forskjellig fra det gamle passordet.", // 新密码与旧密码不能相同
    passwordResetOk: "Passordet er tilbakestilt!", // 密码重置成功！
    signupToSaveProgress: "Fullfør registreringen for å lagre fremgangen din",
    tip: "Tips",
    tipContentEmail:
      "Vi har nettopp sendt innloggingspassordet for kontoen din til e-postadressen din.",
    tipContentPassword:
      "Vennligst sjekk innboksen din og logg inn med e-postadressen og passordet ditt.",
    codeToEmail:
      "Vi har nettopp sendt en verifiseringskode til e-posten din. Vennligst sjekk innboksen din og lim inn verifiseringskoden ovenfor."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transkripsjoner daglig",
    uploadMinutes: "30-minutters opplastinger",
    lowerPriority: "Lavere prioritet",
    currentPlan: "Nåværende plan",
    professionalEdition: "profesjonell utgave",
    unlimitedTranscription: "Ubegrenset transkripsjon",
    unlimitedNumberOfTimes: "Ubegrenset transkripsjonsfrekvens og varighet.",
    filesUploadedAtOnce:
      "Hver fil kan være opptil 10 timer lang / 5 GB. Last opp 50 filer samtidig.",
    highestPriority: "høyeste prioritet",
    weWillGiveTheHighest:
      "Vi vil alltid transkribere filene dine så raskt som mulig med høyest prioritet.",
    theFirstMonth: "Den første måneden",
    subscribeTo: "abonner på",
    basicVersionFree: "Grunnleggende versjon (gratis)",
    return: "Tilbake",
    annualize: "årlig",
    monthly: "månedlig",
    everyYear: "hvert år",
    saved: "spart",
    byTheMonth: "per måned",
    firstMonth: "første måned",
    afterwardsEveryMonth: "Deretter hver måned",
    manageSubscription: "Administrer abonnement",
    professionalYearbook: "Profesjonelt årlig",
    professionalMonthly: "Profesjonelt månedlig",
    subscriptionWillCancelledOn: "Abonnementet ditt vil bli avsluttet",
    displayLanguage: "Visningsspråk",
    update: "Oppgrader nå",
    basicversion: "Grunnleggende versjon (Gratis)",
    daily: "{start} av {end} daglige transkripsjoner brukt",
    upgradetoPro: "Oppgrader til Pro",
    accountSetting: "Kontoinnstillinger",
    logOut: "Logg ut",
    account: "Konto",
    email: "E-post",
    id: "ID",
    password: "Passord",
    resetPassword: "Tilbakestill passord",
    logIn: "Logg inn",
    tryForFree: "Prøv gratis",
    notFund: "Ikke funnet",
    couldntFind: "Vi kunne ikke finne det du lette etter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månedlig",
    perMonth: "per måned",
    afterwards: "etterpå",
    accuracy: "transkripsjonsnøyaktighet",
    supported: "støttede språk",
    identification: "Høytaleridentifikasjon",
    transcriptSranslation: "Transkripsjonsoversettelse",
    perYear: "per år",
    getProPlan: "Få Pro-planen",
    changeToAnnual: "Bytt til årlig",
    automaticRenewalon: "Automatisk fornyelse",
    eachMonth: "Automatisk fornyelse den {time}. hver måned.",
    automaticRenewal:
      "Automatisk fornyelse mislyktes, vennligst sjekk betalingsmetoden.",
    eachYear: "Automatisk fornyelse den {time} hvert år.",
    returnAccountSetting: "Tilbake",
    needsToWaitLonger: "Vent lenger før filene dine blir transkribert.",
    freeThreeTimesDay: "Transkriber 3 filer gratis hver dag.",
    oneFileUploaded:
      "Hver fil kan være opptil 30 minutter lang. Last opp 1 fil om gangen.",
    uploadWithinHours: "10-timers opplastinger",
    yourSubscription: "Abonnementet ditt vil bli avsluttet {time}.",
    save: "Spare",
      freeversion2: "Gratis Plan"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesisk (forenklet)",
      "Chinese(Traditional)": "Kinesisk (tradisjonell)",
      Japanese: "Japansk",
      Danish: "Dansk",
      German: "Tysk",
      English: "Engelsk",
      Spanish: "Spansk",
      French: "Fransk",
      Italian: "Italiensk",
      Hungarian: "Ungarsk",
      Dutch: "Nederlandsk",
      Norwegian: "Norsk",
      Polish: "Polsk",
      Portuguese: "Portugisisk",
      Finnish: "Finsk",
      Swedish: "Svensk",
      Turkish: "Tyrkisk",
      Greek: "Gresk",
      Russian: "Russisk",
      Ukrainian: "Ukrainsk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Korean: "Koreansk"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Åpen kildekode Nuxt3 SaaS-mal, forhåndsintegrert med globale betalingsportaler (Stripe/Cream), Google OAuth, i18n-ruting og SEO-optimaliseringsverktøy. Designet for utviklere som lanserer flerspråklige nettapplikasjoner, tilbyr det SSR/SSG-støtte og produksjonskvalitet sikkerhet ut av boksen.",
    startLink: "Start gratis prøveversjon~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Bli med på ventelisten, få de siste NuxtPro-nyhetene først OG rabatter!",
      placeholder: "Skriv inn e-postadressen din",
      button: "Bli med på ventelisten",
      joinCountMessage:
        "🔥 Tidlig bruker #{count} har nettopp blitt med på ventelisten!"
    },
    seo: {
      title: "Åpen kildekode Nuxt SaaS-mal | NuxtPro",
      description:
        "NuxtJS-malen med alt du trenger for å få produktet ditt foran kundene. Fra idé til produksjon på 5 minutter."
    },
    api: {
      title: "dette er en demo",
      corpInfo: "bedriftsinformasjon"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videolastingsfeil"
      },
      mse: {
        code: 2,
        msg: "strømtilleggsfeil"
      },
      parse: {
        code: 3,
        msg: "analysefeil"
      },
      format: {
        code: 4,
        msg: "feil format"
      },
      decoder: {
        code: 5,
        msg: "dekodingsfeil"
      },
      runtime: {
        code: 6,
        msg: "grammatikkfeil"
      },
      timeout: {
        code: 7,
        msg: "avspillingstimeout"
      },
      other: {
        code: 8,
        msg: "andre feil"
      }
    },
    HAVE_NOTHING: "Det finnes ingen informasjon om hvorvidt lyd/video er klar",
    HAVE_METADATA: "Lyd/video metadata er klar ",
    HAVE_CURRENT_DATA:
      "Data om gjeldende avspillingsplassering er tilgjengelig, men det er ikke nok data til å spille av neste ramme/millisekund",
    HAVE_FUTURE_DATA: "Gjeldende og minst én ramme av data er tilgjengelig",
    HAVE_ENOUGH_DATA:
      "Tilgjengelige data er tilstrekkelig for å starte avspilling",
    NETWORK_EMPTY: "Lyd/video har ikke blitt initialisert",
    NETWORK_IDLE:
      "Lyd/video er aktiv og er valgt for ressurser, men ingen nettverk brukes",
    NETWORK_LOADING: "Nettleseren laster ned dataene",
    NETWORK_NO_SOURCE: "Ingen lyd/video kilde ble funnet",
    MEDIA_ERR_ABORTED: "Nedlastingsprosessen er avbrutt av brukeren",
    MEDIA_ERR_NETWORK: "Det oppstod en feil under nedlasting",
    MEDIA_ERR_DECODE: "Det oppstod en feil under dekoding",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Lyd/video støttes ikke",
    REPLAY: "Spill av igjen",
    ERROR: "Nettverk er frakoblet",
    PLAY_TIPS: "Spill av",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Spill neste",
    DOWNLOAD_TIPS: "Last ned",
    ROTATE_TIPS: "Roter",
    RELOAD_TIPS: "Last inn på nytt",
    FULLSCREEN_TIPS: "Gå til fullskjerm",
    EXITFULLSCREEN_TIPS: "Avslutt fullskjerm",
    CSSFULLSCREEN_TIPS: "CSS-fullskjerm",
    EXITCSSFULLSCREEN_TIPS: "Avslutt CSS-fullskjerm",
    TEXTTRACK: "Undertekst",
    PIP: "PIP",
    SCREENSHOT: "Skjermbilde",
    LIVE: "DIREKTE",
    OFF: "Av",
    OPEN: "Åpne",
    MINI_DRAG: "Klikk og hold for å dra",
    MINISCREEN: "Miniskjerm",
    REFRESH_TIPS: "Vennligst prøv",
    REFRESH: "Oppdater",
    FORWARD: "fremover",
    LIVE_TIP: "Direkte",
    TM_SUBTITLE_SHOW_TIPS: "Slå på undertekster",
    TM_SUBTITLE_HIDE_TIPS: "Slå av undertekster",
    TM_MINIMIZE_TIPS: "Skjul videoen"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Personvernerklæring",
    lastUpdated: "Sist oppdatert: 25. august 2025",
    policyDescription:
      "Denne policyen beskriver hvordan Scribify (heretter referert til som «Scribify», «vår», «vi», «oss») samler inn, bruker og utleverer din personlige informasjon når du bruker tjenestene og nettstedene våre.",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "og programvare (samlet kalt «Tjenestene»).",
    policyAgreement:
      "Vennligst les denne personvernerklæringen nøye og sørg for at du forstår den. Ved å bruke noen av tjenestene våre, godtar du denne personvernerklæringen. Hvis du ikke samtykker i vår bruk av dine personopplysninger i samsvar med denne policyen, må du umiddelbart slutte å bruke tjenestene våre.",
    policyOverview:
      "I denne policyen beskriver vi hvilke data vi samler inn og hvorfor, hvordan dataene dine håndteres, og dine rettigheter med hensyn til dataene dine. Vi selger ikke dataene dine.",
    scopeTitle: "1. Omfanget av denne personvernerklæringen",
    whatWeCollectTitle: "2. Hva vi samler inn og hvorfor",
    accessShareTitle: "3. Når vi får tilgang til eller deler informasjonen din",
    secureDataTitle: "4. Hvordan vi sikrer dataene dine",
    deleteContentTitle: "5. Hva skjer når du sletter innholdet ditt",
    locationTitle: "6. Plassering av nettsted og data",
    childrenPrivacyTitle: "7. Barns personvern",
    updatesTitle: "8. Oppdateringer av denne personvernerklæringen",
    contactUsTitle: "9. Kontakt oss",
    identityAccessTitle: "2.1 Identitet og tilgang",
    billingInfoTitle: "2.2 Faktureringsinformasjon",
    productInteractionsTitle: "2.3 Produktinteraksjoner",
    websiteInteractionsTitle: "2.4 Nettstedsinteraksjoner",
    cookiesTitle: "2.5 informasjonskapsler",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondanse",
    scopeContent:
      "Denne personvernerklæringen gjelder kun for vår innsamling og behandling av informasjon om brukere av tjenestene. Denne personvernerklæringen gjelder ikke for tjenester, nettsteder eller programvare som drives av tredjeparter og som er lenket til oss (enten vi tilbyr disse lenkene eller andre brukere deler dem), og den gjelder heller ikke for innhold, data, applikasjoner eller materiale fra tredjeparter. Vi anbefaler at du sjekker personvernerklæringen til tredjepartsnettsteder eller programvare før du gir dem informasjon.",
    collectPrinciple:
      "Vårt veiledende prinsipp er å bare samle inn det vi trenger. Her er hva det betyr i praksis:",
    identityAccessContent:
      "Når du registrerer deg for et av produktene våre, ber vi om identifiserende informasjon som navn og e-postadresse. Dette er for å kunne tilby viktig produktfunksjonalitet og sende deg produktoppdateringer og annen viktig informasjon.",
    billingInfoContent:
      "Hvis du registrerer deg for et betalt produkt, vil du bli bedt om å oppgi betalingsinformasjon og faktureringsadresse. Betalingsinformasjonen sendes direkte til betalingsbehandleren vår og når ikke serverne våre.",
    productInteractionsContent:
      "Vi lagrer innholdet du laster opp, mottar eller vedlikeholder i produktkontoene dine på serverne våre. Med mindre du sletter dette innholdet, kan vi beholde det så lenge kontoen din er aktiv.",
    websiteInteractionsContent:
      "Vi samler inn informasjon om nettleseraktiviteten din for analyse og statistiske formål, som testing av konverteringsfrekvens og eksperimentering med nye produktdesign. Dette inkluderer for eksempel nettleser- og operativsystemversjoner, IP-adressen din, hvilke nettsider du besøkte og hvor lang tid det tok å laste inn, og hvilket nettsted som henviste deg til oss. Hvis du har en konto og er logget på, er disse nettanalysedataene knyttet til IP-adressen og brukerkontoen din inntil kontoen din ikke lenger er aktiv.",
    cookiesContent1:
      "Vi bruker også vedvarende førsteparts informasjonskapsler og noen tredjeparts informasjonskapsler for å lagre visse preferanser, gjøre det enklere for deg å bruke applikasjonene våre, utføre A/B-testing samt støtte noe analyse.",
    cookiesContent2:
      "En informasjonskapsel er en tekstbit som lagres av nettleseren din. Den kan bidra til å huske innloggingsinformasjon og nettstedsinnstillinger. Den kan også samle inn informasjon som nettlesertype, operativsystem, besøkte nettsider, besøksvarighet, vist innhold og andre klikkstrømdata. Du kan justere innstillinger for oppbevaring av informasjonskapsler og godta eller blokkere individuelle informasjonskapsler i nettleserinnstillingene dine, selv om appene våre ikke vil fungere, og andre aspekter ved tjenesten vår kanskje ikke fungerer som de skal hvis du slår av informasjonskapsler.",
    voluntaryCorrespondenceContent:
      "Når du sender oss en e-post med et spørsmål eller ber om hjelp, beholder vi denne korrespondansen, inkludert e-postadressen din, slik at vi har en historikk over tidligere korrespondanse å referere til hvis du tar kontakt i fremtiden.",
    accessShareContent1:
      "For å levere produkter eller tjenester du har bedt om. Vi bruker noen tredjeparts underdatabehandlere for å kjøre applikasjonene våre og levere tjenestene til deg. Dette inkluderer leverandører av skytjenester og analysetjenester.",
    accessShareContent2:
      "For å undersøke, forhindre eller iverksette tiltak angående misbruk. Tilgang til en kundes konto når man undersøker potensielt misbruk er en siste utvei. Vi ønsker å beskytte personvernet og sikkerheten til både kundene våre og de som rapporterer problemer til oss, og vi gjør vårt beste for å balansere dette ansvaret gjennom hele prosessen. Hvis vi oppdager at du bruker produktene våre til et begrenset formål, vil vi iverksette tiltak etter behov, inkludert å varsle relevante myndigheter der det er berettiget.",
    accessShareContent3: "Når det er påkrevd i henhold til gjeldende lov.",
    userDataRequests:
      "– Forespørsler om brukerdata. Vår policy er å ikke svare på forespørsler fra myndigheter om brukerdata med mindre vi er tvunget til det av en juridisk prosess eller under begrensede omstendigheter i tilfelle en nødforespørsel. Hvis amerikanske politimyndigheter har nødvendig arrestordre, stevning eller rettskjennelse som krever at vi deler data, må vi imidlertid etterkomme dette. På samme måte vil vi bare svare på forespørsler fra myndigheter utenfor USA hvis vi er tvunget til det av den amerikanske regjeringen gjennom prosedyrer som er beskrevet i en traktat eller avtale om gjensidig juridisk bistand. Det er vår policy å varsle berørte brukere før vi deler data, med mindre vi er juridisk forbudt å gjøre det, og unntatt i noen nødstilfeller.",
    preservationRequests:
      "– Forespørsler om bevaring. På samme måte er det vår policy å kun etterkomme forespørsler om å bevare data dersom det er pålagt av den amerikanske føderale lov om lagret kommunikasjon, 18 USC paragraf 2703(f), eller av en behørig amerikansk stevning for sivile saker. Vi deler ikke bevarte data med mindre det er pålagt av loven eller pålagt av en rettskjennelse som vi velger å ikke anke. Videre, med mindre vi mottar en behørig arrestordre, rettskjennelse eller stevning før den nødvendige bevaringsperioden utløper, vil vi ødelegge eventuelle bevarte kopier av kundedata ved slutten av bevaringsperioden.",
    taxAudit:
      "– Hvis vi blir revidert av en skattemyndighet, kan vi bli pålagt å dele faktureringsrelatert informasjon. Hvis det skjer, vil vi bare dele minimumsbehovet, for eksempel faktureringsadresser og informasjon om skattefritak.",
    secureDataContent1: "Alle data er kryptert via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "når den overføres fra serverne våre til nettleseren din.",
    deleteContentContent:
      "Hvis du sletter innhold, blir det umiddelbart utilgjengelig.",
    locationContent:
      "Våre produkter og andre nettsider drives i USA. Hvis du befinner deg i EU, Storbritannia eller andre steder utenfor USA, vær oppmerksom på at all informasjon du gir oss vil bli overført til og lagret i USA. Ved å bruke våre nettsteder eller tjenester og/eller gi oss din personlige informasjon, samtykker du til denne overføringen.",
    childrenPrivacyContent:
      "Tjenestene er ikke rettet mot barn, og vi samler ikke bevisst inn personopplysninger fra barn under 13 år. Hvis du er under 13 år, må du ikke sende inn personopplysninger gjennom tjenestene. Hvis du mener at et barn har gitt oss personopplysninger i strid med disse retningslinjene, kan du kontakte oss som angitt nedenfor.",
    updatesContent:
      "Vi kan oppdatere disse retningslinjene etter behov for å overholde relevante forskrifter og gjenspeile eventuelle nye praksiser. Når vi foretar en vesentlig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden.",
    contactUsContent1:
      "Hvis du har spørsmål, kommentarer eller klager angående vår personvernerklæring, vennligst",
    contactUs: "kontakt oss",
    contactUsContent2:
      "og vi vil gjøre vårt beste for å behandle klagen din så snart som mulig."
  },
  termsOfService: {
    termsOfServiceTitle: "Vilkår for bruk",
    lastUpdated: "Sist oppdatert: 21. september 2022",
    thankYouMessage: "Takk for at du bruker produktene våre!",
    companyReference:
      "Når vi sier «Selskap», «vi», «vår» eller «oss» i dette dokumentet, refererer vi til Scribify.",
    servicesDefinition:
      "Når vi sier «tjenester», mener vi ethvert produkt som er laget og vedlikeholdt av Scribify, enten det leveres i en nettleser, et skrivebordsprogram, en mobilapplikasjon eller et annet format.",
    termsUpdateNotice:
      "Vi kan oppdatere disse tjenestevilkårene i fremtiden. Vanligvis har disse endringene vært for å tydeliggjøre noen av disse vilkårene ved å lenke til en utvidet relatert policy. Når vi gjør en betydelig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden og iverksette andre nødvendige tiltak for å varsle kontoinnehavere.",
    acceptanceOfAgreementTitle: "1. Godkjenning av avtalen",
    scribifyServicesTitle: "2. Scribifys tjenester",
    accountTermsTitle: "3. Kontovilkår",
    paymentRefundsTitle: "4. Betaling, refusjon og planendringer",
    cancellationTerminationTitle: "5. Avbestilling og oppsigelse",
    submissionsTitle: "6. Innsendinger",
    uptimeSecurityTitle: "7. Oppetid og sikkerhet",
    siteManagementTitle: "8. Nettstedsadministrasjon",
    copyrightContentTitle: "9. Opphavsrett og innholdseierskap",
    prohibitedActivitiesTitle: "10. Forbudte aktiviteter",
    featuresBugsTitle: "11. Funksjoner og feil",
    correctionsTitle: "12. RETTELSER",
    userDataTitle: "13. Brukerdata",
    privacyPolicyTitle: "14. Personvernerklæring",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakt oss",
    acceptanceContent1:
      "Ved å bruke tjenestene våre, indikerer du at du godtar denne avtalen, som dermed blir en bindende kontrakt mellom deg og Scribify. Du erklærer at du er juridisk i stand til å godta disse vilkårene, og bekrefter at du er myndig nok til å inngå en bindende kontrakt. Scrifys aksept er uttrykkelig betinget av at du samtykker i alle vilkårene i denne avtalen.",
    acceptanceContent2:
      "Tjenestene er ikke ment for og skal ikke brukes av noen under 18 år. Ved å bruke tjenestene erklærer og garanterer du at du oppfyller de ovennevnte kvalifikasjonskravene.",
    acceptanceContent3:
      "Begrepene «du», «din» og «deg selv» skal også omfatte dine ansatte, agenter, forretningsrepresentanter og alle andre personer som du gir tilgang til Tjenestene gjennom Kontoen din (som definert nedenfor). Du er ansvarlig for å sørge for at alle personer som får tilgang til Tjenestene gjennom Kontoen din er klar over disse Vilkårene og overholder dem.",
    acceptanceContent4:
      "Scribify forbeholder seg retten til å revidere og oppdatere disse vilkårene fra tid til annen etter eget skjønn. Alle endringer trer i kraft umiddelbart etter publisering. Din fortsatte bruk av tjenestene etter publisering av reviderte vilkår betyr at du godtar og samtykker i endringene. Du forventes å sjekke denne siden fra tid til annen, slik at du er klar over eventuelle endringer, da de er bindende for deg.",
    servicesContent1:
      "Tjenestene våre lar brukere omdanne talesamtaler til transkribert tekst som kan søkes i, oversettes og deles med andre.",
    servicesContent2:
      "Du kan velge om du vil bruke gratisversjonen av tjenestene («Gratistjenester») eller den abonnementsbaserte, betalte versjonen av tjenestene som du kan bli pålagt å betale gebyrer for («Betalte tjenester»).",
    servicesContent3:
      "Vi vil gjøre tjenestene tilgjengelige for deg. Du er ansvarlig for å gjøre alle nødvendige ordninger for at du skal ha tilgang til tjenestene.",
    accountTerms1:
      "– Du er ansvarlig for å opprettholde sikkerheten til kontoen din. Selskapet kan ikke og vil ikke være ansvarlig for tap eller skade som følge av din manglende overholdelse av denne sikkerhetsforpliktelsen.",
    accountTerms2:
      "- Du har ikke lov til å bruke Tjenestene til noe ulovlig, uetisk eller umoralsk formål.",
    accountTerms3:
      "– Du er ansvarlig for alt innhold som legges ut og aktivitet som skjer på kontoen din. Dette inkluderer innhold som legges ut av andre som enten: (a) har tilgang til påloggingsinformasjonen din; eller (b) har sine egne pålogginger på kontoen din.",
    accountTerms4:
      "– Du må være et menneske. Kontoer registrert av «boter» eller andre automatiserte metoder er ikke tillatt.",
    paymentContent1:
      "– For betalte tjenester som tilbyr en gratis prøveperiode, forklarer vi prøveperiodens lengde når du registrerer deg. Etter prøveperioden må du betale på forhånd for å fortsette å bruke tjenesten. Hvis du ikke betaler, vil disse tjenestene opphøre.",
    paymentContent2:
      "– Hvis du oppgraderer fra et gratisabonnement til et betalt abonnement, belaster vi kortet ditt umiddelbart, og faktureringsperioden starter på oppgraderingsdagen.",
    paymentContent3:
      "– Alle gebyrer er eksklusive alle skatter, avgifter eller gebyrer pålagt av skattemyndighetene. Der det er nødvendig, vil vi innkreve disse skattene på vegne av skattemyndighetene og overføre dem til skattemyndighetene. Ellers er du ansvarlig for betaling av alle skatter, avgifter eller gebyrer.",
    paymentContent4:
      "– Alle kjøp refunderes ikke. Du kan når som helst kansellere betalte tjenester ved å logge inn på kontoen din. For betalte abonnementer vil oppsigelsen tre i kraft ved utgangen av den gjeldende betalte perioden, med mindre annet er oppgitt.",
    cancellationContent1:
      "– Hvis du kansellerer Tjenesten før utløpet av en betalt periode, vil kanselleringen tre i kraft umiddelbart, og du vil ikke bli belastet igjen. Vi fordeler ikke automatisk ubrukt tid forholdsmessig i forrige faktureringsperiode.",
    cancellationContent2:
      "– Vi har rett til å suspendere eller avslutte kontoen din og nekte enhver nåværende eller fremtidig bruk av tjenestene våre uansett grunn når som helst. Suspensjon betyr at du ikke vil kunne få tilgang til kontoen eller noe innhold på kontoen. Oppsigelse vil videre føre til sletting av kontoen din eller din tilgang til kontoen din, og tap og avståelse av alt innhold på kontoen din. Vi forbeholder oss også retten til å nekte bruk av tjenestene til hvem som helst uansett grunn når som helst. Vi har denne klausulen fordi statistisk sett, av hundretusenvis av kontoer på tjenestene våre, er det minst én som gjør noe skumelt.",
    cancellationContent3:
      "- Verbal, fysisk, skriftlig eller annen mishandling (inkludert trusler om mishandling eller gjengjeldelse) av selskapets ansatt eller leder kan føre til umiddelbar oppsigelse av kontoen.",
    submissionsContent:
      "Du erkjenner og samtykker i at eventuelle spørsmål, kommentarer, forslag, ideer, tilbakemeldinger eller annen informasjon angående nettstedet («bidrag») som du gir oss, ikke er konfidensielle og skal bli vår eiendom. Vi skal eie eksklusive rettigheter, inkludert alle immaterielle rettigheter, og skal ha rett til ubegrenset bruk og formidling av disse bidragene for ethvert lovlig formål, kommersielt eller annet, uten bekreftelse eller kompensasjon til deg. Du fraskriver deg herved alle moralske rettigheter til slike bidrag, og du garanterer herved at slike bidrag er originale fra deg, eller at du har rett til å sende inn slike bidrag. Du samtykker i at det ikke skal være noen regressrett mot oss for påstått eller faktisk krenkelse eller misbruk av noen eiendomsrett i dine bidrag.",
    uptimeContent1:
      "– Din bruk av tjenestene skjer på egen risiko. Vi tilbyr disse tjenestene «som de er» og «som tilgjengelig». Vi tilbyr ikke tjenestenivåavtaler for de fleste av tjenestene våre, men tar oppetiden til applikasjonene våre på alvor.",
    uptimeContent2:
      "– Vi forbeholder oss retten til å midlertidig deaktivere kontoen din dersom bruken din overstiger den vanlige bruken til andre kunder av tjenestene betydelig. Vi vil selvfølgelig kontakte deg før vi iverksetter tiltak, bortsett fra i sjeldne tilfeller der bruksnivået kan påvirke ytelsen til tjenesten negativt for andre kunder.",
    uptimeContent3:
      "– Vi tar mange tiltak for å beskytte og sikre dataene dine gjennom sikkerhetskopiering, redundans og kryptering. Vi håndhever kryptering for dataoverføring over det offentlige internett.",
    uptimeContent4:
      "– Vi bruker tredjepartsleverandører og hostingpartnere til å levere nødvendig maskinvare, programvare, nettverk, lagring og relatert teknologi som kreves for å kjøre Tjenestene.",
    siteManagementContent:
      "Vi forbeholder oss retten, men ikke plikten, til å: (1) overvåke nettstedet for brudd på disse tjenestevilkårene; (2) iverksette passende rettslige skritt mot alle som, etter eget skjønn, bryter loven eller disse tjenestevilkårene, inkludert, men ikke begrenset til, å rapportere en slik bruker til politimyndigheter; (3) etter eget skjønn og uten begrensning, nekte, begrense tilgang til, begrense tilgjengeligheten til eller deaktivere (i den grad det er teknologisk mulig) noen av dine bidrag eller deler av disse; (4) etter eget skjønn og uten begrensning, varsel eller ansvar, fjerne fra nettstedet eller på annen måte deaktivere alle filer og innhold som er for store eller på noen måte er byrdefulle for våre systemer; og (5) ellers administrere nettstedet på en måte som er utformet for å beskytte våre rettigheter og eiendom og for å legge til rette for at nettstedet fungerer som det skal.",
    copyrightContent1:
      "– Alt innhold som legges ut på Tjenestene må være i samsvar med amerikansk lov om opphavsrett.",
    copyrightContent2:
      "– Vi gjør ikke krav på noen immaterielle rettigheter over materialet du leverer til tjenestene. Alt materiale som lastes opp forblir ditt.",
    copyrightContent3:
      "– Vi forhåndssjekker ikke innhold, men forbeholder oss retten (men ikke plikten) til etter eget skjønn å nekte eller fjerne innhold som er tilgjengelig via Tjenesten.",
    copyrightContent4:
      "– Navnene, utseendet og følelsen av tjenestene er opphavsrettsbeskyttet © til selskapet. Alle rettigheter forbeholdt. Du kan ikke duplisere, kopiere eller gjenbruke noen del av HTML-, CSS-, JavaScript- eller visuelle designelementer uten uttrykkelig skriftlig tillatelse fra selskapet. Du må be om tillatelse til å bruke selskapets logo eller noen tjenestelogoer til markedsføringsformål. Vennligst",
    emailUs: "e-post oss",
    copyrightContent5:
      "forespørsler om bruk av logoer. Vi forbeholder oss retten til å trekke tilbake denne tillatelsen hvis du bryter disse tjenestevilkårene.",
    copyrightContent6:
      "- Du samtykker i å ikke reprodusere, duplisere, kopiere, selge, videreselge eller utnytte noen del av Tjenestene, bruk av Tjenestene eller tilgang til Tjenestene uten uttrykkelig skriftlig tillatelse fra Selskapet.",
    copyrightContent7:
      "– Du må ikke endre et annet nettsted på en feilaktig måte antyde at det er tilknyttet Tjenestene eller Selskapet.",
    copyrightContent8:
      "– Vi respekterer andres immaterielle rettigheter. Hvis du mener at materiale som er tilgjengelig på eller gjennom nettstedet krenker opphavsretten du eier eller kontrollerer, ber vi deg umiddelbart om å",
    contactUs: "kontakt oss",
    copyrightContent9:
      "En kopi av varselet ditt vil bli sendt til personen som la ut eller lagret materialet som er omtalt i varselet. Vær oppmerksom på at du i henhold til gjeldende lov kan bli holdt ansvarlig for erstatning dersom du gir vesentlige feilaktige fremstillinger i et varsel. Hvis du derfor ikke er sikker på om materiale som ligger på eller lenkes til av nettstedet krenker opphavsretten din, bør du først vurdere å kontakte en advokat.",
    prohibitedActivitiesIntro:
      "Du har ikke tillatelse til å få tilgang til eller bruke nettstedet til noe annet formål enn det vi gjør nettstedet tilgjengelig for. Nettstedet kan ikke brukes i forbindelse med kommersielle tiltak, bortsett fra de som er spesifikt anbefalt eller godkjent av oss.",
    prohibitedActivitiesUserAgreement:
      "Som bruker av nettstedet samtykker du i å ikke:",
    prohibitedActivity1:
      "- Systematisk hente data eller annet innhold fra nettstedet for å opprette eller kompilere, direkte eller indirekte, en samling, sammenstilling, database eller katalog uten skriftlig tillatelse fra oss.",
    prohibitedActivity2:
      "- Lure, bedra eller villede oss og andre brukere, spesielt i forsøk på å få tilgang til sensitiv kontoinformasjon som brukerpassord.",
    prohibitedActivity3:
      "- Omgå, deaktivere eller på annen måte forstyrre sikkerhetsrelaterte funksjoner på nettstedet, inkludert funksjoner som forhindrer eller begrenser bruk eller kopiering av innhold eller håndhever begrensninger på bruken av nettstedet og/eller innholdet der.",
    prohibitedActivity4:
      "- Nedsette, sverte eller på annen måte skade oss og/eller nettstedet etter vår mening.",
    prohibitedActivity5:
      "- Bruke informasjon innhentet fra nettstedet til å trakassere, misbruke eller skade en annen person.",
    prohibitedActivity6:
      "- Gjøre upassende bruk av våre støttetjenester eller sende inn falske rapporter om misbruk eller misbruk.",
    prohibitedActivity7:
      "- Bruke nettstedet på en måte som er uforenlig med gjeldende lover eller forskrifter.",
    prohibitedActivity8:
      "- Delta i uautorisert innramming av eller lenking til nettstedet.",
    prohibitedActivity9:
      "- Laste opp eller overføre (eller forsøke å laste opp eller overføre) virus, trojanske hester eller annet materiale, inkludert overdreven bruk av store bokstaver og spamming (kontinuerlig publisering av repeterende tekst), som forstyrrer en parts uavbrutte bruk og glede av nettstedet, eller som modifiserer, svekker, forstyrrer, endrer eller forstyrrer bruken, funksjonene, driften eller vedlikeholdet av nettstedet.",
    prohibitedActivity10:
      "- Delta i automatisert bruk av systemet, for eksempel bruk av skript for å sende kommentarer eller meldinger, eller bruk av datautvinning, roboter eller lignende verktøy for datainnsamling og -utvinning.",
    prohibitedActivity11:
      "- Slett opphavsretts- eller annen eiendomsrettserklæring fra alt innhold.",
    prohibitedActivity12:
      "- Forsøke å utgi seg for å være en annen bruker eller person, eller bruke brukernavnet til en annen bruker.",
    prohibitedActivity13:
      '- Laste opp eller overføre (eller forsøke å laste opp eller overføre) materiale som fungerer som en passiv eller aktiv informasjonsinnsamlings- eller overføringsmekanisme, inkludert, men ikke begrenset til, klare grafikkutvekslingsformater ("gifs"), 1×1-piksler, web bugs, informasjonskapsler eller andre lignende enheter (noen ganger referert til som "spyware" eller "passive innsamlingsmekanismer" eller "pcms").',
    prohibitedActivity14:
      "- Forstyrre, avbryte eller skape en urimelig belastning på nettstedet eller nettverkene eller tjenestene som er koblet til nettstedet.",
    prohibitedActivity15:
      "- Trakassere, irritere, skremme eller true noen av våre ansatte eller agenter som er involvert i å tilby deg deler av nettstedet.",
    prohibitedActivity16:
      "- Forsøke å omgå eventuelle tiltak på nettstedet som er utformet for å forhindre eller begrense tilgang til nettstedet, eller deler av nettstedet.",
    prohibitedActivity17:
      "- Kopiere eller tilpasse nettstedets programvare, inkludert, men ikke begrenset til, Flash, PHP, HTML, JavaScript eller annen kode.",
    prohibitedActivity18:
      "- Med unntak av det som er tillatt i henhold til gjeldende lov, dechiffrere, dekompilere, demontere eller omvendt utvikle programvare som omfatter eller på noen måte utgjør en del av nettstedet.",
    prohibitedActivity19:
      "- Med unntak av det som måtte være et resultat av standard bruk av søkemotorer eller nettlesere, bruke, lansere, utvikle eller distribuere automatiserte systemer, inkludert, men ikke begrenset til, spider-programmer, roboter, jukseverktøy, skrapere eller offline-lesere som får tilgang til nettstedet, eller bruk eller lansering av uautoriserte skript eller annen programvare.",
    prohibitedActivity20:
      "- Bruk en innkjøpsagent eller innkjøpsagent for å foreta kjøp på nettstedet.",
    prohibitedActivity21:
      "- Foreta uautorisert bruk av nettstedet, inkludert innsamling av brukernavn og/eller e-postadresser til brukere elektronisk eller på andre måter med det formål å sende uønsket e-post, eller opprette brukerkontoer automatisk eller under falske forutsetninger.",
    prohibitedActivity22:
      "- Bruke nettstedet som en del av enhver innsats for å konkurrere med oss eller på annen måte bruke nettstedet og/eller innholdet til inntektsgenererende oppgaver eller kommersielle foretak.",
    prohibitedActivity23:
      "- Bruk nettstedet til å annonsere eller tilby salg av varer og tjenester.",
    prohibitedActivity24: "- Selg eller overfør profilen din på annen måte.",
    featuresContent1:
      "Vi utformer tjenestene våre med omhu, basert på vår egen erfaring og erfaringene til kunder som deler sin tid og tilbakemeldinger. Det finnes imidlertid ingen tjeneste som tilfredsstiller alle. Vi gir ingen garantier for at tjenestene våre vil oppfylle dine spesifikke krav eller forventninger.",
    featuresContent2:
      "Vi tester også alle funksjonene våre før vi sender dem ut. Som med all programvare, inneholder tjenestene våre uunngåelig noen feil. Vi sporer feilene som rapporteres til oss og jobber med dem, spesielt de som er relatert til sikkerhet eller personvern. Ikke alle rapporterte feil vil bli rettet, og vi garanterer ikke helt feilfrie tjenester.",
    correctionsContent1:
      "Det kan være informasjon på nettstedet som inneholder typografiske feil, unøyaktigheter eller utelatelser, inkludert beskrivelser, priser, tilgjengelighet og diverse annen informasjon. Vi forbeholder oss retten til å korrigere eventuelle feil, unøyaktigheter eller utelatelser og til å endre eller oppdatere informasjonen på nettstedet når som helst, uten forvarsel.",
    correctionsContent2:
      "Vi kan ikke garantere at nettstedet vil være tilgjengelig til enhver tid. Vi kan oppleve problemer med maskinvare, programvare eller andre problemer, eller måtte utføre vedlikehold knyttet til nettstedet, noe som kan føre til avbrudd, forsinkelser eller feil. Vi forbeholder oss retten til å endre, revidere, oppdatere, suspendere, avvikle eller på annen måte modifisere nettstedet når som helst og av en hvilken som helst grunn uten varsel til deg. Du samtykker i at vi ikke har noe ansvar for tap, skade eller ulempe forårsaket av din manglende evne til å få tilgang til eller bruke nettstedet under nedetid eller avvikling av nettstedet. Ingenting i disse tjenestevilkårene skal tolkes slik at vi forplikter oss til å vedlikeholde og støtte nettstedet eller til å levere rettelser, oppdateringer eller utgivelser i forbindelse med dette.",
    userDataContent:
      "Vi vil lagre visse data du overfører til nettstedet med det formål å administrere nettstedets ytelse, samt data knyttet til din bruk av nettstedet. Selv om vi regelmessig sikkerhetskopierer data, er du eneansvarlig for alle data du overfører eller som er relatert til aktivitet du har utført ved bruk av nettstedet. Du samtykker i at vi ikke har noe ansvar overfor deg for tap eller ødeleggelse av slike data, og du fraskriver deg herved enhver rett til å reise søksmål mot oss som følge av slikt tap eller ødeleggelse av slike data.",
    privacyPolicyContent1:
      "Vi bryr oss om personvern og sikkerhet. Vennligst les vår",
    privacyPolicy: "Personvernerklæring",
    privacyPolicyContent2:
      "Ved å bruke nettstedet godtar du å være bundet av vår personvernerklæring, som er innlemmet i disse tjenestevilkårene. Vær oppmerksom på at nettstedet er vertskap for i USA. Hvis du besøker nettstedet fra en annen region i verden med lover eller andre krav som regulerer innsamling, bruk eller utlevering av personopplysninger som avviker fra gjeldende lover i USA, overfører du gjennom din fortsatte bruk av nettstedet dine data til USA, og du samtykker i at dataene dine overføres til og behandles i USA.",
    liabilityIntro:
      "Vi nevner ansvar gjennomgående i disse vilkårene, men for å samle alt i én seksjon:",
    liabilityContent:
      "Du forstår og samtykker uttrykkelig i at Selskapet ikke skal være ansvarlig, verken i henhold til lov eller billighetsrett, overfor deg eller noen tredjepart for direkte, indirekte, tilfeldige, tapte fortjeneste, spesielle, følgeskader, straffende eller eksemplariske erstatninger, inkludert, men ikke begrenset til, erstatning for tapt fortjeneste, goodwill, bruk, data eller andre immaterielle tap (selv om Selskapet har blitt informert om muligheten for slike skader), som følge av: (1) bruk eller manglende evne til å bruke Tjenestene; (2) feil, mangler eller unøyaktigheter i innhold og materiale; (3) personskade eller skade på eiendom, av noen art, som følge av din tilgang til og bruk av nettstedet; (4) kostnaden for anskaffelse av erstatningsvarer og -tjenester som følge av varer, data, informasjon eller tjenester kjøpt eller innhentet eller meldinger mottatt eller transaksjoner inngått gjennom eller fra Tjenestene; (5) uautorisert tilgang til eller bruk av våre sikre servere og/eller all personlig informasjon og/eller finansiell informasjon lagret der; (6) avbrudd eller opphør av overføring til eller fra nettstedet; (7) eventuelle feil, virus, trojanske hester eller lignende som kan overføres til eller gjennom nettstedet av en tredjepart, og/eller; (8) eventuelle feil eller utelatelser i innhold og materialer eller for tap eller skade av noe slag som følge av bruk av innhold som er lagt ut, overført eller på annen måte gjort tilgjengelig via nettstedet; (9) uttalelser eller oppførsel fra en tredjepart på tjenesten; (10) eller andre forhold knyttet til disse tjenestevilkårene eller tjenestene, enten som kontraktsbrudd, erstatningsansvar (inkludert aktiv eller passiv uaktsomhet) eller annen ansvarsteori.",
    miscellaneousContent:
      "Disse tjenestevilkårene og eventuelle retningslinjer eller driftsregler som er lagt ut av oss på nettstedet eller i forbindelse med nettstedet, utgjør hele avtalen og forståelsen mellom deg og oss. Dersom vi ikke utøver eller håndhever noen rettighet eller bestemmelse i disse tjenestevilkårene, skal dette ikke anses som en fraskrivelse av en slik rettighet eller bestemmelse. Disse tjenestevilkårene gjelder i den grad loven tillater det. Vi kan når som helst overdra noen eller alle våre rettigheter og forpliktelser til andre. Vi er ikke ansvarlige for tap, skade, forsinkelse eller unnlatelse av å handle forårsaket av årsaker utenfor vår rimelige kontroll. Hvis noen bestemmelse eller del av en bestemmelse i disse tjenestevilkårene anses å være ulovlig, ugyldig eller ikke-håndhevbar, anses denne bestemmelsen eller delen av bestemmelsen å være atskilt fra disse tjenestevilkårene og påvirker ikke gyldigheten og håndhevbarheten av eventuelle gjenværende bestemmelser. Det oppstår ikke noe joint venture-, partnerskaps-, ansettelses- eller agenturforhold mellom deg og oss som følge av disse tjenestevilkårene eller bruk av nettstedet. Du samtykker i at disse tjenestevilkårene ikke skal tolkes mot oss i kraft av at vi har utarbeidet dem. Du frasier deg herved ethvert forsvar du måtte ha basert på den elektroniske formen av disse tjenestevilkårene og mangelen på signering fra partene heri for å undertegne disse tjenestevilkårene.",
    contactUsContent1:
      "Hvis du har et spørsmål om noen av tjenestevilkårene, vennligst",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funksjoner",
    UnlimitedTranscription: "Ubegrenset transkripsjon",
    BulkUpload: "Masseopplasting",
    Accuracy: "96 % nøyaktighet",
    Pricing: "Priser",
    UseCases: "Bruksområder",
    AllUseCases: "Alle bruksområder",
    Podcasters: "Podkastere",
    Journalists: "Journalister",
    ContentCreators: "Innholdsprodusenter",
    Researchers: "Forskere",
    BusinessTeams: "Forretningslag",
    Educators: "Lærere",
    Resources: "Ressurser",
    YouTubetoMP4: "YouTube til MP4",
    StartFreeTrial: "Prøv gratis"
  },
  Footer: {
    des: "Verdens første virkelig ubegrensede AI-transkripsjonstjeneste. Ingen tak, ingen grenser, bare frihet til å skape.",
    Features: "Funksjoner",
    UseCases: "Bruksområder",
    Company: "Selskap",
    featureMenus: ["Ubegrenset transkripsjon", "Masseopplasting", "96 % nøyaktighet"],
    useCaseMenus: [
          "Alle bruksområder",
          "Podkastere",
          "Journalister",
          "Innholdsprodusenter",
          "Forskere",
          "Forretningslag",
          "Lærere"
        ],
    companyMenus: [
          "Om",
          "Priser",
          "Personvern",
          "Vilkår"
        ]
  },
  Index: {
    Hero: {
      badge: 'Ikke mer "Shrinkflation" – Faktisk Ubegrenset',
      h1: "Slutt å Betale for Begrensninger:",
      gradient: "Virkelig Ubegrenset AI-transkripsjon",
      subtitle: "Vår AI transkriberer video og konverterer lyd til tekst, behandler 50 filer samtidig uten månedlige tak. Transkripsjon som virkelig skalerer med deg.",
      FreeTrial: "Prøv Gratis – Ingen Kredittkort",
      HowWorks: "Se Hvordan Det Fungerer",
      Unlimited: "Ubegrensede Filopplastinger",
      NoCap: "Ingen Månedlig Minuttgrense",
      Hour: "Støtte for 10-Timers Filer",
      ExploreUseCases: "Utforsk Bruksområder"
    },
    Stats: {
      monthlyMinutes: "Månedlige Minutter",
      fileUploads: "Filopplastinger",
      batchProcessing: "Batchbehandling",
      maxFileLength: "Maks Fillengde"
    },
    FeaturesGrid: {
      try_now: "Prøv Nå",
      no_signup: "Ingen Registrering Kreves",
      experience_unltd: "Opplev virkelig ubegrenset transkripsjon",
      upload_50: "Last opp inntil 50 filer samtidig, her.",
      no_limits: "Avansert",
      no_surprises: "AI-transkripsjon",
      transparency: "Ikke mer Skjulte Grenser, Ikke mer Overraskelser – Mens andre stille reduserer minuttene dine eller gjemmer tak i småskriften, tror vi på radikal åpenhet",
      feat_unltd: "Faktisk Ubegrenset",
      feat_unltd_desc: 'Ingen "rimelig bruk"-policy gjemt i vilkårene. Ingen lagringsbegrensninger forkledd som "ubegrenset". Last opp hele arkivet ditt, transkriber alt for alle dine lydtranskripsjonsbehov. Vi mener det.',
      feat_bulk: "Frihet for Masseopplasting",
      feat_bulk_desc: 'Lei av "3 livstidsimports" eller "10 filer per måned"? Last opp 50 filer samtidig, så mange ganger du trenger. Perfekt for behandling av etterslep.',
      feat_batch: "Batchbehandling",
      feat_batch_desc: "Behandle hele podcastsesongen din over natten. Last opp 50 intervjuer samtidig. La AI-en vår jobbe mens du sover. Våkn opp til ferdige transkripsjoner.",
      feat_accuracy: "96 % Nøyaktighet",
      feat_accuracy_desc: "Vår bransjeledende AI transkriberer lyd med smart tegnsetting, talerdiarisering for opptil 20 talere, og håndterer aksenter og tekniske begreper feilfritt.",
      feat_langs: "100+ Språk",
      feat_langs_desc: "Transkriber video og lyd på 100+ språk, oversett til 249+. Ingen ekstra kostnader for forskjellige språk. Globalt innhold, én enkel pris.",
      feat_pro: "Profesjonelle Funksjoner",
      feat_pro_desc: "Ordnivå-tidsstempler for presis lyd-/videoposisjonering, nøyaktig talergjenkjenning selv under raske samtalebytter, og perfekt formatert tekst med avsnitt, setninger og tegnsetting for enkel lesing.",
        features: "Funksjoner"
    },
    UseCases: {
      built_for: "Masse",
      "heavy_users": "Lyd- & Videotranskripsjon",
      "join_users": 'Laget for Tunge Brukere Som Deg – Bli med YouTubere, innholdsprodusenter og podkastere som har byttet fra "shrinkflation"-tjenester',
      "podcasters": {
        "title": "Podkastere",
        "des": "Last opp hele ditt tilbakekatalog. Lag shownoter for hver episode. Ikke velg lenger hvilke episoder som skal transkriberes."
      },
      "content_creators": {
        "title": "Innholdsprodusenter",
        "des": "Gjør videobiblioteket ditt søkbart ved å bruke vår tjeneste til å transkribere videofiler automatisk. Generer bildetekster for alt. Ingen minuttelling, bare skaping."
      },
      "journalists": {
        "title": "Journalister",
        "des": 'Last opp alle intervjuene dine samtidig. Ikke mer "10 filer per måned"-hindringer når du er på tidsfrist. Behandle alt.'
      },
      researchers: {
        title: "Forskere",
        des: "Transkriber timer med fokusgrupper og intervjuer. Last opp hele studien din samtidig. Få nøyaktig talergjenkjenning."
      },
      business_teams: {
        title: "Forretningslag",
        des: "Ta opp hver samtale uten å bekymre deg for grenser. Få AI-innsikt på alle samtaler, ikke bare et utvalg."
      },
      educators: {
        title: "Lærere",
        des: "Transkriber hele forelesningsserier. Gjør alt innhold tilgjengelig. Ikke velg mellom kurs på grunn av minuttgrenser."
      }
    },
    Testimonials: {
      title: "Elsket av",
      highlighted_users: "50 000+ brukere",
      subtitle: "Se hvorfor profesjonelle velger NeverCap fremfor begrensede alternativer",
      Mike: {
        "text": "Herregud, dette fungerer faktisk! Har drevet podcast i 3 år og transkribert alt manuelt som en idiot. Lastet opp 6 episoder på en gang, og den skilte meg og medvert perfekt. Kaféepisoden jeg trodde var ødelagt? Krystallklar transkripsjon. Jeg skal aldri skrive dette selv igjen.",
        "author": "Mike Rodriguez",
        "role": "Podkastvert"
      },
      Sarah: {
        "text": "Jeg underviser på nett og trengte undertekster til videoene mine. Prøvde 3 andre verktøy som enten hadde rare begrensninger eller tok evigheter. Dette... fungerer bare? Lastet opp forelesningen min på spansk, fikk perfekte undertekster på 2 minutter. Studentene mine med hørselsvansker er så glade. Ønsker jeg fant dette før!",
        "author": "Sarah Chen",
        "role": "Nettskolelærer"
      },
      Jessica: {
        "text": "Har brukt dette til intervjuene mine, og det er utrolig nøyaktig. Hadde et 2-timers intervju på gebrokken engelsk + spansk, og den fikk alt riktig, til og med tidsstemplene. Betalte min praktikant $200/mnd bare for å transkribere. Dette sparer meg bokstavelig talt penger hver måned.",
        "author": "Jessica Park",
        "role": "Frilansjournalist"
      }
    },
    PricingPreview: {
      "title": "Åpen prising",
      "highlighted_text": "Ingen skjulte begrensninger",
      "subtitle": "Velg din plan. Ingen asterisker, ingen småskrift, ingen overraskelser"
    },
    FAQSection: {
      "title": "Ofte stilte",
      "titleHighlight": "Spørsmål",
      "questions": [
            {
              "q": "AI-transkripsjon",
              "question": "Hva er AI-transkripsjon, og hvordan fungerer det?",
              "answer": "AI-transkripsjon er prosessen med å automatisk konvertere lyd til tekst ved hjelp av avansert kunstig intelligens. Hos NeverCap laster du bare opp filene dine, og vår AI transkriberer innholdet med opptil 96 % nøyaktighet. Tjenesten vår er designet for å transkribere videofiler (som MP4, MOV) og lydfiler (som MP3, WAV) til lesbar, redigerbar tekst, med talermerker og tidsstempler."
            },
            {
              "q": "unlimited_policy",
              "question": "Er det virkelig ubegrenset? Hva er haken?",
              "answer": "Ja, det er virkelig ubegrenset! Ingen månedlige minuttgrenser, ingen ekstraavgifter. De eneste grensene er tekniske: enkeltfiler kan være opptil 10 timer lange eller 5 GB store, og du kan behandle 50 filer samtidig. Men du kan laste opp så mange batcher du vil, hele måneden."
            },
            {
              "q": "accuracy",
              "question": "Hvor nøyaktig er transkripsjonen?",
              "answer": "Vi garanterer 96 % nøyaktighet for klar lyd. AI-en vår er trent på millioner av timer med variert innhold og håndterer aksenter, fagtermer og flere talere usedvanlig godt. For utfordrende lyd hjelper våre smarte forbedringsfunksjoner med å forbedre resultatene."
            },
            {
              "q": "languages",
              "question": "Hvilke språk støtter dere?",
              "answer": "Vi støtter transkripsjon på over 100 språk, inkludert engelsk, spansk, mandarin, hindi, arabisk, fransk og mer. I tillegg kan du oversette transkripsjonene dine til 249 forskjellige språk, noe som gjør det perfekt for globalt innhold."
            },
            {
              "q": "speed",
              "question": "Hvor rask er transkripsjonen?",
              "answer": "Lynraskt! En 1-times lydfil behandles vanligvis på under 5 minutter. Med batchbehandling kan du laste opp 50 filer samtidig og la dem behandle parallelt. De fleste brukerne våkner til at hele biblioteket deres er transkribert over natten."
            },
            {
              "q": "cancellation",
              "question": "Kan jeg avbryte når som helst?",
              "answer": "Absolutt! Ingen bindingstid, ingen avbestillingsgebyrer. Du kan oppgradere, nedgradere eller avslutte abonnementet når som helst fra dashbordet ditt. Hvis du avbryter, beholder du tilgang til slutten av faktureringsperioden."
            },
            {
              "q": "security",
              "question": "Er dataene mine sikre?",
              "answer": "Din sikkerhet er vår prioritet. Vi er SOC 2-sertifisert, bruker 256-bit kryptering for alle data og bruker aldri innholdet ditt til å trene modellene våre. Du kan slette filene dine når som helst, og vi sletter dem automatisk etter 30 dager. GDPR- og CCPA-kompatibel."
            },
            {
              "q": "export_formats",
              "question": "Hvilke eksportformater er tilgjengelige?",
              "answer": "Last ned transkripsjonene dine i det formatet du trenger: PDF, Word (DOCX), Excel, CSV, SRT-undertekster, ren tekst (TXT) og VTT-undertekster. Perfekt for enhver arbeidsflyt."
            },
            {
              "q": "file_formats",
              "question": "Hvilke lyd- og videofiler kan jeg laste opp?",
              "answer": "Vi støtter stort sett alle lyd- og videoformater du vil møte: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV og mer. Hvis du kan spille det, kan vi transkribere det."
            }
          ]
    },
    CTASection: {
      "title": "Klar å bryte fri fra grenser?",
      "subtitle": "Bli med 50 000+ profesjonelle som har byttet til virkelig ubegrenset transkripsjon",
      "button": "Prøv NeverCap gratis",
      "disclaimer": "Ingen kredittkort kreves for gratisplanen • Oppgrader når som helst for ubegrenset tilgang"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ikke mer "krympflasjon"',
      heroTitleLine1: "Virkelig ubegrenset",
      heroTitleLine2: "AI-transkripsjon",
      heroSubtitle: "Mens Trint begrenser deg til 50 timer og Otter begrenser deg til 10 filer per måned, leverer vi det vi faktisk lover: ubegrenset transkripsjon uten skjulte begrensninger.",
      primaryCta: "Prøv gratis – ingen bankkort",
      secondaryCta: "Se sannheten",
      comparisonBadLabel: "Hva andre gjør",
      comparisonBadTitle: "Skjulte begrensninger overalt",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Ubegrenset" = 50 timer/måned',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 importeringer (gratis), 10/måned (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 minutter lagringsbegrensning",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Maks 30 timer/måned",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Skjult i vilkår og betingelser",
      comparisonGoodLabel: "Hva vi gjør",
      comparisonGoodTitle: "Faktisk ubegrenset",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Ingen månedlige minuttbegrensninger",
      comparisonGoodItem1Text: "noensinne",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Ubegrenset filopplasting",
      comparisonGoodItem2Text: "alltid",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Ingen lagringsbegrensninger",
      comparisonGoodItem3Text: "i det hele tatt",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 filer batch-opplasting",
      comparisonGoodItem4Text: "når som helst",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Åpen politikk",
      comparisonGoodItem5Text: "på forhånd",
      feature1Label: "Ingen begrensninger",
      feature1TitlePart1: "Transkriber 1 000 timer?",
      feature1TitlePart2: "Samme pris.",
      feature1Description: "Slutt å telle minutter. Slutt å se på begrensninger. Enten du transkriberer 10 timer eller 10 000 timer per måned, betaler du samme fastpris. Ingen ekstra avgifter. Ingen overraskelsesregninger.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Ingen "rimelig bruk"-politikk triks',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ingen nedtuning etter X timer",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ingen månedssluttangst",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Månedlige timer",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Overpriser",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Last opp når som helst",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Åpenhet",
      feature2Label: "Massefrihet",
      feature2TitlePart1: "Last opp din",
      feature2TitlePart2: "Hele arkiv",
      feature2Description: "Otter gir deg 3 import på livstid gratis, 10 per måned på Pro. Vi gir deg ubegrenset. Last opp podkast-backlogen din, alle intervjuene dine, års opptak. Ingen begrensninger.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 filer per batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-timers filer støttet",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Behandle mens du sover",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 import på livstid",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 filer/måned",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 timer/måned grense",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Virkelig ubegrenset ✓",
      feature3Label: "Sosial bekreftelse",
      feature3TitlePart1: "Brukere",
      feature3TitlePart2: "Bytter daglig",
      feature3Description: '"Jeg betaler $100/år for Otter og de begrenser meg til 10 filimport per måned. Det øyeblikket det finnes et alternativ med ubegrenset import, er jeg borte!" - Ekte Reddit-bruker',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000+ brukere har byttet",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Fra Otters "krympflasjon"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Aldri tilbake",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Fornøyde brukere",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Filer behandlet",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Nøyaktighet",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Ingen skjulte avgifter",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutter/Måned",
      trustBadge2Number: "100+",
      trustBadge2Label: "Språk",
      trustBadge3Number: "96%",
      trustBadge3Label: "Nøyaktighet",
      trustBadge4Number: "50",
      trustBadge4Label: "Batchopplasting",
      ctaTitle: "Slutt å betale for falsk ubegrenset",
      ctaSubtitle: "Bli en av tusenvis som har byttet til virkelig ubegrenset transkripsjon",
      finalCta: "Prøv NeverCap gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Frihet for masseopplasting",
      heroTitleLine1: "Last opp 50 filer.",
      heroTitleHighlight: "Behandle alt.",
      heroSubtitle: "Otter gir deg 3 import på livstid. TRE. For hele livet. Vi gir deg ubegrensede opplastinger, 50 filer om gangen, når du trenger det.",
      primaryCta: "Start masseopplasting →",
      secondaryCta: "Se grensene",
      redditQuote: '"Jeg har 3 års podkastepisoder å transkribere. Otter sier jeg får 3 import på livstid. TRE. Dette er fornærmende."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Ekte frustrasjon fra r/podcasting",
      comparisonSectionTitlePart1: "De",
      comparisonSectionTitleHighlight: "Absurde grensene",
      comparisonSectionTitlePart2: "De pålegger",
      comparisonSubtitle: "Hvordan konkurrenter begrenser din mulighet til å behandle innhold",
      limitCard1Service: "Otter gratis",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Import på livstid",
      limitCard1DescriptionLine2: "(Ja, for HELE livet ditt)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Filer per måned",
      limitCard2DescriptionLine2: "($100/årsplan)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fil om gangen",
      limitCard3DescriptionLine2: "(Sekvensiell opplasting)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Ubegrensede opplastinger",
      limitCard4DescriptionLine2: "50 filer per batch",
      feature1Label: "Batchkraft",
      feature1TitlePart1: "Behandle hele",
      feature1TitleHighlight: "Ditt arkiv",
      feature1TitlePart2: "På én natt",
      feature1Description: 'Last opp 50 filer før du legger deg. Våkne til ferdige transkripsjoner. Ingen kø, ingen venting, ingen "vennligst oppgrader"-meldinger. Kun ren prosessering ved fingrene dine.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samtidige opplastinger",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallell prosessering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-timers filer støttet",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maks 5GB per fil",
      uploadAnimationText1: "50 filer",
      uploadAnimationText2: "Slipp & Behandle",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 flere filer...",
      feature2Label: "Hastighet",
      feature2TitlePart1: "Fra opplasting til",
      feature2TitleHighlight: "Ferdig på timer",
      feature2Description: "Vår parallelle behandlingsinfrastruktur betyr at dine 50 filer ikke venter i kø. De blir alle transkribert samtidig. Det som tidligere tok uker, tar nå timer.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-times fil: 5 minutter",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 filer: behandles parallelt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-postvarsel når ferdig",
      timelineStep1Icon: "1",
      timelineStep1Title: "Last opp",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Behandling",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-magi",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Fullført",
      timelineStep4Time: "< 2 timer",
      feature3Label: "Frihet",
      feature3TitlePart1: "Ingen køer.",
      feature3TitleHighlight: "Ingen venting.",
      feature3TitlePart2: "Ingen grenser.",
      feature3Description: 'Mens andre lar deg vente i virtuelle køer eller oppgradere for "prioritetsbehandling," behandler vi hver opplasting med hast. Innholdet ditt er viktig, og det bør ikke vente.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Ingen prioritetsnivåer",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Samme hastighet for alle",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Last opp når som helst, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Alltid klar",
      feature3VisualSubtext: "Last opp når inspirasjonen slår til",
      useCasesTitlePart1: "Perfekt for",
      useCasesTitleHighlight: "Tunge opplastere",
      useCasesSubtitle: "Reelle scenarier der masseopplasting redder dagen",
      useCase1Title: "Podcast-arkiv",
      useCase1Description: "Last opp 3 års episoder på en gang. Lag transkripsjoner for hele din tidligere katalog. Generer SEO-innhold for hver episode.",
      useCase2Title: "Kursproduksjon",
      useCase2Description: "Behandle alle dine forelesningsvideoer samtidig. Lag tilgjengelige transkripsjoner for studenter. Bygg søkbare kursmaterialer.",
      useCase3Title: "Intervjubacklog",
      useCase3Description: "Rydd opp i det høye av transkriberingsklare intervjuer. Behandle uker med forskning på timer. Møt frister uten panikk.",
      useCase4Title: "YouTube-bibliotek",
      useCase4Description: "Generer undertekster for hele kanalen din. Lag blogginnlegg fra videoinnhold. Forbedre SEO på alle videoer.",
      useCase5Title: "Møtearkiv",
      useCase5Description: "Last opp måneder med innspilte møter. Lag søkbare møtenotater. Mist aldri viktige beslutninger igjen.",
      useCase6Title: "Forskningsdata",
      useCase6Description: "Behandle fokusgrupper i bulk. Transkriber alle deltakerintervjuer. Analyser kvalitative data effektivt.",
      ctaTitle: "Slutt å be om flere opplastinger",
      ctaSubtitle: "Få ubegrenset bulkprosessering som faktisk fungerer",
      finalCta: "Last opp 50 filer nå →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Ledende nøyaktighet i bransjen",
      heroTitleLine1: "96 % nøyaktighet.",
      heroTitleHighlight: "Hvert ord teller.",
      heroSubtitle: "Bransjeledende nøyaktighet på 12 hovedspråk. Ordvise tidsstempler for perfekt synkronisering. Smart høyttaleridentifikasjon som håndterer raske samtaler. Profesjonell formatering som faktisk er lesbar.",
      primaryCta: "Test nøyaktigheten vår →",
      secondaryCta: "Se språk",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Nøyaktighet på",
      statCard1DescriptionLine2: "12 hovedspråk",
      statCard2Percentage: "95 %+",
      statCard2DescriptionLine1: "Nøyaktighet med",
      statCard2DescriptionLine2: "Aksenter og dialekter",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Ordvis",
      statCard3DescriptionLine2: "Tidsstempelpresisjon",
      languageSectionTitlePart1: "96 % nøyaktighet",
      languageSubtitle: "Profesjonell transkripsjon for globalt innhold",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Engelsk",
      languageCard1Accuracy: "96 % nøyaktighet",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spansk",
      languageCard2Accuracy: "96 % nøyaktighet",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96 % nøyaktighet",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Fransk",
      languageCard4Accuracy: "96 % nøyaktighet",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tysk",
      languageCard5Accuracy: "96 % nøyaktighet",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japansk",
      languageCard6Accuracy: "96 % nøyaktighet",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreansk",
      languageCard7Accuracy: "96 % nøyaktighet",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugisisk",
      languageCard8Accuracy: "96 % nøyaktighet",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russisk",
      languageCard9Accuracy: "96 % nøyaktighet",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiensk",
      languageCard10Accuracy: "96 % nøyaktighet",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Nederlandsk",
      languageCard11Accuracy: "96 % nøyaktighet",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabisk",
      languageCard12Accuracy: "96 % nøyaktighet",
      moreLanguagesText: "+ 88 flere språk støttes med 95 %+ nøyaktighet",
      feature1Label: "Presisjon",
      feature1TitlePart1: "Ord-nivå",
      feature1TitleHighlight: "Tidsstempler",
      feature1Description: "Hvert ord er perfekt synkronisert med lydposisjonen. Lag klikkbare transkripsjoner, generer presise undertekster, eller hopp til nøyaktige øyeblikk i opptakene dine. 100 ms presisjon som fagfolk stoler på.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms tidsstempelpresisjon",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt for videoredigering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikkbare interaktive transkripsjoner",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Ramme-nøyaktige undertekster",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Taler 1",
      transcriptLine1Text: "Velkommen til dagens podcast-episode.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Taler 2",
      transcriptLine2Text: "Takk for at jeg fikk være med i showet!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Taler 1",
      transcriptLine3Text: "La oss dykke ned i hovedtemaet...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Taler 2",
      transcriptLine4Text: "Absolutt, jeg gleder meg til å diskutere dette.",
      feature2Label: "Smart AI",
      feature2TitlePart1: "Håndterer",
      feature2TitleHighlight: "Raske samtaler",
      feature2Description: "Vår AI identifiserer talere nøyaktig selv under overlappende tale, avbrytelser og raske samtaler. Perfekt for intervjuer, podcaster og møter der talere ofte avbryter.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifiserer opptil 20 talere",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Håndterer avbrytelser perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fungerer med overlappende tale",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Opprettholder nøyaktighet i krysstalk",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Talere identifisert",
      feature2VisualSubtext: "Selv i raske samtaler",
      feature3Label: "Lesbarhet",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formatert tekst",
      feature3Description: "Ikke mer tekstmurer. Vår AI legger automatisk til avsnitt, setninger og tegnsetting der de hører hjemme. Resultatet? Transkripsjoner som faktisk er behagelige å lese og enkle å skumme gjennom.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smarte avsnittbrytninger",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Nøyaktig tegnsetting",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Riktig stor bokstavbruk",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Renslig, skannbart resultat",
      formattingTitle: "Før & etter",
      formattingBeforeLabel: "❌ Andre:",
      formattingBeforeText: "så i dag skal vi snakke om de nye funksjonene vi har jobbet med jeg tror du virkelig vil like dem de har blitt etterspurt av brukere lenge og vi har endelig fått dem ferdig",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Så i dag skal vi snakke om de nye funksjonene vi har jobbet med. Jeg tror du virkelig vil like dem. De har blitt etterspurt av brukere lenge, og vi har endelig fått dem ferdig.",
      comparisonSubtitle: "Nøyaktighet",
      comparisonSectionTitle: "Sammenligning",
      comparisonDes: "Se hvordan vi måler oss mot konkurrentene",
      tableHeader1: "Funksjon",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Nøyaktighet (klar lyd)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Tidsstempler på ordnivå",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Talergjenkjenning",
      tableRow3NeverCap: "20 talere",
      tableRow3Otter: "16 talere",
      tableRow3Descript: "10 talere",
      tableRow3Rev: "✕",
      tableRow4Feature: "Håndterer krysstalk",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begrenset",
      tableRow4Descript: "Begrenset",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart formatering",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Grunnleggende",
      tableRow6Feature: "12 språk på 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Opplev 96% nøyaktighet",
      ctaSubtitle: "Last opp din mest utfordrende lyd og se forskjellen",
      finalCta: "Test nøyaktigheten nå →",
        languageSectionTitlePart2: "på 12 hovedspråk"
    }
  },
  Pricing: {
    Hero: {
      "title": "Enkle, transparente priser",
      "highlighted_text": "Ingen skjulte begrensninger",
      "description": "Velg den planen som passer dine behov. Oppgrader eller nedgrader når som helst. Ingen bindingstid, ingen overraskelser."
    },
    Cards: {
      "title": "Enkle, transparente priser.",
      "highlighted_text": "Ingen skjulte begrensninger.",
      "description": "Velg den planen som passer dine behov. Oppgrader eller nedgrader når som helst. Ingen bindingstid, ingen overraskelser.",
      "plans": [
            {
              "name": "Gratis",
              "price": "$0",
              "period": "måned",
              "discount": "Perfekt for å teste vår tjeneste",
              "limits": {
                "title": "Daglige grenser",
                "items": [
                  "3 filer/dag (≈90 min totalt/dag)",
                  "Opptil 30 min per fil (≤250 MB)",
                  "Last opp 1 fil om gangen",
                  "Standard prioritert kø"
                ]
              },
              "features": {
                "title": "Funksjoner",
                "items": [
                  "100+ språk",
                  "Talermerker",
                  "Oversettelse",
                  "Alle eksportformater"
                ]
              },
              "cta": {
                "text": "Start gratis. Ingen kredittkort.",
                "button": "Gjeldende abonnement"
              }
            },
            {
              "name": "Pro Månedlig",
              "price": "$17.99",
              "period": "måned",
              "discount": "$9.99 den første måneden",
              "limits": {
                "title": "Ingen månedlig grense",
                "items": [
                  "Ubegrensede totalminutter",
                  "Opptil 10 timer / 5 GB per fil",
                  "Last opp 50 filer samtidig",
                  "Prioritert kø"
                ]
              },
              "features": {
                "title": "Alt i Gratis, pluss",
                "items": [
                  "Tidsstempler på ordnivå",
                  "Avansert talergjenkjenning",
                  "Formaterte avsnitt & tegnsetting",
                  "Prioritert support"
                ]
              },
              "cta": {
                "text": "Ubegrensede minutter. Prioritert hastighet. Batch-opplasting.",
                "button": "Bli Pro"
              },
              "badge": "Mest populær"
            },
            {
              "name": "Pro Årlig",
              "price": "$8.99",
              "period": "måned",
              "discount": "Årlig fakturering $107.88",
              "limits": {
                "title": "Samme som Pro Månedlig",
                "items": [
                  "Ubegrensede totalminutter",
                  "Opptil 10 timer / 5 GB per fil",
                  "Last opp 50 filer samtidig",
                  "Prioritert kø"
                ]
              },
              "features": {
                "title": "Alt i Gratis, pluss",
                "items": [
                  "Tidsstempler på ordnivå",
                  "Avansert talergjenkjenning",
                  "Formaterte avsnitt & tegnsetting",
                  "Prioritert support"
                ]
              },
              "cta": {
                "text": "Ubegrensede minutter. Prioritert hastighet. Batch-opplasting.",
                "button": "Bli Pro"
              },
              "badge": "Best Verdi - "
            }
          ],
      "disclaimer": '"Ubegrenset" betyr ingen månedlig grense og ingen kunstig nedetid. Rettferdig bruk gjelder for misbruk av automatisering eller redistribusjon.'
    },
    ComparisonTable: {
      "header": {
        "title": "Sammenlign",
        "highlighted_text": "Alle funksjoner",
        "subtitle": "Se nøyaktig hva du får med hver plan. Ingen skjulte begrensninger."
      },
      "plans": [
              "Funksjoner",
              "Gratis",
              "Pro Månedlig",
              "Pro Årlig"
            ],
      "features": [
            {
              "name": "Pris",
              "values": [
                "$0/måned",
                {
                  "main": "$17.99/måned",
                  "note": "$9.99 første måned"
                },
                {
                  "main": "$8.99/måned",
                  "note": "Fakturert $107.88/år"
                }
              ]
            },
            {
              "name": "Månedlige minutter",
              "values": ["~2,700 (90/dag)", "Ubegrenset", "Ubegrenset"]
            },
            {
              "name": "Maks fillengde",
              "values": ["30 minutter", "10 timer", "10 timer"]
            },
            {
              "name": "Maks filstørrelse",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Masseopplasting",
              "values": ["1 fil", "50 filer", "50 filer"]
            },
            {
              "name": "Behandlingshastighet",
              "values": ["Standard", "Prioritert", "Prioritert"]
            },
            {
              "name": "Språk som støttes",
              "values": ["100+ språk", "100+ språk", "100+ språk"]
            },
            {
              "name": "Oversettelse",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Talergjenkjenning",
              "values": ["Grunnleggende", "Avansert (20 talere)", "Avansert (20 talere)"]
            },
            {
              "name": "Tidsstempler på ordnivå",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formaterte avsnitt",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Eksportformater",
              "values": ["Alle formater", "Alle formater", "Alle formater"]
            },
            {
              "name": "Støtte",
              "values": ["E-post", "Prioritert e-post", "Prioritert e-post"]
            },
            {
              "name": "Databeholding",
              "values": ["30 dager", "For alltid", "For alltid"]
            }
          ]
    },
    FAQ: {
      "title": "Ofte stilte",
      "titleHighligt": "Spørsmål",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Er det virkelig ubegrenset?",
              "answer": "Ja! Pro-planer har ingen månedlige minuttbegrensninger. De eneste grensene er tekniske: maks 10 timers filvarighet og 5GB filstørrelse. Du kan behandle så mange filer du trenger."
            },
            {
              "q": "plan_change",
              "question": "Kan jeg bytte plan når som helst?",
              "answer": "Absolutt! Du kan avslutte abonnementet når som helst fra dashbordet ditt. Oppgrader eller nedgrader når du vil."
            },
            {
              "q": "payment_methods",
              "question": "Hvilke betalingsmetoder godtar dere?",
              "answer": "Vi godtar alle store kredittkort, bankkort og PayPal for sikre og enkle betalinger."
            },
            {
              "q": "free_trial",
              "question": "Finnes det en gratis prøveperiode for Pro?",
              "answer": "Ja! Prøv Pro gratis i 7 dager, ingen kredittkort nødvendig. I tillegg får du 45% rabatt den første måneden når du abonnerer."
            },
            {
              "q": "file_retention",
              "question": "Hvor lenge lagrer dere filene mine?",
              "answer": "Gratisplan: 30 dager. Pro-planer: For alltid! Transkripsjonene dine er alltid tilgjengelige i kontoen din."
            },
            {
              "q": "data_security",
              "question": "Hva med datasikkerhet?",
              "answer": "Vi er SOC 2-sertifisert og bruker 256-bit kryptering. Vi bruker aldri innholdet ditt til å trene modellene våre. Dine data er dine."
            }
          ]
    },
    CTA: {
      "title": "Klar for Unlimited?",
      "subtitle": "Bli med 50 000+ profesjonelle som transkriberer uten grenser",
      "button": "Prøv NeverCap gratis →",
      "disclaimer": "Ingen kredittkort nødvendig • Start transkribering på sekunder"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Laget for",
      heavyUsers: "Tunge brukere",
      whoActuallyNeed: "Som virkelig trenger ubegrenset",
      heroSubtitle: "Fra podkastere med årsvis av backlog til forskere med hundrevis av intervjuer. Se hvordan profesjonelle bruker NeverCap for å bryte fri fra opplastingsgrenser og minutttak.",
      podcasters: {
        title: "Podcasters",
        pain: '"Slutt å velge hvilke episoder som fortjener transkripsjoner"',
        description: "Last opp hele podcast-arkivet ditt på en gang. Generer shownoter, forbedre SEO, og gjenbruk innhold uten å telle minutter.",
        benefits: {
          benefit1: "Last opp alle episoder, ikke bare 3",
          benefit2: "Generer SEO-vennlige shownoter",
          benefit3: "Opprett søkbare arkiver",
          benefit4: "Gjenbruk som blogginnhold"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episoder"
          },
          stat2: {
            number: "200t",
            label: "Spart"
          },
          stat3: {
            number: "3x",
            label: "SEO-trafikk"
          }
        }
      },
      journalists: {
        title: "Journalister & Forfattere",
        pain: '"Deadline-press møter opplastingsbegrensninger"',
        description: "Last opp alle intervjuer samlet før fristen. Søk gjennom transkripsjoner umiddelbart og gå aldri glipp av et avgjørende sitat.",
        benefits: {
          benefit1: "Samlast før frist",
          benefit2: "Søk alle intervjuer på en gang",
          benefit3: "Nøyaktige sitater med tidsstempler",
          benefit4: "Håndter aksenter og språk"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Intervjuer/mnd"
          },
          stat2: {
            number: "96%",
            label: "Nøyaktighet"
          },
          stat3: {
            number: "5min",
            label: "Per time"
          }
        }
      },
      contentCreators: {
        title: "Innholdsskapere",
        pain: '"Tilgjengelighet bør ikke være dyrt"',
        description: "Tekst hele YouTube-kanalen din. Generer undertekster på flere språk og forbedre video-SEO-en din umiddelbart.",
        benefits: {
          benefit1: "Tekst alle videoer på en gang",
          benefit2: "249 språkoversettelser",
          benefit3: "YouTube-klare SRT-filer",
          benefit4: "Øk video-SEO-rangering"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videoer"
          },
          stat2: {
            number: "100+",
            label: "Språk"
          },
          stat3: {
            number: "249",
            label: "Oversettelser"
          }
        }
      },
      researchers: {
        title: "Forskere & Akademikere",
        pain: '"Kvalitative data bør ikke stå i kø"',
        description: "Behandle hele forskningsstudier på en gang. Håndter fokusgrupper, intervjuer og paneldiskusjoner med perfekt talergjenkjenning.",
        benefits: {
          benefit1: "Behandle fokusgrupper i bulk",
          benefit2: "20-talergjenkjenning",
          benefit3: "Eksporter til analyseprogramvare",
          benefit4: "GDPR-kompatibel sikkerhet"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studie"
          },
          stat2: {
            number: "96%",
            label: "Gruppens nøyaktighet"
          },
          stat3: {
            number: "GDPR",
            label: "Compliant → Overensstemmende"
          }
        }
      },
      businessTeams: {
        title: "Business Teams → Forretningslag",
        pain: '"Meeting recordings should be effortless" → "Møteopptak bør være enkelt"',
        description: "Record meetings directly or upload audio files for instant transcription. Build searchable archives from unlimited conversations and never lose important discussions again. → Spill inn møter direkte eller last opp lydfiler for øyeblikkelig transkripsjon. Bygg søkbare arkiver fra ubegrensede samtaler og mist aldri viktige diskusjoner igjen.",
        benefits: {
          benefit1: "Direct audio recording & transcription → Direkte lydopptak & transkripsjon",
          benefit2: "Unlimited meeting recordings → Ubegrensede møteopptak",
          benefit3: "Searchable meeting archive → Søkbart møtearkiv",
          benefit4: "Upload audio files instantly → Last opp lydfiler umiddelbart"
        },
        stats: {
          stat1: {
            number: "Live → Direkte",
            label: "Recording → Opptak"
          },
          stat2: {
            number: "Instant → Øyeblikkelig",
            label: "Upload → Last opp"
          },
          stat3: {
            number: "20+ → 20+",
            label: "Speakers → Talere"
          }
        }
      },
      educators: {
        title: "Educators → Lærere",
        pain: '"YouTube videos need instant transcription" → "YouTube-videoer trenger øyeblikkelig transkripsjon"',
        description: "Simply paste YouTube links to get instant transcripts and auto-generated captions. Transform any educational video into accessible, searchable content. → Lim inn YouTube-lenker for å få øyeblikkelige transkripsjoner og automatisk genererte undertekster. Gjør alle undervisningsvideoer tilgjengelige og søkbare.",
        benefits: {
          benefit1: "Direct YouTube link transcription → Direkte transkripsjon av YouTube-lenker",
          benefit2: "Auto-generate video captions → Autogenerer video-undertekster",
          benefit3: "Transcribe entire courses → Transkriber hele kurs",
          benefit4: "Searchable lecture archives → Søkbare forelesningsarkiver"
        },
        stats: {
          stat1: {
            number: "1-Click → 1-Klikk",
            label: "YouTube Paste → YouTube-limpasting"
          },
          stat2: {
            number: "Auto → Auto",
            label: "Captions → Undertekster"
          },
          stat3: {
            number: "100+ → 100+",
            label: "Languages → Språk"
          }
        }
      },
      quotes: {
        title: "Real Users, → Ekte brukere,",
        titleHighlight: "Real Freedom → Ekte frihet",
        subtitle: "Hear from professionals who broke free from artificial limits → Hør fra profesjonelle som brøt fri fra kunstige begrensninger",
        testimonials: {
          mike: {
            textBefore: '"I had → "Jeg hadde',
            highlight: "3 years of episodes → 3 år med episoder",
            textAfter: 'sitting untranscribed. Otter wanted me to pick 3. THREE. NeverCap let me upload all 150 episodes in one weekend." → som lå utranskribert. Otter ville at jeg skulle velge 3. TRE. NeverCap lot meg laste opp alle 150 episoder i én helg."',
            name: "Mike Rodriguez → Mike Rodriguez",
            role: "Podcast Host → Podcast-vert"
          },
          jessica: {
            textBefore: `"As a freelance journalist, I can't afford Trint's → "Som frilansjournalist har jeg ikke råd til Trints`,
            highlight: "$100/month → $100/måned",
            textAfter: `, but I also can't work with Otter's 10 files per month limit. NeverCap saved my career." → , men jeg kan heller ikke jobbe med Otters grense på 10 filer per måned. NeverCap reddet karrieren min."`,
            name: "Jessica Park → Jessica Park",
            role: "Freelance Journalist → Frilansjournalist"
          },
          sarah: {
            textBefore: '"Our research team had → "Vårt forskerteam hadde',
            highlight: "200 hours → 200 timer",
            textAfter: 'of focus group recordings. We processed everything over a weekend instead of rationing monthly minutes." → med fokusgruppeopptak. Vi behandlet alt i løpet av en helg i stedet for å rasjonere månedlige minutter."',
            name: "Dr. Sarah Chen → Dr. Sarah Chen",
            role: "Lead Researcher → Hovedforsker"
          },
          carlos: {
            textBefore: '"I make educational content in Spanish. NeverCap transcribes perfectly and → "Jeg lager pedagogisk innhold på spansk. NeverCap transkriberer perfekt og',
            highlight: "translates to English → oversetter til engelsk",
            textAfter: 'for broader reach. No limits, just growth." → for bredere rekkevidde. Ingen grenser, bare vekst."',
            name: "Carlos Martinez → Carlos Martinez",
            role: "YouTube Educator"
          }
        }
      },
      industries: {
        title: "Stolt på tvers av",
        titleHighlight: "Bransjer",
        subtitle: "Profesjonelle overalt bytter til virkelig ubegrenset",
        list: {
          media: "Media & Publishing",
          education: "Utdanning",
          healthcare: "Helsevesen",
          technology: "Teknologi",
          finance: "Finans",
          legal: "Juridisk"
        }
      },
      cta: {
        title: "Din brukssakse trenger også ubegrenset",
        subtitle: "Bli med 50 000+ profesjonelle som sluttet å telle minutter og begynte å skape",
        button: "Start din ubegrensede reise →"
      }
    },
    Podcasters: {
      badge: "Laget for podkastere",
      heroTitle: "Transkriber",
      heroTitleHighlight: "Hele podkastarkivet ditt",
      heroSubtitle: "Last opp hele ditt backkatalog. Lag shownotater for hver episode. Ikke mer å velge hvilke episoder som skal transkriberes.",
      ctaPrimary: "Begynn å transkribere gratis",
      ctaSecondary: "Se hvordan det fungerer",
      trustBadge1: "10 000+ podkastere",
      trustBadge2: "Ubegrensede episoder",
      trustBadge3: "SEO-klare transkripsjoner",
      stats: {
        stat1: {
          number: "∞",
          label: "Episoder/Måned"
        },
        stat2: {
          number: "50",
          label: "Batchopplasting"
        },
        stat3: {
          number: "10t",
          label: "Maks episodelengde"
        },
        stat4: {
          number: "96%",
          label: "Nøyaktighet"
        }
      },
      problemTitle: "Dette",
      problemTitleHighlight: "Podkasttranskripsjonsproblemet",
      problemSubtitle: 'Andre tjenester tvinger deg til å velge hvilke episoder som er "verdt" å transkribere',
      problems: {
        problem1: {
          title: "Opplastingsgrenser ødelegger arkiver",
          description: "Otter gir deg 3 livstidsimports på gratis, 10 per måned på Pro. Hvordan transkriberer du 3 års episoder?"
        },
        problem2: {
          title: "Manglende SEO-muligheter",
          description: "Hver utranskribert episode er tapt SEO-trafikk. Men Descript begrenser deg til 30 timer/mnd i beste fall."
        },
        problem3: {
          title: "Kostnader eksploderer med vekst",
          description: "Når podkasten din vokser, eksploderer transkripsjonskostnadene. $2/time overføringsgebyrer gjør skaling umulig."
        }
      },
      solutionTitle: "Dette",
      solutionTitleHighlight: "NeverCap-løsningen",
      solutionDescription: "Virkelig ubegrenset transkripsjon. Last opp hele arkivet ditt. Transkriber hver nye episode. Generer shownotater i stor skala. Ingen tak, ingen grenser, bare vekst.",
      workflowTitle: "Din podkastarbeidsflyt,",
      workflowTitleHighlight: "Forenklet",
      workflowSubtitle: "Fra opptak til SEO-optimaliserte shownotater på minutter",
      workflow: {
        step1: {
          title: "Last opp episoder",
          description: "Slipp 50 episoder på en gang. MP3, MP4, WAV - vi håndterer alt."
        },
        step2: {
          title: "AI-transkriberer",
          description: "96% nøyaktighet med taleridentifikasjon. Perfekt for intervjuer."
        },
        step3: {
          title: "Smart formatering",
          description: "AI legger til avsnitt, setninger og tegnsetting automatisk."
        },
        step4: {
          title: "Publiser & Ranger",
          description: "Eksporter til nettstedet ditt. Se SEO-trafikken din vokse."
        }
      },
      featuresTitle: "Funksjoner Podcastere",
      featuresTitleHighlight: "Faktisk Trenger",
      featuresSubtitle: "Laget av podcastere, for podcastere",
      features: {
        feature1: {
          title: "Flerspråklig Talergjenkjenning",
          description: "Identifiserer og merker automatisk opptil 20 talere. Perfekt for paneldiskusjoner, intervjuer og programmer med flere verter."
        },
        feature2: {
          title: "Tidsstempelkapitler",
          description: "Generer klikkbare tidsstempler for YouTube-beskrivelser. La lytterne hoppe til favorittdelen umiddelbart."
        },
        feature3: {
          title: "Smart Formatering",
          description: "Legger automatisk til avsnitt, setninger og tegnsetting. Få rene, lesbare transkripsjoner. Spar timer på postproduksjon."
        },
        feature4: {
          title: "SEO-Optimering",
          description: "Transkripsjoner formatert for søkemotorer. Øk podkastens synlighet og nå nye lyttere."
        },
        feature5: {
          title: "100+ Språk",
          description: "Transkriber på alle språk. Oversett til 249+ språk. Nå et globalt publikum enkelt."
        },
        feature6: {
          title: "Batchbehandling",
          description: "Last opp 50 episoder før sengetid. Våkn opp til ferdige transkripsjoner. Behandle hele arkivet over natten."
        }
      },
      testimonialsTitle: "Podcastere Som Gjorde",
      testimonialsTitleHighlight: "Bytet",
      testimonialsSubtitle: "Virkelige historier fra virkelige podcastere",
      testimonials: {
        mike: {
          text: '"Jeg har drevet en podkast i 3 år og transkriberte alt manuelt som en idiot. Lastet opp 6 episoder på en gang, og den skilte meg og medverten perfekt. Kaféepisoden jeg trodde var ødelagt? Krystallklar transkripsjon. Jeg skal aldri skrive dette selv igjen."',
          name: "Mike Rodriguez",
          role: 'Vert for "The Daily Grind" Podcast'
        },
        sarah: {
          text: '"Otter begrenset meg til 10 filimports per måned. Jeg har 150 episoder på etterskudd. NeverCap lot meg laste opp alt i 3 omganger. Min organiske trafikk har økt 300% siden jeg la til transkripsjoner på gamle episoder. Dette betaler bokstavelig talt for seg selv."',
          name: "Sarah Chen",
          role: 'Skaper av "Tech Talks Today"'
        }
      },
      comparisonTitle: "Hvorfor Podcastere Velger",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Se hvordan vi måler oss mot konkurrentene",
      comparison: {
        headers: {
          feature: "Funksjon",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Månedlig Episodegrense",
            nevercap: "Ubegrenset",
            otter: "~13 episoder (1200 min)",
            descript: "~30 episoder (30 timer)"
          },
          uploadLimit: {
            feature: "Filopplastningsgrense",
            nevercap: "Ubegrenset",
            otter: "10 per måned",
            descript: "1 om gangen"
          },
          batchProcessing: {
            feature: "Batchbehandling",
            nevercap: "50 filer",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksimal Episodelengde",
            nevercap: "10 timer",
            otter: "90 minutter",
            descript: "Ubegrenset"
          },
          speakerDetection: {
            feature: "Talergjenkjenning",
            nevercap: "20 talere",
            otter: "16 talere",
            descript: "10 talere"
          },
          smartFormatting: {
            feature: "Smart formatering",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Pris",
            nevercap: "$17.99/mnd",
            otter: "$16.99/mnd",
            descript: "$30/mnd"
          }
        }
      },
      ctaTitle: "Start transkribering av hver episode",
      ctaSubtitle: "Bli med 10 000+ podkastere som aldri bekymrer seg om grenser",
      ctaButton: "Last opp dine første 50 episoder gratis →",
      ctaDisclaimer: "Ingen kredittkort nødvendig • Behandle ubegrensede episoder • Avbryt når som helst"
    },
    Journalists: {
      hero: {
        badge: "For journalister og forfattere",
        title: "Transkriber hvert intervju.",
        titleHighlight: "Gå aldri glipp av et sitat.",
        subtitle: "Slutt å velge hvilke intervjuer som fortjener transkribering. Last opp alle opptak samtidig, søk gjennom alt umiddelbart, og møt frister uten lastingsangst.",
        ctaPrimary: "Start ubegrensede opplastninger →",
        ctaSecondary: "Se hvordan det fungerer",
        stats: {
          uploads: {
            number: "∞",
            label: "Filopplastninger"
          },
          accuracy: {
            number: "96%",
            label: "Nøyaktighet"
          },
          speed: {
            number: "5 min",
            label: "Per time"
          }
        },
        dashboard: {
          title: "Intervjukø",
          status: "• All behandling",
          interviews: {
            cityCouncil: {
              title: "Bystyremøte",
              duration: "2t 15min • Laster opp...",
              action: "Behandler"
            },
            expertInterview: {
              title: "Ekspertintervju - Dr. Chen",
              duration: "45min • Transkriberer...",
              action: "96% fullført"
            },
            pressConference: {
              title: "Pressekonferanse",
              duration: "1t 30min • Klar",
              action: "Se →"
            },
            phoneInterview: {
              title: "Telefonintervju - Kilde",
              duration: "35min • Klar",
              action: "Se →"
            }
          }
        }
      },
      problem: {
        title: "Dette",
        titleHighlight: "Journalistens transkriberingsproblem",
        subtitle: 'Andre tjenester tvinger deg til å velge hvilke intervjuer som er "verdt" å transkribere',
        problems: {
          uploadLimits: {
            title: "Opplastningsgrenser dreper etterforskninger",
            description: "Otter gir deg 10 filimport i måneden på Pro. Hvordan transkriberer du 3 uker med etterforskningsintervjuer?"
          },
          missingQuotes: {
            title: "Mangler avgjørende sitater",
            description: "Hvert utranskribert intervju kan inneholde historiens nøkkelsitat. Men Trint begrenser deg til maks 50 timer/mnd."
          },
          costExplosion: {
            title: "Kostnader eksploderer med frister",
            description: "Når etterforskningen din utdypes, skyter transkripsjonskostnadene i været. $100/mnd i overforbruksgebyrer gjør breaking news umulig."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap-løsningen",
          description: "Virkelig ubegrenset transkripsjon. Last opp hele etterforskningen din. Transkriber hvert intervju. Søk i alle sitater umiddelbart. Ingen tak, ingen grenser, bare journalistikk."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Beste intervjutranskripsjonsprogram",
        titleSuffix: "for Journalister",
        subtitle: "Reelle fordeler som betyr noe når tidsfrister er stramme og nøyaktighet er alt",
        solutions: {
          unlimitedUploads: {
            label: "Ubegrenset Volum",
            title: "Ubegrenset Volum for Alle Intervjuene Dine",
            description: "I motsetning til programvare med minuttbegrensninger, kan du transkribere hvert intervju, fra en rask prat til en timelang diskusjon. Slutt å bekymre deg for å gå tom for kreditt når tidsfrister nærmer seg.",
            points: {
              simultaneousUpload: "Ingen månedlige minuttgrenser",
              noLimits: "Støtte for 10-timers intervjuer",
              processWhileWrite: "Behandle hele etterforskninger på en gang",
              longRecordings: "10-timers opptak støttes"
            },
            visual: {
              number: "∞",
              label: "Ingen Grenser. Noensinne."
            }
          },
          instantSearch: {
            label: "Lynrask Hastighet",
            title: "Hastighet Som Matcher Nyhetssyklusen Din",
            description: "Få intervjutranskripsjonen din tilbake på minutter, ikke dager. Lever historier raskere enn noensinne. Vår AI behandler timer med lyd mens du henter kaffe.",
            points: {
              searchAll: "5-minutters levering for 1-times intervjuer",
              wordTimestamps: "Prioriter behandling for hastende saker",
              jumpToMoments: "Sporing av fremdrift i sanntid"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Per Time med Lyd",
              results: {
                mayorInterview: '"...vår klimapolitikk vil forvandles..."',
                expertPanel: '"...policyerklæringen viser tydelig..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Sitatredu Nøyaktighet",
            title: "Nøyaktighet Du Kan Sitere",
            description: "Vår AI leverer svært nøyaktige transkripsjoner, som sikrer at sitatene du publiserer er presise og pålitelige. Profesjonell transkripsjon som redaktører stoler på.",
            points: {
              accuracyGuarantee: "96% nøyaktighetsgaranti",
              handlesAccents: "Håndterer teknisk terminologi",
              smartPunctuation: "Perfekt taleridentifikasjon"
            },
            visual: {
              accuracy: "96%",
              label: "Publiseringsklar Nøyaktighet",
              transcript: {
                speaker1: "«Etterforskningen avdekket betydelige avvik i de økonomiske rapportene.»",
                speaker2: "«Kan du utdype disse spesifikke avvikene?»"
              }
            }
          },
            ironclad: {
                  label: "Kildebeskyttelse",
                  title: "Jernfast Kildebeskyttelse",
                  description: "Vi tilbyr robuste sikkerhetsfunksjoner for å beskytte dine sensitive intervjudata og konfidensielle kilder. Banknivåkryptering holder etterforskningene dine trygge.",
                  points: {
                    accuracyGuarantee: "Ende-til-ende-kryptering",
                    handlesAccents: "Alternativer for automatisk filsletting",
                    smartPunctuation: "GDPR- og personvernkompatibel"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maksimal Sikkerhet"
                  }
                }
        }
      },
      features: {
        title: "Alt en",
        titleHighlight: "Journalist Trenger",
        subtitle: "Profesjonelle verktøy som respekterer arbeidsflyten din",
        featuresList: {
          languages: {
            title: "100+ Språk",
            description: "Intervjukilder globalt på 12 hovedspråk med 96% nøyaktighet."
          },
          exportFormats: {
            title: "Eksporteringsformater",
            description: "Word, PDF, SRT, TXT. Kompatibel med enhver arbeidsflyt."
          },
          sourceProtection: {
            title: "Kildebeskyttelse",
            description: "Banknivåkryptering. Kildene dine forblir konfidensielle."
          },
          timestamps: {
            title: "Tidsstempler",
            description: "Klikk på et sitat for å hoppe til det eksakte lydøyeblikket."
          },
          teamSharing: {
            title: "Teamdeling",
            description: "Samarbeid med redaktører. Del transkripsjoner sikkert."
          },
          mobileReady: {
            title: "Mobilklar",
            description: "Last opp fra telefonen. Se gjennom transkripsjoner hvor som helst."
          },
          smartFormatting: {
            title: "Smart formatering",
            description: "Automatiske avsnitt og tegnsetting for lesbare transkripsjoner."
          },
          batchProcessing: {
            title: "Batchbehandling",
            description: "Last opp 50 filer samtidig. Behandle over natten mens du sover."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Jeg hadde 3 år med intervjuer som ikke var transkribert på grunn av opplastningsbegrensninger. NeverCap lot meg behandle alt i én helg. En game changer.",
          name: "Jessica Park",
          role: "Frilansjournalist, Tidligere Otter-bruker"
        }
      },
      cta: {
        title: "Start transkribering",
        titleHighlight: "Uten grenser",
        subtitle: "Bli med tusenvis av journalister som sluttet å telle opplastninger og begynte å fokusere på historier",
        ctaPrimary: "Prøv ubegrenset gratis →",
        ctaSecondary: "Se priser"
      }
    },
    ContentCreators: {
      hero: {
        badge: "For innholdsprodusenter",
        title: "Transkriber YouTube-videoer,",
        titleHighlight: "Ubegrenset",
        titleSuffix: "1",
        subtitle: "Enten du trenger å transkribere en YouTube-video, transkribere en TikTok-video for gjenbruk, eller finne ut hvordan du transkriberer en Facebook-video til tekst, håndterer plattformen vår alt sømløst. Generer undertekster på 100+ språk uten månedlige grenser – bare ren kreativ frihet.",
        ctaPrimary: "Start ubegrenset underteksting →",
        ctaSecondary: "Se hvordan det fungerer",
        stats: {
          videos: {
            number: "∞",
            label: "Videoer/måned"
          },
          languages: {
            number: "100+",
            label: "Språk"
          },
          accuracy: {
            number: "96%",
            label: "Nøyaktighet"
          },
          platforms: {
            number: "10+",
            label: "Plattformer"
          }
        }
      },
      platforms: {
        title: "Hent & transkriber fra enhver plattform",
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
          titleMax: "Transkriber videoer fra",
          titleMaxHighlight: "Enhver plattform"
    },
      features: {
        title: "Alt du trenger for å",
        titleHighlight: "Skalere innhold",
        subtitle: "Profesjonelle verktøy uten profesjonelle grenser",
        oneClickImport: {
          label: "Ettklikksimport",
          title: "Transkriber YouTube, TikTok &",
          titleHighlight: "Instagram-videoer ved å lime inn en lenke",
          description: "Verktøyet vårt forenkler hvordan du transkriberer videoinnhold. For å transkribere en Instagram-video, bare lim inn lenken. For å transkribere en Vimeo-video til tekst, gjør det samme. Behandle hele kanalens etterslep på en helg.",
          points: {
            directYoutube: "Direkte YouTube-lenke transkripsjon",
            multiplePlatforms: "Hent fra 10+ plattformer",
            batchPlaylists: "Behandle hele spillelister i batch",
            autoSync: "Auto-synk med kanalene dine"
          },
          demo: {
            instruction: "Lim inn video-URL-en din:",
            url: "https://youtube.com/watch?v=...",
            status: "Henter & Transkriberer..."
          }
        },
        globalReach: {
          label: "Global Rekkevidde",
          title: "100+ Språk.",
          titleHighlight: "Ingen Grenser.",
          description: "Nå globale publikum med automatisk oversettelse til 100+ språk. Generer undertekster på flere språk samtidig. Ingen ekstra kostnader, ingen månedlige begrensninger på oversettelser.",
          points: {
            highAccuracy: "96% nøyaktighet i 12 hovedspråk",
            unlimitedTranslations: "Ubegrensede oversettelser inkludert",
            multicultural: "Perfekt for flerkulturelt innhold",
            autoDetect: "Auto-gjenkjenning av kildespråk"
          },
          visual: {
            number: "100+",
            title: "Støttede Språk",
            subtitle: "Oversett én gang, nå alle"
          }
        },
        flexibleExport: {
          label: "Fleksibel Eksport",
          title: "Alle Formater",
          titleHighlight: "Du Trenger",
          description: "Eksporter i formatet som passer din arbeidsflyt. Fra SRT-filer for YouTube til VTT for nettspillere, eller redigerbare dokumenter for manus. Alle eksporter ubegrenset, alt inkludert i hver plan.",
          points: {
            videoFormats: "SRT & VTT for videoplattformer",
            editingFormats: "DOCX & PDF for redigering",
            dataAnalysis: "CSV for dataanalyse",
            simpleScripts: "TXT for enkle manus"
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
        title: "Fra Opplasting til",
        titleHighlight: "Publisert",
        titleSuffix: "på Minutter",
        subtitle: "Den raskeste måten å tekste hele ditt innholdsbibliotek på",
        steps: {
          pasteLinks: {
            title: "Lim Inn Linker",
            description: "Slipp YouTube-, TikTok- eller hvilken som helst videolenke. Eller last opp filer direkte."
          },
          autoTranscribe: {
            title: "Auto-Transkriber",
            description: "AI behandler med 96% nøyaktighet. Håndterer aksenter & flere talere."
          },
          editTranslate: {
            title: "Rediger & Oversett",
            description: "Perfeksjoner undertekstene dine. Oversett til 100+ språk umiddelbart."
          },
          exportPublish: {
            title: "Eksporter & Publiser",
            description: "Last ned i hvilket som helst format. Last opp til din plattform. Ferdig!"
          }
        }
      },
      testimonials: {
        title: "Skapere Bytter",
        titleHighlight: "Daglig",
        subtitle: "Fra begrensede planer til ubegrenset frihet",
        carlos: {
          textBefore: "Jeg lager pedagogisk innhold på spansk. NeverCap transkriberer perfekt og",
          textAfter: "for bredere rekkevidde. Ingen grenser, bare vekst. Mine kanalvisninger økte 3x etter å ha lagt til flerspråklige undertekster.",
          highlight: "oversetter til engelsk",
          name: "Carlos Martinez",
          role: "YouTube-lærer • 250 000 abonnenter"
        },
        sarah: {
          textBefore: "Descript ville ha $30/måned for",
          textAfter: ". Jeg hadde over 500 videoer på etterskudd. NeverCap lot meg prosessere alt i én helg. SEO-økningen fra teksting betalte for seg selv i den første måneden.",
          highlight: "30 timer",
          name: "Sarah Lee",
          role: "Livsstilsvlogger • 180 000 abonnenter"
        },
        jake: {
          textBefore: "Dette",
          textAfter: "-funksjonen er en game-changer. Jeg laster ikke ned noe lenger. Bare lim inn, transkriber, ferdig. Å bearbeide podcastklippene mine for TikTok har aldri vært enklere.",
          highlight: "direkte YouTube-henting",
          name: "Jake Wilson",
          role: "Podcast-vert • Topp 1 %-skaper"
        },
        yuki: {
          textBefore: "Jeg lager innhold på 5 språk. Andre tjenester tar betalt",
          textAfter: ". NeverCap gir meg ubegrensede oversettelser. Min internasjonale publikum vokste med 400 % siden jeg begynte å bruke riktige, lokale tekster.",
          highlight: "per oversettelse",
          name: "Yuki Tanaka",
          role: "Gaming-skaper • 500 000 abonnenter"
        }
      },
      cta: {
        title: "Hele kanalen din. Tekstet. I dag.",
        subtitle: "Bli med over 50 000 skapere som sluttet å telle minutter og begynte å lage",
        button: "Start ubegrenset teksting →"
      },
        FAQSection: {
              "title": "Dine transkriberingsspørsmål,",
              "titleHighlight": "besvart",
              subtitle: "Alt du trenger å vite om å transkribere videoer fra forskjellige plattformer",
              "questions": [
                    {
                      "question": "Q: Hvordan transkriberer jeg en YouTube-video med NeverCap?",
                      "answer": "Det er enkelt. Finn YouTube-videoen du vil transkribere, kopier URL-en, og lim den inn i appen vår. AI-en vår henter automatisk videoen og gir en full teksttranskripsjon på minutter."
                    },
                    {
                      "question": "Q: Hva er den beste måten å transkribere en Facebook-video til tekst?",
                      "answer": "Den enkleste måten er å bruke en direkte lenke. Kopier URL-en til Facebook-videoen, og plattformen vår håndterer resten, konverterer talen til tekst med opptil 96 % nøyaktighet, og sparer deg for manuell transkribering."
                    },
                    {
                      "question": "Q: Kan jeg transkribere TikTok- og Instagram-videoer?",
                      "answer": "Absolutt. Vi støtter transkribering for både TikTok- og Instagram-videoer. Dette er perfekt for innholdsskapere som vil gjenbruke korte videoer til blogginnlegg, artikler eller tekstbaserte sosiale medieoppdateringer."
                    },
                    {
                      "question": "Q: Hvordan transkriberer jeg en Vimeo-video til tekst?",
                      "answer": "Å transkribere Vimeo-videoer er like enkelt som på andre plattformer. Bare kopier Vimeo-videoens URL og lim den inn i NeverCap. AI-en vår prosesserer videoen og genererer en nøyaktig teksttranskripsjon som du kan laste ned i flere formater."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Laget for akademisk eksellens",
      heroTitle1: "Transkriber hvert intervju.",
      heroTitle2: "Analyser alle dine data.",
      heroSubtitle: "Slutt å velge hvilke fokusgrupper du skal transkribere. Behandle alle dine kvalitative data med 96 % nøyaktighet og feilfri taleridentifikasjon – selv med 20 deltakere som snakker over hverandre.",
      heroCtaPrimary: "Prøv gratis – ingen kort",
      heroCtaSecondary: "Se hvordan det fungerer",
      statsInterviewHours: "Intervjutimer",
      statsAccuracy: "Nøyaktighet",
      statsSpeakersId: "Taler-ID",
      statsCompliant: "Kompatibel",
      problemTitle: "Dette",
      problemSubtitle: 'Andre tjenester tvinger deg til å velge hvilke data som er "verdt" å transkribere',
      problemCard1Title: "Opplastingsgrenser ødelegger studier",
      problemCard1Desc: "Otter gir deg 3 livstidsimports. Hvordan transkriberer du 200 timer med fokusgrupper?",
      problemCard2Title: "Mangler kritisk data",
      problemCard2Desc: "Hvert utranskribert intervju kan inneholde banebrytende innsikter. Men Rev tar minst $2 per minutt.",
      problemCard3Title: "Støttepenger forsvinner",
      problemCard3Desc: "Når datasettet ditt vokser, eksploderer transkriberingskostnadene. $500 per fokusgruppe gjør oppskalering umulig.",
      solutionTitle: "NeverCap-løsningen",
      solutionDesc: "Ekte ubegrenset transkribering. Last opp hele studien din. Transkriber hvert intervju. Analyser alle dataene dine. Ingen tak, ingen grenser, bare forskning.",
      feature1Label: "Ingen Grenser",
      feature1Title: "Behandler din",
      feature1Desc: 'Last opp alle 200 timers intervjuer i natt. Våkn opp til fullstendige, søkbare transkripsjoner. Ingen månedlige grenser, ingen filbegrensninger, ingen "rimelig bruk"-tull.',
      feature1Point1: "Last opp 50 filer samtidig",
      feature1Point2: "Behandle langtidsstudier fullstendig",
      feature1Point3: "Ingen lagringsbegrensninger på transkripsjoner",
      feature1Point4: "Eksporter til NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Ubegrensede Timer",
      feature1Visual2: "Samme pris enten 10 eller 10.000 timer",
      feature2Label: "Smart AI",
      feature2Title: "Presis kontroll",
      feature2Desc: "Vår AI sporer opptil 20 talere selv når de snakker over hverandre, avbryter hverandre eller svarer samtidig. Hver stemme fanges opp og merkes riktig.",
      feature2Point1: "20-taleridentifikasjon",
      feature2Point2: "Håndterer kryssnakk og avbrytelser",
      feature2Point3: "Talermerker du kan endre",
      feature2Point4: "Tidsstempel for hvert ord",
      conversationParticipant1: "Deltaker 1",
      conversationText1: "Den største hindringen vi står overfor er definitivt behandlingskostnadene...",
      conversationParticipant2: "Deltaker 2",
      conversationText2: "Absolutt, men jeg vil legge til at tilgangen er—",
      conversationParticipant3: "Deltaker 3",
      conversationText3: "—beklager å avbryte, men transport er også enormt.",
      conversationText4: "Ja! Det var akkurat det jeg skulle til å si.",
      conversationParticipant4: "Deltaker 4",
      conversationText5: "I landlige områder er det alle tre: kostnad, tilgang OG transport.",
      feature3Label: "Presisjon",
      feature3Title: "Pålitelig",
      feature3Desc: "Håndterer fagterminologi, tykke aksenter og fagspesifikk terminologi som en proff. Nøyaktig nok for publisering, fagfellevurdering og avhandlingskomiteen din.",
      feature3Point1: "Medisinsk og vitenskapelig terminologi",
      feature3Point2: "100+ språk og dialekter",
      feature3Point3: "Ordrett og renlest modus",
      feature3Point4: "Rediger og eksporter i alle formater",
      feature3Visual1: "Forskningsgrad Nøyaktighet",
      feature3Visual2: "Stolt av 50.000+ forskere",
      feature4Label: "Sikkerhet",
      feature4Title: "IRB-sertifisert",
      feature4Desc: "Dine sensitive forskningsdata er beskyttet med bedriftssikkerhet. GDPR-kompatibel, HIPAA-klare alternativer og fulle revisjonsspor for IRB-krav.",
      feature4Point1: "Ende-til-ende-kryptering",
      feature4Point2: "GDPR & CCPA-kompatibel",
      feature4Point3: "Auto-slettingspolicyer",
      feature4Point4: "Sikker teamarbeid",
      useCasesTitle: "Perfekt for",
      useCasesSubtitle: "Fra etnografi til kliniske studier",
      useCase1Title: "Fokusgrupper",
      useCase1Desc: "Håndter 8-20 deltakere med overlappende tale. Perfekt taleridentifikasjon selv under hete diskusjoner. Eksporter direkte til kvalitativ analyseprogramvare.",
      useCase2Title: "Dybdeintervjuer",
      useCase2Desc: "Behandle hundrevis av en-til-en-intervjuer samtidig. Oppretthold konsistens i hele datasettet. Søk gjennom alle transkripsjoner umiddelbart.",
      useCase3Title: "Klinisk forskning",
      useCase3Desc: "HIPAA-kompatible alternativer for pasientintervjuer. Nøyaktig transkripsjon av medisinsk terminologi. Sikker håndtering av sensitive helsedata.",
      useCase4Title: "Etnografiske studier",
      useCase4Desc: "Feltinnspillinger i naturlige omgivelser. Håndter bakgrunnsstøy og flere talere. Støtte for 100+ språk og dialekter.",
      useCase5Title: "Muntlige historieprosjekter",
      useCase5Desc: "Bevar hele arkiver uten grenser. Lag søkbare historiske opptegnelser. Perfekt for langsiktige og generasjonsstudier.",
      useCase6Title: "Avhandlingsforskning",
      useCase6Desc: "Studentvennlige priser med alle funksjoner. Behandle hele datasettet rimelig. Møt trange frister med batchbehandling.",
      testimonialTitle: "Stolt brukt av",
      testimonialText: "Vårt forskningsteam hadde 200 timer med fokusgruppeinnspillinger fra vår helseundersøkelse. Andre tjenester ville at vi skulle velge hvilke økter som skulle transkriberes på grunn av kostnaden. NeverCap lot oss behandle alt i løpet av en helg. Talergjenkjenningen for 20 personer fungerte faktisk – selv under de rotete diskusjonene der alle snakket samtidig. Dette verktøyet har endret hvordan vi håndterer kvalitative data.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Lederforsker, Public Health Institute",
      ctaTitle: "Slutt å velge hvilke data som skal analyseres",
      ctaSubtitle: "Bli med 50 000+ forskere som transkriberer alt",
      ctaButton: "Prøv NeverCap gratis",
        problemTitle2: "Forsknings-transkriberingsproblemet",
        title: "The",
        useCasesTitle2: "Enhver Forskningsmetode",
        testimonialTitle2: "Ledende forskere",
        feature1TitleHl: "Hele forskningsprosjektet",
        feature1TitlePost: "Alt på ett sted",
        feature2TitleHl: "Fokusgruppeintervjuer",
        feature2TitlePost: "Suksess hver gang",
        feature3TitleHl: "96% nøyaktighet",
        feature4TitleHl: "sikkerhet",
        testimonialText2Hl: "200 timer",
        testimonialText3: "av fokusgruppeopptak fra vårt helseundersøkelse. Andre tjenester ville at vi skulle velge hvilke økter som skulle transkriberes på grunn av kostnaden. NeverCap lot oss prosessere",
        testimonialText4Hl: "alt i løpet av en helg",
        testimonialText5: ". Gjenkjennelsen av 20 talere fungerte faktisk – selv under våre rotete diskusjoner der alle snakket samtidig. Dette verktøyet har",
        testimonialText6Hl: "fullstendig endret",
        testimonialText7: "hvordan vi håndterer kvalitative data."
    },
    BusinessTeams: {
      heroBadge: "For bedriftslag",
      heroTitle1: "Møteopptak",
      heroTitle2: "Gjort enkelt",
      heroSubtitle: "Ta opp møter direkte i nettleseren eller last opp lydfiler umiddelbart. Bygg søkbare arkiver fra ubegrensede samtaler. Mist aldri viktige diskusjoner igjen med virkelig ubegrenset transkripsjon.",
      heroCtaPrimary: "Start opptak nå →",
      heroCtaSecondary: "Se hvordan det fungerer",
      recordingStatus: "Opptar...",
      statsMeetingMinutes: "Møtereferat",
      statsLiveRecording: "Opptak",
      statsSpeakerID: "Talergjenkjenning",
      statsInstantUpload: "Last opp & Behandle",
      featuresTitle: "Transkripsjon for enhver bedrift",
      featuresSubtitle: "Fra liveopptak til umiddelbare opplastinger – vi har eliminert alle friksjonspunkter",
      feature1Title: "Ta opp direkte i nettleseren",
      feature1Desc: "Ingen nedlastinger, ingen plugins. Start opptak med ett klikk. Perfekt lydkvalitet, automatisk talergjenkjenning.",
      feature1Benefit1: "Opptak med ett klikk",
      feature1Benefit2: "Ingen programvareinstallasjon",
      feature1Benefit3: "Fungerer på alle enheter",
      feature1Benefit4: "Sanntidstranskripsjon",
      feature1Visual1: "Klikk & Ta opp",
      feature1Visual2: "Ingen oppsett nødvendig",
      feature2Title: "Last opp enhver lydfil umiddelbart",
      feature2Desc: "Har du opptak fra Zoom, Teams eller telefonen? Last dem opp umiddelbart. Støtte for alle store lyd- og videoformater. Behandle flere filer samtidig uten ventetid.",
      feature2Benefit1: "Støtter: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Mulighet for batchopplasting",
      feature2Benefit3: "Støtter 10-timers filer",
      feature2Benefit4: "Behandle mens du jobber",
      feature2Visual1: "Dra & Slipp filer",
      feature3Title: "Bygget for teamarbeid",
      feature3Desc: "Del transkripsjoner med teamet umiddelbart. Lytt til opptak sammen, eksporter transkripsjoner i flere formater, og sikre at alle holder seg på linje med søkbare møtearkiver.",
      feature3Benefit1: "Del transkripsjoner med hvem som helst",
      feature3Benefit2: "Lytt til originale opptak",
      feature3Benefit3: "Eksporter transkripsjoner i flere formater",
      feature3Benefit4: "Søkbare arkiver for hele teamet",
      feature3Visual1: "Teammedlemmer",
      feature3Visual2: "Ubegrenset samarbeid",
      feature4Title: "Finn enhver samtale umiddelbart",
      feature4Desc: "Søk gjennom alle møtene dine på en gang. Finn den avgjørende beslutningen fra forrige kvartal eller klientkravet fra måneder siden. AI-drevet søk forstår kontekst, ikke bare nøkkelord.",
      feature4Benefit1: "Søk i alle møter på en gang",
      feature4Benefit2: "AI forstår kontekst",
      feature4Benefit3: "Filtre etter taler eller dato",
      feature4SearchPlaceholder: "🔍 Søk: 'Q4-inntektsmål'",
      feature4SearchResults: "Funnet i 3 møter:",
      feature4Meeting1: "Salgsplanlegging - 15. okt",
      feature4Meeting1Text: '"...mål for Q4 satt til $2M..."',
      feature4Meeting2: "Styremøte - 20. okt",
      feature4Meeting2Text: '"...Q4-inntektsprognoser..."',
      workflowTitle: "Hvordan transkribere et",
      workflowSubtitle: "En sømløs arbeidsflyt som fanger hvert viktig øyeblikk",
      workflowStep1Title: "Spill inn eller last opp",
      workflowStep1Desc: "Begynn å spille inn direkte eller last ned møteopptak fra Zoom, Google Meet eller Microsoft Teams",
      workflowStep2Title: "Auto-transkribering",
      workflowStep2Desc: "Vår AI vil automatisk transkribere opptaket til tekst med 96 % nøyaktighet på minutter",
      workflowStep3Title: "Samarbeid",
      workflowStep3Desc: "Del, kommenter og uttrekk handlingsoppgaver",
      workflowStep4Title: "Søk og analyser",
      workflowStep4Desc: "Finn innsikt i alle møtene dine",
      testimonialsTitle: "Team elsker",
      testimonialsSubtitle: "Se hvordan bedrifter transformerer møtekulturen sin",
      testimonial1Text: '"Vi gikk fra å gå glipp av avgjørende detaljer til å ha et søkbart arkiv av hver samtale. Direkteopptaksfunksjonen betyr at vi aldri glemmer å fange viktige diskusjoner."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktsjef, TechCorp",
      testimonial2Text: '"Otter begrenset oss til 10 filopplastinger per måned. Nå laster vi opp alle klientoppkallene våre umiddelbart. En gamechanger for oppfølgingene til salgsteamet vårt."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Salgssjef, ConsultPro",
      testimonial3Text: '"Evnen til å søke gjennom måneders møter reddet oss under revisjonen. Fant hver beslutning og godkjenning på sekunder."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Slutt å miste viktige samtaler",
      ctaSubtitle: "Bli med tusenvis av team som fanger hvert møte med ubegrenset transkripsjon",
      ctaButton: "Begynn å spille inn gratis →",
        featuresTitle2: "Møte",
        workflowTitle2: "Zoom-opptak til tekst",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "For lærere og undervisere",
      heroTitle1: "Gjør læring",
      heroTitle2: "Tilgjengelig for alle",
      heroSubtitle: "Bare lim inn YouTube-lenker for å få øyeblikkelige transkripsjoner med automatisk genererte undertekster. Gjør forelesninger, veiledninger og pedagogiske videoer til søkbar, tilgjengelig innhold som alle studenter kan lære av.",
      heroCtaPrimary: "Prøv gratis - ingen kort",
      heroCtaSecondary: "Se demo",
      stats1Number: "1-klikk",
      stats1Label: "YouTube-transkripsjon",
      stats2Number: "100+",
      stats2Label: "Støttede språk",
      stats3Number: "∞",
      stats3Label: "Ubegrensede videoer",
      stats4Number: "96%",
      stats4Label: "Nøyaktighetsgrad",
      featuresTitle: "Alt lærere trenger for",
      featuresSubtitle: "Fra YouTube-forelesninger til opptakte klasser – gjør alt innholdet ditt tilgjengelig",
      feature1Title: "Instant YouTube & Plattformlenker",
      feature1Desc: "Bare lim inn en videolenke og få transkripsjoner umiddelbart. Fungerer med YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive og mer. Ingen nedlasting, ingen venting.",
      feature1Point1: "Direktelenke-transkripsjon – ingen nedlasting nødvendig",
      feature1Point2: "Støtte for alle store plattformer",
      feature1Point3: "Behandle hele spillelister samtidig",
      feature1Point4: "Fungerer med private videoer (med tillatelse)",
      feature2Title: "Auto-generer bildetekster og undertekster",
      feature2Desc: "Lag nøyaktige bildetekster for alle dine pedagogiske videoer umiddelbart. Gjør innhold tilgjengelig for studenter med hørselshemming, ikke-morsmålstalere eller de som foretrekker å lese med.",
      feature2Point1: "SRT, VTT og TXT eksportformater",
      feature2Point2: "Ordnivå tidsstempler for perfekt synkronisering",
      feature2Point3: "Rediger og tilpass bildetekster enkelt",
      feature2Point4: "Last direkte opp til YouTube",
      feature2Visual1: "Språkoversettelser",
      feature2Visual2: "Gjør innholdet ditt globalt tilgjengelig",
      feature3Title: "Organiser etter kurs og kategorier",
      feature3Desc: "Opprett mapper for å organisere transkripsjoner etter kurs, emne eller semester. Hold alt pedagogisk innhold ryddig kategorisert og enkelt søkbart. Bygg et omfattende bibliotek med tilgjengelige kursmaterialer.",
      feature3Point1: "Opprett ubegrensede mapper og undermapper",
      feature3Point2: "Merk videoer etter tema eller vanskelighetsgrad",
      feature3Point3: "Organiser flere transkripsjoner samtidig",
      feature3Point4: "Søk gjennom alt innholdet ditt umiddelbart",
      feature3VisualTitle: "Ditt kursbibliotek",
      feature3Folder1: "Matematikk 101",
      feature3Folder2: "Fysikkforelesninger",
      feature3Folder3: "Biologilaboratorievideoer",
      feature3Folder4: "Historiedokumentarer",
      feature3Folder5: "Språklæring",
      feature4Title: "AI-transkriber lydfil til studieveileder",
      feature4Desc: "Ikke bare del opptak. Transkriber automatisk forelesninger til tekst og andre lydfiler til detaljerte studieveiledninger, komplett med sammendrag og nøkkelkonsepter for effektiv studentrevisjon. Eksporter i TXT, DOCX eller PDF-format.",
      feature4Point1: "TXT for enkel tekstredigering",
      feature4Point2: "DOCX for formaterte dokumenter",
      feature4Point3: "PDF for enkel deling og utskrift",
      feature4Point4: "Eksporter flere filer samtidig",
      workflowTitle: "Slik fungerer det:",
      workflowSubtitle: "Fra videolenke til tilgjengelig transkript og studiemateriell på minutter",
      workflowStep1Title: "Last opp din forelesning",
      workflowStep1Desc: "Last opp hvilken som helst lyd- eller videofil (MP3, MP4, WAV) eller lim inn en YouTube-lenke",
      workflowStep2Title: "AI-transkripsjon",
      workflowStep2Desc: "Vår AI transkriberer lyden, skiller talere og identifiserer nøkkelemner",
      workflowStep3Title: "Generer bildetekster",
      workflowStep3Desc: "Auto-lag perfekt synkroniserte undertekster",
      workflowStep4Title: "Eksporter studieguide",
      workflowStep4Desc: "Last ned teksten, sammendraget eller eksporter den for å lage din endelige studieguide",
      useCasesTitle: "Perfekt for alle",
      useCasesSubtitle: "Se hvordan lærere bruker NeverCap for å forbedre læring",
      useCase1Title: "Innspilte forelesninger",
      useCase1Text: "Transkriber hele semestre med innspilte forelesninger. Studenter kan søke etter spesifikke emner, gjenngå nøkkelkonsepter og aldri gå glipp av viktig informasjon.",
      useCase2Title: "Nettkurs",
      useCase2Text: "Gjør nettkursene dine tilgjengelige for internasjonale studenter med oversettelser i 100+ språk. Øk påmeldingen og tilfredsheten.",
      useCase3Title: "Studiemateriell",
      useCase3Text: "Bruk AI til å transkribere lydfiler til studieveiledninger fra videoopplæringer og forelesninger. Perfekt for studenter som foretrekker å lese eller trenger å gjenngå innhold raskt med søkbar tekst.",
      useCase4Title: "Tilgjengelighetsoverensstemmelse",
      useCase4Text: "Oppfyll tilgjengelighetskrav ved å tilby undertekster og transkripsjoner for alt videoinnhold. Sikrer lik tilgang for alle studenter.",
      useCase5Title: "Omvendt undervisning",
      useCase5Text: "Del videoforelesninger med transkripsjoner før timen. Studenter kan gjenngå i sitt eget tempo og komme forberedt til diskusjoner.",
      useCase6Title: "Forskning & sitater",
      useCase6Text: "Hjelp studenter med å sitere videokilder nøyaktig med tidsstempler. Perfekt for forskningsprosjekter og akademiske artikler.",
      testimonialTitle: "Stolt brukt av",
      testimonialSubtitle: "Se hvorfor lærere over hele verden velger NeverCap",
      testimonialText: '"Jeg har brukt NeverCap til å transkribere hele YouTube-kanalen min med matteopplæringer. Det som tidligere tok uker med andre tjenester, tar nå timer. Muligheten til å lime inn lenker direkte og få øyeblikkelige transkripsjoner har forandret måten jeg lager tilgjengelig innhold på. Mine internasjonale studenter elsker spesielt undertekster på flere språk!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Matematikkprofessor, nettunderviser",
      ctaTitle: "Gjør alt ditt utdanningsinnhold tilgjengelig",
      ctaSubtitle: "Bli med tusenvis av lærere som bruker virkelig ubegrenset transkripsjon",
      ctaButton: "Prøv NeverCap gratis",
        featuresTitle2: "Videotranskripsjon",
        grid: "Lydfil til studieveileder",
        useCasesTitle2: "Utdanningsbehov",
        testimonialTitle2: "50 000+ lærere"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Last ned YouTube-videoer som MP4",
        "placeholder": "Søk eller lim inn YouTube-lenken din her",
        "clear_icon": "Tøm inndata",
        "Download": "Last ned",
        "loading_text": "Behandler lenken for nedlasting. Bli på siden.",
        "howToDownload": "Hvordan laste ned?",
        "tutorial": "Se opplæringen"
      },
      part2: {
        "title": "Slik gjør du en YouTube-video om til en nedlastbar MP4-fil i 3 enkle steg",
        "steps": [
                {
                  title: "Kopier URL-en",
                  content: "Åpne YouTube-videoen du vil ha, og kopier lenken fra nettleserens adresselinje."
                },
                {
                  title: "Lim inn lenken",
                  content: "Gå til nedlastningsverktøyet og lim inn URL-en i inndatafeltet."
                },
                {
                  title: "Last ned MP4-en",
                  content: "Når behandlingen er ferdig, trykker du på nedlastingsknappen for å lagre MP4-filen."
                }
              ]
      },
      part3: {
        content: [
                "Har du noen gang trengt å se YouTube-videoer offline?",
                "Enten du pendler med t-banen, flyr på et fly, studerer en viktig opplæring, fordypet deg i ferdighetsbyggende innhold eller arkiverer viktige videoer – pålitelig tilgang offline er et vanlig problem. Det er her nedlasteren vår skinner.",
                "Nedlasteren lar deg raskt og enkelt konvertere YouTube-videoer til MP4-format for nedlasting. Lagre dem på enheten din og se dem når som helst.",
                "Prosessen er rask, enkel og ukomplisert. Når den er lastet ned, kan du nyte favorittvideoene dine når og hvor du vil – uten internett."
              ]
      },
      part4: {
        content: ["Her er de 5 hovedfordelene ved å laste ned", "YouTube-videoer som MP4-filer"],
        list: [
                {
                  title: "Spar på datakostnader:",
                  content: "Vanligvis bruker det mye mobildata å se videoer på YouTube. Ved å laste ned for offline visning kan du unngå disse unødvendige kostnadene."
                },
                {
                  title: "Se hvor som helst, når som helst:",
                  content: "Nyt videoene dine sømløst, selv med ustabil internettforbindelse. Ingen bufferingsproblemer lenger."
                },
                {
                  title: "Enkel arkivering og bevaring:",
                  content: "Å lagre videoer som MP4-filer gjør det enkelt å bygge din personlige samling, spesielt for innhold du synes er verdifullt eller viktig."
                },
                {
                  title: "Enklere deling:",
                  content: "Det er mye mer praktisk å dele en MP4-fil enn å sende en lenke. Du kan sende videofilen direkte via apper som WhatsApp eller Instagram og unngå det ekstra steget med å åpne YouTube."
                },
                {
                  title: "Umiddelbar visning, delte øyeblikk:",
                  content: "Vil du entusiastisk vise en favorittvideo til venner eller familie i nærheten? Med MP4-en lastet ned kan dere alle se den sømløst sammen med en gang, uten å vente på lasting."
                }
              ]
      },
      part5: {
        title: "Hvorfor skiller nedlasteren vår seg ut",
        cards: [
                {
                  title: "Enkelhet med ett klikk",
                  content: "Enkel oppsett og intuitiv bruk."
                },
                {
                  title: "Lynrask, ubegrenset",
                  content: "Konverter og last ned i toppfart – ingen begrensninger."
                },
                {
                  title: "Konverter på sparket",
                  content: "Behandle filene dine umiddelbart, ingen ventetid."
                },
                {
                  title: "Ingen annonser, ingen forstyrrelser",
                  content: "Nyt et rent grensesnitt uten pop-ups, bannere eller avbrytelser – bare sømløs videokonvertering."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Originalkvalitet garantert",
                  content: "Nedlastningene dine beholder videoens fulle oppløsning for pikselperfekt avspilling hver gang."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fungerer overalt",
                  content: "Fullt kompatibel med alle nettlesere, på alle enheter."
                }
              ]
      },
      part6: {
        title: ["Maksimer YouTube-videonedlastningene dine", "Med nedlasteren"],
        content: [
                "Enkel YouTube til MP4-konvertering: Rask, enkel og gratis.",
                "Det er der vi utmerker oss. Vårt brukervennlige grensesnitt er designet for alle – ingen tekniske ferdigheter nødvendig. Uavhengig av erfaring kan du konvertere videoer umiddelbart. Ingen registrering nødvendig: Få akkurat det du trenger, med en gang.",
                "Vær trygg – de nedlastede MP4-filene beholder original videokvalitet og klarhet, akkurat som du så dem på YouTube.",
                "Fungerer overalt du er. Fullt kompatibel på alle større plattformer og enheter. Enten du bruker Windows, macOS, Linux, Android eller iOS – med smarttelefon, nettbrett eller datamaskin – kan du laste ned videoer sømløst."
              ]
      },
      part7: {
        title: "Viktige spørsmål om nedlasting av YouTube-videoer",
        list: [
                {
                  question: "Kan jeg laste ned en YouTube-video hvis den er opphavsrettsbeskyttet?",
                  answer: "Nedlasting av opphavsrettsbeskyttede YouTube-videoer uten eiers tillatelse er ulovlig."
                },
                {
                  question: "Er dette nedlastingsverktøyet trygt?",
                  answer: "Ja, det er trygt og pålitelig. Vi krever ingen personlig informasjon fra brukere og tar sterke tiltak mot virus. Vi minner om å alltid være forsiktig når du laster ned filer fra internett: unngå å klikke på mistenkelige lenker eller laste ned tvilsomme filer."
                },
                {
                  question: "Hvilke språk støtter YouTube til MP4-nedlasting?",
                  answer: "Vår tjeneste støtter nedlasting av YouTube-videoer på alle populære språk."
                },
                {
                  question: "Hvilke faktorer påvirker tiden det tar å laste ned en YouTube-video?",
                  answer: "Selv om vi sikrer raskest mulig nedlasting, påvirkes nedlastingstiden også av faktorer som videolengde og internettforbindelseshastighet."
                },
                {
                  question: "Hvor lagres en MP4-video når jeg laster den ned med smarttelefonen min?",
                  answer: 'Etter nedlasting av en MP4 på smarttelefonen din, finner du den vanligvis i mappen "Downloads" i filbehandlingsappen på enheten.'
                },
                {
                  question: "Reduserer nedlasting av en YouTube-video som MP4 videokvaliteten?",
                  answer: "Nei. Nedlasting av YouTube-videoer som MP4 med vårt verktøy beholder original videokvalitet. Konverteringsprosessen bevarer kilden, slik at du får samme visningsopplevelse som på YouTube."
                }
              ]
      },
        err1: "Feil i YouTube-lenkeformat.",
        err2: "Beklager! Vi støtter for øyeblikket kun YouTube-lenker. Hvis du trenger støtte for andre nettsteder, gir vi deg beskjed når vi legger det til i fremtiden.",
        videoDownload: {
              title: "Last ned YouTube-videoer som MP4. Gratis, raskt og uten reklamer.",
              description: "Takk for at du valgte vår tjeneste! Vi setter stor pris på din tillit og håper det forbedret din opplevelse. Hvis du kunne dele nettsiden vår med vennene dine, ville det vært til stor hjelp.",
              downloadButton: "Last ned",
              downloadError: "Nedlastingsfeil."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Ledende AI-teknologi i bransjen",
      "title": "Om",
      "highlighted_text": "NeverCap",
      "description": "Vårt mål er å tilby de mest nøyaktige lyd- og videotranskriberingstjenestene. Ved hjelp av ledende AI-teknologi oppnår vi en transkriberingsnøyaktighet på over 96 %. For noen større språk kan vi til og med nå 99 % nøyaktighet gjennom teknisk optimalisering."
    },
    Stats: {
      "title": "Vår",
      "highlighted_text": "Påvirkning",
      "subtitle": "Styrker global kommunikasjon med banebrytende AI-teknologi",
      "metrics": [
            {
              "value": "96 %+",
              "label": "Nøyaktighet",
              "description": "Ledende transkriberingsnøyaktighet med avansert AI"
            },
            {
              "value": "100+",
              "label": "Språk støttet",
              "description": "Talegjenkjenning for globalt innhold"
            },
            {
              "value": "249+",
              "label": "Oversettelsesspråk",
              "description": "Oversett transkribert tekst til nesten alle språk"
            }
          ]
    },
    Mission: {
      "title": "Hvorfor velge",
      "highlighted_text": "NeverCap",
      "subtitle": "Vi tror på å bryte ned språkbarrierer og gjøre innhold tilgjengelig for alle",
      "features": [
            {
              "icon": "🎯",
              "title": "Uovertruffen nøyaktighet",
              "description": "Våre AI-modeller forbedres kontinuerlig for å levere transkriberingsnøyaktighet over 96 %, med noen større språk som når opptil 99 % nøyaktighet gjennom avansert optimalisering."
            },
            {
              "icon": "🌍",
              "title": "Global språkstøtte",
              "description": "Støtte for over 100 språk i talegjenkjenning og oversettelsesmuligheter for mer enn 249 språk, som gjør innholdet ditt virkelig globalt."
            },
            {
              "icon": "⚡",
              "title": "Lynrask behandling",
              "description": "Behandle timer med lyd- og videoinnhold på minutter, ikke timer. Vår optimerte AI-prosess sikrer at du får transkripsjonene raskt uten å ofre kvalitet."
            },
            {
              "icon": "🔒",
              "title": "Bedriftssikkerhet",
              "description": "Din datasikkerhet er vår prioritet. Vi bruker bransjestandard kryptering og følger globale personvernregler for å holde innholdet ditt sikkert og konfidensielt."
            }
          ]
    },
    Company: {
      "title": "Selskaps-",
      "highlighted_text": "informasjon",
      "subtitle": "Kontakt oss for spørsmål eller støtte",
      "details": [
            {
              "label": "Selskapsnavn",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Hovedkvarter",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "USA"]
            },
            {
              "label": "Kontakt oss",
              "value": ["E-post", "Støtte tilgjengelig 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Klar for å oppleve forskjellen?",
      "subtitle": "Bli med tusenvis av profesjonelle som stoler på NeverCap for sine transkriberingsbehov",
      "button": "Prøv NeverCap gratis →",
      "disclaimer": "Ingen kredittkort nødvendig • Start transkribering på sekunder"
    }
  },
  Privacy: {
    title: "Personvern",
    titleGradient: "Retningslinjer",
    subtitle: "Lær hvordan vi samler inn, bruker og beskytter dine personopplysninger",
    "lastUpdated": "Sist oppdatert: {date}",
    "lastUpdatedDate": "21. juli 2025",
    "privacyPolicyTitle": "Personvernerklæring",
    "policyAgreement": "Vennligst les denne personvernerklæringen nøye og sørg for at du forstår den. Ved å bruke noen av våre tjenester, godtar du denne personvernerklæringen. Hvis du ikke godtar vår bruk av dine personopplysninger i henhold til denne retningslinjen, må du umiddelbart slutte å bruke våre tjenester.",
    "policyOverview": "I denne retningslinjen beskriver vi: hvilke data vi samler inn og hvorfor; hvordan dine data håndteres; og dine rettigheter med hensyn til dine data. Vi selger ikke dine data.",
    "scopeTitle": "1. Omfang av denne personvernerklæringen",
    "scopeDescription": "Denne personvernerklæringen gjelder kun for vår innsamling og behandling av informasjon om brukere av tjenestene. Denne personvernerklæringen gjelder ikke for noen tjenester, nettsteder eller programvare drevet av tredjeparter som er koblet til oss (enten vi leverer disse koblingene eller andre brukere deler dem), og gjelder heller ikke for innhold, data, applikasjoner eller materialer fra tredjeparter. Vi anbefaler deg å sjekke personvernretningslinjene til ethvert nettsted eller programvare fra tredjeparter før du oppgir informasjon til dem.",
    "collectionTitle": "2. Hva vi samler inn og hvorfor",
    "collectionPrinciple": "Våre retningslinjer er å kun samle inn det vi trenger. Her er hva det betyr i praksis:",
    "identityTitle": "2.1 Identitet og tilgang",
    "identityDescription": "Når du registrerer deg for et av våre produkter, ber vi om identifiserende informasjon som ditt navn og e-postadresse. Dette er for å gi essensiell produktfunksjonalitet og slik at vi kan sende deg produktoppdateringer og annen viktig informasjon.",
    "billingTitle": "2.2 Faktureringsinformasjon",
    "billingDescription": "Hvis du registrerer deg for et betalt produkt, vil du bli bedt om å oppgi betalingsinformasjon og faktureringsadresse. Betalingsinformasjon sendes direkte til vår betalingsbehandler og lagres ikke på våre servere.",
    "productInteractionsTitle": "2.3 Produktinteraksjoner",
    "productInteractionsDescription": "Vi lagrer på våre servere innholdet du laster opp, mottar eller opprettholder i dine produktkontoer. Med mindre du sletter dette innholdet, kan vi beholde det så lenge kontoen din er aktiv.",
    "websiteInteractionsTitle": "2.4 Nettstedinteraksjoner",
    "websiteInteractionsDescription": "Vi samler inn informasjon om din nettleseraktivitet for analyse- og statistikkformål, som konverteringsratetesting og eksperimentering med nye produktdesign. Dette inkluderer for eksempel din nettleser- og operativsystemversjon, IP-adresse, hvilke nettsider du besøkte og hvor lang tid de tok å laste, og hvilket nettsted som henviste deg til oss. Hvis du har en konto og er logget inn, er disse nettanalysedataene knyttet til din IP-adresse og brukerkonto til kontoen din ikke lenger er aktiv.",
    "cookiesTitle": "2.5 Informasjonskapsler",
    "cookiesDescription1": "Vi bruker også vedvarende førsteparts informasjonskapsler og noen tredjeparts informasjonskapsler for å lagre visse preferanser, gjøre det enklere for deg å bruke våre applikasjoner, utføre A/B-testing samt støtte noen analyser.",
    "cookiesDescription2": "En informasjonskapsel er en tekstbit lagret av nettleseren din. Den kan hjelpe med å huske påloggingsinformasjon og nettstedpreferanser. Den kan også samle inn informasjon som nettlesertype, operativsystem, besøkte nettsider, besøksvarighet, vist innhold og annen klikkstrømdata. Du kan justere informasjonskapseloppbevaringsinnstillinger og godta eller blokkere enkelte informasjonskapsler i nettleserinnstillingene dine, selv om våre apper ikke vil fungere og andre aspekter av tjenesten vår kanskje ikke fungerer skikkelig hvis du slår av informasjonskapsler.",
    "correspondenceTitle": "2.6 Frivillig korrespondanse",
    "correspondenceDescription": "Når du e-poster oss med et spørsmål eller ber om hjelp, beholder vi denne korrespondansen, inkludert e-postadressen din, slik at vi har en historikk over tidligere korrespondanse å referere til hvis du kontakter oss i fremtiden.",
    "accessTitle": "3. Når vi får tilgang til eller deler din informasjon",
    "accessDescription1": "For å levere produkter eller tjenester du har forespurt. Vi bruker noen tredjeparts underbehandlere for å hjelpe til med å kjøre våre applikasjoner og levere tjenestene til deg. Dette inkluderer skyleverandører og analyseleverandører.",
    "accessDescription2": "For å undersøke, forhindre eller iverksette tiltak angående misbruk. Å få tilgang til en kundes konto når man undersøker potensielt misbruk er en siste utvei. Vi ønsker å beskytte personvernet og sikkerheten til både våre kunder og de som rapporterer problemer til oss, og vi gjør vårt beste for å balansere disse ansvaret gjennom hele prosessen. Hvis vi oppdager at du bruker våre produkter til et begrenset formål, vil vi iverksette nødvendige tiltak, inkludert å varsle aktuelle myndigheter der det er berettiget.",
    "accessDescription3": "Når det kreves etter gjeldende lov.",
    "dataRequests": "Forespørsler om brukerdata. Vår politikk er å ikke svare på statlige forespørsler om brukerdata med mindre vi er pålagt av rettslig prosess eller i begrensede omstendigheter ved en nødforespørsel. Men hvis amerikanske rettshåndhevelsesmyndigheter har nødvendig arrestordre, straffebud eller domstolsordre som krever at vi deler data, må vi etterkomme dette. Likeledes vil vi bare svare på forespørsler fra myndigheter utenfor USA hvis vi er pålagt av den amerikanske regjeringen gjennom prosedyrer beskrevet i en gjensidig rettshjelpsavtale. Det er vår politikk å varsle berørte brukere før vi deler data, med mindre vi er juridisk forhindret fra å gjøre det, og bortsett fra i noen nødstilfeller.",
    "preservationRequests": "Bevaringforespørsler. På samme måte er vår politikk å etterkomme forespørsler om bevaring av data bare hvis vi er pålagt av den amerikanske føderale lagret kommunikasjonsloven, 18 U.S.C. seksjon 2703(f), eller av en riktig utstedt amerikansk stevning i sivile saker. Vi deler ikke bevarte data med mindre det kreves ved lov eller pålagt av en domstolsordre som vi velger å ikke anke. Videre, med mindre vi mottar en riktig arrestordre, domstolsordre eller stevning før den nødvendige bevaringstiden utløper, vil vi ødelegge alle bevarte kopier av kundedata ved slutten av bevaringstiden.",
    "taxAudits": "Hvis vi blir revidert av en skattemyndighet, kan vi bli pålagt å dele faktureringsrelatert informasjon. Hvis det skjer, deler vi bare det minste nødvendige, for eksempel faktureringsadresser og skattefritaksinformasjon.",
    "securityTitle": "4. Hvordan vi sikrer dine data",
    "securityDescription": "Alle data er kryptert via SSL/TLS når de overføres fra våre servere til din nettleser.",
    "deletionTitle": "5. Hva skjer når du sletter innholdet ditt",
    "deletionDescription": "Hvis du sletter noe innhold, blir det umiddelbart utilgjengelig.",
    "locationTitle": "6. Plassering av nettsted og data",
    "locationDescription": "Våre produkter og andre nettsteder drives i USA. Hvis du befinner deg i EU, Storbritannia eller andre steder utenfor USA, vær oppmerksom på at all informasjon du gir oss vil bli overført til og lagret i USA. Ved å bruke våre nettsteder eller tjenester og/eller gi oss dine personopplysninger, samtykker du til denne overføringen.",
    "childrenTitle": "7. Barns personvern",
    "updatesTitle": "8. Oppdateringer av denne personvernerklæringen",
    "updatesDescription": "Vi kan oppdatere denne retningslinjen etter behov for å overholde relevante forskrifter og reflektere nye praksiser. Når vi gjør en betydelig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden.",
    "contactTitle": "9. Kontakt oss",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "på",
      policyDescription: 'Denne politikken beskriver hvordan NeverCap (heretter omtalt som \"NeverCap\", \"vår\", \"vi\", \"oss\") samler inn, bruker og videreformidler din personlige informasjon når du bruker våre tjenester, nettsider ({url}) og programvare (sammen omtalt som \"Tjenestene\").',
      childrenDescription: "Tjenestene er ikke rettet mot barn, og vi samler ikke bevisst inn personlig informasjon fra barn under 13 år. Hvis du er under 13 år, vennligst ikke send inn noen personlig informasjon gjennom Tjenestene. Hvis du tror et barn har gitt oss personlig informasjon i strid med denne politikken, vennligst kontakt oss {på} {email} som angitt nedenfor.",
      contactDescription: "Hvis du har spørsmål, kommentarer eller klager til vår personvernpolitikk, vennligst kontakt oss {på} {email} så vil vi forsøke å håndtere klagen din så snart som mulig."
},
  TermsOfUse: {
    title: "Vilkår for",
    titleGradient: "Tjeneste",
    subtitle: "Vennligst les disse vilkårene nøye før du bruker våre tjenester",
    "lastUpdated": "Sist oppdatert: {date}",
    "lastUpdatedDate": "21. juli 2025",
    "termsOfServiceTitle": "Tjenestevilkår",
    "thankYou": "Takk for at du bruker våre produkter!",
    "companyDefinition": 'Når vi sier \"Selskap\", \"vi\", \"vår\" eller \"oss\" i dette dokumentet, refererer vi til NeverCap.',
    "servicesDefinition": 'Når vi sier \"Tjenester\", mener vi ethvert produkt opprettet og vedlikeholdt av NeverCap, enten det leveres i en nettleser, skrivebordsapplikasjon, mobilapplikasjon eller annet format.',
    "termsUpdate": "Vi kan oppdatere disse tjenestevilkårene i fremtiden. Vanligvis har disse endringene vært for å avklare noen av disse vilkårene ved å lenke til en utvidet relatert policy. Når vi gjør en betydelig endring i våre policyer, vil vi oppdatere datoen øverst på denne siden og iverksette andre passende tiltak for å varsle kontohavere.",
    "acceptanceTitle": "1. Godkjenning av avtale",
    "acceptanceDescription1": "Ved å bruke våre tjenester, indikerer du din aksept av denne avtalen, som dermed blir en bindende kontrakt mellom deg og NeverCap. Du bekrefter at du er juridisk i stand til å godta disse vilkårene, og bekrefter at du er myndig til å inngå en bindende avtale. NeverCaps aksept er uttrykkelig betinget av din samtykke til alle vilkårene og betingelsene i denne avtalen.",
    "eligibilityRequirement": "Tjenestene er ikke beregnet for og bør ikke brukes av noen under 18 år. Ved å bruke tjenestene bekrefter og garanterer du at du oppfyller det ovennevnte kvalifikasjonskravet.",
    "userResponsibility": 'Begrepene \"du\", \"din\", \"deg selv\" inkluderer også dine ansatte, agenter, forretningsrepresentanter og alle andre personer du gir tilgang til tjenestene gjennom din konto (som definert nedenfor). Du er ansvarlig for å sikre at alle personer som får tilgang til tjenestene gjennom din konto er klar over disse vilkårene og overholder dem.',
    "termsRevision": "NeverCap forbeholder seg retten til å revidere og oppdatere disse vilkårene fra tid til annen etter eget skjønn. Alle endringer trer i kraft umiddelbart når de publiseres. Din fortsatte bruk av tjenestene etter publisering av reviderte vilkår betyr at du aksepterer og godtar endringene. Du forventes å sjekke denne siden jevnlig slik at du er klar over eventuelle endringer, da de er bindende for deg.",
    "servicesTitle": "2. NeverCaps tjenester",
    "servicesDescription1": "Våre tjenester lar brukere transformere stemmesamtaler til transkribert tekst som kan søkes i, oversettes og deles med andre.",
    "servicesOptions": 'Du kan velge om du vil bruke den gratis versjonen av tjenestene (\"Gratis tjenester\") eller den abonnementsbaserte betalte versjonen av tjenestene som du kan være pålagt å betale for (\"Betalte tjenester\").',
    "servicesAccess": "Vi vil gjøre tjenestene tilgjengelige for deg. Du er ansvarlig for å gjøre alle nødvendige arrangementer for at du skal ha tilgang til tjenestene.",
    "accountTermsTitle": "3. Kontovilkår",
    "accountSecurity": "Du er ansvarlig for å opprettholde sikkerheten til din konto. Selskapet kan ikke og vil ikke være ansvarlig for noe tap eller skade som følge av din manglende overholdelse av denne sikkerhetsforpliktelsen.",
    "lawfulUse": "Du kan ikke bruke tjenestene til noe ulovlig, uetisk eller umoralsk formål.",
    "contentResponsibility": "Du er ansvarlig for alt innhold som postes og all aktivitet som skjer under din konto. Dette inkluderer innhold postet av andre som enten: (a) har tilgang til dine påloggingsdetaljer; eller (b) har egne pålogginger under din konto.",
    "humanRequirement": 'Du må være et menneske. Kontoer registrert av \"bots\" eller andre automatiserte metoder er ikke tillatt.',
    "paymentTitle": "4. Betaling, refusjon og planendringer",
    "freeTrial": "For betalte tjenester som tilbyr en gratis prøveperiode, forklarer vi lengden på prøveperioden når du registrerer deg. Etter prøveperioden må du betale på forhånd for å fortsette å bruke tjenesten. Hvis du ikke betaler, vil disse tjenestene opphøre.",
    "upgradePolicy": "Hvis du oppgraderer fra en gratis plan til en betalt plan, vil vi belaste kortet ditt umiddelbart, og faktureringssyklusen starter på oppgraderingsdagen.",
    "taxes": "Alle gebyrer er eksklusive alle skatter, avgifter eller toll pålagt av skattemyndigheter. Der det er påkrevet, vil vi innkreve disse skattene på vegne av skattemyndighetene og overføre dem til skattemyndighetene. Ellers er du ansvarlig for betaling av alle skatter, avgifter eller toll.",
    "refunds": "Alle kjøp er ikke-refunderbare. Du kan kansellere alle betalte tjenester når som helst ved å logge inn på kontoen din. For betalte abonnementer vil kanselleringen din tre i kraft ved slutten av den gjeldende betalte perioden, med mindre annet er oppgitt.",
    "cancellationTitle": "5. Kansellering og terminering",
    "cancellationPolicy": "Hvis du kansellerer tjenesten før slutten av enhver betalt periode, vil kanselleringen din tre i kraft umiddelbart, og du vil ikke bli belastet igjen. Vi tilbyr ikke automatisk forholdsmessig refusjon for ubrukt tid i den siste faktureringssyklusen.",
    "terminationRights": "Vi har rett til å suspendere eller terminere din konto og nekte enhver nåværende eller fremtidig bruk av våre tjenester av hvilken som helst grunn når som helst. Suspensjon betyr at du ikke vil kunne få tilgang til kontoen eller noe innhold i kontoen. Terminering vil i tillegg resultere i sletting av din konto eller din tilgang til kontoen, og tap og fraskrivelse av alt innhold i din konto. Vi forbeholder oss også retten til å nekte bruk av tjenestene til hvem som helst av hvilken som helst grunn når som helst. Vi har denne klausulen fordi det statistisk sett, av hundrevis av tusenvis av kontoer på våre tjenester, er minst én som gjør noe skadelig.",
    "abusePolicy": "Verbal, fysisk, skriftlig eller annen mishandling (inkludert trusler om mishandling eller gjengjeldelse) av selskapets ansatte eller tjenestemann kan føre til umiddelbar kontoterminering.",
    "submissionsTitle": "6. Innleveringer",
    "submissionsDescription": 'Du erkjenner og godtar at alle spørsmål, kommentarer, forslag, ideer, tilbakemeldinger eller annen informasjon om nettstedet (\"Innleveringer\") som du gir oss, er ikke-konfidensielle og skal bli vårt eneste eiendom. Vi skal ha eksklusive rettigheter, inkludert alle immaterielle rettigheter, og skal være berettiget til ubegrenset bruk og spredning av disse innleveringene for ethvert lovlig formål, kommersielt eller annet, uten anerkjennelse eller kompensasjon til deg. Du fraskriver deg herved alle moralske rettigheter til slike innleveringer, og du garanterer herved at slike innleveringer er originale med deg eller at du har rett til å sende inn slike innleveringer. Du godtar at det ikke skal være noen regress mot oss for påstått eller faktisk krenkelse eller tilegnelse av noen eierskapsrett i dine innleveringer.',
    "uptimeTitle": "7. Oppetid og sikkerhet",
    "serviceAvailability": 'Din bruk av tjenestene skjer på egen risiko. Vi leverer disse tjenestene på en \"som er\" og \"som tilgjengelig\" basis. Vi tilbyr ikke serviceavtaler for de fleste av våre tjenester, men tar oppetiden til våre applikasjoner på alvor.',
    "throttlingPolicy": "Vi forbeholder oss retten til midlertidig å begrense eller redusere kontotilgang i sjeldne tilfeller der en brukers aktivitet er verifisert å påvirke stabiliteten og ytelsen til tjenesten negativt for andre brukere. I alle tilfeller bortsett fra de mest kritiske, vil vi kontakte deg for å finne en løsning før vi iverksetter tiltak.",
    "dataSecurity": "Vi tar mange tiltak for å beskytte og sikre dine data gjennom sikkerhetskopier, redundans og kryptering. Vi håndhever kryptering for dataoverføring over det offentlige internett.",
    "thirdPartyVendors": "Vi bruker tredjeparts leverandører og hostingpartnere for å tilby den nødvendige maskinvaren, programvaren, nettverket, lagringen og relatert teknologi som kreves for å drive tjenestene.",
    "siteManagementTitle": "8. Nettstedshåndtering",
    "siteManagementDescription": "Vi forbeholder oss retten, men ikke plikten, til å: (1) overvåke nettstedet for brudd på disse tjenestevilkårene; (2) iverksette passende juridiske tiltak mot enhver som, etter vårt skjønn, bryter loven eller disse tjenestevilkårene, inkludert uten begrensning, å rapportere slik bruker til rettshåndhevende myndigheter; (3) etter vårt skjønn og uten begrensning, nekte, begrense tilgangen til, begrense tilgjengeligheten til, eller deaktivere (i den grad det er teknologisk mulig) noen av dine bidrag eller deler derav; (4) etter vårt skjønn og uten begrensning, varsel eller ansvar, fjerne fra nettstedet eller på annen måte deaktivere alle filer og innhold som er for store i størrelse eller på noen måte belastende for våre systemer; og (5) ellers håndtere nettstedet på en måte som er designet for å beskytte våre rettigheter og eiendom og for å legge til rette for nettstedets riktige funksjon.",
    "copyrightTitle": "9. Opphavsrett og innholdseierskap",
    "copyrightCompliance": "Alt innhold som postes på tjenestene må overholde amerikansk opphavsrettslovgivning.",
    "ipRights": "Vi gjør ikke krav på noen immaterielle rettigheter over materialet du leverer til tjenestene. Alt opplastet materiale forblir ditt.",
    "contentModeration": "Vi gjennomgår ikke innhold på forhånd, men forbeholder oss retten (men ikke plikten) etter eget skjønn til å nekte eller fjerne ethvert innhold som er tilgjengelig via tjenesten.",
    "prohibitedExploitation": "Du godtar ikke å reprodusere, duplisere, kopiere, selge, videreselge eller utnytte noen del av tjenestene, bruken av tjenestene eller tilgangen til tjenestene uten uttrykkelig skriftlig tillatelse fra selskapet.",
    "impersonationProhibition": "Du må ikke endre et annet nettsted for å feilaktig antyde at det er tilknyttet tjenestene eller selskapet.",
    "dmcaPolicy": "Vi respekterer andres immaterielle rettigheter. Hvis du mener at noe materiale som er tilgjengelig på eller gjennom nettstedet krenker noen opphavsrett du eier eller kontrollerer, vennligst kontakt oss umiddelbart. En kopi av din melding vil bli sendt til personen som postet eller lagret det aktuelle materialet. Vær oppmerksom på at i henhold til gjeldende lov kan du bli holdt ansvarlig for skader hvis du gir vesentlige feilaktige opplysninger i en melding. Derfor, hvis du ikke er sikker på om materiale som finnes på eller lenkes til av nettstedet krenker din opphavsrett, bør du vurdere å kontakte en advokat først.",
    "prohibitedActivitiesTitle": "10. Forbudte aktiviteter",
    "generalProhibition": "Du kan ikke få tilgang til eller bruke nettstedet til noe annet formål enn det vi gjør det tilgjengelig for. Nettstedet kan ikke brukes i forbindelse med kommersielle aktiviteter, unntatt de som er spesielt godkjent eller godtatt av oss.",
    "userObligations": "Som bruker av nettstedet samtykker du i å ikke:",
    "dataScraping": "Systematisk hente data eller annet innhold fra nettstedet for å lage eller sammenstille, direkte eller indirekte, en samling, kompilasjon, database eller katalog uten skriftlig tillatelse fra oss.",
    "fraud": "Lure, svindle eller villede oss og andre brukere, spesielt i forsøk på å få tak i sensitiv kontoinformasjon som brukerpassord.",
    "securityInterference": "Omgå, deaktivere eller på annen måte forstyrre sikkerhetsrelaterte funksjoner på nettstedet, inkludert funksjoner som forhindrer eller begrenser bruken eller kopiering av innhold eller håndhever begrensninger på bruken av nettstedet og/eller dets innhold.",
    "defamation": "Vanære, skade eller på annen måte skade oss og/eller nettstedet, etter vår mening.",
    "harassment": "Bruke informasjon fra nettstedet for å trakassere, misbruke eller skade en annen person.",
    "supportAbuse": "Misbruke vår kundestøtte eller sende inn falske rapporter om misbruk eller upassende oppførsel.",
    "legalCompliance": "Bruke nettstedet på en måte som strider mot gjeldende lover eller forskrifter.",
    "framingProhibition": "Uautorisert innramming av eller lenker til nettstedet.",
    "malware": "Laste opp eller overføre (eller forsøke å laste opp eller overføre) virus, trojanske hester eller annet materiale, inkludert overdreven bruk av store bokstaver og spam (kontinuerlig publisering av repetitiv tekst), som forstyrrer enhvers uavbrutte bruk og glede av nettstedet eller endrer, svekker, forstyrrer eller påvirker bruken, funksjonene, driften eller vedlikeholdet av nettstedet.",
    "automation": "Delta i enhver automatisk bruk av systemet, for eksempel ved å bruke skript for å sende kommentarer eller meldinger, eller bruke datagruveringsverktøy, roboter eller lignende verktøy for datainnsamling og -utvinning.",
    "copyrightRemoval": "Slette opphavsrettsmerker eller andre eierskapsmerker fra innhold.",
    "impersonation": "Forsøke å utgjøre seg for å være en annen bruker eller person, eller bruke en annen brukers brukernavn.",
    "spyware": 'Laste opp eller overføre (eller forsøke å laste opp eller overføre) materiale som fungerer som en passiv eller aktiv informasjonsinnsamlings- eller overføringsmekanisme, inkludert, men ikke begrenset til, klare bildeformater (\"gifs\"), 1×1-piksler, web-bugs, informasjonskapsler eller lignende enheter (noen ganger kalt \"spionvare\" eller \"passive innsamlingsmekanismer\" eller \"pcms\").',
    "disruption": "Forstyrre, skape unødig belastning på nettstedet eller nettverkene eller tjenestene knyttet til nettstedet.",
    "employeeHarassment": "Trakassere, irritere, true eller skremme våre ansatte eller representanter som arbeider med å levere nettstedet til deg.",
    "accessCircumvention": "Forsøke å omgå tiltak på nettstedet som er designet for å forhindre eller begrense tilgang til nettstedet eller deler av det.",
    "codeCopying": "Kopiere eller tilpasse nettstedets programvare, inkludert, men ikke begrenset til, Flash, PHP, HTML, JavaScript eller annen kode.",
    "reverseEngineering": "Unntatt som tillatt av gjeldende lov, dechiffrere, dekompilere, demontere eller reverse-engineere noen av programvarene som utgjør eller på annen måte er en del av nettstedet.",
    "bots": "Unntatt som kan være resultatet av standard søkemotor- eller nettleserbruk, bruke, lansere, utvikle eller distribuere ethvert automatisert system, inkludert, men ikke begrenset til, edderkopper, roboter, juksverktøy, skrapere eller offline-lesere som får tilgang til nettstedet, eller bruke eller lansere uautorisert skript eller annen programvare.",
    "buyingAgents": "Bruke en kjøpsagent for å foreta kjøp på nettstedet.",
    "unauthorizedUse": "Gjøre uautorisert bruk av nettstedet, inkludert å samle brukernavn og/eller e-postadresser til brukere ved elektroniske eller andre midler for å sende uønsket e-post, eller opprette brukerkontoer ved automatisert middel eller under falske forutsetninger.",
    "competition": "Bruke nettstedet som en del av enhver innsats for å konkurrere med oss, eller på annen måte bruke nettstedet og/eller innholdet til inntektsgenererende aktiviteter eller kommersielle formål.",
    "advertising": "Bruke nettstedet til å annonsere eller tilby varer og tjenester til salgs.",
    "profileTransfer": "Selge eller på annen måte overføre din profil.",
    "featuresTitle": "11. Funksjoner og feil",
    "featuresDescription": "Vi designer våre tjenester med omhu, basert på vår egen erfaring og erfaringer fra kunder som deler sin tid og tilbakemeldinger. Men det finnes ingen tjeneste som tilfredsstiller alle. Vi gir ingen garantier for at våre tjenester vil møte dine spesifikke krav eller forventninger.",
    "bugsDescription": "Vi tester også alle funksjonene våre før de lanseres. Som med all programvare har våre tjenester uunngåelig noen feil. Vi sporer feil som rapporteres til oss og jobber med dem, spesielt de som gjelder sikkerhet eller personvern. Ikke alle rapporterte feil vil bli fikset, og vi garanterer ikke helt feilfrie tjenester.",
    "correctionsTitle": "12. Rettelser",
    "informationAccuracy": "Det kan være informasjon på nettstedet som inneholder skrivefeil, unøyaktigheter eller utelatelser, inkludert beskrivelser, priser, tilgjengelighet og annen informasjon. Vi forbeholder oss retten til å rette eventuelle feil, unøyaktigheter eller utelatelser og til å endre eller oppdatere informasjonen på nettstedet når som helst uten forhåndsvarsel.",
    "siteAvailability": "Vi kan ikke garantere at nettstedet alltid vil være tilgjengelig. Vi kan oppleve maskinvare-, programvare- eller andre problemer eller trenge å utføre vedlikehold relatert til nettstedet, noe som resulterer i avbrudd, forsinkelser eller feil. Vi forbeholder oss retten til å endre, revidere, oppdatere, suspendere, avslutte eller på annen måte modifisere nettstedet når som helst uten varsel. Du godtar at vi ikke har noe ansvar for tap, skade eller ulempe forårsaket av manglende tilgang til eller bruk av nettstedet under nedetid eller avslutning. Intet i disse vilkårene skal tolkes som at vi er forpliktet til å vedlikeholde eller støtte nettstedet eller levere rettelser, oppdateringer eller utgivelser.",
    "userDataTitle": "13. Brukerdata",
    "userDataDescription": "Vi vil oppbevare visse data du overfører til nettstedet for å administrere nettstedets ytelse, samt data relatert til din bruk av nettstedet. Selv om vi utfører rutinemessige sikkerhetskopier av data, er du alene ansvarlig for all data du overfører eller som er relatert til aktiviteter du har utført på nettstedet. Du godtar at vi ikke har noe ansvar overfor deg for tap eller korrupsjon av slike data, og du fraskriver deg herved enhver rett til å reise krav mot oss på grunn av slikt tap eller korrupsjon.",
    "privacyPolicyTitle": "14. Personvernpolicy",
    "liabilityTitle": "15. Ansvar",
    "liabilityIntroduction": "Vi nevner ansvar gjennom disse vilkårene, men for å oppsummere alt i ett avsnitt:",
    "liabilityWaiver": "Du forstår og godtar uttrykkelig at selskapet ikke er ansvarlig, verken juridisk eller på annen måte, overfor deg eller tredjepart for direkte, indirekte, tilfeldige, tapt fortjeneste, spesielle, følgeskader, straffbare eller eksemplariske skader, inkludert, men ikke begrenset til, skader for tap av fortjeneste, goodwill, bruk, data eller andre immaterielle tap (selv om selskapet har blitt advart om muligheten for slike skader), som følge av: (1) bruk eller manglende evne til å bruke tjenestene; (2) feil, unøyaktigheter i innhold eller materialer; (3) personskade eller eiendomsskade av enhver art som følge av din tilgang til eller bruk av nettstedet; (4) kostnader for erstatningsvarer eller -tjenester på grunn av varer, data, informasjon eller tjenester kjøpt eller mottatt, eller transaksjoner inngått gjennom tjenestene; (5) uautorisert tilgang til eller bruk av våre sikre servere og/eller personopplysninger eller finansiell informasjon lagret der; (6) avbrudd i overføring til eller fra nettstedet; (7) feil, virus, trojanske hester eller lignende som overføres til eller gjennom nettstedet av tredjepart; (8) feil eller utelatelser i innhold eller materialer, eller tap eller skade påført som følge av bruk av innhold publisert, overført eller tilgjengeliggjort via nettstedet; (9) uttalelser eller handlinger fra tredjepart på tjenesten; (10) eller annet relatert til disse vilkårene eller tjenestene, enten som kontraktsbrudd, uaktsomhet eller annet ansvarsgrunnlag.",
    "miscellaneousTitle": "16. Diverse",
    "miscellaneousDescription": "Disse vilkårene og eventuelle retningslinjer eller regler vi publiserer på nettstedet utgjør hele avtalen mellom deg og oss. Vår manglende håndheving av en rettighet eller bestemmelse i disse vilkårene utgjør ikke en fraskrivelse av denne. Disse vilkårene gjelder i størst mulig utstrekning tillatt av loven. Vi kan overføre våre rettigheter eller forpliktelser til andre når som helst. Vi er ikke ansvarlige for tap, skade, forsinkelse eller manglende handling forårsaket av omstendigheter utenfor vår rimelige kontroll. Hvis en bestemmelse i disse vilkårene anses som ugyldig eller uopprettelig, påvirker ikke dette gyldigheten av de øvrige bestemmelsene. Disse vilkårene skaper ikke noe samarbeid, partnerskap, arbeidsforhold eller agenturforhold mellom deg og oss. Du godtar at disse vilkårene ikke skal tolkes til vår ulempe fordi vi har utarbeidet dem. Du fraskriver deg herved alle forsvar basert på den elektroniske formen av disse vilkårene og manglende signering av partene.",
    "contactTitle": "17. Kontakt oss",
    "neverCap": "NeverCap",
    "site": "Nettsted",
    "services": "Tjenester",
    at: "på",
      trademarkProtection: "Navnene, utseendet og følelsen av Tjenestene er beskyttet av opphavsrett© til Selskapet. Alle rettigheter forbeholdt. Du kan ikke duplisere, kopiere eller gjenbruke noen del av HTML, CSS, JavaScript eller visuelle designelementer uten uttrykkelig skriftlig tillatelse fra Selskapet. Du må be om tillatelse for å bruke Selskapets logo eller Tjenestenes logoer til promotering. Vennligst send oss en e-post {på} {email} for å be om å bruke logoer. Vi forbeholder oss retten til å tilbakekalle denne tillatelsen hvis du bryter disse Tjenestevilkårene.",
      privacyPolicyDescription: "Vi bryr oss om databeskyttelse og sikkerhet. Vennligst se gjennom vår {policy}. Ved å bruke nettsiden samtykker du til å være bundet av vår personvernpolitikk, som er inkorporert i disse Tjenestevilkårene. Vær oppmerksom på at nettsiden er vertet i USA. Hvis du tilgår nettsiden fra en annen region i verden med lover eller andre krav om innsamling, bruk eller videreformidling av personopplysninger som avviker fra gjeldende lover i USA, så ved fortsatt bruk av nettsiden overfører du dine data til USA, og du samtykker til at dine data overføres og behandles i USA.",
      contactDescription: "Hvis du har et spørsmål om noen av Tjenestevilkårene, vennligst kontakt oss {på} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
