import styles from './InventorySlot.module.scss'
import {type InventorySlotProps, InventorySlotSize} from "./InventorySlot.types.ts";
import classNames from 'classnames';

export const InventorySlot = ({size}: InventorySlotProps) => {
    const containerClass = classNames(styles.container, {
        [styles.containerSquare]: size === InventorySlotSize.SQUARE,
        [styles.containerRectangleHorizontal]: size === InventorySlotSize.RECTANGLE_HORIZONTAL,
        [styles.containerRectangleVertical]: size === InventorySlotSize.RECTANGLE_VERTICAL,
    })

    return <div className={containerClass}>
        <div className={styles.content}>

        </div>
    </div>
}