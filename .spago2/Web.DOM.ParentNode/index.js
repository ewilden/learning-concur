// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Effect = require("../Effect/index.js");
var QuerySelector = function (x) {
    return x;
};
var querySelector = function (qs) {
    var $3 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $4 = $foreign["_querySelector"](qs);
    return function ($5) {
        return $3($4($5));
    };
};
var ordQuerySelector = Data_Ord.ordString;
var newtypeQuerySelector = new Data_Newtype.Newtype(function (n) {
    return n;
}, QuerySelector);
var lastElementChild = (function () {
    var $6 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($7) {
        return $6($foreign["_lastElementChild"]($7));
    };
})();
var firstElementChild = (function () {
    var $8 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($9) {
        return $8($foreign["_firstElementChild"]($9));
    };
})();
var eqQuerySelector = Data_Eq.eqString;
module.exports = {
    firstElementChild: firstElementChild,
    lastElementChild: lastElementChild,
    QuerySelector: QuerySelector,
    querySelector: querySelector,
    eqQuerySelector: eqQuerySelector,
    ordQuerySelector: ordQuerySelector,
    newtypeQuerySelector: newtypeQuerySelector,
    children: $foreign.children,
    childElementCount: $foreign.childElementCount,
    querySelectorAll: $foreign.querySelectorAll
};