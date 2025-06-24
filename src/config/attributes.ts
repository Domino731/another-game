import {AttributeModel, AttributeName} from "../Models/attributes";
import {IconName} from "../components/Icon/Icon";
import {ROUTES} from "../modules/app/routes";
import {bodyPerkConnections, bodyPerksData} from "./perks/body-perks";
import {reflexConnectionData, reflexesPerksData} from "./perks/reflexes-perks";
import {intelligencePerkConnections, intelligencePerksData} from "./perks/intelligence-perks";
import {technicalAbilityConnections, technicalAbilityPerksData} from "./perks/technical-ability-perks";
import {coolConnectionsData, coolPerksData} from "./perks/cool-perks";
import {relicConnectionsData, relicPerksData} from "./perks/relic-perks";
import bodyConnectionsStyles from './perks/body-perk-connection.module.scss';
import coolConnectionsStyles from './perks/cool-perks-connections.module.scss';
import intelligenceConnectionsStyles from './perks/intelligence-perks-connections.module.scss';
import reflexConnectionStyles from './perks/reflex-perks-connections.module.scss';
import technicalAbilityConnectionsStyles from './perks/technical-ability-perks-connections.module.scss';

const maxValue = 20;

export const BODY_ATTRIBUTE: AttributeModel = {
    id: AttributeName.BODY,
    label: 'Body',
    maxValue,
    iconName: IconName.ATTRIBUTE_BODY,
    perksRoute: ROUTES.characterPerksBody,
    perksData: bodyPerksData,
    perksConnections: bodyPerkConnections,
    connectionsClassName: bodyConnectionsStyles.container
}


export const REFLEX_ATTRIBUTE: AttributeModel = {
    id: AttributeName.REFLEX,
    label: 'Reflex',
    maxValue,
    iconName: IconName.ATTRIBUTE_REFLEXES,
    perksRoute: ROUTES.characterPerksReflexes,
    perksData: reflexesPerksData,
    perksConnections: reflexConnectionData,
    connectionsClassName: reflexConnectionStyles.container
}

export const INTELLIGENCE_ATTRIBUTE: AttributeModel = {
    id: AttributeName.INTELLIGENCE,
    label: 'Intelligence',
    maxValue,
    iconName: IconName.ATTRIBUTE_INTELLIGENCE,
    perksRoute: ROUTES.characterPerksIntelligence,
    perksData: intelligencePerksData,
    perksConnections: intelligencePerkConnections,
    connectionsClassName: intelligenceConnectionsStyles.container
}
export const TECHNICAL_ABILITY_ATTRIBUTE: AttributeModel = {
    id: AttributeName.TECHNICAL_ABILITY,
    label: 'Technical Ability',
    maxValue,
    iconName: IconName.ATTRIBUTE_TECHNICAL_ABILITY,
    perksRoute: ROUTES.characterPerksTechnicalAbility,
    perksData: technicalAbilityPerksData,
    perksConnections: technicalAbilityConnections,
    connectionsClassName: technicalAbilityConnectionsStyles.container
}
export const COOL_ATTRIBUTE: AttributeModel = {
    id: AttributeName.COOL,
    label: 'Cool',
    maxValue,
    iconName: IconName.ATTRIBUTE_COOL,
    perksRoute: ROUTES.characterPerksCool,
    perksData: coolPerksData,
    perksConnections: coolConnectionsData,
    connectionsClassName: coolConnectionsStyles.container

}
export const RELIC_ATTRIBUTE: AttributeModel = {
    id: AttributeName.RELIC,
    label: 'Relic',
    maxValue,
    iconName: IconName.ATTRIBUTE_RELIC,
    perksRoute: ROUTES.characterPerksRelic,
    perksData: relicPerksData,
    perksConnections: relicConnectionsData
}
export const GAME_ATTRIBUTES: Array<AttributeModel> = [
    BODY_ATTRIBUTE,
    REFLEX_ATTRIBUTE,
    INTELLIGENCE_ATTRIBUTE,
    TECHNICAL_ABILITY_ATTRIBUTE,
    COOL_ATTRIBUTE,
    RELIC_ATTRIBUTE
]