export function useIPLanguage() {
  async function ipapiCo() {
    const response = await fetch(`https://ipapi.co/json/`);
    const data = await response.json();
    // {
    //   "ip": "124.64.23.205",
    //   "network": "124.64.0.0/18",
    //   "version": "IPv4",
    //   "city": "Beijing",
    //   "region": "Beijing",
    //   "region_code": "BJ",
    //   "country": "CN",
    //   "country_name": "China",
    //   "country_code": "CN",
    //   "country_code_iso3": "CHN",
    //   "country_capital": "Beijing",
    //   "country_tld": ".cn",
    //   "continent_code": "AS",
    //   "in_eu": false,
    //   "postal": null,
    //   "latitude": 39.911,
    //   "longitude": 116.395,
    //   "timezone": "Asia/Shanghai",
    //   "utc_offset": "+0800",
    //   "country_calling_code": "+86",
    //   "currency": "CNY",
    //   "currency_name": "Yuan Renminbi",
    //   "languages": "zh-CN,yue,wuu,dta,ug,za",
    //   "country_area": 9596960.0,
    //   "country_population": 1411778724,
    //   "asn": "AS4808",
    //   "org": "China Unicom Beijing Province Network"
    // }
    return {
      country: data.country_name, // 如 "China"
      countryCode: data.country_code, // 如 "CN"
      language: data.languages?.split(',')[0] || 'en-US'
    };
  }

  return {
    ipapiCo
  };
} 