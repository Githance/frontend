import { RootState } from './index';

const getUserEmail = (store: RootState) => store.userAuth.userEmail;

export { getUserEmail };
