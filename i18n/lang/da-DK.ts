// 丹麦语
let message = {
  // 首页
  HomePage: {
    home: "Alle Transskriberinger",
    times: "{times} gratis transskriptioner per dag, {left} tilbage i dag.",
    tips: "Opgrader til Pro for ubegrænsede transskriptioner.",
    update: "Opgrader nu",
    rename: "Omdøb",
    delete: "Slet",
    cancel: "Annuller",
    confirm: "Opret",
    dialogLabel: "Mappenavn",
    recently: "Seneste filer",
    loading: "Indlæser",
    tour: {
      step0: {
        title: "Velkommen til {name}",
        tip: "Her kan du:",
        content: "Transskriber engangs samtaler, møder, forelæsninger og mere",
        next: "Kom i gang"
      },
      step1: {
        title: "Transskriber filer",
        content:
          "Understøtter tre transskriptionsmetoder: lokale filer, links og optagelser."
      },
      step2: {
        title: "Opret en mappe",
        content: 'Klik på "+" for at oprette en mappe og organisere dine filer.'
      },
      step3: {
        title: "Se transskriptionsdetaljer og rediger",
        content:
          "Klik på elementet for at se transskriptionsdetaljer og rediger, oversæt det også."
      },
      next: "næste",
      finish: "Forstået"
    },
    export: {
      export: "Eksporter",
      title: "Vi genererer din eksport",
      title2: "Din fil er klar",
      singleLoadingContent: "1 fil komprimeres.",
      singleSuccessContent: "1 fil er blevet komprimeret.",
      loadingContent: "{num} filer komprimeres.",
      successContent: "{num} filer er blevet komprimeret.",
      cancel: "Annuller eksporten",
      error: "Eksportfejl",
      dialog: {
        title: "Advarsel",
        content: "Annuller eksporten?",
        cancel: "Annuller eksport",
        continue: "Fortsæt eksport"
      }
    },
    welcome: {
      title: "Velkommen til Scribify!",
      description: "Her kan du:",
      transcribe:
        "Transskribér ubesværet med Scribify – omdan stemmesamtaler til klar, søgbar og delbar tekst på et øjeblik.",
      precision:
        "Få præcise transskriptioner med taleridentifikation og tidsstempler øjeblikkeligt.",
      translate:
        "Bryd sprogbarrierer: oversæt transskriptioner til mere end 200 sprog nemt og enkelt.",
      edit: "Redigér, forbedr og eksportér dine transskriptioner i formater, der passer til dine behov.",
      collaborate: "Samarbejd ved at dele din transskriberede tekst med andre.",
      button: "Kom i gang",
      tip: "Klar til at omdanne lyd til transskriberet tekst? Start med at udforske nu!",
      tip2: "Begynd at udforske nu!",
      tip1: "Klar til at omdanne lyd til transskriberet tekst? "
    },
    subscriptionModal: {
      left: {
        title: "Få Pro-planen for at låse op for mere",
        c1: "Ubegrænset transskription",
        c2: "10 timers uploads",
        c3: "Højeste prioritet",
        c4: "99% transskriptionsnøjagtighed",
        c5: "Mere end 100 understøttede sprog",
        c6: "Taleridentifikation",
        c7: "Transskriptionsoversættelse",
        t1: "Ubegrænset transskription for én person.",
        t2: "Hver fil kan være op til 10 timer / 5 GB. Upload 50 filer ad gangen.",
        t3: "Vi vil altid transskribere dine filer hurtigst muligt med højeste prioritet."
      },
      right: {
        title: "Få Pro-planen",
        yearly: "Årligt",
        monthly: "Månedligt",
        save: "Besparelse",
        preMonth: "pr. måned",
        preYear: "pr. år",
        firstMonth: "første måned",
        afterwards: "derefter"
      },
      subscribe: "Abonnér"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Mislykket",
      selected: "Valgt",
      success: "Succes",
      fileList: "Filliste"
    },
    dialog: {
      move: {
        title: "Flyt",
        label: "Vælg en mappe",
        placeholder: "Vælg en mappe",
        confirm: "Flyt",
        cancel: "Annuller"
      },
      rename: {
        title: "Omdøb",
        label: "Filnavn",
        confirm: "Omdøb",
        cancel: "Annuller"
      },
      delete: {
        title: "Slet",
        file: "fil",
        files: "filer",
        label: "Bekræft sletning? Denne handling kan ikke fortrydes.",
        confirm: "Slet",
        cancel: "Annuller"
      },
      share: {
        title: "Del",
        label:
          "Alle med følgende sikre link kan se denne transskription og den tilknyttede mediefil.",
        confirm: "Kopier link",
        success: "Kopiering lykkedes"
      },
      export: {
        title: "Eksporter",
        select: "Vælg det format du har brug for",
        settings: "Indstillinger",
        speaker: "Inkluder taler",
        timecodes: "Inkluder tidskoder",
        confirm: "Eksporter",
        cancel: "Annuller",
        selectErr: "Vælg venligst et eller flere formater"
      }
    },
    search: {
      placeholder: "Søg"
    },
    recently: "Senest",
    record: "Optag",
    transcribe: "Transskriber",
    unclassified: "Uklassificerede mapper",
    buttons: {
      transcribe: "Transskriber filer",
      url: "Transskriber links",
      record: "Optag og transskriber",
      recording: "Optager..."
    },
    delSuccess: "Slettet med succes",
    create: "Opret",
    endRecord: {
      title: "Prompt",
      content:
        "Du optager. Denne handling vil afslutte optagelsen. Vil du afslutte optagelsen?",
      confirm: "Fortsæt Optagelse",
      cancel: "Afslut Optagelse"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Optag",
      pause: "Pause",
      resume: "Genoptag",
      stop: "Stop",
      endRecord: "Afslut optagelse",
      delete: "Slet",
      transcribe: "Transskriber",
      permissionDenied: "Mikrofon tilladelse nægtet eller enhed findes ikke",
      dialog: {
        delete: {
          title: "Advarsel",
          label: "Er du sikker på, at du vil slette denne optagelse?",
          confirm: "Slet",
          cancel: "Annuller"
        },
        complete: {
          title: "Optagelse fuldført",
          label:
            "Optagelsen har nået 10 timer og er automatisk stoppet. Transskriber venligst.",
          confirm: "Forstået"
        },
        speaker: {
          content:
            "Til taleridentifikation er filer begrænset til 3 timer. Fjern markeringen i '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transskriber en online medie",
        title: "Indsæt links",
        label:
          "Indsæt dit video- eller audiolink fra: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram og flere platforme...",
        confirm: "Tilføj",
        cancel: "Annuller",
        // 请输入正确的链接
        errorTitle:
          "Linkadressen du indtastede er forkert. Kontroller venligst og prøv igen.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transskriber fra URL",
        dialogTitle: "Upload filer til transskribering",
        tip1: "Træk filer hertil, eller klik for at gennemse",
        tip2: "Klik for at gennemse",
        or: "eller",
        supported: "Understøttede formater"
      },
      del: {
        title: "Advarsel",
        content:
          "Al fremskridt vil gå tabt. Bekræft annullering af transskriptionen?",
        cancel: "Bekræft annullering",
        confirm: "Fortsæt transskribering"
      },
      files: "Filer",
      resultDialogTitle: "Transskriber filer",
      resultDialogTitle2: "Transskriber fil",
      cancel: "Annuller",
      confirm: "Transskriber",
      return: "Tilbage",
      addMore: "Tilføj flere",
      language: "Vælg sprog",
      failed: "Mislykket",
      tooLarge: "Filen overskrider grænsen (5 GB).",
      linkUpload: "Uploader",
      fileFormat: "Filformat er ikke tilladt",
      localFiles: "Lokale filer",
      pasteLink: "Online link",
      uploadErr: "Uploadfejl",
      hashErr: "Hashfejl",
      table: {
        status: "Status",
        file: "Fil",
        size: "Størrelse",
        noData: "Ingen data"
      },
      maxFileNum: "Antallet af filer kan ikke overstige {num}.",
      speaker: "Identificer talere",
      speakerLabel:
        "Registrer automatisk hvem der taler",
      guest: {
        transcribe: "Transskriber",
        file: "Fil",
        audio: "Lyd-/videofil",
        Uploading: "Uploader..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Seneste",
      popular: "Populære",
      other: "Andre",
      searchLanguage: "Søg sprog",
      noMatch: "Ingen matchende sprog fundet",
      English: "Engelsk",
      "English(US)": "Engelsk (USA)",
      "English(UK)": "Engelsk (UK)",
      Spanish: "Spansk",
      Portuguese: "Portugisisk",
      French: "Fransk",
      Italian: "Italiensk",
      German: "Tysk",
      Dutch: "Hollandsk",
      Polish: "Polsk",
      Danish: "Dansk",
      Japanese: "Japansk",
      Korean: "Koreansk",
      Hungarian: "Ungarsk",
      Czech: "Tjekkisk",
      Chinese: "Kinesisk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Azerbaijani: "Aserbajdsjansk",
      Estonian: "Estisk",
      Belarusian: "Hviderussisk",
      Bulgarian: "Bulgarsk",
      Icelandic: "Islandsk",
      Bosnian: "Bosnisk",
      Persian: "Persisk",
      Russian: "Russisk",
      "Chinese(Traditional)": "Kinesisk (Traditionelt)",
      Finnish: "Finsk",
      Kazakh: "Kasakhisk",
      Galician: "Galicisk",
      Catalan: "Catalansk",
      "Chinese(Simplified)": "Kinesisk (Forenklet)",
      Kannada: "Kannada",
      Croatian: "Kroatisk",
      Latvian: "Lettisk",
      Lithuanian: "Litauisk",
      Romanian: "Rumænsk",
      Marathi: "Marathi",
      Malay: "Malajisk",
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
      Greek: "Græsk",
      Armenian: "Armensk",
      Hindi: "Hindi",
      Indonesian: "Indonesisk",
      Vietnamese: "Vietnamesisk",
      Albanian: "Albansk",
      Amharic: "Amharisk",
      Assamese: "Assamesisk",
      Occitan: "Occitansk",
      Bashkir: "Bashkirisk",
      Basque: "Baskisk",
      Breton: "Bretonsk",
      Tibetan: "Tibetansk",
      Faroese: "Færøsk",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisk",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreol",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Laotisk",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgsk",
      Malagasy: "Malagassisk",
      Maltese: "Maltesisk",
      Malayalam: "Malayalam",
      Mongolian: "Mongolsk",
      Bengali: "Bengali",
      Burmese: "Burmesisk",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Singalesisk",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadsjikisk",
      Tatar: "Tatarisk",
      Telugu: "Telugu",
      Turkmen: "Turkmensk",
      Uzbek: "Usbekisk",
      Hawaiian: "Hawaiiansk",
      "Norwegian Nynorsk": "Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisk",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanesisk",
      Cantonese: "Kantonesisk",
      Abkhaz: "Abkhasisk",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avarisk",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irsk",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossetisk",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesisk",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Nord-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buryat",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Tjetjensk",
      chk: "Chuukesisk",
      Chuvash: "Tjuvasjisk",
      Tswana: "Setswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau (Zimbabwe)",
      "South Ndebele": "Syd-Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (Vestafrikansk skriftsprog)",
      "French(Canada)": "Fransk (Canada)",
      Fijian: "Fijiansk",
      fon: "Fon",
      "Western Frisian": "Vestfrisisk",
      fur: "Friulisk",
      Fulah: "Fula",
      Kongo: "Kikongo",
      Kalaallisut: "Grønlandsk",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisisk",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikansk",
      "crh-Latn": "Krim-Tatarisk (Latinsk)",
      crh: "Krim-Tatarisk (Kyrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdisk (Kurmanji)",
      ckb: "Kurdisk (Sorani)",
      trp: "Kokborok",
      ltg: "Latgallisk",
      lij: "Ligurisk",
      Limburgish: "Limburgsk",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisk",
      rom: "Romani",
      mad: "Maduresisk",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajisk (Jawi)",
      Marshallese: "Marshallsk",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Eastern Huasteca)",
      "Southern Sotho": "Syd-Sotho",
      new: "Newar",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugisisk (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapotekisk",
      "Northern Sami": "Nordsamisk",
      Samoan: "Samoansk",
      kri: "Krio",
      crs: "Seychellisk kreol",
      Sango: "Sango",
      "sat-Latn": "Santali (Latinsk)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gælisk",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latinsk)",
      Tahitian: "Tahitisk",
      Tonga: "Tongansk",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassarese",
      vec: "Venetiansk",
      Uyghur: "Uighurisk",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesisk",
      scn: "Siciliansk",
      hil: "Hiligaynon",
      jam: "Jamaicansk kreol",
      sah: "Jakutisk",
      ace: "Achinese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Latinsk)",
      Inuktitut: "Inuktitut (Stavelser)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "eller", // 或
    LoginBtn: "Log ind med e-mail",
    LoginGoogle: "Log ind med Google",
    SignupBtn: "Tilmeld med e-mail",
    SignupGoogle: "Tilmeld med Google",
    SignupDes: "Tilmeld dig i dag og oplev magien — gratis.",
    SignupTitle: "Præcis & ubegrænset transskription",
    signup: "Tilmeld", // 注册
    sign_up: "Tilmeld dig", // 注册
    loginByGoogle: "Fortsæt med Google", // 使用Google登录
    emailAddress: "Indtast venligst din e-mailadresse", // 请输入您的邮箱
    createAccount: "Opret en ny konto", // 创建账户
    accountExists: "Har du allerede en konto? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Ved at fortsætte accepterer du vores {terms} og {policy}.",
      terms: "Vilkår",
      policy: "Privatlivspolitik"
    },
    setPassword: "Sæt en adgangskode", // 设置密码
    code: "Verifikationskode", // 验证码
    resend: "Send igen", // 重新发送
    enterPassword: "Adgangskode: Mindst 6 tegn.", // 请输入密码
    passwordLeval: "Adgangskode niveau", // 密码强度
    Weak: "Svag", // 弱 中 强
    Medium: "Medium", // 弱 中 强
    Strong: "Stærk", // 弱 中 强
    confirmPassword: "Bekræft din adgangskode", // 确认密码
    invalidEmail: "Ugyldig e-mailadresse", // 无效的邮箱地址
    logInDirectly: "Denne konto eksisterer allerede. Log venligst direkte ind.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Verifikationskode fejl. Prøv igen.", // 验证码错误，请重试
    atLeastSix: "Adgangskoden skal være mindst 6 tegn lang.", // 密码长度至少6位
    passwordNotMatch: "Adgangskoder matcher ikke. Prøv venligst igen.", // 密码不匹配，请重试
    login: "Log ind", // 登录
    log_in: "Log ind", // 登录
    log_In: "Log ind", // 登录
    password: "Adgangskode", // 密码
    forgotPassword: "Glemt din adgangskode?", // 忘记密码？
    noAccount: "Har du ikke en konto？", // 没有账户？注册
    accountNotExists: "Denne konto eksisterer ikke.", // 账户不存在
    passwordError: "Adgangskode fejl", // 密码错误
    sendCode: "Send verifikationskode", // 发送验证码
    resetPassword: "Nulstil adgangskode", // 重置密码
    resetYourPassword: "Nulstil din adgangskode", // 重置你的密码
    newOldCantSame:
      "Den nye adgangskode skal være forskellig fra den gamle adgangskode.", // 新密码与旧密码不能相同
    passwordResetOk: "Adgangskode nulstillet med succes！", // 密码重置成功！
    signupToSaveProgress: "Færdiggør tilmeldingen for at gemme din fremgang.",
    tip: "Tip",
    tipContentEmail:
      "Vi har netop sendt din konto-loginadgangskode til din e-mail.",
    tipContentPassword:
      "Tjek venligst din indbakke og log ind med din e-mail og adgangskode.",
    codeToEmail:
      "Vi har lige sendt en verifikationskode til din e-mail. Tjek venligst din indbakke og indsæt verifikationskoden ovenfor."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transskriptioner dagligt",
    uploadMinutes: "30 minutters upload",
    lowerPriority: "Lavere prioritet",
    currentPlan: "Nuværende plan",
    professionalEdition: "professionel version",
    unlimitedTranscription: "Ubegrænset transskription",
    unlimitedNumberOfTimes: "Ubegrænset transskriptionsfrekvens og -varighed.",
    filesUploadedAtOnce:
      "Hver fil kan være op til 10 timer lang / 5 GB. Upload 50 filer ad gangen.",
    highestPriority: "højeste prioritet",
    weWillGiveTheHighest:
      "Vi vil altid transskribere dine filer hurtigst muligt med højeste prioritet.",
    theFirstMonth: "Den første måned",
    subscribeTo: "abonner på",
    basicVersionFree: "Basisversion (gratis)",
    return: "Tilbage",
    annualize: "årlig",
    monthly: "månedlig",
    everyYear: "hvert år",
    saved: "sparet",
    byTheMonth: "pr. måned",
    firstMonth: "første måned",
    afterwardsEveryMonth: "Derefter hver måned",
    manageSubscription: "Administrer abonnement",
    professionalYearbook: "Professionel årlig",
    professionalMonthly: "Professionel månedlig",
    subscriptionWillCancelledOn: "Dit abonnement vil blive annulleret den",
    displayLanguage: "Visningssprog",
    update: "Opgrader nu",
    basicversion: "Basisversion (Gratis)",
    daily: "{start} af {end} daglige transskriptioner brugt",
    upgradetoPro: "Opgrader til Pro",
    accountSetting: "Kontoindstillinger",
    logOut: "Log ud",
    account: "Konto",
    email: "E-mail",
    id: "ID",
    password: "Adgangskode",
    resetPassword: "Nulstil adgangskode",
    logIn: "Log ind",
    tryForFree: "Prøv gratis",
    notFund: "Ikke fundet",
    couldntFind: "Vi kunne ikke finde det, du ledte efter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månedlig",
    perMonth: "pr. måned",
    afterwards: "derefter",
    accuracy: "transskriptionsnøjagtighed",
    supported: "understøttede sprog",
    identification: "Taleridentifikation",
    transcriptSranslation: "Transskriptionsoversættelse",
    perYear: "pr. år",
    getProPlan: "Få Pro-planen",
    changeToAnnual: "Skift til årlig",
    automaticRenewalon: "Automatisk fornyelse den",
    eachMonth: "Automatisk fornyelse den {time} i hver måned.",
    automaticRenewal:
      "Automatisk fornyelse mislykkedes, tjek venligst betalingsmetoden.",
    eachYear: "Automatisk fornyelse den {time} hvert år.",
    returnAccountSetting: "Tilbage",
    needsToWaitLonger: "Vent længere, før dine filer bliver transskriberet.",
    freeThreeTimesDay: "Transskriber 3 filer gratis hver dag.",
    oneFileUploaded:
      "Hver fil kan være op til 30 minutter lang. Upload 1 fil ad gangen.",
    uploadWithinHours: "10-timers uploads",
    yourSubscription: "Dit abonnement annulleres den {time}.",
    save: "Spare",
      freeversion2: "Gratis Plan"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesisk (Forenklet)",
      "Chinese(Traditional)": "Kinesisk (Traditionelt)",
      Japanese: "Japansk",
      Danish: "Dansk",
      German: "Tysk",
      English: "Engelsk",
      Spanish: "Spansk",
      French: "Fransk",
      Italian: "Italiensk",
      Hungarian: "Ungarsk",
      Dutch: "Hollandsk",
      Norwegian: "Norsk",
      Polish: "Polsk",
      Portuguese: "Portugisisk",
      Finnish: "Finsk",
      Swedish: "Svensk",
      Turkish: "Tyrkisk",
      Greek: "Græsk",
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
      "​Open-source Nuxt3 SaaS skabelon, forud integreret med globale betalingsgateways (Stripe/Cream), Google OAuth, i18n routing og SEO optimeringsværktøjer. Designet til udviklere, der lancerer flersprogede webapps, tilbyder den SSR/SSG support og produktionsklar sikkerhed ud af boksen.",
    startLink: "Start gratis prøveperiode~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Tilslut dig ventelisten, få de seneste NuxtPro nyheder først OG rabatter!",
      placeholder: "Indtast din e-mail",
      button: "Tilslut venteliste",
      joinCountMessage: "🔥 Tidlig bruger #{count} lige tilsluttet ventelisten!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "NuxtJS boilerplaten med alt det, du har brug for for at få dit produkt foran kunderne. Fra idé til produktion på 5 minutter."
    },
    api: {
      title: "dette er en demo",
      corpInfo: "virksomhedsinfo"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "video download fejl"
      },
      mse: {
        code: 2,
        msg: "stream append fejl"
      },
      parse: {
        code: 3,
        msg: "parsing fejl"
      },
      format: {
        code: 4,
        msg: "forkert format"
      },
      decoder: {
        code: 5,
        msg: "dekodningsfejl"
      },
      runtime: {
        code: 6,
        msg: "grammatiske fejl"
      },
      timeout: {
        code: 7,
        msg: "afspil timeout"
      },
      other: {
        code: 8,
        msg: "andre fejl"
      }
    },
    HAVE_NOTHING: "Der er ingen information om, hvorvidt lyd/video er klar",
    HAVE_METADATA: "Lyd/video metadata er klar",
    HAVE_CURRENT_DATA:
      "Data om den nuværende afspilningsplacering er tilgængelig, men der er ikke nok data til at afspille næste frame/millisekund",
    HAVE_FUTURE_DATA: "Nuværende og mindst én frame af data er tilgængelig",
    HAVE_ENOUGH_DATA:
      "De tilgængelige data er tilstrækkelige til at starte afspilning",
    NETWORK_EMPTY: "Lyd/video er ikke blevet initialiseret",
    NETWORK_IDLE:
      "Lyd/video er aktiv og er blevet valgt til ressourcer, men intet netværk bruges",
    NETWORK_LOADING: "Browseren downloader dataene",
    NETWORK_NO_SOURCE: "Ingen lyd/video kilde blev fundet",
    MEDIA_ERR_ABORTED: "Hentningsprocessen afbrydes af brugeren",
    MEDIA_ERR_NETWORK: "Der opstod en fejl under download",
    MEDIA_ERR_DECODE: "Der opstod en fejl under dekodning",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Lyd/video understøttes ikke",
    REPLAY: "Genafspil",
    ERROR: "Netværk er offline",
    PLAY_TIPS: "Afspil",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Afspil næste",
    DOWNLOAD_TIPS: "Download",
    ROTATE_TIPS: "Roter",
    RELOAD_TIPS: "Genindlæs",
    FULLSCREEN_TIPS: "Gå fuldskærm",
    EXITFULLSCREEN_TIPS: "Afslut fuldskærm",
    CSSFULLSCREEN_TIPS: "Cssfuldskærm",
    EXITCSSFULLSCREEN_TIPS: "Afslut cssfuldskærm",
    TEXTTRACK: "Undertekst",
    PIP: "PIP",
    SCREENSHOT: "Skærmbillede",
    LIVE: "LIVE",
    OFF: "Slukket",
    OPEN: "Åbn",
    MINI_DRAG: "Klik og hold for at trække",
    MINISCREEN: "Miniskærm",
    REFRESH_TIPS: "Prøv venligst",
    REFRESH: "Opdater",
    FORWARD: "fremad",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Tænd undertekster",
    TM_SUBTITLE_HIDE_TIPS: "Sluk undertekster",
    TM_MINIMIZE_TIPS: "Skjul videoen"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Privatlivspolitik",
    lastUpdated: "Sidst opdateret: 25. august 2025",
    policyDescription:
      'Denne politik beskriver, hvordan Scribify (herefter benævnt "Scribify", "vores", "vi", "os") indsamler, bruger og videregiver dine personlige oplysninger, når du bruger vores tjenester, websteder',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 'og software (samlet kaldet "Tjenesterne").',
    policyAgreement:
      "Læs venligst denne privatlivspolitik omhyggeligt og sørg for, at du forstår den. Ved at bruge en af vores tjenester accepterer du denne privatlivspolitik. Hvis du ikke accepterer vores brug af dine personoplysninger i overensstemmelse med denne politik, skal du straks stoppe med at bruge vores tjenester.",
    policyOverview:
      "I denne politik beskriver vi: hvilke data vi indsamler og hvorfor; hvordan dine data håndteres; og dine rettigheder i forhold til dine data. Vi sælger ikke dine data.",
    scopeTitle: "1. Omfanget af denne privatlivspolitik",
    whatWeCollectTitle: "2. Hvad vi indsamler og hvorfor",
    accessShareTitle: "3. Hvornår vi tilgår eller deler dine oplysninger",
    secureDataTitle: "4. Sådan sikrer vi dine data",
    deleteContentTitle: "5. Hvad sker der, når du sletter dit indhold",
    locationTitle: "6. Placering af websted og data",
    childrenPrivacyTitle: "7. Børns privatliv",
    updatesTitle: "8. Opdateringer af denne privatlivspolitik",
    contactUsTitle: "9. Kontakt os",
    identityAccessTitle: "2.1 Identitet og adgang",
    billingInfoTitle: "2.2 Faktureringsoplysninger",
    productInteractionsTitle: "2.3 Produktinteraktioner",
    websiteInteractionsTitle: "2.4 Webstedsinteraktioner",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondance",
    scopeContent:
      "Denne privatlivspolitik gælder kun for vores indsamling og behandling af oplysninger om brugere af Tjenesterne. Denne privatlivspolitik gælder ikke for tjenester, websteder eller software, der drives af tredjeparter, og som er linket til os (uanset om vi leverer disse links, eller om andre brugere deler dem), og den gælder heller ikke for indhold, data, applikationer eller materialer fra tredjeparter. Vi anbefaler, at du tjekker privatlivspolitikkerne for tredjepartswebsteder eller -software, før du giver dem oplysninger.",
    collectPrinciple:
      "Vores ledende princip er kun at indsamle det, vi har brug for. Her er, hvad det betyder i praksis:",
    identityAccessContent:
      "Når du tilmelder dig et af vores produkter, beder vi om identificerende oplysninger såsom dit navn og din e-mailadresse. Dette er for at kunne levere essentiel produktfunktionalitet og sende dig produktopdateringer og andre vigtige oplysninger.",
    billingInfoContent:
      "Hvis du tilmelder dig et betalt produkt, vil du blive bedt om at angive dine betalingsoplysninger og faktureringsadresse. Betalingsoplysningerne sendes direkte til vores betalingsudbyder og når ikke vores servere.",
    productInteractionsContent:
      "Vi gemmer det indhold, du uploader, modtager eller vedligeholder på dine produktkonti, på vores servere. Medmindre du sletter dette indhold, kan vi gemme det, så længe din konto er aktiv.",
    websiteInteractionsContent:
      "Vi indsamler oplysninger om din browsingaktivitet til analyse- og statistiske formål, såsom test af konverteringsfrekvens og eksperimentering med nye produktdesigns. Dette omfatter f.eks. dine browser- og operativsystemversioner, din IP-adresse, hvilke websider du har besøgt, og hvor lang tid de tog at indlæse, og hvilket websted der henviste dig til os. Hvis du har en konto og er logget ind, er disse webanalysedata knyttet til din IP-adresse og brugerkonto, indtil din konto ikke længere er aktiv.",
    cookiesContent1:
      "Vi bruger også permanente førstepartscookies og nogle tredjepartscookies til at gemme bestemte præferencer, gøre det nemmere for dig at bruge vores applikationer og udføre A/B-test samt understøtte visse analyser.",
    cookiesContent2:
      "En cookie er et stykke tekst, der gemmes af din browser. Den kan hjælpe med at huske loginoplysninger og webstedspræferencer. Den kan også indsamle oplysninger såsom din browsertype, operativsystem, besøgte websider, besøgets varighed, set indhold og andre klikdata. Du kan justere indstillinger for cookieopbevaring og acceptere eller blokere individuelle cookies i dine browserindstillinger, selvom vores apps ikke fungerer, og andre aspekter af vores tjeneste muligvis ikke fungerer korrekt, hvis du slår cookies fra.",
    voluntaryCorrespondenceContent:
      "Når du sender os en e-mail med et spørgsmål eller for at bede om hjælp, gemmer vi denne korrespondance, inklusive din e-mailadresse, så vi har en historik over tidligere korrespondance, som vi kan bruge, hvis du kontakter os i fremtiden.",
    accessShareContent1:
      "For at levere produkter eller tjenester, du har anmodet om. Vi bruger nogle tredjeparts underdatabehandlere til at hjælpe med at køre vores applikationer og levere tjenesterne til dig. Dette inkluderer cloud- og analyseudbydere.",
    accessShareContent2:
      "At undersøge, forebygge eller træffe foranstaltninger vedrørende misbrug. Adgang til en kundes konto i forbindelse med undersøgelse af potentielt misbrug er en sidste udvej. Vi ønsker at beskytte privatlivets fred og sikkerheden for både vores kunder og de personer, der rapporterer problemer til os, og vi gør vores bedste for at afbalancere disse ansvarsområder gennem hele processen. Hvis vi opdager, at du bruger vores produkter til et begrænset formål, vil vi træffe nødvendige foranstaltninger, herunder underrette de relevante myndigheder, hvor det er berettiget.",
    accessShareContent3: "Når det er påkrævet i henhold til gældende lov.",
    userDataRequests:
      "- Anmodninger om brugerdata. Vores politik er ikke at svare på anmodninger fra myndigheder om brugerdata, medmindre vi er tvunget til det af en juridisk proces eller under begrænsede omstændigheder i tilfælde af en nødsituation. Hvis amerikanske retshåndhævende myndigheder har den nødvendige kendelse, strafferetlige stævning eller retskendelse, der kræver, at vi deler data, skal vi dog overholde dette. Ligeledes vil vi kun svare på anmodninger fra myndigheder uden for USA, hvis den amerikanske regering tvinger os til det gennem procedurer, der er beskrevet i en traktat eller aftale om gensidig retshjælp. Det er vores politik at underrette berørte brugere, før vi deler data, medmindre vi er juridisk forbudt at gøre det, og undtagen i visse nødsituationer.",
    preservationRequests:
      "- Anmodninger om databevaring. Ligeledes er det vores politik kun at efterkomme anmodninger om databevaring, hvis det er påkrævet af den amerikanske Federal Stored Communications Act, 18 USC Section 2703(f), eller af en behørigt forkyndt amerikansk stævning i civile sager. Vi deler ikke bevarede data, medmindre det er påkrævet ved lov eller påkrævet af en retskendelse, som vi vælger ikke at anke. Derudover vil vi, medmindre vi modtager en behørig kendelse, retskendelse eller stævning, inden den krævede bevaringsperiode udløber, destruere alle bevarede kopier af kundedata ved udgangen af bevaringsperioden.",
    taxAudit:
      "- Hvis vi bliver revideret af en skattemyndighed, kan vi være forpligtet til at dele faktureringsrelaterede oplysninger. Hvis det sker, deler vi kun det minimum, der er nødvendigt, såsom faktureringsadresser og oplysninger om skattefritagelse.",
    secureDataContent1: "Alle data krypteres via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "når den sendes fra vores servere til din browser.",
    deleteContentContent:
      "Hvis du sletter indhold, bliver det øjeblikkeligt utilgængeligt.",
    locationContent:
      "Vores produkter og andre web-ejendomme drives i USA. Hvis du befinder dig i Den Europæiske Union, Storbritannien eller andre steder uden for USA, skal du være opmærksom på, at alle oplysninger, du giver os, vil blive overført til og gemt i USA. Ved at bruge vores websteder eller tjenester og/eller give os dine personlige oplysninger, accepterer du denne overførsel.",
    childrenPrivacyContent:
      "Tjenesterne er ikke rettet mod børn, og vi indsamler ikke bevidst personlige oplysninger fra børn under 13 år. Hvis du er under 13 år, bedes du ikke indsende personlige oplysninger via Tjenesterne. Hvis du mener, at et barn har givet os personlige oplysninger i strid med denne politik, bedes du kontakte os som angivet nedenfor.",
    updatesContent:
      "Vi kan opdatere denne politik efter behov for at overholde relevante regler og afspejle eventuelle nye praksisser. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side.",
    contactUsContent1:
      "Hvis du har spørgsmål, kommentarer eller klager vedrørende vores privatlivspolitik, bedes du",
    contactUs: "kontakt os",
    contactUsContent2:
      "og vi vil bestræbe os på at behandle din klage hurtigst muligt."
  },
  termsOfService: {
    termsOfServiceTitle: "Servicevilkår",
    lastUpdated: "Sidst opdateret: 21. september 2022",
    thankYouMessage: "Tak fordi du bruger vores produkter!",
    companyReference:
      'Når vi siger "Virksomhed", "vi", "vores" eller "os" i dette dokument, henviser vi til Scribify.',
    servicesDefinition:
      'Når vi siger "Tjenester", mener vi ethvert produkt, der er oprettet og vedligeholdt af Scribify, uanset om det leveres i en webbrowser, desktopapplikation, mobilapplikation eller et andet format.',
    termsUpdateNotice:
      "Vi kan opdatere disse servicevilkår i fremtiden. Typisk har disse ændringer været for at præcisere nogle af disse vilkår ved at linke til en udvidet relateret politik. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side og tager andre passende skridt for at underrette kontohaverne.",
    acceptanceOfAgreementTitle: "1. Accept af aftale",
    scribifyServicesTitle: "2. Scribifys tjenester",
    accountTermsTitle: "3. Kontovilkår",
    paymentRefundsTitle: "4. Betaling, refusion og planændringer",
    cancellationTerminationTitle: "5. Annullering og opsigelse",
    submissionsTitle: "6. Indsendelser",
    uptimeSecurityTitle: "7. Oppetid og sikkerhed",
    siteManagementTitle: "8. Webstedsadministration",
    copyrightContentTitle: "9. Ophavsret og ejerskab af indhold",
    prohibitedActivitiesTitle: "10. Forbudte aktiviteter",
    featuresBugsTitle: "11. Funktioner og fejl",
    correctionsTitle: "12. RETTELSER",
    userDataTitle: "13. Brugerdata",
    privacyPolicyTitle: "14. Privatlivspolitik",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakt os",
    acceptanceContent1:
      "Ved at bruge vores Tjenester angiver du din accept af denne Aftale, som dermed bliver en bindende kontrakt mellem dig og Scribify. Du erklærer, at du er juridisk i stand til at acceptere disse Vilkår, og bekræfter, at du er myndig nok til at indgå en bindende kontrakt. Scrifys accept er udtrykkeligt betinget af din accept af alle vilkår og betingelser i denne Aftale.",
    acceptanceContent2:
      "Tjenesterne er ikke beregnet til og bør ikke bruges af personer under 18 år. Ved at bruge Tjenesterne erklærer og garanterer du, at du opfylder ovenstående berettigelseskrav.",
    acceptanceContent3:
      'Udtrykkene "du", "din", "dig selv" omfatter også dine medarbejdere, agenter, forretningsrepræsentanter og alle andre personer, som du giver adgang til Tjenesterne via din Konto (som defineret nedenfor). Du er ansvarlig for at sikre, at alle personer, der tilgår Tjenesterne via din konto, er bekendt med disse Vilkår og overholder dem.',
    acceptanceContent4:
      "Scribify forbeholder sig retten til at revidere og opdatere disse vilkår fra tid til anden efter eget skøn. Alle ændringer træder i kraft med det samme, når de offentliggøres. Din fortsatte brug af tjenesterne efter offentliggørelsen af de reviderede vilkår betyder, at du accepterer og accepterer ændringerne. Du forventes at tjekke denne side fra tid til anden, så du er opmærksom på eventuelle ændringer, da de er bindende for dig.",
    servicesContent1:
      "Vores tjenester gør det muligt for brugere at omdanne stemmesamtaler til transskriberet tekst, der kan søges i, oversættes og deles med andre.",
    servicesContent2:
      'Du kan vælge, om du vil bruge den gratis version af Tjenesterne ("Gratis Tjenester") eller den abonnementsbaserede, betalte version af Tjenesterne, som du muligvis skal betale gebyrer for ("Betalte Tjenester").',
    servicesContent3:
      "Vi stiller Tjenesterne til rådighed for dig. Du er ansvarlig for at træffe alle nødvendige foranstaltninger for at du kan få adgang til Tjenesterne.",
    accountTerms1:
      "- Du er ansvarlig for at opretholde sikkerheden på din konto. Virksomheden kan ikke og vil ikke være ansvarlig for tab eller skade som følge af din manglende overholdelse af denne sikkerhedsforpligtelse.",
    accountTerms2:
      "- Du må ikke bruge Tjenesterne til ulovlige, uetiske eller umoralske formål.",
    accountTerms3:
      "- Du er ansvarlig for alt indhold, der offentliggøres, og alt aktivitet, der finder sted på din konto. Dette inkluderer indhold, der offentliggøres af andre, som enten: (a) har adgang til dine loginoplysninger; eller (b) har deres egne logins på din konto.",
    accountTerms4:
      '- Du skal være et menneske. Konti registreret af "bots" eller andre automatiserede metoder er ikke tilladt.',
    paymentContent1:
      "- For betalte tjenester, der tilbyder en gratis prøveperiode, forklarer vi prøveperiodens varighed, når du tilmelder dig. Efter prøveperioden skal du betale forud for at fortsætte med at bruge tjenesten. Hvis du ikke betaler, ophører disse tjenester.",
    paymentContent2:
      "- Hvis du opgraderer fra et gratis abonnement til et betalt abonnement, debiterer vi dit kort med det samme, og din faktureringsperiode starter på opgraderingsdagen.",
    paymentContent3:
      "- Alle gebyrer er eksklusive alle skatter, afgifter eller gebyrer pålagt af skattemyndighederne. Hvor det er nødvendigt, opkræver vi disse skatter på vegne af skattemyndighederne og indbetaler dem til skattemyndighederne. Ellers er du ansvarlig for betaling af alle skatter, afgifter eller gebyrer.",
    paymentContent4:
      "- Alle køb refunderes ikke. Du kan til enhver tid opsige alle betalte tjenester ved at logge ind på din konto. For betalte abonnementer træder din opsigelse i kraft ved udgangen af den nuværende betalte periode, medmindre andet er angivet.",
    cancellationContent1:
      "- Hvis du opsiger Tjenesten inden udgangen af en betalt periode, træder din opsigelse i kraft med det samme, og du vil ikke blive opkrævet igen. Vi beregner ikke automatisk forholdsmæssigt den ubrugte tid i den seneste faktureringsperiode.",
    cancellationContent2:
      "- Vi har ret til at suspendere eller opsige din konto og nægte enhver nuværende eller fremtidig brug af vores Tjenester af en hvilken som helst grund når som helst. Suspendering betyder, at du ikke vil kunne få adgang til kontoen eller noget indhold på kontoen. Opsigelse vil desuden resultere i sletning af din konto eller din adgang til din konto, og tab og afkald på alt indhold på din konto. Vi forbeholder os også retten til at nægte brugen af Tjenesterne til enhver af en hvilken som helst grund når som helst. Vi har denne klausul, fordi statistisk set er der mindst én ud af de hundredtusindvis af konti på vores Tjenester, der gør noget skumelt.",
    cancellationContent3:
      "- Verbal, fysisk, skriftlig eller anden form for misbrug (herunder trusler om misbrug eller gengældelse) af virksomhedens medarbejder eller funktionær kan resultere i øjeblikkelig lukning af kontoen.",
    submissionsContent:
      'Du anerkender og accepterer, at eventuelle spørgsmål, kommentarer, forslag, ideer, feedback eller andre oplysninger vedrørende webstedet ("indsendelser"), som du giver os, ikke er fortrolige og bliver vores ejendom. Vi ejer eksklusive rettigheder, herunder alle immaterielle rettigheder, og har ret til ubegrænset brug og formidling af disse indsendelser til ethvert lovligt formål, kommercielt eller andet, uden anerkendelse eller kompensation til dig. Du giver hermed afkald på alle moralske rettigheder til sådanne indsendelser, og du garanterer hermed, at sådanne indsendelser er originale fra dig, eller at du har ret til at indsende sådanne indsendelser. Du accepterer, at der ikke kan gøres krav mod os for påstået eller faktisk krænkelse eller misbrug af nogen ejendomsret i dine indsendelser.',
    uptimeContent1:
      '- Din brug af Tjenesterne sker på eget ansvar. Vi leverer disse Tjenester "som de er" og "som tilgængelige". Vi tilbyder ikke serviceniveauaftaler for de fleste af vores Tjenester, men tager oppetiden for vores applikationer alvorligt.',
    uptimeContent2:
      "- Vi forbeholder os retten til midlertidigt at deaktivere din konto, hvis dit forbrug væsentligt overstiger det typiske forbrug for andre kunder af Tjenesterne. Vi vil naturligvis kontakte dig, før vi foretager os noget, undtagen i sjældne tilfælde, hvor brugsniveauet kan have en negativ indvirkning på Tjenestens ydeevne for andre kunder.",
    uptimeContent3:
      "- Vi tager mange forholdsregler for at beskytte og sikre dine data gennem sikkerhedskopiering, redundans og kryptering. Vi håndhæver kryptering til dataoverførsel over det offentlige internet.",
    uptimeContent4:
      "- Vi bruger tredjepartsleverandører og hostingpartnere til at levere den nødvendige hardware, software, netværk, lagring og relateret teknologi, der kræves for at køre Tjenesterne.",
    siteManagementContent:
      "Vi forbeholder os retten, men ikke forpligtelsen, til at: (1) overvåge webstedet for overtrædelser af disse servicevilkår; (2) tage passende retslige skridt mod enhver, der efter eget skøn overtræder loven eller disse servicevilkår, herunder, men ikke begrænset til, at rapportere en sådan bruger til retshåndhævende myndigheder; (3) efter eget skøn og uden begrænsning, nægte, begrænse adgang til, begrænse tilgængeligheden af eller deaktivere (i det omfang det er teknologisk muligt) dine bidrag eller dele deraf; (4) efter eget skøn og uden begrænsning, varsel eller ansvar, at fjerne fra webstedet eller på anden måde deaktivere alle filer og indhold, der er for store eller på nogen måde er belastende for vores systemer; og (5) på anden måde administrere webstedet på en måde, der er designet til at beskytte vores rettigheder og ejendom og til at fremme webstedets korrekte funktion.",
    copyrightContent1:
      "- Alt indhold, der offentliggøres på Tjenesterne, skal overholde amerikansk ophavsretslovgivning.",
    copyrightContent2:
      "- Vi gør ikke krav på nogen immaterielle rettigheder over det materiale, du leverer til Tjenesterne. Alt materiale, der uploades, forbliver dit.",
    copyrightContent3:
      "- Vi foretager ikke forhåndsscreening af indhold, men forbeholder os retten (men ikke pligten) til efter eget skøn at afvise eller fjerne indhold, der er tilgængeligt via Tjenesten.",
    copyrightContent4:
      "- Navnene, udseendet og følelsen af Tjenesterne er copyright© tilhørende Virksomheden. Alle rettigheder forbeholdes. Du må ikke duplikere, kopiere eller genbruge nogen del af HTML-, CSS-, JavaScript- eller visuelle designelementer uden udtrykkelig skriftlig tilladelse fra Virksomheden. Du skal anmode om tilladelse til at bruge Virksomhedens logo eller eventuelle Tjenestelogoer til reklameformål. Venligst",
    emailUs: "e-mail os",
    copyrightContent5:
      "anmodninger om at bruge logoer. Vi forbeholder os retten til at tilbagekalde denne tilladelse, hvis du overtræder disse servicevilkår.",
    copyrightContent6:
      "- Du accepterer ikke at reproducere, duplikere, kopiere, sælge, videresælge eller udnytte nogen del af Tjenesterne, brugen af Tjenesterne eller adgangen til Tjenesterne uden udtrykkelig skriftlig tilladelse fra Virksomheden.",
    copyrightContent7:
      "- Du må ikke ændre et andet websted på en måde, der fejlagtigt antyder, at det er forbundet med Tjenesterne eller Virksomheden.",
    copyrightContent8:
      "- Vi respekterer andres immaterielle rettigheder. Hvis du mener, at materiale, der er tilgængeligt på eller via webstedet, krænker en ophavsret, du ejer eller kontrollerer, bedes du straks",
    contactUs: "kontakt os",
    copyrightContent9:
      "En kopi af din meddelelse vil blive sendt til den person, der har lagt det materiale op, der er omhandlet i meddelelsen. Vær opmærksom på, at du i henhold til gældende lov kan blive holdt ansvarlig for erstatning, hvis du afgiver væsentlige urigtige oplysninger i en meddelelse. Hvis du derfor ikke er sikker på, at materiale, der findes på eller linkes til af webstedet, krænker din ophavsret, bør du overveje først at kontakte en advokat.",
    prohibitedActivitiesIntro:
      "Du må ikke tilgå eller bruge webstedet til andre formål end det, som vi stiller webstedet til rådighed for. Webstedet må ikke bruges i forbindelse med kommercielle bestræbelser, undtagen dem, der specifikt er godkendt af os.",
    prohibitedActivitiesUserAgreement:
      "Som bruger af webstedet accepterer du ikke at:",
    prohibitedActivity1:
      "- Systematisk hente data eller andet indhold fra webstedet for direkte eller indirekte at oprette eller kompilere en samling, kompilering, database eller fortegnelse uden skriftlig tilladelse fra os.",
    prohibitedActivity2:
      "- Narre, bedrage eller vildlede os og andre brugere, især i forsøg på at få adgang til følsomme kontooplysninger såsom brugeradgangskoder.",
    prohibitedActivity3:
      "- Omgå, deaktivere eller på anden måde forstyrre sikkerhedsrelaterede funktioner på webstedet, herunder funktioner, der forhindrer eller begrænser brugen eller kopieringen af indhold eller håndhæver begrænsninger på brugen af webstedet og/eller indholdet deri.",
    prohibitedActivity4:
      "- Nedgøre, plette eller på anden måde skade os og/eller webstedet efter vores mening.",
    prohibitedActivity5:
      "- Bruge oplysninger indhentet fra webstedet til at chikanere, misbruge eller skade en anden person.",
    prohibitedActivity6:
      "- Gøre ukorrekt brug af vores supporttjenester eller indsende falske rapporter om misbrug eller forseelser.",
    prohibitedActivity7:
      "- Bruge webstedet på en måde, der er uforenelig med gældende love eller regler.",
    prohibitedActivity8:
      "- Deltage i uautoriseret framing af eller linkning til webstedet.",
    prohibitedActivity9:
      "- Uploade eller overføre (eller forsøge at uploade eller overføre) virus, trojanske heste eller andet materiale, herunder overdreven brug af store bogstaver og spamming (kontinuerlig opslag af gentagne tekster), der forstyrrer en parts uafbrudte brug og nydelse af webstedet eller ændrer, forringer, forstyrrer, ændrer eller forstyrrer brugen, funktionerne, driften eller vedligeholdelsen af webstedet.",
    prohibitedActivity10:
      "- Bruge systemet automatisk på enhver måde, f.eks. ved at bruge scripts til at sende kommentarer eller beskeder eller ved at bruge datamining, robotter eller lignende dataindsamlings- og udtrækningsværktøjer.",
    prohibitedActivity11:
      "- Slet meddelelsen om ophavsret eller andre ejendomsrettigheder fra ethvert indhold.",
    prohibitedActivity12:
      "- Forsøg på at udgive dig for at være en anden bruger eller person eller bruge en anden brugers brugernavn.",
    prohibitedActivity13:
      '- Uploade eller overføre (eller forsøge at uploade eller overføre) materiale, der fungerer som en passiv eller aktiv informationsindsamlings- eller transmissionsmekanisme, herunder, men ikke begrænset til, klare grafikudvekslingsformater ("gifs"), 1×1 pixels, web bugs, cookies eller andre lignende enheder (undertiden omtalt som "spyware" eller "passive indsamlingsmekanismer" eller "pcms").',
    prohibitedActivity14:
      "- Forstyrre, afbryde eller skabe en urimelig belastning på webstedet eller de netværk eller tjenester, der er forbundet til webstedet.",
    prohibitedActivity15:
      "- Chikanere, irritere, intimidere eller true nogen af vores medarbejdere eller agenter, der er involveret i at levere nogen del af webstedet til dig.",
    prohibitedActivity16:
      "- Forsøg at omgå eventuelle foranstaltninger på webstedet, der er designet til at forhindre eller begrænse adgang til webstedet eller nogen del af webstedet.",
    prohibitedActivity17:
      "- Kopiere eller tilpasse webstedets software, herunder, men ikke begrænset til, Flash, PHP, HTML, JavaScript eller anden kode.",
    prohibitedActivity18:
      "- Medmindre det er tilladt i henhold til gældende lov, at dechifrere, dekompilere, disassemblere eller reverse engineere nogen af de softwareprogrammer, der omfatter eller på nogen måde udgør en del af webstedet.",
    prohibitedActivity19:
      "- Medmindre det er et resultat af standardbrug af søgemaskiner eller internetbrowsere, bruge, starte, udvikle eller distribuere ethvert automatiseret system, herunder, men ikke begrænset til, enhver spider, robot, snydeværktøj, scraper eller offline-læser, der tilgår webstedet, eller bruge eller starte ethvert uautoriseret script eller anden software.",
    prohibitedActivity20:
      "- Brug en indkøbsagent eller en indkøbsagent til at foretage køb på webstedet.",
    prohibitedActivity21:
      "- Foretage uautoriseret brug af webstedet, herunder indsamling af brugernavne og/eller e-mailadresser på brugere elektronisk eller på anden måde med det formål at sende uopfordrede e-mails eller oprette brugerkonti automatisk eller under falske forudsætninger.",
    prohibitedActivity22:
      "- Bruge webstedet som en del af enhver bestræbelse på at konkurrere med os eller på anden måde bruge webstedet og/eller indholdet til enhver indtægtsgenererende eller kommerciel virksomhed.",
    prohibitedActivity23:
      "- Bruge webstedet til at annoncere eller tilbyde at sælge varer og tjenester.",
    prohibitedActivity24: "- Sælg eller overfør din profil på anden måde.",
    featuresContent1:
      "Vi designer vores tjenester med omhu, baseret på vores egne erfaringer og erfaringerne fra kunder, der deler deres tid og feedback. Der findes dog ikke en service, der tilfredsstiller alle. Vi garanterer ikke, at vores tjenester opfylder dine specifikke krav eller forventninger.",
    featuresContent2:
      "Vi tester også alle vores funktioner, før vi sender dem. Som med al software indeholder vores tjenester uundgåeligt nogle fejl. Vi sporer de fejl, der rapporteres til os, og arbejder på dem, især dem, der er relateret til sikkerhed eller privatliv. Ikke alle rapporterede fejl vil blive rettet, og vi garanterer ikke fuldstændig fejlfri tjenester.",
    correctionsContent1:
      "Der kan være oplysninger på webstedet, der indeholder typografiske fejl, unøjagtigheder eller udeladelser, herunder beskrivelser, priser, tilgængelighed og forskellige andre oplysninger. Vi forbeholder os retten til at rette eventuelle fejl, unøjagtigheder eller udeladelser og til at ændre eller opdatere oplysningerne på webstedet når som helst og uden forudgående varsel.",
    correctionsContent2:
      "Vi kan ikke garantere, at webstedet vil være tilgængeligt til enhver tid. Vi kan opleve hardware-, software- eller andre problemer, eller vi kan være nødt til at udføre vedligeholdelse relateret til webstedet, hvilket resulterer i afbrydelser, forsinkelser eller fejl. Vi forbeholder os retten til at ændre, revidere, opdatere, suspendere, afbryde eller på anden måde modificere webstedet når som helst og af en hvilken som helst grund uden varsel til dig. Du accepterer, at vi ikke har noget ansvar for tab, skade eller ulempe forårsaget af din manglende evne til at få adgang til eller bruge webstedet under nedetid eller ophør af webstedet. Intet i disse servicevilkår skal fortolkes som en forpligtelse for os til at vedligeholde og supportere webstedet eller til at levere rettelser, opdateringer eller udgivelser i forbindelse hermed.",
    userDataContent:
      "Vi opbevarer visse data, som du overfører til webstedet, med det formål at administrere webstedets ydeevne, samt data vedrørende din brug af webstedet. Selvom vi regelmæssigt udfører sikkerhedskopier af data, er du eneansvarlig for alle data, som du overfører, eller som vedrører enhver aktivitet, du har foretaget ved hjælp af webstedet. Du accepterer, at vi ikke har noget ansvar over for dig for tab eller beskadigelse af sådanne data, og du giver hermed afkald på enhver ret til at anlægge sag mod os som følge af et sådant tab eller beskadigelse af sådanne data.",
    privacyPolicyContent1:
      "Vi bekymrer os om databeskyttelse og -sikkerhed. Gennemgå venligst vores",
    privacyPolicy: "Privatlivspolitik",
    privacyPolicyContent2:
      "Ved at bruge webstedet accepterer du at være bundet af vores privatlivspolitik, som er indarbejdet i disse servicevilkår. Vær opmærksom på, at webstedet hostes i USA. Hvis du tilgår webstedet fra en anden region i verden med love eller andre krav vedrørende indsamling, brug eller videregivelse af personoplysninger, der afviger fra gældende love i USA, overfører du dine data til USA gennem din fortsatte brug af webstedet, og du accepterer at få dine data overført til og behandlet i USA.",
    liabilityIntro:
      "Vi nævner ansvar i alle disse vilkår, men for at samle det hele i ét afsnit:",
    liabilityContent:
      "Du forstår og accepterer udtrykkeligt, at Virksomheden ikke er ansvarlig, hverken i henhold til loven eller billighedsretten, over for dig eller nogen tredjepart for direkte, indirekte, tilfældige, tabt fortjeneste, særlige, følgeskader, pønalerstatninger eller eksemplariske skader, herunder, men ikke begrænset til, erstatning for tabt fortjeneste, goodwill, brug, data eller andre immaterielle tab (selvom Virksomheden er blevet underrettet om muligheden for sådanne skader), som følge af: (1) brugen af eller manglende evne til at bruge Tjenesterne; (2) fejl, mangler eller unøjagtigheder i indhold og materialer; (3) personskade eller materiel skade af enhver art, som følge af din adgang til og brug af webstedet; (4) omkostningerne ved anskaffelse af erstatningsvarer og -tjenester som følge af varer, data, oplysninger eller tjenester købt eller erhvervet eller beskeder modtaget eller transaktioner indgået via eller fra Tjenesterne; (5) uautoriseret adgang til eller brug af vores sikre servere og/eller alle personlige oplysninger og/eller finansielle oplysninger lagret deri; (6) afbrydelse eller ophør af transmission til eller fra webstedet; (7) eventuelle fejl, vira, trojanske heste eller lignende, der måtte blive overført til eller via webstedet af tredjeparter, og/eller; (8) eventuelle fejl eller udeladelser i indhold og materialer eller for tab eller skade af enhver art, der opstår som følge af brugen af indhold, der er lagt ud, transmitteret eller på anden måde gjort tilgængeligt via webstedet; (9) udtalelser eller adfærd fra tredjeparter på tjenesten; (10) eller ethvert andet forhold vedrørende disse Servicevilkår eller Tjenesterne, uanset om det er som kontraktbrud, erstatning uden for kontrakt (herunder uagtsomhed, aktiv eller passiv) eller enhver anden ansvarsteori.",
    miscellaneousContent:
      "Disse Servicevilkår og eventuelle politikker eller driftsregler, som vi har offentliggjort på webstedet eller i forbindelse med webstedet, udgør hele aftalen og forståelsen mellem dig og os. Vores undladelse af at udøve eller håndhæve nogen rettighed eller bestemmelse i disse Servicevilkår skal ikke fungere som et afkald på en sådan rettighed eller bestemmelse. Disse Servicevilkår gælder i det videst mulige omfang, det er tilladt ved lov. Vi kan til enhver tid overdrage enhver eller alle vores rettigheder og forpligtelser til andre. Vi er ikke ansvarlige for tab, skade, forsinkelse eller undladelse af at handle forårsaget af årsager uden for vores rimelige kontrol. Hvis nogen bestemmelse eller del af en bestemmelse i disse Servicevilkår anses for at være ulovlig, ugyldig eller ikke-håndhævelig, anses denne bestemmelse eller del af bestemmelsen for at være adskilt fra disse Servicevilkår og påvirker ikke gyldigheden og håndhævelsen af eventuelle resterende bestemmelser. Der er ikke skabt noget joint venture-, partnerskabs-, ansættelses- eller agenturforhold mellem dig og os som følge af disse Servicevilkår eller brug af webstedet. Du accepterer, at disse Servicevilkår ikke vil blive fortolket imod os i kraft af at have udarbejdet dem. Du giver hermed afkald på ethvert forsvar, du måtte have baseret på den elektroniske form af disse Servicevilkår og manglen på underskrift fra parterne heri for at opfylde disse Servicevilkår.",
    contactUsContent1:
      "Hvis du har spørgsmål til nogen af servicevilkårene, bedes du venligst",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funktioner",
    UnlimitedTranscription: "Ubegrænset Transskription",
    BulkUpload: "Masseupload",
    Accuracy: "96% Nøjagtighed",
    Pricing: "Priser",
    UseCases: "Anvendelsestilfælde",
    AllUseCases: "Alle Anvendelsestilfælde",
    Podcasters: "Podcastværter",
    Journalists: "Journalister",
    ContentCreators: "Indholdsskabere",
    Researchers: "Forskere",
    BusinessTeams: "Forretningshold",
    Educators: "Undervisere",
    Resources: "Ressourcer",
    YouTubetoMP4: "YouTube til MP4",
    StartFreeTrial: "Prøv Gratis"
  },
  Footer: {
    des: "Verdens første virkelig ubegrænsede AI-transskriptionstjeneste. Ingen begrænsninger, ingen grænser, bare frihed til at skabe.",
    Features: "Funktioner",
    UseCases: "Anvendelsestilfælde",
    Company: "Virksomhed",
    featureMenus: ["Ubegrænset Transskription", "Masseupload", "96% Nøjagtighed"],
    useCaseMenus: [
          "Alle Anvendelsestilfælde",
          "Podcastværter",
          "Journalister",
          "Indholdsskabere",
          "Forskere",
          "Forretningshold",
          "Undervisere"
        ],
    companyMenus: [
          "Om os",
          "Priser",
          "Privatliv",
          "Vilkår"
        ]
  },
  Index: {
    Hero: {
      badge: 'Ingen mere "Shrinkflation" - Faktisk Ubegrænset',
      h1: "Stop med at betale for begrænsninger:",
      gradient: "Virkelig Ubegrænset AI-transskription",
      subtitle: "Vores AI transskriberer video og konverterer lyd til tekst, behandler 50 filer ad gangen uden månedlige begrænsninger. Transskription, der virkelig skalerer med dig.",
      FreeTrial: "Prøv Gratis - Ingen Kreditkort",
      HowWorks: "Se Hvordan Det Virker",
      Unlimited: "Ubegrænsede Filupload",
      NoCap: "Ingen Månedlig Minutgrænse",
      Hour: "10-Timers Filer Understøttet",
      ExploreUseCases: "Udforsk Anvendelsestilfælde"
    },
    Stats: {
      monthlyMinutes: "Månedlige Minutter",
      fileUploads: "Filupload",
      batchProcessing: "Batchbehandling",
      maxFileLength: "Maks Filvarighed"
    },
    FeaturesGrid: {
      try_now: "Prøv Det Nu",
      no_signup: "Ingen Registrering Kræves",
      experience_unltd: "Oplev virkelig ubegrænset transskription",
      upload_50: "Upload op til 50 filer ad gangen, lige her.",
      no_limits: "Avanceret",
      no_surprises: "AI-transskription",
      transparency: "Ingen Skjulte Begrænsninger, Ingen Overraskelser - Mens andre stille reducerer dine minutter eller skjuler grænser i småt, tror vi på radikal gennemsigtighed",
      feat_unltd: "Faktisk Ubegrænset",
      feat_unltd_desc: 'Ingen "fair use policy" gemt i vilkår. Ingen lagerbegrænsninger forkldt som "ubegrænset." Upload hele dit arkiv, transskriber alt til alle dine lydtransskriptionsbehov. Vi mener det.',
      feat_bulk: "Massuploadfrihed",
      feat_bulk_desc: 'Træt af "3 livstidsimports" eller "10 filer om måneden"? Upload 50 filer ad gangen, så mange gange du har brug for. Perfekt til at bearbejde efterslæb.',
      feat_batch: "Batchbehandling",
      feat_batch_desc: "Bearbejd hele din podcast-sæson på én nat. Upload 50 interviews ad gangen. Lad vores AI arbejde, mens du sover. Vågn op til færdige transskriptioner.",
      feat_accuracy: "96% Nøjagtighed",
      feat_accuracy_desc: "Vores førende AI transskriberer lyd med smart tegnsætning, talerdiarisering for op til 20 talere og håndterer accenter og tekniske udtryk fejlfrit.",
      feat_langs: "100+ Sprog",
      feat_langs_desc: "Transskriber video og lyd på 100+ sprog, oversæt til 249+. Ingen ekstra gebyrer for forskellige sprog. Globalt indhold, én simpel pris.",
      feat_pro: "Professionelle Funktioner",
      feat_pro_desc: "Ord-niveau tidsstempler til præcis lyd-/videopositionering, nøjagtig taleridentifikation selv under hurtige samtaleskift og perfekt formateret tekst med afsnit, sætninger og tegnsætning til let læsning.",
        features: "Funktioner"
    },
    UseCases: {
      built_for: "Massetransskription",
      "heavy_users": "Lyd- & Videotransskription",
      "join_users": 'Bygget til Tunge Brugere Som Dig - Tilslut dig YouTubere, indholdsproducenter og podcast-værter, der er skiftet fra "shrinkflation"-tjenester',
      "podcasters": {
        "title": "Podcast-værter",
        "des": "Upload hele dit bagkatalog. Lav shownoter til hver episode. Ikke mere at vælge hvilke episoder der skal transskriberes."
      },
      "content_creators": {
        "title": "Indholdsproducenter",
        "des": "Omregn din videobibliotek til søgbar tekst ved at bruge vores tjeneste til automatisk at transskribere videofiler. Generer undertekster til alt. Ingen minut-tælling, bare kreativitet."
      },
      "journalists": {
        "title": "Journalister",
        "des": 'Upload alle dine interviews ad gangen. Ikke mere "10 filer om måneden"-barrierer når deadline nærmer sig. Bearbejd alt.'
      },
      researchers: {
        title: "Forskere",
        des: "Transskriber timer af fokusgrupper og interviews. Upload hele din undersøgelse ad gangen. Få nøjagtig taleridentifikation."
      },
      business_teams: {
        title: "Forretningshold",
        des: "Optag hver samtale uden at bekymre dig om grænser. Få AI-indsigter fra alle samtaler, ikke kun et udvalg."
      },
      educators: {
        title: "Undervisere",
        des: "Transskriber hele forelæsningsserier. Gør alt indhold tilgængeligt. Ingen valg mellem kurser pga. minutgrænser."
      }
    },
    Testimonials: {
      title: "Elsket af",
      highlighted_users: "50.000+ brugere",
      subtitle: "Se hvorfor professionelle vælger NeverCap fremfor begrænsede alternativer",
      Mike: {
        "text": "Hold da op, det her virker faktisk! Har lavet en podcast i 3 år og har transskriberet alt manuelt som en idiot. Uploadede 6 afsnit på én gang, og den adskilte mig og min medvært perfekt. Afsnittet fra caféen, jeg troede var ødelagt? Krystalklar transskription. Jeg skal aldrig tilbage til at skrive det her selv.",
        "author": "Mike Rodriguez",
        "role": "Podcastvært"
      },
      Sarah: {
        "text": "Jeg underviser online og havde brug for undertekster til mine videoer. Prøvede 3 andre værktøjer, der enten havde mærkelige begrænsninger eller tog evigheder. Den her... virker bare? Uploadede min spanske forelæsning, fik perfekte undertekster på cirka 2 minutter. Mine studerende med høreproblemer er så glade. Ville ønske, jeg fandt det her før!",
        "author": "Sarah Chen",
        "role": "Onlineunderviser"
      },
      Jessica: {
        "text": "Har brugt dette til mine interviews, og det er vanvittigt, hvor præcist det er. Havde et 2-timers interview i gebrokkent engelsk + spansk, og det fik alt rigtigt, selv tidsstemplerne. Plejede at betale min praktikant $200/måned bare for at transskribere. Det her sparer mig bogstaveligt talt penge hver måned.",
        "author": "Jessica Park",
        "role": "Freelancejournalist"
      }
    },
    PricingPreview: {
      "title": "Transparent prissætning",
      "highlighted_text": "Ingen skjulte begrænsninger",
      "subtitle": "Vælg din plan. Ingen asterisker, ingen småskrift, ingen overraskelser"
    },
    FAQSection: {
      "title": "Ofte stillede",
      "titleHighlight": "Spørgsmål",
      "questions": [
            {
              "q": "AI-transskription",
              "question": "Hvad er AI-transskription, og hvordan virker det?",
              "answer": "AI-transskription er processen med automatisk at konvertere lyd til tekst ved hjælp avanceret kunstig intelligens. Hos NeverCap uploader du blot dine filer, og vores AI transskriberer indholdet med op til 96% nøjagtighed. Vores service er designet til at transskribere videofiler (som MP4, MOV) og lydfiler (som MP3, WAV) til læsbar, redigerbar tekst med talermærkater og tidsstempler."
            },
            {
              "q": "unlimited_policy",
              "question": "Er det virkelig ubegrænset? Hvad er fangsten?",
              "answer": "Ja, det er helt ubegrænset! Ingen månedlige minutgrænser, ingen ekstra gebyrer. De eneste begrænsninger er tekniske: enkelte filer kan være op til 10 timer lange eller 5GB i størrelse, og du kan behandle 50 filer ad gangen. Men du kan uploade så mange batches, du vil, hele måneden."
            },
            {
              "q": "accuracy",
              "question": "Hvor nøjagtig er transskriptionen?",
              "answer": "Vi garanterer 96% nøjagtighed for klar lyd. Vores AI er trænet på millioner af timers diversificeret indhold og håndterer accenter, fagtermer og flere talere exceptionelt godt. For udfordrende lyd hjælper vores smarte forbedringsfunktioner med at forbedre resultaterne."
            },
            {
              "q": "languages",
              "question": "Hvilke sprog understøtter I?",
              "answer": "Vi understøtter transskription i over 100 sprog, herunder engelsk, spansk, mandarin, hindi, arabisk, fransk og mere. Derudover kan du oversætte dine transskriptioner til 249 forskellige sprog, hvilket gør det perfekt til globalt indhold."
            },
            {
              "q": "speed",
              "question": "Hvor hurtig er transskriptionen?",
              "answer": "Lynhurtig! En 1-times lydfil behandles typisk på under 5 minutter. Med batchbehandling kan du uploade 50 filer samtidig og lade dem behandle parallelt. De fleste brugere vågner op og opdager, at hele deres bibliotek er transskriberet over natten."
            },
            {
              "q": "cancellation",
              "question": "Kan jeg annullere når som helst?",
              "answer": "Absolut! Ingen kontrakter, ingen annulleringsgebyrer. Du kan opgradere, nedgradere eller annullere dit abonnement når som helst fra dit dashboard. Hvis du annullerer, beholder du adgang indtil slutningen af din faktureringsperiode."
            },
            {
              "q": "security",
              "question": "Er mine data sikre?",
              "answer": "Din sikkerhed er vores prioritet. Vi er SOC 2-certificerede, bruger 256-bit kryptering til alle data og bruger aldrig dit indhold til at træne vores modeller. Du kan slette dine filer når som helst, og vi sletter dem automatisk efter 30 dage. Overholder GDPR og CCPA."
            },
            {
              "q": "export_formats",
              "question": "Hvilke eksportformater er tilgængelige?",
              "answer": "Download dine transskriptioner i det format, du har brug for: PDF, Word (DOCX), Excel, CSV, SRT-undertekster, ren tekst (TXT) og VTT-undertekster. Perfekt til enhver arbejdsgang."
            },
            {
              "q": "file_formats",
              "question": "Hvilke lyd- og videofiler kan jeg uploade?",
              "answer": "Vi understøtter stort set alle lyd- og videoformater, du vil støde på: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV og mere. Hvis du kan afspille det, kan vi transskribere det."
            }
          ]
    },
    CTASection: {
      "title": "Klar til at bryde fri fra begrænsninger?",
      "subtitle": "Tilslut dig 50.000+ professionelle, der er skiftet til virkelig ubegrænset transskription",
      "button": "Prøv NeverCap gratis",
      "disclaimer": "Ingen kreditkort nødvendigt for gratisplanen • Opgrader når som helst for ubegrænset adgang"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ikke mere "shrinkflation"',
      heroTitleLine1: "Virkelig ubegrænset",
      heroTitleLine2: "AI-transskription",
      heroSubtitle: "Mens Trint begrænser dig til 50 timer og Otter begrænser dig til 10 filer om måneden, leverer vi, hvad vi rent faktisk lover: ubegrænset transskription uden skjulte begrænsninger.",
      primaryCta: "Prøv gratis - Ingen kreditkort",
      secondaryCta: "Se sandheden",
      comparisonBadLabel: "Hvad andre gør",
      comparisonBadTitle: "Skjulte begrænsninger overalt",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Ubegrænset" = 50 timer/måned begrænsning',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 livstidsimports (gratis), 10/måned (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 minutter lagringsbegrænsning",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Maks 30 timer/måned",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Skjult i vilkår & betingelser",
      comparisonGoodLabel: "Hvad vi gør",
      comparisonGoodTitle: "Faktisk ubegrænset",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Ingen månedlige minutbegrænsninger",
      comparisonGoodItem1Text: "nogensinde",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Ubegrænsede filupload",
      comparisonGoodItem2Text: "altid",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Ingen lagringsbegrænsninger",
      comparisonGoodItem3Text: "overhovedet",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 filer batchupload",
      comparisonGoodItem4Text: "når som helst",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Transparent politik",
      comparisonGoodItem5Text: "på forhånd",
      feature1Label: "Ingen begrænsninger",
      feature1TitlePart1: "Transskriber 1.000 timer?",
      feature1TitlePart2: "Samme pris.",
      feature1Description: "Stop med at tælle minutter. Stop med at holde øje med begrænsninger. Uanset om du transskriberer 10 timer eller 10.000 timer om måneden, betaler du den samme flade pris. Ingen ekstra gebyrer. Ingen overraskelsesregninger.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Ingen "fair use"-politikfidus',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ingen hastighedsbegrænsning efter X timer",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ingen månedsslutningsangst",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Månedlige timer",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Overforbrugsgebyrer",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Upload Når Som Helst",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Gennemsigtigt",
      feature2Label: "Bulk Frihed",
      feature2TitlePart1: "Upload Din",
      feature2TitlePart2: "Hele Arkiv",
      feature2Description: "Otter giver dig 3 livstidsimports gratis, 10 om måneden på Pro. Vi giver dig ubegrænset. Upload din podcastbaglog, alle dine interviews, års optagelser. Ingen begrænsninger.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 filer pr. batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-timers filer understøttet",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Behandling mens du sover",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 livstidsimports",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 filer/måned",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 timers/måned loft",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Virkelig Ubegrænset ✓",
      feature3Label: "Socialt Bevis",
      feature3TitlePart1: "Brugere Skifter",
      feature3TitlePart2: "Dagligt",
      feature3Description: '"Jeg betaler $100/år for Otter, og de begrænser mig til 10 filimports om måneden. Det øjeblik der er et alternativ med ubegrænsede imports, er jeg væk!" - Rigtig Reddit-bruger',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000+ brugere skiftede",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Fra Otters "shrinkflation"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Vender aldrig tilbage",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Tilfredse Brugere",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Filer Behandlet",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Nøjagtighed",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Ingen Skjulte Gebyrer",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutter/Måned",
      trustBadge2Number: "100+",
      trustBadge2Label: "Sprog",
      trustBadge3Number: "96%",
      trustBadge3Label: "Nøjagtighed",
      trustBadge4Number: "50",
      trustBadge4Label: "Batch Upload",
      ctaTitle: "Stop Med at Betale for Falsk Ubegrænset",
      ctaSubtitle: "Tilslut dig tusindvis, der er skiftet til virkelig ubegrænset transskription",
      finalCta: "Prøv NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Massesupload Frihed",
      heroTitleLine1: "Upload 50 Filer.",
      heroTitleHighlight: "Behandl Alt.",
      heroSubtitle: "Otter giver dig 3 livstidsimports. TRE. For hele dit liv. Vi giver dig ubegrænset upload, 50 filer ad gangen, når du har brug for det.",
      primaryCta: "Start Massesupload →",
      secondaryCta: "Se Begrænsningerne",
      redditQuote: '"Jeg har 3 års podcastafsnit, der skal transskriberes. Otter fortæller mig, jeg får 3 livstidsimports. TRE. Det er fornærmende."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Ægte frustration fra r/podcasting",
      comparisonSectionTitlePart1: "De",
      comparisonSectionTitleHighlight: "Latterlige Begrænsninger",
      comparisonSectionTitlePart2: "De Påtvinger",
      comparisonSubtitle: "Sådan begrænser konkurrenter din mulighed for at behandle indhold",
      limitCard1Service: "Otter Gratis",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Livstidsimports",
      limitCard1DescriptionLine2: "(Ja, for HELE dit liv)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Filer pr. måned",
      limitCard2DescriptionLine2: "($100/år-plan)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fil ad gangen",
      limitCard3DescriptionLine2: "(Sekventiel upload)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Ubegrænset upload",
      limitCard4DescriptionLine2: "50 filer pr. batch",
      feature1Label: "Batchkraft",
      feature1TitlePart1: "Behandl Dit",
      feature1TitleHighlight: "Hele Arkiv",
      feature1TitlePart2: "På én nat",
      feature1Description: 'Upload 50 filer før sengetid. Vågn op til færdige transskriptioner. Ingen kø, ingen ventetid, ingen "opgrader venligst"-beskeder. Ren behandlingskraft lige ved hånden.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samtidige uploads",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallel behandling",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-timers filer understøttet",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5GB pr. fil maksimum",
      uploadAnimationText1: "50 Filer",
      uploadAnimationText2: "Slip & Behandl",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 flere filer...",
      feature2Label: "Hastighed",
      feature2TitlePart1: "Fra upload til",
      feature2TitleHighlight: "Klar på timer",
      feature2Description: "Vores parallelle behandlingsinfrastruktur betyder, at dine 50 filer ikke venter i kø. De transskriberes alle samtidigt. Hvad der før tog uger, tager nu timer.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-times fil: 5 minutter",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 filer: behandles parallelt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-mail-bekræftelse når færdig",
      timelineStep1Icon: "1",
      timelineStep1Title: "Upload",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Behandling",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-magi",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Færdig",
      timelineStep4Time: "< 2 timer",
      feature3Label: "Frihed",
      feature3TitlePart1: "Ingen køer.",
      feature3TitleHighlight: "Ingen ventetid.",
      feature3TitlePart2: "Ingen begrænsninger.",
      feature3Description: 'Mens andre lader dig vente i virtuelle køer eller opgraderer for "prioriteret behandling," behandler vi hver upload med hast. Dit indhold betyder noget, og det bør ikke vente.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Ingen prioritetsniveauer",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Samme hastighed for alle",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Upload når som helst, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Altid klar",
      feature3VisualSubtext: "Upload når inspirationen rammer",
      useCasesTitlePart1: "Perfekt til",
      useCasesTitleHighlight: "Store uploadere",
      useCasesSubtitle: "Reelle scenarier, hvor masseupload redder dagen",
      useCase1Title: "Podcast-arkiver",
      useCase1Description: "Upload 3 års afsnit på én gang. Lav transskriptioner for hele din bagkatalog. Generer SEO-indhold til hvert afsnit.",
      useCase2Title: "Kursusoprettelse",
      useCase2Description: "Behandl alle dine foredragsvideoer samtidigt. Lav tilgængelige transskriptioner til studerende. Byg søgbare kursusmaterialer.",
      useCase3Title: "Interviewefterslæb",
      useCase3Description: "Ryd den bjerg af ubehandlede interviews. Behandl ugers research på timer. Overhold din deadline uden panik.",
      useCase4Title: "YouTube-bibliotek",
      useCase4Description: "Generer undertekster til hele din kanal. Lav blogindlæg fra videoindhold. Forbedr SEO på alle videoer.",
      useCase5Title: "Mødearkiver",
      useCase5Description: "Upload måneder af optagede møder. Opret søgbare mødenoter. Mist aldrig vigtige beslutninger igen.",
      useCase6Title: "Forskningsdata",
      useCase6Description: "Behandle fokusgrupper i bulk. Transskriber alle deltagerinterviews. Analyser kvalitative data effektivt.",
      ctaTitle: "Stop med at bede om flere uploads",
      ctaSubtitle: "Få ubegrænset bulkbehandling, der faktisk virker",
      finalCta: "Upload 50 filer nu →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Brancheførende nøjagtighed",
      heroTitleLine1: "96% nøjagtighed.",
      heroTitleHighlight: "Hvert ord betyder noget.",
      heroSubtitle: "Brancheførende nøjagtighed på 12 hovedsprog. Ord-niveau tidsstempler til perfekt synkronisering. Smart højttaleridentifikation, der håndterer hurtige samtaler. Professionel formatering, der faktisk er læsevenlig.",
      primaryCta: "Test vores nøjagtighed →",
      secondaryCta: "Se sprog",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Nøjagtighed på",
      statCard1DescriptionLine2: "12 hovedsprog",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Nøjagtighed med",
      statCard2DescriptionLine2: "Accenter & dialekter",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Ord-niveau",
      statCard3DescriptionLine2: "Tidsstempelpræcision",
      languageSectionTitlePart1: "96% nøjagtighed",
      languageSubtitle: "Professionel transskription til globalt indhold",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Engelsk",
      languageCard1Accuracy: "96% nøjagtighed",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spansk",
      languageCard2Accuracy: "96% nøjagtighed",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96% nøjagtighed",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Fransk",
      languageCard4Accuracy: "96% nøjagtighed",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tysk",
      languageCard5Accuracy: "96% nøjagtighed",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japansk",
      languageCard6Accuracy: "96% nøjagtighed",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreansk",
      languageCard7Accuracy: "96% nøjagtighed",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugisisk",
      languageCard8Accuracy: "96% nøjagtighed",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russisk",
      languageCard9Accuracy: "96% nøjagtighed",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiensk",
      languageCard10Accuracy: "96% nøjagtighed",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Hollandsk",
      languageCard11Accuracy: "96% nøjagtighed",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabisk",
      languageCard12Accuracy: "96% nøjagtighed",
      moreLanguagesText: "+ 88 flere sprog understøttet med 95%+ nøjagtighed",
      feature1Label: "Præcision",
      feature1TitlePart1: "Ord-niveau",
      feature1TitleHighlight: "Tidsstempler",
      feature1Description: "Hvert ord er perfekt synkroniseret med dets lydposition. Opret klikbare transskriptioner, generer præcise undertekster, eller hop til nøjagtige øjeblikke i dine optagelser. 100ms præcision, som professionelle stoler på.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms tidsstempelpræcision",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt til videoredigering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikbare interaktive transskriptioner",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Ramme-nøjagtige undertekster",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Taler 1",
      transcriptLine1Text: "Velkommen til dagens podcastafsnit.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Taler 2",
      transcriptLine2Text: "Tak fordi jeg må være med i showet!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Taler 1",
      transcriptLine3Text: "Lad os dykke ned i vores hovedemne...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Taler 2",
      transcriptLine4Text: "Absolut, jeg er spændt på at diskutere dette.",
      feature2Label: "Smart AI",
      feature2TitlePart1: "Håndterer",
      feature2TitleHighlight: "Hurtige samtaler",
      feature2Description: "Vores AI identificerer nøjagtigt talere, selv under overlappende tale, afbrydelser og hurtige frem-og-tilbage-samtaler. Perfekt til interviews, podcasts og møder, hvor talere ofte afbryder.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identificerer op til 20 talere",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Håndterer afbrydelser perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fungerer med overlappende tale",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Opretholder nøjagtighed under krydstale",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Talere identificeret",
      feature2VisualSubtext: "Selv i hurtige samtaler",
      feature3Label: "Læsevenlighed",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formateret tekst",
      feature3Description: "Ikke flere tekstmure. Vores AI tilføjer automatisk afsnit, sætninger og tegnsætning præcis, hvor de hører til. Resultatet? Transskriptioner, der faktisk er behagelige at læse og nemme at skimme.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smarte afsnitsopdelinger",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Præcis tegnsætning",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Korrekt stort begyndelsesbogstav",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Ren, skimmelig output",
      formattingTitle: "Før & efter",
      formattingBeforeLabel: "❌ Andre:",
      formattingBeforeText: "så i dag skal vi tale om de nye funktioner vi har arbejdet på jeg tror du vil synes rigtig godt om dem de er blevet efterspurgt af brugerne i lang tid og vi har endelig fået dem færdige",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Så i dag skal vi tale om de nye funktioner, vi har arbejdet på. Jeg tror, du vil synes rigtig godt om dem. De er blevet efterspurgt af brugerne i lang tid, og vi har endelig fået dem færdige.",
      comparisonSubtitle: "Nøjagtighed",
      comparisonSectionTitle: "Sammenligning",
      comparisonDes: "Se, hvordan vi klarer os i forhold til konkurrencen",
      tableHeader1: "Funktion",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Nøjagtighed (klar lyd)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Ord-niveau tidsstempler",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Taleridentifikation",
      tableRow3NeverCap: "20 talere",
      tableRow3Otter: "16 talere",
      tableRow3Descript: "10 talere",
      tableRow3Rev: "✕",
      tableRow4Feature: "Håndterer krydstal",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begrænset",
      tableRow4Descript: "Begrænset",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart formatering",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Basis",
      tableRow6Feature: "12 sprog på 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Oplev 96% nøjagtighed",
      ctaSubtitle: "Upload din mest udfordrende lyd og se forskellen",
      finalCta: "Test vores nøjagtighed nu →",
        languageSectionTitlePart2: "på 12 hovedsprog"
    }
  },
  Pricing: {
    Hero: {
      "title": "Enkle, gennemsigtige priser",
      "highlighted_text": "Ingen skjulte begrænsninger",
      "description": "Vælg den plan, der passer til dine behov. Opgrader eller nedgrader når som helst. Ingen binding, ingen overraskelser."
    },
    Cards: {
      "title": "Enkle, gennemsigtige priser.",
      "highlighted_text": "Ingen skjulte begrænsninger.",
      "description": "Vælg den plan, der passer til dine behov. Opgrader eller nedgrader når som helst. Ingen binding, ingen overraskelser.",
      "plans": [
            {
              "name": "Gratis",
              "price": "$0",
              "period": "måned",
              "discount": "Perfekt til at prøve vores service",
              "limits": {
                "title": "Daglige begrænsninger",
                "items": [
                  "3 filer/dag (≈90 min totalt/dag)",
                  "Op til 30 min pr. fil (≤250 MB)",
                  "Upload 1 fil ad gangen",
                  "Standard prioritetskø"
                ]
              },
              "features": {
                "title": "Funktioner",
                "items": [
                  "100+ sprog",
                  "Talermærkater",
                  "Oversættelse",
                  "Alle eksportformater"
                ]
              },
              "cta": {
                "text": "Start gratis. Ingen kreditkort.",
                "button": "Nuværende abonnement"
              }
            },
            {
              "name": "Pro Månedlig",
              "price": "$17.99",
              "period": "måned",
              "discount": "$9.99 den første måned",
              "limits": {
                "title": "Ingen månedlig begrænsning",
                "items": [
                  "Ubegrænset antal minutter",
                  "Op til 10 timer / 5 GB pr. fil",
                  "Upload 50 filer på én gang",
                  "Prioritetskø"
                ]
              },
              "features": {
                "title": "Alt i Gratis, plus",
                "items": [
                  "Ord-niveau tidsstempler",
                  "Avanceret talergenkendelse",
                  "Formaterede afsnit & tegnsætning",
                  "Prioriteret support"
                ]
              },
              "cta": {
                "text": "Ubegrænsede minutter. Prioriteret hastighed. Batch-upload.",
                "button": "Bliv Pro"
              },
              "badge": "Mest populære"
            },
            {
              "name": "Pro Årlig",
              "price": "$8,99",
              "period": "måned",
              "discount": "Årlig faktura $107.88",
              "limits": {
                "title": "Samme som Pro Månedlig",
                "items": [
                  "Ubegrænset antal minutter",
                  "Op til 10 timer / 5 GB pr. fil",
                  "Upload 50 filer på én gang",
                  "Prioritetskø"
                ]
              },
              "features": {
                "title": "Alt i Gratis, plus",
                "items": [
                  "Ord-niveau tidsstempler",
                  "Avanceret talergenkendelse",
                  "Formaterede afsnit & tegnsætning",
                  "Prioriteret support"
                ]
              },
              "cta": {
                "text": "Ubegrænsede minutter. Prioriteret hastighed. Batch-upload.",
                "button": "Bliv Pro"
              },
              "badge": "Bedste Værdi - "
            }
          ],
      "disclaimer": '"Ubegrænset" betyder ingen månedlig grænse og ingen kunstig nedbremsning. Fair-use gælder for misbrug af automatisering eller redistribution.'
    },
    ComparisonTable: {
      "header": {
        "title": "Sammenlign",
        "highlighted_text": "Alle funktioner",
        "subtitle": "Se præcis, hvad du får med hver plan. Ingen skjulte begrænsninger."
      },
      "plans": [
              "Funktioner",
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
                  "main": "$17,99/måned",
                  "note": "$9,99 første måned"
                },
                {
                  "main": "$8,99/måned",
                  "note": "Faktureret $107,88/år"
                }
              ]
            },
            {
              "name": "Månedlige minutter",
              "values": ["~2.700 (90/dag)", "Ubegrænset", "Ubegrænset"]
            },
            {
              "name": "Maks filvarighed",
              "values": ["30 minutter", "10 timer", "10 timer"]
            },
            {
              "name": "Maks filstørrelse",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Batch-upload",
              "values": ["1 fil", "50 filer", "50 filer"]
            },
            {
              "name": "Behandlingshastighed",
              "values": ["Standard", "Prioriteret", "Prioriteret"]
            },
            {
              "name": "Understøttede sprog",
              "values": ["100+ sprog", "100+ sprog", "100+ sprog"]
            },
            {
              "name": "Oversættelse",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Taleridentifikation",
              "values": ["Basis", "Avanceret (20 talere)", "Avanceret (20 talere)"]
            },
            {
              "name": "Tidsstempler på ordniveau",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formaterede afsnit",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Eksportformater",
              "values": ["Alle formater", "Alle formater", "Alle formater"]
            },
            {
              "name": "Support",
              "values": ["E-mail", "Prioriteret e-mail", "Prioriteret e-mail"]
            },
            {
              "name": "Databevaring",
              "values": ["30 dage", "For evigt", "For evigt"]
            }
          ]
    },
    FAQ: {
      "title": "Ofte stillede",
      "titleHighligt": "Spørgsmål",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Er det virkelig ubegrænset?",
              "answer": "Ja! Pro-planer har ingen månedlige minutgrænser. De eneste begrænsninger er tekniske: maksimal filvarighed på 10 timer og filstørrelse på 5GB. Du kan behandle så mange filer, du har brug for."
            },
            {
              "q": "plan_change",
              "question": "Kan jeg skifte plan når som helst?",
              "answer": "Absolut! Du kan annullere dit abonnement når som helst fra dit dashboard. Opgrader eller nedgrader, når du har brug for det."
            },
            {
              "q": "payment_methods",
              "question": "Hvilke betalingsmetoder accepterer I?",
              "answer": "Vi accepterer alle større kreditkort, betalingskort og PayPal til sikre og problemfri betalinger."
            },
            {
              "q": "free_trial",
              "question": "Er der en gratis prøveperiode for Pro?",
              "answer": "Ja! Prøv Pro gratis i 7 dage, ingen kreditkort nødvendigt. Plus, få din første måned med 45% rabat, når du abonnerer."
            },
            {
              "q": "file_retention",
              "question": "Hvor længe gemmer I mine filer?",
              "answer": "Gratisplan: 30 dage. Pro-planer: For evigt! Dine transskriptioner er altid tilgængelige i din konto."
            },
            {
              "q": "data_security",
              "question": "Hvad med datasikkerhed?",
              "answer": "Vi er SOC 2-certificerede og bruger 256-bit kryptering. Vi bruger aldrig dit indhold til at træne vores modeller. Dine data tilhører dig."
            }
          ]
    },
    CTA: {
      "title": "Klar til at gå Unlimited?",
      "subtitle": "Tilslut dig 50.000+ professionelle der transkriberer uden grænser",
      "button": "Prøv NeverCap Gratis →",
      "disclaimer": "Ingen kreditkort nødvendigt • Start transkribering på sekunder"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Bygget til",
      heavyUsers: "Hårde brugere",
      whoActuallyNeed: "Som virkelig har brug for ubegrænset",
      heroSubtitle: "Fra podcasters med årsbagudlæg til forskere med hundredvis af interviews. Se hvordan professionelle bruger NeverCap til at bryde fri fra uploadbegrænsninger og minutlofter.",
      podcasters: {
        title: "Podcast-værter",
        pain: '"Stop med at vælge, hvilke episoder der fortjener transskriptioner"',
        description: "Upload hele dit podcastarkiv på én gang. Generer shownoter, forbedr SEO og genanvend indhold uden at tælle minutter.",
        benefits: {
          benefit1: "Upload alle episoder, ikke kun 3",
          benefit2: "Generer SEO-venlige shownoter",
          benefit3: "Opret søgbare arkiver",
          benefit4: "Genanvend som blogindhold"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episoder"
          },
          stat2: {
            number: "200 timer",
            label: "Sparet"
          },
          stat3: {
            number: "3x",
            label: "SEO-trafik"
          }
        }
      },
      journalists: {
        title: "Journalister & Forfattere",
        pain: '"Deadline-press møder uploadbegrænsninger"',
        description: "Upload alle interviews i batch før deadline. Søg i transskriptioner med det samme og gå aldrig glip af et afgørende citat.",
        benefits: {
          benefit1: "Batch-upload før deadlines",
          benefit2: "Søg alle interviews på én gang",
          benefit3: "Præcise citater med tidsstempler",
          benefit4: "Håndter accenter & sprog"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Interviews/md."
          },
          stat2: {
            number: "96%",
            label: "Nøjagtighed"
          },
          stat3: {
            number: "5 min.",
            label: "Pr. time"
          }
        }
      },
      contentCreators: {
        title: "Indholdsskabere",
        pain: '"Tilgængelighed bør ikke være dyrt"',
        description: "Tekst hele din YouTube-kanal. Generer undertekster på flere sprog og forbedr din video-SEO med det samme.",
        benefits: {
          benefit1: "Tekst alle videoer på én gang",
          benefit2: "249 sprogoversættelser",
          benefit3: "YouTube-klar SRT-filer",
          benefit4: "Forbedr video-SEO-rangering"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videoer"
          },
          stat2: {
            number: "100+",
            label: "Sprog"
          },
          stat3: {
            number: "249",
            label: "Oversættelser"
          }
        }
      },
      researchers: {
        title: "Forskere & Akademikere",
        pain: '"Kvalitative data bør ikke stå i kø"',
        description: "Behandl hele forskningsstudier på én gang. Håndter fokusgrupper, interviews og paneldiskussioner med perfekt talergenkendelse.",
        benefits: {
          benefit1: "Behandl fokusgrupper i bulk",
          benefit2: "20-talergenkendelse",
          benefit3: "Eksportér til analysesoftware",
          benefit4: "GDPR-kompatibel sikkerhed"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studie"
          },
          stat2: {
            number: "96%",
            label: "Gruppens nøjagtighed"
          },
          stat3: {
            number: "GDPR",
            label: "Overholdelse"
          }
        }
      },
      businessTeams: {
        title: "Forretningshold",
        pain: '"Mødeoptagelser bør være problemfrie"',
        description: "Optag møder direkte eller upload lydfiler til øjeblikkelig transskription. Byg søgbare arkiver fra ubegrænsede samtaler og mist aldrig vigtige diskussioner igen.",
        benefits: {
          benefit1: "Direkte lydoptagelse & transskription",
          benefit2: "Ubegrænsede mødeoptagelser",
          benefit3: "Søgbart mødearkiv",
          benefit4: "Upload lydfiler med det samme"
        },
        stats: {
          stat1: {
            number: "Live",
            label: "Optagelse"
          },
          stat2: {
            number: "Øjeblikkelig",
            label: "Upload"
          },
          stat3: {
            number: "20+",
            label: "Talere"
          }
        }
      },
      educators: {
        title: "Undervisere",
        pain: '"YouTube-videoer har brug for øjeblikkelig transskription"',
        description: "Indsæt blot YouTube-links for at få øjeblikkelige transskriptioner og automatisk genererede undertekster. Gør enhver undervisningsvideo tilgængelig og søgbar.",
        benefits: {
          benefit1: "Direkte YouTube-link transskription",
          benefit2: "Auto-generer videoundertekster",
          benefit3: "Transskriber hele kurser",
          benefit4: "Søgbare foredragarkiv"
        },
        stats: {
          stat1: {
            number: "1-Klik",
            label: "YouTube Indsæt"
          },
          stat2: {
            number: "Auto",
            label: "Undertekster"
          },
          stat3: {
            number: "100+",
            label: "Sprog"
          }
        }
      },
      quotes: {
        title: "Rigtige Brugere,",
        titleHighlight: "Rigtig Frihed",
        subtitle: "Hør fra professionelle, der brød fri fra kunstige begrænsninger",
        testimonials: {
          mike: {
            textBefore: '"Jeg havde',
            highlight: "3 års afsnit",
            textAfter: 'som ikke var transskriberet. Otter ville have mig til at vælge 3. TRE. NeverCap lod mig uploade alle 150 afsnit på en weekend."',
            name: "Mike Rodriguez",
            role: "Podcastvært"
          },
          jessica: {
            textBefore: '"Som freelancejournalist har jeg ikke råd til Trints',
            highlight: "$100/måned",
            textAfter: ', men jeg kan heller ikke arbejde med Otters grænse på 10 filer om måneden. NeverCap reddede min karriere."',
            name: "Jessica Park",
            role: "Freelancejournalist"
          },
          sarah: {
            textBefore: '"Vores forskerhold havde',
            highlight: "200 timer",
            textAfter: 'med fokusgruppeoptagelser. Vi behandlede alt på en weekend i stedet for at rationere månedlige minutter."',
            name: "Dr. Sarah Chen",
            role: "Forskningsleder"
          },
          carlos: {
            textBefore: '"Jeg laver undervisningsindhold på spansk. NeverCap transskriberer perfekt og',
            highlight: "oversætter til engelsk",
            textAfter: 'for større rækkevidde. Ingen begrænsninger, kun vækst."',
            name: "Carlos Martinez",
            role: "YouTube Educator"
          }
        }
      },
      industries: {
        title: "Betroet på tværs af",
        titleHighlight: "Brancher",
        subtitle: "Professionelle overalt skifter til virkelig ubegrænset",
        list: {
          media: "Medier & Forlag",
          education: "Uddannelse",
          healthcare: "Sundhedssektoren",
          technology: "Teknologi",
          finance: "Finans",
          legal: "Juridisk"
        }
      },
      cta: {
        title: "Din brugssituation har også brug for ubegrænset",
        subtitle: "Tilslut dig 50.000+ professionelle, der stoppede med at tælle minutter og begyndte at skabe",
        button: "Start din ubegrænsede rejse →"
      }
    },
    Podcasters: {
      badge: "Skabt til Podcast-værter",
      heroTitle: "Transkriber din",
      heroTitleHighlight: "Hele podcastarkiv",
      heroSubtitle: "Upload hele din bagkatalog. Opret shownoter til hver episode. Ikke mere at vælge hvilke episoder der skal transkriberes.",
      ctaPrimary: "Start gratis transkribering",
      ctaSecondary: "Se hvordan det virker",
      trustBadge1: "10.000+ Podcast-værter",
      trustBadge2: "Ubegrænsede episoder",
      trustBadge3: "SEO-klar transskription",
      stats: {
        stat1: {
          number: "∞",
          label: "Episoder/Måned"
        },
        stat2: {
          number: "50",
          label: "Batch-upload"
        },
        stat3: {
          number: "10 timer",
          label: "Maks. episodelængde"
        },
        stat4: {
          number: "96%",
          label: "Nøjagtighed"
        }
      },
      problemTitle: "Det",
      problemTitleHighlight: "Podcast-transskriptionsproblem",
      problemSubtitle: 'Andre tjenester tvinger dig til at vælge hvilke episoder der er "værd" at transkribere',
      problems: {
        problem1: {
          title: "Uploadbegrænsninger dræber arkiver",
          description: "Otter giver dig 3 livstidsimports gratis, 10 om måneden på Pro. Hvordan transkriberer du 3 års episoder?"
        },
        problem2: {
          title: "Manglende SEO-muligheder",
          description: "Hver utranskriberet episode er mistet SEO-trafik. Men Descript begrænser dig til højst 30 timer/måned."
        },
        problem3: {
          title: "Omkostninger eksploderer med vækst",
          description: "Når din podcast vokser, eksploderer transskriptionsomkostningerne. $2/time overforbrug gør skalering umulig."
        }
      },
      solutionTitle: "Det",
      solutionTitleHighlight: "NeverCap-løsning",
      solutionDescription: "Sand ubegrænset transskription. Upload hele dit arkiv. Transkriber hver nye episode. Generer shownoter i stor skala. Ingen begrænsninger, bare vækst.",
      workflowTitle: "Din podcastarbejdsgang,",
      workflowTitleHighlight: "Forenklet",
      workflowSubtitle: "Fra optagelse til SEO-optimerede shownoter på få minutter",
      workflow: {
        step1: {
          title: "Upload episoder",
          description: "Slip 50 episoder på én gang. MP3, MP4, WAV - vi håndterer dem alle."
        },
        step2: {
          title: "AI-transskription",
          description: "96% nøjagtighed med taleridentifikation. Perfekt til interviews."
        },
        step3: {
          title: "Smart formatering",
          description: "AI tilføjer automatisk afsnit, sætninger og tegnsætning."
        },
        step4: {
          title: "Publicer & Rangér",
          description: "Eksporter til din hjemmeside. Se din SEO-trafik vokse."
        }
      },
      featuresTitle: "Funktioner Podcastere",
      featuresTitleHighlight: "Faktisk Har Brug For",
      featuresSubtitle: "Lavet af podcastere, til podcastere",
      features: {
        feature1: {
          title: "Multi-talerkendelse",
          description: "Registrerer og mærker automatisk op til 20 talere. Perfekt til paneldebatter, interviews og co-hostede shows."
        },
        feature2: {
          title: "Tidsstempelkapitler",
          description: "Generér klikbare tidsstempler til YouTube-beskrivelser. Lad lyttere hoppe til deres yndlingssegmenter med det samme."
        },
        feature3: {
          title: "Smart Formatering",
          description: "Tilføjer automatisk afsnit, sætninger og tegnsætning. Få rene, læsevenlige transskriptioner. Spar timer på postproduktion."
        },
        feature4: {
          title: "SEO-optimering",
          description: "Transskriptioner formateret til søgemaskiner. Øg din podcasts synlighed og nå nye lyttere."
        },
        feature5: {
          title: "100+ Sprog",
          description: "Transskriber på ethvert sprog. Oversæt til 249+ sprog. Nå globale publikummer uden besvær."
        },
        feature6: {
          title: "Batchbehandling",
          description: "Upload 50 episoder før sengetid. Vågn op til færdige transskriptioner. Behandl hele dit arkiv på én nat."
        }
      },
      testimonialsTitle: "Podcastere Der Skiftede",
      testimonialsTitleHighlight: "Til NeverCap",
      testimonialsSubtitle: "Ægte historier fra ægte podcastere",
      testimonials: {
        mike: {
          text: '"Jeg har lavet en podcast i 3 år og transskriberede alt manuelt som en idiot. Uploadede 6 episoder på én gang og den adskilte mig og min co-host perfekt. Café-episoden jeg troede var ødelagt? Krystalklart transskript. Jeg skal aldrig selv skrive det her igen."',
          name: "Mike Rodriguez",
          role: 'Vært på "The Daily Grind" Podcast'
        },
        sarah: {
          text: '"Otter begrænsede mig til 10 filimports om måneden. Jeg havde 150 episoder i baglog. NeverCap lod mig uploade alt i 3 portioner. Min organiske trafik er steget 300% siden jeg tilføjede transskriptioner til gamle episoder. Dette betaler bogstaveligt talt for sig selv."',
          name: "Sarah Chen",
          role: 'Skaber af "Tech Talks Today"'
        }
      },
      comparisonTitle: "Hvorfor Podcastere Vælger",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Se hvordan vi måler os mod konkurrenterne",
      comparison: {
        headers: {
          feature: "Funktion",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Månedlig Episodegrænse",
            nevercap: "Ubegrænset",
            otter: "~13 episoder (1200 min)",
            descript: "~30 episoder (30 timer)"
          },
          uploadLimit: {
            feature: "Filuploadgrænse",
            nevercap: "Ubegrænset",
            otter: "10 pr. måned",
            descript: "1 ad gangen"
          },
          batchProcessing: {
            feature: "Batchbehandling",
            nevercap: "50 filer",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksimal Episodelængde",
            nevercap: "10 timer",
            otter: "90 minutter",
            descript: "Ubegrænset"
          },
          speakerDetection: {
            feature: "Talergenkendelse",
            nevercap: "20 talere",
            otter: "16 talere",
            descript: "10 talere"
          },
          smartFormatting: {
            feature: "Smart Formatering",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Pris",
            nevercap: "$17.99/md",
            otter: "$16.99/md",
            descript: "$30/md"
          }
        }
      },
      ctaTitle: "Start Transskribering af Hver Episode",
      ctaSubtitle: "Tilslut dig 10.000+ podcasters, der aldrig bekymrer sig om begrænsninger",
      ctaButton: "Upload Dine Første 50 Episoder Gratis →",
      ctaDisclaimer: "Ingen kreditkort nødvendig • Behandle ubegrænsede episoder • Annuller når som helst"
    },
    Journalists: {
      hero: {
        badge: "Til Journalister & Forfattere",
        title: "Transskriber Hvert Interview.",
        titleHighlight: "Gå Aldrig Glip af et Citat.",
        subtitle: "Stop med at vælge, hvilke interviews der fortjener transskription. Upload alle optagelser på én gang, søg på tværs af alt med det samme, og overhold dine deadlines uden upload-angst.",
        ctaPrimary: "Start Ubegrænset Upload →",
        ctaSecondary: "Se Hvordan Det Virker",
        stats: {
          uploads: {
            number: "∞",
            label: "Filupload"
          },
          accuracy: {
            number: "96%",
            label: "Nøjagtighed"
          },
          speed: {
            number: "5 min",
            label: "Pr. Time"
          }
        },
        dashboard: {
          title: "Interviewkø",
          status: "• Alt Behandling",
          interviews: {
            cityCouncil: {
              title: "Byrådsmøde",
              duration: "2t 15min • Uploader...",
              action: "Behandling"
            },
            expertInterview: {
              title: "Ekspertinterview - Dr. Chen",
              duration: "45min • Transskriberer...",
              action: "96% Færdig"
            },
            pressConference: {
              title: "Pressekonference",
              duration: "1t 30min • Klar",
              action: "Se →"
            },
            phoneInterview: {
              title: "Telefoninterview - Kilde",
              duration: "35min • Klar",
              action: "Se →"
            }
          }
        }
      },
      problem: {
        title: "Det",
        titleHighlight: "Journalistiske Transskriptionsproblem",
        subtitle: 'Andre tjenester tvinger dig til at vælge, hvilke interviews der er "værd" at transskribere',
        problems: {
          uploadLimits: {
            title: "Uploadbegrænsninger Dræber Undersøgelser",
            description: "Otter giver dig 10 filimport pr. måned på Pro. Hvordan transskriberer du 3 uger med undersøgelsesinterviews?"
          },
          missingQuotes: {
            title: "Mangler Afgørende Citater",
            description: "Hvert utransskriberet interview kunne indeholde historiens nøglecitat. Men Trint begrænser dig til højst 50 timer/måned."
          },
          costExplosion: {
            title: "Omkostninger Eksploderer med Deadlines",
            description: "Når din undersøgelse uddybes, skynder transskriptionsomkostningerne sig. $100/måned i overforbrug gør breaking news umuligt."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap-løsningen",
          description: "Sand ubegrænset transskription. Upload hele din undersøgelse. Transskriber hvert interview. Søg alle citater med det samme. Ingen begrænsninger, bare journalistik."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Bedste interviewtransskriptionssoftware",
        titleSuffix: "til journalister",
        subtitle: "Reelle fordele der betyder noget, når deadlines er stramme og nøjagtighed er alt",
        solutions: {
          unlimitedUploads: {
            label: "Ubegrænset volumen",
            title: "Ubegrænset volumen til alle dine interviews",
            description: "I modsætning til software med minutbegrænsninger kan du transskribere hvert interview, fra en hurtig snak til en flertimers diskussion. Bekymre dig aldrig for at løbe tør for kredit ved en deadline.",
            points: {
              simultaneousUpload: "Ingen månedlige minutbegrænsninger",
              noLimits: "Understøttelse af 10-timers interviews",
              processWhileWrite: "Behandl hele undersøgelser på én gang",
              longRecordings: "10-timers optagelser understøttes"
            },
            visual: {
              number: "∞",
              label: "Ingen begrænsninger. Aldrig."
            }
          },
          instantSearch: {
            label: "Lynhurtig hastighed",
            title: "Hastighed der matcher din nyhedscyklus",
            description: "Få din interviewtransskription tilbage på minutter, ikke dage. Lav historier hurtigere end nogensinde. Vores AI behandler timers lyd, mens du tager en kop kaffe.",
            points: {
              searchAll: "5-minutters behandlingstid for 1-times interviews",
              wordTimestamps: "Prioriteret behandling af presserende historier",
              jumpToMoments: "Realtids sporing af fremskridt"
            },
            searchDemo: {
              placeholder: "5 min",
              resultsText: "Pr. times lyd",
              results: {
                mayorInterview: '"...vores klimapolitik vil forandre sig..."',
                expertPanel: '"...den politiske erklæring viser tydeligt..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Citatklar nøjagtighed",
            title: "Nøjagtighed du kan citere",
            description: "Vores AI leverer højt nøjagtige transskriptioner, der sikrer, at de citater du offentliggør er præcise og pålidelige. Professionel transskription som redaktører stoler på.",
            points: {
              accuracyGuarantee: "96% nøjagtighedsgaranti",
              handlesAccents: "Håndterer teknisk terminologi",
              smartPunctuation: "Perfekt taleridentifikation"
            },
            visual: {
              accuracy: "96%",
              label: "Publiceringsklar nøjagtighed",
              transcript: {
                speaker1: '"Undersøgelsen afslørede betydelige uoverensstemmelser i de finansielle rapporter."',
                speaker2: '"Kan du uddybe disse specifikke uoverensstemmelser?"'
              }
            }
          },
            ironclad: {
                  label: "Kildebeskyttelse",
                  title: "Jernfast kildebeskyttelse",
                  description: "Vi tilbyder robuste sikkerhedsfunktioner til at beskytte dine følsomme interviewdata og fortrolige kilder. Bankniveau kryptering sikrer dine undersøgelser.",
                  points: {
                    accuracyGuarantee: "End-to-end-kryptering",
                    handlesAccents: "Automatiske filsletningsmuligheder",
                    smartPunctuation: "GDPR & privatlivskompatibel"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maksimal sikkerhed"
                  }
                }
        }
      },
      features: {
        title: "Alt hvad en",
        titleHighlight: "Journalist har brug for",
        subtitle: "Professionelle værktøjer der respekterer din arbejdsgang",
        featuresList: {
          languages: {
            title: "100+ sprog",
            description: "Interview kilder globalt på 12 hovedsprog med 96% nøjagtighed."
          },
          exportFormats: {
            title: "Eksportformater",
            description: "Word, PDF, SRT, TXT. Kompatibel med enhver arbejdsgang."
          },
          sourceProtection: {
            title: "Kildebeskyttelse",
            description: "Bankniveau kryptering. Dine kilder forbliver fortrolige."
          },
          timestamps: {
            title: "Tidsstempler",
            description: "Klik på enhver citat for at hoppe til det præcise lydøjeblik."
          },
          teamSharing: {
            title: "Teamdeling",
            description: "Samarbejd med redaktører. Del transskriptioner sikkert."
          },
          mobileReady: {
            title: "Mobilklar",
            description: "Upload fra telefon. Gennemgå transskriptioner hvor som helst."
          },
          smartFormatting: {
            title: "Smart Formatering",
            description: "Automatiske afsnit og tegnsætning til læsevenlige transskriptioner."
          },
          batchProcessing: {
            title: "Batchbehandling",
            description: "Upload 50 filer på én gang. Behandl om natten, mens du sover."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Jeg havde 3 års interviews, der ikke var transskriberet på grund af uploadbegrænsninger. NeverCap lod mig behandle alt på én weekend. Et vendepunkt.",
          name: "Jessica Park",
          role: "Freelancejournalist, Tidligere Otter-bruger"
        }
      },
      cta: {
        title: "Start Transskription",
        titleHighlight: "Uden Grænser",
        subtitle: "Tilslut dig tusindvis af journalister, der stoppede med at tælle uploads og begyndte at fokusere på historier",
        ctaPrimary: "Prøv Unlimited Gratis →",
        ctaSecondary: "Se Priser"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Til Indholdsskabere",
        title: "Transskriber YouTube-videoer,",
        titleHighlight: "Uden Grænser",
        titleSuffix: "1",
        subtitle: "Uanset om du skal transskribere en YouTube-video, transskribere en TikTok-video til genbrug eller finde ud af, hvordan du transskriberer en Facebook-video til tekst, håndterer vores platform det hele problemfrit. Generer undertekster på 100+ sprog uden månedlige begrænsninger – kun ren kreativ frihed.",
        ctaPrimary: "Start Unlimited Undertekstning →",
        ctaSecondary: "Se Hvordan Det Virker",
        stats: {
          videos: {
            number: "∞",
            label: "Videoer/Måned"
          },
          languages: {
            number: "100+",
            label: "Sprog"
          },
          accuracy: {
            number: "96%",
            label: "Nøjagtighed"
          },
          platforms: {
            number: "10+",
            label: "Platforme"
          }
        }
      },
      platforms: {
        title: "Hent & Transskriber fra Enhver Platform",
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
          titleMax: "Transskriber Videoer fra",
          titleMaxHighlight: "Enhver Platform"
    },
      features: {
        title: "Alt hvad du har brug for til at",
        titleHighlight: "Skaler Indhold",
        subtitle: "Professionelle værktøjer uden professionelle begrænsninger",
        oneClickImport: {
          label: "One-Click Import",
          title: "Transskriber YouTube, TikTok &",
          titleHighlight: "Instagram-videoer ved at indsætte et link",
          description: "Vores værktøj forenkler transskription af videoindhold. For at transskribere en Instagram-video, indsæt blot linket. Det samme gælder for Vimeo-videoer. Bearbejd hele din kanals baglog på en weekend.",
          points: {
            directYoutube: "Direkte YouTube-link transskription",
            multiplePlatforms: "Hent fra 10+ platforme",
            batchPlaylists: "Batchbehandling af hele afspilningslister",
            autoSync: "Auto-synkronisering med dine kanaler"
          },
          demo: {
            instruction: "Indsæt din video-URL:",
            url: "https://youtube.com/watch?v=...",
            status: "Henter & Transskriberer..."
          }
        },
        globalReach: {
          label: "Global Rækkevidde",
          title: "100+ Sprog.",
          titleHighlight: "Ingen Begrænsninger.",
          description: "Ræk ud til et globalt publikum med automatisk oversættelse til 100+ sprog. Generer undertekster på flere sprog samtidig. Ingen ekstra omkostninger, ingen månedlige loft for oversættelser.",
          points: {
            highAccuracy: "96% nøjagtighed på 12 hovedsprog",
            unlimitedTranslations: "Ubegrænsede oversættelser inkluderet",
            multicultural: "Perfekt til multikulturelt indhold",
            autoDetect: "Auto-genkendelse af kildesprog"
          },
          visual: {
            number: "100+",
            title: "Understøttede Sprog",
            subtitle: "Oversæt én gang, nå alle"
          }
        },
        flexibleExport: {
          label: "Fleksibel Eksport",
          title: "Alle Formater",
          titleHighlight: "Du Har Brug For",
          description: "Eksporter i det format, der passer til din arbejdsproces. Fra SRT-filer til YouTube til VTT til webafspillere eller redigerbare dokumenter til manuskripter. Alle eksporter ubegrænsede, alle inkluderet i enhver plan.",
          points: {
            videoFormats: "SRT & VTT til videoplatforme",
            editingFormats: "DOCX & PDF til redigering",
            dataAnalysis: "CSV til dataanalyse",
            simpleScripts: "TXT til enkle manuskripter"
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
        title: "Fra Upload til",
        titleHighlight: "Offentliggjort",
        titleSuffix: "på Minutter",
        subtitle: "Den hurtigste måde at undertekste hele dit indholdsbibliotek på",
        steps: {
          pasteLinks: {
            title: "Indsæt Links",
            description: "Drop YouTube, TikTok eller ethvert videolink. Eller upload filer direkte."
          },
          autoTranscribe: {
            title: "Auto-Transskribering",
            description: "AI behandler med 96% nøjagtighed. Håndterer accenter & flere talere."
          },
          editTranslate: {
            title: "Rediger & Oversæt",
            description: "Perfektionér dine undertekster. Oversæt til 100+ sprog med det samme."
          },
          exportPublish: {
            title: "Eksporter & Offentliggør",
            description: "Download i ethvert format. Upload til din platform. Færdig!"
          }
        }
      },
      testimonials: {
        title: "Skabere Skifter",
        titleHighlight: "Dagligt",
        subtitle: "Fra begrænsede planer til ubegrænset frihed",
        carlos: {
          textBefore: "Jeg laver uddannelsesindhold på spansk. NeverCap transskriberer perfekt og",
          textAfter: "for større rækkevidde. Ingen begrænsninger, kun vækst. Mine kanalvisninger steg 3x efter tilføjelse af flersprogede undertekster.",
          highlight: "oversættes til engelsk",
          name: "Carlos Martinez",
          role: "YouTube-underviser • 250K abonnenter"
        },
        sarah: {
          textBefore: "Descript ville have $30/måned for",
          textAfter: ". Jeg har 500+ videoer i baglog. NeverCap lod mig behandle alt på én weekend. SEO-gevinsten fra underteksterne betalte for sig selv i den første måned.",
          highlight: "30 timer",
          name: "Sarah Lee",
          role: "Lifestyle-vlogger • 180K abonnenter"
        },
        jake: {
          textBefore: "Dette",
          textAfter: "funktionen er en game-changer. Jeg downloader ikke længere noget. Bare indsæt, transskriber, færdig. Behandling af mine podcastklip til TikTok har aldrig været nemmere.",
          highlight: "direkte YouTube-hentning",
          name: "Jake Wilson",
          role: "Podcast-vært • Top 1% skaber"
        },
        yuki: {
          textBefore: "Jeg skaber indhold på 5 sprog. Andre tjenester tager",
          textAfter: ". NeverCap giver mig ubegrænsede oversættelser. Min internationale publikum voksede med 400% siden jeg begyndte at bruge rigtige native undertekster.",
          highlight: "pr. oversættelse",
          name: "Yuki Tanaka",
          role: "Gaming-skaber • 500K abonnenter"
        }
      },
      cta: {
        title: "Hele Din Kanal. Undertekstet. I Dag.",
        subtitle: "Tilslut dig 50.000+ skabere, der stoppede med at tælle minutter og begyndte at skabe",
        button: "Start Ubegrænset Undertekstning →"
      },
        FAQSection: {
              "title": "Dine Transskriptionsspørgsmål,",
              "titleHighlight": "Besvaret",
              subtitle: "Alt hvad du behøver at vide om at transskribere videoer fra forskellige platforme",
              "questions": [
                    {
                      "question": "Q: Hvordan transskriberer jeg en YouTube-video med NeverCap?",
                      "answer": "Det er enkelt. Find bare den YouTube-video, du vil transskribere, kopier dens URL, og indsæt den i vores app. Vores AI vil automatisk hente videoen og levere en fuld teksttransskription på få minutter."
                    },
                    {
                      "question": "Q: Hvad er den bedste måde at transskribere en Facebook-video til tekst?",
                      "answer": "Den nemmeste måde er at bruge et direkte link. Kopier URL'en for Facebook-videoen, og vores platform håndterer resten, konverterer talen til tekst med op til 96% nøjagtighed og sparer dig for manuel transskription."
                    },
                    {
                      "question": "Q: Kan jeg transskribere TikTok- og Instagram-videoer?",
                      "answer": "Absolut. Vi understøtter transskription for både TikTok- og Instagram-videoer. Dette er perfekt til indholdsskabere, der vil genbruge deres kortformatsvideoindhold til blogindlæg, artikler eller tekstbaserede sociale medieopdateringer."
                    },
                    {
                      "question": "Q: Hvordan transskriberer jeg en Vimeo-video til tekst?",
                      "answer": "Transskription af Vimeo-videoer er lige så nemt som på enhver anden platform. Bare kopier Vimeo-videoens URL og indsæt den i NeverCap. Vores AI behandler videoen og genererer en præcis teksttransskription, som du kan downloade i flere formater."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Bygget til Akademisk Excellence",
      heroTitle1: "Transskriber Hvert Interview.",
      heroTitle2: "Analyser Alle Dine Data.",
      heroSubtitle: "Stop med at vælge hvilke fokusgrupper der skal transskriberes. Behandl alle dine kvalitative data med 96% nøjagtighed og fejlfri taleridentifikation - selv med 20 deltagere der taler over hinanden.",
      heroCtaPrimary: "Prøv Gratis - Ingen Kreditkort",
      heroCtaSecondary: "Se Hvordan Det Virker",
      statsInterviewHours: "Interviewtimer",
      statsAccuracy: "Nøjagtighed",
      statsSpeakersId: "Taler-ID",
      statsCompliant: "Overensstemmende",
      problemTitle: "Dette",
      problemSubtitle: 'Andre tjenester får dig til at vælge hvilke data der er "værd" at transskribere',
      problemCard1Title: "Uploadbegrænsninger Dræber Studier",
      problemCard1Desc: "Otter giver dig 3 livstidsimports. Hvordan transskriberer du 200 timers fokusgrupper?",
      problemCard2Title: "Manglende Kritisk Data",
      problemCard2Desc: "Hvert utransskriberet interview kunne indeholde banebrydende indsigter. Men Rev tager minimum $2/minut.",
      problemCard3Title: "Tilskudspenge Forsvinder",
      problemCard3Desc: "Når din datasæt vokser, eksploderer transskriptionsomkostningerne. $500 pr. fokusgruppe gør skalering umulig.",
      solutionTitle: "NeverCap Løsning",
      solutionDesc: "Sand ubegrænset transskription. Upload hele din undersøgelse. Transskriber hvert interview. Analyser alle dine data. Ingen begrænsninger, bare forskning.",
      feature1Label: "Ingen Grænser",
      feature1Title: "Håndter dit",
      feature1Desc: 'Upload alle 200 timers interviews i aften. Vågn op til færdige, søgbare transskriptioner. Ingen månedlige begrænsninger, ingen filgrænser, ingen "fair use" BS.',
      feature1Point1: "Batch-upload 50 filer samtidig",
      feature1Point2: "Behandl længdesnitstudier helt",
      feature1Point3: "Ingen lagringsbegrænsninger på transskriptioner",
      feature1Point4: "Eksporter til NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Ubegrænsede Timer",
      feature1Visual2: "Samme pris uanset 10 eller 10.000 timer",
      feature2Label: "Smart AI",
      feature2Title: "Præcision",
      feature2Desc: "Vores AI sporer op til 20 talere, selv når de taler over hinanden, afbryder eller svarer på én gang. Hver stemme fanges og mærkes korrekt.",
      feature2Point1: "20-taler-identifikation",
      feature2Point2: "Håndterer krydssnak & afbrydelser",
      feature2Point3: "Talermærker du kan omdøbe",
      feature2Point4: "Tidsstempel for hvert ord",
      conversationParticipant1: "Deltager 1",
      conversationText1: "Den største barrier vi står overfor er helt sikkert behandlingsomkostningerne...",
      conversationParticipant2: "Deltager 2",
      conversationText2: "Helt sikkert, men jeg vil tilføje at adgang er—",
      conversationParticipant3: "Deltager 3",
      conversationText3: "—undskyld afbrydelsen, men transport er også kæmpe.",
      conversationText4: "Ja! Det var præcis det jeg skulle til at sige.",
      conversationParticipant4: "Deltager 4",
      conversationText5: "I landdistrikter er det alle tre: omkostninger, adgang OG transport.",
      feature3Label: "Præcision",
      feature3Title: "Pålidelig",
      feature3Desc: "Håndterer fagterminologi, tykke accenter og fagspecifikt sprog som en pro. Nøjagtigt nok til publikation, fagfællebedømmelse og dit afhandlingsudvalg.",
      feature3Point1: "Medicinsk & videnskabelig terminologi",
      feature3Point2: "100+ sprog & dialekter",
      feature3Point3: "Ordret & ren læsetilstand",
      feature3Point4: "Rediger og eksporter i alle formater",
      feature3Visual1: "Forskningsgrad Nøjagtighed",
      feature3Visual2: "Stolt brugt af 50.000+ forskere",
      feature4Label: "Sikkerhed",
      feature4Title: "IRB-godkendelse",
      feature4Desc: "Dine følsomme forskningsdata er beskyttet med virksomhedsklasse sikkerhed. GDPR-kompatibel, HIPAA-klar muligheder og fulde revisionsspor til IRB-krav.",
      feature4Point1: "End-to-end-kryptering",
      feature4Point2: "GDPR & CCPA-kompatibel",
      feature4Point3: "Auto-sletningspolitikker",
      feature4Point4: "Sikker teamkollaboration",
      useCasesTitle: "Perfekt Til",
      useCasesSubtitle: "Fra etnografi til kliniske forsøg",
      useCase1Title: "Fokusgrupper",
      useCase1Desc: "Håndter 8-20 deltagere med overlappende tale. Perfekt taleridentifikation selv under heftige diskussioner. Eksporter direkte til kvalitativ analyse software.",
      useCase2Title: "Dybdegående Interviews",
      useCase2Desc: "Behandl hundredvis af en-til-en interviews samtidig. Oprethold konsistens i hele dit datasæt. Søg på tværs af alle transskriptioner med det samme.",
      useCase3Title: "Klinisk Forskning",
      useCase3Desc: "HIPAA-kompatible muligheder for patientinterviews. Præcis transskription af medicinsk terminologi. Sikker håndtering af følsomme sundhedsdata.",
      useCase4Title: "Etnografiske Studier",
      useCase4Desc: "Optagelser i naturlige omgivelser. Håndter baggrundsstøj og flere talere. Understøttelse af 100+ sprog og dialekter.",
      useCase5Title: "Mundtlige Historieprojekter",
      useCase5Desc: "Bevar hele arkiver uden begrænsninger. Opret søgbare historiske optegnelser. Perfekt til længerevarende og generationelle studier.",
      useCase6Title: "Afhandlingsforskning",
      useCase6Desc: "Studievejledende priser med alle funktioner. Behandl hele dit datasæt til en overkommelig pris. Overhold stramme deadlines med batchbehandling.",
      testimonialTitle: "Betroet af",
      testimonialText: "Vores forskerteam havde 200 timers fokusgruppeoptagelser fra vores sundhedsundersøgelse. Andre tjenester bad os vælge, hvilke sessioner der skulle transskriberes på grund af omkostningerne. NeverCap lod os behandle alt i løbet af en weekend. 20-talergenkendelsen fungerede faktisk – selv under vores mest rodede diskussioner, hvor alle talte på én gang. Dette værktøj har fuldstændig ændret, hvordan vi håndterer kvalitative data.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Lederforsker, Public Health Institute",
      ctaTitle: "Stop med at Vælge, Hvilke Data der skal Analyseres",
      ctaSubtitle: "Tilslut dig 50.000+ forskere, der transskriberer alt",
      ctaButton: "Prøv NeverCap Gratis",
        problemTitle2: "ForskningsTransskriptionsProblemet",
        title: "The",
        useCasesTitle2: "Enhver Forskningsmetode",
        testimonialTitle2: "Førende Forskere",
        feature1TitleHl: "Hele forskningsprojekt",
        feature1TitlePost: "Alt på ét sted",
        feature2TitleHl: "Fokusgruppeinterview",
        feature2TitlePost: "Succes hver gang",
        feature3TitleHl: "96% nøjagtighed",
        feature4TitleHl: "Sikkerhed",
        testimonialText2Hl: "200 timer",
        testimonialText3: "af fokusgruppeoptagelser fra vores samfundssundhedsundersøgelse. Andre tjenester bad os vælge hvilke sessioner der skulle transskriberes på grund af omkostningerne. NeverCap lod os behandle",
        testimonialText4Hl: "alt i løbet af en weekend",
        testimonialText5: ". 20-talshøjttaleridentifikationen fungerede faktisk - selv under vores mest rodede diskussioner hvor alle talte på én gang. Dette værktøj har",
        testimonialText6Hl: "helt ændret",
        testimonialText7: "hvordan vi håndterer kvalitative data."
    },
    BusinessTeams: {
      heroBadge: "Til Forretningshold",
      heroTitle1: "Mødeoptagelse",
      heroTitle2: "Gjort Enkelt",
      heroSubtitle: "Optag møder direkte i din browser eller upload lydfiler med det samme. Byg søgbare arkiver fra ubegrænsede samtaler. Mist aldrig vigtige diskussioner igen med virkelig ubegrænset transskription.",
      heroCtaPrimary: "Start Optagelse Nu →",
      heroCtaSecondary: "Se Hvordan det Virker",
      recordingStatus: "Optager...",
      statsMeetingMinutes: "Mødereferat",
      statsLiveRecording: "Optagelse",
      statsSpeakerID: "Talergenkendelse",
      statsInstantUpload: "Upload & Behandl",
      featuresTitle: "Transskription til Enhver Forretning",
      featuresSubtitle: "Fra liveoptagelse til øjeblikkelig upload – vi har elimineret alle friktionspunkter",
      feature1Title: "Optag Direkte i Din Browser",
      feature1Desc: "Ingen downloads, ingen plugins. Start optagelse med ét klik. Perfekt lydkvalitet, automatisk talergenkendelse.",
      feature1Benefit1: "Én-kliks optagelsesstart",
      feature1Benefit2: "Ingen softwareinstallation",
      feature1Benefit3: "Virker på enhver enhed",
      feature1Benefit4: "Realtidstranskription",
      feature1Visual1: "Klik & Optag",
      feature1Visual2: "Ingen opsætning nødvendig",
      feature2Title: "Upload Enhver Lydfil Med Det Samme",
      feature2Desc: "Har du optagelser fra Zoom, Teams eller din telefon? Upload dem med det samme. Understøttelse af alle større lyd- og videoformater. Behandl flere filer samtidig uden ventetid.",
      feature2Benefit1: "Understøtter: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Batch-upload mulighed",
      feature2Benefit3: "Understøtter 10-timers filer",
      feature2Benefit4: "Behandl mens du arbejder",
      feature2Visual1: "Træk & Slip Filer",
      feature3Title: "Bygget til Teamkollaboration",
      feature3Desc: "Del transskriptioner med dit team med det samme. Lyt til optagelser sammen, eksporter transskriptioner i flere formater, og sikr at alle forbliver på samme side med søgbare mødearkiver.",
      feature3Benefit1: "Del transskriptioner med hvem som helst",
      feature3Benefit2: "Lyt til originale optagelser",
      feature3Benefit3: "Eksporter transskriptioner i flere formater",
      feature3Benefit4: "Teamsøgbare arkiver",
      feature3Visual1: "Teammedlemmer",
      feature3Visual2: "Ubegrænset samarbejde",
      feature4Title: "Find enhver samtale med det samme",
      feature4Desc: "Søg på tværs af alle dine møder på én gang. Find den afgørende beslutning fra sidste kvartal eller kundekravet fra måneder siden. AI-drevet søgning forstår kontekst, ikke kun nøgleord.",
      feature4Benefit1: "Søg i alle møder på én gang",
      feature4Benefit2: "AI forstår kontekst",
      feature4Benefit3: "Filtrer efter taler eller dato",
      feature4SearchPlaceholder: "🔍 Søg: 'Q4-indtægtsmål'",
      feature4SearchResults: "Fundet i 3 møder:",
      feature4Meeting1: "Salgsplanlægning - 15. okt.",
      feature4Meeting1Text: '"...mål for Q4 sat til $2M..."',
      feature4Meeting2: "Bestyrelsesmøde - 20. okt.",
      feature4Meeting2Text: '"...Q4-indtægtsprognoser..."',
      workflowTitle: "Sådan transskriberes en",
      workflowSubtitle: "En problemfri arbejdsgang, der fanger hvert vigtigt øjeblik",
      workflowStep1Title: "Optag eller upload",
      workflowStep1Desc: "Start liveoptagelse eller download blot mødeoptagelsen fra Zoom, Google Meet eller Microsoft Teams",
      workflowStep2Title: "Auto-transskribering",
      workflowStep2Desc: "Vores AI transskriberer automatisk optagelsen til tekst med 96% nøjagtighed på få minutter",
      workflowStep3Title: "Samarbejd",
      workflowStep3Desc: "Del, kommenter og ekstraher handlingspunkter",
      workflowStep4Title: "Søg & analyser",
      workflowStep4Desc: "Find indsigter på tværs af alle dine møder",
      testimonialsTitle: "Teams elsker",
      testimonialsSubtitle: "Se, hvordan virksomheder transformerer deres mødekultur",
      testimonial1Text: '"Vi gik fra at gå glip af afgørende detaljer til at have et søgbart arkiv over hver samtale. Den direkte optagefunktion betyder, at vi aldrig glemmer at fange vigtige diskussioner."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktchef, TechCorp",
      testimonial2Text: '"Otter begrænsede os til 10 filupload pr. måned. Nu uploader vi alle vores kundeopkald med det samme. En gamechanger for vores salgsteams opfølgning."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Salgsdirektør, ConsultPro",
      testimonial3Text: '"Evnen til at søge på tværs af måneders møder reddede os under vores revision. Fandt enhver beslutning og godkendelse på sekunder."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Stop med at miste vigtige samtaler",
      ctaSubtitle: "Tilslut dig tusindvis af teams, der fanger hvert møde med ubegrænset transskription",
      ctaButton: "Start optagelse gratis →",
        featuresTitle2: "Møde",
        workflowTitle2: "Zoom-optagelse til tekst",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Til undervisere & lærere",
      heroTitle1: "Gør læring",
      heroTitle2: "Tilgængelig for alle",
      heroSubtitle: "Indsæt blot YouTube-links for at få øjeblikkelige transskriptioner med automatisk genererede undertekster. Omform forelæsninger, tutorials og undervisningsvideoer til søgbart, tilgængeligt indhold, som alle elever kan lære af.",
      heroCtaPrimary: "Prøv gratis - ingen kreditkort",
      heroCtaSecondary: "Se demo",
      stats1Number: "1-klik",
      stats1Label: "YouTube-transskription",
      stats2Number: "100+",
      stats2Label: "Understøttede sprog",
      stats3Number: "∞",
      stats3Label: "Ubegrænsede videoer",
      stats4Number: "96%",
      stats4Label: "Nøjagtighedsgrad",
      featuresTitle: "Alt hvad undervisere har brug for til",
      featuresSubtitle: "Fra YouTube-forelæsninger til optagne klasser - gør alt dit indhold tilgængeligt",
      feature1Title: "Instant YouTube & Platform Links",
      feature1Desc: "Bare indsæt enhver videolink og få øjeblikkelige transskriptioner. Virker med YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive og mere. Ingen download, ingen ventetid.",
      feature1Point1: "Direkte link-transskription - ingen download nødvendig",
      feature1Point2: "Understøttelse af alle større platforme",
      feature1Point3: "Behandl hele afspilningslister på én gang",
      feature1Point4: "Virker med private videoer (med tilladelse)",
      feature2Title: "Auto-generer tekster & undertekster",
      feature2Desc: "Opret præcise tekster til alle dine undervisningsvideoer med det samme. Gør indhold tilgængeligt for studerende med hørehandicap, ikke-indfødte talere eller dem der foretrækker at læse med.",
      feature2Point1: "SRT, VTT og TXT eksportformater",
      feature2Point2: "Ord-niveau tidsstempler til perfekt synkronisering",
      feature2Point3: "Rediger og tilpas tekster nemt",
      feature2Point4: "Upload direkte tilbage til YouTube",
      feature2Visual1: "Sprogoversættelser",
      feature2Visual2: "Gør dit indhold globalt tilgængeligt",
      feature3Title: "Organiser efter kurser & kategorier",
      feature3Desc: "Opret mapper for at organisere dine transskriptioner efter kursus, fag eller semester. Hold alt dit undervisningsindhold pænt kategoriseret og nemt søgbart. Byg en omfattende bibliotek af tilgængelige kursusmaterialer.",
      feature3Point1: "Opret ubegrænsede mapper og undermapper",
      feature3Point2: "Tag videoer efter emne eller sværhedsgrad",
      feature3Point3: "Organiser flere transskriptioner i bulk",
      feature3Point4: "Søg på tværs af alt dit indhold med det samme",
      feature3VisualTitle: "Dit kursusbibliotek",
      feature3Folder1: "Matematik 101",
      feature3Folder2: "Fysikforelæsninger",
      feature3Folder3: "Biologilaboratorievideoer",
      feature3Folder4: "Historiedokumentarer",
      feature3Folder5: "Sproglæring",
      feature4Title: "AI-transskriber lydfil til studievejledning",
      feature4Desc: "Del ikke bare optagelser. Transskriber automatisk forelæsninger til tekst og andre lydfiler til detaljerede studievejledninger, komplet med resuméer og nøglebegreber til effektiv studerenderevision. Eksporter i TXT, DOCX eller PDF-formater.",
      feature4Point1: "TXT til simpel tekstredigering",
      feature4Point2: "DOCX til formaterede dokumenter",
      feature4Point3: "PDF til nem deling og udskrivning",
      feature4Point4: "Eksporter flere filer i bulk på én gang",
      workflowTitle: "Sådan virker det:",
      workflowSubtitle: "Fra videolink til tilgængelig transskription og studiematerialer på få minutter",
      workflowStep1Title: "Upload din forelæsning",
      workflowStep1Desc: "Upload enhver lyd- eller videofil (MP3, MP4, WAV) eller indsæt et YouTube-link",
      workflowStep2Title: "AI-transskription",
      workflowStep2Desc: "Vores AI transskriberer lyden, adskiller talere og identificerer nøgleemner",
      workflowStep3Title: "Generer tekster",
      workflowStep3Desc: "Auto-opret perfekt synkroniserede undertekster",
      workflowStep4Title: "Eksporter Studieguide",
      workflowStep4Desc: "Download teksten, resuméet eller eksportér det for at oprette din endelige studieguide",
      useCasesTitle: "Perfekt til Alle",
      useCasesSubtitle: "Se, hvordan undervisere bruger NeverCap til at forbedre læringen",
      useCase1Title: "Optagne Forelæsninger",
      useCase1Text: "Transskriber hele semestres optagne forelæsninger. Studerende kan søge efter specifikke emner, gennemgå nøglebegreber og undgå at gå glip af vigtig information.",
      useCase2Title: "Onlinekurser",
      useCase2Text: "Gør dine onlinekurser tilgængelige for internationale studerende med oversættelser i 100+ sprog. Øg tilmelding og tilfredshed.",
      useCase3Title: "Studiematerialer",
      useCase3Text: "Brug AI til at transskribere lydfiler til studieguider fra videovejledninger og forelæsninger. Perfekt til studerende, der foretrækker at læse eller har brug for at gennemgå indhold hurtigt med søgbar tekst.",
      useCase4Title: "Tilgængelighedsoverholdelse",
      useCase4Text: "Opfyld tilgængelighedskrav ved at levere undertekster og transskriptioner for alt videoindhold. Sikrer lige adgang for alle studerende.",
      useCase5Title: "Flipped Classroom",
      useCase5Text: "Del videoforelæsninger med transskriptioner før timen. Studerende kan gennemgå i deres eget tempo og komme forberedt til diskussioner.",
      useCase6Title: "Forskning & Citater",
      useCase6Text: "Hjælp studerende med at citere videokilder præcist med tidsstempler. Perfekt til forskningsprojekter og akademiske artikler.",
      testimonialTitle: "Betroet af",
      testimonialSubtitle: "Se hvorfor lærere over hele verden vælger NeverCap",
      testimonialText: '"Jeg har brugt NeverCap til at transskribere hele min YouTube-kanal med matematikvejledninger. Hvad der før tog uger med andre tjenester, tager nu timer. Muligheden for at indsætte links direkte og få øjeblikkelige transskriptioner har forandret måden, jeg skaber tilgængeligt indhold på. Mine internationale studerende elsker især underteksterne på flere sprog!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Matematikprofessor, Onlineunderviser",
      ctaTitle: "Gør Alt Dit Uddannelsesindhold Tilgængeligt",
      ctaSubtitle: "Tilslut dig tusindvis af undervisere, der bruger virkelig ubegrænset transskription",
      ctaButton: "Prøv NeverCap Gratis",
        featuresTitle2: "Videotransskription",
        grid: "Lydfil til studievejledning",
        useCasesTitle2: "Uddannelsesbehov",
        testimonialTitle2: "50.000+ Undervisere"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Download YouTube-videoer som MP4",
        "placeholder": "Søg eller indsæt dit YouTube-link her",
        "clear_icon": "Ryd indtastning",
        "Download": "Download",
        "loading_text": "Behandler linket for download. Bliv på siden.",
        "howToDownload": "Hvordan downloader jeg?",
        "tutorial": "Se vejledningen"
      },
      part2: {
        "title": "Sådan omdanner du en YouTube-video til en downloadbar MP4-fil i 3 nemme trin",
        "steps": [
                {
                  title: "Kopier URL'en",
                  content: "Åbn din YouTube-video, og kopier linket fra browserens adresselinje."
                },
                {
                  title: "Indsæt linket",
                  content: "Gå til dit videohentningsværktøj og indsæt URL'en i indtastningsfeltet."
                },
                {
                  title: "Download MP4'en",
                  content: "Når behandlingen er færdig, skal du trykke på download-knappen for at gemme din MP4-fil."
                }
              ]
      },
      part3: {
        content: [
                "Har du nogensinde haft brug for at se YouTube-videoer offline?",
                "Uanset om du pendler i metroen, flyver i et fly, studerer en vigtig vejledning, dykker ned i færdighedsbyggende indhold eller arkiverer vigtigt videomateriale – er pålidelig offline-adgang en almindelig frustration. Det er her, vores downloader skinner.",
                "Downloaderen lader dig hurtigt og nemt konvertere YouTube-videoer til MP4-format til download. Gem dem på din enhed, og se dem når som helst.",
                "Processen er hurtig, enkel og problemfri. Når den er downloadet, kan du nyde dine yndlingsvideoer, når og hvor du er – ingen internetforbindelse nødvendig."
              ]
      },
      part4: {
        content: ["Her er de 5 største fordele ved at downloade", "YouTube-videoer som MP4-filer"],
        list: [
                {
                  title: "Spar på datakostnader:",
                  content: "Normalt forbruger det betydelig mobildata at se videoer på YouTube. Ved at downloade til offlineafspilning kan du undgå disse unødvendige omkostninger."
                },
                {
                  title: "Se hvor som helst, når som helst:",
                  content: "Nyd dine videoer problemfrit, selv med ustabil internetforbindelse. Ingen buffering at bekymre sig om."
                },
                {
                  title: "Nem arkivering og opbevaring:",
                  content: "At gemme videoer som MP4-filer gør det nemt at opbygge din personlige samling, især for indhold, du finder virkelig værdifuldt eller vigtigt."
                },
                {
                  title: "Nemmere deling:",
                  content: "Det er meget mere bekvemt at dele en MP4-fil end at sende et link. Du kan sende videofilen direkte via apps som WhatsApp eller Instagram og undgå det ekstra trin med at åbne YouTube."
                },
                {
                  title: "Øjeblikkelig visning, delte øjeblikke:",
                  content: "Vil du glædeligt vise en yndlingsvideo til venner eller familie i nærheden? Med MP4'en downloadet kan I alle se den glat sammen med det samme uden akavede pauser, mens den loader."
                }
              ]
      },
      part5: {
        title: "Hvorfor vores downloader skiller sig ud",
        cards: [
                {
                  title: "En-kliks enkelhed",
                  content: "Problemløs opsætning og intuitiv betjening."
                },
                {
                  title: "Lynhurtig, ubegrænset",
                  content: "Konverter og download med topspeed – ingen begrænsninger."
                },
                {
                  title: "Konverter på farten",
                  content: "Behandler dine filer med det samme – ingen ventetid."
                },
                {
                  title: "Ingen annoncer, ingen distraktioner",
                  content: "Nyd et rent interface uden pop-ups, bannere eller afbrydelser – bare problemfri videokonvertering."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Originalkvalitet garanteret",
                  content: "Dine downloads bevarer kildens fulde opløsning for pixelperfekt afspilning hver gang."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fungerer overalt",
                  content: "Fuldt kompatibel med enhver browser på enhver enhed."
                }
              ]
      },
      part6: {
        title: ["Maksimer dine YouTube-videodownloads", "Med Downloaderen"],
        content: [
                "Problemløs YouTube til MP4-konvertering: Hurtig, enkel og gratis.",
                "Det er her, vi udmærker os. Vores brugervenlige interface er designet til alle – ingen tekniske færdigheder nødvendige. Uanset din erfaring kan du konvertere videoer med det samme. Ingen tilmelding nødvendig: Få præcis, hvad du har brug for, med det samme.",
                "Vær rolig – dine downloadede MP4-filer bevarer den originale videokvalitet og klarhed, nøjagtigt som du så dem på YouTube.",
                "Fungerer overalt, hvor du gør. Fuldt kompatibel på alle større platforme og enheder. Uanset om du bruger Windows, macOS, Linux, Android eller iOS – på smartphone, tablet eller computer – kan du downloade videoer problemfrit."
              ]
      },
      part7: {
        title: "Nøglespørgsmål om download af YouTube-videoer",
        list: [
                {
                  question: "Kan jeg downloade en YouTube-video, hvis den er ophavsretsbeskyttet?",
                  answer: "Det er ulovligt at downloade ophavsretsbeskyttede YouTube-videoer uden ophavsretshaverens tilladelse."
                },
                {
                  question: "Er dette downloadværktøj sikkert?",
                  answer: "Ja, det er sikkert og pålideligt. Vi kræver ikke personlige oplysninger fra brugerne og tager stærke forholdsregler mod virus. Vi minder dig om altid at være forsigtig, når du downloader filer fra internettet: Undgå at klikke på mistænkelige links eller downloade tvivlsomme filer."
                },
                {
                  question: "Hvilke sprog understøtter YouTube til MP4-download?",
                  answer: "Vores service understøtter download af YouTube-videoer på alle populære sprog."
                },
                {
                  question: "Hvilke faktorer påvirker tiden det tager at downloade en YouTube-video?",
                  answer: "Selvom vi sikrer den hurtigst mulige downloadoplevelse, påvirkes downloadtiden også af faktorer som videolængde og din internetforbindelses hastighed."
                },
                {
                  question: "Hvor bliver MP4-videoen gemt, når jeg downloader den på min smartphone?",
                  answer: 'Efter at have downloadet en MP4-fil på din smartphone, kan du normalt finde den i mappen "Downloads" i din enheds filhåndteringsapp.'
                },
                {
                  question: "Reducerer download af en YouTube-video som MP4 videokvaliteten?",
                  answer: "Nej. Download af YouTube-videoer som MP4 med vores værktøj bevarer den originale videokvalitet. Konverteringsprocessen bevarer kildens kvalitet, så du får den samme visningsoplevelse som på YouTube."
                }
              ]
      },
        err1: "Fejl i YouTube-linkformat.",
        err2: "Beklager! Vi understøtter i øjeblikket kun YouTube-links. Hvis du har brug for understøttelse af andre websteder, holder vi dig opdateret, når vi tilføjer det i fremtiden.",
        videoDownload: {
              title: "Download YouTube-videoer som MP4. Gratis, hurtigt og ingen reklamer.",
              description: "Tak fordi du valgte vores service! Vi sætter stor pris på din tillid og håber, det forbedrede din oplevelse. Hvis du vil dele vores hjemmeside med dine venner, ville det være en stor hjælp.",
              downloadButton: "Download",
              downloadError: "Downloadfejl."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Industrieledende AI-teknologi",
      "title": "Om",
      "highlighted_text": "NeverCap",
      "description": "Vores mission er at levere de mest præcise lyd- og videotranskriberingstjenester. Ved at udnytte industrieledende AI-teknologi opnår vi transkriptionsnøjagtighed på over 96%. For nogle større sprog kan vi endda nå 99% nøjagtighed gennem teknisk optimering."
    },
    Stats: {
      "title": "Vores",
      "highlighted_text": "Indvirkning",
      "subtitle": "Styrker global kommunikation med banebrydende AI-teknologi",
      "metrics": [
            {
              "value": "96%+",
              "label": "Nøjagtighedsprocent",
              "description": "Industrieledende transkriptionsnøjagtighed med avanceret AI"
            },
            {
              "value": "100+",
              "label": "Understøttede sprog",
              "description": "Talegenkendelse for globalt indhold"
            },
            {
              "value": "249+",
              "label": "Oversættelsessprog",
              "description": "Oversæt transkriberet tekst til stort set ethvert sprog"
            }
          ]
    },
    Mission: {
      "title": "Hvorfor vælge",
      "highlighted_text": "NeverCap",
      "subtitle": "Vi tror på at bryde sprogbarrierer og gøre indhold tilgængeligt for alle",
      "features": [
            {
              "icon": "🎯",
              "title": "Uovertruffen nøjagtighed",
              "description": "Vores AI-modeller forbedres kontinuerligt for at levere transkriptionsnøjagtighed over 96%, med nogle større sprog der når op til 99% nøjagtighed gennem avanceret optimering."
            },
            {
              "icon": "🌍",
              "title": "Global sprogunderstøttelse",
              "description": "Understøttelse af over 100 sprog i talegenkendelse og oversættelsesfunktioner til mere end 249 sprog, så dit indhold bliver virkelig globalt."
            },
            {
              "icon": "⚡",
              "title": "Lynhurtig behandling",
              "description": "Behandl timer af lyd- og videoindhold på minutter, ikke timer. Vores optimerede AI-pipeline sikrer at du får dine transkriptioner hurtigt uden at gå på kompromis med kvaliteten."
            },
            {
              "icon": "🔒",
              "title": "Enterprise-grade sikkerhed",
              "description": "Din datasikkerhed er vores prioritet. Vi bruger industristandard kryptering og overholder globale privatlivsregler for at holde dit indhold sikkert og fortroligt."
            }
          ]
    },
    Company: {
      "title": "Virksomheds-",
      "highlighted_text": "information",
      "subtitle": "Kontakt os for spørgsmål eller support",
      "details": [
            {
              "label": "Virksomhedsnavn",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Hovedkvarter",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "USA"]
            },
            {
              "label": "Kontakt os",
              "value": ["Email", "Support tilgængelig 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Klar til at opleve forskellen?",
      "subtitle": "Tilslut dig tusindvis af professionelle der stoler på NeverCap til deres transkriberingsbehov",
      "button": "Prøv NeverCap gratis →",
      "disclaimer": "Ingen kreditkort nødvendigt • Begynd at transskribere på sekunder"
    }
  },
  Privacy: {
    title: "Privatliv",
    titleGradient: "Politik",
    subtitle: "Lær hvordan vi indsamler, bruger og beskytter dine personoplysninger",
    "lastUpdated": "Sidst opdateret: {date}",
    "lastUpdatedDate": "21. juli 2025",
    "privacyPolicyTitle": "Privatlivspolitik",
    "policyAgreement": "Læs venligst denne privatlivspolitik omhyggeligt og sørg for at forstå den. Ved at bruge nogen af vores tjenester accepterer du denne privatlivspolitik. Hvis du ikke accepterer vores brug af dine personoplysninger i overensstemmelse med denne politik, skal du straks stoppe med at bruge vores tjenester.",
    "policyOverview": "I denne politik beskriver vi: hvilke data vi indsamler og hvorfor; hvordan dine data håndteres; og dine rettigheder med hensyn til dine data. Vi sælger ikke dine data.",
    "scopeTitle": "1. Anvendelsesområde for denne privatlivspolitik",
    "scopeDescription": "Denne privatlivspolitik gælder kun for vores indsamling og behandling af oplysninger om brugere af tjenesterne. Denne privatlivspolitik gælder ikke for tjenester, websteder eller software drevet af tredjeparter, der er linket til os (uanset om vi leverer disse links eller andre brugere deler dem), ej heller gælder den for indhold, data, applikationer eller materialer fra tredjeparter. Vi råder dig til at kontrollere privatlivspolitikkerne for enhver tredjeparts hjemmeside eller software, før du giver dem oplysninger.",
    "collectionTitle": "2. Hvad vi indsamler og hvorfor",
    "collectionPrinciple": "Vores ledende princip er kun at indsamle det, vi har brug for. Her er, hvad det betyder i praksis:",
    "identityTitle": "2.1 Identitet & adgang",
    "identityDescription": "Når du tilmelder dig et af vores produkter, beder vi om identifikationsoplysninger såsom dit navn og e-mailadresse. Dette er for at levere essentiel produktfunktionalitet og så vi kan sende dig produktopdateringer og anden essentiel information.",
    "billingTitle": "2.2 Faktureringsoplysninger",
    "billingDescription": "Hvis du tilmelder dig et betalingsprodukt, bliver du bedt om at angive dine betalingsoplysninger og faktureringsadresse. Betalingsoplysninger sendes direkte til vores betalingsprocessor og når ikke vores servere.",
    "productInteractionsTitle": "2.3 Produktinteraktioner",
    "productInteractionsDescription": "Vi gemmer på vores servere det indhold, du uploader, modtager eller opbevarer i dine produktkonti. Medmindre du sletter dette indhold, kan vi beholde det, så længe din konto er aktiv.",
    "websiteInteractionsTitle": "2.4 Webstedsinteraktioner",
    "websiteInteractionsDescription": "Vi indsamler oplysninger om din browsingaktivitet til analyse- og statistiske formål såsom konverteringsratetestning og eksperimentering med nye produktdesigns. Dette inkluderer for eksempel din browser- og operativsystemversion, din IP-adresse, hvilke websider du besøgte og hvor lang tid de tog at indlæse, og hvilket websted der henviste dig til os. Hvis du har en konto og er logget ind, er disse webanalyse-data knyttet til din IP-adresse og brugerkonto, indtil din konto ikke længere er aktiv.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Vi bruger også vedvarende first-party cookies og nogle third-party cookies til at gemme visse præferencer, gøre det nemmere for dig at bruge vores applikationer og udføre A/B-testning samt understøtte nogle analyser.",
    "cookiesDescription2": "En cookie er en tekststreng, der gemmes af din browser. Den kan hjælpe med at huske loginoplysninger og webstedspræferencer. Den kan også indsamle oplysninger såsom din browsertype, operativsystem, besøgte websider, besøgstid, vist indhold og andre klikstrømsdata. Du kan justere cookie-opbevaringsindstillinger og acceptere eller blokere enkelte cookies i dine browserindstillinger, selvom vores apps ikke vil fungere, og andre aspekter af vores tjeneste muligvis ikke fungerer korrekt, hvis du slår cookies fra.",
    "correspondenceTitle": "2.6 Frivillig korrespondance",
    "correspondenceDescription": "Når du e-mailer os med et spørgsmål eller beder om hjælp, gemmer vi denne korrespondance, inklusive din e-mailadresse, så vi har en historik over tidligere korrespondance at henvise til, hvis du kontakter os i fremtiden.",
    "accessTitle": "3. Når vi får adgang til eller deler dine oplysninger",
    "accessDescription1": "For at levere produkter eller tjenester, du har anmodet om. Vi bruger nogle tredjeparts underbehandlere til at hjælpe med at køre vores applikationer og levere tjenesterne til dig. Dette inkluderer cloud- og analyseudbydere.",
    "accessDescription2": "For at undersøge, forhindre eller handle vedrørende misbrug. Adgang til en kundes konto, når der undersøges potentielt misbrug, er en sidste udvej. Vi ønsker at beskytte både vores kunders privatliv og sikkerhed og de personer, der rapporterer problemer til os, og vi gør vores bedste for at balancere disse ansvar gennem hele processen. Hvis vi opdager, at du bruger vores produkter til et begrænset formål, vil vi træffe nødvendige foranstaltninger, herunder underrette relevante myndigheder, hvor det er berettiget.",
    "accessDescription3": "Når det er påkrævet ved gældende lov.",
    "dataRequests": "Anmodninger om brugerdata. Vores politik er ikke at reagere på statslige anmodninger om brugerdata, medmindre vi er tvunget af retslig proces eller i begrænsede omstændigheder i tilfælde af en nødanmodning. Hvis amerikanske retshåndhævelsesmyndigheder dog har den nødvendige dommerkendelse, straffebud eller retskendelse, der kræver, at vi deler data, må vi efterkomme det. Ligeledes vil vi kun reagere på anmodninger fra statslige myndigheder uden for USA, hvis vi er tvunget af den amerikanske regering gennem procedurer beskrevet i en gensidig retshjælpstraktat eller aftale. Det er vores politik at underrette berørte brugere, før vi deler data, medmindre vi er lovligt forhindret i det, og undtagen i nogle nødstilfælde.",
    "preservationRequests": "Bevaringsanmodninger. På samme måde er vores politik at efterkomme anmodninger om bevarelse af data kun, hvis vi er tvunget af den amerikanske føderale lagret kommunikationslov, 18 U.S.C. Section 2703(f), eller af en korrekt udstedt amerikansk stævning i civile sager. Vi deler ikke bevaret data, medmindre det er påkrævet ved lov eller tvunget af en retskendelse, som vi vælger ikke at anke. Medmindre vi modtager en korrekt dommerkendelse, retskendelse eller stævning, før den nødvendige bevaringsperiode udløber, vil vi destruere alle bevaret kopier af kundedata ved udløbet af bevaringsperioden.",
    "taxAudits": "Hvis vi bliver revideret af en skattemyndighed, kan vi blive påkrævet at dele faktureringsrelaterede oplysninger. Hvis det sker, deler vi kun det mindst nødvendige, såsom faktureringsadresser og skattefritagsoplysninger.",
    "securityTitle": "4. Hvordan vi sikrer dine data",
    "securityDescription": "Alle data er krypteret via SSL/TLS, når de overføres fra vores servere til din browser.",
    "deletionTitle": "5. Hvad der sker, når du sletter dit indhold",
    "deletionDescription": "Hvis du sletter noget indhold, bliver det straks utilgængeligt.",
    "locationTitle": "6. Placering af websted og data",
    "locationDescription": "Vores produkter og andre webegenskaber drives i USA. Hvis du befinder dig i EU, Storbritannien eller andetsteds uden for USA, skal du være opmærksom på, at alle oplysninger, du giver os, vil blive overført til og opbevaret i USA. Ved at bruge vores websteder eller tjenester og/eller give os dine personoplysninger samtykker du til denne overførsel.",
    "childrenTitle": "7. Børns privatliv",
    "updatesTitle": "8. Opdateringer af denne privatlivspolitik",
    "updatesDescription": "Vi kan opdatere denne politik efter behov for at overholde relevante regulativer og afspejle nye praksisser. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side.",
    "contactTitle": "9. Kontakt os",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "på",
      policyDescription: 'Denne politik beskriver, hvordan NeverCap (hereinafter referred to as \"NeverCap\", \"our\", \"we\", \"us\") indsamler, bruger og offentliggør dine personoplysninger, når du bruger vores tjenester, hjemmesider ({url}) og software (samlet set \"Tjenesterne\").',
      childrenDescription: "Tjenesterne er ikke rettet mod børn, og vi indsamler ikke bevidst personoplysninger fra børn under 13 år. Hvis du er under 13 år, må du ikke indsende personoplysninger via Tjenesterne. Hvis du mener, at et barn har givet os personoplysninger i strid med denne politik, skal du kontakte os {at} {email} som angivet nedenfor.",
      contactDescription: "Hvis du har spørgsmål, kommentarer eller klager angående vores privatlivspolitik, skal du kontakte os {at} {email}, og vi vil stræbe efter at behandle din klage hurtigst muligt."
},
  TermsOfUse: {
    title: "Betingelser for",
    titleGradient: "Service",
    subtitle: "Læs venligst disse vilkår omhyggeligt, før du bruger vores tjenester",
    "lastUpdated": "Sidst opdateret: {date}",
    "lastUpdatedDate": "21. juli 2025",
    "termsOfServiceTitle": "Servicevilkår",
    "thankYou": "Tak fordi du bruger vores produkter!",
    "companyDefinition": 'Når vi siger \"Virksomhed\", \"vi\", \"vores\" eller \"os\" i dette dokument, henviser vi til NeverCap.',
    "servicesDefinition": 'Når vi siger \"Tjenester\", mener vi ethvert produkt skabt og vedligeholdt af NeverCap, uanset om det leveres via en webbrowser, desktopapplikation, mobilapplikation eller andet format.',
    "termsUpdate": "Vi kan opdatere disse Servicevilkår i fremtiden. Typisk er disse ændringer foretaget for at præcisere nogle af vilkårene ved at henvise til en udvidet relateret politik. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side og tager andre passende skridt for at underrette kontohavere.",
    "acceptanceTitle": "1. Accept af aftalen",
    "acceptanceDescription1": "Ved at bruge vores Tjenester indikerer du din accept af denne aftale, som dermed bliver en bindende kontrakt mellem dig og NeverCap. Du erklærer, at du lovligt kan acceptere disse Vilkår, og bekræfter, at du er myndig til at indgå en bindende kontrakt. NeverCaps accept er udtrykkeligt betinget af din accept af alle vilkår og betingelser i denne aftale.",
    "eligibilityRequirement": "Tjenesterne er ikke beregnet til og bør ikke bruges af nogen under 18 år. Ved at bruge Tjenesterne erklærer og garanterer du, at du opfylder ovenstående berettigelseskrav.",
    "userResponsibility": 'Udtrykkene \"du\", \"din\", \"dig selv\" omfatter også dine medarbejdere, agenter, forretningsrepræsentanter og enhver anden person, du giver adgang til Tjenesterne gennem din Konto (som defineret nedenfor). Du er ansvarlig for at sikre, at alle personer, der får adgang til Tjenesterne gennem din konto, kender disse Vilkår og overholder dem.',
    "termsRevision": "NeverCap forbeholder sig retten til at revidere og opdatere disse Vilkår fra tid til anden efter eget skøn. Alle ændringer træder i kraft umiddelbart efter offentliggørelse. Din fortsatte brug af Tjenesterne efter offentliggørelsen af reviderede Vilkår betyder, at du accepterer og accepterer ændringerne. Du forventes at tjekke denne side lejlighedsvis, så du er opmærksom på eventuelle ændringer, da de er bindende for dig.",
    "servicesTitle": "2. NeverCaps Tjenester",
    "servicesDescription1": "Vores Tjenester gør det muligt for brugere at omdanne stemmesamtaler til transskriberet tekst, der kan søges, oversættes og deles med andre.",
    "servicesOptions": 'Du kan vælge at bruge den gratis version af Tjenesterne (\"Gratis Tjenester\") eller den abonnementsbaserede betalte version af Tjenesterne, som du muligvis skal betale for (\"Betalte Tjenester\").',
    "servicesAccess": "Vi vil gøre Tjenesterne tilgængelige for dig. Du er ansvarlig for at træffe alle nødvendige foranstaltninger for at få adgang til Tjenesterne.",
    "accountTermsTitle": "3. Kontobetingelser",
    "accountSecurity": "Du er ansvarlig for at opretholde sikkerheden for din konto. Virksomheden kan ikke og vil ikke være ansvarlig for noget tab eller skade som følge af din manglende overholdelse af denne sikkerhedsforpligtelse.",
    "lawfulUse": "Du må ikke bruge Tjenesterne til noget ulovligt, uetisk eller umoralsk formål.",
    "contentResponsibility": "Du er ansvarlig for alt indhold og alle aktiviteter, der forekommer under din konto. Dette inkluderer indhold opslået af andre, der enten: (a) har adgang til dine loginoplysninger; eller (b) har deres egne logins under din konto.",
    "humanRequirement": 'Du skal være et menneske. Konti registreret af \"bots\" eller andre automatiske metoder er ikke tilladt.',
    "paymentTitle": "4. Betaling, Refusion og Planændringer",
    "freeTrial": "For betalte Tjenester, der tilbyder en gratis prøveperiode, forklarer vi længden af prøveperioden, når du tilmelder dig. Efter prøveperioden skal du betale i forvejen for at fortsætte med at bruge Tjenesten. Hvis du ikke betaler, ophører disse tjenester.",
    "upgradePolicy": "Hvis du opgraderer fra en gratis plan til en betalt plan, vil vi trække dit kort med det samme, og din faktureringscyklus starter på opgraderingsdagen.",
    "taxes": "Alle gebyrer er eksklusive alle skatter, afgifter eller told pålagt af skattemyndigheder. Hvis det er påkrævet, vil vi indkræve disse skatter på vegne af skattemyndigheden og indbetale dem til skattemyndighederne. Ellers er du ansvarlig for betaling af alle skatter, afgifter eller told.",
    "refunds": "Alle køb kan ikke refunderes. Du kan annullere enhver betalt tjeneste til enhver tid ved at logge ind på din konto. For betalte abonnementer vil din annullering træde i kraft ved udløbet af den nuværende betalte periode, medmindre andet er angivet.",
    "cancellationTitle": "5. Annullering og Ophør",
    "cancellationPolicy": "Hvis du annullerer Tjenesten før udløbet af enhver betalt periode, træder din annullering i kraft med det samme, og du vil ikke blive opkrævet igen. Vi fratrækker ikke automatisk ubrugt tid i den sidste faktureringscyklus.",
    "terminationRights": "Vi har ret til at suspendere eller afslutte din konto og nægte enhver og al nuværende eller fremtidig brug af vores Tjenester af enhver grund til enhver tid. Suspension betyder, at du ikke vil kunne få adgang til kontoen eller noget indhold i kontoen. Afslutning vil desuden resultere i sletning af din konto eller din adgang til din konto samt tab og afgivelse af alt indhold i din konto. Vi forbeholder os også retten til at nægte brug af Tjenesterne til enhver af enhver grund til enhver tid. Vi har denne klausul, fordi der statistisk set blandt hundredtusindvis af konti på vores Tjenester altid er mindst én, der foretager sig noget skadeligt.",
    "abusePolicy": "Verbale, fysiske, skriftlige eller andre former for misbrug (inklusive trusler om misbrug eller gengældelse) af en virksomhedsmedarbejder eller -leder kan medføre øjeblikkelig kontosuspension.",
    "submissionsTitle": "6. Indsendelser",
    "submissionsDescription": 'Du anerkender og accepterer, at eventuelle spørgsmål, kommentarer, forslag, idéer, feedback eller anden information vedrørende webstedet (\"Indsendelser\"), som du giver os, er ikke fortrolige og bliver vores eneste ejendom. Vi skal have eksklusive rettigheder, herunder alle immaterielle rettigheder, og være berettiget til ubegrænset brug og spredning af disse Indsendelser til ethvert lovligt formål, kommercielt eller andet, uden anerkendelse eller kompensation til dig. Du frafalder herved alle moralske rettigheder til sådanne Indsendelser, og du garanterer herved, at sådanne Indsendelser er originale fra dig eller at du har ret til at indsende sådanne Indsendelser. Du accepterer, at der ikke kan rejses krav mod os for påstået eller faktisk krænkelse eller tilegnelse af nogen ejendomsret i dine Indsendelser.',
    "uptimeTitle": "7. Oppetid og Sikkerhed",
    "serviceAvailability": 'Din brug af Tjenesterne sker på eget ansvar. Vi leverer disse Tjenester \"som de er\" og \"som tilgængelige\". Vi tilbyder ikke serviceaftaler for de fleste af vores Tjenester, men tager oppetiden for vores applikationer alvorligt.',
    "throttlingPolicy": "Vi forbeholder os retten til midlertidigt at begrænse eller begrænse konto adgang i sjældne tilfælde, hvor en brugers aktivitet verificeres at have en negativ indvirkning på Tjenestens stabilitet og ydeevne for andre brugere. I alle andre end de mest kritiske tilfælde vil vi kontakte dig for at finde en løsning, før vi handler.",
    "dataSecurity": "Vi tager mange foranstaltninger for at beskytte og sikre dine data gennem backup, redundans og kryptering. Vi håndhæver kryptering for datatransmission over det offentlige internet.",
    "thirdPartyVendors": "Vi bruger tredjepartsleverandører og hostingpartnere til at levere den nødvendige hardware, software, netværk, lagring og relateret teknologi, der kræves for at køre Tjenesterne.",
    "siteManagementTitle": "8. Webstedsstyring",
    "siteManagementDescription": "Vi forbeholder os retten, men ikke forpligtelsen, til: (1) overvåge webstedet for overtrædelser af disse Servicevilkår; (2) at træffe passende retslige skridt mod enhver, der efter vores skøn overtræder loven eller disse Servicevilkår, herunder uden begrænsning at rapportere sådan bruger til politimyndigheder; (3) efter vores skøn og uden begrænsning at nægte, begrænse adgangen til, begrænse tilgængeligheden af eller deaktivere (i det omfang, der er teknologisk muligt) nogen af dine Bidrag eller en del deraf; (4) efter vores skøn og uden begrænsning, varsel eller ansvar at fjerne fra webstedet eller på anden måde deaktivere alle filer og indhold, der er for store eller på nogen måde belastende for vores systemer; og (5) i øvrigt administrere webstedet på en måde, der er designet til at beskytte vores rettigheder og ejendom og at fremme webstedets korrekte funktion.",
    "copyrightTitle": "9. Ophavsret og Indholdsejerskab",
    "copyrightCompliance": "Alt indhold, der offentliggøres på Tjenesterne, skal overholde amerikansk ophavsret.",
    "ipRights": "Vi gør ikke krav på nogen immaterielle rettigheder over det materiale, du giver til Tjenesterne. Alt uploadet materiale forbliver dit.",
    "contentModeration": "Vi gennemser ikke indhold på forhånd, men forbeholder os retten (men ikke forpligtelsen) efter eget skøn at afvise eller fjerne ethvert indhold, der er tilgængeligt via Tjenesten.",
    "prohibitedExploitation": "Du accepterer ikke at gengive, duplikere, kopiere, sælge, videresælge eller udnytte nogen del af Tjenesterne, brugen af Tjenesterne eller adgangen til Tjenesterne uden udtrykkelig skriftlig tilladelse fra Virksomheden.",
    "impersonationProhibition": "Du må ikke modificere et andet websted på en måde, der falskt antyder, at det er forbundet med Tjenesterne eller Virksomheden.",
    "dmcaPolicy": "Vi respekterer andres immaterielle rettigheder. Hvis du mener, at noget materiale, der er tilgængeligt på eller via webstedet, krænker en ophavsret, du ejer eller kontrollerer, skal du straks kontakte os. En kopi af din Meddelelse vil blive sendt til den person, der har offentliggjort eller lagret det pågældende materiale. Vær opmærksom på, at du i henhold til gældende lovgivning kan blive holdt ansvarlig for erstatning, hvis du fremsætter væsentlige urigtige oplysninger i en Meddelelse. Hvis du derfor ikke er sikker på, at materiale, der findes på eller er linket til af webstedet, krænker din ophavsret, bør du overveje først at kontakte en advokat.",
    "prohibitedActivitiesTitle": "10. Forbudte aktiviteter",
    "generalProhibition": "Du må ikke tilgå eller bruge webstedet til andre formål end dem, vi gør det tilgængeligt for. Webstedet må ikke bruges i forbindelse med kommercielle bestræbelser, medmindre de er specifikt godkendt af os.",
    "userObligations": "Som bruger af webstedet accepterer du ikke at:",
    "dataScraping": "Systematisk hente data eller andet indhold fra webstedet for at oprette eller samle, direkte eller indirekte, en samling, kompilering, database eller fortegnelse uden skriftlig tilladelse fra os.",
    "fraud": "Bedrage, snyde eller vildlede os og andre brugere, især i forsøg på at få adgang til følsomme kontooplysninger som brugeradgangskoder.",
    "securityInterference": "Omgå, deaktivere eller på anden måde forstyrre sikkerhedsrelaterede funktioner på webstedet, herunder funktioner der forhindrer eller begrænser brugen eller kopiering af indhold eller håndhæver begrænsninger i brugen af webstedet og/eller dets indhold.",
    "defamation": "Bagvaske, svække eller på anden måde skade os og/eller webstedet efter vores mening.",
    "harassment": "Bruge oplysninger fra webstedet til at chikanere, misbruge eller skade andre personer.",
    "supportAbuse": "Misbruge vores supporttjenester eller indsende falske rapporter om misbrug eller upassende adfærd.",
    "legalCompliance": "Bruge webstedet på en måde der strider mod gældende love eller regler.",
    "framingProhibition": "Uautoriseret indlejring af eller linking til webstedet.",
    "malware": "Uploade eller overføre (eller forsøge at uploade eller overføre) vira, trojanske heste eller andet materiale, herunder overdreven brug af store bogstaver og spam (gentagen posting af det samme indhold), der forstyrrer brugernes uforstyrrede brug af webstedet eller ændrer, forringer, afbryder eller forstyrrer webstedets funktioner, drift eller vedligeholdelse.",
    "automation": "Bruge automatiserede systemer som scripts til at sende kommentarer eller beskeder, eller bruge datamining, robotter eller lignende dataindsamlingsværktøjer.",
    "copyrightRemoval": "Slette ophavsrets- eller andre ejendomsrettighedsnoter fra indhold.",
    "impersonation": "Forsøge at udgive sig for at være en anden bruger eller person eller bruge en anden brugers brugernavn.",
    "spyware": 'Uploade eller overføre (eller forsøge at uploade eller overføre) materiale der fungerer som passiv eller aktiv informationsindsamlings- eller overføringsmekanisme, herunder "gifs", 1×1 pixels, web bugs, cookies eller lignende enheder (også kaldet "spyware" eller "passive collection mechanisms" eller "pcms").',
    "disruption": "Forstyrre, afbryde eller skabe uberettiget belastning på webstedet eller dets netværk og tjenester.",
    "employeeHarassment": "Chikanere, irritere, true eller intimidere vores medarbejdere eller agenter der yder tjenester til dig via webstedet.",
    "accessCircumvention": "Forsøge at omgå webstedets sikkerhedsforanstaltninger designet til at forhindre eller begrænse adgang til webstedet eller dele af det.",
    "codeCopying": "Kopiere eller tilpasse webstedets software, herunder men ikke begrænset til Flash, PHP, HTML, JavaScript eller anden kode.",
    "reverseEngineering": "Medmindre tilladt ved lov, dechifrere, dekompilere, disassemblere eller reverse engineer nogen del af webstedets software.",
    "bots": "Medmindre det er resultatet af standard søgemaskine- eller browserbrug, bruge, lancere, udvikle eller distribuere automatiserede systemer som spiders, robotter, cheat-værktøjer, scrapers eller offline læsere der tilgår webstedet, eller bruge/uansettet uautoriseret software.",
    "buyingAgents": "Bruge en købsagent til at foretage køb på webstedet.",
    "unauthorizedUse": "Foretage uautoriseret brug af webstedet, herunder indsamling af brugernavne og/eller e-mailadresser med henblik på at sende uønsket e-mail, eller oprette brugerkonti via automatiserede midler eller under falske forudsætninger.",
    "competition": "Bruge webstedet som del af konkurrence mod os eller til indtægtsgenererende eller kommercielle formål.",
    "advertising": "Bruge webstedet til at reklamere for eller tilbyde varer og tjenester til salg.",
    "profileTransfer": "Sælge eller overdrage din profil.",
    "featuresTitle": "11. Funktioner og fejl",
    "featuresDescription": "Vi designer vores tjenester omhyggeligt baseret på egne erfaringer og feedback fra brugere. Ingen tjeneste kan dog tilfredsstille alle. Vi garanterer ikke at vores tjenester opfylder dine specifikke krav eller forventninger.",
    "bugsDescription": "Vi tester alle funktioner før udrulning. Som al software har vores tjenester uundgåeligt fejl. Vi registrerer rapporterede fejl og arbejder med dem, især sikkerheds- og privathedsrelaterede. Ikke alle fejl bliver rettet, og vi garanterer ikke fejlfrie tjenester.",
    "correctionsTitle": "12. Rettelser",
    "informationAccuracy": "Webstedet kan indeholde trykfejl, unøjagtigheder eller udeladelser i beskrivelser, priser, tilgængelighed og anden information. Vi forbeholder os retten til at rette fejl og opdatere information uden varsel.",
    "siteAvailability": "Vi kan ikke garantere webstedets kontinuerte tilgængelighed. Hardware-, software- eller vedligeholdelsesproblemer kan medføre afbrydelser. Vi forbeholder os retten til at ændre, opdatere eller suspendere webstedet uden varsel. Du accepterer at vi ikke er ansvarlige for tab eller ulejligheder ved webstedets utilgængelighed. Disse vilkår forpligter os ikke til at vedligeholde webstedet eller levere rettelser.",
    "userDataTitle": "13. Brugerdata",
    "userDataDescription": "Vi opbevarer visse data du overfører til webstedet for at administrere dets funktioner. Selvom vi foretager rutinemæssige backup, er du selv ansvarlig for dine data. Vi er ikke ansvarlige for tab eller korruption af data, og du fraskriver dig retten til at retsforfølge os herom.",
    "privacyPolicyTitle": "14. Privatlivspolitik",
    "liabilityTitle": "15. Ansvar",
    "liabilityIntroduction": "Vi nævner ansvar i disse vilkår, men samler det her:",
    "liabilityWaiver": "Du accepterer udtrykkeligt at vi ikke er ansvarlige over for dig eller tredjepart for direkte, indirekte, følge-, tabt fortjeneste, særlige, straffende eller eksemplariske skader (selv hvis vi er gjort opmærksom på risikoen), herunder skader pga.: (1) brug eller manglende adgang til tjenester; (2) fejl i indhold; (3) personskade eller ejendomsskade; (4) omkostninger ved erstatningsvarer; (5) uautoriseret serveradgang; (6) transmissionsafbrydelser; (7) vira eller skadelig kode; (8) fejl i indhold; (9) tredjeparts handlinger; (10) andre forhold relateret til disse vilkår eller tjenester, uanset juridisk teori.",
    "miscellaneousTitle": "16. Diverse",
    "miscellaneousDescription": "Disse vilkår og relaterede politikker udgør hele aftalen mellem os. Manglende håndhævelse af rettigheder udgør ikke frafald. Vilkårene gælder i videst muligt omfang. Vi kan overdrage rettigheder og forpligtelser. Vi er ikke ansvarlige for hændelser uden for vores kontrol. Ugyldige bestemmelser påvirker ikke øvrige vilkårs gyldighed. Der opstår ikke samarbejds-, ansættelses- eller agentforhold gennem disse vilkår. Du accepterer at vilkårene ikke skal fortolkes til vores ulempe. Du fraskriver dig forsvar baseret på elektronisk form og manglende underskrift.",
    "contactTitle": "17. Kontakt os",
    "neverCap": "NeverCap",
    "site": "Websted",
    "services": "Tjenester",
    at: "på",
      trademarkProtection: "Navnene, udseendet og følelsen af Tjenesterne er ophavsretligt beskyttet© af Selskabet. Alle rettigheder forbeholdes. Du må ikke duplikere, kopiere eller genbruge nogen del af HTML, CSS, JavaScript eller visuelle designelementer uden udtrykkelig skriftlig tilladelse fra Selskabet. Du skal anmode om tilladelse til at bruge Selskabets logo eller eventuelle Tjenestelogoer til promotionsformål. Send os en e-mail {at} {email} med anmodninger om brug af logoer. Vi forbeholder os retten til at tilbagekalde denne tilladelse, hvis du overtræder disse Servicevilkår.",
      privacyPolicyDescription: "Vi tager databeskyttelse og -sikkerhed alvorligt. Gennemgå vores {policy}. Ved at bruge Websiden accepterer du at være bundet af vores Privatlivspolitik, som er inkorporeret i disse Servicevilkår. Bemærk venligst, at Websiden er hostet i USA. Hvis du tilgår Websiden fra enhver anden region i verden med love eller andre krav vedrørende indsamling, brug eller offentliggørelse af personoplysninger, der afviger fra gældende love i USA, så ved fortsat brug af Websiden overfører du dine data til USA, og du accepterer, at dine data overføres og behandles i USA.",
      contactDescription: "Hvis du har spørgsmål til nogen af Servicevilkårene, skal du kontakte os {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
