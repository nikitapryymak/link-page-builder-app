import AddSocialModal, {
  MODAL_ADD_SOCIAL,
} from "./AddSocialModal/AddSocialModal";
import DeleteModal, { MODAL_DELETE } from "./DeleteModal";
import EditSocialModal, { MODAL_EDIT_SOCIAL } from "./EditSocialModal";
import SelectIconModal, { MODAL_SELECT_ICON } from "./SelectIconModal";

const MODALS = {
  [MODAL_DELETE]: DeleteModal,
  [MODAL_SELECT_ICON]: SelectIconModal,
  [MODAL_ADD_SOCIAL]: AddSocialModal,
  [MODAL_EDIT_SOCIAL]: EditSocialModal,
};

export default MODALS;
