const initialState = {
	userResultsList: [],
};

const calculationReducer = (state = initialState, action) => {
	const { calculation, results, type } = action;
	switch(action.type) {
		case 'GET_USER_RESULT':
			return {
				...state,
				userResultsList: results,
				type
			};
		case 'COMPUTE_RESULT':
			const { userResultsList } = state;
			userResultsList && userResultsList.results.push(calculation);
			return {
				...state,
				userResultsList,
				type
			};
		default:
			return state;
	}
};

export default calculationReducer;
