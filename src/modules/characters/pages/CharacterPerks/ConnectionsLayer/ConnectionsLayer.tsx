import styles from './ConnectionsLayer.module.scss';
import {useMemo} from "react";
import {bodyPerksData} from "../PerksLayer/PerksLayer";
import {useSelector} from "react-redux";
import {characterSelectors} from "../../../store/selectors";

interface Connection {
    className: string
    id: number
}

const connections: Connection[] = [
    {className: styles.connection1, id: 1},
    {className: styles.connection2, id: 2},
    {className: styles.connection3, id: 3},
    {className: styles.connection4, id: 4},
    {className: styles.connection5, id: 5},
    {className: styles.connection6, id: 6},
    {className: styles.connection7, id: 7},
    {className: styles.connection8, id: 8},
    {className: styles.connection9, id: 9},
    {className: styles.connection10, id: 10},
    {className: styles.connection11, id: 11},
    {className: styles.connection12, id: 12},
    {className: styles.connection13, id: 13},
    {className: styles.connection14, id: 14},
    {className: styles.connection15, id: 15},
    {className: styles.connection16, id: 16},
    {className: styles.connection17, id: 17},
    {className: styles.connection18, id: 18},
    {className: styles.connection19, id: 19},
    {className: styles.connection20, id: 20},
    {className: styles.connection21, id: 21},
    {className: styles.connection22, id: 22},
    {className: styles.connection23, id: 23},
    {className: styles.connection24, id: 24},
    {className: styles.connection25, id: 25},
    {className: styles.connection26, id: 26},
    {className: styles.connection27, id: 27},
    {className: styles.connection28, id: 28},
    {className: styles.connection29, id: 29},
    {className: styles.connection30, id: 30},
    {className: styles.connection31, id: 31}
];

export const ConnectionsLayer = () => {

    const bodyAttribute = useSelector(characterSelectors.attributes);
    const currentPerks = useSelector(characterSelectors.perks);

    const connectionsData = useMemo(() => {
        return connections.map((el) => {
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
    }, [currentPerks])

    return <div className={styles.container}>
        {connectionsData.map(({id, state}) => <span key={id} data-state={state} data-connection-id={id}
        ><strong>{id}</strong></span>)}
    </div>
}