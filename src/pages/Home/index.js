import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import MovieIcon from '../../icons/MovieIcon';
import styles from './styles';

export default ({ history }) => {
    const [searchText, setSearchText] = useState('');
    const classes = styles();


    const handleSearchTextChange = e => {
        setSearchText(e.target.value)
    }

    const handleCleanTextClick = e => {
        setSearchText('')
    }

    const handleSearchClick = e => {
        history.push(`/results?movieName=${searchText}`);
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>
                            Welcome!
                        </Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.MovieIcon} />
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder='Search...'
                    className={classes.textFieldSearch}
                    onChange={handleSearchTextChange}
                />
                <Grid className={classes.buttonsContainer}>
                    <Button variant='contained' onClick={handleCleanTextClick}>Clean</Button>
                    <Button variant='contained' onClick={handleSearchClick} className={classes.searchButton} color='primary'>Search</Button>
                </Grid>
            </Card>
        </Container>
    )
} 