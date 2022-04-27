import React from 'react';
import Card from '@mui/material/Card';
import './ItemCard.scss'
import { CardContent, CardHeader, CardMedia, Typography } from '@mui/material';


function ItemCard({title, subtitle, description, image}) {

    return (<div>

        <Card className='item-card'>
            <CardHeader title={title} subheader={subtitle}/>
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

        </Card>

    </div>
    )
}

export default ItemCard;
