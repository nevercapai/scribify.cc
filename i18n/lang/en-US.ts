import type Part6 from "~/components/youtubeTomp4/part6.vue";

// 英语
let message = {
  // 首页
  HomePage: {
    home: "All Transcripts",
    times: "{times} free transcriptions per day, {left} remaining today. ",
    tips: "Upgrade to Pro for unlimited transcriptions.",
    update: "Upgrade Now",
    rename: "Rename",
    delete: "Delete",
    cancel: "Cancel",
    confirm: "Create",
    dialogLabel: "Folder name",
    recently: "Recent Files",
    loading: "Loading",
    subscriptionModal: {
      left: {
        title: "Get Pro Plan to unlock more",
        c1: "Unlimited Transcriptions",
        c2: "10 Hour Uploads",
        c3: "Highest Priority",
        c4: "99% transcription accuracy",
        c5: "100+ languages supported",
        c6: "Speaker identification",
        c7: "Transcript translation",
        t1: "Unlimited transcriptions for one person.",
        t2: "Each file can be up to 10 hours long / 5 GB. Upload 50 files at a time.",
        t3: "We'll always transcribe your files ASAP with the highest priority."
      },
      right: {
        title: "Get Pro Plan",
        yearly: "Yearly",
        monthly: "Monthly",
        save: "Saved",
        preMonth: "pre month",
        preYear: "pre year",
        firstMonth: "first month",
        afterwards: "afterwards"
      },
      subscribe: "Subscribe"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Failed",
      selected: "Selected",
      success: "Success",
      fileList: "File List"
    },
    recently: "Recently",
    record: "Record",
    transcribe: "Transcribe",
    unclassified: "Unclassified folders",
    buttons: {
      transcribe: "Transcribe Files",
      url: "Transcribe Links",
      record: "Record and Transcribe",
      recording: "Recording..."
    },
    delSuccess: "Deleted successfully",
    create: "Create",
    endRecord: {
      title: "Prompt",
      content:
        "You are recording. This action will end the recording. Do you want to end the recording?",
      confirm: "Continue Recording",
      cancel: "End Recording"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Record",
      pause: "Pause",
      resume: "Resume",
      stop: "Stop",
      endRecord: "End Recording",
      delete: "Delete",
      transcribe: "Transcribe",
      permissionDenied: "Microphone permission denied or device does not exist",
      dialog: {
        delete: {
          title: "Warning",
          label: "Are you sure you want to delete this recording?",
          confirm: "Delete",
          cancel: "Cancel"
        },
        complete: {
          title: "Recording Completed",
          label:
            "The recording has reached 10 hours and has automatically stopped. Please transcribe.",
          confirm: "Got It"
        },
        speaker: {
          content:
            "For speaker identification, files are limited to 3 hours. Please uncheck '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcribe an online media",
        title: "Paste links",
        label:
          "Paste your video or audio link from: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram and more platforms...",
        confirm: "Add",
        cancel: "Cancel",
        // 请输入正确的链接
        errorTitle:
          "The link address you entered is incorrect. Please check and try again.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transcribe from URL",
        dialogTitle: "Upload Files to Transcribe",
        tip1: "Drag files here or click to browse",
        tip2: "Click to browse",
        or: "or",
        supported: "Supported formats"
      },
      del: {
        title: "Warning",
        content:
          "All progress will be lost. Confirm cancelling the transcription?",
        cancel: "Confirm Cancel",
        confirm: "Continue Transcribing"
      },
      files: "Files",
      resultDialogTitle: "Transcribe Files",
      resultDialogTitle2: "Transcribe File",
      cancel: "Cancel",
      confirm: "Transcribe",
      return: "Return",
      addMore: "Add more",
      language: "Select Language",
      failed: "Failed",
      tooLarge: "The file exceeds the limit (5G).",
      linkUpload: "Uploading",
      fileFormat: "File format is not allowed",
      localFiles: "Local files",
      pasteLink: "Online link",
      uploadErr: "Upload Error",
      hashErr: "Hash Error",
      table: {
        status: "Status",
        file: "File",
        size: "Size",
        noData: "No data"
      },
      maxFileNum: "The number of files cannot exceed {num}.",
      speaker: "Identify Speakers",
      speakerLabel:
        "Automatically detect who's speaking",
      guest: {
        transcribe: 'Transcribe',
        file: 'File',
        audio: 'Audio / Video File',
        Uploading: 'Uploading...',
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Recently",
      popular: "Popular",
      other: "Other",
      searchLanguage: "Search Language",
      noMatch: "No matching languages found",
      English: "English",
      "English(US)": "English (US)",
      "English(UK)": "English (UK)",
      Spanish: "Spanish",
      Portuguese: "Portuguese",
      French: "French",
      Italian: "Italian",
      German: "German",
      Dutch: "Dutch",
      Polish: "Polish",
      Danish: "Danish",
      Japanese: "Japanese",
      Korean: "Korean",
      Hungarian: "Hungarian",
      Czech: "Czech",
      Chinese: "Chinese",
      Hebrew: "Hebrew",
      Arabic: "Arabic",
      Azerbaijani: "Azerbaijani",
      Estonian: "Estonian",
      Belarusian: "Belarusian",
      Bulgarian: "Bulgarian",
      Icelandic: "Icelandic",
      Bosnian: "Bosnian",
      Persian: "Persian",
      Russian: "Russian",
      "Chinese(Traditional)": "Chinese (Traditional)",
      Finnish: "Finnish",
      Kazakh: "Kazakh",
      Galician: "Galician",
      Catalan: "Catalan",
      "Chinese(Simplified)": "Chinese (Simplified)",
      Kannada: "Kannada",
      Croatian: "Croatian",
      Latvian: "Latvian",
      Lithuanian: "Lithuanian",
      Romanian: "Romanian",
      Marathi: "Marathi",
      Malay: "Malay",
      Macedonian: "Macedonian",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norwegian",
      Swedish: "Swedish",
      Serbian: "Serbian",
      Slovak: "Slovak",
      Slovenian: "Slovenian",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thai",
      Turkish: "Turkish",
      Welsh: "Welsh",
      Urdu: "Urdu",
      Ukrainian: "Ukrainian",
      Greek: "Greek",
      Armenian: "Armenian",
      Hindi: "Hindi",
      Indonesian: "Indonesian",
      Vietnamese: "Vietnamese",
      Albanian: "Albanian",
      Amharic: "Amharic",
      Assamese: "Assamese",
      Occitan: "Occitan",
      Bashkir: "Bashkir",
      Basque: "Basque",
      Breton: "Breton",
      Tibetan: "Tibetan",
      Faroese: "Faroese",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgian",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitian Creole",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgish",
      Malagasy: "Malagasy",
      Maltese: "Maltese",
      Malayalam: "Malayalam",
      Mongolian: "Mongolian",
      Bengali: "Bengali",
      Burmese: "Burmese",
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
      Hawaiian: "Hawaiian",
      "Norwegian Nynorsk": "Norwegian Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanese",
      Cantonese: "Cantonese",
      Abkhaz: "Abkhaz",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irish",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossetian",
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
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Meadow Mari",
      Chamorro: "Chamorro",
      Chechen: "Chechen",
      chk: "Chuukese",
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
      "ndc-ZW": "Ndau",
      "South Ndebele": "South Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'ko",
      "French(Canada)": "French (Canada)",
      Fijian: "Fijian",
      fon: "Fon",
      "Western Frisian": "Western Frisian",
      fur: "Friulian",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Kalaallisut",
      gom: "Goan Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kyrgyz",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corsican",
      "crh-Latn": "Crimean Tatar (Latin)",
      crh: "Crimean Tatar (Cyrillic)",
      Quechua: "Quechua",
      Kurdish: "Kurdish (Kurmanji)",
      ckb: "Kurdish (Sorani)",
      trp: "Kok Borok",
      ltg: "Latgalian",
      lij: "Ligurian",
      Limburgish: "Limburgish",
      Kirundi: "Rundi",
      luo: "Luo",
      Luganda: "Ganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Romany",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malay (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritian Creole",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Eastern Huasteca Nahuatl",
      "Southern Sotho": "Southern Sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portuguese (Portugal)",
      Chichewa: "Chewa",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Northern Sami",
      Samoan: "Samoan",
      kri: "Krio",
      crs: "Seychellois Creole",
      Sango: "Sango",
      "sat-Latn": "Santali (Latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Scottish Gaelic",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latin)",
      Tahitian: "Tahitian",
      Tonga: "Tongan",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvan",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetian",
      Uyghur: "Uyghur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesian",
      scn: "Sicilian",
      hil: "Hiligaynon",
      jam: "Jamaican Creole",
      sah: "Yakut",
      ace: "Acehnese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (Latin)",
      Inuktitut: "Inuktitut (Syllabics)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 账户设置
  AccountSettingsPage: {
    subscription: "Subscription plan",
    freeversion: "Free",
    freeversion2: "Free Plan",
    transcribeTimesDay: "3 Transcripts Daily",
    uploadMinutes: "30 Minute Uploads",
    lowerPriority: "Lower Priority",
    currentPlan: "Current plan",
    professionalEdition: "professional edition",
    unlimitedTranscription: "Unlimited transcription",
    unlimitedNumberOfTimes: "Unlimited transcription frequency and duration.",
    uploadWithinHours: "10 Hour Uploads",
    filesUploadedAtOnce:
      "Each file can be up to 10 hours long / 5 GB. Upload 50 files at a time.",
    highestPriority: "highest priority",
    weWillGiveTheHighest:
      "We'll always transcribe your files ASAP with the highest priority.",
    theFirstMonth: "The first month",
    subscribeTo: "subscribe to",
    basicVersionFree: "Basic version (free)",
    return: "Return",
    annualize: "annualize",
    monthly: "monthly",
    everyYear: "every year",
    saved: "saved",
    byTheMonth: "byTheMonth",
    firstMonth: "first month",
    afterwardsEveryMonth: "Afterwards, every month",
    manageSubscription: "Manage Subscription",
    professionalYearbook: "Professional Yearbook",
    professionalMonthly: "Professional Monthly",
    subscriptionWillCancelledOn: "Your subscription will be canceled on",
    displayLanguage: "Display language",
    update: "Upgrade Now",
    basicversion: "Basic version(Free)",
    daily: "{start} of {end} daily transcriptions used",
    upgradetoPro: "Upgrade to Pro",
    accountSetting: "Account Settings",
    logOut: "Sign out",
    account: "Account",
    email: "Email",
    id: "ID",
    password: "Password",
    resetPassword: "Reset Password",
    logIn: "Sign in",
    tryForFree: "Try for free",
    notFund: "Not Found",
    couldntFind: "We couldn't find what you were looking for.",
    proAnnual: "Pro Annual",
    yourSubscription: "Your subscription will be canceled on {time}.",
    proMonthly: "Pro Monthly",
    perMonth: "per month",
    afterwards: "afterwards",
    accuracy: "transcription accuracy",
    supported: "languages supported",
    identification: "Speaker identification",
    transcriptSranslation: "Transcript translation",
    perYear: "per year",
    getProPlan: "Get Pro Plan",
    changeToAnnual: "Change to Annual",
    automaticRenewalon: "Automatic renewal on",
    eachMonth: "Automatic renewal on the {time} of each month",
    automaticRenewal: "Automatic renewal failed, please check payment method.",
    eachYear: "Automatic renewal on {time} each year",
    returnAccountSetting: "Return",
    needsToWaitLonger: "Wait longer before your files are transcribed.",
    freeThreeTimesDay: "Transcribe 3 files for free every day.",
    oneFileUploaded:
      "Each file can be up to 30 minutes long. Upload 1 file at a time.",
    save: "Save"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinese(Simplified)",
      "Chinese(Traditional)": "Chinese(Traditional)",
      Japanese: "Japanese",
      Danish: "Danish",
      German: "German",
      English: "English",
      Spanish: "Spanish",
      French: "French",
      Italian: "Italian",
      Hungarian: "Hungarian",
      Dutch: "Dutch",
      Norwegian: "Norwegian",
      Polish: "Polish",
      Portuguese: "Portuguese",
      Finnish: "Finnish",
      Swedish: "Swedish",
      Turkish: "Turkish",
      Greek: "Greek",
      Russian: "Russian",
      Ukrainian: "Ukrainian",
      Hebrew: "Hebrew",
      Arabic: "Arabic",
      Korean: "Korean"
    }
  },
  HeadNavbar: {
    Features: "Features",
    UnlimitedTranscription: "Unlimited Transcription",
    BulkUpload: "Bulk Upload",
    Accuracy: "96% Accuracy",
    Pricing: "Pricing",
    UseCases: "Use Cases",
    AllUseCases: "All Use Cases",
    Podcasters: "Podcasters",
    Journalists: "Journalists",
    ContentCreators: "Content Creators",
    Researchers: "Researchers",
    BusinessTeams: "Business Teams",
    Educators: "Educators",
    Resources: "Resources",
    YouTubetoMP4: "YouTube to MP4",
    StartFreeTrial: "Try It Free"
  },
  Footer: {
    des: "The world's first truly unlimited AI transcription service. No caps, no limits, just freedom to create.",
    Features: "Features",
    UseCases: "Use Cases",
    Company: "Company",
    featureMenus: ["Unlimited Transcription", "Bulk Upload", "96% Accuracy"],
    useCaseMenus: ['All Use Cases', 'Podcasters', 'Journalists', 'Content Creators', 'Researchers', 'Business Teams', 'Educators'],
    companyMenus: ['About', 'Pricing', 'Privacy Policy', 'Terms of Service']
  },
  Index: {
    Hero: {
      badge: 'No More "Shrinkflation" - Actually Unlimited',
      h1: "Stop Paying for Limits:",
      gradient: "Truly Unlimited AI Transcription",
      subtitle:
        "Our AI transcribes video and converts audio to text, processing 50 files at once with no monthly caps. Transcription that truly scales with you.",
      FreeTrial: "Try It Free - No Credit Card",
      HowWorks: "See How It Works",
      Unlimited: "Unlimited File Uploads",
      NoCap: "No Monthly Minutes Cap",
      Hour: "10-Hour Files Supported",
      ExploreUseCases: "Explore Use Cases"
    },
    Stats: {
      monthlyMinutes: "Monthly Minutes",
      fileUploads: "File Uploads",
      batchProcessing: "Batch Processing",
      maxFileLength: "Max File Length"
    },
    FeaturesGrid: {
      try_now: "Try It Now",
      no_signup: "No Sign-up Required",
      experience_unltd: "Experience truly unlimited transcription",
      upload_50: "Upload up to 50 files at once, right here.",
      no_limits: "Advanced",
      no_surprises: "AI Transcription",
      features: 'Features',
      transparency:
        "No More Hidden Limits, No More Surprises - While others quietly reduce your minutes or hide caps in fine print, we believe in radical transparency",
      feat_unltd: "Actually Unlimited",
      feat_unltd_desc:
        'No "fair use policy" buried in terms. No storage caps disguised as "unlimited." Upload your entire archive, transcribe everything for all your audio transcribe needs. We mean it.',
      feat_bulk: "Bulk Upload Freedom",
      feat_bulk_desc:
        'Tired of "3 lifetime imports" or "10 files per month"? Upload 50 files at once, as many times as you need. Perfect for processing backlogs.',
      feat_batch: "Batch Processing",
      feat_batch_desc:
        "Process your entire podcast season overnight. Upload 50 interviews at once. Let our AI work while you sleep. Wake up to completed transcripts.",
      feat_accuracy: "96% Accuracy",
      feat_accuracy_desc:
        "Our industry-leading AI transcribes audio with smart punctuation, speaker diarization for up to 20 speakers, and handles accents, technical terms flawlessly.",
      feat_langs: "100+ Languages",
      feat_langs_desc:
        "Transcribe video and audio in 100+ languages, translate to 249+. No extra charges for different languages. Global content, one simple price.",
      feat_pro: "Professional Features",
      feat_pro_desc:
        "Word-level timestamps for precise audio/video positioning, accurate speaker identification even during rapid conversation switches, and perfectly formatted text with paragraphs, sentences, and punctuation for easy reading."
    },
    UseCases: {
      built_for: "Bulk",
      "heavy_users": "Audio & Video Transcription",
      "join_users": 'Built for Heavy Users Like You - Join YouTubers, content creators, and podcasters who switched from "shrinkflation" services',
      "podcasters": {
        "title": "Podcasters",
        "des": "Upload your entire back catalog. Create show notes for every episode. No more choosing which episodes to transcribe."
      },
      "content_creators": {
        "title": "Content Creators",
        "des": "Turn your video library into searchable text by using our service to transcribe video files automatically. Generate captions for everything. No counting minutes, just creating."
      },
      "journalists": {
        "title": "Journalists",
        "des": "Upload all your interviews at once. No more \"10 files per month\" roadblocks when on deadline. Process everything."
      },
      researchers: {
        title: "Researchers",
        des: "Transcribe hours of focus groups and interviews. Upload your entire study at once. Get accurate speaker identification."
      },
      business_teams: {
        title: "Business Teams",
        des: "Record every call without worrying about limits. Get AI insights on all conversations, not just a select few."
      },
      educators: {
        title: "Educators",
        des: "Transcribe entire lecture series. Make all content accessible. No choosing between courses due to minute caps."
      }
    },
    Testimonials: {
      title: "Loved by",
      highlighted_users: "50,000+ Users",
      subtitle: "See why professionals choose NeverCap over limited alternatives",
      Mike: {
        "text": "Holy crap, this thing actually works! Been doing a podcast for 3 years and was manually transcribing everything like an idiot. Uploaded 6 episodes at once and it separated me and my co-host perfectly. The coffee shop episode I thought was ruined? Crystal clear transcript. I'm never going back to typing this stuff out myself.",
        "author": "Mike Rodriguez",
        "role": "Podcast Host"
      },
      Sarah: {
        "text": "I teach online and needed captions for my videos. Tried 3 other tools that either had weird limits or took forever. This one just... works? Uploaded my Spanish lecture, got perfect subtitles in like 2 minutes. My students with hearing issues are so happy. Wish I found this sooner!",
        "author": "Sarah Chen",
        "role": "Online Teacher"
      },
      Jessica: {
        "text": "Been using this for my interviews and it's insane how accurate it is. Had a 2-hour interview in broken English + Spanish and it got everything right, even the timestamps. Used to pay my intern $200/month just to transcribe stuff. This is literally saving me money every month.",
        "author": "Jessica Park",
        "role": "Freelance Journalist"
      }
    },
    PricingPreview: {
      "title": "Transparent Pricing",
      "highlighted_text": "No Hidden Caps",
      "subtitle": "Choose your plan. No asterisks, no fine print, no surprises",
    },
    FAQSection: {
      "title": "Frequently Asked",
      "titleHighlight": "Questions",
      "questions": [
        {
          "q": "AI transcription",
          "question": "What is AI transcription and how does it work?",
          "answer": "AI transcription is the process of automatically converting audio to text using advanced artificial intelligence. At NeverCap, you simply upload your files, and our AI transcribes the content with up to 96% accuracy. Our service is designed to transcribe video files (like MP4, MOV) and audio files (like MP3, WAV) into readable, editable text, complete with speaker labels and timestamps."
        },
        {
          "q": "unlimited_policy",
          "question": "Is it really unlimited? What's the catch?",
          "answer": "Yes, it's truly unlimited! No monthly minute caps, no overage fees. The only limits are technical: individual files can be up to 10 hours long or 5GB in size, and you can process 50 files at once. But you can upload as many batches as you want, all month long."
        },
        {
          "q": "accuracy",
          "question": "How accurate is the transcription?",
          "answer": "We guarantee 96% accuracy for clear audio. Our AI is trained on millions of hours of diverse content and handles accents, technical terms, and multiple speakers exceptionally well. For challenging audio, our smart enhancement features help improve results."
        },
        {
          "q": "languages",
          "question": "Which languages do you support?",
          "answer": "We support transcription in over 100 languages including English, Spanish, Mandarin, Hindi, Arabic, French, and more. Additionally, you can translate your transcripts into 249 different languages, making it perfect for global content."
        },
        {
          "q": "speed",
          "question": "How fast is the transcription?",
          "answer": "Lightning fast! A 1-hour audio file typically processes in under 5 minutes. With batch processing, you can upload 50 files simultaneously and let them process in parallel. Most users wake up to find their entire library transcribed overnight."
        },
        {
          "q": "cancellation",
          "question": "Can I cancel anytime?",
          "answer": "Absolutely! No contracts, no cancellation fees. You can upgrade, downgrade, or cancel your subscription anytime from your dashboard. If you cancel, you'll retain access until the end of your billing period."
        },
        {
          "q": "security",
          "question": "Is my data secure?",
          "answer": "Your security is our priority. We're SOC 2 certified, use 256-bit encryption for all data, and never use your content to train our models. You can delete your files anytime, and we automatically purge them after 30 days. GDPR and CCPA compliant."
        },
        {
          "q": "export_formats",
          "question": "What export formats are available?",
          "answer": "Download your transcripts in any format you need: PDF, Word (DOCX), Excel, CSV, SRT subtitles, plain text (TXT), and VTT captions. Perfect for whatever workflow you have."
        },
        {
          "q": "file_formats",
          "question": "What audio and video files can I upload?",
          "answer": "We support virtually every audio and video format you'll encounter: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, and more. If you can play it, we can transcribe it."
        }
      ]
    },
    CTASection: {
      "title": "Ready to Break Free from Limits?",
      "subtitle": "Join 50,000+ professionals who've made the switch to truly unlimited transcription",
      "button": "Try NeverCap Free",
      "disclaimer": "No credit card required for the Free Plan • Upgrade anytime for unlimited access"
    },
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'No More "Shrinkflation"',
      heroTitleLine1: "Truly Unlimited",
      heroTitleLine2: "AI Transcription",
      heroSubtitle:
        "While Trint caps you at 50 hours and Otter limits you to 10 files per month, we deliver what we actually promise: unlimited transcription with no hidden caps.",
      primaryCta: "Try It Free - No Credit Card",
      secondaryCta: "See the Truth",

      comparisonBadLabel: "What Others Do",
      comparisonBadTitle: "Hidden Limits Everywhere",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Unlimited" = 50 hours/month cap',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 lifetime imports (free), 10/month (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 minutes storage limit",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Max 30 hours/month",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Hidden in terms & conditions",

      comparisonGoodLabel: "What We Do",
      comparisonGoodTitle: "Actually Unlimited",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "No monthly minute caps",
      comparisonGoodItem1Text: "ever",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Unlimited file uploads",
      comparisonGoodItem2Text: "always",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "No storage limits",
      comparisonGoodItem3Text: "at all",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 files batch upload",
      comparisonGoodItem4Text: "anytime",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Transparent policy",
      comparisonGoodItem5Text: "upfront",

      feature1Label: "No Limits",
      feature1TitlePart1: "Transcribe 1,000 Hours?",
      feature1TitlePart2: "Same Price.",
      feature1Description:
        "Stop counting minutes. Stop watching caps. Whether you transcribe 10 hours or 10,000 hours per month, you pay the same flat rate. No overage fees. No surprise bills.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'No "fair use" policy tricks',
      feature1Point2Icon: "✓",
      feature1Point2Text: "No throttling after X hours",
      feature1Point3Icon: "✓",
      feature1Point3Text: "No end-of-month anxiety",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Monthly Hours",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Overage Fees",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Upload Anytime",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparent",

      feature2Label: "Bulk Freedom",
      feature2TitlePart1: "Upload Your",
      feature2TitlePart2: "Entire Archive",
      feature2Description:
        "Otter gives you 3 lifetime imports on free, 10 per month on Pro. We give you unlimited. Upload your podcast backlog, all your interviews, years of recordings. No restrictions.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 files per batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-hour files supported",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Process while you sleep",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 lifetime imports",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 files/month",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 hours/month cap",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Truly Unlimited ✓",

      feature3Label: "Social Proof",
      feature3TitlePart1: "Users Are",
      feature3TitlePart2: "Switching Daily",
      feature3Description:
        "\"I pay $100/year for Otter and they limit me to 10 file imports per month. The moment there's an alternative with unlimited imports, I'm gone!\" - Real Reddit user",
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000+ users switched",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'From Otter\'s "shrinkflation"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Never going back",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Happy Users",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Files Processed",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Accuracy",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "No Hidden Fees",

      trustBadge1Number: "∞",
      trustBadge1Label: "Minutes/Month",
      trustBadge2Number: "100+",
      trustBadge2Label: "Languages",
      trustBadge3Number: "96%",
      trustBadge3Label: "Accuracy",
      trustBadge4Number: "50",
      trustBadge4Label: "Batch Upload",
      ctaTitle: "Stop Paying for Fake Unlimited",
      ctaSubtitle:
        "Join thousands who switched to truly unlimited transcription",
      finalCta: "Try NeverCap Free"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Bulk Upload Freedom",
      heroTitleLine1: "Upload 50 Files.",
      heroTitleHighlight: "Process Everything.",
      heroSubtitle:
        "Otter gives you 3 lifetime imports. THREE. For your entire life. We give you unlimited uploads, 50 files at a time, whenever you need.",
      primaryCta: "Start Bulk Upload →",
      secondaryCta: "See the Limits",
      redditQuote:
        '"I have 3 years of podcast episodes to transcribe. Otter tells me I get 3 lifetime imports. THREE. This is insulting."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Real frustration from r/podcasting",

      comparisonSectionTitlePart1: "The",
      comparisonSectionTitleHighlight: "Ridiculous Limits",
      comparisonSectionTitlePart2: "They Impose",
      comparisonSubtitle:
        "How competitors restrict your ability to process content",

      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Lifetime imports",
      limitCard1DescriptionLine2: "(Yes, for your ENTIRE life)",

      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Files per month",
      limitCard2DescriptionLine2: "($100/year plan)",

      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "File at a time",
      limitCard3DescriptionLine2: "(Sequential upload)",

      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Unlimited uploads",
      limitCard4DescriptionLine2: "50 files per batch",

      feature1Label: "Batch Power",
      feature1TitlePart1: "Process Your",
      feature1TitleHighlight: "Entire Archive",
      feature1TitlePart2: "Overnight",
      feature1Description:
        'Upload 50 files before bed. Wake up to complete transcripts. No queuing, no waiting, no "please upgrade" messages. Just pure processing power at your fingertips.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 simultaneous uploads",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallel processing",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-hour files supported",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5GB per file maximum",
      uploadAnimationText1: "50 Files",
      uploadAnimationText2: "Drop & Process",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 more files...",

      feature2Label: "Speed",
      feature2TitlePart1: "From Upload to",
      feature2TitleHighlight: "Done in Hours",
      feature2Description:
        "Our parallel processing infrastructure means your 50 files aren't waiting in line. They're all being transcribed simultaneously. What used to take weeks now takes hours.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-hour file: 5 minutes",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 files: processed in parallel",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Email notification when done",
      timelineStep1Icon: "1",
      timelineStep1Title: "Upload",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Processing",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI Magic",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Complete",
      timelineStep4Time: "< 2 hours",

      feature3Label: "Freedom",
      feature3TitlePart1: "No Queues.",
      feature3TitleHighlight: "No Waiting.",
      feature3TitlePart2: "No Limits.",
      feature3Description:
        'While others make you wait in virtual lines or upgrade for "priority processing," we treat every upload with urgency. Your content matters, and it shouldn\'t wait.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "No priority tiers",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Same speed for everyone",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Upload anytime, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Always Ready",
      feature3VisualSubtext: "Upload whenever inspiration strikes",

      useCasesTitlePart1: "Perfect for",
      useCasesTitleHighlight: "Heavy Uploaders",
      useCasesSubtitle: "Real scenarios where bulk upload saves the day",

      useCase1Title: "Podcast Archives",
      useCase1Description:
        "Upload 3 years of episodes at once. Create transcripts for your entire back catalog. Generate SEO content for every episode.",

      useCase2Title: "Course Creation",
      useCase2Description:
        "Process all your lecture videos simultaneously. Create accessible transcripts for students. Build searchable course materials.",

      useCase3Title: "Interview Backlog",
      useCase3Description:
        "Clear that mountain of untranscribed interviews. Process weeks of research in hours. Meet your deadline without panic.",

      useCase4Title: "YouTube Library",
      useCase4Description:
        "Generate captions for your entire channel. Create blog posts from video content. Improve SEO across all videos.",

      useCase5Title: "Meeting Archives",
      useCase5Description:
        "Upload months of recorded meetings. Create searchable meeting notes. Never lose important decisions again.",

      useCase6Title: "Research Data",
      useCase6Description:
        "Process focus groups in bulk. Transcribe all participant interviews. Analyze qualitative data efficiently.",

      ctaTitle: "Stop Begging for More Uploads",
      ctaSubtitle: "Get unlimited bulk processing that actually works",
      finalCta: "Upload 50 Files Now →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Industry-Leading Accuracy",
      heroTitleLine1: "96% Accuracy.",
      heroTitleHighlight: "Every Word Matters.",
      heroSubtitle:
        "Industry-leading accuracy in 12 main languages. Word-level timestamps for perfect sync. Smart speaker identification that handles rapid conversations. Professional formatting that's actually readable.",
      primaryCta: "Test Our Accuracy →",
      secondaryCta: "See Languages",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Accuracy in",
      statCard1DescriptionLine2: "12 Main Languages",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Accuracy with",
      statCard2DescriptionLine2: "Accents & Dialects",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Word-Level",
      statCard3DescriptionLine2: "Timestamp Precision",

      languageSectionTitlePart1: "96% Accuracy ",
      languageSectionTitlePart2: "in 12 Main Languages",
      languageSubtitle: "Professional-grade transcription for global content",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "English",
      languageCard1Accuracy: "96% Accuracy",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spanish",
      languageCard2Accuracy: "96% Accuracy",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96% Accuracy",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "French",
      languageCard4Accuracy: "96% Accuracy",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "German",
      languageCard5Accuracy: "96% Accuracy",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japanese",
      languageCard6Accuracy: "96% Accuracy",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Korean",
      languageCard7Accuracy: "96% Accuracy",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portuguese",
      languageCard8Accuracy: "96% Accuracy",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russian",
      languageCard9Accuracy: "96% Accuracy",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italian",
      languageCard10Accuracy: "96% Accuracy",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Dutch",
      languageCard11Accuracy: "96% Accuracy",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabic",
      languageCard12Accuracy: "96% Accuracy",
      moreLanguagesText: "+ 88 more languages supported with 95%+ accuracy",

      feature1Label: "Precision",
      feature1TitlePart1: "Word-Level",
      feature1TitleHighlight: "Timestamps",
      feature1Description:
        "Every word is perfectly synced with its audio position. Create clickable transcripts, generate precise subtitles, or jump to exact moments in your recordings. 100ms precision that professionals trust.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms timestamp precision",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfect for video editing",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Clickable interactive transcripts",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Frame-accurate subtitles",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Speaker 1",
      transcriptLine1Text: "Welcome to today's podcast episode.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Speaker 2",
      transcriptLine2Text: "Thanks for having me on the show!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Speaker 1",
      transcriptLine3Text: "Let's dive into our main topic...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Speaker 2",
      transcriptLine4Text: "Absolutely, I'm excited to discuss this.",

      feature2Label: "Smart AI",
      feature2TitlePart1: "Handles",
      feature2TitleHighlight: "Rapid Conversations",
      feature2Description:
        "Our AI accurately identifies speakers even during overlapping speech, interruptions, and rapid back-and-forth conversations. Perfect for interviews, podcasts, and meetings where speakers frequently interject.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifies up to 20 speakers",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Handles interruptions perfectly",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Works with overlapping speech",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Maintains accuracy in crosstalk",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Speakers Identified",
      feature2VisualSubtext: "Even in rapid conversations",

      feature3Label: "Readability",
      feature3TitlePart1: "Perfectly",
      feature3TitleHighlight: "Formatted Text",
      feature3Description:
        "No more walls of text. Our AI automatically adds paragraphs, sentences, and punctuation exactly where they belong. The result? Transcripts that are actually pleasant to read and easy to scan.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smart paragraph breaks",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Accurate punctuation",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Proper capitalization",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Clean, scannable output",
      formattingTitle: "Before & After",
      formattingBeforeLabel: "❌ Others:",
      formattingBeforeText:
        "so today were going to talk about the new features weve been working on i think youll really like them theyve been requested by users for a long time and we finally got them done",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText:
        "So today, we're going to talk about the new features we've been working on. I think you'll really like them. They've been requested by users for a long time, and we finally got them done.",

      comparisonSubtitle: "Accuracy ",
      comparisonSectionTitle: "Comparison",
      comparisonDes: "See how we stack up against the competition",
      tableHeader1: "Feature",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Accuracy (Clear Audio)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Word-Level Timestamps",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Speaker Identification",
      tableRow3NeverCap: "20 speakers",
      tableRow3Otter: "16 speakers",
      tableRow3Descript: "10 speakers",
      tableRow3Rev: "✕",
      tableRow4Feature: "Handles Crosstalk",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limited",
      tableRow4Descript: "Limited",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart Formatting",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Basic",
      tableRow6Feature: "12 Languages at 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",

      ctaTitle: "Experience 96% Accuracy",
      ctaSubtitle: "Upload your most challenging audio and see the difference",
      finalCta: "Test Our Accuracy Now →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Simple, Transparent Pricing",
      "highlighted_text": "No Hidden Caps",
      "description": "Choose the plan that fits your needs. Upgrade or downgrade anytime. No contracts, no surprises."
    },
    Cards: {
      "title": "Simple, Transparent Pricing.",
      "highlighted_text": "No Hidden Caps.",
      "description": "Choose the plan that fits your needs. Upgrade or downgrade anytime. No contracts, no surprises.",
      "plans": [
        {
          "name": "Free",
          "price": "$0",
          "period": "month",
          "discount": "Perfect for trying out our service",
          "limits": {
            "title": "Daily Limits",
            "items": [
              "3 files/day (≈90 min total/day)",
              "Up to 30 min per file (≤250 MB)",
              "Upload 1 file at a time",
              "Standard priority queue"
            ]
          },
          "features": {
            "title": "Features",
            "items": [
              "100+ languages",
              "Speaker labels",
              "Translation",
              "All export formats"
            ]
          },
          "cta": {
            "text": "Start free. No credit card.",
            "button": "Start Free"
          }
        },
        {
          "name": "Pro Monthly",
          "price": "$17.99",
          "period": "month",
          "discount": "$9.99 for the first month",
          "limits": {
            "title": "No Monthly Cap",
            "items": [
              "Unlimited total minutes",
              "Up to 10 hours / 5 GB per file",
              "Upload 50 files at once",
              "Priority queue"
            ]
          },
          "features": {
            "title": "Everything in Free, plus",
            "items": [
              "Word-level timestamps",
              "Advanced speaker identification",
              "Formatted paragraphs & punctuation",
              "Priority support"
            ]
          },
          "cta": {
            "text": "Unlimited minutes. Priority speed. Batch uploads.",
            "button": "Go Pro"
          },
          "badge": "Most Popular"
        },
        {
          "name": "Pro Annual",
          "price": "$8.99",
          "period": "month",
          "discount": "Billed annually $107.88",
          "limits": {
            "title": "Same as Pro Monthly",
            "items": [
              "Unlimited total minutes",
              "Up to 10 hours / 5 GB per file",
              "Upload 50 files at once",
              "Priority queue"
            ]
          },
          "features": {
            "title": "Everything in Free, plus",
            "items": [
              "Word-level timestamps",
              "Advanced speaker identification",
              "Formatted paragraphs & punctuation",
              "Priority support"
            ]
          },
          "cta": {
            "text": "Unlimited minutes. Priority speed. Batch uploads.",
            "button": "Go Pro"
          },
          "badge": "Best Value - ",
        }
      ],
      "disclaimer": "\"Unlimited\" means no monthly cap and no artificial slowdown. Fair-use applies to abusive automation or redistribution."
    },
    ComparisonTable: {
      "header": {
        "title": "Compare ",
        "highlighted_text": "All Features",
        "subtitle": "See exactly what you get with each plan. No hidden limitations."
      },
      "plans": ["Features", "Free", "Pro Monthly", "Pro Annual"],
      "features": [
        {
          "name": "Price",
          "values": [
            "$0/month",
            {
              "main": "$17.99/month",
              "note": "$9.99 first month"
            },
            {
              "main": "$8.99/month",
              "note": "Billed $107.88/year"
            }
          ]
        },
        {
          "name": "Monthly minutes",
          "values": ["~2,700 (90/day)", "Unlimited", "Unlimited"]
        },
        {
          "name": "Max file duration",
          "values": ["30 minutes", "10 hours", "10 hours"]
        },
        {
          "name": "Max file size",
          "values": ["250 MB", "5 GB", "5 GB"]
        },
        {
          "name": "Batch uploads",
          "values": ["1 file", "50 files", "50 files"]
        },
        {
          "name": "Processing speed",
          "values": ["Standard", "Priority", "Priority"]
        },
        {
          "name": "Languages supported",
          "values": ["100+ languages", "100+ languages", "100+ languages"]
        },
        {
          "name": "Translation",
          "values": [true, true, true]
        },
        {
          "name": "Speaker identification",
          "values": ["Basic", "Advanced (20 speakers)", "Advanced (20 speakers)"]
        },
        {
          "name": "Word-level timestamps",
          "values": [false, true, true]
        },
        {
          "name": "Formatted paragraphs",
          "values": [false, true, true]
        },
        {
          "name": "Export formats",
          "values": ["All formats", "All formats", "All formats"]
        },
        {
          "name": "Support",
          "values": ["Email", "Priority email", "Priority email"]
        },
        {
          "name": "Data retention",
          "values": ["30 days", "Forever", "Forever"]
        }
      ]
    },
    FAQ: {
      "title": "Frequently Asked ",
      "titleHighligt": "Questions",
      "items": [
        {
          "q": "unlimited_policy",
          "question": "Is it really unlimited?",
          "answer": "Yes! Pro plans have no monthly minute caps. The only limits are technical: 10-hour max file duration and 5GB file size. You can process as many files as you need."
        },
        {
          "q": "plan_change",
          "question": "Can I change plans anytime?",
          "answer": "Absolutely! You can cancel your subscription anytime from your dashboard. Upgrade or downgrade whenever you need."
        },
        {
          "q": "payment_methods",
          "question": "What payment methods do you accept?",
          "answer": "We accept all major credit cards, debit cards, and PayPal for secure, hassle-free payments."
        },
        {
          "q": "free_trial",
          "question": "Is there a free trial for Pro?",
          "answer": "Yes! Try Pro free for 7 days, no credit card required. Plus, get your first month at 45% off when you subscribe."
        },
        {
          "q": "file_retention",
          "question": "How long do you keep my files?",
          "answer": "Free plan: 30 days. Pro plans: Forever! Your transcripts are always available in your account."
        },
        {
          "q": "data_security",
          "question": "What about data security?",
          "answer": "We're SOC 2 certified and use 256-bit encryption. We never use your content to train our models. Your data is yours."
        }
      ]
    },
    CTA: {
      "title": "Ready to Go Unlimited?",
      "subtitle": "Join 50,000+ professionals transcribing without limits",
      "button": "Try NeverCap Free →",
      "disclaimer": "No credit card required • Start transcribing in seconds"
    }
  },
  UseCases: {
    AllUseCases: {
      // Hero Section
      builtFor: "Built for",
      heavyUsers: "Heavy Users",
      whoActuallyNeed: "Who Actually Need Unlimited",
      heroSubtitle:
        "From podcasters with years of backlog to researchers with hundreds of interviews. See how professionals use NeverCap to break free from upload limits and minute caps.",

      // Individual use case data
      podcasters: {
        title: "Podcasters",
        pain: `"Stop choosing which episodes deserve transcripts"`,
        description:
          "Upload your entire podcast archive at once. Generate show notes, improve SEO, and repurpose content without counting minutes.",
        benefits: {
          benefit1: "Upload all episodes, not just 3",
          benefit2: "Generate SEO-friendly show notes",
          benefit3: "Create searchable archives",
          benefit4: "Repurpose into blog content"
        },
        stats: {
          stat1: { number: "150+", label: "Episodes" },
          stat2: { number: "200hrs", label: "Saved" },
          stat3: { number: "3x", label: "SEO Traffic" }
        }
      },
      journalists: {
        title: "Journalists & Writers",
        pain: `"Deadline pressure meets upload restrictions"`,
        description:
          "Batch upload all interviews before deadline. Search across transcripts instantly and never miss a crucial quote.",
        benefits: {
          benefit1: "Batch upload before deadlines",
          benefit2: "Search all interviews at once",
          benefit3: "Accurate quotes with timestamps",
          benefit4: "Handle accents & languages"
        },
        stats: {
          stat1: { number: "30+", label: "Interviews/mo" },
          stat2: { number: "96%", label: "Accuracy" },
          stat3: { number: "5min", label: "Per Hour" }
        }
      },
      contentCreators: {
        title: "Content Creators",
        pain: `"Accessibility shouldn't be expensive"`,
        description:
          "Caption your entire YouTube channel. Generate subtitles in multiple languages and improve your video SEO instantly.",
        benefits: {
          benefit1: "Caption all videos at once",
          benefit2: "249 language translations",
          benefit3: "YouTube-ready SRT files",
          benefit4: "Boost video SEO ranking"
        },
        stats: {
          stat1: { number: "100+", label: "Videos" },
          stat2: { number: "100+", label: "Languages" },
          stat3: { number: "249", label: "Translations" }
        }
      },
      researchers: {
        title: "Researchers & Academics",
        pain: `"Qualitative data shouldn't wait in line"`,
        description:
          "Process entire research studies at once. Handle focus groups, interviews, and panel discussions with perfect speaker identification.",
        benefits: {
          benefit1: "Process focus groups in bulk",
          benefit2: "20-speaker identification",
          benefit3: "Export to analysis software",
          benefit4: "GDPR compliant security"
        },
        stats: {
          stat1: { number: "100+", label: "Study" },
          stat2: { number: "96%", label: "Group Accuracy" },
          stat3: { number: "GDPR", label: "Compliant" }
        }
      },
      businessTeams: {
        title: "Business Teams",
        pain: `"Meeting recordings should be effortless"`,
        description:
          "Record meetings directly or upload audio files for instant transcription. Build searchable archives from unlimited conversations and never lose important discussions again.",
        benefits: {
          benefit1: "Direct audio recording & transcription",
          benefit2: "Unlimited meeting recordings",
          benefit3: "Searchable meeting archive",
          benefit4: "Upload audio files instantly"
        },
        stats: {
          stat1: { number: "Live", label: "Recording" },
          stat2: { number: "Instant", label: "Upload" },
          stat3: { number: "20+", label: "Speakers" }
        }
      },
      educators: {
        title: "Educators",
        pain: `"YouTube videos need instant transcription"`,
        description:
          "Simply paste YouTube links to get instant transcripts and auto-generated captions. Transform any educational video into accessible, searchable content.",
        benefits: {
          benefit1: "Direct YouTube link transcription",
          benefit2: "Auto-generate video captions",
          benefit3: "Transcribe entire courses",
          benefit4: "Searchable lecture archives"
        },
        stats: {
          stat1: { number: "1-Click", label: "YouTube Paste" },
          stat2: { number: "Auto", label: "Captions" },
          stat3: { number: "100+", label: "Languages" }
        }
      },

      // Customer Quotes Section
      quotes: {
        title: "Real Users, ",
        titleHighlight: "Real Freedom",
        subtitle:
          "Hear from professionals who broke free from artificial limits",
        testimonials: {
          mike: {
            textBefore: `"I had `,
            highlight: "3 years of episodes",
            textAfter: ` sitting untranscribed. Otter wanted me to pick 3. THREE. NeverCap let me upload all 150 episodes in one weekend."`,
            name: "Mike Rodriguez",
            role: "Podcast Host"
          },
          jessica: {
            textBefore: `"As a freelance journalist, I can't afford Trint's `,
            highlight: "$100/month",
            textAfter: `, but I also can't work with Otter's 10 files per month limit. NeverCap saved my career."`,
            name: "Jessica Park",
            role: "Freelance Journalist"
          },
          sarah: {
            textBefore: `"Our research team had  `,
            highlight: "200 hours",
            textAfter: ` of focus group recordings. We processed everything over a weekend instead of rationing monthly minutes."`,
            name: "Dr. Sarah Chen",
            role: "Lead Researcher"
          },
          carlos: {
            textBefore: `"I make educational content in Spanish. NeverCap transcribes perfectly and `,
            highlight: "translates to English",
            textAfter: ` for broader reach. No limits, just growth."`,
            name: "Carlos Martinez",
            role: "YouTube Educator"
          }
        }
      },

      // Industries Section
      industries: {
        title: "Trusted Across ",
        titleHighlight: "Industries",
        subtitle: "Professionals everywhere are switching to truly unlimited",
        list: {
          media: "Media & Publishing",
          education: "Education",
          healthcare: "Healthcare",
          technology: "Technology",
          finance: "Finance",
          legal: "Legal"
        }
      },

      // CTA Section
      cta: {
        title: "Your Use Case Needs Unlimited Too",
        subtitle:
          "Join 50,000+ professionals who stopped counting minutes and started creating",
        button: "Start Your Unlimited Journey →"
      }
    },
    Podcasters: {
      // Hero Section
      badge: "Built for Podcasters",
      heroTitle: "Transcribe Your",
      heroTitleHighlight: "Entire Podcast Archive",
      heroSubtitle:
        "Upload your entire back catalog. Create show notes for every episode. No more choosing which episodes to transcribe. Process 50 episodes at once, unlimited times per month.",
      ctaPrimary: "Start Transcribing Free",
      ctaSecondary: "See How It Works",
      trustBadge1: "10,000+ Podcasters",
      trustBadge2: "Unlimited Episodes",
      trustBadge3: "SEO-Ready Transcripts",

      // Stats Section
      stats: {
        stat1: { number: "∞", label: "Episodes/Month" },
        stat2: { number: "50", label: "Batch Upload" },
        stat3: { number: "10hrs", label: "Max Episode Length" },
        stat4: { number: "96%", label: "Accuracy" }
      },

      // Problem Solution Section
      problemTitle: "The",
      problemTitleHighlight: "Podcast Transcription Problem",
      problemSubtitle: `Other services make you choose which episodes are "worth" transcribing`,

      problems: {
        problem1: {
          title: "Upload Limits Kill Archives",
          description:
            "Otter gives you 3 lifetime imports on free, 10 per month on Pro. How do you transcribe 3 years of episodes?"
        },
        problem2: {
          title: "Missing SEO Opportunities",
          description:
            "Every untranscribed episode is lost SEO traffic. But Descript limits you to 30 hours/month at best."
        },
        problem3: {
          title: "Costs Explode with Growth",
          description:
            "As your podcast grows, transcription costs skyrocket. $2/hour overage fees make scaling impossible."
        }
      },

      solutionTitle: "The",
      solutionTitleHighlight: "NeverCap Solution",
      solutionDescription:
        "True unlimited transcription. Upload your entire archive. Transcribe every new episode. Generate show notes at scale. No caps, no limits, just growth.",

      // Workflow Section
      workflowTitle: "Your Podcast Workflow,",
      workflowTitleHighlight: "Simplified",
      workflowSubtitle: "From recording to SEO-optimized show notes in minutes",

      workflow: {
        step1: {
          title: "Upload Episodes",
          description:
            "Drop 50 episodes at once. MP3, MP4, WAV - we handle them all."
        },
        step2: {
          title: "AI Transcribes",
          description:
            "96% accuracy with speaker identification. Perfect for interviews."
        },
        step3: {
          title: "Smart Formatting",
          description:
            "AI adds paragraphs, sentences, and punctuation automatically."
        },
        step4: {
          title: "Publish & Rank",
          description: "Export to your website. Watch your SEO traffic grow."
        }
      },

      // Features Section
      featuresTitle: "Features Podcasters",
      featuresTitleHighlight: "Actually Need",
      featuresSubtitle: "Built by podcasters, for podcasters",

      features: {
        feature1: {
          title: "Multi-Speaker Detection",
          description:
            "Automatically identifies and labels up to 20 speakers. Perfect for panel discussions, interviews, and co-hosted shows."
        },
        feature2: {
          title: "Timestamp Chapters",
          description:
            "Generate clickable timestamps for YouTube descriptions. Let listeners jump to their favorite segments instantly."
        },
        feature3: {
          title: "Smart Formatting",
          description:
            "Automatically adds paragraphs, sentences, and punctuation. Get clean, readable transcripts. Save hours on post-production."
        },
        feature4: {
          title: "SEO Optimization",
          description:
            "Transcripts formatted for search engines. Boost your podcast's discoverability and reach new audiences."
        },
        feature5: {
          title: "100+ Languages",
          description:
            "Transcribe in any language. Translate to 249+ languages. Reach global audiences effortlessly."
        },
        feature6: {
          title: "Batch Processing",
          description:
            "Upload 50 episodes before bed. Wake up to complete transcripts. Process your entire archive overnight."
        }
      },

      // Testimonials Section
      testimonialsTitle: "Podcasters Who Made",
      testimonialsTitleHighlight: "The Switch",
      testimonialsSubtitle: "Real stories from real podcasters",

      testimonials: {
        mike: {
          text: `"I've been doing a podcast for 3 years and was manually transcribing everything like an idiot. Uploaded 6 episodes at once and it separated me and my co-host perfectly. The coffee shop episode I thought was ruined? Crystal clear transcript. I'm never going back to typing this stuff out myself."`,
          name: "Mike Rodriguez",
          role: `Host of "The Daily Grind" Podcast`
        },
        sarah: {
          text: `"Otter was limiting me to 10 file imports per month. I have 150 episodes backlogged. NeverCap let me upload everything in 3 batches. My organic traffic has increased 300% since adding transcripts to old episodes. This literally pays for itself."`,
          name: "Sarah Chen",
          role: `Creator of "Tech Talks Today"`
        }
      },

      // Comparison Section
      comparisonTitle: "Why Podcasters Choose",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "See how we stack up against the competition",

      comparison: {
        headers: {
          feature: "Feature",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Monthly Episode Limit",
            nevercap: "Unlimited",
            otter: "~13 episodes (1200 min)",
            descript: "~30 episodes (30 hrs)"
          },
          uploadLimit: {
            feature: "File Upload Limit",
            nevercap: "Unlimited",
            otter: "10 per month",
            descript: "1 at a time"
          },
          batchProcessing: {
            feature: "Batch Processing",
            nevercap: "50 files",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Max Episode Length",
            nevercap: "10 hours",
            otter: "90 minutes",
            descript: "Unlimited"
          },
          speakerDetection: {
            feature: "Speaker Detection",
            nevercap: "20 speakers",
            otter: "16 speakers",
            descript: "10 speakers"
          },
          smartFormatting: {
            feature: "Smart Formatting",
            nevercap: "✓ Perfect",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Price",
            nevercap: "$17.99/mo",
            otter: "$16.99/mo",
            descript: "$30/mo"
          }
        }
      },

      // CTA Section
      ctaTitle: "Start Transcribing Every Episode",
      ctaSubtitle: "Join 10,000+ podcasters who never worry about limits",
      ctaButton: "Upload Your First 50 Episodes Free →",
      ctaDisclaimer:
        "No credit card required • Process unlimited episodes • Cancel anytime"
    },
    Journalists: {
      hero: {
        badge: `For Journalists & Writers`,
        title: `Transcribe Every Interview.`,
        titleHighlight: `Never Miss a Quote.`,
        subtitle: `Stop choosing which interviews deserve transcription. Upload all recordings at once, search across everything instantly, and meet your deadlines without the upload anxiety.`,
        ctaPrimary: `Start Unlimited Uploads →`,
        ctaSecondary: `See How It Works`,
        stats: {
          uploads: {
            number: `∞`,
            label: `File Uploads`
          },
          accuracy: {
            number: `96%`,
            label: `Accuracy`
          },
          speed: {
            number: `5min`,
            label: `Per Hour`
          }
        },
        dashboard: {
          title: `Interview Queue`,
          status: `• All Processing`,
          interviews: {
            cityCouncil: {
              title: `City Council Meeting`,
              duration: `2h 15min • Uploading...`,
              action: `Processing`
            },
            expertInterview: {
              title: `Expert Interview - Dr. Chen`,
              duration: `45min • Transcribing...`,
              action: `96% Done`
            },
            pressConference: {
              title: `Press Conference`,
              duration: `1h 30min • Ready`,
              action: `View →`
            },
            phoneInterview: {
              title: `Phone Interview - Source`,
              duration: `35min • Ready`,
              action: `View →`
            }
          }
        }
      },
      problem: {
        title: `The`,
        titleHighlight: `Journalist Transcription Problem`,
        subtitle: `Other services make you choose which interviews are "worth" transcribing`,
        problems: {
          uploadLimits: {
            title: `Upload Limits Kill Investigations`,
            description: `Otter gives you 10 file imports per month on Pro. How do you transcribe 3 weeks of investigative interviews?`
          },
          missingQuotes: {
            title: `Missing Crucial Quotes`,
            description: `Every untranscribed interview could contain the story's key quote. But Trint limits you to 50 hours/month at best.`
          },
          costExplosion: {
            title: `Costs Explode with Deadlines`,
            description: `As your investigation deepens, transcription costs skyrocket. $100/month overage fees make breaking news impossible.`
          }
        },
        solution: {
          title: `The`,
          titleHighlight: `NeverCap Solution`,
          description: `True unlimited transcription. Upload your entire investigation. Transcribe every interview. Search all quotes instantly. No caps, no limits, just journalism.`
        }
      },
      solution: {
        title: `1`,
        titleHighlight: `Best Interview Transcription Software`,
        titleSuffix: `for Journalists`,
        subtitle: `Real advantages that matter when deadlines are tight and accuracy is everything`,
        solutions: {
          unlimitedUploads: {
            label: `Unlimited Volume`,
            title: `Unlimited Volume for All Your Interviews`,
            description: `Unlike software with minute caps, you can transcribe every interview, from a quick chat to a multi-hour discussion. Never worry about running out of credits on a deadline.`,
            points: {
              simultaneousUpload: `No monthly minute limits`,
              noLimits: `Support for 10-hour interviews`,
              processWhileWrite: `Process entire investigations at once`,
              longRecordings: `10-hour recordings supported`
            },
            visual: {
              number: `∞`,
              label: `No Limits. Ever.`
            }
          },
          instantSearch: {
            label: `Lightning Speed`,
            title: `Speed That Matches Your News Cycle`,
            description: `Get your interview transcription back in minutes, not days. Turn around stories faster than ever. Our AI processes hours of audio while you grab coffee.`,
            points: {
              searchAll: `5-minute turnaround for 1-hour interviews`,
              wordTimestamps: `Priority processing for urgent stories`,
              jumpToMoments: `Real-time progress tracking`
            },
            searchDemo: {
              placeholder: `5min`,
              resultsText: `Per Hour of Audio`,
            }
          },
          professionalAccuracy: {
            label: `Quote-Ready Accuracy`,
            title: `Accuracy You Can Quote`,
            description: `Our AI delivers highly accurate transcripts, ensuring the quotes you publish are precise and reliable. Professional-grade transcription that editors trust.`,
            points: {
              accuracyGuarantee: `96% accuracy guarantee`,
              handlesAccents: `Handles technical terminology`,
              smartPunctuation: `Perfect speaker identification`
            },
            visual: {
              accuracy: `96%`,
              label: `Publication-Ready Accuracy`
            }
          },
          ironclad: {
            label: `Source Protection`,
            title: `Ironclad Source Protection`,
            description: `We offer robust security features to protect your sensitive interview data and confidential sources. Bank-level encryption keeps your investigations secure.`,
            points: {
              accuracyGuarantee: `End-to-end encryption`,
              handlesAccents: `Automatic file deletion options`,
              smartPunctuation: `GDPR & privacy compliant`
            },
            visual: {
              accuracy: `🔒`,
              label: `Maximum Security`,
            }
          }
        }
      },
      features: {
        title: `Everything a`,
        titleHighlight: `Journalist Needs`,
        subtitle: `Professional tools that respect your workflow`,
        featuresList: {
          languages: {
            title: `100+ Languages`,
            description: `Interview sources globally in 12 main languages with 96% accuracy.`
          },
          exportFormats: {
            title: `Export Formats`,
            description: `Word, PDF, SRT, TXT. Compatible with any workflow.`
          },
          sourceProtection: {
            title: `Source Protection`,
            description: `Bank-level encryption. Your sources stay confidential.`
          },
          timestamps: {
            title: `Timestamps`,
            description: `Click any quote to jump to the exact audio moment.`
          },
          teamSharing: {
            title: `Team Sharing`,
            description: `Collaborate with editors. Share transcripts securely.`
          },
          mobileReady: {
            title: `Mobile Ready`,
            description: `Upload from phone. Review transcripts anywhere.`
          },
          smartFormatting: {
            title: `Smart Formatting`,
            description: `Automatic paragraphs and punctuation for readable transcripts.`
          },
          batchProcessing: {
            title: `Batch Processing`,
            description: `Upload 50 files at once. Process overnight while you sleep.`
          }
        }
      },
      testimonials: {
        jessica: {
          quote: `I had 3 years of interviews sitting untranscribed because of upload limits. NeverCap let me process everything in one weekend. Game changer.`,
          name: `Jessica Park`,
          role: `Freelance Journalist, Former Otter User`
        }
      },
      cta: {
        title: `Start Transcribing`,
        titleHighlight: `Without Limits`,
        subtitle: `Join thousands of journalists who stopped counting uploads and started focusing on stories`,
        ctaPrimary: `Try Unlimited Free →`,
        ctaSecondary: `View Pricing`
      }
    },
    ContentCreators: {
      hero: {
        badge: `For Content Creators`,
        title: `Transcribe YouTube Videos,`,
        titleHighlight: `Limitlessly`,
        titleSuffix: `1`,
        subtitle: `Whether you need to transcribe a YouTube video, transcribe a TikTok video for repurposing, or figure out how to transcribe a Facebook video to text, our platform handles it all seamlessly. Generate subtitles in 100+ languages with no monthly limits – just pure creative freedom.`,
        ctaPrimary: `Start Unlimited Captioning →`,
        ctaSecondary: `See How It Works`,
        stats: {
          videos: {
            number: `∞`,
            label: `Videos/Month`
          },
          languages: {
            number: `100+`,
            label: `Languages`
          },
          accuracy: {
            number: `96%`,
            label: `Accuracy`
          },
          platforms: {
            number: `10+`,
            label: `Platforms`
          }
        }
      },
      platforms: {
        titleMax: `Transcribe Videos from`,
        titleMaxHighlight: 'Any Platform',
        title: `Fetch & Transcribe From Any Platform`,
        platformNames: {
          youtube: `YouTube`,
          facebook: `Facebook`,
          twitter: `X (Twitter)`,
          dropbox: `Dropbox`,
          googleDrive: `Google Drive`,
          vimeo: `Vimeo`,
          tiktok: `TikTok`,
          instagram: `Instagram`
        }
      },
      features: {
        title: `Everything You Need to`,
        titleHighlight: `Scale Content`,
        subtitle: `Professional tools without professional limits`,
        oneClickImport: {
          label: `One-Click Import`,
          title: `Transcribe YouTube, TikTok & `,
          titleHighlight: `Instagram Videos by Pasting a Link`,
          description: `Our tool simplifies how you transcribe video content. To transcribe an Instagram video, just paste the link. To transcribe a Vimeo video to text, do the same. Process your entire channel's backlog in one weekend.`,
          points: {
            directYoutube: `Direct YouTube link transcription`,
            multiplePlatforms: `Fetch from 10+ platforms`,
            batchPlaylists: `Batch process entire playlists`,
            autoSync: `Auto-sync with your channels`
          },
          demo: {
            instruction: `Paste your video URL:`,
            url: `https://youtube.com/watch?v=...`,
            status: `Fetching & Transcribing...`
          }
        },
        globalReach: {
          label: `Global Reach`,
          title: `100+ Languages.`,
          titleHighlight: `Zero Limits.`,
          description: `Reach global audiences with automatic translation to 100+ languages. Generate subtitles in multiple languages simultaneously. No extra charges, no monthly caps on translations.`,
          points: {
            highAccuracy: `96% accuracy in 12 main languages`,
            unlimitedTranslations: `Unlimited translations included`,
            multicultural: `Perfect for multicultural content`,
            autoDetect: `Auto-detect source language`
          },
          visual: {
            number: `100+`,
            title: `Languages Supported`,
            subtitle: `Translate once, reach everyone`
          }
        },
        flexibleExport: {
          label: `Flexible Export`,
          title: `Every Format`,
          titleHighlight: `You Need`,
          description: `Export in the format that works for your workflow. From SRT files for YouTube to VTT for web players, or editable docs for scripts. All exports unlimited, all included in every plan.`,
          points: {
            videoFormats: `SRT & VTT for video platforms`,
            editingFormats: `DOCX & PDF for editing`,
            dataAnalysis: `CSV for data analysis`,
            simpleScripts: `TXT for simple scripts`
          },
          formats: {
            srt: `SRT`,
            vtt: `VTT`,
            txt: `TXT`,
            docx: `DOCX`,
            pdf: `PDF`,
            csv: `CSV`
          }
        }
      },
      workflow: {
        title: `From Upload to`,
        titleHighlight: `Published`,
        titleSuffix: `in Minutes`,
        subtitle: `The fastest way to caption your entire content library`,
        steps: {
          pasteLinks: {
            title: `Paste Links`,
            description: `Drop YouTube, TikTok, or any video link. Or upload files directly.`
          },
          autoTranscribe: {
            title: `Auto-Transcribe`,
            description: `AI processes with 96% accuracy. Handles accents & multiple speakers.`
          },
          editTranslate: {
            title: `Edit & Translate`,
            description: `Perfect your captions. Translate to 100+ languages instantly.`
          },
          exportPublish: {
            title: `Export & Publish`,
            description: `Download in any format. Upload to your platform. Done!`
          }
        }
      },
      testimonials: {
        title: `Creators Are`,
        titleHighlight: `Switching Daily`,
        subtitle: `From limited plans to unlimited freedom`,
        carlos: {
          textBefore: `I make educational content in Spanish. NeverCap transcribes perfectly and`,
          textAfter: `for broader reach. No limits, just growth. My channel views increased 3x after adding multilingual captions.`,
          highlight: ` translates to English `,
          name: `Carlos Martinez`,
          role: `YouTube Educator • 250K Subscribers`
        },
        sarah: {
          textBefore: `Descript wanted $30/month for`,
          textAfter: `. I have 500+ videos backlogged. NeverCap let me process everything in one weekend. The SEO boost from captions paid for itself in the first month.`,
          highlight: ` 30 hours`,
          name: `Sarah Lee`,
          role: `Lifestyle Vlogger • 180K Subscribers`
        },
        jake: {
          textBefore: `The `,
          textAfter: `feature is a game-changer. I don't download anything anymore. Just paste, transcribe, done. Processing my podcast clips for TikTok has never been easier.`,
          highlight: `direct YouTube fetch `,
          name: `Jake Wilson`,
          role: `Podcast Host • Top 1% Creator`
        },
        yuki: {
          textBefore: `I create content in 5 languages. Other services charge`,
          textAfter: `. NeverCap gives me unlimited translations. My international audience grew 400% since I started using proper native captions.`,
          highlight: ` per translation`,
          name: `Yuki Tanaka`,
          role: `Gaming Creator • 500K Subscribers`
        }
      },
      cta: {
        title: `Your Entire Channel. Captioned. Today.`,
        subtitle: `Join 50,000+ creators who stopped counting minutes and started creating`,
        button: `Start Unlimited Captioning →`
      },
      FAQSection: {
        "title": "Your Transcription Questions,",
        "titleHighlight": "Answered",
        subtitle: 'Everything you need to know about transcribing videos from different platforms',
        "questions": [
          {
            "question": "Q: How do I transcribe a YouTube video with NeverCap?",
            "answer": "It's simple. Just find the YouTube video you want to transcribe, copy its URL, and paste it into our app. Our AI will automatically fetch the video and provide a full text transcript in minutes."
          },
          {
            "question": "Q: What is the best way to transcribe a Facebook video to text?",
            "answer": "The easiest way is to use a direct link. Copy the URL of the Facebook video, and our platform will handle the rest, converting the speech to text with up to 96% accuracy, saving you from manual transcription."
          },
          {
            "question": "Q: Can I transcribe TikTok and Instagram videos?",
            "answer": "Absolutely. We support transcription for both TikTok and Instagram videos. This is perfect for content creators who want to repurpose their short-form video content into blog posts, articles, or text-based social media updates."
          },
          {
            "question": "Q: How do I transcribe a Vimeo video to text?",
            "answer": "Transcribing Vimeo videos is just as easy as any other platform. Simply copy the Vimeo video URL and paste it into NeverCap. Our AI will process the video and generate accurate text transcription that you can download in multiple formats."
          }
        ]
      },
    },
    Researchers: {
      // Hero Section
      heroBadge: "Built for Academic Excellence",
      heroTitle1: "Transcribe Every Interview.",
      heroTitle2: "Analyze All Your Data.",
      heroSubtitle: "Stop choosing which focus groups to transcribe. Process all your qualitative data with 96% accuracy and flawless speaker identification—even with 20 participants talking over each other.",
      heroCtaPrimary: "Try It Free - No Credit Card",
      heroCtaSecondary: "See How It Works",

      // Stats Bar
      statsInterviewHours: "Interview Hours",
      statsAccuracy: "Accuracy",
      statsSpeakersId: "Speakers ID",
      statsCompliant: "Compliant",

      // Problem Section
      problemTitle: "The",
      problemTitle2: "Research Transcription Problem",
      problemSubtitle:
        'Other services make you choose which data is "worth" transcribing',

      problemCard1Title: "Upload Limits Kill Studies",
      problemCard1Desc:
        "Otter gives you 3 lifetime imports. How do you transcribe 200 hours of focus groups?",

      problemCard2Title: "Missing Critical Data",
      problemCard2Desc:
        "Every untranscribed interview could contain breakthrough insights. But Rev charges $2/minute minimum.",

      problemCard3Title: "Grant Money Disappears",
      problemCard3Desc:
        "As your dataset grows, transcription costs explode. $500 per focus group makes scaling impossible.",

      title: "The ",
      solutionTitle: "NeverCap Solution",
      solutionDesc:
        "True unlimited transcription. Upload your entire study. Transcribe every interview. Analyze all your data. No caps, no limits, just research.",

      // Features Section
      feature1Label: "No Limits",
      feature1TitleHl: "Entire Study",
      feature1Title: "Process Your",
      feature1TitlePost: " in One Go",
      feature1Desc:
        'Upload all 200 hours of interviews tonight. Wake up to complete, searchable transcripts. No monthly caps, no per-file limits, no "fair use" BS.',
      feature1Point1: "Batch upload 50 files simultaneously",
      feature1Point2: "Process longitudinal studies completely",
      feature1Point3: "No storage limits on transcripts",
      feature1Point4: "Export to NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Unlimited Hours",
      feature1Visual2: "Same price whether 10 or 10,000 hours",

      feature2Label: "Smart AI",
      feature2TitleHl: "Focus Groups",
      feature2Title: "Nails",
      feature2TitlePost: " Every Time",
      feature2Desc:
        "Our AI tracks up to 20 speakers even when they're talking over each other, cutting each other off, or all chiming in at once. Every voice gets captured and labeled correctly.",
      feature2Point1: "20-speaker identification",
      feature2Point2: "Handles crosstalk & interruptions",
      feature2Point3: "Speaker labels you can rename",
      feature2Point4: "Timestamp for every word",

      // Conversation Demo
      conversationParticipant1: "Participant 1",
      conversationText1:
        "The main barrier we face is definitely the cost of treatment...",
      conversationParticipant2: "Participant 2",
      conversationText2: "Absolutely, but I'd add that access is—",
      conversationParticipant3: "Participant 3",
      conversationText3: "—sorry to interrupt, but transportation is huge too.",
      conversationText4: "Yes! That's exactly what I was about to say.",
      conversationParticipant4: "Participant 4",
      conversationText5:
        "In rural areas, it's all three: cost, access, AND transport.",

      feature3Label: "Precision",
      feature3TitleHl: "96% Accuracy ",
      feature3Title: "That Holds Up",
      feature3Desc:
        "Handles technical jargon, thick accents, and field-specific terminology like a pro. Accurate enough for publication, peer review, and your dissertation committee.",
      feature3Point1: "Medical & scientific terminology",
      feature3Point2: "100+ languages & dialects",
      feature3Point3: "Verbatim & clean read modes",
      feature3Point4: "Edit and export in any format",
      feature3Visual1: "Research-Grade Accuracy",
      feature3Visual2: "Trusted by 50,000+ researchers",

      feature4Label: "Security",
      feature4TitleHl: "Security",
      feature4Title: "IRB-Ready",
      feature4Desc:
        "Your sensitive research data is protected with enterprise-grade security. GDPR compliant, HIPAA-ready options, and full audit trails for IRB requirements.",
      feature4Point1: "End-to-end encryption",
      feature4Point2: "GDPR & CCPA compliant",
      feature4Point3: "Auto-deletion policies",
      feature4Point4: "Secure team collaboration",

      // Use Cases Section
      useCasesTitle: "Perfect for",
      useCasesTitle2: "Every Research Method",
      useCasesSubtitle: "From ethnography to clinical trials",

      useCase1Title: "Focus Groups",
      useCase1Desc:
        "Handle 8-20 participants with overlapping speech. Perfect speaker identification even during heated discussions. Export directly to qualitative analysis software.",

      useCase2Title: "In-Depth Interviews",
      useCase2Desc:
        "Process hundreds of one-on-one interviews simultaneously. Maintain consistency across your entire dataset. Search across all transcripts instantly.",

      useCase3Title: "Clinical Research",
      useCase3Desc:
        "HIPAA-compliant options for patient interviews. Accurate medical terminology transcription. Secure handling of sensitive health data.",

      useCase4Title: "Ethnographic Studies",
      useCase4Desc:
        "Field recordings in natural settings. Handle background noise and multiple speakers. Support for 100+ languages and dialects.",

      useCase5Title: "Oral History Projects",
      useCase5Desc:
        "Preserve entire archives without limits. Create searchable historical records. Perfect for longitudinal and generational studies.",

      useCase6Title: "Dissertation Research",
      useCase6Desc:
        "Student-friendly pricing with full features. Process your entire dataset affordably. Meet tight deadlines with batch processing.",

      // Testimonial Section
      testimonialTitle: "Trusted by",
      testimonialTitle2: "Leading Researchers",
      testimonialText: 'Our research team had ',
      testimonialText2Hl: '200 hours',
      testimonialText3: ' of focus group recordings from our community health study. Other services wanted us to pick and choose which sessions to transcribe because of the cost. NeverCap let us process',
      testimonialText4Hl: 'everything over a weekend',
      testimonialText5: '. The 20-speaker identification actually worked—even during our messiest discussions where everyone was talking at once. This tool has',
      testimonialText6Hl: 'completely changed',
      testimonialText7: 'how we handle qualitative data.',

      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Lead Researcher, Public Health Institute",

      // CTA Section
      ctaTitle: "Stop Choosing Which Data to Analyze",
      ctaSubtitle: "Join 50,000+ researchers who transcribe everything",
      ctaButton: "Try NeverCap Free"
    },
    BusinessTeams: {
      // Hero Section
      heroBadge: "For Business Teams",
      heroTitle1: "Meeting Recording",
      heroTitle2: "Made Effortless",
      heroSubtitle:
        "Record meetings directly in your browser or upload audio files instantly. Build searchable archives from unlimited conversations. Never lose important discussions again with truly unlimited transcription.",
      heroCtaPrimary: "Start Recording Now →",
      heroCtaSecondary: "See How It Works",

      // Recording Interface
      recordingStatus: "Recording...",

      // Stats Section
      statsMeetingMinutes: "Meeting Minutes",
      statsLiveRecording: "Recording",
      statsSpeakerID: "Speaker ID",
      statsInstantUpload: "Upload & Process",

      // Features Section
      featuresTitle: "Transcription for Every Business",
      featuresTitle2: "Meeting",
      featuresSubtitle:
        "From live recording to instant uploads, we've eliminated every friction point",

      // Feature 1
      feature1Title: "Record Directly in Your Browser",
      feature1Desc:
        "No downloads, no plugins. Start recording instantly with one click. Perfect audio quality, automatic speaker detection.",
      feature1Benefit1: "One-click recording start",
      feature1Benefit2: "No software installation",
      feature1Benefit3: "Works on any device",
      feature1Benefit4: "Real-time transcription",
      feature1Visual1: "Click & Record",
      feature1Visual2: "No setup required",

      // Feature 2
      feature2Title: "Upload Any Audio File Instantly",
      feature2Desc:
        "Have recordings from Zoom, Teams, or your phone? Upload them instantly. Support for all major audio and video formats. Process multiple files simultaneously with no waiting.",
      feature2Benefit1:
        "Supports: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Batch upload capability",
      feature2Benefit3: "10-hour files supported",
      feature2Benefit4: "Process while you work",
      feature2Visual1: "Drag & Drop Files",

      // Feature 3
      feature3Title: "Built for Team Collaboration",
      feature3Desc:
        "Share transcripts with your team instantly. Listen to recordings together, export transcripts in multiple formats, and ensure everyone stays aligned with searchable meeting archives.",
      feature3Benefit1: "Share transcripts with anyone",
      feature3Benefit2: "Listen to original recordings",
      feature3Benefit3: "Export transcripts in multiple formats",
      feature3Benefit4: "Team-wide searchable archives",
      feature3Visual1: "Team Members",
      feature3Visual2: "Unlimited collaboration",

      // Feature 4
      feature4Title: "Find Any Conversation Instantly",
      feature4Desc:
        "Search across all your meetings at once. Find that crucial decision from last quarter or that client requirement from months ago. AI-powered search understands context, not just keywords.",
      feature4Benefit1: "Search all meetings at once",
      feature4Benefit2: "AI understands context",
      feature4Benefit3: "Filter by speaker or date",
      feature4SearchPlaceholder: "🔍 Search: 'Q4 revenue targets'",
      feature4SearchResults: "Found in 3 meetings:",
      feature4Meeting1: "Sales Planning - Oct 15",
      feature4Meeting1Text: '"...targets for Q4 set at $2M..."',
      feature4Meeting2: "Board Meeting - Oct 20",
      feature4Meeting2Text: '"...Q4 revenue projections..."',

      // Workflow Section
      workflowTitle: "How to Transcribe a",
      workflowTitle2: "Zoom Recording to Text",
      workflowSubtitle:
        "A seamless workflow that captures every important moment",

      workflowStep1Title: "Record or Upload",
      workflowStep1Desc: "Start recording live or simply download meeting recording from Zoom, Google Meet, or Microsoft Teams",

      workflowStep2Title: "Auto-Transcribe",
      workflowStep2Desc: "Our AI will automatically transcribe the recording to text with 96% accuracy in minutes",

      workflowStep3Title: "Collaborate",
      workflowStep3Desc: "Share, comment, and extract action items",

      workflowStep4Title: "Search & Analyze",
      workflowStep4Desc: "Find insights across all your meetings",

      // Testimonials Section
      testimonialsTitle: "Teams Love",
      testimonialsTitle2: "NeverCap",
      testimonialsSubtitle:
        "See how businesses transform their meeting culture",

      testimonial1Text:
        '"We went from missing crucial details to having a searchable archive of every conversation. The direct recording feature means we never forget to capture important discussions."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Product Manager, TechCorp",

      testimonial2Text:
        '"Otter limited us to 10 file uploads per month. Now we upload all our client calls instantly. Game changer for our sales team\'s follow-ups."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Sales Director, ConsultPro",

      testimonial3Text:
        '"The ability to search across months of meetings saved us during our audit. Found every decision and approval in seconds."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",

      // CTA Section
      ctaTitle: "Stop Losing Important Conversations",
      ctaSubtitle:
        "Join thousands of teams capturing every meeting with unlimited transcription",
      ctaButton: "Start Recording for Free →"
    },
    Educators: {
      // Hero Section
      heroBadge: "For Educators & Teachers",
      heroTitle1: "Make Learning",
      heroTitle2: "Accessible for Everyone",
      heroSubtitle: "Simply paste YouTube links to get instant transcripts with auto-generated captions. Transform lectures, tutorials, and educational videos into searchable, accessible content that every student can learn from.",
      heroCtaPrimary: "Try It Free - No Credit Card",
      heroCtaSecondary: "Watch Demo",

      // Stats Section
      stats1Number: "1-Click",
      stats1Label: "YouTube Transcription",
      stats2Number: "100+",
      stats2Label: "Supported Languages",
      stats3Number: "∞",
      stats3Label: "Unlimited Videos",
      stats4Number: "96%",
      stats4Label: "Accuracy Rate",

      // Features Section
      featuresTitle: "Everything Educators Need for",
      featuresTitle2: "Video Transcription",
      featuresSubtitle:
        "From YouTube lectures to recorded classes, make all your content accessible",

      // Feature 1
      feature1Title: "Instant YouTube & Platform Links",
      feature1Desc:
        "Just paste any video link and get instant transcripts. Works with YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive, and more. No downloading, no waiting.",
      feature1Point1: "Direct link transcription - no downloads needed",
      feature1Point2: "Support for all major platforms",
      feature1Point3: "Process entire playlists at once",
      feature1Point4: "Works with private videos (with permission)",

      // Feature 2
      feature2Title: "Auto-Generate Captions & Subtitles",
      feature2Desc:
        "Instantly create accurate captions for all your educational videos. Make content accessible for students with hearing impairments, non-native speakers, or those who prefer reading along.",
      feature2Point1: "SRT, VTT, and TXT export formats",
      feature2Point2: "Word-level timestamps for perfect sync",
      feature2Point3: "Edit and customize captions easily",
      feature2Point4: "Upload directly back to YouTube",
      feature2Visual1: "Language Translations",
      feature2Visual2: "Make your content globally accessible",

      // Feature 3
      feature3Title: "Organize by Courses & Categories",
      feature3Desc:
        "Create folders to organize your transcripts by course, subject, or semester. Keep all your educational content neatly categorized and easily searchable. Build a comprehensive library of accessible course materials.",
      feature3Point1: "Create unlimited folders and subfolders",
      feature3Point2: "Tag videos by topic or difficulty level",
      feature3Point3: "Bulk organize multiple transcripts",
      feature3Point4: "Search across all your content instantly",
      feature3VisualTitle: "Your Course Library",
      feature3Folder1: "Mathematics 101",
      feature3Folder2: "Physics Lectures",
      feature3Folder3: "Biology Lab Videos",
      feature3Folder4: "History Documentaries",
      feature3Folder5: "Language Learning",

      // Feature 4
      feature4Title: "AI Transcribe Audio File to Study Guide",
      feature4Desc:
        "Don't just share recordings. Automatically transcribe lectures to text and other audio files into detailed study guides, complete with summaries and key concepts for effective student revision. Export in TXT, DOCX, or PDF formats.",
      feature4Point1: "TXT for simple text editing",
      feature4Point2: "DOCX for formatted documents",
      feature4Point3: "PDF for easy sharing and printing",
      feature4Point4: "Bulk export multiple files at once",

      // Workflow Section
      workflowTitle: "How It Works:",
      grid: "Audio File to Study Guide",
      workflowSubtitle: "From video link to accessible transcript and study materials in minutes",

      workflowStep1Title: "Upload Your Lecture",
      workflowStep1Desc: "Upload any audio or video file (MP3, MP4, WAV) or paste a YouTube link",

      workflowStep2Title: "AI Transcription",
      workflowStep2Desc: "Our AI transcribes the audio, separates speakers, and identifies key topics",

      workflowStep3Title: "Generate Captions",
      workflowStep3Desc: "Auto-create perfectly synced subtitles",

      workflowStep4Title: "Export Study Guide",
      workflowStep4Desc: "Download the text, summary, or export it to create your final study guide",

      // Use Cases Section
      useCasesTitle: "Perfect for Every",
      useCasesTitle2: "Educational Need",
      useCasesSubtitle:
        "See how educators are using NeverCap to enhance learning",

      useCase1Title: "Recorded Lectures",
      useCase1Text:
        "Transcribe entire semesters of recorded lectures. Students can search for specific topics, review key concepts, and never miss important information.",

      useCase2Title: "Online Courses",
      useCase2Text:
        "Make your online courses accessible to international students with translations in 100+ languages. Increase enrollment and satisfaction.",

      useCase3Title: "Study Materials",
      useCase3Text:
        "Use AI to transcribe audio files to study guides from video tutorials and lectures. Perfect for students who prefer reading or need to review content quickly with searchable text.",

      useCase4Title: "Accessibility Compliance",
      useCase4Text:
        "Meet accessibility requirements by providing captions and transcripts for all video content. Ensure equal access for all students.",

      useCase5Title: "Flipped Classroom",
      useCase5Text:
        "Share video lectures with transcripts before class. Students can review at their own pace and come prepared for discussions.",

      useCase6Title: "Research & Citations",
      useCase6Text:
        "Help students cite video sources accurately with timestamps. Perfect for research projects and academic papers.",

      // Testimonial Section
      testimonialTitle: "Trusted by",
      testimonialTitle2: "50,000+ Educators",
      testimonialSubtitle: "See why teachers worldwide choose NeverCap",
      testimonialText:
        '"I\'ve been using NeverCap to transcribe my entire YouTube channel of math tutorials. What used to take weeks with other services now takes hours. The ability to paste links directly and get instant transcripts has transformed how I create accessible content. My international students especially love the multi-language captions!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Mathematics Professor, Online Educator",

      // CTA Section
      ctaTitle: "Make All Your Educational Content Accessible",
      ctaSubtitle: "Join thousands of educators using truly unlimited transcription",
      ctaButton: "Try NeverCap Free"
    }
  },
  Resources: {
    YouTubeToMP4: {
      err1: 'YouTube link format error.',
      err2: 'Sorry! We currently only work with YouTube links. If you need support for other sites, we\'ll keep you updated when we add it in the future.',
      part1: {
        "title": "Download YouTube Videos As MP4",
        "placeholder": "Search or paste your Youtube link here",
        "clear_icon": "Clear input", // 图标功能描述
        "Download": "Download",
        "loading_text": "Processing the link to download. Stay on the page.",
        "howToDownload": "How to download?",
        "tutorial": "Watch the tutorial"
      },
      part2: {
        "title": "Here's how to turn a YouTube video into a downloadable MP4 file in 3 easy steps",
        "steps": [
          {
            title: "Copy the URL",
            content:
              "Open your target YouTube video, then copy the link from your browser’s address bar."
          },
          {
            title: "Paste the link",
            content:
              "Head to your video downloader tool and paste the URL into its input field."
          },
          {
            title: "Download the MP4",
            content: "Once processed, hit the download button to save your MP4 file."
          }
        ]
      },
      part3: {
        content: [
          'Ever found yourself needing to watch YouTube videos offline?',
          "Whether you're commuting on the subway, flying on a plane, studying a crucial tutorial, diving deep into skill–building content, or archiving important video material—having reliable offline access is a common frustration. This is where our downloader shines.",
          "The downloader lets you quickly and easily convert YouTube videos to MP4 format for download. Save them to your device, and watch anytime.",
          "The process is fast, simple, and hassle–free. Once downloaded, enjoy your favorite videos whenever and wherever you are—no internet needed."
        ]
      },
      part4: {
        content: [
          "Here are the 5 major benefits of downloading",
          "YouTube videos as MP4 files"
        ],
        list: [
          {
            title: "Save on Data Costs: ",
            content:
              "Normally, watching videos on YouTube consumes significant mobile data. By downloading for offline viewing, you can avoid these unnecessary costs."
          },
          {
            title: "Watch Anywhere, Anytime: ",
            content:
              "Enjoy your videos seamlessly, even with spotty internet connections. No more buffering worries."
          },
          {
            title: "Easy Archiving & Preservation: ",
            content:
              "Saving videos as MP4s makes it simple to build your personal collection, especially for content you find truly valuable or important."
          },
          {
            title: "Simpler Sharing: ",
            content:
              "Sharing an MP4 file is much more convenient than sending a link. You can send the video file directly through apps like WhatsApp or Instagram, eliminating the extra step of opening YouTube."
          },
          {
            title: "Instant Viewing, Shared Moments: ",
            content:
              "Excitedly show a favorite video to friends or family nearby? With the MP4 downloaded, you can all watch it smoothly together right away, without awkward pauses waiting for it to load."
          }
        ]
      },
      part5: {
        title: "Why Our Downloader Stands Out",
        cards: [
          {
            title: "One–click simplicity",
            content: "Effortless setup and intuitive operation."
          },
          {
            title: "Blazing–fast, unlimited",
            content: "Convert and download at top speed — no caps, no limits."
          },
          {
            title: "Convert on the fly",
            content: "Process your files instantly, no waiting required."
          },
          {
            title: "Zero Ads, Zero Distractions",
            content:
              "Enjoy a clean interface with no pop-ups, banners, or interruptions – just seamless video conversion."
          },
          {
            icon: "5",
            color: "#DEE5FF",
            title: "Original Quality Guaranteed",
            content:
              "Your downloads retain the source video's full resolution for pixel-perfect playback every time."
          },
          {
            icon: "6",
            color: "#DEF6EE",
            title: "Works anywhere",
            content: "Fully compatible with any browser, on any device."
          }
        ]
      },
      part6: {
        title: ['Maximize Your YouTube Video Downloads', 'With The Downloader'],
        content: [
          "Effortless YouTube to MP4 Conversion: Fast, Simple & Free.",
          "That's where we excel. Our user–friendly interface is designed for everyone — no tech skills needed. Regardless of your experience level, you can convert videos instantly. No sign–up required: Get exactly what you need, straight away.",
          "Rest assured — your downloaded MP4s maintain the original video quality and clarity, exactly as you watched them on YouTube.",
          "Works Everywhere You Do. Fully compatible across all major platforms and devices. Whether you're on Windows, macOS, Linux, Android, or iOS — using a smartphone, tablet, or desktop — you can download videos seamlessly.",
        ]
      },
      part7: {
        title: 'Key Questions on Downloading YouTube Videos',
        list: [
          {
            question: "Can I download a YouTube video if it's copyrighted?",
            answer:
              "Downloading copyrighted YouTube videos without the copyright owner's permission is illegal."
          },
          {
            question: "Is this download tool safe?",
            answer:
              "Yes, it's safe and trustworthy. We do not require any personal information from users and take strong measures against viruses. We remind you to always exercise caution when downloading files from the internet: avoid clicking on suspicious links or downloading questionable files."
          },
          {
            question: "What languages does YouTube to MP4 download support?",
            answer:
              "Our service supports downloading YouTube videos in all popular languages."
          },
          {
            question:
              "What factors affect the time it takes to download a YouTube video?",
            answer:
              "While we ensure the fastest possible download experience, download time is also affected by factors like the video's length and your internet connection speed."
          },
          {
            question:
              "When I download an MP4 video using my smartphone, where is it saved?",
            answer: 'After downloading an MP4 on your smartphone, you can typically find it in the "Downloads" folder within your, device\'s file manager app.'
          },
          {
            question:
              "Does downloading a YouTube video as an MP4 reduce video quality?",
            answer:
              "No. Downloading YouTube videos as MP4 using our tool retains the original video quality. The conversion process preserves the source quality, ensuring you get the same viewing experience as on YouTube."
          }
        ]
      },
      top: {},
      videoDown: {},
      videoDownload: {
        title: "Download YouTube videos as MP4.Free,fast,and no ads.",
        description: "Thanks for choosing our service! We truly appreciate your trust and hope it enhanced your experience. If you could share our website with your friends, that would be a huge help.",
        downloadButton: "Download",
        downloadError: "Download Error."
      }
    },
  },
  About: {
    Hero: {
      "badge": "Industry-Leading AI Technology",
      "title": "About ",
      "highlighted_text": "NeverCap",
      "description": "Our mission is to provide the most accurate audio and video transcription services. Leveraging industry-leading AI technology, we achieve transcription accuracy rates of over 96%. For some major languages, through technical optimization, we can even reach 99% accuracy."
    },
    Stats: {
      "title": "Our ",
      "highlighted_text": "Impact",
      "subtitle": "Empowering global communication with cutting-edge AI technology",
      "metrics": [
        {
          "value": "96%+",
          "label": "Accuracy Rate",
          "description": "Industry-leading transcription accuracy with advanced AI"
        },
        {
          "value": "100+",
          "label": "Languages Supported",
          "description": "Spoken word recognition for global content"
        },
        {
          "value": "249+",
          "label": "Translation Languages",
          "description": "Translate transcribed text to virtually any language"
        }
      ]
    },
    Mission: {
      "title": "Why Choose ",
      "highlighted_text": "NeverCap",
      "subtitle": "We believe in breaking down language barriers and making content accessible to everyone",
      "features": [
        {
          "icon": "🎯",
          "title": "Unmatched Accuracy",
          "description": "Our AI models are continuously refined to deliver transcription accuracy rates exceeding 96%, with some major languages reaching up to 99% accuracy through advanced optimization."
        },
        {
          "icon": "🌍",
          "title": "Global Language Support",
          "description": "Support for over 100 languages in spoken word recognition and translation capabilities for more than 249 languages, making your content truly global."
        },
        {
          "icon": "⚡",
          "title": "Lightning Fast Processing",
          "description": "Process hours of audio and video content in minutes, not hours. Our optimized AI pipeline ensures you get your transcriptions quickly without sacrificing quality."
        },
        {
          "icon": "🔒",
          "title": "Enterprise-Grade Security",
          "description": "Your data security is our priority. We use industry-standard encryption and comply with global privacy regulations to keep your content safe and confidential."
        }
      ]
    },
    Company: {
      "title": "Company ",
      "highlighted_text": "Information",
      "subtitle": "Get in touch with us for any questions or support",
      "details": [
        {
          "label": "Company Name",
          "value": "SCRIBIFY AI INC"
        },
        {
          "label": "Headquarters",
          "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "United States"]
        },
        {
          "label": "Contact Us",
          "value": ['Email', "Support available 24/7"]
        }
      ]
    },
    CTA: {
      "title": "Ready to Experience the Difference?",
      "subtitle": "Join thousands of professionals who trust NeverCap for their transcription needs",
      "button": "Try NeverCap Free →",
      "disclaimer": "No credit card required • Start transcribing in seconds"
    }
  },
  Privacy: {
    title: 'Privacy',
    titleGradient: 'Policy',
    subtitle: 'Learn how we collect, use, and protect your personal information',
    "lastUpdated": "Last updated: {date}",
    "lastUpdatedDate": "July 21, 2025",
    "privacyPolicyTitle": "Privacy Policy",
    policyDescription: "This Policy describes how NeverCap (hereinafter referred to as \"NeverCap\", \"our\", \"we\", \"us\") collects, uses, and discloses your personal information when you use our services, websites ({url}) , and software (collectively, the \"Services\").",
    "policyAgreement": "Please read this Privacy Policy carefully and ensure that you understand it. By using any of our Services, you agree to this Privacy Policy. If you do not agree to our use of your personal data in line with this Policy, you must stop using our Services immediately.",
    "policyOverview": "In this policy, we lay out: what data we collect and why; how your data is handled; and your rights with respect to your data. We do not sell your data.",
    "scopeTitle": "1. Scope of this Privacy Policy",
    "scopeDescription": "This Privacy Policy applies only to our collection and processing of information about users of the Services. This Privacy Policy does not apply to any services, websites or software operated by third parties that are linked to us (whether we provide those links or other users share them) nor does it apply to content, data, applications or materials from third parties. We advise you to check the privacy policies of any third party website or software before providing any information to them.",
    "collectionTitle": "2. What we collect and why",
    "collectionPrinciple": "Our guiding principle is to collect only what we need. Here's what that means in practice:",
    "identityTitle": "2.1 Identity & access",
    "identityDescription": "When you sign up for one of our products, we ask for identifying information such as your name, email address. This is to provide essential product functionality and so we can send you product updates and other essential information.",
    "billingTitle": "2.2 Billing information",
    "billingDescription": "If you sign up for a paid product, you will be asked to provide your payment information and billing address. Payment information is submitted directly to our payment processor and doesn't hit our servers.",
    "productInteractionsTitle": "2.3 Product interactions",
    "productInteractionsDescription": "We store on our servers the content that you upload or receive or maintain in your product accounts. Unless you delete this content, we may keep this content as long as your account is active.",
    "websiteInteractionsTitle": "2.4 Website interactions",
    "websiteInteractionsDescription": "We collect information about your browsing activity for analytics and statistical purposes such as conversion rate testing and experimenting with new product designs. This includes, for example, your browser and operating system versions, your IP address, which web pages you visited and how long they took to load, and which website referred you to us. If you have an account and are signed in, these web analytics data are tied to your IP address and user account until your account is no longer active.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "We also use persistent first-party cookies and some third-party cookies to store certain preferences, make it easier for you to use our applications, and perform A/B testing as well as support some analytics.",
    "cookiesDescription2": "A cookie is a piece of text stored by your browser. It may help remember login information and site preferences. It might also collect information such as your browser type, operating system, web pages visited, duration of visit, content viewed, and other click-stream data. You can adjust cookie retention settings and accept or block individual cookies in your browser settings, although our apps won't work and other aspects of our service may not function properly if you turn cookies off.",
    "correspondenceTitle": "2.6 Voluntary correspondence",
    "correspondenceDescription": "When you email us with a question or to ask for help, we keep that correspondence, including your email address, so that we have a history of past correspondence to reference if you reach out in the future.",
    "accessTitle": "3. When we access or share your information",
    "accessDescription1": "To provide products or services you've requested. We use some third-party subprocessors to help run our applications and provide the Services to you. This includes cloud and analytics providers.",
    "accessDescription2": "To investigate, prevent, or take action regarding abuse. Accessing a customer's account when investigating potential abuse is a measure of last resort. We want to protect the privacy and safety of both our customers and the people reporting issues to us, and we do our best to balance those responsibilities throughout the process. If we discover you are using our products for a restricted purpose, we will take action as necessary, including notifying appropriate authorities where warranted.",
    "accessDescription3": "When required under applicable law.",
    "dataRequests": "Requests for user data. Our policy is to not respond to government requests for user data unless we are compelled by legal process or in limited circumstances in the event of an emergency request. However, if U.S. law enforcement authorities have the necessary warrant, criminal subpoena, or court order requiring us to share data, we must comply. Likewise, we will only respond to requests from government authorities outside the U.S. if compelled by the U.S. government through procedures outlined in a mutual legal assistance treaty or agreement. It is our policy to notify affected users before we share data unless we are legally prohibited from doing so, and except in some emergency cases.",
    "preservationRequests": "Preservation requests. Similarly, our policy is to comply with requests to preserve data only if compelled by the U.S. Federal Stored Communications Act, 18 U.S.C. Section 2703(f), or by a properly served U.S. subpoena for civil matters. We do not share preserved data unless required by law or compelled by a court order that we choose not to appeal. Furthermore, unless we receive a proper warrant, court order, or subpoena before the required preservation period expires, we will destroy any preserved copies of customer data at the end of the preservation period.",
    "taxAudits": "If we are audited by a tax authority, we may be required to share billing-related information. If that happens, we will share only the minimum needed, such as billing addresses and tax exemption information.",
    "securityTitle": "4. How we secure your data",
    "securityDescription": "All data is encrypted via SSL/TLS when transmitted from our servers to your browser.",
    "deletionTitle": "5. What happens when you delete your content",
    "deletionDescription": "If you delete any content, it will become immediately inaccessible.",
    "locationTitle": "6. Location of site and data",
    "locationDescription": "Our products and other web properties are operated in the United States. If you are located in the European Union, UK, or elsewhere outside of the United States, please be aware that any information you provide to us will be transferred to and stored in the United States. By using our websites or Services and/or providing us with your personal information, you consent to this transfer.",
    "childrenTitle": "7. Children's Privacy",
    childrenDescription: "The Services are not aimed at children, and we do not knowingly collect Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any personal information through the Services. If you believe that a child has provided us with Personal Information in violation of this Policy, please contact us as {at} {email} indicated below.",
    at: 'at',
    "updatesTitle": "8. Updates to this Privacy Policy",
    "updatesDescription": "We may update this policy as needed to comply with relevant regulations and reflect any new practices. Whenever we make a significant change to our policies, we will refresh the date at the top of this page.",
    "contactTitle": "9. Contact Us",
    contactDescription: `If you have any questions, comments or complaints about our Privacy Policy, please contact us {at} {email} and we will endeavor to deal with your complaint as soon as possible.`,
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: 'Terms of',
    titleGradient: 'Service',
    subtitle: 'Please read these terms carefully before using our services',
    "lastUpdated": "Last updated: {date}",
    "lastUpdatedDate": "July 21, 2025",
    "termsOfServiceTitle": "Terms of Service",
    "thankYou": "Thank you for using our products!",
    "companyDefinition": "When we say \"Company\", \"we\", \"our\", or \"us\" in this document, we are referring to NeverCap.",
    "servicesDefinition": "When we say \"Services\", we mean any product created and maintained by NeverCap, whether delivered within a web browser, desktop application, mobile application, or another format.",
    "termsUpdate": "We may update these Terms of Service in the future. Typically these changes have been to clarify some of these terms by linking to an expanded related policy. Whenever we make a significant change to our policies, we will refresh the date at the top of this page and take any other appropriate steps to notify account holders.",
    "acceptanceTitle": "1. Acceptance of Agreement",
    "acceptanceDescription1": "By using our Services, you are indicating your acceptance of this Agreement, which thereby becomes a binding contract between you and NeverCap. You represent that you are legally able to accept these Terms, and affirm that you are of legal age to form a binding contract. NeverCap's acceptance is expressly conditioned upon your assent to all the terms and conditions of this Agreement.",
    "eligibilityRequirement": "The Services are not intended for and should not be used by anyone under the age of 18. By using the Services, you represent and warrant that you meet the foregoing eligibility requirement.",
    "userResponsibility": "The terms \"you,\" \"your,\" \"yourself\" shall also include your employees, agents, business representatives and any other individuals that you provide access to the Services through your Account (as defined below). You are responsible for ensuring that all persons who access the Services through your account are aware of these Terms and comply with them.",
    "termsRevision": "NeverCap reserves the right to revise and update these Terms from time to time in its sole discretion. All changes are effective immediately when posted. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.",
    "servicesTitle": "2. NeverCap's Services",
    "servicesDescription1": "Our Services enables users to transform voice conversations into transcribed text that can be searched, translated and shared with others.",
    "servicesOptions": "You may choose whether to use the free version of the Services (\"Free Services\") or the subscription-based paid version of the Services for which you may be required to pay fees (the \"Paid Services\").",
    "servicesAccess": "We will make the Services available to you. You are responsible for making all arrangements necessary for you to have access to the Services.",
    "accountTermsTitle": "3. Account Terms",
    "accountSecurity": "You are responsible for maintaining the security of your account. The Company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.",
    "lawfulUse": "You may not use the Services for any unlawful, unethical, or immoral purpose.",
    "contentResponsibility": "You are responsible for all content posted and activity that occurs under your account. That includes content posted by others who either: (a) have access to your login credentials; or (b) have their own logins under your account.",
    "humanRequirement": "You must be a human. Accounts registered by \"bots\" or other automated methods are not permitted.",
    "paymentTitle": "4. Payment, Refunds, and Plan Changes",
    "freeTrial": "For paid Services that offer a free trial, we explain the length of trial when you sign up. After the trial period, you need to pay in advance to keep using the Service. If you do not pay, these services will end.",
    "upgradePolicy": "If you are upgrading from a free plan to a paid plan, we will charge your card immediately and your billing cycle starts on the day of upgrade.",
    "taxes": "All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities. Where required, we will collect those taxes on behalf of the taxing authority and remit those taxes to taxing authorities. Otherwise, you are responsible for payment of all taxes, levies, or duties.",
    "refunds": "All purchases are non-refundable. You can cancel any paid services at any time by logging into your account. For paid subscriptions, your cancellation will take effect at the end of the current paid term, unless otherwise stated.",
    "cancellationTitle": "5. Cancellation and Termination",
    "cancellationPolicy": "If you cancel the Service before the end of any paid up time, your cancellation will take effect immediately, and you will not be charged again. We do not automatically prorate unused time in the last billing cycle.",
    "terminationRights": "We have the right to suspend or terminate your account and refuse any and all current or future use of our Services for any reason at any time. Suspension means you will not be able to access the account or any content in the account. Termination will furthermore result in the deletion of your account or your access to your account, and the forfeiture and relinquishment of all content in your account. We also reserve the right to refuse the use of the Services to anyone for any reason at any time. We have this clause because statistically speaking, out of the hundreds of thousands of accounts on our Services, there is at least one doing something nefarious.",
    "abusePolicy": "Verbal, physical, written or other abuse (including threats of abuse or retribution) of Company employee or officer may result in immediate account termination.",
    "submissionsTitle": "6. Submissions",
    "submissionsDescription": "You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (\"Submissions\") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.",
    "uptimeTitle": "7. Uptime and Security",
    "serviceAvailability": "Your use of the Services is at your sole risk. We provide these Services on an \"as is\" and \"as available\" basis. We do not offer service-level agreements for most of our Services, but do take uptime of our applications seriously.",
    "throttlingPolicy": "We reserve the right to temporarily throttle or limit account access in rare cases where a user's activity is verified to be negatively impacting the stability and performance of the Service for other users. In all but the most critical instances, we will contact you to find a solution before taking action.",
    "dataSecurity": "We take many measures to protect and secure your data through backups, redundancies, and encryption. We enforce encryption for data transmission over the public Internet.",
    "thirdPartyVendors": "We use third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Services.",
    "siteManagementTitle": "8. Site Management",
    "siteManagementDescription": "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service ; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service , including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.",
    "copyrightTitle": "9. Copyright and Content Ownership",
    "copyrightCompliance": "All content posted on the Services must comply with U.S. copyright law.",
    "ipRights": "We claim no intellectual property rights over the material you provide to the Services. All materials uploaded remain yours.",
    "contentModeration": "We do not pre-screen content, but reserve the right (but not the obligation) in our sole discretion to refuse or remove any content that is available via the Service.",
    trademarkProtection: "The names, look, and feel of the Services are copyright© to the Company. All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML, CSS, JavaScript, or visual design elements without express written permission from the Company. You must request permission to use the Company's logo or any Service logos for promotional purposes. Please email us {at} {email} with requests to use logos. We reserve the right to rescind this permission if you violate these Terms of Service.",
    "prohibitedExploitation": "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Services, use of the Services, or access to the Services without the express written permission by the Company.",
    "impersonationProhibition": "You must not modify another website so as to falsely imply that it is associated with the Services or the Company.",
    "dmcaPolicy": "We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately contact us .A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.",
    "prohibitedActivitiesTitle": "10. Prohibited Activities",
    "generalProhibition": "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
    "userObligations": "As a user of the Site, you agree not to:",
    "dataScraping": "Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
    "fraud": "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
    "securityInterference": "Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.",
    "defamation": "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.",
    "harassment": "Use any information obtained from the Site in order to harass, abuse, or harm another person.",
    "supportAbuse": "Make improper use of our support services or submit false reports of abuse or misconduct.",
    "legalCompliance": "Use the Site in a manner inconsistent with any applicable laws or regulations.",
    "framingProhibition": "Engage in unauthorized framing of or linking to the Site.",
    "malware": "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.",
    "automation": "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
    "copyrightRemoval": "Delete the copyright or other proprietary rights notice from any Content.",
    "impersonation": "Attempt to impersonate another user or person or use the username of another user.",
    "spyware": "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (\"gifs\"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as \"spyware\" or \"passive collection mechanisms\" or \"pcms\").",
    "disruption": "Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.",
    "employeeHarassment": "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.",
    "accessCircumvention": "Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.",
    "codeCopying": "Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
    "reverseEngineering": "Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.",
    "bots": "Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.",
    "buyingAgents": "Use a buying agent or purchasing agent to make purchases on the Site.",
    "unauthorizedUse": "Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
    "competition": "Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.",
    "advertising": "Use the Site to advertise or offer to sell goods and services.",
    "profileTransfer": "Sell or otherwise transfer your profile.",
    "featuresTitle": "11. Features and Bugs",
    "featuresDescription": "We design our Services with care, based on our own experience and the experiences of customers who share their time and feedback. However, there is no such thing as a service that pleases everybody. We make no guarantees that our Services will meet your specific requirements or expectations.",
    "bugsDescription": "We also test all of our features before shipping them. As with any software, our Services inevitably have some bugs. We track the bugs reported to us and work through them, especially any related to security or privacy. Not all reported bugs will get fixed and we don't guarantee completely error-free Services.",
    "correctionsTitle": "12. Corrections",
    "informationAccuracy": "There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.",
    "siteAvailability": "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Service will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.",
    "userDataTitle": "13. User Data",
    "userDataDescription": "We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",
    "privacyPolicyTitle": "14. Privacy Policy",
    privacyPolicyDescription: "We care about data privacy and security. Please review our {policy}. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Service. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States , then through your continued use of the Site, you are transferring your data to the United States , and you agree to have your data transferred to and processed in the United States.",
    "liabilityTitle": "15. Liability",
    "liabilityIntroduction": "We mention liability throughout these Terms but to put it all in one section:",
    "liabilityWaiver": "You expressly understand and agree that the Company shall not be liable, in law or in equity, to you or to any third party for any direct, indirect, incidental, lost profits, special, consequential, punitive or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if the Company has been advised of the possibility of such damages), resulting from: (1) the use or the inability to use the Services; (2) errors, mistakes, or inaccuracies of content and materials; (3) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the site; (4) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the Services; (5) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein; (6) any interruption or cessation of transmission to or from the site; (7) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the site by any third party, and/or; (8) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the site; (9) statements or conduct of any third party on the service; (10) or any other matter relating to this Terms of Service or the Services, whether as a breach of contract, tort (including negligence whether active or passive), or any other theory of liability.",
    "miscellaneousTitle": "16. Miscellaneous",
    "miscellaneousDescription": "These Terms of Service and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Service or use of the Site. You agree that these Terms of Service will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Service and the lack of signing by the parties hereto to execute these Terms of Service.",
    "contactTitle": "17. Contact Us",
    contactDescription: "If you have a question about any of the Terms of Service, please contact us {at} {email}.",
    at: 'at',
    "neverCap": "NeverCap",
    "site": "Site",
    "services": "Services"
  },
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
