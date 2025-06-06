import styles from "./CharacterCard.module.scss";
import type {CharacterCardProps} from "./CharacterCard.types.ts";
import classNames from "classnames";

export const CharacterCard = ({cardStyleType}: CharacterCardProps) => {
    const containerClassNames = classNames(styles.container, {
        [styles.containerLeft]: cardStyleType === "left",
        [styles.containerCenter]: cardStyleType === "center",
        [styles.containerRight]: cardStyleType === "right",
    })

    return <div className={containerClassNames}>
        <div className={styles.content}></div>
    </div>
}