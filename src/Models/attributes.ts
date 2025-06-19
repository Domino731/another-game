import {IconName} from "../components/Icon/Icon";
import {PerkConnectionModel} from "./perks";
import {Perk} from "../modules/characters/pages/CharacterPerks/utils";

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
    perksRoute: string;
    perksData: Perk[]
    perksConnections: PerkConnectionModel[];
    connectionsClassName: string;
}
