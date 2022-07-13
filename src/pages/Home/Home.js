import React, { useReducer, useState } from 'react';
import Card from '@mui/material/Card';
import { Container, TextField, Button, Grid } from '@mui/material';
import ItemCard from '../components/ItemCard';
import { useCustomContext }from '../../store/CustomContext'

function Home() {
    const { state, dispatch } = useCustomContext();
    
    function handleAddToCart(item) {
        dispatch({
            type: "addToCart",
            payload: item
        });


        return;
    }

    return (<div>
        <h1 color="blue">Product list</h1>
        <Container>
            <Grid container spacing={2}>
                {state.items.map(function (item) {
                    return <Grid item xs={12} sm={6} md={4}><ItemCard title={item.title} subtitle={item.subtitle} image={item.image} description={item.description} addToCart={()  => handleAddToCart(item)}></ItemCard> </Grid>;
                })}
            </Grid>
        </Container>
    </div>
    )
}

export default Home;
