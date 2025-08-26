// 德语
let message = {
  // 首页
  HomePage: {
    home: "Alle Transkripte",
    times:
      "{times} kostenlose Transkriptionen pro Tag, {left} heute verbleibend. ",
    tips: "Upgraden Sie auf Pro für unbegrenzte Transkriptionen.",
    update: "Jetzt upgraden",
    rename: "Umbenennen",
    delete: "Löschen",
    cancel: "Abbrechen",
    confirm: "Erstellen",
    dialogLabel: "Ordnername",
    recently: "Zuletzt verwendete Dateien",
    loading: "Laden",
    tour: {
      step0: {
        title: "Willkommen bei {name}",
        tip: "Hier können Sie:",
        content:
          "Einzelgespräche, Meetings, Vorlesungen und mehr transkribieren",
        next: "Loslegen"
      },
      step1: {
        title: "Dateien transkribieren",
        content:
          "Unterstützt drei Transkriptionsmethoden: lokale Dateien, Links und Aufnahmen."
      },
      step2: {
        title: "Ordner erstellen",
        content:
          'Klicken Sie auf das "+", um einen Ordner zu erstellen und Ihre Dateien zu organisieren.'
      },
      step3: {
        title: "Transkriptionsdetails anzeigen und bearbeiten",
        content:
          "Klicken Sie auf das Element, um Transkriptionsdetails anzuzeigen, zu bearbeiten und zu übersetzen."
      },
      next: "Weiter",
      finish: "Verstanden"
    },
    export: {
      export: "Exportieren",
      title: "Ihr Export wird erstellt",
      title2: "Ihre Datei ist bereit",
      singleLoadingContent: "1 Datei wird komprimiert.",
      singleSuccessContent: "1 Datei wurde komprimiert.",
      loadingContent: "{num} Dateien werden komprimiert.",
      successContent: "{num} Dateien wurden komprimiert.",
      cancel: "Export abbrechen",
      error: "Exportfehler",
      dialog: {
        title: "Warnung",
        content: "Export abbrechen?",
        cancel: "Export abbrechen",
        continue: "Export fortsetzen"
      }
    },
    welcome: {
      title: "Willkommen bei Scribify!",
      description: "Hier können Sie:",
      transcribe:
        "Mühelos mit Scribify transkribieren – verwandeln Sie Sprachgespräche sofort in klaren, durchsuchbaren und teilbaren Text.",
      precision:
        "Erhalten Sie präzise Transkripte mit Sprecherkennung und Zeitstempeln sofort.",
      translate:
        "Überwinden Sie Sprachbarrieren: Übersetzen Sie Transkripte in mehr als 200 Sprachen mit Leichtigkeit.",
      edit: "Bearbeiten, verfeinern und exportieren Sie Ihre Transkripte in Formaten, die Ihren Anforderungen entsprechen.",
      collaborate:
        "Arbeiten Sie zusammen, indem Sie Ihren transkribierten Text mit anderen teilen.",
      button: "Loslegen",
      tip: "Bereit, Audio in transkribierten Text umzuwandeln? Beginnen Sie jetzt mit der Erkundung!",
      tip2: "Jetzt erkunden!",
      tip1: "Bereit, Audio in transkribierten Text umzuwandeln? "
    },
    subscriptionModal: {
      left: {
        title: "Holen Sie sich den Pro-Plan für mehr Funktionen",
        c1: "Unbegrenzte Transkriptionen",
        c2: "10-Stunden-Uploads",
        c3: "Höchste Priorität",
        c4: "99% Transkriptionsgenauigkeit",
        c5: "Über 100 unterstützte Sprachen",
        c6: "Sprechererkennung",
        c7: "Transkriptübersetzung",
        t1: "Unbegrenzte Transkriptionen für eine Person.",
        t2: "Jede Datei kann bis zu 10 Stunden / 5 GB lang sein. Laden Sie 50 Dateien gleichzeitig hoch.",
        t3: "Wir transkribieren Ihre Dateien immer so schnell wie möglich mit höchster Priorität."
      },
      right: {
        title: "Pro-Plan erhalten",
        yearly: "Jährlich",
        monthly: "Monatlich",
        save: "Ersparnis",
        preMonth: "pro Monat",
        preYear: "pro Jahr",
        firstMonth: "erster Monat",
        afterwards: "danach"
      },
      subscribe: "Abonnieren"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Fehlgeschlagen",
      selected: "Ausgewählt",
      success: "Erfolgreich",
      fileList: "Dateiliste"
    },
    dialog: {
      move: {
        title: "Verschieben",
        label: "Ordner auswählen",
        placeholder: "Ordner auswählen",
        confirm: "Verschieben",
        cancel: "Abbrechen"
      },
      rename: {
        title: "Umbenennen",
        label: "Dateiname",
        confirm: "Umbenennen",
        cancel: "Abbrechen"
      },
      delete: {
        title: "Löschen",
        file: "Datei",
        files: "Dateien",
        label:
          "Möchten Sie die Löschung bestätigen? Diese Aktion kann nicht rückgängig gemacht werden.",
        confirm: "Löschen",
        cancel: "Abbrechen"
      },
      share: {
        title: "Teilen",
        label:
          "Jeder mit dem folgenden sicheren Link kann diese Transkript und die zugehörige Mediendatei ansehen.",
        confirm: "Link kopieren",
        success: "Erfolgreich kopiert"
      },
      export: {
        title: "Exportieren",
        select: "Wählen Sie das benötigte Format",
        settings: "Einstellungen",
        speaker: "Sprecher einschließen",
        timecodes: "Zeitcodes einschließen",
        confirm: "Exportieren",
        cancel: "Abbrechen",
        selectErr: "Bitte wählen Sie ein oder mehrere Formate aus"
      }
    },
    search: {
      placeholder: "Suchen"
    },
    recently: "Zuletzt",
    record: "Aufnehmen",
    transcribe: "Transcribieren",
    unclassified: "Unklassifizierte Ordner",
    buttons: {
      transcribe: "Dateien transcribieren",
      url: "Links transcribieren",
      record: "Aufnehmen und transcribieren",
      recording: "Aufnahme..."
    },
    delSuccess: "Erfolgreich gelöscht",
    create: "Erstellen",
    endRecord: {
      title: "Hinweis",
      content:
        "Sie nehmen auf. Diese Aktion beendet die Aufnahme. Möchten Sie die Aufnahme beenden?",
      confirm: "Aufnahme Fortsetzen",
      cancel: "Aufnahme Beenden"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Aufnehmen",
      pause: "Pausieren",
      resume: "Fortsetzen",
      stop: "Stoppen",
      endRecord: "Aufnahme beenden",
      delete: "Löschen",
      transcribe: "Transcribieren",
      permissionDenied:
        "Mikrofonberechtigung verweigert oder Gerät existiert nicht",
      dialog: {
        delete: {
          title: "Warnung",
          label: "Möchten Sie diese Aufnahme wirklich löschen?",
          confirm: "Löschen",
          cancel: "Abbrechen"
        },
        complete: {
          title: "Aufnahme abgeschlossen",
          label:
            "Die Aufnahme hat 10 Stunden erreicht und ist automatisch gestoppt. Bitte transcribieren.",
          confirm: "Verstanden"
        },
        speaker: {
          content:
            "Für die Sprechererkennung sind Dateien auf 3 Stunden begrenzt. Bitte deaktivieren Sie '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Online-Medien transcribieren",
        title: "Links einfügen",
        label:
          "Fügen Sie Ihren Video- oder Audio-Link ein von: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram und weiteren Plattformen...",
        confirm: "Hinzufügen",
        cancel: "Abbrechen",
        // Bitte geben Sie eine gültige URL ein
        errorTitle:
          "Die eingegebene URL ist ungültig. Bitte überprüfen Sie und versuchen Sie es erneut.",
        linkName: "Link"
      },
      file: {
        orTitle: "Von URL transkribieren",
        dialogTitle: "Hochladen von Dateien zum Transkribieren",
        tip1: "Ziehen Sie Dateien hierher oder klicken Sie, um sie zu durchsuchen",
        tip2: "Klicken Sie hier, um zu blättern",
        or: "oder",
        supported: "Unterstützte Formate"
      },
      del: {
        title: "Warnung",
        content:
          "Alle Fortschritte gehen verloren. Möchten Sie die Transkription abbrechen?",
        cancel: "Bestätigen Sie Abbrechen",
        confirm: "Fortsetzen"
      },
      files: "Dateien",
      resultDialogTitle: "Dateien transcribieren",
      resultDialogTitle2: "Datei transkribieren",
      cancel: "Abbrechen",
      confirm: "Transcribieren",
      return: "Zurück",
      addMore: "Mehr hinzufügen",
      language: "Sprache auswählen",
      failed: "Fehlgeschlagen",
      tooLarge: "Die Datei überschreitet das Limit (5 GB).",
      linkUpload: "Hochladen",
      fileFormat: "Dateiformat nicht erlaubt",
      localFiles: "Lokale Dateien",
      pasteLink: "Online-Link",
      uploadErr: "Uploadfehler",
      hashErr: "Hash-Fehler",
      table: {
        status: "Status",
        file: "Datei",
        size: "Größe",
        noData: "Keine Daten"
      },
      maxFileNum: "Die Anzahl der Dateien darf {num} nicht überschreiten.",
      speaker: "Sprecher identifizieren",
      speakerLabel:
        "Sprecher automatisch erkennen",
      guest: {
        transcribe: "Transkribieren",
        file: "Datei",
        audio: "Audio-/Videodatei",
        Uploading: "Hochladen..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Kürzlich",
      popular: "Beliebt",
      other: "Andere",
      searchLanguage: "Sprache suchen",
      noMatch: "Keine passende Sprache gefunden",
      English: "Englisch",
      "English(US)": "Englisch (US)",
      "English(UK)": "Englisch (UK)",
      Spanish: "Spanisch",
      Portuguese: "Portugiesisch",
      French: "Französisch",
      Italian: "Italienisch",
      German: "Deutsch",
      Dutch: "Niederländisch",
      Polish: "Polnisch",
      Danish: "Dänisch",
      Japanese: "Japanisch",
      Korean: "Koreanisch",
      Hungarian: "Ungarisch",
      Czech: "Tschechisch",
      Chinese: "Chinesisch",
      Hebrew: "Hebräisch",
      Arabic: "Arabisch",
      Azerbaijani: "Aserbaidschanisch",
      Estonian: "Estnisch",
      Belarusian: "Weißrussisch",
      Bulgarian: "Bulgarisch",
      Icelandic: "Isländisch",
      Bosnian: "Bosnisch",
      Persian: "Persisch",
      Russian: "Russisch",
      "Chinese(Traditional)": "Chinesisch (Traditionell)",
      Finnish: "Finnisch",
      Kazakh: "Kasachisch",
      Galician: "Galicisch",
      Catalan: "Katalanisch",
      "Chinese(Simplified)": "Chinesisch (Vereinfacht)",
      Kannada: "Kannada",
      Croatian: "Kroatisch",
      Latvian: "Lettisch",
      Lithuanian: "Litauisch",
      Romanian: "Rumänisch",
      Marathi: "Marathi",
      Malay: "Malaiisch",
      Macedonian: "Mazedonisch",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalesisch",
      Norwegian: "Norwegisch",
      Swedish: "Schwedisch",
      Serbian: "Serbisch",
      Slovak: "Slowakisch",
      Slovenian: "Slowenisch",
      Swahili: "Suaheli",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thailändisch",
      Turkish: "Türkisch",
      Welsh: "Walisisch",
      Urdu: "Urdu",
      Ukrainian: "Ukrainisch",
      Greek: "Griechisch",
      Armenian: "Armenisch",
      Hindi: "Hindi",
      Indonesian: "Indonesisch",
      Vietnamese: "Vietnamesisch",
      Albanian: "Albanisch",
      Amharic: "Amharisch",
      Assamese: "Assamesisch",
      Occitan: "Okzitanisch",
      Bashkir: "Baschkirisch",
      Basque: "Baskisch",
      Breton: "Bretonisch",
      Tibetan: "Tibetisch",
      Faroese: "Färöisch",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisch",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitianisch-Kreolisch",
      Hausa: "Hausa",
      Latin: "Latein",
      Lao: "Laotisch",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgisch",
      Malagasy: "Malagasy",
      Maltese: "Maltesisch",
      Malayalam: "Malayalam",
      Mongolian: "Mongolisch",
      Bengali: "Bengalisch",
      Burmese: "Birmanisch",
      Punjabi: "Punjabi",
      Pashto: "Paschtu",
      Sinhala: "Singhalesisch",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadschikisch",
      Tatar: "Tatarisch",
      Telugu: "Telugu",
      Turkmen: "Turkmenisch",
      Uzbek: "Usbekisch",
      Hawaiian: "Hawaiianisch",
      "Norwegian Nynorsk": "Norwegisch (Nynorsk)",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisch",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanisch",
      Cantonese: "Kantonesisch",
      Abkhaz: "Abchasisch",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Awarisch",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irisch",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetisch",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesisch",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Nord-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Belutschisch",
      bho: "Bhojpuri",
      bua: "Burjatisch",
      chm: "Mari (Wiese)",
      Chamorro: "Chamorro",
      Chechen: "Tschetschenisch",
      chk: "Chuukesisch",
      Chuvash: "Tschuwaschisch",
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
      "ndc-ZW": "Ndau (Simbabwe)",
      "South Ndebele": "Süd-Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (Westafrikanische Schrift)",
      "French(Canada)": "Französisch (Kanada)",
      Fijian: "Fidschianisch",
      fon: "Fon",
      "Western Frisian": "Westfriesisch",
      fur: "Friaulisch",
      Fulah: "Fulfulde",
      Kongo: "Kongo",
      Kalaallisut: "Grönländisch",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrückisch",
      Kyrgyz: "Kirgisisch",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsisch",
      "crh-Latn": "Krimtatarisch (Lateinisch)",
      crh: "Krimtatarisch (Kyrillisch)",
      Quechua: "Quechua",
      Kurdish: "Kurdisch (Kurmandschi)",
      ckb: "Kurdisch (Sorani)",
      trp: "Kokborok",
      ltg: "Lettgallisch",
      lij: "Ligurisch",
      Limburgish: "Limburgisch",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisch",
      rom: "Romani",
      mad: "Maduresisch",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaiisch (Jawi)",
      Marshallese: "Marshallesisch",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Osthuastekisches Nahuatl",
      "Southern Sotho": "Süd-Sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamentu",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugiesisch (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Kiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapotekisch",
      "Northern Sami": "Nordsamisch",
      Samoan: "Samoanisch",
      kri: "Krio",
      crs: "Seychellenkreol",
      Sango: "Sango",
      "sat-Latn": "Santali (Lateinisch)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swazi",
      "Scottish Gaelic": "Schottisch-Gälisch",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Lateinisch)",
      Tahitian: "Tahitianisch",
      Tonga: "Tongaisch",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuwinisch",
      war: "Waray",
      mak: "Makassarisch",
      vec: "Venezianisch",
      Uyghur: "Uigurisch",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtisch",
      szl: "Schlesisch",
      scn: "Sizilianisch",
      hil: "Hiligaynon",
      jam: "Jamaikanisch-Kreolisch",
      sah: "Jakutisch",
      ace: "Acehnesisch",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Lateinisch)",
      Inuktitut: "Inuktitut (Silbenschrift)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "oder", // 或
    LoginBtn: "Mit E-Mail anmelden",
    LoginGoogle: "Mit Google anmelden",
    SignupBtn: "Mit E-Mail registrieren",
    SignupGoogle: "Mit Google registrieren",
    SignupDes:
      "Registrieren Sie sich heute und erleben Sie die Magie – kostenlos.",
    SignupTitle: "Präzise & unbegrenzte Transkription",
    signup: "Registrieren", // 注册
    sign_up: "Registrieren", // 注册
    loginByGoogle: "Mit Google fortfahren", // 使用Google登录
    emailAddress: "Bitte geben Sie Ihre E-Mail-Adresse ein", // 请输入您的邮箱
    createAccount: "Neues Konto erstellen", // 创建账户
    accountExists: "Haben Sie bereits ein Konto? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree:
        "Durch das Fortfahren stimmen Sie unseren {terms} und {policy} zu.",
      terms: "Bedingungen",
      policy: "Datenschutzrichtlinie"
    },
    setPassword: "Passwort setzen", // 设置密码
    code: "Bestätigungscode", // 验证码
    resend: "Erneut senden", // 重新发送
    enterPassword: "Passwort: Mindestens 6 Zeichen.", // 请输入密码
    passwordLeval: "Passwortstärke", // 密码强度
    Weak: "Schwach", // 弱 中 强
    Medium: "Mittel", // 弱 中 强
    Strong: "Stark", // 弱 中 强
    confirmPassword: "Passwort bestätigen", // 确认密码
    invalidEmail: "Ungültige E-Mail-Adresse", // 无效的邮箱地址
    logInDirectly:
      "Dieses Konto existiert bereits. Bitte melden Sie sich direkt an.", // 账户已存在，请直接登录
    codeErrorTryAgain:
      "Bestätigungscode fehlerhaft. Bitte versuchen Sie es erneut.", // 验证码错误，请重试
    atLeastSix: "Das Passwort muss mindestens 6 Zeichen lang sein.", // 密码长度至少6位
    passwordNotMatch:
      "Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut.", // 密码不匹配，请重试
    login: "Anmelden", // 登录
    log_in: "Anmelden", // 登录
    log_In: "Anmelden", // 登录
    password: "Passwort", // 密码
    forgotPassword: "Passwort vergessen?", // 忘记密码？
    noAccount: "Haben Sie kein Konto? ", // 没有账户？注册
    accountNotExists: "Dieses Konto existiert nicht.", // 账户不存在
    passwordError: "Passwortfehler", // 密码错误
    sendCode: "Bestätigungscode senden", // 发送验证码
    resetPassword: "Passwort zurücksetzen", // 重置密码
    resetYourPassword: "Ihr Passwort zurücksetzen", // 重置你的密码
    newOldCantSame:
      "Das neue Passwort darf nicht mit dem alten übereinstimmen.", // 新密码与旧密码不能相同
    passwordResetOk: "Passwort erfolgreich zurückgesetzt！", // 密码重置成功！
    signupToSaveProgress:
      "Schließen Sie die Anmeldung ab, um Ihren Fortschritt zu speichern.",
    tip: "Hinweis",
    tipContentEmail:
      "Wir haben soeben Ihr Anmeldekennwort für das Konto an Ihre E-Mail gesendet.",
    tipContentPassword:
      "Bitte überprüfen Sie Ihren Posteingang und melden Sie sich mit Ihrer E-Mail und Ihrem Kennwort an.",
    codeToEmail:
      "Wir haben soeben einen Bestätigungscode an Ihre E-Mail gesendet. Bitte überprüfen Sie Ihren Posteingang und fügen Sie den Bestätigungscode oben ein."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementplan",
    freeversion: "Kostenlos",
    transcribeTimesDay: "3 Transkriptionen täglich",
    uploadMinutes: "30-Minuten-Uploads",
    lowerPriority: "Niedrigere Priorität",
    currentPlan: "Aktueller Plan",
    professionalEdition: "Professional Edition",
    unlimitedTranscription: "Unbegrenzte Transkription",
    unlimitedNumberOfTimes: "Unbegrenzte Transkriptionshäufigkeit und -dauer.",
    filesUploadedAtOnce:
      "Jede Datei kann bis zu 10 Stunden lang / 5 GB groß sein. 50 Dateien gleichzeitig hochladen.",
    highestPriority: "Höchste Priorität",
    weWillGiveTheHighest:
      "Wir transkribieren Ihre Dateien immer so schnell wie möglich mit höchster Priorität.",
    theFirstMonth: "Der erste Monat",
    subscribeTo: "abonnieren",
    basicVersionFree: "Basisversion (kostenlos)",
    return: "Zurück",
    annualize: "jährlich",
    monthly: "monatlich",
    everyYear: "jedes Jahr",
    saved: "gespart",
    byTheMonth: "pro Monat",
    firstMonth: "erster Monat",
    afterwardsEveryMonth: "Anschließend jeden Monat",
    manageSubscription: "Abonnement verwalten",
    professionalYearbook: "Professional-Jahresabo",
    professionalMonthly: "Professional-Monatsabo",
    subscriptionWillCancelledOn: "Ihr Abonnement wird am",
    displayLanguage: "Anzeigesprache",
    update: "Jetzt upgraden",
    basicversion: "Basisversion (Kostenlos)",
    daily: "{start} von {end} täglichen Transkriptionen verwendet",
    upgradetoPro: "Auf Pro upgraden",
    accountSetting: "Kontoeinstellungen",
    logOut: "Abmelden",
    account: "Konto",
    email: "E-Mail",
    id: "ID",
    password: "Passwort",
    resetPassword: "Passwort zurücksetzen",
    logIn: "Anmelden",
    tryForFree: "Kostenlos testen",
    notFund: "Nicht gefunden",
    couldntFind: "Wir konnten nicht finden, wonach Sie gesucht haben.",
    proAnnual: "Pro-Jahresabo",
    proMonthly: "Pro-Monatsabo",
    perMonth: "pro Monat",
    afterwards: "anschließend",
    accuracy: "Transkriptionsgenauigkeit",
    supported: "unterstützte Sprachen",
    identification: "Sprechererkennung",
    transcriptSranslation: "Transkriptübersetzung",
    perYear: "pro Jahr",
    getProPlan: "Pro-Plan erhalten",
    changeToAnnual: "Auf Jahresabo wechseln",
    automaticRenewalon: "Automatische Verlängerung am",
    eachMonth: "Automatische Verlängerung am {time} jedes Monats.",
    automaticRenewal:
      "Automatische Verlängerung fehlgeschlagen, bitte überprüfen Sie die Zahlungsmethode.",
    eachYear: "Automatische Verlängerung am {time} jedes Jahres.",
    returnAccountSetting: "Zurück",
    needsToWaitLonger:
      "Warten Sie länger, bis Ihre Dateien transkribiert werden.",
    freeThreeTimesDay: "3 Dateien täglich kostenlos transkribieren.",
    oneFileUploaded:
      "Jede Datei kann bis zu 30 Minuten lang sein. Laden Sie jeweils 1 Datei hoch.",
    uploadWithinHours: "10-Stunden-Uploads",
    yourSubscription: "Ihr Abonnement wird am {time} gekündigt.",
    save: "Sparen",
      freeversion2: "Kostenloser Tarif"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinesisch (vereinfacht)",
      "Chinese(Traditional)": "Chinesisch (traditionell)",
      Japanese: "Japanisch",
      Danish: "Dänisch",
      German: "Deutsch",
      English: "Englisch",
      Spanish: "Spanisch",
      French: "Französisch",
      Italian: "Italienisch",
      Hungarian: "Ungarisch",
      Dutch: "Niederländisch",
      Norwegian: "Norwegisch",
      Polish: "Polnisch",
      Portuguese: "Portugiesisch",
      Finnish: "Finnisch",
      Swedish: "Schwedisch",
      Turkish: "Türkisch",
      Greek: "Griechisch",
      Russian: "Russisch",
      Ukrainian: "Ukrainisch",
      Hebrew: "Hebräisch",
      Arabic: "Arabisch",
      Korean: "Koreanisch"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Kostenloses Testen~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Treten Sie der Warteliste bei, um die neuesten NuxtPro-Nachrichten zuerst zu erhalten und Rabatte zu erhalten!",
      placeholder: "Geben Sie Ihre E-Mail-Adresse ein",
      button: "Warteliste beitreten",
      joinCountMessage:
        "🔥 Früher Benutzer #{count} hat sich der Warteliste reingeschrieben!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "Dies ist ein Demo",
      corpInfo: "Korporationsinformation"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "Video-Downloadfehler"
      },
      mse: {
        code: 2,
        msg: "Stream-Anhängenfehler"
      },
      parse: {
        code: 3,
        msg: "Parsenfehler"
      },
      format: {
        code: 4,
        msg: "falsches Format"
      },
      decoder: {
        code: 5,
        msg: "Decodierfehler"
      },
      runtime: {
        code: 6,
        msg: "Grammatikfehler"
      },
      timeout: {
        code: 7,
        msg: "Abspieltimeout"
      },
      other: {
        code: 8,
        msg: "Andere Fehler"
      }
    },
    HAVE_NOTHING:
      "Es gibt keine Information darüber, ob Audio/Video bereit ist",
    HAVE_METADATA: "Audio/Video-Metadaten sind bereit ",
    HAVE_CURRENT_DATA:
      "Daten zum aktuellen Abspielstand sind verfügbar, aber es gibt nicht genug Daten, um das nächste Frame/Millisekunde abzuspielen",
    HAVE_FUTURE_DATA:
      "Aktuell und mindestens ein Frame von Daten ist verfügbar",
    HAVE_ENOUGH_DATA: "Die verfügbaren Daten reichen aus, um abzuspielen",
    NETWORK_EMPTY: "Audio/Video wurde noch nicht initialisiert",
    NETWORK_IDLE:
      "Audio/Video ist aktiv und wurde für Ressourcen ausgewählt, aber keine Netzwerkressource wird verwendet",
    NETWORK_LOADING: "Der Browser lädt die Daten herunter",
    NETWORK_NO_SOURCE: "Keine Audio/Video-Quelle gefunden",
    MEDIA_ERR_ABORTED: "Der Abrufprozess wurde vom Benutzer abgebrochen",
    MEDIA_ERR_NETWORK: "Fehler beim Herunterladen aufgetreten",
    MEDIA_ERR_DECODE: "Fehler beim Decodieren aufgetreten",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/Video wird nicht unterstützt",
    REPLAY: "Wiedergabe",
    ERROR: "Netzwerk ist offline",
    PLAY_TIPS: "Abspielen",
    PAUSE_TIPS: "Pausieren",
    PLAYNEXT_TIPS: "Nächstes abspielen",
    DOWNLOAD_TIPS: "Herunterladen",
    ROTATE_TIPS: "Drehen",
    RELOAD_TIPS: "Neu laden",
    FULLSCREEN_TIPS: "Vollbild anzeigen",
    EXITFULLSCREEN_TIPS: "Vollbild verlassen",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
    TEXTTRACK: "Untertitel",
    PIP: "PIP",
    SCREENSHOT: "Bildschirmfoto",
    LIVE: "LIVE",
    OFF: "Aus",
    OPEN: "Öffnen",
    MINI_DRAG: "Klicken und halten zum Ziehen",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Bitte versuchen Sie es erneut",
    REFRESH: "Aktualisieren",
    FORWARD: "vorwärts",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Untertitel anzeigen",
    TM_SUBTITLE_HIDE_TIPS: "Untertitel ausblenden",
    TM_MINIMIZE_TIPS: "Video ausblenden"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert: 25. August 2025",
    policyDescription:
      "Diese Richtlinie beschreibt, wie Scribify (nachfolgend „Scribify“, „unser“, „wir“, „uns“ genannt) Ihre persönlichen Daten sammelt, verwendet und weitergibt, wenn Sie unsere Dienste, Websites nutzen",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "und Software (zusammen die „Dienste“).",
    policyAgreement:
      "Bitte lesen Sie diese Datenschutzrichtlinie sorgfältig durch und stellen Sie sicher, dass Sie sie verstehen. Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Datenschutzrichtlinie einverstanden. Sollten Sie mit der Verwendung Ihrer personenbezogenen Daten gemäß dieser Richtlinie nicht einverstanden sein, müssen Sie die Nutzung unserer Dienste unverzüglich einstellen.",
    policyOverview:
      "In dieser Richtlinie legen wir dar, welche Daten wir erheben und warum, wie wir mit Ihren Daten umgehen und welche Rechte Sie in Bezug auf Ihre Daten haben. Wir verkaufen Ihre Daten nicht.",
    scopeTitle: "1. Geltungsbereich dieser Datenschutzrichtlinie",
    whatWeCollectTitle: "2. Was wir sammeln und warum",
    accessShareTitle:
      "3. Wann wir auf Ihre Informationen zugreifen oder sie weitergeben",
    secureDataTitle: "4. Wie wir Ihre Daten schützen",
    deleteContentTitle: "5. Was passiert, wenn Sie Ihre Inhalte löschen",
    locationTitle: "6. Standort und Daten",
    childrenPrivacyTitle: "7. Datenschutz für Kinder",
    updatesTitle: "8. Aktualisierungen dieser Datenschutzrichtlinie",
    contactUsTitle: "9. Kontakt",
    identityAccessTitle: "2.1 Identität und Zugriff",
    billingInfoTitle: "2.2 Rechnungsinformationen",
    productInteractionsTitle: "2.3 Produktinteraktionen",
    websiteInteractionsTitle: "2.4 Website-Interaktionen",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Freiwillige Korrespondenz",
    scopeContent:
      "Diese Datenschutzrichtlinie gilt ausschließlich für unsere Erhebung und Verarbeitung von Informationen über Nutzer der Dienste. Diese Datenschutzrichtlinie gilt nicht für Dienste, Websites oder Software von Drittanbietern, die mit uns verlinkt sind (unabhängig davon, ob wir diese Links bereitstellen oder andere Nutzer sie teilen), und auch nicht für Inhalte, Daten, Anwendungen oder Materialien von Drittanbietern. Wir empfehlen Ihnen, die Datenschutzrichtlinien von Websites oder Software von Drittanbietern zu prüfen, bevor Sie ihnen Informationen zur Verfügung stellen.",
    collectPrinciple:
      "Unser Leitprinzip ist es, nur das zu sammeln, was wir brauchen. In der Praxis bedeutet das Folgendes:",
    identityAccessContent:
      "Wenn Sie sich für eines unserer Produkte anmelden, fragen wir nach Ihren persönlichen Daten wie Ihrem Namen und Ihrer E-Mail-Adresse. Dies dient der Bereitstellung wichtiger Produktfunktionen und ermöglicht es uns, Ihnen Produktaktualisierungen und andere wichtige Informationen zu senden.",
    billingInfoContent:
      "Wenn Sie sich für ein kostenpflichtiges Produkt anmelden, werden Sie aufgefordert, Ihre Zahlungsinformationen und Ihre Rechnungsadresse anzugeben. Die Zahlungsinformationen werden direkt an unseren Zahlungsabwickler übermittelt und gelangen nicht auf unsere Server.",
    productInteractionsContent:
      "Wir speichern die Inhalte, die Sie hochladen, empfangen oder in Ihren Produktkonten verwalten, auf unseren Servern. Sofern Sie diese Inhalte nicht löschen, behalten wir sie möglicherweise, solange Ihr Konto aktiv ist.",
    websiteInteractionsContent:
      "Wir erfassen Informationen über Ihr Surfverhalten für Analyse- und Statistikzwecke, beispielsweise zur Messung der Conversion-Rate und zum Experimentieren mit neuen Produktdesigns. Dazu gehören beispielsweise Ihre Browser- und Betriebssystemversion, Ihre IP-Adresse, die von Ihnen besuchten Webseiten und deren Ladezeit sowie die Website, über die Sie zu uns gelangt sind. Wenn Sie ein Konto besitzen und angemeldet sind, werden diese Webanalysedaten an Ihre IP-Adresse und Ihr Benutzerkonto gebunden, bis Ihr Konto nicht mehr aktiv ist.",
    cookiesContent1:
      "Wir verwenden außerdem dauerhafte Erstanbieter-Cookies und einige Drittanbieter-Cookies, um bestimmte Einstellungen zu speichern, Ihnen die Nutzung unserer Anwendungen zu erleichtern, A/B-Tests durchzuführen und einige Analysen zu unterstützen.",
    cookiesContent2:
      "Ein Cookie ist ein Text, der von Ihrem Browser gespeichert wird. Er kann dabei helfen, Anmeldeinformationen und Website-Einstellungen zu speichern. Außerdem können Informationen wie Browsertyp, Betriebssystem, besuchte Webseiten, Besuchsdauer, angezeigte Inhalte und andere Clickstream-Daten erfasst werden. Sie können die Cookie-Speicherungseinstellungen anpassen und einzelne Cookies in Ihren Browsereinstellungen akzeptieren oder blockieren. Allerdings funktionieren unsere Apps und andere Aspekte unseres Dienstes möglicherweise nicht ordnungsgemäß, wenn Sie Cookies deaktivieren.",
    voluntaryCorrespondenceContent:
      "Wenn Sie uns eine E-Mail mit einer Frage oder einer Bitte um Hilfe senden, bewahren wir diese Korrespondenz, einschließlich Ihrer E-Mail-Adresse, auf, sodass wir bei zukünftigen Kontaktaufnahmen auf einen Verlauf der bisherigen Korrespondenz zurückgreifen können.",
    accessShareContent1:
      "Zur Bereitstellung der von Ihnen angeforderten Produkte oder Dienstleistungen. Wir nutzen einige Subprozessoren von Drittanbietern, um unsere Anwendungen auszuführen und Ihnen die Dienste bereitzustellen. Dazu gehören Cloud- und Analyseanbieter.",
    accessShareContent2:
      "Um Missbrauch zu untersuchen, zu verhindern oder entsprechende Maßnahmen zu ergreifen. Der Zugriff auf das Konto eines Kunden bei der Untersuchung eines potenziellen Missbrauchs ist das letzte Mittel. Wir möchten die Privatsphäre und Sicherheit sowohl unserer Kunden als auch der Personen schützen, die uns Probleme melden, und wir tun unser Bestes, um diese Verantwortlichkeiten während des gesamten Prozesses auszugleichen. Sollten wir feststellen, dass Sie unsere Produkte für einen verbotenen Zweck nutzen, werden wir die erforderlichen Maßnahmen ergreifen und gegebenenfalls auch die zuständigen Behörden benachrichtigen.",
    accessShareContent3: "Wenn dies nach geltendem Recht erforderlich ist.",
    userDataRequests:
      "Anfragen nach Nutzerdaten. Wir reagieren grundsätzlich nicht auf Anfragen von Behörden nach Nutzerdaten, es sei denn, wir sind dazu durch ein Gerichtsverfahren oder in bestimmten Fällen im Falle einer dringenden Anfrage gezwungen. Sollten US-amerikanische Strafverfolgungsbehörden jedoch über einen erforderlichen Haftbefehl, eine strafrechtliche Vorladung oder einen Gerichtsbeschluss verfügen, der uns zur Weitergabe von Daten verpflichtet, sind wir verpflichtet, diesen nachzukommen. Ebenso reagieren wir nur auf Anfragen von Behörden außerhalb der USA, wenn die US-Regierung uns im Rahmen eines Rechtshilfeabkommens dazu verpflichtet. Es ist unsere Politik, betroffene Nutzer vor der Datenweitergabe zu benachrichtigen, es sei denn, dies ist uns gesetzlich untersagt und außer in einigen Notfällen.",
    preservationRequests:
      "- Anträge auf Datenaufbewahrung. Ebenso sehen unsere Grundsätze vor, Anträge auf Datenaufbewahrung nur dann zu erfüllen, wenn dies durch den US Federal Stored Communications Act, 18 USC Section 2703(f), oder eine ordnungsgemäß zugestellte US-Vorladung in Zivilsachen erforderlich ist. Wir geben gespeicherte Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind oder durch einen Gerichtsbeschluss dazu gezwungen werden, gegen den wir keinen Einspruch einlegen. Darüber hinaus vernichten wir alle gespeicherten Kopien von Kundendaten nach Ablauf der Aufbewahrungsfrist, sofern wir nicht vor Ablauf der erforderlichen Aufbewahrungsfrist einen ordnungsgemäßen Haftbefehl, Gerichtsbeschluss oder eine Vorladung erhalten.",
    taxAudit:
      "Im Falle einer Steuerprüfung sind wir möglicherweise verpflichtet, rechnungsbezogene Daten weiterzugeben. In diesem Fall geben wir nur die erforderlichen Daten weiter, wie z. B. Rechnungsadressen und Informationen zur Steuerbefreiung.",
    secureDataContent1: "Alle Daten werden verschlüsselt über",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "wenn sie von unseren Servern an Ihren Browser übertragen werden.",
    deleteContentContent:
      "Wenn Sie Inhalte löschen, sind diese sofort nicht mehr zugänglich.",
    locationContent:
      "Unsere Produkte und andere Webpräsenzen werden in den USA betrieben. Wenn Sie sich in der Europäischen Union, Großbritannien oder anderswo außerhalb der USA befinden, beachten Sie bitte, dass alle von Ihnen bereitgestellten Informationen in die USA übertragen und dort gespeichert werden. Indem Sie unsere Websites oder Dienste nutzen und/oder uns Ihre personenbezogenen Daten zur Verfügung stellen, stimmen Sie dieser Übertragung zu.",
    childrenPrivacyContent:
      "Die Dienste richten sich nicht an Kinder, und wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie unter 13 Jahre alt sind, übermitteln Sie bitte keine personenbezogenen Daten über die Dienste. Wenn Sie der Meinung sind, dass ein Kind uns personenbezogene Daten unter Verstoß gegen diese Richtlinie übermittelt hat, kontaktieren Sie uns bitte wie unten angegeben.",
    updatesContent:
      "Wir behalten uns das Recht vor, diese Richtlinie bei Bedarf zu aktualisieren, um den geltenden Vorschriften zu entsprechen und neue Praktiken zu berücksichtigen. Bei wesentlichen Änderungen unserer Richtlinien aktualisieren wir das Datum oben auf dieser Seite.",
    contactUsContent1:
      "Wenn Sie Fragen, Kommentare oder Beschwerden zu unserer Datenschutzrichtlinie haben, wenden Sie sich bitte an",
    contactUs: "Kontaktieren Sie uns",
    contactUsContent2:
      "und wir werden uns bemühen, Ihre Beschwerde so schnell wie möglich zu bearbeiten."
  },
  termsOfService: {
    termsOfServiceTitle: "Servicebedingungen",
    lastUpdated: "Zuletzt aktualisiert: 21. September 2022",
    thankYouMessage: "Vielen Dank, dass Sie unsere Produkte verwenden!",
    companyReference:
      "Wenn wir in diesem Dokument „Unternehmen“, „wir“, „unser“ oder „uns“ sagen, beziehen wir uns auf Scribify.",
    servicesDefinition:
      "Wenn wir „Dienste“ sagen, meinen wir jedes von Scribify erstellte und gepflegte Produkt, unabhängig davon, ob es in einem Webbrowser, einer Desktop-Anwendung, einer mobilen Anwendung oder einem anderen Format bereitgestellt wird.",
    termsUpdateNotice:
      "Wir behalten uns das Recht vor, diese Nutzungsbedingungen in Zukunft zu aktualisieren. In der Regel dienen diese Änderungen dazu, einige dieser Bedingungen durch Verlinkung zu einer erweiterten zugehörigen Richtlinie klarzustellen. Bei wesentlichen Änderungen unserer Richtlinien aktualisieren wir das Datum oben auf dieser Seite und informieren die Kontoinhaber entsprechend.",
    acceptanceOfAgreementTitle: "1. Annahme der Vereinbarung",
    scribifyServicesTitle: "2. Die Dienste von Scribify",
    accountTermsTitle: "3. Kontobedingungen",
    paymentRefundsTitle: "4. Zahlung, Rückerstattungen und Planänderungen",
    cancellationTerminationTitle: "5. Stornierung und Kündigung",
    submissionsTitle: "6. Einreichungen",
    uptimeSecurityTitle: "7. Verfügbarkeit und Sicherheit",
    siteManagementTitle: "8. Site-Management",
    copyrightContentTitle: "9. Urheberrecht und Eigentumsrechte an Inhalten",
    prohibitedActivitiesTitle: "10. Verbotene Aktivitäten",
    featuresBugsTitle: "11. Funktionen und Fehler",
    correctionsTitle: "12. KORREKTUREN",
    userDataTitle: "13. Benutzerdaten",
    privacyPolicyTitle: "14. Datenschutz",
    liabilityTitle: "15. Haftung",
    miscellaneousTitle: "16. Sonstiges",
    contactUsTitle: "17. Kontakt",
    acceptanceContent1:
      "Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Vereinbarung einverstanden. Diese stellt einen verbindlichen Vertrag zwischen Ihnen und Scribify dar. Sie erklären, dass Sie diese Bedingungen akzeptieren können und volljährig sind, um einen verbindlichen Vertrag abzuschließen. Die Annahme durch Scribify setzt ausdrücklich voraus, dass Sie allen Bedingungen dieser Vereinbarung zustimmen.",
    acceptanceContent2:
      "Die Dienste sind nicht für Personen unter 18 Jahren bestimmt und sollten nicht von diesen genutzt werden. Durch die Nutzung der Dienste erklären und gewährleisten Sie, dass Sie die vorstehenden Teilnahmevoraussetzungen erfüllen.",
    acceptanceContent3:
      "Die Begriffe „Sie“, „Ihr“, „Sie selbst“ umfassen auch Ihre Mitarbeiter, Vertreter, Geschäftsvertreter und alle anderen Personen, denen Sie über Ihr Konto (wie unten definiert) Zugriff auf die Dienste gewähren. Sie sind dafür verantwortlich, dass alle Personen, die über Ihr Konto auf die Dienste zugreifen, diese Bedingungen kennen und einhalten.",
    acceptanceContent4:
      "Scribify behält sich das Recht vor, diese Bedingungen von Zeit zu Zeit nach eigenem Ermessen zu überarbeiten und zu aktualisieren. Alle Änderungen treten mit ihrer Veröffentlichung sofort in Kraft. Ihre fortgesetzte Nutzung der Dienste nach der Veröffentlichung der überarbeiteten Bedingungen setzt voraus, dass Sie die Änderungen akzeptieren und ihnen zustimmen. Wir bitten Sie, diese Seite regelmäßig zu überprüfen, um über alle Änderungen informiert zu sein, da diese für Sie bindend sind.",
    servicesContent1:
      "Unsere Dienste ermöglichen es Benutzern, Sprachgespräche in transkribierten Text umzuwandeln, der durchsucht, übersetzt und mit anderen geteilt werden kann.",
    servicesContent2:
      "Sie können wählen, ob Sie die kostenlose Version der Dienste („Kostenlose Dienste“) oder die kostenpflichtige Version der Dienste auf Abonnementbasis nutzen möchten, für die möglicherweise Gebühren anfallen (die „Kostenpflichtigen Dienste“).",
    servicesContent3:
      "Wir stellen Ihnen die Dienste zur Verfügung. Sie sind dafür verantwortlich, alle notwendigen Vorkehrungen für den Zugriff auf die Dienste zu treffen.",
    accountTerms1:
      "- Sie sind für die Sicherheit Ihres Kontos verantwortlich. Das Unternehmen haftet nicht für Verluste oder Schäden, die sich aus der Nichteinhaltung dieser Sicherheitsverpflichtung ergeben.",
    accountTerms2:
      "- Sie dürfen die Dienste nicht für rechtswidrige, unethische oder unmoralische Zwecke nutzen.",
    accountTerms3:
      "- Sie sind für alle Inhalte und Aktivitäten verantwortlich, die über Ihr Konto veröffentlicht werden. Dies gilt auch für Inhalte, die von anderen Personen veröffentlicht werden, die entweder (a) Zugriff auf Ihre Anmeldedaten haben oder (b) über eigene Anmeldedaten für Ihr Konto verfügen.",
    accountTerms4:
      "- Sie müssen ein Mensch sein. Konten, die durch „Bots“ oder andere automatisierte Methoden registriert werden, sind nicht zulässig.",
    paymentContent1:
      "Bei kostenpflichtigen Diensten mit kostenloser Testversion informieren wir Sie bei der Anmeldung über die Dauer der Testphase. Nach Ablauf der Testphase ist eine Vorauszahlung erforderlich, um den Dienst weiterhin nutzen zu können. Andernfalls endet der Dienst.",
    paymentContent2:
      "- Wenn Sie von einem kostenlosen Plan auf einen kostenpflichtigen Plan upgraden, belasten wir Ihre Karte sofort und Ihr Abrechnungszeitraum beginnt am Tag des Upgrades.",
    paymentContent3:
      "Alle Gebühren verstehen sich exklusive aller Steuern, Abgaben oder Zölle der Steuerbehörden. Bei Bedarf erheben wir diese Steuern im Auftrag der Steuerbehörde und führen sie an die Steuerbehörden ab. Andernfalls sind Sie für die Zahlung aller Steuern, Abgaben oder Zölle verantwortlich.",
    paymentContent4:
      "- Alle Käufe sind nicht erstattungsfähig. Sie können alle kostenpflichtigen Dienste jederzeit kündigen, indem Sie sich in Ihr Konto einloggen. Bei kostenpflichtigen Abonnements wird Ihre Kündigung zum Ende der aktuellen Laufzeit wirksam, sofern nicht anders angegeben.",
    cancellationContent1:
      "- Wenn Sie den Service vor Ablauf der bezahlten Zeit kündigen, wird Ihre Kündigung sofort wirksam und es entstehen Ihnen keine weiteren Kosten. Wir berechnen nicht genutzte Zeit im letzten Abrechnungszeitraum nicht automatisch anteilig.",
    cancellationContent2:
      "Wir sind berechtigt, Ihr Konto jederzeit und aus beliebigem Grund zu sperren oder zu kündigen und Ihnen die aktuelle oder zukünftige Nutzung unserer Dienste zu verweigern. Eine Sperrung bedeutet, dass Sie keinen Zugriff mehr auf Ihr Konto und dessen Inhalte haben. Die Kündigung führt außerdem zur Löschung Ihres Kontos bzw. Ihres Zugriffs darauf sowie zum Verlust und zur Herausgabe aller Inhalte Ihres Kontos. Wir behalten uns außerdem das Recht vor, die Nutzung unserer Dienste jederzeit und aus beliebigem Grund zu verweigern. Diese Klausel ist notwendig, da statistisch gesehen mindestens eines der Hunderttausenden von Konten, die unsere Dienste nutzen, kriminelle Machenschaften begeht.",
    cancellationContent3:
      "- Verbale, physische, schriftliche oder sonstige Beleidigungen (einschließlich Drohungen mit Beleidigungen oder Vergeltungsmaßnahmen) gegenüber Mitarbeitern oder leitenden Angestellten des Unternehmens können zur sofortigen Kündigung des Kontos führen.",
    submissionsContent:
      "Sie erkennen an und erklären sich damit einverstanden, dass alle Fragen, Kommentare, Vorschläge, Ideen, Rückmeldungen oder sonstigen Informationen bezüglich der Website („Einreichungen“), die Sie uns übermitteln, nicht vertraulich sind und unser alleiniges Eigentum werden. Wir besitzen die ausschließlichen Rechte, einschließlich aller Rechte am geistigen Eigentum, und sind berechtigt, diese Einreichungen für jeden rechtmäßigen Zweck, ob kommerziell oder anderweitig, uneingeschränkt zu verwenden und zu verbreiten, ohne dass wir hierfür eine Anerkennung oder Entschädigung an Sie erhalten. Sie verzichten hiermit auf alle Urheberpersönlichkeitsrechte an solchen Einreichungen und garantieren, dass diese Einreichungen von Ihnen stammen oder dass Sie berechtigt sind, solche Einreichungen einzureichen. Sie erklären sich damit einverstanden, dass wir wegen einer angeblichen oder tatsächlichen Verletzung oder widerrechtlichen Aneignung von Eigentumsrechten an Ihren Einreichungen nicht in Anspruch genommen werden können.",
    uptimeContent1:
      "Die Nutzung der Dienste erfolgt ausschließlich auf Ihr Risiko. Wir stellen diese Dienste „wie besehen“ und „wie verfügbar“ zur Verfügung. Für die meisten unserer Dienste bieten wir keine Service-Level-Agreements an, legen aber großen Wert auf die Verfügbarkeit unserer Anwendungen.",
    uptimeContent2:
      "Wir behalten uns das Recht vor, Ihr Konto vorübergehend zu deaktivieren, wenn Ihre Nutzung die typische Nutzung anderer Kunden der Dienste deutlich übersteigt. Selbstverständlich werden wir Sie vor dem Ergreifen von Maßnahmen kontaktieren, außer in seltenen Fällen, in denen die Nutzung die Leistung des Dienstes für andere Kunden beeinträchtigen könnte.",
    uptimeContent3:
      "Wir ergreifen zahlreiche Maßnahmen zum Schutz und zur Sicherung Ihrer Daten durch Backups, Redundanzen und Verschlüsselung. Wir setzen die Verschlüsselung für die Datenübertragung über das öffentliche Internet durch.",
    uptimeContent4:
      "- Wir nutzen Drittanbieter und Hosting-Partner, um die notwendige Hardware, Software, Vernetzung, Speicherung und zugehörige Technologie bereitzustellen, die zum Ausführen der Dienste erforderlich ist.",
    siteManagementContent:
      "Wir behalten uns das Recht vor, sind jedoch nicht dazu verpflichtet: (1) die Site auf Verstöße gegen diese Servicebedingungen zu überwachen; (2) geeignete rechtliche Schritte gegen jeden einzuleiten, der nach unserem alleinigen Ermessen gegen das Gesetz oder diese Servicebedingungen verstößt, einschließlich, aber nicht beschränkt auf die Meldung des entsprechenden Benutzers an die Strafverfolgungsbehörden; (3) nach unserem alleinigen Ermessen und ohne Einschränkung Ihre Beiträge oder Teile davon abzulehnen, den Zugriff darauf einzuschränken, die Verfügbarkeit zu begrenzen oder sie (soweit technisch machbar) zu deaktivieren; (4) nach unserem alleinigen Ermessen und ohne Einschränkung, Benachrichtigung oder Haftung alle Dateien und Inhalte von der Site zu entfernen oder anderweitig zu deaktivieren, die übermäßig groß sind oder unsere Systeme in irgendeiner Weise belasten; und (5) die Site anderweitig in einer Weise zu verwalten, die unsere Rechte und unser Eigentum schützt und das ordnungsgemäße Funktionieren der Site ermöglicht.",
    copyrightContent1:
      "- Alle auf den Diensten veröffentlichten Inhalte müssen dem US-amerikanischen Urheberrecht entsprechen.",
    copyrightContent2:
      "- Wir erheben keinen Anspruch auf geistiges Eigentum an den Materialien, die Sie den Diensten zur Verfügung stellen. Alle hochgeladenen Materialien verbleiben in Ihrem Eigentum.",
    copyrightContent3:
      "- Wir prüfen Inhalte nicht vorab, behalten uns jedoch das Recht (aber nicht die Pflicht) vor, nach eigenem Ermessen über den Dienst verfügbare Inhalte abzulehnen oder zu entfernen.",
    copyrightContent4:
      "Die Namen, das Erscheinungsbild und die Gestaltung der Dienste unterliegen dem Copyright© des Unternehmens. Alle Rechte vorbehalten. Sie dürfen weder Teile des HTML-, CSS-, JavaScript- noch des visuellen Designelements ohne ausdrückliche schriftliche Genehmigung des Unternehmens duplizieren, kopieren oder wiederverwenden. Die Verwendung des Firmenlogos oder der Service-Logos für Werbezwecke muss von Ihnen beantragt werden. Bitte",
    emailUs: "Schreiben Sie uns eine E-Mail",
    copyrightContent5:
      "Anfragen zur Verwendung von Logos. Wir behalten uns das Recht vor, diese Erlaubnis zu widerrufen, wenn Sie gegen diese Servicebedingungen verstoßen.",
    copyrightContent6:
      "- Sie erklären sich damit einverstanden, keinen Teil der Dienste, die Nutzung der Dienste oder den Zugriff auf die Dienste ohne die ausdrückliche schriftliche Genehmigung des Unternehmens zu reproduzieren, zu vervielfältigen, zu kopieren, zu verkaufen, weiterzuverkaufen oder zu nutzen.",
    copyrightContent7:
      "- Sie dürfen keine andere Website so ändern, dass fälschlich der Eindruck entsteht, sie sei mit den Diensten oder dem Unternehmen verbunden.",
    copyrightContent8:
      "- Wir respektieren die geistigen Eigentumsrechte anderer. Wenn Sie der Meinung sind, dass auf oder über die Website verfügbares Material gegen ein Urheberrecht verstößt, das Sie besitzen oder kontrollieren, kontaktieren Sie uns bitte umgehend.",
    contactUs: "Kontaktieren Sie uns",
    copyrightContent9:
      "Eine Kopie Ihrer Benachrichtigung wird an die Person gesendet, die das in der Benachrichtigung angesprochene Material veröffentlicht oder gespeichert hat. Bitte beachten Sie, dass Sie gemäß geltendem Recht für Schäden haftbar gemacht werden können, wenn Sie in einer Benachrichtigung wesentliche Falschangaben machen. Wenn Sie sich nicht sicher sind, ob das auf der Website befindliche oder von der Website verlinkte Material Ihre Urheberrechte verletzt, sollten Sie zunächst einen Anwalt kontaktieren.",
    prohibitedActivitiesIntro:
      "Sie dürfen die Website nur für den von uns bereitgestellten Zweck aufrufen oder nutzen. Die Website darf nicht für kommerzielle Zwecke genutzt werden, es sei denn, wir unterstützen oder genehmigen diese ausdrücklich.",
    prohibitedActivitiesUserAgreement:
      "Als Benutzer der Site erklären Sie sich damit einverstanden, Folgendes nicht zu tun:",
    prohibitedActivity1:
      "- Systematisches Abrufen von Daten oder anderen Inhalten von der Site, um ohne unsere schriftliche Genehmigung direkt oder indirekt eine Sammlung, Zusammenstellung, Datenbank oder ein Verzeichnis zu erstellen oder zusammenzustellen.",
    prohibitedActivity2:
      "- Uns oder andere Benutzer auszutricksen, zu betrügen oder in die Irre zu führen, insbesondere bei dem Versuch, an vertrauliche Kontoinformationen wie Benutzerkennwörter zu gelangen.",
    prohibitedActivity3:
      "- Sicherheitsrelevante Funktionen der Site zu umgehen, zu deaktivieren oder anderweitig zu beeinträchtigen, einschließlich Funktionen, die die Verwendung oder das Kopieren von Inhalten verhindern oder einschränken oder Beschränkungen bei der Verwendung der Site und/oder der darin enthaltenen Inhalte erzwingen.",
    prohibitedActivity4:
      "- Uns und/oder die Site unserer Meinung nach herabsetzen, beschmutzen oder anderweitig schädigen.",
    prohibitedActivity5:
      "- Verwenden Sie keine von der Site erhaltenen Informationen, um eine andere Person zu belästigen, zu missbrauchen oder zu schädigen.",
    prohibitedActivity6:
      "- Unsere Support-Dienste missbräuchlich nutzen oder falsche Berichte über Missbrauch oder Fehlverhalten einreichen.",
    prohibitedActivity7:
      "- Die Site in einer Weise nutzen, die nicht mit geltenden Gesetzen oder Vorschriften vereinbar ist.",
    prohibitedActivity8: "- Unerlaubtes Framing oder Verlinken der Site.",
    prohibitedActivity9:
      "- Viren, Trojaner oder anderes Material hochzuladen oder zu übertragen (oder der Versuch des Hochladens oder Übertragens), einschließlich der übermäßigen Verwendung von Großbuchstaben und Spamming (fortlaufendes Posten sich wiederholender Texte), das die ununterbrochene Nutzung und den Genuss der Site durch eine Partei stört oder die Nutzung, Merkmale, Funktionen, den Betrieb oder die Wartung der Site modifiziert, beeinträchtigt, unterbricht, verändert oder stört.",
    prohibitedActivity10:
      "- Das System in irgendeiner Weise automatisiert zu nutzen, beispielsweise durch die Verwendung von Skripten zum Senden von Kommentaren oder Nachrichten oder durch die Verwendung von Data Mining, Robotern oder ähnlichen Tools zum Sammeln und Extrahieren von Daten.",
    prohibitedActivity11:
      "- Löschen Sie den Hinweis auf das Urheberrecht oder andere Eigentumsrechte aus allen Inhalten.",
    prohibitedActivity12:
      "- Versuchen Sie, sich als ein anderer Benutzer oder eine andere Person auszugeben oder den Benutzernamen eines anderen Benutzers zu verwenden.",
    prohibitedActivity13:
      "- Hochladen oder Übertragen (oder der Versuch des Hochladens oder Übertragens) von Material, das als passiver oder aktiver Mechanismus zum Sammeln oder Übertragen von Informationen fungiert, einschließlich, aber nicht beschränkt auf Clear Graphics Interchange Formats („GIFs“), 1×1-Pixel, Web-Bugs, Cookies oder andere ähnliche Geräte (manchmal als „Spyware“ oder „passive Sammelmechanismen“ oder „PCMs“ bezeichnet).",
    prohibitedActivity14:
      "- Die Site oder die mit der Site verbundenen Netzwerke oder Dienste zu stören, zu unterbrechen oder unangemessen zu belasten.",
    prohibitedActivity15:
      "- Belästigen, ärgern, einschüchtern oder bedrohen Sie keine unserer Mitarbeiter oder Vertreter, die mit der Bereitstellung von Teilen der Site für Sie betraut sind.",
    prohibitedActivity16:
      "- Versuchen, Maßnahmen der Site zu umgehen, die den Zugriff auf die Site oder Teile der Site verhindern oder einschränken sollen.",
    prohibitedActivity17:
      "- Kopieren oder Anpassen der Software der Site, einschließlich, aber nicht beschränkt auf Flash, PHP, HTML, JavaScript oder anderen Code.",
    prohibitedActivity18:
      "- Sofern nicht durch geltendes Recht gestattet, dürfen Sie die Software, die Teil der Site ist oder in irgendeiner Weise einen Teil der Site darstellt, nicht entschlüsseln, dekompilieren, disassemblieren oder zurückentwickeln.",
    prohibitedActivity19:
      "- Sofern dies nicht durch die Nutzung einer Standardsuchmaschine oder eines Internetbrowsers bedingt ist, dürfen Sie kein automatisiertes System verwenden, starten, entwickeln oder verteilen, einschließlich, aber nicht beschränkt auf Spider, Roboter, Cheat-Dienstprogramme, Scraper oder Offline-Reader, die auf die Site zugreifen, oder nicht autorisierte Skripts oder andere Software verwenden oder starten.",
    prohibitedActivity20:
      "- Verwenden Sie einen Einkaufsagenten oder Einkaufsvermittler, um Einkäufe auf der Site zu tätigen.",
    prohibitedActivity21:
      "- Die Site in irgendeiner unbefugten Weise zu nutzen, einschließlich der Erfassung von Benutzernamen und/oder E-Mail-Adressen von Benutzern auf elektronischem oder anderem Wege zum Zweck des Versendens unerwünschter E-Mails oder der Erstellung von Benutzerkonten auf automatisiertem Wege oder unter Vorspiegelung falscher Tatsachen.",
    prohibitedActivity22:
      "- Die Site als Teil von Bemühungen nutzen, mit uns in Wettbewerb zu treten oder die Site und/oder den Inhalt anderweitig für gewinnbringende Vorhaben oder kommerzielle Unternehmen zu nutzen.",
    prohibitedActivity23:
      "- Verwenden Sie die Site, um für Waren und Dienstleistungen zu werben oder deren Verkauf anzubieten.",
    prohibitedActivity24: "- Ihr Profil verkaufen oder anderweitig übertragen.",
    featuresContent1:
      "Wir entwickeln unsere Dienste sorgfältig und basieren dabei auf unseren eigenen Erfahrungen und den Erfahrungen unserer Kunden, die uns ihre Zeit und ihr Feedback mitteilen. Es gibt jedoch keinen Service, der allen gefällt. Wir übernehmen keine Garantie dafür, dass unsere Dienste Ihren spezifischen Anforderungen oder Erwartungen entsprechen.",
    featuresContent2:
      "Wir testen alle unsere Funktionen vor der Auslieferung. Wie bei jeder Software sind auch in unseren Diensten Fehler unvermeidlich. Wir verfolgen die uns gemeldeten Fehler und arbeiten sie ab, insbesondere im Zusammenhang mit Sicherheit oder Datenschutz. Nicht alle gemeldeten Fehler werden behoben, und wir garantieren keine vollständig fehlerfreien Dienste.",
    correctionsContent1:
      "Die Website kann Tippfehler, Ungenauigkeiten oder Auslassungen enthalten, darunter Beschreibungen, Preise, Verfügbarkeit und verschiedene weitere Informationen. Wir behalten uns das Recht vor, Fehler, Ungenauigkeiten oder Auslassungen zu korrigieren und die Informationen auf der Website jederzeit und ohne vorherige Ankündigung zu ändern oder zu aktualisieren.",
    correctionsContent2:
      "Wir können die ständige Verfügbarkeit der Website nicht garantieren. Es können Hardware-, Software- oder andere Probleme auftreten oder Wartungsarbeiten an der Website erforderlich sein, die zu Unterbrechungen, Verzögerungen oder Fehlern führen können. Wir behalten uns das Recht vor, die Website jederzeit und aus beliebigem Grund ohne vorherige Ankündigung zu ändern, zu überarbeiten, zu aktualisieren, auszusetzen, einzustellen oder anderweitig zu modifizieren. Sie erklären sich damit einverstanden, dass wir keinerlei Haftung für Verluste, Schäden oder Unannehmlichkeiten übernehmen, die dadurch entstehen, dass Sie während einer Ausfallzeit oder Einstellung der Website nicht auf die Website zugreifen oder sie nicht nutzen können. Diese Nutzungsbedingungen verpflichten uns nicht zur Wartung und Unterstützung der Website oder zur Bereitstellung von Korrekturen, Aktualisierungen oder Veröffentlichungen in diesem Zusammenhang.",
    userDataContent:
      "Wir speichern bestimmte Daten, die Sie an die Website übermitteln, zur Verwaltung der Website-Leistung sowie Daten im Zusammenhang mit Ihrer Website-Nutzung. Obwohl wir regelmäßig Datensicherungen durchführen, tragen Sie die alleinige Verantwortung für alle Daten, die Sie übermitteln oder die sich auf Ihre Aktivitäten auf der Website beziehen. Sie erklären sich damit einverstanden, dass wir Ihnen gegenüber nicht für den Verlust oder die Beschädigung solcher Daten haften und verzichten hiermit auf jegliche Klagen gegen uns, die sich aus einem solchen Verlust oder einer solchen Beschädigung solcher Daten ergeben.",
    privacyPolicyContent1:
      "Datenschutz und Sicherheit sind uns wichtig. Bitte lesen Sie unsere",
    privacyPolicy: "Datenschutzrichtlinie",
    privacyPolicyContent2:
      "Durch die Nutzung dieser Website erklären Sie sich mit unserer Datenschutzrichtlinie einverstanden, die Bestandteil dieser Servicebedingungen ist. Bitte beachten Sie, dass diese Website in den USA gehostet wird. Wenn Sie von einer anderen Region der Welt aus auf die Website zugreifen, in der Gesetze oder andere Anforderungen hinsichtlich der Erhebung, Nutzung oder Offenlegung personenbezogener Daten von den geltenden Gesetzen in den USA abweichen, übertragen Sie durch Ihre fortgesetzte Nutzung der Website Ihre Daten in die USA und stimmen der Übertragung und Verarbeitung Ihrer Daten in den USA zu.",
    liabilityIntro:
      "Wir erwähnen die Haftung in diesen Bedingungen überall, aber um alles in einem Abschnitt zusammenzufassen:",
    liabilityContent:
      "Sie verstehen und erklären sich ausdrücklich damit einverstanden, dass das Unternehmen weder Ihnen noch Drittparteien gegenüber gesetzlich oder nach Billigkeit für direkte, indirekte oder zufällige Schäden, Schäden aufgrund entgangenen Gewinns, Sonderschäden, Folgeschäden, Straf- oder Bußgelder haftet, einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Geschäftswert, Nutzung, Daten oder sonstige immaterielle Verluste (auch wenn das Unternehmen auf die Möglichkeit solcher Schäden hingewiesen wurde), die sich aus Folgendem ergeben: (1) der Nutzung oder der Unmöglichkeit der Nutzung der Services; (2) Fehlern, Irrtümern oder Ungenauigkeiten von Inhalten und Materialien; (3) Personen- oder Sachschäden jeglicher Art, die sich aus Ihrem Zugriff auf die Site und Ihrer Nutzung der Site ergeben; (4) Kosten für die Beschaffung von Ersatzgütern und -dienstleistungen, die sich aus über die Services erworbenen oder erhaltenen Gütern, Daten, Informationen oder Services oder aus empfangenen Nachrichten oder über die Services abgeschlossenen Transaktionen ergeben; (5) jeglichem unbefugten Zugriff auf oder der Nutzung unserer sicheren Server und/oder aller darauf gespeicherten personenbezogenen und/oder finanziellen Daten; (6) jeglicher Unterbrechung oder Einstellung der Übertragung zu oder von der Site; (7) jegliche Bugs, Viren, Trojaner oder Ähnliches, die von Dritten an oder über die Site übertragen werden können, und/oder (8) jegliche Fehler oder Auslassungen in Inhalten und Materialien oder jegliche Verluste oder Schäden jeglicher Art, die durch die Verwendung von Inhalten entstehen, die über die Site gepostet, übertragen oder anderweitig verfügbar gemacht werden; (9) Aussagen oder Verhalten von Dritten in Bezug auf den Dienst; (10) oder jegliche andere Angelegenheit im Zusammenhang mit diesen Servicebedingungen oder den Diensten, sei es als Vertragsbruch, unerlaubte Handlung (einschließlich aktiver oder passiver Fahrlässigkeit) oder jede andere Haftungstheorie.",
    miscellaneousContent:
      "Diese Nutzungsbedingungen und alle von uns auf der Website oder in Bezug auf die Website veröffentlichten Richtlinien oder Betriebsregeln stellen die gesamte Vereinbarung zwischen Ihnen und uns dar. Unser Versäumnis, ein Recht oder eine Bestimmung dieser Nutzungsbedingungen auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar. Diese Nutzungsbedingungen gelten im größtmöglichen gesetzlich zulässigen Umfang. Wir können unsere Rechte und Pflichten jederzeit vollständig oder teilweise an Dritte übertragen. Wir haften nicht für Verluste, Schäden, Verzögerungen oder Unterlassungen, die durch Ursachen außerhalb unserer Kontrolle verursacht werden. Sollte eine Bestimmung oder ein Teil einer Bestimmung dieser Nutzungsbedingungen rechtswidrig, ungültig oder nicht durchsetzbar sein, gilt diese Bestimmung oder dieser Teil als von diesen Nutzungsbedingungen abtrennbar und berührt nicht die Gültigkeit und Durchsetzbarkeit der übrigen Bestimmungen. Durch diese Nutzungsbedingungen oder die Nutzung der Website entsteht zwischen Ihnen und uns kein Joint Venture, keine Partnerschaft, kein Arbeitsverhältnis oder keine Agenturbeziehung. Sie erklären sich damit einverstanden, dass diese Nutzungsbedingungen aufgrund ihrer Erstellung nicht gegen uns ausgelegt werden. Sie verzichten hiermit auf sämtliche Einreden, die Ihnen möglicherweise aufgrund der elektronischen Form dieser Servicebedingungen und der fehlenden Unterzeichnung dieser Servicebedingungen durch die Parteien zustehen.",
    contactUsContent1:
      "Wenn Sie eine Frage zu den Servicebedingungen haben, wenden Sie sich bitte an",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funktionen",
    UnlimitedTranscription: "Unbegrenzte Transkription",
    BulkUpload: "Massen-Upload",
    Accuracy: "96% Genauigkeit",
    Pricing: "Preise",
    UseCases: "Anwendungsfälle",
    AllUseCases: "Alle Anwendungsfälle",
    Podcasters: "Podcaster",
    Journalists: "Journalisten",
    ContentCreators: "Content-Ersteller",
    Researchers: "Forscher",
    BusinessTeams: "Geschäftsteams",
    Educators: "Pädagogen",
    Resources: "Ressourcen",
    YouTubetoMP4: "YouTube zu MP4",
    StartFreeTrial: "Kostenlos testen"
  },
  Footer: {
    des: "Der weltweit erste wirklich unbegrenzte KI-Transkriptionsdienst. Keine Obergrenzen, keine Limits, nur Freiheit zum Erstellen.",
    Features: "Funktionen",
    UseCases: "Anwendungsfälle",
    Company: "Unternehmen",
    featureMenus: ["Unbegrenzte Transkription", "Massen-Upload", "96% Genauigkeit"],
    useCaseMenus: [
          "Alle Anwendungsfälle",
          "Podcaster",
          "Journalisten",
          "Content-Ersteller",
          "Forscher",
          "Geschäftsteams",
          "Pädagogen"
        ],
    companyMenus: [
          "Über uns",
          "Preise",
          "Datenschutz",
          "Nutzungsbedingungen"
        ]
  },
  Index: {
    Hero: {
      badge: 'Schluss mit "Shrinkflation" - Wirklich unbegrenzt',
      h1: "Zahlen Sie nicht länger für Limits:",
      gradient: "Echt unbegrenzte KI-Transkription",
      subtitle: "Unsere KI transkribiert Videos und wandelt Audio in Text um, verarbeitet 50 Dateien gleichzeitig ohne monatliche Obergrenzen. Transkription, die wirklich mit Ihnen wächst.",
      FreeTrial: "Kostenlos testen - Keine Kreditkarte",
      HowWorks: "So funktioniert's",
      Unlimited: "Unbegrenzte Datei-Uploads",
      NoCap: "Keine monatliche Minuten-Obergrenze",
      Hour: "10-Stunden-Dateien unterstützt",
      ExploreUseCases: "Anwendungsfälle erkunden"
    },
    Stats: {
      monthlyMinutes: "Monatliche Minuten",
      fileUploads: "Datei-Uploads",
      batchProcessing: "Stapelverarbeitung",
      maxFileLength: "Maximale Dateilänge"
    },
    FeaturesGrid: {
      try_now: "Jetzt testen",
      no_signup: "Keine Anmeldung erforderlich",
      experience_unltd: "Erleben Sie wirklich unbegrenzte Transkription",
      upload_50: "Laden Sie hier bis zu 50 Dateien gleichzeitig hoch.",
      no_limits: "Erweitert",
      no_surprises: "KI-Transkription",
      transparency: "Keine versteckten Limits, keine Überraschungen - Während andere stillschweigend Ihre Minuten reduzieren oder Obergrenzen im Kleingedruckten verstecken, setzen wir auf radikale Transparenz",
      feat_unltd: "Wirklich unbegrenzt",
      feat_unltd_desc: 'Keine "Fair-Use-Policy" in den AGB. Keine Speicherbeschränkungen als "unbegrenzt" getarnt. Laden Sie Ihr gesamtes Archiv hoch, transkribieren Sie alles für alle Ihre Audio-Transkriptionsbedürfnisse. Wir meinen es ernst.',
      feat_bulk: "Freiheit beim Massen-Upload",
      feat_bulk_desc: 'Müde von "3 lebenslangen Importen" oder "10 Dateien pro Monat"? Laden Sie 50 Dateien gleichzeitig hoch, so oft Sie möchten. Perfekt für die Bearbeitung von Rückständen.',
      feat_batch: "Stapelverarbeitung",
      feat_batch_desc: "Verarbeiten Sie Ihre gesamte Podcast-Saison über Nacht. Laden Sie 50 Interviews gleichzeitig hoch. Lassen Sie unsere KI arbeiten, während Sie schlafen. Wachen Sie zu fertigen Transkripten auf.",
      feat_accuracy: "96% Genauigkeit",
      feat_accuracy_desc: "Unsere branchenführende KI transkribiert Audio mit intelligenter Zeichensetzung, Sprechererkennung für bis zu 20 Sprecher und meistert Akzente sowie Fachbegriffe fehlerfrei.",
      feat_langs: "100+ Sprachen",
      feat_langs_desc: "Transkribieren Sie Video und Audio in 100+ Sprachen, übersetzen Sie in 249+. Keine Extrakosten für verschiedene Sprachen. Globale Inhalte, ein einfacher Preis.",
      feat_pro: "Professionelle Funktionen",
      feat_pro_desc: "Wortgenaue Zeitstempel für präzise Audio/Video-Positionierung, genaue Sprechererkennung auch bei schnellen Gesprächswechseln und perfekt formatierter Text mit Absätzen, Sätzen und Zeichensetzung für einfaches Lesen.",
        features: "Funktionen"
    },
    UseCases: {
      built_for: "Massen-",
      "heavy_users": "Audio- & Video-Transkription",
      "join_users": 'Entwickelt für Power-User wie Sie - Schließen Sie sich YouTubern, Content-Erstellern und Podcastern an, die von "Shrinkflation"-Diensten gewechselt sind',
      "podcasters": {
        "title": "Podcaster",
        "des": "Laden Sie Ihren gesamten Backkatalog hoch. Erstellen Sie Shownotes für jede Folge. Keine Auswahl mehr, welche Folgen transkribiert werden sollen."
      },
      "content_creators": {
        "title": "Content-Ersteller",
        "des": "Wandeln Sie Ihre Videobibliothek in durchsuchbaren Text um, indem Sie unseren Service zur automatischen Videotranskription nutzen. Generieren Sie Untertitel für alles. Kein Minuten zählen, einfach kreativ sein."
      },
      "journalists": {
        "title": "Journalisten",
        "des": 'Laden Sie alle Ihre Interviews gleichzeitig hoch. Keine "10 Dateien pro Monat"-Hindernisse mehr bei Deadlines. Verarbeiten Sie alles.'
      },
      researchers: {
        title: "Forscher",
        des: "Transkribieren Sie stundenlange Fokusgruppen und Interviews. Laden Sie Ihre gesamte Studie auf einmal hoch. Erhalten Sie genaue Sprechererkennung."
      },
      business_teams: {
        title: "Geschäftsteams",
        des: "Nehmen Sie jeden Anruf auf, ohne sich um Limits zu sorgen. Erhalten Sie KI-Einblicke in alle Gespräche, nicht nur in ausgewählte."
      },
      educators: {
        title: "Pädagogen",
        des: "Transkribieren Sie ganze Vorlesungsreihen. Machen Sie alle Inhalte zugänglich. Keine Auswahl zwischen Kursen aufgrund von Minuten-Obergrenzen."
      }
    },
    Testimonials: {
      title: "Geliebt von",
      highlighted_users: "50.000+ Nutzer",
      subtitle: "Sehen Sie, warum Profis NeverCap begrenzten Alternativen vorziehen",
      Mike: {
        "text": "Heilige Scheiße, das Ding funktioniert tatsächlich! Habe seit 3 Jahren einen Podcast und habe alles wie ein Idiot manuell transkribiert. 6 Folgen auf einmal hochgeladen und es hat mich und meinen Co-Host perfekt getrennt. Die Café-Folge, die ich für ruiniert hielt? Kristallklare Transkription. Ich werde das nie wieder selbst tippen.",
        "author": "Mike Rodriguez",
        "role": "Podcast-Host"
      },
      Sarah: {
        "text": "Ich unterrichte online und brauchte Untertitel für meine Videos. Habe 3 andere Tools ausprobiert, die entweder komische Limits hatten oder ewig brauchten. Dieses hier... funktioniert einfach? Meinen spanischen Vortrag hochgeladen, in 2 Minuten perfekte Untertitel bekommen. Meine Schüler mit Hörproblemen sind so glücklich. Wünschte, ich hätte das früher gefunden!",
        "author": "Sarah Chen",
        "role": "Online-Lehrerin"
      },
      Jessica: {
        "text": "Nutze das für meine Interviews und es ist irre, wie akkurat es ist. Ein 2-stündiges Interview in gebrochenem Englisch + Spanisch und alles war korrekt, sogar die Zeitstempel. Habe früher meinem Praktikanten 200$/Monat fürs Transkribieren gezahlt. Das spart mir buchstäblich jeden Monat Geld.",
        "author": "Jessica Park",
        "role": "Freie Journalistin"
      }
    },
    PricingPreview: {
      "title": "Transparente Preise",
      "highlighted_text": "Keine versteckten Limits",
      "subtitle": "Wählen Sie Ihren Plan. Keine Sternchen, kein Kleingedrucktes, keine Überraschungen"
    },
    FAQSection: {
      "title": "Häufig gestellte",
      "titleHighlight": "Fragen",
      "questions": [
            {
              "q": "KI-Transkription",
              "question": "Was ist KI-Transkription und wie funktioniert sie?",
              "answer": "KI-Transkription ist der automatische Prozess der Umwandlung von Audio in Text mittels fortschrittlicher künstlicher Intelligenz. Bei NeverCap laden Sie einfach Ihre Dateien hoch, und unsere KI transkribiert den Inhalt mit bis zu 96% Genauigkeit. Unser Service ist dafür ausgelegt, Video- (wie MP4, MOV) und Audiodateien (wie MP3, WAV) in lesbaren, bearbeitbaren Text umzuwandeln – inklusive Sprecherkennung und Zeitstempeln."
            },
            {
              "q": "unlimited_policy",
              "question": "Ist es wirklich unbegrenzt? Wo ist der Haken?",
              "answer": "Ja, es ist wirklich unbegrenzt! Keine monatlichen Minutenlimits, keine Zusatzkosten. Die einzigen Limits sind technisch: Einzelne Dateien können bis zu 10 Stunden lang oder 5 GB groß sein, und Sie können 50 Dateien gleichzeitig verarbeiten. Aber Sie können den ganzen Monar über so viele Batches hochladen, wie Sie möchten."
            },
            {
              "q": "accuracy",
              "question": "Wie genau ist die Transkription?",
              "answer": "Wir garantieren 96% Genauigkeit bei klarem Audio. Unsere KI wurde mit Millionen Stunden vielfältiger Inhalte trainiert und meistert Akzente, Fachbegriffe und mehrere Sprecher hervorragend. Bei schwierigem Audio helfen unsere Smart-Enhancement-Funktionen, die Ergebnisse zu verbessern."
            },
            {
              "q": "languages",
              "question": "Welche Sprachen werden unterstützt?",
              "answer": "Wir unterstützen Transkription in über 100 Sprachen, darunter Englisch, Spanisch, Mandarin, Hindi, Arabisch, Französisch und mehr. Zusätzlich können Sie Ihre Transkripte in 249 verschiedene Sprachen übersetzen – perfekt für globale Inhalte."
            },
            {
              "q": "speed",
              "question": "Wie schnell ist die Transkription?",
              "answer": "Blitzschnell! Eine 1-stündige Audiodatei wird typischerweise in unter 5 Minuten verarbeitet. Mit Batch-Verarbeitung können Sie 50 Dateien gleichzeitig hochladen und parallel verarbeiten lassen. Die meisten Nutzer wachen auf und finden ihre gesamte Bibliothek über Nacht transkribiert."
            },
            {
              "q": "cancellation",
              "question": "Kann ich jederzeit kündigen?",
              "answer": "Absolut! Keine Verträge, keine Kündigungsgebühren. Sie können Ihr Abo jederzeit in Ihrem Dashboard upgraden, downgraden oder kündigen. Bei Kündigung behalten Sie den Zugang bis zum Ende Ihres Abrechnungszeitraums."
            },
            {
              "q": "security",
              "question": "Sind meine Daten sicher?",
              "answer": "Ihre Sicherheit hat Priorität. Wir sind SOC-2-zertifiziert, verwenden 256-Bit-Verschlüsselung für alle Daten und nutzen Ihre Inhalte nie zum Trainieren unserer Modelle. Sie können Ihre Dateien jederzeit löschen, und wir löschen sie automatisch nach 30 Tagen. DSGVO- und CCPA-konform."
            },
            {
              "q": "export_formats",
              "question": "Welche Exportformate gibt es?",
              "answer": "Laden Sie Ihre Transkripte in jedem benötigten Format herunter: PDF, Word (DOCX), Excel, CSV, SRT-Untertitel, reiner Text (TXT) und VTT-Untertitel. Perfekt für jeden Workflow."
            },
            {
              "q": "file_formats",
              "question": "Welche Audio- und Videoformate kann ich hochladen?",
              "answer": "Wir unterstützen praktisch jedes Audio- und Videoformat: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV und mehr. Wenn Sie es abspielen können, können wir es transkribieren."
            }
          ]
    },
    CTASection: {
      "title": "Bereit, Grenzen zu sprengen?",
      "subtitle": "Schließen Sie sich 50.000+ Profis an, die zu wirklich unbegrenzter Transkription gewechselt haben",
      "button": "NeverCap kostenlos testen",
      "disclaimer": "Keine Kreditkarte für den kostenlosen Plan erforderlich • Jederzeit für unbegrenzten Zugang upgraden"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Schluss mit "Shrinkflation"',
      heroTitleLine1: "Wirklich unbegrenzt",
      heroTitleLine2: "KI-Transkription",
      heroSubtitle: "Während Trint Sie auf 50 Stunden und Otter auf 10 Dateien pro Monat beschränkt, halten wir, was wir versprechen: unbegrenzte Transkription ohne versteckte Limits.",
      primaryCta: "Kostenlos testen - Keine Kreditkarte",
      secondaryCta: "Die Wahrheit sehen",
      comparisonBadLabel: "Was andere tun",
      comparisonBadTitle: "Überall versteckte Grenzen",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Unbegrenzt" = 50 Stunden/Monat Limit',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 lebenslange Importe (kostenlos), 10/Monat (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 Minuten Speicherlimit",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Max. 30 Stunden/Monat",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "In den AGB versteckt",
      comparisonGoodLabel: "Was wir tun",
      comparisonGoodTitle: "Wirklich unbegrenzt",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Keine monatlichen Minutengrenzen",
      comparisonGoodItem1Text: "nie",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Unbegrenzte Datei-Uploads",
      comparisonGoodItem2Text: "immer",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Keine Speicherlimits",
      comparisonGoodItem3Text: "überhaupt",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 Dateien Stapel-Upload",
      comparisonGoodItem4Text: "jederzeit",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Transparente Richtlinien",
      comparisonGoodItem5Text: "von Anfang an",
      feature1Label: "Keine Grenzen",
      feature1TitlePart1: "1.000 Stunden transkribieren?",
      feature1TitlePart2: "Gleicher Preis.",
      feature1Description: "Hören Sie auf, Minuten zu zählen. Hören Sie auf, auf Limits zu achten. Egal, ob Sie 10 oder 10.000 Stunden pro Monat transkribieren, Sie zahlen den gleichen Pauschalpreis. Keine Zusatzkosten. Keine Überraschungsrechnungen.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Keine "Fair Use"-Richtlinientricks',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Keine Drosselung nach X Stunden",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Keine End-of-Month-Angst",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Monatliche Stunden",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Überzugsgebühren",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Jederzeit hochladen",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparent",
      feature2Label: "Bulk-Freiheit",
      feature2TitlePart1: "Laden Sie Ihr",
      feature2TitlePart2: "Gesamtes Archiv hoch",
      feature2Description: "Otter bietet 3 lebenslange Importe kostenlos, 10 pro Monat bei Pro. Wir bieten unbegrenzt. Laden Sie Ihre Podcast-Backlogs, alle Interviews, Jahre an Aufnahmen hoch. Keine Einschränkungen.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 Dateien pro Batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-Stunden-Dateien unterstützt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Verarbeitung im Schlaf",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 lebenslange Importe",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 Dateien/Monat",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 Stunden/Monat Limit",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Wirklich unbegrenzt ✓",
      feature3Label: "Sozialer Beweis",
      feature3TitlePart1: "Nutzer wechseln",
      feature3TitlePart2: "Täglich",
      feature3Description: '"Ich zahle $100/Jahr für Otter und bin auf 10 Dateiimporte pro Monat beschränkt. Sobald es eine Alternative mit unbegrenzten Importen gibt, bin ich weg!" - Echter Reddit-Nutzer',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000+ Nutzer gewechselt",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Von Otters "Shrinkflation"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Kein Zurück mehr",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Zufriedene Nutzer",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Verarbeitete Dateien",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Genauigkeit",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Keine versteckten Gebühren",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuten/Monat",
      trustBadge2Number: "100+",
      trustBadge2Label: "Sprachen",
      trustBadge3Number: "96%",
      trustBadge3Label: "Genauigkeit",
      trustBadge4Number: "50",
      trustBadge4Label: "Batch-Upload",
      ctaTitle: "Zahlen Sie nicht für falsches Unbegrenzt",
      ctaSubtitle: "Schließen Sie sich Tausenden an, die zu wirklich unbegrenzter Transkription gewechselt sind",
      finalCta: "NeverCap kostenlos testen"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Bulk-Upload-Freiheit",
      heroTitleLine1: "50 Dateien hochladen.",
      heroTitleHighlight: "Alles verarbeiten.",
      heroSubtitle: "Otter gibt Ihnen 3 lebenslange Importe. DREI. Für Ihr gesamtes Leben. Wir bieten Ihnen unbegrenzte Uploads, jeweils 50 Dateien, wann immer Sie möchten.",
      primaryCta: "Bulk-Upload starten →",
      secondaryCta: "Grenzen anzeigen",
      redditQuote: '"Ich habe 3 Jahre Podcast-Episoden zu transkribieren. Otter sagt mir, ich bekomme 3 lebenslange Importe. DREI. Das ist beleidigend."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Echte Frustration von r/podcasting",
      comparisonSectionTitlePart1: "Die",
      comparisonSectionTitleHighlight: "Lächerlichen Grenzen",
      comparisonSectionTitlePart2: "Die sie auferlegen",
      comparisonSubtitle: "Wie Konkurrenten Ihre Verarbeitungsfähigkeit einschränken",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Lebenslange Importe",
      limitCard1DescriptionLine2: "(Ja, für Ihr GANZES Leben)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Dateien pro Monat",
      limitCard2DescriptionLine2: "(100 $/Jahr-Plan)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Datei auf einmal",
      limitCard3DescriptionLine2: "(Sequentieller Upload)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Unbegrenzte Uploads",
      limitCard4DescriptionLine2: "50 Dateien pro Batch",
      feature1Label: "Batch-Power",
      feature1TitlePart1: "Verarbeiten Sie Ihr",
      feature1TitleHighlight: "Gesamtes Archiv",
      feature1TitlePart2: "Über Nacht",
      feature1Description: 'Laden Sie 50 Dateien vor dem Schlafengehen hoch. Wachen Sie mit fertigen Transkripten auf. Keine Warteschlange, kein Warten, keine "Bitte upgraden"-Nachrichten. Einfach pure Verarbeitungsleistung zur Hand.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 gleichzeitige Uploads",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallele Verarbeitung",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-Stunden-Dateien unterstützt",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maximal 5 GB pro Datei",
      uploadAnimationText1: "50 Dateien",
      uploadAnimationText2: "Ablegen & Verarbeiten",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 weitere Dateien...",
      feature2Label: "Geschwindigkeit",
      feature2TitlePart1: "Vom Hochladen bis",
      feature2TitleHighlight: "Fertig in Stunden",
      feature2Description: "Unsere parallele Verarbeitungsinfrastruktur bedeutet, dass Ihre 50 Dateien nicht in der Warteschlange stehen. Sie werden alle gleichzeitig transkribiert. Was früher Wochen dauerte, ist jetzt in Stunden erledigt.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-stündige Datei: 5 Minuten",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 Dateien: parallel verarbeitet",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-Mail-Benachrichtigung bei Fertigstellung",
      timelineStep1Icon: "1",
      timelineStep1Title: "Hochladen",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Verarbeitung",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "KI-Magie",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Abgeschlossen",
      timelineStep4Time: "< 2 Stunden",
      feature3Label: "Freiheit",
      feature3TitlePart1: "Keine Warteschlangen.",
      feature3TitleHighlight: "Kein Warten.",
      feature3TitlePart2: "Keine Grenzen.",
      feature3Description: "Während andere Sie in virtuellen Schlangen warten lassen oder ein Upgrade für „Prioritätsverarbeitung“ verlangen, behandeln wir jeden Upload mit Dringlichkeit. Ihr Content ist wichtig und sollte nicht warten.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Keine Prioritätsstufen",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Gleiche Geschwindigkeit für alle",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Jederzeit hochladen, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Immer bereit",
      feature3VisualSubtext: "Hochladen, wann immer die Inspiration kommt",
      useCasesTitlePart1: "Perfekt für",
      useCasesTitleHighlight: "Viel-Uploader",
      useCasesSubtitle: "Echte Szenarien, in denen Massen-Uploads den Tag retten",
      useCase1Title: "Podcast-Archive",
      useCase1Description: "Laden Sie 3 Jahre Episoden auf einmal hoch. Erstellen Sie Transkripte für Ihren gesamten Backkatalog. Generieren Sie SEO-Inhalte für jede Episode.",
      useCase2Title: "Kurserstellung",
      useCase2Description: "Verarbeiten Sie alle Ihre Vorlesungsvideos gleichzeitig. Erstellen Sie barrierefreie Transkripte für Studenten. Bauen Sie durchsuchbare Kursmaterialien auf.",
      useCase3Title: "Interview-Backlog",
      useCase3Description: "Räumen Sie den Berg untranskribierter Interviews ab. Verarbeiten Sie Wochen an Forschung in Stunden. Halten Sie Ihre Deadline ohne Panik ein.",
      useCase4Title: "YouTube-Bibliothek",
      useCase4Description: "Generieren Sie Untertitel für Ihren gesamten Kanal. Erstellen Sie Blogposts aus Videoinhalten. Verbessern Sie die SEO für alle Videos.",
      useCase5Title: "Meeting-Archive",
      useCase5Description: "Laden Sie monatelang aufgezeichnete Meetings hoch. Erstellen Sie durchsuchbare Besprechungsnotizen. Verlieren Sie nie wieder wichtige Entscheidungen.",
      useCase6Title: "Forschungsdaten",
      useCase6Description: "Verarbeiten Sie Fokusgruppen in Massen. Transkribieren Sie alle Teilnehmerinterviews. Analysieren Sie qualitative Daten effizient.",
      ctaTitle: "Schluss mit dem Betteln um mehr Uploads",
      ctaSubtitle: "Erhalten Sie unbegrenzte Massenverarbeitung, die wirklich funktioniert",
      finalCta: "Jetzt 50 Dateien hochladen →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Branchenführende Genauigkeit",
      heroTitleLine1: "96% Genauigkeit.",
      heroTitleHighlight: "Jedes Wort zählt.",
      heroSubtitle: "Branchenführende Genauigkeit in 12 Hauptsprachen. Wortgenaue Zeitstempel für perfekte Synchronisation. Intelligente Sprechererkennung für schnelle Gespräche. Professionelle Formatierung, die wirklich lesbar ist.",
      primaryCta: "Testen Sie unsere Genauigkeit →",
      secondaryCta: "Sprachen anzeigen",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Genauigkeit in",
      statCard1DescriptionLine2: "12 Hauptsprachen",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Genauigkeit bei",
      statCard2DescriptionLine2: "Akzenten & Dialekten",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Wortgenaue",
      statCard3DescriptionLine2: "Zeitstempel-Präzision",
      languageSectionTitlePart1: "96% Genauigkeit",
      languageSubtitle: "Professionelle Transkription für globale Inhalte",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Englisch",
      languageCard1Accuracy: "96% Genauigkeit",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spanisch",
      languageCard2Accuracy: "96% Genauigkeit",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96% Genauigkeit",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Französisch",
      languageCard4Accuracy: "96% Genauigkeit",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Deutsch",
      languageCard5Accuracy: "96% Genauigkeit",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japanisch",
      languageCard6Accuracy: "96% Genauigkeit",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreanisch",
      languageCard7Accuracy: "96% Genauigkeit",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugiesisch",
      languageCard8Accuracy: "96% Genauigkeit",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russisch",
      languageCard9Accuracy: "96 % Genauigkeit",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italienisch",
      languageCard10Accuracy: "96 % Genauigkeit",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Niederländisch",
      languageCard11Accuracy: "96 % Genauigkeit",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabisch",
      languageCard12Accuracy: "96 % Genauigkeit",
      moreLanguagesText: "+ 88 weitere Sprachen mit 95 %+ Genauigkeit unterstützt",
      feature1Label: "Präzision",
      feature1TitlePart1: "Wortgenau",
      feature1TitleHighlight: "Zeitstempel",
      feature1Description: "Jedes Wort ist perfekt mit seiner Audio-Position synchronisiert. Erstellen Sie klickbare Transkripte, generieren Sie präzise Untertitel oder springen Sie zu exakten Momenten in Ihren Aufnahmen. 100 ms Präzision, der Profis vertrauen.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms Zeitstempel-Genauigkeit",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt für die Videobearbeitung",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klickbare interaktive Transkripte",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Bildgenaue Untertitel",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Sprecher 1",
      transcriptLine1Text: "Willkommen zur heutigen Podcast-Folge.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Sprecher 2",
      transcriptLine2Text: "Danke, dass ich heute dabei sein darf!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Sprecher 1",
      transcriptLine3Text: "Lasst uns direkt zum Hauptthema kommen...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Sprecher 2",
      transcriptLine4Text: "Auf jeden Fall, ich freue mich darauf, darüber zu sprechen.",
      feature2Label: "Intelligente KI",
      feature2TitlePart1: "Verarbeitet",
      feature2TitleHighlight: "Schnelle Gespräche",
      feature2Description: "Unsere KI erkennt Sprecher selbst bei überlappender Sprache, Unterbrechungen und schnellen Hin-und-Her-Gesprächen genau. Perfekt für Interviews, Podcasts und Meetings, in denen häufig dazwischengeredet wird.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Erkennt bis zu 20 Sprecher",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Meistert Unterbrechungen perfekt",
      feature2Point3Icon: "Funktioniert bei überlappender Sprache",
      feature2Point3Text: "Unterstützung für überlappende Sprache",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Behält Genauigkeit bei Überlappungen",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Sprecher erkannt",
      feature2VisualSubtext: "Auch in schnellen Gesprächen",
      feature3Label: "Lesbarkeit",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formatierter Text",
      feature3Description: "Keine Textwände mehr. Unsere KI fügt automatisch Absätze, Sätze und Satzzeichen genau dort ein, wo sie hingehören. Das Ergebnis? Transkripte, die angenehm zu lesen und einfach zu überfliegen sind.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Intelligente Absatzumbrüche",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Korrekte Satzzeichen",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Richtige Großschreibung",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Saubere, überfliegbare Ausgabe",
      formattingTitle: "Vorher & Nachher",
      formattingBeforeLabel: "❌ Andere:",
      formattingBeforeText: "so today were going to talk about the new features weve been working on i think youll really like them theyve been requested by users for a long time and we finally got them done",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "So today, we're going to talk about the new features we've been working on. I think you'll really like them. They've been requested by users for a long time, and we finally got them done.",
      comparisonSubtitle: "Genauigkeit",
      comparisonSectionTitle: "Vergleich",
      comparisonDes: "Sehen Sie, wie wir uns gegen die Konkurrenz behaupten",
      tableHeader1: "Funktion",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Genauigkeit (klares Audio)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Wortgenaue Zeitstempel",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Sprechererkennung",
      tableRow3NeverCap: "20 Sprecher",
      tableRow3Otter: "16 Sprecher",
      tableRow3Descript: "10 Sprecher",
      tableRow3Rev: "✕",
      tableRow4Feature: "Handhabung von Übersprechen",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begrenzt",
      tableRow4Descript: "Begrenzt",
      tableRow4Rev: "✕",
      tableRow5Feature: "Intelligente Formatierung",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Basis",
      tableRow6Feature: "12 Sprachen mit 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Erleben Sie 96% Genauigkeit",
      ctaSubtitle: "Laden Sie Ihre anspruchsvollste Audiodatei hoch und sehen Sie den Unterschied",
      finalCta: "Jetzt Genauigkeit testen →",
        languageSectionTitlePart2: "in 12 Hauptsprachen"
    }
  },
  Pricing: {
    Hero: {
      "title": "Einfache, transparente Preise",
      "highlighted_text": "Keine versteckten Limits",
      "description": "Wählen Sie den passenden Tarif. Jederzeit upgraden oder downgraden. Keine Verträge, keine Überraschungen."
    },
    Cards: {
      "title": "Einfache, transparente Preise.",
      "highlighted_text": "Keine versteckten Limits.",
      "description": "Wählen Sie den passenden Tarif. Jederzeit upgraden oder downgraden. Keine Verträge, keine Überraschungen.",
      "plans": [
            {
              "name": "Kostenlos",
              "price": "$0",
              "period": "Monat",
              "discount": "Ideal zum Ausprobieren unseres Dienstes",
              "limits": {
                "title": "Tägliche Limits",
                "items": [
                  "3 Dateien/Tag (≈90 Min. gesamt/Tag)",
                  "Bis zu 30 Min. pro Datei (≤250 MB)",
                  "1 Datei gleichzeitig hochladen",
                  "Standard-Warteschlange"
                ]
              },
              "features": {
                "title": "Funktionen",
                "items": [
                  "100+ Sprachen",
                  "Sprecherkennung",
                  "Übersetzung",
                  "Alle Exportformate"
                ]
              },
              "cta": {
                "text": "Kostenlos starten. Keine Kreditkarte.",
                "button": "Aktueller Tarif"
              }
            },
            {
              "name": "Pro-Monatsabo",
              "price": "$17,99",
              "period": "Monat",
              "discount": "$9,99 im ersten Monat",
              "limits": {
                "title": "Kein monatliches Limit",
                "items": [
                  "Unbegrenzte Minuten gesamt",
                  "Bis zu 10 Std. / 5 GB pro Datei",
                  "50 Dateien gleichzeitig hochladen",
                  "Priorisierte Warteschlange"
                ]
              },
              "features": {
                "title": "Alles aus Kostenlos, plus",
                "items": [
                  "Wortgenaue Zeitstempel",
                  "Erweiterte Sprechererkennung",
                  "Formatierte Absätze & Zeichensetzung",
                  "Priorisierter Support"
                ]
              },
              "cta": {
                "text": "Unbegrenzte Minuten. Priorisierte Geschwindigkeit. Stapeluploads.",
                "button": "Pro werden"
              },
              "badge": "Beliebtester"
            },
            {
              "name": "Pro-Jahresabo",
              "price": "$8.99",
              "period": "Monat",
              "discount": "Jährliche Abrechnung $107,88",
              "limits": {
                "title": "Wie Pro Monatlich",
                "items": [
                  "Unbegrenzte Minuten gesamt",
                  "Bis zu 10 Std. / 5 GB pro Datei",
                  "50 Dateien gleichzeitig hochladen",
                  "Priorisierte Warteschlange"
                ]
              },
              "features": {
                "title": "Alles aus Kostenlos, plus",
                "items": [
                  "Wortgenaue Zeitstempel",
                  "Erweiterte Sprechererkennung",
                  "Formatierte Absätze & Zeichensetzung",
                  "Priorisierter Support"
                ]
              },
              "cta": {
                "text": "Unbegrenzte Minuten. Priorisierte Geschwindigkeit. Stapeluploads.",
                "button": "Pro werden"
              },
              "badge": "Bestes Preis-Leistungs-Verhältnis - "
            }
          ],
      "disclaimer": '"Unbegrenzt" bedeutet keine monatliche Obergrenze und keine künstliche Verlangsamung. Fair-Use gilt bei missbräuchlicher Automatisierung oder Weiterverteilung.'
    },
    ComparisonTable: {
      "header": {
        "title": "Vergleichen",
        "highlighted_text": "Alle Funktionen",
        "subtitle": "Sehen Sie genau, was Sie mit jedem Tarif erhalten. Keine versteckten Einschränkungen."
      },
      "plans": [
              "Funktionen",
              "Kostenlos",
              "Pro Monatlich",
              "Pro Jährlich"
            ],
      "features": [
            {
              "name": "Preis",
              "values": [
                "$0/Monat",
                {
                  "main": "$17.99/Monat",
                  "note": "$9.99 erste Monat"
                },
                {
                  "main": "$8.99/Monat",
                  "note": "Jährliche Zahlung $107.88"
                }
              ]
            },
            {
              "name": "Monatliche Minuten",
              "values": ["~2.700 (90/Tag)", "Unbegrenzt", "Unbegrenzt"]
            },
            {
              "name": "Maximale Dateidauer",
              "values": ["30 Minuten", "10 Stunden", "10 Stunden"]
            },
            {
              "name": "Maximale Dateigröße",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Stapel-Uploads",
              "values": ["1 Datei", "50 Dateien", "50 Dateien"]
            },
            {
              "name": "Verarbeitungsgeschwindigkeit",
              "values": ["Standard", "Priorität", "Priorität"]
            },
            {
              "name": "Unterstützte Sprachen",
              "values": ["100+ Sprachen", "100+ Sprachen", "100+ Sprachen"]
            },
            {
              "name": "Übersetzung",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Sprechererkennung",
              "values": ["Basis", "Erweitert (20 Sprecher)", "Erweitert (20 Sprecher)"]
            },
            {
              "name": "Wortgenaue Zeitstempel",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formatierte Absätze",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Exportformate",
              "values": ["Alle Formate", "Alle Formate", "Alle Formate"]
            },
            {
              "name": "Support",
              "values": ["E-Mail", "Priorisierte E-Mail", "Priorisierte E-Mail"]
            },
            {
              "name": "Datenspeicherung",
              "values": ["30 Tage", "Dauerhaft", "Dauerhaft"]
            }
          ]
    },
    FAQ: {
      "title": "Häufig gestellte",
      "titleHighligt": "Fragen",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Ist es wirklich unbegrenzt?",
              "answer": "Ja! Pro-Pläne haben keine monatlichen Minutengrenzen. Die einzigen Limits sind technisch: Maximale Dateidauer von 10 Stunden und Dateigröße von 5GB. Sie können so viele Dateien verarbeiten, wie Sie benötigen."
            },
            {
              "q": "plan_change",
              "question": "Kann ich Pläne jederzeit ändern?",
              "answer": "Absolut! Sie können Ihr Abonnement jederzeit über Ihr Dashboard kündigen. Jederzeit hoch- oder herabstufen, wie Sie es benötigen."
            },
            {
              "q": "payment_methods",
              "question": "Welche Zahlungsmethoden akzeptieren Sie?",
              "answer": "Wir akzeptieren alle gängigen Kreditkarten, Debitkarten und PayPal für sichere, problemlose Zahlungen."
            },
            {
              "q": "free_trial",
              "question": "Gibt es eine kostenlose Testversion für Pro?",
              "answer": "Ja! Testen Sie Pro 7 Tage lang kostenlos, ohne Kreditkarte. Plus: Erhalten Sie Ihren ersten Monat mit 45% Rabatt bei Anmeldung."
            },
            {
              "q": "file_retention",
              "question": "Wie lange werden meine Dateien gespeichert?",
              "answer": "Kostenloser Plan: 30 Tage. Pro-Pläne: Dauerhaft! Ihre Transkripte sind immer in Ihrem Konto verfügbar."
            },
            {
              "q": "data_security",
              "question": "Wie sieht es mit der Datensicherheit aus?",
              "answer": "Wir sind SOC 2-zertifiziert und verwenden 256-Bit-Verschlüsselung. Wir nutzen Ihre Inhalte nie zum Training unserer Modelle. Ihre Daten gehören Ihnen."
            }
          ]
    },
    CTA: {
      "title": "Bereit für unbegrenzte Nutzung?",
      "subtitle": "Schließen Sie sich 50.000+ Profis an, die ohne Limits transkribieren",
      "button": "NeverCap kostenlos testen →",
      "disclaimer": "Keine Kreditkarte erforderlich • Sofort mit der Transkription beginnen"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Entwickelt für",
      heavyUsers: "Starke Nutzer",
      whoActuallyNeed: "Die wirklich unbegrenzt brauchen",
      heroSubtitle: "Von Podcast-Machern mit Jahren an Rückstand bis zu Forschern mit Hunderten von Interviews. Sehen Sie, wie Profis NeverCap nutzen, um Upload-Grenzen und Minutenbegrenzungen zu überwinden.",
      podcasters: {
        title: "Podcaster",
        pain: '"Hör auf, Folgen für Transkripte auszuwählen"',
        description: "Lade dein gesamtes Podcast-Archiv auf einmal hoch. Erstelle Shownotes, verbessere SEO und verwandle Inhalte neu – ohne Minuten zu zählen.",
        benefits: {
          benefit1: "Lade alle Folgen hoch, nicht nur 3",
          benefit2: "SEO-freundliche Shownotes erstellen",
          benefit3: "Durchsuchbare Archive anlegen",
          benefit4: "In Blog-Inhalte umwandeln"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Folgen"
          },
          stat2: {
            number: "200 Std.",
            label: "Gespart"
          },
          stat3: {
            number: "3x",
            label: "SEO-Traffic"
          }
        }
      },
      journalists: {
        title: "Journalisten & Autoren",
        pain: '"Deadline-Druck trifft Upload-Beschränkungen"',
        description: "Lade alle Interviews vor der Deadline hoch. Durchsuche Transkripte sofort und verpasse kein wichtiges Zitat.",
        benefits: {
          benefit1: "Stapel-Upload vor Deadlines",
          benefit2: "Alle Interviews auf einmal durchsuchen",
          benefit3: "Präzise Zitate mit Zeitstempeln",
          benefit4: "Akzente & Sprachen verarbeiten"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Interviews/Monat"
          },
          stat2: {
            number: "96%",
            label: "Genauigkeit"
          },
          stat3: {
            number: "5 Min.",
            label: "Pro Stunde"
          }
        }
      },
      contentCreators: {
        title: "Content-Ersteller",
        pain: '"Barrierefreiheit sollte nicht teuer sein"',
        description: "Untertitel deinen gesamten YouTube-Kanal. Erstelle Untertitel in mehreren Sprachen und verbessere deine Video-SEO sofort.",
        benefits: {
          benefit1: "Alle Videos auf einmal untertiteln",
          benefit2: "249 Sprachübersetzungen",
          benefit3: "YouTube-fähige SRT-Dateien",
          benefit4: "Video-SEO-Ranking steigern"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videos"
          },
          stat2: {
            number: "100+",
            label: "Sprachen"
          },
          stat3: {
            number: "249",
            label: "Übersetzungen"
          }
        }
      },
      researchers: {
        title: "Forscher & Akademiker",
        pain: '"Qualitative Daten sollten nicht warten müssen"',
        description: "Verarbeite gesamte Forschungsstudien auf einmal. Bearbeite Fokusgruppen, Interviews und Podiumsdiskussionen mit perfekter Sprechererkennung.",
        benefits: {
          benefit1: "Fokusgruppen stapelweise verarbeiten",
          benefit2: "20-Sprecher-Erkennung",
          benefit3: "Export in Analyse-Software",
          benefit4: "DSGVO-konforme Sicherheit"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studie"
          },
          stat2: {
            number: "96%",
            label: "Gruppen-Genauigkeit"
          },
          stat3: {
            number: "DSGVO",
            label: "Konform"
          }
        }
      },
      businessTeams: {
        title: "Geschäftsteams",
        pain: '"Besprechungsaufnahmen sollten mühelos sein"',
        description: "Nehmen Sie Besprechungen direkt auf oder laden Sie Audiodateien für sofortige Transkription hoch. Erstellen Sie durchsuchbare Archive aus unbegrenzten Gesprächen und verlieren Sie nie wieder wichtige Diskussionen.",
        benefits: {
          benefit1: "Direkte Audioaufnahme & Transkription",
          benefit2: "Unbegrenzte Besprechungsaufnahmen",
          benefit3: "Durchsuchbares Besprechungsarchiv",
          benefit4: "Audiodateien sofort hochladen"
        },
        stats: {
          stat1: {
            number: "Live",
            label: "Aufnahme"
          },
          stat2: {
            number: "Sofort",
            label: "Hochladen"
          },
          stat3: {
            number: "20+",
            label: "Sprecher"
          }
        }
      },
      educators: {
        title: "Pädagogen",
        pain: '"YouTube-Videos benötigen sofortige Transkription"',
        description: "Fügen Sie einfach YouTube-Links ein, um sofortige Transkripte und automatisch generierte Untertitel zu erhalten. Verwandeln Sie jedes Lehrvideo in zugängliche, durchsuchbare Inhalte.",
        benefits: {
          benefit1: "Direkte YouTube-Link-Transkription",
          benefit2: "Automatisch generierte Video-Untertitel",
          benefit3: "Ganze Kurse transkribieren",
          benefit4: "Durchsuchbare Vorlesungsarchive"
        },
        stats: {
          stat1: {
            number: "1-Klick",
            label: "YouTube-Einfügen"
          },
          stat2: {
            number: "Auto",
            label: "Untertitel"
          },
          stat3: {
            number: "100+",
            label: "Sprachen"
          }
        }
      },
      quotes: {
        title: "Echte Nutzer,",
        titleHighlight: "Echte Freiheit",
        subtitle: "Hören Sie von Profis, die sich von künstlichen Grenzen befreit haben",
        testimonials: {
          mike: {
            textBefore: '"Ich hatte',
            highlight: "3 Jahre Episoden",
            textAfter: 'unübersetzt. Otter wollte, dass ich 3 auswähle. DREI. NeverCap ließ mich alle 150 Episoden an einem Wochenende hochladen."',
            name: "Mike Rodriguez",
            role: "Podcast-Host"
          },
          jessica: {
            textBefore: '"Als freiberufliche Journalistin kann ich mir Trints',
            highlight: "$100/Monat",
            textAfter: 'nicht leisten, aber ich kann auch nicht mit Otters Limit von 10 Dateien pro Monat arbeiten. NeverCap hat meine Karriere gerettet."',
            name: "Jessica Park",
            role: "Freiberufliche Journalistin"
          },
          sarah: {
            textBefore: '"Unser Forschungsteam hatte',
            highlight: "200 Stunden",
            textAfter: 'Fokusgruppenaufnahmen. Wir haben alles an einem Wochenende verarbeitet, anstatt monatliche Minuten zu rationieren."',
            name: "Dr. Sarah Chen",
            role: "Leitende Forscherin"
          },
          carlos: {
            textBefore: '"Ich erstelle Bildungsinhalte auf Spanisch. NeverCap transkribiert perfekt und',
            highlight: "übersetzt ins Englische",
            textAfter: 'für eine größere Reichweite. Keine Grenzen, nur Wachstum."',
            name: "Carlos Martinez",
            role: "YouTube Educator"
          }
        }
      },
      industries: {
        title: "Vertrauen in",
        titleHighlight: "Branchen",
        subtitle: "Profis weltweit wechseln zu wirklich unbegrenzt",
        list: {
          media: "Medien & Verlagswesen",
          education: "Bildung",
          healthcare: "Gesundheitswesen",
          technology: "Technologie",
          finance: "Finanzen",
          legal: "Recht"
        }
      },
      cta: {
        title: "Auch Ihr Anwendungsfall braucht Unbegrenzt",
        subtitle: "Werden Sie einer von 50.000+ Profis, die Minuten zählen hinter sich ließen und mit dem Kreieren begannen",
        button: "Starten Sie Ihre unbegrenzte Reise →"
      }
    },
    Podcasters: {
      badge: "Für Podcaster gemacht",
      heroTitle: "Transkribieren Sie Ihr",
      heroTitleHighlight: "Gesamtes Podcast-Archiv",
      heroSubtitle: "Laden Sie Ihren gesamten Backkatalog hoch. Erstellen Sie Shownotes für jede Folge. Keine Auswahl mehr, welche Folgen transkribiert werden.",
      ctaPrimary: "Kostenlos transkribieren",
      ctaSecondary: "So funktioniert's",
      trustBadge1: "10.000+ Podcaster",
      trustBadge2: "Unbegrenzte Folgen",
      trustBadge3: "SEO-optimierte Transkripte",
      stats: {
        stat1: {
          number: "∞",
          label: "Folgen/Monat"
        },
        stat2: {
          number: "50",
          label: "Stapelupload"
        },
        stat3: {
          number: "10 Std.",
          label: "Maximale Folgenlänge"
        },
        stat4: {
          number: "96%",
          label: "Genauigkeit"
        }
      },
      problemTitle: "Das",
      problemTitleHighlight: "Podcast-Transkriptionsproblem",
      problemSubtitle: 'Andere Dienste lassen Sie wählen, welche Folgen "wert" sind, transkribiert zu werden',
      problems: {
        problem1: {
          title: "Upload-Limits zerstören Archive",
          description: "Otter bietet 3 lebenslange Importe kostenlos, 10 pro Monat mit Pro. Wie transkribieren Sie 3 Jahre Folgen?"
        },
        problem2: {
          title: "Verpasste SEO-Chancen",
          description: "Jede nicht transkribierte Folge bedeutet verlorenen SEO-Traffic. Aber Descript begrenzt Sie auf maximal 30 Stunden/Monat."
        },
        problem3: {
          title: "Kosten explodieren mit Wachstum",
          description: "Wenn Ihr Podcast wächst, explodieren die Transkriptionskosten. $2/Stunde Überziehungsgebühren machen Skalierung unmöglich."
        }
      },
      solutionTitle: "Die",
      solutionTitleHighlight: "NeverCap-Lösung",
      solutionDescription: "Echt unbegrenzte Transkription. Laden Sie Ihr gesamtes Archiv hoch. Transkribieren Sie jede neue Folge. Erstellen Sie massenhaft Shownotes. Keine Deckel, keine Limits, nur Wachstum.",
      workflowTitle: "Ihr Podcast-Workflow,",
      workflowTitleHighlight: "Vereinfacht",
      workflowSubtitle: "Von der Aufnahme zu SEO-optimierten Shownotes in Minuten",
      workflow: {
        step1: {
          title: "Folgen hochladen",
          description: "50 Folgen auf einmal ablegen. MP3, MP4, WAV – wir verarbeiten alles."
        },
        step2: {
          title: "KI transkribiert",
          description: "96% Genauigkeit mit Sprechererkennung. Perfekt für Interviews."
        },
        step3: {
          title: "Intelligente Formatierung",
          description: "KI fügt automatisch Absätze, Sätze und Satzzeichen hinzu."
        },
        step4: {
          title: "Veröffentlichen & Ranken",
          description: "Auf Ihre Website exportieren. Beobachten Sie, wie Ihr SEO-Traffic wächst."
        }
      },
      featuresTitle: "Funktionen für Podcaster",
      featuresTitleHighlight: "Tatsächlich benötigt",
      featuresSubtitle: "Von Podcastern für Podcaster entwickelt",
      features: {
        feature1: {
          title: "Mehrfachsprecher-Erkennung",
          description: "Identifiziert und kennzeichnet automatisch bis zu 20 Sprecher. Perfekt für Paneldiskussionen, Interviews und Co-Hosted-Shows."
        },
        feature2: {
          title: "Zeitstempel-Kapitel",
          description: "Erzeugt klickbare Zeitstempel für YouTube-Beschreibungen. Hörer können sofort zu ihren Lieblingssegmenten springen."
        },
        feature3: {
          title: "Intelligente Formatierung",
          description: "Fügt automatisch Absätze, Sätze und Satzzeichen hinzu. Erhalten Sie saubere, lesbare Transkripte. Sparen Sie Stunden in der Nachbearbeitung."
        },
        feature4: {
          title: "SEO-Optimierung",
          description: "Für Suchmaschinen optimierte Transkripte. Steigern Sie die Auffindbarkeit Ihres Podcasts und erreichen Sie neue Zielgruppen."
        },
        feature5: {
          title: "100+ Sprachen",
          description: "Transkribieren Sie in jeder Sprache. Übersetzen Sie in 249+ Sprachen. Erreichen Sie mühelos ein globales Publikum."
        },
        feature6: {
          title: "Stapelverarbeitung",
          description: "Laden Sie 50 Folgen vor dem Schlafengehen hoch. Wachen Sie mit fertigen Transkripten auf. Verarbeiten Sie Ihr gesamtes Archiv über Nacht."
        }
      },
      testimonialsTitle: "Podcaster, die den",
      testimonialsTitleHighlight: "Wechsel vollzogen",
      testimonialsSubtitle: "Echte Geschichten von echten Podcastern",
      testimonials: {
        mike: {
          text: '"Ich mache seit 3 Jahren einen Podcast und habe alles manuell transkribiert wie ein Idiot. Habe 6 Folgen auf einmal hochgeladen und es hat mich und meinen Co-Host perfekt getrennt. Die Café-Folge, die ich für ruiniert hielt? Kristallklares Transkript. Ich werde das nie wieder selbst tippen."',
          name: "Mike Rodriguez",
          role: 'Host des "The Daily Grind" Podcasts'
        },
        sarah: {
          text: '"Otter hat mich auf 10 Dateiimporte pro Monat beschränkt. Ich hatte 150 Folgen im Rückstand. NeverCap ließ mich alles in 3 Chargen hochladen. Mein organischer Traffic ist seit dem Hinzufügen von Transkripten zu alten Folgen um 300% gestiegen. Das zahlt sich buchstäblich von selbst aus."',
          name: "Sarah Chen",
          role: 'Creator von "Tech Talks Today"'
        }
      },
      comparisonTitle: "Warum Podcaster",
      comparisonTitleHighlight: "NeverCap wählen",
      comparisonSubtitle: "Sehen Sie, wie wir uns gegen die Konkurrenz behaupten",
      comparison: {
        headers: {
          feature: "Funktion",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Monatliches Folgenlimit",
            nevercap: "Unbegrenzt",
            otter: "~13 Folgen (1200 Min)",
            descript: "~30 Folgen (30 Std)"
          },
          uploadLimit: {
            feature: "Datei-Upload-Limit",
            nevercap: "Unbegrenzt",
            otter: "10 pro Monat",
            descript: "1 gleichzeitig"
          },
          batchProcessing: {
            feature: "Stapelverarbeitung",
            nevercap: "50 Dateien",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maximale Folgenlänge",
            nevercap: "10 Stunden",
            otter: "90 Minuten",
            descript: "Unbegrenzt"
          },
          speakerDetection: {
            feature: "Sprechererkennung",
            nevercap: "20 Sprecher",
            otter: "16 Sprecher",
            descript: "10 Sprecher"
          },
          smartFormatting: {
            feature: "Intelligente Formatierung",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Preis",
            nevercap: "$17,99/Monat",
            otter: "$16,99/Monat",
            descript: "$30/Monat"
          }
        }
      },
      ctaTitle: "Jede Folge transkribieren",
      ctaSubtitle: "Schließen Sie sich 10.000+ Podcastern an, die sich nie um Limits sorgen",
      ctaButton: "Laden Sie Ihre ersten 50 Folgen kostenlos hoch →",
      ctaDisclaimer: "Keine Kreditkarte erforderlich • Unbegrenzte Folgen verarbeiten • Jederzeit kündbar"
    },
    Journalists: {
      hero: {
        badge: "Für Journalisten & Autoren",
        title: "Jedes Interview transkribieren.",
        titleHighlight: "Kein Zitat verpassen.",
        subtitle: "Hören Sie auf zu entscheiden, welche Interviews eine Transkription verdienen. Laden Sie alle Aufnahmen auf einmal hoch, durchsuchen Sie alles sofort und halten Sie Ihre Deadlines ohne Upload-Stress ein.",
        ctaPrimary: "Unbegrenzte Uploads starten →",
        ctaSecondary: "So funktioniert's",
        stats: {
          uploads: {
            number: "∞",
            label: "Datei-Uploads"
          },
          accuracy: {
            number: "96%",
            label: "Genauigkeit"
          },
          speed: {
            number: "5 Min.",
            label: "Pro Stunde"
          }
        },
        dashboard: {
          title: "Interview-Warteschlange",
          status: "• Alle Verarbeitung",
          interviews: {
            cityCouncil: {
              title: "Stadtratssitzung",
              duration: "2h 15min • Wird hochgeladen...",
              action: "Wird verarbeitet"
            },
            expertInterview: {
              title: "Experteninterview - Dr. Chen",
              duration: "45min • Wird transkribiert...",
              action: "96% Fertig"
            },
            pressConference: {
              title: "Pressekonferenz",
              duration: "1h 30min • Fertig",
              action: "Ansehen →"
            },
            phoneInterview: {
              title: "Telefoninterview - Quelle",
              duration: "35min • Fertig",
              action: "Ansehen →"
            }
          }
        }
      },
      problem: {
        title: "Das",
        titleHighlight: "Journalisten-Transkriptionsproblem",
        subtitle: 'Andere Dienste zwingen Sie, zu entscheiden, welche Interviews "wert" sind, transkribiert zu werden',
        problems: {
          uploadLimits: {
            title: "Upload-Limits töten Recherchen",
            description: "Otter bietet Ihnen 10 Dateiimporte pro Monat mit Pro. Wie transkribieren Sie 3 Wochen Recherche-Interviews?"
          },
          missingQuotes: {
            title: "Fehlende entscheidende Zitate",
            description: "Jedes nicht transkribierte Interview könnte das Schlüsselzitat der Geschichte enthalten. Aber Trint begrenzt Sie auf maximal 50 Stunden/Monat."
          },
          costExplosion: {
            title: "Kosten explodieren bei Deadlines",
            description: "Wenn Ihre Recherche tiefer geht, explodieren die Transkriptionskosten. $100/Monat Überziehungsgebühren machen Eilmeldungen unmöglich."
          }
        },
        solution: {
          title: "Die",
          titleHighlight: "NeverCap-Lösung",
          description: "Echt unbegrenzte Transkription. Laden Sie Ihre gesamte Recherche hoch. Transkribieren Sie jedes Interview. Durchsuchen Sie alle Zitate sofort. Keine Obergrenzen, keine Limits, nur Journalismus."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Beste Interview-Transkriptionssoftware",
        titleSuffix: "für Journalisten",
        subtitle: "Echte Vorteile, die zählen, wenn Termine knapp sind und Genauigkeit alles ist",
        solutions: {
          unlimitedUploads: {
            label: "Unbegrenztes Volumen",
            title: "Unbegrenztes Volumen für alle Ihre Interviews",
            description: "Im Gegensatz zu Software mit Minutenlimits können Sie jedes Interview transkribieren, vom kurzen Gespräch bis zur mehrstündigen Diskussion. Keine Sorge, dass Ihnen kurz vor Fristende die Credits ausgehen.",
            points: {
              simultaneousUpload: "Keine monatlichen Minutenlimits",
              noLimits: "Unterstützung für 10-Stunden-Interviews",
              processWhileWrite: "Ganze Recherchen auf einmal verarbeiten",
              longRecordings: "10-Stunden-Aufnahmen unterstützt"
            },
            visual: {
              number: "∞",
              label: "Keine Limits. Niemals."
            }
          },
          instantSearch: {
            label: "Blitzschnell",
            title: "Geschwindigkeit, die zu Ihrem Nachrichtenzyklus passt",
            description: "Erhalten Sie Ihre Interviewtranskription in Minuten, nicht Tagen. Veröffentlichen Sie Geschichten schneller als je zuvor. Unsere KI verarbeitet Stunden von Audio, während Sie Kaffee trinken.",
            points: {
              searchAll: "5-minütige Bearbeitung für 1-Stunden-Interviews",
              wordTimestamps: "Priorisierte Bearbeitung für dringende Geschichten",
              jumpToMoments: "Echtzeit-Fortschrittsverfolgung"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Pro Stunde Audio",
              results: {
                mayorInterview: "„…unsere Klimapolitik wird sich verändern…“",
                expertPanel: "„…die Grundsatzerklärung zeigt deutlich…“"
              }
            }
          },
          professionalAccuracy: {
            label: "Zitatfertige Genauigkeit",
            title: "Genauigkeit, die Sie zitieren können",
            description: "Unsere KI liefert hochpräzise Transkripte, sodass die von Ihnen veröffentlichten Zitate präzise und zuverlässig sind. Professionelle Transkription, der Redakteure vertrauen.",
            points: {
              accuracyGuarantee: "96% Genauigkeitsgarantie",
              handlesAccents: "Verarbeitet Fachbegriffe",
              smartPunctuation: "Perfekte Sprechererkennung"
            },
            visual: {
              accuracy: "96%",
              label: "Veröffentlichungsfertige Genauigkeit",
              transcript: {
                speaker1: "„Die Untersuchung ergab erhebliche Unstimmigkeiten in den Finanzberichten.“",
                speaker2: "„Können Sie diese spezifischen Diskrepanzen näher erläutern?“"
              }
            }
          },
            ironclad: {
                  label: "Quellenschutz",
                  title: "Eiserner Quellenschutz",
                  description: "Wir bieten robuste Sicherheitsfunktionen zum Schutz Ihrer sensiblen Interviewdaten und vertraulichen Quellen. Bank-Level-Verschlüsselung sichert Ihre Recherchen.",
                  points: {
                    accuracyGuarantee: "Ende-zu-Ende-Verschlüsselung",
                    handlesAccents: "Optionen für automatische Dateilöschung",
                    smartPunctuation: "DSGVO- & datenschutzkonform"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maximale Sicherheit"
                  }
                }
        }
      },
      features: {
        title: "Alles, was ein",
        titleHighlight: "Journalist braucht",
        subtitle: "Professionelle Tools, die Ihren Workflow respektieren",
        featuresList: {
          languages: {
            title: "100+ Sprachen",
            description: "Interviewen Sie Quellen weltweit in 12 Hauptsprachen mit 96% Genauigkeit."
          },
          exportFormats: {
            title: "Exportformate",
            description: "Word, PDF, SRT, TXT. Kompatibel mit jedem Workflow."
          },
          sourceProtection: {
            title: "Quellenschutz",
            description: "Bank-Level-Verschlüsselung. Ihre Quellen bleiben vertraulich."
          },
          timestamps: {
            title: "Zeitstempel",
            description: "Klicken Sie auf ein Zitat, um zur exakten Audio-Stelle zu springen."
          },
          teamSharing: {
            title: "Team-Freigabe",
            description: "Arbeiten Sie mit Redakteuren zusammen. Teilen Sie Transkripte sicher."
          },
          mobileReady: {
            title: "Mobil bereit",
            description: "Hochladen vom Handy. Transkripte überall überprüfen."
          },
          smartFormatting: {
            title: "Intelligente Formatierung",
            description: "Automatische Absätze und Zeichensetzung für lesbare Transkripte."
          },
          batchProcessing: {
            title: "Stapelverarbeitung",
            description: "Laden Sie 50 Dateien auf einmal hoch. Verarbeitung über Nacht, während Sie schlafen."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: '"Ich hatte 3 Jahre unübersetzte Interviews wegen Upload-Limits. NeverCap ließ mich alles an einem Wochenende verarbeiten. Ein Game-Changer."',
          name: "Jessica Park",
          role: "Freiberufliche Journalistin, ehemalige Otter-Nutzerin"
        }
      },
      cta: {
        title: "Transkription starten",
        titleHighlight: "Ohne Grenzen",
        subtitle: "Schließen Sie sich Tausenden Journalisten an, die Uploads nicht mehr zählen und sich auf Geschichten konzentrieren",
        ctaPrimary: "Kostenlos unbegrenzt testen →",
        ctaSecondary: "Preise anzeigen"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Für Content-Ersteller",
        title: "YouTube-Videos transkribieren,",
        titleHighlight: "Unbegrenzt",
        titleSuffix: "1",
        subtitle: "Ob Sie ein YouTube-Video transkribieren, ein TikTok-Video zur Wiederverwendung transkribieren oder herausfinden möchten, wie Sie ein Facebook-Video in Text umwandeln – unsere Plattform erledigt alles nahtlos. Untertitel in 100+ Sprachen ohne monatliche Limits – einfach kreative Freiheit pur.",
        ctaPrimary: "Unbegrenzte Untertitelung starten →",
        ctaSecondary: "So funktioniert's",
        stats: {
          videos: {
            number: "∞",
            label: "Videos/Monat"
          },
          languages: {
            number: "100+",
            label: "Sprachen"
          },
          accuracy: {
            number: "96%",
            label: "Genauigkeit"
          },
          platforms: {
            number: "10+",
            label: "Plattformen"
          }
        }
      },
      platforms: {
        title: "Abrufen & Transkribieren von jeder Plattform",
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
          titleMax: "Videos transkribieren von",
          titleMaxHighlight: "Jeder Plattform"
    },
      features: {
        title: "Alles, was Sie brauchen, um",
        titleHighlight: "Inhalte zu skalieren",
        subtitle: "Professionelle Tools ohne professionelle Grenzen",
        oneClickImport: {
          label: "Ein-Klick-Import",
          title: "YouTube-, TikTok- &",
          titleHighlight: "Instagram-Videos durch Link-Einfügung transkribieren",
          description: "Unser Tool vereinfacht die Transkription von Videoinhalten. Für Instagram-Videos einfach den Link einfügen. Für Vimeo-Videos genauso. Bearbeiten Sie Ihren gesamten Kanalrückstau an einem Wochenende.",
          points: {
            directYoutube: "Direkte YouTube-Link-Transkription",
            multiplePlatforms: "Abruf von 10+ Plattformen",
            batchPlaylists: "Batch-Verarbeitung ganzer Playlists",
            autoSync: "Automatische Synchronisation mit Ihren Kanälen"
          },
          demo: {
            instruction: "Fügen Sie Ihre Video-URL ein:",
            url: "https://youtube.com/watch?v=...",
            status: "Abrufen & Transkribieren..."
          }
        },
        globalReach: {
          label: "Globale Reichweite",
          title: "100+ Sprachen.",
          titleHighlight: "Keine Grenzen.",
          description: "Erreichen Sie ein globales Publikum mit automatischer Übersetzung in 100+ Sprachen. Generieren Sie Untertitel in mehreren Sprachen gleichzeitig. Keine Extrakosten, keine monatlichen Übersetzungslimits.",
          points: {
            highAccuracy: "96% Genauigkeit in 12 Hauptsprachen",
            unlimitedTranslations: "Unbegrenzte Übersetzungen inklusive",
            multicultural: "Perfekt für multikulturelle Inhalte",
            autoDetect: "Automatische Spracherkennung"
          },
          visual: {
            number: "100+",
            title: "Unterstützte Sprachen",
            subtitle: "Einmal übersetzen, alle erreichen"
          }
        },
        flexibleExport: {
          label: "Flexibler Export",
          title: "Jedes Format",
          titleHighlight: "Das Sie brauchen",
          description: "Exportieren Sie im passenden Format für Ihren Workflow. Von SRT-Dateien für YouTube bis VTT für Webplayer oder bearbeitbare Dokumente für Skripte. Alle Exporte unbegrenzt, in jedem Plan enthalten.",
          points: {
            videoFormats: "SRT & VTT für Videoplattformen",
            editingFormats: "DOCX & PDF zur Bearbeitung",
            dataAnalysis: "CSV für Datenanalyse",
            simpleScripts: "TXT für einfache Skripte"
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
        title: "Vom Hochladen bis",
        titleHighlight: "Veröffentlicht",
        titleSuffix: "in Minuten",
        subtitle: "Der schnellste Weg, Ihre gesamte Bibliothek zu untertiteln",
        steps: {
          pasteLinks: {
            title: "Links einfügen",
            description: "YouTube-, TikTok- oder beliebige Video-Links einfügen. Oder Dateien direkt hochladen."
          },
          autoTranscribe: {
            title: "Automatische Transkription",
            description: "KI-Verarbeitung mit 96% Genauigkeit. Versteht Akzente & mehrere Sprecher."
          },
          editTranslate: {
            title: "Bearbeiten & Übersetzen",
            description: "Perfektionieren Sie Untertitel. Sofort in 100+ Sprachen übersetzen."
          },
          exportPublish: {
            title: "Exportieren & Veröffentlichen",
            description: "In jedem Format herunterladen. Auf Ihrer Plattform hochladen. Fertig!"
          }
        }
      },
      testimonials: {
        title: "Creator wechseln",
        titleHighlight: "täglich",
        subtitle: "Von begrenzten Plänen zu unbegrenzter Freiheit",
        carlos: {
          textBefore: "Ich erstelle Bildungsinhalte auf Spanisch. NeverCap transkribiert perfekt und",
          textAfter: "für größere Reichweite. Keine Grenzen, nur Wachstum. Meine Kanalaufrufe verdreifachten sich nach mehrsprachigen Untertiteln.",
          highlight: "übersetzt ins Englische",
          name: "Carlos Martinez",
          role: "YouTube-Edukator • 250K Abonnenten"
        },
        sarah: {
          textBefore: "Descript wollte $30/Monat für",
          textAfter: ". Ich hatte 500+ Videos im Rückstand. NeverCap ließ mich alles an einem Wochenende bearbeiten. Der SEO-Schub durch Untertitel hat sich im ersten Monat amortisiert.",
          highlight: "30 Stunden",
          name: "Sarah Lee",
          role: "Lifestyle-Vloggerin • 180K Abonnenten"
        },
        jake: {
          textBefore: "Die",
          textAfter: "Funktion ist revolutionär. Ich lade nichts mehr herunter. Einfach einfügen, transkribieren, fertig. Die Bearbeitung meiner Podcast-Clips für TikTok war noch nie so einfach.",
          highlight: "direkter YouTube-Abruf",
          name: "Jake Wilson",
          role: "Podcast-Host • Top 1% Creator"
        },
        yuki: {
          textBefore: "Ich erstelle Inhalte in 5 Sprachen. Andere Dienste verlangen",
          textAfter: ". NeverCap bietet mir unbegrenzte Übersetzungen. Mein internationales Publikum ist seit der Verwendung nativer Untertitel um 400% gewachsen.",
          highlight: "pro Übersetzung",
          name: "Yuki Tanaka",
          role: "Gaming-Creator • 500K Abonnenten"
        }
      },
      cta: {
        title: "Dein gesamter Kanal. Untertitelt. Heute.",
        subtitle: "Schließe dich 50.000+ Creatorn an, die aufhören, Minuten zu zählen, und anfangen zu kreieren",
        button: "Unbegrenzte Untertitelung starten →"
      },
        FAQSection: {
              "title": "Deine Transkriptionsfragen,",
              "titleHighlight": "Beantwortet",
              subtitle: "Alles, was du über das Transkribieren von Videos von verschiedenen Plattformen wissen musst",
              "questions": [
                    {
                      "question": "F: Wie transkribiere ich ein YouTube-Video mit NeverCap?",
                      "answer": "Ganz einfach: Finde das YouTube-Video, kopiere die URL und füge sie in unsere App ein. Unsere KI holt das Video automatisch und liefert in Minuten eine vollständige Texttranskription."
                    },
                    {
                      "question": "F: Wie transkribiere ich ein Facebook-Video am besten?",
                      "answer": "Am einfachsten mit einem Direktlink. Kopiere die Facebook-Video-URL und unsere Plattform übernimmt den Rest – mit bis zu 96% Genauigkeit und ohne manuelle Transkription."
                    },
                    {
                      "question": "F: Kann ich TikTok- und Instagram-Videos transkribieren?",
                      "answer": "Absolut. Wir unterstützen Transkriptionen für beide Plattformen. Perfekt für Creator, die Short-Form-Videos in Blogposts, Artikel oder Text-Updates umwandeln möchten."
                    },
                    {
                      "question": "F: Wie transkribiere ich ein Vimeo-Video?",
                      "answer": "So einfach wie bei anderen Plattformen: Vimeo-URL kopieren, in NeverCap einfügen. Unsere KI erstellt eine präzise Transkription in verschiedenen Download-Formaten."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Für akademische Exzellenz entwickelt",
      heroTitle1: "Transkribiere jedes Interview.",
      heroTitle2: "Analysiere alle Daten.",
      heroSubtitle: "Entscheide nicht mehr, welche Fokusgruppen transkribiert werden. Verarbeite alle qualitativen Daten mit 96% Genauigkeit und perfekter Sprechererkennung – selbst bei 20 durcheinanderredenden Teilnehmern.",
      heroCtaPrimary: "Kostenlos testen – ohne Kreditkarte",
      heroCtaSecondary: "So funktioniert's",
      statsInterviewHours: "Interviewstunden",
      statsAccuracy: "Genauigkeit",
      statsSpeakersId: "Sprecher-ID",
      statsCompliant: "Konform",
      problemTitle: "Das",
      problemSubtitle: 'Andere Dienste lassen dich entscheiden, welche Daten "transkriptionswürdig" sind',
      problemCard1Title: "Upload-Limits gefährden Studien",
      problemCard1Desc: "Otter erlaubt 3 lebenslange Importe. Wie transkribierst du 200 Stunden Fokusgruppen?",
      problemCard2Title: "Kritische Daten fehlen",
      problemCard2Desc: "Jedes nicht transkribierte Interview könnte bahnbrechende Erkenntnisse enthalten. Aber Rev verlangt mindestens $2/Minute.",
      problemCard3Title: "Forschungsgelder verschwinden",
      problemCard3Desc: "Wenn Ihr Datensatz wächst, explodieren die Transkriptionskosten. 500$ pro Fokusgruppe machen Skalierung unmöglich.",
      solutionTitle: "NeverCap-Lösung",
      solutionDesc: "Echt unbegrenzte Transkription. Laden Sie Ihre gesamte Studie hoch. Transkribieren Sie jedes Interview. Analysieren Sie alle Daten. Keine Obergrenzen, keine Limits, nur Forschung.",
      feature1Label: "Keine Grenzen",
      feature1Title: "Bearbeitung Ihrer",
      feature1Desc: 'Laden Sie heute Abend alle 200 Stunden Interviews hoch. Wachen Sie mit vollständigen, durchsuchbaren Transkripten auf. Keine monatlichen Limits, keine Dateibeschränkungen, kein "Fair Use"-Unsinn.',
      feature1Point1: "50 Dateien gleichzeitig stapelweise hochladen",
      feature1Point2: "Längsschnittstudien vollständig verarbeiten",
      feature1Point3: "Keine Speicherbegrenzungen für Transkripte",
      feature1Point4: "Export nach NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Unbegrenzte Stunden",
      feature1Visual2: "Gleicher Preis für 10 oder 10.000 Stunden",
      feature2Label: "Intelligente KI",
      feature2Title: "Präzise Umsetzung",
      feature2Desc: "Unsere KI erkennt bis zu 20 Sprecher, selbst wenn sie sich überschneiden, unterbrechen oder gleichzeitig reden. Jede Stimme wird korrekt erfasst und gekennzeichnet.",
      feature2Point1: "20-Sprecher-Identifikation",
      feature2Point2: "Verarbeitet Überlappungen & Unterbrechungen",
      feature2Point3: "Sprecherkennung, die Sie umbenennen können",
      feature2Point4: "Zeitstempel für jedes Wort",
      conversationParticipant1: "Teilnehmer 1",
      conversationText1: "Die Hauptbarriere ist definitiv die Behandlungskosten...",
      conversationParticipant2: "Teilnehmer 2",
      conversationText2: "Absolut, aber ich würde hinzufügen, dass Zugang—",
      conversationParticipant3: "Teilnehmer 3",
      conversationText3: "—Entschuldigung für die Unterbrechung, aber Transport ist auch riesig.",
      conversationText4: "Ja! Genau das wollte ich sagen.",
      conversationParticipant4: "Teilnehmer 4",
      conversationText5: "In ländlichen Gebieten sind es alle drei: Kosten, Zugang UND Transport.",
      feature3Label: "Präzision",
      feature3Title: "Vertrauenswürdig",
      feature3Desc: "Meistert Fachjargon, starke Akzente und branchenspezifische Begriffe wie ein Profi. Präzise genug für Veröffentlichungen, Peer-Review und Ihr Dissertationsteam.",
      feature3Point1: "Medizinische & wissenschaftliche Terminologie",
      feature3Point2: "100+ Sprachen & Dialekte",
      feature3Point3: "Wortgetreue & bereinigte Lesemodi",
      feature3Point4: "Bearbeiten und exportieren Sie in jedem Format",
      feature3Visual1: "Forschungsgerechte Genauigkeit",
      feature3Visual2: "Vertrauen von 50.000+ Forschern",
      feature4Label: "Sicherheit",
      feature4Title: "IRB-konforme Zertifizierung",
      feature4Desc: "Ihre sensiblen Forschungsdaten sind mit Unternehmenssicherheit geschützt. GDPR-konform, HIPAA-bereite Optionen und vollständige Prüfpfade für IRB-Anforderungen.",
      feature4Point1: "Ende-zu-Ende-Verschlüsselung",
      feature4Point2: "GDPR & CCPA konform",
      feature4Point3: "Automatische Löschrichtlinien",
      feature4Point4: "Sichere Teamzusammenarbeit",
      useCasesTitle: "Perfekt für",
      useCasesSubtitle: "Von Ethnographie bis klinische Studien",
      useCase1Title: "Fokusgruppen",
      useCase1Desc: "Verarbeitet 8-20 Teilnehmer mit überlappender Sprache. Perfekte Sprechererkennung auch bei hitzigen Diskussionen. Direkter Export zu qualitativer Analysesoftware.",
      useCase2Title: "Ausführliche Interviews",
      useCase2Desc: "Verarbeiten Sie Hunderte von Einzelinterviews gleichzeitig. Gewährleisten Sie Konsistenz in Ihrem gesamten Datensatz. Durchsuchen Sie alle Transkripte sofort.",
      useCase3Title: "Klinische Forschung",
      useCase3Desc: "HIPAA-konforme Optionen für Patientengespräche. Präzise Transkription medizinischer Fachbegriffe. Sichere Verarbeitung sensibler Gesundheitsdaten.",
      useCase4Title: "Ethnografische Studien",
      useCase4Desc: "Feldaufnahmen in natürlicher Umgebung. Bewältigen Sie Hintergrundgeräusche und mehrere Sprecher. Unterstützung für 100+ Sprachen und Dialekte.",
      useCase5Title: "Oral-History-Projekte",
      useCase5Desc: "Bewahren Sie ganze Archive ohne Einschränkungen. Erstellen Sie durchsuchbare historische Aufzeichnungen. Ideal für Längs- und Generationenstudien.",
      useCase6Title: "Dissertationen",
      useCase6Desc: "Studentenfreundliche Preise mit vollem Funktionsumfang. Verarbeiten Sie Ihren gesamten Datensatz kostengünstig. Halten Sie enge Fristen mit Stapelverarbeitung ein.",
      testimonialTitle: "Vertrauen von",
      testimonialText: "Unser Forschungsteam hatte 200 Stunden Fokusgruppenaufnahmen aus unserer Gemeindegesundheitsstudie. Andere Dienste wollten, dass wir aufgrund der Kosten auswählen, welche Sitzungen transkribiert werden. NeverCap ermöglichte uns, alles an einem Wochenende zu verarbeiten. Die 20-Sprecher-Identifikation funktionierte tatsächlich – selbst während unserer chaotischsten Diskussionen, bei denen alle gleichzeitig sprachen. Dieses Tool hat unsere qualitative Datenverarbeitung komplett verändert.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Leitende Forscherin, Public Health Institute",
      ctaTitle: "Hören Sie auf, Daten auszuwählen",
      ctaSubtitle: "Schließen Sie sich 50.000+ Forschern an, die alles transkribieren",
      ctaButton: "NeverCap kostenlos testen",
        problemTitle2: "Forschungs-Transkriptionsproblem",
        title: "Die",
        useCasesTitle2: "Jede Forschungsmethode",
        testimonialTitle2: "Führenden Forschern",
        feature1TitleHl: "Gesamten Forschungsprojekte",
        feature1TitlePost: "Alles aus einer Hand",
        feature2TitleHl: "Fokusgruppen-Interviews",
        feature2TitlePost: "Jederzeit erfolgreich",
        feature3TitleHl: "96% Genauigkeit",
        feature4TitleHl: "Sicherheit",
        testimonialText2Hl: "200 Stunden",
        testimonialText3: "von Fokusgruppenaufnahmen aus unserer Gemeindegesundheitsstudie. Andere Dienste wollten, dass wir aufgrund der Kosten auswählen, welche Sitzungen transkribiert werden. NeverCap ermöglichte uns die Verarbeitung",
        testimonialText4Hl: "alles an einem Wochenende",
        testimonialText5: ". Die 20-Sprecher-Identifikation funktionierte tatsächlich – selbst während unserer chaotischsten Diskussionen, bei denen alle gleichzeitig sprachen. Dieses Tool hat",
        testimonialText6Hl: "völlig verändert",
        testimonialText7: "wie wir qualitative Daten verarbeiten."
    },
    BusinessTeams: {
      heroBadge: "Für Geschäftsteams",
      heroTitle1: "Besprechungsaufnahmen",
      heroTitle2: "Mühelos gemacht",
      heroSubtitle: "Nehmen Sie Besprechungen direkt in Ihrem Browser auf oder laden Sie Audiodateien sofort hoch. Erstellen Sie durchsuchbare Archive aus unbegrenzten Gesprächen. Wichtige Diskussionen gehen nie wieder verloren – dank wirklich unbegrenzter Transkription.",
      heroCtaPrimary: "Jetzt aufnehmen →",
      heroCtaSecondary: "So funktioniert's",
      recordingStatus: "Aufnahme läuft...",
      statsMeetingMinutes: "Besprechungsprotokolle",
      statsLiveRecording: "Aufnahme",
      statsSpeakerID: "Sprechererkennung",
      statsInstantUpload: "Hochladen & Verarbeiten",
      featuresTitle: "Transkription für jedes Unternehmen",
      featuresSubtitle: "Von Live-Aufnahmen bis zu sofortigen Uploads – wir haben alle Hindernisse beseitigt",
      feature1Title: "Direkt im Browser aufnehmen",
      feature1Desc: "Keine Downloads, keine Plugins. Starten Sie die Aufnahme sofort mit einem Klick. Perfekte Audioqualität, automatische Sprechererkennung.",
      feature1Benefit1: "Aufnahme mit einem Klick",
      feature1Benefit2: "Keine Softwareinstallation",
      feature1Benefit3: "Funktioniert auf jedem Gerät",
      feature1Benefit4: "Echtzeit-Transkription",
      feature1Visual1: "Klicken & Aufnehmen",
      feature1Visual2: "Keine Einrichtung erforderlich",
      feature2Title: "Laden Sie jede Audiodatei sofort hoch",
      feature2Desc: "Haben Sie Aufnahmen von Zoom, Teams oder Ihrem Handy? Laden Sie sie sofort hoch. Unterstützung für alle gängigen Audio- und Videoformate. Verarbeiten Sie mehrere Dateien gleichzeitig ohne Wartezeit.",
      feature2Benefit1: "Unterstützt: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Stapelverarbeitung möglich",
      feature2Benefit3: "10-Stunden-Dateien unterstützt",
      feature2Benefit4: "Verarbeitung während der Arbeit",
      feature2Visual1: "Dateien ziehen & ablegen",
      feature3Title: "Für Teamarbeit konzipiert",
      feature3Desc: "Teilen Sie Transkripte sofort mit Ihrem Team. Hören Sie Aufnahmen gemeinsam an, exportieren Sie Transkripte in verschiedenen Formaten und halten Sie alle mit durchsuchbaren Besprechungsarchiven auf dem gleichen Stand.",
      feature3Benefit1: "Transkripte mit jedem teilen",
      feature3Benefit2: "Originalaufnahmen anhören",
      feature3Benefit3: "Transkripte in mehreren Formaten exportieren",
      feature3Benefit4: "Teamweite durchsuchbare Archive",
      feature3Visual1: "Teammitglieder",
      feature3Visual2: "Unbegrenzte Zusammenarbeit",
      feature4Title: "Jedes Gespräch sofort finden",
      feature4Desc: "Durchsuchen Sie alle Ihre Besprechungen auf einmal. Finden Sie wichtige Entscheidungen vom letzten Quartal oder Kundenanforderungen von vor Monaten. Die KI-basierte Suche versteht Kontext, nicht nur Schlüsselwörter.",
      feature4Benefit1: "Alle Besprechungen auf einmal durchsuchen",
      feature4Benefit2: "KI versteht Kontext",
      feature4Benefit3: "Nach Sprecher oder Datum filtern",
      feature4SearchPlaceholder: "🔍 Suche: „Q4-Umsatzziele“",
      feature4SearchResults: "In 3 Besprechungen gefunden:",
      feature4Meeting1: "Vertriebsplanung - 15. Okt.",
      feature4Meeting1Text: "„...Ziele für Q4 auf 2 Mio. $ festgelegt...“",
      feature4Meeting2: "Vorstandssitzung - 20. Okt.",
      feature4Meeting2Text: "„...Q4-Umsatzprognosen...“",
      workflowTitle: "So transkribieren Sie eine",
      workflowSubtitle: "Ein nahtloser Workflow, der jeden wichtigen Moment erfasst",
      workflowStep1Title: "Aufnehmen oder Hochladen",
      workflowStep1Desc: "Nehmen Sie live auf oder laden Sie einfach Besprechungsaufnahmen von Zoom, Google Meet oder Microsoft Teams herunter",
      workflowStep2Title: "Automatische Transkription",
      workflowStep2Desc: "Unsere KI transkribiert die Aufnahme automatisch mit 96 % Genauigkeit in Minuten",
      workflowStep3Title: "Zusammenarbeiten",
      workflowStep3Desc: "Teilen, kommentieren und Aufgaben extrahieren",
      workflowStep4Title: "Suchen & Analysieren",
      workflowStep4Desc: "Erkenntnisse in allen Besprechungen finden",
      testimonialsTitle: "Teams lieben",
      testimonialsSubtitle: "Sehen Sie, wie Unternehmen ihre Meetingkultur verändern",
      testimonial1Text: "„Früher haben wir wichtige Details verpasst, jetzt haben wir ein durchsuchbares Archiv jeder Unterhaltung. Die direkte Aufnahmefunktion sorgt dafür, dass wir wichtige Diskussionen nie vergessen.“",
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktmanager, TechCorp",
      testimonial2Text: "„Otter erlaubte uns nur 10 Datei-Uploads pro Monat. Jetzt laden wir alle Kundengespräche sofort hoch. Ein Game Changer für das Follow-up unseres Vertriebsteams.“",
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Vertriebsleiterin, ConsultPro",
      testimonial3Text: "„Die Möglichkeit, monatelange Besprechungen zu durchsuchen, hat uns während der Auditierung gerettet. Jede Entscheidung und Genehmigung wurde in Sekunden gefunden.“",
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Verlieren Sie keine wichtigen Gespräche mehr",
      ctaSubtitle: "Schließen Sie sich Tausenden Teams an, die jede Besprechung mit unbegrenzter Transkription erfassen",
      ctaButton: "Kostenlos aufnehmen →",
        featuresTitle2: "Besprechung",
        workflowTitle2: "Zoom-Aufnahme in Text",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Für Lehrkräfte & Pädagogen",
      heroTitle1: "Lernen für",
      heroTitle2: "Alle zugänglich machen",
      heroSubtitle: "Fügen Sie einfach YouTube-Links ein, um sofortige Transkripte mit automatisch generierten Untertiteln zu erhalten. Verwandeln Sie Vorlesungen, Tutorials und Lehrvideos in durchsuchbare, zugängliche Inhalte, von denen jeder Schüler lernen kann.",
      heroCtaPrimary: "Kostenlos testen - Keine Kreditkarte",
      heroCtaSecondary: "Demo ansehen",
      stats1Number: "1-Klick",
      stats1Label: "YouTube-Transkription",
      stats2Number: "100+",
      stats2Label: "Unterstützte Sprachen",
      stats3Number: "∞",
      stats3Label: "Unbegrenzte Videos",
      stats4Number: "96%",
      stats4Label: "Genauigkeitsrate",
      featuresTitle: "Alles, was Pädagogen benötigen für",
      featuresSubtitle: "Von YouTube-Vorlesungen bis aufgezeichnete Kurse – machen Sie alle Ihre Inhalte zugänglich",
      feature1Title: "Sofortige YouTube- & Plattform-Links",
      feature1Desc: "Fügen Sie einfach einen Video-Link ein und erhalten Sie sofortige Transkripte. Funktioniert mit YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive und mehr. Kein Herunterladen, kein Warten.",
      feature1Point1: "Direkte Link-Transkription – keine Downloads nötig",
      feature1Point2: "Unterstützung für alle großen Plattformen",
      feature1Point3: "Ganze Playlists auf einmal verarbeiten",
      feature1Point4: "Funktioniert mit privaten Videos (mit Berechtigung)",
      feature2Title: "Automatisch erzeugte Untertitel & Beschriftungen",
      feature2Desc: "Erstellen Sie sofort genaue Untertitel für alle Ihre Lehrvideos. Machen Sie Inhalte zugänglich für Studierende mit Hörbehinderungen, Nicht-Muttersprachler oder solche, die lieber mitlesen.",
      feature2Point1: "SRT-, VTT- und TXT-Exportformate",
      feature2Point2: "Wortgenaue Zeitstempel für perfekte Synchronisation",
      feature2Point3: "Untertitel einfach bearbeiten und anpassen",
      feature2Point4: "Direkt zurück zu YouTube hochladen",
      feature2Visual1: "Sprachübersetzungen",
      feature2Visual2: "Machen Sie Ihre Inhalte weltweit zugänglich",
      feature3Title: "Nach Kursen & Kategorien organisieren",
      feature3Desc: "Erstellen Sie Ordner, um Ihre Transkripte nach Kurs, Fach oder Semester zu organisieren. Halten Sie alle Ihre Lehrinhalte übersichtlich kategorisiert und leicht durchsuchbar. Bauen Sie eine umfassende Bibliothek zugänglicher Kursmaterialien auf.",
      feature3Point1: "Erstellen Sie unbegrenzte Ordner und Unterordner",
      feature3Point2: "Videos nach Thema oder Schwierigkeitsgrad taggen",
      feature3Point3: "Mehrere Transkripte stapelweise organisieren",
      feature3Point4: "Sofort in allen Inhalten suchen",
      feature3VisualTitle: "Ihre Kursbibliothek",
      feature3Folder1: "Mathematik 101",
      feature3Folder2: "Physikvorlesungen",
      feature3Folder3: "Biologie-Laborexperimente",
      feature3Folder4: "Geschichtsdokumentationen",
      feature3Folder5: "Sprachenlernen",
      feature4Title: "KI-Transkription von Audiodateien zu Lernhilfen",
      feature4Desc: "Teilen Sie nicht nur Aufnahmen. Transkribieren Sie Vorlesungen automatisch in Text und andere Audiodateien in detaillierte Lernhilfen, komplett mit Zusammenfassungen und Schlüsselkonzepten für effektive Wiederholung. Export in TXT-, DOCX- oder PDF-Formaten.",
      feature4Point1: "TXT für einfache Textbearbeitung",
      feature4Point2: "DOCX für formatierte Dokumente",
      feature4Point3: "PDF für einfaches Teilen und Drucken",
      feature4Point4: "Mehrere Dateien stapelweise exportieren",
      workflowTitle: "So funktioniert's:",
      workflowSubtitle: "Vom Video-Link zum zugänglichen Transkript und Lernmaterial in Minuten",
      workflowStep1Title: "Ihre Vorlesung hochladen",
      workflowStep1Desc: "Laden Sie jede Audio- oder Videodatei hoch (MP3, MP4, WAV) oder fügen Sie einen YouTube-Link ein",
      workflowStep2Title: "KI-Transkription",
      workflowStep2Desc: "Unsere KI transkribiert das Audio, trennt Sprecher und identifiziert Schlüsselthemen",
      workflowStep3Title: "Untertitel generieren",
      workflowStep3Desc: "Automatisch perfekt synchronisierte Untertitel erstellen",
      workflowStep4Title: "Studienleitfaden exportieren",
      workflowStep4Desc: "Laden Sie den Text oder die Zusammenfassung herunter oder exportieren Sie sie, um Ihren endgültigen Studienleitfaden zu erstellen",
      useCasesTitle: "Perfekt für jeden",
      useCasesSubtitle: "Sehen Sie, wie Pädagogen NeverCap nutzen, um das Lernen zu verbessern",
      useCase1Title: "Aufgezeichnete Vorlesungen",
      useCase1Text: "Transkribieren Sie ganze Semester aufgezeichneter Vorlesungen. Studierende können nach bestimmten Themen suchen, Schlüsselkonzepte wiederholen und wichtige Informationen nie verpassen.",
      useCase2Title: "Online-Kurse",
      useCase2Text: "Machen Sie Ihre Online-Kurse für internationale Studierende zugänglich mit Übersetzungen in 100+ Sprachen. Steigern Sie die Einschreibungen und Zufriedenheit.",
      useCase3Title: "Studienmaterialien",
      useCase3Text: "Nutzen Sie KI, um Audiodateien aus Video-Tutorials und Vorlesungen in Studienleitfäden zu transkribieren. Perfekt für Studierende, die lieber lesen oder Inhalte schnell mit durchsuchbarem Text wiederholen möchten.",
      useCase4Title: "Barrierefreiheit",
      useCase4Text: "Erfüllen Sie die Anforderungen an Barrierefreiheit, indem Sie Untertitel und Transkripte für alle Videoinhalte bereitstellen. Gewährleisten Sie gleichen Zugang für alle Studierenden.",
      useCase5Title: "Flipped Classroom",
      useCase5Text: "Teilen Sie Video-Vorlesungen mit Transkripten vor dem Unterricht. Studierende können in ihrem eigenen Tempo wiederholen und vorbereitet zu Diskussionen erscheinen.",
      useCase6Title: "Forschung & Zitate",
      useCase6Text: "Helfen Sie Studierenden, Videoquellen mit Zeitstempeln korrekt zu zitieren. Perfekt für Forschungsprojekte und akademische Arbeiten.",
      testimonialTitle: "Vertrauen von",
      testimonialSubtitle: "Sehen Sie, warum Lehrer weltweit NeverCap wählen",
      testimonialText: '"Ich nutze NeverCap, um meinen gesamten YouTube-Kanal mit Mathe-Tutorials zu transkribieren. Was mit anderen Diensten Wochen dauerte, dauert jetzt Stunden. Die Möglichkeit, Links direkt einzufügen und sofort Transkripte zu erhalten, hat die Erstellung barrierefreier Inhalte revolutioniert. Meine internationalen Studierenden lieben besonders die mehrsprachigen Untertitel!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Mathematikprofessorin, Online-Pädagogin",
      ctaTitle: "Machen Sie alle Ihre Bildungsinhalte zugänglich",
      ctaSubtitle: "Schließen Sie sich Tausenden Pädagogen an, die wirklich unbegrenzte Transkription nutzen",
      ctaButton: "NeverCap kostenlos testen",
        featuresTitle2: "Video-Transkription",
        grid: "Audiodatei zu Lernhilfe",
        useCasesTitle2: "Bildungsbedarf",
        testimonialTitle2: "50.000+ Pädagogen"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "YouTube-Videos als MP4 herunterladen",
        "placeholder": "Suche oder füge deinen YouTube-Link hier ein",
        "clear_icon": "Eingabe löschen",
        "Download": "Herunterladen",
        "loading_text": "Der Link wird verarbeitet. Bleib auf der Seite.",
        "howToDownload": "Wie wird heruntergeladen?",
        "tutorial": "Tutorial ansehen"
      },
      part2: {
        "title": "So wandelst du ein YouTube-Video in 3 einfachen Schritten in eine herunterladbare MP4-Datei um",
        "steps": [
                {
                  title: "URL kopieren",
                  content: "Öffne das gewünschte YouTube-Video und kopiere den Link aus der Adressleiste deines Browsers."
                },
                {
                  title: "Link einfügen",
                  content: "Gehe zu deinem Video-Downloader und füge die URL in das Eingabefeld ein."
                },
                {
                  title: "MP4 herunterladen",
                  content: "Nach der Verarbeitung klicke auf den Download-Button, um deine MP4-Datei zu speichern."
                }
              ]
      },
      part3: {
        content: [
                "Musstest du schon mal YouTube-Videos offline schauen?",
                "Ob in der U-Bahn, im Flugzeug, beim Lernen wichtiger Tutorials, beim Vertiefen von Fähigkeiten oder beim Archivieren wichtiger Videos – zuverlässiger Offline-Zugriff ist oft ein Problem. Hier glänzt unser Downloader.",
                "Der Downloader ermöglicht dir, YouTube-Videos schnell und einfach in MP4 umzuwandeln. Speichere sie auf deinem Gerät und schau sie jederzeit an.",
                "Der Vorgang ist schnell, einfach und problemlos. Nach dem Download genieße deine Lieblingsvideos wann und wo du willst – ohne Internet."
              ]
      },
      part4: {
        content: ["Hier sind die 5 wichtigsten Vorteile des Herunterladens", "von YouTube-Videos als MP4-Dateien"],
        list: [
                {
                  title: "Datenkosten sparen:",
                  content: "Normalerweise verbraucht das Ansehen von YouTube-Videos viel mobiles Datenvolumen. Durch Offline-Downloads vermeidest du diese unnötigen Kosten."
                },
                {
                  title: "Überall und jederzeit ansehen:",
                  content: "Genieße deine Videos ohne Unterbrechungen, selbst bei schlechter Internetverbindung. Kein lästiges Buffern mehr."
                },
                {
                  title: "Einfaches Archivieren & Speichern:",
                  content: "Das Speichern von Videos als MP4 erleichtert das Erstellen einer persönlichen Sammlung, besonders für wertvolle oder wichtige Inhalte."
                },
                {
                  title: "Einfacher teilen:",
                  content: "Eine MP4-Datei zu teilen ist viel bequemer als einen Link zu senden. Du kannst die Videodatei direkt über Apps wie WhatsApp oder Instagram versenden, ohne YouTube öffnen zu müssen."
                },
                {
                  title: "Sofortiges Ansehen, gemeinsame Momente:",
                  content: "Möchtest du Freunden oder Familie ein Lieblingsvideo zeigen? Mit der heruntergeladenen MP4 könnt ihr es sofort gemeinsam ansehen, ohne auf das Laden warten zu müssen."
                }
              ]
      },
      part5: {
        title: "Warum unser Downloader heraussticht",
        cards: [
                {
                  title: "Ein-Klick-Einfachheit",
                  content: "Mühelose Einrichtung und intuitive Bedienung."
                },
                {
                  title: "Blitzschnell, unbegrenzt",
                  content: "Konvertiere und lade mit Höchstgeschwindigkeit herunter – keine Begrenzungen."
                },
                {
                  title: "Sofortige Konvertierung",
                  content: "Verarbeite deine Dateien sofort, ohne Wartezeit."
                },
                {
                  title: "Keine Werbung, keine Ablenkungen",
                  content: "Genieße eine saubere Oberfläche ohne Pop-ups, Banner oder Unterbrechungen – nur nahtlose Videokonvertierung."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Originalqualität garantiert",
                  content: "Deine Downloads behalten die volle Auflösung des Originalvideos für eine perfekte Wiedergabe."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Funktioniert überall",
                  content: "Voll kompatibel mit jedem Browser und jedem Gerät."
                }
              ]
      },
      part6: {
        title: ["Maximiere deine YouTube-Video-Downloads", "Mit dem Downloader"],
        content: [
                "Einfache YouTube-zu-MP4-Konvertierung: Schnell, einfach & kostenlos.",
                "Darin sind wir spitze. Unsere benutzerfreundliche Oberfläche ist für alle gemacht – keine technischen Kenntnisse nötig. Egal auf welchem Level, du kannst Videos sofort konvertieren. Keine Anmeldung erforderlich: Hol dir direkt, was du brauchst.",
                "Sei unbesorgt – deine heruntergeladenen MP4s behalten die Originalqualität und Klarheit, genau wie auf YouTube.",
                "Funktioniert überall, wo du arbeitest. Voll kompatibel mit allen gängigen Plattformen und Geräten. Egal ob Windows, macOS, Linux, Android oder iOS – mit Smartphone, Tablet oder Desktop kannst du Videos problemlos herunterladen."
              ]
      },
      part7: {
        title: "Wichtige Fragen zum Herunterladen von YouTube-Videos",
        list: [
                {
                  question: "Kann ich ein YouTube-Video herunterladen, wenn es urheberrechtlich geschützt ist?",
                  answer: "Das Herunterladen urheberrechtlich geschützter YouTube-Videos ohne Erlaubnis des Rechteinhabers ist illegal."
                },
                {
                  question: "Ist dieses Download-Tool sicher?",
                  answer: "Ja, es ist sicher und vertrauenswürdig. Wir benötigen keine persönlichen Daten und ergreifen strenge Maßnahmen gegen Viren. Wir raten dir, beim Herunterladen von Dateien aus dem Internet stets vorsichtig zu sein: Vermeide das Klicken auf verdächtige Links oder das Herunterladen fragwürdiger Dateien."
                },
                {
                  question: "Welche Sprachen unterstützt der YouTube-zu-MP4-Download?",
                  answer: "Unser Service unterstützt das Herunterladen von YouTube-Videos in allen gängigen Sprachen."
                },
                {
                  question: "Welche Faktoren beeinflussen die Download-Zeit eines YouTube-Videos?",
                  answer: "Während wir die schnellstmögliche Download-Erfahrung gewährleisten, hängt die Download-Zeit auch von Faktoren wie der Videolänge und deiner Internetgeschwindigkeit ab."
                },
                {
                  question: "Wo wird eine MP4-Videodatei auf meinem Smartphone gespeichert?",
                  answer: 'Nach dem Herunterladen einer MP4-Datei auf Ihrem Smartphone finden Sie diese normalerweise im Ordner "Downloads" der Dateimanager-App Ihres Geräts.'
                },
                {
                  question: "Verschlechtert das Herunterladen eines YouTube-Videos als MP4 die Videoqualität?",
                  answer: "Nein. Das Herunterladen von YouTube-Videos als MP4 mit unserem Tool behält die Originalqualität bei. Der Konvertierungsprozess bewahrt die Quellqualität, sodass du das gleiche Ansehen-Erlebnis wie auf YouTube hast."
                }
              ]
      },
        err1: "YouTube-Link-Formatfehler.",
        err2: "Entschuldigung! Wir unterstützen derzeit nur YouTube-Links. Falls Sie Unterstützung für andere Seiten benötigen, informieren wir Sie, sobald wir diese hinzufügen.",
        videoDownload: {
              title: "YouTube-Videos als MP4 herunterladen. Kostenlos, schnell und ohne Werbung.",
              description: "Vielen Dank, dass Sie unseren Service gewählt haben! Wir schätzen Ihr Vertrauen und hoffen, es hat Ihnen gefallen. Es würde uns sehr helfen, wenn Sie unsere Website mit Ihren Freunden teilen würden.",
              downloadButton: "Herunterladen",
              downloadError: "Downloadfehler."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Branchenführende KI-Technologie",
      "title": "Über",
      "highlighted_text": "NeverCap",
      "description": "Unsere Mission ist es, die präzisesten Audio- und Video-Transkriptionsdienste anzubieten. Mit branchenführender KI-Technologie erreichen wir Transkriptionsgenauigkeiten von über 96%. Bei einigen Hauptsprachen können wir durch technische Optimierung sogar 99% Genauigkeit erreichen."
    },
    Stats: {
      "title": "Unser",
      "highlighted_text": "Impact",
      "subtitle": "Globale Kommunikation mit modernster KI-Technologie ermöglichen",
      "metrics": [
            {
              "value": "96%+",
              "label": "Genauigkeitsrate",
              "description": "Branchenführende Transkriptionsgenauigkeit mit fortschrittlicher KI"
            },
            {
              "value": "100+",
              "label": "Unterstützte Sprachen",
              "description": "Spracherkennung für globale Inhalte"
            },
            {
              "value": "249+",
              "label": "Übersetzungssprachen",
              "description": "Transkribierten Text in nahezu jede Sprache übersetzen"
            }
          ]
    },
    Mission: {
      "title": "Warum",
      "highlighted_text": "NeverCap wählen",
      "subtitle": "Wir glauben daran, Sprachbarrieren abzubauen und Inhalte für alle zugänglich zu machen",
      "features": [
            {
              "icon": "🎯",
              "title": "Unübertroffene Genauigkeit",
              "description": "Unsere KI-Modelle werden kontinuierlich verbessert, um Transkriptionsgenauigkeiten von über 96% zu liefern, bei einigen Hauptsprachen sogar bis zu 99% durch fortgeschrittene Optimierung."
            },
            {
              "icon": "🌍",
              "title": "Globale Sprachunterstützung",
              "description": "Unterstützung für über 100 Sprachen in der Spracherkennung und Übersetzungsmöglichkeiten für mehr als 249 Sprachen, um Ihre Inhalte wirklich global zu machen."
            },
            {
              "icon": "⚡",
              "title": "Blitzschnelle Verarbeitung",
              "description": "Verarbeiten Sie Stunden an Audio- und Videoinhalten in Minuten, nicht Stunden. Unsere optimierte KI-Pipeline sorgt für schnelle Transkriptionen ohne Qualitätseinbußen."
            },
            {
              "icon": "🔒",
              "title": "Unternehmensgrade Sicherheit",
              "description": "Ihre Datensicherheit ist unsere Priorität. Wir verwenden branchenübliche Verschlüsselung und halten uns an globale Datenschutzbestimmungen, um Ihre Inhalte sicher und vertraulich zu halten."
            }
          ]
    },
    Company: {
      "title": "Firmen",
      "highlighted_text": "Informationen",
      "subtitle": "Kontaktieren Sie uns bei Fragen oder Support",
      "details": [
            {
              "label": "Firmenname",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Hauptsitz",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Vereinigte Staaten"]
            },
            {
              "label": "Kontakt",
              "value": ["E-Mail", "Support rund um die Uhr verfügbar"]
            }
          ]
    },
    CTA: {
      "title": "Bereit für den Unterschied?",
      "subtitle": "Schließen Sie sich Tausenden Profis an, die NeverCap für ihre Transkriptionsbedürfnisse vertrauen",
      "button": "NeverCap kostenlos testen →",
      "disclaimer": "Keine Kreditkarte erforderlich • In Sekunden mit der Transkription beginnen"
    }
  },
  Privacy: {
    title: "Datenschutz",
    titleGradient: "Richtlinie",
    subtitle: "Erfahren Sie, wie wir Ihre persönlichen Daten sammeln, nutzen und schützen",
    "lastUpdated": "Zuletzt aktualisiert: {date}",
    "lastUpdatedDate": "21. Juli 2025",
    "privacyPolicyTitle": "Datenschutzrichtlinie",
    "policyAgreement": "Bitte lesen Sie diese Datenschutzrichtlinie sorgfältig und stellen Sie sicher, dass Sie sie verstehen. Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Datenschutzrichtlinie einverstanden. Wenn Sie nicht einverstanden sind, dass wir Ihre persönlichen Daten gemäß dieser Richtlinie verwenden, müssen Sie die Nutzung unserer Dienste sofort beenden.",
    "policyOverview": "In dieser Richtlinie legen wir dar: welche Daten wir sammeln und warum; wie Ihre Daten behandelt werden; und Ihre Rechte in Bezug auf Ihre Daten. Wir verkaufen Ihre Daten nicht.",
    "scopeTitle": "1. Geltungsbereich dieser Datenschutzrichtlinie",
    "scopeDescription": "Diese Datenschutzrichtlinie gilt nur für unsere Erhebung und Verarbeitung von Informationen über Nutzer der Dienste. Sie gilt nicht für Dienste, Websites oder Software von Dritten, die mit uns verlinkt sind (unabhängig davon, ob wir diese Links bereitstellen oder andere Nutzer sie teilen), noch für Inhalte, Daten, Anwendungen oder Materialien von Dritten. Wir empfehlen Ihnen, die Datenschutzrichtlinien jeder Website oder Software eines Drittanbieters zu prüfen, bevor Sie ihnen Informationen bereitstellen.",
    "collectionTitle": "2. Was wir sammeln und warum",
    "collectionPrinciple": "Unser Leitprinzip ist, nur das zu sammeln, was wir benötigen. In der Praxis bedeutet das:",
    "identityTitle": "2.1 Identität & Zugang",
    "identityDescription": "Wenn Sie sich für eines unserer Produkte anmelden, fragen wir nach Identifikationsdaten wie Ihrem Namen und Ihrer E-Mail-Adresse. Dies dient der Bereitstellung wesentlicher Produktfunktionen und ermöglicht es uns, Ihnen Produktaktualisierungen und andere wichtige Informationen zuzusenden.",
    "billingTitle": "2.2 Zahlungsinformationen",
    "billingDescription": "Wenn Sie sich für ein kostenpflichtiges Produkt anmelden, werden Sie aufgefordert, Ihre Zahlungsinformationen und Rechnungsadresse anzugeben. Zahlungsinformationen werden direkt an unseren Zahlungsabwickler übermittelt und gelangen nicht auf unsere Server.",
    "productInteractionsTitle": "2.3 Produktinteraktionen",
    "productInteractionsDescription": "Wir speichern auf unseren Servern die Inhalte, die Sie hochladen, empfangen oder in Ihren Produktkonten verwalten. Sofern Sie diese Inhalte nicht löschen, behalten wir sie, solange Ihr Konto aktiv ist.",
    "websiteInteractionsTitle": "2.4 Website-Interaktionen",
    "websiteInteractionsDescription": "Wir sammeln Informationen über Ihre Browseraktivität zu Analyse- und Statistikzwecken, z. B. für Conversion-Rate-Tests und Experimente mit neuen Produktdesigns. Dazu gehören beispielsweise Ihre Browser- und Betriebssystemversionen, Ihre IP-Adresse, welche Webseiten Sie besucht haben und wie lange sie zum Laden benötigten, sowie welche Website Sie zu uns weitergeleitet hat. Wenn Sie ein Konto haben und angemeldet sind, werden diese Webanalysedaten Ihrer IP-Adresse und Ihrem Benutzerkonto zugeordnet, bis Ihr Konto nicht mehr aktiv ist.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Wir verwenden auch persistente First-Party-Cookies und einige Third-Party-Cookies, um bestimmte Präferenzen zu speichern, die Nutzung unserer Anwendungen zu erleichtern, A/B-Tests durchzuführen und Analysen zu unterstützen.",
    "cookiesDescription2": "Ein Cookie ist ein Textstück, das von Ihrem Browser gespeichert wird. Es kann helfen, sich an Anmeldeinformationen und Website-Einstellungen zu erinnern. Es können auch Informationen wie Ihr Browsertyp, Betriebssystem, besuchte Webseiten, Verweildauer, angesehene Inhalte und andere Clickstream-Daten gesammelt werden. Sie können die Cookie-Einstellungen anpassen und einzelne Cookies in Ihren Browser-Einstellungen akzeptieren oder blockieren, obwohl unsere Apps nicht funktionieren und andere Aspekte unseres Dienstes möglicherweise nicht ordnungsgemäß arbeiten, wenn Sie Cookies deaktivieren.",
    "correspondenceTitle": "2.6 Freiwillige Korrespondenz",
    "correspondenceDescription": "Wenn Sie uns eine Frage per E-Mail stellen oder um Hilfe bitten, bewahren wir diese Korrespondenz einschließlich Ihrer E-Mail-Adresse auf, damit wir auf eine Historie vergangener Korrespondenz zurückgreifen können, falls Sie sich in Zukunft erneut melden.",
    "accessTitle": "3. Wann wir auf Ihre Daten zugreifen oder sie teilen",
    "accessDescription1": "Um die von Ihnen angeforderten Produkte oder Dienste bereitzustellen. Wir nutzen einige Subunternehmer, die uns bei der Ausführung unserer Anwendungen und der Bereitstellung der Dienste unterstützen. Dazu gehören Cloud- und Analyseanbieter.",
    "accessDescription2": "Um Missbrauch zu untersuchen, zu verhindern oder Maßnahmen dagegen zu ergreifen. Der Zugriff auf das Konto eines Kunden bei der Untersuchung möglichen Missbrauchs ist das letzte Mittel. Wir möchten die Privatsphäre und Sicherheit unserer Kunden und der Personen, die uns Probleme melden, schützen und bemühen uns, diese Verantwortlichkeiten während des gesamten Prozesses auszugleichen. Wenn wir feststellen, dass Sie unsere Produkte für einen eingeschränkten Zweck nutzen, werden wir die erforderlichen Maßnahmen ergreifen, einschließlich der Benachrichtigung der zuständigen Behörden, falls gerechtfertigt.",
    "accessDescription3": "Wenn dies nach geltendem Recht erforderlich ist.",
    "dataRequests": "Anfragen zu Nutzerdaten. Unsere Richtlinie ist, nicht auf behördliche Anfragen zu Nutzerdaten zu reagieren, es sei denn, wir sind durch ein gesetzliches Verfahren dazu gezwungen oder in begrenzten Fällen einer Notfallanfrage. Wenn US-Strafverfolgungsbehörden jedoch einen notwendigen Haftbefehl, eine strafrechtliche Vorladung oder eine gerichtliche Anordnung haben, die uns zur Weitergabe von Daten verpflichtet, müssen wir dieser Folge leisten. Ebenso werden wir nur auf Anfragen von Behörden außerhalb der USA reagieren, wenn wir durch die US-Regierung im Rahmen eines Rechtshilfeabkommens dazu verpflichtet werden. Es ist unsere Richtlinie, betroffene Nutzer vor der Weitergabe von Daten zu benachrichtigen, es sei denn, wir sind gesetzlich daran gehindert, und außer in einigen Notfällen.",
    "preservationRequests": "Aufbewahrungsanfragen. Ebenso ist es unsere Richtlinie, Anfragen zur Datenaufbewahrung nur nachzukommen, wenn wir durch den US Federal Stored Communications Act, 18 U.S.C. Section 2703(f), oder durch eine ordnungsgemäß zugestellte US-Vorladung in Zivilsachen dazu verpflichtet werden. Wir geben aufbewahrte Daten nicht weiter, es sei denn, dies ist gesetzlich vorgeschrieben oder durch eine gerichtliche Anordnung, gegen die wir keinen Einspruch einlegen, erzwungen. Darüber hinaus werden wir alle aufbewahrten Kopien von Kundendaten am Ende der Aufbewahrungsfrist vernichten, es sei denn, wir erhalten vor Ablauf dieser Frist einen ordnungsgemäßen Haftbefehl, eine gerichtliche Anordnung oder eine Vorladung.",
    "taxAudits": "Wenn wir von einer Steuerbehörde geprüft werden, können wir verpflichtet sein, abrechnungsrelevante Informationen weiterzugeben. In diesem Fall geben wir nur das erforderliche Minimum weiter, wie Rechnungsadressen und Steuerbefreiungsinformationen.",
    "securityTitle": "4. Wie wir Ihre Daten sichern",
    "securityDescription": "Alle Daten werden bei der Übertragung von unseren Servern an Ihren Browser über SSL/TLS verschlüsselt.",
    "deletionTitle": "5. Was passiert, wenn Sie Inhalte löschen",
    "deletionDescription": "Wenn Sie Inhalte löschen, sind diese sofort nicht mehr zugänglich.",
    "locationTitle": "6. Standort der Website und der Daten",
    "locationDescription": "Unsere Produkte und anderen Web-Eigenschaften werden in den USA betrieben. Wenn Sie sich in der Europäischen Union, im Vereinigten Königreich oder außerhalb der USA befinden, beachten Sie bitte, dass alle Informationen, die Sie uns bereitstellen, in die USA übertragen und dort gespeichert werden. Durch die Nutzung unserer Websites oder Dienste und/oder die Bereitstellung Ihrer persönlichen Daten erklären Sie sich mit dieser Übertragung einverstanden.",
    "childrenTitle": "7. Datenschutz für Kinder",
    "updatesTitle": "8. Aktualisierungen dieser Datenschutzrichtlinie",
    "updatesDescription": "Wir können diese Richtlinie bei Bedarf aktualisieren, um relevanten Vorschriften zu entsprechen und neue Praktiken zu berücksichtigen. Wenn wir eine wesentliche Änderung an unseren Richtlinien vornehmen, aktualisieren wir das Datum oben auf dieser Seite.",
    "contactTitle": "9. Kontakt",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "unter",
      policyDescription: 'Diese Richtlinie beschreibt, wie NeverCap (im Folgenden als \"NeverCap\", \"uns\", \"wir\", \"uns\" bezeichnet) Ihre persönlichen Daten erhebt, nutzt und offenlegt, wenn Sie unsere Dienste, Websites ({url}) und Software (gemeinsam die \"Dienste\") nutzen.',
      childrenDescription: "Die Dienste richten sich nicht an Kinder, und wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie unter 13 Jahre alt sind, übermitteln Sie bitte keine persönlichen Daten über die Dienste. Wenn Sie der Meinung sind, dass ein Kind uns entgegen dieser Richtlinie personenbezogene Daten bereitgestellt hat, kontaktieren Sie uns bitte unter {at} {email}.",
      contactDescription: "Wenn Sie Fragen, Kommentare oder Beschwerden zu unserer Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter {at} {email}, und wir werden uns bemühen, Ihre Beschwerde so schnell wie möglich zu bearbeiten."
},
  TermsOfUse: {
    title: "Nutzungsbedingungen",
    titleGradient: "Dienst",
    subtitle: "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienste nutzen",
    "lastUpdated": "Zuletzt aktualisiert: {date}",
    "lastUpdatedDate": "21. Juli 2025",
    "termsOfServiceTitle": "Nutzungsbedingungen",
    "thankYou": "Vielen Dank, dass Sie unsere Produkte nutzen!",
    "companyDefinition": "Wenn wir in diesem Dokument „Company“, „we“, „our“ oder „us“ sagen, beziehen wir uns auf NeverCap.",
    "servicesDefinition": "Wenn wir „Services“ sagen, meinen wir jedes Produkt, das von NeverCap erstellt und gewartet wird, egal ob es in einem Webbrowser, einer Desktop-Anwendung, einer mobilen Anwendung oder einem anderen Format bereitgestellt wird.",
    "termsUpdate": "Wir können diese Nutzungsbedingungen in Zukunft aktualisieren. Typischerweise dienen diese Änderungen dazu, einige dieser Bedingungen durch Verlinkung auf eine erweiterte, verwandte Richtlinie zu klären. Immer wenn wir eine signifikante Änderung unserer Richtlinien vornehmen, werden wir das Datum oben auf dieser Seite aktualisieren und angemessene Schritte unternehmen, um Kontoinhaber zu benachrichtigen.",
    "acceptanceTitle": "1. Annahme der Vereinbarung",
    "acceptanceDescription1": "Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Vereinbarung einverstanden, die damit zu einem bindenden Vertrag zwischen Ihnen und NeverCap wird. Sie bestätigen, dass Sie rechtlich in der Lage sind, diese Bedingungen zu akzeptieren, und versichern, dass Sie volljährig sind, um einen bindenden Vertrag abzuschließen. Die Annahme durch NeverCap ist ausdrücklich von Ihrer Zustimmung zu allen Bedingungen dieser Vereinbarung abhängig.",
    "eligibilityRequirement": "Die Dienste sind nicht für Personen unter 18 Jahren bestimmt und sollten nicht von diesen genutzt werden. Durch die Nutzung der Dienste bestätigen und garantieren Sie, dass Sie die genannte Altersvoraussetzung erfüllen.",
    "userResponsibility": "Die Begriffe „you“, „your“, „yourself“ schließen auch Ihre Mitarbeiter, Vertreter, Geschäftspartner und alle anderen Personen ein, denen Sie über Ihr Konto Zugang zu den Diensten gewähren. Sie sind dafür verantwortlich, sicherzustellen, dass alle Personen, die über Ihr Konto auf die Dienste zugreifen, diese Bedingungen kennen und einhalten.",
    "termsRevision": "NeverCap behält sich das Recht vor, diese Bedingungen nach eigenem Ermessen von Zeit zu Zeit zu überarbeiten und zu aktualisieren. Alle Änderungen treten sofort nach der Veröffentlichung in Kraft. Ihre fortgesetzte Nutzung der Dienste nach der Veröffentlichung der überarbeiteten Bedingungen bedeutet, dass Sie die Änderungen akzeptieren und ihnen zustimmen. Sie sollten diese Seite regelmäßig überprüfen, um sich über etwaige Änderungen zu informieren, da diese für Sie bindend sind.",
    "servicesTitle": "2. Dienste von NeverCap",
    "servicesDescription1": "Unsere Dienste ermöglichen es Nutzern, Sprachgespräche in transkribierten Text umzuwandeln, der durchsucht, übersetzt und mit anderen geteilt werden kann.",
    "servicesOptions": "Sie können wählen, ob Sie die kostenlose Version der Dienste („Free Services“) oder die abonnementbasierte, kostenpflichtige Version der Dienste nutzen möchten, für die Sie möglicherweise Gebühren zahlen müssen (die „Paid Services“).",
    "servicesAccess": "Wir werden Ihnen die Dienste zur Verfügung stellen. Sie sind dafür verantwortlich, alle notwendigen Vorkehrungen zu treffen, um Zugang zu den Diensten zu erhalten.",
    "accountTermsTitle": "3. Kontobedingungen",
    "accountSecurity": "Sie sind für die Sicherheit Ihres Kontos verantwortlich. Das Unternehmen kann und wird nicht für Verluste oder Schäden haftbar gemacht werden, die aus Ihrer Nichteinhaltung dieser Sicherheitspflicht resultieren.",
    "lawfulUse": "Sie dürfen die Dienste nicht für unlautere, unethische oder unmoralische Zwecke nutzen.",
    "contentResponsibility": "Sie sind für alle Inhalte und Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden. Dazu gehören Inhalte, die von anderen gepostet werden, die entweder: (a) Zugriff auf Ihre Anmeldedaten haben; oder (b) eigene Anmeldungen unter Ihrem Konto haben.",
    "humanRequirement": "Sie müssen eine natürliche Person sein. Konten, die von „Bots“ oder anderen automatisierten Methoden registriert werden, sind nicht erlaubt.",
    "paymentTitle": "4. Zahlung, Rückerstattungen und Planänderungen",
    "freeTrial": "Bei kostenpflichtigen Diensten, die eine kostenlose Testversion anbieten, erklären wir die Dauer der Testphase bei der Anmeldung. Nach der Testphase müssen Sie im Voraus bezahlen, um den Dienst weiter nutzen zu können. Wenn Sie nicht bezahlen, enden diese Dienste.",
    "upgradePolicy": "Wenn Sie von einem kostenlosen Plan auf einen kostenpflichtigen Plan wechseln, belasten wir Ihre Karte sofort und Ihr Abrechnungszyklus beginnt am Tag des Upgrades.",
    "taxes": "Alle Gebühren sind exklusive aller Steuern, Abgaben oder Zölle, die von Steuerbehörden erhoben werden. Falls erforderlich, werden wir diese Steuern im Namen der Steuerbehörde einziehen und an diese abführen. Andernfalls sind Sie für die Zahlung aller Steuern, Abgaben oder Zölle verantwortlich.",
    "refunds": "Alle Käufe sind nicht erstattungsfähig. Sie können kostenpflichtige Dienste jederzeit durch Anmeldung in Ihrem Konto kündigen. Für kostenpflichtige Abonnements tritt Ihre Kündigung am Ende der aktuellen Laufzeit in Kraft, sofern nicht anders angegeben.",
    "cancellationTitle": "5. Kündigung und Beendigung",
    "cancellationPolicy": "Wenn Sie den Dienst vor Ablauf der bereits bezahlten Zeit kündigen, tritt Ihre Kündigung sofort in Kraft und Sie werden nicht erneut belastet. Wir berechnen nicht automatisch ungenutzte Zeit im letzten Abrechnungszyklus anteilig zurück.",
    "terminationRights": "Wir behalten uns das Recht vor, Ihr Konto jederzeit aus beliebigem Grund zu sperren oder zu kündigen und jede aktuelle oder zukünftige Nutzung unserer Dienste zu verweigern. Eine Sperrung bedeutet, dass Sie nicht auf das Konto oder dessen Inhalte zugreifen können. Eine Kündigung führt darüber hinaus zur Löschung Ihres Kontos oder Ihres Zugriffs darauf sowie zum Verlust aller Inhalte in Ihrem Konto. Wir behalten uns auch das Recht vor, die Nutzung unserer Dienste jederzeit aus beliebigem Grund zu verweigern. Diese Klausel haben wir, weil statistisch gesehen unter Hunderttausenden von Konten mindestens eines ist, das etwas Unrechtes tut.",
    "abusePolicy": "Verbale, physische, schriftliche oder andere Misshandlungen (einschließlich Drohungen von Misshandlung oder Vergeltung) von Mitarbeitern oder Führungskräften des Unternehmens können zur sofortigen Kündigung Ihres Kontos führen.",
    "submissionsTitle": "6. Einreichungen",
    "submissionsDescription": "Sie bestätigen und erklären sich damit einverstanden, dass alle Fragen, Kommentare, Vorschläge, Ideen, Feedback oder andere Informationen bezüglich der Website („Einreichungen“), die Sie uns zur Verfügung stellen, nicht vertraulich sind und unser alleiniges Eigentum werden. Wir besitzen alle exklusiven Rechte, einschließlich aller geistigen Eigentumsrechte, und sind berechtigt, diese Einreichungen ohne Anerkennung oder Entschädigung an Sie für jeden rechtmäßigen Zweck, kommerziell oder anderweitig, uneingeschränkt zu nutzen und zu verbreiten. Sie verzichten hiermit auf alle Urheberpersönlichkeitsrechte an solchen Einreichungen und garantieren, dass solche Einreichungen von Ihnen stammen oder Sie das Recht haben, sie einzureichen. Sie erklären sich damit einverstanden, dass Sie keine Ansprüche gegen uns geltend machen können, falls Ihre Einreichungen angeblich oder tatsächlich Rechte Dritter verletzen oder unrechtmäßig angeeignet werden.",
    "uptimeTitle": "7. Verfügbarkeit und Sicherheit",
    "serviceAvailability": "Die Nutzung unserer Dienste erfolgt auf Ihr eigenes Risiko. Wir bieten diese Dienste „wie besehen“ und „wie verfügbar“ an. Wir bieten für die meisten unserer Dienste keine Service-Level-Vereinbarungen an, nehmen die Verfügbarkeit unserer Anwendungen jedoch ernst.",
    "throttlingPolicy": "Wir behalten uns das Recht vor, in seltenen Fällen, in denen die Aktivität eines Nutzers nachweislich die Stabilität und Leistung des Dienstes für andere Nutzer negativ beeinflusst, den Kontozugriff vorübergehend zu drosseln oder zu beschränken. In allen außer den kritischsten Fällen werden wir Sie kontaktieren, um eine Lösung zu finden, bevor wir Maßnahmen ergreifen.",
    "dataSecurity": "Wir ergreifen zahlreiche Maßnahmen, um Ihre Daten durch Backups, Redundanzen und Verschlüsselung zu schützen und zu sichern. Wir erzwingen Verschlüsselung für die Datenübertragung über das öffentliche Internet.",
    "thirdPartyVendors": "Wir nutzen Drittanbieter und Hosting-Partner, um die notwendige Hardware, Software, Netzwerke, Speicher und verwandte Technologien bereitzustellen, die für den Betrieb der Dienste erforderlich sind.",
    "siteManagementTitle": "8. Website-Verwaltung",
    "siteManagementDescription": "Wir behalten uns das Recht vor, jedoch nicht die Verpflichtung, (1) die Website auf Verstöße gegen diese Nutzungsbedingungen zu überwachen; (2) geeignete rechtliche Schritte gegen jeden zu unternehmen, der nach unserem Ermessen gegen das Gesetz oder diese Nutzungsbedingungen verstößt, einschließlich, aber nicht beschränkt auf, die Meldung solcher Nutzer an Strafverfolgungsbehörden; (3) nach unserem Ermessen und ohne Einschränkung den Zugriff auf Ihre Beiträge oder Teile davon zu verweigern, einzuschränken, die Verfügbarkeit zu begrenzen oder (soweit technisch möglich) zu deaktivieren; (4) nach unserem Ermessen und ohne vorherige Ankündigung oder Haftung Dateien und Inhalte von der Website zu entfernen oder anderweitig zu deaktivieren, die übermäßig groß sind oder unsere Systeme belasten; und (5) die Website auf eine Weise zu verwalten, die unsere Rechte und unser Eigentum schützt und die ordnungsgemäße Funktion der Website gewährleistet.",
    "copyrightTitle": "9. Urheberrecht und Inhalteigentum",
    "copyrightCompliance": "Alle auf den Diensten veröffentlichten Inhalte müssen dem US-Urheberrecht entsprechen.",
    "ipRights": "Wir erheben keine Ansprüche auf geistiges Eigentum an dem Material, das Sie den Diensten zur Verfügung stellen. Alle hochgeladenen Materialien bleiben Ihr Eigentum.",
    "contentModeration": "Wir überprüfen Inhalte nicht vorab, behalten uns jedoch das Recht (aber nicht die Verpflichtung) vor, nach unserem Ermessen Inhalte, die über den Dienst verfügbar sind, abzulehnen oder zu entfernen.",
    "prohibitedExploitation": "Sie erklären sich damit einverstanden, keinen Teil der Dienste, deren Nutzung oder Zugang ohne ausdrückliche schriftliche Genehmigung des Unternehmens zu reproduzieren, zu duplizieren, zu kopieren, zu verkaufen, weiterzuverkaufen oder auszubeuten.",
    "impersonationProhibition": "Sie dürfen keine andere Website so verändern, dass fälschlicherweise der Eindruck entsteht, sie sei mit den Diensten oder dem Unternehmen verbunden.",
    "dmcaPolicy": "Wir respektieren die geistigen Eigentumsrechte anderer. Wenn Sie glauben, dass Material auf oder durch die Website Urheberrechte verletzt, die Sie besitzen oder kontrollieren, kontaktieren Sie uns bitte umgehend. Eine Kopie Ihrer Benachrichtigung wird an die Person gesendet, die das betreffende Material gepostet oder gespeichert hat. Bitte beachten Sie, dass Sie gemäß geltendem Recht für Schäden haftbar gemacht werden können, wenn Sie in einer Benachrichtigung falsche Angaben machen. Wenn Sie sich nicht sicher sind, ob Material auf oder über die Website Ihr Urheberrecht verletzt, sollten Sie zunächst einen Anwalt konsultieren.",
    "prohibitedActivitiesTitle": "10. Verbotene Aktivitäten",
    "generalProhibition": "Sie dürfen die Website nicht für andere Zwecke als diejenigen nutzen, für die wir sie zur Verfügung stellen. Die Website darf nicht für kommerzielle Unternehmungen verwendet werden, es sei denn, diese werden ausdrücklich von uns genehmigt oder befürwortet.",
    "userObligations": "Als Nutzer der Website erklären Sie sich damit einverstanden, Folgendes nicht zu tun:",
    "dataScraping": "Ohne unsere schriftliche Erlaubnis systematisch Daten oder andere Inhalte von der Website abzurufen, um direkt oder indirekt eine Sammlung, Zusammenstellung, Datenbank oder ein Verzeichnis zu erstellen.",
    "fraud": "Uns oder andere Nutzer zu täuschen, zu betrügen oder in die Irre zu führen, insbesondere um sensible Kontoinformationen wie Passwörter zu erhalten.",
    "securityInterference": "Sicherheitsfunktionen der Website zu umgehen, zu deaktivieren oder anderweitig zu beeinträchtigen, einschließlich Funktionen, die die Verwendung oder das Kopieren von Inhalten verhindern oder einschränken oder die Nutzung der Website und/oder der darin enthaltenen Inhalte begrenzen.",
    "defamation": "Uns und/oder die Website in unseren Augen herabzuwürdigen, zu beschädigen oder anderweitig zu schädigen.",
    "harassment": "Informationen von der Website zu verwenden, um eine andere Person zu belästigen, zu missbrauchen oder zu schädigen.",
    "supportAbuse": "Unsere Supportdienste missbräuchlich zu nutzen oder falsche Meldungen über Missbrauch oder Fehlverhalten einzureichen.",
    "legalCompliance": "Die Website in einer Weise zu nutzen, die nicht mit geltenden Gesetzen oder Vorschriften vereinbar ist.",
    "framingProhibition": "Unbefugtes Framing oder Verlinken der Website durchzuführen.",
    "malware": "Viren, Trojaner oder anderes Material hochzuladen oder zu übertragen (oder zu versuchen), einschließlich übermäßiger Verwendung von Großbuchstaben und Spamming (wiederholtes Posten von Text), das die Nutzung der Website durch Dritte beeinträchtigt oder die Funktionen, den Betrieb oder die Wartung der Website stört.",
    "automation": "Automatisierte Systeme zu verwenden, wie Skripte zum Senden von Kommentaren oder Nachrichten, oder Datenmining-, Robot- oder ähnliche Tools zur Datenerfassung und -extraktion.",
    "copyrightRemoval": "Urheberrechts- oder andere Eigentumsvermerke aus Inhalten zu entfernen.",
    "impersonation": "Zu versuchen, sich als anderer Nutzer oder eine andere Person auszugeben oder den Benutzernamen eines anderen Nutzers zu verwenden.",
    "spyware": 'Material hochzuladen oder zu übertragen (oder zu versuchen), das als passiver oder aktiver Informationssammlungs- oder Übertragungsmechanismus dient, einschließlich klarer GIFs, 1×1-Pixel, Web Bugs, Cookies oder ähnlicher Geräte (auch als "Spyware" oder "passive Sammlungsmechanismen" bezeichnet).',
    "disruption": "Die Website oder die damit verbundenen Netzwerke oder Dienste zu stören oder übermäßig zu belasten.",
    "employeeHarassment": "Unsere Mitarbeiter oder Agenten zu belästigen, zu ärgern, einzuschüchtern oder zu bedrohen, die Ihnen Teile der Website bereitstellen.",
    "accessCircumvention": "Zu versuchen, Maßnahmen der Website zu umgehen, die den Zugriff auf die Website oder Teile davon verhindern oder einschränken sollen.",
    "codeCopying": "Die Software der Website zu kopieren oder anzupassen, einschließlich Flash, PHP, HTML, JavaScript oder anderem Code.",
    "reverseEngineering": "Sofern nicht durch geltendes Recht gestattet, die Software der Website zu dechiffrieren, zu dekompilieren, zu disassemblieren oder reverse zu engineerieren.",
    "bots": "Sofern nicht durch Standard-Suchmaschinen oder Internetbrowser verursacht, automatisierte Systeme wie Spider, Robots oder Cheat-Tools zu verwenden, zu starten, zu entwickeln oder zu verteilen, die auf die Website zugreifen.",
    "buyingAgents": "Einen Einkaufsagenten oder Käufer zu beauftragen, um Einkäufe auf der Website zu tätigen.",
    "unauthorizedUse": "Unbefugte Nutzung der Website, einschließlich des Sammelns von Benutzernamen und/oder E-Mail-Adressen, um unerwünschte E-Mails zu versenden, oder das Erstellen von Benutzerkonten durch automatisierte Mittel oder unter falschen Angaben.",
    "competition": "Die Website zu nutzen, um mit uns zu konkurrieren oder die Website und/oder Inhalte für gewinnbringende Unternehmungen oder kommerzielle Zwecke zu verwenden.",
    "advertising": "Die Website zu nutzen, um Waren oder Dienstleistungen zu bewerben oder anzubieten.",
    "profileTransfer": "Ihr Profil zu verkaufen oder anderweitig zu übertragen.",
    "featuresTitle": "11. Funktionen und Fehler",
    "featuresDescription": "Wir gestalten unsere Dienste sorgfältig basierend auf unseren Erfahrungen und denen unserer Kunden. Es gibt jedoch keinen Dienst, der jedem gefällt. Wir garantieren nicht, dass unsere Dienste Ihre spezifischen Anforderungen oder Erwartungen erfüllen.",
    "bugsDescription": "Wir testen alle Funktionen vor der Veröffentlichung. Wie jede Software haben auch unsere Dienste Fehler. Wir verfolgen gemeldete Fehler und beheben sie, insbesondere sicherheits- oder datenschutzrelevante. Nicht alle gemeldeten Fehler werden behoben, und wir garantieren keine fehlerfreien Dienste.",
    "correctionsTitle": "12. Korrekturen",
    "informationAccuracy": "Auf der Website können Tippfehler, Ungenauigkeiten oder Auslassungen enthalten sein, einschließlich Beschreibungen, Preisen, Verfügbarkeit und anderen Informationen. Wir behalten uns das Recht vor, diese jederzeit ohne Vorankündigung zu korrigieren oder zu aktualisieren.",
    "siteAvailability": "Wir können nicht garantieren, dass die Website ständig verfügbar ist. Wir behalten uns das Recht vor, die Website jederzeit ohne Ankündigung zu ändern, zu aktualisieren oder einzustellen. Sie stimmen zu, dass wir nicht haftbar für Ausfälle oder Unterbrechungen sind.",
    "userDataTitle": "13. Nutzerdaten",
    "userDataDescription": "Wir speichern bestimmte Daten, die Sie an die Website übermitteln, um deren Leistung zu verwalten. Sie sind allein verantwortlich für alle Daten, die Sie übermitteln oder die mit Ihrer Nutzung der Website zusammenhängen. Wir haften nicht für Verlust oder Beschädigung dieser Daten.",
    "privacyPolicyTitle": "14. Datenschutzrichtlinie",
    "liabilityTitle": "15. Haftung",
    "liabilityIntroduction": "Wir erwähnen die Haftung in diesen Bedingungen, aber hier ist alles zusammengefasst:",
    "liabilityWaiver": "Sie verstehen und stimmen ausdrücklich zu, dass wir nicht haftbar sind für direkte, indirekte, zufällige oder sonstige Schäden, einschließlich Gewinn- oder Datenverlust, die aus der Nutzung oder Nichtnutzung der Dienste resultieren, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden.",
    "miscellaneousTitle": "16. Sonstiges",
    "miscellaneousDescription": "Diese Nutzungsbedingungen und alle Richtlinien auf der Website stellen die gesamte Vereinbarung dar. Das Nichtgeltendmachen eines Rechts bedeutet nicht dessen Verzicht. Wir können Rechte und Pflichten übertragen. Wir haften nicht für unkontrollierbare Ereignisse. Ungültige Klauseln beeinträchtigen nicht den Rest der Bedingungen. Durch diese Bedingungen entsteht keine Partnerschaft oder Arbeitsverhältnis.",
    "contactTitle": "17. Kontakt",
    "neverCap": "NeverCap",
    "site": "Website",
    "services": "Dienste",
    at: "unter",
      trademarkProtection: "Die Namen, das Aussehen und die Gestaltung der Dienste sind urheberrechtlich© durch das Unternehmen geschützt. Alle Rechte vorbehalten. Sie dürfen keine Teile der HTML-, CSS-, JavaScript- oder visuellen Designtelemente ohne ausdrückliche schriftliche Genehmigung des Unternehmens duplizieren, kopieren oder wiederverwenden. Sie müssen eine Genehmigung beantragen, um das Logo des Unternehmens oder Dienstlogos zu Werbezwecken zu nutzen. Bitte senden Sie uns eine E-Mail unter {at} {email} für Anfragen zur Logonutzung. Wir behalten uns das Recht vor, diese Genehmigung zu widerrufen, wenn Sie gegen diese Nutzungsbedingungen verstoßen.",
      privacyPolicyDescription: "Uns sind Datenschutz und Sicherheit wichtig. Bitte lesen Sie unsere {policy}. Durch die Nutzung der Website erklären Sie sich mit unserer Datenschutzrichtlinie einverstanden, die in diese Nutzungsbedingungen integriert ist. Bitte beachten Sie, dass die Website in den Vereinigten Staaten gehostet wird. Wenn Sie die Website aus einer anderen Region der Welt aufrufen, in der andere Gesetze oder Anforderungen zur Erhebung, Nutzung oder Offenlegung personenbezogener Daten gelten als in den Vereinigten Staaten, dann transferieren Sie durch die weitere Nutzung der Website Ihre Daten in die Vereinigten Staaten und erklären sich damit einverstanden, dass Ihre Daten in die Vereinigten Staaten übertragen und dort verarbeitet werden.",
      contactDescription: "Wenn Sie eine Frage zu den Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
