export const PLUS_VALUE = 'PLUS_VALUE';
interface SumValueSetActionType {
  type: typeof PLUS_VALUE;
}

export const MINUS_VALUE = 'MINUS_VALUE';
interface MinusValueSetActionType {
  type: typeof MINUS_VALUE;
}

export type MyActionTypes = SumValueSetActionType | MinusValueSetActionType;

export function plusValue(): MyActionTypes {
  return {
    type: PLUS_VALUE,
  };
}

export function minusValue(): MyActionTypes {
  return {
    type: MINUS_VALUE,
  };
}
