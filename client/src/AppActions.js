import { LOGIN } from './AppConstants';

export const login = (user) => {
  return {
    type: LOGIN,
    user
  };
};
