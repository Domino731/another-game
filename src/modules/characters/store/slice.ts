import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {CharacterModel, CharacterPerkModel} from "../../../Models/character.ts";
import type {SetAttributePayload} from "./slice.types.ts";
import {Perks} from "../../../Models/perks.ts";

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
            state.perks.push(action.payload)
        }
    },
})

export const characterSliceActions = characterSlice.actions

export const characterReducer = characterSlice.reducer