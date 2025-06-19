import {Perk, PerkType} from "../../modules/characters/pages/CharacterPerks/utils";
import {PerkConnectionModel, Perks} from "../../Models/perks";
import {
    BODY_TIERS
} from "../../modules/characters/pages/CharacterPerks/PerksLayer/lockedSeparator/LockedSeparator.utils";
import bodyPerks from './body-perks.module.scss';

export const bodyPerkConnections: PerkConnectionModel[] = [
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
    {id: 31}
];

export const bodyPerksData: Perk[] = [
    // FIRST ATTRIBUTES TIER
    {
        id: Perks.DORPH_HEAD,
        tileClassName: bodyPerks.bodyPerkDorphHead,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1,
        connections: [1]
    },
    {
        id: Perks.COMEBACK_KID,
        tileClassName: bodyPerks.bodyPerkComebackKid,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1,
        connections: [3]
    },
    {
        id: Perks.PAINKILLER,
        tileClassName: bodyPerks.bodyPerkPainkiller,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    {
        id: Perks.SPEED_JUNKIE,
        tileClassName: bodyPerks.bodyPerkSpeedJunkie,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1,
        connections: [4]
    },
    {
        id: Perks.ARMY_OF_ONE,
        tileClassName: bodyPerks.bodyPerkArmyOfOne,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1,
        connections: [2]
    },
    {
        id: Perks.FURY_ROAD,
        tileClassName: bodyPerks.bodyPerkFuryRoad,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.FIRST,
        requiredPerks: [],
        levels: 1,
        connections: []
    },
    // SECOND ATTRIBUTES TIER
    {
        id: Perks.BULLET_BALLET,
        tileClassName: bodyPerks.bodyPerkBulletBallet,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DIE_DIE_DIE],
        levels: 1,
        connections: [5]
    },
    {
        id: Perks.KINETIC_ABSORPTION,
        tileClassName: bodyPerks.bodyPerkKineticAbsorption,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.WRECKING_BALL],
        levels: 1,
        connections: [7]
    },
    {
        id: Perks.FLY_SWATTER,
        tileClassName: bodyPerks.bodyPerkFlySwatter,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.WRECKING_BALL],
        levels: 1,
        connections: [8]
    },
    {
        id: Perks.DIE_DIE_DIE,
        tileClassName: bodyPerks.bodyPerkDieDieDie,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: []
    },
    {
        id: Perks.WRECKING_BALL,
        tileClassName: bodyPerks.bodyPerkWreckingBall,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [],
        levels: 2,
        connections: []
    },
    {
        id: Perks.LIKE_A_FEATHER,
        tileClassName: bodyPerks.bodyPerkLikeAFeather,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DIE_DIE_DIE],
        levels: 1,
        connections: [9]
    },
    {
        id: Perks.DONT_STOP_ME_NOW,
        tileClassName: bodyPerks.bodyPerkDontStopMeNow,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.DIE_DIE_DIE],
        levels: 1,
        connections: [10]
    },
    {
        id: Perks.BREAKTHROUGH,
        tileClassName: bodyPerks.bodyPerkBreakthrough,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.WRECKING_BALL],
        levels: 1,
        connections: [11]
    },
    {
        id: Perks.CLAPBACK,
        tileClassName: bodyPerks.bodyPerkClapback,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.SECOND,
        requiredPerks: [Perks.WRECKING_BALL],
        levels: 1,
        connections: [12]
    },
    {
        id: Perks.SKULLCRACKER,
        tileClassName: bodyPerks.bodyPerkSkullcracker,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SPONTANEOUS_OBLITERATION],
        levels: 1,
        connections: [15]
    },

    {
        id: Perks.RUSH_OF_BLOOD,
        tileClassName: bodyPerks.bodyPerkRushOfBlood,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SPONTANEOUS_OBLITERATION],
        levels: 1,
        connections: [16]
    },
    {
        id: Perks.JUGGERNAUT,
        tileClassName: bodyPerks.bodyPerkJuggernaut,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ADRENALINE_RUSH],
        levels: 1,
        connections: [19]
    },
    {
        id: Perks.CALM_MIND,
        tileClassName: bodyPerks.bodyPerkCalmMind,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ADRENALINE_RUSH],
        levels: 1,
        connections: [20]
    },
    {
        id: Perks.AFTERSHOCK,
        tileClassName: bodyPerks.bodyPerkAftershock,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUAKE],
        levels: 1,
        connections: [23]
    },
    {
        id: Perks.EPICENTER,
        tileClassName: bodyPerks.bodyPerkEpicenter,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.QUAKE],
        levels: 1,
        connections: [24]
    },
    {
        id: Perks.SPONTANEOUS_OBLITERATION,
        tileClassName: bodyPerks.bodyPerkSpontaneousObliteration,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [13]
    },
    {
        id: Perks.ADRENALINE_RUSH,
        tileClassName: bodyPerks.bodyPerkAdrenalineRush,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [6]
    },
    {
        id: Perks.QUAKE,
        tileClassName: bodyPerks.bodyPerkQuake,
        type: PerkType.MILESTRONE,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [],
        levels: 3,
        connections: [14]
    },
    {
        id: Perks.CLOSE_QUARTERS_CARNAGE,
        tileClassName: bodyPerks.bodyPerkCloseQuartersCarnage,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SPONTANEOUS_OBLITERATION],
        levels: 1,
        connections: [25]
    },
    {
        id: Perks.DREAD,
        tileClassName: bodyPerks.bodyPerkDread,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.SPONTANEOUS_OBLITERATION],
        levels: 1,
        connections: [26]
    },
    {
        id: Perks.BLOODLUST,
        tileClassName: bodyPerks.bodyPerkBloodlust,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.RUSH_OF_BLOOD, Perks.JUGGERNAUT],
        levels: 1,
        connections: [17, 18]
    },
    {
        id: Perks.UNSTOPPABLE_FORCE,
        tileClassName: bodyPerks.bodyPerkUnstoppableForce,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.ADRENALINE_RUSH],
        levels: 1,
        connections: [27]
    },
    {
        id: Perks.RIPPLE_EFFECT,
        tileClassName: bodyPerks.bodyPerkRippleEffect,
        type: PerkType.PERK,
        requiredAttributes: BODY_TIERS.THIRD,
        requiredPerks: [Perks.CALM_MIND, Perks.AFTERSHOCK],
        levels: 1,
        connections: [21, 22]
    },
    {
        id: Perks.RIP_AND_TEAR,
        tileClassName: bodyPerks.bodyPerkRipAndTear,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.SPONTANEOUS_OBLITERATION],
        levels: 1,
        connections: [28]
    },
    {
        id: Perks.ONSLAUGHT,
        tileClassName: bodyPerks.bodyPerkOnslaught,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.SPONTANEOUS_OBLITERATION],
        levels: 1,
        connections: [29]
    },
    {
        id: Perks.PAIN_TO_GAIN,
        tileClassName: bodyPerks.bodyPerkPainToGain,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.ADRENALINE_RUSH],
        levels: 1,
        connections: [30]
    },
    {
        id: Perks.FINISHER_SAVAGE_SLINGER,
        tileClassName: bodyPerks.bodyPerkFinisherSavageSling,
        type: PerkType.MASTER,
        requiredAttributes: BODY_TIERS.FOURTH,
        requiredPerks: [Perks.QUAKE],
        levels: 1,
        connections: [31]
    },
];