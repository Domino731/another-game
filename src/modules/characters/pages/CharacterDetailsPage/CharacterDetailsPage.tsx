import styles from './CharacterDetailsPage.module.scss';
import {SelectCharacterBar} from "../../character/SelectCharacterBar/SelectCharacterBar.tsx";
import {CharacterOverview} from "../../character/CharacterOverview/CharacterOverview.tsx";
import {CharacterEquipment} from "../../character/CharacterEquipment/CharacterEquipment.tsx";
import {SectionSelectBar} from "../../character/SectionSelectBar/SectionSelectBar.tsx";
import {InventorySlots} from "../../character/InventorySlots/InventorySlots.tsx";

export const CharacterDetailsPage = () => {
    return <div className={styles.container}>
        <div className={styles.selectBar}>
            <SelectCharacterBar/>
        </div>
        <div className={styles.characterPanel}>
            <CharacterOverview/>
            <InventorySlots/>
            <CharacterEquipment/>
        </div>
        <div className={styles.selectBar}>
            <SectionSelectBar/>
        </div>
    </div>
}