import React, { useReducer, useState } from 'react';
import Card from '@mui/material/Card';
import { Container, TextField, Button, Grid } from '@mui/material';
import ItemCard from '../components/ItemCard';


const initialState = {

    items: []
};

function reducer(state, action) {
    switch (action.type) {
        case "save":
            return { ...state, items: [...state.items, action.payload] };
        case "stop":
            return { ...state, isRunning: false };
        case "reset":
            return { isRunning: false, time: 0 };
        case "tick":
            return { ...state, time: state.time + 1 };
        default:
            throw new Error();
    }
}

function Chat() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    function handleAddClick() {
        dispatch({
            type: "save",
            payload: {
                title: title,
                subtitle: subtitle,
                description: description,
                image: image

            },
        });
    }

    return (<div>
        <h1 color="blue">Chatzin</h1>
        <TextField label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Subtitle" variant="standard" onChange={(e) => setSubtitle(e.target.value)} />
        <TextField label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)} />
        <TextField label="image" variant="standard" onChange={(e) => setImage(e.target.value)} />
        <Button variant="contained" onClick={handleAddClick}>Add</Button>
        <Container>
            <Grid container spacing={2}>
                {state.items.map(function (item) {
                    return <Grid item xs={12} sm={6} md={4}><ItemCard title={item.title} subtitle={item.subtitle} image={item.image} description={item.description}></ItemCard> </Grid>;
                })}
            </Grid>
        </Container>
    </div>
    )
}

export default Chat;
