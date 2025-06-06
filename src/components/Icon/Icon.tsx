import attributeCool from '../../assets/icons/attribute-cool.png';
import attributeBody from '../../assets/icons/attribute-body.png';
import attributeTechnicalAbility from '../../assets/icons/attribute-technical-ability.png';
import attributeRelic from '../../assets/icons/attribute-relic.png';
import attributeReflex from '../../assets/icons/attribute-reflex.png';
import attributeIntelligence from '../../assets/icons/attribute-intelligence.png';
import attributePoint from '../../assets/icons/attribute-plus.png';
import perkPoint from '../../assets/icons/perk-point.png';

export enum IconName {
    ATTRIBUTE_BODY = 'ATTRIBUTE_BODY',
    ATTRIBUTE_REFLEXES = 'ATTRIBUTE_REFLEXES',
    ATTRIBUTE_TECHNICAL_ABILITY = 'ATTRIBUTE_TECHNICAL_ABILITY',
    ATTRIBUTE_INTELLIGENCE = 'ATTRIBUTE_INTELLIGENCE',
    ATTRIBUTE_RELIC = 'ATTRIBUTE_RELIC',
    ATTRIBUTE_COOL = 'ATTRIBUTE_COOL',
    ATTRIBUTE_POINT = 'ATTRIBUTE_POINT',
    PERK_POINT = 'PERK_POINT',
}

interface IconProps {
    name: IconName;
    size: number;
}

export const Icon = ({name, size}: IconProps) => {
    let icon = '';
    switch (name) {
        case IconName.ATTRIBUTE_BODY:
            icon = attributeBody;
            break;
        case IconName.ATTRIBUTE_COOL:
            icon = attributeCool
            break;
        case IconName.ATTRIBUTE_INTELLIGENCE:
            icon = attributeIntelligence
            break;
        case IconName.ATTRIBUTE_RELIC:
            icon = attributeRelic;
            break;
        case IconName.ATTRIBUTE_TECHNICAL_ABILITY:
            icon = attributeTechnicalAbility;
            break;
        case IconName.ATTRIBUTE_REFLEXES:
            icon = attributeReflex;
            break;
        case IconName.ATTRIBUTE_POINT:
            icon = attributePoint;
            break;
        case IconName.PERK_POINT:
            icon = perkPoint;
            break;
    }

    return <img src={icon} alt={name} width={size} height={size}/>;
}