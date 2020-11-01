import React from 'react';
import {Link} from 'react-router-dom';
import './Movie.css'

function Movie({id, year, title, summary, poster,genres}){
    return (
        <div className="movie">
            <Link
            to={{
                pathname:`/movie/${id}`,
                state:{
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre,index)=>(
                        <li key={index} className="genres">{genre}</li>
                    ))}
                </ul>
                    <p className="movie_summary">{summary.slice(0,180)}{summary.length>180?"...":""}</p>
            </div>
            </Link>
        </div>
        
    )
}

export default Movie;