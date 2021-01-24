"use strict";
var Concur_Core_LiftWidget = require("../Concur.Core.LiftWidget/index.js");
var Concur_Core_Types = require("../Concur.Core.Types/index.js");
var Concur_React_DOM = require("../Concur.React.DOM/index.js");
var Concur_React_Props = require("../Concur.React.Props/index.js");
var Concur_React_Run = require("../Concur.React.Run/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_MultiAlternative = require("../Control.MultiAlternative/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Interpolate = require("../Data.Interpolate/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Data_Variant = require("../Data.Variant/index.js");
var Tile = function (x) {
    return x;
};
var unTile = function (v) {
    return v;
};
var tileSize = "160px";
var showTile = new Data_Show.Show(function (v) {
    return "Tile";
});
var showTerrain = Data_Variant.match()()()({
    road: Data_Function["const"]("road"),
    city: Data_Function["const"]("city"),
    field: Data_Function["const"]("field"),
    monastery: Data_Function["const"]("monastery")
});
var renderTile = function (v) {
    return Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.className("tile") ])((function () {
        if (v.tileMay instanceof Data_Maybe.Nothing) {
            return [ Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.style({
                gridArea: "center"
            }) ])([ Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)("Nothing") ]) ];
        };
        if (v.tileMay instanceof Data_Maybe.Just) {
            var renderSide = function (terrain) {
                return function (area) {
                    return Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.style({
                        gridArea: area
                    }) ])([ Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)(showTerrain(Data_Variant.expand()(terrain))) ]);
                };
            };
            return Data_Array.zipWith(renderSide)((unTile(v.tileMay.value0)).sides)([ "u", "r", "d", "l" ]);
        };
        throw new Error("Failed pattern match at Main (line 99, column 32 - line 103, column 70): " + [ v.tileMay.constructor.name ]);
    })());
};
var inju = function (dictCons) {
    return function (dictIsSymbol) {
        return function (x) {
            return Data_Variant.inj()(dictIsSymbol)(x)(Data_Unit.unit);
        };
    };
};
var hello = Control_Bind.discard(Control_Bind.discardUnit)(Concur_Core_Types.widgetBind)(Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([  ])([ Data_Functor["void"](Concur_Core_Types.widgetFunctor)(Concur_React_DOM.button(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.onClick ])([ Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)("Say Hello") ])), Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)("Step 1") ]))(function () {
    return Control_Bind.discard(Control_Bind.discardUnit)(Concur_Core_Types.widgetBind)(Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([  ])([ Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)("Hello Sailor!"), Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)("Step 2"), Data_Functor["void"](Concur_Core_Types.widgetFunctor)(Concur_React_DOM.button(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.onClick ])([ Concur_React_DOM.text(Concur_Core_LiftWidget.widgetLiftWidget)("Restart") ])) ]))(function () {
        return hello;
    });
});
var computeBounds = function (b) {
    return Data_FoldableWithIndex.foldlWithIndex(Data_Map_Internal.foldableWithIndexMap)(function (v) {
        return function (prevBounds) {
            return function (v1) {
                return {
                    left: Data_Ord.min(Data_Ord.ordInt)(prevBounds.left)(v.x),
                    right: Data_Ord.max(Data_Ord.ordInt)(prevBounds.right)(v.x),
                    up: Data_Ord.max(Data_Ord.ordInt)(prevBounds.up)(v.y),
                    down: Data_Ord.min(Data_Ord.ordInt)(prevBounds.down)(v.y)
                };
            };
        };
    })({
        left: 0,
        right: 0,
        up: 0,
        down: 0
    })(b);
};
var renderBoard = function (gs) {
    var v = computeBounds(gs.board);
    var yStart = v.down - 1 | 0;
    var yEnd = v.up + 1 | 0;
    var xStart = v.left - 1 | 0;
    var xEnd = v.right + 1 | 0;
    var renderSpot = function (v1) {
        return Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.style({
            gridArea: Data_Interpolate.i(Data_Interpolate.interpIntFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpIntFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpIntFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpIntFunction(Data_Interpolate.interpString))))))))((yEnd - v1.y | 0) + 1 | 0)("/")((v1.x - xStart | 0) + 1 | 0)("/")((yEnd - v1.y | 0) + 2 | 0)("/")((v1.x - xStart | 0) + 2 | 0)
        }), Concur_React_Props.className("spot") ])([ renderTile({
            spot: v1,
            tileMay: Data_Map_Internal.lookup(Data_Ord.ordRecord()(Data_Ord.ordRecordCons(Data_Ord.ordRecordCons(Data_Ord.ordRecordNil)()(new Data_Symbol.IsSymbol(function () {
                return "y";
            }))(Data_Ord.ordInt))()(new Data_Symbol.IsSymbol(function () {
                return "x";
            }))(Data_Ord.ordInt)))(v1)(gs.board)
        }) ]);
    };
    var mkSpot = function (x) {
        return function (y) {
            return {
                x: x,
                y: y
            };
        };
    };
    var spotsToRender = Control_Apply.apply(Control_Apply.applyArray)(Data_Functor.map(Data_Functor.functorArray)(mkSpot)(Data_Array.range(xStart)(xEnd)))(Data_Array.range(yStart)(yEnd));
    return Concur_React_DOM.div(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))(Concur_Core_Types.widgetShiftMap)([ Concur_React_Props.className("board"), Concur_React_Props.style({
        gridTemplateColumns: Data_Interpolate.i(Data_Interpolate.interpStringFunction(Data_Interpolate.interpIntFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpString))))))("repeat(")((xEnd - xStart | 0) + 1 | 0)(", ")(tileSize)(")"),
        gridTemplateRows: Data_Interpolate.i(Data_Interpolate.interpStringFunction(Data_Interpolate.interpIntFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpStringFunction(Data_Interpolate.interpString))))))("repeat(")((yEnd - yStart | 0) + 1 | 0)(", ")(tileSize)(")")
    }) ])(Data_Functor.mapFlipped(Data_Functor.functorArray)(spotsToRender)(renderSpot));
};
var _road = Data_Symbol.SProxy.value;
var _monastery = Data_Symbol.SProxy.value;
var _field = Data_Symbol.SProxy.value;
var _city = Data_Symbol.SProxy.value;
var startingTile = {
    sides: [ inju()(new Data_Symbol.IsSymbol(function () {
        return "city";
    }))(_city), inju()(new Data_Symbol.IsSymbol(function () {
        return "road";
    }))(_road), inju()(new Data_Symbol.IsSymbol(function () {
        return "field";
    }))(_field), inju()(new Data_Symbol.IsSymbol(function () {
        return "city";
    }))(_city) ],
    middle: inju()(new Data_Symbol.IsSymbol(function () {
        return "field";
    }))(_field)
};
var startingState = {
    board: Data_Map_Internal.fromFoldable(Data_Ord.ordRecord()(Data_Ord.ordRecordCons(Data_Ord.ordRecordCons(Data_Ord.ordRecordNil)()(new Data_Symbol.IsSymbol(function () {
        return "y";
    }))(Data_Ord.ordInt))()(new Data_Symbol.IsSymbol(function () {
        return "x";
    }))(Data_Ord.ordInt)))(Data_Foldable.foldableArray)([ new Data_Tuple.Tuple({
        x: 0,
        y: 0
    }, startingTile) ])
};
var main = Concur_React_Run.runWidgetInDom("root")(Control_MultiAlternative.orr(Concur_Core_Types.widgetMultiAlternative(Data_Monoid.monoidArray))([ hello, renderBoard(startingState) ]));
module.exports = {
    "_road": _road,
    "_city": _city,
    "_field": _field,
    "_monastery": _monastery,
    inju: inju,
    showTerrain: showTerrain,
    Tile: Tile,
    unTile: unTile,
    tileSize: tileSize,
    computeBounds: computeBounds,
    startingTile: startingTile,
    startingState: startingState,
    renderTile: renderTile,
    renderBoard: renderBoard,
    hello: hello,
    main: main,
    showTile: showTile
};
