let message = {
  // 首頁
  HomePage: {
    home: "所有轉錄",
    times: "每天{times}次免費轉錄，今天剩餘{left}次。",
    tips: "升級到專業版以獲得無限轉錄。",
    update: "立即升級",
    rename: "重新命名",
    delete: "刪除",
    cancel: "取消",
    confirm: "建立",
    dialogLabel: "資料夾名稱",
    recently: "最近檔案",
    loading: "載入中",
    tour: {
      step0: {
        title: "歡迎使用 {name}",
        tip: "在這裡，您可以：",
        content: "轉錄一次性對話、會議、講座等",
        next: "開始使用"
      },
      step1: {
        title: "轉錄檔案",
        content: "支援三種轉錄方式：本地檔案、連結和錄音。"
      },
      step2: {
        title: "建立資料夾",
        content: '點擊"+"建立資料夾並整理您的檔案。'
      },
      step3: {
        title: "查看轉錄詳情並編輯",
        content: "點擊項目以查看轉錄詳情並進行編輯和翻譯。"
      },
      next: "下一步",
      finish: "知道了"
    },
    export: {
      export: "匯出",
      title: "我們正在生成您的匯出檔案",
      title2: "您的檔案已準備就緒",
      singleLoadingContent: "正在壓縮 1 個檔案。",
      singleSuccessContent: "已壓縮 1 個檔案。",
      loadingContent: "正在壓縮 {num} 個檔案。",
      successContent: "已壓縮 {num} 個檔案。",
      cancel: "取消匯出",
      error: "匯出錯誤",
      dialog: {
        title: "警告",
        content: "取消匯出？",
        cancel: "取消匯出",
        continue: "繼續匯出"
      }
    },
    welcome: {
      title: "歡迎使用 Scribify！",
      description: "在這裡，您可以：",
      transcribe:
        "使用 Scribify 輕鬆轉錄—瞬間將語音對話轉換為清晰、可搜尋和可共享的文字。",
      precision: "立即獲得帶有說話者識別和時間戳的精確轉錄。",
      translate: "打破語言障礙：輕鬆將轉錄翻譯成200多種語言。",
      edit: "編輯、完善並以適合您需求的格式匯出轉錄文字。",
      collaborate: "通過與他人共享轉錄文字進行協作。",
      button: "開始使用",
      tip: "準備好將音訊轉換為轉錄文字了嗎？現在就開始探索！",
      tip2: "立即開始探索！",
      tip1: "準備好將音訊轉換為轉錄文字嗎？ "
    },
    subscriptionModal: {
      left: {
        title: "獲取專業版解鎖更多功能",
        c1: "無限轉錄",
        c2: "10小時上傳",
        c3: "最高優先級",
        c4: "99%轉錄準確率",
        c5: "支援100多種語言",
        c6: "說話者識別",
        c7: "轉錄翻譯",
        t1: "為一個人提供無限轉錄。",
        t2: "每個檔案可長達10小時/5 GB。一次上傳50個檔案。",
        t3: "我們將始終以最高優先級盡快轉錄您的檔案。"
      },
      right: {
        title: "獲取專業版",
        yearly: "年付",
        monthly: "月付",
        save: "節省",
        preMonth: "每月",
        preYear: "每年",
        firstMonth: "第一個月",
        afterwards: "之後"
      },
      subscribe: "訂閱"
    }
  },
  // 文件夾頁
  FolderPage: {
    table: {
      failed: "失敗",
      selected: "已選擇",
      success: "成功",
      fileList: "檔案清單"
    },
    dialog: {
      move: {
        title: "移動",
        label: "選擇資料夾",
        placeholder: "選擇資料夾",
        confirm: "移動",
        cancel: "取消"
      },
      rename: {
        title: "重新命名",
        label: "檔案名",
        confirm: "重新命名",
        cancel: "取消"
      },
      delete: {
        title: "刪除",
        file: "檔案",
        files: "檔案",
        label: "確認刪除？此操作無法撤銷。",
        confirm: "刪除",
        cancel: "取消"
      },
      share: {
        title: "分享",
        label: "任何擁有以下安全連結的人都可以查看此轉錄文本和相關的媒體檔案。",
        confirm: "複製連結",
        success: "複製成功"
      },
      export: {
        title: "匯出",
        select: "選擇你需要的格式",
        settings: "設定",
        speaker: "包含說話人",
        timecodes: "包含時間碼",
        confirm: "匯出",
        cancel: "取消",
        selectErr: "請選擇一個或多個格式"
      }
    },
    search: {
      placeholder: "搜尋"
    },
    recently: "最近",
    record: "錄音",
    transcribe: "轉錄",
    unclassified: "未分類資料夾",
    buttons: {
      transcribe: "轉錄檔案",
      url: "轉錄連結",
      record: "錄音並轉錄",
      recording: "錄音中..."
    },
    delSuccess: "刪除成功",
    create: "建立",
    endRecord: {
      title: "提示",
      content: "您正在錄音。此操作將結束錄音。您要結束錄音嗎？",
      confirm: "繼續錄音",
      cancel: "結束錄音"
    }
  },
  // 文件上傳與錄音
  FileUploadAndRecording: {
    record: {
      record: "錄音",
      pause: "暫停",
      resume: "繼續",
      stop: "停止",
      endRecord: "結束錄製",
      delete: "刪除",
      transcribe: "轉錄",
      permissionDenied: "麥克風權限被拒絕或設備不存在",
      dialog: {
        delete: {
          title: "警告",
          label: "您確定要刪除此錄音嗎？",
          confirm: "刪除",
          cancel: "取消"
        },
        complete: {
          title: "錄音完成",
          label: "錄音已達到10小時並自動停止。請進行轉錄。",
          confirm: "知道了"
        },
        speaker: {
          content: "為了進行講者辨識，檔案長度限制為 3 小時。請取消勾選'{text}'。"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "轉錄線上媒體",
        title: "貼上連結",
        label:
          "貼上您的影片或音訊連結（支援 YouTube、Facebook、X、Dropbox、Google Drive、Vimeo、TikTok、Instagram 等平台...）",
        confirm: "新增",
        cancel: "取消",
        errorTitle: "您輸入的連結地址不正確。請檢查後重試。",
        linkName: "連結"
      },
      file: {
        orTitle: "從 URL 轉錄",
        dialogTitle: "上傳檔案進行轉錄",
        tip1: "將文件拖曳到此處或按一下以瀏覽",
        tip2: "點擊瀏覽",
        or: "或",
        supported: "支援的格式"
      },
      del: {
        title: "警告",
        content: "所有進度將遺失。確認取消轉錄？",
        cancel: "確認取消",
        confirm: "繼續轉錄"
      },
      files: "檔案",
      resultDialogTitle: "轉錄檔案",
      resultDialogTitle2: "轉錄檔案",
      cancel: "取消",
      confirm: "轉錄",
      return: "返回",
      addMore: "添加更多",
      language: "選擇語言",
      failed: "失敗",
      tooLarge: "檔案超出限制（5GB）。",
      linkUpload: "上傳中",
      fileFormat: "檔案格式不被允許",
      localFiles: "本地檔案",
      pasteLink: "線上連結",
      uploadErr: "上傳錯誤",
      hashErr: "哈希錯誤",
      table: {
        status: "狀態",
        file: "檔案",
        size: "大小",
        noData: "無數據"
      },
      maxFileNum: "檔案數量不能超過 {num}。",
      speaker: "辨識講者",
      speakerLabel: "自動辨識說話者",
      guest: {
        transcribe: "轉錄",
        file: "文件",
        audio: "音訊/視訊文件",
        Uploading: "正在上傳..."
      }
    }
  },
  // 轉錄詳情頁
  TranscriptionPage: {
    langChooseV1: {
      recently: "最近",
      popular: "常用",
      other: "其他",
      searchLanguage: "搜尋語言",
      noMatch: "未找到匹配的語言",
      English: "英語",
      "English(US)": "英語（美國）",
      "English(UK)": "英語（英國）",
      Spanish: "西班牙語",
      Portuguese: "葡萄牙語",
      French: "法語",
      Italian: "義大利語",
      German: "德語",
      Dutch: "荷蘭語",
      Polish: "波蘭語",
      Danish: "丹麥語",
      Japanese: "日語",
      Korean: "韓語",
      Hungarian: "匈牙利語",
      Czech: "捷克語",
      Chinese: "中文",
      Hebrew: "希伯來語",
      Arabic: "阿拉伯語",
      Azerbaijani: "阿塞拜疆語",
      Estonian: "愛沙尼亞語",
      Belarusian: "白俄羅斯語",
      Bulgarian: "保加利亞語",
      Icelandic: "冰島語",
      Bosnian: "波斯尼亞語",
      Persian: "波斯語",
      Russian: "俄語",
      "Chinese(Traditional)": "繁體中文",
      Finnish: "芬蘭語",
      Kazakh: "哈薩克語",
      Galician: "加利西亞語",
      Catalan: "加泰羅尼亞語",
      "Chinese(Simplified)": "簡體中文",
      Kannada: "卡納達語",
      Croatian: "克羅地亞語",
      Latvian: "拉脫維亞語",
      Lithuanian: "立陶宛語",
      Romanian: "羅馬尼亞語",
      Marathi: "馬拉地語",
      Malay: "馬來語",
      Macedonian: "馬其頓語",
      Maori: "毛利語",
      Afrikaans: "南非語 (阿非利卡語)",
      Nepali: "尼泊爾語",
      Norwegian: "挪威語",
      Swedish: "瑞典語",
      Serbian: "塞爾維亞語",
      Slovak: "斯洛伐克語",
      Slovenian: "斯洛文尼亞語",
      Swahili: "斯瓦希里語",
      Tagalog: "菲律賓語",
      Tamil: "泰米爾語",
      Thai: "泰語",
      Turkish: "土耳其語",
      Welsh: "威爾士語",
      Urdu: "烏爾都語",
      Ukrainian: "烏克蘭語",
      Greek: "希臘語",
      Armenian: "亞美尼亞語",
      Hindi: "印地語",
      Indonesian: "印度尼西亞語",
      Vietnamese: "越南語",
      Albanian: "阿爾巴尼亞語",
      Amharic: "阿姆哈拉語",
      Assamese: "阿薩姆語",
      Occitan: "奧克語",
      Bashkir: "巴什基爾語",
      Basque: "巴斯克語",
      Breton: "布列塔尼語",
      Tibetan: "藏語",
      Faroese: "法羅語",
      Sanskrit: "梵語",
      Khmer: "高棉語",
      Georgian: "格魯吉亞語",
      Gujarati: "古吉拉特語",
      "Haitian Creole": "海地克里奧爾語",
      Hausa: "豪薩語",
      Latin: "拉丁語",
      Lao: "老撾語",
      Lingala: "林加拉語",
      Luxembourgish: "盧森堡語",
      Malagasy: "馬爾加什語",
      Maltese: "馬耳他語",
      Malayalam: "馬拉雅拉姆語",
      Mongolian: "蒙古語",
      Bengali: "孟加拉語",
      Burmese: "緬甸語",
      Punjabi: "旁遮普語",
      Pashto: "普什圖語",
      Sinhala: "僧伽羅語",
      Shona: "修納語",
      Somali: "索馬里語",
      Tajik: "塔吉克語",
      Tatar: "鞑靼語",
      Telugu: "泰盧固語",
      Turkmen: "土庫曼語",
      Uzbek: "烏茲別克語",
      Hawaiian: "夏威夷語",
      "Norwegian Nynorsk": "新挪威語",
      Sindhi: "信德語",
      Sundanese: "巽他語",
      Yiddish: "意第緒語",
      Yoruba: "約魯巴語",
      Javanese: "爪哇語",
      Cantonese: "粵語",
      Abkhaz: "阿布哈茲語",
      Afar: "阿法爾語",
      alz: "阿盧爾語",
      ach: "阿喬利語",
      awa: "阿瓦德語",
      Avaric: "阿瓦爾語",
      Ewe: "埃維語",
      Aymara: "艾馬拉語",
      Irish: "愛爾蘭語",
      Oriya: "奧利亞語",
      Oromo: "奧羅莫語",
      Ossetian: "奧塞梯語",
      tpi: "巴布亞皮欽語",
      bew: "巴達維語",
      ban: "巴厘語",
      btx: "巴塔克卡羅語",
      bbc: "巴塔克托巴語",
      bts: "巴塔克西馬隆貢語",
      bci: "巴烏雷語",
      Bambara: "班巴拉語",
      pag: "邦阿西楠語",
      pam: "邦板牙語",
      nso: "北索托語",
      bem: "奔巴語",
      bik: "比科爾語",
      bal: "俾路支語",
      bho: "博傑普爾語",
      bua: "布里亞特語",
      chm: "草原馬里語",
      Chamorro: "查莫羅語",
      Chechen: "車臣語",
      chk: "楚克語",
      Chuvash: "楚瓦什語",
      Tswana: "茨瓦納語",
      Tsonga: "聰加語",
      "fa-AF": "達里語",
      shn: "掸語",
      tet: "德頓語",
      Divehi: "迪維希語",
      dyu: "迪尤拉語",
      tiv: "蒂夫語",
      din: "丁卡語",
      doi: "多格拉語",
      "ndc-ZW": "恩道語",
      "South Ndebele": "恩德貝萊語（南部）",
      dov: "恩敦貝語",
      "bm-Nkoo": "恩科字母（西非書面文字）",
      "French(Canada)": "法語（加拿大）",
      Fijian: "斐濟語",
      fon: "豐語",
      "Western Frisian": "弗里西語",
      fur: "弗留利語",
      Fulah: "富拉尼語",
      Kongo: "剛果語",
      Kalaallisut: "格陵蘭語",
      gom: "貢根語",
      Guarani: "瓜拉尼語",
      cnh: "哈卡欽語",
      hrx: "洪斯呂克語",
      Kyrgyz: "吉爾吉斯語",
      ktu: "吉土巴語",
      gaa: "加語",
      kac: "景頗語",
      Kanuri: "卡努里語",
      kha: "卡西語",
      kek: "凱克其語",
      Komi: "科米語",
      Xhosa: "科薩語",
      Corsican: "科西嘉語",
      "crh-Latn": "克里米亞鞑靼語（拉丁文）",
      crh: "克里米亞鞑靼語（西里爾文）",
      Quechua: "克丘亞語",
      Kurdish: "庫爾德語（庫爾曼吉語）",
      ckb: "庫爾德語（索拉尼）",
      trp: "廓克博若克語",
      ltg: "拉特加萊語",
      lij: "利古里亞語",
      Limburgish: "林堡語",
      Kirundi: "隆迪語",
      luo: "盧奧語",
      Luganda: "盧干達語",
      Kinyarwanda: "盧旺達語",
      lmo: "倫巴第語",
      rom: "羅姆語",
      mad: "馬都拉語",
      Manx: "馬恩島語",
      mwr: "馬爾瓦迪語",
      "ms-Arab": "馬來語（爪夷文）",
      Marshallese: "馬紹爾語",
      mam: "瑪姆語",
      mai: "邁蒂利語",
      mfe: "毛里裘斯克里奧耳語",
      "mni-Mtei": "梅泰語（曼尼普爾語）",
      min: "米南語",
      lus: "米佐語",
      hmn: "苗語",
      nhe: "納瓦特爾語（東部瓦斯特卡）",
      "Southern Sotho": "南索托語",
      new: "尼泊爾語言（尼瓦爾語）",
      nus: "努爾語",
      pap: "帕皮阿門托語",
      "pa-Arab": "旁遮普語（沙木基文）",
      "pt-PT": "葡萄牙語（葡萄牙）",
      Chichewa: "齊切瓦語",
      cgg: "奇加語",
      lua: "奇盧伯語",
      Akan: "契維語",
      zap: "薩巴特克語",
      "Northern Sami": "薩米語（北部）",
      Samoan: "薩摩亞語",
      kri: "塞拉利昂克里奧爾語",
      crs: "塞舌爾克里奧爾語",
      Sango: "桑戈語",
      "sat-Latn": "桑塔利語（拉丁文）",
      sat: "桑塔利語（歐甘文）",
      Esperanto: "世界語",
      Swati: "斯瓦特語",
      "Scottish Gaelic": "蘇格蘭蓋爾語",
      sus: "蘇蘇語",
      ceb: "宿務語",
      ber: "塔馬齊格特語（提非納文）",
      "ber-Latn": "塔馬塞特語",
      Tahitian: "塔希提語",
      Tonga: "湯加語",
      Tigrinya: "提格里尼亞語",
      tcy: "圖魯語",
      tum: "圖姆布卡語",
      tyv: "圖瓦語",
      war: "瓦瑞語",
      mak: "望加錫語",
      vec: "威尼斯語",
      Uyghur: "維吾爾語",
      Venda: "文達語",
      Wolof: "沃洛夫語",
      udm: "烏德穆爾特語",
      szl: "西里西亞語",
      scn: "西西里語",
      hil: "希利蓋農語",
      jam: "牙買加土語",
      sah: "雅庫特語",
      ace: "亞齊語",
      iba: "伊班語",
      Igbo: "伊博語",
      ilo: "伊洛卡諾語",
      "iu-Latn": "因紐特語（拉丁文）",
      Inuktitut: "因紐特語（音節）",
      yua: "尤卡坦瑪雅語",
      Dzongkha: "宗卡語",
      Zulu: "祖魯語"
    }
  },
  // 登錄、註冊、修改密碼
  IdentityInfoManage: {
    or: "或", // 或
    LoginBtn: "使用信箱登入",
    LoginGoogle: "使用 Google 登入",
    SignupBtn: "使用信箱註冊",
    SignupGoogle: "使用 Google 註冊",
    SignupDes: "立即註冊，免費體驗神奇效果。",
    SignupTitle: "高精度且無限量轉錄",
    signup: "註冊", // 註冊
    sign_up: "註冊", // 註冊
    loginByGoogle: "使用Google登錄", // 使用Google登錄
    emailAddress: "請輸入您的郵箱", // 請輸入您的郵箱
    createAccount: "建立帳戶", // 建立帳戶
    accountExists: "已經有帳戶了? ", // 已經有帳戶了？登錄
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "繼續操作，即表示您同意我們的{terms}和{policy}。",
      terms: "條款",
      policy: "隱私政策"
    },
    setPassword: "設置密碼", // 設置密碼
    code: "驗證碼", // 驗證碼
    resend: "重新發送", // 重新發送
    enterPassword: "密碼：最少6個字元。", // 請輸入密碼
    passwordLeval: "密碼強度", // 密碼強度
    Weak: "弱", // 弱 中 強
    Medium: "中", // 弱 中 強
    Strong: "強", // 弱 中 強
    confirmPassword: "確認密碼", // 確認密碼
    invalidEmail: "無效的郵箱地址", // 無效的郵箱地址
    logInDirectly: "帳戶已存在，請直接登錄。", // 帳戶已存在，請直接登錄
    codeErrorTryAgain: "驗證碼錯誤，請重試。", // 驗證碼錯誤，請重試
    atLeastSix: "密碼長度至少6位。", // 密碼長度至少6位
    passwordNotMatch: "密碼不匹配，請重試。", // 密碼不匹配，請重試
    login: "登錄", // 登錄
    log_in: "登錄", // 登錄
    log_In: "登錄", // 登錄
    password: "密碼", // 密碼
    forgotPassword: "忘記密碼？", // 忘記密碼？
    noAccount: "沒有帳戶？", // 沒有帳戶？註冊
    accountNotExists: "帳戶不存在。", // 帳戶不存在
    passwordError: "密碼錯誤", // 密碼錯誤
    sendCode: "發送驗證碼", // 發送驗證碼
    resetPassword: "重設密碼", // 重置密碼
    resetYourPassword: "重置密碼", // 重置你的密碼
    newOldCantSame: "新密碼與舊密碼不能相同。", // 新密碼與舊密碼不能相同
    passwordResetOk: "密碼重置成功！", // 密碼重置成功！
    signupToSaveProgress: "完成註冊以保存您的進度",
    tip: "提示",
    tipContentEmail: "我們已將您的帳號登入密碼傳送至您的電子信箱。",
    tipContentPassword: "請檢查收件匣，使用電子郵件和密碼登入。",
    codeToEmail: "我們已向您的信箱發送了驗證碼。請查收郵件並在上方貼上驗證碼。"
  },
  // 分享詳情頁
  Sharepage: {},
  // 初始化頁
  InitPage: {},
  // 帳戶設定
  AccountSettingsPage: {
    subscription: "訂閱方案",
    freeversion: "免費版",
    transcribeTimesDay: "每日3次轉錄",
    uploadMinutes: "30分鐘上傳",
    lowerPriority: "較低優先級",
    currentPlan: "當前方案",
    professionalEdition: "專業版",
    unlimitedTranscription: "無限次轉錄",
    unlimitedNumberOfTimes: "轉錄頻率與時長無限制。",
    filesUploadedAtOnce: "單個檔案最長10小時/5GB。可同時上傳50個檔案。",
    highestPriority: "最高優先級",
    weWillGiveTheHighest: "我們將始終以最高優先級盡快轉錄您的檔案。",
    theFirstMonth: "首月",
    subscribeTo: "訂閱",
    basicVersionFree: "基礎版（免費）",
    return: "返回",
    annualize: "按年訂閱",
    monthly: "按月訂閱",
    everyYear: "每年",
    saved: "已節省",
    byTheMonth: "按月",
    firstMonth: "首月",
    afterwardsEveryMonth: "之後每月",
    manageSubscription: "管理訂閱",
    professionalYearbook: "專業年費版",
    professionalMonthly: "專業月費版",
    subscriptionWillCancelledOn: "訂閱到期日",
    displayLanguage: "顯示語言",
    update: "立即升級",
    basicversion: "基礎版（免費）",
    daily: "已用{start}次，每日限額{end}次",
    upgradetoPro: "升級至專業版",
    accountSetting: "帳戶設定",
    logOut: "登出",
    account: "帳戶",
    email: "電子郵件",
    id: "ID",
    password: "密碼",
    resetPassword: "重設密碼",
    logIn: "登入",
    tryForFree: "免費試用",
    notFund: "找不到",
    couldntFind: "找不到您要的內容。",
    proAnnual: "專業年費版",
    proMonthly: "專業月費版",
    perMonth: "每月",
    afterwards: "之後",
    accuracy: "轉錄準確率",
    supported: "支援語言",
    identification: "說話人識別",
    transcriptSranslation: "轉錄翻譯",
    perYear: "每年",
    getProPlan: "獲取專業版",
    changeToAnnual: "切換為年費",
    automaticRenewalon: "自動續費日期",
    eachMonth: "每月{time}日自動續訂",
    automaticRenewal: "自動續費失敗，請檢查支付方式。",
    eachYear: "每年{time}自動續費",
    returnAccountSetting: "返回",
    needsToWaitLonger: "在文件轉錄完成前請稍作等待。",
    freeThreeTimesDay: "每天免費轉錄3個文件。",
    oneFileUploaded: "每個文件最長30分鐘。每次上傳1個文件。",
    uploadWithinHours: "10小時上傳",
    yourSubscription: "您的訂閱將於{time}取消",
    save: "節省",
      freeversion2: "免費方案"
},
  // 語言對應關係
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中文(簡體)",
      "Chinese(Traditional)": "中文(繁體)",
      Japanese: "日語",
      Danish: "丹麥語",
      German: "德語",
      English: "英語",
      Spanish: "西班牙語",
      French: "法語",
      Italian: "義大利語",
      Hungarian: "匈牙利語",
      Dutch: "荷蘭語",
      Norwegian: "挪威語",
      Polish: "波蘭語",
      Portuguese: "葡萄牙語",
      Finnish: "芬蘭語",
      Swedish: "瑞典語",
      Turkish: "土耳其語",
      Greek: "希臘語",
      Russian: "俄語",
      Ukrainian: "烏克蘭語",
      Hebrew: "希伯來語",
      Arabic: "阿拉伯語",
      Korean: "韓語"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​開源的Nuxt3 SaaS模板，預集成全球支付網關（Stripe/Cream）、Google OAuth、i18n路由和SEO優化工具。專為開發多語言Web應用的開發者設計，提供SSR/SSG支持和生產級安全性。",
    startLink: "開始免費試用~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle: "加入候補名單，第一時間獲取最新NuxtPro新聞和折扣！",
      placeholder: "輸入您的郵箱",
      button: "加入候補名單",
      joinCountMessage: "🔥 早期用戶 #{count} 剛剛加入了候補名單！"
    },
    seo: {
      title: "開源Nuxt SaaS樣板 | NuxtPro",
      description:
        "包含您需要的一切的NuxtJS樣板，讓您的產品快速面向客戶。從想法到生產只需5分鐘。"
    },
    api: {
      title: "這是一個演示",
      corpInfo: "公司信息"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "視頻下載錯誤"
      },
      mse: {
        code: 2,
        msg: "流追加錯誤"
      },
      parse: {
        code: 3,
        msg: "解析錯誤"
      },
      format: {
        code: 4,
        msg: "格式錯誤"
      },
      decoder: {
        code: 5,
        msg: "解碼錯誤"
      },
      runtime: {
        code: 6,
        msg: "語法錯誤"
      },
      timeout: {
        code: 7,
        msg: "播放超時"
      },
      other: {
        code: 8,
        msg: "其他錯誤"
      }
    },
    HAVE_NOTHING: "沒有關於音頻/視頻是否就緒的信息",
    HAVE_METADATA: "音頻/視頻的元數據已就緒",
    HAVE_CURRENT_DATA:
      "關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下一幀/毫秒",
    HAVE_FUTURE_DATA: "當前及至少下一幀的數據是可用的",
    HAVE_ENOUGH_DATA: "可用數據足以開始播放",
    NETWORK_EMPTY: "音頻/視頻尚未初始化",
    NETWORK_IDLE: "音頻/視頻是活動的且已選取資源，但並未使用網路",
    NETWORK_LOADING: "瀏覽器正在下載數據",
    NETWORK_NO_SOURCE: "未找到音頻/視頻來源",
    MEDIA_ERR_ABORTED: "取回過程被用戶中止",
    MEDIA_ERR_NETWORK: "網路錯誤",
    MEDIA_ERR_DECODE: "解碼錯誤",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支援的音頻/視頻格式",
    REPLAY: "重播",
    ERROR: "網路連接似乎出現了問題",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暫停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下載",
    ROTATE_TIPS: "旋轉",
    RELOAD_TIPS: "重新載入",
    FULLSCREEN_TIPS: "進入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "進入樣式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出樣式全屏",
    TEXTTRACK: "字幕",
    PIP: "畫中畫",
    SCREENSHOT: "截圖",
    LIVE: "正在直播",
    OFF: "關閉",
    OPEN: "開啟",
    MINI_DRAG: "點擊按住可拖動視頻",
    MINISCREEN: "小螢幕",
    REFRESH_TIPS: "請試試",
    REFRESH: "刷新",
    FORWARD: "快進中",
    LIVE_TIP: "直播",
    TM_SUBTITLE_SHOW_TIPS: "開啟字幕",
    TM_SUBTITLE_HIDE_TIPS: "關閉字幕",
    TM_MINIMIZE_TIPS: "隱藏視頻"
  },
  privacyPolicy: {
    privacyPolicyTitle: "隱私權政策",
    lastUpdated: "最後更新：2025年8月25日",
    policyDescription:
      "本政策描述了 Scribify（以下簡稱「Scribify」、「我們的」、「我們」）在您使用我們的服務、網站時如何收集、使用和揭露您的個人資訊",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition: "以及軟體（統稱為「服務」）。",
    policyAgreement:
      "請仔細閱讀本隱私權政策，並確保您瞭解其內容。使用我們的任何服務，即表示您同意本隱私權政策。如果您不同意我們根據本政策使用您的個人數據，您必須立即停止使用我們的服務。",
    policyOverview:
      "在本政策中，我們闡述了：我們收集哪些資料以及收集原因；您的資料將如何處理；以及您對您的資料享有的權利。我們不會出售您的資料。",
    scopeTitle: "1.本隱私權政策的範圍",
    whatWeCollectTitle: "2. 我們收集哪些資訊以及為什麼",
    accessShareTitle: "3. 我們何時存取或分享您的訊息",
    secureDataTitle: "4. 我們如何保護您的數據",
    deleteContentTitle: "5. 刪除內容後會發生什麼",
    locationTitle: "6. 站點和資料的位置",
    childrenPrivacyTitle: "7.兒童隱私",
    updatesTitle: "8. 本隱私權政策的更新",
    contactUsTitle: "9. 聯絡我們",
    identityAccessTitle: "2.1 身分與訪問",
    billingInfoTitle: "2.2 帳單資訊",
    productInteractionsTitle: "2.3 產品交互",
    websiteInteractionsTitle: "2.4 網站互動",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 自願通信",
    scopeContent:
      "本隱私權政策僅適用於我們對服務使用者資訊的收集和處理。本隱私權政策不適用於任何連結至我們的第三方所經營的服務、網站或軟體（無論這些連結是由我們提供的或其他使用者分享的），也不適用於來自第三方的內容、資料、應用程式或資料。我們建議您在向任何第三方網站或軟體提供任何資訊之前，先查看其隱私權政策。",
    collectPrinciple:
      "我們的指導原則是只收集我們需要的資訊。以下是實際操作中的意義：",
    identityAccessContent:
      "當您註冊我們的某款產品時，我們會要求您提供身份訊息，例如您的姓名、電子郵件地址。這是為了提供必要的產品功能，並方便我們向您發送產品更新和其他重要資訊。",
    billingInfoContent:
      "如果您註冊付費產品，我們將要求您提供付款資訊和帳單地址。付款資訊將直接提交給我們的付款處理器，不會發送到我們的伺服器。",
    productInteractionsContent:
      "我們將您在產品帳戶中上傳、接收或維護的內容儲存在我們的伺服器上。除非您刪除這些內容，否則只要您的帳戶處於活躍狀態，我們就會一直保留這些內容。",
    websiteInteractionsContent:
      "我們收集您的瀏覽活動信息，用於分析和統計目的，例如轉換率測試和新產品設計實驗。這些資訊包括：例如，您的瀏覽器和作業系統版本、您的 IP 位址、您造訪的網頁及其載入時間，以及哪個網站將您推薦給我們。如果您擁有帳戶並已登錄，這些網路分析資料將與您的 IP 位址和使用者帳戶綁定，直到您的帳戶不再活躍。",
    cookiesContent1:
      "我們還使用持久性第一方 cookie 和一些第三方 cookie 來儲存某些偏好，讓您更輕鬆地使用我們的應用程序，並執行 A/B 測試以及支援一些分析。",
    cookiesContent2:
      "Cookie 是瀏覽器儲存的一段文字。它可以幫助您記住登入資訊和網站偏好設定。它還可能收集您的瀏覽器類型、作業系統、造訪過的網頁、造訪時間、瀏覽過的內容以及其他點擊流資料等資訊。您可以在瀏覽器設定中調整 Cookie 保留設置，並接受或封鎖單一 Cookie。但是，如果您關閉 Cookie，我們的應用程式將無法運行，我們服務的其他方面也可能無法正常運作。",
    voluntaryCorrespondenceContent:
      "當您透過電子郵件向我們提出問題或尋求協助時，我們會保留該通訊記錄，包括您的電子郵件地址，以便我們在您將來聯絡我們時可以參考過去的通訊記錄。",
    accessShareContent1:
      "為了提供您所要求的產品或服務。我們會使用一些第三方子處理器來協助運行我們的應用程式並向您提供服務。這包括雲端和分析提供者。",
    accessShareContent2:
      "調查、預防或採取行動應對濫用行為。在調查潛在濫用行為時，存取客戶帳戶是不得已而為之。我們希望保護客戶和舉報人的隱私和安全，並在整個過程中盡力平衡這些責任。如果我們發現您將我們的產品用於受限用途，我們將採取必要的措施，包括在必要時通知相關部門。",
    accessShareContent3: "根據適用法律的要求。",
    userDataRequests:
      "- 用戶資料請求。我們的政策是，除非法律程序強制要求或在有限的緊急情況下，否則我們不會回應政府的用戶資料請求。但是，如果美國執法機構持有必要的搜索令、刑事傳票或法院命令要求我們共享數據，我們必須遵守。同樣，只有在美國政府透過司法互助條約或協議中規定的程序強制要求的情況下，我們才會回應來自美國境外政府機構的請求。我們的政策是在共享資料之前通知受影響的用戶，除非法律禁止我們這樣做，並且某些緊急情況除外。",
    preservationRequests:
      "- 儲存請求。同樣，我們的政策是，只有在美國《聯邦儲存通訊法》第 18 USC 第 2703(f) 條或美國民事傳票強制要求的情況下，我們才會遵守保存資料的請求。除非法律要求或法院命令強制要求（我們選擇不上訴），否則我們不會共享已保存的資料。此外，除非我們在規定保存期到期前收到適當的搜索令、法院命令或傳票，否則我們將在保存期結束時銷毀任何已保存的客戶資料副本。",
    taxAudit:
      "- 如果我們受到稅務機關的審計，我們可能需要分享帳單相關資訊。在這種情況下，我們只會分享必要的最低限度的信息，例如帳單地址和免稅資訊。",
    secureDataContent1: "所有資料均透過加密",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "當從我們的伺服器傳輸到您的瀏覽器。",
    deleteContentContent: "如果您刪除任何內容，它將立即變得無法存取。",
    locationContent:
      "我們的產品和其他網路資產在美國運作。如果您位於歐盟、英國或美國以外的其他地方，請注意，您向我們提供的任何資訊都將傳輸至美國並儲存於美國。使用我們的網站或服務和/或向我們提供您的個人信息，即表示您同意此類傳輸。",
    childrenPrivacyContent:
      "本服務並非針對兒童，我們不會故意收集 13 歲以下兒童的個人資訊。若您未滿 13 歲，請勿透過本服務提交任何個人資訊。如果您認為有兒童違反本政策向我們提供了個人信息，請按照以下方式與我們聯繫。",
    updatesContent:
      "我們可能會根據需要更新本政策，以符合相關法規並反映任何新的做法。每當我們的政策做出重大變更時，我們都會更新本頁面頂部的日期。",
    contactUsContent1: "如果您對我們的隱私權政策有任何疑問、意見或投訴，請",
    contactUs: "聯絡我們",
    contactUsContent2: "我們將盡力盡快處理您的投訴。"
  },
  termsOfService: {
    termsOfServiceTitle: "服務條款",
    lastUpdated: "最後更新：2022 年 9 月 21 日",
    thankYouMessage: "感謝您使用我們的產品！",
    companyReference:
      "當我們在本文檔中說「本公司」、「我們」、「我們的」或「我們」時，我們指的是 Scribify。",
    servicesDefinition:
      "當我們說「服務」時，我們指的是 Scribify 創建和維護的任何產品，無論是透過網頁瀏覽器、桌面應用程式、行動應用程式或其他格式交付。",
    termsUpdateNotice:
      "我們未來可能會更新本服務條款。通常，這些變更旨在透過連結至更詳細的相關政策來澄清部分條款。每當我們對保單做出重大變更時，我們都會更新本頁面頂部的日期，並採取其他適當措施通知帳戶持有人。",
    acceptanceOfAgreementTitle: "1. 接受協議",
    scribifyServicesTitle: "2. Scribify 的服務",
    accountTermsTitle: "3. 帳戶條款",
    paymentRefundsTitle: "4. 付款、退款和計劃變更",
    cancellationTerminationTitle: "5. 取消和終止",
    submissionsTitle: "6. 提交內容",
    uptimeSecurityTitle: "7. 正常運作時間和安全性",
    siteManagementTitle: "8.現場管理",
    copyrightContentTitle: "9. 版權和內容所有權",
    prohibitedActivitiesTitle: "10.禁止的活動",
    featuresBugsTitle: "11. 功能和錯誤",
    correctionsTitle: "12. 更正",
    userDataTitle: "13.用戶數據",
    privacyPolicyTitle: "14. 隱私權政策",
    liabilityTitle: "15. 責任",
    miscellaneousTitle: "16. 其他",
    contactUsTitle: "17. 聯絡我們",
    acceptanceContent1:
      "使用我們的服務，即表示您接受本協議，本協議由此成為您與 Scribify 之間具有約束力的合約。您聲明您具備法定能力接受這些條款，並確認您已達到訂立具有約束力合約的法定年齡。 Scribify 的接受度明確以您同意本協議的所有條款和條件為前提。",
    acceptanceContent2:
      "該服務不適用於 18 歲以下的任何人，也不應該由 18 歲以下的任何人使用。透過使用本服務，您聲明並保證您符合上述資格要求。",
    acceptanceContent3:
      "「您」、「您的」、「您本人」等字眼也包括您的員工、代理人、業務代表以及您允許透過您的帳戶（定義見下文）存取服務的任何其他個人。您有責任確保所有透過您的帳號存取服務的人員均知悉並遵守本條款。",
    acceptanceContent4:
      "Scribify 保留隨時自行決定修改和更新本條款的權利。所有變更一經發布即刻生效。如果您在修訂條款發布後繼續使用本服務，即表示您接受並同意這些變更。由於變更對您具有約束力，因此請您不時查看此頁面，以了解任何變更。",
    servicesContent1:
      "我們的服務使用戶能夠將語音對話轉換為可搜尋、翻譯和與他人共享的轉錄文字。",
    servicesContent2:
      "您可以選擇使用本服務的免費版本（「免費服務」）或可能需要支付費用的訂閱式付費版本服務（「付費服務」）。",
    servicesContent3:
      "我們將向您提供服務。您有責任做好一切必要安排，以便存取服務。",
    accountTerms1:
      "- 您有責任維護您的帳戶安全。若您未能履行此安全義務，本公司將不承擔任何因您未能履行此安全義務而造成的任何損失或損害。",
    accountTerms2: "- 您不得將服務用於任何非法、不道德或不道德的目的。",
    accountTerms3:
      "- 您應對您帳戶下發布的所有內容和活動負責。這包括以下人員發佈的內容：(a) 有權存取您的登入憑證；或 (b) 在您的帳戶下擁有自己的登入資訊。",
    accountTerms4:
      "- 您必須是人類。不允許使用「機器人」或其他自動化方法註冊的帳戶。",
    paymentContent1:
      "- 對於提供免費試用的付費服務，我們會在您註冊時說明試用期限。試用期結束後，您需要提前付費才能繼續使用服務。如果您不付費，這些服務將被終止。",
    paymentContent2:
      "- 如果您從免費計劃升級到付費計劃，我們將立即從您的卡中扣款，您的計費週期從升級當天開始。",
    paymentContent3:
      "- 所有費用均不含稅務機關徵收的任何稅費、徵稅或關稅。如有需要，我們將代表稅務機關代收這些稅費，並將稅費匯給稅務機關。否則，您需自行承擔所有稅金、徵稅或關稅。",
    paymentContent4:
      "- 所有購買均不可退款。您可以隨時登入您的帳戶取消任何付費服務。對於付費訂閱，除非另有說明，否則您的取消將在當前付費期限結束時生效。",
    cancellationContent1:
      "- 如果您在任何付費期限結束前取消服務，您的取消將立即生效，並且不會再次向您收費。我們不會在上一個計費週期內自動按比例分配未使用的時間。",
    cancellationContent2:
      "- 我們有權隨時以任何理由暫停或終止您的帳戶，並拒絕您目前或未來使用我們的服務。暫停錶示您將無法存取該帳戶或帳戶中的任何內容。終止將導致您的帳戶或您對帳戶的存取權限被刪除，以及您帳戶中所有內容的喪失和放棄。我們也保留隨時以任何理由拒絕任何人使用服務的權利。我們制定此條款是因為從統計數據來看，在我們服務的數十萬個帳戶中，至少有一個帳戶正在從事惡意活動。",
    cancellationContent3:
      "- 對公司員工或官員進行口頭、身體、書面或其他辱罵（包括辱罵或報復威脅）可能會導致立即終止帳戶。",
    submissionsContent:
      "您確認並同意，您向我們提供的關於本網站的任何問題、評論、建議、想法、反饋或其他信息（統稱“提交內容”）均非保密信息，並將成為我們的唯一財產。我們擁有包括所有智慧財產權在內的專有權利，並有權出於任何合法目的（商業或其他目的）不受限制地使用和傳播這些提交內容，而無需向您確認或支付任何報酬。您特此放棄對任何此類提交內容的所有精神權利，並保證任何此類提交內容均為您的原創或您有權提交此類提交內容。您同意，對於任何涉嫌或實際侵犯或盜用您提交內容中任何專有權利的行為，您不得向我們追訴。",
    uptimeContent1:
      "- 您使用本服務的風險由您自行承擔。我們以「現狀」和「可用」為基礎提供這些服務。我們大多數服務不提供服務等級協議，但我們非常重視應用程式的正常運作時間。",
    uptimeContent2:
      "- 如果您的使用量顯著超過其他使用者的平均使用量，我們保留暫時停用您帳戶的權利。當然，我們會在採取任何措施之前與您聯繫，除非在極少數情況下，您的使用量可能會對其他使用者的服務效能產生負面影響。",
    uptimeContent3:
      "- 我們採取多種措施，透過備份、冗餘和加密來保護您的資料安全。我們對透過公共互聯網傳輸的資料強制加密。",
    uptimeContent4:
      "- 我們使用第三方供應商和託管合作夥伴來提供運行服務所需的必要硬體、軟體、網路、儲存和相關技術。",
    siteManagementContent:
      "我們保留以下權利（但沒有義務）：（1）監控網站是否違反本服務條款；（2）對我們自行決定違反法律或本服務條款的任何人採取適當的法律行動，包括但不限於向執法部門舉報該使用者；（3）我們自行決定且不受限制地拒絕、限制存取、限制可用性或停用（在技術可行的範圍內）您的任何貢獻或其任何部分；（4）我們自行決定且不受限制地、通知或承擔責任，從網站中刪除或以其他方式禁用所有過大或以任何方式對我們的系統造成負擔的文件和內容；以及（5）以旨在保護我們的權利和財產並促進網站正常運行的方式管理網站。",
    copyrightContent1: "- 服務上發布的所有內容必須符合美國版權法。",
    copyrightContent2:
      "- 我們對您提供給服務的資料不主張任何智慧財產權。所有上傳的資料仍歸您所有。",
    copyrightContent3:
      "- 我們不預先篩選內容，但保留自行決定拒絕或刪除透過本服務提供的任何內容的權利（但沒有義務）。",
    copyrightContent4:
      "- 本服務的名稱、外觀和風格均受本公司版權©保護。保留所有權利。未經本公司明確書面許可，您不得複製、抄襲或重複使用任何 HTML、CSS、JavaScript 或視覺設計元素。您必須申請許可才能將公司徽標或任何服務徽標用於推廣目的。請",
    emailUs: "給我們發電子郵件",
    copyrightContent5:
      "請求使用徽標。如果您違反本服務條款，我們保留撤銷此許可的權利。",
    copyrightContent6:
      "- 您同意未經本公司明確的書面許可，不得複製、影印、拷貝、出售、轉售或利用本服務的任何部分、使用本服務或存取服務。",
    copyrightContent7: "- 您不得修改其他網站以錯誤地暗示其與服務或公司相關。",
    copyrightContent8:
      "- 我們尊重他人的智慧財產權。如果您認為本網站上或透過本網站提供的任何資料侵犯了您擁有或控制的任何版權，請立即",
    contactUs: "聯絡我們",
    copyrightContent9:
      "您的通知副本將發送給發布或儲存通知中提及資料的人員。請注意，根據適用法律，如果您在通知中作出重大不實陳述，您可能需承擔損害賠償責任。因此，如果您不確定本網站上或連結的資料是否侵犯了您的版權，您應該先考慮聯絡律師。",
    prohibitedActivitiesIntro:
      "您不得為我們提供本網站目的以外的任何目的造訪或使用本網站。除我們明確認可或批准的商業活動外，本網站不得用於任何商業活動。",
    prohibitedActivitiesUserAgreement: "作為本網站的用戶，您同意不：",
    prohibitedActivity1:
      "- 未經我們書面許可，有系統地從網站檢索資料或其他內容，以直接或間接地建立或編譯集合、彙編、資料庫或目錄。",
    prohibitedActivity2:
      "- 欺騙、詐騙或誤導我們和其他用戶，尤其是試圖了解用戶密碼等敏感帳戶資訊。",
    prohibitedActivity3:
      "- 規避、停用或以其他方式乾擾本網站的安全相關功能，包括封鎖或限制使用或複製任何內容或強制限制使用本網站和/或其中包含的內容的功能。",
    prohibitedActivity4:
      "- 我們認為，貶低、玷污或以其他方式損害我們和/或本網站。",
    prohibitedActivity5: "- 使用從本網站獲得的任何資訊來騷擾、辱罵或傷害他人。",
    prohibitedActivity6:
      "- 不當使用我們的支援服務或提交虛假的濫用或不當行為報告。",
    prohibitedActivity7: "- 以不符合任何適用法律或法規的方式使用本網站。",
    prohibitedActivity8: "- 未經授權建置或連結本網站。",
    prohibitedActivity9:
      "- 上傳或傳輸（或試圖上傳或傳輸）病毒、特洛伊木馬或其他資料，包括過度使用大寫字母和垃圾郵件（連續發布重複文字），幹擾任何一方對網站的不間斷使用和享受，或修改、損害、破壞、更改或乾擾網站的使用、特性、功能、操作或維護。",
    prohibitedActivity10:
      "- 從事任何自動化系統使用，例如使用腳本發送評論或訊息，或使用任何資料探勘、機器人或類似的資料收集和提取工具。",
    prohibitedActivity11: "- 從任何內容中刪除版權或其他所有權聲明。",
    prohibitedActivity12:
      "- 試圖冒充其他使用者或個人或使用其他使用者的使用者名稱。",
    prohibitedActivity13:
      "- 上傳或傳輸（或試圖上傳或傳輸）任何作為被動或主動資訊收集或傳輸機制的資料，包括但不限於清晰圖形交換格式（「gif」）、1×1像素、網路臭蟲、cookies或其他類似裝置（有時稱為「間諜軟體」或「被動收集機制」或「pcms」）。",
    prohibitedActivity14:
      "- 幹擾、破壞或對本網站或與本網站連結的網路或服務造成不當負擔。",
    prohibitedActivity15:
      "- 騷擾、煩擾、恐嚇或威脅任何向您提供本網站任何部分的員工或代理人。",
    prohibitedActivity16:
      "- 試圖繞過本網站為防止或限制存取本網站或本網站任何部分而設計的任何措施。",
    prohibitedActivity17:
      "- 複製或改編本網站的軟體，包括但不限於 Flash、PHP、HTML、JavaScript 或其他程式碼。",
    prohibitedActivity18:
      "- 除適用法律允許外，不得對包含或以任何方式構成本網站一部分的任何軟體進行解密、反編譯、反彙編或反向工程。",
    prohibitedActivity19:
      "- 除標準搜尋引擎或網路瀏覽器的使用結果外，使用、啟動、開發或分發任何自動化系統，包括但不限於存取本網站的任何蜘蛛、機器人、欺騙實用程式、抓取工具或離線閱讀器，或使用或啟動任何未經授權的腳本或其他軟體。",
    prohibitedActivity20: "- 使用採購代理或採購代理在網站上進行購買。",
    prohibitedActivity21:
      "- 未經授權使用本網站，包括透過電子或其他方式收集使用者的使用者名稱和/或電子郵件地址以發送未經請求的電子郵件，或透過自動方式或虛假藉口建立使用者帳戶。",
    prohibitedActivity22:
      "- 將本網站用作與我們競爭的任何努力的一部分，或以其他方式將本網站和/或內容用於任何創收活動或商業企業。",
    prohibitedActivity23: "- 使用本網站宣傳或提供銷售商品和服務。",
    prohibitedActivity24: "- 出售或以其他方式轉讓您的個人資料。",
    featuresContent1:
      "我們根據自身經驗以及客戶分享的時間和回饋，精心設計我們的服務。然而，不可能有讓所有人滿意的服務。我們不保證我們的服務一定能滿足您的特定要求或期望。",
    featuresContent2:
      "我們也會測試所有功能，然後再發布。與任何軟體一樣，我們的服務不可避免地會存在一些錯誤。我們會追蹤收到的錯誤報告並努力解決，尤其是與安全或隱私相關的錯誤。並非所有報告的錯誤都會修復，我們也無法保證服務完全沒有錯誤。",
    correctionsContent1:
      "本網站上的資訊可能有排印錯誤、不準確或遺漏，包括描述、價格、供貨情況以及其他各種資訊。我們保留隨時更正任何錯誤、不準確或遺漏以及更改或更新本網站資訊的權利，恕不另行通知。",
    correctionsContent2:
      "我們無法保證本網站始終可用。我們可能會遇到硬體、軟體或其他問題，或需要執行與本網站相關的維護，導致中斷、延遲或錯誤。我們保留隨時以任何理由更改、修訂、更新、暫停、中止或以其他方式修改本網站的權利，恕不另行通知。您同意，對於您在本網站停機或中止期間無法存取或使用本網站而造成的任何損失、損害或不便，我們概不負責。本服務條款中的任何內容均不得解釋為我們有義務維護和支持本網站，或提供與此相關的任何更正、更新或發布。",
    userDataContent:
      "我們將保留您傳輸至本網站的某些數據，用於管理本網站的效能，以及與您使用本網站相關的數據。儘管我們會定期備份數據，但您應對您傳輸的所有數據或與您使用本網站進行的任何活動相關的數據承擔全部責任。您同意，對於任何此類資料的遺失或損壞，我們概不負責，並且您特此放棄因任何此類資料的遺失或損壞而向我們提起訴訟的權利。",
    privacyPolicyContent1: "我們重視資料隱私和安全。請查看我們的",
    privacyPolicy: "隱私權政策",
    privacyPolicyContent2:
      ". 使用本網站即表示您同意遵守我們的隱私權政策，該政策已納入本服務條款。請注意，本網站託管於美國。如果您從世界任何其他地區造訪本網站，且該等地區在管理個人資料收集、使用或揭露方面適用的法律或其他要求與美國適用法律不同，則您繼續使用本網站即表示您將把您的資料傳輸至美國，並且您同意將您的資料傳輸至美國並在美國進行處理。",
    liabilityIntro: "我們在這些條款中都提到了責任，但將其全部放在一個部分：",
    liabilityContent:
      "您明確瞭解並同意，對於因以下原因造成的任何直接、間接、附帶、利潤損失、特殊、後果性、懲罰性或懲戒性損害，包括但不限於利潤損失、商譽損失、使用損失、數據損失或其他無形損失（即使公司已被告知發生此類損害的可能性），本公司不對您或任何第三方承擔法律或衡平法上的錯誤責任：（1）準確之處；（3）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因透過或從本服務購買或取得的任何商品、資料、資訊或服務或收到的訊息或達成的交易而產生的替代商品和服務的採購成本；（5）未經授權存取或使用我們的安全伺服器和/或儲存在其中的任何財務資訊和所有資訊或使用我們的任何財務資訊（6/） (7) 任何第三方傳輸到或透過本網站的任何錯誤、病毒、特洛伊木馬或類似物，和/或； (8) 任何內容和資料中的任何錯誤或遺漏，或因使用透過本網站發布、傳輸或以其他方式提供的任何內容而導致的任何損失或損害； (9) 任何第三方在本服務上的聲明或行為； (10)或與本服務條款或服務有關的任何其他事項，無論是違約、侵權行為（包括主動或被動的疏忽）或任何其他責任理論。",
    miscellaneousContent:
      "本服務條款以及我們在網站上發布的或與網站相關的任何政策或營運規則構成您與我們之間的完整協議和諒解。我們未行使或執行本服務條款中的任何權利或規定，並不構成對該權利或規定的放棄。本服務條款在法律允許的最大範圍內有效。我們可隨時將我們的部分或全部權利和義務轉讓給他人。對於因超出我們合理控制範圍的任何原因造成的任何損失、損害、延誤或未能採取行動，我們概不負責。如果本服務條款的任何規定或部分規定被認定為非法、無效或不可執行，則該規定或部分規定將被視為可與本服務條款分割，且不影響任何其他規定的有效性和可執行性。您與我們之間並未因本服務條款或使用本網站而建立合資、合作、僱用或代理關係。您同意，本服務條款不會因起草本服務條款而被解釋為我們無效。您特此放棄基於本服務條款的電子形式以及本協議各方未簽署執行本服務條款而可能擁有的任何及所有抗辯。",
    contactUsContent1: "如果您對任何服務條款有疑問，請",
    contactUsContent2: "。"
  },
  HeadNavbar: {
    Features: "功能",
    UnlimitedTranscription: "無限轉錄",
    BulkUpload: "批量上傳",
    Accuracy: "96%準確率",
    Pricing: "定價",
    UseCases: "使用案例",
    AllUseCases: "所有使用案例",
    Podcasters: "播客主",
    Journalists: "記者",
    ContentCreators: "內容創作者",
    Researchers: "研究人員",
    BusinessTeams: "商業團隊",
    Educators: "教育工作者",
    Resources: "資源",
    YouTubetoMP4: "YouTube轉MP4",
    StartFreeTrial: "免費試用"
  },
  Footer: {
    des: "全球首個真正無限的AI轉錄服務。無上限，無限制，只有創造的自由。",
    Features: "功能",
    UseCases: "使用案例",
    Company: "公司",
    featureMenus: ["無限轉錄", "批量上傳", "96%準確率"],
    useCaseMenus: [
          "所有使用案例",
          "播客主",
          "記者",
          "內容創作者",
          "研究人員",
          "商業團隊",
          "教育工作者"
        ],
    companyMenus: [
          "關於我們",
          "定價方案",
          "隱私權",
          "條款"
        ]
  },
  Index: {
    Hero: {
      badge: "不再有「縮水式通膨」- 真正無限",
      h1: "停止為限制付費：",
      gradient: "真正無限的AI轉錄",
      subtitle: "我們的AI可轉錄影片並將音頻轉為文字，一次處理50個檔案且無月度上限。真正隨您需求擴展的轉錄服務。",
      FreeTrial: "免費試用 - 無需信用卡",
      HowWorks: "查看運作方式",
      Unlimited: "無限檔案上傳",
      NoCap: "無月度分鐘數限制",
      Hour: "支援10小時檔案",
      ExploreUseCases: "探索使用案例"
    },
    Stats: {
      monthlyMinutes: "月度分鐘數",
      fileUploads: "檔案上傳",
      batchProcessing: "批次處理",
      maxFileLength: "最大檔案長度"
    },
    FeaturesGrid: {
      try_now: "立即試用",
      no_signup: "無需註冊",
      experience_unltd: "體驗真正無限的轉錄",
      upload_50: "立即在此一次上傳多達50個檔案。",
      no_limits: "進階",
      no_surprises: "AI轉錄",
      transparency: "不再有隱藏限制，不再有意外 - 當其他服務悄悄減少您的分鐘數或將限制藏在細則中時，我們相信徹底透明",
      feat_unltd: "真正無限",
      feat_unltd_desc: "條款中沒有埋藏的「合理使用政策」。沒有偽裝成「無限」的儲存上限。上傳您的整個檔案庫，轉錄所有音頻需求。我們是認真的。",
      feat_bulk: "批量上傳自由",
      feat_bulk_desc: "厭倦了「3次終身導入」或「每月10個檔案」？一次上傳50個檔案，需要多少次都可以。完美處理積壓工作。",
      feat_batch: "批次處理",
      feat_batch_desc: "一夜處理完整季播客。一次上傳50個訪談。讓我們的AI在您睡覺時工作。醒來即可獲得完整轉錄稿。",
      feat_accuracy: "96%準確率",
      feat_accuracy_desc: "我們業界領先的AI轉錄音頻時會智能添加標點，支援多達20位講者的說話者分離，並完美處理口音和專業術語。",
      feat_langs: "100+種語言",
      feat_langs_desc: "轉錄100+種語言的影片和音頻，翻譯至249+種語言。不同語言無額外收費。全球內容，單一價格。",
      feat_pro: "專業功能",
      feat_pro_desc: "字級時間戳記可精確定位音頻/影片，即使在快速對話切換時也能準確識別說話者，並提供完美格式化的段落、句子和標點文本以便閱讀。",
        features: "功能"
    },
    UseCases: {
      built_for: "批量",
      "heavy_users": "音頻 & 影片轉錄",
      "join_users": "專為像您這樣的重度用戶打造 - 加入從「縮水式通膨」服務轉換而來的YouTubers、內容創作者和播客主",
      "podcasters": {
        "title": "播客主",
        "des": "上傳您的整個歷史庫存。為每集節目創建筆記。不再需要選擇轉錄哪些集數。"
      },
      "content_creators": {
        "title": "內容創作者",
        "des": "使用我們的服務自動轉錄影片檔案，將您的影片庫轉為可搜索文本。為所有內容生成字幕。無需計算分鐘數，只需創作。"
      },
      "journalists": {
        "title": "記者",
        "des": "一次上傳所有訪談。截稿時不再受「每月10個檔案」限制。處理所有內容。"
      },
      researchers: {
        title: "研究人員",
        des: "轉錄數小時的焦點小組和訪談。一次上傳整個研究。獲得準確的說話者識別。"
      },
      business_teams: {
        title: "商業團隊",
        des: "記錄每次通話而無需擔心限制。獲取所有對話的AI洞察，而不只是少數選擇。"
      },
      educators: {
        title: "教育工作者",
        des: "轉錄整個講座系列。讓所有內容都可訪問。不再因分鐘數限制而在課程間抉擇。"
      }
    },
    Testimonials: {
      title: "深受喜愛",
      highlighted_users: "50,000+ 用戶",
      subtitle: "了解專業人士為何選擇 NeverCap 而非有限制的替代方案",
      Mike: {
        "text": "天啊，這東西真的有用！做了三年播客，像個傻瓜一樣手動轉錄所有內容。一次上傳6集，完美區分我和共同主持人的聲音。我以為毀掉的那集咖啡館錄音？轉錄結果清晰無比。我再也不會自己打字轉錄了。",
        "author": "Mike Rodriguez",
        "role": "播客主持人"
      },
      Sarah: {
        "text": "我在線教學需要影片字幕。試過其他3種工具，不是有奇怪限制就是要等超久。這個竟然...直接能用？上傳西班牙語講課影片，大概2分鐘就得到完美字幕。聽力障礙的學生們超開心。真希望早點發現這個！",
        "author": "Sarah Chen",
        "role": "線上教師"
      },
      Jessica: {
        "text": "用這個做採訪轉錄，準確度高得驚人。一段2小時的破碎英語+西班牙語訪談，連時間標記都完全正確。以前每月花200美元請實習生轉錄。這真的每個月都在幫我省錢。",
        "author": "Jessica Park",
        "role": "自由記者"
      }
    },
    PricingPreview: {
      "title": "透明定價",
      "highlighted_text": "無隱藏限制",
      "subtitle": "選擇您的方案。沒有星號註解，沒有細則條款，沒有意外驚喜"
    },
    FAQSection: {
      "title": "常見問題",
      "titleHighlight": "問題",
      "questions": [
            {
              "q": "AI轉錄",
              "question": "什麼是AI轉錄？它是如何運作的？",
              "answer": "AI轉錄是使用先進人工智能將音頻自動轉換為文字的過程。在NeverCap，您只需上傳檔案，我們的AI就能以高達96%的準確率轉錄內容。我們的服務專為將影片檔案（如MP4、MOV）和音頻檔案（如MP3、WAV）轉換為可讀、可編輯的文字而設計，包含說話者標籤和時間標記。"
            },
            {
              "q": "unlimited_policy",
              "question": "真的無限制嗎？有什麼陷阱？",
              "answer": "是的，真正無限制！沒有每月分鐘數上限，沒有超額費用。唯一限制是技術性的：單一檔案最長10小時或5GB大小，一次可處理50個檔案。但您可以整個月不限次數上傳多批次檔案。"
            },
            {
              "q": "accuracy",
              "question": "轉錄準確度如何？",
              "answer": "我們保證清晰音頻的96%準確率。我們的AI經過數百萬小時多樣內容訓練，能出色處理口音、專業術語和多說話者情境。針對困難音頻，我們的智能增強功能可幫助提升結果。"
            },
            {
              "q": "languages",
              "question": "支援哪些語言？",
              "answer": "我們支援超過100種語言的轉錄，包括英語、西班牙語、普通話、印地語、阿拉伯語、法語等。此外，您可將轉錄內容翻譯成249種不同語言，非常適合全球化的內容需求。"
            },
            {
              "q": "speed",
              "question": "轉錄速度多快？",
              "answer": "閃電般快速！1小時音頻檔案通常在5分鐘內完成處理。透過批次處理，您可以同時上傳50個檔案並平行處理。多數用戶睡一覺醒來就發現整個資料庫已完成轉錄。"
            },
            {
              "q": "cancellation",
              "question": "可以隨時取消嗎？",
              "answer": "當然！沒有合約綁定，沒有取消費用。您隨時可以從儀表板升級、降級或取消訂閱。若取消，您仍可持續使用服務至當前計費週期結束。"
            },
            {
              "q": "security",
              "question": "我的資料安全嗎？",
              "answer": "您的安全是我們的首要任務。我們通過SOC 2認證，所有資料使用256位元加密，且絕不會用您的內容訓練模型。您可隨時刪除檔案，我們也會在30天後自動清除。符合GDPR和CCPA規範。"
            },
            {
              "q": "export_formats",
              "question": "有哪些匯出格式？",
              "answer": "可下載任何您需要的轉錄格式：PDF、Word (DOCX)、Excel、CSV、SRT字幕、純文字(TXT)和VTT字幕。完美適配任何工作流程。"
            },
            {
              "q": "file_formats",
              "question": "可以上傳哪些音頻和影片檔案？",
              "answer": "我們支援您可能遇到的幾乎所有音視頻格式：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV等。只要您能播放，我們就能轉錄。"
            }
          ]
    },
    CTASection: {
      "title": "準備好突破限制了嗎？",
      "subtitle": "加入50,000+已改用真正無限制轉錄服務的專業人士",
      "button": "免費試用 NeverCap",
      "disclaimer": "免費方案無需信用卡 • 隨時升級獲無限制存取"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "不再有「縮水式通脹」",
      heroTitleLine1: "真正無限制",
      heroTitleLine2: "AI轉錄",
      heroSubtitle: "當Trint限制您50小時，Otter每月僅限10個檔案時，我們實現真正的承諾：無隱藏上限的無限轉錄。",
      primaryCta: "免費試用 - 無需信用卡",
      secondaryCta: "看清真相",
      comparisonBadLabel: "其他服務的做法",
      comparisonBadTitle: "處處隱藏限制",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint：",
      comparisonBadItem1Text: "「無限」= 每月50小時上限",
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter：",
      comparisonBadItem2Text: "3次終身導入（免費），10次/月（專業版）",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies：",
      comparisonBadItem3Text: "800分鐘儲存限制",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript：",
      comparisonBadItem4Text: "每月最多30小時",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "隱藏在條款與條件中",
      comparisonGoodLabel: "我們的做法",
      comparisonGoodTitle: "真正的無限",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "無每月分鐘限制",
      comparisonGoodItem1Text: "永遠",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "無限檔案上傳",
      comparisonGoodItem2Text: "始終",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "無儲存限制",
      comparisonGoodItem3Text: "完全",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50個檔案批次上傳",
      comparisonGoodItem4Text: "隨時",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "透明政策",
      comparisonGoodItem5Text: "事先說明",
      feature1Label: "無限制",
      feature1TitlePart1: "轉錄1,000小時？",
      feature1TitlePart2: "相同價格。",
      feature1Description: "停止計算分鐘。不再擔心上限。無論每月轉錄10小時或10,000小時，均支付相同固定費用。無超額費用。無意外帳單。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "無「合理使用」政策陷阱",
      feature1Point2Icon: "✓",
      feature1Point2Text: "超過X小時不限速",
      feature1Point3Icon: "✓",
      feature1Point3Text: "無月底焦慮",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "每月小時數",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "超額費用",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "隨時上傳",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "透明",
      feature2Label: "批量自由",
      feature2TitlePart1: "上傳您的",
      feature2TitlePart2: "完整檔案庫",
      feature2Description: "Otter免費版提供3次終身導入，Pro版每月10次。我們提供無限制。上傳您的播客積壓內容、所有訪談、多年的錄音。無任何限制。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "每批次50個文件",
      feature2Point2Icon: "✓",
      feature2Point2Text: "支持10小時文件",
      feature2Point3Icon: "✓",
      feature2Point3Text: "在您睡覺時處理",
      feature2TableRow1Label: "Otter免費版",
      feature2TableRow1Value: "3次終身導入",
      feature2TableRow2Label: "Otter Pro版",
      feature2TableRow2Value: "10個文件/月",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50小時/月上限",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "真正無限制 ✓",
      feature3Label: "社交證明",
      feature3TitlePart1: "用戶正在",
      feature3TitlePart2: "每日轉換",
      feature3Description: "「我每年支付100美元給Otter，但他們限制我每月只能導入10個文件。一旦有無限制導入的替代方案，我立刻換！」- 真實Reddit用戶",
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000+用戶已轉換",
      feature3Point2Icon: "✓",
      feature3Point2Text: "從Otter的「縮水式通脹」",
      feature3Point3Icon: "✓",
      feature3Point3Text: "永不回頭",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "滿意用戶",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "已處理文件",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "準確率",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "無隱藏費用",
      trustBadge1Number: "∞",
      trustBadge1Label: "分鐘/月",
      trustBadge2Number: "100+",
      trustBadge2Label: "語言",
      trustBadge3Number: "96%",
      trustBadge3Label: "準確率",
      trustBadge4Number: "50",
      trustBadge4Label: "批量上傳",
      ctaTitle: "停止為假無限制付費",
      ctaSubtitle: "加入成千上萬選擇真正無限轉錄的使用者",
      finalCta: "免費試用 NeverCap"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "批量上傳自由",
      heroTitleLine1: "上傳 50 個檔案",
      heroTitleHighlight: "處理所有內容",
      heroSubtitle: "Otter 僅提供 3 次終身匯入。三次。一輩子就這三次。我們提供無限上傳，每次 50 個檔案，隨時滿足需求。",
      primaryCta: "開始批量上傳 →",
      secondaryCta: "查看限制",
      redditQuote: '"我有三年的播客集數需要轉錄。Otter 說我只有 3 次終身匯入。三次。這簡直是侮辱。"',
      redditAuthorIcon: "📍",
      redditAuthorText: "來自 r/podcasting 的真實抱怨",
      comparisonSectionTitlePart1: "那些",
      comparisonSectionTitleHighlight: "荒謬的限制",
      comparisonSectionTitlePart2: "他們強加的",
      comparisonSubtitle: "競爭對手如何限制您處理內容的能力",
      limitCard1Service: "Otter 免費版",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "終身匯入次數",
      limitCard1DescriptionLine2: "(是的，就是一輩子)",
      limitCard2Service: "Otter 專業版",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "每月檔案數",
      limitCard2DescriptionLine2: "($100/年方案)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "每次一個檔案",
      limitCard3DescriptionLine2: "(順序上傳)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "無限上傳",
      limitCard4DescriptionLine2: "每批 50 個檔案",
      feature1Label: "批量威力",
      feature1TitlePart1: "處理您的",
      feature1TitleHighlight: "整個存檔",
      feature1TitlePart2: "一夜完成",
      feature1Description: "睡前上傳 50 個檔案。醒來即可獲得完整轉錄稿。無需排隊、無需等待、沒有「請升級」的訊息。純粹的處理能力觸手可及。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 個同時上傳",
      feature1Point2Icon: "✓",
      feature1Point2Text: "平行處理",
      feature1Point3Icon: "✓",
      feature1Point3Text: "支援 10 小時檔案",
      feature1Point4Icon: "✓",
      feature1Point4Text: "單檔最大 5GB",
      uploadAnimationText1: "50 個檔案",
      uploadAnimationText2: "拖放立即處理",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 個更多檔案...",
      feature2Label: "速度",
      feature2TitlePart1: "從上傳到",
      feature2TitleHighlight: "數小時完成",
      feature2Description: "我們的平行處理基礎架構意味著您的50個檔案無需排隊等候。它們會同時進行轉錄。以往需要數週的工作現在只需數小時。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1小時檔案：5分鐘",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50個檔案：平行處理",
      feature2Point3Icon: "✓",
      feature2Point3Text: "完成時發送電子郵件通知",
      timelineStep1Icon: "1",
      timelineStep1Title: "上傳",
      timelineStep1Time: "0 分鐘",
      timelineStep2Icon: "2",
      timelineStep2Title: "處理中",
      timelineStep2Time: "5-30 分鐘",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI 魔法",
      timelineStep3Time: "30-60 分鐘",
      timelineStep4Icon: "✓",
      timelineStep4Title: "完成",
      timelineStep4Time: "< 2 小時",
      feature3Label: "自由",
      feature3TitlePart1: "無需排隊。",
      feature3TitleHighlight: "無需等待。",
      feature3TitlePart2: "沒有限制。",
      feature3Description: "當其他服務讓您在虛擬隊伍中等待或要求升級「優先處理」時，我們對每一次上傳都給予緊急處理。您的內容很重要，不應等待。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "無優先等級",
      feature3Point2Icon: "✓",
      feature3Point2Text: "人人速度相同",
      feature3Point3Icon: "✓",
      feature3Point3Text: "隨時上傳，24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "隨時待命",
      feature3VisualSubtext: "靈感來襲時隨時上傳",
      useCasesTitlePart1: "完美適用於",
      useCasesTitleHighlight: "大量上傳者",
      useCasesSubtitle: "批量上傳拯救實際場景",
      useCase1Title: "播客檔案庫",
      useCase1Description: "一次上傳3年的集數。為您的整個舊目錄建立轉錄。為每一集生成SEO內容。",
      useCase2Title: "課程創建",
      useCase2Description: "同時處理所有講課影片。為學生建立可存取的轉錄。建立可搜尋的課程材料。",
      useCase3Title: "訪談積壓",
      useCase3Description: "清理堆積如山的未轉錄訪談。將數週的研究在數小時內處理完畢。無需恐慌，準時完成。",
      useCase4Title: "YouTube 影片庫",
      useCase4Description: "為您的整個頻道生成字幕。從影片內容建立部落格文章。提升所有影片的SEO。",
      useCase5Title: "會議檔案庫",
      useCase5Description: "上傳數月的會議錄音。建立可搜尋的會議筆記。重要決策不再遺漏。",
      useCase6Title: "研究數據",
      useCase6Description: "批量處理焦點小組。轉錄所有參與者訪談。高效分析質性數據。",
      ctaTitle: "不再苦苦請求更多上傳額度",
      ctaSubtitle: "獲得真正可用的無限批量處理",
      finalCta: "立即上傳50個檔案 →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "業界領先的精準度",
      heroTitleLine1: "96% 準確率。",
      heroTitleHighlight: "字字精準。",
      heroSubtitle: "12種主要語言的業界頂尖準確率。單詞級時間戳實現完美同步。智能說話者辨識處理快速對話。真正易讀的專業格式。",
      primaryCta: "測試我們的準確度 →",
      secondaryCta: "查看語言",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "準確率適用於",
      statCard1DescriptionLine2: "12種主要語言",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "準確率適用於",
      statCard2DescriptionLine2: "口音與方言",
      statCard3Percentage: "100毫秒",
      statCard3DescriptionLine1: "單詞級",
      statCard3DescriptionLine2: "時間戳精度",
      languageSectionTitlePart1: "96% 準確率",
      languageSubtitle: "全球內容的專業級轉錄",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "英文",
      languageCard1Accuracy: "96% 準確率",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "西班牙文",
      languageCard2Accuracy: "96% 準確率",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "普通話",
      languageCard3Accuracy: "96% 準確率",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "法文",
      languageCard4Accuracy: "96% 準確率",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "德文",
      languageCard5Accuracy: "96% 準確率",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "日文",
      languageCard6Accuracy: "96% 準確率",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "韓文",
      languageCard7Accuracy: "96% 準確率",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "葡萄牙文",
      languageCard8Accuracy: "96% 準確率",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "俄文",
      languageCard9Accuracy: "96% 準確率",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "義大利文",
      languageCard10Accuracy: "96% 準確率",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "荷蘭文",
      languageCard11Accuracy: "96% 準確率",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "阿拉伯文",
      languageCard12Accuracy: "96% 準確率",
      moreLanguagesText: "+ 支援其他 88 種語言，準確率達 95% 以上",
      feature1Label: "精準度",
      feature1TitlePart1: "詞級",
      feature1TitleHighlight: "時間標記",
      feature1Description: "每個字詞都與音頻位置完美同步。建立可點擊的轉錄稿、生成精確字幕，或跳轉至錄音中的確切時刻。專業人士信賴的 100 毫秒精準度。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 毫秒時間標記精準度",
      feature1Point2Icon: "✓",
      feature1Point2Text: "完美適用於影片剪輯",
      feature1Point3Icon: "✓",
      feature1Point3Text: "可點擊互動式轉錄稿",
      feature1Point4Icon: "✓",
      feature1Point4Text: "幀級精確字幕",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "講者 1",
      transcriptLine1Text: "歡迎收聽今天的播客節目。",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "講者 2",
      transcriptLine2Text: "謝謝邀請我上節目！",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "講者 1",
      transcriptLine3Text: "讓我們深入探討今天的主題...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "講者 2",
      transcriptLine4Text: "當然，我很期待討論這個話題。",
      feature2Label: "智能 AI",
      feature2TitlePart1: "處理",
      feature2TitleHighlight: "快速對話",
      feature2Description: "我們的 AI 即使在重疊語音、插話和快速來回對話中，也能準確識別講者。非常適合講者頻繁插話的訪談、播客和會議。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "最多可識別 20 位講者",
      feature2Point2Icon: "✓",
      feature2Point2Text: "完美處理插話",
      feature2Point3Icon: "✓",
      feature2Point3Text: "適用於重疊語音",
      feature2Point4Icon: "✓",
      feature2Point4Text: "在交叉對話中保持準確性",
      feature2VisualNumber: "20",
      feature2VisualTitle: "位已識別講者",
      feature2VisualSubtext: "即使在快速對話中",
      feature3Label: "可讀性",
      feature3TitlePart1: "完美",
      feature3TitleHighlight: "格式化文字",
      feature3Description: "不再有文字牆。我們的AI會自動在適當位置添加段落、句子和標點符號。結果？轉錄內容讀起來舒適且易於瀏覽。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "智能段落分隔",
      feature3Point2Icon: "✓",
      feature3Point2Text: "準確標點",
      feature3Point3Icon: "✓",
      feature3Point3Text: "正確大寫",
      feature3Point4Icon: "✓",
      feature3Point4Text: "簡潔可瀏覽的輸出",
      formattingTitle: "前後對比",
      formattingBeforeLabel: "❌ 其他：",
      formattingBeforeText: "所以今天我們要討論我們一直在開發的新功能我想你們會很喜歡這些功能用戶要求這些功能已經很久了我們終於完成了",
      formattingAfterLabel: "✓ NeverCap：",
      formattingAfterText: "所以今天，我們要討論我們一直在開發的新功能。我想你們會很喜歡。這些功能用戶要求已久，我們終於完成了。",
      comparisonSubtitle: "準確度",
      comparisonSectionTitle: "比較",
      comparisonDes: "查看我們與競爭對手的對比",
      tableHeader1: "功能",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "準確度（清晰音頻）",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "單詞級時間戳",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "說話者識別",
      tableRow3NeverCap: "20位說話者",
      tableRow3Otter: "16位說話者",
      tableRow3Descript: "10位說話者",
      tableRow3Rev: "✕",
      tableRow4Feature: "處理交叉對話",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "有限",
      tableRow4Descript: "有限",
      tableRow4Rev: "✕",
      tableRow5Feature: "智能格式化",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "基本",
      tableRow6Feature: "12種語言達96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "體驗96%準確率",
      ctaSubtitle: "上傳最具挑戰性的音檔，感受差異",
      finalCta: "立即測試準確率 →",
        languageSectionTitlePart2: "適用於12種主要語言"
    }
  },
  Pricing: {
    Hero: {
      "title": "簡單透明的定價",
      "highlighted_text": "無隱藏限制",
      "description": "選擇適合的方案。隨時升級或降級。無合約、無隱藏費用。"
    },
    Cards: {
      "title": "簡單透明的定價。",
      "highlighted_text": "無隱藏限制。",
      "description": "選擇適合的方案。隨時升級或降級。無合約、無隱藏費用。",
      "plans": [
            {
              "name": "免費",
              "price": "$0",
              "period": "月",
              "discount": "適合試用我們的服務",
              "limits": {
                "title": "每日限制",
                "items": [
                  "3 個檔案/天 (≈90 分鐘總計/天)",
                  "每個檔案最多 30 分鐘 (≤250 MB)",
                  "每次上傳 1 個檔案",
                  "標準優先佇列"
                ]
              },
              "features": {
                "title": "功能",
                "items": [
                  "100+ 種語言",
                  "說話者標籤",
                  "翻譯",
                  "所有匯出格式"
                ]
              },
              "cta": {
                "text": "免費開始。無需信用卡。",
                "button": "當前方案"
              }
            },
            {
              "name": "專業月費版",
              "price": "$17.99",
              "period": "月",
              "discount": "首月 $9.99",
              "limits": {
                "title": "無月費上限",
                "items": [
                  "無限總分鐘數",
                  "每個檔案最多 10 小時 / 5 GB",
                  "一次上傳 50 個檔案",
                  "優先佇列"
                ]
              },
              "features": {
                "title": "包含免費版所有功能，外加",
                "items": [
                  "單詞級時間戳",
                  "進階說話者識別",
                  "格式化段落與標點",
                  "優先支援"
                ]
              },
              "cta": {
                "text": "無限分鐘。優先速度。批次上傳。",
                "button": "升級專業版"
              },
              "badge": "最受歡迎"
            },
            {
              "name": "專業年費版",
              "price": "$8.99",
              "period": "月",
              "discount": "年付 $107.88",
              "limits": {
                "title": "與專業月付版相同",
                "items": [
                  "無限總分鐘數",
                  "每個檔案最多 10 小時 / 5 GB",
                  "一次上傳 50 個檔案",
                  "優先佇列"
                ]
              },
              "features": {
                "title": "包含免費版所有功能，外加",
                "items": [
                  "單詞級時間戳",
                  "進階說話者識別",
                  "格式化段落與標點",
                  "優先支援"
                ]
              },
              "cta": {
                "text": "無限分鐘。優先速度。批次上傳。",
                "button": "升級專業版"
              },
              "badge": "最佳價值 - "
            }
          ],
      "disclaimer": "「無限」代表無月度上限且無人工降速。合理使用政策適用於濫用自動化或重新分發行為。"
    },
    ComparisonTable: {
      "header": {
        "title": "比較方案",
        "highlighted_text": "所有功能",
        "subtitle": "清楚查看各方案內容。絕無隱藏限制。"
      },
      "plans": [
              "功能",
              "免費版",
              "專業月費版",
              "專業年費版"
            ],
      "features": [
            {
              "name": "價格",
              "values": [
                "$0/月",
                {
                  "main": "$17.99/月",
                  "note": "首月 $9.99"
                },
                {
                  "main": "$8.99/月",
                  "note": "年繳 $107.88"
                }
              ]
            },
            {
              "name": "每月分鐘數",
              "values": ["~2,700 (90/天)", "無限", "無限"]
            },
            {
              "name": "最長檔案時長",
              "values": ["30 分鐘", "10 小時", "10 小時"]
            },
            {
              "name": "最大檔案大小",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "批次上傳",
              "values": ["1 個檔案", "50 個檔案", "50 個檔案"]
            },
            {
              "name": "處理速度",
              "values": ["標準", "優先", "優先"]
            },
            {
              "name": "支援語言",
              "values": ["100+ 種語言", "100+ 種語言", "100+ 種語言"]
            },
            {
              "name": "翻譯",
              "values": ["true", "true", "true"]
            },
            {
              "name": "說話者識別",
              "values": ["基本", "進階 (20位說話者)", "進階 (20位說話者)"]
            },
            {
              "name": "單詞級時間戳",
              "values": ["false", "true", "true"]
            },
            {
              "name": "格式化段落",
              "values": ["false", "true", "true"]
            },
            {
              "name": "匯出格式",
              "values": ["所有格式", "所有格式", "所有格式"]
            },
            {
              "name": "支援",
              "values": ["電子郵件", "優先電子郵件", "優先電子郵件"]
            },
            {
              "name": "資料保留",
              "values": ["30 天", "永久", "永久"]
            }
          ]
    },
    FAQ: {
      "title": "常見問題",
      "titleHighligt": "問題",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "真的是無限制嗎？",
              "answer": "是的！專業方案沒有每月分鐘數上限。唯一限制是技術性的：單檔最長10小時，檔案大小5GB。您可以處理任意數量的檔案。"
            },
            {
              "q": "plan_change",
              "question": "可以隨時變更方案嗎？",
              "answer": "當然！您可以隨時在儀表板取消訂閱。隨時按需求升級或降級。"
            },
            {
              "q": "payment_methods",
              "question": "接受哪些付款方式？",
              "answer": "我們接受所有主流信用卡、金融卡和PayPal，提供安全無憂的付款體驗。"
            },
            {
              "q": "free_trial",
              "question": "專業版有免費試用嗎？",
              "answer": "有！免信用卡試用專業版7天。訂閱再享首月45%優惠。"
            },
            {
              "q": "file_retention",
              "question": "檔案會保留多久？",
              "answer": "免費方案：30天。專業方案：永久！轉錄內容隨時可在帳戶中查看。"
            },
            {
              "q": "data_security",
              "question": "資料安全性如何？",
              "answer": "我們通過SOC 2認證並採用256位元加密。我們絕不會使用您的內容訓練模型。您的數據完全屬於您。"
            }
          ]
    },
    CTA: {
      "title": "準備好無限暢用了嗎？",
      "subtitle": "加入50,000+專業人士，享受無限制轉錄",
      "button": "免費試用NeverCap →",
      "disclaimer": "無需信用卡 • 秒速開始轉錄"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "專為",
      heavyUsers: "重度用戶",
      whoActuallyNeed: "真正需要無限資源的人",
      heroSubtitle: "從擁有多年存檔的播客到進行數百次訪談的研究人員。了解專業人士如何運用NeverCap突破上傳限制與分鐘數上限。",
      podcasters: {
        title: "播客創作者",
        pain: '"不再需要挑選哪些集數需要文字稿"',
        description: "一次上傳整個播客檔案庫。生成節目筆記、提升SEO，並重新利用內容，無需計算分鐘數。",
        benefits: {
          benefit1: "上傳所有集數，不僅僅是3集",
          benefit2: "生成SEO友好的節目筆記",
          benefit3: "創建可搜尋的檔案庫",
          benefit4: "重新利用為部落格內容"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "集數"
          },
          stat2: {
            number: "200小時",
            label: "已節省"
          },
          stat3: {
            number: "3倍",
            label: "SEO流量"
          }
        }
      },
      journalists: {
        title: "記者與作家",
        pain: '"截稿壓力遇上上傳限制"',
        description: "在截止日期前批量上傳所有訪談。立即搜尋文字稿，絕不錯過關鍵引述。",
        benefits: {
          benefit1: "在截止日期前批量上傳",
          benefit2: "一次搜尋所有訪談",
          benefit3: "帶有時間戳的精確引述",
          benefit4: "處理口音與語言"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "每月訪談"
          },
          stat2: {
            number: "96%",
            label: "準確率"
          },
          stat3: {
            number: "5分鐘",
            label: "每小時"
          }
        }
      },
      contentCreators: {
        title: "內容創作者",
        pain: '"無障礙不應昂貴"',
        description: "為整個YouTube頻道添加字幕。生成多語言字幕，立即提升影片SEO。",
        benefits: {
          benefit1: "一次為所有影片添加字幕",
          benefit2: "249種語言翻譯",
          benefit3: "YouTube適用的SRT檔案",
          benefit4: "提升影片SEO排名"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "影片"
          },
          stat2: {
            number: "100+",
            label: "語言"
          },
          stat3: {
            number: "249",
            label: "翻譯"
          }
        }
      },
      researchers: {
        title: "研究人員與學者",
        pain: '"質性資料不應排隊等待"',
        description: "一次處理整個研究項目。完美識別發言者，處理焦點團體、訪談和小組討論。",
        benefits: {
          benefit1: "批量處理焦點團體",
          benefit2: "20人發言者識別",
          benefit3: "匯出至分析軟體",
          benefit4: "符合GDPR的安全性"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "研究"
          },
          stat2: {
            number: "96%",
            label: "團體準確率"
          },
          stat3: {
            number: "GDPR",
            label: "合規"
          }
        }
      },
      businessTeams: {
        title: "商業團隊",
        pain: '"會議錄製應該毫不費力"',
        description: "直接錄製會議或上傳音頻文件即時轉錄。從無限對話中建立可搜索的存檔，再也不會遺失重要討論。",
        benefits: {
          benefit1: "直接音頻錄製與轉錄",
          benefit2: "無限會議錄製",
          benefit3: "可搜索會議存檔",
          benefit4: "即時上傳音頻文件"
        },
        stats: {
          stat1: {
            number: "直播",
            label: "錄製"
          },
          stat2: {
            number: "即時",
            label: "上傳"
          },
          stat3: {
            number: "20+",
            label: "講者"
          }
        }
      },
      educators: {
        title: "教育工作者",
        pain: '"YouTube影片需要即時轉錄"',
        description: "只需貼上YouTube連結即可獲得即時轉錄稿和自動生成字幕。將任何教育影片轉化為可訪問、可搜索的內容。",
        benefits: {
          benefit1: "直接YouTube連結轉錄",
          benefit2: "自動生成影片字幕",
          benefit3: "轉錄完整課程",
          benefit4: "可搜索講座存檔"
        },
        stats: {
          stat1: {
            number: "一鍵",
            label: "YouTube貼上"
          },
          stat2: {
            number: "自動",
            label: "字幕"
          },
          stat3: {
            number: "100+",
            label: "語言"
          }
        }
      },
      quotes: {
        title: "真實用戶，",
        titleHighlight: "真實自由",
        subtitle: "聽聽突破人為限制的專業人士怎麼說",
        testimonials: {
          mike: {
            textBefore: '"我有',
            highlight: "3年的節目集數",
            textAfter: '未被轉錄。Otter要我選擇3集。只有3集。NeverCap讓我在一個週末上傳全部150集。"',
            name: "Mike Rodriguez",
            role: "播客主持人"
          },
          jessica: {
            textBefore: '"作為自由記者，我負擔不起Trint的',
            highlight: "$100/月",
            textAfter: '，但也無法接受Otter每月10個文件的限制。NeverCap拯救了我的職業生涯。"',
            name: "Jessica Park",
            role: "自由記者"
          },
          sarah: {
            textBefore: '"我們的研究團隊有',
            highlight: "200小時",
            textAfter: '的焦點團體錄音。我們在一個週末處理完所有內容，而不是按月分配分鐘數。"',
            name: "Dr. Sarah Chen",
            role: "首席研究員"
          },
          carlos: {
            textBefore: '"我製作西班牙語教育內容。NeverCap完美轉錄並',
            highlight: "翻譯成英文",
            textAfter: '以擴大觸及範圍。沒有限制，只有成長。"',
            name: "Carlos Martinez",
            role: "YouTube 教育工作者"
          }
        }
      },
      industries: {
        title: "深受各",
        titleHighlight: "行業信賴",
        subtitle: "全球專業人士都在轉向真正的無限方案",
        list: {
          media: "媒體與出版",
          education: "教育",
          healthcare: "醫療保健",
          technology: "科技",
          finance: "金融",
          legal: "法律"
        }
      },
      cta: {
        title: "您的使用情境也需要無限方案",
        subtitle: "加入 50,000+ 專業人士的行列，停止計算分鐘數，開始創作",
        button: "開始您的無限旅程 →"
      }
    },
    Podcasters: {
      badge: "專為播客打造",
      heroTitle: "轉錄您的",
      heroTitleHighlight: "完整播客檔案庫",
      heroSubtitle: "上傳您的全部歷史內容。為每集節目創建節目筆記。無需再選擇哪些集數需要音頻轉錄。",
      ctaPrimary: "免費開始轉錄",
      ctaSecondary: "查看運作方式",
      trustBadge1: "10,000+ 播客主",
      trustBadge2: "無限集數",
      trustBadge3: "SEO 就緒轉錄稿",
      stats: {
        stat1: {
          number: "∞",
          label: "集數/月"
        },
        stat2: {
          number: "50",
          label: "批次上傳"
        },
        stat3: {
          number: "10小時",
          label: "單集最長時長"
        },
        stat4: {
          number: "96%",
          label: "準確率"
        }
      },
      problemTitle: "播客",
      problemTitleHighlight: "轉錄問題",
      problemSubtitle: "其他服務讓您選擇哪些集數「值得」轉錄",
      problems: {
        problem1: {
          title: "上傳限制扼殺檔案庫",
          description: "Otter 免費方案僅提供 3 次終身匯入，Pro 方案每月 10 次。如何轉錄 3 年的節目內容？"
        },
        problem2: {
          title: "錯失 SEO 機會",
          description: "每集未轉錄內容都意味著流失的 SEO 流量。但 Descript 最多僅限每月 30 小時。"
        },
        problem3: {
          title: "成本隨成長暴增",
          description: "隨著播客成長，轉錄成本飆升。每小時 $2 的超額費用讓擴展變得不可能。"
        }
      },
      solutionTitle: "無上限",
      solutionTitleHighlight: "解決方案",
      solutionDescription: "真正的無限轉錄。上傳您的完整檔案庫。轉錄每一集新節目。大規模生成節目筆記。無上限、無限制，只有成長。",
      workflowTitle: "您的播客工作流程，",
      workflowTitleHighlight: "化繁為簡",
      workflowSubtitle: "從錄製到 SEO 優化的節目筆記，只需幾分鐘",
      workflow: {
        step1: {
          title: "上傳節目",
          description: "一次丟入 50 集節目。MP3、MP4、WAV - 我們全支援。"
        },
        step2: {
          title: "AI 轉錄",
          description: "96% 準確率含說話者辨識。訪談節目的完美選擇。"
        },
        step3: {
          title: "智能格式",
          description: "AI自動添加段落、句子和標點符號。"
        },
        step4: {
          title: "發布與排名",
          description: "匯出至您的網站。見證SEO流量增長。"
        }
      },
      featuresTitle: "播客主功能",
      featuresTitleHighlight: "真正需要",
      featuresSubtitle: "由播客主打造，為播客主服務",
      features: {
        feature1: {
          title: "多講者辨識",
          description: "自動識別並標記最多20位講者。完美適用於小組討論、訪談和共同主持節目。"
        },
        feature2: {
          title: "時間戳章節",
          description: "為YouTube描述生成可點擊時間戳。讓聽眾立即跳至喜愛段落。"
        },
        feature3: {
          title: "智能格式",
          description: "自動添加段落、句子和標點符號。獲得清晰易讀的文字稿。節省後製時間。"
        },
        feature4: {
          title: "SEO優化",
          description: "為搜索引擎優化的文字稿。提升播客可發現性並觸及新聽眾。"
        },
        feature5: {
          title: "100+種語言",
          description: "支援任何語言轉錄。可翻譯至249+種語言。輕鬆觸及全球聽眾。"
        },
        feature6: {
          title: "批次處理",
          description: "睡前上傳50集節目。醒來即獲完整文字稿。一夜處理全部存檔。"
        }
      },
      testimonialsTitle: "成功轉換的",
      testimonialsTitleHighlight: "播客主",
      testimonialsSubtitle: "真實播客主的真實故事",
      testimonials: {
        mike: {
          text: '"我做播客3年，一直像傻瓜手動轉錄。一次上傳6集節目，完美區分我和共同主持。原以為毀掉的咖啡廳那集？清晰無比的文字稿。再也不自己打字了。"',
          name: "Mike Rodriguez",
          role: '"The Daily Grind"播客主持人'
        },
        sarah: {
          text: '"Otter每月只讓我導入10個檔案。我有150集積壓節目。NeverCap讓我分3批上傳全部。舊節目添加文字稿後，自然流量增長300%。這根本自付盈虧。"',
          name: "Sarah Chen",
          role: '"Tech Talks Today"創作者'
        }
      },
      comparisonTitle: "播客主選擇",
      comparisonTitleHighlight: "NeverCap的原因",
      comparisonSubtitle: "查看我們與對手的比較",
      comparison: {
        headers: {
          feature: "功能",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "每月節目限制",
            nevercap: "無限制",
            otter: "~13集 (1200分鐘)",
            descript: "~30集 (30小時)"
          },
          uploadLimit: {
            feature: "檔案上傳限制",
            nevercap: "無限制",
            otter: "每月10個",
            descript: "每次1個"
          },
          batchProcessing: {
            feature: "批次處理",
            nevercap: "50個檔案",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "單集最長時限",
            nevercap: "10小時",
            otter: "90分鐘",
            descript: "無限制"
          },
          speakerDetection: {
            feature: "說話者辨識",
            nevercap: "20 位說話者",
            otter: "16 位說話者",
            descript: "10 位說話者"
          },
          smartFormatting: {
            feature: "智能格式",
            nevercap: "✓ 完美",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "價格",
            nevercap: "$17.99/月",
            otter: "$16.99/月",
            descript: "$30/月"
          }
        }
      },
      ctaTitle: "開始轉錄每集節目",
      ctaSubtitle: "加入 10,000+ 名從不擔心限制的播客",
      ctaButton: "免費上傳前 50 集 →",
      ctaDisclaimer: "無需信用卡 • 處理無限集數 • 隨時取消"
    },
    Journalists: {
      hero: {
        badge: "記者與作家專區",
        title: "轉錄每次訪談。",
        titleHighlight: "不錯過任何引述。",
        subtitle: "無需選擇哪些訪談值得轉錄。一次上傳所有錄音，立即搜尋所有內容，無需擔心上傳問題，準時完成工作。",
        ctaPrimary: "開始無限上傳 →",
        ctaSecondary: "查看運作方式",
        stats: {
          uploads: {
            number: "∞",
            label: "檔案上傳"
          },
          accuracy: {
            number: "96%",
            label: "準確率"
          },
          speed: {
            number: "5分鐘",
            label: "每小時"
          }
        },
        dashboard: {
          title: "訪談佇列",
          status: "• 所有處理中",
          interviews: {
            cityCouncil: {
              title: "市議會會議",
              duration: "2小時15分鐘 • 上傳中...",
              action: "處理中"
            },
            expertInterview: {
              title: "專家訪談 - 陳博士",
              duration: "45分鐘 • 轉錄中...",
              action: "96% 完成"
            },
            pressConference: {
              title: "記者會",
              duration: "1小時30分鐘 • 就緒",
              action: "查看 →"
            },
            phoneInterview: {
              title: "電話訪談 - 消息來源",
              duration: "35分鐘 • 就緒",
              action: "查看 →"
            }
          }
        }
      },
      problem: {
        title: "記者",
        titleHighlight: "轉錄難題",
        subtitle: "其他服務讓您選擇哪些訪談「值得」轉錄",
        problems: {
          uploadLimits: {
            title: "上傳限制扼殺調查",
            description: "Otter Pro版每月僅提供10次檔案匯入。如何轉錄3週的調查訪談？"
          },
          missingQuotes: {
            title: "錯失關鍵引述",
            description: "每段未轉錄的訪談都可能包含故事關鍵引述。但Trint每月最多僅限50小時。"
          },
          costExplosion: {
            title: "截止期限使成本暴增",
            description: "隨著調查深入，轉錄成本飆升。每月$100的超額費用讓即時新聞變得不可能。"
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap解決方案",
          description: "真正的無限轉錄。上傳整個調查檔案。轉錄每次訪談。即時搜尋所有引述。無上限，無限制，只有純粹的新聞工作。"
        }
      },
      solution: {
        title: "1",
        titleHighlight: "最佳記者訪談轉錄軟體",
        titleSuffix: "for Journalists",
        subtitle: "當截稿時間緊迫且準確性至關重要時，這些真正的優勢將發揮作用",
        solutions: {
          unlimitedUploads: {
            label: "無限容量",
            title: "所有訪談的無限容量",
            description: "與有分鐘限制的軟體不同，您可以轉錄每次訪談，從簡短對話到數小時的討論。永遠不必擔心在截稿前用完額度。",
            points: {
              simultaneousUpload: "無每月分鐘限制",
              noLimits: "支援10小時訪談",
              processWhileWrite: "一次性處理完整調查",
              longRecordings: "支援10小時錄音"
            },
            visual: {
              number: "∞",
              label: "無限制。永遠。"
            }
          },
          instantSearch: {
            label: "閃電速度",
            title: "匹配您新聞週期的速度",
            description: "幾分鐘內即可取得訪談轉錄結果，無需等待數天。比以往更快完成報導。當您喝咖啡時，我們的AI已處理數小時音頻。",
            points: {
              searchAll: "1小時訪談5分鐘完成",
              wordTimestamps: "緊急報導優先處理",
              jumpToMoments: "即時進度追蹤"
            },
            searchDemo: {
              placeholder: "5分鐘",
              resultsText: "每小時音頻",
              results: {
                mayorInterview: "“…我們的氣候政策將改變…”",
                expertPanel: "“……政策聲明清楚地表明……”"
              }
            }
          },
          professionalAccuracy: {
            label: "直接引用級準確度",
            title: "可引用的準確性",
            description: "我們的AI提供高準確度轉錄，確保您發表的引述精確可靠。編輯信賴的專業級轉錄品質。",
            points: {
              accuracyGuarantee: "96%準確度保證",
              handlesAccents: "處理專業術語",
              smartPunctuation: "完美的說話者辨識"
            },
            visual: {
              accuracy: "96%",
              label: "出版級準確度",
              transcript: {
                speaker1: "“調查發現財務報告有重大差異。”",
                speaker2: "“您能詳細說明一下這些具體差異嗎？”"
              }
            }
          },
            ironclad: {
                  label: "來源保護",
                  title: "鐵壁級來源保護",
                  description: "我們提供強大的安全功能來保護您的敏感訪談資料和機密來源。銀行級加密確保調查安全。",
                  points: {
                    accuracyGuarantee: "端到端加密",
                    handlesAccents: "自動檔案刪除選項",
                    smartPunctuation: "GDPR與隱私合規"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "最高安全性"
                  }
                }
        }
      },
      features: {
        title: "Everything a",
        titleHighlight: "記者所需",
        subtitle: "尊重您工作流程的專業工具",
        featuresList: {
          languages: {
            title: "100+種語言",
            description: "以96%準確度支援全球12種主要語言的訪談來源。"
          },
          exportFormats: {
            title: "匯出格式",
            description: "Word、PDF、SRT、TXT。兼容任何工作流程。"
          },
          sourceProtection: {
            title: "來源保護",
            description: "銀行級加密。您的來源絕對保密。"
          },
          timestamps: {
            title: "時間標記",
            description: "點擊任意引文跳轉至音頻對應時刻"
          },
          teamSharing: {
            title: "團隊共享",
            description: "與編輯協作。安全分享謄本"
          },
          mobileReady: {
            title: "行動裝置就緒",
            description: "從手機上傳。隨時隨地檢視謄本"
          },
          smartFormatting: {
            title: "智能格式",
            description: "自動分段與標點，打造易讀謄本"
          },
          batchProcessing: {
            title: "批次處理",
            description: "一次上傳50個檔案。在您睡眠時完成處理"
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "我曾因上傳限制積壓3年未轉錄的訪談。NeverCap讓我在一個週末全數處理完畢。徹底改變遊戲規則",
          name: "Jessica Park",
          role: "自由記者，前Otter用戶"
        }
      },
      cta: {
        title: "開始轉錄",
        titleHighlight: "無限制",
        subtitle: "加入數千名不再計算上傳次數、專注於報導的記者行列",
        ctaPrimary: "免費試用無限制版 →",
        ctaSecondary: "查看方案"
      }
    },
    ContentCreators: {
      hero: {
        badge: "內容創作者專屬",
        title: "轉錄YouTube影片",
        titleHighlight: "無限暢用",
        titleSuffix: "1",
        subtitle: "無論您需要轉錄YouTube影片、為TikTok影片轉錄以便重複利用，或是想了解如何將Facebook影片轉為文字，我們的平台都能無縫處理。以100+種語言生成字幕，無月流量限制——純粹的創作自由",
        ctaPrimary: "開始無限字幕製作 →",
        ctaSecondary: "查看運作方式",
        stats: {
          videos: {
            number: "∞",
            label: "影片/月"
          },
          languages: {
            number: "100+",
            label: "語言"
          },
          accuracy: {
            number: "96%",
            label: "準確率"
          },
          platforms: {
            number: "10+",
            label: "平台"
          }
        }
      },
      platforms: {
        title: "從任何平台獲取並轉錄",
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
          titleMax: "從任何平台",
          titleMaxHighlight: "轉錄影片"
    },
      features: {
        title: "擴展內容所需",
        titleHighlight: "的一切工具",
        subtitle: "專業工具，無專業限制",
        oneClickImport: {
          label: "一鍵匯入",
          title: "轉錄YouTube、TikTok與",
          titleHighlight: "Instagram影片，只需貼上連結",
          description: "我們的工具簡化了影片內容轉錄流程。轉錄Instagram影片只需貼上連結，轉錄Vimeo影片同樣簡單。一個週末即可處理整個頻道的待辦內容。",
          points: {
            directYoutube: "直接YouTube連結轉錄",
            multiplePlatforms: "支援10+平台獲取",
            batchPlaylists: "批次處理整個播放清單",
            autoSync: "自動同步您的頻道"
          },
          demo: {
            instruction: "貼上您的影片網址：",
            url: "https://youtube.com/watch?v=...",
            status: "獲取並轉錄中..."
          }
        },
        globalReach: {
          label: "全球覆蓋",
          title: "100+種語言",
          titleHighlight: "零限制",
          description: "透過自動翻譯至100+種語言觸及全球觀眾。同時生成多語言字幕。無額外費用，翻譯無月流量限制。",
          points: {
            highAccuracy: "12種主要語言96%準確率",
            unlimitedTranslations: "無限翻譯包含在內",
            multicultural: "多元文化內容完美適用",
            autoDetect: "自動偵測來源語言"
          },
          visual: {
            number: "100+",
            title: "支援語言",
            subtitle: "翻譯一次，觸及所有人"
          }
        },
        flexibleExport: {
          label: "靈活匯出",
          title: "所需格式",
          titleHighlight: "一應俱全",
          description: "匯出符合您工作流程的格式。從YouTube適用的SRT檔案、網頁播放器適用的VTT，到可編輯的腳本文檔。所有匯出無限制，所有方案皆包含。",
          points: {
            videoFormats: "影片平台適用的SRT & VTT",
            editingFormats: "編輯適用的DOCX & PDF",
            dataAnalysis: "數據分析適用的CSV",
            simpleScripts: "簡易腳本適用的TXT"
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
        title: "從上傳到",
        titleHighlight: "發佈",
        titleSuffix: "只需數分鐘",
        subtitle: "為整個內容庫加字幕的最快方式",
        steps: {
          pasteLinks: {
            title: "貼上連結",
            description: "放入YouTube、TikTok或任何影片連結。或直接上傳檔案。"
          },
          autoTranscribe: {
            title: "自動轉錄",
            description: "AI處理達96%準確率。可辨識口音與多人對話。"
          },
          editTranslate: {
            title: "編輯與翻譯",
            description: "完善您的字幕。立即翻譯至100+種語言。"
          },
          exportPublish: {
            title: "匯出與發佈",
            description: "下載任意格式。上傳至您的平台。完成！"
          }
        }
      },
      testimonials: {
        title: "創作者們",
        titleHighlight: "每日轉換",
        subtitle: "從有限方案到無限自由",
        carlos: {
          textBefore: "我製作西班牙語教育內容。NeverCap完美轉錄並",
          textAfter: "擴大觸及範圍。沒有限制，只有成長。新增多語言字幕后，我的頻道觀看次數增長3倍。",
          highlight: "translates to English",
          name: "Carlos Martinez",
          role: "YouTube 教育家 • 25萬訂閱者"
        },
        sarah: {
          textBefore: "Descript 每月收費 $30",
          textAfter: "。我有500多部影片積壓。NeverCap讓我在一個週末處理完所有內容。字幕帶來的SEO提升在第一個月就回本了。",
          highlight: "30小時",
          name: "Sarah Lee",
          role: "生活風格部落客 • 18萬訂閱者"
        },
        jake: {
          textBefore: "這個",
          textAfter: "功能改變了遊戲規則。我不再下載任何東西。只需貼上、轉錄、完成。為TikTok處理我的播客片段從未如此簡單。",
          highlight: "直接YouTube獲取",
          name: "Jake Wilson",
          role: "播客主持人 • 頂尖1%創作者"
        },
        yuki: {
          textBefore: "我用5種語言創作內容。其他服務收取",
          textAfter: "。NeverCap給我無限翻譯。自從使用正確的本地字幕後，我的國際觀眾增長了400%。",
          highlight: "每次翻譯",
          name: "Yuki Tanaka",
          role: "遊戲創作者 • 50萬訂閱者"
        }
      },
      cta: {
        title: "您的整個頻道。今天就有字幕。",
        subtitle: "加入50,000+不再計算分鐘數、開始創作的創作者行列",
        button: "開始無限字幕製作 →"
      },
        FAQSection: {
              "title": "您的轉錄問題，",
              "titleHighlight": "解答",
              subtitle: "關於從不同平台轉錄影片您需要知道的一切",
              "questions": [
                    {
                      "question": "問：如何使用NeverCap轉錄YouTube影片？",
                      "answer": "很簡單。只需找到您想轉錄的YouTube影片，複製其URL，並貼到我們的應用程式中。我們的AI將自動獲取影片並在幾分鐘內提供完整文字轉錄。"
                    },
                    {
                      "question": "問：將Facebook影片轉錄為文字的最佳方法是什麼？",
                      "answer": "最簡單的方法是使用直接連結。複製Facebook影片的URL，我們的平台將處理其餘部分，以高達96%的準確率將語音轉換為文字，省去手動轉錄的麻煩。"
                    },
                    {
                      "question": "問：我可以轉錄TikTok和Instagram影片嗎？",
                      "answer": "當然可以。我們支援TikTok和Instagram影片的轉錄。這對於想將短影片內容改編成部落格文章、文章或文字社交媒體更新的內容創作者來說非常完美。"
                    },
                    {
                      "question": "問：如何將Vimeo影片轉錄為文字？",
                      "answer": "轉錄Vimeo影片和其他平台一樣簡單。只需複製Vimeo影片URL並貼到NeverCap中。我們的AI將處理影片並生成準確的文字轉錄，您可以下載多種格式。"
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "為學術卓越而打造",
      heroTitle1: "轉錄每次訪談。",
      heroTitle2: "分析所有數據。",
      heroSubtitle: "停止選擇要轉錄哪些焦點團體。以96%的準確率和完美的說話者識別處理所有質性數據——即使20位參與者同時發言。",
      heroCtaPrimary: "免費試用 - 無需信用卡",
      heroCtaSecondary: "查看運作方式",
      statsInterviewHours: "訪談時數",
      statsAccuracy: "準確率",
      statsSpeakersId: "說話者識別",
      statsCompliant: "合規",
      problemTitle: "這個",
      problemSubtitle: "其他服務讓您選擇哪些數據「值得」轉錄",
      problemCard1Title: "上傳限制扼殺研究",
      problemCard1Desc: "Otter只提供3次終身導入。您如何轉錄200小時的焦點團體？",
      problemCard2Title: "遺失關鍵數據",
      problemCard2Desc: "每次未轉錄的訪談都可能包含突破性見解。但Rev每分鐘至少收費$2。",
      problemCard3Title: "研究經費消失",
      problemCard3Desc: "隨著數據集增長，轉錄成本飆升。每場焦點小組500美元使擴展成為不可能。",
      solutionTitle: "NeverCap解決方案",
      solutionDesc: "真正的無限轉錄。上傳您的整個研究。轉錄每次訪談。分析所有數據。無上限，無限制，只有研究。",
      feature1Label: "無限制",
      feature1Title: "處理您的",
      feature1Desc: "今晚就上傳所有200小時的訪談。醒來即可獲得完整、可搜索的轉錄稿。無月度上限，無單檔限制，沒有「合理使用」的廢話。",
      feature1Point1: "批量同時上傳50個檔案",
      feature1Point2: "完整處理縱向研究",
      feature1Point3: "轉錄稿無儲存限制",
      feature1Point4: "導出至NVivo、MAXQDA、Atlas.ti",
      feature1Visual1: "無限時數",
      feature1Visual2: "10小時或10,000小時同價",
      feature2Label: "智能AI",
      feature2Title: "精準把握",
      feature2Desc: "我們的AI可追蹤多達20位發言者，即使他們互相插話、打斷或同時發言。每個聲音都能正確捕捉並標記。",
      feature2Point1: "20人發言識別",
      feature2Point2: "處理交叉對話與中斷",
      feature2Point3: "可重命名的發言者標籤",
      feature2Point4: "每個字詞的時間戳",
      conversationParticipant1: "參與者1",
      conversationText1: "我們面臨的主要障礙絕對是治療成本...",
      conversationParticipant2: "參與者2",
      conversationText2: "沒錯，但我想補充的是獲取途徑——",
      conversationParticipant3: "參與者3",
      conversationText3: "——抱歉打斷，但交通問題也很重要。",
      conversationText4: "對！這正是我剛才要說的。",
      conversationParticipant4: "參與者4",
      conversationText5: "在鄉村地區，三者皆是：成本、獲取途徑和交通。",
      feature3Label: "精準度",
      feature3Title: "值得信賴",
      feature3Desc: "專業處理技術術語、濃重口音和領域專用詞彙。準確度足以應付出版、同行評審和論文委員會。",
      feature3Point1: "醫學與科學術語",
      feature3Point2: "100+種語言與方言",
      feature3Point3: "逐字與潔淨閱讀模式",
      feature3Point4: "以任何格式編輯和導出",
      feature3Visual1: "研究級準確度",
      feature3Visual2: "獲得50,000+研究人員信賴",
      feature4Label: "安全性",
      feature4Title: "IRB合規認證",
      feature4Desc: "您的敏感研究數據受企業級安全保護。符合GDPR，提供HIPAA就緒選項，完整審計追蹤滿足IRB要求。",
      feature4Point1: "端到端加密",
      feature4Point2: "符合GDPR與CCPA",
      feature4Point3: "自動刪除政策",
      feature4Point4: "安全的團隊協作",
      useCasesTitle: "完美適用於",
      useCasesSubtitle: "從民族誌到臨床試驗",
      useCase1Title: "焦點小組",
      useCase1Desc: "處理8-20位參與者的重疊對話。即使在激烈討論中也能完美識別發言者。直接導出至質性分析軟體。",
      useCase2Title: "深度訪談",
      useCase2Desc: "同時處理數百份一對一訪談。保持整個數據集的一致性。即時搜索所有文字記錄。",
      useCase3Title: "臨床研究",
      useCase3Desc: "符合HIPAA規範的患者訪談選項。精準的醫學術語轉錄。安全處理敏感健康數據。",
      useCase4Title: "民族誌研究",
      useCase4Desc: "自然環境中的實地錄音。處理背景噪音和多個說話者。支持100多種語言和方言。",
      useCase5Title: "口述歷史項目",
      useCase5Desc: "無限制保存完整檔案。創建可搜索的歷史記錄。非常適合縱向和世代研究。",
      useCase6Title: "論文研究",
      useCase6Desc: "學生友好的價格，提供完整功能。經濟高效地處理整個數據集。通過批量處理滿足緊迫期限。",
      testimonialTitle: "獲得",
      testimonialText: "我們的研究團隊有200小時的社區健康研究焦點小組錄音。其他服務因成本問題要求我們挑選要轉錄的會議。NeverCap讓我們在一個週末內處理了所有內容。20人說話者識別功能甚至在最混亂的討論中（所有人同時發言時）也能正常工作。這個工具徹底改變了我們處理定性數據的方式。",
      testimonialAuthorName: "Sarah Chen博士",
      testimonialAuthorRole: "公共衛生研究所首席研究員",
      ctaTitle: "停止選擇要分析的數據",
      ctaSubtitle: "加入50,000多名轉錄一切的研究人員",
      ctaButton: "免費試用NeverCap",
        problemTitle2: "研究轉錄問題",
        title: "The",
        useCasesTitle2: "每種研究方法",
        testimonialTitle2: "領先研究人員的信賴",
        feature1TitleHl: "整個研究項目",
        feature1TitlePost: "一站式完成",
        feature2TitleHl: "焦點小組訪談",
        feature2TitlePost: "次次成功",
        feature3TitleHl: "96%準確率",
        feature4TitleHl: "安全性",
        testimonialText2Hl: "200小時",
        testimonialText3: "來自我們社區健康研究的焦點團體錄音。其他服務因為成本要求我們挑選要轉錄的時段。NeverCap讓我們在",
        testimonialText4Hl: "一個週末處理全部內容",
        testimonialText5: "。20人聲辨識功能確實有效——即使在最混亂、所有人同時發言的討論中也奏效。這個工具",
        testimonialText6Hl: "徹底改變了",
        testimonialText7: "我們處理質性資料的方式。"
    },
    BusinessTeams: {
      heroBadge: "適用於商業團隊",
      heroTitle1: "會議錄音",
      heroTitle2: "輕鬆完成",
      heroSubtitle: "直接在瀏覽器中錄製會議或即時上傳音頻文件。從無限對話中創建可搜索的檔案。真正無限轉錄，再也不會丟失重要討論。",
      heroCtaPrimary: "立即開始錄製 →",
      heroCtaSecondary: "查看運作方式",
      recordingStatus: "錄製中...",
      statsMeetingMinutes: "會議記錄",
      statsLiveRecording: "錄製",
      statsSpeakerID: "說話者識別",
      statsInstantUpload: "上傳與處理",
      featuresTitle: "適用於每家企業的轉錄",
      featuresSubtitle: "從現場錄製到即時上傳，我們消除了所有摩擦點",
      feature1Title: "直接在瀏覽器中錄製",
      feature1Desc: "無需下載或插件。一鍵即時開始錄製。完美的音質，自動說話者檢測。",
      feature1Benefit1: "一鍵開始錄製",
      feature1Benefit2: "無需安裝軟體",
      feature1Benefit3: "適用於任何設備",
      feature1Benefit4: "即時轉錄",
      feature1Visual1: "點擊並錄製",
      feature1Visual2: "無需設置",
      feature2Title: "即時上傳任何音頻文件",
      feature2Desc: "有來自Zoom、Teams或手機的錄音？即時上傳。支持所有主要音頻和視頻格式。同時處理多個文件，無需等待。",
      feature2Benefit1: "支持格式：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV、FLAC",
      feature2Benefit2: "批量上傳功能",
      feature2Benefit3: "支持10小時文件",
      feature2Benefit4: "工作時處理",
      feature2Visual1: "拖放文件",
      feature3Title: "專為團隊協作設計",
      feature3Desc: "即時與團隊分享文字記錄。一起收聽錄音，以多種格式導出文字記錄，並通過可搜索的會議檔案確保所有人保持一致。",
      feature3Benefit1: "與任何人分享文字記錄",
      feature3Benefit2: "收聽原始錄音",
      feature3Benefit3: "匯出多種格式的文字稿",
      feature3Benefit4: "團隊共享可搜尋檔案庫",
      feature3Visual1: "團隊成員",
      feature3Visual2: "無限協作",
      feature4Title: "立即找到任何對話",
      feature4Desc: "一次搜尋所有會議。找出上季的關鍵決策或數月前的客戶需求。AI驅動的搜尋能理解上下文，不僅僅是關鍵字。",
      feature4Benefit1: "一次搜尋所有會議",
      feature4Benefit2: "AI理解上下文",
      feature4Benefit3: "按發言者或日期篩選",
      feature4SearchPlaceholder: "🔍 搜尋：'Q4營收目標'",
      feature4SearchResults: "在3場會議中找到：",
      feature4Meeting1: "銷售規劃 - 10月15日",
      feature4Meeting1Text: '"...Q4目標設定為200萬美元..."',
      feature4Meeting2: "董事會會議 - 10月20日",
      feature4Meeting2Text: '"...Q4營收預測..."',
      workflowTitle: "如何將",
      workflowSubtitle: "無縫工作流程，捕捉每個重要時刻",
      workflowStep1Title: "錄製或上傳",
      workflowStep1Desc: "開始即時錄製或直接從Zoom、Google Meet或Microsoft Teams下載會議錄音",
      workflowStep2Title: "自動轉錄",
      workflowStep2Desc: "我們的AI將在幾分鐘內以96%準確度自動將錄音轉為文字",
      workflowStep3Title: "協作",
      workflowStep3Desc: "分享、評論並提取行動項目",
      workflowStep4Title: "搜尋與分析",
      workflowStep4Desc: "從所有會議中發現洞察",
      testimonialsTitle: "團隊愛用",
      testimonialsSubtitle: "看看企業如何改變會議文化",
      testimonial1Text: '"我們從遺漏關鍵細節到擁有每場對話的可搜尋檔案庫。直接錄製功能讓我們永遠不會忘記捕捉重要討論。"',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "產品經理, TechCorp",
      testimonial2Text: '"Otter限制我們每月只能上傳10個檔案。現在我們能立即上傳所有客戶通話。這徹底改變了我們銷售團隊的後續工作。"',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "銷售總監, ConsultPro",
      testimonial3Text: '"能搜尋數月會議記錄的功能在審計時救了我們。幾秒內就找到每個決策和批准。"',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "營運長, FinanceHub",
      ctaTitle: "不再遺失重要對話",
      ctaSubtitle: "加入數千個團隊，享受無限轉錄功能記錄每場會議",
      ctaButton: "免費開始錄製 →",
        featuresTitle2: "會議",
        workflowTitle2: "Zoom錄音轉為文字",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "教育工作者專區",
      heroTitle1: "讓學習",
      heroTitle2: "對所有人開放",
      heroSubtitle: "只需貼上YouTube連結即可獲得即時文字稿與自動生成字幕。將講座、教學影片和教育影片轉化為每位學生都能學習的可搜尋內容。",
      heroCtaPrimary: "免費試用 - 無需信用卡",
      heroCtaSecondary: "觀看示範",
      stats1Number: "一鍵",
      stats1Label: "YouTube轉錄",
      stats2Number: "100+",
      stats2Label: "支援語言",
      stats3Number: "∞",
      stats3Label: "無限影片",
      stats4Number: "96%",
      stats4Label: "準確率",
      featuresTitle: "教育工作者所需的一切",
      featuresSubtitle: "從YouTube講座到錄製課程，讓您所有內容都可存取",
      feature1Title: "即時YouTube與平台連結",
      feature1Desc: "只需貼上任何影片連結即可立即取得逐字稿。支援YouTube、Vimeo、Facebook、X (Twitter)、TikTok、Instagram、Dropbox、Google Drive等平台。無需下載，無需等待。",
      feature1Point1: "直接連結轉錄 - 無需下載",
      feature1Point2: "支援所有主要平台",
      feature1Point3: "一次處理整個播放清單",
      feature1Point4: "適用於私人影片（需授權）",
      feature2Title: "自動生成字幕",
      feature2Desc: "立即為所有教育影片建立準確字幕。讓聽障學生、非母語人士或偏好閱讀的學生都能存取內容。",
      feature2Point1: "SRT、VTT和TXT匯出格式",
      feature2Point2: "單詞級時間戳記實現完美同步",
      feature2Point3: "輕鬆編輯和自訂字幕",
      feature2Point4: "直接上傳回YouTube",
      feature2Visual1: "語言翻譯",
      feature2Visual2: "讓您的內容全球可及",
      feature3Title: "按課程與分類整理",
      feature3Desc: "建立資料夾按課程、科目或學期整理逐字稿。讓所有教育內容分類整齊且易於搜尋。建立全面的可存取課程資料庫。",
      feature3Point1: "建立無限資料夾和子資料夾",
      feature3Point2: "按主題或難度標記影片",
      feature3Point3: "批量整理多個逐字稿",
      feature3Point4: "立即搜尋所有內容",
      feature3VisualTitle: "您的課程庫",
      feature3Folder1: "數學101",
      feature3Folder2: "物理講座",
      feature3Folder3: "生物實驗影片",
      feature3Folder4: "歷史紀錄片",
      feature3Folder5: "語言學習",
      feature4Title: "AI音訊檔案轉學習指南",
      feature4Desc: "不僅僅是分享錄音。自動將講座和其他音訊檔案轉錄為詳細學習指南，包含摘要和關鍵概念，幫助學生有效複習。可匯出TXT、DOCX或PDF格式。",
      feature4Point1: "TXT適合簡單文字編輯",
      feature4Point2: "DOCX適合格式化文件",
      feature4Point3: "PDF方便分享與列印",
      feature4Point4: "批量匯出多個檔案",
      workflowTitle: "運作方式：",
      workflowSubtitle: "幾分鐘內從影片連結到可存取逐字稿與學習材料",
      workflowStep1Title: "上傳您的講座",
      workflowStep1Desc: "上傳任何音訊或影片檔案（MP3、MP4、WAV）或貼上YouTube連結",
      workflowStep2Title: "AI轉錄",
      workflowStep2Desc: "我們的AI轉錄音訊、區分講者並識別關鍵主題",
      workflowStep3Title: "生成字幕",
      workflowStep3Desc: "自動建立完美同步的字幕",
      workflowStep4Title: "匯出學習指南",
      workflowStep4Desc: "下載文字、摘要或匯出以創建最終學習指南",
      useCasesTitle: "完美滿足每項",
      useCasesSubtitle: "了解教育工作者如何使用NeverCap提升學習效果",
      useCase1Title: "錄製講座",
      useCase1Text: "轉錄整學期的錄製講座。學生可搜索特定主題、複習關鍵概念，絕不錯過重要資訊。",
      useCase2Title: "線上課程",
      useCase2Text: "透過100+種語言翻譯讓國際學生能使用您的線上課程。提高註冊率和滿意度。",
      useCase3Title: "學習材料",
      useCase3Text: "使用AI將影片教學和講座的音頻文件轉錄為學習指南。適合偏好閱讀或需快速複習可搜索文字的學生。",
      useCase4Title: "無障礙合規",
      useCase4Text: "為所有影片內容提供字幕和文字稿以滿足無障礙要求。確保所有學生平等獲取內容。",
      useCase5Title: "翻轉教室",
      useCase5Text: "課前分享附文字稿的影片講座。學生可按自身節奏預習並為討論做好準備。",
      useCase6Title: "研究與引用",
      useCase6Text: "透過時間戳幫助學生準確引用影片來源。最適合研究項目和學術論文。",
      testimonialTitle: "獲得",
      testimonialSubtitle: "了解全球教師選擇NeverCap的原因",
      testimonialText: '"我使用NeverCap轉錄整個數學教學YouTube頻道。過去其他服務需數週的工作現在僅需數小時。直接貼上連結即時獲取文字稿的功能，徹底改變了我創建無障礙內容的方式。我的國際學生尤其喜愛多語言字幕！"',
      testimonialAuthorName: "Karen Mitchell教授",
      testimonialAuthorRole: "數學教授，線上教育者",
      ctaTitle: "讓您所有教育內容無障礙",
      ctaSubtitle: "加入數千名使用真正無限轉錄的教育工作者",
      ctaButton: "免費試用NeverCap",
        featuresTitle2: "影片轉錄",
        grid: "音訊檔案轉學習指南",
        useCasesTitle2: "教育需求",
        testimonialTitle2: "50,000+教育工作者的信賴"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "下載 YouTube 影片為 MP4",
        "placeholder": "在此搜尋或貼上您的 YouTube 連結",
        "clear_icon": "清除輸入",
        "Download": "下載",
        "loading_text": "正在處理連結以下載。請停留在頁面上。",
        "howToDownload": "如何下載？",
        "tutorial": "觀看教學"
      },
      part2: {
        "title": "只需 3 個簡單步驟，即可將 YouTube 影片轉換為可下載的 MP4 檔案",
        "steps": [
                {
                  title: "複製網址",
                  content: "開啟目標 YouTube 影片，然後從瀏覽器的網址列複製連結。"
                },
                {
                  title: "貼上連結",
                  content: "前往影片下載工具，並將網址貼入輸入欄位。"
                },
                {
                  title: "下載 MP4",
                  content: "處理完成後，點擊下載按鈕儲存您的 MP4 檔案。"
                }
              ]
      },
      part3: {
        content: [
                "是否曾需要離線觀看 YouTube 影片？",
                "無論是在地鐵通勤、搭飛機、學習重要教學、深入技能提升內容，或保存重要影片素材——可靠的離線存取常令人困擾。這就是我們的下載工具大顯身手之處。",
                "下載工具讓您快速輕鬆地將 YouTube 影片轉換為 MP4 格式下載。儲存至裝置，隨時觀看。",
                "過程快速、簡單且無障礙。下載後，隨時隨地享受您喜愛的影片——無需網路。"
              ]
      },
      part4: {
        content: ["以下是下載的 5 大優勢", "將 YouTube 影片儲存為 MP4 檔案"],
        list: [
                {
                  title: "節省數據費用：",
                  content: "通常，在 YouTube 觀看影片會消耗大量行動數據。透過下載離線觀看，可避免這些不必要的費用。"
                },
                {
                  title: "隨時隨地觀看：",
                  content: "即使網路不穩，也能流暢享受影片。不再擔心緩衝。"
                },
                {
                  title: "輕鬆歸檔與保存：",
                  content: "將影片儲存為 MP4，便於建立個人收藏，特別是您認為真正有價值或重要的內容。"
                },
                {
                  title: "分享更簡單：",
                  content: "分享 MP4 檔案比傳送連結方便得多。您可直接透過 WhatsApp 或 Instagram 等應用程式傳送影片檔案，省去開啟 YouTube 的額外步驟。"
                },
                {
                  title: "即時觀看，共享時刻：",
                  content: "想興奮地向附近的朋友或家人展示喜愛的影片？下載 MP4 後，大家可立即流暢觀看，無需尷尬等待載入。"
                }
              ]
      },
      part5: {
        title: "為何我們的下載工具脫穎而出",
        cards: [
                {
                  title: "一鍵簡單操作",
                  content: "輕鬆設定，直覺操作。"
                },
                {
                  title: "極速無限",
                  content: "以最快速度轉換與下載——無上限，無限制。"
                },
                {
                  title: "即時轉換",
                  content: "立即處理檔案，無需等待。"
                },
                {
                  title: "零廣告，零干擾",
                  content: "享受無彈出視窗、橫幅廣告或中斷的潔淨介面——僅有無縫影片轉換。"
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "原始畫質保證",
                  content: "您的下載保留來源影片的完整解析度，每次播放都完美無瑕。"
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "隨處可用",
                  content: "完全相容於任何瀏覽器與裝置。"
                }
              ]
      },
      part6: {
        title: ["最大化您的 YouTube 影片下載", "透過下載工具"],
        content: [
                "輕鬆 YouTube 轉 MP4：快速、簡單且免費。",
                "這是我們的強項。我們的直覺介面設計適合所有人——無需技術能力。無論您的經驗水平如何，都能立即轉換影片。無需註冊：立即取得所需內容。",
                "請放心——您下載的 MP4 保持與 YouTube 上觀看時相同的原始畫質與清晰度。",
                "隨處可用。完全相容於所有主要平台與裝置。無論您使用 Windows、macOS、Linux、Android 或 iOS——智慧手機、平板或桌機——都能無縫下載影片。"
              ]
      },
      part7: {
        title: "下載 YouTube 影片的關鍵問題",
        list: [
                {
                  question: "如果影片有版權，我還能下載嗎？",
                  answer: "未經版權所有者許可下載有版權的 YouTube 影片是違法的。"
                },
                {
                  question: "這個下載工具安全嗎？",
                  answer: "是的，它安全可靠。我們不要求使用者提供任何個人資訊，並採取強力措施防範病毒。我們提醒您，從網路下載檔案時務必謹慎：避免點擊可疑連結或下載可疑檔案。"
                },
                {
                  question: "YouTube 轉 MP4 下載支援哪些語言？",
                  answer: "我們的服務支援下載所有熱門語言的 YouTube 影片。"
                },
                {
                  question: "哪些因素會影響下載 YouTube 影片的時間？",
                  answer: "儘管我們確保最快的下載體驗，但下載時間仍受影片長度與網路連線速度等因素影響。"
                },
                {
                  question: "當我使用智慧手機下載 MP4 影片時，它會儲存在哪裡？",
                  answer: "在智慧型手機下載MP4後，通常可在裝置檔案管理應用程式的「Downloads」資料夾中找到該檔案。"
                },
                {
                  question: "將 YouTube 影片下載為 MP4 會降低畫質嗎？",
                  answer: "不會。使用我們的工具將 YouTube 影片下載為 MP4 會保留原始畫質。轉換過程維持來源品質，確保您獲得與 YouTube 相同的觀看體驗。"
                }
              ]
      },
        err1: "YouTube 連結格式錯誤。",
        err2: "抱歉！我們目前僅支援 YouTube 連結。如需其他網站支援，我們將在未來新增時通知您。",
        videoDownload: {
              title: "下載 YouTube 影片為 MP4。免費、快速且無廣告。",
              description: "感謝您選擇我們的服務！我們真心感謝您的信任，並希望這提升了您的使用體驗。如果您能將我們的網站分享給朋友，那將是極大的幫助。",
              downloadButton: "下載",
              downloadError: "下載錯誤。"
            }
    }
  },
  About: {
    Hero: {
      "badge": "業界領先的AI技術",
      "title": "關於",
      "highlighted_text": "NeverCap",
      "description": "我們的使命是提供最精準的音視頻轉錄服務。憑藉業界領先的AI技術，我們實現超過96%的轉錄準確率。通過技術優化，部分主要語言甚至可達99%準確率。"
    },
    Stats: {
      "title": "我們的",
      "highlighted_text": "影響力",
      "subtitle": "用尖端AI技術推動全球溝通",
      "metrics": [
            {
              "value": "96%+",
              "label": "準確率",
              "description": "先進AI帶來的業界領先轉錄準確度"
            },
            {
              "value": "100+",
              "label": "支援語言",
              "description": "全球內容的語音識別"
            },
            {
              "value": "249+",
              "label": "翻譯語言",
              "description": "將轉錄文本翻譯成幾乎任何語言"
            }
          ]
    },
    Mission: {
      "title": "為何選擇",
      "highlighted_text": "NeverCap",
      "subtitle": "我們致力打破語言障礙，讓內容觸達每個人",
      "features": [
            {
              "icon": "🎯",
              "title": "無可比擬的準確性",
              "description": "我們的AI模型持續優化，提供超過96%的轉錄準確率，部分主要語言通過進階優化更可達99%。"
            },
            {
              "icon": "🌍",
              "title": "全球語言支援",
              "description": "支援100+種語音識別和249+種語言翻譯，讓您的內容真正全球化。"
            },
            {
              "icon": "⚡",
              "title": "閃電般快速處理",
              "description": "數分鐘即可處理數小時音視頻內容。優化的AI流程確保您在保持質量的同時快速獲得轉錄稿。"
            },
            {
              "icon": "🔒",
              "title": "企業級安全",
              "description": "您的數據安全是我們的首要任務。我們採用業界標準加密並遵守全球隱私法規，確保內容安全保密。"
            }
          ]
    },
    Company: {
      "title": "公司",
      "highlighted_text": "資訊",
      "subtitle": "如有任何問題或需要支援，請聯繫我們",
      "details": [
            {
              "label": "公司名稱",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "總部",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "美國"]
            },
            {
              "label": "聯絡我們",
              "value": ["電子郵件", "24/7全天候支援"]
            }
          ]
    },
    CTA: {
      "title": "準備好體驗差異了嗎？",
      "subtitle": "加入數千名信賴NeverCap轉錄服務的專業人士",
      "button": "免費試用 NeverCap →",
      "disclaimer": "無需信用卡 • 數秒內開始轉錄"
    }
  },
  Privacy: {
    title: "隱私",
    titleGradient: "政策",
    subtitle: "了解我們如何收集、使用及保護您的個人資訊",
    "lastUpdated": "最後更新：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "privacyPolicyTitle": "隱私權政策",
    "policyAgreement": "請仔細閱讀本隱私權政策並確保您理解其內容。使用我們的任何服務即表示您同意本隱私權政策。若您不同意我們依本政策使用您的個人資料，必須立即停止使用我們的服務。",
    "policyOverview": "本政策說明：我們收集的資料及其原因；您的資料處理方式；以及您對資料的權利。我們不會出售您的資料。",
    "scopeTitle": "1. 隱私權政策範圍",
    "scopeDescription": "本隱私權政策僅適用於我們對服務用戶資訊的收集與處理。本政策不適用於第三方營運的服務、網站或軟體（無論連結由我們提供或用戶分享），亦不適用於第三方內容、資料、應用程式或素材。建議您在使用第三方網站或軟體前查閱其隱私權政策。",
    "collectionTitle": "2. 我們收集的資料及其原因",
    "collectionPrinciple": "我們的指導原則是僅收集必要資料。實際操作如下：",
    "identityTitle": "2.1 身分與存取",
    "identityDescription": "當您註冊我們的產品時，我們會要求提供身分識別資訊（如姓名、電子郵件地址），以提供基本產品功能並發送產品更新等重要資訊。",
    "billingTitle": "2.2 帳單資訊",
    "billingDescription": "若註冊付費產品，需提供付款資訊及帳單地址。付款資訊將直接提交至支付處理商，不會經過我們的伺服器。",
    "productInteractionsTitle": "2.3 產品互動",
    "productInteractionsDescription": "我們會在伺服器儲存您上傳、接收或維護於產品帳戶的內容。除非您刪除，否則將在帳戶有效期間保留這些內容。",
    "websiteInteractionsTitle": "2.4 網站互動",
    "websiteInteractionsDescription": "我們會收集瀏覽活動資訊以進行分析統計（如轉換率測試與新產品設計實驗），包括瀏覽器與作業系統版本、IP位址、訪問網頁與載入時間、推薦來源等。若您登入帳戶，這些分析資料將與IP位址及帳戶綁定直至帳戶失效。",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "我們使用持久性第一方Cookie及部分第三方Cookie來儲存偏好設定、簡化應用程式使用、執行A/B測試及支援分析。",
    "cookiesDescription2": "Cookie是瀏覽器儲存的文字片段，可記住登入資訊與網站偏好，並收集瀏覽器類型、作業系統、訪問網頁、停留時間、瀏覽內容等點擊流資料。您可在瀏覽器設定中調整Cookie保留設定或封鎖個別Cookie，但關閉Cookie可能導致應用程式無法運作或服務異常。",
    "correspondenceTitle": "2.6 主動聯繫",
    "correspondenceDescription": "當您透過電子郵件提問或求助時，我們會保留通訊記錄（含郵件地址）以供未來參考。",
    "accessTitle": "3. 我們存取或分享資訊的時機",
    "accessDescription1": "為提供您要求的產品或服務。我們使用第三方子處理者協助運作應用程式與提供服務，包括雲端與分析服務商。",
    "accessDescription2": "為調查、防止或處理濫用行為。僅在必要時才會存取客戶帳戶調查潛在濫用，我們致力平衡客戶隱私與舉報者安全。若發現產品用於受限用途，將採取必要行動（包括通報相關單位）。",
    "accessDescription3": "依適用法律要求時。",
    "dataRequests": "用戶資料請求。原則上我們僅在法定程序強制或緊急情況下回應政府資料請求。若美國執法機關出示有效令狀、刑事傳票或法庭命令，我們必須配合；對美國境外政府請求，僅在依《司法互助條約》程序被強制時回應。除非法律禁止，我們會在分享資料前通知受影響用戶（緊急情況除外）。",
    "preservationRequests": "資料保存請求。我們僅依《美國聯邦儲存通訊法》18 U.S.C.第2703(f)條或民事傳票要求保存資料，且除非法律強制或不可上訴的法庭命令，否則不會分享。若保存期限屆滿前未接獲適當令狀，將銷毀所有客戶資料副本。",
    "taxAudits": "若接受稅務機關稽核，可能需要分享帳單相關資訊（如帳單地址與免稅資料），且僅提供最低必要內容。",
    "securityTitle": "4. 資料安全措施",
    "securityDescription": "所有資料從伺服器傳輸至瀏覽器時皆透過SSL/TLS加密。",
    "deletionTitle": "5. 刪除內容的後果",
    "deletionDescription": "刪除內容後將立即無法存取。",
    "locationTitle": "6. 網站與資料位置",
    "locationDescription": "我們的產品與網路服務營運於美國。若您位於歐盟、英國或其他非美國地區，請注意您提供的資訊將傳輸並儲存於美國。使用我們的網站/服務或提供個人資訊即表示您同意此傳輸。",
    "childrenTitle": "7. 兒童隱私",
    "updatesTitle": "8. 隱私權政策更新",
    "updatesDescription": "我們可能依法規要求或實務變更更新政策。重大變更時會更新頁首日期。",
    "contactTitle": "9. 聯絡我們",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "：",
      policyDescription: "本政策說明 NeverCap（以下稱「NeverCap」、「我們」、「我方」）在您使用我們的服務、網站（{url}）和軟體（統稱「服務」）時，如何收集、使用和披露您的個人資訊。",
      childrenDescription: "本服務不針對兒童，我們不會故意收集13歲以下兒童的個人資訊。若您未滿13歲，請勿透過本服務提交任何個人資訊。如果您認為有兒童違反本政策向我們提供了個人資訊，請透過下方{at}{email}與我們聯絡。",
      contactDescription: "如果您對我們的隱私政策有任何疑問、意見或投訴，請透過{at}{email}與我們聯絡，我們將盡快處理您的投訴。"
},
  TermsOfUse: {
    title: "服務",
    titleGradient: "條款",
    subtitle: "使用我們的服務前，請仔細閱讀這些條款",
    "lastUpdated": "最後更新：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "termsOfServiceTitle": "服務條款",
    "thankYou": "感謝您使用我們的產品！",
    "companyDefinition": "本文件中提及的「公司」、「我們」、「我們的」或「我方」均指NeverCap。",
    "servicesDefinition": "我們所說的「服務」是指由NeverCap創建和維護的任何產品，無論是通過網頁瀏覽器、桌面應用程式、移動應用程式或其他形式提供。",
    "termsUpdate": "我們可能會在未來更新這些服務條款。通常這些變更是為了通過鏈接擴展的相關政策來澄清某些條款。每當我們對政策進行重大更改時，我們將更新本頁頂部的日期，並採取其他適當措施通知帳戶持有人。",
    "acceptanceTitle": "1. 協議接受",
    "acceptanceDescription1": "使用我們的服務即表示您接受本協議，該協議因此成為您與NeverCap之間的具有約束力的合同。您聲明您具有合法接受這些條款的能力，並確認您已達到形成具有約束力的合同的法定年齡。NeverCap的接受明確以您同意本協議的所有條款和條件為前提。",
    "eligibilityRequirement": "本服務不適用於18歲以下的任何人，也不應由18歲以下的任何人使用。通過使用本服務，您聲明並保證您符合上述資格要求。",
    "userResponsibility": "術語「您」、「您的」、「您自己」還包括您的員工、代理人、業務代表以及您通過您的帳戶（如下定義）提供服務訪問權限的任何其他個人。您有責任確保通過您的帳戶訪問服務的所有人員知曉並遵守這些條款。",
    "termsRevision": "NeverCap保留隨時自行修訂和更新這些條款的權利。所有更改在發布後立即生效。您在發布修訂條款後繼續使用服務即表示您接受並同意這些更改。您應不時檢查本頁面以了解任何更改，因為它們對您具有約束力。",
    "servicesTitle": "2. NeverCap的服務",
    "servicesDescription1": "我們的服務使用戶能夠將語音對話轉換為可搜索、翻譯並與他人共享的轉錄文本。",
    "servicesOptions": "您可以選擇使用服務的免費版本（「免費服務」）或可能需要支付費用的訂閱付費版本（「付費服務」）。",
    "servicesAccess": "我們將向您提供服務。您負責為您訪問服務做出所有必要的安排。",
    "accountTermsTitle": "3. 帳戶條款",
    "accountSecurity": "您有責任維護帳戶的安全。對於您未能遵守此安全義務而導致的任何損失或損害，本公司不承擔且將不承擔責任。",
    "lawfulUse": "您不得將服務用於任何非法、不道德或不道德的目的。",
    "contentResponsibility": "您對帳戶下發布的所有內容和發生的活動負責。這包括以下人員發布的內容：（a）擁有您的登錄憑據；或（b）在您的帳戶下擁有自己的登錄權限。",
    "humanRequirement": "您必須是人類。不允許通過「機器人」或其他自動化方法註冊帳戶。",
    "paymentTitle": "4. 付款、退款和計劃變更",
    "freeTrial": "對於提供免費試用的付費服務，我們會在您註冊時解釋試用期的長度。試用期結束後，您需要預付費用才能繼續使用服務。如果您不付款，這些服務將終止。",
    "upgradePolicy": "如果您從免費計劃升級到付費計劃，我們將立即向您的卡收費，您的計費週期從升級當天開始。",
    "taxes": "所有費用均不含稅務機關徵收的任何稅款、徵費或關稅。在需要的情況下，我們將代表稅務機關收取這些稅款並將其繳納給稅務機關。否則，您應負責支付所有稅款、徵費或關稅。",
    "refunds": "所有購買均不可退款。您可以隨時通過登錄您的帳戶取消任何付費服務。對於付費訂閱，除非另有說明，否則您的取消將在當前付費期結束時生效。",
    "cancellationTitle": "5. 取消和終止",
    "cancellationPolicy": "如果您在任何預付時間結束前取消服務，您的取消將立即生效，並且您將不會再次被收費。我們不會自動按比例退還最後一個計費週期中未使用的時間。",
    "terminationRights": "我們有權隨時以任何理由暫停或終止您的帳戶，並拒絕您當前或將來使用我們的服務的任何和所有權利。暫停意味著您將無法訪問帳戶或帳戶中的任何內容。終止還將導致您的帳戶或對帳戶的訪問被刪除，以及帳戶中所有內容的沒收和放棄。我們還保留隨時以任何理由拒絕任何人使用服務的權利。我們有這條款是因為從統計上講，在我們服務上的數十萬個帳戶中，至少有一個在做一些邪惡的事情。",
    "abusePolicy": "對公司員工或官員的口頭、身體、書面或其他虐待（包括虐待或報復的威脅）可能導致立即終止帳戶。",
    "submissionsTitle": "6. 提交",
    "submissionsDescription": "您承認並同意，您向我們提供的關於網站（「提交」）的任何問題、評論、建議、想法、反饋或其他信息均為非保密信息，並將成為我們的獨有財產。我們應擁有獨家權利，包括所有知識產權，並有權不受限制地將這些提交用於任何合法目的，無論是商業還是其他目的，而無需向您確認或補償。您在此放棄對任何此類提交的所有道德權利，並在此保證任何此類提交均為您原創或您有權提交此類提交。您同意，對於您提交的任何專有權利的所謂或實際侵權或盜用，我們不承擔任何責任。",
    "uptimeTitle": "7. 運行時間和安全性",
    "serviceAvailability": "您使用服務的風險由您自行承擔。我們「按原樣」和「可用」提供這些服務。我們不為大多數服務提供服務水平協議，但確實認真對待我們應用程序的運行時間。",
    "throttlingPolicy": "我們保留在極少數情況下暫時限制或限制帳戶訪問的權利，這些情況下用戶的活動被證實對其他用戶的服務穩定性和性能產生負面影響。在除最關鍵情況外的所有情況下，我們將在採取行動前與您聯繫以尋找解決方案。",
    "dataSecurity": "我們通過備份、冗餘和加密採取許多措施來保護和保護您的數據。我們強制對通過公共互聯網傳輸的數據進行加密。",
    "thirdPartyVendors": "我們使用第三方供應商和託管合作夥伴來提供運行服務所需的硬件、軟件、網絡、存儲和相關技術。",
    "siteManagementTitle": "8. 網站管理",
    "siteManagementDescription": "我們保留但不限於以下權利：（1）監控網站以查找違反這些服務條款的行為；（2）對我們自行判斷違反法律或這些服務條款的任何人採取適當的法律行動，包括但不限於向執法機關報告此類用戶；（3）在我們自行判斷且不受限制的情況下，拒絕、限制訪問、限制可用性或禁用（在技術可行的範圍內）您的貢獻或其任何部分；（4）在我們自行判斷且無需通知或責任的情況下，從網站中刪除或以其他方式禁用所有過大或對我們的系統造成任何負擔的文件和內容；以及（5）以旨在保護我們的權利和財產並促進網站正常運行的方式管理網站。",
    "copyrightTitle": "9. 版權和內容所有權",
    "copyrightCompliance": "服務上發布的所有內容必須符合美國版權法。",
    "ipRights": "我們不對您提供給服務的材料主張任何知識產權。所有上傳的材料仍歸您所有。",
    "contentModeration": "我們不對內容進行預先審查，但保留在我們自行判斷下拒絕或刪除通過服務提供的任何內容的權利（但非義務）。",
    "prohibitedExploitation": "您同意未經公司明確書面許可，不得複製、複製、銷售、轉售或利用服務的任何部分、服務的使用或對服務的訪問。",
    "impersonationProhibition": "您不得修改其他網站以虛假暗示其與服務或公司有關聯。",
    "dmcaPolicy": "我們尊重他人的知識產權。如果您認為網站上或通過網站提供的任何材料侵犯了您擁有或控制的任何版權，請立即聯繫我們。您的通知副本將發送給在通知中提到的發布或存儲材料的人。請注意，根據適用法律，如果您在通知中做出重大虛假陳述，您可能會對損害賠償負責。因此，如果您不確定網站上或鏈接到網站的材料是否侵犯了您的版權，您應考慮首先聯繫律師。",
    "prohibitedActivitiesTitle": "10. 禁止活動",
    "generalProhibition": "您不得以非本網站提供之目的存取或使用本網站。除非經我們特別認可或批准，否則本網站不得用於任何商業活動。",
    "userObligations": "作為本網站用戶，您同意不得：",
    "dataScraping": "未經我們書面許可，系統性地從本網站檢索數據或其他內容以直接或間接創建或編纂任何集合、彙編、數據庫或目錄。",
    "fraud": "欺騙、詐騙或誤導我們及其他用戶，尤其是試圖獲取敏感帳戶資訊（如用戶密碼）的行為。",
    "securityInterference": "規避、停用或以其他方式干擾本網站的安全相關功能，包括防止或限制內容使用/複製的功能，或對本網站及/或其內容使用施加限制的功能。",
    "defamation": "以我們認為會貶低、玷污或以其他方式損害我們及/或本網站的方式行事。",
    "harassment": "使用從本網站獲得的任何資訊騷擾、虐待或傷害他人。",
    "supportAbuse": "不當使用我們的支援服務或提交虛假的濫用或行為不檢報告。",
    "legalCompliance": "以任何違反適用法律或法規的方式使用本網站。",
    "framingProhibition": "未經授權對本網站進行框架處理或建立連結。",
    "malware": "上傳或傳輸（或嘗試上傳/傳輸）病毒、木馬程式或其他可能干擾任何方正常使用本網站的材料，包括過度使用大寫字母和垃圾訊息（重複張貼相同內容），這些行為可能修改、損害、中斷、改變或干擾本網站的使用、功能、運作或維護。",
    "automation": "從事任何自動化系統使用行為，例如使用腳本發送評論/訊息，或使用數據挖掘、機器人或其他類似數據收集/提取工具。",
    "copyrightRemoval": "刪除任何內容中的版權或其他專有權利聲明。",
    "impersonation": "試圖冒充其他用戶/人士或使用其他用戶的用戶名。",
    "spyware": '上傳或傳輸（或嘗試上傳/傳輸）任何作為被動/主動資訊收集/傳輸機制的材料，包括但不限於透明GIF（\"gifs\"）、1×1像素、網頁蟲、Cookie或其他類似設備（有時稱為\"間諜軟體\"、\"被動收集機制\"或\"pcms\"）。',
    "disruption": "干擾、中斷或對本網站及相連網絡/服務造成不當負擔。",
    "employeeHarassment": "騷擾、煩擾、恐嚇或威脅任何為您提供本網站服務的員工/代理人。",
    "accessCircumvention": "試圖繞過本網站設計用於防止/限制存取的任何措施。",
    "codeCopying": "複製或改編本網站軟體，包括但不限於Flash、PHP、HTML、JavaScript或其他代碼。",
    "reverseEngineering": "除適用法律許可外，不得對構成網站部分的任何軟體進行反編譯、反組譯或逆向工程。",
    "bots": "除標準搜索引擎/瀏覽器使用結果外，不得使用/啟動/開發/分發任何自動化系統（包括蜘蛛程序、機器人、作弊工具、爬蟲或離線閱讀器），亦不得使用/啟動任何未經授權的腳本/軟體。",
    "buyingAgents": "不得使用購買代理在本網站進行交易。",
    "unauthorizedUse": "不得未經授權使用本網站，包括以電子等方式收集用戶名/電子郵件地址發送未經請求的郵件，或以自動化方式/虛假藉口創建帳戶。",
    "competition": "不得將本網站用於與我們競爭之行為，或將本網站/內容用於任何營利活動/商業企業。",
    "advertising": "不得使用本網站宣傳或銷售商品/服務。",
    "profileTransfer": "不得出售或轉讓您的個人資料。",
    "featuresTitle": "11. 功能與錯誤",
    "featuresDescription": "我們根據自身經驗及客戶反饋精心設計服務，但無法保證服務能滿足所有人的特定需求或期望。",
    "bugsDescription": "我們會在發布前測試所有功能。如同所有軟體，我們的服務難免存在錯誤。我們會追蹤並處理回報的錯誤（特別是安全/隱私相關問題），但無法保證修正所有錯誤或提供完全無誤的服務。",
    "correctionsTitle": "12. 更正",
    "informationAccuracy": "本網站資訊可能包含排版錯誤、不準確或遺漏（包括描述、價格、庫存等）。我們保留隨時更正錯誤/更新資訊的權利，恕不另行通知。",
    "siteAvailability": "我們無法保證網站持續可用。可能因硬體/軟體問題或維護導致中斷/延遲。我們保留隨時修改/暫停/終止網站服務的權利，對於無法使用網站造成的損失概不負責。本服務條款不構成我們必須維護網站或提供修正/更新的義務。",
    "userDataTitle": "13. 用戶數據",
    "userDataDescription": "我們會保存您傳送至網站的數據以管理服務效能。雖然我們定期備份數據，但您需對使用網站產生的所有數據負責。對於數據遺失/損壞我們不承擔責任，您特此放棄因此對我們提起的任何訴訟權利。",
    "privacyPolicyTitle": "14. 隱私政策",
    "liabilityTitle": "15. 責任限制",
    "liabilityIntroduction": "我們在此集中聲明責任限制：",
    "liabilityWaiver": "您明確理解並同意，無論依法律或衡平原則，本公司對您或第三方均不承擔任何直接/間接/附帶/利潤損失/特殊/衍生/懲罰性損害賠償責任（包括但不限於利潤、商譽、使用權、數據等無形損失），該等責任可能產生自：(1)使用或無法使用服務；(2)內容錯誤/不準確；(3)使用網站導致的人身/財產損害；(4)因服務購買/獲取商品/數據/訊息產生的替代品採購成本；(5)未經授權存取我們的伺服器及儲存的個人/財務資訊；(6)傳輸中斷/中止；(7)第三方透過網站傳播的病毒/惡意程式；(8)使用網站內容導致的任何錯誤/遺漏/損失；(9)第三方在服務中的言行；(10)與本服務條款/服務相關的任何其他事項（無論基於違約、侵權（含過失）或其他責任理論）。",
    "miscellaneousTitle": "16. 其他條款",
    "miscellaneousDescription": "本服務條款及我們發布的相關政策構成完整協議。我們未行使條款權利不構成棄權。本條款在法律允許最大範圍內有效。我們可隨時轉讓權利義務。對於不可抗力造成的損失不承擔責任。若條款部分內容無效，不影響其他條款效力。本條款不建立合資/僱傭/代理關係。您同意不因我們起草條款而對其作不利解釋。您特此放棄基於電子形式及未簽署本條款的所有抗辯權。",
    "contactTitle": "17. 聯絡我們",
    "neverCap": "NeverCap",
    "site": "網站",
    "services": "服務",
    at: "：",
      trademarkProtection: "本服務的名稱、外觀和風格均屬本公司版權©所有。保留所有權利。未經本公司明確書面許可，您不得複製、抄襲或重複使用任何HTML、CSS、JavaScript或視覺設計元素。如欲將本公司標誌或任何服務標誌用於宣傳目的，必須事先取得許可。請將標誌使用申請寄至{at}{email}。若您違反本服務條款，我們保留撤銷此許可的權利。",
      privacyPolicyDescription: "我們重視資料隱私與安全。請查閱我們的{policy}。使用本網站即表示您同意遵守我們的隱私政策，該政策已納入本服務條款。請注意，本網站位於美國。若您從其他法律對個人資料收集、使用或披露有不同要求的地區訪問本網站，則透過持續使用本網站，您即同意將資料轉移至美國並在美國進行處理。",
      contactDescription: "若您對服務條款有任何疑問，請透過{at}{email}與我們聯絡。"
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
