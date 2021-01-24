// Generated by purs version 0.13.8
"use strict";
var Concur_Core_Types = require("../Concur.Core.Types/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Monad_Free = require("../Control.Monad.Free/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Effect = require("../Effect/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var dischargePartialEffect = function (dictMonoid) {
    return function (w) {
        var v = Control_Monad_Free.resume(Concur_Core_Types.functorWidgetStep)(Concur_Core_Types.unWidget(w));
        if (v instanceof Data_Either.Right) {
            return Control_Applicative.pure(Effect.applicativeEffect)(new Data_Tuple.Tuple(w, Data_Monoid.mempty(dictMonoid)));
        };
        if (v instanceof Data_Either.Left) {
            if (v.value0 instanceof Data_Either.Left) {
                return function __do() {
                    var w$prime = v.value0.value0();
                    return dischargePartialEffect(dictMonoid)(w$prime)();
                };
            };
            if (v.value0 instanceof Data_Either.Right) {
                return Control_Applicative.pure(Effect.applicativeEffect)(new Data_Tuple.Tuple(Control_Monad_Free.wrap(new Data_Either.Right(v.value0.value0)), v.value0.value0.view));
            };
            throw new Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [ v.value0.constructor.name ]);
        };
        throw new Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [ v.constructor.name ]);
    };
};
var discharge = function (dictMonoid) {
    return function (handler) {
        return function (v) {
            var v1 = Control_Monad_Free.resume(Concur_Core_Types.functorWidgetStep)(v);
            if (v1 instanceof Data_Either.Right) {
                return Control_Applicative.pure(Effect.applicativeEffect)(Data_Monoid.mempty(dictMonoid));
            };
            if (v1 instanceof Data_Either.Left) {
                if (v1.value0 instanceof Data_Either.Left) {
                    return function __do() {
                        var w$prime = v1.value0.value0();
                        return discharge(dictMonoid)(handler)(w$prime)();
                    };
                };
                if (v1.value0 instanceof Data_Either.Right) {
                    return function __do() {
                        Effect_Aff.runAff_((function () {
                            var $19 = Data_Functor.map(Data_Either.functorEither)(Concur_Core_Types.Widget);
                            return function ($20) {
                                return handler($19($20));
                            };
                        })())(v1.value0.value0.cont)();
                        return v1.value0.value0.view;
                    };
                };
                throw new Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [ v1.value0.constructor.name ]);
            };
            throw new Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [ v1.constructor.name ]);
        };
    };
};
module.exports = {
    discharge: discharge,
    dischargePartialEffect: dischargePartialEffect
};
