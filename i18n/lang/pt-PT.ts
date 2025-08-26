//葡萄牙语
let message = {
  // 首页
  HomePage: {
    home: "Todas as Transcrições",
    times: "{times} transcrições gratuitas por dia, {left} restantes hoje. ",
    tips: "Atualize para Pro para transcrições ilimitadas.",
    update: "Atualizar agora",
    rename: "Renomear",
    delete: "Eliminar",
    cancel: "Cancelar",
    confirm: "Criar",
    dialogLabel: "Nome da pasta",
    recently: "Arquivos recentes",
    loading: "Carregando",
    tour: {
      step0: {
        title: "Bem-vindo ao {name}",
        tip: "Aqui, você pode:",
        content:
          "Transcrever conversas pontuais, reuniões, palestras e muito mais",
        next: "Começar"
      },
      step1: {
        title: "Transcrever arquivos",
        content:
          "Suporta três métodos de transcrição: arquivos locais, links e gravações."
      },
      step2: {
        title: "Criar uma pasta",
        content: 'Clique no "+" para criar uma pasta e organizar seus arquivos.'
      },
      step3: {
        title: "Ver detalhes da transcrição e editar",
        content:
          "Clique no item para ver os detalhes da transcrição e editar, bem como traduzi-la."
      },
      next: "próximo",
      finish: "Entendi"
    },
    export: {
      export: "Exportar",
      title: "Estamos a gerar a sua exportação",
      title2: "O seu arquivo está pronto",
      singleLoadingContent: "1 arquivo está sendo comprimido.",
      singleSuccessContent: "1 arquivo foi comprimido.",
      loadingContent: "{num} arquivos estão sendo comprimidos.",
      successContent: "{num} arquivos foram comprimidos.",
      cancel: "Cancelar a exportação",
      error: "Erro de exportação",
      dialog: {
        title: "Aviso",
        content: "Cancelar a exportação?",
        cancel: "Cancelar exportação",
        continue: "Continuar exportação"
      }
    },
    welcome: {
      title: "Bem-vindo ao Scribify!",
      description: "Aqui, pode:",
      transcribe:
        "Transcreva sem esforço com Scribify—transforme conversas de voz em texto claro, pesquisável e partilhável num instante.",
      precision:
        "Obtenha transcrições precisas com identificação de oradores e marcas temporais instantaneamente.",
      translate:
        "Quebre barreiras linguísticas: traduza transcrições para mais de 200 idiomas com facilidade.",
      edit: "Edite, refine e exporte as suas transcrições em formatos que se adequem às suas necessidades.",
      collaborate: "Colabore partilhando o seu texto transcrito com outros.",
      button: "Começar",
      tip: "Pronto para transformar áudio em texto transcrito? Comece a explorar agora!",
      tip2: "Comece a explorar agora!",
      tip1: "Pronto para transformar áudio em texto transcrito? "
    },
    subscriptionModal: {
      left: {
        title: "Obtenha o Plano Pro para desbloquear mais",
        c1: "Transcrições ilimitadas",
        c2: "Carregamentos de 10 horas",
        c3: "Prioridade máxima",
        c4: "99% de precisão na transcrição",
        c5: "Mais de 100 idiomas suportados",
        c6: "Identificação de oradores",
        c7: "Tradução de transcrição",
        t1: "Transcrições ilimitadas para uma pessoa.",
        t2: "Cada ficheiro pode ter até 10 horas / 5 GB. Carregue 50 ficheiros de uma vez.",
        t3: "Transcrevemos sempre os seus ficheiros o mais rapidamente possível com a prioridade máxima."
      },
      right: {
        title: "Obter Plano Pro",
        yearly: "Anual",
        monthly: "Mensal",
        save: "Poupança",
        preMonth: "por mês",
        preYear: "por ano",
        firstMonth: "primeiro mês",
        afterwards: "depois"
      },
      subscribe: "Subscrever"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Falhou",
      selected: "Selecionado",
      success: "Sucesso",
      fileList: "Lista de Ficheiros"
    },
    dialog: {
      move: {
        title: "Mover",
        label: "Escolher uma pasta",
        placeholder: "Escolher uma pasta",
        confirm: "Mover",
        cancel: "Cancelar"
      },
      rename: {
        title: "Renomear",
        label: "Nome do arquivo",
        confirm: "Renomear",
        cancel: "Cancelar"
      },
      delete: {
        title: "Eliminar",
        file: "arquivo",
        files: "arquivos",
        label: "Confirmar eliminação? Esta ação não pode ser desfeita.",
        confirm: "Eliminar",
        cancel: "Cancelar"
      },
      share: {
        title: "Partilhar",
        label:
          "Qualquer pessoa com o seguinte link seguro pode ver esta transcrição e o arquivo de mídia associado.",
        confirm: "Copiar link",
        success: "Cópia bem-sucedida"
      },
      export: {
        title: "Exportar",
        select: "Selecione o formato que precisa",
        settings: "Configurações",
        speaker: "Incluir orador",
        timecodes: "Incluir códigos de tempo",
        confirm: "Exportar",
        cancel: "Cancelar",
        selectErr: "Por favor, selecione um ou mais formatos"
      }
    },
    search: {
      placeholder: "Pesquisar"
    },
    recently: "Recentes",
    record: "Gravar",
    transcribe: "Transcrever",
    unclassified: "Pastas não classificadas",
    buttons: {
      transcribe: "Transcrever arquivos",
      url: "Transcrever links",
      record: "Gravar e transcrever",
      recording: "Gravando..."
    },
    delSuccess: "Eliminado com sucesso",
    create: "Criar",
    endRecord: {
      title: "Aviso",
      content:
        "Está a gravar. Esta ação terminará a gravação. Quer terminar a gravação?",
      confirm: "Continuar Gravação",
      cancel: "Terminar Gravação"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Gravar",
      pause: "Pausar",
      resume: "Retomar",
      stop: "Parar",
      endRecord: "Terminar gravação",
      delete: "Eliminar",
      transcribe: "Transcrever",
      permissionDenied:
        "Permissão de microfone negada ou dispositivo não existe",
      dialog: {
        delete: {
          title: "Aviso",
          label: "Tem certeza de que deseja eliminar esta gravação?",
          confirm: "Eliminar",
          cancel: "Cancelar"
        },
        complete: {
          title: "Gravação concluída",
          label:
            "A gravação atingiu 10 horas e parou automaticamente. Por favor, transcreva.",
          confirm: "Entendi"
        },
        speaker: {
          content:
            "Para identificação de locutor, arquivos estão limitados a 3 horas. Por favor, desmarque '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcrever uma mídia online",
        title: "Colar links",
        label:
          "Cole o link de seu vídeo ou áudio de: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram e outras plataformas...",
        confirm: "Adicionar",
        cancel: "Cancelar",
        // 请输入正确的链接
        errorTitle:
          "O endereço do link que inseriu está incorreto. Por favor, verifique e tente novamente.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transcrever da URL",
        dialogTitle: "Carregar arquivos para transcrever",
        tip1: "Arraste os arquivos aqui ou clique para navegar",
        tip2: "Clique para navegar",
        or: "ou",
        supported: "Formatos suportados"
      },
      del: {
        title: "Aviso",
        content:
          "Todo o progresso será perdido. Confirmar o cancelamento da transcrição?",
        cancel: "Confirmar cancelamento",
        confirm: "Continuar a transcrever"
      },
      files: "Arquivos",
      resultDialogTitle: "Transcrever arquivos",
      resultDialogTitle2: "Transcrever ficheiro",
      cancel: "Cancelar",
      confirm: "Transcrever",
      return: "Voltar",
      addMore: "Adicionar mais",
      language: "Selecione o idioma",
      failed: "Falhou",
      tooLarge: "O ficheiro excede o limite (5 GB).",
      linkUpload: "A carregar",
      fileFormat: "O formato do arquivo não é permitido",
      localFiles: "Arquivos locais",
      pasteLink: "Link online",
      uploadErr: "Erro de carregamento",
      hashErr: "Erro de hash",
      table: {
        status: "Estado",
        file: "Arquivo",
        size: "Tamanho",
        noData: "Sem dados"
      },
      maxFileNum: "O número de arquivos não pode exceder {num}.",
      speaker: "Identificar Locutores",
      speakerLabel: "Detectar automaticamente quem está falando",
      guest: {
        transcribe: "Transcrever",
        file: "Arquivo",
        audio: "Arquivo de áudio/vídeo",
        Uploading: "Enviando..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Recentes",
      popular: "Populares",
      other: "Outros",
      searchLanguage: "Pesquisar idioma",
      noMatch: "Nenhum idioma correspondente encontrado",
      English: "Inglês",
      "English(US)": "Inglês (EUA)",
      "English(UK)": "Inglês (Reino Unido)",
      Spanish: "Espanhol",
      Portuguese: "Português",
      French: "Francês",
      Italian: "Italiano",
      German: "Alemão",
      Dutch: "Holandês",
      Polish: "Polonês",
      Danish: "Dinamarquês",
      Japanese: "Japonês",
      Korean: "Coreano",
      Hungarian: "Húngaro",
      Czech: "Tcheco",
      Chinese: "Chinês",
      Hebrew: "Hebraico",
      Arabic: "Árabe",
      Azerbaijani: "Azerbaijano",
      Estonian: "Estoniano",
      Belarusian: "Bielorrusso",
      Bulgarian: "Búlgaro",
      Icelandic: "Islandês",
      Bosnian: "Bósnio",
      Persian: "Persa",
      Russian: "Russo",
      "Chinese(Traditional)": "Chinês (Tradicional)",
      Finnish: "Finlandês",
      Kazakh: "Cazaque",
      Galician: "Galego",
      Catalan: "Catalão",
      "Chinese(Simplified)": "Chinês (Simplificado)",
      Kannada: "Canarês",
      Croatian: "Croata",
      Latvian: "Letão",
      Lithuanian: "Lituano",
      Romanian: "Romeno",
      Marathi: "Marata",
      Malay: "Malaio",
      Macedonian: "Macedônio",
      Maori: "Maori",
      Afrikaans: "Africâner",
      Nepali: "Nepalês",
      Norwegian: "Norueguês",
      Swedish: "Sueco",
      Serbian: "Sérvio",
      Slovak: "Eslovaco",
      Slovenian: "Esloveno",
      Swahili: "Suaíli",
      Tagalog: "Tagalo",
      Tamil: "Tâmil",
      Thai: "Tailandês",
      Turkish: "Turco",
      Welsh: "Galês",
      Urdu: "Urdu",
      Ukrainian: "Ucraniano",
      Greek: "Grego",
      Armenian: "Armênio",
      Hindi: "Hindi",
      Indonesian: "Indonésio",
      Vietnamese: "Vietnamita",
      Albanian: "Albanês",
      Amharic: "Amárico",
      Assamese: "Assamês",
      Occitan: "Occitano",
      Bashkir: "Bashkir",
      Basque: "Basco",
      Breton: "Breton",
      Tibetan: "Tibetano",
      Faroese: "Faroês",
      Sanskrit: "Sânscrito",
      Khmer: "Khmer",
      Georgian: "Grego",
      Gujarati: "Gujarati",
      "Haitian Creole": "Crioulo Haitiano",
      Hausa: "Hausa",
      Latin: "Latim",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburguês",
      Malagasy: "Malagasy",
      Maltese: "Maltês",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengali",
      Burmese: "Birmanês",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Cingalês",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tajique",
      Tatar: "Tatar",
      Telugu: "Telugu",
      Turkmen: "Turcomano",
      Uzbek: "Uzbeko",
      Hawaiian: "Havaiano",
      "Norwegian Nynorsk": "Norueguês Nynorsk",
      Sindhi: "Sindi",
      Sundanese: "Sundanês",
      Yiddish: "Iídiche",
      Yoruba: "Iorubá",
      Javanese: "Iauajava",
      Cantonese: "Cantonês",
      Abkhaz: "Abkhaze",
      Afar: "Afar",
      alz: "Aluz",
      ach: "Acholi",
      awa: "Ava",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlandês",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossétio",
      tpi: "Pidgin de Papua",
      bew: "Badaw",
      ban: "Bali",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Bawur",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Sotho do Norte",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Chamorro",
      Chamorro: "Chamorro",
      Chechen: "Checheno",
      chk: "Chukcheo",
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
      "ndc-ZW": "Ndebele do Sul",
      "South Ndebele": "Ndebele do Sul",
      dov: "Dong",
      "bm-Nkoo": "N'Ko (alfabeto escrito)",
      "French(Canada)": "Francês (Canadá)",
      Fijian: "Fijiano",
      fon: "Fon",
      "Western Frisian": "Frísio Ocidental",
      fur: "Friulano",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Groenlandês",
      gom: "Gom",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirguiz",
      ktu: "Ktu",
      gaa: "Gbe",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corsicano",
      "crh-Latn": "Crimeu (Latim)",
      crh: "Crimeu (Cirílico)",
      Quechua: "Quechua",
      Kurdish: "Curdo (Kurmanji)",
      ckb: "Curdo (Soranî)",
      trp: "Trepang",
      ltg: "Latgalian",
      lij: "Liguriano",
      Limburgish: "Limburguês",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Românico",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaio (Jawi)",
      Marshallese: "Marshallês",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Maori (Crioulo)",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Lus",
      hmn: "Hmong",
      nhe: "Navajo (Navaho)",
      "Southern Sotho": "Sotho do Sul",
      new: "Nepalês (Navajo)",
      nus: "Nus",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shamkhî)",
      "pt-PT": "Português (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Lua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Sami (Norte)",
      Samoan: "Samoano",
      kri: "Crioulo de Serra Leoa",
      crs: "Crioulo de Seicheles",
      Sango: "Sango",
      "sat-Latn": "Santali (Latim)",
      sat: "Santali (Ogham)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaélico Escocês",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latim)",
      Tahitian: "Tahitiano",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassar",
      vec: "Vêneto",
      Uyghur: "Uigur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesiano",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Jamaican Creole",
      sah: "Iacuto",
      ace: "Acehês",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Iloko",
      "iu-Latn": "Inuktitut (Latim)",
      Inuktitut: "Inuktitut (Syllabary)",
      yua: "Yucateco Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "ou", // 或
    LoginBtn: "Entrar com Email",
    LoginGoogle: "Entrar com Google",
    SignupBtn: "Registar com Email",
    SignupGoogle: "Registar com Google",
    SignupDes: "Registe-se hoje e veja a magia — grátis.",
    SignupTitle: "Transcrição precisa e ilimitada",
    signup: "Registar", // 注册
    sign_up: "Registar", // 注册
    loginByGoogle: "Continuar com Google", // 使用Google登录
    emailAddress: "Por favor, insira o seu endereço de e-mail", // 请输入您的邮箱
    createAccount: "Criar uma nova conta", // 创建账户
    accountExists: "Já tem uma conta? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Ao prosseguir, você concorda com nossos {terms} e {policy}.",
      terms: "Termos",
      policy: "Política de Privacidade"
    },
    setPassword: "Definir uma palavra-passe", // 设置密码
    code: "Código de verificação", // 验证码
    resend: "Reenviar", // 重新发送
    enterPassword: "Palavra-passe: Mínimo de 6 caracteres.", // 请输入密码
    passwordLeval: "Nível de palavra-passe", // 密码强度
    Weak: "Fraca", // 弱 中 强
    Medium: "Média", // 弱 中 强
    Strong: "Forte", // 弱 中 强
    confirmPassword: "Confirme a sua palavra-passe", // 确认密码
    invalidEmail: "Endereço de e-mail inválido", // 无效的邮箱地址
    logInDirectly:
      "Esta conta já existe. Por favor, inicie sessão diretamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Erro no código de verificação. Tente novamente.", // 验证码错误，请重试
    atLeastSix: "A palavra-passe deve ter pelo menos 6 caracteres.", // 密码长度至少6位
    passwordNotMatch:
      "As palavras-passe não coincidem. Por favor, tente novamente.", // 密码不匹配，请重试
    login: "Iniciar sessão", // 登录
    log_in: "Iniciar sessão", // 登录
    log_In: "Iniciar Sessão", // 登录
    password: "Palavra-passe", // 密码
    forgotPassword: "Esqueceu a sua palavra-passe?", // 忘记密码？
    noAccount: "Não tem uma conta?", // 没有账户？注册
    accountNotExists: "Esta conta não existe.", // 账户不存在
    passwordError: "Erro na palavra-passe", // 密码错误
    sendCode: "Enviar código de verificação", // 发送验证码
    resetPassword: "Repor palavra-passe", // 重置密码
    resetYourPassword: "Redefina a sua palavra-passe", // 重置你的密码
    newOldCantSame: "A nova palavra-passe deve ser diferente da antiga.", // 新密码与旧密码不能相同
    passwordResetOk: "Palavra-passe redefinida com sucesso!", // 密码重置成功！
    signupToSaveProgress: "Complete o registo para guardar o seu progresso.",
    tip: "Dica",
    tipContentEmail:
      "Acabámos de enviar a senha de acesso da sua conta para o seu e-mail.",
    tipContentPassword:
      "Por favor verifique a sua caixa de entrada e faça login com o seu e-mail e senha.",
    codeToEmail:
      "Acabámos de enviar um código de verificação para o seu e-mail. Por favor verifique a sua caixa de entrada e cole o código de verificação acima."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Plano de subscrição",
    freeversion: "Grátis",
    transcribeTimesDay: "3 Transcrições Diárias",
    uploadMinutes: "Carregamentos de 30 minutos",
    lowerPriority: "Prioridade mais baixa",
    currentPlan: "Plano atual",
    professionalEdition: "edição profissional",
    unlimitedTranscription: "Transcrição ilimitada",
    unlimitedNumberOfTimes: "Frequência e duração de transcrição ilimitadas.",
    filesUploadedAtOnce:
      "Cada ficheiro pode ter até 10 horas/5 GB. Carregue 50 ficheiros de cada vez.",
    highestPriority: "prioridade máxima",
    weWillGiveTheHighest:
      "Transcreveremos sempre os seus ficheiros o mais rápido possível com a máxima prioridade.",
    theFirstMonth: "O primeiro mês",
    subscribeTo: "subscrever",
    basicVersionFree: "Versão básica (grátis)",
    return: "Voltar",
    annualize: "anual",
    monthly: "mensal",
    everyYear: "todos os anos",
    saved: "poupado",
    byTheMonth: "por mês",
    firstMonth: "primeiro mês",
    afterwardsEveryMonth: "Posteriormente, todos os meses",
    manageSubscription: "Gerir Subscrição",
    professionalYearbook: "Anual Profissional",
    professionalMonthly: "Mensal Profissional",
    subscriptionWillCancelledOn: "Sua assinatura será cancelada em",
    displayLanguage: "Idioma de exibição",
    update: "Atualizar Agora",
    basicversion: "Versão Básica (Grátis)",
    daily: "{start} de {end} transcrições diárias utilizadas",
    upgradetoPro: "Atualizar para Pro",
    accountSetting: "Definições da Conta",
    logOut: "Sair",
    account: "Conta",
    email: "E-mail",
    id: "ID",
    password: "Palavra-passe",
    resetPassword: "Repor palavra-passe",
    logIn: "Entrar",
    tryForFree: "Experimente grátis",
    notFund: "Não encontrado",
    couldntFind: "Não conseguimos encontrar o que procura.",
    proAnnual: "Pro Anual",
    proMonthly: "Pro Mensal",
    perMonth: "por mês",
    afterwards: "posteriormente",
    accuracy: "precisão da transcrição",
    supported: "idiomas suportados",
    identification: "Identificação do orador",
    transcriptSranslation: "Tradução da transcrição",
    perYear: "por ano",
    getProPlan: "Obter Plano Pro",
    changeToAnnual: "Mudar para Anual",
    automaticRenewalon: "Renovação automática a",
    eachMonth: "Renovação automática no dia {time} de cada mês.",
    automaticRenewal:
      "Renovação automática falhou, por favor verifique o método de pagamento.",
    eachYear: "Renovação automática no dia {time} de cada ano.",
    returnAccountSetting: "Voltar",
    needsToWaitLonger:
      "Aguarde mais tempo antes que os seus ficheiros sejam transcritos.",
    freeThreeTimesDay: "Transcreva 3 ficheiros gratuitamente todos os dias.",
    oneFileUploaded:
      "Cada ficheiro pode ter até 30 minutos de duração. Carregue 1 ficheiro de cada vez.",
    uploadWithinHours: "Carregamentos de 10 horas",
    yourSubscription: "A sua subscrição será cancelada em {time}.",
    save: "Economizar",
    freeversion2: "Plano Gratuito"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinês (Simplificado)",
      "Chinese(Traditional)": "Chinês (Tradicional)",
      Japanese: "Japonês",
      Danish: "Dinamarquês",
      German: "Alemão",
      English: "Inglês",
      Spanish: "Espanhol",
      French: "Francês",
      Italian: "Italiano",
      Hungarian: "Húngaro",
      Dutch: "Holandês",
      Norwegian: "Norueguês",
      Polish: "Polonês",
      Portuguese: "Português",
      Finnish: "Finlandês",
      Swedish: "Sueco",
      Turkish: "Turco",
      Greek: "Grego",
      Russian: "Russo",
      Ukrainian: "Ucraniano",
      Hebrew: "Hebraico",
      Arabic: "Árabe",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Modelo SaaS Nuxt3 de código aberto, pré-integrado com gateways de pagamento globais (Stripe/Cream), Google OAuth, rotas i18n e ferramentas de otimização SEO. Projetado para desenvolvedores que lançam aplicações web multilíngues, oferece suporte SSR/SSG e segurança de nível de produção logo de início.",
    startLink: "Iniciar teste gratuito~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Junte-se à lista de espera, receba as últimas notícias do NuxtPro em primeira mão E descontos!",
      placeholder: "Insira o seu e-mail",
      button: "Juntar-se à lista de espera",
      joinCountMessage:
        "🔥 Utilizador inicial #{count} acabou de se juntar à lista de espera!"
    },
    seo: {
      title: "Modelo SaaS Nuxt de código aberto | NuxtPro",
      description:
        "O modelo NuxtJS com tudo o que precisa para colocar o seu produto à frente dos clientes. Da ideia à produção em 5 minutos."
    },
    api: {
      title: "isto é uma demonstração",
      corpInfo: "informações corporativas"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "erro de download de vídeo"
      },
      mse: {
        code: 2,
        msg: "erro de anexo de stream"
      },
      parse: {
        code: 3,
        msg: "erro de análise"
      },
      format: {
        code: 4,
        msg: "formato incorreto"
      },
      decoder: {
        code: 5,
        msg: "erro de descodificação"
      },
      runtime: {
        code: 6,
        msg: "erros gramaticais"
      },
      timeout: {
        code: 7,
        msg: "tempo limite de reprodução"
      },
      other: {
        code: 8,
        msg: "outros erros"
      }
    },
    HAVE_NOTHING: "Não há informações sobre se o áudio/vídeo está pronto",
    HAVE_METADATA: "Os metadados de áudio/vídeo estão prontos ",
    HAVE_CURRENT_DATA:
      "Os dados sobre a localização atual de reprodução estão disponíveis, mas não há dados suficientes para reproduzir o próximo frame/milissegundo",
    HAVE_FUTURE_DATA:
      "Os dados atuais e pelo menos um frame de dados estão disponíveis",
    HAVE_ENOUGH_DATA:
      "Os dados disponíveis são suficientes para iniciar a reprodução",
    NETWORK_EMPTY: "O áudio/vídeo não foi inicializado",
    NETWORK_IDLE:
      "O áudio/vídeo está ativo e foi selecionado para recursos, mas nenhuma rede é utilizada",
    NETWORK_LOADING: "O navegador está a descarregar os dados",
    NETWORK_NO_SOURCE: "Nenhuma fonte de áudio/vídeo foi encontrada",
    MEDIA_ERR_ABORTED: "O processo de busca foi interrompido pelo utilizador",
    MEDIA_ERR_NETWORK: "Ocorreu um erro durante o download",
    MEDIA_ERR_DECODE: "Ocorreu um erro durante a descodificação",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Áudio/vídeo não é suportado",
    REPLAY: "Reproduzir novamente",
    ERROR: "A rede está offline",
    PLAY_TIPS: "Reproduzir",
    PAUSE_TIPS: "Pausar",
    PLAYNEXT_TIPS: "Reproduzir próximo",
    DOWNLOAD_TIPS: "Descarregar",
    ROTATE_TIPS: "Rodar",
    RELOAD_TIPS: "Recarregar",
    FULLSCREEN_TIPS: "Entrar em ecrã inteiro",
    EXITFULLSCREEN_TIPS: "Sair do ecrã inteiro",
    CSSFULLSCREEN_TIPS: "Ecrã inteiro CSS",
    EXITCSSFULLSCREEN_TIPS: "Sair do ecrã inteiro CSS",
    TEXTTRACK: "Legenda",
    PIP: "PIP",
    SCREENSHOT: "Captura de ecrã",
    LIVE: "AO VIVO",
    OFF: "Desligado",
    OPEN: "Abrir",
    MINI_DRAG: "Clique e mantenha pressionado para arrastar",
    MINISCREEN: "Mini-ecrã",
    REFRESH_TIPS: "Por favor, tente",
    REFRESH: "Atualizar",
    FORWARD: "avançar",
    LIVE_TIP: "Ao vivo",
    TM_SUBTITLE_SHOW_TIPS: "Ativar legendas",
    TM_SUBTITLE_HIDE_TIPS: "Desativar legendas",
    TM_MINIMIZE_TIPS: "Ocultar o vídeo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "política de Privacidade",
    lastUpdated: "Última atualização: 25 de agosto de 2025",
    policyDescription:
      'Esta Política descreve como o Scribify (doravante denominado "Scribify", "nosso", "nós") coleta, usa e divulga suas informações pessoais quando você usa nossos serviços, sites',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: ', e software (coletivamente, os "Serviços").',
    policyAgreement:
      "Leia esta Política de Privacidade com atenção e certifique-se de que a compreende. Ao utilizar qualquer um dos nossos Serviços, você concorda com esta Política de Privacidade. Caso não concorde com o uso dos seus dados pessoais em conformidade com esta Política, você deverá interromper imediatamente o uso dos nossos Serviços.",
    policyOverview:
      "Nesta política, descrevemos: quais dados coletamos e por quê; como seus dados são tratados; e seus direitos em relação aos seus dados. Não vendemos seus dados.",
    scopeTitle: "1. Âmbito desta Política de Privacidade",
    whatWeCollectTitle: "2. O que coletamos e por quê",
    accessShareTitle: "3. Quando acessamos ou compartilhamos suas informações",
    secureDataTitle: "4. Como protegemos seus dados",
    deleteContentTitle: "5. O que acontece quando você exclui seu conteúdo",
    locationTitle: "6. Localização do site e dos dados",
    childrenPrivacyTitle: "7. Privacidade das crianças",
    updatesTitle: "8. Atualizações desta Política de Privacidade",
    contactUsTitle: "9. Contate-nos",
    identityAccessTitle: "2.1 Identidade e acesso",
    billingInfoTitle: "2.2 Informações de cobrança",
    productInteractionsTitle: "2.3 Interações do produto",
    websiteInteractionsTitle: "2.4 Interações no site",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Correspondência voluntária",
    scopeContent:
      "Esta Política de Privacidade aplica-se apenas à nossa coleta e processamento de informações sobre os usuários dos Serviços. Esta Política de Privacidade não se aplica a quaisquer serviços, sites ou softwares operados por terceiros que estejam vinculados a nós (sejam esses links fornecidos por nós ou compartilhados por outros usuários), nem se aplica a conteúdo, dados, aplicativos ou materiais de terceiros. Recomendamos que você verifique as políticas de privacidade de qualquer site ou software de terceiros antes de fornecer qualquer informação a eles.",
    collectPrinciple:
      "Nosso princípio norteador é coletar apenas o que precisamos. Veja o que isso significa na prática:",
    identityAccessContent:
      "Ao se cadastrar em um de nossos produtos, solicitamos informações de identificação, como seu nome e endereço de e-mail. Isso visa fornecer funcionalidades essenciais do produto e permitir o envio de atualizações e outras informações essenciais.",
    billingInfoContent:
      "Ao se inscrever em um produto pago, você será solicitado a fornecer suas informações de pagamento e endereço de cobrança. As informações de pagamento são enviadas diretamente ao nosso processador de pagamentos e não chegam aos nossos servidores.",
    productInteractionsContent:
      "Armazenamos em nossos servidores o conteúdo que você carrega, recebe ou mantém em suas contas de produtos. A menos que você exclua esse conteúdo, podemos mantê-lo enquanto sua conta estiver ativa.",
    websiteInteractionsContent:
      "Coletamos informações sobre sua atividade de navegação para fins analíticos e estatísticos, como testes de taxa de conversão e experimentação com novos designs de produtos. Isso inclui, por exemplo, as versões do seu navegador e sistema operacional, seu endereço IP, quais páginas da web você visitou e quanto tempo elas levaram para carregar, e qual site o encaminhou para nós. Se você tiver uma conta e estiver conectado, esses dados de análise da web serão vinculados ao seu endereço IP e à sua conta de usuário até que sua conta não esteja mais ativa.",
    cookiesContent1:
      "Também usamos cookies primários persistentes e alguns cookies de terceiros para armazenar determinadas preferências, facilitar o uso de nossos aplicativos e realizar testes A/B, além de dar suporte a algumas análises.",
    cookiesContent2:
      "Um cookie é um pedaço de texto armazenado pelo seu navegador. Ele pode ajudar a lembrar informações de login e preferências do site. Também pode coletar informações como o tipo de navegador, sistema operacional, páginas visitadas, duração da visita, conteúdo visualizado e outros dados de fluxo de cliques. Você pode ajustar as configurações de retenção de cookies e aceitar ou bloquear cookies individuais nas configurações do seu navegador, embora nossos aplicativos não funcionem e outros aspectos do nosso serviço possam não funcionar corretamente se você desativar os cookies.",
    voluntaryCorrespondenceContent:
      "Quando você nos envia um e-mail com uma dúvida ou para pedir ajuda, guardamos essa correspondência, incluindo seu endereço de e-mail, para que tenhamos um histórico de correspondências anteriores para referência caso você entre em contato conosco no futuro.",
    accessShareContent1:
      "Para fornecer produtos ou serviços que você solicitou. Utilizamos alguns subprocessadores terceirizados para ajudar a executar nossos aplicativos e fornecer os Serviços a você. Isso inclui provedores de nuvem e análise.",
    accessShareContent2:
      "Para investigar, prevenir ou tomar medidas em relação a abusos. Acessar a conta de um cliente durante a investigação de possíveis abusos é uma medida de último recurso. Queremos proteger a privacidade e a segurança tanto de nossos clientes quanto das pessoas que nos relatam problemas, e fazemos o possível para equilibrar essas responsabilidades ao longo do processo. Se descobrirmos que você está usando nossos produtos para uma finalidade restrita, tomaremos as medidas necessárias, incluindo notificar as autoridades competentes, quando necessário.",
    accessShareContent3: "Quando exigido pela legislação aplicável.",
    userDataRequests:
      "- Solicitações de dados do usuário. Nossa política é não responder a solicitações governamentais de dados do usuário, a menos que sejamos obrigados por processo legal ou, em circunstâncias limitadas, em caso de solicitação emergencial. No entanto, se as autoridades policiais dos EUA tiverem o mandado, intimação criminal ou ordem judicial necessária exigindo que compartilhemos dados, devemos obedecer. Da mesma forma, somente responderemos a solicitações de autoridades governamentais fora dos EUA se obrigados pelo governo dos EUA por meio de procedimentos descritos em um tratado ou acordo de assistência jurídica mútua. Nossa política é notificar os usuários afetados antes de compartilharmos dados, a menos que sejamos legalmente proibidos de fazê-lo e exceto em alguns casos de emergência.",
    preservationRequests:
      "- Solicitações de preservação. Da mesma forma, nossa política é atender a solicitações de preservação de dados somente se exigido pela Lei Federal de Comunicações Armazenadas dos EUA, 18 USC Seção 2703(f), ou por uma intimação americana devidamente notificada para questões civis. Não compartilhamos dados preservados, a menos que seja exigido por lei ou obrigado por uma ordem judicial da qual optamos por não recorrer. Além disso, a menos que recebamos um mandado, ordem judicial ou intimação adequados antes do término do período de preservação exigido, destruiremos quaisquer cópias preservadas dos dados do cliente ao final do período de preservação.",
    taxAudit:
      "- Caso sejamos auditados por uma autoridade fiscal, poderemos ser obrigados a compartilhar informações relacionadas à cobrança. Nesse caso, compartilharemos apenas o mínimo necessário, como endereços de cobrança e informações sobre isenção fiscal.",
    secureDataContent1: "Todos os dados são criptografados via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "quando transmitidos de nossos servidores para seu navegador.",
    deleteContentContent:
      "Se você excluir qualquer conteúdo, ele ficará imediatamente inacessível.",
    locationContent:
      "Nossos produtos e outras propriedades da web são operados nos Estados Unidos. Se você estiver localizado na União Europeia, no Reino Unido ou em qualquer outro lugar fora dos Estados Unidos, esteja ciente de que quaisquer informações que você nos fornecer serão transferidas e armazenadas nos Estados Unidos. Ao utilizar nossos sites ou Serviços e/ou nos fornecer suas informações pessoais, você concorda com essa transferência.",
    childrenPrivacyContent:
      "Os Serviços não são destinados a crianças e não coletamos intencionalmente Informações Pessoais de crianças menores de 13 anos. Se você tiver menos de 13 anos, não envie nenhuma informação pessoal por meio dos Serviços. Se você acredita que uma criança nos forneceu Informações Pessoais em violação a esta Política, entre em contato conosco conforme indicado abaixo.",
    updatesContent:
      "Podemos atualizar esta política conforme necessário para cumprir com as regulamentações relevantes e refletir quaisquer novas práticas. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página.",
    contactUsContent1:
      "Se você tiver alguma dúvida, comentário ou reclamação sobre nossa Política de Privacidade, por favor",
    contactUs: "Contate-nos",
    contactUsContent2:
      "e nos esforçaremos para lidar com sua reclamação o mais rápido possível."
  },
  termsOfService: {
    termsOfServiceTitle: "Termos de Serviço",
    lastUpdated: "Última atualização: 21 de setembro de 2022",
    thankYouMessage: "Obrigado por usar nossos produtos!",
    companyReference:
      'Quando dizemos "Empresa", "nós", "nosso" ou "nos" neste documento, estamos nos referindo à Scribify.',
    servicesDefinition:
      'Quando dizemos "Serviços", queremos dizer qualquer produto criado e mantido pela Scribify, seja entregue em um navegador da web, aplicativo de desktop, aplicativo móvel ou outro formato.',
    termsUpdateNotice:
      "Poderemos atualizar estes Termos de Serviço no futuro. Normalmente, essas alterações visam esclarecer alguns destes termos, vinculando-os a uma política relacionada mais detalhada. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página e tomaremos as medidas cabíveis para notificar os titulares das contas.",
    acceptanceOfAgreementTitle: "1. Aceitação do Acordo",
    scribifyServicesTitle: "2. Serviços do Scribify",
    accountTermsTitle: "3. Termos da conta",
    paymentRefundsTitle: "4. Pagamento, Reembolsos e Alterações de Plano",
    cancellationTerminationTitle: "5. Cancelamento e Rescisão",
    submissionsTitle: "6. Submissões",
    uptimeSecurityTitle: "7. Tempo de atividade e segurança",
    siteManagementTitle: "8. Gerenciamento do Site",
    copyrightContentTitle: "9. Direitos autorais e propriedade de conteúdo",
    prohibitedActivitiesTitle: "10. Atividades Proibidas",
    featuresBugsTitle: "11. Recursos e bugs",
    correctionsTitle: "12. CORREÇÕES",
    userDataTitle: "13. Dados do Usuário",
    privacyPolicyTitle: "14. Política de Privacidade",
    liabilityTitle: "15. Responsabilidade",
    miscellaneousTitle: "16. Diversos",
    contactUsTitle: "17. Contate-nos",
    acceptanceContent1:
      "Ao utilizar nossos Serviços, você indica sua aceitação deste Contrato, que se torna um contrato vinculativo entre você e a Scribify. Você declara que tem capacidade legal para aceitar estes Termos e afirma ser maior de idade para firmar um contrato vinculativo. A aceitação pela Scribify está expressamente condicionada à sua concordância com todos os termos e condições deste Contrato.",
    acceptanceContent2:
      "Os Serviços não se destinam e não devem ser usados por menores de 18 anos. Ao usar os Serviços, você declara e garante que atende ao requisito de elegibilidade acima.",
    acceptanceContent3:
      'Os termos "você", "seu", "você mesmo" também incluem seus funcionários, agentes, representantes comerciais e quaisquer outros indivíduos aos quais você concede acesso aos Serviços por meio de sua Conta (conforme definido abaixo). Você é responsável por garantir que todas as pessoas que acessam os Serviços por meio de sua conta estejam cientes destes Termos e os cumpram.',
    acceptanceContent4:
      "A Scribify reserva-se o direito de revisar e atualizar estes Termos periodicamente, a seu exclusivo critério. Todas as alterações entram em vigor imediatamente após sua publicação. O uso contínuo dos Serviços após a publicação dos Termos revisados significa que você aceita e concorda com as alterações. Recomendamos que você consulte esta página periodicamente para estar ciente de quaisquer alterações, pois elas são vinculativas.",
    servicesContent1:
      "Nossos serviços permitem que os usuários transformem conversas de voz em texto transcrito que pode ser pesquisado, traduzido e compartilhado com outras pessoas.",
    servicesContent2:
      'Você pode escolher se deseja usar a versão gratuita dos Serviços ("Serviços Gratuitos") ou a versão paga baseada em assinatura dos Serviços, pela qual você pode ser obrigado a pagar taxas (os "Serviços Pagos").',
    servicesContent3:
      "Nós disponibilizaremos os Serviços a você. Você é responsável por tomar todas as providências necessárias para ter acesso aos Serviços.",
    accountTerms1:
      "- Você é responsável por manter a segurança da sua conta. A Empresa não pode e não será responsável por qualquer perda ou dano decorrente do seu descumprimento desta obrigação de segurança.",
    accountTerms2:
      "- Você não pode usar os Serviços para nenhuma finalidade ilegal, antiética ou imoral.",
    accountTerms3:
      "- Você é responsável por todo o conteúdo publicado e atividades que ocorrem em sua conta. Isso inclui conteúdo publicado por outras pessoas que: (a) tenham acesso às suas credenciais de login; ou (b) tenham seus próprios logins em sua conta.",
    accountTerms4:
      '- Você deve ser humano. Contas registradas por "bots" ou outros métodos automatizados não são permitidas.',
    paymentContent1:
      "- Para Serviços pagos que oferecem um teste gratuito, explicamos a duração do teste no momento da assinatura. Após o período de teste, você precisa pagar antecipadamente para continuar usando o Serviço. Se você não pagar, esses serviços serão encerrados.",
    paymentContent2:
      "- Se você estiver atualizando de um plano gratuito para um plano pago, cobraremos seu cartão imediatamente e seu ciclo de cobrança começará no dia da atualização.",
    paymentContent3:
      "- Todas as taxas excluem todos os impostos, taxas ou encargos cobrados pelas autoridades fiscais. Quando necessário, cobraremos esses impostos em nome da autoridade fiscal e os remeteremos às autoridades fiscais. Caso contrário, você será responsável pelo pagamento de todos os impostos, taxas ou encargos.",
    paymentContent4:
      "- Todas as compras não são reembolsáveis. Você pode cancelar qualquer serviço pago a qualquer momento, acessando sua conta. Para assinaturas pagas, o cancelamento entrará em vigor ao final do período pago atual, salvo indicação em contrário.",
    cancellationContent1:
      "- Se você cancelar o Serviço antes do término de qualquer período pago, o cancelamento entrará em vigor imediatamente e você não será cobrado novamente. Não rateamos automaticamente o tempo não utilizado no último ciclo de cobrança.",
    cancellationContent2:
      "- Temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro de nossos Serviços por qualquer motivo e a qualquer momento. Suspensão significa que você não poderá acessar a conta ou qualquer conteúdo nela contido. O encerramento resultará, além disso, na exclusão da sua conta ou do seu acesso à sua conta, e na perda e renúncia de todo o conteúdo da sua conta. Também nos reservamos o direito de recusar o uso dos Serviços a qualquer pessoa, por qualquer motivo e a qualquer momento. Temos esta cláusula porque, estatisticamente falando, das centenas de milhares de contas em nossos Serviços, há pelo menos uma praticando atos ilícitos.",
    cancellationContent3:
      "- Abuso verbal, físico, escrito ou de outro tipo (incluindo ameaças de abuso ou retaliação) contra funcionários ou executivos da Empresa pode resultar no encerramento imediato da conta.",
    submissionsContent:
      'Você reconhece e concorda que quaisquer perguntas, comentários, sugestões, ideias, feedback ou outras informações relativas ao Site ("Envios") fornecidos por você não são confidenciais e se tornarão nossa propriedade exclusiva. Deteremos direitos exclusivos, incluindo todos os direitos de propriedade intelectual, e teremos o direito de usar e disseminar irrestritamente estes Envios para qualquer finalidade lícita, comercial ou não, sem reconhecimento ou compensação a você. Você, por meio deste, renuncia a todos os direitos morais sobre tais Envios e garante que tais Envios são originais e que você tem o direito de enviá-los. Você concorda que não haverá recurso contra nós por qualquer violação ou apropriação indevida, alegada ou real, de qualquer direito de propriedade sobre seus Envios.',
    uptimeContent1:
      '- O uso dos Serviços é por sua conta e risco. Fornecemos estes Serviços "no estado em que se encontram" e "conforme disponíveis". Não oferecemos contratos de nível de serviço para a maioria dos nossos Serviços, mas levamos a sério o tempo de atividade dos nossos aplicativos.',
    uptimeContent2:
      "- Reservamo-nos o direito de desativar temporariamente sua conta caso seu uso exceda significativamente o uso típico dos Serviços por outros clientes. Obviamente, entraremos em contato com você antes de tomar qualquer medida, exceto em casos raros em que o nível de uso possa impactar negativamente o desempenho do Serviço para outros clientes.",
    uptimeContent3:
      "- Tomamos diversas medidas para proteger e proteger seus dados por meio de backups, redundâncias e criptografia. Aplicamos criptografia para transmissão de dados pela internet pública.",
    uptimeContent4:
      "- Usamos fornecedores terceirizados e parceiros de hospedagem para fornecer o hardware, software, rede, armazenamento e tecnologia relacionada necessários para executar os Serviços.",
    siteManagementContent:
      "Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar o Site em busca de violações destes Termos de Serviço; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos de Serviço, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desabilitar (na medida em que for tecnologicamente viável) qualquer uma de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem limitação, aviso ou responsabilidade, remover do Site ou desabilitar de outra forma todos os arquivos e conteúdos que sejam excessivos em tamanho ou que sejam de alguma forma onerosos para nossos sistemas; e (5) gerenciar o Site de outra forma projetada para proteger nossos direitos e propriedade e para facilitar o funcionamento adequado do Site.",
    copyrightContent1:
      "- Todo o conteúdo publicado nos Serviços deve estar em conformidade com a lei de direitos autorais dos EUA.",
    copyrightContent2:
      "- Não reivindicamos direitos de propriedade intelectual sobre o material que você fornece aos Serviços. Todos os materiais enviados permanecem seus.",
    copyrightContent3:
      "- Não fazemos uma triagem prévia do conteúdo, mas nos reservamos o direito (mas não a obrigação), a nosso exclusivo critério, de recusar ou remover qualquer conteúdo que esteja disponível por meio do Serviço.",
    copyrightContent4:
      "- Os nomes, a aparência e a funcionalidade dos Serviços são protegidos por direitos autorais © da Empresa. Todos os direitos reservados. Você não pode duplicar, copiar ou reutilizar qualquer parte do HTML, CSS, JavaScript ou elementos de design visual sem a permissão expressa por escrito da Empresa. Você deve solicitar permissão para usar o logotipo da Empresa ou qualquer logotipo dos Serviços para fins promocionais.",
    emailUs: "envie-nos um e-mail",
    copyrightContent5:
      "solicitações de uso de logotipos. Reservamo-nos o direito de revogar esta permissão caso você viole estes Termos de Serviço.",
    copyrightContent6:
      "- Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos Serviços, uso dos Serviços ou acesso aos Serviços sem a permissão expressa por escrito da Empresa.",
    copyrightContent7:
      "- Você não deve modificar outro site de modo a implicar falsamente que ele está associado aos Serviços ou à Empresa.",
    copyrightContent8:
      "- Respeitamos os direitos de propriedade intelectual de terceiros. Se você acredita que qualquer material disponível no Site ou por meio dele infringe quaisquer direitos autorais que você possui ou controla, entre em contato imediatamente.",
    contactUs: "Contate-nos",
    copyrightContent9:
      "Uma cópia da sua Notificação será enviada à pessoa que publicou ou armazenou o material abordado na Notificação. Esteja ciente de que, de acordo com a legislação aplicável, você poderá ser responsabilizado por danos caso faça declarações falsas em uma Notificação. Portanto, se você não tiver certeza de que o material localizado ou vinculado ao Site viola seus direitos autorais, considere primeiro entrar em contato com um advogado.",
    prohibitedActivitiesIntro:
      "Você não poderá acessar ou utilizar o Site para qualquer finalidade que não seja aquela para a qual o disponibilizamos. O Site não poderá ser utilizado em conexão com quaisquer empreendimentos comerciais, exceto aqueles que sejam especificamente endossados ou aprovados por nós.",
    prohibitedActivitiesUserAgreement:
      "Como usuário do Site, você concorda em não:",
    prohibitedActivity1:
      "- Recuperar sistematicamente dados ou outro conteúdo do Site para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa permissão por escrito.",
    prohibitedActivity2:
      "- Enganar, fraudar ou induzir a nós e a outros usuários em erro, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuários.",
    prohibitedActivity3:
      "- Contornar, desabilitar ou interferir de outra forma nos recursos de segurança do Site, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou impõem limitações ao uso do Site e/ou do Conteúdo nele contido.",
    prohibitedActivity4:
      "- Desprezar, manchar ou de outra forma prejudicar, em nossa opinião, nós e/ou o Site.",
    prohibitedActivity5:
      "- Usar qualquer informação obtida no Site para assediar, abusar ou prejudicar outra pessoa.",
    prohibitedActivity6:
      "- Fazer uso indevido de nossos serviços de suporte ou enviar relatórios falsos de abuso ou má conduta.",
    prohibitedActivity7:
      "- Usar o Site de maneira inconsistente com quaisquer leis ou regulamentos aplicáveis.",
    prohibitedActivity8:
      "- Envolver-se em enquadramento ou vinculação não autorizados ao Site.",
    prohibitedActivity9:
      "- Carregar ou transmitir (ou tentar carregar ou transmitir) vírus, cavalos de Troia ou outro material, incluindo uso excessivo de letras maiúsculas e spam (publicação contínua de texto repetitivo), que interfira no uso ininterrupto e no aproveitamento do Site por qualquer parte ou modifique, prejudique, interrompa, altere ou interfira no uso, recursos, funções, operação ou manutenção do Site.",
    prohibitedActivity10:
      "- Envolver-se em qualquer uso automatizado do sistema, como usar scripts para enviar comentários ou mensagens, ou usar qualquer mineração de dados, robôs ou ferramentas semelhantes de coleta e extração de dados.",
    prohibitedActivity11:
      "- Excluir o aviso de direitos autorais ou outros direitos de propriedade de qualquer Conteúdo.",
    prohibitedActivity12:
      "- Tentar se passar por outro usuário ou pessoa ou usar o nome de usuário de outro usuário.",
    prohibitedActivity13:
      '- Carregar ou transmitir (ou tentar carregar ou transmitir) qualquer material que atue como um mecanismo passivo ou ativo de coleta ou transmissão de informações, incluindo, sem limitação, formatos de intercâmbio gráfico transparentes ("gifs"), pixels 1×1, web bugs, cookies ou outros dispositivos semelhantes (às vezes chamados de "spyware" ou "mecanismos de coleta passiva" ou "pcms").',
    prohibitedActivity14:
      "- Interferir, interromper ou criar uma carga indevida no Site ou nas redes ou serviços conectados ao Site.",
    prohibitedActivity15:
      "- Assediar, incomodar, intimidar ou ameaçar qualquer um dos nossos funcionários ou agentes envolvidos no fornecimento de qualquer parte do Site para você.",
    prohibitedActivity16:
      "- Tentar contornar quaisquer medidas do Site projetadas para impedir ou restringir o acesso ao Site ou a qualquer parte do Site.",
    prohibitedActivity17:
      "- Copiar ou adaptar o software do Site, incluindo, mas não se limitando a Flash, PHP, HTML, JavaScript ou outro código.",
    prohibitedActivity18:
      "- Exceto quando permitido pela lei aplicável, decifrar, descompilar, desmontar ou fazer engenharia reversa de qualquer software que componha ou de qualquer forma faça parte do Site.",
    prohibitedActivity19:
      "- Exceto quando for resultado do uso de mecanismos de busca padrão ou navegadores da Internet, usar, lançar, desenvolver ou distribuir qualquer sistema automatizado, incluindo, sem limitação, qualquer spider, robô, utilitário de trapaça, scraper ou leitor offline que acesse o Site, ou usar ou lançar qualquer script não autorizado ou outro software.",
    prohibitedActivity20:
      "- Utilize um agente de compras ou agente de compras para fazer compras no Site.",
    prohibitedActivity21:
      "- Fazer qualquer uso não autorizado do Site, incluindo a coleta de nomes de usuários e/ou endereços de e-mail de usuários por meios eletrônicos ou outros, com a finalidade de enviar e-mails não solicitados, ou criar contas de usuários por meios automatizados ou sob falsos pretextos.",
    prohibitedActivity22:
      "- Usar o Site como parte de qualquer esforço para competir conosco ou usar o Site e/ou o Conteúdo para qualquer empreendimento de geração de receita ou empreendimento comercial.",
    prohibitedActivity23:
      "- Usar o Site para anunciar ou oferecer a venda de produtos e serviços.",
    prohibitedActivity24: "- Vender ou transferir seu perfil.",
    featuresContent1:
      "Projetamos nossos Serviços com cuidado, com base em nossa própria experiência e nas experiências de clientes que compartilham seu tempo e feedback. No entanto, não existe um serviço que agrade a todos. Não garantimos que nossos Serviços atenderão às suas necessidades ou expectativas específicas.",
    featuresContent2:
      "Também testamos todos os nossos recursos antes de lançá-los. Como acontece com qualquer software, nossos Serviços inevitavelmente apresentam alguns bugs. Monitoramos os bugs relatados e os solucionamos, especialmente aqueles relacionados à segurança ou privacidade. Nem todos os bugs relatados serão corrigidos e não garantimos que os Serviços estejam completamente livres de erros.",
    correctionsContent1:
      "Pode haver informações no Site que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e diversas outras informações. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações no Site a qualquer momento, sem aviso prévio.",
    correctionsContent2:
      "Não podemos garantir que o Site estará disponível o tempo todo. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenção relacionada ao Site, resultando em interrupções, atrasos ou erros. Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar o Site a qualquer momento ou por qualquer motivo, sem aviso prévio. Você concorda que não temos qualquer responsabilidade por qualquer perda, dano ou inconveniência causada pela sua incapacidade de acessar ou usar o Site durante qualquer período de inatividade ou descontinuação do Site. Nada nestes Termos de Serviço será interpretado como uma obrigação para nós de manter e dar suporte ao Site ou de fornecer quaisquer correções, atualizações ou lançamentos relacionados a ele.",
    userDataContent:
      "Manteremos determinados dados que você transmitir ao Site com a finalidade de gerenciar o desempenho do Site, bem como dados relacionados ao seu uso do Site. Embora realizemos backups regulares de dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que tenha realizado usando o Site. Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de tais dados.",
    privacyPolicyContent1:
      "Preocupamo-nos com a privacidade e a segurança dos dados. Consulte a nossa Política de Privacidade.",
    privacyPolicy: "política de Privacidade",
    privacyPolicyContent2:
      "Ao utilizar o Site, você concorda em estar vinculado à nossa Política de Privacidade, que está incorporada a estes Termos de Serviço. Informamos que o Site está hospedado nos Estados Unidos. Se você acessar o Site de qualquer outra região do mundo com leis ou outros requisitos que regem a coleta, o uso ou a divulgação de dados pessoais diferentes das leis aplicáveis nos Estados Unidos, ao continuar usando o Site, você estará transferindo seus dados para os Estados Unidos e concorda que seus dados sejam transferidos e processados nos Estados Unidos.",
    liabilityIntro:
      "Mencionamos a responsabilidade ao longo destes Termos, mas para colocar tudo em uma seção:",
    liabilityContent:
      "Você expressamente entende e concorda que a Empresa não será responsável, em lei ou em equidade, perante você ou qualquer terceiro por quaisquer danos diretos, indiretos, incidentais, lucros cessantes, especiais, consequenciais, punitivos ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, ágio, uso, dados ou outras perdas intangíveis (mesmo que a Empresa tenha sido avisada da possibilidade de tais danos), resultantes de: (1) o uso ou a incapacidade de usar os Serviços; (2) erros, enganos ou imprecisões de conteúdo e materiais; (3) danos pessoais ou materiais, de qualquer natureza, resultantes do seu acesso e uso do site; (4) o custo de aquisição de bens e serviços substitutos resultantes de quaisquer bens, dados, informações ou serviços adquiridos ou obtidos ou mensagens recebidas ou transações realizadas por meio ou a partir dos Serviços; (5) qualquer acesso ou uso não autorizado de nossos servidores seguros e/ou quaisquer e todas as informações pessoais e/ou informações financeiras armazenadas neles; (6) qualquer interrupção ou cessação de transmissão de ou para o site; (7) quaisquer bugs, vírus, cavalos de Troia ou similares que possam ser transmitidos ao site ou por meio dele por terceiros e/ou; (8) quaisquer erros ou omissões em qualquer conteúdo e materiais ou por qualquer perda ou dano de qualquer tipo incorrido como resultado do uso de qualquer conteúdo publicado, transmitido ou de outra forma disponibilizado por meio do site; (9) declarações ou conduta de terceiros no serviço; (10) ou qualquer outro assunto relacionado a estes Termos de Serviço ou aos Serviços, seja como quebra de contrato, ato ilícito (incluindo negligência ativa ou passiva) ou qualquer outra teoria de responsabilidade.",
    miscellaneousContent:
      "Estes Termos de Serviço e quaisquer políticas ou regras operacionais publicadas por nós no Site ou em relação ao Site constituem o acordo e entendimento integral entre você e nós. Nossa falha em exercer ou executar qualquer direito ou disposição destes Termos de Serviço não operará como uma renúncia de tal direito ou disposição. Estes Termos de Serviço operam na máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou omissão de ação causados por qualquer causa além do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos de Serviço for determinada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos de Serviço e não afetará a validade e a exequibilidade de quaisquer disposições restantes. Não há nenhuma relação de joint venture, parceria, emprego ou agência criada entre você e nós como resultado destes Termos de Serviço ou do uso do Site. Você concorda que estes Termos de Serviço não serão interpretados contra nós em virtude de tê-los elaborado. Você renuncia a toda e qualquer defesa que possa ter com base no formato eletrônico destes Termos de Serviço e na falta de assinatura pelas partes para executar estes Termos de Serviço.",
    contactUsContent1:
      "Se você tiver alguma dúvida sobre qualquer um dos Termos de Serviço, por favor",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Recursos",
    UnlimitedTranscription: "Transcrição Ilimitada",
    BulkUpload: "Upload em Massa",
    Accuracy: "96% de Precisão",
    Pricing: "Preços",
    UseCases: "Casos de Uso",
    AllUseCases: "Todos os Casos de Uso",
    Podcasters: "Podcasters",
    Journalists: "Jornalistas",
    ContentCreators: "Criadores de Conteúdo",
    Researchers: "Pesquisadores",
    BusinessTeams: "Equipes Corporativas",
    Educators: "Educadores",
    Resources: "Recursos",
    YouTubetoMP4: "YouTube para MP4",
    StartFreeTrial: "Experimente Grátis"
  },
  Footer: {
    des: "O primeiro serviço de transcrição por IA verdadeiramente ilimitado do mundo. Sem limites, sem restrições, apenas liberdade para criar.",
    Features: "Recursos",
    UseCases: "Casos de Uso",
    Company: "Empresa",
    featureMenus: ["Transcrição Ilimitada", "Upload em Massa", "96% de Precisão"],
    useCaseMenus: [
          "Todos os Casos de Uso",
          "Podcasters",
          "Jornalistas",
          "Criadores de Conteúdo",
          "Pesquisadores",
          "Equipes Empresariais",
          "Educadores"
        ],
    companyMenus: [
          "Sobre",
          "Preços",
          "Privacidade",
          "Termos"
        ]
  },
  Index: {
    Hero: {
      badge: 'Chega de "Shrinkflation" - Verdadeiramente Ilimitado',
      h1: "Pare de Pagar por Limites:",
      gradient: "Transcrição por IA Verdadeiramente Ilimitada",
      subtitle:
        "Nossa IA transcreve vídeo e converte áudio em texto, processando 50 arquivos de uma vez sem limites mensais. Transcrição que realmente escala com você.",
      FreeTrial: "Experimente Grátis - Sem Cartão",
      HowWorks: "Veja Como Funciona",
      Unlimited: "Uploads Ilimitados de Arquivos",
      NoCap: "Sem Limite de Minutos Mensais",
      Hour: "Arquivos de 10 Horas Suportados",
      ExploreUseCases: "Explore Casos de Uso"
    },
    Stats: {
      monthlyMinutes: "Minutos Mensais",
      fileUploads: "Uploads de Arquivos",
      batchProcessing: "Processamento em Lote",
      maxFileLength: "Duração Máxima do Arquivo"
    },
    FeaturesGrid: {
      try_now: "Experimente Agora",
      no_signup: "Sem Cadastro Necessário",
      experience_unltd: "Experimente transcrição verdadeiramente ilimitada",
      upload_50: "Faça upload de até 50 arquivos de uma vez, aqui mesmo.",
      no_limits: "Avançado",
      no_surprises: "Transcrição por IA",
      transparency:
        "Chega de Limites Ocultos, Chega de Surpresas - Enquanto outros reduzem seus minutos silenciosamente ou escondem limites em letras miúdas, nós acreditamos em transparência radical",
      feat_unltd: "Verdadeiramente Ilimitado",
      feat_unltd_desc:
        'Sem "política de uso justo" escondida nos termos. Sem limites de armazenamento disfarçados de "ilimitado". Faça upload de todo seu arquivo, transcreva tudo para todas as suas necessidades de transcrição de áudio. Nós cumprimos.',
      feat_bulk: "Liberdade de Upload em Massa",
      feat_bulk_desc:
        'Cansado de "3 importações vitalícias" ou "10 arquivos por mês"? Faça upload de 50 arquivos de uma vez, quantas vezes precisar. Perfeito para processar acúmulos.',
      feat_batch: "Processamento em Lote",
      feat_batch_desc:
        "Processe toda sua temporada de podcast durante a noite. Faça upload de 50 entrevistas de uma vez. Deixe nossa IA trabalhar enquanto você dorme. Acorde com as transcrições prontas.",
      feat_accuracy: "96% de Precisão",
      feat_accuracy_desc:
        "Nossa IA líder do setor transcreve áudio com pontuação inteligente, diarização para até 20 falantes, e lida com sotaques e termos técnicos perfeitamente.",
      feat_langs: "100+ Idiomas",
      feat_langs_desc:
        "Transcreva vídeo e áudio em 100+ idiomas, traduza para 249+. Sem custos extras para idiomas diferentes. Conteúdo global, um preço simples.",
      feat_pro: "Recursos Profissionais",
      feat_pro_desc:
        "Timestamps por palavra para posicionamento preciso de áudio/vídeo, identificação exata de falantes mesmo durante trocas rápidas de conversa, e texto perfeitamente formatado com parágrafos, frases e pontuação para fácil leitura.",
      features: "Recursos"
    },
    UseCases: {
      built_for: "Em Massa",
      podcasters: {
        title: "Podcasters",
        des: "Faça upload de todo seu catálogo. Crie notas de show para cada episódio. Chega de escolher quais episódios transcrever."
      },
      content_creators: {
        title: "Criadores de Conteúdo",
        des: "Transforme sua biblioteca de vídeos em texto pesquisável usando nosso serviço para transcrever arquivos de vídeo automaticamente. Gere legendas para tudo. Sem contar minutos, apenas criando."
      },
      journalists: {
        title: "Jornalistas",
        des: 'Faça upload de todas suas entrevistas de uma vez. Chega de bloqueios de \"10 arquivos por mês\" quando no prazo final. Processe tudo.'
      },
      researchers: {
        title: "Pesquisadores",
        des: "Transcreva horas de grupos de foco e entrevistas. Faça upload de todo seu estudo de uma vez. Obtenha identificação precisa de falantes."
      },
      business_teams: {
        title: "Equipes de Negócios",
        des: "Grave cada chamada sem se preocupar com limites. Obtenha insights de IA em todas as conversas, não apenas em algumas selecionadas."
      },
      educators: {
        title: "Educadores",
        des: "Transcreva séries inteiras de palestras. Torne todo o conteúdo acessível. Sem escolher entre cursos devido a limites de minutos."
      },
        "heavy_users": "Transcrição de Áudio e Vídeo",
        "join_users": 'Criado Para Usuários Intensivos como Você - Junte-se a YouTubers, criadores de conteúdo e podcasters que migraram de serviços de "redução inflacionária"',
    },
    Testimonials: {
      title: "Amado por",
      highlighted_users: "50.000+ Usuários",
      subtitle:
        "Veja por que profissionais escolhem o NeverCap em vez de alternativas limitadas",
      Mike: {
          "text": "Nossa, isso realmente funciona! Fazendo um podcast há 3 anos e transcrevendo tudo manualmente como um idiota. Carreguei 6 episódios de uma vez e separou perfeitamente eu e meu co-apresentador. O episódio na cafeteria que achei perdido? Transcrição cristalina. Nunca mais vou digitar isso tudo sozinho.",
          "author": "Mike Rodriguez",
          "role": "Apresentador de Podcast"
    },
      Sarah: {
          "text": "Dou aulas online e precisava de legendas para meus vídeos. Tentei outras 3 ferramentas que tinham limites estranhos ou demoravam demais. Essa simplesmente... funciona? Carreguei minha aula em espanhol, obtive legendas perfeitas em 2 minutos. Meus alunos com deficiência auditiva estão tão felizes. Queria ter descoberto isso antes!",
          "author": "Sarah Chen",
          "role": "Professora Online"
    },
      Jessica: {
          "text": "Uso isso para minhas entrevistas e é incrível a precisão. Tive uma entrevista de 2 horas em inglês misturado com espanhol e acertou tudo, até os timestamps. Pagava $200/mês ao meu estagiário só para transcrever. Isso literalmente me economiza dinheiro todo mês.",
          "author": "Jessica Park",
          "role": "Jornalista Freelancer"
    }
    },
    PricingPreview: {
        "title": "Preços Transparentes",
        "highlighted_text": "Sem Limites Ocultos",
        "subtitle": "Escolha seu plano. Sem asteriscos, sem letras miúdas, sem surpresas"
    },
    FAQSection: {
      questions: [
              {
                q: "Transcrição por IA",
                question: "O que é transcrição por IA e como funciona?",
                answer: "Transcrição por IA é o processo de converter áudio em texto automaticamente usando inteligência artificial avançada. No NeverCap, você simplesmente envia seus arquivos, e nossa IA transcreve o conteúdo com até 96% de precisão. Nosso serviço é projetado para transcrever arquivos de vídeo (como MP4, MOV) e áudio (como MP3, WAV) em texto legível e editável, completo com identificação de falantes e timestamps."
              },
              {
                q: "unlimited_policy",
                question: "É realmente ilimitado? Qual é o truque?",
                answer: "Sim, é verdadeiramente ilimitado! Sem limites mensais de minutos, sem taxas extras. Os únicos limites são técnicos: arquivos individuais podem ter até 10 horas ou 5GB, e você pode processar 50 arquivos de uma vez. Mas pode enviar quantos lotes quiser, o mês inteiro."
              },
              {
                q: "accuracy",
                question: "Quão precisa é a transcrição?",
                answer: "Garantimos 96% de precisão para áudio claro. Nossa IA é treinada com milhões de horas de conteúdo diversificado e lida muito bem com sotaques, termos técnicos e múltiplos falantes. Para áudio desafiador, nossos recursos de aprimoramento ajudam a melhorar os resultados."
              },
              {
                q: "languages",
                question: "Quais idiomas vocês suportam?",
                answer: "Suportamos transcrição em mais de 100 idiomas, incluindo inglês, espanhol, mandarim, hindi, árabe, francês e mais. Além disso, você pode traduzir suas transcrições para 249 idiomas diferentes, perfeito para conteúdo global."
              },
              {
                q: "speed",
                question: "Quão rápida é a transcrição?",
                answer: "Rápido como um raio! Um arquivo de áudio de 1 hora geralmente é processado em menos de 5 minutos. Com processamento em lote, você pode enviar 50 arquivos simultaneamente e processá-los em paralelo. A maioria dos usuários acorda com toda a biblioteca transcrita durante a noite."
              },
              {
                q: "cancellation",
                question: "Posso cancelar a qualquer momento?",
                answer: "Absolutamente! Sem contratos, sem taxas de cancelamento. Você pode atualizar, reduzir ou cancelar sua assinatura a qualquer momento no seu painel. Se cancelar, manterá o acesso até o final do período de cobrança."
              },
              {
                q: "security",
                question: "Meus dados estão seguros?",
                answer: "Sua segurança é nossa prioridade. Somos certificados SOC 2, usamos criptografia de 256 bits para todos os dados e nunca usamos seu conteúdo para treinar nossos modelos. Você pode excluir seus arquivos a qualquer momento, e nós os removemos automaticamente após 30 dias. Conformidade com GDPR e CCPA."
              },
              {
                q: "export_formats",
                question: "Quais formatos de exportação estão disponíveis?",
                answer: "Baixe suas transcrições no formato que precisar: PDF, Word (DOCX), Excel, CSV, legendas SRT, texto simples (TXT) e legendas VTT. Perfeito para qualquer fluxo de trabalho."
              },
              {
                q: "file_formats",
                question: "Quais arquivos de áudio e vídeo posso enviar?",
                answer: "Suportamos praticamente todos os formatos de áudio e vídeo que você encontrar: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV e mais. Se você pode reproduzir, podemos transcrever."
              }
            ],
        "title": "Perguntas",
        "titleHighlight": "Frequentes",
    },
    CTASection: {
        "title": "Pronto Para Se Livrar Dos Limites?",
        "subtitle": "Junte-se a 50.000+ profissionais que mudaram para transcrição verdadeiramente ilimitada",
        "button": "Experimente o NeverCap Gratuito",
        "disclaimer": "Não é necessário cartão de crédito no Plano Gratuito • Atualize quando quiser para acesso ilimitado"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Chega de "Shrinkflation"',
      heroTitleLine1: "Verdadeiramente Ilimitado",
      heroTitleLine2: "Transcrição por IA",
      heroSubtitle:
        "Enquanto o Trint limita você a 50 horas e o Otter a 10 arquivos por mês, nós entregamos o que realmente prometemos: transcrição ilimitada sem limites ocultos.",
      primaryCta: "Experimente Grátis - Sem Cartão",
      secondaryCta: "Veja a Verdade",
      comparisonBadLabel: "O Que Outros Fazem",
      comparisonBadTitle: "Limites Ocultos em Todo Lugar",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Ilimitado" = limite de 50 horas/mês',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 importações vitalícias (grátis), 10/mês (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "Limite de 800 minutos de armazenamento",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Máx. 30 horas/mês",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Oculto nos termos & condições",
      comparisonGoodLabel: "O Que Nós Fazemos",
      comparisonGoodTitle: "Realmente Ilimitado",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Sem limites mensais de minutos",
      comparisonGoodItem1Text: "nunca",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Uploads ilimitados de arquivos",
      comparisonGoodItem2Text: "sempre",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Sem limites de armazenamento",
      comparisonGoodItem3Text: "nenhum",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Upload em lote de 50 arquivos",
      comparisonGoodItem4Text: "quando quiser",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Política transparente",
      comparisonGoodItem5Text: "desde o início",
      feature1Label: "Sem Limites",
      feature1TitlePart1: "Transcrever 1.000 Horas?",
      feature1TitlePart2: "Mesmo Preço.",
      feature1Description:
        "Pare de contar minutos. Pare de observar limites. Seja 10 horas ou 10.000 horas por mês, você paga a mesma taxa fixa. Sem custos extras. Sem surpresas na fatura.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Sem truques de política de "uso justo"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Sem redução após X horas",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Sem ansiedade no fim do mês",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Horas Mensais",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Taxas Excedentes",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Envie a Qualquer Hora",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparente",
      feature2Label: "Liberdade em Massa",
      feature2TitlePart1: "Envie Seu",
      feature2TitlePart2: "Arquivo Inteiro",
      feature2Description:
        "Otter oferece 3 importações vitalícias no gratuito, 10 por mês no Pro. Nós oferecemos ilimitado. Envie seu backlog de podcasts, todas as entrevistas, anos de gravações. Sem restrições.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 arquivos por lote",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Arquivos de 10 horas suportados",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Processe enquanto dorme",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 importações vitalícias",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 arquivos/mês",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Limite de 50 horas/mês",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Verdadeiramente Ilimitado ✓",
      feature3Label: "Prova Social",
      feature3TitlePart1: "Usuários Estão",
      feature3TitlePart2: "Migrando Diariamente",
      feature3Description:
        '"Eu pago $100/ano pelo Otter e eles me limitam a 10 importações por mês. No momento em que houver uma alternativa com importações ilimitadas, eu mudo!" - Usuário real do Reddit',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000+ usuários migraram",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Da "shrinkflation" do Otter',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Nunca voltando",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Usuários Satisfeitos",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Arquivos Processados",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Precisão",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Sem Taxas Ocultas",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutos/Mês",
      trustBadge2Number: "100+",
      trustBadge2Label: "Idiomas",
      trustBadge3Number: "96%",
      trustBadge3Label: "Precisão",
      trustBadge4Number: "50",
      trustBadge4Label: "Upload em Lote",
      ctaTitle: "Pare de Pagar por Ilimitado Falso",
      ctaSubtitle:
        "Junte-se a milhares que migraram para transcrição verdadeiramente ilimitada",
      finalCta: "Experimente o NeverCap Grátis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Liberdade de Upload em Massa",
      heroTitleLine1: "Carregue 50 Arquivos.",
      heroTitleHighlight: "Processe Tudo.",
      heroSubtitle:
        "Otter oferece 3 importações vitalícias. TRÊS. Para toda a sua vida. Nós oferecemos uploads ilimitados, 50 arquivos por vez, quando você precisar.",
      primaryCta: "Iniciar Upload em Massa →",
      secondaryCta: "Ver os Limites",
      redditQuote:
        '"Tenho 3 anos de episódios de podcast para transcrever. Otter me diz que tenho 3 importações vitalícias. TRÊS. Isso é insultante."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Frustração real do r/podcasting",
      comparisonSectionTitlePart1: "Os",
      comparisonSectionTitleHighlight: "Limites Ridículos",
      comparisonSectionTitlePart2: "Que Eles Impõem",
      comparisonSubtitle:
        "Como os concorrentes restringem sua capacidade de processar conteúdo",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importações vitalícias",
      limitCard1DescriptionLine2: "(Sim, para TODA a sua vida)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Arquivos por mês",
      limitCard2DescriptionLine2: "(Plano de $100/ano)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Arquivo por vez",
      limitCard3DescriptionLine2: "(Upload sequencial)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Uploads ilimitados",
      limitCard4DescriptionLine2: "50 arquivos por lote",
      feature1Label: "Poder em Lote",
      feature1TitlePart1: "Processe Seu",
      feature1TitleHighlight: "Arquivo Inteiro",
      feature1TitlePart2: "Durante a Noite",
      feature1Description:
        'Carregue 50 arquivos antes de dormir. Acorde com transcrições completas. Sem filas, sem espera, sem mensagens de "atualize seu plano". Puro poder de processamento na ponta dos seus dedos.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 uploads simultâneos",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Processamento paralelo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Arquivos de 10 horas suportados",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Máximo de 5GB por arquivo",
      uploadAnimationText1: "50 Arquivos",
      uploadAnimationText2: "Solte & Processe",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 arquivos adicionais...",
      feature2Label: "Velocidade",
      feature2TitlePart1: "Do Envio até",
      feature2TitleHighlight: "Pronto em Horas",
      feature2Description:
        "Nossa infraestrutura de processamento paralelo significa que seus 50 arquivos não ficam na fila. Todos são transcritos simultaneamente. O que levava semanas agora leva horas.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Arquivo de 1 hora: 5 minutos",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 arquivos: processados em paralelo",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notificação por e-mail quando concluído",
      timelineStep1Icon: "1",
      timelineStep1Title: "Enviar",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Processando",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "Mágica da IA",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Concluído",
      timelineStep4Time: "< 2 horas",
      feature3Label: "Liberdade",
      feature3TitlePart1: "Sem Filas.",
      feature3TitleHighlight: "Sem Espera.",
      feature3TitlePart2: "Sem Limites.",
      feature3Description:
        'Enquanto outros fazem você esperar em filas virtuais ou pedem upgrades para "processamento prioritário", tratamos cada envio com urgência. Seu conteúdo importa e não deve esperar.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Sem níveis de prioridade",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Mesma velocidade para todos",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Envie a qualquer hora, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Sempre Pronto",
      feature3VisualSubtext: "Envie quando a inspiração surgir",
      useCasesTitlePart1: "Perfeito para",
      useCasesTitleHighlight: "Grandes Enviadores",
      useCasesSubtitle: "Cenários reais onde envio em massa salva o dia",
      useCase1Title: "Arquivos de Podcast",
      useCase1Description:
        "Envie 3 anos de episódios de uma vez. Crie transcrições para todo o seu catálogo. Gere conteúdo SEO para cada episódio.",
      useCase2Title: "Criação de Cursos",
      useCase2Description:
        "Processe todos os seus vídeos de aula simultaneamente. Crie transcrições acessíveis para alunos. Construa materiais de curso pesquisáveis.",
      useCase3Title: "Acúmulo de Entrevistas",
      useCase3Description:
        "Limpe aquela pilha de entrevistas não transcritas. Processe semanas de pesquisa em horas. Cumpra prazos sem desespero.",
      useCase4Title: "Biblioteca do YouTube",
      useCase4Description:
        "Gere legendas para todo o seu canal. Crie posts de blog a partir de vídeos. Melhore o SEO em todos os vídeos.",
      useCase5Title: "Arquivos de Reuniões",
      useCase5Description:
        "Carregue meses de reuniões gravadas. Crie anotações de reunião pesquisáveis. Nunca mais perca decisões importantes.",
      useCase6Title: "Dados de Pesquisa",
      useCase6Description:
        "Processe grupos de foco em massa. Transcreva todas as entrevistas com participantes. Analise dados qualitativos com eficiência.",
      ctaTitle: "Pare de Pedir Mais Uploads",
      ctaSubtitle:
        "Tenha processamento em massa ilimitado que realmente funciona",
      finalCta: "Carregar 50 Arquivos Agora →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Precisão Líder do Setor",
      heroTitleLine1: "96% de Precisão.",
      heroTitleHighlight: "Cada Palavra Importa.",
      heroSubtitle:
        "Precisão líder do setor em 12 idiomas principais. Timestamps em nível de palavra para sincronização perfeita. Identificação inteligente de falantes que lida com conversas rápidas. Formatação profissional realmente legível.",
      primaryCta: "Teste Nossa Precisão →",
      secondaryCta: "Ver Idiomas",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Precisão em",
      statCard1DescriptionLine2: "12 Idiomas Principais",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Precisão com",
      statCard2DescriptionLine2: "Sotaques & Dialetos",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Nível de Palavra",
      statCard3DescriptionLine2: "Precisão de Timestamp",
      languageSectionTitlePart1: "96% de Precisão",
      languageSubtitle:
        "Transcrição de nível profissional para conteúdo global",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Inglês",
      languageCard1Accuracy: "96% de Precisão",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Espanhol",
      languageCard2Accuracy: "96% de Precisão",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarim",
      languageCard3Accuracy: "96% de Precisão",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Francês",
      languageCard4Accuracy: "96% de Precisão",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Alemão",
      languageCard5Accuracy: "96% de Precisão",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japonês",
      languageCard6Accuracy: "96% de Precisão",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Coreano",
      languageCard7Accuracy: "96% de Precisão",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Português",
      languageCard8Accuracy: "96% de Precisão",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russo",
      languageCard9Accuracy: "96% de precisão",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiano",
      languageCard10Accuracy: "96% de precisão",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Holandês",
      languageCard11Accuracy: "96% de precisão",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Árabe",
      languageCard12Accuracy: "96% de precisão",
      moreLanguagesText: "+ 88 idiomas suportados com 95%+ de precisão",
      feature1Label: "Precisão",
      feature1TitlePart1: "Nível de Palavra",
      feature1TitleHighlight: "Timestamps",
      feature1Description:
        "Cada palavra está perfeitamente sincronizada com sua posição no áudio. Crie transcrições clicáveis, gere legendas precisas ou vá para momentos exatos em suas gravações. Precisão de 100ms confiável para profissionais.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precisão de timestamp de 100ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfeito para edição de vídeo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Transcrições interativas clicáveis",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Legendas com precisão de quadro",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Locutor 1",
      transcriptLine1Text: "Bem-vindo ao episódio de hoje do podcast.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Locutor 2",
      transcriptLine2Text: "Obrigado por me receber no programa!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Locutor 1",
      transcriptLine3Text: "Vamos direto ao nosso tópico principal...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Locutor 2",
      transcriptLine4Text: "Com certeza, estou animado para discutir isso.",
      feature2Label: "IA Inteligente",
      feature2TitlePart1: "Lida com",
      feature2TitleHighlight: "Conversas Rápidas",
      feature2Description:
        "Nossa IA identifica com precisão os locutores, mesmo durante fala sobreposta, interrupções e conversas rápidas. Perfeito para entrevistas, podcasts e reuniões onde os participantes frequentemente interrompem.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifica até 20 locutores",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Lida perfeitamente com interrupções",
      feature2Point3Icon: "Funciona com fala sobreposta",
      feature2Point3Text: "✓",
      feature2Point4Icon: "Mantém precisão em conversas cruzadas",
      feature2Point4Text: "20",
      feature2VisualNumber: "Locutores Identificados",
      feature2VisualTitle: "✓",
      feature2VisualSubtext: "Mesmo em conversas rápidas",
      feature3Label: "Legibilidade",
      feature3TitlePart1: "Perfeitamente",
      feature3TitleHighlight: "Texto Formatado",
      feature3Description:
        "Chega de blocos de texto. Nossa IA adiciona parágrafos, frases e pontuação exatamente onde devem estar. O resultado? Transcrições realmente agradáveis de ler e fáceis de visualizar.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Quebras de parágrafo inteligentes",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Pontuação precisa",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Capitalização adequada",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Saída limpa e escaneável",
      formattingTitle: "Antes & Depois",
      formattingBeforeLabel: "❌ Outros:",
      formattingBeforeText:
        "então hoje vamos falar sobre os novos recursos em que estamos trabalhando acho que você vai gostar muito eles foram solicitados pelos usuários há muito tempo e finalmente os concluímos",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText:
        "Então hoje, vamos falar sobre os novos recursos em que estamos trabalhando. Acho que você vai gostar muito. Eles foram solicitados pelos usuários há muito tempo, e finalmente os concluímos.",
      comparisonSubtitle: "Precisão",
      comparisonSectionTitle: "Comparação",
      comparisonDes: "Veja como nos comparamos à concorrência",
      tableHeader1: "Recurso",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Precisão (Áudio Claro)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Timestamps em Nível de Palavra",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identificação de Locutor",
      tableRow3NeverCap: "20 locutores",
      tableRow3Otter: "16 locutores",
      tableRow3Descript: "10 locutores",
      tableRow3Rev: "✕",
      tableRow4Feature: "Lida com Sobreposição de Voz",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limitado",
      tableRow4Descript: "Limitado",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formatação Inteligente",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Básico",
      tableRow6Feature: "12 Idiomas com 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Experimente 96% de Precisão",
      ctaSubtitle: "Envie seu áudio mais desafiador e veja a diferença",
      finalCta: "Teste Nossa Precisão Agora →",
      languageSectionTitlePart2: "em 12 Idiomas Principais"
    }
  },
  Pricing: {
    Hero: {
        "title": "Preços Simples e Transparentes",
        "highlighted_text": "Sem Limites Ocultos",
        "description": "Escolha o plano que atende suas necessidades. Atualize ou reduza quando quiser. Sem contratos, sem surpresas."
    },
    Cards: {
      plans: [
              {
                name: "Grátis",
                price: "$0",
                period: "mês",
                discount: "Perfeito para experimentar nosso serviço",
                limits: {
                  title: "Limites Diários",
                  items: [
                    "3 arquivos/dia (≈90 min total/dia)",
                    "Até 30 min por arquivo (≤250 MB)",
                    "Enviar 1 arquivo por vez",
                    "Fila de prioridade padrão"
                  ]
                },
                features: {
                  title: "Recursos",
                  items: [
                    "100+ idiomas",
                    "Identificação de falantes",
                    "Tradução",
                    "Todos os formatos de exportação"
                  ]
                },
                cta: {
                  text: "Comece grátis. Sem cartão de crédito.",
                  button: "Plano Atual"
                }
              },
              {
                name: "Pro Mensal",
                price: "$17.99",
                period: "mês",
                discount: "$9.99 no primeiro mês",
                limits: {
                  title: "Sem limite mensal",
                  items: [
                    "Minutos ilimitados",
                    "Até 10 horas / 5 GB por arquivo",
                    "Envie 50 arquivos de uma vez",
                    "Fila prioritária"
                  ]
                },
                features: {
                  title: "Tudo do Grátis, mais",
                  items: [
                    "Timestamps por palavra",
                    "Identificação avançada de falantes",
                    "Parágrafos e pontuação formatados",
                    "Suporte prioritário"
                  ]
                },
                cta: {
                  text: "Minutos ilimitados. Prioridade na velocidade. Envios em lote.",
                  button: "Assinar Pro"
                },
                badge: "Mais Popular"
              },
              {
                name: "Pro Anual",
                price: "$8.99",
                period: "mês",
                discount: "Cobrança anual $107.88",
                limits: {
                  title: "Igual ao Pro Mensal",
                  items: [
                    "Minutos ilimitados",
                    "Até 10 horas / 5 GB por arquivo",
                    "Envie 50 arquivos de uma vez",
                    "Fila prioritária"
                  ]
                },
                features: {
                  title: "Tudo do Grátis, mais",
                  items: [
                    "Timestamps por palavra",
                    "Identificação avançada de falantes",
                    "Parágrafos e pontuação formatados",
                    "Suporte prioritário"
                  ]
                },
                cta: {
                  text: "Minutos ilimitados. Prioridade na velocidade. Envios em lote.",
                  button: "Assinar Pro"
                },
                badge: "Melhor Valor - "
              }
            ],
        "title": "Preços Simples e Transparentes.",
        "highlighted_text": "Sem Limites Ocultos.",
        "description": "Escolha o plano que atende suas necessidades. Atualize ou reduza quando quiser. Sem contratos, sem surpresas.",
        "disclaimer": '"Ilimitado" significa sem limite mensal e sem lentidão artificial. Uso justo aplica-se a automação abusiva ou redistribuição.'
    },
    ComparisonTable: {
      header: {
        title: "Comparar",
        highlighted_text: "Todos os Recursos",
        subtitle:
          "Veja exatamente o que você ganha com cada plano. Sem limitações ocultas."
      },
      plans: [
              "Recursos",
              "Grátis",
              "Pro Mensal",
              "Pro Anual"
            ],
      features: [
            {
              name: "Preço",
              values: [
                "$0/mês",
                {
                  main: "$17.99/mês",
                  note: "$9.99 primeiro mês"
                },
                {
                  main: "$8.99/mês",
                  note: "Cobrado $107.88/ano"
                }
              ]
            },
            {
              name: "Minutos mensais",
              values: ["~2.700 (90/dia)", "Ilimitado", "Ilimitado"]
            },
            {
              name: "Duração máxima do arquivo",
              values: ["30 minutos", "10 horas", "10 horas"]
            },
            {
              name: "Tamanho máximo do arquivo",
              values: ["250 MB", "5 GB", "5 GB"]
            },
            {
              name: "Envios em lote",
              values: ["1 arquivo", "50 arquivos", "50 arquivos"]
            },
            {
              name: "Velocidade de processamento",
              values: ["Padrão", "Prioritário", "Prioritário"]
            },
            {
              name: "Idiomas suportados",
              values: ["100+ idiomas", "100+ idiomas", "100+ idiomas"]
            },
            {
              name: "Tradução",
              values: ["true", "true", "true"]
            },
            {
              name: "Identificação de locutor",
              values: ["Básico", "Avançado (20 locutores)", "Avançado (20 locutores)"]
            },
            {
              name: "Timestamps por palavra",
              values: ["false", "true", "true"]
            },
            {
              name: "Parágrafos formatados",
              values: ["false", "true", "true"]
            },
            {
              name: "Formatos de exportação",
              values: ["Todos os formatos", "Todos os formatos", "Todos os formatos"]
            },
            {
              name: "Suporte",
              values: ["E-mail", "E-mail prioritário", "E-mail prioritário"]
            },
            {
              name: "Retenção de dados",
              values: ["30 dias", "Para sempre", "Para sempre"]
            }
          ],
    },
    FAQ: {
      items: [
              {
                q: "unlimited_policy",
                question: "É realmente ilimitado?",
                answer: "Sim! Os planos Pro não têm limites mensais de minutos. As únicas limitações são técnicas: duração máxima de arquivo de 10 horas e tamanho de arquivo de 5GB. Você pode processar quantos arquivos precisar."
              },
              {
                q: "plan_change",
                question: "Posso mudar de plano a qualquer momento?",
                answer: "Absolutamente! Você pode cancelar sua assinatura a qualquer momento no seu painel. Faça upgrade ou downgrade quando precisar."
              },
              {
                q: "payment_methods",
                question: "Quais métodos de pagamento são aceitos?",
                answer: "Aceitamos todos os cartões de crédito, débito e PayPal para pagamentos seguros e sem complicações."
              },
              {
                q: "free_trial",
                question: "Há um teste gratuito para o Pro?",
                answer: "Sim! Experimente o Pro gratuitamente por 7 dias, sem necessidade de cartão de crédito. Além disso, ganhe 45% de desconto no primeiro mês ao assinar."
              },
              {
                q: "file_retention",
                question: "Por quanto tempo meus arquivos são mantidos?",
                answer: "Plano gratuito: 30 dias. Planos Pro: Para sempre! Suas transcrições estão sempre disponíveis em sua conta."
              },
              {
                q: "data_security",
                question: "E a segurança dos dados?",
                answer: "Somos certificados SOC 2 e usamos criptografia de 256 bits. Nunca usamos seu conteúdo para treinar nossos modelos. Seus dados são seus."
              }
            ],
        "title": "Perguntas",
        "titleHighligt": "Frequentes",
    },
    CTA: {
        "title": "Pronto para ser Ilimitado?",
        "subtitle": "Junte-se a 50.000+ profissionais transcrevendo sem limites",
        "button": "Experimente o NeverCap Grátis →",
        "disclaimer": "Sem cartão de crédito • Comece a transcrever em segundos"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Construído para",
      heavyUsers: "Usuários Pesados",
      whoActuallyNeed: "Que Realmente Precisam de Ilimitado",
      heroSubtitle:
        "De podcasters com anos de backlog a pesquisadores com centenas de entrevistas. Veja como os profissionais usam o NeverCap para se libertar dos limites de upload e de minutos.",
      podcasters: {
        title: "Podcasters",
        pain: '"Pare de escolher quais episódios merecem transcrições"',
        description:
          "Carregue todo o seu arquivo de podcast de uma vez. Gere notas do programa, melhore o SEO e reutilize conteúdo sem contar minutos.",
        benefits: {
          benefit1: "Carregue todos os episódios, não apenas 3",
          benefit2: "Gere notas do programa otimizadas para SEO",
          benefit3: "Crie arquivos pesquisáveis",
          benefit4: "Reutilize em conteúdo para blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episódios"
          },
          stat2: {
            number: "200hrs",
            label: "Economizadas"
          },
          stat3: {
            number: "3x",
            label: "Tráfego SEO"
          }
        }
      },
      journalists: {
        title: "Jornalistas & Escritores",
        pain: '"Pressão de prazo encontra restrições de upload"',
        description:
          "Faça upload em lote de todas as entrevistas antes do prazo. Pesquise transcrições instantaneamente e nunca perca uma citação crucial.",
        benefits: {
          benefit1: "Upload em lote antes dos prazos",
          benefit2: "Pesquise todas as entrevistas de uma vez",
          benefit3: "Citações precisas com timestamps",
          benefit4: "Lida com sotaques e idiomas"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Entrevistas/mês"
          },
          stat2: {
            number: "96%",
            label: "Precisão"
          },
          stat3: {
            number: "5min",
            label: "Por Hora"
          }
        }
      },
      contentCreators: {
        title: "Criadores de Conteúdo",
        pain: '"Acessibilidade não deve ser cara"',
        description:
          "Legende todo o seu canal do YouTube. Gere legendas em vários idiomas e melhore o SEO dos seus vídeos instantaneamente.",
        benefits: {
          benefit1: "Legende todos os vídeos de uma vez",
          benefit2: "249 traduções de idiomas",
          benefit3: "Arquivos SRT prontos para YouTube",
          benefit4: "Aumente o ranking de SEO de vídeo"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Vídeos"
          },
          stat2: {
            number: "100+",
            label: "Idiomas"
          },
          stat3: {
            number: "249",
            label: "Traduções"
          }
        }
      },
      researchers: {
        title: "Pesquisadores & Acadêmicos",
        pain: '"Dados qualitativos não devem esperar na fila"',
        description:
          "Processe estudos de pesquisa inteiros de uma vez. Lide com grupos de foco, entrevistas e discussões em painel com identificação perfeita de falantes.",
        benefits: {
          benefit1: "Processe grupos de foco em massa",
          benefit2: "Identificação de 20 falantes",
          benefit3: "Exporte para software de análise",
          benefit4: "Segurança em conformidade com GDPR"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Estudo"
          },
          stat2: {
            number: "96%",
            label: "Precisão do Grupo"
          },
          stat3: {
            number: "GDPR",
            label: "Conformidade"
          }
        }
      },
      businessTeams: {
        title: "Equipes Empresariais",
        pain: '"Gravações de reuniões devem ser sem esforço"',
        description:
          "Grave reuniões diretamente ou envie arquivos de áudio para transcrição instantânea. Crie arquivos pesquisáveis de conversas ilimitadas e nunca mais perca discussões importantes.",
        benefits: {
          benefit1: "Gravação & transcrição direta de áudio",
          benefit2: "Gravações ilimitadas de reuniões",
          benefit3: "Arquivo de reuniões pesquisável",
          benefit4: "Envie arquivos de áudio instantaneamente"
        },
        stats: {
          stat1: {
            number: "Ao Vivo",
            label: "Gravando"
          },
          stat2: {
            number: "Instantâneo",
            label: "Enviar"
          },
          stat3: {
            number: "20+",
            label: "Palestrantes"
          }
        }
      },
      educators: {
        title: "Educadores",
        pain: '"Vídeos do YouTube precisam de transcrição instantânea"',
        description:
          "Simplesmente cole links do YouTube para obter transcrições instantâneas e legendas automáticas. Transforme qualquer vídeo educacional em conteúdo acessível e pesquisável.",
        benefits: {
          benefit1: "Transcrição direta de links do YouTube",
          benefit2: "Gerar legendas automáticas",
          benefit3: "Transcrever cursos inteiros",
          benefit4: "Arquivos de aulas pesquisáveis"
        },
        stats: {
          stat1: {
            number: "1 Clique",
            label: "Colar YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Legendas"
          },
          stat3: {
            number: "100+",
            label: "Idiomas"
          }
        }
      },
      quotes: {
        title: "Usuários Reais,",
        titleHighlight: "Liberdade Real",
        subtitle: "Ouça profissionais que se libertaram de limites artificiais",
        testimonials: {
          mike: {
            textBefore: '"Eu tinha',
            highlight: "3 anos de episódios",
            textAfter:
              'sem transcrição. Otter queria que eu escolhesse 3. TRÊS. NeverCap me deixou enviar todos os 150 episódios em um fim de semana."',
            name: "Mike Rodriguez",
            role: "Apresentador de Podcast"
          },
          jessica: {
            textBefore: '"Como jornalista freelancer, não posso pagar os',
            highlight: "$100/mês",
            textAfter:
              'do Trint, mas também não consigo trabalhar com o limite de 10 arquivos por mês do Otter. NeverCap salvou minha carreira."',
            name: "Jessica Park",
            role: "Jornalista Freelancer"
          },
          sarah: {
            textBefore: '"Nossa equipe de pesquisa tinha',
            highlight: "200 horas",
            textAfter:
              'de gravações de grupos focais. Processamos tudo em um fim de semana em vez de racionar minutos mensais."',
            name: "Dra. Sarah Chen",
            role: "Pesquisadora Líder"
          },
          carlos: {
            textBefore:
              '"Eu crio conteúdo educacional em espanhol. NeverCap transcreve perfeitamente e',
            highlight: "traduz para inglês",
            textAfter: 'para maior alcance. Sem limites, apenas crescimento."',
            name: "Carlos Martinez",
            role: "Educador do YouTube"
          }
        }
      },
      industries: {
        title: "Confiável em",
        titleHighlight: "Indústrias",
        subtitle:
          "Profissionais em todo lugar estão migrando para o verdadeiro ilimitado",
        list: {
          media: "Mídia e Publicação",
          education: "Educação",
          healthcare: "Saúde",
          technology: "Tecnologia",
          finance: "Finanças",
          legal: "Jurídico"
        }
      },
      cta: {
        title: "Seu Caso de Uso Também Precisa de Ilimitado",
        subtitle:
          "Junte-se a 50.000+ profissionais que pararam de contar minutos e começaram a criar",
        button: "Comece Sua Jornada Ilimitada →"
      }
    },
    Podcasters: {
      badge: "Criado para Podcasters",
      heroTitle: "Transcreva Seu",
      heroTitleHighlight: "Arquivo Completo de Podcast",
      heroSubtitle:
        "Envie todo seu catálogo. Crie notas de show para cada episódio. Chega de escolher quais episódios transcrever.",
      ctaPrimary: "Comece a Transcrever Grátis",
      ctaSecondary: "Veja Como Funciona",
      trustBadge1: "10.000+ Podcasters",
      trustBadge2: "Episódios Ilimitados",
      trustBadge3: "Transcrições Prontas para SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Episódios/Mês"
        },
        stat2: {
          number: "50",
          label: "Upload em Lote"
        },
        stat3: {
          number: "10hrs",
          label: "Duração Máxima do Episódio"
        },
        stat4: {
          number: "96%",
          label: "Precisão"
        }
      },
      problemTitle: "O",
      problemTitleHighlight: "Problema da Transcrição de Podcast",
      problemSubtitle:
        'Outros serviços fazem você escolher quais episódios "valem" a pena transcrever',
      problems: {
        problem1: {
          title: "Limites de Upload Matam Arquivos",
          description:
            "Otter oferece 3 importações vitalícias no gratuito, 10 por mês no Pro. Como transcrever 3 anos de episódios?"
        },
        problem2: {
          title: "Perdendo Oportunidades de SEO",
          description:
            "Cada episódio não transcrito é tráfego SEO perdido. Mas o Descript limita você a 30 horas/mês no máximo."
        },
        problem3: {
          title: "Custos Disparam com o Crescimento",
          description:
            "Conforme seu podcast cresce, os custos de transcrição disparam. Taxas extras de $2/hora tornam a expansão impossível."
        }
      },
      solutionTitle: "A",
      solutionTitleHighlight: "Solução NeverCap",
      solutionDescription:
        "Transcrição verdadeiramente ilimitada. Envie todo seu arquivo. Transcreva cada novo episódio. Gere notas de show em escala. Sem limites, apenas crescimento.",
      workflowTitle: "Seu Fluxo de Trabalho de Podcast,",
      workflowTitleHighlight: "Simplificado",
      workflowSubtitle:
        "Da gravação a notas de show otimizadas para SEO em minutos",
      workflow: {
        step1: {
          title: "Enviar Episódios",
          description:
            "Envie 50 episódios de uma vez. MP3, MP4, WAV - nós lidamos com todos."
        },
        step2: {
          title: "IA Transcreve",
          description:
            "96% de precisão com identificação de falantes. Perfeito para entrevistas."
        },
        step3: {
          title: "Formatação Inteligente",
          description:
            "IA adiciona parágrafos, frases e pontuação automaticamente."
        },
        step4: {
          title: "Publicar & Classificar",
          description: "Exporte para seu site. Veja seu tráfego SEO crescer."
        }
      },
      featuresTitle: "Recursos que Podcasters",
      featuresTitleHighlight: "Realmente Precisam",
      featuresSubtitle: "Criado por podcasters, para podcasters",
      features: {
        feature1: {
          title: "Detecção de Múltiplos Locutores",
          description:
            "Identifica e rotula automaticamente até 20 locutores. Perfeito para debates, entrevistas e programas com co-apresentadores."
        },
        feature2: {
          title: "Capítulos com Timestamp",
          description:
            "Gere timestamps clicáveis para descrições do YouTube. Permita que ouvintes saltem para seus segmentos favoritos instantaneamente."
        },
        feature3: {
          title: "Formatação Inteligente",
          description:
            "Adiciona parágrafos, frases e pontuação automaticamente. Obtenha transcrições limpas e legíveis. Economize horas na pós-produção."
        },
        feature4: {
          title: "Otimização SEO",
          description:
            "Transcrições formatadas para motores de busca. Aumente a visibilidade do seu podcast e alcance novos públicos."
        },
        feature5: {
          title: "100+ Idiomas",
          description:
            "Transcreva em qualquer idioma. Traduza para 249+ idiomas. Alcance audiências globais sem esforço."
        },
        feature6: {
          title: "Processamento em Lote",
          description:
            "Envie 50 episódios antes de dormir. Acorde com transcrições completas. Processe todo seu arquivo durante a noite."
        }
      },
      testimonialsTitle: "Podcasters que Fizeram",
      testimonialsTitleHighlight: "A Mudança",
      testimonialsSubtitle: "Histórias reais de podcasters reais",
      testimonials: {
        mike: {
          text: '"Faço podcast há 3 anos e transcrevia tudo manualmente como um idiota. Enviei 6 episódios de uma vez e separou perfeitamente eu e meu co-apresentador. O episódio na cafeteria que achei que estava arruinado? Transcrição cristalina. Nunca mais vou digitar isso tudo sozinho."',
          name: "Mike Rodriguez",
          role: 'Apresentador do Podcast "The Daily Grind"'
        },
        sarah: {
          text: '"O Otter me limitava a 10 importações por mês. Tinha 150 episódios acumulados. O NeverCap me permitiu enviar tudo em 3 lotes. Meu tráfego orgânico aumentou 300% desde que adicionei transcrições aos episódios antigos. Isso literalmente se paga."',
          name: "Sarah Chen",
          role: 'Criadora de "Tech Talks Today"'
        }
      },
      comparisonTitle: "Por que Podcasters Escolhem",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Veja como nos comparamos à concorrência",
      comparison: {
        headers: {
          feature: "Recurso",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Limite Mensal de Episódios",
            nevercap: "Ilimitado",
            otter: "~13 episódios (1200 min)",
            descript: "~30 episódios (30 hrs)"
          },
          uploadLimit: {
            feature: "Limite de Envio de Arquivos",
            nevercap: "Ilimitado",
            otter: "10 por mês",
            descript: "1 por vez"
          },
          batchProcessing: {
            feature: "Processamento em Lote",
            nevercap: "50 arquivos",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Duração Máxima do Episódio",
            nevercap: "10 horas",
            otter: "90 minutos",
            descript: "Ilimitado"
          },
          speakerDetection: {
            feature: "Detecção de Locutores",
            nevercap: "20 locutores",
            otter: "16 locutores",
            descript: "10 locutores"
          },
          smartFormatting: {
            feature: "Formatação Inteligente",
            nevercap: "✓ Perfeito",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Preço",
            nevercap: "$17.99/mês",
            otter: "$16.99/mês",
            descript: "$30/mês"
          }
        }
      },
      ctaTitle: "Comece a Transcrever Todos os Episódios",
      ctaSubtitle:
        "Junte-se a 10.000+ podcasters que nunca se preocupam com limites",
      ctaButton: "Carregue Seus Primeiros 50 Episódios Gratuitamente →",
      ctaDisclaimer:
        "Sem cartão necessário • Processe episódios ilimitados • Cancele quando quiser"
    },
    Journalists: {
      hero: {
        badge: "Para Jornalistas & Escritores",
        title: "Transcreva Todas as Entrevistas.",
        titleHighlight: "Nunca Perca uma Citação.",
        subtitle:
          "Pare de escolher quais entrevistas merecem transcrição. Carregue todas as gravações de uma vez, pesquise instantaneamente e cumpra prazos sem ansiedade.",
        ctaPrimary: "Comece Carregamentos Ilimitados →",
        ctaSecondary: "Veja Como Funciona",
        stats: {
          uploads: {
            number: "∞",
            label: "Arquivos Carregados"
          },
          accuracy: {
            number: "96%",
            label: "Precisão"
          },
          speed: {
            number: "5min",
            label: "Por Hora"
          }
        },
        dashboard: {
          title: "Fila de Entrevistas",
          status: "• Todos Processando",
          interviews: {
            cityCouncil: {
              title: "Reunião da Câmara Municipal",
              duration: "2h 15min • Carregando...",
              action: "Processando"
            },
            expertInterview: {
              title: "Entrevista com Especialista - Dr. Chen",
              duration: "45min • Transcrevendo...",
              action: "96% Concluído"
            },
            pressConference: {
              title: "Coletiva de Imprensa",
              duration: "1h 30min • Pronto",
              action: "Ver →"
            },
            phoneInterview: {
              title: "Entrevista por Telefone - Fonte",
              duration: "35min • Pronto",
              action: "Ver →"
            }
          }
        }
      },
      problem: {
        title: "O",
        titleHighlight: "Problema de Transcrição para Jornalistas",
        subtitle:
          'Outros serviços fazem você escolher quais entrevistas "valem" a transcrição',
        problems: {
          uploadLimits: {
            title: "Limites de Upload Matam Investigações",
            description:
              "Otter oferece 10 importações/mês no Pro. Como transcrever 3 semanas de entrevistas investigativas?"
          },
          missingQuotes: {
            title: "Perdendo Citações Cruciais",
            description:
              "Cada entrevista não transcrita pode conter a citação-chave. Mas o Trint limita você a 50 horas/mês no máximo."
          },
          costExplosion: {
            title: "Custos Disparam com Prazos",
            description:
              "À medida que sua investigação avança, os custos de transcrição disparam. Taxas extras de $100/mês tornam as notícias urgentes impossíveis."
          }
        },
        solution: {
          title: "A",
          titleHighlight: "Solução NeverCap",
          description:
            "Transcrição verdadeiramente ilimitada. Envie toda a sua investigação. Transcreva cada entrevista. Pesquise todas as citações instantaneamente. Sem limites, apenas jornalismo."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Melhor Software de Transcrição de Entrevistas",
        titleSuffix: "para Jornalistas",
        subtitle:
          "Vantagens reais que importam quando os prazos são apertados e a precisão é tudo",
        solutions: {
          unlimitedUploads: {
            label: "Volume Ilimitado",
            title: "Volume Ilimitado para Todas as Suas Entrevistas",
            description:
              "Diferente de softwares com limites de minutos, você pode transcrever cada entrevista, desde uma conversa rápida até discussões de várias horas. Nunca se preocupe em ficar sem créditos no prazo.",
            points: {
              simultaneousUpload: "Sem limites mensais de minutos",
              noLimits: "Suporte a entrevistas de 10 horas",
              processWhileWrite: "Processe investigações inteiras de uma vez",
              longRecordings: "Gravações de 10 horas suportadas"
            },
            visual: {
              number: "∞",
              label: "Sem Limites. Nunca."
            }
          },
          instantSearch: {
            label: "Velocidade Relâmpago",
            title: "Velocidade que Acompanha Seu Ciclo de Notícias",
            description:
              "Receba sua transcrição de entrevista em minutos, não dias. Finalize matérias mais rápido que nunca. Nossa IA processa horas de áudio enquanto você toma um café.",
            points: {
              searchAll:
                "Processamento de 5 minutos para entrevistas de 1 hora",
              wordTimestamps:
                "Processamento prioritário para matérias urgentes",
              jumpToMoments: "Acompanhamento em tempo real"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Por Hora de Áudio",
              results: {
                mayorInterview:
                  '"...nossa política climática irá transformar..."',
                expertPanel:
                  '"...a declaração de política mostra claramente..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Precisão Pronta para Citação",
            title: "Precisão que Você Pode Citar",
            description:
              "Nossa IA fornece transcrições altamente precisas, garantindo que as citações que você publica sejam precisas e confiáveis. Transcrição de nível profissional que os editores confiam.",
            points: {
              accuracyGuarantee: "Garantia de 96% de precisão",
              handlesAccents: "Lida com terminologia técnica",
              smartPunctuation: "Identificação perfeita de falantes"
            },
            visual: {
              accuracy: "96%",
              label: "Precisão Pronta para Publicação",
              transcript: {
                speaker1:
                  '"A investigação revelou discrepâncias significativas nos relatórios financeiros."',
                speaker2:
                  '"Você pode explicar melhor essas discrepâncias específicas?"'
              }
            }
          },
          ironclad: {
            label: "Proteção de Fontes",
            title: "Proteção de Fontes Inquebrável",
            description:
              "Oferecemos recursos de segurança robustos para proteger seus dados sensíveis de entrevista e fontes confidenciais. Criptografia de nível bancário mantém suas investigações seguras.",
            points: {
              accuracyGuarantee: "Criptografia de ponta a ponta",
              handlesAccents: "Opções de exclusão automática de arquivos",
              smartPunctuation: "Conformidade com GDPR e privacidade"
            },
            visual: {
              accuracy: "🔒",
              label: "Segurança Máxima"
            }
          }
        }
      },
      features: {
        title: "Tudo o que um",
        titleHighlight: "Jornalista Precisa",
        subtitle:
          "Ferramentas profissionais que respeitam seu fluxo de trabalho",
        featuresList: {
          languages: {
            title: "100+ Idiomas",
            description:
              "Entreviste fontes globalmente em 12 idiomas principais com 96% de precisão."
          },
          exportFormats: {
            title: "Formatos de Exportação",
            description:
              "Word, PDF, SRT, TXT. Compatível com qualquer fluxo de trabalho."
          },
          sourceProtection: {
            title: "Proteção de Fontes",
            description:
              "Criptografia de nível bancário. Suas fontes permanecem confidenciais."
          },
          timestamps: {
            title: "Carimbos de Tempo",
            description:
              "Clique em qualquer citação para ir ao momento exato do áudio."
          },
          teamSharing: {
            title: "Compartilhamento em Equipe",
            description:
              "Colabore com editores. Compartilhe transcrições com segurança."
          },
          mobileReady: {
            title: "Pronto para Mobile",
            description:
              "Envie do celular. Revise transcrições em qualquer lugar."
          },
          smartFormatting: {
            title: "Formatação Inteligente",
            description:
              "Parágrafos e pontuação automáticos para transcrições legíveis."
          },
          batchProcessing: {
            title: "Processamento em Lote",
            description:
              "Envie 50 arquivos de uma vez. Processe durante a noite enquanto você dorme."
          }
        }
      },
      testimonials: {
        jessica: {
          quote:
            '"Fiquei com 3 anos de entrevistas não transcritas por limites de upload. O NeverCap me permitiu processar tudo em um fim de semana. Mudou tudo."',
          name: "Jessica Park",
          role: "Jornalista Freelancer, Ex-Usuária do Otter"
        }
      },
      cta: {
        title: "Comece a Transcrever",
        titleHighlight: "Sem Limites",
        subtitle:
          "Junte-se a milhares de jornalistas que pararam de contar uploads e começaram a focar em histórias",
        ctaPrimary: "Experimente Ilimitado Grátis →",
        ctaSecondary: "Ver Preços"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Para Criadores de Conteúdo",
        title: "Transcreva Vídeos do YouTube,",
        titleHighlight: "Sem Limites",
        titleSuffix: "1",
        subtitle:
          "Seja para transcrever um vídeo do YouTube, um vídeo do TikTok para reutilização ou descobrir como transcrever um vídeo do Facebook para texto, nossa plataforma faz tudo perfeitamente. Gere legendas em 100+ idiomas sem limites mensais - pura liberdade criativa.",
        ctaPrimary: "Comece Legendagem Ilimitada →",
        ctaSecondary: "Veja Como Funciona",
        stats: {
          videos: {
            number: "∞",
            label: "Vídeos/Mês"
          },
          languages: {
            number: "100+",
            label: "Idiomas"
          },
          accuracy: {
            number: "96%",
            label: "Precisão"
          },
          platforms: {
            number: "10+",
            label: "Plataformas"
          }
        }
      },
      platforms: {
        title: "Buscar & Transcrever de Qualquer Plataforma",
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
        titleMax: "Transcreva Vídeos de",
        titleMaxHighlight: "Qualquer Plataforma"
      },
      features: {
        title: "Tudo Que Você Precisa para",
        titleHighlight: "Escalar Conteúdo",
        subtitle: "Ferramentas profissionais sem limites profissionais",
        oneClickImport: {
          label: "Importação com Um Clique",
          title: "Transcreva Vídeos do YouTube, TikTok &",
          titleHighlight: "Instagram Colando um Link",
          description:
            "Nossa ferramenta simplifica como você transcreve conteúdo de vídeo. Para transcrever um vídeo do Instagram, basta colar o link. Para transcrever um vídeo do Vimeo em texto, faça o mesmo. Processe todo o histórico do seu canal em um fim de semana.",
          points: {
            directYoutube: "Transcrição direta de links do YouTube",
            multiplePlatforms: "Obtenha de 10+ plataformas",
            batchPlaylists: "Processar playlists inteiras em lote",
            autoSync: "Sincronização automática com seus canais"
          },
          demo: {
            instruction: "Cole o URL do seu vídeo:",
            url: "https://youtube.com/watch?v=...",
            status: "Obtendo & Transcrevendo..."
          }
        },
        globalReach: {
          label: "Alcance Global",
          title: "100+ Idiomas.",
          titleHighlight: "Sem Limites.",
          description:
            "Alcance audiências globais com tradução automática para 100+ idiomas. Gere legendas em vários idiomas simultaneamente. Sem custos extras, sem limites mensais de traduções.",
          points: {
            highAccuracy: "96% de precisão em 12 idiomas principais",
            unlimitedTranslations: "Traduções ilimitadas incluídas",
            multicultural: "Perfeito para conteúdo multicultural",
            autoDetect: "Detecção automática do idioma de origem"
          },
          visual: {
            number: "100+",
            title: "Idiomas Suportados",
            subtitle: "Traduza uma vez, alcance todos"
          }
        },
        flexibleExport: {
          label: "Exportação Flexível",
          title: "Todos os Formatos",
          titleHighlight: "Que Você Precisa",
          description:
            "Exporte no formato que funciona para seu fluxo de trabalho. De arquivos SRT para YouTube a VTT para players web, ou documentos editáveis para roteiros. Todas as exportações ilimitadas, todas incluídas em cada plano.",
          points: {
            videoFormats: "SRT & VTT para plataformas de vídeo",
            editingFormats: "DOCX & PDF para edição",
            dataAnalysis: "CSV para análise de dados",
            simpleScripts: "TXT para roteiros simples"
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
        title: "Do Envio ao",
        titleHighlight: "Publicado",
        titleSuffix: "em Minutos",
        subtitle:
          "A maneira mais rápida de legendar todo o seu acervo de conteúdo",
        steps: {
          pasteLinks: {
            title: "Cole Links",
            description:
              "Insira links do YouTube, TikTok ou qualquer vídeo. Ou envie arquivos diretamente."
          },
          autoTranscribe: {
            title: "Auto-Transcrição",
            description:
              "IA processa com 96% de precisão. Lida com sotaques e múltiplos falantes."
          },
          editTranslate: {
            title: "Editar & Traduzir",
            description:
              "Aprimore suas legendas. Traduza para 100+ idiomas instantaneamente."
          },
          exportPublish: {
            title: "Exportar & Publicar",
            description:
              "Baixe em qualquer formato. Envie para sua plataforma. Pronto!"
          }
        }
      },
      testimonials: {
        title: "Criadores Estão",
        titleHighlight: "Migrando Diariamente",
        subtitle: "De planos limitados para liberdade ilimitada",
        carlos: {
          textBefore:
            "Eu crio conteúdo educacional em espanhol. NeverCap transcreve perfeitamente e",
          textAfter:
            "para maior alcance. Sem limites, apenas crescimento. Minhas visualizações triplicaram após adicionar legendas multilíngues.",
          highlight: "traduz para inglês",
          name: "Carlos Martinez",
          role: "Educador no YouTube • 250K inscritos"
        },
        sarah: {
          textBefore: "O Descript cobrava $30/mês por",
          textAfter:
            ". Eu tinha 500+ vídeos acumulados. O NeverCap me permitiu processar tudo em um final de semana. O impulso no SEO das legendas se pagou no primeiro mês.",
          highlight: "30 horas",
          name: "Sarah Lee",
          role: "Vlogger de Estilo de Vida • 180K inscritos"
        },
        jake: {
          textBefore: "O recurso de",
          textAfter:
            "mudou o jogo. Não baixo mais nada. Basta colar, transcrever, pronto. Processar meus clipes de podcast para o TikTok nunca foi tão fácil.",
          highlight: "captura direta do YouTube",
          name: "Jake Wilson",
          role: "Apresentador de Podcast • Top 1% de Criadores"
        },
        yuki: {
          textBefore: "Eu crio conteúdo em 5 idiomas. Outros serviços cobram",
          textAfter:
            ". O NeverCap me dá traduções ilimitadas. Meu público internacional cresceu 400% desde que comecei a usar legendas nativas adequadas.",
          highlight: "por tradução",
          name: "Yuki Tanaka",
          role: "Criador de Games • 500K inscritos"
        }
      },
      cta: {
        title: "Seu Canal Inteiro. Legendado. Hoje.",
        subtitle:
          "Junte-se a 50.000+ criadores que pararam de contar minutos e começaram a criar",
        button: "Comece Legendagem Ilimitada →"
      },
      FAQSection: {
        subtitle:
          "Tudo que você precisa saber sobre transcrever vídeos de diferentes plataformas",
        questions: [
                {
                  question: "P: Como transcrevo um vídeo do YouTube com o NeverCap?",
                  answer: "É simples. Encontre o vídeo do YouTube que deseja transcrever, copie a URL e cole em nosso app. Nossa IA buscará o vídeo automaticamente e fornecerá uma transcrição completa em minutos."
                },
                {
                  question: "P: Qual é a melhor forma de transcrever um vídeo do Facebook para texto?",
                  answer: "A forma mais fácil é usar um link direto. Copie a URL do vídeo do Facebook e nossa plataforma fará o resto, convertendo a fala em texto com até 96% de precisão, poupando você da transcrição manual."
                },
                {
                  question: "P: Posso transcrever vídeos do TikTok e Instagram?",
                  answer: "Com certeza. Suportamos transcrição para vídeos do TikTok e Instagram. Perfeito para criadores que querem reaproveitar conteúdo de vídeos curtos em posts de blog, artigos ou atualizações em redes sociais baseadas em texto."
                },
                {
                  question: "P: Como transcrevo um vídeo do Vimeo para texto?",
                  answer: "Transcrever vídeos do Vimeo é tão fácil quanto em outras plataformas. Simplesmente copie a URL do vídeo do Vimeo e cole no NeverCap. Nossa IA processará o vídeo e gerará uma transcrição precisa que você pode baixar em múltiplos formatos."
                }
              ],
          "title": "Suas Perguntas sobre Transcrição",
          "titleHighlight": "Respondido",
    }
    },
    Researchers: {
      heroBadge: "Criado para Excelência Acadêmica",
      heroTitle1: "Transcreva Todas as Entrevistas.",
      heroTitle2: "Analise Todos os Seus Dados.",
      heroSubtitle:
        "Pare de escolher quais grupos focais transcrever. Processe todos seus dados qualitativos com 96% de precisão e identificação perfeita de falantes - mesmo com 20 participantes falando ao mesmo tempo.",
      heroCtaPrimary: "Experimente Grátis - Sem Cartão",
      heroCtaSecondary: "Veja Como Funciona",
      statsInterviewHours: "Horas de Entrevista",
      statsAccuracy: "Precisão",
      statsSpeakersId: "ID de Falantes",
      statsCompliant: "Conformidade",
      problemTitle: "O",
      problemSubtitle:
        'Outros serviços fazem você escolher quais dados "valem" a pena transcrever',
      problemCard1Title: "Limites de Upload Arruínam Estudos",
      problemCard1Desc:
        "O Otter oferece 3 importações vitalícias. Como transcrever 200 horas de grupos focais?",
      problemCard2Title: "Dados Críticos Perdidos",
      problemCard2Desc:
        "Cada entrevista não transcrita pode conter insights revolucionários. Mas o Rev cobra $2/minuto no mínimo.",
      problemCard3Title: "Verba de Bolsas Desaparece",
      problemCard3Desc:
        "À medida que seu conjunto de dados cresce, os custos de transcrição disparam. US$ 500 por grupo focal torna o dimensionamento impossível.",
      solutionTitle: "Solução NeverCap",
      solutionDesc:
        "Transcrição verdadeiramente ilimitada. Carregue todo o seu estudo. Transcreva cada entrevista. Analise todos os seus dados. Sem limites, sem restrições, apenas pesquisa.",
      feature1Label: "Sem Limites",
      feature1Title: "Processe seu",
      feature1Desc:
        'Carregue todas as 200 horas de entrevistas hoje à noite. Acorde com transcrições completas e pesquisáveis. Sem limites mensais, sem restrições por arquivo, sem besteiras de "uso justo".',
      feature1Point1: "Carregar em lote 50 arquivos simultaneamente",
      feature1Point2: "Processe estudos longitudinais completamente",
      feature1Point3: "Sem limites de armazenamento em transcrições",
      feature1Point4: "Exportar para NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Horas Ilimitadas",
      feature1Visual2: "Mesmo preço para 10 ou 10.000 horas",
      feature2Label: "IA Inteligente",
      feature2Title: "Precisão garantida",
      feature2Desc:
        "Nossa IA rastreia até 20 falantes, mesmo quando estão falando ao mesmo tempo, interrompendo-se ou respondendo de uma vez. Cada voz é capturada e rotulada corretamente.",
      feature2Point1: "Identificação de 20 falantes",
      feature2Point2: "Lida com sobreposição e interrupções",
      feature2Point3: "Rótulos de falantes que você pode renomear",
      feature2Point4: "Timestamp para cada palavra",
      conversationParticipant1: "Participante 1",
      conversationText1:
        "A principal barreira que enfrentamos é definitivamente o custo do tratamento...",
      conversationParticipant2: "Participante 2",
      conversationText2: "Com certeza, mas eu acrescentaria que o acesso é—",
      conversationParticipant3: "Participante 3",
      conversationText3:
        "—desculpe interromper, mas o transporte também é enorme.",
      conversationText4: "Sim! Era exatamente isso que eu ia dizer.",
      conversationParticipant4: "Participante 4",
      conversationText5:
        "Em áreas rurais, são os três: custo, acesso E transporte.",
      feature3Label: "Precisão",
      feature3Title: "Confiável",
      feature3Desc:
        "Lida com jargões técnicos, sotaques fortes e terminologias específicas como um profissional. Precisão suficiente para publicação, revisão por pares e sua banca de dissertação.",
      feature3Point1: "Terminologia médica e científica",
      feature3Point2: "100+ idiomas e dialetos",
      feature3Point3: "Modos verbatim e leitura limpa",
      feature3Point4: "Editar e exportar em qualquer formato",
      feature3Visual1: "Precisão de Nível de Pesquisa",
      feature3Visual2: "Confiável por mais de 50.000 pesquisadores",
      feature4Label: "Segurança",
      feature4Title: "Certificação IRB",
      feature4Desc:
        "Seus dados de pesquisa sensíveis são protegidos com segurança de nível empresarial. Compatível com GDPR, opções prontas para HIPAA e trilhas de auditoria completas para requisitos de IRB.",
      feature4Point1: "Criptografia de ponta a ponta",
      feature4Point2: "Compatível com GDPR e CCPA",
      feature4Point3: "Políticas de exclusão automática",
      feature4Point4: "Colaboração segura em equipe",
      useCasesTitle: "Perfeito para",
      useCasesSubtitle: "De etnografia a ensaios clínicos",
      useCase1Title: "Grupos Focais",
      useCase1Desc:
        "Lida com 8-20 participantes com fala sobreposta. Identificação perfeita de falantes mesmo durante discussões acaloradas. Exporte diretamente para software de análise qualitativa.",
      useCase2Title: "Entrevistas em Profundidade",
      useCase2Desc:
        "Processe centenas de entrevistas individuais simultaneamente. Mantenha consistência em todo o seu conjunto de dados. Pesquise em todas as transcrições instantaneamente.",
      useCase3Title: "Pesquisa Clínica",
      useCase3Desc:
        "Opções compatíveis com HIPAA para entrevistas com pacientes. Transcrição precisa de terminologia médica. Manipulação segura de dados de saúde sensíveis.",
      useCase4Title: "Estudos Etnográficos",
      useCase4Desc:
        "Gravações em campo em ambientes naturais. Lida com ruídos de fundo e múltiplos falantes. Suporte para 100+ idiomas e dialetos.",
      useCase5Title: "Projetos de História Oral",
      useCase5Desc:
        "Preserve arquivos inteiros sem limites. Crie registros históricos pesquisáveis. Perfeito para estudos longitudinais e geracionais.",
      useCase6Title: "Pesquisa de Dissertação",
      useCase6Desc:
        "Preços acessíveis para estudantes com todos os recursos. Processe todo o seu conjunto de dados de forma econômica. Cumpra prazos apertados com processamento em lote.",
      testimonialTitle: "Confiado por",
      testimonialText:
        "Nossa equipe de pesquisa tinha 200 horas de gravações de grupos focais do nosso estudo de saúde comunitária. Outros serviços queriam que escolhêssemos quais sessões transcrever devido ao custo. O NeverCap nos permitiu processar tudo em um fim de semana. A identificação de 20 falantes realmente funcionou—mesmo durante nossas discussões mais caóticas, onde todos falavam ao mesmo tempo. Esta ferramenta mudou completamente como lidamos com dados qualitativos.",
      testimonialAuthorName: "Dra. Sarah Chen",
      testimonialAuthorRole: "Pesquisadora Líder, Instituto de Saúde Pública",
      ctaTitle: "Pare de Escolher Quais Dados Analisar",
      ctaSubtitle: "Junte-se a 50.000+ pesquisadores que transcrevem tudo",
      ctaButton: "Experimente o NeverCap Grátis",
      problemTitle2: "Problema de Transcrição em Pesquisas",
      title: "A",
      useCasesTitle2: "Todo Método de Pesquisa",
      testimonialTitle2: "Pesquisadores Líderes",
      feature1TitleHl: "Projeto de pesquisa completo",
      feature1TitlePost: "Solução completa",
      feature2TitleHl: "Entrevistas com grupos focais",
      feature2TitlePost: "Sucesso em cada etapa",
      feature3TitleHl: "96% de precisão",
      feature4TitleHl: "Segurança",
      testimonialText2Hl: "200 horas",
      testimonialText3:
        "de gravações de grupos focais do nosso estudo de saúde comunitária. Outros serviços queriam que escolhêssemos quais sessões transcrever devido ao custo. O NeverCap nos permitiu processar",
      testimonialText4Hl: "tudo em um fim de semana",
      testimonialText5:
        ". A identificação de 20 falantes realmente funcionou—mesmo nas discussões mais caóticas onde todos falavam ao mesmo tempo. Esta ferramenta",
      testimonialText6Hl: "mudou completamente",
      testimonialText7: "como lidamos com dados qualitativos."
    },
    BusinessTeams: {
      heroBadge: "Para Equipes de Negócios",
      heroTitle1: "Gravação de Reuniões",
      heroTitle2: "Feito com Facilidade",
      heroSubtitle:
        "Grave reuniões diretamente no seu navegador ou envie arquivos de áudio instantaneamente. Crie arquivos pesquisáveis de conversas ilimitadas. Nunca mais perca discussões importantes com transcrição verdadeiramente ilimitada.",
      heroCtaPrimary: "Comece a Gravar Agora →",
      heroCtaSecondary: "Veja Como Funciona",
      recordingStatus: "Gravando...",
      statsMeetingMinutes: "Ata da Reunião",
      statsLiveRecording: "Gravação",
      statsSpeakerID: "ID do Falante",
      statsInstantUpload: "Enviar & Processar",
      featuresTitle: "Transcrição para Todos os Negócios",
      featuresSubtitle:
        "Desde gravação ao vivo até envios instantâneos, eliminamos todos os pontos de atrito",
      feature1Title: "Grave Diretamente no Seu Navegador",
      feature1Desc:
        "Sem downloads, sem plugins. Comece a gravar instantaneamente com um clique. Qualidade de áudio perfeita, detecção automática de falantes.",
      feature1Benefit1: "Início da gravação com um clique",
      feature1Benefit2: "Sem instalação de software",
      feature1Benefit3: "Funciona em qualquer dispositivo",
      feature1Benefit4: "Transcrição em tempo real",
      feature1Visual1: "Clique & Grave",
      feature1Visual2: "Sem configuração necessária",
      feature2Title: "Envie Qualquer Arquivo de Áudio Instantaneamente",
      feature2Desc:
        "Tem gravações do Zoom, Teams ou do seu telefone? Envie-as instantaneamente. Suporte para todos os principais formatos de áudio e vídeo. Processe vários arquivos simultaneamente sem espera.",
      feature2Benefit1:
        "Suporta: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Capacidade de envio em lote",
      feature2Benefit3: "Arquivos de 10 horas suportados",
      feature2Benefit4: "Processe enquanto trabalha",
      feature2Visual1: "Arraste & Solte Arquivos",
      feature3Title: "Criado para Colaboração em Equipe",
      feature3Desc:
        "Compartilhe transcrições com sua equipe instantaneamente. Ouça gravações juntos, exporte transcrições em vários formatos e garanta que todos permaneçam alinhados com arquivos de reunião pesquisáveis.",
      feature3Benefit1: "Compartilhe transcrições com qualquer pessoa",
      feature3Benefit2: "Ouvir gravações originais",
      feature3Benefit3: "Exportar transcrições em vários formatos",
      feature3Benefit4: "Arquivos pesquisáveis para toda a equipe",
      feature3Visual1: "Membros da Equipe",
      feature3Visual2: "Colaboração ilimitada",
      feature4Title: "Encontre Qualquer Conversa Instantaneamente",
      feature4Desc:
        "Pesquise em todas as suas reuniões de uma vez. Encontre aquela decisão crucial do último trimestre ou aquele requisito do cliente de meses atrás. A pesquisa com IA entende o contexto, não apenas palavras-chave.",
      feature4Benefit1: "Pesquisar todas as reuniões de uma vez",
      feature4Benefit2: "IA entende o contexto",
      feature4Benefit3: "Filtrar por falante ou data",
      feature4SearchPlaceholder: "🔍 Pesquisar: 'Metas de receita Q4'",
      feature4SearchResults: "Encontrado em 3 reuniões:",
      feature4Meeting1: "Planejamento de Vendas - 15 de outubro",
      feature4Meeting1Text: '"...metas para Q4 definidas em $2M..."',
      feature4Meeting2: "Reunião de Diretoria - 20 de outubro",
      feature4Meeting2Text: '"...projeções de receita Q4..."',
      workflowTitle: "Como Transcrever uma",
      workflowSubtitle:
        "Um fluxo de trabalho perfeito que captura todos os momentos importantes",
      workflowStep1Title: "Gravar ou Carregar",
      workflowStep1Desc:
        "Comece a gravar ao vivo ou simplesmente baixe a gravação da reunião do Zoom, Google Meet ou Microsoft Teams",
      workflowStep2Title: "Transcrição Automática",
      workflowStep2Desc:
        "Nossa IA transcreverá automaticamente a gravação para texto com 96% de precisão em minutos",
      workflowStep3Title: "Colaborar",
      workflowStep3Desc: "Compartilhar, comentar e extrair itens de ação",
      workflowStep4Title: "Pesquisar & Analisar",
      workflowStep4Desc: "Encontre insights em todas as suas reuniões",
      testimonialsTitle: "Equipes Amam",
      testimonialsSubtitle:
        "Veja como as empresas transformam sua cultura de reuniões",
      testimonial1Text:
        '"Passamos de perder detalhes cruciais para ter um arquivo pesquisável de todas as conversas. O recurso de gravação direta significa que nunca esquecemos de capturar discussões importantes."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Gerente de Produto, TechCorp",
      testimonial2Text:
        '"Otter nos limitava a 10 uploads de arquivos por mês. Agora carregamos todas as chamadas de clientes instantaneamente. Mudou o jogo para os acompanhamentos da nossa equipe de vendas."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Diretora de Vendas, ConsultPro",
      testimonial3Text:
        '"A capacidade de pesquisar em meses de reuniões nos salvou durante nossa auditoria. Encontramos todas as decisões e aprovações em segundos."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Pare de Perder Conversas Importantes",
      ctaSubtitle:
        "Junte-se a milhares de equipes que capturam todas as reuniões com transcrição ilimitada",
      ctaButton: "Comece a Gravar Gratuitamente →",
      featuresTitle2: "Reunião",
      workflowTitle2: "Gravação do Zoom para Texto",
      testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Para Educadores & Professores",
      heroTitle1: "Torne o Aprendizado",
      heroTitle2: "Acessível para Todos",
      heroSubtitle:
        "Basta colar links do YouTube para obter transcrições instantâneas com legendas geradas automaticamente. Transforme palestras, tutoriais e vídeos educacionais em conteúdo pesquisável e acessível que todos os alunos podem aproveitar.",
      heroCtaPrimary: "Experimente Grátis - Sem Cartão de Crédito",
      heroCtaSecondary: "Assistir Demonstração",
      stats1Number: "1 Clique",
      stats1Label: "Transcrição do YouTube",
      stats2Number: "100+",
      stats2Label: "Idiomas Suportados",
      stats3Number: "∞",
      stats3Label: "Vídeos Ilimitados",
      stats4Number: "96%",
      stats4Label: "Taxa de Precisão",
      featuresTitle: "Tudo o que Educadores Precisam para",
      featuresSubtitle:
        "De palestras no YouTube a aulas gravadas, torne todo seu conteúdo acessível",
      feature1Title: "Links Instantâneos do YouTube e Plataformas",
      feature1Desc:
        "Basta colar qualquer link de vídeo e obter transcrições instantâneas. Funciona com YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive e mais. Sem downloads, sem espera.",
      feature1Point1:
        "Transcrição por link direto - sem necessidade de downloads",
      feature1Point2: "Suporte para todas as principais plataformas",
      feature1Point3: "Processar playlists inteiras de uma vez",
      feature1Point4: "Funciona com vídeos privados (com permissão)",
      feature2Title: "Legendas e Subtítulos Gerados Automaticamente",
      feature2Desc:
        "Crie legendas precisas instantaneamente para todos os seus vídeos educacionais. Torne o conteúdo acessível para alunos com deficiência auditiva, não nativos ou que preferem ler junto.",
      feature2Point1: "Formatos de exportação SRT, VTT e TXT",
      feature2Point2: "Timestamps por palavra para sincronização perfeita",
      feature2Point3: "Edite e personalize legendas facilmente",
      feature2Point4: "Envie diretamente de volta para o YouTube",
      feature2Visual1: "Traduções de Idioma",
      feature2Visual2: "Torne seu conteúdo acessível globalmente",
      feature3Title: "Organizar por Cursos e Categorias",
      feature3Desc:
        "Crie pastas para organizar suas transcrições por curso, disciplina ou semestre. Mantenha todo seu conteúdo educacional organizado e facilmente pesquisável. Construa uma biblioteca abrangente de materiais de curso acessíveis.",
      feature3Point1: "Crie pastas e subpastas ilimitadas",
      feature3Point2: "Marque vídeos por tópico ou nível de dificuldade",
      feature3Point3: "Organize várias transcrições em massa",
      feature3Point4: "Pesquise em todo seu conteúdo instantaneamente",
      feature3VisualTitle: "Sua Biblioteca de Cursos",
      feature3Folder1: "Matemática 101",
      feature3Folder2: "Aulas de Física",
      feature3Folder3: "Vídeos de Laboratório de Biologia",
      feature3Folder4: "Documentários de História",
      feature3Folder5: "Aprendizado de Idiomas",
      feature4Title: "IA Transcreve Arquivo de Áudio para Guia de Estudo",
      feature4Desc:
        "Não apenas compartilhe gravações. Transcreva automaticamente aulas para texto e outros arquivos de áudio em guias de estudo detalhados, completos com resumos e conceitos-chave para revisão eficaz dos alunos. Exporte em formatos TXT, DOCX ou PDF.",
      feature4Point1: "TXT para edição de texto simples",
      feature4Point2: "DOCX para documentos formatados",
      feature4Point3: "PDF para compartilhamento e impressão fáceis",
      feature4Point4: "Exporte vários arquivos em massa de uma vez",
      workflowTitle: "Como Funciona:",
      workflowSubtitle:
        "De link de vídeo para transcrição acessível e materiais de estudo em minutos",
      workflowStep1Title: "Carregue Sua Aula",
      workflowStep1Desc:
        "Carregue qualquer arquivo de áudio ou vídeo (MP3, MP4, WAV) ou cole um link do YouTube",
      workflowStep2Title: "Transcrição por IA",
      workflowStep2Desc:
        "Nossa IA transcreve o áudio, separa falantes e identifica tópicos-chave",
      workflowStep3Title: "Gerar Legendas",
      workflowStep3Desc:
        "Crie automaticamente legendas perfeitamente sincronizadas",
      workflowStep4Title: "Exportar Guia de Estudo",
      workflowStep4Desc:
        "Baixe o texto, resumo ou exporte para criar seu guia de estudo final",
      useCasesTitle: "Perfeito para Todas as",
      useCasesSubtitle:
        "Veja como educadores usam o NeverCap para melhorar o aprendizado",
      useCase1Title: "Aulas Gravadas",
      useCase1Text:
        "Transcreva semestres inteiros de aulas gravadas. Os alunos podem buscar tópicos específicos, revisar conceitos-chave e nunca perder informações importantes.",
      useCase2Title: "Cursos Online",
      useCase2Text:
        "Torne seus cursos online acessíveis para estudantes internacionais com traduções em 100+ idiomas. Aumente matrículas e satisfação.",
      useCase3Title: "Materiais de Estudo",
      useCase3Text:
        "Use IA para transcrever arquivos de áudio em guias de estudo a partir de videoaulas. Perfeito para alunos que preferem ler ou precisam revisar conteúdo rapidamente com texto pesquisável.",
      useCase4Title: "Conformidade de Acessibilidade",
      useCase4Text:
        "Atenda requisitos de acessibilidade fornecendo legendas e transcrições para todo conteúdo em vídeo. Garanta acesso igualitário para todos os alunos.",
      useCase5Title: "Sala de Aula Invertida",
      useCase5Text:
        "Compartilhe videoaulas com transcrições antes da aula. Os alunos podem revisar no próprio ritmo e vir preparados para discussões.",
      useCase6Title: "Pesquisa & Citações",
      useCase6Text:
        "Ajude alunos a citar fontes em vídeo com precisão usando marcas de tempo. Perfeito para projetos de pesquisa e trabalhos acadêmicos.",
      testimonialTitle: "Confiado por",
      testimonialSubtitle:
        "Descubra por que professores do mundo todo escolhem o NeverCap",
      testimonialText:
        '"Uso o NeverCap para transcrever todo meu canal de tutoriais de matemática no YouTube. O que levava semanas com outros serviços agora leva horas. Poder colar links diretamente e obter transcrições instantâneas transformou como crio conteúdo acessível. Meus alunos internacionais adoram especialmente as legendas multilíngue!"',
      testimonialAuthorName: "Profª Karen Mitchell",
      testimonialAuthorRole: "Professora de Matemática, Educadora Online",
      ctaTitle: "Torne Todo Seu Conteúdo Educacional Acessível",
      ctaSubtitle:
        "Junte-se a milhares de educadores usando transcrição verdadeiramente ilimitada",
      ctaButton: "Experimente o NeverCap Grátis",
      featuresTitle2: "Transcrição de Vídeo",
      grid: "Arquivo de Áudio para Guia de Estudo",
      useCasesTitle2: "Necessidades Educacionais",
      testimonialTitle2: "50.000+ Educadores"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
          "title": "Baixar vídeos do YouTube como MP4",
          "placeholder": "Pesquise ou cole seu link do YouTube aqui",
          "clear_icon": "Limpar entrada",
          "Download": "Baixar",
          "loading_text": "Processando o link para download. Permaneça na página.",
          "howToDownload": "Como baixar?",
          "tutorial": "Assista ao tutorial"
    },
      part2: {
        steps: [
                {
                  title: "Copie o URL",
                  content: "Abra o vídeo do YouTube desejado e copie o link da barra de endereços do seu navegador."
                },
                {
                  title: "Cole o link",
                  content: "Acesse sua ferramenta de download de vídeos e cole o URL no campo de entrada."
                },
                {
                  title: "Baixe o MP4",
                  content: "Após o processamento, clique no botão de download para salvar seu arquivo MP4."
                }
              ],
          "title": "Veja como transformar um vídeo do YouTube em um arquivo MP4 em 3 passos fáceis",
    },
      part3: {
        content: [
                "Já precisou assistir a vídeos do YouTube offline?",
                "Esteja você no metrô, em um avião, estudando um tutorial importante, mergulhando em conteúdo de aprendizado ou arquivando material importante—ter acesso offline confiável é uma necessidade comum. É aqui que nosso downloader se destaca.",
                "O downloader permite converter vídeos do YouTube para MP4 de forma rápida e fácil. Salve-os em seu dispositivo e assista quando quiser.",
                "O processo é rápido, simples e sem complicações. Após o download, aproveite seus vídeos favoritos onde e quando quiser—sem necessidade de internet."
              ]
      },
      part4: {
        content: ["Aqui estão os 5 principais benefícios de baixar", "vídeos do YouTube como arquivos MP4"],
        list: [
                {
                  title: "Economize dados:",
                  content: "Normalmente, assistir a vídeos no YouTube consome muitos dados móveis. Baixar para assistir offline evita esses custos desnecessários."
                },
                {
                  title: "Assista em qualquer lugar, a qualquer hora:",
                  content: "Aproveite seus vídeos sem problemas, mesmo com conexões instáveis. Sem preocupações com buffering."
                },
                {
                  title: "Arquivo e preservação fáceis:",
                  content: "Salvar vídeos como MP4 facilita a criação de sua coleção pessoal, especialmente para conteúdo que você considera valioso ou importante."
                },
                {
                  title: "Compartilhamento mais simples:",
                  content: "Compartilhar um arquivo MP4 é muito mais conveniente do que enviar um link. Você pode enviar o vídeo diretamente por apps como WhatsApp ou Instagram, eliminando a etapa extra de abrir o YouTube."
                },
                {
                  title: "Visualização instantânea, momentos compartilhados:",
                  content: "Quer mostrar um vídeo favorito para amigos ou familiares? Com o MP4 baixado, todos podem assistir juntos sem pausas ou espera pelo carregamento."
                }
              ]
      },
      part5: {
        title: "Por que nosso downloader se destaca",
        cards: [
                {
                  title: "Simplicidade com um clique",
                  content: "Configuração fácil e operação intuitiva."
                },
                {
                  title: "Rápido e ilimitado",
                  content: "Converta e baixe na velocidade máxima—sem limites ou restrições."
                },
                {
                  title: "Conversão instantânea",
                  content: "Processe seus arquivos imediatamente, sem espera."
                },
                {
                  title: "Sem anúncios, sem distrações",
                  content: "Interface limpa, sem pop-ups, banners ou interrupções—apenas conversão de vídeo perfeita."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Qualidade original garantida",
                  content: "Seus downloads mantêm a resolução original do vídeo para reprodução perfeita."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Funciona em qualquer lugar",
                  content: "Totalmente compatível com qualquer navegador e dispositivo."
                }
              ]
      },
      part6: {
        title: ["Maximize seus downloads de vídeos do YouTube", "Com o Downloader"],
        content: [
                "Conversão de YouTube para MP4 fácil: Rápida, simples e gratuita.",
                "É aqui que nos destacamos. Nossa interface é feita para todos—sem necessidade de conhecimentos técnicos. Independente do seu nível de experiência, você pode converter vídeos instantaneamente. Sem cadastro: obtenha o que precisa imediatamente.",
                "Fique tranquilo—seus MP4 baixados mantêm a qualidade e clareza originais, exatamente como você os assistiu no YouTube.",
                "Funciona onde você estiver. Totalmente compatível com todas as plataformas e dispositivos. Esteja você no Windows, macOS, Linux, Android ou iOS—usando smartphone, tablet ou desktop—você pode baixar vídeos sem problemas."
              ]
      },
      part7: {
        title: "Perguntas-chave sobre baixar vídeos do YouTube",
        list: [
                {
                  question: "Posso baixar um vídeo do YouTube se ele tiver direitos autorais?",
                  answer: "Baixar vídeos do YouTube protegidos por direitos autorais sem permissão é ilegal."
                },
                {
                  question: "Esta ferramenta de download é segura?",
                  answer: "Sim, é segura e confiável. Não solicitamos informações pessoais e tomamos medidas contra vírus. Lembre-se de sempre ter cuidado ao baixar arquivos da internet: evite links suspeitos ou arquivos duvidosos."
                },
                {
                  question: "Quais idiomas o download de YouTube para MP4 suporta?",
                  answer: "Nosso serviço suporta vídeos do YouTube em todos os idiomas populares."
                },
                {
                  question: "Quais fatores afetam o tempo para baixar um vídeo do YouTube?",
                  answer: "Embora garantamos a experiência mais rápida, o tempo de download também é afetado por fatores como duração do vídeo e velocidade da sua conexão."
                },
                {
                  question: "Quando baixo um vídeo MP4 no smartphone, onde ele é salvo?",
                  answer: 'Após fazer o download de um MP4 no seu smartphone, você geralmente pode encontrá-lo na pasta "Downloads" no aplicativo de gerenciador de arquivos do dispositivo.'
                },
                {
                  question: "Baixar um vídeo do YouTube como MP4 reduz a qualidade?",
                  answer: "Não. Baixar vídeos do YouTube como MP4 com nossa ferramenta mantém a qualidade original. O processo de conversão preserva a qualidade da fonte, garantindo a mesma experiência do YouTube."
                }
              ]
      },
        err1: "Erro de formato do link do YouTube.",
        err2: "Desculpe! Atualmente só funcionamos com links do YouTube. Se precisar de suporte para outros sites, vamos atualizá-lo quando adicionarmos no futuro.",
        videoDownload: {
              title: "Baixe vídeos do YouTube como MP4. Grátis, rápido e sem anúncios.",
              description: "Obrigado por escolher nosso serviço! Nós realmente valorizamos sua confiança e esperamos que tenha melhorado sua experiência. Se puder compartilhar nosso site com seus amigos, será de grande ajuda.",
              downloadButton: "Baixar",
              downloadError: "Erro no download."
            }
    }
  },
  About: {
    Hero: {
        "badge": "Tecnologia de IA Líder do Setor",
        "title": "Sobre",
        "highlighted_text": "NeverCap",
        "description": "Nossa missão é fornecer os serviços de transcrição de áudio e vídeo mais precisos. Utilizando tecnologia de IA líder do setor, alcançamos taxas de precisão acima de 96%. Para alguns idiomas principais, através de otimização técnica, podemos até atingir 99% de precisão."
    },
    Stats: {
      metrics: [
              {
                value: "96%+",
                label: "Taxa de Precisão",
                description: "Precisão de transcrição líder do setor com IA avançada"
              },
              {
                value: "100+",
                label: "Idiomas Suportados",
                description: "Reconhecimento de fala para conteúdo global"
              },
              {
                value: "249+",
                label: "Idiomas de Tradução",
                description: "Traduza textos transcritos para praticamente qualquer idioma"
              }
            ],
        "title": "Nosso",
        "highlighted_text": "Impacto",
        "subtitle": "Capacitando a comunicação global com tecnologia de IA avançada",
    },
    Mission: {
      features: [
              {
                icon: "🎯",
                title: "Precisão Inigualável",
                description: "Nossos modelos de IA são continuamente refinados para entregar taxas de precisão acima de 96%, com alguns idiomas principais atingindo até 99% de precisão através de otimização avançada."
              },
              {
                icon: "🌍",
                title: "Suporte Global de Idiomas",
                description: "Suporte para mais de 100 idiomas em reconhecimento de fala e capacidade de tradução para mais de 249 idiomas, tornando seu conteúdo verdadeiramente global."
              },
              {
                icon: "⚡",
                title: "Processamento Rápido como um Raio",
                description: "Processe horas de conteúdo de áudio e vídeo em minutos, não horas. Nossa pipeline de IA otimizada garante transcrições rápidas sem sacrificar qualidade."
              },
              {
                icon: "🔒",
                title: "Segurança de Nível Empresarial",
                description: "A segurança dos seus dados é nossa prioridade. Usamos criptografia padrão do setor e cumprimos regulamentos globais de privacidade para manter seu conteúdo seguro e confidencial."
              }
            ],
        "title": "Por Que Escolher",
        "highlighted_text": "NeverCap",
        "subtitle": "Acreditamos em quebrar barreiras linguísticas e tornar o conteúdo acessível a todos",
    },
    Company: {
      details: [
              {
                label: "Nome da Empresa",
                value: "SCRIBIFY AI INC"
              },
              {
                label: "Sede",
                value: ["30 N Gould St Ste R", "Sheridan, WY 82801", "Estados Unidos"]
              },
              {
                label: "Contate-nos",
                value: ["Email", "Suporte disponível 24/7"]
              }
            ],
        "title": "Empresa",
        "highlighted_text": "Informações",
        "subtitle": "Entre em contato conosco para qualquer dúvida ou suporte",
    },
    CTA: {
        "title": "Pronto para Experimentar a Diferença?",
        "subtitle": "Junte-se a milhares de profissionais que confiam no NeverCap para suas necessidades de transcrição",
        "button": "Experimente o NeverCap Grátis →",
        "disclaimer": "Sem necessidade de cartão de crédito • Comece a transcrever em segundos"
    }
  },
  Privacy: {
    title: "Política de",
    titleGradient: "Privacidade",
    subtitle:
      "Saiba como coletamos, usamos e protegemos suas informações pessoais",
      "lastUpdated": "Última atualização: {date}",
      "lastUpdatedDate": "21 de julho de 2025",
      "privacyPolicyTitle": "Política de Privacidade",
      "policyAgreement": "Por favor, leia esta Política de Privacidade com atenção e certifique-se de que a entende. Ao usar qualquer um de nossos Serviços, você concorda com esta Política de Privacidade. Se você não concordar com o uso de seus dados pessoais de acordo com esta Política, deve parar de usar nossos Serviços imediatamente.",
      "policyOverview": "Nesta política, explicamos: quais dados coletamos e por quê; como seus dados são tratados; e seus direitos em relação aos seus dados. Não vendemos seus dados.",
      "scopeTitle": "1. Escopo desta Política de Privacidade",
      "scopeDescription": "Esta Política de Privacidade aplica-se apenas à nossa coleta e processamento de informações sobre usuários dos Serviços. Esta Política de Privacidade não se aplica a quaisquer serviços, sites ou software operados por terceiros que estejam vinculados a nós (seja nós que fornecemos esses links ou outros usuários os compartilhem), nem se aplica a conteúdo, dados, aplicativos ou materiais de terceiros. Aconselhamos você a verificar as políticas de privacidade de qualquer site ou software de terceiros antes de fornecer qualquer informação a eles.",
      "collectionTitle": "2. O que coletamos e por quê",
      "collectionPrinciple": "Nosso princípio orientador é coletar apenas o que precisamos. Veja o que isso significa na prática:",
      "identityTitle": "2.1 Identidade e acesso",
      "identityDescription": "Quando você se cadastra em um de nossos produtos, solicitamos informações de identificação, como seu nome e endereço de e-mail. Isso é para fornecer funcionalidades essenciais do produto e para que possamos enviar atualizações do produto e outras informações essenciais.",
      "billingTitle": "2.2 Informações de cobrança",
      "billingDescription": "Se você se cadastrar em um produto pago, será solicitado a fornecer suas informações de pagamento e endereço de cobrança. As informações de pagamento são enviadas diretamente ao nosso processador de pagamentos e não chegam aos nossos servidores.",
      "productInteractionsTitle": "2.3 Interações com o produto",
      "productInteractionsDescription": "Armazenamos em nossos servidores o conteúdo que você envia, recebe ou mantém em suas contas de produto. A menos que você exclua esse conteúdo, podemos mantê-lo enquanto sua conta estiver ativa.",
      "websiteInteractionsTitle": "2.4 Interações com o site",
      "websiteInteractionsDescription": "Coletamos informações sobre sua atividade de navegação para fins analíticos e estatísticos, como teste de taxa de conversão e experimentação com novos designs de produto. Isso inclui, por exemplo, versões do navegador e do sistema operacional, seu endereço IP, quais páginas da web você visitou e quanto tempo levaram para carregar, e qual site o encaminhou para nós. Se você tiver uma conta e estiver logado, esses dados de análise da web ficarão vinculados ao seu endereço IP e conta de usuário até que sua conta não esteja mais ativa.",
      "cookiesTitle": "2.5 Cookies",
      "cookiesDescription1": "Também usamos cookies persistentes de primeira parte e alguns cookies de terceiros para armazenar certas preferências, facilitar o uso de nossos aplicativos, realizar testes A/B e oferecer suporte a algumas análises.",
      "cookiesDescription2": "Um cookie é um texto armazenado pelo seu navegador. Ele pode ajudar a lembrar informações de login e preferências do site. Também pode coletar informações como tipo de navegador, sistema operacional, páginas visitadas, duração da visita, conteúdo visualizado e outros dados de fluxo de cliques. Você pode ajustar as configurações de retenção de cookies e aceitar ou bloquear cookies individuais nas configurações do navegador, embora nossos aplicativos não funcionem e outros aspectos de nosso serviço possam não operar corretamente se você desativar os cookies.",
      "correspondenceTitle": "2.6 Correspondência voluntária",
      "correspondenceDescription": "Quando você nos envia um e-mail com uma pergunta ou pedido de ajuda, mantemos essa correspondência, incluindo seu endereço de e-mail, para termos um histórico de comunicações passadas para referência se você entrar em contato no futuro.",
      "accessTitle": "3. Quando acessamos ou compartilhamos suas informações",
      "accessDescription1": "Para fornecer os produtos ou serviços que você solicitou. Usamos alguns subprocessadores terceirizados para ajudar a executar nossos aplicativos e fornecer os Serviços a você. Isso inclui provedores de nuvem e análise.",
      "accessDescription2": "Para investigar, prevenir ou agir em relação a abusos. Acessar a conta de um cliente ao investigar possíveis abusos é uma medida de último recurso. Queremos proteger a privacidade e a segurança de nossos clientes e das pessoas que nos relatam problemas, e fazemos o possível para equilibrar essas responsabilidades durante todo o processo. Se descobrirmos que você está usando nossos produtos para uma finalidade restrita, tomaremos as medidas necessárias, incluindo notificar as autoridades competentes quando justificado.",
      "accessDescription3": "Quando exigido por lei aplicável.",
      "dataRequests": "Solicitações de dados de usuário. Nossa política é não responder a solicitações governamentais de dados de usuário, a menos que sejamos obrigados por processo legal ou em circunstâncias limitadas no caso de uma solicitação de emergência. No entanto, se autoridades policiais dos EUA tiverem o mandado, intimação criminal ou ordem judicial necessários exigindo que compartilhemos dados, devemos cumprir. Da mesma forma, só responderemos a solicitações de autoridades governamentais fora dos EUA se formos obrigados pelo governo dos EUA por meio de procedimentos descritos em um tratado ou acordo de assistência jurídica mútua. Nossa política é notificar os usuários afetados antes de compartilharmos dados, a menos que sejamos legalmente proibidos de fazê-lo, exceto em alguns casos de emergência.",
      "preservationRequests": "Solicitações de preservação. Da mesma forma, nossa política é cumprir com solicitações para preservar dados somente se obrigados pelo U.S. Federal Stored Communications Act, 18 U.S.C. Section 2703(f), ou por uma intimação dos EUA devidamente entregue para questões civis. Não compartilhamos dados preservados, a menos que exigido por lei ou por uma ordem judicial que decidimos não recorrer. Além disso, a menos que recebamos um mandado, ordem judicial ou intimação adequados antes do período de preservação expirar, destruiremos quaisquer cópias preservadas de dados do cliente no final do período de preservação.",
      "taxAudits": "Se formos auditados por uma autoridade fiscal, poderemos ser obrigados a compartilhar informações relacionadas a cobrança. Se isso acontecer, compartilharemos apenas o mínimo necessário, como endereços de cobrança e informações de isenção fiscal.",
      "securityTitle": "4. Como protegemos seus dados",
      "securityDescription": "Todos os dados são criptografados via SSL/TLS quando transmitidos de nossos servidores para seu navegador.",
      "deletionTitle": "5. O que acontece quando você exclui seu conteúdo",
      "deletionDescription": "Se você excluir qualquer conteúdo, ele se tornará imediatamente inacessível.",
      "locationTitle": "6. Localização do site e dados",
      "locationDescription": "Nossos produtos e outras propriedades web são operados nos Estados Unidos. Se você estiver localizado na União Europeia, Reino Unido ou em outro lugar fora dos Estados Unidos, esteja ciente de que qualquer informação que você nos fornecer será transferida e armazenada nos Estados Unidos. Ao usar nossos sites ou Serviços e/ou nos fornecer suas informações pessoais, você concorda com essa transferência.",
      "childrenTitle": "7. Privacidade de crianças",
      "updatesTitle": "8. Atualizações desta Política de Privacidade",
      "updatesDescription": "Podemos atualizar esta política conforme necessário para cumprir regulamentos relevantes e refletir novas práticas. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página.",
      "contactTitle": "9. Fale Conosco",
      "websiteUrl": "https://www.nevercap.ai/",
      "neverCap": "NeverCap",
    at: "em",
      policyDescription: 'Esta Política descreve como a NeverCap (doravante denominada \"NeverCap\", \"nossa\", \"nós\", \"nos\") coleta, usa e divulga suas informações pessoais quando você usa nossos serviços, sites ({url}) e software (coletivamente, os \"Serviços\").',
      childrenDescription: "Os Serviços não são destinados a crianças e não coletamos intencionalmente Informações Pessoais de menores de 13 anos. Se você tem menos de 13 anos, não envie nenhuma informação pessoal pelos Serviços. Se acreditar que uma criança nos forneceu Informações Pessoais em violação a esta Política, entre em contato conosco {at} {email} conforme indicado abaixo.",
      contactDescription: "Se tiver dúvidas, comentários ou reclamações sobre nossa Política de Privacidade, entre em contato conosco {at} {email} e nos esforçaremos para tratar sua reclamação o mais breve possível."
},
  TermsOfUse: {
    title: "Termos de",
    titleGradient: "Serviço",
    subtitle:
      "Por favor, leia estes termos cuidadosamente antes de usar nossos serviços",
      "lastUpdated": "Última atualização: {date}",
      "lastUpdatedDate": "21 de julho de 2025",
      "termsOfServiceTitle": "Termos de Serviço",
      "thankYou": "Obrigado por usar nossos produtos!",
      "companyDefinition": 'Quando dizemos \"Empresa\", \"nós\", \"nosso\" ou \"nossa\" neste documento, estamos nos referindo à NeverCap.',
      "servicesDefinition": 'Quando dizemos \"Serviços\", nos referimos a qualquer produto criado e mantido pela NeverCap, seja entregue em um navegador web, aplicativo desktop, aplicativo móvel ou outro formato.',
      "termsUpdate": "Podemos atualizar estes Termos de Serviço no futuro. Geralmente, essas mudanças servem para esclarecer termos vinculando a políticas relacionadas expandidas. Sempre que fizermos uma mudança significativa em nossas políticas, atualizaremos a data no topo desta página e tomaremos outras medidas apropriadas para notificar titulares de contas.",
      "acceptanceTitle": "1. Aceitação do Acordo",
      "acceptanceDescription1": "Ao usar nossos Serviços, você indica sua aceitação deste Acordo, que se torna assim um contrato vinculativo entre você e a NeverCap. Você declara que tem capacidade legal para aceitar estes Termos e afirma que tem idade legal para formar um contrato vinculativo. A aceitação da NeverCap está expressamente condicionada à sua concordância com todos os termos e condições deste Acordo.",
      "eligibilityRequirement": "Os Serviços não são destinados e não devem ser usados por menores de 18 anos. Ao usar os Serviços, você declara e garante que atende ao requisito de elegibilidade anterior.",
      "userResponsibility": 'Os termos \"você\", \"seu\", \"si\" também incluem seus funcionários, agentes, representantes comerciais e quaisquer outras pessoas que você conceda acesso aos Serviços através de sua Conta (conforme definido abaixo). Você é responsável por garantir que todas as pessoas que acessam os Serviços através de sua conta estejam cientes destes Termos e os cumpram.',
      "termsRevision": "A NeverCap reserva-se o direito de revisar e atualizar estes Termos periodicamente a seu critério. Todas as alterações entram em vigor imediatamente quando publicadas. Seu uso contínuo dos Serviços após a publicação dos Termos revisados significa que você aceita e concorda com as mudanças. É esperado que você verifique esta página periodicamente para estar ciente de quaisquer alterações, pois elas são vinculativas para você.",
      "servicesTitle": "2. Serviços da NeverCap",
      "servicesDescription1": "Nossos Serviços permitem que os usuários transformem conversas de voz em texto transcrito que pode ser pesquisado, traduzido e compartilhado com outros.",
      "servicesOptions": 'Você pode escolher usar a versão gratuita dos Serviços (\"Serviços Gratuitos\") ou a versão paga baseada em assinatura, pela qual você pode ser obrigado a pagar taxas (os \"Serviços Pagos\").',
      "servicesAccess": "Disponibilizaremos os Serviços para você. Você é responsável por fazer todos os arranjos necessários para ter acesso aos Serviços.",
      "accountTermsTitle": "3. Termos da Conta",
      "accountSecurity": "Você é responsável por manter a segurança de sua conta. A Empresa não pode e não será responsável por qualquer perda ou dano decorrente de sua falha em cumprir esta obrigação de segurança.",
      "lawfulUse": "Você não pode usar os Serviços para qualquer finalidade ilegal, antiética ou imoral.",
      "contentResponsibility": "Você é responsável por todo o conteúdo postado e atividade que ocorre em sua conta. Isso inclui conteúdo postado por outras pessoas que: (a) tenham acesso às suas credenciais de login; ou (b) tenham seus próprios logins em sua conta.",
      "humanRequirement": 'Você deve ser um humano. Contas registradas por \"bots\" ou outros métodos automatizados não são permitidas.',
      "paymentTitle": "4. Pagamento, Reembolsos e Mudanças de Plano",
      "freeTrial": "Para Serviços pagos que oferecem um teste gratuito, explicamos a duração do teste quando você se inscreve. Após o período de teste, você precisa pagar antecipadamente para continuar usando o Serviço. Se você não pagar, esses serviços serão encerrados.",
      "upgradePolicy": "Se você estiver atualizando de um plano gratuito para um plano pago, cobraremos seu cartão imediatamente e seu ciclo de faturamento começará no dia da atualização.",
      "taxes": "Todas as taxas são exclusivas de impostos, taxas ou deveres impostos por autoridades fiscais. Quando necessário, cobraremos esses impostos em nome da autoridade fiscal e os repassaremos às autoridades fiscais. Caso contrário, você é responsável pelo pagamento de todos os impostos, taxas ou deveres.",
      "refunds": "Todas as compras não são reembolsáveis. Você pode cancelar qualquer serviço pago a qualquer momento entrando em sua conta. Para assinaturas pagas, seu cancelamento entrará em vigor no final do período pago atual, salvo indicação em contrário.",
      "cancellationTitle": "5. Cancelamento e Rescisão",
      "cancellationPolicy": "Se você cancelar o Serviço antes do fim de qualquer tempo pago, seu cancelamento terá efeito imediato, e você não será cobrado novamente. Não fazemos rateio automático do tempo não utilizado no último ciclo de faturamento.",
      "terminationRights": "Temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro de nossos Serviços por qualquer motivo a qualquer momento. Suspensão significa que você não poderá acessar a conta ou qualquer conteúdo nela. A rescisão resultará ainda na exclusão de sua conta ou acesso a ela e no perdão e renúncia de todo o conteúdo em sua conta. Também reservamos o direito de recusar o uso dos Serviços a qualquer pessoa por qualquer motivo a qualquer momento. Temos esta cláusula porque, estatisticamente falando, dentre as centenas de milhares de contas em nossos Serviços, há pelo menos uma fazendo algo nefasto.",
      "abusePolicy": "Abuso verbal, físico, escrito ou de outro tipo (incluindo ameaças de abuso ou retribuição) a um funcionário ou diretor da Empresa pode resultar em rescisão imediata da conta.",
      "submissionsTitle": "6. Submissões",
      "submissionsDescription": 'Você reconhece e concorda que quaisquer perguntas, comentários, sugestões, ideias, feedback ou outras informações sobre o Site (\"Submissões\") fornecidas por você para nós são não confidenciais e se tornarão nossa propriedade exclusiva. Teremos direitos exclusivos, incluindo todos os direitos de propriedade intelectual, e teremos direito ao uso e divulgação irrestritos dessas Submissões para qualquer finalidade lícita, comercial ou não, sem reconhecimento ou compensação a você. Você renuncia aqui a todos os direitos morais sobre tais Submissões e garante que elas são originais suas ou que você tem o direito de enviá-las. Você concorda que não terá recurso contra nós por qualquer alegação ou violação real de qualquer direito proprietário em suas Submissões.',
      "uptimeTitle": "7. Tempo de Atividade e Segurança",
      "serviceAvailability": 'O uso dos Serviços é de sua exclusiva responsabilidade. Fornecemos esses Serviços \"no estado em que se encontram\" e \"conforme disponibilidade\". Não oferecemos acordos de nível de serviço para a maioria dos nossos Serviços, mas levamos a sério o tempo de atividade de nossas aplicações.',
      "throttlingPolicy": "Reservamos o direito de limitar temporariamente o acesso à conta em casos raros em que a atividade de um usuário seja verificada como impactando negativamente a estabilidade e o desempenho do Serviço para outros usuários. Na maioria dos casos, entraremos em contato para encontrar uma solução antes de agir.",
      "dataSecurity": "Adotamos várias medidas para proteger e garantir a segurança dos seus dados por meio de backups, redundâncias e criptografia. Exigimos criptografia para transmissão de dados pela Internet pública.",
      "thirdPartyVendors": "Utilizamos fornecedores e parceiros de hospedagem terceirizados para fornecer o hardware, software, rede, armazenamento e tecnologia necessários para operar os Serviços.",
      "siteManagementTitle": "8. Gerenciamento do Site",
      "siteManagementDescription": "Reservamos o direito, mas não a obrigação, de: (1) monitorar o Site quanto a violações destes Termos de Serviço; (2) tomar medidas legais apropriadas contra qualquer pessoa que, a nosso critério exclusivo, viole a lei ou estes Termos de Serviço, incluindo, sem limitação, reportar tal usuário às autoridades policiais; (3) a nosso critério exclusivo e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desativar (na medida tecnologicamente possível) qualquer uma de suas Contribuições ou partes delas; (4) a nosso critério exclusivo e sem aviso prévio ou responsabilidade, remover do Site ou desativar arquivos e conteúdos que sejam excessivamente grandes ou que sobrecarreguem nossos sistemas; e (5) gerenciar o Site de forma a proteger nossos direitos e propriedade e facilitar seu funcionamento adequado.",
      "copyrightTitle": "9. Direitos Autorais e Propriedade de Conteúdo",
      "copyrightCompliance": "Todo o conteúdo publicado nos Serviços deve estar em conformidade com as leis de direitos autorais dos EUA.",
      "ipRights": "Não reivindicamos direitos de propriedade intelectual sobre o material fornecido aos Serviços. Todo o material enviado permanece de sua propriedade.",
      "contentModeration": "Não fazemos curadoria prévia de conteúdo, mas reservamos o direito (mas não a obrigação) de recusar ou remover qualquer conteúdo disponível por meio do Serviço.",
      "prohibitedExploitation": "Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos Serviços sem permissão expressa por escrito da Empresa.",
      "impersonationProhibition": "Você não deve modificar outro site para indicar falsamente que está associado aos Serviços ou à Empresa.",
      "dmcaPolicy": "Respeitamos os direitos de propriedade intelectual de terceiros. Se você acredita que qualquer material no Site infringe seus direitos autorais, entre em contato conosco imediatamente. Uma cópia de sua notificação será enviada ao responsável pelo material. De acordo com a lei, você pode ser responsabilizado por danos se fizer declarações falsas na notificação. Caso não tenha certeza sobre a violação, consulte primeiro um advogado.",
      "prohibitedActivitiesTitle": "10. Atividades Proibidas",
      "generalProhibition": "Você não pode acessar ou usar o Site para qualquer finalidade além daquelas para as quais o disponibilizamos. O Site não pode ser usado para fins comerciais, exceto os expressamente aprovados por nós.",
      "userObligations": "Como usuário do Site, você concorda em não:",
      "dataScraping": "Recuperar sistematicamente dados ou conteúdo do Site para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa permissão por escrito.",
      "fraud": "Enganar, fraudar ou induzir em erro a nós ou outros usuários, especialmente para obter informações sensíveis como senhas.",
      "securityInterference": "Contornar, desativar ou interferir em recursos de segurança do Site, incluindo aqueles que restringem cópia ou uso de conteúdo.",
      "defamation": "Difamar, manchar ou prejudicar, a nosso critério, nossa imagem ou a do Site.",
      "harassment": "Usar informações obtidas no Site para assediar, abusar ou prejudicar outras pessoas.",
      "supportAbuse": "Fazer uso indevido de nossos serviços de suporte ou enviar relatórios falsos de abuso.",
      "legalCompliance": "Usar o Site de forma inconsistente com leis ou regulamentos aplicáveis.",
      "framingProhibition": "Criar quadros ou links não autorizados para o Site.",
      "malware": "Enviar vírus, cavalos de Troia ou conteúdo que interfira no uso do Site (incluindo spam em letras maiúsculas).",
      "automation": "Usar sistemas automatizados como scripts para enviar mensagens ou realizar mineração de dados.",
      "copyrightRemoval": "Remover avisos de direitos autorais ou de propriedade de qualquer conteúdo.",
      "impersonation": "Tentar se passar por outro usuário ou usar seu nome de usuário.",
      "spyware": "Enviar mecanismos de coleta passiva/ativa de informações como GIFs claros, pixels 1x1, cookies ou spyware.",
      "disruption": "Interferir no Site ou em redes/serviços conectados a ele.",
      "employeeHarassment": "Assediar, importunar ou ameaçar nossos funcionários ou agentes.",
      "accessCircumvention": "Tentar contornar medidas de restrição de acesso ao Site.",
      "codeCopying": "Copiar ou adaptar o software do Site (Flash, PHP, HTML, JavaScript etc.).",
      "reverseEngineering": "Descompilar, engenharia reversa ou desmontar o software do Site (salvo permitido por lei).",
      "bots": "Desenvolver/distribuir sistemas automatizados como spiders ou scrapers para acessar o Site (exceto mecanismos padrão de busca/navegação).",
      "buyingAgents": "Usar agentes de compra para realizar compras no Site.",
      "unauthorizedUse": "Utilizar o Site sem autorização para coletar dados de usuários ou criar contas falsas.",
      "competition": "Usar o Site para competir conosco ou para fins de geração de receita não autorizados.",
      "advertising": "Anunciar ou oferecer bens/serviços no Site.",
      "profileTransfer": "Vender ou transferir seu perfil.",
      "featuresTitle": "11. Recursos e Bugs",
      "featuresDescription": "Desenhamos nossos Serviços com cuidado, mas não há serviço que agrade a todos. Não garantimos que atendam a requisitos/expectativas específicas.",
      "bugsDescription": "Testamos todos os recursos antes do lançamento, mas bugs são inevitáveis. Corrigimos relatos de bugs, especialmente de segurança/privacidade, mas não garantimos serviços 100% livres de erros.",
      "correctionsTitle": "12. Correções",
      "informationAccuracy": "Podem haver erros tipográficos, imprecisões ou omissões no Site. Reservamos o direito de corrigi-los a qualquer momento, sem aviso prévio.",
      "siteAvailability": "Não garantimos que o Site estará sempre disponível. Podemos realizar manutenções que causem interrupções. Reservamos o direito de modificar o Site sem aviso. Você concorda que não temos responsabilidade por indisponibilidades.",
      "userDataTitle": "13. Dados do Usuário",
      "userDataDescription": "Armazenamos dados que você transmite para gerenciar o Site. Fazemos backups, mas você é responsável por seus dados. Você concorda que não somos responsáveis por perda/corrupção de dados e renuncia a ações judiciais relacionadas.",
      "privacyPolicyTitle": "14. Política de Privacidade",
      "liabilityTitle": "15. Responsabilidade",
      "liabilityIntroduction": "Mencionamos responsabilidade ao longo destes Termos, mas para colocar tudo em uma seção:",
      "liabilityWaiver": "Você expressamente entende e concorda que a Empresa não será responsável, perante a lei ou equidade, para você ou para qualquer terceiro por quaisquer danos diretos, indiretos, incidentais, lucros cessantes, especiais, consequenciais, punitivos ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, goodwill, uso, dados ou outras perdas intangíveis (mesmo que a Empresa tenha sido avisada da possibilidade de tais danos), resultantes de: (1) o uso ou a incapacidade de usar os Serviços; (2) erros, equívocos ou imprecisões de conteúdo e materiais; (3) danos pessoais ou materiais, de qualquer natureza, resultantes do seu acesso e uso do site; (4) o custo de aquisição de bens e serviços substitutos resultante de quaisquer bens, dados, informações ou serviços comprados ou obtidos ou mensagens recebidas ou transações realizadas por meio ou dos Serviços; (5) qualquer acesso não autorizado ou uso de nossos servidores seguros e/ou quaisquer e todas as informações pessoais e/ou financeiras armazenadas neles; (6) qualquer interrupção ou cessação de transmissão para ou do site; (7) quaisquer bugs, vírus, cavalos de Troia ou similares que possam ser transmitidos para ou através do site por qualquer terceiro, e/ou; (8) quaisquer erros ou omissões em qualquer conteúdo e materiais ou por qualquer perda ou dano de qualquer tipo incorridos como resultado do uso de qualquer conteúdo publicado, transmitido ou disponibilizado por meio do site; (9) declarações ou conduta de qualquer terceiro no serviço; (10) ou qualquer outro assunto relacionado a estes Termos de Serviço ou aos Serviços, seja por violação de contrato, delito (incluindo negligência, ativa ou passiva), ou qualquer outra teoria de responsabilidade.",
      "miscellaneousTitle": "16. Disposições Gerais",
      "miscellaneousDescription": "Estes Termos de Serviço e quaisquer políticas ou regras de operação publicadas por nós no Site ou em relação ao Site constituem o acordo e entendimento integral entre você e nós. Nossa falha em exercer ou exigir o cumprimento de qualquer direito ou disposição destes Termos de Serviço não constituirá renúncia a tal direito ou disposição. Estes Termos de Serviço operam na máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a outros a qualquer momento. Não seremos responsáveis ou responsabilizados por qualquer perda, dano, atraso ou falha em agir causada por qualquer motivo além do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos de Serviço for considerada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos de Serviço e não afetará a validade e exequibilidade das disposições restantes. Não há relação de joint venture, parceria, emprego ou agência criada entre você e nós como resultado destes Termos de Serviço ou uso do Site. Você concorda que estes Termos de Serviço não serão interpretados contra nós em virtude de tê-los redigido. Você por meio deste renuncia a qualquer e todas as defesas que possa ter com base na forma eletrônica destes Termos de Serviço e na falta de assinatura pelas partes para executar estes Termos de Serviço.",
      "contactTitle": "17. Contate-nos",
      "neverCap": "NeverCap",
      "site": "Site",
      "services": "Serviços",
    at: "em",
      trademarkProtection: "Os nomes, aparência e identidade visual dos Serviços são protegidos por direitos autorais© da Empresa. Todos os direitos reservados. Você não pode duplicar, copiar ou reutilizar qualquer parte do HTML, CSS, JavaScript ou elementos de design visual sem permissão por escrito da Empresa. Você deve solicitar permissão para usar o logotipo da Empresa ou qualquer logotipo dos Serviços para fins promocionais. Envie um e-mail {at} {email} para solicitar o uso de logotipos. Reservamo-nos o direito de revogar esta permissão se você violar estes Termos de Serviço.",
      privacyPolicyDescription: "Nós valorizamos a privacidade e segurança dos dados. Por favor, revise nossa {policy}. Ao usar o Site, você concorda em estar vinculado pela nossa Política de Privacidade, que está incorporada a estes Termos de Serviço. Observe que o Site está hospedado nos Estados Unidos. Se você acessar o Site de qualquer outra região do mundo com leis ou requisitos diferentes dos Estados Unidos sobre coleta, uso ou divulgação de dados pessoais, então, ao continuar usando o Site, você está transferindo seus dados para os Estados Unidos e concorda que seus dados sejam transferidos e processados nos Estados Unidos.",
      contactDescription: "Se tiver dúvidas sobre qualquer dos Termos de Serviço, entre em contato conosco {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
