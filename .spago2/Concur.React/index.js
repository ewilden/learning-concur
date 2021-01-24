// Generated by purs version 0.13.8
"use strict";
var Concur_Core_Discharge = require("../Concur.Core.Discharge/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var React = require("../React/index.js");
var mkComponentState = function (v) {
    return {
        view: v
    };
};
var componentClassWithMount = function (onMount) {
    return function (winit) {
        var render = function (st) {
            return React.toElement(React.isReactElementArray)(st.view);
        };
        var handler = function (v) {
            return function (v1) {
                if (v1 instanceof Data_Either.Right) {
                    return function __do() {
                        var v2 = Concur_Core_Discharge.discharge(Data_Monoid.monoidArray)(handler(v))(v1.value0)();
                        return Data_Functor["void"](Effect.functorEffect)(React.writeState(v)(mkComponentState(v2)))();
                    };
                };
                if (v1 instanceof Data_Either.Left) {
                    return function __do() {
                        Effect_Console.log("FAILED! " + Data_Show.show(Effect_Exception.showError)(v1.value0))();
                        return Data_Unit.unit;
                    };
                };
                throw new Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        var component = function ($$this) {
            return function __do() {
                var v = Concur_Core_Discharge.dischargePartialEffect(Data_Monoid.monoidArray)(winit)();
                return {
                    state: mkComponentState(v.value1),
                    render: Data_Functor.map(Effect.functorEffect)(render)(React.getState($$this)),
                    componentDidMount: Control_Apply.applySecond(Effect.applyEffect)(onMount)(handler($$this)(new Data_Either.Right(v.value0)))
                };
            };
        };
        return React.component()("Concur")(component);
    };
};
var componentClass = componentClassWithMount(Data_Monoid.mempty(Effect.monoidEffect(Data_Monoid.monoidUnit)));
var renderComponent = function (init) {
    return React.createLeafElement()(componentClass(init))({});
};
module.exports = {
    mkComponentState: mkComponentState,
    componentClassWithMount: componentClassWithMount,
    componentClass: componentClass,
    renderComponent: renderComponent
};