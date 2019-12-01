import { createReducer } from "./reducerUtility/reducerUtils";
import { MODAL_CLOSE, MODAL_OPEN } from "../constants/modalConstants";

const initialState = null;

const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

const closeModal = state => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
