// 芬兰语
let message = {
  // Etusivu
  HomePage: {
    home: "Kaikki Transkriptit",
    times: "{times} ilmaista litterointia päivässä, {left} jäljellä tänään. ",
    tips: "Päivitä Pro-versioon saadaksesi rajattomasti litterointeja.",
    update: "Päivitä nyt",
    rename: "Nimeä uudelleen",
    delete: "Poista",
    cancel: "Peruuta",
    confirm: "Luo",
    dialogLabel: "Kansion nimi",
    recently: "Viimeaikaiset tiedostot",
    loading: "Lataa",
    tour: {
      step0: {
        title: "Tervetuloa {name}",
        tip: "Täällä voit:",
        content:
          "Tekstittää kertaluonteisia keskusteluja, kokouksia, luentoja ja paljon muuta",
        next: "Aloita"
      },
      step1: {
        title: "Tekstitä tiedostoja",
        content:
          "Tukee kolmea tekstitysmenetelmää: paikalliset tiedostot, linkit ja nauhoitukset."
      },
      step2: {
        title: "Luo kansio",
        content:
          'Napsauta "+" luodaksesi kansion ja järjestelläksesi tiedostoja.'
      },
      step3: {
        title: "Näytä tekstitystiedot ja muokkaa",
        content:
          "Napsauta kohdetta nähdäksesi tekstitystiedot, muokataksesi tai kääntääksesi sen."
      },
      next: "seuraava",
      finish: "Selvä"
    },
    export: {
      export: "Vie",
      title: "Luomme vientiäsi",
      title2: "Tiedostosi on valmis",
      singleLoadingContent: "1 tiedosto pakataan.",
      singleSuccessContent: "1 tiedosto on pakattu.",
      loadingContent: "{num} tiedostoa pakataan.",
      successContent: "{num} tiedostoa on pakattu.",
      cancel: "Peruuta vienti",
      error: "Vihevirhe",
      dialog: {
        title: "Varoitus",
        content: "Peruutetaanko vienti?",
        cancel: "Peruuta vienti",
        continue: "Jatka vientiä"
      }
    },
    welcome: {
      title: "Tervetuloa Scribifyyn!",
      description: "Täällä voit:",
      transcribe:
        "Litteroi vaivattomasti Scribifyllä—muunna puhekeskustelut selkeäksi, haettavaksi ja jaettavaksi tekstiksi hetkessä.",
      precision:
        "Saa tarkat litteraatiot puhujatunnisteilla ja aikaleimalla välittömästi.",
      translate:
        "Murra kielimuuri: käännä litteraatiot yli 200 kielelle helposti.",
      edit: "Muokkaa, hio ja vie litteraatiosi tarpeitasi vastaavissa muodoissa.",
      collaborate:
        "Tee yhteistyötä jakamalla litteroitu tekstisi muiden kanssa.",
      button: "Aloita",
      tip: "Valmis muuntamaan ääntä litteroiduksi tekstiksi? Aloita tutkiminen nyt!",
      tip2: "Aloita tutkiminen nyt!",
      tip1: "Valmis muuttamaan äänen litteroiduksi tekstiksi? "
    },
    subscriptionModal: {
      left: {
        title: "Hanki Pro-suunnitelma avataksesi lisää ominaisuuksia",
        c1: "Rajattomat litteroinnit",
        c2: "10 tunnin lataukset",
        c3: "Korkein prioriteetti",
        c4: "99% litterointitarkkuus",
        c5: "Yli 100 tuettua kieltä",
        c6: "Puhujan tunnistus",
        c7: "Litteraation kääntäminen",
        t1: "Rajattomat litteroinnit yhdelle henkilölle.",
        t2: "Jokainen tiedosto voi olla jopa 10 tuntia / 5 GB. Lataa 50 tiedostoa kerralla.",
        t3: "Litteroimme tiedostosi aina mahdollisimman pian korkeimmalla prioriteetilla."
      },
      right: {
        title: "Hanki Pro-suunnitelma",
        yearly: "Vuosittain",
        monthly: "Kuukausittain",
        save: "Säästö",
        preMonth: "kuukaudessa",
        preYear: "vuodessa",
        firstMonth: "ensimmäinen kuukausi",
        afterwards: "sen jälkeen"
      },
      subscribe: "Tilaa"
    }
  },
  // Kansiosivu
  FolderPage: {
    table: {
      failed: "Epäonnistui",
      selected: "Valittu",
      success: "Onnistui",
      fileList: "Tiedostoluettelo"
    },
    dialog: {
      move: {
        title: "Siirrä",
        label: "Valitse kansio",
        placeholder: "Valitse kansio",
        confirm: "Siirrä",
        cancel: "Peruuta"
      },
      rename: {
        title: "Nimeä uudelleen",
        label: "Tiedostonimi",
        confirm: "Nimeä uudelleen",
        cancel: "Peruuta"
      },
      delete: {
        title: "Poista",
        file: "tiedosto",
        files: "tiedostoa",
        label: "Vahvista poisto? Tätä toimintoa ei voi peruuttaa.",
        confirm: "Poista",
        cancel: "Peruuta"
      },
      share: {
        title: "Jaa",
        label:
          "Kuka tahansa, jolla on seuraava turvalinkki, voi tarkastella tätä tekstitystä ja siihen liittyvää mediatiedostoa.",
        confirm: "Kopioi linkki",
        success: "Kopiointi onnistui"
      },
      export: {
        title: "Vie",
        select: "Valitse tarvitsemasi muoto",
        settings: "Asetukset",
        speaker: "Sisällytä puhuja",
        timecodes: "Sisällytä aikakoodit",
        confirm: "Vie",
        cancel: "Peruuta",
        selectErr: "Valitse yksi tai useampi muoto"
      }
    },
    search: {
      placeholder: "Etsi"
    },
    recently: "Viimeaikaiset",
    record: "Nauhoita",
    transcribe: "Tekstitä",
    unclassified: "Luokittelemattomat kansiot",
    buttons: {
      transcribe: "Tekstitä tiedostoja",
      url: "Tekstitä linkit",
      record: "Nauhoita ja tekstitä",
      recording: "Nauhoitetaan..."
    },
    delSuccess: "Poisto onnistui",
    create: "Luo",
    endRecord: {
      title: "Kehote",
      content:
        "Olet nauhoittamassa. Tämä toiminto lopettaa nauhoituksen. Haluatko lopettaa nauhoituksen?",
      confirm: "Jatka Nauhoitusta",
      cancel: "Lopeta Nauhoitus"
    }
  },
  // Tiedoston lataus ja nauhoitus
  FileUploadAndRecording: {
    record: {
      record: "Nauhoita",
      pause: "Keskeytä",
      resume: "Jatka",
      stop: "Lopeta",
      endRecord: "Lopeta tallennus",
      delete: "Poista",
      transcribe: "Tekstitä",
      permissionDenied: "Mikrofonilupa evätty tai laitetta ei ole olemassa",
      dialog: {
        delete: {
          title: "Varoitus",
          label: "Haluatko varmasti poistaa tämän nauhoituksen?",
          confirm: "Poista",
          cancel: "Peruuta"
        },
        complete: {
          title: "Nauhoitus valmis",
          label:
            "Nauhoitus on saavuttanut 10 tuntia ja on pysähtynyt automaattisesti. Tekstitä se.",
          confirm: "Selvä"
        },
        speaker: {
          content:
            "Puhujien tunnistuksessa tiedostojen pituus on rajoitettu 3 tuntiin. Poista valinta kohdasta '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Tekstitä verkkomedia",
        title: "Liitä linkit",
        label:
          "Liitä videon tai äänen linkki esimerkiksi osoitteesta: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram tai muilta alustoilta...",
        confirm: "Lisää",
        cancel: "Peruuta",
        errorTitle:
          "Antamasi linkkiosoite on virheellinen. Tarkista ja yritä uudelleen.",
        linkName: "Linkki"
      },
      file: {
        orTitle: "Transkriptio URL-osoitteesta",
        dialogTitle: "Lataa tiedostot litteroitavaksi",
        tip1: "Vedä tiedostot tähän tai napsauta selataksesi",
        tip2: "Klikkaa selataksesi",
        or: "tai",
        supported: "Tuetut muodot"
      },
      del: {
        title: "Varoitus",
        content:
          "Kaikki edistyminen menetetään. Haluatko varmasti peruuttaa tekstityksen?",
        cancel: "Vahvista peruutus",
        confirm: "Jatka tekstitystä"
      },
      files: "Tiedostot",
      resultDialogTitle: "Tekstitä tiedostoja",
      resultDialogTitle2: "Litteroi tiedosto",
      cancel: "Peruuta",
      confirm: "Tekstitä",
      return: "Palaa",
      addMore: "Lisää lisää",
      language: "Valitse kieli",
      failed: "Epäonnistui",
      tooLarge: "Tiedosto ylittää rajan (5 Gt).",
      linkUpload: "Ladataan",
      fileFormat: "Tiedostomuoto ei ole sallittu",
      localFiles: "Paikalliset tiedostot",
      pasteLink: "Online-linkki",
      uploadErr: "Latausvirhe",
      hashErr: "Tarkistusvirhe",
      table: {
        status: "Tila",
        file: "Tiedosto",
        size: "Koko",
        noData: "Ei tietoja"
      },
      maxFileNum: "Tiedostojen määrä ei voi ylittää {num}.",
      speaker: "Tunnista puhujat",
      speakerLabel: "Tunnista puhuja automaattisesti",
      guest: {
        transcribe: "Litteroi",
        file: "Tiedosto",
        audio: "Ääni-/videotiedosto",
        Uploading: "Ladataan..."
      }
    }
  },
  // Tekstitystiedot sivu
  TranscriptionPage: {
    langChooseV1: {
      recently: "Viimeaikaiset",
      popular: "Suositut",
      other: "Muut",
      searchLanguage: "Hae kieltä",
      noMatch: "Kieltä ei löytynyt",
      English: "Englanti",
      "English(US)": "Englanti (USA)",
      "English(UK)": "Englanti (Iso-Britannia)",
      Spanish: "Espanja",
      Portuguese: "Portugali",
      French: "Ranska",
      Italian: "Italia",
      German: "Saksa",
      Dutch: "Hollanti",
      Polish: "Puola",
      Danish: "Tanska",
      Japanese: "Japani",
      Korean: "Korea",
      Hungarian: "Unkari",
      Czech: "Tšekki",
      Chinese: "Kiina",
      Hebrew: "Heprea",
      Arabic: "Arabia",
      Azerbaijani: "Azeri",
      Estonian: "Viro",
      Belarusian: "Valkovenäjä",
      Bulgarian: "Bulgaria",
      Icelandic: "Islanti",
      Bosnian: "Bosnia",
      Persian: "Persia",
      Russian: "Venäjä",
      "Chinese(Traditional)": "Perinteinen kiina",
      Finnish: "Suomi",
      Kazakh: "Kazakstan",
      Galician: "Galicia",
      Catalan: "Katalaani",
      "Chinese(Simplified)": "Yksinkertaistettu kiina",
      Kannada: "Kannada",
      Croatian: "Kroatia",
      Latvian: "Latvia",
      Lithuanian: "Liettua",
      Romanian: "Romania",
      Marathi: "Marathi",
      Malay: "Malaiji",
      Macedonian: "Makedonia",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norja",
      Swedish: "Ruotsi",
      Serbian: "Serbia",
      Slovak: "Slovakia",
      Slovenian: "Slovenia",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thaimaa",
      Turkish: "Turkki",
      Welsh: "Kymri",
      Urdu: "Urdu",
      Ukrainian: "Ukraina",
      Greek: "Kreikka",
      Armenian: "Armenia",
      Hindi: "Hindi",
      Indonesian: "Indonesia",
      Vietnamese: "Vietnam",
      Albanian: "Albania",
      Amharic: "Amhara",
      Assamese: "Assam",
      Occitan: "Oksitaani",
      Bashkir: "Baškiiri",
      Basque: "Baski",
      Breton: "Bretoni",
      Tibetan: "Tiibet",
      Faroese: "Fääri",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgia",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitin kreoli",
      Hausa: "Hausa",
      Latin: "Latina",
      Lao: "Laos",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburg",
      Malagasy: "Madagaskar",
      Maltese: "Malta",
      Malayalam: "Malayalam",
      Mongolian: "Mongolia",
      Bengali: "Bengali",
      Burmese: "Burma",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Sinhala",
      Shona: "Shona",
      Somali: "Somalia",
      Tajik: "Tadžikki",
      Tatar: "Tataari",
      Telugu: "Telugu",
      Turkmen: "Turkmenistan",
      Uzbek: "Uzbekistan",
      Hawaiian: "Havaiji",
      "Norwegian Nynorsk": "Norjan nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Jiddiš",
      Yoruba: "Yoruba",
      Javanese: "Jaava",
      Cantonese: "Kantoninkiina",
      Abkhaz: "Abhasia",
      Afar: "Afar",
      alz: "Alz",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaari",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlanti",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osseetti",
      tpi: "Tok-pisin",
      bew: "Betawi",
      ban: "Bali",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Pohjoissotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balutši",
      bho: "Bhojpuri",
      bua: "Burjaatti",
      chm: "Marin kieli",
      Chamorro: "Tšamorro",
      Chechen: "Tšetšeeni",
      chk: "Chuuk",
      Chuvash: "Tšuvassi",
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
      "South Ndebele": "Eteländebele",
      dov: "Dombesa",
      "bm-Nkoo": "N'ko (Länsiafrikkalainen kirjaimisto)",
      "French(Canada)": "Ranska (Kanada)",
      Fijian: "Fidži",
      fon: "Fon",
      "Western Frisian": "Länsifriisi",
      fur: "Friuli",
      Fulah: "Fula",
      Kongo: "Kongo",
      Kalaallisut: "Grönlanti",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisia",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikka",
      "crh-Latn": "Krimintataari (latinalainen)",
      crh: "Krimintataari (kyrillinen)",
      Quechua: "Ketšua",
      Kurdish: "Kurdi (Kurmanji)",
      ckb: "Kurdi (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalli",
      lij: "Liguria",
      Limburgish: "Limburg",
      Kirundi: "Rundi",
      luo: "Luo",
      Luganda: "Ganda",
      Kinyarwanda: "Ruanda",
      lmo: "Lombardi",
      rom: "Romani",
      mad: "Madura",
      Manx: "Manksin",
      mwr: "Marwari",
      "ms-Arab": "Malaiji (Jawi-kirjaimisto)",
      Marshallese: "Marshall",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Itäinen Huasteca)",
      "Southern Sotho": "Eteläsotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi-kirjaimisto)",
      "pt-PT": "Portugali (Portugali)",
      Chichewa: "Nyanja",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Twi",
      zap: "Sapoteekki",
      "Northern Sami": "Pohjoissaame",
      Samoan: "Samoa",
      kri: "Sierraleonenkrioli",
      crs: "Seychellienkreoli",
      Sango: "Sango",
      "sat-Latn": "Santali (latinalainen)",
      sat: "Santali (Ogham-kirjaimisto)",
      Esperanto: "Esperanto",
      Swati: "Swazi",
      "Scottish Gaelic": "Skotlanningaeli",
      sus: "Susu",
      ceb: "Cebu",
      ber: "Tamazight (Tifinagh-kirjaimisto)",
      "ber-Latn": "Tamazight (latinalainen)",
      Tahitian: "Tahiti",
      Tonga: "Tonga",
      Tigrinya: "Tigrinja",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuva",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetsia",
      Uyghur: "Uiguuri",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtti",
      szl: "Sileesia",
      scn: "Sisilia",
      hil: "Hiligaino",
      jam: "Jamaikankreoli",
      sah: "Sakha",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (latinalainen)",
      Inuktitut: "Inuktitut (tavukirjoitus)",
      yua: "Jukataninmaja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // Kirjautuminen, rekisteröityminen, salasanan vaihto
  IdentityInfoManage: {
    or: "tai",
    LoginBtn: "Kirjaudu sisään sähköpostilla",
    LoginGoogle: "Kirjaudu sisään Googlella",
    SignupBtn: "Rekisteröidy sähköpostilla",
    SignupGoogle: "Rekisteröidy Googlella",
    SignupDes: "Rekisteröidy tänään ja koe taika — ilmaiseksi.",
    SignupTitle: "Tarkka ja rajaton transkriptio",
    signup: "Rekisteröidy",
    sign_up: "Rekisteröidy",
    loginByGoogle: "Jatka Googlella",
    emailAddress: "Anna sähköpostiosoitteesi",
    createAccount: "Luo uusi tili",
    accountExists: "Onko sinulla jo tili? ",
    agreeTerm: {
      agree: "Jatkamalla hyväksyt meidän {terms} ja {policy}.",
      terms: "Ehdot",
      policy: "Tietosuojakäytäntö"
    },
    setPassword: "Aseta salasana",
    code: "Vahvistuskoodi",
    resend: "Lähetä uudelleen",
    enterPassword: "Salasana: vähintään 6 merkkiä.",
    passwordLeval: "Salasanan vahvuus",
    Weak: "Heikko",
    Medium: "Kohtalainen",
    Strong: "Vahva",
    confirmPassword: "Vahvista salasanasi",
    invalidEmail: "Virheellinen sähköpostiosoite",
    logInDirectly: "Tämä tili on jo olemassa. Kirjaudu suoraan sisään.",
    codeErrorTryAgain: "Vahvistuskoodi virheellinen. Yritä uudelleen.",
    atLeastSix: "Salasanan on oltava vähintään 6 merkkiä pitkä.",
    passwordNotMatch: "Salasanat eivät täsmää. Yritä uudelleen.",
    login: "Kirjaudu sisään",
    log_in: "Kirjaudu sisään",
    log_In: "Kirjaudu sisään",
    password: "Salasana",
    forgotPassword: "Unohditko salasanasi?",
    noAccount: "Eikö sinulla ole tiliä？",
    accountNotExists: "Tiliä ei ole olemassa.",
    passwordError: "Väärä salasana",
    sendCode: "Lähetä vahvistuskoodi",
    resetPassword: "Nollaa salasana",
    resetYourPassword: "Nollaa salasanasi",
    newOldCantSame: "Uusi salasana ei voi olla sama kuin vanha salasana.",
    passwordResetOk: "Salasanan nollaus onnistui！",
    signupToSaveProgress:
      "Viimeistele rekisteröityminen tallentaaksesi edistymisesi.",
    tip: "Vihje",
    tipContentEmail:
      "Olemme juuri lähettäneet tilisi kirjautumissalasanan sähköpostiisi.",
    tipContentPassword:
      "Tarkista saapuneet-kansiostasi ja kirjaudu sisään sähköpostiosoitteellasi ja salasanallasi.",
    codeToEmail:
      "Lähetimme juuri vahvistuskoodin sähköpostiisi. Tarkista saapuneet viestit ja liitä vahvistuskoodi yllä olevaan kenttään."
  },
  // Jaa sivu
  Sharepage: {},
  // Alustussivu
  InitPage: {},
  // Tiliasetukset
  AccountSettingsPage: {
    subscription: "Tilaussuunnitelma",
    freeversion: "Ilmainen",
    transcribeTimesDay: "3 transkriptiota päivässä",
    uploadMinutes: "30 minuutin lataukset",
    lowerPriority: "Matalampi prioriteetti",
    currentPlan: "Nykyinen suunnitelma",
    professionalEdition: "ammattimainen versio",
    unlimitedTranscription: "Rajoittamaton transkriptio",
    unlimitedNumberOfTimes: "Rajoittamaton transkriptioitiöisyys ja kesto.",
    filesUploadedAtOnce:
      "Jokainen tiedosto voi olla enintään 10 tuntia pitkä / 5 GB. Lataa 50 tiedostoa kerralla.",
    highestPriority: "korkein prioriteetti",
    weWillGiveTheHighest:
      "Transkriboimme tiedostosi mahdollisimman nopeasti korkeimmalla prioriteetilla.",
    theFirstMonth: "Ensimmäinen kuukausi",
    subscribeTo: "tilaa",
    basicVersionFree: "Perusversio (ilmainen)",
    return: "Palaa",
    annualize: "vuosittain",
    monthly: "kuukausittain",
    everyYear: "joka vuosi",
    saved: "säästetty",
    byTheMonth: "kuukaudessa",
    firstMonth: "ensimmäinen kuukausi",
    afterwardsEveryMonth: "Sen jälkeen joka kuukausi",
    manageSubscription: "Hallitse tilausta",
    professionalYearbook: "Ammattimainen vuosikerta",
    professionalMonthly: "Ammattimainen kuukausittainen",
    subscriptionWillCancelledOn: "Tilauksesi peruutetaan",
    displayLanguage: "Näyttökieli",
    update: "Päivitä nyt",
    basicversion: "Perusversio (Ilmainen)",
    daily: "{start} / {end} päivittäisestä transkriptiosta käytetty",
    upgradetoPro: "Päivitä Pro-versioon",
    accountSetting: "Tilin asetukset",
    logOut: "Kirjaudu ulos",
    account: "Tili",
    email: "Sähköposti",
    id: "Tunnus",
    password: "Salasana",
    resetPassword: "Nollaa salasana",
    logIn: "Kirjaudu sisään",
    tryForFree: "Ilmainen kokeilu",
    notFund: "Ei löytynyt",
    couldntFind: "Emme löytäneet etsimääsi.",
    proAnnual: "Pro Vuosittain",
    proMonthly: "Pro Kuukausittain",
    perMonth: "kuukaudessa",
    afterwards: "sen jälkeen",
    accuracy: "transkription tarkkuus",
    supported: "tuetut kielet",
    identification: "Puhujan tunnistus",
    transcriptSranslation: "Transkription käännös",
    perYear: "vuodessa",
    getProPlan: "Hanki Pro-suunnitelma",
    changeToAnnual: "Vaihda vuosittaiseen",
    automaticRenewalon: "Automaattinen uusinta",
    eachMonth: "Automaattinen uusinta kuukauden {time}. päivänä.",
    automaticRenewal:
      "Automaattinen uusiminen epäonnistui, tarkista maksutapa.",
    eachYear: "Automaattinen uusiminen {time} joka vuosi.",
    returnAccountSetting: "Takaisin",
    needsToWaitLonger: "Odota kauemmin ennen kuin tiedostosi litteroidaan.",
    freeThreeTimesDay: "Litteroi 3 tiedostoa ilmaiseksi joka päivä.",
    oneFileUploaded:
      "Jokainen tiedosto voi olla enintään 30 minuuttia pitkä. Lataa 1 tiedosto kerrallaan.",
    uploadWithinHours: "10 tunnin lataukset",
    yourSubscription: "Tilauksesi peruutetaan {time}.",
    save: "Säästää",
      freeversion2: "Ilmainen Suunnitelma"
},
  // Kielen vastaavuussuhteet
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kiina (yksinkertaistettu)",
      "Chinese(Traditional)": "Kiina (perinteinen)",
      Japanese: "Japani",
      Danish: "Tanska",
      German: "Saksa",
      English: "Englanti",
      Spanish: "Espanja",
      French: "Ranska",
      Italian: "Italia",
      Hungarian: "Unkari",
      Dutch: "Hollanti",
      Norwegian: "Norja",
      Polish: "Puola",
      Portuguese: "Portugali",
      Finnish: "Suomi",
      Swedish: "Ruotsi",
      Turkish: "Turkki",
      Greek: "Kreikka",
      Russian: "Venäjä",
      Ukrainian: "Ukraina",
      Hebrew: "Heprea",
      Arabic: "Arabia",
      Korean: "Korea"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Avoimen lähdekoodin Nuxt3 SaaS -malli, joka on esiin-tehty integroitu globaaleihin maksuyhdyskäytäviin (Stripe/Cream), Google OAuth:iin, i18n-reititykseen ja SEO-optimointityökaluihin. Suunniteltu kehittäjille, jotka julkaisevat monikielisiä verkkosovelluksia, se tarjoaa SSR/SSG-tuen ja tuotantotason turvallisuuden heti käyttöönotettaessa.",
    startLink: "Aloita ilmainen kokeilu~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Liity odotuslistalle, saa NuxtPron uusimmat uutiset ensimmäisenä ja alennukset!",
      placeholder: "Syötä sähköpostiosoitteesi",
      button: "Liity odotuslistalle",
      joinCountMessage:
        "🔥 Varhainen käyttäjä #{count} juuri liittyi odotuslistalle!"
    },
    seo: {
      title: "Avoimen lähdekoodin Nuxt SaaS -runko | NuxtPro",
      description:
        "NuxtJS-runko kaikilla ominaisuuksilla, jotta tuotteesi tavoittaa asiakkaat. Ideasta tuotantoon 5 minuutissa."
    },
    api: {
      title: "tämä on esittely",
      corpInfo: "yritystiedot"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videon latausvirhe"
      },
      mse: {
        code: 2,
        msg: "virhe virtaa liitettäessä"
      },
      parse: {
        code: 3,
        msg: "jäsennysvirhe"
      },
      format: {
        code: 4,
        msg: "väärä muoto"
      },
      decoder: {
        code: 5,
        msg: "dekoodausvirhe"
      },
      runtime: {
        code: 6,
        msg: "kielioppivirheet"
      },
      timeout: {
        code: 7,
        msg: "toiston aikakatkaisu"
      },
      other: {
        code: 8,
        msg: "muut virheet"
      }
    },
    HAVE_NOTHING: "Ei tietoa siitä, onko ääni/video valmiita",
    HAVE_METADATA: "Äänen/videon metadata on valmiina ",
    HAVE_CURRENT_DATA:
      "Tietoja nykyisestä toistopaikasta on saatavilla, mutta ei riittävästi tietoa seuraavan kehyksen/millisekunnin toistamiseen",
    HAVE_FUTURE_DATA: "Nykyinen ja vähintään yksi kehys saatavilla",
    HAVE_ENOUGH_DATA:
      "Käytettävissä olevat tiedot riittävät toiston aloittamiseen",
    NETWORK_EMPTY: "Ääni/video ei ole alustettu",
    NETWORK_IDLE:
      "Ääni/video on aktiivinen ja sen resurssit on valittu, mutta verkkoa ei käytetä",
    NETWORK_LOADING: "Selain lataa tietoja",
    NETWORK_NO_SOURCE: "Ääni-/videolähdettä ei löytynyt",
    MEDIA_ERR_ABORTED: "Hakutoiminto keskeytetty käyttäjän toimesta",
    MEDIA_ERR_NETWORK: "Latauksen aikana tapahtui virhe",
    MEDIA_ERR_DECODE: "Dekoodauksen aikana tapahtui virhe",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Ääni/video ei ole tuettu",
    REPLAY: "Toista uudelleen",
    ERROR: "Verkko on poissa käytöstä",
    PLAY_TIPS: "Toista",
    PAUSE_TIPS: "Tauko",
    PLAYNEXT_TIPS: "Toista seuraava",
    DOWNLOAD_TIPS: "Lataa",
    ROTATE_TIPS: "Kierrä",
    RELOAD_TIPS: "Lataa uudelleen",
    FULLSCREEN_TIPS: "Koko näyttö",
    EXITFULLSCREEN_TIPS: "Poistu koko näytöstä",
    CSSFULLSCREEN_TIPS: "Css-koko näyttö",
    EXITCSSFULLSCREEN_TIPS: "Poistu css-koko näytöstä",
    TEXTTRACK: "Tekstitys",
    PIP: "PIP",
    SCREENSHOT: "Kuvakaappaus",
    LIVE: "LIVE",
    OFF: "Pois",
    OPEN: "Avaa",
    MINI_DRAG: "Napsauta ja pidä hiirtä pohjassa vetämistä varten",
    MINISCREEN: "Pieni näyttö",
    REFRESH_TIPS: "Kokeile",
    REFRESH: "Päivitä",
    FORWARD: "eteenpäin",
    LIVE_TIP: "Suora lähetys",
    TM_SUBTITLE_SHOW_TIPS: "Ota tekstitykset käyttöön",
    TM_SUBTITLE_HIDE_TIPS: "Poista tekstitykset käytöstä",
    TM_MINIMIZE_TIPS: "Piilota video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Tietosuojakäytäntö",
    lastUpdated: "Viimeksi päivitetty: 25. elokuuta 2025",
    policyDescription:
      'Tässä käytäntöasiakirjassa kuvataan, miten Scribify (jäljempänä "Scribify", "me") kerää, käyttää ja luovuttaa henkilötietojasi, kun käytät palveluitamme, verkkosivustojamme',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 'ja ohjelmistoja (yhdessä "Palvelut").',
    policyAgreement:
      "Lue tämä tietosuojakäytäntö huolellisesti ja varmista, että ymmärrät sen. Käyttämällä mitä tahansa Palveluitamme hyväksyt tämän tietosuojakäytännön. Jos et hyväksy henkilötietojesi käyttöä tämän tietosuojakäytännön mukaisesti, sinun on lopetettava Palveluidemme käyttö välittömästi.",
    policyOverview:
      "Tässä tietosuojakäytännössä kerromme, mitä tietoja keräämme ja miksi; miten tietojasi käsitellään; ja mitkä ovat oikeutesi tietoihisi liittyen. Emme myy tietojasi.",
    scopeTitle: "1. Tietosuojakäytännön soveltamisala",
    whatWeCollectTitle: "2. Mitä keräämme ja miksi",
    accessShareTitle: "3. Milloin käytämme tai jaamme tietojasi",
    secureDataTitle: "4. Kuinka suojaamme tietosi",
    deleteContentTitle: "5. Mitä tapahtuu, kun poistat sisältösi",
    locationTitle: "6. Sivuston ja datan sijainti",
    childrenPrivacyTitle: "7. Lasten yksityisyys",
    updatesTitle: "8. Tämän tietosuojakäytännön päivitykset",
    contactUsTitle: "9. Ota yhteyttä",
    identityAccessTitle: "2.1 Henkilöllisyys ja käyttöoikeudet",
    billingInfoTitle: "2.2 Laskutustiedot",
    productInteractionsTitle: "2.3 Tuotteiden yhteisvaikutukset",
    websiteInteractionsTitle: "2.4 Verkkosivuston vuorovaikutus",
    cookiesTitle: "2.5 Evästeet",
    voluntaryCorrespondenceTitle: "2.6 Vapaaehtoinen kirjeenvaihto",
    scopeContent:
      "Tämä tietosuojakäytäntö koskee vain Palveluiden käyttäjiä koskevien tietojen keräämistä ja käsittelyä. Tämä tietosuojakäytäntö ei koske kolmansien osapuolten ylläpitämiä palveluita, verkkosivustoja tai ohjelmistoja, jotka ovat linkitettyjä meihin (riippumatta siitä, tarjoammeko me nämä linkit vai jakavatko muut käyttäjät niitä), eikä se koske kolmansien osapuolten sisältöä, tietoja, sovelluksia tai materiaaleja. Suosittelemme, että tarkistat minkä tahansa kolmannen osapuolen verkkosivuston tai ohjelmiston tietosuojakäytännöt ennen kuin annat niille tietoja.",
    collectPrinciple:
      "Ohjaavana periaatteenamme on kerätä vain se, mitä tarvitsemme. Käytännössä se tarkoittaa seuraavaa:",
    identityAccessContent:
      "Kun rekisteröidyt johonkin tuotteistamme, pyydämme sinulta tunnistettavia tietoja, kuten nimesi ja sähköpostiosoitteesi. Tämä on tarpeen tuotteen olennaisten toimintojen tarjoamiseksi ja jotta voimme lähettää sinulle tuotepäivityksiä ja muita tärkeitä tietoja.",
    billingInfoContent:
      "Jos rekisteröidyt maksulliseen tuotteeseen, sinua pyydetään antamaan maksutietosi ja laskutusosoitteesi. Maksutiedot lähetetään suoraan maksupalvelullemme, eivätkä ne päädy palvelimillemme.",
    productInteractionsContent:
      "Tallennamme palvelimillemme sisältöä, jonka lataat, vastaanotat tai ylläpidät tuotetileilläsi. Ellet poista tätä sisältöä, voimme säilyttää sitä niin kauan kuin tilisi on aktiivinen.",
    websiteInteractionsContent:
      "Keräämme tietoja selaustoiminnastasi analytiikka- ja tilastotarkoituksiin, kuten konversioastetestaukseen ja uusien tuotemallien kokeilemiseen. Näitä tietoja ovat esimerkiksi selaimesi ja käyttöjärjestelmäsi versiot, IP-osoitteesi, vierailemasi verkkosivut ja niiden latausaika sekä verkkosivusto, joka ohjasi sinut meille. Jos sinulla on tili ja olet kirjautuneena sisään, nämä verkkoanalytiikkatiedot yhdistetään IP-osoitteeseesi ja käyttäjätiliisi, kunnes tilisi ei ole enää aktiivinen.",
    cookiesContent1:
      "Käytämme myös pysyviä ensimmäisen osapuolen evästeitä ja joitakin kolmannen osapuolen evästeitä tiettyjen asetusten tallentamiseen, sovellustemme käytön helpottamiseen, A/B-testauksen suorittamiseen sekä analytiikan tukemiseen.",
    cookiesContent2:
      "Eväste on selaimesi tallentama tekstitiedosto. Se voi auttaa muistamaan kirjautumistiedot ja sivuston asetukset. Se voi myös kerätä tietoja, kuten selaimesi tyyppi, käyttöjärjestelmä, vieraillut verkkosivut, vierailun kesto, katsottu sisältö ja muita klikkaustietoja. Voit muuttaa evästeiden säilytysasetuksia ja hyväksyä tai estää yksittäisiä evästeitä selaimesi asetuksissa, vaikka sovelluksemme eivät toimi ja muut palvelumme osat eivät välttämättä toimi oikein, jos poistat evästeet käytöstä.",
    voluntaryCorrespondenceContent:
      "Kun lähetät meille sähköpostia kysymyksen tai pyydät apua, säilytämme kyseisen viestinnän, mukaan lukien sähköpostiosoitteesi, jotta meillä on historia aiemmasta viestinnästä, josta voimme tarkistaa, jos otat meihin yhteyttä tulevaisuudessa.",
    accessShareContent1:
      "Tarjotaksemme pyytämiäsi tuotteita tai palveluita. Käytämme joitakin kolmannen osapuolen alihankkijoita sovellustemme suorittamiseen ja Palveluiden tarjoamiseen sinulle. Näihin kuuluvat pilvi- ja analytiikkapalveluntarjoajat.",
    accessShareContent2:
      "Väärinkäytösten tutkimiseksi, estämiseksi tai niihin liittyvien toimien toteuttamiseksi. Asiakkaan tilin käyttö mahdollista väärinkäyttöä tutkittaessa on viimeinen keino. Haluamme suojella sekä asiakkaidemme että meille ongelmista ilmoittavien henkilöiden yksityisyyttä ja turvallisuutta, ja teemme parhaamme tasapainottaaksemme nämä vastuut koko prosessin ajan. Jos havaitsemme, että käytät tuotteitamme rajoitettuun tarkoitukseen, ryhdymme tarvittaviin toimiin, mukaan lukien tarvittaessa asianmukaisten viranomaisten ilmoittaminen.",
    accessShareContent3: "Kun sovellettava laki niin vaatii.",
    userDataRequests:
      "- Käyttäjätietojen pyynnöt. Käytäntömme on olla vastaamatta viranomaisten käyttäjätietoja koskeviin pyyntöihin, ellei laillinen prosessi tai rajoitetut olosuhteet vaadi meitä jakamaan tietoja, meidän on noudatettava niitä, jos Yhdysvaltain lainvalvontaviranomaisilla on kuitenkin tarvittava määräys, rikosoikeudellinen haaste tai tuomioistuimen määräys, joka edellyttää meitä jakamaan tietoja, meidän on noudatettava niitä. Vastaavasti vastaamme Yhdysvaltojen ulkopuolisten viranomaisten pyyntöihin vain, jos Yhdysvaltain hallitus velvoittaa meitä siihen keskinäisen oikeusapusopimuksen tai -sopimuksen mukaisesti. Käytäntömme on ilmoittaa asianomaisille käyttäjille ennen tietojen jakamista, ellei meitä lain mukaan kielletä tekemästä niin, lukuun ottamatta joitakin hätätilanteita.",
    preservationRequests:
      "- Säilytyspyynnöt. Vastaavasti käytäntömme on noudattaa tietojen säilyttämistä koskevia pyyntöjä vain, jos Yhdysvaltain liittovaltion tallennettua viestintää koskeva laki, 18 USC:n pykälä 2703(f) tai asianmukaisesti tiedoksi annettu Yhdysvaltain haaste siviilioikeudellisissa asioissa sitä edellyttää. Emme jaa säilytettyjä tietoja, ellei laki sitä vaadi tai tuomioistuimen määräys sitä vaadi, josta emme päätä valittaa. Lisäksi, ellemme saa asianmukaista määräystä, oikeuden määräystä tai haastetta ennen vaaditun säilytysajan päättymistä, tuhoamme kaikki säilytetyt kopiot asiakastiedoista säilytysajan päättyessä.",
    taxAudit:
      "- Jos veroviranomainen tarkastaa meidät, meidän on ehkä jaettava laskutukseen liittyviä tietoja. Tässä tapauksessa jaamme vain välttämättömät tiedot, kuten laskutusosoitteet ja verovapautustiedot.",
    secureDataContent1: "Kaikki tiedot salataan",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "kun tiedot lähetetään palvelimiltamme selaimeesi.",
    deleteContentContent:
      "Jos poistat sisältöä, se muuttuu välittömästi käyttökelvottomaksi.",
    locationContent:
      "Tuotteitamme ja muita verkkosivustojamme hoidetaan Yhdysvalloissa. Jos olet Euroopan unionissa, Isossa-Britanniassa tai muualla Yhdysvaltojen ulkopuolella, huomaathan, että kaikki meille antamasi tiedot siirretään ja tallennetaan Yhdysvaltoihin. Käyttämällä verkkosivustojamme tai palveluitamme ja/tai antamalla meille henkilötietojasi suostut tähän siirtoon.",
    childrenPrivacyContent:
      "Palvelut eivät ole suunnattu lapsille, emmekä tietoisesti kerää alle 13-vuotiaiden lasten henkilötietoja. Jos olet alle 13-vuotias, älä lähetä mitään henkilötietoja Palveluiden kautta. Jos uskot, että lapsi on antanut meille henkilötietoja tämän Käytännön vastaisesti, ota meihin yhteyttä alla kuvatulla tavalla.",
    updatesContent:
      "Saatamme päivittää tätä käytäntöä tarvittaessa asiaankuuluvien määräysten noudattamiseksi ja uusien käytäntöjen huomioon ottamiseksi. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme päivämäärän tämän sivun yläreunassa.",
    contactUsContent1:
      "Jos sinulla on kysyttävää, kommentteja tai valituksia tietosuojakäytännöstämme, ole hyvä ja",
    contactUs: "ota meihin yhteyttä",
    contactUsContent2:
      "ja pyrimme käsittelemään valituksesi mahdollisimman pian."
  },
  termsOfService: {
    termsOfServiceTitle: "Palveluehdot",
    lastUpdated: "Viimeksi päivitetty: 21. syyskuuta 2022",
    thankYouMessage: "Kiitos, että käytät tuotteitamme!",
    companyReference:
      "Kun sanomme tässä asiakirjassa ”Yritys”, ”me”, ”meidän” tai ”meitä”, viittaamme Scribifyyn.",
    servicesDefinition:
      'Kun sanomme "Palvelut", tarkoitamme mitä tahansa Scribifyn luomaa ja ylläpitämää tuotetta, toimitettiinpa se sitten verkkoselaimessa, työpöytäsovelluksessa, mobiilisovelluksessa tai muussa muodossa.',
    termsUpdateNotice:
      "Saatamme päivittää näitä käyttöehtoja tulevaisuudessa. Tyypillisesti nämä muutokset ovat olleet joidenkin ehtojen selventämistä linkittämällä laajennettuun asiaankuuluvaan käytäntöön. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme tämän sivun yläreunassa olevan päivämäärän ja ryhdymme muihin asianmukaisiin toimiin ilmoittaaksemme siitä tilinhaltijoille.",
    acceptanceOfAgreementTitle: "1. Sopimuksen hyväksyminen",
    scribifyServicesTitle: "2. Scribifyn palvelut",
    accountTermsTitle: "3. Tilin ehdot",
    paymentRefundsTitle: "4. Maksaminen, hyvitykset ja sopimusmuutokset",
    cancellationTerminationTitle: "5. Peruutus ja irtisanominen",
    submissionsTitle: "6. Lähetykset",
    uptimeSecurityTitle: "7. Käyttöaika ja turvallisuus",
    siteManagementTitle: "8. Sivuston hallinta",
    copyrightContentTitle: "9. Tekijänoikeudet ja sisällön omistajuus",
    prohibitedActivitiesTitle: "10. Kielletyt toiminnot",
    featuresBugsTitle: "11. Ominaisuudet ja virheet",
    correctionsTitle: "12. KORJAUKSET",
    userDataTitle: "13. Käyttäjätiedot",
    privacyPolicyTitle: "14. Tietosuojakäytäntö",
    liabilityTitle: "15. Vastuu",
    miscellaneousTitle: "16. Sekalaiset",
    contactUsTitle: "17. Ota yhteyttä",
    acceptanceContent1:
      "Käyttämällä Palveluitamme ilmoitat hyväksyväsi tämän Sopimuksen, josta tulee sitova sopimus sinun ja Scribifyn välillä. Vakuutat, että olet laillisesti kykenevä hyväksymään nämä Ehdot ja vahvistat, että olet täysi-ikäinen solmimaan sitovan sopimuksen. Scribifyn hyväksyntä on nimenomaisesti ehdollinen sille, että hyväksyt kaikki tämän Sopimuksen ehdot.",
    acceptanceContent2:
      "Palveluita ei ole tarkoitettu alle 18-vuotiaille, eikä heidän tule käyttää niitä. Käyttämällä Palveluita vakuutat ja takaat, että täytät edellä mainitut kelpoisuusvaatimukset.",
    acceptanceContent3:
      'Termit "sinä", "sinun" ja "itse" sisältävät myös työntekijäsi, edustajasi, liikekumppanisi ja kaikki muut henkilöt, joille annat pääsyn Palveluihin Tilisi kautta (kuten alla on määritelty). Olet vastuussa siitä, että kaikki Palveluita tilisi kautta käyttävät henkilöt ovat tietoisia näistä Ehdoista ja noudattavat niitä.',
    acceptanceContent4:
      "Scribify pidättää oikeuden tarkistaa ja päivittää näitä ehtoja aika ajoin oman harkintansa mukaan. Kaikki muutokset tulevat voimaan välittömästi niiden julkaisemisen jälkeen. Jatkamalla Palveluiden käyttöä tarkistettujen ehtojen julkaisemisen jälkeen hyväksyt muutokset. Sinun odotetaan tarkistavan tämä sivu aika ajoin, jotta olet tietoinen mahdollisista muutoksista, sillä ne sitovat sinua.",
    servicesContent1:
      "Palvelumme mahdollistavat käyttäjien muuntaa äänikeskusteluja litteroiduksi tekstiksi, jota voidaan hakea, kääntää ja jakaa muiden kanssa.",
    servicesContent2:
      'Voit valita, käytätkö Palveluiden ilmaisversiota ("Ilmaiset palvelut") vai Palveluiden tilauspohjaista maksullista versiota, josta saatat joutua maksamaan maksuja ("Maksulliset palvelut").',
    servicesContent3:
      "Tarjoamme Palvelut käyttöösi. Olet vastuussa kaikkien tarvittavien järjestelyjen tekemisestä Palveluiden käyttöä varten.",
    accountTerms1:
      "- Olet vastuussa tilisi turvallisuuden ylläpitämisestä. Yhtiö ei ole eikä tule olemaan vastuussa mistään menetyksistä tai vahingoista, jotka johtuvat tämän turvallisuusvelvoitteen noudattamatta jättämisestä.",
    accountTerms2:
      "- Et saa käyttää Palveluita mihinkään laittomaan, epäeettiseen tai moraalittomaan tarkoitukseen.",
    accountTerms3:
      "- Olet vastuussa kaikesta tililläsi julkaistusta sisällöstä ja toiminnasta. Tämä sisältää sisällön, jonka ovat julkaisseet muut, joilla joko: (a) on pääsy kirjautumistietoihisi; tai (b) on omat kirjautumistunnuksensa tilillesi.",
    accountTerms4:
      '- Sinun on oltava ihminen. "Botien" tai muiden automatisoitujen menetelmien avulla rekisteröidyt tilit eivät ole sallittuja.',
    paymentContent1:
      "- Maksullisten Palveluiden, jotka tarjoavat ilmaisen kokeilujakson, kokeilujakson kesto selitetään rekisteröitymisen yhteydessä. Kokeilujakson jälkeen sinun on maksettava etukäteen voidaksesi jatkaa Palvelun käyttöä. Jos et maksa, nämä palvelut päättyvät.",
    paymentContent2:
      "- Jos päivität ilmaisesta tilauksesta maksulliseen tilaukseen, veloitamme korttiasi välittömästi ja laskutusjaksosi alkaa päivityspäivänä.",
    paymentContent3:
      "- Kaikki maksut eivät sisällä veroviranomaisten määräämiä veroja, maksuja tai tulleja. Tarvittaessa keräämme kyseiset verot veroviranomaisen puolesta ja tilitämme ne veroviranomaisille. Muussa tapauksessa olet vastuussa kaikkien verojen, maksujen tai tullien maksamisesta.",
    paymentContent4:
      "- Kaikki ostokset ovat hyvittämättömiä. Voit peruuttaa minkä tahansa maksullisen palvelun milloin tahansa kirjautumalla tilillesi. Maksullisten tilausten peruutus tulee voimaan kuluvan maksetun kauden lopussa, ellei toisin mainita.",
    cancellationContent1:
      "- Jos peruutat Palvelun ennen maksetun ajan päättymistä, peruutuksesi tulee voimaan välittömästi, eikä sinulta veloiteta enää mitään. Emme automaattisesti suhteuta käyttämätöntä aikaa viimeisimmällä laskutusjaksolla.",
    cancellationContent2:
      "- Meillä on oikeus keskeyttää tai lopettaa tilisi ja evätä kaikki nykyinen tai tuleva Palveluidemme käyttö mistä tahansa syystä milloin tahansa. Keskeyttäminen tarkoittaa, että et voi käyttää tiliäsi tai sen sisältöä. Irtisanominen johtaa lisäksi tilisi tai tilillesi pääsyn poistamiseen sekä kaiken tilisi sisällön menettämiseen ja luovuttamiseen. Pidätämme myös oikeuden evätä Palveluiden käytön keneltä tahansa mistä tahansa syystä milloin tahansa. Meillä on tämä lauseke, koska tilastollisesti katsottuna sadoista tuhansista Palveluidemme tileistä ainakin yksi tekee jotain rikollista.",
    cancellationContent3:
      "- Yhtiön työntekijään tai toimihenkilöön kohdistuva suullinen, fyysinen, kirjallinen tai muu väärinkäyttö (mukaan lukien väärinkäytön tai koston uhkaaminen) voi johtaa tilin välittömään sulkemiseen.",
    submissionsContent:
      'Hyväksyt ja hyväksyt, että kaikki meille toimittamasi kysymykset, kommentit, ehdotukset, ideat, palautteet tai muut Sivustoa koskevat tiedot ("Lähetykset") ovat ei-luottamuksellisia ja niistä tulee yksinomaista omaisuuttamme. Meillä on yksinoikeudet, mukaan lukien kaikki immateriaalioikeudet, ja meillä on oikeus käyttää ja levittää näitä Lähetyksiä rajoituksetta mihin tahansa lailliseen tarkoitukseen, kaupalliseen tai muuhun, ilman sinulle annettavaa tunnustusta tai korvausta. Luovut täten kaikista moraalisista oikeuksista tällaisiin Lähetyksiin ja takaat täten, että kaikki tällaiset Lähetykset ovat alkuperäisiä sinulle tai että sinulla on oikeus lähettää tällaisia Lähetyksiä. Hyväksyt, ettei meitä vastaan voi nostaa kannetta mistään väitetystä tai todellisesta Lähetystesi omistusoikeuden loukkauksesta tai väärinkäytöstä.',
    uptimeContent1:
      '- Palveluiden käyttö on yksinomaan omalla vastuullasi. Tarjoamme näitä Palveluita "sellaisenaan" ja "saatavuuden mukaan". Emme tarjoa palvelutasosopimuksia useimmille Palveluillemme, mutta otamme sovellustemme käyttöajan vakavasti.',
    uptimeContent2:
      "- Pidätämme oikeuden tilapäisesti poistaa tilisi käytöstä, jos käyttösi ylittää merkittävästi muiden Palveluiden asiakkaiden tyypillisen käytön. Otamme luonnollisesti sinuun yhteyttä ennen toimenpiteisiin ryhtymistä, paitsi harvinaisissa tapauksissa, joissa käyttötaso voi vaikuttaa negatiivisesti Palvelun suorituskykyyn muille asiakkaille.",
    uptimeContent3:
      "- Käytämme monia toimenpiteitä tietojesi suojaamiseksi ja turvaamiseksi varmuuskopioiden, redundanssien ja salauksen avulla. Käytämme salausta tiedonsiirrossa julkisessa internetissä.",
    uptimeContent4:
      "- Käytämme kolmannen osapuolen toimittajia ja hosting-kumppaneita tarjoamaan Palveluiden suorittamiseen tarvittavat laitteistot, ohjelmistot, verkot, tallennustilan ja niihin liittyvän teknologian.",
    siteManagementContent:
      "Pidätämme oikeuden, mutta emme velvollisuutta, seuraavaa: (1) valvoa Sivustoa näiden Käyttöehtojen rikkomusten varalta; (2) ryhtyä asianmukaisiin oikeustoimiin ketä tahansa vastaan, joka oman harkintamme mukaan rikkoo lakia tai näitä Käyttöehtoja, mukaan lukien rajoituksetta tällaisen käyttäjän ilmoittaminen lainvalvontaviranomaisille; (3) oman harkintamme mukaan ja rajoituksetta evätä, rajoittaa pääsyä, rajoittaa saatavuutta tai poistaa käytöstä (siinä määrin kuin se on teknisesti mahdollista) minkä tahansa Muodoksesi tai minkä tahansa sen osan; (4) oman harkintamme mukaan ja rajoituksetta, ilman erillistä ilmoitusta tai vastuuta poistaa Sivustolta tai muuten poistaa käytöstä kaikki tiedostot ja sisällöt, jotka ovat kooltaan liian suuria tai jotka millään tavalla rasittavat järjestelmiämme; ja (5) muutoin hallita Sivustoa tavalla, joka on suunniteltu suojaamaan oikeuksiamme ja omaisuuttamme ja helpottamaan Sivuston asianmukaista toimintaa.",
    copyrightContent1:
      "- Kaiken Palveluihin lähetetyn sisällön on oltava Yhdysvaltain tekijänoikeuslain mukaista.",
    copyrightContent2:
      "- Emme vaadi immateriaalioikeuksia Palveluihin toimittamaanne materiaaliin. Kaikki ladatut materiaalit pysyvät sinun omaisuutenasi.",
    copyrightContent3:
      "- Emme esitarkista sisältöä, mutta pidätämme oikeuden (mutta emme velvollisuutta) oman harkintamme mukaan kieltäytyä tai poistaa mitä tahansa Palvelun kautta saatavilla olevaa sisältöä.",
    copyrightContent4:
      "- Palveluiden nimet, ulkoasu ja käyttökokemus ovat Yhtiön tekijänoikeuksin suojattuja. Kaikki oikeudet pidätetään. Et saa kopioida, kopioida tai käyttää uudelleen mitään osaa HTML-, CSS-, JavaScript- tai visuaalisista suunnitteluelementeistä ilman Yhtiön nimenomaista kirjallista lupaa. Sinun on pyydettävä lupaa käyttää Yhtiön logoa tai Palvelun logoja mainostarkoituksiin. Ole hyvä",
    emailUs: "Lähetä meille sähköpostia",
    copyrightContent5:
      "pyyntöjä logojen käyttöön. Pidätämme oikeuden peruuttaa tämän luvan, jos rikot näitä käyttöehtoja.",
    copyrightContent6:
      "- Sitoudut olemaan kopioimatta, jäljentämättä, myymättä, jälleenmyymättä tai hyödyntämättä mitään osaa Palveluista, Palveluiden käytöstä tai Palveluihin pääsystä ilman Yhtiön nimenomaista kirjallista lupaa.",
    copyrightContent7:
      "- Et saa muokata toista verkkosivustoa siten, että se antaa virheellisen kuvan siitä, että se liittyy Palveluihin tai Yhtiöön.",
    copyrightContent8:
      "- Kunnioitamme muiden immateriaalioikeuksia. Jos uskot, että Sivustolla tai sen kautta saatavilla oleva materiaali loukkaa omistamiasi tai hallinnoimiasi tekijänoikeuksia, ole hyvä ja ota välittömästi yhteyttä",
    contactUs: "ota meihin yhteyttä",
    copyrightContent9:
      "Ilmoituksestasi lähetetään kopio henkilölle, joka julkaisi tai tallensi Ilmoituksessa mainitun materiaalin. Huomaa, että sovellettavan lain nojalla sinut voidaan pitää vahingonkorvausvastuussa, jos annat Ilmoituksessa olennaisesti vääriä tietoja. Jos et siis ole varma, loukkaako Sivustolla oleva tai Sivustolta linkitetty materiaali tekijänoikeuksiasi, sinun kannattaa ensin ottaa yhteyttä asianajajaan.",
    prohibitedActivitiesIntro:
      "Et saa käyttää Sivustoa mihinkään muuhun tarkoitukseen kuin siihen, johon Sivusto on käytettävissä. Sivustoa ei saa käyttää mihinkään kaupalliseen toimintaan, paitsi jos se on nimenomaisesti hyväksyttyä tai hyväksyttyä.",
    prohibitedActivitiesUserAgreement: "Sivuston käyttäjänä sitoudut olemaan:",
    prohibitedActivity1:
      "- Hae systemaattisesti tietoja tai muuta sisältöä sivustolta luodaksesi tai kootaksesi, suoraan tai epäsuorasti, kokoelman, koosteen, tietokannan tai hakemiston ilman kirjallista lupaamme.",
    prohibitedActivity2:
      "- Huijata, petostaa tai johtaa harhaan meitä ja muita käyttäjiä, erityisesti yrittämällä saada selville arkaluonteisia tilitietoja, kuten käyttäjien salasanoja.",
    prohibitedActivity3:
      "- Kiertää, poistaa käytöstä tai muulla tavoin häiritä Sivuston turvallisuuteen liittyviä ominaisuuksia, mukaan lukien ominaisuuksia, jotka estävät tai rajoittavat Sisällön käyttöä tai kopiointia tai asettavat rajoituksia Sivuston ja/tai sen sisältämän Sisällön käytölle.",
    prohibitedActivity4:
      "- Halventaa, tahrata tai muuten vahingoittaa mielestämme meitä ja/tai Sivustoa.",
    prohibitedActivity5:
      "- Käyttää Sivustolta saatuja tietoja toisen henkilön häirintään, hyväksikäyttöön tai vahingoittamiseen.",
    prohibitedActivity6:
      "- Käytä tukipalveluitamme väärin tai lähetä vääriä ilmoituksia väärinkäytöksistä tai väärinkäytöksistä.",
    prohibitedActivity7:
      "- Käytä Sivustoa tavalla, joka on ristiriidassa sovellettavien lakien tai määräysten kanssa.",
    prohibitedActivity8:
      "- Osallistu sivuston luvattomaan kehystämiseen tai linkittämiseen.",
    prohibitedActivity9:
      "- Lataa tai lähetä (tai yritä ladata tai lähettää) viruksia, troijalaisia tai muuta materiaalia, mukaan lukien liiallinen isojen kirjainten käyttö ja roskapostitus (jatkuva toistuvan tekstin lähettäminen), joka häiritsee kenen tahansa osapuolen Sivuston keskeytymätöntä käyttöä ja nautintoa tai muokkaa, heikentää, keskeyttää, muuttaa tai häiritsee Sivuston käyttöä, ominaisuuksia, toimintoja, toimintaa tai ylläpitoa.",
    prohibitedActivity10:
      "- Käytä järjestelmää millään tavalla automaattisesti, kuten käytä komentosarjoja kommenttien tai viestien lähettämiseen tai käytä tiedonlouhintaa, robotteja tai vastaavia tiedonkeruu- ja poimintatyökaluja.",
    prohibitedActivity11:
      "- Poista tekijänoikeus- tai muut omistusoikeusilmoitukset mistä tahansa sisällöstä.",
    prohibitedActivity12:
      "- Yritä esiintyä toisena käyttäjänä tai henkilönä tai käyttää toisen käyttäjän käyttäjätunnusta.",
    prohibitedActivity13:
      '- Lataa tai lähetä (tai yritä ladata tai lähettää) mitään materiaalia, joka toimii passiivisena tai aktiivisena tiedonkeruu- tai -lähetysmekanismina, mukaan lukien rajoituksetta selkeät grafiikanvaihtomuodot ("gif"), 1×1-pikselit, verkkovirheet, evästeet tai muut vastaavat laitteet (joita joskus kutsutaan "vakoiluohjelmiksi" tai "passiivisiksi keräysmekanismeiksi" tai "pcms").',
    prohibitedActivity14:
      "- Häiritse, keskeytä tai kuormita kohtuuttomasti Sivustoa tai Sivustoon yhdistettyjä verkkoja tai palveluita.",
    prohibitedActivity15:
      "- Häiritse, ärsytä, pelottele tai uhkaile ketään työntekijöitämme tai edustajiamme, jotka osallistuvat Sivuston minkä tahansa osan tarjoamiseen sinulle.",
    prohibitedActivity16:
      "- Yritä ohittaa Sivuston toimenpiteitä, joiden tarkoituksena on estää tai rajoittaa pääsyä Sivustolle tai sen osaan.",
    prohibitedActivity17:
      "- Sivuston ohjelmiston, mukaan lukien, mutta ei rajoittuen, Flashin, PHP:n, HTML:n, JavaScriptin tai muun koodin, kopioiminen tai muokkaaminen.",
    prohibitedActivity18:
      "- Ellei sovellettava laki sitä salli, tulkita, purkaa, hajottaa tai takaisinmallintaa mitään Sivustoon kuuluvaa tai sitä millään tavalla muodostavaa ohjelmistoa.",
    prohibitedActivity19:
      "- Käytä, käynnistä, kehitä tai jaa mitään automatisoitua järjestelmää, mukaan lukien rajoituksetta kaikki hakurobotit, huijausohjelmat, kaavintaohjelmat tai offline-lukijat, jotka käyttävät Sivustoa, tai käytä tai käynnistä luvattomia komentosarjoja tai muita ohjelmistoja, lukuun ottamatta sitä, mikä voi olla seurausta tavanomaisesta hakukoneen tai internetselaimen käytöstä.",
    prohibitedActivity20:
      "- Käytä ostoagenttia tai ostoedustajaa tehdäksesi ostoksia Sivustolla.",
    prohibitedActivity21:
      "- Sivuston luvaton käyttö, mukaan lukien käyttäjien käyttäjätunnusten ja/tai sähköpostiosoitteiden kerääminen sähköisesti tai muilla keinoin ei-toivottujen sähköpostien lähettämistä varten tai käyttäjätilien luominen automaattisesti tai väärien perusteiden avulla.",
    prohibitedActivity22:
      "- Käyttää Sivustoa osana mitään pyrkimystä kilpailla kanssamme tai muutoin käyttää Sivustoa ja/tai Sisältöä mihinkään tuloja tuottavaan tarkoitukseen tai kaupalliseen toimintaan.",
    prohibitedActivity23:
      "- Käyttää Sivustoa mainostaakseen tai tarjotakseen myytäväksi tavaroita ja palveluita.",
    prohibitedActivity24: "- Myydä tai muuten siirtää profiilisi.",
    featuresContent1:
      "Suunnittelemme Palvelumme huolella omien kokemustemme ja asiakkaidemme kokemusten pohjalta, jotka jakavat aikaansa ja palautettaan. Ei kuitenkaan ole olemassa sellaista asiaa kuin palvelu, joka miellyttäisi kaikkia. Emme takaa, että Palvelumme täyttävät erityisvaatimuksesi tai odotuksesi.",
    featuresContent2:
      "Testaamme myös kaikki ominaisuutemme ennen niiden julkaisemista. Kuten minkä tahansa ohjelmiston kanssa, Palveluissamme on väistämättä joitakin virheitä. Seuraamme meille ilmoitettuja virheitä ja työskentelemme niiden parissa, erityisesti turvallisuuteen tai yksityisyyteen liittyvien virheiden osalta. Kaikkia ilmoitettuja virheitä ei korjata, emmekä takaa täysin virheettömiä Palveluita.",
    correctionsContent1:
      "Sivustolla saattaa olla tietoja, jotka sisältävät typografisia virheitä, epätarkkuuksia tai puutteita, mukaan lukien kuvaukset, hinnat, saatavuus ja monia muita tietoja. Pidätämme oikeuden korjata virheitä, epätarkkuuksia tai puutteita sekä muuttaa tai päivittää Sivuston tietoja milloin tahansa ilman ennakkoilmoitusta.",
    correctionsContent2:
      "Emme voi taata, että Sivusto on käytettävissä kaikkina aikoina. Saatamme kohdata laitteisto-, ohjelmisto- tai muita ongelmia tai joutua suorittamaan Sivustoon liittyviä huoltotoimenpiteitä, jotka johtavat keskeytyksiin, viivästyksiin tai virheisiin. Pidätämme oikeuden muuttaa, tarkistaa, päivittää, keskeyttää, lopettaa tai muuten muokata Sivustoa milloin tahansa ja mistä tahansa syystä ilman erillistä ilmoitusta sinulle. Hyväksyt, ettemme ole millään tavalla vastuussa mistään menetyksestä, vahingosta tai haitasta, joka aiheutuu siitä, että et voi käyttää Sivustoa sen käyttökatkoksen tai lopettamisen aikana. Mitään näissä Käyttöehdoissa ei voida tulkita siten, että se velvoittaisi meitä ylläpitämään ja tukemaan Sivustoa tai toimittamaan siihen liittyviä korjauksia, päivityksiä tai julkaisuja.",
    userDataContent:
      "Säilytämme tiettyjä tietoja, jotka lähetät Sivustolle, Sivuston suorituskyvyn hallintaa varten, sekä tietoja, jotka liittyvät Sivuston käyttöön. Vaikka teemme säännöllisiä varmuuskopioita tiedoista, olet yksin vastuussa kaikista lähettämistäsi tiedoista tai tiedoista, jotka liittyvät mihin tahansa Sivuston avulla suorittamaasi toimintaan. Hyväksyt, ettemme ole vastuussa sinulle tällaisten tietojen katoamisesta tai vioittumisesta, ja luovut täten oikeudesta nostaa meitä vastaan ​​kanne, joka johtuu tällaisten tietojen katoamisesta tai vioittumisesta.",
    privacyPolicyContent1:
      "Välitämme tietosuojasta ja -turvallisuudesta. Tutustu valikoimaamme",
    privacyPolicy: "Tietosuojakäytäntö",
    privacyPolicyContent2:
      "Käyttämällä Sivustoa hyväksyt Tietosuojakäytäntömme, joka on sisällytetty näihin Käyttöehtoihin. Huomaa, että Sivustoa isännöidään Yhdysvalloissa. Jos käytät Sivustoa mistä tahansa muualta maailmasta, jonka lait tai muut vaatimukset henkilötietojen keräämisestä, käytöstä tai luovuttamisesta poikkeavat Yhdysvaltojen sovellettavista laeista, jatkamalla Sivuston käyttöä siirrät tietosi Yhdysvaltoihin ja suostut tietojesi siirtämiseen ja käsittelyyn Yhdysvalloissa.",
    liabilityIntro:
      "Mainitsemme vastuun kaikissa näissä ehdoissa, mutta yhteen osioon kootaksemme kaiken:",
    liabilityContent:
      "Ymmärrät ja hyväksyt nimenomaisesti, että Yhtiö ei ole lain tai oikeudenmukaisuuden nojalla vastuussa sinulle tai kolmannelle osapuolelle mistään suorista, epäsuorista, satunnaisista, menetetyistä voitoista, erityisistä, seuraamuksellisista, rankaisevista tai esimerkinomaisista vahingoista, mukaan lukien, mutta ei rajoittuen, vahingot voittojen, liikearvon, käytön, tietojen tai muiden aineettomien tappioiden menetyksestä (vaikka Yhtiölle olisi ilmoitettu tällaisten vahinkojen mahdollisuudesta), jotka johtuvat: (1) Palveluiden käytöstä tai käytön estymisestä; (2) sisällön ja materiaalien virheistä, erehdyksistä tai epätarkkuuksista; (3) minkä tahansa luonteen omaisuusvahingoista tai henkilövahingoista, jotka johtuvat sivuston käytöstä; (4) korvaavien tavaroiden ja palveluiden hankintakustannuksista, jotka johtuvat Palveluiden kautta ostetuista tai hankituista tavaroista, tiedoista, tiedoista tai palveluista tai vastaanotetuista viesteistä tai tehdyistä tapahtumista; (5) luvattomasta pääsystä suojattuihin palvelimiimme tai niiden ja/tai kaikkien niillä tallennettujen henkilötietojen ja/tai taloudellisten tietojen käytöstä; (6) sivustolle tai sivustolta tapahtuvan tiedonsiirron keskeytymisestä tai lopettamisesta; (7) kaikki virheet, virukset, troijalaiset tai vastaavat, joita kolmas osapuoli voi lähettää sivustolle tai sen kautta, ja/tai; (8) kaikki virheet tai puutteet sisällössä ja materiaaleissa tai minkäänlaiset menetykset tai vahingot, jotka johtuvat sivuston kautta julkaistun, lähetetyn tai muuten saatavilla olevan sisällön käytöstä; (9) kolmannen osapuolen lausunnot tai toiminta palvelussa; (10) tai mikä tahansa muu näihin käyttöehtoihin tai palveluihin liittyvä asia, olipa se sitten sopimusrikkomus, oikeudenloukkaus (mukaan lukien aktiivinen tai passiivinen huolimattomuus) tai mikä tahansa muu vastuun peruste.",
    miscellaneousContent:
      "Nämä käyttöehdot ja kaikki Sivustolle tai Sivustoon julkaisemamme käytännöt tai toimintasäännöt muodostavat koko sopimuksen ja yhteisymmärryksen sinun ja meidän välillämme. Se, että emme käytä tai pane täytäntöön mitään näiden käyttöehtojen oikeutta tai määräystä, ei tarkoita kyseisen oikeuden tai määräyksen luopumista. Näitä käyttöehtoja sovelletaan lain sallimassa laajuudessa. Voimme siirtää osan tai kaikki oikeutemme ja velvollisuutemme muille milloin tahansa. Emme ole vastuussa mistään menetyksestä, vahingosta, viivästyksestä tai toiminnan laiminlyönnistä, joka johtuu kohtuullisen hallintamme ulkopuolella olevasta syystä. Jos jokin näiden käyttöehtojen määräys tai sen osa katsotaan laittomaksi, mitättömäksi tai täytäntöönpanokelvottomaksi, kyseinen määräys tai sen osa katsotaan erotettavaksi näistä käyttöehdoista, eikä se vaikuta jäljellä olevien määräysten pätevyyteen ja täytäntöönpanokelpoisuuteen. Sinun ja meidän välillemme ei synny yhteisyritystä, kumppanuutta, työsuhdetta tai edustussuhdetta näiden käyttöehtojen tai Sivuston käytön seurauksena. Hyväksyt, että näitä käyttöehtoja ei tulkita meitä vastaan sillä perusteella, että olemme laatineet ne. Luovut täten kaikista puolustuksista, jotka sinulla saattavat perustua näiden käyttöehtojen sähköiseen muotoon ja siihen, että osapuolet eivät ole allekirjoittaneet näitä käyttöehtoja.",
    contactUsContent1:
      "Jos sinulla on kysyttävää jostakin käyttöehdoista, ole hyvä ja",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Ominaisuudet",
    UnlimitedTranscription: "Rajaton Tekstitys",
    BulkUpload: "Massa-Lataus",
    Accuracy: "96% Tarkkuus",
    Pricing: "Hinnoittelu",
    UseCases: "Käyttötapaukset",
    AllUseCases: "Kaikki Käyttötapaukset",
    Podcasters: "Podcastaajat",
    Journalists: "Toimittajat",
    ContentCreators: "Sisällöntuottajat",
    Researchers: "Tutkijat",
    BusinessTeams: "Liiketiimit",
    Educators: "Opettajat",
    Resources: "Resurssit",
    YouTubetoMP4: "YouTube MP4-muotoon",
    StartFreeTrial: "Ilmainen kokeilu"
  },
  Footer: {
    des: "Maailman ensimmäinen todella rajaton AI-tekstitypalvelu. Ei rajoituksia, ei kattoja, vain vapaus luoda.",
    Features: "Ominaisuudet",
    UseCases: "Käyttötapaukset",
    Company: "Yritys",
    featureMenus: ["Rajaton Tekstitys", "Massa-Lataus", "96% Tarkkuus"],
    useCaseMenus: [
          "Kaikki Käyttötapaukset",
          "Podcastaajat",
          "Toimittajat",
          "Sisällöntuottajat",
          "Tutkijat",
          "Liiketiimit",
          "Opettajat"
        ],
    companyMenus: [
          "Tietoja",
          "Hinnoittelu",
          "Tietosuoja",
          "Käyttöehdot"
        ]
  },
  Index: {
    Hero: {
      badge: 'Ei enää "kutistumista" - Todella rajaton',
      h1: "Lopeta rajojen maksaminen:",
      gradient: "Todella rajaton tekstitys tekoälyllä",
      subtitle: "Tekoälymme tekstittää videot ja muuntaa äänen tekstiksi, käsitellen 50 tiedostoa kerralla ilman kuukausirajoja. Tekstitys, joka skaalautuu kanssasi.",
      FreeTrial: "Ilmainen kokeilu - Ei luottokorttia tarvita",
      HowWorks: "Katso miten se toimii",
      Unlimited: "Rajaton tiedostojen lähetys",
      NoCap: "Ei kuukausittaisia minuuttirajoja",
      Hour: "10 tunnin tiedostot tuettu",
      ExploreUseCases: "Tutki käyttötapoja"
    },
    Stats: {
      monthlyMinutes: "Kuukausittaiset minuutit",
      fileUploads: "Tiedostojen lähetykset",
      batchProcessing: "Eräkäsittely",
      maxFileLength: "Enimmäistiedoston pituus"
    },
    FeaturesGrid: {
      try_now: "Kokeile nyt",
      no_signup: "Ei rekisteröitymistä vaadita",
      experience_unltd: "Koe todella rajaton tekstitys",
      upload_50: "Lähetä jopa 50 tiedostoa kerralla, tästä.",
      no_limits: "Edistynyt",
      no_surprises: "Tekoälytekstitys",
      transparency: "Ei enää piilotettuja rajoja, ei enää yllätyksiä - Kun toiset hiljaa vähentävät minuuttejasi tai piilottavat rajat pienellä präntillä, uskomme radikaaliin läpinäkyvyyteen",
      feat_unltd: "Todella rajaton",
      feat_unltd_desc: 'Ei "kohtuullisen käytön" sääntöjä ehtojen joukossa. Ei tallennusrajoja "rajattomana" naamioituina. Lähetä koko arkistosi, tekstitä kaikki äänityksesi tarpeisiin. Me tarkoitamme sitä.',
      feat_bulk: "Massalähetyksen vapaus",
      feat_bulk_desc: 'Kyllästynyt "3 elinikäiseen tuontiin" tai "10 tiedostoon kuukaudessa"? Lähetä 50 tiedostoa kerralla, niin usein kuin haluat. Täydellinen käsittelemään jääneitä töitä.',
      feat_batch: "Eräkäsittely",
      feat_batch_desc: "Käsittele koko podcast-kausi yhdessä yössä. Lähetä 50 haastattelua kerralla. Anna tekoälymme työskennellä kun nukut. Herää valmiiden tekstitysten ääreen.",
      feat_accuracy: "96 % tarkkuus",
      feat_accuracy_desc: "Alan kärjessä oleva tekoälymme tekstittää ääntä älykkäällä välimerkinnällä, puhujien erottelulla jopa 20 puhujalle, ja käsittelee aksentit ja ammattisanat moitteettomasti.",
      feat_langs: "100+ kieltä",
      feat_langs_desc: "Tekstitä video ja ääni 100+ kielellä, käännä 249+ kielelle. Ei lisäkustannuksia eri kielistä. Maailmanlaajuista sisältöä, yksi yksinkertainen hinta.",
      feat_pro: "Ammattimaiset ominaisuudet",
      feat_pro_desc: "Sanatason aikaleimat tarkkaan ääni-/videosijaintiin, tarkka puhujien tunnistus nopeiden keskusteluvaihtojen aikana, ja täydellisesti muotoiltu teksti kappaleineen, lauseineen ja välimerkkeineen helpompaa lukemista varten.",
        features: "Ominaisuudet"
    },
    UseCases: {
      built_for: "Massa",
      "heavy_users": "Ääni- ja videotekstitys",
      "join_users": 'Rakennettu sinun kaltaisillesi raskaalle käyttäjälle - Liity YouTubettajien, sisällöntuottajien ja podcastaajien joukkoon, jotka ovat siirtyneet "kutistumispalveluista"',
      "podcasters": {
        "title": "Podcastaajat",
        "des": "Lähetä koko vanha katalogisi. Luo ohjelmamuistiinpanot jaksokohtaisesti. Ei enää valintoja, mitkä jaksot tekstittää."
      },
      "content_creators": {
        "title": "Sisällöntuottajat",
        "des": "Muuta videokokoelmasi haettavaksi tekstiksi käyttämällä palveluamme videoiden automaattiseen tekstittämiseen. Luo tekstitykset kaikelle. Ei minuuttien laskemista, vain luomista."
      },
      "journalists": {
        "title": "Toimittajat",
        "des": 'Lähetä kaikki haastattelusi kerralla. Ei enää "10 tiedostoa kuukaudessa" -esteitä kiireellisten aikataulujen aikana. Käsittele kaikki.'
      },
      researchers: {
        title: "Tutkijat",
        des: "Tekstitä tuntien mittaiset kohderyhmät ja haastattelut. Lähetä koko tutkimuksesi kerralla. Saat tarkan puhujien tunnistuksen."
      },
      business_teams: {
        title: "Liiketiimit",
        des: "Äänitä jokainen puhelu ilman rajoista huolta. Hanki tekoälyanalyysi kaikista keskusteluista, ei vain valituista."
      },
      educators: {
        title: "Opettajat",
        des: "Tekstitä kokonaiset luentosarjat. Tee kaikesta sisällöstä saatavilla. Ei valintoja kurssien välillä minuuttirajojen vuoksi."
      }
    },
    Testimonials: {
      title: "Rakastettu",
      highlighted_users: "50 000+ käyttäjää",
      subtitle: "Katso miksi ammattilaiset valitsevat NeverCapin rajoitettujen vaihtoehtojen sijaan",
      Mike: {
        "text": "Voi hitsi, tämä oikeasti toimii! Tehnyt podcastia 3 vuotta ja kirjoittanut kaiken itse tyhmänä. Latasin 6 jaksoa kerralla ja se erotti minut ja juontajaparini täydellisesti. Kahvilajakso, joka mielestäni oli pilalla? Kirkas kuin kristalli. En enää ikinä kirjoita näitä itse.",
        "author": "Mike Rodriguez",
        "role": "Podcastin isäntä"
      },
      Sarah: {
        "text": "Opetan verkossa ja tarvitsin tekstityksiä videoihini. Kokeilin 3 muuta työkalua, joilla oli outoja rajoituksia tai ne veivät ikuisuuden. Tämä vain... toimii? Lataisin espanjankielisen luentoni, sain täydelliset tekstitykset noin 2 minuutissa. Kuulovammaiset oppilaani ovat niin iloisia. Olisinpa löytänyt tämän aikaisemmin!",
        "author": "Sarah Chen",
        "role": "Verkkopääluokka"
      },
      Jessica: {
        "text": "Käyttänyt tätä haastatteluihini ja uskomaton kuinka tarkka se on. 2 tunnin haastattelu rikkinäisessä englannissa + espanjassa ja se sai kaiken oikein, jopa aikaleimat. Maksoin harjoittelijalleni 200$/kk vain tekstityksestä. Tämä säästää minua kirjaimellisesti rahaa joka kuukausi.",
        "author": "Jessica Park",
        "role": "Freelance-toimittaja"
      }
    },
    PricingPreview: {
      "title": "Läpinäkyvä hinnoittelu",
      "highlighted_text": "Ei piilotettuja rajoituksia",
      "subtitle": "Valitse suunnitelma. Ei asteriskeja, ei pienellä präntättyä tekstiä, ei yllätyksiä"
    },
    FAQSection: {
      "title": "Usein Kysytyt",
      "titleHighlight": "Kysymykset",
      "questions": [
            {
              "q": "Tekstitys tekoälyllä",
              "question": "Mikä on tekoälytekstitys ja miten se toimii?",
              "answer": "Tekoälytekstitys on äänen automaattinen muuntaminen tekstiksi kehittyneen tekoälyn avulla. NeverCapissa lataat tiedostosi ja tekoälymme tekstittää sisällön jopa 96% tarkkuudella. Palvelumme on suunniteltu tekstittämään videotiedostoja (kuten MP4, MOV) ja äänitiedostoja (kuten MP3, WAV) luettavaksi, muokattavaksi tekstiksi, mukaan lukien puhujien tunnisteet ja aikaleimat."
            },
            {
              "q": "unlimited_policy",
              "question": "Onko se todella rajoittamaton? Mikä on juju?",
              "answer": "Kyllä, se on todella rajoittamaton! Ei kuukausittaisia minuuttirajoja, ei ylitysmaksuja. Ainoat rajat ovat tekniset: yksittäiset tiedostot voivat olla jopa 10 tuntia pitkiä tai 5GB kokoisia, ja voit käsitellä 50 tiedostoa kerralla. Mutta voit ladata niin monta erää kuin haluat, koko kuukauden ajan."
            },
            {
              "q": "accuracy",
              "question": "Kuinka tarkka tekstitys on?",
              "answer": "Takaamme 96% tarkkuuden selkeälle äänelle. Tekoälymme on koulutettu miljoonien tuntien monipuolisella sisällöllä ja se käsittelee aksentteja, ammattisanastoa ja useita puhujia erityisen hyvin. Haastavalle äänelle älykkäät parannusominaisuutemme auttavat parantamaan tuloksia."
            },
            {
              "q": "languages",
              "question": "Mitä kieliä tuette?",
              "answer": "Tuemme tekstitystä yli 100 kielellä, mukaan lukien englanti, espanja, mandariinikiina, hindi, arabia, ranska ja monet muut. Lisäksi voit kääntää tekstityksesi 249 eri kielelle, mikä tekee siitä täydellisen globaalille sisällölle."
            },
            {
              "q": "speed",
              "question": "Kuinka nopea tekstitys on?",
              "answer": "Salamannopea! 1 tunnin äänitiedosto käsitellään yleensä alle 5 minuutissa. Eräkäsittelyllä voit ladata 50 tiedostoa samanaikaisesti ja antaa niiden käsitellä rinnakkain. Useimmat käyttäjät heräävät ja huomaavat koko kirjastonsa tekstitetyksi yön aikana."
            },
            {
              "q": "cancellation",
              "question": "Voinko peruuttaa milloin tahansa?",
              "answer": "Ehdottomasti! Ei sopimuksia, ei peruutusmaksuja. Voit päivittää, alentaa tai peruuttaa tilauksesi milloin tahansa hallintapaneelistasi. Jos peruutat, säilytät pääsyn laskutusjakson loppuun asti."
            },
            {
              "q": "security",
              "question": "Onko tietoni turvassa?",
              "answer": "Turvallisuutesi on prioriteettimme. Olemme SOC 2 -sertifioitu, käytämme 256-bittistä salauskaikille tiedoille emmekä koskaan käytä sisältöäsi malliemme kouluttamiseen. Voit poistaa tiedostosi milloin tahansa, ja poistamme ne automaattisesti 30 päivän jälkeen. GDPR- ja CCPA-yhteensopiva."
            },
            {
              "q": "export_formats",
              "question": "Mitä vientimuotoja on saatavilla?",
              "answer": "Lataa tekstityksesi haluamassasi muodossa: PDF, Word (DOCX), Excel, CSV, SRT-tekstitykset, pelkkä teksti (TXT) ja VTT-tekstitykset. Täydellinen mihin tahansa työnkulkuun."
            },
            {
              "q": "file_formats",
              "question": "Mitä ääni- ja videotiedostoja voin ladata?",
              "answer": "Tuemme lähes kaikkia ääni- ja videomuotoja, joihin törmäät: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV ja monet muut. Jos voit toistaa sen, voimme tekstittää sen."
            }
          ]
    },
    CTASection: {
      "title": "Valmis vapautumaan rajoituksista?",
      "subtitle": "Liity yli 50 000 ammattilaisen joukkoon, jotka ovat siirtyneet todella rajoittamattomaan tekstitykseen",
      "button": "Kokeile NeverCapia ilmaiseksi",
      "disclaimer": "Luottokorttia ei vaadita ilmaissuunnitelmaan • Päivitä milloin tahansa saadaksesi rajoittamattoman pääsyn"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ei enää "kutistumista"',
      heroTitleLine1: "Todella rajoittamaton",
      heroTitleLine2: "Älykäs tekstitys",
      heroSubtitle: "Kun Trint rajoittaa sinua 50 tuntiin ja Otter 10 tiedostoon kuukaudessa, me toimitaamme mitä lupaamme: rajaton tekstitys ilman piilorajoituksia.",
      primaryCta: "Ilmainen kokeilu - Ei luottokorttia",
      secondaryCta: "Katso totuus",
      comparisonBadLabel: "Mitä muut tekevät",
      comparisonBadTitle: "Piilorajoituksia kaikkialla",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Rajaton" = 50 tuntia/kk katto',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 tuontia elinaikana (ilmainen), 10/kk (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800 minuutin tallennusraja",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "Enintään 30 tuntia/kk",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Piilotettu käyttöehdoissa",
      comparisonGoodLabel: "Mitä me teemme",
      comparisonGoodTitle: "Todella rajaton",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Ei kuukausittaisia minuuttirajoja",
      comparisonGoodItem1Text: "koskaan",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Rajattomat tiedostolataukset",
      comparisonGoodItem2Text: "aina",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Ei tallennusrajoja",
      comparisonGoodItem3Text: "lainkaan",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 tiedoston erälataus",
      comparisonGoodItem4Text: "milloin tahansa",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Läpinäkyvä käytäntö",
      comparisonGoodItem5Text: "etukäteen",
      feature1Label: "Ei rajoja",
      feature1TitlePart1: "Tekstitätkö 1000 tuntia?",
      feature1TitlePart2: "Sama hinta.",
      feature1Description: "Lopeta minuuttien laskeminen. Lopeta rajojen tarkkailu. Tekstitätkö 10 tuntia vai 10 000 tuntia kuukaudessa - maksat saman kiinteän hinnan. Ei ylityskustannuksia. Ei yllätyslaskuja.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Ei "kohtuullinen käyttö" -käytäntö temppuja',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ei hidastelua X tunnin jälkeen",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ei kuukauden lopun ahdistusta",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Kuukausitunnit",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Ylimääräiset maksut",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Lataa milloin tahansa",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Läpinäkyvä",
      feature2Label: "Massavapaus",
      feature2TitlePart1: "Lataa",
      feature2TitlePart2: "Koko arkistosi",
      feature2Description: "Otter tarjoaa 3 elinikäistä tuontia ilmaisversiossa, 10 kuukaudessa Pro-versiossa. Me tarjoamme rajattomasti. Lataa podcastitaakkasi, kaikki haastattelusi, vuosien äänitteet. Ei rajoituksia.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 tiedostoa erässä",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10 tunnin tiedostot tuettu",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Käsittele nukkuessasi",
      feature2TableRow1Label: "Otter Free",
      feature2TableRow1Value: "3 elinikäistä tuontia",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 tiedostoa/kk",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 tuntia/kk yläraja",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Todella rajaton ✓",
      feature3Label: "Sosiaalinen todiste",
      feature3TitlePart1: "Käyttäjät",
      feature3TitlePart2: "Vaihtavat päivittäin",
      feature3Description: '"Maksan Otterille $100/vuodessa ja he rajoittavat minua 10 tiedoston tuontiin kuukaudessa. Heti kun on vaihtoehto rajattomilla tuonneilla, olen poissa!" - Todellinen Reddit-käyttäjä',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50 000+ käyttäjää vaihtanut",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Otterin "kutistamisesta"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Ei koskaan takaisin",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "Tytyväisiä käyttäjiä",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Käsiteltyjä tiedostoja",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Tarkkuus",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Ei piilokuluja",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuuttia/kk",
      trustBadge2Number: "100+",
      trustBadge2Label: "Kieltä",
      trustBadge3Number: "96%",
      trustBadge3Label: "Tarkkuus",
      trustBadge4Number: "50",
      trustBadge4Label: "Erälataus",
      ctaTitle: "Lopeta maksaminen vale-rajattomasta",
      ctaSubtitle: "Liity tuhansiin, jotka vaihtoivat todella rajoittamattomaan tekstitykseen",
      finalCta: "Kokeile NeverCapia ilmaiseksi"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Massalatauksen vapaus",
      heroTitleLine1: "Lataa 50 tiedostoa.",
      heroTitleHighlight: "Käsittele kaikki.",
      heroSubtitle: "Otter tarjoaa 3 elinikäistä tuontia. KOLME. Koko elämäsi ajaksi. Me tarjoamme rajoittamattomat lataukset, 50 tiedostoa kerrallaan, milloin tahansa tarvitset.",
      primaryCta: "Aloita massalataus →",
      secondaryCta: "Katso rajat",
      redditQuote: '"Minulla on 3 vuoden podcast-jaksoja tekstittääkseni. Otter kertoo, että saan 3 elinikäistä tuontia. KOLME. Tämä on loukkaavaa."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Todellista turhautumista r/podcastingista",
      comparisonSectionTitlePart1: "Ne",
      comparisonSectionTitleHighlight: "Naurettavat rajat",
      comparisonSectionTitlePart2: "Joita ne asettavat",
      comparisonSubtitle: "Kuinka kilpailijat rajoittavat sisältösi käsittelykykyä",
      limitCard1Service: "Otter Free",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Elinikäiset tuonnit",
      limitCard1DescriptionLine2: "(Kyllä, KOKO elämäsi ajaksi)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Tiedostoa kuukaudessa",
      limitCard2DescriptionLine2: "(100 $/vuosi -paketti)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Tiedosto kerrallaan",
      limitCard3DescriptionLine2: "(Peräkkäinen lataus)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Rajoittamattomat lataukset",
      limitCard4DescriptionLine2: "50 tiedostoa erässä",
      feature1Label: "Eräteho",
      feature1TitlePart1: "Käsittele",
      feature1TitleHighlight: "Koko arkistosi",
      feature1TitlePart2: "Yhdessä yössä",
      feature1Description: 'Lataa 50 tiedostoa ennen nukkumaanmenoa. Herää valmiiden tekstitysten pariin. Ei jonotusta, ei odottamista, ei "päivitä tilisi" -viestejä. Pelkkää käsittelytehoa käytettävissäsi.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samanaikaista latausta",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Rinnakkaiskäsittely",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10 tunnin tiedostot tuettu",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5GB tiedostoa kohden enintään",
      uploadAnimationText1: "50 tiedostoa",
      uploadAnimationText2: "Pudota & Käsittele",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 muuta tiedostoa...",
      feature2Label: "Nopeus",
      feature2TitlePart1: "Lähetyksestä",
      feature2TitleHighlight: "Valmis tunneissa",
      feature2Description: "Rinnakkaiskäsittelyinfrastruktuurimme tarkoittaa, että 50 tiedostoasi eivät jonoile. Ne kaikki tekstitetään samanaikaisesti. Mikä ennen vei viikkoja, vie nyt tunteja.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1 tunnin tiedosto: 5 minuuttia",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 tiedostoa: käsitellään rinnakkain",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Sähköposti-ilmoitus valmistuessa",
      timelineStep1Icon: "1",
      timelineStep1Title: "Lähetä",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Käsittely",
      timelineStep2Time: "5-30 min",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-taika",
      timelineStep3Time: "30-60 min",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Valmis",
      timelineStep4Time: "< 2 tuntia",
      feature3Label: "Vapaus",
      feature3TitlePart1: "Ei jonoja.",
      feature3TitleHighlight: "Ei odotusta.",
      feature3TitlePart2: "Ei rajoja.",
      feature3Description: 'Kun muut pakottavat odottamaan virtuaalisissa jonoissa tai päivittämään "prioriteettikäsittelyyn", me käsittelemme jokaisen lähetyksen kiireellisesti. Sisältösi on tärkeää, eikä sen pitäisi odottaa.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Ei prioriteettitasoja",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Sama nopeus kaikille",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Lähetä milloin tahansa, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Aina valmiina",
      feature3VisualSubtext: "Lähetä kun inspiraatio iskee",
      useCasesTitlePart1: "Täydellinen",
      useCasesTitleHighlight: "Runsaasti lähettäville",
      useCasesSubtitle: "Todellisia tilanteita, joissa massalähetys pelastaa päivän",
      useCase1Title: "Podcast-arkistot",
      useCase1Description: "Lähetä 3 vuoden jaksoja kerralla. Luo tekstitykset koko arkistoosi. Luo SEO-sisältöä jokaiselle jaksolle.",
      useCase2Title: "Kurssien luonti",
      useCase2Description: "Käsittele kaikki luentovideot samanaikaisesti. Luo opiskelijoille saatavilla olevat tekstitykset. Luo haettavia kurssimateriaaleja.",
      useCase3Title: "Haastattelujen kasa",
      useCase3Description: "Tyhjennä se kasa tekstittämättömiä haastatteluja. Käsittele viikkojen tutkimus tunneissa. Täytä määräaika ilman paniikkia.",
      useCase4Title: "YouTube-kirjasto",
      useCase4Description: "Luo tekstitykset koko kanavallesi. Luo blogikirjoituksia videosisällöstä. Paranna kaikkien videoiden SEO.",
      useCase5Title: "Kokousarkistot",
      useCase5Description: "Lataa kuukausien mittaiset tallennetut kokoukset. Luo haettavia kokousmuistiinpanoja. Älä enää koskaan hukkaa tärkeitä päätöksiä.",
      useCase6Title: "Tutkimusdata",
      useCase6Description: "Käsittele kohderyhmiä joukoittain. Puheta kaikki osallistujahaastattelut. Analysoi laadullista dataa tehokkaasti.",
      ctaTitle: "Lopeta lisälatausten kerjääminen",
      ctaSubtitle: "Saat rajattoman joukkokäsittelyn, joka todella toimii",
      finalCta: "Lataa 50 tiedostoa nyt →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Alan johtava tarkkuus",
      heroTitleLine1: "96 % tarkkuus.",
      heroTitleHighlight: "Jokainen sana merkitsee.",
      heroSubtitle: "Alan johtava tarkkuus 12 pääkielellä. Sanatason aikaleimat täydellistä synkronointia varten. Älykäs puhujan tunnistus, joka käsittelee nopeita keskusteluja. Ammattimainen muotoilu, joka on oikeasti luettavissa.",
      primaryCta: "Testaa tarkkuutemme →",
      secondaryCta: "Katso kielet",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Tarkkuus",
      statCard1DescriptionLine2: "12 pääkielellä",
      statCard2Percentage: "95 %+",
      statCard2DescriptionLine1: "Tarkkuus",
      statCard2DescriptionLine2: "Aksenttien & murteiden kanssa",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Sanatason",
      statCard3DescriptionLine2: "Aikaleiman tarkkuus",
      languageSectionTitlePart1: "96 % tarkkuus",
      languageSubtitle: "Ammattiluokan puheentunnistus maailmanlaajuiselle sisällölle",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Englanti",
      languageCard1Accuracy: "96 % tarkkuus",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Espanja",
      languageCard2Accuracy: "96 % tarkkuus",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandariinikiina",
      languageCard3Accuracy: "96 % tarkkuus",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Ranska",
      languageCard4Accuracy: "96 % tarkkuus",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Saksa",
      languageCard5Accuracy: "96 % tarkkuus",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japani",
      languageCard6Accuracy: "96 % tarkkuus",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Korea",
      languageCard7Accuracy: "96 % tarkkuus",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugali",
      languageCard8Accuracy: "96 % tarkkuus",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Venäjä",
      languageCard9Accuracy: "96 % tarkkuus",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italia",
      languageCard10Accuracy: "96 % tarkkuus",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Hollanti",
      languageCard11Accuracy: "96 % tarkkuus",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabia",
      languageCard12Accuracy: "96 % tarkkuus",
      moreLanguagesText: "+ 88 muuta kieltä, joissa yli 95 % tarkkuus",
      feature1Label: "Tarkkuus",
      feature1TitlePart1: "Sanataso",
      feature1TitleHighlight: "Aikaleimat",
      feature1Description: "Jokainen sana on täydellisesti synkronoitu äänen kanssa. Luo napsautettavia tekstityksiä, tarkkoja tekstityksiä tai hyppää tarkkoihin kohtiin nauhoituksissasi. 100 ms:n tarkkuus, johon ammattilaiset luottavat.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms:n aikaleimatarkkuus",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Täydellinen videon muokkaamiseen",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Napsautettavat interaktiiviset tekstitykset",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Kuvakunnossa olevat tekstitykset",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Puhuja 1",
      transcriptLine1Text: "Tervetuloa tämän päivän podcast-jaksoon.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Puhuja 2",
      transcriptLine2Text: "Kiitos, että saan olla mukana!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Puhuja 1",
      transcriptLine3Text: "Sukelletaan päätemaamme...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Puhuja 2",
      transcriptLine4Text: "Ehdottomasti, innolla odotan keskustelua.",
      feature2Label: "Älykäs tekoäly",
      feature2TitlePart1: "Hallitsee",
      feature2TitleHighlight: "Nopeat keskustelut",
      feature2Description: "Tekoälymme tunnistaa puhujat tarkasti, vaikka puhe olisi päällekkäistä, keskeytyksistä täynnä tai nopeaa vuoropuhelua. Erinomainen haastatteluihin, podcasteihin ja kokouksiin, joissa puhujat keskeyttävät usein.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Tunnistaa jopa 20 puhujaa",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Hallitsee keskeytykset täydellisesti",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Toimii päällekkäisen puheen kanssa",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Säilyttää tarkkuuden ristikeskusteluissa",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Tunnistettua puhujaa",
      feature2VisualSubtext: "Jopa nopeissa keskusteluissa",
      feature3Label: "Luettavuus",
      feature3TitlePart1: "Täydellisesti",
      feature3TitleHighlight: "Muotoiltu teksti",
      feature3Description: "Ei enää tekstimuureja. Tekoälymme lisää automaattisesti kappaleita, virkkeitä ja välimerkkejä juuri oikeaan paikkaan. Lopputulos? Luettavissa olevia ja helposti skannattavia puheenauhoituksia.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Älykkäät kappalejaot",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Tarkat välimerkit",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Oikea alkukirjoitus",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Siisti, helposti luettava tulos",
      formattingTitle: "Ennen & jälkeen",
      formattingBeforeLabel: "❌ Muut:",
      formattingBeforeText: "tänään puhumme uusista ominaisuuksista joita olemme kehittäneet luulen että pidätte niistä kovasti käyttäjät ovat pyytäneet niitä pitkään ja vihdoin saimme ne valmiiksi",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Tänään puhumme uusista ominaisuuksista, joita olemme kehittäneet. Luulen, että pidätte niistä kovasti. Käyttäjät ovat pyytäneet niitä pitkään, ja vihdoin saimme ne valmiiksi.",
      comparisonSubtitle: "Tarkkuus",
      comparisonSectionTitle: "Vertailu",
      comparisonDes: "Katso, miten eroamme kilpailijoista",
      tableHeader1: "Ominaisuus",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "Tarkkuus (selkeä ääni)",
      tableRow1NeverCap: "96 %",
      tableRow1Otter: "95 %",
      tableRow1Descript: "94 %",
      tableRow1Rev: "94 %",
      tableRow2Feature: "Sanatason aikaleimat",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Puhujien tunnistus",
      tableRow3NeverCap: "20 puhujaa",
      tableRow3Otter: "16 puhujaa",
      tableRow3Descript: "10 puhujaa",
      tableRow3Rev: "✕",
      tableRow4Feature: "Käsittelee päällekkäistä puhetta",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Rajoitetusti",
      tableRow4Descript: "Rajoitetusti",
      tableRow4Rev: "✕",
      tableRow5Feature: "Älykäs muotoilu",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Perus",
      tableRow6Feature: "12 kieltä 96 %:n tarkkuudella",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Koe 96 %:n tarkkuus",
      ctaSubtitle: "Lataa haastavin äänitiedostosi ja näe ero",
      finalCta: "Testaa Tarkkuuttamme Nyt →",
        languageSectionTitlePart2: "12 pääkielellä"
    }
  },
  Pricing: {
    Hero: {
      "title": "Yksinkertainen, Läpinäkyvä Hinnoittelu",
      "highlighted_text": "Ei Piilotettuja Kattoja",
      "description": "Valitse tarpeitasi vastaava suunnitelma. Päivitä tai alenna milloin tahansa. Ei sopimuksia, ei yllätyksiä."
    },
    Cards: {
      "title": "Yksinkertainen, Läpinäkyvä Hinnoittelu.",
      "highlighted_text": "Ei Piilotettuja Kattoja.",
      "description": "Valitse tarpeitasi vastaava suunnitelma. Päivitä tai alenna milloin tahansa. Ei sopimuksia, ei yllätyksiä.",
      "plans": [
            {
              "name": "Ilmainen",
              "price": "$0",
              "period": "kk",
              "discount": "Erinomainen palvelumme kokeiluun",
              "limits": {
                "title": "Päivittäiset rajat",
                "items": [
                  "3 tiedostoa/päivä (≈90 min yhteensä/päivä)",
                  "Enintään 30 min/tiedosto (≤250 MT)",
                  "Lataa 1 tiedosto kerrallaan",
                  "Tavallinen jonotus"
                ]
              },
              "features": {
                "title": "Ominaisuudet",
                "items": [
                  "100+ kieltä",
                  "Puhujien tunnisteet",
                  "Käännös",
                  "Kaikki vientiformaatit"
                ]
              },
              "cta": {
                "text": "Aloita ilmaiseksi. Ei luottokorttia.",
                "button": "Nykyinen suunnitelma"
              }
            },
            {
              "name": "Pro Kuukausittain",
              "price": "$17.99",
              "period": "kk",
              "discount": "$9.99 ensimmäiseksi kuukaudeksi",
              "limits": {
                "title": "Ei kuukausirajaa",
                "items": [
                  "Rajoittamattomat minuutit",
                  "Enintään 10 tuntia / 5 GT tiedostoa kohden",
                  "Lataa 50 tiedostoa kerralla",
                  "Etusijajono"
                ]
              },
              "features": {
                "title": "Kaikki Ilmaisessa, plus",
                "items": [
                  "Sanatason aikaleimat",
                  "Kehittynyt puhujien tunnistus",
                  "Muotoillut kappaleet & välimerkit",
                  "Etusijatuki"
                ]
              },
              "cta": {
                "text": "Rajoittamattomat minuutit. Etusijanopeus. Massalataukset.",
                "button": "Siirry Pro"
              },
              "badge": "Suosituin"
            },
            {
              "name": "Pro Vuosittain",
              "price": "$8.99",
              "period": "kk",
              "discount": "Laskutetaan vuosittain $107.88",
              "limits": {
                "title": "Sama kuin Pro-kuukausi",
                "items": [
                  "Rajoittamattomat minuutit",
                  "Enintään 10 tuntia / 5 GT tiedostoa kohden",
                  "Lataa 50 tiedostoa kerralla",
                  "Etusijajono"
                ]
              },
              "features": {
                "title": "Kaikki Ilmaisessa, plus",
                "items": [
                  "Sanatason aikaleimat",
                  "Kehittynyt puhujien tunnistus",
                  "Muotoillut kappaleet & välimerkit",
                  "Etusijatuki"
                ]
              },
              "cta": {
                "text": "Rajoittamattomat minuutit. Etusijanopeus. Massalataukset.",
                "button": "Siirry Pro"
              },
              "badge": "Paras Arvo - "
            }
          ],
      "disclaimer": '\"Rajaton\" tarkoittaa ei kuukausirajoitusta eikä keinotekoista hidastamista. Kohtuullinen käyttö koskee väärinkäyttöä tai uudelleenjakelua.'
    },
    ComparisonTable: {
      "header": {
        "title": "Vertaa",
        "highlighted_text": "Kaikki ominaisuudet",
        "subtitle": "Katso tarkalleen, mitä saat kussakin suunnitelmassa. Ei piilotettuja rajoituksia."
      },
      "plans": [
              "Ominaisuudet",
              "Ilmainen",
              "Pro Monthly",
              "Pro Annual"
            ],
      "features": [
            {
              "name": "Hinta",
              "values": [
                "0 $/kk",
                {
                  "main": "17,99 $/kk",
                  "note": "9,99 $ ensimmäinen kuukausi"
                },
                {
                  "main": "8,99 $/kk",
                  "note": "Laskutetaan 107,88 $/vuosi"
                }
              ]
            },
            {
              "name": "Kuukausittaiset minuutit",
              "values": ["~2 700 (90/päivä)", "Rajaton", "Rajaton"]
            },
            {
              "name": "Tiedoston enimmäiskesto",
              "values": ["30 minuuttia", "10 tuntia", "10 tuntia"]
            },
            {
              "name": "Tiedoston enimmäiskoko",
              "values": ["250 Mt", "5 Gt", "5 Gt"]
            },
            {
              "name": "Joukkolataukset",
              "values": ["1 tiedosto", "50 tiedostoa", "50 tiedostoa"]
            },
            {
              "name": "Käsittelynopeus",
              "values": ["Vakio", "Etusija", "Etusija"]
            },
            {
              "name": "Tuetut kielet",
              "values": ["100+ kieltä", "100+ kieltä", "100+ kieltä"]
            },
            {
              "name": "Käännös",
              "values": ["true", "true", "true"]
            },
            {
              "name": "Puhujan tunnistus",
              "values": ["Perus", "Edistynyt (20 puhujaa)", "Edistynyt (20 puhujaa)"]
            },
            {
              "name": "Sanatason aikaleimat",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Muotoillut kappaleet",
              "values": ["false", "true", "true"]
            },
            {
              "name": "Vie muodoissa",
              "values": ["Kaikki muodot", "Kaikki muodot", "Kaikki muodot"]
            },
            {
              "name": "Tuki",
              "values": ["Sähköposti", "Etusijasähköposti", "Etusijasähköposti"]
            },
            {
              "name": "Tietojen säilytys",
              "values": ["30 päivää", "Ikuisesti", "Ikuisesti"]
            }
          ]
    },
    FAQ: {
      "title": "Usein Kysytyt",
      "titleHighligt": "Kysymykset",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "Onko se todella rajaton?",
              "answer": "Kyllä! Pro-suunnitelmissa ei ole kuukausittaisia minuuttirajoja. Ainoat rajat ovat tekniset: enintään 10 tunnin tiedeston pituus ja 5GB tiedostokoko. Voit käsitellä niin monta tiedostoa kuin tarvitset."
            },
            {
              "q": "plan_change",
              "question": "Voinko vaihtaa suunnitelmaa milloin tahansa?",
              "answer": "Ehdottomasti! Voit peruuttaa tilauksesi milloin tahansa hallintapaneelistasi. Päivitä tai alenna suunnitelmaa tarpeen mukaan."
            },
            {
              "q": "payment_methods",
              "question": "Mitä maksutapoja hyväksytte?",
              "answer": "Hyväksymme kaikki suuret luottokortit, pankkikortit ja PayPalin turvallista ja vaivatonta maksamista varten."
            },
            {
              "q": "free_trial",
              "question": "Onko Pro:lle ilmainen kokeilu?",
              "answer": "Kyllä! Kokeile Pro:ta ilmaiseksi 7 päiväksi, luottokorttia ei tarvita. Lisäksi saat ensimmäisen kuukauden 45% alennuksella tilatessasi."
            },
            {
              "q": "file_retention",
              "question": "Kuinka kauan säilytätte tiedostojani?",
              "answer": "Ilmainen suunnitelma: 30 päivää. Pro-suunnitelmat: Ikuisesti! Tekstityksesi ovat aina käytettävissä tililläsi."
            },
            {
              "q": "data_security",
              "question": "Entä tietoturva?",
              "answer": "Olemme SOC 2 -sertifioitu ja käytämme 256-bittistä salausmenetelmää. Emme koskaan käytä sisältöäsi malliemme kouluttamiseen. Sinun tietosi ovat sinun."
            }
          ]
    },
    CTA: {
      "title": "Valmiina siirtymään rajoittamattomaan?",
      "subtitle": "Liity yli 50 000 ammattilaisen joukkoon, jotka tekstittävät ilman rajoja",
      "button": "Kokeile NeverCapia ilmaiseksi →",
      "disclaimer": "Luottokorttia ei vaadita • Aloita tekstitys sekunneissa"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Suunniteltu",
      heavyUsers: "Aktiivikäyttäjät",
      whoActuallyNeed: "jotka todella tarvitsevat rajoittamattomia ominaisuuksia",
      heroSubtitle: "Vuosien jälkeen jääneiden podcastien tekijöistä satojen haastattelujen tutkijoihin asti. Katso kuinka ammattilaiset käyttävät NeverCapia päästäkseen eroon latausrajoituksista ja minuuttirajoituksista.",
      podcasters: {
        title: "Podcastaajat",
        pain: '"Lopeta jaksojen valitseminen tekstitysten arvoiseksi"',
        description: "Lataa koko podcast-arkistosi kerralla. Luo esitysmuistiinpanoja, paranna SEO:ta ja uudelleenkäytä sisältöä minuutteja laskematta.",
        benefits: {
          benefit1: "Lataa kaikki jaksot, ei vain 3",
          benefit2: "Luo SEO-ystävälliset esitysmuistiinpanot",
          benefit3: "Luo haettavissa olevat arkistot",
          benefit4: "Uudelleenkäytä blogisisältönä"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Jaksoa"
          },
          stat2: {
            number: "200h",
            label: "Säästetty"
          },
          stat3: {
            number: "3x",
            label: "SEO-liikenne"
          }
        }
      },
      journalists: {
        title: "Toimittajat & Kirjoittajat",
        pain: '"Määräaikapaine kohtaa latausrajoitukset"',
        description: "Lataa kaikki haastattelut eränä ennen määräaikaa. Etsi tekstityksistä välittömästi äläkä missaa tärkeää lainausta.",
        benefits: {
          benefit1: "Lataa eränä ennen määräaikoja",
          benefit2: "Etsi kaikki haastattelut kerralla",
          benefit3: "Tarkat lainaukset aikaleimoineen",
          benefit4: "Käsittele aksentteja & kieliä"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Haastattelua/kk"
          },
          stat2: {
            number: "96%",
            label: "Tarkkuus"
          },
          stat3: {
            number: "5 min",
            label: "Tunnissa"
          }
        }
      },
      contentCreators: {
        title: "Sisältötuottajat",
        pain: '"Saavutettavuuden ei pitäisi olla kallista"',
        description: "Tekstitä koko YouTube-kanavasi. Luo tekstityksiä useilla kielillä ja paranna videosi SEO:ta välittömästi.",
        benefits: {
          benefit1: "Tekstitä kaikki videot kerralla",
          benefit2: "249 kielen käännökset",
          benefit3: "YouTube-valmiit SRT-tiedostot",
          benefit4: "Paranna videon SEO-sijoitus"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videota"
          },
          stat2: {
            number: "100+",
            label: "Kieltä"
          },
          stat3: {
            number: "249",
            label: "Käännöstä"
          }
        }
      },
      researchers: {
        title: "Tutkijat & Akateemikot",
        pain: '"Laadullisen datan ei pitäisi jonottaa"',
        description: "Käsittele kokonaiset tutkimukset kerralla. Hallitse kohderyhmiä, haastatteluja ja paneelikeskusteluja täydellisen puhujan tunnistuksen kanssa.",
        benefits: {
          benefit1: "Käsittele kohderyhmiä erissä",
          benefit2: "20 puhujan tunnistus",
          benefit3: "Vie analyysiohjelmistoon",
          benefit4: "GDPR-yhteensopiva turvallisuus"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Tutkimusta"
          },
          stat2: {
            number: "96%",
            label: "Ryhmän tarkkuus"
          },
          stat3: {
            number: "GDPR",
            label: "Yhteensopiva"
          }
        }
      },
      businessTeams: {
        title: "Liiketiimit",
        pain: '"Kokousnauhoitukset pitäisi olla vaivattomia"',
        description: "Nauhoita kokouksia suoraan tai lataa äänitiedostot välittömään tekstitykseen. Luo haettavia arkistoja rajattomista keskusteluista äläkä koskaan enää menetä tärkeitä keskusteluja.",
        benefits: {
          benefit1: "Suora ääninauhoitus & tekstitys",
          benefit2: "Rajattomat kokousnauhoitukset",
          benefit3: "Haettava kokousarkisto",
          benefit4: "Lataa äänitiedostot heti"
        },
        stats: {
          stat1: {
            number: "Live",
            label: "Nauhoitus"
          },
          stat2: {
            number: "Välitön",
            label: "Lataa"
          },
          stat3: {
            number: "20+",
            label: "Puhujat"
          }
        }
      },
      educators: {
        title: "Opettajat",
        pain: '"YouTube-videoita tarvitaan välittömään tekstitykseen"',
        description: "Liitä YouTube-linkit saadaksesi välittömät tekstitykset ja automaattisesti luodut tekstitykset. Muuta mikä tahansa opetusvideo helposti saatavilla olevaksi, haettavaksi sisällöksi.",
        benefits: {
          benefit1: "Suora YouTube-linkin tekstitys",
          benefit2: "Automaattiset videotekstitykset",
          benefit3: "Tekstitä kokonaiset kurssit",
          benefit4: "Haettavat luentoarkistot"
        },
        stats: {
          stat1: {
            number: "1-Napsautus",
            label: "YouTube-liittäminen"
          },
          stat2: {
            number: "Auto",
            label: "Tekstitykset"
          },
          stat3: {
            number: "100+",
            label: "Kieltä"
          }
        }
      },
      quotes: {
        title: "Oikeat käyttäjät,",
        titleHighlight: "Oikea vapaus",
        subtitle: "Kuuntele ammattilaisia, jotka vapautuivat keinotekoisista rajoituksista",
        testimonials: {
          mike: {
            textBefore: '"Minulla oli',
            highlight: "3 vuoden jaksoja",
            textAfter: 'tekemättä tekstityksiä. Otter halusi minun valitsevan 3. KOLME. NeverCap antoi minun ladata kaikki 150 jaksoa yhden viikonlopun aikana."',
            name: "Mike Rodriguez",
            role: "Podcast-isäntä"
          },
          jessica: {
            textBefore: '"Freelance-toimittajana en voi maksaa Trintin',
            highlight: "$100/kk",
            textAfter: ', mutta en myöskään voi työskennellä Otterin 10 tiedoston kuukausirajoituksen kanssa. NeverCap pelasti urani."',
            name: "Jessica Park",
            role: "Freelance-toimittaja"
          },
          sarah: {
            textBefore: '"Tutkimusryhmällämme oli',
            highlight: "200 tuntia",
            textAfter: 'kohderyhmänauhoituksia. Käsittelimme kaiken viikonlopun aikana kuukausittaisen minuuttirajoituksen sijaan."',
            name: "Dr. Sarah Chen",
            role: "Päätutkija"
          },
          carlos: {
            textBefore: '"Teen opetussisältöä espanjaksi. NeverCap tekstittää täydellisesti ja',
            highlight: "kääntää englanniksi",
            textAfter: 'laajemman yleisön saavuttamiseksi. Ei rajoja, vain kasvua."',
            name: "Carlos Martinez",
            role: "YouTube-opettaja"
          }
        }
      },
      industries: {
        title: "Luotettu",
        titleHighlight: "Toimialoilla",
        subtitle: "Ammattilaiset kaikkialla siirtyvät todella rajattomaan",
        list: {
          media: "Media & julkaisut",
          education: "Koulutus",
          healthcare: "Terveydenhuolto",
          technology: "Teknologia",
          finance: "Rahoitus",
          legal: "Laki"
        }
      },
      cta: {
        title: "Myös sinun käyttötapauksesi tarvitsee rajattoman",
        subtitle: "Liity 50 000+ ammattilaiseen, jotka lopettivat minuuttien laskemisen ja alkoivat luoda",
        button: "Aloita rajaton matkasi →"
      }
    },
    Podcasters: {
      badge: "Rakennettu podcastaajille",
      heroTitle: "Tekstitä",
      heroTitleHighlight: "Koko podcast-arkistosi",
      heroSubtitle: "Lataa koko takaluettelosi. Luo jakson tiedotteet jokaiselle jaksolle. Ei enää valintoja, mitkä jaksot tekstitetään.",
      ctaPrimary: "Aloita tekstitys ilmaiseksi",
      ctaSecondary: "Katso miten se toimii",
      trustBadge1: "10 000+ podcastaajaa",
      trustBadge2: "Rajattomat jaksot",
      trustBadge3: "SEO-valmiit tekstitykset",
      stats: {
        stat1: {
          number: "∞",
          label: "Jaksoa/kk"
        },
        stat2: {
          number: "50",
          label: "Erälataus"
        },
        stat3: {
          number: "10h",
          label: "Jakson maksimipituus"
        },
        stat4: {
          number: "96 %",
          label: "Tarkkuus"
        }
      },
      problemTitle: "Podcast-litterointi",
      problemTitleHighlight: "Podcast-tekstitysongelma",
      problemSubtitle: 'Muut palvelut pakottavat valitsemaan, mitkä jaksot ovat "tekstityksen arvoisia"',
      problems: {
        problem1: {
          title: "Latausrajat tuhoavat arkistot",
          description: "Otter tarjoaa 3 elinikäistä tuontia ilmaisella, 10 kuukaudessa Prolla. Miten tekstität 3 vuoden jaksoja?"
        },
        problem2: {
          title: "Menetetty SEO-mahdollisuus",
          description: "Jokainen tekstittämätön jakso on menetetty SEO-liikenne. Mutta Descript rajoittaa sinut 30 tuntiin/kk parhaimmillaan."
        },
        problem3: {
          title: "Kustannukset räjähtävät kasvun myötä",
          description: "Podcastisi kasvaessa tekstityskustannukset nousevat pilviin. 2$/h ylitysmaksut tekevät skaalautumisen mahdottomaksi."
        }
      },
      solutionTitle: "NeverCap",
      solutionTitleHighlight: "NeverCap-ratkaisu",
      solutionDescription: "Todella rajaton tekstitys. Lataa koko arkistosi. Tekstitä jokainen uusi jakso. Luo jakson tiedotteet laajassa mittakaavassa. Ei katoksia, ei rajoja, vain kasvua.",
      workflowTitle: "Podcast-työskentelysi,",
      workflowTitleHighlight: "Yksinkertaistettu",
      workflowSubtitle: "Äänityksestä SEO-optimoituihin jakson tiedotteisiin minuuteissa",
      workflow: {
        step1: {
          title: "Lataa jaksot",
          description: "Pudota 50 jaksoa kerralla. MP3, MP4, WAV - käsittelemme ne kaikki."
        },
        step2: {
          title: "AI tekstittää",
          description: "96 % tarkkuus puhujien tunnistuksella. Täydellinen haastatteluihin."
        },
        step3: {
          title: "Älykäs muotoilu",
          description: "AI lisää kappaleet, lauseet ja välimerkit automaattisesti."
        },
        step4: {
          title: "Julkaise & Sijoitu",
          description: "Vie verkkosivustollesi. Katso, kun SEO-liikenne kasvaa."
        }
      },
      featuresTitle: "Podcastaajien Tarpeisiin",
      featuresTitleHighlight: "Oikeasti Tarvitsevat",
      featuresSubtitle: "Tehty podcastaajien toimesta, podcastaajia varten",
      features: {
        feature1: {
          title: "Usean Puhujan Tunnistus",
          description: "Tunnistaa ja nimeää automaattisesti jopa 20 puhujaa. Täydellinen paneelikeskusteluihin, haastatteluihin ja yhteisjuonnettuihin ohjelmiin."
        },
        feature2: {
          title: "Aikaleimaluokat",
          description: "Luo napsautettavia aikaleimoja YouTube-kuvauksiin. Anna kuulijoiden hypätä suosikkikohtiinsa heti."
        },
        feature3: {
          title: "Älykäs Muotoilu",
          description: "Lisää automaattisesti kappaleet, lauseet ja välimerkit. Saada siistit, luettavat tekstitykset. Säästä tunteja jälkituotannossa."
        },
        feature4: {
          title: "SEO-Optimointi",
          description: "Hakukoneille muotoillut tekstitykset. Paranna podcastisi löydettävyyttä ja tavoita uusia yleisöjä."
        },
        feature5: {
          title: "100+ Kieltä",
          description: "Tekstitä millä tahansa kielellä. Käännä yli 249 kielelle. Tavoita maailmanlaajuiset yleisöt vaivattomasti."
        },
        feature6: {
          title: "Eräkäsittely",
          description: "Lataa 50 jaksoa ennen nukkumaanmenoa. Herää valmiiden tekstitysten pariin. Käsittele koko arkistosi yhdessä yössä."
        }
      },
      testimonialsTitle: "Podcastaajat, Jotka Tekivät",
      testimonialsTitleHighlight: "Muutoksen",
      testimonialsSubtitle: "Todellisia tarinoita todellisilta podcastaajilta",
      testimonials: {
        mike: {
          text: '"Olen tehnyt podcastia 3 vuotta ja tekstittänyt kaiken manuaalisesti kuin idiootti. Latain 6 jaksoa kerralla, ja se erotti minut ja juontajaparini täydellisesti. Kahvilajakso, jonka luulin olevan pilalla? Kristallinkirkas tekstitys. En enää ikinä kirjoita näitä itse."',
          name: "Mike Rodriguez",
          role: '"The Daily Grind" -podcastin isäntä'
        },
        sarah: {
          text: '"Otter rajoitti minua 10 tiedoston tuontiin kuukaudessa. Minulla oli 150 jaksoa jonossa. NeverCap antoi minun ladata kaiken 3 erässä. Orgaaninen liikenteeni on kasvanut 300 %, kun lisäsin tekstitykset vanhoihin jaksoihin. Tämä maksaa itsensä takaisin."',
          name: "Sarah Chen",
          role: '"Tech Talks Today" -luoja'
        }
      },
      comparisonTitle: "Miksi Podcastaajat Valitsevat",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Katso, miten pärjäämme kilpailijoihin verrattuna",
      comparison: {
        headers: {
          feature: "Ominaisuus",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "Kuukausittainen Jaksojen Raja",
            nevercap: "Rajaton",
            otter: "~13 jaksoa (1200 min)",
            descript: "~30 jaksoa (30 tuntia)"
          },
          uploadLimit: {
            feature: "Tiedostonlatausraja",
            nevercap: "Rajaton",
            otter: "10 kuukaudessa",
            descript: "1 kerrallaan"
          },
          batchProcessing: {
            feature: "Eräkäsittely",
            nevercap: "50 tiedostoa",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Jakson Maksimipituus",
            nevercap: "10 tuntia",
            otter: "90 minuuttia",
            descript: "Rajaton"
          },
          speakerDetection: {
            feature: "Puhujien tunnistus",
            nevercap: "20 puhujaa",
            otter: "16 puhujaa",
            descript: "10 puhujaa"
          },
          smartFormatting: {
            feature: "Älykäs muotoilu",
            nevercap: "✓ Täydellinen",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Hinta",
            nevercap: "$17.99/kk",
            otter: "$16.99/kk",
            descript: "$30/kk"
          }
        }
      },
      ctaTitle: "Aloita jokaisen jakson tekstitys",
      ctaSubtitle: "Liity 10 000+ podcastaajaan, jotka eivät koskaan huolehdi rajoituksista",
      ctaButton: "Lataa ensimmäiset 50 jaksoasi ilmaiseksi →",
      ctaDisclaimer: "Luottokorttia ei vaadita • Käsittele rajattomasti jaksoja • Peruuta milloin tahansa"
    },
    Journalists: {
      hero: {
        badge: "Toimittajille & kirjoittajille",
        title: "Tekstitä jokainen haastattelu.",
        titleHighlight: "Älä koskaan missaa lainausta.",
        subtitle: "Lopeta haastattelujen valitseminen tekstityksen arvoiseksi. Lataa kaikki nauhoitukset kerralla, etsi kaikesta heti ja täytä määräaikasi ilman latausahdistusta.",
        ctaPrimary: "Aloita rajattomat lataukset →",
        ctaSecondary: "Katso miten se toimii",
        stats: {
          uploads: {
            number: "∞",
            label: "Tiedostojen lataukset"
          },
          accuracy: {
            number: "96 %",
            label: "Tarkkuus"
          },
          speed: {
            number: "5 min",
            label: "Tunnissa"
          }
        },
        dashboard: {
          title: "Haastattelijono",
          status: "• Kaikki käsittely",
          interviews: {
            cityCouncil: {
              title: "Kaupunginvaltuuston kokous",
              duration: "2 h 15 min • Ladataan...",
              action: "Käsittelyssä"
            },
            expertInterview: {
              title: "Asiantuntijahaastattelu - Dr. Chen",
              duration: "45 min • Tekstitetään...",
              action: "96 % valmis"
            },
            pressConference: {
              title: "Lehdistötilaisuus",
              duration: "1 h 30 min • Valmis",
              action: "Näytä →"
            },
            phoneInterview: {
              title: "Puhelinhaastattelu - Lähde",
              duration: "35 min • Valmis",
              action: "Näytä →"
            }
          }
        }
      },
      problem: {
        title: "Toimittaja",
        titleHighlight: "Toimittajien tekstitysongelma",
        subtitle: 'Muut palvelut pakottavat valitsemaan, mitkä haastattelut ovat "arvoisia" tekstitykseen',
        problems: {
          uploadLimits: {
            title: "Latausrajoitukset tappavat tutkimukset",
            description: "Otter tarjoaa 10 tiedoston tuonnin kuukaudessa Pro-versiossa. Miten tekstität 3 viikon tutkimushaastattelut?"
          },
          missingQuotes: {
            title: "Ratkaisevien lainausten puute",
            description: "Jokainen tekstittämätön haastattelu voi sisältää tarinan avainlainauksen. Mutta Trint rajoittaa sinut korkeintaan 50 tuntiin/kk."
          },
          costExplosion: {
            title: "Kustannukset räjähtävät määräaikoihin",
            description: "Tutkimuksesi syventyessä transkription kustannukset nousevat pilviin. 100 $/kk ylitysmaksut tekevät uutisista mahdottomia."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap-ratkaisu",
          description: "Todella rajaton transkriptio. Lataa koko tutkimuksesi. Transkriboi jokainen haastattelu. Hae kaikki lainaukset heti. Ei rajoja, ei ylärajoja, vain journalismia."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "Paras haastattelujen transkriptio-ohjelmisto",
        titleSuffix: "Journalisteille",
        subtitle: "Todelliset edut, kun määräajat ovat tiukkoja ja tarkkuus on kaikki kaikessa",
        solutions: {
          unlimitedUploads: {
            label: "Rajaton määrä",
            title: "Rajaton määrä kaikille haastatteluillesi",
            description: "Toisin kuin minuuttirajoitteiset ohjelmistot, voit transkriptoida jokaisen haastattelun nopeasta keskustelusta monituntiseen keskusteluun. Älä koskaan huoli luottorajojen loppumisesta määräajan alla.",
            points: {
              simultaneousUpload: "Ei kuukausittaisia minuuttirajoja",
              noLimits: "Tukee 10 tunnin haastatteluja",
              processWhileWrite: "Käsittele kokonaiset tutkimukset kerralla",
              longRecordings: "10 tunnin nauhoitukset tuettu"
            },
            visual: {
              number: "∞",
              label: "Ei rajoja. Koskaan."
            }
          },
          instantSearch: {
            label: "Salaman nopeus",
            title: "Nopeus, joka vastaa uutissyklisiä",
            description: "Saat haastattelusi transkription minuuteissa, ei päivissä. Käsittele tarinoita nopeammin kuin koskaan. Tekoälymme prosessoi tunteja äänitteitä, kun nappaat kahvia.",
            points: {
              searchAll: "5 minuutin käsittelyaika 1 tunnin haastatteluille",
              wordTimestamps: "Etusijakäsittely kiireellisille tarinoille",
              jumpToMoments: "Reaaliaikainen edistymisen seuranta"
            },
            searchDemo: {
              placeholder: "5min",
              resultsText: "Äänitunnilta",
              results: {
                mayorInterview: '"...ilmastopolitiikkamme tulee muuttamaan..."',
                expertPanel: '"...politiikkalausunto osoittaa selvästi..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Lainausvalmis tarkkuus",
            title: "Tarkkuus, jota voit lainata",
            description: "Tekoälymme tuottaa erittäin tarkkoja transkriptioita, varmistaen julkaisemiesi lainausten tarkkuuden ja luotettavuuden. Ammattimainen transkriptio, jota toimittajat luottavat.",
            points: {
              accuracyGuarantee: "96 % tarkkuustakuu",
              handlesAccents: "Käsittelee teknistä terminologiaa",
              smartPunctuation: "Täydellinen puhujan tunnistus"
            },
            visual: {
              accuracy: "96 %",
              label: "Julkaisuvalmis tarkkuus",
              transcript: {
                speaker1: '"Tutkinta paljasti merkittäviä ristiriitaisuuksia taloudellisissa raporteissa."',
                speaker2: '"Voisitko tarkentaa näitä erityisiä eroja?"'
              }
            }
          },
            ironclad: {
                  label: "Lähdesuoja",
                  title: "Rautainen lähdesuoja",
                  description: "Tarjoamme vankkoja turvatoimia herkkien haastattelutietojesi ja luottamuksellisten lähteidesi suojaamiseksi. Pankkitason salaus pitää tutkimuksesi turvassa.",
                  points: {
                    accuracyGuarantee: "Päästä päähän -salaus",
                    handlesAccents: "Automaattiset tiedostonpoistovaihtoehdot",
                    smartPunctuation: "GDPR & tietosuoja"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "Maksimaalinen turvallisuus"
                  }
                }
        }
      },
      features: {
        title: "Kaikki mitä",
        titleHighlight: "Toimittaja tarvitsee",
        subtitle: "Ammattimaiset työkalut, jotka kunnioittavat työskentelytapojasi",
        featuresList: {
          languages: {
            title: "100+ kieltä",
            description: "Haastattele lähteitä maailmanlaajuisesti 12 pääkielellä 96 % tarkkuudella."
          },
          exportFormats: {
            title: "Vie muodoissa",
            description: "Word, PDF, SRT, TXT. Yhteensopiva minkä tahansa työnkulkun kanssa."
          },
          sourceProtection: {
            title: "Lähdesuoja",
            description: "Pankkitason salaus. Lähteesi pysyvät luottamuksellisina."
          },
          timestamps: {
            title: "Aikaleimat",
            description: "Napsauta mitä tahansa lainausta siirtyäksesi tarkkaan äänikohtaan."
          },
          teamSharing: {
            title: "Tiimijako",
            description: "Tee yhteistyötä toimittajien kanssa. Jaa tekstitykset turvallisesti."
          },
          mobileReady: {
            title: "Mobiilivalmis",
            description: "Lataa puhelimesta. Tarkastele tekstityksiä missä tahansa."
          },
          smartFormatting: {
            title: "Älykäs Muotoilu",
            description: "Automaattiset kappaleet ja välimerkit luettaviksi tekstityksiksi."
          },
          batchProcessing: {
            title: "Eräkäsittely",
            description: "Lataa 50 tiedostoa kerralla. Käsittele yön aikana kun nukut."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: '"Minulla oli 3 vuoden haastattelut tekemättä tekstityksiä latausrajojen vuoksi. NeverCap mahdollisti kaiken käsittelyn yhden viikonlopun aikana. Mullistavaa."',
          name: "Jessica Park",
          role: "Freelance-toimittaja, Entinen Otter-käyttäjä"
        }
      },
      cta: {
        title: "Aloita Tekstittäminen",
        titleHighlight: "Ilman Rajoja",
        subtitle: "Liity tuhansiin toimittajiin, jotka lopettivat latausten laskemisen ja keskittyivät tarinoihin",
        ctaPrimary: "Kokeile Rajoitonta Ilmaiseksi →",
        ctaSecondary: "Katso Hinnasto"
      }
    },
    ContentCreators: {
      hero: {
        badge: "Sisältöluojille",
        title: "Tekstitä YouTube-videot,",
        titleHighlight: "Rajattomasti",
        titleSuffix: "1",
        subtitle: "Olipa kyse YouTube-videon tekstittämisestä, TikTok-videon tekstittämisestä uudelleenkäyttöä varten tai Facebook-videon muuntamisesta tekstiksi, alustamme hoitaa kaiken saumattomasti. Luo tekstityksiä 100+ kielellä ilman kuukausirajoja – vain puhdasta luovaa vapautta.",
        ctaPrimary: "Aloita Rajaton Tekstitys →",
        ctaSecondary: "Katso Miten Se Toimii",
        stats: {
          videos: {
            number: "∞",
            label: "Videota/Kuusii"
          },
          languages: {
            number: "100+",
            label: "Kieltä"
          },
          accuracy: {
            number: "96%",
            label: "Tarkkuus"
          },
          platforms: {
            number: "10+",
            label: "Alustaa"
          }
        }
      },
      platforms: {
        title: "Nouda & Tekstitä Mistä Tahansa Alustasta",
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
          titleMax: "Tekstitä Videoita",
          titleMaxHighlight: "Mistä Tahansa Alustasta"
    },
      features: {
        title: "Kaikki Mitä Tarvitset",
        titleHighlight: "Sisällön Laajentamiseen",
        subtitle: "Ammattityökalut ilman ammattirajoja",
        oneClickImport: {
          label: "Yhden Klikkauksen Tuonti",
          title: "Tekstitä YouTube, TikTok &",
          titleHighlight: "Instagram-videot Liittämällä Linkki",
          description: "Työkalumme yksinkertaistaa videosisällön tekstittämistä. Lisää vain linkki tekstittääksesi Instagram-videon. Sama koskee Vimeo-videoiden tekstittämistä. Käsittele koko kanavasi taakka yhden viikonlopun aikana.",
          points: {
            directYoutube: "Suora YouTube-linkin tekstitys",
            multiplePlatforms: "Hae 10+ alustalta",
            batchPlaylists: "Käsittele soittolistoja eräajona",
            autoSync: "Automaattinen synkronointi kanaviesi kanssa"
          },
          demo: {
            instruction: "Liitä videon URL-osoite:",
            url: "https://youtube.com/watch?v=...",
            status: "Haetaan & tekstitetään..."
          }
        },
        globalReach: {
          label: "Maailmanlaajuinen ulottuvuus",
          title: "100+ kieltä.",
          titleHighlight: "Ei rajoja.",
          description: "Tavoita maailmanlaajuisia yleisöjä automaattisella käännöksellä 100+ kielelle. Luo tekstityksiä usealla kielellä samanaikaisesti. Ei lisäkustannuksia, ei kuukausirajoja käännöksille.",
          points: {
            highAccuracy: "96 % tarkkuus 12 pääkielellä",
            unlimitedTranslations: "Rajattomat käännökset sisältyvät",
            multicultural: "Ihanteellinen monikulttuuriselle sisällölle",
            autoDetect: "Automaattinen lähdekielen tunnistus"
          },
          visual: {
            number: "100+",
            title: "Tuetut kielet",
            subtitle: "Käännä kerran, tavoita kaikki"
          }
        },
        flexibleExport: {
          label: "Joustava vienti",
          title: "Jokainen tarvitsemasi",
          titleHighlight: "Muoto",
          description: "Vie työnkulkusi mukaisessa muodossa. YouTubeen tarkoitetuista SRT-tiedostoista VTT-tiedostoihin verkkosoitinta varten tai muokattaviin asiakirjoihin käsikirjoituksia varten. Kaikki viennit rajattomia, kaikki sisältyy jokaiseen suunnitelmaan.",
          points: {
            videoFormats: "SRT & VTT videoplatformeille",
            editingFormats: "DOCX & PDF muokkausta varten",
            dataAnalysis: "CSV tiedonanalyysiä varten",
            simpleScripts: "TXT yksinkertaisia käsikirjoituksia varten"
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
        title: "Lähetyksestä",
        titleHighlight: "Julkaistuun",
        titleSuffix: "minuuteissa",
        subtitle: "Nopein tapa tekstittää koko sisältökirjastosi",
        steps: {
          pasteLinks: {
            title: "Liitä linkit",
            description: "Pudota YouTube-, TikTok- tai mikä tahansa videolinkki. Tai lataa tiedostot suoraan."
          },
          autoTranscribe: {
            title: "Automaattinen tekstitys",
            description: "AI käsittelee 96 % tarkkuudella. Hallitsee aksentit ja useat puhujat."
          },
          editTranslate: {
            title: "Muokkaa & Käännä",
            description: "Täydellistä tekstityksesi. Käännä 100+ kielelle heti."
          },
          exportPublish: {
            title: "Vie & Julkaise",
            description: "Lataa missä tahansa muodossa. Lataa alustallesi. Valmista!"
          }
        }
      },
      testimonials: {
        title: "Sisällöntuottajat",
        titleHighlight: "Vaihtavat päivittäin",
        subtitle: "Rajoitetuista suunnitelmista rajattomaan vapautteen",
        carlos: {
          textBefore: "Teen opetusmateriaalia espanjaksi. NeverCap tekstittää täydellisesti ja",
          textAfter: "laajemman tavoittavuuden vuoksi. Ei rajoja, vain kasvua. Kanavani katselukerrat kolminkertaistuivat monikielisten tekstitysten lisäämisen jälkeen.",
          highlight: "kääntää englanniksi",
          name: "Carlos Martinez",
          role: "YouTube-opettaja • 250 tilaajaa"
        },
        sarah: {
          textBefore: "Descript pyysi 30 $/kk",
          textAfter: ". Minulla on yli 500 videota jonossa. NeverCap antoi minun käsitellä kaiken yhden viikonlopun aikana. Tekstitysten SEO-boosti maksoi itsensä takaisin ensimmäisessä kuussa.",
          highlight: "30 tuntia",
          name: "Sarah Lee",
          role: "Elämäntapavloggaaja • 180 tilaajaa"
        },
        jake: {
          textBefore: "Tämä",
          textAfter: "ominaisuus on pelinmuuttaja. En lataa enää mitään. Liitä vain, transkriboi, valmis. Podcast-leikkeiden käsittely TikTokia varten ei ole koskaan ollut helpompaa.",
          highlight: "suora YouTube-haku",
          name: "Jake Wilson",
          role: "Podcast-isäntä • Top 1 % -sisällöntuottaja"
        },
        yuki: {
          textBefore: "Luon sisältöä 5 kielellä. Muut palvelut veloittavat",
          textAfter: ". NeverCap tarjoaa minulle rajattomat käännökset. Kansainvälinen yleisöni kasvoi 400 % alkaessani käyttää oikeita alkuperäistekstityksiä.",
          highlight: "per käännös",
          name: "Yuki Tanaka",
          role: "Pelisisällöntuottaja • 500 tilaajaa"
        }
      },
      cta: {
        title: "Koko kanavasi. Tekstitetty. Tänään.",
        subtitle: "Liity yli 50 000 sisällöntuottajan joukkoon, jotka lopettivat minuuttien laskemisen ja alkoivat luoda",
        button: "Aloita rajaton tekstitys →"
      },
        FAQSection: {
              "title": "Transkriptiokysymyksesi,",
              "titleHighlight": "Vastattu",
              subtitle: "Kaikki mitä sinun tulee tietää videoiden transkriptiosta eri alustoilla",
              "questions": [
                    {
                      "question": "K: Miten transkriboin YouTube-videon NeverCapilla?",
                      "answer": "Se on helppoa. Etsi vain haluamasi YouTube-video, kopioi sen URL ja liitä se sovellukseemme. Tekoälymme hakee videon automaattisesti ja tarjoaa täyden tekstityksen minuuteissa."
                    },
                    {
                      "question": "K: Mikä on paras tapa transkriboida Facebook-video tekstiksi?",
                      "answer": "Helpoin tapa on käyttää suoraa linkkiä. Kopioi Facebook-videon URL ja alustamme hoitaa loput, muuntaen puheen tekstiksi jopa 96 % tarkkuudella, säästäen sinut manuaaliselta transkriptiolta."
                    },
                    {
                      "question": "K: Voinko transkriboida TikTok- ja Instagram-videoita?",
                      "answer": "Totta kai. Tukemme sekä TikTok- että Instagram-videoiden transkriptiota. Tämä on täydellistä sisällöntuottajille, jotka haluavat muokata lyhytmuotoista videosisältöään blogikirjoituksiksi, artikkeleiksi tai tekstipohjaisiksi some-päivityksiksi."
                    },
                    {
                      "question": "K: Miten transkriboin Vimeo-videon tekstiksi?",
                      "answer": "Vimeo-videoiden transkriptio on yhtä helppoa kuin muidenkin alustojen. Kopioi vain Vimeo-videon URL ja liitä se NeverCapiin. Tekoälymme käsittelee videon ja luo tarkan tekstityksen, jonka voit ladata useassa eri muodossa."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "Rakennettu akateemiseen huippuosaamiseen",
      heroTitle1: "Transkriboi jokainen haastattelu.",
      heroTitle2: "Analysoi kaikki tietosi.",
      heroSubtitle: "Lopeta valitsemasta, mitkä kohderyhmät transkriboida. Käsittele kaikki laadulliset tietosi 96 % tarkkuudella ja moitteettomalla puhujien tunnistuksella – vaikka 20 osallistujaa puhuisivat päällekkäin.",
      heroCtaPrimary: "Ilmainen kokeilu – ei luottokorttia",
      heroCtaSecondary: "Katso miten se toimii",
      statsInterviewHours: "Haastattelutunnit",
      statsAccuracy: "Tarkkuus",
      statsSpeakersId: "Puhujien tunnistus",
      statsCompliant: "Yhteensopiva",
      problemTitle: "Tämä",
      problemSubtitle: 'Muut palvelut pakottavat sinut valitsemaan, mitkä tiedot ovat "transkriboimisen arvoisia"',
      problemCard1Title: "Lähetysrajoitukset tuhoavat tutkimukset",
      problemCard1Desc: "Otter tarjoaa 3 elinikäistä tuontia. Miten transkriboit 200 tuntia kohderyhmäkeskusteluja?",
      problemCard2Title: "Kriittisten tietojen puuttuminen",
      problemCard2Desc: "Jokainen transkriboimaton haastattelu voi sisältää läpimurtotietoja. Mutta Rev veloittaa vähintään 2 $/min.",
      problemCard3Title: "Apurahat katoavat",
      problemCard3Desc: "Kun tietojoukkosi kasvaa, transkription kustannukset räjähtävät. 500 dollaria kohderyhmää kohden tekee skaalautumisesta mahdotonta.",
      solutionTitle: "NeverCap-ratkaisu",
      solutionDesc: "Todella rajatonta transkriptiota. Lataa koko tutkimuksesi. Transkriboi jokainen haastattelu. Analysoi kaikki tietosi. Ei kattoja, ei rajoja, vain tutkimusta.",
      feature1Label: "Ei rajoja",
      feature1Title: "Käsittele sinun",
      feature1Desc: 'Lataa kaikki 200 tuntia haastatteluja tänä yönä. Herää valmiiksi, haettaviin transkriptioihin. Ei kuukausirajoja, ei tiedostokohtaisia rajoja, ei "kohtuullisen käytön" hölynpölyä.',
      feature1Point1: "Lähetä 50 tiedostoa kerralla",
      feature1Point2: "Käsittele pitkittäistutkimukset kokonaan",
      feature1Point3: "Ei tallennusrajoja transkriptioille",
      feature1Point4: "Vie NVivo, MAXQDA, Atlas.ti -ohjelmiin",
      feature1Visual1: "Rajattomat tunnit",
      feature1Visual2: "Sama hinta, olipa kyseessä 10 tai 10 000 tuntia",
      feature2Label: "Älykäs tekoäly",
      feature2Title: "Täsmällinen hallinta",
      feature2Desc: "Tekoälymme seuraa jopa 20 puhujaa, vaikka he puhuisivat päällekkäin, keskeyttäisivät toisiaan tai puhuisivat kaikki yhtä aikaa. Jokainen ääni tallennetaan ja merkitään oikein.",
      feature2Point1: "20 puhujan tunnistus",
      feature2Point2: "Hallitsee päällekkäiset puheet ja keskeytykset",
      feature2Point3: "Puhujien nimet, joita voit muokata",
      feature2Point4: "Aikaleima jokaiselle sanalle",
      conversationParticipant1: "Osallistuja 1",
      conversationText1: "Suurin este, johon törmäämme, on ehdottomasti hoidon korkea hinta...",
      conversationParticipant2: "Osallistuja 2",
      conversationText2: "Ehdottomasti, mutta lisäisin, että saatavuus on—",
      conversationParticipant3: "Osallistuja 3",
      conversationText3: "—anteeksi keskeytys, mutta liikenne on myös valtava ongelma.",
      conversationText4: "Kyllä! Juuri sitä aioin sanoa.",
      conversationParticipant4: "Osallistuja 4",
      conversationText5: "Maaseudulla kaikki kolme ovat ongelmia: hinta, saatavuus JA liikenne.",
      feature3Label: "Tarkkuus",
      feature3Title: "Luotettava",
      feature3Desc: "Hallitsee ammattilaisen tavoin teknistä termistöä, vahvoja aksentteja ja alakohtaisia termejä. Riittävän tarkka julkaisuihin, vertaisarviointiin ja väitöskirjatoimikunnalle.",
      feature3Point1: "Lääketieteellinen ja tieteellinen termistö",
      feature3Point2: "100+ kieltä ja murretta",
      feature3Point3: "Sanatarkka ja siisti lukutila",
      feature3Point4: "Muokkaa ja vie missä tahansa muodossa",
      feature3Visual1: "Tutkimusluokan tarkkuus",
      feature3Visual2: "Yli 50 000 tutkijan luottama",
      feature4Label: "Turvallisuus",
      feature4Title: "IRB-sertifioitu",
      feature4Desc: "Arkaluontoinen tutkimustietosi on suojattu yritysluokan turvallisuudella. GDPR-yhteensopiva, HIPAA-valmis vaihtoehdot ja täydelliset valvontajäljet IRB-vaatimuksia varten.",
      feature4Point1: "Päästä päähän -salaus",
      feature4Point2: "GDPR- ja CCPA-yhteensopiva",
      feature4Point3: "Automaattiset poistokäytännöt",
      feature4Point4: "Turvallinen tiimityöskentely",
      useCasesTitle: "Täydellinen",
      useCasesSubtitle: "Etnografiasta kliinisiin kokeisiin",
      useCase1Title: "Kohderyhmät",
      useCase1Desc: "Hallitse 8–20 osallistujaa päällekkäisillä puheilla. Täydellinen puhujien tunnistus jopa kiihkeissä keskusteluissa. Vie suoraan laadulliseen analyysiohjelmistoon.",
      useCase2Title: "Syvähaastattelut",
      useCase2Desc: "Käsittele satoja yksilöllisiä haastatteluja samanaikaisesti. Säilytä johdonmukaisuus koko aineistossasi. Hae kaikista puhtaaksikirjoituksista välittömästi.",
      useCase3Title: "Kliininen tutkimus",
      useCase3Desc: "HIPAA-yhteensopivat vaihtoehdot potilashaastatteluihin. Tarkka lääketieteellinen terminologian puhtaaksikirjoitus. Turvallinen käsittely herkille terveystiedoille.",
      useCase4Title: "Etnografiset tutkimukset",
      useCase4Desc: "Kenttänauhoitukset luonnollisissa ympäristöissä. Hallitse taustamelua ja useita puhujia. Tuki yli 100 kielelle ja murteelle.",
      useCase5Title: "Suullisen historian projektit",
      useCase5Desc: "Säilytä kokonaisia arkistoja ilman rajoja. Luo haettavia historiallisia tallenteita. Ihanteellinen pitkittäis- ja sukupolvitutkimuksiin.",
      useCase6Title: "Väitöskirjatutkimus",
      useCase6Desc: "Opiskelijaystävälliset hinnat täysillä ominaisuuksilla. Käsittele koko aineistosi edullisesti. Täytä tiukat määräajat eräkäsittelyllä.",
      testimonialTitle: "Luottavat",
      testimonialText: "Tutkimusryhmällämme oli 200 tuntia kohderyhmänauhoituksia yhteisön terveystutkimuksestamme. Muut palvelut halusivat meidän valitsevan, mitkä istunnot puhtaaksikirjoitetaan kustannusten vuoksi. NeverCap antoi meidän käsitellä kaiken viikonlopun aikana. 20 puhujan tunnistus toimi todella – jopa sekavimmissa keskusteluissamme, joissa kaikki puhuivat yhtä aikaa. Tämä työkalu on muuttanut täysin kvalitatiivisen datan käsittelyämme.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Päätutkija, Public Health Institute",
      ctaTitle: "Lopeta datan valitseminen analysoitavaksi",
      ctaSubtitle: "Liity yli 50 000 tutkijan joukkoon, jotka puhtaaksikirjoittavat kaiken",
      ctaButton: "Kokeile NeverCapia ilmaiseksi",
        problemTitle2: "Tutkimustranskription ongelma",
        title: "The",
        useCasesTitle2: "Jokaiseen tutkimusmenetelmään",
        testimonialTitle2: "Johtavat tutkijat",
        feature1TitleHl: "Koko tutkimusprojekti",
        feature1TitlePost: "Kaikki yhdessä paikassa",
        feature2TitleHl: "Kohderyhmähaastattelut",
        feature2TitlePost: "Joka kerta onnistuu",
        feature3TitleHl: "96 % tarkkuus",
        feature4TitleHl: "Turvallisuus",
        testimonialText2Hl: "200 tuntia",
        testimonialText3: "fokusryhmän äänitteitä yhteisöterveystutkimuksestamme. Muut palvelut halusivat meidän valikoida mitkä istunnot litteroidaan kustannusten vuoksi. NeverCap antoi meidän käsitellä",
        testimonialText4Hl: "kaiken viikonloppuna",
        testimonialText5: ". 20 puhujan tunnistus toimi todella - jopa sekavimmissa keskusteluissamme, kun kaikki puhuivat yhtä aikaa. Tämä työkalu on",
        testimonialText6Hl: "täysin muuttanut",
        testimonialText7: "miten käsittelemme laadullista dataa."
    },
    BusinessTeams: {
      heroBadge: "Liiketiimeille",
      heroTitle1: "Kokousnauhoitus",
      heroTitle2: "Tehty helpoksi",
      heroSubtitle: "Nauhoita kokoukset suoraan selaimessasi tai lataa äänitiedostot välittömästi. Luo haettavia arkistoja rajattomista keskusteluista. Älä koskaan menetä tärkeitä keskusteluja todella rajattoman puhtaaksikirjoituksen ansiosta.",
      heroCtaPrimary: "Aloita nauhoitus nyt →",
      heroCtaSecondary: "Katso, miten se toimii",
      recordingStatus: "Nauhoitetaan...",
      statsMeetingMinutes: "Kokouspöytäkirjat",
      statsLiveRecording: "Nauhoitus",
      statsSpeakerID: "Puhujan tunnistus",
      statsInstantUpload: "Lataa & käsittele",
      featuresTitle: "Puhtaaksikirjoitus jokaiselle yritykselle",
      featuresSubtitle: "Live-nauhoituksesta välittömään lataukseen olemme poistaneet kaikki kitkakohdat",
      feature1Title: "Nauhoita suoraan selaimessasi",
      feature1Desc: "Ei latauksia, ei liitännäisiä. Aloita nauhoitus välittömästi yhdellä napsautuksella. Täydellinen äänenlaatu, automaattinen puhujien tunnistus.",
      feature1Benefit1: "Yhden napsautuksen nauhoitus",
      feature1Benefit2: "Ei ohjelmiston asennusta",
      feature1Benefit3: "Toimii millä tahansa laitteella",
      feature1Benefit4: "Reaaliaikainen puhtaaksikirjoitus",
      feature1Visual1: "Napsauta & nauhoita",
      feature1Visual2: "Ei asennusta tarvita",
      feature2Title: "Lataa mikä tahansa äänitiedosto välittömästi",
      feature2Desc: "Onko sinulla nauhoituksia Zoomista, Teamsista tai puhelimestasi? Lataa ne välittömästi. Tuki kaikille suurimmille ääni- ja videoformaateille. Käsittele useita tiedostoja samanaikaisesti ilman odottamista.",
      feature2Benefit1: "Tuetut: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Erälatausmahdollisuus",
      feature2Benefit3: "10 tunnin tiedostot tuettu",
      feature2Benefit4: "Käsittele työskennellessäsi",
      feature2Visual1: "Vedä & pudota tiedostot",
      feature3Title: "Rakennettu tiimiyhteistyötä varten",
      feature3Desc: "Jaa puhtaaksikirjoitukset tiimillesi välittömästi. Kuunnelkaa nauhoituksia yhdessä, vie puhtaaksikirjoitukset useissa muodoissa ja varmista, että kaikki pysyvät linjassa haettavien kokousarkistojen avulla.",
      feature3Benefit1: "Jaa puhtaaksikirjoitukset kenelle tahansa",
      feature3Benefit2: "Kuuntele alkuperäisiä äänitteitä",
      feature3Benefit3: "Vie tekstitykset useissa muodoissa",
      feature3Benefit4: "Tiimin laajuinen haettava arkisto",
      feature3Visual1: "Tiimin Jäsenet",
      feature3Visual2: "Rajoittamaton yhteistyö",
      feature4Title: "Löydä Keskustelu Heti",
      feature4Desc: "Hae kaikista kokouksistasi kerralla. Löydä viime neljänneksen ratkaiseva päätös tai kuukausia sitten esitetty asiakkaan vaatimus. Tekoälyavusteinen haku ymmärtää kontekstia, ei vain avainsanoja.",
      feature4Benefit1: "Hae kaikista kokouksista kerralla",
      feature4Benefit2: "Tekoäly ymmärtää kontekstia",
      feature4Benefit3: "Suodata puhujan tai päivämäärän mukaan",
      feature4SearchPlaceholder: "🔍 Hae: 'Q4 liikevaihtotavoitteet'",
      feature4SearchResults: "Löytyi 3 kokouksesta:",
      feature4Meeting1: "Myynnin Suunnittelu - 15.10.",
      feature4Meeting1Text: '"...Q4:n tavoitteet asetettu 2 miljoonaan..."',
      feature4Meeting2: "Hallituksen Kokous - 20.10.",
      feature4Meeting2Text: '"...Q4 liikevaihtoennusteet..."',
      workflowTitle: "Kuinka Muunnat",
      workflowSubtitle: "Saumaton työnkulku, joka tallentaa jokaisen tärkeän hetken",
      workflowStep1Title: "Nauhoita tai Lataa",
      workflowStep1Desc: "Aloita suora nauhoitus tai lataa kokousäänite Zoomista, Google Meetistä tai Microsoft Teamsista",
      workflowStep2Title: "Automaattinen Tekstitys",
      workflowStep2Desc: "Tekoälymme muuntaa äänitteen tekstiksi 96 % tarkkuudella minuuteissa",
      workflowStep3Title: "Tee Yhteistyötä",
      workflowStep3Desc: "Jaa, kommentoi ja poimi tehtävät",
      workflowStep4Title: "Hae & Analysoi",
      workflowStep4Desc: "Löydä oivalluksia kaikista kokouksistasi",
      testimonialsTitle: "Tiimit Rakastavat",
      testimonialsSubtitle: "Katso, miten yritykset muuttavat kokouskulttuuriaan",
      testimonial1Text: '"Siirryimme tärkeiden yksityiskohtien unohtamisesta kaikkien keskustelujen haettavaan arkistoon. Suora nauhoitus tarkoittaa, että emme koskaan unohda tallentaa tärkeitä keskusteluja."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Tuotepäällikkö, TechCorp",
      testimonial2Text: '"Otter rajoitti meitä 10 tiedoston lataukseen kuukaudessa. Nyt lataamme kaikki asiakaspuhelumme heti. Mullistava muutos myyntitiimimme seurantaan."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Myyntipäällikkö, ConsultPro",
      testimonial3Text: '"Mahdollisuus hakea kuukausien kokouksista pelasti meidän tilintarkastuksemme. Löysimme jokaisen päätöksen ja hyväksynnän sekunneissa."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Lopeta Tärkeiden Keskustelujen Häviäminen",
      ctaSubtitle: "Liity tuhansiin tiimeihin, jotka tallentavat jokaisen kokouksen rajoittamattomalla tekstityksellä",
      ctaButton: "Aloita Nauhoitus Ilmaiseksi →",
        featuresTitle2: "Kokous",
        workflowTitle2: "Zoom-äänitteen Tekstiksi",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "Opettajille & Kouluttajille",
      heroTitle1: "Tee Oppimisesta",
      heroTitle2: "Kaikille Saatavilla",
      heroSubtitle: "Liitä YouTube-linkit saadaksesi välittömät tekstitykset automaattisilla tekstityksillä. Muunna luennot, oppaat ja opetusvideot haettavaksi, kaikille opiskelijoille saatavilla olevaksi sisällöksi.",
      heroCtaPrimary: "Ilmainen kokeilu - Ei Luottokorttia",
      heroCtaSecondary: "Katso Demo",
      stats1Number: "1-Napsautus",
      stats1Label: "YouTube-tekstitys",
      stats2Number: "100+",
      stats2Label: "Tuetut kielet",
      stats3Number: "∞",
      stats3Label: "Rajoittamattomat videot",
      stats4Number: "96%",
      stats4Label: "Tarkkuusaste",
      featuresTitle: "Kaikki mitä opettajat tarvitsevat",
      featuresSubtitle: "YouTube-luentojen tallennettuihin oppitunteihin - tee kaikesta sisällöstäsi helposti saatavilla olevaa",
      feature1Title: "Pikaiset YouTube- ja alustalinkit",
      feature1Desc: "Liitä minkä tahansa videon linkki ja saat tekstityksen heti. Toimii YouTuben, Vimeon, Facebookin, X:n (Twitter), TikTokin, Instagramin, Dropboxin, Google Driven ja muiden kanssa. Ei latauksia, ei odottamista.",
      feature1Point1: "Suora linkin tekstitys - ei latauksia tarvita",
      feature1Point2: "Tuki kaikille suurille alustoille",
      feature1Point3: "Käsittele kokonaisia soittolistoja kerralla",
      feature1Point4: "Toimii yksityisvideoilla (luvalla)",
      feature2Title: "Automaattiset tekstitykset ja alatekstit",
      feature2Desc: "Luo tarkkoja tekstityksiä heti kaikille opetusvideoillesi. Tee sisällöstä saatavilla olevaa kuulovammaisille opiskelijoille, ei-äidinkielisille tai niille, jotka haluavat lukea mukaan.",
      feature2Point1: "SRT, VTT ja TXT vientiformaatit",
      feature2Point2: "Sanatason aikaleimat täydellistä synkronointia varten",
      feature2Point3: "Muokkaa ja mukauta tekstityksiä helposti",
      feature2Point4: "Lataa suoraan takaisin YouTubeen",
      feature2Visual1: "Kielenkääntäminen",
      feature2Visual2: "Tee sisällöstäsi globaalisti saatavilla olevaa",
      feature3Title: "Järjestä kursseittain ja luokittain",
      feature3Desc: "Luo kansioita järjestelläksesi tekstityksesi kurssin, aiheen tai lukukauden mukaan. Pidä kaikki opetussisältösi siististi luokiteltuna ja helposti haettavissa. Rakenna kattava saatavilla olevien kurssimateriaalien kirjasto.",
      feature3Point1: "Luo rajoittamattomasti kansioita ja alikansioita",
      feature3Point2: "Merkitse videot aiheen tai vaikeustason mukaan",
      feature3Point3: "Järjestä useita tekstityksiä joukkona",
      feature3Point4: "Hae kaikesta sisällöstäsi heti",
      feature3VisualTitle: "Kurssikirjastosi",
      feature3Folder1: "Matematiikka 101",
      feature3Folder2: "Fysiikan luennot",
      feature3Folder3: "Biologian laboratoriovideot",
      feature3Folder4: "Historiadokumentit",
      feature3Folder5: "Kieltenoppiminen",
      feature4Title: "AI - Äänitiedoston tekstitys opinto-oppaaksi",
      feature4Desc: "Älä vain jaa tallenteita. Muunna luennot automaattisesti tekstiksi ja muut äänitiedostot yksityiskohtaisiksi opinto-oppaiksi, joissa on yhteenvedot ja keskeiset käsitteet tehokkaaseen opiskelijoiden kertaukseen. Vie TXT-, DOCX- tai PDF-muodoissa.",
      feature4Point1: "TXT yksinkertaista tekstin muokkausta varten",
      feature4Point2: "DOCX muotoilluista asiakirjoista",
      feature4Point3: "PDF helposta jakamisesta ja tulostamisesta",
      feature4Point4: "Vie useita tiedostoja kerralla",
      workflowTitle: "Miten se toimii:",
      workflowSubtitle: "Videolinkistä saatavilla olevaan tekstitykseen ja opintomateriaaleihin minuuteissa",
      workflowStep1Title: "Lataa luentosi",
      workflowStep1Desc: "Lataa mikä tahansa ääni- tai videotiedosto (MP3, MP4, WAV) tai liitä YouTube-linkki",
      workflowStep2Title: "AI-tekstitys",
      workflowStep2Desc: "Tekoälymme tekstittää äänen, erottaa puhujat ja tunnistaa keskeiset aiheet",
      workflowStep3Title: "Luo tekstitykset",
      workflowStep3Desc: "Luo automaattisesti täydellisesti synkronoidut alatekstit",
      workflowStep4Title: "1. Vie Opintopolkuja",
      workflowStep4Desc: "2. Lataa teksti, yhteenveto tai vie se luodaksesi lopullisen opinto-oppaan",
      useCasesTitle: "3. Täydellinen jokaiseen",
      useCasesSubtitle: "5. Katso, kuinka opettajat käyttävät NeverCapia oppimisen tehostamiseen",
      useCase1Title: "6. Nauhoitetut Luennot",
      useCase1Text: "7. Muunna kokonaiset lukukaudet nauhoitettuja luentoja. Opiskelijat voivat etsiä tiettyjä aiheita, kerrata keskeisiä käsitteitä eivätkä koskaan jää paitsi tärkeästä tiedosta.",
      useCase2Title: "8. Verkkokurssit",
      useCase2Text: "9. Tee verkkokurssistasi kansainvälisille opiskelijoille saatavilla yli 100 kielellä. Lisää osallistujamääriä ja tyytyväisyyttä.",
      useCase3Title: "10. Opintomateriaalit",
      useCase3Text: "11. Käytä tekoälyä muuntaaksesi äänitiedostot opinto-oppaiksi video-oppaista ja luennoista. Ihanteellista opiskelijoille, jotka pitävät lukemisesta tai tarvitsevat nopeasti kerrattavaa, haettavaa tekstiä.",
      useCase4Title: "12. Saavutettavuusvaatimukset",
      useCase4Text: "14. Käänteinen Luokkahuone",
      useCase5Title: "15. Jaa videoluennoit tekstityksinä ennen tuntia. Opiskelijat voivat kerrata omalla tahdillaan ja tulla valmiina keskusteluihin.",
      useCase5Text: "16. Tutkimus & Lähdeviittaukset",
      useCase6Title: "17. Auta opiskelijoita lainaamaan videolähteet tarkasti aikaleimoilla. Täydellinen tutkimusprojekteihin ja akateemisiin papereihin.",
      useCase6Text: "18. Luottavat",
      testimonialTitle: "19. 50 000+ Opettajaa",
      testimonialSubtitle: '21. "Olen käyttänyt NeverCapia matematiikka-oppaani koko YouTube-kanavan tekstittämiseen. Mikä ennen kesti viikkoja muilla palveluilla, vie nyt tunteja. Linkkien suora liittäminen ja välittömät tekstitykset ovat muuttaneet saavutettavan sisällön luomistani. Kansainväliset opiskelijani rakastavat erityisesti monikielisiä tekstityksiä!"',
      testimonialText: "22. Prof. Karen Mitchell",
      testimonialAuthorName: "23. Matematiikan professori, verkkopedagogi",
      testimonialAuthorRole: "24. Tee kaikesta koulutuksellisesta sisällöstäsi saavutettavaa",
      ctaTitle: "25. Liity tuhansiin opettajiin, jotka käyttävät todella rajatonta tekstitystä",
      ctaSubtitle: "26. Kokeile NeverCapia Ilmaiseksi",
      ctaButton: "27. Ominaisuudet",
        featuresTitle2: "Videoiden tekstitykseen",
        grid: "Äänitiedosto opinto-oppaaksi",
        useCasesTitle2: "4. Koulutustarpeeseen",
        testimonialTitle2: "20. Katso, miksi opettajat ympäri maailman valitsevat NeverCapin"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Lataa YouTube-videot MP4-muodossa",
        "placeholder": "Etsi tai liitä YouTube-linkkisi tähän",
        "clear_icon": "Tyhjennä syöte",
        "Download": "Lataa",
        "loading_text": "Käsitellään linkkiä latausta varten. Pysy sivulla.",
        "howToDownload": "Kuinka ladata?",
        "tutorial": "Katso opetusvideo"
      },
      part2: {
        "title": "Näin muutat YouTube-videon ladattavaksi MP4-tiedostoksi kolmessa helpossa vaiheessa",
        "steps": [
                {
                  title: "Kopioi URL",
                  content: "Avaa haluamasi YouTube-video ja kopioi linkki selaimen osoitepalkista."
                },
                {
                  title: "Liitä linkki",
                  content: "Siirry videolataustyökaluusi ja liitä URL syötekenttään."
                },
                {
                  title: "Lataa MP4",
                  content: "Kun käsittely on valmis, napsauta latauspainiketta tallentaaksesi MP4-tiedostosi."
                }
              ]
      },
      part3: {
        content: [
                "Oletko koskaan tarvinnut katsella YouTube-videoita offline-tilassa?",
                "Olitpa sitten matkalla metrossa, lentokoneessa, opiskelemassa tärkeää opetusvideota, syventymässä taitojen kehittämiseen tai arkistoimassa tärkeää videomateriaalia – luotettava offline-käyttö on yleinen ongelma. Tässä lataajamme loistaa.",
                "Lataajamme avulla voit nopeasti ja helposti muuntaa YouTube-videot MP4-muotoon ladattavaksi. Tallenna ne laitteellesi ja katso milloin tahansa.",
                "Prosessi on nopea, helppo ja vaivaton. Ladattuasi voit nauttia suosikkivideoistasi milloin ja missä tahansa – ilman internet-yhteyttä."
              ]
      },
      part4: {
        content: ["Tässä 5 suurta hyötyä YouTube-videoiden", "lataamisesta MP4-tiedostoina"],
        list: [
                {
                  title: "Säästä datakuluissa:",
                  content: "YouTube-videoiden katselu kuluttaa normaalisti paljon mobiilidataa. Lataamalla ne offline-katselua varten voit välttää nämä tarpeettomat kustannukset."
                },
                {
                  title: "Katso missä ja milloin tahansa:",
                  content: "Nauti videoistasi saumattomasti, vaikka internetyhteys olisi heikko. Ei enää puskurointiongelmia."
                },
                {
                  title: "Helppo arkistointi ja säilytys:",
                  content: "Videoiden tallentaminen MP4-muodossa helpottaa henkilökohtaisen kokoelmasi rakentamista, erityisesti arvokkaan tai tärkeän sisällön osalta."
                },
                {
                  title: "Yksinkertaisempi jakaminen:",
                  content: "MP4-tiedoston jakaminen on paljon helpompaa kuin linkin lähettäminen. Voit lähettää videotiedoston suoraan sovelluksien kuten WhatsAppin tai Instagramin kautta, välttäen YouTubeen siirtymisen."
                },
                {
                  title: "Heti katsottavissa, jaettuja hetkiä:",
                  content: "Haluatko innostuneesti näyttää suosikkivideosi läheisille ystäville tai perheenjäsenille? Ladattuasi MP4:n voitte kaikki katsoa sen sujuvasti heti, ilman latauksen aiheuttamia kömpelöitä taukoja."
                }
              ]
      },
      part5: {
        title: "Miksi lataajamme erottuu joukosta",
        cards: [
                {
                  title: "Yhden klikkauksen yksinkertaisuus",
                  content: "Vaivaton asennus ja intuitiivinen käyttö."
                },
                {
                  title: "Salamannopea, rajoittamaton",
                  content: "Muunna ja lataa huippunopeudella – ei rajoituksia."
                },
                {
                  title: "Muunna lennosta",
                  content: "Käsittele tiedostosi välittömästi, ei odotusta."
                },
                {
                  title: "Ei mainoksia, ei häiriötekijöitä",
                  content: "Nauti puhtaalta käyttöliittymältä ilman ponnahdusikkunoita, bannereita tai keskeytyksiä – vain saumatonta videomuunnosta."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Alkuperäinen laatu taattu",
                  content: "Latauksesi säilyttävät lähdevideon täyden resoluution täydellistä toistoa varten joka kerta."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Toimii kaikkialla",
                  content: "Täysin yhteensopiva kaikkien selaimien ja laitteiden kanssa."
                }
              ]
      },
      part6: {
        title: ["Tehosta YouTube-videoidesi latauksia", "Lataajan avulla"],
        content: [
                "Vaivaton YouTube MP4-muunnos: Nopea, helppo ja ilmainen.",
                "Tässä me erityisesti loistamme. Käyttäjäystävällinen käyttöliittymämme on suunniteltu kaikille – teknistä osaamista ei tarvita. Kokemuksestasi riippumatta voit muuntaa videot välittömästi. Rekisteröitymistä ei vaadita: Saat juuri mitä tarvitset, heti.",
                "Ole huoletta – ladatut MP4-tiedostosi säilyttävät alkuperäisen videon laadun ja selkeyden, aivan kuten YouTube-katselussa.",
                "Toimii kaikkialla missä sinäkin. Täysin yhteensopiva kaikkien suurten alustojen ja laitteiden kanssa. Olitpa sitten Windows, macOS, Linux, Android tai iOS – käytätkö älypuhelinta, tablettia tai tietokonetta – voit ladata videoita saumattomasti."
              ]
      },
      part7: {
        title: "Keskeisiä kysymyksiä YouTube-videoiden lataamisesta",
        list: [
                {
                  question: "Voinko ladata YouTube-videon, jos se on tekijänoikeussuojattu?",
                  answer: "Tekijänoikeussuojattujen YouTube-videoiden lataaminen ilman tekijänoikeuden omistajan lupaa on laitonta."
                },
                {
                  question: "Onko tämä lataustyökalu turvallinen?",
                  answer: "Kyllä, se on turvallinen ja luotettava. Emme vaadi käyttäjiltä henkilökohtaisia tietoja ja otamme vahvat toimet viruksia vastaan. Muistutamme, että tulee aina olla varovainen ladatessaan tiedostoja internetistä: välttä epäilyttäviä linkkejä ja tiedostoja."
                },
                {
                  question: "Mitä kieliä YouTube MP4-lataus tukee?",
                  answer: "Palvelumme tukee YouTube-videoiden lataamista kaikilla suosituilla kielillä."
                },
                {
                  question: "Mitkä tekijät vaikuttavat YouTube-videon latausaikaan?",
                  answer: "Vaikka takaamme mahdollisimman nopean latauskokemuksen, latausaikaan vaikuttavat myös tekijät kuten videon pituus ja internet-yhteytesi nopeus."
                },
                {
                  question: "Minne MP4-video tallentuu, kun lataan sen älypuhelimella?",
                  answer: 'Ladattuaan MP4-tiedoston älypuhelimeen, löydät sen yleensä laitteesi tiedostonhallintaohjelman "Lataukset"-kansiosta.'
                },
                {
                  question: "Heikentääkö YouTube-videon lataaminen MP4-muotona videon laatua?",
                  answer: "Ei. YouTube-videoiden lataaminen MP4-muotona käyttäen työkaluamme säilyttää alkuperäisen videon laadun. Muunnosprosessi säilyttää lähdelaadun, joten saat saman katselukokemuksen kuin YouTubessa."
                }
              ]
      },
        err1: "YouTube-linkin muotoiluvauri.",
        err2: "Valitettavasti! Toimimme tällä hetkellä vain YouTube-linkkien kanssa. Jos tarvitset tukea muille sivustoille, pidämme sinut ajan tasalla, kun lisäämme sen tulevaisuudessa.",
        videoDownload: {
              title: "Lataa YouTube-videoita MP4-muodossa. Ilmaista, nopeaa ja ilman mainoksia.",
              description: "Kiitos, että valitsit palvelumme! Arvostamme luottamustasi ja toivomme, että se paransi kokemustasi. Jos voisit jakaa verkkosivustomme ystäviesi kanssa, se olisi suuri apu.",
              downloadButton: "Lataa",
              downloadError: "Latausvirhe."
            }
    }
  },
  About: {
    Hero: {
      "badge": "Alaa johtava tekoälytekniikka",
      "title": "Tietoja",
      "highlighted_text": "NeverCap",
      "description": "Tehtävämme on tarjota tarkimmat ääni- ja videotekstityspalvelut. Hyödyntämällä alaa johtavaa tekoälytekniikkaa saavutamme yli 96 % tarkkuuden tekstityksissä. Joillakin suurilla kielillä teknisten optimointien ansiosta tarkkuus voi olla jopa 99 %."
    },
    Stats: {
      "title": "Meidän",
      "highlighted_text": "Vaikutus",
      "subtitle": "Edistetään globaalia viestintää huipputeknologialla",
      "metrics": [
            {
              "value": "96 %+",
              "label": "Tarkkuusaste",
              "description": "Alaa johtava tekstitystarkkuus kehittyneellä tekoälyllä"
            },
            {
              "value": "100+",
              "label": "Tuetut kielet",
              "description": "Puheentunnistus globaalille sisällölle"
            },
            {
              "value": "249+",
              "label": "Käännöskielet",
              "description": "Käännä tekstitys melkein mihin tahansa kieleen"
            }
          ]
    },
    Mission: {
      "title": "Miksi valita",
      "highlighted_text": "NeverCap",
      "subtitle": "Uskomme kielirajojen murtamiseen ja sisällön saavutettavuuteen kaikille",
      "features": [
            {
              "icon": "🎯",
              "title": "Vertaansa vailla oleva tarkkuus",
              "description": "Tekoälymallimme kehittyvät jatkuvasti tarjoten yli 96 % tekstitystarkkuuden, ja joillakin suurilla kielillä kehittyneen optimoinnin ansiosta jopa 99 % tarkkuuden."
            },
            {
              "icon": "🌍",
              "title": "Globaali kielituki",
              "description": "Yli 100 kielen puheentunnistus ja yli 249 kielen käännöstoiminnot tekevät sisällöstäsi todella globaalin."
            },
            {
              "icon": "⚡",
              "title": "Salamannopea käsittely",
              "description": "Käsittele tuntien pituinen ääni- ja videosisältö minuuteissa. Optimoitu tekoälyputki varmistaa nopeat tekstitykset laadun kustannuksella."
            },
            {
              "icon": "🔒",
              "title": "Yritystason turvallisuus",
              "description": "Tietoturvasi on prioriteettimme. Käytämme alan standardeja noudattavaa salausmenetelmää ja noudatamme globaaleja tietosuoja-asetuksia pitääksemme sisältösi turvassa ja luottamuksellisena."
            }
          ]
    },
    Company: {
      "title": "Yrityksen",
      "highlighted_text": "Tiedot",
      "subtitle": "Ota yhteyttä kaikissa kysymyksissä tai tukipyynnöissä",
      "details": [
            {
              "label": "Yrityksen nimi",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Pääkonttori",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Yhdysvallat"]
            },
            {
              "label": "Ota yhteyttä",
              "value": ["Sähköposti", "Tuki saatavilla 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Valmiina kokeilemaan eroa?",
      "subtitle": "Liity tuhansien ammattilaisten joukkoon, jotka luottavat NeverCapiin tekstitystarpeissaan",
      "button": "Kokeile NeverCapia ilmaiseksi →",
      "disclaimer": "Luottokorttia ei vaadita • Aloita tekstitys sekunneissa"
    }
  },
  Privacy: {
    title: "Tietosuoja",
    titleGradient: "Käytäntö",
    subtitle: "Opi, miten keräämme, käytämme ja suojelemme henkilötietojasi",
    "lastUpdated": "Viimeksi päivitetty: {date}",
    "lastUpdatedDate": "21. heinäkuuta 2025",
    "privacyPolicyTitle": "Tietosuojakäytäntö",
    "policyAgreement": "Lue tämä tietosuojakäytäntö huolellisesti ja varmista, että ymmärrät sen. Käyttämällä mitä tahansa Palveluitamme hyväksyt tämän tietosuojakäytännön. Jos et hyväksy henkilötietojesi käyttöä tämän käytännön mukaisesti, sinun on lopetettava Palveluidemme käyttö välittömästi.",
    "policyOverview": "Tässä käytännössä kerromme: mitä tietoja keräämme ja miksi; miten tietojasi käsitellään; ja oikeutesi tietoihisi. Emme myy tietojasi.",
    "scopeTitle": "1. Tietosuojakäytännön soveltamisala",
    "scopeDescription": "Tämä tietosuojakäytäntö koskee vain Palveluiden käyttäjien tietojen keräämistä ja käsittelyä. Tämä tietosuojakäytäntö ei koske kolmansien osapuolten toimittamia linkitettyjä palveluja, verkkosivuja tai ohjelmistoja (oli linkit meidän tai muiden käyttäjien jakamia) eikä kolmansien osapuolten sisältöä, tietoja, sovelluksia tai materiaaleja. Suosittelemme tarkistamaan kolmannen osapuolen verkkosivuston tai ohjelmiston tietosuojakäytännöt ennen tietojen antamista niille.",
    "collectionTitle": "2. Mitä keräämme ja miksi",
    "collectionPrinciple": "Ohjeena on kerätä vain tarvitsemamme tiedot. Käytännössä tämä tarkoittaa seuraavaa:",
    "identityTitle": "2.1 Henkilöllisyys ja pääsy",
    "identityDescription": "Kun rekisteröidyt johonkin tuotteistamme, pyydämme henkilöyttäviä tietoja, kuten nimeäsi ja sähköpostiosoitetta. Tämä on tarpeen tuotteen perustoimintojen tarjoamiseksi ja jotta voimme lähettää sinulle tuotepäivityksiä ja muuta oleellista tietoa.",
    "billingTitle": "2.2 Laskutustiedot",
    "billingDescription": "Jos rekisteröidyt maksulliseen tuotteeseen, sinua pyydetään antamaan maksutietosi ja laskutusosoitteesi. Maksutiedot lähetetään suoraan maksunvälittäjällemme eivätkä koskaan saavu palvelimillemme.",
    "productInteractionsTitle": "2.3 Tuotteen käyttö",
    "productInteractionsDescription": "Tallennamme palvelimillemme sisällön, jonka lataat, vastaanotat tai säilytät tuotetileissäsi. Ellei sisältöä poisteta, säilytämme sitä niin kauan kuin tilisi on aktiivinen.",
    "websiteInteractionsTitle": "2.4 Verkkosivuston käyttö",
    "websiteInteractionsDescription": "Keräämme tietoa selausaktiviteetistasi analytiikkaa ja tilastoja varten, kuten konversiotestaukseen ja uusien tuotesuunnitelmien kokeiluun. Tämä sisältää esimerkiksi selain- ja käyttöjärjestelmäversiosi, IP-osoitteesi, vierailemasi verkkosivut ja niiden latausajat sekä verkkosivuston, jolta tulit meille. Jos sinulla on tili ja olet kirjautunut sisään, nämä verkkoseurantatiedot liitetään IP-osoitteeseesi ja käyttäjätiliisi, kunnes tilisi ei ole enää aktiivinen.",
    "cookiesTitle": "2.5 Evästeet",
    "cookiesDescription1": "Käytämme myös pysyviä ensimmäisen osapuolen evästeitä ja joitain kolmannen osapuolen evästeitä tiettyjen asetusten tallentamiseen, sovellustemme helpottamiseen sekä A/B-testaukseen ja analytiikan tukemiseen.",
    "cookiesDescription2": "Eväste on selaimesi tallentama tekstinpätkä. Se voi auttaa muistamaan kirjautumistiedot ja sivuston asetukset. Se voi myös kerätä tietoa, kuten selaintyyppisi, käyttöjärjestelmäsi, vierailemasi sivut, vierailun keston, katselusi sisällön ja muuta napsautusdataa. Voit säätää evästeiden säilytysasetuksia ja hyväksyä tai estää yksittäisiä evästeitä selaimen asetuksissasi, vaikka sovelluksemme eivät toimi ja muut palvelumme osa-alueet eivät välttämättä toimi kunnolla, jos evästeet on kytketty pois päältä.",
    "correspondenceTitle": "2.6 Vapaaehtoinen kirjeenvaihto",
    "correspondenceDescription": "Kun lähetät meille sähköpostia kysymyksen tai avunpyynnön kanssa, säilytämme tämän kirjeenvaihdon, mukaan lukien sähköpostiosoitteesi, jotta meillä on historia aiemmasta kirjeenvaihdosta, johon viitata, jos otat yhteyttä tulevaisuudessa.",
    "accessTitle": "3. Milloin käytämme tai jaamme tietojasi",
    "accessDescription1": "Tarjotaksemme pyytämiäsi tuotteita tai palveluita. Käytämme joitain kolmannen osapuolen alihankkijoita sovellustemme pyörittämiseen ja Palvelujen tarjoamiseen sinulle. Tämä sisältää pilvi- ja analytiikkapalveluntarjoajat.",
    "accessDescription2": "Väärinkäytösten tutkimiseen, estämiseen tai toimenpiteisiin. Asiakastilin käyttö väärinkäytön tutkimisen yhteydessä on viimeinen keino. Haluamme suojata sekä asiakkaidemme että meille ongelmista raportoivien henkilöiden yksityisyyttä ja turvallisuutta, ja teemme parhaamme vastuiden tasapainottamiseksi koko prosessin ajan. Jos huomaamme, että käytät tuotteitamme kielletyllä tavalla, ryhdymme tarvittaviin toimenpiteisiin, mukaan lukien asianomaisten viranomaisten ilmoittaminen tarvittaessa.",
    "accessDescription3": "Kun sovellettava laki niin vaatii.",
    "dataRequests": "Käyttäjätietopyynnöt. Käytäntömme on olla vastaamatta viranomaisten käyttäjätietopyyntöihin, ellemme ole oikeudenkäynnin pakottamia tai poikkeustapauksissa hätäpyynnön yhteydessä. Jos Yhdysvaltain lainvalvontaviranomaisilla on tarvittava etsintälupa, rikoskuulutus tai tuomioistuimen määräys, joka edellyttää tietojen jakamista, meidän on kuitenkin noudatettava. Vastaamme myös vain Yhdysvaltain ulkopuolisten viranomaisten pyyntöihin, jos Yhdysvaltain hallitus pakottaa meidät keskinäisen oikeusavun sopimuksen tai sopimuksen mukaisin menettelyin. Käytäntömme on ilmoittaa vaikutuksista käyttäjille ennen tietojen jakamista, ellemme ole laillisesti estettyjä tekemästä niin, lukuun ottamatta joitain hätätapauksia.",
    "preservationRequests": "Tietojen säilytyspyynnöt. Vastaavasti noudatamme tietojen säilytyspyyntöjä vain, jos Yhdysvaltain liittovaltion tallennettujen viestien laki, 18 U.S.C. § 2703(f), tai asianmukaisesti toimitettu Yhdysvaltain siviiliasioiden kuulutus pakottaa meidät siihen. Emme jaa säilytettyjä tietoja, ellei laki niin edellytä tai tuomioistuimen määräys, jota emme halua valittaa, pakota meitä siihen. Lisäksi, ellemme saa asianmukaista etsintälupaa, tuomioistuimen määräystä tai kuulutusta ennen säilytysajan päättymistä, tuhomme säilytysajan lopussa kaikki säilytetyt asiakastietojen kopiot.",
    "taxAudits": "Jos veroviranomainen tarkastaa meitä, saatamme joutua jakamaan laskutukseen liittyviä tietoja. Tällöin jaamme vain vähimmäismäärän tarvittavia tietoja, kuten laskutusosoitteita ja verovapautustietoja.",
    "securityTitle": "4. Miten suojaamme tietojasi",
    "securityDescription": "Kaikki tiedot salataan SSL/TLS:llä siirrettäessä palvelimilta selaimellesi.",
    "deletionTitle": "5. Mitä tapahtuu, kun poistat sisältöä",
    "deletionDescription": "Jos poistat sisältöä, siihen ei pääse enää heti käsiksi.",
    "locationTitle": "6. Sivuston ja tietojen sijainti",
    "locationDescription": "Tuotteemme ja muut verkkosivustomme toimivat Yhdysvalloissa. Jos sijaitsee Euroopan unionissa, Britanniassa tai muualla Yhdysvaltojen ulkopuolella, huomaa, että kaikki meille antamasi tiedot siirretään ja tallennetaan Yhdysvaltoihin. Käyttämällä verkkosivustoja tai Palveluitamme ja/tai antamalla meille henkilötietojasi suostut tähän siirtoon.",
    "childrenTitle": "7. Lasten tietosuoja",
    "updatesTitle": "8. Tietosuojakäytännön päivitykset",
    "updatesDescription": "Voimme päivittää tätä käytäntöä tarpeen mukaan noudattaaksemme asianomaisia säännöksiä ja heijastaaksemme uusia käytäntöjä. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme tämän sivun yläosassa olevan päivämäärän.",
    "contactTitle": "9. Ota yhteyttä",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "osoitteeseen",
      policyDescription: 'Tämä käytäntö kuvailee, miten NeverCap (jäljempänä "NeverCap", "me", "meidän") kerää, käyttää ja luovuttaa henkilökohtaisia tietojasi, kun käytät palvelujamme, verkkosivustoja ({url}) ja ohjelmistoja (yhdessä "Palvelut").',
      childrenDescription: "Palvelut eivät kohdistu lapsille, emmekä tahallaan kerää henkilötietoja alle 13-vuotiailta. Jos olet alle 13-vuotias, älä lähetä henkilötietoja Palvelujen kautta. Jos uskot, että lapsi on antanut meille henkilötietoja tämän käytännön vastaisesti, ota yhteyttä sähköpostitse {at} {email}.",
      contactDescription: "Jos sinulla on kysyttävää, kommentteja tai valituksia tietosuojakäytännöstämme, ota yhteyttä {at} {email}, ja pyrimme käsittelemään valituksesi mahdollisimman pian."
},
  TermsOfUse: {
    title: "Käyttöehdot",
    titleGradient: "Palvelu",
    subtitle: "Lue nämä ehdot huolellisesti ennen palveluidemme käyttöä",
    "lastUpdated": "Viimeksi päivitetty: {date}",
    "lastUpdatedDate": "21. heinäkuuta 2025",
    "termsOfServiceTitle": "Käyttöehdot",
    "thankYou": "Kiitos, että käytät tuotteitamme!",
    "companyDefinition": 'Kun tässä asiakirjassa viitataan "Yhtiöön", "meihin", "meidän" tai "me", tarkoitamme NeverCapia.',
    "servicesDefinition": 'Kun puhumme "Palveluista", tarkoitamme mitä tahansa NeverCapin luomaa ja ylläpitämää tuotetta, olipa se toimitettu selaimessa, työpöytäsovelluksessa, mobiilisovelluksessa tai muussa muodossa.',
    "termsUpdate": "Saatamme päivittää näitä Käyttöehtoja tulevaisuudessa. Tyypillisesti muutokset on tehty selventämään ehtoja linkittämällä laajennettuun politiikkaan. Merkittävien muutosten yhteydessä päivitämme sivun yläosassa olevan päivämäärän ja ilmoitamme tilinomistajille asianmukaisesti.",
    "acceptanceTitle": "1. Sopimuksen hyväksyminen",
    "acceptanceDescription1": "Käyttämällä Palveluitamme hyväksyt tämän Sopimuksen, joka siten muodostaa sitovan sopimuksen sinun ja NeverCapin välille. Vakuutat, että sinulla on oikeus hyväksyä nämä Ehdot ja että olet täysi-ikäinen solmiaksesi sitovan sopimuksen. NeverCapin hyväksyntä on ehdollinen siitä, että hyväksyt kaikki tämän Sopimuksen ehdot.",
    "eligibilityRequirement": "Palvelut eivät ole tarkoitettu alle 18-vuotiaille, eikä niitä saa käyttää. Käyttämällä Palveluita vakuutat täyttäväsi edellä mainitun kelpoisuusvaatimuksen.",
    "userResponsibility": 'Termit "sinä", "sinun", "itsesi" sisältävät myös työntekijäsi, edustajasi ja muut henkilöt, joille annat pääsyn Palveluihin Tilisi kautta. Olet vastuussa siitä, että kaikki Tilisi kautta Palveluihin pääsevät henkilöt tietävät näistä Ehdoista ja noudattavat niitä.',
    "termsRevision": "NeverCap pidättää oikeuden muokata ja päivittää näitä Ehtoja harkintansa mukaan. Kaikki muutokset tulevat voimaan heti julkaisun jälkeen. Palveluiden jatkaminen muutosten jälkeen tarkoittaa, että hyväksyt ja suostut muutoksiin. Sinun odotetaan tarkistavan tätä sivua ajoittain ollaksesi tietoinen muutoksista, koska ne ovat sitovia.",
    "servicesTitle": "2. NeverCapin Palvelut",
    "servicesDescription1": "Palvelumme mahdollistavat äänikeskustelujen muuntamisen tekstiksi, jota voidaan hakea, kääntää ja jakaa muiden kanssa.",
    "servicesOptions": 'Voit valata käyttääkö ilmaista ("Ilmaiset Palvelut") tai tilauspohjaista maksullista versiota ("Maksulliset Palvelut").',
    "servicesAccess": "Tarjoamme Palvelut käyttöösi. Olet vastuussa kaikista Palveluiden käyttöön tarvittavista järjestelyistä.",
    "accountTermsTitle": "3. Tilin ehdot",
    "accountSecurity": "Olet vastuussa Tilisi turvallisuudesta. Yhtiö ei ole vastuussa tästä turvallisuusvelvoitteesta aiheutuvista vahingoista.",
    "lawfulUse": "Et saa käyttää Palveluita laittomiin, epäeettisiin tai moraalittomiin tarkoituksiin.",
    "contentResponsibility": "Olet vastuussa kaikesta Tilisi alla julkaistavasta sisällöstä ja toiminnoista, mukaan lukien muiden julkaisema sisältö, joilla on pääsy kirjautumistietoihisi tai omat kirjautumistietonsa Tilisi alla.",
    "humanRequirement": 'Sinun on oltava ihminen. "Bottien" tai muiden automaattisten menetelmien luomat tilit eivät ole sallittuja.',
    "paymentTitle": "4. Maksut, hyvitykset ja suunnitelman muutokset",
    "freeTrial": "Maksullisille Palveluille, joissa on ilmainen kokeilujakso, kerromme kokeilujakson pituuden rekisteröityessäsi. Kokeilujakson jälkeen sinun on maksettava etukäteen jatkaaksesi Palvelun käyttöä. Jos et maksa, nämä palvelut päättyvät.",
    "upgradePolicy": "Jos päivität ilmaisesta suunnitelmasta maksulliseen, veloitamme korttisi välittömästi ja laskutusjakso alkaa päivityspäivästä.",
    "taxes": "Kaikki hinnat ovat verottomia. Tarvittaessa perimme verot viranomaisten puolesta ja suoritamme ne viranomaisille. Muussa tapauksessa olet vastuussa kaikista veroista ja maksuista.",
    "refunds": "Kaikki ostot ovat palautuskelvottomia. Voit peruuttaa maksulliset palvelut milloin tahansa kirjautumalla Tilillesi. Tilaukset päättyvät nykyisen laskutusjakson lopussa, ellei toisin mainita.",
    "cancellationTitle": "5. Peruuttaminen ja irtisanominen",
    "cancellationPolicy": "Jos peruutat Palvelun ennen maksuaikaa, peruutus astuu voimaan välittömästi, etkä joudu maksamaan uudelleen. Emme automaattisesti hyvitä käyttämättömiä aikoja.",
    "terminationRights": "Pidätämme oikeuden keskeyttää tai irtisanoa Tilisi ja evätä Palveluiden käytön milloin tahansa ilman syytä. Keskeytyksellä estetään pääsy Tiliisi ja sen sisältöön. Irtisanominen johtaa Tilisi poistamiseen ja kaiken sisällön menetykseen. Pidätämme myös oikeuden evätä Palveluiden käyttö keneltä tahansa milloin tahansa.",
    "abusePolicy": "Yhtiön työntekijöiden tai edustajien suullinen, fyysinen, kirjallinen tai muu väärinkäyttö (mukaan lukien väkivallan tai kostouhkaukset) voi johtaa välittömään tilin irtisanomiseen.",
    "submissionsTitle": "6. Lähetykset",
    "submissionsDescription": 'Hyväksyt, että kaikki sivustoon liittyvät kysymykset, kommentit, ehdotukset, ideat, palaute tai muu tieto ("Lähetykset") ovat luottamuksellisia ja meidän yksinomaista omaisuuttamme. Meillä on yksinoikeus käyttää ja levittää niitä ilman korvausta tai tunnustusta. Luovut kaikki moraaliset oikeutesi Lähetyksiin ja vakuutat niiden alkuperäisyydestä tai oikeudestasi lähettää ne. Et voi vaatia meitä vastuuseen Lähetysten oikeuksien loukkaamisesta.',
    "uptimeTitle": "7. Käytettävyys ja turvallisuus",
    "serviceAvailability": 'Käytät Palveluita omalla vastuullasi. Tarjoamme Palvelut "sellaisenaan" ja "saatavuuden mukaan". Emme tarjoa palvelutasosopimuksia, mutta otamme sovellustemme käytettävyyden vakavasti.',
    "throttlingPolicy": "Pidätämme oikeuden rajoittaa tilin käyttöä harvinaisissa tapauksissa, joissa käyttäjän toiminta vaarantaa Palvelun vakautta muille käyttäjille. Yritämme useimmissa tapauksissa ottaa yhteyttä ennen toimia.",
    "dataSecurity": "Suojaamme ja turvaamme tietojasi varmuuskopioinnilla, redundanssilla ja salauksella. Pakotamme salauksen julkisessa Internetissä tapahtuvaan tiedonsiirtoon.",
    "thirdPartyVendors": "Käytämme kolmannen osapuolen toimittajia ja isännöintipartnereita tarjotaksemme Palveluiden käyttöön tarvittavan laitteiston, ohjelmiston, verkon, tallennustilan ja muun teknologian.",
    "siteManagementTitle": "8. Sivuston hallinta",
    "siteManagementDescription": "Pidätämme oikeuden, mutta emme velvollisuutta: (1) valvoa sivustoa Käyttöehtojen rikkomuksia varten; (2) ryhtyä oikeustoimiin Käyttöehtoja tai lakia rikkovia vastaan; (3) evätä, rajoittaa tai poistaa sisältöä; (4) poistaa liian suuria tai järjestelmää rasittavia tiedostoja; ja (5) hallita sivustoa oikeuksiemme ja omaisuutemme suojelemiseksi.",
    "copyrightTitle": "9. Tekijänoikeudet ja sisällön omistus",
    "copyrightCompliance": "Kaiken Palveluissa julkaistavan sisällön on noudatettava Yhdysvaltain tekijänoikeuslakia.",
    "ipRights": "Emme vaadi tekijänoikeuksia materiaaliisi. Kaikki lähettämäsi materiaali pysyy sinun omaisuuttanasi.",
    "contentModeration": "Emme ennakkotarkasta sisältöä, mutta pidätämme oikeuden poistaa sisältöä harkintamme mukaan.",
    "prohibitedExploitation": "Et saa kopioida, myydä tai hyödyntää Palveluita ilman Yhtiön kirjallista lupaa.",
    "impersonationProhibition": "Et saa muokata muita verkkosivustoja antaakseen väärän kuvan niiden yhteydestä Palveluihin tai Yhtiöön.",
    "dmcaPolicy": "Kunnioitamme muiden tekijänoikeuksia. Jos uskot, että sivustomme sisältö loukkaa tekijänoikeuksiasi, ota välittömästi yhteyttä. Ilmoituksesi kopio lähetetään materiaalin lähettäjälle. Huomaa, että väärät ilmoitukset voivat aiheuttaa vahingonkorvausvelvollisuuden.",
    "prohibitedActivitiesTitle": "10. Kiellettyjä toimia",
    "generalProhibition": "1. Et saa käyttää Sivustoa muuhun tarkoitukseen kuin siihen, jota varten olemme sen tarjonneet. Sivustoa ei saa käyttää kaupallisiin tarkoituksiin, paitsi niihin, jotka olemme nimenomaisesti hyväksyneet.",
    "userObligations": "2. Sivuston käyttäjänä sitoudut olemaan:",
    "dataScraping": "3. Keräämällä tai kokoamalla järjestelmällisesti tietoja tai muuta sisältöä Sivustolta suoraan tai välillisesti kokoelmaa, tietokantaa tai hakemistoa varten ilman kirjallista lupaa.",
    "fraud": "4. Huijaamalla, harhauttamalla tai johtamalla harhaan meitä tai muita käyttäjiä, erityisesti yrityksissä saada käyttäjien arkaluonteisia tilitietoja, kuten salasanoja.",
    "securityInterference": "5. Ohittaen, poistaen käytöstä tai muuten häiritsemällä Sivuston turvallisuuteen liittyviä ominaisuuksia, mukaan lukien ominaisuuksia, jotka estävät sisällön käytön tai kopioinnin tai rajoittavat Sivuston ja/tai sen sisällön käyttöä.",
    "defamation": "6. Halventamalla, tahraamalla tai muuten vahingoittamalla mielestämme meitä ja/tai Sivustoa.",
    "harassment": "7. Käyttämällä Sivustolta saatuja tietoja toisen henkilön häirintään, hyväksikäyttöön tai vahingoittamiseen.",
    "supportAbuse": "8. Käyttämällä tukipalveluitamme väärin tai jättämällä väärä ilmoitus väärinkäytöksistä tai sopimattomasta käyttäytymisestä.",
    "legalCompliance": "9. Käyttämällä Sivustoa lain tai säädösten vastaisesti.",
    "framingProhibition": "10. Kehystämällä Sivustoa tai linkittämällä siihen luvattomasti.",
    "malware": "11. Lähettämällä tai yrittämällä lähettää viruksia, troijalaisia tai muita häiritseviä materiaaleja, kuten suuraakkosten liiallista käyttöä tai roskapostitusta, jotka häiritsevät Sivuston käyttöä tai vaikuttavat sen toimintaan.",
    "automation": "12. Käyttämällä järjestelmää automaattisesti, kuten kommenttien tai viestien lähettämiseen skripteillä tai tiedon keräämiseen kaivostoimin tai vastaavilla työkaluilla.",
    "copyrightRemoval": "13. Poistamalla sisällöstä tekijänoikeus- tai muun omistusoikeusilmoituksen.",
    "impersonation": "14. Yrittämällä esiintyä toisena käyttäjänä tai henkilönä tai käyttää toisen käyttäjän käyttäjätunnusta.",
    "spyware": '15. Lähettämällä tai yrittämällä lähettää materiaalia, joka toimii passiivisena tai aktiivisena tiedonkeruumenetelmänä, kuten selkeitä gif-kuvia, 1×1 pikseleitä, web-bugeja, evästeitä tai vastaavia laitteita (joskus kutsuttu "vakoiluohjelmiksi" tai "passiivisiksi keruumenetelmiksi").',
    "disruption": "16. Häiritsemällä Sivustoa tai siihen liittyviä verkkoja tai palveluita aiheuttamalla kohtuutonta kuormitusta.",
    "employeeHarassment": "17. Häiritsemällä, ärsyttämällä, pelottelemalla tai uhkaamalla työntekijöitämme tai edustajiamme, jotka tarjoavat Sivuston osia sinulle.",
    "accessCircumvention": "18. Yrittämällä ohittaa Sivuston käyttöä rajoittavat toimenpiteet.",
    "codeCopying": "19. Kopioimalla tai muokkaamalla Sivuston ohjelmistoa, kuten Flashia, PHP:tä, HTML:ää, JavaScriptiä tai muuta koodia.",
    "reverseEngineering": "20. Purkamalla, dekompiloimalla tai kääntämällä Sivuston ohjelmistoa, paitsi mikäli laki sen sallii.",
    "bots": "21. Käyttämällä, kehittämällä tai levittämällä automaattisia järjestelmiä, kuten hämäreitä, bott",
    "buyingAgents": "Ostoedustajien tai hankintatoimijoiden käyttäminen ostoksiin tällä verkkosivustolla.",
    "unauthorizedUse": "Verkkosivuston luvaton käyttö, mukaan lukien käyttäjänimien ja/tai sähköpostiosoitteiden kerääminen sähköisesti tai muilla keinoin ei-toivottujen sähköpostien lähettämiseksi, tai käyttäjätilien luominen automatisoiduilla keinoilla tai väärin perustein.",
    "competition": "Verkkosivuston käyttäminen kanssamme kilpailussa oleviin tarkoituksiin tai verkkosivuston ja/tai sen sisällön käyttäminen tuloja tuottaviin tai kaupallisiin tarkoituksiin.",
    "advertising": "Verkkosivuston käyttäminen tavaroiden ja palveluiden mainostamiseen tai myyntiin.",
    "profileTransfer": "Profiilisi myyminen tai muu siirtäminen.",
    "featuresTitle": "11. Ominaisuudet ja viat",
    "featuresDescription": "Suunnittelemme palvelumme huolellisesti oman kokemuksemme sekä aikaa ja palautetta jakavien asiakkaiden kokemusten perusteella. Mikään palvelu ei kuitenkaan voi miellyttää kaikkia. Emme takaa, että palvelu täyttää erityiset vaatimuksesi tai odotuksesi.",
    "bugsDescription": "Testaamme kaikki ominaisuudet ennen julkaisua. Kuten mikään ohjelmisto, palvelumme sisältää väistämättä joitakin vikoja. Seuraamme ja korjaamme ilmoitetut viat, erityisesti turvallisuuteen tai yksityisyyteen liittyvät. Kaikkia ilmoitettuja vikoja ei korjata, emmekä takaa palvelun täydellistä virheettömyyttä.",
    "correctionsTitle": "12. Korjaukset",
    "informationAccuracy": "Tämän verkkosivuston tiedoissa saattaa olla painovirheitä, epätarkkuuksia tai puutteita, mukaan lukien kuvaukset, hinnat, saatavuus ja muut tiedot. Pidätämme oikeuden korjata virheet, epätarkkuudet tai puutteet sekä muuttaa tai päivittää verkkosivuston tietoja milloin tahansa ilman ennakkoilmoitusta.",
    "siteAvailability": "Emme voi taata verkkosivuston jatkuvaa saatavuutta. Laitteisto-, ohjelmisto- tai muita ongelmia saattaa esiintyä, tai verkkosivustoon liittyvää huoltoa saattaa tarvita, mikä aiheuttaa keskeytyksä, viivästyksiä tai virheitä. Pidätämme oikeuden muuttaa, tarkistaa, päivittää, keskeyttää, lopettaa tai muulla tavoin muokata verkkosivustoa milloin tahansa tai mistä tahansa syystä ilman ennakkoilmoitusta. Hyväksyt, ettemme ole vastuussa mistään menetyksistä, vahingoista tai hankaluuksista, jotka aiheutuvat verkkosivuston käyttökelvottomuudesta verkkosivuston seisokin tai lopetuksen aikana. Mikään näissä palveluehdoissa ei velvoita meitä ylläpitämään ja tukemaan verkkosivustoa tai tarjoamaan korjauksia, päivityksiä tai julkaisuja.",
    "userDataTitle": "13. Käyttäjätiedot",
    "userDataDescription": "Säilytämme tiettyjä verkkosivustolle siirtämiäsi tietoja verkkosivuston suorituskyvyn hallintaa ja verkkosivuston käyttöösi liittyviä tietoja varten. Vaikka varmuuskopioimme tietoja säännöllisesti, olet täysin vastuussa kaikista siirtämistäsi tiedoista tai verkkosivustolla tekemistäsi toimista. Hyväksyt, ettemme ole sinulle vastuussa tällaisten tietojen katoamisesta tai vaurioitumisesta, ja luovut täten oikeudesta ryhtyä toimiin meitä vastaan tällaisten tietojen katoamisen tai vaurioitumisen vuoksi.",
    "privacyPolicyTitle": "14. Tietosuojakäytäntö",
    "liabilityTitle": "15. Vastuu",
    "liabilityIntroduction": "Viittaamme vastuuseen useaan kertaan näissä ehdoissa, joten selitämme sen yhtenäisesti tässä:",
    "liabilityWaiver": "Ymmärrät ja hyväksyt nimenomaisesti, että yritys ei ole lain tai oikeudenmukaisuuden perusteella vastuussa sinulle tai kenellekään kolmannelle osapuolelle mistään suorista, välillisistä, satunnaisista, voiton menetykseen liittyvistä, erityisistä, seuraamuksellisista, rankaisevista tai kurinpidollisista vahingonkorvauksista (vaikka yritystä olisi varoitettu tällaisten vahinkojen mahdollisuudesta), mukaan lukien mutta ei rajoittuen voiton, liikearvon, käytön, tietojen tai muiden aineettomien tappioiden menetyksiin, jotka johtuvat: (1) palvelun käytöstä tai käyttökelvottomuudesta; (2) sisällön ja materiaalien virheistä, epätarkkuuksista; (3) verkkosivuston käytöstä ja käyttämisestä aiheutuneista ruumiinvammoista tai omaisuusvahingoista; (4) palvelun kautta ostettujen, hankittujen tavaroiden, tietojen, tietojen tai palveluiden tai viestien vastaanottamisen tai transaktioiden tekemisen korvaavien tavaroiden ja palveluiden hankintakustannuksista; (5) turvallisten palvelimiemme ja niissä tallennettujen henkilö- ja/tai taloustietojen luvattomasta käytöstä; (6) verkkosivuston tiedonsiirron keskeytyksistä tai pysäytyksistä; (7) kolmansien osapuolten verkkosivuston kautta tai verkkosivustoon lähettämistä vioista, viruksista, troijalaisista jne.; (8) sisällön ja materiaalien virheistä tai puutteista, tai verkkosivuston kautta julkaistun, lähetetyn tai muutoin toimitetun sisällön käytöstä aiheutuneista vahingoista; (9) palvelun kolmansien osapuolien lausunnoista tai toimista; (10) tai mistä tahansa muusta näihin palveluehtoihin tai palveluun liittyvästä asiasta, riippumatta siitä, perustuuko se sopimusrikkomukseen, vahingonkorvaukseen (mukaan lukien aktiivinen tai passiivinen huolimattomuus) vai mihin tahansa muuhun vastuuteoriaan.",
    "miscellaneousTitle": "16. Sekalaiset määräykset",
    "miscellaneousDescription": "Nämä palveluehdot ja verkkosivustollamme julkaisemamme käytännöt tai toimintasäännöt muodostavat täydellisen sopimuksen ja ymmärryksen sinun ja meidän välillämme. Se, että emme käytä tai pane täytäntöön näiden palveluehtojen oikeutta tai määräystä, ei merkitse kyseisestä oikeudesta tai määräyksestä luopumista. Näitä palveluehtoja sovelletaan lain sallimassa laajimmassa määrin. Voimme siirtää kaikki oikeutemme ja velvollisuutemme toisille milloin tahansa. Emme ole vastuussa mistään menetyksistä, vahingoista, viivästyksistä tai toimimattomuudesta, joka johtuu mistä tahansa kohtuullisen hallintamme ulkopuolella olevasta syystä. Jos näiden palveluehtojen määräys tai osa määräyksestä todetaan laittomaksi, mitättömäksi tai täytäntöönpanokelvottomaksi, kyseinen määräys tai osa määräyksestä katsotaan erotettavaksi eikä se vaikuta muiden määräysten pätevyyteen ja täytäntöönpanokelpoisuuteen. Nämä palveluehdot tai verkkosivuston käyttö ei luo yhteisyritys-, kumppanuus-, työsuhde- tai edustussuhdetta sinun ja meidän välillämme. Hyväksyt, että näitä palveluehtoja ei tulkita meitä vastaan sen vuoksi, että olemme laatineet ne. Luovut täten kaikista puolustuskeinoista, jotka saattavat perustua näiden palveluehtojen sähköiseen muotoon ja siihen, että osapuolet eivät ole allekirjoittaneet näitä palveluehtoja.",
    "contactTitle": "17. Ota yhteyttä",
    "neverCap": "NeverCap",
    "site": "Verkkosivusto",
    "services": "Palvelut",
    at: "osoitteeseen",
      trademarkProtection: "Palveluiden nimet, ulkoasu ja ilmiasma ovat yrityksen tekijänoikeussuojattuja. Kaikki oikeudet pidätetään. HTML-, CSS-, JavaScript- tai visuaalisten suunnitteluelementtien monistaminen, kopioiminen tai uudelleenkäyttö ilman yrityksen kirjallista lupaa on kielletty. Logojen käyttöön markkinointitarkoituksessa vaaditaan erillinen lupa. Lähetä logojen käyttölupykyselyt sähköpostitse osoitteeseen {at} {email}. Meillä on oikeus peruuttaa lupa, jos rikot käyttöehtoja.",
      privacyPolicyDescription: "Välitämme tietosuojasta ja -turvallisuudesta. Tutustu {policy}. Sivuston käyttäminen edellyttää tietosuojakäytäntöön sitoutumista. Sivusto sijaitsee Yhdysvalloissa. Käyttäessäsi sivustoa muulta alueelta, jossa henkilötietojen keräämistä, käyttöä tai luovuttamista koskevat erilaiset lait, tietosi siirretään Yhdysvaltoihin. Hyväksyt tietojesi siirron ja käsittelyn Yhdysvalloissa.",
      contactDescription: "Jos sinulla on kysyttävää käyttöehdoista, ota yhteyttä {at} {email}."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
