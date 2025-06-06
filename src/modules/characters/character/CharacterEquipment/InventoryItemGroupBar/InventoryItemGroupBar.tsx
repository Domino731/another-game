import styles from './InventoryItemGroupBar.module.scss'
import {EQUIPMENT_SECTIONS, EquipmentSection} from "../../../const.ts";
import {IconButton} from "@mui/material";
import HardwareIcon from '@mui/icons-material/Hardware';
import {useCallback} from "react";
import {Tooltip} from '../../../../../components/Tooltip/Tooltip.tsx'

export const InventoryItemGroupBar = () => {

    const getIconButtonContainerClassName = useCallback((index: number) => {
        switch (index) {
            case 0:
                return [styles.iconButtonContainer, styles.iconButtonContainerFirst].join(' ');
            case EQUIPMENT_SECTIONS.length - 1:
                return [styles.iconButtonContainer, styles.iconButtonContainerLast].join(' ');
            default:
                return styles.iconButtonContainer
        }
    }, [])

    const getIconButtonClassName = useCallback((index: number) => {
        switch (index) {
            case 0:
                return [styles.iconButton, styles.iconButtonFirst].join(' ');
            case EQUIPMENT_SECTIONS.length - 1:
                return [styles.iconButton, styles.iconButtonLast].join(' ');
            default:
                return styles.iconButton
        }
    }, [])

    const handleSelectSection = useCallback((sectionId: EquipmentSection) => {
        console.log(sectionId);
    }, [])

    return <div className={styles.container}>
        <div className={styles.content}>
            {EQUIPMENT_SECTIONS.map(({name, value}, index) => <div
                className={getIconButtonContainerClassName(index)}>
                <Tooltip title={name}>
                    <IconButton
                        onClick={() => handleSelectSection(value)}
                        className={getIconButtonClassName(index)}>
                        <HardwareIcon/>
                    </IconButton>
                </Tooltip>
            </div>)}
        </div>
    </div>
}