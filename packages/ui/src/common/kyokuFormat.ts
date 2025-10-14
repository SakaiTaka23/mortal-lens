export const convertKyokuFormat = (
  bakaze: 'E' | 'S' | 'W',
  kyoku: number,
  honba: number,
): string => `${bakaze}${kyoku}-${honba}`;
