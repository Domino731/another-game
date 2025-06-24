import {Perk, PerkType} from "../../modules/characters/pages/CharacterPerks/utils";
import {PerkConnectionModel, Perks} from "../../Models/perks";
import {
    BODY_TIERS
} from "../../modules/characters/pages/CharacterPerks/PerksLayer/lockedSeparator/LockedSeparator.utils";
import tileStyles from './technical-ability-perks.module.scss';

export const technicalAbilityPerksData: Perk[] = [
    {
        id: Perks.FIRST_AID,
        tileClassName: tileStyles.FirstAid,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.GLUTTON_FOR_WAR],
        levels: 1,
        connections: [1]
    },
    {
        id: Perks.TRANSFUSION,
        tileClassName: tileStyles.Transfusion,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.GLUTTON_FOR_WAR],
        levels: 1,
        connections: [2]
    },
    {
        id: Perks.GLUTTON_FOR_WAR,
        tileClassName: tileStyles.GluttonForWar,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.GEARHEAD,
        tileClassName: tileStyles.Gearhead,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.BORROWED_TIME,
        tileClassName: tileStyles.BorrowedTime,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [3]
    },
    {
        id: Perks.DEMOLITIONS_SURPLUS,
        tileClassName: tileStyles.DemolitionsSurplus,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [5]
    },
    {
        id: Perks.COMMING_HOT,
        tileClassName: tileStyles.CommingHot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [9]
    },
    {
        id: Perks.FIELD_MEDIC,
        tileClassName: tileStyles.FieldMedic,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [10]
    },
    {
        id: Perks.HEALTH_FREAK,
        tileClassName: tileStyles.HealthFreak,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.GLUTTON_FOR_WAR],
        levels: 2,
        connections: [3]
    },
    {
        id: Perks.RENEISSANCE_PUNK,
        tileClassName: tileStyles.ReneissancePunk,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [6]
    },
    {
        id: Perks.DRIVER_UPDATE,
        tileClassName: tileStyles.DriverUpdate,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [7]
    },
    {
        id: Perks.CHROME_CONSTITUTION,
        tileClassName: tileStyles.ChromeConstitution,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [11]
    },
    {
        id: Perks.LUCKY_DAY,
        tileClassName: tileStyles.LuckyDay,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [12]
    },
    {
        id: Perks.ALL_THINGS_CYBER,
        tileClassName: tileStyles.AllThingsCyber,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: []
    },
    {
        id: Perks.CHIPWARE_CONNOISSEUR,
        tileClassName: tileStyles.ChipwareConnoisseur,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DRIVER_UPDATE],
        levels: 1,
        connections: [8]
    },

    {
        id: Perks.BURN_THIS_CITY,
        tileClassName: tileStyles.BurnThisCity,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [15]
    },
    {
        id: Perks.FRIENDLIER_FIRE,
        tileClassName: tileStyles.FriendlierFire,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [16]
    },
    {
        id: Perks.HEAT_SHIELD,
        tileClassName: tileStyles.HeatShield,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [23]
    },
    {
        id: Perks.FLASH_SALE,
        tileClassName: tileStyles.FlashSale,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [24]
    },
    {
        id: Perks.PYROMANIA,
        tileClassName: tileStyles.Pyromania,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 3,
        connections: [13]
    },
    {
        id: Perks.DOOM_LAUNCHER,
        tileClassName: tileStyles.DoomLauncher,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FRIENDLIER_FIRE, Perks.AMIDEXETROUS],
        levels: 1,
        connections: [17, 18]
    },
    {
        id: Perks.AMIDEXETROUS,
        tileClassName: tileStyles.Amidexetrous,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [19]
    },
    {
        id: Perks.EXTENDED_WARRANY,
        tileClassName: tileStyles.ExtendedWarranty,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [20]
    },
    {
        id: Perks.CYBORG,
        tileClassName: tileStyles.Cyborg,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [25]
    },
    {
        id: Perks.BUILT_DIFFERENT,
        tileClassName: tileStyles.BuiltDifferent,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [26]
    },
    {
        id: Perks.LICENSE_TO_CHROME,
        tileClassName: tileStyles.LicenseToChrome,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 3,
        connections: [14]
    },
    {
        id: Perks.INTERNAL_CLICK,
        tileClassName: tileStyles.InternalClick,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [21]
    },
    {
        id: Perks.IN_CHARGE,
        tileClassName: tileStyles.InCharge,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [22]
    },
    {
        id: Perks.LIGHTNING_STORM,
        tileClassName: tileStyles.LightningStorm,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [27]
    },
    {
        id: Perks.SHOCK_VALUE,
        tileClassName: tileStyles.ShockValue,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [28]
    },
    {
        id: Perks.BOLT,
        tileClassName: tileStyles.Bolt,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: []
    },
    {
        id: Perks.TICKING_TIME_BOMB,
        tileClassName: tileStyles.TickingTimeBomb,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.PYROMANIA, Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [29, 30]
    },
    {
        id: Perks.EDGERUNNER,
        tileClassName: tileStyles.Edgerunner,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [31]
    },
    {
        id: Perks.CHAIN_LIGHTNING,
        tileClassName: tileStyles.ChainLightning,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [31]
    },
];

export const technicalAbilityConnections: PerkConnectionModel[] = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},

    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20},
    {id: 21},
    {id: 22},
    {id: 23},

    {id: 24},
    {id: 25},
    {id: 26},
    {id: 27},
    {id: 28},
    {id: 29},
    {id: 30},
    {id: 31},
    {id: 32},
];