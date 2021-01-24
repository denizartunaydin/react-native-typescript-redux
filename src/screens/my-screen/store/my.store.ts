import {MINUS_VALUE, MyActionTypes, PLUS_VALUE} from './my.action';

export interface myStateModel {
  value: number;
}

const initialState: myStateModel = {
  value: 0,
};

export function myReducer(
  state = initialState,
  action: MyActionTypes,
): myStateModel {
  switch (action.type) {
    case PLUS_VALUE:
      return {
        ...state,
        value: state.value + 1,
      };

    case MINUS_VALUE:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
}
