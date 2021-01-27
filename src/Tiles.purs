module Tiles where

import Data.Newtype
import Data.String
import Data.Tuple
import Data.Variant
import Prelude
import Prim.Row
import Types
import Data.String.CodeUnits (toCharArray)
import Data.Symbol (class IsSymbol)
import Type.Row (class Union, type (+))

type TileSpec
  = { imageName :: String
    , sides :: Array SideTerrain
    , middle :: Array MiddleTerrain
    , frequency :: Int
    }

ts :: String -> Array SideTerrain -> MiddleTerrain -> Int -> TileSpec
ts imageName sides middle frequency = { imageName, sides, middle, frequency }

t :: forall a b. a -> b -> Tuple a b
t a b = Tuple a b

tileSpecs :: Array TileSpec
tileSpecs =
  [ ts "CCCCS" [ inju _city, inju _city, inju _city, inju _city ] [ inju _cityCrest, inju _city ] 1
  , ts "FFFFL" [ inju _field, inju _field, inju _field, inju _field ] [ inju _monastery ] 4
  , ts "FFRFL" [ inju _field, inju _field, inju _road, inju _field ] [ inju _monastery ] 2
  , ts "CCFC" [ inju _city, inju _city, inju _field, inju _city ] [ inju _city ] 3
  , ts "CCFCS" [ inju _city, inju _city, inju _field, inju _city ] [ inju _cityCrest, inju _city ] 1
  , ts "CCRC" [ inju _city, inju _city, inju _road, inju _city ] [ inju _city ] 1
  , ts "CCRCS" [ inju _city, inju _city, inju _road, inju _city ] [ inju _cityCrest, inju _city ] 2
  , ts "CFFC" [ inju _city, inju _field, inju _field, inju _city ] [ inju _city ] 3
  , ts "CFFCS" [ inju _city, inju _field, inju _field, inju _city ] [ inju _cityCrest, inju _city ] 2
  , ts "CRRC" [ inju _city, inju _road, inju _road, inju _city ] [ inju _city, inju _road ] 3
  , ts "CRRCS" [ inju _city, inju _road, inju _road, inju _city ] [ inju _city, inju _road, inju _cityCrest ] 2
  , ts "FCFC" [ inju _field, inju _city, inju _field, inju _city ] [ inju _city ] 1
  , ts "FCFCS" [ inju _field, inju _city, inju _field, inju _city ] [ inju _city, inju _cityCrest ] 2
  , ts "CFCF" [ inju _city, inju _field, inju _city, inju _field ] [] 3
  , ts "CCFF" [ inju _city, inju _city, inju _field, inju _field ] [] 2
  , ts "CFFF" [ inju _city, inju _field, inju _field, inju _field ] [] 5
  , ts "CRRR" [ inju _city, inju _road, inju _road, inju _road ] [] 3
  , ts "CRRF" [ inju _city, inju _road, inju _road, inju _field ] [ inju _road ] 3
  , ts "CFRR" [ inju _city, inju _field, inju _road, inju _road ] [ inju _road ] 3
  , ts "CRFR" [ inju _city, inju _road, inju _field, inju _road ] [ inju _road ] 4
  , ts "RRRR" [ inju _road, inju _road, inju _road, inju _road ] [] 1
  , ts "FRRR" [ inju _field, inju _road, inju _road, inju _road ] [] 4
  , ts "RFRF" [ inju _road, inju _field, inju _road, inju _field ] [ inju _road ] 8
  , ts "FFRR" [ inju _field, inju _field, inju _road, inju _road ] [ inju _road ] 9
  ]

fromTileSpec :: TileSpec -> Array Tile
fromTileSpec { imageName, sides, middle, frequency } = []
