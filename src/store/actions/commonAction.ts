import {NCommonActionTypes} from '../actionTypes';
import {NCommonModal} from '../modal/commonModal'
export namespace NCommonAction{
    export function update_tag(tag:NCommonModal.IHeaderTag):NCommonModal.IHeaderTagAction{
        return{
            type: NCommonActionTypes.ETagTypes.UPD_TAGS,
            value:tag
        }
    }
    export function delete_tag(tag:NCommonModal.IHeaderTag):NCommonModal.IHeaderTagAction{
        return{
            type: NCommonActionTypes.ETagTypes.DEl_TAGS,
            value:tag
        }
    }
    export function add_tag(tag:NCommonModal.IHeaderTag):NCommonModal.IHeaderTagAction{
        return{
            type: NCommonActionTypes.ETagTypes.ADD_TAGS,
            value:tag
        }
    }
}