import {Grid,CardMedia,CardContent,Card, Typography, CardActions, Icon, IconButton} from '@material-ui/core' 
import { AddShoppingCart } from '@material-ui/icons'

const Product = ({products}) => {
    return (
    
        <Grid item lg ={2}>
            <Card style ={{width: "250px"}}>
                <CardMedia image = {products.image} style={{height: "150px"}} />
                <CardContent>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <Typography variant ="h6" gutterBottom>
                        {products.name}
                            </Typography>
                        <Typography variant ="h6" g>
                        {products.price}
                         </Typography>
                    </div>
                    <Typography variant = "body1" color = "secondary">
                        {products.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style ={{display:'flex', justifyContent:"flex-end"}}>
                    <IconButton>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>              
            </Card>
        </Grid>
    
    )
}

export default Product
