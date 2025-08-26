// 韩语
let message = {
  // 홈페이지
  HomePage: {
    home: "모든 전사본",
    times: "하루 {times}회 무료 전사, 오늘 {left}회 남음.",
    tips: "무제한 전사를 위해 Pro로 업그레이드하세요.",
    update: "지금 업그레이드",
    rename: "이름 변경",
    delete: "삭제",
    cancel: "취소",
    confirm: "생성",
    dialogLabel: "폴더 이름",
    recently: "최근 파일",
    loading: "로딩 중",
    tour: {
      step0: {
        title: "{name}에 오신 것을 환영합니다",
        tip: "여기서 할 수 있는 일:",
        content: "일회성 대화, 회의, 강의 등을 트랜스크립션합니다",
        next: "시작하기"
      },
      step1: {
        title: "파일 트랜스크립션",
        content:
          "로컬 파일, 링크, 녹음 등 세 가지 트랜스크립션 방법을 지원합니다."
      },
      step2: {
        title: "폴더 만들기",
        content: '"+" 버튼을 클릭하여 폴더를 만들고 파일을 정리하세요.'
      },
      step3: {
        title: "트랜스크립션 세부 정보 보기 및 편집",
        content:
          "항목을 클릭하여 트랜스크립션 세부 정보를 보고 편집하며 번역할 수도 있습니다."
      },
      next: "다음",
      finish: "이해했습니다"
    },
    export: {
      export: "내보내기",
      title: "내보내기를 생성 중입니다",
      title2: "파일이 준비되었습니다",
      singleLoadingContent: "1개 파일을 압축 중입니다.",
      singleSuccessContent: "1개 파일이 압축되었습니다.",
      loadingContent: "{num}개 파일을 압축 중입니다.",
      successContent: "{num}개 파일이 압축되었습니다.",
      cancel: "내보내기 취소",
      error: "내보내기 오류",
      dialog: {
        title: "경고",
        content: "내보내기를 취소하시겠습니까?",
        cancel: "내보내기 취소",
        continue: "내보내기 계속"
      }
    },
    welcome: {
      title: "Scribify에 오신 것을 환영합니다!",
      description: "여기서 할 수 있는 일:",
      transcribe:
        "Scribify로 쉽게 음성을 텍스트로 변환—음성 대화를 명확하고 검색 가능하며 공유 가능한 텍스트로 순식간에 바꿔보세요.",
      precision:
        "화자 구분 및 타임스탬프가 포함된 정확한 문서를 즉시 받아보세요.",
      translate:
        "언어 장벽 허물기: 200개 이상의 언어로 문서를 쉽게 번역해 보세요.",
      edit: "필요에 맞게 문서를 편집, 개선 및 다양한 형식으로 내보내기가 가능합니다.",
      collaborate: "변환된 텍스트를 다른 사람들과 공유하며협업하세요.",
      button: "시작하기",
      tip: "오디오를 문서화된 텍스트로 변환할 준비가 되셨나요? 지금 바로 시작해 보세요!",
      tip2: "지금 탐색을 시작하세요!",
      tip1: "오디오를 전사된 텍스트로 변환할 준비가 되었나요? "
    },
    subscriptionModal: {
      left: {
        title: "프로 플랜으로 더 많은 기능 잠금 해제",
        c1: "무제한 문서화",
        c2: "10시간 업로드",
        c3: "최우선 처리",
        c4: "99% 문서화 정확도",
        c5: "100개 이상의 언어 지원",
        c6: "화자 식별",
        c7: "문서 번역",
        t1: "한 사람을 위한 무제한 문서화.",
        t2: "각 파일은 최대 10시간/5GB까지 가능. 한 번에 50개 파일 업로드.",
        t3: "항상 최우선 순위로 가능한 빨리 파일을 문서화해 드립니다."
      },
      right: {
        title: "프로 플랜 구매",
        yearly: "연간",
        monthly: "월간",
        save: "절약",
        preMonth: "월 당",
        preYear: "년 당",
        firstMonth: "첫 달",
        afterwards: "이후"
      },
      subscribe: "구독하기"
    }
  },
  // 폴더 페이지
  FolderPage: {
    table: {
      failed: "실패",
      selected: "선택됨",
      success: "성공",
      fileList: "파일 목록"
    },
    dialog: {
      move: {
        title: "이동",
        label: "폴더 선택",
        placeholder: "폴더 선택",
        confirm: "이동",
        cancel: "취소"
      },
      rename: {
        title: "이름 변경",
        label: "파일 이름",
        confirm: "이름 변경",
        cancel: "취소"
      },
      delete: {
        title: "삭제",
        file: "파일",
        files: "파일",
        label: "삭제를 확인하시겠습니까? 이 작업은 실행 취소할 수 없습니다.",
        confirm: "삭제",
        cancel: "취소"
      },
      share: {
        title: "공유",
        label:
          "다음 보안 링크가 있는 모든 사람이 이 트랜스크립트와 관련 미디어 파일을 볼 수 있습니다.",
        confirm: "링크 복사",
        success: "복사 성공"
      },
      export: {
        title: "내보내기",
        select: "필요한 형식을 선택하세요",
        settings: "설정",
        speaker: "화자 포함",
        timecodes: "타임코드 포함",
        confirm: "내보내기",
        cancel: "취소",
        selectErr: "하나 이상의 형식을 선택하세요"
      }
    },
    search: {
      placeholder: "검색"
    },
    recently: "최근",
    record: "녹음",
    transcribe: "트랜스크립션",
    unclassified: "미분류 폴더",
    buttons: {
      transcribe: "파일 트랜스크립션",
      url: "링크 트랜스크립션",
      record: "녹음 및 트랜스크립션",
      recording: "녹음 중..."
    },
    delSuccess: "성공적으로 삭제됨",
    create: "생성",
    endRecord: {
      title: "알림",
      content:
        "녹음 중입니다. 이 작업을 수행하면 녹음이 종료됩니다. 녹음을 종료하시겠습니까?",
      confirm: "녹음 계속",
      cancel: "녹음 종료"
    }
  },
  // 파일 업로드 및 녹음
  FileUploadAndRecording: {
    record: {
      record: "녹음",
      pause: "일시 중지",
      resume: "재개",
      stop: "중지",
      endRecord: "녹음 종료",
      delete: "삭제",
      transcribe: "트랜스크립션",
      permissionDenied: "마이크 권한이 거부되었거나 장치가 존재하지 않습니다",
      dialog: {
        delete: {
          title: "경고",
          label: "이 녹음을 삭제하시겠습니까?",
          confirm: "삭제",
          cancel: "취소"
        },
        complete: {
          title: "녹음 완료",
          label:
            "녹음이 10시간에 도달하여 자동으로 중지되었습니다. 트랜스크립션하세요.",
          confirm: "확인"
        },
        speaker: {
          content:
            "발화자 인식을 위해 파일은 3시간以内로 제한됩니다. '{text}' 선택을 해제해 주세요."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "온라인 미디어 트랜스크립션",
        title: "링크 붙여넣기",
        label:
          "YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram 등 다양한 플랫폼의 동영상 또는 오디오 링크를 붙여넣기...",
        confirm: "추가",
        cancel: "취소",
        // 올바른 링크를 입력하세요
        errorTitle:
          "입력한 링크 주소가 올바르지 않습니다. 확인 후 다시 시도하세요.",
        linkName: "링크"
      },
      file: {
        orTitle: "URL에서 필사",
        dialogTitle: "필사할 파일 업로드",
        tip1: "파일을 여기로 끌어다 놓거나 클릭하여 찾아보세요",
        tip2: "클릭하여 탐색하세요",
        or: "또는",
        supported: "지원되는 형식"
      },
      del: {
        title: "경고",
        content:
          "모든 진행 상황이 손실됩니다. 트랜스크립션 취소를 확인하시겠습니까?",
        cancel: "취소 확인",
        confirm: "트랜스크립션 계속"
      },
      files: "파일",
      resultDialogTitle: "파일 트랜스크립션",
      resultDialogTitle2: "파일 전사",
      cancel: "취소",
      confirm: "트랜스크립션",
      return: "돌아가기",
      addMore: "더 추가",
      language: "언어 선택",
      failed: "실패",
      tooLarge: "파일이 제한을 초과했습니다(5GB).",
      linkUpload: "업로드 중",
      fileFormat: "파일 형식이 허용되지 않습니다",
      localFiles: "로컬 파일",
      pasteLink: "온라인 링크",
      uploadErr: "업로드 오류",
      hashErr: "해시 오류",
      table: {
        status: "상태",
        file: "파일",
        size: "크기",
        noData: "데이터 없음"
      },
      maxFileNum: "파일 수는 {num}개를 초과할 수 없습니다.",
      speaker: "발화자 인식",
      speakerLabel: "발화자 자동 인식",
      guest: {
        transcribe: "고쳐 쓰다",
        file: "파일",
        audio: "오디오/비디오 파일",
        Uploading: "업로드 중..."
      }
    }
  },
  // 트랜스크립션 상세 페이지
  TranscriptionPage: {
    langChooseV1: {
      recently: "최근",
      popular: "자주 사용",
      other: "기타",
      searchLanguage: "언어 검색",
      noMatch: "일치하는 언어를 찾을 수 없습니다",
      English: "영어",
      "English(US)": "영어(미국)",
      "English(UK)": "영어(영국)",
      Spanish: "스페인어",
      Portuguese: "포르투갈어",
      French: "프랑스어",
      Italian: "이탈리아어",
      German: "독일어",
      Dutch: "네덜란드어",
      Polish: "폴란드어",
      Danish: "덴마크어",
      Japanese: "일본어",
      Korean: "한국어",
      Hungarian: "헝가리어",
      Czech: "체코어",
      Chinese: "중국어",
      Hebrew: "히브리어",
      Arabic: "아랍어",
      Azerbaijani: "아제르바이잔어",
      Estonian: "에스토니아어",
      Belarusian: "벨라루스어",
      Bulgarian: "불가리아어",
      Icelandic: "아이슬란드어",
      Bosnian: "보스니아어",
      Persian: "페르시아어",
      Russian: "러시아어",
      "Chinese(Traditional)": "중국어(번체)",
      Finnish: "핀란드어",
      Kazakh: "카자흐어",
      Galician: "갈리시아어",
      Catalan: "카탈로니아어",
      "Chinese(Simplified)": "중국어(간체)",
      Kannada: "칸나다어",
      Croatian: "크로아티아어",
      Latvian: "라트비아어",
      Lithuanian: "리투아니아어",
      Romanian: "루마니아어",
      Marathi: "마라티어",
      Malay: "말레이어",
      Macedonian: "마케도니아어",
      Maori: "마오리어",
      Afrikaans: "아프리칸스어",
      Nepali: "네팔어",
      Norwegian: "노르웨이어",
      Swedish: "스웨덴어",
      Serbian: "세르비아어",
      Slovak: "슬로바키아어",
      Slovenian: "슬로베니아어",
      Swahili: "스와힐리어",
      Tagalog: "타갈로그어",
      Tamil: "타밀어",
      Thai: "태국어",
      Turkish: "터키어",
      Welsh: "웨일스어",
      Urdu: "우르두어",
      Ukrainian: "우크라이나어",
      Greek: "그리스어",
      Armenian: "아르메니아어",
      Hindi: "힌디어",
      Indonesian: "인도네시아어",
      Vietnamese: "베트남어",
      Albanian: "알바니아어",
      Amharic: "암하라어",
      Assamese: "아삼어",
      Occitan: "옥시탄어",
      Bashkir: "바시키르어",
      Basque: "바스크어",
      Breton: "브르통어",
      Tibetan: "티베트어",
      Faroese: "페로어",
      Sanskrit: "산스크리트어",
      Khmer: "크메르어",
      Georgian: "조지아어",
      Gujarati: "구자라트어",
      "Haitian Creole": "아이티 크리올어",
      Hausa: "하우사어",
      Latin: "라틴어",
      Lao: "라오어",
      Lingala: "링갈라어",
      Luxembourgish: "룩셈부르크어",
      Malagasy: "말라가시어",
      Maltese: "몰타어",
      Malayalam: "말라얄람어",
      Mongolian: "몽골어",
      Bengali: "벵골어",
      Burmese: "버마어",
      Punjabi: "펀자브어",
      Pashto: "파슈토어",
      Sinhala: "싱할라어",
      Shona: "쇼나어",
      Somali: "소말리어",
      Tajik: "타지크어",
      Tatar: "타타르어",
      Telugu: "텔루구어",
      Turkmen: "투르크멘어",
      Uzbek: "우즈베크어",
      Hawaiian: "하와이어",
      "Norwegian Nynorsk": "노르웨이 뉘노르스크어",
      Sindhi: "신디어",
      Sundanese: "순다어",
      Yiddish: "이디시어",
      Yoruba: "요루바어",
      Javanese: "자바어",
      Cantonese: "광둥어",
      Abkhaz: "압하즈어",
      Afar: "아파르어",
      alz: "알루르어",
      ach: "아촐리어",
      awa: "아와드어",
      Avaric: "아바르어",
      Ewe: "에웨어",
      Aymara: "아이마라어",
      Irish: "아일랜드어",
      Oriya: "오리야어",
      Oromo: "오로모어",
      Ossetian: "오세트어",
      tpi: "파푸아 피진어",
      bew: "베타위어",
      ban: "발리어",
      btx: "바타크 카로어",
      bbc: "바타크 토바어",
      bts: "바타크 시말룬군어",
      bci: "바울레어",
      Bambara: "밤바라어",
      pag: "판가시난어",
      pam: "팜팡가어",
      nso: "북부 소토어",
      bem: "벰바어",
      bik: "비콜어",
      bal: "발루치어",
      bho: "호즈푸리어",
      bua: "부랴트어",
      chm: "초원 마리어",
      Chamorro: "차모로어",
      Chechen: "체첸어",
      chk: "추크어",
      Chuvash: "추바시어",
      Tswana: "츠와나어",
      Tsonga: "총가어",
      "fa-AF": "다리어",
      shn: "샨어",
      tet: "테툼어",
      Divehi: "디베히어",
      dyu: "줄라어",
      tiv: "티브어",
      din: "딩카어",
      doi: "도그리어",
      "ndc-ZW": "은도어",
      "South Ndebele": "남부 은데벨레어",
      dov: "은둠바어",
      "bm-Nkoo": "은코 문자(서아프리카 문자)",
      "French(Canada)": "프랑스어(캐나다)",
      Fijian: "피지어",
      fon: "폰어",
      "Western Frisian": "서프리지아어",
      fur: "프리울리어",
      Fulah: "풀라어",
      Kongo: "콩고어",
      Kalaallisut: "그린란드어",
      gom: "콘칸어",
      Guarani: "과라니어",
      cnh: "하카 친어",
      hrx: "훈스뤼크어",
      Kyrgyz: "키르기스어",
      ktu: "키투바어",
      gaa: "가어",
      kac: "카친어",
      Kanuri: "카누리어",
      kha: "카시어",
      kek: "케크치어",
      Komi: "코미어",
      Xhosa: "코사어",
      Corsican: "코르시카어",
      "crh-Latn": "크림 타타르어(라틴 문자)",
      crh: "크림 타타르어(키릴 문자)",
      Quechua: "케추아어",
      Kurdish: "쿠르드어(쿠르만지어)",
      ckb: "쿠르드어(소라니어)",
      trp: "코크보로크어",
      ltg: "라트갈레어",
      lij: "리구리아어",
      Limburgish: "림뷔르흐어",
      Kirundi: "키룬디어",
      luo: "루오어",
      Luganda: "루간다어",
      Kinyarwanda: "르완다어",
      lmo: "롬바르드어",
      rom: "롬어",
      mad: "마두라어",
      Manx: "맨 섬어",
      mwr: "마르와리어",
      "ms-Arab": "말레이어(자위 문자)",
      Marshallese: "마셜어",
      mam: "맘어",
      mai: "마이틸리어",
      mfe: "모리셔스 크리올어",
      "mni-Mtei": "메이테이어(마니푸르어)",
      min: "미낭카바우어",
      lus: "미조어",
      hmn: "몽어",
      nhe: "나와틀어(동부 후아스테카)",
      "Southern Sotho": "남부 소토어",
      new: "네팔어(네와르어)",
      nus: "누에르어",
      pap: "파피아멘토어",
      "pa-Arab": "펀자브어(샤무키 문자)",
      "pt-PT": "포르투갈어(포르투갈)",
      Chichewa: "치체와어",
      cgg: "치가어",
      lua: "치루바어",
      Akan: "아칸어",
      zap: "사포테크어",
      "Northern Sami": "북부 사미어",
      Samoan: "사모아어",
      kri: "시에라리온 크리올어",
      crs: "세이셸 크리올어",
      Sango: "상고어",
      "sat-Latn": "산탈리어(라틴 문자)",
      sat: "산탈리어(올 치키 문자)",
      Esperanto: "에스페란토어",
      Swati: "스와티어",
      "Scottish Gaelic": "스코틀랜드 게일어",
      sus: "수수어",
      ceb: "세부아노어",
      ber: "타마지트어(티피나그 문자)",
      "ber-Latn": "타마지트어",
      Tahitian: "타히티어",
      Tonga: "통가어",
      Tigrinya: "티그리냐어",
      tcy: "툴루어",
      tum: "툼부카어",
      tyv: "투바어",
      war: "와라이어",
      mak: "마카사어",
      vec: "베네치아어",
      Uyghur: "위구르어",
      Venda: "벤다어",
      Wolof: "월로프어",
      udm: "우드무르트어",
      szl: "실레지아어",
      scn: "시칠리아어",
      hil: "힐리가이논어",
      jam: "자메이카 파투아어",
      sah: "야쿠트어",
      ace: "아체어",
      iba: "이반어",
      Igbo: "이그보어",
      ilo: "일로카노어",
      "iu-Latn": "이누이트어(라틴 문자)",
      Inuktitut: "이누이트어(음절)",
      yua: "유카테크 마야어",
      Dzongkha: "종카어",
      Zulu: "줄루어"
    }
  },
  // 로그인, 회원가입, 비밀번호 변경
  IdentityInfoManage: {
    or: "또는", // 또는
    LoginBtn: "이메일로 로그인",
    LoginGoogle: "Google로 로그인",
    SignupBtn: "이메일로 가입",
    SignupGoogle: "Google로 가입",
    SignupDes: "지금 가입하고 무료로 마법을 경험하세요.",
    SignupTitle: "정확하고 무제한 전사",
    signup: "회원가입", // 회원가입
    sign_up: "회원가입", // 회원가입
    loginByGoogle: "Google로 계속하기", // Google로 로그인
    emailAddress: "이메일 주소를 입력하세요", // 이메일을 입력하세요
    createAccount: "새 계정 만들기", // 계정 만들기
    accountExists: "이미 계정이 있으신가요? ", // 이미 계정이 있습니까? 로그인
    agreeTerm: {
      // 서비스 약관 및 개인정보 보호정책에 동의합니다
      agree: "계속 진행하면, 저희 {terms} 및 {policy}에 동의하게 됩니다.",
      terms: "약관",
      policy: "개인정보 보호정책"
    },
    setPassword: "비밀번호 설정", // 비밀번호 설정
    code: "인증 코드", // 인증 코드
    resend: "재전송", // 재전송
    enterPassword: "비밀번호: 최소 6자 이상.", // 비밀번호를 입력하세요
    passwordLeval: "비밀번호 수준", // 비밀번호 강도
    Weak: "약함", // 약함
    Medium: "중간", // 중간
    Strong: "강함", // 강함
    confirmPassword: "비밀번호 확인", // 비밀번호 확인
    invalidEmail: "유효하지 않은 이메일 주소", // 유효하지 않은 이메일 주소
    logInDirectly: "이 계정은 이미 존재합니다. 직접 로그인하세요.", // 계정이 이미 존재합니다. 바로 로그인하세요.
    codeErrorTryAgain: "인증 코드 오류. 다시 시도하세요.", // 인증 코드 오류. 다시 시도하세요.
    atLeastSix: "비밀번호는 최소 6자 이상이어야 합니다.", // 비밀번호는 최소 6자리 이상이어야 합니다.
    passwordNotMatch: "비밀번호가 일치하지 않습니다. 다시 시도하세요.", // 비밀번호가 일치하지 않습니다. 다시 시도하세요.
    login: "로그인", // 로그인
    log_in: "로그인", // 로그인
    log_In: "로그인", // 로그인
    password: "비밀번호", // 비밀번호
    forgotPassword: "비밀번호를 잊으셨나요?", // 비밀번호를 잊으셨나요?
    noAccount: "계정이 없으신가요?", // 계정이 없으신가요? 회원가입
    accountNotExists: "이 계정은 존재하지 않습니다.", // 계정이 존재하지 않습니다.
    passwordError: "비밀번호 오류", // 비밀번호 오류
    sendCode: "인증 코드 보내기", // 인증 코드 보내기
    resetPassword: "비밀번호 재설정", // 비밀번호 재설정
    resetYourPassword: "비밀번호 재설정", // 비밀번호 재설정
    newOldCantSame: "새 비밀번호는 이전 비밀번호와 달라야 합니다.", // 새 비밀번호는 이전 비밀번호와 동일할 수 없습니다.
    passwordResetOk: "비밀번호가 성공적으로 재설정되었습니다!", // 비밀번호가 성공적으로 재설정되었습니다!
    signupToSaveProgress: "가입을 완료하여 진행 상황 저장",
    tip: "팁",
    tipContentEmail:
      "고객님의 계정 로그인 비밀번호를 이메일로 발송해 드렸습니다.",
    tipContentPassword:
      "수신함을 확인하신 후 이메일과 비밀번호로 로그인해 주세요.",
    codeToEmail:
      "인증 코드를 이메일로 보냈습니다. 수신함을 확인하고 위에 인증 코드를 붙여넣어 주세요."
  },
  // 공유 세부 페이지
  Sharepage: {},
  // 초기화 페이지
  InitPage: {},
  // 계정 설정
  AccountSettingsPage: {
    subscription: "구독 플랜",
    freeversion: "무료",
    transcribeTimesDay: "일일 3회 변환",
    uploadMinutes: "30분 업로드",
    lowerPriority: "낮은 우선순위",
    currentPlan: "현재 플랜",
    professionalEdition: "프로페셔널 버전",
    unlimitedTranscription: "무제한 변환",
    unlimitedNumberOfTimes: "무제한 음성 텍스트 변환 횟수와 시간",
    filesUploadedAtOnce:
      "각 파일 최대 10시간/5GB. 한 번에 50개 파일 업로드 가능",
    highestPriority: "최고 우선순위",
    weWillGiveTheHighest: "항상 최우선 순위로 파일을 빠르게 변환해 드립니다.",
    theFirstMonth: "첫 달",
    subscribeTo: "구독하기",
    basicVersionFree: "기본 버전(무료)",
    return: "돌아가기",
    annualize: "연간",
    monthly: "월간",
    everyYear: "매년",
    saved: "저장됨",
    byTheMonth: "월별",
    firstMonth: "첫 달",
    afterwardsEveryMonth: "이후 매월",
    manageSubscription: "구독 관리",
    professionalYearbook: "프로페셔널 연간",
    professionalMonthly: "프로페셔널 월간",
    subscriptionWillCancelledOn: "구독이 아래 날짜에 취소될 예정입니다",
    displayLanguage: "표시 언어",
    update: "지금 업그레이드",
    basicversion: "기본 버전(무료)",
    daily: "일일 변환 {start}/{end} 사용",
    upgradetoPro: "Pro로 업그레이드",
    accountSetting: "계정 설정",
    logOut: "로그아웃",
    account: "계정",
    email: "이메일",
    id: "ID",
    password: "비밀번호",
    resetPassword: "비밀번호 재설정",
    logIn: "로그인",
    tryForFree: "무료로 사용해보기",
    notFund: "찾을 수 없음",
    couldntFind: "찾으시는 내용을 찾을 수 없습니다.",
    proAnnual: "프로 연간",
    proMonthly: "프로 월간",
    perMonth: "월",
    afterwards: "이후",
    accuracy: "변환 정확도",
    supported: "지원 언어",
    identification: "화자 식별",
    transcriptSranslation: "변환 번역",
    perYear: "연",
    getProPlan: "프로 플랜 구독",
    changeToAnnual: "연간으로 변경",
    automaticRenewalon: "자동 갱신일",
    eachMonth: "매월 {time}일에 자동 갱신.",
    automaticRenewal: "자동 갱신에 실패했습니다. 결제 방법을 확인해 주세요.",
    eachYear: "매년 {time} 자동 갱신.",
    returnAccountSetting: "돌아가기",
    needsToWaitLonger: "파일이 전사되기 전에 좀 더 기다려 주세요.",
    freeThreeTimesDay: "매일 3개의 파일을 무료로 전사할 수 있습니다.",
    oneFileUploaded:
      "각 파일은 최대 30분까지 가능합니다. 한 번에 1개의 파일을 업로드하세요.",
    uploadWithinHours: "10시간 업로드",
    yourSubscription: "구독은 {time}에 취소됩니다.",
    save: "절약",
      freeversion2: "무료 플랜"
},
  // 언어 맵핑 관계
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "중국어(간체)",
      "Chinese(Traditional)": "중국어(번체)",
      Japanese: "일본어",
      Danish: "덴마크어",
      German: "독일어",
      English: "영어",
      Spanish: "스페인어",
      French: "프랑스어",
      Italian: "이탈리아어",
      Hungarian: "헝가리어",
      Dutch: "네덜란드어",
      Norwegian: "노르웨이어",
      Polish: "폴란드어",
      Portuguese: "포르투갈어",
      Finnish: "핀란드어",
      Swedish: "스웨덴어",
      Turkish: "터키어",
      Greek: "그리스어",
      Russian: "러시아어",
      Ukrainian: "우크라이나어",
      Hebrew: "히브리어",
      Arabic: "아랍어",
      Korean: "한국어"
    }
  },
  demo: {
    title: "넉스트프로",
    description:
      "글로벌 결제 게이트웨이(스트라이프/크림), 구글 OAuth, i18n 라우팅 및 검색 엔진 최적화 도구가 사전 통합된 오픈 소스 넉스트3 서비스형 소프트웨어(SaaS) 템플릿입니다. 다국어 웹 앱을 출시하는 개발자를 위해 설계되었으며, 서버 사이드 렌더링/정적 사이트 생성 지원과 기본 제공되는 프로덕션급 보안을 제공합니다.",
    startLink: "무료 체험 시작~",
    thirdPartyLink: "깃허브 →",
    waitlist: {
      cardTitle:
        "대기자 명단에 가입하고 최신 넉스트프로 뉴스와 할인 혜택을 가장 먼저 받아보세요!",
      placeholder: "이메일 입력",
      button: "대기자 명단 가입",
      joinCountMessage:
        "🔥 초기 사용자 #{count}님이 방금 대기자 명단에 가입했습니다!"
    },
    seo: {
      title: "오픈소스 넉스트 서비스형 소프트웨어 보일러플레이트 | 넉스트프로",
      description:
        "고객에게 제품을 선보이는 데 필요한 모든 것이 포함된 넉스트JS 보일러플레이트입니다. 아이디어에서 프로덕션까지 5분 만에 가능합니다."
    },
    api: {
      title: "데모입니다",
      corpInfo: "회사 정보"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "비디오 다운로드 오류"
      },
      mse: {
        code: 2,
        msg: "스트림 추가 오류"
      },
      parse: {
        code: 3,
        msg: "구문 분석 오류"
      },
      format: {
        code: 4,
        msg: "잘못된 형식"
      },
      decoder: {
        code: 5,
        msg: "디코딩 오류"
      },
      runtime: {
        code: 6,
        msg: "문법 오류"
      },
      timeout: {
        code: 7,
        msg: "재생 시간 초과"
      },
      other: {
        code: 8,
        msg: "기타 오류"
      }
    },
    HAVE_NOTHING: "오디오/비디오 준비 여부에 대한 정보가 없습니다",
    HAVE_METADATA: "오디오/비디오 메타데이터가 준비되었습니다",
    HAVE_CURRENT_DATA:
      "현재 재생 위치에 대한 데이터는 사용 가능하지만, 다음 프레임/밀리초를 재생하기에 충분한 데이터가 없습니다",
    HAVE_FUTURE_DATA: "현재 및 최소 한 프레임의 데이터를 사용할 수 있습니다",
    HAVE_ENOUGH_DATA: "사용 가능한 데이터가 재생을 시작하기에 충분합니다",
    NETWORK_EMPTY: "오디오/비디오가 초기화되지 않았습니다",
    NETWORK_IDLE:
      "오디오/비디오가 활성화되어 리소스로 선택되었지만 네트워크가 사용되지 않습니다",
    NETWORK_LOADING: "브라우저가 데이터를 다운로드 중입니다",
    NETWORK_NO_SOURCE: "오디오/비디오 소스를 찾을 수 없습니다",
    MEDIA_ERR_ABORTED: "가져오기 프로세스가 사용자에 의해 중단되었습니다",
    MEDIA_ERR_NETWORK: "다운로드 중 오류가 발생했습니다",
    MEDIA_ERR_DECODE: "디코딩 중 오류가 발생했습니다",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "오디오/비디오가 지원되지 않습니다",
    REPLAY: "다시 재생",
    ERROR: "네트워크가 오프라인입니다",
    PLAY_TIPS: "재생",
    PAUSE_TIPS: "일시 중지",
    PLAYNEXT_TIPS: "다음 재생",
    DOWNLOAD_TIPS: "다운로드",
    ROTATE_TIPS: "회전",
    RELOAD_TIPS: "다시 로드",
    FULLSCREEN_TIPS: "전체 화면으로",
    EXITFULLSCREEN_TIPS: "전체 화면 종료",
    CSSFULLSCREEN_TIPS: "CSS 전체 화면",
    EXITCSSFULLSCREEN_TIPS: "CSS 전체 화면 종료",
    TEXTTRACK: "자막",
    PIP: "화면 속 화면",
    SCREENSHOT: "스크린샷",
    LIVE: "실시간",
    OFF: "끄기",
    OPEN: "열기",
    MINI_DRAG: "클릭하고 길게 눌러 드래그",
    MINISCREEN: "미니 화면",
    REFRESH_TIPS: "시도해 보세요",
    REFRESH: "새로고침",
    FORWARD: "앞으로",
    LIVE_TIP: "실시간",
    TM_SUBTITLE_SHOW_TIPS: "자막 켜기",
    TM_SUBTITLE_HIDE_TIPS: "자막 끄기",
    TM_MINIMIZE_TIPS: "비디오 숨기기"
  },
  privacyPolicy: {
    privacyPolicyTitle: "개인정보 보호정책",
    lastUpdated: "최종 업데이트: 2025년 8월 25일",
    policyDescription:
      '본 정책은 Scribify(이하 "Scribify", "당사", "우리")가 귀하가 당사 서비스, 웹사이트를 사용할 때 귀하의 개인 정보를 수집, 사용 및 공개하는 방식을 설명합니다.',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: '및 소프트웨어(총칭하여 "서비스")입니다.',
    policyAgreement:
      "본 개인정보 보호정책을 주의 깊게 읽고 이해하시기 바랍니다. 당사 서비스를 이용함으로써 귀하는 본 개인정보 보호정책에 동의하는 것으로 간주됩니다. 본 정책에 따른 당사 개인정보 사용에 동의하지 않으시면 당사 서비스 이용을 즉시 중단하셔야 합니다.",
    policyOverview:
      "본 정책에는 당사가 수집하는 데이터와 수집 이유, 데이터 처리 방식, 그리고 데이터와 관련된 귀하의 권리에 대한 내용이 명시되어 있습니다. 당사는 귀하의 데이터를 판매하지 않습니다.",
    scopeTitle: "1. 본 개인정보 보호정책의 범위",
    whatWeCollectTitle: "2. 수집 내용 및 수집 이유",
    accessShareTitle: "3. 당사가 귀하의 정보에 접근하거나 공유하는 경우",
    secureDataTitle: "4. 귀하의 데이터를 보호하는 방법",
    deleteContentTitle: "5. 콘텐츠를 삭제하면 어떻게 되나요?",
    locationTitle: "6. 사이트 및 데이터의 위치",
    childrenPrivacyTitle: "7. 아동의 개인정보 보호",
    updatesTitle: "8. 본 개인정보 보호정책의 업데이트",
    contactUsTitle: "9. 문의하기",
    identityAccessTitle: "2.1 신원 및 접근",
    billingInfoTitle: "2.2 청구 정보",
    productInteractionsTitle: "2.3 제품 상호 작용",
    websiteInteractionsTitle: "2.4 웹사이트 상호작용",
    cookiesTitle: "2.5 쿠키",
    voluntaryCorrespondenceTitle: "2.6 자발적 서신",
    scopeContent:
      "본 개인정보 보호정책은 당사 서비스 사용자에 대한 정보 수집 및 처리에만 적용됩니다. 본 개인정보 보호정책은 당사에 링크된 제3자가 운영하는 서비스, 웹사이트 또는 소프트웨어(당사가 해당 링크를 제공하든 다른 사용자가 공유하든)에는 적용되지 않으며, 제3자의 콘텐츠, 데이터, 애플리케이션 또는 자료에도 적용되지 않습니다. 제3자 웹사이트 또는 소프트웨어에 정보를 제공하기 전에 해당 웹사이트 또는 소프트웨어의 개인정보 보호정책을 확인하시기 바랍니다.",
    collectPrinciple:
      "저희의 기본 원칙은 필요한 것만 수집하는 것입니다. 실제로 이 원칙이 의미하는 바는 다음과 같습니다.",
    identityAccessContent:
      "당사 제품에 가입하실 때 이름, 이메일 주소와 같은 개인 정보를 요청드립니다. 이는 필수적인 제품 기능을 제공하고 제품 업데이트 및 기타 필수 정보를 제공해 드리기 위한 것입니다.",
    billingInfoContent:
      "유료 상품에 가입하시면 결제 정보와 청구지 주소를 입력해 주셔야 합니다. 결제 정보는 저희 결제 처리 업체에 직접 전송되며 저희 서버에는 저장되지 않습니다.",
    productInteractionsContent:
      "귀하가 제품 계정에 업로드, 수신 또는 관리하는 콘텐츠는 당사 서버에 저장됩니다. 귀하가 해당 콘텐츠를 삭제하지 않는 한, 귀하의 계정이 활성 상태인 동안 해당 콘텐츠를 보관할 수 있습니다.",
    websiteInteractionsContent:
      "당사는 전환율 테스트 및 신제품 디자인 실험 등 분석 및 통계 목적으로 귀하의 브라우징 활동 정보를 수집합니다. 여기에는 브라우저 및 운영 체제 버전, IP 주소, 방문한 웹 페이지 및 로드 시간, 그리고 귀하를 당사로 연결한 웹사이트 등이 포함됩니다. 계정이 있고 로그인되어 있는 경우, 이러한 웹 분석 데이터는 계정이 더 이상 활성화되지 않을 때까지 귀하의 IP 주소 및 사용자 계정에 연결됩니다.",
    cookiesContent1:
      "또한 당사는 특정 기본 설정을 저장하고, 귀하가 당사 애플리케이션을 더 쉽게 사용할 수 있도록 하며, A/B 테스트를 수행하고 일부 분석을 지원하기 위해 지속적인 자사 쿠키와 일부 타사 쿠키를 사용합니다.",
    cookiesContent2:
      "쿠키는 브라우저에 저장되는 텍스트 파일입니다. 로그인 정보와 사이트 환경설정을 기억하는 데 도움이 될 수 있습니다. 또한 브라우저 유형, 운영 체제, 방문한 웹 페이지, 방문 시간, 열람한 콘텐츠, 기타 클릭 스트림 데이터 등의 정보를 수집할 수도 있습니다. 브라우저 설정에서 쿠키 보관 설정을 조정하고 개별 쿠키를 허용 또는 차단할 수 있습니다. 단, 쿠키를 비활성화하면 앱이 작동하지 않고 서비스의 다른 기능도 제대로 작동하지 않을 수 있습니다.",
    voluntaryCorrespondenceContent:
      "여러분이 질문이나 도움을 요청하기 위해 이메일을 보내면, 우리는 여러분의 이메일 주소를 포함한 해당 서신을 보관합니다. 그러면 미래에 여러분이 연락할 때 참고할 수 있도록 과거의 서신 내역을 보관할 수 있습니다.",
    accessShareContent1:
      "귀하가 요청하신 제품 또는 서비스를 제공하기 위해. 당사는 애플리케이션 실행 및 서비스 제공을 위해 일부 제3자 하위 처리업체를 이용하고 있습니다. 여기에는 클라우드 및 분석 서비스 제공업체가 포함됩니다.",
    accessShareContent2:
      "남용 사례를 조사, 예방 또는 관련 조치를 취하기 위함입니다. 잠재적 남용 사례를 조사할 때 고객 계정에 접근하는 것은 최후의 수단입니다. 당사는 고객과 문제를 신고하는 사람 모두의 개인정보와 안전을 보호하기 위해 최선을 다하며, 이러한 책임의 균형을 유지하기 위해 노력합니다. 귀하가 당사 제품을 제한된 목적으로 사용하고 있다는 사실이 발견될 경우, 당사는 필요한 조치를 취할 것이며, 필요한 경우 관련 당국에 신고할 것입니다.",
    accessShareContent3: "해당 법률에 따라 요구되는 경우.",
    userDataRequests:
      "- 사용자 데이터 요청. 당사는 법적 절차에 따른 강제성이 있거나 긴급 요청과 같은 제한적인 상황을 제외하고는 정부의 사용자 데이터 요청에 응답하지 않는 것을 정책으로 삼고 있습니다. 단, 미국 법 집행 기관이 데이터 공유를 요구하는 영장, 형사 소환장 또는 법원 명령을 소지한 경우, 당사는 이를 준수해야 합니다. 마찬가지로, 미국 외 국가 정부 기관의 요청에도 미국 정부가 상호 사법 공조 조약 또는 협정에 명시된 절차를 통해 강제하는 경우에만 응답합니다. 당사는 법적으로 금지된 경우와 일부 긴급 상황을 제외하고, 데이터를 공유하기 전에 관련 사용자에게 알리는 것을 정책으로 삼고 있습니다.",
    preservationRequests:
      "- 보존 요청. 마찬가지로, 당사의 정책은 미국 연방 저장 통신법(18 USC Section 2703(f)) 또는 민사 소송을 위한 미국 소환장이 적법하게 송달된 경우에만 데이터 보존 요청을 준수하는 것입니다. 당사는 법률에 의해 요구되거나 당사가 항소하지 않기로 결정한 법원 명령에 의해 강제되는 경우를 제외하고는 보존된 데이터를 공유하지 않습니다. 또한, 필요한 보존 기간이 만료되기 전에 적절한 영장, 법원 명령 또는 소환장을 받지 않는 한, 보존 기간 만료 시 고객 데이터의 모든 보존 사본을 파기합니다.",
    taxAudit:
      "- 세무 당국의 감사를 받는 경우, 청구 관련 정보를 공유해야 할 수 있습니다. 이 경우, 청구지 주소 및 면세 정보 등 필요한 최소한의 정보만 공유합니다.",
    secureDataContent1: "모든 데이터는 암호화됩니다.",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "당사 서버에서 귀하의 브라우저로 전송되는 경우.",
    deleteContentContent: "콘텐츠를 삭제하면 즉시 액세스할 수 없게 됩니다.",
    locationContent:
      "당사의 제품 및 기타 웹 자산은 미국에서 운영됩니다. 유럽 연합, 영국 또는 미국 외 지역에 거주하시는 경우, 귀하가 당사에 제공하는 모든 정보는 미국으로 전송되어 저장됩니다. 당사 웹사이트 또는 서비스를 이용하거나 당사에 개인 정보를 제공함으로써 귀하는 이러한 전송에 동의하는 것으로 간주됩니다.",
    childrenPrivacyContent:
      "본 서비스는 아동을 대상으로 하지 않으며, 13세 미만 아동의 개인 정보를 고의로 수집하지 않습니다. 13세 미만인 경우, 본 서비스를 통해 개인 정보를 제출하지 마십시오. 아동이 본 정책을 위반하여 당사에 개인 정보를 제공했다고 생각되시면 아래 안내에 따라 당사에 연락해 주십시오.",
    updatesContent:
      "관련 규정을 준수하고 새로운 관행을 반영하기 위해 필요에 따라 본 정책을 업데이트할 수 있습니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 새로 고칩니다.",
    contactUsContent1:
      "개인정보 보호정책에 대해 질문, 의견 또는 불만 사항이 있는 경우",
    contactUs: "문의하기",
    contactUsContent2:
      "귀하의 불만 사항은 최대한 빨리 처리되도록 노력하겠습니다."
  },
  termsOfService: {
    termsOfServiceTitle: "서비스 약관",
    lastUpdated: "최종 업데이트: 2022년 9월 21일",
    thankYouMessage: "저희 제품을 이용해 주셔서 감사합니다!",
    companyReference:
      '본 문서에서 "회사", "우리", "저희"라는 표현은 Scribify를 지칭합니다.',
    servicesDefinition:
      '"서비스"란 Scribify가 제작하고 유지 관리하는 모든 제품을 의미하며, 웹 브라우저, 데스크톱 애플리케이션, 모바일 애플리케이션 또는 다른 형식으로 제공됩니다.',
    termsUpdateNotice:
      "본 서비스 약관은 향후 업데이트될 수 있습니다. 일반적으로 이러한 변경은 확장된 관련 정책 링크를 통해 약관의 일부를 명확히 하기 위한 것입니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 갱신하고 계정 소유자에게 알리기 위한 기타 적절한 조치를 취할 것입니다.",
    acceptanceOfAgreementTitle: "1. 계약 수락",
    scribifyServicesTitle: "2. Scribify의 서비스",
    accountTermsTitle: "3. 계정 약관",
    paymentRefundsTitle: "4. 지불, 환불 및 계획 변경",
    cancellationTerminationTitle: "5. 취소 및 종료",
    submissionsTitle: "6. 제출물",
    uptimeSecurityTitle: "7. 가동 시간 및 보안",
    siteManagementTitle: "8. 사이트 관리",
    copyrightContentTitle: "9. 저작권 및 콘텐츠 소유권",
    prohibitedActivitiesTitle: "10. 금지된 활동",
    featuresBugsTitle: "11. 기능 및 버그",
    correctionsTitle: "12. 정정",
    userDataTitle: "13. 사용자 데이터",
    privacyPolicyTitle: "14. 개인정보 보호정책",
    liabilityTitle: "15. 책임",
    miscellaneousTitle: "16. 기타",
    contactUsTitle: "17. 문의하기",
    acceptanceContent1:
      "당사 서비스를 이용함으로써 귀하는 본 계약에 동의하는 것으로 간주되며, 본 계약은 귀하와 Scribify 간의 구속력 있는 계약이 됩니다. 귀하는 본 약관에 동의할 법적 능력이 있음을 진술하며, 구속력 있는 계약을 체결할 수 있는 법적 연령임을 확인합니다. Scribify의 동의는 귀하가 본 계약의 모든 조건에 동의하는 것을 명시적으로 조건으로 합니다.",
    acceptanceContent2:
      "본 서비스는 18세 미만의 사용자를 대상으로 하지 않으며, 18세 미만의 사용자는 본 서비스를 이용할 수 없습니다. 본 서비스를 이용함으로써 귀하는 앞서 언급한 자격 요건을 충족함을 진술하고 보증합니다.",
    acceptanceContent3:
      '"귀하", "귀하의", "귀하 자신"이라는 용어에는 귀하의 직원, 대리인, 사업 담당자 및 귀하의 계정을 통해 서비스에 대한 접근 권한을 제공하는 기타 모든 개인(아래 정의 참조)도 포함됩니다. 귀하는 귀하의 계정을 통해 서비스에 접근하는 모든 사람이 본 약관을 인지하고 준수하도록 할 책임이 있습니다.',
    acceptanceContent4:
      "Scribify는 단독 재량으로 본 약관을 수시로 개정하고 업데이트할 권리를 보유합니다. 모든 변경 사항은 게시되는 즉시 적용됩니다. 개정된 약관 게시 후에도 서비스를 계속 사용하는 것은 귀하가 변경 사항에 동의하고 수락하는 것으로 간주됩니다. 변경 사항은 귀하에게 구속력을 가지므로, 변경 사항을 파악하기 위해 이 페이지를 수시로 확인하시기 바랍니다.",
    servicesContent1:
      "당사 서비스를 이용하면 사용자는 음성 대화를 검색, 번역하고 다른 사람과 공유할 수 있는 텍스트로 변환할 수 있습니다.",
    servicesContent2:
      '귀하는 서비스의 무료 버전(이하 "무료 서비스")을 이용할지, 또는 수수료를 지불해야 하는 구독 기반 유료 버전 서비스(이하 "유료 서비스")를 이용할지 선택할 수 있습니다.',
    servicesContent3:
      "당사는 귀하에게 서비스를 제공합니다. 귀하는 서비스 이용에 필요한 모든 준비를 하실 책임이 있습니다.",
    accountTerms1:
      "- 귀하는 계정 보안 유지에 대한 책임이 있습니다. 회사는 귀하가 이 보안 의무를 준수하지 않아 발생하는 어떠한 손실이나 손해에 대해서도 책임을 지지 않습니다.",
    accountTerms2:
      "- 귀하는 불법적, 비윤리적 또는 부도덕한 목적으로 서비스를 이용할 수 없습니다.",
    accountTerms3:
      "- 귀하는 귀하의 계정에서 게시되는 모든 콘텐츠와 발생하는 모든 활동에 대해 책임을 집니다. 여기에는 (a) 귀하의 로그인 정보에 접근할 수 있는 사람, 또는 (b) 귀하의 계정에 자체 로그인 정보를 보유한 사람이 게시한 콘텐츠가 포함됩니다.",
    accountTerms4:
      '- 반드시 인간이어야 합니다. "봇"이나 기타 자동화된 방법으로 등록된 계정은 허용되지 않습니다.',
    paymentContent1:
      "- 무료 체험을 제공하는 유료 서비스의 경우, 가입 시 체험 기간을 안내해 드립니다. 체험 기간 이후에는 서비스를 계속 이용하려면 선불로 결제해야 합니다. 결제하지 않으면 서비스가 종료됩니다.",
    paymentContent2:
      "- 무료 플랜에서 유료 플랜으로 업그레이드하는 경우, 귀하의 카드에 즉시 요금이 청구되며, 청구 주기는 업그레이드 날짜부터 시작됩니다.",
    paymentContent3:
      "- 모든 수수료에는 세무 당국에서 부과하는 모든 세금, 부과금 또는 관세가 포함되어 있지 않습니다. 필요한 경우, 당사는 세무 당국을 대신하여 해당 세금을 징수하고 세무 당국에 납부합니다. 그렇지 않은 경우, 귀하는 모든 세금, 부과금 또는 관세를 납부할 책임이 있습니다.",
    paymentContent4:
      "- 모든 구매는 환불되지 않습니다. 유료 서비스는 계정에 로그인하여 언제든지 취소할 수 있습니다. 유료 구독의 경우, 별도로 명시되지 않는 한 현재 유료 기간이 종료되는 시점에 취소가 적용됩니다.",
    cancellationContent1:
      "- 결제된 기간 만료 전에 서비스를 취소하시면 즉시 취소가 적용되며 요금이 청구되지 않습니다. 마지막 청구 주기의 미사용 시간은 자동으로 일할 계산되지 않습니다.",
    cancellationContent2:
      "- 당사는 언제든지 어떤 이유로든 귀하의 계정을 정지 또는 해지하고 현재 또는 미래의 모든 서비스 이용을 거부할 권리가 있습니다. 정지는 귀하가 계정 또는 계정의 콘텐츠에 접근할 수 없음을 의미합니다. 해지 시 귀하의 계정 또는 계정 접근 권한이 삭제되고, 귀하의 계정에 있는 모든 콘텐츠가 몰수 및 양도됩니다. 당사는 또한 언제든지 어떤 이유로든 누구에게든 서비스 이용을 거부할 권리를 보유합니다. 이 조항을 마련한 이유는 통계적으로 볼 때, 당사 서비스의 수십만 개 계정 중 적어도 하나는 불법적인 행위를 하고 있기 때문입니다.",
    cancellationContent3:
      "- 회사 직원이나 임원에 대한 언어적, 신체적, 서면적 또는 기타 학대(학대나 보복 위협 포함)가 발생할 경우 계정이 즉시 종료될 수 있습니다.",
    submissionsContent:
      '귀하는 귀하가 당사에 제공한 본 사이트와 관련된 모든 질문, 의견, 제안, 아이디어, 피드백 또는 기타 정보("제출물")가 기밀이 아니며 당사의 단독 재산이 됨을 인정하고 동의합니다. 당사는 모든 지적 재산권을 포함한 독점적 권리를 소유하며, 귀하에 대한 인정이나 보상 없이 상업적 또는 기타 모든 합법적인 목적을 위해 이러한 제출물을 제한 없이 사용 및 배포할 권리가 있습니다. 귀하는 이로써 해당 제출물에 대한 모든 저작인격권을 포기하며, 해당 제출물이 귀하의 독창적인 제출물이거나 귀하가 해당 제출물을 제출할 권리가 있음을 보증합니다. 귀하는 귀하의 제출물에 대한 소유권 침해 또는 도용 혐의 또는 실제 침해에 대해 당사를 상대로 어떠한 구제 수단도 없다는 데 동의합니다.',
    uptimeContent1:
      '- 서비스 이용에 따른 모든 책임은 사용자에게 있습니다. 당사는 본 서비스를 "있는 그대로", "이용 가능한 그대로" 제공합니다. 당사는 대부분의 서비스에 대해 서비스 수준 계약을 제공하지 않지만, 애플리케이션 가동 시간을 중요하게 생각합니다.',
    uptimeContent2:
      "- 귀하의 사용량이 다른 고객의 일반적인 사용량을 크게 초과하는 경우, 당사는 귀하의 계정을 일시적으로 비활성화할 권리가 있습니다. 물론, 다른 고객의 서비스 성능에 부정적인 영향을 미칠 수 있는 드문 경우를 제외하고는 어떠한 조치도 취하기 전에 귀하에게 연락을 드릴 것입니다.",
    uptimeContent3:
      "- 당사는 백업, 중복성 및 암호화를 통해 귀하의 데이터를 보호하고 보안을 유지하기 위해 다양한 조치를 취하고 있습니다. 공용 인터넷을 통한 데이터 전송에는 암호화를 적용합니다.",
    uptimeContent4:
      "- 당사는 서비스를 운영하는 데 필요한 하드웨어, 소프트웨어, 네트워킹, 스토리지 및 관련 기술을 제공하기 위해 제3자 공급업체 및 호스팅 파트너를 활용합니다.",
    siteManagementContent:
      "당사는 다음의 권리를 보유하지만 의무는 없습니다. (1) 본 서비스 약관 위반 여부를 확인하기 위해 사이트를 모니터링합니다. (2) 당사의 단독 재량에 따라 법률 또는 본 서비스 약관을 위반하는 사람에 대해 적절한 법적 조치를 취합니다. 여기에는 해당 사용자를 법 집행 기관에 신고하는 것이 포함되지만 이에 국한되지 않습니다. (3) 당사의 단독 재량에 따라 제한 없이 귀하의 기여물 또는 그 일부를 거부하거나, 접근을 제한하거나, 이용 가능성을 제한하거나, 비활성화합니다(기술적으로 가능한 범위 내에서). (4) 당사의 단독 재량에 따라 제한 없이 통지 또는 책임을 지고 크기가 너무 크거나 당사 시스템에 부담을 주는 모든 파일 및 콘텐츠를 사이트에서 제거하거나 비활성화합니다. (5) 당사의 권리와 재산을 보호하고 사이트의 적절한 기능을 촉진하도록 설계된 방식으로 사이트를 관리합니다.",
    copyrightContent1:
      "- 서비스에 게시된 모든 콘텐츠는 미국 저작권법을 준수해야 합니다.",
    copyrightContent2:
      "- 당사는 귀하가 서비스에 제공하는 자료에 대해 어떠한 지적 재산권도 주장하지 않습니다. 업로드된 모든 자료는 귀하의 소유입니다.",
    copyrightContent3:
      "- 당사는 콘텐츠를 사전 검열하지 않지만, 서비스를 통해 제공되는 모든 콘텐츠를 거부하거나 삭제할 단독 재량권(단, 의무는 아님)을 보유합니다.",
    copyrightContent4:
      "- 서비스의 이름, 디자인 및 분위기는 회사의 저작권입니다. 모든 권리는 회사에 있습니다. 회사의 명시적인 서면 허가 없이 HTML, CSS, JavaScript 또는 시각적 디자인 요소의 어떠한 부분도 복제, 복사 또는 재사용할 수 없습니다. 홍보 목적으로 회사 로고 또는 서비스 로고를 사용하려면 허가를 받아야 합니다.",
    emailUs: "이메일로 문의하세요",
    copyrightContent5:
      "로고 사용 요청. 귀하가 본 서비스 약관을 위반하는 경우, 당사는 해당 허가를 철회할 권리를 보유합니다.",
    copyrightContent6:
      "- 귀하는 회사의 명시적인 서면 허가 없이 서비스의 일부 또는 전부를 재생산, 복제, 복사, 판매, 재판매 또는 이용하거나, 서비스의 이용 또는 서비스에 대한 접근을 하지 않을 것에 동의합니다.",
    copyrightContent7:
      "- 다른 웹사이트를 수정하여 그것이 서비스나 회사와 연관되어 있다는 잘못된 인상을 주어서는 안 됩니다.",
    copyrightContent8:
      "- 당사는 타인의 지적 재산권을 존중합니다. 본 사이트에서 또는 본 사이트를 통해 제공되는 자료가 귀하가 소유하거나 관리하는 저작권을 침해한다고 생각되시면 즉시",
    contactUs: "문의하기",
    copyrightContent9:
      "귀하의 통지 사본은 통지에 명시된 자료를 게시하거나 저장한 사람에게 발송됩니다. 통지에 중대한 허위 진술을 할 경우, 관련 법률에 따라 손해 배상 책임을 질 수 있습니다. 따라서 본 사이트에 게시되었거나 본 사이트에서 링크된 자료가 귀하의 저작권을 침해하는지 확실하지 않은 경우, 먼저 변호사와 상담하는 것이 좋습니다.",
    prohibitedActivitiesIntro:
      "귀하는 당사가 사이트를 제공하는 목적 이외의 다른 목적으로 본 사이트에 접속하거나 사용할 수 없습니다. 본 사이트는 당사가 명시적으로 지지 또는 승인한 경우를 제외하고 어떠한 상업적 활동과도 연계하여 사용될 수 없습니다.",
    prohibitedActivitiesUserAgreement:
      "사이트 사용자로서 귀하는 다음 사항에 동의하지 않습니다.",
    prohibitedActivity1:
      "- 당사의 서면 허가 없이 사이트에서 데이터나 기타 콘텐츠를 체계적으로 검색하여 직접 또는 간접적으로 컬렉션, 편집물, 데이터베이스 또는 디렉토리를 생성하거나 편집합니다.",
    prohibitedActivity2:
      "- 사용자 비밀번호와 같은 민감한 계정 정보를 알아내려는 시도를 포함하여, 저희와 다른 사용자를 속이거나 사기를 치거나 오도하는 행위.",
    prohibitedActivity3:
      "- 사이트의 보안 관련 기능을 우회, 비활성화 또는 방해하는 행위(콘텐츠 사용 또는 복사를 방지 또는 제한하거나 사이트 및/또는 사이트에 포함된 콘텐츠의 사용에 대한 제한을 시행하는 기능 포함)",
    prohibitedActivity4:
      "- 당사의 판단에 따라 당사 및/또는 사이트를 비방, 훼손하거나 기타 방식으로 해를 끼칩니다.",
    prohibitedActivity5:
      "- 사이트에서 얻은 정보를 이용해 다른 사람을 괴롭히거나, 학대하거나, 해를 끼치는 행위.",
    prohibitedActivity6:
      "- 당사의 지원 서비스를 부적절하게 이용하거나, 학대 또는 부정 행위에 대한 허위 신고를 제출합니다.",
    prohibitedActivity7:
      "- 해당 법률이나 규정에 맞지 않게 사이트를 사용하는 경우",
    prohibitedActivity8: "- 사이트의 허가 없는 프레이밍이나 링크에 관여합니다.",
    prohibitedActivity9:
      "- 대문자를 과도하게 사용하거나 스팸(반복되는 텍스트를 계속 게시하는 것)을 포함하여 바이러스, 트로이 목마 또는 기타 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하여 당사자가 사이트를 지속적으로 사용하고 즐기는 것을 방해하거나 사이트의 사용, 기능, 기능, 운영 또는 유지 관리를 수정, 손상, 방해, 변경 또는 방해하는 행위를 하는 행위입니다.",
    prohibitedActivity10:
      "- 스크립트를 사용하여 댓글이나 메시지를 보내거나, 데이터 마이닝, 로봇 또는 이와 유사한 데이터 수집 및 추출 도구를 사용하는 등 시스템의 자동화된 사용에 참여합니다.",
    prohibitedActivity11:
      "- 모든 콘텐츠에서 저작권이나 기타 소유권 고지를 삭제합니다.",
    prohibitedActivity12:
      "- 다른 사용자나 사람을 사칭하거나 다른 사용자의 사용자 이름을 사용하려고 시도합니다.",
    prohibitedActivity13:
      '- GIF(Clear Graphics Interchange Format), 1×1 픽셀, 웹 버그, 쿠키 또는 이와 유사한 장치(때때로 "스파이웨어" 또는 "수동 수집 메커니즘" 또는 "PCM"이라고 함)를 포함하되 이에 국한되지 않는 수동적 또는 능동적 정보 수집 또는 전송 메커니즘 역할을 하는 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하는 행위.',
    prohibitedActivity14:
      "- 사이트 또는 사이트에 연결된 네트워크나 서비스를 방해하거나 교란하거나 부당한 부담을 주는 행위.",
    prohibitedActivity15:
      "- 사이트의 어떠한 부분이라도 귀하에게 제공하는 당사 직원이나 대리인을 괴롭히거나, 괴롭히거나, 위협하거나, 협박하는 행위.",
    prohibitedActivity16:
      "- 사이트 또는 사이트의 일부에 대한 접근을 방해하거나 제한하도록 설계된 사이트의 모든 조치를 우회하려는 시도.",
    prohibitedActivity17:
      "- Flash, PHP, HTML, JavaScript 또는 기타 코드를 포함하되 이에 국한되지 않는 사이트 소프트웨어를 복사하거나 수정합니다.",
    prohibitedActivity18:
      "- 해당 법률에서 허용하는 경우를 제외하고, 사이트를 구성하거나 어떤 식으로든 사이트의 일부를 구성하는 소프트웨어의 모든 내용을 해독, 디컴파일, 분해 또는 역엔지니어링합니다.",
    prohibitedActivity19:
      "- 표준 검색 엔진이나 인터넷 브라우저 사용으로 인해 발생할 수 있는 결과를 제외하고, 스파이더, 로봇, 치트 유틸리티, 스크래퍼 또는 오프라인 리더를 포함하되 이에 국한되지 않고 사이트에 접속하는 모든 자동화 시스템을 사용, 실행, 개발 또는 배포하거나 허가되지 않은 스크립트나 기타 소프트웨어를 사용하거나 실행합니다.",
    prohibitedActivity20:
      "- 사이트에서 구매를 하기 위해 구매 대행인이나 구매대행인을 이용하세요.",
    prohibitedActivity21:
      "- 전자적 또는 기타 수단을 통해 사용자의 사용자 이름 및/또는 이메일 주소를 수집하여 원치 않는 이메일을 발송하거나 자동화된 수단이나 허위 명목으로 사용자 계정을 생성하는 등 사이트의 무단 사용을 금지합니다.",
    prohibitedActivity22:
      "- 본 사이트를 당사와 경쟁하기 위한 노력의 일환으로 사용하거나 수익을 창출하는 사업이나 상업적 기업을 위해 본 사이트 및/또는 콘텐츠를 사용합니다.",
    prohibitedActivity23:
      "- 본 사이트를 이용하여 상품 및 서비스를 광고하거나 판매를 제안합니다.",
    prohibitedActivity24: "- 프로필을 판매하거나 다른 방식으로 양도합니다.",
    featuresContent1:
      "저희는 저희만의 경험과 시간과 피드백을 공유해 주시는 고객 여러분의 경험을 바탕으로 신중하게 서비스를 설계합니다. 하지만 모든 사람을 만족시키는 서비스란 없습니다. 저희는 저희 서비스가 고객님의 특정 요구 사항이나 기대를 충족할 것이라고 보장하지 않습니다.",
    featuresContent2:
      "모든 기능을 출시 전에 테스트합니다. 다른 소프트웨어와 마찬가지로 저희 서비스에도 버그가 있을 수 있습니다. 저희는 보고된 버그를 추적하고 해결하며, 특히 보안이나 개인정보 보호와 관련된 버그는 더욱 그렇습니다. 보고된 모든 버그가 수정되는 것은 아니며, 완벽한 오류 없는 서비스를 보장하지 않습니다.",
    correctionsContent1:
      "본 사이트에는 설명, 가격, 재고 현황 및 기타 다양한 정보를 포함하여 오타, 부정확한 정보 또는 누락된 정보가 있을 수 있습니다. 당사는 사전 고지 없이 언제든지 오류, 부정확한 정보 또는 누락된 정보를 수정하고 본 사이트의 정보를 변경 또는 업데이트할 권리를 보유합니다.",
    correctionsContent2:
      "당사는 사이트가 항상 이용 가능하다는 것을 보장할 수 없습니다. 하드웨어, 소프트웨어 또는 기타 문제가 발생하거나 사이트 관련 유지 관리가 필요할 수 있으며, 이로 인해 중단, 지연 또는 오류가 발생할 수 있습니다. 당사는 귀하에게 통지하지 않고 언제든지 어떤 이유로든 사이트를 변경, 수정, 업데이트, 일시 중단, 중단 또는 기타 방식으로 수정할 권리를 보유합니다. 귀하는 사이트 가동 중단 또는 중단으로 인해 사이트에 접속하거나 사용할 수 없음으로 인해 발생하는 모든 손실, 피해 또는 불편에 대해 당사가 어떠한 책임도 지지 않는다는 데 동의합니다. 본 서비스 약관의 어떠한 내용도 당사가 사이트를 유지 관리 및 지원하거나 이와 관련된 수정, 업데이트 또는 배포를 제공할 의무를 지는 것으로 해석되지 않습니다.",
    userDataContent:
      "당사는 사이트 성능 관리 목적으로 귀하가 사이트로 전송하는 특정 데이터와 귀하의 사이트 이용과 관련된 데이터를 보관합니다. 당사는 정기적인 데이터 백업을 수행하지만, 귀하가 전송하는 모든 데이터 또는 사이트를 이용하여 수행한 모든 활동과 관련된 모든 데이터에 대한 책임은 전적으로 귀하에게 있습니다. 귀하는 당사가 해당 데이터의 손실 또는 손상에 대해 귀하에게 어떠한 책임도 지지 않는다는 데 동의하며, 이로써 해당 데이터의 손실 또는 손상으로 인해 발생하는 당사에 대한 모든 소송 권리를 포기합니다.",
    privacyPolicyContent1:
      "저희는 데이터 개인정보 보호 및 보안을 중요하게 생각합니다.",
    privacyPolicy: "개인정보 보호정책",
    privacyPolicyContent2:
      "본 사이트를 이용함으로써 귀하는 본 서비스 약관에 포함된 당사의 개인정보 보호정책을 준수하는 데 동의합니다. 본 사이트는 미국에서 호스팅됩니다. 미국의 관련 법률과 다른 개인 정보 수집, 사용 또는 공개에 관한 법률 또는 기타 요건이 적용되는 다른 지역에서 본 사이트에 접속하는 경우, 본 사이트를 계속 이용함으로써 귀하의 데이터는 미국으로 전송되며, 귀하는 귀하의 데이터가 미국으로 전송되고 미국에서 처리되는 데 동의합니다.",
    liabilityIntro:
      "본 약관 전반에 걸쳐 책임에 대해 언급하고 있지만, 모든 내용을 한 섹션에 정리하면 다음과 같습니다.",
    liabilityContent:
      "귀하는 회사가 다음으로 인해 발생하는 직접적, 간접적, 우발적, 이익 손실, 특별, 결과적, 징벌적 또는 모범적 손해(이익 손실, 영업권 손실, 사용 손실, 데이터 손실 또는 기타 무형 손실에 대한 손해 포함하되 이에 국한되지 않음)에 대해 법률상 또는 형평성상 귀하 또는 제3자에게 책임을 지지 않는다는 사실을 명확히 이해하고 동의합니다. (1) 서비스의 사용 또는 사용 불능; (2) 콘텐츠 및 자료의 오류, 실수 또는 부정확성; (3) 사이트에 대한 귀하의 접속 및 사용으로 인해 발생하는 모든 성격의 신체 상해 또는 재산 피해; (4) 서비스를 통해 구매 또는 취득한 상품, 데이터, 정보 또는 서비스 또는 수신된 메시지 또는 체결된 거래로 인해 발생하는 대체 상품 및 서비스의 조달 비용; (5) 당사의 보안 서버에 대한 무단 접속 또는 사용 및/또는 해당 서버에 저장된 모든 개인 정보 및/또는 재무 정보; (6) 사이트로의 또는 사이트로부터의 전송의 중단 또는 중지; (7) 제3자가 사이트를 통해 또는 사이트로 전송할 수 있는 버그, 바이러스, 트로이 목마 또는 이와 유사한 것, 및/또는; (8) 콘텐츠 및 자료의 오류 또는 누락, 또는 사이트를 통해 게시, 전송 또는 기타 방식으로 제공된 콘텐츠의 사용으로 인해 발생한 모든 종류의 손실 또는 손상; (9) 서비스에서 제3자의 진술 또는 행위; (10) 계약 위반, 불법 행위(능동적이든 수동적이든 과실 포함) 또는 기타 책임 이론으로서 이 서비스 약관 또는 서비스와 관련된 기타 사항.",
    miscellaneousContent:
      "본 서비스 약관 및 사이트에 게시하거나 사이트와 관련하여 게시한 모든 정책 또는 운영 규칙은 귀하와 당사 간의 전체 계약 및 이해를 구성합니다. 당사가 본 서비스 약관의 권리 또는 조항을 행사하거나 집행하지 않더라도 해당 권리 또는 조항을 포기한 것으로 간주되지 않습니다. 본 서비스 약관은 법률에서 허용하는 최대 범위에서 적용됩니다. 당사는 언제든지 당사의 권리 및 의무의 일부 또는 전부를 타인에게 양도할 수 있습니다. 당사는 당사의 합리적인 통제 범위를 벗어난 원인으로 인해 발생한 손실, 손해, 지연 또는 불이행에 대해 책임을 지지 않습니다. 본 서비스 약관의 조항 또는 조항의 일부가 불법, 무효 또는 집행 불가능하다고 판단되는 경우, 해당 조항 또는 조항의 일부는 본 서비스 약관에서 분리 가능한 것으로 간주되며 나머지 조항의 유효성 및 집행 가능성에 영향을 미치지 않습니다. 본 서비스 약관 또는 사이트 사용의 결과로 귀하와 당사 간에 합작 투자, 파트너십, 고용 또는 대리 관계가 생성되지 않습니다. 귀하는 본 서비스 약관을 작성했다는 이유로 본 서비스 약관이 당사에 불리하게 해석되지 않는다는 데 동의합니다. 귀하는 본 서비스 약관의 전자적 형태와 본 서비스 약관을 체결하기 위한 당사자들의 서명 부족을 근거로 귀하가 가질 수 있는 모든 방어수단을 포기합니다.",
    contactUsContent1: "서비스 약관에 대해 궁금한 사항이 있으면",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "기능",
    UnlimitedTranscription: "무제한 텍스트 변환",
    BulkUpload: "대량 업로드",
    Accuracy: "96% 정확도",
    Pricing: "가격",
    UseCases: "사용 사례",
    AllUseCases: "모든 사용 사례",
    Podcasters: "팟캐스터",
    Journalists: "저널리스트",
    ContentCreators: "콘텐츠 크리에이터",
    Researchers: "연구자",
    BusinessTeams: "비즈니스 팀",
    Educators: "교육자",
    Resources: "리소스",
    YouTubetoMP4: "YouTube에서 MP4로",
    StartFreeTrial: "무료로 사용해보기"
  },
  Footer: {
    des: "세계 최초의 진정한 무제한 AI 텍스트 변환 서비스. 제한 없이 자유롭게 창조하세요.",
    Features: "기능",
    UseCases: "사용 사례",
    Company: "회사",
    featureMenus: ["무제한 텍스트 변환", "대량 업로드", "96% 정확도"],
    useCaseMenus: [
          "모든 사용 사례",
          "팟캐스터",
          "저널리스트",
          "콘텐츠 크리에이터",
          "연구자",
          "비즈니스 팀",
          "교육자"
        ],
    companyMenus: [
          "소개",
          "가격",
          "개인정보처리방침",
          "이용약관"
        ]
  },
  Index: {
    Hero: {
      badge: '더 이상 "슈링크플레이션" 없음 - 진정한 무제한',
      h1: "제한에 대한 비용 지불 중단:",
      gradient: "진정한 무제한 AI 음성 인식",
      subtitle: "당사의 AI는 동영상을 텍스트로 변환하고 오디오를 텍스트로 변환하며, 월간 제한 없이 한 번에 50개의 파일을 처리합니다. 진정으로 확장 가능한 음성 인식 서비스입니다.",
      FreeTrial: "무료로 체험하기 - 신용카드 불필요",
      HowWorks: "작동 방식 보기",
      Unlimited: "무제한 파일 업로드",
      NoCap: "월간 시간 제한 없음",
      Hour: "10시간 길이 파일 지원",
      ExploreUseCases: "사용 사례 탐색"
    },
    Stats: {
      monthlyMinutes: "월간 시간",
      fileUploads: "파일 업로드",
      batchProcessing: "일괄 처리",
      maxFileLength: "최대 파일 길이"
    },
    FeaturesGrid: {
      try_now: "지금 시도하기",
      no_signup: "가입 불필요",
      experience_unltd: "진정한 무제한 음성 인식 경험",
      upload_50: "여기서 한 번에 최대 50개의 파일 업로드.",
      no_limits: "고급",
      no_surprises: "AI 음성 인식",
      transparency: "더 이상 숨겨진 제한과 놀라움 없음 - 다른 곳에서는 몰래 시간을 줄이거나 세밀한 글씨로 제한을 숨기지만, 우리는 철저한 투명성을 믿습니다.",
      feat_unltd: "진정한 무제한",
      feat_unltd_desc: '약관에 숨겨진 "공정 사용 정책" 없음. "무제한"으로 위장한 저장 공간 제한 없음. 전체 아카이브를 업로드하고 모든 오디오 인식 요구 사항을 충족하세요. 진심입니다.',
      feat_bulk: "대량 업로드 자유",
      feat_bulk_desc: '"평생 3회 업로드"나 "월 10개 파일"에 지치셨나요? 필요할 때마다 한 번에 50개의 파일을 업로드하세요. 미처리 작업 처리에 완벽합니다.',
      feat_batch: "일괄 처리",
      feat_batch_desc: "팟캐스트 시즌 전체를 하룻밤에 처리하세요. 한 번에 50개의 인터뷰를 업로드하세요. 당신이 자는 동안 AI가 작업합니다. 완성된 텍스트로 깨어나세요.",
      feat_accuracy: "96% 정확도",
      feat_accuracy_desc: "업계 최고 수준의 AI가 스마트 구두점, 최대 20명의 화자 식별, 악센트 및 전문 용어를 완벽하게 처리합니다.",
      feat_langs: "100개 이상의 언어",
      feat_langs_desc: "100개 이상의 언어로 동영상 및 오디오를 텍스트로 변환하고 249개 이상의 언어로 번역합니다. 다른 언어에 대한 추가 비용 없음. 글로벌 콘텐츠, 단순한 가격.",
      feat_pro: "전문가용 기능",
      feat_pro_desc: "정확한 오디오/동영상 위치 지정을 위한 단어 수준 타임스탬프, 빠른 대화 전환 중에도 정확한 화자 식별, 문단, 문장 및 구두점으로 완벽하게 형식화된 텍스트로 쉽게 읽을 수 있습니다.",
        features: "기능"
    },
    UseCases: {
      built_for: "대량",
      "heavy_users": "오디오 & 동영상 텍스트 변환",
      "join_users": '당신 같은 고급 사용자를 위해 제작됨 - "슈링크플레이션" 서비스에서 전환한 YouTuber, 콘텐츠 제작자 및 팟캐스터와 함께하세요',
      "podcasters": {
        "title": "팟캐스터",
        "des": "전체 백 카탈로그를 업로드하세요. 모든 에피소드에 대한 쇼 노트를 생성하세요. 더 이상 어떤 에피소드를 텍스트로 변환할지 선택할 필요 없습니다."
      },
      "content_creators": {
        "title": "콘텐츠 제작자",
        "des": "당사의 서비스를 사용하여 동영상 라이브러리를 검색 가능한 텍스트로 자동 변환하세요. 모든 것에 자막을 생성하세요. 시간을 계산하지 않고 창작에만 집중하세요."
      },
      "journalists": {
        "title": "언론인",
        "des": '모든 인터뷰를 한 번에 업로드하세요. 마감 시간에 "월 10개 파일"이라는 장애물 없이 모든 것을 처리하세요.'
      },
      researchers: {
        title: "연구자",
        des: "수 시간의 포커스 그룹 및 인터뷰를 텍스트로 변환하세요. 전체 연구를 한 번에 업로드하세요. 정확한 화자 식별을 얻으세요."
      },
      business_teams: {
        title: "비즈니스 팀",
        des: "제한 걱정 없이 모든 통화를 녹음하세요. 선택된 몇 개가 아닌 모든 대화에 대한 AI 인사이트를 얻으세요."
      },
      educators: {
        title: "교육자",
        des: "전체 강의 시리즈를 텍스트로 변환하세요. 모든 콘텐츠를 접근 가능하게 만드세요. 시간 제한 때문에 강의를 선택할 필요 없습니다."
      }
    },
    Testimonials: {
      title: "사랑받는",
      highlighted_users: "50,000명 이상의 사용자",
      subtitle: "전문가들이 제한적인 대안 대신 NeverCap을 선택하는 이유 확인하기",
      Mike: {
        "text": "와, 이거 진짜 작동하네요! 3년 동안 팟캐스트를 하면서 바보처럼 모든 걸 수동으로 필사했어요. 한 번에 6개 에피소드를 업로드했는데 공동 진행자와 제 목소리를 완벽하게 구분했어요. 카페 에피소드는 망했다고 생각했는데? 텍스트가 정말 선명해요. 이제 절대 직접 타이핑 안 할 거예요.",
        "author": "Mike Rodriguez",
        "role": "팟캐스트 호스트"
      },
      Sarah: {
        "text": "온라인 강의를 하는데 자막이 필요했어요. 다른 도구 3가지를 써봤는데 이상한 제한이 있거나 시간이 너무 오래 걸렸어요. 이건 그냥... 작동하네요? 스페인어 강의를 업로드했더니 2분 만에 완벽한 자막이 나왔어요. 청각 장애가 있는 학생들이 너무 기뻐해요. 이걸 더 빨리 발견했으면 좋았을 텐데!",
        "author": "Sarah Chen",
        "role": "온라인 강사"
      },
      Jessica: {
        "text": "인터뷰에 이걸 사용하고 있는데 정확도가 미쳤어요. 부족한 영어와 스페인어로 2시간 동안 인터뷰를 했는데 모든 게 정확했어요, 타임스탬프까지요. 인턴에게 월 200달러를 주고 필사하게 했는데 이제 매달 돈을 절약하고 있어요.",
        "author": "Jessica Park",
        "role": "프리랜서 기자"
      }
    },
    PricingPreview: {
      "title": "투명한 가격 정책",
      "highlighted_text": "숨겨진 제한 없음",
      "subtitle": "원하는 플랜을 선택하세요. 별표, 작은 글씨, 깜짝 요금 없음"
    },
    FAQSection: {
      "title": "자주 묻는",
      "titleHighlight": "질문",
      "questions": [
            {
              "q": "AI 필사",
              "question": "AI 필사란 무엇이며 어떻게 작동하나요?",
              "answer": "AI 필사는 고급 인공 지능을 사용하여 오디오를 자동으로 텍스트로 변환하는 과정입니다. NeverCap에서는 파일을 업로드하기만 하면 AI가 최대 96%의 정확도로 내용을 필사합니다. 우리 서비스는 비디오 파일(MP4, MOV 등)과 오디오 파일(MP3, WAV 등)을 읽고 편집 가능한 텍스트로 변환하도록 설계되었으며, 화자 레이블과 타임스탬프가 포함됩니다."
            },
            {
              "q": "unlimited_policy",
              "question": "정말 무제한인가요? 어떤 조건이 있나요?",
              "answer": "네, 진정한 무제한입니다! 월간 제한 없음, 초과 요금 없음. 유일한 제한은 기술적인 것입니다: 개별 파일은 최대 10시간 길이 또는 5GB 크기이며 한 번에 50개의 파일을 처리할 수 있습니다. 하지만 원하는 만큼 여러 번 업로드할 수 있습니다."
            },
            {
              "q": "accuracy",
              "question": "필사의 정확도는 어떻게 되나요?",
              "answer": "우리는 명확한 오디오에 대해 96%의 정확도를 보장합니다. 우리의 AI는 수백만 시간의 다양한 콘텐츠로 훈련되었으며 악센트, 전문 용어, 여러 화자를 매우 잘 처리합니다. 어려운 오디오의 경우 스마트 향상 기능이 결과를 개선하는 데 도움이 됩니다."
            },
            {
              "q": "languages",
              "question": "어떤 언어를 지원하나요?",
              "answer": "우리는 영어, 스페인어, 중국어, 힌디어, 아랍어, 프랑스어 등 100개 이상의 언어 필사를 지원합니다. 또한 필사본을 249개의 다른 언어로 번역할 수 있어 글로벌 콘텐츠에 완벽합니다."
            },
            {
              "q": "speed",
              "question": "필사 속도는 얼마나 빠른가요?",
              "answer": "번개처럼 빠릅니다! 1시간 오디오 파일은 일반적으로 5분 이내에 처리됩니다. 일괄 처리를 사용하면 50개의 파일을 동시에 업로드하고 병렬로 처리할 수 있습니다. 대부분의 사용자는 하룻밤 사이에 전체 라이브러리가 필사된 것을 발견합니다."
            },
            {
              "q": "cancellation",
              "question": "언제든지 취소할 수 있나요?",
              "answer": "물론입니다! 계약 없음, 취소 수수료 없음. 대시보드에서 언제든지 구독을 업그레이드, 다운그레이드 또는 취소할 수 있습니다. 취소하면 결제 기간이 끝날 때까지 액세스 권한이 유지됩니다."
            },
            {
              "q": "security",
              "question": "내 데이터는 안전한가요?",
              "answer": "여러분의 보안이 우리의 최우선 순위입니다. 우리는 SOC 2 인증을 받았으며 모든 데이터에 256비트 암호화를 사용하고 여러분의 콘텐츠로 모델을 훈련하지 않습니다. 언제든지 파일을 삭제할 수 있으며 30일 후에 자동으로 삭제됩니다. GDPR 및 CCPA 준수."
            },
            {
              "q": "export_formats",
              "question": "어떤 내보내기 형식을 사용할 수 있나요?",
              "answer": "필요한 형식으로 필사본을 다운로드하세요: PDF, Word (DOCX), Excel, CSV, SRT 자막, 일반 텍스트 (TXT), VTT 캡션. 어떤 워크플로에도 완벽합니다."
            },
            {
              "q": "file_formats",
              "question": "어떤 오디오 및 비디오 파일을 업로드할 수 있나요?",
              "answer": "우리는 MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV 등 거의 모든 오디오 및 비디오 형식을 지원합니다. 재생할 수 있는 파일이라면 필사할 수 있습니다."
            }
          ]
    },
    CTASection: {
      "title": "제한에서 벗어날 준비가 되셨나요?",
      "subtitle": "진정한 무제한 필사로 전환한 50,000명 이상의 전문가와 함께하세요",
      "button": "NeverCap 무료로 사용해보기",
      "disclaimer": "무료 플랜에는 신용 카드 불필요 • 언제든지 무제한 액세스를 위해 업그레이드 가능"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: '더 이상 "축소 인플레이션" 없음',
      heroTitleLine1: "진정한 무제한",
      heroTitleLine2: "AI 전사",
      heroSubtitle: "Trint는 50시간, Otter는 월 10개 파일로 제한하지만, 우리는 숨은 제한 없이 진정한 무제한 전사를 제공합니다.",
      primaryCta: "무료로 사용해보기 - 신용카드 불필요",
      secondaryCta: "진실을 확인하세요",
      comparisonBadLabel: "다른 서비스들은",
      comparisonBadTitle: "어디에나 숨은 제한",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"무제한" = 월 50시간 제한',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "평생 3회 무료, 월 10회(Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Fireflies:",
      comparisonBadItem3Text: "800분 저장 제한",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descript:",
      comparisonBadItem4Text: "최대 월 30시간",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "이용약관에 숨겨짐",
      comparisonGoodLabel: "우리의 차이",
      comparisonGoodTitle: "진정한 무제한",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "월간 분량 제한 없음",
      comparisonGoodItem1Text: "영원히",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "무제한 파일 업로드",
      comparisonGoodItem2Text: "항상",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "저장 공간 제한 없음",
      comparisonGoodItem3Text: "전혀",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50개 파일 일괄 업로드",
      comparisonGoodItem4Text: "언제든지",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "투명한 정책",
      comparisonGoodItem5Text: "공개적으로",
      feature1Label: "제한 없음",
      feature1TitlePart1: "1,000시간 전사?",
      feature1TitlePart2: "동일한 가격.",
      feature1Description: "분을 세지 마세요. 제한을 신경 쓰지 마세요. 월 10시간이든 10,000시간이든 동일한 요금입니다. 초과 요금 없음. 깜짝 청구 없음.",
      feature1Point1Icon: "✓",
      feature1Point1Text: '"공정 사용" 정책 속임수 없음',
      feature1Point2Icon: "✓",
      feature1Point2Text: "X시간 후 제한 없음",
      feature1Point3Icon: "✓",
      feature1Point3Text: "월말 불안 없음",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "월간 시간",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "초과 요금",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "언제든지 업로드",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "투명한",
      feature2Label: "대량 자유",
      feature2TitlePart1: "업로드하세요",
      feature2TitlePart2: "전체 아카이브",
      feature2Description: "Otter는 무료 평생 3회, Pro는 월 10회 임포트를 제공합니다. 우리는 무제한을 제공합니다. 팟캐스트 백로그, 모든 인터뷰, 수년간의 녹음을 업로드하세요. 제한 없습니다.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "일괄 50개 파일",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10시간 파일 지원",
      feature2Point3Icon: "✓",
      feature2Point3Text: "자는 동안 처리",
      feature2TableRow1Label: "Otter 무료",
      feature2TableRow1Value: "평생 3회 임포트",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "월 10개 파일",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "월 50시간 제한",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "진정한 무제한 ✓",
      feature3Label: "소셜 증명",
      feature3TitlePart1: "사용자들은",
      feature3TitlePart2: "매일 전환 중",
      feature3Description: '"나는 Otter에 연간 $100를 지불하지만 월 10개 파일 임포트로 제한됩니다. 무제한 임포트 대안이 나오는 순간, 나는 갑니다!" - 실제 Reddit 사용자',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000명 이상 전환",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Otter의 "축소 인플레이션"에서',
      feature3Point3Icon: "✓",
      feature3Point3Text: "다시는 돌아가지 않음",
      feature3Stat1Number: "50K+",
      feature3Stat1Label: "행복한 사용자",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "처리된 파일",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "정확도",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "숨겨진 요금 없음",
      trustBadge1Number: "∞",
      trustBadge1Label: "분/월",
      trustBadge2Number: "100+",
      trustBadge2Label: "언어",
      trustBadge3Number: "96%",
      trustBadge3Label: "정확도",
      trustBadge4Number: "50",
      trustBadge4Label: "일괄 업로드",
      ctaTitle: "가짜 무제한에 돈 내지 마세요",
      ctaSubtitle: "진정한 무제한 자막 생성을 선택한 수천 명과 함께하세요",
      finalCta: "NeverCap 무료 체험"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "대량 업로드 자유",
      heroTitleLine1: "50개 파일 업로드.",
      heroTitleHighlight: "모든 것을 처리하세요.",
      heroSubtitle: "Otter는 평생 3번의 가져오기를 제공합니다. 세 번. 평생 동안. 우리는 필요할 때마다 무제한 업로드, 한 번에 50개 파일을 제공합니다.",
      primaryCta: "대량 업로드 시작 →",
      secondaryCta: "제한 사항 보기",
      redditQuote: '"3년 분의 팟캐스트 에피소드를 자막으로 변환해야 하는데, Otter는 평생 3번의 가져오기만 준다고 합니다. 세 번. 이건 모욕이에요."',
      redditAuthorIcon: "📍",
      redditAuthorText: "r/podcasting의 진짜 불만",
      comparisonSectionTitlePart1: "그들이",
      comparisonSectionTitleHighlight: "부과하는",
      comparisonSectionTitlePart2: "터무니없는 제한",
      comparisonSubtitle: "경쟁사가 콘텐츠 처리 능력을 제한하는 방법",
      limitCard1Service: "Otter 무료",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "평생 가져오기",
      limitCard1DescriptionLine2: "(네, 평생 동안입니다)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "월별 파일",
      limitCard2DescriptionLine2: "($100/년 플랜)",
      limitCard3Service: "Descript",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "한 번에 하나의 파일",
      limitCard3DescriptionLine2: "(순차적 업로드)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "무제한 업로드",
      limitCard4DescriptionLine2: "일괄 처리 50개 파일",
      feature1Label: "배치 파워",
      feature1TitlePart1: "전체 아카이브를",
      feature1TitleHighlight: "처리하세요",
      feature1TitlePart2: "하룻밤 사이에",
      feature1Description: '잠자기 전 50개 파일을 업로드하세요. 완성된 자막으로 깨어나세요. 대기열 없음, 기다림 없음, "업그레이드하세요" 메시지 없음. 순수한 처리 능력을 손끝에서 느껴보세요.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50개 동시 업로드",
      feature1Point2Icon: "✓",
      feature1Point2Text: "병렬 처리",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10시간 파일 지원",
      feature1Point4Icon: "✓",
      feature1Point4Text: "파일당 최대 5GB",
      uploadAnimationText1: "50개 파일",
      uploadAnimationText2: "드롭 & 처리",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 파일 46개 더...",
      feature2Label: "속도",
      feature2TitlePart1: "업로드부터",
      feature2TitleHighlight: "단 몇 시간 만에 완료",
      feature2Description: "당사의 병렬 처리 인프라로 50개의 파일이 순서를 기다리지 않습니다. 모든 파일이 동시에 텍스트로 변환됩니다. 몇 주 걸리던 작업이 이제는 몇 시간이면 됩니다.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1시간 분량 파일: 5분",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50개 파일: 동시 처리",
      feature2Point3Icon: "✓",
      feature2Point3Text: "완료 시 이메일 알림",
      timelineStep1Icon: "1",
      timelineStep1Title: "업로드",
      timelineStep1Time: "0분",
      timelineStep2Icon: "2",
      timelineStep2Title: "처리 중",
      timelineStep2Time: "5-30분",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI 마법",
      timelineStep3Time: "30-60분",
      timelineStep4Icon: "✓",
      timelineStep4Title: "완료",
      timelineStep4Time: "< 2시간",
      feature3Label: "자유",
      feature3TitlePart1: "대기열 없음.",
      feature3TitleHighlight: "기다림 없음.",
      feature3TitlePart2: "제한 없음.",
      feature3Description: '다른 곳에서는 가상 대기열이나 "우선 처리"를 위해 업그레이드하라고 하지만, 우리는 모든 업로드를 긴급하게 처리합니다. 당신의 콘텐츠는 중요하며, 기다릴 필요가 없습니다.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "우선 순위 등급 없음",
      feature3Point2Icon: "✓",
      feature3Point2Text: "모두에게 동일한 속도",
      feature3Point3Icon: "✓",
      feature3Point3Text: "언제든지 업로드, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "항상 준비 완료",
      feature3VisualSubtext: "영감이 떠오를 때마다 업로드",
      useCasesTitlePart1: "완벽한 선택",
      useCasesTitleHighlight: "대용량 업로더",
      useCasesSubtitle: "대량 업로드로 해결되는 실제 시나리오",
      useCase1Title: "팟캐스트 아카이브",
      useCase1Description: "3년 분량 에피소드를 한 번에 업로드. 전체 백 카탈로그에 대한 텍스트 생성. 모든 에피소드에 대한 SEO 콘텐츠 생성.",
      useCase2Title: "강의 제작",
      useCase2Description: "모든 강의 동영상을 동시에 처리. 학생들을 위한 접근성 있는 텍스트 생성. 검색 가능한 강의 자료 구축.",
      useCase3Title: "인터뷰 백로그",
      useCase3Description: "텍스트로 변환되지 않은 인터뷰 더미를 정리하세요. 몇 주 분량 연구를 몇 시간 만에 처리. 당황하지 않고 마감을 맞추세요.",
      useCase4Title: "YouTube 라이브러리",
      useCase4Description: "전체 채널에 대한 자막 생성. 동영상 콘텐츠로 블로그 게시물 작성. 모든 동영상의 SEO 개선.",
      useCase5Title: "회의 아카이브",
      useCase5Description: "수개월 분량의 회의 녹음을 업로드하세요. 검색 가능한 회의 노트를 생성하세요. 중요한 결정을 다시는 놓치지 마세요.",
      useCase6Title: "연구 데이터",
      useCase6Description: "포커스 그룹을 일괄 처리하세요. 모든 참가자 인터뷰를 자동으로 필사하세요. 질적 데이터를 효율적으로 분석하세요.",
      ctaTitle: "더 많은 업로드를 요청하지 마세요",
      ctaSubtitle: "실제로 작동하는 무제한 일괄 처리 기능을 얻으세요",
      finalCta: "지금 50개 파일 업로드 →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "업계 최고의 정확도",
      heroTitleLine1: "96% 정확도.",
      heroTitleHighlight: "모든 단어가 중요합니다.",
      heroSubtitle: "12개 주요 언어에서 업계 최고의 정확도. 완벽한 동기화를 위한 단어 단위 타임스탬프. 빠른 대화도 처리하는 스마트 발화자 식별. 실제로 읽기 쉬운 전문적인 포맷팅.",
      primaryCta: "정확도 테스트하기 →",
      secondaryCta: "지원 언어 보기",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "정확도",
      statCard1DescriptionLine2: "12개 주요 언어",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "정확도",
      statCard2DescriptionLine2: "악센트 및 방언 포함",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "단어 단위",
      statCard3DescriptionLine2: "타임스탬프 정밀도",
      languageSectionTitlePart1: "96% 정확도",
      languageSubtitle: "글로벌 콘텐츠를 위한 전문가급 필사",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "영어",
      languageCard1Accuracy: "96% 정확도",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "스페인어",
      languageCard2Accuracy: "96% 정확도",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "중국어(만다린)",
      languageCard3Accuracy: "96% 정확도",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "프랑스어",
      languageCard4Accuracy: "96% 정확도",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "독일어",
      languageCard5Accuracy: "96% 정확도",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "일본어",
      languageCard6Accuracy: "96% 정확도",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "한국어",
      languageCard7Accuracy: "96% 정확도",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "포르투갈어",
      languageCard8Accuracy: "96% 정확도",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "러시아어",
      languageCard9Accuracy: "96% 정확도",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "이탈리아어",
      languageCard10Accuracy: "96% 정확도",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "네덜란드어",
      languageCard11Accuracy: "96% 정확도",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "아랍어",
      languageCard12Accuracy: "96% 정확도",
      moreLanguagesText: "+ 95% 이상 정확도의 88개 이상 언어 지원",
      feature1Label: "정밀도",
      feature1TitlePart1: "단어 단위",
      feature1TitleHighlight: "타임스탬프",
      feature1Description: "모든 단어가 오디오 위치와 완벽하게 동기화됩니다. 클릭 가능한 대본 생성, 정밀한 자막 제작 또는 녹음에서 정확한 지점으로 이동할 수 있습니다. 전문가들이 신뢰하는 100ms 정밀도.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms 타임스탬프 정밀도",
      feature1Point2Icon: "✓",
      feature1Point2Text: "영상 편집에 완벽",
      feature1Point3Icon: "✓",
      feature1Point3Text: "클릭 가능한 대화형 대본",
      feature1Point4Icon: "✓",
      feature1Point4Text: "프레임 정확 자막",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "화자 1",
      transcriptLine1Text: "오늘의 팟캐스트 에피소드에 오신 것을 환영합니다.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "화자 2",
      transcriptLine2Text: "초대해 주셔서 감사합니다!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "화자 1",
      transcriptLine3Text: "본론으로 들어가 보죠...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "화자 2",
      transcriptLine4Text: "물론이죠, 이 주제에 대해 얘기하게 되어 기쁩니다.",
      feature2Label: "스마트 AI",
      feature2TitlePart1: "처리",
      feature2TitleHighlight: "빠른 대화",
      feature2Description: "중첩된 발화, 방해, 빠른 주고받기 대화 중에도 화자를 정확히 식별합니다. 화자가 자주 끼어드는 인터뷰, 팟캐스트, 회의에 완벽합니다.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "최대 20명 화자 식별",
      feature2Point2Icon: "✓",
      feature2Point2Text: "방해 상황 완벽 처리",
      feature2Point3Icon: "중첩 발화 작업 가능",
      feature2Point3Text: "중첩 음성 지원",
      feature2Point4Icon: "✓",
      feature2Point4Text: "혼선 속에서도 정확도 유지",
      feature2VisualNumber: "20",
      feature2VisualTitle: "식별된 화자",
      feature2VisualSubtext: "빠른 대화 속에서도",
      feature3Label: "가독성",
      feature3TitlePart1: "완벽하게",
      feature3TitleHighlight: "형식화된 텍스트",
      feature3Description: "더 이상 텍스트 벽이 아닙니다. 저희 AI는 문단, 문장, 구두점을 정확히 필요한 위치에 자동으로 추가합니다. 결과는? 읽기 편하고 쉽게 훑어볼 수 있는 기록물입니다.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "스마트 문단 구분",
      feature3Point2Icon: "✓",
      feature3Point2Text: "정확한 구두점",
      feature3Point3Icon: "✓",
      feature3Point3Text: "적절한 대문자 사용",
      feature3Point4Icon: "✓",
      feature3Point4Text: "깔끔하고 훑어보기 쉬운 결과물",
      formattingTitle: "Before & After",
      formattingBeforeLabel: "❌ 다른 서비스:",
      formattingBeforeText: "so today were going to talk about the new features weve been working on i think youll really like them theyve been requested by users for a long time and we finally got them done",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "So today, we're going to talk about the new features we've been working on. I think you'll really like them. They've been requested by users for a long time, and we finally got them done.",
      comparisonSubtitle: "정확도",
      comparisonSectionTitle: "비교",
      comparisonDes: "경쟁사 대비 성능 확인",
      tableHeader1: "기능",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descript",
      tableHeader5: "Rev",
      tableRow1Feature: "정확도(명확한 오디오)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "단어 수준 타임스탬프",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "화자 식별",
      tableRow3NeverCap: "20명",
      tableRow3Otter: "16명",
      tableRow3Descript: "10명",
      tableRow3Rev: "✕",
      tableRow4Feature: "교차 대화 처리",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "제한적",
      tableRow4Descript: "제한적",
      tableRow4Rev: "✕",
      tableRow5Feature: "스마트 형식화",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "기본",
      tableRow6Feature: "12개 언어 96% 정확도",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "96% 정확도 체험하기",
      ctaSubtitle: "가장 어려운 오디오를 업로드하고 차이를 확인하세요",
      finalCta: "정확도 테스트하기 →",
        languageSectionTitlePart2: "12개 주요 언어"
    }
  },
  Pricing: {
    Hero: {
      "title": "간단하고 투명한 가격 정책",
      "highlighted_text": "숨겨진 제한 없음",
      "description": "필요에 맞는 요금제 선택. 언제든 업그레이드 또는 다운그레이드 가능. 계약 없음, 예상치 못한 비용 없음."
    },
    Cards: {
      "title": "간단하고 투명한 가격 정책.",
      "highlighted_text": "숨겨진 제한 없음.",
      "description": "필요에 맞는 요금제 선택. 언제든 업그레이드 또는 다운그레이드 가능. 계약 없음, 예상치 못한 비용 없음.",
      "plans": [
            {
              "name": "무료",
              "price": "$0",
              "period": "월",
              "discount": "서비스 체험에 적합",
              "limits": {
                "title": "일일 제한",
                "items": [
                  "하루 3개 파일 (총 약 90분/일)",
                  "파일당 최대 30분 (≤250 MB)",
                  "한 번에 1개 파일 업로드",
                  "표준 우선순위 큐"
                ]
              },
              "features": {
                "title": "기능",
                "items": [
                  "100개 이상 언어 지원",
                  "화자 레이블",
                  "번역",
                  "모든 내보내기 형식"
                ]
              },
              "cta": {
                "text": "무료 시작. 신용카드 불필요.",
                "button": "현재 플랜"
              }
            },
            {
              "name": "프로 월간",
              "price": "$17.99",
              "period": "월",
              "discount": "첫 달 $9.99",
              "limits": {
                "title": "월간 제한 없음",
                "items": [
                  "무제한 총 사용 시간",
                  "파일당 최대 10시간 / 5 GB",
                  "한 번에 50개 파일 업로드",
                  "우선순위 큐"
                ]
              },
              "features": {
                "title": "무료 플랜 포함, 추가로",
                "items": [
                  "단어 단위 타임스탬프",
                  "고급 화자 식별",
                  "서식 있는 문단 & 문장 부호",
                  "우선 지원"
                ]
              },
              "cta": {
                "text": "무제한 시간. 우선 속도. 일괄 업로드.",
                "button": "프로로 전환"
              },
              "badge": "가장 인기"
            },
            {
              "name": "프로 연간",
              "price": "$8.99",
              "period": "월",
              "discount": "연간 결제 $107.88",
              "limits": {
                "title": "월간 프로와 동일",
                "items": [
                  "무제한 총 사용 시간",
                  "파일당 최대 10시간 / 5 GB",
                  "한 번에 50개 파일 업로드",
                  "우선순위 큐"
                ]
              },
              "features": {
                "title": "무료 플랜 포함, 추가로",
                "items": [
                  "단어 단위 타임스탬프",
                  "고급 화자 식별",
                  "서식 있는 문단 & 문장 부호",
                  "우선 지원"
                ]
              },
              "cta": {
                "text": "무제한 시간. 우선 속도. 일괄 업로드.",
                "button": "프로로 전환"
              },
              "badge": "최고의 가치 - "
            }
          ],
      "disclaimer": '\"무제한\"은 월간 제한 없고 인위적인 속도 저하 없음을 의미합니다. 남용 자동화 또는 재배포 시 공정 사용 정책이 적용됩니다.'
    },
    ComparisonTable: {
      "header": {
        "title": "비교",
        "highlighted_text": "모든 기능",
        "subtitle": "각 플랜에서 정확히 무엇을 얻는지 확인하세요. 숨겨진 제한 없음."
      },
      "plans": [
              "기능",
              "무료",
              "Pro 월간",
              "Pro 연간"
            ],
      "features": [
            {
              "name": "가격",
              "values": [
                "$0/월",
                {
                  "main": "$17.99/월",
                  "note": "첫 달 $9.99"
                },
                {
                  "main": "$8.99/월",
                  "note": "연간 $107.88 결제"
                }
              ]
            },
            {
              "name": "월간 분량",
              "values": ["~2,700분 (90분/일)", "무제한", "무제한"]
            },
            {
              "name": "최대 파일 지속 시간",
              "values": ["30분", "10시간", "10시간"]
            },
            {
              "name": "최대 파일 크기",
              "values": ["250MB", "5GB", "5GB"]
            },
            {
              "name": "일괄 업로드",
              "values": ["1개 파일", "50개 파일", "50개 파일"]
            },
            {
              "name": "처리 속도",
              "values": ["표준", "우선 순위", "우선 순위"]
            },
            {
              "name": "지원 언어",
              "values": ["100+ 언어", "100+ 언어", "100+ 언어"]
            },
            {
              "name": "번역",
              "values": ["true", "true", "true"]
            },
            {
              "name": "화자 식별",
              "values": ["기본", "고급 (20명 화자)", "고급 (20명 화자)"]
            },
            {
              "name": "단어 수준 타임스탬프",
              "values": ["false", "true", "true"]
            },
            {
              "name": "서식 있는 문단",
              "values": ["false", "true", "true"]
            },
            {
              "name": "내보내기 형식",
              "values": ["모든 형식", "모든 형식", "모든 형식"]
            },
            {
              "name": "지원",
              "values": ["이메일", "우선 순위 이메일", "우선 순위 이메일"]
            },
            {
              "name": "데이터 보존",
              "values": ["30일", "영구", "영구"]
            }
          ]
    },
    FAQ: {
      "title": "자주 묻는",
      "titleHighligt": "질문",
      "items": [
            {
              "q": "unlimited_policy",
              "question": "정말 무제한인가요?",
              "answer": "네! Pro 플랜은 월별 사용 시간 제한이 없습니다. 유일한 제한은 기술적인 사항입니다: 최대 10시간 파일 길이와 5GB 파일 크기입니다. 필요한 만큼 파일을 처리할 수 있습니다."
            },
            {
              "q": "plan_change",
              "question": "언제든지 플랜을 변경할 수 있나요?",
              "answer": "물론입니다! 대시보드에서 언제든지 구독을 취소할 수 있습니다. 필요할 때마다 업그레이드 또는 다운그레이드하세요."
            },
            {
              "q": "payment_methods",
              "question": "어떤 결제 방법을 지원하나요?",
              "answer": "모든 주요 신용카드, 체크카드 및 PayPal을 통해 안전하고 편리한 결제가 가능합니다."
            },
            {
              "q": "free_trial",
              "question": "Pro 무료 체험 기회가 있나요?",
              "answer": "네! 신용카드 없이 7일 동안 Pro를 무료로 사용해 보세요. 구독 시 첫 달 45% 할인도 제공됩니다."
            },
            {
              "q": "file_retention",
              "question": "파일을 얼마나 보관하나요?",
              "answer": "무료 플랜: 30일. Pro 플랜: 영구! 계정에서 항상 기록을 확인할 수 있습니다."
            },
            {
              "q": "data_security",
              "question": "데이터 보안은 어떻게 되나요?",
              "answer": "우리는 SOC 2 인증을 받았으며 256비트 암호화를 사용합니다. 당신의 콘텐츠로 모델을 훈련시키지 않습니다. 당신의 데이터는 당신의 것입니다."
            }
          ]
    },
    CTA: {
      "title": "무제한으로 이용할 준비가 되셨나요?",
      "subtitle": "50,000명 이상의 전문가와 함께 제한 없이 필사하세요",
      "button": "NeverCap 무료 체험 →",
      "disclaimer": "신용카드 불필요 • 몇 초 만에 필사 시작"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "제작 목적",
      heavyUsers: "고용량 사용자",
      whoActuallyNeed: "진정한 무제한이 필요한 분들을 위해",
      heroSubtitle: "수년 분량의 백로그를 가진 팟캐스터부터 수백 건의 인터뷰를 진행하는 연구자까지. 전문가들이 NeverCap을 사용하여 업로드 제한과 분량 제한을 극복하는 방법을 확인하세요.",
      podcasters: {
        title: "팟캐스터",
        pain: '"대본이 필요한 에피소드를 고르는 것을 그만두세요"',
        description: "팟캐스트 아카이브를 한 번에 업로드하세요. 쇼 노트 생성, SEO 개선, 시간 제한 없이 콘텐츠 재활용이 가능합니다.",
        benefits: {
          benefit1: "3개가 아닌 모든 에피소드 업로드",
          benefit2: "SEO 친화적인 쇼 노트 생성",
          benefit3: "검색 가능한 아카이브 생성",
          benefit4: "블로그 콘텐츠로 재활용"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "에피소드"
          },
          stat2: {
            number: "200시간",
            label: "절약"
          },
          stat3: {
            number: "3배",
            label: "SEO 트래픽"
          }
        }
      },
      journalists: {
        title: "기자 및 작가",
        pain: '"마감 압박과 업로드 제한의 만남"',
        description: "마감 전 모든 인터뷰를 일괄 업로드하세요. 대본을 즉시 검색해 중요한 인용구를 놓치지 마세요.",
        benefits: {
          benefit1: "마감 전 일괄 업로드",
          benefit2: "모든 인터뷰 한 번에 검색",
          benefit3: "타임스탬프가 있는 정확한 인용구",
          benefit4: "악센트 및 언어 처리"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "인터뷰/월"
          },
          stat2: {
            number: "96%",
            label: "정확도"
          },
          stat3: {
            number: "5분",
            label: "시간당"
          }
        }
      },
      contentCreators: {
        title: "콘텐츠 크리에이터",
        pain: '"접근성은 비싸지 않아야 합니다"',
        description: "YouTube 채널 전체에 자막을 추가하세요. 다국어 자막 생성과 즉각적인 비디오 SEO 개선이 가능합니다.",
        benefits: {
          benefit1: "모든 비디오 한 번에 자막 추가",
          benefit2: "249개 언어 번역",
          benefit3: "YouTube 호환 SRT 파일",
          benefit4: "비디오 SEO 순위 향상"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "비디오"
          },
          stat2: {
            number: "100+",
            label: "언어"
          },
          stat3: {
            number: "249",
            label: "번역"
          }
        }
      },
      researchers: {
        title: "연구자 및 학계",
        pain: '"질적 데이터는 기다리지 않아야 합니다"',
        description: "전체 연구 자료를 한 번에 처리하세요. 포커스 그룹, 인터뷰, 패널 토론을 완벽한 발화자 식별로 관리하세요.",
        benefits: {
          benefit1: "포커스 그룹 일괄 처리",
          benefit2: "20명 발화자 식별",
          benefit3: "분석 소프트웨어로 내보내기",
          benefit4: "GDPR 준수 보안"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "연구"
          },
          stat2: {
            number: "96%",
            label: "그룹 정확도"
          },
          stat3: {
            number: "GDPR",
            label: "준수"
          }
        }
      },
      businessTeams: {
        title: "비즈니스 팀",
        pain: '"회의 녹음은 간편해야 합니다"',
        description: "직접 회의를 녹음하거나 오디오 파일을 업로드해 즉시 전사할 수 있습니다. 무제한 대화에서 검색 가능한 아카이브를 구축하고 중요한 논의를 다시는 잃지 마세요.",
        benefits: {
          benefit1: "직접 오디오 녹음 & 전사",
          benefit2: "무제한 회의 녹음",
          benefit3: "검색 가능한 회의 아카이브",
          benefit4: "오디오 파일 즉시 업로드"
        },
        stats: {
          stat1: {
            number: "라이브",
            label: "녹음"
          },
          stat2: {
            number: "즉시",
            label: "업로드"
          },
          stat3: {
            number: "20+",
            label: "스피커"
          }
        }
      },
      educators: {
        title: "교육자",
        pain: '"YouTube 동영상은 즉각적인 전사가 필요합니다"',
        description: "YouTube 링크를 붙여넣기만 하면 즉시 전사본과 자동 생성 자막을 얻을 수 있습니다. 모든 교육 동영상을 접근 가능하고 검색 가능한 콘텐츠로 변환하세요.",
        benefits: {
          benefit1: "직접 YouTube 링크 전사",
          benefit2: "동영상 자막 자동 생성",
          benefit3: "전체 강의 전사",
          benefit4: "검색 가능한 강의 아카이브"
        },
        stats: {
          stat1: {
            number: "1-클릭",
            label: "YouTube 붙여넣기"
          },
          stat2: {
            number: "자동",
            label: "자막"
          },
          stat3: {
            number: "100+",
            label: "언어"
          }
        }
      },
      quotes: {
        title: "실제 사용자,",
        titleHighlight: "진정한 자유",
        subtitle: "인공적인 한계를 벗어난 전문가들의 이야기를 들어보세요",
        testimonials: {
          mike: {
            textBefore: '"저는',
            highlight: "3년 분량의 에피소드",
            textAfter: '가 전사되지 않은 채 있었습니다. Otter는 3개만 선택하라고 했어요. NeverCap은 주말 동안 150개 에피소드를 모두 업로드할 수 있게 해주었습니다."',
            name: "Mike Rodriguez",
            role: "팟캐스트 호스트"
          },
          jessica: {
            textBefore: '"프리랜서 저널리스트로서 저는 Trint의',
            highlight: "$100/월",
            textAfter: '을 감당할 수 없지만, Otter의 월 10개 파일 제한도 작업에 적합하지 않았습니다. NeverCap은 제 경력을 구했습니다."',
            name: "Jessica Park",
            role: "프리랜서 저널리스트"
          },
          sarah: {
            textBefore: '"우리 연구팀은',
            highlight: "200시간",
            textAfter: '의 포커스 그룹 녹음을 보유하고 있었습니다. 월별 할당량을 나누는 대신 주말 동안 모든 것을 처리했습니다."',
            name: "Dr. Sarah Chen",
            role: "수석 연구원"
          },
          carlos: {
            textBefore: '"저는 스페인어로 교육 콘텐츠를 만듭니다. NeverCap은 완벽하게 전사하고',
            highlight: "영어로 번역",
            textAfter: '하여 더 넓은 관객에게 도달할 수 있게 해줍니다. 제한 없이 성장만 있습니다."',
            name: "Carlos Martinez",
            role: "YouTube 교육자"
          }
        }
      },
      industries: {
        title: "신뢰받는",
        titleHighlight: "산업군",
        subtitle: "모든 전문가들이 진정한 무제한으로 전환하고 있습니다",
        list: {
          media: "미디어 & 출판",
          education: "교육",
          healthcare: "헬스케어",
          technology: "기술",
          finance: "금융",
          legal: "법률"
        }
      },
      cta: {
        title: "당신의 사용 사례도 무제한이 필요합니다",
        subtitle: "분 단위 계산을 멈추고 창작을 시작한 50,000명 이상의 전문가에 합류하세요",
        button: "무제한 여정 시작하기 →"
      }
    },
    Podcasters: {
      badge: "팟캐스터를 위해 제작됨",
      heroTitle: "당신의",
      heroTitleHighlight: "전체 팟캐스트 아카이브를 텍스트로 변환",
      heroSubtitle: "전체 백 카탈로그를 업로드하세요. 모든 에피소드에 쇼 노트를 생성합니다. 더 이상 오디오 변환할 에피소드를 선택할 필요가 없습니다.",
      ctaPrimary: "무료로 변환 시작",
      ctaSecondary: "작동 방식 보기",
      trustBadge1: "10,000명 이상의 팟캐스터",
      trustBadge2: "무제한 에피소드",
      trustBadge3: "SEO 최적화된 텍스트 변환본",
      stats: {
        stat1: {
          number: "∞",
          label: "에피소드/월"
        },
        stat2: {
          number: "50",
          label: "일괄 업로드"
        },
        stat3: {
          number: "10시간",
          label: "최대 에피소드 길이"
        },
        stat4: {
          number: "96%",
          label: "정확도"
        }
      },
      problemTitle: "이것",
      problemTitleHighlight: "팟캐스트 텍스트 변환 문제점",
      problemSubtitle: '다른 서비스는 어떤 에피소드가 텍스트 변환 "가치"가 있는지 선택하도록 강요합니다',
      problems: {
        problem1: {
          title: "업로드 제한이 아카이브를 망칩니다",
          description: "Otter는 무료 평생 3회, Pro 월 10회 임포트를 제공합니다. 3년 분량의 에피소드를 어떻게 변환하시겠습니까?"
        },
        problem2: {
          title: "SEO 기회 놓침",
          description: "텍스트 변환되지 않은 모든 에피소드는 SEO 트래픽을 잃습니다. 하지만 Descript는 최대 월 30시간으로 제한합니다."
        },
        problem3: {
          title: "성장에 따른 비용 폭발",
          description: "팟캐스트가 성장함에 따라 텍스트 변환 비용이 급증합니다. 시간당 $2의 초과 요금으로 확장이 불가능합니다."
        }
      },
      solutionTitle: "이것",
      solutionTitleHighlight: "NeverCap 솔루션",
      solutionDescription: "진정한 무제한 텍스트 변환. 전체 아카이브를 업로드하세요. 모든 새 에피소드를 변환하세요. 대량으로 쇼 노트를 생성하세요. 제한 없음, 한계 없음, 오직 성장뿐입니다.",
      workflowTitle: "당신의 팟캐스트 워크플로우,",
      workflowTitleHighlight: "단순화됨",
      workflowSubtitle: "녹음부터 SEO 최적화된 쇼 노트까지 몇 분 안에",
      workflow: {
        step1: {
          title: "에피소드 업로드",
          description: "한 번에 50개 에피소드 드롭. MP3, MP4, WAV - 모두 처리 가능합니다."
        },
        step2: {
          title: "AI 변환",
          description: "화자 식별 기능으로 96% 정확도. 인터뷰에 완벽합니다."
        },
        step3: {
          title: "스마트 포맷팅",
          description: "AI가 자동으로 문단, 문장 및 구두점을 추가합니다."
        },
        step4: {
          title: "게시 및 순위",
          description: "웹사이트로 내보내기. SEO 트래픽이 증가하는 것을 확인하세요."
        }
      },
      featuresTitle: "팟캐스터를 위한 기능",
      featuresTitleHighlight: "실제로 필요한",
      featuresSubtitle: "팟캐스터가 만들고, 팟캐스터를 위해",
      features: {
        feature1: {
          title: "다중 화자 감지",
          description: "최대 20명의 화자를 자동으로 식별하고 라벨링합니다. 패널 토론, 인터뷰 및 공동 진행 쇼에 완벽합니다."
        },
        feature2: {
          title: "타임스탬프 챕터",
          description: "YouTube 설명을 위한 클릭 가능한 타임스탬프 생성. 청취자가 즉시 좋아하는 부분으로 이동할 수 있습니다."
        },
        feature3: {
          title: "스마트 포맷팅",
          description: "자동으로 문단, 문장 및 구두점을 추가합니다. 깔끔하고 읽기 쉬운 텍스트를 얻으세요. 후반 작업 시간을 절약하세요."
        },
        feature4: {
          title: "SEO 최적화",
          description: "검색 엔진에 최적화된 텍스트. 팟캐스트의 검색 가능성을 높이고 새로운 청중에게 도달하세요."
        },
        feature5: {
          title: "100개 이상의 언어",
          description: "어떤 언어로든 녹취 가능. 249개 이상의 언어로 번역. 전 세계 청중에게 쉽게 도달하세요."
        },
        feature6: {
          title: "일괄 처리",
          description: "잠자기 전 50개 에피소드를 업로드하세요. 아침에 완성된 텍스트를 확인하세요. 하룻밤 사이에 전체 아카이브를 처리하세요."
        }
      },
      testimonialsTitle: "선택한 팟캐스터",
      testimonialsTitleHighlight: "전환",
      testimonialsSubtitle: "실제 팟캐스터의 진짜 이야기",
      testimonials: {
        mike: {
          text: '"3년 동안 팟캐스트를 하면서 바보처럼 모든 것을 수동으로 녹취했습니다. 한 번에 6개 에피소드를 업로드했는데 공동 진행자와 완벽하게 분리되었어요. 망쳤다고 생각한 커피숍 에피소드? 텍스트는 완벽했어요. 다시는 직접 타이핑하지 않을 거예요."',
          name: "Mike Rodriguez",
          role: '"The Daily Grind" 팟캐스트 호스트'
        },
        sarah: {
          text: '"Otter는 월 10개 파일 업로드만 허용했어요. 150개 에피소드가 쌓여 있었죠. NeverCap은 3번의 일괄 업로드로 모든 것을 처리할 수 있게 했어요. 오래된 에피소드에 텍스트를 추가한 후 유기적 트래픽이 300% 증가했어요. 이건 제대로 투자예요."',
          name: "Sarah Chen",
          role: '"Tech Talks Today" 크리에이터'
        }
      },
      comparisonTitle: "팟캐스터가 선택하는 이유",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "경쟁사와 비교해보세요",
      comparison: {
        headers: {
          feature: "기능",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Descript Creator"
        },
        rows: {
          monthlyLimit: {
            feature: "월간 에피소드 제한",
            nevercap: "무제한",
            otter: "~13개 에피소드 (1200분)",
            descript: "~30개 에피소드 (30시간)"
          },
          uploadLimit: {
            feature: "파일 업로드 제한",
            nevercap: "무제한",
            otter: "월 10개",
            descript: "한 번에 1개"
          },
          batchProcessing: {
            feature: "일괄 처리",
            nevercap: "50개 파일",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "최대 에피소드 길이",
            nevercap: "10시간",
            otter: "90분",
            descript: "무제한"
          },
          speakerDetection: {
            feature: "화자 감지",
            nevercap: "20명의 화자",
            otter: "16명의 화자",
            descript: "10명의 화자"
          },
          smartFormatting: {
            feature: "스마트 포맷팅",
            nevercap: "✓ 완벽함",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "가격",
            nevercap: "$17.99/월",
            otter: "$16.99/월",
            descript: "$30/월"
          }
        }
      },
      ctaTitle: "모든 에피소드 자막 생성 시작하기",
      ctaSubtitle: "제한 걱정 없는 10,000명 이상의 팟캐스터와 함께하세요",
      ctaButton: "첫 50개 에피소드 무료 업로드 →",
      ctaDisclaimer: "신용카드 불필요 • 무제한 에피소드 처리 • 언제든지 취소 가능"
    },
    Journalists: {
      hero: {
        badge: "저널리스트 & 작가를 위한",
        title: "모든 인터뷰를 자막으로.",
        titleHighlight: "중요한 발언을 놓치지 마세요.",
        subtitle: "어떤 인터뷰를 자막화할지 고르지 마세요. 모든 녹음을 한 번에 업로드하고, 즉시 검색하며, 업로드 스트레스 없이 마감을 맞추세요.",
        ctaPrimary: "무제한 업로드 시작 →",
        ctaSecondary: "작동 방식 보기",
        stats: {
          uploads: {
            number: "∞",
            label: "파일 업로드"
          },
          accuracy: {
            number: "96%",
            label: "정확도"
          },
          speed: {
            number: "5분",
            label: "시간당"
          }
        },
        dashboard: {
          title: "인터뷰 대기열",
          status: "• 모든 처리 중",
          interviews: {
            cityCouncil: {
              title: "시의회 회의",
              duration: "2시간 15분 • 업로드 중...",
              action: "처리 중"
            },
            expertInterview: {
              title: "전문가 인터뷰 - Dr. Chen",
              duration: "45분 • 자막 생성 중...",
              action: "96% 완료"
            },
            pressConference: {
              title: "기자 회견",
              duration: "1시간 30분 • 준비 완료",
              action: "보기 →"
            },
            phoneInterview: {
              title: "전화 인터뷰 - 출처",
              duration: "35분 • 준비 완료",
              action: "보기 →"
            }
          }
        }
      },
      problem: {
        title: "이것",
        titleHighlight: "저널리스트 자막 생성 문제",
        subtitle: '다른 서비스는 어떤 인터뷰가 자막화할 "가치"가 있는지 선택하게 합니다',
        problems: {
          uploadLimits: {
            title: "업로드 제한이 조사를 방해합니다",
            description: "Otter Pro는 월 10개 파일만 허용합니다. 3주 분량의 수사 인터뷰를 어떻게 자막화하나요?"
          },
          missingQuotes: {
            title: "중요한 발언 놓침",
            description: "자막화되지 않은 모든 인터뷰에는 기사의 핵심 발언이 있을 수 있습니다. 하지만 Trint는 최대 월 50시간만 허용합니다."
          },
          costExplosion: {
            title: "마감일에 따라 비용이 폭발합니다",
            description: "조사가 깊어질수록 필사 비용이 급증합니다. 월 $100의 초과 요금으로 속보 작성이 불가능해집니다."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "네버캡 솔루션",
          description: "진정한 무제한 필사. 전체 조사 내용을 업로드하세요. 모든 인터뷰를 필사하세요. 모든 인용문을 즉시 검색하세요. 제한 없음, 한계 없음, 오직 저널리즘만."
        }
      },
      solution: {
        title: "1",
        titleHighlight: "최고의 인터뷰 필사 소프트웨어",
        titleSuffix: "저널리스트를 위한",
        subtitle: "마감이 촉박하고 정확성이 핵심일 때 중요한 진정한 장점들",
        solutions: {
          unlimitedUploads: {
            label: "무제한 용량",
            title: "모든 인터뷰를 위한 무제한 용량",
            description: "분량 제한이 있는 소프트웨어와 달리, 간단한 대화부터 여러 시간에 걸친 토론까지 모든 인터뷰를 필사할 수 있습니다. 마감일에 크레딧이 부족할 걱정은 이제 끝입니다.",
            points: {
              simultaneousUpload: "월별 분량 제한 없음",
              noLimits: "10시간 인터뷰 지원",
              processWhileWrite: "전체 조사 내용을 한 번에 처리",
              longRecordings: "10시간 녹음 지원"
            },
            visual: {
              number: "∞",
              label: "제한 없음. 영원히."
            }
          },
          instantSearch: {
            label: "번개 같은 속도",
            title: "뉴스 사이클에 맞는 속도",
            description: "인터뷰 필사본을 며칠이 아니라 몇 분 안에 받아보세요. 그 어느 때보다 빠르게 기사를 완성하세요. 커피 한 잔 마시는 동안 AI가 몇 시간 분량의 오디오를 처리합니다.",
            points: {
              searchAll: "1시간 인터뷰 5분 내 결과 제공",
              wordTimestamps: "긴급 기사 우선 처리",
              jumpToMoments: "실시간 진행 상황 추적"
            },
            searchDemo: {
              placeholder: "5분",
              resultsText: "오디오 1시간당",
              results: {
                mayorInterview: '"...우리의 기후 정책은 변화할 것입니다..."',
                expertPanel: '"...정책 성명서에는 분명히 다음과 같은 내용이 나와 있습니다..."'
              }
            }
          },
          professionalAccuracy: {
            label: "인용 가능한 정확도",
            title: "인용할 수 있는 정확도",
            description: "저희 AI는 높은 정확도의 필사본을 제공하여 게시하는 인용문이 정확하고 신뢰할 수 있도록 합니다. 편집자들이 신뢰하는 전문가급 필사 품질.",
            points: {
              accuracyGuarantee: "96% 정확도 보장",
              handlesAccents: "전문 용어 처리",
              smartPunctuation: "완벽한 화자 식별"
            },
            visual: {
              accuracy: "96%",
              label: "게시 준비 완료된 정확도",
              transcript: {
                speaker1: '"조사 결과, 재무 보고서에 상당한 불일치가 있는 것으로 드러났습니다."',
                speaker2: '"구체적인 차이점에 대해 자세히 설명해 주실 수 있나요?"'
              }
            }
          },
            ironclad: {
                  label: "출처 보호",
                  title: "철통 같은 출처 보호",
                  description: "민감한 인터뷰 데이터와 기밀 출처를 보호하기 위한 강력한 보안 기능을 제공합니다. 은행급 암호화로 조사 내용을 안전하게 보관하세요.",
                  points: {
                    accuracyGuarantee: "엔드투엔드 암호화",
                    handlesAccents: "자동 파일 삭제 옵션",
                    smartPunctuation: "GDPR 및 개인정보 보호 준수"
                  },
                  visual: {
                    accuracy: "🔒",
                    label: "최대 보안"
                  }
                }
        }
      },
      features: {
        title: "모든",
        titleHighlight: "저널리스트가 필요한 것들",
        subtitle: "워크플로우를 존중하는 전문가용 도구",
        featuresList: {
          languages: {
            title: "100+ 언어",
            description: "12가지 주요 언어로 전 세계 출처와 96% 정확도로 인터뷰"
          },
          exportFormats: {
            title: "내보내기 형식",
            description: "Word, PDF, SRT, TXT. 모든 워크플로우와 호환 가능."
          },
          sourceProtection: {
            title: "출처 보호",
            description: "은행급 암호화. 출처는 기밀로 유지됩니다."
          },
          timestamps: {
            title: "타임스탬프",
            description: "인용구를 클릭하면 정확한 오디오 위치로 이동합니다."
          },
          teamSharing: {
            title: "팀 공유",
            description: "편집자와 협업하세요. 대본을 안전하게 공유하세요."
          },
          mobileReady: {
            title: "모바일 지원",
            description: "휴대폰으로 업로드. 어디서나 대본을 검토하세요."
          },
          smartFormatting: {
            title: "스마트 포맷팅",
            description: "자동 문단 및 구두점 처리로 가독성 높은 대본 생성."
          },
          batchProcessing: {
            title: "일괄 처리",
            description: "한 번에 50개 파일 업로드. 잠자는 동안 처리됩니다."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: '"업로드 제한 때문에 3년간 방치된 인터뷰들이 있었어요. NeverCap로 주말 만에 전부 처리했죠. 게임 체인저예요."',
          name: "제시카 박",
          role: "프리랜서 저널리스트, 전 오터 사용자"
        }
      },
      cta: {
        title: "대본 생성 시작",
        titleHighlight: "제한 없이",
        subtitle: "업로드 횟수를 세는 걸 멈추고 스토리에 집중하는 수천 명의 저널리스트에 합류하세요",
        ctaPrimary: "무제한 무료 체험 →",
        ctaSecondary: "가격 보기"
      }
    },
    ContentCreators: {
      hero: {
        badge: "콘텐츠 크리에이터를 위해",
        title: "YouTube 동영상,",
        titleHighlight: "무제한으로 자막 생성",
        titleSuffix: "1",
        subtitle: "YouTube 동영상 자막 생성, TikTok 동영상 재활용을 위한 텍스트 변환, Facebook 동영상 텍스트 변환 방법이 필요하든 당사 플랫폼이 완벽히 처리합니다. 월별 제한 없이 100개 이상의 언어로 자막 생성 – 순수한 창의적 자유를 누리세요.",
        ctaPrimary: "무제한 자막 생성 시작 →",
        ctaSecondary: "작동 방식 보기",
        stats: {
          videos: {
            number: "∞",
            label: "동영상/월"
          },
          languages: {
            number: "100+",
            label: "언어"
          },
          accuracy: {
            number: "96%",
            label: "정확도"
          },
          platforms: {
            number: "10+",
            label: "플랫폼"
          }
        }
      },
      platforms: {
        title: "모든 플랫폼에서 가져와 자막 생성",
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
          titleMax: "모든 플랫폼의",
          titleMaxHighlight: "동영상 자막 생성"
    },
      features: {
        title: "콘텐츠 확장에 필요한",
        titleHighlight: "모든 것",
        subtitle: "전문가용 도구에 전문가용 제한은 없습니다",
        oneClickImport: {
          label: "원클릭 가져오기",
          title: "링크 붙여넣기로 YouTube, TikTok &",
          titleHighlight: "Instagram 동영상 자막 생성",
          description: "저희 도구는 동영상 콘텐츠 자막 생성을 간편하게 합니다. 인스타그램 동영상 링크를 붙여넣기만 하세요. Vimeo 동영상도 동일한 방법으로 텍스트 변환 가능합니다. 채널의 모든 백로그를 주말 동안 처리하세요.",
          points: {
            directYoutube: "YouTube 링크 직접 변환",
            multiplePlatforms: "10개 이상 플랫폼에서 가져오기",
            batchPlaylists: "전체 재생목록 일괄 처리",
            autoSync: "채널과 자동 동기화"
          },
          demo: {
            instruction: "동영상 URL 붙여넣기:",
            url: "https://youtube.com/watch?v=...",
            status: "가져오는 중 & 변환 중..."
          }
        },
        globalReach: {
          label: "글로벌 확장",
          title: "100개 이상 언어 지원",
          titleHighlight: "제한 없음",
          description: "100개 이상 언어 자동 번역으로 글로벌 시청자에게 도달하세요. 다국어 자막을 동시에 생성합니다. 추가 비용 없음, 월별 번역량 제한 없음.",
          points: {
            highAccuracy: "12개 주요 언어 96% 정확도",
            unlimitedTranslations: "무제한 번역 포함",
            multicultural: "다문화 콘텐츠에 최적",
            autoDetect: "원본 언어 자동 감지"
          },
          visual: {
            number: "100+",
            title: "지원 언어",
            subtitle: "한 번 번역으로 모두에게 전달"
          }
        },
        flexibleExport: {
          label: "유연한 내보내기",
          title: "모든 포맷",
          titleHighlight: "제공",
          description: "워크플로우에 맞는 형식으로 내보내기. YouTube용 SRT부터 웹 플레이어용 VTT, 편집 가능한 문서까지. 모든 내보내기 무제한, 모든 플랜에 포함.",
          points: {
            videoFormats: "동영상 플랫폼용 SRT & VTT",
            editingFormats: "편집용 DOCX & PDF",
            dataAnalysis: "데이터 분석용 CSV",
            simpleScripts: "간단한 스크립트용 TXT"
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
        title: "업로드부터",
        titleHighlight: "게시까지",
        titleSuffix: "단 몇 분",
        subtitle: "전체 콘텐츠 라이브러리 자막 생성 최속 방식",
        steps: {
          pasteLinks: {
            title: "링크 붙여넣기",
            description: "YouTube, TikTok 또는 어떤 동영상 링크든 입력. 또는 파일 직접 업로드."
          },
          autoTranscribe: {
            title: "자동 변환",
            description: "AI 처리 96% 정확도. 악센트 & 다중 화자 인식."
          },
          editTranslate: {
            title: "편집 & 번역",
            description: "자막을 완벽하게. 100개 이상 언어로 즉시 번역."
          },
          exportPublish: {
            title: "내보내기 & 게시",
            description: "어떤 형식으로든 다운로드. 플랫폼에 업로드. 완료!"
          }
        }
      },
      testimonials: {
        title: "크리에이터들이",
        titleHighlight: "매일 전환 중",
        subtitle: "제한된 플랜에서 무제한 자유로",
        carlos: {
          textBefore: "저는 스페인어 교육 콘텐츠를 만듭니다. NeverCap은 완벽하게 변환해주고",
          textAfter: "더 넓은 확장을 가능케 합니다. 제한 없이 성장만. 다국어 자막 추가 후 채널 조회수 3배 증가.",
          highlight: "영어로 번역",
          name: "카를로스 마르티네즈",
          role: "YouTube 교육자 • 구독자 25만 명"
        },
        sarah: {
          textBefore: "Descript는 월 $30을 요구했어요",
          textAfter: ". 저는 500개 이상의 비디오가 쌓여 있었죠. NeverCap으로 한 주말 만에 모두 처리했습니다. 자막으로 인한 SEO 향상은 첫 달에 이미 비용을 충당했어요.",
          highlight: "30시간",
          name: "사라 리",
          role: "라이프스타일 블로거 • 구독자 18만 명"
        },
        jake: {
          textBefore: "이것",
          textAfter: "기능은 게임 체인저입니다. 더는 아무것도 다운로드할 필요 없어요. 그냥 붙여넣고, 변환하고, 완료. TikTok용 팟캐스트 클립 처리가 이렇게 쉬웠던 적이 없어요.",
          highlight: "YouTube 직접 가져오기",
          name: "제이크 윌슨",
          role: "팟캐스트 호스트 • 상위 1% 크리에이터"
        },
        yuki: {
          textBefore: "저는 5개 언어로 콘텐츠를 만듭니다. 다른 서비스는",
          textAfter: ". NeverCap은 무제한 번역을 제공해요. 제대로 된 현지 자막을 사용하기 시작한 후 국제 시청자가 400% 증가했습니다.",
          highlight: "번역당",
          name: "유키 타나카",
          role: "게임 크리에이터 • 구독자 50만 명"
        }
      },
      cta: {
        title: "여러분의 전체 채널. 자막 생성. 오늘 바로.",
        subtitle: "분을 세는 것을 멈추고 창작을 시작한 50,000명 이상의 크리에이터에 합류하세요",
        button: "무제한 자막 생성 시작 →"
      },
        FAQSection: {
              "title": "여러분의 변환 질문,",
              "titleHighlight": "답변됨",
              subtitle: "다양한 플랫폼의 비디오를 변환하는 데 필요한 모든 정보",
              "questions": [
                    {
                      "question": "Q: NeverCap으로 YouTube 비디오를 어떻게 변환하나요?",
                      "answer": "간단합니다. 변환하려는 YouTube 비디오를 찾아 URL을 복사하고 저희 앱에 붙여넣기만 하면 됩니다. 저희 AI가 자동으로 비디오를 가져와 몇 분 안에 전체 텍스트 변환본을 제공할 거예요."
                    },
                    {
                      "question": "Q: Facebook 비디오를 텍스트로 변환하는 가장 좋은 방법은 무엇인가요?",
                      "answer": "가장 쉬운 방법은 직접 링크를 사용하는 것입니다. Facebook 비디오의 URL을 복사하면 저희 플랫폼이 나머지를 처리해 음성을 텍스트로 최대 96% 정확도로 변환해줍니다. 수동 변환에서 벗어나세요."
                    },
                    {
                      "question": "Q: TikTok 및 Instagram 비디오도 변환할 수 있나요?",
                      "answer": "물론이죠. TikTok 및 Instagram 비디오 변환을 모두 지원합니다. 짧은 형식의 비디오 콘텐츠를 블로그 글, 기사 또는 텍스트 기반 소셜 미디어 업데이트로 재활용하려는 콘텐츠 크리에이터에게 완벽합니다."
                    },
                    {
                      "question": "Q: Vimeo 비디오를 텍스트로 어떻게 변환하나요?",
                      "answer": "Vimeo 비디오 변환은 다른 플랫폼만큼 쉽습니다. Vimeo 비디오 URL을 복사해 NeverCap에 붙여넣기만 하면 됩니다. 저희 AI가 비디오를 처리하고 여러 형식으로 다운로드할 수 있는 정확한 텍스트 변환본을 생성할 거예요."
                    }
                  ]
            }
    },
    Researchers: {
      heroBadge: "학문적 탁월성을 위해 제작됨",
      heroTitle1: "모든 인터뷰를 변환하세요.",
      heroTitle2: "모든 데이터를 분석하세요.",
      heroSubtitle: "어떤 포커스 그룹을 변환할지 선택하는 것을 멈추세요. 20명의 참가자가 동시에 말해도 96% 정확도와 완벽한 화자 식별로 모든 질적 데이터를 처리하세요.",
      heroCtaPrimary: "무료로 사용해보기 - 신용카드 불필요",
      heroCtaSecondary: "작동 방식 보기",
      statsInterviewHours: "인터뷰 시간",
      statsAccuracy: "정확도",
      statsSpeakersId: "화자 식별",
      statsCompliant: "규정 준수",
      problemTitle: "이것",
      problemSubtitle: '다른 서비스는 어떤 데이터가 변환할 "가치"가 있는지 선택하게 합니다',
      problemCard1Title: "업로드 제한이 연구를 망칩니다",
      problemCard1Desc: "Otter는 평생 3번의 가져오기만 허용합니다. 200시간 분량의 포커스 그룹을 어떻게 변환하나요?",
      problemCard2Title: "중요한 데이터 누락",
      problemCard2Desc: "변환되지 않은 모든 인터뷰에는 획기적인 통찰력이 담겨 있을 수 있습니다. 하지만 Rev는 최소 $2/분을 청구합니다.",
      problemCard3Title: "연구비가 사라집니다",
      problemCard3Desc: "데이터셋이 커질수록 필사 비용이 급증합니다. 포커스 그룹당 $500은 확장을 불가능하게 만듭니다.",
      solutionTitle: "네버캡 솔루션",
      solutionDesc: "진정한 무제한 필사. 전체 연구를 업로드하세요. 모든 인터뷰를 필사하세요. 모든 데이터를 분석하세요. 제한 없음, 한계 없음, 오직 연구만.",
      feature1Label: "제한 없음",
      feature1Title: "당신의",
      feature1Desc: '오늘 밤 200시간 분량의 인터뷰를 모두 업로드하세요. 완성된 검색 가능한 필사본으로 아침을 맞이하세요. 월간 제한 없음, 파일별 제한 없음, "공정 사용" 같은 허튼소리 없음.',
      feature1Point1: "50개 파일 동시 일괄 업로드",
      feature1Point2: "종단 연구 완전 처리",
      feature1Point3: "필사본 저장 공간 무제한",
      feature1Point4: "NVivo, MAXQDA, Atlas.ti로 내보내기",
      feature1Visual1: "무제한 시간",
      feature1Visual2: "10시간이든 10,000시간이든 동일한 가격",
      feature2Label: "스마트 AI",
      feature2Title: "정확한 파악",
      feature2Desc: "우리의 AI는 서로 말을 끊거나 동시에 말해도 최대 20명의 화자를 추적합니다. 모든 목소리가 정확하게 캡처되고 라벨링됩니다.",
      feature2Point1: "20명 화자 식별",
      feature2Point2: "교차 대화 및 방해 처리",
      feature2Point3: "이름 변경 가능한 화자 라벨",
      feature2Point4: "모든 단어의 타임스탬프",
      conversationParticipant1: "참가자 1",
      conversationText1: "우리가 직면한 주요 장벽은 분명히 치료 비용입니다...",
      conversationParticipant2: "참가자 2",
      conversationText2: "물론이죠, 하지만 접근성도—",
      conversationParticipant3: "참가자 3",
      conversationText3: "—방해해서 죄송하지만, 교통도 큰 문제에요.",
      conversationText4: "네! 제가 바로 그 말을 하려던 참이었어요.",
      conversationParticipant4: "참가자 4",
      conversationText5: "시골 지역에서는 비용, 접근성, 교통 이 세 가지 모두에요.",
      feature3Label: "정밀도",
      feature3Title: "신뢰할 수 있는",
      feature3Desc: "전문 용어, 강한 악센트, 분야별 용어를 전문가처럼 처리합니다. 출판, 동료 검토, 논문 위원회에 충분한 정확도.",
      feature3Point1: "의학 및 과학 용어",
      feature3Point2: "100개 이상의 언어 및 방언",
      feature3Point3: "축어적 및 정리된 읽기 모드",
      feature3Point4: "어떤 형식으로든 편집 및 내보내기",
      feature3Visual1: "연구 수준 정확도",
      feature3Visual2: "50,000명 이상의 연구자에게 신뢰받음",
      feature4Label: "보안",
      feature4Title: "IRB 준수 인증",
      feature4Desc: "민감한 연구 데이터는 기업급 보안으로 보호됩니다. GDPR 준수, HIPAA 준수 옵션, IRB 요구 사항을 위한 완전한 감사 추적.",
      feature4Point1: "종단 간 암호화",
      feature4Point2: "GDPR 및 CCPA 준수",
      feature4Point3: "자동 삭제 정책",
      feature4Point4: "안전한 팀 협업",
      useCasesTitle: "완벽한",
      useCasesSubtitle: "민족지학부터 임상 시험까지",
      useCase1Title: "포커스 그룹",
      useCase1Desc: "중복 발화가 있는 8-20명의 참가자 처리. 열띤 토론 중에도 완벽한 화자 식별. 질적 분석 소프트웨어로 직접 내보내기.",
      useCase2Title: "심층 인터뷰",
      useCase2Desc: "수백 건의 1:1 인터뷰를 동시에 처리하세요. 전체 데이터셋의 일관성을 유지하고 모든 기록을 즉시 검색할 수 있습니다.",
      useCase3Title: "임상 연구",
      useCase3Desc: "HIPAA 호환 환자 인터뷰 옵션. 정확한 의학 용어 전사. 민감한 건강 데이터의 안전한 처리.",
      useCase4Title: "민족지학 연구",
      useCase4Desc: "자연 환경에서의 현장 녹음. 배경 소음 및 다중 화자 처리. 100개 이상의 언어 및 방언 지원.",
      useCase5Title: "구술 역사 프로젝트",
      useCase5Desc: "제한 없이 전체 아카이브를 보존하세요. 검색 가능한 역사적 기록 생성. 종단 및 세대 연구에 이상적입니다.",
      useCase6Title: "논문 연구",
      useCase6Desc: "학생 친화적인 가격으로 모든 기능을 이용하세요. 저렴한 비용으로 전체 데이터셋을 처리하고 일괄 처리로 빠른 마감을 맞추세요.",
      testimonialTitle: "신뢰받는 기관",
      testimonialText: "우리 연구팀은 지역사회 건강 연구에서 200시간의 포커스 그룹 녹음을 보유했습니다. 다른 서비스는 비용 때문에 전사할 세션을 선택하라고 했습니다. NeverCap은 주말 동안 모든 것을 처리할 수 있게 해주었습니다. 20명의 화자 식별 기능은 심지어 모두가 동시에 말하는 혼란스러운 토론 중에도 작동했습니다. 이 도구는 우리가 질적 데이터를 처리하는 방식을 완전히 바꿔놓았습니다.",
      testimonialAuthorName: "사라 첸 박사",
      testimonialAuthorRole: "공중보건 연구소 수석 연구원",
      ctaTitle: "분석할 데이터를 선택하는 것을 그만두세요",
      ctaSubtitle: "모든 것을 전사하는 50,000명 이상의 연구자들과 함께하세요",
      ctaButton: "NeverCap 무료로 사용해보기",
        problemTitle2: "연구 변환 문제",
        title: "이것",
        useCasesTitle2: "모든 연구 방법",
        testimonialTitle2: "선도적인 연구자들",
        feature1TitleHl: "전체 연구 프로젝트",
        feature1TitlePost: "원스톱으로 완료",
        feature2TitleHl: "포커스 그룹 인터뷰",
        feature2TitlePost: "매번 성공",
        feature3TitleHl: "96% 정확도",
        feature4TitleHl: "보안",
        testimonialText2Hl: "200시간",
        testimonialText3: "우리의 지역사회 건강 연구에서 나온 포커스 그룹 녹음입니다. 다른 서비스는 비용 때문에 어떤 세션을 기록할지 선택하라고 했습니다. NeverCap을 사용하면",
        testimonialText4Hl: "주말 동안 모든 것을 처리할 수 있었습니다",
        testimonialText5: ". 20명 스피커 식별 기능이 실제로 작동했습니다—심지어 모두가 동시에 말하는 가장 혼란스러운 토론 중에도 말이죠. 이 도구는",
        testimonialText6Hl: "완전히 변화시켰습니다",
        testimonialText7: "우리가 질적 데이터를 처리하는 방식을."
    },
    BusinessTeams: {
      heroBadge: "비즈니스 팀을 위한",
      heroTitle1: "회의 녹음",
      heroTitle2: "간편하게 만들기",
      heroSubtitle: "브라우저에서 직접 회의를 녹음하거나 오디오 파일을 즉시 업로드하세요. 무제한 대화로 검색 가능한 아카이브를 구축하세요. 진정한 무제한 전사로 중요한 논의를 다시는 잃지 마세요.",
      heroCtaPrimary: "지금 녹음 시작 →",
      heroCtaSecondary: "작동 방식 보기",
      recordingStatus: "녹음 중...",
      statsMeetingMinutes: "회의록",
      statsLiveRecording: "녹음",
      statsSpeakerID: "화자 식별",
      statsInstantUpload: "업로드 및 처리",
      featuresTitle: "모든 비즈니스를 위한 전사",
      featuresSubtitle: "실시간 녹음부터 즉시 업로드까지, 모든 마찰점을 제거했습니다",
      feature1Title: "브라우저에서 직접 녹음",
      feature1Desc: "다운로드나 플러그인 없음. 한 번의 클릭으로 즉시 녹음을 시작하세요. 완벽한 오디오 품질, 자동 화자 감지.",
      feature1Benefit1: "원클릭 녹음 시작",
      feature1Benefit2: "소프트웨어 설치 불필요",
      feature1Benefit3: "모든 기기에서 작동",
      feature1Benefit4: "실시간 전사",
      feature1Visual1: "클릭 & 녹음",
      feature1Visual2: "설정 불필요",
      feature2Title: "모든 오디오 파일 즉시 업로드",
      feature2Desc: "Zoom, Teams 또는 휴대폰에서 녹음한 파일이 있나요? 즉시 업로드하세요. 모든 주요 오디오 및 비디오 형식 지원. 기다릴 필요 없이 여러 파일을 동시에 처리하세요.",
      feature2Benefit1: "지원 형식: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "일괄 업로드 기능",
      feature2Benefit3: "10시간 파일 지원",
      feature2Benefit4: "작업 중에도 처리 가능",
      feature2Visual1: "파일 드래그 & 드롭",
      feature3Title: "팀 협업을 위해 제작",
      feature3Desc: "팀원들과 즉시 전사본을 공유하세요. 함께 녹음을 듣고, 여러 형식으로 전사본을 내보내며, 검색 가능한 회의 아카이브로 모두가 일관성을 유지하도록 하세요.",
      feature3Benefit1: "누구와나 전사본 공유",
      feature3Benefit2: "원본 녹음 듣기",
      feature3Benefit3: "다양한 형식으로 대본 내보내기",
      feature3Benefit4: "팀 전체 검색 가능한 아카이브",
      feature3Visual1: "팀 멤버",
      feature3Visual2: "무제한 협업",
      feature4Title: "모든 대화 즉시 찾기",
      feature4Desc: "모든 회의를 한 번에 검색하세요. 지난 분기의 중요한 결정이나 몇 달 전의 클라이언트 요구사항을 찾아보세요. AI 기반 검색은 키워드뿐만 아니라 문맥도 이해합니다.",
      feature4Benefit1: "모든 회의 한 번에 검색",
      feature4Benefit2: "AI가 문맥을 이해",
      feature4Benefit3: "발언자 또는 날짜별 필터",
      feature4SearchPlaceholder: "🔍 검색: 'Q4 매출 목표'",
      feature4SearchResults: "3개 회의에서 발견:",
      feature4Meeting1: "영업 계획 - 10월 15일",
      feature4Meeting1Text: '"...Q4 목표를 200만 달러로 설정..."',
      feature4Meeting2: "이사회 - 10월 20일",
      feature4Meeting2Text: '"...Q4 매출 예상..."',
      workflowTitle: "Zoom 녹음을",
      workflowSubtitle: "모든 중요한 순간을 포착하는 원활한 워크플로",
      workflowStep1Title: "녹음 또는 업로드",
      workflowStep1Desc: "실시간 녹음을 시작하거나 Zoom, Google Meet, Microsoft Teams에서 회의 녹음을 간편하게 다운로드하세요.",
      workflowStep2Title: "자동 변환",
      workflowStep2Desc: "AI가 몇 분 만에 96% 정확도로 녹음을 텍스트로 자동 변환합니다.",
      workflowStep3Title: "협업",
      workflowStep3Desc: "공유, 댓글 달기, 액션 아이템 추출",
      workflowStep4Title: "검색 및 분석",
      workflowStep4Desc: "모든 회의에서 인사이트 발견",
      testimonialsTitle: "팀이 사랑하는",
      testimonialsSubtitle: "기업이 회의 문화를 변화시키는 방법 확인",
      testimonial1Text: '"중요한 세부 사항을 놓치던 시절에서 모든 대화가 검색 가능한 아카이브로 바뀌었습니다. 직접 녹음 기능으로 중요한 논의를 절대 놓치지 않습니다."',
      testimonial1AuthorName: "제임스 킴",
      testimonial1AuthorRole: "테크코프 제품 매니저",
      testimonial2Text: '"Otter는 월 10개 파일 업로드만 허용했습니다. 이제 모든 고객 통화를 즉시 업로드합니다. 영업팀의 후속 작업에 게임 체인저입니다."',
      testimonial2AuthorName: "사라 로드리게스",
      testimonial2AuthorRole: "컨설트프로 영업 디렉터",
      testimonial3Text: '"몇 달치 회의를 검색할 수 있는 기능이 감사 기간에 우리를 구했습니다. 모든 결정과 승인을 몇 초 만에 찾았습니다."',
      testimonial3AuthorName: "마크 리우",
      testimonial3AuthorRole: "파이낸스허브 COO",
      ctaTitle: "중요한 대화를 잃지 마세요",
      ctaSubtitle: "무제한 변환으로 모든 회의를 기록하는 수천 개의 팀에 합류하세요",
      ctaButton: "무료로 녹음 시작 →",
        featuresTitle2: "회의",
        workflowTitle2: "텍스트로 변환하는 방법",
        testimonialsTitle2: "NeverCap"
    },
    Educators: {
      heroBadge: "교육자 및 교사용",
      heroTitle1: "학습을",
      heroTitle2: "모두에게 접근 가능하게",
      heroSubtitle: "YouTube 링크를 붙여넣기만 하면 자동 생성 자막과 함께 즉시 대본을 얻을 수 있습니다. 강의, 튜토리얼, 교육용 동영상을 모든 학생이 학습할 수 있는 검색 가능한 콘텐츠로 변환하세요.",
      heroCtaPrimary: "무료로 사용해보기 - 신용카드 불필요",
      heroCtaSecondary: "데모 보기",
      stats1Number: "1-클릭",
      stats1Label: "YouTube 변환",
      stats2Number: "100+",
      stats2Label: "지원 언어",
      stats3Number: "∞",
      stats3Label: "무제한 동영상",
      stats4Number: "96%",
      stats4Label: "정확도",
      featuresTitle: "교육자를 위한 모든 것",
      featuresSubtitle: "YouTube 강의부터 녹화 수업까지, 모든 콘텐츠를 접근 가능하게",
      feature1Title: "YouTube 및 플랫폼 링크 즉시 변환",
      feature1Desc: "어떤 동영상 링크든 붙여넣기만 하면 즉시 자막 생성. YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive 등과 호환. 다운로드나 대기 없이 이용 가능.",
      feature1Point1: "직접 링크 변환 - 다운로드 불필요",
      feature1Point2: "모든 주요 플랫폼 지원",
      feature1Point3: "전체 재생목록 한 번에 처리",
      feature1Point4: "비공개 동영상도 가능(권한 있는 경우)",
      feature2Title: "자동 자막 & 자막 생성",
      feature2Desc: "교육용 동영상을 위한 정확한 자막 즉시 생성. 청각 장애 학생, 비원어민 또는 읽기를 선호하는 학생들을 위해 콘텐츠를 접근 가능하게.",
      feature2Point1: "SRT, VTT 및 TXT 내보내기 형식",
      feature2Point2: "완벽한 싱크를 위한 단어 단위 타임스탬프",
      feature2Point3: "자막 쉽게 편집 및 맞춤 설정",
      feature2Point4: "YouTube에 직접 업로드",
      feature2Visual1: "언어 번역",
      feature2Visual2: "콘텐츠를 전 세계적으로 접근 가능하게",
      feature3Title: "강좌 및 카테고리별 정리",
      feature3Desc: "강좌, 주제 또는 학기별로 폴더를 생성하여 자막을 정리하세요. 모든 교육 콘텐츠를 깔끔하게 분류하고 쉽게 검색 가능하게. 접근 가능한 강좌 자료의 포괄적인 라이브러리 구축.",
      feature3Point1: "무제한 폴더 및 하위 폴더 생성",
      feature3Point2: "주제 또는 난이도별로 동영상 태그 지정",
      feature3Point3: "여러 자막 일괄 정리",
      feature3Point4: "모든 콘텐츠 즉시 검색",
      feature3VisualTitle: "강좌 라이브러리",
      feature3Folder1: "수학 101",
      feature3Folder2: "물리학 강의",
      feature3Folder3: "생물학 실험 동영상",
      feature3Folder4: "역사 다큐멘터리",
      feature3Folder5: "언어 학습",
      feature4Title: "AI 오디오 파일을 학습 가이드로 변환",
      feature4Desc: "단순히 녹음 파일을 공유하지 마세요. 강의 및 기타 오디오 파일을 자동으로 텍스트로 변환하고 요약 및 주요 개념이 포함된 상세한 학습 가이드로 만들어 학생들의 효과적인 복습을 지원하세요. TXT, DOCX 또는 PDF 형식으로 내보내기 가능.",
      feature4Point1: "간단한 텍스트 편집을 위한 TXT",
      feature4Point2: "서식 있는 문서를 위한 DOCX",
      feature4Point3: "쉬운 공유 및 인쇄를 위한 PDF",
      feature4Point4: "여러 파일 일괄 내보내기",
      workflowTitle: "작동 방식:",
      workflowSubtitle: "동영상 링크부터 접근 가능한 자막 및 학습 자료까지 몇 분 안에",
      workflowStep1Title: "강의 업로드",
      workflowStep1Desc: "오디오 또는 동영상 파일(MP3, MP4, WAV) 업로드 또는 YouTube 링크 붙여넣기",
      workflowStep2Title: "AI 자막 생성",
      workflowStep2Desc: "AI가 오디오를 변환하고 화자를 분리하며 주요 주제를 식별합니다.",
      workflowStep3Title: "자막 생성",
      workflowStep3Desc: "완벽하게 싱크된 자막 자동 생성",
      workflowStep4Title: "학습 가이드 내보내기",
      workflowStep4Desc: "텍스트, 요약을 다운로드하거나 최종 학습 가이드를 생성해 내보내세요",
      useCasesTitle: "모든",
      useCasesSubtitle: "교육자들이 NeverCap으로 학습 효과를 높이는 방법 확인하기",
      useCase1Title: "녹화 강의",
      useCase1Text: "한 학기 분량의 녹화 강의를 텍스트로 변환하세요. 학생들은 특정 주제를 검색하고 핵심 개념을 복습하며 중요한 정보를 놓치지 않을 수 있습니다.",
      useCase2Title: "온라인 강의",
      useCase2Text: "100개 이상의 언어로 번역하여 국제 학생들이 온라인 강의를 이용할 수 있도록 하세요. 등록률과 만족도를 높이세요.",
      useCase3Title: "학습 자료",
      useCase3Text: "AI를 사용해 비디오 강의와 튜토리얼의 오디오 파일을 학습 가이드로 변환하세요. 읽기를 선호하거나 검색 가능한 텍스트로 빠르게 복습해야 하는 학생들에게 완벽합니다.",
      useCase4Title: "접근성 준수",
      useCase4Text: "모든 비디오 콘텐츠에 자막과 텍스트를 제공하여 접근성 요구 사항을 충족하세요. 모든 학생이 동등하게 이용할 수 있도록 보장합니다.",
      useCase5Title: "플립드 클래스룸",
      useCase5Text: "수업 전에 텍스트가 포함된 비디오 강의를 공유하세요. 학생들은 자신의 속도로 복습하고 토론에 준비된 상태로 올 수 있습니다.",
      useCase6Title: "연구 및 인용",
      useCase6Text: "타임스탬프로 학생들이 비디오 출처를 정확하게 인용할 수 있도록 도와주세요. 연구 프로젝트와 학술 논문에 완벽합니다.",
      testimonialTitle: "신뢰받는",
      testimonialSubtitle: "전 세계 교사들이 NeverCap을 선택하는 이유 알아보기",
      testimonialText: '"저는 NeverCap을 사용해 수학 튜토리얼 YouTube 채널 전체를 텍스트로 변환하고 있습니다. 다른 서비스로는 몇 주가 걸리던 작업이 이제는 몇 시간이면 됩니다. 링크를 직접 붙여넣고 즉시 텍스트를 얻을 수 있는 기능은 접근성 있는 콘텐츠를 만드는 방식을 완전히 바꿔놓았습니다. 특히 국제 학생들은 다국어 자막을 정말 좋아합니다!"',
      testimonialAuthorName: "Karen Mitchell 교수",
      testimonialAuthorRole: "수학 교수, 온라인 교육자",
      ctaTitle: "모든 교육 콘텐츠를 접근 가능하게 만들기",
      ctaSubtitle: "진정한 무제한 텍스트 변환을 사용하는 수천 명의 교육자들과 함께하세요",
      ctaButton: "NeverCap 무료로 사용해보기",
        featuresTitle2: "동영상 자막 생성",
        grid: "오디오 파일을 학습 가이드로",
        useCasesTitle2: "교육적 필요에 완벽한",
        testimonialTitle2: "50,000명 이상의 교육자"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "YouTube 동영상을 MP4로 다운로드",
        "placeholder": "YouTube 링크를 검색하거나 여기에 붙여넣기",
        "clear_icon": "입력 지우기",
        "Download": "다운로드",
        "loading_text": "다운로드할 링크를 처리 중입니다. 페이지를 유지해 주세요.",
        "howToDownload": "다운로드 방법은?",
        "tutorial": "튜토리얼 보기"
      },
      part2: {
        "title": "YouTube 동영상을 3단계로 MP4 파일로 변환하는 방법",
        "steps": [
                {
                  title: "URL 복사",
                  content: "원하는 YouTube 동영상을 열고 브라우저 주소 표시줄에서 링크를 복사하세요."
                },
                {
                  title: "링크 붙여넣기",
                  content: "동영상 다운로드 도구로 이동하여 URL을 입력란에 붙여넣으세요."
                },
                {
                  title: "MP4 다운로드",
                  content: "처리 완료 후 다운로드 버튼을 눌러 MP4 파일을 저장하세요."
                }
              ]
      },
      part3: {
        content: [
                "오프라인에서 YouTube 동영상을 보고 싶을 때가 있나요?",
                "지하철에서 출근할 때, 비행기를 탈 때, 중요한 튜토리얼을 공부할 때, 기술 습득 콘텐츠를 깊이 있게 보거나 중요한 동영상 자료를 보관할 때 — 안정적인 오프라인 접근이 어려운 경우가 많습니다. 바로 여기서 우리의 다운로더가 빛을 발합니다.",
                "이 다운로더를 사용하면 YouTube 동영상을 빠르고 쉽게 MP4 형식으로 변환하여 다운로드할 수 있습니다. 기기에 저장하고 언제든 시청하세요.",
                "이 과정은 빠르고 간단하며 번거로움이 없습니다. 다운로드 후 인터넷 없이도 어디서든 좋아하는 동영상을 즐기세요."
              ]
      },
      part4: {
        content: ["다운로드의 5가지 주요 이점", "YouTube 동영상을 MP4 파일로"],
        list: [
                {
                  title: "데이터 비용 절약:",
                  content: "일반적으로 YouTube에서 동영상을 보는 것은 많은 모바일 데이터를 소모합니다. 오프라인 시청을 위해 다운로드하면 이러한 불필요한 비용을 피할 수 있습니다."
                },
                {
                  title: "어디서나, 언제든 시청:",
                  content: "인터넷 연결이 불안정해도 동영상을 끊김 없이 즐기세요. 버퍼링 걱정은 이제 그만."
                },
                {
                  title: "손쉬운 보관 및 저장:",
                  content: "동영상을 MP4로 저장하면 개인 컬렉션을 쉽게 구축할 수 있습니다. 특히 가치 있거나 중요한 콘텐츠에 유용합니다."
                },
                {
                  title: "간편한 공유:",
                  content: "링크를 보내는 것보다 MP4 파일을 공유하는 것이 훨씬 편리합니다. WhatsApp이나 Instagram과 같은 앱으로 동영상 파일을 직접 보낼 수 있어 YouTube를 열어야 하는 번거로움을 줄일 수 있습니다."
                },
                {
                  title: "즉시 시청, 함께하는 순간:",
                  content: "친구나 가족에게 좋아하는 동영상을 보여주고 싶나요? MP4를 다운로드하면 로딩을 기다리는 불편함 없이 바로 함께 부드럽게 시청할 수 있습니다."
                }
              ]
      },
      part5: {
        title: "우리 다운로더의 차별화된 점",
        cards: [
                {
                  title: "원클릭 간편함",
                  content: "쉬운 설정과 직관적인 작동."
                },
                {
                  title: "초고속, 무제한",
                  content: "최고 속도로 변환 및 다운로드 — 제한 없음."
                },
                {
                  title: "즉시 변환",
                  content: "파일을 즉시 처리하며 기다릴 필요 없음."
                },
                {
                  title: "광고 없음, 방해 없음",
                  content: "팝업, 배너, 방해 요소 없는 깔끔한 인터페이스로 원활한 동영상 변환을 경험하세요."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "원본 품질 보장",
                  content: "다운로드한 파일은 원본 동영상의 해상도를 그대로 유지하여 언제나 선명한 재생이 가능합니다."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "어디서나 작동",
                  content: "모든 브라우저와 기기에서 완벽 호환."
                }
              ]
      },
      part6: {
        title: ["YouTube 동영상 다운로드 극대화", "다운로더와 함께"],
        content: [
                "간편한 YouTube to MP4 변환: 빠르고 간단하며 무료.",
                "바로 이것이 우리의 강점입니다. 사용자 친화적인 인터페이스로 누구나 쉽게 사용할 수 있습니다. 기술적 지식이 필요 없으며, 경험 수준에 관계없이 즉시 동영상을 변환할 수 있습니다. 회원가입 불필요: 바로 필요한 것을 얻으세요.",
                "안심하세요 — 다운로드한 MP4는 YouTube에서 본 것과 동일한 원본 품질과 선명도를 유지합니다.",
                "어디서나 작동합니다. 모든 주요 플랫폼과 기기에서 완벽 호환됩니다. Windows, macOS, Linux, Android, iOS — 스마트폰, 태블릿, 데스크톱을 사용하든 관계없이 원활하게 동영상을 다운로드할 수 있습니다."
              ]
      },
      part7: {
        title: "YouTube 동영상 다운로드 주요 질문",
        list: [
                {
                  question: "저작권이 있는 YouTube 동영상을 다운로드할 수 있나요?",
                  answer: "저작권 소유자의 허가 없이 저작권이 있는 YouTube 동영상을 다운로드하는 것은 불법입니다."
                },
                {
                  question: "이 다운로드 도구는 안전한가요?",
                  answer: "예, 안전하고 신뢰할 수 있습니다. 사용자의 개인 정보를 요구하지 않으며 바이러스에 대한 강력한 대책을 마련하고 있습니다. 인터넷에서 파일을 다운로드할 때는 항상 주의를 기울이세요: 의심스러운 링크를 클릭하거나 문제가 있는 파일을 다운로드하지 마세요."
                },
                {
                  question: "YouTube to MP4 다운로드는 어떤 언어를 지원하나요?",
                  answer: "우리 서비스는 모든 인기 언어로 YouTube 동영상을 다운로드할 수 있도록 지원합니다."
                },
                {
                  question: "YouTube 동영상 다운로드 시간에 영향을 주는 요소는 무엇인가요?",
                  answer: "우리는 최대한 빠른 다운로드 환경을 제공하지만, 다운로드 시간은 동영상 길이와 인터넷 연결 속도와 같은 요소에 따라 영향을 받습니다."
                },
                {
                  question: "스마트폰으로 MP4 동영상을 다운로드하면 어디에 저장되나요?",
                  answer: '스마트폰에서 MP4를 다운로드한 후에는 일반적으로 기기의 파일 관리자 앱 내 "다운로드" 폴더에서 찾을 수 있습니다.'
                },
                {
                  question: "YouTube 동영상을 MP4로 다운로드하면 화질이 떨어지나요?",
                  answer: "아닙니다. 우리 도구를 사용하여 YouTube 동영상을 MP4로 다운로드하면 원본 화질이 유지됩니다. 변환 과정에서 원본 품질이 보존되므로 YouTube에서와 동일한 시청 경험을 할 수 있습니다."
                }
              ]
      },
        err1: "YouTube 링크 형식 오류입니다.",
        err2: "죄송합니다! 현재 YouTube 링크만 지원합니다. 다른 사이트 지원이 필요한 경우, 추가되면 알려드리겠습니다.",
        videoDownload: {
              title: "YouTube 동영상을 MP4로 다운로드하세요. 무료, 빠르고 광고 없음.",
              description: "저희 서비스를 선택해 주셔서 감사합니다! 신뢰에 깊이 감사드리며 더 좋은 경험이 되었기를 바랍니다. 친구들에게 저희 웹사이트를 공유해 주시면 큰 도움이 됩니다.",
              downloadButton: "다운로드",
              downloadError: "다운로드 오류."
            }
    }
  },
  About: {
    Hero: {
      "badge": "업계 최고의 AI 기술",
      "title": "소개",
      "highlighted_text": "NeverCap",
      "description": "우리의 미션은 가장 정확한 오디오 및 비디오 필사 서비스를 제공하는 것입니다. 업계 최고의 AI 기술을 활용하여 96% 이상의 필사 정확도를 달성합니다. 주요 언어의 경우 기술 최적화를 통해 99% 정확도까지 도달할 수 있습니다."
    },
    Stats: {
      "title": "우리의",
      "highlighted_text": "영향력",
      "subtitle": "최첨단 AI 기술로 글로벌 커뮤니케이션을 강화합니다",
      "metrics": [
            {
              "value": "96%+",
              "label": "정확도",
              "description": "고급 AI로 구현한 업계 최고 수준의 필사 정확도"
            },
            {
              "value": "100+",
              "label": "지원 언어",
              "description": "글로벌 콘텐츠를 위한 음성 인식"
            },
            {
              "value": "249+",
              "label": "번역 언어",
              "description": "필사된 텍스트를 거의 모든 언어로 번역"
            }
          ]
    },
    Mission: {
      "title": "왜",
      "highlighted_text": "NeverCap을 선택해야 할까요?",
      "subtitle": "우리는 언어 장벽을 허물고 모든 사람이 콘텐츠에 접근할 수 있도록 하는 것을 믿습니다",
      "features": [
            {
              "icon": "🎯",
              "title": "비교 불가능한 정확도",
              "description": "우리의 AI 모델은 지속적으로 개선되어 96% 이상의 필사 정확도를 제공하며, 고급 최적화를 통해 주요 언어는 99% 정확도까지 달성합니다."
            },
            {
              "icon": "🌍",
              "title": "글로벌 언어 지원",
              "description": "100개 이상의 언어 음성 인식과 249개 이상의 언어 번역 기능을 지원하여 당신의 콘텐츠를 진정한 글로벌 콘텐츠로 만듭니다."
            },
            {
              "icon": "⚡",
              "title": "번개 같은 처리 속도",
              "description": "몇 시간 분량의 오디오 및 비디오 콘텐츠를 몇 분 만에 처리합니다. 최적화된 AI 파이프라인이 품질 저하 없이 빠르게 필사 결과를 제공합니다."
            },
            {
              "icon": "🔒",
              "title": "기업급 보안",
              "description": "당신의 데이터 보안은 우리의 최우선 과제입니다. 업계 표준 암호화를 사용하고 글로벌 개인정보 보호 규정을 준수하여 콘텐츠를 안전하고 기밀하게 유지합니다."
            }
          ]
    },
    Company: {
      "title": "회사",
      "highlighted_text": "정보",
      "subtitle": "궁금한 점이나 지원이 필요하면 연락주세요",
      "details": [
            {
              "label": "회사명",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "본사",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "미국"]
            },
            {
              "label": "문의하기",
              "value": ["이메일", "연중무휴 24/7 지원"]
            }
          ]
    },
    CTA: {
      "title": "차이를 경험할 준비가 되셨나요?",
      "subtitle": "필사 서비스로 NeverCap을 신뢰하는 수천 명의 전문가와 함께하세요",
      "button": "NeverCap 무료 체험하기 →",
      "disclaimer": "신용카드 불필요 • 몇 초 만에 녹음 시작"
    }
  },
  Privacy: {
    title: "개인정보",
    titleGradient: "보호정책",
    subtitle: "당사가 개인정보를 수집, 사용, 보호하는 방법 알아보기",
    "lastUpdated": "최종 업데이트: {date}",
    "lastUpdatedDate": "2025년 7월 21일",
    "privacyPolicyTitle": "개인정보 처리방침",
    "policyAgreement": "본 개인정보 처리방침을 주의 깊게 읽고 이해하시기 바랍니다. 당사 서비스를 이용함으로써 귀하는 본 방침에 동의하는 것입니다. 본 방침에 따른 개인정보 사용에 동의하지 않을 경우 즉시 서비스 이용을 중지해야 합니다.",
    "policyOverview": "본 방침에서는 다음을 명시합니다: 수집하는 데이터 및 이유; 데이터 처리 방식; 귀하의 데이터 권리. 당사는 귀하의 데이터를 판매하지 않습니다.",
    "scopeTitle": "1. 개인정보 처리방침 범위",
    "scopeDescription": "본 개인정보 처리방침은 당사가 서비스 이용자 정보를 수집 및 처리하는 경우에만 적용됩니다. 본 방침은 당사가 연결을 제공하거나 다른 사용자가 공유한 제3자 운영 서비스, 웹사이트 또는 소프트웨어에는 적용되지 않으며, 제3자의 콘텐츠, 데이터, 애플리케이션 또는 자료에도 적용되지 않습니다. 제3자 웹사이트 또는 소프트웨어에 정보를 제공하기 전에 해당 개인정보 처리방침을 확인할 것을 권장합니다.",
    "collectionTitle": "2. 수집 정보 및 목적",
    "collectionPrinciple": "당사의 기본 원칙은 필요한 정보만 수집하는 것입니다. 실제 적용 사항은 다음과 같습니다:",
    "identityTitle": "2.1 신원 및 접근 정보",
    "identityDescription": "제품 가입 시 이름, 이메일 주소 등 신원 정보를 요청합니다. 이는 핵심 제품 기능 제공 및 제품 업데이트 등 필수 정보 전송을 위함입니다.",
    "billingTitle": "2.2 결제 정보",
    "billingDescription": "유료 제품 가입 시 결제 정보 및 청구 주소를 제공해야 합니다. 결제 정보는 당사 서버를 거치지 않고 결제 처리업체에 직접 전송됩니다.",
    "productInteractionsTitle": "2.3 제품 상호작용",
    "productInteractionsDescription": "귀하가 업로드하거나 수신하거나 제품 계정에서 유지하는 콘텐츠를 당사 서버에 저장합니다. 삭제하지 않는 한 계정이 활성 상태인 동안 이 콘텐츠를 보관할 수 있습니다.",
    "websiteInteractionsTitle": "2.4 웹사이트 상호작용",
    "websiteInteractionsDescription": "전환율 테스트 및 신제품 디자인 실험 등 분석 및 통계 목적으로 브라우징 활동 정보를 수집합니다. 여기에는 브라우저 및 운영체제 버전, IP 주소, 방문한 웹페이지 및 로딩 시간, 유입 경로 등이 포함됩니다. 계정이 있고 로그인한 경우, 이 웹 분석 데이터는 계정이 비활성화될 때까지 IP 주소 및 사용자 계정과 연결됩니다.",
    "cookiesTitle": "2.5 쿠키",
    "cookiesDescription1": "당사는 특정 기본 설정 저장, 애플리케이션 사용 편의 제공, A/B 테스트 수행 및 일부 분석 지원을 위해 지속적인 1자 쿠키와 일부 3자 쿠키를 사용합니다.",
    "cookiesDescription2": "쿠키는 브라우저가 저장하는 텍스트 조각입니다. 로그인 정보 및 사이트 기본 설정 기억에 도움이 될 수 있습니다. 또한 브라우저 유형, 운영체제, 방문한 웹페이지, 방문 시간, 본 콘텐츠 및 기타 클릭스트림 데이터와 같은 정보를 수집할 수 있습니다. 브라우저 설정에서 쿠키 보존 설정을 조정하고 개별 쿠키를 허용 또는 차단할 수 있지만, 쿠키를 끄면 당사 앱이 작동하지 않으며 서비스의 다른 측면이 제대로 기능하지 않을 수 있습니다.",
    "correspondenceTitle": "2.6 자발적 서신",
    "correspondenceDescription": "질문이나 도움 요청을 위해 당사에 이메일을 보낼 경우, 향후 문의 시 참조할 수 있도록 이메일 주소를 포함한 해당 서신을 보관합니다.",
    "accessTitle": "3. 정보 접근 또는 공유 시기",
    "accessDescription1": "요청한 제품 또는 서비스 제공을 위해. 당사는 일부 제3자 하위처리자를 사용하여 애플리케이션 운영 및 서비스 제공을 지원합니다. 여기에는 클라우드 및 분석 제공업체가 포함됩니다.",
    "accessDescription2": "남용 조사, 예방 또는 조치를 위해. 잠재적 남용 조사 시 고객 계정 접근은 최후의 수단입니다. 당사는 고객과 문제를 신고하는 사람들의 개인정보 보호와 안전을 보호하려 하며, 전 과정에서 이러한 책임을 균형 있게 수행하기 위해 최선을 다합니다. 제한된 목적으로 당사 제품을 사용하는 것이 발견될 경우, 필요한 조치를 취할 것이며 여기에는 적절한 경우 관련 당국에 통보하는 것도 포함됩니다.",
    "accessDescription3": "적용 가능한 법률에 따라 요구되는 경우.",
    "dataRequests": "사용자 데이터 요청. 당사의 정책은 법적 절차에 의하거나 긴급 요청 시 제한된 상황이 아닌 한 정부의 사용자 데이터 요청에 응답하지 않는 것입니다. 그러나 미국 법무 당국이 데이터 공유를 요구하는 필요한 영장, 형사 소환장 또는 법원 명령을 보유한 경우 당사는 이에 응해야 합니다. 마찬가지로, 당사는 상호 법률 지원 조약 또는 협약에 명시된 절차를 통해 미국 정부가 요구할 경우에만 미국 이외의 정부 기관 요청에 응답할 것입니다. 당사의 정책은 법적으로 금지되지 않는 한 데이터 공유 전에 영향을 받는 사용자에게 통지하는 것이며, 일부 긴급 경우를 제외합니다.",
    "preservationRequests": "데이터 보존 요청. 유사하게, 당사의 정책은 미국 연방 저장 통신법(18 U.S.C. Section 2703(f))에 의하거나 민사 사건에 대한 적절하게 발부된 미국 소환장에 의한 경우에만 데이터 보존 요청을 준수하는 것입니다. 당사는 법률에 의해 요구되거나 항소하지 않기로 선택한 법원 명령에 의하지 않는 한 보존된 데이터를 공유하지 않습니다. 또한, 필요한 보존 기간 만료 전에 적절한 영장, 법원 명령 또는 소환장을 받지 못할 경우, 당사는 보존 기간 종료 시 고객 데이터의 보존된 사본을 모두 파기할 것입니다.",
    "taxAudits": "세무 당국으로부터 감사를 받을 경우, 당사는 결제 관련 정보를 공유해야 할 수 있습니다. 이 경우 청구 주소 및 세금 면제 정보 등 최소한의 정보만 공유할 것입니다.",
    "securityTitle": "4. 데이터 보호 방법",
    "securityDescription": "모든 데이터는 당사 서버에서 귀하의 브라우저로 전송될 때 SSL/TLS로 암호화됩니다.",
    "deletionTitle": "5. 콘텐츠 삭제 시 발생하는 사항",
    "deletionDescription": "콘텐츠를 삭제할 경우 즉시 접근할 수 없게 됩니다.",
    "locationTitle": "6. 사이트 및 데이터 위치",
    "locationDescription": "당사 제품 및 기타 웹 자산은 미국에서 운영됩니다. 유럽 연합, 영국 또는 미국 이외의 지역에 위치한 경우, 당사에 제공하는 모든 정보가 미국으로 전송 및 저장된다는 점을 유의하시기 바랍니다. 당사 웹사이트 또는 서비스를 이용하거나 개인정보를 제공함으로써 귀하는 이 전송에 동의하는 것입니다.",
    "childrenTitle": "7. 아동 개인정보 보호",
    "updatesTitle": "8. 개인정보 처리방침 업데이트",
    "updatesDescription": "당사는 관련 규정을 준수하고 새로운 관행을 반영하기 위해 필요 시 본 방침을 업데이트할 수 있습니다. 방침에 중대한 변경을 할 때마다 본 페이지 상단의 날짜를 갱신할 것입니다.",
    "contactTitle": "9. 문의하기",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap",
    at: "：",
      policyDescription: '본 정책은 NeverCap(이하 "NeverCap", "저희", "우리"라 함)이 귀하가 저희 서비스, 웹사이트({url}) 및 소프트웨어(이하 총칭하여 "서비스")를 이용할 때 개인 정보를 수집, 사용 및 공개하는 방법을 설명합니다.',
      childrenDescription: "본 서비스는 어린이를 대상으로 하지 않으며, 13세 미만 어린이로부터 고의로 개인 정보를 수집하지 않습니다. 13세 미만인 경우, 서비스를 통해 어떠한 개인 정보도 제출하지 마십시오. 만약 어린이가 본 정책을 위반하여 저희에게 개인 정보를 제공했다고 생각되면, 아래에 명시된 {at} {email}로 문의해 주시기 바랍니다.",
      contactDescription: "개인정보 보호 정책에 관한 질문, 의견 또는 불만 사항이 있으시면 {at} {email}로 연락주시면 최대한 신속하게 처리하겠습니다."
},
  TermsOfUse: {
    title: "서비스",
    titleGradient: "약관",
    subtitle: "서비스 이용 전 아래 약관을 주의 깊게 읽어주세요",
    "lastUpdated": "마지막 업데이트: {date}",
    "lastUpdatedDate": "2025년 7월 21일",
    "termsOfServiceTitle": "서비스 약관",
    "thankYou": "저희 제품을 이용해 주셔서 감사합니다!",
    "companyDefinition": '본 문서에서 "회사", "우리", "저희"는 NeverCap을 지칭합니다.',
    "servicesDefinition": '"서비스"란 NeverCap이 제작 및 유지하는 웹 브라우저, 데스크톱 애플리케이션, 모바일 애플리케이션 등 모든 형태의 제품을 의미합니다.',
    "termsUpdate": "향후 서비스 약관을 업데이트할 수 있습니다. 일반적으로 변경 사항은 관련 정책 링크를 통해 명확히 설명됩니다. 정책에 중대한 변경이 있을 경우 본 페이지 상단의 날짜를 갱신하고 계정 소유자에게 적절한 방법으로 알릴 것입니다.",
    "acceptanceTitle": "1. 약관 동의",
    "acceptanceDescription1": "서비스를 이용함으로써 본 약관에 동의하는 것이며, 이는 귀하와 NeverCap 사이의 구속력 있는 계약이 됩니다. 귀하는 본 약관을 수락할 법적 권한이 있으며 계약 체결 가능한 연령임을 확인합니다. NeverCap의 수락은 귀하가 본 약관의 모든 조건에 동의하는 것을 전제로 합니다.",
    "eligibilityRequirement": "본 서비스는 18세 미만의 이용자를 대상으로 하지 않습니다. 서비스를 이용함으로써 귀하는 위 자격 요건을 충족함을 진술 및 보증합니다.",
    "userResponsibility": '"귀하", "귀하의"란 귀하의 직원, 대리인, 비즈니스 대표자 및 귀하의 계정을 통해 서비스에 접근하는 모든 개인을 포함합니다. 귀하는 귀하의 계정으로 서비스에 접근하는 모든 사람이 본 약관을 인지하고 준수하도록 할 책임이 있습니다.',
    "termsRevision": "NeverCap은 단독 재량으로 본 약관을 수시로 수정 및 업데이트할 권리를 가집니다. 모든 변경 사항은 게시 즉시 효력이 발생합니다. 수정된 약관 게시 후 서비스를 계속 이용함으로써 귀하는 변경 사항을 수락하고 동의하는 것입니다. 귀하는 본 페이지를 수시로 확인하여 변경 사항을 인지해야 하며, 이는 귀하에게 구속력이 있습니다.",
    "servicesTitle": "2. NeverCap 서비스",
    "servicesDescription1": "저희 서비스는 음성 대화를 검색, 번역, 공유 가능한 텍스트로 변환합니다.",
    "servicesOptions": '무료 버전("무료 서비스") 또는 유료 구독 버전("유료 서비스") 중 선택할 수 있습니다.',
    "servicesAccess": "저희는 귀하에게 서비스를 제공할 것입니다. 귀하는 서비스 이용에 필요한 모든 준비를 할 책임이 있습니다.",
    "accountTermsTitle": "3. 계정 조건",
    "accountSecurity": "귀하는 계정 보안 유지에 대한 책임이 있습니다. 회사는 귀하가 이 보안 의무를 준수하지 않아 발생하는 모든 손실 또는 손해에 대해 책임지지 않습니다.",
    "lawfulUse": "서비스를 불법적, 비윤리적 또는 부도덕한 목적으로 사용해서는 안 됩니다.",
    "contentResponsibility": "귀하의 계정 아래 게시된 모든 콘텐츠 및 발생한 활동에 대한 책임이 있습니다. 이는 (a) 귀하의 로그인 정보에 접근할 수 있는 자 또는 (b) 귀하의 계정 아래 자신의 로그인을 가진 자가 게시한 콘텐츠를 포함합니다.",
    "humanRequirement": '귀하는 반드시 인간이어야 합니다. "봇" 또는 기타 자동화된 방법으로 등록된 계정은 허용되지 않습니다.',
    "paymentTitle": "4. 결제, 환불 및 요금제 변경",
    "freeTrial": "무료 체험을 제공하는 유료 서비스의 경우, 가입 시 체험 기간을 안내해 드립니다. 체험 기간 종료 후 서비스를 계속 이용하려면 사전 결제가 필요합니다. 결제하지 않을 경우 해당 서비스는 종료됩니다.",
    "upgradePolicy": "무료 요금제에서 유료 요금제로 업그레이드하는 경우, 즉시 카드 결제가 이루어지며 결제 주기는 업그레이드 날짜부터 시작됩니다.",
    "taxes": "모든 요금은 세금, 부과금 또는 관세를 포함하지 않습니다. 필요한 경우, 저희는 세무 당국을 대신하여 해당 세금을 징수하여 납부할 것입니다. 그렇지 않은 경우, 귀하는 모든 세금, 부과금 또는 관세를 납부할 책임이 있습니다.",
    "refunds": "모든 구매는 환불이 불가능합니다. 귀하는 언제든지 계정에 로그인하여 유료 서비스를 취소할 수 있습니다. 유료 구독의 경우, 별도로 명시되지 않는 한 취소는 현재 유료 기간 종료 시점에 효력이 발생합니다.",
    "cancellationTitle": "5. 해지 및 종료",
    "cancellationPolicy": "유료 기간 종료 전 서비스를 해지하는 경우, 해지는 즉시 효력이 발생하며 재결제되지 않습니다. 마지막 결제 주기의 미사용 기간에 대해서는 자동으로 비례 환불되지 않습니다.",
    "terminationRights": "저희는 언제든지 어떠한 이유로든 귀하의 계정을 정지 또는 종료하고 현재 또는 향후 서비스 이용을 거부할 권리를 가집니다. 정지는 계정 또는 계정 내 콘텐츠에 접근할 수 없음을 의미합니다. 종료는 계정 삭제 또는 접근 권한 상실 및 계정 내 모든 콘텐츠의 몰수와 포기를 초래합니다. 또한 저희는 언제든지 어떠한 이유로든 누구에게나 서비스 이용을 거부할 권리를 보유합니다.",
    "abusePolicy": "회사 직원 또는 임원에 대한 언어적, 신체적, 서면적 또는 기타 학대(학대 또는 보복 위협 포함)는 즉시 계정 종료로 이어질 수 있습니다.",
    "submissionsTitle": "6. 제출물",
    "submissionsDescription": '귀하가 저희에게 제공한 사이트 관련 질문, 의견, 제안, 아이디어, 피드백 또는 기타 정보("제출물")는 비밀 유지되지 않으며 저희의 단독 소유물이 됨을 인정 및 동의합니다. 저희는 모든 지적 재산권을 포함한 독점적 권리를 가지며, 귀하에 대한 인정 또는 보상 없이 합법적 목적(상업적 또는 기타)으로 이러한 제출물을 무제한 사용 및 배포할 권리가 있습니다. 귀하는 모든 도덕적 권리를 포기하며, 제출물이 귀하의 창작물이거나 제출할 권리가 있음을 보증합니다. 귀하는 제출물에 대한 소유권 침해 또는 도용에 대해 저희에게 소송을 제기하지 않기로 동의합니다.',
    "uptimeTitle": "7. 가동 시간 및 보안",
    "serviceAvailability": '서비스 이용은 전적으로 귀하의 책임 하에 이루어집니다. 저희는 서비스를 "있는 그대로" 및 "이용 가능한 상태로" 제공합니다. 대부분의 서비스에 대해 서비스 수준 계약을 제공하지 않지만, 애플리케이션 가동 시간을 중요하게 생각합니다.',
    "throttlingPolicy": "귀하의 활동이 다른 사용자에게 서비스의 안정성과 성능에 부정적 영향을 미치는 것으로 확인되는 드문 경우, 계정 접근을 일시적으로 제한할 권리를 보유합니다. 가장 중요한 경우를 제외하고는 조치 전에 귀하에게 연락하여 해결책을 모색할 것입니다.",
    "dataSecurity": "백업, 중복화 및 암호화를 통해 데이터를 보호하고 보안을 유지하기 위해 다양한 조치를 취하고 있습니다. 공용 인터넷을 통한 데이터 전송 시 암호화를 적용합니다.",
    "thirdPartyVendors": "서비스 운영에 필요한 하드웨어, 소프트웨어, 네트워킹, 저장장치 및 관련 기술을 제공하기 위해 제3자 공급업체 및 호스팅 파트너를 이용합니다.",
    "siteManagementTitle": "8. 사이트 관리",
    "siteManagementDescription": "저희는 다음의 권리를 보유하지만 의무는 아닙니다: (1) 사이트에서 본 서비스 약관 위반을 모니터링; (2) 법률 또는 본 서비스 약관을 위반하는 자에 대해 단독 재량으로 적절한 법적 조치(해당 사용자를 법 집행 기관에 신고하는 것 포함)를 취함; (3) 단독 재량으로 귀하의 기여물 또는 그 일부에 대한 접근 거부, 제한 또는 비활성화(기술적으로 가능한 범위 내); (4) 단독 재량으로 사이트에서 과도한 크기 또는 시스템에 부담을 주는 파일 및 콘텐츠 제거 또는 비활성화; (5) 저희의 권리와 재산을 보호하고 사이트의 원활한 운영을 위해 사이트를 관리.",
    "copyrightTitle": "9. 저작권 및 콘텐츠 소유권",
    "copyrightCompliance": "서비스에 게시된 모든 콘텐츠는 미국 저작권법을 준수해야 합니다.",
    "ipRights": "귀하가 서비스에 제공한 자료에 대한 지적 재산권을 주장하지 않습니다. 업로드된 모든 자료는 귀하의 소유입니다.",
    "contentModeration": "콘텐츠를 사전 검토하지는 않지만, 서비스를 통해 이용 가능한 콘텐츠를 거부 또는 제거할 권리(의무는 아님)를 보유합니다.",
    "prohibitedExploitation": "회사의 서면 허가 없이 서비스의 일부, 서비스 이용 또는 서비스 접근을 복제, 복사, 판매, 재판매 또는 이용하지 않기로 동의합니다.",
    "impersonationProhibition": "다른 웹사이트를 수정하여 서비스 또는 회사와 연관이 있는 것처럼 오인하게 해서는 안 됩니다.",
    "dmcaPolicy": "저희는 타인의 지적 재산권을 존중합니다. 사이트에서 제공되는 자료가 귀하의 저작권을 침해한다고 생각되면 즉시 저희에게 연락하십시오. 귀하의 통지서 사본은 해당 자료를 게시 또는 저장한 자에게 전송됩니다. 관련 법률에 따라 통지서에 허위 진술을 할 경우 손해 배상 책임을 질 수 있음을 유의하십시오. 따라서 사이트에 게시되거나 링크된 자료가 귀하의 저작권을 침해하는지 확실하지 않은 경우, 먼저 변호사와 상담하는 것이 좋습니다.",
    "prohibitedActivitiesTitle": "10. 금지 활동",
    "generalProhibition": "당사가 사이트를 제공하는 목적 이외의 용도로 사이트에 접근하거나 사용할 수 없습니다. 당사가 특별히 승인하지 않는 한 사이트를 상업적 목적으로 사용할 수 없습니다.",
    "userObligations": "사이트 사용자로서 다음 행위에 동의하지 않습니다:",
    "dataScraping": "당사의 서면 허가 없이 체계적으로 데이터 또는 기타 콘텐츠를 검색하여 직접 또는 간접적으로 컬렉션, 컴파일레이션, 데이터베이스 또는 디렉토리를 생성하거나 편집하는 행위",
    "fraud": "당사 및 다른 사용자를 속이거나 기만하는 행위, 특히 사용자 비밀번호와 같은 민감한 계정 정보를 알아내려는 시도",
    "securityInterference": "사이트의 보안 관련 기능을 우회, 비활성화 또는 방해하는 행위. 이는 콘텐츠 사용 또는 복사를 방지/제한하는 기능이나 사이트 및/또는 해당 콘텐츠 사용에 대한 제한을 시행하는 기능을 포함합니다.",
    "defamation": "당사의 판단에 따라 당사 및/또는 사이트의 평판을 훼손하거나 손해를 입히는 행위",
    "harassment": "사이트에서 얻은 정보를 사용하여 다른 사람을 괴롭히거나 학대하는 행위",
    "supportAbuse": "지원 서비스를 부적절하게 사용하거나 오남용 또는 부적절한 행위에 대한 허위 보고를 제출하는 행위",
    "legalCompliance": "적용 가능한 법률 또는 규정과 일치하지 않는 방식으로 사이트를 사용하는 행위",
    "framingProhibition": "사이트에 대한 무단 프레이밍 또는 링크를 설정하는 행위",
    "malware": "바이러스, 트로이 목마 또는 기타 자료를 업로드하거나 전송(시도 포함)하는 행위. 이는 대문자 과도한 사용 및 스팸(반복적인 텍스트 지속적 게시)을 포함하며, 사이트의 원활한 사용을 방해하거나 사이트의 사용, 기능, 운영 또는 유지 관리에 영향을 미치는 행위",
    "automation": "시스템의 자동화된 사용에 종사하는 행위. 이는 스크립트를 사용하여 댓글 또는 메시지를 보내거나 데이터 마이닝, 로봇 또는 유사한 데이터 수집 및 추출 도구를 사용하는 것을 포함합니다.",
    "copyrightRemoval": "콘텐츠에서 저작권 또는 기타 소유권 고지를 삭제하는 행위",
    "impersonation": "다른 사용자 또는 사람을 사칭하거나 다른 사용자의 사용자 이름을 사용하는 시도",
    "spyware": '수동적 또는 능동적 정보 수집 또는 전송 메커니즘으로 작용하는 자료를 업로드하거나 전송(시도 포함)하는 행위. 여기에는 명확한 그래픽 교환 형식(\"gifs\"), 1×1 픽셀, 웹 버그, 쿠키 또는 기타 유사한 장치(일반적으로 \"스파이웨어\" 또는 \"수동적 수집 메커니즘\" 또는 \"pcms\"로 알려진 것)가 포함됩니다.',
    "disruption": "사이트 또는 사이트에 연결된 네트워크/서비스에 과도한 부담을 주거나 방해하는 행위",
    "employeeHarassment": "사이트의 일부를 제공하는 당사 직원 또는 대리인을 괴롭히거나 협박하는 행위",
    "accessCircumvention": "사이트 또는 사이트의 일부에 대한 접근을 방지/제한하기 위해 설계된 조치를 우회하려는 시도",
    "codeCopying": "사이트의 소프트웨어를 복사하거나 수정하는 행위. 여기에는 Flash, PHP, HTML, JavaScript 또는 기타 코드가 포함되지만 이에 국한되지 않습니다.",
    "reverseEngineering": "적용 가능한 법률에서 허용하는 경우를 제외하고, 사이트의 일부를 구성하는 소프트웨어를 해독, 디컴파일, 디스어셈블 또는 리버스 엔지니어링하는 행위",
    "bots": "표준 검색 엔진 또는 인터넷 브라우저 사용의 결과일 수 있는 경우를 제외하고, 자동화된 시스템을 사용, 시작, 개발 또는 배포하는 행위. 여기에는 사이트에 접근하는 스파이더, 로봇, 치트 유틸리티, 스크레이퍼 또는 오프라인 리더가 포함되며, 무단 스크립트 또는 기타 소프트웨어를 사용/시작하는 행위도 포함됩니다.",
    "buyingAgents": "구매 대행인을 사용하여 사이트에서 구매하는 행위",
    "unauthorizedUse": "사이트를 무단으로 사용하는 행위. 여기에는 전자적 또는 기타 수단으로 사용자 이름 및/또는 이메일 주소를 수집하여 원치 않는 이메일을 보내거나, 자동화된 수단 또는 허위 전제로 사용자 계정을 생성하는 행위가 포함됩니다.",
    "competition": "당사와 경쟁하기 위한 노력의 일환으로 사이트를 사용하거나, 수익 창출 목적 또는 상업적 기업을 위해 사이트 및/또는 콘텐츠를 사용하는 행위",
    "advertising": "사이트를 사용하여 상품 또는 서비스를 광고하거나 판매 제안을 하는 행위",
    "profileTransfer": "프로필을 판매하거나 양도하는 행위",
    "featuresTitle": "11. 기능 및 버그",
    "featuresDescription": "당사는 자체 경험과 시간과 피드백을 공유한 고객의 경험을 바탕으로 서비스를 신중하게 설계합니다. 그러나 모든 사람을 만족시키는 서비스는 없습니다. 당사는 서비스가 귀하의 특정 요구 사항이나 기대를 충족할 것이라고 보장하지 않습니다.",
    "bugsDescription": "당사는 모든 기능을 출시 전에 테스트합니다. 모든 소프트웨어와 마찬가지로 당사 서비스에도 일부 버그가 있을 수밖에 없습니다. 당사는 보고된 버그를 추적하고 처리하며, 특히 보안 또는 개인정보 보호와 관련된 버그를 우선적으로 해결합니다. 보고된 모든 버그가 수정되는 것은 아니며, 완전히 오류가 없는 서비스를 보장하지 않습니다.",
    "correctionsTitle": "12. 수정",
    "informationAccuracy": "사이트에는 오타, 부정확성 또는 누락이 포함된 정보가 있을 수 있습니다. 여기에는 설명, 가격, 가용성 및 기타 다양한 정보가 포함됩니다. 당사는 사전 통지 없이 오류, 부정확성 또는 누락을 수정하고 사이트의 정보를 변경 또는 업데이트할 권리를 보유합니다.",
    "siteAvailability": "당사는 사이트가 항상 이용 가능할 것이라고 보장하지 않습니다. 하드웨어, 소프트웨어 또는 기타 문제가 발생하거나 사이트와 관련된 유지 보수가 필요할 수 있으며, 이로 인해 중단, 지연 또는 오류가 발생할 수 있습니다. 당사는 사전 통지 없이 언제든지 사이트를 변경, 수정, 업데이트, 중단 또는 기타 방식으로 수정할 권리를 보유합니다. 귀하는 사이트 가동 중단 또는 중지 기간 동안 사이트에 접근하거나 사용하지 못함으로 인해 발생하는 모든 손실, 손해 또는 불편에 대해 당사가 책임을 지지 않음에 동의합니다. 본 이용 약관의 어떠한 내용도 당사가 사이트를 유지 및 지원하거나 이와 관련된 수정, 업데이트 또는 릴리스를 제공할 의무가 있다고 해석되지 않습니다.",
    "userDataTitle": "13. 사용자 데이터",
    "userDataDescription": "당사는 사이트 성능 관리 및 귀하의 사이트 사용과 관련된 데이터를 유지합니다. 당사는 정기적으로 데이터를 백업하지만, 귀하가 전송한 데이터 또는 사이트를 사용하여 수행한 모든 활동과 관련된 데이터에 대해 귀하는 전적인 책임을 집니다. 귀하는 당사가 그러한 데이터의 손실 또는 손상에 대해 귀하에게 책임을 지지 않으며, 이로 인해 발생하는 모든 소송 권리를 포기함에 동의합니다.",
    "privacyPolicyTitle": "14. 개인정보 보호 정책",
    "liabilityTitle": "15. 책임",
    "liabilityIntroduction": "당사는 본 약관 전반에 걸쳐 책임에 대해 언급하지만, 한 섹션에 모두 명시합니다:",
    "liabilityWaiver": "귀하는 회사가 귀하 또는 제3자에 대해 법적 또는 형평상의 책임을 지지 않음을 명시적으로 이해하고 동의합니다. 이는 직접적, 간접적, 부수적, 이익 손실, 특별, 결과적, 징벌적 또는 예시적 손해를 포함하되 이에 국한되지 않으며, 이익, 평판, 사용, 데이터 또는 기타 무형의 손실에 대한 손해(회사가 그러한 손해의 가능성을 알고 있었더라도)로 인해 발생하는 경우에도 적용됩니다. 이러한 손해는 (1) 서비스 사용 또는 사용 불능; (2) 콘텐츠 및 자료의 오류, 실수 또는 부정확성; (3) 사이트 접근 및 사용으로 인한 모든 유형의 개인적 손상 또는 재산 피해; (4) 서비스를 통해 또는 서비스로부터 구매/획득한 상품, 데이터, 정보 또는 서비스 또는 수신된 메시지 또는 체결된 거래로 인해 발생한 대체 상품 및 서비스 조달 비용; (5) 당사의 보안 서버 및/또는 저장된 모든 개인 정보 및/또는 금융 정보에 대한 무단 접근 또는 사용; (6) 사이트와의 전송 중단 또는 중지; (7) 제3자가 사이트를 통해 전송할 수 있는 버그, 바이러스, 트로이 목마 등; (8) 콘텐츠 및 자료의 오류 또는 누락 또는 사이트를 통해 게시, 전송 또는 제공된 콘텐츠 사용으로 인한 모든 종류의 손실 또는 손해; (9) 서비스상의 제3자 진술 또는 행위; (10) 본 이용 약관 또는 서비스와 관련된 기타 사항으로 인해 발생하는 경우에도 적용됩니다. 이는 계약 위반, 불법 행위(적극적 또는 소극적 과실 포함) 또는 기타 책임 이론에 근거한 경우를 포함합니다.",
    "miscellaneousTitle": "16. 기타",
    "miscellaneousDescription": "본 이용 약관과 당사가 사이트에 게시한 모든 정책 또는 운영 규칙은 귀하와 당사 간의 완전한 합의와 이해를 구성합니다. 당사가 본 약관의 권리 또는 조항을 행사하지 않는다고 해도 해당 권리 또는 조항에 대한 포기로 간주되지 않습니다. 본 이용 약관은 법률이 허용하는 최대 한도 내에서 적용됩니다. 당사는 언제든지 권리와 의무의 전부 또는 일부를 타인에게 양도할 수 있습니다. 당사는 합리적인 통제 범위를 벗어난 원인으로 인한 손실, 손해, 지연 또는 조치 실패에 대해 책임을 지지 않습니다. 본 이용 약관의 조항 또는 조항의 일부가 불법, 무효 또는 집행 불가능한 것으로 판단되는 경우, 해당 조항 또는 일부는 본 이용 약관에서 분리 가능한 것으로 간주되며, 나머지 조항의 유효성과 집행 가능성에는 영향을 미치지 않습니다. 본 이용 약관 또는 사이트 사용의 결과로 귀하와 당사 간에 합작, 파트너십, 고용 또는 대리 관계가 생성되지 않습니다. 귀하는 본 이용 약관이 당사가 작성했다는 이유로 당사에 불리하게 해석되지 않음에 동의합니다. 귀하는 본 이용 약관의 전자적 형태와 당사자 서명 부재를 근거로 한 모든 방어권을 포기합니다.",
    "contactTitle": "17. 문의하기",
    "neverCap": "NeverCap",
    "site": "사이트",
    "services": "서비스",
    at: "：",
      trademarkProtection: "서비스의 이름, 외관 및 느낌은 회사에 저작권©이 있습니다. 모든 권리 보유. 회사의 명시적 서면 허가 없이 HTML, CSS, JavaScript 또는 시각적 디자인 요소의 일부를 복제, 복사 또는 재사용할 수 없습니다. 회사 로고 또는 서비스 로고를 홍보 목적으로 사용하려면 반드시 허가를 받아야 합니다. 로고 사용 요청은 {at} {email}로 이메일을 보내주십시오. 본 서비스 약관을 위반할 경우, 이 허가를 취소할 권리를 보유합니다.",
      privacyPolicyDescription: "저희는 데이터 개인 정보 보호와 보안을 중요시합니다. 저희 {policy}를 확인해 주십시오. 본 사이트를 이용함으로써 귀하는 본 서비스 약관에 포함된 개인정보 보호 정책에 동의하게 됩니다. 본 사이트는 미국에서 호스팅되고 있음을 유의하시기 바랍니다. 미국의 적용 법률과 다른 개인 데이터 수집, 사용 또는 공개에 관한 법률 또는 기타 요건이 있는 세계의 다른 지역에서 사이트에 접속하는 경우, 귀하는 사이트를 계속 사용함으로써 귀하의 데이터를 미국으로 이전하는 것이며, 귀하의 데이터가 미국으로 이전되어 처리되는 데 동의하는 것입니다.",
      contactDescription: "서비스 약관에 관한 질문이 있으시면 {at} {email}로 문의해 주십시오."
}
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
