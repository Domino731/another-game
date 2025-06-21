import {Perk, PerkType} from "../../modules/characters/pages/CharacterPerks/utils";
import {PerkConnectionModel, Perks} from "../../Models/perks";
import {
    BODY_TIERS
} from "../../modules/characters/pages/CharacterPerks/PerksLayer/lockedSeparator/LockedSeparator.utils";
import tileStyles from './cool-perks.module.scss';

export const coolPerksData: Perk[] = [
    {
        id: Perks.ROAD_WARRIOR,
        tileClassName: tileStyles.RoadWarrior,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.BLIND_SPOT,
        tileClassName: tileStyles.BlindSpot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.FELINE_FOOTWORK],
        levels: 1,
        connections: [1]
    },
    {
        id: Perks.SMALL_TARGET,
        tileClassName: tileStyles.SmallTarget,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.FELINE_FOOTWORK],
        levels: 1,
        connections: [2]
    },
    {
        id: Perks.FELINE_FOOTWORK,
        tileClassName: tileStyles.FelineFootwork,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.UNEXPOSED,
        tileClassName: tileStyles.Unexposed,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.FELINE_FOOTWORK],
        levels: 1,
        connections: [3]
    },
    {
        id: Perks.QUICK_GETAWAY,
        tileClassName: tileStyles.QuickGetaway,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.KILLER_INSTINCT],
        levels: 1,
        connections: [4]
    },
    {
        id: Perks.KILLER_INSTINCT,
        tileClassName: tileStyles.KillerInstinct,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.GAG_ORDER,
        tileClassName: tileStyles.GagOrder,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.KILLER_INSTINCT],
        levels: 1,
        connections: [5]
    },
    {
        id: Perks.RINSE_AND_RELOAD,
        tileClassName: tileStyles.RinseAndReload,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [6]
    },
    {
        id: Perks.FOCUS,
        tileClassName: tileStyles.Focus,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: []
    },
    {
        id: Perks.HEAD_TO_HEAD,
        tileClassName: tileStyles.HeadToHead,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [7]
    },
    {
        id: Perks.NEUROTOXIN,
        tileClassName: tileStyles.Neurotoxin,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [10]
    },
    {
        id: Perks.SCORPION_STING,
        tileClassName: tileStyles.ScorpionSting,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: []
    },
    {
        id: Perks.CORROSION,
        tileClassName: tileStyles.Corrosion,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [11]
    },
    {
        id: Perks.NO_SWEAT,
        tileClassName: tileStyles.NoSweat,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [12]
    },
    {
        id: Perks.PULL,
        tileClassName: tileStyles.Pull,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [13]
    },
    {
        id: Perks.DEEP_BREATH,
        tileClassName: tileStyles.DeepBreath,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEAD_TO_HEAD],
        levels: 1,
        connections: [8]
    },
    {
        id: Perks.PARASITE,
        tileClassName: tileStyles.Parasite,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [14]
    },
    {
        id: Perks.ACCELERATED_TOXIN_ABSORPTION,
        tileClassName: tileStyles.AcceleratedToxinAbsorption,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [15]
    },

    {
        id: Perks.HIGH_NOON,
        tileClassName: tileStyles.HighNoon,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [18]
    },
    {
        id: Perks.DEADEYE,
        tileClassName: tileStyles.Deadeye,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [13]
    },
    {
        id: Perks.QUICK_DRAW,
        tileClassName: tileStyles.QuickDraw,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [19]
    },

    {
        id: Perks.CREEPING_DEATH,
        tileClassName: tileStyles.CreepingDeath,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.NINJUTSU],
        levels: 1,
        connections: [21]
    },

    {
        id: Perks.NINJUTSU,
        tileClassName: tileStyles.Ninjutsu,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [9]
    },
    {
        id: Perks.SERPENTINE,
        tileClassName: tileStyles.Serpentine,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.NINJUTSU],
        levels: 1,
        connections: [22]
    },
    {
        id: Perks.FINISHER_ACT_OF_MERCY,
        tileClassName: tileStyles.FinisherActOfMercy,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.JUGGLER],
        levels: 1,
        connections: [24]
    },
    {
        id: Perks.JUGGLER,
        tileClassName: tileStyles.Juggler,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [17]
    },
    {
        id: Perks.PAY_IT_FORWARD,
        tileClassName: tileStyles.PayItForward,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.JUGGLER],
        levels: 1,
        connections: [25]
    },
    {
        id: Perks.CALIFORNIA_REAPER,
        tileClassName: tileStyles.CaliforniaReaper,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [26]
    },
    {
        id: Perks.LONG_SHOT,
        tileClassName: tileStyles.LongShot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [27]
    },
    {
        id: Perks.VANISHING_ACT,
        tileClassName: tileStyles.VanishingAct,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.CREEPING_DEATH],
        levels: 1,
        connections: [20]
    },
    {
        id: Perks.SHINOBI_SPRINT,
        tileClassName: tileStyles.ShinobiSprint,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.NINJUTSU],
        levels: 1,
        connections: [28]
    },
    {
        id: Perks.POUNCE,
        tileClassName: tileStyles.Pounce,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FINISHER_ACT_OF_MERCY],
        levels: 1,
        connections: [23]
    },
    {
        id: Perks.SLEIGHT_OF_HAND,
        tileClassName: tileStyles.SleightOfHand,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.JUGGLER],
        levels: 1,
        connections: [29]
    },
    {
        id: Perks.NERVES_OF_TUNGSTEN_STEEL,
        tileClassName: tileStyles.NervesOfTungstenSteel,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [30]
    },
    {
        id: Perks.RUN_N_GUN,
        tileClassName: tileStyles.RunNGun,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [31]
    },
    {
        id: Perks.STYLE_OVER_SUBSTANCE,
        tileClassName: tileStyles.StyleOverSubstance,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.NINJUTSU, Perks.JUGGLER],
        levels: 1,
        connections: [32, 33]
    },
];

export const coolConnectionsData: PerkConnectionModel[] = [
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
];