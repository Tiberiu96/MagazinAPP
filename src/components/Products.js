import {Typography,GridMedia,Grid,GridDescription, Card} from '@material-ui/core' 
import Product from '../components/Product'

const Products = ({products, handleAddToCart}) => {

    
    return (
        <div>
            <div style ={{height: "100px"}}></div>
            <Grid style ={{padding: "15px"}}container justify ="center" spacing ={4}>
                {products.map(itemm =>(
                    <Grid item lg={3}>
                        <Product id={itemm.key} products= {itemm} handleAddToCart = {handleAddToCart}/>
                    </Grid>

                ))}
            </Grid>
            
        </div>
    )
}

export default Products
