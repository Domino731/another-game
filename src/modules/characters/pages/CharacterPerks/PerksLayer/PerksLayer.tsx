import styles from './PerksLayer.module.scss';
import bodyPerks from './bodyPerks.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {characterSelectors} from "../../../store/selectors.ts";
import {useCallback, useMemo} from "react";
import {LockedSeparator} from "./lockedSeparator/LockedSeparator.tsx";
import {AttributeName} from "../../../../../Models/character.ts";
import {Perks} from "../../../../../Models/perks.ts";
import {characterSliceActions} from "../../../store/slice.ts";
import {getPerkState, type Perk, PerkType} from '../utils';
import {BODY_TIERS} from "./lockedSeparator/LockedSeparator.utils";

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

const getDataPerkType = (perkType: PerkType) => {
    switch (perkType) {
        case PerkType.MILESTRONE:
            return 'milestone';
        case PerkType.PERK:
            return 'perk'
        case PerkType.MASTER:
            return 'master'
    }
}

export const PerksLayer = () => {
    const dispatch = useDispatch();

    const bodyAttribute = useSelector(characterSelectors.attributes);
    const currentPerks = useSelector(characterSelectors.perks);


    const getPerkTileState = useCallback((perk: Perk) => {
        return getPerkState(perk, currentPerks, bodyAttribute);
    }, [bodyAttribute.BODY.value, currentPerks])

    const handleAddPerk = useCallback((perk: Perk) => {
        const state = getPerkTileState(perk)
        if (state === 'available') {
            dispatch(characterSliceActions.addPerk({
                id: perk.id,
                value: 1
            }))
        } else if (state === 'invested') {
            const maxValue = perk.levels;
            const currentValue = currentPerks.find(p => p.id === perk.id)?.value ?? 0;
            if (maxValue === currentValue) return;
            dispatch(characterSliceActions.addPerk({
                id: perk.id,
                value: currentValue + 1
            }))
        }
    }, [getPerkTileState])

    const perksData = useMemo(() => {
        return bodyPerksData.map((perk) => {
            return {
                ...perk,
                dataPerkState: getPerkTileState(perk),
                dataPerkTileState: getPerkTileState(perk),
                currentPoints: currentPerks.find(p => p.id === perk.id)?.value ?? 0,
            }
        })
    }, [getPerkTileState])

    return <div className={styles.container}>
        {perksData.map(perk => <div
            data-perk-type={getDataPerkType(perk.type)}
            data-perk-state={perk.dataPerkState}
            className={`${styles.tile} ${perk.tileClassName}`}
            onClick={() => handleAddPerk(perk)}
        >
            <div data-perk-tile="true" data-perk-tile-state={perk.dataPerkTileState}></div>
            {perk.dataPerkState === 'not-connected' && <div data-lock="true"></div>}
            {perk.type === PerkType.MILESTRONE && <div className={styles.points} data-state={perk.dataPerkState}>
                {perk.currentPoints} / {perk.levels}
            </div>}
        </div>)}
        <LockedSeparator attribute={AttributeName.BODY}/>
    </div>
}