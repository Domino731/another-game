import {
  ArasakaShorelineLineCords,
  Arroro,
  CentreCords,
  CharterHill,
  CoastView,
  CorporatePlaza,
  Dogtown,
  DowntownCords,
  Glen,
  HeywoodDistrictCords,
  Japantown,
  KabukiLineCords,
  LittleChinaLineCords,
  Northoak,
  NorthsideCords,
  Pacifica,
  RanchoCoronado,
  SantoDomingo,
  VistalDelRay,
  WatsonDistrictLineCords,
  Wellsprings,
  Westbrook,
} from "../../../../config/map/districts-cords";
import { useCallback } from "react";
import { Graphics } from "pixi.js";
import { GAME_COLORS } from "../../../app/styles/colors";

interface CityDistrictProps {
  cords: number[];
}

export const CityDistrict = ({ cords }: CityDistrictProps) => {
  const drawPolygon = useCallback(
    (graphics: Graphics) => {
      graphics.clear();
      graphics.beginFill(0xff0000, 0); // red fill
      graphics.lineStyle(3, GAME_COLORS.yellow); // black border
      graphics.drawPolygon(cords);
      graphics.endFill();
    },
    [cords],
  );

  return <pixiGraphics draw={drawPolygon} />;
};

export const CityDistricts = () => {
  return (
    <>
      {/*WATSON*/}
      <CityDistrict cords={WatsonDistrictLineCords} />
      <CityDistrict cords={ArasakaShorelineLineCords} />
      <CityDistrict cords={LittleChinaLineCords} />
      <CityDistrict cords={KabukiLineCords} />
      <CityDistrict cords={NorthsideCords} />

      {/*CENTRE*/}
      <CityDistrict cords={CentreCords} />
      <CityDistrict cords={DowntownCords} />
      <CityDistrict cords={CorporatePlaza} />

      {/*HEYWOOD*/}
      <CityDistrict cords={HeywoodDistrictCords} />
      <CityDistrict cords={VistalDelRay} />
      <CityDistrict cords={Wellsprings} />
      <CityDistrict cords={Glen} />

      {/*SANTO DOMINGO*/}
      <CityDistrict cords={SantoDomingo} />
      <CityDistrict cords={Arroro} />
      <CityDistrict cords={RanchoCoronado} />

      {/*WESTBROOK*/}
      <CityDistrict cords={Westbrook} />
      <CityDistrict cords={Japantown} />
      <CityDistrict cords={Northoak} />
      <CityDistrict cords={CharterHill} />

      {/*PACIFICA*/}
      <CityDistrict cords={Pacifica} />
      <CityDistrict cords={CoastView} />
      <CityDistrict cords={Dogtown} />
    </>
  );
};
