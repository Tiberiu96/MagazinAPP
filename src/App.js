import NavBar from './components/NavBar';
import {useState,useEffect} from 'react';
import Products from './components/Products';
import Commerce from "@chec/commerce.js"
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




const App = () => {
    const [products,setProducts] = useState ([]);
    const [cart,setCart] = useState({});
   const commerce = new Commerce('pk_test_24664fcb1a2eb4a7bc4a9a75718ce7ae0411299f05129');
   //functia prin care preluam produsele din api
   const getProducts = async () =>{
       const response = await commerce.products.list();
       setProducts(response.data);
   }
   //functia cu care preluam datele din cosul de cumparaturi
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
    const handleUpdateCartQty = async (productId,quantity) =>{
        const response = await commerce.cart.update(productId,{quantity})
        console.log(response.cart)
        setCart(response.cart);
    }
    const handleRemoveCart = async(productId) =>{
        const response = await commerce.cart.remove(productId)
        setCart(response.cart)
    }
    const handleEmptyCart = async () =>{
       const response = await  commerce.cart.empty()
        setCart(response.cart)
    }
  
   useEffect(()=>{
    getProducts();
    getCart();
   },[]);

    return (
    <Router>
        <div className ="app">
        <NavBar totalItems ={cart.total_items}/>
        <Switch>
            <Route exact path ="/">
                 <Products handleAddToCart = {handleAddToCart} products = {products}/>
            </Route>
            <Route exact path ="/cart">
             <Cart cart = {cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveCart={handleRemoveCart} handleEmptyCart={handleEmptyCart}/> 
            </Route>
            <Route exact path ="/checkout">
                <Checkout/>
            </Route>

        </Switch> 
        </div>
     </Router>
    )
}

export default App
