import React from 'react';
import Card from '@mui/material/Card';
import './ItemCard.scss'
import { CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';


function ItemCard({ title, subtitle, description, image, addToCart }) {

    return (<div>
        <Card className='item-card'>
            <CardHeader title={title} subheader={subtitle} />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={title}
            />     
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="add to cart" onClick={addToCart}>
                    <ShoppingCart />
                </IconButton>
            </CardActions>

        </Card>

    </div>
    )
}

export default ItemCard;
