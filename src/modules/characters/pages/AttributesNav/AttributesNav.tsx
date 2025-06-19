import styles from './AttributesNav.module.scss'
import {GAME_ATTRIBUTES} from "../../../../config/attributes";
import {AttributeName} from "../../../../Models/attributes";
import {Icon} from "../../../../components/Icon/Icon";
import {useDispatch, useSelector} from 'react-redux';
import {characterSelectors} from "../../store/selectors";
import {useCallback} from "react";
import {characterSliceActions} from "../../store/slice";
import {Link} from "react-router-dom";

export const AttributesNav = () => {
    const dispatch = useDispatch();

    const active: AttributeName = AttributeName.BODY;
    const attributes = useSelector(characterSelectors.attributes);
    const attributePoints = useSelector(characterSelectors.attributePoints);

    const getPoints = useCallback((perkId: AttributeName) => {
        return attributes[perkId]?.value || 0;
    }, [attributes])

    const handleAddPoint = useCallback((attributeId: AttributeName) => {
        if (attributePoints) {
            dispatch(characterSliceActions.addAttributePoints(attributeId))
        }
    }, [attributePoints, dispatch])

    const handleRemovePoint = useCallback((attributeId: AttributeName) => {
        dispatch(characterSliceActions.removeAttributePoints(attributeId))
    }, [dispatch])


    return <div className={styles.container}>
        <div className={styles.attributes}>
            {GAME_ATTRIBUTES.map(attribute => <div id={attribute.id}
                                                   className={`${styles.attributeItem} ${active === attribute.id && styles.attributeItemActive}`}>
                <Link to={attribute.perksRoute} className={styles.content}>
                    <div className={styles.stats}>
                        <Icon name={attribute.iconName} size={32}/>
                        <div className={styles.points}>{getPoints(attribute.id)}</div>
                    </div>
                    <div className={styles.name}>
                        {attribute.label}
                    </div>
                </Link>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.buttonSub}`} disabled={getPoints(attribute.id) === 0}
                            onClick={() => handleRemovePoint(attribute.id)}>

                    </button>
                    <button className={`${styles.button} ${styles.buttonAdd}`}
                            disabled={getPoints(attribute.id) === attribute.maxValue || !attributePoints}
                            onClick={() => handleAddPoint(attribute.id)}>

                    </button>
                </div>
            </div>)}
        </div>
    </div>
}