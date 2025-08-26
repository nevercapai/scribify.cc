// 土耳其语
let message = {
  // Ana Sayfa
  HomePage: {
    home: "Tüm Transkriptler",
    times: "Günde {times} ücretsiz transkripsiyon, bugün {left} kaldı.",
    tips: "Sınırsız transkripsiyon için Pro'ya yükseltin.",
    update: "Hemen Yükselt",
    rename: "Yeniden Adlandır",
    delete: "Sil",
    cancel: "İptal",
    confirm: "Oluştur",
    dialogLabel: "Klasör Adı",
    recently: "Son Dosyalar",
    loading: "Yükleniyor",
    tour: {
      step0: {
        title: "{name}'e Hoş Geldiniz",
        tip: "Burada şunları yapabilirsiniz:",
        content:
          "Tek seferlik konuşmaları, toplantıları, dersleri vb. yazıya dökebilirsiniz",
        next: "Kullanmaya Başla"
      },
      step1: {
        title: "Dosyaları Yazıya Dök",
        content:
          "Üç yazıya dökme yöntemini destekler: Yerel dosyalar, bağlantılar ve kayıtlar."
      },
      step2: {
        title: "Klasör Oluştur",
        content:
          'Klasör oluşturmak ve dosyalarınızı düzenlemek için "+" simgesine tıklayın.'
      },
      step3: {
        title: "Yazıya Dökme Detaylarını Görüntüle ve Düzenle",
        content:
          "Yazıya dökme detaylarını görüntülemek ve düzenlemek için öğeye tıklayın, ayrıca çevirebilirsiniz."
      },
      next: "Sonraki",
      finish: "Anladım"
    },
    export: {
      export: "Dışa Aktar",
      title: "Dışa aktarma dosyanızı oluşturuyoruz",
      title2: "Dosyanız hazır",
      singleLoadingContent: "1 dosya sıkıştırılıyor.",
      singleSuccessContent: "1 dosya sıkıştırıldı.",
      loadingContent: "{num} dosya sıkıştırılıyor.",
      successContent: "{num} dosya sıkıştırıldı.",
      cancel: "Dışa Aktarmayı İptal Et",
      error: "Dışa Aktarma Hatası",
      dialog: {
        title: "Uyarı",
        content: "Dışa aktarmayı iptal et?",
        cancel: "Dışa Aktarmayı İptal Et",
        continue: "Dışa Aktarmaya Devam Et"
      }
    },
    welcome: {
      title: "Scribify'a Hoş Geldiniz!",
      description: "Burada yapabilecekleriniz:",
      transcribe:
        "Scribify ile zahmetsizce transkripsiyonu yapın—sesli konuşmaları net, aranabilir ve paylaşılabilir metne anında dönüştürün.",
      precision:
        "Konuşmacı tanıma ve zaman damgalarıyla kesin transkripsiyon alın.",
      translate:
        "Dil engellerini aşın: transkripsiyonları 200'den fazla dile kolayca çevirin.",
      edit: "Transkripsiyon metinlerinizi ihtiyaçlarınıza uygun formatlarda düzenleyin, geliştirin ve dışa aktarın.",
      collaborate:
        "Transkripsiyon metinlerinizi başkalarıyla paylaşarak işbirliği yapın.",
      button: "Başlayın",
      tip: "Sesi transkripsiyon metnine dönüştürmeye hazır mısınız? Şimdi keşfetmeye başlayın!",
      tip2: "Şimdi keşfetmeye başlayın!",
      tip1: "Sesi transkript metne dönüştürmeye hazır mısınız? "
    },
    subscriptionModal: {
      left: {
        title: "Daha fazlası için Pro Planı edinin",
        c1: "Sınırsız Transkripsiyon",
        c2: "10 Saatlik Yüklemeler",
        c3: "En Yüksek Öncelik",
        c4: "%99 transkripsiyon doğruluğu",
        c5: "100+ desteklenen dil",
        c6: "Konuşmacı tanıma",
        c7: "Transkripsiyon çevirisi",
        t1: "Bir kişi için sınırsız transkripsiyon.",
        t2: "Her dosya 10 saate / 5 GB'a kadar olabilir. Aynı anda 50 dosya yükleyin.",
        t3: "Dosyalarınızı her zaman en yüksek öncelikle mümkün olan en kısa sürede transkripsiyon yapacağız."
      },
      right: {
        title: "Pro Planı Edinin",
        yearly: "Yıllık",
        monthly: "Aylık",
        save: "Tasarruf",
        preMonth: "aylık",
        preYear: "yıllık",
        firstMonth: "ilk ay",
        afterwards: "sonrasında"
      },
      subscribe: "Abone Ol"
    }
  },
  // Klasör Sayfası
  FolderPage: {
    table: {
      failed: "Başarısız",
      selected: "Seçildi",
      success: "Başarılı",
      fileList: "Dosya Listesi"
    },
    dialog: {
      move: {
        title: "Taşı",
        label: "Klasör Seç",
        placeholder: "Klasör Seç",
        confirm: "Taşı",
        cancel: "İptal"
      },
      rename: {
        title: "Yeniden Adlandır",
        label: "Dosya Adı",
        confirm: "Yeniden Adlandır",
        cancel: "İptal"
      },
      delete: {
        title: "Sil",
        file: "Dosya",
        files: "Dosyalar",
        label: "Silmeyi onaylıyor musunuz? Bu işlem geri alınamaz.",
        confirm: "Sil",
        cancel: "İptal"
      },
      share: {
        title: "Paylaş",
        label:
          "Aşağıdaki güvenli bağlantıya sahip olan herkes bu yazıya dökülmüş metni ve ilgili medya dosyalarını görüntüleyebilir.",
        confirm: "Bağlantıyı Kopyala",
        success: "Kopyalama Başarılı"
      },
      export: {
        title: "Dışa Aktar",
        select: "İhtiyacınız olan formatı seçin",
        settings: "Ayarlar",
        speaker: "Konuşmacı Dahil Et",
        timecodes: "Zaman Kodlarını Dahil Et",
        confirm: "Dışa Aktar",
        cancel: "İptal",
        selectErr: "Lütfen bir veya daha fazla format seçin"
      }
    },
    search: {
      placeholder: "Ara"
    },
    recently: "Son",
    record: "Kayıt",
    transcribe: "Yazıya Dök",
    unclassified: "Sınıflandırılmamış Klasör",
    buttons: {
      transcribe: "Dosyayı Yazıya Dök",
      url: "Bağlantıyı Yazıya Dök",
      record: "Kaydet ve Yazıya Dök",
      recording: "Kaydediliyor..."
    },
    delSuccess: "Silme Başarılı",
    create: "Oluştur",
    endRecord: {
      title: "Uyarı",
      content:
        "Ses kaydı yapıyorsunuz. Bu işlem ses kaydını sonlandıracak. Ses kaydını sonlandırmak istiyor musunuz?",
      confirm: "Ses Kaydına Devam Et",
      cancel: "Ses Kaydını Sonlandır"
    }
  },
  // Dosya Yükleme ve Kayıt
  FileUploadAndRecording: {
    record: {
      record: "Kaydet",
      pause: "Duraklat",
      resume: "Devam Et",
      stop: "Durdur",
      endRecord: "Kaydı sonlandır",
      delete: "Sil",
      transcribe: "Yazıya Dök",
      permissionDenied: "Mikrofon izni reddedildi veya cihaz mevcut değil",
      dialog: {
        delete: {
          title: "Uyarı",
          label: "Bu kaydı silmek istediğinizden emin misiniz?",
          confirm: "Sil",
          cancel: "İptal"
        },
        complete: {
          title: "Kayıt Tamamlandı",
          label:
            "Kayıt 10 saate ulaştı ve otomatik olarak durdu. Lütfen yazıya dökmeye devam edin.",
          confirm: "Anladım"
        },
        speaker: {
          content:
            "Konuşmacı tanımlama için dosyalar 3 saat ile sınırlıdır. Lütfen '{text}' seçeneğini kaldırın."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Çevrimiçi Medyayı Yazıya Dök",
        title: "Bağlantı Yapıştır",
        label:
          "YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram ve daha fazla platformdan video veya ses bağlantınızı yapıştırın...",
        confirm: "Ekle",
        cancel: "İptal",
        errorTitle:
          "Girdiğiniz bağlantı adresi doğru değil. Lütfen kontrol edip tekrar deneyin.",
        linkName: "Bağlantı"
      },
      file: {
        orTitle: "URL'den transkript et",
        dialogTitle: "Transkribe Edilecek Dosyaları Yükle",
        tip1: "Dosyaları buraya sürükleyin veya göz atmak için tıklayın",
        tip2: "Göz atmak için tıklayın",
        or: "veya",
        supported: "Desteklenen formatlar"
      },
      del: {
        title: "Uyarı",
        content:
          "Tüm ilerleme kaybedilecek. Yazıya dökmeyi iptal etmeyi onaylıyor musunuz?",
        cancel: "İptali Onayla",
        confirm: "Yazıya Dökmeye Devam Et"
      },
      files: "Dosyalar",
      resultDialogTitle: "Dosyaları Yazıya Dök",
      resultDialogTitle2: "Dosyayı transkribe et",
      cancel: "İptal",
      confirm: "Yazıya Dök",
      return: "Geri Dön",
      addMore: "Daha Fazla Ekle",
      language: "Dil Seçin",
      failed: "Başarısız",
      tooLarge: "Dosya sınırı aşıyor (5 GB).",
      linkUpload: "Yükleniyor",
      fileFormat: "Dosya formatına izin verilmiyor",
      localFiles: "Yerel Dosyalar",
      pasteLink: "Çevrimiçi bağlantı",
      uploadErr: "Yükleme Hatası",
      hashErr: "Hash Hatası",
      table: {
        status: "Durum",
        file: "Dosya",
        size: "Boyut",
        noData: "Veri Yok"
      },
      maxFileNum: "Dosya sayısı {num} adedi geçemez.",
      speaker: "Konuşmacıları Tanımla",
      speakerLabel: "Konuşan kişiyi otomatik algıla",
      guest: {
        transcribe: "Yazıya Dök",
        file: "Dosya",
        audio: "Ses / Video Dosyası",
        Uploading: "Yükleniyor..."
      }
    }
  },
  // Yazıya Dökme Detay Sayfası
  TranscriptionPage: {
    langChooseV1: {
      recently: "Son",
      popular: "Popüler",
      other: "Diğer",
      searchLanguage: "Dil Ara",
      noMatch: "Eşleşen dil bulunamadı",
      English: "İngilizce",
      "English(US)": "İngilizce (ABD)",
      "English(UK)": "İngilizce (Birleşik Krallık)",
      Spanish: "İspanyolca",
      Portuguese: "Portekizce",
      French: "Fransızca",
      Italian: "İtalyanca",
      German: "Almanca",
      Dutch: "Hollandaca",
      Polish: "Lehçe",
      Danish: "Danca",
      Japanese: "Japonca",
      Korean: "Korece",
      Hungarian: "Macarca",
      Czech: "Çekçe",
      Chinese: "Çince",
      Hebrew: "İbranice",
      Arabic: "Arapça",
      Azerbaijani: "Azerice",
      Estonian: "Estonca",
      Belarusian: "Belarusça",
      Bulgarian: "Bulgarca",
      Icelandic: "İzlandaca",
      Bosnian: "Boşnakça",
      Persian: "Farsça",
      Russian: "Rusça",
      "Chinese(Traditional)": "Çince (Geleneksel)",
      Finnish: "Fince",
      Kazakh: "Kazakça",
      Galician: "Galiçyaca",
      Catalan: "Katalanca",
      "Chinese(Simplified)": "Çince (Basitleştirilmiş)",
      Kannada: "Kannada",
      Croatian: "Hırvatça",
      Latvian: "Letonca",
      Lithuanian: "Litvanca",
      Romanian: "Rumence",
      Marathi: "Marathi",
      Malay: "Malayca",
      Macedonian: "Makedonca",
      Maori: "Maori",
      Afrikaans: "Afrikaanca",
      Nepali: "Nepalce",
      Norwegian: "Norveççe",
      Swedish: "İsveççe",
      Serbian: "Sırpça",
      Slovak: "Slovakça",
      Slovenian: "Slovence",
      Swahili: "Svahili",
      Tagalog: "Tagalog",
      Tamil: "Tamilce",
      Thai: "Tayca",
      Turkish: "Türkçe",
      Welsh: "Galce",
      Urdu: "Urduca",
      Ukrainian: "Ukraynaca",
      Greek: "Yunanca",
      Armenian: "Ermenice",
      Hindi: "Hintçe",
      Indonesian: "Endonezce",
      Vietnamese: "Vietnamca",
      Albanian: "Arnavutça",
      Amharic: "Amharca",
      Assamese: "Assamca",
      Occitan: "Oksitanca",
      Bashkir: "Başkurtça",
      Basque: "Baskça",
      Breton: "Bretonca",
      Tibetan: "Tibetçe",
      Faroese: "Faroe Dili",
      Sanskrit: "Sanskritçe",
      Khmer: "Kmerce",
      Georgian: "Gürcüce",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haiti Kreolcesi",
      Hausa: "Hausa",
      Latin: "Latince",
      Lao: "Laoca",
      Lingala: "Lingala",
      Luxembourgish: "Lüksemburgca",
      Malagasy: "Malgaşça",
      Maltese: "Maltaca",
      Malayalam: "Malayalam",
      Mongolian: "Moğolca",
      Bengali: "Bengalce",
      Burmese: "Birmanca",
      Punjabi: "Pencapça",
      Pashto: "Peştuca",
      Sinhala: "Seylanca",
      Shona: "Shona",
      Somali: "Somalice",
      Tajik: "Tacikçe",
      Tatar: "Tatarca",
      Telugu: "Telugu",
      Turkmen: "Türkmence",
      Uzbek: "Özbekçe",
      Hawaiian: "Hawaii Dili",
      "Norwegian Nynorsk": "Norveççe (Nynorsk)",
      Sindhi: "Sintçe",
      Sundanese: "Sundaca",
      Yiddish: "Yidiş",
      Yoruba: "Yoruba",
      Javanese: "Cava Dili",
      Cantonese: "Kantonca",
      Abkhaz: "Abhazca",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acoli",
      awa: "Awadhi",
      Avaric: "Avarca",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "İrlandaca",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osetçe",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Bali Dili",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Kuzey Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Beluçi",
      bho: "Bhojpuri",
      bua: "Buryatça",
      chm: "Mari",
      Chamorro: "Çamorro",
      Chechen: "Çeçence",
      chk: "Chuukese",
      Chuvash: "Çuvaşça",
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
      "South Ndebele": "Güney Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Fransızca (Kanada)",
      Fijian: "Fiji Dili",
      fon: "Fon",
      "Western Frisian": "Batı Frizce",
      fur: "Friulian",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grönlandca",
      gom: "Goa Konkanice",
      Guarani: "Guarani",
      cnh: "Hakha Çin",
      hrx: "Hunsrik",
      Kyrgyz: "Kırgızca",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kaçin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikaca",
      "crh-Latn": "Kırım Tatarcası (Latin)",
      crh: "Kırım Tatarcası (Kiril)",
      Quechua: "Keçuva",
      Kurdish: "Kürtçe (Kurmanci)",
      ckb: "Kürtçe (Sorani)",
      trp: "Kok Borok",
      ltg: "Latgalian",
      lij: "Ligurca",
      Limburgish: "Limburgca",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardca",
      rom: "Romanca",
      mad: "Madura",
      Manx: "Manks",
      mwr: "Marwari",
      "ms-Arab": "Malayca (Jawi)",
      Marshallese: "Marşal Dili",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritius Kreolcesi",
      "mni-Mtei": "Meetei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Doğu)",
      "Southern Sotho": "Güney Sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pencapça (Shahmukhi)",
      "pt-PT": "Portekizce (Portekiz)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotek",
      "Northern Sami": "Kuzey Sami",
      Samoan: "Samoaca",
      kri: "Sierra Leone Kreolcesi",
      crs: "Seyşel Kreolcesi",
      Sango: "Sango",
      "sat-Latn": "Santali (Latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "İskoç Gaelcesi",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Berberice (Tifinagh)",
      "ber-Latn": "Berberice (Latin)",
      Tahitian: "Tahiti Dili",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuva",
      war: "Waray",
      mak: "Makasar",
      vec: "Venedikçe",
      Uyghur: "Uygurca",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtça",
      szl: "Silezyaca",
      scn: "Sicilyaca",
      hil: "Hiligaynon",
      jam: "Jamaika Patois",
      sah: "Yakutça",
      ace: "Acehnese",
      iba: "İban",
      Igbo: "İgbo",
      ilo: "İlokano",
      "iu-Latn": "İnuktitut (Latin)",
      Inuktitut: "İnuktitut",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zuluca"
    }
  },
  // Giriş, Kayıt, Şifre Değiştirme
  IdentityInfoManage: {
    or: "veya",
    LoginBtn: "E-posta ile giriş yap",
    LoginGoogle: "Google ile giriş yap",
    SignupBtn: "E-posta ile kaydol",
    SignupGoogle: "Google ile kaydol",
    SignupDes: "Bugün kaydolun ve sihri ücretsiz yaşayın.",
    SignupTitle: "Doğru ve sınırsız transkripsiyon",
    signup: "Kayıt Ol",
    sign_up: "Kayıt Ol",
    loginByGoogle: "Google ile Giriş Yap",
    emailAddress: "Lütfen e-posta adresinizi girin",
    createAccount: "Hesap Oluştur",
    accountExists: "Zaten bir hesabınız var mı? ",
    agreeTerm: {
      agree: "Devam ederek {terms} ve {policy} kabul etmiş olursunuz.",
      terms: "Şartlar",
      policy: "Gizlilik Politikası"
    },
    setPassword: "Şifre Belirle",
    code: "Doğrulama Kodu",
    resend: "Yeniden Gönder",
    enterPassword: "Şifre: En az 6 karakter.",
    passwordLeval: "Şifre Gücü",
    Weak: "Zayıf",
    Medium: "Orta",
    Strong: "Güçlü",
    confirmPassword: "Şifreyi Onayla",
    invalidEmail: "Geçersiz e-posta adresi",
    logInDirectly: "Hesap zaten mevcut, lütfen doğrudan giriş yapın.",
    codeErrorTryAgain: "Doğrulama kodu hatalı, lütfen tekrar deneyin.",
    atLeastSix: "Şifre en az 6 karakter olmalıdır.",
    passwordNotMatch: "Şifreler eşleşmiyor, lütfen tekrar deneyin.",
    login: "Giriş Yap",
    log_in: "Giriş Yap",
    log_In: "Giriş Yap",
    password: "Şifre",
    forgotPassword: "Şifremi Unuttum?",
    noAccount: "Hesabınız yok mu?",
    accountNotExists: "Hesap mevcut değil.",
    passwordError: "Şifre hatası",
    sendCode: "Doğrulama Kodu Gönder",
    resetPassword: "Şifreyi Sıfırla",
    resetYourPassword: "Şifrenizi Sıfırlayın",
    newOldCantSame: "Yeni şifre eskisiyle aynı olamaz.",
    passwordResetOk: "Şifre başarıyla sıfırlandı!",
    signupToSaveProgress: "Kaydınızı tamamlayarak ilerlemenizi kaydedin",
    tip: "İpucu",
    tipContentEmail: "Hesap giriş şifrenizi e-postanıza yeni gönderdik.",
    tipContentPassword:
      "Lütfen gelen kutunuzu kontrol edin ve e-posta adresinizle şifrenizi kullanarak giriş yapın.",
    codeToEmail:
      "Doğrulama kodunu e-posta adresinize gönderdik. Lütfen gelen kutunuzu kontrol edin ve doğrulama kodunu yukarıya yapıştırın."
  },
  // Paylaşım Detay Sayfası
  Sharepage: {},
  // Başlangıç Sayfası
  InitPage: {},
  // Hesap Ayarları
  AccountSettingsPage: {
    subscription: "Abonelik planı",
    freeversion: "Ücretsiz",
    transcribeTimesDay: "Günde 3 Transkripsiyon",
    uploadMinutes: "30 Dakikalık Yükleme",
    lowerPriority: "Düşük Öncelik",
    currentPlan: "Mevcut plan",
    professionalEdition: "profesyonel sürüm",
    unlimitedTranscription: "Sınırsız transkripsiyon",
    unlimitedNumberOfTimes: "Sınırsız transkripsiyon sıklığı ve süresi.",
    filesUploadedAtOnce:
      "Her dosya en fazla 10 saat / 5 GB olabilir. Aynı anda 50 dosya yükleyin.",
    highestPriority: "en yüksek öncelik",
    weWillGiveTheHighest:
      "Dosyalarınızı en yüksek öncelikle mümkün olan en kısa sürede transkribe edeceğiz.",
    theFirstMonth: "İlk ay",
    subscribeTo: "abone ol",
    basicVersionFree: "Temel sürüm (ücretsiz)",
    return: "Geri dön",
    annualize: "yıllık",
    monthly: "aylık",
    everyYear: "her yıl",
    saved: "kaydedildi",
    byTheMonth: "aylık olarak",
    firstMonth: "ilk ay",
    afterwardsEveryMonth: "Sonrasında, her ay",
    manageSubscription: "Aboneliği Yönet",
    professionalYearbook: "Profesyonel Yıllık",
    professionalMonthly: "Profesyonel Aylık",
    subscriptionWillCancelledOn: "Aboneliğiniz iptal edilecek",
    displayLanguage: "Görüntüleme dili",
    update: "Şimdi Yükselt",
    basicversion: "Temel sürüm (Ücretsiz)",
    daily: "{start} / {end} günlük transkripsiyon kullanıldı",
    upgradetoPro: "Pro'ya Yükselt",
    accountSetting: "Hesap Ayarları",
    logOut: "Oturumu kapat",
    account: "Hesap",
    email: "E-posta",
    id: "ID",
    password: "Şifre",
    resetPassword: "Şifreyi Sıfırla",
    logIn: "Oturum aç",
    tryForFree: "Ücretsiz Dene",
    notFund: "Bulunamadı",
    couldntFind: "Aradığınız şeyi bulamadık.",
    proAnnual: "Pro Yıllık",
    proMonthly: "Pro Aylık",
    perMonth: "aylık",
    afterwards: "sonrasında",
    accuracy: "transkripsiyon doğruluğu",
    supported: "desteklenen diller",
    identification: "Konuşmacı tanımlama",
    transcriptSranslation: "Transkript çevirisi",
    perYear: "yıllık",
    getProPlan: "Pro Planı Edinin",
    changeToAnnual: "Yıllığa Geç",
    automaticRenewalon: "Otomatik yenileme tarihi",
    eachMonth: "Her ayın {time}. günü otomatik yenileme.",
    automaticRenewal:
      "Otomatik yenileme başarısız oldu, lütfen ödeme yöntemini kontrol edin.",
    eachYear: "Her yıl {time} otomatik yenileme.",
    returnAccountSetting: "Geri",
    needsToWaitLonger:
      "Dosyalarınız transkript edilmeden önce daha uzun süre bekleyin.",
    freeThreeTimesDay: "Her gün 3 dosyayı ücretsiz olarak transkript edin.",
    oneFileUploaded:
      "Her dosya en fazla 30 dakika uzunluğunda olabilir. Bir seferde 1 dosya yükleyin.",
    uploadWithinHours: "10 Saatlik Yüklemeler",
    yourSubscription: "Aboneliğiniz {time} tarihinde iptal edilecek.",
    save: "Tasarruf etmek",
      freeversion2: "Ücretsiz Plan"
},
  // Dil Eşleştirme
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Çince (Basitleştirilmiş)",
      "Chinese(Traditional)": "Çince (Geleneksel)",
      Japanese: "Japonca",
      Danish: "Danca",
      German: "Almanca",
      English: "İngilizce",
      Spanish: "İspanyolca",
      French: "Fransızca",
      Italian: "İtalyanca",
      Hungarian: "Macarca",
      Dutch: "Hollandaca",
      Norwegian: "Norveççe",
      Polish: "Lehçe",
      Portuguese: "Portekizce",
      Finnish: "Fince",
      Swedish: "İsveççe",
      Turkish: "Türkçe",
      Greek: "Yunanca",
      Russian: "Rusça",
      Ukrainian: "Ukraynaca",
      Hebrew: "İbranice",
      Arabic: "Arapça",
      Korean: "Korece"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Açık kaynak Nuxt3 SaaS şablonu, küresel ödeme ağ geçitleri (Stripe/Cream), Google OAuth, i18n yönlendirme ve SEO optimizasyon araçları ile önceden entegre edilmiştir. Çok dilli web uygulamaları geliştiren geliştiriciler için özel olarak tasarlanmış, SSR/SSG desteği ve üretim düzeyinde güvenlik sağlar.",
    startLink: "Ücretsiz denemeye başlayın~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "En son NuxtPro haberlerini ve indirimlerini ilk alan olmak için bekleme listesine katılın!",
      placeholder: "E-posta adresinizi girin",
      button: "Bekleme Listesine Katıl",
      joinCountMessage:
        "🔥 Erken kullanıcı #{count} az önce bekleme listesine katıldı!"
    },
    seo: {
      title: "Açık Kaynak Nuxt SaaS Şablonu | NuxtPro",
      description:
        "Ürününüzü hızlı bir şekilde müşterilere sunmanız için ihtiyacınız olan her şeyi içeren NuxtJS şablonu. Fikirden üretime sadece 5 dakikada."
    },
    api: {
      title: "Bu bir demo",
      corpInfo: "Şirket Bilgileri"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "Video indirme hatası"
      },
      mse: {
        code: 2,
        msg: "Akış ekleme hatası"
      },
      parse: {
        code: 3,
        msg: "Ayrıştırma hatası"
      },
      format: {
        code: 4,
        msg: "Format hatası"
      },
      decoder: {
        code: 5,
        msg: "Kod çözme hatası"
      },
      runtime: {
        code: 6,
        msg: "Sözdizimi hatası"
      },
      timeout: {
        code: 7,
        msg: "Oynatma zaman aşımı"
      },
      other: {
        code: 8,
        msg: "Diğer hata"
      }
    },
    HAVE_NOTHING: "Ses/video hazırlığı hakkında bilgi yok",
    HAVE_METADATA: "Ses/video meta verileri hazır",
    HAVE_CURRENT_DATA:
      "Mevcut oynatma konumu hakkındaki veriler kullanılabilir, ancak sonraki kare/milisaniyeyi oynatmak için yeterli veri yok",
    HAVE_FUTURE_DATA: "Mevcut ve en az bir sonraki kare için veriler mevcut",
    HAVE_ENOUGH_DATA: "Oynatmaya başlamak için yeterli veri mevcut",
    NETWORK_EMPTY: "Ses/video henüz başlatılmadı",
    NETWORK_IDLE: "Ses/video etkin ve kaynak seçildi, ancak ağ kullanılmıyor",
    NETWORK_LOADING: "Tarayıcı veri indiriyor",
    NETWORK_NO_SOURCE: "Ses/video kaynağı bulunamadı",
    MEDIA_ERR_ABORTED: "Alma işlemi kullanıcı tarafından iptal edildi",
    MEDIA_ERR_NETWORK: "Ağ hatası",
    MEDIA_ERR_DECODE: "Kod çözme hatası",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Desteklenmeyen ses/video formatı",
    REPLAY: "Tekrar Oynat",
    ERROR: "Ağ bağlantısında bir sorun var gibi görünüyor",
    PLAY_TIPS: "Oynat",
    PAUSE_TIPS: "Duraklat",
    PLAYNEXT_TIPS: "Sonraki Bölüm",
    DOWNLOAD_TIPS: "İndir",
    ROTATE_TIPS: "Döndür",
    RELOAD_TIPS: "Yeniden Yükle",
    FULLSCREEN_TIPS: "Tam Ekran",
    EXITFULLSCREEN_TIPS: "Tam Ekrandan Çık",
    CSSFULLSCREEN_TIPS: "CSS Tam Ekran",
    EXITCSSFULLSCREEN_TIPS: "CSS Tam Ekrandan Çık",
    TEXTTRACK: "Altyazı",
    PIP: "Resim İçinde Resim",
    SCREENSHOT: "Ekran Görüntüsü",
    LIVE: "Canlı Yayın",
    OFF: "Kapalı",
    OPEN: "Açık",
    MINI_DRAG: "Videoyu sürüklemek için tıklayıp basılı tutun",
    MINISCREEN: "Küçük Ekran",
    REFRESH_TIPS: "Deneyin",
    REFRESH: "Yenile",
    FORWARD: "İleri Sarma",
    LIVE_TIP: "Canlı",
    TM_SUBTITLE_SHOW_TIPS: "Altyazıları Aç",
    TM_SUBTITLE_HIDE_TIPS: "Altyazıları Kapat",
    TM_MINIMIZE_TIPS: "Videoyu Gizle"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 25 Ağustos 2025",
    policyDescription:
      `Bu Politika, Scribify'ın (bundan böyle "Scribify", "bizim", "biz", "bize" olarak anılacaktır) hizmetlerimizi, web sitelerimizi kullandığınızda kişisel bilgilerinizi nasıl topladığını, kullandığını ve ifşa ettiğini açıklar.`,
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 've yazılım (toplu olarak "Hizmetler").',
    policyAgreement:
      "Lütfen bu Gizlilik Politikasını dikkatlice okuyun ve anladığınızdan emin olun. Hizmetlerimizden herhangi birini kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Kişisel verilerinizin bu Politikaya uygun olarak kullanılmasını kabul etmiyorsanız, Hizmetlerimizi kullanmayı derhal bırakmalısınız.",
    policyOverview:
      "Bu politikada, hangi verileri neden topladığımızı, verilerinizin nasıl işlendiğini ve verilerinizle ilgili haklarınızı açıklıyoruz. Verilerinizi satmıyoruz.",
    scopeTitle: "1. Bu Gizlilik Politikasının Kapsamı",
    whatWeCollectTitle: "2. Neleri topluyoruz ve neden?",
    accessShareTitle:
      "3. Bilgilerinize eriştiğimizde veya bunları paylaştığımızda",
    secureDataTitle: "4. Verilerinizi nasıl güvence altına alıyoruz?",
    deleteContentTitle: "5. İçeriğinizi sildiğinizde ne olur?",
    locationTitle: "6. Sitenin ve verilerin konumu",
    childrenPrivacyTitle: "7. Çocukların Gizliliği",
    updatesTitle: "8. Bu Gizlilik Politikasındaki Güncellemeler",
    contactUsTitle: "9. Bizimle İletişime Geçin",
    identityAccessTitle: "2.1 Kimlik ve erişim",
    billingInfoTitle: "2.2 Fatura bilgileri",
    productInteractionsTitle: "2.3 Ürün etkileşimleri",
    websiteInteractionsTitle: "2.4 Web sitesi etkileşimleri",
    cookiesTitle: "2.5 Çerezler",
    voluntaryCorrespondenceTitle: "2.6 Gönüllü yazışmalar",
    scopeContent:
      "Bu Gizlilik Politikası, yalnızca Hizmetlerin kullanıcıları hakkındaki bilgilerin toplanması ve işlenmesi için geçerlidir. Bu Gizlilik Politikası, bize bağlantı veren üçüncü taraflarca işletilen hiçbir hizmet, web sitesi veya yazılım için geçerli değildir (bu bağlantıları biz sağlasak da, diğer kullanıcılar paylaşsa da) ve üçüncü taraflara ait içerik, veri, uygulama veya materyaller için de geçerli değildir. Herhangi bir üçüncü taraf web sitesi veya yazılımına herhangi bir bilgi vermeden önce gizlilik politikalarını kontrol etmenizi tavsiye ederiz.",
    collectPrinciple:
      "Rehber ilkemiz, yalnızca ihtiyacımız olanı toplamaktır. Bunun pratikteki anlamı şudur:",
    identityAccessContent:
      "Ürünlerimizden birine kaydolduğunuzda, adınız, e-posta adresiniz gibi kimlik bilgilerinizi isteriz. Bu, ürünün temel işlevlerini sağlamak ve size ürün güncellemeleri ve diğer önemli bilgileri gönderebilmemiz içindir.",
    billingInfoContent:
      "Ücretli bir ürüne kaydolursanız, ödeme bilgilerinizi ve fatura adresinizi vermeniz istenecektir. Ödeme bilgileriniz doğrudan ödeme işlemcimize gönderilir ve sunucularımıza aktarılmaz.",
    productInteractionsContent:
      "Ürün hesaplarınıza yüklediğiniz, aldığınız veya muhafaza ettiğiniz içerikleri sunucularımızda saklıyoruz. Bu içeriği silmediğiniz sürece, hesabınız aktif olduğu sürece bu içeriği saklayabiliriz.",
    websiteInteractionsContent:
      "Dönüşüm oranı testleri ve yeni ürün tasarımları denemeleri gibi analiz ve istatistiksel amaçlarla tarama etkinliğiniz hakkında bilgi topluyoruz. Bu bilgiler arasında tarayıcınızın ve işletim sisteminizin sürümleri, IP adresiniz, ziyaret ettiğiniz web sayfaları ve bunların yüklenme süresi ve sizi bize yönlendiren web sitesi gibi bilgiler yer alır. Bir hesabınız varsa ve oturum açtıysanız, bu web analizi verileri, hesabınız aktif olmayana kadar IP adresiniz ve kullanıcı hesabınızla ilişkilendirilir.",
    cookiesContent1:
      "Ayrıca, belirli tercihleri saklamak, uygulamalarımızı kullanmanızı kolaylaştırmak, A/B testleri gerçekleştirmek ve bazı analizleri desteklemek için kalıcı birinci taraf çerezleri ve bazı üçüncü taraf çerezleri kullanıyoruz.",
    cookiesContent2:
      "Çerez, tarayıcınız tarafından depolanan bir metin parçasıdır. Oturum açma bilgilerinizi ve site tercihlerinizi hatırlamanıza yardımcı olabilir. Ayrıca tarayıcınızın türü, işletim sistemi, ziyaret edilen web sayfaları, ziyaret süresi, görüntülenen içerik ve diğer tıklama akışı verileri gibi bilgileri de toplayabilir. Çerez saklama ayarlarını düzenleyebilir ve tarayıcı ayarlarınızdan tek tek çerezleri kabul edebilir veya engelleyebilirsiniz. Ancak çerezleri kapatırsanız uygulamalarımız ve hizmetimizin diğer özellikleri düzgün çalışmayabilir.",
    voluntaryCorrespondenceContent:
      "Bize bir soru sormak veya yardım istemek için e-posta gönderdiğinizde, e-posta adresiniz de dahil olmak üzere bu yazışmaları saklarız; böylece gelecekte bize ulaşmanız durumunda referans alabileceğimiz geçmiş yazışmaların bir geçmişine sahip oluruz.",
    accessShareContent1:
      "Talep ettiğiniz ürün veya hizmetleri sağlamak için. Uygulamalarımızı çalıştırmamıza ve Hizmetleri size sunmamıza yardımcı olmak için bazı üçüncü taraf alt işlemcilerden yararlanıyoruz. Bunlara bulut ve analiz sağlayıcıları da dahildir.",
    accessShareContent2:
      "Kötüye kullanımı araştırmak, önlemek veya bu konuda işlem yapmak. Olası bir kötüye kullanımı araştırırken bir müşterinin hesabına erişmek son çaredir. Hem müşterilerimizin hem de bize sorun bildiren kişilerin gizliliğini ve güvenliğini korumak istiyoruz ve süreç boyunca bu sorumlulukları dengelemek için elimizden gelenin en iyisini yapıyoruz. Ürünlerimizi kısıtlı bir amaçla kullandığınızı tespit edersek, gerekli durumlarda ilgili makamlara bildirimde bulunmak da dahil olmak üzere gerekli işlemleri yapacağız.",
    accessShareContent3: "Uygulanabilir yasa gereği gerekli olduğunda.",
    userDataRequests:
      "- Kullanıcı verilerine ilişkin talepler. Politikamız, yasal bir süreç gerektirmediği veya acil bir talep durumunda sınırlı koşullar olmadığı sürece, resmi makamların kullanıcı verilerine ilişkin taleplerine yanıt vermemektir. Ancak, ABD kolluk kuvvetlerinin veri paylaşmamızı gerektiren gerekli emri, cezai celbi veya mahkeme emri varsa, bu emre uymak zorundayız. Benzer şekilde, ABD dışındaki resmi makamlardan gelen taleplere, yalnızca ABD hükümeti tarafından karşılıklı hukuki yardım anlaşması veya sözleşmesinde belirtilen prosedürler uyarınca zorunlu kılınması halinde yanıt vereceğiz. Yasal olarak yasaklanmadığımız ve bazı acil durumlar haricinde, veri paylaşmadan önce etkilenen kullanıcıları bilgilendirmek politikamızdır.",
    preservationRequests:
      "- Saklama talepleri. Benzer şekilde, politikamız, yalnızca ABD Federal Saklı İletişim Yasası, 18 USC Bölüm 2703(f) veya hukuk davaları için usulüne uygun olarak tebliğ edilmiş bir ABD mahkeme celbi uyarınca zorunlu kılınması halinde veri saklama taleplerine uymaktır. Yasalarca zorunlu kılınmadıkça veya itiraz etmemeyi tercih ettiğimiz bir mahkeme kararıyla zorunlu kılınmadıkça, saklanan verileri paylaşmayız. Ayrıca, gerekli saklama süresi dolmadan önce uygun bir arama emri, mahkeme kararı veya mahkeme celbi almadığımız takdirde, saklama süresinin sonunda müşteri verilerinin saklanan tüm kopyalarını imha edeceğiz.",
    taxAudit:
      "- Bir vergi dairesi tarafından denetlenmemiz durumunda, faturalandırmayla ilgili bilgileri paylaşmamız gerekebilir. Bu durumda, fatura adresleri ve vergi muafiyet bilgileri gibi yalnızca gerekli olan asgari bilgileri paylaşırız.",
    secureDataContent1: "Tüm veriler şifrelenir",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "sunucularımızdan tarayıcınıza iletildiğinde.",
    deleteContentContent:
      "Herhangi bir içeriği silerseniz, anında erişilemez hale gelecektir.",
    locationContent:
      "Ürünlerimiz ve diğer web sitelerimiz Amerika Birleşik Devletleri'nde işletilmektedir. Avrupa Birliği, Birleşik Krallık veya Amerika Birleşik Devletleri dışında bir yerde bulunuyorsanız, bize sağladığınız tüm bilgilerin Amerika Birleşik Devletleri'ne aktarılacağını ve orada saklanacağını lütfen unutmayın. Web sitelerimizi veya Hizmetlerimizi kullanarak ve/veya bize kişisel bilgilerinizi vererek, bu aktarıma onay vermiş olursunuz.",
    childrenPrivacyContent:
      "Hizmetler çocuklara yönelik değildir ve 13 yaşın altındaki çocuklardan bilerek Kişisel Bilgi toplamıyoruz. 13 yaşın altındaysanız, lütfen Hizmetler aracılığıyla herhangi bir kişisel bilgi göndermeyin. Bir çocuğun bu Politikayı ihlal ederek bize Kişisel Bilgi sağladığına inanıyorsanız, lütfen aşağıda belirtildiği şekilde bizimle iletişime geçin.",
    updatesContent:
      "İlgili düzenlemelere uyum sağlamak ve yeni uygulamaları yansıtmak için bu politikayı gerektiği gibi güncelleyebiliriz. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üst kısmındaki tarihi yenileyeceğiz.",
    contactUsContent1:
      "Gizlilik Politikamızla ilgili herhangi bir sorunuz, yorumunuz veya şikayetiniz varsa lütfen",
    contactUs: "bize Ulaşın",
    contactUsContent2:
      "ve şikayetinizle en kısa sürede ilgilenmeye çalışacağız."
  },
  termsOfService: {
    termsOfServiceTitle: "Hizmet Şartları",
    lastUpdated: "Son güncelleme: 21 Eylül 2022",
    thankYouMessage: "Ürünlerimizi kullandığınız için teşekkür ederiz!",
    companyReference:
      `Bu belgede "Şirket", "biz", "bizim" veya "bize" dediğimizde Scribify'ı kastediyoruz.`,
    servicesDefinition:
      '"Hizmetler" dediğimizde, ister bir web tarayıcısı, masaüstü uygulaması, mobil uygulama veya başka bir formatta sunulsun, Scribify tarafından oluşturulan ve yönetilen herhangi bir ürünü kastediyoruz.',
    termsUpdateNotice:
      "Bu Hizmet Şartları'nı gelecekte güncelleyebiliriz. Bu değişiklikler genellikle, genişletilmiş ilgili bir politikaya bağlantı vererek bu şartlardan bazılarını açıklığa kavuşturmak amacıyla yapılmıştır. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üst kısmındaki tarihi yenileyecek ve hesap sahiplerini bilgilendirmek için diğer uygun adımları atacağız.",
    acceptanceOfAgreementTitle: "1. Sözleşmenin Kabulü",
    scribifyServicesTitle: "2. Scribify'ın Hizmetleri",
    accountTermsTitle: "3. Hesap Şartları",
    paymentRefundsTitle: "4. Ödeme, Geri Ödemeler ve Plan Değişiklikleri",
    cancellationTerminationTitle: "5. İptal ve Fesih",
    submissionsTitle: "6. Gönderimler",
    uptimeSecurityTitle: "7. Çalışma Süresi ve Güvenlik",
    siteManagementTitle: "8. Site Yönetimi",
    copyrightContentTitle: "9. Telif Hakkı ve İçerik Sahipliği",
    prohibitedActivitiesTitle: "10. Yasaklanmış Faaliyetler",
    featuresBugsTitle: "11. Özellikler ve Hatalar",
    correctionsTitle: "12. DÜZELTMELER",
    userDataTitle: "13. Kullanıcı Verileri",
    privacyPolicyTitle: "14. Gizlilik Politikası",
    liabilityTitle: "15. Sorumluluk",
    miscellaneousTitle: "16. Çeşitli",
    contactUsTitle: "17. Bizimle İletişime Geçin",
    acceptanceContent1:
      "Hizmetlerimizi kullanarak, bu Sözleşme'yi kabul ettiğinizi beyan etmiş olursunuz; bu Sözleşme, sizinle Scribify arasında bağlayıcı bir sözleşme haline gelir. Bu Şartları yasal olarak kabul etme yetkisine sahip olduğunuzu beyan eder ve bağlayıcı bir sözleşme yapmak için yasal yaşta olduğunuzu onaylarsınız. Scribify'ın kabulü, bu Sözleşme'nin tüm hüküm ve koşullarını kabul etmenize açıkça bağlıdır.",
    acceptanceContent2:
      "Hizmetler, 18 yaşın altındaki kişiler için tasarlanmamıştır ve bu kişiler tarafından kullanılmamalıdır. Hizmetleri kullanarak, yukarıda belirtilen uygunluk şartlarını karşıladığınızı beyan ve garanti edersiniz.",
    acceptanceContent3:
      `"Siz", "sizin", "kendiniz" terimleri, çalışanlarınızı, temsilcilerinizi, iş temsilcilerinizi ve Hesabınız (aşağıda tanımlandığı şekilde) aracılığıyla Hizmetlere erişim sağladığınız diğer kişileri de kapsar. Hesabınız aracılığıyla Hizmetlere erişen tüm kişilerin bu Şartlar'dan haberdar olmasını ve bunlara uymasını sağlamak sizin sorumluluğunuzdadır.`,
    acceptanceContent4:
      "Scribify, bu Şartları kendi takdirine bağlı olarak zaman zaman revize etme ve güncelleme hakkını saklı tutar. Tüm değişiklikler yayınlandığı anda yürürlüğe girer. Revize edilen Şartların yayınlanmasının ardından Hizmetleri kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz ve onayladığınız anlamına gelir. Değişiklikler sizin için bağlayıcı olduğundan, değişikliklerden haberdar olmak için bu sayfayı zaman zaman kontrol etmeniz beklenmektedir.",
    servicesContent1:
      "Hizmetlerimiz, kullanıcıların sesli görüşmeleri aranabilen, çevrilebilen ve başkalarıyla paylaşılabilen yazıya dökülmüş metne dönüştürmesini sağlar.",
    servicesContent2:
      'Hizmetlerin ücretsiz sürümünü ("Ücretsiz Hizmetler") veya ücret ödemeniz gerekebilecek abonelik tabanlı ücretli Hizmetlerin sürümünü ("Ücretli Hizmetler") kullanmayı seçebilirsiniz.',
    servicesContent3:
      "Hizmetleri size sunacağız. Hizmetlere erişiminiz için gerekli tüm düzenlemeleri yapmaktan siz sorumlusunuz.",
    accountTerms1:
      "- Hesabınızın güvenliğini sağlamak sizin sorumluluğunuzdadır. Şirket, bu güvenlik yükümlülüğüne uymamanızdan kaynaklanan herhangi bir kayıp veya zarardan sorumlu tutulamaz ve tutulmayacaktır.",
    accountTerms2:
      "- Hizmetleri herhangi bir hukuka aykırı, etik olmayan veya ahlaka aykırı amaç için kullanamazsınız.",
    accountTerms3:
      "- Hesabınız altında yayınlanan tüm içeriklerden ve gerçekleşen tüm etkinliklerden siz sorumlusunuz. Bu, (a) oturum açma bilgilerinize erişimi olan veya (b) hesabınız altında kendi oturum açma bilgilerine sahip olan başkaları tarafından yayınlanan içerikleri de içerir.",
    accountTerms4:
      '- İnsan olmanız gerekmektedir. "Bot" veya diğer otomatik yöntemlerle oluşturulan hesaplara izin verilmemektedir.',
    paymentContent1:
      "- Ücretsiz deneme sunan ücretli Hizmetler için, kaydolduğunuzda deneme süresinin uzunluğunu açıklıyoruz. Deneme süresinden sonra, Hizmeti kullanmaya devam etmek için önceden ödeme yapmanız gerekmektedir. Ödeme yapmazsanız, bu hizmetler sona erecektir.",
    paymentContent2:
      "- Ücretsiz bir plandan ücretli bir plana yükseltme yapıyorsanız, kartınızdan hemen ücret tahsil edilir ve faturalandırma döngünüz yükseltme gününde başlar.",
    paymentContent3:
      "- Tüm ücretlere, vergi makamları tarafından uygulanan tüm vergiler, harçlar veya vergiler dahil değildir. Gerektiğinde, bu vergileri vergi makamları adına tahsil edip vergi makamlarına ileteceğiz. Aksi takdirde, tüm vergi, harç veya vergilerin ödenmesinden siz sorumlusunuz.",
    paymentContent4:
      "- Satın alımlar iade edilemez. Hesabınıza giriş yaparak ücretli hizmetleri istediğiniz zaman iptal edebilirsiniz. Ücretli aboneliklerde, aksi belirtilmedikçe iptaliniz mevcut ücretli dönemin sonunda geçerli olacaktır.",
    cancellationContent1:
      "- Ücretli bir sürenin bitiminden önce Hizmeti iptal ederseniz, iptaliniz derhal geçerli olacak ve sizden tekrar ücret alınmayacaktır. Son fatura döneminde kullanılmayan süreyi otomatik olarak oransal olarak bölmüyoruz.",
    cancellationContent2:
      "- Hesabınızı askıya alma veya sonlandırma ve Hizmetlerimizin mevcut veya gelecekteki tüm kullanımlarını herhangi bir zamanda, herhangi bir nedenle reddetme hakkımız saklıdır. Askıya alma, hesaba veya hesaptaki herhangi bir içeriğe erişemeyeceğiniz anlamına gelir. Sonlandırma ayrıca hesabınızın veya hesabınıza erişiminizin silinmesi ve hesabınızdaki tüm içeriğin kaybedilmesi ve vazgeçilmesiyle sonuçlanacaktır. Ayrıca, herhangi bir zamanda, herhangi bir nedenle herhangi bir kişinin Hizmetleri kullanmasını reddetme hakkımızı saklı tutuyoruz. Bu maddeyi kullanmamızın nedeni, istatistiksel olarak, Hizmetlerimizdeki yüz binlerce hesaptan en az birinin kötü niyetli bir şey yapıyor olmasıdır.",
    cancellationContent3:
      "- Şirket çalışanına veya yöneticisine yönelik sözlü, fiziksel, yazılı veya başka türlü taciz (taciz veya misilleme tehditleri dahil) hesabın derhal feshedilmesine yol açabilir.",
    submissionsContent:
      'Tarafınızca Site ile ilgili olarak bize sağlanan her türlü soru, yorum, öneri, fikir, geri bildirim veya diğer bilgilerin ("Gönderimler") gizli olmadığını ve münhasır mülkiyetimiz haline geleceğini kabul ve beyan edersiniz. Tüm fikri mülkiyet hakları da dahil olmak üzere münhasır haklara sahip olacağız ve bu Gönderimleri, size herhangi bir bildirimde bulunmaksızın veya tazminat ödemeden, ticari veya başka türlü herhangi bir yasal amaç için sınırsız olarak kullanma ve yayma hakkına sahip olacağız. Bu tür Gönderimler üzerindeki tüm manevi haklardan feragat ediyor ve bu tür Gönderimlerin size ait olduğunu veya bu tür Gönderimleri gönderme hakkına sahip olduğunuzu garanti ediyorsunuz. Gönderimleriniz üzerindeki herhangi bir mülkiyet hakkının iddia edilen veya fiili ihlali veya kötüye kullanımı nedeniyle bize karşı hiçbir başvuru yolu olmayacağını kabul edersiniz.',
    uptimeContent1:
      '- Hizmetleri kullanımınızın tüm riski size aittir. Bu Hizmetleri "olduğu gibi" ve "mevcut olduğu şekilde" sunuyoruz. Hizmetlerimizin çoğu için hizmet seviyesi sözleşmeleri sunmuyoruz, ancak uygulamalarımızın çalışma süresini ciddiye alıyoruz.',
    uptimeContent2:
      "- Kullanımınızın, Hizmetlerin diğer müşterilerinin tipik kullanımlarını önemli ölçüde aşması durumunda hesabınızı geçici olarak devre dışı bırakma hakkımızı saklı tutarız. Kullanım düzeyinin diğer müşteriler için Hizmet performansını olumsuz etkileyebileceği nadir durumlar haricinde, herhangi bir işlem yapmadan önce sizinle iletişime geçeceğiz.",
    uptimeContent3:
      "- Verilerinizi yedekleme, yedekleme ve şifreleme yoluyla korumak ve güvence altına almak için birçok önlem alıyoruz. Genel internet üzerinden veri iletimi için şifreleme uyguluyoruz.",
    uptimeContent4:
      "- Hizmetleri çalıştırmak için gereken donanım, yazılım, ağ, depolama ve ilgili teknolojiyi sağlamak amacıyla üçüncü taraf satıcıları ve barındırma ortaklarını kullanıyoruz.",
    siteManagementContent:
      "(1) Site'yi bu Hizmet Şartları'nın ihlalleri açısından izlemek; (2) kendi takdirimize bağlı olarak kanunu veya bu Hizmet Şartları'nı ihlal eden herkese karşı uygun yasal işlemleri başlatmak, bu tür kullanıcıları kolluk kuvvetlerine bildirmek dahil ancak bunlarla sınırlı olmamak üzere; (3) kendi takdirimize bağlı olarak ve herhangi bir sınırlama olmaksızın, Katkılarınızdan herhangi birini veya herhangi bir kısmını reddetmek, erişimini kısıtlamak, kullanılabilirliğini sınırlamak veya devre dışı bırakmak (teknolojik olarak mümkün olduğu ölçüde); (4) kendi takdirimize bağlı olarak ve herhangi bir sınırlama olmaksızın, Site'den aşırı boyutta olan veya sistemlerimiz için herhangi bir şekilde külfetli olan tüm dosyaları ve içeriği kaldırmak veya başka şekilde devre dışı bırakmak; ve (5) Site'yi haklarımızı ve mülkiyetimizi korumak ve Site'nin düzgün çalışmasını kolaylaştırmak için tasarlanmış bir şekilde yönetmek.",
    copyrightContent1:
      "- Hizmetlerde yayınlanan tüm içerikler ABD telif hakkı yasasına uygun olmalıdır.",
    copyrightContent2:
      "- Hizmetlere sağladığınız materyaller üzerinde hiçbir fikri mülkiyet hakkı iddia etmiyoruz. Yüklenen tüm materyaller size ait olmaya devam edecektir.",
    copyrightContent3:
      "- İçeriği önceden kontrol etmiyoruz, ancak Hizmet aracılığıyla sunulan herhangi bir içeriği kendi takdirimize bağlı olarak reddetme veya kaldırma hakkını saklı tutuyoruz (ancak bu bir yükümlülük değil).",
    copyrightContent4:
      "- Hizmetlerin adları, görünümü ve hissiyatı Şirket'e aittir. Tüm hakları saklıdır. Şirket'in açık yazılı izni olmadan HTML, CSS, JavaScript veya görsel tasarım öğelerinin hiçbir bölümünü çoğaltamaz, kopyalayamaz veya yeniden kullanamazsınız. Şirket logosunu veya herhangi bir Hizmet logosunu tanıtım amaçlı kullanmak için izin almalısınız. Lütfen",
    emailUs: "bize e-posta gönderin",
    copyrightContent5:
      "Logo kullanma talepleri. Bu Hizmet Şartları'nı ihlal etmeniz halinde bu izni iptal etme hakkımızı saklı tutarız.",
    copyrightContent6:
      "- Şirket'in açık yazılı izni olmaksızın Hizmetlerin herhangi bir bölümünü, Hizmetlerin kullanımını veya Hizmetlere erişimi çoğaltmamayı, kopyalamamayı, satmamayı, yeniden satmamayı veya istismar etmemeyi kabul edersiniz.",
    copyrightContent7:
      "- Başka bir web sitesini, Hizmetler veya Şirket ile ilişkili olduğu yönünde yanlış bir imada bulunacak şekilde değiştirmemelisiniz.",
    copyrightContent8:
      "- Başkalarının fikri mülkiyet haklarına saygı duyuyoruz. Sitede veya Site aracılığıyla erişilebilen herhangi bir materyalin, sahip olduğunuz veya kontrol ettiğiniz herhangi bir telif hakkını ihlal ettiğine inanıyorsanız, lütfen derhal bizimle iletişime geçin.",
    contactUs: "bize Ulaşın",
    copyrightContent9:
      "Bildiriminizin bir kopyası, Bildirimde belirtilen materyali yayınlayan veya depolayan kişiye gönderilecektir. Lütfen, yürürlükteki yasalar uyarınca, bir Bildirimde önemli yanlış beyanlarda bulunmanız durumunda tazminat ödemek zorunda kalabileceğinizi unutmayın. Bu nedenle, Sitede bulunan veya Site tarafından bağlantısı verilen materyalin telif hakkınızı ihlal ettiğinden emin değilseniz, öncelikle bir avukata başvurmayı düşünmelisiniz.",
    prohibitedActivitiesIntro:
      "Site'ye, tarafımızca kullanıma sunulma amacı dışında herhangi bir amaçla erişemez veya kullanamazsınız. Site, tarafımızca özel olarak onaylanan veya desteklenenler dışında herhangi bir ticari girişimle bağlantılı olarak kullanılamaz.",
    prohibitedActivitiesUserAgreement:
      "Sitenin bir kullanıcısı olarak şunları yapmamayı kabul edersiniz:",
    prohibitedActivity1:
      "- Bizden yazılı izin almadan, doğrudan veya dolaylı olarak bir koleksiyon, derleme, veritabanı veya dizin oluşturmak veya derlemek amacıyla Siteden sistematik olarak veri veya diğer içerikleri almak.",
    prohibitedActivity2:
      "- Özellikle kullanıcı şifreleri gibi hassas hesap bilgilerini öğrenmeye yönelik herhangi bir girişimde bulunarak bizi ve diğer kullanıcıları kandırmak, dolandırmak veya yanıltmak.",
    prohibitedActivity3:
      "- Sitenin güvenlikle ilgili özelliklerini, İçeriğin kullanımını veya kopyalanmasını engelleyen veya kısıtlayan veya Sitenin ve/veya Sitede bulunan İçeriğin kullanımına ilişkin sınırlamalar getiren özellikler dahil olmak üzere, devre dışı bırakmak veya başka şekillerde engellemek.",
    prohibitedActivity4:
      "- Bizim görüşümüze göre bizi ve/veya Siteyi küçük düşürmek, karalamak veya başka bir şekilde zarar vermek.",
    prohibitedActivity5:
      "- Siteden elde edilen herhangi bir bilgiyi başka bir kişiyi taciz etmek, istismar etmek veya zarar vermek amacıyla kullanmak.",
    prohibitedActivity6:
      "- Destek hizmetlerimizi uygunsuz şekilde kullanmayın veya kötüye kullanım veya uygunsuz davranışa ilişkin asılsız bildirimlerde bulunmayın.",
    prohibitedActivity7:
      "- Siteyi yürürlükteki herhangi bir yasa veya yönetmeliğe aykırı bir şekilde kullanmak.",
    prohibitedActivity8:
      "- Sitenin izinsiz olarak çerçevelenmesi veya Siteye bağlantı verilmesi.",
    prohibitedActivity9:
      "- Sitenin herhangi bir tarafça kesintisiz kullanımını ve keyfini engelleyen veya Sitenin kullanımını, özelliklerini, işlevlerini, işletimini veya bakımını değiştiren, bozan, kesintiye uğratan, değiştiren veya bunlara müdahale eden virüsleri, Truva atlarını veya büyük harflerin aşırı kullanımı ve spam (tekrarlayan metinlerin sürekli olarak gönderilmesi) gibi diğer materyalleri yüklemek veya iletmek (veya yüklemeye veya iletmeye çalışmak).",
    prohibitedActivity10:
      "- Yorum veya mesaj göndermek için komut dosyaları kullanmak veya veri madenciliği, robotlar veya benzeri veri toplama ve çıkarma araçlarını kullanmak gibi sistemin herhangi bir otomatik kullanımına girişmek.",
    prohibitedActivity11:
      "- Herhangi bir İçerikten telif hakkı veya diğer mülkiyet hakları bildirimini silin.",
    prohibitedActivity12:
      "- Başka bir kullanıcıyı veya kişiyi taklit etmeye çalışmak veya başka bir kullanıcının kullanıcı adını kullanmak.",
    prohibitedActivity13:
      `- Pasif veya aktif bilgi toplama veya iletim mekanizması olarak işlev gören herhangi bir materyali yüklemek veya iletmek (veya yüklemeyi veya iletmeyi denemek) (bunlarla sınırlı olmamak üzere, net grafik değişim biçimleri ("gif'ler"), 1x1 piksel, web böcekleri, çerezler veya diğer benzer aygıtlar (bazen "casus yazılım" veya "pasif toplama mekanizmaları" veya "pcm'ler" olarak anılır).`,
    prohibitedActivity14:
      "- Siteye veya Siteye bağlı ağlara veya hizmetlere müdahale etmek, bunları bozmak veya bunlar üzerinde gereksiz bir yük oluşturmak.",
    prohibitedActivity15:
      "- Sitenin herhangi bir bölümünü size sağlamakla görevli çalışanlarımızı veya temsilcilerimizi taciz etmek, rahatsız etmek, korkutmak veya tehdit etmek.",
    prohibitedActivity16:
      "- Siteye veya Sitenin herhangi bir bölümüne erişimi engellemek veya kısıtlamak amacıyla tasarlanmış Sitenin herhangi bir önlemini aşmaya çalışmak.",
    prohibitedActivity17:
      "- Flash, PHP, HTML, JavaScript veya diğer kodlar dahil ancak bunlarla sınırlı olmamak üzere Sitenin yazılımını kopyalamak veya uyarlamak.",
    prohibitedActivity18:
      "- Uygulanabilir kanunların izin verdiği durumlar haricinde, Sitenin bir parçasını oluşturan veya herhangi bir şekilde oluşturan yazılımların hiçbirini deşifre etmek, derlemesini açmak, parçalarına ayırmak veya tersine mühendislik uygulamak.",
    prohibitedActivity19:
      "- Standart arama motoru veya İnternet tarayıcısı kullanımının sonucu olabilecek durumlar haricinde, Siteye erişen herhangi bir örümcek, robot, hile aracı, kazıyıcı veya çevrimdışı okuyucu dahil ancak bunlarla sınırlı olmamak üzere herhangi bir otomatik sistemi kullanmak, başlatmak, geliştirmek veya dağıtmak veya yetkisiz herhangi bir betik veya başka bir yazılımı kullanmak veya başlatmak.",
    prohibitedActivity20:
      "- Site üzerinden alışveriş yapmak için bir satın alma temsilcisi veya satın alma acentesi kullanın.",
    prohibitedActivity21:
      "- Kullanıcıların kullanıcı adlarını ve/veya e-posta adreslerini elektronik veya başka yollarla istenmeyen e-posta göndermek amacıyla toplamak veya otomatik yollarla veya sahte beyanlarla kullanıcı hesapları oluşturmak da dahil olmak üzere Sitenin yetkisiz kullanımını gerçekleştirmek.",
    prohibitedActivity22:
      "- Siteyi bizimle rekabet etme çabasının bir parçası olarak kullanmak veya Siteyi ve/veya İçeriği herhangi bir gelir getirici çaba veya ticari girişim için kullanmak.",
    prohibitedActivity23:
      "- Siteyi mal ve hizmetlerin reklamını yapmak veya satışını teklif etmek için kullanmak.",
    prohibitedActivity24:
      "- Profilinizi satamaz veya başka bir şekilde devredemezsiniz.",
    featuresContent1:
      "Hizmetlerimizi, kendi deneyimlerimize ve zamanlarını ve geri bildirimlerini paylaşan müşterilerimizin deneyimlerine dayanarak özenle tasarlıyoruz. Ancak, herkesi memnun edecek bir hizmet diye bir şey yoktur. Hizmetlerimizin özel ihtiyaçlarınızı veya beklentilerinizi karşılayacağının garantisini vermiyoruz.",
    featuresContent2:
      "Ayrıca, tüm özelliklerimizi göndermeden önce test ediyoruz. Her yazılımda olduğu gibi, Hizmetlerimizde de kaçınılmaz olarak bazı hatalar bulunur. Bize bildirilen hataları takip ediyor ve özellikle güvenlik veya gizlilikle ilgili olanları çözüyoruz. Bildirilen tüm hatalar düzeltilmeyecek ve Hizmetlerin tamamen hatasız olacağını garanti etmiyoruz.",
    correctionsContent1:
      "Sitede, açıklamalar, fiyatlandırma, bulunabilirlik ve diğer çeşitli bilgiler dahil olmak üzere tipografik hatalar, yanlışlıklar veya eksiklikler içeren bilgiler bulunabilir. Herhangi bir hatayı, yanlışlığı veya eksikliği düzeltme ve Sitedeki bilgileri önceden haber vermeksizin herhangi bir zamanda değiştirme veya güncelleme hakkımızı saklı tutarız.",
    correctionsContent2:
      "Sitenin her zaman erişilebilir olacağını garanti edemeyiz. Site ile ilgili donanım, yazılım veya başka sorunlar yaşayabilir veya bakım yapmamız gerekebilir; bu da kesintilere, gecikmelere veya hatalara neden olabilir. Siteyi herhangi bir zamanda ve herhangi bir nedenle size bildirimde bulunmaksızın değiştirme, revize etme, güncelleme, askıya alma, durdurma veya başka şekilde değiştirme hakkını saklı tutarız. Sitenin herhangi bir kesintisi veya durdurulması sırasında Siteye erişememeniz veya Siteyi kullanamamanız nedeniyle oluşabilecek herhangi bir kayıp, hasar veya rahatsızlıktan hiçbir şekilde sorumlu olmadığımızı kabul edersiniz. Bu Hizmet Şartları'ndaki hiçbir hüküm, Siteyi sürdürme ve destekleme veya bununla bağlantılı herhangi bir düzeltme, güncelleme veya sürüm sağlama yükümlülüğümüz olduğu şeklinde yorumlanmayacaktır.",
    userDataContent:
      "Site'nin performansını yönetmek amacıyla Site'ye ilettiğiniz belirli verileri ve Site kullanımınızla ilgili verileri saklayacağız. Düzenli olarak rutin veri yedeklemeleri yapıyor olsak da, ilettiğiniz veya Site'yi kullanarak gerçekleştirdiğiniz herhangi bir faaliyetle ilgili tüm verilerden yalnızca siz sorumlusunuz. Bu tür verilerin kaybolması veya bozulması durumunda size karşı hiçbir sorumluluğumuz olmayacağını kabul ediyor ve bu tür verilerin kaybolması veya bozulmasından kaynaklanan her türlü dava hakkından feragat ediyorsunuz.",
    privacyPolicyContent1:
      "Veri gizliliği ve güvenliğine önem veriyoruz. Lütfen inceleyin.",
    privacyPolicy: "Gizlilik Politikası",
    privacyPolicyContent2:
      "Siteyi kullanarak, bu Hizmet Şartları'na dahil edilen Gizlilik Politikamıza bağlı kalmayı kabul etmiş olursunuz. Sitenin Amerika Birleşik Devletleri'nde barındırıldığını lütfen unutmayın. Siteye, kişisel verilerin toplanması, kullanımı veya ifşasına ilişkin yasaların veya diğer gerekliliklerin Amerika Birleşik Devletleri'ndeki geçerli yasalardan farklı olduğu dünyanın başka bir bölgesinden erişirseniz, Siteyi kullanmaya devam etmeniz durumunda verilerinizi Amerika Birleşik Devletleri'ne aktarmış olursunuz ve verilerinizin Amerika Birleşik Devletleri'ne aktarılmasını ve orada işlenmesini kabul etmiş olursunuz.",
    liabilityIntro:
      "Bu Şartlar boyunca sorumluluktan bahsediyoruz ancak hepsini tek bir bölümde toplamak gerekirse:",
    liabilityContent:
      "Şirket'in, size veya herhangi bir üçüncü tarafa, kar, itibar, kullanım, veri veya diğer maddi olmayan kayıplar dahil ancak bunlarla sınırlı olmamak üzere, doğrudan, dolaylı, tesadüfi, kar kaybı, özel, sonuçsal, cezalandırıcı veya emsal teşkil eden zararlar için, kanunen veya hakkaniyete göre, sorumlu olmayacağını açıkça anlıyor ve kabul ediyorsunuz (Şirket'e bu tür zararların olasılığı bildirilmiş olsa bile), aşağıdakilerden kaynaklananlar: (1) Hizmetlerin kullanımı veya kullanılamaması; (2) içerik ve materyallerdeki hatalar, yanlışlıklar veya yanlışlıklar; (3) siteye erişiminiz ve siteyi kullanımınızdan kaynaklanan herhangi bir nitelikteki kişisel yaralanma veya mal hasarı; (4) Hizmetler aracılığıyla veya Hizmetlerden satın alınan veya elde edilen herhangi bir mal, veri, bilgi veya hizmetten veya alınan mesajlardan veya girilen işlemlerden kaynaklanan ikame mal ve hizmetlerin tedarik maliyeti; (5) güvenli sunucularımıza ve/veya bunlarda saklanan tüm kişisel bilgilere ve/veya finansal bilgilere yetkisiz erişim veya bunların kullanımı; (6) siteye veya siteden yapılan iletimde herhangi bir kesinti veya durma; (7) herhangi bir üçüncü tarafça siteye veya site aracılığıyla iletilebilecek herhangi bir hata, virüs, truva atı veya benzeri ve/veya; (8) herhangi bir içerik ve materyaldeki herhangi bir hata veya eksiklik veya site aracılığıyla gönderilen, iletilen veya başka bir şekilde kullanıma sunulan herhangi bir içeriğin kullanımı sonucu ortaya çıkan herhangi bir kayıp veya hasar; (9) hizmetteki herhangi bir üçüncü tarafın beyanları veya davranışları; (10) veya bu Hizmet Şartları veya Hizmetlerle ilgili herhangi bir başka husus, sözleşme ihlali, haksız fiil (aktif veya pasif ihmal dahil) veya herhangi bir başka sorumluluk teorisi olsun.",
    miscellaneousContent:
      "Bu Hizmet Şartları ve Site'de veya Site ile ilgili olarak tarafımızca yayınlanan tüm politikalar veya işletme kuralları, sizinle aramızdaki tüm sözleşmeyi ve anlayışı oluşturur. Bu Hizmet Şartları'nın herhangi bir hakkını veya hükmünü kullanmamamız veya uygulamamamız, söz konusu hak veya hükümden feragat ettiğimiz anlamına gelmez. Bu Hizmet Şartları, kanunen izin verilen en geniş kapsamda geçerlidir. Hak ve yükümlülüklerimizin bir kısmını veya tamamını herhangi bir zamanda başkalarına devredebiliriz. Makul kontrolümüz dışındaki herhangi bir nedenden kaynaklanan herhangi bir kayıp, hasar, gecikme veya eylemsizlikten sorumlu veya yükümlü olmayacağız. Bu Hizmet Şartları'nın herhangi bir hükmünün veya hükmünün bir kısmının hukuka aykırı, geçersiz veya uygulanamaz olduğu tespit edilirse, söz konusu hüküm veya hükmün bir kısmı bu Hizmet Şartları'ndan ayrılabilir kabul edilir ve kalan hükümlerin geçerliliğini ve uygulanabilirliğini etkilemez. Bu Hizmet Şartları veya Site'nin kullanımı sonucunda sizinle aramızda herhangi bir ortak girişim, ortaklık, istihdam veya temsilcilik ilişkisi oluşmaz. Bu Hizmet Şartları'nın, bunları hazırlamış olmamız nedeniyle aleyhimize yorumlanmayacağını kabul edersiniz. Bu Hizmet Şartları'nın elektronik biçimine ve tarafların bu Hizmet Şartları'nı yürürlüğe koymak için imzalamamış olmalarına dayalı olarak sahip olabileceğiniz tüm savunmalardan feragat ediyorsunuz.",
    contactUsContent1:
      "Hizmet Şartları'ndan herhangi biriyle ilgili bir sorunuz varsa lütfen",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Özellikler",
    UnlimitedTranscription: "Sınırsız Transkripsiyon",
    BulkUpload: "Toplu Yükleme",
    Accuracy: "%96 Doğruluk",
    Pricing: "Fiyatlandırma",
    UseCases: "Kullanım Senaryoları",
    AllUseCases: "Tüm Kullanım Senaryoları",
    Podcasters: "Podcast Yapımcıları",
    Journalists: "Gazeteciler",
    ContentCreators: "İçerik Üreticileri",
    Researchers: "Araştırmacılar",
    BusinessTeams: "İş Ekipleri",
    Educators: "Eğitimciler",
    Resources: "Kaynaklar",
    YouTubetoMP4: "YouTube'dan MP4'e",
    StartFreeTrial: "Ücretsiz Dene"
  },
  Footer: {
    des: "Dünyanın ilk gerçekten sınırsız AI transkripsiyon servisi. Sınır yok, kısıtlama yok, sadece özgürce yaratma özgürlüğü.",
    Features: "Özellikler",
    UseCases: "Kullanım Senaryoları",
    Company: "Şirket",
    featureMenus: ["Sınırsız Transkripsiyon", "Toplu Yükleme", "%96 Doğruluk"],
    useCaseMenus: [
          "Tüm Kullanım Senaryoları",
          "Podcast Yapımcıları",
          "Gazeteciler",
          "İçerik Üreticileri",
          "Araştırmacılar",
          "İş Ekipleri",
          "Eğitimciler"
        ],
    companyMenus: [
          "Hakkında",
          "Fiyatlandırma",
          "Gizlilik",
          "Koşullar"
        ]
  },
  Index: {
    Hero: {
      badge: 'Artık "Küçülme Enflasyonu" Yok - Gerçekten Sınırsız',
      h1: "Sınırlar İçin Ödemeyi Bırakın:",
      gradient: "Gerçekten Sınırsız AI Transkripsiyon",
      subtitle: "AI'mız videoları metne dönüştürür ve ayda 50 dosyayı aynı anda işler, aylık sınır yoktur. Sizinle birlikte büyüyen transkripsiyon.",
      FreeTrial: "Ücretsiz Dene - Kredi Kartı Gerekmez",
      HowWorks: "Nasıl Çalıştığını Gör",
      Unlimited: "Sınırsız Dosya Yükleme",
      NoCap: "Aylık Dakika Sınırı Yok",
      Hour: "10 Saatlik Dosyalar Desteklenir",
      ExploreUseCases: "Kullanım Senaryolarını Keşfet"
    },
    Stats: {
      monthlyMinutes: "Aylık Dakikalar",
      fileUploads: "Dosya Yüklemeleri",
      batchProcessing: "Toplu İşleme",
      maxFileLength: "Maksimum Dosya Uzunluğu"
    },
    FeaturesGrid: {
      try_now: "Hemen Dene",
      no_signup: "Kayıt Gerekmez",
      experience_unltd: "Gerçekten sınırsız transkripsiyonu deneyimleyin",
      upload_50: "Aynı anda 50 dosyaya kadar buradan yükleyin.",
      no_limits: "Gelişmiş",
      no_surprises: "AI Transkripsiyon",
      transparency: "Gizli Sınırlar Yok, Sürprizler Yok - Diğerleri dakikalarınızı sessizce azaltırken veya küçük yazılarda sınırlar saklarken, biz radikal şeffaflığa inanıyoruz",
      feat_unltd: "Gerçekten Sınırsız",
      feat_unltd_desc: 'Şartlarda gizlenmiş "adil kullanım politikası" yok. "Sınırsız" diye saklanan depolama sınırları yok. Tüm arşivinizi yükleyin, tüm ses transkripsiyon ihtiyaçlarınız için her şeyi dönüştürün. Ciddiyiz.',
      feat_bulk: "Toplu Yükleme Özgürlüğü",
      feat_bulk_desc: '"3 ömür boyu yükleme" veya "ayda 10 dosya"dan bıktınız mı? İstediğiniz kadar 50 dosyayı aynı anda yükleyin. Birikmiş işler için ideal.',
      feat_batch: "Toplu İşleme",
      feat_batch_desc: "Tüm podcast sezonunuzu bir gecede işleyin. 50 röportajı aynı anda yükleyin. AI'mız çalışırken siz uyuyun. Tamamlanmış transkriptlerle uyanın.",
      feat_accuracy: "%96 Doğruluk",
      feat_accuracy_desc: "Sektör lideri AI'mız, akıllı noktalama ile sesi metne dönüştürür, 20'ye kadar konuşmacıyı ayırt eder ve aksanları, teknik terimleri kusursuz şekilde işler.",
      feat_langs: "100+ Dil",
      feat_langs_desc: "100+ dilde video ve sesi metne dönüştürün, 249+ dile çevirin. Farklı diller için ek ücret yok. Küresel içerik, tek basit fiyat.",
      feat_pro: "Profesyonel Özellikler",
      feat_pro_desc: "Kelime düzeyinde zaman damgaları, hızlı konuşma geçişlerinde bile doğru konuşmacı tanımlama ve kolay okuma için paragraflar, cümleler ve noktalama ile mükemmel biçimlendirilmiş metin.",
        features: "Özellikler"
    },
    UseCases: {
      built_for: "Toplu",
      "heavy_users": "Ses & Video Transkripsiyon",
      "join_users": `Sizin Gibi Yoğun Kullanıcılar İçin Tasarlandı - "Küçülme enflasyonu" hizmetlerinden geçen YouTuber'lara, içerik üreticilerine ve podcast yapımcılarına katılın`,
      "podcasters": {
        "title": "Podcast Yapımcıları",
        "des": "Tüm arşivinizi yükleyin. Her bölüm için gösteri notları oluşturun. Hangi bölümleri transkribe edeceğinizi seçmek zorunda kalmayın."
      },
      "content_creators": {
        "title": "İçerik Üreticileri",
        "des": "Video kütüphanenizi aranabilir metne dönüştürmek için hizmetimizi kullanın. Her şey için altyazı oluşturun. Dakika saymak yok, sadece üretmek var."
      },
      "journalists": {
        "title": "Gazeteciler",
        "des": 'Tüm röportajlarınızı aynı anda yükleyin. Son teslim tarihinde "ayda 10 dosya" engeliyle karşılaşmayın. Her şeyi işleyin.'
      },
      researchers: {
        title: "Araştırmacılar",
        des: "Saatlerce odak grubu ve röportaj transkribe edin. Tüm çalışmanızı aynı anda yükleyin. Doğru konuşmacı tanımlaması alın."
      },
      business_teams: {
        title: "İş Ekipleri",
        des: "Her görüşmeyi sınır endişesi olmadan kaydedin. Tüm konuşmalar için AI içgörüleri alın, sadece seçilmiş birkaçı için değil."
      },
      educators: {
        title: "Eğitimciler",
        des: "Tüm ders serilerini transkribe edin. Tüm içeriği erişilebilir hale getirin. Dakika sınırları nedeniyle ders seçmek zorunda kalmayın."
      }
    },
    Testimonials: {
      title: "Tarafından Sevilen",
      highlighted_users: "50.000+ Kullanıcı",
      subtitle: "Profesyonellerin neden sınırlı alternatifler yerine NeverCap'ı seçtiğini görün",
      Mike: {
        "text": "Vay canına, bu gerçekten işe yarıyor! 3 yıldır podcast yapıyordum ve aptal gibi her şeyi elle yazıya döküyordum. 6 bölümü aynı anda yükledim ve beni ve konuğumu mükemmel şekilde ayırdı. Mahvolduğunu düşündüğüm kafe bölümü? Tertemiz bir transkript. Artık bunları kendim yazmayacağım.",
        "author": "Mike Rodriguez",
        "role": "Podcast Sunucusu"
      },
      Sarah: {
        "text": "Çevrimiçi ders veriyorum ve videolarım için altyazı gerekiyordu. Garip sınırları olan ya da sonsuz süren 3 farklı araç denedim. Bu ise... çalışıyor? İspanyolca dersimi yükledim, 2 dakikada mükemmel altyazılar hazırdı. İşitme sorunu olan öğrencilerim çok mutlu. Keşke bunu daha önce bulsaydım!",
        "author": "Sarah Chen",
        "role": "Çevrimiçi Öğretmen"
      },
      Jessica: {
        "text": "Röportajlarım için bunu kullanıyorum ve doğruluğu inanılmaz. Bozuk İngilizce + İspanyolca 2 saatlik bir röportajı bile, zaman damgalarıyla birlikte mükemmel şekilde çevirdi. Eskiden ayda 200$'a stajyere yazdırıyordum. Bu gerçekten her ay bana para kazandırıyor.",
        "author": "Jessica Park",
        "role": "Serbest Gazeteci"
      }
    },
    PricingPreview: {
      "title": "Şeffaf Fiyatlandırma",
      "highlighted_text": "Gizli Sınır Yok",
      "subtitle": "Planınızı seçin. Yıldız işaretleri yok, küçük yazı yok, sürpriz yok"
    },
    FAQSection: {
      "title": "Sıkça Sorulan",
      "titleHighlight": "Sorular",
      "questions": [
            {
              "q": "AI transkripsiyonu",
              "question": "AI transkripsiyonu nedir ve nasıl çalışır?",
              "answer": "AI transkripsiyonu, gelişmiş yapay zeka kullanarak sesi otomatik olarak metne dönüştürme sürecidir. NeverCap'ta dosyalarınızı yüklersiniz ve AI'miz içeriği %96'ya varan doğrulukla yazıya döker. Hizmetimiz, video dosyalarını (MP4, MOV gibi) ve ses dosyalarını (MP3, WAV gibi) konuşmacı etiketleri ve zaman damgalarıyla okunabilir, düzenlenebilir metne çevirmek için tasarlanmıştır."
            },
            {
              "q": "unlimited_policy",
              "question": "Gerçekten sınırsız mı? Püf noktası nedir?",
              "answer": "Evet, tamamen sınırsız! Aylık dakika sınırı yok, fazla kullanım ücreti yok. Teknik sınırlar şunlar: tek bir dosya en fazla 10 saat veya 5GB olabilir ve aynı anda 50 dosya işleyebilirsiniz. Ancak tüm ay boyunca istediğiniz kadar parti yükleyebilirsiniz."
            },
            {
              "q": "accuracy",
              "question": "Transkripsiyon ne kadar doğru?",
              "answer": "Net ses için %96 doğruluk garantisi veriyoruz. AI'miz milyonlarca saatlik çeşitli içerikle eğitilmiştir ve aksanları, teknik terimleri ve birden fazla konuşmacıyı mükemmel şekilde işler. Zorlu sesler için akıllı iyileştirme özelliklerimiz sonuçları geliştirir."
            },
            {
              "q": "languages",
              "question": "Hangi dilleri destekliyorsunuz?",
              "answer": "İngilizce, İspanyolca, Mandarin, Hintçe, Arapça, Fransızca ve daha fazlası dahil 100'den fazla dilde transkripsiyon desteği sunuyoruz. Ayrıca, transkriptlerinizi 249 farklı dile çevirebilirsiniz, bu da küresel içerik için mükemmeldir."
            },
            {
              "q": "speed",
              "question": "Transkripsiyon ne kadar hızlı?",
              "answer": "Yıldırım hızında! 1 saatlik bir ses dosyası genellikle 5 dakikadan az sürede işlenir. Toplu işlemeyle aynı anda 50 dosya yükleyebilir ve paralel işlem yapabilirsiniz. Çoğu kullanıcı sabah uyandığında tüm kütüphanenin transkript edildiğini görür."
            },
            {
              "q": "cancellation",
              "question": "İstediğim zaman iptal edebilir miyim?",
              "answer": "Kesinlikle! Sözleşme yok, iptal ücreti yok. Aboneliğinizi yükseltebilir, düşürebilir veya kontrol panelinizden istediğiniz zaman iptal edebilirsiniz. İptal ederseniz, fatura döneminizin sonuna kadar erişiminiz devam eder."
            },
            {
              "q": "security",
              "question": "Verilerim güvende mi?",
              "answer": "Güvenliğiniz önceliğimizdir. SOC 2 sertifikalıyız, tüm veriler için 256 bit şifreleme kullanıyoruz ve modellerimizi eğitmek için içeriğinizi asla kullanmıyoruz. Dosyalarınızı istediğiniz zaman silebilirsiniz ve 30 gün sonra otomatik olarak temizleriz. GDPR ve CCPA uyumluyuz."
            },
            {
              "q": "export_formats",
              "question": "Hangi dışa aktarma formatları mevcut?",
              "answer": "Transkriptlerinizi ihtiyacınız olan herhangi bir formatta indirin: PDF, Word (DOCX), Excel, CSV, SRT altyazıları, düz metin (TXT) ve VTT altyazıları. Hangi iş akışınız varsa mükemmeldir."
            },
            {
              "q": "file_formats",
              "question": "Hangi ses ve video dosyalarını yükleyebilirim?",
              "answer": "Neredeyse karşılaşacağınız tüm ses ve video formatlarını destekliyoruz: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV ve daha fazlası. Oynatabildiğiniz her şeyi yazıya dökebiliriz."
            }
          ]
    },
    CTASection: {
      "title": "Sınırlardan Kurtulmaya Hazır mısınız?",
      "subtitle": "Gerçekten sınırsız transkripsiyona geçen 50.000+ profesyonelin arasına katılın",
      "button": "NeverCap'ı Ücretsiz Dene",
      "disclaimer": "Ücretsiz Plan için kredi kartı gerekmez • Sınırsız erişim için istediğiniz zaman yükseltin"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: '"Küçülme Enflasyonu" Artık Yok',
      heroTitleLine1: "Gerçekten Sınırsız",
      heroTitleLine2: "AI Transkripsiyon",
      heroSubtitle: "Trint 50 saat, Otter ayda 10 dosya ile sınırlarken, biz vaat ettiğimizi sunuyoruz: gizli sınırlar olmadan sınırsız transkripsiyon.",
      primaryCta: "Ücretsiz Dene - Kredi Kartı Gerekmez",
      secondaryCta: "Gerçeği Gör",
      comparisonBadLabel: "Diğerlerinin Yaptığı",
      comparisonBadTitle: "Her Yerde Gizli Sınırlar",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Sınırsız" = ayda 50 saat sınır',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 ömür boyu içe aktarma (ücretsiz), ayda 10 (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 dakika depolama sınırı",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Maksimum ayda 30 saat",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Şartlar ve koşullarda gizli",
      comparisonGoodLabel: "Bizim Yaptığımız",
      comparisonGoodTitle: "Gerçekten Sınırsız",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Aylık dakika sınırı yok",
      comparisonGoodItem1Text: "asla",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Sınırsız dosya yükleme",
      comparisonGoodItem2Text: "her zaman",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Depolama sınırı yok",
      comparisonGoodItem3Text: "hiç",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 dosya toplu yükleme",
      comparisonGoodItem4Text: "istediğin zaman",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Şeffaf politika",
      comparisonGoodItem5Text: "önceden",
      feature1Label: "Sınır Yok",
      feature1TitlePart1: "1.000 Saat Transkripsiyon?",
      feature1TitlePart2: "Aynı Fiyat.",
      feature1Description: "Dakikaları saymayı bırakın. Sınırları izlemeyi bırakın. Ayda 10 saat veya 10.000 saat transkripsiyon yapın, aynı sabit ücreti ödersiniz. Fazla kullanım ücreti yok. Sürpriz faturalar yok.",
      feature1Point1Icon: "✓",
      feature1Point1Text: '"Adil kullanım" politikası hilesi yok',
      feature1Point2Icon: "✓",
      feature1Point2Text: "X saat sonra yavaşlatma yok",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ay sonu endişesi yok",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Aylık Saatler",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Fazla Kullanım Ücretleri",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "İstediğiniz Zaman Yükleme",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Şeffaf",
      feature2Label: "Toplu Özgürlük",
      feature2TitlePart1: "Yükleyin",
      feature2TitlePart2: "Tüm Arşivinizi",
      feature2Description: "Otter ücretsizde 3 ömür boyu, Pro'da ayda 10 içe aktarma sunar. Biz sınırsız sunuyoruz. Podcast arşivinizi, tüm röportajlarınızı, yılların kayıtlarını yükleyin. Hiçbir kısıtlama yok.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Toplu başına 50 dosya",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10 saatlik dosyalar desteklenir",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Uyurken işlem",
      feature2TableRow1Label: "Otter Ücretsiz",
      feature2TableRow1Value: "3 ömür boyu içe aktarma",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "Ayda 10 dosya",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Aylık 50 saat sınırı",
      feature2TableRow4Label: "Sınırsız",
      feature2TableRow4Value: "Gerçekten Sınırsız ✓",
      feature3Label: "Sosyal Kanıt",
      feature3TitlePart1: "Kullanıcılar",
      feature3TitlePart2: "Her Gün Geçiş Yapıyor",
      feature3Description: `"Otter'a yılda 100$ ödüyorum ve beni ayda 10 dosya ile sınırlıyorlar. Sınırsız içe aktarma sunan bir alternatif çıkar çıkmaz gidiyorum!" - Gerçek Reddit kullanıcısı`,
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000+ kullanıcı geçti",
      feature3Point2Icon: "✓",
      feature3Point2Text: `Otter'ın "küçülme enflasyonu"ndan`,
      feature3Point3Icon: "✓",
      feature3Point3Text: "Asla geri dönmüyor",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Mutlu Kullanıcı",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "İşlenen Dosya",
      feature3Stat3Number: "%96",
      feature3Stat3Label: "Doğruluk",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Gizli Ücret Yok",
      trustBadge1Number: "∞",
      trustBadge1Label: "Dakika/Ay",
      trustBadge2Number: "100+",
      trustBadge2Label: "Dil",
      trustBadge3Number: "%96",
      trustBadge3Label: "Doğruluk",
      trustBadge4Number: "50",
      trustBadge4Label: "Toplu Yükleme",
      ctaTitle: "Sahte Sınırsız İçin Ödemeyi Bırakın",
      ctaSubtitle: "Gerçekten sınırsız dökümana geçen binlerce kişiye katılın",
      finalCta: "NeverCap Ücretsiz Deneyin"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Toplu Yükleme Özgürlüğü",
      heroTitleLine1: "50 Dosya Yükleyin.",
      heroTitleHighlight: "Her Şeyi İşleyin.",
      heroSubtitle: "Otter size 3 ömür boyu içe aktarma hakkı veriyor. ÜÇ. Tüm hayatınız boyunca. Biz size sınırsız yükleme sunuyoruz, ihtiyacınız olduğunda bir seferde 50 dosya.",
      primaryCta: "Toplu Yüklemeye Başla →",
      secondaryCta: "Sınırları Görün",
      redditQuote: '"Transkribe edilecek 3 yıllık podcast bölümüm var. Otter bana ömür boyu 3 içe aktarma hakkı verdiğini söylüyor. ÜÇ. Bu hakaret gibi."',
      redditAuthorIcon: "📍",
      redditAuthorText: "r/podcasting'ten gerçek bir hayal kırıklığı",
      comparisonSectionTitlePart1: "Rakip",
      comparisonSectionTitleHighlight: "Saçma Sınırlar",
      comparisonSectionTitlePart2: "Dayatmaları",
      comparisonSubtitle: "Rakiplerin içerik işleme yeteneğinizi nasıl kısıtladığı",
      limitCard1Service: "Otter Ücretsiz",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Ömür boyu içe aktarma",
      limitCard1DescriptionLine2: "(Evet, TÜM hayatınız boyunca)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Ayda dosya",
      limitCard2DescriptionLine2: "($100/yıllık plan)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Bir seferde dosya",
      limitCard3DescriptionLine2: "(Sıralı yükleme)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Sınırsız yükleme",
      limitCard4DescriptionLine2: "Toplu 50 dosya",
      feature1Label: "Toplu İşlem Gücü",
      feature1TitlePart1: "Tüm Arşivinizi",
      feature1TitleHighlight: "İşleyin",
      feature1TitlePart2: "Bir Gecede",
      feature1Description: 'Yatmadan önce 50 dosya yükleyin. Uyandığınızda tamamlanmış transkriptler hazır. Sıra bekleme, bekletme, "lütfen yükseltin" mesajları yok. Sadece parmaklarınızın ucunda saf işlem gücü.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 aynı anda yükleme",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Paralel işleme",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10 saatlik dosyalar desteklenir",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Dosya başına maksimum 5GB",
      uploadAnimationText1: "50 Dosya",
      uploadAnimationText2: "Sürükle & İşle",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 dosya daha...",
      feature2Label: "Hız",
      feature2TitlePart1: "Yüklemekten",
      feature2TitleHighlight: "Saatler İçinde Tamamlandı",
      feature2Description: "Paralel işleme altyapımız, 50 dosyanızın sıra beklemediği anlamına gelir. Hepsi aynı anda dönüştürülür. Eskiden haftalar süren işlem artık saatler içinde tamamlanır.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1 saatlik dosya: 5 dakika",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 dosya: paralel işlendi",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Tamamlandığında e-posta bildirimi",
      timelineStep1Icon: "1",
      timelineStep1Title: "Yükle",
      timelineStep1Time: "0 dk",
      timelineStep2Icon: "2",
      timelineStep2Title: "İşleniyor",
      timelineStep2Time: "5-30 dk",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI Sihri",
      timelineStep3Time: "30-60 dk",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Tamamlandı",
      timelineStep4Time: "< 2 saat",
      feature3Label: "Özgürlük",
      feature3TitlePart1: "Sıra Yok.",
      feature3TitleHighlight: "Bekleme Yok.",
      feature3TitlePart2: "Sınır Yok.",
      feature3Description: 'Diğerleri sizi sanal sıralarda bekletirken veya "öncelikli işlem" için yükseltme yapmanızı isterken, biz her yüklemeyi aciliyetle ele alıyoruz. İçeriğiniz önemli ve beklememeli.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Öncelik seviyesi yok",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Herkes için aynı hız",
      feature3Point3Icon: "✓",
      feature3Point3Text: "24/7, istediğiniz zaman yükleyin",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Her Zaman Hazır",
      feature3VisualSubtext: "İlham geldiğinde yükleyin",
      useCasesTitlePart1: "Mükemmel",
      useCasesTitleHighlight: "Yoğun Yükleyiciler İçin",
      useCasesSubtitle: "Toplu yüklemenin kurtarıcı olduğu gerçek senaryolar",
      useCase1Title: "Podcast Arşivleri",
      useCase1Description: "3 yıllık bölümleri tek seferde yükleyin. Tüm geçmiş kataloğunuz için transkript oluşturun. Her bölüm için SEO içeriği üretin.",
      useCase2Title: "Kurs Oluşturma",
      useCase2Description: "Tüm ders videolarınızı aynı anda işleyin. Öğrenciler için erişilebilir transkriptler oluşturun. Aranabilir ders materyalleri hazırlayın.",
      useCase3Title: "Röportaj Birikimi",
      useCase3Description: "Transkript edilmemiş röportaj yığınını temizleyin. Haftalarca süren araştırmayı saatler içinde işleyin. Son teslim tarihini panik yapmadan karşılayın.",
      useCase4Title: "YouTube Kütüphanesi",
      useCase4Description: "Tüm kanalınız için altyazı oluşturun. Video içeriklerinden blog yazıları üretin. Tüm videolarda SEO'yu iyileştirin.",
      useCase5Title: "Toplantı Arşivleri",
      useCase5Description: "Aylarca kaydedilmiş toplantıları yükleyin. Aranabilir toplantı notları oluşturun. Önemli kararları bir daha asla kaybetmeyin.",
      useCase6Title: "Araştırma Verileri",
      useCase6Description: "Odak gruplarını toplu işle. Tüm katılımcı görüşmelerini dökümle. Nitel verileri verimli şekilde analiz et.",
      ctaTitle: "Daha Fazla Yükleme İçin Yalvarmayı Bırak",
      ctaSubtitle: "Gerçekten işe yarayan sınırsız toplu işleme alın",
      finalCta: "Hemen 50 Dosya Yükle →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Sektörde Lider Doğruluk",
      heroTitleLine1: "%96 Doğruluk.",
      heroTitleHighlight: "Her Kelime Önemli.",
      heroSubtitle: "12 ana dilde sektör lideri doğruluk. Mükemmel senkronizasyon için kelime düzeyinde zaman damgaları. Hızlı konuşmaları yöneten akıllı konuşmacı tanımlama. Gerçekten okunabilir profesyonel biçimlendirme.",
      primaryCta: "Doğruluğumuzu Test Edin →",
      secondaryCta: "Dilleri Gör",
      statCard1Percentage: "%96",
      statCard1DescriptionLine1: "Doğruluk",
      statCard1DescriptionLine2: "12 Ana Dil",
      statCard2Percentage: "%95+",
      statCard2DescriptionLine1: "Doğruluk",
      statCard2DescriptionLine2: "Aksanlar & Lehçeler",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Kelime Düzeyinde",
      statCard3DescriptionLine2: "Zaman Damgası Hassasiyeti",
      languageSectionTitlePart1: "%96 Doğruluk",
      languageSubtitle: "Küresel içerik için profesyonel düzeyde döküm",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "İngilizce",
      languageCard1Accuracy: "%96 Doğruluk",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "İspanyolca",
      languageCard2Accuracy: "%96 Doğruluk",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "%96 Doğruluk",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Fransızca",
      languageCard4Accuracy: "%96 Doğruluk",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Almanca",
      languageCard5Accuracy: "%96 Doğruluk",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japonca",
      languageCard6Accuracy: "%96 Doğruluk",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Korece",
      languageCard7Accuracy: "%96 Doğruluk",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portekizce",
      languageCard8Accuracy: "%96 Doğruluk",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Rusça",
      languageCard9Accuracy: "%96 Doğruluk",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "İtalyanca",
      languageCard10Accuracy: "%96 Doğruluk",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Felemenkçe",
      languageCard11Accuracy: "%96 Doğruluk",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arapça",
      languageCard12Accuracy: "%96 Doğruluk",
      moreLanguagesText: "+ %95+ doğrulukla desteklenen 88 dil daha",
      feature1Label: "Hassasiyet",
      feature1TitlePart1: "Kelime Düzeyinde",
      feature1TitleHighlight: "Zaman Damgaları",
      feature1Description: "Her kelime, ses konumuyla mükemmel senkronizedir. Tıklanabilir transkriptler oluşturun, hassas altyazılar üretin veya kayıtlarınızda tam anlara atlayın. Profesyonellerin güvendiği 100ms hassasiyet.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms zaman damgası hassasiyeti",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Video düzenleme için ideal",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Tıklanabilir etkileşimli transkriptler",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Kare-hassas altyazılar",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Konuşmacı 1",
      transcriptLine1Text: "Bugünkü podcast bölümüne hoş geldiniz.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Konuşmacı 2",
      transcriptLine2Text: "Beni programa davet ettiğiniz için teşekkürler!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Konuşmacı 1",
      transcriptLine3Text: "Ana konumuza dalalım...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Konuşmacı 2",
      transcriptLine4Text: "Kesinlikle, bunu tartışmak için heyecanlıyım.",
      feature2Label: "Akıllı Yapay Zeka",
      feature2TitlePart1: "Yönetir",
      feature2TitleHighlight: "Hızlı Konuşmalar",
      feature2Description: "Yapay zekamız, üst üste binen konuşmalarda, kesintilerde ve hızlı karşılıklı diyaloglarda bile konuşmacıları doğru şekilde tanır. Sık sık müdahale edilen röportajlar, podcastler ve toplantılar için ideal.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "20'ye kadar konuşmacı tanımlar",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Kesintileri mükemmel şekilde yönetir",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Üst üste binen konuşmalarla çalışır",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Çapraz konuşmada doğruluğu korur",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Tanımlanan Konuşmacı",
      feature2VisualSubtext: "Hızlı konuşmalarda bile",
      feature3Label: "Okunabilirlik",
      feature3TitlePart1: "Mükemmel",
      feature3TitleHighlight: "Biçimlendirilmiş Metin",
      feature3Description: "Metin duvarlarına son. Yapay zekamız paragrafları, cümleleri ve noktalamaları tam olması gereken yere ekler. Sonuç? Okuması keyifli ve taraması kolay transkriptler.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Akıllı paragraf bölmeleri",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Doğru noktalama",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Doğru büyük harf kullanımı",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Temiz, taranabilir çıktı",
      formattingTitle: "Önce & Sonra",
      formattingBeforeLabel: "❌ Diğerleri:",
      formattingBeforeText: "bugün üzerinde çalıştığımız yeni özelliklerden bahsedeceğiz sanırım çok beğeneceksiniz kullanıcılar tarafından uzun zamandır isteniyordu ve sonunda tamamladık",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Bugün, üzerinde çalıştığımız yeni özelliklerden bahsedeceğiz. Sanırım çok beğeneceksiniz. Kullanıcılar tarafından uzun zamandır isteniyordu ve sonunda tamamladık.",
      comparisonSubtitle: "Doğruluk",
      comparisonSectionTitle: "Karşılaştırma",
      comparisonDes: "Rakip karşısında nasıl durduğumuzu görün",
      tableHeader1: "Özellik",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Doğruluk (Net Ses)",
      tableRow1NeverCap: "%96",
      tableRow1Otter: "%95",
      tableRow1Descript: "%94",
      tableRow1Rev: "%94",
      tableRow2Feature: "Kelime Seviyesinde Zaman Damgaları",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Konuşmacı Tanımlama",
      tableRow3NeverCap: "20 konuşmacı",
      tableRow3Otter: "16 konuşmacı",
      tableRow3Descript: "10 konuşmacı",
      tableRow3Rev: "✕",
      tableRow4Feature: "Çapraz Konuşmayı Yönetme",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Sınırlı",
      tableRow4Descript: "Sınırlı",
      tableRow4Rev: "✕",
      tableRow5Feature: "Akıllı Biçimlendirme",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Temel",
      tableRow6Feature: "12 Dil %96 Doğrulukta",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "%96 Doğruluk Deneyimi",
      ctaSubtitle: "En zorlu ses dosyanızı yükleyin ve farkı görün",
      finalCta: "Doğruluğumuzu Şimdi Test Edin →",
        languageSectionTitlePart2: "12 Ana Dilde"
    }
  },
  Pricing: {
    Hero: {
      "title": "Basit, Şeffaf Fiyatlandırma",
      "highlighted_text": "Gizli Sınır Yok",
      "description": "İhtiyaçlarınıza uygun planı seçin. Dilediğiniz zaman yükseltin veya düşürün. Sözleşme yok, sürpriz yok."
    },
    Cards: {
      "title": "Basit, Şeffaf Fiyatlandırma.",
      "highlighted_text": "Gizli Sınır Yok.",
      "description": "İhtiyaçlarınıza uygun planı seçin. Dilediğiniz zaman yükseltin veya düşürün. Sözleşme yok, sürpriz yok.",
      "plans": [
            {
              "name": "Ücretsiz",
              "price": "$0",
              "period": "ay",
              "discount": "Hizmetimizi denemek için ideal",
              "limits": {
                "title": "Günlük Limitler",
                "items": [
                  "Günde 3 dosya (≈günde toplam 90 dk)",
                  "Dosya başına en fazla 30 dk (≤250 MB)",
                  "Aynı anda 1 dosya yükle",
                  "Standart öncelik sırası"
                ]
              },
              "features": {
                "title": "Özellikler",
                "items": [
                  "100+ dil",
                  "Konuşmacı etiketleri",
                  "Çeviri",
                  "Tüm dışa aktarma formatları"
                ]
              },
              "cta": {
                "text": "Ücretsiz başla. Kredi kartı gerekmez.",
                "button": "Mevcut Plan"
              }
            },
            {
              "name": "Pro Aylık",
              "price": "$17.99",
              "period": "ay",
              "discount": "İlk ay için $9.99",
              "limits": {
                "title": "Aylık Sınır Yok",
                "items": [
                  "Sınırsız toplam dakika",
                  "Dosya başına en fazla 10 saat / 5 GB",
                  "Aynı anda 50 dosya yükle",
                  "Öncelik sırası"
                ]
              },
              "features": {
                "title": "Ücretsiz'deki her şey, artı",
                "items": [
                  "Kelime düzeyinde zaman damgaları",
                  "Gelişmiş konuşmacı tanımlama",
                  "Biçimlendirilmiş paragraflar & noktalama",
                  "Öncelikli destek"
                ]
              },
              "cta": {
                "text": "Sınırsız dakika. Öncelikli hız. Toplu yükleme.",
                "button": "Pro'ya Geç"
              },
              "badge": "En Popüler"
            },
            {
              "name": "Pro Yıllık",
              "price": "$8.99",
              "period": "ay",
              "discount": "Yıllık ödeme $107.88",
              "limits": {
                "title": "Aylık Pro ile aynı",
                "items": [
                  "Sınırsız toplam dakika",
                  "Dosya başına en fazla 10 saat / 5 GB",
                  "Aynı anda 50 dosya yükle",
                  "Öncelik sırası"
                ]
              },
              "features": {
                "title": "Ücretsiz'deki her şey, artı",
                "items": [
                  "Kelime düzeyinde zaman damgaları",
                  "Gelişmiş konuşmacı tanımlama",
                  "Biçimlendirilmiş paragraflar & noktalama",
                  "Öncelikli destek"
                ]
              },
              "cta": {
                "text": "Sınırsız dakika. Öncelikli hız. Toplu yükleme.",
                "button": "Pro'ya Geç"
              },
              "badge": "En İyi Değer - "
            }
          ],
      "disclaimer": '\"Sınırsız\" aylık sınır ve yapay yavaşlatma olmadığı anlamına gelir. Adil kullanım, kötüye kullanım veya yeniden dağıtım için geçerlidir.'
    },
    ComparisonTable: {
      "header": {
        "title": "Karşılaştır",
        "highlighted_text": "Tüm Özellikler",
        "subtitle": "Her planda tam olarak ne aldığınızı görün. Gizli sınırlamalar yok."
      },
      "plans": [
              "Özellikler",
              "Ücretsiz",
              "Pro Aylık",
              "Pro Yıllık"
            ],
      "features": [
            {
              "name": "Fiyat",
              "values": [
                "$0/ay",
                {
                  "main": "$17.99/ay",
                  "note": "İlk ay $9.99"
                },
                {
                  "main": "$8.99/ay",
                  "note": "Yıllık $107.88"
                }
              ]
            },
            {
              "name": "Aylık dakika",
              "values": ["~2.700 (90/gün)", "Sınırsız", "Sınırsız"]
            },
            {
              "name": "Maksimum dosya süresi",
              "values": ["30 dakika", "10 saat", "10 saat"]
            },
            {
              "name": "Maksimum dosya boyutu",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Toplu yükleme",
              "values": ["1 dosya", "50 dosya", "50 dosya"]
            },
            {
              "name": "İşlem hızı",
              "values": ["Standart", "Öncelikli", "Öncelikli"]
            },
            {
              "name": "Desteklenen diller",
              "values": ["100+ dil", "100+ dil", "100+ dil"]
            },
            {
              "name": "Çeviri",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Konuşmacı tanımlama",
              "values": ["Temel", "Gelişmiş (20 konuşmacı)", "Gelişmiş (20 konuşmacı)"]
            },
            {
              "name": "Kelime düzeyinde zaman damgaları",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Biçimlendirilmiş paragraflar",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Dışa aktarma formatları",
              "values": ["Tüm formatlar", "Tüm formatlar", "Tüm formatlar"]
            },
            {
              "name": "Destek",
              "values": ["E-posta", "Öncelikli e-posta", "Öncelikli e-posta"]
            },
            {
              "name": "Veri saklama",
              "values": ["30 gün", "Sonsuza kadar", "Sonsuza kadar"]
            }
          ]
    },
    FAQ: {
      "title": "Sıkça Sorulan",
      "titleHighligt": "Sorular",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Gerçekten sınırsız mı?",
              "answer": "Evet! Pro planlarında aylık dakika sınırı yoktur. Tek sınırlar tekniktir: maksimum 10 saat dosya süresi ve 5GB dosya boyutu. İhtiyacınız olan kadar dosya işleyebilirsiniz."
            },
            {
              "q": "plan_change",
              "question": "Planları istediğim zaman değiştirebilir miyim?",
              "answer": "Kesinlikle! Aboneliğinizi kontrol panelinizden istediğiniz zaman iptal edebilirsiniz. İhtiyacınız olduğunda yükseltme veya düşürme yapabilirsiniz."
            },
            {
              "q": "payment_methods",
              "question": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
              "answer": "Tüm büyük kredi kartlarını, banka kartlarını ve PayPal'ı güvenli ve sorunsuz ödemeler için kabul ediyoruz."
            },
            {
              "q": "free_trial",
              "question": "Pro için ücretsiz deneme var mı?",
              "answer": "Evet! Pro'yu 7 gün boyunca ücretsiz deneyin, kredi kartı gerekmez. Ayrıca, abone olduğunuzda ilk ayınızı %45 indirimle alın."
            },
            {
              "q": "file_retention",
              "question": "Dosyalarımı ne kadar süre saklıyorsunuz?",
              "answer": "Ücretsiz plan: 30 gün. Pro planlar: Sonsuza kadar! Transkriptleriniz hesabınızda her zaman erişilebilir durumdadır."
            },
            {
              "q": "data_security",
              "question": "Veri güvenliği konusunda ne yapıyorsunuz?",
              "answer": "SOC 2 sertifikalıyız ve 256 bit şifreleme kullanıyoruz. İçeriğinizi modellerimizi eğitmek için asla kullanmayız. Verileriniz size aittir."
            }
          ]
    },
    CTA: {
      "title": "Limitsiz Kullanıma Hazır mısınız?",
      "subtitle": "50.000'den fazla profesyonelin sınırsız transkripsiyon yaptığı aileye katılın",
      "button": "NeverCap Ücretsiz Deneyin →",
      "disclaimer": "Kredi kartı gerekmez • Saniyeler içinde transkripsiyona başlayın"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "İçin Yapıldı",
      heavyUsers: "Ağır Kullanıcılar",
      whoActuallyNeed: "Gerçekten Sınırsız İhtiyacı Olanlar",
      heroSubtitle: "Yıllarca birikmiş podcastleri olanlardan yüzlerce röportaj yapan araştırmacılara kadar. Profesyonellerin NeverCap ile yükleme sınırlarını nasıl aştığını görün.",
      podcasters: {
        title: "Podcast Yapımcıları",
        pain: '"Hangi bölümlerin transkripti hak ettiğine karar vermeyi bırakın"',
        description: "Tüm podcast arşivinizi bir kerede yükleyin. Show notları oluşturun, SEO'yu iyileştirin ve içeriği dakika saymadan yeniden kullanın.",
        benefits: {
          benefit1: "Sadece 3 değil, tüm bölümleri yükleyin",
          benefit2: "SEO dostu show notları oluşturun",
          benefit3: "Aranabilir arşivler oluşturun",
          benefit4: "Blog içeriğine dönüştürün"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Bölüm"
          },
          stat2: {
            number: "200saat",
            label: "Tasarruf Edildi"
          },
          stat3: {
            number: "3x",
            label: "SEO Trafiği"
          }
        }
      },
      journalists: {
        title: "Gazeteciler & Yazarlar",
        pain: '"Son teslim tarihi baskısı, yükleme kısıtlamalarıyla birleşiyor"',
        description: "Tüm röportajları son teslim tarihinden önce toplu yükleyin. Transkriptlerde anında arama yapın ve önemli bir alıntıyı kaçırmayın.",
        benefits: {
          benefit1: "Son teslim tarihlerinden önce toplu yükleme",
          benefit2: "Tüm röportajları bir kerede arayın",
          benefit3: "Zaman damgalı doğru alıntılar",
          benefit4: "Aksanlar & dilleri yönetin"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Röportaj/ay"
          },
          stat2: {
            number: "%96",
            label: "Doğruluk"
          },
          stat3: {
            number: "5dk",
            label: "Saat Başına"
          }
        }
      },
      contentCreators: {
        title: "İçerik Üreticileri",
        pain: '"Erişilebilirlik pahalı olmamalı"',
        description: "Tüm YouTube kanalınıza altyazı ekleyin. Birden fazla dilde altyazı oluşturun ve video SEO'nuzu anında iyileştirin.",
        benefits: {
          benefit1: "Tüm videolara bir kerede altyazı ekleyin",
          benefit2: "249 dil çevirisi",
          benefit3: "YouTube'a hazır SRT dosyaları",
          benefit4: "Video SEO sıralamasını artırın"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Video"
          },
          stat2: {
            number: "100+",
            label: "Dil"
          },
          stat3: {
            number: "249",
            label: "Çeviri"
          }
        }
      },
      researchers: {
        title: "Araştırmacılar & Akademisyenler",
        pain: '"Nitel veri sıra beklememeli"',
        description: "Tüm araştırma çalışmalarını bir kerede işleyin. Odak gruplarını, röportajları ve panel tartışmalarını mükemmel konuşmacı tanımlama ile yönetin.",
        benefits: {
          benefit1: "Odak gruplarını toplu işleyin",
          benefit2: "20 konuşmacı tanımlama",
          benefit3: "Analiz yazılımına aktarın",
          benefit4: "GDPR uyumlu güvenlik"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Çalışma"
          },
          stat2: {
            number: "%96",
            label: "Grup Doğruluğu"
          },
          stat3: {
            number: "GDPR",
            label: "Uyumlu"
          }
        }
      },
      businessTeams: {
        title: "İş Ekipleri",
        pain: '"Toplantı kayıtları zahmetsiz olmalı"',
        description: "Doğrudan toplantı kaydedin veya anında transkripsiyon için ses dosyaları yükleyin. Sınırsız konuşmalardan aranabilir arşivler oluşturun ve önemli tartışmaları bir daha asla kaybetmeyin.",
        benefits: {
          benefit1: "Doğrudan ses kaydı & transkripsiyon",
          benefit2: "Sınırsız toplantı kaydı",
          benefit3: "Aranabilir toplantı arşivi",
          benefit4: "Ses dosyalarını anında yükle"
        },
        stats: {
          stat1: {
            number: "Canlı",
            label: "Kayıt"
          },
          stat2: {
            number: "Anında",
            label: "Yükle"
          },
          stat3: {
            number: "20+",
            label: "Konuşmacılar"
          }
        }
      },
      educators: {
        title: "Eğitimciler",
        pain: '"YouTube videolarının anında transkripsiyona ihtiyacı var"',
        description: "Anında transkript ve otomatik oluşturulan altyazılar için YouTube bağlantılarını yapıştırın. Herhangi bir eğitim videosunu erişilebilir, aranabilir içeriğe dönüştürün.",
        benefits: {
          benefit1: "Doğrudan YouTube bağlantısı transkripsiyonu",
          benefit2: "Otomatik video altyazısı oluştur",
          benefit3: "Tüm dersleri transkribe et",
          benefit4: "Aranabilir ders arşivleri"
        },
        stats: {
          stat1: {
            number: "1-Tık",
            label: "YouTube Yapıştır"
          },
          stat2: {
            number: "Otomatik",
            label: "Altyazılar"
          },
          stat3: {
            number: "100+",
            label: "Dil"
          }
        }
      },
      quotes: {
        title: "Gerçek Kullanıcılar,",
        titleHighlight: "Gerçek Özgürlük",
        subtitle: "Yapay sınırlardan kurtulan profesyonellerden dinleyin",
        testimonials: {
          mike: {
            textBefore: '"3 yıllık bölümüm transkribe edilmemiş halde duruyordu. Otter sadece 3 tanesini seçmemi istedi. ÜÇ. NeverCap bir hafta sonunda 150 bölümün tamamını yüklememe izin verdi."',
            highlight: "3 yıllık bölüm",
            textAfter: "transkribe edilmemiş halde duruyordu. Otter sadece 3 tanesini seçmemi istedi. ÜÇ. NeverCap bir hafta sonunda 150 bölümün tamamını yüklememe izin verdi.",
            name: "Mike Rodriguez",
            role: "Podcast Sunucusu"
          },
          jessica: {
            textBefore: `"Serbest çalışan bir gazeteci olarak Trint'in aylık $100'ını karşılayamam, ama Otter'ın aylık 10 dosya limitiyle de çalışamam. NeverCap kariyerimi kurtardı."`,
            highlight: "$100/ay",
            textAfter: ", ama Otter'ın aylık 10 dosya limitiyle de çalışamam. NeverCap kariyerimi kurtardı.",
            name: "Jessica Park",
            role: "Serbest Çalışan Gazeteci"
          },
          sarah: {
            textBefore: '"Araştırma ekibimizin 200 saatlik odak grubu kayıtları vardı. Aylık dakikaları paylaşmak yerine her şeyi bir hafta sonunda işledik."',
            highlight: "200 saat",
            textAfter: "odak grubu kayıtları. Aylık dakikaları paylaşmak yerine her şeyi bir hafta sonunda işledik.",
            name: "Dr. Sarah Chen",
            role: "Baş Araştırmacı"
          },
          carlos: {
            textBefore: `"İspanyolca eğitim içeriği üretiyorum. NeverCap mükemmel transkribe ediyor ve daha geniş kitleler için İngilizce'ye çeviriyor. Sınır yok, sadece büyüme."`,
            highlight: "İngilizce'ye çevir",
            textAfter: "daha geniş kitleler için. Sınır yok, sadece büyüme.",
            name: "Carlos Martinez",
            role: "YouTube Eğitmeni"
          }
        }
      },
      industries: {
        title: "Güvenilir",
        titleHighlight: "Sektörlerde",
        subtitle: "Her yerdeki profesyoneller gerçekten limitsiz olana geçiyor",
        list: {
          media: "Medya & Yayıncılık",
          education: "Eğitim",
          healthcare: "Sağlık",
          technology: "Teknoloji",
          finance: "Finans",
          legal: "Hukuk"
        }
      },
      cta: {
        title: "Sizin Kullanım Durumunuz da Limitsiz Olanı Hak Ediyor",
        subtitle: "Dakikaları saymayı bırakıp üretmeye başlayan 50.000+ profesyonel arasına katılın",
        button: "Limitsiz Yolculuğunuza Başlayın →"
      }
    },
    Podcasters: {
      badge: "Podcast Yapımcıları İçin Tasarlandı",
      heroTitle: "Tüm Podcast Arşivinizi",
      heroTitleHighlight: "Döküme Dönüştürün",
      heroSubtitle: "Tüm geçmiş kataloğunuzu yükleyin. Her bölüm için gösteri notları oluşturun. Artık hangi bölümleri transkribe edeceğinizi seçmek zorunda değilsiniz.",
      ctaPrimary: "Ücretsiz Döküm Yapmaya Başla",
      ctaSecondary: "Nasıl Çalıştığını Görün",
      trustBadge1: "10.000+ Podcast Yapımcısı",
      trustBadge2: "Limitsiz Bölüm",
      trustBadge3: "SEO Uyumlu Dökümler",
      stats: {
        stat1: {
          number: "∞",
          label: "Bölüm/Ay"
        },
        stat2: {
          number: "50",
          label: "Toplu Yükleme"
        },
        stat3: {
          number: "10sa",
          label: "Maksimum Bölüm Uzunluğu"
        },
        stat4: {
          number: "%96",
          label: "Doğruluk"
        }
      },
      problemTitle: "Podcast",
      problemTitleHighlight: "Döküm Sorunu",
      problemSubtitle: 'Diğer hizmetler hangi bölümlerin dökümüne "değeceğini" seçmenizi sağlıyor',
      problems: {
        problem1: {
          title: "Yükleme Sınırları Arşivleri Öldürür",
          description: "Otter ücretsizde 3 ömür boyu, Pro'da ayda 10 içe aktarım sunuyor. 3 yıllık bölümleri nasıl döküm yapacaksınız?"
        },
        problem2: {
          title: "Kaçırılan SEO Fırsatları",
          description: "Dökümü yapılmayan her bölüm kayıp SEO trafiğidir. Ancak Descript en fazla ayda 30 saatle sınırlıyor."
        },
        problem3: {
          title: "Büyüdükçe Maliyetler Patlıyor",
          description: "Podcast'iniz büyüdükçe döküm maliyetleri fırlıyor. Saat başına $2 aşım ücretleri ölçeklendirmeyi imkansız kılıyor."
        }
      },
      solutionTitle: "NeverCap",
      solutionTitleHighlight: "Çözümü",
      solutionDescription: "Gerçek limitsiz döküm. Tüm arşivinizi yükleyin. Her yeni bölümü döküme dönüştürün. Ölçeklenebilir gösteri notları oluşturun. Sınır yok, limit yok, sadece büyüme.",
      workflowTitle: "Podcast İş Akışınız,",
      workflowTitleHighlight: "Basitleştirildi",
      workflowSubtitle: "Kayıttan SEO optimizeli gösteri notlarına dakikalar içinde",
      workflow: {
        step1: {
          title: "Bölümleri Yükle",
          description: "Aynı anda 50 bölüm bırakın. MP3, MP4, WAV - hepsini hallediyoruz."
        },
        step2: {
          title: "AI Döküm Yapar",
          description: "Konuşmacı tanımlamalı %96 doğruluk. Röportajlar için mükemmel."
        },
        step3: {
          title: "Akıllı Biçimlendirme",
          description: "Yapay zeka otomatik olarak paragraflar, cümleler ve noktalama ekler."
        },
        step4: {
          title: "Yayınla & Sırala",
          description: "Web sitenize aktarın. SEO trafiğinizin büyümesini izleyin."
        }
      },
      featuresTitle: "Podcast Yapımcılarının İhtiyaç Duyduğu",
      featuresTitleHighlight: "Özellikler",
      featuresSubtitle: "Podcast yapımcıları tarafından, podcast yapımcıları için geliştirildi",
      features: {
        feature1: {
          title: "Çoklu Konuşmacı Tanıma",
          description: "Otomatik olarak 20'ye kadar konuşmacıyı tanımlar ve etiketler. Panel tartışmaları, röportajlar ve ortak sunulan şovlar için ideal."
        },
        feature2: {
          title: "Zaman Damgalı Bölümler",
          description: "YouTube açıklamaları için tıklanabilir zaman damgaları oluşturun. Dinleyicilerin favori bölümlere anında atlamasını sağlayın."
        },
        feature3: {
          title: "Akıllı Biçimlendirme",
          description: "Otomatik olarak paragraflar, cümleler ve noktalama ekler. Temiz, okunabilir transkriptler elde edin. Post prodüksiyonda saatler kazanın."
        },
        feature4: {
          title: "SEO Optimizasyonu",
          description: "Arama motorları için formatlanmış transkriptler. Podcast'inizin keşfedilebilirliğini artırın ve yeni dinleyicilere ulaşın."
        },
        feature5: {
          title: "100+ Dil",
          description: "Herhangi bir dilde transkript oluşturun. 249+ dile çevirin. Küresel dinleyicilere zahmetsizce ulaşın."
        },
        feature6: {
          title: "Toplu İşleme",
          description: "Yatmadan önce 50 bölüm yükleyin. Uyandığınızda tamamlanmış transkriptlerle karşılaşın. Tüm arşivinizi bir gecede işleyin."
        }
      },
      testimonialsTitle: "Geçiş Yapan",
      testimonialsTitleHighlight: "Podcast Yapımcıları",
      testimonialsSubtitle: "Gerçek podcast yapımcılarından gerçek hikayeler",
      testimonials: {
        mike: {
          text: '"3 yıldır podcast yapıyorum ve her şeyi aptal gibi manuel olarak transkribe ediyordum. Bir seferde 6 bölüm yükledim ve beni ve ortak sunucumu mükemmel şekilde ayırdı. Mahvolduğunu düşündüğüm kahve dükkanı bölümü? Kristal berraklığında transkript. Bir daha asla bunları kendim yazmayacağım."',
          name: "Mike Rodriguez",
          role: '"The Daily Grind" Podcast Sunucusu'
        },
        sarah: {
          text: '"Otter beni ayda 10 dosya yükleme ile sınırlıyordu. 150 bölüm birikmişti. NeverCap her şeyi 3 partide yüklememe izin verdi. Eski bölümlere transkript eklediğimden beri organik trafiğim %300 arttı. Bu kendini adeta amorti ediyor."',
          name: "Sarah Chen",
          role: '"Tech Talks Today" Yaratıcısı'
        }
      },
      comparisonTitle: "Podcast Yapımcıları Neden",
      comparisonTitleHighlight: "NeverCap'i Seçiyor",
      comparisonSubtitle: "Rakip karşılaştırmamızı görün",
      comparison: {
        headers: {
          feature: "Özellik",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Aylık Bölüm Limiti",
            nevercap: "Sınırsız",
            otter: "~13 bölüm (1200 dk)",
            descript: "~30 bölüm (30 saat)"
          },
          uploadLimit: {
            feature: "Dosya Yükleme Limiti",
            nevercap: "Sınırsız",
            otter: "Ayda 10",
            descript: "Bir seferde 1"
          },
          batchProcessing: {
            feature: "Toplu İşleme",
            nevercap: "50 dosya",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksimum Bölüm Uzunluğu",
            nevercap: "10 saat",
            otter: "90 dakika",
            descript: "Sınırsız"
          },
          speakerDetection: {
            feature: "Konuşmacı Tanıma",
            nevercap: "20 konuşmacı",
            otter: "16 konuşmacı",
            descript: "10 konuşmacı"
          },
          smartFormatting: {
            feature: "Akıllı Biçimlendirme",
            nevercap: "✓ Mükemmel",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Fiyat",
            nevercap: "$17.99/ay",
            otter: "$16.99/ay",
            descript: "$30/ay"
          }
        }
      },
      ctaTitle: "Her Bölümü Dönüştürmeye Başla",
      ctaSubtitle: "Sınırlar hakkında endişelenmeyen 10.000+ podcastçiye katılın",
      ctaButton: "İlk 50 Bölümünüzü Ücretsiz Yükleyin →",
      ctaDisclaimer: "Kredi kartı gerekmez • Sınırsız bölüm işleyin • İstediğiniz zaman iptal edin"
    },
    Journalists: {
      hero: {
        badge: "Gazeteciler & Yazarlar İçin",
        title: "Her Röportajı Dönüştürün.",
        titleHighlight: "Hiçbir Alıntıyı Kaçırmayın.",
        subtitle: "Hangi röportajların dönüştürülmeye değer olduğunu seçmeyi bırakın. Tüm kayıtları tek seferde yükleyin, anında her şeyi arayın ve yükleme endişesi olmadan teslim tarihlerinizi karşılayın.",
        ctaPrimary: "Sınırsız Yüklemeye Başlayın →",
        ctaSecondary: "Nasıl Çalıştığını Görün",
        stats: {
          uploads: {
            number: "∞",
            label: "Dosya Yüklemeleri"
          },
          accuracy: {
            number: "%96",
            label: "Doğruluk"
          },
          speed: {
            number: "5dk",
            label: "Saat Başına"
          }
        },
        dashboard: {
          title: "Röportaj Kuyruğu",
          status: "• Tüm İşlemler",
          interviews: {
            cityCouncil: {
              title: "Belediye Toplantısı",
              duration: "2s 15dk • Yükleniyor...",
              action: "İşleniyor"
            },
            expertInterview: {
              title: "Uzman Röportajı - Dr. Chen",
              duration: "45dk • Dönüştürülüyor...",
              action: "%96 Tamamlandı"
            },
            pressConference: {
              title: "Basın Toplantısı",
              duration: "1s 30dk • Hazır",
              action: "Görüntüle →"
            },
            phoneInterview: {
              title: "Telefon Röportajı - Kaynak",
              duration: "35dk • Hazır",
              action: "Görüntüle →"
            }
          }
        }
      },
      problem: {
        title: "Gazetecilerin",
        titleHighlight: "Dönüştürme Sorunu",
        subtitle: 'Diğer hizmetler hangi röportajların "değerli" olduğunu seçmenizi sağlıyor',
        problems: {
          uploadLimits: {
            title: "Yükleme Sınırları Soruşturmaları Öldürüyor",
            description: "Otter Pro'da ayda 10 dosya içe aktarma hakkı veriyor. 3 haftalık soruşturma röportajlarını nasıl dönüştürürsünüz?"
          },
          missingQuotes: {
            title: "Kritik Alıntılar Kaçıyor",
            description: "Dönüştürülmemiş her röportaj hikayenin anahtar alıntısını içerebilir. Ancak Trint en fazla ayda 50 saat ile sınırlıyor."
          },
          costExplosion: {
            title: "Teslim Tarihleriyle Maliyetler Patlıyor",
            description: "Araştırmanız derinleştikçe, transkripsiyon maliyetleri fırlar. Aylık $100 aşım ücretleri son dakika haberlerini imkansız kılar."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap Çözümü",
          description: "Gerçek sınırsız transkripsiyon. Tüm araştırmanızı yükleyin. Her röportajı döküme dönüştürün. Tüm alıntıları anında arayın. Sınır yok, limit yok, sadece gazetecilik."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Gazeteciler İçin",
        titleSuffix: "En İyi Röportaj Transkripsiyon Yazılımı",
        subtitle: "Zaman dar ve doğruluk her şey olduğunda önemli olan gerçek avantajlar",
        solutions: {
          unlimitedUploads: {
            label: "Sınırsız Hacim",
            title: "Tüm Röportajlarınız İçin Sınırsız Hacim",
            description: "Dakika sınırı olan yazılımların aksine, kısa bir sohbetten saatler süren tartışmaya kadar her röportajı döküme dönüştürebilirsiniz. Son teslim tarihinde kredi bitirme endişesi yaşamayın.",
            points: {
              simultaneousUpload: "Aylık dakika limiti yok",
              noLimits: "10 saatlik röportaj desteği",
              processWhileWrite: "Tüm araştırmaları tek seferde işleyin",
              longRecordings: "10 saatlik kayıtlar desteklenir"
            },
            visual: {
              number: "∞",
              label: "Sınır Yok. Asla."
            }
          },
          instantSearch: {
            label: "Şimşek Hızı",
            title: "Haber Döngünüze Uyan Hız",
            description: "Röportaj transkripsiyonunuzu günler değil dakikalar içinde alın. Hikayeleri her zamankinden hızlı tamamlayın. Siz kahvenizi alırken yapay zekamız saatlerce ses işler.",
            points: {
              searchAll: "1 saatlik röportajlar için 5 dakikada teslim",
              wordTimestamps: "Acil hikayeler için öncelikli işleme",
              jumpToMoments: "Gerçek zamanlı ilerleme takibi"
            },
            searchDemo: {
              placeholder: "5dk",
              resultsText: "Saatlik Ses Başına",
              results: {
                mayorInterview: '"...iklim politikamız dönüşecek..."',
                expertPanel: '"...politika beyanı açıkça gösteriyor ki..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Alıntıya Hazır Doğruluk",
            title: "Alıntı Yapabileceğiniz Doğruluk",
            description: "Yapay zekamız, yayınladığınız alıntıların kesin ve güvenilir olmasını sağlayan yüksek doğrulukta transkriptler sunar. Editörlerin güvendiği profesyonel düzeyde transkripsiyon.",
            points: {
              accuracyGuarantee: "%96 doğruluk garantisi",
              handlesAccents: "Teknik terminolojiyi işler",
              smartPunctuation: "Mükemmel konuşmacı tanımlama"
            },
            visual: {
              accuracy: "%96",
              label: "Yayına Hazır Doğruluk",
              transcript: {
                speaker1: '"Soruşturmada mali raporlarda önemli tutarsızlıklar ortaya çıktı."',
                speaker2: '"Bu özel tutarsızlıkları biraz daha açabilir misiniz?"'
              }
            }
          },
            ironclad: {
                  label: "Kaynak Koruma",
                  title: "Sağlam Kaynak Koruma",
                  description: "Hassas röportaj verilerinizi ve gizli kaynaklarınızı korumak için güçlü güvenlik özellikleri sunuyoruz. Banka düzeyinde şifreleme araştırmalarınızı güvende tutar.",
                  points: {
                    accuracyGuarantee: "Uçtan uca şifreleme",
                    handlesAccents: "Otomatik dosya silme seçenekleri",
                    smartPunctuation: "GDPR & gizlilik uyumlu"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maksimum Güvenlik"
                  }
                }
        }
      },
      features: {
        title: "Bir Gazetecinin",
        titleHighlight: "İhtiyacı Olan Her Şey",
        subtitle: "İş akışınıza saygı duyan profesyonel araçlar",
        featuresList: {
          languages: {
            title: "100+ Dil",
            description: "12 ana dilde %96 doğrulukla küresel kaynaklarla röportaj yapın."
          },
          exportFormats: {
            title: "Dışa Aktarma Formatları",
            description: "Word, PDF, SRT, TXT. Her iş akışıyla uyumlu."
          },
          sourceProtection: {
            title: "Kaynak Koruma",
            description: "Banka düzeyinde şifreleme. Kaynaklarınız gizli kalır."
          },
          timestamps: {
            title: "Zaman Damgaları",
            description: "Herhangi bir alıntıya tıklayarak tam ses anına atlayın."
          },
          teamSharing: {
            title: "Takım Paylaşımı",
            description: "Editörlerle işbirliği yapın. Transkriptleri güvenle paylaşın."
          },
          mobileReady: {
            title: "Mobil Uyumlu",
            description: "Telefondan yükleyin. Transkriptleri her yerde inceleyin."
          },
          smartFormatting: {
            title: "Akıllı Biçimlendirme",
            description: "Okunabilir transkriptler için otomatik paragraflar ve noktalama."
          },
          batchProcessing: {
            title: "Toplu İşleme",
            description: "Aynı anda 50 dosya yükleyin. Uyurken gece boyunca işleyin."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Yükleme limitleri yüzünden 3 yıllık röportajlarım transkript edilmemişti. NeverCap sayesinde her şeyi bir hafta sonunda hallettim. Oyun değiştirici.",
          name: "Jessica Park",
          role: "Serbest Çalışan Gazeteci, Eski Otter Kullanıcısı"
        }
      },
      cta: {
        title: "Transkripte Başla",
        titleHighlight: "Limitsiz",
        subtitle: "Yüklemeleri saymayı bırakıp hikayelere odaklanan binlerce gazeteciye katılın",
        ctaPrimary: "Sınırsız Ücretsiz Deneyin →",
        ctaSecondary: "Fiyatları Görüntüle"
      }
    },
    ContentCreators: {
      hero: {
        badge: "İçerik Üreticileri İçin",
        title: "YouTube Videolarını Transkript Edin,",
        titleHighlight: "Limitsiz",
        titleSuffix: "1",
        subtitle: "Bir YouTube videosunu transkript etmeniz, yeniden kullanım için bir TikTok videosunu transkript etmeniz veya bir Facebook videosunu nasıl metne dönüştüreceğinizi bulmanız gerekiyorsa, platformumuz bunların hepsini sorunsuz şekilde halleder. Aylık limit olmadan 100+ dilde altyazı oluşturun – sadece saf yaratıcı özgürlük.",
        ctaPrimary: "Sınırsız Altyazıya Başlayın →",
        ctaSecondary: "Nasıl Çalıştığını Görün",
        stats: {
          videos: {
            number: "∞",
            label: "Video/Ay"
          },
          languages: {
            number: "100+",
            label: "Dil"
          },
          accuracy: {
            number: "%96",
            label: "Doğruluk"
          },
          platforms: {
            number: "10+",
            label: "Platform"
          }
        }
      },
      platforms: {
        title: "Herhangi Bir Platformdan Alın ve Transkript Edin",
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
          titleMax: "Herhangi Bir Platformdan",
          titleMaxHighlight: "Video Transkript Edin"
    },
      features: {
        title: "İçeriği Ölçeklendirmek İçin",
        titleHighlight: "İhtiyacınız Olan Her Şey",
        subtitle: "Profesyonel limitler olmadan profesyonel araçlar",
        oneClickImport: {
          label: "Tek Tıkla İçe Aktar",
          title: "YouTube, TikTok ve",
          titleHighlight: "Instagram Videolarını Link Yapıştırarak Transkript Edin",
          description: "Aracımız video içeriğini transkript etme sürecinizi basitleştirir. Bir Instagram videosunu transkript etmek için bağlantıyı yapıştırmanız yeterli. Vimeo videosunu metne dönüştürmek için aynısını yapın. Tüm kanalınızın birikmiş içeriğini bir hafta sonunda işleyin.",
          points: {
            directYoutube: "Doğrudan YouTube bağlantısı transkripsiyonu",
            multiplePlatforms: "10+ platformdan getir",
            batchPlaylists: "Tüm çalma listelerini toplu işle",
            autoSync: "Kanallarınızla otomatik senkronizasyon"
          },
          demo: {
            instruction: "Video URL'nizi yapıştırın:",
            url: "https://youtube.com/watch?v=...",
            status: "Getiriliyor & Transkript Ediliyor..."
          }
        },
        globalReach: {
          label: "Küresel Erişim",
          title: "100+ Dil.",
          titleHighlight: "Sıfır Sınır.",
          description: "100+ dile otomatik çeviri ile küresel izleyicilere ulaşın. Aynı anda birden fazla dilde altyazı oluşturun. Ekstra ücret yok, çevirilerde aylık sınır yok.",
          points: {
            highAccuracy: "12 ana dilde %96 doğruluk",
            unlimitedTranslations: "Sınırsız çeviri dahil",
            multicultural: "Çok kültürlü içerik için ideal",
            autoDetect: "Kaynak dili otomatik algıla"
          },
          visual: {
            number: "100+",
            title: "Desteklenen Diller",
            subtitle: "Bir kez çevir, herkese ulaş"
          }
        },
        flexibleExport: {
          label: "Esnek Dışa Aktarım",
          title: "İhtiyacınız Olan",
          titleHighlight: "Her Format",
          description: "İş akışınıza uygun formatta dışa aktarın. YouTube için SRT dosyalarından web oynatıcılar için VTT'ye veya senaryolar için düzenlenebilir belgelere kadar. Tüm dışa aktarımlar sınırsız, tüm planlarda dahil.",
          points: {
            videoFormats: "Video platformları için SRT & VTT",
            editingFormats: "Düzenleme için DOCX & PDF",
            dataAnalysis: "Veri analizi için CSV",
            simpleScripts: "Basit senaryolar için TXT"
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
        title: "Yüklemekten",
        titleHighlight: "Yayınlanmaya",
        titleSuffix: "Dakikalar İçinde",
        subtitle: "Tüm içerik kütüphanenize altyazı eklemenin en hızlı yolu",
        steps: {
          pasteLinks: {
            title: "Bağlantıları Yapıştır",
            description: "YouTube, TikTok veya herhangi bir video bağlantısını bırakın. Veya doğrudan dosya yükleyin."
          },
          autoTranscribe: {
            title: "Otomatik Transkript",
            description: "AI %96 doğrulukla işler. Aksanları ve çoklu konuşmacıları yönetir."
          },
          editTranslate: {
            title: "Düzenle & Çevir",
            description: "Altyazılarınızı mükemmelleştirin. Anında 100+ dile çevirin."
          },
          exportPublish: {
            title: "Dışa Aktar & Yayınla",
            description: "Herhangi bir formatta indirin. Platformunuza yükleyin. Tamamlandı!"
          }
        }
      },
      testimonials: {
        title: "İçerik Üreticileri",
        titleHighlight: "Her Gün Geçiş Yapıyor",
        subtitle: "Sınırlı planlardan sınırsız özgürlüğe",
        carlos: {
          textBefore: "İspanyolca eğitim içeriği üretiyorum. NeverCap mükemmel şekilde transkript ediyor ve",
          textAfter: "daha geniş kitlelere ulaşmamı sağlıyor. Sınır yok, sadece büyüme. Çok dilli altyazılar ekledikten sonra kanal görüntülemelerim 3 kat arttı.",
          highlight: "İngilizce'ye çevirir",
          name: "Carlos Martinez",
          role: "YouTube Eğitimcisi • 250K Abone"
        },
        sarah: {
          textBefore: "Descript aylık $30 istiyordu",
          textAfter: ". 500+ videoluk birikmiş işim vardı. NeverCap sayesinde her şeyi bir hafta sonunda hallettim. Altyazıların SEO katkısı ilk ay kendini amorti etti.",
          highlight: "30 saat",
          name: "Sarah Lee",
          role: "Lifestyle Vlogger • 180K Abone"
        },
        jake: {
          textBefore: "The ",
          textAfter: "özelliği oyunun kurallarını değiştirdi. Artık hiçbir şey indirmiyorum. Sadece yapıştır, dökümle, tamam. Podcast kliplerimi TikTok için işlemek hiç bu kadar kolay olmamıştı.",
          highlight: "doğrudan YouTube alımı",
          name: "Jake Wilson",
          role: "Podcast Sunucusu • En İyi %1 Yaratıcı"
        },
        yuki: {
          textBefore: "5 dilde içerik üretiyorum. Diğer hizmetler",
          textAfter: "alıyor. NeverCap sınırsız çeviri sunuyor. Doğru yerel altyazılar kullanmaya başladığımdan beri uluslararası izleyici kitlesi %400 arttı.",
          highlight: "çeviri başına",
          name: "Yuki Tanaka",
          role: "Oyun Yaratıcısı • 500K Abone"
        }
      },
      cta: {
        title: "Tüm Kanalınız. Altyazılı. Bugün.",
        subtitle: "Dakikaları saymayı bırakıp üretmeye başlayan 50.000+ yaratıcıya katılın",
        button: "Sınırsız Altyazılamaya Başla →"
      },
        FAQSection: {
              "title": "Dökümleme Sorularınız,",
              "titleHighlight": "Cevaplandı",
              subtitle: "Farklı platformlardaki videoları dökümlemek hakkında bilmeniz gereken her şey",
              "questions": [
                    {
                      "question": "S: NeverCap ile bir YouTube videosunu nasıl dökümlerim?",
                      "answer": "Çok basit. Dökümlemek istediğiniz YouTube videosunu bulun, URL'sini kopyalayın ve uygulamamıza yapıştırın. Yapay zekamız videoyu otomatik olarak alacak ve dakikalar içinde tam metin dökümü sağlayacaktır."
                    },
                    {
                      "question": "S: Bir Facebook videosunu metne dökümlemenin en iyi yolu nedir?",
                      "answer": "En kolay yöntem doğrudan bağlantı kullanmaktır. Facebook videosunun URL'sini kopyalayın, platformumuz gerisini halledecek ve konuşmayı %96 doğrulukla metne çevirerek manuel dökümden kurtaracaktır."
                    },
                    {
                      "question": "S: TikTok ve Instagram videolarını dökümleyebilir miyim?",
                      "answer": "Kesinlikle. Hem TikTok hem de Instagram videoları için dökümleme desteği sunuyoruz. Bu, kısa form video içeriklerini blog yazılarına, makalelere veya metin tabanlı sosyal medya güncellemelerine dönüştürmek isteyen içerik üreticileri için mükemmel."
                    },
                    {
                      "question": "S: Bir Vimeo videosunu metne nasıl dökümlerim?",
                      "answer": "Vimeo videolarını dökümlemek diğer platformlardaki kadar kolay. Basitçe Vimeo video URL'sini kopyalayın ve NeverCap'a yapıştırın. Yapay zekamız videoyu işleyecek ve çoklu formatlarda indirebileceğiniz doğru metin dökümü oluşturacaktır."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Akademik Mükemmellik İçin Tasarlandı",
      heroTitle1: "Her Röportajı Dökümleyin.",
      heroTitle2: "Tüm Verilerinizi Analiz Edin.",
      heroSubtitle: "Hangi odak gruplarını dökümleyeceğinizi seçmeyi bırakın. 20 katılımcının birbirinin sözünü kestiği durumlarda bile %96 doğrulukla kusursuz konuşmacı tanımlaması yaparak tüm nitel verilerinizi işleyin.",
      heroCtaPrimary: "Ücretsiz Dene - Kredi Kartı Gerekmez",
      heroCtaSecondary: "Nasıl Çalıştığını Gör",
      statsInterviewHours: "Röportaj Saatleri",
      statsAccuracy: "Doğruluk",
      statsSpeakersId: "Konuşmacı Kimliği",
      statsCompliant: "Uyumlu",
      problemTitle: "Bu ",
      problemSubtitle: 'Diğer hizmetler hangi verilerin dökümlenmeye "değer" olduğunu seçmenizi sağlıyor',
      problemCard1Title: "Yükleme Sınırları Çalışmaları Öldürüyor",
      problemCard1Desc: "Otter size 3 ömür boyu içe aktarım hakkı veriyor. 200 saatlik odak gruplarını nasıl dökümlersiniz?",
      problemCard2Title: "Kritik Veriler Eksik",
      problemCard2Desc: "Dökümlenmemiş her röportaj çığır açıcı bilgiler içerebilir. Ancak Rev dakika başına minimum $2 ücret alıyor.",
      problemCard3Title: "Hibe Parası Kayboluyor",
      problemCard3Desc: "Veri kümeniz büyüdükçe transkripsiyon maliyetleri patlar. Odak grubu başına 500$ ölçeklendirmeyi imkansız kılar.",
      solutionTitle: "NeverCap Çözümü",
      solutionDesc: "Gerçek sınırsız transkripsiyon. Tüm çalışmanızı yükleyin. Her röportajı dönüştürün. Tüm verilerinizi analiz edin. Sınır yok, limit yok, sadece araştırma.",
      feature1Label: "Sınır Yok",
      feature1Title: "İşlerinizi Yönetin",
      feature1Desc: '200 saatlik röportajlarınızı bu gece yükleyin. Tamamlanmış, aranabilir transkriptlerle uyanın. Aylık limit yok, dosya başına sınır yok, "adil kullanım" saçmalığı yok.',
      feature1Point1: "50 dosyayı aynı anda toplu yükleme",
      feature1Point2: "Boylamsal çalışmaları tamamen işleyin",
      feature1Point3: "Transkriptlerde depolama sınırı yok",
      feature1Point4: "NVivo, MAXQDA, Atlas.ti'ye aktarın",
      feature1Visual1: "Sınırsız Saat",
      feature1Visual2: "10 saat de 10.000 saat de aynı fiyat",
      feature2Label: "Akıllı Yapay Zeka",
      feature2Title: "Hassas Kontrol",
      feature2Desc: "Yapay zekamız, birbirinin sözünü kesen, araya giren veya aynı anda konuşan 20 konuşmacıyı bile takip eder. Her ses doğru şekilde yakalanır ve etiketlenir.",
      feature2Point1: "20 konuşmacı tanımlama",
      feature2Point2: "Çapraz konuşma ve kesintileri yönetir",
      feature2Point3: "Yeniden adlandırabileceğiniz konuşmacı etiketleri",
      feature2Point4: "Her kelime için zaman damgası",
      conversationParticipant1: "Katılımcı 1",
      conversationText1: "Karşılaştığımız ana engel kesinlikle tedavi maliyeti...",
      conversationParticipant2: "Katılımcı 2",
      conversationText2: "Kesinlikle, ancak erişimin de—",
      conversationParticipant3: "Katılımcı 3",
      conversationText3: "—özür dilerim araya giriyorum ama ulaşım da çok önemli.",
      conversationText4: "Evet! Tam da söyleyeceğim şey buydu.",
      conversationParticipant4: "Katılımcı 4",
      conversationText5: "Kırsal bölgelerde üçü birden: maliyet, erişim VE ulaşım.",
      feature3Label: "Hassasiyet",
      feature3Title: "Güvenilir",
      feature3Desc: "Teknik jargon, ağır aksanlar ve alana özgü terimleri ustalıkla yönetir. Yayın, hakem incelemesi ve tez komiteniz için yeterince doğru.",
      feature3Point1: "Tıbbi ve bilimsel terimler",
      feature3Point2: "100+ dil ve lehçe",
      feature3Point3: "Kelimesi kelimesine ve düzenlenmiş okuma modları",
      feature3Point4: "Herhangi bir formatta düzenleyin ve dışa aktarın",
      feature3Visual1: "Araştırma Düzeyinde Doğruluk",
      feature3Visual2: "50.000+ araştırmacı tarafından güvenilir",
      feature4Label: "Güvenlik",
      feature4Title: "IRB Uyumluluk Sertifikası",
      feature4Desc: "Hassas araştırma verileriniz kurumsal düzeyde güvenlikle korunur. GDPR uyumlu, HIPAA'ya hazır seçenekler ve IRB gereksinimleri için tam denetim kaydı.",
      feature4Point1: "Uçtan uca şifreleme",
      feature4Point2: "GDPR ve CCPA uyumlu",
      feature4Point3: "Otomatik silme politikaları",
      feature4Point4: "Güvenli ekip işbirliği",
      useCasesTitle: "İçin Mükemmel",
      useCasesSubtitle: "Etnografiden klinik deneylere",
      useCase1Title: "Odak Grupları",
      useCase1Desc: "Üst üste konuşan 8-20 katılımcıyı yönetir. Hararetli tartışmalarda bile kusursuz konuşmacı tanımlama. Doğrudan nitel analiz yazılımına aktarın.",
      useCase2Title: "Derinlemesine Görüşmeler",
      useCase2Desc: "Yüzlerce birebir görüşmeyi aynı anda işleyin. Tüm veri setinizde tutarlılığı koruyun. Tüm transkriptlerde anında arama yapın.",
      useCase3Title: "Klinik Araştırmalar",
      useCase3Desc: "Hasta görüşmeleri için HIPAA uyumlu seçenekler. Doğru tıbbi terminoloji transkripsiyonu. Hassas sağlık verilerinin güvenli işlenmesi.",
      useCase4Title: "Etnografik Çalışmalar",
      useCase4Desc: "Doğal ortamlarda saha kayıtları. Arka plan gürültüsü ve çoklu konuşmacıları yönetin. 100+ dil ve lehçe desteği.",
      useCase5Title: "Sözlü Tarih Projeleri",
      useCase5Desc: "Sınırsız arşivleri koruyun. Aranabilir tarihi kayıtlar oluşturun. Uzun vadeli ve nesiller arası çalışmalar için ideal.",
      useCase6Title: "Tez Araştırmaları",
      useCase6Desc: "Öğrenci dostu fiyatlandırma ve tam özellikler. Tüm veri setinizi uygun maliyetle işleyin. Toplu işlemle sıkı son teslim tarihlerini karşılayın.",
      testimonialTitle: "Güvenilen",
      testimonialText: "Araştırma ekibimiz toplum sağlığı çalışmamızdan 200 saatlik odak grup kaydına sahipti. Diğer hizmetler maliyet nedeniyle hangi oturumları transkribe edeceğimizi seçmemizi istedi. NeverCap her şeyi bir hafta sonunda işlememizi sağladı. 20 konuşmacı tanımlama işe yaradı—herkesin aynı anda konuştuğu en karmaşık tartışmalarımızda bile. Bu araç nitel verileri nasıl ele aldığımızı tamamen değiştirdi.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Baş Araştırmacı, Halk Sağlığı Enstitüsü",
      ctaTitle: "Hangi Veriyi Analiz Edeceğinizi Seçmeyi Bırakın",
      ctaSubtitle: "Her şeyi transkribe eden 50.000+ araştırmacıya katılın",
      ctaButton: "NeverCap'i Ücretsiz Dene",
        problemTitle2: "Araştırma Dökümleme Sorunu",
        title: "The",
        useCasesTitle2: "Her Araştırma Yöntemi",
        testimonialTitle2: "Önde Gelen Araştırmacılar",
        feature1TitleHl: "Tüm Araştırma Projeniz",
        feature1TitlePost: "Tek Durakta Tamamlayın",
        feature2TitleHl: "Odak Grup Görüşmeleri",
        feature2TitlePost: "Her Seferinde Başarı",
        feature3TitleHl: "%96 Doğruluk Oranı",
        feature4TitleHl: "Güvenlik",
        testimonialText2Hl: "200 saat",
        testimonialText3: "toplum sağlığı çalışmamızdan odak grup kayıtları. Diğer hizmetler maliyet nedeniyle hangi oturumları transkribe edeceğimizi seçmemizi istedi. NeverCap sayesinde",
        testimonialText4Hl: "her şeyi bir hafta sonunda işledik",
        testimonialText5: "20 konuşmacı tanımlama özelliği gerçekten işe yaradı - herkesin aynı anda konuştuğu en karmaşık tartışmalarımızda bile. Bu araç",
        testimonialText6Hl: "tamamen değiştirdi",
        testimonialText7: "nitel verileri nasıl ele aldığımızı."
    },
    BusinessTeams: {
      heroBadge: "İş Ekipleri İçin",
      heroTitle1: "Toplantı Kaydı",
      heroTitle2: "Zahmetsiz Hale Geldi",
      heroSubtitle: "Toplantıları doğrudan tarayıcınızdan kaydedin veya ses dosyalarını anında yükleyin. Sınırsız konuşmalardan aranabilir arşivler oluşturun. Gerçekten sınırsız transkripsiyonla önemli tartışmaları bir daha asla kaybetmeyin.",
      heroCtaPrimary: "Şimdi Kaydetmeye Başla →",
      heroCtaSecondary: "Nasıl Çalıştığını Görün",
      recordingStatus: "Kayıt Yapılıyor...",
      statsMeetingMinutes: "Toplantı Tutanakları",
      statsLiveRecording: "Kayıt",
      statsSpeakerID: "Konuşmacı Kimliği",
      statsInstantUpload: "Yükle & İşle",
      featuresTitle: "Her İşletme İçin Transkripsiyon",
      featuresSubtitle: "Canlı kayıttan anında yüklemeye kadar, her sürtünme noktasını ortadan kaldırdık",
      feature1Title: "Doğrudan Tarayıcınızdan Kaydedin",
      feature1Desc: "İndirme yok, eklenti yok. Tek tıkla anında kayda başlayın. Mükemmel ses kalitesi, otomatik konuşmacı tanıma.",
      feature1Benefit1: "Tek tıkla kayıt başlatma",
      feature1Benefit2: "Yazılım kurulumu gerekmez",
      feature1Benefit3: "Her cihazda çalışır",
      feature1Benefit4: "Gerçek zamanlı transkripsiyon",
      feature1Visual1: "Tıkla & Kaydet",
      feature1Visual2: "Kurulum gerekmez",
      feature2Title: "Herhangi Bir Ses Dosyasını Anında Yükleyin",
      feature2Desc: "Zoom, Teams veya telefonunuzdan kayıtlarınız mı var? Anında yükleyin. Tüm büyük ses ve video formatları desteklenir. Beklemeden birden fazla dosyayı aynı anda işleyin.",
      feature2Benefit1: "Desteklenenler: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Toplu yükleme özelliği",
      feature2Benefit3: "10 saatlik dosyalar desteklenir",
      feature2Benefit4: "Çalışırken işleyin",
      feature2Visual1: "Dosyaları Sürükle & Bırak",
      feature3Title: "Ekip İşbirliği İçin Tasarlanmıştır",
      feature3Desc: "Transkriptleri ekibinizle anında paylaşın. Kayıtları birlikte dinleyin, transkriptleri çoklu formatta dışa aktarın ve aranabilir toplantı arşivleriyle herkesin aynı hizada kalmasını sağlayın.",
      feature3Benefit1: "Transkriptleri herkesle paylaşın",
      feature3Benefit2: "Orijinal kayıtları dinle",
      feature3Benefit3: "Transkriptleri çoklu formatta dışa aktar",
      feature3Benefit4: "Tüm ekip için aranabilir arşivler",
      feature3Visual1: "Ekip Üyeleri",
      feature3Visual2: "Sınırsız iş birliği",
      feature4Title: "Her Konuşmayı Anında Bul",
      feature4Desc: "Tüm toplantılarınızı aynı anda arayın. Geçen çeyrekteki kritik kararı veya aylar önceki müşteri gereksinimini bulun. Yapay zeka destekli arama, sadece anahtar kelimeleri değil bağlamı da anlar.",
      feature4Benefit1: "Tüm toplantıları aynı anda ara",
      feature4Benefit2: "Yapay zeka bağlamı anlar",
      feature4Benefit3: "Konuşmacıya veya tarihe göre filtrele",
      feature4SearchPlaceholder: "🔍 Ara: 'Q4 gelir hedefleri'",
      feature4SearchResults: "3 toplantıda bulundu:",
      feature4Meeting1: "Satış Planlama - 15 Eki",
      feature4Meeting1Text: '"...Q4 için hedefler 2M$ olarak belirlendi..."',
      feature4Meeting2: "Yönetim Kurulu Toplantısı - 20 Eki",
      feature4Meeting2Text: '"...Q4 gelir projeksiyonları..."',
      workflowTitle: "Bir Zoom Kaydını",
      workflowSubtitle: "Her önemli anı yakalayan sorunsuz bir iş akışı",
      workflowStep1Title: "Kaydet veya Yükle",
      workflowStep1Desc: "Canlı kayıt başlatın veya Zoom, Google Meet veya Microsoft Teams'ten toplantı kaydını indirin",
      workflowStep2Title: "Otomatik Transkript",
      workflowStep2Desc: "Yapay zekamız kaydı dakikalar içinde %96 doğrulukla metne dönüştürür",
      workflowStep3Title: "İş Birliği Yap",
      workflowStep3Desc: "Paylaş, yorum yap ve aksiyon maddelerini çıkar",
      workflowStep4Title: "Ara & Analiz Et",
      workflowStep4Desc: "Tüm toplantılarınızda içgörüler keşfedin",
      testimonialsTitle: "Ekiplerin Gözdesi",
      testimonialsSubtitle: "Şirketlerin toplantı kültürünü nasıl dönüştürdüğünü görün",
      testimonial1Text: '"Kritik detayları kaçırmaktan her konuşmanın aranabilir bir arşivine sahip olmaya geçtik. Doğrudan kayıt özelliği, önemli tartışmaları asla kaçırmadığımız anlamına geliyor."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Ürün Müdürü, TechCorp",
      testimonial2Text: '"Otter bizi ayda 10 dosya yükleme ile sınırlıyordu. Artık tüm müşteri görüşmelerimizi anında yüklüyoruz. Satış ekibimizin takipleri için oyun değiştirici."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Satış Direktörü, ConsultPro",
      testimonial3Text: '"Aylarca süren toplantıları arama yeteneği denetim sırasında bizi kurtardı. Her kararı ve onayı saniyeler içinde bulduk."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Önemli Konuşmaları Kaybetmeyi Bırakın",
      ctaSubtitle: "Sınırsız transkripsiyonla her toplantıyı kaydeden binlerce ekibe katılın",
      ctaButton: "Ücretsiz Kayda Başla →",
        featuresTitle2: "Toplantı",
        workflowTitle2: "Metne Dönüştürme",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Eğitimciler & Öğretmenler İçin",
      heroTitle1: "Öğrenmeyi Herkes İçin",
      heroTitle2: "Erişilebilir Kılın",
      heroSubtitle: "YouTube bağlantılarını yapıştırarak otomatik altyazılı anında transkriptler alın. Dersleri, eğitimleri ve eğitim videolarını her öğrencinin öğrenebileceği aranabilir, erişilebilir içeriğe dönüştürün.",
      heroCtaPrimary: "Ücretsiz Dene - Kredi Kartı Gerekmez",
      heroCtaSecondary: "Demoyu İzle",
      stats1Number: "1-Tık",
      stats1Label: "YouTube Transkripsiyonu",
      stats2Number: "100+",
      stats2Label: "Desteklenen Diller",
      stats3Number: "∞",
      stats3Label: "Sınırsız Video",
      stats4Number: "%96",
      stats4Label: "Doğruluk Oranı",
      featuresTitle: "Eğitimcilerin İhtiyacı Olan Her Şey",
      featuresSubtitle: "YouTube derslerinden kaydedilmiş sınıflara kadar tüm içeriğinizi erişilebilir hale getirin",
      feature1Title: "Anında YouTube & Platform Bağlantıları",
      feature1Desc: "Herhangi bir video bağlantısını yapıştırın ve anında transkript alın. YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive ve daha fazlasıyla çalışır. İndirme yok, bekleme yok.",
      feature1Point1: "Doğrudan bağlantı transkripsiyonu - indirme gerekmez",
      feature1Point2: "Tüm büyük platformları destekler",
      feature1Point3: "Tüm çalma listelerini tek seferde işleyin",
      feature1Point4: "Özel videolarla çalışır (izinle)",
      feature2Title: "Otomatik Altyazı & Alt Yazı Oluşturma",
      feature2Desc: "Tüm eğitim videolarınız için anında doğru altyazılar oluşturun. İşitme engelli öğrenciler, ana dili olmayanlar veya okumayı tercih edenler için içeriği erişilebilir hale getirin.",
      feature2Point1: "SRT, VTT ve TXT dışa aktarma formatları",
      feature2Point2: "Mükemmel senkronizasyon için kelime düzeyinde zaman damgaları",
      feature2Point3: "Altyazıları kolayca düzenleyin ve özelleştirin",
      feature2Point4: "Doğrudan YouTube'a yükleyin",
      feature2Visual1: "Dil Çevirileri",
      feature2Visual2: "İçeriğinizi küresel olarak erişilebilir hale getirin",
      feature3Title: "Dersler & Kategorilere Göre Düzenleme",
      feature3Desc: "Ders, konu veya döneme göre transkriptlerinizi düzenlemek için klasörler oluşturun. Tüm eğitim içeriğinizi düzenli bir şekilde kategorize edin ve kolayca aranabilir hale getirin. Erişilebilir ders materyallerinden oluşan kapsamlı bir kitaplık oluşturun.",
      feature3Point1: "Sınırsız klasör ve alt klasör oluşturun",
      feature3Point2: "Videoları konuya veya zorluk seviyesine göre etiketleyin",
      feature3Point3: "Birden fazla transkripti toplu olarak düzenleyin",
      feature3Point4: "Tüm içeriğinizde anında arama yapın",
      feature3VisualTitle: "Ders Kütüphaneniz",
      feature3Folder1: "Matematik 101",
      feature3Folder2: "Fizik Dersleri",
      feature3Folder3: "Biyoloji Laboratuvar Videoları",
      feature3Folder4: "Tarih Belgeselleri",
      feature3Folder5: "Dil Öğrenme",
      feature4Title: "AI ile Ses Dosyasını Çalışma Rehberine Dönüştür",
      feature4Desc: "Sadece kayıtları paylaşmayın. Dersleri ve diğer ses dosyalarını otomatik olarak metne çevirin ve öğrenci revizyonu için özetler ve ana kavramlarla detaylı çalışma rehberleri oluşturun. TXT, DOCX veya PDF formatlarında dışa aktarın.",
      feature4Point1: "Basit metin düzenleme için TXT",
      feature4Point2: "Biçimlendirilmiş belgeler için DOCX",
      feature4Point3: "Kolay paylaşım ve yazdırma için PDF",
      feature4Point4: "Birden fazla dosyayı toplu olarak dışa aktarın",
      workflowTitle: "Nasıl Çalışır:",
      workflowSubtitle: "Video bağlantısından erişilebilir transkript ve çalışma materyallerine dakikalar içinde",
      workflowStep1Title: "Dersinizi Yükleyin",
      workflowStep1Desc: "Herhangi bir ses veya video dosyasını (MP3, MP4, WAV) yükleyin veya bir YouTube bağlantısı yapıştırın",
      workflowStep2Title: "AI Transkripsiyonu",
      workflowStep2Desc: "Yapay zekamız sesi transkribe eder, konuşmacıları ayırır ve ana konuları belirler",
      workflowStep3Title: "Altyazı Oluştur",
      workflowStep3Desc: "Mükemmel senkronize alt yazıları otomatik oluştur",
      workflowStep4Title: "Çalışma Kılavuzunu Dışa Aktar",
      workflowStep4Desc: "Metni, özeti indirin veya son çalışma kılavuzunuzu oluşturmak için dışa aktarın",
      useCasesTitle: "Her Türlü",
      useCasesSubtitle: "Eğitimcilerin öğrenmeyi geliştirmek için NeverCap'i nasıl kullandığını görün",
      useCase1Title: "Kaydedilmiş Dersler",
      useCase1Text: "Kaydedilmiş derslerin tüm dönemini metne dökün. Öğrenciler belirli konuları arayabilir, ana kavramları gözden geçirebilir ve önemli bilgileri kaçırmaz.",
      useCase2Title: "Çevrimiçi Kurslar",
      useCase2Text: "Çevrimiçi kurslarınızı 100+ dilde çevirilerle uluslararası öğrenciler için erişilebilir hale getirin. Kayıtları ve memnuniyeti artırın.",
      useCase3Title: "Çalışma Materyalleri",
      useCase3Text: "Video derslerinden ve eğitimlerden ses dosyalarını AI ile çalışma kılavuzlarına dönüştürün. Okumayı tercih eden veya aranabilir metinle hızlıca içerik gözden geçirmek isteyen öğrenciler için ideal.",
      useCase4Title: "Erişilebilirlik Uyumu",
      useCase4Text: "Tüm video içerikleri için altyazı ve transkript sağlayarak erişilebilirlik gereksinimlerini karşılayın. Tüm öğrenciler için eşit erişim sağlayın.",
      useCase5Title: "Ters Yüz Edilmiş Sınıf",
      useCase5Text: "Ders öncesinde transkriptli video dersler paylaşın. Öğrenciler kendi hızlarında gözden geçirebilir ve tartışmalara hazırlıklı gelebilir.",
      useCase6Title: "Araştırma & Alıntılar",
      useCase6Text: "Öğrencilerin video kaynaklarını zaman damgalarıyla doğru şekilde alıntılamasına yardımcı olun. Araştırma projeleri ve akademik makaleler için mükemmel.",
      testimonialTitle: "Güvenilen",
      testimonialSubtitle: "Dünya çapındaki öğretmenlerin neden NeverCap'i seçtiğini görün",
      testimonialText: `"Matematik eğitim videolarından oluşan tüm YouTube kanalımı transkript etmek için NeverCap'i kullanıyorum. Başka servislerle haftalar süren işlem artık saatler alıyor. Doğrudan link yapıştırıp anında transkript alabilme özelliği, erişilebilir içerik oluşturma şeklimi değiştirdi. Uluslararası öğrencilerim özellikle çok dilli altyazıları seviyor!"`,
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Matematik Profesörü, Çevrimiçi Eğitimci",
      ctaTitle: "Tüm Eğitim İçeriğinizi Erişilebilir Yapın",
      ctaSubtitle: "Gerçekten sınırsız transkripsiyon kullanan binlerce eğitimciye katılın",
      ctaButton: "NeverCap'i Ücretsiz Dene",
        featuresTitle2: "Video Transkripsiyonu",
        grid: "Ses Dosyasından Çalışma Rehberine",
        useCasesTitle2: "Eğitim İhtiyacı İçin Mükemmel",
        testimonialTitle2: "50.000+ Eğitimci Tarafından"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "YouTube Videolarını MP4 Olarak İndir",
        "placeholder": "YouTube bağlantınızı buraya arayın veya yapıştırın",
        "clear_icon": "Girdiyi temizle",
        "Download": "İndir",
        "loading_text": "İndirme bağlantısı işleniyor. Sayfada kalın.",
        "howToDownload": "Nasıl indirilir?",
        "tutorial": "Eğitimi izleyin"
      },
      part2: {
        "title": "İşte bir YouTube videosunu indirilebilir MP4 dosyasına dönüştürmenin 3 kolay adımı",
        "steps": [
                {
                  title: "URL'yi kopyala",
                  content: "Hedef YouTube videonuzu açın, ardından tarayıcınızın adres çubuğundan bağlantıyı kopyalayın."
                },
                {
                  title: "Bağlantıyı yapıştır",
                  content: "Video indirme aracınıza gidin ve URL'yi giriş alanına yapıştırın."
                },
                {
                  title: "MP4'ü indir",
                  content: "İşlendikten sonra, MP4 dosyanızı kaydetmek için indirme düğmesine basın."
                }
              ]
      },
      part3: {
        content: [
                "Hiç YouTube videolarını çevrimdışı izlemeniz gerekti mi?",
                "Metroda seyahat ederken, uçakta uçarken, önemli bir eğitimi çalışırken, beceri geliştirme içeriklerine dalarken veya önemli video materyallerini arşivlerken—güvenilir çevrimdışı erişim yaygın bir sorundur. İşte burada indiricimiz öne çıkar.",
                "İndirici, YouTube videolarını hızlı ve kolayca MP4 formatına dönüştürerek indirmenizi sağlar. Onları cihazınıza kaydedin ve istediğiniz zaman izleyin.",
                "Süreç hızlı, basit ve sorunsuzdur. İndirdikten sonra, favori videolarınızı istediğiniz zaman ve yerde izleyin—internet gerekmez."
              ]
      },
      part4: {
        content: ["İşte indirmenin 5 büyük avantajı", "YouTube videolarını MP4 dosyaları olarak"],
        list: [
                {
                  title: "Veri Maliyetlerinden Tasarruf Edin:",
                  content: "Normalde, YouTube'da video izlemek önemli miktarda mobil veri tüketir. Çevrimdışı izlemek için indirerek bu gereksiz maliyetlerden kaçınabilirsiniz."
                },
                {
                  title: "Her Yerde, Her Zaman İzleyin:",
                  content: "Videolarınızı kesintisiz bir şekilde, hatta düzensiz internet bağlantılarında bile keyfini çıkarın. Artık buffering endişesi yok."
                },
                {
                  title: "Kolay Arşivleme & Saklama:",
                  content: "Videoları MP4 olarak kaydetmek, özellikle gerçekten değerli veya önemli bulduğunuz içerikler için kişisel koleksiyonunuzu oluşturmayı kolaylaştırır."
                },
                {
                  title: "Daha Basit Paylaşım:",
                  content: "Bir MP4 dosyasını paylaşmak, bir bağlantı göndermekten çok daha kolaydır. Video dosyasını doğrudan WhatsApp veya Instagram gibi uygulamalar üzerinden gönderebilir, YouTube'u açma adımını ortadan kaldırabilirsiniz."
                },
                {
                  title: "Anında İzleme, Paylaşılan Anlar:",
                  content: "Yakındaki arkadaşlarınıza veya ailenize favori bir videoyu heyecanla göstermek mi istiyorsunuz? MP4 indirildiğinde, hep birlikte sorunsuz bir şekilde hemen izleyebilirsiniz, yüklenmesini beklerken oluşan tuhaf duraklamalar olmadan."
                }
              ]
      },
      part5: {
        title: "İndiricimiz Neden Öne Çıkıyor?",
        cards: [
                {
                  title: "Tek tık kolaylığı",
                  content: "Zahmetsiz kurulum ve sezgisel kullanım."
                },
                {
                  title: "Aşırı hızlı, sınırsız",
                  content: "En yüksek hızda dönüştürün ve indirin — sınır yok, kısıtlama yok."
                },
                {
                  title: "Anında dönüştür",
                  content: "Dosyalarınızı anında işleyin, beklemeye gerek yok."
                },
                {
                  title: "Sıfır Reklam, Sıfır Dikkat Dağıtıcı",
                  content: "Açılır pencere, banner veya kesintiler olmadan temiz bir arayüzün keyfini çıkarın — sadece sorunsuz video dönüşümü."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Orijinal Kalite Garantisi",
                  content: "İndirmeleriniz, her seferinde piksel mükemmelliğinde oynatma için kaynak videonun tam çözünürlüğünü korur."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Her yerde çalışır",
                  content: "Herhangi bir tarayıcıda, herhangi bir cihazda tam uyumludur."
                }
              ]
      },
      part6: {
        title: ["YouTube Video İndirmelerinizi Maksimize Edin", "İndirici ile"],
        content: [
                "Zahmetsiz YouTube'dan MP4'e Dönüştürme: Hızlı, Basit & Ücretsiz.",
                "İşte burada mükemmelleşiyoruz. Kullanıcı dostu arayüzümüz herkes için tasarlandı — teknik beceri gerekmez. Deneyim seviyeniz ne olursa olsun, videoları anında dönüştürebilirsiniz. Kayıt gerekmez: İhtiyacınız olanı hemen alın.",
                "İçiniz rahat olsun — indirdiğiniz MP4'ler, YouTube'da izlediğiniz gibi orijinal video kalitesini ve netliğini korur.",
                "Çalıştığınız Her Yerde Çalışır. Tüm büyük platformlar ve cihazlarda tam uyumludur. Windows, macOS, Linux, Android veya iOS — akıllı telefon, tablet veya masaüstü kullanıyor olun — videoları sorunsuz bir şekilde indirebilirsiniz."
              ]
      },
      part7: {
        title: "YouTube Videolarını İndirme Hakkında Temel Sorular",
        list: [
                {
                  question: "Telif hakkı olan bir YouTube videosunu indirebilir miyim?",
                  answer: "Telif hakkı sahibinin izni olmadan telif hakkı olan YouTube videolarını indirmek yasa dışıdır."
                },
                {
                  question: "Bu indirme aracı güvenli mi?",
                  answer: "Evet, güvenli ve güvenilirdir. Kullanıcılardan herhangi bir kişisel bilgi talep etmiyoruz ve virüslere karşı güçlü önlemler alıyoruz. İnternetten dosya indirirken her zaman dikkatli olmanızı hatırlatırız: şüpheli bağlantılara tıklamaktan veya şüpheli dosyaları indirmekten kaçının."
                },
                {
                  question: "YouTube'dan MP4'e indirme hangi dilleri destekliyor?",
                  answer: "Hizmetimiz, YouTube videolarını tüm popüler dillerde indirmeyi destekler."
                },
                {
                  question: "Bir YouTube videosunun indirilme süresini hangi faktörler etkiler?",
                  answer: "En hızlı indirme deneyimini sağlamak için çaba gösterirken, indirme süresi aynı zamanda videonun uzunluğu ve internet bağlantı hızınız gibi faktörlerden de etkilenir."
                },
                {
                  question: "Akıllı telefonumla bir MP4 videosu indirdiğimde, nereye kaydedilir?",
                  answer: 'Akıllı telefonunuza bir MP4 indirdikten sonra, genellikle cihazınızın dosya yöneticisi uygulaması içindeki "Downloads" klasöründe bulabilirsiniz.'
                },
                {
                  question: "Bir YouTube videosunu MP4 olarak indirmek video kalitesini düşürür mü?",
                  answer: "Hayır. YouTube videolarını aracımızı kullanarak MP4 olarak indirmek, orijinal video kalitesini korur. Dönüştürme süreci kaynak kalitesini koruyarak, YouTube'dakiyle aynı izleme deneyimini elde etmenizi sağlar."
                }
              ]
      },
        err1: "YouTube bağlantı biçimi hatası.",
        err2: "Üzgünüz! Şu anda yalnızca YouTube bağlantıları ile çalışıyoruz. Diğer siteler için destek gerekiyorsa, gelecekte eklediğimizde sizi bilgilendireceğiz.",
        videoDownload: {
              title: "YouTube videolarını MP4 olarak indirin. Ücretsiz, hızlı ve reklamsız.",
              description: "Hizmetimizi seçtiğiniz için teşekkürler! Güveniniz bizim için çok değerli ve deneyiminizi geliştirdiğini umuyoruz. Web sitemizi arkadaşlarınızla paylaşırsanız çok yardımcı olursunuz.",
              downloadButton: "İndir",
              downloadError: "İndirme Hatası."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Sektör Lideri AI Teknolojisi",
      "title": "Hakkında",
      "highlighted_text": "NeverCap",
      "description": "Misyonumuz, en doğru ses ve video transkripsiyon hizmetlerini sunmaktır. Sektör lideri AI teknolojisini kullanarak %96'nın üzerinde transkripsiyon doğruluğu sağlıyoruz. Bazı büyük dillerde teknik optimizasyonla %99 doğruluk bile mümkün."
    },
    Stats: {
      "title": "Bizim",
      "highlighted_text": "Etkimiz",
      "subtitle": "İleri düzey AI teknolojisiyle küresel iletişimi güçlendiriyoruz",
      "metrics": [
            {
              "value": "%96+",
              "label": "Doğruluk Oranı",
              "description": "Gelişmiş AI ile sektör lideri transkripsiyon doğruluğu"
            },
            {
              "value": "100+",
              "label": "Desteklenen Diller",
              "description": "Küresel içerik için konuşma tanıma"
            },
            {
              "value": "249+",
              "label": "Çeviri Dilleri",
              "description": "Transkribe edilmiş metni neredeyse her dile çevirin"
            }
          ]
    },
    Mission: {
      "title": "Neden",
      "highlighted_text": "NeverCap?",
      "subtitle": "Dil engellerini kırmaya ve içeriği herkes için erişilebilir hale getirmeye inanıyoruz",
      "features": [
            {
              "icon": "🎯",
              "title": "Rakipsiz Doğruluk",
              "description": "AI modellerimiz sürekli geliştirilerek %96'nın üzerinde transkripsiyon doğruluğu sunar. İleri optimizasyonla bazı büyük dillerde %99'a ulaşır."
            },
            {
              "icon": "🌍",
              "title": "Küresel Dil Desteği",
              "description": "100+ dilde konuşma tanıma ve 249+ dilde çeviri desteğiyle içeriğinizi gerçekten küresel yapın."
            },
            {
              "icon": "⚡",
              "title": "Yıldırım Hızında İşlem",
              "description": "Saatler süren ses ve video içeriğini dakikalar içinde işleyin. Optimize edilmiş AI altyapımız, kaliteden ödün vermeden hızlı transkripsiyon sağlar."
            },
            {
              "icon": "🔒",
              "title": "Kurumsal Düzeyde Güvenlik",
              "description": "Veri güvenliğiniz önceliğimizdir. Sektör standartlarında şifreleme ve küresel gizlilik düzenlemelerine uyumla içeriğinizi güvende tutarız."
            }
          ]
    },
    Company: {
      "title": "Şirket",
      "highlighted_text": "Bilgileri",
      "subtitle": "Soru veya destek için bizimle iletişime geçin",
      "details": [
            {
              "label": "Şirket Adı",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Genel Merkez",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Amerika Birleşik Devletleri"]
            },
            {
              "label": "Bize Ulaşın",
              "value": ["E-posta", "24/7 destek mevcut"]
            }
          ]
    },
    CTA: {
      "title": "Farkı Denemeye Hazır mısınız?",
      "subtitle": "Transkripsiyon ihtiyaçları için NeverCap'a güvenen binlerce profesyonel arasına katılın",
      "button": "NeverCap Ücretsiz Deneyin →",
      "disclaimer": "Kredi kartı gerekmez • Saniyeler içinde transkripsiyona başlayın"
    }
  },
  Privacy: {
    title: "Gizlilik",
    titleGradient: "Politika",
    subtitle: "Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin",
    "lastUpdated": "Son güncelleme: {date}",
    "lastUpdatedDate": "21 Temmuz 2025",
    "privacyPolicyTitle": "Gizlilik Politikası",
    "policyAgreement": "Lütfen bu Gizlilik Politikasını dikkatlice okuyun ve anladığınızdan emin olun. Hizmetlerimizden herhangi birini kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Kişisel verilerinizin bu Politika doğrultusunda kullanılmasını kabul etmiyorsanız, Hizmetlerimizi derhal kullanmayı bırakmalısınız.",
    "policyOverview": "Bu politikada şunları açıklıyoruz: hangi verileri topladığımız ve neden; verilerinizin nasıl işlendiği; ve verilerinizle ilgili haklarınız. Verilerinizi satmıyoruz.",
    "scopeTitle": "1. Bu Gizlilik Politikasının Kapsamı",
    "scopeDescription": "Bu Gizlilik Politikası yalnızca Hizmetlerin kullanıcıları hakkındaki bilgilerin toplanması ve işlenmesi için geçerlidir. Bu Gizlilik Politikası, bize bağlantı veren üçüncü taraflar tarafından işletilen herhangi bir hizmet, web sitesi veya yazılım için geçerli değildir (bu bağlantıları biz sağlasak da diğer kullanıcılar paylaşsa da) ve üçüncü taraflardan gelen içerik, veri, uygulama veya materyaller için de geçerli değildir. Herhangi bir üçüncü taraf web sitesine veya yazılıma bilgi sağlamadan önce gizlilik politikalarını kontrol etmenizi öneririz.",
    "collectionTitle": "2. Ne topladığımız ve neden",
    "collectionPrinciple": "Temel prensibimiz yalnızca ihtiyacımız olanı toplamaktır. İşte pratikte bu ne anlama geliyor:",
    "identityTitle": "2.1 Kimlik ve erişim",
    "identityDescription": "Ürünlerimizden birine kaydolduğunuzda, adınız, e-posta adresiniz gibi tanımlayıcı bilgiler isteriz. Bu, temel ürün işlevselliğini sağlamak ve size ürün güncellemeleri ve diğer temel bilgileri gönderebilmemiz içindir.",
    "billingTitle": "2.2 Faturalama bilgileri",
    "billingDescription": "Ücretli bir ürüne kaydolursanız, ödeme bilgilerinizi ve fatura adresinizi sağlamanız istenecektir. Ödeme bilgileri doğrudan ödeme işlemcimize iletilir ve sunucularımıza ulaşmaz.",
    "productInteractionsTitle": "2.3 Ürün etkileşimleri",
    "productInteractionsDescription": "Ürün hesaplarınıza yüklediğiniz, aldığınız veya sakladığınız içeriği sunucularımızda depolarız. Bu içeriği silmediğiniz sürece, hesabınız aktif olduğu sürece bu içeriği saklayabiliriz.",
    "websiteInteractionsTitle": "2.4 Web sitesi etkileşimleri",
    "websiteInteractionsDescription": "Dönüşüm oranı testleri ve yeni ürün tasarımları denemek gibi analiz ve istatistiksel amaçlarla tarama aktiviteniz hakkında bilgi toplarız. Bu, örneğin tarayıcı ve işletim sistemi sürümleriniz, IP adresiniz, hangi web sayfalarını ziyaret ettiğiniz ve ne kadar sürede yüklendikleri ve sizi bize yönlendiren web sitesini içerir. Bir hesabınız varsa ve oturum açtıysanız, bu web analiz verileri hesabınız artık aktif olmayana kadar IP adresiniz ve kullanıcı hesabınızla ilişkilendirilir.",
    "cookiesTitle": "2.5 Çerezler",
    "cookiesDescription1": "Ayrıca, belirli tercihleri saklamak, uygulamalarımızı kullanmanızı kolaylaştırmak ve A/B testleri yapmak ve bazı analizleri desteklemek için kalıcı birinci taraf çerezleri ve bazı üçüncü taraf çerezleri kullanırız.",
    "cookiesDescription2": "Bir çerez, tarayıcınız tarafından saklanan bir metin parçasıdır. Giriş bilgilerini ve site tercihlerini hatırlamaya yardımcı olabilir. Ayrıca tarayıcı türünüz, işletim sisteminiz, ziyaret edilen web sayfaları, ziyaret süresi, görüntülenen içerik ve diğer tıklama akışı verileri gibi bilgileri toplayabilir. Çerez saklama ayarlarınızı tarayıcı ayarlarınızda düzenleyebilir ve bireysel çerezleri kabul edebilir veya engelleyebilirsiniz, ancak çerezleri kapatırsanız uygulamalarımız çalışmayabilir ve hizmetimizin diğer yönleri düzgün çalışmayabilir.",
    "correspondenceTitle": "2.6 Gönüllü yazışmalar",
    "correspondenceDescription": "Bize bir soru sormak veya yardım istemek için e-posta gönderdiğinizde, gelecekte tekrar iletişime geçerseniz başvurmak için geçmiş yazışma geçmişimiz olması amacıyla e-posta adresiniz dahil bu yazışmayı saklarız.",
    "accessTitle": "3. Bilgilerinize ne zaman erişir veya paylaşırız",
    "accessDescription1": "Talep ettiğiniz ürün veya hizmetleri sağlamak için. Uygulamalarımızı çalıştırmak ve size Hizmetleri sağlamak için bazı üçüncü taraf alt işlemciler kullanırız. Bu, bulut ve analiz sağlayıcılarını içerir.",
    "accessDescription2": "Kötüye kullanımı araştırmak, önlemek veya harekete geçmek için. Potansiyel kötüye kullanımı araştırırken bir müşterinin hesabına erişmek son çaredir. Hem müşterilerimizin hem de bize sorun bildiren kişilerin gizliliğini ve güvenliğini korumak istiyoruz ve bu sorumlulukları süreç boyunca dengelemek için elimizden geleni yapıyoruz. Ürünlerimizi kısıtlı bir amaç için kullandığınızı keşfedersek, gerekli olduğunda uygun makamlara bildirimde bulunmak dahil gerekli önlemleri alacağız.",
    "accessDescription3": "Yürürlükteki yasa gereği olduğunda.",
    "dataRequests": "Kullanıcı verisi talepleri. Politikamız, yasal süreç zorunlu kılmadıkça veya acil bir durum talebi olması gibi sınırlı koşullar dışında, hükümetlerin kullanıcı verisi taleplerine yanıt vermemektir. Ancak, ABD kolluk kuvvetleri yetkilileri veri paylaşmamızı gerektiren gerekli arama emri, cezai celp veya mahkeme emrine sahipse, uymak zorundayız. Benzer şekilde, ABD dışındaki hükümet yetkililerinin taleplerine yalnızca ABD hükümeti tarafından karşılıklı hukuki yardım anlaşması veya sözleşmesinde özetlenen prosedürlerle zorlanırsa yanıt vereceğiz. Politikamız, yasal olarak yasaklanmadığımız ve bazı acil durumlar dışında, veri paylaşmadan önce etkilenen kullanıcıları bilgilendirmektir.",
    "preservationRequests": "Veri saklama talepleri. Benzer şekilde, politikamız yalnızca ABD Federal Saklı İletişim Yasası, 18 U.S.C. Bölüm 2703(f) veya medeni konular için uygun şekilde tebliğ edilen bir ABD celbi ile zorlanırsa veri saklama taleplerine uymaktır. Saklanan verileri yasa gerektirmedikçe veya itiraz etmemeyi seçtiğimiz bir mahkeme emri zorlamadıkça paylaşmayız. Ayrıca, gerekli saklama süresi dolmadan önce uygun bir arama emri, mahkeme emri veya celp almazsak, saklama süresi sonunda müşteri verilerinin saklanan kopyalarını imha edeceğiz.",
    "taxAudits": "Bir vergi dairesi tarafından denetlenirsek, faturalama ile ilgili bilgileri paylaşmamız gerekebilir. Bu olursa, yalnızca fatura adresleri ve vergi muafiyet bilgileri gibi minimum gerekeni paylaşacağız.",
    "securityTitle": "4. Verilerinizi nasıl güvence altına alıyoruz",
    "securityDescription": "Tüm veriler sunucularımızdan tarayıcınıza iletilirken SSL/TLS ile şifrelenir.",
    "deletionTitle": "5. İçeriğinizi sildiğinizde ne olur",
    "deletionDescription": "Herhangi bir içeriği silerseniz, hemen erişilemez hale gelir.",
    "locationTitle": "6. Site ve verilerin konumu",
    "locationDescription": "Ürünlerimiz ve diğer web varlıklarımız Amerika Birleşik Devletleri'nde işletilmektedir. Avrupa Birliği, İngiltere veya Amerika Birleşik Devletleri dışında başka bir yerde bulunuyorsanız, lütfen bize sağladığınız herhangi bir bilginin Amerika Birleşik Devletleri'ne aktarılacağını ve burada saklanacağını unutmayın. Web sitelerimizi veya Hizmetlerimizi kullanarak ve/veya bize kişisel bilgilerinizi sağlayarak bu aktarımı kabul etmiş olursunuz.",
    "childrenTitle": "7. Çocukların Gizliliği",
    "updatesTitle": "8. Bu Gizlilik Politikasındaki Güncellemeler",
    "updatesDescription": "İlgili düzenlemelere uymak ve yeni uygulamaları yansıtmak için bu politikayı gerektiğinde güncelleyebiliriz. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üstündeki tarihi yenileyeceğiz.",
    "contactTitle": "9. Bize Ulaşın",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "adresinden",
      policyDescription: `Bu Politika, NeverCap'in (bundan sonra \"NeverCap\", \"biz\", \"bizim\" olarak anılacaktır) hizmetlerimizi, web sitelerimizi ({url}) ve yazılımlarımızı (topluca \"Hizmetler\") kullandığınızda kişisel bilgilerinizi nasıl topladığını, kullandığını ve açıkladığını anlatır.`,
      childrenDescription: "Hizmetler çocuklara yönelik değildir ve bilerek 13 yaşın altındaki çocuklardan Kişisel Bilgi toplamayız. 13 yaşın altındaysanız, lütfen Hizmetler aracılığıyla herhangi bir kişisel bilgi göndermeyin. Bir çocuğun bu Politikayı ihlal ederek bize Kişisel Bilgi sağladığını düşünüyorsanız, lütfen aşağıda belirtilen {at} {email} adresinden bizimle iletişime geçin.",
      contactDescription: "Gizlilik Politikamız hakkında herhangi bir sorunuz, yorumunuz veya şikayetiniz varsa, lütfen bizimle {at} {email} adresinden iletişime geçin ve şikayetinizi en kısa sürede ele almaya çalışacağız."
},
  TermsOfUse: {
    title: "Kullanım",
    titleGradient: "Koşulları",
    subtitle: "Hizmetlerimizi kullanmadan önce lütfen bu şartları dikkatlice okuyun",
    "lastUpdated": "Son güncelleme: {date}",
    "lastUpdatedDate": "21 Temmuz 2025",
    "termsOfServiceTitle": "Hizmet Şartları",
    "thankYou": "Ürünlerimizi kullandığınız için teşekkür ederiz!",
    "companyDefinition": `Bu belgede \"Şirket\", \"biz\", \"bizim\" veya \"bize\" dediğimizde, NeverCap'i kastediyoruz.`,
    "servicesDefinition": '\"Hizmetler\" dediğimizde, NeverCap tarafından oluşturulan ve sürdürülen, bir web tarayıcısı, masaüstü uygulaması, mobil uygulama veya başka bir formatta sunulan herhangi bir ürünü kastediyoruz.',
    "termsUpdate": "Bu Hizmet Şartlarını gelecekte güncelleyebiliriz. Genellikle bu değişiklikler, ilgili genişletilmiş bir politikaya bağlantı vererek bazı şartları netleştirmek içindir. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üstündeki tarihi yenileyeceğiz ve hesap sahiplerini bilgilendirmek için uygun adımları atacağız.",
    "acceptanceTitle": "1. Sözleşmeyi Kabul",
    "acceptanceDescription1": "Hizmetlerimizi kullanarak, bu Sözleşmeyi kabul ettiğinizi ve böylece sizinle NeverCap arasında bağlayıcı bir sözleşme oluştuğunu belirtmiş olursunuz. Bu Şartları kabul etme hukuki yeteneğinizin olduğunu beyan eder ve bağlayıcı bir sözleşme oluşturmak için yasal yaşta olduğunuzu teyit edersiniz. NeverCap'in kabulü, bu Sözleşmenin tüm şart ve koşullarını kabul etmenize açıkça bağlıdır.",
    "eligibilityRequirement": "Hizmetler, 18 yaşın altındaki kişiler için tasarlanmamıştır ve kullanılmamalıdır. Hizmetleri kullanarak, yukarıdaki uygunluk şartını karşıladığınızı beyan ve taahhüt edersiniz.",
    "userResponsibility": '\"Siz\", \"sizin\", \"kendiniz\" terimleri, çalışanlarınızı, temsilcilerinizi, iş ilişkilerinizi ve Hesabınız (aşağıda tanımlandığı gibi) üzerinden Hizmetlere erişim sağladığınız diğer kişileri de kapsar. Hesabınız üzerinden Hizmetlere erişen tüm kişilerin bu Şartları bildiğinden ve bunlara uyduğundan emin olmak sizin sorumluluğunuzdadır.',
    "termsRevision": "NeverCap, bu Şartları kendi takdirine bağlı olarak zaman zaman gözden geçirme ve güncelleme hakkını saklı tutar. Tüm değişiklikler yayınlandığında derhal yürürlüğe girer. Değiştirilmiş Şartların yayınlanmasının ardından Hizmetleri kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz ve bunlarla bağlı olduğunuz anlamına gelir. Değişikliklerden haberdar olmak için bu sayfayı zaman zaman kontrol etmeniz beklenir, çünkü bunlar sizi bağlar.",
    "servicesTitle": "2. NeverCap'in Hizmetleri",
    "servicesDescription1": "Hizmetlerimiz, kullanıcıların sesli konuşmaları aranabilir, çevrilebilir ve başkalarıyla paylaşılabilir metinlere dönüştürmesini sağlar.",
    "servicesOptions": 'Hizmetlerin ücretsiz sürümünü (\"Ücretsiz Hizmetler\") veya ücret ödemeniz gerekebilen abonelik tabanlı ücretli sürümünü (\"Ücretli Hizmetler\") kullanmayı seçebilirsiniz.',
    "servicesAccess": "Hizmetleri size sunacağız. Hizmetlere erişebilmeniz için gerekli tüm düzenlemeleri yapmak sizin sorumluluğunuzdadır.",
    "accountTermsTitle": "3. Hesap Şartları",
    "accountSecurity": "Hesabınızın güvenliğini sağlamak sizin sorumluluğunuzdadır. Şirket, bu güvenlik yükümlülüğünü yerine getirmemenizden kaynaklanan herhangi bir kayıp veya hasardan sorumlu tutulamaz ve tutulmayacaktır.",
    "lawfulUse": "Hizmetleri yasa dışı, etik dışı veya ahlak dışı herhangi bir amaç için kullanamazsınız.",
    "contentResponsibility": "Hesabınız altında gönderilen tüm içeriklerden ve gerçekleşen faaliyetlerden siz sorumlusunuz. Bu, şu kişiler tarafından gönderilen içerikleri de kapsar: (a) giriş bilgilerinize erişimi olanlar; veya (b) hesabınız altında kendi giriş bilgileri olanlar.",
    "humanRequirement": 'Bir insan olmalısınız. \"Botlar\" veya diğer otomatik yöntemlerle kayıt olan hesaplara izin verilmez.',
    "paymentTitle": "4. Ödeme, İadeler ve Plan Değişiklikleri",
    "freeTrial": "Ücretsiz deneme sunan ücretli Hizmetler için, kayıt olduğunuzda deneme süresinin uzunluğunu açıklarız. Deneme süresinden sonra, Hizmeti kullanmaya devam etmek için önceden ödeme yapmanız gerekir. Ödeme yapmazsanız, bu hizmetler sona erer.",
    "upgradePolicy": "Ücretsiz bir plandan ücretli bir plana geçiş yapıyorsanız, kartınızı hemen tahsil ederiz ve fatura döngünüz yükseltme gününde başlar.",
    "taxes": "Tüm ücretler, vergi otoriteleri tarafından uygulanan vergiler, harçlar veya resimler hariçtir. Gerektiğinde, bu vergileri vergi otoritesi adına tahsil edip vergi otoritelerine ödeyeceğiz. Aksi takdirde, tüm vergiler, harçlar veya resimlerin ödemesinden siz sorumlusunuz.",
    "refunds": "Tüm satın alımlar iade edilemez. Hesabınıza giriş yaparak ücretli hizmetleri istediğiniz zaman iptal edebilirsiniz. Ücretli abonelikler için, aksi belirtilmedikçe iptaliniz mevcut ücretli dönemin sonunda geçerli olacaktır.",
    "cancellationTitle": "5. İptal ve Fesih",
    "cancellationPolicy": "Ödenmiş sürenin bitiminden önce Hizmeti iptal ederseniz, iptaliniz derhal geçerli olacak ve tekrar ücretlendirilmeyeceksiniz. Son fatura döngüsündeki kullanılmayan süreyi otomatik olarak orantılı olarak iade etmeyiz.",
    "terminationRights": "Herhangi bir nedenle ve herhangi bir zamanda hesabınızı askıya alma veya sonlandırma ve Hizmetlerimizin şu anki veya gelecekteki kullanımını reddetme hakkımız vardır. Askıya alma, hesaba veya hesaptaki herhangi bir içeriğe erişemeyeceğiniz anlamına gelir. Sonlandırma, ayrıca hesabınızın veya hesabınıza erişiminizin silinmesine ve hesabınızdaki tüm içeriğin kaybına ve feragat edilmesine yol açar. Ayrıca, herhangi bir nedenle ve herhangi bir zamanda herhangi bir kişinin Hizmetleri kullanmasını reddetme hakkını saklı tutarız. Bu maddeyi istatistiksel olarak, Hizmetlerimizdeki yüz binlerce hesaptan en az birinin kötü niyetli bir şey yapması nedeniyle ekliyoruz.",
    "abusePolicy": "Şirket çalışanına veya yetkilisine sözlü, fiziksel, yazılı veya başka türlü kötü muamele (kö",
    "submissionsTitle": "6. Gönderimler",
    "submissionsDescription": 'Site ile ilgili herhangi bir soru, yorum, öneri, fikir, geri bildirim veya diğer bilgilerin (\"Gönderimler\") tarafınızca bize sağlanmasının gizli olmadığını ve bunların münhasır mülkiyetimiz haline geleceğini kabul ve beyan edersiniz. Tüm fikri mülkiyet hakları dahil olmak üzere münhasır haklara sahip olacağız ve bu Gönderimleri herhangi bir yasal amaç için, ticari veya başka türlü, size herhangi bir bildirim veya tazminat ödemeksizin sınırsız kullanma ve yayma hakkına sahip olacağız. Bu Gönderimlerle ilgili tüm manevi haklarınızdan feragat edersiniz ve bu Gönderimlerin size özgü olduğunu veya bu tür Gönderimleri yapma hakkınızın bulunduğunu garanti edersiniz. Gönderimlerinizdeki herhangi bir mülkiyet hakkının iddia edilen veya fiili ihlali veya kötüye kullanımı nedeniyle bize karşı herhangi bir başvuru yapılmayacağını kabul edersiniz.',
    "uptimeTitle": "7. Çalışma Süresi ve Güvenlik",
    "serviceAvailability": 'Hizmetleri kullanmanız tamamen kendi riskinizde olmaktadır. Bu Hizmetleri \"olduğu gibi\" ve \"mevcut olduğu şekilde\" sunuyoruz. Hizmetlerimizin çoğu için hizmet düzeyi anlaşmaları sunmuyoruz, ancak uygulamalarımızın çalışma süresini ciddiye alıyoruz.',
    "throttlingPolicy": "Bir kullanıcının faaliyetinin diğer kullanıcılar için Hizmetin kararlılığını ve performansını olumsuz etkilediğinin doğrulandığı nadir durumlarda hesap erişimini geçici olarak kısıtlama veya sınırlama hakkını saklı tutarız. En kritik durumlar dışında, önlem almadan önce çözüm bulmak için sizinle iletişime geçeceğiz.",
    "dataSecurity": "Verilerinizi yedekler, yedeklilikler ve şifreleme yoluyla korumak ve güvence altına almak için birçok önlem alırız. Genel İnternet üzerinden veri aktarımı için şifrelemeyi zorunlu kılarız.",
    "thirdPartyVendors": "Hizmetleri çalıştırmak için gerekli donanım, yazılım, ağ, depolama ve ilgili teknolojiyi sağlamak amacıyla üçüncü taraf satıcılar ve barındırma ortakları kullanırız.",
    "siteManagementTitle": "8. Site Yönetimi",
    "siteManagementDescription": "Aşağıdaki haklara sahibiz ancak yükümlü değiliz: (1) Site'yi bu Hizmet Şartları'nın ihlalleri açısından izlemek; (2) münhasır takdirimize göre yasaları veya bu Hizmet Şartları'nı ihlal eden herkese karşı, bu kullanıcıyı kolluk kuvvetlerine bildirmek dahil ancak bununla sınırlı olmaksızın, uygun yasal işlem başlatmak; (3) münhasır takdirimize göre ve sınırlama olmaksızın, Katkılarınızın tamamını veya herhangi bir bölümünü reddetmek, erişimi kısıtlamak, kullanılabilirliğini sınırlamak veya (teknolojik olarak mümkün olduğu ölçüde) devre dışı bırakmak; (4) münhasır takdirimize göre ve bildirim veya sorumluluk olmaksızın, boyut olarak aşırı olan veya sistemlerimiz için herhangi bir şekilde yük oluşturan tüm dosya ve içerikleri Site'den kaldırmak veya başka türlü devre dışı bırakmak; ve (5) Site'yi haklarımızı ve mülkiyetimizi korumak ve Site'nin düzgün işleyişini kolaylaştırmak için tasarlanmış bir şekilde yönetmek.",
    "copyrightTitle": "9. Telif Hakkı ve İçerik Sahipliği",
    "copyrightCompliance": "Hizmetlerde yayınlanan tüm içerikler ABD telif hakkı yasalarına uymalıdır.",
    "ipRights": "Hizmetlere sağladığınız materyaller üzerinde herhangi bir fikri mülkiyet hakkı iddia etmiyoruz. Yüklenen tüm materyaller size aittir.",
    "contentModeration": "İçerikleri önceden incelemiyoruz, ancak Hizmet aracılığıyla sunulan herhangi bir içeriği münhasır takdirimize göre reddetme veya kaldırma hakkını (ancak yükümlülüğünü değil) saklı tutarız.",
    "prohibitedExploitation": "Şirket'ten yazılı izin almadan Hizmetlerin herhangi bir bölümünü çoğaltmamayı, kopyalamayı, satmayı, yeniden satmayı veya kullanmayı, Hizmetleri kullanmayı veya Hizmetlere erişimi sömürmemeyi kabul edersiniz.",
    "impersonationProhibition": "Başka bir web sitesini Hizmetler veya Şirket ile ilişkili olduğunu yanlış bir şekilde ima edecek şekilde değiştirmemelisiniz.",
    "dmcaPolicy": "Başkalarının fikri mülkiyet haklarına saygı duyarız. Site'de veya Site aracılığıyla sunulan herhangi bir materyalin sahip olduğunuz veya kontrol ettiğiniz herhangi bir telif hakkını ihlal ettiğine inanıyorsanız, lütfen derhal bizimle iletişime geçin. Bildiriminizin bir kopyası, Bildirimde belirtilen materyali yayınlayan veya depolayan kişiye gönderilecektir. Yürürlükteki yasalar uyarınca bir Bildirimde maddi yanlış beyanlar yapmanız durumunda zararlardan sorumlu tutulabileceğinizi lütfen unutmayın. Bu nedenle, Site'de bulunan veya Site tarafından bağlantı verilen materyalin telif hakkınızı ihlal ettiğinden emin değilseniz, önce bir avukatla iletişime geçmeyi düşünmelisiniz.",
    "prohibitedActivitiesTitle": "10. Yasaklanan Faaliyetler",
    "generalProhibition": "Site'ı, onu kullanıma sunduğumuz amaç dışında herhangi bir amaçla erişemez veya kullanamazsınız. Site, bizim özel olarak onayladığımız veya desteklediğimiz girişimler dışında herhangi bir ticari faaliyetle bağlantılı olarak kullanılamaz.",
    "userObligations": "Site'nin bir kullanıcısı olarak, aşağıdakileri yapmayacağınızı kabul edersiniz:",
    "dataScraping": "Yazılı iznimiz olmadan, doğrudan veya dolaylı olarak bir koleksiyon, derleme, veritabanı veya dizin oluşturmak için Site'den sistematik olarak veri veya diğer içerikleri almayın.",
    "fraud": "Bizi ve diğer kullanıcıları özellikle hassas hesap bilgilerini (kullanıcı şifreleri gibi) öğrenme girişimlerinde aldatmayın, dolandırmayın veya yanıltmayın.",
    "securityInterference": "Site'nin güvenlikle ilgili özelliklerini (içeriğin kullanımını veya kopyalanmasını engelleyen veya kısıtlayan özellikler dahil) atlatmayın, devre dışı bırakmayın veya başka şekilde müdahale etmeyin.",
    "defamation": "Bize ve/veya Site'ye zarar verecek şekilde küçük düşürücü, itibar zedeleyici veya zarar verici davranışlarda bulunmayın.",
    "harassment": "Site'den elde edilen herhangi bir bilgiyi başka bir kişiyi taciz etmek, kötüye kullanmak veya zarar vermek için kullanmayın.",
    "supportAbuse": "Destek hizmetlerimizi uygunsuz şekilde kullanmayın veya yanlış kötüye kullanım veya yanlış davranış raporları göndermeyin.",
    "legalCompliance": "Site'yi uygulanabilir yasa ve düzenlemelere aykırı şekilde kullanmayın.",
    "framingProhibition": "Site'ye izinsiz çerçeveleme (framing) veya bağlantı verme (linking) yapmayın.",
    "malware": "Virüs, Truva atı veya büyük harf aşırı kullanımı ve spam (tekrarlayan metinlerin sürekli gönderimi) gibi, herhangi bir tarafın Site'yi kesintisiz kullanımını ve keyfini bozan veya Site'nin işlevlerini değiştiren, bozan materyaller yüklemeyin (veya yüklemeye çalışmayın).",
    "automation": "Otomatik sistem kullanımında bulunmayın (betiklerle yorum/mesaj göndermek, veri madenciliği araçları kullanmak gibi).",
    "copyrightRemoval": "Herhangi bir içerikten telif hakkı veya diğer mülkiyet hakları bildirimini silmeyin.",
    "impersonation": "Başka bir kullanıcıyı veya kişiyi taklit etmeye çalışmayın veya başka bir kullanıcının adını kullanmayın.",
    "spyware": "Pasif/aktif bilgi toplama veya iletim mekanizması görevi gören materyaller (ör. gifler, pikseller, çerezler, casus yazılımlar) yüklemeyin (veya yüklemeye çalışmayın).",
    "disruption": "Site'ye veya bağlı ağlara aşırı yük bindirecek şekilde müdahale etmeyin veya kesintiye uğratmayın.",
    "employeeHarassment": "Size Site hizmeti sağlayan çalışanlarımızı taciz etmeyin, rahatsız etmeyin veya tehdit etmeyin.",
    "accessCircumvention": "Site'nin erişimi engellemek veya kısıtlamak için aldığı önlemleri atlatmaya çalışmayın.",
    "codeCopying": "Site yazılımını (Flash, PHP, HTML, JavaScript veya diğer kodlar dahil) kopyalamayın veya uyarlamayın.",
    "reverseEngineering": "Yürürlükteki yasaların izin verdiği durumlar dışında, Site'nin yazılımını tersine mühendislikle çözmeyin, ayrıştırmayın veya deşifre etmeyin.",
    "bots": "Standart arama motoru veya tarayıcı kullanımı dışında, Site'ye erişen otomatik sistemler (ör. örümcekler, robotlar, cheat araçları) geliştirmeyin veya dağıtmayın.",
    "buyingAgents": "Site'de alışveriş yapmak için satın alma aracısı kullanmayın.",
    "unauthorizedUse": "Kullanıcı adlarını/email adreslerini izinsiz toplamak veya sahte hesaplar oluşturmak gibi Site'yi yetkisiz şekilde kullanmayın.",
    "competition": "Site'yi bizimle rekabet etmek veya gelir getirici faaliyetlerde kullanmayın.",
    "advertising": "Site'yi mal/hizmet satışı için reklam platformu olarak kullanmayın.",
    "profileTransfer": "Profilinizi satmayın veya devretmeyin.",
    "featuresTitle": "11. Özellikler ve Hatalar",
    "featuresDescription": "Hizmetlerimizi özenle tasarlıyoruz ancak herkesi memnun edecek bir hizmet yoktur. Hizmetlerimizin özel beklentilerinizi karşılayacağına dair garanti vermiyoruz.",
    "bugsDescription": "Tüm özellikleri yayınlamadan önce test ediyoruz ancak her yazılım gibi hatalar olabilir. Güvenlikle ilgili hataları önceliklendiriyoruz ancak tüm hatalar düzeltilmeyebilir.",
    "correctionsTitle": "12. Düzeltmeler",
    "informationAccuracy": "Site'de yazım hataları, yanlış bilgiler veya eksiklikler (fiyatlandırma, ürün bilgileri vb.) bulunabilir. Bu bilgileri önceden haber vermeden düzeltme hakkımız saklıdır.",
    "siteAvailability": "Site'nin kesintisiz erişilebilir olacağını garanti edemeyiz. Donanım/yazılım sorunları veya bakım çalışmaları nedeniyle kesintiler yaşanabilir. Site'yi herhangi bir zamanda değiştirme, askıya alma veya sonlandırma hakkımız vardır.",
    "userDataTitle": "13. Kullanıcı Verileri",
    "userDataDescription": "Site performansını yönetmek için ilettiğiniz verileri saklarız ancak verilerinizin yedeklenmesinden siz sorumlusunuz. Veri kaybı veya bozulmasından dolayı sorumluluk kabul etmiyoruz.",
    "privacyPolicyTitle": "14. Gizlilik Politikası",
    "liabilityTitle": "15. Sorumluluk",
    "liabilityIntroduction": "Sorumlulukla ilgili tüm detaylar bu bölümdedir:",
    "liabilityWaiver": "Şirket, (1) Hizmetlerin kullanılamaması, (2) içerik hataları, (3) kişisel/zimmet zararı, (4) alternatif ürün maliyetleri, (5) yetkisiz sunucu erişimi, (6) iletişim kesintileri, (7) virüs/böcekler, (8) içerik hataları, (9) üçüncü şahıs davranışları veya (10) sözleşme ihlali nedeniyle oluşan hiçbir zarardan sorumlu değildir.",
    "miscellaneousTitle": "16. Çeşitli Hükümler",
    "miscellaneousDescription": "Bu Hükümler tam anlaşmayı oluşturur. Haklarımızı kullanmamamız feragat sayılmaz. Yürürlükten kaldırılan maddeler diğer hükümleri etkilemez. Elektronik formatta olması itiraz nedeni olamaz.",
    "contactTitle": "17. Bize Ulaşın",
    "neverCap": "NeverCap",
    "site": "Site",
    "services": "Hizmetler",
    at: "adresinden",
      trademarkProtection: "Hizmetlerin adları, görünümü ve hissi Şirketin telif hakkı© altındadır. Tüm hakları saklıdır. Şirketten açık yazılı izin alınmadıkça HTML, CSS, JavaScript veya görsel tasarım öğelerinin herhangi bir bölümünü çoğaltamaz, kopyalayamaz veya yeniden kullanamazsınız. Şirketin logosunu veya herhangi bir Hizmet logosunu tanıtım amaçlı kullanmak için izin almalısınız. Logo kullanım isteklerini lütfen {at} {email} adresine e-posta ile gönderin. Hizmet Şartlarını ihlal etmeniz durumunda bu izni geri çekme hakkını saklı tutarız.",
      privacyPolicyDescription: "Veri gizliliği ve güvenliğine önem veriyoruz. Lütfen {policy}'mizi inceleyin. Siteyi kullanarak, bu Hizmet Şartlarına dahil edilen Gizlilik Politikamızla bağlı olmayı kabul edersiniz. Sitenin Amerika Birleşik Devletleri'nde barındırıldığını lütfen unutmayın. Siteye, kişisel veri toplama, kullanma veya açıklama konusunda Amerika Birleşik Devletleri'ndeki uygulanabilir yasalardan farklı yasa veya diğer gereklilikleri olan dünyanın herhangi bir başka bölgesinden erişiyorsanız, Siteyi kullanmaya devam etmekle verilerinizi Amerika Birleşik Devletleri'ne aktarıyor ve verilerinizin Amerika Birleşik Devletleri'ne transfer edilerek işlenmesini kabul ediyorsunuz.",
      contactDescription: "Hizmet Şartları hakkında bir sorunuz varsa, lütfen bizimle {at} {email} adresinden iletişime geçin."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
