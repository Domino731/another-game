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
        connections: [2],
        name: "FORCEKILL CYPHER",
        description: "Reduces sequence length required to hack Access Points by 1.\\\\n\\\\nTotal sequence length cannot be reduced below 2 characters."
    },
    {
        id: Perks.EYE_IN_THE_SKY,
        tileClassName: tileStyles.EyeInTheSky,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: "EYE IN THE SKY",
        description: "Automatically highlights nearby Access Points and cameras. \\n\\nWhen uploaded through camera, Control quickhacks, Covert quickhacks and the Distract Enemies quickhack have: –1 RAM cost, +50% duration. "
    },
    {
        id: Perks.WARNING_EXPLOSION_HAZARD,
        tileClassName: tileStyles.WarningExplosionHazard,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.EYE_IN_THE_SKY],
        levels: 1,
        connections: [3],
        name: "WARNING: EXPLOSION HAZARD",
        description: "+40% explosion damage from hacked devices, +80% additional explosion damage to enemies affected by quickhacks (including Distract Enemies)"
    },

    {
        id: Perks.PROXIMATE_PROPAGATION,
        tileClassName: tileStyles.ProximatePropagation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.OPTIMIZATION],
        levels: 1,
        connections: [4],
        name: "PROXIMATE PROPAGATION",
        description: "Reduced RAM cost the closer you are to the target (max –35%)."
    },

    {
        id: Perks.OPTIMIZATION,
        tileClassName: tileStyles.Optimization,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: "OPTIMIZATION",
        description: "+35% RAM recovery rate."
    },

    {
        id: Perks.ENCRYPTION,
        tileClassName: tileStyles.Encryption,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.OPTIMIZATION],
        levels: 1,
        connections: [5],
        name: "ENCRYPTION",
        description: "-30% traceability for all quickhacks."
    },

    {
        id: Perks.SUBORDINATION,
        tileClassName: tileStyles.Subordination,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.OPTIMIZATION],
        levels: 1,
        connections: [1],
        name: "SUBORDINATION",
        description: "+100% duration for Control quickhacks used on full-health enemies."
    },
    {
        id: Perks.CARHACKER,
        tileClassName: tileStyles.Carhacker,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: "CARHACKER",
        description: "Unlocks Vehicle quickhacks, allowing you to remotely take control, set off alarms or even blow them up.\\\\n\\\\nThe availability of a given quickhack depends on the Tier of your installed cyberdeck."
    },

    {
        id: Perks.DATA_RECYCLER,
        tileClassName: tileStyles.DataRecycler,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HACK_QUEUE],
        levels: 1,
        connections: [8],
        name: "DATA RECYCLER",
        description: "After neutralizing an enemy, recover 80% of the RAM cost from all quickhacks remaining in their queue."
    },

    {
        id: Perks.HACK_QUEUE,
        tileClassName: tileStyles.HackQueue,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 1,
        connections: [6],
        name: "HACK QUEUE",
        description: "Level 1: +1 Max RAM. \\nLevel 2: unlocks quickhacks queues, allowing 2 quickhacks on a single enemy. Queued quickhacks automatically upload in the order they are added, +30% upload speed for the second quickhack in a queue."
    },

    {
        id: Perks.COUNTER_A_HACK,
        tileClassName: tileStyles.CounterAHack,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HACK_QUEUE],
        levels: 1,
        connections: [9],
        name: 'COUNTER-A-HACK',
        description: "When you're the target of an enemy netrunner, you are now able to counter quickhack them through walls and obstacles.\\n\\n-1 RAM cost for such counter quickhacks. "
    },

    {
        id: Perks.ICEPICK,
        tileClassName: tileStyles.Icepick,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [11],
        name: "ICEPICK",
        description: "–1 RAM cost for Combat quickhacks used on enemies affected by or targeted  Control quickhacks, Covert quickhacks or the Distract Enemies quickhack. "
    },

    {
        id: Perks.SPECULATION,
        tileClassName: tileStyles.Speculation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [12],
        name: "SPECULATION",
        description: "Neutralizing an enemy with a Combat quickhack recovers RAM equal to 25% of the total cost of all quickhacks affecting the target. "
    },


    {
        id: Perks.PRECISION_SUBROUTINES,
        tileClassName: tileStyles.PrecisionSubroutines,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ACQUISITION_SPECIALIST],
        levels: 1,
        connections: [15],
        name: "PRECISION SUBROUTINES",
        limitationDescription: "Only affects Smart Weapons",
        description: "+2% accuracy with smart weapons for each unit in your cyberdeck’s max RAM. "
    },

    {
        id: Perks.NO_ESCAPE,
        tileClassName: tileStyles.NoEscape,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ACQUISITION_SPECIALIST],
        levels: 1,
        connections: [16],
        name: "NO ESCAPE",
        limitationDescription: "Only affects Smart Weapons",
        description: "When using Smart weapons, if the target lock on an enemy is about to end, shooting them resets it."
    },

    {
        id: Perks.EMBEDDED_EXPLOIT,
        tileClassName: tileStyles.EmbeddedExploit,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: [7],
        name: "EMBEDDED_EXPLOIT",
        description: "Level 1: +10% RAM recovery rate. \\nLevel 2: +60% quickhack damage against enemies affected by Control quickhacks, Covert quickhacks or the Distract Enemies quickhack. "
    },
    {
        id: Perks.ACQUISITION_SPECIALIST,
        tileClassName: tileStyles.AcquisitionSpecialist,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: [],
        name: "ACQUISITION SPECIALIST",
        limitationDescription: "Only affects Smart Weapons",
        description: "Level 1: 10% larger target reticle for smart weapons. \\nLevel 2: reloading smart weapons no longer interrupts target lock, \\n+15 lock-on speed when hip-firing, \\n+20% lock-on speed when aiming. "
    },

    {
        id: Perks.FEEDBACK_LOOP,
        tileClassName: tileStyles.FeedbackLoop,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HACK_QUEUE],
        levels: 1,
        connections: [17],
        name: "FEEDBACK_LOOP",
        description: "+25% RAM recovery rate for each quickhack currently in a queue. "
    },

    {
        id: Perks.COPY_PAST,
        tileClassName: tileStyles.CopyPast,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.COUNTER_A_HACK],
        levels: 1,
        connections: [18],
        name: "COPY_PASTE",
        description: "When you're the target of an enemy netrunner, using a quickhack against them will also spread the quickhack's effect to their allies."
    },

    {
        id: Perks.SIPHON,
        tileClassName: tileStyles.Siphon,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ICEPICK],
        levels: 1,
        connections: [10],
        name: "SIPHON",
        description: "Monowire attacks recover 0.5 RAM. Increases to 1 if the enemy is affected by or targeted by a quickhack. "
    },

    {
        id: Perks.SHADOWRUNNER,
        tileClassName: tileStyles.Shadowrunner,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [19],
        name: "SHADOWRUNNER",
        description: "–100% trace progress after performing a Takedown. "
    },

    {
        id: Perks.SYSTEM_OVERWHELM,
        tileClassName: tileStyles.SystemOverwhelm,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 1,
        connections: [20],
        name: "SYSTEM_OVERWHELM",
        description: "+7% quickhack damage for each unique quickhack and DOT effect affecting the target. "
    },

    {
        id: Perks.RECIRCULATION,
        tileClassName: tileStyles.Recirculation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SPECULATION, Perks.PRECISION_SUBROUTINES],
        levels: 1,
        connections: [13, 14],
        name: "RECIRCULATION",
        limitationDescription: "Only affects Smart Weapons",
        description: "+2 RAM after neutralizing an enemy with a Smart weapon. If the enemy is affected by quickhacks, restores additional RAM equal to 50% of their total RAM cost."
    },

    {
        id: Perks.QUEUE_PRIORIZATION,
        tileClassName: tileStyles.QueuePriorization,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [24],
        name: "QUEUE_PRIORIZATION",
        description: "+50% upload speed for the first quickhack when you have at least 2 quickhacks queued on an enemy. "
    },

    {
        id: Perks.QUEUE_ACCELERATION,
        tileClassName: tileStyles.QueueAcceleration,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [21],
        name: "QUEUE ACCELERATION",
        description: "Level 1: +1 max RAM. \\nLevel 2: –1 RAM cost to quickhack devices and vehicles. \\nLevel 3: +1 quickhack queue size, +60 upload speed for quickhack third or later in the queue. "
    },


    {
        id: Perks.QUEUE_HACK_ROOT,
        tileClassName: tileStyles.QueueHackRoot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [25],
        name: "QUEUE HACK ROOT",
        description: "–1 RAM cost for the first quickhack of each unique category (Covert, Combat, Control) second or later in the queue. "
    },

    {
        id: Perks.FINISHER_LIVE_WIRE,
        tileClassName: tileStyles.FinisherLiveWire,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [32],
        name: "FINISHER: LIVE WIRE",
        description: "Unlocks a Monowire Finisher.\\\\n\\\\nPress [F] when an enemy's Health is low.\\\\n\\\\nThe more quickhacks you have queued on an enemy, the more susceptible they are.\\\\n\\\\nRestores 15% Health and 5 RAM."
    },

    {
        id: Perks.BLOOD_DAEMON,
        tileClassName: tileStyles.BloodDaemon,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUEUE_HACK_ROOT, Perks.SUBLIMATION],
        levels: 1,
        connections: [26, 27],
        name: "BLOOD_DAEMON",
        description: "When Overlock is active: +40 health for each quickhack queued on an enemy at the time you neutralize them."
    },

    {
        id: Perks.SUBLIMATION,
        tileClassName: tileStyles.Sublimation,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [28],
        name: 'SUBLIMATION',
        description: "When Overclock is active, all RAM recovery effects also regenerate Health."
    },

    {
        id: Perks.RACE_AGAINST_MIND,
        tileClassName: tileStyles.RaceAgainstMind,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [29],
        name: 'RACE AGAINST MIND',
        description: "When Overlock is active: increased quickhack damage as health decreases (max +50%). Health is measured when you begin upload. "
    },

    {
        id: Perks.POWER_SURGE,
        tileClassName: tileStyles.PowerSurge,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [33],
        name: "POWER SURGE",
        description: "Activating Overclock instantly restores Health equal to 5 times your max RAM."
    },

    {
        id: Perks.OVERCLOCK,
        tileClassName: tileStyles.Overclock,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.EMBEDDED_EXPLOIT],
        levels: 3,
        connections: [22],
        name: "OVERCLOCK",
        description: "Level 1: +10% RAM recovery rate. \\nLevel 2: +10% quickhack damage. \\nLevel 3: Unlocks Overclock mode.\\\\n\\\\nIf you have a cyberdeck installed, press [E] to activate. In this mode, you can use quickhacks even with insufficient RAM, but each RAM unit over your max costs 10 Health instead.\\\\n\\\\nDuration: 14 sec.\\\\nCooldown: 30 sec. "
    },

    {
        id: Perks.TERMINAL_VELOCITY,
        tileClassName: tileStyles.TerminalVelocity,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.TARGET_LOCK_TRANSFER],
        levels: 1,
        connections: [30],
        name: "TERMINAL VELOCITY",
        limitationDescription: "Only affects Smart Weapons",
        description: "Increased projectile velocity and lock-on range for 10 sec. after neutralizing an enemy with smart weapon. Stacks 3 times. New stacks reset duration. All stacks are removed when duration ends. "
    },

    {
        id: Perks.TARGETING_PRISM,
        tileClassName: tileStyles.TargetingPrism,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.TARGET_LOCK_TRANSFER],
        levels: 1,
        connections: [31],
        name: 'TARGETING PRISM',
        limitationDescription: "Only affects Smart Weapons",
        description: "Enables multiple target locks when aiming and increases the number of simultaneous targets for all smart weapons by 1. "
    },

    {
        id: Perks.TARGET_LOCK_TRANSFER,
        tileClassName: tileStyles.TargetLockTransfer,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ACQUISITION_SPECIALIST],
        levels: 3,
        connections: [23],
        name: 'TARGET LOCK TRANSFER',
        limitationDescription: "Only affects Smart Weapons",
        description: "Level 1: 10% larger targeting reticle for smart weapons. \\nLevel 2: switching from aiming to hip-fire does not disengage target-lock on headshots and weakspots. \\nLevel 3: switching from one smart weapon to another no longer interrupts target lock. "
    },

    {
        id: Perks.QUEUE_MASTERY,
        tileClassName: tileStyles.QueueMastery,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.QUEUE_ACCELERATION],
        levels: 1,
        connections: [34],
        name: 'QUEUE MASTERY',
        description: "+1 quickhack queue size. The last quickhack to fill a queue has –50% RAM cost and locks the queue until all quickhacks have uploaded., +15% damage against enemies with a locked queue. "
    },

    {
        id: Perks.SPILLOVER,
        tileClassName: tileStyles.Spillover,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.OVERCLOCK],
        levels: 1,
        connections: [35],
        name: "SPILLOVER",
        description: "When Overlock is active: +50% chance for quickhacks to spread to an additional target. "
    },

    {
        id: Perks.SMART_SYNERGY,
        tileClassName: tileStyles.SmartSynergy,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.OVERCLOCK, Perks.TARGET_LOCK_TRANSFER],
        levels: 1,
        connections: [36, 37],
        name: 'SMART SYNERGY',
        limitationDescription: "Only affects Smart Weapons",
        description: "When Overlock is active, smart weapons gain instant target lock, and +25% damage if the enemy is affected by a quickhack. "
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