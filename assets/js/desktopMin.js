! function(e, t) {
    "use strict";
    var i = "function",
        n = "undefined",
        s = "object",
        o = "string",
        a = "model",
        l = "name",
        r = "type",
        d = "vendor",
        c = "version",
        h = "architecture",
        u = "console",
        m = "mobile",
        p = "tablet",
        g = "smarttv",
        y = "wearable",
        b = "embedded",
        f = "Amazon",
        w = "Apple",
        k = "ASUS",
        v = "BlackBerry",
        E = "Browser",
        B = "Chrome",
        x = "Firefox",
        I = "Google",
        C = "Huawei",
        S = "LG",
        T = "Microsoft",
        L = "Motorola",
        A = "Opera",
        D = "Samsung",
        _ = "Sony",
        N = "Xiaomi",
        M = "Zebra",
        P = function(e) {
            var t = {};
            for (var i in e) t[e[i].toUpperCase()] = e[i];
            return t
        },
        F = function(e, t) {
            return typeof e === o && -1 !== z(t).indexOf(z(e))
        },
        z = function(e) {
            return e.toLowerCase()
        },
        O = function(e, t) {
            if (typeof e === o) return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === n ? e : e.substring(0, 255)
        },
        q = function(e, n) {
            for (var o, a, l, r, d, c, h = 0; h < n.length && !d;) {
                var u = n[h],
                    m = n[h + 1];
                for (o = a = 0; o < u.length && !d;)
                    if (d = u[o++].exec(e))
                        for (l = 0; l < m.length; l++) c = d[++a], typeof(r = m[l]) === s && r.length > 0 ? 2 == r.length ? typeof r[1] == i ? this[r[0]] = r[1].call(this, c) : this[r[0]] = r[1] : 3 == r.length ? typeof r[1] !== i || r[1].exec && r[1].test ? this[r[0]] = c ? c.replace(r[1], r[2]) : t : this[r[0]] = c ? r[1].call(this, c, r[2]) : t : 4 == r.length && (this[r[0]] = c ? r[3].call(this, c.replace(r[1], r[2])) : t) : this[r] = c || t;
                h += 2
            }
        },
        H = function(e, i) {
            for (var n in i)
                if (typeof i[n] === s && i[n].length > 0) {
                    for (var o = 0; o < i[n].length; o++)
                        if (F(i[n][o], e)) return "?" === n ? t : n
                } else if (F(i[n], e)) return "?" === n ? t : n;
            return e
        },
        j = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        W = {
            browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [c, [l, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [c, [l, "Edge"]],
                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                [l, c],
                [/opios[\/ ]+([\w\.]+)/i],
                [c, [l, A + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [c, [l, A]],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                [l, c],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [c, [l, "UC" + E]],
                [/\bqbcore\/([\w\.]+)/i],
                [c, [l, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [c, [l, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [c, [l, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [c, [l, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [c, [l, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [
                    [l, /(.+)/, "$1 Secure " + E], c
                ],
                [/\bfocus\/([\w\.]+)/i],
                [c, [l, x + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [c, [l, A + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [c, [l, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [c, [l, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [c, [l, A + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [c, [l, "MIUI " + E]],
                [/fxios\/([-\w\.]+)/i],
                [c, [l, x]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [
                    [l, "360 " + E]
                ],
                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                [
                    [l, /(.+)/, "$1 " + E], c
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [l, /_/g, " "], c
                ],
                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                [l, c],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                [l],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [
                    [l, "Facebook"], c
                ],
                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                [l, c],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [c, [l, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [c, [l, B + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [
                    [l, B + " WebView"], c
                ],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [c, [l, "Android " + E]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [l, c],
                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                [c, [l, "Mobile Safari"]],
                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                [c, l],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [l, [c, H, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [l, c],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [
                    [l, "Netscape"], c
                ],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [c, [l, x + " Reality"]],
                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                [l, c]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [
                    [h, "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    [h, z]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    [h, "ia32"]
                ],
                [/\b(aarch64|armv?8e?l?)\b/i],
                [
                    [h, "arm64"]
                ],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [
                    [h, "armhf"]
                ],
                [/windows (ce|mobile); ppc;/i],
                [
                    [h, "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [
                    [h, /ower/, "", z]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    [h, "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [
                    [h, z]
                ]
            ],
            device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [a, [d, D],
                    [r, p]
                ],
                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [a, [d, D],
                    [r, m]
                ],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [a, [d, w],
                    [r, m]
                ],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [a, [d, w],
                    [r, p]
                ],
                [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                [a, [d, C],
                    [r, p]
                ],
                [/huawei([-\w ]+)[;\)]/i, /\b(nexus 6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\) ]/i],
                [a, [d, C],
                    [r, m]
                ],
                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte)?[_ ]?(?:\d?\w?)[_ ]?(?:plus)?) bui/i],
                [
                    [a, /_/g, " "],
                    [d, N],
                    [r, m]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                    [a, /_/g, " "],
                    [d, N],
                    [r, p]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                [a, [d, "OPPO"],
                    [r, m]
                ],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [a, [d, "Vivo"],
                    [r, m]
                ],
                [/\b(rmx[12]\d{3})(?: bui|;)/i],
                [a, [d, "Realme"],
                    [r, m]
                ],
                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                [a, [d, L],
                    [r, m]
                ],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [a, [d, L],
                    [r, p]
                ],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [a, [d, S],
                    [r, p]
                ],
                [/(lm-?f100[nv]?|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+) bui/i],
                [a, [d, S],
                    [r, m]
                ],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [a, [d, "Lenovo"],
                    [r, p]
                ],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                    [a, /_/g, " "],
                    [d, "Nokia"],
                    [r, m]
                ],
                [/(pixel c)\b/i],
                [a, [d, I],
                    [r, p]
                ],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [a, [d, I],
                    [r, m]
                ],
                [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [a, [d, _],
                    [r, m]
                ],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                    [a, "Xperia Tablet"],
                    [d, _],
                    [r, p]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1) bui/i, /oneplus (a\d{4})[) ]/i],
                [a, [d, "OnePlus"],
                    [r, m]
                ],
                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [a, [d, f],
                    [r, p]
                ],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                    [a, /(.+)/g, "Fire Phone $1"],
                    [d, f],
                    [r, m]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [a, d, [r, p]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [a, [d, v],
                    [r, m]
                ],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [a, [d, k],
                    [r, p]
                ],
                [/ (z[es]6[027][01][km][ls]|zenfone \d\w?)\b/i],
                [a, [d, k],
                    [r, m]
                ],
                [/(nexus 9)/i],
                [a, [d, "HTC"],
                    [r, p]
                ],
                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                [d, [a, /_/g, " "],
                    [r, m]
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [a, [d, "Acer"],
                    [r, p]
                ],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [a, [d, "Meizu"],
                    [r, m]
                ],
                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                [d, a, [r, m]],
                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                [d, a, [r, p]],
                [/(surface duo)/i],
                [a, [d, T],
                    [r, p]
                ],
                [/droid [\d\.]+; (fp\du?) b/i],
                [a, [d, "Fairphone"],
                    [r, m]
                ],
                [/(u304aa)/i],
                [a, [d, "AT&T"],
                    [r, m]
                ],
                [/\bsie-(\w*)/i],
                [a, [d, "Siemens"],
                    [r, m]
                ],
                [/\b(rct\w+) b/i],
                [a, [d, "RCA"],
                    [r, p]
                ],
                [/\b(venue[\d ]{2,7}) b/i],
                [a, [d, "Dell"],
                    [r, p]
                ],
                [/\b(q(?:mv|ta)\w+) b/i],
                [a, [d, "Verizon"],
                    [r, p]
                ],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [a, [d, "Barnes & Noble"],
                    [r, p]
                ],
                [/\b(tm\d{3}\w+) b/i],
                [a, [d, "NuVision"],
                    [r, p]
                ],
                [/\b(k88) b/i],
                [a, [d, "ZTE"],
                    [r, p]
                ],
                [/\b(nx\d{3}j) b/i],
                [a, [d, "ZTE"],
                    [r, m]
                ],
                [/\b(gen\d{3}) b.+49h/i],
                [a, [d, "Swiss"],
                    [r, m]
                ],
                [/\b(zur\d{3}) b/i],
                [a, [d, "Swiss"],
                    [r, p]
                ],
                [/\b((zeki)?tb.*\b) b/i],
                [a, [d, "Zeki"],
                    [r, p]
                ],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [
                    [d, "Dragon Touch"], a, [r, p]
                ],
                [/\b(ns-?\w{0,9}) b/i],
                [a, [d, "Insignia"],
                    [r, p]
                ],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [a, [d, "NextBook"],
                    [r, p]
                ],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [
                    [d, "Voice"], a, [r, m]
                ],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [
                    [d, "LvTel"], a, [r, m]
                ],
                [/\b(ph-1) /i],
                [a, [d, "Essential"],
                    [r, m]
                ],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [a, [d, "Envizen"],
                    [r, p]
                ],
                [/\b(trio[-\w\. ]+) b/i],
                [a, [d, "MachSpeed"],
                    [r, p]
                ],
                [/\btu_(1491) b/i],
                [a, [d, "Rotor"],
                    [r, p]
                ],
                [/(shield[\w ]+) b/i],
                [a, [d, "Nvidia"],
                    [r, p]
                ],
                [/(sprint) (\w+)/i],
                [d, a, [r, m]],
                [/(kin\.[onetw]{3})/i],
                [
                    [a, /\./g, " "],
                    [d, T],
                    [r, m]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [a, [d, M],
                    [r, p]
                ],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [a, [d, M],
                    [r, m]
                ],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [d, a, [r, u]],
                [/droid.+; (shield) bui/i],
                [a, [d, "Nvidia"],
                    [r, u]
                ],
                [/(playstation [345portablevi]+)/i],
                [a, [d, _],
                    [r, u]
                ],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [a, [d, T],
                    [r, u]
                ],
                [/smart-tv.+(samsung)/i],
                [d, [r, g]],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [a, /^/, "SmartTV"],
                    [d, D],
                    [r, g]
                ],
                [/(?:nux; netcast.+smarttv|lg netcast\.tv-201\d)/i],
                [
                    [d, S],
                    [r, g]
                ],
                [/(apple) ?tv/i],
                [d, [a, w + " TV"],
                    [r, g]
                ],
                [/crkey/i],
                [
                    [a, B + "cast"],
                    [d, I],
                    [r, g]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [a, [d, f],
                    [r, g]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [a, [d, "Sharp"],
                    [r, g]
                ],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                [
                    [d, O],
                    [a, O],
                    [r, g]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [
                    [r, g]
                ],
                [/((pebble))app/i],
                [d, a, [r, y]],
                [/droid.+; (glass) \d/i],
                [a, [d, I],
                    [r, y]
                ],
                [/droid.+; (wt63?0{2,3})\)/i],
                [a, [d, M],
                    [r, y]
                ],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [d, [r, b]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [a, [r, m]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [a, [r, p]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [
                    [r, p]
                ],
                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                [
                    [r, m]
                ],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [a, [d, "Generic"]]
            ],
            engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [c, [l, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [c, [l, "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                [l, c],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [c, l]
            ],
            os: [
                [/microsoft (windows) (vista|xp)/i],
                [l, c],
                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                [l, [c, H, j]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                    [l, "Windows"],
                    [c, H, j]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                [
                    [c, /_/g, "."],
                    [l, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                    [l, "Mac OS"],
                    [c, /_/g, "."]
                ],
                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                [l, c],
                [/\(bb(10);/i],
                [c, [l, v]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [c, [l, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [c, [l, x + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [c, [l, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [c, [l, B + "cast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [
                    [l, "Chromium OS"], c
                ],
                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopc]{0,4}bsd|dragonfly) ?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                [l, c],
                [/(sunos) ?([\w\.\d]*)/i],
                [
                    [l, "Solaris"], c
                ],
                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                [l, c]
            ]
        },
        U = function(i, u) {
            if (typeof i === s && (u = i, i = t), !(this instanceof U)) return new U(i, u).getResult();
            var m = i || (typeof e !== n && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                p = u ? function(e, t) {
                    var i = {};
                    for (var n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                }(W, u) : W;
            return this.getBrowser = function() {
                var e, i = {};
                return i[l] = t, i[c] = t, q.call(i, m, p.browser), i.major = typeof(e = i.version) === o ? e.replace(/[^\d\.]/g, "").split(".")[0] : t, i
            }, this.getCPU = function() {
                var e = {};
                return e[h] = t, q.call(e, m, p.cpu), e
            }, this.getDevice = function() {
                var e = {};
                return e[d] = t, e[a] = t, e[r] = t, q.call(e, m, p.device), e
            }, this.getEngine = function() {
                var e = {};
                return e[l] = t, e[c] = t, q.call(e, m, p.engine), e
            }, this.getOS = function() {
                var e = {};
                return e[l] = t, e[c] = t, q.call(e, m, p.os), e
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return m
            }, this.setUA = function(e) {
                return m = typeof e === o && e.length > 255 ? O(e, 255) : e, this
            }, this.setUA(m), this
        };
    U.VERSION = "0.7.28", U.BROWSER = P([l, c, "major"]), U.CPU = P([h]), U.DEVICE = P([a, d, r, u, m, g, p, y, b]), U.ENGINE = U.OS = P([l, c]), typeof exports !== n ? (typeof module !== n && module.exports && (exports = module.exports = U), exports.UAParser = U) : typeof define === i && define.amd ? define((function() {
        return U
    })) : typeof e !== n && (e.UAParser = U);
    var R = typeof e !== n && (e.jQuery || e.Zepto);
    if (R && !R.ua) {
        var $ = new U;
        R.ua = $.getResult(), R.ua.get = function() {
            return $.getUA()
        }, R.ua.set = function(e) {
            $.setUA(e);
            var t = $.getResult();
            for (var i in t) R.ua[i] = t[i]
        }
    }
}("object" == typeof window ? window : this),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, (function(e, t) {
    let i = e.console,
        n = void 0 === i ? function() {} : function(e) {
            i.error(e)
        };
    return function(i, s, o) {
        (o = o || t || e.jQuery) && (s.prototype.option || (s.prototype.option = function(e) {
            e && (this.options = Object.assign(this.options || {}, e))
        }), o.fn[i] = function(e, ...t) {
            return "string" == typeof e ? function(e, t, s) {
                let a, l = `$().${i}("${t}")`;
                return e.each((function(e, r) {
                    let d = o.data(r, i);
                    if (!d) return void n(`${i} not initialized. Cannot call method ${l}`);
                    let c = d[t];
                    if (!c || "_" == t.charAt(0)) return void n(`${l} is not a valid method`);
                    let h = c.apply(d, s);
                    a = void 0 === a ? h : a
                })), void 0 !== a ? a : e
            }(this, e, t) : (a = e, this.each((function(e, t) {
                let n = o.data(t, i);
                n ? (n.option(a), n._init()) : (n = new s(t, a), o.data(t, i, n))
            })), this);
            var a
        })
    }
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, (function() {
    function e() {}
    let t = e.prototype;
    return t.on = function(e, t) {
        if (!e || !t) return this;
        let i = this._events = this._events || {},
            n = i[e] = i[e] || [];
        return n.includes(t) || n.push(t), this
    }, t.once = function(e, t) {
        if (!e || !t) return this;
        this.on(e, t);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[e] = i[e] || {})[t] = !0, this
    }, t.off = function(e, t) {
        let i = this._events && this._events[e];
        if (!i || !i.length) return this;
        let n = i.indexOf(t);
        return -1 != n && i.splice(n, 1), this
    }, t.emitEvent = function(e, t) {
        let i = this._events && this._events[e];
        if (!i || !i.length) return this;
        i = i.slice(0), t = t || [];
        let n = this._onceEvents && this._onceEvents[e];
        for (let s of i) {
            n && n[s] && (this.off(e, s), delete n[s]), s.apply(this, t)
        }
        return this
    }, t.allOff = function() {
        return delete this._events, delete this._onceEvents, this
    }, e
})),
/*!
 * Infinite Scroll v2.0.4
 * measure size of elements
 * MIT license
 */
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, (function() {
    function e(e) {
        let t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }
    let t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    t.length;
    return function(i) {
        if ("string" == typeof i && (i = document.querySelector(i)), !(i && "object" == typeof i && i.nodeType)) return;
        let n = getComputedStyle(i);
        if ("none" == n.display) return function() {
            let e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            };
            return t.forEach((t => {
                e[t] = 0
            })), e
        }();
        let s = {};
        s.width = i.offsetWidth, s.height = i.offsetHeight;
        let o = s.isBorderBox = "border-box" == n.boxSizing;
        t.forEach((e => {
            let t = n[e],
                i = parseFloat(t);
            s[e] = isNaN(i) ? 0 : i
        }));
        let a = s.paddingLeft + s.paddingRight,
            l = s.paddingTop + s.paddingBottom,
            r = s.marginLeft + s.marginRight,
            d = s.marginTop + s.marginBottom,
            c = s.borderLeftWidth + s.borderRightWidth,
            h = s.borderTopWidth + s.borderBottomWidth,
            u = e(n.width);
        !1 !== u && (s.width = u + (o ? 0 : a + c));
        let m = e(n.height);
        return !1 !== m && (s.height = m + (o ? 0 : l + h)), s.innerWidth = s.width - (a + c), s.innerHeight = s.height - (l + h), s.outerWidth = s.width + r, s.outerHeight = s.height + d, s
    }
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(e) : e.fizzyUIUtils = t(e)
}(this, (function(e) {
    let t = {
            extend: function(e, t) {
                return Object.assign(e, t)
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            },
            makeArray: function(e) {
                if (Array.isArray(e)) return e;
                if (null == e) return [];
                return "object" == typeof e && "number" == typeof e.length ? [...e] : [e]
            },
            removeFrom: function(e, t) {
                let i = e.indexOf(t); - 1 != i && e.splice(i, 1)
            },
            getParent: function(e, t) {
                for (; e.parentNode && e != document.body;)
                    if ((e = e.parentNode).matches(t)) return e
            },
            getQueryElement: function(e) {
                return "string" == typeof e ? document.querySelector(e) : e
            },
            handleEvent: function(e) {
                let t = "on" + e.type;
                this[t] && this[t](e)
            },
            filterFindElements: function(e, i) {
                return (e = t.makeArray(e)).filter((e => e instanceof HTMLElement)).reduce(((e, t) => {
                    if (!i) return e.push(t), e;
                    t.matches(i) && e.push(t);
                    let n = t.querySelectorAll(i);
                    return e = e.concat(...n)
                }), [])
            },
            debounceMethod: function(e, t, i) {
                i = i || 100;
                let n = e.prototype[t],
                    s = t + "Timeout";
                e.prototype[t] = function() {
                    clearTimeout(this[s]);
                    let e = arguments;
                    this[s] = setTimeout((() => {
                        n.apply(this, e), delete this[s]
                    }), i)
                }
            },
            docReady: function(e) {
                let t = document.readyState;
                "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
            },
            toDashed: function(e) {
                return e.replace(/(.)([A-Z])/g, (function(e, t, i) {
                    return t + "-" + i
                })).toLowerCase()
            }
        },
        i = e.console;
    return t.htmlInit = function(n, s) {
        t.docReady((function() {
            let o = "data-" + t.toDashed(s),
                a = document.querySelectorAll(`[${o}]`),
                l = e.jQuery;
            [...a].forEach((e => {
                let t, a = e.getAttribute(o);
                try {
                    t = a && JSON.parse(a)
                } catch (t) {
                    return void(i && i.error(`Error parsing ${o} on ${e.className}: ${t}`))
                }
                let r = new n(e, t);
                l && l.data(e, s, r)
            }))
        }))
    }, t
})),
/*!
 * Unidragger v3.0.0
 * Draggable base class
 * MIT license
 */
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unidragger = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function i() {}
    let n, s, o = i.prototype = Object.create(t.prototype);
    o.handleEvent = function(e) {
        let t = "on" + e.type;
        this[t] && this[t](e)
    }, "ontouchstart" in e ? (n = "touchstart", s = ["touchmove", "touchend", "touchcancel"]) : e.PointerEvent ? (n = "pointerdown", s = ["pointermove", "pointerup", "pointercancel"]) : (n = "mousedown", s = ["mousemove", "mouseup"]), o.touchActionValue = "none", o.bindHandles = function() {
        this._bindHandles("addEventListener", this.touchActionValue)
    }, o.unbindHandles = function() {
        this._bindHandles("removeEventListener", "")
    }, o._bindHandles = function(t, i) {
        this.handles.forEach((s => {
            s[t](n, this), s[t]("click", this), e.PointerEvent && (s.style.touchAction = i)
        }))
    }, o.bindActivePointerEvents = function() {
        s.forEach((t => {
            e.addEventListener(t, this)
        }))
    }, o.unbindActivePointerEvents = function() {
        s.forEach((t => {
            e.removeEventListener(t, this)
        }))
    }, o.withPointer = function(e, t) {
        t.pointerId == this.pointerIdentifier && this[e](t, t)
    }, o.withTouch = function(e, t) {
        let i;
        for (let e of t.changedTouches) e.identifier == this.pointerIdentifier && (i = e);
        i && this[e](t, i)
    }, o.onmousedown = function(e) {
        this.pointerDown(e, e)
    }, o.ontouchstart = function(e) {
        this.pointerDown(e, e.changedTouches[0])
    }, o.onpointerdown = function(e) {
        this.pointerDown(e, e)
    };
    const a = ["TEXTAREA", "INPUT", "SELECT", "OPTION"],
        l = ["radio", "checkbox", "button", "submit", "image", "file"];
    return o.pointerDown = function(e, t) {
        let i = a.includes(e.target.nodeName),
            n = l.includes(e.target.type),
            s = !i || n;
        !this.isPointerDown && !e.button && s && (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDownPointer = {
            pageX: t.pageX,
            pageY: t.pageY
        }, this.bindActivePointerEvents(), this.emitEvent("pointerDown", [e, t]))
    }, o.onmousemove = function(e) {
        this.pointerMove(e, e)
    }, o.onpointermove = function(e) {
        this.withPointer("pointerMove", e)
    }, o.ontouchmove = function(e) {
        this.withTouch("pointerMove", e)
    }, o.pointerMove = function(e, t) {
        let i = {
            x: t.pageX - this.pointerDownPointer.pageX,
            y: t.pageY - this.pointerDownPointer.pageY
        };
        this.emitEvent("pointerMove", [e, t, i]), !this.isDragging && this.hasDragStarted(i) && this.dragStart(e, t), this.isDragging && this.dragMove(e, t, i)
    }, o.hasDragStarted = function(e) {
        return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
    }, o.dragStart = function(e, t) {
        this.isDragging = !0, this.isPreventingClicks = !0, this.emitEvent("dragStart", [e, t])
    }, o.dragMove = function(e, t, i) {
        this.emitEvent("dragMove", [e, t, i])
    }, o.onmouseup = function(e) {
        this.pointerUp(e, e)
    }, o.onpointerup = function(e) {
        this.withPointer("pointerUp", e)
    }, o.ontouchend = function(e) {
        this.withTouch("pointerUp", e)
    }, o.pointerUp = function(e, t) {
        this.pointerDone(), this.emitEvent("pointerUp", [e, t]), this.isDragging ? this.dragEnd(e, t) : this.staticClick(e, t)
    }, o.dragEnd = function(e, t) {
        this.isDragging = !1, setTimeout((() => delete this.isPreventingClicks)), this.emitEvent("dragEnd", [e, t])
    }, o.pointerDone = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier, this.unbindActivePointerEvents(), this.emitEvent("pointerDone")
    }, o.onpointercancel = function(e) {
        this.withPointer("pointerCancel", e)
    }, o.ontouchcancel = function(e) {
        this.withTouch("pointerCancel", e)
    }, o.pointerCancel = function(e, t) {
        this.pointerDone(), this.emitEvent("pointerCancel", [e, t])
    }, o.onclick = function(e) {
        this.isPreventingClicks && e.preventDefault()
    }, o.staticClick = function(e, t) {
        let i = "mouseup" == e.type;
        i && this.isIgnoringMouseUp || (this.emitEvent("staticClick", [e, t]), i && (this.isIgnoringMouseUp = !0, setTimeout((() => {
            delete this.isIgnoringMouseUp
        }), 400)))
    }, i
})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, (function(e, t) {
    let i = e.jQuery,
        n = e.console;

    function s(e, t, o) {
        if (!(this instanceof s)) return new s(e, t, o);
        let a = e;
        var l;
        ("string" == typeof e && (a = document.querySelectorAll(e)), a) ? (this.elements = (l = a, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? [...l] : [l]), this.options = {}, "function" == typeof t ? o = t : Object.assign(this.options, t), o && this.on("always", o), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error(`Bad element for imagesLoaded ${a||e}`)
    }
    s.prototype = Object.create(t.prototype), s.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    };
    const o = [1, 9, 11];
    s.prototype.addElementImages = function(e) {
        "IMG" === e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        let {
            nodeType: t
        } = e;
        if (!t || !o.includes(t)) return;
        let i = e.querySelectorAll("img");
        for (let e of i) this.addImage(e);
        if ("string" == typeof this.options.background) {
            let t = e.querySelectorAll(this.options.background);
            for (let e of t) this.addElementBackgroundImages(e)
        }
    };
    const a = /url\((['"])?(.*?)\1\)/gi;

    function l(e) {
        this.img = e
    }

    function r(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    return s.prototype.addElementBackgroundImages = function(e) {
        let t = getComputedStyle(e);
        if (!t) return;
        let i = a.exec(t.backgroundImage);
        for (; null !== i;) {
            let n = i && i[2];
            n && this.addBackground(n, e), i = a.exec(t.backgroundImage)
        }
    }, s.prototype.addImage = function(e) {
        let t = new l(e);
        this.images.push(t)
    }, s.prototype.addBackground = function(e, t) {
        let i = new r(e, t);
        this.images.push(i)
    }, s.prototype.check = function() {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        let e = (e, t, i) => {
            setTimeout((() => {
                this.progress(e, t, i)
            }))
        };
        this.images.forEach((function(t) {
            t.once("progress", e), t.check()
        }))
    }, s.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${i}`, e, t)
    }, s.prototype.complete = function() {
        let e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, l.prototype = Object.create(t.prototype), l.prototype.check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
    }, l.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, l.prototype.confirm = function(e, t) {
        this.isLoaded = e;
        let {
            parentNode: i
        } = this.img, n = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, n, t])
    }, l.prototype.handleEvent = function(e) {
        let t = "on" + e.type;
        this[t] && this[t](e)
    }, l.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, l.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, l.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype = Object.create(l.prototype), r.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, s.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && (i = t, i.fn.imagesLoaded = function(e, t) {
            return new s(this, e, t).jqDeferred.promise(i(this))
        })
    }, s.makeJQueryPlugin(), s
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e.getSize))
}("undefined" != typeof window ? window : this, (function(e) {
    const t = "flickity-cell";

    function i(e) {
        this.element = e, this.element.classList.add(t), this.x = 0, this.unselect()
    }
    let n = i.prototype;
    return n.destroy = function() {
        this.unselect(), this.element.classList.remove(t), this.element.style.transform = "", this.element.removeAttribute("aria-hidden")
    }, n.getSize = function() {
        this.size = e(this.element)
    }, n.select = function() {
        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
    }, n.unselect = function() {
        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
    }, n.remove = function() {
        this.element.remove()
    }, i
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t() : (e.Flickity = e.Flickity || {}, e.Flickity.Slide = t())
}("undefined" != typeof window ? window : this, (function() {
    function e(e, t, i) {
        this.beginMargin = e, this.endMargin = t, this.cellAlign = i, this.cells = [], this.outerWidth = 0, this.height = 0
    }
    let t = e.prototype;
    return t.addCell = function(e) {
        this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 === this.cells.length && (this.x = e.x, this.firstMargin = e.size[this.beginMargin])
    }, t.updateTarget = function() {
        let e = this.getLastCell(),
            t = e ? e.size[this.endMargin] : 0,
            i = this.outerWidth - (this.firstMargin + t);
        this.target = this.x + this.firstMargin + i * this.cellAlign
    }, t.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, t.select = function() {
        this.cells.forEach((e => e.select()))
    }, t.unselect = function() {
        this.cells.forEach((e => e.unselect()))
    }, t.getCellElements = function() {
        return this.cells.map((e => e.element))
    }, e
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e.fizzyUIUtils))
}("undefined" != typeof window ? window : this, (function(e) {
    let t = {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        },
        animate: function() {
            this.applyDragForce(), this.applySelectedAttraction();
            let e = this.x;
            this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating && requestAnimationFrame((() => this.animate()))
        },
        positionSlider: function() {
            let t = this.x;
            this.isWrapping && (t = e.modulo(t, this.slideableWidth) - this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
        },
        setTranslateX: function(e, t) {
            e += this.cursorPosition, this.options.rightToLeft && (e = -e);
            let i = this.getPositionValue(e);
            this.slider.style.transform = t ? `translate3d(${i},0,0)` : `translateX(${i})`
        },
        dispatchScrollEvent: function() {
            let e = this.slides[0];
            if (!e) return;
            let t = -this.x - e.target,
                i = t / this.slidesWidth;
            this.dispatchEvent("scroll", null, [i, t])
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        },
        getPositionValue: function(e) {
            return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
        },
        settle: function(e) {
            !this.isPointerDown && Math.round(100 * this.x) === Math.round(100 * e) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function(e) {
            let t = this.cursorPosition + e;
            this._shiftCells(this.beforeShiftCells, t, -1);
            let i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        },
        _shiftCells: function(e, t, i) {
            e.forEach((e => {
                let n = t > 0 ? i : 0;
                this._wrapShiftCell(e, n), t -= e.size.outerWidth
            }))
        },
        _unshiftCells: function(e) {
            e && e.length && e.forEach((e => this._wrapShiftCell(e, 0)))
        },
        _wrapShiftCell: function(e, t) {
            this._renderCellPosition(e, e.x + this.slideableWidth * t)
        },
        integratePhysics: function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        },
        applyForce: function(e) {
            this.velocity += e
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function() {
            if (!this.isDraggable || !this.isPointerDown) return;
            let e = this.dragX - this.x - this.velocity;
            this.applyForce(e)
        },
        applySelectedAttraction: function() {
            if (this.isDraggable && this.isPointerDown || this.isFreeScrolling || !this.slides.length) return;
            let e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
            this.applyForce(e)
        }
    };
    return t
})),
function(e, t) {
    if ("object" == typeof module && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        let i = e.Flickity;
        e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
    }
}("undefined" != typeof window ? window : this, (function(e, t, i, n, s, o, a) {
    const {
        getComputedStyle: l,
        console: r
    } = e;
    let {
        jQuery: d
    } = e, c = 0, h = {};

    function u(e, t) {
        let i = n.getQueryElement(e);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                let e = h[this.element.flickityGUID];
                return e && e.option(t), e
            }
            d && (this.$element = d(this.element)), this.options = { ...this.constructor.defaults
            }, this.option(t), this._create()
        } else r && r.error(`Bad element for Flickity: ${i||e}`)
    }
    u.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, u.create = {};
    let m = u.prototype;
    Object.assign(m, t.prototype), m._create = function() {
        let {
            resize: t,
            watchCSS: i,
            rightToLeft: n
        } = this.options, s = this.guid = ++c;
        this.element.flickityGUID = s, h[s] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.beginMargin = n ? "marginRight" : "marginLeft", this.endMargin = n ? "marginLeft" : "marginRight", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), this.focusableElems = [this.element], (t || i) && e.addEventListener("resize", this);
        for (let e in this.options.on) {
            let t = this.options.on[e];
            this.on(e, t)
        }
        for (let e in u.create) u.create[e].call(this);
        i ? this.watchCSS() : this.activate()
    }, m.option = function(e) {
        Object.assign(this.options, e)
    }, m.activate = function() {
        if (this.isActive) return;
        this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
        let e = this._filterFindCellElements(this.element.children);
        this.slider.append(...e), this.viewport.append(this.slider), this.element.append(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready")
    }, m._createSlider = function() {
        let e = document.createElement("div");
        e.className = "flickity-slider", this.slider = e
    }, m._filterFindCellElements = function(e) {
        return n.filterFindElements(e, this.options.cellSelector)
    }, m.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._updateWrapShiftCells(), this.setGallerySize()
    }, m._makeCells = function(e) {
        return this._filterFindCellElements(e).map((e => new s(e)))
    }, m.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, m.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }, m.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0)
    }, m._positionCells = function(e) {
        e = e || 0, this.maxCellHeight = e && this.maxCellHeight || 0;
        let t = 0;
        if (e > 0) {
            let i = this.cells[e - 1];
            t = i.x + i.size.outerWidth
        }
        this.cells.slice(e).forEach((e => {
            e.x = t, this._renderCellPosition(e, t), t += e.size.outerWidth, this.maxCellHeight = Math.max(e.size.outerHeight, this.maxCellHeight)
        })), this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = this.cells.length ? this.getLastSlide().target - this.slides[0].target : 0
    }, m._renderCellPosition = function(e, t) {
        let i = t * (this.options.rightToLeft ? -1 : 1);
        this.options.percentPosition && (i *= this.size.innerWidth / e.size.width);
        let n = this.getPositionValue(i);
        e.element.style.transform = `translateX( ${n} )`
    }, m._sizeCells = function(e) {
        e.forEach((e => e.getSize()))
    }, m.updateSlides = function() {
        if (this.slides = [], !this.cells.length) return;
        let {
            beginMargin: e,
            endMargin: t
        } = this, i = new o(e, t, this.cellAlign);
        this.slides.push(i);
        let n = this._getCanCellFit();
        this.cells.forEach(((s, a) => {
            if (!i.cells.length) return void i.addCell(s);
            let l = i.outerWidth - i.firstMargin + (s.size.outerWidth - s.size[t]);
            n(a, l) || (i.updateTarget(), i = new o(e, t, this.cellAlign), this.slides.push(i)), i.addCell(s)
        })), i.updateTarget(), this.updateSelectedSlide()
    }, m._getCanCellFit = function() {
        let {
            groupCells: e
        } = this.options;
        if (!e) return () => !1;
        if ("number" == typeof e) {
            let t = parseInt(e, 10);
            return e => e % t != 0
        }
        let t = 1,
            i = "string" == typeof e && e.match(/^(\d+)%$/);
        i && (t = parseInt(i[1], 10) / 100);
        let n = (this.size.innerWidth + 1) * t;
        return (e, t) => t <= n
    }, m._init = m.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected()
    }, m.getSize = function() {
        this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    let p = {
        left: 0,
        center: .5,
        right: 1
    };
    m.setCellAlign = function() {
        let {
            cellAlign: e,
            rightToLeft: t
        } = this.options, i = p[e];
        this.cellAlign = void 0 !== i ? i : e, t && (this.cellAlign = 1 - this.cellAlign)
    }, m.setGallerySize = function() {
        if (!this.options.setGallerySize) return;
        let e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
        this.viewport.style.height = `${e}px`
    }, m._updateWrapShiftCells = function() {
        if (this.isWrapping = this.getIsWrapping(), !this.isWrapping) return;
        this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
        let e = this.cursorPosition,
            t = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(e, t, -1);
        let i = this.size.innerWidth - this.cursorPosition;
        this.afterShiftCells = this._getGapCells(i, 0, 1)
    }, m.getIsWrapping = function() {
        let {
            wrapAround: e
        } = this.options;
        if (!e || this.slides.length < 2) return !1;
        if ("fill" !== e) return !0;
        let t = this.slideableWidth - this.size.innerWidth;
        if (t > this.size.innerWidth) return !0;
        for (let e of this.cells)
            if (e.size.outerWidth > t) return !1;
        return !0
    }, m._getGapCells = function(e, t, i) {
        let n = [];
        for (; e > 0;) {
            let s = this.cells[t];
            if (!s) break;
            n.push(s), t += i, e -= s.size.outerWidth
        }
        return n
    }, m._containSlides = function() {
        if (!(this.options.contain && !this.isWrapping && this.cells.length)) return;
        let e = this.slideableWidth - this.getLastCell().size[this.endMargin];
        if (e < this.size.innerWidth) this.slides.forEach((t => {
            t.target = e * this.cellAlign
        }));
        else {
            let t = this.cursorPosition + this.cells[0].size[this.beginMargin],
                i = e - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach((e => {
                e.target = Math.max(e.target, t), e.target = Math.min(e.target, i)
            }))
        }
    }, m.dispatchEvent = function(e, t, i) {
        let n = t ? [t].concat(i) : i;
        if (this.emitEvent(e, n), d && this.$element) {
            let n = e += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (t) {
                let i = new d.Event(t);
                i.type = e, n = i
            }
            this.$element.trigger(n, i)
        }
    };
    const g = ["dragStart", "dragMove", "dragEnd", "pointerDown", "pointerMove", "pointerEnd", "staticClick"];
    let y = m.emitEvent;
    m.emitEvent = function(e, t) {
        if ("staticClick" === e) {
            let e = this.getParentCell(t[0].target),
                i = e && e.element,
                n = e && this.cells.indexOf(e);
            t = t.concat(i, n)
        }
        if (y.call(this, e, t), !g.includes(e) || !d || !this.$element) return;
        e += this.options.namespaceJQueryEvents ? ".flickity" : "";
        let i = t.shift(0),
            n = new d.Event(i);
        n.type = e, this.$element.trigger(n, t)
    }, m.select = function(e, t, i) {
        if (!this.isActive) return;
        if (e = parseInt(e, 10), this._wrapSelect(e), (this.isWrapping || t) && (e = n.modulo(e, this.slides.length)), !this.slides[e]) return;
        let s = this.selectedIndex;
        this.selectedIndex = e, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e !== s && this.dispatchEvent("change", null, [e])
    }, m._wrapSelect = function(e) {
        if (!this.isWrapping) return;
        const {
            selectedIndex: t,
            slideableWidth: i,
            slides: {
                length: s
            }
        } = this;
        if (!this.isDragSelect) {
            let i = n.modulo(e, s),
                o = Math.abs(i - t),
                a = Math.abs(i + s - t),
                l = Math.abs(i - s - t);
            a < o ? e += s : l < o && (e -= s)
        }
        e < 0 ? this.x -= i : e >= s && (this.x += i)
    }, m.previous = function(e, t) {
        this.select(this.selectedIndex - 1, e, t)
    }, m.next = function(e, t) {
        this.select(this.selectedIndex + 1, e, t)
    }, m.updateSelectedSlide = function() {
        let e = this.slides[this.selectedIndex];
        e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0])
    }, m.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }, m.selectInitialIndex = function() {
        let e = this.options.initialIndex;
        if (this.isInitActivated) return void this.select(this.selectedIndex, !1, !0);
        if (e && "string" == typeof e) {
            if (this.queryCell(e)) return void this.selectCell(e, !1, !0)
        }
        let t = 0;
        e && this.slides[e] && (t = e), this.select(t, !1, !0)
    }, m.selectCell = function(e, t, i) {
        let n = this.queryCell(e);
        if (!n) return;
        let s = this.getCellSlideIndex(n);
        this.select(s, t, i)
    }, m.getCellSlideIndex = function(e) {
        let t = this.slides.find((t => t.cells.includes(e)));
        return this.slides.indexOf(t)
    }, m.getCell = function(e) {
        for (let t of this.cells)
            if (t.element === e) return t
    }, m.getCells = function(e) {
        return (e = n.makeArray(e)).map((e => this.getCell(e))).filter(Boolean)
    }, m.getCellElements = function() {
        return this.cells.map((e => e.element))
    }, m.getParentCell = function(e) {
        let t = this.getCell(e);
        if (t) return t;
        let i = e.closest(".flickity-slider > *");
        return this.getCell(i)
    }, m.getAdjacentCellElements = function(e, t) {
        if (!e) return this.selectedSlide.getCellElements();
        t = void 0 === t ? this.selectedIndex : t;
        let i = this.slides.length;
        if (1 + 2 * e >= i) return this.getCellElements();
        let s = [];
        for (let o = t - e; o <= t + e; o++) {
            let e = this.isWrapping ? n.modulo(o, i) : o,
                t = this.slides[e];
            t && (s = s.concat(t.getCellElements()))
        }
        return s
    }, m.queryCell = function(e) {
        if ("number" == typeof e) return this.cells[e];
        return "string" == typeof e && !e.match(/^[#.]?[\d/]/) && (e = this.element.querySelector(e)), this.getCell(e)
    }, m.uiChange = function() {
        this.emitEvent("uiChange")
    }, m.onresize = function() {
        this.watchCSS(), this.resize()
    }, n.debounceMethod(u, "onresize", 150), m.resize = function() {
        if (!this.isActive || this.isAnimating || this.isDragging) return;
        this.getSize(), this.isWrapping && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._updateWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
        let e = this.selectedElements && this.selectedElements[0];
        this.selectCell(e, !1, !0)
    }, m.watchCSS = function() {
        if (!this.options.watchCSS) return;
        l(this.element, ":after").content.includes("flickity") ? this.activate() : this.deactivate()
    }, m.onkeydown = function(e) {
        let {
            activeElement: t
        } = document, i = u.keyboardHandlers[e.key];
        this.options.accessibility && t && i && this.focusableElems.some((e => t === e)) && i.call(this)
    }, u.keyboardHandlers = {
        ArrowLeft: function() {
            this.uiChange(), this[this.options.rightToLeft ? "next" : "previous"]()
        },
        ArrowRight: function() {
            this.uiChange(), this[this.options.rightToLeft ? "previous" : "next"]()
        }
    }, m.focus = function() {
        this.element.focus({
            preventScroll: !0
        })
    }, m.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((e => e.destroy())), this.viewport.remove(), this.element.append(...this.slider.children), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, m.destroy = function() {
        this.deactivate(), e.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), d && this.$element && d.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid]
    }, Object.assign(m, a), u.data = function(e) {
        if (e = n.getQueryElement(e)) return h[e.flickityGUID]
    }, n.htmlInit(u, "flickity");
    let {
        jQueryBridget: b
    } = e;
    return d && b && b("flickity", u, d), u.setJQuery = function(e) {
        d = e
    }, u.Cell = s, u.Slide = o, u
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils)
}("undefined" != typeof window ? window : this, (function(e, t, i, n) {
    Object.assign(t.defaults, {
        draggable: ">1",
        dragThreshold: 3
    });
    let s = t.prototype;

    function o() {
        return {
            x: e.pageXOffset,
            y: e.pageYOffset
        }
    }
    return Object.assign(s, i.prototype), s.touchActionValue = "", t.create.drag = function() {
        this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), this.on("pointerDown", this.handlePointerDown), this.on("pointerUp", this.handlePointerUp), this.on("pointerDown", this.handlePointerDone), this.on("dragStart", this.handleDragStart), this.on("dragMove", this.handleDragMove), this.on("dragEnd", this.handleDragEnd), this.on("staticClick", this.handleStaticClick)
    }, s.onActivateDrag = function() {
        this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
    }, s.onDeactivateDrag = function() {
        this.unbindHandles(), this.element.classList.remove("is-draggable")
    }, s.updateDraggable = function() {
        ">1" === this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.element.classList.toggle("is-draggable", this.isDraggable)
    }, s._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }, s.handlePointerDown = function(t) {
        if (!this.isDraggable) return void this.bindActivePointerEvents(t);
        let i = "touchstart" === t.type,
            n = "touch" === t.pointerType,
            s = t.target.matches("input, textarea, select");
        i || n || s || t.preventDefault(), s || this.focus(), document.activeElement !== this.element && document.activeElement.blur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = o(), e.addEventListener("scroll", this), this.bindActivePointerEvents(t)
    }, s.hasDragStarted = function(e) {
        return Math.abs(e.x) > this.options.dragThreshold
    }, s.handlePointerUp = function() {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down")
    }, s.handlePointerDone = function() {
        e.removeEventListener("scroll", this), delete this.pointerDownScroll
    }, s.handleDragStart = function() {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this))
    }, s.handleDragMove = function(e, t, i) {
        if (!this.isDraggable) return;
        this.previousDragX = this.dragX;
        let n = this.options.rightToLeft ? -1 : 1;
        this.isWrapping && (i.x %= this.slideableWidth);
        let s = this.dragStartPosition + i.x * n;
        if (!this.isWrapping) {
            let e = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = s > e ? .5 * (s + e) : s;
            let t = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            s = s < t ? .5 * (s + t) : s
        }
        this.dragX = s, this.dragMoveTime = new Date
    }, s.handleDragEnd = function() {
        if (!this.isDraggable) return;
        let {
            freeScroll: e
        } = this.options;
        e && (this.isFreeScrolling = !0);
        let t = this.dragEndRestingSelect();
        if (e && !this.isWrapping) {
            let e = this.getRestingPosition();
            this.isFreeScrolling = -e > this.slides[0].target && -e < this.getLastSlide().target
        } else e || t !== this.selectedIndex || (t += this.dragEndBoostSelect());
        delete this.previousDragX, this.isDragSelect = this.isWrapping, this.select(t), delete this.isDragSelect
    }, s.dragEndRestingSelect = function() {
        let e = this.getRestingPosition(),
            t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
            i = this._getClosestResting(e, t, 1),
            n = this._getClosestResting(e, t, -1);
        return i.distance < n.distance ? i.index : n.index
    }, s._getClosestResting = function(e, t, i) {
        let n = this.selectedIndex,
            s = 1 / 0,
            o = this.options.contain && !this.isWrapping ? (e, t) => e <= t : (e, t) => e < t;
        for (; o(t, s) && (n += i, s = t, null !== (t = this.getSlideDistance(-e, n)));) t = Math.abs(t);
        return {
            distance: s,
            index: n - i
        }
    }, s.getSlideDistance = function(e, t) {
        let i = this.slides.length,
            s = this.options.wrapAround && i > 1,
            o = s ? n.modulo(t, i) : t,
            a = this.slides[o];
        if (!a) return null;
        let l = s ? this.slideableWidth * Math.floor(t / i) : 0;
        return e - (a.target + l)
    }, s.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
        let e = this.getSlideDistance(-this.dragX, this.selectedIndex),
            t = this.previousDragX - this.dragX;
        return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0
    }, s.onscroll = function() {
        let e = o(),
            t = this.pointerDownScroll.x - e.x,
            i = this.pointerDownScroll.y - e.y;
        (Math.abs(t) > 3 || Math.abs(i) > 3) && this.pointerDone()
    }, t
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./core")) : t(e.Flickity)
}("undefined" != typeof window ? window : this, (function(e) {
    const t = "http://www.w3.org/2000/svg";

    function i(e, t, i) {
        this.increment = e, this.direction = t, this.isPrevious = "previous" === e, this.isLeft = "left" === t, this._create(i)
    }
    i.prototype._create = function(e) {
        let t = this.element = document.createElement("button");
        t.className = `flickity-button flickity-prev-next-button ${this.increment}`;
        let i = this.isPrevious ? "Previous" : "Next";
        t.setAttribute("type", "button"), t.setAttribute("aria-label", i), this.disable();
        let n = this.createSVG(i, e);
        t.append(n)
    }, i.prototype.createSVG = function(e, i) {
        let n = document.createElementNS(t, "svg");
        n.setAttribute("class", "flickity-button-icon"), n.setAttribute("viewBox", "0 0 100 100");
        let s = document.createElementNS(t, "title");
        s.append(e);
        let o = document.createElementNS(t, "path"),
            a = function(e) {
                if ("string" == typeof e) return e;
                let {
                    x0: t,
                    x1: i,
                    x2: n,
                    x3: s,
                    y1: o,
                    y2: a
                } = e;
                return `M ${t}, 50\n      L ${i}, ${o+50}\n      L ${n}, ${a+50}\n      L ${s}, 50\n      L ${n}, ${50-a}\n      L ${i}, ${50-o}\n      Z`
            }(i);
        return o.setAttribute("d", a), o.setAttribute("class", "arrow"), this.isLeft || o.setAttribute("transform", "translate(100, 100) rotate(180)"), n.append(s, o), n
    }, i.prototype.enable = function() {
        this.element.removeAttribute("disabled")
    }, i.prototype.disable = function() {
        this.element.setAttribute("disabled", !0)
    }, Object.assign(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), e.create.prevNextButtons = function() {
        if (!this.options.prevNextButtons) return;
        let {
            rightToLeft: e,
            arrowShape: t
        } = this.options, n = e ? "right" : "left", s = e ? "left" : "right";
        this.prevButton = new i("previous", n, t), this.nextButton = new i("next", s, t), this.focusableElems.push(this.prevButton.element), this.focusableElems.push(this.nextButton.element), this.handlePrevButtonClick = () => {
            this.uiChange(), this.previous()
        }, this.handleNextButtonClick = () => {
            this.uiChange(), this.next()
        }, this.on("activate", this.activatePrevNextButtons), this.on("select", this.updatePrevNextButtons)
    };
    let n = e.prototype;
    return n.updatePrevNextButtons = function() {
        let e = this.slides.length ? this.slides.length - 1 : 0;
        this.updatePrevNextButton(this.prevButton, 0), this.updatePrevNextButton(this.nextButton, e)
    }, n.updatePrevNextButton = function(e, t) {
        if (this.isWrapping && this.slides.length > 1) return void e.enable();
        let i = this.selectedIndex !== t;
        e[i ? "enable" : "disable"](), !i && document.activeElement === e.element && this.focus()
    }, n.activatePrevNextButtons = function() {
        this.prevButton.element.addEventListener("click", this.handlePrevButtonClick), this.nextButton.element.addEventListener("click", this.handleNextButtonClick), this.element.append(this.prevButton.element, this.nextButton.element), this.on("deactivate", this.deactivatePrevNextButtons)
    }, n.deactivatePrevNextButtons = function() {
        this.prevButton.element.remove(), this.nextButton.element.remove(), this.prevButton.element.removeEventListener("click", this.handlePrevButtonClick), this.nextButton.element.removeEventListener("click", this.handleNextButtonClick), this.off("deactivate", this.deactivatePrevNextButtons)
    }, e.PrevNextButton = i, e
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./core"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function i() {
        this.holder = document.createElement("div"), this.holder.className = "flickity-page-dots", this.dots = []
    }
    i.prototype.setDots = function(e) {
        let t = e - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }, i.prototype.addDots = function(e) {
        let t = new Array(e).fill().map(((e, t) => {
            let i = document.createElement("button");
            i.setAttribute("type", "button");
            let n = t + 1 + this.dots.length;
            return i.className = "flickity-page-dot", i.textContent = `View slide ${n}`, i
        }));
        this.holder.append(...t), this.dots = this.dots.concat(t)
    }, i.prototype.removeDots = function(e) {
        this.dots.splice(this.dots.length - e, e).forEach((e => e.remove()))
    }, i.prototype.updateSelected = function(e) {
        this.selectedDot && (this.selectedDot.classList.remove("is-selected"), this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[e], this.selectedDot.classList.add("is-selected"), this.selectedDot.setAttribute("aria-current", "step"))
    }, e.PageDots = i, Object.assign(e.defaults, {
        pageDots: !0
    }), e.create.pageDots = function() {
        this.options.pageDots && (this.pageDots = new i, this.handlePageDotsClick = this.onPageDotsClick.bind(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    };
    let n = e.prototype;
    return n.activatePageDots = function() {
        this.pageDots.setDots(this.slides.length), this.focusableElems.push(...this.pageDots.dots), this.pageDots.holder.addEventListener("click", this.handlePageDotsClick), this.element.append(this.pageDots.holder)
    }, n.onPageDotsClick = function(e) {
        let t = this.pageDots.dots.indexOf(e.target); - 1 !== t && (this.uiChange(), this.select(t))
    }, n.updateSelectedPageDots = function() {
        this.pageDots.updateSelected(this.selectedIndex)
    }, n.updatePageDots = function() {
        this.pageDots.dots.forEach((e => {
            t.removeFrom(this.focusableElems, e)
        })), this.pageDots.setDots(this.slides.length), this.focusableElems.push(...this.pageDots.dots)
    }, n.deactivatePageDots = function() {
        this.pageDots.holder.remove(), this.pageDots.holder.removeEventListener("click", this.handlePageDotsClick)
    }, e.PageDots = i, e
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./core")) : t(e.Flickity)
}("undefined" != typeof window ? window : this, (function(e) {
    function t(e, t) {
        this.autoPlay = e, this.onTick = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }
    t.prototype.play = function() {
        if ("playing" === this.state) return;
        document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick())
    }, t.prototype.tick = function() {
        if ("playing" !== this.state) return;
        let e = "number" == typeof this.autoPlay ? this.autoPlay : 3e3;
        this.clear(), this.timeout = setTimeout((() => {
            this.onTick(), this.tick()
        }), e)
    }, t.prototype.stop = function() {
        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }, t.prototype.clear = function() {
        clearTimeout(this.timeout)
    }, t.prototype.pause = function() {
        "playing" === this.state && (this.state = "paused", this.clear())
    }, t.prototype.unpause = function() {
        "paused" === this.state && this.play()
    }, t.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    }, t.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }, Object.assign(e.defaults, {
        pauseAutoPlayOnHover: !0
    }), e.create.player = function() {
        this.player = new t(this.options.autoPlay, (() => {
            this.next(!0)
        })), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    };
    let i = e.prototype;
    return i.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, i.playPlayer = function() {
        this.player.play()
    }, i.stopPlayer = function() {
        this.player.stop()
    }, i.pausePlayer = function() {
        this.player.pause()
    }, i.unpausePlayer = function() {
        this.player.unpause()
    }, i.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this)
    }, i.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, i.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
    }, e.Player = t, e
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./core"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}("undefined" != typeof window ? window : this, (function(e, t) {
    let i = e.prototype;
    return i.insert = function(e, t) {
        let i = this._makeCells(e);
        if (!i || !i.length) return;
        let n = this.cells.length;
        t = void 0 === t ? n : t;
        let s = function(e) {
                let t = document.createDocumentFragment();
                return e.forEach((e => t.appendChild(e.element))), t
            }(i),
            o = t === n;
        if (o) this.slider.appendChild(s);
        else {
            let e = this.cells[t].element;
            this.slider.insertBefore(s, e)
        }
        if (0 === t) this.cells = i.concat(this.cells);
        else if (o) this.cells = this.cells.concat(i);
        else {
            let e = this.cells.splice(t, n - t);
            this.cells = this.cells.concat(i).concat(e)
        }
        this._sizeCells(i), this.cellChange(t), this.positionSliderAtSelected()
    }, i.append = function(e) {
        this.insert(e, this.cells.length)
    }, i.prepend = function(e) {
        this.insert(e, 0)
    }, i.remove = function(e) {
        let i = this.getCells(e);
        if (!i || !i.length) return;
        let n = this.cells.length - 1;
        i.forEach((e => {
            e.remove();
            let i = this.cells.indexOf(e);
            n = Math.min(i, n), t.removeFrom(this.cells, e)
        })), this.cellChange(n), this.positionSliderAtSelected()
    }, i.cellSizeChange = function(e) {
        let t = this.getCell(e);
        if (!t) return;
        t.getSize();
        let i = this.cells.indexOf(t);
        this.cellChange(i)
    }, i.cellChange = function(e) {
        let t = this.selectedElement;
        this._positionCells(e), this._updateWrapShiftCells(), this.setGallerySize();
        let i = this.getCell(t);
        i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex)
    }, e
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./core"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}("undefined" != typeof window ? window : this, (function(e, t) {
    const i = "data-flickity-lazyload",
        n = `${i}-src`,
        s = `${i}-srcset`,
        o = `img[${i}], img[${n}], img[${s}], source[${s}]`;
    e.create.lazyLoad = function() {
        this.on("select", this.lazyLoad), this.handleLazyLoadComplete = this.onLazyLoadComplete.bind(this)
    };
    let a = e.prototype;

    function l(e) {
        if (e.matches("img")) {
            let t = e.getAttribute(i),
                o = e.getAttribute(n),
                a = e.getAttribute(s);
            if (t || o || a) return e
        }
        return [...e.querySelectorAll(o)]
    }

    function r(e, t) {
        this.img = e, this.onComplete = t, this.load()
    }
    return a.lazyLoad = function() {
        let {
            lazyLoad: e
        } = this.options;
        if (!e) return;
        let t = "number" == typeof e ? e : 0;
        this.getAdjacentCellElements(t).map(l).flat().forEach((e => new r(e, this.handleLazyLoadComplete)))
    }, a.onLazyLoadComplete = function(e, t) {
        let i = this.getParentCell(e),
            n = i && i.element;
        this.cellSizeChange(n), this.dispatchEvent("lazyLoad", t, n)
    }, r.prototype.handleEvent = t.handleEvent, r.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
        let e = this.img.getAttribute(i) || this.img.getAttribute(n),
            t = this.img.getAttribute(s);
        this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute(i), this.img.removeAttribute(n), this.img.removeAttribute(s)
    }, r.prototype.onload = function(e) {
        this.complete(e, "flickity-lazyloaded")
    }, r.prototype.onerror = function(e) {
        this.complete(e, "flickity-lazyerror")
    }, r.prototype.complete = function(e, t) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this), (this.img.parentNode.matches("picture") ? this.img.parentNode : this.img).classList.add(t), this.onComplete(this.img, e)
    }, e.LazyLoader = r, e
})),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./core"), require("imagesloaded")) : t(e.Flickity, e.imagesLoaded)
}("undefined" != typeof window ? window : this, (function(e, t) {
    return e.create.imagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, e.prototype.imagesLoaded = function() {
        if (!this.options.imagesLoaded) return;
        t(this.slider).on("progress", ((e, t) => {
            let i = this.getParentCell(t.img);
            this.cellSizeChange(i && i.element), this.options.freeScroll || this.positionSliderAtSelected()
        }))
    }, e
}));
const fullText = [{
    heading: "What we believe",
    subHeading: "We believe that the rush of the game matters more than the outcome. A rush that comes from competing on the strength of our skills, where every win is deserved, and any loss is simply training ground to play the next game better. We believe that we aren’t just a platform for users to win money in games, but a community of players with integrity, who are committed to sportsmanship, transparency, and fairplay."
}, {
    heading: "How we do it",
    subHeading: "As Hike, a trusted Indian youth-centric brand, we have years of experience in building innovative, high-quality technology products for mobile users in emerging markets. We ensure that every aspect of the product is of the highest quality, rigorously tested, and designed to work exactly as expected. At the heart of Rush is our community of players, where every player has a HikeMoji-led identity that not just ensures safety and privacy, but also adds to the fun of gameplay through innovative self-expression. We respect the trust that our community places in us and go the extra mile to ensure that we are transparent in all the experiences we offer - managing the player’s online wallet securely, matching players with other skilled players (no bots!), and our 24-hour customer service to address any specific requests."
}, {
    heading: "Why we are different",
    subHeading: "All our games are skill-based. It is the player’s mettle that determines wins. This is a community of real players only. We have no bots. The HikeMoji avatars add excitement and expression to the game where every emotion can be shared uniquely - creating a sense of community with fellow players. For the first time in India, we have introduced a VIP membership plan where members can save upto 20% on the entry fee in each game."
}, {
    heading: "Guidelines and values",
    subHeading: "We deeply believe in sportsmanship, fairplay, transparency and integrity. We demand this of ourselves and our community."
}];
window.allowSubmit = !0;
var openImageOverlay = !1,
    env = "development",
    baseUrl = "http://thenavratan.com/";
("thenavratan.com" === window.location.hostname || "thenavratan.com" === window.location.hostname || "thenavratan.comn" === window.location.hostname || window.location.hostname.includes("thenavratan.com")) && (baseUrl = "https://thenavratan.com", env = "production");
var uaParser = new UAParser(window.navigator.userAgent),
    deviceInfo = uaParser.getDevice();

function handleOpenImageOverlay(e) {
    if (!1 === openImageOverlay) {
        document.getElementsByTagName("body")[0].style = "overflow: hidden;", document.getElementsByTagName("html")[0].style = "overflow: hidden;";
        let t = document.getElementById("imageOverlay");
        document.getElementById("imageOverlayImg").src = e, t.style = "display: flex; align-items: center; justify-content: center;", openImageOverlay = !0
    } else {
        document.getElementsByTagName("body")[0].style = "overflow: auto;", document.getElementsByTagName("html")[0].style = "overflow: auto;", document.getElementById("imageOverlay").style = "display: none;", openImageOverlay = !1
    }
}

function onKnowMoreClick(e) {
    document.getElementsByClassName("secondModalHeading")[0].innerHTML = fullText[e].heading, document.getElementsByClassName("secondModalText")[0].innerHTML = fullText[e].subHeading, document.getElementsByClassName("secondModalHeadingmob")[0].innerHTML = fullText[e].heading, document.getElementsByClassName("secondModalTextmob")[0].innerHTML = fullText[e].subHeading, document.getElementById("ModalSecondFold") && (document.getElementById("ModalSecondFold").style.display = "flex"), document.getElementById("ModalSecondFoldMob") && (document.getElementById("ModalSecondFoldMob").style.display = "flex"), document.getElementsByTagName("body")[0].style.overflow = "hidden"
}

function secondFoldClose() {
    document.getElementById("ModalSecondFold").style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto"
}

function secondFoldCloseMob() {
    document.getElementById("ModalSecondFoldMob").style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto"
}

function onSignup() {
    document.getElementsByClassName("firstModal")[0].style.display = "none", document.getElementsByClassName("secondModal")[0].style.display = "flex"
}

function onSignupMob() {
    document.getElementsByClassName("firstModalMob")[0].style.display = "none", document.getElementsByClassName("secondModalMob")[0].style.display = "flex"
}

function onSubmit() {
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status && (document.getElementById("name").value = "", document.getElementById("number").value = "", document.getElementsByClassName("secondModal")[0].style.display = "none", document.getElementsByClassName("thirdModal")[0].style.display = "flex", document.getElementById("submitbtn").disabled = !0)
    }, e.open("POST", "https://prelaunch-invite.getrushapp.com/user", !0), e.setRequestHeader("Content-type", "application/json");
    let t = document.getElementById("name").value,
        i = document.getElementById("number").value;
    var n = JSON.stringify({
        name: t,
        mobileNumber: i
    });
    e.send(n)
}

function onMobSubmit() {
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status && (document.getElementById("namemob").value = "", document.getElementById("numbermob").value = "", document.getElementsByClassName("secondModalMob")[0].style.display = "none", document.getElementsByClassName("thirdModalMob")[0].style.display = "flex", document.getElementById("submitbtnmob").disabled = !0)
    }, e.open("POST", "https://prelaunch-invite.getrushapp.com/user", !0), e.setRequestHeader("Content-type", "application/json");
    let t = document.getElementById("namemob").value,
        i = document.getElementById("numbermob").value;
    var n = JSON.stringify({
        name: t,
        mobileNumber: i
    });
    e.send(n)
}

function onAndroidBtnClick() {
    document.getElementsByClassName("firstModal")[0].style.display = "flex", document.getElementsByClassName("secondModal")[0].style.display = "none", document.getElementsByClassName("thirdModal")[0].style.display = "none", document.getElementById("ModalfirstFold").style.display = "flex", document.getElementsByTagName("body")[0].style.overflow = "hidden";
    let e = {
        p: "web_user_action",
        o: "click_download_qr",
        vs: "web"
    };
    sendAnalytics(e), window.ga && ga("send", "event", "click", "click_download_qr", "Download QR Click")
}

function onAndroidBtnClickMob() {
    document.getElementsByClassName("firstModalMob")[0].style.display = "flex", document.getElementsByClassName("secondModalMob")[0].style.display = "none", document.getElementsByClassName("thirdModalMob")[0].style.display = "none", document.getElementById("ModalfirstFoldMob").style.display = "flex", document.getElementsByTagName("body")[0].style.overflow = "hidden"
}

function firstFoldClose() {
    document.getElementById("ModalfirstFold").style.display = "none", document.getElementById("ModalfirstFoldMob").style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto"
}

function redirectedToAppStore() {
    window.ga && ga("send", "event", "click", "redirect", "Redirect to App Store")
}

function arrowClick() {
    if (!(window.location.href.indexOf("ludo1") > -1 || window.location.href.indexOf("ludo2") > -1)) {
        var e = $(".secondFoldMob").offset().top - 80;
        $("html, body").stop().animate({
            scrollTop: e
        }, 400), window.ga && ga("send", "event", "click", "scroll-down-click", "Scroll Down Click")
    }
}

function validation() {
    if (document.getElementById("submitbtn").disabled = !0, document.getElementById("submitbtnmob").disabled = !0, window.allowSubmit && document.getElementById("namemob") && document.getElementById("numbermob") && "" != document.getElementById("namemob").value && "" != document.getElementById("numbermob").value) {
        var e = /^[6789]\d{9}$/;
        document.getElementById("numbermob").value.match(e) && (document.getElementById("submitbtnmob").disabled = !1)
    }
    if (window.allowSubmit && document.getElementById("name") && document.getElementById("number") && "" != document.getElementById("name").value && "" != document.getElementById("number").value) {
        e = /^[6789]\d{9}$/;
        document.getElementById("number").value.match(e) && (document.getElementById("submitbtn").disabled = !1)
    }
}

function validatePhoneNum(e) {
    return !!(document.getElementsByName("phoneNumber")[e].value && document.getElementsByName("phoneNumber")[e].value.toString()).match(/^[6789]\d{9}$/)
}

function hidetickMob() {
    window.allowSubmit = !1, document.getElementById("tickImgMob").style.display = "none", document.getElementById("checkBoxMob").style.display = "block", document.getElementById("submitbtnmob").disabled = !0
}

function showtickMob() {
    window.allowSubmit = !0, document.getElementById("checkBoxMob").style.display = "none", document.getElementById("tickImgMob").style.display = "block", validation()
}

function hidetick() {
    window.allowSubmit = !1, document.getElementById("tickImg").style.display = "none", document.getElementById("checkBox").style.display = "block", document.getElementById("submitbtn").disabled = !0
}

function showtick() {
    window.allowSubmit = !0, document.getElementById("checkBox").style.display = "none", document.getElementById("tickImg").style.display = "block", validation()
}

function elementInViewport2(e) {
    if (e) {
        for (var t = e.offsetTop, i = e.offsetLeft, n = e.offsetWidth, s = e.offsetHeight; e.offsetParent;) t += (e = e.offsetParent).offsetTop, i += e.offsetLeft;
        return t < window.pageYOffset + window.innerHeight && i < window.pageXOffset + window.innerWidth && t + s > window.pageYOffset && i + n > window.pageXOffset
    }
}

function showHeader() {
    let e = elementInViewport2(document.getElementById("downloadAndBtn")) || elementInViewport2(document.getElementById("downloadIosBtn"));
    document.getElementById("mobileHeader") ? e ? document.getElementById("mobileHeader").classList.remove("move-to-top") : document.getElementById("mobileHeader").classList.add("move-to-top") : document.getElementById("mobileHeaderNew") && (e ? document.getElementById("mobileHeaderNew").classList.remove("move-to-top") : document.getElementById("mobileHeaderNew").classList.add("move-to-top"))
}

function showFooterInstallBtn() {
    !elementInViewport2(document.getElementById("playstore-button")) && document.getElementById("footerBtnPlaystore") ? document.getElementById("footerBtnPlaystore").classList.add("showFooterBtn") : document.getElementById("footerBtnPlaystore") && document.getElementById("footerBtnPlaystore").classList.remove("showFooterBtn")
}

function validateMobileNumber(e) {
    return !!e.match(/^[6789]\d{9}$/)
}

function sendSmsLink(e) {
    const t = e.parentNode.parentNode.children[0],
        i = t.getElementsByTagName("input")[0];
    if (t.removeAttribute("style"), i.removeAttribute("style"), !validateMobileNumber(i.value)) return t.style.background = "red", void(i.style.color = "red");
    e.innerHTML = "";
    var n = new XMLHttpRequest;
    n.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status ? (e.innerHTML = "SMS with link sent &#x2713;", setTimeout((function() {
            e.innerHTML = "Get Download Link", i.value = ""
        }), 3e3)) : (500 == this.status || 429 == this.status) && (e.innerHTML = "Retry ⟳")
    }, n.open("POST", `${baseUrl}/v1/app/sms`, !0), n.setRequestHeader("Content-type", "application/json");
    let s = i.value;
    var o = JSON.stringify({
        msisdn: s,
        env: "production"
    });
    n.send(o);
    let a = {
        p: "web_user_action",
        o: "click_get_sms",
        vs: "web"
    };
    a.d = s, a.msisdn = s, sendAnalytics(a), window.ga && ga("send", "event", "click", "click_get_sms", "Get Sms Click")
}

function sendSMS() {
    if (!validatePhoneNum(0)) return document.getElementsByClassName("errorText")[0].innerHTML = "Please enter a valid 10 digit number", document.getElementsByClassName("errorText")[0].style.display = "flex", document.getElementsByClassName("phoneNumTextField").length > 0 && (document.getElementsByClassName("phoneNumTextField")[0].style.borderColor = "#FF4E4E"), void(document.getElementById("phoneNum").style.color = "#FF4E4E");
    document.getElementsByClassName("smsButtonText")[0].innerHTML = "", document.getElementsByClassName("lds-spinner")[0].style.display = "inline-block";
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status ? (document.getElementsByClassName("lds-spinner")[0].style.display = "none", document.getElementsByClassName("smsButtonText")[0].innerHTML = "SMS with link sent &#x2713;", setTimeout((function() {
            document.getElementsByClassName("smsButtonText")[0].innerHTML = "Get Download Link", document.getElementsByClassName("phoneNum")[0].value = "", document.getElementsByClassName("smsButton")[0].style.opacity = "1"
        }), 3e3)) : 500 == this.status ? (document.getElementsByClassName("errorText")[0].innerHTML = "Unable to reach, retry", document.getElementsByClassName("lds-spinner")[0].style.display = "none", document.getElementsByClassName("errorText")[0].style.display = "flex", document.getElementsByClassName("smsButtonText")[0].innerHTML = "Retry ⟳", document.getElementsByClassName("smsButton")[0].style.opacity = "1") : 429 == this.status && (document.getElementsByClassName("errorText")[0].innerHTML = "Too many requests, please try after some time", document.getElementsByClassName("lds-spinner")[0].style.display = "none", document.getElementsByClassName("errorText")[0].style.display = "flex", document.getElementsByClassName("smsButtonText")[0].innerHTML = "Retry ⟳", document.getElementsByClassName("smsButton")[0].style.opacity = "1")
    }, e.open("POST", `${baseUrl}/v1/app/sms`, !0), e.setRequestHeader("Content-type", "application/json");
    let t = document.getElementsByClassName("phoneNum")[0].value;
    var i = JSON.stringify({
        msisdn: t,
        env: "production"
    });
    e.send(i);
    let n = {
        p: "web_user_action",
        o: "click_get_sms",
        vs: "web"
    };
    n.d = t, n.msisdn = t, sendAnalytics(n), window.ga && ga("send", "event", "click", "click_get_sms", "Get Sms Click")
}

function sendSMS1() {
    if (!validatePhoneNum(1)) return document.getElementsByClassName("errorText")[1].innerHTML = "Please enter a valid 10 digit number", document.getElementsByClassName("errorText")[1].style.display = "flex", document.getElementsByClassName("phoneNumTextField").length > 0 && (document.getElementsByClassName("phoneNumTextField")[1].style.borderColor = "#FF4E4E"), void(document.getElementsByClassName("phoneNum")[1].style.color = "#FF4E4E");
    document.getElementsByClassName("smsButtonText")[1].innerHTML = "", document.getElementsByClassName("lds-spinner")[1].style.display = "inline-block";
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status ? (document.getElementsByClassName("lds-spinner")[1].style.display = "none", document.getElementsByClassName("smsButtonText")[1].innerHTML = "SMS with link sent &#x2713;", document.getElementsByClassName("smsButton")[1].style.opacity = "0.5", setTimeout((function() {
            document.getElementsByClassName("smsButtonText")[1].innerHTML = "Get Download Link", document.getElementsByClassName("phoneNum")[1].value = "", document.getElementsByClassName("smsButton")[1].style.opacity = "1"
        }), 3e3)) : 500 == this.status ? (document.getElementsByClassName("errorText")[1].innerHTML = "Unable to reach, retry", document.getElementsByClassName("lds-spinner")[1].style.display = "none", document.getElementsByClassName("errorText")[1].style.display = "flex", document.getElementsByClassName("smsButtonText")[1].innerHTML = "Retry ⟳", document.getElementsByClassName("smsButton")[1].style.opacity = "1") : 429 == this.status && (document.getElementsByClassName("errorText")[1].innerHTML = "Too many requests, please try after some time", document.getElementsByClassName("lds-spinner")[1].style.display = "none", document.getElementsByClassName("errorText")[1].style.display = "flex", document.getElementsByClassName("smsButtonText")[1].innerHTML = "Retry ⟳", document.getElementsByClassName("smsButton")[1].style.opacity = "1")
    }, e.open("POST", `${baseUrl}/v1/app/sms`, !0), e.setRequestHeader("Content-type", "application/json");
    let t = document.getElementsByClassName("phoneNum")[1].value;
    var i = JSON.stringify({
        msisdn: t,
        env: "production"
    });
    e.send(i);
    let n = {
        p: "web_user_action",
        o: "click_get_sms",
        vs: "web"
    };
    n.d = t, n.msisdn = t, sendAnalytics(n), window.ga && ga("send", "event", "click", "click_get_sms", "Get Sms Click")
}

function sendSMS2() {
    if (!validatePhoneNum(2)) return document.getElementsByClassName("errorText")[2].innerHTML = "Please enter a valid 10 digit number", document.getElementsByClassName("errorText")[2].style.display = "flex", document.getElementsByClassName("phoneNumTextField").length > 0 && (document.getElementsByClassName("phoneNumTextField")[2].style.borderColor = "#FF4E4E"), void(document.getElementsByClassName("phoneNum")[2].style.color = "#FF4E4E");
    document.getElementsByClassName("smsButtonText")[2].innerHTML = "", document.getElementsByClassName("lds-spinner")[2].style.display = "inline-block";
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status ? (document.getElementsByClassName("lds-spinner")[2].style.display = "none", document.getElementsByClassName("smsButtonText")[2].innerHTML = "SMS with link sent &#x2713;", document.getElementsByClassName("smsButton")[2].style.opacity = "0.5", setTimeout((function() {
            document.getElementsByClassName("smsButtonText")[2].innerHTML = "Get Download Link", document.getElementsByClassName("phoneNum")[2].value = "", document.getElementsByClassName("smsButton")[2].style.opacity = "1"
        }), 3e3)) : 500 == this.status ? (document.getElementsByClassName("errorText")[2].innerHTML = "Unable to reach, retry", document.getElementsByClassName("lds-spinner")[2].style.display = "none", document.getElementsByClassName("errorText")[2].style.display = "flex", document.getElementsByClassName("smsButtonText")[2].innerHTML = "Retry ⟳", document.getElementsByClassName("smsButton")[2].style.opacity = "1") : 429 == this.status && (document.getElementsByClassName("errorText")[2].innerHTML = "Too many requests, please try after some time", document.getElementsByClassName("lds-spinner")[2].style.display = "none", document.getElementsByClassName("errorText")[2].style.display = "flex", document.getElementsByClassName("smsButtonText")[2].innerHTML = "Retry ⟳", document.getElementsByClassName("smsButton")[2].style.opacity = "1")
    }, e.open("POST", `${baseUrl}/v1/app/sms`, !0), e.setRequestHeader("Content-type", "application/json");
    let t = document.getElementsByClassName("phoneNum")[2].value;
    var i = JSON.stringify({
        msisdn: t,
        env: "production"
    });
    e.send(i);
    let n = {
        p: "web_user_action",
        o: "click_get_sms",
        vs: "web"
    };
    n.d = t, n.msisdn = t, sendAnalytics(n), window.ga && ga("send", "event", "click", "click_get_sms", "Get Sms Click")
}
async function initFingerprintJS() {
    return FingerprintJS.load().then((e => e.get().then((e => e.visitorId))))
}

function firePixelEvent(e, t) {
    try {
        window.fbq && window.fbq("trackCustom", e, Object.assign({}, t))
    } catch (e) {
        console.log(e, "err")
    }
}
async function getUUID() {
    let e = "";
    return "undefined" != typeof Storage ? localStorage.getItem("uuid") && "undefined" !== localStorage.getItem("uuid") ? e = localStorage.getItem("uuid") : (e = await initFingerprintJS(), localStorage.setItem("uuid", e)) : e = await initFingerprintJS(), e
}

function createIFrameAndDownload(e) {
    let t = document.createElement("iframe");
    t.name = "iframe_download";
    let i = document.createElement("a");
    i.target = "iframe_download", i.download = "Rush App", i.href = e, t.append(i), document.body.appendChild(t), i.click()
}

function checkIfOrganic() {
    const e = document.referrer;
    return !!(e.includes("duckduckgo.com") || e.includes("bing.com") || e.includes("yahoo.com") || e.includes("yandex.com") || e.includes("ask.com") || e.includes("google."))
}

function checkIfInternal() {
    const e = document.referrer;
    return !(!e.includes("localhost:") && !e.includes("thenavratan.com.app.link"))
}

function callBranchUrl(e) {
    let t = e + `?$s2s=true&uuid=${localStorage.getItem("uuid")}`;
    checkIfOrganic() ? t += `&~feature=organic%20search&~channel=${document.referrer}` : checkIfInternal() ? t += "&$deeplink_no_attribution=true&~channel=dna_organic" : "" == document.referrer || document.referrer.includes("getrushapp.com") || document.referrer.includes("rushgamesapp.com") ? t += "&~feature=direct" : t += `&~feature=url_referrer&~channel=${document.referrer}`, $.ajax({
        url: t,
        async: !1,
        success: function(e) {
            let t = {
                p: "branch_url_click",
                o: "click_download_apk_button",
                vs: "mobile"
            };
            sendAnalytics(t)
        },
        error: function(e) {
            let t = {
                p: "branch_url_click",
                o: "click_download_apk_button",
                vs: "mobile"
            };
            sendAnalytics(t)
        }
    })
}

function openLanguageMenu() {
    document.getElementById("mobile-hamburger-menu-bg").style.display = "block";
    const e = document.getElementById("mobile-language-menu");
    e.style.padding = "28px 20px 0px 28px", e.style.width = "280px", document.body.style.height = "100%", document.body.style.overflow = "hidden"
}

function openSideMenu() {
    document.getElementById("mobile-hamburger-menu-bg").style.display = "block";
    const e = document.getElementById("mobile-hamburger-menu");
    e.style.padding = "28px 20px 0px 28px", e.style.width = "280px", document.body.style.height = "100%", document.body.style.overflow = "hidden";
    const t = document.getElementById("secondary-link-container");
    t.style.maxHeight = "1000px", t.parentNode.style.gap = "18px";
    t.parentNode.children[0].getElementsByTagName("img")[0].src = "/assets/images/games/minus_icon.png"
}

function closeSideMenu() {
    document.getElementById("mobile-hamburger-menu-bg").style.display = "none";
    const e = document.getElementById("mobile-hamburger-menu");
    e.style.padding = "0px 0px 0px 0px", e.style.width = "0", e.style.overflow = "hidden", document.body.style.height = "auto", document.body.style.overflow = "auto";
    const t = document.getElementById("secondary-link-container");
    t.style.maxHeight = "0", t.parentNode.style.gap = "0";
    t.parentNode.children[0].getElementsByTagName("img")[0].src = "/assets/images/games/plus_icon.png"
}

function closeLanguageMenu() {
    document.getElementById("mobile-hamburger-menu-bg").style.display = "none";
    const e = document.getElementById("mobile-language-menu");
    e.style.padding = "0px 0px 0px 0px", e.style.width = "0", e.style.overflow = "hidden", document.body.style.height = "auto", document.body.style.overflow = "auto"
}

function handleCategoryList(e) {
    const t = e.parentNode,
        i = t.children[1],
        n = e.getElementsByTagName("img")[0];
    "auto" === i.style.height ? (i.style.height = "0", t.style.gap = "0", n.src = "/assets/images/games/plus_icon.png") : (i.style.height = "auto", t.style.gap = "18px", n.src = "/assets/images/games/minus_icon.png")
}

function handleCategoryMenu(e) {
    const t = e.parentNode,
        i = t.children[1],
        n = e.getElementsByTagName("img")[0];
    "auto" === i.style.height ? (i.style.height = "0", t.style.gap = "0", n.src = "/assets/images/games/plus_icon.png") : (i.style.height = "auto", t.style.gap = "18px", n.src = "/assets/images/games/minus_icon.png")
}

function sendApkInitAnalytics(e) {
    sendAnalytics({
        p: "client_bg_event",
        o: "initiate_apk_download",
        vs: "mobile",
        v: e
    })
}
async function DownloadApk(e, t) {
    let i = await getUUID();
    firePixelEvent("download_android", {
        uuid: i
    }), e && sendApkInitAnalytics("auto_download");
    let n = {},
        s = {};
    n.p = "web_user_action", n.o = "click_download_apk_website_button", n.vs = "mobile";
    let o = "gameRunning" === t ? "running" : "gameEnd" === t ? "ended" : null;
    o && (n.b = JSON.stringify({
        demo_state: o
    }), s.b = JSON.stringify({
        demo_state: o
    })), sendAnalytics(n), s.p = "client_bg_event", s.o = "server_call_initiate", s.vs = "mobile", sendAnalytics(s);
    let a = {
            deviceType: `${deviceInfo.vendor||""} ${deviceInfo.model||""}`,
            is64Bit: !(!platform.os || 64 != platform.os.architecture),
            osVersion: platform.os && platform.os.version ? platform.os.version : "",
            uuid: i
        },
        l = null;
    switch (window.location.pathname) {
        case "/":
            l = "https://rushbyhike.app.link/DUV5LZHkCAb";
            break;
        case "/google1":
            l = "https://rushbyhike.app.link/88rBsTPBApb";
            break;
        case "/google2":
            l = " https://rushbyhike.app.link/1WQXlxSBApb";
            break;
        case "/google3":
            l = "https://rushbyhike.app.link/tT6Vyh3wQqb";
            break;
        case "/google4":
            l = "https://rushbyhike.app.link/rbcXfk6wQqb";
            break;
        case "/google5":
            l = "https://rushbyhike.app.link/bwLmW87wQqb";
            break;
        case "/google6":
            l = "https://rushbyhike.app.link/PDvtzZ9wQqb";
            break;
        case "/google7":
            l = "https://rushbyhike.app.link/29oacWbxQqb";
            break;
        case "/google8":
            l = "https://rushbyhike.app.link/Y5EXdkexQqb";
            break;
        case "/google9":
            l = "https://rushbyhike.app.link/lH9yzCfxQqb";
            break;
        case "/google10":
            l = "https://rushbyhike.app.link/HwZQ0oixQqb";
            break;
        case "/google11":
            l = "https://rushbyhike.app.link/m3TSy1jxQqb";
            break;
        case "/google12":
            l = "https://rushbyhike.app.link/ZULiAAlxQqb";
            break;
        case "/google13":
            l = "https://rushbyhike.app.link/NUzyIpnxQqb";
            break;
        case "/google14":
            l = "https://rushbyhike.app.link/nH8uRppxQqb";
            break;
        case "/google15":
            l = "https://rushbyhike.app.link/UEc3h5qxQqb";
            break;
        case "/google16":
            l = "https://rushbyhike.app.link/mNknoTGpErb";
            break;
        case "/google17":
            l = "https://rushbyhike.app.link/0R0oF8JpErb";
            break;
        case "/google18":
            l = "https://rushbyhike.app.link/cfWwigLpErb";
            break;
        case "/google19":
            l = "https://rushbyhike.app.link/bwkq1kMpErb";
            break;
        case "/google20":
            l = "https://rushbyhike.app.link/k620UuNpErb";
            break;
        case "/google21":
            l = "https://rushbyhike.app.link/M9JZnBPpErb";
            break;
        case "/ludo1model-50":
            l = "https://rushbyhike.app.link/BtPDnC2pvqb";
            break;
        case "/ludo1model-shadow":
            l = "https://rushbyhike.app.link/PtMNrd6pvqb";
            break;
        case "/ludo1model-auto":
            l = "https://rushbyhike.app.link/hl65DZ7pvqb";
            break;
        case "/ludo2model-50":
            l = "https://rushbyhike.app.link/YCKN6Xaqvqb";
            break;
        case "/ludo2model-shadow":
            l = "https://rushbyhike.app.link/NldVHqdqvqb";
            break;
        case "/ludo2model-auto":
            l = "https://rushbyhike.app.link/LG4eixgqvqb";
            break;
        case "/casual-games/ludo-game-online":
            l = "https://rushbyhike.app.link/HPXpcT1w4pb";
            break;
        case "/card-games/callbreak-multiplayer-game-online":
            l = "https://rushbyhike.app.link/NbwXUc6w4pb";
            break;
        case "/casual-games/carrom-board-game-online":
            l = "https://rushbyhike.app.link/pSwbocNt4pb";
            break;
        case "/casual-games/quizzy":
            l = "https://rushbyhike.app.link/6En3wi9w4pb";
            break;
        case "/arcade-games/fruit-fight-game":
            l = "https://rushbyhike.app.link/wiEN8Q1Zaqb";
            break;
        case "/arcade-games/bumper-battle-car-game":
            l = "https://rushbyhike.app.link/Mm3mAOTZaqb";
            break;
        case "/sports-games/football-game":
            l = "https://rushbyhike.app.link/0FsCVZ8Zaqb";
            break;
        case "/ludo2model-auto-hindi":
            l = "https://rushbyhike.app.link/vWd11VqSArb";
            break;
        case "/ludo2model-hindi":
            l = "https://rushbyhike.app.link/o0k2krvSArb";
            break;
        case "/ludo1model-auto-hindi":
            l = "https://rushbyhike.app.link/ZZw2MOySArb";
            break;
        case "/ludo1model-hindi":
            l = "https://rushbyhike.app.link/K8KqZiBSArb";
            break;
        case "/carrom1model-50":
            l = "https://rushbyhike.app.link/psaj4Fm6Mrb";
            break;
        case "/ludo1model-50-2":
            l = "https://rushbyhike.app.link/BA6Z9m7xbsb";
            break;
        case "/ludo1model-50-3":
            l = "https://rushbyhike.app.link/aDlDlH9xbsb";
            break;
        case "/ludo1model-auto-2":
            l = "https://rushbyhike.app.link/NdWDDhkybsb";
            break;
        case "/ludo1model-auto-3":
            l = "https://rushbyhike.app.link/w7vOO1lybsb";
            break;
        case "/Independencedayludo1":
            l = "https://rushbyhike.app.link/DeK6T3eDlsb";
            break;
        case "/Independencedayludo2":
            l = "https://rushbyhike.app.link/EyTP1PhDlsb";
            break;
        case "/Independencedayludo3":
            l = "https://rushbyhike.app.link/k8XqrfjDlsb";
            break;
        case "/Independencedayludo4":
            l = "https://rushbyhike.app.link/7USLFPkDlsb";
            break;
        case "/Independencedayludo5":
            l = "https://rushbyhike.app.link/vlF7P4lDlsb";
            break;
        case "/Independencedayludo6":
            l = "https://rushbyhike.app.link/wTH1amnDlsb";
            break;
        case "/Independencedayludo7":
            l = "https://rushbyhike.app.link/aMBiCEoDlsb";
            break;
        case "/Independencedayludo8":
            l = "https://rushbyhike.app.link/olsD1hqDlsb";
            break;
        case "/Independencedayludo9":
            l = "https://rushbyhike.app.link/EeTyQXrDlsb";
            break;
        case "/Independencedayludo10":
            l = "https://rushbyhike.app.link/8ARn5AtDlsb";
            break;
        case "/Independencedayludo11":
            l = "https://rushbyhike.app.link/RDDhIWuDlsb";
            break;
        case "/Independencedayludo12":
            l = "https://rushbyhike.app.link/1t3augwDlsb";
            break;
        case "/Independencedayludo13":
            l = "https://rushbyhike.app.link/6NQDuLxDlsb";
            break;
        case "/Independencedayludo14":
            l = "https://rushbyhike.app.link/cD5BKEADlsb";
            break;
        case "/Independencedayludo15":
            l = "https://rushbyhike.app.link/n3ATpfCDlsb";
            break;
        case "/Independencedayludohindi1":
            l = "https://rushbyhike.app.link/pBU2QnLDlsb";
            break;
        case "/Independencedayludohindi2":
            l = "https://rushbyhike.app.link/KIjTv4MDlsb";
            break;
        case "/Independencedayludohindi3":
            l = "https://rushbyhike.app.link/Ax9Pl1PDlsb";
            break;
        case "/Independencedayludohindi4":
            l = "https://rushbyhike.app.link/mk0youRDlsb";
            break;
        case "/Independencedayludohindi5":
            l = "https://rushbyhike.app.link/Ygzgl2SDlsb";
            break;
        case "/Independencedayludohindi6":
            l = "https://rushbyhike.app.link/Ku9gqLUDlsb";
            break;
        case "/Independencedaycarromhindi1":
            l = "https://rushbyhike.app.link/1GxfLP0Dlsb";
            break;
        case "/Independencedaycarromhindi2":
            l = "https://rushbyhike.app.link/xUamfk2Dlsb";
            break;
        case "/Independencedaycarromhindi3":
            l = "https://rushbyhike.app.link/DFXUsK3Dlsb";
            break;
        case "/Independencedaycarromhindi4":
            l = "https://rushbyhike.app.link/RIGUR74Dlsb";
            break;
        case "/Independencedaycarromhindi5":
            l = "https://rushbyhike.app.link/HwdXZy6Dlsb";
            break;
        case "/Independencedaycarromhindi6":
            l = "https://rushbyhike.app.link/g1sVvX7Dlsb";
            break;
        case "/Independencedaycarrom1":
            l = "https://rushbyhike.app.link/TRLq9OeElsb";
            break;
        case "/Independencedaycarrom2":
            l = "https://rushbyhike.app.link/09szD9gElsb";
            break;
        case "/Independencedaycarrom3":
            l = "https://rushbyhike.app.link/etCm0tiElsb";
            break;
        case "/Independencedaycarrom4":
            l = "https://rushbyhike.app.link/OO2mj3jElsb";
            break;
        case "/Independencedaycarrom5":
            l = "https://rushbyhike.app.link/8RT6onlElsb";
            break;
        case "/Independencedaycarrom6":
            l = "https://rushbyhike.app.link/AtvRbOmElsb";
            break;
        case "/Independencedaycallbreakhindi1":
            l = "https://rushbyhike.app.link/UGxN5yPElsb";
            break;
        case "/Independencedaycallbreakhindi2":
            l = "https://rushbyhike.app.link/JOVb2dSElsb";
            break;
        case "/Independencedaycallbreakhindi3":
            l = "https://rushbyhike.app.link/uaZh1FTElsb";
            break;
        case "/Independencedaycallbreakhindi4":
            l = "https://rushbyhike.app.link/gpmxwAVElsb";
            break;
        case "/Independencedaycallbreakhindi5":
            l = "https://rushbyhike.app.link/Ii7iNQWElsb";
            break;
        case "/Independencedaycallbreak1":
            l = "https://rushbyhike.app.link/XSlkh1wElsb";
            break;
        case "/Independencedaycallbreak2":
            l = "https://rushbyhike.app.link/cSpULFyElsb";
            break;
        case "/Independencedaycallbreak3":
            l = "https://rushbyhike.app.link/b7l2XdDElsb";
            break;
        case "/Independencedaycallbreak4":
            l = "https://rushbyhike.app.link/b6aqIAEElsb";
            break;
        case "/Independencedaycallbreak5":
            l = "https://rushbyhike.app.link/xCO9g7FElsb";
            break;
        case "/Independencedaycallbreak6":
            l = "https://rushbyhike.app.link/09OJmCHElsb";
            break;
        case "/Independencedayludogujarati1":
            l = "https://rushbyhike.app.link/lnV3vgo4msb";
            break;
        case "/Independencedayludomarathi1":
            l = "https://rushbyhike.app.link/yfQEvrr4msb";
            break;
        case "/Independencedayludomarathi2":
            l = "https://rushbyhike.app.link/IYOHhxu4msb";
            break;
        case "/Independencedayludotamil1":
            l = "https://rushbyhike.app.link/Kjrxyhw4msb";
            break;
        case "/Independencedayludobengali1":
            l = "https://rushbyhike.app.link/KTxGS0J4msb";
            break;
        case "/Independencedaycarromgujarati1":
            l = "https://rushbyhike.app.link/ra36gLM4msb";
            break;
        case "/Independencedaycarrommarathi1":
            l = "https://rushbyhike.app.link/BruWBxO4msb";
            break;
        case "/Independencedaycarrommarathi2":
            l = "https://rushbyhike.app.link/DoZmF1P4msb";
            break;
        case "/Independencedaycarromtamil1":
            l = "https://rushbyhike.app.link/9XRqYJR4msb";
            break;
        case "/Independencedaycarrombengali1":
            l = "https://rushbyhike.app.link/duUGXtT4msb";
            break;
        case "/Independencedaycallbreakgujarati1":
            l = "https://rushbyhike.app.link/LMR4g9U4msb";
            break;
        case "/Independencedaycallbreakmarathi1":
            l = "https://rushbyhike.app.link/yh4YoSW4msb";
            break;
        case "/Independencedaycallbreakmarathi2":
            l = "https://rushbyhike.app.link/fRt7fdY4msb";
            break;
        case "/Independencedaycallbreaktamil1":
            l = "https://rushbyhike.app.link/0LYyhHZ4msb";
            break;
        case "/Independencedaycallbreakbengali1":
            l = "https://rushbyhike.app.link/8CDNbc14msb";
            break;
        case "/raf-Male-FB1":
            l = "https://rushbyhike.app.link/cBWIoJYYlsb";
            break;
        case "/raf-Male-FB2":
            l = "https://rushbyhike.app.link/r7Umz20Ylsb";
            break;
        case "/raf-Male-FB3":
            l = "https://rushbyhike.app.link/4fTUkD2Ylsb";
            break;
        case "/raf-Male-hindi-FB1":
            l = "https://rushbyhike.app.link/YPLF0x4Ylsb";
            break;
        case "/raf-Male-hindi-FB2":
            l = "https://rushbyhike.app.link/JB9smc6Ylsb";
            break;
        case "/raf-Male-hindi-FB3":
            l = "https://rushbyhike.app.link/1Z2F4M7Ylsb";
            break;
        case "/raf-female-hindi-FB1":
            l = "https://rushbyhike.app.link/xxsOgm9Ylsb";
            break;
        case "/raf-female-hindi-FB2":
            l = "https://rushbyhike.app.link/0VDTRDaZlsb";
            break;
        case "/raf-female-hindi-FB3":
            l = "https://rushbyhike.app.link/0ob66UbZlsb";
            break;
        case "/raf-female-FB1":
            l = "https://rushbyhike.app.link/4llxngdZlsb";
            break;
        case "/raf-female-FB2":
            l = "https://rushbyhike.app.link/Zdsg84eZlsb";
            break;
        case "/raf-female-FB3":
            l = "https://rushbyhike.app.link/OcJB9PhZlsb";
            break;
        case "/faq":
            l = "https://rushbyhike.app.link/jHQLLDkTQtb";
            break;
        case "/terms":
            l = "https://rushbyhike.app.link/7H447XOTQtb";
            break;
        case "/refer-and-earn":
            l = "https://rushbyhike.app.link/bQu8nJWTQtb";
            break;
        case "/privacy":
            l = "https://rushbyhike.app.link/Xt2kuT4TQtb";
            break;
        case "/fairplay":
            l = "https://rushbyhike.app.link/Mhkhts9TQtb";
            break;
        case "/card-games":
            l = "https://rushbyhike.app.link/XubryhkUQtb";
            break;
        case "/casual-games":
            l = "https://rushbyhike.app.link/TloZpnpUQtb";
            break;
        case "/board-games":
            l = "https://rushbyhike.app.link/R9G3KvvUQtb";
            break;
        case "/arcade-games":
            l = "https://rushbyhike.app.link/0SL3pqEUQtb";
            break;
        case "/cue-games":
            l = "https://rushbyhike.app.link/4EGEbr1UQtb";
            break;
        case "/sports-games":
            l = "https://rushbyhike.app.link/3xjTAqMUQtb";
            break;
        case "/spin-the-wheel-online":
            l = "https://rushbyhike.app.link/VbnmombJCub";
            break;
        case "/bug-bounty-program":
            l = "https://rushbyhike.app.link/nOQQPm4FAvb";
            break;
        case "/game-khelo":
            l = "https://rushbyhike.app.link/buX5RzE3wvb";
            break;
        case "/win-money-apps-download":
            l = "https://rushbyhike.app.link/ibKjehj3wvb";
            break;
        case "/casual-games/ludo-game-online/how-to-play-ludo":
            l = "https://rushbyhike.app.link/PtzpfQsswwb";
            break;
        case "/casual-games/ludo-game-online/ludo-game-rules":
            l = "https://rushbyhike.app.link/cCFCpLSswwb";
            break;
        case "/casual-games/ludo-game-online/ludo-tips-and-tricks":
            l = "https://rushbyhike.app.link/CYv4Ci8swwb";
            break;
        case "/casual-games/ludo-game-online/common-terms-used-in-ludo":
            l = "https://rushbyhike.app.link/6HfPVKbtwwb";
            break;
        case "/casual-games/ludo-game-online/types-of-ludo-games":
            l = "https://rushbyhike.app.link/g1rztMetwwb";
            break;
        case "/casual-games/ludo-game-online/download-ludo-game":
            l = "https://rushbyhike.app.link/qjX3nFhtwwb";
            break;
        case "/casual-games/carrom-board-game-online/how-to-play-carrom":
            l = "https://rushbyhike.app.link/1CnCnPutwwb";
            break;
        case "/casual-games/carrom-board-game-online/carrom-rules":
            l = "https://rushbyhike.app.link/lT9Ym7ytwwb";
            break;
        case "/casual-games/carrom-board-game-online/carrom-tips-and-tricks":
            l = "https://rushbyhike.app.link/mktBGoCtwwb";
            break;
        case "/casual-games/carrom-board-game-online/common-terms-used-in-carrom":
            l = "https://rushbyhike.app.link/3EoQdJFtwwb";
            break;
        case "/casual-games/carrom-board-game-online/types-of-carrom-games":
            l = "https://rushbyhike.app.link/441HIFItwwb";
            break;
        case "/casual-games/carrom-board-game-online/download-carrom-game":
            l = "https://rushbyhike.app.link/nY1PhuLtwwb";
            break;
        case "/sports-games/golf-game-online":
            l = "https://rushbyhike.app.link/hQjJcTwmhxb";
            break;
        case "/casual-games/ludo-game-online/ludo-tournaments":
            l = "https://rushbyhike.app.link/GQiaVYJHPxb";
            break;
        case "/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/1c83JagXeyb";
            break;
        case "/arcade-games/knife-smash-game":
            l = "https://rushbyhike.app.link/KCWJBCFmhxb";
            break;
        case "/ludo-google-english":
            l = "https://rushbyhike.app.link/scfnE2k8zyb";
            break;
        case "/hi/casual-games/ludo-game-online":
        case "/hi/casual-games/ludo-game-online":
            l = "https://rushbyhike.app.link/BpjZyktOkzb";
            break;
        case "/sports-games/archery-game-online":
            l = "https://rushbyhike.app.link/x07xZDcKhqb";
            break;
        case "/cue-sports/8-ball-pool-game-online":
            l = "https://rushbyhike.app.link/xyA9fJmKhqb";
            break;
        case "/arcade-games/brick-smash-game":
            l = "https://rushbyhike.app.link/jlgVHxwKhqb";
            break;
        case "/gu/casual-games/ludo-game-online":
            l = "https://rushbyhike.app.link/wwvnTPDaZEb";
            break;
        case "/mr/casual-games/ludo-game-online":
            l = "https://rushbyhike.app.link/yU0rFZ5bZEb";
            break;
        case "/bn/casual-games/ludo-game-online":
            l = "https://rushbyhike.app.link/CAvmFtdcZEb";
            break;
        case "/te/casual-games/ludo-game-online":
            l = "https://rushbyhike.app.link/ZVRVG5jcZEb";
            break;
        case "/gu/casual-games/carrom-board-game-online":
            l = "https://rushbyhike.app.link/6BIfAD9dZEb";
            break;
        case "/mr/casual-games/carrom-board-game-online":
            l = "https://rushbyhike.app.link/h8De8EheZEb";
            break;
        case "/bn/casual-games/carrom-board-game-online":
            l = "https://rushbyhike.app.link/qwFvAtweZEb";
            break;
        case "/ta/casual-games/carrom-board-game-online":
            l = "https://rushbyhike.app.link/bK1FcmAeZEb";
            break;
        case "/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/x1aGM7EfZEb";
            break;
        case "/gu/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/xLyDq6NfZEb";
            break;
        case "/mr/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/IL110ySfZEb";
            break;
        case "/bn/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/0KBblLWfZEb";
            break;
        case "/ta/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/ydXsOP1fZEb";
            break;
        case "/gu/card-games/callbreak-multiplayer-game-online":
            l = "https://rushbyhike.app.link/cSLnkumgZEb";
            break;
        case "/mr/card-games/callbreak-multiplayer-game-online":
            l = "https://rushbyhike.app.link/jneECNtgZEb";
            break;
        case "/bn/card-games/callbreak-multiplayer-game-online":
            l = "https://rushbyhike.app.link/ZZRYmgygZEb";
            break;
        case "/ta/card-games/callbreak-multiplayer-game-online":
            l = "https://rushbyhike.app.link/9R8kgKBgZEb";
            break;
        case "/gu/casual-games/quizzy":
            l = "https://rushbyhike.app.link/ifGfptqhZEb";
            break;
        case "/mr/casual-games/quizzy":
            l = "https://rushbyhike.app.link/RDZTSrwhZEb";
            break;
        case "/bn/casual-games/quizzy":
            l = "https://rushbyhike.app.link/Xvk8BZzhZEb";
            break;
        case "/ta/casual-games/quizzy":
            l = "https://rushbyhike.app.link/WuXVS4ChZEb";
            break;
        case "/hi/casual-games/quizzy":
            l = "https://rushbyhike.app.link/41Tv0YkhZEb";
            break;
        case "/board-games/chess":
            l = "https://rushbyhike.app.link/QmCgmELhZEb";
            break;
        case "/casual-games/tambola":
            l = "https://rushbyhike.app.link/9KeVXHHhZEb";
            break;
        case "/card-games/tezz-patti":
            l = "https://rushbyhike.app.link/bP4YXLQhZEb";
            break;
        case "/card-games/rummy":
            l = "https://rushbyhike.app.link/gL0fxLVhZEb";
            break;
        case "/casual-games/tic-tac-toe":
            l = "https://rushbyhike.app.link/LGJZSO0hZEb";
            break;
        case "/hi/casual-games/carrom-board-game-online":
            l = "https://rushbyhike.app.link/tPPp1pp7kzb";
            break;
        case "/hi/card-games/callbreak-multiplayer-game-online":
            l = "https://rushbyhike.app.link/dhAe5vC7kzb";
            break;
        case "/hi/casual-games/snakes-and-ladders":
            l = "https://rushbyhike.app.link/napLj3K7kzb";
            break;
        case "/hi/casual-games/quizzy":
            l = "https://rushbyhike.app.link/eLuwVtXv5zb";
            break;
        case "/hi":
            l = "https://rushbyhike.app.link/uVe6NVUh4Eb";
            break;
        case "/gu":
            l = "https://rushbyhike.app.link/PN6GTWfi4Eb";
            break;
        case "/mr":
            l = "https://rushbyhike.app.link/g8bWa4Zh4Eb";
            break;
        case "/bn":
            l = "https://rushbyhike.app.link/nW15Np5h4Eb";
            break;
        case "/ta":
            l = "https://rushbyhike.app.link/KASklRki4Eb";
            break;
        case "/fantasy-games/fantasy-cricket":
            l = "https://rushbyhike.app.link/NF1UaoNbJIb";
            break;
        case "/fantasy-games/cricket":
            l = "https://rushbyhike.app.link/zGSjzEEcJIb";
            break;
        default:
            l = null
    }
    this.document.getElementById("404-page") && (l = "https://rushbyhike.app.link/dsUGQ4Wiqvb"), "gameRunning" === t ? l = "https://rushbyhike.app.link/Fmu0ucbIHIb" : "gameEnd" === t && (l = "https://rushbyhike.app.link/gz1EqQhIHIb");
    const r = sessionStorage.getItem("is_paid_source");
    !l || window.location.search.includes("utm_source") || r || callBranchUrl(l), $.ajax({
        url: `${baseUrl}/v1/app/download`,
        method: "POST",
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(e) {
            console.log(e);
            let t = {
                p: "client_bg_event",
                o: "server_call_success",
                vs: "mobile"
            };
            sendAnalytics(t), $.ajax({
                url: "/log-params",
                method: "POST",
                data: JSON.stringify({
                    type: "AFTER_DOWNLOAD",
                    data: e
                }),
                dataType: "json",
                contentType: "application/json",
                success: function(e) {
                    console.log(e)
                },
                error: function(e) {
                    var t = "Ajax request failed: " + e.responseText;
                    console.log(t)
                }
            });
            let i = document.createElement("a");
            document.body.appendChild(i), i.download = "Rush App", i.href = e.url, i.click(), "/facebook-auto" !== window.location.pathname && arrowClick()
        },
        error: function(e) {
            let t = {
                p: "client_bg_event",
                o: "server_call_failure",
                vs: "mobile"
            };
            sendAnalytics(t);
            var i = "Ajax request failed: " + e.responseText;
            console.log(i)
        }
    })
}

function readTextFile(e) {
    var t = new XMLHttpRequest;
    t.open("GET", e, !1), t.onreadystatechange = function() {
        if (4 === t.readyState && (200 === t.status || 0 == t.status)) {
            var e = t.responseText;
            alert(e)
        }
    }, t.send(null)
}
window.onclick = function(e) {
        var t = document.getElementById("ModalSecondFold"),
            i = document.getElementById("ModalfirstFold"),
            n = document.getElementById("ModalSecondFoldMob"),
            s = document.getElementById("ModalfirstFoldMob");
        e.target == t ? (t.style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto") : e.target == i ? (i.style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto") : e.target == n ? (n.style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto") : e.target == s && (s.style.display = "none", document.getElementsByTagName("body")[0].style.overflow = "auto")
    },
    function() {
        if ("www.getrushapp.com" === window.location.hostname || "getrushapp.com" === window.location.hostname || "w.getrushapp.com" === window.location.hostname || window.location.hostname.includes("rushgamesapp.com")) {
            console.log("Init GA4");
            const e = document.createElement("noscript"),
                t = document.createElement("iframe");
            t.src = "https://www.googletagmanager.com/ns.html?id=GTM-M524WQV", t.height = 0, t.width = 0, t.style.display = "none", t.style.visibility = "hidden", e.appendChild(t), document.body.prepend(e);
            const i = document.createElement("script");
            i.src = "https://www.googletagmanager.com/gtag/js?id=G-ZDQ3KXJ8G4", i.async = !0, document.head.appendChild(i);
            const n = document.createElement("script");
            n.innerHTML = "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', 'G-ZDQ3KXJ8G4');\n    ", document.head.appendChild(n);
            const s = document.createElement("script");
            s.innerHTML = "\n      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','GTM-M524WQV');\n    ", document.head.appendChild(s)
        }
    }();
const totalSecond = 4,
    downloadScreen = `<div id="download-container" class="download-container">\n  <div class="download-main">\n      <div id="download-anyway-container" class="download-anyway-container">\n          <div class="download-header">\n              <div class="download-logo">\n                  <img src="/assets/images/games/rush-logo.png" />\n              </div>\n              <div class="download-rating">\n                  <img src="/assets/images/rating4.3.png" />\n              </div>\n          </div>\n          <div id="download-middle-container" class="download-middle-container">\n              <div class="download-profiles">\n                  <img src="/assets/images/rush_user_profiles.png" />\n              </div>\n              <div class="download-anyway">\n                  <img src="/assets/images/rush_download_safe.png" />\n              </div>\n          </div>\n          <div id="download-safe" class="download-safe">\n              <video autoplay loop muted playsinline>\n                  <source src="/assets/videos/download.webm" type="video/webm">\n              </video>\n          </div>\n      </div>\n      <div class="download-cta-container">\n          <div class="download-loading">\n              <div id="loading" class="loading"></div>\n          </div>\n          <div class="download-cta-main">\n              <p>\n                  Download will begin in <span id="timer" class="timer"> ${totalSecond} sec</span>\n              </p>\n              <div class="download-cta-bg" onclick="downloadVideoAPK()">\n                <div class="download-cta">\n                  <img src="/assets/images/downloadIcon.png"/>\n                  start now\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>`,
    downloadVideoScreen = '<div id="download-video-container" class="download-video-container">\n  <div class="download-video-main">\n      <div class="cancel-icon" onclick="cancelDownloadVideo()">\n        <img src="/assets/images/download_video_cancel_icon.png" />\n      </div>\n      <video \n        id="download-popup-video" \n        class="download-popup-video"\n        playsinline\n        autoplay\n      >\n        <source src="https://storage.googleapis.com/rush-images-stag/AB.webm" type="video/webm" />\n        <source src="https://storage.googleapis.com/rush-images-stag/AB.mp4" type="video/mp4" />\n      </video>\n      <div id="reload-btn-container" class="reload-btn-container">\n        <button id="reload-btn" class="reload-btn" onclick="replayVideo()">\n          <img src="/assets/images/reload.png"/>\n          REPLAY\n        </button>\n      </div>\n  </div>\n</div>';

function replayVideo() {
    document.getElementById("download-popup-video").play();
    document.getElementById("reload-btn-container").style.display = "none"
}

function cancelDownloadVideo() {
    const e = document.getElementById("download-video-container");
    document.body.removeChild(e), document.body.style.overflow = "auto"
}
let timer;

function downloadVideoAPK(e = null) {
    try {
        clearInterval(timer), DownloadApk(!1, e);
        const t = document.getElementById("download-container");
        document.body.removeChild(t), document.body.insertAdjacentHTML("beforeend", downloadVideoScreen);
        const i = document.getElementById("download-popup-video");
        i.play(), i.addEventListener("ended", (() => {
            document.getElementById("reload-btn-container").style.display = "flex"
        }), !1)
    } catch (e) {
        console.log("video play error fallback", e), cancelDownloadVideo()
    }
}

function adjustHeight() {
    const e = document.getElementById("download-anyway-container").getBoundingClientRect().height - 70,
        t = window.innerHeight - 70 - 123;
    if (e > t) {
        const i = document.getElementById("download-middle-container"),
            n = document.getElementById("download-safe");
        e - t < 50 ? (i.style.width = "90%", n.style.width = "90%") : (i.style.width = "80%", n.style.width = "80%")
    }
}

function DownloadApkClick(e = null) {
    let t = this.document.getElementById("reviewsContainer");
    window.ga && ga("send", "event", "click", "download_" + (t ? "playstore" : "initial_version"), "Download Button Click"), sendApkInitAnalytics("manual"), document.body.insertAdjacentHTML("beforeend", downloadScreen);
    const i = 100 / totalSecond,
        n = document.getElementById("timer"),
        s = document.getElementById("loading");
    let o = totalSecond;
    setTimeout((() => {
        adjustHeight()
    }), 500), timer = setInterval((() => {
        o--, n.innerHTML = `  ${o} sec`, s.style.width = (totalSecond - o) * i + "%", 0 === o && downloadVideoAPK(e)
    }), 1e3), document.body.style.overflow = "hidden"
}

function getJSONParams() {
    let e = {},
        t = window.location.search;
    return new URLSearchParams(t).forEach((function(t, i) {
        e[i] = t
    })), console.log("paramObj", e), $.ajax({
        url: "/log-params",
        method: "POST",
        data: JSON.stringify({
            type: "DEEPLINK_RESOLVED",
            data: e
        }),
        dataType: "json",
        contentType: "application/json",
        success: function(e) {
            console.log(e)
        },
        error: function(e) {
            var t = "Ajax request failed: " + e.responseText;
            console.log(t)
        }
    }), Object.keys(e).length ? e : null
}
async function sendAnalytics(e) {
    let t = this.document.getElementById("reviewsContainer"),
        i = "website_page";
    switch (window.location.pathname) {
        case "/google1":
            i = "website_page_google1";
            break;
        case "/google2":
            i = "website_page_google2";
            break;
        case "/casual-games/ludo-game-online":
            i = "website_page_ludo";
            break;
        case "/card-games/callbreak-multiplayer-game-online":
            i = "website_page_callbreak";
            break;
        case "/casual-games/carrom-board-game-online":
            i = "website_page_carrom";
            break;
        case "/casual-games/quizzy":
            i = "website_page_quizzy";
            break;
        default:
            i = "website_page"
    }
    this.document.getElementById("404-page") && (i = "website_page_404");
    let n = {
        uk: "rush"
    };
    n.src = e.src, n.ver = "v2", n.k = "rush", n.c = "web_console", n.fa = i, n.g = window.location.href, n.fu = await getUUID(), n.r = Date.now(), n.cts = Date.now(), n.v = t ? "playstore_version" : "initial_version", n.s = e.s || getJSONParams() && JSON.stringify(getJSONParams()), n.do = JSON.stringify({
        os: platform.os && platform.os.family,
        os_version: platform.os && platform.os.version,
        browser: platform.name,
        browser_version: platform.version,
        device_name: `${deviceInfo.vendor||""} ${deviceInfo.model||""}`,
        user_agent: window.navigator.userAgent,
        device_info: { ...deviceInfo
        }
    }), n.dt = `${deviceInfo.vendor||""} ${deviceInfo.model||""}`;
    let s = { ...n,
        ...e
    };
    $.ajax({
        url: `${baseUrl}/v1/app/logs/analytics`,
        method: "POST",
        data: JSON.stringify(s),
        dataType: "json",
        contentType: "application/json"
    })
}

function getRandom(e, t) {
    var i = new Array(t),
        n = e.length,
        s = new Array(n);
    if (t > n) throw new RangeError("getRandom: more elements taken than available");
    for (; t--;) {
        var o = Math.floor(Math.random() * n);
        i[t] = e[o in s ? s[o] : o], s[o] = --n in s ? s[n] : n
    }
    return i
}

function toggleDescription() {
    document.getElementById("text-desc").classList.contains("show") ? (document.getElementById("text-desc").classList.remove("show"), document.getElementById("readMore").innerText = "SHOW MORE") : (document.getElementById("text-desc").classList.add("show"), document.getElementById("readMore").innerText = "SHOW LESS")
}
window.onload = function() {
    let e = {
        name: platform.name,
        version: platform.version,
        layout: platform.layout,
        os: platform.os,
        product: platform.product,
        manufacturer: platform.manufacturer,
        description: platform.description
    };
    if (this.document.getElementById("reviewsContainer")) {
        let e = getRandom(reviews, 5),
            t = "";
        for (let i = 0; i < e.length; i++) t += renderReview(e[i]);
        $("#reviewsContainer").html(t), window.ga && ga("send", "event", "page_render", "playstore_version", "Playstore Version")
    } else window.ga && ga("send", "event", "page_render", "initial_version", "Initial Version");
    if (window.location.search.includes("utm_source") && sessionStorage.setItem("is_paid_source", !0), this.document.getElementById("qrCode") && "development" === env && (this.console.log("QR CODe Staging"), document.getElementsByClassName("QrCode")[0].src = "./assets/images/QR_code_staging.jpg"), document.getElementsByClassName("main-gallery3") && document.getElementsByClassName("main-gallery3").length > 0) new Flickity(".main-gallery3", {
        cellAlign: "center",
        contain: !0,
        lazyLoad: !1,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("install-section-gallery") && document.getElementsByClassName("install-section-gallery").length > 0) new Flickity(".install-section-gallery", {
        cellAlign: "center",
        lazyLoad: !0,
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("user-review-gallery") && document.getElementsByClassName("user-review-gallery").length > 0) new Flickity(".user-review-gallery", {
        cellAlign: "center",
        lazyLoad: !0,
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("main-gallery4") && document.getElementsByClassName("main-gallery4").length > 0) new Flickity(".main-gallery4", {
        cellAlign: "center",
        lazyLoad: !0,
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("raf-gallery") && document.getElementsByClassName("raf-gallery").length > 0) new Flickity(".raf-gallery", {
        cellAlign: "center",
        lazyLoad: !0,
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("category-gallery") && document.getElementsByClassName("category-gallery").length > 0) new Flickity(".category-gallery", {
        cellAlign: "center",
        lazyLoad: !0,
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("errorText") && document.getElementsByClassName("errorText").length > 0 && (document.getElementsByClassName("errorText")[0].style.display = "none"), document.getElementsByClassName("main-gallery-new") && document.getElementsByClassName("main-gallery-new").length > 0) new Flickity(".main-gallery-new", {
        cellAlign: "left",
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementsByClassName("main-gallery2") && document.getElementsByClassName("main-gallery2").length > 0) new Flickity(".main-gallery2", {
        cellAlign: "left",
        contain: !0,
        wrapAround: !0,
        arrowShape: {
            x0: 10,
            x1: 70,
            y1: 0,
            x2: 70,
            y2: 40,
            x3: 10
        }
    });
    if (document.getElementById("raf-lp-main") && document.getElementById("raf-lp-main").src && (window.location.pathname.includes("female") && window.location.pathname.includes("raf") ? document.getElementById("raf-lp-main").src = "/assets/images/headerraf-2.png" : window.location.pathname.includes("Male") && window.location.pathname.includes("raf") && (document.getElementById("raf-lp-main").src = "/assets/images/headerraf-1.png")), window.location.pathname.includes("hindi") && window.location.pathname.includes("raf") && document.getElementById("rafmob-lp") && document.getElementById("rafmob-lp").src && document.getElementById("buttonGif") && document.getElementById("buttonGif").src && (document.getElementById("rafmob-lp").src = "/assets/images/rafHin.png", document.getElementById("buttonGif").src = "/assets/images/rafHinButton.png", document.getElementById("buttonGifTop").src = "/assets/images/rafHinButton.png", document.getElementById("buttonGifBottom").src = "/assets/images/rafHinButton.png"), e.os && e.os.family && -1 != e.os.family.indexOf("Android") || e.name && -1 != e.name.indexOf("Android")) {
        console.log("inside Andoroid");
        let e = {
            src: "",
            p: "web_ui_render",
            o: "website_rendered",
            vs: "mobile"
        };
        sendAnalytics(e);
        let t = !1,
            i = window.location.search,
            n = new URLSearchParams(i);
        n.has("auto_download") && "true" === n.get("auto_download") && (t = !0), (t || "/ludo1model-auto" === window.location.pathname || "/ludo2model-auto" === window.location.pathname || "/ludo1model-auto-hindi" === window.location.pathname || "/ludo2model-auto-hindi" === window.location.pathname || "/ludo1model-auto-2" === window.location.pathname || "/ludo1model-auto-3" === window.location.pathname || "/facebook-auto" === window.location.pathname || "/influencer-ludo-model1-english" === window.location.pathname || "/influencer-ludo-model2-hindi" === window.location.pathname || "/mb-auto-eng" === window.location.pathname || "/mb-auto-hindi" === window.location.pathname || "/mb-auto-eng-model" === window.location.pathname || "/mb-auto-hindi-model" === window.location.pathname || "/social-auto-eng" === window.location.pathname || "/social-auto-hi" === window.location.pathname || "/social-auto-model-eng" === window.location.pathname || "/social-auto-model-hi" === window.location.pathname || "/mb-auto-playstore-playludo-eng" === window.location.pathname || "/fb-auto-playstore-playludo-eng" === window.location.pathname || "/mb-auto-playstore-playgames-eng" === window.location.pathname || "/fb-auto-playstore-playgames-eng" === window.location.pathname || "/mb-auto-playstore-playgames-single-eng" === window.location.pathname || "/fb-auto-playstore-playgames-single-eng" === window.location.pathname || "/mb-auto-playstore-playludo-single-eng" === window.location.pathname || "/fb-auto-playstore-playludo-single-eng" === window.location.pathname) && DownloadApk(!0), document.getElementById("rsImageMobile") && document.getElementById("rsImageMobile").src && "production" === env && (document.getElementById("rsImageMobile").src = "https://cdn.getrushapp.com/android.png"), document.getElementById("rsImageMobile") && document.getElementById("rsImageMobile").src && "development" === env && (document.getElementById("rsImageMobile").src = "https://storage.googleapis.com/rush-images-stag/android.png"), console.log(document.getElementById("ludoLogoMob")), "/ludo1model-auto-hindi" !== window.location.pathname && "/ludo1model-hindi" !== window.location.pathname && "/ludo2model-auto-hindi" !== window.location.pathname && "/ludo2model-hindi" !== window.location.pathname || (document.getElementById("ludoLogoMob") && document.getElementById("ludoLogoMob").src && (document.getElementById("ludoLogoMob").src = "/assets/images/ludo1_hindi.png"), document.getElementById("buttonGifTop") && document.getElementById("buttonGifTop").src && (document.getElementById("buttonGifTop").src = "/assets/images/ludo_hindi_btn.png"), document.getElementById("buttonGif") && document.getElementById("buttonGif").src && (document.getElementById("buttonGif").src = "/assets/images/ludo_hindi_btn.png"), document.getElementById("buttonGifBottom") && document.getElementById("buttonGifBottom").src && (document.getElementById("buttonGifBottom").src = "/assets/images/ludo_hindi_btn.png"), document.getElementById("ludo_ratings") && document.getElementById("ludo_ratings").src && (document.getElementById("ludo_ratings").src = "/assets/images/ratings_hindi.png"));
        const s = document.getElementById("downloadAndBtnOnLudoPlay"),
            o = document.getElementById("downloadAndBtnOnLudoPlayEnd"),
            a = document.getElementById("downloadIosBtnOnLudoPlay"),
            l = document.getElementById("downloadIosBtnOnLudoPlayEnd");
        s && s.classList.add("showCta"), o && o.classList.add("showCta"), a && a.classList.add("hideCta"), a && l.classList.add("hideCta");
        const r = document.getElementById("downloadIosBtn"),
            d = document.getElementById("iosDownloadSection");
        r && r.classList.add("hideCta"), d && d.classList.add("hideCta");
        let c = document.getElementsByClassName("showIos");
        for (let e = c.length - 1; e >= 0; e--) c[e].classList.add("hideIos"), c[e].classList.remove("showIos");
        let h = document.getElementsByClassName("hideAndroid");
        for (let e = h.length - 1; e >= 0; e--) h[e].classList.add("showAndroid"), h[e].classList.remove("hideAndroid");
        if (document.getElementsByClassName("main-gallery") && document.getElementsByClassName("main-gallery").length > 0) new Flickity(".main-gallery", {
            cellAlign: "left",
            contain: !0,
            wrapAround: !0,
            arrowShape: {
                x0: 10,
                x1: 70,
                y1: 0,
                x2: 70,
                y2: 40,
                x3: 10
            }
        });
        if (document.getElementById("mobileHeader") ? document.addEventListener("scroll", showHeader) : document.addEventListener("scroll", showFooterInstallBtn), -1 != window.location.href.indexOf("v=amd_1") || window.location.search && -1 != window.location.search("v=amd_1") || "development" === env && window.location.search && -1 != window.location.search("type=2")) {
            DownloadApk(!0);
            let e = {
                p: "web_user_action",
                o: "click_branch_rush_url",
                vs: "mobile"
            };
            sendAnalytics(e)
        } else if ("/tds-info" === window.location.pathname) {
            let e = {
                uk: "rush",
                ver: "v2",
                k: "rush",
                p: "web_ui_render",
                c: "tds",
                o: "tds_faq_screen_rendered",
                fa: "withdraw_money_final_screen",
                src: "",
                g: "",
                s: "",
                di: "",
                fu: "",
                r: Date.now(),
                cts: Date.now(),
                ts: Date.now(),
                do: JSON.stringify({
                    os: platform.os && platform.os.family,
                    os_version: platform.os && platform.os.version,
                    browser: platform.name,
                    browser_version: platform.version,
                    device_name: `${deviceInfo.vendor||""} ${deviceInfo.model||""}`,
                    user_agent: window.navigator.userAgent,
                    device_info: { ...deviceInfo
                    }
                }),
                dt: `${deviceInfo.vendor||""} ${deviceInfo.model||""}`
            };
            $.ajax({
                url: `${baseUrl}/v1/app/logs/analytics`,
                method: "POST",
                data: JSON.stringify(e),
                dataType: "json",
                contentType: "application/json"
            })
        }
    } else if (e.os && e.os.family && -1 != e.os.family.indexOf("iOS") || e.product && -1 != e.product.indexOf("iPhone") || /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) {
        let e = {
            src: "",
            p: "web_ui_render",
            o: "website_rendered",
            vs: "mobile"
        };
        sendAnalytics(e), "development" === env && document.getElementById("rsImageMobile") ? document.getElementById("rsImageMobile").src = "https://storage.googleapis.com/rush-images-stag/ios.png" : document.getElementById("rsImageMobile") && (document.getElementById("rsImageMobile").src = "https://cdn.getrushapp.com/ios.png");
        const t = document.getElementById("downloadAndBtnOnLudoPlay"),
            i = document.getElementById("downloadAndBtnOnLudoPlayEnd"),
            n = document.getElementById("downloadIosBtnOnLudoPlay"),
            s = document.getElementById("downloadIosBtnOnLudoPlayEnd");
        t && t.classList.add("hideCta"), i && i.classList.add("hideCta"), n && n.classList.add("showCta"), n && s.classList.add("showCta");
        const o = document.getElementById("downloadAndBtnBottom");
        o && o.classList.add("hideCta");
        const a = document.getElementById("downloadIosBtnBottom");
        a && a.classList.add("showCta");
        const l = document.getElementById("downloadAndBtn"),
            r = document.getElementById("androidDownloadSection");
        l && l.classList.add("hideCta"), r && r.classList.add("hideCta");
        const d = document.getElementById("downloadIosBtn"),
            c = document.getElementById("iosDownloadSection");
        d && d.classList.add("showCta"), c && c.classList.add("showCta");
        let h = document.getElementsByClassName("showAndroid");
        for (let e = h.length - 1; e >= 0; e--) h[e].classList.add("hideAndroid"), h[e].classList.remove("showAndroid");
        let u = document.getElementsByClassName("hideIos");
        for (let e = u.length - 1; e >= 0; e--) u[e].classList.add("showIos"), u[e].classList.remove("hideIos");
        if (document.addEventListener("scroll", showHeader), -1 != window.location.href.indexOf("v=amd_1")) {
            let e = {
                p: "web_user_action",
                o: "click_branch_rush_url",
                vs: "mobile"
            };
            sendAnalytics(e);
            let t = document.createElement("a");
            document.body.appendChild(t), t.href = "https://apps.apple.com/us/app/rush-play-games-win-cash/id1540922030", t.click()
        } else if (window.location.search && -1 != window.location.search("v=amd_1")) {
            let e = {
                p: "web_user_action",
                o: "click_branch_rush_url",
                vs: "mobile"
            };
            sendAnalytics(e);
            let t = document.createElement("a");
            document.body.appendChild(t), t.href = "https://apps.apple.com/us/app/rush-play-games-win-cash/id1540922030", t.click()
        }
    } else {
        let e = {
            src: "",
            p: "web_ui_render",
            o: "website_rendered",
            vs: "web"
        };
        sendAnalytics(e)
    }
}, $("#phoneNum").keypress((function(e) {
    var t = e.which;
    if ((8 != t || 32 == t) && (t < 48 || t > 57)) return !1;
    document.getElementsByClassName("errorText")[0].style.display = "none", document.getElementsByClassName("phoneNumTextField")[0] && (document.getElementsByClassName("phoneNumTextField")[0].style.borderColor = "#FFFFFF"), document.getElementById("phoneNum").style.color = "#FFFFFF"
}));
var reviews = [{
    name: "Rahul",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.20.01&#32;PM.png",
    star: 4,
    date: "15th March, 2021",
    discription: "Mazaa aagaya, best app. Carrom game bohat smooth hai"
}, {
    name: "Tania",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.27.14&#32;PM.png",
    star: 5,
    date: "20th March, 2021",
    discription: "Loved it ! Absolutely loved the thrill ! Reminded me of my childhood when me and my cousins used to play together. I still have one of the dolls I won !"
}, {
    name: "Mohit",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.20.25&#32;PM.png",
    star: 4,
    date: "18th March, 2021",
    discription: "AMAZING!The app is seamless and beautiful- I’m excited to see if fastest fingers first gets launched next"
}, {
    name: "Harpreet",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.36.40&#32;PM.png",
    star: 3,
    date: "21st March, 2021",
    discription: "Great App! Call break bohat smooth hai. Plesae get more games soon"
}, {
    name: "Rohan",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.26.42&#32;PM.png",
    star: 4,
    date: "25th March, 2021",
    discription: "Best game in my life to play games and win cash."
}, {
    name: "Hina",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.27.20&#32;PM.png",
    star: 5,
    date: "28th March, 2021",
    discription: "Very smooth game, good Ui. Carrom game if fun"
}, {
    name: "Ritu",
    imgUrl: "./assets/mobileAssets/profile/Screenshot&#32;2021-04-06&#32;at&#32;4.36.47&#32;PM.png",
    star: 4,
    date: "4th April, 2021",
    discription: "Very good app"
}];

function renderReview(e) {
    return `<div class="reviewCard">\n                <div class="profileCon">\n                <img src=${e.imgUrl} />\n                <div class="name">\n                    ${e.name}\n                </div>\n                </div>\n                <div class="starCon">\n                <div class="star">\n                    <div class="star-disable">\n                        <img src="./assets/playstore/disable_star.png" />\n                        <img src="./assets/playstore/disable_star.png" />\n                        <img src="./assets/playstore/disable_star.png" />\n                        <img src="./assets/playstore/disable_star.png" />\n                        <img src="./assets/playstore/disable_star.png" />\n                    </div>\n                    <div class="star-enable" style="width: ${20*e.star}%;">\n                        <img src="./assets/playstore/star.png" />\n                        <img src="./assets/playstore/star.png" />\n                        <img src="./assets/playstore/star.png" />\n                        <img src="./assets/playstore/star.png" />\n                        <img src="./assets/playstore/star.png" />\n                    </div>\n                </div>\n                <div class="date">${e.date}</div>\n                </div>\n                <div class="discription">\n                ${e.discription}\n                </div>\n            </div>`
}
const gameDialog = document.getElementById("ludoGamePlayDialog");
var ludoIcon = document.getElementById("ludoIcon"),
    customSetTimeout = function(e, t) {
        var i, n, s = t;
        this.pause = function() {
            window.clearTimeout(i), i = null, s -= Date.now() - n
        }, this.resume = function() {
            i || (n = Date.now(), i = window.setTimeout(e, s))
        }, this.resume()
    },
    gameStarted = !1;

function openDialog(e = "mobile") {
    let t = {
        p: "web_user_action",
        o: "click_play_demo_website_button"
    };
    t.vs = e, sendAnalytics(t), gameStarted = !0;
    var i = document.getElementById("ludoPlayDialog");
    gameEnded = !1, gameScore = {
        blueToken1: 0,
        blueToken2: 0,
        greenToken1: 0,
        greenToken2: 0
    }, userDiceRoll.removeAttribute("data-side"), botDiceRoll.removeAttribute("data-side"), userDiceRoll.classList.remove("reRoll"), botDiceRoll.classList.remove("reRoll"), updatePlayerScore(), setTimeout((() => {
        startGameTimer()
    }), 2500), setTimeout((function() {
        i.close(), gameDialog.showModal(), placePawns(), isTurnTimeOver = !1, toggleTimerColor(!1)
    }), 3500), setTimeout((() => {
        userDiceRoll.removeAttribute("data-side"), enableUserDice(), startBgAnimation(!0)
    }), 4e3), i.showModal(), document.body.style.overflow = "hidden"
}
var botDiceRollTimeout, botTurnChange, enableUserDiceTimeout, movingTokenTimeout, timerUpdateInterval, diceTimerAnimation = document.querySelectorAll(".fill");

function getOS() {
    const e = window.navigator.userAgent,
        t = window.navigator ? .userAgentData ? .platform || window.navigator.platform;
    let i = null;
    return -1 !== ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? i = "Mac OS" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? i = "iOS" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? i = "Windows" : /Android/.test(e) ? i = "Android" : /Linux/.test(t) && (i = "Linux"), i
}

function loadWinConfettiAnimation() {
    const e = document.getElementById("confettiContainer");
    lottie.loadAnimation({
        container: e,
        renderer: "svg",
        loop: !1,
        autoplay: !1,
        path: "/assets/animations/Confetti_lottie.json"
    }).play()
}

function startGameTimer() {
    userDiceTurn = !0, gameTimer = 60, timerUpdateInterval = setInterval((() => {
        var e = document.getElementById("winDiv"),
            t = document.getElementById("lostDiv"),
            i = document.getElementById("playAgain"),
            n = document.getElementById("lostDivDesktop");
        if (gameTimer < 0) {
            gameEnded = !0, clearInterval(timerUpdateInterval);
            const {
                blueToken1: s,
                blueToken2: o,
                greenToken1: a,
                greenToken2: l
            } = gameScore;
            s + o > a + l ? (loadWinConfettiAnimation(), e.classList.remove("hide-result"), e.classList.add("show-result"), t.classList.remove("show-result"), t.classList.add("hide-result"), i.classList.remove("show-result"), i.classList.add("hide-result"), n.classList.remove("show-result"), n.classList.add("hide-result")) : (e.classList.add("hide-result"), e.classList.remove("show-result"), t.classList.remove("hide-result"), t.classList.add("show-result"), i.classList.remove("hide-result"), i.classList.add("show-result"), n.classList.remove("hide-result"), n.classList.add("show-result")), closeDialog(), ludoPlayEndDialog.showModal()
        } else backgroundPlay || updateTimer()
    }), 1e3)
}

function closeDialog() {
    gameStarted = !1;
    var e = document.getElementById("ludoPlayDialog"),
        t = document.getElementById("ludoGamePlayDialog");
    e.close(), t.close(), document.body.style.overflow = "auto", clearInterval(timerUpdateInterval), clearInterval(diceTimerInterval), clearTimeout(botDiceRollTimeout), clearTimeout(botTurnChange), clearTimeout(enableUserDiceTimeout), clearTimeout(movingTokenTimeout);
    let i = window.setTimeout((function() {}), 0);
    for (; i--;) window.clearTimeout(i)
}

function closeEndDialog() {
    document.getElementById("ludoPlayEndDialog").close(), document.body.style.overflow = "auto"
}

function DownloadApkClickOnDialog(e) {
    closeDialog(), closeEndDialog(), DownloadApkClick(e)
}
"iOS" !== getOS() && gameStarted && document.addEventListener("visibilitychange", (function() {
    "hidden" === document.visibilityState ? (backgroundPlay = !0, botDiceRollTimeout.pause(), botTurnChange.pause(), enableUserDiceTimeout.pause(), movingTokenTimeout.pause(), diceTimerAnimation.forEach((e => e.classList.add("pause-animation"))), "running" === ctx.state && ctx.suspend()) : (backgroundPlay = !1, botDiceRollTimeout.resume(), botTurnChange.resume(), enableUserDiceTimeout.resume(), movingTokenTimeout.resume(), diceTimerAnimation.forEach((e => e.classList.remove("pause-animation"))), "suspended" === ctx.state && ctx.resume())
}));
var iosButtonOnLudo = document.getElementById("downloadIosBtnOnLudoPlay"),
    iosButtonOnLudoEnd = document.getElementById("downloadIosBtnOnLudoPlayEnd");

function onPlayAgainClick() {
    closeEndDialog(), openDialog()
}
iosButtonOnLudo && iosButtonOnLudo.addEventListener("click", (function() {
    closeDialog()
})), iosButtonOnLudoEnd && iosButtonOnLudoEnd.addEventListener("click", (function() {
    closeEndDialog()
}));