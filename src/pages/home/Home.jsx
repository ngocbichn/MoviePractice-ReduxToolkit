import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/actions/movieAction";
import { useSearchParams, useNavigate } from "react-router-dom";
import cn from "classnames";
import styled from "styled-components";
import { getMovieList } from "../../storeToolkit/quanLyPhim";

export const Home = () => {
    const dispatch = useDispatch();
    //query url, để khi load lại page thì component không bị render lại
    const [searchParam, setSearchParam] = useSearchParams({
        isShowing: true,
    });
    // console.log(searchParam.get("isShowing"));
    // const { movieList } = useSelector((state) => state.movieReducer);
    // console.log(movieList)
    const { movieList } = useSelector((state) => state.quanLyPhimReducer)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getMovieList);
    }, []);
    return (
        <div className="Home container">
            <div className="mt-3">
                <Button
                    className={cn({ active: searchParam.get("isShowing") === "true" })}
                    onClick={() => {
                        setSearchParam({
                            isShowing: true,
                        });
                    }}
                >
                    Now Showing
                </Button>
                <Button
                    className={cn('ms-3', { active: searchParam.get("isShowing") === "false" })}
                    onClick={() => {
                        setSearchParam({
                            isShowing: false,
                        });
                    }}
                >
                    Coming Soon
                </Button>
            </div>
            <div className="row my-3">
                {movieList
                    .filter(
                        (item) => item.sapChieu.toString() === searchParam.get("isShowing")
                    )
                    .map((film) => (
                        <div className="col-3" key={film.maPhim}>
                            <div className="card mt-3">
                                <img src={film.hinhAnh} alt={film.name} height={'420px'} />
                                <div className="card-body">
                                    <h6>{film.tenPhim}</h6>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => navigate(`/detail/${film.maPhim}`)}
                                    >Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;

const Button = styled.button`
  padding: 12px 20px;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover{
    box-shadow: 4px 4px rgba(0,0,0,0.2);
  }
  &.active{
    background-color: #000;
    color: #fff;
  }
`;
