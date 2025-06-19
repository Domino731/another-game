import styles from './ActionBar.module.scss';
import {Icon, IconName} from "../../../../../components/Icon/Icon.tsx";
import {useSelector} from "react-redux";
import {characterSelectors} from "../../../store/selectors";

export const ActionBar = () => {
    const perkPoints = useSelector(characterSelectors.perkPoints);
    const attributePoints = useSelector(characterSelectors.attributePoints);

    return <div className={styles.container}>
        <div>
            <div className={`${styles.boxTitle} ${styles.boxTitleAttribute}`}>
                <p>{attributePoints}</p>
                <Icon name={IconName.ATTRIBUTE_POINT} size={48}/>
                <p>ATTRIBUTE POINTS</p>
            </div>
            <div className={styles.divider}></div>
            <div className={`${styles.attributeButton} ${styles.attributeButtonAttribute}`}>
                <div className={`${styles.attributeButtonContent} ${styles.attributeButtonContentAttribute}`}>
                    reset all
                    <Icon name={IconName.ATTRIBUTE_POINT} size={24}/>
                </div>

            </div>
        </div>
        <div className={styles.boxPerk}>
            <div className={`${styles.boxTitle} ${styles.boxTitlePerk}`}>
                <p>{perkPoints}</p>
                <Icon name={IconName.PERK_POINT} size={48}/>
                <p>PERK POINTS</p>
            </div>
            <div className={styles.divider}></div>
            <div className={`${styles.attributeButton} ${styles.attributeButtonPerk}`}>
                <div className={`${styles.attributeButtonContent} ${styles.attributeButtonContentPerk}`}>
                    reset all
                    <Icon name={IconName.PERK_POINT} size={24}/>
                </div>

            </div>
        </div>
    </div>
}