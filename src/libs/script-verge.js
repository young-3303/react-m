// Define main function (script entry)
/**
 * @typedef ProxyGroup
 * @type {object}
 * @property {string} name - 规则名称
 * @property {string} type - 服务器地址
 * @property {string []} proxies - 服务器端口
 */
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
    config['proxy-groups'].forEach(item => {
        item['proxies'] = item['proxies'].filter(it => it !== 'DIRECT')
    })
    config.rules = [...prependRule, ...apiList, ...oldRules];
    return config;
}

const obj = {
    "mixed-port": 7890,
    "allow-lan": true,
    "bind-address": "*",
    "mode": "rule",
    "log-level": "info",
    "external-controller": "127.0.0.1:9090",
    "unified-delay": true,
    "tcp-concurrent": true,
    "dns": {
        "enable": true,
        "ipv6": false,
        "default-nameserver": ["223.5.5.5", "119.29.29.29"],
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        "use-hosts": true,
        "nameserver-policy": {
            "+.google.com": "https://dns.cloudflare.com/dns-query",
            "+.googleapis.com": "https://dns.cloudflare.com/dns-query",
            "+.googleapis.cn": "https://dns.cloudflare.com/dns-query",
            "+.googlevideo.com": "https://dns.cloudflare.com/dns-query",
            "+.gstatic.com": "https://dns.cloudflare.com/dns-query",
            "+.youtube.com": "https://dns.cloudflare.com/dns-query",
            "+.youtu.be": "https://dns.cloudflare.com/dns-query",
            "+.facebook.com": "https://dns.cloudflare.com/dns-query",
            "+.twitter.com": "https://dns.cloudflare.com/dns-query",
            "+.x.com": "https://dns.cloudflare.com/dns-query",
            "+.github.com": "https://dns.cloudflare.com/dns-query",
            "+.githubusercontent.com": "https://dns.cloudflare.com/dns-query",
            "+.openai.com": "https://dns.cloudflare.com/dns-query",
            "+.chatgpt.com": "https://dns.cloudflare.com/dns-query",
            "+.anthropic.com": "https://dns.cloudflare.com/dns-query"
        },
        "nameserver": ["https://doh.pub/dns-query", "https://dns.alidns.com/dns-query", "tls://dot.pub:853", "tls://dns.alidns.com:853"],
        "fallback": ["https://dns.cloudflare.com/dns-query", "https://dns.google/dns-query", "tls://1.1.1.1:853", "tls://8.8.8.8:853"],
        "fallback-filter": {
            "geoip": true,
            "geoip-code": "CN",
            "ipcidr": ["0.0.0.0/8", "10.0.0.0/8", "100.64.0.0/10", "127.0.0.0/8", "169.254.0.0/16", "172.16.0.0/12", "192.168.0.0/16", "224.0.0.0/4", "240.0.0.0/4"],
            "domain": ["+.google.com", "+.facebook.com", "+.youtube.com", "+.githubusercontent.com", "+.googlevideo.com", "+.googleapis.cn"]
        },
        "fake-ip-filter": ["*.lan", "*.local", "*.localhost", "*.test", "localhost.ptlogin2.qq.com", "+.stun.*.*", "+.stun.*.*.*", "+.stun.*.*.*.*", "lens.l.google.com", "*.srv.nintendo.net", "+.stun.playstation.net", "xbox.*.*.microsoft.com", "*.*.xboxlive.com", "+.msftncsi.com", "+.msftconnecttest.com"],
        "use-system-hosts": false
    },
    "proxies": [
        {
            "name": "剩余流量：299.97 GB",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        },
        {
            "name": "套餐到期：长期有效",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        },
        {
            "name": "官网https://cloudfisher.top",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "节点超时请尝试重新导入",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "收藏导航https://cloudfisher.icu",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰 香港直连1",
            "server": "140.235.141.169",
            "port": 443,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰 香港直连2",
            "server": "140.235.141.167",
            "port": 443,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰 香港01 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰 香港02 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰 香港03 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰 香港04 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 41391,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇨🇳 台湾直连",
            "server": "141.11.42.125",
            "port": 44312,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇨🇳 台湾01 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 19418,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇨🇳 台湾02 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 19418,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇨🇳 台湾03 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 19418,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇨🇳 台湾04 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 19418,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇯🇵 日本直连",
            "server": "23.146.72.207",
            "port": 443,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇯🇵 日本01 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 43751,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇯🇵 日本02 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 43751,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇯🇵 日本03 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 43751,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇯🇵 日本04 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 43751,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇸🇬 新加坡直连",
            "server": "141.11.43.220",
            "port": 443,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇸🇬 新加坡01 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 65472,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇸🇬 新加坡02 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 65472,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇸🇬 新加坡03 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 65472,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇸🇬 新加坡04 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 65472,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇺🇸 美国直连",
            "server": "23.177.40.49",
            "port": 443,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇺🇸 美国01 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 30875,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇺🇸 美国02 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 30875,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇺🇸 美国03 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 30875,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇺🇸 美国04 境外中转",
            "server": "a2.mhlnf.cn",
            "port": 30875,
            "sni": "www.bing.com",
            "up": 10000,
            "down": 10000,
            "skip-cert-verify": true,
            "type": "hysteria2",
            "password": "6f4b261a-a9c5-458f-9626-7079ca823f72"
        }, {
            "name": "🇭🇰香港01",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 50284,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "cv23j5RQKJBa72H9O_Ui-yWvKJ5TeSf08gmqIYJ2JG0",
                "short-id": "35e0273c5d256abb"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇭🇰香港02",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 50284,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "DfXvVrJO2uUxqBOPLuTA_sDBcZam4uq2quYCQRvEuy4",
                "short-id": "9a8d9b37ba8ca634"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇭🇰香港03",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 50284,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "-oJLwoGhezQuUNwTwqO96PhOSoG1_EZHoJ-3NqkpBzA",
                "short-id": "3cedc53d42313191"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇭🇰香港04",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 50284,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "C5I2wJKF0HlarZcq7ga6AvOdDQWdWWacNhydLdj74l4",
                "short-id": "3b99ed9f5a80e540"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇨🇳 台湾01",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 26389,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "R-5kKhUGP1Pqn1jtTHvu0frEv-1vfmcOPzTxFPqLVTc",
                "short-id": "c1e0953e009cf811"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇨🇳 台湾02",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 26389,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "R-5kKhUGP1Pqn1jtTHvu0frEv-1vfmcOPzTxFPqLVTc",
                "short-id": "c1e0953e009cf811"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇨🇳 台湾03",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 26389,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "PLswdK7TbL65_oM20lvIXkTVwDq1Im2kN_vQC7cHcxk",
                "short-id": "b9188632659c74a6"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇨🇳 台湾04",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 26389,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "PLswdK7TbL65_oM20lvIXkTVwDq1Im2kN_vQC7cHcxk",
                "short-id": "b9188632659c74a6"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇯🇵 日本01",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 54005,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "N9_xmU6RBD4GmNxZ5GjTD6yyxsjV9eSJaKg2w5lMoko",
                "short-id": "93f67e2b74d2c134"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇯🇵 日本02",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 54005,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "N9_xmU6RBD4GmNxZ5GjTD6yyxsjV9eSJaKg2w5lMoko",
                "short-id": "93f67e2b74d2c134"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇯🇵 日本03",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 54005,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "kB7C1JteDcP-74j5RRVkgBqtxFP4DV26-bUD5I7N6mo",
                "short-id": "d82a20a61623c141"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇯🇵 日本04",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 54005,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "kB7C1JteDcP-74j5RRVkgBqtxFP4DV26-bUD5I7N6mo",
                "short-id": "d82a20a61623c141"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇸🇬 新加坡01",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 48312,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "dlNavQljnsVfF-5_omqK8k9zrqi8XA-SDZL4xjxqWiw",
                "short-id": "e9493d22a3fadb44"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇸🇬 新加坡02",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 48312,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "dlNavQljnsVfF-5_omqK8k9zrqi8XA-SDZL4xjxqWiw",
                "short-id": "e9493d22a3fadb44"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇸🇬 新加坡03",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 48312,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "VbNKOUDxrF_bFVfug6d7sbJmaeDrI1lCXq_oQB6Pt0g",
                "short-id": "5a886cd37c1b97d9"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇸🇬 新加坡04",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 48312,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "VbNKOUDxrF_bFVfug6d7sbJmaeDrI1lCXq_oQB6Pt0g",
                "short-id": "5a886cd37c1b97d9"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇺🇸 美国01",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 38709,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "CHDMjoxZWO2VOvm1sQooTYnqzU_5KAuLWBusG0_Khx8",
                "short-id": "757fc89bf9ac7494"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇺🇸 美国02",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 38709,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "CHDMjoxZWO2VOvm1sQooTYnqzU_5KAuLWBusG0_Khx8",
                "short-id": "757fc89bf9ac7494"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇺🇸 美国03",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 38709,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "CHDMjoxZWO2VOvm1sQooTYnqzU_5KAuLWBusG0_Khx8",
                "short-id": "7bae8187f7c4d837"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }, {
            "name": "🇺🇸 美国04",
            "type": "vless",
            "server": "a1.mhlnf.cn",
            "port": 38709,
            "uuid": "6f4b261a-a9c5-458f-9626-7079ca823f72",
            "alterId": 0,
            "cipher": "auto",
            "udp": true,
            "flow": "xtls-rprx-vision",
            "encryption": "none",
            "tls": true,
            "skip-cert-verify": true,
            "servername": "www.tue.nl",
            "reality-opts": {
                "public-key": "CHDMjoxZWO2VOvm1sQooTYnqzU_5KAuLWBusG0_Khx8",
                "short-id": "7bae8187f7c4d837"
            },
            "client-fingerprint": "edge",
            "network": "tcp"
        }],
    "proxy-groups": [
        {
            "name": "渔云CloudFisher",
            "type": "select",
            "proxies": [
                "自动选择", "故障转移", "DIRECT", "剩余流量：299.97 GB", "套餐到期：长期有效", "官网https://cloudfisher.top", "节点超时请尝试重新导入", "收藏导航https://cloudfisher.icu", "🇭🇰 香港直连1", "🇭🇰 香港直连2", "🇭🇰 香港01 境外中转", "🇭🇰 香港02 境外中转", "🇭🇰 香港03 境外中转", "🇭🇰 香港04 境外中转", "🇨🇳 台湾直连", "🇨🇳 台湾01 境外中转", "🇨🇳 台湾02 境外中转", "🇨🇳 台湾03 境外中转", "🇨🇳 台湾04 境外中转", "🇯🇵 日本直连", "🇯🇵 日本01 境外中转", "🇯🇵 日本02 境外中转", "🇯🇵 日本03 境外中转", "🇯🇵 日本04 境外中转", "🇸🇬 新加坡直连", "🇸🇬 新加坡01 境外中转", "🇸🇬 新加坡02 境外中转", "🇸🇬 新加坡03 境外中转", "🇸🇬 新加坡04 境外中转", "🇺🇸 美国直连", "🇺🇸 美国01 境外中转", "🇺🇸 美国02 境外中转", "🇺🇸 美国03 境外中转", "🇺🇸 美国04 境外中转", "🇭🇰香港01", "🇭🇰香港02", "🇭🇰香港03", "🇭🇰香港04", "🇨🇳 台湾01", "🇨🇳 台湾02", "🇨🇳 台湾03", "🇨🇳 台湾04", "🇯🇵 日本01", "🇯🇵 日本02", "🇯🇵 日本03", "🇯🇵 日本04", "🇸🇬 新加坡01", "🇸🇬 新加坡02", "🇸🇬 新加坡03", "🇸🇬 新加坡04", "🇺🇸 美国01", "🇺🇸 美国02", "🇺🇸 美国03", "🇺🇸 美国04"]
        },
        {
            "name": "自动选择",
            "type": "url-test",
            "proxies": ["剩余流量：299.97 GB", "套餐到期：长期有效", "官网https://cloudfisher.top", "节点超时请尝试重新导入", "收藏导航https://cloudfisher.icu", "🇭🇰 香港直连1", "🇭🇰 香港直连2", "🇭🇰 香港01 境外中转", "🇭🇰 香港02 境外中转", "🇭🇰 香港03 境外中转", "🇭🇰 香港04 境外中转", "🇨🇳 台湾直连", "🇨🇳 台湾01 境外中转", "🇨🇳 台湾02 境外中转", "🇨🇳 台湾03 境外中转", "🇨🇳 台湾04 境外中转", "🇯🇵 日本直连", "🇯🇵 日本01 境外中转", "🇯🇵 日本02 境外中转", "🇯🇵 日本03 境外中转", "🇯🇵 日本04 境外中转", "🇸🇬 新加坡直连", "🇸🇬 新加坡01 境外中转", "🇸🇬 新加坡02 境外中转", "🇸🇬 新加坡03 境外中转", "🇸🇬 新加坡04 境外中转", "🇺🇸 美国直连", "🇺🇸 美国01 境外中转", "🇺🇸 美国02 境外中转", "🇺🇸 美国03 境外中转", "🇺🇸 美国04 境外中转", "🇭🇰香港01", "🇭🇰香港02", "🇭🇰香港03", "🇭🇰香港04", "🇨🇳 台湾01", "🇨🇳 台湾02", "🇨🇳 台湾03", "🇨🇳 台湾04", "🇯🇵 日本01", "🇯🇵 日本02", "🇯🇵 日本03", "🇯🇵 日本04", "🇸🇬 新加坡01", "🇸🇬 新加坡02", "🇸🇬 新加坡03", "🇸🇬 新加坡04", "🇺🇸 美国01", "🇺🇸 美国02", "🇺🇸 美国03", "🇺🇸 美国04"],
            "url": "http://www.gstatic.com/generate_204",
            "interval": 300,
            "tolerance": 50
        },
        {
            "name": "故障转移",
            "type": "fallback",
            "proxies": ["剩余流量：299.97 GB", "套餐到期：长期有效", "官网https://cloudfisher.top", "节点超时请尝试重新导入", "收藏导航https://cloudfisher.icu", "🇭🇰 香港直连1", "🇭🇰 香港直连2", "🇭🇰 香港01 境外中转", "🇭🇰 香港02 境外中转", "🇭🇰 香港03 境外中转", "🇭🇰 香港04 境外中转", "🇨🇳 台湾直连", "🇨🇳 台湾01 境外中转", "🇨🇳 台湾02 境外中转", "🇨🇳 台湾03 境外中转", "🇨🇳 台湾04 境外中转", "🇯🇵 日本直连", "🇯🇵 日本01 境外中转", "🇯🇵 日本02 境外中转", "🇯🇵 日本03 境外中转", "🇯🇵 日本04 境外中转", "🇸🇬 新加坡直连", "🇸🇬 新加坡01 境外中转", "🇸🇬 新加坡02 境外中转", "🇸🇬 新加坡03 境外中转", "🇸🇬 新加坡04 境外中转", "🇺🇸 美国直连", "🇺🇸 美国01 境外中转", "🇺🇸 美国02 境外中转", "🇺🇸 美国03 境外中转", "🇺🇸 美国04 境外中转", "🇭🇰香港01", "🇭🇰香港02", "🇭🇰香港03", "🇭🇰香港04", "🇨🇳 台湾01", "🇨🇳 台湾02", "🇨🇳 台湾03", "🇨🇳 台湾04", "🇯🇵 日本01", "🇯🇵 日本02", "🇯🇵 日本03", "🇯🇵 日本04", "🇸🇬 新加坡01", "🇸🇬 新加坡02", "🇸🇬 新加坡03", "🇸🇬 新加坡04", "🇺🇸 美国01", "🇺🇸 美国02", "🇺🇸 美国03", "🇺🇸 美国04"],
            "url": "http://www.gstatic.com/generate_204",
            "interval": 300
        }],
    "rules": [],
    "profile": {"store-selected": true}
}
