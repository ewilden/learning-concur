// Generated by purs version 0.13.8
"use strict";
var React = require("../React/index.js");
var React_DOM_Props = require("../React.DOM.Props/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var IsDynamic = function (x) {
    return x;
};
var text = Unsafe_Coerce.unsafeCoerce;
var number = Unsafe_Coerce.unsafeCoerce;
var mkDOM = function (dynamic) {
    return function (tag) {
        return function (props) {
            var createElement = (function () {
                if (!dynamic) {
                    return React.createElementTagName;
                };
                if (dynamic) {
                    return React.createElementTagNameDynamic;
                };
                throw new Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [ dynamic.constructor.name ]);
            })();
            return createElement(tag)(React_DOM_Props.unsafeFromPropsArray(props));
        };
    };
};
var nav = mkDOM(false)("nav");
var nav$prime = nav([  ]);
var noscript = mkDOM(false)("noscript");
var noscript$prime = noscript([  ]);
var object = mkDOM(false)("object");
var object$prime = object([  ]);
var ol = mkDOM(false)("ol");
var ol$prime = ol([  ]);
var optgroup = mkDOM(false)("optgroup");
var optgroup$prime = optgroup([  ]);
var option = mkDOM(false)("option");
var option$prime = option([  ]);
var output = mkDOM(false)("output");
var output$prime = output([  ]);
var p = mkDOM(false)("p");
var p$prime = p([  ]);
var param = function (props) {
    return mkDOM(false)("param")(props)([  ]);
};
var param$prime = param([  ]);
var picture = mkDOM(false)("picture");
var picture$prime = picture([  ]);
var pre = mkDOM(false)("pre");
var pre$prime = pre([  ]);
var progress = mkDOM(false)("progress");
var progress$prime = progress([  ]);
var q = mkDOM(false)("q");
var q$prime = q([  ]);
var rp = mkDOM(false)("rp");
var rp$prime = rp([  ]);
var rt = mkDOM(false)("rt");
var rt$prime = rt([  ]);
var ruby = mkDOM(false)("ruby");
var ruby$prime = ruby([  ]);
var s = mkDOM(false)("s");
var s$prime = s([  ]);
var samp = mkDOM(false)("samp");
var samp$prime = samp([  ]);
var script = mkDOM(false)("script");
var script$prime = script([  ]);
var section = mkDOM(false)("section");
var section$prime = section([  ]);
var select = mkDOM(false)("select");
var select$prime = select([  ]);
var small = mkDOM(false)("small");
var small$prime = small([  ]);
var source = function (props) {
    return mkDOM(false)("source")(props)([  ]);
};
var source$prime = source([  ]);
var span = mkDOM(false)("span");
var span$prime = span([  ]);
var strong = mkDOM(false)("strong");
var strong$prime = strong([  ]);
var style = mkDOM(false)("style");
var style$prime = style([  ]);
var sub = mkDOM(false)("sub");
var sub$prime = sub([  ]);
var summary = mkDOM(false)("summary");
var summary$prime = summary([  ]);
var sup = mkDOM(false)("sup");
var sup$prime = sup([  ]);
var table = mkDOM(false)("table");
var table$prime = table([  ]);
var tbody = mkDOM(false)("tbody");
var tbody$prime = tbody([  ]);
var td = mkDOM(false)("td");
var td$prime = td([  ]);
var textarea = mkDOM(false)("textarea");
var textarea$prime = textarea([  ]);
var tfoot = mkDOM(false)("tfoot");
var tfoot$prime = tfoot([  ]);
var th = mkDOM(false)("th");
var th$prime = th([  ]);
var thead = mkDOM(false)("thead");
var thead$prime = thead([  ]);
var time = mkDOM(false)("time");
var time$prime = time([  ]);
var title = mkDOM(false)("title");
var title$prime = title([  ]);
var tr = mkDOM(false)("tr");
var tr$prime = tr([  ]);
var track = function (props) {
    return mkDOM(false)("track")(props)([  ]);
};
var track$prime = track([  ]);
var u = mkDOM(false)("u");
var u$prime = u([  ]);
var ul = mkDOM(false)("ul");
var ul$prime = ul([  ]);
var $$var = mkDOM(false)("var");
var var$prime = $$var([  ]);
var video = mkDOM(false)("video");
var video$prime = video([  ]);
var wbr = function (props) {
    return mkDOM(false)("wbr")(props)([  ]);
};
var wbr$prime = wbr([  ]);
var meter = mkDOM(false)("meter");
var meter$prime = meter([  ]);
var meta = function (props) {
    return mkDOM(false)("meta")(props)([  ]);
};
var meta$prime = meta([  ]);
var menuitem = function (props) {
    return mkDOM(false)("menuitem")(props)([  ]);
};
var menuitem$prime = menuitem([  ]);
var menu = mkDOM(false)("menu");
var menu$prime = menu([  ]);
var mark = mkDOM(false)("mark");
var mark$prime = mark([  ]);
var map = mkDOM(false)("map");
var map$prime = map([  ]);
var main = mkDOM(false)("main");
var main$prime = main([  ]);
var link = function (props) {
    return mkDOM(false)("link")(props)([  ]);
};
var link$prime = link([  ]);
var li = mkDOM(false)("li");
var li$prime = li([  ]);
var legend = mkDOM(false)("legend");
var legend$prime = legend([  ]);
var label = mkDOM(false)("label");
var label$prime = label([  ]);
var keygen = function (props) {
    return mkDOM(false)("keygen")(props)([  ]);
};
var keygen$prime = keygen([  ]);
var kbd = mkDOM(false)("kbd");
var kbd$prime = kbd([  ]);
var $$int = Unsafe_Coerce.unsafeCoerce;
var ins = mkDOM(false)("ins");
var ins$prime = ins([  ]);
var input = function (props) {
    return mkDOM(false)("input")(props)([  ]);
};
var input$prime = input([  ]);
var img = function (props) {
    return mkDOM(false)("img")(props)([  ]);
};
var img$prime = img([  ]);
var iframe = mkDOM(false)("iframe");
var iframe$prime = iframe([  ]);
var i = mkDOM(false)("i");
var i$prime = i([  ]);
var html = mkDOM(false)("html");
var html$prime = html([  ]);
var hr = function (props) {
    return mkDOM(false)("hr")(props)([  ]);
};
var hr$prime = hr([  ]);
var header = mkDOM(false)("header");
var header$prime = header([  ]);
var head = mkDOM(false)("head");
var head$prime = head([  ]);
var h6 = mkDOM(false)("h6");
var h6$prime = h6([  ]);
var h5 = mkDOM(false)("h5");
var h5$prime = h5([  ]);
var h4 = mkDOM(false)("h4");
var h4$prime = h4([  ]);
var h3 = mkDOM(false)("h3");
var h3$prime = h3([  ]);
var h2 = mkDOM(false)("h2");
var h2$prime = h2([  ]);
var h1 = mkDOM(false)("h1");
var h1$prime = h1([  ]);
var form = mkDOM(false)("form");
var form$prime = form([  ]);
var footer = mkDOM(false)("footer");
var footer$prime = footer([  ]);
var figure = mkDOM(false)("figure");
var figure$prime = figure([  ]);
var figcaption = mkDOM(false)("figcaption");
var figcaption$prime = figcaption([  ]);
var fieldset = mkDOM(false)("fieldset");
var fieldset$prime = fieldset([  ]);
var embed = function (props) {
    return mkDOM(false)("embed")(props)([  ]);
};
var embed$prime = embed([  ]);
var em = mkDOM(false)("em");
var em$prime = em([  ]);
var dt = mkDOM(false)("dt");
var dt$prime = dt([  ]);
var dl = mkDOM(false)("dl");
var dl$prime = dl([  ]);
var div = mkDOM(false)("div");
var div$prime = div([  ]);
var dialog = mkDOM(false)("dialog");
var dialog$prime = dialog([  ]);
var dfn = mkDOM(false)("dfn");
var dfn$prime = dfn([  ]);
var details = mkDOM(false)("details");
var details$prime = details([  ]);
var del = mkDOM(false)("del");
var del$prime = del([  ]);
var dd = mkDOM(false)("dd");
var dd$prime = dd([  ]);
var datalist = mkDOM(false)("datalist");
var datalist$prime = datalist([  ]);
var colgroup = mkDOM(false)("colgroup");
var colgroup$prime = colgroup([  ]);
var col = function (props) {
    return mkDOM(false)("col")(props)([  ]);
};
var col$prime = col([  ]);
var code = mkDOM(false)("code");
var code$prime = code([  ]);
var cite = mkDOM(false)("cite");
var cite$prime = cite([  ]);
var caption = mkDOM(false)("caption");
var caption$prime = caption([  ]);
var canvas = mkDOM(false)("canvas");
var canvas$prime = canvas([  ]);
var button = mkDOM(false)("button");
var button$prime = button([  ]);
var br = function (props) {
    return mkDOM(false)("br")(props)([  ]);
};
var br$prime = br([  ]);
var body = mkDOM(false)("body");
var body$prime = body([  ]);
var blockquote = mkDOM(false)("blockquote");
var blockquote$prime = blockquote([  ]);
var big = mkDOM(false)("big");
var big$prime = big([  ]);
var bdo = mkDOM(false)("bdo");
var bdo$prime = bdo([  ]);
var bdi = mkDOM(false)("bdi");
var bdi$prime = bdi([  ]);
var base = function (props) {
    return mkDOM(false)("base")(props)([  ]);
};
var base$prime = base([  ]);
var b = mkDOM(false)("b");
var b$prime = b([  ]);
var audio = mkDOM(false)("audio");
var audio$prime = audio([  ]);
var aside = mkDOM(false)("aside");
var aside$prime = aside([  ]);
var article = mkDOM(false)("article");
var article$prime = article([  ]);
var area = function (props) {
    return mkDOM(false)("area")(props)([  ]);
};
var area$prime = area([  ]);
var address = mkDOM(false)("address");
var address$prime = address([  ]);
var abbr = mkDOM(false)("abbr");
var abbr$prime = abbr([  ]);
var a = mkDOM(false)("a");
var a$prime = a([  ]);
var _data = mkDOM(false)("data");
var _data$prime = _data([  ]);
module.exports = {
    IsDynamic: IsDynamic,
    mkDOM: mkDOM,
    text: text,
    "int": $$int,
    number: number,
    a: a,
    "a'": a$prime,
    abbr: abbr,
    "abbr'": abbr$prime,
    address: address,
    "address'": address$prime,
    area: area,
    "area'": area$prime,
    article: article,
    "article'": article$prime,
    aside: aside,
    "aside'": aside$prime,
    audio: audio,
    "audio'": audio$prime,
    b: b,
    "b'": b$prime,
    base: base,
    "base'": base$prime,
    bdi: bdi,
    "bdi'": bdi$prime,
    bdo: bdo,
    "bdo'": bdo$prime,
    big: big,
    "big'": big$prime,
    blockquote: blockquote,
    "blockquote'": blockquote$prime,
    body: body,
    "body'": body$prime,
    br: br,
    "br'": br$prime,
    button: button,
    "button'": button$prime,
    canvas: canvas,
    "canvas'": canvas$prime,
    caption: caption,
    "caption'": caption$prime,
    cite: cite,
    "cite'": cite$prime,
    code: code,
    "code'": code$prime,
    col: col,
    "col'": col$prime,
    colgroup: colgroup,
    "colgroup'": colgroup$prime,
    "_data": _data,
    "_data'": _data$prime,
    datalist: datalist,
    "datalist'": datalist$prime,
    dd: dd,
    "dd'": dd$prime,
    del: del,
    "del'": del$prime,
    details: details,
    "details'": details$prime,
    dfn: dfn,
    "dfn'": dfn$prime,
    dialog: dialog,
    "dialog'": dialog$prime,
    div: div,
    "div'": div$prime,
    dl: dl,
    "dl'": dl$prime,
    dt: dt,
    "dt'": dt$prime,
    em: em,
    "em'": em$prime,
    embed: embed,
    "embed'": embed$prime,
    fieldset: fieldset,
    "fieldset'": fieldset$prime,
    figcaption: figcaption,
    "figcaption'": figcaption$prime,
    figure: figure,
    "figure'": figure$prime,
    footer: footer,
    "footer'": footer$prime,
    form: form,
    "form'": form$prime,
    h1: h1,
    "h1'": h1$prime,
    h2: h2,
    "h2'": h2$prime,
    h3: h3,
    "h3'": h3$prime,
    h4: h4,
    "h4'": h4$prime,
    h5: h5,
    "h5'": h5$prime,
    h6: h6,
    "h6'": h6$prime,
    head: head,
    "head'": head$prime,
    header: header,
    "header'": header$prime,
    hr: hr,
    "hr'": hr$prime,
    html: html,
    "html'": html$prime,
    i: i,
    "i'": i$prime,
    iframe: iframe,
    "iframe'": iframe$prime,
    img: img,
    "img'": img$prime,
    input: input,
    "input'": input$prime,
    ins: ins,
    "ins'": ins$prime,
    kbd: kbd,
    "kbd'": kbd$prime,
    keygen: keygen,
    "keygen'": keygen$prime,
    label: label,
    "label'": label$prime,
    legend: legend,
    "legend'": legend$prime,
    li: li,
    "li'": li$prime,
    link: link,
    "link'": link$prime,
    main: main,
    "main'": main$prime,
    map: map,
    "map'": map$prime,
    mark: mark,
    "mark'": mark$prime,
    menu: menu,
    "menu'": menu$prime,
    menuitem: menuitem,
    "menuitem'": menuitem$prime,
    meta: meta,
    "meta'": meta$prime,
    meter: meter,
    "meter'": meter$prime,
    nav: nav,
    "nav'": nav$prime,
    noscript: noscript,
    "noscript'": noscript$prime,
    object: object,
    "object'": object$prime,
    ol: ol,
    "ol'": ol$prime,
    optgroup: optgroup,
    "optgroup'": optgroup$prime,
    option: option,
    "option'": option$prime,
    output: output,
    "output'": output$prime,
    p: p,
    "p'": p$prime,
    param: param,
    "param'": param$prime,
    picture: picture,
    "picture'": picture$prime,
    pre: pre,
    "pre'": pre$prime,
    progress: progress,
    "progress'": progress$prime,
    q: q,
    "q'": q$prime,
    rp: rp,
    "rp'": rp$prime,
    rt: rt,
    "rt'": rt$prime,
    ruby: ruby,
    "ruby'": ruby$prime,
    s: s,
    "s'": s$prime,
    samp: samp,
    "samp'": samp$prime,
    script: script,
    "script'": script$prime,
    section: section,
    "section'": section$prime,
    select: select,
    "select'": select$prime,
    small: small,
    "small'": small$prime,
    source: source,
    "source'": source$prime,
    span: span,
    "span'": span$prime,
    strong: strong,
    "strong'": strong$prime,
    style: style,
    "style'": style$prime,
    sub: sub,
    "sub'": sub$prime,
    summary: summary,
    "summary'": summary$prime,
    sup: sup,
    "sup'": sup$prime,
    table: table,
    "table'": table$prime,
    tbody: tbody,
    "tbody'": tbody$prime,
    td: td,
    "td'": td$prime,
    textarea: textarea,
    "textarea'": textarea$prime,
    tfoot: tfoot,
    "tfoot'": tfoot$prime,
    th: th,
    "th'": th$prime,
    thead: thead,
    "thead'": thead$prime,
    time: time,
    "time'": time$prime,
    title: title,
    "title'": title$prime,
    tr: tr,
    "tr'": tr$prime,
    track: track,
    "track'": track$prime,
    u: u,
    "u'": u$prime,
    ul: ul,
    "ul'": ul$prime,
    "var": $$var,
    "var'": var$prime,
    video: video,
    "video'": video$prime,
    wbr: wbr,
    "wbr'": wbr$prime
};