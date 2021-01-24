// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var offsetParent = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($1) {
        return $0($foreign["_offsetParent"]($1));
    };
})();
var fromParentNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromNonDocumentTypeChildNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromEventTarget = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromElement = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromChildNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
module.exports = {
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    offsetParent: offsetParent,
    title: $foreign.title,
    setTitle: $foreign.setTitle,
    lang: $foreign.lang,
    setLang: $foreign.setLang,
    dir: $foreign.dir,
    setDir: $foreign.setDir,
    className: $foreign.className,
    setClassName: $foreign.setClassName,
    classList: $foreign.classList,
    hidden: $foreign.hidden,
    setHidden: $foreign.setHidden,
    tabIndex: $foreign.tabIndex,
    setTabIndex: $foreign.setTabIndex,
    draggable: $foreign.draggable,
    setDraggable: $foreign.setDraggable,
    contentEditable: $foreign.contentEditable,
    setContentEditable: $foreign.setContentEditable,
    isContentEditable: $foreign.isContentEditable,
    spellcheck: $foreign.spellcheck,
    setSpellcheck: $foreign.setSpellcheck,
    click: $foreign.click,
    focus: $foreign.focus,
    blur: $foreign.blur,
    getBoundingClientRect: $foreign.getBoundingClientRect,
    offsetTop: $foreign.offsetTop,
    offsetLeft: $foreign.offsetLeft,
    offsetWidth: $foreign.offsetWidth,
    offsetHeight: $foreign.offsetHeight
};