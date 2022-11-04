import React, {SetStateAction, useEffect, useState} from 'react';
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
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.264463239425!2d-87.82650748426528!3d42.35820284321102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed71cdcdb90f%3A0x5e1015e42c37074c!2sWaukegan%20Harbor%20%26%20Marina!5e0!3m2!1sen!2sus!4v1667510694057!5m2!1sen!2sus"
                    width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ProjectDetail;