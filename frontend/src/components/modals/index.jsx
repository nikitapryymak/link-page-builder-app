import DeleteModal, { MODAL_DELETE_LINK } from "./DeleteModal";
import SelectIconModal, { MODAL_SELECT_ICON } from "./SelectIconModal";

const MODALS = {
  [MODAL_DELETE_LINK]: DeleteModal,
  [MODAL_SELECT_ICON]: SelectIconModal,
};

export default MODALS;
