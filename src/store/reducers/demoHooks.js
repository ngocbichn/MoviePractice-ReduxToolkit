import { SET_DISTRICTS, SET_PROVINCES } from '../types'

const stateDefault = {
    provincesList: [],
    districtsList: [],
}

export const demoHooks = (state = stateDefault, { payload, type }) => {
    switch (type) {
        case SET_PROVINCES: {
            let data = [...state.provincesList]
            data = payload

            return { ...state, provincesList: data }
        }
        case SET_DISTRICTS: {
            let data = [...state.districtsList]
            data = payload

            return { ...state, districtsList: data }
        }

        default:
            return state
    }


}