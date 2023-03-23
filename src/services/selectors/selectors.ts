import { RootState } from '../index';

const getUserEmail = (store: RootState) => store.userAuth.userEmail;
const getLoginError = (store: RootState) => store.userAuth.loginError;
const getLoginErrorText = (store: RootState) => store.userAuth.loginErrorText;

export { getUserEmail, getLoginError, getLoginErrorText };
