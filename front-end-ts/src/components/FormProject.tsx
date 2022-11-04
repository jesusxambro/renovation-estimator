import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, SimpleGrid} from "@chakra-ui/react";
import {Project} from "../App";
import InputFieldCustom from "./InputFieldCustom";
import axios from "../fetcher/axios";
import projects from "./Projects";

interface FormProjectProps {
    project?: Project
}

function FormProject({project}: FormProjectProps) {

    function validateName(value: string) {
        let error
        if (!value) {
            error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }

    // function handleNewProject(project: Project|{}) {
    //
    // }
    //
    // function editProject(project: Project|{}) {
    //     const res = await axios.patch(`/bathrooms/${projects.id}`, values)
    // }

    return (
        <Formik
            initialValues={
                // mind BLOWN!!!
                project || {}
            }
            enableReinitialize
            onSubmit={async (values, actions) => {
                try {
                    if (!project?.id) {
                        const res = await axios.post(`/bathrooms/`, values)
                    } else {
                        const res = await axios.patch(`/bathrooms/${project.id}`, values)
                    }
                } catch (e) {
                    console.log(e);
                }


            }}
        >
            {(props) => (
                <Form>
                    {/*//mind BLOWN*/}
                    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                        <Box>
                            <InputFieldCustom name='title'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='client_FirstName'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='client_LastName'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='length' type='number'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='height' type='number'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='description'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='address'/>

                        </Box>
                        <Box>
                            <InputFieldCustom name='zipCode' type='number'/>

                        </Box>
                        <Box>
                            <InputFieldCustom name='total' type='number'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='projectDate' type='date'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='address' type='text'/>
                        </Box>
                        <Box>
                            <InputFieldCustom name='city' type='text'/>
                        </Box>


                        <InputFieldCustom name='state' type='text'/>
                        <InputFieldCustom name='zipCode' type='number'/>
                        <InputFieldCustom name='firstEstimate' type='number'/>
                    </SimpleGrid>


                    {/*<Field name='title'*/}
                    {/*       validate={validateName}>*/}
                    {/*    {({  field, form }: any) => (*/}
                    {/*        <FormControl isInvalid={form.errors.name && form.touched.name}*/}
                    {/*                     sx={{width:'200px'}}*/}
                    {/*        >*/}
                    {/*            <FormLabel>Title</FormLabel>*/}
                    {/*            <Input {...field} placeholder='Title' />*/}
                    {/*            <FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                    {/*        </FormControl>*/}
                    {/*    )}*/}
                    {/*</Field>*/}
                    {/*<Field name='client_FirstName' validate={validateName}>*/}
                    {/*    {({ field, form }: any) => (*/}
                    {/*        <FormControl isInvalid={form.errors.name && form.touched.name}*/}
                    {/*                     sx={{width:'200px'}}*/}
                    {/*        >*/}
                    {/*            <FormLabel>First name</FormLabel>*/}
                    {/*            <Input {...field} placeholder='first name' />*/}
                    {/*            <FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                    {/*        </FormControl>*/}
                    {/*    )}*/}
                    {/*</Field>*/}
                    {/*<Field name='client_LastName' validate={validateName}>*/}
                    {/*    {({ field, form }) => (*/}
                    {/*        <FormControl isInvalid={form.errors.name && form.touched.name}*/}
                    {/*                     sx={{width:'200px'}}*/}
                    {/*        >*/}
                    {/*            <FormLabel>Last name</FormLabel>*/}
                    {/*            <Input {...field} placeholder='last name' />*/}
                    {/*            <FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                    {/*        </FormControl>*/}
                    {/*    )}*/}
                    {/*</Field>*/}
                    {/*<Field name='description' validate={validateName}>*/}
                    {/*    {({ field, form }) => (*/}
                    {/*        <FormControl isInvalid={form.errors.name && form.touched.name}>*/}
                    {/*            <FormLabel>Description</FormLabel>*/}
                    {/*            <Input {...field} placeholder='description' />*/}
                    {/*            <FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                    {/*        </FormControl>*/}
                    {/*    )}*/}
                    {/*</Field>*/}
                    {/*<Field name='length' validate={validateName}>*/}
                    {/*    {({ field, form }: any) => (*/}
                    {/*        <FormControl isInvalid={form.errors.name && form.touched.name}*/}
                    {/*                     sx={{width:'200px'}}*/}
                    {/*        >*/}
                    {/*            <FormLabel>Length</FormLabel>*/}
                    {/*            <Input {...field} placeholder='length' />*/}
                    {/*            <FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                    {/*        </FormControl>*/}
                    {/*    )}*/}
                    {/*</Field>*/}
                    {/*<Field name='height' validate={validateName}>*/}
                    {/*    {({ field, form } :any ) => (*/}
                    {/*        <FormControl isInvalid={form.errors.name && form.touched.name}*/}
                    {/*                     sx={{width:'200px'}}*/}
                    {/*        >*/}
                    {/*            <FormLabel>Height</FormLabel>*/}
                    {/*            <Input {...field} placeholder='height' />*/}
                    {/*            <FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                    {/*        </FormControl>*/}
                    {/*    )}*/}
                    {/*</Field>*/}
                    <Box display='flex' justifyContent='center' py={10}>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>

                    </Box>

                </Form>
            )}
        </Formik>

    )
}

export default FormProject;