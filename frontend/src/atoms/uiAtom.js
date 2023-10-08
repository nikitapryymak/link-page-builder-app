import { atom } from "jotai";

// type Modal = {
//     type: string,
//     meta: {},
// }

const uiAtom = atom({
  modal: null,
  toast: null,
});

export default uiAtom;
