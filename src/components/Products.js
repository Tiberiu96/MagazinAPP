import {Typography,GridMedia,Grid,GridDescription, Card} from '@material-ui/core' 
import Product from '../components/Product'

const Products = () => {

    const products = {id:1,name:"Apple Laptop ", description: "This is a product", price: "109 $", image: "https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=6&m=488160041&s=612x612&w=0&h=3O1yKl4iym-f57JBU523FqL0tm8_Q3ov6RyFTwh0XBI="}
    return (
        <div>
            <div style ={{height: "100px"}}></div>
            <Grid container justify ="center" spacing ={2}>
           
                <Product products = {products}/>
                <Product products = {products}/>
                <Product products = {products}/>
                <Product products = {products}/>
               
                
     
            </Grid>
            
        </div>
    )
}

export default Products
