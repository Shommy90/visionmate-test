import {useMemo} from 'react';
import axios from 'axios';

const useUsersHelper = () => {
  const helper = useMemo(() => {
    return {
      usersList: async () => {
        const response = await axios.get(
          'https://randomuser.me/api/?results=200&seed=seed',
        );

        return response;
      },
    };
  }, []);

  return helper;
};

export default useUsersHelper;
