export const signIn = (): Promise<{ hasPaymentMethods: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hasPaymentMethods: false,
      });
    }, 1000);
  });
};
