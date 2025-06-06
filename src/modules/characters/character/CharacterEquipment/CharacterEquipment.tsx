import styles from './CharacterEquipment.module.scss';
import {InventoryItemGroupBar} from "./InventoryItemGroupBar/InventoryItemGroupBar";
import {Inventory} from "./Inventory/Inventory.tsx";

export const CharacterEquipment = () => {
    return <div className={styles.container}>
        <InventoryItemGroupBar/>
        <Inventory/>
    </div>
}