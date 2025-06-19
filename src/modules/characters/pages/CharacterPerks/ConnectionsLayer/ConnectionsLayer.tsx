import styles from './ConnectionsLayer.module.scss';
import {useMemo} from "react";

import {useSelector} from "react-redux";
import {characterSelectors} from "../../../store/selectors";
import {bodyPerksData} from "../../../../../config/perks/body-perks";
import {PerkConnectionModel} from "../../../../../Models/perks";


interface ConnectionsLayerProps {
    connectionsData: PerkConnectionModel[];
    containerClassName: string;
}

export const ConnectionsLayer = ({connectionsData, containerClassName}: ConnectionsLayerProps) => {

    const bodyAttribute = useSelector(characterSelectors.attributes);
    const currentPerks = useSelector(characterSelectors.perks);

    const connections = useMemo(() => {
        return connectionsData.map((el) => {
            const perkData = bodyPerksData.find(perk => perk.connections.includes(el.id));
            let state = 'not-connected';

            if (perkData) {
                const hasPerk = currentPerks.find(perk => perk.id === perkData.id);
                if (bodyAttribute.BODY.value < perkData.requiredAttributes) {
                    state = 'not-connected';
                } else if (hasPerk) {
                    state = 'maxed'
                } else {
                    const requiredPerks = perkData.requiredPerks;
                    const hasRequiredPerks = requiredPerks.every(perkId => currentPerks.find(perk => perk.id === perkId));
                    if (hasRequiredPerks) {
                        state = 'available';
                    }
                }

            }
            return {
                ...el,
                state
            }
        })
    }, [bodyAttribute.BODY.value, connectionsData, currentPerks])

    return <div className={`${styles.container} ${containerClassName}`}>
        {connections.map(({id, state}) => <span key={id} data-state={state} data-connection-id={id}
        ><strong>{id}</strong></span>)}
    </div>
}