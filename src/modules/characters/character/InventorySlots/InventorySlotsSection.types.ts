import {InventorySlotSize} from "./InventorySlot.types.ts";

export interface InventorySlotsSectionProps {
    title: string;
    align: 'left' | 'right';
    slots: InventorySlotType[][];
}

export interface InventorySlotType {
    size: InventorySlotSize;
}