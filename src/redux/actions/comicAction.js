import { ERROR_SERVICE, SUCCESS_SERVICE } from '../../utils/constants';
import { notifyError, notifySuccess } from '../../utils/notify';

import {
    COMIC_HAS_ERRORED,
    COMIC_IS_LOADING,
    COMIC_FETCH_SUCCESS,
} from "../actionTypes/comicActionTypes";

export const comicHasErrored = (bool) => ({
    type: COMIC_HAS_ERRORED,
    hasErrored: bool,
});

export const comicIsLoading = (bool) => ({
    type: COMIC_IS_LOADING,
    isLoading: bool,
});

export const comicFetchSuccess = (data) => ({
    type: COMIC_FETCH_SUCCESS,
    payload: {
        data,
    },
});

export const fetchComicData = (urlApi) => (dispatch) => {
    dispatch(comicIsLoading(true));
    fetch(urlApi)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response;
        })
        .then((response) => response.json())
        .then((data) => {
            notifySuccess(SUCCESS_SERVICE)
            dispatch(comicFetchSuccess(data));
        })
        .catch((error) => {
            notifyError(ERROR_SERVICE)
            dispatch(comicHasErrored(true))
        });
};