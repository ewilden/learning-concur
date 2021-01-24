// Generated by purs version 0.13.8
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Lens_Getter = require("../Data.Lens.Getter/index.js");
var Data_Lens_Internal_Forget = require("../Data.Lens.Internal.Forget/index.js");
var Data_Lens_Setter = require("../Data.Lens.Setter/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Effect_AVar = require("../Effect.AVar/index.js");
var Effect_Aff_AVar = require("../Effect.Aff.AVar/index.js");
var Effect_Aff_Class = require("../Effect.Aff.Class/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var tea = function (dictMonad) {
    return function (s) {
        return function (render) {
            return function (update) {
                var go = function (st) {
                    return Control_Bind.bind(dictMonad.Bind1())(render(st))((function () {
                        var $32 = Data_Function.flip(update)(st);
                        return function ($33) {
                            return go($32($33));
                        };
                    })());
                };
                return go(s);
            };
        };
    };
};
var retryUntilLoop = function (dictMonad) {
    return function (p) {
        return function (w) {
            return function (a) {
                return Control_Bind.bind(dictMonad.Bind1())(w(a))(function (a$prime) {
                    var $21 = p(a$prime);
                    if ($21) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(a$prime);
                    };
                    return retryUntilLoop(dictMonad)(p)(w)(a$prime);
                });
            };
        };
    };
};
var retryUntil = function (dictMonad) {
    return function (p) {
        return function (w) {
            return Control_Bind.bind(dictMonad.Bind1())(w)(function (a) {
                var $22 = p(a);
                if ($22) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(a);
                };
                return retryUntil(dictMonad)(p)(w);
            });
        };
    };
};
var remoteWidget = function (dictMonadEffect) {
    return function (dictMonadAff) {
        return function (dictMonadEffect1) {
            return function (dictPlus) {
                return function (axn) {
                    return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_AVar.empty))(function ($$var) {
                        return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(new Data_Tuple.Tuple(Effect_Aff_Class.liftAff(dictMonadAff)(Effect_Aff_AVar.take($$var)), Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(axn)(function (f) {
                            return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadAff.MonadEffect0())(Effect_AVar.tryPut(f)($$var)))(function () {
                                return Control_Plus.empty(dictPlus);
                            });
                        })));
                    });
                };
            };
        };
    };
};
var mapWire = function (dictFunctor) {
    return function (lens) {
        return function (wire) {
            return {
                value: Data_Lens_Getter.view(lens(Data_Lens_Internal_Forget.strongForget))(wire.value),
                send: function (a) {
                    return wire.send(Data_Lens_Setter.set(lens(Data_Profunctor_Strong.strongFn))(a)(wire.value));
                },
                receive: Data_Functor.map(dictFunctor)(Data_Lens_Getter.view(lens(Data_Lens_Internal_Forget.strongForget)))(wire.receive)
            };
        };
    };
};
var loopState = function (dictMonad) {
    return function (s) {
        return function (f) {
            return Control_Bind.bind(dictMonad.Bind1())(f(s))(function (v) {
                if (v instanceof Data_Either.Left) {
                    return loopState(dictMonad)(v.value0)(f);
                };
                if (v instanceof Data_Either.Right) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(v.value0);
                };
                throw new Error("Failed pattern match at Concur.Core.Patterns (line 23, column 25 - line 25, column 20): " + [ v.constructor.name ]);
            });
        };
    };
};
var local = function (dictAlt) {
    return function (dictMonadEffect) {
        return function (dictMonadAff) {
            return function (dictPlus) {
                return function (a) {
                    return function (f) {
                        var updateWire = function (wire) {
                            return function (a$prime) {
                                return {
                                    value: a$prime,
                                    receive: wire.receive,
                                    send: wire.send
                                };
                            };
                        };
                        var go = function (wire) {
                            return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Control_Alt.alt(dictAlt)(Data_Functor.map(dictAlt.Functor0())(Data_Either.Left.create)(f(wire)))(Data_Functor.map(dictAlt.Functor0())(Data_Either.Right.create)(wire.receive)))(function (res) {
                                return Data_Either.either(Control_Applicative.pure(((dictMonadAff.MonadEffect0()).Monad0()).Applicative0()))((function () {
                                    var $34 = updateWire(wire);
                                    return function ($35) {
                                        return go($34($35));
                                    };
                                })())(res);
                            });
                        };
                        return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadAff.MonadEffect0())(Effect_AVar.empty))(function ($$var) {
                            return go({
                                value: a,
                                send: function (a$prime) {
                                    return Control_Apply.applySecond((((dictMonadAff.MonadEffect0()).Monad0()).Bind1()).Apply0())(Effect_Aff_Class.liftAff(dictMonadAff)(Effect_Aff_AVar.put(a$prime)($$var)))(Control_Plus.empty(dictPlus));
                                },
                                receive: Effect_Aff_Class.liftAff(dictMonadAff)(Effect_Aff_AVar.take($$var))
                            });
                        });
                    };
                };
            };
        };
    };
};
var forkAction = function (dictMonadEffect) {
    return function (dictMonadAff) {
        return function (dictPlus) {
            return function (axn) {
                return function (rest) {
                    return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(remoteWidget(dictMonadAff.MonadEffect0())(dictMonadAff)(dictMonadAff.MonadEffect0())(dictPlus)(axn))(function (v) {
                        return Control_Alt.alt(dictPlus.Alt0())(v.value1)(rest(v.value0));
                    });
                };
            };
        };
    };
};
var forkActionState = function (dictPlus) {
    return function (dictMonadAff) {
        return function (axn) {
            return function (render) {
                return function (st) {
                    var go = function (st$prime) {
                        return function (axn$prime) {
                            return Control_Bind.bind(((dictMonadAff.MonadEffect0()).Monad0()).Bind1())(Control_Alt.alt(dictPlus.Alt0())(Data_Functor.map(((((dictMonadAff.MonadEffect0()).Monad0()).Bind1()).Apply0()).Functor0())(Data_Either.Left.create)(render(st$prime)))(Data_Functor.map(((((dictMonadAff.MonadEffect0()).Monad0()).Bind1()).Apply0()).Functor0())(Data_Either.Right.create)(axn$prime)))(function (e) {
                                if (e instanceof Data_Either.Left) {
                                    return go(e.value0)(axn$prime);
                                };
                                if (e instanceof Data_Either.Right) {
                                    return render(e.value0(st$prime));
                                };
                                throw new Error("Failed pattern match at Concur.Core.Patterns (line 93, column 5 - line 95, column 32): " + [ e.constructor.name ]);
                            });
                        };
                    };
                    return forkAction(dictMonadAff.MonadEffect0())(dictMonadAff)(dictPlus)(axn)(go(st));
                };
            };
        };
    };
};
module.exports = {
    loopState: loopState,
    retryUntil: retryUntil,
    retryUntilLoop: retryUntilLoop,
    tea: tea,
    remoteWidget: remoteWidget,
    forkAction: forkAction,
    forkActionState: forkActionState,
    mapWire: mapWire,
    local: local
};