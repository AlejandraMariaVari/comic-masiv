import { COMIC_FETCH_SUCCESS, COMIC_HAS_ERRORED, COMIC_IS_LOADING } from "../actionTypes/comicActionTypes";

const initialState = {
    hasErrored: false,
    loaded: false,
    comics: []
}


const comicReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMIC_HAS_ERRORED:
            return {
                ...state,
                loaded: false,
                hasErrored: action.hasErrored
            }

        case COMIC_IS_LOADING:
            return {
                ...state,
                loaded: false,
            }

        case COMIC_FETCH_SUCCESS:
            const { data } = action.payload;

            return {
                ...state,
                loaded: true,
                data
            }

        default:
            return state
    }
};


export default comicReducer;