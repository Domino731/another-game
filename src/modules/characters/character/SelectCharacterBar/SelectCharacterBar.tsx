import styles from './SelectCharacterBar.module.scss'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {CharacterCard} from "./CharacterCard.tsx";

export const SelectCharacterBar = () => {
    return <div className={styles.container}>
        <div className={styles.selectWrapper}>
            <div className={styles.content}>
                <div className={styles.charactersList}>
                    <CharacterCard cardStyleType="left"/>
                    <CharacterCard cardStyleType="center"/>
                    <CharacterCard cardStyleType="center"/>
                    <CharacterCard cardStyleType="center"/>
                    <CharacterCard cardStyleType="center"/>
                    <CharacterCard cardStyleType="right"/>
                </div>
            </div>

        </div>
        <div className={`${styles.navButton} ${styles.leftButton}`}>
            <ArrowLeftIcon/>
        </div>
        <div className={`${styles.navButton} ${styles.rightButton}`}>
            <ArrowRightIcon/>
        </div>
    </div>
}