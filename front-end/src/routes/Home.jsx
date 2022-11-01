import React from 'react';
import Project from "../components/Project.jsx";
import {Grid} from "@mui/material";


function Home(props) {

    return(
        <Grid container spacing={{ xs: 2, md: 3 }}
              sx={{ paddingTop: 5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}>


            {props.list.map((project,index)=>{
                return(
                    <Grid item xs={4} sm={4} md={4} key={index}>
                    <Project key={project.id} project={project} getProjects={props.getProjects}/>
                    </Grid>
                )
            })}

        </Grid>
    )
}

export default Home;