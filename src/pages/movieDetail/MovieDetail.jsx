import moment from 'moment/moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieActions } from '../../store/actions/movieAction'


export const MovieDetail = () => {
    //param will contain the movie Id
    const params = useParams()
    // console.log('params', params)

    const dispatch = useDispatch()
    const { movieDetail } = useSelector((state) => state.movieReducer)
    console.log('movieDetail', movieDetail)

    useEffect(() => {
        dispatch(movieActions.getMovieById(params.movieIds))
    }, [params.movieIds])
    return (
        <div className='row'>
            <div className='col-4'>
                <img src={movieDetail?.hinhAnh} alt={movieDetail?.tenPhim} className='img-fluid' />
            </div>
            <div className='col-8'>
                <h4>{movieDetail?.tenPhim}</h4>
                <p>{movieDetail?.moTa}</p>
                <p>Rating: {movieDetail?.danhGia}</p>
                <p>Show time: {moment(movieDetail?.ngayKhoiChieu).format('DD-MM-YYYY hh:mm')}</p>
                <button className='btn btn-success'>Trailer</button>
            </div>
        </div>
    )
}

export default MovieDetail