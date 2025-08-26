// 波兰语
let message = {
  // Strona główna
  HomePage: {
    home: "Wszystkie Transkrypcje",
    times:
      "{times} darmowych transkrypcji dziennie, {left} pozostało dzisiaj. ",
    tips: "Przejdź na Pro, aby uzyskać nieograniczone transkrypcje.",
    update: "Ulepsz teraz",
    rename: "Zmień nazwę",
    delete: "Usuń",
    cancel: "Anuluj",
    confirm: "Utwórz",
    dialogLabel: "Nazwa folderu",
    recently: "Ostatnie pliki",
    loading: "Ładowanie",
    tour: {
      step0: {
        title: "Witamy w {name}",
        tip: "Tutaj możesz:",
        content:
          "Transkrybować pojedyncze rozmowy, spotkania, wykłady i więcej",
        next: "Rozpocznij"
      },
      step1: {
        title: "Transkrybuj pliki",
        content:
          "Obsługuje trzy metody transkrypcji: pliki lokalne, linki i nagrania."
      },
      step2: {
        title: "Utwórz folder",
        content: 'Kliknij "+" aby utworzyć folder i zorganizować swoje pliki.'
      },
      step3: {
        title: "Przeglądaj szczegóły transkrypcji i edytuj",
        content:
          "Kliknij element, aby zobaczyć szczegóły transkrypcji, edytować i tłumaczyć."
      },
      next: "dalej",
      finish: "Rozumiem"
    },
    export: {
      export: "Eksportuj",
      title: "Generujemy Twój eksport",
      title2: "Twój plik jest gotowy",
      singleLoadingContent: "1 plik jest kompresowany.",
      singleSuccessContent: "1 plik został skompresowany.",
      loadingContent: "{num} plików jest kompresowanych.",
      successContent: "{num} plików zostało skompresowanych.",
      cancel: "Anuluj eksport",
      error: "Błąd eksportu",
      dialog: {
        title: "Ostrzeżenie",
        content: "Anulować eksport?",
        cancel: "Anuluj eksport",
        continue: "Kontynuuj eksport"
      }
    },
    welcome: {
      title: "Witamy w Scribify!",
      description: "Tutaj możesz:",
      transcribe:
        "Bez wysiłku transkrybować z Scribify—zamień rozmowy głosowe w jasny, przeszukiwalny i udostępnialny tekst w mgnieniu oka.",
      precision:
        "Uzyskaj dokładne transkrypcje z identyfikacją mówiących i znacznikami czasu natychmiast.",
      translate:
        "Przełamuj bariery językowe: tłumacz transkrypcje na ponad 200 języków z łatwością.",
      edit: "Edytuj, udoskonalaj i eksportuj swoje transkrypcje w formatach dopasowanych do Twoich potrzeb.",
      collaborate: "Współpracuj, udostępniając swój przepisany tekst innym.",
      button: "Zacznij",
      tip: "Gotowy na zamianę dźwięku w przepisany tekst? Zacznij eksplorować teraz!",
      tip2: "Rozpocznij eksplorację już teraz!",
      tip1: "Gotowy przekształcić audio w transkrypcję tekstu? "
    },
    subscriptionModal: {
      left: {
        title: "Wybierz Plan Pro, aby odblokować więcej",
        c1: "Nieograniczone transkrypcje",
        c2: "10-godzinne przesyłanie",
        c3: "Najwyższy priorytet",
        c4: "99% dokładność transkrypcji",
        c5: "Ponad 100 obsługiwanych języków",
        c6: "Identyfikacja mówiących",
        c7: "Tłumaczenie transkrypcji",
        t1: "Nieograniczone transkrypcje dla jednej osoby.",
        t2: "Każdy plik może mieć do 10 godzin / 5 GB. Prześlij 50 plików na raz.",
        t3: "Zawsze przepiszemy Twoje pliki tak szybko, jak to możliwe, z najwyższym priorytetem."
      },
      right: {
        title: "Wybierz Plan Pro",
        yearly: "Rocznie",
        monthly: "Miesięcznie",
        save: "Oszczędność",
        preMonth: "miesięcznie",
        preYear: "rocznie",
        firstMonth: "pierwszy miesiąc",
        afterwards: "później"
      },
      subscribe: "Subskrybuj"
    }
  },
  // Strona folderów
  FolderPage: {
    table: {
      failed: "Nieudane",
      selected: "Wybrane",
      success: "Sukces",
      fileList: "Lista Plików"
    },
    dialog: {
      move: {
        title: "Przenieś",
        label: "Wybierz folder",
        placeholder: "Wybierz folder",
        confirm: "Przenieś",
        cancel: "Anuluj"
      },
      rename: {
        title: "Zmień nazwę",
        label: "Nazwa pliku",
        confirm: "Zmień nazwę",
        cancel: "Anuluj"
      },
      delete: {
        title: "Usuń",
        file: "plik",
        files: "pliki",
        label: "Potwierdzić usunięcie? Tej akcji nie można cofnąć.",
        confirm: "Usuń",
        cancel: "Anuluj"
      },
      share: {
        title: "Udostępnij",
        label:
          "Każdy z poniższym bezpiecznym linkiem może zobaczyć tę transkrypcję i powiązany plik multimedialny.",
        confirm: "Kopiuj link",
        success: "Kopiowanie udane"
      },
      export: {
        title: "Eksportuj",
        select: "Wybierz potrzebny format",
        settings: "Ustawienia",
        speaker: "Uwzględnij mówcę",
        timecodes: "Uwzględnij kody czasowe",
        confirm: "Eksportuj",
        cancel: "Anuluj",
        selectErr: "Wybierz jeden lub więcej formatów"
      }
    },
    search: {
      placeholder: "Szukaj"
    },
    recently: "Ostatnio",
    record: "Nagrywaj",
    transcribe: "Transkrybuj",
    unclassified: "Niesklasyfikowane foldery",
    buttons: {
      transcribe: "Transkrybuj pliki",
      url: "Transkrybuj linki",
      record: "Nagrywaj i transkrybuj",
      recording: "Nagrywanie..."
    },
    delSuccess: "Usunięto pomyślnie",
    create: "Utwórz",
    endRecord: {
      title: "Powiadomienie",
      content:
        "Nagrywasz. Ta akcja zakończy nagrywanie. Czy chcesz zakończyć nagrywanie?",
      confirm: "Kontynuuj Nagrywanie",
      cancel: "Zakończ Nagrywanie"
    }
  },
  // Przesyłanie plików i nagrywanie
  FileUploadAndRecording: {
    record: {
      record: "Nagrywaj",
      pause: "Pauza",
      resume: "Wznów",
      stop: "Stop",
      endRecord: "Zakończ nagrywanie",
      delete: "Usuń",
      transcribe: "Transkrybuj",
      permissionDenied:
        "Odmowa dostępu do mikrofonu lub urządzenie nie istnieje",
      dialog: {
        delete: {
          title: "Ostrzeżenie",
          label: "Czy na pewno chcesz usunąć to nagranie?",
          confirm: "Usuń",
          cancel: "Anuluj"
        },
        complete: {
          title: "Nagrywanie zakończone",
          label:
            "Nagranie osiągnęło 10 godzin i zostało automatycznie zatrzymane. Proszę o transkrypcję.",
          confirm: "Rozumiem"
        },
        speaker: {
          content:
            "W celu identyfikacji mówcy pliki są ograniczone do 3 godzin. Odznacz pole '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkrybuj media online",
        title: "Wklej linki",
        label:
          "Wklej link do wideo lub pliku audio z: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram i innych platform...",
        confirm: "Dodaj",
        cancel: "Anuluj",
        // Wprowadź poprawny link
        errorTitle:
          "Wprowadzony adres linku jest nieprawidłowy. Sprawdź i spróbuj ponownie.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transkrybuj z adresu URL",
        dialogTitle: "Prześlij pliki do transkrypcji",
        tip1: "Przeciągnij pliki tutaj lub kliknij, aby przeglądać",
        tip2: "Kliknij, aby przeglądać",
        or: "lub",
        supported: "Obsługiwane formaty"
      },
      del: {
        title: "Ostrzeżenie",
        content:
          "Cały postęp zostanie utracony. Potwierdzić anulowanie transkrypcji?",
        cancel: "Potwierdź anulowanie",
        confirm: "Kontynuuj transkrypcję"
      },
      files: "Pliki",
      resultDialogTitle: "Transkrybuj pliki",
      resultDialogTitle2: "Transkrypcja pliku",
      cancel: "Anuluj",
      confirm: "Transkrybuj",
      return: "Powrót",
      addMore: "Dodaj więcej",
      language: "Wybierz język",
      failed: "Nieudane",
      tooLarge: "Plik przekracza limit (5 GB).",
      linkUpload: "Przesyłanie",
      fileFormat: "Format pliku jest niedozwolony",
      localFiles: "Pliki lokalne",
      pasteLink: "Link online",
      uploadErr: "Błąd przesyłania",
      hashErr: "Błąd hash",
      table: {
        status: "Status",
        file: "Plik",
        size: "Rozmiar",
        noData: "Brak danych"
      },
      maxFileNum: "Liczba plików nie może przekroczyć {num}.",
      speaker: "Zidentyfikuj mówców",
      speakerLabel: "Automatycznie wykrywa, kto mówi",
      guest: {
        transcribe: "Rozpisać",
        file: "Plik",
        audio: "Plik audio/wideo",
        Uploading: "Przesyłanie..."
      }
    }
  },
  // Strona szczegółów transkrypcji
  TranscriptionPage: {
    langChooseV1: {
      recently: "Ostatnio",
      popular: "Popularne",
      other: "Inne",
      searchLanguage: "Szukaj języka",
      noMatch: "Nie znaleziono pasującego języka",
      English: "Angielski",
      "English(US)": "Angielski (USA)",
      "English(UK)": "Angielski (UK)",
      Spanish: "Hiszpański",
      Portuguese: "Portugalski",
      French: "Francuski",
      Italian: "Włoski",
      German: "Niemiecki",
      Dutch: "Holenderski",
      Polish: "Polski",
      Danish: "Duński",
      Japanese: "Japoński",
      Korean: "Koreański",
      Hungarian: "Węgierski",
      Czech: "Czeski",
      Chinese: "Chiński",
      Hebrew: "Hebrajski",
      Arabic: "Arabski",
      Azerbaijani: "Azerski",
      Estonian: "Estoński",
      Belarusian: "Białoruski",
      Bulgarian: "Bułgarski",
      Icelandic: "Islandzki",
      Bosnian: "Bośniacki",
      Persian: "Perski",
      Russian: "Rosyjski",
      "Chinese(Traditional)": "Chiński (tradycyjny)",
      Finnish: "Fiński",
      Kazakh: "Kazachski",
      Galician: "Galicyjski",
      Catalan: "Kataloński",
      "Chinese(Simplified)": "Chiński (uproszczony)",
      Kannada: "Kannada",
      Croatian: "Chorwacki",
      Latvian: "Łotewski",
      Lithuanian: "Litewski",
      Romanian: "Rumuński",
      Marathi: "Marathi",
      Malay: "Malajski",
      Macedonian: "Macedoński",
      Maori: "Maoryski",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalski",
      Norwegian: "Norweski",
      Swedish: "Szwedzki",
      Serbian: "Serbski",
      Slovak: "Słowacki",
      Slovenian: "Słoweński",
      Swahili: "Suahili",
      Tagalog: "Tagalski",
      Tamil: "Tamilski",
      Thai: "Tajski",
      Turkish: "Turecki",
      Welsh: "Walijski",
      Urdu: "Urdu",
      Ukrainian: "Ukraiński",
      Greek: "Grecki",
      Armenian: "Ormiański",
      Hindi: "Hindi",
      Indonesian: "Indonezyjski",
      Vietnamese: "Wietnamski",
      Albanian: "Albański",
      Amharic: "Amharski",
      Assamese: "Asamski",
      Occitan: "Oksytański",
      Bashkir: "Baszkirski",
      Basque: "Baskijski",
      Breton: "Bretoński",
      Tibetan: "Tybetański",
      Faroese: "Farerski",
      Sanskrit: "Sanskryt",
      Khmer: "Khmerski",
      Georgian: "Gruziński",
      Gujarati: "Gudżarati",
      "Haitian Creole": "Kreolski haitański",
      Hausa: "Hausa",
      Latin: "Łaciński",
      Lao: "Laotański",
      Lingala: "Lingala",
      Luxembourgish: "Luksemburski",
      Malagasy: "Malgaski",
      Maltese: "Maltański",
      Malayalam: "Malajalam",
      Mongolian: "Mongolski",
      Bengali: "Bengalski",
      Burmese: "Birmański",
      Punjabi: "Pendżabski",
      Pashto: "Paszto",
      Sinhala: "Syngaleski",
      Shona: "Shona",
      Somali: "Somalijski",
      Tajik: "Tadżycki",
      Tatar: "Tatarski",
      Telugu: "Telugu",
      Turkmen: "Turkmeński",
      Uzbek: "Uzbecki",
      Hawaiian: "Hawajski",
      "Norwegian Nynorsk": "Norweski Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundajski",
      Yiddish: "Jidysz",
      Yoruba: "Joruba",
      Javanese: "Jawajski",
      Cantonese: "Kantoński",
      Abkhaz: "Abchaski",
      Afar: "Afar",
      alz: "Alur",
      ach: "Aczoli",
      awa: "Awadhi",
      Avaric: "Awarski",
      Ewe: "Ewe",
      Aymara: "Ajmara",
      Irish: "Irlandzki",
      Oriya: "Orija",
      Oromo: "Oromo",
      Ossetian: "Osetyjski",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balijski",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Północny Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Beludżi",
      bho: "Bhodżpuri",
      bua: "Buriacki",
      chm: "Maryjski",
      Chamorro: "Czamorro",
      Chechen: "Czeczeński",
      chk: "Chuuk",
      Chuvash: "Czuwaski",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Szan",
      tet: "Tetum",
      Divehi: "Malediwski",
      dyu: "Diula",
      tiv: "Tiw",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Południowy Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "Pismo N'Ko",
      "French(Canada)": "Francuski (Kanada)",
      Fijian: "Fidżyjski",
      fon: "Fon",
      "Western Frisian": "Zachodniofryzyjski",
      fur: "Friulski",
      Fulah: "Fulani",
      Kongo: "Kongo",
      Kalaallisut: "Grenlandzki",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgiski",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kaczin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsykański",
      "crh-Latn": "Krymsko-tatarski (łaciński)",
      crh: "Krymsko-tatarski (cyrylica)",
      Quechua: "Keczua",
      Kurdish: "Kurdyjski (Kurmanji)",
      ckb: "Kurdyjski (Sorani)",
      trp: "Kok Borok",
      ltg: "Łatgalski",
      lij: "Liguryjski",
      Limburgish: "Limburgijski",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardzki",
      rom: "Romski",
      mad: "Madurajski",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajski (Jawi)",
      Marshallese: "Marszalski",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Maurytyjski kreolski",
      "mni-Mtei": "Meitei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (wschodnie Huasteca)",
      "Southern Sotho": "Południowy Sotho",
      new: "Newarski",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pendżabski (Shahmukhi)",
      "pt-PT": "Portugalski (Portugalia)",
      Chichewa: "Cziczewa",
      cgg: "Kiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotecki",
      "Northern Sami": "Północnosaamski",
      Samoan: "Samoański",
      kri: "Krio",
      crs: "Kreolski seszelski",
      Sango: "Sango",
      "sat-Latn": "Santali (łaciński)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Szkocki gaelicki",
      sus: "Susu",
      ceb: "Cebuański",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (łaciński)",
      Tahitian: "Tahitański",
      Tonga: "Tongijski",
      Tigrinya: "Tigrinia",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuwiński",
      war: "Warajski",
      mak: "Makasarski",
      vec: "Wenecki",
      Uyghur: "Ujgurski",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurcki",
      szl: "Śląski",
      scn: "Sycylijski",
      hil: "Hiligaynon",
      jam: "Jamajski patois",
      sah: "Jakucki",
      ace: "Acehnese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (łaciński)",
      Inuktitut: "Inuktitut (sylabiczny)",
      yua: "Jukatański maja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // Logowanie, rejestracja, zmiana hasła
  IdentityInfoManage: {
    or: "lub", // lub
    LoginBtn: "Zaloguj się przez e-mail",
    LoginGoogle: "Zaloguj się przez Google",
    SignupBtn: "Zarejestruj się przez e-mail",
    SignupGoogle: "Zarejestruj się przez Google",
    SignupDes: "Zarejestruj się już dziś i zobacz magię — za darmo.",
    SignupTitle: "Dokładna i nieograniczona transkrypcja",
    signup: "Zarejestruj się", // rejestracja
    sign_up: "Zarejestruj się", // rejestracja
    loginByGoogle: "Kontynuuj z Google", // logowanie przez Google
    emailAddress: "Wprowadź swój adres email", // wprowadź swój email
    createAccount: "Utwórz nowe konto", // utwórz konto
    accountExists: "Masz już konto? ", // masz już konto? zaloguj się
    agreeTerm: {
      agree: "Kontynuując, zgadzasz się z naszymi {terms} i {policy}.",
      terms: "Warunkami",
      policy: "Polityką prywatności"
    },
    setPassword: "Ustaw hasło", // ustaw hasło
    code: "Kod weryfikacyjny", // kod weryfikacyjny
    resend: "Wyślij ponownie", // wyślij ponownie
    enterPassword: "Hasło: minimum 6 znaków.", // wprowadź hasło
    passwordLeval: "Poziom hasła", // siła hasła
    Weak: "Słabe", // słabe, średnie, silne
    Medium: "Średnie", // słabe, średnie, silne
    Strong: "Silne", // słabe, średnie, silne
    confirmPassword: "Potwierdź swoje hasło", // potwierdź hasło
    invalidEmail: "Nieprawidłowy adres email", // nieprawidłowy adres email
    logInDirectly: "To konto już istnieje. Zaloguj się bezpośrednio.", // konto już istnieje, zaloguj się bezpośrednio
    codeErrorTryAgain: "Błąd kodu weryfikacyjnego. Spróbuj ponownie.", // błąd kodu weryfikacyjnego, spróbuj ponownie
    atLeastSix: "Hasło musi mieć co najmniej 6 znaków.", // hasło musi mieć co najmniej 6 znaków
    passwordNotMatch: "Hasła nie pasują do siebie. Spróbuj ponownie.", // hasła nie pasują do siebie, spróbuj ponownie
    login: "Zaloguj się", // zaloguj się
    log_in: "Zaloguj się", // zaloguj się
    log_In: "Zaloguj się", // zaloguj się
    password: "Hasło", // hasło
    forgotPassword: "Zapomniałeś hasła?", // zapomniałeś hasła?
    noAccount: "Nie masz konta?", // nie masz konta? zarejestruj się
    accountNotExists: "To konto nie istnieje.", // konto nie istnieje
    passwordError: "Błąd hasła", // błąd hasła
    sendCode: "Wyślij kod weryfikacyjny", // wyślij kod weryfikacyjny
    resetPassword: "Zresetuj hasło", // zresetuj hasło
    resetYourPassword: "Zresetuj swoje hasło", // zresetuj swoje hasło
    newOldCantSame: "Nowe hasło musi być inne niż stare hasło.", // nowe hasło musi być inne niż stare hasło
    passwordResetOk: "Hasło zostało pomyślnie zresetowane!", // hasło zostało pomyślnie zresetowane!
    signupToSaveProgress: "Dokończ rejestrację, aby zapisać swój postęp.",
    tip: "Wskazówka",
    tipContentEmail:
      "Właśnie wysłaliśmy hasło logowania do Twojego konta na podany adres e-mail.",
    tipContentPassword:
      "Sprawdź swoją skrzynkę odbiorczą i zaloguj się za pomocą adresu e-mail oraz hasła.",
    codeToEmail:
      "Właśnie wysłaliśmy kod weryfikacyjny na Twój adres e-mail. Sprawdź swoją skrzynkę odbiorczą i wklej kod weryfikacyjny powyżej."
  },
  // Strona szczegółów udostępniania
  Sharepage: {},
  // Strona inicjalizacji
  InitPage: {},
  // Ustawienia konta
  AccountSettingsPage: {
    subscription: "Plan subskrypcji",
    freeversion: "Darmowa",
    transcribeTimesDay: "3 transkrypcje dziennie",
    uploadMinutes: "Przesyłanie 30-minutowe",
    lowerPriority: "Niższy priorytet",
    currentPlan: "Obecny plan",
    professionalEdition: "wersja profesjonalna",
    unlimitedTranscription: "Nielimitowana transkrypcja",
    unlimitedNumberOfTimes:
      "Nieograniczona częstotliwość i czas trwania transkrypcji.",
    filesUploadedAtOnce:
      "Każdy plik może mieć do 10 godzin/5 GB. Prześlij 50 plików naraz.",
    highestPriority: "najwyższy priorytet",
    weWillGiveTheHighest:
      "Zawsze transkrybujemy Twoje pliki najszybciej jak to możliwe z najwyższym priorytetem.",
    theFirstMonth: "Pierwszy miesiąc",
    subscribeTo: "subskrybuj",
    basicVersionFree: "Wersja podstawowa (darmowa)",
    return: "Powrót",
    annualize: "roczny",
    monthly: "miesięczny",
    everyYear: "co roku",
    saved: "zapisano",
    byTheMonth: "miesięcznie",
    firstMonth: "pierwszy miesiąc",
    afterwardsEveryMonth: "Następnie co miesiąc",
    manageSubscription: "Zarządzaj subskrypcją",
    professionalYearbook: "Profesjonalna roczna",
    professionalMonthly: "Profesjonalna miesięczna",
    subscriptionWillCancelledOn: "Twoja subskrypcja zostanie anulowana",
    displayLanguage: "Język wyświetlania",
    update: "Ulepsz teraz",
    basicversion: "Wersja podstawowa (Darmowa)",
    daily: "{start} z {end} dziennych transkrypcji wykorzystanych",
    upgradetoPro: "Ulepsz do Pro",
    accountSetting: "Ustawienia konta",
    logOut: "Wyloguj się",
    account: "Konto",
    email: "Email",
    id: "ID",
    password: "Hasło",
    resetPassword: "Zresetuj hasło",
    logIn: "Zaloguj się",
    tryForFree: "Wypróbuj za darmo",
    notFund: "Nie znaleziono",
    couldntFind: "Nie znaleźliśmy tego, czego szukasz.",
    proAnnual: "Pro Roczna",
    proMonthly: "Pro Miesięczna",
    perMonth: "miesięcznie",
    afterwards: "następnie",
    accuracy: "dokładność transkrypcji",
    supported: "obsługiwane języki",
    identification: "Identyfikacja mówcy",
    transcriptSranslation: "Tłumaczenie transkrypcji",
    perYear: "rocznie",
    getProPlan: "Zdobądź plan Pro",
    changeToAnnual: "Zmień na roczny",
    automaticRenewalon: "Automatyczne odnawianie",
    eachMonth: "Automatyczne odnawianie {time}. dnia każdego miesiąca.",
    automaticRenewal:
      "Automatyczne odnowienie nie powiodło się, sprawdź metodę płatności.",
    eachYear: "Automatyczne odnawianie w dniu {time} każdego roku.",
    returnAccountSetting: "Powrót",
    needsToWaitLonger:
      "Poczekaj dłużej, zanim Twoje pliki zostaną przetranskrybowane.",
    freeThreeTimesDay: "Codziennie przetranskrybuj 3 pliki za darmo.",
    oneFileUploaded:
      "Każdy plik może trwać do 30 minut. Prześlij 1 plik na raz.",
    uploadWithinHours: "Przesyłanie w ciągu 10 godzin",
    yourSubscription: "Twoja subskrypcja zostanie anulowana {time}.",
    save: "Oszczędzać",
      freeversion2: "Darmowy Plan"
},
  // Mapa języków
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chiński (uproszczony)",
      "Chinese(Traditional)": "Chiński (tradycyjny)",
      Japanese: "Japoński",
      Danish: "Duński",
      German: "Niemiecki",
      English: "Angielski",
      Spanish: "Hiszpański",
      French: "Francuski",
      Italian: "Włoski",
      Hungarian: "Węgierski",
      Dutch: "Holenderski",
      Norwegian: "Norweski",
      Polish: "Polski",
      Portuguese: "Portugalski",
      Finnish: "Fiński",
      Swedish: "Szwedzki",
      Turkish: "Turecki",
      Greek: "Grecki",
      Russian: "Rosyjski",
      Ukrainian: "Ukraiński",
      Hebrew: "Hebrajski",
      Arabic: "Arabski",
      Korean: "Koreański"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Szablon SaaS Nuxt3 typu open-source, z wstępnie zintegrowanymi globalnymi bramkami płatności (Stripe/Cream), Google OAuth, routingiem i18n oraz narzędziami do optymalizacji SEO. Zaprojektowany dla deweloperów uruchamiających wielojęzyczne aplikacje internetowe, oferuje wsparcie SSR/SSG i bezpieczeństwo klasy produkcyjnej od razu po instalacji.",
    startLink: "Rozpocznij bezpłatny okres próbny~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Dołącz do listy oczekujących, otrzymuj najnowsze wiadomości NuxtPro jako pierwszy ORAZ zniżki!",
      placeholder: "Wprowadź swój email",
      button: "Dołącz do listy oczekujących",
      joinCountMessage:
        "🔥 Wczesny użytkownik #{count} właśnie dołączył do listy oczekujących!"
    },
    seo: {
      title: "Szablon SaaS Nuxt z otwartym kodem źródłowym | NuxtPro",
      description:
        "Szablon NuxtJS ze wszystkim, czego potrzebujesz, aby zaprezentować swój produkt klientom. Od pomysłu do produkcji w 5 minut."
    },
    api: {
      title: "to jest demo",
      corpInfo: "informacje o firmie"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "błąd pobierania wideo"
      },
      mse: {
        code: 2,
        msg: "błąd dodawania strumienia"
      },
      parse: {
        code: 3,
        msg: "błąd analizy"
      },
      format: {
        code: 4,
        msg: "nieprawidłowy format"
      },
      decoder: {
        code: 5,
        msg: "błąd dekodowania"
      },
      runtime: {
        code: 6,
        msg: "błędy gramatyczne"
      },
      timeout: {
        code: 7,
        msg: "przekroczenie czasu odtwarzania"
      },
      other: {
        code: 8,
        msg: "inne błędy"
      }
    },
    HAVE_NOTHING: "Brak informacji o gotowości audio/wideo",
    HAVE_METADATA: "Metadane audio/wideo są gotowe ",
    HAVE_CURRENT_DATA:
      "Dane o aktualnym położeniu odtwarzania są dostępne, ale nie ma wystarczających danych do odtworzenia następnej klatki/milisekundy",
    HAVE_FUTURE_DATA: "Dostępne są aktualne dane i przynajmniej jedna klatka",
    HAVE_ENOUGH_DATA:
      "Dostępne dane są wystarczające do rozpoczęcia odtwarzania",
    NETWORK_EMPTY: "Audio/wideo nie zostało zainicjalizowane",
    NETWORK_IDLE:
      "Audio/wideo jest aktywne i zostało wybrane dla zasobów, ale sieć nie jest używana",
    NETWORK_LOADING: "Przeglądarka pobiera dane",
    NETWORK_NO_SOURCE: "Nie znaleziono źródła audio/wideo",
    MEDIA_ERR_ABORTED: "Proces pobierania został przerwany przez użytkownika",
    MEDIA_ERR_NETWORK: "Wystąpił błąd podczas pobierania",
    MEDIA_ERR_DECODE: "Wystąpił błąd podczas dekodowania",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/wideo nie jest obsługiwane",
    REPLAY: "Odtwórz ponownie",
    ERROR: "Sieć jest offline",
    PLAY_TIPS: "Odtwórz",
    PAUSE_TIPS: "Pauza",
    PLAYNEXT_TIPS: "Odtwórz następne",
    DOWNLOAD_TIPS: "Pobierz",
    ROTATE_TIPS: "Obróć",
    RELOAD_TIPS: "Odśwież",
    FULLSCREEN_TIPS: "Pełny ekran",
    EXITFULLSCREEN_TIPS: "Wyjdź z pełnego ekranu",
    CSSFULLSCREEN_TIPS: "Pełny ekran CSS",
    EXITCSSFULLSCREEN_TIPS: "Wyjdź z pełnego ekranu CSS",
    TEXTTRACK: "Napisy",
    PIP: "PIP",
    SCREENSHOT: "Zrzut ekranu",
    LIVE: "NA ŻYWO",
    OFF: "Wyłącz",
    OPEN: "Otwórz",
    MINI_DRAG: "Kliknij i przytrzymaj, aby przeciągnąć",
    MINISCREEN: "Mini ekran",
    REFRESH_TIPS: "Spróbuj ponownie",
    REFRESH: "Odśwież",
    FORWARD: "Do przodu",
    LIVE_TIP: "Na żywo",
    TM_SUBTITLE_SHOW_TIPS: "Włącz napisy",
    TM_SUBTITLE_HIDE_TIPS: "Wyłącz napisy",
    TM_MINIMIZE_TIPS: "Ukryj wideo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Polityka prywatności",
    lastUpdated: "Ostatnia aktualizacja: 25 sierpnia 2025 r.",
    policyDescription:
      "Niniejsza Polityka opisuje sposób, w jaki Scribify (zwany dalej „Scribify”, „nasz”, „my”, „nas”) gromadzi, wykorzystuje i ujawnia Twoje dane osobowe, gdy korzystasz z naszych usług, stron internetowych",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "i oprogramowania (zwanych łącznie „Usługami”).",
    policyAgreement:
      "Prosimy o uważne zapoznanie się z niniejszą Polityką Prywatności i upewnienie się, że ją rozumiesz. Korzystając z naszych Usług, akceptujesz niniejszą Politykę Prywatności. Jeśli nie wyrażasz zgody na wykorzystywanie przez nas Twoich danych osobowych zgodnie z niniejszą Polityką, musisz natychmiast zaprzestać korzystania z naszych Usług.",
    policyOverview:
      "W niniejszej polityce określamy: jakie dane gromadzimy i dlaczego; jak przetwarzamy Twoje dane; oraz Twoje prawa związane z Twoimi danymi. Nie sprzedajemy Twoich danych.",
    scopeTitle: "1. Zakres niniejszej Polityki Prywatności",
    whatWeCollectTitle: "2. Co zbieramy i dlaczego",
    accessShareTitle:
      "3. Kiedy uzyskujemy dostęp do Twoich danych lub udostępniamy je",
    secureDataTitle: "4. Jak zabezpieczamy Twoje dane",
    deleteContentTitle: "5. Co się dzieje, gdy usuniesz swoją treść",
    locationTitle: "6. Lokalizacja witryny i danych",
    childrenPrivacyTitle: "7. Prywatność dzieci",
    updatesTitle: "8. Aktualizacje niniejszej Polityki Prywatności",
    contactUsTitle: "9. Skontaktuj się z nami",
    identityAccessTitle: "2.1 Tożsamość i dostęp",
    billingInfoTitle: "2.2 Informacje rozliczeniowe",
    productInteractionsTitle: "2.3 Interakcje produktów",
    websiteInteractionsTitle: "2.4 Interakcje ze stroną internetową",
    cookiesTitle: "2.5 Pliki cookie",
    voluntaryCorrespondenceTitle: "2.6 Korespondencja dobrowolna",
    scopeContent:
      "Niniejsza Polityka Prywatności dotyczy wyłącznie gromadzenia i przetwarzania przez nas informacji o użytkownikach Usług. Niniejsza Polityka Prywatności nie ma zastosowania do usług, stron internetowych ani oprogramowania obsługiwanych przez osoby trzecie, do których prowadzą linki z naszej strony (niezależnie od tego, czy to my udostępniamy te linki, czy inni użytkownicy je udostępniają), ani do treści, danych, aplikacji ani materiałów pochodzących od osób trzecich. Zalecamy zapoznanie się z polityką prywatności stron internetowych lub oprogramowania osób trzecich przed udostępnieniem im jakichkolwiek informacji.",
    collectPrinciple:
      "Naszą naczelną zasadą jest zbieranie tylko tego, czego potrzebujemy. Oto, co to oznacza w praktyce:",
    identityAccessContent:
      "Rejestrując się w jednym z naszych produktów, prosimy o podanie danych identyfikacyjnych, takich jak imię i nazwisko oraz adres e-mail. Ma to na celu zapewnienie podstawowych funkcji produktu oraz umożliwienie nam wysyłania aktualizacji i innych istotnych informacji.",
    billingInfoContent:
      "Jeśli zarejestrujesz się w celu zakupu produktu płatnego, zostaniesz poproszony o podanie danych do płatności i adresu rozliczeniowego. Dane do płatności są przesyłane bezpośrednio do naszego systemu przetwarzania płatności i nie trafiają na nasze serwery.",
    productInteractionsContent:
      "Przechowujemy na naszych serwerach treści, które przesyłasz, odbierasz lub przechowujesz na swoich kontach produktowych. O ile nie usuniesz tych treści, możemy je przechowywać tak długo, jak długo Twoje konto jest aktywne.",
    websiteInteractionsContent:
      "Gromadzimy informacje o Twojej aktywności w przeglądarce do celów analitycznych i statystycznych, takich jak testowanie współczynnika konwersji i eksperymentowanie z nowymi projektami produktów. Obejmuje to na przykład wersje Twojej przeglądarki i systemu operacyjnego, Twój adres IP, odwiedzone strony internetowe i czas ich ładowania oraz stronę, która Cię do nas skierowała. Jeśli posiadasz konto i jesteś zalogowany, te dane analityczne są powiązane z Twoim adresem IP i kontem użytkownika, dopóki Twoje konto nie będzie już aktywne.",
    cookiesContent1:
      "Używamy również trwałych plików cookie własnych i niektórych plików cookie podmiotów trzecich, aby zapisywać pewne preferencje, ułatwiać korzystanie z naszych aplikacji, przeprowadzać testy A/B, a także wspierać niektóre analizy.",
    cookiesContent2:
      "Plik cookie to fragment tekstu przechowywany przez przeglądarkę. Może on pomóc w zapamiętaniu danych logowania i preferencji witryny. Może również gromadzić informacje takie jak typ przeglądarki, system operacyjny, odwiedzane strony internetowe, czas trwania wizyty, przeglądane treści i inne dane dotyczące kliknięć. Możesz dostosować ustawienia przechowywania plików cookie oraz akceptować lub blokować poszczególne pliki cookie w ustawieniach przeglądarki, jednak nasze aplikacje nie będą działać, a inne aspekty naszych usług mogą nie działać poprawnie, jeśli wyłączysz obsługę plików cookie.",
    voluntaryCorrespondenceContent:
      "Gdy wysyłasz do nas wiadomość e-mail z pytaniem lub prośbą o pomoc, przechowujemy tę korespondencję, łącznie z Twoim adresem e-mail, aby mieć historię wcześniejszej korespondencji, która może się przydać, jeśli skontaktujesz się z nami w przyszłości.",
    accessShareContent1:
      "Aby dostarczać żądane przez Ciebie produkty lub usługi. Korzystamy z usług zewnętrznych podprocesorów, aby pomóc w obsłudze naszych aplikacji i świadczeniu Ci Usług. Dotyczy to również dostawców usług w chmurze i usług analitycznych.",
    accessShareContent2:
      "W celu zbadania, zapobiegania lub podjęcia działań w związku z nadużyciami. Dostęp do konta klienta podczas badania potencjalnego nadużycia jest ostatecznością. Chcemy chronić prywatność i bezpieczeństwo zarówno naszych klientów, jak i osób zgłaszających nam problemy i dokładamy wszelkich starań, aby zrównoważyć te obowiązki w całym procesie. Jeśli odkryjemy, że korzystasz z naszych produktów w celach objętych ograniczeniami, podejmiemy niezbędne działania, w tym powiadomimy odpowiednie organy, jeśli będzie to uzasadnione.",
    accessShareContent3: "Jeśli wymagają tego obowiązujące przepisy prawa.",
    userDataRequests:
      "- Żądania udostępnienia danych użytkowników. Naszą polityką jest nieodpowiadanie na rządowe żądania udostępnienia danych użytkowników, chyba że jesteśmy do tego zobowiązani na mocy postępowania prawnego lub w wyjątkowych okolicznościach w przypadku żądania w trybie pilnym. Jednakże, jeśli amerykańskie organy ścigania posiadają niezbędny nakaz sądowy, wezwanie do sądu w postępowaniu karnym lub nakaz sądowy nakazujący nam udostępnienie danych, musimy się do niego zastosować. Podobnie, będziemy odpowiadać na żądania władz rządowych spoza Stanów Zjednoczonych wyłącznie na wniosek rządu USA, zgodnie z procedurami określonymi w umowie o wzajemnej pomocy prawnej. Naszą polityką jest powiadamianie użytkowników, których dane dotyczą, przed udostępnieniem danych, chyba że jest to prawnie zabronione, oraz z wyjątkiem sytuacji nadzwyczajnych.",
    preservationRequests:
      "- Żądania dotyczące zabezpieczenia danych. Podobnie, naszą polityką jest spełnianie żądań dotyczących zabezpieczenia danych wyłącznie na mocy amerykańskiej federalnej ustawy o przechowywaniu danych (US Federal Stored Communications Act), § 2703(f) tytułu 18 Kodeksu Stanów Zjednoczonych (USC), lub na mocy prawidłowo doręczonego wezwania sądowego w sprawach cywilnych. Nie udostępniamy zabezpieczonych danych, chyba że wymaga tego prawo lub nakaz sądowy, od którego nie wnosimy apelacji. Ponadto, o ile nie otrzymamy odpowiedniego nakazu sądowego, postanowienia sądu lub wezwania sądowego przed upływem wymaganego okresu przechowywania, zniszczymy wszelkie zabezpieczone kopie danych klientów po upływie okresu przechowywania.",
    taxAudit:
      "- W przypadku kontroli przez organ podatkowy możemy zostać zobowiązani do udostępnienia informacji dotyczących rozliczeń. W takim przypadku udostępnimy tylko niezbędne informacje, takie jak adresy rozliczeniowe i informacje o zwolnieniach podatkowych.",
    secureDataContent1: "Wszystkie dane są szyfrowane za pomocą",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "gdy są przesyłane z naszych serwerów do Twojej przeglądarki.",
    deleteContentContent:
      "Jeśli usuniesz jakąkolwiek treść, stanie się ona natychmiast niedostępna.",
    locationContent:
      "Nasze produkty i inne zasoby internetowe są obsługiwane w Stanach Zjednoczonych. Jeśli mieszkasz w Unii Europejskiej, Wielkiej Brytanii lub innym miejscu poza Stanami Zjednoczonymi, pamiętaj, że wszelkie informacje, które nam przekazujesz, będą przesyłane do Stanów Zjednoczonych i tam przechowywane. Korzystając z naszych stron internetowych lub Usług i/lub przekazując nam swoje dane osobowe, wyrażasz zgodę na takie przesyłanie.",
    childrenPrivacyContent:
      "Usługi nie są skierowane do dzieci i świadomie nie gromadzimy danych osobowych dzieci poniżej 13. roku życia. Jeśli nie masz ukończonych 13 lat, prosimy o nieprzesyłanie żadnych danych osobowych za pośrednictwem Usług. Jeśli uważasz, że dziecko przekazało nam dane osobowe z naruszeniem niniejszej Polityki, skontaktuj się z nami, korzystając z poniższych wskazówek.",
    updatesContent:
      "Możemy aktualizować tę politykę w razie potrzeby, aby była zgodna z obowiązującymi przepisami i odzwierciedlała wszelkie nowe praktyki. Za każdym razem, gdy wprowadzimy istotną zmianę w naszych zasadach, odświeżymy datę na górze tej strony.",
    contactUsContent1:
      "Jeśli masz jakiekolwiek pytania, uwagi lub skargi dotyczące naszej Polityki prywatności, prosimy o kontakt:",
    contactUs: "Skontaktuj się z nami",
    contactUsContent2:
      "i postaramy się rozpatrzyć Twoją skargę najszybciej jak to możliwe."
  },
  termsOfService: {
    termsOfServiceTitle: "Warunki korzystania z usługi",
    lastUpdated: "Ostatnia aktualizacja: 21 września 2022 r.",
    thankYouMessage: "Dziękujemy za korzystanie z naszych produktów!",
    companyReference:
      "Kiedy w niniejszym dokumencie używamy słów „Firma”, „my”, „nasz” lub „nas”, mamy na myśli Scribify.",
    servicesDefinition:
      "Gdy mówimy o „Usługach”, mamy na myśli wszelkie produkty tworzone i utrzymywane przez Scribify, niezależnie od tego, czy są dostarczane w przeglądarce internetowej, aplikacji komputerowej, aplikacji mobilnej czy w innym formacie.",
    termsUpdateNotice:
      "Możemy aktualizować niniejsze Warunki korzystania z usługi w przyszłości. Zazwyczaj zmiany te mają na celu doprecyzowanie niektórych z tych warunków poprzez dodanie linku do rozszerzonej, powiązanej polityki. Za każdym razem, gdy wprowadzamy istotną zmianę w naszych zasadach, odświeżamy datę na górze tej strony i podejmujemy wszelkie inne stosowne kroki w celu powiadomienia posiadaczy kont.",
    acceptanceOfAgreementTitle: "1. Akceptacja Umowy",
    scribifyServicesTitle: "2. Usługi Scribify",
    accountTermsTitle: "3. Warunki konta",
    paymentRefundsTitle: "4. Płatności, zwroty i zmiany planu",
    cancellationTerminationTitle: "5. Anulowanie i rozwiązanie umowy",
    submissionsTitle: "6. Zgłoszenia",
    uptimeSecurityTitle: "7. Czas sprawności i bezpieczeństwo",
    siteManagementTitle: "8. Zarządzanie witryną",
    copyrightContentTitle: "9. Prawa autorskie i własność treści",
    prohibitedActivitiesTitle: "10. Zabronione działania",
    featuresBugsTitle: "11. Funkcje i błędy",
    correctionsTitle: "12. KOREKTY",
    userDataTitle: "13. Dane użytkownika",
    privacyPolicyTitle: "14. Polityka prywatności",
    liabilityTitle: "15. Odpowiedzialność",
    miscellaneousTitle: "16. Różne",
    contactUsTitle: "17. Skontaktuj się z nami",
    acceptanceContent1:
      "Korzystając z naszych Usług, wyrażasz zgodę na niniejszą Umowę, która tym samym staje się wiążącą umową między Tobą a Scribify. Oświadczasz, że jesteś prawnie zdolny do zaakceptowania niniejszych Warunków i potwierdzasz, że osiągnąłeś wiek umożliwiający zawarcie wiążącej umowy. Akceptacja Scribify jest wyraźnie uzależniona od Twojej zgody na wszystkie postanowienia niniejszej Umowy.",
    acceptanceContent2:
      "Usługi nie są przeznaczone dla osób poniżej 18 roku życia i nie powinny być przez nie używane. Korzystając z Usług, oświadczasz i gwarantujesz, że spełniasz powyższe wymagania kwalifikacyjne.",
    acceptanceContent3:
      "Terminy „Ty”, „Twój”, „Ty sam” obejmują również Twoich pracowników, agentów, przedstawicieli handlowych i wszelkie inne osoby, którym zapewniasz dostęp do Usług za pośrednictwem swojego Konta (zgodnie z definicją poniżej). Ponosisz odpowiedzialność za zapewnienie, że wszystkie osoby uzyskujące dostęp do Usług za pośrednictwem Twojego konta znają niniejsze Warunki i ich przestrzegają.",
    acceptanceContent4:
      "Scribify zastrzega sobie prawo do okresowej zmiany i aktualizacji niniejszych Warunków według własnego uznania. Wszystkie zmiany wchodzą w życie natychmiast po ich opublikowaniu. Dalsze korzystanie z Usług po opublikowaniu zmienionych Warunków oznacza akceptację i zgodę na zmiany. Oczekuje się, że będziesz regularnie sprawdzać tę stronę, aby być na bieżąco z wszelkimi zmianami, ponieważ są one dla Ciebie wiążące.",
    servicesContent1:
      "Nasze Usługi umożliwiają użytkownikom przekształcanie rozmów głosowych w transkrybowany tekst, który można przeszukiwać, tłumaczyć i udostępniać innym osobom.",
    servicesContent2:
      "Możesz wybrać, czy chcesz korzystać z bezpłatnej wersji Usług („Usługi bezpłatne”), czy z płatnej wersji Usług opartej na subskrypcji, za którą możesz być zobowiązany do uiszczenia opłat („Usługi płatne”).",
    servicesContent3:
      "Udostępnimy Ci Usługi. Ponosisz odpowiedzialność za podjęcie wszelkich niezbędnych działań, aby uzyskać dostęp do Usług.",
    accountTerms1:
      "- Jesteś odpowiedzialny za utrzymanie bezpieczeństwa swojego konta. Firma nie ponosi i nie będzie ponosić odpowiedzialności za jakiekolwiek straty lub szkody wynikające z nieprzestrzegania przez Ciebie tego obowiązku bezpieczeństwa.",
    accountTerms2:
      "- Nie możesz używać Usług w celach niezgodnych z prawem, nieetycznych lub niemoralnych.",
    accountTerms3:
      "- Ponosisz odpowiedzialność za wszystkie treści publikowane i działania podejmowane na Twoim koncie. Dotyczy to również treści publikowanych przez inne osoby, które: (a) mają dostęp do Twoich danych logowania; lub (b) posiadają własne loginy do Twojego konta.",
    accountTerms4:
      "- Musisz być człowiekiem. Konta zarejestrowane przez „boty” lub inne zautomatyzowane metody są niedozwolone.",
    paymentContent1:
      "- W przypadku Usług płatnych, które oferują bezpłatny okres próbny, informujemy o jego długości podczas rejestracji. Po upływie okresu próbnego, aby móc nadal korzystać z Usługi, należy uiścić opłatę z góry. Jeśli nie dokonasz opłaty, Usługi przestaną obowiązywać.",
    paymentContent2:
      "- Jeśli dokonujesz aktualizacji z planu bezpłatnego na plan płatny, obciążymy Twoją kartę natychmiast, a cykl rozliczeniowy rozpocznie się w dniu aktualizacji.",
    paymentContent3:
      "- Wszystkie opłaty nie obejmują podatków, opłat ani ceł nałożonych przez organy podatkowe. W razie potrzeby pobierzemy te podatki w imieniu organu podatkowego i przekażemy je organom podatkowym. W przeciwnym razie jesteś odpowiedzialny za zapłatę wszystkich podatków, opłat lub ceł.",
    paymentContent4:
      "- Wszystkie zakupy nie podlegają zwrotowi. Możesz anulować dowolne usługi płatne w dowolnym momencie, logując się na swoje konto. W przypadku subskrypcji płatnych, anulowanie wejdzie w życie z końcem bieżącego okresu rozliczeniowego, o ile nie zaznaczono inaczej.",
    cancellationContent1:
      "- Jeśli anulujesz Usługę przed upływem opłaconego okresu, anulacja wejdzie w życie natychmiast i nie zostaniesz obciążony żadnymi opłatami. Nie naliczamy automatycznie proporcjonalnego czasu niewykorzystanego w ostatnim cyklu rozliczeniowym.",
    cancellationContent2:
      "- Mamy prawo zawiesić lub zamknąć Twoje konto i odmówić Ci dostępu do naszych Usług, zarówno obecnie, jak i w przyszłości, z dowolnego powodu i w dowolnym momencie. Zawieszenie oznacza utratę dostępu do konta i wszelkich treści na nim zawartych. Ponadto zamknięcie konta spowoduje usunięcie konta lub zablokowanie dostępu do niego, a także utratę i zrzeczenie się wszelkich treści na koncie. Zastrzegamy sobie również prawo do odmowy korzystania z Usług dowolnej osobie, z dowolnego powodu i w dowolnym momencie. Wprowadziliśmy tę klauzulę, ponieważ statystycznie rzecz biorąc, spośród setek tysięcy kont w naszych Usługach, co najmniej jedno prowadzi do niegodziwych działań.",
    cancellationContent3:
      "- Werbalne, fizyczne, pisemne lub inne formy znęcania się (w tym groźby znęcania się lub odwetu) nad pracownikiem lub członkiem zarządu Spółki mogą skutkować natychmiastowym zamknięciem konta.",
    submissionsContent:
      "Przyjmujesz do wiadomości i zgadzasz się, że wszelkie pytania, komentarze, sugestie, pomysły, opinie lub inne informacje dotyczące Witryny („Zgłoszenia”) przekazane nam przez Ciebie nie są poufne i staną się naszą wyłączną własnością. Będziemy posiadać wyłączne prawa, w tym wszelkie prawa własności intelektualnej, i będziemy uprawnieni do nieograniczonego wykorzystywania i rozpowszechniania tych Zgłoszeń w dowolnym zgodnym z prawem celu, komercyjnym lub innym, bez konieczności potwierdzania tego faktu lub wypłacania Ci odszkodowania. Niniejszym zrzekasz się wszelkich praw moralnych do takich Zgłoszeń i gwarantujesz, że wszystkie takie Zgłoszenia są Twoje i że masz prawo je przesłać. Zgadzasz się, że nie przysługuje Ci żadne roszczenie wobec nas z tytułu domniemanego lub faktycznego naruszenia lub sprzeniewierzenia jakichkolwiek praw własności do Twoich Zgłoszeń.",
    uptimeContent1:
      "- Korzystasz z Usług na własne ryzyko. Usługi te świadczymy „w stanie, w jakim się znajdują” i „w miarę dostępności”. Nie oferujemy umów o poziomie usług dla większości naszych Usług, ale poważnie traktujemy kwestię dostępności naszych aplikacji.",
    uptimeContent2:
      "Zastrzegamy sobie prawo do tymczasowego wyłączenia Twojego konta, jeśli Twoje korzystanie z Usług znacznie przekroczy typowe korzystanie z nich przez innych klientów. Oczywiście skontaktujemy się z Tobą przed podjęciem jakichkolwiek działań, z wyjątkiem rzadkich przypadków, gdy poziom korzystania może negatywnie wpłynąć na działanie Usługi dla innych klientów.",
    uptimeContent3:
      "- Podejmujemy wiele działań w celu ochrony i zabezpieczenia Twoich danych poprzez tworzenie kopii zapasowych, redundancję i szyfrowanie. Stosujemy szyfrowanie transmisji danych w publicznym Internecie.",
    uptimeContent4:
      "- Korzystamy z usług zewnętrznych dostawców i partnerów hostingowych w celu zapewnienia niezbędnego sprzętu, oprogramowania, sieci, pamięci masowej i powiązanych technologii wymaganych do prowadzenia Usług.",
    siteManagementContent:
      "Zastrzegamy sobie prawo, ale nie obowiązek, do: (1) monitorowania Witryny pod kątem naruszeń niniejszych Warunków korzystania z usługi; (2) podejmowania odpowiednich kroków prawnych przeciwko każdemu, kto według naszego wyłącznego uznania narusza prawo lub niniejsze Warunki korzystania z usługi, w tym, bez ograniczeń, zgłaszania takiego użytkownika organom ścigania; (3) według naszego wyłącznego uznania i bez ograniczeń, odmowy, ograniczenia dostępu do, ograniczenia dostępności lub wyłączenia (w zakresie technologicznie wykonalnym) któregokolwiek z Twoich Wkładów lub jakiejkolwiek jego części; (4) według naszego wyłącznego uznania i bez ograniczeń, powiadomienia lub odpowiedzialności, usunięcia z Witryny lub w inny sposób wyłączenia wszystkich plików i treści o nadmiernym rozmiarze lub w jakikolwiek sposób obciążających nasze systemy; oraz (5) w inny sposób zarządzania Witryną w sposób mający na celu ochronę naszych praw i własności oraz ułatwienie prawidłowego funkcjonowania Witryny.",
    copyrightContent1:
      "- Wszelkie treści publikowane w ramach Usług muszą być zgodne z prawem autorskim obowiązującym w Stanach Zjednoczonych.",
    copyrightContent2:
      "- Nie rościmy sobie żadnych praw własności intelektualnej do materiałów udostępnianych przez Ciebie w ramach Usług. Wszystkie przesłane materiały pozostają Twoją własnością.",
    copyrightContent3:
      "- Nie dokonujemy wstępnej selekcji treści, ale zastrzegamy sobie prawo (ale nie obowiązek), według własnego uznania, do odmowy publikacji lub usunięcia wszelkich treści dostępnych za pośrednictwem Serwisu.",
    copyrightContent4:
      "- Nazwy, wygląd i działanie Usług są chronione prawem autorskim © Spółki. Wszelkie prawa zastrzeżone. Zabrania się powielania, kopiowania ani ponownego wykorzystywania jakiejkolwiek części kodu HTML, CSS, JavaScript lub elementów graficznych bez wyraźnej pisemnej zgody Spółki. Należy wystąpić o pozwolenie na używanie logo Spółki lub logo Usług w celach promocyjnych.",
    emailUs: "napisz do nas",
    copyrightContent5:
      "prośby o użycie logo. Zastrzegamy sobie prawo do cofnięcia tego pozwolenia w przypadku naruszenia niniejszych Warunków korzystania z usługi.",
    copyrightContent6:
      "- Użytkownik zgadza się nie odtwarzać, nie duplikować, nie kopiować, nie sprzedawać, nie odsprzedawać ani nie wykorzystywać żadnej części Usług, sposobu korzystania z Usług ani dostępu do Usług bez wyraźnej pisemnej zgody Spółki.",
    copyrightContent7:
      "- Nie wolno modyfikować innej witryny internetowej w sposób fałszywie sugerujący, że jest ona powiązana z Usługami lub Spółką.",
    copyrightContent8:
      "- Szanujemy prawa własności intelektualnej innych osób. Jeśli uważasz, że jakikolwiek materiał dostępny na Stronie lub za jej pośrednictwem narusza jakiekolwiek prawa autorskie, które posiadasz lub kontrolujesz, prosimy o natychmiastowe powiadomienie.",
    contactUs: "Skontaktuj się z nami",
    copyrightContent9:
      "Kopia Twojego Powiadomienia zostanie wysłana do osoby, która opublikowała lub przechowywała materiały, których dotyczy Powiadomienie. Informujemy, że zgodnie z obowiązującym prawem możesz ponieść odpowiedzialność za szkody, jeśli w Powiadomieniu podasz istotne nieprawdziwe informacje. Dlatego, jeśli nie masz pewności, czy materiały znajdujące się na Stronie lub do których linki znajdują się na Stronie naruszają Twoje prawa autorskie, powinieneś najpierw rozważyć kontakt z prawnikiem.",
    prohibitedActivitiesIntro:
      "Nie możesz uzyskiwać dostępu do Witryny ani korzystać z niej w żadnym innym celu niż ten, dla którego ją udostępniamy. Witryny nie wolno wykorzystywać w związku z żadnymi przedsięwzięciami komercyjnymi, z wyjątkiem tych, które zostały przez nas wyraźnie zatwierdzone lub poparte.",
    prohibitedActivitiesUserAgreement:
      "Jako użytkownik Serwisu zgadzasz się, że nie będziesz:",
    prohibitedActivity1:
      "- Systematyczne pobieranie danych lub innej treści ze Strony w celu tworzenia lub kompilowania, bezpośrednio lub pośrednio, zbiorów, kompilacji, baz danych lub katalogów bez naszej pisemnej zgody.",
    prohibitedActivity2:
      "- Oszukiwać, wprowadzać w błąd nas i innych użytkowników, zwłaszcza w celu zdobycia poufnych informacji o koncie, takich jak hasła użytkowników.",
    prohibitedActivity3:
      "- Omijać, wyłączać lub w inny sposób ingerować w funkcje związane z bezpieczeństwem Witryny, w tym funkcje, które uniemożliwiają lub ograniczają korzystanie z Treści lub ich kopiowanie lub nakładają ograniczenia na korzystanie z Witryny i/lub Treści w niej zawartych.",
    prohibitedActivity4:
      "- naszym zdaniem dyskredytować, szkalować lub w inny sposób szkodzić nam i/lub Witrynie.",
    prohibitedActivity5:
      "- Wykorzystywać informacji uzyskanych ze Strony w celu nękania, znęcania się lub wyrządzania krzywdy innej osobie.",
    prohibitedActivity6:
      "- Niewłaściwie korzystaj z naszych usług wsparcia lub przesyłaj fałszywe raporty o nadużyciach lub niewłaściwym zachowaniu.",
    prohibitedActivity7:
      "- Korzystać ze Strony w sposób niezgodny z obowiązującymi przepisami prawa.",
    prohibitedActivity8:
      "- Angażować się w nieautoryzowane tworzenie ramek lub linków do Witryny.",
    prohibitedActivity9:
      "- Przesyłać lub przekazywać (lub podejmować próby przesyłania lub przekazywać) wirusów, koni trojańskich lub innych materiałów, w tym nadmiernego używania wielkich liter i spamowania (ciągłego zamieszczania powtarzalnego tekstu), które zakłócają nieprzerwane korzystanie z Witryny przez jakąkolwiek stronę lub powodują zmiany, upośledzenia, zakłócenia, modyfikacje lub zakłócają korzystanie z Witryny, jej funkcje, działanie lub konserwację.",
    prohibitedActivity10:
      "- Podejmować jakiekolwiek zautomatyzowane działania związane z korzystaniem z systemu, takie jak stosowanie skryptów do wysyłania komentarzy lub wiadomości, bądź korzystanie z narzędzi do eksploracji danych, robotów lub podobnych narzędzi do gromadzenia i ekstrakcji danych.",
    prohibitedActivity11:
      "- Usuń informacje o prawach autorskich i innych prawach własności z wszelkich Treści.",
    prohibitedActivity12:
      "- Próba podszywania się pod innego użytkownika lub osobę albo posługiwania się nazwą użytkownika innego użytkownika.",
    prohibitedActivity13:
      "- Przesyłać lub przekazywać (lub podejmować próby przesłania lub przekazania) jakichkolwiek materiałów, które działają jako pasywny lub aktywny mechanizm gromadzenia lub przekazywania informacji, w tym, bez ograniczeń, formatów wymiany czystych grafik („gifów”), pikseli 1×1, błędów sieciowych, plików cookie lub innych podobnych urządzeń (czasami określanych jako „oprogramowanie szpiegujące” lub „pasywne mechanizmy gromadzenia” lub „pcms”).",
    prohibitedActivity14:
      "- Zakłócać, przerywać lub powodować nadmierne obciążenie Witryny lub sieci i usług połączonych z Witryną.",
    prohibitedActivity15:
      "- Nękać, drażnić, zastraszać lub grozić któremukolwiek z naszych pracowników lub agentów zajmujących się udostępnianiem jakiejkolwiek części Witryny.",
    prohibitedActivity16:
      "- Podejmować próby obejścia jakichkolwiek środków Witryny mających na celu uniemożliwienie lub ograniczenie dostępu do Witryny lub jakiejkolwiek jej części.",
    prohibitedActivity17:
      "- Kopiowanie lub adaptowanie oprogramowania Witryny, w tym między innymi Flash, PHP, HTML, JavaScript i innych kodów.",
    prohibitedActivity18:
      "- Z wyjątkiem przypadków dozwolonych przez obowiązujące prawo, nie wolno rozszyfrowywać, dekompilować, dezasemblować ani dokonywać inżynierii wstecznej żadnego oprogramowania wchodzącego w skład Witryny lub w jakikolwiek sposób stanowiącego jej część.",
    prohibitedActivity19:
      "- Z wyjątkiem przypadków wynikających ze standardowego korzystania z wyszukiwarki lub przeglądarki internetowej, nie wolno używać, uruchamiać, rozwijać ani rozpowszechniać żadnych zautomatyzowanych systemów, w tym między innymi pająków, robotów, narzędzi do oszukiwania, scraperów ani czytników offline uzyskujących dostęp do Witryny, ani używać lub uruchamiać żadnych nieautoryzowanych skryptów lub innego oprogramowania.",
    prohibitedActivity20:
      "- Dokonuj zakupów na Stronie za pośrednictwem agenta kupującego lub pośrednika zakupowego.",
    prohibitedActivity21:
      "- Nie wolno wykorzystywać Serwisu w sposób nieautoryzowany, w tym zbierać nazw użytkowników i/lub adresów e-mail użytkowników drogą elektroniczną lub inną w celu wysyłania niechcianej poczty elektronicznej lub tworzyć kont użytkowników za pomocą środków automatycznych lub pod fałszywymi pozorami.",
    prohibitedActivity22:
      "- Korzystać ze Strony w celu konkurowania z nami lub w inny sposób wykorzystywać Stronę i/lub Treści w celach generujących dochód lub w ramach przedsięwzięcia komercyjnego.",
    prohibitedActivity23:
      "- Wykorzystywać Serwis do reklamowania lub oferowania sprzedaży towarów i usług.",
    prohibitedActivity24: "- Sprzedać lub w inny sposób przenieść swój profil.",
    featuresContent1:
      "Projektujemy nasze Usługi z dbałością, opierając się na własnym doświadczeniu oraz na doświadczeniach klientów, którzy poświęcają nam swój czas i dzielą się swoimi opiniami. Nie ma jednak usługi, która zadowoliłaby wszystkich. Nie gwarantujemy, że nasze Usługi spełnią Państwa konkretne wymagania lub oczekiwania.",
    featuresContent2:
      "Testujemy również wszystkie nasze funkcje przed ich udostępnieniem. Jak w przypadku każdego oprogramowania, nasze Usługi nieuchronnie zawierają błędy. Śledzimy zgłaszane nam błędy i pracujemy nad nimi, zwłaszcza nad tymi związanymi z bezpieczeństwem i prywatnością. Nie wszystkie zgłoszone błędy zostaną naprawione i nie gwarantujemy, że Usługi będą całkowicie wolne od błędów.",
    correctionsContent1:
      "Informacje na Stronie mogą zawierać błędy typograficzne, nieścisłości lub pominięcia, w tym opisy, ceny, dostępność i inne informacje. Zastrzegamy sobie prawo do poprawiania wszelkich błędów, nieścisłości lub pominięć oraz do zmiany lub aktualizacji informacji na Stronie w dowolnym momencie i bez uprzedniego powiadomienia.",
    correctionsContent2:
      "Nie możemy zagwarantować, że Strona będzie dostępna przez cały czas. Możemy napotkać problemy ze sprzętem, oprogramowaniem lub inne problemy, a także przeprowadzić konserwację Strony, co może skutkować przerwami, opóźnieniami lub błędami. Zastrzegamy sobie prawo do zmiany, rewizji, aktualizacji, zawieszenia, zaprzestania lub innej modyfikacji Strony w dowolnym momencie i z dowolnego powodu bez powiadomienia. Zgadzasz się, że nie ponosimy żadnej odpowiedzialności za jakiekolwiek straty, szkody lub niedogodności spowodowane brakiem dostępu do Strony lub korzystania z niej podczas przestoju lub zaprzestania jej działania. Żadne z postanowień niniejszych Warunków korzystania z usługi nie będzie interpretowane jako zobowiązujące nas do utrzymywania i wspierania Strony ani do dostarczania jakichkolwiek korekt, aktualizacji lub wydań w związku z tym.",
    userDataContent:
      "Będziemy przechowywać pewne dane przesyłane przez Ciebie do Serwisu w celu zarządzania jego działaniem, a także dane dotyczące korzystania z niego. Chociaż regularnie tworzymy kopie zapasowe danych, ponosisz wyłączną odpowiedzialność za wszelkie dane przesyłane przez Ciebie lub związane z jakąkolwiek aktywnością wykonywaną przez Ciebie za pośrednictwem Serwisu. Zgadzasz się, że nie ponosimy wobec Ciebie żadnej odpowiedzialności za utratę lub uszkodzenie takich danych i niniejszym zrzekasz się wszelkich praw dochodzenia roszczeń wobec nas z tytułu takiej utraty lub uszkodzenia takich danych.",
    privacyPolicyContent1:
      "Dbamy o prywatność i bezpieczeństwo danych. Zapoznaj się z naszą",
    privacyPolicy: "Polityka prywatności",
    privacyPolicyContent2:
      "Korzystając z Witryny, wyrażasz zgodę na przestrzeganie naszej Polityki Prywatności, która stanowi integralną część niniejszych Warunków Korzystania z Usługi. Informujemy, że Witryna jest hostowana w Stanach Zjednoczonych. Jeśli uzyskujesz dostęp do Witryny z dowolnego innego regionu świata, w którym obowiązują przepisy lub inne wymogi dotyczące gromadzenia, wykorzystywania lub ujawniania danych osobowych, które różnią się od przepisów obowiązujących w Stanach Zjednoczonych, dalsze korzystanie z Witryny oznacza przekazanie Twoich danych do Stanów Zjednoczonych i wyrażasz zgodę na ich przesyłanie i przetwarzanie w Stanach Zjednoczonych.",
    liabilityIntro:
      "Wspominamy o odpowiedzialności w całym niniejszym Regulaminie, ale żeby zawrzeć to wszystko w jednej sekcji:",
    liabilityContent:
      "Wyraźnie rozumiesz i zgadzasz się, że Spółka nie ponosi odpowiedzialności, z mocy prawa lub w oparciu o zasadę słuszności, wobec Ciebie lub jakiejkolwiek osoby trzeciej za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, utracone zyski, szkody szczególne, wynikowe, karne lub przykładowe, w tym, ale nie wyłącznie, szkody za utratę zysków, dobrej woli, użytkowania, danych lub inne straty niematerialne (nawet jeśli Spółka została poinformowana o możliwości wystąpienia takich szkód), wynikające z: (1) korzystania z Usług lub niemożności korzystania z nich; (2) błędów, pomyłek lub nieścisłości w treści i materiałach; (3) obrażeń ciała lub szkód majątkowych, jakiegokolwiek rodzaju, wynikających z dostępu do witryny i korzystania z niej; (4) kosztów zakupu towarów i usług zastępczych wynikających z jakichkolwiek towarów, danych, informacji lub usług zakupionych lub uzyskanych lub wiadomości otrzymanych lub transakcji zawartych za pośrednictwem Usług; (5) jakiegokolwiek nieautoryzowanego dostępu do lub korzystania z naszych bezpiecznych serwerów i/lub wszelkich danych osobowych i/lub informacji finansowych w nich przechowywanych; (6) jakiekolwiek przerwanie lub zaprzestanie transmisji do lub z witryny; (7) jakiekolwiek błędy, wirusy, konie trojańskie lub podobne, które mogą zostać przesłane do lub za pośrednictwem witryny przez osoby trzecie i/lub; (8) jakiekolwiek błędy lub pominięcia w jakiejkolwiek treści i materiałach lub za jakiekolwiek straty lub szkody poniesione w wyniku korzystania z jakiejkolwiek treści opublikowanej, przesłanej lub w inny sposób udostępnionej za pośrednictwem witryny; (9) oświadczenia lub zachowanie jakiejkolwiek osoby trzeciej w ramach usługi; (10) lub jakakolwiek inna kwestia związana z niniejszymi Warunkami korzystania z usługi lub Usługami, niezależnie od tego, czy stanowi to naruszenie umowy, czyn niedozwolony (w tym zaniedbanie czynne lub bierne), czy jakąkolwiek inną teorię odpowiedzialności.",
    miscellaneousContent:
      "Niniejsze Warunki Świadczenia Usług oraz wszelkie polityki lub zasady operacyjne opublikowane przez nas w Serwisie lub w odniesieniu do Serwisu stanowią całość umowy i porozumienia między Tobą a nami. Niewykonanie lub niewyegzekwowanie przez nas któregokolwiek z praw lub postanowień niniejszych Warunków Świadczenia Usług nie stanowi zrzeczenia się takiego prawa lub postanowienia. Niniejsze Warunki Świadczenia Usług obowiązują w najszerszym zakresie dozwolonym przez prawo. Możemy w dowolnym momencie przenieść część lub całość naszych praw i obowiązków na inne osoby. Nie ponosimy odpowiedzialności za jakiekolwiek straty, szkody, opóźnienia lub zaniechania spowodowane przyczynami pozostającymi poza naszą uzasadnioną kontrolą. Jeżeli którekolwiek z postanowień niniejszych Warunków Świadczenia Usług zostanie uznane za niezgodne z prawem, nieważne lub niewykonalne, to postanowienie lub część postanowienia uznaje się za oddzielne od niniejszych Warunków Świadczenia Usług i nie wpływa to na ważność i wykonalność pozostałych postanowień. W wyniku niniejszych Warunków Świadczenia Usług lub korzystania z Serwisu nie powstaje między Tobą a nami żaden stosunek joint venture, partnerstwa, zatrudnienia ani agencyjny. Zgadzasz się, że niniejsze Warunki Świadczenia Usług nie będą interpretowane na naszą niekorzyść z tytułu ich sporządzenia. Niniejszym zrzekasz się wszelkich zarzutów, jakie możesz mieć w związku z elektroniczną formą niniejszych Warunków świadczenia usług oraz brakiem podpisania przez strony niniejszego dokumentu w celu wykonania niniejszych Warunków świadczenia usług.",
    contactUsContent1:
      "Jeśli masz pytanie dotyczące któregokolwiek z Warunków korzystania z usługi, skontaktuj się z nami.",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funkcje",
    UnlimitedTranscription: "Nieograniczona transkrypcja",
    BulkUpload: "Zbiorowe przesyłanie",
    Accuracy: "96% dokładności",
    Pricing: "Cennik",
    UseCases: "Zastosowania",
    AllUseCases: "Wszystkie zastosowania",
    Podcasters: "Podcasterzy",
    Journalists: "Dziennikarze",
    ContentCreators: "Twórcy treści",
    Researchers: "Badacze",
    BusinessTeams: "Zespoły biznesowe",
    Educators: "Nauczyciele",
    Resources: "Zasoby",
    YouTubetoMP4: "YouTube do MP4",
    StartFreeTrial: "Wypróbuj za darmo"
  },
  Footer: {
    des: "Pierwsza na świecie naprawdę nieograniczona usługa transkrypcji AI. Brak limitów, brak ograniczeń, tylko wolność tworzenia.",
    Features: "Funkcje",
    UseCases: "Zastosowania",
    Company: "Firma",
    featureMenus: ["Nieograniczona transkrypcja", "Zbiorowe przesyłanie", "96% dokładności"],
    useCaseMenus: [
          "Wszystkie zastosowania",
          "Podcastowcy",
          "Dziennikarze",
          "Twórcy treści",
          "Badacze",
          "Zespoły biznesowe",
          "Edukatorzy"
        ],
    companyMenus: [
          "O nas",
          "Cennik",
          "Prywatność",
          "Warunki"
        ]
  },
  Index: {
    Hero: {
      badge: 'Koniec z "Shrinkflation" - Naprawdę Nielimitowane',
      h1: "Przestań Płacić za Ograniczenia:",
      gradient: "Naprawdę Nielimitowana Transkrypcja AI",
      subtitle: "Nasze AI transkrybuje wideo i konwertuje audio na tekst, przetwarzając 50 plików naraz bez miesięcznych limitów. Transkrypcja, która rośnie razem z Tobą.",
      FreeTrial: "Wypróbuj Za Darmo - Bez Karty Kredytowej",
      HowWorks: "Zobacz, Jak To Działa",
      Unlimited: "Nielimitowane Przesyłanie Plików",
      NoCap: "Brak Miesięcznego Limitu Minut",
      Hour: "Obsługa Plików do 10 Godzin",
      ExploreUseCases: "Poznaj Zastosowania"
    },
    Stats: {
      monthlyMinutes: "Miesięczne Minuty",
      fileUploads: "Przesyłanie Plików",
      batchProcessing: "Przetwarzanie Seryjne",
      maxFileLength: "Maksymalna Długość Pliku"
    },
    FeaturesGrid: {
      try_now: "Wypróbuj Teraz",
      no_signup: "Bez Rejestracji",
      experience_unltd: "Doświadcz naprawdę nielimitowanej transkrypcji",
      upload_50: "Prześlij do 50 plików naraz, właśnie tutaj.",
      no_limits: "Zaawansowane",
      no_surprises: "Transkrypcja AI",
      transparency: "Koniec z Ukrytymi Limitami, Koniec z Niespodziankami - Podczas gdy inni cicho zmniejszają Twoje minuty lub chowają limity w drobnym druku, my wierzymy w radykalną przejrzystość",
      feat_unltd: "Naprawdę Nielimitowane",
      feat_unltd_desc: 'Brak "polityki uczciwego użytku" ukrytej w regulaminie. Brak limitów magazynowania udających "nielimitowane". Prześlij całe swoje archiwum, transkrybuj wszystko dla wszystkich swoich potrzeb transkrypcji audio. Mówimy poważnie.',
      feat_bulk: "Wolność Masowego Przesyłania",
      feat_bulk_desc: 'Masz dość "3 importów na całe życie" lub "10 plików miesięcznie"? Prześlij 50 plików naraz, tyle razy, ile potrzebujesz. Idealne do przetwarzania zaległości.',
      feat_batch: "Przetwarzanie Seryjne",
      feat_batch_desc: "Przetwórz cały sezon podcastu w ciągu nocy. Prześlij 50 wywiadów naraz. Niech nasze AI pracuje, gdy Ty śpisz. Obudź się do gotowych transkrypcji.",
      feat_accuracy: "96% Dokładności",
      feat_accuracy_desc: "Nasze wiodące w branży AI transkrybuje audio z inteligentną interpunkcją, identyfikacją mówców dla do 20 osób i bezbłędnie radzi sobie z akcentami oraz terminami technicznymi.",
      feat_langs: "100+ Języków",
      feat_langs_desc: "Transkrybuj wideo i audio w 100+ językach, tłumacz na 249+. Bez dodatkowych opłat za różne języki. Globalna treść, jedna prosta cena.",
      feat_pro: "Funkcje Profesjonalne",
      feat_pro_desc: "Znaczniki czasu na poziomie słów dla precyzyjnego pozycjonowania audio/wideo, dokładna identyfikacja mówców nawet podczas szybkich zmian w rozmowie oraz idealnie sformatowany tekst z akapitami, zdaniami i interpunkcją dla łatwego czytania.",
        features: "Funkcje"
    },
    UseCases: {
      built_for: "Masowe",
      "heavy_users": "Transkrypcja Audio i Wideo",
      "join_users": 'Stworzone dla Intensywnych Użytkowników Jak Ty - Dołącz do YouTuberów, twórców treści i podcasterów, którzy przeszli z usług "shrinkflation"',
      "podcasters": {
        "title": "Podcasterzy",
        "des": "Prześlij całe swoje archiwum. Twórz notatki do każdego odcinka. Koniec z wybieraniem, które odcinki transkrybować."
      },
      "content_creators": {
        "title": "Twórcy Treści",
        "des": "Zamień swoją bibliotekę wideo w przeszukiwalny tekst, korzystając z naszej usługi automatycznej transkrypcji plików wideo. Generuj napisy do wszystkiego. Bez liczenia minut, tylko tworzenie."
      },
      "journalists": {
        "title": "Dziennikarze",
        "des": 'Prześlij wszystkie swoje wywiady naraz. Koniec z blokadami typu "10 plików miesięcznie" przy terminach. Przetwórz wszystko.'
      },
      researchers: {
        title: "Badacze",
        des: "Transkrybuj godziny grup fokusowych i wywiadów. Prześlij całe swoje badanie naraz. Otrzymaj dokładną identyfikację mówców."
      },
      business_teams: {
        title: "Zespoły Biznesowe",
        des: "Nagrywaj każdą rozmowę bez obaw o limity. Otrzymuj analizy AI wszystkich rozmów, a nie tylko wybranych kilku."
      },
      educators: {
        title: "Edukatorzy",
        des: "Transkrybuj całe serie wykładów. Udostępnij wszystkie treści. Koniec z wybieraniem między kursami z powodu limitów minut."
      }
    },
    Testimonials: {
      title: "Uwielbiane przez",
      highlighted_users: "Ponad 50 000 użytkowników",
      subtitle: "Zobacz, dlaczego profesjonaliści wybierają NeverCap zamiast ograniczonych alternatyw",
      Mike: {
        "text": "O kurczę, to naprawdę działa! Prowadziłem podcast przez 3 lata i ręcznie przepisywałem wszystko jak idiota. Wgrałem 6 odcinków naraz, a narzędzie idealnie rozdzieliło mnie i mojego współprowadzącego. Odcinek nagrany w kawiarni, który uważałem za zrujnowany? Krystalicznie czysty transkrypt. Nigdy więcej nie będę tego sam przepisywał.",
        "author": "Mike Rodriguez",
        "role": "Prowadzący podcast"
      },
      Sarah: {
        "text": "Uczę online i potrzebowałam napisów do moich filmów. Wypróbowałam 3 inne narzędzia, które miały dziwne ograniczenia lub działały wiecznie. A to po prostu... działa? Wgrałam wykład po hiszpańsku i w 2 minuty dostałam idealne napisy. Moi uczniowie z problemami słuchowymi są zachwyceni. Szkoda, że nie znalazłam tego wcześniej!",
        "author": "Sarah Chen",
        "role": "Nauczycielka online"
      },
      Jessica: {
        "text": "Używam tego do wywiadów i to szalone, jak dokładne to jest. Miałam 2-godzinny wywiad w łamanej angielszczyźnie i hiszpańskim, a narzędzie wszystko perfekcyjnie rozpoznało, nawet znaczniki czasu. Wcześniej płaciłam stażyście 200$/miesiąc za przepisywanie. To dosłownie oszczędza mi pieniądze co miesiąc.",
        "author": "Jessica Park",
        "role": "Dziennikarka freelancer"
      }
    },
    PricingPreview: {
      "title": "Przejrzyste ceny",
      "highlighted_text": "Żadnych ukrytych limitów",
      "subtitle": "Wybierz swój plan. Bez gwiazdek, bez drobnego druku, bez niespodzianek"
    },
    FAQSection: {
      "title": "Często zadawane",
      "titleHighlight": "Pytania",
      "questions": [
            {
              "q": "Transkrypcja AI",
              "question": "Czym jest transkrypcja AI i jak działa?",
              "answer": "Transkrypcja AI to automatyczne konwertowanie dźwięku na tekst przy użyciu zaawansowanej sztucznej inteligencji. W NeverCap wystarczy wgrać pliki, a nasze AI przetworzy treść z dokładnością do 96%. Nasza usługa transkrybuje pliki wideo (jak MP4, MOV) i audio (jak MP3, WAV) na czytelny, edytowalny tekst z oznaczeniem mówców i znacznikami czasu."
            },
            {
              "q": "unlimited_policy",
              "question": "Czy to naprawdę nielimitowane? Gdzie jest haczyk?",
              "answer": "Tak, to prawdziwie nielimitowane! Brak miesięcznych limitów minut, brak dodatkowych opłat. Jedyne ograniczenia są techniczne: pojedynczy plik może mieć do 10 godzin lub 5 GB, a jednocześnie możesz przetwarzać 50 plików. Ale możesz wgrywać dowolną liczbę partii przez cały miesiąc."
            },
            {
              "q": "accuracy",
              "question": "Jak dokładna jest transkrypcja?",
              "answer": "Gwarantujemy 96% dokładności dla wyraźnego dźwięku. Nasze AI jest szkolone na milionach godzin różnorodnych treści i doskonale radzi sobie z akcentami, terminami technicznymi i wieloma mówcami. Dla trudniejszych nagrań nasze funkcje poprawy jakości pomagają uzyskać lepsze wyniki."
            },
            {
              "q": "languages",
              "question": "Jakie języki są obsługiwane?",
              "answer": "Obsługujemy transkrypcję w ponad 100 językach, w tym angielskim, hiszpańskim, mandaryńskim, hindi, arabskim, francuskim i innych. Dodatkowo możesz przetłumaczyć transkrypcje na 249 różnych języków, co jest idealne dla globalnych treści."
            },
            {
              "q": "speed",
              "question": "Jak szybka jest transkrypcja?",
              "answer": "Błyskawicznie! 1-godzinny plik audio zwykle przetwarzany jest w mniej niż 5 minut. Dzięki przetwarzaniu wsadowemu możesz wgrać 50 plików jednocześnie i przetwarzać je równolegle. Większość użytkowników budzi się z gotową transkrypcją całej biblioteki."
            },
            {
              "q": "cancellation",
              "question": "Czy mogę zrezygnować w dowolnym momencie?",
              "answer": "Oczywiście! Brak umów, brak opłat za rezygnację. Możesz zmienić plan lub zrezygnować z subskrypcji w dowolnym momencie z poziomu panelu. Jeśli zrezygnujesz, zachowasz dostęp do końca okresu rozliczeniowego."
            },
            {
              "q": "security",
              "question": "Czy moje dane są bezpieczne?",
              "answer": "Twoje bezpieczeństwo jest naszym priorytetem. Jesteśmy certyfikowani SOC 2, używamy 256-bitowego szyfrowania i nigdy nie wykorzystujemy Twoich treści do trenowania modeli. Możesz usunąć pliki w dowolnym momencie, a my automatycznie je usuwamy po 30 dniach. Zgodne z GDPR i CCPA."
            },
            {
              "q": "export_formats",
              "question": "Jakie formaty eksportu są dostępne?",
              "answer": "Pobierz transkrypcje w dowolnym formacie: PDF, Word (DOCX), Excel, CSV, napisy SRT, zwykły tekst (TXT) i napisy VTT. Idealne dla każdego przepływu pracy."
            },
            {
              "q": "file_formats",
              "question": "Jakie pliki audio i wideo mogę wgrać?",
              "answer": "Obsługujemy praktycznie wszystkie formaty audio i wideo: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV i inne. Jeśli możesz to odtworzyć, my możemy to przetranskrybować."
            }
          ]
    },
    CTASection: {
      "title": "Gotowy, aby uwolnić się od limitów?",
      "subtitle": "Dołącz do ponad 50 000 profesjonalistów, którzy przeszli na prawdziwie nielimitowaną transkrypcję",
      "button": "Wypróbuj NeverCap za darmo",
      "disclaimer": "Karta kredytowa nie jest wymagana w planie darmowym • W każdej chwili możesz przejść na wyższy plan dla nielimitowanego dostępu"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Koniec z "skurczeniem" usług',
      heroTitleLine1: "Prawdziwie nielimitowane",
      heroTitleLine2: "Transkrypcja AI",
      heroSubtitle: "Podczas gdy Trint ogranicza Cię do 50 godzin, a Otter do 10 plików miesięcznie, my dostarczamy to, co naprawdę obiecujemy: nieograniczoną transkrypcję bez ukrytych limitów.",
      primaryCta: "Wypróbuj za darmo – bez karty kredytowej",
      secondaryCta: "Zobacz prawdę",
      comparisonBadLabel: "Co robią inni",
      comparisonBadTitle: "Ukryte limity wszędzie",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Nieograniczone" = limit 50 godzin/miesiąc',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 importy na zawsze (darmowe), 10/miesiąc (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "Limit przechowywania 800 minut",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Maks. 30 godzin/miesiąc",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Ukryte w regulaminie",
      comparisonGoodLabel: "Co my robimy",
      comparisonGoodTitle: "Naprawdę nieograniczone",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Brak miesięcznych limitów minut",
      comparisonGoodItem1Text: "nigdy",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Nieograniczone przesyłanie plików",
      comparisonGoodItem2Text: "zawsze",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Brak limitów przechowywania",
      comparisonGoodItem3Text: "w ogóle",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Zbiorcze przesyłanie 50 plików",
      comparisonGoodItem4Text: "w każdej chwili",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Przejrzysta polityka",
      comparisonGoodItem5Text: "od początku",
      feature1Label: "Bez limitów",
      feature1TitlePart1: "Transkrybuj 1000 godzin?",
      feature1TitlePart2: "Ta sama cena.",
      feature1Description: "Przestań liczyć minuty. Przestań sprawdzać limity. Niezależnie od tego, czy transkrybujesz 10 czy 10 000 godzin miesięcznie, płacisz tę samą stałą stawkę. Brak dodatkowych opłat. Brak niespodzianek na rachunku.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Brak sztuczek z polityką "fair use"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Brak spowalniania po X godzinach",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Brak stresu pod koniec miesiąca",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Godziny miesięcznie",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Dodatkowe opłaty",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Prześlij w dowolnym momencie",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Przejrzyste",
      feature2Label: "Swoboda masowego przesyłania",
      feature2TitlePart1: "Prześlij swoje",
      feature2TitlePart2: "Całe archiwum",
      feature2Description: "Otter daje 3 importy na całe życie w wersji darmowej, 10 miesięcznie w Pro. My oferujemy nielimitowane. Prześlij zaległe podcasty, wszystkie wywiady, lata nagrań. Bez ograniczeń.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 plików na partię",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Obsługa plików 10-godzinnych",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Przetwarzaj podczas snu",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 importy na całe życie",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 plików/miesiąc",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Limit 50 godzin/miesiąc",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Naprawdę nielimitowane ✓",
      feature3Label: "Dowód społeczny",
      feature3TitlePart1: "Użytkownicy",
      feature3TitlePart2: "Przechodzą codziennie",
      feature3Description: "„Płacę 100$/rok za Otter, a ograniczają mnie do 10 importów plików miesięcznie. Gdy tylko pojawi się alternatywa z nielimitowanymi importami, odchodzę!” – Prawdziwy użytkownik Reddita",
      feature3Point1Icon: "✓",
      feature3Point1Text: "50 000+ użytkowników przeszło",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Od „shrinkflacji” Ottera",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Bez powrotu",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Zadowolonych użytkowników",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Przetworzonych plików",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Dokładność",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Brak ukrytych opłat",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minut/Miesiąc",
      trustBadge2Number: "100+",
      trustBadge2Label: "Języków",
      trustBadge3Number: "96%",
      trustBadge3Label: "Dokładność",
      trustBadge4Number: "50",
      trustBadge4Label: "Przesyłanie zbiorcze",
      ctaTitle: "Przestań płacić za fałszywie nielimitowane",
      ctaSubtitle: "Dołącz do tysięcy, którzy przeszli na naprawdę nielimitowaną transkrypcję",
      finalCta: "Wypróbuj NeverCap za darmo"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Swoboda zbiorczego przesyłania",
      heroTitleLine1: "Prześlij 50 plików.",
      heroTitleHighlight: "Przetwórz wszystko.",
      heroSubtitle: "Otter daje Ci 3 importy na całe życie. TRZY. Na całe Twoje życie. My dajemy nielimitowane przesyłanie, 50 plików na raz, kiedy tylko potrzebujesz.",
      primaryCta: "Rozpocznij zbiorcze przesyłanie →",
      secondaryCta: "Zobacz ograniczenia",
      redditQuote: '"Mam 3 lata odcinków podcastów do transkrypcji. Otter mówi, że dostaję 3 importy na całe życie. TRZY. To obraźliwe."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Prawdziwa frustracja z r/podcasting",
      comparisonSectionTitlePart1: "The",
      comparisonSectionTitleHighlight: "Niedorzeczne ograniczenia",
      comparisonSectionTitlePart2: "Które narzucają",
      comparisonSubtitle: "Jak konkurencja ogranicza Twoje możliwości przetwarzania treści",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importy na całe życie",
      limitCard1DescriptionLine2: "(Tak, na CAŁE Twoje życie)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Pliki miesięcznie",
      limitCard2DescriptionLine2: "(Plan $100/rok)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Plik na raz",
      limitCard3DescriptionLine2: "(Przesyłanie sekwencyjne)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Nielimitowane przesyłanie",
      limitCard4DescriptionLine2: "50 plików partiami",
      feature1Label: "Moc partii",
      feature1TitlePart1: "Przetwórz swoje",
      feature1TitleHighlight: "Całe archiwum",
      feature1TitlePart2: "W ciągu nocy",
      feature1Description: 'Prześlij 50 plików przed snem. Obudź się do gotowych transkrypcji. Brak kolejek, czekania, komunikatów "proszę o aktualizację". Czysta moc przetwarzania na wyciągnięcie ręki.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 jednoczesnych przesyłek",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Przetwarzanie równoległe",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Obsługa plików 10-godzinnych",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maksymalnie 5GB na plik",
      uploadAnimationText1: "50 Plików",
      uploadAnimationText2: "Upuść i przetwórz",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 więcej plików...",
      feature2Label: "Prędkość",
      feature2TitlePart1: "Od przesłania do",
      feature2TitleHighlight: "Gotowe w godzinach",
      feature2Description: "Nasza infrastruktura przetwarzania równoległego oznacza, że Twoje 50 plików nie czeka w kolejce. Wszystkie są transkrybowane jednocześnie. To, co kiedyś zajmowało tygodnie, teraz trwa godziny.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-godzinny plik: 5 minut",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 plików: przetwarzane równolegle",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Powiadomienie e-mail po zakończeniu",
      timelineStep1Icon: "1",
      timelineStep1Title: "Prześlij",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Przetwarzanie",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magia AI",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Zakończono",
      timelineStep4Time: "< 2 godziny",
      feature3Label: "Wolność",
      feature3TitlePart1: "Brak kolejek.",
      feature3TitleHighlight: "Brak oczekiwania.",
      feature3TitlePart2: "Brak limitów.",
      feature3Description: "Podczas gdy inni każą Ci czekać w wirtualnych kolejkach lub proszą o aktualizację do „priorytetowego przetwarzania”, my traktujemy każde przesłanie jako pilne. Twoje treści są ważne i nie powinny czekać.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Brak poziomów priorytetu",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Ta sama prędkość dla wszystkich",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Prześlij o każdej porze, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Zawsze gotowe",
      feature3VisualSubtext: "Prześlij, gdy dopadnie Cię inspiracja",
      useCasesTitlePart1: "Idealne dla",
      useCasesTitleHighlight: "Dużych nadawców",
      useCasesSubtitle: "Rzeczywiste scenariusze, w których masowe przesyłanie ratuje sytuację",
      useCase1Title: "Archiwa podcastów",
      useCase1Description: "Prześlij 3 lata odcinków naraz. Stwórz transkrypcje dla całego swojego katalogu. Generuj treści SEO dla każdego odcinka.",
      useCase2Title: "Tworzenie kursów",
      useCase2Description: "Przetwarzaj wszystkie swoje wykłady wideo jednocześnie. Twórz dostępne transkrypcje dla studentów. Buduj materiały kursowe z możliwością wyszukiwania.",
      useCase3Title: "Zaległe wywiady",
      useCase3Description: "Oczyść tę górę nieprzetranskrybowanych wywiadów. Przetwórz tygodnie badań w godzinach. Dotrzymaj terminu bez paniki.",
      useCase4Title: "Biblioteka YouTube",
      useCase4Description: "Generuj napisy dla całego kanału. Twórz posty na blogu z treści wideo. Popraw SEO we wszystkich filmach.",
      useCase5Title: "Archiwa spotkań",
      useCase5Description: "Prześlij miesiące nagranych spotkań. Twórz przeszukiwalne notatki ze spotkań. Nigdy więcej nie zgub ważnych decyzji.",
      useCase6Title: "Dane Badawcze",
      useCase6Description: "Przetwarzaj grupy fokusowe hurtowo. Transkrybuj wszystkie wywiady z uczestnikami. Analizuj dane jakościowe efektywnie.",
      ctaTitle: "Koniec z Proszeniem o Więcej Przesyłania",
      ctaSubtitle: "Otrzymaj nielimitowane przetwarzanie hurtowe, które naprawdę działa",
      finalCta: "Prześlij 50 Plików Teraz →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Wiodąca w Branży Dokładność",
      heroTitleLine1: "96% Dokładności.",
      heroTitleHighlight: "Każde Słowo Ma Znaczenie.",
      heroSubtitle: "Wiodąca w branży dokładność w 12 głównych językach. Znaczniki czasu na poziomie słów dla idealnej synchronizacji. Inteligentna identyfikacja mówców, radząca sobie z szybkimi rozmowami. Profesjonalne formatowanie, które jest naprawdę czytelne.",
      primaryCta: "Przetestuj Naszą Dokładność →",
      secondaryCta: "Zobacz Języki",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Dokładność w",
      statCard1DescriptionLine2: "12 Głównych Językach",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Dokładność przy",
      statCard2DescriptionLine2: "Akcentach & Dialektach",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Precyzja",
      statCard3DescriptionLine2: "Znaczników Czasu",
      languageSectionTitlePart1: "96% Dokładności",
      languageSubtitle: "Profesjonalna transkrypcja dla globalnych treści",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Angielski",
      languageCard1Accuracy: "96% Dokładności",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Hiszpański",
      languageCard2Accuracy: "96% Dokładności",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandaryński",
      languageCard3Accuracy: "96% Dokładności",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Francuski",
      languageCard4Accuracy: "96% Dokładności",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Niemiecki",
      languageCard5Accuracy: "96% Dokładności",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japoński",
      languageCard6Accuracy: "96% Dokładności",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreański",
      languageCard7Accuracy: "96% Dokładności",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugalski",
      languageCard8Accuracy: "96% Dokładności",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Rosyjski",
      languageCard9Accuracy: "96% Dokładności",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Włoski",
      languageCard10Accuracy: "96% Dokładności",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Holenderski",
      languageCard11Accuracy: "96% Dokładności",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabski",
      languageCard12Accuracy: "96% Dokładności",
      moreLanguagesText: "+ 88 więcej języków obsługiwanych z dokładnością 95%+",
      feature1Label: "Precyzja",
      feature1TitlePart1: "Na poziomie słów",
      feature1TitleHighlight: "Znaczniki czasu",
      feature1Description: "Każde słowo jest idealnie zsynchronizowane z pozycją w audio. Twórz klikalne transkrypcje, generuj precyzyjne napisy lub skacz do dokładnych momentów w nagraniach. Precyzja 100 ms, której ufają profesjonaliści.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precyzja znaczników czasu 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Idealne do edycji wideo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikalne interaktywne transkrypcje",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Napisy z dokładnością do klatki",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Osoba 1",
      transcriptLine1Text: "Witamy w dzisiejszym odcinku podcastu.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Osoba 2",
      transcriptLine2Text: "Dziękuję za zaproszenie do programu!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Osoba 1",
      transcriptLine3Text: "Przejdźmy do naszego głównego tematu...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Osoba 2",
      transcriptLine4Text: "Absolutnie, z przyjemnością o tym porozmawiamy.",
      feature2Label: "Inteligentne AI",
      feature2TitlePart1: "Radzi sobie z",
      feature2TitleHighlight: "Szybkimi rozmowami",
      feature2Description: "Nasze AI precyzyjnie identyfikuje mówców nawet podczas nakładających się wypowiedzi, przerwań i szybkich wymian zdań. Idealne do wywiadów, podcastów i spotkań, gdzie mówcy często przerywają.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identyfikuje do 20 mówców",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Doskonale radzi sobie z przerwaniami",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Działa z nakładającymi się wypowiedziami",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Zachowuje dokładność w rozmowach równoległych",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Zidentyfikowanych mówców",
      feature2VisualSubtext: "Nawet w szybkich rozmowach",
      feature3Label: "Czytelność",
      feature3TitlePart1: "Idealnie",
      feature3TitleHighlight: "Sformatowany tekst",
      feature3Description: "Koniec z blokami tekstu. Nasza AI automatycznie dodaje akapity, zdania i interpunkcję dokładnie tam, gdzie trzeba. Rezultat? Transkrypcje, które są przyjemne w czytaniu i łatwe do przeglądania.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Inteligentne podziały akapitów",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Dokładna interpunkcja",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Prawidłowa wielkość liter",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Czytelne i przejrzyste wyniki",
      formattingTitle: "Przed i po",
      formattingBeforeLabel: "❌ Inne:",
      formattingBeforeText: "so today were going to talk about the new features weve been working on i think youll really like them theyve been requested by users for a long time and we finally got them done",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "So today, we're going to talk about the new features we've been working on. I think you'll really like them. They've been requested by users for a long time, and we finally got them done.",
      comparisonSubtitle: "Dokładność",
      comparisonSectionTitle: "Porównanie",
      comparisonDes: "Zobacz, jak wypadamy na tle konkurencji",
      tableHeader1: "Funkcja",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Dokładność (czysty dźwięk)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Znaczniki czasowe na poziomie słów",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identyfikacja mówców",
      tableRow3NeverCap: "20 mówców",
      tableRow3Otter: "16 mówców",
      tableRow3Descript: "10 mówców",
      tableRow3Rev: "✕",
      tableRow4Feature: "Obsługa nakładania się wypowiedzi",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Ograniczona",
      tableRow4Descript: "Ograniczona",
      tableRow4Rev: "✕",
      tableRow5Feature: "Inteligentne formatowanie",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Podstawowe",
      tableRow6Feature: "12 języków na poziomie 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Doświadcz 96% dokładności",
      ctaSubtitle: "Prześlij najtrudniejszy plik audio i zobacz różnicę",
      finalCta: "Przetestuj naszą dokładność teraz →",
        languageSectionTitlePart2: "w 12 Głównych Językach"
    }
  },
  Pricing: {
    Hero: {
      "title": "Prosta, przejrzysta cena",
      "highlighted_text": "Brak ukrytych limitów",
      "description": "Wybierz plan dopasowany do Twoich potrzeb. Zmieniaj w każdej chwili. Brak umów, niespodzianek."
    },
    Cards: {
      "title": "Prosta, przejrzysta cena.",
      "highlighted_text": "Brak ukrytych limitów.",
      "description": "Wybierz plan dopasowany do Twoich potrzeb. Zmieniaj w każdej chwili. Brak umów, niespodzianek.",
      "plans": [
            {
              "name": "Darmowe",
              "price": "$0",
              "period": "miesiąc",
              "discount": "Idealne do wypróbowania naszej usługi",
              "limits": {
                "title": "Dzienne limity",
                "items": [
                  "3 pliki/dzień (≈90 min łącznie/dzień)",
                  "Do 30 min na plik (≤250 MB)",
                  "Prześlij 1 plik naraz",
                  "Standardowa kolejka priorytetowa"
                ]
              },
              "features": {
                "title": "Funkcje",
                "items": [
                  "100+ języków",
                  "Etykiety mówców",
                  "Tłumaczenie",
                  "Wszystkie formaty eksportu"
                ]
              },
              "cta": {
                "text": "Zacznij za darmo. Bez karty kredytowej.",
                "button": "Obecny plan"
              }
            },
            {
              "name": "Pro Miesięczna",
              "price": "$17.99",
              "period": "miesiąc",
              "discount": "$9.99 przez pierwszy miesiąc",
              "limits": {
                "title": "Brak miesięcznego limitu",
                "items": [
                  "Nielimitowane minuty łącznie",
                  "Do 10 godzin / 5 GB na plik",
                  "Prześlij 50 plików naraz",
                  "Priorytetowa kolejka"
                ]
              },
              "features": {
                "title": "Wszystko z Darmowego, plus",
                "items": [
                  "Znaczniki czasu na poziomie słów",
                  "Zaawansowana identyfikacja mówców",
                  "Formatowane akapity i interpunkcja",
                  "Priorytetowe wsparcie"
                ]
              },
              "cta": {
                "text": "Nielimitowane minuty. Priorytetowa prędkość. Zbiorcze przesyłanie.",
                "button": "Przejdź na Pro"
              },
              "badge": "Najpopularniejsze"
            },
            {
              "name": "Pro Roczna",
              "price": "$8.99",
              "period": "miesiąc",
              "discount": "Płatność roczna $107.88",
              "limits": {
                "title": "To samo co Pro Miesięczny",
                "items": [
                  "Nielimitowane minuty łącznie",
                  "Do 10 godzin / 5 GB na plik",
                  "Prześlij 50 plików naraz",
                  "Priorytetowa kolejka"
                ]
              },
              "features": {
                "title": "Wszystko z Darmowego, plus",
                "items": [
                  "Znaczniki czasu na poziomie słów",
                  "Zaawansowana identyfikacja mówców",
                  "Formatowane akapity i interpunkcja",
                  "Priorytetowe wsparcie"
                ]
              },
              "cta": {
                "text": "Nielimitowane minuty. Priorytetowa prędkość. Zbiorcze przesyłanie.",
                "button": "Przejdź na Pro"
              },
              "badge": "Najlepsza Wartość - "
            }
          ],
      "disclaimer": "„Nielimitowane” oznacza brak miesięcznego limitu i sztucznego spowalniania. Zasady uczciwego użytkowania dotyczą nadużywania automatyzacji lub redystrybucji."
    },
    ComparisonTable: {
      "header": {
        "title": "Porównaj",
        "highlighted_text": "Wszystkie funkcje",
        "subtitle": "Zobacz dokładnie, co otrzymujesz w każdym planie. Bez ukrytych ograniczeń."
      },
      "plans": [
              "Funkcje",
              "Free",
              "Pro Monthly",
              "Pro Annual"
            ],
      "features": [
            {
              "name": "Cena",
              "values": [
                "0 $/miesiąc",
                {
                  "main": "17,99 $/miesiąc",
                  "note": "9,99 $ pierwszy miesiąc"
                },
                {
                  "main": "8,99 $/miesiąc",
                  "note": "Rozliczenie 107,88 $/rok"
                }
              ]
            },
            {
              "name": "Miesięczne minuty",
              "values": ["~2 700 (90/dzień)", "Nielimitowane", "Nielimitowane"]
            },
            {
              "name": "Maksymalny czas pliku",
              "values": ["30 minut", "10 godzin", "10 godzin"]
            },
            {
              "name": "Maksymalny rozmiar pliku",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Zbiorcze przesyłanie",
              "values": ["1 plik", "50 plików", "50 plików"]
            },
            {
              "name": "Prędkość przetwarzania",
              "values": ["Standardowa", "Priorytetowa", "Priorytetowa"]
            },
            {
              "name": "Obsługiwane języki",
              "values": ["100+ języków", "100+ języków", "100+ języków"]
            },
            {
              "name": "Tłumaczenie",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Identyfikacja mówców",
              "values": ["Podstawowe", "Zaawansowane (20 mówców)", "Zaawansowane (20 mówców)"]
            },
            {
              "name": "Znaczniki czasowe na poziomie słów",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Formatowane akapity",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Format eksportu",
              "values": ["Wszystkie formaty", "Wszystkie formaty", "Wszystkie formaty"]
            },
            {
              "name": "Wsparcie",
              "values": ["E-mail", "Priorytetowy e-mail", "Priorytetowy e-mail"]
            },
            {
              "name": "Przechowywanie danych",
              "values": ["30 dni", "Na zawsze", "Na zawsze"]
            }
          ]
    },
    FAQ: {
      "title": "Często zadawane",
      "titleHighligt": "Pytania",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Czy to naprawdę nielimitowane?",
              "answer": "Tak! Plany Pro nie mają miesięcznych limitów minut. Jedynymi ograniczeniami są techniczne: maksymalny czas pliku to 10 godzin, a rozmiar pliku to 5GB. Możesz przetwarzać tyle plików, ile potrzebujesz."
            },
            {
              "q": "plan_change",
              "question": "Czy mogę zmienić plan w dowolnym momencie?",
              "answer": "Oczywiście! Możesz anulować subskrypcję w dowolnym momencie z poziomu panelu sterowania. Zmień plan na wyższy lub niższy, kiedy tylko chcesz."
            },
            {
              "q": "payment_methods",
              "question": "Jakie metody płatności akceptujecie?",
              "answer": "Akceptujemy wszystkie główne karty kredytowe, debetowe i PayPal w celu bezpiecznych i wygodnych płatności."
            },
            {
              "q": "free_trial",
              "question": "Czy jest darmowa wersja próbna dla Pro?",
              "answer": "Tak! Wypróbuj Pro za darmo przez 7 dni, bez podawania karty kredytowej. Dodatkowo, otrzymaj 45% zniżki w pierwszym miesiącu po subskrypcji."
            },
            {
              "q": "file_retention",
              "question": "Jak długo przechowujecie moje pliki?",
              "answer": "Darmowy plan: 30 dni. Plany Pro: Na zawsze! Twoje transkrypcje są zawsze dostępne na Twoim koncie."
            },
            {
              "q": "data_security",
              "question": "A co z bezpieczeństwem danych?",
              "answer": "Posiadamy certyfikat SOC 2 i stosujemy 256-bitowe szyfrowanie. Nigdy nie używamy Twoich treści do trenowania naszych modeli. Twoje dane należą do Ciebie."
            }
          ]
    },
    CTA: {
      "title": "Gotowy na Nielimitowane Możliwości?",
      "subtitle": "Dołącz do 50 000+ profesjonalistów przepisujących bez ograniczeń",
      "button": "Wypróbuj NeverCap Za Darmo →",
      "disclaimer": "Bez karty kredytowej • Zacznij przepisywać w kilka sekund"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Stworzone dla",
      heavyUsers: "Intensywnych Użytkowników",
      whoActuallyNeed: "Którzy Naprawdę Potrzebują Nielimitowanego",
      heroSubtitle: "Od podcastersów z latami zaległości po badaczy z setkami wywiadów. Zobacz, jak profesjonaliści używają NeverCap, aby uwolnić się od limitów przesyłania i ograniczeń czasowych.",
      podcasters: {
        title: "Podcasty",
        pain: '"Przestań wybierać, które odcinki zasługują na transkrypcję"',
        description: "Prześlij całe archiwum podcastu naraz. Generuj notatki, popraw SEO i wykorzystuj treści bez liczenia minut.",
        benefits: {
          benefit1: "Prześlij wszystkie odcinki, nie tylko 3",
          benefit2: "Generuj notatki przyjazne SEO",
          benefit3: "Twórz przeszukiwalne archiwa",
          benefit4: "Wykorzystaj jako treści blogowe"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Odcinków"
          },
          stat2: {
            number: "200 godz.",
            label: "Oszczędności"
          },
          stat3: {
            number: "3x",
            label: "Ruch SEO"
          }
        }
      },
      journalists: {
        title: "Dziennikarze i pisarze",
        pain: '"Presja terminów spotyka ograniczenia przesyłania"',
        description: "Zgrupuj i prześlij wszystkie wywiady przed terminem. Przeglądaj transkrypcje natychmiast i nie przegap kluczowego cytatu.",
        benefits: {
          benefit1: "Zgrupuj przesyłanie przed terminami",
          benefit2: "Przeszukaj wszystkie wywiady naraz",
          benefit3: "Dokładne cytaty ze znacznikami czasu",
          benefit4: "Obsługa akcentów i języków"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Wywiadów/mies."
          },
          stat2: {
            number: "96%",
            label: "Dokładność"
          },
          stat3: {
            number: "5 min",
            label: "Na godzinę"
          }
        }
      },
      contentCreators: {
        title: "Twórcy treści",
        pain: '"Dostępność nie powinna być droga"',
        description: "Dodaj napisy do całego kanału YouTube. Generuj napisy w wielu językach i natychmiast popraw SEO filmów.",
        benefits: {
          benefit1: "Dodaj napisy do wszystkich filmów naraz",
          benefit2: "Tłumaczenia w 249 językach",
          benefit3: "Pliki SRT gotowe do YouTube",
          benefit4: "Zwiększ pozycję wideo w SEO"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Filmów"
          },
          stat2: {
            number: "100+",
            label: "Języków"
          },
          stat3: {
            number: "249",
            label: "Tłumaczeń"
          }
        }
      },
      researchers: {
        title: "Badacze i naukowcy",
        pain: '"Dane jakościowe nie powinny czekać w kolejce"',
        description: "Przetwarzaj całe badania naraz. Obsługuj grupy fokusowe, wywiady i dyskusje panelowe z idealną identyfikacją mówców.",
        benefits: {
          benefit1: "Przetwarzaj grupy fokusowe zbiorczo",
          benefit2: "Identyfikacja 20 mówców",
          benefit3: "Eksport do oprogramowania analitycznego",
          benefit4: "Bezpieczeństwo zgodne z RODO"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Badań"
          },
          stat2: {
            number: "96%",
            label: "Dokładność grupy"
          },
          stat3: {
            number: "RODO",
            label: "Zgodne"
          }
        }
      },
      businessTeams: {
        title: "Zespoły biznesowe",
        pain: '"Nagrywanie spotkań powinno być łatwe"',
        description: "Nagrywaj spotkania bezpośrednio lub wgrywaj pliki audio, aby uzyskać natychmiastową transkrypcję. Twórz przeszukiwalne archiwa z nieograniczonych rozmów i nigdy więcej nie trać ważnych dyskusji.",
        benefits: {
          benefit1: "Bezpośrednie nagrywanie i transkrypcja audio",
          benefit2: "Nieograniczone nagrania spotkań",
          benefit3: "Przeszukiwalne archiwum spotkań",
          benefit4: "Natychmiastowe wgrywanie plików audio"
        },
        stats: {
          stat1: {
            number: "Na żywo",
            label: "Nagrywanie"
          },
          stat2: {
            number: "Natychmiastowe",
            label: "Wgraj"
          },
          stat3: {
            number: "20+",
            label: "Prelegenci"
          }
        }
      },
      educators: {
        title: "Edukatorzy",
        pain: '"Filmy na YouTube potrzebują natychmiastowej transkrypcji"',
        description: "Po prostu wklej linki YouTube, aby uzyskać natychmiastowe transkrypcje i automatycznie generowane napisy. Przekształć każdy film edukacyjny w dostępną, przeszukiwalną treść.",
        benefits: {
          benefit1: "Bezpośrednia transkrypcja linków YouTube",
          benefit2: "Automatyczne generowanie napisów do filmów",
          benefit3: "Transkrybuj całe kursy",
          benefit4: "Przeszukiwalne archiwa wykładów"
        },
        stats: {
          stat1: {
            number: "1-Klik",
            label: "Wklej YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Napisy"
          },
          stat3: {
            number: "100+",
            label: "Języki"
          }
        }
      },
      quotes: {
        title: "Prawdziwi użytkownicy,",
        titleHighlight: "Prawdziwa wolność",
        subtitle: "Posłuchaj profesjonalistów, którzy uwolnili się od sztucznych ograniczeń",
        testimonials: {
          mike: {
            textBefore: '"Miałem',
            highlight: "3 lata odcinków",
            textAfter: 'nietranskrybowanych. Otter kazał mi wybrać 3. TRZY. NeverCap pozwolił mi wgrać wszystkie 150 odcinków w jeden weekend."',
            name: "Mike Rodriguez",
            role: "Gospodarz podcastu"
          },
          jessica: {
            textBefore: '"Jako dziennikarka freelancer nie stać mnie na Trint za',
            highlight: "$100/miesiąc",
            textAfter: ', ale też nie mogę pracować z limitem 10 plików miesięcznie w Otter. NeverCap uratował moją karierę."',
            name: "Jessica Park",
            role: "Dziennikarka freelancer"
          },
          sarah: {
            textBefore: '"Nasz zespół badawczy miał',
            highlight: "200 godzin",
            textAfter: 'nagrań grup fokusowych. Przetworzyliśmy wszystko w jeden weekend zamiast racjonować minuty miesięcznie."',
            name: "Dr Sarah Chen",
            role: "Główny badacz"
          },
          carlos: {
            textBefore: '"Tworzę treści edukacyjne po hiszpańsku. NeverCap doskonale transkrybuje i',
            highlight: "tłumaczy na angielski",
            textAfter: 'dla szerszego zasięgu. Brak limitów, tylko rozwój."',
            name: "Carlos Martinez",
            role: "YouTube Educator"
          }
        }
      },
      industries: {
        title: "Zaufany w różnych",
        titleHighlight: "Branżach",
        subtitle: "Profesjonaliści na całym świecie przechodzą na prawdziwie nielimitowane rozwiązania",
        list: {
          media: "Media i Wydawnictwa",
          education: "Edukacja",
          healthcare: "Opieka Zdrowotna",
          technology: "Technologia",
          finance: "Finanse",
          legal: "Prawo"
        }
      },
      cta: {
        title: "Twój przypadek użycia też potrzebuje nielimitowanych możliwości",
        subtitle: "Dołącz do 50 000+ profesjonalistów, którzy przestali liczyć minuty i zaczęli tworzyć",
        button: "Rozpocznij swoją nielimitowaną podróż →"
      }
    },
    Podcasters: {
      badge: "Stworzone dla podcasterów",
      heroTitle: "Transkrybuj swoje",
      heroTitleHighlight: "Całe archiwum podcastów",
      heroSubtitle: "Prześlij całe swoje archiwum. Twórz notatki do każdego odcinka. Koniec z wybieraniem, które odcinki transkrybować.",
      ctaPrimary: "Zacznij transkrybować za darmo",
      ctaSecondary: "Zobacz, jak to działa",
      trustBadge1: "10 000+ podcasterów",
      trustBadge2: "Nielimitowane odcinki",
      trustBadge3: "Transkrypcje gotowe pod SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Odcinków/Miesiąc"
        },
        stat2: {
          number: "50",
          label: "Zbiorcze przesyłanie"
        },
        stat3: {
          number: "10 godz.",
          label: "Maksymalna długość odcinka"
        },
        stat4: {
          number: "96%",
          label: "Dokładność"
        }
      },
      problemTitle: "Problem",
      problemTitleHighlight: "z transkrypcją podcastów",
      problemSubtitle: 'Inne usługi zmuszają cię do wyboru, które odcinki są "warte" transkrypcji',
      problems: {
        problem1: {
          title: "Limity przesyłania niszczą archiwa",
          description: "Otter daje 3 importy na całe życie w wersji darmowej, 10 miesięcznie w Pro. Jak przetranskrybować 3 lata odcinków?"
        },
        problem2: {
          title: "Stracone szanse SEO",
          description: "Każdy nieprzetranskrybowany odcinek to stracony ruch SEO. Descript ogranicza cię do 30 godzin/miesiąc."
        },
        problem3: {
          title: "Koszty rosną wraz z rozwojem",
          description: "Wraz z rozwojem podcastu koszty transkrypcji gwałtownie rosną. Opłaty $2/godz. za przekroczenie uniemożliwiają skalowanie."
        }
      },
      solutionTitle: "Rozwiązanie",
      solutionTitleHighlight: "NeverCap",
      solutionDescription: "Prawdziwie nielimitowana transkrypcja. Prześlij całe archiwum. Transkrybuj każdy nowy odcinek. Generuj notatki na skalę. Bez limitów, tylko rozwój.",
      workflowTitle: "Twój przepływ pracy",
      workflowTitleHighlight: "Uproszczony",
      workflowSubtitle: "Od nagrania do zoptymalizowanych pod SEO notatek w kilka minut",
      workflow: {
        step1: {
          title: "Prześlij odcinki",
          description: "Wrzuć 50 odcinków naraz. MP3, MP4, WAV - obsługujemy wszystkie."
        },
        step2: {
          title: "AI transkrybuje",
          description: "96% dokładności z identyfikacją mówców. Idealne do wywiadów."
        },
        step3: {
          title: "Inteligentne formatowanie",
          description: "AI automatycznie dodaje akapity, zdania i interpunkcję."
        },
        step4: {
          title: "Publikuj i pozycjonuj",
          description: "Eksportuj na swoją stronę. Obserwuj wzrost ruchu SEO."
        }
      },
      featuresTitle: "Funkcje dla podcastersów",
      featuresTitleHighlight: "Naprawdę potrzebne",
      featuresSubtitle: "Stworzone przez podcastersów, dla podcastersów",
      features: {
        feature1: {
          title: "Wykrywanie wielu mówców",
          description: "Automatycznie identyfikuje i oznacza do 20 mówców. Idealne do dyskusji panelowych, wywiadów i programów z współgospodarzami."
        },
        feature2: {
          title: "Rozdziały ze znacznikami czasu",
          description: "Generuj klikalne znaczniki czasu do opisów na YouTube. Pozwól słuchaczom przejść od razu do ulubionych fragmentów."
        },
        feature3: {
          title: "Inteligentne formatowanie",
          description: "Automatycznie dodaje akapity, zdania i interpunkcję. Otrzymuj czyste, czytelne transkrypcje. Oszczędzaj godziny na postprodukcji."
        },
        feature4: {
          title: "Optymalizacja SEO",
          description: "Transkrypcje sformatowane pod kątem wyszukiwarek. Zwiększ widoczność podcastu i dotrzyj do nowych odbiorców."
        },
        feature5: {
          title: "100+ języków",
          description: "Transkrybuj w dowolnym języku. Tłumacz na 249+ języków. Dotrzyj do globalnej publiczności bez wysiłku."
        },
        feature6: {
          title: "Przetwarzanie wsadowe",
          description: "Prześlij 50 odcinków przed snem. Obudź się do gotowych transkrypcji. Przetwórz całe archiwum w ciągu nocy."
        }
      },
      testimonialsTitle: "Podcastersów, którzy dokonali",
      testimonialsTitleHighlight: "Zmiany",
      testimonialsSubtitle: "Prawdziwe historie od prawdziwych podcastersów",
      testimonials: {
        mike: {
          text: '"Prowadzę podcast od 3 lat i ręcznie transkrybowałem wszystko jak idiota. Przesłałem 6 odcinków naraz, a program idealnie oddzielił mnie i mojego współgospodarza. Odcinek w kawiarni, który myślałem, że jest zrujnowany? Krystalicznie czysta transkrypcja. Nigdy więcej nie będę tego sam przepisywał."',
          name: "Mike Rodriguez",
          role: 'Gospodarz podcastu "The Daily Grind"'
        },
        sarah: {
          text: '"Otter ograniczał mnie do 10 importów plików miesięcznie. Miałem 150 zaległych odcinków. NeverCap pozwolił mi przesłać wszystko w 3 partiach. Mój organiczny ruch wzrósł o 300% od dodania transkrypcji do starych odcinków. To dosłownie się zwraca."',
          name: "Sarah Chen",
          role: 'Twórca "Tech Talks Today"'
        }
      },
      comparisonTitle: "Dlaczego podcasterszy wybierają",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Zobacz, jak wypadamy na tle konkurencji",
      comparison: {
        headers: {
          feature: "Funkcja",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Limit odcinków miesięcznie",
            nevercap: "Nielimitowane",
            otter: "~13 odcinków (1200 min)",
            descript: "~30 odcinków (30 godz.)"
          },
          uploadLimit: {
            feature: "Limit przesyłania plików",
            nevercap: "Nielimitowane",
            otter: "10 miesięcznie",
            descript: "1 naraz"
          },
          batchProcessing: {
            feature: "Przetwarzanie wsadowe",
            nevercap: "50 plików",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksymalna długość odcinka",
            nevercap: "10 godzin",
            otter: "90 minut",
            descript: "Nielimitowane"
          },
          speakerDetection: {
            feature: "Wykrywanie mówców",
            nevercap: "20 mówców",
            otter: "16 mówców",
            descript: "10 mówców"
          },
          smartFormatting: {
            feature: "Inteligentne formatowanie",
            nevercap: "✓ Idealne",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Cena",
            nevercap: "$17.99/mies.",
            otter: "$16.99/mies.",
            descript: "$30/mies."
          }
        }
      },
      ctaTitle: "Zacznij transkrybować każdy odcinek",
      ctaSubtitle: "Dołącz do 10 000+ podcastów, które nigdy nie martwią się limitami",
      ctaButton: "Prześlij swoje pierwsze 50 odcinków za darmo →",
      ctaDisclaimer: "Bez karty kredytowej • Przetwarzaj nieograniczoną liczbę odcinków • Anuluj w dowolnym momencie"
    },
    Journalists: {
      hero: {
        badge: "Dla dziennikarzy i pisarzy",
        title: "Transkrybuj każdy wywiad.",
        titleHighlight: "Nigdy nie przegap cytatu.",
        subtitle: "Przestań wybierać, które wywiady zasługują na transkrypcję. Prześlij wszystkie nagrania naraz, przeszukuj wszystko natychmiast i dotrzymuj terminów bez stresu związanego z przesyłaniem.",
        ctaPrimary: "Rozpocznij nieograniczone przesyłanie →",
        ctaSecondary: "Zobacz, jak to działa",
        stats: {
          uploads: {
            number: "∞",
            label: "Przesyłanie plików"
          },
          accuracy: {
            number: "96%",
            label: "Dokładność"
          },
          speed: {
            number: "5 min",
            label: "Na godzinę"
          }
        },
        dashboard: {
          title: "Kolejka wywiadów",
          status: "• Wszystkie w trakcie przetwarzania",
          interviews: {
            cityCouncil: {
              title: "Posiedzenie rady miasta",
              duration: "2h 15min • Przesyłanie...",
              action: "Przetwarzanie"
            },
            expertInterview: {
              title: "Wywiad z ekspertem - Dr. Chen",
              duration: "45min • Transkrybowanie...",
              action: "96% ukończono"
            },
            pressConference: {
              title: "Konferencja prasowa",
              duration: "1h 30min • Gotowe",
              action: "Zobacz →"
            },
            phoneInterview: {
              title: "Wywiad telefoniczny - Źródło",
              duration: "35min • Gotowe",
              action: "Zobacz →"
            }
          }
        }
      },
      problem: {
        title: "Problem",
        titleHighlight: "Transkrypcji dla Dziennikarzy",
        subtitle: 'Inne usługi zmuszają cię do wyboru, które wywiady są "warte" transkrypcji',
        problems: {
          uploadLimits: {
            title: "Limity przesyłania zabijają śledztwa",
            description: "Otter daje ci 10 importów plików miesięcznie w Pro. Jak przetranskrybować 3 tygodnie wywiadów śledczych?"
          },
          missingQuotes: {
            title: "Brak kluczowych cytatów",
            description: "Każdy nieprzetranskrybowany wywiad może zawierać kluczowy cytat historii. Ale Trint ogranicza cię do 50 godzin/miesiąc w najlepszym przypadku."
          },
          costExplosion: {
            title: "Koszty eksplodują z terminami",
            description: "W miarę pogłębiania śledztwa koszty transkrypcji gwałtownie rosną. Dodatkowe opłaty 100$/miesiąc uniemożliwiają pracę nad breaking news."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "Rozwiązanie NeverCap",
          description: "Prawdziwie nieograniczona transkrypcja. Prześlij całe śledztwo. Transkrybuj każdy wywiad. Natychmiast wyszukuj cytaty. Bez limitów, bez ograniczeń - czysty dziennikarstwo."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Najlepsze oprogramowanie do transkrypcji wywiadów",
        titleSuffix: "dla Dziennikarzy",
        subtitle: "Rzeczywiste zalety, które mają znaczenie, gdy liczy się termin i precyzja",
        solutions: {
          unlimitedUploads: {
            label: "Nieograniczona Objętość",
            title: "Nieograniczona Objętość dla Wszystkich Wywiadów",
            description: "W przeciwieństwie do oprogramowania z limitami minutowymi, możesz transkrybować każdy wywiad - od krótkiej rozmowy po wielogodzinną dyskusję. Nigdy nie zabraknie Ci środków przed deadline'em.",
            points: {
              simultaneousUpload: "Brak miesięcznych limitów minut",
              noLimits: "Obsługa 10-godzinnych wywiadów",
              processWhileWrite: "Przetwarzaj całe śledztwa naraz",
              longRecordings: "Obsługa nagrań do 10 godzin"
            },
            visual: {
              number: "∞",
              label: "Bez Limitów. Nigdy."
            }
          },
          instantSearch: {
            label: "Błyskawiczna Prędkość",
            title: "Prędkość Dostosowana do Cyklu Informacyjnego",
            description: "Otrzymuj transkrypcję wywiadu w minutach, nie dniach. Publikuj materiały szybciej niż kiedykolwiek. Nasze AI przetwarza godziny nagrań, gdy Ty pijesz kawę.",
            points: {
              searchAll: "5-minutowe przetwarzanie dla 1-godzinnych wywiadów",
              wordTimestamps: "Priorytetowe przetwarzanie pilnych materiałów",
              jumpToMoments: "Śledzenie postępów w czasie rzeczywistym"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Na Godzinę Nagrania",
              results: {
                mayorInterview: "„...nasza polityka klimatyczna ulegnie zmianie...”",
                expertPanel: "„...oświadczenie polityczne wyraźnie pokazuje...”"
              }
            }
          },
          professionalAccuracy: {
            label: "Gotowość do Cytowania",
            title: "Dokładność, Którą Możesz Cytować",
            description: "Nasze AI dostarcza wysoce dokładne transkrypcje, gwarantując precyzyjne i wiarygodne cytaty. Profesjonalna transkrypcja, której ufają redaktorzy.",
            points: {
              accuracyGuarantee: "Gwarancja 96% dokładności",
              handlesAccents: "Obsługa terminologii technicznej",
              smartPunctuation: "Idealna identyfikacja mówców"
            },
            visual: {
              accuracy: "96%",
              label: "Dokładność Gotowa do Publikacji",
              transcript: {
                speaker1: "„Śledztwo ujawniło istotne rozbieżności w sprawozdaniach finansowych”.",
                speaker2: "„Czy może Pan wyjaśnić, na czym dokładnie polegają te rozbieżności?”"
              }
            }
          },
            ironclad: {
                  label: "Ochrona Źródeł",
                  title: "Żelazna Ochrona Źródeł",
                  description: "Oferujemy solidne funkcje bezpieczeństwa chroniące wrażliwe dane wywiadów i poufne źródła. Szyfrowanie na poziomie bankowym zabezpiecza Twoje śledztwa.",
                  points: {
                    accuracyGuarantee: "Szyfrowanie end-to-end",
                    handlesAccents: "Opcje automatycznego usuwania plików",
                    smartPunctuation: "Zgodne z RODO i przepisami o prywatności"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maksymalne Bezpieczeństwo"
                  }
                }
        }
      },
      features: {
        title: "Wszystko, czego",
        titleHighlight: "Potrzebuje Dziennikarz",
        subtitle: "Profesjonalne narzędzia dopasowane do Twojego workflow",
        featuresList: {
          languages: {
            title: "100+ Języków",
            description: "Prowadź wywiady globalnie w 12 głównych językach z 96% dokładnością."
          },
          exportFormats: {
            title: "Format Eksportu",
            description: "Word, PDF, SRT, TXT. Kompatybilne z każdym workflow."
          },
          sourceProtection: {
            title: "Ochrona Źródeł",
            description: "Szyfrowanie na poziomie bankowym. Twoje źródła pozostają poufne."
          },
          timestamps: {
            title: "Znaczniki czasu",
            description: "Kliknij dowolny cytat, aby przejść do dokładnego momentu w nagraniu."
          },
          teamSharing: {
            title: "Udostępnianie zespołowe",
            description: "Współpracuj z redaktorami. Bezpiecznie udostępniaj transkrypcje."
          },
          mobileReady: {
            title: "Gotowe na mobilne",
            description: "Wgrywaj z telefonu. Przeglądaj transkrypcje wszędzie."
          },
          smartFormatting: {
            title: "Inteligentne formatowanie",
            description: "Automatyczne akapity i interpunkcja dla czytelnych transkrypcji."
          },
          batchProcessing: {
            title: "Przetwarzanie zbiorcze",
            description: "Wgraj 50 plików naraz. Przetwarzaj przez noc, gdy śpisz."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Miałem 3 lata niewykorzystanych wywiadów z powodu limitów wgrywania. NeverCap pozwolił mi przetworzyć wszystko w jeden weekend. Rewolucja.",
          name: "Jessica Park",
          role: "Dziennikarka Freelance, Była Użytkowniczka Otter"
        }
      },
      cta: {
        title: "Rozpocznij transkrypcję",
        titleHighlight: "Bez ograniczeń",
        subtitle: "Dołącz do tysięcy dziennikarzy, którzy przestali liczyć przesyłane pliki i skupili się na historii",
        ctaPrimary: "Wypróbuj bez ograniczeń za darmo →",
        ctaSecondary: "Zobacz cennik"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Dla twórców treści",
        title: "Transkrybuj filmy z YouTube,",
        titleHighlight: "Bez ograniczeń",
        titleSuffix: "1",
        subtitle: "Niezależnie od tego, czy chcesz przetranskrybować film z YouTube, TikTok do ponownego wykorzystania, czy przekonwertować film z Facebooka na tekst, nasza platforma radzi sobie z tym bezproblemowo. Generuj napisy w 100+ językach bez miesięcznych limitów – tylko czysta wolność twórcza.",
        ctaPrimary: "Rozpocznij nieograniczone napisy →",
        ctaSecondary: "Zobacz, jak to działa",
        stats: {
          videos: {
            number: "∞",
            label: "Filmy/Miesiąc"
          },
          languages: {
            number: "100+",
            label: "Języki"
          },
          accuracy: {
            number: "96%",
            label: "Dokładność"
          },
          platforms: {
            number: "10+",
            label: "Platformy"
          }
        }
      },
      platforms: {
        title: "Pobierz i transkrybuj z dowolnej platformy",
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
          titleMax: "Transkrybuj filmy z",
          titleMaxHighlight: "Dowolnej platformy"
    },
      features: {
        title: "Wszystko, czego potrzebujesz, aby",
        titleHighlight: "Skalować treści",
        subtitle: "Profesjonalne narzędzia bez profesjonalnych ograniczeń",
        oneClickImport: {
          label: "Import jednym kliknięciem",
          title: "Transkrybuj filmy z YouTube, TikTok &",
          titleHighlight: "Instagram przez wklejenie linku",
          description: "Nasze narzędzie upraszcza transkrypcję treści wideo. Aby przetranskrybować film z Instagrama, wystarczy wkleić link. To samo dotyczy transkrypcji filmów z Vimeo. Przetwórz całą zawartość swojego kanału w jeden weekend.",
          points: {
            directYoutube: "Bezpośrednia transkrypcja linków YouTube",
            multiplePlatforms: "Pobieranie z 10+ platform",
            batchPlaylists: "Przetwarzanie całych playlist",
            autoSync: "Automatyczna synchronizacja z kanałami"
          },
          demo: {
            instruction: "Wklej adres URL filmu:",
            url: "https://youtube.com/watch?v=...",
            status: "Pobieranie i transkrybowanie..."
          }
        },
        globalReach: {
          label: "Zasięg globalny",
          title: "100+ języków.",
          titleHighlight: "Zero ograniczeń.",
          description: "Dotrzyj do globalnej publiczności dzięki automatycznemu tłumaczeniu na 100+ języków. Generuj napisy w wielu językach jednocześnie. Bez dodatkowych opłat, bez miesięcznych limitów tłumaczeń.",
          points: {
            highAccuracy: "96% dokładności w 12 głównych językach",
            unlimitedTranslations: "Nielimitowane tłumaczenia w pakiecie",
            multicultural: "Idealne dla treści wielokulturowych",
            autoDetect: "Automatyczne wykrywanie języka źródłowego"
          },
          visual: {
            number: "100+",
            title: "Obsługiwane języki",
            subtitle: "Przetłumacz raz, dotrzyj do wszystkich"
          }
        },
        flexibleExport: {
          label: "Elastyczny eksport",
          title: "Każdy format",
          titleHighlight: "Którego potrzebujesz",
          description: "Eksportuj w formacie dopasowanym do Twojego workflow. Od plików SRT dla YouTube po VTT dla odtwarzaczy internetowych lub edytowalne dokumenty dla scenariuszy. Wszystkie eksporty nielimitowane, w każdym pakiecie.",
          points: {
            videoFormats: "SRT & VTT dla platform wideo",
            editingFormats: "DOCX & PDF do edycji",
            dataAnalysis: "CSV do analizy danych",
            simpleScripts: "TXT dla prostych scenariuszy"
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
        title: "Od przesłania do",
        titleHighlight: "Opublikowania",
        titleSuffix: "W kilka minut",
        subtitle: "Najszybszy sposób na dodanie napisów do całej biblioteki treści",
        steps: {
          pasteLinks: {
            title: "Wklej linki",
            description: "Dodaj linki z YouTube, TikTok lub dowolnego innego źródła. Lub prześlij pliki bezpośrednio."
          },
          autoTranscribe: {
            title: "Auto-transkrypcja",
            description: "AI przetwarza z 96% dokładnością. Obsługuje akcenty i wielu mówców."
          },
          editTranslate: {
            title: "Edytuj i tłumacz",
            description: "Dopracuj napisy. Natychmiast tłumacz na 100+ języków."
          },
          exportPublish: {
            title: "Eksportuj i publikuj",
            description: "Pobierz w dowolnym formacie. Prześlij na swoją platformę. Gotowe!"
          }
        }
      },
      testimonials: {
        title: "Twórcy",
        titleHighlight: "Przechodzą codziennie",
        subtitle: "Od ograniczonych planów do nieograniczonej swobody",
        carlos: {
          textBefore: "Tworzę edukacyjne treści po hiszpańsku. NeverCap doskonale transkrybuje i",
          textAfter: "zwiększa zasięg. Bez limitów, tylko rozwój. Liczba wyświetleń na moim kanale wzrosła 3-krotnie po dodaniu napisów wielojęzycznych.",
          highlight: "tłumaczy na angielski",
          name: "Carlos Martinez",
          role: "Edukator YouTube • 250 tys. subskrybentów"
        },
        sarah: {
          textBefore: "Descript chciał 30$/miesiąc za",
          textAfter: ". Miałem 500+ filmów w kolejce. NeverCap pozwolił mi przetworzyć wszystko w jeden weekend. Wzrost SEO dzięki napisom zwrócił się w pierwszym miesiącu.",
          highlight: "30 godzin",
          name: "Sarah Lee",
          role: "Vlogger lifestylowy • 180 tys. subskrybentów"
        },
        jake: {
          textBefore: "Funkcja",
          textAfter: "to przełom. Nie pobieram już niczego. Wklej, transkrybuj, gotowe. Przetwarzanie fragmentów podcastów na TikToka nigdy nie było łatwiejsze.",
          highlight: "bezpośrednie pobieranie z YouTube",
          name: "Jake Wilson",
          role: "Gospodarz podcastu • Top 1% twórców"
        },
        yuki: {
          textBefore: "Tworzę treści w 5 językach. Inne usługi pobierają",
          textAfter: ". NeverCap daje mi nielimitowane tłumaczenia. Moja międzynarodowa widownia wzrosła o 400% od kiedy używam właściwych napisów.",
          highlight: "za tłumaczenie",
          name: "Yuki Tanaka",
          role: "Twórca gier • 500 tys. subskrybentów"
        }
      },
      cta: {
        title: "Twój cały kanał. Z napisami. Już dziś.",
        subtitle: "Dołącz do 50 000+ twórców, którzy przestali liczyć minuty i zaczęli tworzyć",
        button: "Rozpocznij nielimitowane dodawanie napisów →"
      },
        FAQSection: {
              "title": "Twoje pytania o transkrypcję,",
              "titleHighlight": "Odpowiedzi",
              subtitle: "Wszystko, co musisz wiedzieć o transkrybowaniu filmów z różnych platform",
              "questions": [
                    {
                      "question": "P: Jak przetranskrybować film z YouTube za pomocą NeverCap?",
                      "answer": "To proste. Znajdź film YouTube, który chcesz transkrybować, skopiuj jego URL i wklej do naszej aplikacji. Nasze AI automatycznie pobierze film i dostarczy pełną transkrypcję tekstową w kilka minut."
                    },
                    {
                      "question": "P: Jaki jest najlepszy sposób na transkrypcję filmu z Facebooka?",
                      "answer": "Najłatwiej użyć bezpośredniego linku. Skopiuj URL filmu z Facebooka, a nasza platforma zajmie się resztą, konwertując mowę na tekst z dokładnością do 96%, oszczędzając Ci ręcznej transkrypcji."
                    },
                    {
                      "question": "P: Czy mogę transkrybować filmy z TikTok i Instagrama?",
                      "answer": "Oczywiście. Obsługujemy transkrypcję filmów z TikTok i Instagrama. To idealne rozwiązanie dla twórców, którzy chcą wykorzystać swoje krótkie filmy w postach na blogu, artykułach lub tekstowych aktualizacjach w mediach społecznościowych."
                    },
                    {
                      "question": "P: Jak przetranskrybować film z Vimeo?",
                      "answer": "Transkrypcja filmów z Vimeo jest tak samo prosta jak z innych platform. Po prostu skopiuj URL filmu Vimeo i wklej go do NeverCap. Nasze AI przetworzy film i wygeneruje dokładną transkrypcję tekstową, którą możesz pobrać w wielu formatach."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Stworzone dla doskonałości akademickiej",
      heroTitle1: "Transkrybuj każde interview.",
      heroTitle2: "Analizuj wszystkie dane.",
      heroSubtitle: "Przestań wybierać, które grupy fokusowe transkrybować. Przetwarzaj wszystkie dane jakościowe z 96% dokładnością i perfekcyjną identyfikacją mówców - nawet gdy 20 uczestników mówi jednocześnie.",
      heroCtaPrimary: "Wypróbuj za darmo - bez karty kredytowej",
      heroCtaSecondary: "Zobacz, jak to działa",
      statsInterviewHours: "Godziny wywiadów",
      statsAccuracy: "Dokładność",
      statsSpeakersId: "Identyfikacja mówców",
      statsCompliant: "Zgodne",
      problemTitle: "Problem",
      problemSubtitle: 'Inne usługi zmuszają Cię do wyboru, które dane są "warte" transkrypcji',
      problemCard1Title: "Limity przesyłania niszczą badania",
      problemCard1Desc: "Otter daje tylko 3 importy na całe życie. Jak przetranskrybować 200 godzin grup fokusowych?",
      problemCard2Title: "Brakujące kluczowe dane",
      problemCard2Desc: "Każde nieprzetranskrybowane interview może zawierać przełomowe spostrzeżenia. Ale Rev pobiera minimum 2$/minutę.",
      problemCard3Title: "Środki na granty znikają",
      problemCard3Desc: "Wraz ze wzrostem zbioru danych koszty transkrypcji eksplodują. 500 dolarów za grupę fokusową uniemożliwia skalowanie.",
      solutionTitle: "Rozwiązanie NeverCap",
      solutionDesc: "Prawdziwie nieograniczona transkrypcja. Prześlij całe badanie. Transkrybuj każdy wywiad. Analizuj wszystkie dane. Bez limitów, bez ograniczeń, tylko badania.",
      feature1Label: "Bez ograniczeń",
      feature1Title: "Obsługa Twojego",
      feature1Desc: 'Prześlij dziś wieczorem wszystkie 200 godzin wywiadów. Obudź się do gotowych, przeszukiwalnych transkrypcji. Brak miesięcznych limitów, ograniczeń na plik czy "uczciwego użytku".',
      feature1Point1: "Zbiorcze przesyłanie 50 plików jednocześnie",
      feature1Point2: "Kompletne przetwarzanie badań longitudinalnych",
      feature1Point3: "Brak limitów przechowywania transkrypcji",
      feature1Point4: "Eksport do NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Nieograniczona liczba godzin",
      feature1Visual2: "Ta sama cena dla 10 i 10 000 godzin",
      feature2Label: "Inteligentna AI",
      feature2Title: "Precyzyjne podejście",
      feature2Desc: "Nasza AI śledzi do 20 mówców nawet gdy mówią jednocześnie, przerywają sobie lub wtrącają się. Każdy głos jest poprawnie przechwycony i oznaczony.",
      feature2Point1: "Identyfikacja 20 mówców",
      feature2Point2: "Obsługa nakładających się wypowiedzi i przerw",
      feature2Point3: "Etykiety mówców, które możesz zmienić",
      feature2Point4: "Znacznik czasu dla każdego słowa",
      conversationParticipant1: "Uczestnik 1",
      conversationText1: "Główną barierą są zdecydowanie koszty leczenia...",
      conversationParticipant2: "Uczestnik 2",
      conversationText2: "Zgadzam się, ale dodałbym, że dostęp to—",
      conversationParticipant3: "Uczestnik 3",
      conversationText3: "—przepraszam, że przerywam, ale transport też jest ogromnym problemem.",
      conversationText4: "Tak! Właśnie to chciałem powiedzieć.",
      conversationParticipant4: "Uczestnik 4",
      conversationText5: "Na obszarach wiejskich to wszystkie trzy: koszt, dostęp I transport.",
      feature3Label: "Precyzja",
      feature3Title: "Godne zaufania",
      feature3Desc: "Obsługuje żargon techniczny, silne akcenty i terminologię specjalistyczną jak profesjonalista. Wystarczająco dokładne dla publikacji, recenzji i komisji doktorskiej.",
      feature3Point1: "Terminologia medyczna i naukowa",
      feature3Point2: "100+ języków i dialektów",
      feature3Point3: "Tryby dosłowne i uproszczone",
      feature3Point4: "Edytuj i eksportuj w dowolnym formacie",
      feature3Visual1: "Dokładność na poziomie badawczym",
      feature3Visual2: "Zaufane przez 50 000+ badaczy",
      feature4Label: "Bezpieczeństwo",
      feature4Title: "Certyfikat zgodności IRB",
      feature4Desc: "Twoje wrażliwe dane badawcze chronione są zabezpieczeniami klasy enterprise. Zgodność z RODO, opcje zgodne z HIPAA i pełne ślady audytowe dla wymogów IRB.",
      feature4Point1: "Szyfrowanie end-to-end",
      feature4Point2: "Zgodne z RODO i CCPA",
      feature4Point3: "Polityki automatycznego usuwania",
      feature4Point4: "Bezpieczna współpraca zespołowa",
      useCasesTitle: "Idealne dla",
      useCasesSubtitle: "Od etnografii po badania kliniczne",
      useCase1Title: "Grupy fokusowe",
      useCase1Desc: "Obsługa 8-20 uczestników z nakładającymi się wypowiedziami. Idealna identyfikacja mówców nawet podczas gorących dyskusji. Eksport bezpośrednio do oprogramowania do analizy jakościowej.",
      useCase2Title: "Pogłębione Wywiady",
      useCase2Desc: "Przetwarzaj setki wywiadów indywidualnych jednocześnie. Zachowaj spójność w całym zbiorze danych. Przeglądaj wszystkie transkrypcje natychmiast.",
      useCase3Title: "Badania Kliniczne",
      useCase3Desc: "Opcje zgodne z HIPAA dla wywiadów z pacjentami. Dokładna transkrypcja terminologii medycznej. Bezpieczne przetwarzanie wrażliwych danych zdrowotnych.",
      useCase4Title: "Badania Etograficzne",
      useCase4Desc: "Nagrania terenowe w naturalnych warunkach. Obsługa szumu tła i wielu mówców. Obsługa ponad 100 języków i dialektów.",
      useCase5Title: "Projekty Historii Mówionej",
      useCase5Desc: "Zachowaj całe archiwa bez ograniczeń. Twórz przeszukiwalne zapisy historyczne. Idealne do badań długoterminowych i międzypokoleniowych.",
      useCase6Title: "Badania Pracy Dyplomowej",
      useCase6Desc: "Przyjazne ceny dla studentów z pełną funkcjonalnością. Przetwarzaj cały zbiór danych w przystępnej cenie. Dotrzymuj terminów dzięki przetwarzaniu zbiorczemu.",
      testimonialTitle: "Zaufane przez",
      testimonialText: "Nasz zespół badawczy miał 200 godzin nagrań grup fokusowych z badania zdrowia społeczności. Inne usługi chciały, abyśmy wybierali, które sesje transkrybować ze względu na koszty. NeverCap pozwolił nam przetworzyć wszystko w weekend. Identyfikacja 20 mówców faktycznie działała — nawet podczas naszych najbardziej chaotycznych dyskusji, gdy wszyscy mówili jednocześnie. To narzędzie całkowicie zmieniło sposób, w jaki radzimy sobie z danymi jakościowymi.",
      testimonialAuthorName: "Dr Sarah Chen",
      testimonialAuthorRole: "Kierownik Badań, Instytut Zdrowia Publicznego",
      ctaTitle: "Przestań Wybierać, Które Dane Analizować",
      ctaSubtitle: "Dołącz do 50 000+ badaczy, którzy transkrybują wszystko",
      ctaButton: "Wypróbuj NeverCap Za Darmo",
        problemTitle2: "transkrypcji badań",
        title: "The",
        useCasesTitle2: "Każdej metody badawczej",
        testimonialTitle2: "Wiodących Badaczy",
        feature1TitleHl: "Całego projektu badawczego",
        feature1TitlePost: "W jednym miejscu",
        feature2TitleHl: "Wywiad fokusowy",
        feature2TitlePost: "Za każdym razem skutecznie",
        feature3TitleHl: "96% dokładności",
        feature4TitleHl: "Bezpieczeństwo",
        testimonialText2Hl: "200 godzin",
        testimonialText3: "nagrań grup fokusowych z naszego badania zdrowia społeczności. Inne usługi kazały nam wybierać, które sesje przetranskrybować ze względu na koszty. NeverCap pozwolił nam przetworzyć",
        testimonialText4Hl: "wszystko w jeden weekend",
        testimonialText5: ". Rozpoznawanie 20 mówców faktycznie działało—nawet podczas naszych najbardziej chaotycznych dyskusji, gdy wszyscy mówili jednocześnie. To narzędzie",
        testimonialText6Hl: "całkowicie zmieniło",
        testimonialText7: "sposób, w jaki zarządzamy danymi jakościowymi."
    },
    BusinessTeams: {
      heroBadge: "Dla Zespołów Biznesowych",
      heroTitle1: "Nagrywanie Spotkań",
      heroTitle2: "Wykonane z Lekkością",
      heroSubtitle: "Nagrywaj spotkania bezpośrednio w przeglądarce lub przesyłaj pliki audio natychmiast. Twórz przeszukiwalne archiwa z nieograniczonej liczby rozmów. Nigdy więcej nie trać ważnych dyskusji dzięki naprawdę nieograniczonej transkrypcji.",
      heroCtaPrimary: "Zacznij Nagrywać Teraz →",
      heroCtaSecondary: "Zobacz, Jak To Działa",
      recordingStatus: "Nagrywanie...",
      statsMeetingMinutes: "Protokoły Spotkań",
      statsLiveRecording: "Nagrywanie",
      statsSpeakerID: "Identyfikacja Mówcy",
      statsInstantUpload: "Prześlij i Przetwórz",
      featuresTitle: "Transkrypcja dla Każdej Firmy",
      featuresSubtitle: "Od nagrywania na żywo do natychmiastowego przesyłania — wyeliminowaliśmy wszystkie punkty tarcia",
      feature1Title: "Nagrywaj Bezpośrednio w Przeglądarce",
      feature1Desc: "Brak pobierania, brak wtyczek. Zacznij nagrywać natychmiast jednym kliknięciem. Idealna jakość dźwięku, automatyczna identyfikacja mówców.",
      feature1Benefit1: "Rozpocznij nagrywanie jednym kliknięciem",
      feature1Benefit2: "Brak konieczności instalacji oprogramowania",
      feature1Benefit3: "Działa na dowolnym urządzeniu",
      feature1Benefit4: "Transkrypcja w czasie rzeczywistym",
      feature1Visual1: "Kliknij i Nagrywaj",
      feature1Visual2: "Brak konfiguracji wymaganej",
      feature2Title: "Prześlij Dowolny Plik Audio Natychmiast",
      feature2Desc: "Masz nagrania z Zoom, Teams lub telefonu? Prześlij je natychmiast. Obsługa wszystkich głównych formatów audio i wideo. Przetwarzaj wiele plików jednocześnie bez czekania.",
      feature2Benefit1: "Obsługiwane formaty: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Możliwość przesyłania zbiorczego",
      feature2Benefit3: "Obsługa plików do 10 godzin",
      feature2Benefit4: "Przetwarzaj podczas pracy",
      feature2Visual1: "Przeciągnij i Upuść Pliki",
      feature3Title: "Zaprojektowane do Współpracy Zespołowej",
      feature3Desc: "Udostępniaj transkrypcje swojemu zespołowi natychmiast. Słuchaj nagrań razem, eksportuj transkrypcje w wielu formatach i zapewnij, że wszyscy są zgodni dzięki przeszukiwalnym archiwom spotkań.",
      feature3Benefit1: "Udostępniaj transkrypcje każdemu",
      feature3Benefit2: "Słuchaj oryginalnych nagrań",
      feature3Benefit3: "Eksportuj transkrypcje w wielu formatach",
      feature3Benefit4: "Archiwa dostępne do wyszukiwania dla całego zespołu",
      feature3Visual1: "Członkowie zespołu",
      feature3Visual2: "Nielimitowana współpraca",
      feature4Title: "Natychmiast znajdź dowolną rozmowę",
      feature4Desc: "Przeszukuj wszystkie spotkania naraz. Znajdź kluczową decyzję z ostatniego kwartału lub wymaganie klienta sprzed miesięcy. Wyszukiwanie AI rozumie kontekst, nie tylko słowa kluczowe.",
      feature4Benefit1: "Przeszukuj wszystkie spotkania naraz",
      feature4Benefit2: "AI rozumie kontekst",
      feature4Benefit3: "Filtruj według mówcy lub daty",
      feature4SearchPlaceholder: "🔍 Szukaj: 'Cele przychodów Q4'",
      feature4SearchResults: "Znaleziono w 3 spotkaniach:",
      feature4Meeting1: "Planowanie sprzedaży - 15 paź",
      feature4Meeting1Text: '"...cele na Q4 ustalone na 2 mln USD..."',
      feature4Meeting2: "Spotkanie zarządu - 20 paź",
      feature4Meeting2Text: '"...prognozy przychodów Q4..."',
      workflowTitle: "Jak transkrybować",
      workflowSubtitle: "Płynny przepływ pracy, który rejestruje każdy ważny moment",
      workflowStep1Title: "Nagrywaj lub przesyłaj",
      workflowStep1Desc: "Zacznij nagrywać na żywo lub po prostu pobierz nagranie spotkania z Zoom, Google Meet lub Microsoft Teams",
      workflowStep2Title: "Auto-transkrypcja",
      workflowStep2Desc: "Nasze AI automatycznie przetworzy nagranie na tekst z 96% dokładnością w kilka minut",
      workflowStep3Title: "Współpraca",
      workflowStep3Desc: "Udostępniaj, komentuj i wyodrębniaj zadania",
      workflowStep4Title: "Wyszukiwanie i analiza",
      workflowStep4Desc: "Odkrywaj wnioski ze wszystkich spotkań",
      testimonialsTitle: "Zespoły uwielbiają",
      testimonialsSubtitle: "Zobacz, jak firmy zmieniają kulturę spotkań",
      testimonial1Text: '"Przeszliśmy od pomijania kluczowych szczegółów do posiadania przeszukiwalnego archiwum każdej rozmowy. Funkcja bezpośredniego nagrywania oznacza, że nigdy nie zapominamy o rejestrowaniu ważnych dyskusji."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Kierownik produktu, TechCorp",
      testimonial2Text: '"Otter ograniczał nas do 10 przesyłanych plików miesięcznie. Teraz natychmiast przesyłamy wszystkie rozmowy z klientami. Przełom dla działań follow-up naszego zespołu sprzedaży."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Dyrektor sprzedaży, ConsultPro",
      testimonial3Text: '"Możliwość przeszukiwania miesięcy spotkań uratowała nas podczas audytu. Znaleźliśmy każdą decyzję i zatwierdzenie w kilka sekund."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Przestań tracić ważne rozmowy",
      ctaSubtitle: "Dołącz do tysięcy zespołów rejestrujących każde spotkanie z nielimitowaną transkrypcją",
      ctaButton: "Zacznij nagrywać za darmo →",
        featuresTitle2: "Spotkanie",
        workflowTitle2: "Nagranie Zoom na tekst",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Dla nauczycieli i edukatorów",
      heroTitle1: "Uczyń naukę",
      heroTitle2: "Dostępną dla wszystkich",
      heroSubtitle: "Po prostu wklej linki YouTube, aby otrzymać natychmiastowe transkrypcje z automatycznymi napisami. Przekształć wykłady, tutoriale i filmy edukacyjne w przeszukiwalne, dostępne treści, z których może uczyć się każdy uczeń.",
      heroCtaPrimary: "Wypróbuj za darmo - bez karty kredytowej",
      heroCtaSecondary: "Obejrzyj demo",
      stats1Number: "1-Klik",
      stats1Label: "Transkrypcja YouTube",
      stats2Number: "100+",
      stats2Label: "Obsługiwane języki",
      stats3Number: "∞",
      stats3Label: "Nielimitowane filmy",
      stats4Number: "96%",
      stats4Label: "Dokładność",
      featuresTitle: "Wszystko, czego potrzebują edukatorzy do",
      featuresSubtitle: "Od wykładów na YouTube po nagrane zajęcia – udostępniaj wszystkie swoje treści",
      feature1Title: "Natychmiastowe linki YouTube i innych platform",
      feature1Desc: "Wklej dowolny link do filmu i od razu otrzymaj transkrypcję. Działa z YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive i innymi. Bez pobierania, bez czekania.",
      feature1Point1: "Transkrypcja bezpośrednio z linku – bez pobierania",
      feature1Point2: "Obsługa wszystkich głównych platform",
      feature1Point3: "Przetwarzaj całe playlisty naraz",
      feature1Point4: "Działa z prywatnymi filmami (za zgodą)",
      feature2Title: "Automatyczne generowanie napisów",
      feature2Desc: "Natychmiast twórz dokładne napisy do wszystkich filmów edukacyjnych. Ułatw dostęp do treści uczniom z wadami słuchu, obcokrajowcom lub tym, którzy wolą czytać.",
      feature2Point1: "Formaty eksportu: SRT, VTT i TXT",
      feature2Point2: "Znaczniki czasu na poziomie słów dla idealnej synchronizacji",
      feature2Point3: "Łatwo edytuj i dostosuj napisy",
      feature2Point4: "Prześlij bezpośrednio z powrotem na YouTube",
      feature2Visual1: "Tłumaczenia językowe",
      feature2Visual2: "Uczyń swoje treści dostępne globalnie",
      feature3Title: "Organizuj według kursów i kategorii",
      feature3Desc: "Twórz foldery, aby porządkować transkrypcje według kursu, przedmiotu lub semestru. Zachowaj wszystkie materiały edukacyjne uporządkowane i łatwe do wyszukania. Stwórz kompleksową bibliotekę dostępnych materiałów.",
      feature3Point1: "Twórz nielimitowane foldery i podfoldery",
      feature3Point2: "Oznaczaj filmy według tematu lub poziomu trudności",
      feature3Point3: "Masowo porządkuj wiele transkrypcji",
      feature3Point4: "Natychmiast przeszukuj wszystkie swoje treści",
      feature3VisualTitle: "Twoja biblioteka kursów",
      feature3Folder1: "Matematyka 101",
      feature3Folder2: "Wykłady z fizyki",
      feature3Folder3: "Filmy z laboratorium biologii",
      feature3Folder4: "Dokumenty historyczne",
      feature3Folder5: "Nauka języków",
      feature4Title: "AI – transkrybuj plik audio na przewodnik naukowy",
      feature4Desc: "Nie tylko udostępniaj nagrania. Automatycznie zamieniaj wykłady na tekst i inne pliki audio w szczegółowe przewodniki naukowe, zawierające podsumowania i kluczowe pojęcia dla efektywnej nauki. Eksportuj w formatach TXT, DOCX lub PDF.",
      feature4Point1: "TXT – do prostego edytowania tekstu",
      feature4Point2: "DOCX – dla sformatowanych dokumentów",
      feature4Point3: "PDF – do łatwego udostępniania i drukowania",
      feature4Point4: "Masowo eksportuj wiele plików naraz",
      workflowTitle: "Jak to działa:",
      workflowSubtitle: "Od linku do filmu do dostępnej transkrypcji i materiałów naukowych w kilka minut",
      workflowStep1Title: "Prześlij swój wykład",
      workflowStep1Desc: "Prześlij dowolny plik audio lub wideo (MP3, MP4, WAV) lub wklej link z YouTube",
      workflowStep2Title: "Transkrypcja AI",
      workflowStep2Desc: "Nasze AI transkrybuje audio, rozdziela mówców i identyfikuje kluczowe tematy",
      workflowStep3Title: "Generuj napisy",
      workflowStep3Desc: "Automatycznie twórz idealnie zsynchronizowane napisy",
      workflowStep4Title: "Eksportuj przewodnik naukowy",
      workflowStep4Desc: "Pobierz tekst, podsumowanie lub wyeksportuj, aby stworzyć swój końcowy przewodnik naukowy",
      useCasesTitle: "Idealne dla każdego",
      useCasesSubtitle: "Zobacz, jak nauczyciele wykorzystują NeverCap, aby ulepszyć naukę",
      useCase1Title: "Nagrane wykłady",
      useCase1Text: "Transkrybuj całe semestry nagranych wykładów. Studenci mogą wyszukiwać konkretne tematy, przeglądać kluczowe koncepcje i nigdy nie przegapić ważnych informacji.",
      useCase2Title: "Kursy online",
      useCase2Text: "Uczyń swoje kursy online dostępnymi dla międzynarodowych studentów dzięki tłumaczeniom w ponad 100 językach. Zwiększ rekrutację i zadowolenie.",
      useCase3Title: "Materiały do nauki",
      useCase3Text: "Wykorzystaj sztuczną inteligencję do transkrypcji plików audio na przewodniki naukowe z tutoriali wideo i wykładów. Idealne dla studentów, którzy wolą czytać lub muszą szybko przejrzeć treść z możliwością wyszukiwania tekstu.",
      useCase4Title: "Zgodność z dostępnością",
      useCase4Text: "Spełnij wymagania dostępności, dostarczając napisy i transkrypcje do wszystkich treści wideo. Zapewnij równy dostęp dla wszystkich studentów.",
      useCase5Title: "Odwrócona klasa",
      useCase5Text: "Udostępniaj wykłady wideo z transkrypcjami przed zajęciami. Studenci mogą przeglądać je we własnym tempie i być przygotowani do dyskusji.",
      useCase6Title: "Badania i cytowania",
      useCase6Text: "Pomóż studentom dokładnie cytować źródła wideo z znacznikami czasu. Idealne dla projektów badawczych i prac akademickich.",
      testimonialTitle: "Zaufane przez",
      testimonialSubtitle: "Zobacz, dlaczego nauczyciele na całym świecie wybierają NeverCap",
      testimonialText: '"Używam NeverCap do transkrypcji całego mojego kanału YouTube z tutorialami matematycznymi. To, co zajmowało tygodnie z innymi usługami, teraz zajmuje godziny. Możliwość bezpośredniego wklejania linków i otrzymywania natychmiastowych transkrypcji zmieniła sposób, w jaki tworzę dostępne treści. Moi międzynarodowi studenci szczególnie uwielbiają napisy w wielu językach!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Profesor matematyki, nauczyciel online",
      ctaTitle: "Uczyń wszystkie swoje treści edukacyjne dostępnymi",
      ctaSubtitle: "Dołącz do tysięcy nauczycieli korzystających z naprawdę nieograniczonej transkrypcji",
      ctaButton: "Wypróbuj NeverCap za darmo",
        featuresTitle2: "Transkrypcji wideo",
        grid: "Plik audio na przewodnik naukowy",
        useCasesTitle2: "Potrzeby edukacyjnej",
        testimonialTitle2: "50 000+ nauczycieli"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Pobieraj filmy z YouTube jako MP4",
        "placeholder": "Wyszukaj lub wklej tutaj swój link z YouTube",
        "clear_icon": "Wyczyść pole",
        "Download": "Pobierz",
        "loading_text": "Przetwarzanie linku do pobrania. Pozostań na stronie.",
        "howToDownload": "Jak pobrać?",
        "tutorial": "Obejrzyj poradnik"
      },
      part2: {
        "title": "Oto jak w 3 prostych krokach zamienić film z YouTube na plik MP4 do pobrania",
        "steps": [
                {
                  title: "Skopiuj adres URL",
                  content: "Otwórz wybrany film na YouTube, a następnie skopiuj link z paska adresu przeglądarki."
                },
                {
                  title: "Wklej link",
                  content: "Przejdź do narzędzia do pobierania filmów i wklej URL w pole wprowadzania."
                },
                {
                  title: "Pobierz MP4",
                  content: "Po przetworzeniu kliknij przycisk pobierania, aby zapisać plik MP4."
                }
              ]
      },
      part3: {
        content: [
                "Czy kiedykolwiek potrzebowałeś oglądać filmy z YouTube offline?",
                "Czy jesteś w metrze, samolocie, uczysz się z ważnego poradnika, zgłębiasz treści rozwijające umiejętności czy archiwizujesz ważne materiały wideo — brak dostępu offline to powszechny problem. Tutaj nasze narzędzie się sprawdza.",
                "Nasz konwerter pozwala szybko i łatwo zamieniać filmy z YouTube na format MP4. Zapisz je na swoim urządzeniu i oglądaj w dowolnym momencie.",
                "Proces jest szybki, prosty i bezproblemowy. Po pobraniu ciesz się ulubionymi filmami gdziekolwiek jesteś — bez potrzeby internetu."
              ]
      },
      part4: {
        content: ["Oto 5 głównych zalet pobierania", "filmów z YouTube jako plików MP4"],
        list: [
                {
                  title: "Oszczędność danych:",
                  content: "Oglądanie filmów na YouTube zużywa dużo danych mobilnych. Pobierając je do oglądania offline, unikniesz niepotrzebnych kosztów."
                },
                {
                  title: "Oglądaj wszędzie i o każdej porze:",
                  content: "Ciesz się filmami bez przerw, nawet przy słabym połączeniu. Żadnych problemów z buforowaniem."
                },
                {
                  title: "Łatwe archiwizowanie i przechowywanie:",
                  content: "Zapisanie filmów jako MP4 ułatwia tworzenie własnej kolekcji, szczególnie dla treści, które uważasz za wartościowe."
                },
                {
                  title: "Łatwiejsze udostępnianie:",
                  content: "Udostępnianie pliku MP4 jest wygodniejsze niż wysyłanie linku. Możesz wysłać plik bezpośrednio przez WhatsApp czy Instagram, bez konieczności otwierania YouTube."
                },
                {
                  title: "Natychmiastowe oglądanie, wspólne chwile:",
                  content: "Chcesz pokazać ulubiony film znajomym lub rodzinie? Z pobranym MP4 możecie od razu oglądać go razem bez czekania na ładowanie."
                }
              ]
      },
      part5: {
        title: "Dlaczego nasze narzędzie jest wyjątkowe",
        cards: [
                {
                  title: "Prostota jednego kliknięcia",
                  content: "Łatwa konfiguracja i intuicyjna obsługa."
                },
                {
                  title: "Niesamowita szybkość, bez limitów",
                  content: "Konwertuj i pobieraj z maksymalną prędkością — bez ograniczeń."
                },
                {
                  title: "Konwersja w locie",
                  content: "Natychmiastowe przetwarzanie plików — bez oczekiwania."
                },
                {
                  title: "Zero reklam, zero rozpraszania",
                  content: "Czysty interfejs bez wyskakujących okienek czy banerów — tylko płynna konwersja wideo."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Gwarancja oryginalnej jakości",
                  content: "Pobrane pliki zachowują pełną rozdzielczość źródłowego wideo dla idealnego odtwarzania."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Działa wszędzie",
                  content: "W pełni kompatybilne z każdą przeglądarką i urządzeniem."
                }
              ]
      },
      part6: {
        title: ["Maksymalizuj swoje pobieranie filmów z YouTube", "Z naszym konwerterem"],
        content: [
                "Łatwa konwersja YouTube na MP4: szybko, prosto i za darmo.",
                "W tym jesteśmy najlepsi. Nasz przyjazny interfejs jest dla każdego — bez wymaganych umiejętności technicznych. Bez względu na doświadczenie, konwertuj filmy od razu. Bez rejestracji: odbierz to, czego potrzebujesz, natychmiast.",
                "Mamy pewność — pobrane pliki MP4 zachowują jakość i klarowność oryginału, taką samą jak na YouTube.",
                "Działa tam, gdzie Ty. W pełni kompatybilne ze wszystkimi platformami i urządzeniami. Windows, macOS, Linux, Android czy iOS — smartfon, tablet lub komputer — pobieraj filmy bezproblemowo."
              ]
      },
      part7: {
        title: "Kluczowe pytania o pobieranie filmów z YouTube",
        list: [
                {
                  question: "Czy mogę pobrać film z YouTube, jeśli jest chroniony prawem autorskim?",
                  answer: "Pobieranie chronionych filmów z YouTube bez zgody właściciela praw autorskich jest nielegalne."
                },
                {
                  question: "Czy to narzędzie jest bezpieczne?",
                  answer: "Tak, jest bezpieczne i godne zaufania. Nie wymagamy danych osobowych i stosujemy silne środki przeciw wirusom. Pamiętaj, aby zawsze zachować ostrożność przy pobieraniu plików z internetu: unikaj podejrzanych linków i plików."
                },
                {
                  question: "Jakie języki obsługuje pobieranie YouTube do MP4?",
                  answer: "Nasza usługa obsługuje pobieranie filmów z YouTube we wszystkich popularnych językach."
                },
                {
                  question: "Jakie czynniki wpływają na czas pobierania filmu z YouTube?",
                  answer: "Choć zapewniamy najszybsze pobieranie, czas zależy też od długości filmu i prędkości Twojego internetu."
                },
                {
                  question: "Gdzie zapisuje się plik MP4 po pobraniu na smartfonie?",
                  answer: 'Po pobraniu pliku MP4 na smartfonie, zazwyczaj znajdziesz go w folderze "Downloads" w aplikacji menedżera plików twojego urządzenia.'
                },
                {
                  question: "Czy pobieranie filmu z YouTube jako MP4 obniża jakość?",
                  answer: "Nie. Pobieranie filmów z YouTube jako MP4 przy użyciu naszego narzędzia zachowuje oryginalną jakość. Proces konwersji nie wpływa na jakość źródłową, zapewniając takie samo wrażenia jak na YouTube."
                }
              ]
      },
        err1: "Błąd formatu linku YouTube.",
        err2: "Przepraszamy! Obecnie obsługujemy tylko linki YouTube. Jeśli potrzebujesz wsparcia dla innych stron, poinformujemy Cię, gdy dodamy tę funkcję w przyszłości.",
        videoDownload: {
              title: "Pobieraj filmy z YouTube jako MP4. Darmowe, szybkie i bez reklam.",
              description: "Dziękujemy za wybranie naszej usługi! Doceniamy Twoje zaufanie i mamy nadzieję, że poprawiło to Twoje wrażenia. Jeśli możesz udostępnić naszą stronę znajomym, byłoby to ogromną pomocą.",
              downloadButton: "Pobierz",
              downloadError: "Błąd pobierania."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Wiodąca Technologia AI",
      "title": "O",
      "highlighted_text": "NeverCap",
      "description": "Naszą misją jest zapewnienie najdokładniejszych usług transkrypcji audio i wideo. Dzięki wiodącej technologii AI osiągamy dokładność transkrypcji na poziomie ponad 96%. W przypadku niektórych głównych języków, dzięki optymalizacji technicznej, możemy osiągnąć nawet 99% dokładności."
    },
    Stats: {
      "title": "Nasz",
      "highlighted_text": "Wpływ",
      "subtitle": "Wzmacnianie globalnej komunikacji dzięki najnowocześniejszej technologii AI",
      "metrics": [
            {
              "value": "96%+",
              "label": "Dokładność",
              "description": "Wiodąca w branży dokładność transkrypcji dzięki zaawansowanej AI"
            },
            {
              "value": "100+",
              "label": "Obsługiwane Języki",
              "description": "Rozpoznawanie mowy dla globalnych treści"
            },
            {
              "value": "249+",
              "label": "Języki Tłumaczenia",
              "description": "Tłumacz transkrybowany tekst na praktycznie dowolny język"
            }
          ]
    },
    Mission: {
      "title": "Dlaczego Wybrać",
      "highlighted_text": "NeverCap",
      "subtitle": "Wierzymy w łamanie barier językowych i udostępnianie treści wszystkim",
      "features": [
            {
              "icon": "🎯",
              "title": "Niedościgniona Dokładność",
              "description": "Nasze modele AI są stale udoskonalane, aby zapewnić dokładność transkrypcji przekraczającą 96%, a w przypadku niektórych głównych języków nawet do 99% dzięki zaawansowanej optymalizacji."
            },
            {
              "icon": "🌍",
              "title": "Globalne Wsparcie Językowe",
              "description": "Obsługa ponad 100 języków w rozpoznawaniu mowy i możliwości tłumaczenia na ponad 249 języków, dzięki czemu Twoje treści są naprawdę globalne."
            },
            {
              "icon": "⚡",
              "title": "Błyskawiczne Przetwarzanie",
              "description": "Przetwarzaj godziny treści audio i wideo w minutach, a nie godzinach. Nasz zoptymalizowany proces AI zapewnia szybkie otrzymanie transkrypcji bez utraty jakości."
            },
            {
              "icon": "🔒",
              "title": "Bezpieczeństwo na Poziomie Enterprise",
              "description": "Bezpieczeństwo Twoich danych jest naszym priorytetem. Stosujemy standardowe szyfrowanie i przestrzegamy globalnych przepisów dotyczących prywatności, aby zapewnić bezpieczeństwo i poufność Twoich treści."
            }
          ]
    },
    Company: {
      "title": "Informacje o",
      "highlighted_text": "Firmie",
      "subtitle": "Skontaktuj się z nami w przypadku pytań lub wsparcia",
      "details": [
            {
              "label": "Nazwa Firmy",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Siedziba",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Stany Zjednoczone"]
            },
            {
              "label": "Kontakt",
              "value": ["Email", "Wsparcie dostępne 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Gotowy, aby Doświadczyć Różnicy?",
      "subtitle": "Dołącz do tysięcy profesjonalistów, którzy ufają NeverCap w swoich potrzebach transkrypcyjnych",
      "button": "Wypróbuj NeverCap za darmo →",
      "disclaimer": "Bez karty kredytowej • Rozpocznij transkrypcję w kilka sekund"
    }
  },
  Privacy: {
    title: "Prywatność",
    titleGradient: "Polityka",
    subtitle: "Dowiedz się, jak zbieramy, wykorzystujemy i chronimy Twoje dane osobowe",
    "lastUpdated": "Ostatnia aktualizacja: {date}",
    "lastUpdatedDate": "21 lipca 2025",
    "privacyPolicyTitle": "Polityka Prywatności",
    "policyAgreement": "Prosimy o uważne przeczytanie tej Polityki Prywatności i upewnienie się, że ją rozumiesz. Korzystając z naszych Usług, akceptujesz tę Politykę Prywatności. Jeśli nie zgadzasz się na wykorzystywanie Twoich danych osobowych zgodnie z niniejszą Polityką, natychmiast zaprzestań korzystania z naszych Usług.",
    "policyOverview": "W tej polityce wyjaśniamy: jakie dane zbieramy i dlaczego; jak przetwarzamy Twoje dane; oraz Twoje prawa dotyczące Twoich danych. Nie sprzedajemy Twoich danych.",
    "scopeTitle": "1. Zakres Polityki Prywatności",
    "scopeDescription": "Niniejsza Polityka Prywatności dotyczy wyłącznie naszego gromadzenia i przetwarzania informacji o użytkownikach Usług. Nie dotyczy ona usług, stron internetowych ani oprogramowania prowadzonych przez podmioty trzecie, które są z nami powiązane (niezależnie od tego, czy dostarczamy te linki, czy udostępniają je inni użytkownicy), ani też treści, danych, aplikacji lub materiałów pochodzących od podmiotów trzecich. Zalecamy sprawdzenie polityk prywatności stron internetowych lub oprogramowania podmiotów trzecich przed przekazaniem im jakichkolwiek informacji.",
    "collectionTitle": "2. Jakie dane zbieramy i dlaczego",
    "collectionPrinciple": "Naszą zasadą przewodnią jest zbieranie tylko tego, co jest potrzebne. Oto co to oznacza w praktyce:",
    "identityTitle": "2.1 Tożsamość i dostęp",
    "identityDescription": "Podczas rejestracji do naszych produktów prosimy o podanie danych identyfikacyjnych, takich jak imię i nazwisko oraz adres e-mail. Jest to niezbędne do zapewnienia funkcjonalności produktu oraz abyśmy mogli wysyłać Ci aktualizacje produktu i inne istotne informacje.",
    "billingTitle": "2.2 Dane rozliczeniowe",
    "billingDescription": "Jeśli zarejestrujesz się do płatnego produktu, poprosimy Cię o podanie danych płatniczych i adresu rozliczeniowego. Dane płatnicze są przekazywane bezpośrednio do naszego procesora płatności i nie trafiają na nasze serwery.",
    "productInteractionsTitle": "2.3 Interakcje z produktem",
    "productInteractionsDescription": "Przechowujemy na naszych serwerach treści, które przesyłasz, otrzymujesz lub przechowujesz w swoich kontach produktowych. O ile nie usuniesz tych treści, możemy je przechowywać tak długo, jak Twoje konto jest aktywne.",
    "websiteInteractionsTitle": "2.4 Interakcje ze stroną internetową",
    "websiteInteractionsDescription": "Zbieramy informacje o Twojej aktywności przeglądania w celach analitycznych i statystycznych, takich jak testowanie współczynnika konwersji i eksperymentowanie z nowymi projektami produktów. Obejmuje to na przykład wersje przeglądarki i systemu operacyjnego, adres IP, odwiedzane strony internetowe i czas ich ładowania oraz stronę, z której trafiłeś do nas. Jeśli masz konto i jesteś zalogowany, te dane analityczne są powiązane z Twoim adresem IP i kontem użytkownika do czasu, aż Twoje konto przestanie być aktywne.",
    "cookiesTitle": "2.5 Pliki cookie",
    "cookiesDescription1": "Używamy również trwałych plików cookie pierwszej strony oraz niektórych plików cookie stron trzecich do przechowywania określonych preferencji, ułatwienia korzystania z naszych aplikacji oraz przeprowadzania testów A/B i wspierania niektórych analiz.",
    "cookiesDescription2": "Plik cookie to fragment tekstu przechowywany przez Twoją przeglądarkę. Może pomóc w zapamiętaniu informacji logowania i preferencji strony. Może również zbierać informacje, takie jak typ przeglądarki, system operacyjny, odwiedzane strony, czas wizyty, oglądane treści i inne dane strumienia kliknięć. Możesz dostosować ustawienia przechowywania plików cookie oraz akceptować lub blokować poszczególne pliki cookie w ustawieniach przeglądarki, chociaż nasze aplikacje nie będą działać, a inne aspekty naszej usługi mogą nie funkcjonować prawidłowo, jeśli wyłączysz pliki cookie.",
    "correspondenceTitle": "2.6 Dobrowolna korespondencja",
    "correspondenceDescription": "Kiedy piszesz do nas z pytaniem lub prośbą o pomoc, przechowujemy tę korespondencję, w tym Twój adres e-mail, abyśmy mieli historię wcześniejszej korespondencji do odwołania, jeśli skontaktujesz się z nami w przyszłości.",
    "accessTitle": "3. Kiedy uzyskujemy dostęp do Twoich danych lub je udostępniamy",
    "accessDescription1": "Aby świadczyć żądane przez Ciebie produkty lub usługi. Korzystamy z niektórych podwykonawców stron trzecich, aby pomóc w prowadzeniu naszych aplikacji i świadczeniu Usług. Obejmuje to dostawców chmury i analityki.",
    "accessDescription2": "Aby badać, zapobiegać lub podejmować działania w związku z nadużyciami. Dostęp do konta klienta podczas badania potencjalnych nadużyć jest ostatecznością. Chcemy chronić prywatność i bezpieczeństwo zarówno naszych klientów, jak i osób zgłaszających nam problemy, i staramy się jak najlepiej zrównoważyć te obowiązki w całym procesie. Jeśli odkryjemy, że używasz naszych produktów w ograniczonym celu, podejmiemy odpowiednie działania, w tym powiadomienie odpowiednich władz, jeśli będzie to uzasadnione.",
    "accessDescription3": "Kiedy wymaga tego obowiązujące prawo.",
    "dataRequests": "Żądania dotyczące danych użytkowników. Naszą polityką jest nieodpowiadanie na rządowe żądania dotyczące danych użytkowników, chyba że jesteśmy do tego zobowiązani procesem prawnym lub w ograniczonych okolicznościach w przypadku żądania awaryjnego. Jednakże, jeśli amerykańskie organy ścigania mają odpowiedni nakaz, policyjne wezwanie lub nakaz sądowy wymagający od nas udostępnienia danych, musimy się do tego zastosować. Podobnie odpowiemy na żądania organów spoza USA tylko wtedy, gdy zostaniemy do tego zobowiązani przez rząd USA w ramach procedur określonych w traktacie lub umowie o wzajemnej pomocy prawnej. Naszą polityką jest powiadamianie dotkniętych użytkowników przed udostępnieniem danych, chyba że prawo nam tego zabrania, z wyjątkiem niektórych przypadków awaryjnych.",
    "preservationRequests": "Żądania zachowania danych. Podobnie, naszą polityką jest spełnianie żądań zachowania danych tylko wtedy, gdy jesteśmy do tego zobowiązani na mocy amerykańskiej ustawy o przechowywanych komunikacjach (18 U.S.C. Section 2703(f)) lub prawidłowo doręczonym amerykańskim wezwaniem w sprawach cywilnych. Nie udostępniamy zachowanych danych, chyba że wymaga tego prawo lub nakaz sądowy, od którego nie odwołujemy się. Ponadto, jeśli nie otrzymamy odpowiedniego nakazu, nakazu sądowego lub wezwania przed upływem wymaganego okresu przechowywania, zniszczymy wszystkie zachowane kopie danych klienta po upływie tego okresu.",
    "taxAudits": "Jeśli zostaniemy poddani kontroli przez organ podatkowy, możemy być zobowiązani do udostępnienia informacji związanych z rozliczeniami. W takim przypadku udostępnimy tylko minimum wymaganych danych, takich jak adresy rozliczeniowe i informacje o zwolnieniu z podatku.",
    "securityTitle": "4. Jak zabezpieczamy Twoje dane",
    "securityDescription": "Wszystkie dane są szyfrowane za pomocą SSL/TLS podczas przesyłania z naszych serwerów do Twojej przeglądarki.",
    "deletionTitle": "5. Co się dzieje, gdy usuniesz swoje treści",
    "deletionDescription": "Jeśli usuniesz jakiekolwiek treści, staną się one natychmiast niedostępne.",
    "locationTitle": "6. Lokalizacja strony i danych",
    "locationDescription": "Nasze produkty i inne własności internetowe są prowadzone w Stanach Zjednoczonych. Jeśli znajdujesz się w Unii Europejskiej, Wielkiej Brytanii lub gdziekolwiek poza Stanami Zjednoczonymi, pamiętaj, że wszelkie informacje, które nam przekazujesz, zostaną przesłane i przechowywane w Stanach Zjednoczonych. Korzystając z naszych stron internetowych lub Usług i/lub przekazując nam swoje dane osobowe, wyrażasz zgodę na ten transfer.",
    "childrenTitle": "7. Prywatność dzieci",
    "updatesTitle": "8. Aktualizacje Polityki Prywatności",
    "updatesDescription": "Możemy aktualizować tę politykę w razie potrzeby, aby dostosować się do odpowiednich przepisów i odzwierciedlić nowe praktyki. Za każdym razem, gdy wprowadzamy znaczącą zmianę w naszej polityce, aktualizujemy datę na górze tej strony.",
    "contactTitle": "9. Skontaktuj się z nami",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "na",
      policyDescription: 'Niniejsza Polityka opisuje, w jaki sposób NeverCap (zwana dalej \"NeverCap\", \"nami\", \"my\", \"nas\") gromadzi, wykorzystuje i ujawnia Twoje dane osobowe podczas korzystania z naszych usług, stron internetowych ({url}) i oprogramowania (zbiorczo \"Usługi\").',
      childrenDescription: "Usługi nie są skierowane do dzieci i świadomie nie zbieramy Danych Osobowych od dzieci poniżej 13 roku życia. Jeśli masz mniej niż 13 lat, nie przesyłaj żadnych danych osobowych za pośrednictwem Usług. Jeśli uważasz, że dziecko przekazało nam Dane Osobowe z naruszeniem niniejszej Polityki, skontaktuj się z nami pod adresem {at} {email} wskazanym poniżej.",
      contactDescription: "Jeśli masz jakiekolwiek pytania, uwagi lub skargi dotyczące naszej Polityki Prywatności, skontaktuj się z nami {at} {email}, a dołożymy wszelkich starań, aby jak najszybciej rozpatrzyć Twoją skargę."
},
  TermsOfUse: {
    title: "Warunki",
    titleGradient: "Usługa",
    subtitle: "Przed skorzystaniem z naszych usług prosimy o uważne przeczytanie tych warunków",
    "lastUpdated": "Ostatnia aktualizacja: {date}",
    "lastUpdatedDate": "21 lipca 2025",
    "termsOfServiceTitle": "Warunki korzystania z usługi",
    "thankYou": "Dziękujemy za korzystanie z naszych produktów!",
    "companyDefinition": "Gdy w tym dokumencie mówimy „Firma”, „my”, „nasz” lub „nas”, odnosimy się do NeverCap.",
    "servicesDefinition": "Gdy mówimy „Usługi”, mamy na myśli dowolny produkt stworzony i utrzymywany przez NeverCap, niezależnie od tego, czy jest dostarczany w przeglądarce internetowej, aplikacji desktopowej, mobilnej czy w innym formacie.",
    "termsUpdate": "Możemy aktualizować te Warunki korzystania z usługi w przyszłości. Zazwyczaj zmiany te mają na celu wyjaśnienie niektórych postanowień poprzez odnośniki do rozszerzonych powiązanych zasad. Za każdym razem, gdy wprowadzamy znaczącą zmianę w naszych zasadach, odświeżymy datę na górze tej strony i podejmiemy inne odpowiednie kroki, aby powiadomić posiadaczy kont.",
    "acceptanceTitle": "1. Akceptacja umowy",
    "acceptanceDescription1": "Korzystając z naszych Usług, wyrażasz zgodę na niniejszą Umowę, która tym samym staje się wiążącą umową między Tobą a NeverCap. Oświadczasz, że jesteś prawnie uprawniony do zaakceptowania tych Warunków i potwierdzasz, że osiągnąłeś pełnoletność wymaganą do zawarcia wiążącej umowy. Akceptacja NeverCap jest wyraźnie uzależniona od Twojej zgody na wszystkie postanowienia niniejszej Umowy.",
    "eligibilityRequirement": "Usługi nie są przeznaczone dla osób poniżej 18. roku życia i nie powinny być przez nie używane. Korzystając z Usług, oświadczasz i zapewniasz, że spełniasz powyższy warunek kwalifikacyjny.",
    "userResponsibility": "Określenia „Ty”, „Twój”, „sobie” obejmują również Twoich pracowników, agentów, przedstawicieli biznesowych oraz inne osoby, którym udzielasz dostępu do Usług za pośrednictwem Twojego Konta (zdefiniowanego poniżej). Jesteś odpowiedzialny za zapewnienie, że wszystkie osoby, które uzyskują dostęp do Usług za pośrednictwem Twojego konta, znają te Warunki i ich przestrzegają.",
    "termsRevision": "NeverCap zastrzega sobie prawo do okresowego zmieniania i aktualizowania tych Warunków według własnego uznania. Wszystkie zmiany wchodzą w życie natychmiast po ich opublikowaniu. Kontynuowanie korzystania z Usług po opublikowaniu zmienionych Warunków oznacza, że akceptujesz i zgadzasz się na zmiany. Oczekuje się, że będziesz okresowo sprawdzać tę stronę, aby być świadomym wszelkich zmian, ponieważ są one dla Ciebie wiążące.",
    "servicesTitle": "2. Usługi NeverCap",
    "servicesDescription1": "Nasze Usługi umożliwiają użytkownikom przekształcanie rozmów głosowych w tekst, który można przeszukiwać, tłumaczyć i udostępniać innym.",
    "servicesOptions": "Możesz wybrać, czy chcesz korzystać z darmowej wersji Usług („Usługi Bezpłatne”) czy z płatnej wersji abonamentowej, za którą możesz być zobowiązany do uiszczenia opłat („Usługi Płatne”).",
    "servicesAccess": "Udostępnimy Ci Usługi. Jesteś odpowiedzialny za podjęcie wszelkich niezbędnych kroków, aby uzyskać do nich dostęp.",
    "accountTermsTitle": "3. Warunki konta",
    "accountSecurity": "Jesteś odpowiedzialny za utrzymanie bezpieczeństwa swojego konta. Firma nie może i nie będzie ponosić odpowiedzialności za jakiekolwiek straty lub szkody wynikające z Twojego niedopełnienia tego obowiązku.",
    "lawfulUse": "Nie możesz używać Usług w celach niezgodnych z prawem, nieetycznych lub niemoralnych.",
    "contentResponsibility": "Jesteś odpowiedzialny za wszystkie treści zamieszczane i działania podejmowane pod Twoim kontem. Obejmuje to treści zamieszczane przez inne osoby, które: (a) mają dostęp do Twoich danych logowania; lub (b) mają własne dane logowania pod Twoim kontem.",
    "humanRequirement": "Musisz być człowiekiem. Konta rejestrowane przez „boty” lub inne zautomatyzowane metody są niedozwolone.",
    "paymentTitle": "4. Płatności, zwroty i zmiany planu",
    "freeTrial": "W przypadku płatnych Usług oferujących darmowy okres próbny, wyjaśniamy jego długość podczas rejestracji. Po okresie próbnym musisz zapłacić z góry, aby nadal korzystać z Usługi. Jeśli nie zapłacisz, usługi te zostaną zakończone.",
    "upgradePolicy": "Jeśli przechodzisz z planu darmowego na płatny, obciążymy Twoją kartę natychmiast, a Twój cykl rozliczeniowy rozpocznie się w dniu zmiany.",
    "taxes": "Wszystkie opłaty są wyłączone z podatków, opłat lub ceł nakładanych przez organy podatkowe. Wymagane jest, abyśmy pobierali te podatki w imieniu organu podatkowego i przekazywali je odpowiednim władzom. W przeciwnym razie jesteś odpowiedzialny za zapłatę wszystkich podatków, opłat lub ceł.",
    "refunds": "Wszystkie zakupy są niepodlegające zwrotowi. Możesz anulować dowolne płatne usługi w dowolnym momencie, logując się na swoje konto. W przypadku subskrypcji płatnych, anulowanie zacznie obowiązywać po zakończeniu bieżącego okresu płatnego, chyba że zaznaczono inaczej.",
    "cancellationTitle": "5. Anulowanie i zakończenie",
    "cancellationPolicy": "Jeśli anulujesz Usługę przed końcem opłaconego okresu, anulowanie nastąpi natychmiast, a nie zostaniesz ponownie obciążony. Nie dokonujemy automatycznie proporcjonalnego zwrotu za niewykorzystany czas w ostatnim cyklu rozliczeniowym.",
    "terminationRights": "Mamy prawo zawiesić lub zakończyć Twoje konto i odmówić jakiegokolwiek obecnego lub przyszłego korzystania z naszych Usług z jakiegokolwiek powodu i w dowolnym momencie. Zawieszenie oznacza, że nie będziesz miał dostępu do konta ani do żadnych treści na koncie. Zakończenie spowoduje ponadto usunięcie Twojego konta lub Twojego dostępu do niego oraz utratę i zrzeczenie się wszystkich treści na koncie. Zastrzegamy sobie również prawo do odmowy korzystania z Usług każdemu z jakiegokolwiek powodu i w dowolnym momencie. Mamy to postanowienie, ponieważ statystycznie rzecz biorąc, spośród setek tysięcy kont w naszych Usługach, przynajmniej jedno robi coś niegodziwego.",
    "abusePolicy": "Werbalne, fizyczne, pisemne lub inne nadużycia (w tym groźby nadużycia lub odwetu) wobec pracownika lub przedstawiciela Firmy mogą skutkować natychmiastowym zakończeniem konta.",
    "submissionsTitle": "6. Przesyłanie treści",
    "submissionsDescription": "Uznajesz i zgadzasz się, że wszelkie pytania, komentarze, sugestie, pomysły, opinie lub inne informacje dotyczące Witryny („Przesyłane treści”) dostarczone przez Ciebie do nas są nieobjęte poufnością i staną się naszą wyłączną własnością. Będziemy posiadać wyłączne prawa, w tym wszystkie prawa własności intelektualnej, i będziemy uprawnieni do nieograniczonego wykorzystywania i rozpowszechniania tych Przesyłanych treści w dowolnym prawnym celu, komercyjnym lub innym, bez uznania lub wynagrodzenia dla Ciebie. Niniejszym zrzekasz się wszelkich praw moralnych do takich Przesyłanych treści i oświadczasz, że są one Twoim oryginalnym dziełem lub masz prawo je przesłać. Zgadzasz się, że nie będziemy ponosić odpowiedzialności za jakiekolwiek domniemane lub rzeczywiste naruszenie lub przywłaszczenie jakichkolwiek praw własności w Twoich Przesyłanych treściach.",
    "uptimeTitle": "7. Dostępność i bezpieczeństwo",
    "serviceAvailability": "Korzystasz z Usług na własne ryzyko. Świadczymy te Usługi „tak, jak są” i „jak dostępne”. Nie oferujemy umów dotyczących poziomu usług dla większości naszych Usług, ale poważnie traktujemy dostępność naszych aplikacji.",
    "throttlingPolicy": "Zastrzegamy sobie prawo do tymczasowego ograniczenia lub ograniczenia dostępu do konta w rzadkich przypadkach, gdy aktywność użytkownika negatywnie wpływa na stabilność i wydajność Usługi dla innych użytkowników. We wszystkich przypadkach, z wyjątkiem najbardziej krytycznych, skontaktujemy się z Tobą, aby znaleźć rozwiązanie przed podjęciem działań.",
    "dataSecurity": "Podejmujemy wiele środków w celu ochrony i zabezpieczenia Twoich danych poprzez kopie zapasowe, redundancje i szyfrowanie. Wymuszamy szyfrowanie przesyłania danych przez publiczny Internet.",
    "thirdPartyVendors": "Korzystamy z usług zewnętrznych dostawców i partnerów hostingowych, aby zapewnić niezbędny sprzęt, oprogramowanie, sieć, przechowywanie i powiązaną technologię wymaganą do świadczenia Usług.",
    "siteManagementTitle": "8. Zarządzanie witryną",
    "siteManagementDescription": "Zastrzegamy sobie prawo, ale nie obowiązek, do: (1) monitorowania Witryny pod kątem naruszeń tych Warunków korzystania z usługi; (2) podjęcia odpowiednich działań prawnych wobec każdego, kto, według naszego wyłącznego uznania, narusza prawo lub te Warunki korzystania z usługi, w tym, bez ograniczeń, zgłoszenia takiego użytkownika organom ścigania; (3) według naszego wyłącznego uznania i bez ograniczeń, odmowy, ograniczenia dostępu, ograniczenia dostępności lub wyłączenia (w zakresie technicznie możliwym) jakichkolwiek Twoich Wkładów lub ich części; (4) według naszego wyłącznego uznania i bez ograniczeń, powiadomienia lub odpowiedzialności, usunięcia z Witryny lub wyłączenia wszystkich plików i treści, które są nadmiernie duże lub w jakikolwiek sposób obciążają nasze systemy; oraz (5) zarządzania Witryną w sposób mający na celu ochronę naszych praw i mienia oraz ułatwienie prawidłowego funkcjonowania Witryny.",
    "copyrightTitle": "9. Prawa autorskie i własność treści",
    "copyrightCompliance": "Wszystkie treści zamieszczane w Usługach muszą być zgodne z prawem autorskim USA.",
    "ipRights": "Nie rościmy sobie praw własności intelektualnej do materiałów dostarczanych do Usług. Wszystkie przesłane materiały pozostają Twoją własnością.",
    "contentModeration": "Nie przeprowadzamy wstępnej weryfikacji treści, ale zastrzegamy sobie prawo (lecz nie obowiązek) według naszego wyłącznego uznania do odmowy lub usunięcia jakichkolwiek treści dostępnych za pośrednictwem Usługi.",
    "prohibitedExploitation": "Zgadzasz się nie powielać, kopiować, sprzedawać, odsprzedawać ani wykorzystywać jakiejkolwiek części Usług, korzystania z Usług lub dostępu do Usług bez wyraźnej pisemnej zgody Firmy.",
    "impersonationProhibition": "Nie możesz modyfikować innej witryny w sposób sugerujący fałszywie, że jest powiązana z Usługami lub Firmą.",
    "dmcaPolicy": "Szanujemy prawa własności intelektualnej innych. Jeśli uważasz, że jakikolwiek materiał dostępny na lub przez Witrynę narusza jakiekolwiek prawa autorskie, które posiadasz lub kontrolujesz, natychmiast skontaktuj się z nami. Kopia Twojego Powiadomienia zostanie wysłana do osoby, która opublikowała lub przechowywała materiał, którego dotyczy Powiadomienie. Należy pamiętać, że zgodnie z obowiązującym prawem możesz ponosić odpowiedzialność za odszkodowanie, jeśli w Powiadomieniu zawarte są istotne nieprawdziwe informacje. Dlatego jeśli nie jesteś pewien, czy materiał znajdujący się na Witrynie lub do niej odsyłający narusza Twoje prawa autorskie, powinieneś najpierw rozważyć skontaktowanie się z prawnikiem.",
    "prohibitedActivitiesTitle": "10. Działania zabronione",
    "generalProhibition": "Nie możesz uzyskiwać dostępu ani korzystać z Witryny w żadnym innym celu niż ten, dla którego udostępniamy Witrynę. Witryna nie może być używana w związku z jakimikolwiek przedsięwzięciami komercyjnymi, z wyjątkiem tych, które są przez nas wyraźnie popierane lub zatwierdzone.",
    "userObligations": "Jako użytkownik Witryny zgadzasz się nie:",
    "dataScraping": "Systematycznie pobierać danych lub innych treści z Witryny w celu tworzenia lub kompilowania, bezpośrednio lub pośrednio, kolekcji, kompilacji, bazy danych lub katalogu bez naszego pisemnego zezwolenia.",
    "fraud": "Oszukiwać, wprowadzać w błąd lub zwodzić nas i innych użytkowników, zwłaszcza w próbach uzyskania poufnych informacji o koncie, takich jak hasła użytkowników.",
    "securityInterference": "Omijać, wyłączać lub w inny sposób zakłócać funkcje związane z bezpieczeństwem Witryny, w tym funkcje, które uniemożliwiają lub ograniczają korzystanie z jakichkolwiek Treści lub narzucają ograniczenia w korzystaniu z Witryny i/lub zawartych w niej Treści.",
    "defamation": "Obrażać, szkodzić lub w inny sposób szkodzić, w naszej opinii, nam i/lub Witrynie.",
    "harassment": "Wykorzystywać jakiekolwiek informacje uzyskane z Witryny w celu nękania, znęcania się lub szkodzenia innej osobie.",
    "supportAbuse": "Niewłaściwie korzystać z naszych usług wsparcia lub składać fałszywe zgłoszenia nadużyć lub niewłaściwego zachowania.",
    "legalCompliance": "Korzystać z Witryny w sposób niezgodny z obowiązującymi przepisami prawa.",
    "framingProhibition": "Podejmować nieautoryzowane osadzanie lub linkowanie do Witryny.",
    "malware": "Przesyłać lub próbować przesyłać wirusy, konie trojańskie lub inne materiały, w tym nadmierne używanie wielkich liter i spamowanie (ciągłe publikowanie powtarzającego się tekstu), które zakłócają nieprzerwane korzystanie z Witryny przez innych użytkowników lub modyfikują, osłabiają, zakłócają, zmieniają lub ingerują w użytkowanie, funkcje, działanie lub utrzymanie Witryny.",
    "automation": "Podejmować jakiekolwiek zautomatyzowane korzystanie z systemu, takie jak używanie skryptów do wysyłania komentarzy lub wiadomości, lub używanie narzędzi do wydobywania danych, robotów lub podobnych narzędzi zbierania i ekstrakcji danych.",
    "copyrightRemoval": "Usuwać informacje o prawach autorskich lub innych prawach własności z jakichkolwiek Treści.",
    "impersonation": "Próbować podszywać się pod innego użytkownika lub osobę lub używać nazwy użytkownika innego użytkownika.",
    "spyware": 'Przesyłać lub próbować przesyłać jakiekolwiek materiały, które działają jako pasywne lub aktywne mechanizmy zbierania lub przesyłania informacji, w tym, bez ograniczeń, przezroczyste formaty wymiany grafik (\"gify\"), piksele 1×1, web bugi, pliki cookie lub inne podobne urządzenia (czasami określane jako \"spyware\" lub \"pasywne mechanizmy zbierania\" lub \"pcms\").',
    "disruption": "Zakłócać, przerywać lub nadmiernie obciążać Witryny lub sieci lub usługi z nią połączone.",
    "employeeHarassment": "Nękać, irytować, zastraszać lub grozić jakiemukolwiek naszemu pracownikowi lub agentowi zaangażowanemu w świadczenie jakiejkolwiek części Witryny dla Ciebie.",
    "accessCircumvention": "Próbować obejść jakiekolwiek środki Witryny zaprojektowane w celu zapobiegania lub ograniczania dostępu do Witryny lub jakiejkolwiek jej części.",
    "codeCopying": "Kopiować lub adaptować oprogramowanie Witryny, w tym, ale nie tylko, Flash, PHP, HTML, JavaScript lub inny kod.",
    "reverseEngineering": "Z wyjątkiem przypadków dozwolonych przez obowiązujące prawo, deszyfrować, dekompilować, rozpakowywać lub dokonywać inżynierii wstecznej jakiegokolwiek oprogramowania składającego się na Witrynę lub w jakikolwiek sposób stanowiącego jej część.",
    "bots": "Z wyjątkiem przypadków będących wynikiem standardowego korzystania z wyszukiwarki internetowej lub przeglądarki internetowej, używać, uruchamiać, rozwijać lub rozpowszechniać jakikolwiek zautomatyzowany system, w tym, bez ograniczeń, jakiekolwiek pająki internetowe, roboty, narzędzia oszustw, skrobaki lub czytniki offline, które uzyskują dostęp do Witryny, lub używać lub uruchamiać jakiekolwiek nieautoryzowane skrypty lub inne oprogramowanie.",
    "buyingAgents": "Korzystać z agenta zakupowego lub pośrednika w celu dokonywania zakupów w Witrynie.",
    "unauthorizedUse": "Dokonywać jakiegokolwiek nieautoryzowanego korzystania z Witryny, w tym zbierania nazw użytkowników i/lub adresów e-mail użytkowników za pomocą środków elektronicznych lub innych w celu wysyłania niechcianych wiadomości e-mail lub tworzenia kont użytkowników za pomocą zautomatyzowanych środków lub pod fałszywymi pretekstami.",
    "competition": "Korzystać z Witryny jako części jakichkolwiek działań mających na celu konkurowanie z nami lub w inny sposób korzystać z Witryny i/lub Treści w jakimkolwiek przedsięwzięciu generującym przychody lub przedsięwzięciu komercyjnym.",
    "advertising": "Korzystać z Witryny w celu reklamowania lub oferowania sprzedaży towarów i usług.",
    "profileTransfer": "Sprzedawać lub w inny sposób przenosić swój profil.",
    "featuresTitle": "11. Funkcje i Błędy",
    "featuresDescription": "Projektujemy nasze Usługi z troską, opierając się na naszym własnym doświadczeniu i doświadczeniach klientów, którzy dzielą się swoim czasem i opiniami. Jednak nie ma usługi, która zadowoli wszystkich. Nie gwarantujemy, że nasze Usługi spełnią Twoje szczególne wymagania lub oczekiwania.",
    "bugsDescription": "Testujemy również wszystkie nasze funkcje przed ich wydaniem. Jak każde oprogramowanie, nasze Usługi nieuchronnie zawierają pewne błędy. Śledzimy zgłoszone nam błędy i pracujemy nad ich usunięciem, zwłaszcza te związane z bezpieczeństwem lub prywatnością. Nie wszystkie zgłoszone błędy zostaną naprawione i nie gwarantujemy całkowicie wolnych od błędów Usług.",
    "correctionsTitle": "12. Poprawki",
    "informationAccuracy": "W Witrynie mogą znajdować się informacje zawierające błędy drukarskie, nieścisłości lub pominięcia, w tym opisy, ceny, dostępność i różne inne informacje. Zastrzegamy sobie prawo do poprawiania wszelkich błędów, nieścisłości lub pominięć oraz do zmiany lub aktualizacji informacji w Witrynie w dowolnym czasie, bez uprzedzenia.",
    "siteAvailability": "Nie możemy zagwarantować, że Witryna będzie dostępna przez cały czas. Możemy napotkać problemy sprzętowe, programowe lub inne lub potrzebować przeprowadzić prace konserwacyjne związane z Witryną, co może skutkować przerwami, opóźnieniami lub błędami. Zastrzegamy sobie prawo do zmiany, aktualizacji, zawieszenia, zaprzestania lub w inny sposób modyfikowania Witryny w dowolnym czasie i z dowolnego powodu, bez powiadomienia Ciebie. Zgadzasz się, że nie ponosimy żadnej odpowiedzialności za jakiekolwiek straty, szkody lub niedogodności spowodowane Twoją niemożnością dostępu lub korzystania z Witryny podczas jakichkolwiek przestojów lub zaprzestania działania Witryny. Żadne postanowienie niniejszych Warunków świadczenia usług nie będzie interpretowane jako zobowiązujące nas do utrzymywania i wspierania Witryny lub dostarczania jakichkolwiek poprawek, aktualizacji lub wydań z nią związanych.",
    "userDataTitle": "13. Dane Użytkownika",
    "userDataDescription": "Będziemy przechowywać określone dane, które przesyłasz do Witryny, w celu zarządzania jej wydajnością, a także dane związane z Twoim korzystaniem z Witryny. Chociaż regularnie wykonujemy kopie zapasowe danych, Ty ponosisz wyłączną odpowiedzialność za wszystkie dane, które przesyłasz lub które dotyczą jakiejkolwiek aktywności podjętej przez Ciebie przy użyciu Witryny. Zgadzasz się, że nie ponosimy wobec Ciebie żadnej odpowiedzialności za utratę lub uszkodzenie takich danych, i niniejszym zrzekasz się wszelkich roszczeń wobec nas wynikających z takiej utraty lub uszkodzenia danych.",
    "privacyPolicyTitle": "14. Polityka Prywatności",
    "liabilityTitle": "15. Odpowiedzialność",
    "liabilityIntroduction": "Wspominamy o odpowiedzialności w całych tych Warunkach, ale aby zebrać wszystko w jednej sekcji:",
    "liabilityWaiver": "Wyraźnie rozumiesz i zgadzasz się, że Firma nie będzie odpowiedzialna, na mocy prawa lub zasad słuszności, wobec Ciebie lub jakiejkolwiek strony trzeciej za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, utracone zyski, szczególne, wynikowe, karne lub przykładowe szkody, w tym, ale nie tylko, szkody za utratę zysków, goodwillu, użytkowania, danych lub innych niematerialnych strat (nawet jeśli Firma została poinformowana o możliwości wystąpienia takich szkód), wynikające z: (1) korzystania lub niemożności korzystania z Usług; (2) błędów, pomyłek lub nieścisłości treści i materiałów; (3) obrażeń ciała lub szkód majątkowych, jakiegokolwiek rodzaju, wynikających z Twojego dostępu i korzystania z Witryny; (4) kosztów nabycia zastępczych towarów i usług wynikających z jakichkolwiek towarów, danych, informacji lub usług nabytych lub uzyskanych lub wiadomości otrzymanych lub transakcji zawartych za pośrednictwem lub z Usług; (5) jakiegokolwiek nieautoryzowanego dostępu lub użycia naszych bezpiecznych serwerów i/lub wszelkich danych osobowych i/lub finansowych w nich przechowywanych; (6) jakiegokolwiek przerwania lub zaprzestania transmisji do lub z Witryny; (7) jakichkolwiek błędów, wirusów, koni trojańskich lub podobnych, które mogą być przekazane do lub przez Witrynę przez jakąkolwiek stronę trzecią, i/lub; (8) jakichkolwiek błędów lub pominięć w jakichkolwiek treściach i materiałach lub za jakąkolwiek stratę lub szkodę jakiegokolwiek rodzaju poniesioną w wyniku korzystania z jakichkolwiek treści opublikowanych, przesłanych lub w inny sposób udostępnionych za pośrednictwem Witryny; (9) oświadczeń lub działań jakiejkolwiek strony trzeciej w usłudze; (10) lub jakiejkolwiek innej kwestii związanej z niniejszymi Warunkami świadczenia usług lub Usługami, czy to jako naruszenie umowy, delikt (w tym zaniedbanie, czy aktywne czy pasywne), czy jakakolwiek inna teoria odpowiedzialności.",
    "miscellaneousTitle": "16. Różne",
    "miscellaneousDescription": "Niniejsze Warunki świadczenia usług oraz wszelkie zasady lub reguły działania opublikowane przez nas w Witrynie lub w odniesieniu do Witryny stanowią całość porozumienia i zrozumienia między Tobą a nami. Nasze niepowodzenie w egzekwowaniu lub wykonaniu jakiegokolwiek prawa lub postanowienia niniejszych Warunków świadczenia usług nie będzie działać jako zrzeczenie się takiego prawa lub postanowienia. Niniejsze Warunki świadczenia usług obowiązują w najszerszym zakresie dozwolonym przez prawo. Możemy przenieść wszelkie lub część naszych praw i obowiązków na innych w dowolnym czasie. Nie będziemy odpowiedzialni lub zobowiązani za jakiekolwiek straty, szkody, opóźnienia lub niepowodzenie w działaniu spowodowane przez jakąkolwiek przyczynę znajdującą się poza naszą rozsądną kontrolą. Jeśli jakiekolwiek postanowienie lub część postanowienia niniejszych Warunków świadczenia usług zostanie uznane za niezgodne z prawem, nieważne lub niewykonalne, takie postanowienie lub jego część zostanie uznane za oddzielne od niniejszych Warunków świadczenia usług i nie wpłynie na ważność i wykonalność pozostałych postanowień. W wyniku niniejszych Warunków świadczenia usług lub korzystania z Witryny nie powstaje między Tobą a nami żaden wspólny interes, partnerstwo, stosunek pracy lub agencyjny. Zgadzasz się, że niniejsze Warunki świadczenia usług nie będą interpretowane na naszą niekorzyść z powodu ich sporządzenia przez nas. Niniejszym zrzekasz się wszelkich i wszystkich obron, które możesz mieć na podstawie elektronicznej formy niniejszych Warunków świadczenia usług i braku podpisów przez strony w celu ich wykonania.",
    "contactTitle": "17. Skontaktuj się z nami",
    "neverCap": "NeverCap",
    "site": "Witryna",
    "services": "Usługi",
    at: "na",
      trademarkProtection: "Nazwy, wygląd i styl Usług są chronione prawem autorskim© Firmy. Wszelkie prawa zastrzeżone. Nie można powielać, kopiować ani ponownie wykorzystywać żadnej części HTML, CSS, JavaScript ani elementów projektu wizualnego bez wyraźnej pisemnej zgody Firmy. Aby korzystać z logo Firmy lub logo Usług w celach promocyjnych, należy uzyskać zgodę. Prosimy o przesłanie próśb o użycie logo na adres {at} {email}. Zastrzegamy sobie prawo do cofnięcia tej zgody w przypadku naruszenia niniejszych Warunków Usługi.",
      privacyPolicyDescription: "Dbamy o prywatność i bezpieczeństwo danych. Zapoznaj się z naszą {policy}. Korzystając z Witryny, wyrażasz zgodę na przestrzeganie naszej Polityki Prywatności, która stanowi część niniejszych Warunków Usługi. Witryna jest hostowana w Stanach Zjednoczonych. Jeśli uzyskujesz dostęp do Witryny z innego regionu świata, w którym obowiązują przepisy dotyczące gromadzenia, wykorzystywania lub ujawniania danych osobowych różniące się od przepisów Stanów Zjednoczonych, to poprzez dalsze korzystanie z Witryny przekazujesz swoje dane do Stanów Zjednoczonych i wyrażasz zgodę na ich przekazanie i przetwarzanie w Stanach Zjednoczonych.",
      contactDescription: "Jeśli masz pytanie dotyczące Warunków Usługi, skontaktuj się z nami {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
