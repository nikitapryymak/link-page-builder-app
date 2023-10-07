import { atom } from "jotai";

// type Modal = {
//     type: string,
//     onConfirm: () => Promise<any>,
// }

const uiAtom = atom({
  modal: null,
  toast: null,
});

export default uiAtom;
