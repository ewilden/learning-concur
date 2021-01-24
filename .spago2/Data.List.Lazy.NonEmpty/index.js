// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_List_Lazy = require("../Data.List.Lazy/index.js");
var Data_List_Lazy_Types = require("../Data.List.Lazy.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var uncons = function (v) {
    var v1 = Data_Lazy.force(v);
    return {
        head: v1.value0,
        tail: v1.value1
    };
};
var toList = function (v) {
    var v1 = Data_Lazy.force(v);
    return Data_List_Lazy_Types.cons(v1.value0)(v1.value1);
};
var toUnfoldable = function (dictUnfoldable) {
    var $54 = Data_Unfoldable.unfoldr(dictUnfoldable)(function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (rec) {
            return new Data_Tuple.Tuple(rec.head, rec.tail);
        })(Data_List_Lazy.uncons(xs));
    });
    return function ($55) {
        return $54(toList($55));
    };
};
var tail = function (v) {
    var v1 = Data_Lazy.force(v);
    return v1.value1;
};
var singleton = Control_Applicative.pure(Data_List_Lazy_Types.applicativeNonEmptyList);
var repeat = function (x) {
    return Data_List_Lazy_Types.NonEmptyList(Data_Lazy.defer(function (v) {
        return new Data_NonEmpty.NonEmpty(x, Data_List_Lazy.repeat(x));
    }));
};
var length = function (v) {
    var v1 = Data_Lazy.force(v);
    return 1 + Data_List_Lazy.length(v1.value1) | 0;
};
var last = function (v) {
    var v1 = Data_Lazy.force(v);
    return Data_Maybe.fromMaybe(v1.value0)(Data_List_Lazy.last(v1.value1));
};
var iterate = function (f) {
    return function (x) {
        return Data_List_Lazy_Types.NonEmptyList(Data_Lazy.defer(function (v) {
            return new Data_NonEmpty.NonEmpty(x, Data_List_Lazy.iterate(f)(f(x)));
        }));
    };
};
var init = function (v) {
    var v1 = Data_Lazy.force(v);
    return Data_Maybe.maybe(Data_List_Lazy_Types.nil)(function (v2) {
        return Data_List_Lazy_Types.cons(v1.value0)(v2);
    })(Data_List_Lazy.init(v1.value1));
};
var head = function (v) {
    var v1 = Data_Lazy.force(v);
    return v1.value0;
};
var fromList = function (l) {
    var v = Data_List_Lazy_Types.step(l);
    if (v instanceof Data_List_Lazy_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Lazy_Types.Cons) {
        return new Data_Maybe.Just(Data_Lazy.defer(function (v1) {
            return new Data_NonEmpty.NonEmpty(v.value0, v.value1);
        }));
    };
    throw new Error("Failed pattern match at Data.List.Lazy.NonEmpty (line 41, column 3 - line 43, column 61): " + [ v.constructor.name ]);
};
var fromFoldable = function (dictFoldable) {
    var $56 = Data_List_Lazy.fromFoldable(dictFoldable);
    return function ($57) {
        return fromList($56($57));
    };
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Lazy_Types.bindNonEmptyList));
var appendFoldable = function (dictFoldable) {
    return function (nel) {
        return function (ys) {
            return Data_Lazy.defer(function (v) {
                return new Data_NonEmpty.NonEmpty(head(nel), Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(tail(nel))(Data_List_Lazy.fromFoldable(dictFoldable)(ys)));
            });
        };
    };
};
module.exports = {
    toUnfoldable: toUnfoldable,
    fromFoldable: fromFoldable,
    fromList: fromList,
    toList: toList,
    singleton: singleton,
    repeat: repeat,
    iterate: iterate,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    length: length,
    concatMap: concatMap,
    appendFoldable: appendFoldable
};
