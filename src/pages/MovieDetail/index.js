import React, { useEffect } from 'react';
import { get } from 'lodash';
import { Container, Typography, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/search';
import { movieResult as movieResultSelector } from '../../redux/selectors';

export default ({ match }) => {
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));

    useEffect(() => {
        const movieId = get(match, 'params.movieId');
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) {
            dispatch(searchMovieById({ movieId }));
        }
    });


    if (!movieResult) {
        return <CircularProgress size={50} color="primary" />;
    }

    return (
        <Container>
            <Typography variant="h3">{movieResult.Title}</Typography>
            <img src={movieResult.Poster} alt={movieResult.Title} />
            <Typography><strong>Actors: </strong> {movieResult.Actors}</Typography>
            <Typography><strong>Director: </strong> {movieResult.Director}</Typography>
            <Typography><strong>Country: </strong> {movieResult.Country}</Typography>
            <Typography><strong>Clasification: </strong> {movieResult.Rated}</Typography>
            <Typography><strong>Awards: </strong> {movieResult.Awards}</Typography>
            <Typography><strong>Synopsis: </strong> {movieResult.Plot}</Typography>
        </Container>
    );
}