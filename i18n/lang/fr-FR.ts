// 法语
let message = {
  // 首页
  HomePage: {
    home: "Toutes les transcriptions",
    times:
      "{times} transcriptions gratuites par jour, {left} restantes aujourd'hui. ",
    tips: "Passez à Pro pour des transcriptions illimitées.",
    update: "Mettre à niveau maintenant",
    rename: "Renommer",
    delete: "Supprimer",
    cancel: "Annuler",
    confirm: "Créer",
    dialogLabel: "Nom du dossier",
    recently: "Fichiers récents",
    loading: "Chargement",
    tour: {
      step0: {
        title: "Bienvenue sur {name}",
        tip: "Ici, vous pouvez :",
        content:
          "Transcrire des conversations uniques, des réunions, des conférences et plus encore",
        next: "Commencer"
      },
      step1: {
        title: "Transcrire des fichiers",
        content:
          "Prend en charge trois méthodes de transcription : fichiers locaux, liens et enregistrements."
      },
      step2: {
        title: "Créer un dossier",
        content:
          'Cliquez sur le "+" pour créer un dossier et organiser vos fichiers.'
      },
      step3: {
        title: "Voir les détails de la transcription et éditer",
        content:
          "Cliquez sur l'élément pour voir les détails de la transcription, l'éditer et la traduire."
      },
      next: "suivant",
      finish: "Compris"
    },
    export: {
      export: "Exporter",
      title: "Nous générons votre exportation",
      title2: "Votre fichier est prêt",
      singleLoadingContent: "1 fichier est en cours de compression.",
      singleSuccessContent: "1 fichier a été compressé.",
      loadingContent: "{num} fichiers sont en cours de compression.",
      successContent: "{num} fichiers ont été compressés.",
      cancel: "Annuler l'exportation",
      error: "Erreur d'exportation",
      dialog: {
        title: "Avertissement",
        content: "Annuler l'exportation ?",
        cancel: "Annuler l'exportation",
        continue: "Continuer l'exportation"
      }
    },
    welcome: {
      title: "Bienvenue sur Scribify !",
      description: "Ici, vous pouvez :",
      transcribe:
        "Transcrivez sans effort avec Scribify — transformez les conversations vocales en texte clair, consultable et partageable en un instant.",
      precision:
        "Obtenez des transcriptions précises avec identification des interlocuteurs et horodatage instantanément.",
      translate:
        "Brisez les barrières linguistiques : traduisez les transcriptions dans plus de 200 langues facilement.",
      edit: "Modifiez, affinez et exportez vos transcriptions dans des formats adaptés à vos besoins.",
      collaborate:
        "Collaborez en partageant votre texte transcrit avec d'autres personnes.",
      button: "Commencer",
      tip: "Prêt à transformer l'audio en texte transcrit ? Commencez à explorer maintenant !",
      tip2: "Commencez à explorer maintenant !",
      tip1: "Prêt à transformer l'audio en texte transcrit ? "
    },
    subscriptionModal: {
      left: {
        title: "Obtenez le Plan Pro pour débloquer plus",
        c1: "Transcriptions illimitées",
        c2: "Téléchargements de 10 heures",
        c3: "Priorité maximale",
        c4: "99% de précision de transcription",
        c5: "Plus de 100 langues prises en charge",
        c6: "Identification des interlocuteurs",
        c7: "Traduction de transcription",
        t1: "Transcriptions illimitées pour une personne.",
        t2: "Chaque fichier peut durer jusqu'à 10 heures / 5 Go. Téléchargez 50 fichiers à la fois.",
        t3: "Nous transcrirons toujours vos fichiers dès que possible avec la plus haute priorité."
      },
      right: {
        title: "Obtenir le Plan Pro",
        yearly: "Annuel",
        monthly: "Mensuel",
        save: "Économie",
        preMonth: "par mois",
        preYear: "par an",
        firstMonth: "premier mois",
        afterwards: "ensuite"
      },
      subscribe: "S'abonner"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Échoué",
      selected: "Sélectionné",
      success: "Succès",
      fileList: "Liste de Fichiers"
    },
    dialog: {
      move: {
        title: "Déplacer",
        label: "Choisissez un dossier",
        placeholder: "Choisissez un dossier",
        confirm: "Déplacer",
        cancel: "Annuler"
      },
      rename: {
        title: "Renommer",
        label: "Nom du fichier",
        confirm: "Renommer",
        cancel: "Annuler"
      },
      delete: {
        title: "Supprimer",
        file: "fichier",
        files: "fichiers",
        label:
          "Confirmer la suppression ? Cette action ne peut pas être annulée.",
        confirm: "Supprimer",
        cancel: "Annuler"
      },
      share: {
        title: "Partager",
        label:
          "Tout le monde avec le lien sécurisé suivant peut voir cette transcription et le fichier audio associé.",
        confirm: "Copier le lien",
        success: "Copie réussie"
      },
      export: {
        title: "Exporter",
        select: "Sélectionnez le format dont vous avez besoin",
        settings: "Paramètres",
        speaker: "Inclure le locuteur",
        timecodes: "Inclure les codes de temps",
        confirm: "Exporter",
        cancel: "Annuler",
        selectErr: "Veuillez sélectionner un ou plusieurs formats"
      }
    },
    search: {
      placeholder: "Rechercher"
    },
    recently: "Récemment",
    record: "Enregistrer",
    transcribe: "Transcrire",
    unclassified: "Dossiers non classés",
    buttons: {
      transcribe: "Transcrire les fichiers",
      url: "Transcrire les liens",
      record: "Enregistrer et transcrire",
      recording: "Enregistrement..."
    },
    delSuccess: "Supprimé avec succès",
    create: "Créer",
    endRecord: {
      title: "Invite",
      content:
        "Vous êtes en train d'enregistrer. Cette action terminera l'enregistrement. Voulez-vous terminer l'enregistrement ?",
      confirm: "Continuer l'Enregistrement",
      cancel: "Terminer l'Enregistrement"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Enregistrer",
      pause: "Pause",
      resume: "Reprendre",
      stop: "Arrêter",
      endRecord: "Terminer l'enregistrement",
      delete: "Supprimer",
      transcribe: "Transcrire",
      permissionDenied:
        "Permission microphonique refusée ou appareil non existant",
      dialog: {
        delete: {
          title: "Avertissement",
          label: "Êtes-vous sûr de vouloir supprimer cette enregistrement ?",
          confirm: "Supprimer",
          cancel: "Annuler"
        },
        complete: {
          title: "Enregistrement terminé",
          label:
            "L'enregistrement a atteint 10 heures et s'est automatiquement arrêté. Veuillez transcrire.",
          confirm: "Compris"
        },
        speaker: {
          content:
            "Pour l'identification des intervenants, les fichiers sont limités à 3 heures. Veuillez décocher '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcrire un média en ligne",
        title: "Coller les liens",
        label:
          "Collez votre lien vidéo ou audio depuis : YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram et d'autres plateformes...",
        confirm: "Ajouter",
        cancel: "Annuler",
        // Veuillez entrer un lien valide
        errorTitle:
          "Le lien que vous avez entré est incorrect. Veuillez vérifier et réessayer.",
        linkName: "Lien"
      },
      file: {
        orTitle: "Transcrire à partir de l'URL",
        dialogTitle: "Télécharger des fichiers à transcrire",
        tip1: "Faites glisser les fichiers ici ou cliquez pour parcourir",
        tip2: "Cliquez pour parcourir",
        or: "ou",
        supported: "Formats pris en charge"
      },
      del: {
        title: "Avertissement",
        content:
          "Toutes les données de progression seront perdues. Confirmez-vous l'annulation de la transcription ?",
        cancel: "Confirmer l'annulation",
        confirm: "Continuer la transcription"
      },
      files: "Fichiers",
      resultDialogTitle: "Transcrire les fichiers",
      resultDialogTitle2: "Transcrire le fichier",
      cancel: "Annuler",
      confirm: "Transcrire",
      return: "Retour",
      addMore: "Ajouter plus",
      language: "Sélectionner la langue",
      failed: "Échoué",
      tooLarge: "Le fichier dépasse la limite (5 Go).",
      linkUpload: "Téléchargement",
      fileFormat: "Format de fichier non autorisé",
      localFiles: "Fichiers locaux",
      pasteLink: "Lien en ligne",
      uploadErr: "Erreur de téléchargement",
      hashErr: "Erreur de hachage",
      table: {
        status: "Statut",
        file: "Fichier",
        size: "Taille",
        noData: "Aucune donnée"
      },
      maxFileNum: "Le nombre de fichiers ne peut pas dépasser {num}.",
      speaker: "Identifier les intervenants",
      speakerLabel: "Détection automatique de l'interlocuteur",
      guest: {
        transcribe: "Transcrire",
        file: "Déposer",
        audio: "Fichier audio / vidéo",
        Uploading: "Téléchargement en cours..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Récemment",
      popular: "Populaire",
      other: "Autre",
      searchLanguage: "Rechercher une langue",
      noMatch: "Aucune langue correspondante trouvée",
      English: "Anglais",
      "English(US)": "Anglais (États-Unis)",
      "English(UK)": "Anglais (Royaume-Uni)",
      Spanish: "Espagnol",
      Portuguese: "Portugais",
      French: "Français",
      Italian: "Italien",
      German: "Allemand",
      Dutch: "Néerlandais",
      Polish: "Polonais",
      Danish: "Danois",
      Japanese: "Japonais",
      Korean: "Coréen",
      Hungarian: "Hongrois",
      Czech: "Tchèque",
      Chinese: "Chinois",
      Hebrew: "Hébreu",
      Arabic: "Arabe",
      Azerbaijani: "Azerbaïdjanais",
      Estonian: "Estonien",
      Belarusian: "Biélorusse",
      Bulgarian: "Bulgare",
      Icelandic: "Islandais",
      Bosnian: "Bosniaque",
      Persian: "Persan",
      Russian: "Russe",
      "Chinese(Traditional)": "Chinois (Traditionnel)",
      Finnish: "Finnois",
      Kazakh: "Kazakh",
      Galician: "Galicien",
      Catalan: "Catalan",
      "Chinese(Simplified)": "Chinois (Simplifié)",
      Kannada: "Kannada",
      Croatian: "Croate",
      Latvian: "Letton",
      Lithuanian: "Lituanien",
      Romanian: "Roumain",
      Marathi: "Marathi",
      Malay: "Malais",
      Macedonian: "Macédonien",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Népalais",
      Norwegian: "Norvégien",
      Swedish: "Suédois",
      Serbian: "Serbe",
      Slovak: "Slovaque",
      Slovenian: "Slovène",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamoul",
      Thai: "Thaï",
      Turkish: "Turc",
      Welsh: "Gallois",
      Urdu: "Ourdou",
      Ukrainian: "Ukrainien",
      Greek: "Grec",
      Armenian: "Arménien",
      Hindi: "Hindi",
      Indonesian: "Indonésien",
      Vietnamese: "Vietnamien",
      Albanian: "Albanais",
      Amharic: "Amharique",
      Assamese: "Assamais",
      Occitan: "Occitan",
      Bashkir: "Bachkir",
      Basque: "Basque",
      Breton: "Breton",
      Tibetan: "Tibétain",
      Faroese: "Féroïen",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Géorgien",
      Gujarati: "Gujarati",
      "Haitian Creole": "Créole haïtien",
      Hausa: "Haoussa",
      Latin: "Latin",
      Lao: "Laotien",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgeois",
      Malagasy: "Malgache",
      Maltese: "Maltais",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengali",
      Burmese: "Birman",
      Punjabi: "Pendjabi",
      Pashto: "Pachto",
      Sinhala: "Cingalais",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadjik",
      Tatar: "Tatar",
      Telugu: "Télougou",
      Turkmen: "Turkmène",
      Uzbek: "Ouzbek",
      Hawaiian: "Hawaïen",
      "Norwegian Nynorsk": "Norvégien Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Soundanais",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanais",
      Cantonese: "Cantonais",
      Abkhaz: "Abkhaze",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avar",
      Ewe: "Éwé",
      Aymara: "Aymara",
      Irish: "Irlandais",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossète",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinais",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Sepedi",
      bem: "Bemba",
      bik: "Bicolano",
      bal: "Baloutche",
      bho: "Bhojpuri",
      bua: "Bouriate",
      chm: "Mari des prairies",
      Chamorro: "Chamorro",
      Chechen: "Tchétchène",
      chk: "Chuuk",
      Chuvash: "Tchouvache",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tétoum",
      Divehi: "Maldivien",
      dyu: "Dioula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele du Sud",
      dov: "Dombe",
      "bm-Nkoo": "Bambara (N'ko)",
      "French(Canada)": "Français (Canada)",
      Fijian: "Fidjien",
      fon: "Fon",
      "Western Frisian": "Frison occidental",
      fur: "Frioulan",
      Fulah: "Peul",
      Kongo: "Kikongo",
      Kalaallisut: "Groenlandais",
      gom: "Konkani Goanais",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrückisch",
      Kyrgyz: "Kirghiz",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanouri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corse",
      "crh-Latn": "Tatar de Crimée (latin)",
      crh: "Tatar de Crimée (cyrillique)",
      Quechua: "Quechua",
      Kurdish: "Kurde (Kurmanji)",
      ckb: "Kurde (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalien",
      lij: "Ligure",
      Limburgish: "Limbourgeois",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Romani",
      mad: "Madurais",
      Manx: "Mannois",
      mwr: "Marwari",
      "ms-Arab": "Malais (Jawi)",
      Marshallese: "Marshallais",
      mam: "Mam",
      mai: "Maïthili",
      mfe: "Créole mauricien",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl de l'Est Huasteca",
      "Southern Sotho": "Sotho du Sud",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pendjabi (Shahmukhi)",
      "pt-PT": "Portugais (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasaï",
      Akan: "Akan",
      zap: "Zapotèque",
      "Northern Sami": "Sami du Nord",
      Samoan: "Samoan",
      kri: "Krio",
      crs: "Créole seychellois",
      Sango: "Sango",
      "sat-Latn": "Santali (latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Espéranto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaélique écossais",
      sus: "Soussou",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latin)",
      Tahitian: "Tahitien",
      Tonga: "Tongan",
      Tigrinya: "Tigrigna",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Touva",
      war: "Waray",
      mak: "Makassar",
      vec: "Vénitien",
      Uyghur: "Ouïghour",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Oudmourte",
      szl: "Silésien",
      scn: "Sicilien",
      hil: "Hiligaynon",
      jam: "Créole jamaïcain",
      sah: "Iakoute",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (latin)",
      Inuktitut: "Inuktitut (syllabaire)",
      yua: "Maya yucatèque",
      Dzongkha: "Dzongkha",
      Zulu: "Zoulou"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "ou", // 或
    LoginBtn: "Connectez-vous avec Email",
    LoginGoogle: "Connectez-vous avec Google",
    SignupBtn: "Inscrivez-vous avec Email",
    SignupGoogle: "Inscrivez-vous avec Google",
    SignupDes:
      "Inscrivez-vous aujourd'hui pour découvrir la magie — gratuitement.",
    SignupTitle: "Transcription précise et illimitée",
    signup: "S'inscrire", // 注册
    sign_up: "S'inscrire", // 注册
    loginByGoogle: "Continuer avec Google", // 使用Google登录
    emailAddress: "Veuillez entrer votre adresse email", // 请输入您的邮箱
    createAccount: "Créer un nouveau compte", // 创建账户
    accountExists: "Vous avez déjà un compte ? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "En continuant, vous acceptez nos {terms} et {policy}.",
      terms: "Conditions",
      policy: "Politique de confidentialité"
    },
    setPassword: "Définir un mot de passe", // 设置密码
    code: "Code de vérification", // 验证码
    resend: "Renvoyer", // 重新发送
    enterPassword: "Mot de passe : 6 caractères minimum.", // 请输入密码
    passwordLeval: "Niveau du mot de passe", // 密码强度
    Weak: "Faible", // 弱 中 强
    Medium: "Moyen", // 弱 中 强
    Strong: "Fort", // 弱 中 强
    confirmPassword: "Confirmez votre mot de passe", // 确认密码
    invalidEmail: "Adresse email invalide", // 无效的邮箱地址
    logInDirectly:
      "Ce compte existe déjà. Veuillez vous connecter directement.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Code de vérification erroné. Réessayez.", // 验证码错误，请重试
    atLeastSix: "Le mot de passe doit comporter au moins 6 caractères.", // 密码长度至少6位
    passwordNotMatch:
      "Les mots de passe ne correspondent pas. Veuillez réessayer.", // 密码不匹配，请重试
    login: "Connexion", // 登录
    log_in: "Connexion", // 登录
    log_In: "Connexion", // 登录
    password: "Mot de passe", // 密码
    forgotPassword: "Mot de passe oublié ?", // 忘记密码？
    noAccount: "Vous n'avez pas de compte ?", // 没有账户？注册
    accountNotExists: "Ce compte n'existe pas.", // 账户不存在
    passwordError: "Erreur de mot de passe", // 密码错误
    sendCode: "Envoyer le code de vérification", // 发送验证码
    resetPassword: "Réinitialiser le mot de passe", // 重置密码
    resetYourPassword: "Réinitialiser votre mot de passe", // 重置你的密码
    newOldCantSame:
      "Le nouveau mot de passe doit être différent de l'ancien mot de passe.", // 新密码与旧密码不能相同
    passwordResetOk: "Mot de passe réinitialisé avec succès !", // 密码重置成功！
    signupToSaveProgress:
      "Finalisez votre inscription pour sauvegarder votre progression.",
    tip: "Astuce",
    tipContentEmail:
      "Nous venons d'envoyer votre mot de passe de connexion à votre adresse e-mail.",
    tipContentPassword:
      "Veuillez vérifier votre boîte de réception et vous connecter avec votre e-mail et mot de passe.",
    codeToEmail:
      "Nous venons d'envoyer un code de vérification à votre adresse e-mail. Veuillez vérifier votre boîte de réception et coller le code de vérification ci-dessus."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnement",
    freeversion: "Gratuit",
    transcribeTimesDay: "3 transcriptions par jour",
    uploadMinutes: "Téléchargements de 30 minutes",
    lowerPriority: "Priorité inférieure",
    currentPlan: "Forfait actuel",
    professionalEdition: "version professionnelle",
    unlimitedTranscription: "Transcription illimitée",
    unlimitedNumberOfTimes: "Fréquence et durée de transcription illimitées.",
    filesUploadedAtOnce:
      "Chaque fichier peut durer jusqu'à 10 heures / 5 Go. Téléchargez 50 fichiers à la fois.",
    highestPriority: "priorité maximale",
    weWillGiveTheHighest:
      "Nous transcrirons toujours vos fichiers dès que possible avec la priorité la plus élevée.",
    theFirstMonth: "Le premier mois",
    subscribeTo: "s'abonner à",
    basicVersionFree: "Version de base (gratuite)",
    return: "Retour",
    annualize: "annuel",
    monthly: "mensuel",
    everyYear: "chaque année",
    saved: "économisé",
    byTheMonth: "par mois",
    firstMonth: "premier mois",
    afterwardsEveryMonth: "Ensuite, chaque mois",
    manageSubscription: "Gérer l'abonnement",
    professionalYearbook: "Abonnement annuel professionnel",
    professionalMonthly: "Abonnement mensuel professionnel",
    subscriptionWillCancelledOn: "Votre abonnement sera résilié le",
    displayLanguage: "Langue d'affichage",
    update: "Mettre à niveau maintenant",
    basicversion: "Version de base (Gratuite)",
    daily: "{start} sur {end} transcriptions quotidiennes utilisées",
    upgradetoPro: "Passer à la version Pro",
    accountSetting: "Paramètres du compte",
    logOut: "Se déconnecter",
    account: "Compte",
    email: "Email",
    id: "ID",
    password: "Mot de passe",
    resetPassword: "Réinitialiser le mot de passe",
    logIn: "Se connecter",
    tryForFree: "Essai gratuit",
    notFund: "Non trouvé",
    couldntFind: "Nous n'avons pas trouvé ce que vous cherchiez.",
    proAnnual: "Pro Annuel",
    proMonthly: "Pro Mensuel",
    perMonth: "par mois",
    afterwards: "ensuite",
    accuracy: "précision de transcription",
    supported: "langues prises en charge",
    identification: "Identification de l'orateur",
    transcriptSranslation: "Traduction de transcription",
    perYear: "par an",
    getProPlan: "Obtenir le forfait Pro",
    changeToAnnual: "Passer à l'annuel",
    automaticRenewalon: "Renouvellement automatique le",
    eachMonth: "Renouvellement automatique le {time} de chaque mois.",
    automaticRenewal:
      "Échec du renouvellement automatique, veuillez vérifier votre moyen de paiement.",
    eachYear: "Renouvellement automatique le {time} chaque année.",
    returnAccountSetting: "Retour",
    needsToWaitLonger:
      "Attendez plus longtemps avant que vos fichiers ne soient transcrits.",
    freeThreeTimesDay: "Transcrivez 3 fichiers gratuitement chaque jour.",
    oneFileUploaded:
      "Chaque fichier peut durer jusqu'à 30 minutes. Téléversez 1 fichier à la fois.",
    uploadWithinHours: "Téléchargements de 10 heures",
    yourSubscription: "Votre abonnement sera annulé le {time}.",
    save: "Économiser",
      freeversion2: "Plan Gratuit"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinois(Simplifié)",
      "Chinese(Traditional)": "Chinois(Traditionnel)",
      Japanese: "Japonais",
      Danish: "Danois",
      German: "Allemand",
      English: "Anglais",
      Spanish: "Espagnol",
      French: "Français",
      Italian: "Italien",
      Hungarian: "Hongrois",
      Dutch: "Néerlandais",
      Norwegian: "Norvégien",
      Polish: "Polonais",
      Portuguese: "Portugais",
      Finnish: "Finnois",
      Swedish: "Suédois",
      Turkish: "Turc",
      Greek: "Grec",
      Russian: "Russe",
      Ukrainian: "Ukrainien",
      Hebrew: "Hébreu",
      Arabic: "Arabe",
      Korean: "Coréen"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Commencer l'essai gratuit~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Rejoignez la liste d'attente, obtenez les dernières nouvelles de NuxtPro et les remises !",
      placeholder: "Entrez votre email",
      button: "Rejoindre la liste d'attente",
      joinCountMessage:
        "🔥 Utilisateur précoce #{count} vient de rejoindre la liste d'attente !"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "c'est une démonstration",
      corpInfo: "corp info"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "erreur de téléchargement vidéo"
      },
      mse: {
        code: 2,
        msg: "erreur d'ajout de flux"
      },
      parse: {
        code: 3,
        msg: "erreur de parsing"
      },
      format: {
        code: 4,
        msg: "format incorrect"
      },
      decoder: {
        code: 5,
        msg: "erreur de décodage"
      },
      runtime: {
        code: 6,
        msg: "erreurs grammaticales"
      },
      timeout: {
        code: 7,
        msg: "dépassement de délai"
      },
      other: {
        code: 8,
        msg: "autres erreurs"
      }
    },
    HAVE_NOTHING:
      "Il n'y a pas d'informations sur la disponibilité audio/vidéo",
    HAVE_METADATA: "Les métadonnées audio/vidéo sont prêtes ",
    HAVE_CURRENT_DATA:
      "Les données sur la position de lecture actuelle sont disponibles, mais il n'y a pas assez de données pour lire la prochaine image/milliseconde",
    HAVE_FUTURE_DATA:
      "Les données actuelles et au moins une image de données sont disponibles",
    HAVE_ENOUGH_DATA:
      "Les données disponibles sont suffisantes pour démarrer la lecture",
    NETWORK_EMPTY: "Audio/vidéo n'a pas été initialisé",
    NETWORK_IDLE:
      "Audio/vidéo est actif et a été sélectionné pour les ressources, mais aucun réseau n'est utilisé",
    NETWORK_LOADING: "Le navigateur télécharge les données",
    NETWORK_NO_SOURCE: "Aucune source audio/vidéo n'a été trouvée",
    MEDIA_ERR_ABORTED:
      "Le processus de récupération est annulé par l'utilisateur",
    MEDIA_ERR_NETWORK: "Une erreur est survenue lors du téléchargement",
    MEDIA_ERR_DECODE: "Une erreur est survenue lors du décodage",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/vidéo n'est pas supporté",
    REPLAY: "Relancer",
    ERROR: "Réseau hors ligne",
    PLAY_TIPS: "Lire",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Lire la suite",
    DOWNLOAD_TIPS: "Télécharger",
    ROTATE_TIPS: "Tourner",
    RELOAD_TIPS: "Recharger",
    FULLSCREEN_TIPS: "Aller en plein écran",
    EXITFULLSCREEN_TIPS: "Quitter le plein écran",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Quitter cssfullscreen",
    TEXTTRACK: "Sous-titre",
    PIP: "PIP",
    SCREENSHOT: "Capture d'écran",
    LIVE: "LIVE",
    OFF: "Désactivé",
    OPEN: "Ouvert",
    MINI_DRAG: "Cliquez et maintenez pour glisser",
    MINISCREEN: "Mini-écran",
    REFRESH_TIPS: "Veuillez réessayer",
    REFRESH: "Actualiser",
    FORWARD: "en avant",
    LIVE_TIP: "LIVE",
    TM_SUBTITLE_SHOW_TIPS: "Activer les sous-titres",
    TM_SUBTITLE_HIDE_TIPS: "Désactiver les sous-titres",
    TM_MINIMIZE_TIPS: "Masquer la vidéo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 25 août 2025",
    policyDescription:
      "Cette politique décrit comment Scribify (ci-après dénommé « Scribify », « notre », « nous ») collecte, utilise et divulgue vos informations personnelles lorsque vous utilisez nos services, sites Web",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "et des logiciels (collectivement, les « Services »).",
    policyAgreement:
      "Veuillez lire attentivement cette Politique de confidentialité et vous assurer de bien la comprendre. En utilisant l'un de nos Services, vous acceptez cette Politique de confidentialité. Si vous n'acceptez pas que nous utilisions vos données personnelles conformément à cette Politique, vous devez cesser immédiatement d'utiliser nos Services.",
    policyOverview:
      "Dans cette politique, nous expliquons : quelles données nous collectons et pourquoi ; comment vos données sont traitées ; et vos droits concernant vos données. Nous ne vendons pas vos données.",
    scopeTitle: "1. Portée de la présente politique de confidentialité",
    whatWeCollectTitle: "2. Ce que nous collectons et pourquoi",
    accessShareTitle:
      "3. Lorsque nous accédons à vos informations ou les partageons",
    secureDataTitle: "4. Comment nous sécurisons vos données",
    deleteContentTitle:
      "5. Que se passe-t-il lorsque vous supprimez votre contenu",
    locationTitle: "6. Localisation du site et des données",
    childrenPrivacyTitle: "7. Vie privée des enfants",
    updatesTitle: "8. Mises à jour de cette politique de confidentialité",
    contactUsTitle: "9. Contactez-nous",
    identityAccessTitle: "2.1 Identité et accès",
    billingInfoTitle: "2.2 Informations de facturation",
    productInteractionsTitle: "2.3 Interactions avec les produits",
    websiteInteractionsTitle: "2.4 Interactions sur le site Web",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Correspondance volontaire",
    scopeContent:
      "La présente Politique de confidentialité s'applique uniquement à la collecte et au traitement des informations concernant les utilisateurs des Services. Elle ne s'applique pas aux services, sites web ou logiciels exploités par des tiers liés à nous (que nous fournissions ces liens ou que d'autres utilisateurs les partagent), ni aux contenus, données, applications ou documents de tiers. Nous vous conseillons de consulter les politiques de confidentialité de tout site web ou logiciel tiers avant de leur fournir des informations.",
    collectPrinciple:
      "Notre principe directeur est de ne collecter que ce dont nous avons besoin. Voici ce que cela signifie concrètement :",
    identityAccessContent:
      "Lorsque vous vous inscrivez à l'un de nos produits, nous vous demandons des informations d'identification telles que votre nom et votre adresse e-mail. Ces informations nous permettent de bénéficier des fonctionnalités essentielles du produit et de vous envoyer des mises à jour et d'autres informations essentielles.",
    billingInfoContent:
      "Si vous souscrivez à un produit payant, vous serez invité à fournir vos informations de paiement et votre adresse de facturation. Ces informations sont transmises directement à notre processeur de paiement et ne transitent pas par nos serveurs.",
    productInteractionsContent:
      "Nous stockons sur nos serveurs le contenu que vous téléchargez, recevez ou conservez dans vos comptes produits. Sauf si vous supprimez ce contenu, nous pouvons le conserver tant que votre compte est actif.",
    websiteInteractionsContent:
      "Nous collectons des informations sur votre navigation à des fins d'analyse et de statistiques, telles que les tests de taux de conversion et l'expérimentation de nouveaux produits. Ces informations incluent, par exemple, les versions de votre navigateur et de votre système d'exploitation, votre adresse IP, les pages web que vous avez consultées et leur temps de chargement, ainsi que le site web qui vous a redirigé vers nous. Si vous possédez un compte et êtes connecté, ces données d'analyse web sont liées à votre adresse IP et à votre compte utilisateur jusqu'à la désactivation de votre compte.",
    cookiesContent1:
      "Nous utilisons également des cookies persistants propriétaires et certains cookies tiers pour stocker certaines préférences, faciliter l'utilisation de nos applications et effectuer des tests A/B ainsi que prendre en charge certaines analyses.",
    cookiesContent2:
      "Un cookie est un fichier texte stocké par votre navigateur. Il peut mémoriser vos informations de connexion et vos préférences de navigation. Il peut également collecter des informations telles que votre type de navigateur, votre système d'exploitation, les pages web consultées, la durée de votre visite, le contenu consulté et d'autres données relatives à votre parcours de navigation. Vous pouvez configurer les paramètres de conservation des cookies et accepter ou bloquer des cookies individuels dans les paramètres de votre navigateur. Cependant, si vous désactivez les cookies, nos applications et d'autres aspects de nos services risquent de ne pas fonctionner correctement.",
    voluntaryCorrespondenceContent:
      "Lorsque vous nous envoyez un e-mail avec une question ou pour demander de l'aide, nous conservons cette correspondance, y compris votre adresse e-mail, afin que nous ayons un historique de la correspondance passée à laquelle nous référer si vous nous contactez à l'avenir.",
    accessShareContent1:
      "Pour vous fournir les produits ou services que vous avez demandés. Nous faisons appel à des sous-traitants tiers pour gérer nos applications et vous fournir les services. Il s'agit notamment de fournisseurs de services cloud et d'analyse.",
    accessShareContent2:
      "Pour enquêter sur un abus, le prévenir ou prendre des mesures. L'accès au compte d'un client lors d'une enquête sur un abus potentiel est une mesure de dernier recours. Nous souhaitons protéger la confidentialité et la sécurité de nos clients et des personnes qui nous signalent des problèmes, et nous mettons tout en œuvre pour équilibrer ces responsabilités tout au long du processus. Si nous découvrons que vous utilisez nos produits à des fins restreintes, nous prendrons les mesures nécessaires, y compris en informant les autorités compétentes si nécessaire.",
    accessShareContent3: "Lorsque la loi applicable l’exige.",
    userDataRequests:
      "- Demandes de données utilisateur. Notre politique est de ne pas répondre aux demandes gouvernementales de données utilisateur, sauf obligation légale ou, dans certaines circonstances, en cas de demande urgente. Toutefois, si les autorités policières américaines disposent d'un mandat, d'une assignation pénale ou d'une décision de justice nous obligeant à partager des données, nous devons nous y conformer. De même, nous ne répondrons aux demandes émanant d'autorités gouvernementales extérieures aux États-Unis que si le gouvernement américain nous y contraint, conformément aux procédures décrites dans un traité ou un accord d'entraide judiciaire. Nous avons pour politique d'avertir les utilisateurs concernés avant de partager des données, sauf interdiction légale et sauf en cas d'urgence.",
    preservationRequests:
      "- Demandes de conservation. De même, notre politique est de répondre aux demandes de conservation de données uniquement si la loi américaine sur les communications stockées (18 USC Section 2703(f)) l'exige, ou si une assignation à comparaître en matière civile est dûment signifiée. Nous ne partageons pas les données conservées, sauf si la loi l'exige ou si nous y sommes contraints par une décision de justice que nous choisissons de ne pas contester. De plus, sauf si nous recevons un mandat, une ordonnance ou une assignation en bonne et due forme avant l'expiration de la période de conservation requise, nous détruirons toute copie conservée des données clients à la fin de cette période.",
    taxAudit:
      "- En cas de contrôle fiscal, nous pourrions être amenés à communiquer des informations de facturation. Dans ce cas, nous ne communiquerons que le strict nécessaire, comme les adresses de facturation et les informations d'exonération fiscale.",
    secureDataContent1: "Toutes les données sont cryptées via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "lorsqu'elles sont transmises depuis nos serveurs vers votre navigateur.",
    deleteContentContent:
      "Si vous supprimez du contenu, il deviendra immédiatement inaccessible.",
    locationContent:
      "Nos produits et autres sites web sont exploités aux États-Unis. Si vous résidez dans l'Union européenne, au Royaume-Uni ou ailleurs qu'aux États-Unis, sachez que toutes les informations que vous nous fournissez seront transférées et stockées aux États-Unis. En utilisant nos sites web ou nos Services et/ou en nous fournissant vos informations personnelles, vous consentez à ce transfert.",
    childrenPrivacyContent:
      "Les Services ne sont pas destinés aux enfants et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous avez moins de 13 ans, veuillez ne pas soumettre d'informations personnelles via les Services. Si vous pensez qu'un enfant nous a fourni des informations personnelles en violation de la présente Politique, veuillez nous contacter comme indiqué ci-dessous.",
    updatesContent:
      "Nous pouvons mettre à jour cette politique si nécessaire afin de nous conformer à la réglementation en vigueur et de refléter toute nouvelle pratique. Chaque fois que nous apportons une modification importante à nos politiques, nous actualisons la date en haut de cette page.",
    contactUsContent1:
      "Si vous avez des questions, des commentaires ou des plaintes concernant notre politique de confidentialité, veuillez",
    contactUs: "Contactez-nous",
    contactUsContent2:
      "et nous nous efforcerons de traiter votre réclamation dans les plus brefs délais."
  },
  termsOfService: {
    termsOfServiceTitle: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : 21 septembre 2022",
    thankYouMessage: "Merci d'utiliser nos produits !",
    companyReference:
      "Lorsque nous disons « Société », « nous », « notre » ou « nos » dans ce document, nous faisons référence à Scribify.",
    servicesDefinition:
      "Lorsque nous disons « Services », nous entendons tout produit créé et maintenu par Scribify, qu'il soit fourni dans un navigateur Web, une application de bureau, une application mobile ou un autre format.",
    termsUpdateNotice:
      "Nous sommes susceptibles de mettre à jour ces Conditions d'utilisation ultérieurement. Ces modifications visent généralement à clarifier certaines de ces conditions en créant un lien vers une politique connexe plus complète. Chaque fois que nous apportons une modification importante à nos politiques, nous actualiserons la date en haut de cette page et prendrons toutes les mesures nécessaires pour en informer les titulaires de compte.",
    acceptanceOfAgreementTitle: "1. Acceptation de l'accord",
    scribifyServicesTitle: "2. Services de Scribify",
    accountTermsTitle: "3. Conditions du compte",
    paymentRefundsTitle:
      "4. Paiement, remboursements et modifications de forfait",
    cancellationTerminationTitle: "5. Annulation et résiliation",
    submissionsTitle: "6. Soumissions",
    uptimeSecurityTitle: "7. Disponibilité et sécurité",
    siteManagementTitle: "8. Gestion du site",
    copyrightContentTitle: "9. Droits d'auteur et propriété du contenu",
    prohibitedActivitiesTitle: "10. Activités interdites",
    featuresBugsTitle: "11. Fonctionnalités et bugs",
    correctionsTitle: "12. CORRECTIONS",
    userDataTitle: "13. Données utilisateur",
    privacyPolicyTitle: "14. Politique de confidentialité",
    liabilityTitle: "15. Responsabilité",
    miscellaneousTitle: "16. Divers",
    contactUsTitle: "17. Contactez-nous",
    acceptanceContent1:
      "En utilisant nos Services, vous acceptez le présent Contrat, qui constitue un contrat contraignant entre vous et Scribify. Vous déclarez être légalement capable d'accepter les présentes Conditions et affirmez avoir l'âge légal pour conclure un contrat. L'acceptation par Scribify est expressément conditionnée à votre acceptation de l'ensemble des termes et conditions du présent Contrat.",
    acceptanceContent2:
      "Les Services ne sont pas destinés et ne doivent pas être utilisés par des personnes de moins de 18 ans. En utilisant les Services, vous déclarez et garantissez que vous remplissez les conditions d'éligibilité susmentionnées.",
    acceptanceContent3:
      "Les termes « vous », « votre », « vous-même » incluent également vos employés, agents, représentants commerciaux et toute autre personne à qui vous donnez accès aux Services via votre Compte (tel que défini ci-dessous). Vous êtes responsable de vous assurer que toutes les personnes accédant aux Services via votre compte connaissent les présentes Conditions et les respectent.",
    acceptanceContent4:
      "Scribify se réserve le droit de réviser et de mettre à jour les présentes Conditions de temps à autre, à sa seule discrétion. Toutes les modifications entrent en vigueur dès leur publication. En continuant à utiliser les Services après la publication des Conditions révisées, vous acceptez les modifications. Vous êtes invité à consulter régulièrement cette page afin de prendre connaissance de ces modifications, car elles vous engagent.",
    servicesContent1:
      "Nos services permettent aux utilisateurs de transformer des conversations vocales en texte transcrit qui peut être recherché, traduit et partagé avec d’autres.",
    servicesContent2:
      "Vous pouvez choisir d'utiliser la version gratuite des Services (« Services gratuits ») ou la version payante des Services par abonnement pour laquelle vous devrez peut-être payer des frais (les « Services payants »).",
    servicesContent3:
      "Nous mettrons les Services à votre disposition. Il vous incombe de prendre toutes les dispositions nécessaires pour y accéder.",
    accountTerms1:
      "- Vous êtes responsable de la sécurité de votre compte. La Société ne peut être tenue responsable de toute perte ou dommage résultant du non-respect de cette obligation de sécurité.",
    accountTerms2:
      "- Vous ne pouvez pas utiliser les Services à des fins illégales, contraires à l'éthique ou immorales.",
    accountTerms3:
      "- Vous êtes responsable de tout le contenu publié et de toute activité effectuée sur votre compte. Cela inclut le contenu publié par d'autres personnes qui : (a) ont accès à vos identifiants ; ou (b) possèdent leurs propres identifiants de connexion sur votre compte.",
    accountTerms4:
      "- Vous devez être un humain. Les comptes créés par des robots ou d'autres méthodes automatisées ne sont pas autorisés.",
    paymentContent1:
      "Pour les services payants proposant un essai gratuit, nous vous expliquons la durée de l'essai lors de votre inscription. Après la période d'essai, vous devrez payer à l'avance pour continuer à utiliser le service. Sans paiement, ces services prendront fin.",
    paymentContent2:
      "- Si vous passez d'un forfait gratuit à un forfait payant, nous débiterons votre carte immédiatement et votre cycle de facturation commence le jour de la mise à niveau.",
    paymentContent3:
      "- Tous les frais s'entendent hors taxes, prélèvements ou droits imposés par les autorités fiscales. Le cas échéant, nous percevons ces taxes pour le compte des autorités fiscales et les reversons à ces dernières. Dans le cas contraire, vous êtes responsable du paiement de ces taxes, prélèvements ou droits.",
    paymentContent4:
      "- Aucun achat n'est remboursable. Vous pouvez annuler tout service payant à tout moment en vous connectant à votre compte. Pour les abonnements payants, l'annulation prendra effet à la fin de la période d'abonnement en cours, sauf mention contraire.",
    cancellationContent1:
      "- Si vous annulez le Service avant la fin de la période payée, votre annulation prendra effet immédiatement et aucun nouveau prélèvement ne vous sera facturé. Nous ne calculons pas automatiquement au prorata le temps non utilisé lors du dernier cycle de facturation.",
    cancellationContent2:
      "- Nous nous réservons le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future de nos Services, pour quelque raison que ce soit et à tout moment. La suspension signifie que vous ne pourrez plus accéder à votre compte ni à son contenu. La résiliation entraînera également la suppression de votre compte ou de votre accès à celui-ci, ainsi que la confiscation et l'abandon de tout son contenu. Nous nous réservons également le droit de refuser l'utilisation des Services à quiconque, pour quelque raison que ce soit et à tout moment. Cette clause s'explique par le fait que, statistiquement parlant, parmi les centaines de milliers de comptes présents sur nos Services, au moins un commet une infraction.",
    cancellationContent3:
      "- Les abus verbaux, physiques, écrits ou autres (y compris les menaces d'abus ou de représailles) envers un employé ou un dirigeant de la Société peuvent entraîner la résiliation immédiate du compte.",
    submissionsContent:
      "Vous reconnaissez et acceptez que les questions, commentaires, suggestions, idées, retours ou autres informations concernant le Site (les « Soumissions ») que vous nous fournissez ne sont pas confidentiels et deviennent notre propriété exclusive. Nous détenons les droits exclusifs, y compris tous les droits de propriété intellectuelle, et sommes autorisés à utiliser et diffuser sans restriction ces Soumissions à toute fin légale, commerciale ou autre, sans reconnaissance ni compensation. Vous renoncez par les présentes à tous droits moraux sur ces Soumissions et garantissez par les présentes que ces Soumissions sont originales et que vous avez le droit de les soumettre. Vous acceptez qu'aucun recours ne soit possible contre nous pour toute violation ou détournement, allégué ou réel, de tout droit de propriété sur vos Soumissions.",
    uptimeContent1:
      "- Vous utilisez les Services à vos seuls risques. Nous les fournissons « en l'état » et « selon disponibilité ». Nous ne proposons pas de contrats de service pour la plupart de nos Services, mais nous accordons une grande importance à la disponibilité de nos applications.",
    uptimeContent2:
      "- Nous nous réservons le droit de désactiver temporairement votre compte si votre utilisation dépasse largement celle des autres clients des Services. Bien entendu, nous vous contacterons avant toute action, sauf dans les rares cas où le niveau d'utilisation pourrait nuire aux performances du Service pour les autres clients.",
    uptimeContent3:
      "Nous prenons de nombreuses mesures pour protéger et sécuriser vos données grâce à des sauvegardes, des redondances et le chiffrement. Nous appliquons le chiffrement pour la transmission de données sur l'Internet public.",
    uptimeContent4:
      "- Nous utilisons des fournisseurs tiers et des partenaires d'hébergement pour fournir le matériel, les logiciels, le réseau, le stockage et la technologie associée nécessaires à l'exécution des Services.",
    siteManagementContent:
      "Nous nous réservons le droit, mais non l'obligation, de : (1) surveiller le Site pour détecter toute violation des présentes Conditions d'utilisation ; (2) prendre les mesures juridiques appropriées contre quiconque, à notre seule discrétion, viole la loi ou les présentes Conditions d'utilisation, y compris, sans limitation, signaler cet utilisateur aux autorités chargées de l'application de la loi ; (3) à notre seule discrétion et sans limitation, refuser, restreindre l'accès, limiter la disponibilité ou désactiver (dans la mesure où cela est technologiquement possible) l'une de vos Contributions ou toute partie de celles-ci ; (4) à notre seule discrétion et sans limitation, préavis ou responsabilité, de supprimer du Site ou de désactiver de toute autre manière tous les fichiers et contenus qui sont de taille excessive ou qui sont de quelque manière que ce soit encombrants pour nos systèmes ; et (5) gérer le Site d'une manière conçue pour protéger nos droits et notre propriété et pour faciliter le bon fonctionnement du Site.",
    copyrightContent1:
      "- Tout le contenu publié sur les Services doit être conforme à la loi américaine sur le droit d'auteur.",
    copyrightContent2:
      "Nous ne revendiquons aucun droit de propriété intellectuelle sur le contenu que vous fournissez aux Services. Tous les contenus téléchargés restent votre propriété.",
    copyrightContent3:
      "- Nous ne présélectionnons pas le contenu, mais nous nous réservons le droit (mais pas l'obligation) à notre seule discrétion de refuser ou de supprimer tout contenu disponible via le Service.",
    copyrightContent4:
      "Les noms, l'apparence et la convivialité des Services sont protégés par le droit d'auteur © de la Société. Tous droits réservés. Vous ne pouvez pas dupliquer, copier ou réutiliser une quelconque partie des éléments HTML, CSS, JavaScript ou visuels sans l'autorisation écrite expresse de la Société. Vous devez demander l'autorisation d'utiliser le logo de la Société ou tout logo de Service à des fins promotionnelles. Veuillez",
    emailUs: "envoyez-nous un e-mail",
    copyrightContent5:
      "Demandes d'utilisation de logos. Nous nous réservons le droit de révoquer cette autorisation en cas de violation des présentes Conditions d'utilisation.",
    copyrightContent6:
      "- Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie des Services, l'utilisation des Services ou l'accès aux Services sans l'autorisation écrite expresse de la Société.",
    copyrightContent7:
      "- Vous ne devez pas modifier un autre site Web de manière à laisser entendre à tort qu'il est associé aux Services ou à la Société.",
    copyrightContent8:
      "Nous respectons les droits de propriété intellectuelle d'autrui. Si vous pensez qu'un contenu disponible sur ou via le Site porte atteinte à un droit d'auteur que vous détenez ou contrôlez, veuillez immédiatement nous le signaler.",
    contactUs: "Contactez-nous",
    copyrightContent9:
      "Une copie de votre notification sera envoyée à la personne ayant publié ou stocké le contenu visé par la notification. Veuillez noter que, conformément à la loi applicable, vous pouvez être tenu responsable de dommages et intérêts si vous faites de fausses déclarations dans une notification. Par conséquent, si vous n'êtes pas certain que le contenu figurant sur le site ou auquel il renvoie porte atteinte à vos droits d'auteur, nous vous conseillons de contacter au préalable un avocat.",
    prohibitedActivitiesIntro:
      "Vous ne pouvez accéder au Site ni l'utiliser à d'autres fins que celles pour lesquelles nous le mettons à disposition. Le Site ne peut être utilisé dans le cadre d'activités commerciales, sauf celles expressément approuvées par nous.",
    prohibitedActivitiesUserAgreement:
      "En tant qu'utilisateur du Site, vous acceptez de ne pas :",
    prohibitedActivity1:
      "- Récupérer systématiquement des données ou d'autres contenus du Site pour créer ou compiler, directement ou indirectement, une collection, une compilation, une base de données ou un répertoire sans notre autorisation écrite.",
    prohibitedActivity2:
      "- Nous tromper, nous escroquer ou nous induire en erreur, ainsi que d'autres utilisateurs, en particulier dans toute tentative d'obtenir des informations de compte sensibles telles que les mots de passe des utilisateurs.",
    prohibitedActivity3:
      "- Contourner, désactiver ou interférer de toute autre manière avec les fonctionnalités liées à la sécurité du Site, y compris les fonctionnalités qui empêchent ou restreignent l'utilisation ou la copie de tout Contenu ou imposent des limitations à l'utilisation du Site et/ou du Contenu qu'il contient.",
    prohibitedActivity4:
      "- Dénigrer, ternir ou nuire de toute autre manière, à notre avis, à nous-mêmes et/ou au Site.",
    prohibitedActivity5:
      "- Utiliser toute information obtenue à partir du Site afin de harceler, d'abuser ou de nuire à une autre personne.",
    prohibitedActivity6:
      "- Faire un usage abusif de nos services d’assistance ou soumettre de faux rapports d’abus ou de mauvaise conduite.",
    prohibitedActivity7:
      "- Utiliser le Site d’une manière incompatible avec les lois ou réglementations applicables.",
    prohibitedActivity8:
      "- Participer à un cadrage ou à un lien non autorisé vers le Site.",
    prohibitedActivity9:
      "- Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) des virus, des chevaux de Troie ou d'autres éléments, y compris l'utilisation excessive de majuscules et le spam (publication continue de texte répétitif), qui interfère avec l'utilisation et la jouissance ininterrompues du Site par une partie ou qui modifie, altère, perturbe, altère ou interfère avec l'utilisation, les fonctionnalités, les fonctions, le fonctionnement ou la maintenance du Site.",
    prohibitedActivity10:
      "- Participer à toute utilisation automatisée du système, comme l'utilisation de scripts pour envoyer des commentaires ou des messages, ou l'utilisation d'outils d'exploration de données, de robots ou d'outils similaires de collecte et d'extraction de données.",
    prohibitedActivity11:
      "- Supprimez les avis de droits d'auteur ou autres droits de propriété de tout contenu.",
    prohibitedActivity12:
      "- Tenter d'usurper l'identité d'un autre utilisateur ou d'une autre personne ou d'utiliser le nom d'utilisateur d'un autre utilisateur.",
    prohibitedActivity13:
      "- Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) tout matériel qui agit comme un mécanisme passif ou actif de collecte ou de transmission d'informations, y compris, sans limitation, les formats d'échange de graphiques clairs (« gifs »), les pixels 1 × 1, les bogues Web, les cookies ou autres dispositifs similaires (parfois appelés « logiciels espions » ou « mécanismes de collecte passive » ou « pcms »).",
    prohibitedActivity14:
      "- Interférer avec, perturber ou créer une charge excessive sur le Site ou les réseaux ou services connectés au Site.",
    prohibitedActivity15:
      "- Harceler, ennuyer, intimider ou menacer l'un de nos employés ou agents engagés dans la fourniture de toute partie du Site.",
    prohibitedActivity16:
      "- Tenter de contourner toute mesure du Site conçue pour empêcher ou restreindre l'accès au Site, ou à toute partie du Site.",
    prohibitedActivity17:
      "- Copier ou adapter le logiciel du Site, y compris, mais sans s'y limiter, Flash, PHP, HTML, JavaScript ou autre code.",
    prohibitedActivity18:
      "- Sauf dans les cas autorisés par la loi applicable, déchiffrer, décompiler, désassembler ou procéder à une ingénierie inverse de tout logiciel composant ou constituant de quelque manière que ce soit une partie du Site.",
    prohibitedActivity19:
      "- Sauf si cela résulte de l'utilisation standard d'un moteur de recherche ou d'un navigateur Internet, utilisez, lancez, développez ou distribuez tout système automatisé, y compris, sans limitation, toute araignée, tout robot, tout utilitaire de triche, tout scraper ou tout lecteur hors ligne qui accède au Site, ou utilisez ou lancez tout script ou autre logiciel non autorisé.",
    prohibitedActivity20:
      "- Faire appel à un agent d'achat ou à un intermédiaire pour effectuer des achats sur le Site.",
    prohibitedActivity21:
      "- Faire toute utilisation non autorisée du Site, y compris la collecte de noms d'utilisateur et/ou d'adresses e-mail d'utilisateurs par des moyens électroniques ou autres dans le but d'envoyer des e-mails non sollicités, ou de créer des comptes d'utilisateurs par des moyens automatisés ou sous de faux prétextes.",
    prohibitedActivity22:
      "- Utiliser le Site dans le cadre de tout effort visant à nous concurrencer ou utiliser le Site et/ou le Contenu pour toute activité génératrice de revenus ou entreprise commerciale.",
    prohibitedActivity23:
      "- Utiliser le Site pour faire de la publicité ou proposer à la vente des biens et services.",
    prohibitedActivity24: "- Vendre ou transférer votre profil.",
    featuresContent1:
      "Nous concevons nos services avec soin, en nous appuyant sur notre propre expérience et sur celle de nos clients qui partagent leur expérience et leurs commentaires. Cependant, il n'existe pas de service qui plaise à tout le monde. Nous ne garantissons pas que nos services répondront à vos besoins ou attentes spécifiques.",
    featuresContent2:
      "Nous testons également toutes nos fonctionnalités avant leur lancement. Comme tout logiciel, nos services comportent inévitablement des bugs. Nous suivons les bugs qui nous sont signalés et les corrigeons, notamment ceux liés à la sécurité ou à la confidentialité. Tous les bugs signalés ne sont pas corrigés et nous ne garantissons pas des services totalement exempts d'erreurs.",
    correctionsContent1:
      "Certaines informations du Site peuvent contenir des erreurs typographiques, des inexactitudes ou des omissions, notamment concernant les descriptions, les prix, la disponibilité et diverses autres informations. Nous nous réservons le droit de corriger toute erreur, inexactitude ou omission et de modifier ou mettre à jour les informations du Site à tout moment et sans préavis.",
    correctionsContent2:
      "Nous ne pouvons garantir la disponibilité permanente du Site. Nous pouvons rencontrer des problèmes matériels, logiciels ou autres, ou être amenés à effectuer des opérations de maintenance, entraînant des interruptions, des retards ou des erreurs. Nous nous réservons le droit de modifier, réviser, mettre à jour, suspendre, interrompre ou autrement modifier le Site à tout moment et pour quelque raison que ce soit, sans préavis. Vous reconnaissez que nous déclinons toute responsabilité en cas de perte, dommage ou inconvénient causé par votre incapacité à accéder au Site ou à l'utiliser pendant une période d'indisponibilité ou d'interruption de son fonctionnement. Aucune disposition des présentes Conditions d'utilisation ne saurait être interprétée comme nous obligeant à maintenir et à soutenir le Site, ni à fournir des corrections, mises à jour ou versions connexes.",
    userDataContent:
      "Nous conserverons certaines données que vous transmettez au Site afin d'en gérer les performances, ainsi que les données relatives à votre utilisation. Bien que nous effectuions régulièrement des sauvegardes de données, vous êtes seul responsable de toutes les données que vous transmettez ou liées à toute activité que vous avez entreprise sur le Site. Vous reconnaissez que nous déclinons toute responsabilité envers vous en cas de perte ou de corruption de ces données, et vous renoncez par les présentes à tout droit d'action contre nous découlant de cette perte ou corruption.",
    privacyPolicyContent1:
      "La confidentialité et la sécurité des données nous tiennent à cœur. Veuillez consulter notre",
    privacyPolicy: "politique de confidentialité",
    privacyPolicyContent2:
      "En utilisant le Site, vous acceptez d'être lié par notre Politique de confidentialité, intégrée aux présentes Conditions d'utilisation. Veuillez noter que le Site est hébergé aux États-Unis. Si vous accédez au Site depuis une autre région du monde dont les lois ou autres exigences régissant la collecte, l'utilisation ou la divulgation des données personnelles diffèrent des lois applicables aux États-Unis, votre utilisation continue du Site implique le transfert de vos données vers les États-Unis et vous acceptez que vos données soient transférées et traitées aux États-Unis.",
    liabilityIntro:
      "Nous mentionnons la responsabilité tout au long des présentes Conditions, mais pour tout regrouper dans une seule section :",
    liabilityContent:
      "Français Vous comprenez et acceptez expressément que la Société ne sera pas responsable, en droit ou en équité, envers vous ou envers un tiers de tout dommage direct, indirect, accessoire, perte de profits, spécial, consécutif, punitif ou exemplaire, y compris, mais sans s'y limiter, les dommages pour perte de profits, de clientèle, d'utilisation, de données ou autres pertes intangibles (même si la Société a été informée de la possibilité de tels dommages), résultant de : (1) l'utilisation ou l'impossibilité d'utiliser les Services ; (2) des erreurs, fautes ou inexactitudes de contenu et de matériel ; (3) des blessures corporelles ou des dommages matériels, de quelque nature que ce soit, résultant de votre accès et de votre utilisation du site ; (4) le coût d'approvisionnement de biens et services de substitution résultant de tout bien, donnée, information ou service acheté ou obtenu ou de messages reçus ou de transactions conclues via ou à partir des Services ; (5) tout accès ou utilisation non autorisé de nos serveurs sécurisés et/ou de toutes les informations personnelles et/ou financières qui y sont stockées ; (6) toute interruption ou cessation de transmission vers ou depuis le site ; (7) tout bug, virus, cheval de Troie ou autre qui pourrait être transmis au site ou via le site par un tiers, et/ou ; (8) toute erreur ou omission dans tout contenu et matériel ou pour toute perte ou dommage de toute nature subi à la suite de l'utilisation de tout contenu publié, transmis ou autrement mis à disposition via le site ; (9) les déclarations ou la conduite de tout tiers sur le service ; (10) ou toute autre question relative aux présentes Conditions d'utilisation ou aux Services, qu'il s'agisse d'une rupture de contrat, d'un délit (y compris la négligence, qu'elle soit active ou passive), ou de toute autre théorie de responsabilité.",
    miscellaneousContent:
      "Les présentes Conditions d'utilisation et toutes les politiques ou règles de fonctionnement publiées par nous sur le Site ou relatives à celui-ci constituent l'intégralité de l'accord et de l'entente entre vous et nous. Notre manquement à exercer ou à appliquer un droit ou une disposition des présentes Conditions d'utilisation ne saurait constituer une renonciation à ce droit ou à cette disposition. Les présentes Conditions d'utilisation s'appliquent dans toute la mesure permise par la loi. Nous pouvons céder tout ou partie de nos droits et obligations à des tiers à tout moment. Nous déclinons toute responsabilité en cas de perte, de dommage, de retard ou d'inaction causés par une cause indépendante de notre volonté. Si une disposition ou une partie d'une disposition des présentes Conditions d'utilisation est jugée illégale, nulle ou inapplicable, cette disposition ou partie de disposition est réputée dissociable des présentes Conditions d'utilisation et n'affecte pas la validité et l'applicabilité des autres dispositions. Aucune relation de coentreprise, de partenariat, d'emploi ou d'agence n'est créée entre vous et nous du fait des présentes Conditions d'utilisation ou de l'utilisation du Site. Vous acceptez que les présentes Conditions d'utilisation ne soient pas interprétées à notre détriment du fait de leur rédaction. Vous renoncez par la présente à toute défense que vous pourriez avoir sur la base de la forme électronique des présentes Conditions d'utilisation et de l'absence de signature par les parties aux présentes pour exécuter les présentes Conditions d'utilisation.",
    contactUsContent1:
      "Si vous avez une question sur l'une des conditions d'utilisation, veuillez",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Fonctionnalités",
    UnlimitedTranscription: "Transcription Illimitée",
    BulkUpload: "Téléchargement en Masse",
    Accuracy: "96% de Précision",
    Pricing: "Tarification",
    UseCases: "Cas d'Utilisation",
    AllUseCases: "Tous les Cas d'Utilisation",
    Podcasters: "Podcasteurs",
    Journalists: "Journalistes",
    ContentCreators: "Créateurs de Contenu",
    Researchers: "Chercheurs",
    BusinessTeams: "Équipes Commerciales",
    Educators: "Éducateurs",
    Resources: "Ressources",
    YouTubetoMP4: "YouTube vers MP4",
    StartFreeTrial: "Essayez Gratuitement"
  },
  Footer: {
    des: "Le premier service de transcription IA vraiment illimité au monde. Pas de plafond, pas de limites, juste la liberté de créer.",
    Features: "Fonctionnalités",
    UseCases: "Cas d'Utilisation",
    Company: "Entreprise",
    featureMenus: ["Transcription Illimitée", "Téléchargement en Masse", "96% de Précision"],
    useCaseMenus: [
          "Tous les Cas d'Utilisation",
          "Podcasteurs",
          "Journalistes",
          "Créateurs de contenu",
          "Chercheurs",
          "Équipes commerciales",
          "Éducateurs"
        ],
    companyMenus: [
          "À propos",
          "Tarifs",
          "Confidentialité",
          "Conditions"
        ]
  },
  Index: {
    Hero: {
      badge: 'Finie la "Shrinkflation" - Vraiment Illimité',
      h1: "Arrêtez de Payer pour des Limites :",
      gradient: "Transcription IA Vraiment Illimitée",
      subtitle: "Notre IA transcrit les vidéos et convertit l'audio en texte, traitant 50 fichiers à la fois sans plafond mensuel. Une transcription qui s'adapte réellement à vos besoins.",
      FreeTrial: "Essayez Gratuitement - Sans Carte Bancaire",
      HowWorks: "Voir Comment Ça Marche",
      Unlimited: "Téléchargements de Fichiers Illimités",
      NoCap: "Aucune Limite de Minutes Mensuelles",
      Hour: "Fichiers de 10 Heures Pris en Charge",
      ExploreUseCases: "Découvrir les Cas d'Utilisation"
    },
    Stats: {
      monthlyMinutes: "Minutes Mensuelles",
      fileUploads: "Téléchargements de Fichiers",
      batchProcessing: "Traitement par Lots",
      maxFileLength: "Durée Maximale des Fichiers"
    },
    FeaturesGrid: {
      try_now: "Essayez Maintenant",
      no_signup: "Inscription Non Requise",
      experience_unltd: "Vivez une transcription vraiment illimitée",
      upload_50: "Téléchargez jusqu'à 50 fichiers à la fois, directement ici.",
      no_limits: "Avancé",
      no_surprises: "Transcription IA",
      transparency: "Plus de Limites Cachées, Plus de Surprises - Alors que d'autres réduisent discrètement vos minutes ou cachent des plafonds dans les petits caractères, nous croyons en une transparence radicale",
      feat_unltd: "Vraiment Illimité",
      feat_unltd_desc: `Pas de "politique d'usage raisonnable" cachée dans les conditions. Pas de plafonds de stockage déguisés en "illimité". Téléchargez toute votre archive, transcrivez tout pour tous vos besoins audio. Nous le pensons vraiment.`,
      feat_bulk: "Liberté de Téléchargement en Masse",
      feat_bulk_desc: 'Fatigué des "3 imports à vie" ou "10 fichiers par mois" ? Téléchargez 50 fichiers à la fois, autant de fois que nécessaire. Idéal pour traiter les retards.',
      feat_batch: "Traitement par Lots",
      feat_batch_desc: "Traitez toute une saison de podcast en une nuit. Téléchargez 50 interviews à la fois. Laissez notre IA travailler pendant que vous dormez. Réveillez-vous avec des transcriptions terminées.",
      feat_accuracy: "96 % de Précision",
      feat_accuracy_desc: "Notre IA de pointe transcrit l'audio avec une ponctuation intelligente, une diarisation des locuteurs pour jusqu'à 20 intervenants, et gère les accents et termes techniques sans faille.",
      feat_langs: "100+ Langues",
      feat_langs_desc: "Transcription de vidéos et audio dans 100+ langues, traduction vers 249+ langues. Pas de frais supplémentaires pour les différentes langues. Contenu global, un prix simple.",
      feat_pro: "Fonctionnalités Professionnelles",
      feat_pro_desc: "Horodatages au niveau des mots pour un positionnement précis audio/vidéo, identification précise des locuteurs même lors de changements rapides de conversation, et texte parfaitement formaté avec paragraphes, phrases et ponctuation pour une lecture facile.",
        features: "Fonctionnalités"
    },
    UseCases: {
      built_for: "En Masse",
      "heavy_users": "Transcription Audio & Vidéo",
      "join_users": 'Conçu pour les Gros Utilisateurs Comme Vous - Rejoignez les YouTubers, créateurs de contenu et podcasteurs qui ont quitté les services de "shrinkflation"',
      "podcasters": {
        "title": "Podcasteurs",
        "des": "Téléchargez tout votre catalogue. Créez des notes d'émission pour chaque épisode. Plus besoin de choisir quels épisodes transcrire."
      },
      "content_creators": {
        "title": "Créateurs de Contenu",
        "des": "Transformez votre bibliothèque vidéo en texte consultable en utilisant notre service pour transcrire automatiquement les fichiers vidéo. Générez des sous-titres pour tout. Plus de comptage de minutes, juste de la création."
      },
      "journalists": {
        "title": "Journalistes",
        "des": 'Téléchargez toutes vos interviews à la fois. Plus de blocages de "10 fichiers par mois" en cas de délai serré. Traitez tout.'
      },
      researchers: {
        title: "Chercheurs",
        des: "Transcrivez des heures de groupes de discussion et d'interviews. Téléchargez toute votre étude en une fois. Obtenez une identification précise des locuteurs."
      },
      business_teams: {
        title: "Équipes Commerciales",
        des: "Enregistrez chaque appel sans vous soucier des limites. Obtenez des insights IA sur toutes les conversations, pas seulement quelques-unes."
      },
      educators: {
        title: "Éducateurs",
        des: "Transcrivez des séries de cours entières. Rendez tout votre contenu accessible. Plus besoin de choisir entre les cours à cause des plafonds de minutes."
      }
    },
    Testimonials: {
      title: "Adoré par",
      highlighted_users: "50 000+ utilisateurs",
      subtitle: "Découvrez pourquoi les professionnels choisissent NeverCap plutôt que des alternatives limitées",
      Mike: {
        "text": "Wahou, ça marche vraiment ! Je fais un podcast depuis 3 ans et je transcrivais tout manuellement comme un idiot. J'ai uploadé 6 épisodes d'un coup et ça a parfaitement séparé ma voix et celle de mon co-animateur. L'épisode en café que je pensais raté ? Une transcription cristalline. Je ne retaperai plus jamais ça moi-même.",
        "author": "Mike Rodriguez",
        "role": "Animateur de podcast"
      },
      Sarah: {
        "text": "J'enseigne en ligne et j'avais besoin de sous-titres pour mes vidéos. J'ai essayé 3 autres outils qui avaient soit des limites bizarres, soit prenaient une éternité. Celui-ci... marche ? J'ai uploadé mon cours en espagnol, j'ai eu des sous-titres parfaits en 2 minutes. Mes étudiants malentendants sont ravis. Dommage de ne pas avoir trouvé ça plus tôt !",
        "author": "Sarah Chen",
        "role": "Enseignante en ligne"
      },
      Jessica: {
        "text": "Je l'utilise pour mes interviews et c'est fou à quel point c'est précis. Une interview de 2h en anglais cassé + espagnol, et tout était bon, même les timestamps. Je payais mon stagiaire 200$/mois juste pour transcrire. Ça m'économise littéralement de l'argent chaque mois.",
        "author": "Jessica Park",
        "role": "Journaliste indépendante"
      }
    },
    PricingPreview: {
      "title": "Tarification transparente",
      "highlighted_text": "Pas de limites cachées",
      "subtitle": "Choisissez votre forfait. Pas d'astérisques, pas de petits caractères, pas de surprises"
    },
    FAQSection: {
      "title": "Foire aux",
      "titleHighlight": "Questions",
      "questions": [
            {
              "q": "Transcription IA",
              "question": "Qu'est-ce que la transcription IA et comment ça marche ?",
              "answer": "La transcription IA est le processus de conversion automatique d'audio en texte grâce à une intelligence artificielle avancée. Chez NeverCap, vous uploadez simplement vos fichiers, et notre IA transcrit le contenu avec jusqu'à 96% de précision. Notre service est conçu pour transcrire les fichiers vidéo (comme MP4, MOV) et audio (comme MP3, WAV) en texte lisible et éditable, avec identification des locuteurs et timestamps."
            },
            {
              "q": "unlimited_policy",
              "question": "Est-ce vraiment illimité ? Où est l'arnaque ?",
              "answer": "Oui, c'est vraiment illimité ! Pas de plafond mensuel, pas de frais supplémentaires. Les seules limites sont techniques : les fichiers individuels peuvent faire jusqu'à 10h ou 5GB, et vous pouvez traiter 50 fichiers à la fois. Mais vous pouvez uploader autant de lots que vous voulez, tout le mois."
            },
            {
              "q": "accuracy",
              "question": "Quelle est la précision de la transcription ?",
              "answer": "Nous garantissons 96% de précision pour un audio clair. Notre IA est entraînée sur des millions d'heures de contenu varié et gère très bien les accents, termes techniques et interlocuteurs multiples. Pour les audio difficiles, nos fonctionnalités d'amélioration intelligente aident à optimiser les résultats."
            },
            {
              "q": "languages",
              "question": "Quelles langues sont prises en charge ?",
              "answer": "Nous prenons en charge la transcription dans plus de 100 langues dont l'anglais, l'espagnol, le mandarin, l'hindi, l'arabe, le français, etc. De plus, vous pouvez traduire vos transcriptions dans 249 langues différentes, idéal pour du contenu global."
            },
            {
              "q": "speed",
              "question": "Quelle est la vitesse de transcription ?",
              "answer": "Rapidité éclair ! Un fichier audio d'1h est généralement traité en moins de 5 minutes. Avec le traitement par lots, vous pouvez uploader 50 fichiers simultanément pour un traitement parallèle. La plupart des utilisateurs retrouvent leur bibliothèque entièrement transcrite le lendemain matin."
            },
            {
              "q": "cancellation",
              "question": "Puis-je résilier à tout moment ?",
              "answer": "Absolument ! Pas de contrat, pas de frais de résiliation. Vous pouvez modifier ou résilier votre abonnement à tout moment depuis votre tableau de bord. En cas de résiliation, vous conservez l'accès jusqu'à la fin de votre période de facturation."
            },
            {
              "q": "security",
              "question": "Mes données sont-elles sécurisées ?",
              "answer": "Votre sécurité est notre priorité. Nous sommes certifiés SOC 2, utilisons un chiffrement 256-bit pour toutes les données, et n'utilisons jamais votre contenu pour entraîner nos modèles. Vous pouvez supprimer vos fichiers à tout moment, et nous les purgeons automatiquement après 30 jours. Conformité GDPR et CCPA."
            },
            {
              "q": "export_formats",
              "question": "Quels formats d'export sont disponibles ?",
              "answer": "Téléchargez vos transcriptions dans tous les formats nécessaires : PDF, Word (DOCX), Excel, CSV, sous-titres SRT, texte brut (TXT), et légendes VTT. Parfait pour n'importe quel workflow."
            },
            {
              "q": "file_formats",
              "question": "Quels fichiers audio et vidéo puis-je uploader ?",
              "answer": "Nous prenons en charge quasiment tous les formats audio et vidéo : MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, etc. Si vous pouvez le lire, nous pouvons le transcrire."
            }
          ]
    },
    CTASection: {
      "title": "Prêt à briser les limites ?",
      "subtitle": "Rejoignez 50 000+ professionnels passés à la transcription vraiment illimitée",
      "button": "Essayez NeverCap gratuitement",
      "disclaimer": "Carte bancaire non requise pour le forfait gratuit • Passez à l'illimité à tout moment"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Finie la "réductionflation"',
      heroTitleLine1: "Vraiment illimité",
      heroTitleLine2: "Transcription IA",
      heroSubtitle: "Alors que Trint vous limite à 50 heures et Otter à 10 fichiers par mois, nous tenons notre promesse : transcription illimitée sans plafond caché.",
      primaryCta: "Essai Gratuit - Sans Carte Bancaire",
      secondaryCta: "Voir la Vérité",
      comparisonBadLabel: "Ce Que Font les Autres",
      comparisonBadTitle: "Limites Cachées Partout",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint :",
      comparisonBadItem1Text: '"Illimité" = plafond de 50 heures/mois',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter :",
      comparisonBadItem2Text: "3 imports à vie (gratuit), 10/mois (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies :",
      comparisonBadItem3Text: "Limite de stockage de 800 minutes",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript :",
      comparisonBadItem4Text: "Max 30 heures/mois",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Caché dans les conditions générales",
      comparisonGoodLabel: "Ce Que Nous Faisons",
      comparisonGoodTitle: "Vraiment Illimité",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Aucun plafond mensuel",
      comparisonGoodItem1Text: "jamais",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Téléchargements illimités",
      comparisonGoodItem2Text: "toujours",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Aucune limite de stockage",
      comparisonGoodItem3Text: "aucun",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Téléchargement par lots de 50 fichiers",
      comparisonGoodItem4Text: "à tout moment",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Politique transparente",
      comparisonGoodItem5Text: "dès le départ",
      feature1Label: "Sans Limites",
      feature1TitlePart1: "Transcrire 1 000 Heures ?",
      feature1TitlePart2: "Même Prix.",
      feature1Description: "Arrêtez de compter les minutes. Arrêtez de surveiller les plafonds. Que vous transcriviez 10 heures ou 10 000 heures par mois, vous payez le même tarif fixe. Pas de frais supplémentaires. Pas de factures surprises.",
      feature1Point1Icon: "✓",
      feature1Point1Text: `Pas de pièges de "politique d'usage équitable"`,
      feature1Point2Icon: "✓",
      feature1Point2Text: "Pas de ralentissement après X heures",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Pas d'angoisse de fin de mois",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Heures Mensuelles",
      feature1Stat2Number: "0 $",
      feature1Stat2Label: "Frais supplémentaires",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Téléversement à tout moment",
      feature1Stat4Number: "100 %",
      feature1Stat4Label: "Transparent",
      feature2Label: "Liberté en masse",
      feature2TitlePart1: "Téléversez votre",
      feature2TitlePart2: "Archive complète",
      feature2Description: "Otter vous offre 3 imports à vie en gratuit, 10 par mois en Pro. Nous vous offrons l'illimité. Téléversez vos podcasts en retard, toutes vos interviews, des années d'enregistrements. Aucune restriction.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 fichiers par lot",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Fichiers de 10 heures pris en charge",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Traitement pendant votre sommeil",
      feature2TableRow1Label: "Otter Gratuit",
      feature2TableRow1Value: "3 imports à vie",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 fichiers/mois",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Plafond de 50 heures/mois",
      feature2TableRow4Label: "Sans limite",
      feature2TableRow4Value: "Vraiment illimité ✓",
      feature3Label: "Preuve sociale",
      feature3TitlePart1: "Les utilisateurs",
      feature3TitlePart2: "Changent chaque jour",
      feature3Description: `"Je paie 100 $/an pour Otter et ils me limitent à 10 imports de fichiers par mois. Dès qu'il y aura une alternative avec des imports illimités, je pars !" - Vrai utilisateur Reddit`,
      feature3Point1Icon: "✓",
      feature3Point1Text: "50 000+ utilisateurs ont changé",
      feature3Point2Icon: "✓",
      feature3Point2Text: `Face à la "shrinkflation" d'Otter`,
      feature3Point3Icon: "✓",
      feature3Point3Text: "Jamais de retour en arrière",
      feature3Stat1Number: "50 K+",
      feature3Stat1Label: "Utilisateurs satisfaits",
      feature3Stat2Number: "1 M+",
      feature3Stat2Label: "Fichiers traités",
      feature3Stat3Number: "96 %",
      feature3Stat3Label: "Précision",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Pas de frais cachés",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutes/Mois",
      trustBadge2Number: "100+",
      trustBadge2Label: "Langues",
      trustBadge3Number: "96 %",
      trustBadge3Label: "Précision",
      trustBadge4Number: "50",
      trustBadge4Label: "Téléversement par lot",
      ctaTitle: "Arrêtez de payer pour du faux illimité",
      ctaSubtitle: "Rejoignez des milliers d'utilisateurs passés à la transcription vraiment illimitée",
      finalCta: "Essayez NeverCap Gratuit"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Liberté de Transfert en Masse",
      heroTitleLine1: "Transférez 50 Fichiers.",
      heroTitleHighlight: "Tout Traiter.",
      heroSubtitle: "Otter ne vous offre que 3 imports à vie. TROIS. Pour toute votre vie. Nous vous offrons des transferts illimités, par lots de 50 fichiers, quand vous voulez.",
      primaryCta: "Commencer le Transfert en Masse →",
      secondaryCta: "Voir les Limites",
      redditQuote: `"J'ai 3 ans d'épisodes de podcast à transcrire. Otter m'annonce 3 imports à vie. TROIS. C'est insultant."`,
      redditAuthorIcon: "📍",
      redditAuthorText: "Réelle frustration de r/podcasting",
      comparisonSectionTitlePart1: "Les",
      comparisonSectionTitleHighlight: "Limites Ridicules",
      comparisonSectionTitlePart2: "Qu'ils Imposent",
      comparisonSubtitle: "Comment les concurrents limitent votre capacité à traiter du contenu",
      limitCard1Service: "Otter Gratuit",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Imports à vie",
      limitCard1DescriptionLine2: "(Oui, pour TOUTE votre vie)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Fichiers par mois",
      limitCard2DescriptionLine2: "(Forfait $100/an)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fichier à la fois",
      limitCard3DescriptionLine2: "(Transfert séquentiel)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Transferts illimités",
      limitCard4DescriptionLine2: "50 fichiers par lot",
      feature1Label: "Puissance par Lots",
      feature1TitlePart1: "Traitez Vos",
      feature1TitleHighlight: "Archives Entières",
      feature1TitlePart2: "en Une Nuit",
      feature1Description: `Transférez 50 fichiers avant de dormir. Réveillez-vous avec les transcriptions prêtes. Pas de file d'attente, pas d'attente, pas de messages "upgradez". Juste une puissance de traitement à portée de main.`,
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 transferts simultanés",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Traitement parallèle",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Fichiers de 10h supportés",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5GB max par fichier",
      uploadAnimationText1: "50 Fichiers",
      uploadAnimationText2: "Déposer & Traiter",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 fichiers supplémentaires...",
      feature2Label: "Vitesse",
      feature2TitlePart1: "Du téléchargement au",
      feature2TitleHighlight: "Terminé en heures",
      feature2Description: "Notre infrastructure de traitement parallèle signifie que vos 50 fichiers n'attendent pas en file. Ils sont tous transcrits simultanément. Ce qui prenait des semaines ne prend maintenant que quelques heures.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Fichier d'1 heure : 5 minutes",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 fichiers : traités en parallèle",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notification par e-mail une fois terminé",
      timelineStep1Icon: "1",
      timelineStep1Title: "Télécharger",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Traitement",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magie de l'IA",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Terminé",
      timelineStep4Time: "< 2 heures",
      feature3Label: "Liberté",
      feature3TitlePart1: "Pas de files d'attente.",
      feature3TitleHighlight: "Pas d'attente.",
      feature3TitlePart2: "Pas de limites.",
      feature3Description: `Alors que d'autres vous font attendre dans des files virtuelles ou vous proposent des mises à niveau pour un "traitement prioritaire", nous traitons chaque téléchargement avec urgence. Votre contenu compte, et il ne devrait pas attendre.`,
      feature3Point1Icon: "✓",
      feature3Point1Text: "Pas de niveaux de priorité",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Même vitesse pour tous",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Téléchargez à tout moment, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Toujours prêt",
      feature3VisualSubtext: "Téléchargez dès que l'inspiration vous vient",
      useCasesTitlePart1: "Parfait pour",
      useCasesTitleHighlight: "Gros utilisateurs",
      useCasesSubtitle: "Scénarios réels où le téléchargement en masse sauve la mise",
      useCase1Title: "Archives de podcasts",
      useCase1Description: "Téléchargez 3 ans d'épisodes en une fois. Créez des transcriptions pour tout votre catalogue. Générez du contenu SEO pour chaque épisode.",
      useCase2Title: "Création de cours",
      useCase2Description: "Traitez toutes vos vidéos de cours simultanément. Créez des transcriptions accessibles pour les étudiants. Construisez des supports de cours consultables.",
      useCase3Title: "Retard d'interviews",
      useCase3Description: "Dégagez cette montagne d'interviews non transcrites. Traitez des semaines de recherche en quelques heures. Respectez vos délais sans paniquer.",
      useCase4Title: "Bibliothèque YouTube",
      useCase4Description: "Générez des sous-titres pour toute votre chaîne. Créez des articles de blog à partir du contenu vidéo. Améliorez le SEO pour toutes vos vidéos.",
      useCase5Title: "Archives de réunions",
      useCase5Description: "Téléchargez des mois de réunions enregistrées. Créez des notes de réunion consultables. Ne perdez plus jamais de décisions importantes.",
      useCase6Title: "Données de recherche",
      useCase6Description: "Traitez des groupes de discussion en masse. Transcrivez toutes les interviews des participants. Analysez les données qualitatives efficacement.",
      ctaTitle: "Finis les demandes de téléchargements supplémentaires",
      ctaSubtitle: "Obtenez un traitement en masse illimité qui fonctionne vraiment",
      finalCta: "Télécharger 50 fichiers maintenant →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Précision inégalée",
      heroTitleLine1: "96 % de précision.",
      heroTitleHighlight: "Chaque mot compte.",
      heroSubtitle: "Une précision inégalée dans 12 langues principales. Des timestamps au niveau des mots pour une synchronisation parfaite. Identification intelligente des interlocuteurs même dans des conversations rapides. Un formatage professionnel réellement lisible.",
      primaryCta: "Tester notre précision →",
      secondaryCta: "Voir les langues",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Précision en",
      statCard1DescriptionLine2: "12 langues principales",
      statCard2Percentage: "95 %+",
      statCard2DescriptionLine1: "Précision avec",
      statCard2DescriptionLine2: "Accents & dialectes",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Précision des",
      statCard3DescriptionLine2: "timestamps par mot",
      languageSectionTitlePart1: "96 % de précision",
      languageSubtitle: "Transcription professionnelle pour un contenu global",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Anglais",
      languageCard1Accuracy: "96 % de précision",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Espagnol",
      languageCard2Accuracy: "96 % de précision",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96 % de précision",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Français",
      languageCard4Accuracy: "96 % de précision",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Allemand",
      languageCard5Accuracy: "96 % de précision",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japonais",
      languageCard6Accuracy: "96 % de précision",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Coréen",
      languageCard7Accuracy: "96 % de précision",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugais",
      languageCard8Accuracy: "96 % de précision",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russe",
      languageCard9Accuracy: "96% de précision",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italien",
      languageCard10Accuracy: "96% de précision",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Néerlandais",
      languageCard11Accuracy: "96% de précision",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabe",
      languageCard12Accuracy: "96% de précision",
      moreLanguagesText: "+ 88 autres langues prises en charge avec 95%+ de précision",
      feature1Label: "Précision",
      feature1TitlePart1: "Mot par mot",
      feature1TitleHighlight: "Horodatages",
      feature1Description: "Chaque mot est parfaitement synchronisé avec sa position audio. Créez des transcriptions cliquables, générez des sous-titres précis ou accédez à des moments exacts dans vos enregistrements. Une précision de 100 ms approuvée par les professionnels.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Précision d'horodatage à 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Idéal pour le montage vidéo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Transcripts interactifs cliquables",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Sous-titres synchronisés image par image",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Intervenant 1",
      transcriptLine1Text: "Bienvenue dans l'épisode d'aujourd'hui du podcast.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Intervenant 2",
      transcriptLine2Text: "Merci de m'avoir invité dans l'émission !",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Intervenant 1",
      transcriptLine3Text: "Plongeons dans notre sujet principal...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Intervenant 2",
      transcriptLine4Text: "Absolument, je suis ravi d'en discuter.",
      feature2Label: "IA intelligente",
      feature2TitlePart1: "Gère",
      feature2TitleHighlight: "Conversations rapides",
      feature2Description: "Notre IA identifie avec précision les intervenants même lors de chevauchements de parole, d'interruptions et d'échanges rapides. Idéal pour les interviews, podcasts et réunions où les intervenants interviennent fréquemment.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifie jusqu'à 20 intervenants",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Gère parfaitement les interruptions",
      feature2Point3Icon: "Fonctionne avec les chevauchements de parole",
      feature2Point3Text: "Support des voix qui se chevauchent",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Maintient la précision dans les conversations croisées",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Intervenants identifiés",
      feature2VisualSubtext: "Même dans les conversations rapides",
      feature3Label: "Lisibilité",
      feature3TitlePart1: "Parfaitement",
      feature3TitleHighlight: "Texte formaté",
      feature3Description: "Fin des blocs de texte indigestes. Notre IA ajoute automatiquement des paragraphes, des phrases et une ponctuation exactement où il faut. Le résultat ? Des transcriptions agréables à lire et faciles à parcourir.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Césures intelligentes",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Ponctuation précise",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Capitalisation correcte",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Sortie propre et scannable",
      formattingTitle: "Avant & Après",
      formattingBeforeLabel: "❌ Autres :",
      formattingBeforeText: "alors aujourdhui on va parler des nouvelles fonctionnalités sur lesquelles nous avons travaillé je pense que vous allez vraiment les apprécier elles sont demandées par les utilisateurs depuis longtemps et nous les avons enfin finalisées",
      formattingAfterLabel: "✓ NeverCap :",
      formattingAfterText: "Aujourd'hui, nous allons parler des nouvelles fonctionnalités sur lesquelles nous avons travaillé. Je pense que vous allez vraiment les apprécier. Elles sont demandées par les utilisateurs depuis longtemps, et nous les avons enfin finalisées.",
      comparisonSubtitle: "Précision",
      comparisonSectionTitle: "Comparaison",
      comparisonDes: "Découvrez comment nous nous positionnons face à la concurrence",
      tableHeader1: "Fonctionnalité",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Précision (audio clair)",
      tableRow1NeverCap: "96 %",
      tableRow1Otter: "95 %",
      tableRow1Descript: "94 %",
      tableRow1Rev: "94 %",
      tableRow2Feature: "Horodatage mot par mot",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identification de l'interlocuteur",
      tableRow3NeverCap: "20 interlocuteurs",
      tableRow3Otter: "16 interlocuteurs",
      tableRow3Descript: "10 interlocuteurs",
      tableRow3Rev: "✕",
      tableRow4Feature: "Gère les dialogues simultanés",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limité",
      tableRow4Descript: "Limité",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formatage intelligent",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Basique",
      tableRow6Feature: "12 langues à 96 %",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Découvrez une précision de 96 %",
      ctaSubtitle: "Téléchargez vos fichiers audio les plus complexes et constatez la différence",
      finalCta: "Testez notre précision dès maintenant →",
        languageSectionTitlePart2: "en 12 langues principales"
    }
  },
  Pricing: {
    Hero: {
      "title": "Tarification simple et transparente",
      "highlighted_text": "Pas de limites cachées",
      "description": "Choisissez l'offre adaptée à vos besoins. Changez à tout moment. Sans engagement ni mauvaises surprises."
    },
    Cards: {
      "title": "Tarification simple et transparente.",
      "highlighted_text": "Pas de limites cachées.",
      "description": "Choisissez l'offre adaptée à vos besoins. Changez à tout moment. Sans engagement ni mauvaises surprises.",
      "plans": [
            {
              "name": "Gratuit",
              "price": "0 $",
              "period": "mois",
              "discount": "Parfait pour essayer notre service",
              "limits": {
                "title": "Limites quotidiennes",
                "items": [
                  "3 fichiers/jour (≈90 min total/jour)",
                  "Jusqu'à 30 min par fichier (≤250 Mo)",
                  "Téléverser 1 fichier à la fois",
                  "File d'attente standard"
                ]
              },
              "features": {
                "title": "Fonctionnalités",
                "items": [
                  "100+ langues",
                  "Étiquettes d'intervenants",
                  "Traduction",
                  "Tous les formats d'export"
                ]
              },
              "cta": {
                "text": "Commencez gratuitement. Sans carte bancaire.",
                "button": "Offre actuelle"
              }
            },
            {
              "name": "Pro Mensuel",
              "price": "17,99 $",
              "period": "mois",
              "discount": "9,99 $ pour le premier mois",
              "limits": {
                "title": "Aucune limite mensuelle",
                "items": [
                  "Minutes totales illimitées",
                  "Jusqu'à 10 heures / 5 Go par fichier",
                  "Téléverser 50 fichiers simultanément",
                  "File d'attente prioritaire"
                ]
              },
              "features": {
                "title": "Tout ce qui est inclus dans Gratuit, plus",
                "items": [
                  "Horodatages au niveau des mots",
                  "Identification avancée des intervenants",
                  "Paragraphes et ponctuation formatés",
                  "Support prioritaire"
                ]
              },
              "cta": {
                "text": "Minutes illimitées. Vitesse prioritaire. Téléversements groupés.",
                "button": "Passer Pro"
              },
              "badge": "Le plus populaire"
            },
            {
              "name": "Pro Annuel",
              "price": "$8,99",
              "period": "mois",
              "discount": "Facturé annuellement 107,88 $",
              "limits": {
                "title": "Identique à Pro Mensuel",
                "items": [
                  "Minutes totales illimitées",
                  "Jusqu'à 10 heures / 5 Go par fichier",
                  "Téléverser 50 fichiers simultanément",
                  "File d'attente prioritaire"
                ]
              },
              "features": {
                "title": "Tout ce qui est inclus dans Gratuit, plus",
                "items": [
                  "Horodatages au niveau des mots",
                  "Identification avancée des intervenants",
                  "Paragraphes et ponctuation formatés",
                  "Support prioritaire"
                ]
              },
              "cta": {
                "text": "Minutes illimitées. Vitesse prioritaire. Téléversements groupés.",
                "button": "Passer Pro"
              },
              "badge": "Meilleur Rapport Qualité-Prix - "
            }
          ],
      "disclaimer": `"Illimité" signifie pas de plafond mensuel ni de ralentissement artificiel. L'usage équitable s'applique à l'automatisation abusive ou la redistribution.`
    },
    ComparisonTable: {
      "header": {
        "title": "Comparer",
        "highlighted_text": "Toutes les fonctionnalités",
        "subtitle": "Voyez exactement ce que vous obtenez avec chaque forfait. Pas de limitations cachées."
      },
      "plans": [
              "Fonctionnalités",
              "Gratuit",
              "Pro Mensuel",
              "Pro Annuel"
            ],
      "features": [
            {
              "name": "Prix",
              "values": [
                "0 $/mois",
                {
                  "main": "17,99 $/mois",
                  "note": "9,99 $ le premier mois"
                },
                {
                  "main": "8,99 $/mois",
                  "note": "Facturé 107,88 $/an"
                }
              ]
            },
            {
              "name": "Minutes mensuelles",
              "values": ["~2 700 (90/jour)", "Illimité", "Illimité"]
            },
            {
              "name": "Durée maximale des fichiers",
              "values": ["30 minutes", "10 heures", "10 heures"]
            },
            {
              "name": "Taille maximale des fichiers",
              "values": ["250 Mo", "5 Go", "5 Go"]
            },
            {
              "name": "Téléversements groupés",
              "values": ["1 fichier", "50 fichiers", "50 fichiers"]
            },
            {
              "name": "Vitesse de traitement",
              "values": ["Standard", "Prioritaire", "Prioritaire"]
            },
            {
              "name": "Langues prises en charge",
              "values": ["100+ langues", "100+ langues", "100+ langues"]
            },
            {
              "name": "Traduction",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Identification de l'orateur",
              "values": ["Basique", "Avancé (20 orateurs)", "Avancé (20 orateurs)"]
            },
            {
              "name": "Horodatage au niveau des mots",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Paragraphes formatés",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formats d'exportation",
              "values": ["Tous les formats", "Tous les formats", "Tous les formats"]
            },
            {
              "name": "Support",
              "values": ["Email", "Email prioritaire", "Email prioritaire"]
            },
            {
              "name": "Conservation des données",
              "values": ["30 jours", "Pour toujours", "Pour toujours"]
            }
          ]
    },
    FAQ: {
      "title": "Foire aux",
      "titleHighligt": "Questions",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Est-ce vraiment illimité ?",
              "answer": "Oui ! Les forfaits Pro n'ont pas de limite mensuelle. Les seules limites sont techniques : durée maximale des fichiers de 10 heures et taille maximale de 5 Go. Vous pouvez traiter autant de fichiers que nécessaire."
            },
            {
              "q": "plan_change",
              "question": "Puis-je changer de forfait à tout moment ?",
              "answer": "Absolument ! Vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord. Passez à un forfait supérieur ou inférieur quand vous le souhaitez."
            },
            {
              "q": "payment_methods",
              "question": "Quels modes de paiement acceptez-vous ?",
              "answer": "Nous acceptons toutes les cartes de crédit et de débit principales, ainsi que PayPal, pour des paiements sécurisés et sans tracas."
            },
            {
              "q": "free_trial",
              "question": "Existe-t-il un essai gratuit pour Pro ?",
              "answer": "Oui ! Essayez Pro gratuitement pendant 7 jours, sans carte de crédit. De plus, bénéficiez de 45 % de réduction lors de votre premier mois d'abonnement."
            },
            {
              "q": "file_retention",
              "question": "Combien de temps conservez-vous mes fichiers ?",
              "answer": "Forfait gratuit : 30 jours. Forfaits Pro : Pour toujours ! Vos transcriptions sont toujours disponibles dans votre compte."
            },
            {
              "q": "data_security",
              "question": "Qu'en est-il de la sécurité des données ?",
              "answer": "Nous sommes certifiés SOC 2 et utilisons un chiffrement 256 bits. Nous n'utilisons jamais votre contenu pour entraîner nos modèles. Vos données vous appartiennent."
            }
          ]
    },
    CTA: {
      "title": "Prêt à passer à l'illimité ?",
      "subtitle": "Rejoignez 50 000+ professionnels qui transcrivent sans limites",
      "button": "Essayez NeverCap Gratuit →",
      "disclaimer": "Aucune carte de crédit requise • Commencez à transcrire en quelques secondes"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Conçu pour",
      heavyUsers: "Utilisateurs intensifs",
      whoActuallyNeed: "Qui ont vraiment besoin de l'illimité",
      heroSubtitle: "Des podcasteurs avec des années d'archives aux chercheurs avec des centaines d'interviews. Découvrez comment les pros utilisent NeverCap pour dépasser les limites.",
      podcasters: {
        title: "Podcasteurs",
        pain: '"Arrêtez de choisir quels épisodes méritent des transcriptions"',
        description: "Téléversez toute votre archive de podcasts en une fois. Générez des notes d'émission, améliorez le SEO et réutilisez le contenu sans compter les minutes.",
        benefits: {
          benefit1: "Téléversez tous les épisodes, pas seulement 3",
          benefit2: "Générez des notes d'émission optimisées SEO",
          benefit3: "Créez des archives consultables",
          benefit4: "Réutilisez en contenu de blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Épisodes"
          },
          stat2: {
            number: "200h",
            label: "Économisées"
          },
          stat3: {
            number: "3x",
            label: "Trafic SEO"
          }
        }
      },
      journalists: {
        title: "Journalistes & Écrivains",
        pain: '"Pression des délais et restrictions de téléversement"',
        description: "Téléversez tous vos entretiens en lot avant la deadline. Recherchez instantanément dans les transcriptions et ne ratez plus une citation cruciale.",
        benefits: {
          benefit1: "Téléversement en lot avant les deadlines",
          benefit2: "Recherchez tous les entretiens en une fois",
          benefit3: "Citations précises avec horodatages",
          benefit4: "Prise en charge des accents et langues"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Entretiens/mois"
          },
          stat2: {
            number: "96%",
            label: "Précision"
          },
          stat3: {
            number: "5min",
            label: "Par heure"
          }
        }
      },
      contentCreators: {
        title: "Créateurs de contenu",
        pain: `"L'accessibilité ne devrait pas être coûteuse"`,
        description: "Sous-titrez toute votre chaîne YouTube. Générez des sous-titres en plusieurs langues et améliorez instantanément le SEO de vos vidéos.",
        benefits: {
          benefit1: "Sous-titrez toutes les vidéos en une fois",
          benefit2: "249 traductions linguistiques",
          benefit3: "Fichiers SRT prêts pour YouTube",
          benefit4: "Améliorez le classement SEO des vidéos"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Vidéos"
          },
          stat2: {
            number: "100+",
            label: "Langues"
          },
          stat3: {
            number: "249",
            label: "Traductions"
          }
        }
      },
      researchers: {
        title: "Chercheurs & Universitaires",
        pain: '"Les données qualitatives ne devraient pas faire la queue"',
        description: "Traitez des études entières en une fois. Gérez des groupes de discussion, entretiens et débats avec une identification parfaite des intervenants.",
        benefits: {
          benefit1: "Traitez les groupes de discussion en masse",
          benefit2: "Identification de 20 intervenants",
          benefit3: "Exportez vers les logiciels d'analyse",
          benefit4: "Sécurité conforme au RGPD"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Étude"
          },
          stat2: {
            number: "96%",
            label: "Précision du groupe"
          },
          stat3: {
            number: "RGPD",
            label: "Conforme"
          }
        }
      },
      businessTeams: {
        title: "Équipes professionnelles",
        pain: '"Les enregistrements de réunion devraient être sans effort"',
        description: "Enregistrez directement les réunions ou téléchargez des fichiers audio pour une transcription instantanée. Créez des archives consultables à partir de conversations illimitées et ne perdez plus jamais de discussions importantes.",
        benefits: {
          benefit1: "Enregistrement audio direct & transcription",
          benefit2: "Enregistrements de réunion illimités",
          benefit3: "Archive de réunion consultable",
          benefit4: "Téléchargement instantané de fichiers audio"
        },
        stats: {
          stat1: {
            number: "En direct",
            label: "Enregistrement"
          },
          stat2: {
            number: "Instantané",
            label: "Télécharger"
          },
          stat3: {
            number: "20+",
            label: "Intervenants"
          }
        }
      },
      educators: {
        title: "Éducateurs",
        pain: `"Les vidéos YouTube ont besoin d'une transcription instantanée"`,
        description: "Collez simplement des liens YouTube pour obtenir des transcriptions instantanées et des sous-titres générés automatiquement. Transformez toute vidéo éducative en contenu accessible et consultable.",
        benefits: {
          benefit1: "Transcription directe de liens YouTube",
          benefit2: "Génération automatique de sous-titres vidéo",
          benefit3: "Transcrire des cours entiers",
          benefit4: "Archives de cours consultables"
        },
        stats: {
          stat1: {
            number: "1-Clic",
            label: "Coller YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Sous-titres"
          },
          stat3: {
            number: "100+",
            label: "Langues"
          }
        }
      },
      quotes: {
        title: "Vrais utilisateurs,",
        titleHighlight: "Vraie liberté",
        subtitle: "Écoutez des professionnels qui ont brisé les limites artificielles",
        testimonials: {
          mike: {
            textBefore: `"J'avais`,
            highlight: "3 ans d'épisodes",
            textAfter: `non transcrits. Otter voulait que j'en choisisse 3. TROIS. NeverCap m'a permis de télécharger les 150 épisodes en un week-end."`,
            name: "Mike Rodriguez",
            role: "Animateur de podcast"
          },
          jessica: {
            textBefore: '"En tant que journaliste indépendante, je ne peux pas me permettre les',
            highlight: "$100/mois",
            textAfter: `de Trint, mais je ne peux pas non plus travailler avec la limite de 10 fichiers par mois d'Otter. NeverCap a sauvé ma carrière."`,
            name: "Jessica Park",
            role: "Journaliste indépendante"
          },
          sarah: {
            textBefore: '"Notre équipe de recherche avait',
            highlight: "200 heures",
            textAfter: `d'enregistrements de groupes de discussion. Nous avons tout traité en un week-end au lieu de rationner les minutes mensuelles."`,
            name: "Dr. Sarah Chen",
            role: "Chercheuse principale"
          },
          carlos: {
            textBefore: '"Je crée du contenu éducatif en espagnol. NeverCap transcrit parfaitement et',
            highlight: "traduit en anglais",
            textAfter: 'pour une portée plus large. Pas de limites, juste de la croissance."',
            name: "Carlos Martinez",
            role: "Éducateur YouTube"
          }
        }
      },
      industries: {
        title: "Fiable dans",
        titleHighlight: "Toutes les industries",
        subtitle: "Les professionnels du monde entier passent à l'illimité véritable",
        list: {
          media: "Médias & Édition",
          education: "Éducation",
          healthcare: "Santé",
          technology: "Technologie",
          finance: "Finance",
          legal: "Juridique"
        }
      },
      cta: {
        title: "Votre cas d'utilisation a aussi besoin d'illimité",
        subtitle: "Rejoignez 50 000+ professionnels qui ont arrêté de compter les minutes et ont commencé à créer",
        button: "Commencez votre voyage illimité →"
      }
    },
    Podcasters: {
      badge: "Conçu pour les podcasteurs",
      heroTitle: "Transcrivez vos",
      heroTitleHighlight: "Archives de podcasts entières",
      heroSubtitle: "Téléchargez tout votre catalogue. Créez des notes d'émission pour chaque épisode. Plus besoin de choisir quels épisodes transcrire.",
      ctaPrimary: "Commencez à transcrire gratuitement",
      ctaSecondary: "Voir comment ça marche",
      trustBadge1: "10 000+ podcasteurs",
      trustBadge2: "Épisodes illimités",
      trustBadge3: "Transcripts optimisés pour le SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Épisodes/Mois"
        },
        stat2: {
          number: "50",
          label: "Téléchargement par lots"
        },
        stat3: {
          number: "10h",
          label: "Durée max d'un épisode"
        },
        stat4: {
          number: "96 %",
          label: "Précision"
        }
      },
      problemTitle: "Le",
      problemTitleHighlight: "Problème de transcription de podcasts",
      problemSubtitle: `D'autres services vous obligent à choisir quels épisodes "méritent" d'être transcrits`,
      problems: {
        problem1: {
          title: "Les limites de téléchargement tuent les archives",
          description: "Otter offre 3 imports à vie en gratuit, 10 par mois en Pro. Comment transcrire 3 ans d'épisodes ?"
        },
        problem2: {
          title: "Opportunités SEO manquées",
          description: "Chaque épisode non transcrit est du trafic SEO perdu. Mais Descript vous limite à 30 heures/mois au mieux."
        },
        problem3: {
          title: "Les coûts explosent avec la croissance",
          description: "Plus votre podcast grandit, plus les coûts de transcription grimpent. Des frais de $2/heure en surplus rendent l'évolution impossible."
        }
      },
      solutionTitle: "La",
      solutionTitleHighlight: "Solution NeverCap",
      solutionDescription: "Transcription vraiment illimitée. Téléchargez toute votre archive. Transcrivez chaque nouvel épisode. Générez des notes d'émission à grande échelle. Pas de plafond, pas de limites, juste de la croissance.",
      workflowTitle: "Votre flux de travail de podcast,",
      workflowTitleHighlight: "Simplifié",
      workflowSubtitle: "De l'enregistrement aux notes d'émission optimisées SEO en quelques minutes",
      workflow: {
        step1: {
          title: "Téléchargez des épisodes",
          description: "Déposez 50 épisodes à la fois. MP3, MP4, WAV - nous gérons tout."
        },
        step2: {
          title: "L'IA transcrit",
          description: "96 % de précision avec identification des locuteurs. Idéal pour les interviews."
        },
        step3: {
          title: "Mise en forme intelligente",
          description: "L'IA ajoute automatiquement des paragraphes, des phrases et une ponctuation."
        },
        step4: {
          title: "Publier & Classer",
          description: "Exportez vers votre site web. Observez votre trafic SEO augmenter."
        }
      },
      featuresTitle: "Fonctionnalités pour Podcasteurs",
      featuresTitleHighlight: "Dont Vous Avez Vraiment Besoin",
      featuresSubtitle: "Conçu par des podcasteurs, pour des podcasteurs",
      features: {
        feature1: {
          title: "Détection Multi-Locuteurs",
          description: "Identifie et étiquette automatiquement jusqu'à 20 locuteurs. Idéal pour les tables rondes, interviews et émissions à plusieurs animateurs."
        },
        feature2: {
          title: "Chapitres avec Horodatage",
          description: "Générez des horodatages cliquables pour les descriptions YouTube. Permettez aux auditeurs de sauter instantanément à leurs segments préférés."
        },
        feature3: {
          title: "Formatage Intelligent",
          description: "Ajoute automatiquement des paragraphes, des phrases et une ponctuation. Obtenez des transcriptions propres et lisibles. Gagnez des heures en post-production."
        },
        feature4: {
          title: "Optimisation SEO",
          description: "Des transcriptions formatées pour les moteurs de recherche. Boostez la découvrabilité de votre podcast et touchez de nouveaux auditeurs."
        },
        feature5: {
          title: "100+ Langues",
          description: "Transcription dans n'importe quelle langue. Traduction dans 249+ langues. Atteignez un public mondial sans effort."
        },
        feature6: {
          title: "Traitement par Lots",
          description: "Téléchargez 50 épisodes avant de dormir. Réveillez-vous avec des transcriptions complètes. Traitez toute votre archive en une nuit."
        }
      },
      testimonialsTitle: "Podcasteurs Qui Ont Fait",
      testimonialsTitleHighlight: "Le Changement",
      testimonialsSubtitle: "Des histoires vraies de vrais podcasteurs",
      testimonials: {
        mike: {
          text: `"Je fais un podcast depuis 3 ans et je transcrivais tout manuellement comme un idiot. J'ai téléchargé 6 épisodes d'un coup et cela a parfaitement séparé mon co-animateur et moi. L'épisode en café que je pensais raté ? Une transcription cristalline. Je ne retaperai plus jamais ça moi-même."`,
          name: "Mike Rodriguez",
          role: 'Animateur du podcast "The Daily Grind"'
        },
        sarah: {
          text: `"Otter me limitait à 10 imports de fichiers par mois. J'avais 150 épisodes en retard. NeverCap m'a permis de tout télécharger en 3 lots. Mon trafic organique a augmenté de 300% depuis l'ajout de transcriptions aux anciens épisodes. Cela s'est littéralement payé tout seul."`,
          name: "Sarah Chen",
          role: 'Créatrice de "Tech Talks Today"'
        }
      },
      comparisonTitle: "Pourquoi les Podcasteurs Choisissent",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Voyez comment nous nous comparons à la concurrence",
      comparison: {
        headers: {
          feature: "Fonctionnalité",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Limite Mensuelle d'Épisodes",
            nevercap: "Illimitée",
            otter: "~13 épisodes (1200 min)",
            descript: "~30 épisodes (30 h)"
          },
          uploadLimit: {
            feature: "Limite de Téléchargement de Fichiers",
            nevercap: "Illimitée",
            otter: "10 par mois",
            descript: "1 à la fois"
          },
          batchProcessing: {
            feature: "Traitement par Lots",
            nevercap: "50 fichiers",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Durée Maximale d'Épisode",
            nevercap: "10 heures",
            otter: "90 minutes",
            descript: "Illimitée"
          },
          speakerDetection: {
            feature: "Détection des intervenants",
            nevercap: "20 intervenants",
            otter: "16 intervenants",
            descript: "10 intervenants"
          },
          smartFormatting: {
            feature: "Formatage intelligent",
            nevercap: "✓ Parfait",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Prix",
            nevercap: "17,99 $/mois",
            otter: "16,99 $/mois",
            descript: "30 $/mois"
          }
        }
      },
      ctaTitle: "Commencez à transcrire chaque épisode",
      ctaSubtitle: "Rejoignez 10 000+ podcasteurs qui ne s'inquiètent jamais des limites",
      ctaButton: "Téléchargez vos 50 premiers épisodes gratuitement →",
      ctaDisclaimer: "Aucune carte de crédit requise • Traitez un nombre illimité d'épisodes • Annulez à tout moment"
    },
    Journalists: {
      hero: {
        badge: "Pour les journalistes et écrivains",
        title: "Transcrivez chaque interview.",
        titleHighlight: "Ne manquez jamais une citation.",
        subtitle: "Arrêtez de choisir quelles interviews méritent d'être transcrites. Téléchargez tous les enregistrements en une fois, recherchez instantanément dans tout et respectez vos délais sans stress de téléchargement.",
        ctaPrimary: "Commencez les téléchargements illimités →",
        ctaSecondary: "Voir comment ça marche",
        stats: {
          uploads: {
            number: "∞",
            label: "Téléchargements de fichiers"
          },
          accuracy: {
            number: "96 %",
            label: "Précision"
          },
          speed: {
            number: "5 min",
            label: "Par heure"
          }
        },
        dashboard: {
          title: "File d'attente des interviews",
          status: "• Tout en traitement",
          interviews: {
            cityCouncil: {
              title: "Réunion du conseil municipal",
              duration: "2 h 15 min • Téléchargement...",
              action: "En cours"
            },
            expertInterview: {
              title: "Interview d'expert - Dr. Chen",
              duration: "45 min • Transcription...",
              action: "96 % Terminé"
            },
            pressConference: {
              title: "Conférence de presse",
              duration: "1 h 30 min • Prêt",
              action: "Voir →"
            },
            phoneInterview: {
              title: "Interview téléphonique - Source",
              duration: "35 min • Prêt",
              action: "Voir →"
            }
          }
        }
      },
      problem: {
        title: "Le",
        titleHighlight: "Problème de transcription des journalistes",
        subtitle: `D'autres services vous obligent à choisir quelles interviews "méritent" d'être transcrites`,
        problems: {
          uploadLimits: {
            title: "Les limites de téléchargement tuent les enquêtes",
            description: "Otter vous offre 10 importations de fichiers par mois en Pro. Comment transcrivez-vous 3 semaines d'interviews d'enquête ?"
          },
          missingQuotes: {
            title: "Citations cruciales manquantes",
            description: "Chaque interview non transcrite pourrait contenir la citation clé de l'article. Mais Trint vous limite à 50 heures/mois au mieux."
          },
          costExplosion: {
            title: "Les coûts explosent avec les délais",
            description: "Plus votre enquête avance, plus les coûts de transcription grimpent. Des frais excédentaires de 100$/mois rendent les scoops impossibles."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "Solution NeverCap",
          description: "Transcription vraiment illimitée. Importez votre enquête entière. Transcrivez chaque interview. Recherchez toutes les citations instantanément. Pas de plafond, pas de limites, juste du journalisme."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Meilleur logiciel de transcription d'interviews",
        titleSuffix: "pour journalistes",
        subtitle: "Des avantages réels quand les délais sont serrés et la précision essentielle",
        solutions: {
          unlimitedUploads: {
            label: "Volume illimité",
            title: "Volume illimité pour toutes vos interviews",
            description: "Contrairement aux logiciels avec plafond de minutes, vous pouvez transcrire chaque interview, d'un échange rapide à une discussion de plusieurs heures. Plus de stress de manquer de crédits en deadline.",
            points: {
              simultaneousUpload: "Pas de limite mensuelle de minutes",
              noLimits: "Prise en charge d'interviews de 10 heures",
              processWhileWrite: "Traitez des enquêtes entières en une fois",
              longRecordings: "Enregistrements de 10 heures pris en charge"
            },
            visual: {
              number: "∞",
              label: "Aucune limite. Jamais."
            }
          },
          instantSearch: {
            label: "Vitesse éclair",
            title: "Une vitesse adaptée à votre rythme d'actualité",
            description: "Obtenez votre transcription en minutes, pas en jours. Bouclez vos articles plus vite que jamais. Notre IA traite des heures d'audio pendant que vous prenez un café.",
            points: {
              searchAll: "Transcription en 5 minutes pour 1 heure d'interview",
              wordTimestamps: "Traitement prioritaire pour les urgences",
              jumpToMoments: "Suivi de progression en temps réel"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Par heure d'audio",
              results: {
                mayorInterview: "« ...notre politique climatique va transformer... »",
                expertPanel: "« ...la déclaration de politique montre clairement... »"
              }
            }
          },
          professionalAccuracy: {
            label: "Précision prête à citer",
            title: "Une précision que vous pouvez citer",
            description: "Notre IA fournit des transcriptions ultra-précises, garantissant des citations fiables. Des transcriptions professionnelles approuvées par les rédactions.",
            points: {
              accuracyGuarantee: "Garantie de 96% de précision",
              handlesAccents: "Gère la terminologie technique",
              smartPunctuation: "Identification parfaite des intervenants"
            },
            visual: {
              accuracy: "96%",
              label: "Précision prête à publier",
              transcript: {
                speaker1: "« L’enquête a révélé des divergences importantes dans les rapports financiers. »",
                speaker2: "« Pouvez-vous nous donner plus de détails sur ces divergences spécifiques ? »"
              }
            }
          },
            ironclad: {
                  label: "Protection des sources",
                  title: "Protection infaillible des sources",
                  description: "Nous offrons des fonctionnalités de sécurité robustes pour protéger vos données sensibles et sources confidentielles. Chiffrement bancaire pour des enquêtes sécurisées.",
                  points: {
                    accuracyGuarantee: "Chiffrement de bout en bout",
                    handlesAccents: "Options de suppression automatique",
                    smartPunctuation: "Conforme RGPD & vie privée"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Sécurité maximale"
                  }
                }
        }
      },
      features: {
        title: "Tout ce dont un",
        titleHighlight: "journaliste a besoin",
        subtitle: "Outils professionnels adaptés à votre flux de travail",
        featuresList: {
          languages: {
            title: "100+ langues",
            description: "Interrogez des sources dans 12 langues principales avec 96% de précision."
          },
          exportFormats: {
            title: "Formats d'export",
            description: "Word, PDF, SRT, TXT. Compatible avec tous les workflows."
          },
          sourceProtection: {
            title: "Protection des sources",
            description: "Chiffrement bancaire. Vos sources restent confidentielles."
          },
          timestamps: {
            title: "Horodatages",
            description: "Cliquez sur n'importe quelle citation pour accéder au moment exact de l'audio."
          },
          teamSharing: {
            title: "Partage d'équipe",
            description: "Collaborez avec les éditeurs. Partagez les transcriptions en toute sécurité."
          },
          mobileReady: {
            title: "Prêt pour mobile",
            description: "Téléchargez depuis votre téléphone. Consultez les transcriptions n'importe où."
          },
          smartFormatting: {
            title: "Formatage intelligent",
            description: "Paragraphes et ponctuation automatiques pour des transcriptions lisibles."
          },
          batchProcessing: {
            title: "Traitement par lots",
            description: "Téléchargez 50 fichiers à la fois. Traitez pendant la nuit pendant que vous dormez."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "J'avais 3 ans d'interviews non transcrites à cause des limites de téléchargement. NeverCap m'a permis de tout traiter en un week-end. Un changement radical.",
          name: "Jessica Park",
          role: "Journaliste indépendante, ancienne utilisatrice d'Otter"
        }
      },
      cta: {
        title: "Commencer la transcription",
        titleHighlight: "Sans limites",
        subtitle: "Rejoignez des milliers de journalistes qui ont arrêté de compter les téléchargements et se concentrent sur les histoires.",
        ctaPrimary: "Essayez gratuitement sans limite →",
        ctaSecondary: "Voir les tarifs"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Pour les créateurs de contenu",
        title: "Transcrire des vidéos YouTube,",
        titleHighlight: "Sans limite",
        titleSuffix: "1",
        subtitle: "Que vous ayez besoin de transcrire une vidéo YouTube, une vidéo TikTok pour la réutiliser, ou de trouver comment transcrire une vidéo Facebook en texte, notre plateforme gère tout cela sans effort. Générez des sous-titres dans 100+ langues sans limites mensuelles – juste une liberté créative pure.",
        ctaPrimary: "Commencer le sous-titrage illimité →",
        ctaSecondary: "Voir comment ça marche",
        stats: {
          videos: {
            number: "∞",
            label: "Vidéos/mois"
          },
          languages: {
            number: "100+",
            label: "Langues"
          },
          accuracy: {
            number: "96%",
            label: "Précision"
          },
          platforms: {
            number: "10+",
            label: "Plateformes"
          }
        }
      },
      platforms: {
        title: "Récupérer et transcrire depuis n'importe quelle plateforme",
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
          titleMax: "Transcrire des vidéos depuis",
          titleMaxHighlight: "N'importe quelle plateforme"
    },
      features: {
        title: "Tout ce dont vous avez besoin pour",
        titleHighlight: "Évoluer votre contenu",
        subtitle: "Outils professionnels sans limites professionnelles",
        oneClickImport: {
          label: "Importation en un clic",
          title: "Transcrire YouTube, TikTok &",
          titleHighlight: "Instagram en collant un lien",
          description: "Notre outil simplifie la transcription de vos vidéos. Pour transcrire une vidéo Instagram, collez simplement le lien. Idem pour Vimeo. Traitez l'historique complet de votre chaîne en un week-end.",
          points: {
            directYoutube: "Transcription directe depuis YouTube",
            multiplePlatforms: "Récupération depuis 10+ plateformes",
            batchPlaylists: "Traitement par lots des playlists",
            autoSync: "Synchronisation automatique avec vos chaînes"
          },
          demo: {
            instruction: "Collez l'URL de votre vidéo :",
            url: "https://youtube.com/watch?v=...",
            status: "Récupération & Transcription..."
          }
        },
        globalReach: {
          label: "Portée mondiale",
          title: "100+ langues.",
          titleHighlight: "Zéro limite.",
          description: "Touchez un public mondial avec des traductions automatiques dans 100+ langues. Générez des sous-titres multilingues simultanément. Sans frais supplémentaires ni quotas mensuels.",
          points: {
            highAccuracy: "96% de précision dans 12 langues principales",
            unlimitedTranslations: "Traductions illimitées incluses",
            multicultural: "Idéal pour du contenu multiculturel",
            autoDetect: "Détection automatique de la langue"
          },
          visual: {
            number: "100+",
            title: "Langues prises en charge",
            subtitle: "Traduisez une fois, touchez tout le monde"
          }
        },
        flexibleExport: {
          label: "Export flexible",
          title: "Tous les formats",
          titleHighlight: "Dont vous avez besoin",
          description: "Exportez dans le format adapté à votre flux. Des fichiers SRT pour YouTube aux VTT pour lecteurs web, ou docs modifiables pour scripts. Exports illimités inclus dans tous les forfaits.",
          points: {
            videoFormats: "SRT & VTT pour plateformes vidéo",
            editingFormats: "DOCX & PDF pour édition",
            dataAnalysis: "CSV pour analyse de données",
            simpleScripts: "TXT pour scripts simples"
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
        title: "Du téléchargement",
        titleHighlight: "À la publication",
        titleSuffix: "En minutes",
        subtitle: "La solution la plus rapide pour sous-titrer toute votre bibliothèque",
        steps: {
          pasteLinks: {
            title: "Collez des liens",
            description: "Ajoutez des liens YouTube, TikTok ou autres. Ou importez des fichiers directement."
          },
          autoTranscribe: {
            title: "Transcription auto.",
            description: "L'IA traite avec 96% de précision. Gère les accents et intervenants multiples."
          },
          editTranslate: {
            title: "Éditez & Traduisez",
            description: "Perfectionnez vos sous-titres. Traduisez dans 100+ langues instantanément."
          },
          exportPublish: {
            title: "Exportez & Publiez",
            description: "Téléchargez dans tout format. Importez sur votre plateforme. Terminé !"
          }
        }
      },
      testimonials: {
        title: "Les créateurs",
        titleHighlight: "Passent chaque jour",
        subtitle: "De forfaits limités à une liberté illimitée",
        carlos: {
          textBefore: "Je crée du contenu éducatif en espagnol. NeverCap transcrit parfaitement et",
          textAfter: "pour une plus grande portée. Pas de limites, juste de la croissance. Mes vues ont triplé avec les sous-titres multilingues.",
          highlight: "traduit en anglais",
          name: "Carlos Martinez",
          role: "Éducateur YouTube • 250K abonnés"
        },
        sarah: {
          textBefore: "Descript demandait 30$/mois pour",
          textAfter: ". J'avais plus de 500 vidéos en retard. NeverCap m'a permis de tout traiter en un week-end. Le boost SEO des sous-titres s'est amorti dès le premier mois.",
          highlight: "30 heures",
          name: "Sarah Lee",
          role: "Lifestyle Vlogger • 180K abonnés"
        },
        jake: {
          textBefore: "La",
          textAfter: "fonctionnalité change tout. Je ne télécharge plus rien. Juste coller, transcrire, terminé. Préparer mes extraits de podcast pour TikTok n'a jamais été aussi simple.",
          highlight: "récupération directe YouTube",
          name: "Jake Wilson",
          role: "Animateur de podcast • Top 1% des créateurs"
        },
        yuki: {
          textBefore: "Je crée du contenu en 5 langues. D'autres services facturent",
          textAfter: ". NeverCap offre des traductions illimitées. Mon audience internationale a augmenté de 400% depuis que j'utilise des sous-titres natifs appropriés.",
          highlight: "par traduction",
          name: "Yuki Tanaka",
          role: "Créateur gaming • 500K abonnés"
        }
      },
      cta: {
        title: "Votre chaîne entière. Sous-titrée. Aujourd'hui.",
        subtitle: "Rejoignez 50 000+ créateurs qui ont arrêté de compter les minutes et ont commencé à créer",
        button: "Commencer le sous-titrage illimité →"
      },
        FAQSection: {
              "title": "Vos questions sur la transcription,",
              "titleHighlight": "Répondues",
              subtitle: "Tout ce que vous devez savoir sur la transcription de vidéos depuis différentes plateformes",
              "questions": [
                    {
                      "question": "Q : Comment transcrire une vidéo YouTube avec NeverCap ?",
                      "answer": "C'est simple. Trouvez la vidéo YouTube à transcrire, copiez son URL et collez-la dans notre app. Notre IA récupérera automatiquement la vidéo et fournira une transcription texte complète en quelques minutes."
                    },
                    {
                      "question": "Q : Quelle est la meilleure façon de transcrire une vidéo Facebook en texte ?",
                      "answer": "Le plus simple est d'utiliser un lien direct. Copiez l'URL de la vidéo Facebook, et notre plateforme s'occupe du reste, convertissant la parole en texte avec jusqu'à 96% de précision, vous évitant la transcription manuelle."
                    },
                    {
                      "question": "Q : Puis-je transcrire des vidéos TikTok et Instagram ?",
                      "answer": "Absolument. Nous prenons en charge la transcription pour TikTok et Instagram. Idéal pour les créateurs qui veulent réutiliser leur contenu vidéo court en articles de blog, posts ou mises à jour réseaux sociaux textuelles."
                    },
                    {
                      "question": "Q : Comment transcrire une vidéo Vimeo en texte ?",
                      "answer": "Transcrire des vidéos Vimeo est aussi simple que sur toute autre plateforme. Copiez simplement l'URL Vimeo et collez-la dans NeverCap. Notre IA traitera la vidéo et générera une transcription texte précise téléchargeable en multiples formats."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Conçu pour l'excellence académique",
      heroTitle1: "Transcrivez chaque interview.",
      heroTitle2: "Analysez toutes vos données.",
      heroSubtitle: "Arrêtez de choisir quels groupes de discussion transcrire. Traitez toutes vos données qualitatives avec 96% de précision et une identification des intervenants parfaite - même avec 20 participants qui se coupent la parole.",
      heroCtaPrimary: "Essayez gratuitement - Sans carte bancaire",
      heroCtaSecondary: "Voir comment ça marche",
      statsInterviewHours: "Heures d'interview",
      statsAccuracy: "Précision",
      statsSpeakersId: "ID intervenants",
      statsCompliant: "Conforme",
      problemTitle: "Le",
      problemSubtitle: `D'autres services vous font choisir quelles données "méritent" d'être transcrites`,
      problemCard1Title: "Les limites de téléchargement tuent les études",
      problemCard1Desc: "Otter offre 3 imports à vie. Comment transcrire 200 heures de groupes de discussion ?",
      problemCard2Title: "Données critiques manquantes",
      problemCard2Desc: "Chaque interview non transcrite pourrait contenir des insights révolutionnaires. Mais Rev facture 2$/min minimum.",
      problemCard3Title: "L'argent des subventions disparaît",
      problemCard3Desc: "Plus votre jeu de données s'agrandit, plus les coûts de transcription explosent. 500$ par groupe de discussion rendent l'expansion impossible.",
      solutionTitle: "Solution NeverCap",
      solutionDesc: "Transcription vraiment illimitée. Téléchargez votre étude entière. Transcrivez chaque entretien. Analysez toutes vos données. Pas de plafonds, pas de limites, juste de la recherche.",
      feature1Label: "Pas de limites",
      feature1Title: "Gérer votre",
      feature1Desc: `Téléchargez 200 heures d'entretiens ce soir. Réveillez-vous avec des transcriptions complètes et consultables. Pas de plafonds mensuels, pas de limites par fichier, pas de "fair use" absurde.`,
      feature1Point1: "Téléchargement par lots de 50 fichiers simultanément",
      feature1Point2: "Traitez complètement les études longitudinales",
      feature1Point3: "Pas de limites de stockage pour les transcriptions",
      feature1Point4: "Export vers NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Heures illimitées",
      feature1Visual2: "Même prix pour 10 ou 10 000 heures",
      feature2Label: "IA intelligente",
      feature2Title: "Précision assurée",
      feature2Desc: "Notre IA suit jusqu'à 20 intervenants même lorsqu'ils se coupent la parole, s'interrompent ou parlent tous en même temps. Chaque voix est capturée et étiquetée correctement.",
      feature2Point1: "Identification de 20 intervenants",
      feature2Point2: "Gère les dialogues croisés et interruptions",
      feature2Point3: "Étiquettes d'intervenants modifiables",
      feature2Point4: "Horodatage pour chaque mot",
      conversationParticipant1: "Participant 1",
      conversationText1: "Le principal obstacle auquel nous sommes confrontés est sans aucun doute le coût du traitement...",
      conversationParticipant2: "Participant 2",
      conversationText2: "Absolument, mais j'ajouterais que l'accès est—",
      conversationParticipant3: "Participant 3",
      conversationText3: "—désolé de vous interrompre, mais le transport est aussi un énorme problème.",
      conversationText4: "Oui ! C'est exactement ce que j'allais dire.",
      conversationParticipant4: "Participant 4",
      conversationText5: "Dans les zones rurales, ce sont les trois : coût, accès ET transport.",
      feature3Label: "Précision",
      feature3Title: "Digne de confiance",
      feature3Desc: "Gère comme un pro le jargon technique, les accents marqués et la terminologie spécialisée. Suffisamment précis pour publication, relecture par les pairs et votre comité de thèse.",
      feature3Point1: "Terminologie médicale & scientifique",
      feature3Point2: "100+ langues & dialectes",
      feature3Point3: "Modes verbatim & lecture épurée",
      feature3Point4: "Éditez et exportez dans tous formats",
      feature3Visual1: "Précision niveau recherche",
      feature3Visual2: "Approuvé par 50 000+ chercheurs",
      feature4Label: "Sécurité",
      feature4Title: "Certification conforme IRB",
      feature4Desc: "Vos données de recherche sensibles sont protégées par une sécurité professionnelle. Conforme RGPD, options compatibles HIPAA, et pistes d'audit complètes pour les exigences IRB.",
      feature4Point1: "Chiffrement de bout en bout",
      feature4Point2: "Conforme RGPD & CCPA",
      feature4Point3: "Politiques de suppression automatique",
      feature4Point4: "Collaboration sécurisée en équipe",
      useCasesTitle: "Parfait pour",
      useCasesSubtitle: "De l'ethnographie aux essais cliniques",
      useCase1Title: "Groupes de discussion",
      useCase1Desc: "Gérez 8-20 participants avec chevauchements de parole. Identification parfaite des intervenants même dans les débats animés. Export direct vers les logiciels d'analyse qualitative.",
      useCase2Title: "Entretiens Approfondis",
      useCase2Desc: "Traitez des centaines d'entretiens individuels simultanément. Maintenez la cohérence sur l'ensemble de vos données. Recherchez instantanément dans toutes les transcriptions.",
      useCase3Title: "Recherche Clinique",
      useCase3Desc: "Options conformes à la HIPAA pour les entretiens patients. Transcription précise de la terminologie médicale. Gestion sécurisée des données de santé sensibles.",
      useCase4Title: "Études Ethnographiques",
      useCase4Desc: "Enregistrements sur le terrain en milieu naturel. Gestion du bruit de fond et des interlocuteurs multiples. Prise en charge de 100+ langues et dialectes.",
      useCase5Title: "Projets d'Histoire Orale",
      useCase5Desc: "Archivez des collections entières sans limites. Créez des archives historiques consultables. Idéal pour les études longitudinales et générationnelles.",
      useCase6Title: "Recherche Universitaire",
      useCase6Desc: "Tarifs adaptés aux étudiants avec toutes les fonctionnalités. Traitez vos données à moindre coût. Respectez les délais serrés grâce au traitement par lots.",
      testimonialTitle: "Approuvé par",
      testimonialText: "Notre équipe avait 200 heures d'enregistrements de groupes de discussion pour notre étude en santé communautaire. D'autres services nous demandaient de choisir quelles sessions transcrire à cause du coût. NeverCap nous a permis de tout traiter en un week-end. L'identification des 20 intervenants a fonctionné—même lors de nos discussions les plus confuses où tout le monde parlait en même temps. Cet outil a révolutionné notre gestion des données qualitatives.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Chercheuse Principale, Institut de Santé Publique",
      ctaTitle: "Arrêtez de Choisir Quelles Données Analyser",
      ctaSubtitle: "Rejoignez 50 000+ chercheurs qui transcrivent tout",
      ctaButton: "Essayez NeverCap Gratuitement",
        problemTitle2: "Problème de transcription recherche",
        title: "The",
        useCasesTitle2: "Toutes les méthodes de recherche",
        testimonialTitle2: "Chercheurs de Premier Plan",
        feature1TitleHl: "Projet de recherche complet",
        feature1TitlePost: "Tout en un seul endroit",
        feature2TitleHl: "Entretiens avec groupes cibles",
        feature2TitlePost: "Réussite à chaque fois",
        feature3TitleHl: "Taux de précision de 96%",
        feature4TitleHl: "Sécurité",
        testimonialText2Hl: "200 heures",
        testimonialText3: "d'enregistrements de groupes de discussion issus de notre étude sur la santé communautaire. D'autres services nous demandaient de choisir quelles sessions transcrire à cause du coût. NeverCap nous a permis de traiter",
        testimonialText4Hl: "tout en un week-end",
        testimonialText5: ". L'identification des 20 intervenants a vraiment fonctionné, même lors de nos discussions les plus confuses où tout le monde parlait en même temps. Cet outil a",
        testimonialText6Hl: "complètement changé",
        testimonialText7: "notre manière de gérer les données qualitatives."
    },
    BusinessTeams: {
      heroBadge: "Pour les Équipes Professionnelles",
      heroTitle1: "Enregistrement de Réunions",
      heroTitle2: "Simplifié",
      heroSubtitle: "Enregistrez des réunions directement dans votre navigateur ou importez des fichiers audio instantanément. Créez des archives consultables à partir de conversations illimitées. Ne perdez plus jamais de discussions importantes avec une transcription vraiment illimitée.",
      heroCtaPrimary: "Commencer l'Enregistrement →",
      heroCtaSecondary: "Voir Comment Ça Marche",
      recordingStatus: "Enregistrement en cours...",
      statsMeetingMinutes: "Compte-Rendu de Réunion",
      statsLiveRecording: "Enregistrement",
      statsSpeakerID: "Identification de l'Intervenant",
      statsInstantUpload: "Importer & Traiter",
      featuresTitle: "Transcription pour Toutes les Entreprises",
      featuresSubtitle: "De l'enregistrement en direct à l'import instantané, nous avons éliminé tous les points de friction",
      feature1Title: "Enregistrez Directement dans Votre Navigateur",
      feature1Desc: "Aucun téléchargement, aucun plugin. Commencez à enregistrer en un clic. Qualité audio parfaite, détection automatique des intervenants.",
      feature1Benefit1: "Démarrage en un clic",
      feature1Benefit2: "Aucune installation logicielle",
      feature1Benefit3: "Compatible avec tous les appareils",
      feature1Benefit4: "Transcription en temps réel",
      feature1Visual1: "Cliquez & Enregistrez",
      feature1Visual2: "Aucune configuration requise",
      feature2Title: "Importez N'importe Quel Fichier Audio Instantanément",
      feature2Desc: "Vous avez des enregistrements depuis Zoom, Teams ou votre téléphone ? Importez-les instantanément. Prise en charge de tous les formats audio et vidéo principaux. Traitez plusieurs fichiers simultanément sans attente.",
      feature2Benefit1: "Formats pris en charge : MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Import par lots",
      feature2Benefit3: "Fichiers de 10 heures pris en charge",
      feature2Benefit4: "Traitement pendant que vous travaillez",
      feature2Visual1: "Glisser-Déposer des Fichiers",
      feature3Title: "Conçu pour la Collaboration d'Équipe",
      feature3Desc: "Partagez instantanément les transcriptions avec votre équipe. Écoutez les enregistrements ensemble, exportez les transcriptions dans plusieurs formats et assurez-vous que tout le monde reste aligné avec des archives de réunions consultables.",
      feature3Benefit1: "Partagez les transcriptions avec qui vous voulez",
      feature3Benefit2: "Écouter les enregistrements originaux",
      feature3Benefit3: "Exporter les transcriptions en plusieurs formats",
      feature3Benefit4: "Archives consultables par toute l'équipe",
      feature3Visual1: "Membres de l'équipe",
      feature3Visual2: "Collaboration illimitée",
      feature4Title: "Trouvez n'importe quelle conversation instantanément",
      feature4Desc: "Recherchez dans toutes vos réunions à la fois. Retrouvez cette décision cruciale du trimestre dernier ou cette exigence client datant de plusieurs mois. La recherche IA comprend le contexte, pas seulement les mots-clés.",
      feature4Benefit1: "Rechercher toutes les réunions à la fois",
      feature4Benefit2: "L'IA comprend le contexte",
      feature4Benefit3: "Filtrer par intervenant ou date",
      feature4SearchPlaceholder: "🔍 Rechercher : 'Objectifs de revenus Q4'",
      feature4SearchResults: "Trouvé dans 3 réunions :",
      feature4Meeting1: "Planification des ventes - 15 oct.",
      feature4Meeting1Text: '"...objectifs pour Q4 fixés à 2M$..."',
      feature4Meeting2: "Réunion du conseil - 20 oct.",
      feature4Meeting2Text: '"...projections de revenus Q4..."',
      workflowTitle: "Comment transcrire un",
      workflowSubtitle: "Un flux de travail fluide qui capture chaque moment important",
      workflowStep1Title: "Enregistrer ou Téléverser",
      workflowStep1Desc: "Commencez à enregistrer en direct ou téléchargez simplement l'enregistrement depuis Zoom, Google Meet ou Microsoft Teams",
      workflowStep2Title: "Transcription automatique",
      workflowStep2Desc: "Notre IA transcrit automatiquement l'enregistrement en texte avec 96% de précision en quelques minutes",
      workflowStep3Title: "Collaborer",
      workflowStep3Desc: "Partagez, commentez et extrayez les actions",
      workflowStep4Title: "Rechercher & Analyser",
      workflowStep4Desc: "Découvrez des insights dans toutes vos réunions",
      testimonialsTitle: "Les équipes adorent",
      testimonialsSubtitle: "Découvrez comment les entreprises transforment leur culture de réunion",
      testimonial1Text: `"Nous sommes passés à côté de détails cruciaux à une archive consultable de chaque conversation. La fonction d'enregistrement direct signifie que nous n'oublions jamais de capturer les discussions importantes."`,
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Chef de produit, TechCorp",
      testimonial2Text: '"Otter nous limitait à 10 téléversements par mois. Maintenant, nous téléversons tous nos appels clients instantanément. Un changement radical pour le suivi de notre équipe commerciale."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Directrice commerciale, ConsultPro",
      testimonial3Text: '"La possibilité de rechercher sur des mois de réunions nous a sauvés pendant notre audit. Nous avons retrouvé chaque décision et approbation en quelques secondes."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Directeur des opérations, FinanceHub",
      ctaTitle: "Ne perdez plus vos conversations importantes",
      ctaSubtitle: "Rejoignez des milliers d'équipes qui captent chaque réunion avec une transcription illimitée",
      ctaButton: "Commencer l'enregistrement gratuitement →",
        featuresTitle2: "Réunion",
        workflowTitle2: "Enregistrement Zoom en texte",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Pour les enseignants & éducateurs",
      heroTitle1: "Rendre l'apprentissage",
      heroTitle2: "Accessible à tous",
      heroSubtitle: "Collez simplement des liens YouTube pour obtenir des transcriptions instantanées avec des sous-titres générés automatiquement. Transformez les cours, tutoriels et vidéos éducatives en contenu consultable et accessible pour tous les étudiants.",
      heroCtaPrimary: "Essayez gratuitement - Sans carte bancaire",
      heroCtaSecondary: "Voir la démo",
      stats1Number: "1-Click",
      stats1Label: "Transcription YouTube",
      stats2Number: "100+",
      stats2Label: "Langues prises en charge",
      stats3Number: "∞",
      stats3Label: "Vidéos illimitées",
      stats4Number: "96%",
      stats4Label: "Taux de précision",
      featuresTitle: "Tout ce dont les éducateurs ont besoin pour",
      featuresSubtitle: "Des conférences YouTube aux cours enregistrés, rendez tout votre contenu accessible",
      feature1Title: "Liens YouTube & plateformes instantanés",
      feature1Desc: "Collez simplement un lien vidéo et obtenez une transcription instantanée. Compatible avec YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive et plus encore. Aucun téléchargement, aucune attente.",
      feature1Point1: "Transcription directe - aucun téléchargement nécessaire",
      feature1Point2: "Prise en charge de toutes les plateformes majeures",
      feature1Point3: "Traitez des playlists entières en une fois",
      feature1Point4: "Fonctionne avec les vidéos privées (avec permission)",
      feature2Title: "Génération automatique de sous-titres",
      feature2Desc: "Créez instantanément des sous-titres précis pour toutes vos vidéos éducatives. Rendez le contenu accessible aux étudiants malentendants, non-natifs ou préférant lire.",
      feature2Point1: "Formats d'export SRT, VTT et TXT",
      feature2Point2: "Horodatages mot par mot pour une synchronisation parfaite",
      feature2Point3: "Éditez et personnalisez facilement les sous-titres",
      feature2Point4: "Téléversez directement sur YouTube",
      feature2Visual1: "Traductions linguistiques",
      feature2Visual2: "Rendez votre contenu accessible mondialement",
      feature3Title: "Organisez par cours & catégories",
      feature3Desc: "Créez des dossiers pour organiser vos transcriptions par cours, matière ou semestre. Gardez tout votre contenu éducatif bien classé et facilement consultable. Construisez une bibliothèque complète de supports de cours accessibles.",
      feature3Point1: "Créez des dossiers et sous-dossiers illimités",
      feature3Point2: "Étiquetez les vidéos par sujet ou niveau de difficulté",
      feature3Point3: "Organisez plusieurs transcriptions en masse",
      feature3Point4: "Recherchez instantanément dans tout votre contenu",
      feature3VisualTitle: "Votre bibliothèque de cours",
      feature3Folder1: "Mathématiques 101",
      feature3Folder2: "Cours de physique",
      feature3Folder3: "Vidéos de laboratoire de biologie",
      feature3Folder4: "Documentaires historiques",
      feature3Folder5: "Apprentissage des langues",
      feature4Title: "Transcription IA de fichiers audio en guide d'étude",
      feature4Desc: "Ne partagez pas seulement des enregistrements. Transcrivez automatiquement des cours en texte et d'autres fichiers audio en guides d'étude détaillés, avec résumés et concepts clés pour une révision efficace. Exportez aux formats TXT, DOCX ou PDF.",
      feature4Point1: "TXT pour édition texte simple",
      feature4Point2: "DOCX pour documents formatés",
      feature4Point3: "PDF pour partage et impression faciles",
      feature4Point4: "Exportez plusieurs fichiers en masse",
      workflowTitle: "Fonctionnement :",
      workflowSubtitle: "D'un lien vidéo à une transcription accessible et supports d'étude en quelques minutes",
      workflowStep1Title: "Téléversez votre cours",
      workflowStep1Desc: "Téléversez tout fichier audio ou vidéo (MP3, MP4, WAV) ou collez un lien YouTube",
      workflowStep2Title: "Transcription IA",
      workflowStep2Desc: "Notre IA transcrit l'audio, sépare les intervenants et identifie les sujets clés",
      workflowStep3Title: "Générer des sous-titres",
      workflowStep3Desc: "Créez automatiquement des sous-titres parfaitement synchronisés",
      workflowStep4Title: "Exporter le Guide d'Étude",
      workflowStep4Desc: "Téléchargez le texte, le résumé ou exportez-le pour créer votre guide d'étude final",
      useCasesTitle: "Parfait pour Tous",
      useCasesSubtitle: "Découvrez comment les éducateurs utilisent NeverCap pour améliorer l'apprentissage",
      useCase1Title: "Cours Enregistrés",
      useCase1Text: "Transcrivez des semestres entiers de cours enregistrés. Les étudiants peuvent rechercher des sujets spécifiques, revoir les concepts clés et ne jamais manquer d'informations importantes.",
      useCase2Title: "Cours en Ligne",
      useCase2Text: "Rendez vos cours en ligne accessibles aux étudiants internationaux avec des traductions dans 100+ langues. Augmentez les inscriptions et la satisfaction.",
      useCase3Title: "Matériel d'Étude",
      useCase3Text: "Utilisez l'IA pour transcrire des fichiers audio en guides d'étude à partir de tutoriels vidéo et de cours. Parfait pour les étudiants qui préfèrent lire ou réviser rapidement avec un texte consultable.",
      useCase4Title: "Conformité d'Accessibilité",
      useCase4Text: "Répondez aux exigences d'accessibilité en fournissant des sous-titres et des transcriptions pour tous les contenus vidéo. Garantissez un accès égal à tous les étudiants.",
      useCase5Title: "Classe Inversée",
      useCase5Text: "Partagez des cours vidéo avec transcriptions avant la classe. Les étudiants peuvent réviser à leur rythme et venir préparés aux discussions.",
      useCase6Title: "Recherche & Citations",
      useCase6Text: "Aidez les étudiants à citer des sources vidéo avec précision grâce aux horodatages. Parfait pour les projets de recherche et les travaux académiques.",
      testimonialTitle: "Approuvé par",
      testimonialSubtitle: "Découvrez pourquoi les enseignants du monde entier choisissent NeverCap",
      testimonialText: `"J'utilise NeverCap pour transcrire toute ma chaîne YouTube de tutoriels de mathématiques. Ce qui prenait des semaines avec d'autres services ne prend maintenant que quelques heures. La possibilité de coller des liens directement et d'obtenir des transcriptions instantanées a transformé ma façon de créer du contenu accessible. Mes étudiants internationaux adorent particulièrement les sous-titres multilingues !"`,
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Professeure de Mathématiques, Éducatrice en Ligne",
      ctaTitle: "Rendez Tout Votre Contenu Éducatif Accessible",
      ctaSubtitle: "Rejoignez des milliers d'éducateurs utilisant une transcription vraiment illimitée",
      ctaButton: "Essayez NeverCap Gratuitement",
        featuresTitle2: "Transcription vidéo",
        grid: "Fichier audio vers guide d'étude",
        useCasesTitle2: "Besoins Éducatifs",
        testimonialTitle2: "50 000+ Éducateurs"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Télécharger des vidéos YouTube au format MP4",
        "placeholder": "Rechercher ou coller votre lien YouTube ici",
        "clear_icon": "Effacer la saisie",
        "Download": "Télécharger",
        "loading_text": "Traitement du lien en cours. Restez sur la page.",
        "howToDownload": "Comment télécharger ?",
        "tutorial": "Voir le tutoriel"
      },
      part2: {
        "title": "Voici comment convertir une vidéo YouTube en fichier MP4 téléchargeable en 3 étapes simples",
        "steps": [
                {
                  title: "Copier l'URL",
                  content: "Ouvrez votre vidéo YouTube cible, puis copiez le lien depuis la barre d'adresse de votre navigateur."
                },
                {
                  title: "Coller le lien",
                  content: "Rendez-vous sur votre outil de téléchargement et collez l'URL dans le champ de saisie."
                },
                {
                  title: "Télécharger le MP4",
                  content: "Une fois traité, cliquez sur le bouton de téléchargement pour enregistrer votre fichier MP4."
                }
              ]
      },
      part3: {
        content: [
                "Vous avez déjà eu besoin de regarder des vidéos YouTube hors ligne ?",
                "Que vous soyez dans le métro, en avion, en train d'étudier un tutoriel crucial, de vous plonger dans du contenu pédagogique ou d'archiver des vidéos importantes, l'accès hors ligne fiable est souvent un problème. C'est là que notre outil excelle.",
                "Notre téléchargeur vous permet de convertir rapidement et facilement des vidéos YouTube au format MP4. Enregistrez-les sur votre appareil et regardez-les à tout moment.",
                "Le processus est rapide, simple et sans tracas. Une fois téléchargées, profitez de vos vidéos préférées où que vous soyez, sans internet."
              ]
      },
      part4: {
        content: ["Voici les 5 principaux avantages de télécharger", "des vidéos YouTube en fichiers MP4"],
        list: [
                {
                  title: "Économisez sur les coûts de données :",
                  content: "Regarder des vidéos sur YouTube consomme beaucoup de données mobiles. En les téléchargeant pour un visionnage hors ligne, vous évitez ces coûts inutiles."
                },
                {
                  title: "Regardez où et quand vous voulez :",
                  content: "Profitez de vos vidéos sans interruption, même avec une connexion internet instable. Plus de problèmes de buffering."
                },
                {
                  title: "Archivage et conservation faciles :",
                  content: "Enregistrer des vidéos en MP4 simplifie la création de votre collection personnelle, surtout pour les contenus que vous trouvez précieux."
                },
                {
                  title: "Partage simplifié :",
                  content: "Partager un fichier MP4 est bien plus pratique qu'envoyer un lien. Vous pouvez envoyer la vidéo directement via WhatsApp ou Instagram, sans passer par YouTube."
                },
                {
                  title: "Visionnage instantané, moments partagés :",
                  content: "Vous voulez montrer une vidéo préférée à des amis ou à votre famille ? Avec le MP4 téléchargé, vous pouvez tous la regarder sans attente."
                }
              ]
      },
      part5: {
        title: "Pourquoi notre téléchargeur se distingue",
        cards: [
                {
                  title: "Simplicité en un clic",
                  content: "Configuration facile et utilisation intuitive."
                },
                {
                  title: "Ultra-rapide, illimité",
                  content: "Conversion et téléchargement à vitesse maximale — sans restrictions."
                },
                {
                  title: "Conversion instantanée",
                  content: "Traitez vos fichiers sans attente."
                },
                {
                  title: "Zéro pub, zéro distraction",
                  content: "Une interface épurée sans pop-ups, bannières ou interruptions — juste une conversion fluide."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Qualité d'origine garantie",
                  content: "Vos téléchargements conservent la résolution originale pour une lecture parfaite."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fonctionne partout",
                  content: "Compatible avec tous les navigateurs et appareils."
                }
              ]
      },
      part6: {
        title: ["Optimisez vos téléchargements YouTube", "Avec notre téléchargeur"],
        content: [
                "Conversion YouTube vers MP4 : Rapide, Simple et Gratuite.",
                "C'est là que nous excellons. Notre interface conviviale est conçue pour tous — aucune compétence technique requise. Convertissez des vidéos instantanément, sans inscription.",
                "Soyez tranquille — vos MP4 conservent la qualité originale, comme sur YouTube.",
                "Fonctionne partout. Compatible avec tous les systèmes et appareils : Windows, macOS, Linux, Android, iOS — smartphone, tablette ou ordinateur."
              ]
      },
      part7: {
        title: "Questions clés sur le téléchargement YouTube",
        list: [
                {
                  question: "Puis-je télécharger une vidéo YouTube protégée par des droits d'auteur ?",
                  answer: "Télécharger des vidéos YouTube protégées sans autorisation est illégal."
                },
                {
                  question: "Cet outil est-il sûr ?",
                  answer: "Oui, il est sûr et fiable. Nous ne demandons aucune information personnelle et luttons contre les virus. Soyez prudent lors de téléchargements en ligne."
                },
                {
                  question: "Quelles langues sont prises en charge ?",
                  answer: "Notre service prend en charge toutes les langues populaires."
                },
                {
                  question: "Quels facteurs influencent le temps de téléchargement ?",
                  answer: "Bien que nous garantissions une vitesse optimale, la durée de la vidéo et votre connexion internet jouent un rôle."
                },
                {
                  question: "Où est enregistré un MP4 téléchargé sur smartphone ?",
                  answer: `Après avoir téléchargé un MP4 sur votre smartphone, vous pouvez généralement le trouver dans le dossier "Téléchargements" de l'application de gestion de fichiers de votre appareil.`
                },
                {
                  question: "La conversion en MP4 réduit-elle la qualité ?",
                  answer: "Non. Notre outil conserve la qualité d'origine, comme sur YouTube."
                }
              ]
      },
        err1: "Erreur de format de lien YouTube.",
        err2: "Désolé ! Nous ne prenons en charge que les liens YouTube actuellement. Si vous avez besoin d'une prise en charge pour d'autres sites, nous vous tiendrons informé lors de son ajout futur.",
        videoDownload: {
              title: "Téléchargez les vidéos YouTube en MP4. Gratuit, rapide et sans publicité.",
              description: "Merci d'avoir choisi notre service ! Nous apprécions vraiment votre confiance et espérons que cela a amélioré votre expérience. Si vous pouviez partager notre site avec vos amis, ce serait une aide précieuse.",
              downloadButton: "Télécharger",
              downloadError: "Erreur de téléchargement."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Technologie IA de pointe",
      "title": "À propos",
      "highlighted_text": "NeverCap",
      "description": "Notre mission est de fournir les services de transcription audio et vidéo les plus précis. Grâce à une technologie IA de pointe, nous atteignons des taux de précision de transcription supérieurs à 96 %. Pour certaines langues majeures, grâce à une optimisation technique, nous pouvons même atteindre 99 % de précision."
    },
    Stats: {
      "title": "Notre",
      "highlighted_text": "Impact",
      "subtitle": "Faciliter la communication mondiale avec une technologie IA de pointe",
      "metrics": [
            {
              "value": "96%+",
              "label": "Taux de précision",
              "description": "Précision de transcription inégalée grâce à une IA avancée"
            },
            {
              "value": "100+",
              "label": "Langues prises en charge",
              "description": "Reconnaissance vocale pour un contenu mondial"
            },
            {
              "value": "249+",
              "label": "Langues de traduction",
              "description": "Traduisez le texte transcrit dans pratiquement n'importe quelle langue"
            }
          ]
    },
    Mission: {
      "title": "Pourquoi choisir",
      "highlighted_text": "NeverCap",
      "subtitle": "Nous croyons en la suppression des barrières linguistiques et en l'accessibilité du contenu pour tous",
      "features": [
            {
              "icon": "🎯",
              "title": "Précision inégalée",
              "description": "Nos modèles IA sont continuellement améliorés pour offrir des taux de précision de transcription dépassant 96 %, certaines langues majeures atteignant même 99 % grâce à une optimisation avancée."
            },
            {
              "icon": "🌍",
              "title": "Prise en charge mondiale des langues",
              "description": "Prise en charge de plus de 100 langues en reconnaissance vocale et capacités de traduction pour plus de 249 langues, rendant votre contenu véritablement mondial."
            },
            {
              "icon": "⚡",
              "title": "Traitement ultra-rapide",
              "description": "Traitez des heures de contenu audio et vidéo en quelques minutes. Notre pipeline IA optimisé vous garantit des transcriptions rapides sans compromis sur la qualité."
            },
            {
              "icon": "🔒",
              "title": "Sécurité niveau entreprise",
              "description": "La sécurité de vos données est notre priorité. Nous utilisons un chiffrement conforme aux normes du secteur et respectons les réglementations mondiales sur la confidentialité pour protéger votre contenu."
            }
          ]
    },
    Company: {
      "title": "Informations sur",
      "highlighted_text": "l'entreprise",
      "subtitle": "Contactez-nous pour toute question ou assistance",
      "details": [
            {
              "label": "Nom de l'entreprise",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Siège social",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "États-Unis"]
            },
            {
              "label": "Contactez-nous",
              "value": ["Email", "Assistance disponible 24/7 et 7j/7"]
            }
          ]
    },
    CTA: {
      "title": "Prêt à vivre la différence ?",
      "subtitle": "Rejoignez des milliers de professionnels qui font confiance à NeverCap pour leurs besoins en transcription",
      "button": "Essayez NeverCap Gratuitement →",
      "disclaimer": "Aucune carte de crédit requise • Commencez à transcrire en quelques secondes"
    }
  },
  Privacy: {
    title: "Politique de",
    titleGradient: "Confidentialité",
    subtitle: "Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles",
    "lastUpdated": "Dernière mise à jour : {date}",
    "lastUpdatedDate": "21 juillet 2025",
    "privacyPolicyTitle": "Politique de confidentialité",
    "policyAgreement": "Veuillez lire attentivement cette Politique de confidentialité et vous assurer de la comprendre. En utilisant l'un de nos Services, vous acceptez cette Politique de confidentialité. Si vous n'acceptez pas que nous utilisions vos données personnelles conformément à cette Politique, vous devez cesser immédiatement d'utiliser nos Services.",
    "policyOverview": "Dans cette politique, nous expliquons : quelles données nous collectons et pourquoi ; comment vos données sont traitées ; et vos droits concernant vos données. Nous ne vendons pas vos données.",
    "scopeTitle": "1. Champ d'application de cette Politique de confidentialité",
    "scopeDescription": "Cette Politique de confidentialité s'applique uniquement à notre collecte et traitement des informations concernant les utilisateurs des Services. Cette Politique de confidentialité ne s'applique pas aux services, sites web ou logiciels exploités par des tiers qui sont liés à nous (que nous fournissions ces liens ou que d'autres utilisateurs les partagent), ni au contenu, aux données, aux applications ou aux matériaux provenant de tiers. Nous vous conseillons de consulter les politiques de confidentialité de tout site web ou logiciel tiers avant de leur fournir des informations.",
    "collectionTitle": "2. Ce que nous collectons et pourquoi",
    "collectionPrinciple": "Notre principe directeur est de ne collecter que ce dont nous avons besoin. Voici ce que cela signifie en pratique :",
    "identityTitle": "2.1 Identité et accès",
    "identityDescription": "Lorsque vous vous inscrivez à l'un de nos produits, nous demandons des informations d'identification telles que votre nom et votre adresse e-mail. Cela permet de fournir des fonctionnalités essentielles du produit et de vous envoyer des mises à jour du produit et d'autres informations essentielles.",
    "billingTitle": "2.2 Informations de facturation",
    "billingDescription": "Si vous souscrivez à un produit payant, vous serez invité à fournir vos informations de paiement et votre adresse de facturation. Les informations de paiement sont soumises directement à notre processeur de paiement et n'atteignent pas nos serveurs.",
    "productInteractionsTitle": "2.3 Interactions avec le produit",
    "productInteractionsDescription": "Nous stockons sur nos serveurs le contenu que vous téléchargez, recevez ou conservez dans vos comptes de produit. À moins que vous ne supprimiez ce contenu, nous pouvons le conserver aussi longtemps que votre compte est actif.",
    "websiteInteractionsTitle": "2.4 Interactions avec le site web",
    "websiteInteractionsDescription": "Nous collectons des informations sur votre activité de navigation à des fins d'analyse et de statistiques, telles que des tests de taux de conversion et des expérimentations avec de nouvelles conceptions de produits. Cela inclut, par exemple, les versions de votre navigateur et de votre système d'exploitation, votre adresse IP, les pages web que vous avez visitées et le temps qu'elles ont pris à charger, ainsi que le site web qui vous a référé à nous. Si vous avez un compte et êtes connecté, ces données d'analyse web sont liées à votre adresse IP et à votre compte utilisateur jusqu'à ce que votre compte ne soit plus actif.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Nous utilisons également des cookies persistants de première partie et certains cookies tiers pour stocker certaines préférences, faciliter l'utilisation de nos applications, effectuer des tests A/B et prendre en charge certaines analyses.",
    "cookiesDescription2": "Un cookie est un morceau de texte stocké par votre navigateur. Il peut aider à mémoriser les informations de connexion et les préférences du site. Il peut également collecter des informations telles que le type de votre navigateur, votre système d'exploitation, les pages web visitées, la durée de la visite, le contenu consulté et d'autres données de flux de clics. Vous pouvez ajuster les paramètres de conservation des cookies et accepter ou bloquer des cookies individuels dans les paramètres de votre navigateur, bien que nos applications ne fonctionneront pas et d'autres aspects de notre service pourraient ne pas fonctionner correctement si vous désactivez les cookies.",
    "correspondenceTitle": "2.6 Correspondance volontaire",
    "correspondenceDescription": "Lorsque vous nous envoyez un e-mail avec une question ou pour demander de l'aide, nous conservons cette correspondance, y compris votre adresse e-mail, afin d'avoir un historique des correspondances passées à référencer si vous nous contactez à l'avenir.",
    "accessTitle": "3. Quand nous accédons ou partageons vos informations",
    "accessDescription1": "Pour fournir les produits ou services que vous avez demandés. Nous utilisons certains sous-traitants tiers pour nous aider à faire fonctionner nos applications et vous fournir les Services. Cela inclut des fournisseurs de cloud et d'analyse.",
    "accessDescription2": "Pour enquêter, prévenir ou prendre des mesures concernant les abus. L'accès au compte d'un client lors de l'enquête sur un abus potentiel est une mesure de dernier recours. Nous voulons protéger la vie privée et la sécurité de nos clients et des personnes qui nous signalent des problèmes, et nous faisons de notre mieux pour équilibrer ces responsabilités tout au long du processus. Si nous découvrons que vous utilisez nos produits à des fins restreintes, nous prendrons les mesures nécessaires, y compris en avertissant les autorités appropriées si nécessaire.",
    "accessDescription3": "Lorsque requis par la loi applicable.",
    "dataRequests": "Demandes de données utilisateur. Notre politique est de ne pas répondre aux demandes gouvernementales de données utilisateur, sauf si nous y sommes contraints par une procédure judiciaire ou dans des circonstances limitées en cas de demande d'urgence. Cependant, si les autorités américaines chargées de l'application de la loi disposent du mandat nécessaire, de la citation à comparaître pénale ou de l'ordonnance du tribunal nous obligeant à partager des données, nous devons nous conformer. De même, nous ne répondrons aux demandes des autorités gouvernementales en dehors des États-Unis que si nous y sommes contraints par le gouvernement américain via les procédures décrites dans un traité ou accord d'entraide judiciaire. Notre politique est d'informer les utilisateurs concernés avant de partager des données, sauf si nous en sommes légalement empêchés, et sauf dans certains cas d'urgence.",
    "preservationRequests": "Demandes de conservation. De même, notre politique est de nous conformer aux demandes de conservation des données uniquement si nous y sommes contraints par le U.S. Federal Stored Communications Act, 18 U.S.C. Section 2703(f), ou par une citation à comparaître américaine correctement signifiée pour des affaires civiles. Nous ne partageons pas les données conservées, sauf si la loi l'exige ou si nous y sommes contraints par une ordonnance du tribunal que nous choisissons de ne pas contester. De plus, à moins que nous ne recevions un mandat, une ordonnance du tribunal ou une citation à comparaître valable avant l'expiration de la période de conservation requise, nous détruirons toute copie conservée des données clients à la fin de la période de conservation.",
    "taxAudits": "Si nous sommes audités par une autorité fiscale, nous pouvons être tenus de partager des informations liées à la facturation. Dans ce cas, nous ne partagerons que le strict nécessaire, comme les adresses de facturation et les informations d'exonération fiscale.",
    "securityTitle": "4. Comment nous sécurisons vos données",
    "securityDescription": "Toutes les données sont chiffrées via SSL/TLS lors de leur transmission de nos serveurs à votre navigateur.",
    "deletionTitle": "5. Ce qui se passe lorsque vous supprimez votre contenu",
    "deletionDescription": "Si vous supprimez un contenu, il deviendra immédiatement inaccessible.",
    "locationTitle": "6. Localisation du site et des données",
    "locationDescription": "Nos produits et autres propriétés web sont exploités aux États-Unis. Si vous êtes situé dans l'Union européenne, au Royaume-Uni ou ailleurs en dehors des États-Unis, veuillez noter que toute information que vous nous fournissez sera transférée et stockée aux États-Unis. En utilisant nos sites web ou Services et/ou en nous fournissant vos informations personnelles, vous consentez à ce transfert.",
    "childrenTitle": "7. Confidentialité des enfants",
    "updatesTitle": "8. Mises à jour de cette Politique de confidentialité",
    "updatesDescription": "Nous pouvons mettre à jour cette politique si nécessaire pour nous conformer aux réglementations pertinentes et refléter toute nouvelle pratique. Chaque fois que nous apportons un changement significatif à nos politiques, nous actualiserons la date en haut de cette page.",
    "contactTitle": "9. Contactez-nous",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "à",
      policyDescription: 'Cette Politique décrit comment NeverCap (ci-après dénommé "NeverCap", "notre", "nous", "nos") collecte, utilise et divulgue vos informations personnelles lorsque vous utilisez nos services, sites web ({url}) et logiciels (collectivement, les "Services").',
      childrenDescription: "Les Services ne s'adressent pas aux enfants et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous avez moins de 13 ans, veuillez ne pas soumettre d'informations personnelles via les Services. Si vous pensez qu'un enfant nous a fourni des informations personnelles en violation de cette Politique, veuillez nous contacter {à} l'adresse {email} indiquée ci-dessous.",
      contactDescription: "Si vous avez des questions, commentaires ou plaintes concernant notre Politique de Confidentialité, veuillez nous contacter {à} l'adresse {email} et nous nous efforcerons de traiter votre plainte dès que possible."
},
  TermsOfUse: {
    title: "Conditions",
    titleGradient: "D'Utilisation",
    subtitle: "Veuillez lire attentivement ces conditions avant d'utiliser nos services",
    "lastUpdated": "Dernière mise à jour : {date}",
    "lastUpdatedDate": "21 juillet 2025",
    "termsOfServiceTitle": "Conditions d'utilisation",
    "thankYou": "Merci d'utiliser nos produits !",
    "companyDefinition": "Lorsque nous disons « Société », « nous », « notre » ou « nos » dans ce document, nous faisons référence à NeverCap.",
    "servicesDefinition": "Lorsque nous disons « Services », nous désignons tout produit créé et maintenu par NeverCap, qu'il soit livré via un navigateur web, une application de bureau, une application mobile ou tout autre format.",
    "termsUpdate": "Nous pouvons mettre à jour ces Conditions d'utilisation à l'avenir. Généralement, ces modifications visent à clarifier certains termes en les liant à une politique connexe élargie. Chaque fois que nous apportons un changement significatif à nos politiques, nous actualiserons la date en haut de cette page et prendrons toutes les mesures appropriées pour en informer les titulaires de compte.",
    "acceptanceTitle": "1. Acceptation de l'accord",
    "acceptanceDescription1": "En utilisant nos Services, vous indiquez votre acceptation de cet Accord, qui devient ainsi un contrat contraignant entre vous et NeverCap. Vous déclarez que vous êtes légalement capable d'accepter ces Conditions et affirmez que vous avez l'âge légal pour former un contrat contraignant. L'acceptation par NeverCap est expressément conditionnée à votre accord avec tous les termes et conditions de cet Accord.",
    "eligibilityRequirement": "Les Services ne sont pas destinés et ne doivent pas être utilisés par des personnes de moins de 18 ans. En utilisant les Services, vous déclarez et garantissez que vous remplissez cette condition d'éligibilité.",
    "userResponsibility": "Les termes « vous », « votre », « vous-même » incluent également vos employés, agents, représentants commerciaux et toute autre personne à qui vous donnez accès aux Services via votre Compte (tel que défini ci-dessous). Vous êtes responsable de vous assurer que toutes les personnes accédant aux Services via votre compte connaissent ces Conditions et les respectent.",
    "termsRevision": "NeverCap se réserve le droit de réviser et de mettre à jour ces Conditions à tout moment et à sa seule discrétion. Toutes les modifications prennent effet immédiatement après leur publication. Votre utilisation continue des Services après la publication des Conditions révisées signifie que vous acceptez et approuvez les changements. Vous êtes censé consulter cette page régulièrement pour prendre connaissance des modifications, car elles vous sont opposables.",
    "servicesTitle": "2. Services de NeverCap",
    "servicesDescription1": "Nos Services permettent aux utilisateurs de transformer des conversations vocales en texte transcrit pouvant être recherché, traduit et partagé avec d'autres.",
    "servicesOptions": "Vous pouvez choisir d'utiliser la version gratuite des Services (« Services Gratuits ») ou la version payante des Services basée sur un abonnement pour laquelle vous devrez peut-être payer des frais (« Services Payants »).",
    "servicesAccess": "Nous mettrons les Services à votre disposition. Vous êtes responsable de prendre toutes les dispositions nécessaires pour accéder aux Services.",
    "accountTermsTitle": "3. Conditions du compte",
    "accountSecurity": "Vous êtes responsable de la sécurité de votre compte. La Société ne peut être tenue responsable des pertes ou dommages résultant de votre non-respect de cette obligation de sécurité.",
    "lawfulUse": "Vous ne pouvez pas utiliser les Services à des fins illégales, contraires à l'éthique ou immorales.",
    "contentResponsibility": "Vous êtes responsable de tout contenu publié et de toute activité se produisant sous votre compte. Cela inclut le contenu publié par d'autres personnes qui : (a) ont accès à vos identifiants de connexion ; ou (b) ont leurs propres identifiants sous votre compte.",
    "humanRequirement": "Vous devez être un humain. Les comptes enregistrés par des « bots » ou d'autres méthodes automatisées ne sont pas autorisés.",
    "paymentTitle": "4. Paiement, remboursements et changements de forfait",
    "freeTrial": "Pour les Services payants offrant un essai gratuit, nous indiquons la durée de l'essai lors de votre inscription. Après la période d'essai, vous devez payer à l'avance pour continuer à utiliser le Service. Si vous ne payez pas, ces services cesseront.",
    "upgradePolicy": "Si vous passez d'un forfait gratuit à un forfait payant, nous débiterons votre carte immédiatement et votre cycle de facturation commencera le jour de la mise à niveau.",
    "taxes": "Tous les frais sont hors taxes, impôts ou droits imposés par les autorités fiscales. Lorsque requis, nous collecterons ces taxes pour le compte de l'autorité fiscale et les remettrons aux autorités fiscales. Sinon, vous êtes responsable du paiement de toutes les taxes, impôts ou droits.",
    "refunds": "Tous les achats sont non remboursables. Vous pouvez annuler tout service payant à tout moment en vous connectant à votre compte. Pour les abonnements payants, votre annulation prendra effet à la fin de la période payante en cours, sauf indication contraire.",
    "cancellationTitle": "5. Annulation et résiliation",
    "cancellationPolicy": "Si vous annulez le Service avant la fin de toute période payée, votre annulation prendra effet immédiatement et vous ne serez plus facturé. Nous ne calculons pas automatiquement le temps inutilisé lors du dernier cycle de facturation.",
    "terminationRights": "Nous nous réservons le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future de nos Services pour quelque raison que ce soit et à tout moment. La suspension signifie que vous ne pourrez pas accéder au compte ou à son contenu. La résiliation entraînera en outre la suppression de votre compte ou de votre accès à celui-ci, ainsi que la perte et la renonciation à tout contenu de votre compte. Nous nous réservons également le droit de refuser l'utilisation des Services à quiconque pour quelque raison que ce soit et à tout moment. Nous incluons cette clause car, statistiquement, parmi les centaines de milliers de comptes sur nos Services, il y en a au moins un qui agit de manière malveillante.",
    "abusePolicy": "Tout abus verbal, physique, écrit ou autre (y compris des menaces d'abus ou de représailles) envers un employé ou un dirigeant de la Société peut entraîner la résiliation immédiate du compte.",
    "submissionsTitle": "6. Soumissions",
    "submissionsDescription": "Vous reconnaissez et acceptez que toute question, commentaire, suggestion, idée, retour d'information ou autre information concernant le Site (« Soumissions ») que vous nous fournissez est non confidentielle et devient notre propriété exclusive. Nous détenons tous les droits exclusifs, y compris les droits de propriété intellectuelle, et sommes autorisés à utiliser et diffuser ces Soumissions sans restriction à toute fin légale, commerciale ou autre, sans reconnaissance ni compensation. Vous renoncez par la présente à tous vos droits moraux sur ces Soumissions, et vous garantissez que ces Soumissions sont originales ou que vous avez le droit de les soumettre. Vous acceptez qu'aucune action ne peut être intentée contre nous pour toute prétendue ou réelle violation ou appropriation de tout droit de propriété dans vos Soumissions.",
    "uptimeTitle": "7. Disponibilité et sécurité",
    "serviceAvailability": "Vous utilisez les Services à vos propres risques. Nous fournissons ces Services « tels quels » et « selon disponibilité ». Nous n'offrons pas de contrats de niveau de service pour la plupart de nos Services, mais nous prenons la disponibilité de nos applications très au sérieux.",
    "throttlingPolicy": "Nous nous réservons le droit de limiter temporairement l'accès au compte dans de rares cas où l'activité d'un utilisateur nuit à la stabilité et aux performances du Service pour les autres utilisateurs. Dans tous les cas sauf les plus critiques, nous vous contacterons pour trouver une solution avant d'agir.",
    "dataSecurity": "Nous prenons de nombreuses mesures pour protéger et sécuriser vos données via des sauvegardes, des redondances et un chiffrement. Nous imposons le chiffrement pour la transmission de données sur Internet public.",
    "thirdPartyVendors": "Nous utilisons des fournisseurs tiers et des partenaires d'hébergement pour fournir le matériel, les logiciels, les réseaux, le stockage et la technologie connexe nécessaires au fonctionnement des Services.",
    "siteManagementTitle": "8. Gestion du site",
    "siteManagementDescription": "Nous nous réservons le droit, mais non l'obligation, de : (1) surveiller le Site pour toute violation de ces Conditions d'utilisation ; (2) prendre les mesures légales appropriées contre quiconque enfreint la loi ou ces Conditions d'utilisation, y compris, sans limitation, signaler cet utilisateur aux autorités compétentes ; (3) à notre seule discrétion et sans limitation, refuser, restreindre l'accès, limiter la disponibilité ou désactiver (dans la mesure techniquement possible) toute de vos Contributions ou toute partie de celles-ci ; (4) à notre seule discrétion et sans préavis ni responsabilité, supprimer du Site ou désactiver tout fichier et contenu excessivement volumineux ou nuisible à nos systèmes ; et (5) gérer le Site de manière à protéger nos droits et propriétés et à assurer son bon fonctionnement.",
    "copyrightTitle": "9. Droits d'auteur et propriété du contenu",
    "copyrightCompliance": "Tout contenu publié sur les Services doit respecter la loi américaine sur le droit d'auteur.",
    "ipRights": "Nous ne revendiquons aucun droit de propriété intellectuelle sur le matériel que vous fournissez aux Services. Tous les matériels téléchargés restent votre propriété.",
    "contentModeration": "Nous ne filtrons pas le contenu à priori, mais nous nous réservons le droit (mais non l'obligation) de refuser ou supprimer tout contenu disponible via le Service à notre seule discrétion.",
    "prohibitedExploitation": "Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter aucune partie des Services, leur utilisation ou leur accès sans autorisation écrite expresse de la Société.",
    "impersonationProhibition": "Vous ne devez pas modifier un autre site web pour laisser faussement supposer qu'il est associé aux Services ou à la Société.",
    "dmcaPolicy": "Nous respectons les droits de propriété intellectuelle d'autrui. Si vous pensez qu'un matériel disponible sur ou via le Site porte atteinte à un droit d'auteur que vous détenez ou contrôlez, contactez-nous immédiatement. Une copie de votre notification sera envoyée à la personne ayant publié ou stocké le matériel concerné. Veuillez noter qu'en vertu de la loi applicable, vous pourriez être tenu pour responsable des dommages si votre notification contient des déclarations erronées. Si vous n'êtes pas sûr qu'un matériel sur ou lié par le Site viole vos droits d'auteur, envisagez d'abord de consulter un avocat.",
    "prohibitedActivitiesTitle": "10. Activités interdites",
    "generalProhibition": "Vous ne pouvez pas accéder ou utiliser le Site à d'autres fins que celles pour lesquelles nous le mettons à disposition. Le Site ne peut pas être utilisé dans le cadre d'activités commerciales, sauf celles spécifiquement approuvées par nous.",
    "userObligations": "En tant qu'utilisateur du Site, vous vous engagez à ne pas :",
    "dataScraping": "Extraire systématiquement des données ou d'autres contenus du Site pour créer ou compiler, directement ou indirectement, une collection, compilation, base de données ou répertoire sans notre autorisation écrite.",
    "fraud": "Nous tromper, frauder ou induire en erreur nous et d'autres utilisateurs, notamment en tentant d'obtenir des informations sensibles comme les mots de passe.",
    "securityInterference": "Contourner, désactiver ou interférer avec les fonctionnalités de sécurité du Site, y compris celles qui empêchent ou limitent l'utilisation ou la copie de tout Contenu.",
    "defamation": "Discréditer, ternir ou nuire, à notre avis, à nous et/ou au Site.",
    "harassment": "Utiliser des informations obtenues sur le Site pour harceler, maltraiter ou nuire à autrui.",
    "supportAbuse": "Faire un usage abusif de nos services d'assistance ou soumettre de faux signalements d'abus ou de mauvaise conduite.",
    "legalCompliance": "Utiliser le Site d'une manière incompatible avec les lois et réglementations applicables.",
    "framingProhibition": "Effectuer un cadrage ou un lien non autorisé vers le Site.",
    "malware": "Télécharger ou transmettre (ou tenter de le faire) des virus, chevaux de Troie ou tout autre élément nuisible, y compris un usage excessif de majuscules ou du spam, perturbant l'utilisation du Site.",
    "automation": "Utiliser des systèmes automatisés, comme des scripts pour envoyer des commentaires ou messages, ou des outils de collecte de données.",
    "copyrightRemoval": "Supprimer les mentions de droits d'auteur ou autres droits de propriété de tout Contenu.",
    "impersonation": "Tenter d'usurper l'identité d'un autre utilisateur ou personne.",
    "spyware": `Télécharger ou transmettre tout matériel servant de mécanisme passif ou actif de collecte ou transmission d'informations, comme des \"gifs\", pixels invisibles, cookies, etc.`,
    "disruption": "Interférer avec ou surcharger le Site ou les réseaux et services qui y sont connectés.",
    "employeeHarassment": "Harceler, ennuyer, intimider ou menacer nos employés ou agents.",
    "accessCircumvention": "Tenter de contourner les mesures de restriction d'accès au Site ou à certaines parties.",
    "codeCopying": "Copier ou adapter le logiciel du Site, y compris Flash, PHP, HTML, JavaScript ou autre code.",
    "reverseEngineering": "Sauf autorisation légale, décompiler ou désassembler tout logiciel faisant partie du Site.",
    "bots": "Sauf usage standard des moteurs de recherche, utiliser ou développer tout système automatisé accédant au Site.",
    "buyingAgents": "Utiliser un agent d'achat pour effectuer des achats sur le Site.",
    "unauthorizedUse": "Faire un usage non autorisé du Site, comme collecter des identifiants pour envoyer des emails non sollicités.",
    "competition": "Utiliser le Site pour concurrencer nos activités ou à des fins commerciales.",
    "advertising": "Utiliser le Site pour promouvoir ou vendre des biens et services.",
    "profileTransfer": "Vendre ou transférer votre profil.",
    "featuresTitle": "11. Fonctionnalités et bogues",
    "featuresDescription": "Nous concevons nos Services avec soin, mais nous ne garantissons pas qu'ils répondront à toutes vos attentes.",
    "bugsDescription": "Nous testons toutes nos fonctionnalités, mais des bogues peuvent subsister. Nous ne garantissons pas des Services exempts d'erreurs.",
    "correctionsTitle": "12. Corrections",
    "informationAccuracy": "Nous nous réservons le droit de corriger les erreurs ou omissions sur le Site sans préavis.",
    "siteAvailability": "Nous ne garantissons pas la disponibilité permanente du Site et pouvons le modifier sans préavis.",
    "userDataTitle": "13. Données utilisateur",
    "userDataDescription": "Nous conservons certaines données que vous transmettez, mais vous êtes responsable de vos données. Nous déclinons toute responsabilité en cas de perte.",
    "privacyPolicyTitle": "14. Politique de confidentialité",
    "liabilityTitle": "15. Responsabilité",
    "liabilityIntroduction": "Clause de responsabilité globale :",
    "liabilityWaiver": "Nous déclinons toute responsabilité pour tout dommage résultant de (1) l'utilisation des Services, (2) erreurs de contenu, (3) dommages personnels ou matériels, etc.",
    "miscellaneousTitle": "16. Divers",
    "miscellaneousDescription": "Ces CGU constituent l'intégralité de notre accord. Notre inaction ne vaut pas renonciation. Nous pouvons céder nos droits. Aucune relation d'emploi ou d'agence n'est créée.",
    "contactTitle": "17. Contactez-nous",
    "neverCap": "NeverCap",
    at: "à",
    "site": "Site",
    "services": "Services",
      trademarkProtection: "Les noms, l'apparence et l'ergonomie des Services sont protégés par le copyright© de la Société. Tous droits réservés. Vous ne pouvez pas reproduire, copier ou réutiliser aucune partie du HTML, CSS, JavaScript ou des éléments de conception visuelle sans autorisation écrite expresse de la Société. Vous devez demander l'autorisation d'utiliser le logo de la Société ou tout logo des Services à des fins promotionnelles. Veuillez nous envoyer un email {à} {email} pour toute demande d'utilisation des logos. Nous nous réservons le droit de révoquer cette autorisation en cas de violation de ces Conditions d'Utilisation.",
      privacyPolicyDescription: "Nous accordons une grande importance à la confidentialité et à la sécurité des données. Veuillez consulter notre {politique}. En utilisant le Site, vous acceptez d'être lié par notre Politique de Confidentialité, qui est incorporée dans ces Conditions d'Utilisation. Veuillez noter que le Site est hébergé aux États-Unis. Si vous accédez au Site depuis toute autre région du monde où les lois ou autres exigences régissant la collecte, l'utilisation ou la divulgation de données personnelles diffèrent des lois applicables aux États-Unis, alors en continuant à utiliser le Site, vous transférez vos données vers les États-Unis et vous acceptez que vos données soient transférées et traitées aux États-Unis.",
      contactDescription: "Si vous avez une question concernant l'une des Conditions d'Utilisation, veuillez nous contacter {à} l'adresse {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
