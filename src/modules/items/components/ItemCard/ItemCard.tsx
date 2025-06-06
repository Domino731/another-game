import type {ItemCardProps} from "./ItemCard.types.ts";
import styles from './ItemCard.module.scss';
import {Typography} from "@mui/material";
import {GAME_COLORS} from "../../../app/styles/colors.ts";

export const ItemCard = ({title, isActive}: ItemCardProps) => {
    return <div className={styles.container}>
        <span className={styles.itemRarityContainer}/>
        <div className={styles.itemContainer}>
            <div className={styles.itemContent}>
                <div className={styles.itemSlots}>
                    <span className={styles.itemSlot}></span>
                    <span className={styles.itemSlot}></span>
                </div>
                <div className={styles.itemAmmoType}>
                    <Typography variant="body2" color={GAME_COLORS.lightBlue}>12</Typography>
                </div>
                <div>
                    <Typography variant="body1" color={GAME_COLORS.lightBlue}>MACHINEGUN</Typography>
                </div>
            </div>
        </div>
        <div data-corners="true">
            <span className={styles.topLeftCorner}></span>
            <span className={styles.topRightCorner}></span>
            <span className={styles.bottomLeftCorner}></span>
            <span className={styles.bottomRightCorner}></span>
        </div>

    </div>
}