import React, {useState} from 'react';
import {Project} from "../App";
import {useNavigate} from "react-router-dom";
import {Box, Center, Heading, useColorModeValue} from "@chakra-ui/react";
import FormProject from "./FormProject";

const AddNew = () => {
    const [project, setProjects] = useState<Project>();
    const navigate = useNavigate();


    return (
        <Center py={6} px={5}>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                px={10}
            >
                <div style={{paddingTop: 10}}>
                    <Box pos='relative' display='flex' justifyContent='center'>
                        <Heading sx={{align: 'center'}}>New Project</Heading>
                    </Box>
                    <Box display='flex' justifyContent='center' >
                        <FormProject project={project}/>
                    </Box>

                </div>

            </Box>

        </Center>

    )
}

export default AddNew;