const getMapTexturePaths = (): string[] => {
  const paths = [];
  const numRows = 30;
  const numCols = 30;
  for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
      paths.push(`/assets/map-tiles/${row}/${col}.png`);
    }
  }
  return paths;
};

const tilesWidth = 30;
const tilesHeight = 30;

export const TILE_SIZE = 256;
const getPositions = () => {
  const positions = [];
  for (let row = 0; row < tilesHeight; row++) {
    for (let col = 0; col < tilesWidth; col++) {
      const x = col * TILE_SIZE - col;
      const y = row * TILE_SIZE - row;
      positions.push([x, y, row + 1]);
    }
  }
  return positions;
};

export const mapTexturePaths: string[] = getMapTexturePaths();
export const mapPositions = getPositions();
