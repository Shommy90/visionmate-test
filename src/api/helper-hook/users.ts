import {useMemo} from 'react';
import axios, {AxiosResponse} from 'axios';
import {
  API_EXCLUDE_VALUES,
  BASE_URL,
  SEED,
  USERS_NUMBER,
} from '../../constants/api';
import {User} from '../../types/User';

interface UsersHelper {
  usersList: () => Promise<AxiosResponse<{results: User[]}>>;
}

const useUsersHelper = (): UsersHelper => {
  const helper = useMemo(() => {
    return {
      usersList: async () => {
        const response = await axios.get<{results: User[]}>(
          `${BASE_URL}?results=${USERS_NUMBER}&seed=${SEED}&exc=${API_EXCLUDE_VALUES}`,
        );

        return response;
      },
    };
  }, []);

  return helper;
};

export default useUsersHelper;
