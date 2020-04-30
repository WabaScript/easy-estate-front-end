import {AsyncStorage} from 'react-native';

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
        case 'SET_CURRENT_USER':
            if (action.payload !== null) {
                AsyncStorage.setItem('storedUserId', `${action.payload.id}`);
              }
            return {
                ...state,
                currentUser: action.payload,
            }
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