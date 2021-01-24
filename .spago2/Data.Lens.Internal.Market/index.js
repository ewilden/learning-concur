// Generated by purs version 0.13.8
"use strict";
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Market = (function () {
    function Market(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Market.create = function (value0) {
        return function (value1) {
            return new Market(value0, value1);
        };
    };
    return Market;
})();
var profunctorMarket = new Data_Profunctor.Profunctor(function (f) {
    return function (g) {
        return function (v) {
            return new Market(function ($19) {
                return g(v.value0($19));
            }, (function () {
                var $20 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(g);
                return function ($21) {
                    return $20(v.value1(f($21)));
                };
            })());
        };
    };
});
var functorMarket = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new Market(function ($22) {
            return f(v.value0($22));
        }, (function () {
            var $23 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(f);
            return function ($24) {
                return $23(v.value1($24));
            };
        })());
    };
});
var choiceMarket = new Data_Profunctor_Choice.Choice(function () {
    return profunctorMarket;
}, function (v) {
    return new Market(function ($25) {
        return Data_Either.Left.create(v.value0($25));
    }, Data_Either.either((function () {
        var $26 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(Data_Either.Left.create);
        return function ($27) {
            return $26(v.value1($27));
        };
    })())(function ($28) {
        return Data_Either.Left.create(Data_Either.Right.create($28));
    }));
}, function (v) {
    return new Market(function ($29) {
        return Data_Either.Right.create(v.value0($29));
    }, Data_Either.either(function ($30) {
        return Data_Either.Left.create(Data_Either.Left.create($30));
    })((function () {
        var $31 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)(Data_Either.Right.create);
        return function ($32) {
            return $31(v.value1($32));
        };
    })()));
});
module.exports = {
    Market: Market,
    functorMarket: functorMarket,
    profunctorMarket: profunctorMarket,
    choiceMarket: choiceMarket
};
