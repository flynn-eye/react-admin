import { combineReducers} from 'redux';
import commonReducer,{ICommonState} from './commonReducer';

export const rootReducer = combineReducers<IRootState>({
    commonReducer:commonReducer
})
export interface IRootState{
    commonReducer:ICommonState
}