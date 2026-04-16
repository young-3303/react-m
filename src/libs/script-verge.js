// Define main function (script entry)
const prependRule = [
    "DOMAIN-KEYWORD,steampipe,DIRECT",
    "DOMAIN-KEYWORD,steamstatic,DIRECT",
    "DOMAIN-KEYWORD,steamserver,DIRECT",
    "DOMAIN-KEYWORD,steampowered,DIRECT",
    "DOMAIN-KEYWORD,steamcdn,DIRECT",
    "DOMAIN-KEYWORD,copilot,自动选择",
    "DOMAIN-KEYWORD,mhlnf,自动选择"
]
const apiList = [
    "DOMAIN,api.ip.sb/geoip,自动选择",
    "DOMAIN,ipapi.co/json,自动选择",
    "DOMAIN,api.ipapi.is/,自动选择",
    "DOMAIN,ipwho.is/,自动选择",
    "DOMAIN,ip.api.skk.moe/cf-geoip,自动选择",
    "DOMAIN,get.geojs.io/v1/ip/geo.json,自动选择",
]

function main(config, profileName) {
    let oldRules = config.rules || [];
    config.rules = [...prependRule, ...apiList, ...oldRules];
    return config;
}
