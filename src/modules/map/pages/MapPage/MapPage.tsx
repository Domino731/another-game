import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { mapPositions, mapTexturePaths } from "../../utils";
import { TilesData } from "./types";
import { TileSprite } from "./TileSprite";

extend({
  Container,
  Sprite,
});

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

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const container = containerRef.current;
      if (container) {
        // Adjust zoom factor (scroll up => zoom in, down => zoom out)
        const scaleAmount = 1 + (event.deltaY > 0 ? -0.1 : 0.1);

        // Limit zoom level
        const newScaleX = container.scale.x * scaleAmount;
        const newScaleY = container.scale.y * scaleAmount;

        if (newScaleX > 0.5 && newScaleX < 4) {
          container.scale.set(newScaleX, newScaleY);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

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
