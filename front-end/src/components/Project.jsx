import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import CatSound from '../assets/cat.mp3'

function Project(props){
    let catSound = new Audio(CatSound);

   async function handleDelete() {
       try{
           const res = await axios.delete(`http://localhost:8080/bathrooms/${props.project.id}`);
           console.log(res);
           props.getProjects();

       }catch (e) {
           console.log(e);
       }
    }

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to={`/details/${props.project.id}`}>


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
                    {props.project.description}
                </Typography>
            </CardContent>
        </CardActionArea>
            <CardActions>
                <Link onClick={(event)=>{catSound.play().then()}} to={`/details/${props.project.id}`}>
                <Button variant="contained" size="small">Detail</Button>
                </Link>
                <Button size="small" variant="contained" onClick={handleDelete}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Project;