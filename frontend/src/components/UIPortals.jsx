import { useAtomValue } from "jotai";
import usePortal from "../hooks/usePortal";
import uiAtom from "../atoms/uiAtom";
import MODALS from "./modals";

const portalEl = document.getElementById("uiPortal");

const UIPortals = () => {
  const Portal = usePortal(portalEl);
  const ui = useAtomValue(uiAtom);

  const { type, meta } = ui?.modal || {};
  const Modal = MODALS[type] || null;

  return <Portal>{Modal && <Modal meta={meta} />}</Portal>;
};
export default UIPortals;
