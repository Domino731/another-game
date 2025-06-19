import {IconName} from "../components/Icon/Icon";

export enum AttributeName {
    BODY = 'BODY',
    REFLEX = 'REFLEX',
    INTELLIGENCE = 'INTELLIGENCE',
    TECHNICAL_ABILITY = 'TECHNICAL_ABILITY',
    COOL = 'COOL',
    RELIC = 'RELIC'
}

export interface AttributeModel {
    id: AttributeName;
    label: string;
    maxValue: number;
    iconName: IconName
}
