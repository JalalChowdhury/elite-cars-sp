import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import SvgIcon from '@mui/material/SvgIcon';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar, Button } from '@mui/material';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardProfile from '../DashboardProfile/DashboardProfile';
import Pay from '../Pay/Pay';
import AddProducts from './../AddProducts/AddProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Review from './../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hook/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import './Dashboard.css';
import ManageContact from '../ManageContact/ManageContact';


const drawerWidth = 240;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { user,admin, logout } = useAuth();
    let { path, url } = useRouteMatch();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ mb: 7 }} />

            {/* <Divider /> */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

                m: 2
            }}>
                <i class="fas fa-home"></i><Link to='/home' style={{ textDecoration: 'none', color: 'navy' }}>
                    <Button color="inherit">Home</Button>
                </Link>
            </Box>



            {/* <Link to={`${url}`} style={{ textDecoration: 'none', color: 'blue' }}><Button color="inherit">Dashboard</Button></Link> */}
            {
                1==1 ? <Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        m: 2
                    }}>
                        <i class="fas fa-cart-plus"></i> <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">Manage all orders</Button></Link>

                        <br />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        m: 2
                    }}>
                        <i class="fas fa-user-shield"></i> <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">Make Admin</Button></Link>
                        <br />
                    </Box>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        m: 2
                    }}>
                        <i class="fas fa-plus-square"></i> <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">addProduct</Button></Link>
                        <br />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        m: 2
                    }}>
                        <i class="fas fa-cog"></i> <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">Manage Product</Button></Link>
                        <br />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        m: 2
                    }}>
                        <i class="fas fa-id-card"></i> <Link to={`${url}/manageContact`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">Manage Contact</Button></Link>
                        <br />
                    </Box>




                </Box>
                    :
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            m: 2
                        }}>
                            <i class="fas fa-cart-plus"></i> <Link to={`${url}/myOrders`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">My Orders</Button></Link>
                            <br />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            m: 2
                        }}>
                            <i class="fas fa-file-invoice-dollar"></i> <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">Payment</Button></Link>
                            <br />

                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            m: 2
                        }}>
                            <i class="fas fa-comment-dots"></i><Link to={`${url}/review`} style={{ textDecoration: 'none', color: 'navy' }}><Button color="inherit">Review</Button></Link>
                            <br />

                        </Box>


                    </Box>
            }



            {/* <Divider /> */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                m: 2
            }}>

                <i class="fas fa-sign-out-alt"></i> <Link to={`${url}/logout`} style={{ textDecoration: 'none', color: 'navy', p: 4 }}><Button onClick={logout} color="inherit">Log Out</Button></Link>
                <br />
            </Box>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{backgroundColor:'#00c9a7'}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user.displayName.split(' ').splice(0, 1).join(' ')}'s Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* setup all dashboard route  */}
                <Switch>
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>

                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageContact`}>
                        <ManageContact></ManageContact>
                    </AdminRoute>


                    <Route path={`${path}`}>
                        <DashboardProfile></DashboardProfile>
                    </Route>


                </Switch>





            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};



export default Dashboard;