import { useAtomValue } from "jotai";
import usePortal from "../hooks/usePortal";
import uiAtom from "../atoms/uiAtom";
import DeleteModal, { MODAL_DELETE_LINK } from "./modals/DeleteModal";

const portalEl = document.getElementById("uiPortal");

const MODALS = {
  [MODAL_DELETE_LINK]: DeleteModal,
};

const UIPortals = () => {
  const Portal = usePortal(portalEl);
  const ui = useAtomValue(uiAtom);

  const { type, onConfirm } = ui?.modal || {};
  const Modal = MODALS[type] || null;

  return <Portal>{Modal && <Modal onConfirm={onConfirm} />}</Portal>;
};
export default UIPortals;
