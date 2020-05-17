import axios from 'axios';
import {baseUrl} from '../baseUrl';
import { GET_USER_RESULT, CALCULATION_ERROR, COMPUTE_RESULT } from './types';
import getStorage from "../helpers/getStorage";

const userResultsAction = results => ({ type: GET_USER_RESULT, results });
const computeResultAction = calculation => ({ type: COMPUTE_RESULT, calculation });
const calculationError = message => ({ type: CALCULATION_ERROR, message });

export const userResults = () => async (dispatch) => {
	const myToken = getStorage('token');
	axios.defaults.headers.common['Authorization'] = myToken;
	return axios.get(`${baseUrl}/calculations`)
		.then(({data}) => {
			dispatch(userResultsAction(data));
		})
		.catch(({message}) => {
			dispatch(calculationError(message));
		});
};

export const computeResult = (inputs) => async (dispatch) => {
	const myToken = getStorage('token');
	axios.defaults.headers.common['Authorization'] = myToken;
	return axios.post(`${baseUrl}/calculations`, { ...inputs })
		.then(({data}) => {
			dispatch(computeResultAction(data));
		})
		.catch(({message}) => {
			dispatch(calculationError(message));
		});
};
