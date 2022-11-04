import React, {SetStateAction, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Projects from "./Projects";
import {Project, ProjectData} from "../App";
import axios from "axios";
import {Box, Button, Center, Grid, GridItem, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import CountertopsIcon from '@mui/icons-material/Countertops';
import AirlineSeatLegroomNormalIcon from '@mui/icons-material/AirlineSeatLegroomNormal';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EditIcon from '@mui/icons-material/Edit';
import BathtubIcon from '@mui/icons-material/Bathtub';


function ProjectDetail() {
    let {id} = useParams();
    const [project, setProjects] = useState<Project>();
    const navigate = useNavigate();


    async function getProject() {
        try {
            const result = await axios.get(`http://localhost:8080/bathrooms/${id}`);
            setProjects(ProjectData.parse(result.data));

        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getProject().then();
    }, [])


    return (
        <Center py={6} px={5}>
            <Box

                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
            >


                <Grid
                    templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                    gridTemplateRows={'100px 1fr 30px'}
                    gridTemplateColumns={'500px 1fr'}
                    gap='1'
                    color='blackAlpha.700'
                    fontWeight='bold'
                >
                    <GridItem pl='2' area={'header'}>

                        <Heading>
                            {project?.title}
                        </Heading>
                    </GridItem>

                    <GridItem pl='2' area={'nav'}

                    >
                        <Box width='900'>
                            <Text color={'gray.500'}>
                                {project?.description}
                            </Text>
                            < >
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
                                <Button
                                    onClick={(event) => {
                                        navigate(`/bathrooms/${id}/edit`)
                                    }}
                                    rounded={'full'}
                                    px={6}
                                    colorScheme={'purple.400'}
                                    bg={'purple.400'}
                                    _hover={{bg: 'purple.500'}}
                                >Edit</Button>
                            </>

                        </Box>


                    </GridItem>
                    <GridItem pl='2'
                              colEnd={6}

                              area={'main'}>
                        Main
                        <Box objectFit='cover'
                        >
                            <iframe width="100%" height="600"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=233%20S%20Wacker%20Dr,%20Chicago,%20IL%2060606+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Center>

    )
}

export default ProjectDetail;