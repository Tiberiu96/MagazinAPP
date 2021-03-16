import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import "../index.css";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link,useLocation} from 'react-router-dom'


const NavBar = ({totalItems}) => {
    const location = useLocation();
    return (
        <div>
               <AppBar position ="fixed">
                <ToolBar>
                    <Typography style ={{flex: 1}} variant = "h4">
                      <MenuIcon/>  Magazin
                    </Typography>
                    <Link to ="/cart">
                     {location.pathname === "/" &&   <IconButton>
                            <Badge badgeContent={totalItems} color="secondary" style={{cursor:"pointer"}}>
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton> } 
                    </Link>         
                </ToolBar>
           </AppBar>
        </div>
    )
}

export default NavBar
