import styles from './PerksLayer.module.scss';
import bodyPerks from './bodyPerks.module.scss';
import {useSelector} from "react-redux";
import {characterSelectors} from "../../../store/selectors.ts";
import {useCallback, useMemo} from "react";
import {LockedSeparator} from "./lockedSeparator/LockedSeparator.tsx";
import {AttributeName, type CharacterPerkModel} from "../../../../../Models/character.ts";
import {Perks} from "../../../../../Models/perks.ts";
import {useDispatch} from "react-redux";
import {characterSliceActions} from "../../../store/slice.ts";

enum PerkType {
    MILESTRONE,
    PERK,
    MASTER
}

interface Perk {
    tileClassName: string;
    type: PerkType;
    requiredAttributes: number;
    requiredPerks?: Perks[];
    id: Perks;
    levels: number;
}

const perks: Perk[] = [
    {
        id: Perks.DORPH_HEAD,
        tileClassName: bodyPerks.bodyPerkDorphHead,
        type: PerkType.PERK,
        requiredAttributes: 4,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1
    },
    {
        id: Perks.COMEBACK_KID,
        tileClassName: bodyPerks.bodyPerkComebackKid,
        type: PerkType.PERK,
        requiredAttributes: 4,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1
    },
    {
        id: Perks.PAINKILLER,
        tileClassName: bodyPerks.bodyPerkPainkiller,
        type: PerkType.MILESTRONE,
        requiredAttributes: 4,
        requiredPerks: [],
        levels: 1
    },
    {
        id: Perks.SPEED_JUNKIE,
        tileClassName: bodyPerks.bodyPerkSpeedJunkie,
        type: PerkType.PERK,
        requiredAttributes: 4,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1
    },
    {
        id: Perks.ARMY_OF_ONE,
        tileClassName: bodyPerks.bodyPerkArmyOfOne,
        type: PerkType.PERK,
        requiredAttributes: 4,
        requiredPerks: [Perks.PAINKILLER],
        levels: 1
    },
    {
        id: Perks.FURY_ROAD,
        tileClassName: bodyPerks.bodyPerkFuryRoad,
        type: PerkType.MILESTRONE,
        requiredAttributes: 4,
        requiredPerks: [],
        levels: 1
    },
    // {
    //     tileClassName: bodyPerks.bodyPerkBulletBallet,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkKineticAbsorption,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkFlySwatter,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkDieDieDie,
    //     type: PerkType.MILESTRONE
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkWreckingBall,
    //     type: PerkType.MILESTRONE
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkLikeAFeather,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkDontStopMeNow,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkBreakthrough,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkClapback,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkSkullcracker,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkRushOfBlood,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkJuggernaut,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkCalmMind,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkAftershock,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkEpicenter,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkSpontaneousObliteration,
    //     type: PerkType.MILESTRONE
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkAdrenalineRush,
    //     type: PerkType.MILESTRONE
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkQuake,
    //     type: PerkType.MILESTRONE
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkCloseQuartersCarnage,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkDread,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkBloodlust,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkUnstoppableForce,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkRippleEffect,
    //     type: PerkType.PERK
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkRipAndTear,
    //     type: PerkType.MASTER
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkOnslaught,
    //     type: PerkType.MASTER
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkPainToGain,
    //     type: PerkType.MASTER
    // },
    // {
    //     tileClassName: bodyPerks.bodyPerkFinisherSavageSling,
    //     type: PerkType.MASTER
    // },
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
        if (perk.requiredAttributes >= bodyAttribute.BODY.value) {
            const hasPerk = currentPerks.find((el: CharacterPerkModel) => el.id === perk.id);
            if (hasPerk) {
                if (perk.levels === hasPerk.value) {
                    return 'maxed'
                }
            }
            if (perk.requiredPerks?.length === 0) {
                return 'available'
            } else if (currentPerks.find((el: CharacterPerkModel) => perk.requiredPerks?.includes(el.id))) {
                return 'available';
            } else {
                return 'not-connected'
            }
        }
        return 'locked'
    }, [bodyAttribute.BODY.value, currentPerks])

    const handleAddPerk = useCallback((perk: Perk) => {
        console.log(123);
        dispatch(characterSliceActions.addPerk({
            id: perk.id,
            value: 1
        }))
    }, [])

    const perksData = useMemo(() => {
        return perks.map((perk) => {
            return {
                ...perk,
                dataPerkState: getPerkTileState(perk),
                dataPerkTileState: getPerkTileState(perk)
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
        </div>)}
        <LockedSeparator attribute={AttributeName.BODY}/>
    </div>
}