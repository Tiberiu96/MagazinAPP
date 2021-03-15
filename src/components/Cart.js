import { Typography,Container,Grid,IconButton } from '@material-ui/core'

import CartItem from '../components/CartItem'

const Cart = ({cart}) => {
    console.log(cart);
    const available = cart.total_items;

    const EmptyCart = () => (
        <Typography variant = "h3">Cosul tau de gunoi este gol... </Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing ={4} style ={{marginTop:"25px"}} >
            
                {cart.line_items.map(item => (
                    <Grid item lg ={3}> 
                    <CartItem cart = {item}/>
                    </Grid>
                ))}
           
        </Grid>
        </>
    )
    return (
        <Container>
            <div style ={{height:"100px"}}></div>
            <Typography variant ="subtitle1" color="primary"> Cosul tau de cumparaturi </Typography>
            {!available ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart
