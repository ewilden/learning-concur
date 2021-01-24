// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLModElement");
module.exports = {
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    cite: $foreign.cite,
    setCite: $foreign.setCite,
    dateTime: $foreign.dateTime,
    setDateTime: $foreign.setDateTime
};
