import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'

const CartItem = ({cart}) => {
    return (
        <Card style = {{maxWidth:"100%"}}>
            <CardMedia image ={cart.media.source} style ={{height:"150px"}}/>
            <Typography>{cart.name}</Typography>

        </Card>
    )
}

export default CartItem
