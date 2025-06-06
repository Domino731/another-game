import styles from './CharacterPerks.module.scss'
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";
import {ConnectionsLayer} from "./ConnectionsLayer/ConnectionsLayer.tsx";
import {PerksLayer} from "./PerksLayer/PerksLayer.tsx";

export const CharacterPerks = () => {
    return <div className={styles.container}>
        <TransformWrapper
            defaultScale={1}
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
    </div>
}