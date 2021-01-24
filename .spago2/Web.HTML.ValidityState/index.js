// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Effect_Uncurried = require("../Effect.Uncurried/index.js");
var valueMissing = Effect_Uncurried.runEffectFn2($foreign.readProp)("valueMissing");
var valid = Effect_Uncurried.runEffectFn2($foreign.readProp)("valid");
var typeMismatch = Effect_Uncurried.runEffectFn2($foreign.readProp)("typeMismatch");
var tooShort = Effect_Uncurried.runEffectFn2($foreign.readProp)("tooShort");
var tooLong = Effect_Uncurried.runEffectFn2($foreign.readProp)("tooLong");
var stepMismatch = Effect_Uncurried.runEffectFn2($foreign.readProp)("stepMismatch");
var rangeUnderflow = Effect_Uncurried.runEffectFn2($foreign.readProp)("rangeUnderflow");
var rangeOverflow = Effect_Uncurried.runEffectFn2($foreign.readProp)("rangeOverflow");
var patternMismatch = Effect_Uncurried.runEffectFn2($foreign.readProp)("patternMismatch");
var customError = Effect_Uncurried.runEffectFn2($foreign.readProp)("customError");
var badInput = Effect_Uncurried.runEffectFn2($foreign.readProp)("badInput");
module.exports = {
    valueMissing: valueMissing,
    typeMismatch: typeMismatch,
    patternMismatch: patternMismatch,
    tooLong: tooLong,
    tooShort: tooShort,
    rangeUnderflow: rangeUnderflow,
    rangeOverflow: rangeOverflow,
    stepMismatch: stepMismatch,
    badInput: badInput,
    customError: customError,
    valid: valid
};
