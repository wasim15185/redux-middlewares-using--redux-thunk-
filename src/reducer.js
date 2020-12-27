const initialState = {
	post: [],
	error: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "FAILURE":
			return {
				post: [...state.post],
				error: action.payload.error,
			};
		case "SUCCESS":
			return {
				post: [...state.post, ...action.data],
			};
		default:
			return state;
	}
};
