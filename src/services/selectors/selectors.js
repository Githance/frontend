const getAuthUser = (store) => store.userAuth.isAuth;
const getRegisterError = (store) => store.userAuth.registerErrorText;

export { getAuthUser, getRegisterError };
