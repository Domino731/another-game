import {Perks} from "./perks";

export enum AttributeName {
    BODY = 'BODY',
    REFLEX = 'REFLEX',
    INTELLIGENCE = 'INTELLIGENCE',
    TECHNICAL_ABILITY = 'TECHNICAL_ABILITY',
    COOL = 'COOL',
    RELIC = 'RELIC'
}

export interface CharacterAttributesModel {
    BODY: { value: number }
    REFLEX: { value: number }
    INTELLIGENCE: { value: number }
    TECHNICAL_ABILITY: { value: number }
    COOL: { value: number }
    RELIC: { value: number }
}

export interface CharacterPerkModel {
    id: Perks;
    value: number;
}

export interface CharacterModel {
    attributes: CharacterAttributesModel;
    perks: CharacterPerkModel[];
    perkPoints: number;
    attributePoints: number;
}