import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  userLoggedIn: null,
});

export const AuthTypes = Types;
export default Creators;
