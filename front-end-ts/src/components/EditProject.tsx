import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {z} from "zod";
import {useNavigate, useParams} from "react-router-dom";
import {Project, ProjectData} from "../App";
import axios from "axios";
import FormProject from "./FormProject";

function EditProject(){

    let {id} = useParams();
    const [project, setProjects] = useState<Project | undefined>();
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
        // <>//mind blown...
        <>
            {project&&<FormProject project={project}/>}

        </>

    )
}

export default EditProject;