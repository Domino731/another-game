import {
  DISTRICT_NAME,
  DistrictModel,
  SUBDISTRICT_NAME,
} from "../../Models/city";
import {
  ArasakaShorelineLineCords,
  Arroro,
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
} from "./districts-cords";

export const DISTRICTS: DistrictModel[] = [
  {
    id: DISTRICT_NAME.WATSON,
    name: "Watson",
    cords: WatsonDistrictLineCords,
    subdistricts: [
      {
        id: SUBDISTRICT_NAME.ARASAKA_SHORELINE,
        name: "Arasaka Shoreline",
        cords: ArasakaShorelineLineCords,
      },
      {
        id: SUBDISTRICT_NAME.LITTLE_CHINA,
        name: "Little China",
        cords: LittleChinaLineCords,
      },
      {
        id: SUBDISTRICT_NAME.KABUKI,
        name: "Kabuki",
        cords: KabukiLineCords,
      },
      {
        id: SUBDISTRICT_NAME.NORTHSIDE,
        name: "Northside",
        cords: NorthsideCords,
      },
    ],
  },

  {
    id: DISTRICT_NAME.CENTRE,
    name: "Watson",
    cords: WatsonDistrictLineCords,
    subdistricts: [
      {
        id: SUBDISTRICT_NAME.DOWNTOWN,
        name: "Downtown",
        cords: DowntownCords,
      },
      {
        id: SUBDISTRICT_NAME.CORPORATE_PLAZA,
        name: "Corporate Plaza",
        cords: CorporatePlaza,
      },
    ],
  },

  {
    id: DISTRICT_NAME.HEYWOOD,
    name: "Heywood",
    cords: HeywoodDistrictCords,
    subdistricts: [
      {
        id: SUBDISTRICT_NAME.VISTA_DEL_REY,
        name: "Vista Del Rey",
        cords: VistalDelRay,
      },
      {
        id: SUBDISTRICT_NAME.WELL_SPRINGS,
        name: "Well Springs",
        cords: Wellsprings,
      },
      {
        id: SUBDISTRICT_NAME.GLEN,
        name: "Glen",
        cords: Glen,
      },
    ],
  },

  {
    id: DISTRICT_NAME.SANTO_DOMINGO,
    name: "Santo Domingo",
    cords: SantoDomingo,
    subdistricts: [
      {
        id: SUBDISTRICT_NAME.ARROYO,
        name: "Arroyo",
        cords: Arroro,
      },
      {
        id: SUBDISTRICT_NAME.RANCHO_CORONADO,
        name: "Rancho Coronado",
        cords: RanchoCoronado,
      },
    ],
  },

  {
    id: DISTRICT_NAME.WESTBROOK,
    name: "Westbrook",
    cords: Westbrook,
    subdistricts: [
      {
        id: SUBDISTRICT_NAME.JAPANATOWN,
        name: "Japantown",
        cords: Japantown,
      },
      {
        id: SUBDISTRICT_NAME.NORTHOAK,
        name: "Northoak",
        cords: Northoak,
      },
      {
        id: SUBDISTRICT_NAME.CHARTERHILL,
        name: "Charter Hill",
        cords: CharterHill,
      },
    ],
  },

  {
    id: DISTRICT_NAME.PACIFICA,
    name: "Pacifica",
    cords: Pacifica,
    subdistricts: [
      {
        id: SUBDISTRICT_NAME.COAST_VIEW,
        name: "Coast View",
        cords: CoastView,
      },
      {
        id: SUBDISTRICT_NAME.DOGTOWN,
        name: "Dogtown",
        cords: Dogtown,
      },
    ],
  },
];
