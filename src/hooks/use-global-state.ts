import {useContext} from 'react';
import {GlobalStateContext} from '../context/GlobalStateContext';

const useGlobalState = () => useContext(GlobalStateContext);

export default useGlobalState;
