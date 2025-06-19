import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {CharacterModel, CharacterPerkModel} from "../../../Models/character.ts";
import type {SetAttributePayload} from "./slice.types.ts";
import {Perks} from "../../../Models/perks.ts";
import {AttributeName} from "../../../Models/attributes";

type CharacterState = CharacterModel;

const initialState: CharacterState = {
    attributes: {
        BODY: {value: 4},
        REFLEX: {value: 0},
        INTELLIGENCE: {value: 0},
        TECHNICAL_ABILITY: {value: 0},
        COOL: {value: 0},
        RELIC: {value: 0},
    },
    perkPoints: 3,
    attributePoints: 4,
    perks: []
}

export const characterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAttribute: (state, action: PayloadAction<SetAttributePayload>) => {
            const {name, value} = action.payload;
            state.attributes[name].value = value;
        },
        addPerk: (state, action: PayloadAction<CharacterPerkModel>) => {
            const index = state.perks.findIndex(perk => perk.id === action.payload.id);
            if (index !== -1) {
                state.perks[index] = action.payload;
            } else {
                state.perks.push(action.payload)
            }

        },
        addAttributePoints: (state, action: PayloadAction<AttributeName>) => {
            if (state.attributePoints) {
                state.attributes[action.payload].value += 1;
                state.attributePoints -= 1;
            }

        },
        removeAttributePoints: (state, action: PayloadAction<AttributeName>) => {
            state.attributes[action.payload].value -= 1;
            state.attributePoints += 1;
        }
    },
})

export const characterSliceActions = characterSlice.actions

export const characterReducer = characterSlice.reducer