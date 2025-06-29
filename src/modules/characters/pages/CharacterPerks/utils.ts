import type {CharacterAttributesModel, CharacterPerkModel} from "../../../../Models/character";
import {Perks} from "../../../../Models/perks";

export enum PerkType {
    MILESTRONE,
    PERK,
    MASTER
}

export interface Perk {
    tileClassName: string;
    type: PerkType;
    requiredAttributes: number;
    requiredPerks: Perks[];
    id: Perks;
    levels: number;
    connections: number[];
    name?: string;
    limitationDescription?: string;
    description?: string;
}

export const getPerkState = (perk: Perk, currentPerks: CharacterPerkModel[], attributes: CharacterAttributesModel) => {
    if (perk.requiredAttributes <= attributes.BODY.value) {
        const hasPerk = currentPerks.find((el: CharacterPerkModel) => el.id === perk.id);
        if (hasPerk) {
            if (perk.levels === hasPerk.value) {
                return 'maxed'
            } else {
                return "invested";
            }
        }
        if (perk.requiredPerks?.length === 0) {
            return 'available'
        }
        let hasRequiredPerks = currentPerks.filter((el) => perk.requiredPerks.includes(el.id)).length;

        if (hasRequiredPerks === perk.requiredPerks.length) {
            return 'available';
        } else {
            return 'not-connected'
        }
    }
    return 'locked'
}