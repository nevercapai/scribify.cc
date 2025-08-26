let message = {
  // 首页
  HomePage: {
    home: "全部转录",
    times: "每天{times}次免费转录，今天剩余{left}次。",
    tips: "升级到专业版以获得无限转录。",
    update: "立即升级",
    rename: "重命名",
    delete: "删除",
    cancel: "取消",
    confirm: "创建",
    dialogLabel: "文件夹名称",
    recently: "最近文件",
    loading: "加载中",
    tour: {
      step0: {
        title: "欢迎使用 {name}",
        tip: "在这里，您可以：",
        content: "转录一次性对话、会议、讲座等",
        next: "开始使用"
      },
      step1: {
        title: "转录文件",
        content: "支持三种转录方式：本地文件、链接和录音。"
      },
      step2: {
        title: "创建文件夹",
        content: '点击"+"创建文件夹并整理您的文件。'
      },
      step3: {
        title: "查看转录详情并编辑",
        content: "点击项目以查看转录详情并进行编辑和翻译。"
      },
      next: "下一步",
      finish: "知道了"
    },
    export: {
      export: "导出",
      title: "我们正在生成您的导出文件",
      title2: "您的文件已准备就绪",
      singleLoadingContent: "正在压缩 1 个文件。",
      singleSuccessContent: "已压缩 1 个文件。",
      loadingContent: "正在压缩 {num} 个文件。",
      successContent: "已压缩 {num} 个文件。",
      cancel: "取消导出",
      error: "导出错误",
      dialog: {
        title: "警告",
        content: "取消导出？",
        cancel: "取消导出",
        continue: "继续导出"
      }
    },
    welcome: {
      title: "欢迎使用 Scribify！",
      description: "在这里，您可以：",
      transcribe:
        "使用 Scribify 轻松转录—瞬间将语音对话转换为清晰、可搜索和可共享的文本。",
      precision: "立即获得带有说话者识别和时间戳的精确转录。",
      translate: "打破语言障碍：轻松将转录翻译成200多种语言。",
      edit: "编辑、完善并以适合您需求的格式导出转录文本。",
      collaborate: "通过与他人共享转录文本进行协作。",
      button: "开始使用",
      tip: "准备好将音频转换为转录文本了吗？现在就开始探索！",
      tip2: "立即开始探索！",
      tip1: "准备好将音频转换为转录文本吗？ "
    },
    subscriptionModal: {
      left: {
        title: "获取专业版解锁更多功能",
        c1: "无限转录",
        c2: "10小时上传",
        c3: "最高优先级",
        c4: "99%转录准确率",
        c5: "支持100多种语言",
        c6: "说话者识别",
        c7: "转录翻译",
        t1: "为一个人提供无限转录。",
        t2: "每个文件可长达10小时/5 GB。一次上传50个文件。",
        t3: "我们将始终以最高优先级尽快转录您的文件。"
      },
      right: {
        title: "获取专业版",
        yearly: "年付",
        monthly: "月付",
        save: "节省",
        preMonth: "每月",
        preYear: "每年",
        firstMonth: "第一个月",
        afterwards: "之后"
      },
      subscribe: "订阅"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "失败",
      selected: "已选择",
      success: "成功",
      fileList: "文件列表"
    },
    dialog: {
      move: {
        title: "移动",
        label: "选择文件夹",
        placeholder: "选择文件夹",
        confirm: "移动",
        cancel: "取消"
      },
      rename: {
        title: "重命名",
        label: "文件名",
        confirm: "重命名",
        cancel: "取消"
      },
      delete: {
        title: "删除",
        file: "文件",
        files: "文件",
        label: "确认删除？此操作无法撤销。",
        confirm: "删除",
        cancel: "取消"
      },
      share: {
        title: "分享",
        label: "任何拥有以下安全链接的人都可以查看此转录文本和相关的媒体文件。",
        confirm: "复制链接",
        success: "复制成功"
      },
      export: {
        title: "导出",
        select: "选择你需要的格式",
        settings: "设置",
        speaker: "包含说话人",
        timecodes: "包含时间码",
        confirm: "导出",
        cancel: "取消",
        selectErr: "请选择一个或多个格式"
      }
    },
    search: {
      placeholder: "搜索"
    },
    recently: "最近",
    record: "录音",
    transcribe: "转录",
    unclassified: "未分类文件夹",
    buttons: {
      transcribe: "转录文件",
      url: "转录链接",
      record: "录音并转录",
      recording: "录音中..."
    },
    delSuccess: "删除成功",
    create: "创建",
    endRecord: {
      title: "提示",
      content: "您正在录音。此操作将结束录音。您要结束录音吗？",
      confirm: "继续录音",
      cancel: "结束录音"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "录音",
      pause: "暂停",
      resume: "继续",
      stop: "停止",
      endRecord: "结束录制",
      delete: "删除",
      transcribe: "转录",
      permissionDenied: "麦克风权限被拒绝或设备不存在",
      dialog: {
        delete: {
          title: "警告",
          label: "您确定要删除此录音吗？",
          confirm: "删除",
          cancel: "取消"
        },
        complete: {
          title: "录音完成",
          label: "录音已达到10小时并自动停止。请进行转录。",
          confirm: "知道了"
        },
        speaker: {
          content: "说话人识别功能限制为3小时内的文件。请取消勾选'{text}'。"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "转录在线媒体",
        title: "粘贴链接",
        label:
          "粘贴视频或音频链接，支持：YouTube、Facebook、X、Dropbox、Google Drive、Vimeo、TikTok、Instagram 等平台...",
        confirm: "添加",
        cancel: "取消",
        errorTitle: "您输入的链接地址不正确。请检查后重试。",
        linkName: "链接"
      },
      file: {
        orTitle: "从 URL 转录",
        dialogTitle: "上传文件进行转录",
        tip1: "将文件拖到此处或单击以浏览",
        tip2: "点击浏览",
        or: "或",
        supported: "支持的格式"
      },
      del: {
        title: "警告",
        content: "所有进度将丢失。确认取消转录？",
        cancel: "确认取消",
        confirm: "继续转录"
      },
      files: "文件",
      resultDialogTitle: "转录文件",
      resultDialogTitle2: "转录文件",
      cancel: "取消",
      confirm: "转录",
      return: "返回",
      addMore: "添加更多",
      language: "选择语言",
      failed: "失败",
      tooLarge: "文件超出限制（5GB）。",
      linkUpload: "上传中",
      fileFormat: "文件格式不被允许",
      localFiles: "本地文件",
      pasteLink: "在线链接",
      uploadErr: "上传错误",
      hashErr: "哈希错误",
      table: {
        status: "状态",
        file: "文件",
        size: "大小",
        noData: "无数据"
      },
      maxFileNum: "文件数量不能超过 {num}。",
      speaker: "识别说话人",
      speakerLabel: "自动识别说话人",
      guest: {
        transcribe: "转录",
        file: "文件",
        audio: "音频/视频文件",
        Uploading: "正在上传..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "最近",
      popular: "常用",
      other: "其他",
      searchLanguage: "搜索语言",
      noMatch: "未找到匹配的语言",
      English: "英语",
      "English(US)": "英语（美国）",
      "English(UK)": "英语（英国）",
      Spanish: "西班牙语",
      Portuguese: "葡萄牙语",
      French: "法语",
      Italian: "意大利语",
      German: "德语",
      Dutch: "荷兰语",
      Polish: "波兰语",
      Danish: "丹麦语",
      Japanese: "日语",
      Korean: "韩语",
      Hungarian: "匈牙利语",
      Czech: "捷克语",
      Chinese: "中文",
      Hebrew: "希伯来语",
      Arabic: "阿拉伯语",
      Azerbaijani: "阿塞拜疆语",
      Estonian: "爱沙尼亚语",
      Belarusian: "白俄罗斯语",
      Bulgarian: "保加利亚语",
      Icelandic: "冰岛语",
      Bosnian: "波斯尼亚语",
      Persian: "波斯语",
      Russian: "俄语",
      "Chinese(Traditional)": "繁体中文",
      Finnish: "芬兰语",
      Kazakh: "哈萨克语",
      Galician: "加利西亚语",
      Catalan: "加泰罗尼亚语",
      "Chinese(Simplified)": "简体中文",
      Kannada: "卡纳达语",
      Croatian: "克罗地亚语",
      Latvian: "拉脱维亚语",
      Lithuanian: "立陶宛语",
      Romanian: "罗马尼亚语",
      Marathi: "马拉地语",
      Malay: "马来语",
      Macedonian: "马其顿语",
      Maori: "毛利语",
      Afrikaans: "南非语 (阿非利卡语)",
      Nepali: "尼泊尔语",
      Norwegian: "挪威语",
      Swedish: "瑞典语",
      Serbian: "塞尔维亚语",
      Slovak: "斯洛伐克语",
      Slovenian: "斯洛文尼亚语",
      Swahili: "斯瓦希里语",
      Tagalog: "菲律宾语",
      Tamil: "泰米尔语",
      Thai: "泰语",
      Turkish: "土耳其语",
      Welsh: "威尔士语",
      Urdu: "乌尔都语",
      Ukrainian: "乌克兰语",
      Greek: "希腊语",
      Armenian: "亚美尼亚语",
      Hindi: "印地语",
      Indonesian: "印度尼西亚语",
      Vietnamese: "越南语",
      Albanian: "阿尔巴尼亚语",
      Amharic: "阿姆哈拉语",
      Assamese: "阿萨姆语",
      Occitan: "奥克语",
      Bashkir: "巴什基尔语",
      Basque: "巴斯克语",
      Breton: "布列塔尼语",
      Tibetan: "藏语",
      Faroese: "法罗语",
      Sanskrit: "梵语",
      Khmer: "高棉语",
      Georgian: "格鲁吉亚语",
      Gujarati: "古吉拉特语",
      "Haitian Creole": "海地克里奥尔语",
      Hausa: "豪萨语",
      Latin: "拉丁语",
      Lao: "老挝语",
      Lingala: "林加拉语",
      Luxembourgish: "卢森堡语",
      Malagasy: "马尔加什语",
      Maltese: "马耳他语",
      Malayalam: "马拉雅拉姆语",
      Mongolian: "蒙古语",
      Bengali: "孟加拉语",
      Burmese: "缅甸语",
      Punjabi: "旁遮普语",
      Pashto: "普什图语",
      Sinhala: "僧伽罗语",
      Shona: "修纳语",
      Somali: "索马里语",
      Tajik: "塔吉克语",
      Tatar: "鞑靼语",
      Telugu: "泰卢固语",
      Turkmen: "土库曼语",
      Uzbek: "乌兹别克语",
      Hawaiian: "夏威夷语",
      "Norwegian Nynorsk": "新挪威语",
      Sindhi: "信德语",
      Sundanese: "巽他语",
      Yiddish: "意第绪语",
      Yoruba: "约鲁巴语",
      Javanese: "爪哇语",
      Cantonese: "粤语",
      Abkhaz: "阿布哈兹语",
      Afar: "阿法尔语",
      alz: "阿卢尔语",
      ach: "阿乔利语",
      awa: "阿瓦德语",
      Avaric: "阿瓦尔语",
      Ewe: "埃维语",
      Aymara: "艾马拉语",
      Irish: "爱尔兰语",
      Oriya: "奥利亚语",
      Oromo: "奥罗莫语",
      Ossetian: "奥塞梯语",
      tpi: "巴布亚皮钦语",
      bew: "巴达维语",
      ban: "巴厘语",
      btx: "巴塔克卡罗语",
      bbc: "巴塔克托巴语",
      bts: "巴塔克西马隆贡语",
      bci: "巴乌雷语",
      Bambara: "班巴拉语",
      pag: "邦阿西楠语",
      pam: "邦板牙语",
      nso: "北索托语",
      bem: "奔巴语",
      bik: "比科尔语",
      bal: "俾路支语",
      bho: "博杰普尔语",
      bua: "布里亚特语",
      chm: "草原马里语",
      Chamorro: "查莫罗语",
      Chechen: "车臣语",
      chk: "楚克语",
      Chuvash: "楚瓦什语",
      Tswana: "茨瓦纳语",
      Tsonga: "聪加语",
      "fa-AF": "达里语",
      shn: "掸语",
      tet: "德顿语",
      Divehi: "迪维希语",
      dyu: "迪尤拉语",
      tiv: "蒂夫语",
      din: "丁卡语",
      doi: "多格拉语",
      "ndc-ZW": "恩道语",
      "South Ndebele": "恩德贝莱语（南部）",
      dov: "恩敦贝语",
      "bm-Nkoo": "恩科字母（西非书面文字）",
      "French(Canada)": "法语（加拿大）",
      Fijian: "斐济语",
      fon: "丰语",
      "Western Frisian": "弗里西语",
      fur: "弗留利语",
      Fulah: "富拉尼语",
      Kongo: "刚果语",
      Kalaallisut: "格陵兰语",
      gom: "贡根语",
      Guarani: "瓜拉尼语",
      cnh: "哈卡钦语",
      hrx: "洪斯吕克语",
      Kyrgyz: "吉尔吉斯语",
      ktu: "吉土巴语",
      gaa: "加语",
      kac: "景颇语",
      Kanuri: "卡努里语",
      kha: "卡西语",
      kek: "凯克其语",
      Komi: "科米语",
      Xhosa: "科萨语",
      Corsican: "科西嘉语",
      "crh-Latn": "克里米亚鞑靼语（拉丁文）",
      crh: "克里米亚鞑靼语（西里尔文）",
      Quechua: "克丘亚语",
      Kurdish: "库尔德语（库尔曼吉语）",
      ckb: "库尔德语（索拉尼）",
      trp: "廓克博若克语",
      ltg: "拉特加莱语",
      lij: "利古里亚语",
      Limburgish: "林堡语",
      Kirundi: "隆迪语",
      luo: "卢奥语",
      Luganda: "卢干达语",
      Kinyarwanda: "卢旺达语",
      lmo: "伦巴第语",
      rom: "罗姆语",
      mad: "马都拉语",
      Manx: "马恩岛语",
      mwr: "马尔瓦迪语",
      "ms-Arab": "马来语（爪夷文）",
      Marshallese: "马绍尔语",
      mam: "玛姆语",
      mai: "迈蒂利语",
      mfe: "毛里裘斯克里奥耳语",
      "mni-Mtei": "梅泰语（曼尼普尔语）",
      min: "米南语",
      lus: "米佐语",
      hmn: "苗语",
      nhe: "纳瓦特尔语（东部瓦斯特卡）",
      "Southern Sotho": "南索托语",
      new: "尼泊尔语言（尼瓦尔语）",
      nus: "努尔语",
      pap: "帕皮阿门托语",
      "pa-Arab": "旁遮普语（沙木基文）",
      "pt-PT": "葡萄牙语（葡萄牙）",
      Chichewa: "齐切瓦语",
      cgg: "奇加语",
      lua: "奇卢伯语",
      Akan: "契维语",
      zap: "萨巴特克语",
      "Northern Sami": "萨米语（北部）",
      Samoan: "萨摩亚语",
      kri: "塞拉利昂克里奥尔语",
      crs: "塞舌尔克里奥尔语",
      Sango: "桑戈语",
      "sat-Latn": "桑塔利语（拉丁文）",
      sat: "桑塔利语（欧甘文）",
      Esperanto: "世界语",
      Swati: "斯瓦特语",
      "Scottish Gaelic": "苏格兰盖尔语",
      sus: "苏苏语",
      ceb: "宿务语",
      ber: "塔马齐格特语（提非纳文）",
      "ber-Latn": "塔马塞特语",
      Tahitian: "塔希提语",
      Tonga: "汤加语",
      Tigrinya: "提格里尼亚语",
      tcy: "图鲁语",
      tum: "图姆布卡语",
      tyv: "图瓦语",
      war: "瓦瑞语",
      mak: "望加锡语",
      vec: "威尼斯语",
      Uyghur: "维吾尔语",
      Venda: "文达语",
      Wolof: "沃洛夫语",
      udm: "乌德穆尔特语",
      szl: "西里西亚语",
      scn: "西西里语",
      hil: "希利盖农语",
      jam: "牙买加土语",
      sah: "雅库特语",
      ace: "亚齐语",
      iba: "伊班语",
      Igbo: "伊博语",
      ilo: "伊洛卡诺语",
      "iu-Latn": "因纽特语（拉丁文）",
      Inuktitut: "因纽特语（音节）",
      yua: "尤卡坦玛雅语",
      Dzongkha: "宗卡语",
      Zulu: "祖鲁语"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "或", // 或
    LoginBtn: "使用邮箱登录",
    LoginGoogle: "使用 Google 登录",
    SignupBtn: "使用邮箱注册",
    SignupGoogle: "使用 Google 注册",
    SignupDes: "立即注册，免费体验神奇效果。",
    SignupTitle: "高精度且无限量转录",
    signup: "注册", // 注册
    sign_up: "注册", // 注册
    loginByGoogle: "使用Google登录", // 使用Google登录
    emailAddress: "请输入您的邮箱", // 请输入您的邮箱
    createAccount: "创建账户", // 创建账户
    accountExists: "已经有账户了? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "继续操作，即表示您同意我们的{terms}和{policy}。",
      terms: "条款",
      policy: "隐私政策"
    },
    setPassword: "设置密码", // 设置密码
    code: "验证码", // 验证码
    resend: "重新发送", // 重新发送
    enterPassword: "密码：最少6个字符。", // 请输入密码
    passwordLeval: "密码强度", // 密码强度
    Weak: "弱", // 弱 中 强
    Medium: "中", // 弱 中 强
    Strong: "强", // 弱 中 强
    confirmPassword: "确认密码", // 确认密码
    invalidEmail: "无效的邮箱地址", // 无效的邮箱地址
    logInDirectly: "账户已存在，请直接登录。", // 账户已存在，请直接登录
    codeErrorTryAgain: "验证码错误，请重试。", // 验证码错误，请重试
    atLeastSix: "密码长度至少6位。", // 密码长度至少6位
    passwordNotMatch: "密码不匹配，请重试。", // 密码不匹配，请重试
    login: "登录", // 登录
    log_in: "登录", // 登录
    log_In: "登录", // 登录
    password: "密码", // 密码
    forgotPassword: "忘记密码？", // 忘记密码？
    noAccount: "没有账户？", // 没有账户？注册
    accountNotExists: "账户不存在。", // 账户不存在
    passwordError: "密码错误", // 密码错误
    sendCode: "发送验证码", // 发送验证码
    resetPassword: "重置密码", // 重置密码
    resetYourPassword: "重置密码", // 重置你的密码
    newOldCantSame: "新密码与旧密码不能相同。", // 新密码与旧密码不能相同
    passwordResetOk: "密码重置成功！", // 密码重置成功！
    signupToSaveProgress: "完成注册以保存您的进度。", // 完成注册以保存您的进度
    tip: "提示",
    tipContentEmail: "我们已将您的账户登录密码发送至您的邮箱。",
    tipContentPassword: "请检查收件箱，使用邮箱和密码登录。",
    codeToEmail: "我们已向您的邮箱发送了验证码。请查收邮件并在上方粘贴验证码。"
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "订阅计划",
    freeversion: "免费版",
    transcribeTimesDay: "每日3次转录",
    uploadMinutes: "30分钟上传",
    lowerPriority: "较低优先级",
    currentPlan: "当前计划",
    professionalEdition: "专业版",
    unlimitedTranscription: "无限次转录",
    unlimitedNumberOfTimes: "转录频率和时长无限制。",
    filesUploadedAtOnce: "单个文件最长10小时/5GB。可同时上传50个文件。",
    highestPriority: "最高优先级",
    weWillGiveTheHighest: "我们将始终以最高优先级尽快转录您的文件。",
    theFirstMonth: "首月",
    subscribeTo: "订阅",
    basicVersionFree: "基础版（免费）",
    return: "返回",
    annualize: "按年订阅",
    monthly: "按月订阅",
    everyYear: "每年",
    saved: "已节省",
    byTheMonth: "按月",
    firstMonth: "首月",
    afterwardsEveryMonth: "之后每月",
    manageSubscription: "管理订阅",
    professionalYearbook: "专业年费版",
    professionalMonthly: "专业月费版",
    subscriptionWillCancelledOn: "订阅到期日",
    displayLanguage: "显示语言",
    update: "立即升级",
    basicversion: "基础版（免费）",
    daily: "已用{start}次，每日限额{end}次",
    upgradetoPro: "升级至专业版",
    accountSetting: "账户设置",
    logOut: "登出",
    account: "账户",
    email: "电子邮箱",
    id: "ID",
    password: "密码",
    resetPassword: "重置密码",
    logIn: "登录",
    tryForFree: "免费试用",
    notFund: "未找到",
    couldntFind: "找不到您要的内容。",
    proAnnual: "专业年费版",
    proMonthly: "专业月费版",
    perMonth: "每月",
    afterwards: "之后",
    accuracy: "转录准确率",
    supported: "支持语言",
    identification: "说话人识别",
    transcriptSranslation: "转录翻译",
    perYear: "每年",
    getProPlan: "获取专业版",
    changeToAnnual: "切换为年费",
    automaticRenewalon: "自动续费日期",
    eachMonth: "每月{time}日自动续订",
    automaticRenewal: "自动续费失败，请检查支付方式。",
    eachYear: "每年{time}自动续费",
    returnAccountSetting: "返回",
    needsToWaitLonger: "在文件转录完成前请稍作等待。",
    freeThreeTimesDay: "每天免费转录3个文件。",
    oneFileUploaded: "每个文件最长30分钟。每次上传1个文件。",
    uploadWithinHours: "10小时上传",
    yourSubscription: "您的订阅将于{time}取消",
    save: "节省",
      freeversion2: "免费计划"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中文(简体)",
      "Chinese(Traditional)": "中文(繁体)",
      Japanese: "日语",
      Danish: "丹麦语",
      German: "德语",
      English: "英语",
      Spanish: "西班牙语",
      French: "法语",
      Italian: "意大利语",
      Hungarian: "匈牙利语",
      Dutch: "荷兰语",
      Norwegian: "挪威语",
      Polish: "波兰语",
      Portuguese: "葡萄牙语",
      Finnish: "芬兰语",
      Swedish: "瑞典语",
      Turkish: "土耳其语",
      Greek: "希腊语",
      Russian: "俄语",
      Ukrainian: "乌克兰语",
      Hebrew: "希伯来语",
      Arabic: "阿拉伯语",
      Korean: "韩语"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​开源的Nuxt3 SaaS模板，预集成全球支付网关（Stripe/Cream）、Google OAuth、i18n路由和SEO优化工具。专为开发多语言Web应用的开发者设计，提供SSR/SSG支持和生产级安全性。",
    startLink: "开始免费试用~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle: "加入候补名单，第一时间获取最新NuxtPro新闻和折扣！",
      placeholder: "输入您的邮箱",
      button: "加入候补名单",
      joinCountMessage: "🔥 早期用户 #{count} 刚刚加入了候补名单！"
    },
    seo: {
      title: "开源Nuxt SaaS样板 | NuxtPro",
      description:
        "包含您需要的一切的NuxtJS样板，让您的产品快速面向客户。从想法到生产只需5分钟。"
    },
    api: {
      title: "这是一个演示",
      corpInfo: "公司信息"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "视频下载错误"
      },
      mse: {
        code: 2,
        msg: "流追加错误"
      },
      parse: {
        code: 3,
        msg: "解析错误"
      },
      format: {
        code: 4,
        msg: "格式错误"
      },
      decoder: {
        code: 5,
        msg: "解码错误"
      },
      runtime: {
        code: 6,
        msg: "语法错误"
      },
      timeout: {
        code: 7,
        msg: "播放超时"
      },
      other: {
        code: 8,
        msg: "其他错误"
      }
    },
    HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
    HAVE_METADATA: "音频/视频的元数据已就绪",
    HAVE_CURRENT_DATA:
      "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
    HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
    HAVE_ENOUGH_DATA: "可用数据足以开始播放",
    NETWORK_EMPTY: "音频/视频尚未初始化",
    NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
    NETWORK_LOADING: "浏览器正在下载数据",
    NETWORK_NO_SOURCE: "未找到音频/视频来源",
    MEDIA_ERR_ABORTED: "取回过程被用户中止",
    MEDIA_ERR_NETWORK: "网络错误",
    MEDIA_ERR_DECODE: "解码错误",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
    REPLAY: "重播",
    ERROR: "网络连接似乎出现了问题",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暂停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下载",
    ROTATE_TIPS: "旋转",
    RELOAD_TIPS: "重新载入",
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "进入样式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出样式全屏",
    TEXTTRACK: "字幕",
    PIP: "画中画",
    SCREENSHOT: "截图",
    LIVE: "正在直播",
    OFF: "关闭",
    OPEN: "开启",
    MINI_DRAG: "点击按住可拖动视频",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "请试试",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播",
    TM_SUBTITLE_SHOW_TIPS: "开启字幕",
    TM_SUBTITLE_HIDE_TIPS: "关闭字幕",
    TM_MINIMIZE_TIPS: "隐藏视频"
  },
  privacyPolicy: {
    privacyPolicyTitle: "隐私政策",
    lastUpdated: "最后更新：2025年8月25日",
    policyDescription:
      "本政策描述了 Scribify（以下简称“Scribify”、“我们的”、“我们”）在您使用我们的服务、网站时如何收集、使用和披露您的个人信息",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition: "以及软件（统称为“服务”）。",
    policyAgreement:
      "请仔细阅读本隐私政策，并确保您理解其内容。使用我们的任何服务，即表示您同意本隐私政策。如果您不同意我们根据本政策使用您的个人数据，您必须立即停止使用我们的服务。",
    policyOverview:
      "在本政策中，我们阐述了：我们收集哪些数据以及收集原因；您的数据将如何处理；以及您对您的数据享有的权利。我们不会出售您的数据。",
    scopeTitle: "1.本隐私政策的范围",
    whatWeCollectTitle: "2. 我们收集哪些信息以及为什么",
    accessShareTitle: "3. 我们何时访问或共享您的信息",
    secureDataTitle: "4. 我们如何保护您的数据",
    deleteContentTitle: "5. 删除内容后会发生什么",
    locationTitle: "6. 站点和数据的位置",
    childrenPrivacyTitle: "7.儿童隐私",
    updatesTitle: "8. 本隐私政策的更新",
    contactUsTitle: "9. 联系我们",
    identityAccessTitle: "2.1 身份与访问",
    billingInfoTitle: "2.2 账单信息",
    productInteractionsTitle: "2.3 产品交互",
    websiteInteractionsTitle: "2.4 网站互动",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 自愿通信",
    scopeContent:
      "本隐私政策仅适用于我们对服务用户信息的收集和处理。本隐私政策不适用于任何链接到我们的第三方运营的服务、网站或软件（无论这些链接是由我们提供的还是其他用户分享的），也不适用于来自第三方的内容、数据、应用程序或资料。我们建议您在向任何第三方网站或软件提供任何信息之前，先查看其隐私政策。",
    collectPrinciple:
      "我们的指导原则是只收集我们需要的信息。以下是实际操作中的含义：",
    identityAccessContent:
      "当您注册我们的某款产品时，我们会要求您提供身份信息，例如您的姓名、电子邮件地址。这是为了提供必要的产品功能，并方便我们向您发送产品更新和其他重要信息。",
    billingInfoContent:
      "如果您注册付费产品，我们将要求您提供付款信息和账单地址。付款信息将直接提交给我们的付款处理器，不会发送到我们的服务器。",
    productInteractionsContent:
      "我们将您在产品帐户中上传、接收或维护的内容存储在我们的服务器上。除非您删除这些内容，否则只要您的帐户处于活跃状态，我们就会一直保留这些内容。",
    websiteInteractionsContent:
      "我们收集您的浏览活动信息，用于分析和统计目的，例如转化率测试和新产品设计实验。这些信息包括：例如，您的浏览器和操作系统版本、您的 IP 地址、您访问过的网页及其加载时间，以及哪个网站将您推荐给我们。如果您拥有账户并已登录，这些网络分析数据将与您的 IP 地址和用户账户绑定，直至您的账户不再活跃。",
    cookiesContent1:
      "我们还使用持久性第一方 cookie 和一些第三方 cookie 来存储某些偏好，让您更轻松地使用我们的应用程序，并执行 A/B 测试以及支持一些分析。",
    cookiesContent2:
      "Cookie 是浏览器存储的一段文本。它可以帮助您记住登录信息和站点偏好设置。它还可能收集您的浏览器类型、操作系统、访问过的网页、访问时长、浏览过的内容以及其他点击流数据等信息。您可以在浏览器设置中调整 Cookie 保留设置，并接受或阻止单个 Cookie。但是，如果您关闭 Cookie，我们的应用程序将无法运行，我们服务的其他方面也可能无法正常运行。",
    voluntaryCorrespondenceContent:
      "当您通过电子邮件向我们提出问题或寻求帮助时，我们会保留该通信记录，包括您的电子邮件地址，以便我们在您将来联系我们时可以参考过去的通信记录。",
    accessShareContent1:
      "为了提供您所请求的产品或服务。我们会使用一些第三方子处理器来协助运行我们的应用程序并向您提供服务。这包括云和分析提供商。",
    accessShareContent2:
      "调查、预防或采取行动应对滥用行为。在调查潜在滥用行为时，访问客户账户是不得已而为之。我们希望保护客户和举报人的隐私和安全，并在整个过程中尽力平衡这些责任。如果我们发现您将我们的产品用于受限用途，我们将采取必要的措施，包括在必要时通知相关部门。",
    accessShareContent3: "根据适用法律的要求。",
    userDataRequests:
      "- 用户数据请求。我们的政策是，除非法律程序强制要求或在有限的紧急情况下，否则我们不会响应政府的用户数据请求。但是，如果美国执法机构持有必要的搜查令、刑事传票或法院命令要求我们共享数据，我们必须遵守。同样，只有在美国政府通过司法互助条约或协议中规定的程序强制要求的情况下，我们才会响应来自美国境外政府机构的请求。我们的政策是在共享数据之前通知受影响的用户，除非法律禁止我们这样做，并且某些紧急情况除外。",
    preservationRequests:
      "- 保存请求。同样，我们的政策是，仅在美国《联邦存储通信法》第 18 USC 第 2703(f) 条或美国民事传票强制要求的情况下，我们才会遵守保存数据的请求。除非法律要求或法院命令强制要求（我们选择不上诉），否则我们不会共享已保存的数据。此外，除非我们在规定保存期到期前收到适当的搜查令、法院命令或传票，否则我们将在保存期结束时销毁任何已保存的客户数据副本。",
    taxAudit:
      "- 如果我们受到税务机关的审计，我们可能需要共享账单相关信息。在这种情况下，我们只会共享必要的最低限度的信息，例如账单地址和免税信息。",
    secureDataContent1: "所有数据均通过加密",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "当从我们的服务器传输到您的浏览器时。",
    deleteContentContent: "如果您删除任何内容，它将立即变得无法访问。",
    locationContent:
      "我们的产品和其他网络资产在美国运营。如果您位于欧盟、英国或美国以外的其他地方，请注意，您向我们提供的任何信息都将被传输至美国并存储于美国。使用我们的网站或服务和/或向我们提供您的个人信息，即表示您同意此类传输。",
    childrenPrivacyContent:
      "本服务并非针对儿童，我们不会故意收集 13 岁以下儿童的个人信息。如果您未满 13 岁，请勿通过本服务提交任何个人信息。如果您认为有儿童违反本政策向我们提供了个人信息，请按照以下方式联系我们。",
    updatesContent:
      "我们可能会根据需要更新本政策，以符合相关法规并反映任何新的做法。每当我们的政策做出重大变更时，我们都会更新本页面顶部的日期。",
    contactUsContent1: "如果您对我们的隐私政策有任何疑问、意见或投诉，请",
    contactUs: "联系我们",
    contactUsContent2: "我们将尽力尽快处理您的投诉。"
  },
  termsOfService: {
    termsOfServiceTitle: "服务条款",
    lastUpdated: "最后更新：2022 年 9 月 21 日",
    thankYouMessage: "感谢您使用我们的产品！",
    companyReference:
      "当我们在本文档中说“公司”、“我们”、“我们的”或“我们”时，我们指的是 Scribify。",
    servicesDefinition:
      "当我们说“服务”时，我们指的是 Scribify 创建和维护的任何产品，无论是通过网络浏览器、桌面应用程序、移动应用程序还是其他格式交付。",
    termsUpdateNotice:
      "我们未来可能会更新本服务条款。通常，这些变更旨在通过链接至更详细的相关政策来澄清部分条款。每当我们对政策做出重大变更时，我们都会更新本页面顶部的日期，并采取其他适当措施通知帐户持有人。",
    acceptanceOfAgreementTitle: "1. 接受协议",
    scribifyServicesTitle: "2. Scribify 的服务",
    accountTermsTitle: "3. 账户条款",
    paymentRefundsTitle: "4. 付款、退款和计划变更",
    cancellationTerminationTitle: "5. 取消和终止",
    submissionsTitle: "6. 提交内容",
    uptimeSecurityTitle: "7. 正常运行时间和安全性",
    siteManagementTitle: "8.现场管理",
    copyrightContentTitle: "9. 版权和内容所有权",
    prohibitedActivitiesTitle: "10.禁止的活动",
    featuresBugsTitle: "11. 功能和错误",
    correctionsTitle: "12. 更正",
    userDataTitle: "13.用户数据",
    privacyPolicyTitle: "14. 隐私政策",
    liabilityTitle: "15. 责任",
    miscellaneousTitle: "16. 其他",
    contactUsTitle: "17. 联系我们",
    acceptanceContent1:
      "使用我们的服务，即表示您接受本协议，本协议由此成为您与 Scribify 之间具有约束力的合同。您声明您具备法定能力接受这些条款，并确认您已达到订立具有约束力合同的法定年龄。Scribify 的接受明确以您同意本协议的所有条款和条件为前提。",
    acceptanceContent2:
      "该服务不适用于 18 岁以下的任何人，也不应该由 18 岁以下的任何人使用。通过使用该服务，您声明并保证您符合上述资格要求。",
    acceptanceContent3:
      "“您”、“您的”、“您本人”等词语也包括您的员工、代理人、业务代表以及您允许通过您的帐户（定义见下文）访问服务的任何其他个人。您有责任确保所有通过您的帐户访问服务的人员均知悉并遵守本条款。",
    acceptanceContent4:
      "Scribify 保留随时自行决定修改和更新本条款的权利。所有变更一经发布即刻生效。如果您在修订条款发布后继续使用服务，即表示您接受并同意这些变更。由于变更对您具有约束力，因此请您不时查看此页面，以了解任何变更。",
    servicesContent1:
      "我们的服务使用户能够将语音对话转换为可搜索、翻译和与他人共享的转录文本。",
    servicesContent2:
      "您可以选择使用服务的免费版本（“免费服务”）或可能需要支付费用的订阅式付费版本服务（“付费服务”）。",
    servicesContent3:
      "我们将向您提供服务。您有责任做好一切必要安排，以便访问服务。",
    accountTerms1:
      "- 您有责任维护您的账户安全。如果您未能履行此安全义务，本公司将不承担任何因您未能履行此安全义务而造成的任何损失或损害。",
    accountTerms2: "- 您不得将服务用于任何非法、不道德或不道德的目的。",
    accountTerms3:
      "- 您应对您帐户下发布的所有内容和活动负责。这包括以下人员发布的内容：(a) 有权访问您的登录凭据；或 (b) 在您的帐户下拥有自己的登录信息。",
    accountTerms4:
      "- 您必须是人类。不允许使用“机器人”或其他自动化方法注册的账户。",
    paymentContent1:
      "- 对于提供免费试用的付费服务，我们会在您注册时说明试用期限。试用期结束后，您需要提前付费才能继续使用服务。如果您不付费，这些服务将被终止。",
    paymentContent2:
      "- 如果您从免费计划升级到付费计划，我们将立即从您的卡中扣款，您的计费周期从升级当天开始。",
    paymentContent3:
      "- 所有费用均不含税务机关征收的任何税费、征税或关税。如有需要，我们将代表税务机关代收这些税费，并将税费汇给税务机关。否则，您需自行承担所有税费、征税或关税。",
    paymentContent4:
      "- 所有购买均不可退款。您可以随时登录您的帐户取消任何付费服务。对于付费订阅，除非另有说明，否则您的取消将在当前付费期限结束时生效。",
    cancellationContent1:
      "- 如果您在任何付费期限结束前取消服务，您的取消将立即生效，并且不会再次向您收费。我们不会在上一个计费周期内自动按比例分配未使用的时间。",
    cancellationContent2:
      "- 我们有权随时以任何理由暂停或终止您的帐户，并拒绝您当前或未来使用我们的服务。暂停意味着您将无法访问该帐户或帐户中的任何内容。终止将导致您的帐户或您对帐户的访问权限被删除，以及您帐户中所有内容的丧失和放弃。我们还保留随时以任何理由拒绝任何人使用服务的权利。我们制定此条款是因为从统计数据来看，在我们服务的数十万个帐户中，至少有一个帐户正在从事恶意活动。",
    cancellationContent3:
      "- 对公司员工或官员进行口头、身体、书面或其他辱骂（包括辱骂或报复威胁）可能会导致立即终止帐户。",
    submissionsContent:
      "您确认并同意，您向我们提供的关于本网站的任何问题、评论、建议、想法、反馈或其他信息（统称“提交内容”）均非保密信息，并将成为我们的唯一财产。我们拥有包括所有知识产权在内的专有权利，并有权出于任何合法目的（商业或其他目的）不受限制地使用和传播这些提交内容，而无需向您确认或支付任何报酬。您特此放弃对任何此类提交内容的所有精神权利，并保证任何此类提交内容均为您的原创或您有权提交此类提交内容。您同意，对于任何涉嫌或实际侵犯或盗用您提交内容中任何专有权利的行为，您不得向我们追诉。",
    uptimeContent1:
      "- 您使用本服务的风险由您自行承担。我们以“现状”和“可用”为基础提供这些服务。我们大多数服务不提供服务级别协议，但我们非常重视应用程序的正常运行时间。",
    uptimeContent2:
      "- 如果您的使用量显著超过其他用户的平均使用量，我们保留暂时停用您帐户的权利。当然，我们会在采取任何措施之前与您联系，除非在极少数情况下，您的使用量可能会对其他用户的服务性能产生负面影响。",
    uptimeContent3:
      "- 我们采取多种措施，通过备份、冗余和加密来保护您的数据安全。我们对通过公共互联网传输的数据强制加密。",
    uptimeContent4:
      "- 我们使用第三方供应商和托管合作伙伴来提供运行服务所需的必要硬件、软件、网络、存储和相关技术。",
    siteManagementContent:
      "我们保留以下权利（但没有义务）：（1）监控网站是否违反这些服务条款；（2）对我们自行决定违反法律或这些服务条款的任何人采取适当的法律行动，包括但不限于向执法部门举报该用户；（3）我们自行决定且不受限制地拒绝、限制访问、限制可用性或禁用（在技术可行的范围内）您的任何贡献或其任何部分；（4）我们自行决定且不受限制地、通知或承担责任，从网站中删除或以其他方式禁用所有过大或以任何方式对我们的系统造成负担的文件和内容；以及（5）以旨在保护我们的权利和财产并促进网站正常运行的方式管理网站。",
    copyrightContent1: "- 服务上发布的所有内容必须符合美国版权法。",
    copyrightContent2:
      "- 我们对您向服务提供的材料不主张任何知识产权。所有上传的材料仍归您所有。",
    copyrightContent3:
      "- 我们不预先筛选内容，但保留自行决定拒绝或删除通过服务提供的任何内容的权利（但没有义务）。",
    copyrightContent4:
      "- 服务的名称、外观和风格均受公司版权©保护。保留所有权利。未经公司明确书面许可，您不得复制、抄袭或重复使用任何 HTML、CSS、JavaScript 或视觉设计元素。您必须申请许可才能将公司徽标或任何服务徽标用于推广目的。请",
    emailUs: "给我们发电子邮件",
    copyrightContent5:
      "请求使用徽标。如果您违反本服务条款，我们保留撤销此许可的权利。",
    copyrightContent6:
      "- 您同意未经公司明确的书面许可，不得复制、复印、拷贝、出售、转售或利用服务的任何部分、使用服务或访问服务。",
    copyrightContent7: "- 您不得修改其他网站以错误地暗示其与服务或公司相关。",
    copyrightContent8:
      "- 我们尊重他人的知识产权。如果您认为本网站上或通过本网站提供的任何材料侵犯了您拥有或控制的任何版权，请立即",
    contactUs: "联系我们",
    copyrightContent9:
      "您的通知副本将发送给发布或存储通知中提及资料的人员。请注意，根据适用法律，如果您在通知中作出重大失实陈述，您可能需承担损害赔偿责任。因此，如果您不确定本网站上或链接的资料是否侵犯了您的版权，您应该首先考虑联系律师。",
    prohibitedActivitiesIntro:
      "您不得出于我们提供本网站目的以外的任何目的访问或使用本网站。除我们明确认可或批准的商业活动外，不得将本网站用于任何商业活动。",
    prohibitedActivitiesUserAgreement: "作为本网站的用户，您同意不：",
    prohibitedActivity1:
      "- 未经我们书面许可，系统地从网站检索数据或其他内容，以直接或间接地创建或编译集合、汇编、数据库或目录。",
    prohibitedActivity2:
      "- 欺骗、诈骗或误导我们和其他用户，尤其是试图了解用户密码等敏感帐户信息。",
    prohibitedActivity3:
      "- 规避、禁用或以其他方式干扰本网站的安全相关功能，包括阻止或限制使用或复制任何内容或强制限制使用本网站和/或其中包含的内容的功能。",
    prohibitedActivity4:
      "- 我们认为，贬低、玷污或以其他方式损害我们和/或本网站。",
    prohibitedActivity5: "- 使用从本网站获得的任何信息来骚扰、辱骂或伤害他人。",
    prohibitedActivity6:
      "- 不当使用我们的支持服务或提交虚假的滥用或不当行为报告。",
    prohibitedActivity7: "- 以不符合任何适用法律或法规的方式使用本网站。",
    prohibitedActivity8: "- 未经授权构建或链接本网站。",
    prohibitedActivity9:
      "- 上传或传输（或试图上传或传输）病毒、特洛伊木马或其他材料，包括过度使用大写字母和垃圾邮件（连续发布重复文本），干扰任何一方对网站的不间断使用和享受，或修改、损害、破坏、更改或干扰网站的使用、特性、功能、操作或维护。",
    prohibitedActivity10:
      "- 从事任何自动化系统使用，例如使用脚本发送评论或消息，或使用任何数据挖掘、机器人或类似的数据收集和提取工具。",
    prohibitedActivity11: "- 从任何内容中删除版权或其他所有权声明。",
    prohibitedActivity12: "- 试图冒充其他用户或个人或使用其他用户的用户名。",
    prohibitedActivity13:
      "- 上传或传输（或试图上传或传输）任何作为被动或主动信息收集或传输机制的材料，包括但不限于清晰图形交换格式（“gif”）、1×1像素、网络臭虫、cookies或其他类似设备（有时称为“间谍软件”或“被动收集机制”或“pcms”）。",
    prohibitedActivity14:
      "- 干扰、破坏或对本网站或与本网站相连的网络或服务造成不当负担。",
    prohibitedActivity15:
      "- 骚扰、烦扰、恐吓或威胁任何向您提供本网站任何部分的员工或代理人。",
    prohibitedActivity16:
      "- 试图绕过本网站为防止或限制访问本网站或本网站任何部分而设计的任何措施。",
    prohibitedActivity17:
      "- 复制或改编本网站的软件，包括但不限于 Flash、PHP、HTML、JavaScript 或其他代码。",
    prohibitedActivity18:
      "- 除适用法律允许外，不得对包含或以任何方式构成本网站一部分的任何软件进行解密、反编译、反汇编或反向工程。",
    prohibitedActivity19:
      "- 除标准搜索引擎或互联网浏览器的使用结果外，使用、启动、开发或分发任何自动化系统，包括但不限于访问本网站的任何蜘蛛、机器人、欺骗实用程序、抓取工具或离线阅读器，或使用或启动任何未经授权的脚本或其他软件。",
    prohibitedActivity20: "- 使用采购代理或采购代理在网站上进行购买。",
    prohibitedActivity21:
      "- 未经授权使用本网站，包括通过电子或其他方式收集用户的用户名和/或电子邮件地址以发送未经请求的电子邮件，或通过自动方式或虚假借口创建用户帐户。",
    prohibitedActivity22:
      "- 将本网站用作与我们竞争的任何努力的一部分，或以其他方式将本网站和/或内容用于任何创收活动或商业企业。",
    prohibitedActivity23: "- 使用本网站宣传或提供销售商品和服务。",
    prohibitedActivity24: "- 出售或以其他方式转让您的个人资料。",
    featuresContent1:
      "我们根据自身经验以及客户分享的时间和反馈，精心设计我们的服务。然而，不可能存在让所有人满意的服务。我们不保证我们的服务一定能满足您的特定要求或期望。",
    featuresContent2:
      "我们还会测试所有功能，然后再发布。与任何软件一样，我们的服务不可避免地会存在一些错误。我们会跟踪收到的错误报告并努力解决，尤其是与安全或隐私相关的错误。并非所有报告的错误都会得到修复，我们也无法保证服务完全没有错误。",
    correctionsContent1:
      "本网站上的信息可能存在排印错误、不准确或遗漏，包括描述、价格、供货情况以及其他各种信息。我们保留随时更正任何错误、不准确或遗漏以及更改或更新本网站信息的权利，恕不另行通知。",
    correctionsContent2:
      "我们无法保证本网站始终可用。我们可能会遇到硬件、软件或其他问题，或需要执行与本网站相关的维护，从而导致中断、延迟或错误。我们保留随时以任何理由更改、修订、更新、暂停、中止或以其他方式修改本网站的权利，恕不另行通知。您同意，对于因您在本网站停机或中止期间无法访问或使用本网站而造成的任何损失、损害或不便，我们概不负责。本服务条款中的任何内容均不得解释为我们有义务维护和支持本网站，或提供与此相关的任何更正、更新或发布。",
    userDataContent:
      "我们将保留您传输至本网站的某些数据，用于管理本网站的性能，以及与您使用本网站相关的数据。尽管我们会定期备份数据，但您应对您传输的所有数据或与您使用本网站进行的任何活动相关的数据承担全部责任。您同意，对于任何此类数据的丢失或损坏，我们概不负责，并且您特此放弃因任何此类数据的丢失或损坏而向我们提起诉讼的权利。",
    privacyPolicyContent1: "我们重视数据隐私和安全。请查看我们的",
    privacyPolicy: "隐私政策",
    privacyPolicyContent2:
      ". 使用本网站即表示您同意遵守我们的隐私政策，该政策已纳入本服务条款。请注意，本网站托管于美国。如果您从世界任何其他地区访问本网站，且该等地区在管理个人数据收集、使用或披露方面适用的法律或其他要求与美国适用法律不同，则您继续使用本网站即表示您将把您的数据传输至美国，并且您同意将您的数据传输至美国并在美国进行处理。",
    liabilityIntro: "我们在这些条款中都提到了责任，但将其全部放在一个部分：",
    liabilityContent:
      "您明确理解并同意，对于因以下原因造成的任何直接、间接、附带、利润损失、特殊、后果性、惩罚性或惩戒性损害，包括但不限于利润损失、商誉损失、使用损失、数据损失或其他无形损失（即使公司已被告知发生此类损害的可能性），本公司不对您或任何第三方承担法律或衡平法上的责任：（1）使用或无法使用服务；（2）内容和材料的错误、失误或不准确之处；（3）因您访问和使用本网站而造成的任何性质的人身伤害或财产损失；（4）因通过或从服务购买或获得的任何商品、数据、信息或服务或收到的消息或达成的交易而产生的替代商品和服务的采购成本；（5）未经授权访问或使用我们的安全服务器和/或存储在其中的任何和所有个人信息和/或财务信息；（6）中断或停止往返于本网站的传输； (7) 任何第三方传输到或通过本网站的任何错误、病毒、特洛伊木马或类似物，和/或； (8) 任何内容和材料中的任何错误或遗漏，或因使用通过本网站发布、传输或以其他方式提供的任何内容而导致的任何损失或损害； (9) 任何第三方在服务上的声明或行为； (10) 或与本服务条款或服务有关的任何其他事项，无论是违约、侵权行为（包括主动或被动的疏忽）还是任何其他责任理论。",
    miscellaneousContent:
      "本服务条款以及我们在网站上发布的或与网站相关的任何政策或运营规则构成您与我们之间的完整协议和谅解。我们未能行使或执行本服务条款中的任何权利或规定，并不构成对该权利或规定的放弃。本服务条款在法律允许的最大范围内有效。我们可随时将我们的部分或全部权利和义务转让给他人。对于因超出我们合理控制范围的任何原因造成的任何损失、损害、延误或未能采取行动，我们概不负责。如果本服务条款的任何规定或部分规定被认定为非法、无效或不可执行，则该规定或部分规定将被视为可与本服务条款分割，且不影响任何其他规定的有效性和可执行性。您与我们之间并未因本服务条款或使用本网站而建立合资、合作、雇佣或代理关系。您同意，本服务条款不会因起草本服务条款而被解释为我们无效。您特此放弃基于本服务条款的电子形式以及本协议各方未签署执行本服务条款而可能拥有的任何及所有抗辩。",
    contactUsContent1: "如果您对任何服务条款有疑问，请",
    contactUsContent2: "。"
  },
  HeadNavbar: {
    Features: "功能",
    UnlimitedTranscription: "无限转录",
    BulkUpload: "批量上传",
    Accuracy: "96%准确率",
    Pricing: "定价",
    UseCases: "使用场景",
    AllUseCases: "所有使用场景",
    Podcasters: "播客主",
    Journalists: "记者",
    ContentCreators: "内容创作者",
    Researchers: "研究人员",
    BusinessTeams: "企业团队",
    Educators: "教育工作者",
    Resources: "资源",
    YouTubetoMP4: "YouTube转MP4",
    StartFreeTrial: "免费试用"
  },
  Footer: {
    des: "全球首个真正无限的AI转录服务。无上限，无限制，尽享创作自由。",
    Features: "功能",
    UseCases: "使用场景",
    Company: "公司",
    featureMenus: ["无限转录", "批量上传", "96%准确率"],
    useCaseMenus: [
          "所有使用场景",
          "播客主",
          "记者",
          "内容创作者",
          "研究人员",
          "企业团队",
          "教育工作者"
        ],
    companyMenus: [
          "关于",
          "定价",
          "隐私",
          "条款"
        ]
  },
  Index: {
    Hero: {
      badge: '告别"缩水式无限" - 真正无限制',
      h1: "无需再为限制付费：",
      gradient: "真正无限的AI转录",
      subtitle: "我们的AI可将视频和音频转为文字，一次性处理50个文件且无月度上限。真正随需扩展的转录服务。",
      FreeTrial: "免费试用 - 无需信用卡",
      HowWorks: "查看工作原理",
      Unlimited: "无限文件上传",
      NoCap: "无月度时长限制",
      Hour: "支持10小时长文件",
      ExploreUseCases: "探索使用场景"
    },
    Stats: {
      monthlyMinutes: "月度时长",
      fileUploads: "文件上传",
      batchProcessing: "批量处理",
      maxFileLength: "最大文件时长"
    },
    FeaturesGrid: {
      try_now: "立即试用",
      no_signup: "无需注册",
      experience_unltd: "体验真正的无限转录",
      upload_50: "立即上传最多50个文件。",
      no_limits: "高级",
      no_surprises: "AI转录",
      transparency: "再无隐藏限制，再无意外 - 当其他服务悄悄缩减您的时长或将限制藏在细则中时，我们坚持彻底透明",
      feat_unltd: "真正无限",
      feat_unltd_desc: '条款中没有"合理使用政策"，没有伪装成"无限"的存储限制。上传全部档案，满足所有音频转录需求。我们说到做到。',
      feat_bulk: "批量上传自由",
      feat_bulk_desc: '厌倦了"3次终身导入"或"每月10个文件"？一次性上传50个文件，不限次数。完美处理积压工作。',
      feat_batch: "批量处理",
      feat_batch_desc: "一夜处理整季播客。一次性上传50个采访。让AI在您睡觉时工作，醒来即获完整转录稿。",
      feat_accuracy: "96%准确率",
      feat_accuracy_desc: "我们行业领先的AI可实现智能标点、支持20人讲话者分离，完美处理口音和专业术语。",
      feat_langs: "100+种语言",
      feat_langs_desc: "支持100+种语言音视频转录，可翻译至249+种语言。不同语言不加价。全球内容，统一价格。",
      feat_pro: "专业功能",
      feat_pro_desc: "词级时间戳精准定位音视频，快速对话切换时仍能准确识别讲话者，完美分段分句的格式化文本便于阅读。",
      features: "功能"
    },
    UseCases: {
      built_for: "批量",
      "heavy_users": "音视频转录",
      "join_users": '专为您这样的重度用户打造 - 加入从"缩水服务"转投我们的YouTuber、内容创作者和播客主行列',
      "podcasters": {
        "title": "播客主",
        "des": "上传全部历史节目。为每期节目创建笔记。无需再选择转录哪些内容。"
      },
      "content_creators": {
        "title": "内容创作者",
        "des": "将视频库转为可搜索文本，自动生成字幕。无需计算时长，专注创作。"
      },
      "journalists": {
        "title": "记者",
        "des": '一次性上传所有采访。截稿时不再受困于\"每月10个文件\"的限制。处理全部内容。'
      },
      researchers: {
        title: "研究人员",
        des: "转录数小时焦点小组和访谈。一次性上传整个研究。获取准确的讲话者识别。"
      },
      business_teams: {
        title: "企业团队",
        des: "记录每次通话不担心限制。获取所有对话的AI分析，而非精选少数。"
      },
      educators: {
        title: "教育工作者",
        des: "转录整个讲座系列。让所有内容可访问。不再因时长限制而选择课程。"
      }
    },
    Testimonials: {
      title: "深受",
      highlighted_users: "50,000+ 用户",
      subtitle: "了解专业人士为何选择 NeverCap 而非有限制的替代品",
      Mike: {
        "text": "天啊，这东西真的有用！做了3年播客，一直像傻子一样手动转录所有内容。一次性上传6集节目，完美区分了我和搭档的声音。我以为咖啡馆那期毁了？结果转录清晰无比。再也不用自己打字了。",
        "author": "Mike Rodriguez",
        "role": "播客主持人"
      },
      Sarah: {
        "text": "我在线教学需要视频字幕。试过3个其他工具，要么有奇怪限制，要么耗时太久。这个居然...能用？上传西班牙语讲座，2分钟就得到完美字幕。有听力障碍的学生们开心极了。真希望早点发现！",
        "author": "Sarah Chen",
        "role": "在线教师"
      },
      Jessica: {
        "text": "用它做采访转录，准确度高得离谱。2小时夹杂蹩脚英语和西班牙语的采访，连时间戳都完全正确。以前每月花200美元请实习生转录。现在真的每月都在省钱。",
        "author": "Jessica Park",
        "role": "自由记者"
      }
    },
    PricingPreview: {
      "title": "透明定价",
      "highlighted_text": "无隐藏限制",
      "subtitle": "选择您的方案。无星号条款，无隐藏细则，无意外收费"
    },
    FAQSection: {
      "title": "常见",
      "titleHighlight": "问题",
      "questions": [
            {
              "q": "AI转录",
              "question": "什么是AI转录？如何运作？",
              "answer": "AI转录是通过先进人工智能将音频自动转换为文本的过程。在NeverCap，您只需上传文件，我们的AI就能以高达96%的准确率转录内容。我们的服务可将视频文件（如MP4、MOV）和音频文件（如MP3、WAV）转换为可读可编辑的文本，包含说话人标签和时间戳。"
            },
            {
              "q": "unlimited_policy",
              "question": "真的无限量吗？有什么限制？",
              "answer": "是的，真正无限量！无月度时长限制，无超额费用。仅有的技术限制是：单个文件最长10小时或5GB大小，可同时处理50个文件。但您整个月都可以上传任意批次的文件。"
            },
            {
              "q": "accuracy",
              "question": "转录准确率如何？",
              "answer": "我们保证清晰音频96%的准确率。我们的AI经过数百万小时多样化内容训练，能出色处理口音、专业术语和多说话人场景。针对复杂音频，智能增强功能可提升效果。"
            },
            {
              "q": "languages",
              "question": "支持哪些语言？",
              "answer": "我们支持100多种语言的转录，包括英语、西班牙语、普通话、印地语、阿拉伯语、法语等。此外，您可将转录文本翻译成249种语言，完美适配全球内容。"
            },
            {
              "q": "speed",
              "question": "转录速度多快？",
              "answer": "闪电速度！1小时音频文件通常在5分钟内完成。通过批量处理，可同时上传50个文件并行处理。多数用户睡醒就发现整个资料库已完成转录。"
            },
            {
              "q": "cancellation",
              "question": "可以随时取消吗？",
              "answer": "当然！无合约绑定，无取消费用。您可以在控制面板随时升级、降级或取消订阅。取消后仍可访问服务至当前结算周期结束。"
            },
            {
              "q": "security",
              "question": "我的数据安全吗？",
              "answer": "安全是我们的首要任务。我们通过SOC 2认证，对所有数据采用256位加密，绝不使用您的内容训练模型。您可以随时删除文件，我们会在30天后自动清除。符合GDPR和CCPA标准。"
            },
            {
              "q": "export_formats",
              "question": "支持哪些导出格式？",
              "answer": "可按需下载转录文本：PDF、Word (DOCX)、Excel、CSV、SRT字幕、纯文本(TXT)和VTT字幕。完美适配任何工作流程。"
            },
            {
              "q": "file_formats",
              "question": "支持上传哪些音视频格式？",
              "answer": "支持几乎所有常见音视频格式：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV等。只要您能播放，我们就能转录。"
            }
          ]
    },
    CTASection: {
      "title": "准备好突破限制了吗？",
      "subtitle": "加入50,000+已改用真正无限转录的专业人士行列",
      "button": "免费试用 NeverCap",
      "disclaimer": "免费方案无需信用卡 • 随时升级享无限访问"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: '告别"缩水式服务"',
      heroTitleLine1: "真正的无限量",
      heroTitleLine2: "AI转录",
      heroSubtitle: "Trint限制50小时，Otter每月限10个文件，而我们兑现承诺：真正的无上限转录，绝无隐藏限制",
      primaryCta: "免费试用 - 无需信用卡",
      secondaryCta: "看清真相",
      comparisonBadLabel: "其他服务商的做法",
      comparisonBadTitle: "处处暗藏限制",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint：",
      comparisonBadItem1Text: '"无限制"=每月50小时上限',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter：",
      comparisonBadItem2Text: "终身3次导入(免费版)，每月10次(专业版)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies：",
      comparisonBadItem3Text: "800分钟存储限制",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript：",
      comparisonBadItem4Text: "每月最多30小时",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "隐藏在条款细则中",
      comparisonGoodLabel: "我们的承诺",
      comparisonGoodTitle: "真正无限制",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "无月度时长限制",
      comparisonGoodItem1Text: "永久有效",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "无限文件上传",
      comparisonGoodItem2Text: "始终可用",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "无存储限制",
      comparisonGoodItem3Text: "完全自由",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50文件批量上传",
      comparisonGoodItem4Text: "随时可用",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "透明政策",
      comparisonGoodItem5Text: "事先告知",
      feature1Label: "无任何限制",
      feature1TitlePart1: "转录1000小时？",
      feature1TitlePart2: "价格不变",
      feature1Description: "无需计时，不必担心限额。无论每月转录10小时还是10,000小时，统一费率。无超额费用，无意外账单",
      feature1Point1Icon: "✓",
      feature1Point1Text: '无"合理使用"政策陷阱',
      feature1Point2Icon: "✓",
      feature1Point2Text: "超时不降速",
      feature1Point3Icon: "✓",
      feature1Point3Text: "月底无焦虑",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "每月时长",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "超额费用",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "随时上传",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "透明",
      feature2Label: "批量自由",
      feature2TitlePart1: "上传您的",
      feature2TitlePart2: "完整存档",
      feature2Description: "Otter免费版仅提供3次终身导入，Pro版每月10次。我们提供无限次。上传您的播客积压内容、所有采访及多年录音。无限制。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "每批50个文件",
      feature2Point2Icon: "✓",
      feature2Point2Text: "支持10小时文件",
      feature2Point3Icon: "✓",
      feature2Point3Text: "睡眠时处理",
      feature2TableRow1Label: "Otter免费版",
      feature2TableRow1Value: "3次终身导入",
      feature2TableRow2Label: "Otter Pro版",
      feature2TableRow2Value: "10个文件/月",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50小时/月上限",
      feature2TableRow4Label: "无上限",
      feature2TableRow4Value: "真正无限 ✓",
      feature3Label: "用户见证",
      feature3TitlePart1: "用户正在",
      feature3TitlePart2: "每日迁移",
      feature3Description: "“我每年支付100美元使用Otter，但他们限制我每月只能导入10个文件。一旦有无限导入的替代方案，我立刻换！” - 真实Reddit用户",
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000+用户已迁移",
      feature3Point2Icon: "✓",
      feature3Point2Text: "摆脱Otter的“缩水式通胀”",
      feature3Point3Icon: "✓",
      feature3Point3Text: "绝不回头",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "满意用户",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "已处理文件",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "准确率",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "无隐藏费用",
      trustBadge1Number: "∞",
      trustBadge1Label: "分钟/月",
      trustBadge2Number: "100+",
      trustBadge2Label: "语言",
      trustBadge3Number: "96%",
      trustBadge3Label: "准确率",
      trustBadge4Number: "50",
      trustBadge4Label: "批量上传",
      ctaTitle: "停止为虚假无限付费",
      ctaSubtitle: "加入数千用户行列，体验真正无限的转录服务",
      finalCta: "免费试用NeverCap"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "批量上传自由",
      heroTitleLine1: "上传50个文件",
      heroTitleHighlight: "处理所有内容",
      heroSubtitle: "Otter仅提供3次终身导入。三次。终身只能用三次。我们提供无限上传，每次50个文件，随时满足需求",
      primaryCta: "开始批量上传 →",
      secondaryCta: "查看限制",
      redditQuote: '"我有三年播客内容需要转录。Otter说只给3次终身导入。三次。简直是侮辱"',
      redditAuthorIcon: "📍",
      redditAuthorText: "来自r/podcasting的真实抱怨",
      comparisonSectionTitlePart1: "那些",
      comparisonSectionTitleHighlight: "荒谬的限制",
      comparisonSectionTitlePart2: "他们强加的",
      comparisonSubtitle: "竞品如何限制你的内容处理能力",
      limitCard1Service: "Otter免费版",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "终身导入次数",
      limitCard1DescriptionLine2: "(没错，就是终身)",
      limitCard2Service: "Otter专业版",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "每月文件数",
      limitCard2DescriptionLine2: "(100美元/年套餐)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "单文件处理",
      limitCard3DescriptionLine2: "(顺序上传)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "无限上传",
      limitCard4DescriptionLine2: "每批50个文件",
      feature1Label: "批量处理",
      feature1TitlePart1: "完成你的",
      feature1TitleHighlight: "全部存档",
      feature1TitlePart2: "一夜之间",
      feature1Description: '睡前上传50个文件，醒来获得完整转录稿。无需排队、等待或"请升级"提示，尽享纯粹处理能力',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50个同步上传",
      feature1Point2Icon: "✓",
      feature1Point2Text: "并行处理",
      feature1Point3Icon: "✓",
      feature1Point3Text: "支持10小时文件",
      feature1Point4Icon: "✓",
      feature1Point4Text: "单文件最大5GB",
      uploadAnimationText1: "50个文件",
      uploadAnimationText2: "拖放即处理",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 个更多文件...",
      feature2Label: "速度",
      feature2TitlePart1: "从上传到",
      feature2TitleHighlight: "数小时完成",
      feature2Description: "我们的并行处理架构让您的50个文件无需排队，全部同时转录。以往需要数周的工作，现在仅需数小时。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1小时文件：5分钟",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50个文件：并行处理",
      feature2Point3Icon: "✓",
      feature2Point3Text: "完成后邮件通知",
      timelineStep1Icon: "1",
      timelineStep1Title: "上传",
      timelineStep1Time: "0 分钟",
      timelineStep2Icon: "2",
      timelineStep2Title: "处理中",
      timelineStep2Time: "5-30 分钟",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI 魔法",
      timelineStep3Time: "30-60 分钟",
      timelineStep4Icon: "✓",
      timelineStep4Title: "完成",
      timelineStep4Time: "< 2 小时",
      feature3Label: "自由",
      feature3TitlePart1: "无需排队。",
      feature3TitleHighlight: "无需等待。",
      feature3TitlePart2: "没有限制。",
      feature3Description: "当其他服务让您在虚拟队列中等待或付费升级“优先处理”时，我们紧急处理每次上传。您的内容很重要，不该等待。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "无优先级区分",
      feature3Point2Icon: "✓",
      feature3Point2Text: "人人同速",
      feature3Point3Icon: "✓",
      feature3Point3Text: "随时上传，24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "时刻就绪",
      feature3VisualSubtext: "灵感来袭时即刻上传",
      useCasesTitlePart1: "完美适用于",
      useCasesTitleHighlight: "高频上传者",
      useCasesSubtitle: "批量上传拯救实际场景",
      useCase1Title: "播客存档",
      useCase1Description: "一次性上传3年节目。为全部历史内容生成转录。为每期节目创建SEO内容。",
      useCase2Title: "课程制作",
      useCase2Description: "同时处理所有讲座视频。为学生创建无障碍转录。构建可搜索的课程资料。",
      useCase3Title: "采访积压",
      useCase3Description: "清理堆积如山的未转录采访。数小时完成数周的研究工作。从容应对截止期限。",
      useCase4Title: "YouTube 资料库",
      useCase4Description: "为整个频道生成字幕。从视频内容创建博客文章。提升所有视频的SEO。",
      useCase5Title: "会议存档",
      useCase5Description: "上传数月会议录音。生成可搜索的会议记录。重要决策永不遗漏。",
      useCase6Title: "研究数据",
      useCase6Description: "批量处理焦点小组。转录所有参与者访谈。高效分析定性数据。",
      ctaTitle: "告别上传限制",
      ctaSubtitle: "获得真正可用的无限批量处理",
      finalCta: "立即上传50个文件 →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "行业领先准确率",
      heroTitleLine1: "96%准确率。",
      heroTitleHighlight: "字字精准。",
      heroSubtitle: "12种主要语言的行业顶尖准确率。单词级时间戳实现完美同步。智能发言人识别应对快速对话。专业排版清晰易读。",
      primaryCta: "测试准确率 →",
      secondaryCta: "查看语言",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "准确率覆盖",
      statCard1DescriptionLine2: "12种主要语言",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "方言口音",
      statCard2DescriptionLine2: "识别准确率",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "单词级",
      statCard3DescriptionLine2: "时间戳精度",
      languageSectionTitlePart1: "96%准确率",
      languageSubtitle: "全球内容的专业级转录",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "英语",
      languageCard1Accuracy: "96%准确率",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "西班牙语",
      languageCard2Accuracy: "96%准确率",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "普通话",
      languageCard3Accuracy: "96%准确率",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "法语",
      languageCard4Accuracy: "96%准确率",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "德语",
      languageCard5Accuracy: "96%准确率",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "日语",
      languageCard6Accuracy: "96%准确率",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "韩语",
      languageCard7Accuracy: "96%准确率",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "葡萄牙语",
      languageCard8Accuracy: "96%准确率",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "俄语",
      languageCard9Accuracy: "96%准确率",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "意大利语",
      languageCard10Accuracy: "96%准确率",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "荷兰语",
      languageCard11Accuracy: "96%准确率",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "阿拉伯语",
      languageCard12Accuracy: "96%准确率",
      moreLanguagesText: "+ 支持88种以上语言 准确率95%+",
      feature1Label: "精准度",
      feature1TitlePart1: "词级",
      feature1TitleHighlight: "时间戳",
      feature1Description: "每个单词都与音频位置完美同步。创建可点击的文本记录，生成精准字幕，或跳转到录音中的精确时刻。专业信赖的100毫秒精度。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100毫秒时间戳精度",
      feature1Point2Icon: "✓",
      feature1Point2Text: "完美适配视频剪辑",
      feature1Point3Icon: "✓",
      feature1Point3Text: "可点击交互式文本",
      feature1Point4Icon: "✓",
      feature1Point4Text: "帧级精准字幕",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "发言人1",
      transcriptLine1Text: "欢迎收听本期播客。",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "发言人2",
      transcriptLine2Text: "感谢邀请我参加节目！",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "发言人1",
      transcriptLine3Text: "让我们进入今天的主要话题...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "发言人2",
      transcriptLine4Text: "当然，我很期待讨论这个。",
      feature2Label: "智能AI",
      feature2TitlePart1: "处理",
      feature2TitleHighlight: "快速对话",
      feature2Description: "即使在重叠语音、插话和快速对答场景中，我们的AI也能准确识别说话者。特别适合频繁插话的访谈、播客和会议场景。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "最多识别20个说话人",
      feature2Point2Icon: "✓",
      feature2Point2Text: "完美处理插话",
      feature2Point3Icon: "✓",
      feature2Point3Text: "支持重叠语音",
      feature2Point4Icon: "✓",
      feature2Point4Text: "保持串扰中的准确性",
      feature2VisualNumber: "20",
      feature2VisualTitle: "已识别说话人",
      feature2VisualSubtext: "即使在快速对话中",
      feature3Label: "可读性",
      feature3TitlePart1: "完美",
      feature3TitleHighlight: "格式化文本",
      feature3Description: "告别文字墙。我们的AI自动在恰当位置添加段落、句子和标点符号。结果如何？真正易于阅读和浏览的转录文本。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "智能分段",
      feature3Point2Icon: "✓",
      feature3Point2Text: "精准标点",
      feature3Point3Icon: "✓",
      feature3Point3Text: "规范大小写",
      feature3Point4Icon: "✓",
      feature3Point4Text: "清晰可浏览的输出",
      formattingTitle: "优化前后对比",
      formattingBeforeLabel: "❌ 其他产品：",
      formattingBeforeText: "所以今天我们要讨论我们一直在开发的新功能我想你们会很喜欢这些功能用户们要求很久了我们终于完成了",
      formattingAfterLabel: "✓ NeverCap：",
      formattingAfterText: "今天，我们将讨论我们一直在开发的新功能。我想你们会很喜欢。这些功能用户们要求了很久，我们终于完成了。",
      comparisonSubtitle: "准确率",
      comparisonSectionTitle: "对比",
      comparisonDes: "看看我们如何胜过竞争对手",
      tableHeader1: "功能",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "准确率（清晰音频）",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "单词级时间戳",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "说话人识别",
      tableRow3NeverCap: "20人",
      tableRow3Otter: "16人",
      tableRow3Descript: "10人",
      tableRow3Rev: "✕",
      tableRow4Feature: "处理对话重叠",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "有限",
      tableRow4Descript: "有限",
      tableRow4Rev: "✕",
      tableRow5Feature: "智能格式化",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "基础版",
      tableRow6Feature: "12种语言 准确率96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "体验96%的准确率",
      ctaSubtitle: "上传最具挑战性的音频，见证差异",
      finalCta: "立即测试准确率 →",
      languageSectionTitlePart2: "覆盖12种主要语言"
    }
  },
  Pricing: {
    Hero: {
      "title": "简单透明的定价",
      "highlighted_text": "无隐藏限制",
      "description": "选择适合您的方案。随时升级或降级。无合约，无隐形消费。"
    },
    Cards: {
      "title": "简单透明的定价。",
      "highlighted_text": "无隐藏限制。",
      "description": "选择适合您的方案。随时升级或降级。无合约，无隐形消费。",
      "plans": [
            {
              "name": "免费版",
              "price": "$0",
              "period": "月",
              "discount": "适合试用我们的服务",
              "limits": {
                "title": "每日限制",
                "items": [
                  "3个文件/天（总计约90分钟/天）",
                  "每个文件最长30分钟（≤250 MB）",
                  "每次上传1个文件",
                  "标准优先级队列"
                ]
              },
              "features": {
                "title": "功能",
                "items": [
                  "100+种语言",
                  "说话人标签",
                  "翻译",
                  "所有导出格式"
                ]
              },
              "cta": {
                "text": "免费开始。无需信用卡。",
                "button": "当前套餐"
              }
            },
            {
              "name": "专业月费版",
              "price": "$17.99",
              "period": "月",
              "discount": "首月仅需$9.99",
              "limits": {
                "title": "无月度上限",
                "items": [
                  "无限总时长",
                  "每个文件最长10小时/5 GB",
                  "一次上传50个文件",
                  "优先队列"
                ]
              },
              "features": {
                "title": "包含免费版所有功能，另加",
                "items": [
                  "单词级时间戳",
                  "高级说话人识别",
                  "格式化段落与标点",
                  "优先支持"
                ]
              },
              "cta": {
                "text": "无限时长。优先处理。批量上传。",
                "button": "升级专业版"
              },
              "badge": "最受欢迎"
            },
            {
              "name": "专业年费版",
              "price": "$8.99",
              "period": "月",
              "discount": "按年计费$107.88",
              "limits": {
                "title": "与月度专业版相同",
                "items": [
                  "无限总时长",
                  "每个文件最长10小时/5 GB",
                  "一次上传50个文件",
                  "优先队列"
                ]
              },
              "features": {
                "title": "包含免费版所有功能，另加",
                "items": [
                  "单词级时间戳",
                  "高级说话人识别",
                  "格式化段落与标点",
                  "优先支持"
                ]
              },
              "cta": {
                "text": "无限时长。优先处理。批量上传。",
                "button": "升级专业版"
              },
              "badge": "最佳价值 - "
            }
          ],
      "disclaimer": '"无限"指无月度上限且无人工降速。合理使用政策适用于滥用自动化或转售行为。'
    },
    ComparisonTable: {
      "header": {
        "title": "对比",
        "highlighted_text": "全部功能",
        "subtitle": "清晰了解各套餐内容。绝无隐藏限制。"
      },
      "plans": [
              "功能",
              "免费版",
              "Pro月付版",
              "Pro年付版"
            ],
      "features": [
            {
              "name": "价格",
              "values": [
                "$0/月",
                {
                  "main": "$17.99/月",
                  "note": "首月$9.99"
                },
                {
                  "main": "$8.99/月",
                  "note": "年付$107.88"
                }
              ]
            },
            {
              "name": "月度时长",
              "values": ["~2,700分钟(90/天)", "无限制", "无限制"]
            },
            {
              "name": "最大文件时长",
              "values": ["30分钟", "10小时", "10小时"]
            },
            {
              "name": "最大文件大小",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "批量上传",
              "values": ["1个文件", "50个文件", "50个文件"]
            },
            {
              "name": "处理速度",
              "values": ["标准", "优先", "优先"]
            },
            {
              "name": "支持语言",
              "values": ["100+ 种语言", "100+ 种语言", "100+ 种语言"]
            },
            {
              "name": "翻译",
              "values": ["true", "true", "true"]
            },
            {
              "name": "说话人识别",
              "values": ["基础版", "高级版（20 位说话人）", "高级版（20 位说话人）"]
            },
            {
              "name": "词级时间戳",
              "values": ["false", "true", "true"]
            },
            {
              "name": "格式化段落",
              "values": ["false", "true", "true"]
            },
            {
              "name": "导出格式",
              "values": ["所有格式", "所有格式", "所有格式"]
            },
            {
              "name": "支持",
              "values": ["电子邮件", "优先电子邮件", "优先电子邮件"]
            },
            {
              "name": "数据保留",
              "values": ["30 天", "永久", "永久"]
            }
          ]
    },
    FAQ: {
      "title": "常见问题",
      "titleHighligt": "问题",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "真的是无限制吗？",
              "answer": "是的！Pro 计划没有每月分钟数限制。唯一限制是技术性的：文件最长 10 小时，最大 5GB。您可以处理任意数量的文件。"
            },
            {
              "q": "plan_change",
              "question": "我可以随时更改计划吗？",
              "answer": "当然！您可以在仪表盘中随时取消订阅。按需升级或降级。"
            },
            {
              "q": "payment_methods",
              "question": "你们接受哪些支付方式？",
              "answer": "我们接受所有主流信用卡、借记卡和 PayPal，支付安全无忧。"
            },
            {
              "q": "free_trial",
              "question": "Pro 有免费试用吗？",
              "answer": "有！免费试用 Pro 7 天，无需信用卡。订阅首月还可享 45% 折扣。"
            },
            {
              "q": "file_retention",
              "question": "我的文件会保留多久？",
              "answer": "免费计划：30 天。Pro 计划：永久！您的转录文本始终保存在账户中。"
            },
            {
              "q": "data_security",
              "question": "数据安全性如何？",
              "answer": "我们通过SOC 2认证，采用256位加密技术。绝不使用您的内容训练AI模型。您的数据始终属于您。"
            }
          ]
    },
    CTA: {
      "title": "准备开启无限畅用？",
      "subtitle": "加入50,000+专业人士的无限制转录行列",
      "button": "免费试用NeverCap →",
      "disclaimer": "无需信用卡 • 秒速开始转录"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "专为",
      heavyUsers: "重度用户",
      whoActuallyNeed: "真正需要无限的人",
      heroSubtitle: "从积压多年的播客主到拥有数百次访谈的研究人员。了解专业人士如何使用NeverCap摆脱上传限制和分钟数上限。",
      podcasters: {
        title: "播客创作者",
        pain: '"无需再挑选哪些集数需要转录"',
        description: "一次性上传全部播客档案。生成节目备注、提升SEO，无时长限制地重复利用内容。",
        benefits: {
          benefit1: "上传所有集数，不止3集",
          benefit2: "生成SEO友好型节目备注",
          benefit3: "创建可搜索的档案库",
          benefit4: "转化为博客内容"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "集数"
          },
          stat2: {
            number: "200小时",
            label: "已节省"
          },
          stat3: {
            number: "3倍",
            label: "SEO流量"
          }
        }
      },
      journalists: {
        title: "记者与作家",
        pain: '"截稿压力遇上上传限制"',
        description: "在截止日前批量上传所有采访。即时搜索文字稿，绝不遗漏关键引述。",
        benefits: {
          benefit1: "截止日前批量上传",
          benefit2: "一次性搜索所有采访",
          benefit3: "带时间戳的精准引述",
          benefit4: "处理口音与多语言"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "次采访/月"
          },
          stat2: {
            number: "96%",
            label: "准确率"
          },
          stat3: {
            number: "5分钟",
            label: "每小时"
          }
        }
      },
      contentCreators: {
        title: "内容创作者",
        pain: '"无障碍服务不应昂贵"',
        description: "为整个YouTube频道添加字幕。即时生成多语言字幕并提升视频SEO。",
        benefits: {
          benefit1: "一次性为所有视频加字幕",
          benefit2: "249种语言翻译",
          benefit3: "适配YouTube的SRT文件",
          benefit4: "提升视频SEO排名"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "视频"
          },
          stat2: {
            number: "100+",
            label: "语言"
          },
          stat3: {
            number: "249",
            label: "翻译"
          }
        }
      },
      researchers: {
        title: "研究人员与学者",
        pain: '"质性研究无需排队等待"',
        description: "一次性处理整个研究项目。完美识别发言者的焦点小组、访谈和小组讨论。",
        benefits: {
          benefit1: "批量处理焦点小组",
          benefit2: "20人发言识别",
          benefit3: "导出至分析软件",
          benefit4: "符合GDPR的安全标准"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "研究项目"
          },
          stat2: {
            number: "96%",
            label: "小组准确率"
          },
          stat3: {
            number: "GDPR",
            label: "合规"
          }
        }
      },
      businessTeams: {
        title: "商务团队",
        pain: '"会议录制本该如此简单"',
        description: "直接录制会议或上传音频文件即时转写。从无限对话中构建可搜索的存档，再也不会丢失重要讨论。",
        benefits: {
          benefit1: "直接音频录制 & 转写",
          benefit2: "无限会议录制",
          benefit3: "可搜索会议存档",
          benefit4: "即时上传音频文件"
        },
        stats: {
          stat1: {
            number: "实时",
            label: "录制"
          },
          stat2: {
            number: "即时",
            label: "上传"
          },
          stat3: {
            number: "20+",
            label: "演讲者"
          }
        }
      },
      educators: {
        title: "教育工作者",
        pain: '"YouTube视频需要即时转写"',
        description: "只需粘贴YouTube链接即可获取即时转录和自动生成的字幕。将任何教育视频转化为可访问、可搜索的内容。",
        benefits: {
          benefit1: "直接YouTube链接转写",
          benefit2: "自动生成视频字幕",
          benefit3: "转写完整课程",
          benefit4: "可搜索讲座存档"
        },
        stats: {
          stat1: {
            number: "1键",
            label: "YouTube粘贴"
          },
          stat2: {
            number: "自动",
            label: "字幕"
          },
          stat3: {
            number: "100+",
            label: "语言"
          }
        }
      },
      quotes: {
        title: "真实用户，",
        titleHighlight: "真实自由",
        subtitle: "聆听突破人为限制的专业人士心声",
        testimonials: {
          mike: {
            textBefore: '"我有',
            highlight: "3年的节目",
            textAfter: '未被转写。Otter让我选3个。就3个。NeverCap让我一个周末上传了全部150期节目。"',
            name: "Mike Rodriguez",
            role: "播客主持人"
          },
          jessica: {
            textBefore: '"作为自由记者，我负担不起Trint的',
            highlight: "$100/月",
            textAfter: '，但我也无法接受Otter每月10个文件的限制。NeverCap拯救了我的职业生涯。"',
            name: "Jessica Park",
            role: "自由记者"
          },
          sarah: {
            textBefore: '"我们研究团队有',
            highlight: "200小时",
            textAfter: '焦点小组录音。我们用一个周末处理了所有内容，而不是按月分配分钟数。"',
            name: "Dr. Sarah Chen",
            role: "首席研究员"
          },
          carlos: {
            textBefore: '"我制作西班牙语教育内容。NeverCap完美转录并',
            highlight: "翻译成英文",
            textAfter: '以扩大受众。没有限制，只有成长。"',
            name: "Carlos Martinez",
            role: "YouTube教育专家"
          }
        }
      },
      industries: {
        title: "广受各行业",
        titleHighlight: "信赖",
        subtitle: "全球专业人士都在转向真正的无限服务",
        list: {
          media: "媒体与出版",
          education: "教育",
          healthcare: "医疗保健",
          technology: "科技",
          finance: "金融",
          legal: "法律"
        }
      },
      cta: {
        title: "您的使用场景同样需要无限服务",
        subtitle: "加入50,000+专业人士的行列，告别计时，专注创作",
        button: "开启您的无限之旅 →"
      }
    },
    Podcasters: {
      badge: "专为播客主打造",
      heroTitle: "转录您的",
      heroTitleHighlight: "完整播客档案",
      heroSubtitle: "上传全部历史内容。为每期节目生成笔记。无需再纠结哪些集数值得转录。",
      ctaPrimary: "免费开始转录",
      ctaSecondary: "查看工作原理",
      trustBadge1: "10,000+播客主",
      trustBadge2: "无限集数",
      trustBadge3: "SEO友好文稿",
      stats: {
        stat1: {
          number: "∞",
          label: "集数/月"
        },
        stat2: {
          number: "50",
          label: "批量上传"
        },
        stat3: {
          number: "10小时",
          label: "单集最长时长"
        },
        stat4: {
          number: "96%",
          label: "准确率"
        }
      },
      problemTitle: "播客转录",
      problemTitleHighlight: "现存问题",
      problemSubtitle: '其他服务迫使您选择"值得"转录的集数',
      problems: {
        problem1: {
          title: "上传限制扼杀档案价值",
          description: "Otter免费版仅3次终身导入，Pro版每月10次。如何转录3年的节目？"
        },
        problem2: {
          title: "错失SEO机遇",
          description: "每期未转录节目都意味着SEO流量流失。但Descript每月最多仅限30小时。"
        },
        problem3: {
          title: "成本随规模激增",
          description: "播客发展时，转录费用暴涨。2美元/小时的超额费让扩展举步维艰。"
        }
      },
      solutionTitle: "NeverCap",
      solutionTitleHighlight: "终极解决方案",
      solutionDescription: "真正的无限转录。上传完整档案。转录每期新节目。批量生成播客笔记。无上限，无限制，唯有增长。",
      workflowTitle: "您的播客工作流",
      workflowTitleHighlight: "化繁为简",
      workflowSubtitle: "从录制到SEO优化笔记，只需几分钟",
      workflow: {
        step1: {
          title: "上传节目",
          description: "单次可传50集。MP3/MP4/WAV格式全支持。"
        },
        step2: {
          title: "AI智能转录",
          description: "96%准确率带说话人识别。访谈节目理想之选。"
        },
        step3: {
          title: "智能排版",
          description: "AI自动添加段落、句子和标点符号"
        },
        step4: {
          title: "发布与排名",
          description: "导出到您的网站 见证SEO流量增长"
        }
      },
      featuresTitle: "播客主必备功能",
      featuresTitleHighlight: "真正所需",
      featuresSubtitle: "由播客主打造，为播客主服务",
      features: {
        feature1: {
          title: "多说话人识别",
          description: "自动识别并标记多达20位说话人 完美适用于小组讨论、访谈和双人主持节目"
        },
        feature2: {
          title: "时间戳章节",
          description: "为YouTube描述生成可点击时间戳 让听众立即跳转到喜爱片段"
        },
        feature3: {
          title: "智能排版",
          description: "自动添加段落、句子和标点 获得清晰易读的文字稿 节省数小时后期制作时间"
        },
        feature4: {
          title: "SEO优化",
          description: "专为搜索引擎优化的文字稿 提升播客可发现性并触达新听众"
        },
        feature5: {
          title: "100+种语言",
          description: "支持任意语言转录 可翻译成249+种语言 轻松触达全球听众"
        },
        feature6: {
          title: "批量处理",
          description: "睡前上传50集节目 醒来即可获得完整文字稿 一夜处理全部存档内容"
        }
      },
      testimonialsTitle: "选择我们的",
      testimonialsTitleHighlight: "播客主",
      testimonialsSubtitle: "真实播客主的真实故事",
      testimonials: {
        mike: {
          text: '"我做播客3年一直像傻子一样手动转录。一次性上传6集内容，它完美区分了我和搭档的声音。那期我以为废掉的咖啡馆录音？文字稿清晰无比。我再也不会自己打字了。"',
          name: "Mike Rodriguez",
          role: '"The Daily Grind"播客主持人'
        },
        sarah: {
          text: '"Otter每月只让我导入10个文件。我有150集积压内容。NeverCap让我分3批上传了所有内容。自从给旧节目添加文字稿，自然流量增长了300%。这简直是在自我创收。"',
          name: "Sarah Chen",
          role: '"Tech Talks Today"创作者'
        }
      },
      comparisonTitle: "播客主选择",
      comparisonTitleHighlight: "NeverCap的",
      comparisonSubtitle: "理由",
      comparison: {
        headers: {
          feature: "查看我们与竞品的对比",
          nevercap: "功能",
          otter: "NeverCap",
          descript: "Otter.ai Pro"
        },
        rows: {
          monthlyLimit: {
            feature: "Descript Creator",
            nevercap: "每月节目限制",
            otter: "无限制",
            descript: "~13集(1200分钟)"
          },
          uploadLimit: {
            feature: "~30集(30小时)",
            nevercap: "文件上传限制",
            otter: "无限制",
            descript: "每月10个"
          },
          batchProcessing: {
            feature: "单次1个",
            nevercap: "批量处理",
            otter: "50个文件",
            descript: "✕"
          },
          maxLength: {
            feature: "✕",
            nevercap: "单集最大时长",
            otter: "10小时",
            descript: "90分钟"
          },
          speakerDetection: {
            feature: "说话人检测",
            nevercap: "20位说话人",
            otter: "16位说话人",
            descript: "10位说话人"
          },
          smartFormatting: {
            feature: "智能格式化",
            nevercap: "✓ 完美",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "价格",
            nevercap: "$17.99/月",
            otter: "$16.99/月",
            descript: "$30/月"
          }
        }
      },
      ctaTitle: "开始转录每期节目",
      ctaSubtitle: "加入10,000+从不担心限制的播客主行列",
      ctaButton: "免费上传前50期节目 →",
      ctaDisclaimer: "无需信用卡 • 处理无限制节目 • 随时取消"
    },
    Journalists: {
      hero: {
        badge: "记者与作家专享",
        title: "转录每次采访。",
        titleHighlight: "不错过任何引述。",
        subtitle: "无需选择哪些采访值得转录。一次性上传所有录音，即时全局搜索，告别上传焦虑准时交稿。",
        ctaPrimary: "开始无限上传 →",
        ctaSecondary: "查看工作原理",
        stats: {
          uploads: {
            number: "∞",
            label: "文件上传"
          },
          accuracy: {
            number: "96%",
            label: "准确率"
          },
          speed: {
            number: "5分钟",
            label: "每小时"
          }
        },
        dashboard: {
          title: "采访队列",
          status: "• 全部处理中",
          interviews: {
            cityCouncil: {
              title: "市议会会议",
              duration: "2小时15分钟 • 上传中...",
              action: "处理中"
            },
            expertInterview: {
              title: "专家采访 - 陈博士",
              duration: "45分钟 • 转录中...",
              action: "已完成96%"
            },
            pressConference: {
              title: "新闻发布会",
              duration: "1小时30分钟 • 就绪",
              action: "查看 →"
            },
            phoneInterview: {
              title: "电话采访 - 消息源",
              duration: "35分钟 • 就绪",
              action: "查看 →"
            }
          }
        }
      },
      problem: {
        title: "记者",
        titleHighlight: "转录难题",
        subtitle: '其他服务迫使您选择"值得"转录的采访',
        problems: {
          uploadLimits: {
            title: "上传限制扼杀调查",
            description: "Otter专业版每月仅限10次文件导入。如何转录3周的调查采访？"
          },
          missingQuotes: {
            title: "错失关键引述",
            description: "每段未转录的采访都可能包含报道的核心引述。但Trint每月最多只允许50小时。"
          },
          costExplosion: {
            title: "截止日期导致成本飙升",
            description: "随着调查深入，转录成本飙升。每月$100的超额费用让突发新闻变得不可能。"
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap解决方案",
          description: "真正的无限转录。上传完整调查。转录每次访谈。即时搜索所有引用。无上限，无限制，只有纯粹的新闻。"
        }
      },
      solution: {
        title: "1",
        titleHighlight: "最佳访谈转录软件",
        titleSuffix: "为记者打造",
        subtitle: "在截稿紧迫和准确至上的关键时刻，真正重要的优势",
        solutions: {
          unlimitedUploads: {
            label: "无限容量",
            title: "所有访谈的无限容量",
            description: "不同于有时间限制的软件，您可以转录从简短对谈到数小时讨论的所有访谈。永远不必担心在截稿时耗尽额度。",
            points: {
              simultaneousUpload: "无月度时长限制",
              noLimits: "支持10小时访谈",
              processWhileWrite: "一次性处理完整调查",
              longRecordings: "支持10小时录音"
            },
            visual: {
              number: "∞",
              label: "永无限制"
            }
          },
          instantSearch: {
            label: "闪电速度",
            title: "匹配您新闻周期的速度",
            description: "数分钟内获取访谈转录，无需等待数天。前所未有地快速完成报道。当您喝咖啡时，我们的AI已处理数小时音频。",
            points: {
              searchAll: "1小时访谈5分钟完成",
              wordTimestamps: "紧急报道优先处理",
              jumpToMoments: "实时进度追踪"
            },
            searchDemo: {
              placeholder: "5分钟",
              resultsText: "每小时音频",
              results: {
                mayorInterview: "“……我们的气候政策将改变……”",
                expertPanel: "“……政策声明清楚地表明……”"
              }
            }
          },
          professionalAccuracy: {
            label: "引用级准确度",
            title: "可放心引用的准确度",
            description: "我们的AI提供高准确度转录，确保您发布的引用精确可靠。编辑信赖的专业级转录。",
            points: {
              accuracyGuarantee: "96%准确率保证",
              handlesAccents: "处理专业术语",
              smartPunctuation: "完美的说话人识别"
            },
            visual: {
              accuracy: "96%",
              label: "出版级准确度",
              transcript: {
                speaker1: "“调查发现财务报告存在重大差异。”",
                speaker2: "“您能详细说明一下这些具体差异吗？”"
              }
            }
          },
          ironclad: {
            label: "信源保护",
            title: "铁壁信源保护",
            description: "我们提供强大的安全功能，保护您的敏感访谈数据和机密信源。银行级加密保障调查安全。",
            points: {
              accuracyGuarantee: "端到端加密",
              handlesAccents: "自动文件删除选项",
              smartPunctuation: "符合GDPR和隐私规范"
            },
            visual: {
              accuracy: "🔒",
              label: "最高安全性"
            }
          }
        }
      },
      features: {
        title: "满足记者",
        titleHighlight: "一切所需",
        subtitle: "尊重您工作流程的专业工具",
        featuresList: {
          languages: {
            title: "100+种语言",
            description: "以96%准确率支持全球12种主要语言的访谈"
          },
          exportFormats: {
            title: "导出格式",
            description: "Word、PDF、SRT、TXT。兼容任何工作流程。"
          },
          sourceProtection: {
            title: "信源保护",
            description: "银行级加密。您的信源始终保密。"
          },
          timestamps: {
            title: "时间戳",
            description: "点击任意语录跳转至对应音频位置"
          },
          teamSharing: {
            title: "团队协作",
            description: "与编辑安全共享转录稿"
          },
          mobileReady: {
            title: "移动端适配",
            description: "手机上传 随时随地审阅转录稿"
          },
          smartFormatting: {
            title: "智能排版",
            description: "自动分段加标点 生成易读文本"
          },
          batchProcessing: {
            title: "批量处理",
            description: "单次上传50个文件 夜间自动处理"
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "因上传限制，我积压了3年未转录的采访。NeverCap让我一个周末就全部搞定。彻底改变工作方式。",
          name: "朴洁西卡",
          role: "自由记者 前Otter用户"
        }
      },
      cta: {
        title: "开始转录",
        titleHighlight: "无限制",
        subtitle: "加入数千名不再计较上传次数、专注内容创作的记者行列",
        ctaPrimary: "免费无限试用 →",
        ctaSecondary: "查看价格"
      }
    },
    ContentCreators: {
      hero: {
        badge: "内容创作者专属",
        title: "YouTube视频转录",
        titleHighlight: "无限畅用",
        titleSuffix: "1",
        subtitle: "无论是YouTube视频转录、TikTok视频转文字二次创作，还是Facebook视频转文本需求，我们平台都能轻松处理。支持100+语言字幕生成，无月限额——尽享创作自由。",
        ctaPrimary: "开启无限字幕生成 →",
        ctaSecondary: "查看工作原理",
        stats: {
          videos: {
            number: "∞",
            label: "视频/月"
          },
          languages: {
            number: "100+",
            label: "种语言"
          },
          accuracy: {
            number: "96%",
            label: "准确率"
          },
          platforms: {
            number: "10+",
            label: "个平台"
          }
        }
      },
      platforms: {
        title: "从任意平台抓取并转录",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X（推特）",
          dropbox: "Dropbox",
          googleDrive: "谷歌云端硬盘",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        },
        titleMax: "全平台",
        titleMaxHighlight: "视频转录"
      },
      features: {
        title: "规模化内容创作",
        titleHighlight: "所需一切",
        subtitle: "专业工具 无专业限制",
        oneClickImport: {
          label: "一键导入",
          title: "粘贴链接即可转录",
          titleHighlight: "YouTube、TikTok和Instagram视频",
          description: "我们的工具简化视频内容转录流程。转录Instagram视频只需粘贴链接，Vimeo视频转录同样操作。一个周末即可处理完整个频道的积压内容。",
          points: {
            directYoutube: "直接转录YouTube链接",
            multiplePlatforms: "支持10+平台获取",
            batchPlaylists: "批量处理整个播放列表",
            autoSync: "自动同步您的频道"
          },
          demo: {
            instruction: "粘贴视频URL：",
            url: "https://youtube.com/watch?v=...",
            status: "获取并转录中..."
          }
        },
        globalReach: {
          label: "全球覆盖",
          title: "100+种语言",
          titleHighlight: "零限制",
          description: "通过自动翻译100+种语言触达全球观众。同时生成多语言字幕。无附加费用，翻译无月度上限。",
          points: {
            highAccuracy: "12种主要语言96%准确率",
            unlimitedTranslations: "包含无限翻译",
            multicultural: "完美适配多元文化内容",
            autoDetect: "自动检测源语言"
          },
          visual: {
            number: "100+",
            title: "支持语言",
            subtitle: "一次翻译，触达全球"
          }
        },
        flexibleExport: {
          label: "灵活导出",
          title: "所需格式",
          titleHighlight: "一应俱全",
          description: "导出适配您工作流程的格式。从YouTube的SRT文件到网页播放器的VTT，或可编辑的脚本文档。所有导出无限制，所有方案均包含。",
          points: {
            videoFormats: "视频平台SRT & VTT格式",
            editingFormats: "编辑用DOCX & PDF格式",
            dataAnalysis: "数据分析用CSV格式",
            simpleScripts: "简易脚本用TXT格式"
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
        title: "从上传到",
        titleHighlight: "发布",
        titleSuffix: "仅需数分钟",
        subtitle: "为整个内容库添加字幕的最快方式",
        steps: {
          pasteLinks: {
            title: "粘贴链接",
            description: "放入YouTube、TikTok或任意视频链接。或直接上传文件。"
          },
          autoTranscribe: {
            title: "自动转录",
            description: "AI处理准确率达96%。支持口音与多人对话。"
          },
          editTranslate: {
            title: "编辑与翻译",
            description: "完善您的字幕。即时翻译至100+种语言。"
          },
          exportPublish: {
            title: "导出与发布",
            description: "任意格式下载。上传至您的平台。完成！"
          }
        }
      },
      testimonials: {
        title: "创作者们",
        titleHighlight: "每日迁移",
        subtitle: "从受限方案到无限自由",
        carlos: {
          textBefore: "我制作西班牙语教育内容。NeverCap完美转录并",
          textAfter: "实现更广覆盖。无限制，只有增长。添加多语言字幕后我的频道观看量增长3倍。",
          highlight: "翻译为英文",
          name: "卡洛斯·马丁内斯",
          role: "YouTube教育者 • 25万订阅者"
        },
        sarah: {
          textBefore: "Descript每月收费30美元",
          textAfter: "。我有500多个视频积压。NeverCap让我在一个周末处理完所有内容。字幕带来的SEO提升在第一个月就回本了。",
          highlight: "30小时",
          name: "莎拉·李",
          role: "生活方式博主 • 18万订阅者"
        },
        jake: {
          textBefore: "这个",
          textAfter: "功能改变了游戏规则。我不再需要下载任何内容。只需粘贴、转录、完成。为TikTok处理播客片段从未如此简单。",
          highlight: "直接获取YouTube",
          name: "杰克·威尔逊",
          role: "播客主持人 • 顶尖1%创作者"
        },
        yuki: {
          textBefore: "我用5种语言创作内容。其他服务收费",
          textAfter: "。NeverCap提供无限翻译。自从使用地道母语字幕后，我的国际观众增长了400%。",
          highlight: "每次翻译",
          name: "田中由纪",
          role: "游戏创作者 • 50万订阅者"
        }
      },
      cta: {
        title: "您的整个频道。今天完成字幕添加。",
        subtitle: "加入5万+创作者行列，告别计时，专注创作",
        button: "开始无限字幕 →"
      },
        FAQSection: {
              "title": "您的转录问题，",
              "titleHighlight": "解答",
              subtitle: "关于不同平台视频转录您需要知道的一切",
              "questions": [
                    {
                      "question": "问：如何使用NeverCap转录YouTube视频？",
                      "answer": "很简单。找到要转录的YouTube视频，复制其URL并粘贴到我们的应用中。我们的AI将自动获取视频并在几分钟内提供完整文本转录。"
                    },
                    {
                      "question": "问：将Facebook视频转录为文本的最佳方式是什么？",
                      "answer": "最简单的方法是使用直接链接。复制Facebook视频的URL，我们的平台将处理其余工作，以高达96%的准确率将语音转换为文本，免去手动转录的麻烦。"
                    },
                    {
                      "question": "问：可以转录TikTok和Instagram视频吗？",
                      "answer": "当然可以。我们支持TikTok和Instagram视频转录。非常适合希望将短视频内容转化为博客文章、文章或文本社交媒体更新的内容创作者。"
                    },
                    {
                      "question": "问：如何将Vimeo视频转录为文本？",
                      "answer": "转录Vimeo视频与其他平台一样简单。只需复制Vimeo视频URL并粘贴到NeverCap中。我们的AI将处理视频并生成准确的文本转录，您可以下载多种格式。"
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "为学术卓越而打造",
      heroTitle1: "转录每场访谈。",
      heroTitle2: "分析所有数据。",
      heroSubtitle: "无需选择转录哪些焦点小组。以96%的准确率和完美的说话人识别处理所有定性数据——即使20位参与者同时发言。",
      heroCtaPrimary: "免费试用 - 无需信用卡",
      heroCtaSecondary: "查看工作原理",
      statsInterviewHours: "访谈时长",
      statsAccuracy: "准确率",
      statsSpeakersId: "说话人识别",
      statsCompliant: "合规",
      problemTitle: "这个",
      problemSubtitle: '其他服务让您选择"值得"转录的数据',
      problemCard1Title: "上传限制扼杀研究",
      problemCard1Desc: "Otter仅提供3次终身导入。如何转录200小时的焦点小组？",
      problemCard2Title: "遗漏关键数据",
      problemCard2Desc: "每段未转录的访谈都可能包含突破性见解。但Rev最低收费2美元/分钟。",
      problemCard3Title: "科研经费消失",
      problemCard3Desc: "随着数据量增长，转录成本飙升。每次焦点小组500美元的费用让扩展研究难以为继。",
      solutionTitle: "NeverCap解决方案",
      solutionDesc: "真正的无限转录。上传整个研究项目。转录每次访谈。分析所有数据。无上限，无限制，专注研究。",
      feature1Label: "无限制",
      feature1Title: "处理您的",
      feature1Desc: '今晚上传200小时访谈录音，醒来即可获得完整可搜索的转录稿。无月度上限，无单文件限制，没有所谓的"合理使用"限制。',
      feature1Point1: "批量同时上传50个文件",
      feature1Point2: "完整处理纵向研究",
      feature1Point3: "转录稿存储无限制",
      feature1Point4: "导出至NVivo、MAXQDA、Atlas.ti",
      feature1Visual1: "无限时长",
      feature1Visual2: "10小时或10,000小时同价",
      feature2Label: "智能AI",
      feature2Title: "精准把握",
      feature2Desc: "我们的AI可追踪多达20名发言者，即使他们同时发言、互相打断或集体插话。每个声音都能被准确捕捉并标记。",
      feature2Point1: "20人语音识别",
      feature2Point2: "处理交叉对话和打断",
      feature2Point3: "可重命名的话者标签",
      feature2Point4: "逐词时间戳",
      conversationParticipant1: "参与者1",
      conversationText1: "我们面临的主要障碍绝对是治疗成本...",
      conversationParticipant2: "参与者2",
      conversationText2: "确实，但我想补充的是获取途径——",
      conversationParticipant3: "参与者3",
      conversationText3: "——抱歉打断，但交通问题也很重要。",
      conversationText4: "对！这正是我想说的。",
      conversationParticipant4: "参与者4",
      conversationText5: "在农村地区，三个问题并存：成本、获取途径和交通。",
      feature3Label: "精准",
      feature3Title: "值得信赖",
      feature3Desc: "专业处理技术术语、浓重口音和领域专有词汇。精准度满足发表、同行评审和学位委员会要求。",
      feature3Point1: "医学术语与科学术语",
      feature3Point2: "100+种语言与方言",
      feature3Point3: "逐字记录与简洁阅读模式",
      feature3Point4: "任意格式编辑导出",
      feature3Visual1: "研究级准确度",
      feature3Visual2: "受50,000+研究者信赖",
      feature4Label: "安全",
      feature4Title: "IRB合规认证",
      feature4Desc: "您的敏感研究数据受企业级安全保护。符合GDPR标准，提供HIPAA合规选项，完整审计追踪满足IRB要求。",
      feature4Point1: "端到端加密",
      feature4Point2: "符合GDPR和CCPA",
      feature4Point3: "自动删除策略",
      feature4Point4: "安全的团队协作",
      useCasesTitle: "完美适用于",
      useCasesSubtitle: "从民族志到临床试验",
      useCase1Title: "焦点小组",
      useCase1Desc: "处理8-20人重叠对话。即使在激烈讨论中也能完美识别发言者。直接导出至质性分析软件。",
      useCase2Title: "深度访谈",
      useCase2Desc: "同时处理数百份一对一访谈。保持整个数据集的一致性。即时搜索所有转录文本。",
      useCase3Title: "临床研究",
      useCase3Desc: "符合HIPAA标准的患者访谈选项。精确的医学术语转录。安全处理敏感健康数据。",
      useCase4Title: "民族志研究",
      useCase4Desc: "自然环境中的实地录音。处理背景噪音和多人对话。支持100多种语言和方言。",
      useCase5Title: "口述历史项目",
      useCase5Desc: "无限制保存完整档案。创建可搜索的历史记录。非常适合纵向和代际研究。",
      useCase6Title: "论文研究",
      useCase6Desc: "学生友好价格，功能齐全。经济高效地处理整个数据集。通过批量处理满足紧迫截止日期。",
      testimonialTitle: "获得以下机构信赖",
      testimonialText: "我们的研究团队有200小时的社区健康研究焦点小组录音。其他服务因成本要求我们挑选转录哪些部分。NeverCap让我们在一个周末处理了所有内容。20人说话者识别功能甚至在最混乱的讨论中也奏效——即使所有人同时发言。这个工具彻底改变了我们处理定性数据的方式。",
      testimonialAuthorName: "Sarah Chen博士",
      testimonialAuthorRole: "公共卫生研究所首席研究员",
      ctaTitle: "不再选择分析哪些数据",
      ctaSubtitle: "加入50,000+转录一切的研究人员",
      ctaButton: "免费试用NeverCap",
      problemTitle2: "研究转录问题",
      title: "The",
      useCasesTitle2: "所有研究方法",
      testimonialTitle2: "领先研究人员",
        feature1TitleHl: "整个研究项目",
        feature1TitlePost: "一站式完成",
        feature2TitleHl: "焦点小组访谈",
        feature2TitlePost: "次次成功",
        feature3TitleHl: "96%准确率",
        feature4TitleHl: "安全保障",
        testimonialText2Hl: "200小时",
        testimonialText3: "来自我们社区健康研究的焦点小组录音。其他服务因成本要求我们挑选转录片段，而NeverCap让我们能处理",
        testimonialText4Hl: "所有内容仅需一个周末",
        testimonialText5: "。20人语音识别真实有效——即使在最混乱的多人同时发言场景。该工具已",
        testimonialText6Hl: "彻底改变",
        testimonialText7: "我们处理质性数据的方式。"
    },
    BusinessTeams: {
      heroBadge: "面向商业团队",
      heroTitle1: "会议录音",
      heroTitle2: "轻松完成",
      heroSubtitle: "直接在浏览器中录音或即时上传音频文件。从无限对话中构建可搜索档案。真正无限的转录，再也不会丢失重要讨论。",
      heroCtaPrimary: "立即开始录音 →",
      heroCtaSecondary: "查看工作原理",
      recordingStatus: "录音中...",
      statsMeetingMinutes: "会议纪要",
      statsLiveRecording: "录音",
      statsSpeakerID: "说话者识别",
      statsInstantUpload: "上传并处理",
      featuresTitle: "适合每家企业",
      featuresSubtitle: "从实时录音到即时上传，我们消除了所有摩擦点",
      feature1Title: "直接在浏览器中录音",
      feature1Desc: "无需下载，无需插件。一键立即开始录音。完美音质，自动说话者检测。",
      feature1Benefit1: "一键开始录音",
      feature1Benefit2: "无需安装软件",
      feature1Benefit3: "适用于任何设备",
      feature1Benefit4: "实时转录",
      feature1Visual1: "点击并录音",
      feature1Visual2: "无需设置",
      feature2Title: "即时上传任何音频文件",
      feature2Desc: "有Zoom、Teams或手机录音？即时上传。支持所有主流音视频格式。无需等待，同时处理多个文件。",
      feature2Benefit1: "支持格式：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV、FLAC",
      feature2Benefit2: "批量上传功能",
      feature2Benefit3: "支持10小时文件",
      feature2Benefit4: "边工作边处理",
      feature2Visual1: "拖放文件",
      feature3Title: "专为团队协作打造",
      feature3Desc: "即时与团队分享转录文本。一起听录音，以多种格式导出转录文本，通过可搜索的会议档案确保所有人保持一致。",
      feature3Benefit1: "与任何人分享转录文本",
      feature3Benefit2: "收听原始录音",
      feature3Benefit3: "导出多格式文本记录",
      feature3Benefit4: "团队共享可搜索档案",
      feature3Visual1: "团队成员",
      feature3Visual2: "无限协作",
      feature4Title: "即时查找任何对话",
      feature4Desc: "一键搜索所有会议。快速找到上季度的关键决策或数月前的客户需求。AI智能搜索理解上下文，而非仅关键词。",
      feature4Benefit1: "同时搜索所有会议",
      feature4Benefit2: "AI理解上下文",
      feature4Benefit3: "按发言人/日期筛选",
      feature4SearchPlaceholder: '🔍 搜索："Q4营收目标"',
      feature4SearchResults: "在3场会议中找到：",
      feature4Meeting1: "销售计划 - 10月15日",
      feature4Meeting1Text: '"...Q4目标设定为200万美元..."',
      feature4Meeting2: "董事会议 - 10月20日",
      feature4Meeting2Text: '"...Q4营收预测..."',
      workflowTitle: "如何将",
      workflowSubtitle: "无缝记录每个重要时刻",
      workflowStep1Title: "录制或上传",
      workflowStep1Desc: "实时录制或直接下载Zoom/Google Meet/Microsoft Teams会议录音",
      workflowStep2Title: "自动转录",
      workflowStep2Desc: "我们的AI将在数分钟内以96%准确率自动转录音频",
      workflowStep3Title: "协作",
      workflowStep3Desc: "共享/批注/提取待办事项",
      workflowStep4Title: "搜索与分析",
      workflowStep4Desc: "发现所有会议的深层洞察",
      testimonialsTitle: "团队挚爱",
      testimonialsSubtitle: "看企业如何变革会议文化",
      testimonial1Text: '"从遗漏关键细节到拥有可搜索的对话存档。直接录音功能确保重要讨论永不遗漏。"',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "TechCorp产品经理",
      testimonial2Text: '"Otter曾限制我们每月10次文件上传。现在可即时上传所有客户通话，彻底改变了销售团队的跟进方式。"',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "ConsultPro销售总监",
      testimonial3Text: '"跨月会议搜索功能在审计中拯救了我们，秒速找到每个决策和审批记录。"',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "FinanceHub首席运营官",
      ctaTitle: "不再丢失重要对话",
      ctaSubtitle: "加入数千支使用无限转录记录每场会议的团队",
      ctaButton: "免费开始录制 →",
      featuresTitle2: "会议",
      workflowTitle2: "Zoom录音转为文字",
      testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "教育工作者专区",
      heroTitle1: "让学习",
      heroTitle2: "人人可及",
      heroSubtitle: "粘贴YouTube链接即可获得自动生成字幕的即时转录。将讲座/教程/教育视频转化为所有学生都可搜索学习的内容。",
      heroCtaPrimary: "免费试用 - 无需信用卡",
      heroCtaSecondary: "观看演示",
      stats1Number: "一键",
      stats1Label: "YouTube转录",
      stats2Number: "100+",
      stats2Label: "支持的语言",
      stats3Number: "∞",
      stats3Label: "无限视频",
      stats4Number: "96%",
      stats4Label: "准确率",
      featuresTitle: "教育工作者所需的一切",
      featuresSubtitle: "从YouTube讲座到录播课程，让您的内容全面可访问",
      feature1Title: "即时YouTube和平台链接",
      feature1Desc: "只需粘贴视频链接即可获取即时转录。支持YouTube、Vimeo、Facebook、X（Twitter）、TikTok、Instagram、Dropbox、Google Drive等平台。无需下载，无需等待。",
      feature1Point1: "直接链接转录 - 无需下载",
      feature1Point2: "支持所有主流平台",
      feature1Point3: "批量处理整个播放列表",
      feature1Point4: "支持私有视频（需授权）",
      feature2Title: "自动生成字幕",
      feature2Desc: "立即为所有教育视频创建精准字幕。为听障学生、非母语者或偏好阅读的学习者提供无障碍内容。",
      feature2Point1: "SRT、VTT和TXT导出格式",
      feature2Point2: "单词级时间戳实现完美同步",
      feature2Point3: "轻松编辑和自定义字幕",
      feature2Point4: "直接回传至YouTube",
      feature2Visual1: "语言翻译",
      feature2Visual2: "让您的内容全球可访问",
      feature3Title: "按课程和分类整理",
      feature3Desc: "创建文件夹按课程、学科或学期管理转录稿。让所有教育内容分类清晰、易于检索，建立完整的无障碍课程资料库。",
      feature3Point1: "创建无限文件夹和子文件夹",
      feature3Point2: "按主题或难度标记视频",
      feature3Point3: "批量整理多个转录稿",
      feature3Point4: "即时搜索全部内容",
      feature3VisualTitle: "您的课程库",
      feature3Folder1: "数学101",
      feature3Folder2: "物理讲座",
      feature3Folder3: "生物实验视频",
      feature3Folder4: "历史纪录片",
      feature3Folder5: "语言学习",
      feature4Title: "AI音频转学习指南",
      feature4Desc: "不止分享录音。自动将讲座和其他音频文件转为详细学习指南，包含摘要和关键概念，助力学生高效复习。支持TXT、DOCX或PDF格式导出。",
      feature4Point1: "TXT格式便于文本编辑",
      feature4Point2: "DOCX格式生成规范文档",
      feature4Point3: "PDF格式方便共享打印",
      feature4Point4: "批量导出多个文件",
      workflowTitle: "工作原理：",
      workflowSubtitle: "几分钟内从视频链接到可访问的转录稿和学习资料",
      workflowStep1Title: "上传您的讲座",
      workflowStep1Desc: "上传任意音视频文件（MP3/MP4/WAV）或粘贴YouTube链接",
      workflowStep2Title: "AI转录",
      workflowStep2Desc: "我们的AI转录音频、区分说话人并识别关键主题",
      workflowStep3Title: "生成字幕",
      workflowStep3Desc: "自动创建完美同步的字幕",
      workflowStep4Title: "导出学习指南",
      workflowStep4Desc: "下载文本、摘要或导出以创建最终学习指南",
      useCasesTitle: "满足所有",
      useCasesSubtitle: "了解教育工作者如何使用NeverCap提升学习效果",
      useCase1Title: "录播课程",
      useCase1Text: "转录整学期的录播课程。学生可搜索特定主题、复习关键概念，不错过任何重要信息。",
      useCase2Title: "在线课程",
      useCase2Text: "通过100+种语言翻译，让国际学生无障碍学习在线课程。提升注册率与满意度。",
      useCase3Title: "学习资料",
      useCase3Text: "使用AI将视频教程和讲座的音频文件转录为学习指南。适合偏好阅读或需快速检索复习内容的学生。",
      useCase4Title: "无障碍合规",
      useCase4Text: "为所有视频内容提供字幕和文本，满足无障碍要求。确保每位学生平等获取。",
      useCase5Title: "翻转课堂",
      useCase5Text: "课前分享带文本的视频讲座。学生可自主预习，为课堂讨论做好准备。",
      useCase6Title: "研究与引用",
      useCase6Text: "通过时间戳帮助学生准确引用视频来源。专为研究项目和学术论文设计。",
      testimonialTitle: "深受",
      testimonialSubtitle: "了解全球教师选择NeverCap的原因",
      testimonialText: '"我用NeverCap转录了整个数学教程YouTube频道。其他服务需数周的工作，现在仅需几小时。直接粘贴链接即时获取文本的功能，彻底改变了我制作无障碍内容的方式。我的国际学生尤其喜爱多语言字幕！"',
      testimonialAuthorName: "Karen Mitchell教授",
      testimonialAuthorRole: "数学教授，在线教育者",
      ctaTitle: "让所有教育内容无障碍",
      ctaSubtitle: "加入数千教育工作者，体验真正无限的转录服务",
      ctaButton: "免费试用NeverCap",
      featuresTitle2: "视频转录",
      grid: "音频转学习指南",
      useCasesTitle2: "教育需求",
      testimonialTitle2: "50,000+教育工作者的信赖"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "将YouTube视频下载为MP4格式",
        "placeholder": "在此处搜索或粘贴您的YouTube链接",
        "clear_icon": "清空输入",
        "Download": "下载",
        "loading_text": "正在处理链接以进行下载。请留在当前页面。",
        "howToDownload": "如何下载？",
        "tutorial": "观看教程"
      },
      part2: {
        "title": "只需3个简单步骤，将YouTube视频转换为可下载的MP4文件",
        "steps": [
                {
                  title: "复制URL",
                  content: "打开目标YouTube视频，然后从浏览器地址栏复制链接。"
                },
                {
                  title: "粘贴链接",
                  content: "前往视频下载工具，将URL粘贴到输入框中。"
                },
                {
                  title: "下载MP4",
                  content: "处理完成后，点击下载按钮保存MP4文件。"
                }
              ]
      },
      part3: {
        content: [
                "是否曾需要离线观看YouTube视频？",
                "无论您是在地铁通勤、飞机上飞行、学习重要教程、深入技能提升内容，还是存档重要视频素材——可靠的离线访问是普遍的需求。这正是我们的下载器的优势所在。",
                "下载器可让您快速轻松地将YouTube视频转换为MP4格式并下载。保存到设备后，随时观看。",
                "过程快速、简单且无忧。下载后，随时随地享受您喜爱的视频——无需互联网。"
              ]
      },
      part4: {
        content: ["以下是下载YouTube视频为MP4文件的5大优势", "YouTube视频下载为MP4文件"],
        list: [
                {
                  title: "节省数据费用：",
                  content: "通常，在YouTube上观看视频会消耗大量移动数据。通过下载离线观看，您可以避免这些不必要的费用。"
                },
                {
                  title: "随时随地观看：",
                  content: "即使网络不稳定，也能无缝享受视频。不再担心缓冲问题。"
                },
                {
                  title: "轻松存档与保存：",
                  content: "将视频保存为MP4格式，便于建立个人收藏，尤其是对您认为真正有价值或重要的内容。"
                },
                {
                  title: "分享更简单：",
                  content: "分享MP4文件比发送链接方便得多。您可以直接通过WhatsApp或Instagram等应用发送视频文件，省去打开YouTube的额外步骤。"
                },
                {
                  title: "即时观看，共享时刻：",
                  content: "想兴奋地向附近的朋友或家人展示喜爱的视频？下载MP4后，你们可以立即流畅地一起观看，无需尴尬地等待加载。"
                }
              ]
      },
      part5: {
        title: "为何我们的下载器脱颖而出",
        cards: [
                {
                  title: "一键操作，简单易用",
                  content: "轻松设置，直观操作。"
                },
                {
                  title: "极速下载，无限畅享",
                  content: "以最快速度转换和下载——无上限，无限制。"
                },
                {
                  title: "即时转换",
                  content: "立即处理文件，无需等待。"
                },
                {
                  title: "零广告，零干扰",
                  content: "享受无弹窗、无横幅、无中断的简洁界面——仅需无缝视频转换。"
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "保证原始画质",
                  content: "您的下载文件保留源视频的完整分辨率，每次播放都像素完美。"
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "随处可用",
                  content: "完全兼容任何浏览器，任何设备。"
                }
              ]
      },
      part6: {
        title: ["最大化您的YouTube视频下载体验", "使用我们的下载器"],
        content: [
                "轻松将YouTube转换为MP4：快速、简单且免费。",
                "这正是我们的优势所在。我们的用户友好界面为所有人设计——无需技术技能。无论您的经验水平如何，都能即时转换视频。无需注册：立即获取所需内容。",
                "请放心——您下载的MP4文件保持与YouTube上观看时相同的原始画质和清晰度。",
                "随您所用，随处可用。完全兼容所有主流平台和设备。无论您使用Windows、macOS、Linux、Android还是iOS——无论是智能手机、平板还是台式机——都能无缝下载视频。"
              ]
      },
      part7: {
        title: "下载YouTube视频的关键问题",
        list: [
                {
                  question: "如果YouTube视频受版权保护，我还能下载吗？",
                  answer: "未经版权所有者许可下载受版权保护的YouTube视频是违法的。"
                },
                {
                  question: "这个下载工具安全吗？",
                  answer: "是的，它安全可靠。我们不会要求用户提供任何个人信息，并采取强力措施防范病毒。我们提醒您始终谨慎下载网络文件：避免点击可疑链接或下载可疑文件。"
                },
                {
                  question: "YouTube转MP4下载支持哪些语言？",
                  answer: "我们的服务支持下载所有流行语言的YouTube视频。"
                },
                {
                  question: "哪些因素会影响下载YouTube视频所需的时间？",
                  answer: "虽然我们确保最快的下载体验，但下载时间也受视频长度和您的网络连接速度等因素影响。"
                },
                {
                  question: "使用智能手机下载MP4视频时，文件保存在哪里？",
                  answer: '在智能手机上下载MP4文件后，通常可在设备的文件管理器应用中找到"下载"文件夹。'
                },
                {
                  question: "将YouTube视频下载为MP4会降低画质吗？",
                  answer: "不会。使用我们的工具将YouTube视频下载为MP4会保留原始画质。转换过程保持源画质，确保您获得与YouTube相同的观看体验。"
                }
              ]
      },
        err1: "YouTube链接格式错误。",
        err2: "抱歉！我们目前仅支持YouTube链接。如需其他网站支持，我们会在未来添加时通知您。",
        videoDownload: {
              title: "将YouTube视频下载为MP4，免费、快速、无广告。",
              description: "感谢您选择我们的服务！我们衷心感谢您的信任，并希望它提升了您的体验。如果您能向朋友分享我们的网站，将是极大的帮助。",
              downloadButton: "下载",
              downloadError: "下载错误"
            }
    }
  },
  About: {
    Hero: {
      "badge": "行业领先的AI技术",
      "title": "关于",
      "highlighted_text": "NeverCap",
      "description": "我们的使命是提供最精准的音视频转录服务。依托行业领先的AI技术，实现96%以上的转录准确率。通过技术优化，部分主要语言准确率可达99%。"
    },
    Stats: {
      "title": "我们的",
      "highlighted_text": "影响力",
      "subtitle": "用尖端AI技术赋能全球沟通",
      "metrics": [
            {
              "value": "96%+",
              "label": "准确率",
              "description": "先进AI带来的行业顶尖转录精度"
            },
            {
              "value": "100+",
              "label": "支持语言",
              "description": "面向全球内容的语音识别"
            },
            {
              "value": "249+",
              "label": "翻译语种",
              "description": "将转录文本翻译成几乎所有语言"
            }
          ]
    },
    Mission: {
      "title": "为何选择",
      "highlighted_text": "NeverCap",
      "subtitle": "我们致力于打破语言壁垒，让内容触达每个人",
      "features": [
            {
              "icon": "🎯",
              "title": "无与伦比的准确度",
              "description": "我们的AI模型持续优化，提供超96%的转录准确率，主要语言通过高级优化可达99%。"
            },
            {
              "icon": "🌍",
              "title": "全球语言支持",
              "description": "支持100+种语言的语音识别和249+种语言的翻译能力，让您的内容真正全球化。"
            },
            {
              "icon": "⚡",
              "title": "闪电般快速处理",
              "description": "数分钟即可处理数小时的音视频内容。优化的AI流程确保您在保持质量的同时快速获取转录稿。"
            },
            {
              "icon": "🔒",
              "title": "企业级安全",
              "description": "数据安全是我们的首要任务。采用行业标准加密技术，遵守全球隐私法规，确保您的内容安全保密。"
            }
          ]
    },
    Company: {
      "title": "公司",
      "highlighted_text": "信息",
      "subtitle": "如有任何问题或需要支持，请随时联系我们",
      "details": [
            {
              "label": "公司名称",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "总部",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "美国"]
            },
            {
              "label": "联系我们",
              "value": ["电子邮件", "提供24/7全天候支持"]
            }
          ]
    },
    CTA: {
      "title": "准备好体验与众不同？",
      "subtitle": "加入数千名信赖NeverCap转录服务的专业人士行列",
      "button": "免费试用 NeverCap →",
      "disclaimer": "无需信用卡 • 数秒内开始转录"
    }
  },
  Privacy: {
    title: "隐私",
    titleGradient: "政策",
    subtitle: "了解我们如何收集、使用和保护您的个人信息",
    "lastUpdated": "最后更新：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "privacyPolicyTitle": "隐私政策",
    "policyAgreement": "请仔细阅读本隐私政策并确保您理解其内容。使用我们的任何服务即表示您同意本隐私政策。如果您不同意我们按照本政策使用您的个人数据，必须立即停止使用我们的服务。",
    "policyOverview": "本政策阐述了：我们收集哪些数据及原因；您的数据如何处理；以及您对数据的权利。我们不会出售您的数据。",
    "scopeTitle": "1. 隐私政策适用范围",
    "scopeDescription": "本隐私政策仅适用于我们对服务用户信息的收集和处理。不适用于任何第三方运营的关联服务/网站/软件（无论链接由我们提供还是用户分享），也不适用于第三方内容/数据/应用/材料。建议您在向第三方提供信息前查阅其隐私政策。",
    "collectionTitle": "2. 我们收集的内容及原因",
    "collectionPrinciple": "我们的指导原则是仅收集必要信息。具体包括：",
    "identityTitle": "2.1 身份与访问",
    "identityDescription": "注册产品时我们会要求提供姓名、电子邮箱等身份信息，以提供核心功能并发送产品更新等重要通知。",
    "billingTitle": "2.2 账单信息",
    "billingDescription": "订阅付费产品时需要提供付款信息和账单地址。付款信息直接提交至支付处理器，不经过我们服务器。",
    "productInteractionsTitle": "2.3 产品交互",
    "productInteractionsDescription": "您在产品账户中上传/接收/存储的内容会保存在我们服务器上。除非您删除，否则这些内容将在账户有效期内保留。",
    "websiteInteractionsTitle": "2.4 网站交互",
    "websiteInteractionsDescription": "我们会收集浏览行为信息用于分析和统计（如转化率测试和新产品设计实验），包括浏览器/操作系统版本、IP地址、访问页面及加载时长、引荐来源等。登录状态下这些数据会与IP地址和账户关联直至账户失效。",
    "cookiesTitle": "2.5 Cookie",
    "cookiesDescription1": "我们使用持久性第一方Cookie和部分第三方Cookie来存储偏好设置、简化应用使用、进行A/B测试及支持分析。",
    "cookiesDescription2": "Cookie是浏览器存储的文本片段，可记忆登录信息和网站偏好，也会收集浏览器类型、操作系统、访问页面、停留时长、浏览内容等点击流数据。您可在浏览器设置中调整Cookie保留设置或屏蔽单个Cookie，但禁用Cookie将导致应用无法运行且部分服务异常。",
    "correspondenceTitle": "2.6 主动通信",
    "correspondenceDescription": "当您通过邮件咨询问题时，我们会保留通信记录（含邮箱地址）以便后续查阅历史记录。",
    "accessTitle": "3. 我们访问或共享信息的场景",
    "accessDescription1": "提供您请求的产品或服务。我们使用第三方子处理器（包括云服务和分析提供商）来运营应用和提供服务。",
    "accessDescription2": "调查、预防或处理滥用行为。仅在最后手段时才会调查性访问客户账户。我们既要保护客户隐私安全，也要兼顾问题举报者的权益，并全程平衡这些责任。如发现产品被用于受限用途，将采取必要措施（包括在适当时通知相关机构）。",
    "accessDescription3": "根据适用法律要求。",
    "dataRequests": "用户数据请求。我们的政策是除非受法律程序强制或紧急情况，否则不响应政府数据请求。但若美国执法部门出示有效搜查令、刑事传票或法庭命令，我们必须配合。对于境外政府请求，仅在美国政府通过司法互助条约规定的程序要求时才会响应。除非法律禁止，我们会在共享数据前通知受影响用户（紧急情况除外）。",
    "preservationRequests": "数据保留请求。我们仅根据《美国联邦存储通信法》第2703(f)条或适格民事传票要求保留数据。除非法律要求或不可上诉的法庭命令，否则不会共享保留数据。若在保留期内未收到适格令状/命令/传票，将在保留期结束时销毁所有客户数据副本。",
    "taxAudits": "如遇税务审计，可能需要共享账单地址、免税证明等最低必要信息。",
    "securityTitle": "4. 数据安全措施",
    "securityDescription": "所有服务器到浏览器的数据传输均通过SSL/TLS加密。",
    "deletionTitle": "5. 删除内容的后果",
    "deletionDescription": "删除内容后将立即无法访问。",
    "locationTitle": "6. 网站及数据位置",
    "locationDescription": "我们的产品和服务运营于美国。欧盟、英国或其他非美国地区的用户请注意，您提供的所有信息都将传输并存储在美国。使用我们的网站/服务即表示您同意此传输。",
    "childrenTitle": "7. 儿童隐私",
    "updatesTitle": "8. 隐私政策更新",
    "updatesDescription": "我们可能根据法规要求或实践变化更新本政策。重大变更时会更新页首日期。",
    "contactTitle": "9. 联系我们",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "：",
      policyDescription: '本政策描述 NeverCap（以下简称"NeverCap"、"我们"）在您使用我们的服务、网站（{url}）及软件（统称"服务"）时如何收集、使用和披露您的个人信息。',
      childrenDescription: "本服务不面向儿童，我们不会有意收集13岁以下儿童的个人信息。如您未满13岁，请勿通过本服务提交任何个人信息。若您发现儿童违反本政策向我们提供了个人信息，请联系 {at} {email}。",
      contactDescription: "如对本隐私政策有任何疑问、意见或投诉，请联系 {at} {email}，我们将尽快处理您的投诉。"
},
  TermsOfUse: {
    title: "服务",
    titleGradient: "条款",
    subtitle: "使用服务前请仔细阅读这些条款",
    "lastUpdated": "最后更新：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "termsOfServiceTitle": "服务条款",
    "thankYou": "感谢您使用我们的产品！",
    "companyDefinition": "本文件中提到的“公司”、“我们”、“我们的”或“我方”均指NeverCap。",
    "servicesDefinition": "“服务”指由NeverCap创建和维护的任何产品，无论通过网页浏览器、桌面应用、移动应用或其他形式提供。",
    "termsUpdate": "我们可能会在未来更新这些服务条款。通常这些更新是为了通过链接到扩展的相关政策来澄清某些条款。每当我们对政策进行重大更改时，我们将更新本页顶部的日期，并采取其他适当措施通知账户持有人。",
    "acceptanceTitle": "1. 协议接受",
    "acceptanceDescription1": "使用我们的服务即表示您接受本协议，该协议将成为您与NeverCap之间的有约束力的合同。您声明您有法律能力接受这些条款，并确认您已达到签订有约束力合同的法定年龄。NeverCap的接受明确以您同意本协议所有条款和条件为前提。",
    "eligibilityRequirement": "服务不适用于18岁以下的任何人，也不应由其使用。使用服务即表示您声明并保证您符合上述资格要求。",
    "userResponsibility": "“您”、“您的”、“您自己”还包括您的员工、代理人、业务代表以及您通过账户（定义如下）提供访问服务的任何其他个人。您有责任确保通过您账户访问服务的所有人员知晓并遵守这些条款。",
    "termsRevision": "NeverCap保留随时自行修订和更新这些条款的权利。所有更改在发布后立即生效。您在修订条款发布后继续使用服务即表示您接受并同意这些更改。您应定期检查本页面以了解任何更改，因为它们对您具有约束力。",
    "servicesTitle": "2. NeverCap的服务",
    "servicesDescription1": "我们的服务使用户能够将语音对话转换为可搜索、翻译并与他人共享的转录文本。",
    "servicesOptions": "您可以选择使用服务的免费版本（“免费服务”）或需要支付费用的订阅付费版本（“付费服务”）。",
    "servicesAccess": "我们将向您提供服务。您负责安排访问服务所需的所有必要准备。",
    "accountTermsTitle": "3. 账户条款",
    "accountSecurity": "您有责任维护账户的安全。公司对您未能遵守此安全义务造成的任何损失或损害不承担任何责任。",
    "lawfulUse": "您不得将服务用于任何非法、不道德或不道德的目的。",
    "contentResponsibility": "您对账户下发布的所有内容及发生的所有活动负责。这包括以下人员发布的内容：(a) 拥有您登录凭据的人；或 (b) 在您账户下拥有自己登录权限的人。",
    "humanRequirement": "您必须是人类。不允许通过“机器人”或其他自动化方法注册账户。",
    "paymentTitle": "4. 付款、退款和计划变更",
    "freeTrial": "对于提供免费试用的付费服务，我们会在您注册时说明试用时长。试用期结束后，您需要预付费用以继续使用服务。如果您不付款，这些服务将终止。",
    "upgradePolicy": "如果您从免费计划升级到付费计划，我们将立即扣款，您的计费周期从升级当天开始。",
    "taxes": "所有费用均不含税务机构征收的任何税款、费用或关税。在需要时，我们将代表税务机构收取这些税款并将其缴纳给税务机构。否则，您应负责支付所有税款、费用或关税。",
    "refunds": "所有购买均不可退款。您可以随时登录账户取消任何付费服务。对于付费订阅，除非另有说明，您的取消将在当前付费期结束时生效。",
    "cancellationTitle": "5. 取消和终止",
    "cancellationPolicy": "如果您在任何付费时间结束前取消服务，取消将立即生效，并且您将不再被收费。我们不会自动按比例退还最后一个计费周期中未使用的时间。",
    "terminationRights": "我们有权随时以任何理由暂停或终止您的账户，并拒绝您当前或未来使用我们的服务。暂停意味着您将无法访问账户或账户中的任何内容。终止还将导致您的账户或对账户的访问被删除，以及账户中所有内容的没收和放弃。我们还保留随时以任何理由拒绝任何人使用服务的权利。我们设置此条款是因为从统计数据来看，在我们服务的数十万个账户中，至少有一个在做一些恶意行为。",
    "abusePolicy": "对公司员工或官员的口头、身体、书面或其他形式的虐待（包括虐待或报复的威胁）可能导致账户立即终止。",
    "submissionsTitle": "6. 提交内容",
    "submissionsDescription": "您承认并同意，您向我们提供的有关网站的任何问题、评论、建议、想法、反馈或其他信息（“提交内容”）均为非保密内容，并成为我们的独家财产。我们将拥有包括所有知识产权在内的独家权利，并有权出于任何合法目的（商业或其他）无限制地使用和传播这些提交内容，无需向您确认或补偿。您在此放弃对任何此类提交内容的所有精神权利，并声明任何此类提交内容均为您原创或您有权提交。您同意，对于您提交内容中任何专有权的所谓或实际侵权或盗用，您不得对我们采取任何追索行动。",
    "uptimeTitle": "7. 正常运行时间和安全性",
    "serviceAvailability": "您使用服务需自行承担风险。我们以“按现状”和“按可用”为基础提供这些服务。我们不为大多数服务提供服务水平协议，但非常重视应用程序的正常运行时间。",
    "throttlingPolicy": "在极少数情况下，如果验证发现用户的活动对其他用户的服务稳定性和性能产生负面影响，我们保留临时限制或限制账户访问的权利。在除最紧急情况外的所有情况下，我们将在采取行动前与您联系以寻找解决方案。",
    "dataSecurity": "我们通过备份、冗余和加密等多种措施来保护和保护您的数据。我们对通过公共互联网传输的数据强制加密。",
    "thirdPartyVendors": "我们使用第三方供应商和托管合作伙伴来提供运行服务所需的硬件、软件、网络、存储和相关技术。",
    "siteManagementTitle": "8. 网站管理",
    "siteManagementDescription": "我们保留以下权利（但无义务）：(1) 监控网站是否违反这些服务条款；(2) 对我们自行认定违反法律或这些服务条款的任何人采取适当的法律行动，包括但不限于向执法机关报告该用户；(3) 在我们自行决定且无限制的情况下，拒绝、限制访问、限制可用性或禁用（在技术可行的范围内）您的贡献或其任何部分；(4) 在我们自行决定且无通知或责任的情况下，从网站中删除或以其他方式禁用所有过大或对我们的系统造成负担的文件和内容；(5) 以旨在保护我们权利和财产并促进网站正常运作的方式管理网站。",
    "copyrightTitle": "9. 版权和内容所有权",
    "copyrightCompliance": "在服务上发布的所有内容必须遵守美国版权法。",
    "ipRights": "我们对您提供给服务的材料不主张任何知识产权。所有上传的材料仍归您所有。",
    "contentModeration": "我们不会预先筛选内容，但保留自行决定拒绝或删除通过服务提供的任何内容的权利（但无义务）。",
    "prohibitedExploitation": "您同意未经公司明确书面许可，不得复制、拷贝、出售、转售或利用服务的任何部分、服务的使用或对服务的访问。",
    "impersonationProhibition": "您不得修改其他网站以虚假暗示其与服务或公司有关联。",
    "dmcaPolicy": "我们尊重他人的知识产权。如果您认为网站上或通过网站提供的任何材料侵犯了您拥有或控制的版权，请立即联系我们。您的通知副本将发送给发布或存储通知中所述材料的人员。请注意，根据适用法律，如果您在通知中做出重大虚假陈述，您可能会对损害承担责任。因此，如果您不确定网站上的材料或通过网站链接的材料是否侵犯了您的版权，您应考虑首先联系律师。",
    "prohibitedActivitiesTitle": "10. 禁止活动",
    "generalProhibition": "您不得出于我们提供本网站之外的任何目的访问或使用本网站。除非获得我们明确认可或批准，否则不得将本网站用于任何商业活动。",
    "userObligations": "作为本网站用户，您同意不从事以下行为：",
    "dataScraping": "未经我们书面许可，系统地检索数据或其他内容以直接或间接创建或汇编任何集合、汇编、数据库或目录。",
    "fraud": "欺骗、欺诈或误导我们及其他用户，尤其是试图获取敏感账户信息（如用户密码）的行为。",
    "securityInterference": "规避、禁用或以其他方式干扰本网站的安全功能，包括防止或限制内容使用或复制，或强制执行网站及所含内容使用限制的功能。",
    "defamation": "以我们认为会贬低、损害或危害我们和/或本网站的方式行事。",
    "harassment": "使用从本网站获取的任何信息骚扰、虐待或伤害他人。",
    "supportAbuse": "滥用我们的支持服务或提交虚假的滥用或不当行为报告。",
    "legalCompliance": "以任何不符合适用法律法规的方式使用本网站。",
    "framingProhibition": "未经授权对本网站进行框架或链接。",
    "malware": "上传或传输（或试图上传或传输）病毒、木马或其他干扰任何一方正常使用本网站的材料，包括过度使用大写字母和垃圾信息（连续发布重复文本），或修改、损害、干扰、改变本网站的使用、功能、操作或维护。",
    "automation": "从事任何自动化系统使用行为，例如使用脚本发送评论或消息，或使用任何数据挖掘、机器人或类似的数据收集和提取工具。",
    "copyrightRemoval": "删除任何内容的版权或其他专有权利声明。",
    "impersonation": "试图冒充其他用户或他人，或使用其他用户的用户名。",
    "spyware": '上传或传输（或试图上传或传输）任何作为被动或主动信息收集或传输机制的材料，包括但不限于清晰的图形交换格式（\"gifs\"）、1×1像素、网络信标、Cookie或其他类似设备（有时称为\"间谍软件\"或\"被动收集机制\"或\"pcms\"）。',
    "disruption": "干扰、破坏或对本网站或与之相连的网络或服务造成不当负担。",
    "employeeHarassment": "骚扰、烦扰、恐吓或威胁任何为我们提供网站服务的员工或代理。",
    "accessCircumvention": "试图绕过本网站旨在防止或限制访问本网站或其任何部分的措施。",
    "codeCopying": "复制或改编本网站的软件，包括但不限于Flash、PHP、HTML、JavaScript或其他代码。",
    "reverseEngineering": "除非适用法律允许，否则不得对构成或部分构成本网站的任何软件进行解密、反编译、反汇编或逆向工程。",
    "bots": "除非是标准搜索引擎或互联网浏览器的使用结果，否则不得使用、启动、开发或分发任何自动化系统，包括但不限于任何访问本网站的蜘蛛、机器人、作弊工具、抓取工具或离线阅读器，或使用或启动任何未经授权的脚本或其他软件。",
    "buyingAgents": "使用购买代理或采购代理在本网站进行购买。",
    "unauthorizedUse": "对本网站进行任何未经授权的使用，包括通过电子或其他方式收集用户的用户名和/或电子邮件地址以发送未经请求的电子邮件，或通过自动化手段或虚假借口创建用户账户。",
    "competition": "将本网站用于与我们竞争的任何努力，或以任何创收或商业企业为目的使用本网站和/或其内容。",
    "advertising": "使用本网站宣传或销售商品和服务。",
    "profileTransfer": "出售或以其他方式转让您的个人资料。",
    "featuresTitle": "11. 功能与缺陷",
    "featuresDescription": "我们基于自身经验及分享时间和反馈的客户经验精心设计服务。但没有任何服务能让所有人满意。我们不保证服务能满足您的特定要求或期望。",
    "bugsDescription": "我们在发布前会测试所有功能。与任何软件一样，我们的服务不可避免地存在一些缺陷。我们会跟踪并修复报告的缺陷，尤其是与安全或隐私相关的缺陷。并非所有报告的缺陷都会被修复，我们也不保证服务完全无错误。",
    "correctionsTitle": "12. 更正",
    "informationAccuracy": "本网站上的信息可能存在印刷错误、不准确或遗漏，包括描述、价格、可用性及其他各种信息。我们保留随时更正任何错误、不准确或遗漏以及更改或更新网站信息的权利，恕不另行通知。",
    "siteAvailability": "我们无法保证本网站始终可用。可能会遇到硬件、软件或其他问题，或需要进行与网站相关的维护，导致中断、延迟或错误。我们保留随时或出于任何原因更改、修订、更新、暂停、终止或以其他方式修改本网站的权利，恕不另行通知。您同意，对于因网站停机或终止期间无法访问或使用网站而造成的任何损失、损害或不便，我们不承担任何责任。本服务条款中的任何内容均不应解释为要求我们维护和支持本网站或提供任何更正、更新或发布。",
    "userDataTitle": "13. 用户数据",
    "userDataDescription": "我们将保留您传输至本网站的某些数据以管理网站性能，以及与您使用网站相关的数据。尽管我们会定期备份数据，但您需对传输的任何数据或使用网站进行的任何活动全权负责。您同意，对于任何此类数据的丢失或损坏，我们不对您承担任何责任，您特此放弃因任何此类数据丢失或损坏而对我们采取的任何行动权利。",
    "privacyPolicyTitle": "14. 隐私政策",
    "liabilityTitle": "15. 责任",
    "liabilityIntroduction": "我们在本条款中多次提及责任，现统一说明如下：",
    "liabilityWaiver": "您明确理解并同意，在法律或衡平法上，公司对您或任何第三方不承担任何直接、间接、附带、利润损失、特殊、后果性、惩罚性或惩戒性损害赔偿（即使公司已被告知此类损害的可能性），包括但不限于因以下原因造成的利润、商誉、使用、数据或其他无形损失：(1) 使用或无法使用服务；(2) 内容和材料的错误、不准确；(3) 因访问和使用网站导致的任何性质的人身伤害或财产损失；(4) 因通过服务购买、获取商品、数据、信息或服务或接收消息或进行交易而产生的替代商品和服务的采购成本；(5) 对我们安全服务器及其中存储的任何和所有个人信息和/或财务信息的未经授权访问或使用；(6) 与网站的传输中断或停止；(7) 任何第三方传输至或通过网站的任何缺陷、病毒、木马等；(8) 任何内容和材料的错误或遗漏，或因使用通过网站发布、传输或以其他方式提供的任何内容而导致的任何类型的损失或损害；(9) 服务上任何第三方的声明或行为；(10) 或与本服务条款或服务相关的任何其他事项，无论是基于违约、侵权（包括主动或被动过失）还是任何其他责任理论。",
    "miscellaneousTitle": "16. 其他",
    "miscellaneousDescription": "本服务条款及我们在网站上发布的任何政策或操作规则构成您与我们之间的完整协议和理解。我们未能行使或执行本服务条款的任何权利或规定，不应视为对该权利或规定的放弃。本服务条款在法律允许的最大范围内适用。我们可随时将任何或全部权利和义务转让给他人。对于超出我们合理控制范围的任何原因造成的损失、损害、延迟或未能采取行动，我们不承担责任。如果本服务条款的任何规定或部分规定被认定为非法、无效或不可执行，则该规定或部分规定应被视为可分割的，不影响其余规定的有效性和可执行性。本服务条款或使用本网站不会在您与我们之间建立合资、合伙、雇佣或代理关系。您同意，不应因我们起草了本服务条款而对其作出不利解释。您特此放弃基于本服务条款的电子形式及双方未签署本服务条款而可能提出的任何抗辩。",
    "contactTitle": "17. 联系我们",
    "neverCap": "NeverCap",
    "site": "网站",
    "services": "服务",
    at: "：",
      trademarkProtection: "本服务的名称、外观及设计均属公司版权所有。未经公司书面许可，严禁复制、拷贝或重用任何HTML、CSS、JavaScript代码或视觉设计元素。如需使用公司标志或服务标志进行宣传，必须事先申请授权。请发送邮件至 {at} {email} 申请标志使用权。若您违反本服务条款，我们有权撤回授权。",
      privacyPolicyDescription: "我们高度重视数据隐私与安全。请查阅我们的{policy}。使用本网站即表示您同意遵守已纳入本服务条款的隐私政策。请注意，本网站托管于美国。若您从其他司法管辖区访问本网站，该地区关于个人数据收集、使用或披露的法律要求可能与美国法律不同，继续使用本网站即表示您同意将数据传输至美国并进行处理。",
      contactDescription: "如对服务条款有任何疑问，请联系 {at} {email}。"
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
