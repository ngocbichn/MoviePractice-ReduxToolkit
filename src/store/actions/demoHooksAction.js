import axios from 'axios'
import { SET_DISTRICTS, SET_PROVINCES } from '../types/demoHookType'

// export const setProvincesList = (payload) => {
//     return {
//         type: SET_PROVINCES,
//         payload,
//     }
// }
// export const setDistrictsList = (payload) => {
//     return {
//         type: SET_DISTRICTS,
//         payload,
//     }
// }

export const demoHooksAction = {
    setProvincesList: () => {
        return async (dispatch) => {
            const result = await axios.get('https://6335707aea0de5318a137e3c.mockapi.io/provines?fbclid=IwAR1asfNobmysRmFV4pUF9XiCGST2BOdcOJSCV0RM6dOyd12NUXMPodhLL_o')
            dispatch({
                type: SET_PROVINCES,
                payload: result.data,
            })
        }
    },
    setDistrictsList: () => {
        return async (dispatch) => {
            const result = await axios.get('https://6335707aea0de5318a137e3c.mockapi.io/districts?fbclid=IwAR2AtSX6abrpfzjl_g7G3Ps21LWgjEZo-_N7fWODP7b6taIpCM_cuWB6b_A')
            dispatch({
                type: SET_DISTRICTS,
                payload: result.data,
            })
        }
    }
}