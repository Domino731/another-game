import styles from './CharacterPerks.module.scss'
import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";
import {ConnectionsLayer} from "./ConnectionsLayer/ConnectionsLayer.tsx";
import {PerksLayer} from "./PerksLayer/PerksLayer.tsx";
import {AttributesNav} from "../AttributesNav/AttributesNav";
import {ActionBar} from "../CharacterAttributes/ActionBar/ActionBar";

export const CharacterPerks = () => {
    return <div className={styles.container}>
        <AttributesNav/>
        <TransformWrapper
            defaultPositionX={200}
            defaultPositionY={400}
        >
            <TransformComponent>
                <div className={styles.perksContainer}>
                    <ConnectionsLayer/>
                    <PerksLayer/>
                </div>
            </TransformComponent>
        </TransformWrapper>
        <ActionBar/>
    </div>
}