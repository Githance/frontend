import { RootState } from '../index';

const getAuth = (store: RootState) => store.userAuth.isAuth;
const getUserEmail = (store: RootState) => store.userAuth.userEmail;
const getLoginError = (store: RootState) => store.userAuth.loginError;
const getLoginErrorText = (store: RootState) => store.userAuth.loginErrorText;

export { getAuth, getUserEmail, getLoginError, getLoginErrorText };
