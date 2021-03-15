import NavBar from './components/NavBar';
import {useState,useEffect} from 'react';
import Products from './components/Products';
import Commerce from "@chec/commerce.js"
import Cart from './components/Cart'



const App = () => {
    const [products,setProducts] = useState ([]);
    const [cart,setCart] = useState({});
   const commerce = new Commerce('pk_test_24664fcb1a2eb4a7bc4a9a75718ce7ae0411299f05129');
   //functia prin care preluam produsele din api
   const getProducts = async () =>{
       const response = await commerce.products.list();
       setProducts(response.data);
   }
   //functiaa cu care preluam datele din cosul de cumparaturi
   const getCart = async () => {
       const response = await commerce.cart.retrieve();
       //console.log(response);
       setCart(response);
   }
   //functia cu care adaugam produsele
   const handleAddToCart = async (productId,quantity) => {
    const response = await commerce.cart.add(productId, quantity)
    //console.log(response);
    setCart(response.cart);
    console.log(cart);
    
    
   }
  
   useEffect(()=>{
    getProducts();
    getCart();
   },[]);

    return (
        <div className ="app">
            <NavBar totalItems ={cart.total_items}/>
            {/*<Products handleAddToCart = {handleAddToCart} products = {products}/>*/}
            <Cart cart = {cart}/>
            
        </div>
    )
}

export default App
