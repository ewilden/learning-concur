// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toEvent = Unsafe_Coerce.unsafeCoerce;
var storageArea = function ($0) {
    return Data_Nullable.toMaybe($foreign["_storageArea"]($0));
};
var oldValue = function ($1) {
    return Data_Nullable.toMaybe($foreign["_oldValue"]($1));
};
var newValue = function ($2) {
    return Data_Nullable.toMaybe($foreign["_newValue"]($2));
};
var key = function ($3) {
    return Data_Nullable.toMaybe($foreign["_key"]($3));
};
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("StorageEvent");
module.exports = {
    fromEvent: fromEvent,
    toEvent: toEvent,
    key: key,
    oldValue: oldValue,
    newValue: newValue,
    storageArea: storageArea,
    url: $foreign.url
};
