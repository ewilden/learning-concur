module Main where

import Data.FoldableWithIndex
import Data.Interpolate
import Data.Map
import Data.Maybe
import Data.Tuple
import Data.Variant
import Prelude
import Prim.Row

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.MultiAlternative (orr)
import Data.Array ((..), zipWith)
import Data.Map as M
import Data.Symbol (class IsSymbol)
import Effect (Effect)
import Type.Row (class Union, type (+))
import Unsafe.Coerce (unsafeCoerce)

_road = SProxy :: SProxy "road"
_city = SProxy :: SProxy "city"
_field = SProxy :: SProxy "field"
_monastery = SProxy :: SProxy "monastery"

inju :: forall a b c. Cons c Unit b a => IsSymbol c => SProxy c -> Variant a
inju x = inj x unit

type CommonTerrainTypes a r = (city :: a, field :: a | r)

type SideTerrainTypes a r = (road :: a | r)
type MiddleTerrainTypes a r = (monastery :: a | r)
type AllTerrainTypes a r = (MiddleTerrainTypes a + SideTerrainTypes a + CommonTerrainTypes a + r)

type SideTerrain = Variant (SideTerrainTypes Unit + CommonTerrainTypes Unit + ())
type MiddleTerrain = Variant (MiddleTerrainTypes Unit + CommonTerrainTypes Unit + ())
type AnyTerrain = Variant (AllTerrainTypes Unit ())

showTerrain :: AnyTerrain -> String
showTerrain = match
  { road: const "road", city: const "city", field: const "field", monastery: const "monastery"}

newtype Tile = Tile TileInternal
type TileInternal = {
    sides :: Array SideTerrain,
    middle :: MiddleTerrain
  }

unTile :: Tile -> TileInternal
unTile (Tile t) = t

instance showTile :: Show Tile where
  show _ = "Tile"

type BoardSpot
  = { x :: Int, y :: Int }

type Board
  = Map (BoardSpot) Tile

type GameState
  = { board :: Board
    }

tileSize :: String
tileSize = "160px"

computeBounds :: Board -> { left :: Int, right :: Int, up :: Int, down :: Int }
computeBounds b =
  foldlWithIndex
    ( \{ x, y } prevBounds _ ->
        { left: min prevBounds.left x
        , right: max prevBounds.right x
        , up: max prevBounds.up y
        , down: min prevBounds.down y
        }
    )
    { left: 0, right: 0, up: 0, down: 0 }
    b

startingTile :: Tile
startingTile = Tile {
              sides: [inju _city, inju _road, inju _field, inju _city], 
              middle: inju _field
              }


startingState :: GameState
startingState =
  { board: fromFoldable [ Tuple { x: 0, y: 0 } startingTile ]
  }

renderTile :: {tileMay :: Maybe Tile, spot :: {x :: Int, y :: Int}} -> forall a. Widget HTML a
renderTile {tileMay, spot: {x, y}} = 
  D.div [P.className "tile"] $ case tileMay of
    Nothing -> [D.div [P.style {gridArea: "center"}] [D.text "Nothing"]]
    Just tile -> 
      let renderSide terrain area = D.div [P.style {gridArea: area}] [D.text $ showTerrain (expand terrain)]
      in  zipWith renderSide (unTile tile).sides ["u", "r", "d", "l"]

renderBoard :: GameState -> forall a. Widget HTML a
renderBoard gs =
  let {left, right, up, down} = computeBounds gs.board
      xStart = left - 1
      xEnd = right + 1
      yStart = down - 1
      yEnd = up + 1
      mkSpot x y = {x, y}
      spotsToRender :: Array BoardSpot
      spotsToRender = mkSpot <$> (xStart .. xEnd) <*> (yStart .. yEnd)
      renderSpot :: BoardSpot -> forall a. Widget HTML a
      renderSpot spot@{x,y} = D.div [P.style { 
        gridArea: i (yEnd - y + 1) "/" (x - xStart + 1) "/" (yEnd - y + 2) "/" (x - xStart + 2) :: String
      }, P.className "spot"] [renderTile {spot, tileMay: M.lookup spot gs.board}]
  in D.div [ P.className "board" , P.style {
              gridTemplateColumns: i "repeat(" (xEnd - xStart + 1) ", " tileSize ")" :: String,
              gridTemplateRows: i "repeat(" (yEnd - yStart + 1) ", " tileSize ")" :: String}]
        $  spotsToRender <#> renderSpot

hello :: forall a. Widget HTML a
hello = do
  D.div [] [ void $ D.button [ P.onClick ] [ D.text "Say Hello" ], D.text "Step 1" ]
  D.div [] [ D.text "Hello Sailor!", D.text "Step 2", void $ D.button [ P.onClick ] [ D.text "Restart" ] ]
  hello

main :: Effect Unit
main = runWidgetInDom "root" (orr [ hello, renderBoard startingState ])
