export interface InventorySlotProps {
    size: InventorySlotSize;
}

export enum InventorySlotSize {
    SQUARE = 'SQUARE',
    RECTANGLE_HORIZONTAL = 'RECTANGLE_HORIZONTAL',
    RECTANGLE_VERTICAL = 'RECTANGLE_VERTICAL',
}