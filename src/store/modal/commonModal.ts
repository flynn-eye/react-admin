import { NCommonActionTypes} from '../actionTypes';
export namespace NCommonModal{
    export interface IHeaderTag{
        name:string;
        isOn:boolean;
        path:string;
    }
    export interface IHeaderTagAction{
        type:NCommonActionTypes.ETagTypes,
        value:IHeaderTag,
    }
}