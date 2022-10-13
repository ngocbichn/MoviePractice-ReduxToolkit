import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    movieList: [],
    movieDetail: undefined,
}

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } = createSlice({
    name: 'quanLyPhim',
    initialState,
    // xử lý những action đồng bộ
    reducers: {
        getMovieList: (state, action) => {
            state.movieList = action.payload
        },
        getMovieDetail: (state, action) => {
            state.movieDetail = action.payload
        },
    },

    // Xử lý những action bất đồng bộ (call API)
    extraReducers: (builder) => { },
})

export const getMovieList = createAsyncThunk(
    'quanLyPhim/getMovieList', //action type
    async (data, { dispatch, getState, rejectWithValue }) => {
        const result = await axios({
            url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13&offset=0&limit=10',
            method: 'GET',
            headers: {
                TokenCyberSoft:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ',
            },
        })

        dispatch(quanLyPhimActions.getMovieList(result.data.content))
    }
)

export const getMovieById = createAsyncThunk(
    'quanLyPhim/getMovieById',
    async (movieId, { dispatch, getState, rejectWithValue }) => {
        const result = await axios({
            url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
            method: 'GET',
            headers: {
                TokenCyberSoft:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ',
            },
        })

        dispatch(quanLyPhimActions.getMovieDetail(result.data.content))
    }
)