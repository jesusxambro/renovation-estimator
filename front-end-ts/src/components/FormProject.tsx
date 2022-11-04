import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {Project} from "../App";
import InputFieldCustom from "./InputFieldCustom";
import axios from "../fetcher/axios";

interface FormProjectProps{
    project: Project
}

function FormProject({project}: FormProjectProps){

    function validateName(value:string) {
        let error
        if (!value) {
            error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }
    return(
        <Formik
            initialValues={
                // mind BLOWN!!!
                project
            }
            enableReinitialize
            onSubmit={async (values, actions)  => {
                const res = await axios.patch(`/bathrooms/${project.id}`, values)

            }}
        >
            {(props) => (
                <Form>
                    {/*//mind BLOWN*/}
                    <InputFieldCustom name='title' />
                    <InputFieldCustom name='client_FirstName' />
                    <InputFieldCustom name='client_LastName' />
                    <InputFieldCustom name='length' />
                    <InputFieldCustom name='height' />
                    <InputFieldCustom name='description' />
                    <InputFieldCustom name='address' />
                    <InputFieldCustom name='zipCode' type='number' />
                    <InputFieldCustom name='total' type='number' />




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
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>

    )
}

export default FormProject;