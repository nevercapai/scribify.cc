// 意大利语
let message = {
  // 首页
  HomePage: {
    home: "Tutte Le Trascrizioni",
    times: "{times} trascrizioni gratuite al giorno, {left} rimanenti oggi. ",
    tips: "Aggiorna a Pro per trascrizioni illimitate.",
    update: "Aggiorna ora",
    rename: "Rinomina",
    delete: "Elimina",
    cancel: "Annulla",
    confirm: "Crea",
    dialogLabel: "Nome cartella",
    recently: "File recenti",
    loading: "Caricamento",
    tour: {
      step0: {
        title: "Benvenuto in {name}",
        tip: "Qui puoi:",
        content: "Trascrivere conversazioni, riunioni, lezioni e altro ancora",
        next: "Inizia"
      },
      step1: {
        title: "Trascrivi file",
        content:
          "Supporta tre metodi di trascrizione: file locali, link e registrazioni."
      },
      step2: {
        title: "Crea una cartella",
        content:
          'Clicca su "+" per creare una cartella e organizzare i tuoi file.'
      },
      step3: {
        title: "Visualizza dettagli trascrizione e modifica",
        content:
          "Clicca sull'elemento per visualizzare i dettagli della trascrizione, modificarla e tradurla."
      },
      next: "Avanti",
      finish: "Fatto"
    },
    export: {
      export: "Esporta",
      title: "Stiamo generando la tua esportazione",
      title2: "Il tuo file è pronto",
      singleLoadingContent: "1 file in fase di compressione.",
      singleSuccessContent: "1 file è stato compresso.",
      loadingContent: "{num} file in fase di compressione.",
      successContent: "{num} file sono stati compressi.",
      cancel: "Annulla esportazione",
      error: "Errore esportazione",
      dialog: {
        title: "Avviso",
        content: "Annullare l'esportazione?",
        cancel: "Annulla esportazione",
        continue: "Continua esportazione"
      }
    },
    welcome: {
      title: "Benvenuto su Scribify!",
      description: "Qui puoi:",
      transcribe:
        "Trascrivi senza sforzo con Scribify: trasforma le conversazioni vocali in testo chiaro, ricercabile e condivisibile in un attimo.",
      precision:
        "Ottieni trascrizioni precise con parlanti e timestamp istantaneamente.",
      translate:
        "Abbatti le barriere linguistiche: traduci le trascrizioni in più di 200 lingue con facilità.",
      edit: "Modifica, perfeziona ed esporta le tue trascrizioni nei formati più adatti alle tue esigenze.",
      collaborate: "Collabora condividendo il tuo testo trascritto con altri.",
      button: "Inizia",
      tip: "Pronto a trasformare l'audio in testo trascritto? Inizia ad esplorare ora!",
      tip2: "Inizia ad esplorare ora!",
      tip1: "Pronto a trasformare l'audio in testo trascritto? "
    },
    subscriptionModal: {
      left: {
        title: "Ottieni il Piano Pro per sbloccare di più",
        c1: "Trascrizioni illimitate",
        c2: "Caricamenti di 10 ore",
        c3: "Massima priorità",
        c4: "99% di precisione nella trascrizione",
        c5: "Più di 100 lingue supportate",
        c6: "Identificazione dei parlanti",
        c7: "Traduzione delle trascrizioni",
        t1: "Trascrizioni illimitate per una persona.",
        t2: "Ogni file può durare fino a 10 ore / 5 GB. Carica 50 file alla volta.",
        t3: "Trascriveremo sempre i tuoi file il prima possibile con la massima priorità."
      },
      right: {
        title: "Ottieni il Piano Pro",
        yearly: "Annuale",
        monthly: "Mensile",
        save: "Risparmio",
        preMonth: "al mese",
        preYear: "all'anno",
        firstMonth: "primo mese",
        afterwards: "successivamente"
      },
      subscribe: "Abbonati"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Fallito",
      selected: "Selezionato",
      success: "Successo",
      fileList: "Elenco File"
    },
    dialog: {
      move: {
        title: "Sposta",
        label: "Scegli una cartella",
        placeholder: "Scegli una cartella",
        confirm: "Sposta",
        cancel: "Annulla"
      },
      rename: {
        title: "Rinomina",
        label: "Nome file",
        confirm: "Rinomina",
        cancel: "Annulla"
      },
      delete: {
        title: "Elimina",
        file: "file",
        files: "file",
        label: "Sei sicuro di voler eliminare?",
        confirm: "Elimina",
        cancel: "Annulla"
      },
      share: {
        title: "Condividi",
        label:
          "Chiunque con il seguente link sicuro può visualizzare questa trascrizione e il file multimediale associato.",
        confirm: "Copia link",
        success: "Copia riuscita"
      },
      export: {
        title: "Esporta",
        select: "Seleziona il formato di cui hai bisogno",
        settings: "Impostazioni",
        speaker: "Includi speaker",
        timecodes: "Includi timecodes",
        confirm: "Esporta",
        cancel: "Annulla",
        selectErr: "Seleziona uno o più formati"
      }
    },
    search: {
      placeholder: "Cerca"
    },
    recently: "Recentemente",
    record: "Registra",
    transcribe: "Trascrivi",
    unclassified: "Cartelle non classificate",
    buttons: {
      transcribe: "Trascrivi file",
      url: "Trascrivi link",
      record: "Registra e trascrivi",
      recording: "Registrazione..."
    },
    delSuccess: "Eliminato con successo",
    create: "Crea",
    endRecord: {
      title: "Avviso",
      content:
        "Stai registrando. Questa azione terminerà la registrazione. Vuoi terminare la registrazione?",
      confirm: "Continua Registrazione",
      cancel: "Termina Registrazione"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Registra",
      pause: "Pausa",
      resume: "Riprendi",
      stop: "Ferma",
      endRecord: "Termina registrazione",
      delete: "Elimina",
      transcribe: "Trascrivi",
      permissionDenied: "Permesso microfono negato o dispositivo non esistente",
      dialog: {
        delete: {
          title: "Avviso",
          label: "Sei sicuro di voler eliminare questa registrazione?",
          confirm: "Elimina",
          cancel: "Annulla"
        },
        complete: {
          title: "Registrazione Completata",
          label:
            "La registrazione ha raggiunto le 10 ore e si è automaticamente fermata. Per favore, trascrivi.",
          confirm: "Fatto"
        },
        speaker: {
          content:
            "Per l'identificazione del parlante, i file sono limitati a 3 ore. Deseleziona '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Trascrivi un media online",
        title: "Incolla link",
        label:
          "Incolla il link del tuo video o audio da: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram e altre piattaforme...",
        confirm: "Aggiungi",
        cancel: "Annulla",
        // Inserisci un link corretto
        errorTitle: "Il link che hai inserito è errato. Controlla e riprova.",
        linkName: "Link"
      },
      file: {
        orTitle: "Trascrivi dall'URL",
        dialogTitle: "Carica i file da trascrivere",
        tip1: "Trascina i file qui o fai clic per sfogliarli",
        tip2: "Clicca per sfogliare",
        or: "o",
        supported: "Formati supportati"
      },
      del: {
        title: "Avviso",
        content:
          "Tutto il progresso verrà perso. Sei sicuro di voler annullare la trascrizione?",
        cancel: "Conferma annullamento",
        confirm: "Continua a trascrivere"
      },
      files: "File",
      resultDialogTitle: "Trascrivi file",
      resultDialogTitle2: "Trascrivi file",
      cancel: "Annulla",
      confirm: "Trascrivi",
      return: "Torna indietro",
      addMore: "Aggiungi altri",
      language: "Seleziona la lingua",
      failed: "Fallito",
      tooLarge: "Il file supera il limite (5 GB).",
      linkUpload: "Caricamento",
      fileFormat: "Formato file non consentito",
      localFiles: "File locali",
      pasteLink: "Link online",
      uploadErr: "Errore caricamento",
      hashErr: "Errore hash",
      table: {
        status: "Stato",
        file: "File",
        size: "Dimensione",
        noData: "Nessun dato"
      },
      maxFileNum: "Il numero di file non può superare {num}.",
      speaker: "Identifica Parlanti",
      speakerLabel:
        "Rileva automaticamente chi sta parlando",
      guest: {
        transcribe: "Trascrivere",
        file: "File",
        audio: "File audio/video",
        Uploading: "Caricamento in corso..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Recentemente",
      popular: "Popolare",
      other: "Altro",
      searchLanguage: "Cerca lingua",
      noMatch: "Nessuna lingua corrispondente trovata",
      English: "Inglese",
      "English(US)": "Inglese (USA)",
      "English(UK)": "Inglese (Regno Unito)",
      Spanish: "Spagnolo",
      Portuguese: "Portoghese",
      French: "Francese",
      Italian: "Italiano",
      German: "Tedesco",
      Dutch: "Olandese",
      Polish: "Polacco",
      Danish: "Danese",
      Japanese: "Giapponese",
      Korean: "Coreano",
      Hungarian: "Ungherese",
      Czech: "Ceco",
      Chinese: "Cinese",
      Hebrew: "Ebraico",
      Arabic: "Arabo",
      Azerbaijani: "Azerbaigiano",
      Estonian: "Estone",
      Belarusian: "Bielorusso",
      Bulgarian: "Bulgaro",
      Icelandic: "Islandese",
      Bosnian: "Bosniaco",
      Persian: "Persiano",
      Russian: "Russo",
      "Chinese(Traditional)": "Cinese (Tradizionale)",
      Finnish: "Finlandese",
      Kazakh: "Kazako",
      Galician: "Galiziano",
      Catalan: "Catalano",
      "Chinese(Simplified)": "Cinese (Semplificato)",
      Kannada: "Kannada",
      Croatian: "Croato",
      Latvian: "Lettone",
      Lithuanian: "Lituano",
      Romanian: "Romeno",
      Marathi: "Marathi",
      Malay: "Malese",
      Macedonian: "Macedone",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalese",
      Norwegian: "Norvegese",
      Swedish: "Svedese",
      Serbian: "Serbo",
      Slovak: "Slovacco",
      Slovenian: "Sloveno",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Tailandese",
      Turkish: "Turco",
      Welsh: "Gallese",
      Urdu: "Urdu",
      Ukrainian: "Ucraino",
      Greek: "Greco",
      Armenian: "Armeno",
      Hindi: "Hindi",
      Indonesian: "Indonesiano",
      Vietnamese: "Vietnamita",
      Albanian: "Albanese",
      Amharic: "Amarico",
      Assamese: "Assamese",
      Occitan: "Occitano",
      Bashkir: "Bashkir",
      Basque: "Basco",
      Breton: "Bretone",
      Tibetan: "Tibetano",
      Faroese: "Faroese",
      Sanskrit: "Sanscrito",
      Khmer: "Khmer",
      Georgian: "Georgiano",
      Gujarati: "Gujarati",
      "Haitian Creole": "Creolo haitiano",
      Hausa: "Hausa",
      Latin: "Latino",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Lussemburghese",
      Malagasy: "Malgascio",
      Maltese: "Maltese",
      Malayalam: "Malayalam",
      Mongolian: "Mongolo",
      Bengali: "Bengalese",
      Burmese: "Birmano",
      Punjabi: "Punjabi",
      Pashto: "Pashtu",
      Sinhala: "Singalese",
      Shona: "Shona",
      Somali: "Somalo",
      Tajik: "Tagico",
      Tatar: "Tataro",
      Telugu: "Telugu",
      Turkmen: "Turkmeno",
      Uzbek: "Uzbeko",
      Hawaiian: "Hawaiano",
      "Norwegian Nynorsk": "Norvegese Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Giavanese",
      Cantonese: "Cantonese",
      Abkhaz: "Abkhaz",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlandese",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osseto",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinese",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Northern Sotho",
      bem: "Bemba",
      bik: "Bicolano",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Ceceno",
      chk: "Chuukese",
      Chuvash: "Chuvash",
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
      "South Ndebele": "Ndebele del Sud",
      dov: "Dondo",
      "bm-Nkoo": "Bambara N'Ko",
      "French(Canada)": "Francese (Canada)",
      Fijian: "Figiano",
      fon: "Fon",
      "Western Frisian": "Frisone occidentale",
      fur: "Friulano",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Kalaallisut",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirghiso",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "K'iche'",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corso",
      "crh-Latn": "Tataro di Crimea (Latino)",
      crh: "Tataro di Crimea (Cirillico)",
      Quechua: "Quechua",
      Kurdish: "Curdo (Kurmanji)",
      ckb: "Curdo (Sorani)",
      trp: "Kokborok",
      ltg: "Latgaliano",
      lij: "Ligure",
      Limburgish: "Limburghese",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardo",
      rom: "Romaní",
      mad: "Madura",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malese (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauriziano creolo",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl orientale",
      "Southern Sotho": "Sotho del Sud",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portoghese (Portogallo)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapoteco",
      "Northern Sami": "Sami settentrionale",
      Samoan: "Samoano",
      kri: "Krio",
      crs: "Creolo delle Seychelles",
      Sango: "Sango",
      "sat-Latn": "Santali (Latino)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaelico scozzese",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latino)",
      Tahitian: "Tahitiano",
      Tonga: "Tongano",
      Tigrinya: "Tigrino",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassarese",
      vec: "Veneziano",
      Uyghur: "Uiguro",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Slesiano",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Patois giamaicano",
      sah: "Sacha",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (Latino)",
      Inuktitut: "Inuktitut (Sillabico)",
      yua: "Maya Yucateco",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "o", // 或
    LoginBtn: "Accedi con Email",
    LoginGoogle: "Accedi con Google",
    SignupBtn: "Iscriviti con Email",
    SignupGoogle: "Iscriviti con Google",
    SignupDes: "Iscriviti oggi per vedere la magia — gratis.",
    SignupTitle: "Trascrizione accurata e illimitata",
    signup: "Registrati", // 注册
    sign_up: "Registrati", // 注册
    loginByGoogle: "Continua con Google", // 使用Google登录
    emailAddress: "Inserisci la tua email", // 请输入您的邮箱
    createAccount: "Crea un nuovo account", // 创建账户
    accountExists: "Hai già un account? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Continuando, acconsenti alle nostre {terms} e {policy}.",
      terms: "Condizioni",
      policy: "Informativa sulla privacy"
    },
    setPassword: "Imposta una password", // 设置密码
    code: "Codice di verifica", // 验证码
    resend: "Rinvia", // 重新发送
    enterPassword: "Password: minimo 6 caratteri.", // 请输入密码
    passwordLeval: "Livello password", // 密码强度
    Weak: "Debole", // 弱 中 强
    Medium: "Media", // 弱 中 强
    Strong: "Forte", // 弱 中 强
    confirmPassword: "Conferma la tua password", // 确认密码
    invalidEmail: "Indirizzo email non valido", // 无效的邮箱地址
    logInDirectly: "Questo account esiste già. Accedi direttamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Codice di verifica errato. Riprova.", // 验证码错误，请重试
    atLeastSix: "La password deve essere lunga almeno 6 caratteri.", // 密码长度至少6位
    passwordNotMatch: "Le password non corrispondono. Riprova.", // 密码不匹配，请重试
    login: "Accedi", // 登录
    log_in: "Accedi", // 登录
    log_In: "Accedi", // 登录
    password: "Password", // 密码
    forgotPassword: "Password dimenticata?", // 忘记密码？
    noAccount: "Non hai un account? ", // 没有账户？注册
    accountNotExists: "Questo account non esiste.", // 账户不存在
    passwordError: "Errore password", // 密码错误
    sendCode: "Invia codice di verifica", // 发送验证码
    resetPassword: "Reimposta password", // 重置密码
    resetYourPassword: "Resetta la tua password", // 重置你的密码
    newOldCantSame: "La nuova password deve essere diversa da quella vecchia.", // 新密码与旧密码不能相同
    passwordResetOk: "Password resettata con successo！", // 密码重置成功！
    signupToSaveProgress:
      "Completa la registrazione per salvare i tuoi progressi.",
    tip: "Suggerimento",
    tipContentEmail:
      "Abbiamo appena inviato la password di accesso del tuo account alla tua email.",
    tipContentPassword:
      "Controlla la posta in arrivo e accedi con la tua email e password.",
    codeToEmail:
      "Abbiamo appena inviato un codice di verifica alla tua email. Controlla la tua casella di posta e incolla il codice di verifica sopra."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Piano di abbonamento",
    freeversion: "Gratuito",
    transcribeTimesDay: "3 trascrizioni giornaliere",
    uploadMinutes: "Caricamenti di 30 minuti",
    lowerPriority: "Priorità inferiore",
    currentPlan: "Piano attuale",
    professionalEdition: "edizione professionale",
    unlimitedTranscription: "Trascrizione illimitata",
    unlimitedNumberOfTimes: "Frequenza e durata di trascrizione illimitate.",
    filesUploadedAtOnce:
      "Ogni file può durare fino a 10 ore / 5 GB. Carica 50 file contemporaneamente.",
    highestPriority: "massima priorità",
    weWillGiveTheHighest:
      "Trascriveremo sempre i tuoi file il prima possibile con la massima priorità.",
    theFirstMonth: "Il primo mese",
    subscribeTo: "abbonati a",
    basicVersionFree: "Versione base (gratuita)",
    return: "Indietro",
    annualize: "annuale",
    monthly: "mensile",
    everyYear: "ogni anno",
    saved: "risparmiato",
    byTheMonth: "al mese",
    firstMonth: "primo mese",
    afterwardsEveryMonth: "Successivamente, ogni mese",
    manageSubscription: "Gestisci abbonamento",
    professionalYearbook: "Annuale professionale",
    professionalMonthly: "Mensile professionale",
    subscriptionWillCancelledOn: "Il tuo abbonamento verrà cancellato il",
    displayLanguage: "Lingua di visualizzazione",
    update: "Aggiorna ora",
    basicversion: "Versione base (Gratuita)",
    daily: "{start} di {end} trascrizioni giornaliere utilizzate",
    upgradetoPro: "Passa a Pro",
    accountSetting: "Impostazioni account",
    logOut: "Esci",
    account: "Account",
    email: "Email",
    id: "ID",
    password: "Password",
    resetPassword: "Reimposta password",
    logIn: "Accedi",
    tryForFree: "Prova gratuitamente",
    notFund: "Non trovato",
    couldntFind: "Non abbiamo trovato quello che cercavi.",
    proAnnual: "Pro Annuale",
    proMonthly: "Pro Mensile",
    perMonth: "al mese",
    afterwards: "successivamente",
    accuracy: "precisione di trascrizione",
    supported: "lingue supportate",
    identification: "Identificazione relatore",
    transcriptSranslation: "Traduzione trascrizione",
    perYear: "all'anno",
    getProPlan: "Ottieni piano Pro",
    changeToAnnual: "Passa ad annuale",
    automaticRenewalon: "Rinnovo automatico il",
    eachMonth: "Rinnovo automatico il {time} di ogni mese.",
    automaticRenewal:
      "Rinnovo automatico fallito, si prega di verificare il metodo di pagamento.",
    eachYear: "Rinnovo automatico il {time} ogni anno.",
    returnAccountSetting: "Ritorna",
    needsToWaitLonger:
      "Attendi più a lungo prima che i tuoi file vengano trascritti.",
    freeThreeTimesDay: "Trascrivi 3 file gratuitamente ogni giorno.",
    oneFileUploaded:
      "Ogni file può durare fino a 30 minuti. Carica 1 file alla volta.",
    uploadWithinHours: "Caricamenti di 10 ore",
    yourSubscription: "Il tuo abbonamento verrà annullato il {time}.",
    save: "Risparmiare",
      freeversion2: "Piano Gratuito"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Cinese(Semplificato)",
      "Chinese(Traditional)": "Cinese(Tradizionale)",
      Japanese: "Giapponese",
      Danish: "Danese",
      German: "Tedesco",
      English: "Inglese",
      Spanish: "Spagnolo",
      French: "Francese",
      Italian: "Italiano",
      Hungarian: "Ungherese",
      Dutch: "Olandese",
      Norwegian: "Norvegese",
      Polish: "Polacco",
      Portuguese: "Portoghese",
      Finnish: "Finlandese",
      Swedish: "Svedese",
      Turkish: "Turco",
      Greek: "Greco",
      Russian: "Russo",
      Ukrainian: "Ucraino",
      Hebrew: "Ebraico",
      Arabic: "Arabo",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Prova gratis~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Unisciti alla lista d'attesa, ottieni le ultime news di NuxtPro PRIMA e sconti!",
      placeholder: "Inserisci la tua email",
      button: "Unisciti alla lista d'attesa",
      joinCountMessage:
        "🔥 Utente iniziale #{count} si è appena unito alla lista d'attesa!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "Questo è un demo",
      corpInfo: "info aziendale"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "errore download video"
      },
      mse: {
        code: 2,
        msg: "errore append stream"
      },
      parse: {
        code: 3,
        msg: "errore di parsing"
      },
      format: {
        code: 4,
        msg: "formato errato"
      },
      decoder: {
        code: 5,
        msg: "errore di decodifica"
      },
      runtime: {
        code: 6,
        msg: "errori grammaticali"
      },
      timeout: {
        code: 7,
        msg: "timeout di riproduzione"
      },
      other: {
        code: 8,
        msg: "altri errori"
      }
    },
    HAVE_NOTHING: "Non ci sono informazioni sulla disponibilità di audio/video",
    HAVE_METADATA: "Audio/video metadata pronta ",
    HAVE_CURRENT_DATA:
      "I dati sulla posizione di riproduzione corrente sono disponibili, ma non ci sono abbastanza dati per riprodurre il prossimo frame/millisecondo",
    HAVE_FUTURE_DATA:
      "Dati correnti e almeno un frame di dati sono disponibili",
    HAVE_ENOUGH_DATA: "I dati disponibili sono sufficienti per riprodurre",
    NETWORK_EMPTY: "Audio/video non inizializzato",
    NETWORK_IDLE:
      "Audio/video è attivo e selezionato per le risorse, ma non viene utilizzato alcun network",
    NETWORK_LOADING: "Il browser sta scaricando i dati",
    NETWORK_NO_SOURCE: "Nessuna sorgente audio/video trovata",
    MEDIA_ERR_ABORTED: "Il processo di fetch è interrotto dall'utente",
    MEDIA_ERR_NETWORK: "Si è verificato un errore durante il download",
    MEDIA_ERR_DECODE: "Si è verificato un errore durante la decodifica",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video non supportato",
    REPLAY: "Riproduci",
    ERROR: "Rete offline",
    PLAY_TIPS: "Riproduci",
    PAUSE_TIPS: "Pausa",
    PLAYNEXT_TIPS: "Riproduci il prossimo",
    DOWNLOAD_TIPS: "Scarica",
    ROTATE_TIPS: "Ruota",
    RELOAD_TIPS: "Ricarica",
    FULLSCREEN_TIPS: "Vai in modalità a schermo intero",
    EXITFULLSCREEN_TIPS: "Esci dalla modalità a schermo intero",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Esci dalla cssfullscreen",
    TEXTTRACK: "Sottotitolo",
    PIP: "PIP",
    SCREENSHOT: "Schermata",
    LIVE: "LIVE",
    OFF: "Off",
    OPEN: "Apri",
    MINI_DRAG: "Clicca e tieni premuto per trascinare",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Prova a",
    REFRESH: "Aggiorna",
    FORWARD: "avanti",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Accendi i sottotitoli",
    TM_SUBTITLE_HIDE_TIPS: "Disabilita i sottotitoli",
    TM_MINIMIZE_TIPS: "Nascondi il video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "politica sulla riservatezza",
    lastUpdated: "Ultimo aggiornamento: 25 agosto 2025",
    policyDescription:
      'La presente Informativa descrive come Scribify (di seguito denominata "Scribify", "nostro", "noi", "ci") raccoglie, utilizza e divulga le tue informazioni personali quando utilizzi i nostri servizi, siti web',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 'e software (collettivamente, i "Servizi").',
    policyAgreement:
      "Si prega di leggere attentamente la presente Informativa sulla privacy e di assicurarsi di averla compresa. Utilizzando uno qualsiasi dei nostri Servizi, l'utente accetta la presente Informativa sulla privacy. Se non acconsente all'utilizzo dei suoi dati personali in conformità con la presente Informativa, è tenuto a interrompere immediatamente l'utilizzo dei nostri Servizi.",
    policyOverview:
      "In questa informativa, indichiamo: quali dati raccogliamo e perché; come vengono trattati i tuoi dati; e i tuoi diritti in merito ai tuoi dati. Non vendiamo i tuoi dati.",
    scopeTitle:
      "1. Ambito di applicazione della presente Informativa sulla privacy",
    whatWeCollectTitle: "2. Cosa raccogliamo e perché",
    accessShareTitle: "3. Quando accediamo o condividiamo le tue informazioni",
    secureDataTitle: "4. Come proteggiamo i tuoi dati",
    deleteContentTitle: "5. Cosa succede quando elimini i tuoi contenuti",
    locationTitle: "6. Ubicazione del sito e dei dati",
    childrenPrivacyTitle: "7. Privacy dei bambini",
    updatesTitle: "8. Aggiornamenti alla presente Informativa sulla privacy",
    contactUsTitle: "9. Contattaci",
    identityAccessTitle: "2.1 Identità e accesso",
    billingInfoTitle: "2.2 Informazioni di fatturazione",
    productInteractionsTitle: "2.3 Interazioni con i prodotti",
    websiteInteractionsTitle: "2.4 Interazioni con il sito web",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 Corrispondenza volontaria",
    scopeContent:
      "La presente Informativa sulla privacy si applica esclusivamente alla raccolta e al trattamento delle informazioni relative agli utenti dei Servizi. Non si applica a servizi, siti web o software gestiti da terze parti a noi collegati (sia che tali link siano forniti da noi o condivisi da altri utenti), né a contenuti, dati, applicazioni o materiali di terze parti. Si consiglia di consultare le informative sulla privacy di qualsiasi sito web o software di terze parti prima di fornire loro informazioni.",
    collectPrinciple:
      "Il nostro principio guida è raccogliere solo ciò di cui abbiamo bisogno. Ecco cosa significa in pratica:",
    identityAccessContent:
      "Quando ti registri per uno dei nostri prodotti, ti chiediamo informazioni identificative come nome e indirizzo email. Questo ci permette di fornire funzionalità essenziali del prodotto e di inviarti aggiornamenti e altre informazioni essenziali.",
    billingInfoContent:
      "Se ti iscrivi a un prodotto a pagamento, ti verrà chiesto di fornire i tuoi dati di pagamento e l'indirizzo di fatturazione. I dati di pagamento vengono inviati direttamente al nostro processore di pagamento e non raggiungono i nostri server.",
    productInteractionsContent:
      "Conserviamo sui nostri server i contenuti che carichi, ricevi o gestisci nei tuoi account prodotto. A meno che tu non elimini tali contenuti, potremmo conservarli finché il tuo account sarà attivo.",
    websiteInteractionsContent:
      "Raccogliamo informazioni sulla tua attività di navigazione per scopi analitici e statistici, come test del tasso di conversione e sperimentazione di nuovi design di prodotto. Questo include, ad esempio, le versioni del tuo browser e del tuo sistema operativo, il tuo indirizzo IP, le pagine web che hai visitato e il tempo di caricamento, e quale sito web ti ha indirizzato a noi. Se hai un account e hai effettuato l'accesso, questi dati di analisi web sono associati al tuo indirizzo IP e al tuo account utente finché il tuo account non sarà più attivo.",
    cookiesContent1:
      "Utilizziamo anche cookie proprietari persistenti e alcuni cookie di terze parti per memorizzare determinate preferenze, semplificare l'utilizzo delle nostre applicazioni ed eseguire test A/B, nonché supportare alcune analisi.",
    cookiesContent2:
      "Un cookie è un frammento di testo memorizzato dal tuo browser. Può aiutare a ricordare le informazioni di accesso e le preferenze del sito. Potrebbe anche raccogliere informazioni come il tipo di browser, il sistema operativo, le pagine web visitate, la durata della visita, i contenuti visualizzati e altri dati relativi al flusso di clic. Puoi modificare le impostazioni di conservazione dei cookie e accettare o bloccare singoli cookie nelle impostazioni del tuo browser, sebbene le nostre app non funzioneranno e altri aspetti del nostro servizio potrebbero non funzionare correttamente se disattivi i cookie.",
    voluntaryCorrespondenceContent:
      "Quando ci invii un'e-mail con una domanda o per chiedere aiuto, conserviamo tale corrispondenza, incluso il tuo indirizzo e-mail, in modo da avere uno storico della corrispondenza passata a cui fare riferimento se ci contatterai in futuro.",
    accessShareContent1:
      "Per fornirti i prodotti o i servizi che hai richiesto. Utilizziamo alcuni sub-responsabili terzi per aiutarci a gestire le nostre applicazioni e fornirti i Servizi. Tra questi rientrano i fornitori di servizi cloud e di analisi.",
    accessShareContent2:
      "Per indagare, prevenire o intervenire in caso di abusi. L'accesso all'account di un cliente durante le indagini su potenziali abusi è una misura di ultima istanza. Vogliamo proteggere la privacy e la sicurezza sia dei nostri clienti che di coloro che ci segnalano problemi e facciamo del nostro meglio per bilanciare queste responsabilità durante l'intero processo. Se scopriamo che stai utilizzando i nostri prodotti per uno scopo limitato, adotteremo le misure necessarie, inclusa la notifica alle autorità competenti ove necessario.",
    accessShareContent3: "Quando richiesto dalla legge applicabile.",
    userDataRequests:
      "- Richieste di dati utente. La nostra politica è di non rispondere alle richieste governative relative ai dati utente, a meno che non siamo obbligati da un procedimento legale o, in circostanze limitate, in caso di richiesta di emergenza. Tuttavia, qualora le autorità competenti statunitensi dispongano del mandato, di una citazione in giudizio o di un ordine del tribunale che ci imponga di condividere i dati, siamo tenuti a rispettarli. Allo stesso modo, risponderemo alle richieste provenienti da autorità governative al di fuori degli Stati Uniti solo se obbligati dal governo statunitense attraverso le procedure delineate in un trattato o accordo di mutua assistenza legale. La nostra politica è quella di informare gli utenti interessati prima di condividere i dati, a meno che non ci sia legalmente vietato farlo e fatta eccezione per alcuni casi di emergenza.",
    preservationRequests:
      "- Richieste di conservazione. Analogamente, la nostra politica è di soddisfare le richieste di conservazione dei dati solo se obbligati ai sensi del Federal Stored Communications Act statunitense, 18 USC Sezione 2703(f), o da una citazione in giudizio statunitense correttamente notificata in materia civile. Non condividiamo i dati conservati a meno che non siamo obbligati dalla legge o da un'ordinanza del tribunale contro la quale scegliamo di non presentare ricorso. Inoltre, a meno che non riceviamo un mandato, un'ordinanza del tribunale o una citazione in giudizio prima della scadenza del periodo di conservazione richiesto, distruggeremo tutte le copie conservate dei dati dei clienti al termine del periodo di conservazione.",
    taxAudit:
      "- In caso di verifica da parte di un'autorità fiscale, potremmo essere tenuti a condividere informazioni relative alla fatturazione. In tal caso, condivideremo solo il minimo necessario, come gli indirizzi di fatturazione e le informazioni sull'esenzione fiscale.",
    secureDataContent1: "Tutti i dati sono crittografati tramite",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "quando vengono trasmessi dai nostri server al tuo browser.",
    deleteContentContent:
      "Se elimini un contenuto, questo diventerà immediatamente inaccessibile.",
    locationContent:
      "I nostri prodotti e altre proprietà web sono gestiti negli Stati Uniti. Se ti trovi nell'Unione Europea, nel Regno Unito o in un altro luogo al di fuori degli Stati Uniti, tieni presente che tutte le informazioni che ci fornisci saranno trasferite e archiviate negli Stati Uniti. Utilizzando i nostri siti web o Servizi e/o fornendoci i tuoi dati personali, acconsenti a tale trasferimento.",
    childrenPrivacyContent:
      "I Servizi non sono rivolti ai minori e non raccogliamo consapevolmente Informazioni Personali da minori di età inferiore a 13 anni. Se hai meno di 13 anni, ti preghiamo di non inviare alcuna informazione personale tramite i Servizi. Se ritieni che un minore ci abbia fornito Informazioni Personali in violazione della presente Informativa, ti preghiamo di contattarci come indicato di seguito.",
    updatesContent:
      "Potremmo aggiornare questa informativa se necessario per conformarci alle normative pertinenti e riflettere eventuali nuove pratiche. Ogni volta che apporteremo modifiche significative alle nostre informative, aggiorneremo la data in cima a questa pagina.",
    contactUsContent1:
      "Se hai domande, commenti o reclami sulla nostra Informativa sulla privacy, ti preghiamo di",
    contactUs: "contattaci",
    contactUsContent2:
      "e faremo il possibile per gestire il tuo reclamo il prima possibile."
  },
  termsOfService: {
    termsOfServiceTitle: "Termini di servizio",
    lastUpdated: "Ultimo aggiornamento: 21 settembre 2022",
    thankYouMessage: "Grazie per aver utilizzato i nostri prodotti!",
    companyReference:
      'Quando in questo documento parliamo di "Società", "noi", "nostro" o "ci", ci riferiamo a Scribify.',
    servicesDefinition:
      `Quando parliamo di "Servizi", intendiamo qualsiasi prodotto creato e gestito da Scribify, sia che venga fornito tramite un browser web, un'applicazione desktop, un'applicazione mobile o un altro formato.`,
    termsUpdateNotice:
      "Potremmo aggiornare i presenti Termini di Servizio in futuro. In genere, queste modifiche sono state apportate per chiarire alcuni di questi termini, collegandoli a un'informativa correlata più ampia. Ogni volta che apporteremo una modifica significativa alle nostre informative, aggiorneremo la data in cima a questa pagina e adotteremo qualsiasi altra misura appropriata per informare i titolari di account.",
    acceptanceOfAgreementTitle: "1. Accettazione del Contratto",
    scribifyServicesTitle: "2. Servizi di Scribify",
    accountTermsTitle: "3. Termini dell'account",
    paymentRefundsTitle: "4. Pagamenti, rimborsi e modifiche al piano",
    cancellationTerminationTitle: "5. Annullamento e risoluzione",
    submissionsTitle: "6. Invii",
    uptimeSecurityTitle: "7. Tempo di attività e sicurezza",
    siteManagementTitle: "8. Gestione del sito",
    copyrightContentTitle: "9. Copyright e proprietà dei contenuti",
    prohibitedActivitiesTitle: "10. Attività proibite",
    featuresBugsTitle: "11. Caratteristiche e bug",
    correctionsTitle: "12. CORREZIONI",
    userDataTitle: "13. Dati utente",
    privacyPolicyTitle: "14. Informativa sulla privacy",
    liabilityTitle: "15. Responsabilità",
    miscellaneousTitle: "16. Varie",
    contactUsTitle: "17. Contattaci",
    acceptanceContent1:
      "Utilizzando i nostri Servizi, accetti il presente Contratto, che di conseguenza diventa un contratto vincolante tra te e Scribify. Dichiari di essere legalmente in grado di accettare i presenti Termini e affermi di avere l'età legale per stipulare un contratto vincolante. L'accettazione da parte di Scribify è espressamente subordinata al tuo assenso a tutti i termini e le condizioni del presente Contratto.",
    acceptanceContent2:
      "I Servizi non sono destinati e non devono essere utilizzati da persone di età inferiore a 18 anni. Utilizzando i Servizi, dichiari e garantisci di soddisfare i requisiti di idoneità di cui sopra.",
    acceptanceContent3:
      'I termini "tu", "tuo", "te stesso" includono anche i tuoi dipendenti, agenti, rappresentanti commerciali e qualsiasi altro individuo a cui fornisci accesso ai Servizi tramite il tuo Account (come definito di seguito). Sei responsabile di garantire che tutte le persone che accedono ai Servizi tramite il tuo account siano a conoscenza dei presenti Termini e li rispettino.',
    acceptanceContent4:
      "Scribify si riserva il diritto di rivedere e aggiornare i presenti Termini di volta in volta a sua esclusiva discrezione. Tutte le modifiche hanno effetto immediato dalla loro pubblicazione. L'utilizzo continuato dei Servizi dopo la pubblicazione dei Termini modificati implica l'accettazione delle modifiche. Si prega di controllare periodicamente questa pagina per essere a conoscenza di eventuali modifiche, in quanto vincolanti per l'utente.",
    servicesContent1:
      "I nostri Servizi consentono agli utenti di trasformare le conversazioni vocali in testo trascritto che può essere ricercato, tradotto e condiviso con altri.",
    servicesContent2:
      'Puoi scegliere se utilizzare la versione gratuita dei Servizi ("Servizi gratuiti") oppure la versione a pagamento dei Servizi basata su abbonamento, per la quale potrebbe essere richiesto il pagamento di una quota ("Servizi a pagamento").',
    servicesContent3:
      "Ti metteremo a disposizione i Servizi. Sei responsabile di prendere tutte le disposizioni necessarie per accedere ai Servizi.",
    accountTerms1:
      "- Sei responsabile della sicurezza del tuo account. La Società non può e non sarà responsabile per eventuali perdite o danni derivanti dal mancato rispetto di questo obbligo di sicurezza.",
    accountTerms2:
      "- Non è consentito utilizzare i Servizi per scopi illegali, non etici o immorali.",
    accountTerms3:
      "- Sei responsabile di tutti i contenuti pubblicati e delle attività che si svolgono tramite il tuo account. Ciò include i contenuti pubblicati da altri che: (a) hanno accesso alle tue credenziali di accesso; o (b) dispongono di propri dati di accesso associati al tuo account.",
    accountTerms4:
      '- Devi essere un essere umano. Gli account registrati tramite "bot" o altri metodi automatizzati non sono ammessi.',
    paymentContent1:
      "- Per i Servizi a pagamento che offrono una prova gratuita, ne spieghiamo la durata al momento dell'iscrizione. Dopo il periodo di prova, è necessario pagare in anticipo per continuare a utilizzare il Servizio. In caso di mancato pagamento, questi servizi termineranno.",
    paymentContent2:
      "- Se esegui l'upgrade da un piano gratuito a un piano a pagamento, l'addebito sulla tua carta avverrà immediatamente e il ciclo di fatturazione inizierà il giorno dell'upgrade.",
    paymentContent3:
      "- Tutti i prezzi sono al netto di tasse, imposte o dazi imposti dalle autorità fiscali. Ove richiesto, riscuoteremo tali tasse per conto delle autorità fiscali e le verseremo alle stesse. In caso contrario, il pagamento di tutte le tasse, imposte o dazi sarà a vostro carico.",
    paymentContent4:
      "- Tutti gli acquisti non sono rimborsabili. Puoi annullare qualsiasi servizio a pagamento in qualsiasi momento accedendo al tuo account. Per gli abbonamenti a pagamento, la cancellazione avrà effetto alla fine del periodo di pagamento in corso, salvo diversa indicazione.",
    cancellationContent1:
      "- Se annulli il Servizio prima della scadenza del periodo di tempo pagato, la cancellazione avrà effetto immediato e non ti verrà addebitato alcun costo aggiuntivo. Non calcoliamo automaticamente il tempo non utilizzato nell'ultimo ciclo di fatturazione.",
    cancellationContent2:
      "- Ci riserviamo il diritto di sospendere o chiudere il tuo account e di rifiutare qualsiasi utilizzo attuale o futuro dei nostri Servizi per qualsiasi motivo e in qualsiasi momento. La sospensione implica che non potrai accedere all'account o a qualsiasi contenuto in esso contenuto. La chiusura comporterà inoltre l'eliminazione del tuo account o del tuo accesso allo stesso, nonché la confisca e la rinuncia a tutti i contenuti presenti nel tuo account. Ci riserviamo inoltre il diritto di rifiutare l'utilizzo dei Servizi a chiunque, per qualsiasi motivo e in qualsiasi momento. Abbiamo questa clausola perché, statisticamente parlando, tra le centinaia di migliaia di account sui nostri Servizi, ce n'è almeno uno che compie azioni illecite.",
    cancellationContent3:
      "- L'abuso verbale, fisico, scritto o di altro tipo (incluse minacce di abuso o ritorsione) nei confronti di un dipendente o funzionario della Società può comportare l'immediata chiusura dell'account.",
    submissionsContent:
      `L'utente riconosce e accetta che qualsiasi domanda, commento, suggerimento, idea, feedback o altra informazione relativa al Sito ("Invii") da lui forniti non è riservata e diventerà di nostra esclusiva proprietà. Avremo i diritti esclusivi, inclusi tutti i diritti di proprietà intellettuale, e avremo diritto all'uso e alla diffusione illimitati di tali Invii per qualsiasi scopo lecito, commerciale o di altro tipo, senza alcun riconoscimento o compenso a suo favore. Con la presente, l'utente rinuncia a tutti i diritti morali su tali Invii e garantisce che tali Invii sono originali o che ha il diritto di inviare tali Invii. L'utente accetta che non vi sarà alcun ricorso contro di noi per qualsiasi presunta o effettiva violazione o appropriazione indebita di qualsiasi diritto di proprietà sui suoi Invii.`,
    uptimeContent1:
      `- L'utilizzo dei Servizi è a vostro esclusivo rischio. Forniamo questi Servizi "così come sono" e "secondo disponibilità". Non offriamo accordi sul livello di servizio per la maggior parte dei nostri Servizi, ma prendiamo seriamente l'uptime delle nostre applicazioni.`,
    uptimeContent2:
      "- Ci riserviamo il diritto di disattivare temporaneamente il tuo account se il tuo utilizzo supera significativamente l'utilizzo tipico dei Servizi da parte di altri clienti. Naturalmente, ti contatteremo prima di intraprendere qualsiasi azione, tranne nei rari casi in cui il livello di utilizzo potrebbe influire negativamente sulle prestazioni del Servizio per altri clienti.",
    uptimeContent3:
      "- Adottiamo numerose misure per proteggere e proteggere i tuoi dati attraverso backup, ridondanze e crittografia. Applichiamo la crittografia per la trasmissione dei dati sulla rete Internet pubblica.",
    uptimeContent4:
      "- Ci avvaliamo di fornitori terzi e partner di hosting per fornire l'hardware, il software, le reti, lo storage e la tecnologia correlata necessari per gestire i Servizi.",
    siteManagementContent:
      "Ci riserviamo il diritto, ma non l'obbligo, di: (1) monitorare il Sito per violazioni di questi Termini di servizio; (2) intraprendere azioni legali appropriate contro chiunque, a nostra esclusiva discrezione, violi la legge o questi Termini di servizio, incluso, senza limitazioni, segnalare tale utente alle autorità competenti; (3) a nostra esclusiva discrezione e senza limitazioni, rifiutare, limitare l'accesso, limitare la disponibilità o disabilitare (nella misura in cui tecnologicamente fattibile) uno qualsiasi dei tuoi Contributi o una qualsiasi parte di essi; (4) a nostra esclusiva discrezione e senza limitazioni, preavviso o responsabilità, rimuovere dal Sito o altrimenti disabilitare tutti i file e i contenuti che sono di dimensioni eccessive o che sono in qualsiasi modo gravosi per i nostri sistemi; e (5) altrimenti gestire il Sito in un modo progettato per proteggere i nostri diritti e proprietà e per facilitare il corretto funzionamento del Sito.",
    copyrightContent1:
      "- Tutti i contenuti pubblicati sui Servizi devono essere conformi alla legge statunitense sul copyright.",
    copyrightContent2:
      "- Non rivendichiamo alcun diritto di proprietà intellettuale sul materiale che fornisci ai Servizi. Tutto il materiale caricato rimane di tua proprietà.",
    copyrightContent3:
      "- Non eseguiamo controlli preventivi sui contenuti, ma ci riserviamo il diritto (ma non l'obbligo) a nostra esclusiva discrezione di rifiutare o rimuovere qualsiasi contenuto disponibile tramite il Servizio.",
    copyrightContent4:
      "- I nomi, l'aspetto e le funzionalità dei Servizi sono protetti da copyright© della Società. Tutti i diritti riservati. Non è consentito duplicare, copiare o riutilizzare alcuna parte di HTML, CSS, JavaScript o elementi di design visivo senza l'esplicita autorizzazione scritta della Società. È necessario richiedere l'autorizzazione per utilizzare il logo della Società o qualsiasi logo dei Servizi per scopi promozionali.",
    emailUs: "inviaci un'e-mail",
    copyrightContent5:
      "richieste di utilizzo dei loghi. Ci riserviamo il diritto di revocare questa autorizzazione in caso di violazione dei presenti Termini di servizio.",
    copyrightContent6:
      "- L'utente accetta di non riprodurre, duplicare, copiare, vendere, rivendere o sfruttare alcuna parte dei Servizi, l'uso dei Servizi o l'accesso ai Servizi senza l'espresso consenso scritto della Società.",
    copyrightContent7:
      "- Non è consentito modificare un altro sito web in modo da insinuare falsamente che sia associato ai Servizi o alla Società.",
    copyrightContent8:
      "- Rispettiamo i diritti di proprietà intellettuale altrui. Se ritieni che qualsiasi materiale disponibile sul Sito o tramite il Sito violi un copyright di tua proprietà o da te controllato, ti preghiamo di segnalarcelo immediatamente.",
    contactUs: "contattaci",
    copyrightContent9:
      "Una copia della Notifica verrà inviata alla persona che ha pubblicato o archiviato il materiale a cui si riferisce la Notifica. Si prega di notare che, ai sensi della legge applicabile, si può essere ritenuti responsabili per danni in caso di dichiarazioni sostanzialmente false in una Notifica. Pertanto, se non si è certi che il materiale presente sul Sito o collegato tramite link violi il proprio diritto d'autore, si consiglia di contattare prima un avvocato.",
    prohibitedActivitiesIntro:
      "Non è consentito accedere o utilizzare il Sito per scopi diversi da quelli per cui lo rendiamo disponibile. Il Sito non può essere utilizzato in relazione a iniziative commerciali, ad eccezione di quelle specificamente approvate o approvate da noi.",
    prohibitedActivitiesUserAgreement:
      "In qualità di utente del Sito, accetti di non:",
    prohibitedActivity1:
      "- Recuperare sistematicamente dati o altri contenuti dal Sito per creare o compilare, direttamente o indirettamente, una raccolta, una compilazione, un database o una directory senza la nostra autorizzazione scritta.",
    prohibitedActivity2:
      "- Ingannare, truffare o fuorviare noi e gli altri utenti, in particolare nel tentativo di apprendere informazioni sensibili sull'account, come le password degli utenti.",
    prohibitedActivity3:
      "- Aggirare, disabilitare o interferire in altro modo con le funzionalità del Sito relative alla sicurezza, incluse le funzionalità che impediscono o limitano l'uso o la copia di qualsiasi Contenuto o impongono limitazioni all'uso del Sito e/o del Contenuto in esso presente.",
    prohibitedActivity4:
      "- Denigrare, rovinare o comunque danneggiare, a nostro avviso, noi e/o il Sito.",
    prohibitedActivity5:
      "- Utilizzare qualsiasi informazione ottenuta dal Sito per molestare, abusare o danneggiare un'altra persona.",
    prohibitedActivity6:
      "- Fare un uso improprio dei nostri servizi di supporto o inviare false segnalazioni di abusi o cattiva condotta.",
    prohibitedActivity7:
      "- Utilizzare il Sito in modo non conforme alle leggi o ai regolamenti applicabili.",
    prohibitedActivity8:
      "- Eseguire operazioni di framing o linking non autorizzate sul Sito.",
    prohibitedActivity9:
      "- Caricare o trasmettere (o tentare di caricare o trasmettere) virus, trojan horse o altro materiale, incluso l'uso eccessivo di lettere maiuscole e spamming (pubblicazione continua di testo ripetitivo), che interferisca con l'uso ininterrotto e il godimento del Sito da parte di qualsiasi parte o modifichi, danneggi, interrompa, alteri o interferisca con l'uso, le caratteristiche, le funzioni, il funzionamento o la manutenzione del Sito.",
    prohibitedActivity10:
      "- Utilizzare in modo automatizzato il sistema, ad esempio utilizzando script per inviare commenti o messaggi, oppure utilizzando data mining, robot o strumenti simili per la raccolta e l'estrazione di dati.",
    prohibitedActivity11:
      "- Eliminare l'avviso di copyright o di altri diritti proprietari da qualsiasi Contenuto.",
    prohibitedActivity12:
      "- Tentare di impersonare un altro utente o persona o di utilizzare il nome utente di un altro utente.",
    prohibitedActivity13:
      '- Caricare o trasmettere (o tentare di caricare o trasmettere) qualsiasi materiale che agisca come meccanismo di raccolta o trasmissione di informazioni attivo o passivo, inclusi, a titolo esemplificativo ma non esaustivo, formati di scambio di grafica trasparente ("gif"), pixel 1×1, web bug, cookie o altri dispositivi simili (talvolta denominati "spyware" o "meccanismi di raccolta passiva" o "pcm").',
    prohibitedActivity14:
      "- Interferire, interrompere o creare un carico eccessivo sul Sito o sulle reti o sui servizi ad esso collegati.",
    prohibitedActivity15:
      "- Molestare, infastidire, intimidire o minacciare uno qualsiasi dei nostri dipendenti o agenti impegnati nella fornitura di qualsiasi parte del Sito.",
    prohibitedActivity16:
      "- Tentare di aggirare qualsiasi misura del Sito progettata per impedire o limitare l'accesso al Sito o a qualsiasi sua parte.",
    prohibitedActivity17:
      "- Copiare o adattare il software del Sito, inclusi, a titolo esemplificativo ma non esaustivo, Flash, PHP, HTML, JavaScript o altri codici.",
    prohibitedActivity18:
      "- Fatta eccezione per quanto consentito dalla legge applicabile, decifrare, decompilare, disassemblare o sottoporre a reverse engineering qualsiasi software che comprenda o in qualsiasi modo costituisca una parte del Sito.",
    prohibitedActivity19:
      "- Fatta eccezione per quanto possa essere il risultato dell'utilizzo standard di un motore di ricerca o di un browser Internet, utilizzare, avviare, sviluppare o distribuire qualsiasi sistema automatizzato, inclusi, senza limitazioni, spider, robot, cheat utility, scraper o lettori offline che accedono al Sito, o utilizzare o avviare qualsiasi script non autorizzato o altro software.",
    prohibitedActivity20:
      "- Utilizzare un agente di acquisto o un agente di acquisto per effettuare acquisti sul Sito.",
    prohibitedActivity21:
      "- Fare qualsiasi uso non autorizzato del Sito, inclusa la raccolta di nomi utente e/o indirizzi e-mail degli utenti tramite mezzi elettronici o di altro tipo allo scopo di inviare e-mail indesiderate o creare account utente tramite mezzi automatizzati o con falsi pretesti.",
    prohibitedActivity22:
      "- Utilizzare il Sito come parte di qualsiasi sforzo per competere con noi o altrimenti utilizzare il Sito e/o il Contenuto per qualsiasi iniziativa volta a generare profitti o attività commerciale.",
    prohibitedActivity23:
      "- Utilizzare il Sito per pubblicizzare o offrire in vendita beni e servizi.",
    prohibitedActivity24:
      "- Vendere o trasferire in altro modo il tuo profilo.",
    featuresContent1:
      "Progettiamo i nostri Servizi con cura, basandoci sulla nostra esperienza e su quella dei clienti che condividono il loro tempo e il loro feedback. Tuttavia, non esiste un servizio che soddisfi tutti. Non garantiamo che i nostri Servizi soddisfino le vostre specifiche esigenze o aspettative.",
    featuresContent2:
      "Testiamo inoltre tutte le nostre funzionalità prima di distribuirle. Come per qualsiasi software, i nostri Servizi presentano inevitabilmente dei bug. Monitoriamo i bug segnalati e li risolviamo, in particolare quelli relativi alla sicurezza o alla privacy. Non tutti i bug segnalati verranno risolti e non garantiamo Servizi completamente privi di errori.",
    correctionsContent1:
      "Il Sito potrebbe contenere informazioni contenenti errori tipografici, inesattezze o omissioni, tra cui descrizioni, prezzi, disponibilità e varie altre informazioni. Ci riserviamo il diritto di correggere eventuali errori, inesattezze o omissioni e di modificare o aggiornare le informazioni presenti sul Sito in qualsiasi momento e senza preavviso.",
    correctionsContent2:
      "Non possiamo garantire la disponibilità continua del Sito. Potremmo riscontrare problemi hardware, software o di altro tipo, oppure dover eseguire operazioni di manutenzione relative al Sito, con conseguenti interruzioni, ritardi o errori. Ci riserviamo il diritto di modificare, rivedere, aggiornare, sospendere, interrompere o altrimenti modificare il Sito in qualsiasi momento e per qualsiasi motivo, senza preavviso. Accetti che non abbiamo alcuna responsabilità per eventuali perdite, danni o disagi causati dalla tua impossibilità di accedere o utilizzare il Sito durante qualsiasi periodo di inattività o interruzione del Sito. Nulla di quanto contenuto nei presenti Termini di Servizio sarà interpretato in modo da obbligarci a mantenere e supportare il Sito o a fornire correzioni, aggiornamenti o release in relazione ad esso.",
    userDataContent:
      "Conserveremo alcuni dati che trasmettete al Sito allo scopo di gestirne le prestazioni, nonché i dati relativi al vostro utilizzo del Sito. Sebbene eseguiamo regolarmente backup dei dati, siete gli unici responsabili di tutti i dati che trasmettete o relativi a qualsiasi attività da voi intrapresa utilizzando il Sito. Accettate che non avremo alcuna responsabilità nei vostri confronti per eventuali perdite o danneggiamenti di tali dati e rinunciate a qualsiasi diritto di azione nei nostri confronti derivante da tali perdite o danneggiamenti.",
    privacyPolicyContent1:
      "Ci preoccupiamo della privacy e della sicurezza dei dati. Si prega di consultare la nostra",
    privacyPolicy: "politica sulla riservatezza",
    privacyPolicyContent2:
      "Utilizzando il Sito, accetti di essere vincolato dalla nostra Informativa sulla privacy, che è incorporata nei presenti Termini di servizio. Si prega di notare che il Sito è ospitato negli Stati Uniti. Se accedi al Sito da qualsiasi altra regione del mondo con leggi o altri requisiti che regolano la raccolta, l'utilizzo o la divulgazione dei dati personali diversi dalle leggi applicabili negli Stati Uniti, attraverso l'utilizzo continuato del Sito, trasferisci i tuoi dati negli Stati Uniti e accetti che i tuoi dati vengano trasferiti ed elaborati negli Stati Uniti.",
    liabilityIntro:
      "Menzioniamo la responsabilità in tutti i presenti Termini, ma per riassumerla in un'unica sezione:",
    liabilityContent:
      "L'utente riconosce e accetta espressamente che la Società non sarà responsabile, in base alla legge o all'equità, nei confronti dell'utente o di terze parti per eventuali danni diretti, indiretti, incidentali, per mancato guadagno, speciali, consequenziali, punitivi o esemplari, inclusi, a titolo esemplificativo ma non esaustivo, danni per perdita di profitto, avviamento, utilizzo, dati o altre perdite immateriali (anche se la Società è stata informata della possibilità di tali danni), derivanti da: (1) l'utilizzo o l'impossibilità di utilizzare i Servizi; (2) errori, sbagli o inesattezze di contenuti e materiali; (3) lesioni personali o danni alla proprietà, di qualsiasi natura, derivanti dall'accesso e dall'utilizzo del sito; (4) il costo di approvvigionamento di beni e servizi sostitutivi risultante da beni, dati, informazioni o servizi acquistati o ottenuti o messaggi ricevuti o transazioni effettuate tramite o dai Servizi; (5) qualsiasi accesso o utilizzo non autorizzato dei nostri server sicuri e/o di tutte le informazioni personali e/o finanziarie ivi memorizzate; (6) qualsiasi interruzione o cessazione della trasmissione da o verso il sito; (7) eventuali bug, virus, trojan horse o simili che potrebbero essere trasmessi da o tramite il sito da terze parti e/o; (8) eventuali errori od omissioni in qualsiasi contenuto e materiale o per qualsiasi perdita o danno di qualsiasi tipo subito a seguito dell'uso di qualsiasi contenuto pubblicato, trasmesso o altrimenti reso disponibile tramite il sito; (9) dichiarazioni o condotte di terze parti sul servizio; (10) o qualsiasi altra questione relativa a questi Termini di servizio o ai Servizi, sia come violazione del contratto, illecito civile (inclusa negligenza attiva o passiva) o qualsiasi altra teoria di responsabilità.",
    miscellaneousContent:
      "I presenti Termini di Servizio e qualsiasi politica o regola operativa da noi pubblicata sul Sito o in relazione al Sito costituiscono l'intero accordo e l'intesa tra te e noi. Il mancato esercizio o la mancata applicazione di qualsiasi diritto o disposizione dei presenti Termini di Servizio non costituirà una rinuncia a tale diritto o disposizione. I presenti Termini di Servizio operano nella misura massima consentita dalla legge. Possiamo cedere a terzi, in tutto o in parte, i nostri diritti e obblighi in qualsiasi momento. Non saremo responsabili per eventuali perdite, danni, ritardi o omissioni causati da cause al di fuori del nostro ragionevole controllo. Qualora una qualsiasi disposizione o parte di una disposizione dei presenti Termini di Servizio venga ritenuta illegale, nulla o inapplicabile, tale disposizione o parte di essa sarà considerata separabile dai presenti Termini di Servizio e non pregiudicherà la validità e l'applicabilità delle restanti disposizioni. Non esiste alcun rapporto di joint venture, partnership, lavoro o agenzia tra te e noi a seguito dei presenti Termini di Servizio o dell'utilizzo del Sito. Accetti che i presenti Termini di Servizio non saranno interpretati contro di noi in virtù del fatto di averli redatti. Con la presente si rinuncia a qualsiasi difesa a propria discrezione basata sulla forma elettronica delle presenti Condizioni di servizio e sulla mancata sottoscrizione da parte delle parti per l'esecuzione delle presenti Condizioni di servizio.",
    contactUsContent1:
      "Se hai una domanda su uno qualsiasi dei Termini di servizio, per favore",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funzionalità",
    UnlimitedTranscription: "Trascrizione Illimitata",
    BulkUpload: "Caricamento Massivo",
    Accuracy: "96% Accuratezza",
    Pricing: "Prezzi",
    UseCases: "Casi d'Uso",
    AllUseCases: "Tutti i Casi d'Uso",
    Podcasters: "Podcaster",
    Journalists: "Giornalisti",
    ContentCreators: "Creatori di Contenuti",
    Researchers: "Ricercatori",
    BusinessTeams: "Team Aziendali",
    Educators: "Educatori",
    Resources: "Risorse",
    YouTubetoMP4: "YouTube a MP4",
    StartFreeTrial: "Provalo Gratis"
  },
  Footer: {
    des: "Il primo servizio di trascrizione AI veramente illimitato al mondo. Senza limiti, solo libertà di creare.",
    Features: "Funzionalità",
    UseCases: "Casi d'Uso",
    Company: "Azienda",
    featureMenus: ["Trascrizione Illimitata", "Caricamento Massivo", "96% Accuratezza"],
    useCaseMenus: [
          "Tutti i Casi d'Uso",
          "Podcaster",
          "Giornalisti",
          "Creatori di contenuti",
          "Ricercatori",
          "Team aziendali",
          "Educatori"
        ],
    companyMenus: [
          "Informazioni",
          "Prezzi",
          "Privacy",
          "Termini"
        ]
  },
  Index: {
    Hero: {
      badge: 'Basta "Shrinkflation" - Davvero Illimitato',
      h1: "Smetti di Pagare per i Limiti:",
      gradient: "Trascrizione AI Veramente Illimitata",
      subtitle: "La nostra IA trascrive video e converte audio in testo, elaborando 50 file alla volta senza limiti mensili. Una trascrizione che cresce davvero con te.",
      FreeTrial: "Provalo Gratis - Senza Carta di Credito",
      HowWorks: "Scopri Come Funziona",
      Unlimited: "Caricamenti Illimitati di File",
      NoCap: "Nessun Limite Mensile di Minuti",
      Hour: "File fino a 10 Ore Supportati",
      ExploreUseCases: "Esplora Casi d'Uso"
    },
    Stats: {
      monthlyMinutes: "Minuti Mensili",
      fileUploads: "Caricamenti di File",
      batchProcessing: "Elaborazione in Batch",
      maxFileLength: "Durata Massima del File"
    },
    FeaturesGrid: {
      try_now: "Provalo Ora",
      no_signup: "Nessuna Registrazione Richiesta",
      experience_unltd: "Sperimenta una trascrizione davvero illimitata",
      upload_50: "Carica fino a 50 file alla volta, proprio qui.",
      no_limits: "Avanzato",
      no_surprises: "Trascrizione AI",
      transparency: "Basta Limiti Nascosti, Basta Sorprese - Mentre altri riducono silenziosamente i tuoi minuti o nascondono limiti nel testo piccolo, noi crediamo nella trasparenza radicale",
      feat_unltd: "Davvero Illimitato",
      feat_unltd_desc: 'Nessuna "politica di uso equo" sepolta nei termini. Nessun limite di archiviazione mascherato da "illimitato". Carica tutto il tuo archivio, trascrivi tutto per ogni tua esigenza. Lo diciamo sul serio.',
      feat_bulk: "Libertà di Caricamento Massivo",
      feat_bulk_desc: 'Stanco di "3 importazioni a vita" o "10 file al mese"? Carica 50 file alla volta, tutte le volte che vuoi. Perfetto per elaborare arretrati.',
      feat_batch: "Elaborazione in Batch",
      feat_batch_desc: "Elabora un'intera stagione di podcast in una notte. Carica 50 interviste alla volta. Lascia che la nostra IA lavori mentre dormi. Svegliati con le trascrizioni pronte.",
      feat_accuracy: "96% di Precisione",
      feat_accuracy_desc: "La nostra IA all'avanguardia trascrive l'audio con punteggiatura intelligente, diarizzazione fino a 20 speaker e gestisce accenti e termini tecnici in modo impeccabile.",
      feat_langs: "100+ Lingue",
      feat_langs_desc: "Trascrivi video e audio in 100+ lingue, traducili in 249+. Nessun costo aggiuntivo per lingue diverse. Contenuti globali, un prezzo semplice.",
      feat_pro: "Funzionalità Professionali",
      feat_pro_desc: "Timestamp a livello di parola per un posizionamento preciso di audio/video, identificazione accurata degli speaker anche durante cambi rapidi di conversazione e testo perfettamente formattato con paragrafi, frasi e punteggiatura per una lettura facile.",
        features: "Funzionalità"
    },
    UseCases: {
      built_for: "Massivo",
      "heavy_users": "Trascrizione Audio & Video",
      "join_users": 'Progettato per Utenti Esigenti Come Te - Unisciti a YouTuber, creator e podcaster che hanno abbandonato servizi con "shrinkflation"',
      "podcasters": {
        "title": "Podcaster",
        "des": "Carica tutto il tuo archivio. Crea note per ogni episodio. Basta scegliere quali episodi trascrivere."
      },
      "content_creators": {
        "title": "Creator di Contenuti",
        "des": "Trasforma la tua libreria video in testo ricercabile usando il nostro servizio per trascrivere automaticamente i file video. Genera sottotitoli per tutto. Non contare i minuti, crea e basta."
      },
      "journalists": {
        "title": "Giornalisti",
        "des": 'Carica tutte le tue interviste alla volta. Basta blocchi come "10 file al mese" quando sei in scadenza. Elabora tutto.'
      },
      researchers: {
        title: "Ricercatori",
        des: "Trascrivi ore di focus group e interviste. Carica tutto il tuo studio alla volta. Ottieni un'identificazione precisa degli speaker."
      },
      business_teams: {
        title: "Team Aziendali",
        des: "Registra ogni chiamata senza preoccuparti dei limiti. Ottieni insight AI su tutte le conversazioni, non solo su alcune."
      },
      educators: {
        title: "Educatori",
        des: "Trascrivi intere serie di lezioni. Rendi tutto il contenuto accessibile. Nessuna scelta tra corsi a causa dei limiti di minuti."
      }
    },
    Testimonials: {
      title: "Amato da",
      highlighted_users: "Oltre 50.000 utenti",
      subtitle: "Scopri perché i professionisti scelgono NeverCap invece delle alternative limitate",
      Mike: {
        "text": "Porca miseria, funziona davvero! Faccio un podcast da 3 anni e trascrivevo tutto manualmente come un idiota. Ho caricato 6 episodi insieme e ha separato perfettamente me e il mio co-host. L'episodio registrato al bar che pensavo fosse rovinato? Trascrizione cristallina. Non tornerò mai più a digitare queste cose da solo.",
        "author": "Mike Rodriguez",
        "role": "Conduttore di podcast"
      },
      Sarah: {
        "text": "Insegno online e avevo bisogno di sottotitoli per i miei video. Ho provato altri 3 strumenti con strane limitazioni o tempi biblici. Questo semplicemente... funziona? Caricata la mia lezione in spagnolo, sottotitoli perfetti in 2 minuti. I miei studenti con problemi di udito sono felicissimi. Vorrei averlo scoperto prima!",
        "author": "Sarah Chen",
        "role": "Insegnante online"
      },
      Jessica: {
        "text": "Lo uso per le mie interviste ed è pazzesco quanto sia preciso. Un'intervista di 2 ore in inglese maccheronico e spagnolo e ha trascritto tutto correttamente, persino i timestamp. Pagavo il mio stagista $200 al mese solo per le trascrizioni. Questo mi sta letteralmente facendo risparmiare ogni mese.",
        "author": "Jessica Park",
        "role": "Giornalista freelance"
      }
    },
    PricingPreview: {
      "title": "Prezzi trasparenti",
      "highlighted_text": "Nessun limite nascosto",
      "subtitle": "Scegli il tuo piano. Nessun asterisco, nessuna clausola scritta in piccolo, nessuna sorpresa"
    },
    FAQSection: {
      "title": "Domande",
      "titleHighlight": "Frequenti",
      "questions": [
            {
              "q": "Trascrizione AI",
              "question": "Cos'è la trascrizione AI e come funziona?",
              "answer": "La trascrizione AI è il processo di conversione automatica dell'audio in testo utilizzando l'intelligenza artificiale avanzata. Con NeverCap, carichi semplicemente i tuoi file e la nostra AI trascrive il contenuto con una precisione fino al 96%. Il nostro servizio è progettato per trascrivere file video (come MP4, MOV) e file audio (come MP3, WAV) in testo leggibile e modificabile, completo di etichette dei parlanti e timestamp."
            },
            {
              "q": "unlimited_policy",
              "question": "È davvero illimitato? Qual è il trucco?",
              "answer": "Sì, è veramente illimitato! Nessun limite mensile di minuti, nessun costo aggiuntivo. Gli unici limiti sono tecnici: i singoli file possono essere lunghi fino a 10 ore o di dimensioni fino a 5GB, e puoi elaborare 50 file contemporaneamente. Ma puoi caricare quante batch vuoi, tutto il mese."
            },
            {
              "q": "accuracy",
              "question": "Quanto è accurata la trascrizione?",
              "answer": "Garantiamo il 96% di precisione per audio chiaro. La nostra AI è addestrata su milioni di ore di contenuti diversi e gestisce perfettamente accenti, termini tecnici e più parlanti. Per audio difficili, le nostre funzioni di miglioramento intelligente aiutano a ottenere risultati migliori."
            },
            {
              "q": "languages",
              "question": "Quali lingue supportate?",
              "answer": "Supportiamo la trascrizione in oltre 100 lingue tra cui inglese, spagnolo, mandarino, hindi, arabo, francese e altre. Inoltre, puoi tradurre le tue trascrizioni in 249 lingue diverse, perfetto per contenuti globali."
            },
            {
              "q": "speed",
              "question": "Quanto è veloce la trascrizione?",
              "answer": "Rapidissima! Un file audio di 1 ora viene elaborato in meno di 5 minuti. Con l'elaborazione in batch, puoi caricare 50 file contemporaneamente e farli elaborare in parallelo. La maggior parte degli utenti si sveglia con l'intera libreria già trascritta."
            },
            {
              "q": "cancellation",
              "question": "Posso annullare in qualsiasi momento?",
              "answer": "Assolutamente! Nessun contratto, nessuna penale di cancellazione. Puoi aggiornare, ridurre o cancellare l'abbonamento in qualsiasi momento dal tuo pannello. Se annulli, manterrai l'accesso fino alla fine del periodo di fatturazione."
            },
            {
              "q": "security",
              "question": "I miei dati sono sicuri?",
              "answer": "La tua sicurezza è la nostra priorità. Siamo certificati SOC 2, utilizziamo crittografia a 256 bit per tutti i dati e non usiamo mai i tuoi contenuti per addestrare i nostri modelli. Puoi eliminare i tuoi file in qualsiasi momento e li eliminiamo automaticamente dopo 30 giorni. Conformità GDPR e CCPA."
            },
            {
              "q": "export_formats",
              "question": "Quali formati di esportazione sono disponibili?",
              "answer": "Scarica le tue trascrizioni nel formato che preferisci: PDF, Word (DOCX), Excel, CSV, sottotitoli SRT, testo semplice (TXT) e didascalie VTT. Perfetto per qualsiasi flusso di lavoro."
            },
            {
              "q": "file_formats",
              "question": "Quali file audio e video posso caricare?",
              "answer": "Supportiamo praticamente tutti i formati audio e video che potresti incontrare: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV e altri. Se puoi riprodurlo, possiamo trascriverlo."
            }
          ]
    },
    CTASection: {
      "title": "Pronto a liberarti dai limiti?",
      "subtitle": "Unisciti a oltre 50.000 professionisti che hanno scelto la trascrizione veramente illimitata",
      "button": "Prova NeverCap Gratis",
      "disclaimer": "Nessuna carta di credito richiesta per il Piano Gratuito • Aggiorna in qualsiasi momento per accesso illimitato"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Basta "Shrinkflation"',
      heroTitleLine1: "Veramente Illimitato",
      heroTitleLine2: "Trascrizione AI",
      heroSubtitle: "Mentre Trint ti limita a 50 ore e Otter a 10 file al mese, noi manteniamo ciò che promettiamo davvero: trascrizione illimitata senza limiti nascosti.",
      primaryCta: "Prova Gratis - Senza Carta di Credito",
      secondaryCta: "Scopri la Verità",
      comparisonBadLabel: "Cosa Fanno gli Altri",
      comparisonBadTitle: "Limiti Nascosti Ovunque",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Illimitato" = limite di 50 ore/mese',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 importazioni a vita (gratis), 10/mese (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "Limite di 800 minuti di archiviazione",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Massimo 30 ore/mese",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Nascosto nei termini e condizioni",
      comparisonGoodLabel: "Cosa Offriamo",
      comparisonGoodTitle: "Veramente Illimitato",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Nessun limite mensile di minuti",
      comparisonGoodItem1Text: "mai",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Caricamenti illimitati di file",
      comparisonGoodItem2Text: "sempre",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Nessun limite di archiviazione",
      comparisonGoodItem3Text: "affatto",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Caricamento in batch di 50 file",
      comparisonGoodItem4Text: "quando vuoi",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Politica trasparente",
      comparisonGoodItem5Text: "sin dall'inizio",
      feature1Label: "Senza Limiti",
      feature1TitlePart1: "Trascrivere 1.000 ore?",
      feature1TitlePart2: "Stesso Prezzo.",
      feature1Description: "Smetti di contare i minuti. Smetti di controllare i limiti. Che tu trascriva 10 ore o 10.000 ore al mese, paghi la stessa tariffa fissa. Nessun costo aggiuntivo. Nessuna bolletta a sorpresa.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Nessun trucco della politica di "uso corretto"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Nessuna limitazione dopo X ore",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Nessuna ansia da fine mese",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Ore Mensili",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Costi aggiuntivi",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Carica quando vuoi",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Trasparente",
      feature2Label: "Libertà in blocco",
      feature2TitlePart1: "Carica il tuo",
      feature2TitlePart2: "Archivio completo",
      feature2Description: "Otter ti offre 3 importazioni a vita nella versione gratuita, 10 al mese nella Pro. Noi ti diamo illimitate. Carica la tua backlog di podcast, tutte le interviste, anni di registrazioni. Nessuna restrizione.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 file per batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "File di 10 ore supportati",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Elabora mentre dormi",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 importazioni a vita",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 file/mese",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Limite 50 ore/mese",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Veramente illimitato ✓",
      feature3Label: "Prova sociale",
      feature3TitlePart1: "Gli utenti",
      feature3TitlePart2: "Cambiano ogni giorno",
      feature3Description: `"Pago $100/anno per Otter e mi limitano a 10 importazioni di file al mese. Nel momento in cui ci sarà un'alternativa con importazioni illimitate, me ne vado!" - Utente reale di Reddit`,
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000+ utenti hanno cambiato",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Dalla "shrinkflation" di Otter',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Mai più tornare indietro",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Utenti soddisfatti",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "File elaborati",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Accuratezza",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Nessun costo nascosto",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuti/Mese",
      trustBadge2Number: "100+",
      trustBadge2Label: "Lingue",
      trustBadge3Number: "96%",
      trustBadge3Label: "Accuratezza",
      trustBadge4Number: "50",
      trustBadge4Label: "Caricamento in batch",
      ctaTitle: "Smetti di pagare per illimitato falso",
      ctaSubtitle: "Unisciti a migliaia di persone passate alla trascrizione davvero illimitata",
      finalCta: "Prova NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Libertà di Caricamento Massivo",
      heroTitleLine1: "Carica 50 File.",
      heroTitleHighlight: "Elabora Tutto.",
      heroSubtitle: "Otter ti offre 3 importazioni a vita. TRE. Per tutta la tua vita. Noi ti offriamo caricamenti illimitati, 50 file alla volta, quando vuoi.",
      primaryCta: "Inizia Caricamento Massivo →",
      secondaryCta: "Vedi i Limiti",
      redditQuote: '"Ho 3 anni di episodi podcast da trascrivere. Otter mi dice che ho 3 importazioni a vita. TRE. È offensivo."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Vero sfogo da r/podcasting",
      comparisonSectionTitlePart1: "I",
      comparisonSectionTitleHighlight: "Limiti Ridicoli",
      comparisonSectionTitlePart2: "Che Impongono",
      comparisonSubtitle: "Come i concorrenti limitano la tua capacità di elaborare contenuti",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importazioni a vita",
      limitCard1DescriptionLine2: "(Sì, per TUTTA la tua vita)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "File al mese",
      limitCard2DescriptionLine2: "(Piano da $100/anno)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "File alla volta",
      limitCard3DescriptionLine2: "(Caricamento sequenziale)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Caricamenti illimitati",
      limitCard4DescriptionLine2: "50 file per batch",
      feature1Label: "Potenza in Batch",
      feature1TitlePart1: "Elabora il Tuo",
      feature1TitleHighlight: "Intero Archivio",
      feature1TitlePart2: "In una Notte",
      feature1Description: `Carica 50 file prima di dormire. Svegliati con le trascrizioni complete. Niente code, niente attese, nessun messaggio "aggiorna l'account". Solo pura potenza di elaborazione a portata di mano.`,
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 caricamenti simultanei",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Elaborazione parallela",
      feature1Point3Icon: "✓",
      feature1Point3Text: "File fino a 10 ore supportati",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Massimo 5GB per file",
      uploadAnimationText1: "50 File",
      uploadAnimationText2: "Trascina & Elabora",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 altri file...",
      feature2Label: "Velocità",
      feature2TitlePart1: "Dal caricamento a",
      feature2TitleHighlight: "Fatto in ore",
      feature2Description: "La nostra infrastruttura di elaborazione parallela significa che i tuoi 50 file non aspettano in coda. Vengono tutti trascritti simultaneamente. Ciò che richiedeva settimane ora richiede ore.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "File di 1 ora: 5 minuti",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 file: elaborati in parallelo",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notifica via email al completamento",
      timelineStep1Icon: "1",
      timelineStep1Title: "Carica",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Elaborazione",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magia dell'IA",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Completato",
      timelineStep4Time: "< 2 ore",
      feature3Label: "Libertà",
      feature3TitlePart1: "Niente code.",
      feature3TitleHighlight: "Niente attese.",
      feature3TitlePart2: "Nessun limite.",
      feature3Description: 'Mentre altri ti fanno aspettare in code virtuali o richiedono un upgrade per "elaborazione prioritaria", noi trattiamo ogni caricamento con urgenza. I tuoi contenuti sono importanti e non dovrebbero aspettare.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Nessun livello di priorità",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Stessa velocità per tutti",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Carica quando vuoi, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Sempre pronto",
      feature3VisualSubtext: "Carica quando ti viene l'ispirazione",
      useCasesTitlePart1: "Perfetto per",
      useCasesTitleHighlight: "Utenti con molti caricamenti",
      useCasesSubtitle: "Scenari reali in cui il caricamento massivo salva la situazione",
      useCase1Title: "Archivi podcast",
      useCase1Description: "Carica 3 anni di episodi in una volta. Crea trascrizioni per il tuo intero catalogo. Genera contenuti SEO per ogni episodio.",
      useCase2Title: "Creazione corsi",
      useCase2Description: "Elabora tutti i tuoi video di lezione simultaneamente. Crea trascrizioni accessibili per gli studenti. Costruisci materiali didattici ricercabili.",
      useCase3Title: "Arretrato interviste",
      useCase3Description: "Svuota quella montagna di interviste non trascritte. Elabora settimane di ricerca in ore. Rispetta le scadenze senza panico.",
      useCase4Title: "Libreria YouTube",
      useCase4Description: "Genera sottotitoli per l'intero canale. Crea post per blog dal contenuto video. Migliora il SEO per tutti i video.",
      useCase5Title: "Archivi riunioni",
      useCase5Description: "Carica mesi di riunioni registrate. Crea note di riunioni ricercabili. Non perdere più decisioni importanti.",
      useCase6Title: "Dati di Ricerca",
      useCase6Description: "Elabora gruppi di discussione in blocco. Trascrivi tutte le interviste dei partecipanti. Analizza i dati qualitativi in modo efficiente.",
      ctaTitle: "Basta Chiedere Più Caricamenti",
      ctaSubtitle: "Ottieni un'elaborazione illimitata in blocco che funziona davvero",
      finalCta: "Carica 50 File Ora →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Precisione Leader del Settore",
      heroTitleLine1: "96% di Precisione.",
      heroTitleHighlight: "Ogni Parola Conta.",
      heroSubtitle: "Precisione leader del settore in 12 lingue principali. Timestamp a livello di parola per una perfetta sincronizzazione. Identificazione intelligente degli speaker che gestisce conversazioni veloci. Formattazione professionale davvero leggibile.",
      primaryCta: "Prova la Nostra Precisione →",
      secondaryCta: "Vedi Lingue",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Precisione in",
      statCard1DescriptionLine2: "12 Lingue Principali",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Precisione con",
      statCard2DescriptionLine2: "Accenti & Dialetti",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Precisione a Livello",
      statCard3DescriptionLine2: "di Parola",
      languageSectionTitlePart1: "96% di Precisione",
      languageSubtitle: "Trascrizione di livello professionale per contenuti globali",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Inglese",
      languageCard1Accuracy: "96% di Precisione",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spagnolo",
      languageCard2Accuracy: "96% di Precisione",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Cinese Mandarino",
      languageCard3Accuracy: "96% di Precisione",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Francese",
      languageCard4Accuracy: "96% di Precisione",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tedesco",
      languageCard5Accuracy: "96% di Precisione",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Giapponese",
      languageCard6Accuracy: "96% di Precisione",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Coreano",
      languageCard7Accuracy: "96% di Precisione",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portoghese",
      languageCard8Accuracy: "96% di Precisione",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russo",
      languageCard9Accuracy: "96% Accuratezza",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiano",
      languageCard10Accuracy: "96% Accuratezza",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Olandese",
      languageCard11Accuracy: "96% Accuratezza",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabo",
      languageCard12Accuracy: "96% Accuratezza",
      moreLanguagesText: "+ 88 altre lingue supportate con accuratezza superiore al 95%",
      feature1Label: "Precisione",
      feature1TitlePart1: "A livello di parola",
      feature1TitleHighlight: "Timestamps",
      feature1Description: "Ogni parola è perfettamente sincronizzata con la posizione audio. Crea trascrizioni cliccabili, genera sottotitoli precisi o salta a momenti esatti nelle tue registrazioni. Precisione di 100ms di cui i professionisti si fidano.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precisione timestamp di 100ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfetto per il video editing",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Trascrizioni interattive cliccabili",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Sottotitoli precisi al fotogramma",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Speaker 1",
      transcriptLine1Text: "Benvenuti all'episodio podcast di oggi.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Speaker 2",
      transcriptLine2Text: "Grazie per avermi ospitato nello show!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Speaker 1",
      transcriptLine3Text: "Entriamo nel tema principale...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Speaker 2",
      transcriptLine4Text: "Assolutamente, sono entusiasta di discuterne.",
      feature2Label: "AI Intelligente",
      feature2TitlePart1: "Gestisce",
      feature2TitleHighlight: "Conversazioni Rapide",
      feature2Description: "La nostra AI identifica con precisione i parlanti anche durante discorsi sovrapposti, interruzioni e conversazioni rapide. Perfetto per interviste, podcast e riunioni con frequenti interventi.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifica fino a 20 parlanti",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Gestisce perfettamente le interruzioni",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Funziona con discorsi sovrapposti",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Mantiene l'accuratezza nei cross-talk",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Parlanti Identificati",
      feature2VisualSubtext: "Anche nelle conversazioni veloci",
      feature3Label: "Leggibilità",
      feature3TitlePart1: "Perfettamente",
      feature3TitleHighlight: "Testo formattato",
      feature3Description: "Basta muri di testo. La nostra IA aggiunge automaticamente paragrafi, frasi e punteggiatura esattamente dove servono. Il risultato? Trascrizioni piacevoli da leggere e facili da scorrere.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Interruzioni di paragrafo intelligenti",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Punteggiatura accurata",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Maiuscole corrette",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Output pulito e scansionabile",
      formattingTitle: "Prima & Dopo",
      formattingBeforeLabel: "❌ Altri:",
      formattingBeforeText: "quindi oggi parleremo delle nuove funzionalità a cui abbiamo lavorato penso vi piaceranno molto sono state richieste dagli utenti da tempo e finalmente le abbiamo completate",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Quindi oggi parleremo delle nuove funzionalità a cui abbiamo lavorato. Penso vi piaceranno molto. Sono state richieste dagli utenti da tempo, e finalmente le abbiamo completate.",
      comparisonSubtitle: "Accuratezza",
      comparisonSectionTitle: "Confronto",
      comparisonDes: "Scopri come ci confrontiamo con la concorrenza",
      tableHeader1: "Funzione",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Accuratezza (audio chiaro)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Timestamp a livello di parola",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identificazione parlante",
      tableRow3NeverCap: "20 parlanti",
      tableRow3Otter: "16 parlanti",
      tableRow3Descript: "10 parlanti",
      tableRow3Rev: "✕",
      tableRow4Feature: "Gestione dialoghi sovrapposti",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limitata",
      tableRow4Descript: "Limitata",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formattazione intelligente",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Base",
      tableRow6Feature: "12 lingue al 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Sperimenta il 96% di accuratezza",
      ctaSubtitle: "Carica il tuo audio più difficile e osserva la differenza",
      finalCta: "Prova la nostra accuratezza ora →",
        languageSectionTitlePart2: "in 12 Lingue Principali"
    }
  },
  Pricing: {
    Hero: {
      "title": "Prezzi semplici e trasparenti",
      "highlighted_text": "Nessun limite nascosto",
      "description": "Scegli il piano adatto alle tue esigenze. Aggiorna o riduci quando vuoi. Niente contratti, nessuna sorpresa."
    },
    Cards: {
      "title": "Prezzi semplici e trasparenti.",
      "highlighted_text": "Nessun limite nascosto.",
      "description": "Scegli il piano adatto alle tue esigenze. Aggiorna o riduci quando vuoi. Niente contratti, nessuna sorpresa.",
      "plans": [
            {
              "name": "Gratis",
              "price": "$0",
              "period": "mese",
              "discount": "Perfetto per provare il nostro servizio",
              "limits": {
                "title": "Limiti giornalieri",
                "items": [
                  "3 file/giorno (≈90 min totali/giorno)",
                  "Fino a 30 min per file (≤250 MB)",
                  "Carica 1 file alla volta",
                  "Coda standard"
                ]
              },
              "features": {
                "title": "Funzionalità",
                "items": [
                  "100+ lingue",
                  "Etichette parlanti",
                  "Traduzione",
                  "Tutti i formati di esportazione"
                ]
              },
              "cta": {
                "text": "Inizia gratis. Nessuna carta di credito.",
                "button": "Piano attuale"
              }
            },
            {
              "name": "Pro Mensile",
              "price": "$17,99",
              "period": "mese",
              "discount": "$9,99 per il primo mese",
              "limits": {
                "title": "Nessun limite mensile",
                "items": [
                  "Minuti totali illimitati",
                  "Fino a 10 ore / 5 GB per file",
                  "Carica 50 file contemporaneamente",
                  "Coda prioritaria"
                ]
              },
              "features": {
                "title": "Tutto incluso in Gratis, più",
                "items": [
                  "Timestamp a livello di parola",
                  "Identificazione avanzata del parlante",
                  "Paragrafi formattati e punteggiatura",
                  "Supporto prioritario"
                ]
              },
              "cta": {
                "text": "Minuti illimitati. Velocità prioritaria. Caricamenti multipli.",
                "button": "Passa a Pro"
              },
              "badge": "Più popolare"
            },
            {
              "name": "Pro Annuale",
              "price": "$8.99",
              "period": "mese",
              "discount": "Fatturazione annuale $107,88",
              "limits": {
                "title": "Uguale a Pro Mensile",
                "items": [
                  "Minuti totali illimitati",
                  "Fino a 10 ore / 5 GB per file",
                  "Carica 50 file contemporaneamente",
                  "Coda prioritaria"
                ]
              },
              "features": {
                "title": "Tutto incluso in Gratis, più",
                "items": [
                  "Timestamp a livello di parola",
                  "Identificazione avanzata del parlante",
                  "Paragrafi formattati e punteggiatura",
                  "Supporto prioritario"
                ]
              },
              "cta": {
                "text": "Minuti illimitati. Velocità prioritaria. Caricamenti multipli.",
                "button": "Passa a Pro"
              },
              "badge": "Miglior Rapporto Qualità-Prezzo - "
            }
          ],
      "disclaimer": '\"Illimitato\" significa nessun limite mensile e nessun rallentamento artificiale. Si applica il fair-use per automazione abusiva o ridistribuzione.'
    },
    ComparisonTable: {
      "header": {
        "title": "Confronta",
        "highlighted_text": "Tutte le funzionalità",
        "subtitle": "Scopri esattamente cosa ottieni con ogni piano. Nessuna limitazione nascosta."
      },
      "plans": [
              "Funzionalità",
              "Free",
              "Pro Mensile",
              "Pro Annuale"
            ],
      "features": [
            {
              "name": "Prezzo",
              "values": [
                "$0/mese",
                {
                  "main": "$17.99/mese",
                  "note": "$9.99 primo mese"
                },
                {
                  "main": "$8.99/mese",
                  "note": "Fatturazione $107.88/anno"
                }
              ]
            },
            {
              "name": "Minuti mensili",
              "values": ["~2.700 (90/giorno)", "Illimitati", "Illimitati"]
            },
            {
              "name": "Durata massima file",
              "values": ["30 minuti", "10 ore", "10 ore"]
            },
            {
              "name": "Dimensione massima file",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Caricamenti multipli",
              "values": ["1 file", "50 file", "50 file"]
            },
            {
              "name": "Velocità di elaborazione",
              "values": ["Standard", "Prioritaria", "Prioritaria"]
            },
            {
              "name": "Lingue supportate",
              "values": ["100+ lingue", "100+ lingue", "100+ lingue"]
            },
            {
              "name": "Traduzione",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Identificazione parlante",
              "values": ["Base", "Avanzato (20 parlanti)", "Avanzato (20 parlanti)"]
            },
            {
              "name": "Timestamp a livello di parola",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Paragrafi formattati",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formati di esportazione",
              "values": ["Tutti i formati", "Tutti i formati", "Tutti i formati"]
            },
            {
              "name": "Supporto",
              "values": ["Email", "Email prioritaria", "Email prioritaria"]
            },
            {
              "name": "Conservazione dati",
              "values": ["30 giorni", "Per sempre", "Per sempre"]
            }
          ]
    },
    FAQ: {
      "title": "Domande",
      "titleHighligt": "Frequenti",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "È davvero illimitato?",
              "answer": "Sì! I piani Pro non hanno limiti mensili. Gli unici limiti sono tecnici: durata massima file 10 ore e dimensione 5GB. Puoi elaborare tutti i file che vuoi."
            },
            {
              "q": "plan_change",
              "question": "Posso cambiare piano quando voglio?",
              "answer": "Assolutamente! Puoi cancellare l'abbonamento dal tuo dashboard. Aggiorna o riduci il piano quando vuoi."
            },
            {
              "q": "payment_methods",
              "question": "Quali metodi di pagamento accettate?",
              "answer": "Accettiamo tutte le principali carte di credito, debito e PayPal per pagamenti sicuri e senza problemi."
            },
            {
              "q": "free_trial",
              "question": "C'è un periodo di prova per Pro?",
              "answer": "Sì! Prova Pro gratis per 7 giorni, senza carta di credito. In più, ottieni il primo mese con il 45% di sconto."
            },
            {
              "q": "file_retention",
              "question": "Per quanto tempo conservate i miei file?",
              "answer": "Piano gratuito: 30 giorni. Piani Pro: per sempre! Le trascrizioni sono sempre disponibili nel tuo account."
            },
            {
              "q": "data_security",
              "question": "E la sicurezza dei dati?",
              "answer": "Siamo certificati SOC 2 e utilizziamo crittografia a 256 bit. Non usiamo mai i tuoi contenuti per addestrare i nostri modelli. I tuoi dati sono tuoi."
            }
          ]
    },
    CTA: {
      "title": "Pronto a Passare a Unlimited?",
      "subtitle": "Unisciti a 50.000+ professionisti che trascrivono senza limiti",
      "button": "Prova NeverCap Gratis →",
      "disclaimer": "Nessuna carta di credito richiesta • Inizia a trascrivere in pochi secondi"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Creato per",
      heavyUsers: "Utenti Avanzati",
      whoActuallyNeed: "Che Hanno Vero Bisogno di Illimitate",
      heroSubtitle: "Da podcaster con anni di archivio a ricercatori con centinaia di interviste. Scopri come i professionisti usano NeverCap per liberarsi dai limiti di upload e minuti.",
      podcasters: {
        title: "Podcaster",
        pain: '"Smetti di scegliere quali episodi meritano la trascrizione"',
        description: "Carica l'intero archivio del podcast in una volta. Genera note dello show, migliora il SEO e riutilizza i contenuti senza contare i minuti.",
        benefits: {
          benefit1: "Carica tutti gli episodi, non solo 3",
          benefit2: "Genera note dello show ottimizzate per SEO",
          benefit3: "Crea archivi ricercabili",
          benefit4: "Riutilizza come contenuti per blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episodi"
          },
          stat2: {
            number: "200ore",
            label: "Risparmiate"
          },
          stat3: {
            number: "3x",
            label: "Traffico SEO"
          }
        }
      },
      journalists: {
        title: "Giornalisti & Scrittori",
        pain: '"Pressione delle scadenze incontra limiti di upload"',
        description: "Carica in batch tutte le interviste prima della scadenza. Cerca nei trascritti all'istante e non perdere mai una citazione cruciale.",
        benefits: {
          benefit1: "Carica in batch prima delle scadenze",
          benefit2: "Cerca tutte le interviste insieme",
          benefit3: "Citazioni accurate con timestamp",
          benefit4: "Gestisci accenti e lingue"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Interviste/mese"
          },
          stat2: {
            number: "96%",
            label: "Accuratezza"
          },
          stat3: {
            number: "5min",
            label: "All'ora"
          }
        }
      },
      contentCreators: {
        title: "Creatori di Contenuti",
        pain: `"L'accessibilità non dovrebbe essere costosa"`,
        description: "Sottotitola l'intero canale YouTube. Genera sottotitoli in più lingue e migliora subito il SEO dei tuoi video.",
        benefits: {
          benefit1: "Sottotitola tutti i video insieme",
          benefit2: "249 traduzioni linguistiche",
          benefit3: "File SRT pronti per YouTube",
          benefit4: "Aumenta il ranking SEO video"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Video"
          },
          stat2: {
            number: "100+",
            label: "Lingue"
          },
          stat3: {
            number: "249",
            label: "Traduzioni"
          }
        }
      },
      researchers: {
        title: "Ricercatori & Accademici",
        pain: '"I dati qualitativi non dovrebbero fare la fila"',
        description: "Elabora interi studi di ricerca in una volta. Gestisci focus group, interviste e panel discussion con perfetta identificazione del parlante.",
        benefits: {
          benefit1: "Elabora focus group in blocco",
          benefit2: "Identificazione di 20 parlanti",
          benefit3: "Esporta in software di analisi",
          benefit4: "Sicurezza conforme al GDPR"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studio"
          },
          stat2: {
            number: "96%",
            label: "Accuratezza del Gruppo"
          },
          stat3: {
            number: "GDPR",
            label: "Conforme"
          }
        }
      },
      businessTeams: {
        title: "Team aziendali",
        pain: '"Registrare riunioni dovrebbe essere semplice"',
        description: "Registra riunioni direttamente o carica file audio per la trascrizione immediata. Crea archivi ricercabili da conversazioni illimitate e non perdere mai più discussioni importanti.",
        benefits: {
          benefit1: "Registrazione audio & trascrizione diretta",
          benefit2: "Registrazioni riunioni illimitate",
          benefit3: "Archivio riunioni ricercabile",
          benefit4: "Carica file audio all'istante"
        },
        stats: {
          stat1: {
            number: "Live",
            label: "Registrazione"
          },
          stat2: {
            number: "Istantanea",
            label: "Carica"
          },
          stat3: {
            number: "20+",
            label: "Relatori"
          }
        }
      },
      educators: {
        title: "Educatori",
        pain: '"I video YouTube necessitano trascrizione immediata"',
        description: "Basta incollare link YouTube per ottenere trascrizioni istantanee e sottotitoli generati automaticamente. Trasforma qualsiasi video educativo in contenuto accessibile e ricercabile.",
        benefits: {
          benefit1: "Trascrizione diretta da link YouTube",
          benefit2: "Genera automaticamente sottotitoli video",
          benefit3: "Trascrivi interi corsi",
          benefit4: "Archivio lezioni ricercabile"
        },
        stats: {
          stat1: {
            number: "1-Click",
            label: "Incolla YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Sottotitoli"
          },
          stat3: {
            number: "100+",
            label: "Lingue"
          }
        }
      },
      quotes: {
        title: "Utenti Reali,",
        titleHighlight: "Libertà Reale",
        subtitle: "Ascolta i professionisti che hanno superato limiti artificiali",
        testimonials: {
          mike: {
            textBefore: '"Avevo',
            highlight: "3 anni di episodi",
            textAfter: 'non trascritti. Otter voleva che ne scegliessi 3. TRE. NeverCap mi ha permesso di caricare tutti i 150 episodi in un weekend."',
            name: "Mike Rodriguez",
            role: "Host Podcast"
          },
          jessica: {
            textBefore: '"Come giornalista freelance non posso permettermi i',
            highlight: "$100/mese",
            textAfter: 'di Trint, ma non posso lavorare neanche con il limite di 10 file mensili di Otter. NeverCap ha salvato la mia carriera."',
            name: "Jessica Park",
            role: "Giornalista Freelance"
          },
          sarah: {
            textBefore: '"Il nostro team di ricerca aveva',
            highlight: "200 ore",
            textAfter: 'di registrazioni di focus group. Abbiamo elaborato tutto in un weekend invece di razionare minuti mensili."',
            name: "Dr. Sarah Chen",
            role: "Ricercatrice Capo"
          },
          carlos: {
            textBefore: '"Creo contenuti educativi in spagnolo. NeverCap trascrive perfettamente e',
            highlight: "traduce in inglese",
            textAfter: 'per una portata più ampia. Nessun limite, solo crescita."',
            name: "Carlos Martinez",
            role: "YouTube Educator"
          }
        }
      },
      industries: {
        title: "Affidabile in",
        titleHighlight: "Tutti i Settori",
        subtitle: "I professionisti ovunque stanno passando a un servizio davvero illimitato",
        list: {
          media: "Media & Editoria",
          education: "Istruzione",
          healthcare: "Sanità",
          technology: "Tecnologia",
          finance: "Finanza",
          legal: "Legale"
        }
      },
      cta: {
        title: "Anche il Tuo Caso d'Uso ha Bisogno dell'Illimitato",
        subtitle: "Unisciti a 50.000+ professionisti che hanno smesso di contare i minuti e hanno iniziato a creare",
        button: "Inizia il Tuo Viaggio Illimitato →"
      }
    },
    Podcasters: {
      badge: "Creato per Podcaster",
      heroTitle: "Trascrivi il Tuo",
      heroTitleHighlight: "Intero Archivio Podcast",
      heroSubtitle: "Carica il tuo intero catalogo. Crea show notes per ogni episodio. Basta scegliere quali episodi trascrivere.",
      ctaPrimary: "Inizia a Trascrivere Gratis",
      ctaSecondary: "Scopri Come Funziona",
      trustBadge1: "10.000+ Podcaster",
      trustBadge2: "Episodi Illimitati",
      trustBadge3: "Trascrizioni Pronte per SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Episodi/Mese"
        },
        stat2: {
          number: "50",
          label: "Caricamento in Blocco"
        },
        stat3: {
          number: "10h",
          label: "Durata Massima Episodio"
        },
        stat4: {
          number: "96%",
          label: "Accuratezza"
        }
      },
      problemTitle: "Il",
      problemTitleHighlight: "Problema della Trascrizione Podcast",
      problemSubtitle: 'Altri servizi ti fanno scegliere quali episodi "meritano" di essere trascritti',
      problems: {
        problem1: {
          title: "I Limiti di Caricamento Uccidono gli Archivi",
          description: "Otter ti dà 3 importazioni a vita gratis, 10 al mese con Pro. Come trascrivi 3 anni di episodi?"
        },
        problem2: {
          title: "Opportunità SEO Mancate",
          description: "Ogni episodio non trascritto è traffico SEO perso. Ma Descript ti limita a 30 ore/mese al massimo."
        },
        problem3: {
          title: "I Costi Esplodono con la Crescita",
          description: "Man mano che il tuo podcast cresce, i costi di trascrizione salgono alle stelle. $2/ora di eccedenza rendono impossibile scalare."
        }
      },
      solutionTitle: "La",
      solutionTitleHighlight: "Soluzione NeverCap",
      solutionDescription: "Trascrizione davvero illimitata. Carica tutto il tuo archivio. Trascrivi ogni nuovo episodio. Genera show notes su larga scala. Nessun limite, solo crescita.",
      workflowTitle: "Il Tuo Flusso di Lavoro Podcast,",
      workflowTitleHighlight: "Semplificato",
      workflowSubtitle: "Dalla registrazione alle show notes ottimizzate per SEO in pochi minuti",
      workflow: {
        step1: {
          title: "Carica Episodi",
          description: "Carica 50 episodi insieme. MP3, MP4, WAV - gestiamo tutto."
        },
        step2: {
          title: "IA Trascrive",
          description: "96% di accuratezza con identificazione del parlante. Perfetto per interviste."
        },
        step3: {
          title: "Formattazione Intelligente",
          description: "L'IA aggiunge automaticamente paragrafi, frasi e punteggiatura."
        },
        step4: {
          title: "Pubblica & Classifica",
          description: "Esporta sul tuo sito. Guarda crescere il traffico SEO."
        }
      },
      featuresTitle: "Funzionalità per Podcaster",
      featuresTitleHighlight: "Di Cui Hanno Davvero Bisogno",
      featuresSubtitle: "Creato da podcaster, per podcaster",
      features: {
        feature1: {
          title: "Rilevamento Multi Speaker",
          description: "Identifica ed etichetta automaticamente fino a 20 speaker. Perfetto per panel discussion, interviste e show con co-host."
        },
        feature2: {
          title: "Capitoli con Timestamp",
          description: "Genera timestamp cliccabili per le descrizioni YouTube. Permetti agli ascoltatori di saltare ai loro segmenti preferiti."
        },
        feature3: {
          title: "Formattazione Intelligente",
          description: "Aggiunge automaticamente paragrafi, frasi e punteggiatura. Ottieni trascrizioni pulite e leggibili. Risparmia ore di post-produzione."
        },
        feature4: {
          title: "Ottimizzazione SEO",
          description: "Trascrizioni formattate per i motori di ricerca. Aumenta la visibilità del tuo podcast e raggiungi nuovo pubblico."
        },
        feature5: {
          title: "100+ Lingue",
          description: "Trascrivi in qualsiasi lingua. Traduci in 249+ lingue. Raggiungi un pubblico globale senza sforzo."
        },
        feature6: {
          title: "Elaborazione in Batch",
          description: "Carica 50 episodi prima di dormire. Svegliati con le trascrizioni complete. Elabora tutto il tuo archivio in una notte."
        }
      },
      testimonialsTitle: "Podcaster Che Hanno Fatto",
      testimonialsTitleHighlight: "Il Cambio",
      testimonialsSubtitle: "Storie vere da veri podcaster",
      testimonials: {
        mike: {
          text: `"Faccio un podcast da 3 anni e trascrivevo tutto manualmente come un idiota. Ho caricato 6 episodi insieme e ha separato perfettamente me e il mio co-host. L'episodio del caffè che pensavo fosse rovinato? Trascrizione cristallina. Non tornerò mai più a digitare queste cose da solo."`,
          name: "Mike Rodriguez",
          role: 'Conduttore del podcast "The Daily Grind"'
        },
        sarah: {
          text: '"Otter mi limitava a 10 importazioni di file al mese. Avevo 150 episodi arretrati. NeverCap mi ha permesso di caricare tutto in 3 batch. Il mio traffico organico è aumentato del 300% da quando ho aggiunto le trascrizioni ai vecchi episodi. Si ripaga da solo."',
          name: "Sarah Chen",
          role: 'Creatrice di "Tech Talks Today"'
        }
      },
      comparisonTitle: "Perché i Podcaster Scelgono",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Confronta con la concorrenza",
      comparison: {
        headers: {
          feature: "Funzione",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Limite Mensile Episodi",
            nevercap: "Illimitato",
            otter: "~13 episodi (1200 min)",
            descript: "~30 episodi (30 ore)"
          },
          uploadLimit: {
            feature: "Limite Caricamento File",
            nevercap: "Illimitato",
            otter: "10 al mese",
            descript: "1 alla volta"
          },
          batchProcessing: {
            feature: "Elaborazione in Batch",
            nevercap: "50 file",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Durata Massima Episodio",
            nevercap: "10 ore",
            otter: "90 minuti",
            descript: "Illimitato"
          },
          speakerDetection: {
            feature: "Rilevamento Parlanti",
            nevercap: "20 parlanti",
            otter: "16 parlanti",
            descript: "10 parlanti"
          },
          smartFormatting: {
            feature: "Formattazione Intelligente",
            nevercap: "✓ Perfetto",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Prezzo",
            nevercap: "$17.99/mese",
            otter: "$16.99/mese",
            descript: "$30/mese"
          }
        }
      },
      ctaTitle: "Inizia a Trascrivere Ogni Episodio",
      ctaSubtitle: "Unisciti a 10.000+ podcaster che non si preoccupano dei limiti",
      ctaButton: "Carica i Tuoi Primi 50 Episodi Gratis →",
      ctaDisclaimer: "Nessuna carta di credito richiesta • Elabora episodi illimitati • Cancella quando vuoi"
    },
    Journalists: {
      hero: {
        badge: "Per Giornalisti & Scrittori",
        title: "Trascrivi Ogni Intervista.",
        titleHighlight: "Non Perdere Mai una Citazione.",
        subtitle: "Smetti di scegliere quali interviste meritano la trascrizione. Carica tutte le registrazioni insieme, cerca istantaneamente ovunque e rispetta le scadenze senza ansia da upload.",
        ctaPrimary: "Inizia Caricamenti Illimitati →",
        ctaSecondary: "Guarda Come Funziona",
        stats: {
          uploads: {
            number: "∞",
            label: "File Caricati"
          },
          accuracy: {
            number: "96%",
            label: "Accuratezza"
          },
          speed: {
            number: "5min",
            label: "All'Ora"
          }
        },
        dashboard: {
          title: "Coda Interviste",
          status: "• Tutta l'Elaborazione",
          interviews: {
            cityCouncil: {
              title: "Riunione del Consiglio Comunale",
              duration: "2h 15min • Caricamento...",
              action: "Elaborazione"
            },
            expertInterview: {
              title: "Intervista con l'Esperto - Dr. Chen",
              duration: "45min • Trascrizione...",
              action: "96% Completato"
            },
            pressConference: {
              title: "Conferenza Stampa",
              duration: "1h 30min • Pronto",
              action: "Visualizza →"
            },
            phoneInterview: {
              title: "Intervista Telefonica - Fonte",
              duration: "35min • Pronto",
              action: "Visualizza →"
            }
          }
        }
      },
      problem: {
        title: "Il",
        titleHighlight: "Problema di Trascrizione per Giornalisti",
        subtitle: 'Altri servizi ti fanno scegliere quali interviste "meritano" la trascrizione',
        problems: {
          uploadLimits: {
            title: "I Limiti di Upload Uccidono le Inchieste",
            description: "Otter ti dà 10 importazioni file/mese su Pro. Come trascrivi 3 settimane di interviste investigative?"
          },
          missingQuotes: {
            title: "Citazioni Cruciali Mancanti",
            description: "Ogni intervista non trascritta potrebbe contenere la citazione chiave della storia. Ma Trint ti limita a 50 ore/mese al massimo."
          },
          costExplosion: {
            title: "I Costi Esplodono con le Scadenze",
            description: "Con l'approfondirsi delle indagini, i costi di trascrizione salgono alle stelle. Tariffe extra di $100/mese rendono impossibile seguire le ultime notizie."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "Soluzione NeverCap",
          description: "Trascrizione veramente illimitata. Carica l'intera indagine. Trascrivi ogni intervista. Cerca tutte le citazioni all'istante. Nessun limite, solo giornalismo."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Miglior Software di Trascrizione per Interviste",
        titleSuffix: "per Giornalisti",
        subtitle: "Vantaggi reali quando le scadenze sono strette e la precisione è tutto",
        solutions: {
          unlimitedUploads: {
            label: "Volume Illimitato",
            title: "Volume Illimitato per Tutte le Tue Interviste",
            description: "A differenza di software con limiti di minuti, puoi trascrivere ogni intervista, da una chiacchierata veloce a una discussione di ore. Mai più crediti esauriti in scadenza.",
            points: {
              simultaneousUpload: "Nessun limite mensile di minuti",
              noLimits: "Supporto per interviste di 10 ore",
              processWhileWrite: "Elabora intere indagini in una volta",
              longRecordings: "Registrazioni di 10 ore supportate"
            },
            visual: {
              number: "∞",
              label: "Nessun Limite. Mai."
            }
          },
          instantSearch: {
            label: "Velocità Lampo",
            title: "Velocità che Tiene il Passo con le Tue Notizie",
            description: "Ottieni la trascrizione in minuti, non giorni. Concludi le storie più velocemente che mai. La nostra IA elabora ore di audio mentre prendi un caffè.",
            points: {
              searchAll: "5 minuti per interviste di 1 ora",
              wordTimestamps: "Elaborazione prioritaria per storie urgenti",
              jumpToMoments: "Monitoraggio progresso in tempo reale"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Per Ora di Audio",
              results: {
                mayorInterview: '"...la nostra politica sul clima si trasformerà..."',
                expertPanel: '"...la dichiarazione politica mostra chiaramente..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Precisione Citabile",
            title: "Precisione che Puoi Citare",
            description: "La nostra IA fornisce trascrizioni estremamente accurate, garantendo citazioni precise e affidabili. Trascrizioni di livello professionale fidate dagli editori.",
            points: {
              accuracyGuarantee: "Garanzia 96% di accuratezza",
              handlesAccents: "Gestione terminologia tecnica",
              smartPunctuation: "Identificazione perfetta del parlante"
            },
            visual: {
              accuracy: "96%",
              label: "Precisione Pronta per la Pubblicazione",
              transcript: {
                speaker1: `"L'indagine ha rivelato discrepanze significative nei rendiconti finanziari."`,
                speaker2: '"Puoi spiegarci meglio queste discrepanze specifiche?"'
              }
            }
          },
            ironclad: {
                  label: "Protezione Fonti",
                  title: "Protezione Fonti a Prova di Bomba",
                  description: "Offriamo solide funzioni di sicurezza per proteggere i tuoi dati sensibili e le fonti confidenziali. Crittografia di livello bancario per indagini sicure.",
                  points: {
                    accuracyGuarantee: "Crittografia end-to-end",
                    handlesAccents: "Opzioni eliminazione automatica file",
                    smartPunctuation: "Conforme GDPR & privacy"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Massima Sicurezza"
                  }
                }
        }
      },
      features: {
        title: "Tutto ciò di cui un",
        titleHighlight: "Giornalista Ha Bisogno",
        subtitle: "Strumenti professionali che rispettano il tuo flusso di lavoro",
        featuresList: {
          languages: {
            title: "100+ Lingue",
            description: "Intervista fonti globali in 12 lingue principali con il 96% di accuratezza."
          },
          exportFormats: {
            title: "Formati di Esportazione",
            description: "Word, PDF, SRT, TXT. Compatibile con qualsiasi flusso di lavoro."
          },
          sourceProtection: {
            title: "Protezione Fonti",
            description: "Crittografia di livello bancario. Le tue fonti restano riservate."
          },
          timestamps: {
            title: "Timestamps",
            description: "Clicca su qualsiasi citazione per saltare al momento esatto dell'audio."
          },
          teamSharing: {
            title: "Condivisione del Team",
            description: "Collabora con gli editor. Condividi le trascrizioni in modo sicuro."
          },
          mobileReady: {
            title: "Pronto per Mobile",
            description: "Carica dal telefono. Rivedi le trascrizioni ovunque."
          },
          smartFormatting: {
            title: "Formattazione Intelligente",
            description: "Paragrafi e punteggiatura automatici per trascrizioni leggibili."
          },
          batchProcessing: {
            title: "Elaborazione in Batch",
            description: "Carica 50 file alla volta. Elaborali durante la notte mentre dormi."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Avevo 3 anni di interviste non trascritte a causa dei limiti di upload. NeverCap mi ha permesso di elaborare tutto in un weekend. Un punto di svolta.",
          name: "Jessica Park",
          role: "Giornalista Freelance, Ex Utente Otter"
        }
      },
      cta: {
        title: "Inizia a Trascrivere",
        titleHighlight: "Senza Limiti",
        subtitle: "Unisciti a migliaia di giornalisti che hanno smesso di contare gli upload e hanno iniziato a concentrarsi sulle storie",
        ctaPrimary: "Prova Illimitato Gratis →",
        ctaSecondary: "Visualizza Prezzi"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Per Creatori di Contenuti",
        title: "Trascrivi Video YouTube,",
        titleHighlight: "Senza Limiti",
        titleSuffix: "1",
        subtitle: "Che tu debba trascrivere un video YouTube, trascrivere un video TikTok per riutilizzarlo o capire come trascrivere un video Facebook in testo, la nostra piattaforma gestisce tutto senza problemi. Genera sottotitoli in 100+ lingue senza limiti mensili – solo pura libertà creativa.",
        ctaPrimary: "Inizia a Sottotitolare Illimitatamente →",
        ctaSecondary: "Guarda Come Funziona",
        stats: {
          videos: {
            number: "∞",
            label: "Video/Mese"
          },
          languages: {
            number: "100+",
            label: "Lingue"
          },
          accuracy: {
            number: "96%",
            label: "Accuratezza"
          },
          platforms: {
            number: "10+",
            label: "Piattaforme"
          }
        }
      },
      platforms: {
        title: "Recupera e Trascrivi da Qualsiasi Piattaforma",
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
          titleMax: "Trascrivi Video da",
          titleMaxHighlight: "Qualsiasi Piattaforma"
    },
      features: {
        title: "Tutto Ciò di Cui Hai Bisogno per",
        titleHighlight: "Scalare i Contenuti",
        subtitle: "Strumenti professionali senza limiti professionali",
        oneClickImport: {
          label: "Importa con un Clic",
          title: "Trascrivi Video YouTube, TikTok &",
          titleHighlight: "Instagram Incollando un Link",
          description: "Il nostro strumento semplifica la trascrizione dei video. Per trascrivere un video di Instagram, basta incollare il link. Lo stesso vale per Vimeo. Elabora l'intero backlog del tuo canale in un weekend.",
          points: {
            directYoutube: "Trascrizione diretta da link YouTube",
            multiplePlatforms: "Recupera da 10+ piattaforme",
            batchPlaylists: "Elabora intere playlist in batch",
            autoSync: "Sincronizzazione automatica con i tuoi canali"
          },
          demo: {
            instruction: "Incolla l'URL del video:",
            url: "https://youtube.com/watch?v=...",
            status: "Recupero & Trascrizione..."
          }
        },
        globalReach: {
          label: "Portata Globale",
          title: "100+ Lingue.",
          titleHighlight: "Zero Limiti.",
          description: "Raggiungi un pubblico globale con traduzione automatica in 100+ lingue. Genera sottotitoli in più lingue simultaneamente. Nessun costo aggiuntivo, nessun limite mensile.",
          points: {
            highAccuracy: "96% di precisione in 12 lingue principali",
            unlimitedTranslations: "Traduzioni illimitate incluse",
            multicultural: "Perfetto per contenuti multiculturali",
            autoDetect: "Rilevamento automatico della lingua sorgente"
          },
          visual: {
            number: "100+",
            title: "Lingue Supportate",
            subtitle: "Traduci una volta, raggiungi tutti"
          }
        },
        flexibleExport: {
          label: "Esportazione Flessibile",
          title: "Ogni Formato",
          titleHighlight: "Di Cui Hai Bisogno",
          description: "Esporta nel formato adatto al tuo flusso di lavoro. Da file SRT per YouTube a VTT per web player, o documenti editabili per script. Tutte le esportazioni sono illimitate e incluse in ogni piano.",
          points: {
            videoFormats: "SRT & VTT per piattaforme video",
            editingFormats: "DOCX & PDF per editing",
            dataAnalysis: "CSV per analisi dati",
            simpleScripts: "TXT per script semplici"
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
        title: "Dal Caricamento a",
        titleHighlight: "Pubblicato",
        titleSuffix: "in Minuti",
        subtitle: "Il modo più veloce per sottotitolare la tua intera libreria di contenuti",
        steps: {
          pasteLinks: {
            title: "Incolla Link",
            description: "Inserisci link di YouTube, TikTok o qualsiasi video. Oppure carica file direttamente."
          },
          autoTranscribe: {
            title: "Trascrizione Automatica",
            description: "L'IA elabora con il 96% di precisione. Gestisce accenti e più speaker."
          },
          editTranslate: {
            title: "Modifica & Traduci",
            description: "Perfeziona i sottotitoli. Traduci istantaneamente in 100+ lingue."
          },
          exportPublish: {
            title: "Esporta & Pubblica",
            description: "Scarica in qualsiasi formato. Carica sulla tua piattaforma. Fatto!"
          }
        }
      },
      testimonials: {
        title: "I Creatori",
        titleHighlight: "Cambiano Ogni Giorno",
        subtitle: "Da piani limitati a libertà illimitata",
        carlos: {
          textBefore: "Creo contenuti educativi in spagnolo. NeverCap trascrive perfettamente e",
          textAfter: "per una portata più ampia. Nessun limite, solo crescita. Le visualizzazioni del mio canale sono triplicate dopo l'aggiunta di sottotitoli multilingue.",
          highlight: "traduci in inglese",
          name: "Carlos Martinez",
          role: "Educatore YouTube • 250K Iscritti"
        },
        sarah: {
          textBefore: "Descript chiedeva $30/mese per",
          textAfter: ". Avevo un backlog di 500+ video. NeverCap mi ha permesso di elaborare tutto in un weekend. Il boost SEO dai sottotitoli si è ripagato nel primo mese.",
          highlight: "30 ore",
          name: "Sarah Lee",
          role: "Lifestyle Vlogger • 180K Iscritti"
        },
        jake: {
          textBefore: "La",
          textAfter: "funzionalità è rivoluzionaria. Non scarico più nulla. Basta incollare, trascrivere, fatto. Elaborare i miei clip podcast per TikTok non è mai stato così semplice.",
          highlight: "recupero diretto da YouTube",
          name: "Jake Wilson",
          role: "Podcast Host • Creatore Top 1%"
        },
        yuki: {
          textBefore: "Creo contenuti in 5 lingue. Altri servizi addebitano",
          textAfter: ". NeverCap mi offre traduzioni illimitate. Il mio pubblico internazionale è cresciuto del 400% da quando uso sottotitoli nativi corretti.",
          highlight: "per traduzione",
          name: "Yuki Tanaka",
          role: "Creatore Gaming • 500K Iscritti"
        }
      },
      cta: {
        title: "Il Tuo Intero Canale. Sottotitolato. Oggi.",
        subtitle: "Unisciti a 50.000+ creatori che hanno smesso di contare i minuti e hanno iniziato a creare",
        button: "Inizia Sottotitolazione Illimitata →"
      },
        FAQSection: {
              "title": "Le Tue Domande sulla Trascrizione,",
              "titleHighlight": "Risposte",
              subtitle: "Tutto ciò che devi sapere sulla trascrizione di video da diverse piattaforme",
              "questions": [
                    {
                      "question": "D: Come trascrivo un video YouTube con NeverCap?",
                      "answer": "È semplice. Trova il video YouTube che vuoi trascrivere, copia il suo URL e incollalo nella nostra app. La nostra IA recupererà automaticamente il video e fornirà una trascrizione completa in pochi minuti."
                    },
                    {
                      "question": "D: Qual è il modo migliore per trascrivere un video Facebook in testo?",
                      "answer": "Il modo più semplice è usare un link diretto. Copia l'URL del video Facebook e la nostra piattaforma farà il resto, convertendo il parlato in testo con una precisione fino al 96%, risparmiandoti la trascrizione manuale."
                    },
                    {
                      "question": "D: Posso trascrivere video TikTok e Instagram?",
                      "answer": "Assolutamente. Supportiamo la trascrizione per video TikTok e Instagram. È perfetto per i creatori di contenuti che vogliono riutilizzare i loro video brevi in post per blog, articoli o aggiornamenti social basati su testo."
                    },
                    {
                      "question": "D: Come trascrivo un video Vimeo in testo?",
                      "answer": "Trascrivere video Vimeo è facile come su qualsiasi altra piattaforma. Basta copiare l'URL del video Vimeo e incollarlo in NeverCap. La nostra IA elaborerà il video e genererà una trascrizione accurata che puoi scaricare in più formati."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Progettato per l'Eccellenza Accademica",
      heroTitle1: "Trascrivi Ogni Intervista.",
      heroTitle2: "Analizza Tutti i Tuoi Dati.",
      heroSubtitle: "Smetti di scegliere quali focus group trascrivere. Elabora tutti i tuoi dati qualitativi con una precisione del 96% e un'identificazione impeccabile dei parlanti, anche con 20 partecipanti che parlano contemporaneamente.",
      heroCtaPrimary: "Provalo Gratis - Senza Carta di Credito",
      heroCtaSecondary: "Guarda Come Funziona",
      statsInterviewHours: "Ore di Intervista",
      statsAccuracy: "Precisione",
      statsSpeakersId: "ID Parlanti",
      statsCompliant: "Conforme",
      problemTitle: "Il",
      problemSubtitle: 'Altri servizi ti fanno scegliere quali dati "meritano" di essere trascritti',
      problemCard1Title: "I Limiti di Caricamento Uccidono gli Studi",
      problemCard1Desc: "Otter ti dà 3 importazioni a vita. Come trascrivi 200 ore di focus group?",
      problemCard2Title: "Dati Critici Mancanti",
      problemCard2Desc: "Ogni intervista non trascritta potrebbe contenere intuizioni rivoluzionarie. Ma Rev addebita almeno $2 al minuto.",
      problemCard3Title: "I Fondi per le Borse Scompaiono",
      problemCard3Desc: "Man mano che il tuo dataset cresce, i costi di trascrizione esplodono. $500 per gruppo di discussione rende impossibile scalare.",
      solutionTitle: "Soluzione NeverCap",
      solutionDesc: "Trascrizione davvero illimitata. Carica il tuo intero studio. Trascrivi ogni intervista. Analizza tutti i tuoi dati. Nessun limite, solo ricerca.",
      feature1Label: "Senza Limiti",
      feature1Title: "Gestisci il tuo",
      feature1Desc: 'Carica tutte le 200 ore di interviste stanotte. Svegliati con trascrizioni complete e ricercabili. Nessun limite mensile, nessun limite per file, niente "uso equo".',
      feature1Point1: "Caricamento in batch di 50 file contemporaneamente",
      feature1Point2: "Elabora completamente studi longitudinali",
      feature1Point3: "Nessun limite di archiviazione per le trascrizioni",
      feature1Point4: "Esporta in NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Ore Illimitate",
      feature1Visual2: "Stesso prezzo sia per 10 che per 10.000 ore",
      feature2Label: "AI Intelligente",
      feature2Title: "Precisione assoluta",
      feature2Desc: "La nostra IA tiene traccia fino a 20 parlanti anche quando si sovrappongono, si interrompono o parlano tutti insieme. Ogni voce viene catturata ed etichettata correttamente.",
      feature2Point1: "Identificazione di 20 parlanti",
      feature2Point2: "Gestisce sovrapposizioni e interruzioni",
      feature2Point3: "Etichette parlanti rinominabili",
      feature2Point4: "Timestamp per ogni parola",
      conversationParticipant1: "Partecipante 1",
      conversationText1: "La principale barriera che affrontiamo è sicuramente il costo del trattamento...",
      conversationParticipant2: "Partecipante 2",
      conversationText2: "Assolutamente, ma aggiungerei che l'accesso è—",
      conversationParticipant3: "Partecipante 3",
      conversationText3: "—scusa l'interruzione, ma anche il trasporto è fondamentale.",
      conversationText4: "Sì! Esattamente quello che stavo per dire.",
      conversationParticipant4: "Partecipante 4",
      conversationText5: "Nelle zone rurali, sono tutti e tre: costo, accesso E trasporto.",
      feature3Label: "Precisione",
      feature3Title: "Affidabile",
      feature3Desc: "Gestisce gergo tecnico, accenti marcati e terminologia specifica come un professionista. Abbastanza accurato per pubblicazioni, revisione tra pari e la tua commissione di tesi.",
      feature3Point1: "Terminologia medica e scientifica",
      feature3Point2: "100+ lingue e dialetti",
      feature3Point3: "Modalità verbatim e clean read",
      feature3Point4: "Modifica ed esporta in qualsiasi formato",
      feature3Visual1: "Accuratezza da Ricerca",
      feature3Visual2: "Fiducia di oltre 50.000 ricercatori",
      feature4Label: "Sicurezza",
      feature4Title: "Certificazione IRB conforme",
      feature4Desc: "I tuoi dati di ricerca sensibili sono protetti con sicurezza di livello enterprise. Conforme GDPR, opzioni pronte per HIPAA e tracce di audit complete per i requisiti IRB.",
      feature4Point1: "Crittografia end-to-end",
      feature4Point2: "Conforme a GDPR & CCPA",
      feature4Point3: "Politiche di cancellazione automatica",
      feature4Point4: "Collaborazione sicura del team",
      useCasesTitle: "Perfetto per",
      useCasesSubtitle: "Dall'etnografia agli studi clinici",
      useCase1Title: "Gruppi di Discussione",
      useCase1Desc: "Gestisce 8-20 partecipanti con discorsi sovrapposti. Identificazione perfetta dei parlanti anche durante discussioni accese. Esporta direttamente nel software di analisi qualitativa.",
      useCase2Title: "Interviste Approfondite",
      useCase2Desc: "Elabora centinaia di interviste individuali simultaneamente. Mantieni coerenza in tutto il tuo dataset. Cerca in tutti i trascritti istantaneamente.",
      useCase3Title: "Ricerca Clinica",
      useCase3Desc: "Opzioni conformi all'HIPAA per interviste con pazienti. Trascrizione accurata della terminologia medica. Gestione sicura di dati sanitari sensibili.",
      useCase4Title: "Studi Etnografici",
      useCase4Desc: "Registrazioni sul campo in ambienti naturali. Gestione del rumore di fondo e di più parlanti. Supporto per 100+ lingue e dialetti.",
      useCase5Title: "Progetti di Storia Orale",
      useCase5Desc: "Conserva interi archivi senza limiti. Crea registri storici ricercabili. Perfetto per studi longitudinali e generazionali.",
      useCase6Title: "Ricerca per Tesi",
      useCase6Desc: "Prezzi accessibili per studenti con funzionalità complete. Elabora il tuo dataset in modo economico. Rispetta scadenze strette con l'elaborazione in batch.",
      testimonialTitle: "Fidato da",
      testimonialText: "Il nostro team di ricerca aveva 200 ore di registrazioni di focus group dal nostro studio sulla salute comunitaria. Altri servizi ci chiedevano di scegliere quali sessioni trascrivere a causa dei costi. NeverCap ci ha permesso di elaborare tutto in un weekend. L'identificazione di 20 parlanti ha funzionato davvero - anche durante le nostre discussioni più caotiche dove tutti parlavano insieme. Questo strumento ha completamente cambiato il modo in cui gestiamo i dati qualitativi.",
      testimonialAuthorName: "Dott.ssa Sarah Chen",
      testimonialAuthorRole: "Ricercatrice Capo, Istituto di Sanità Pubblica",
      ctaTitle: "Smetti di Scegliere Quali Dati Analizzare",
      ctaSubtitle: "Unisciti a 50.000+ ricercatori che trascrivono tutto",
      ctaButton: "Prova NeverCap Gratis",
        problemTitle2: "Problema della Trascrizione nella Ricerca",
        title: "The",
        useCasesTitle2: "Ogni Metodo di Ricerca",
        testimonialTitle2: "Ricercatori Leader",
        feature1TitleHl: "Intero progetto di ricerca",
        feature1TitlePost: "Completo in un'unica soluzione",
        feature2TitleHl: "Intervista a gruppi focali",
        feature2TitlePost: "Successo garantito",
        feature3TitleHl: "Accuratezza del 96%",
        feature4TitleHl: "Sicurezza",
        testimonialText2Hl: "200 ore",
        testimonialText3: "di registrazioni di focus group dal nostro studio sulla salute comunitaria. Altri servizi ci chiedevano di selezionare quali sessioni trascrivere a causa dei costi. NeverCap ci ha permesso di elaborare",
        testimonialText4Hl: "tutto in un weekend",
        testimonialText5: ". L'identificazione dei 20 parlanti ha funzionato davvero—anche durante le nostre discussioni più caotiche con tutti che parlavano contemporaneamente. Questo strumento ha",
        testimonialText6Hl: "cambiato completamente",
        testimonialText7: "il modo in cui gestiamo i dati qualitativi."
    },
    BusinessTeams: {
      heroBadge: "Per Team Aziendali",
      heroTitle1: "Registrazione Riunioni",
      heroTitle2: "Resa Facile",
      heroSubtitle: "Registra riunioni direttamente nel browser o carica file audio all'istante. Crea archivi ricercabili da conversazioni illimitate. Non perdere più discussioni importanti con trascrizioni veramente illimitate.",
      heroCtaPrimary: "Inizia a Registrare Ora →",
      heroCtaSecondary: "Guarda Come Funziona",
      recordingStatus: "Registrazione in corso...",
      statsMeetingMinutes: "Verbali Riunioni",
      statsLiveRecording: "Registrazione",
      statsSpeakerID: "ID Parlante",
      statsInstantUpload: "Carica & Elabora",
      featuresTitle: "Trascrizione per Ogni Azienda",
      featuresSubtitle: "Dalla registrazione live al caricamento istantaneo, abbiamo eliminato ogni attrito",
      feature1Title: "Registra Direttamente nel Tuo Browser",
      feature1Desc: "Nessun download, nessun plugin. Inizia a registrare all'istante con un clic. Qualità audio perfetta, rilevamento automatico dei parlanti.",
      feature1Benefit1: "Avvio registrazione con un clic",
      feature1Benefit2: "Nessuna installazione di software",
      feature1Benefit3: "Funziona su qualsiasi dispositivo",
      feature1Benefit4: "Trascrizione in tempo reale",
      feature1Visual1: "Clicca & Registra",
      feature1Visual2: "Nessuna configurazione richiesta",
      feature2Title: "Carica Qualsiasi File Audio all'Istante",
      feature2Desc: "Hai registrazioni da Zoom, Teams o dal tuo telefono? Caricale all'istante. Supporto per tutti i principali formati audio e video. Elabora più file simultaneamente senza attese.",
      feature2Benefit1: "Supporta: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Possibilità di caricamento in batch",
      feature2Benefit3: "File fino a 10 ore supportati",
      feature2Benefit4: "Elabora mentre lavori",
      feature2Visual1: "Trascina & Rilascia File",
      feature3Title: "Progettato per la Collaborazione in Team",
      feature3Desc: "Condividi i trascritti con il tuo team all'istante. Ascolta le registrazioni insieme, esporta trascritti in più formati e assicurati che tutti siano allineati con archivi di riunioni ricercabili.",
      feature3Benefit1: "Condividi trascritti con chiunque",
      feature3Benefit2: "Ascolta le registrazioni originali",
      feature3Benefit3: "Esporta trascrizioni in più formati",
      feature3Benefit4: "Archivi ricercabili per tutto il team",
      feature3Visual1: "Membri del team",
      feature3Visual2: "Collaborazione illimitata",
      feature4Title: "Trova qualsiasi conversazione all'istante",
      feature4Desc: "Cerca in tutte le riunioni contemporaneamente. Trova quella decisione cruciale dell'ultimo trimestre o quel requisito del cliente di mesi fa. La ricerca basata su AI comprende il contesto, non solo le parole chiave.",
      feature4Benefit1: "Cerca in tutte le riunioni insieme",
      feature4Benefit2: "L'AI comprende il contesto",
      feature4Benefit3: "Filtra per relatore o data",
      feature4SearchPlaceholder: "🔍 Cerca: 'Obiettivi ricavi Q4'",
      feature4SearchResults: "Trovato in 3 riunioni:",
      feature4Meeting1: "Pianificazione vendite - 15 ott",
      feature4Meeting1Text: '"...obiettivi per Q4 fissati a $2M..."',
      feature4Meeting2: "Riunione di direzione - 20 ott",
      feature4Meeting2Text: '"...previsioni ricavi Q4..."',
      workflowTitle: "Come trascrivere una",
      workflowSubtitle: "Un flusso di lavoro senza interruzioni che cattura ogni momento importante",
      workflowStep1Title: "Registra o carica",
      workflowStep1Desc: "Inizia a registrare live o scarica semplicemente la registrazione da Zoom, Google Meet o Microsoft Teams",
      workflowStep2Title: "Trascrizione automatica",
      workflowStep2Desc: "La nostra AI trascriverà automaticamente la registrazione in testo con il 96% di accuratezza in pochi minuti",
      workflowStep3Title: "Collabora",
      workflowStep3Desc: "Condividi, commenta ed estrai azioni",
      workflowStep4Title: "Cerca e analizza",
      workflowStep4Desc: "Trova approfondimenti in tutte le riunioni",
      testimonialsTitle: "I team amano",
      testimonialsSubtitle: "Scopri come le aziende trasformano la loro cultura delle riunioni",
      testimonial1Text: `"Siamo passati dal perdere dettagli cruciali all'avere un archivio ricercabile di ogni conversazione. La registrazione diretta significa che non dimenticheremo mai discussioni importanti."`,
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Product Manager, TechCorp",
      testimonial2Text: `"Otter ci limitava a 10 caricamenti al mese. Ora carichiamo tutte le chiamate con i clienti all'istante. Un punto di svolta per i follow-up del nostro team vendite."`,
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Sales Director, ConsultPro",
      testimonial3Text: `"La possibilità di cercare tra mesi di riunioni ci ha salvato durante l'audit. Trovato ogni decisione e approvazione in secondi."`,
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Smetti di perdere conversazioni importanti",
      ctaSubtitle: "Unisciti a migliaia di team che registrano ogni riunione con trascrizione illimitata",
      ctaButton: "Inizia a registrare gratis →",
        featuresTitle2: "Riunione",
        workflowTitle2: "Registrazione Zoom in testo",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Per insegnanti ed educatori",
      heroTitle1: "Rendi l'apprendimento",
      heroTitle2: "Accessibile a tutti",
      heroSubtitle: "Basta incollare link YouTube per ottenere trascrizioni istantanee con sottotitoli generati automaticamente. Trasforma lezioni, tutorial e video educativi in contenuti ricercabili e accessibili da cui ogni studente può imparare.",
      heroCtaPrimary: "Provalo Gratis - Senza carta di credito",
      heroCtaSecondary: "Guarda demo",
      stats1Number: "1-Click",
      stats1Label: "Trascrizione YouTube",
      stats2Number: "100+",
      stats2Label: "Lingue Supportate",
      stats3Number: "∞",
      stats3Label: "Video Illimitati",
      stats4Number: "96%",
      stats4Label: "Tasso di Precisione",
      featuresTitle: "Tutto ciò di cui gli Educatori hanno Bisogno per",
      featuresSubtitle: "Dalle lezioni su YouTube alle classi registrate, rendi accessibile tutto il tuo contenuto",
      feature1Title: "Link Istantanei YouTube & Piattaforme",
      feature1Desc: "Basta incollare qualsiasi link video e ottenere trascrizioni istantanee. Funziona con YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive e altro. Nessun download, nessuna attesa.",
      feature1Point1: "Trascrizione da link diretto - nessun download necessario",
      feature1Point2: "Supporto per tutte le principali piattaforme",
      feature1Point3: "Elabora intere playlist in una volta",
      feature1Point4: "Funziona con video privati (con permesso)",
      feature2Title: "Generazione Automatica di Sottotitoli",
      feature2Desc: "Crea istantaneamente sottotitoli accurati per tutti i tuoi video educativi. Rendi i contenuti accessibili per studenti con problemi uditivi, non madrelingua o chi preferisce leggere.",
      feature2Point1: "Formati di esportazione SRT, VTT e TXT",
      feature2Point2: "Timestamp a livello di parola per una perfetta sincronizzazione",
      feature2Point3: "Modifica e personalizza facilmente i sottotitoli",
      feature2Point4: "Carica direttamente su YouTube",
      feature2Visual1: "Traduzioni Linguistiche",
      feature2Visual2: "Rendi i tuoi contenuti accessibili globalmente",
      feature3Title: "Organizza per Corsi & Categorie",
      feature3Desc: "Crea cartelle per organizzare le trascrizioni per corso, materia o semestre. Mantieni tutti i tuoi contenuti educativi ordinati e facilmente ricercabili. Crea una libreria completa di materiali didattici accessibili.",
      feature3Point1: "Crea cartelle e sottocartelle illimitate",
      feature3Point2: "Tagga i video per argomento o livello di difficoltà",
      feature3Point3: "Organizza più trascrizioni in blocco",
      feature3Point4: "Cerca in tutti i tuoi contenuti all'istante",
      feature3VisualTitle: "La Tua Libreria di Corsi",
      feature3Folder1: "Matematica 101",
      feature3Folder2: "Lezioni di Fisica",
      feature3Folder3: "Video di Laboratorio di Biologia",
      feature3Folder4: "Documentari Storici",
      feature3Folder5: "Apprendimento Linguistico",
      feature4Title: "Trascrizione Audio AI in Guida di Studio",
      feature4Desc: "Non limitarti a condividere registrazioni. Trascrivi automaticamente lezioni e altri file audio in guide di studio dettagliate, complete di riassunti e concetti chiave per una revisione efficace. Esporta in formati TXT, DOCX o PDF.",
      feature4Point1: "TXT per semplice editing del testo",
      feature4Point2: "DOCX per documenti formattati",
      feature4Point3: "PDF per condivisione e stampa facili",
      feature4Point4: "Esporta più file in blocco",
      workflowTitle: "Come Funziona:",
      workflowSubtitle: "Da link video a trascrizione accessibile e materiali di studio in pochi minuti",
      workflowStep1Title: "Carica la Tua Lezione",
      workflowStep1Desc: "Carica qualsiasi file audio o video (MP3, MP4, WAV) o incolla un link YouTube",
      workflowStep2Title: "Trascrizione AI",
      workflowStep2Desc: "La nostra AI trascrive l'audio, separa gli speaker e identifica i temi chiave",
      workflowStep3Title: "Genera Sottotitoli",
      workflowStep3Desc: "Crea automaticamente sottotitoli perfettamente sincronizzati",
      workflowStep4Title: "Esporta Guida di Studio",
      workflowStep4Desc: "Scarica il testo, il riassunto o esportalo per creare la tua guida di studio finale",
      useCasesTitle: "Perfetto per Ogni",
      useCasesSubtitle: "Scopri come gli educatori usano NeverCap per migliorare l'apprendimento",
      useCase1Title: "Lezioni Registrate",
      useCase1Text: "Trascrivi interi semestri di lezioni registrate. Gli studenti possono cercare argomenti specifici, rivedere concetti chiave e non perdere mai informazioni importanti.",
      useCase2Title: "Corsi Online",
      useCase2Text: "Rendi i tuoi corsi online accessibili agli studenti internazionali con traduzioni in 100+ lingue. Aumenta iscrizioni e soddisfazione.",
      useCase3Title: "Materiali di Studio",
      useCase3Text: "Usa l'IA per trascrivere file audio in guide di studio da video tutorial e lezioni. Perfetto per studenti che preferiscono leggere o devono rivedere rapidamente contenuti con testo ricercabile.",
      useCase4Title: "Conformità all'Accessibilità",
      useCase4Text: "Soddisfa i requisiti di accessibilità fornendo sottotitoli e trascrizioni per tutti i contenuti video. Garantisci pari accesso a tutti gli studenti.",
      useCase5Title: "Classe Capovolta",
      useCase5Text: "Condividi lezioni video con trascrizioni prima della lezione. Gli studenti possono rivedere al proprio ritmo e arrivare preparati alle discussioni.",
      useCase6Title: "Ricerca & Citazioni",
      useCase6Text: "Aiuta gli studenti a citare accuratamente le fonti video con timestamp. Perfetto per progetti di ricerca e articoli accademici.",
      testimonialTitle: "Fidato da",
      testimonialSubtitle: "Scopri perché gli insegnanti di tutto il mondo scelgono NeverCap",
      testimonialText: '"Uso NeverCap per trascrivere il mio intero canale YouTube di tutorial di matematica. Ciò che richiedeva settimane con altri servizi ora richiede ore. La possibilità di incollare link direttamente e ottenere trascrizioni istantanee ha rivoluzionato come creo contenuti accessibili. I miei studenti internazionali adorano soprattutto i sottotitoli multilingua!"',
      testimonialAuthorName: "Prof.ssa Karen Mitchell",
      testimonialAuthorRole: "Professoressa di Matematica, Educatrice Online",
      ctaTitle: "Rendi Accessibili Tutti i Tuoi Contenuti Educativi",
      ctaSubtitle: "Unisciti a migliaia di educatori che usano trascrizioni veramente illimitate",
      ctaButton: "Prova NeverCap Gratis",
        featuresTitle2: "Trascrizione Video",
        grid: "File Audio a Guida di Studio",
        useCasesTitle2: "Esigenza Educativa",
        testimonialTitle2: "50.000+ Educatori"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Scarica video YouTube come MP4",
        "placeholder": "Cerca o incolla il tuo link YouTube qui",
        "clear_icon": "Pulisci input",
        "Download": "Scarica",
        "loading_text": "Elaborazione del link per il download. Resta sulla pagina.",
        "howToDownload": "Come scaricare?",
        "tutorial": "Guarda il tutorial"
      },
      part2: {
        "title": "Ecco come convertire un video YouTube in un file MP4 scaricabile in 3 semplici passaggi",
        "steps": [
                {
                  title: "Copia l'URL",
                  content: "Apri il video YouTube desiderato, quindi copia il link dalla barra degli indirizzi del browser."
                },
                {
                  title: "Incolla il link",
                  content: "Vai al tuo strumento di download video e incolla l'URL nel campo di input."
                },
                {
                  title: "Scarica l'MP4",
                  content: "Una volta elaborato, clicca sul pulsante di download per salvare il tuo file MP4."
                }
              ]
      },
      part3: {
        content: [
                "Hai mai avuto bisogno di guardare video YouTube offline?",
                "Che tu sia in viaggio in metropolitana, su un aereo, mentre studi un tutorial importante, approfondisci contenuti formativi o archivi materiale video importante—avere un accesso offline affidabile è una necessità comune. È qui che il nostro downloader brilla.",
                "Il downloader ti permette di convertire rapidamente e facilmente video YouTube in formato MP4 per il download. Salvali sul tuo dispositivo e guardali quando vuoi.",
                "Il processo è veloce, semplice e senza problemi. Una volta scaricati, goditi i tuoi video preferiti ovunque e in qualsiasi momento—senza bisogno di internet."
              ]
      },
      part4: {
        content: ["Ecco i 5 principali vantaggi del download", "di video YouTube come file MP4"],
        list: [
                {
                  title: "Risparmia sui costi dei dati:",
                  content: "Normalmente, guardare video su YouTube consuma molti dati mobili. Scaricandoli per la visualizzazione offline, puoi evitare questi costi inutili."
                },
                {
                  title: "Guarda ovunque, in qualsiasi momento:",
                  content: "Goditi i tuoi video senza interruzioni, anche con connessioni internet instabili. Niente più problemi di buffering."
                },
                {
                  title: "Archiviazione e conservazione semplici:",
                  content: "Salvare video come MP4 rende facile creare la tua collezione personale, soprattutto per contenuti che trovi davvero preziosi o importanti."
                },
                {
                  title: "Condivisione più semplice:",
                  content: "Condividere un file MP4 è molto più conveniente che inviare un link. Puoi inviare il file video direttamente tramite app come WhatsApp o Instagram, evitando il passaggio aggiuntivo di aprire YouTube."
                },
                {
                  title: "Visualizzazione istantanea, momenti condivisi:",
                  content: "Vuoi mostrare entusiasta un video preferito ad amici o familiari vicini? Con l'MP4 scaricato, potete guardarlo tutti insieme senza pause imbarazzanti in attesa del caricamento."
                }
              ]
      },
      part5: {
        title: "Perché il nostro downloader spicca",
        cards: [
                {
                  title: "Semplicità con un clic",
                  content: "Configurazione facile e operazione intuitiva."
                },
                {
                  title: "Velocità fulminea, illimitata",
                  content: "Converti e scarica alla massima velocità—senza limiti."
                },
                {
                  title: "Conversione al volo",
                  content: "Elabora i tuoi file all'istante, senza attese."
                },
                {
                  title: "Zero pubblicità, zero distrazioni",
                  content: "Goditi un'interfaccia pulita senza pop-up, banner o interruzioni—solo conversione video senza intoppi."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Qualità originale garantita",
                  content: "I tuoi download mantengono la risoluzione completa del video sorgente per una riproduzione perfetta ogni volta."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Funziona ovunque",
                  content: "Completamente compatibile con qualsiasi browser, su qualsiasi dispositivo."
                }
              ]
      },
      part6: {
        title: ["Massimizza i tuoi download di video YouTube", "Con il Downloader"],
        content: [
                "Conversione YouTube to MP4 senza sforzo: veloce, semplice e gratuita.",
                "È qui che eccelliamo. La nostra interfaccia user-friendly è progettata per tutti—nessuna competenza tecnica richiesta. Indipendentemente dal tuo livello di esperienza, puoi convertire video all'istante. Nessuna registrazione richiesta: ottieni subito ciò che ti serve.",
                "Sii tranquillo—i tuoi MP4 scaricati mantengono la qualità e la chiarezza originale, esattamente come li hai visti su YouTube.",
                "Funziona ovunque tu sia. Completamente compatibile con tutte le principali piattaforme e dispositivi. Che tu usi Windows, macOS, Linux, Android o iOS—con smartphone, tablet o desktop—puoi scaricare video senza problemi."
              ]
      },
      part7: {
        title: "Domande chiave sul download di video YouTube",
        list: [
                {
                  question: "Posso scaricare un video YouTube se è protetto da copyright?",
                  answer: "Scaricare video YouTube protetti da copyright senza il permesso del proprietario è illegale."
                },
                {
                  question: "Questo strumento di download è sicuro?",
                  answer: "Sì, è sicuro e affidabile. Non richiediamo alcuna informazione personale dagli utenti e adottiamo misure forti contro i virus. Ti ricordiamo di prestare sempre attenzione quando scarichi file da internet: evita di cliccare su link sospetti o scaricare file dubbi."
                },
                {
                  question: "Quali lingue supporta il download YouTube to MP4?",
                  answer: "Il nostro servizio supporta il download di video YouTube in tutte le lingue popolari."
                },
                {
                  question: "Quali fattori influenzano il tempo necessario per scaricare un video YouTube?",
                  answer: "Sebbene garantiamo l'esperienza di download più veloce possibile, il tempo di download è influenzato anche da fattori come la lunghezza del video e la velocità della tua connessione internet."
                },
                {
                  question: "Quando scarico un video MP4 con il mio smartphone, dove viene salvato?",
                  answer: `Dopo aver scaricato un MP4 sul tuo smartphone, puoi in genere trovarlo nella cartella "Downloads" all'interno dell'app di gestione file del dispositivo.`
                },
                {
                  question: "Scaricare un video YouTube come MP4 riduce la qualità del video?",
                  answer: "No. Scaricare video YouTube come MP4 con il nostro strumento mantiene la qualità originale del video. Il processo di conversione preserva la qualità sorgente, garantendoti la stessa esperienza di visualizzazione che hai su YouTube."
                }
              ]
      },
        err1: "Errore nel formato del link YouTube.",
        err2: "Scusa! Al momento supportiamo solo i link di YouTube. Se hai bisogno di assistenza per altri siti, ti terremo aggiornato quando lo aggiungeremo in futuro.",
        videoDownload: {
              title: "Scarica video da YouTube come MP4. Gratuito, veloce e senza pubblicità.",
              description: "Grazie per aver scelto il nostro servizio! Apprezziamo la tua fiducia e speriamo che abbia migliorato la tua esperienza. Condividere il nostro sito con gli amici sarebbe di grande aiuto.",
              downloadButton: "Scarica",
              downloadError: "Errore di download."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Tecnologia AI All'avanguardia",
      "title": "Informazioni",
      "highlighted_text": "NeverCap",
      "description": "La nostra missione è fornire servizi di trascrizione audio e video più accurati. Grazie alla nostra tecnologia AI all'avanguardia, raggiungiamo tassi di accuratezza superiori al 96%. Per alcune lingue principali, attraverso l'ottimizzazione tecnica, possiamo arrivare fino al 99% di accuratezza."
    },
    Stats: {
      "title": "Il Nostro",
      "highlighted_text": "Impatto",
      "subtitle": "Potenziamo la comunicazione globale con tecnologia AI avanzata",
      "metrics": [
            {
              "value": "96%+",
              "label": "Tasso di Accuratezza",
              "description": "Accuratezza di trascrizione all'avanguardia con AI avanzata"
            },
            {
              "value": "100+",
              "label": "Lingue Supportate",
              "description": "Riconoscimento vocale per contenuti globali"
            },
            {
              "value": "249+",
              "label": "Lingue di Traduzione",
              "description": "Traduci il testo trascritto in praticamente qualsiasi lingua"
            }
          ]
    },
    Mission: {
      "title": "Perché Scegliere",
      "highlighted_text": "NeverCap",
      "subtitle": "Crediamo nell'abbattere le barriere linguistiche e nel rendere i contenuti accessibili a tutti",
      "features": [
            {
              "icon": "🎯",
              "title": "Accuratezza Ineguagliabile",
              "description": "I nostri modelli AI sono continuamente perfezionati per offrire tassi di accuratezza superiori al 96%, con alcune lingue principali che raggiungono fino al 99% grazie all'ottimizzazione avanzata."
            },
            {
              "icon": "🌍",
              "title": "Supporto Globale per le Lingue",
              "description": "Supporto per oltre 100 lingue nel riconoscimento vocale e capacità di traduzione per più di 249 lingue, rendendo i tuoi contenuti veramente globali."
            },
            {
              "icon": "⚡",
              "title": "Elaborazione Lampo",
              "description": "Elabora ore di contenuti audio e video in minuti, non ore. La nostra pipeline AI ottimizzata garantisce trascrizioni veloci senza compromettere la qualità."
            },
            {
              "icon": "🔒",
              "title": "Sicurezza di Livello Enterprise",
              "description": "La sicurezza dei tuoi dati è la nostra priorità. Utilizziamo crittografia standard del settore e rispettiamo le normative globali sulla privacy per mantenere i tuoi contenuti al sicuro e riservati."
            }
          ]
    },
    Company: {
      "title": "Informazioni",
      "highlighted_text": "sull'Azienda",
      "subtitle": "Contattaci per qualsiasi domanda o supporto",
      "details": [
            {
              "label": "Nome Azienda",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Sede Legale",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Stati Uniti"]
            },
            {
              "label": "Contattaci",
              "value": ["Email", "Supporto disponibile 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Pronto a Sperimentare la Differenza?",
      "subtitle": "Unisciti a migliaia di professionisti che si affidano a NeverCap per le loro esigenze di trascrizione",
      "button": "Prova NeverCap Gratis →",
      "disclaimer": "Nessuna carta di credito richiesta • Inizia a trascrivere in pochi secondi"
    }
  },
  Privacy: {
    title: "Informativa sulla",
    titleGradient: "Privacy",
    subtitle: "Scopri come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali",
    "lastUpdated": "Ultimo aggiornamento: {date}",
    "lastUpdatedDate": "21 luglio 2025",
    "privacyPolicyTitle": "Informativa sulla Privacy",
    "policyAgreement": "Leggi attentamente questa Informativa sulla Privacy e assicurati di comprenderla. Utilizzando i nostri Servizi, accetti questa Informativa. Se non accetti l'uso dei tuoi dati personali conforme a questa Normativa, interrompi immediatamente l'uso dei nostri Servizi.",
    "policyOverview": "In questa normativa spieghiamo: quali dati raccogliamo e perché; come gestiamo i tuoi dati; e i tuoi diritti sui tuoi dati. Non vendiamo i tuoi dati.",
    "scopeTitle": "1. Ambito di applicazione",
    "scopeDescription": "Questa Informativa si applica solo alla raccolta e al trattamento delle informazioni degli utenti dei Servizi. Non si applica a servizi, siti web o software di terze parti collegati a noi (sia da noi forniti che condivisi da altri utenti), né a contenuti, dati, applicazioni o materiali di terzi. Ti consigliamo di verificare le normative sulla privacy dei siti o software di terze parti prima di fornire loro informazioni.",
    "collectionTitle": "2. Cosa raccogliamo e perché",
    "collectionPrinciple": "Il nostro principio guida è raccogliere solo ciò che ci serve. Ecco cosa significa in pratica:",
    "identityTitle": "2.1 Identità e accesso",
    "identityDescription": "Quando ti registri a un nostro prodotto, chiediamo informazioni identificative come nome e indirizzo email per fornire funzionalità essenziali e inviarti aggiornamenti e informazioni importanti.",
    "billingTitle": "2.2 Informazioni di pagamento",
    "billingDescription": "Se ti registri a un prodotto a pagamento, ti chiederemo i dati di pagamento e l'indirizzo di fatturazione. I dati di pagamento vengono inviati direttamente al nostro processore e non transitano sui nostri server.",
    "productInteractionsTitle": "2.3 Interazioni con il prodotto",
    "productInteractionsDescription": "Conserviamo sui nostri server i contenuti che carichi, ricevi o mantieni nei tuoi account. A meno che non li elimini, li conserveremo finché il tuo account è attivo.",
    "websiteInteractionsTitle": "2.4 Interazioni con il sito web",
    "websiteInteractionsDescription": "Raccogliamo dati sulla tua navigazione per analisi e statistiche, come test di conversione e sperimentazioni di design. Ciò include, ad esempio, versione del browser e del sistema operativo, indirizzo IP, pagine visitate e tempi di caricamento, e il sito che ti ha indirizzato a noi. Se hai un account e sei loggato, questi dati sono associati al tuo IP e account finché rimane attivo.",
    "cookiesTitle": "2.5 Cookie",
    "cookiesDescription1": "Utilizziamo cookie persistenti di prima parte e alcuni di terze parti per memorizzare preferenze, semplificare l'uso delle nostre app, effettuare test A/B e supportare analisi.",
    "cookiesDescription2": "Un cookie è un testo memorizzato dal browser. Può ricordare credenziali e preferenze, oltre a raccogliere dati come tipo di browser, sistema operativo, pagine visitate, durata della visita e click-stream. Puoi gestire i cookie nelle impostazioni del browser, ma disattivarli potrebbe compromettere il funzionamento dei nostri servizi.",
    "correspondenceTitle": "2.6 Corrispondenza volontaria",
    "correspondenceDescription": "Se ci contatti via email, conserviamo la corrispondenza e il tuo indirizzo per riferimento futuro.",
    "accessTitle": "3. Quando accediamo o condividiamo le tue informazioni",
    "accessDescription1": "Per fornire i servizi richiesti. Utilizziamo subprocessor di terze parti (come fornitori cloud e di analisi) per gestire le nostre app.",
    "accessDescription2": "Per indagare, prevenire o agire su abusi. L'accesso a un account è l'ultima risorsa. Cerchiamo di bilanciare privacy e sicurezza, e agiremo se rileviamo usi non consentiti, anche notificando le autorità se necessario.",
    "accessDescription3": "Quando richiesto dalla legge.",
    "dataRequests": "Richieste di dati utente. Non rispondiamo a richieste governative a meno di obbligo legale o emergenza. Negli USA, rispettiamo mandati, subpoena o ordini giudiziari. Per richieste esterne, seguiamo i trattati di assistenza legale. Notificheremo gli utenti interessati, salvo divieto legale o casi di emergenza.",
    "preservationRequests": "Richieste di conservazione. Conserviamo dati solo se obbligati dallo U.S. Federal Stored Communications Act (18 U.S.C. §2703(f)) o da subpoena civile. Non li condividiamo a meno di obbligo legale, e li distruggiamo alla scadenza del periodo di conservazione se non riceviamo un mandato valido.",
    "taxAudits": "In caso di audit fiscale, potremmo condividere il minimo necessario (es. indirizzi di fatturazione e informazioni su esenzioni).",
    "securityTitle": "4. Come proteggiamo i tuoi dati",
    "securityDescription": "Tutti i dati sono crittografati via SSL/TLS durante il trasferimento dai nostri server al tuo browser.",
    "deletionTitle": "5. Cosa succede quando elimini i contenuti",
    "deletionDescription": "Se elimini contenuti, diventeranno immediatamente inaccessibili.",
    "locationTitle": "6. Ubicazione del sito e dei dati",
    "locationDescription": "I nostri prodotti e servizi sono gestiti negli USA. Se sei nell'UE, UK o altrove fuori dagli USA, sappi che le tue informazioni verranno trasferite e archiviate negli USA. Usando i nostri servizi, acconsenti a questo trasferimento.",
    "childrenTitle": "7. Privacy dei minori",
    "updatesTitle": "8. Aggiornamenti a questa Informativa",
    "updatesDescription": "Aggiorneremo questa normativa per conformarci alle regolamentazioni e riflettere nuove pratiche. Per modifiche significative, aggiorneremo la data in alto.",
    "contactTitle": "9. Contattaci",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "a",
      policyDescription: 'Questa Politica descrive come NeverCap (di seguito denominato \"NeverCap\", \"nostro\", \"noi\", \"ci\") raccoglie, utilizza e divulga le tue informazioni personali quando usi i nostri servizi, siti web ({url}) e software (collettivamente, i \"Servizi\").',
      childrenDescription: "I Servizi non sono destinati ai bambini e non raccogliamo consapevolmente Informazioni Personali da minori di 13 anni. Se hai meno di 13 anni, non inviare alcuna informazione personale tramite i Servizi. Se ritieni che un bambino ci abbia fornito Informazioni Personali in violazione di questa Politica, contattaci {at} {email} come indicato di seguito.",
      contactDescription: "Se hai domande, commenti o reclami sulla nostra Politica sulla Privacy, contattaci {at} {email} e ci impegneremo a gestire il tuo reclamo il prima possibile."
},
  TermsOfUse: {
    title: "Termini di",
    titleGradient: "Servizio",
    subtitle: "Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi",
    "lastUpdated": "Ultimo aggiornamento: {date}",
    "lastUpdatedDate": "21 luglio 2025",
    "termsOfServiceTitle": "Termini di Servizio",
    "thankYou": "Grazie per utilizzare i nostri prodotti!",
    "companyDefinition": 'Quando diciamo "Società", "noi", "nostro" o "nostra" in questo documento, ci riferiamo a NeverCap.',
    "servicesDefinition": 'Quando diciamo "Servizi", intendiamo qualsiasi prodotto creato e mantenuto da NeverCap, sia esso fornito tramite browser web, applicazione desktop, applicazione mobile o altro formato.',
    "termsUpdate": "Potremmo aggiornare questi Termini di Servizio in futuro. Solitamente queste modifiche servono a chiarire alcuni termini collegandoli a politiche correlate più dettagliate. Ogni volta che apportiamo un cambiamento significativo alle nostre politiche, aggiorneremo la data in cima a questa pagina e prenderemo tutte le altre misure appropriate per notificare i titolari degli account.",
    "acceptanceTitle": "1. Accettazione dell'Accordo",
    "acceptanceDescription1": "Utilizzando i nostri Servizi, indichi la tua accettazione di questo Accordo, che diventa quindi un contratto vincolante tra te e NeverCap. Dichiari di essere legalmente in grado di accettare questi Termini e affermi di avere l'età legale per stipulare un contratto vincolante. L'accettazione da parte di NeverCap è espressamente condizionata al tuo assenso a tutti i termini e condizioni di questo Accordo.",
    "eligibilityRequirement": "I Servizi non sono destinati e non devono essere utilizzati da minori di 18 anni. Utilizzando i Servizi, dichiari e garantisci di soddisfare questo requisito di idoneità.",
    "userResponsibility": 'I termini "tu", "tuo", "te stesso" includono anche i tuoi dipendenti, agenti, rappresentanti commerciali e qualsiasi altro individuo a cui concedi accesso ai Servizi tramite il tuo Account (come definito di seguito). Sei responsabile di assicurarti che tutte le persone che accedono ai Servizi tramite il tuo account siano a conoscenza di questi Termini e li rispettino.',
    "termsRevision": "NeverCap si riserva il diritto di rivedere e aggiornare questi Termini a sua discrezione. Tutte le modifiche sono efficaci immediatamente dopo la pubblicazione. Il tuo continuo utilizzo dei Servizi dopo la pubblicazione dei Termini rivisti significa che accetti e acconsenti alle modifiche. Ti invitiamo a controllare periodicamente questa pagina per essere consapevole di eventuali cambiamenti, poiché sono vincolanti per te.",
    "servicesTitle": "2. Servizi di NeverCap",
    "servicesDescription1": "I nostri Servizi consentono agli utenti di trasformare conversazioni vocali in testo trascritto che può essere cercato, tradotto e condiviso con altri.",
    "servicesOptions": 'Puoi scegliere se utilizzare la versione gratuita dei Servizi ("Servizi Gratuiti") o la versione a pagamento basata su abbonamento per la quale potresti dover pagare delle tariffe ("Servizi a Pagamento").',
    "servicesAccess": "Renderemo i Servizi disponibili per te. Sei responsabile di predisporre tutto il necessario per accedere ai Servizi.",
    "accountTermsTitle": "3. Termini dell'Account",
    "accountSecurity": "Sei responsabile della sicurezza del tuo account. La Società non può e non sarà responsabile per eventuali perdite o danni derivanti dal tuo mancato rispetto di questo obbligo di sicurezza.",
    "lawfulUse": "Non puoi utilizzare i Servizi per scopi illegali, non etici o immorali.",
    "contentResponsibility": "Sei responsabile di tutti i contenuti pubblicati e delle attività che avvengono sotto il tuo account. Ciò include i contenuti pubblicati da altri che: (a) hanno accesso alle tue credenziali di accesso; o (b) hanno i propri accessi sotto il tuo account.",
    "humanRequirement": 'Devi essere un essere umano. Non sono consentiti account registrati da "bot" o altri metodi automatizzati.',
    "paymentTitle": "4. Pagamento, Rimborsi e Cambiamenti di Piano",
    "freeTrial": "Per i Servizi a pagamento che offrono una prova gratuita, spieghiamo la durata della prova al momento della registrazione. Dopo il periodo di prova, devi pagare in anticipo per continuare a utilizzare il Servizio. Se non paghi, questi servizi cesseranno.",
    "upgradePolicy": "Se passi da un piano gratuito a uno a pagamento, addebiteremo immediatamente la tua carta e il tuo ciclo di fatturazione inizierà il giorno dell'aggiornamento.",
    "taxes": "Tutte le tariffe sono escluse tasse, imposte o dazi imposti dalle autorità fiscali. Se richiesto, riscuoteremo queste tasse per conto dell'autorità fiscale e le verseremo alle autorità competenti. Altrimenti, sei responsabile del pagamento di tutte le tasse, imposte o dazi.",
    "refunds": "Tutti gli acquisti non sono rimborsabili. Puoi annullare qualsiasi servizio a pagamento in qualsiasi momento accedendo al tuo account. Per gli abbonamenti a pagamento, l'annullamento avrà effetto alla fine del periodo pagato corrente, salvo diversa indicazione.",
    "cancellationTitle": "5. Annullamento e Risoluzione",
    "cancellationPolicy": "Se annulli il Servizio prima della fine del periodo pagato, l'annullamento avrà effetto immediato e non ti verrà addebitato nuovamente. Non rimborsiamo automaticamente il tempo non utilizzato nell'ultimo ciclo di fatturazione.",
    "terminationRights": "Ci riserviamo il diritto di sospendere o terminare il tuo account e rifiutare qualsiasi uso attuale o futuro dei nostri Servizi per qualsiasi motivo in qualsiasi momento. La sospensione significa che non potrai accedere all'account o a qualsiasi contenuto in esso presente. La terminazione comporterà inoltre la cancellazione del tuo account o del tuo accesso all'account e la perdita di tutti i contenuti nel tuo account. Ci riserviamo anche il diritto di rifiutare l'uso dei Servizi a chiunque per qualsiasi motivo in qualsiasi momento. Abbiamo questa clausola perché, statisticamente parlando, tra le centinaia di migliaia di account sui nostri Servizi, ce n'è almeno uno che fa qualcosa di nefasto.",
    "abusePolicy": "Abusi verbali, fisici, scritti o di altro tipo (comprese minacce di abuso o ritorsione) nei confronti di un dipendente o dirigente della Società possono comportare la terminazione immediata dell'account.",
    "submissionsTitle": "6. Contributi",
    "submissionsDescription": `Riconosci e accetti che qualsiasi domanda, commento, suggerimento, idea, feedback o altra informazione riguardante il Sito ("Contributi") fornita da te a noi è non confidenziale e diventerà nostra proprietà esclusiva. Avremo diritti esclusivi, inclusi tutti i diritti di proprietà intellettuale, e saremo autorizzati all'uso e alla diffusione illimitati di questi Contributi per qualsiasi scopo legale, commerciale o meno, senza riconoscimento o compenso per te. Rinunci a tutti i diritti morali su tali Contributi e garantisci che tali Contributi siano originali o che tu abbia il diritto di inviarli. Accetti che non ci sarà alcuna rivalsa contro di noi per qualsiasi presunta o effettiva violazione o appropriazione indebita di qualsiasi diritto proprietario nei tuoi Contributi.`,
    "uptimeTitle": "7. Disponibilità e Sicurezza",
    "serviceAvailability": `L'uso dei Servizi è a tuo rischio. Forniamo questi Servizi "così come sono" e "come disponibili". Non offriamo accordi di livello di servizio per la maggior parte dei nostri Servizi, ma prendiamo seriamente la disponibilità delle nostre applicazioni.`,
    "throttlingPolicy": "Ci riserviamo il diritto di limitare temporaneamente l'accesso all'account in rari casi in cui l'attività di un utente influisca negativamente sulla stabilità e sulle prestazioni del Servizio per altri utenti. Tranne nei casi più critici, ti contatteremo per trovare una soluzione prima di agire.",
    "dataSecurity": "Adottiamo molte misure per proteggere e garantire la sicurezza dei tuoi dati attraverso backup, ridondanze e crittografia. Impieghiamo la crittografia per la trasmissione dei dati su Internet pubblico.",
    "thirdPartyVendors": "Utilizziamo fornitori e partner di hosting terzi per fornire l'hardware, il software, la rete, lo storage e la tecnologia correlata necessari per erogare i Servizi.",
    "siteManagementTitle": "8. Gestione del Sito",
    "siteManagementDescription": "Ci riserviamo il diritto, ma non l'obbligo, di: (1) monitorare il Sito per violazioni di questi Termini di Servizio; (2) intraprendere azioni legali appropriate contro chiunque, a nostra esclusiva discrezione, violi la legge o questi Termini di Servizio, incluso, senza limitazione, segnalare tale utente alle autorità competenti; (3) a nostra esclusiva discrezione e senza limitazione, rifiutare, limitare l'accesso, ridurre la disponibilità o disabilitare (nella misura tecnologicamente fattibile) qualsiasi tuo Contributo o parte di esso; (4) a nostra esclusiva discrezione e senza preavviso o responsabilità, rimuovere dal Sito o disabilitare tutti i file e i contenuti di dimensioni eccessive o che in qualsiasi modo gravino sui nostri sistemi; e (5) gestire il Sito in modo da proteggere i nostri diritti e proprietà e facilitare il corretto funzionamento del Sito.",
    "copyrightTitle": "9. Copyright e Proprietà dei Contenuti",
    "copyrightCompliance": "Tutti i contenuti pubblicati sui Servizi devono conformarsi alla legge sul copyright degli Stati Uniti.",
    "ipRights": "Non rivendichiamo diritti di proprietà intellettuale sul materiale che fornisci ai Servizi. Tutti i materiali caricati rimangono tuoi.",
    "contentModeration": "Non esaminiamo preventivamente i contenuti, ma ci riserviamo il diritto (ma non l'obbligo) a nostra esclusiva discrezione di rifiutare o rimuovere qualsiasi contenuto disponibile tramite il Servizio.",
    "prohibitedExploitation": "Accetti di non riprodurre, duplicare, copiare, vendere, rivendere o sfruttare alcuna parte dei Servizi, l'uso dei Servizi o l'accesso ai Servizi senza l'esplicita autorizzazione scritta della Società.",
    "impersonationProhibition": "Non devi modificare un altro sito web per far credere falsamente che sia associato ai Servizi o alla Società.",
    "dmcaPolicy": "Rispettiamo i diritti di proprietà intellettuale altrui. Se ritieni che qualsiasi materiale disponibile sul o tramite il Sito violi un copyright di tua proprietà o controllo, contattaci immediatamente. Una copia della tua Notifica sarà inviata alla persona che ha pubblicato o memorizzato il materiale in questione. Ti informiamo che, in base alla legge applicabile, potresti essere ritenuto responsabile di danni se presenti false dichiarazioni materiali in una Notifica. Pertanto, se non sei sicuro che il materiale sul Sito o collegato ad esso violi il tuo copyright, dovresti prima contattare un avvocato.",
    "prohibitedActivitiesTitle": "10. Attività Proibite",
    "generalProhibition": "Non puoi accedere o utilizzare il Sito per scopi diversi da quelli per cui lo rendiamo disponibile. Il Sito non può essere utilizzato per attività commerciali, a meno che non siano specificamente approvate da noi.",
    "userObligations": "Come utente del Sito, accetti di non:",
    "dataScraping": "Recuperare sistematicamente dati o altri contenuti dal Sito per creare o compilare, direttamente o indirettamente, una raccolta, compilazione, database o directory senza il nostro permesso scritto.",
    "fraud": "Ingannare, frodare o fuorviare noi e altri utenti, specialmente nel tentativo di ottenere informazioni sensibili come le password degli account.",
    "securityInterference": "Eludere, disabilitare o interferire con le funzionalità di sicurezza del Sito, comprese quelle che impediscono o limitano l'uso o la copia dei contenuti o impongono restrizioni sull'uso del Sito e/o dei contenuti presenti.",
    "defamation": "Denigrare, danneggiare o recare danno, a nostro giudizio, a noi e/o al Sito.",
    "harassment": "Utilizzare qualsiasi informazione ottenuta dal Sito per molestare, abusare o danneggiare un'altra persona.",
    "supportAbuse": "Fare un uso improprio dei nostri servizi di supporto o inviare false segnalazioni di abuso o condotta scorretta.",
    "legalCompliance": "Utilizzare il Sito in modo non conforme alle leggi o ai regolamenti applicabili.",
    "framingProhibition": "Effettuare framing non autorizzato o collegamenti al Sito.",
    "malware": "Caricare o trasmettere (o tentare di caricare o trasmettere) virus, Trojan o altro materiale, incluso l'uso eccessivo di lettere maiuscole e spam (pubblicazione continua di testo ripetitivo), che interferisca con l'uso ininterrotto del Sito o ne modifichi, comprometta, interrompa o interferisca con le funzionalità, l'operatività o la manutenzione.",
    "automation": "Utilizzare in modo automatizzato il sistema, come script per inviare commenti o messaggi, o strumenti di data mining, robot o simili per raccogliere ed estrarre dati.",
    "copyrightRemoval": "Eliminare i diritti d'autore o altre note di proprietà da qualsiasi contenuto.",
    "impersonation": "Tentare di impersonare un altro utente o persona o utilizzare il nome utente di un altro utente.",
    "spyware": 'Caricare o trasmettere (o tentare di caricare o trasmettere) materiale che funga da meccanismo passivo o attivo di raccolta o trasmissione di informazioni, inclusi, senza limitazione, GIF trasparenti, pixel 1×1, web bug, cookie o dispositivi simili (a volte chiamati "spyware" o "meccanismi di raccolta passiva").',
    "disruption": "Interferire, interrompere o creare un carico eccessivo sul Sito o sulle reti o servizi connessi.",
    "employeeHarassment": "Molestare, infastidire, intimidire o minacciare i nostri dipendenti o agenti che forniscono il Sito.",
    "accessCircumvention": "Tentare di bypassare le misure del Sito progettate per impedire o limitare l'accesso al Sito o a sue parti.",
    "codeCopying": "Copiare o adattare il software del Sito, incluso, ma non limitato a, Flash, PHP, HTML, JavaScript o altro codice.",
    "reverseEngineering": "Salvo quanto consentito dalla legge, decifrare, decompilare, disassemblare o fare reverse engineering del software che compone il Sito.",
    "bots": "Salvo risultato dell'uso standard di motori di ricerca o browser, utilizzare, lanciare, sviluppare o distribuire sistemi automatizzati, inclusi spider, robot, utility per trucchi, scraper o lettori offline che accedono al Sito, o lanciare script o software non autorizzati.",
    "buyingAgents": "Utilizzare un agente di acquisto per effettuare acquisti sul Sito.",
    "unauthorizedUse": "Fare un uso non autorizzato del Sito, inclusa la raccolta di nomi utente e/o email per inviare email non richieste o creare account con mezzi automatizzati o sotto falsi pretesti.",
    "competition": "Utilizzare il Sito per competere con noi o per attività generatrici di reddito o imprese commerciali.",
    "advertising": "Utilizzare il Sito per pubblicizzare o offrire beni e servizi in vendita.",
    "profileTransfer": "Vendere o trasferire il tuo profilo.",
    "featuresTitle": "11. Funzionalità e Bug",
    "featuresDescription": "Progettiamo i nostri Servizi con cura, basandoci sulla nostra esperienza e su quella dei clienti che condividono feedback. Tuttavia, non esiste un servizio che soddisfi tutti. Non garantiamo che i nostri Servizi soddisferanno le tue esigenze o aspettative specifiche.",
    "bugsDescription": "Testiamo tutte le funzionalità prima del rilascio. Come qualsiasi software, i nostri Servizi hanno inevitabilmente bug. Monitoriamo i bug segnalati e li risolviamo, specialmente quelli relativi a sicurezza e privacy. Non tutti i bug verranno corretti e non garantiamo Servizi completamente privi di errori.",
    "correctionsTitle": "12. Correzioni",
    "informationAccuracy": "Potrebbero esserci errori tipografici, inesattezze o omissioni sul Sito, inclusi descrizioni, prezzi, disponibilità e altre informazioni. Ci riserviamo il diritto di correggere errori e aggiornare le informazioni in qualsiasi momento, senza preavviso.",
    "siteAvailability": "Non garantiamo che il Sito sia sempre disponibile. Potremmo riscontrare problemi hardware, software o di manutenzione, causando interruzioni. Ci riserviamo il diritto di modificare, sospendere o interrompere il Sito senza preavviso. Non siamo responsabili per perdite o danni dovuti all'indisponibilità del Sito.",
    "userDataTitle": "13. Dati Utente",
    "userDataDescription": "Conserviamo i dati che trasmetti al Sito per gestirne le prestazioni e il tuo utilizzo. Eseguiamo backup regolari, ma sei responsabile dei dati che trasmetti. Rinunci a qualsiasi azione legale per perdita o corruzione dei dati.",
    "privacyPolicyTitle": "14. Privacy Policy",
    "liabilityTitle": "15. Responsabilità",
    "liabilityIntroduction": "Riportiamo la responsabilità in un'unica sezione:",
    "liabilityWaiver": "Accetti espressamente che la Società non sia responsabile, per legge o equità, verso di te o terzi per danni diretti, indiretti, incidentali, perdite di profitti, speciali, consequenziali, punitivi o esemplari, derivanti da: (1) uso o impossibilità di usare i Servizi; (2) errori nei contenuti; (3) danni personali o materiali; (4) costi per beni/servizi sostitutivi; (5) accesso non autorizzato ai server; (6) interruzioni di trasmissione; (7) bug o virus; (8) errori nei contenuti; (9) condotta di terzi; (10) qualsiasi altra questione relativa a questi Termini o ai Servizi.",
    "miscellaneousTitle": "16. Varie",
    "miscellaneousDescription": "Questi Termini e le policy sul Sito costituiscono l'accordo completo tra te e noi. La mancata applicazione di un diritto non ne costituisce rinuncia. Possiamo cedere diritti e obblighi. Non siamo responsabili per cause esterne al nostro controllo. Se una clausola è illegale o inapplicabile, le restanti rimangono valide. Nessun rapporto di joint venture, partnership, lavoro o agenzia è creato da questi Termini. Accetti che questi Termini non siano interpretati contro di noi per averli redatti. Rinunci a difese basate sulla forma elettronica e sulla mancanza di firma.",
    "contactTitle": "17. Contattaci",
    "neverCap": "NeverCap",
    at: "a",
    "site": "Sito",
    "services": "Servizi",
      trademarkProtection: "I nomi, l'aspetto e lo stile dei Servizi sono protetti da copyright© della Società. Tutti i diritti riservati. Non puoi duplicare, copiare o riutilizzare alcuna parte degli elementi HTML, CSS, JavaScript o del design visivo senza esplicita autorizzazione scritta della Società. Devi richiedere il permesso per utilizzare il logo della Società o qualsiasi logo dei Servizi a scopo promozionale. Inviaci una email {at} {email} per richiedere l'uso dei loghi. Ci riserviamo il diritto di revocare questa autorizzazione in caso di violazione di questi Termini di Servizio.",
      privacyPolicyDescription: "Teniamo alla privacy e alla sicurezza dei dati. Consulta la nostra {policy}. Utilizzando il Sito, accetti di essere vincolato dalla nostra Politica sulla Privacy, incorporata in questi Termini di Servizio. Tieni presente che il Sito è ospitato negli Stati Uniti. Se accedi al Sito da qualsiasi altra regione del mondo con leggi o requisiti diversi sugli Stati Uniti riguardanti la raccolta, l'uso o la divulgazione dei dati personali, con il tuo utilizzo continuato del Sito, trasferisci i tuoi dati negli Stati Uniti e accetti che i tuoi dati siano trasferiti e elaborati negli Stati Uniti.",
      contactDescription: "Se hai domande su uno qualsiasi dei Termini di Servizio, contattaci {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
