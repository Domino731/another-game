import styles from './Inventory.module.scss'
import {ItemCard} from "../../../../items/components/ItemCard/ItemCard.tsx";

export const Inventory = () => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <li>
                <ItemCard title={'asd'} isActive/>
            </li>
        </div>
    </div>
}