import React from 'react';
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


function Project(props){


    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="renovation in progress in a bathroom"
                height="140"
                image="https://preview.redd.it/gx2d26c1auu91.jpg?width=3024&format=pjpg&auto=webp&s=671fce4dccb1d71d10fbee865b972ffc0ef6730b"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/details/${props.project.id}`}>
                <Button size="small">Detail</Button>
                </Link>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Project;