export const getUser = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Nikita Pryymak",
        designId: 1,
      });
    }, 200);
  });
