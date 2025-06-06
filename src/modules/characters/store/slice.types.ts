import type {AttributeName} from "../../../Models/character.ts";

export interface SetAttributePayload {
    name: AttributeName;
    value: number;
}