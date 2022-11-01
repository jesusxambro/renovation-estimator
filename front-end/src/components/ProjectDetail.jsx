import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function ProjectDetail(){
    let { id } = useParams();
    const [project, setProject] = useState({});

    async function getProject(){
        try{
            const res = await axios.get(`http://localhost:8080/bathrooms/${id}`)
            setProject(res.data);
            console.log(res);

        }catch (e) {
            console.log(e);
        }

    }
    useEffect(()=>{
        getProject().then();

    },[])


    return(
        <>
            Project Detail page.
            <h2>
                {project.title}
            </h2>

        </>
    )
}


export default ProjectDetail;