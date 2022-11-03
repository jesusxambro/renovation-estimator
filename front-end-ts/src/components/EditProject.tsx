import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";

function EditProject(){
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
            initialValues={{ name: 'Sasuke' }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel>First name</FormLabel>
                                <Input {...field} placeholder='name' />
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

export default EditProject;