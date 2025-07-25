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
        connections: [1],
        name: 'FIRST AID',
        description: "+15% recharge speed of Health Items when you've only used 1 charge. "
    },
    {
        id: Perks.TRANSFUSION,
        tileClassName: tileStyles.Transfusion,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.GLUTTON_FOR_WAR],
        levels: 1,
        connections: [2],
        name: "TRANSFUSION",
        description: "+30% health from the final charge of your equipped health item. "
    },
    {
        id: Perks.GLUTTON_FOR_WAR,
        tileClassName: tileStyles.GluttonForWar,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: 'GLUTTON FOR WAR',
        description: "5% instant recharge of Health items and grenades after neutralizing an enemy."
    },
    {
        id: Perks.GEARHEAD,
        tileClassName: tileStyles.Gearhead,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: [],
        name: 'GEARHEAD',
        description: "+33% vehicle health\\nVehicle-mounted weapons receive:\\n+25% damage\\n-0,7 sec. lock-on time"
    },
    {
        id: Perks.BORROWED_TIME,
        tileClassName: tileStyles.BorrowedTime,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [3],
        name: 'BORROWED TIME',
        description: "+100% instant recharge of a health item after neutralizing an enemy if you are below 25% health and have no charges remaining."
    },
    {
        id: Perks.DEMOLITIONS_SURPLUS,
        tileClassName: tileStyles.DemolitionsSurplus,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [5],
        name: 'DEMOLITIONS SURPLUS',
        description: "+1 max grenade charge, +250% recharge speed for grenades outside of combat. "
    },
    {
        id: Perks.COMMING_HOT,
        tileClassName: tileStyles.CommingHot,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [9],
        name: "COMMING IN HOT",
        description: "+50% recharge speed for grenades when you have none available. "
    },
    {
        id: Perks.FIELD_MEDIC,
        tileClassName: tileStyles.FieldMedic,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 1,
        connections: [10],
        name: "FIELD MEDIC",
        description: "15% faster use of Health Items in combat. "
    },
    {
        id: Perks.HEALTH_FREAK,
        tileClassName: tileStyles.HealthFreak,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.GLUTTON_FOR_WAR],
        levels: 2,
        connections: [3],
        name: "HEALTH FREAK",
        description: "Level 1: +8% recharge speed for Health Items and grenades.\\nLevel 2: +1 health item charge, \\n+150% recharge speed for health items outside combat. "
    },
    {
        id: Perks.RENEISSANCE_PUNK,
        tileClassName: tileStyles.ReneissancePunk,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [6],
        name: 'RENEISSANCE PUNK',
        description: "+4 Cyberware Capacity for each Attribute at 9 or higher"
    },
    {
        id: Perks.DRIVER_UPDATE,
        tileClassName: tileStyles.DriverUpdate,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [7],
        name: 'DRIVER UPDATE',
        description: "All cyberware gain an additional stat modifier."
    },
    {
        id: Perks.CHROME_CONSTITUTION,
        tileClassName: tileStyles.ChromeConstitution,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [11],
        name: 'CHROME CONSTITUTION',
        description: "When upgrading cyberware, you can choose from two stat modifier options.\\n\\nA third option is available at Tier 3 and higher. "
    },
    {
        id: Perks.LUCKY_DAY,
        tileClassName: tileStyles.LuckyDay,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 1,
        connections: [12],
        name: "LUCKY DAY",
        description: "+25% crafting components from looting."
    },
    {
        id: Perks.ALL_THINGS_CYBER,
        tileClassName: tileStyles.AllThingsCyber,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: [],
        name: 'ALL THINGS CYBER',
        description: "Level 1: +10% to all cyberware stat modifiers. \\nLevel 2: +40 armor. \\nLevel 3: unlocks a new cyberware slot for the skeleton. All skeleton cyberware have boosted stats. "
    },
    {
        id: Perks.CHIPWARE_CONNOISSEUR,
        tileClassName: tileStyles.ChipwareConnoisseur,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DRIVER_UPDATE],
        levels: 1,
        connections: [8],
        name: 'CHIPWARE CONNOISSEUR',
        description: "-5% incoming damage if all Integumentary System and Skeleton cyberware slots are filled"
    },

    {
        id: Perks.BURN_THIS_CITY,
        tileClassName: tileStyles.BurnThisCity,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [15],
        name: 'BURN THIS CITY',
        description: "When you accumulate 5 stacks of Pyromania, they will be consumed to instantly replenish a grenade charge, but all bonuses from those stacks will remain active for 6 sec. "
    },
    {
        id: Perks.FRIENDLIER_FIRE,
        tileClassName: tileStyles.FriendlierFire,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [16],
        name: 'FRIENDLIER_FIRE',
        description: "+50% resistance to damage and effects from explosions you cause. "
    },
    {
        id: Perks.HEAT_SHIELD,
        tileClassName: tileStyles.HeatShield,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [23],
        name: "HEAT SHIELD",
        description: "+10% Mitigation Chance per stack of Pyromania. "
    },
    {
        id: Perks.FLASH_SALE,
        tileClassName: tileStyles.FlashSale,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.PYROMANIA],
        levels: 1,
        connections: [24],
        name: "FLASH SALE",
        description: "For Flash, Smoke and Recon grenades:\\\\nDouble grenade charges\\\\nDouble recharge rate"
    },
    {
        id: Perks.PYROMANIA,
        tileClassName: tileStyles.Pyromania,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.HEALTH_FREAK],
        levels: 3,
        connections: [13],
        name: 'PYROMANIA',
        description: "Level 1: +8% recharge speed for health items and grenades. \\nLevel 2: +10% explosion radius for grenades and the Projectile Launch System.\\nLevel 3: +5% movement speed and +10% explosion damage for 12 sec. after hitting an enemy in combat with an explosion from a grenade, explosive device or Projectile Launch System. If you take damage from the explosion, the effect adds 2 stacks instead of 1. Effect stacks 5 times."
    },
    {
        id: Perks.DOOM_LAUNCHER,
        tileClassName: tileStyles.DoomLauncher,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.FRIENDLIER_FIRE, Perks.AMIDEXETROUS],
        levels: 1,
        connections: [17, 18],
        name: "DOOMLAUNCHER",
        description: "Projectile Launch System cyberware receives: \\n+1 max charges, \\n+20% recharge speed, \\n+25% additional recharge speed when you have no charges available, \\n+200% additional recharge speed outside of combat.\\n+5% instant recharge after neutralizing an enemy. \\n\\nIt also receives the same bonus as grenades from Burn This City Perk."
    },
    {
        id: Perks.AMIDEXETROUS,
        tileClassName: tileStyles.Amidexetrous,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [19],
        name: 'AMIDEXETROUS',
        description: "Unlocks a new cyberware slot for your Hands."
    },
    {
        id: Perks.EXTENDED_WARRANY,
        tileClassName: tileStyles.ExtendedWarranty,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [20],
        name: 'EXTENDED WARRANY',
        description: "+15% duration for all cyberware effects. "
    },
    {
        id: Perks.CYBORG,
        tileClassName: tileStyles.Cyborg,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [25],
        name: "CYBORG",
        description: "15% reduced Cooldown for all cyberware if all available slots are filled. "
    },
    {
        id: Perks.BUILT_DIFFERENT,
        tileClassName: tileStyles.BuiltDifferent,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [26],
        name: 'BUILT DIFFERENT',
        description: "Unlocks Cellular Adapter cyberware for the Integumentary System. It can be purchased and installed at ripperdoc clinics. This Perk is required to use it properly."
    },
    {
        id: Perks.LICENSE_TO_CHROME,
        tileClassName: tileStyles.LicenseToChrome,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ALL_THINGS_CYBER],
        levels: 3,
        connections: [14],
        name: 'LICENSE TO CHROME',
        description: "Level 1: +10% to all cyberware stat modifiers. \\nLevel 2: +40 armor. \\nLevel 3: unlocks a new cyberware slot for the skeleton. All skeleton cyberware have boosted stats. "
    },
    {
        id: Perks.INTERNAL_CLICK,
        tileClassName: tileStyles.InternalClick,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [21],
        name: "INTERNAL CLICK",
        limitationDescription: 'Only affects tech weapons',
        description: "Increased time window to fire a Bolt."
    },
    {
        id: Perks.IN_CHARGE,
        tileClassName: tileStyles.InCharge,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [22],
        name: "IN CHARGE",
        limitationDescription: 'Only affects tech weapons',
        description: "Tech weapons no longer fire automatically when reaching full charge."
    },
    {
        id: Perks.LIGHTNING_STORM,
        tileClassName: tileStyles.LightningStorm,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [27],
        name: "LIGHTNING STORM",
        limitationDescription: 'Only affects tech weapons',
        description: "+10% charge speed after firing a Bolt. Stacks 3 times. Swapping weapons or firing a non-Bolt shot resets the stack. "
    },
    {
        id: Perks.SHOCK_VALUE,
        tileClassName: tileStyles.ShockValue,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [28],
        name: "SHOCK VALUE",
        limitationDescription: 'Only affects tech weapons',
        description: "Bolt shots ignore enemy Armor."
    },
    {
        id: Perks.BOLT,
        tileClassName: tileStyles.Bolt,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [],
        name: 'BOLT',
        limitationDescription: 'Only affects tech weapons',
        description: "Level 1: +20% charge speed for tech weapons. \\nLevel 2: +15% damage for charged shots with tech weapons. \\nLevel 3: Unlocks Bolt shots. To fire a Bolt, release the trigger for a charged shot right before it fully charges: counts as a fully charged shot, +30% damage, –50% penalty for penetrating cover.\\n\\nFull-auto Tech weapons fire Bolts in a short burst. To continue firing Bolts in full-auto, press and hold the trigger again after firing the initial burst. "
    },
    {
        id: Perks.TICKING_TIME_BOMB,
        tileClassName: tileStyles.TickingTimeBomb,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.PYROMANIA, Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [29, 30],
        name: 'TICKING_TIME_BOMB',
        description: "Charges powerful EMP that hits nearby enemies after 3 sec. Whenever you activate Operating System cyberware (Berserk, Sandevistan) or Overlock. Applies Stun and deal damage proportionate to the quantity and tier of cyberware implants you have installed, –50% incoming damage while charging EMP. "
    },
    {
        id: Perks.EDGERUNNER,
        tileClassName: tileStyles.Edgerunner,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.LICENSE_TO_CHROME],
        levels: 1,
        connections: [31],
        name: 'EDGERUNNER',
        description: "Allows you to exceed your cyberware capacity by up to 50 points, but at the cost of -0.5% max health per point over capacity. \\n\\nWhen you neutralize an enemy during combat, there is a 0.1% chance for each point you are over capacity that you you will break into a Fury. \\nIn this state, you gain: \\n+10% damage, \\n+30% critical chance, \\n+50% critical damage. \\n\\nDuration: 12 sec. \\n+3 sec. duration for each neutralization while Fury is active."
    },
    {
        id: Perks.CHAIN_LIGHTNING,
        tileClassName: tileStyles.ChainLightning,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.BOLT],
        levels: 1,
        connections: [31],
        name: 'CHAIN LIGHTNING',
        limitationDescription: 'Only affects tech weapons',
        description: "Bolt now deals Electrical damage and releases an electric arc that can electrocute up to 3 nearby enemies."
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