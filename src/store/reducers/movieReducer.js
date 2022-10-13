import { GET_MOVIEBYID, GET_MOVIELIST } from "../types"

const stateDefault = {
    movieList: [],
    movieDetail: undefined,
}

export const movieReducer = (state = stateDefault, { payload, type }) => {
    switch (type) {
        case GET_MOVIELIST: {
            let data = [...state.movieList]
            data = payload
            return { ...state, movieList: data }
        }
        case GET_MOVIEBYID: {
            return { ...state, movieDetail: payload }
        }
        default:
            return state
    }
}