export const initialState = {
	car: [
		{
			make: "Audi",
			model: "RS5",
		},
	],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
