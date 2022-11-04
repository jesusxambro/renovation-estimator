import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {Project} from "../App";

interface FormProjectProps{
    project: Project
}


function FormProject(props: FormProjectProps){

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
            initialValues={{
                id:`${props.project?.id}`,
                title: `${project?.title}`,
                length: `${project?.length}`,
                height: `${project?.height}`,
                client_FirstName: `${project?.client_FirstName}`,
                client_LastName: `${project?.client_LastName}`,
                projectDate: `${project?.projectDate}`,
                total: `${project?.total}`,
                vanity: `${project?.vanity}`,
                vanity_Comments: `${project?.vanity_Comments}`,
                tub: `${project?.tub}`,
                tub_Comments: `${project?.tub_Comments}`,
                sink: `${project?.sink}`,
                sink_Comments: `${project?.sink_Comments}`,
                toilet: `${project?.toilet}`,
                toilet_Comments: `${project?.toilet_Comments}`,
                description: `${project?.description}`
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Field name='title'
                           validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}
                                         sx={{width:'200px'}}
                            >
                                <FormLabel>Title</FormLabel>
                                <Input {...field.title} placeholder='Title' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}
                                         sx={{width:'200px'}}
                            >
                                <FormLabel>First name</FormLabel>
                                <Input {...field} placeholder='first name' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}
                                         sx={{width:'200px'}}
                            >
                                <FormLabel>Last name</FormLabel>
                                <Input {...field} placeholder='last name' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel>Description</FormLabel>
                                <Input {...field} placeholder='description' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}
                                         sx={{width:'200px'}}
                            >
                                <FormLabel>Length</FormLabel>
                                <Input {...field} placeholder='length' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}
                                         sx={{width:'200px'}}
                            >
                                <FormLabel>Height</FormLabel>
                                <Input {...field} placeholder='height' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
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