import styles from './CharacterPerks.module.scss'
import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";
import {ConnectionsLayer} from "./ConnectionsLayer/ConnectionsLayer.tsx";
import {PerksLayer} from "./PerksLayer/PerksLayer.tsx";
import {AttributesNav} from "../AttributesNav/AttributesNav";
import {ActionBar} from "../CharacterAttributes/ActionBar/ActionBar";

import {AttributeModel} from "../../../../Models/attributes";
import {
    BODY_ATTRIBUTE, COOL_ATTRIBUTE,
    INTELLIGENCE_ATTRIBUTE, REFLEX_ATTRIBUTE,
    RELIC_ATTRIBUTE,
    TECHNICAL_ABILITY_ATTRIBUTE
} from "../../../../config/attributes";

interface CharacterPerksProps {
    data: AttributeModel;
}

const CharacterPerks = ({data}: CharacterPerksProps) => {
    return <div className={styles.container}>
        <AttributesNav/>
        <TransformWrapper
            defaultPositionX={200}
            defaultPositionY={400}
        >
            <TransformComponent>
                <div className={styles.perksContainer}>
                    <ConnectionsLayer containerClassName={data.connectionsClassName}
                                      connectionsData={data.perksConnections}/>
                    <PerksLayer perksData={data.perksData}/>
                </div>
            </TransformComponent>
        </TransformWrapper>
        <ActionBar/>
    </div>
}

export const CharacterBodyPerks = () => <CharacterPerks data={BODY_ATTRIBUTE}/>
export const CharacterCoolPerks = () => <CharacterPerks data={COOL_ATTRIBUTE}/>
export const CharacterIntelligencePerks = () => <CharacterPerks data={INTELLIGENCE_ATTRIBUTE}/>
export const CharacterReflexesPerks = () => <CharacterPerks data={REFLEX_ATTRIBUTE}/>
export const CharacterRelicPerks = () => <CharacterPerks data={RELIC_ATTRIBUTE}/>
export const CharacterTechnicalAbilityPerks = () => <CharacterPerks data={TECHNICAL_ABILITY_ATTRIBUTE}/>