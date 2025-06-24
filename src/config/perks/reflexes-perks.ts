import {Perk, PerkType} from "../../modules/characters/pages/CharacterPerks/utils";
import {PerkConnectionModel, Perks} from "../../Models/perks";
import {
    BODY_TIERS
} from "../../modules/characters/pages/CharacterPerks/PerksLayer/lockedSeparator/LockedSeparator.utils";
import tileStyles from './reflex-perks.module.scss';

export const reflexesPerksData: Perk[] = [
    {
        id: Perks.STUNTJOCK,
        tileClassName: tileStyles.Stuntjock,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.MULTITASKER,
        tileClassName: tileStyles.Multitasker,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.SLIPPERY],
        levels: 1,
        connections: [1]
    },
    {
        id: Perks.PARKOUR,
        tileClassName: tileStyles.Parkour,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.SLIPPERY],
        levels: 1,
        connections: [2]
    },
    {
        id: Perks.MUSCLEMEMORY,
        tileClassName: tileStyles.Musclememory,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.SLIPPERY],
        levels: 1,
        connections: [3]
    },
    {
        id: Perks.POWER_SLIDE,
        tileClassName: tileStyles.PowerSlide,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.SLIPPERY],
        levels: 1,
        connections: [4]
    },
    {
        id: Perks.SLIPPERY,
        tileClassName: tileStyles.Slippery,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },

    {
        id: Perks.SPICE_OF_LIFE,
        tileClassName: tileStyles.SpiceOfLife,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.READY_RESTED_RELOADED],
        levels: 1,
        connections: [5]
    },
    {
        id: Perks.TUNNEL_VISION,
        tileClassName: tileStyles.TunnelVision,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.READY_RESTED_RELOADED],
        levels: 1,
        connections: [15]
    },
    {
        id: Perks.MIND_OVER_MATTER,
        tileClassName: tileStyles.MindOverMatter,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.READY_RESTED_RELOADED],
        levels: 1,
        connections: [16]
    },
    {
        id: Perks.READY_RESTED_RELOADED,
        tileClassName: tileStyles.ReadyRestedReloaded,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 1,
        connections: []
    },

    {
        id: Perks.CANT_TOUCH_THIS,
        tileClassName: tileStyles.CantTouchThis,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DASH],
        levels: 1,
        connections: [8]
    },
    {
        id: Perks.MAD_DASH,
        tileClassName: tileStyles.MadDash,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DASH],
        levels: 1,
        connections: [9]
    },
    {
        id: Perks.STEADY_GRIP,
        tileClassName: tileStyles.SteadyGrip,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DASH],
        levels: 1,
        connections: [17]
    },
    {
        id: Perks.MEAN_STREAK,
        tileClassName: tileStyles.MeanStreak,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DASH],
        levels: 1,
        connections: [18]
    },
    {
        id: Perks.DASH,
        tileClassName: tileStyles.Dash,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SLIPPERY],
        levels: 2,
        connections: [5]
    },
    {
        id: Perks.FLASH_AND_THUNDERCLAP,
        tileClassName: tileStyles.FlashAndThunderclap,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.MAD_DASH, Perks.SEEING_DOUBLE],
        levels: 1,
        connections: [11, 12]
    },
    {
        id: Perks.SEEING_DOUBLE,
        tileClassName: tileStyles.SeeingDouble,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.LEAD_AND_STEEL],
        levels: 1,
        connections: [13]
    },
    {
        id: Perks.BULLET_DEFLECT,
        tileClassName: tileStyles.BulletDeflect,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.LEAD_AND_STEEL],
        levels: 1,
        connections: [14]
    },

    {
        id: Perks.BULLET_TIME,
        tileClassName: tileStyles.BulletTime,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.BULLET_DEFLECT],
        levels: 1,
        // TODO missing connection
        connections: []
    },

    {
        id: Perks.LEAD_AND_STEEL,
        tileClassName: tileStyles.LeadAndSteel,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SLIPPERY],
        levels: 2,
        connections: [6]
    },

    {
        id: Perks.SPRAY_AND_PRAY,
        tileClassName: tileStyles.SprayAndPray,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SHARPSHOOTER],
        levels: 1,
        connections: [22]
    },
    {
        id: Perks.GUN_DANCER,
        tileClassName: tileStyles.GunDancer,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SHARPSHOOTER],
        levels: 1,
        connections: [23]
    },
    {
        id: Perks.SHOOT_TO_CHILL,
        tileClassName: tileStyles.ShootToChill,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SHARPSHOOTER],
        levels: 1,
        connections: [28]
    },
    {
        id: Perks.PRACTICE_MAKES_PERFECT,
        tileClassName: tileStyles.PracticeMakesPerfect,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SHARPSHOOTER],
        levels: 1,
        connections: [29]
    },
    {
        id: Perks.SHARPSHOOTER,
        tileClassName: tileStyles.Sharpshooter,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.READY_RESTED_RELOADED],
        levels: 3,
        connections: [19]
    },

    {
        id: Perks.AIR_KERENZIKOV,
        tileClassName: tileStyles.AirKerenzikov,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.GUN_DANCER, Perks.AERIAL_ACROBAT],
        levels: 1,
        connections: [24, 25]
    },
    {
        id: Perks.AERIAL_ACROBAT,
        tileClassName: tileStyles.AerialAcrobat,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.AIR_DASH],
        levels: 1,
        connections: [26]
    },
    {
        id: Perks.AERODYNAMIC,
        tileClassName: tileStyles.Aerodynamic,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.AIR_DASH],
        levels: 1,
        connections: [30]
    },
    {
        id: Perks.AIR_DASH,
        tileClassName: tileStyles.AirDash,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DASH],
        levels: 3,
        connections: [20]
    },

    {
        id: Perks.FINISHED_BLADERRUNNER,
        tileClassName: tileStyles.FinishedBladerrunner,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LEAD_AND_STEEL],
        levels: 3,
        connections: [21]
    },
    {
        id: Perks.FLASH_OF_STEEL,
        tileClassName: tileStyles.FlashOfSteel,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FINISHED_BLADERRUNNER],
        levels: 1,
        connections: [27]
    },

    {
        id: Perks.OPPORTUNIST,
        tileClassName: tileStyles.Opportunist,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FINISHED_BLADERRUNNER],
        levels: 1,
        connections: [32]
    },
    {
        id: Perks.GOING_THE_DISTANCE,
        tileClassName: tileStyles.GoingTheDistance,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FINISHED_BLADERRUNNER],
        levels: 1,
        connections: [31]
    },

    {
        id: Perks.SALT_IN_THE_WOUND,
        tileClassName: tileStyles.SaltInTheWound,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.SHARPSHOOTER],
        levels: 1,
        connections: [33]
    },
    {
        id: Perks.SUBMACHINE_FUN,
        tileClassName: tileStyles.SubmachineFun,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.SHARPSHOOTER],
        levels: 1,
        connections: [34]
    },
    {
        id: Perks.TAILWIND,
        tileClassName: tileStyles.Tailwind,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.AIR_DASH],
        levels: 1,
        connections: [35]
    },
    {
        id: Perks.SLAUGHTERHOUSE,
        tileClassName: tileStyles.Slaughterhouse,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.FINISHED_BLADERRUNNER],
        levels: 1,
        connections: [36]
    },
];

export const reflexConnectionData: PerkConnectionModel[] = [
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
    {id: 33},

    {id: 34},
    {id: 35},
    {id: 36},
];