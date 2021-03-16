import { Typography,Container,Grid,IconButton,Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom'

import CartItem from '../components/CartItem'

const Cart = ({cart,handleUpdateCartQty,handleRemoveCart,handleEmptyCart}) => {
    //console.log(cart);
   // const available = cart.total_items;
 

    const EmptyCart = () => (
        <>
        <Typography variant = "subtitle1">Cosul tau de gunoi este gol... </Typography>
        <Link to="/">Te rugam intoarcete si fa niste cumparaturi</Link>
        </>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing ={4} style ={{marginTop:"25px"}} >
            
                {cart.line_items.map(item => (
                    <Grid item lg ={3} xm ={10} sm ={12} md ={6} key ={item.id}> 
                         <CartItem cart = {item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveCart={handleRemoveCart}/>
                    </Grid>
                ))}
           
        </Grid>
        <div className ="cart-details" style ={{marginTop:"20px"}}>
            <Typography variant ="h5" gutterBottom>Subtotal: {cart.subtotal.formatted} lei</Typography>
            <div>
                <Button onClick ={handleEmptyCart} type ="button" variant="contained" color="primary">Remove Cart</Button>
                <Button type ="button" variant="contained" color="secondary">Checkout</Button>
            </div>

        </div>
        </>
    )
    if(!cart.line_items) return <CircularProgress/>
    return (
        <Container>
            <div style ={{height:"100px"}}></div>
            <Typography variant ="subtitle1" color="primary"> Cosul tau de cumparaturi </Typography>
            {!cart.line_items.length? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart
