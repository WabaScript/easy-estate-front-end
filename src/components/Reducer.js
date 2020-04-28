const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LISTINGS':
            return {
                ...state,
                listings: action.payload
            };
        case 'ADD_LISTING':
            return {
                ...state,
                listings: state.listings.concat(action.payload)
            };
        case 'REMOVE_LISTING':
            return {
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload)
            };
        default:
            return state;
    }
};

export default Reducer;