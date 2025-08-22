const NationNameArr = [
  {
    "name": "Afrikaans",
    "abbr": "af"
  },
  {
    "name": "Albanian",
    "abbr": "sq"
  },
  {
    "name": "Arabic",
    "abbr": "ar"
  },
  {
    "name": "Armenian",
    "abbr": "hy"
  },
  {
    "name": "Assamese",
    "abbr": "as"
  },
  {
    "name": "Azerbaijani",
    "abbr": "az"
  },
  {
    "name": "Bashkir",
    "abbr": "ba"
  },
  {
    "name": "Basque",
    "abbr": "eu"
  },
  {
    "name": "Belarusian",
    "abbr": "be"
  },
  {
    "name": "Bengali",
    "abbr": "bn"
  },
  {
    "name": "Bosnian",
    "abbr": "bs"
  },
  {
    "name": "Breton",
    "abbr": "br"
  },
  {
    "name": "Bulgarian",
    "abbr": "bg"
  },
  {
    "name": "Myanmar",
    "abbr": "my"
  },
  {
    "name": "Catalan",
    "abbr": "ca"
  },
  {
    "name": "Chinese(Simplified)",
    "abbr": "zh"
  },
  {
    "name": "Croatian",
    "abbr": "hr"
  },
  {
    "name": "Czech",
    "abbr": "cs"
  },
  {
    "name": "Welsh",
    "abbr": "cy"
  },
  {
    "name": "Danish",
    "abbr": "da"
  },
  {
    "name": "Dutch",
    "abbr": "nl"
  },
  {
    "name": "English",
    "abbr": "en"
  },
  {
    "name": "Estonian",
    "abbr": "et"
  },
  {
    "name": "Faroese",
    "abbr": "fo"
  },
  {
    "name": "Finnish",
    "abbr": "fi"
  },
  {
    "name": "French",
    "abbr": "fr"
  },
  {
    "name": "Galician",
    "abbr": "gl"
  },
  {
    "name": "Georgian",
    "abbr": "ka"
  },
  {
    "name": "German",
    "abbr": "de"
  },
  {
    "name": "Greek",
    "abbr": "el"
  },
  {
    "name": "Gujarati",
    "abbr": "gu"
  },
  {
    "name": "Haitian Creole",
    "abbr": "ht"
  },
  {
    "name": "Hungarian",
    "abbr": "hu"
  },
  {
    "name": "Icelandic",
    "abbr": "is"
  },
  {
    "name": "Indonesian",
    "abbr": "id"
  },
  {
    "name": "Italian",
    "abbr": "it"
  },
  {
    "name": "Japanese",
    "abbr": "ja"
  },
  {
    "name": "Kannada",
    "abbr": "kn"
  },
  {
    "name": "Khmer",
    "abbr": "km"
  },
  {
    "name": "Korean",
    "abbr": "ko"
  },
  {
    "name": "Latin",
    "abbr": "la"
  },
  {
    "name": "Latvian",
    "abbr": "lv"
  },
  {
    "name": "Lithuanian",
    "abbr": "lt"
  },
  {
    "name": "Luxembourgish",
    "abbr": "lb"
  },
  {
    "name": "Macedonian",
    "abbr": "mk"
  },
  {
    "name": "Malagasy",
    "abbr": "mg"
  },
  {
    "name": "Malay",
    "abbr": "ms"
  },
  {
    "name": "Malayalam",
    "abbr": "ml"
  },
  {
    "name": "Maltese",
    "abbr": "mt"
  },
  {
    "name": "Marathi",
    "abbr": "mr"
  },
  {
    "name": "Mongolian",
    "abbr": "mn"
  },
  {
    "name": "Nepali",
    "abbr": "ne"
  },
  {
    "name": "Norwegian",
    "abbr": "no"
  },
  {
    "name": "Pashto",
    "abbr": "ps"
  },
  {
    "name": "Persian",
    "abbr": "fa"
  },
  {
    "name": "Polish",
    "abbr": "pl"
  },
  {
    "name": "Portuguese",
    "abbr": "pt"
  },
  {
    "name": "Punjabi",
    "abbr": "pa"
  },
  {
    "name": "Romanian",
    "abbr": "ro"
  },
  {
    "name": "Russian",
    "abbr": "ru"
  },
  {
    "name": "Sanskrit",
    "abbr": "sa"
  },
  {
    "name": "Serbian",
    "abbr": "sr"
  },
  {
    "name": "Shona",
    "abbr": "sn"
  },
  {
    "name": "Sindhi",
    "abbr": "sd"
  },
  {
    "name": "Sinhala",
    "abbr": "si"
  },
  {
    "name": "Slovak",
    "abbr": "sk"
  },
  {
    "name": "Slovenian",
    "abbr": "sl"
  },
  {
    "name": "Somali",
    "abbr": "so"
  },
  {
    "name": "Spanish",
    "abbr": "es"
  },
  {
    "name": "Swedish",
    "abbr": "sv"
  },
  {
    "name": "Tagalog",
    "abbr": "tl"
  },
  {
    "name": "Tajik",
    "abbr": "tg"
  },
  {
    "name": "Tatar",
    "abbr": "tt"
  },
  {
    "name": "Thai",
    "abbr": "th"
  },
  {
    "name": "Turkish",
    "abbr": "tr"
  },
  {
    "name": "Turkmen",
    "abbr": "tk"
  },
  {
    "name": "Tibetan",
    "abbr": "bo"
  },
  {
    "name": "Uzbek",
    "abbr": "uz"
  },
  {
    "name": "Vietnamese",
    "abbr": "vi"
  }
]
const NationAbbr = [];
const NationNames = NationNameArr.map((item) => {
  NationAbbr.push(item.abbr);
  return item.name
})

