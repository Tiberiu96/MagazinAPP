import {Grid,CardMedia,CardContent,Card, Typography, CardActions, Icon, IconButton} from '@material-ui/core' 
import { AddShoppingCart } from '@material-ui/icons'

const Product = ({products, handleAddToCart}) => {
    //console.log(products)
   
    return (
         <Card style ={{maxWidth: "100%"}}>
                <CardMedia image = {products.media.source}  style={{height: "150px"}} />
                <CardContent>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <Typography variant ="h6" gutterBottom>
                        {products.name}
                            </Typography>
                        <Typography variant ="h7" g>
                        {products.price.formatted_with_code}
                         </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: [products.description]}} variant = "body2" color = "textSecondary"/>
                </CardContent>
                <CardActions disableSpacing style ={{display:'flex', justifyContent:"flex-end"}}>
                    <IconButton onClick = {() => handleAddToCart(products.id,1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>              
            </Card>
        
    
    )
}

export default Product
