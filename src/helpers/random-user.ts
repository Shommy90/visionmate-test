import {User} from '../types/User';

export const getRandomUser = (users: User[]): User | null => {
  if (!users) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * users.length);

  return users[randomIndex];
};
