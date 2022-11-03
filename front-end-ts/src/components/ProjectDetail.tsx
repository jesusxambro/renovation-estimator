import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Projects from "./Projects";
import {Project, ProjectData} from "../App";
import axios from "axios";
import {Button, Heading, Text} from "@chakra-ui/react";
import CountertopsIcon from '@mui/icons-material/Countertops';
import AirlineSeatLegroomNormalIcon from '@mui/icons-material/AirlineSeatLegroomNormal';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EditIcon from '@mui/icons-material/Edit';
import BathtubIcon from '@mui/icons-material/Bathtub';

function ProjectDetail(){
   let {id} = useParams();
   const [project, setProjects] = useState<Project>();
    const navigate = useNavigate();


   async function getProject(){
       try {
           const result = await axios.get(`http://localhost:8080/bathrooms/${id}`);
           setProjects(ProjectData.parse(result.data));

       }catch (e) {
           console.log(e)
       }

   }
   useEffect(()=>{
       getProject().then();
   },[])



    return(
        <div>
            <Heading>
                {project?.title}
            </Heading>
            <Text color={'gray.500'}>
                {project?.description}
            </Text>
            <div >
                {(project?.sink) ?
                    <>
                        <div>
                            <CountertopsIcon/><h3>Sink</h3>
                        </div>
                        <h4>{project?.sink_Comments}</h4>
                    </>

                    :
                    null
                }
                {(project?.toilet) ?
                    <>
                        <AirlineSeatLegroomNormalIcon/><h3>Toilet</h3>
                        <h4>{project?.toilet_Comments}</h4>

                    </>
                    :
                    <></>
                }
                {(project?.tub) ?
                    <>
                        <BathtubIcon/><h3>Bathtub</h3>
                        <h4>{project?.tub_Comments}</h4>
                    </>

                    :
                    <></>
                }
                {(project?.vanity) ?
                    <>
                        <CoPresentIcon/><h3>Vanity</h3>
                        <h4>{project?.vanity_Comments}</h4>
                    </>

                    :
                    <></>
                }
            </div>

            <Button
                onClick={(event)=>{navigate(`/bathrooms/${id}/edit`)}}
            >Edit</Button>
        </div>
    )
}

export default ProjectDetail;