// Generated by purs version 0.13.8
"use strict";
var Concur_Core_LiftWidget = require("../Concur.Core.LiftWidget/index.js");
var Concur_Core_Types = require("../Concur.Core.Types/index.js");
var IsWidget = function (LiftWidget3, Monad0, Monoid1, MultiAlternative4, ShiftMap2) {
    this.LiftWidget3 = LiftWidget3;
    this.Monad0 = Monad0;
    this.Monoid1 = Monoid1;
    this.MultiAlternative4 = MultiAlternative4;
    this.ShiftMap2 = ShiftMap2;
};
var widgetIsWidget = function (dictMonoid) {
    return new IsWidget(function () {
        return Concur_Core_LiftWidget.widgetLiftWidget;
    }, function () {
        return Concur_Core_Types.widgetMonad;
    }, function () {
        return dictMonoid;
    }, function () {
        return Concur_Core_Types.widgetMultiAlternative(dictMonoid);
    }, function () {
        return Concur_Core_Types.widgetShiftMap;
    });
};
module.exports = {
    IsWidget: IsWidget,
    widgetIsWidget: widgetIsWidget
};
