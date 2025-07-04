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
        connections: [],
        name: "ROAD WARRIOR",
        description: "Allows you to use Sandevistan to slow time while driving.\\\\n\\\\nAllows Kerenzikov to be activated when aiming and handbraking simultaneously.\\\\n\\\\n+25% weapon damage when your vehicle is drifting or airborne."
    },
    {
        id: Perks.BLIND_SPOT,
        tileClassName: tileStyles.BlindSpot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.FELINE_FOOTWORK],
        levels: 1,
        connections: [1],
        name: "BLIND SPOT",
        description: "When crouched, the higher your Mitigation Chance, the longer it takes for enemies to detect you."
    },
    {
        id: Perks.SMALL_TARGET,
        tileClassName: tileStyles.SmallTarget,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.FELINE_FOOTWORK],
        levels: 1,
        connections: [2],
        name: "SMALL TARGET",
        description: "+20% Mitigation Chance when crouched and not moving. "
    },
    {
        id: Perks.FELINE_FOOTWORK,
        tileClassName: tileStyles.FelineFootwork,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: 'FELINE FOOTWORK',
        description: "When crouched: \\n+15% Movement Speed, \\n+15 Mitigation Chance. \\n\\nMitigation grants a chance to reduce incoming damage by current Mitigation Strength (default 50%)."
    },
    {
        id: Perks.UNEXPOSED,
        tileClassName: tileStyles.Unexposed,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.FELINE_FOOTWORK],
        levels: 1,
        connections: [3],
        name: "UNEXPOSED",
        description: "+20% Mitigation Chance when aiming from cover. "
    },
    {
        id: Perks.QUICK_GETAWAY,
        tileClassName: tileStyles.QuickGetaway,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.KILLER_INSTINCT],
        levels: 1,
        connections: [4],
        name: "QUICK GETAWAY",
        description: "+10% movement speed after neutralizing an enemy while undetected. Duration: 30 sec or until detected. Stacks 2 times. New stacks reset duration. All stacks are removed when duration ends. "
    },
    {
        id: Perks.KILLER_INSTINCT,
        tileClassName: tileStyles.KillerInstinct,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: 'KILLER INSTINCT',
        description: "+25% damage with knives, axes and silenced guns outside of combat. They also provide a preview of estimated damage. "
    },
    {
        id: Perks.GAG_ORDER,
        tileClassName: tileStyles.GagOrder,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.KILLER_INSTINCT],
        levels: 1,
        connections: [5],
        name: "GAG ORDER",
        description: "Landing an attack on an enemy right after they detect you will delay detection from other nearby enemies."
    },
    {
        id: Perks.RINSE_AND_RELOAD,
        tileClassName: tileStyles.RinseAndReload,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [6],
        name: "RINSE AND REALOAD",
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "+10 reload speed for your next reload after neutralizing an enemy while aiming. Stacks 2 times. The stack resets to 0 whenever you start aiming. "
    },
    {
        id: Perks.FOCUS,
        tileClassName: tileStyles.Focus,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: [],
        name: "FOCUS",
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "Level 1: +10% headshot and weak spot damage. \\nLevel 2: Unlocks Focus mode. This mode automatically activates when you aim while at full Stamina.\\\\n\\\\nWhen active:\\\\nNo Stamina cost for shooting, allowing for more accurate shots.\\\\n\\\\nWhen it ends:\\\\n-40 Stamina\\\\n\\\\nDuration: 2.5 sec."
    },
    {
        id: Perks.HEAD_TO_HEAD,
        tileClassName: tileStyles.HeadToHead,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [7],
        name: "HEAD TO HEAD",
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "When Focus is active, neutralizing an enemy with a ranged attack resets its duration."
    },
    {
        id: Perks.NEUROTOXIN,
        tileClassName: tileStyles.Neurotoxin,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [10],
        name: "NEUROTOXIN",
        limitationDescription: 'Only affects throwable weapons',
        description: "Applying poison to an enemy via Scorpion Sting now also applies bleeding and disables sprinting for 6 sec."
    },
    {
        id: Perks.SCORPION_STING,
        tileClassName: tileStyles.ScorpionSting,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: [],
        name: "SCORPION STING",
        limitationDescription: 'Only affects throwable weapons',
        description: "Level 1: –15% recovery time for throwable weapons. \\nLevel 2: Critical hits, headshots and hits to weak spots with throwable weapons apply poison for 5 sec. "
    },
    {
        id: Perks.CORROSION,
        tileClassName: tileStyles.Corrosion,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [11],
        name: "CORROSION",
        limitationDescription: 'Only affects throwable weapons',
        description: "Allows you to apply Poison to mechs, robots, drones and turrets."
    },
    {
        id: Perks.NO_SWEAT,
        tileClassName: tileStyles.NoSweat,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [12],
        name: 'NO SWEAT',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "–50% stamina cost from Focus for each enemy neutralized while it was active. "
    },
    {
        id: Perks.PULL,
        tileClassName: tileStyles.Pull,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.FOCUS],
        levels: 1,
        connections: [13],
        name: 'PULL!',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "When Focus is active, shooting grenades out of the air is easier and the blast is more powerful."
    },
    {
        id: Perks.DEEP_BREATH,
        tileClassName: tileStyles.DeepBreath,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEAD_TO_HEAD],
        levels: 1,
        connections: [8],
        name: 'DEEP BREATH',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "Time slows by 25% for you and enemies when Focus is active. "
    },
    {
        id: Perks.PARASITE,
        tileClassName: tileStyles.Parasite,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [14],
        name: "PARASITE",
        limitationDescription: 'Only affects throwable weapons',
        description: "+15 Health on Crit Hits and headshots with thrown weapons. "
    },
    {
        id: Perks.ACCELERATED_TOXIN_ABSORPTION,
        tileClassName: tileStyles.AcceleratedToxinAbsorption,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.SCORPION_STING],
        levels: 1,
        connections: [15],
        name: "ACCELERATED TOXIN ABSORPTION",
        limitationDescription: 'Only affects throwable weapons',
        description: "Strong Attacks and thrown weapons used against Poisoned enemies instantly deal substantial Poison damage then remove all Poison effects."
    },

    {
        id: Perks.HIGH_NOON,
        tileClassName: tileStyles.HighNoon,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [18],
        name: 'HIGH NOON',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "When Deadeye is active: \\n+35% reload speed for your next reload after neutralizing an enemy via headshot or weak spot. Effect available for 3 sec. \\nSlows time by 50% during reload. "
    },
    {
        id: Perks.DEADEYE,
        tileClassName: tileStyles.Deadeye,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [13],
        name: 'DEADEYE',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "Level 1: +10% headshot and weak spot damage. \\nLevel 2: –25% stamina cost for shooting. \\nLevel 3: unlocks Deadeye mode, which is active above 85% stamina. When active: +25% headshot damage, +25% weak spot damage, no bullet spread. "
    },
    {
        id: Perks.QUICK_DRAW,
        tileClassName: tileStyles.QuickDraw,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [19],
        name: 'QUICK DRAW',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "+30% weapon swap speed when swapping to pistols, revolvers, sniper rifles and precision rifles, +30% Stamina when swapping during combat."
    },

    {
        id: Perks.CREEPING_DEATH,
        tileClassName: tileStyles.CreepingDeath,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.NINJUTSU],
        levels: 1,
        connections: [21],
        name: 'CREEPING_DEATH',
        description: "When optical camo is active or you are undetected, neutralizing an enemy grants: +15% health, +15% stamina, +10% movement speed for 6 sec. "
    },

    {
        id: Perks.NINJUTSU,
        tileClassName: tileStyles.Ninjutsu,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [9],
        name: 'NINJUTSU',
        description: "Level 1: +15% crouch movement speed. \\nLevel 2: +15% mitigation chance when crouched. \\nLevel 3: Unlocks the ability to sprint while crouching.\\\\n\\\\nPress [LSHIFT] while crouching.\\\\n\\\\nCrouch-sprinting allows you to move more quickly while staying silent, but it consumes Stamina."
    },
    {
        id: Perks.SERPENTINE,
        tileClassName: tileStyles.Serpentine,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.NINJUTSU],
        levels: 1,
        connections: [22],
        name: "SERPENTINE",
        description: "+30% mitigation chance when crouch-sprinting."
    },
    {
        id: Perks.FINISHER_ACT_OF_MERCY,
        tileClassName: tileStyles.FinisherActOfMercy,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.JUGGLER],
        levels: 1,
        connections: [24],
        name: 'FINISHER: ACT OF MERCY',
        limitationDescription: 'Only affects throwable weapons',
        description: "Unlocks a Throwable Weapon Finisher.\\\\n\\\\nPress [F] when an enemy's Health is low.\\\\n\\\\nAutomatically activates Juggler.\\\\n\\\\nRestores 25% Health."
    },
    {
        id: Perks.JUGGLER,
        tileClassName: tileStyles.Juggler,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [17],
        name: 'JUGGLER',
        limitationDescription: 'Only affects throwable weapons',
        description: "Level 1: –15% recovery time for throwable weapons. \\nLevel 2: +20% headshot and weak spot damage with throwable weapons. \\nLevel 3: Instant Cooldown reset for all throwable weapons after neutralizing an enemy with a throwable weapon via headshot, Crit Hit, or Poison."
    },
    {
        id: Perks.PAY_IT_FORWARD,
        tileClassName: tileStyles.PayItForward,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.JUGGLER],
        levels: 1,
        connections: [25],
        name: 'PAY IT FORWARD',
        limitationDescription: 'Only affects throwable weapons',
        description: "After retrieving a thrown knife or axe from an enemy, your first melee attack with a throwable weapons gains +200% damage. "
    },
    {
        id: Perks.CALIFORNIA_REAPER,
        tileClassName: tileStyles.CaliforniaReaper,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [26],
        name: 'CALIFORNIA REAPER',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "+30% stamina after neutralizing an enemy with a ranged attack via headshot or weak spot. "
    },
    {
        id: Perks.LONG_SHOT,
        tileClassName: tileStyles.LongShot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [27],
        name: 'LONG SHOT',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "When Deadeye is active, your shots always deal full damage regardless of distance."
    },
    {
        id: Perks.VANISHING_ACT,
        tileClassName: tileStyles.VanishingAct,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.CREEPING_DEATH],
        levels: 1,
        connections: [20],
        name: 'VANISHING_ACT',
        description: "Optical Camo activates automatically and consumes its charge gradually while crouch-sprinting or sliding"
    },
    {
        id: Perks.SHINOBI_SPRINT,
        tileClassName: tileStyles.ShinobiSprint,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.NINJUTSU],
        levels: 1,
        connections: [28],
        name: 'SHINOBI SPRINT',
        description: "–75% stamina cost for crouch-sprinting during combat. "
    },
    {
        id: Perks.POUNCE,
        tileClassName: tileStyles.Pounce,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FINISHER_ACT_OF_MERCY],
        levels: 1,
        connections: [23],
        name: 'POUNCE',
        limitationDescription: 'Only affects throwable weapons',
        description: "Allows you to perform Finishers from a greater distance if you've hit the enemy with a throwable weapon.\\\\n\\\\nEach successful throw also makes them more susceptible to Finishers.\\\\n\\\\nTo perform a Finisher, press [F] when an enemy's Health is low."
    },
    {
        id: Perks.SLEIGHT_OF_HAND,
        tileClassName: tileStyles.SleightOfHand,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.JUGGLER],
        levels: 1,
        connections: [29],
        name: 'SLEIGHT OF HAND',
        limitationDescription: 'Only affects throwable weapons',
        description: "+20% critical damage for 8 sec whenever Juggler is activated. Stack 5 times. New stacks reset duration. All stacks are removed when duration ends. "
    },
    {
        id: Perks.NERVES_OF_TUNGSTEN_STEEL,
        tileClassName: tileStyles.NervesOfTungstenSteel,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [30],
        name: 'NERVES OF TUNGSTEN-STEEL',
        limitationDescription: 'Only affects Pistols, Revolvers, Precision Rifles and Sniper Rifles',
        description: "When Deadeye is active: guaranteed critical hits for headshots and weak spots, increased damage as distance increases (max +25%). "
    },
    {
        id: Perks.RUN_N_GUN,
        tileClassName: tileStyles.RunNGun,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.DEADEYE],
        levels: 1,
        connections: [31],
        name: "RUN 'N' GUN",
        limitationDescription: "Only affects Pistols",
        description: "Hip-firing does not consume stamina. When Focus is active +25% movement speed. "
    },
    {
        id: Perks.STYLE_OVER_SUBSTANCE,
        tileClassName: tileStyles.StyleOverSubstance,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.NINJUTSU, Perks.JUGGLER],
        levels: 1,
        connections: [32, 33],
        name: 'STYLE OVER SUBSTANCE',
        limitationDescription: "Only affects Throwable weapons",
        description: "Guaranteed Crit Hits with thrown attacks when crouch-sprinting, sliding, dodging or Dashing; also from motorcycles when airborne, drifting or dismounting via jump. No movement speed penalty when aiming a throwable weapon."
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