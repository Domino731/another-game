import {AttributeName, type CharacterAttributesModel} from "../../../../../../Models/character.ts";

export const BODY_TIERS = {
    FIRST: 4,
    SECOND: 9,
    THIRD: 15,
    FOURTH: 20,
}


export const getSeparatorTier = (attributeName: AttributeName, characterAttributes: CharacterAttributesModel) => {
    if (characterAttributes.BODY.value > 19) {
        return 4
    }
    if (characterAttributes.BODY.value < 4) {
        return 0;
    } else if (characterAttributes.BODY.value < 9) {
        return 1;
    } else if (characterAttributes.BODY.value < 15) {
        return 2;
    } else if (characterAttributes.BODY.value < 20) {
        return 3;
    }
}