import React from 'react'
import {Input,InputLabel, Typography,Grid,Button} from "@material-ui/core"
import {useForm,FormProvider} from "react-hook-form"
import FormInput from "../components/FormInput"

const AdressForm = () => {
    const methods = useForm();
    return (
        <>
            <Typography variant="h6" gutterBottom align="center">Adresa de Livrare</Typography>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <Grid container spacing={3} style={{display:'flex',justifyContent:"center"}}>
                        <FormInput required name="Nume" label="Nume"/>
                        <FormInput required name="Prenume" label="Prenume"/>
                        <FormInput required name="Oras" label="Oras"/>
                        <FormInput required name="Cod Postal" label="CodPostal"/>
                    </Grid>
                    <Button>Finalizeaza Comanda</Button>
                </form>

            </FormProvider>
        </>
    )
}

export default AdressForm
