import styles from './InventorySlots.module.scss';
import {InventorySlotsSection} from "./InventorySlotsSection.tsx";
import {InventorySlotSize} from "./InventorySlot.types.ts";

export const InventorySlots = () => {
    return <div className={styles.container}>
        <div className={styles.column}>
            <InventorySlotsSection title="_CYBERWARE" align="left" slots={[
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
            ]}/>
            <InventorySlotsSection title="_QUICKACCESS" align="left" slots={[
                [
                    {
                        size: InventorySlotSize.SQUARE
                    },
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
                [
                    {
                        size: InventorySlotSize.SQUARE
                    },
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
            ]}/>
            <InventorySlotsSection title="_WEAPONS" align="left" slots={[
                [
                    {
                        size: InventorySlotSize.RECTANGLE_HORIZONTAL
                    }
                ],
                [
                    {
                        size: InventorySlotSize.RECTANGLE_HORIZONTAL
                    }
                ],
                [
                    {
                        size: InventorySlotSize.RECTANGLE_HORIZONTAL
                    }
                ],
            ]}/>
        </div>
        <div className={styles.column}>
            <InventorySlotsSection title="_SQUARE" align="right" slots={[
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
            ]}/>
            <InventorySlotsSection title="_UPPERBODY" align="right" slots={[
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
            ]}/>
            <InventorySlotsSection title="_LOWERBODY" align="right" slots={[
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
                [
                    {
                        size: InventorySlotSize.SQUARE
                    }
                ],
            ]}/>
            <InventorySlotsSection title="_LOWERBODY" align="right" slots={[
                [
                    {
                        size: InventorySlotSize.RECTANGLE_VERTICAL
                    }
                ],
            ]}/>
        </div>
    </div>
}