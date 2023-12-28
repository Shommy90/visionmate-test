import React, {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useUsersHelper from '../api/helper-hook/users';
import {User} from '../types/User';

interface IGlobalStateContext {
  users: User[] | null;
}

interface GlobalStateContextProps {
  children: ReactNode;
}

export const GlobalStateContext = createContext<IGlobalStateContext>({
  users: null,
});

const GlobalStateProvider: FC<GlobalStateContextProps> = ({children}) => {
  const usersHelper = useUsersHelper();

  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      const {data} = await usersHelper.usersList();

      if (data.results.length > 1) {
        setUsers(data.results);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  }, [usersHelper]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <GlobalStateContext.Provider value={{users}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
