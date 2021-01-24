// Generated by purs version 0.13.8
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Control_Monad_RWS_Trans = require("../Control.Monad.RWS.Trans/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_Monad_Writer_Trans = require("../Control.Monad.Writer.Trans/index.js");
var LiftWidget = function (liftWidget) {
    this.liftWidget = liftWidget;
};
var widgetLiftWidget = new LiftWidget(Control_Category.identity(Control_Category.categoryFn));
var liftWidget = function (dict) {
    return dict.liftWidget;
};
var readerLiftWidget = function (dictMonad) {
    return function (dictLiftWidget) {
        return new LiftWidget((function () {
            var $12 = Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT)(dictMonad);
            var $13 = liftWidget(dictLiftWidget);
            return function ($14) {
                return $12($13($14));
            };
        })());
    };
};
var rwsLiftWidget = function (dictMonoid) {
    return function (dictMonad) {
        return function (dictLiftWidget) {
            return new LiftWidget((function () {
                var $15 = Control_Monad_Trans_Class.lift(Control_Monad_RWS_Trans.monadTransRWST(dictMonoid))(dictMonad);
                var $16 = liftWidget(dictLiftWidget);
                return function ($17) {
                    return $15($16($17));
                };
            })());
        };
    };
};
var stateLiftWidget = function (dictMonad) {
    return function (dictLiftWidget) {
        return new LiftWidget((function () {
            var $18 = Control_Monad_Trans_Class.lift(Control_Monad_State_Trans.monadTransStateT)(dictMonad);
            var $19 = liftWidget(dictLiftWidget);
            return function ($20) {
                return $18($19($20));
            };
        })());
    };
};
var writerLiftWidget = function (dictMonoid) {
    return function (dictMonad) {
        return function (dictLiftWidget) {
            return new LiftWidget((function () {
                var $21 = Control_Monad_Trans_Class.lift(Control_Monad_Writer_Trans.monadTransWriterT(dictMonoid))(dictMonad);
                var $22 = liftWidget(dictLiftWidget);
                return function ($23) {
                    return $21($22($23));
                };
            })());
        };
    };
};
var exceptLiftWidget = function (dictMonad) {
    return function (dictLiftWidget) {
        return new LiftWidget((function () {
            var $24 = Control_Monad_Trans_Class.lift(Control_Monad_Except_Trans.monadTransExceptT)(dictMonad);
            var $25 = liftWidget(dictLiftWidget);
            return function ($26) {
                return $24($25($26));
            };
        })());
    };
};
module.exports = {
    liftWidget: liftWidget,
    LiftWidget: LiftWidget,
    widgetLiftWidget: widgetLiftWidget,
    exceptLiftWidget: exceptLiftWidget,
    rwsLiftWidget: rwsLiftWidget,
    readerLiftWidget: readerLiftWidget,
    stateLiftWidget: stateLiftWidget,
    writerLiftWidget: writerLiftWidget
};