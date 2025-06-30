import { Application, extend, useApplication } from "@pixi/react";
import { Assets, Container, Sprite, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { mapTexturePaths } from "../../utils";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Sprite,
});

const BunnySprite = () => {
  const { app } = useApplication();

  // The Pixi.js `Sprite`
  const spriteRef = useRef<Sprite>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);

  // Preload the sprite if it hasn't been loaded yet
  useEffect(() => {
    if (texture === Texture.EMPTY) {
      const textures = mapTexturePaths;
      console.log(textures[0]);
      Assets.load(textures[0]).then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  return (
    <pixiSprite
      ref={spriteRef}
      texture={texture}
      anchor={0.5}
      x={app.screen.width / 2}
      y={app.screen.height / 2}
    />
  );
};

export const MapPage = () => {
  return (
    // We'll wrap our components with an <Application> component to provide
    // the Pixi.js Application context
    <Application background={"#1099bb"} resizeTo={window}>
      <BunnySprite />
    </Application>
  );
};
