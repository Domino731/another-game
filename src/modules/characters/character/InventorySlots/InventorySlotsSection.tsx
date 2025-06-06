import {InventorySlot} from "./InventorySlot.tsx";
import {type InventorySlotsSectionProps} from "./InventorySlotsSection.types";
import {Typography} from "@mui/material";
import styles from './InventorySlotsSection.module.scss'
import classNames from 'classnames';

export const InventorySlotsSection = ({title, align, slots}: InventorySlotsSectionProps) => {
    const containerClass = classNames({
        [styles.container]: true,
        [styles.containerLeft]: align === 'left',
        [styles.containerRight]: align === 'right',
    })

    return <div className={containerClass}>
        <Typography className={styles.title} variant="h6">{title}</Typography>
        {slots.map((slotRow, index) => <div key={index} className={styles.slotRow}>
            {slotRow.map((slot, index) => <InventorySlot size={slot.size} key={index}/>)}
        </div>)}
    </div>
}