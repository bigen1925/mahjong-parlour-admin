export const SEAT = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
} as const;
export type SEAT = typeof SEAT[keyof typeof SEAT];

export const GENDER = { MALE: 0, FEAMLE: 1 } as const;
export type GENDER = typeof GENDER[keyof typeof GENDER];
