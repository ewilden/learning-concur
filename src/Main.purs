module Main where

import Control.Monad.Gen
import Data.FoldableWithIndex
import Data.Interpolate
import Data.Map
import Data.Maybe
import Data.Newtype
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
import Data.Enum (class BoundedEnum, Cardinality(..), cardinality, toEnum)
import Data.Map as M
import Data.Symbol (class IsSymbol)
import Effect (Effect)
import Type.Row (class Union, type (+))
import Unsafe.Coerce (unsafeCoerce)
import Types

chooseBoundedEnum :: forall m a. BoundedEnum a => MonadGen m => m a
chooseBoundedEnum = case (cardinality :: Cardinality a) of
  Cardinality n -> do
    x <- chooseInt 0 (n - 1)
    case toEnum x of
      Just a -> pure a
      Nothing -> chooseBoundedEnum

genTile :: forall m. MonadGen m => m Tile
genTile = do
  u <- chooseBoundedEnum
  r <- chooseBoundedEnum
  d <- chooseBoundedEnum
  l <- chooseBoundedEnum
  m <- chooseBoundedEnum
  pure $ Tile { sides: [ u, r, d, l ], middle: m }

type BoardSpot
  = { x :: Int, y :: Int }

type Board
  = Map BoardSpot Tile

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
startingTile =
  Tile
    { sides: [ inju _city, inju _road, inju _field, inju _road ]
    , middle: inju _field
    }

startingState :: GameState
startingState =
  { board: fromFoldable [ Tuple { x: 0, y: 0 } startingTile ]
  }

renderTile :: forall r. { tileMay :: Maybe Tile | r } -> forall a. Widget HTML a
renderTile { tileMay } =
  D.div [ P.className "tile" ]
    $ case tileMay of
        Nothing -> [ D.div [ P.style { gridArea: "center" } ] [ D.text "Nothing" ] ]
        Just tile ->
          let
            renderSide terrain area = D.div [ P.style { gridArea: area } ] [ D.div [] $ pure $ D.text $ showTerrain (expand terrain) ]
          in
            zipWith renderSide (unwrap tile).sides [ "u", "r", "d", "l" ]

renderBoard :: GameState -> forall a. Widget HTML a
renderBoard gs =
  let
    { left, right, up, down } = computeBounds gs.board

    xStart = left - 1

    xEnd = right + 1

    yStart = down - 1

    yEnd = up + 1

    mkSpot x y = { x, y }

    spotsToRender :: Array BoardSpot
    spotsToRender = mkSpot <$> (xStart .. xEnd) <*> (yStart .. yEnd)

    renderSpot :: BoardSpot -> forall a. Widget HTML a
    renderSpot spot@{ x, y } =
      D.div
        [ P.style
            { gridArea: i (yEnd - y + 1) "/" (x - xStart + 1) "/" (yEnd - y + 2) "/" (x - xStart + 2) :: String
            }
        , P.className "spot"
        ]
        [ renderTile { spot, tileMay: M.lookup spot gs.board } ]
  in
    D.div
      [ P.className "board"
      , P.style
          { gridTemplateColumns: i "repeat(" (xEnd - xStart + 1) ", " tileSize ")" :: String
          , gridTemplateRows: i "repeat(" (yEnd - yStart + 1) ", " tileSize ")" :: String
          }
      ]
      $ spotsToRender
      <#> renderSpot

hello :: forall a. Widget HTML a
hello = do
  D.div [] [ void $ D.button [ P.onClick ] [ D.text "Say Hello" ], D.text "Step 1" ]
  D.div [] [ D.text "Hello Sailor!", D.text "Step 2", void $ D.button [ P.onClick ] [ D.text "Restart" ] ]
  hello

main :: Effect Unit
main = runWidgetInDom "root" (orr [ hello, renderBoard startingState ])