// let sysOriginalLanguages = ['简体中文', '繁體中文', '日本語', 'Dansk', 'Deutsch', 'English', 'Español', 'Français', 'Italiano', 'Magyar', 'Nederlands', 'Norsk', 'Polski', 'Português', 'Suomi', 'Svenska', 'Türkçe', 'Ελληνικά', 'Русский', 'Українська', 'עברית', 'بالعربية', '한국어'];
const sysLanguagesMap: Record<string, string> = {
  "简体中文": "Chinese(Simplified)",
  "繁體中文": "Chinese(Traditional)",
  "日本語": "Japanese",
  "Dansk": "Danish",
  "Deutsch": "German",
  "English": "English",
  "Español": "Spanish",
  "Français": "French",
  "Italiano": "Italian",
  "Magyar": "Hungarian",
  "Nederlands": "Dutch",
  "Norsk": "Norwegian",
  "Polski": "Polish",
  "Português": "Portuguese",
  "Suomi": "Finnish",
  "Svenska": "Swedish",
  "Türkçe": "Turkish",
  "Ελληνικά": "Greek",
  "Русский": "Russian",
  "Українська": "Ukrainian",
  "עברית": "Hebrew",
  "بالعربية": "Arabic",
  "한국어": "Korean"
}

// let sysLanguagesEN = ['Chinese（Simplified ）', 'Chinese（Traditional）', 'Japanese', 'Danish', 'German', 'English', 'Spanish', 'French', 'Italian', 'Hungarian', 'Dutch', 'Norwegian', 'Polish', 'Portuguese', 'Finnish', 'Swedish', 'Turkish', 'Greek', 'Russian', 'Ukrainian', 'Hebrew', 'Arabic', 'Korean'];
// let translationLanguages = ['English', 'English（US）', 'English（UK）', 'Spanish', 'Portuguese', 'French', 'Italian', 'German', 'Dutch', 'Polish', 'Danish', 'Japanese', 'Korean', 'Hungarian', 'Czech', 'Chinese', 'Hebrew', '其他语言', 'Arabic', 'Azerbaijani', 'Estonian', 'Belarusian', 'Bulgarian', 'Icelandic', 'Bosnian', 'Persian', 'Russian', 'Chinese（Traditional）', 'Finnish', 'Kazakh', 'Galician', 'Catalan', 'Chinese（Simplified ）', 'Kannada', 'Croatian', 'Latvian', 'Lithuanian', 'Romanian', 'Marathi', 'Malay', 'Macedonian', 'Maori', 'Afrikaans', 'Nepali', 'Norwegian', 'Swedish', 'Serbian', 'Slovak', 'Slovenian', 'Swahili', 'Tagalog', 'Tamil', 'Thai', 'Turkish', 'Welsh', 'Urdu', 'Ukrainian', 'Greek', 'Armenian', 'Hindi', 'Indonesian', 'Vietnamese', '其他语言', 'Albanian', 'Amharic', 'Assamese', 'Occitan', 'Valencian', 'Bashkir', 'Basque', 'Breton', 'Tibetan', 'Faroese', 'Sanskrit', 'Flemish', 'Khmer', 'Georgian', 'Gujarati', 'Haitian Creole', 'Haitian', 'Hausa', 'Castilian', 'Latin', 'Lao', 'Lingala', 'Luxembourgish', 'Malagasy', 'Maltese', 'Malayalam', 'Mongolian', 'Bengali', 'Burmese', 'Moldovan', 'Punjabi', 'Pashto', 'Sinhala', 'Shona', 'Somali', 'Tajik', 'Tatar', 'Telugu', 'Turkmen', 'Uzbek', 'Hawaiian', 'Norwegian Nynorsk', 'Sindhi', 'Sundanese', 'Yiddish', 'Yoruba', 'Javanese', 'Cantonese'];

export { NationAbbr, NationNames, NationNameArr, sysLanguagesMap }
export default NationNameArr