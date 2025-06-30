import { useEffect, useRef, useState } from "react";
import { Assets, Sprite, Texture } from "pixi.js";
import { TILE_SIZE } from "../../utils";
import { TilesData } from "./types";

export const TileSprite = ({ tile }: { tile: TilesData }) => {
  const spriteRef = useRef<Sprite>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load(tile.assetPath).then((result) => {
        setTexture(result);
      });
    }
  }, [texture, tile.assetPath]);

  return (
    <pixiSprite
      ref={spriteRef}
      texture={texture}
      x={tile.cords[0]}
      y={tile.cords[1]}
      width={TILE_SIZE}
      height={TILE_SIZE}
    />
  );
};
