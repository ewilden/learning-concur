
module Types where

import Data.Variant
import Prelude
import Prim.Row
import Data.Symbol (class IsSymbol)
import Type.Row (class Union, type (+))
import Data.Newtype

_road = SProxy :: SProxy "road"
_city = SProxy :: SProxy "city"
_cityCrest = SProxy :: SProxy "cityCrest"
_field = SProxy :: SProxy "field"
_monastery = SProxy :: SProxy "monastery"

inju :: forall a b c. Cons c Unit b a => IsSymbol c => SProxy c -> Variant a
inju x = inj x unit

type CommonTerrainTypes a r = (city :: a, field :: a | r)

type SideTerrainTypes a r = (road :: a | r)
type MiddleTerrainTypes a r = (monastery :: a, cityCrest :: a | r)
type AllTerrainTypes a r = (MiddleTerrainTypes a + SideTerrainTypes a + CommonTerrainTypes a + r)

type SideTerrain = Variant (SideTerrainTypes Unit + CommonTerrainTypes Unit + ())
type MiddleTerrain = Variant (MiddleTerrainTypes Unit + CommonTerrainTypes Unit + ())
type AnyTerrain = Variant (AllTerrainTypes Unit ())

showTerrain :: AnyTerrain -> String
showTerrain = match
  { road: const "road", 
    city: const "city", 
    cityCrest: const "city crest",
    field: const "field", 
    monastery: const "monastery"}


type TileImageSpec = {
  url :: String,
  numCcwRotates :: Int
}

newtype Tile = Tile TileInternal
type TileInternal = {
    sides :: Array SideTerrain,
    middle :: MiddleTerrain,
    image :: TileImageSpec
  }
derive instance newtypeTile :: Newtype Tile _

instance showTile :: Show Tile where
  show _ = "Tile"
