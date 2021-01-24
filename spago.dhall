{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ sources = [ "src/**/*.purs", "test/**/*.purs" ]
, name = "purescript-concur-starter"
, dependencies =
  [ "concur-core", "concur-react", "console", "effect", "interpolate", "ordered-collections", "psci-support", "typelevel-prelude", "variant" ]
, packages = ./packages.dhall
, additions = {
    interpolate =
      { dependencies = [ "prelude" ]
      , repo = "https://github.com/jordanmartinez/purescript-interpolate.git"
      , version = "v2.0.1"
      }
  }
}
