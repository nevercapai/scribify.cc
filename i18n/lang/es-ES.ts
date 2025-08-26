// 西班牙语
let message = {
  // 首页
  HomePage: {
    home: "Todas las Transcripciones",
    times: "{times} transcripciones gratuitas por día, {left} restantes hoy. ",
    tips: "Actualiza a Pro para transcripciones ilimitadas.",
    update: "Actualizar ahora",
    rename: "Renombrar",
    delete: "Eliminar",
    cancel: "Cancelar",
    confirm: "Crear",
    dialogLabel: "Nombre de la carpeta",
    recently: "Archivos recientes",
    loading: "Cargando",
    tour: {
      step0: {
        title: "Bienvenido a {name}",
        tip: "Aquí puedes:",
        content:
          "Transcribir conversaciones puntuales, reuniones, conferencias y más",
        next: "Comenzar"
      },
      step1: {
        title: "Transcribir archivos",
        content:
          "Soporta tres métodos de transcripción: archivos locales, enlaces y grabaciones."
      },
      step2: {
        title: "Crear una carpeta",
        content:
          'Haz clic en el "+" para crear una carpeta y organizar tus archivos.'
      },
      step3: {
        title: "Ver detalles de la transcripción y editar",
        content:
          "Haga clic en el elemento para ver los detalles de la transcripción y editarlo y traducirlo también."
      },
      next: "Siguiente",
      finish: "Entendido"
    },
    export: {
      export: "Exportar",
      title: "Estamos generando tu exportación",
      title2: "Tu archivo está listo",
      singleLoadingContent: "1 archivo se está comprimiendo.",
      singleSuccessContent: "1 archivo ha sido comprimido.",
      loadingContent: "{num} archivos se están comprimiendo.",
      successContent: "{num} archivos han sido comprimidos.",
      cancel: "Cancelar la exportación",
      error: "Error de exportación",
      dialog: {
        title: "Advertencia",
        content: "¿Cancelar la exportación?",
        cancel: "Cancelar exportación",
        continue: "Continuar exportando"
      }
    },
    welcome: {
      title: "¡Bienvenido a Scribify!",
      description: "Aquí puedes:",
      transcribe:
        "Transcribe sin esfuerzo con Scribify: convierte conversaciones de voz en texto claro, buscable y compartible en un instante.",
      precision:
        "Obtén transcripciones precisas con identificación de hablantes y marcas de tiempo al instante.",
      translate:
        "Rompe las barreras del idioma: traduce transcripciones a más de 200 idiomas con facilidad.",
      edit: "Edita, refina y exporta tus transcripciones en formatos que se adapten a tus necesidades.",
      collaborate: "Colabora compartiendo tu texto transcrito con otros.",
      button: "Comenzar",
      tip: "¿Listo para convertir audio en texto transcrito? ¡Comienza a explorar ahora!",
      tip2: "¡Comienza a explorar ahora!",
      tip1: "¿Listo para convertir audio en texto transcrito? "
    },
    subscriptionModal: {
      left: {
        title: "Obtén el Plan Pro para desbloquear más",
        c1: "Transcripciones ilimitadas",
        c2: "Cargas de 10 horas",
        c3: "Máxima prioridad",
        c4: "99% de precisión en transcripción",
        c5: "Más de 100 idiomas soportados",
        c6: "Identificación de hablantes",
        c7: "Traducción de transcripciones",
        t1: "Transcripciones ilimitadas para una persona.",
        t2: "Cada archivo puede durar hasta 10 horas / 5 GB. Sube 50 archivos a la vez.",
        t3: "Siempre transcribiremos tus archivos lo antes posible con la máxima prioridad."
      },
      right: {
        title: "Obtén el Plan Pro",
        yearly: "Anual",
        monthly: "Mensual",
        save: "Ahorro",
        preMonth: "al mes",
        preYear: "al año",
        firstMonth: "primer mes",
        afterwards: "después"
      },
      subscribe: "Suscribirse"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Fallido",
      selected: "Seleccionado",
      success: "Éxito",
      fileList: "Lista de Archivos"
    },
    dialog: {
      move: {
        title: "Mover",
        label: "Elige una carpeta",
        placeholder: "Elige una carpeta",
        confirm: "Mover",
        cancel: "Cancelar"
      },
      rename: {
        title: "Renombrar",
        label: "Nombre del archivo",
        confirm: "Renombrar",
        cancel: "Cancelar"
      },
      delete: {
        title: "Eliminar",
        file: "archivo",
        files: "archivos",
        label: "¿Confirmar eliminación? Esta acción no se puede deshacer.",
        confirm: "Eliminar",
        cancel: "Cancelar"
      },
      share: {
        title: "Compartir",
        label:
          "Cualquiera con el siguiente enlace seguro puede ver esta transcripción y el archivo multimedia asociado.",
        confirm: "Copiar enlace",
        success: "¡Copiado con éxito!"
      },
      export: {
        title: "Exportar",
        select: "Selecciona el formato que necesitas",
        settings: "Configuraciones",
        speaker: "Incluir hablante",
        timecodes: "Incluir códigos de tiempo",
        confirm: "Exportar",
        cancel: "Cancelar",
        selectErr: "Por favor selecciona uno o más formatos"
      }
    },
    search: {
      placeholder: "Buscar"
    },
    recently: "Reciente",
    record: "Grabar",
    transcribe: "Transcribir",
    unclassified: "Carpetas no clasificadas",
    buttons: {
      transcribe: "Transcribir archivos",
      url: "Transcribir enlaces",
      record: "Grabar y transcribir",
      recording: "Grabando..."
    },
    delSuccess: "Eliminado con éxito",
    create: "Crear",
    endRecord: {
      title: "Aviso",
      content:
        "Estás grabando. Esta acción terminará la grabación. ¿Quieres terminar la grabación?",
      confirm: "Continuar Grabación",
      cancel: "Terminar Grabación"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Grabar",
      pause: "Pausar",
      resume: "Reanudar",
      stop: "Detener",
      endRecord: "Finalizar grabación",
      delete: "Eliminar",
      transcribe: "Transcribir",
      permissionDenied:
        "Permiso de micrófono denegado o el dispositivo no existe",
      dialog: {
        delete: {
          title: "Advertencia",
          label: "¿Estás seguro de que deseas eliminar esta grabación?",
          confirm: "Eliminar",
          cancel: "Cancelar"
        },
        complete: {
          title: "Grabación completada",
          label:
            "La grabación ha alcanzado las 10 horas y se ha detenido automáticamente. Por favor, transcribe.",
          confirm: "Entendido"
        },
        speaker: {
          content:
            "Para identificación de hablantes, los archivos están limitados a 3 horas. Por favor desmarca '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcribir un medio en línea",
        title: "Pegar enlaces",
        label:
          "Pega tu enlace de video o audio de: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram y más plataformas...",
        confirm: "Añadir",
        cancel: "Cancelar",
        // 请输入正确的链接
        errorTitle:
          "La dirección del enlace que ingresaste es incorrecta. Por favor, verifica e inténtalo de nuevo.",
        linkName: "Enlace"
      },
      file: {
        orTitle: "Transcribir desde URL",
        dialogTitle: "Subir archivos para transcribir",
        tip1: "Arrastre los archivos aquí o haga clic para buscar",
        tip2: "Haga clic para navegar",
        or: "o",
        supported: "Formatos compatibles"
      },
      del: {
        title: "Advertencia",
        content:
          "Todo el progreso se perderá. ¿Confirmar la cancelación de la transcripción?",
        cancel: "Confirmar cancelación",
        confirm: "Continuar transcribiendo"
      },
      files: "Archivos",
      resultDialogTitle: "Transcribir archivos",
      resultDialogTitle2: "Transcribir archivo",
      cancel: "Cancelar",
      confirm: "Transcribir",
      return: "Volver",
      addMore: "Agregar más",
      language: "Seleccionar idioma",
      failed: "Fallido",
      tooLarge: "El archivo supera el límite (5 GB).",
      linkUpload: "Subiendo",
      fileFormat: "El formato de archivo no está permitido",
      localFiles: "Archivos locales",
      pasteLink: "Enlace en línea",
      uploadErr: "Error de carga",
      hashErr: "Error de hash",
      table: {
        status: "Estado",
        file: "Archivo",
        size: "Tamaño",
        noData: "Sin datos"
      },
      maxFileNum: "El número de archivos no puede exceder de {num}.",
      speaker: "Identificar Hablantes",
      speakerLabel: "Detectar automáticamente quién habla",
      guest: {
        transcribe: "Transcribir",
        file: "Archivo",
        audio: "Archivo de audio/vídeo",
        Uploading: "Subiendo..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Reciente",
      popular: "Popular",
      other: "Otro",
      searchLanguage: "Buscar idioma",
      noMatch: "No se encontró ningún idioma coincidente",
      English: "Inglés",
      "English(US)": "Inglés (EE.UU.)",
      "English(UK)": "Inglés (Reino Unido)",
      Spanish: "Español",
      Portuguese: "Portugués",
      French: "Francés",
      Italian: "Italiano",
      German: "Alemán",
      Dutch: "Neerlandés",
      Polish: "Polaco",
      Danish: "Danés",
      Japanese: "Japonés",
      Korean: "Coreano",
      Hungarian: "Húngaro",
      Czech: "Checo",
      Chinese: "Chino",
      Hebrew: "Hebreo",
      Arabic: "Árabe",
      Azerbaijani: "Azerbaiyano",
      Estonian: "Estonio",
      Belarusian: "Bielorruso",
      Bulgarian: "Búlgaro",
      Icelandic: "Islandés",
      Bosnian: "Bosnio",
      Persian: "Persa",
      Russian: "Ruso",
      "Chinese(Traditional)": "Chino (Tradicional)",
      Finnish: "Finlandés",
      Kazakh: "Kazajo",
      Galician: "Gallego",
      Catalan: "Catalán",
      "Chinese(Simplified)": "Chino (Simplificado)",
      Kannada: "Canarés",
      Croatian: "Croata",
      Latvian: "Letón",
      Lithuanian: "Lituano",
      Romanian: "Rumano",
      Marathi: "Maratí",
      Malay: "Malayo",
      Macedonian: "Macedonio",
      Maori: "Maorí",
      Afrikaans: "Afrikáans",
      Nepali: "Nepalí",
      Norwegian: "Noruego",
      Swedish: "Sueco",
      Serbian: "Serbio",
      Slovak: "Eslovaco",
      Slovenian: "Esloveno",
      Swahili: "Suajili",
      Tagalog: "Tagalo",
      Tamil: "Tamil",
      Thai: "Tailandés",
      Turkish: "Turco",
      Welsh: "Galés",
      Urdu: "Urdu",
      Ukrainian: "Ucraniano",
      Greek: "Griego",
      Armenian: "Armenio",
      Hindi: "Hindi",
      Indonesian: "Indonesio",
      Vietnamese: "Vietnamita",
      Albanian: "Albanés",
      Amharic: "Amárico",
      Assamese: "Asamés",
      Occitan: "Occitano",
      Bashkir: "Baskir",
      Basque: "Vasco",
      Breton: "Bretón",
      Tibetan: "Tibetano",
      Faroese: "Feroés",
      Sanskrit: "Sánscrito",
      Khmer: "Jemer",
      Georgian: "Georgiano",
      Gujarati: "Guyaratí",
      "Haitian Creole": "Criollo haitiano",
      Hausa: "Hausa",
      Latin: "Latín",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgués",
      Malagasy: "Malgache",
      Maltese: "Maltés",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengalí",
      Burmese: "Birmano",
      Punjabi: "Panyabí",
      Pashto: "Pastún",
      Sinhala: "Cingalés",
      Shona: "Shona",
      Somali: "Somalí",
      Tajik: "Tayiko",
      Tatar: "Tártaro",
      Telugu: "Telugu",
      Turkmen: "Turcomano",
      Uzbek: "Uzbeko",
      Hawaiian: "Hawaiano",
      "Norwegian Nynorsk": "Nynorsk noruego",
      Sindhi: "Sindhi",
      Sundanese: "Sundanés",
      Yiddish: "Yidis",
      Yoruba: "Yoruba",
      Javanese: "Javanés",
      Cantonese: "Cantonés",
      Abkhaz: "Abjasio",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avar",
      Ewe: "Ewé",
      Aymara: "Aimara",
      Irish: "Irlandés",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osetio",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinés",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinán",
      pam: "Pampango",
      nso: "Sotho del Norte",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Baluchi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Mari de la pradera",
      Chamorro: "Chamorro",
      Chechen: "Checheno",
      chk: "Chuukés",
      Chuvash: "Chuvasio",
      Tswana: "Setsuana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetun",
      Divehi: "Divehi",
      dyu: "Dioula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele del sur",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (escritura de África Occidental)",
      "French(Canada)": "Francés (Canadá)",
      Fijian: "Fiyiano",
      fon: "Fon",
      "Western Frisian": "Frisón occidental",
      fur: "Friulano",
      Fulah: "Fula",
      Kongo: "Kongo",
      Kalaallisut: "Groenlandés",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirguís",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Q'eqchi'",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corso",
      "crh-Latn": "Tártaro de Crimea (latino)",
      crh: "Tártaro de Crimea (cirílico)",
      Quechua: "Quechua",
      Kurdish: "Kurdo (Kurmanji)",
      ckb: "Kurdo (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalio",
      lij: "Ligur",
      Limburgish: "Limburgués",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardo",
      rom: "Romaní",
      mad: "Madura",
      Manx: "Manés",
      mwr: "Marwari",
      "ms-Arab": "Malayo (Jawi)",
      Marshallese: "Marshalés",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Criollo mauriciano",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Náhuatl (Huasteca oriental)",
      "Southern Sotho": "Sotho del Sur",
      new: "Nevari (Nepal Bhasa)",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Panyabí (Shahmukhi)",
      "pt-PT": "Portugués (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapoteco",
      "Northern Sami": "Sami del Norte",
      Samoan: "Samoano",
      kri: "Krio de Sierra Leona",
      crs: "Criollo de Seychelles",
      Sango: "Sango",
      "sat-Latn": "Santali (latino)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Suazi",
      "Scottish Gaelic": "Gaélico escocés",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latino)",
      Tahitian: "Tahitiano",
      Tonga: "Tongano",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvano",
      war: "Waray",
      mak: "Makassar",
      vec: "Véneto",
      Uyghur: "Uigur",
      Venda: "Venda",
      Wolof: "Wólof",
      udm: "Udmurto",
      szl: "Silesio",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Patois jamaiquino",
      sah: "Yakuto",
      ace: "Acehnés",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (latino)",
      Inuktitut: "Inuktitut (silabario)",
      yua: "Maya yucateco",
      Dzongkha: "Dzongkha",
      Zulu: "Zulú"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "o", // 或
    LoginBtn: "Inicia sesión con correo electrónico",
    LoginGoogle: "Inicia sesión con Google",
    SignupBtn: "Regístrate con correo electrónico",
    SignupGoogle: "Regístrate con Google",
    SignupDes: "Regístrate hoy para presenciar su magia — gratis.",
    SignupTitle: "Transcripción precisa e ilimitada",
    signup: "Registrarse", // 注册
    sign_up: "Registrarse", // 注册
    loginByGoogle: "Continuar con Google", // 使用Google登录
    emailAddress: "Por favor, introduce tu correo electrónico", // 请输入您的邮箱
    createAccount: "Crear una nueva cuenta", // 创建账户
    accountExists: "¿Ya tienes una cuenta? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Al continuar, aceptas nuestros {terms} y {policy}.",
      terms: "Términos",
      policy: "Política de privacidad"
    },
    setPassword: "Establecer una contraseña", // 设置密码
    code: "Código de verificación", // 验证码
    resend: "Reenviar", // 重新发送
    enterPassword: "Contraseña: Mínimo 6 caracteres.", // 请输入密码
    passwordLeval: "Nivel de contraseña", // 密码强度
    Weak: "Débil", // 弱 中 强
    Medium: "Medio", // 弱 中 强
    Strong: "Fuerte", // 弱 中 强
    confirmPassword: "Confirma tu contraseña", // 确认密码
    invalidEmail: "Dirección de correo electrónico no válida", // 无效的邮箱地址
    logInDirectly:
      "Esta cuenta ya existe. Por favor, inicia sesión directamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Código de verificación incorrecto. Inténtalo de nuevo.", // 验证码错误，请重试
    atLeastSix: "La contraseña debe tener al menos 6 caracteres.", // 密码长度至少6位
    passwordNotMatch: "Las contraseñas no coinciden. Inténtalo de nuevo.", // 密码不匹配，请重试
    login: "Iniciar sesión", // 登录
    log_in: "Iniciar sesión", // 登录
    log_In: "Iniciar sesión", // 登录
    password: "Contraseña", // 密码
    forgotPassword: "¿Olvidaste tu contraseña?", // 忘记密码？
    noAccount: "¿No tienes una cuenta？", // 没有账户？注册
    accountNotExists: "Esta cuenta no existe.", // 账户不存在
    passwordError: "Error de contraseña", // 密码错误
    sendCode: "Enviar código de verificación", // 发送验证码
    resetPassword: "Restablecer contraseña", // 重置密码
    resetYourPassword: "Restablece tu contraseña", // 重置你的密码
    newOldCantSame: "La nueva contraseña debe ser diferente de la anterior.", // 新密码与旧密码不能相同
    passwordResetOk: "¡Contraseña restablecida con éxito!", // 密码重置成功！
    signupToSaveProgress: "Completa el registro para guardar tu progreso.",
    tip: "Consejo",
    tipContentEmail:
      "Acabamos de enviar la contraseña de acceso de su cuenta a su correo electrónico.",
    tipContentPassword:
      "Por favor revise su bandeja de entrada e inicie sesión con su correo electrónico y contraseña.",
    codeToEmail:
      "Acabamos de enviar un código de verificación a su correo electrónico. Por favor revise su bandeja de entrada y pegue el código de verificación arriba."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Plan de suscripción",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transcripciones diarias",
    uploadMinutes: "Subidas de 30 minutos",
    lowerPriority: "Prioridad más baja",
    currentPlan: "Plan actual",
    professionalEdition: "edición profesional",
    unlimitedTranscription: "Transcripción ilimitada",
    unlimitedNumberOfTimes:
      "Frecuencia y duración de transcripción ilimitadas.",
    filesUploadedAtOnce:
      "Cada archivo puede durar hasta 10 horas/5 GB. Sube 50 archivos a la vez.",
    highestPriority: "máxima prioridad",
    weWillGiveTheHighest:
      "Siempre transcribiremos tus archivos lo antes posible con la máxima prioridad.",
    theFirstMonth: "El primer mes",
    subscribeTo: "suscribirse a",
    basicVersionFree: "Versión básica (gratis)",
    return: "Volver",
    annualize: "anualizar",
    monthly: "mensual",
    everyYear: "cada año",
    saved: "ahorrado",
    byTheMonth: "por mes",
    firstMonth: "primer mes",
    afterwardsEveryMonth: "Después, cada mes",
    manageSubscription: "Administrar suscripción",
    professionalYearbook: "Anual profesional",
    professionalMonthly: "Mensual profesional",
    subscriptionWillCancelledOn: "Tu suscripción se cancelará el",
    displayLanguage: "Idioma de visualización",
    update: "Actualizar ahora",
    basicversion: "Versión básica (Gratis)",
    daily: "{start} de {end} transcripciones diarias usadas",
    upgradetoPro: "Actualizar a Pro",
    accountSetting: "Configuración de cuenta",
    logOut: "Cerrar sesión",
    account: "Cuenta",
    email: "Correo electrónico",
    id: "ID",
    password: "Contraseña",
    resetPassword: "Restablecer contraseña",
    logIn: "Iniciar sesión",
    tryForFree: "Probar gratis",
    notFund: "No encontrado",
    couldntFind: "No pudimos encontrar lo que buscabas.",
    proAnnual: "Pro Anual",
    proMonthly: "Pro Mensual",
    perMonth: "por mes",
    afterwards: "después",
    accuracy: "precisión de transcripción",
    supported: "idiomas admitidos",
    identification: "Identificación de hablante",
    transcriptSranslation: "Traducción de transcripción",
    perYear: "por año",
    getProPlan: "Obtener plan Pro",
    changeToAnnual: "Cambiar a anual",
    automaticRenewalon: "Renovación automática el",
    eachMonth: "Renovación automática el día {time} de cada mes.",
    automaticRenewal:
      "Renovación automática fallida, por favor verifique el método de pago.",
    eachYear: "Renovación automática el {time} cada año.",
    returnAccountSetting: "Volver",
    needsToWaitLonger:
      "Espere un poco más antes de que sus archivos sean transcritos.",
    freeThreeTimesDay: "Transcribe 3 archivos gratis cada día.",
    oneFileUploaded:
      "Cada archivo puede tener una duración de hasta 30 minutos. Sube 1 archivo a la vez.",
    uploadWithinHours: "Cargas de 10 horas",
    yourSubscription: "Tu suscripción será cancelada el {time}.",
    save: "Ahorrar",
      freeversion2: "Plan Gratis"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chino(Simplificado)",
      "Chinese(Traditional)": "Chino(Tradicional)",
      Japanese: "Japonés",
      Danish: "Danés",
      German: "Alemán",
      English: "Inglés",
      Spanish: "Español",
      French: "Francés",
      Italian: "Italiano",
      Hungarian: "Húngaro",
      Dutch: "Neerlandés",
      Norwegian: "Noruego",
      Polish: "Polaco",
      Portuguese: "Portugués",
      Finnish: "Finlandés",
      Swedish: "Sueco",
      Turkish: "Turco",
      Greek: "Griego",
      Russian: "Ruso",
      Ukrainian: "Ucraniano",
      Hebrew: "Hebreo",
      Arabic: "Árabe",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Plantilla SaaS de Nuxt3 de código abierto, preintegrada con pasarelas de pago globales (Stripe/Cream), Google OAuth, enrutamiento i18n y herramientas de optimización SEO. Diseñada para desarrolladores que lanzan aplicaciones web multilingües, ofrece soporte SSR/SSG y seguridad de nivel de producción lista para usar.",
    startLink: "Comienza la prueba gratuita~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "¡Únete a la lista de espera y recibe primero las últimas noticias y descuentos de NuxtPro!",
      placeholder: "Introduce tu correo electrónico",
      button: "Unirse a la lista de espera",
      joinCountMessage:
        "🔥 ¡El usuario temprano #{count} acaba de unirse a la lista de espera!"
    },
    seo: {
      title: "Plantilla SaaS de Nuxt de código abierto | NuxtPro",
      description:
        "El boilerplate de NuxtJS con todo lo que necesitas para poner tu producto frente a los clientes. De la idea a la producción en 5 minutos."
    },
    api: {
      title: "esto es una demo",
      corpInfo: "información de la empresa"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "error de descarga de video"
      },
      mse: {
        code: 2,
        msg: "error al añadir flujo"
      },
      parse: {
        code: 3,
        msg: "error de análisis"
      },
      format: {
        code: 4,
        msg: "formato incorrecto"
      },
      decoder: {
        code: 5,
        msg: "error de decodificación"
      },
      runtime: {
        code: 6,
        msg: "errores gramaticales"
      },
      timeout: {
        code: 7,
        msg: "tiempo de espera de reproducción"
      },
      other: {
        code: 8,
        msg: "otros errores"
      }
    },
    HAVE_NOTHING: "No hay información sobre si el audio/video está listo",
    HAVE_METADATA: "Los metadatos de audio/video están listos ",
    HAVE_CURRENT_DATA:
      "Hay datos sobre la ubicación de reproducción actual, pero no hay suficientes datos para reproducir el siguiente fotograma/milisegundo",
    HAVE_FUTURE_DATA:
      "Actualmente y al menos un fotograma de datos está disponible",
    HAVE_ENOUGH_DATA:
      "Los datos disponibles son suficientes para comenzar a reproducir",
    NETWORK_EMPTY: "El audio/video no ha sido inicializado",
    NETWORK_IDLE:
      "El audio/video está activo y se han seleccionado recursos, pero no se utiliza la red",
    NETWORK_LOADING: "El navegador está descargando los datos",
    NETWORK_NO_SOURCE: "No se encontró ninguna fuente de audio/video",
    MEDIA_ERR_ABORTED: "El usuario abortó el proceso de obtención",
    MEDIA_ERR_NETWORK: "Ocurrió un error al descargar",
    MEDIA_ERR_DECODE: "Ocurrió un error al decodificar",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video no es compatible",
    REPLAY: "Repetir",
    ERROR: "La red está desconectada",
    PLAY_TIPS: "Reproducir",
    PAUSE_TIPS: "Pausar",
    PLAYNEXT_TIPS: "Reproducir siguiente",
    DOWNLOAD_TIPS: "Descargar",
    ROTATE_TIPS: "Rotar",
    RELOAD_TIPS: "Recargar",
    FULLSCREEN_TIPS: "Pantalla completa",
    EXITFULLSCREEN_TIPS: "Salir de pantalla completa",
    CSSFULLSCREEN_TIPS: "Csspantallacompleta",
    EXITCSSFULLSCREEN_TIPS: "Salir de csspantallacompleta",
    TEXTTRACK: "Subtítulo",
    PIP: "PIP",
    SCREENSHOT: "Captura de pantalla",
    LIVE: "EN VIVO",
    OFF: "Apagar",
    OPEN: "Abrir",
    MINI_DRAG: "Haz clic y mantén presionado para arrastrar",
    MINISCREEN: "Minipantalla",
    REFRESH_TIPS: "Por favor, inténtalo",
    REFRESH: "Actualizar",
    FORWARD: "adelantar",
    LIVE_TIP: "En vivo",
    TM_SUBTITLE_SHOW_TIPS: "Activar subtítulos",
    TM_SUBTITLE_HIDE_TIPS: "Desactivar subtítulos",
    TM_MINIMIZE_TIPS: "Ocultar el video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "política de privacidad",
    lastUpdated: "Última actualización: 25 de agosto de 2025",
    policyDescription:
      'Esta Política describe cómo Scribify (en adelante, "Scribify", "nuestro", "nosotros") recopila, usa y divulga su información personal cuando utiliza nuestros servicios, sitios web',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      ', y software (colectivamente, los "Servicios").',
    policyAgreement:
      "Lea atentamente esta Política de Privacidad y asegúrese de comprenderla. Al utilizar cualquiera de nuestros Servicios, usted acepta esta Política de Privacidad. Si no está de acuerdo con el uso que hagamos de sus datos personales conforme a esta Política, debe dejar de usar nuestros Servicios inmediatamente.",
    policyOverview:
      "En esta política, explicamos qué datos recopilamos y por qué; cómo gestionamos sus datos; y sus derechos con respecto a ellos. No vendemos sus datos.",
    scopeTitle: "1. Alcance de esta Política de Privacidad",
    whatWeCollectTitle: "2. Qué recopilamos y por qué",
    accessShareTitle: "3. Cuándo accedemos o compartimos su información",
    secureDataTitle: "4. Cómo protegemos sus datos",
    deleteContentTitle: "5. ¿Qué sucede cuando eliminas tu contenido?",
    locationTitle: "6. Ubicación del sitio y datos",
    childrenPrivacyTitle: "7. Privacidad de los niños",
    updatesTitle: "8. Actualizaciones de esta Política de Privacidad",
    contactUsTitle: "9. Contáctenos",
    identityAccessTitle: "2.1 Identidad y acceso",
    billingInfoTitle: "2.2 Información de facturación",
    productInteractionsTitle: "2.3 Interacciones del producto",
    websiteInteractionsTitle: "2.4 Interacciones del sitio web",
    cookiesTitle: "2.5 Galletas",
    voluntaryCorrespondenceTitle: "2.6 Correspondencia voluntaria",
    scopeContent:
      "Esta Política de Privacidad se aplica únicamente a la recopilación y el procesamiento de información sobre los usuarios de los Servicios. No se aplica a ningún servicio, sitio web ni software operado por terceros que estén vinculados con nosotros (ya sea que proporcionemos dichos enlaces o que otros usuarios los compartan), ni al contenido, los datos, las aplicaciones ni los materiales de terceros. Le recomendamos que consulte las políticas de privacidad de cualquier sitio web o software de terceros antes de proporcionarles información.",
    collectPrinciple:
      "Nuestro principio rector es recolectar solo lo necesario. Esto significa en la práctica:",
    identityAccessContent:
      "Al suscribirse a uno de nuestros productos, le solicitamos información de identificación, como su nombre y correo electrónico. Esto nos permite ofrecerle funcionalidades esenciales del producto y enviarle actualizaciones y otra información esencial.",
    billingInfoContent:
      "Si se suscribe a un producto de pago, se le solicitará su información de pago y dirección de facturación. Esta información se envía directamente a nuestro procesador de pagos y no llega a nuestros servidores.",
    productInteractionsContent:
      "Almacenamos en nuestros servidores el contenido que usted sube, recibe o mantiene en sus cuentas de producto. A menos que lo elimine, podremos conservarlo mientras su cuenta esté activa.",
    websiteInteractionsContent:
      "Recopilamos información sobre su actividad de navegación con fines analíticos y estadísticos, como la evaluación de la tasa de conversión y la experimentación con nuevos diseños de productos. Esto incluye, por ejemplo, la versión de su navegador y sistema operativo, su dirección IP, las páginas web que visitó y su tiempo de carga, y el sitio web que lo refirió a nosotros. Si tiene una cuenta y ha iniciado sesión, estos datos de analítica web se vinculan a su dirección IP y cuenta de usuario hasta que su cuenta deje de estar activa.",
    cookiesContent1:
      "También utilizamos cookies propias persistentes y algunas cookies de terceros para almacenar determinadas preferencias, facilitarle el uso de nuestras aplicaciones, realizar pruebas A/B y respaldar algunos análisis.",
    cookiesContent2:
      "Una cookie es un fragmento de texto que almacena su navegador. Puede ayudarle a recordar la información de inicio de sesión y las preferencias del sitio. También puede recopilar información como el tipo de navegador, el sistema operativo, las páginas web visitadas, la duración de la visita, el contenido visualizado y otros datos de navegación. Puede ajustar la configuración de retención de cookies y aceptar o bloquear cookies individuales en la configuración de su navegador, aunque nuestras aplicaciones no funcionarán correctamente y otros aspectos de nuestro servicio podrían no funcionar correctamente si desactiva las cookies.",
    voluntaryCorrespondenceContent:
      "Cuando nos envía un correo electrónico con una pregunta o para solicitar ayuda, conservamos esa correspondencia, incluida su dirección de correo electrónico, para que tengamos un historial de correspondencia pasada para consultar si se comunica con nosotros en el futuro.",
    accessShareContent1:
      "Para proporcionarle los productos o servicios que ha solicitado. Utilizamos subprocesadores externos para el funcionamiento de nuestras aplicaciones y para prestarle los Servicios. Esto incluye proveedores de servicios en la nube y de análisis.",
    accessShareContent2:
      "Para investigar, prevenir o tomar medidas en caso de abuso. Acceder a la cuenta de un cliente para investigar un posible abuso es una medida de último recurso. Queremos proteger la privacidad y la seguridad tanto de nuestros clientes como de quienes nos informan sobre problemas, y hacemos todo lo posible por equilibrar estas responsabilidades durante todo el proceso. Si descubrimos que está utilizando nuestros productos para un fin restringido, tomaremos las medidas necesarias, incluyendo la notificación a las autoridades competentes cuando corresponda.",
    accessShareContent3: "Cuando lo requiera la legislación aplicable.",
    userDataRequests:
      "Solicitudes de datos de usuarios. Nuestra política es no responder a solicitudes gubernamentales de datos de usuarios, a menos que estemos obligados por un proceso legal o en circunstancias limitadas, en caso de una solicitud de emergencia. Sin embargo, si las autoridades policiales estadounidenses cuentan con la orden judicial, citación penal o resolución judicial que nos obligue a compartir datos, debemos cumplir. Asimismo, solo responderemos a solicitudes de autoridades gubernamentales fuera de EE. UU. si así lo exige el gobierno estadounidense mediante los procedimientos descritos en un tratado o acuerdo de asistencia legal mutua. Nuestra política es notificar a los usuarios afectados antes de compartir datos, a menos que tengamos prohibido hacerlo legalmente, y excepto en casos de emergencia.",
    preservationRequests:
      "Solicitudes de conservación. De igual forma, nuestra política es cumplir con las solicitudes de conservación de datos únicamente si así lo exige la Ley Federal de Comunicaciones Almacenadas de EE. UU., Título 18 del Código de los Estados Unidos, Sección 2703(f), o una citación judicial debidamente notificada en EE. UU. para asuntos civiles. No compartimos datos conservados a menos que lo exija la ley o una orden judicial que decidamos no apelar. Además, a menos que recibamos una orden judicial, una orden judicial o una citación judicial antes de que expire el plazo de conservación requerido, destruiremos cualquier copia conservada de los datos del cliente al finalizar dicho plazo.",
    taxAudit:
      "Si una autoridad fiscal nos audita, podríamos estar obligados a compartir información de facturación. En ese caso, compartiremos solo la mínima necesaria, como las direcciones de facturación y la información sobre exenciones fiscales.",
    secureDataContent1: "Todos los datos están encriptados mediante",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "cuando se transmiten desde nuestros servidores a su navegador.",
    deleteContentContent:
      "Si elimina cualquier contenido, éste quedará inmediatamente inaccesible.",
    locationContent:
      "Nuestros productos y otras propiedades web operan en Estados Unidos. Si se encuentra en la Unión Europea, el Reino Unido o en cualquier otro lugar fuera de Estados Unidos, tenga en cuenta que cualquier información que nos proporcione se transferirá y almacenará en Estados Unidos. Al utilizar nuestros sitios web o Servicios, o al proporcionarnos su información personal, usted consiente dicha transferencia.",
    childrenPrivacyContent:
      "Los Servicios no están dirigidos a menores y no recopilamos intencionalmente información personal de menores de 13 años. Si usted es menor de 13 años, le rogamos que no envíe información personal a través de los Servicios. Si cree que un menor nos ha proporcionado información personal infringiendo esta Política, póngase en contacto con nosotros como se indica a continuación.",
    updatesContent:
      "Podemos actualizar esta política según sea necesario para cumplir con la normativa pertinente y reflejar cualquier nueva práctica. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página.",
    contactUsContent1:
      "Si tiene alguna pregunta, comentario o queja sobre nuestra Política de Privacidad, por favor",
    contactUs: "Contáctanos",
    contactUsContent2:
      "y nos esforzaremos por atender su queja lo antes posible."
  },
  termsOfService: {
    termsOfServiceTitle: "Condiciones de servicio",
    lastUpdated: "Última actualización: 21 de septiembre de 2022",
    thankYouMessage: "¡Gracias por utilizar nuestros productos!",
    companyReference:
      'Cuando decimos "Compañía", "nosotros", "nuestro" o "nos" en este documento, nos referimos a Scribify.',
    servicesDefinition:
      'Cuando decimos "Servicios", nos referimos a cualquier producto creado y mantenido por Scribify, ya sea entregado dentro de un navegador web, una aplicación de escritorio, una aplicación móvil u otro formato.',
    termsUpdateNotice:
      "Es posible que actualicemos estos Términos de Servicio en el futuro. Normalmente, estos cambios se han realizado para aclarar algunos de estos términos mediante enlaces a una política relacionada más amplia. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página y tomaremos las medidas necesarias para notificar a los titulares de las cuentas.",
    acceptanceOfAgreementTitle: "1. Aceptación del Acuerdo",
    scribifyServicesTitle: "2. Servicios de Scribify",
    accountTermsTitle: "3. Condiciones de la cuenta",
    paymentRefundsTitle: "4. Pagos, reembolsos y cambios de plan",
    cancellationTerminationTitle: "5. Cancelación y terminación",
    submissionsTitle: "6. Envíos",
    uptimeSecurityTitle: "7. Tiempo de actividad y seguridad",
    siteManagementTitle: "8. Gestión del sitio",
    copyrightContentTitle: "9. Derechos de autor y propiedad del contenido",
    prohibitedActivitiesTitle: "10. Actividades prohibidas",
    featuresBugsTitle: "11. Características y errores",
    correctionsTitle: "12. CORRECCIONES",
    userDataTitle: "13. Datos del usuario",
    privacyPolicyTitle: "14. Política de privacidad",
    liabilityTitle: "15. Responsabilidad",
    miscellaneousTitle: "16. Varios",
    contactUsTitle: "17. Contáctenos",
    acceptanceContent1:
      "Al utilizar nuestros Servicios, usted acepta este Acuerdo, que se convierte en un contrato vinculante entre usted y Scribify. Declara tener la capacidad legal para aceptar estos Términos y afirma ser mayor de edad para formalizar un contrato vinculante. La aceptación por parte de Scribify está expresamente condicionada a su consentimiento a todos los términos y condiciones de este Acuerdo.",
    acceptanceContent2:
      "Los Servicios no están destinados a menores de 18 años ni deben ser utilizados por ellos. Al utilizar los Servicios, usted declara y garantiza que cumple con el requisito de elegibilidad anterior.",
    acceptanceContent3:
      'Los términos "usted", "su" y "usted mismo" también incluyen a sus empleados, agentes, representantes comerciales y cualquier otra persona a la que proporcione acceso a los Servicios a través de su Cuenta (según se define más adelante). Usted es responsable de garantizar que todas las personas que accedan a los Servicios a través de su cuenta conozcan y cumplan estos Términos.',
    acceptanceContent4:
      "Scribify se reserva el derecho de revisar y actualizar estos Términos periódicamente a su entera discreción. Todos los cambios entran en vigor inmediatamente después de su publicación. Su uso continuado de los Servicios tras la publicación de los Términos revisados implica que acepta y está de acuerdo con los cambios. Le recomendamos que consulte esta página periódicamente para estar al tanto de cualquier cambio, ya que es vinculante.",
    servicesContent1:
      "Nuestros Servicios permiten a los usuarios transformar conversaciones de voz en texto transcrito que se puede buscar, traducir y compartir con otros.",
    servicesContent2:
      'Usted puede elegir si desea utilizar la versión gratuita de los Servicios ("Servicios gratuitos") o la versión paga de los Servicios basada en suscripción por la que es posible que deba pagar tarifas (los "Servicios pagados").',
    servicesContent3:
      "Pondremos los Servicios a su disposición. Usted es responsable de hacer todos los arreglos necesarios para acceder a ellos.",
    accountTerms1:
      "Usted es responsable de mantener la seguridad de su cuenta. La Compañía no se responsabiliza de ninguna pérdida o daño derivado del incumplimiento de esta obligación de seguridad.",
    accountTerms2:
      "- No puede utilizar los Servicios para ningún propósito ilegal, poco ético o inmoral.",
    accountTerms3:
      "- Usted es responsable de todo el contenido publicado y de la actividad que se realice en su cuenta. Esto incluye el contenido publicado por otras personas que: (a) tengan acceso a sus credenciales de inicio de sesión; o (b) tengan sus propias credenciales de inicio de sesión en su cuenta.",
    accountTerms4:
      "Debe ser un humano. No se permiten cuentas registradas mediante bots ni otros métodos automatizados.",
    paymentContent1:
      "Para los Servicios de pago que ofrecen una prueba gratuita, le explicamos la duración de la prueba al registrarse. Después del periodo de prueba, deberá pagar por adelantado para seguir usando el Servicio. Si no paga, estos servicios finalizarán.",
    paymentContent2:
      "- Si está actualizando de un plan gratuito a un plan pago, cobraremos su tarjeta inmediatamente y su ciclo de facturación comenzará el día de la actualización.",
    paymentContent3:
      "Todas las tarifas no incluyen impuestos, gravámenes ni aranceles impuestos por las autoridades fiscales. Cuando sea necesario, recaudaremos dichos impuestos en nombre de la autoridad fiscal y los remitiremos a la misma. De lo contrario, usted será responsable del pago de todos los impuestos, gravámenes o aranceles.",
    paymentContent4:
      "- Ninguna compra es reembolsable. Puede cancelar cualquier servicio de pago en cualquier momento iniciando sesión en su cuenta. En el caso de las suscripciones de pago, la cancelación se hará efectiva al finalizar el periodo de pago actual, a menos que se indique lo contrario.",
    cancellationContent1:
      "Si cancela el Servicio antes de que finalice el tiempo pagado, su cancelación se hará efectiva de inmediato y no se le cobrará de nuevo. No prorrateamos automáticamente el tiempo no utilizado en el último ciclo de facturación.",
    cancellationContent2:
      "Nos reservamos el derecho de suspender o cancelar su cuenta y denegarle el uso actual o futuro de nuestros Servicios, por cualquier motivo y en cualquier momento. La suspensión implica que no podrá acceder a la cuenta ni a su contenido. La cancelación también resultará en la eliminación de su cuenta o su acceso a ella, así como en la pérdida y renuncia a todo el contenido de su cuenta. También nos reservamos el derecho de denegar el uso de los Servicios a cualquier persona, por cualquier motivo y en cualquier momento. Esta cláusula se aplica porque, estadísticamente, de los cientos de miles de cuentas en nuestros Servicios, al menos una realiza actividades ilícitas.",
    cancellationContent3:
      "- El abuso verbal, físico, escrito o de otro tipo (incluidas las amenazas de abuso o represalias) de un empleado o funcionario de la Compañía puede resultar en la cancelación inmediata de la cuenta.",
    submissionsContent:
      'Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, opinión u otra información relacionada con el Sitio ("Contenidos") que nos proporcione no es confidencial y pasará a ser de nuestra exclusiva propiedad. Tendremos los derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y la difusión sin restricciones de estos Contenidos para cualquier fin lícito, comercial o de otro tipo, sin necesidad de reconocimiento ni compensación para usted. Por la presente, usted renuncia a todos los derechos morales sobre dichos Contenidos y garantiza que son originales suyos o que tiene derecho a enviarlos. Usted acepta que no habrá recurso contra nosotros por ninguna infracción o apropiación indebida, presunta o real, de ningún derecho de propiedad sobre sus Contenidos.',
    uptimeContent1:
      "El uso que usted hace de los Servicios es bajo su propio riesgo. Los proporcionamos tal como están y según disponibilidad. No ofrecemos acuerdos de nivel de servicio para la mayoría de nuestros Servicios, pero nos tomamos muy en serio el tiempo de actividad de nuestras aplicaciones.",
    uptimeContent2:
      "Nos reservamos el derecho a desactivar temporalmente su cuenta si su uso supera significativamente el uso habitual de otros clientes de los Servicios. Por supuesto, nos pondremos en contacto con usted antes de tomar cualquier medida, salvo en casos excepcionales en los que el nivel de uso pueda afectar negativamente el rendimiento del Servicio para otros clientes.",
    uptimeContent3:
      "Tomamos numerosas medidas para proteger y asegurar sus datos mediante copias de seguridad, redundancias y cifrado. Aplicamos cifrado para la transmisión de datos a través de la internet pública.",
    uptimeContent4:
      "- Utilizamos proveedores externos y socios de alojamiento para proporcionar el hardware, el software, la red, el almacenamiento y la tecnología relacionada necesarios para ejecutar los Servicios.",
    siteManagementContent:
      "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear el Sitio para detectar violaciones de estos Términos de Servicio; (2) tomar las medidas legales apropiadas contra cualquier persona que, a nuestra entera discreción, viole la ley o estos Términos de Servicio, incluyendo, sin limitación, reportar a dicho usuario a las autoridades policiales; (3) a nuestra entera discreción y sin limitación, rechazar, restringir el acceso, limitar la disponibilidad de, o deshabilitar (en la medida que sea tecnológicamente factible) cualquiera de sus Contribuciones o cualquier parte de las mismas; (4) a nuestra entera discreción y sin limitación, aviso o responsabilidad, eliminar del Sitio o deshabilitar de otra manera todos los archivos y contenido que sean excesivos en tamaño o que de alguna manera sean una carga para nuestros sistemas; y (5) administrar de otra manera el Sitio de una manera diseñada para proteger nuestros derechos y propiedad y para facilitar el correcto funcionamiento del Sitio.",
    copyrightContent1:
      "- Todo el contenido publicado en los Servicios debe cumplir con la ley de derechos de autor de EE. UU.",
    copyrightContent2:
      "No reclamamos derechos de propiedad intelectual sobre el material que usted proporciona a los Servicios. Todo el material subido es suyo.",
    copyrightContent3:
      "- No seleccionamos previamente el contenido, pero nos reservamos el derecho (pero no la obligación), a nuestra entera discreción, de rechazar o eliminar cualquier contenido que esté disponible a través del Servicio.",
    copyrightContent4:
      "Los nombres, la apariencia y el funcionamiento de los Servicios son propiedad intelectual de la Compañía. Todos los derechos reservados. No puede duplicar, copiar ni reutilizar ninguna parte del HTML, CSS, JavaScript ni los elementos de diseño visual sin la autorización expresa por escrito de la Compañía. Debe solicitar permiso para usar el logotipo de la Compañía o cualquier logotipo del Servicio con fines promocionales.",
    emailUs: "Envíenos un correo electrónico",
    copyrightContent5:
      "Solicitudes de uso de logotipos. Nos reservamos el derecho de revocar este permiso si infringe estos Términos de Servicio.",
    copyrightContent6:
      "- Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte de los Servicios, el uso de los Servicios o el acceso a los Servicios sin el permiso expreso por escrito de la Compañía.",
    copyrightContent7:
      "- No debe modificar otro sitio web de manera que dé a entender falsamente que está asociado con los Servicios o la Empresa.",
    copyrightContent8:
      "Respetamos los derechos de propiedad intelectual de terceros. Si cree que algún material disponible en el Sitio o a través de él infringe algún derecho de autor que usted posee o controla, por favor, compruébelo inmediatamente.",
    contactUs: "Contáctanos",
    copyrightContent9:
      "Se enviará una copia de su Notificación a la persona que publicó o almacenó el material mencionado en ella. Tenga en cuenta que, de acuerdo con la legislación aplicable, podría ser responsable de daños y perjuicios si realiza declaraciones falsas en una Notificación. Por lo tanto, si no está seguro de que el material que se encuentra en el Sitio o enlaza a él infrinja sus derechos de autor, le recomendamos contactar primero con un abogado.",
    prohibitedActivitiesIntro:
      "No podrá acceder ni utilizar el Sitio para ningún otro fin que no sea el previsto. El Sitio no podrá utilizarse para fines comerciales, salvo aquellos que estén específicamente respaldados o aprobados por nosotros.",
    prohibitedActivitiesUserAgreement:
      "Como usuario del Sitio, usted acepta no:",
    prohibitedActivity1:
      "- Recuperar sistemáticamente datos u otro contenido del Sitio para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.",
    prohibitedActivity2:
      "- Engañar, defraudar o confundirnos a nosotros o a otros usuarios, especialmente en cualquier intento de obtener información confidencial de la cuenta, como las contraseñas de los usuarios.",
    prohibitedActivity3:
      "- Eludir, deshabilitar o interferir de otro modo con las características relacionadas con la seguridad del Sitio, incluidas las características que impiden o restringen el uso o la copia de cualquier Contenido o imponen limitaciones en el uso del Sitio y/o el Contenido incluido en el mismo.",
    prohibitedActivity4:
      "- Menospreciar, manchar o de cualquier otra manera perjudicar, en nuestra opinión, a nosotros y/o al Sitio.",
    prohibitedActivity5:
      "- Utilizar cualquier información obtenida del Sitio para acosar, abusar o dañar a otra persona.",
    prohibitedActivity6:
      "- Hacer un uso indebido de nuestros servicios de soporte o enviar informes falsos de abuso o mala conducta.",
    prohibitedActivity7:
      "- Utilizar el Sitio de una manera incompatible con las leyes o reglamentaciones aplicables.",
    prohibitedActivity8:
      "- Participar en la creación de marcos o enlaces no autorizados al Sitio.",
    prohibitedActivity9:
      "- Cargar o transmitir (o intentar cargar o transmitir) virus, caballos de Troya u otro material, incluido el uso excesivo de letras mayúsculas y el spam (publicación continua de texto repetitivo), que interfiera con el uso y disfrute ininterrumpido del Sitio por parte de cualquier parte o que modifique, deteriore, interrumpa, altere o interfiera con el uso, las características, las funciones, el funcionamiento o el mantenimiento del Sitio.",
    prohibitedActivity10:
      "- Participar en cualquier uso automatizado del sistema, como utilizar scripts para enviar comentarios o mensajes, o utilizar cualquier minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
    prohibitedActivity11:
      "- Eliminar el aviso de derechos de autor u otros derechos de propiedad de cualquier Contenido.",
    prohibitedActivity12:
      "- Intentar suplantar a otro usuario o persona o utilizar el nombre de usuario de otro usuario.",
    prohibitedActivity13:
      '- Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo pasivo o activo de recopilación o transmisión de información, incluidos, entre otros, formatos de intercambio de gráficos claros ("gifs"), píxeles 1×1, errores web, cookies u otros dispositivos similares (a veces denominados "spyware" o "mecanismos de recopilación pasiva" o "pcms").',
    prohibitedActivity14:
      "- Interferir, interrumpir o crear una carga indebida en el Sitio o las redes o servicios conectados al Sitio.",
    prohibitedActivity15:
      "- Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en proporcionarle cualquier parte del Sitio.",
    prohibitedActivity16:
      "- Intentar eludir cualquier medida del Sitio diseñada para impedir o restringir el acceso al Sitio o a cualquier parte del Sitio.",
    prohibitedActivity17:
      "- Copiar o adaptar el software del Sitio, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código.",
    prohibitedActivity18:
      "- Salvo que lo permita la ley aplicable, descifrar, descompilar, desensamblar o aplicar ingeniería inversa a ningún software que comprenda o forme parte de algún modo del Sitio.",
    prohibitedActivity19:
      "- Salvo que sea el resultado del uso estándar de un motor de búsqueda o de un navegador de Internet, utilizar, lanzar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier araña, robot, utilidad de trampa, raspador o lector fuera de línea que acceda al Sitio, o utilizar o lanzar cualquier script u otro software no autorizado.",
    prohibitedActivity20:
      "- Utilizar un agente de compras o agente de compras para realizar compras en el Sitio.",
    prohibitedActivity21:
      "- Hacer cualquier uso no autorizado del Sitio, incluyendo la recopilación de nombres de usuario y/o direcciones de correo electrónico de los usuarios por medios electrónicos o de otro tipo con el fin de enviar correo electrónico no solicitado, o crear cuentas de usuario por medios automatizados o bajo falsas pretensiones.",
    prohibitedActivity22:
      "- Utilizar el Sitio como parte de cualquier esfuerzo para competir con nosotros o, de otro modo, utilizar el Sitio y/o el Contenido para cualquier esfuerzo generador de ingresos o empresa comercial.",
    prohibitedActivity23:
      "- Utilizar el Sitio para publicitar u ofrecer vender bienes y servicios.",
    prohibitedActivity24:
      "- Vender o transferir de cualquier otra forma su perfil.",
    featuresContent1:
      "Diseñamos nuestros Servicios con esmero, basándonos en nuestra propia experiencia y en la de nuestros clientes, quienes comparten su tiempo y comentarios. Sin embargo, no existe un servicio que satisfaga a todos. No garantizamos que nuestros Servicios satisfagan sus necesidades o expectativas específicas.",
    featuresContent2:
      "También probamos todas nuestras funciones antes de lanzarlas. Como con cualquier software, nuestros Servicios inevitablemente presentan errores. Hacemos un seguimiento de los errores que nos informan y los solucionamos, especialmente los relacionados con la seguridad o la privacidad. No todos los errores informados se solucionarán y no garantizamos que nuestros Servicios estén completamente libres de errores.",
    correctionsContent1:
      "El Sitio puede contener información que contenga errores tipográficos, inexactitudes u omisiones, incluyendo descripciones, precios, disponibilidad y otra información diversa. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, así como de modificar o actualizar la información del Sitio en cualquier momento, sin previo aviso.",
    correctionsContent2:
      "No podemos garantizar la disponibilidad del Sitio en todo momento. Podríamos experimentar problemas de hardware, software u otros problemas, o necesitar realizar tareas de mantenimiento relacionadas con el Sitio, lo que podría provocar interrupciones, retrasos o errores. Nos reservamos el derecho a cambiar, revisar, actualizar, suspender, interrumpir o modificar el Sitio en cualquier momento y por cualquier motivo sin previo aviso. Usted acepta que no nos responsabilizamos de ninguna pérdida, daño o inconveniente causado por su imposibilidad de acceder o usar el Sitio durante cualquier periodo de inactividad o interrupción del mismo. Nada de lo dispuesto en estos Términos de Servicio se interpretará como una obligación para nosotros de mantener y dar soporte al Sitio ni de proporcionar correcciones, actualizaciones o actualizaciones relacionadas con el mismo.",
    userDataContent:
      "Mantendremos ciertos datos que transmita al Sitio para gestionar su rendimiento, así como los datos relacionados con su uso del mismo. Si bien realizamos copias de seguridad periódicas de los datos, usted es el único responsable de todos los datos que transmita o que se relacionen con cualquier actividad que haya realizado en el Sitio. Acepta que no nos responsabilizaremos de la pérdida o corrupción de dichos datos y, por la presente, renuncia a cualquier acción contra nosotros derivada de dicha pérdida o corrupción.",
    privacyPolicyContent1:
      "Nos preocupamos por la privacidad y seguridad de los datos. Por favor, revise nuestra",
    privacyPolicy: "política de privacidad",
    privacyPolicyContent2:
      "Al usar el Sitio, usted acepta nuestra Política de Privacidad, la cual se incorpora a estos Términos de Servicio. Tenga en cuenta que el Sitio está alojado en Estados Unidos. Si accede al Sitio desde cualquier otra región del mundo con leyes u otros requisitos que rijan la recopilación, el uso o la divulgación de datos personales que difieran de las leyes aplicables en Estados Unidos, al continuar usando el Sitio, estará transfiriendo sus datos a Estados Unidos y acepta que sus datos se transfieran y procesen allí.",
    liabilityIntro:
      "Mencionamos la responsabilidad a lo largo de estos Términos, pero para ponerlo todo en una sección:",
    liabilityContent:
      "Usted entiende y acepta expresamente que la Compañía no será responsable, en derecho o en equidad, ante usted o cualquier tercero por ningún daño directo, indirecto, incidental, lucro cesante, especial, consecuente, punitivo o ejemplar, incluyendo, pero no limitado a, daños por pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles (incluso si la Compañía ha sido informada de la posibilidad de tales daños), resultantes de: (1) el uso o la imposibilidad de usar los Servicios; (2) errores, equivocaciones o inexactitudes de contenido y materiales; (3) lesiones personales o daños a la propiedad, de cualquier naturaleza, resultantes de su acceso y uso del sitio; (4) el costo de adquisición de bienes y servicios sustitutos resultantes de cualquier bien, dato, información o servicio comprado u obtenido o mensajes recibidos o transacciones realizadas a través o desde los Servicios; (5) cualquier acceso no autorizado o uso de nuestros servidores seguros y/o cualquier información personal y/o información financiera almacenada en los mismos; (6) cualquier interrupción o cese de la transmisión hacia o desde el sitio; (7) cualquier error, virus, troyano o similares que puedan transmitirse hacia o a través del sitio por un tercero, y/o; (8) cualquier error u omisión en cualquier contenido y material o por cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso de cualquier contenido publicado, transmitido o puesto a disposición de otra manera a través del sitio; (9) declaraciones o conducta de cualquier tercero en el servicio; (10) o cualquier otro asunto relacionado con estos Términos de Servicio o los Servicios, ya sea como incumplimiento de contrato, agravio (incluida la negligencia, ya sea activa o pasiva), o cualquier otra teoría de responsabilidad.",
    miscellaneousContent:
      "Estos Términos de Servicio y cualquier política o norma operativa publicada por nosotros en el Sitio o con respecto al Sitio constituyen el acuerdo y entendimiento completo entre usted y nosotros. Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos de Servicio no constituirá una renuncia a dicho derecho o disposición. Estos Términos de Servicio operan en la máxima medida permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a terceros en cualquier momento. No seremos responsables de ninguna pérdida, daño, demora u omisión causada por cualquier causa fuera de nuestro control razonable. Si alguna disposición o parte de una disposición de estos Términos de Servicio se determina ilegal, nula o inaplicable, dicha disposición o parte de la disposición se considerará separable de estos Términos de Servicio y no afectará la validez y aplicabilidad de las disposiciones restantes. No se crea ninguna relación de empresa conjunta, sociedad, empleo o agencia entre usted y nosotros como resultado de estos Términos de Servicio o del uso del Sitio. Usted acepta que estos Términos de Servicio no se interpretarán en nuestra contra por el hecho de haberlos redactado. Por la presente, usted renuncia a todas y cada una de las defensas que pueda tener basadas en la forma electrónica de estos Términos de Servicio y la falta de firma de las partes para ejecutar estos Términos de Servicio.",
    contactUsContent1:
      "Si tiene alguna pregunta sobre cualquiera de los Términos de Servicio, por favor",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Características",
    UnlimitedTranscription: "Transcripción Ilimitada",
    BulkUpload: "Carga Masiva",
    Accuracy: "96% de Precisión",
    Pricing: "Precios",
    UseCases: "Casos de Uso",
    AllUseCases: "Todos los Casos de Uso",
    Podcasters: "Podcasters",
    Journalists: "Periodistas",
    ContentCreators: "Creadores de Contenido",
    Researchers: "Investigadores",
    BusinessTeams: "Equipos Empresariales",
    Educators: "Educadores",
    Resources: "Recursos",
    YouTubetoMP4: "YouTube a MP4",
    StartFreeTrial: "Pruébalo Gratis"
  },
  Footer: {
    des: "El primer servicio de transcripción por IA realmente ilimitado del mundo. Sin límites, sin restricciones, solo libertad para crear.",
    Features: "Características",
    UseCases: "Casos de Uso",
    Company: "Empresa",
    featureMenus: ["Transcripción Ilimitada", "Carga Masiva", "96% de Precisión"],
    useCaseMenus: [
          "Todos los Casos de Uso",
          "Podcasters",
          "Periodistas",
          "Creadores de contenido",
          "Investigadores",
          "Equipos empresariales",
          "Educadores"
        ],
    companyMenus: [
          "Acerca de",
          "Precios",
          "Privacidad",
          "Términos"
        ]
  },
  Index: {
    Hero: {
      badge: 'No Más "Shrinkflation" - Realmente Ilimitado',
      h1: "Deja de Pagar por Límites:",
      gradient: "Transcripción con IA Realmente Ilimitada",
      subtitle: "Nuestra IA transcribe video y convierte audio a texto, procesando 50 archivos a la vez sin límites mensuales. Transcripción que realmente escala contigo.",
      FreeTrial: "Pruébalo Gratis - Sin Tarjeta",
      HowWorks: "Ver Cómo Funciona",
      Unlimited: "Cargas de Archivos Ilimitadas",
      NoCap: "Sin Límite de Minutos Mensuales",
      Hour: "Archivos de 10 Horas Soportados",
      ExploreUseCases: "Explorar Casos de Uso"
    },
    Stats: {
      monthlyMinutes: "Minutos Mensuales",
      fileUploads: "Cargas de Archivos",
      batchProcessing: "Procesamiento por Lotes",
      maxFileLength: "Duración Máxima de Archivo"
    },
    FeaturesGrid: {
      try_now: "Pruébalo Ahora",
      no_signup: "Sin Registro Requerido",
      experience_unltd: "Experimenta una transcripción realmente ilimitada",
      upload_50: "Sube hasta 50 archivos a la vez, aquí mismo.",
      no_limits: "Avanzado",
      no_surprises: "Transcripción con IA",
      transparency: "No Más Límites Ocultos, No Más Sorpresas - Mientras otros reducen tus minutos en silencio o esconden límites en letra pequeña, creemos en la transparencia radical",
      feat_unltd: "Realmente Ilimitado",
      feat_unltd_desc: 'Sin "política de uso justo" enterrada en los términos. Sin límites de almacenamiento disfrazados de "ilimitado". Sube todo tu archivo, transcribe todo para todas tus necesidades de transcripción de audio. Lo decimos en serio.',
      feat_bulk: "Libertad de Carga Masiva",
      feat_bulk_desc: '¿Cansado de "3 importaciones de por vida" o "10 archivos al mes"? Sube 50 archivos a la vez, tantas veces como necesites. Perfecto para procesar acumulados.',
      feat_batch: "Procesamiento por Lotes",
      feat_batch_desc: "Procesa toda tu temporada de podcast en una noche. Sube 50 entrevistas a la vez. Deja que nuestra IA trabaje mientras duermes. Despierta con transcripciones completas.",
      feat_accuracy: "96% de Precisión",
      feat_accuracy_desc: "Nuestra IA líder en la industria transcribe audio con puntuación inteligente, diarización de hasta 20 hablantes, y maneja acentos y términos técnicos sin errores.",
      feat_langs: "100+ Idiomas",
      feat_langs_desc: "Transcribe video y audio en 100+ idiomas, traduce a 249+. Sin cargos adicionales por diferentes idiomas. Contenido global, un precio simple.",
      feat_pro: "Características Profesionales",
      feat_pro_desc: "Marcas de tiempo a nivel de palabra para posicionamiento preciso de audio/video, identificación exacta de hablantes incluso durante cambios rápidos de conversación, y texto perfectamente formateado con párrafos, oraciones y puntuación para fácil lectura.",
        features: "Características"
    },
    UseCases: {
      built_for: "Masivo",
      "heavy_users": "Transcripción de Audio y Video",
      "join_users": 'Diseñado para Usuarios Intensivos Como Tú - Únete a YouTubers, creadores de contenido y podcasters que cambiaron de servicios con "shrinkflation"',
      "podcasters": {
        "title": "Podcasters",
        "des": "Sube todo tu catálogo atrasado. Crea notas del programa para cada episodio. No más elegir qué episodios transcribir."
      },
      "content_creators": {
        "title": "Creadores de Contenido",
        "des": "Convierte tu biblioteca de video en texto buscable usando nuestro servicio para transcribir archivos de video automáticamente. Genera subtítulos para todo. Sin contar minutos, solo creando."
      },
      "journalists": {
        "title": "Periodistas",
        "des": 'Sube todas tus entrevistas a la vez. No más obstáculos de "10 archivos al mes" cuando hay plazos. Procesa todo.'
      },
      researchers: {
        title: "Investigadores",
        des: "Transcribe horas de grupos focales y entrevistas. Sube todo tu estudio de una vez. Obtén identificación precisa de hablantes."
      },
      business_teams: {
        title: "Equipos Empresariales",
        des: "Graba cada llamada sin preocuparte por límites. Obtén información de IA en todas las conversaciones, no solo en unas pocas."
      },
      educators: {
        title: "Educadores",
        des: "Transcribe series completas de conferencias. Haz que todo el contenido sea accesible. No más elegir entre cursos por límites de minutos."
      }
    },
    Testimonials: {
      title: "Amado por",
      highlighted_users: "Más de 50,000 usuarios",
      subtitle: "Descubre por qué los profesionales eligen NeverCap sobre alternativas limitadas",
      Mike: {
        "text": "¡Increíble, esto realmente funciona! Llevo 3 años haciendo un podcast y transcribiendo todo manualmente como un idiota. Subí 6 episodios a la vez y separó perfectamente a mi coanfitrión y a mí. ¿El episodio en la cafetería que pensé que estaba arruinado? Transcripción cristalina. Nunca volveré a escribir esto yo mismo.",
        "author": "Mike Rodriguez",
        "role": "Anfitrión de Podcast"
      },
      Sarah: {
        "text": "Enseño en línea y necesitaba subtítulos para mis videos. Probé otras 3 herramientas que tenían límites raros o tardaban una eternidad. Esta simplemente... ¿funciona? Subí mi clase en español y obtuve subtítulos perfectos en 2 minutos. Mis estudiantes con problemas auditivos están muy felices. ¡Ojalá lo hubiera encontrado antes!",
        "author": "Sarah Chen",
        "role": "Profesora en Línea"
      },
      Jessica: {
        "text": "Lo he usado para mis entrevistas y es increíble lo preciso que es. Tuve una entrevista de 2 horas en inglés y español entrecortado y lo transcribió todo correctamente, incluso las marcas de tiempo. Solía pagarle $200/mes a mi pasante solo para transcribir. Esto literalmente me ahorra dinero cada mes.",
        "author": "Jessica Park",
        "role": "Periodista Independiente"
      }
    },
    PricingPreview: {
      "title": "Precios Transparentes",
      "highlighted_text": "Sin Límites Ocultos",
      "subtitle": "Elige tu plan. Sin asteriscos, sin letra pequeña, sin sorpresas"
    },
    FAQSection: {
      "title": "Preguntas",
      "titleHighlight": "Frecuentes",
      "questions": [
            {
              "q": "Transcripción por IA",
              "question": "¿Qué es la transcripción por IA y cómo funciona?",
              "answer": "La transcripción por IA es el proceso de convertir automáticamente audio a texto usando inteligencia artificial avanzada. En NeverCap, simplemente subes tus archivos y nuestra IA transcribe el contenido con hasta un 96% de precisión. Nuestro servicio está diseñado para transcribir archivos de video (como MP4, MOV) y audio (como MP3, WAV) en texto legible y editable, con etiquetas de hablantes y marcas de tiempo."
            },
            {
              "q": "unlimited_policy",
              "question": "¿Es realmente ilimitado? ¿Cuál es el truco?",
              "answer": "¡Sí, es verdaderamente ilimitado! Sin límites mensuales de minutos, sin cargos adicionales. Los únicos límites son técnicos: los archivos individuales pueden durar hasta 10 horas o pesar 5GB, y puedes procesar 50 archivos a la vez. Pero puedes subir tantos lotes como quieras, todo el mes."
            },
            {
              "q": "accuracy",
              "question": "¿Qué tan precisa es la transcripción?",
              "answer": "Garantizamos un 96% de precisión para audio claro. Nuestra IA está entrenada con millones de horas de contenido diverso y maneja acentos, términos técnicos y múltiples hablantes excepcionalmente bien. Para audio difícil, nuestras funciones de mejora inteligente ayudan a mejorar los resultados."
            },
            {
              "q": "languages",
              "question": "¿Qué idiomas admiten?",
              "answer": "Admitimos transcripción en más de 100 idiomas, incluyendo inglés, español, mandarín, hindi, árabe, francés y más. Además, puedes traducir tus transcripciones a 249 idiomas diferentes, ideal para contenido global."
            },
            {
              "q": "speed",
              "question": "¿Qué tan rápida es la transcripción?",
              "answer": "¡Rápido como un rayo! Un archivo de audio de 1 hora suele procesarse en menos de 5 minutos. Con el procesamiento por lotes, puedes subir 50 archivos simultáneamente y procesarlos en paralelo. La mayoría de los usuarios encuentran toda su biblioteca transcrita al despertar."
            },
            {
              "q": "cancellation",
              "question": "¿Puedo cancelar en cualquier momento?",
              "answer": "¡Absolutamente! Sin contratos, sin cargos por cancelación. Puedes mejorar, reducir o cancelar tu suscripción en cualquier momento desde tu panel. Si cancelas, conservarás el acceso hasta el final de tu período de facturación."
            },
            {
              "q": "security",
              "question": "¿Mis datos están seguros?",
              "answer": "Tu seguridad es nuestra prioridad. Estamos certificados SOC 2, usamos cifrado de 256 bits para todos los datos y nunca usamos tu contenido para entrenar nuestros modelos. Puedes eliminar tus archivos en cualquier momento, y los borramos automáticamente después de 30 días. Cumplimos con GDPR y CCPA."
            },
            {
              "q": "export_formats",
              "question": "¿Qué formatos de exportación están disponibles?",
              "answer": "Descarga tus transcripciones en el formato que necesites: PDF, Word (DOCX), Excel, CSV, subtítulos SRT, texto plano (TXT) y subtítulos VTT. Perfecto para cualquier flujo de trabajo."
            },
            {
              "q": "file_formats",
              "question": "¿Qué archivos de audio y video puedo subir?",
              "answer": "Admitimos prácticamente todos los formatos de audio y video que encontrarás: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV y más. Si puedes reproducirlo, podemos transcribirlo."
            }
          ]
    },
    CTASection: {
      "title": "¿Listo para liberarte de los límites?",
      "subtitle": "Únete a más de 50,000 profesionales que han cambiado a una transcripción verdaderamente ilimitada",
      "button": "Prueba NeverCap Gratis",
      "disclaimer": "No se requiere tarjeta de crédito para el Plan Gratis • Actualiza en cualquier momento para acceso ilimitado"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'No más "Shrinkflation"',
      heroTitleLine1: "Verdaderamente Ilimitado",
      heroTitleLine2: "Transcripción por IA",
      heroSubtitle: "Mientras Trint te limita a 50 horas y Otter a 10 archivos por mes, nosotros cumplimos lo que prometemos: transcripción ilimitada sin límites ocultos.",
      primaryCta: "Pruébalo Gratis - Sin Tarjeta",
      secondaryCta: "Descubre la Verdad",
      comparisonBadLabel: "Lo Que Hacen Otros",
      comparisonBadTitle: "Límites Ocultos Por Todas Partes",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Ilimitado" = Límite de 50 horas/mes',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 importaciones de por vida (gratis), 10/mes (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "Límite de 800 minutos de almacenamiento",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Máx. 30 horas/mes",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Oculto en términos y condiciones",
      comparisonGoodLabel: "Lo Que Hacemos",
      comparisonGoodTitle: "Realmente Ilimitado",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Sin límites de minutos mensuales",
      comparisonGoodItem1Text: "nunca",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Subida ilimitada de archivos",
      comparisonGoodItem2Text: "siempre",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Sin límites de almacenamiento",
      comparisonGoodItem3Text: "en absoluto",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Subida por lotes de 50 archivos",
      comparisonGoodItem4Text: "cuando quieras",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Política transparente",
      comparisonGoodItem5Text: "desde el principio",
      feature1Label: "Sin Límites",
      feature1TitlePart1: "¿Transcribir 1,000 Horas?",
      feature1TitlePart2: "Mismo Precio.",
      feature1Description: "Deja de contar minutos. Deja de vigilar límites. Ya sea que transcribas 10 horas o 10,000 al mes, pagas la misma tarifa plana. Sin cargos extra. Sin facturas sorpresa.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Sin trucos de política de "uso justo"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Sin ralentización después de X horas",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Sin ansiedad a fin de mes",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Horas Mensuales",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Cargos por Exceso",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Subir en Cualquier Momento",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparente",
      feature2Label: "Libertad a Granel",
      feature2TitlePart1: "Sube Tu",
      feature2TitlePart2: "Archivo Completo",
      feature2Description: "Otter te da 3 importaciones de por vida en gratis, 10 al mes en Pro. Nosotros te damos ilimitadas. Sube tu backlog de podcasts, todas tus entrevistas, años de grabaciones. Sin restricciones.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 archivos por lote",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Archivos de 10 horas soportados",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Procesa mientras duermes",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 importaciones de por vida",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 archivos/mes",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Límite de 50 horas/mes",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Realmente Ilimitado ✓",
      feature3Label: "Prueba Social",
      feature3TitlePart1: "Usuarios Están",
      feature3TitlePart2: "Cambiando Diariamente",
      feature3Description: '"Pago $100/año por Otter y me limitan a 10 importaciones de archivos al mes. ¡En cuanto haya una alternativa con importaciones ilimitadas, me voy!" - Usuario real de Reddit',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000+ usuarios cambiaron",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'De la "shrinkflation" de Otter',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Sin vuelta atrás",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Usuarios Felices",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Archivos Procesados",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Precisión",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Sin Cargos Ocultos",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutos/Mes",
      trustBadge2Number: "100+",
      trustBadge2Label: "Idiomas",
      trustBadge3Number: "96%",
      trustBadge3Label: "Precisión",
      trustBadge4Number: "50",
      trustBadge4Label: "Carga por Lotes",
      ctaTitle: "Deja de Pagar por Ilimitado Falso",
      ctaSubtitle: "Únete a miles que cambiaron a transcripción realmente ilimitada",
      finalCta: "Prueba NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Libertad de Carga Masiva",
      heroTitleLine1: "Carga 50 Archivos.",
      heroTitleHighlight: "Procesa Todo.",
      heroSubtitle: "Otter te da 3 importaciones de por vida. TRES. Para toda tu vida. Nosotros te damos cargas ilimitadas, 50 archivos a la vez, cuando lo necesites.",
      primaryCta: "Comenzar Carga Masiva →",
      secondaryCta: "Ver los Límites",
      redditQuote: '"Tengo 3 años de episodios de podcast para transcribir. Otter me dice que tengo 3 importaciones de por vida. TRES. Esto es insultante."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Frustración real de r/podcasting",
      comparisonSectionTitlePart1: "Los",
      comparisonSectionTitleHighlight: "Límites Ridículos",
      comparisonSectionTitlePart2: "Que Imponen",
      comparisonSubtitle: "Cómo los competidores restringen tu capacidad de procesar contenido",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importaciones de por vida",
      limitCard1DescriptionLine2: "(Sí, para TODA tu vida)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Archivos por mes",
      limitCard2DescriptionLine2: "(Plan de $100/año)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Archivo a la vez",
      limitCard3DescriptionLine2: "(Carga secuencial)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Cargas ilimitadas",
      limitCard4DescriptionLine2: "50 archivos por lote",
      feature1Label: "Poder por Lotes",
      feature1TitlePart1: "Procesa Tu",
      feature1TitleHighlight: "Archivo Completo",
      feature1TitlePart2: "Durante la Noche",
      feature1Description: 'Carga 50 archivos antes de dormir. Despierta con transcripciones completas. Sin colas, sin esperas, sin mensajes de "actualiza tu plan". Solo puro poder de procesamiento al alcance de tu mano.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 cargas simultáneas",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Procesamiento en paralelo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Archivos de 10 horas soportados",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Máximo 5GB por archivo",
      uploadAnimationText1: "50 Archivos",
      uploadAnimationText2: "Soltar y Procesar",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 archivos más...",
      feature2Label: "Velocidad",
      feature2TitlePart1: "Desde la carga hasta",
      feature2TitleHighlight: "Listo en horas",
      feature2Description: "Nuestra infraestructura de procesamiento paralelo significa que tus 50 archivos no esperan en cola. Todos se transcriben simultáneamente. Lo que solía tomar semanas ahora toma horas.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Archivo de 1 hora: 5 minutos",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 archivos: procesados en paralelo",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notificación por correo al terminar",
      timelineStep1Icon: "1",
      timelineStep1Title: "Cargar",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Procesando",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magia de IA",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Completo",
      timelineStep4Time: "< 2 horas",
      feature3Label: "Libertad",
      feature3TitlePart1: "Sin colas.",
      feature3TitleHighlight: "Sin esperas.",
      feature3TitlePart2: "Sin límites.",
      feature3Description: 'Mientras otros te hacen esperar en líneas virtuales o pagar por "procesamiento prioritario", nosotros tratamos cada carga con urgencia. Tu contenido importa y no debe esperar.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Sin niveles de prioridad",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Misma velocidad para todos",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Carga en cualquier momento, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Siempre listo",
      feature3VisualSubtext: "Carga cuando te llegue la inspiración",
      useCasesTitlePart1: "Perfecto para",
      useCasesTitleHighlight: "Grandes cargadores",
      useCasesSubtitle: "Escenarios reales donde la carga masiva salva el día",
      useCase1Title: "Archivos de podcast",
      useCase1Description: "Carga 3 años de episodios de una vez. Crea transcripciones para todo tu catálogo. Genera contenido SEO para cada episodio.",
      useCase2Title: "Creación de cursos",
      useCase2Description: "Procesa todos tus videos de clase simultáneamente. Crea transcripciones accesibles para estudiantes. Construye materiales de curso buscables.",
      useCase3Title: "Atraso de entrevistas",
      useCase3Description: "Limpia esa montaña de entrevistas sin transcribir. Procesa semanas de investigación en horas. Cumple tus plazos sin pánico.",
      useCase4Title: "Biblioteca de YouTube",
      useCase4Description: "Genera subtítulos para todo tu canal. Crea publicaciones de blog a partir de videos. Mejora el SEO en todos tus videos.",
      useCase5Title: "Archivos de reuniones",
      useCase5Description: "Sube meses de reuniones grabadas. Crea notas de reuniones buscables. Nunca pierdas decisiones importantes otra vez.",
      useCase6Title: "Datos de Investigación",
      useCase6Description: "Procesa grupos focales en masa. Transcribe todas las entrevistas de participantes. Analiza datos cualitativos eficientemente.",
      ctaTitle: "Deja de Pedir Más Subidas",
      ctaSubtitle: "Obtén procesamiento ilimitado en masa que realmente funciona",
      finalCta: "Sube 50 Archivos Ahora →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Precisión Líder en la Industria",
      heroTitleLine1: "96% de Precisión.",
      heroTitleHighlight: "Cada Palabra Importa.",
      heroSubtitle: "Precisión líder en la industria en 12 idiomas principales. Marcas de tiempo a nivel de palabra para sincronización perfecta. Identificación inteligente de hablantes que maneja conversaciones rápidas. Formato profesional realmente legible.",
      primaryCta: "Prueba Nuestra Precisión →",
      secondaryCta: "Ver Idiomas",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Precisión en",
      statCard1DescriptionLine2: "12 Idiomas Principales",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Precisión con",
      statCard2DescriptionLine2: "Acentos y Dialectos",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Nivel de Palabra",
      statCard3DescriptionLine2: "Precisión de Marcas de Tiempo",
      languageSectionTitlePart1: "96% de Precisión",
      languageSubtitle: "Transcripción de grado profesional para contenido global",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Inglés",
      languageCard1Accuracy: "96% de Precisión",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Español",
      languageCard2Accuracy: "96% de Precisión",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarín",
      languageCard3Accuracy: "96% de Precisión",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Francés",
      languageCard4Accuracy: "96% de Precisión",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Alemán",
      languageCard5Accuracy: "96% de Precisión",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japonés",
      languageCard6Accuracy: "96% de Precisión",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Coreano",
      languageCard7Accuracy: "96% de Precisión",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugués",
      languageCard8Accuracy: "96% de Precisión",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Ruso",
      languageCard9Accuracy: "96% de precisión",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiano",
      languageCard10Accuracy: "96% de precisión",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Neerlandés",
      languageCard11Accuracy: "96% de precisión",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Árabe",
      languageCard12Accuracy: "96% de precisión",
      moreLanguagesText: "+ 88 idiomas más compatibles con 95%+ de precisión",
      feature1Label: "Precisión",
      feature1TitlePart1: "Nivel de palabra",
      feature1TitleHighlight: "Marcas de tiempo",
      feature1Description: "Cada palabra está perfectamente sincronizada con su posición en el audio. Crea transcripciones clicables, genera subtítulos precisos o salta a momentos exactos en tus grabaciones. Precisión de 100ms en la que confían los profesionales.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precisión de 100ms en marcas de tiempo",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfecto para edición de video",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Transcripciones interactivas clicables",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Subtítulos con precisión de fotograma",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Altavoz 1",
      transcriptLine1Text: "Bienvenidos al episodio de hoy del podcast.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Altavoz 2",
      transcriptLine2Text: "¡Gracias por invitarme al programa!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Altavoz 1",
      transcriptLine3Text: "Vamos a profundizar en nuestro tema principal...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Altavoz 2",
      transcriptLine4Text: "Absolutamente, estoy emocionado de discutir esto.",
      feature2Label: "IA inteligente",
      feature2TitlePart1: "Maneja",
      feature2TitleHighlight: "Conversaciones rápidas",
      feature2Description: "Nuestra IA identifica con precisión a los hablantes incluso durante discursos superpuestos, interrupciones y conversaciones rápidas de ida y vuelta. Perfecto para entrevistas, podcasts y reuniones donde los hablantes intervienen con frecuencia.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifica hasta 20 hablantes",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Maneja interrupciones perfectamente",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Funciona con discursos superpuestos",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Mantiene precisión en conversaciones cruzadas",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Hablantes identificados",
      feature2VisualSubtext: "Incluso en conversaciones rápidas",
      feature3Label: "Legibilidad",
      feature3TitlePart1: "Perfectamente",
      feature3TitleHighlight: "Texto formateado",
      feature3Description: "No más bloques de texto. Nuestra IA agrega automáticamente párrafos, oraciones y puntuación exactamente donde corresponde. ¿El resultado? Transcripciones realmente agradables de leer y fáciles de escanear.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Saltos de párrafo inteligentes",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Puntuación precisa",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Mayúsculas correctas",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Salida limpia y escaneable",
      formattingTitle: "Antes y después",
      formattingBeforeLabel: "❌ Otros:",
      formattingBeforeText: "así que hoy vamos a hablar de las nuevas funciones en las que hemos estado trabajando creo que te van a gustar mucho los usuarios las han solicitado durante mucho tiempo y finalmente las terminamos",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Así que hoy vamos a hablar de las nuevas funciones en las que hemos estado trabajando. Creo que te van a gustar mucho. Los usuarios las han solicitado durante mucho tiempo y finalmente las terminamos.",
      comparisonSubtitle: "Precisión",
      comparisonSectionTitle: "Comparación",
      comparisonDes: "Mira cómo nos comparamos con la competencia",
      tableHeader1: "Función",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Precisión (audio claro)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Marcas de tiempo a nivel de palabra",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identificación de hablantes",
      tableRow3NeverCap: "20 hablantes",
      tableRow3Otter: "16 hablantes",
      tableRow3Descript: "10 hablantes",
      tableRow3Rev: "✕",
      tableRow4Feature: "Maneja diálogos superpuestos",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limitado",
      tableRow4Descript: "Limitado",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formateo inteligente",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Básico",
      tableRow6Feature: "12 idiomas con 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Experimenta 96% de precisión",
      ctaSubtitle: "Sube tu audio más desafiante y nota la diferencia",
      finalCta: "Prueba Nuestra Precisión Ahora →",
        languageSectionTitlePart2: "en 12 Idiomas Principales"
    }
  },
  Pricing: {
    Hero: {
      "title": "Precios Sencillos y Transparentes",
      "highlighted_text": "Sin Límites Ocultos",
      "description": "Elige el plan que se ajuste a tus necesidades. Cambia cuando quieras. Sin contratos, sin sorpresas."
    },
    Cards: {
      "title": "Precios Sencillos y Transparentes.",
      "highlighted_text": "Sin Límites Ocultos.",
      "description": "Elige el plan que se ajuste a tus necesidades. Cambia cuando quieras. Sin contratos, sin sorpresas.",
      "plans": [
            {
              "name": "Gratis",
              "price": "$0",
              "period": "mes",
              "discount": "Ideal para probar nuestro servicio",
              "limits": {
                "title": "Límites diarios",
                "items": [
                  "3 archivos/día (≈90 min total/día)",
                  "Hasta 30 min por archivo (≤250 MB)",
                  "Subir 1 archivo a la vez",
                  "Cola de prioridad estándar"
                ]
              },
              "features": {
                "title": "Características",
                "items": [
                  "100+ idiomas",
                  "Etiquetas de hablantes",
                  "Traducción",
                  "Todos los formatos de exportación"
                ]
              },
              "cta": {
                "text": "Empieza gratis. Sin tarjeta.",
                "button": "Plan actual"
              }
            },
            {
              "name": "Pro Mensual",
              "price": "$17.99",
              "period": "mes",
              "discount": "$9.99 el primer mes",
              "limits": {
                "title": "Sin límite mensual",
                "items": [
                  "Minutos ilimitados",
                  "Hasta 10 horas / 5 GB por archivo",
                  "Subir 50 archivos a la vez",
                  "Cola prioritaria"
                ]
              },
              "features": {
                "title": "Todo en Gratis, más",
                "items": [
                  "Marcas de tiempo por palabra",
                  "Identificación avanzada de hablantes",
                  "Párrafos y puntuación formateados",
                  "Soporte prioritario"
                ]
              },
              "cta": {
                "text": "Minutos ilimitados. Velocidad prioritaria. Subidas múltiples.",
                "button": "Ir a Pro"
              },
              "badge": "Más popular"
            },
            {
              "name": "Pro Anual",
              "price": "$8.99",
              "period": "mes",
              "discount": "Facturación anual $107.88",
              "limits": {
                "title": "Igual que Pro Mensual",
                "items": [
                  "Minutos ilimitados",
                  "Hasta 10 horas / 5 GB por archivo",
                  "Subir 50 archivos a la vez",
                  "Cola prioritaria"
                ]
              },
              "features": {
                "title": "Todo en Gratis, más",
                "items": [
                  "Marcas de tiempo por palabra",
                  "Identificación avanzada de hablantes",
                  "Párrafos y puntuación formateados",
                  "Soporte prioritario"
                ]
              },
              "cta": {
                "text": "Minutos ilimitados. Velocidad prioritaria. Subidas múltiples.",
                "button": "Ir a Pro"
              },
              "badge": "Mejor Valor - "
            }
          ],
      "disclaimer": '"Ilimitado" significa sin límite mensual ni ralentización artificial. Se aplica uso justo para automatización abusiva o redistribución.'
    },
    ComparisonTable: {
      "header": {
        "title": "Comparar",
        "highlighted_text": "Todas las funciones",
        "subtitle": "Ve exactamente lo que obtienes con cada plan. Sin limitaciones ocultas."
      },
      "plans": [
              "Funciones",
              "Gratis",
              "Pro Mensual",
              "Pro Anual"
            ],
      "features": [
            {
              "name": "Precio",
              "values": [
                "$0/mes",
                {
                  "main": "$17.99/mes",
                  "note": "$9.99 primer mes"
                },
                {
                  "main": "$8.99/mes",
                  "note": "Factura $107.88/año"
                }
              ]
            },
            {
              "name": "Minutos mensuales",
              "values": ["~2,700 (90/día)", "Ilimitados", "Ilimitados"]
            },
            {
              "name": "Duración máxima de archivo",
              "values": ["30 minutos", "10 horas", "10 horas"]
            },
            {
              "name": "Tamaño máximo de archivo",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Subidas masivas",
              "values": ["1 archivo", "50 archivos", "50 archivos"]
            },
            {
              "name": "Velocidad de procesamiento",
              "values": ["Estándar", "Prioritaria", "Prioritaria"]
            },
            {
              "name": "Idiomas soportados",
              "values": ["100+ idiomas", "100+ idiomas", "100+ idiomas"]
            },
            {
              "name": "Traducción",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Identificación de hablantes",
              "values": ["Básico", "Avanzado (20 hablantes)", "Avanzado (20 hablantes)"]
            },
            {
              "name": "Marcas de tiempo por palabra",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Párrafos formateados",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formatos de exportación",
              "values": ["Todos los formatos", "Todos los formatos", "Todos los formatos"]
            },
            {
              "name": "Soporte",
              "values": ["Correo electrónico", "Correo electrónico prioritario", "Correo electrónico prioritario"]
            },
            {
              "name": "Retención de datos",
              "values": ["30 días", "Para siempre", "Para siempre"]
            }
          ]
    },
    FAQ: {
      "title": "Preguntas",
      "titleHighligt": "Frecuentes",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "¿Es realmente ilimitado?",
              "answer": "¡Sí! Los planes Pro no tienen límites mensuales. Los únicos límites son técnicos: duración máxima de archivo de 10 horas y tamaño de archivo de 5GB. Puedes procesar tantos archivos como necesites."
            },
            {
              "q": "plan_change",
              "question": "¿Puedo cambiar de plan en cualquier momento?",
              "answer": "¡Absolutamente! Puedes cancelar tu suscripción en cualquier momento desde tu panel. Actualiza o reduce tu plan cuando lo necesites."
            },
            {
              "q": "payment_methods",
              "question": "¿Qué métodos de pago aceptan?",
              "answer": "Aceptamos todas las tarjetas de crédito, débito y PayPal para pagos seguros y sin complicaciones."
            },
            {
              "q": "free_trial",
              "question": "¿Hay una prueba gratuita para Pro?",
              "answer": "¡Sí! Prueba Pro gratis por 7 días, sin necesidad de tarjeta de crédito. Además, obtén un 45% de descuento en tu primer mes al suscribirte."
            },
            {
              "q": "file_retention",
              "question": "¿Cuánto tiempo guardan mis archivos?",
              "answer": "Plan gratuito: 30 días. Planes Pro: ¡Para siempre! Tus transcripciones siempre estarán disponibles en tu cuenta."
            },
            {
              "q": "data_security",
              "question": "¿Qué hay de la seguridad de los datos?",
              "answer": "Estamos certificados SOC 2 y usamos encriptación de 256 bits. Nunca usamos tu contenido para entrenar nuestros modelos. Tus datos son tuyos."
            }
          ]
    },
    CTA: {
      "title": "¿Listo para ser ilimitado?",
      "subtitle": "Únete a más de 50,000 profesionales que transcriben sin límites",
      "button": "Prueba NeverCap Gratis →",
      "disclaimer": "Sin tarjeta de crédito • Empieza a transcribir en segundos"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Creado para",
      heavyUsers: "Usuarios Intensivos",
      whoActuallyNeed: "Que Realmente Necesitan Ilimitado",
      heroSubtitle: "Desde podcasters con años de atraso hasta investigadores con cientos de entrevistas. Descubre cómo los profesionales usan NeverCap para liberarse de los límites de carga y los topes de minutos.",
      podcasters: {
        title: "Podcasters",
        pain: '"Deja de elegir qué episodios merecen transcripciones"',
        description: "Sube todo tu archivo de podcast de una vez. Genera notas del programa, mejora el SEO y reutiliza contenido sin contar minutos.",
        benefits: {
          benefit1: "Sube todos los episodios, no solo 3",
          benefit2: "Genera notas del programa optimizadas para SEO",
          benefit3: "Crea archivos buscables",
          benefit4: "Reutiliza como contenido de blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episodios"
          },
          stat2: {
            number: "200hrs",
            label: "Ahorradas"
          },
          stat3: {
            number: "3x",
            label: "Tráfico SEO"
          }
        }
      },
      journalists: {
        title: "Periodistas & Escritores",
        pain: '"La presión de la fecha límite encuentra restricciones de subida"',
        description: "Sube en lote todas las entrevistas antes del plazo. Busca en las transcripciones al instante y nunca pierdas una cita crucial.",
        benefits: {
          benefit1: "Subida en lote antes de plazos",
          benefit2: "Busca todas las entrevistas a la vez",
          benefit3: "Citas precisas con marcas de tiempo",
          benefit4: "Maneja acentos y idiomas"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Entrevistas/mes"
          },
          stat2: {
            number: "96%",
            label: "Precisión"
          },
          stat3: {
            number: "5min",
            label: "Por hora"
          }
        }
      },
      contentCreators: {
        title: "Creadores de Contenido",
        pain: '"La accesibilidad no debería ser costosa"',
        description: "Subtitula todo tu canal de YouTube. Genera subtítulos en múltiples idiomas y mejora tu SEO de video al instante.",
        benefits: {
          benefit1: "Subtitula todos los videos a la vez",
          benefit2: "249 traducciones de idiomas",
          benefit3: "Archivos SRT listos para YouTube",
          benefit4: "Mejora el ranking SEO de video"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videos"
          },
          stat2: {
            number: "100+",
            label: "Idiomas"
          },
          stat3: {
            number: "249",
            label: "Traducciones"
          }
        }
      },
      researchers: {
        title: "Investigadores & Académicos",
        pain: '"Los datos cualitativos no deberían hacer cola"',
        description: "Procesa estudios de investigación completos de una vez. Maneja grupos focales, entrevistas y paneles con identificación perfecta de hablantes.",
        benefits: {
          benefit1: "Procesa grupos focales en masa",
          benefit2: "Identificación de 20 hablantes",
          benefit3: "Exporta a software de análisis",
          benefit4: "Seguridad compatible con GDPR"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Estudio"
          },
          stat2: {
            number: "96%",
            label: "Precisión de grupo"
          },
          stat3: {
            number: "RGPD",
            label: "Conforme"
          }
        }
      },
      businessTeams: {
        title: "Equipos empresariales",
        pain: '"Las grabaciones de reuniones deberían ser sencillas"',
        description: "Graba reuniones directamente o sube archivos de audio para transcripción instantánea. Crea archivos buscables de conversaciones ilimitadas y nunca pierdas discusiones importantes.",
        benefits: {
          benefit1: "Grabación y transcripción directa de audio",
          benefit2: "Grabaciones de reuniones ilimitadas",
          benefit3: "Archivo de reuniones buscable",
          benefit4: "Sube archivos de audio al instante"
        },
        stats: {
          stat1: {
            number: "En vivo",
            label: "Grabación"
          },
          stat2: {
            number: "Instantáneo",
            label: "Subir"
          },
          stat3: {
            number: "20+",
            label: "Oradores"
          }
        }
      },
      educators: {
        title: "Educadores",
        pain: '"Los videos de YouTube necesitan transcripción instantánea"',
        description: "Simplemente pega enlaces de YouTube para obtener transcripciones instantáneas y subtítulos generados automáticamente. Convierte cualquier video educativo en contenido accesible y buscable.",
        benefits: {
          benefit1: "Transcripción directa de enlaces de YouTube",
          benefit2: "Generación automática de subtítulos",
          benefit3: "Transcripción de cursos completos",
          benefit4: "Archivos de clases buscables"
        },
        stats: {
          stat1: {
            number: "1-Clic",
            label: "Pegar en YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Subtítulos"
          },
          stat3: {
            number: "100+",
            label: "Idiomas"
          }
        }
      },
      quotes: {
        title: "Usuarios reales,",
        titleHighlight: "Libertad real",
        subtitle: "Escucha a profesionales que superaron límites artificiales",
        testimonials: {
          mike: {
            textBefore: '"Tenía',
            highlight: "3 años de episodios",
            textAfter: 'sin transcribir. Otter me pedía elegir 3. TRES. NeverCap me permitió subir los 150 episodios en un fin de semana."',
            name: "Mike Rodríguez",
            role: "Anfitrión de podcast"
          },
          jessica: {
            textBefore: '"Como periodista independiente, no puedo pagar los',
            highlight: "$100/mes",
            textAfter: 'de Trint, pero tampoco puedo trabajar con el límite de 10 archivos mensuales de Otter. NeverCap salvó mi carrera."',
            name: "Jessica Park",
            role: "Periodista independiente"
          },
          sarah: {
            textBefore: '"Nuestro equipo de investigación tenía',
            highlight: "200 horas",
            textAfter: 'de grabaciones de grupos focales. Procesamos todo en un fin de semana en lugar de racionar minutos mensuales."',
            name: "Dra. Sarah Chen",
            role: "Investigadora principal"
          },
          carlos: {
            textBefore: '"Creo contenido educativo en español. NeverCap transcribe perfectamente y',
            highlight: "traduce al inglés",
            textAfter: 'para mayor alcance. Sin límites, solo crecimiento."',
            name: "Carlos Martínez",
            role: "Educador de YouTube"
          }
        }
      },
      industries: {
        title: "Confiado en",
        titleHighlight: "Industrias",
        subtitle: "Profesionales en todas partes están cambiando a lo verdaderamente ilimitado",
        list: {
          media: "Medios y Publicaciones",
          education: "Educación",
          healthcare: "Cuidado de la Salud",
          technology: "Tecnología",
          finance: "Finanzas",
          legal: "Legal"
        }
      },
      cta: {
        title: "Tu Caso de Uso También Necesita Ilimitado",
        subtitle: "Únete a 50,000+ profesionales que dejaron de contar minutos y empezaron a crear",
        button: "Comienza Tu Viaje Ilimitado →"
      }
    },
    Podcasters: {
      badge: "Creado para Podcasters",
      heroTitle: "Transcribe Tu",
      heroTitleHighlight: "Archivo Completo de Podcasts",
      heroSubtitle: "Sube todo tu catálogo anterior. Crea notas del programa para cada episodio. Sin tener que elegir qué episodios transcribir.",
      ctaPrimary: "Comienza a Transcribir Gratis",
      ctaSecondary: "Ver Cómo Funciona",
      trustBadge1: "10,000+ Podcasters",
      trustBadge2: "Episodios Ilimitados",
      trustBadge3: "Transcripciones Listas para SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Episodios/Mes"
        },
        stat2: {
          number: "50",
          label: "Carga por Lotes"
        },
        stat3: {
          number: "10hrs",
          label: "Duración Máxima de Episodio"
        },
        stat4: {
          number: "96%",
          label: "Precisión"
        }
      },
      problemTitle: "El",
      problemTitleHighlight: "Problema de Transcripción de Podcasts",
      problemSubtitle: 'Otros servicios te hacen elegir qué episodios "valen la pena" transcribir',
      problems: {
        problem1: {
          title: "Los Límites de Carga Matan los Archivos",
          description: "Otter te da 3 importaciones de por vida en gratis, 10 por mes en Pro. ¿Cómo transcribes 3 años de episodios?"
        },
        problem2: {
          title: "Oportunidades SEO Perdidas",
          description: "Cada episodio no transcrito es tráfico SEO perdido. Pero Descript te limita a 30 horas/mes como máximo."
        },
        problem3: {
          title: "Los Costos Explotan con el Crecimiento",
          description: "A medida que crece tu podcast, los costos de transcripción se disparan. Tarifas excedentes de $2/hora hacen imposible escalar."
        }
      },
      solutionTitle: "La",
      solutionTitleHighlight: "Solución NeverCap",
      solutionDescription: "Transcripción verdaderamente ilimitada. Sube todo tu archivo. Transcribe cada nuevo episodio. Genera notas del programa a escala. Sin topes, sin límites, solo crecimiento.",
      workflowTitle: "Tu Flujo de Trabajo de Podcast,",
      workflowTitleHighlight: "Simplificado",
      workflowSubtitle: "Desde la grabación hasta notas del programa optimizadas para SEO en minutos",
      workflow: {
        step1: {
          title: "Subir Episodios",
          description: "Carga 50 episodios a la vez. MP3, MP4, WAV - los manejamos todos."
        },
        step2: {
          title: "IA Transcribe",
          description: "96% de precisión con identificación de hablantes. Perfecto para entrevistas."
        },
        step3: {
          title: "Formato Inteligente",
          description: "La IA agrega párrafos, oraciones y puntuación automáticamente."
        },
        step4: {
          title: "Publicar y Posicionar",
          description: "Exporta a tu sitio web. Observa cómo crece tu tráfico SEO."
        }
      },
      featuresTitle: "Características que los Podcasters",
      featuresTitleHighlight: "Realmente Necesitan",
      featuresSubtitle: "Creado por podcasters, para podcasters",
      features: {
        feature1: {
          title: "Detección de Múltiples Hablantes",
          description: "Identifica y etiqueta automáticamente hasta 20 hablantes. Perfecto para debates, entrevistas y programas con coanfitriones."
        },
        feature2: {
          title: "Capítulos con Marcas de Tiempo",
          description: "Genera marcas de tiempo clicables para descripciones de YouTube. Permite que los oyentes salten a sus segmentos favoritos al instante."
        },
        feature3: {
          title: "Formateo Inteligente",
          description: "Agrega automáticamente párrafos, oraciones y puntuación. Obtén transcripciones limpias y legibles. Ahorra horas en postproducción."
        },
        feature4: {
          title: "Optimización SEO",
          description: "Transcripciones formateadas para motores de búsqueda. Aumenta la visibilidad de tu podcast y llega a nuevas audiencias."
        },
        feature5: {
          title: "100+ Idiomas",
          description: "Transcribe en cualquier idioma. Traduce a 249+ idiomas. Llega a audiencias globales sin esfuerzo."
        },
        feature6: {
          title: "Procesamiento por Lotes",
          description: "Sube 50 episodios antes de dormir. Despierta con transcripciones completas. Procesa todo tu archivo durante la noche."
        }
      },
      testimonialsTitle: "Podcasters que Hicieron",
      testimonialsTitleHighlight: "El Cambio",
      testimonialsSubtitle: "Historias reales de podcasters reales",
      testimonials: {
        mike: {
          text: '"Llevo 3 años haciendo un podcast y transcribiendo todo manualmente como un idiota. Subí 6 episodios a la vez y separó perfectamente a mi coanfitrión y a mí. ¿El episodio en la cafetería que pensé que estaba arruinado? Transcripción cristalina. Nunca volveré a escribir esto yo mismo."',
          name: "Mike Rodriguez",
          role: 'Anfitrión del podcast "The Daily Grind"'
        },
        sarah: {
          text: '"Otter me limitaba a 10 importaciones de archivos al mes. Tengo 150 episodios pendientes. NeverCap me permitió subir todo en 3 lotes. Mi tráfico orgánico ha aumentado un 300% desde que agregué transcripciones a episodios antiguos. Esto literalmente se paga solo."',
          name: "Sarah Chen",
          role: 'Creadora de "Tech Talks Today"'
        }
      },
      comparisonTitle: "Por qué los Podcasters Eligen",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Mira cómo nos comparamos con la competencia",
      comparison: {
        headers: {
          feature: "Característica",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Límite Mensual de Episodios",
            nevercap: "Ilimitado",
            otter: "~13 episodios (1200 min)",
            descript: "~30 episodios (30 hrs)"
          },
          uploadLimit: {
            feature: "Límite de Subida de Archivos",
            nevercap: "Ilimitado",
            otter: "10 por mes",
            descript: "1 a la vez"
          },
          batchProcessing: {
            feature: "Procesamiento por Lotes",
            nevercap: "50 archivos",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Duración Máxima del Episodio",
            nevercap: "10 horas",
            otter: "90 minutos",
            descript: "Ilimitado"
          },
          speakerDetection: {
            feature: "Detección de Hablantes",
            nevercap: "20 hablantes",
            otter: "16 hablantes",
            descript: "10 hablantes"
          },
          smartFormatting: {
            feature: "Formato Inteligente",
            nevercap: "✓ Perfecto",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Precio",
            nevercap: "$17.99/mes",
            otter: "$16.99/mes",
            descript: "$30/mes"
          }
        }
      },
      ctaTitle: "Empieza a Transcribir Cada Episodio",
      ctaSubtitle: "Únete a 10,000+ podcasters que nunca se preocupan por límites",
      ctaButton: "Sube Tus Primeros 50 Episodios Gratis →",
      ctaDisclaimer: "Sin tarjeta de crédito • Procesa episodios ilimitados • Cancela cuando quieras"
    },
    Journalists: {
      hero: {
        badge: "Para Periodistas y Escritores",
        title: "Transcribe Cada Entrevista.",
        titleHighlight: "Nunca Pierdas una Cita.",
        subtitle: "Deja de elegir qué entrevistas merecen transcripción. Sube todas las grabaciones a la vez, busca en todo instantáneamente y cumple tus plazos sin la ansiedad de subida.",
        ctaPrimary: "Empieza con Subidas Ilimitadas →",
        ctaSecondary: "Ver Cómo Funciona",
        stats: {
          uploads: {
            number: "∞",
            label: "Subidas de Archivos"
          },
          accuracy: {
            number: "96%",
            label: "Precisión"
          },
          speed: {
            number: "5min",
            label: "Por Hora"
          }
        },
        dashboard: {
          title: "Cola de Entrevistas",
          status: "• Todo el Procesamiento",
          interviews: {
            cityCouncil: {
              title: "Reunión del Consejo Municipal",
              duration: "2h 15min • Subiendo...",
              action: "Procesando"
            },
            expertInterview: {
              title: "Entrevista con Experto - Dr. Chen",
              duration: "45min • Transcribiendo...",
              action: "96% Completado"
            },
            pressConference: {
              title: "Conferencia de Prensa",
              duration: "1h 30min • Listo",
              action: "Ver →"
            },
            phoneInterview: {
              title: "Entrevista Telefónica - Fuente",
              duration: "35min • Listo",
              action: "Ver →"
            }
          }
        }
      },
      problem: {
        title: "El",
        titleHighlight: "Problema de Transcripción para Periodistas",
        subtitle: 'Otros servicios te hacen elegir qué entrevistas "valen la pena" transcribir',
        problems: {
          uploadLimits: {
            title: "Los Límites de Subida Matan las Investigaciones",
            description: "Otter te da 10 importaciones de archivos al mes en Pro. ¿Cómo transcribes 3 semanas de entrevistas de investigación?"
          },
          missingQuotes: {
            title: "Citas Cruciales Perdidas",
            description: "Cada entrevista no transcrita podría contener la cita clave de la historia. Pero Trint te limita a 50 horas/mes como máximo."
          },
          costExplosion: {
            title: "Los Costos Se Disparan con los Plazos",
            description: "A medida que profundizas en tu investigación, los costos de transcripción se disparan. Las tarifas excedentes de $100/mes hacen imposible las noticias de última hora."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "Solución NeverCap",
          description: "Transcripción realmente ilimitada. Sube toda tu investigación. Transcribe cada entrevista. Busca todas las citas al instante. Sin límites, solo periodismo."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Mejor Software de Transcripción de Entrevistas",
        titleSuffix: "para Periodistas",
        subtitle: "Ventajas reales que importan cuando los plazos son ajustados y la precisión lo es todo",
        solutions: {
          unlimitedUploads: {
            label: "Volumen Ilimitado",
            title: "Volumen Ilimitado para Todas Tus Entrevistas",
            description: "A diferencia del software con límites de minutos, puedes transcribir cada entrevista, desde una charla rápida hasta una discusión de varias horas. Nunca te quedes sin créditos ante un plazo.",
            points: {
              simultaneousUpload: "Sin límites mensuales de minutos",
              noLimits: "Soporte para entrevistas de 10 horas",
              processWhileWrite: "Procesa investigaciones completas de una vez",
              longRecordings: "Grabaciones de 10 horas soportadas"
            },
            visual: {
              number: "∞",
              label: "Sin Límites. Nunca."
            }
          },
          instantSearch: {
            label: "Velocidad Relámpago",
            title: "Velocidad que Iguala Tu Ciclo de Noticias",
            description: "Recibe tu transcripción en minutos, no en días. Publica historias más rápido que nunca. Nuestra IA procesa horas de audio mientras tomas un café.",
            points: {
              searchAll: "5 minutos para entrevistas de 1 hora",
              wordTimestamps: "Procesamiento prioritario para historias urgentes",
              jumpToMoments: "Seguimiento en tiempo real"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Por Hora de Audio",
              results: {
                mayorInterview: '"...nuestra política climática transformará..."',
                expertPanel: '"...la declaración de política muestra claramente..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Precisión Lista para Citar",
            title: "Precisión que Puedes Citar",
            description: "Nuestra IA ofrece transcripciones altamente precisas, garantizando que las citas que publiques sean exactas y confiables. Transcripción profesional en la que los editores confían.",
            points: {
              accuracyGuarantee: "Garantía de 96% de precisión",
              handlesAccents: "Maneja terminología técnica",
              smartPunctuation: "Identificación perfecta de hablantes"
            },
            visual: {
              accuracy: "96%",
              label: "Precisión Lista para Publicar",
              transcript: {
                speaker1: '"La investigación reveló discrepancias significativas en los informes financieros".',
                speaker2: "¿Puede explicarnos con más detalle esas discrepancias específicas?"
              }
            }
          },
            ironclad: {
                  label: "Protección de Fuentes",
                  title: "Protección de Fuentes Inquebrantable",
                  description: "Ofrecemos funciones de seguridad robustas para proteger tus datos sensibles de entrevistas y fuentes confidenciales. Cifrado de nivel bancario mantiene seguras tus investigaciones.",
                  points: {
                    accuracyGuarantee: "Cifrado de extremo a extremo",
                    handlesAccents: "Opciones de eliminación automática de archivos",
                    smartPunctuation: "Cumple con GDPR y privacidad"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Máxima Seguridad"
                  }
                }
        }
      },
      features: {
        title: "Todo lo que un",
        titleHighlight: "Periodista Necesita",
        subtitle: "Herramientas profesionales que respetan tu flujo de trabajo",
        featuresList: {
          languages: {
            title: "100+ Idiomas",
            description: "Entrevista fuentes globales en 12 idiomas principales con 96% de precisión."
          },
          exportFormats: {
            title: "Formatos de Exportación",
            description: "Word, PDF, SRT, TXT. Compatible con cualquier flujo de trabajo."
          },
          sourceProtection: {
            title: "Protección de Fuentes",
            description: "Cifrado de nivel bancario. Tus fuentes permanecen confidenciales."
          },
          timestamps: {
            title: "Marcas de tiempo",
            description: "Haz clic en cualquier cita para saltar al momento exacto del audio."
          },
          teamSharing: {
            title: "Compartir en equipo",
            description: "Colabora con editores. Comparte transcripciones de forma segura."
          },
          mobileReady: {
            title: "Listo para móvil",
            description: "Sube desde el teléfono. Revisa transcripciones en cualquier lugar."
          },
          smartFormatting: {
            title: "Formato inteligente",
            description: "Párrafos y puntuación automáticos para transcripciones legibles."
          },
          batchProcessing: {
            title: "Procesamiento por lotes",
            description: "Sube 50 archivos a la vez. Procesa durante la noche mientras duermes."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: '"Tuve 3 años de entrevistas sin transcribir por límites de subida. NeverCap me permitió procesar todo en un fin de semana. Un cambio radical."',
          name: "Jessica Park",
          role: "Periodista independiente, ex usuaria de Otter"
        }
      },
      cta: {
        title: "Comenzar a transcribir",
        titleHighlight: "Sin límites",
        subtitle: "Únete a miles de periodistas que dejaron de contar subidas y se enfocaron en historias",
        ctaPrimary: "Prueba ilimitado gratis →",
        ctaSecondary: "Ver precios"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Para creadores de contenido",
        title: "Transcribe videos de YouTube,",
        titleHighlight: "Sin límites",
        titleSuffix: "1",
        subtitle: "Ya sea que necesites transcribir un video de YouTube, transcribir un video de TikTok para reutilizar, o descubrir cómo transcribir un video de Facebook a texto, nuestra plataforma lo maneja todo sin problemas. Genera subtítulos en 100+ idiomas sin límites mensuales, solo pura libertad creativa.",
        ctaPrimary: "Comenzar subtitulado ilimitado →",
        ctaSecondary: "Ver cómo funciona",
        stats: {
          videos: {
            number: "∞",
            label: "Videos/Mes"
          },
          languages: {
            number: "100+",
            label: "Idiomas"
          },
          accuracy: {
            number: "96%",
            label: "Precisión"
          },
          platforms: {
            number: "10+",
            label: "Plataformas"
          }
        }
      },
      platforms: {
        title: "Obtén y transcribe desde cualquier plataforma",
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
          titleMax: "Transcribe videos desde",
          titleMaxHighlight: "Cualquier plataforma"
    },
      features: {
        title: "Todo lo que necesitas para",
        titleHighlight: "Escalar contenido",
        subtitle: "Herramientas profesionales sin límites profesionales",
        oneClickImport: {
          label: "Importar con un clic",
          title: "Transcribe videos de YouTube, TikTok &",
          titleHighlight: "Instagram pegando un enlace",
          description: "Nuestra herramienta simplifica cómo transcribes contenido de video. Para transcribir un video de Instagram, solo pega el enlace. Para transcribir un video de Vimeo a texto, haz lo mismo. Procesa el historial completo de tu canal en un fin de semana.",
          points: {
            directYoutube: "Transcripción directa de enlaces de YouTube",
            multiplePlatforms: "Obtener de 10+ plataformas",
            batchPlaylists: "Procesar listas de reproducción completas por lotes",
            autoSync: "Sincronización automática con tus canales"
          },
          demo: {
            instruction: "Pega la URL de tu video:",
            url: "https://youtube.com/watch?v=...",
            status: "Obteniendo y transcribiendo..."
          }
        },
        globalReach: {
          label: "Alcance global",
          title: "100+ idiomas.",
          titleHighlight: "Sin límites.",
          description: "Llega a audiencias globales con traducción automática a 100+ idiomas. Genera subtítulos en múltiples idiomas simultáneamente. Sin cargos adicionales, sin límites mensuales en traducciones.",
          points: {
            highAccuracy: "96% de precisión en 12 idiomas principales",
            unlimitedTranslations: "Traducciones ilimitadas incluidas",
            multicultural: "Perfecto para contenido multicultural",
            autoDetect: "Detección automática del idioma de origen"
          },
          visual: {
            number: "100+",
            title: "Idiomas admitidos",
            subtitle: "Traduce una vez, llega a todos"
          }
        },
        flexibleExport: {
          label: "Exportación flexible",
          title: "Cada formato",
          titleHighlight: "Que necesitas",
          description: "Exporta en el formato que funcione para tu flujo de trabajo. Desde archivos SRT para YouTube hasta VTT para reproductores web, o documentos editables para guiones. Todas las exportaciones son ilimitadas, todas incluidas en cada plan.",
          points: {
            videoFormats: "SRT y VTT para plataformas de video",
            editingFormats: "DOCX y PDF para editar",
            dataAnalysis: "CSV para análisis de datos",
            simpleScripts: "TXT para guiones simples"
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
        title: "Desde la carga hasta",
        titleHighlight: "Publicado",
        titleSuffix: "en minutos",
        subtitle: "La forma más rápida de subtitular toda tu biblioteca de contenido",
        steps: {
          pasteLinks: {
            title: "Pegar enlaces",
            description: "Coloca enlaces de YouTube, TikTok o cualquier video. O sube archivos directamente."
          },
          autoTranscribe: {
            title: "Transcripción automática",
            description: "IA procesa con 96% de precisión. Maneja acentos y múltiples hablantes."
          },
          editTranslate: {
            title: "Editar y traducir",
            description: "Perfecciona tus subtítulos. Traduce a 100+ idiomas al instante."
          },
          exportPublish: {
            title: "Exportar y publicar",
            description: "Descarga en cualquier formato. Sube a tu plataforma. ¡Listo!"
          }
        }
      },
      testimonials: {
        title: "Los creadores están",
        titleHighlight: "cambiando diariamente",
        subtitle: "De planes limitados a libertad ilimitada",
        carlos: {
          textBefore: "Hago contenido educativo en español. NeverCap transcribe perfectamente y",
          textAfter: "para un alcance más amplio. Sin límites, solo crecimiento. Las vistas de mi canal aumentaron 3 veces después de agregar subtítulos multilingües.",
          highlight: "traduce al inglés",
          name: "Carlos Martínez",
          role: "Educador en YouTube • 250K Suscriptores"
        },
        sarah: {
          textBefore: "Descript pedía $30/mes por",
          textAfter: ". Tengo 500+ videos acumulados. NeverCap me permitió procesar todo en un fin de semana. El impulso en SEO de los subtítulos se pagó solo el primer mes.",
          highlight: "30 horas",
          name: "Sarah Lee",
          role: "Vlogger de Estilo de Vida • 180K Suscriptores"
        },
        jake: {
          textBefore: "La",
          textAfter: "función es revolucionaria. Ya no descargo nada. Solo pega, transcribe, listo. Procesar mis clips de podcast para TikTok nunca fue tan fácil.",
          highlight: "obtención directa de YouTube",
          name: "Jake Wilson",
          role: "Anfitrión de Podcast • Creador Top 1%"
        },
        yuki: {
          textBefore: "Creo contenido en 5 idiomas. Otros servicios cobran",
          textAfter: ". NeverCap me da traducciones ilimitadas. Mi audiencia internacional creció un 400% desde que empecé a usar subtítulos nativos adecuados.",
          highlight: "por traducción",
          name: "Yuki Tanaka",
          role: "Creador de Gaming • 500K Suscriptores"
        }
      },
      cta: {
        title: "Todo Tu Canal. Subtitulado. Hoy.",
        subtitle: "Únete a 50,000+ creadores que dejaron de contar minutos y empezaron a crear",
        button: "Comienza Subtitulado Ilimitado →"
      },
        FAQSection: {
              "title": "Tus Preguntas de Transcripción,",
              "titleHighlight": "Respondidas",
              subtitle: "Todo lo que necesitas saber sobre transcribir videos de diferentes plataformas",
              "questions": [
                    {
                      "question": "P: ¿Cómo transcribo un video de YouTube con NeverCap?",
                      "answer": "Es simple. Encuentra el video de YouTube que deseas transcribir, copia su URL y pégala en nuestra app. Nuestra IA obtendrá el video y te dará una transcripción completa en minutos."
                    },
                    {
                      "question": "P: ¿Cuál es la mejor forma de transcribir un video de Facebook a texto?",
                      "answer": "La forma más fácil es usar un enlace directo. Copia la URL del video de Facebook y nuestra plataforma hará el resto, convirtiendo el habla en texto con hasta un 96% de precisión, ahorrándote la transcripción manual."
                    },
                    {
                      "question": "P: ¿Puedo transcribir videos de TikTok e Instagram?",
                      "answer": "Absolutamente. Soportamos transcripción para videos de TikTok e Instagram. Es ideal para creadores que quieren reutilizar su contenido en formato corto para posts, artículos o actualizaciones en redes sociales."
                    },
                    {
                      "question": "P: ¿Cómo transcribo un video de Vimeo a texto?",
                      "answer": "Transcribir videos de Vimeo es tan fácil como en otras plataformas. Simplemente copia la URL del video de Vimeo y pégala en NeverCap. Nuestra IA procesará el video y generará una transcripción precisa que puedes descargar en múltiples formatos."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Diseñado para la Excelencia Académica",
      heroTitle1: "Transcribe Cada Entrevista.",
      heroTitle2: "Analiza Todos Tus Datos.",
      heroSubtitle: "Deja de elegir qué grupos focales transcribir. Procesa todos tus datos cualitativos con un 96% de precisión e identificación perfecta de hablantes—incluso con 20 participantes hablando al mismo tiempo.",
      heroCtaPrimary: "Pruébalo Gratis - Sin Tarjeta",
      heroCtaSecondary: "Ver Cómo Funciona",
      statsInterviewHours: "Horas de Entrevista",
      statsAccuracy: "Precisión",
      statsSpeakersId: "ID de Hablantes",
      statsCompliant: "Compatible",
      problemTitle: "El",
      problemSubtitle: 'Otros servicios te hacen elegir qué datos "valen la pena" transcribir',
      problemCard1Title: "Los Límites de Carga Arruinan Estudios",
      problemCard1Desc: "Otter te da 3 importaciones de por vida. ¿Cómo transcribes 200 horas de grupos focales?",
      problemCard2Title: "Faltan Datos Críticos",
      problemCard2Desc: "Cada entrevista no transcrita podría contener descubrimientos clave. Pero Rev cobra $2/minuto como mínimo.",
      problemCard3Title: "El Dinero de Subvenciones Desaparece",
      problemCard3Desc: "A medida que crece tu conjunto de datos, los costos de transcripción se disparan. $500 por grupo focal hace imposible escalar.",
      solutionTitle: "Solución NeverCap",
      solutionDesc: "Transcripción realmente ilimitada. Sube todo tu estudio. Transcribe cada entrevista. Analiza todos tus datos. Sin topes, sin límites, solo investigación.",
      feature1Label: "Sin Límites",
      feature1Title: "Gestionamos su",
      feature1Desc: 'Sube las 200 horas de entrevistas esta noche. Despierta con transcripciones completas y buscables. Sin topes mensuales, sin límites por archivo, sin tonterías de "uso justo".',
      feature1Point1: "Subida por lotes de 50 archivos simultáneamente",
      feature1Point2: "Procesa estudios longitudinales por completo",
      feature1Point3: "Sin límites de almacenamiento en transcripciones",
      feature1Point4: "Exporta a NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Horas Ilimitadas",
      feature1Visual2: "Mismo precio para 10 o 10,000 horas",
      feature2Label: "IA Inteligente",
      feature2Title: "Precisión garantizada",
      feature2Desc: "Nuestra IA rastrea hasta 20 hablantes incluso cuando se interrumpen, hablan al mismo tiempo o intervienen todos a la vez. Cada voz se captura y etiqueta correctamente.",
      feature2Point1: "Identificación de 20 hablantes",
      feature2Point2: "Maneja interferencias e interrupciones",
      feature2Point3: "Etiquetas de hablantes que puedes renombrar",
      feature2Point4: "Marca de tiempo para cada palabra",
      conversationParticipant1: "Participante 1",
      conversationText1: "La principal barrera que enfrentamos es definitivamente el costo del tratamiento...",
      conversationParticipant2: "Participante 2",
      conversationText2: "Absolutamente, pero añadiría que el acceso es—",
      conversationParticipant3: "Participante 3",
      conversationText3: "—perdón por interrumpir, pero el transporte también es importante.",
      conversationText4: "¡Sí! Eso es exactamente lo que iba a decir.",
      conversationParticipant4: "Participante 4",
      conversationText5: "En áreas rurales, son los tres: costo, acceso Y transporte.",
      feature3Label: "Precisión",
      feature3Title: "Confiable",
      feature3Desc: "Maneja jerga técnica, acentos marcados y terminología específica como un profesional. Suficientemente preciso para publicaciones, revisión por pares y tu comité de tesis.",
      feature3Point1: "Terminología médica y científica",
      feature3Point2: "100+ idiomas y dialectos",
      feature3Point3: "Modos literal y de lectura limpia",
      feature3Point4: "Edita y exporta en cualquier formato",
      feature3Visual1: "Precisión de Grado Investigativo",
      feature3Visual2: "Confiado por 50,000+ investigadores",
      feature4Label: "Seguridad",
      feature4Title: "Certificación IRB",
      feature4Desc: "Tus datos de investigación sensibles están protegidos con seguridad empresarial. Cumple con GDPR, opciones listas para HIPAA y auditorías completas para requisitos IRB.",
      feature4Point1: "Cifrado de extremo a extremo",
      feature4Point2: "Cumple con GDPR & CCPA",
      feature4Point3: "Políticas de eliminación automática",
      feature4Point4: "Colaboración segura en equipo",
      useCasesTitle: "Perfecto para",
      useCasesSubtitle: "Desde etnografía hasta ensayos clínicos",
      useCase1Title: "Grupos Focales",
      useCase1Desc: "Maneja 8-20 participantes con habla superpuesta. Identificación perfecta de hablantes incluso en discusiones acaloradas. Exporta directamente a software de análisis cualitativo.",
      useCase2Title: "Entrevistas en Profundidad",
      useCase2Desc: "Procesa cientos de entrevistas individuales simultáneamente. Mantén la coherencia en todo tu conjunto de datos. Busca en todas las transcripciones al instante.",
      useCase3Title: "Investigación Clínica",
      useCase3Desc: "Opciones compatibles con HIPAA para entrevistas con pacientes. Transcripción precisa de terminología médica. Manejo seguro de datos de salud sensibles.",
      useCase4Title: "Estudios Etnográficos",
      useCase4Desc: "Grabaciones en entornos naturales. Maneja ruido de fondo y múltiples hablantes. Compatibilidad con 100+ idiomas y dialectos.",
      useCase5Title: "Proyectos de Historia Oral",
      useCase5Desc: "Preserva archivos completos sin límites. Crea registros históricos buscables. Ideal para estudios longitudinales y generacionales.",
      useCase6Title: "Investigación para Tesis",
      useCase6Desc: "Precios accesibles para estudiantes con todas las funciones. Procesa todo tu conjunto de datos económicamente. Cumple plazos ajustados con procesamiento por lotes.",
      testimonialTitle: "Confiado por",
      testimonialText: "Nuestro equipo de investigación tenía 200 horas de grabaciones de grupos focales de nuestro estudio de salud comunitaria. Otros servicios nos pedían elegir qué sesiones transcribir debido al costo. NeverCap nos permitió procesar todo en un fin de semana. La identificación de 20 hablantes realmente funcionó, incluso en nuestras discusiones más caóticas donde todos hablaban al mismo tiempo. Esta herramienta ha cambiado por completo cómo manejamos los datos cualitativos.",
      testimonialAuthorName: "Dra. Sarah Chen",
      testimonialAuthorRole: "Investigadora Principal, Instituto de Salud Pública",
      ctaTitle: "Deja de Elegir Qué Datos Analizar",
      ctaSubtitle: "Únete a 50,000+ investigadores que transcriben todo",
      ctaButton: "Prueba NeverCap Gratis",
        problemTitle2: "Problema de Transcripción en Investigación",
        title: "La",
        useCasesTitle2: "Cada Método de Investigación",
        testimonialTitle2: "Investigadores Líderes",
        feature1TitleHl: "Proyecto de investigación completo",
        feature1TitlePost: "Servicio integral",
        feature2TitleHl: "Entrevistas grupales",
        feature2TitlePost: "Éxito constante",
        feature3TitleHl: "96% de precisión",
        feature4TitleHl: "Seguridad",
        testimonialText2Hl: "200 horas",
        testimonialText3: "de grabaciones de grupos focales de nuestro estudio de salud comunitario. Otros servicios querían que seleccionáramos qué sesiones transcribir por el costo. NeverCap nos permitió procesar",
        testimonialText4Hl: "todo en un fin de semana",
        testimonialText5: ". La identificación de 20 hablantes realmente funcionó, incluso en nuestras discusiones más caóticas donde todos hablaban al mismo tiempo. Esta herramienta ha",
        testimonialText6Hl: "cambiado completamente",
        testimonialText7: "cómo manejamos datos cualitativos."
    },
    BusinessTeams: {
      heroBadge: "Para Equipos Empresariales",
      heroTitle1: "Grabación de Reuniones",
      heroTitle2: "Hecho Fácil",
      heroSubtitle: "Graba reuniones directamente en tu navegador o sube archivos de audio al instante. Crea archivos buscables de conversaciones ilimitadas. Nunca pierdas discusiones importantes con transcripción realmente ilimitada.",
      heroCtaPrimary: "Comenzar a Grabar Ahora →",
      heroCtaSecondary: "Ver Cómo Funciona",
      recordingStatus: "Grabando...",
      statsMeetingMinutes: "Minutas de Reunión",
      statsLiveRecording: "Grabación",
      statsSpeakerID: "ID de Hablante",
      statsInstantUpload: "Subir & Procesar",
      featuresTitle: "Transcripción para Cada Empresa",
      featuresSubtitle: "Desde grabación en vivo hasta subidas instantáneas, hemos eliminado todos los puntos de fricción",
      feature1Title: "Graba Directamente en tu Navegador",
      feature1Desc: "Sin descargas, sin complementos. Comienza a grabar al instante con un clic. Calidad de audio perfecta, detección automática de hablantes.",
      feature1Benefit1: "Inicio de grabación con un clic",
      feature1Benefit2: "Sin instalación de software",
      feature1Benefit3: "Funciona en cualquier dispositivo",
      feature1Benefit4: "Transcripción en tiempo real",
      feature1Visual1: "Haz Clic & Graba",
      feature1Visual2: "Sin configuración requerida",
      feature2Title: "Sube Cualquier Archivo de Audio al Instante",
      feature2Desc: "¿Tienes grabaciones de Zoom, Teams o tu teléfono? Súbelas al instante. Compatibilidad con todos los formatos principales de audio y video. Procesa múltiples archivos simultáneamente sin esperar.",
      feature2Benefit1: "Compatible con: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Capacidad de subida por lotes",
      feature2Benefit3: "Archivos de 10 horas soportados",
      feature2Benefit4: "Procesa mientras trabajas",
      feature2Visual1: "Arrastra & Suelta Archivos",
      feature3Title: "Diseñado para Colaboración en Equipo",
      feature3Desc: "Comparte transcripciones con tu equipo al instante. Escuchen grabaciones juntos, exporten transcripciones en múltiples formatos y asegúrense de que todos estén alineados con archivos de reuniones buscables.",
      feature3Benefit1: "Comparte transcripciones con cualquiera",
      feature3Benefit2: "Escuchar grabaciones originales",
      feature3Benefit3: "Exportar transcripciones en múltiples formatos",
      feature3Benefit4: "Archivos buscables para todo el equipo",
      feature3Visual1: "Miembros del equipo",
      feature3Visual2: "Colaboración ilimitada",
      feature4Title: "Encuentra cualquier conversación al instante",
      feature4Desc: "Busca en todas tus reuniones a la vez. Encuentra esa decisión crucial del último trimestre o ese requisito del cliente de hace meses. La búsqueda con IA entiende el contexto, no solo palabras clave.",
      feature4Benefit1: "Buscar en todas las reuniones a la vez",
      feature4Benefit2: "La IA entiende el contexto",
      feature4Benefit3: "Filtrar por hablante o fecha",
      feature4SearchPlaceholder: "🔍 Buscar: 'Objetivos de ingresos Q4'",
      feature4SearchResults: "Encontrado en 3 reuniones:",
      feature4Meeting1: "Planificación de ventas - 15 oct",
      feature4Meeting1Text: '"...objetivos para Q4 establecidos en $2M..."',
      feature4Meeting2: "Reunión de directorio - 20 oct",
      feature4Meeting2Text: '"...proyecciones de ingresos Q4..."',
      workflowTitle: "Cómo transcribir una",
      workflowSubtitle: "Un flujo de trabajo fluido que captura cada momento importante",
      workflowStep1Title: "Grabar o subir",
      workflowStep1Desc: "Comienza a grabar en vivo o simplemente descarga la grabación de Zoom, Google Meet o Microsoft Teams",
      workflowStep2Title: "Auto-transcribir",
      workflowStep2Desc: "Nuestra IA transcribirá automáticamente la grabación a texto con un 96% de precisión en minutos",
      workflowStep3Title: "Colaborar",
      workflowStep3Desc: "Compartir, comentar y extraer elementos de acción",
      workflowStep4Title: "Buscar y analizar",
      workflowStep4Desc: "Encuentra insights en todas tus reuniones",
      testimonialsTitle: "Los equipos aman",
      testimonialsSubtitle: "Descubre cómo las empresas transforman su cultura de reuniones",
      testimonial1Text: '"Pasamos de perder detalles cruciales a tener un archivo buscable de cada conversación. La función de grabación directa significa que nunca olvidamos capturar discusiones importantes."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Gerente de Producto, TechCorp",
      testimonial2Text: '"Otter nos limitaba a 10 subidas de archivos al mes. Ahora subimos todas las llamadas con clientes al instante. Un cambio radical para los seguimientos de nuestro equipo de ventas."',
      testimonial2AuthorName: "Sarah Rodríguez",
      testimonial2AuthorRole: "Directora de Ventas, ConsultPro",
      testimonial3Text: '"La capacidad de buscar en meses de reuniones nos salvó durante nuestra auditoría. Encontramos cada decisión y aprobación en segundos."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Deja de perder conversaciones importantes",
      ctaSubtitle: "Únete a miles de equipos que capturan cada reunión con transcripción ilimitada",
      ctaButton: "Comienza a grabar gratis →",
        featuresTitle2: "Reunión",
        workflowTitle2: "Grabación de Zoom a texto",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Para educadores y profesores",
      heroTitle1: "Haz que el aprendizaje",
      heroTitle2: "Sea accesible para todos",
      heroSubtitle: "Simplemente pega enlaces de YouTube para obtener transcripciones instantáneas con subtítulos generados automáticamente. Convierte clases, tutoriales y videos educativos en contenido buscable y accesible para todos los estudiantes.",
      heroCtaPrimary: "Pruébalo gratis - Sin tarjeta",
      heroCtaSecondary: "Ver demo",
      stats1Number: "1-Clic",
      stats1Label: "Transcripción de YouTube",
      stats2Number: "100+",
      stats2Label: "Idiomas Compatibles",
      stats3Number: "∞",
      stats3Label: "Videos Ilimitados",
      stats4Number: "96%",
      stats4Label: "Tasa de Precisión",
      featuresTitle: "Todo lo que los Educadores Necesitan para",
      featuresSubtitle: "Desde clases de YouTube hasta grabaciones, haz que todo tu contenido sea accesible",
      feature1Title: "Enlaces Instantáneos de YouTube y Plataformas",
      feature1Desc: "Solo pega cualquier enlace de video y obtén transcripciones instantáneas. Funciona con YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive y más. Sin descargas, sin esperas.",
      feature1Point1: "Transcripción de enlace directo - sin necesidad de descargas",
      feature1Point2: "Compatibilidad con todas las plataformas principales",
      feature1Point3: "Procesa listas de reproducción completas de una vez",
      feature1Point4: "Funciona con videos privados (con permiso)",
      feature2Title: "Generación Automática de Subtítulos",
      feature2Desc: "Crea subtítulos precisos al instante para todos tus videos educativos. Haz que el contenido sea accesible para estudiantes con discapacidad auditiva, no nativos o quienes prefieren leer.",
      feature2Point1: "Formatos de exportación SRT, VTT y TXT",
      feature2Point2: "Marcas de tiempo por palabra para sincronización perfecta",
      feature2Point3: "Edita y personaliza subtítulos fácilmente",
      feature2Point4: "Sube directamente a YouTube",
      feature2Visual1: "Traducciones de Idioma",
      feature2Visual2: "Haz que tu contenido sea accesible globalmente",
      feature3Title: "Organizar por Cursos y Categorías",
      feature3Desc: "Crea carpetas para organizar tus transcripciones por curso, materia o semestre. Mantén todo tu contenido educativo ordenado y fácil de buscar. Construye una biblioteca completa de materiales accesibles.",
      feature3Point1: "Crea carpetas y subcarpetas ilimitadas",
      feature3Point2: "Etiqueta videos por tema o nivel de dificultad",
      feature3Point3: "Organiza múltiples transcripciones en masa",
      feature3Point4: "Busca en todo tu contenido al instante",
      feature3VisualTitle: "Tu Biblioteca de Cursos",
      feature3Folder1: "Matemáticas 101",
      feature3Folder2: "Clases de Física",
      feature3Folder3: "Videos de Laboratorio de Biología",
      feature3Folder4: "Documentales de Historia",
      feature3Folder5: "Aprendizaje de Idiomas",
      feature4Title: "IA Transcribe Archivo de Audio a Guía de Estudio",
      feature4Desc: "No solo compartas grabaciones. Transcribe automáticamente clases a texto y otros archivos de audio en guías de estudio detalladas, con resúmenes y conceptos clave para una revisión efectiva. Exporta en formatos TXT, DOCX o PDF.",
      feature4Point1: "TXT para edición simple de texto",
      feature4Point2: "DOCX para documentos formateados",
      feature4Point3: "PDF para compartir e imprimir fácilmente",
      feature4Point4: "Exporta múltiples archivos a la vez",
      workflowTitle: "Cómo Funciona:",
      workflowSubtitle: "De enlace de video a transcripción accesible y materiales de estudio en minutos",
      workflowStep1Title: "Sube Tu Clase",
      workflowStep1Desc: "Sube cualquier archivo de audio o video (MP3, MP4, WAV) o pega un enlace de YouTube",
      workflowStep2Title: "Transcripción por IA",
      workflowStep2Desc: "Nuestra IA transcribe el audio, separa hablantes e identifica temas clave",
      workflowStep3Title: "Generar Subtítulos",
      workflowStep3Desc: "Crea automáticamente subtítulos perfectamente sincronizados",
      workflowStep4Title: "Exportar Guía de Estudio",
      workflowStep4Desc: "Descarga el texto, el resumen o expórtalo para crear tu guía de estudio final",
      useCasesTitle: "Perfecto para Cada",
      useCasesSubtitle: "Descubre cómo los educadores usan NeverCap para mejorar el aprendizaje",
      useCase1Title: "Clases Grabadas",
      useCase1Text: "Transcribe semestres completos de clases grabadas. Los estudiantes pueden buscar temas específicos, repasar conceptos clave y nunca perderse información importante.",
      useCase2Title: "Cursos en Línea",
      useCase2Text: "Haz que tus cursos en línea sean accesibles para estudiantes internacionales con traducciones en 100+ idiomas. Aumenta las inscripciones y la satisfacción.",
      useCase3Title: "Materiales de Estudio",
      useCase3Text: "Usa IA para transcribir archivos de audio a guías de estudio desde tutoriales en video y clases. Ideal para estudiantes que prefieren leer o necesitan repasar contenido rápidamente con texto buscable.",
      useCase4Title: "Cumplimiento de Accesibilidad",
      useCase4Text: "Cumple con los requisitos de accesibilidad proporcionando subtítulos y transcripciones para todo el contenido en video. Garantiza acceso equitativo para todos los estudiantes.",
      useCase5Title: "Aula Invertida",
      useCase5Text: "Comparte video clases con transcripciones antes de la clase. Los estudiantes pueden repasar a su propio ritmo y llegar preparados para las discusiones.",
      useCase6Title: "Investigación y Citas",
      useCase6Text: "Ayuda a los estudiantes a citar fuentes de video con precisión usando marcas de tiempo. Perfecto para proyectos de investigación y trabajos académicos.",
      testimonialTitle: "Confiado por",
      testimonialSubtitle: "Descubre por qué profesores de todo el mundo eligen NeverCap",
      testimonialText: '"He estado usando NeverCap para transcribir todo mi canal de YouTube con tutoriales de matemáticas. Lo que solía tomar semanas con otros servicios ahora toma horas. La capacidad de pegar enlaces directamente y obtener transcripciones instantáneas ha transformado cómo creo contenido accesible. ¡Mis estudiantes internacionales especialmente aman los subtítulos en múltiples idiomas!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Profesora de Matemáticas, Educadora en Línea",
      ctaTitle: "Haz que Todo tu Contenido Educativo sea Accesible",
      ctaSubtitle: "Únete a miles de educadores que usan transcripción realmente ilimitada",
      ctaButton: "Prueba NeverCap Gratis",
        featuresTitle2: "Transcripción de Video",
        grid: "Archivo de Audio a Guía de Estudio",
        useCasesTitle2: "Necesidad Educativa",
        testimonialTitle2: "50,000+ Educadores"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Descargar videos de YouTube como MP4",
        "placeholder": "Busca o pega tu enlace de YouTube aquí",
        "clear_icon": "Borrar entrada",
        "Download": "Descargar",
        "loading_text": "Procesando el enlace para descargar. Permanece en la página.",
        "howToDownload": "¿Cómo descargar?",
        "tutorial": "Ver el tutorial"
      },
      part2: {
        "title": "Así es como convertir un video de YouTube en un archivo MP4 descargable en 3 sencillos pasos",
        "steps": [
                {
                  title: "Copiar la URL",
                  content: "Abre tu video de YouTube objetivo, luego copia el enlace de la barra de direcciones de tu navegador."
                },
                {
                  title: "Pegar el enlace",
                  content: "Dirígete a tu herramienta de descarga de videos y pega la URL en su campo de entrada."
                },
                {
                  title: "Descargar el MP4",
                  content: "Una vez procesado, haz clic en el botón de descarga para guardar tu archivo MP4."
                }
              ]
      },
      part3: {
        content: [
                "¿Alguna vez has necesitado ver videos de YouTube sin conexión?",
                "Ya sea que estés viajando en el metro, volando en un avión, estudiando un tutorial crucial, profundizando en contenido para desarrollar habilidades o archivando material de video importante, tener acceso sin conexión confiable es una frustración común. Aquí es donde nuestro descargador destaca.",
                "El descargador te permite convertir videos de YouTube a formato MP4 de manera rápida y sencilla para descargar. Guárdalos en tu dispositivo y míralos cuando quieras.",
                "El proceso es rápido, simple y sin complicaciones. Una vez descargado, disfruta de tus videos favoritos cuando y donde estés, sin necesidad de internet."
              ]
      },
      part4: {
        content: ["Estos son los 5 principales beneficios de descargar", "videos de YouTube como archivos MP4"],
        list: [
                {
                  title: "Ahorra en costos de datos:",
                  content: "Normalmente, ver videos en YouTube consume muchos datos móviles. Al descargarlos para ver sin conexión, puedes evitar estos costos innecesarios."
                },
                {
                  title: "Mira donde sea, cuando sea:",
                  content: "Disfruta de tus videos sin problemas, incluso con conexiones a internet irregulares. Sin más preocupaciones por el búfer."
                },
                {
                  title: "Archivo y preservación fáciles:",
                  content: "Guardar videos como MP4 hace que sea simple crear tu colección personal, especialmente para contenido que consideres valioso o importante."
                },
                {
                  title: "Compartir más fácil:",
                  content: "Compartir un archivo MP4 es mucho más conveniente que enviar un enlace. Puedes enviar el archivo de video directamente a través de aplicaciones como WhatsApp o Instagram, eliminando el paso adicional de abrir YouTube."
                },
                {
                  title: "Visualización instantánea, momentos compartidos:",
                  content: "¿Emocionado por mostrar un video favorito a amigos o familiares cercanos? Con el MP4 descargado, todos pueden verlo juntos sin problemas, sin pausas incómodas esperando a que se cargue."
                }
              ]
      },
      part5: {
        title: "Por qué nuestro descargador destaca",
        cards: [
                {
                  title: "Simplicidad con un clic",
                  content: "Configuración sin esfuerzo y operación intuitiva."
                },
                {
                  title: "Rápido como el rayo, ilimitado",
                  content: "Convierte y descarga a máxima velocidad, sin límites ni restricciones."
                },
                {
                  title: "Conversión al instante",
                  content: "Procesa tus archivos de inmediato, sin esperas."
                },
                {
                  title: "Sin anuncios, sin distracciones",
                  content: "Disfruta de una interfaz limpia sin ventanas emergentes, banners o interrupciones, solo conversión de video sin problemas."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Calidad original garantizada",
                  content: "Tus descargas mantienen la resolución completa del video original para una reproducción perfecta cada vez."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Funciona en cualquier lugar",
                  content: "Totalmente compatible con cualquier navegador, en cualquier dispositivo."
                }
              ]
      },
      part6: {
        title: ["Maximiza tus descargas de videos de YouTube", "Con el descargador"],
        content: [
                "Conversión de YouTube a MP4 sin esfuerzo: Rápida, simple y gratuita.",
                "Ahí es donde destacamos. Nuestra interfaz fácil de usar está diseñada para todos, sin necesidad de conocimientos técnicos. Sin importar tu nivel de experiencia, puedes convertir videos al instante. Sin registro requerido: obtén exactamente lo que necesitas, de inmediato.",
                "Ten la seguridad de que tus MP4 descargados mantienen la calidad y claridad original del video, exactamente como los viste en YouTube.",
                "Funciona donde tú lo hagas. Totalmente compatible con todas las plataformas y dispositivos principales. Ya sea que uses Windows, macOS, Linux, Android o iOS, en un smartphone, tablet o escritorio, puedes descargar videos sin problemas."
              ]
      },
      part7: {
        title: "Preguntas clave sobre descargar videos de YouTube",
        list: [
                {
                  question: "¿Puedo descargar un video de YouTube si tiene derechos de autor?",
                  answer: "Descargar videos de YouTube con derechos de autor sin el permiso del propietario es ilegal."
                },
                {
                  question: "¿Es segura esta herramienta de descarga?",
                  answer: "Sí, es segura y confiable. No requerimos información personal de los usuarios y tomamos medidas fuertes contra virus. Te recordamos que siempre tengas precaución al descargar archivos de internet: evita hacer clic en enlaces sospechosos o descargar archivos cuestionables."
                },
                {
                  question: "¿Qué idiomas admite la descarga de YouTube a MP4?",
                  answer: "Nuestro servicio admite la descarga de videos de YouTube en todos los idiomas populares."
                },
                {
                  question: "¿Qué factores afectan el tiempo que toma descargar un video de YouTube?",
                  answer: "Aunque garantizamos la experiencia de descarga más rápida posible, el tiempo de descarga también se ve afectado por factores como la duración del video y la velocidad de tu conexión a internet."
                },
                {
                  question: "Cuando descargo un video MP4 usando mi smartphone, ¿dónde se guarda?",
                  answer: 'Después de descargar un MP4 en tu smartphone, normalmente lo encontrarás en la carpeta "Descargas" dentro de la aplicación de administrador de archivos de tu dispositivo.'
                },
                {
                  question: "¿Descargar un video de YouTube como MP4 reduce la calidad del video?",
                  answer: "No. Descargar videos de YouTube como MP4 con nuestra herramienta mantiene la calidad original del video. El proceso de conversión preserva la calidad de origen, asegurando que tengas la misma experiencia de visualización que en YouTube."
                }
              ]
      },
        err1: "Error en el formato del enlace de YouTube.",
        err2: "¡Lo sentimos! Actualmente solo trabajamos con enlaces de YouTube. Si necesitas soporte para otros sitios, te mantendremos informado cuando lo agreguemos en el futuro.",
        videoDownload: {
              title: "Descarga videos de YouTube como MP4. Gratis, rápido y sin anuncios.",
              description: "¡Gracias por elegir nuestro servicio! Realmente apreciamos tu confianza y esperamos que haya mejorado tu experiencia. Si pudieras compartir nuestro sitio web con tus amigos, sería de gran ayuda.",
              downloadButton: "Descargar",
              downloadError: "Error de descarga."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Tecnología de IA Líder en la Industria",
      "title": "Acerca de",
      "highlighted_text": "NeverCap",
      "description": "Nuestra misión es proporcionar los servicios de transcripción de audio y video más precisos. Utilizando tecnología de IA líder en la industria, logramos tasas de precisión superiores al 96%. Para algunos idiomas principales, mediante optimización técnica, incluso podemos alcanzar un 99% de precisión."
    },
    Stats: {
      "title": "Nuestro",
      "highlighted_text": "Impacto",
      "subtitle": "Potenciando la comunicación global con tecnología de IA de vanguardia",
      "metrics": [
            {
              "value": "96%+",
              "label": "Tasa de Precisión",
              "description": "Precisión de transcripción líder en la industria con IA avanzada"
            },
            {
              "value": "100+",
              "label": "Idiomas Soportados",
              "description": "Reconocimiento de voz para contenido global"
            },
            {
              "value": "249+",
              "label": "Idiomas de Traducción",
              "description": "Traduce texto transcrito a prácticamente cualquier idioma"
            }
          ]
    },
    Mission: {
      "title": "¿Por qué elegir",
      "highlighted_text": "NeverCap?",
      "subtitle": "Creemos en derribar barreras lingüísticas y hacer que el contenido sea accesible para todos",
      "features": [
            {
              "icon": "🎯",
              "title": "Precisión Inigualable",
              "description": "Nuestros modelos de IA se perfeccionan continuamente para ofrecer tasas de precisión superiores al 96%, con algunos idiomas principales alcanzando hasta un 99% de precisión mediante optimización avanzada."
            },
            {
              "icon": "🌍",
              "title": "Soporte de Idiomas Global",
              "description": "Soporte para más de 100 idiomas en reconocimiento de voz y capacidades de traducción para más de 249 idiomas, haciendo que tu contenido sea verdaderamente global."
            },
            {
              "icon": "⚡",
              "title": "Procesamiento Relámpago",
              "description": "Procesa horas de contenido de audio y video en minutos, no en horas. Nuestra canalización de IA optimizada garantiza que obtengas tus transcripciones rápidamente sin sacrificar calidad."
            },
            {
              "icon": "🔒",
              "title": "Seguridad Empresarial",
              "description": "La seguridad de tus datos es nuestra prioridad. Usamos encriptación estándar de la industria y cumplimos con regulaciones globales de privacidad para mantener tu contenido seguro y confidencial."
            }
          ]
    },
    Company: {
      "title": "Información de la",
      "highlighted_text": "Empresa",
      "subtitle": "Ponte en contacto con nosotros para cualquier pregunta o soporte",
      "details": [
            {
              "label": "Nombre de la Empresa",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Sede Central",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Estados Unidos"]
            },
            {
              "label": "Contáctanos",
              "value": ["Correo electrónico", "Soporte disponible 24/7"]
            }
          ]
    },
    CTA: {
      "title": "¿Listo para Experimentar la Diferencia?",
      "subtitle": "Únete a miles de profesionales que confían en NeverCap para sus necesidades de transcripción",
      "button": "Prueba NeverCap Gratis →",
      "disclaimer": "No se requiere tarjeta de crédito • Comienza a transcribir en segundos"
    }
  },
  Privacy: {
    title: "Política de",
    titleGradient: "Privacidad",
    subtitle: "Aprende cómo recopilamos, usamos y protegemos tu información personal",
    "lastUpdated": "Última actualización: {date}",
    "lastUpdatedDate": "21 de julio de 2025",
    "privacyPolicyTitle": "Política de Privacidad",
    "policyAgreement": "Por favor, lee esta Política de Privacidad cuidadosamente y asegúrate de entenderla. Al usar cualquiera de nuestros Servicios, aceptas esta Política de Privacidad. Si no estás de acuerdo con nuestro uso de tus datos personales conforme a esta Política, debes dejar de usar nuestros Servicios inmediatamente.",
    "policyOverview": "En esta política, explicamos: qué datos recopilamos y por qué; cómo se manejan tus datos; y tus derechos con respecto a tus datos. No vendemos tus datos.",
    "scopeTitle": "1. Alcance de esta Política de Privacidad",
    "scopeDescription": "Esta Política de Privacidad aplica solo a nuestra recopilación y procesamiento de información sobre usuarios de los Servicios. Esta Política de Privacidad no aplica a ningún servicio, sitio web o software operado por terceros que estén vinculados a nosotros (ya sea que nosotros proporcionemos esos enlaces u otros usuarios los compartan) ni aplica a contenido, datos, aplicaciones o materiales de terceros. Te recomendamos que revises las políticas de privacidad de cualquier sitio web o software de terceros antes de proporcionarles cualquier información.",
    "collectionTitle": "2. Qué recopilamos y por qué",
    "collectionPrinciple": "Nuestro principio rector es recopilar solo lo que necesitamos. Esto es lo que significa en la práctica:",
    "identityTitle": "2.1 Identidad y acceso",
    "identityDescription": "Cuando te registras en uno de nuestros productos, solicitamos información de identificación como tu nombre y dirección de correo electrónico. Esto es para proporcionar funcionalidad esencial del producto y para que podamos enviarte actualizaciones del producto y otra información esencial.",
    "billingTitle": "2.2 Información de facturación",
    "billingDescription": "Si te registras en un producto de pago, se te pedirá que proporciones tu información de pago y dirección de facturación. La información de pago se envía directamente a nuestro procesador de pagos y no llega a nuestros servidores.",
    "productInteractionsTitle": "2.3 Interacciones con el producto",
    "productInteractionsDescription": "Almacenamos en nuestros servidores el contenido que subes, recibes o mantienes en tus cuentas de producto. A menos que elimines este contenido, podemos conservarlo mientras tu cuenta esté activa.",
    "websiteInteractionsTitle": "2.4 Interacciones con el sitio web",
    "websiteInteractionsDescription": "Recopilamos información sobre tu actividad de navegación con fines analíticos y estadísticos, como pruebas de tasa de conversión y experimentación con nuevos diseños de productos. Esto incluye, por ejemplo, las versiones de tu navegador y sistema operativo, tu dirección IP, qué páginas web visitaste y cuánto tardaron en cargar, y qué sitio web te refirió a nosotros. Si tienes una cuenta y has iniciado sesión, estos datos de análisis web están vinculados a tu dirección IP y cuenta de usuario hasta que tu cuenta ya no esté activa.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "También usamos cookies persistentes propias y algunas cookies de terceros para almacenar ciertas preferencias, facilitar el uso de nuestras aplicaciones, realizar pruebas A/B y apoyar algunos análisis.",
    "cookiesDescription2": "Una cookie es un fragmento de texto almacenado por tu navegador. Puede ayudar a recordar información de inicio de sesión y preferencias del sitio. También puede recopilar información como el tipo de navegador, sistema operativo, páginas web visitadas, duración de la visita, contenido visto y otros datos de flujo de clics. Puedes ajustar la configuración de retención de cookies y aceptar o bloquear cookies individuales en la configuración de tu navegador, aunque nuestras aplicaciones no funcionarán y otros aspectos de nuestro servicio pueden no funcionar correctamente si desactivas las cookies.",
    "correspondenceTitle": "2.6 Correspondencia voluntaria",
    "correspondenceDescription": "Cuando nos envías un correo electrónico con una pregunta o para pedir ayuda, guardamos esa correspondencia, incluida tu dirección de correo electrónico, para tener un historial de correspondencia pasada al que hacer referencia si te comunicas en el futuro.",
    "accessTitle": "3. Cuándo accedemos o compartimos tu información",
    "accessDescription1": "Para proporcionar los productos o servicios que has solicitado. Usamos algunos subprocesadores de terceros para ayudar a ejecutar nuestras aplicaciones y proporcionarte los Servicios. Esto incluye proveedores de nube y análisis.",
    "accessDescription2": "Para investigar, prevenir o tomar medidas respecto al abuso. Acceder a la cuenta de un cliente al investigar un posible abuso es una medida de último recurso. Queremos proteger la privacidad y seguridad tanto de nuestros clientes como de las personas que nos informan sobre problemas, y hacemos todo lo posible para equilibrar esas responsabilidades durante todo el proceso. Si descubrimos que estás usando nuestros productos para un propósito restringido, tomaremos las medidas necesarias, incluida la notificación a las autoridades correspondientes cuando sea pertinente.",
    "accessDescription3": "Cuando lo requiera la ley aplicable.",
    "dataRequests": "Solicitudes de datos de usuarios. Nuestra política es no responder a solicitudes gubernamentales de datos de usuarios a menos que estemos obligados por un proceso legal o en circunstancias limitadas en caso de una solicitud de emergencia. Sin embargo, si las autoridades policiales de EE. UU. tienen la orden judicial, citación penal u orden judicial necesaria que nos exija compartir datos, debemos cumplir. Asimismo, solo responderemos a solicitudes de autoridades gubernamentales fuera de EE. UU. si el gobierno de EE. UU. nos obliga mediante los procedimientos descritos en un tratado o acuerdo de asistencia legal mutua. Es nuestra política notificar a los usuarios afectados antes de compartir datos a menos que estemos legalmente prohibidos de hacerlo, excepto en algunos casos de emergencia.",
    "preservationRequests": "Solicitudes de preservación. De manera similar, nuestra política es cumplir con las solicitudes de preservación de datos solo si estamos obligados por la Ley Federal de Comunicaciones Almacenadas de EE. UU., 18 U.S.C. Sección 2703(f), o por una citación de EE. UU. debidamente servida para asuntos civiles. No compartimos datos preservados a menos que lo exija la ley o lo obligue una orden judicial que decidamos no apelar. Además, a menos que recibamos una orden judicial, orden judicial o citación adecuada antes de que expire el período de preservación requerido, destruiremos cualquier copia preservada de los datos del cliente al final del período de preservación.",
    "taxAudits": "Si somos auditados por una autoridad fiscal, es posible que debamos compartir información relacionada con la facturación. Si eso ocurre, compartiremos solo lo mínimo necesario, como direcciones de facturación e información de exención de impuestos.",
    "securityTitle": "4. Cómo aseguramos tus datos",
    "securityDescription": "Todos los datos se cifran mediante SSL/TLS cuando se transmiten desde nuestros servidores a tu navegador.",
    "deletionTitle": "5. Qué sucede cuando eliminas tu contenido",
    "deletionDescription": "Si eliminas cualquier contenido, dejará de ser accesible inmediatamente.",
    "locationTitle": "6. Ubicación del sitio y los datos",
    "locationDescription": "Nuestros productos y otras propiedades web se operan en los Estados Unidos. Si te encuentras en la Unión Europea, el Reino Unido o en cualquier otro lugar fuera de los Estados Unidos, ten en cuenta que cualquier información que nos proporciones será transferida y almacenada en los Estados Unidos. Al usar nuestros sitios web o Servicios y/o proporcionarnos tu información personal, consientes esta transferencia.",
    "childrenTitle": "7. Privacidad de los niños",
    "updatesTitle": "8. Actualizaciones de esta Política de Privacidad",
    "updatesDescription": "Podemos actualizar esta política según sea necesario para cumplir con las regulaciones relevantes y reflejar cualquier práctica nueva. Cada vez que hagamos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página.",
    "contactTitle": "9. Contáctanos",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "à",
      policyDescription: 'Esta Política describe cómo NeverCap (en adelante, "NeverCap", "nuestro", "nosotros", "nos") recopila, usa y divulga su información personal cuando utiliza nuestros servicios, sitios web ({url}) y software (colectivamente, los "Servicios").',
      childrenDescription: "Los Servicios no están dirigidos a niños, y no recopilamos intencionalmente Información Personal de menores de 13 años. Si usted tiene menos de 13 años, no envíe información personal a través de los Servicios. Si cree que un menor nos ha proporcionado Información Personal violando esta Política, contáctenos {at} {email} como se indica abajo.",
      contactDescription: "Si tiene preguntas, comentarios o quejas sobre nuestra Política de Privacidad, contáctenos {at} {email} y haremos todo lo posible por atender su queja lo antes posible."
},
  TermsOfUse: {
    title: "Términos de",
    titleGradient: "Servicio",
    subtitle: "Por favor, lea estos términos cuidadosamente antes de usar nuestros servicios",
    "lastUpdated": "Última actualización: {date}",
    "lastUpdatedDate": "21 de julio de 2025",
    "termsOfServiceTitle": "Términos de Servicio",
    "thankYou": "¡Gracias por usar nuestros productos!",
    "companyDefinition": 'Cuando decimos \"Compañía\", \"nosotros\", \"nuestro\" o \"nos\" en este documento, nos referimos a NeverCap.',
    "servicesDefinition": 'Cuando decimos \"Servicios\", nos referimos a cualquier producto creado y mantenido por NeverCap, ya sea entregado en un navegador web, aplicación de escritorio, aplicación móvil u otro formato.',
    "termsUpdate": "Podemos actualizar estos Términos de Servicio en el futuro. Normalmente, estos cambios han sido para aclarar algunos términos vinculando a una política relacionada ampliada. Siempre que hagamos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página y tomaremos las medidas adecuadas para notificar a los titulares de cuentas.",
    "acceptanceTitle": "1. Aceptación del Acuerdo",
    "acceptanceDescription1": "Al usar nuestros Servicios, usted indica su aceptación de este Acuerdo, que se convierte en un contrato vinculante entre usted y NeverCap. Usted declara que está legalmente capacitado para aceptar estos Términos y afirma que tiene la edad legal para formar un contrato vinculante. La aceptación de NeverCap está expresamente condicionada a su asentimiento a todos los términos y condiciones de este Acuerdo.",
    "eligibilityRequirement": "Los Servicios no están destinados y no deben ser utilizados por menores de 18 años. Al usar los Servicios, usted declara y garantiza que cumple con este requisito de elegibilidad.",
    "userResponsibility": 'Los términos \"usted\", \"su\", \"sí mismo\" también incluyen a sus empleados, agentes, representantes comerciales y cualquier otra persona a la que usted proporcione acceso a los Servicios a través de su Cuenta (como se define a continuación). Usted es responsable de asegurarse de que todas las personas que accedan a los Servicios a través de su cuenta conozcan estos Términos y los cumplan.',
    "termsRevision": "NeverCap se reserva el derecho de revisar y actualizar estos Términos de vez en cuando a su sola discreción. Todos los cambios son efectivos inmediatamente después de su publicación. Su uso continuado de los Servicios después de la publicación de los Términos revisados significa que acepta y está de acuerdo con los cambios. Se espera que revise esta página periódicamente para estar al tanto de cualquier cambio, ya que son vinculantes para usted.",
    "servicesTitle": "2. Servicios de NeverCap",
    "servicesDescription1": "Nuestros Servicios permiten a los usuarios transformar conversaciones de voz en texto transcrito que puede ser buscado, traducido y compartido con otros.",
    "servicesOptions": 'Puede elegir si usar la versión gratuita de los Servicios (\"Servicios Gratuitos\") o la versión de pago por suscripción de los Servicios por la que puede estar obligado a pagar tarifas (los \"Servicios de Pago\").',
    "servicesAccess": "Pondremos los Servicios a su disposición. Usted es responsable de realizar todos los arreglos necesarios para tener acceso a los Servicios.",
    "accountTermsTitle": "3. Términos de la Cuenta",
    "accountSecurity": "Usted es responsable de mantener la seguridad de su cuenta. La Compañía no puede ni será responsable por cualquier pérdida o daño derivado de su incumplimiento de esta obligación de seguridad.",
    "lawfulUse": "No puede utilizar los Servicios para ningún propósito ilegal, poco ético o inmoral.",
    "contentResponsibility": "Usted es responsable de todo el contenido publicado y de la actividad que ocurra bajo su cuenta. Eso incluye contenido publicado por otros que: (a) tengan acceso a sus credenciales de inicio de sesión; o (b) tengan sus propios inicios de sesión bajo su cuenta.",
    "humanRequirement": 'Usted debe ser un humano. No se permiten cuentas registradas por \"bots\" u otros métodos automatizados.',
    "paymentTitle": "4. Pago, Reembolsos y Cambios de Plan",
    "freeTrial": "Para los Servicios de pago que ofrecen una prueba gratuita, explicamos la duración de la prueba cuando se registra. Después del período de prueba, debe pagar por adelantado para seguir usando el Servicio. Si no paga, estos servicios terminarán.",
    "upgradePolicy": "Si está actualizando de un plan gratuito a un plan de pago, cobraremos su tarjeta inmediatamente y su ciclo de facturación comenzará el día de la actualización.",
    "taxes": "Todas las tarifas son excluyentes de todos los impuestos, gravámenes o derechos impuestos por las autoridades fiscales. Cuando sea requerido, recaudaremos esos impuestos en nombre de la autoridad fiscal y los remitiremos a las autoridades fiscales. De lo contrario, usted es responsable del pago de todos los impuestos, gravámenes o derechos.",
    "refunds": "Todas las compras no son reembolsables. Puede cancelar cualquier servicio de pago en cualquier momento iniciando sesión en su cuenta. Para suscripciones de pago, su cancelación tendrá efecto al final del período de pago actual, a menos que se indique lo contrario.",
    "cancellationTitle": "5. Cancelación y Terminación",
    "cancellationPolicy": "Si cancela el Servicio antes del final de cualquier tiempo pagado, su cancelación tendrá efecto inmediato y no se le cobrará nuevamente. No prorrateamos automáticamente el tiempo no utilizado en el último ciclo de facturación.",
    "terminationRights": "Tenemos el derecho de suspender o terminar su cuenta y rechazar cualquier uso actual o futuro de nuestros Servicios por cualquier motivo en cualquier momento. La suspensión significa que no podrá acceder a la cuenta o a cualquier contenido en la cuenta. La terminación resultará además en la eliminación de su cuenta o su acceso a su cuenta, y la pérdida y renuncia de todo el contenido en su cuenta. También nos reservamos el derecho de rechazar el uso de los Servicios a cualquier persona por cualquier motivo en cualquier momento. Tenemos esta cláusula porque, estadísticamente hablando, de los cientos de miles de cuentas en nuestros Servicios, hay al menos una haciendo algo nefasto.",
    "abusePolicy": "El abuso verbal, físico, escrito o de otro tipo (incluidas las amenazas de abuso o represalia) de un empleado o funcionario de la Compañía puede resultar en la terminación inmediata de la cuenta.",
    "submissionsTitle": "6. Envíos",
    "submissionsDescription": 'Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, retroalimentación u otra información sobre el Sitio (\"Envíos\") proporcionada por usted a nosotros no es confidencial y se convertirá en nuestra propiedad exclusiva. Tendremos derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y difusión ilimitados de estos Envíos para cualquier propósito legal, comercial o de otro tipo, sin reconocimiento ni compensación para usted. Usted renuncia aquí a todos los derechos morales sobre dichos Envíos, y garantiza que dichos Envíos son originales suyos o que tiene derecho a enviarlos. Usted acepta que no habrá recurso contra nosotros por cualquier presunta o real infracción o apropiación indebida de cualquier derecho de propiedad en sus Envíos.',
    "uptimeTitle": "7. Tiempo de Actividad y Seguridad",
    "serviceAvailability": 'Su uso de los Servicios es bajo su propio riesgo. Proporcionamos estos Servicios \"tal cual\" y \"según disponibilidad\". No ofrecemos acuerdos de nivel de servicio para la mayoría de nuestros Servicios, pero nos tomamos en serio el tiempo de actividad de nuestras aplicaciones.',
    "throttlingPolicy": "Nos reservamos el derecho de limitar temporalmente o restringir el acceso a la cuenta en casos raros donde se verifique que la actividad de un usuario está afectando negativamente la estabilidad y el rendimiento del Servicio para otros usuarios. En todos los casos excepto los más críticos, nos contactaremos con usted para encontrar una solución antes de tomar medidas.",
    "dataSecurity": "Tomamos muchas medidas para proteger y asegurar sus datos a través de copias de seguridad, redundancias y encriptación. Aplicamos encriptación para la transmisión de datos a través de Internet público.",
    "thirdPartyVendors": "Utilizamos proveedores externos y socios de alojamiento para proporcionar el hardware, software, redes, almacenamiento y tecnología relacionada necesarios para operar los Servicios.",
    "siteManagementTitle": "8. Gestión del Sitio",
    "siteManagementDescription": "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear el Sitio por violaciones de estos Términos de Servicio; (2) tomar las acciones legales apropiadas contra cualquier persona que, a nuestra sola discreción, viole la ley o estos Términos de Servicio, incluido, sin limitación, reportar a dicho usuario a las autoridades policiales; (3) a nuestra sola discreción y sin limitación, rechazar, restringir el acceso, limitar la disponibilidad o deshabilitar (en la medida tecnológicamente factible) cualquiera de sus Contribuciones o cualquier parte de ellas; (4) a nuestra sola discreción y sin limitación, aviso o responsabilidad, eliminar del Sitio o deshabilitar todos los archivos y contenido que sean excesivos en tamaño o de cualquier manera gravosos para nuestros sistemas; y (5) gestionar el Sitio de manera diseñada para proteger nuestros derechos y propiedad y facilitar el funcionamiento adecuado del Sitio.",
    "copyrightTitle": "9. Derechos de Autor y Propiedad del Contenido",
    "copyrightCompliance": "Todo el contenido publicado en los Servicios debe cumplir con la ley de derechos de autor de EE.UU.",
    "ipRights": "No reclamamos derechos de propiedad intelectual sobre el material que usted proporciona a los Servicios. Todos los materiales cargados siguen siendo suyos.",
    "contentModeration": "No revisamos el contenido de antemano, pero nos reservamos el derecho (pero no la obligación) a nuestra sola discreción de rechazar o eliminar cualquier contenido disponible a través del Servicio.",
    "prohibitedExploitation": "Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar cualquier parte de los Servicios, el uso de los Servicios o el acceso a los Servicios sin el permiso expreso por escrito de la Compañía.",
    "impersonationProhibition": "No debe modificar otro sitio web para implicar falsamente que está asociado con los Servicios o la Compañía.",
    "dmcaPolicy": "Respetamos los derechos de propiedad intelectual de otros. Si cree que cualquier material disponible en o a través del Sitio infringe cualquier derecho de autor que posee o controla, por favor contáctenos inmediatamente. Se enviará una copia de su Notificación a la persona que publicó o almacenó el material mencionado en la Notificación. Tenga en cuenta que, según la ley aplicable, puede ser responsable de daños si hace declaraciones falsas materiales en una Notificación. Por lo tanto, si no está seguro de que el material ubicado en o vinculado por el Sitio infringe su derecho de autor, debe considerar primero contactar a un abogado.",
    "prohibitedActivitiesTitle": "10. Actividades Prohibidas",
    "generalProhibition": "No podrás acceder ni usar el Sitio para ningún propósito distinto al que lo ponemos a disposición. El Sitio no podrá usarse en relación con esfuerzos comerciales, excepto aquellos que estén específicamente respaldados o aprobados por nosotros.",
    "userObligations": "Como usuario del Sitio, aceptas no:",
    "dataScraping": "Recuperar sistemáticamente datos u otro contenido del Sitio para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.",
    "fraud": "Engañar, defraudar o inducir a error a nosotros y a otros usuarios, especialmente en cualquier intento de obtener información sensible de cuentas como contraseñas de usuario.",
    "securityInterference": "Eludir, desactivar o interferir de cualquier manera con las funciones de seguridad del Sitio, incluidas aquellas que previenen o restringen el uso o copia de cualquier Contenido o imponen limitaciones en el uso del Sitio y/o el Contenido incluido en él.",
    "defamation": "Desprestigiar, manchar o dañar, a nuestro juicio, a nosotros y/o al Sitio.",
    "harassment": "Usar cualquier información obtenida del Sitio para acosar, abusar o dañar a otra persona.",
    "supportAbuse": "Hacer un uso indebido de nuestros servicios de soporte o presentar informes falsos de abuso o mala conducta.",
    "legalCompliance": "Usar el Sitio de manera inconsistente con las leyes o regulaciones aplicables.",
    "framingProhibition": "Participar en el framing no autorizado o enlazar al Sitio.",
    "malware": "Cargar o transmitir (o intentar cargar o transmitir) virus, caballos de Troya u otro material, incluido el uso excesivo de mayúsculas y spam (publicación continua de texto repetitivo), que interfiera con el uso y disfrute ininterrumpido del Sitio por cualquier parte o que modifique, perjudique, interrumpa, altere o interfiera con el uso, características, funciones, operación o mantenimiento del Sitio.",
    "automation": "Participar en cualquier uso automatizado del sistema, como usar scripts para enviar comentarios o mensajes, o usar cualquier herramienta de minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
    "copyrightRemoval": "Eliminar el aviso de derechos de autor u otros derechos de propiedad de cualquier Contenido.",
    "impersonation": "Intentar suplantar a otro usuario o persona o usar el nombre de usuario de otro usuario.",
    "spyware": 'Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo de recopilación o transmisión de información pasiva o activa, incluidos, entre otros, formatos de intercambio de gráficos claros (\"gifs\"), píxeles 1×1, web bugs, cookies u otros dispositivos similares (a veces denominados \"spyware\", \"mecanismos de recopilación pasiva\" o \"pcms\").',
    "disruption": "Interferir, interrumpir o crear una carga indebida en el Sitio o las redes o servicios conectados al Sitio.",
    "employeeHarassment": "Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en proporcionarte cualquier parte del Sitio.",
    "accessCircumvention": "Intentar eludir cualquier medida del Sitio diseñada para prevenir o restringir el acceso al Sitio o a cualquier parte del mismo.",
    "codeCopying": "Copiar o adaptar el software del Sitio, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código.",
    "reverseEngineering": "Excepto según lo permita la ley aplicable, descifrar, descompilar, desensamblar o realizar ingeniería inversa de cualquier software que componga o forme parte del Sitio.",
    "bots": "Excepto como resultado del uso estándar de motores de búsqueda o navegadores de Internet, usar, lanzar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier spider, robot, utilidad de trampa, scraper o lector fuera de línea que acceda al Sitio, o usar o lanzar cualquier script no autorizado u otro software.",
    "buyingAgents": "Usar un agente de compras o agente de adquisiciones para realizar compras en el Sitio.",
    "unauthorizedUse": "Hacer cualquier uso no autorizado del Sitio, incluida la recopilación de nombres de usuario y/o direcciones de correo electrónico de usuarios por medios electrónicos u otros con el propósito de enviar correos no solicitados, o crear cuentas de usuario por medios automatizados o bajo falsos pretextos.",
    "competition": "Usar el Sitio como parte de cualquier esfuerzo para competir con nosotros o usar el Sitio y/o el Contenido para cualquier esfuerzo generador de ingresos o empresa comercial.",
    "advertising": "Usar el Sitio para anunciar u ofrecer la venta de bienes y servicios.",
    "profileTransfer": "Vender o transferir tu perfil.",
    "featuresTitle": "11. Funciones y Errores",
    "featuresDescription": "Diseñamos nuestros Servicios con cuidado, basándonos en nuestra propia experiencia y en la de los clientes que comparten su tiempo y comentarios. Sin embargo, no existe un servicio que agrade a todos. No garantizamos que nuestros Servicios cumplan con tus requisitos o expectativas específicas.",
    "bugsDescription": "También probamos todas nuestras funciones antes de lanzarlas. Como cualquier software, nuestros Servicios inevitablemente tienen algunos errores. Rastreamos los errores que nos reportan y los solucionamos, especialmente aquellos relacionados con seguridad o privacidad. No todos los errores reportados se solucionarán y no garantizamos Servicios completamente libres de errores.",
    "correctionsTitle": "12. Correcciones",
    "informationAccuracy": "Puede haber información en el Sitio que contenga errores tipográficos, inexactitudes u omisiones, incluidas descripciones, precios, disponibilidad y otra información diversa. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión y de cambiar o actualizar la información en el Sitio en cualquier momento, sin previo aviso.",
    "siteAvailability": "No podemos garantizar que el Sitio esté disponible en todo momento. Podemos experimentar problemas de hardware, software u otros, o necesitar realizar mantenimiento relacionado con el Sitio, lo que resultará en interrupciones, retrasos o errores. Nos reservamos el derecho de cambiar, revisar, actualizar, suspender, discontinuar o modificar el Sitio en cualquier momento o por cualquier razón sin aviso previo. Aceptas que no tendremos responsabilidad alguna por cualquier pérdida, daño o inconveniente causado por tu incapacidad para acceder o usar el Sitio durante cualquier tiempo de inactividad o discontinuación del mismo. Nada en estos Términos de Servicio se interpretará como una obligación de nuestra parte de mantener y respaldar el Sitio o de proporcionar correcciones, actualizaciones o versiones relacionadas con él.",
    "userDataTitle": "13. Datos del Usuario",
    "userDataDescription": "Mantendremos ciertos datos que nos transmitas al Sitio con el propósito de gestionar su rendimiento, así como datos relacionados con tu uso del Sitio. Aunque realizamos copias de seguridad periódicas de los datos, eres el único responsable de todos los datos que transmitas o que estén relacionados con cualquier actividad que hayas realizado usando el Sitio. Aceptas que no tendremos responsabilidad alguna ante ti por cualquier pérdida o corrupción de dichos datos, y por la presente renuncias a cualquier derecho de acción contra nosotros que surja de dicha pérdida o corrupción de datos.",
    "privacyPolicyTitle": "14. Política de Privacidad",
    "liabilityTitle": "15. Responsabilidad",
    "liabilityIntroduction": "Mencionamos la responsabilidad a lo largo de estos Términos, pero para resumirlo en una sección:",
    "liabilityWaiver": "Entiendes y aceptas expresamente que la Compañía no será responsable, en derecho o en equidad, ante ti o cualquier tercero por daños directos, indirectos, incidentales, lucro cesante, especiales, consecuentes, punitivos o ejemplares, incluidos, entre otros, daños por pérdida de beneficios, buena voluntad, uso, datos u otras pérdidas intangibles (incluso si la Compañía ha sido advertida de la posibilidad de dichos daños), resultantes de: (1) el uso o la incapacidad de usar los Servicios; (2) errores, equivocaciones o inexactitudes en el contenido y materiales; (3) lesiones personales o daños a la propiedad de cualquier naturaleza que resulten de tu acceso y uso del sitio; (4) el costo de adquisición de bienes y servicios sustitutos resultantes de cualquier bien, dato, información o servicio comprado u obtenido o mensajes recibidos o transacciones realizadas a través o desde los Servicios; (5) cualquier acceso no autorizado o uso de nuestros servidores seguros y/o cualquier información personal y/o financiera almacenada en ellos; (6) cualquier interrupción o cese de transmisión hacia o desde el sitio; (7) cualquier error, virus, caballo de Troya o similar que pueda ser transmitido al sitio o a través de él por cualquier tercero, y/o; (8) cualquier error u omisión en cualquier contenido y materiales o por cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso de cualquier contenido publicado, transmitido o puesto a disposición a través del sitio; (9) declaraciones o conductas de cualquier tercero en el servicio; (10) o cualquier otro asunto relacionado con estos Términos de Servicio o los Servicios, ya sea por incumplimiento de contrato, agravio (incluida negligencia, ya sea activa o pasiva) o cualquier otra teoría de responsabilidad.",
    "miscellaneousTitle": "16. Misceláneos",
    "miscellaneousDescription": "Estos Términos de Servicio y cualquier política o regla operativa publicada por nosotros en el Sitio o en relación con el Sitio constituyen el acuerdo y entendimiento completo entre tú y nosotros. Nuestra falta de ejercer o hacer valer cualquier derecho o disposición de estos Términos de Servicio no operará como una renuncia a dicho derecho o disposición. Estos Términos de Servicio operan en la mayor medida permitida por la ley. Podemos asignar cualquiera o todos nuestros derechos y obligaciones a otros en cualquier momento. No seremos responsables ni tendremos ninguna obligación por cualquier pérdida, daño, retraso o falta de acción causada por cualquier motivo fuera de nuestro control razonable. Si cualquier disposición o parte de una disposición de estos Términos de Servicio se determina que es ilegal, nula o inaplicable, dicha disposición o parte de la disposición se considerará separable de estos Términos de Servicio y no afectará la validez y aplicabilidad de las disposiciones restantes. No se crea ninguna relación de empresa conjunta, asociación, empleo o agencia entre tú y nosotros como resultado de estos Términos de Servicio o del uso del Sitio. Aceptas que estos Términos de Servicio no se interpretarán en nuestra contra por el hecho de haberlos redactado. Por la presente, renuncias a cualquier defensa que puedas tener basada en la forma electrónica de estos Términos de Servicio y la falta de firma de las partes para ejecutarlos.",
    "contactTitle": "17. Contáctanos",
    "neverCap": "NeverCap",
    at: "à",
    "site": "Sitio",
    "services": "Servicios",
      trademarkProtection: "Los nombres, apariencia y estilo de los Servicios son copyright© de la Compañía. Todos los derechos reservados. No puede duplicar, copiar o reutilizar ninguna porción del HTML, CSS, JavaScript o elementos de diseño visual sin permiso por escrito de la Compañía. Debe solicitar permiso para usar el logo de la Compañía o cualquier logo de los Servicios con fines promocionales. Envíenos un correo {at} {email} para solicitar el uso de logos. Nos reservamos el derecho de revocar este permiso si viola estos Términos de Servicio.",
      privacyPolicyDescription: "Nos preocupamos por la privacidad y seguridad de los datos. Revise nuestra {policy}. Al usar el Sitio, acepta estar sujeto a nuestra Política de Privacidad, incorporada a estos Términos de Servicio. Tenga en cuenta que el Sitio está alojado en Estados Unidos. Si accede al Sitio desde otra región con leyes sobre recopilación, uso o divulgación de datos personales diferentes a las de Estados Unidos, al continuar usando el Sitio, está transfiriendo sus datos a Estados Unidos y acepta que se transfieran y procesen allí.",
      contactDescription: "Si tiene preguntas sobre estos Términos de Servicio, contáctenos {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
