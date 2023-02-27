export type Props = {
    item: TItem;
    onRemove: (index: number) => void;
};

export type TItem = {
    index: number;
    value: number;
};