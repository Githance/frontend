const getAuth = (store) => store.userAuth.isAuth;
const getUserEmail = (store) => store.userAuth.userEmail;

export { getAuth, getUserEmail };
