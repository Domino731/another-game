import {createSelector} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store/store.ts";

const root = (state: RootState) => state.characterReducer;

const attributes = createSelector(root, (state) => state.attributes)
const perks = createSelector(root, state => state.perks);
const perkPoints = createSelector(root, state => state.perkPoints);
const attributePoints = createSelector(root, state => state.attributePoints)

export const characterSelectors = {
    attributes,
    perks,
    perkPoints,
    attributePoints

}