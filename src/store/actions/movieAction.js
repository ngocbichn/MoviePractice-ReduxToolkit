import axios from "axios"
import { GET_MOVIEBYID, GET_MOVIELIST } from "../types"

export const movieActions = {
    getMovieList: () => {
        return async (dispatch) => {
            const result = await axios({
                url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13',
                method: 'GET',
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ'
                }
            })
            dispatch({
                type: GET_MOVIELIST,
                payload: result.data.content,
            })
        }
    },
    getMovieById: (movieId) => {
        return async (dispatch) => {
            const result = await axios({
                url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
                method: 'GET',
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ'
                }
            })
            dispatch({
                type: GET_MOVIEBYID,
                payload: result.data.content,
            })
        }
    }
}