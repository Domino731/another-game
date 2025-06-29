import styles from './PerksLayer.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {characterSelectors} from "../../../store/selectors.ts";
import {useCallback, useMemo} from "react";
import {LockedSeparator} from "./lockedSeparator/LockedSeparator.tsx";
import {AttributeName} from "../../../../../Models/character.ts";
import {characterSliceActions} from "../../../store/slice.ts";
import {getPerkState, type Perk, PerkType} from '../utils';
import {PerkTooltip} from "../PerkTooltip/PerkTooltip";


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


interface PerksLayerProps {
    perksData: Perk[];
}

export const PerksLayer = ({perksData}: PerksLayerProps) => {
    const dispatch = useDispatch();

    const bodyAttribute = useSelector(characterSelectors.attributes);
    const currentPerks = useSelector(characterSelectors.perks);


    const getPerkTileState = useCallback((perk: Perk) => {
        return getPerkState(perk, currentPerks, bodyAttribute);
    }, [bodyAttribute, currentPerks])

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
    }, [currentPerks, dispatch, getPerkTileState])

    const perks = useMemo(() => {
        return perksData.map((perk) => {
            return {
                ...perk,
                dataPerkState: getPerkTileState(perk),
                dataPerkTileState: getPerkTileState(perk),
                currentPoints: currentPerks.find(p => p.id === perk.id)?.value ?? 0,
            }
        })
    }, [currentPerks, getPerkTileState, perksData])

    return <div className={styles.container}>
        {perks.map(perk => <PerkTooltip perk={perk} key={perk.id}>
            <div
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
            </div>
        </PerkTooltip>)}
        <LockedSeparator attribute={AttributeName.BODY}/>
    </div>
}