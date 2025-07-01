import { useCallback } from "react";
import { Graphics } from "pixi.js";
import { GAME_COLORS } from "../../../app/styles/colors";
import { DistrictModel } from "../../../../Models/city";
import { DISTRICTS } from "../../../../config/map/districts";

interface CityDistrictProps {
  cords: number[];
  isSubDistrict: boolean;
}

export const CityDistrictGraphics = ({
  cords,
  isSubDistrict,
}: CityDistrictProps) => {
  const drawPolygon = useCallback(
    (graphics: Graphics) => {
      graphics.clear();
      graphics.beginFill(0xff0000, 0);
      graphics.lineStyle(isSubDistrict ? 1 : 3, GAME_COLORS.yellow);
      graphics.drawPolygon(cords);
      graphics.endFill();
    },
    [cords],
  );

  return <pixiGraphics draw={drawPolygon} />;
};

const CityDistrict = ({ district }: { district: DistrictModel }) => {
  return (
    <pixiContainer>
      <CityDistrictGraphics cords={district.cords} isSubDistrict={false} />
      {district.subdistricts.map((el) => (
        <CityDistrictGraphics cords={el.cords} key={el.id} isSubDistrict />
      ))}
    </pixiContainer>
  );
};

export const CityDistricts = () => {
  return (
    <>
      {DISTRICTS.map((district) => (
        <CityDistrict district={district} key={district.id} />
      ))}
    </>
  );
};
