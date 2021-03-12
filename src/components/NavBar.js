import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import "../index.css";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = () => {
    return (
        <div>
               <AppBar position ="fixed">
                <ToolBar>
                    <Typography style ={{flex: 1}} variant = "h4">
                      <MenuIcon/>  Magazin
                    </Typography>
                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </IconButton>           
                </ToolBar>
           </AppBar>
        </div>
    )
}

export default NavBar
