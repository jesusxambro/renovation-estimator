import React from 'react';
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {Field} from "formik";

interface InputFieldInterface{
    name:string;
    validate?: (value: string)=> string | undefined;
    type?: string;
}


const InputFieldCustom = ({name, validate, type='text'}: InputFieldInterface) => {

    return(
        <Field name={name} validate={validate}>
            {({  field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name} sx={{width:'200px'}}>
                    <FormLabel>{field.name}</FormLabel>
                    <Input {...field} type={type} placeholder={field.name} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )

}

export default InputFieldCustom;