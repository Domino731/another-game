import {Perk, PerkType} from "../../modules/characters/pages/CharacterPerks/utils";
import {PerkConnectionModel, Perks} from "../../Models/perks";
import {
    BODY_TIERS
} from "../../modules/characters/pages/CharacterPerks/PerksLayer/lockedSeparator/LockedSeparator.utils";
import tileStyles from './intelligence-perks.module.scss'

export const intelligencePerksData: Perk[] = [
    {
        id: Perks.FORCEKILL_CYPHER,
        tileClassName: tileStyles.ForcekillCypher,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.EYE_IN_THE_SKY],
        levels: 1,
        connections: [2]
    },
    {
        id: Perks.EYE_IN_THE_SKY,
        tileClassName: tileStyles.EyeInTheSky,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.WARNING_EXPLOSION_HAZARD,
        tileClassName: tileStyles.WarningExplosionHazard,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.EYE_IN_THE_SKY],
        levels: 1,
        connections: [3]
    },

    {
        id: Perks.PROXIMATE_PROPAGATION,
        tileClassName: tileStyles.ProximatePropagation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.OPTIMIZATION],
        levels: 1,
        connections: [4]
    },

    {
        id: Perks.OPTIMIZATION,
        tileClassName: tileStyles.Optimization,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },

    {
        id: Perks.ENCRYPTION,
        tileClassName: tileStyles.Encryption,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.OPTIMIZATION],
        levels: 1,
        connections: [5]
    },

    {
        id: Perks.SUBORDINATION,
        tileClassName: tileStyles.Subordination,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.OPTIMIZATION],
        levels: 1,
        connections: [1]
    },

    {
        id: Perks.DATA_RECYCLER,
        tileClassName: tileStyles.DataRecycler,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HACK_QUEUE],
        levels: 1,
        connections: [8]
    },

    {
        id: Perks.HACK_QUEUE,
        tileClassName: tileStyles.HackQueue,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 1,
        connections: [6]
    },

    {
        id: Perks.COUNTER_A_HACK,
        tileClassName: tileStyles.CounterAHack,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HACK_QUEUE],
        levels: 1,
        connections: [9]
    },

    {
        id: Perks.ICEPICK,
        tileClassName: tileStyles.Icepick,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [11]
    },

    {
        id: Perks.SPECULATION,
        tileClassName: tileStyles.Speculation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [12]
    },


    {
        id: Perks.PRECISION_SUBROUTINES,
        tileClassName: tileStyles.PrecisionSubroutines,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ACQUISITION_SPECIALIST],
        levels: 1,
        connections: [15]
    },

    {
        id: Perks.NO_ESCAPE,
        tileClassName: tileStyles.NoEscape,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ACQUISITION_SPECIALIST],
        levels: 1,
        connections: [16]
    },

    {
        id: Perks.EMBEDDED_EXPLOIT,
        tileClassName: tileStyles.EmbeddedExploit,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: [7]
    },
    {
        id: Perks.ACQUISITION_SPECIALIST,
        tileClassName: tileStyles.AcquisitionSpecialist,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: []
    },

    {
        id: Perks.FEEDBACK_LOOP,
        tileClassName: tileStyles.FeedbackLoop,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HACK_QUEUE],
        levels: 1,
        connections: [17]
    },

    {
        id: Perks.COPY_PAST,
        tileClassName: tileStyles.CopyPast,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.COUNTER_A_HACK],
        levels: 1,
        connections: [18]
    },

    {
        id: Perks.SIPHON,
        tileClassName: tileStyles.Siphon,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ICEPICK],
        levels: 1,
        connections: [10]
    },

    {
        id: Perks.SHADOWRUNNER,
        tileClassName: tileStyles.Shadowrunner,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [19]
    },

    {
        id: Perks.SYSTEM_OVERWHELM,
        tileClassName: tileStyles.SystemOverwhelm,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [20]
    },

    {
        id: Perks.RECIRCULATION,
        tileClassName: tileStyles.Recirculation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SPECULATION, Perks.PRECISION_SUBROUTINES],
        levels: 1,
        connections: [13, 14]
    },

    {
        id: Perks.QUEUE_PRIORIZATION,
        tileClassName: tileStyles.QueuePriorization,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [24]
    },

    {
        id: Perks.QUEUE_ACCELERATION,
        tileClassName: tileStyles.QueueAcceleration,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [21]
    },


    {
        id: Perks.QUEUE_HACK_ROOT,
        tileClassName: tileStyles.QueueHackRoot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [25]
    },

    {
        id: Perks.FINISHER_LIVE_WIRE,
        tileClassName: tileStyles.FinisherLiveWire,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [32]
    },

    {
        id: Perks.BLOOD_DAEMON,
        tileClassName: tileStyles.BloodDaemon,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_HACK_ROOT, Perks.SUBLIMATION],
        levels: 1,
        connections: [26, 27]
    },

    {
        id: Perks.SUBLIMATION,
        tileClassName: tileStyles.Sublimation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [28]
    },

    {
        id: Perks.RACE_AGAINST_MIND,
        tileClassName: tileStyles.RaceAgainstMind,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [29]
    },

    {
        id: Perks.POWER_SURGE,
        tileClassName: tileStyles.PowerSurge,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [33]
    },

    {
        id: Perks.OVERCLOCK,
        tileClassName: tileStyles.Overclock,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 3,
        connections: [22]
    },

    {
        id: Perks.TERMINAL_VELOCITY,
        tileClassName: tileStyles.TerminalVelocity,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.TARGET_LOCK_TRANSFER],
        levels: 1,
        connections: [30]
    },

    {
        id: Perks.TARGETING_PRISM,
        tileClassName: tileStyles.TargetingPrism,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.TARGET_LOCK_TRANSFER],
        levels: 1,
        connections: [31]
    },

    {
        id: Perks.TARGET_LOCK_TRANSFER,
        tileClassName: tileStyles.TargetLockTransfer,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ACQUISITION_SPECIALIST],
        levels: 3,
        connections: [23]
    },

    {
        id: Perks.QUEUE_MASTERY,
        tileClassName: tileStyles.QueueMastery,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [34]
    },

    {
        id: Perks.SPILLOVER,
        tileClassName: tileStyles.Spillover,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [35]
    },

    {
        id: Perks.SMART_SYNERGY,
        tileClassName: tileStyles.SmartSynergy,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.OVERCLOCK, Perks.TARGET_LOCK_TRANSFER],
        levels: 1,
        connections: [36, 37]
    },
];

export const intelligencePerkConnections: PerkConnectionModel[] = [
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
    {id: 37},
]