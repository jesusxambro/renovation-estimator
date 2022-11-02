import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CountertopsIcon from '@mui/icons-material/Countertops';
import AirlineSeatLegroomNormalIcon from '@mui/icons-material/AirlineSeatLegroomNormal';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import {Card, Grid} from "@mui/material";
import Button from "@mui/material/Button";


function ProjectDetail() {
    let {id} = useParams();
    const [project, setProject] = useState({});

    async function getProject() {
        try {
            const res = await axios.get(`http://localhost:8080/bathrooms/${id}`)
            setProject(res.data);

        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getProject().then();

    }, [])


    function getWorkedOn() {
        if (project.title) {

            return (
                <div >
                    {(project.sink) ?
                        <>
                        <div>
                            <CountertopsIcon/><h3>Sink</h3>
                        </div>
                            <h4>{project.sink_Comments}</h4>
                        </>

                        :
                        null
                    }
                    {(project.toilet) ?
                        <>
                            <AirlineSeatLegroomNormalIcon/><h3>Toilet</h3>
                            <h4>{project.toilet_Comments}</h4>

                        </>
                        :
                        <></>
                    }
                    {(project.tub) ?
                        <>
                            <BathtubIcon/><h3>Bathtub</h3>
                            <h4>{project.tub_Comments}</h4>
                        </>

                        :
                        <></>
                    }
                    {(project.vanity) ?
                        <>
                            <CoPresentIcon/><h3>Vanity</h3>
                            <h4>{project.vanity_Comments}</h4>
                        </>

                        :
                        <></>
                    }
                </div>


            )
        }

    }

    return (
        <div  style={{ paddingTop:10 }}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"

        >

            <Grid item xs={3} style={{ maxHeight: '80vh', minWidth: '80vh' }}>
        <Card sx={{ minWidth: 90 }} >
            <h2>
                {project.title}
            </h2>
            <img
                src="https://preview.redd.it/gx2d26c1auu91.jpg?width=3024&format=pjpg&auto=webp&s=671fce4dccb1d71d10fbee865b972ffc0ef6730b"
                className="project_photo"
                alt="project picture of a bathroom"/>
            <h2>Description:</h2>
            <p>
                {project.description}
            </p>
            <h4>
                Size of the project:
            </h4>
            <h5>
                L:{project.length}ft W:{project.height}ft
            </h5>
            <h4>
                Worked On:
            </h4>
            <>
                {getWorkedOn()}
            </>
            <Link to={`/details/${project.id}/edit`}>
                <Button variant="contained">Edit<EditIcon/>  </Button>

            </Link>
        </Card>
            </Grid>
        </Grid>
        </div>
    )
}


export default ProjectDetail;