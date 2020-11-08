import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from './store/reducers';
import './App.css';
import { NCommonAction } from './store/actions/commonAction';
import { NCommonModal } from './store/modal/commonModal';
import { Button } from 'antd';
import { ICommonState } from './store/reducers/commonReducer';
import Router from './router/index';
type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
const App: React.FC<IProps> = (props) => {
  return (
    <>
      <Router />
    </>
  );
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleChange(value: NCommonModal.IHeaderTag) {
      return dispatch(NCommonAction.update_tag(value));
    },
    handleClick(value: NCommonModal.IHeaderTag) {
      return dispatch(NCommonAction.add_tag(value));
    },

    deleteList(value: NCommonModal.IHeaderTag) {
      return dispatch(NCommonAction.delete_tag(value));
    }
  };
};
const mapStateToProps = (state: IRootState): ICommonState => {
  return {
    tagsState: state.commonReducer.tagsState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
