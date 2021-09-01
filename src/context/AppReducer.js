export const actionTypes = {
    REQUEST_SEARCH: 'REQUEST_SEARCH',
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};

export default AppReducer;
