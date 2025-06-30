import { Application, extend } from "@pixi/react";
import { Assets, Container, Sprite, Texture } from "pixi.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { mapPositions, mapTexturePaths, TILE_SIZE } from "../../utils";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Sprite,
});

const TileSprite = ({ tile }: { tile: TilesData }) => {
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

interface TilesData {
  cords: number[];
  assetPath: string;
}

const TilesComponent = () => {
  const containerRef = useRef<Container>(null);
  const [dragging, setDragging] = useState(false);
  const [dragData, setDragData] = useState<{
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const tilesData = useMemo(() => {
    const data: TilesData[] = [];
    for (let i = 0; i < mapPositions.length; i++) {
      const [x, y] = mapPositions[i];
      if (mapTexturePaths[i]) {
        data.push({ cords: [x, y], assetPath: mapTexturePaths[i] });
      }
    }
    return data;
  }, []);

  const onPointerDown = (event: any) => {
    setDragging(true);
    const pos = event.data.getLocalPosition(containerRef.current?.parent);
    const container = containerRef.current;
    if (container) {
      setDragData({
        offsetX: pos.x - container.x,
        offsetY: pos.y - container.y,
      });
    }
  };

  const onPointerUp = () => {
    setDragging(false);
    setDragData(null);
  };

  const onPointerMove = (event: any) => {
    if (dragging && dragData && containerRef.current) {
      const newPosition = event.data.getLocalPosition(
        containerRef.current.parent,
      );
      containerRef.current.x = newPosition.x - dragData.offsetX;
      containerRef.current.y = newPosition.y - dragData.offsetY;
    }
  };

  return (
    <pixiContainer
      ref={containerRef}
      interactive={true}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerUpOutside={onPointerUp}
      onPointerMove={onPointerMove}
    >
      {tilesData.map((tile, index) => (
        <TileSprite tile={tile} key={index} />
      ))}
    </pixiContainer>
  );
};

export const MapPage = () => {
  return (
    <Application background={"#1099bb"} resizeTo={window}>
      <TilesComponent />
    </Application>
  );
};
