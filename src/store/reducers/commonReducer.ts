import { NCommonModal } from '../modal/commonModal';
import { NCommonActionTypes } from '../actionTypes';
import { combineReducers } from 'redux';
export function tagsReducer(
  state: NCommonModal.IHeaderTag[] = [],
  action: NCommonModal.IHeaderTagAction
): NCommonModal.IHeaderTag[] {
  switch (action.type) {
    case NCommonActionTypes.ETagTypes.ADD_TAGS: {
      return [...state, action.value];
    }
    case NCommonActionTypes.ETagTypes.DEl_TAGS: {
      return state.filter((item) => {
        return item.name !== action.value.name;
      });
    }
    case NCommonActionTypes.ETagTypes.UPD_TAGS: {
      return state.map((item) => {
        if (item.name === action.value.name) {
          return { ...item, isOn: !item.isOn };
        }
        return item;
      });
    }
    case NCommonActionTypes.ETagTypes.SEL_TAGS: {
      return state;
    }
    default:
      return state;
  }
}
let commonReducer = combineReducers<ICommonState>({
  tagsState: tagsReducer
});
export interface ICommonState {
  tagsState: NCommonModal.IHeaderTag[];
}
export default commonReducer;
