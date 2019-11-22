import {fetchCitiesPending, fetchCitiesSuccess, fetchCitiesError} from './Actions/citiesActions';

function fetchCities() {
    return dispatch => {
        dispatch(fetchCitiesPending());
        fetch("/api/cities")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCitiesSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchCitiesError(error));
        })
    }
}

export default fetchCities;