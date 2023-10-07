import DESIGN from "../../data";

export const getDesign = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(DESIGN);
    }, 200);
  });
