// Generated by purs version 0.13.8
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Distributive = require("../Data.Distributive/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Data_Profunctor_Closed = require("../Data.Profunctor.Closed/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Star = function (x) {
    return x;
};
var semigroupoidStar = function (dictBind) {
    return new Control_Semigroupoid.Semigroupoid(function (v) {
        return function (v1) {
            return function (x) {
                return Control_Bind.bind(dictBind)(v1(x))(v);
            };
        };
    });
};
var profunctorStar = function (dictFunctor) {
    return new Data_Profunctor.Profunctor(function (f) {
        return function (g) {
            return function (v) {
                var $78 = Data_Functor.map(dictFunctor)(g);
                return function ($79) {
                    return $78(v(f($79)));
                };
            };
        };
    });
};
var strongStar = function (dictFunctor) {
    return new Data_Profunctor_Strong.Strong(function () {
        return profunctorStar(dictFunctor);
    }, function (v) {
        return function (v1) {
            return Data_Functor.map(dictFunctor)(function (v2) {
                return new Data_Tuple.Tuple(v2, v1.value1);
            })(v(v1.value0));
        };
    }, function (v) {
        return function (v1) {
            return Data_Functor.map(dictFunctor)(Data_Tuple.Tuple.create(v1.value0))(v(v1.value1));
        };
    });
};
var newtypeStar = new Data_Newtype.Newtype(function (n) {
    return n;
}, Star);
var invariantStar = function (dictInvariant) {
    return new Data_Functor_Invariant.Invariant(function (f) {
        return function (g) {
            return function (v) {
                var $80 = Data_Functor_Invariant.imap(dictInvariant)(f)(g);
                return function ($81) {
                    return $80(v($81));
                };
            };
        };
    });
};
var hoistStar = function (f) {
    return function (v) {
        return function ($82) {
            return f(v($82));
        };
    };
};
var functorStar = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            var $83 = Data_Functor.map(dictFunctor)(f);
            return function ($84) {
                return $83(v($84));
            };
        };
    });
};
var distributiveStar = function (dictDistributive) {
    return new Data_Distributive.Distributive(function () {
        return functorStar(dictDistributive.Functor0());
    }, function (dictFunctor) {
        return function (f) {
            var $85 = Data_Distributive.distribute(distributiveStar(dictDistributive))(dictFunctor);
            var $86 = Data_Functor.map(dictFunctor)(f);
            return function ($87) {
                return $85($86($87));
            };
        };
    }, function (dictFunctor) {
        return function (f) {
            return function (a) {
                return Data_Distributive.collect(dictDistributive)(dictFunctor)(function (v) {
                    return v(a);
                })(f);
            };
        };
    });
};
var closedStar = function (dictDistributive) {
    return new Data_Profunctor_Closed.Closed(function () {
        return profunctorStar(dictDistributive.Functor0());
    }, function (v) {
        return function (g) {
            return Data_Distributive.distribute(dictDistributive)(Data_Functor.functorFn)(function ($88) {
                return v(g($88));
            });
        };
    });
};
var choiceStar = function (dictApplicative) {
    return new Data_Profunctor_Choice.Choice(function () {
        return profunctorStar((dictApplicative.Apply0()).Functor0());
    }, function (v) {
        return Star(Data_Either.either((function () {
            var $89 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Either.Left.create);
            return function ($90) {
                return $89(v($90));
            };
        })())((function () {
            var $91 = Control_Applicative.pure(dictApplicative);
            return function ($92) {
                return $91(Data_Either.Right.create($92));
            };
        })()));
    }, function (v) {
        return Star(Data_Either.either((function () {
            var $93 = Control_Applicative.pure(dictApplicative);
            return function ($94) {
                return $93(Data_Either.Left.create($94));
            };
        })())((function () {
            var $95 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Either.Right.create);
            return function ($96) {
                return $95(v($96));
            };
        })()));
    });
};
var categoryStar = function (dictMonad) {
    return new Control_Category.Category(function () {
        return semigroupoidStar(dictMonad.Bind1());
    }, Control_Applicative.pure(dictMonad.Applicative0()));
};
var applyStar = function (dictApply) {
    return new Control_Apply.Apply(function () {
        return functorStar(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return function (a) {
                return Control_Apply.apply(dictApply)(v(a))(v1(a));
            };
        };
    });
};
var bindStar = function (dictBind) {
    return new Control_Bind.Bind(function () {
        return applyStar(dictBind.Apply0());
    }, function (v) {
        return function (f) {
            return function (x) {
                return Control_Bind.bind(dictBind)(v(x))(function (a) {
                    var v1 = f(a);
                    return v1(x);
                });
            };
        };
    });
};
var applicativeStar = function (dictApplicative) {
    return new Control_Applicative.Applicative(function () {
        return applyStar(dictApplicative.Apply0());
    }, function (a) {
        return function (v) {
            return Control_Applicative.pure(dictApplicative)(a);
        };
    });
};
var monadStar = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeStar(dictMonad.Applicative0());
    }, function () {
        return bindStar(dictMonad.Bind1());
    });
};
var altStar = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorStar(dictAlt.Functor0());
    }, function (v) {
        return function (v1) {
            return function (a) {
                return Control_Alt.alt(dictAlt)(v(a))(v1(a));
            };
        };
    });
};
var plusStar = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altStar(dictPlus.Alt0());
    }, function (v) {
        return Control_Plus.empty(dictPlus);
    });
};
var alternativeStar = function (dictAlternative) {
    return new Control_Alternative.Alternative(function () {
        return applicativeStar(dictAlternative.Applicative0());
    }, function () {
        return plusStar(dictAlternative.Plus1());
    });
};
var monadZeroStar = function (dictMonadZero) {
    return new Control_MonadZero.MonadZero(function () {
        return alternativeStar(dictMonadZero.Alternative1());
    }, function () {
        return monadStar(dictMonadZero.Monad0());
    });
};
var monadPlusStar = function (dictMonadPlus) {
    return new Control_MonadPlus.MonadPlus(function () {
        return monadZeroStar(dictMonadPlus.MonadZero0());
    });
};
module.exports = {
    Star: Star,
    hoistStar: hoistStar,
    newtypeStar: newtypeStar,
    semigroupoidStar: semigroupoidStar,
    categoryStar: categoryStar,
    functorStar: functorStar,
    invariantStar: invariantStar,
    applyStar: applyStar,
    applicativeStar: applicativeStar,
    bindStar: bindStar,
    monadStar: monadStar,
    altStar: altStar,
    plusStar: plusStar,
    alternativeStar: alternativeStar,
    monadZeroStar: monadZeroStar,
    monadPlusStar: monadPlusStar,
    distributiveStar: distributiveStar,
    profunctorStar: profunctorStar,
    strongStar: strongStar,
    choiceStar: choiceStar,
    closedStar: closedStar
};