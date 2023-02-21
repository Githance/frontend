const getAuth = (store) => store.userAuth.isAuth;
const getUserEmail = (store) => store.userAuth.userEmail;
const getLoginError = (store) => store.userAuth.loginError;
const getLoginErrorText = (store) => store.userAuth.loginErrorText;

export { getAuth, getUserEmail, getLoginError, getLoginErrorText };
