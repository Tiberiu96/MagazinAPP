import {Card,CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core'

const CartItem = ({cart,handleUpdateCartQty,handleRemoveCart}) => {
   // console.log(cart.quantity)
    return (
        <Card style = {{maxWidth:"100%"}}>
            <CardMedia image ={cart.media.source} style ={{height:"150px"}}/>
            <CardContent style ={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant ="body1">{cart.name}</Typography>
                <Typography variant ="h6" color="primary">{cart.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick ={()=>handleUpdateCartQty(cart.id,cart.quantity -1)} size ="medium" color="secondary" type ="button">-</Button>
                <Typography variant="h5" gutterBottom>{cart.quantity}</Typography>
                <Button onClick ={()=>handleUpdateCartQty(cart.id,cart.quantity +1)} size ="medium" color ="primary">+</Button>
                <Button onClick={()=>handleRemoveCart(cart.id)} variant ="contained" type ="button" size="medium" color="secondary">Remove</Button>
            </CardActions>
            
            
                
            
            
            

        </Card>
    )
}

export default CartItem
