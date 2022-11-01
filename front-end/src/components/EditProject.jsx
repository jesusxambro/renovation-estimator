import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";





function EditProject() {
    let { id } = useParams();
    const [project, setProject] = useState({});
    const [title, setTitle] = useState("");

    async function getProject(){
        try{
            const res = await axios.get(`http://localhost:8080/bathrooms/${id}`)
            setProject(res.data);
            // console.log(res)
            setTitle(res.data.title)

        }catch (e) {
            console.log(e);
        }

    }
    useEffect(()=>{
        getProject().then();


    },[])


    return(
        <div>
            <h1>
                Edit
            </h1>
            This is the edit page.
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    value={title}
                    onChange={(event)=>{setTitle(event.target.value)}}

                />

            </Box>

        </div>
    )
}

export default EditProject;