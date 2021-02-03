export const SEAT = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
} as const;
export type SEAT = typeof SEAT[keyof typeof SEAT];
