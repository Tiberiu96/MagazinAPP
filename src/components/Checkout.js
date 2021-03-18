import {Typography,Stepper,Step,StepLabel,CircularProgress,Paper,Button} from '@material-ui/core'
import {useState} from 'react'
import AdressForm from '../components/AdressForm'
import PaymentForm from '../components/PaymentForm'

const Checkout = () => {
    const steps = ["Adresa Livrarii","Achita"]
    const [activeSteps,setActiveSteps] = useState(0);

    const Form = () =>  
    (activeSteps===0) ? <AdressForm/> : <PaymentForm/>

    return (
        <>
            <div style ={{height:"100px"}}></div>
            <main style ={{display:"flex",justifyContent:"center"}}>
                <Paper style ={{width:"50%",display:"flex",justifyContent:"center",flexDirection:'column'}}>
                    <Typography variant ="h6" color ="secondary" gutterBottom align="center"> Checkout Page</Typography>
                    <Stepper activeStep ={activeSteps}>
                        {steps.map(step=>(
                            <Step key ={step} style={{padding:"10px"}}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                     ))}

                    </Stepper>
                    {(activeSteps===steps.length) ? <h5>Confirmation</h5> : <Form/>}
                    <Button onClick ={()=> alert("Comanda finalizata")}type ="button" color="primary" variant="contained" >Finalizeaza Comanda</Button>
                    </Paper>
            </main>
        </>
    )
}

export default Checkout
