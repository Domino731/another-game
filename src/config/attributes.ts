import {AttributeModel, AttributeName} from "../Models/attributes";
import {IconName} from "../components/Icon/Icon";

const maxValue = 20;

export const GAME_ATTRIBUTES: Array<AttributeModel> = [
    {
        id: AttributeName.BODY,
        label: 'Body',
        maxValue,
        iconName: IconName.ATTRIBUTE_BODY
    },
    {
        id: AttributeName.REFLEX,
        label: 'Reflex',
        maxValue,
        iconName: IconName.ATTRIBUTE_REFLEXES
    },
    {
        id: AttributeName.INTELLIGENCE,
        label: 'Intelligence',
        maxValue,
        iconName: IconName.ATTRIBUTE_INTELLIGENCE
    },
    {
        id: AttributeName.TECHNICAL_ABILITY,
        label: 'Technical Ability',
        maxValue,
        iconName: IconName.ATTRIBUTE_TECHNICAL_ABILITY
    },
    {
        id: AttributeName.COOL,
        label: 'Cool',
        maxValue,
        iconName: IconName.ATTRIBUTE_COOL
    },
    {
        id: AttributeName.RELIC,
        label: 'Relic',
        maxValue,
        iconName: IconName.ATTRIBUTE_RELIC
    }
]