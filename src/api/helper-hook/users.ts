import {useMemo} from 'react';
import axios from 'axios';
import {API_EXCLUDE_VALUES, SEED, USERS_NUMBER} from '../../constants/api';

const useUsersHelper = () => {
  const helper = useMemo(() => {
    return {
      usersList: async () => {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${USERS_NUMBER}&seed=${SEED}&exc=${API_EXCLUDE_VALUES}`,
        );

        return response;
      },
    };
  }, []);

  return helper;
};

export default useUsersHelper;
