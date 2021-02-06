export const SEAT = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
};
export type SEAT = typeof SEAT[keyof typeof SEAT];

export const GENDER = {
  MALE: 0,
  FEMALE: 1,
};
export type GENDER = typeof SEAT[keyof typeof SEAT];
