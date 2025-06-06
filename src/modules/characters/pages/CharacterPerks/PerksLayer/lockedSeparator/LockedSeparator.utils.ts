import {AttributeName, type AttributesModel} from "../../../../../../Models/character.ts";

export const getSeparatorTier = (attributeName: AttributeName, characterAttributes: AttributesModel) => {
    if (attributeName === AttributeName.BODY) {
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
}