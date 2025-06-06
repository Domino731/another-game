import styles from './LockedSeparator.module.scss';
import {useSelector} from "react-redux";
import {characterSelectors} from "../../../../store/selectors.ts";
import type {AttributeName} from "../../../../../../Models/character.ts";
import {useMemo} from "react";
import {getSeparatorTier} from "./LockedSeparator.utils.ts";

interface LockedSeparatorProps {
    attribute: AttributeName;
}

export const LockedSeparator = ({attribute}: LockedSeparatorProps) => {
    const characterAttributes = useSelector(characterSelectors.attributes);

    const tier = useMemo(() => getSeparatorTier(attribute, characterAttributes), [attribute, characterAttributes]);

    return <div className={styles.container} data-tier={tier}>
        <div className={styles.text}>
            REQUIRES <strong>BODY 4</strong>
        </div>
    </div>
}