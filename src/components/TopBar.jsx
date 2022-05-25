import React, { useState, useReducer } from 'react';
import './TopBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useCustomContext }from '../store/CustomContext'

const pages = ['about', 'Chat', 'Blog', 'Calculator'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar() {
  const { state, dispatch } = useCustomContext();
  const navigate = useNavigate();
  const [anchorRef, setAnchorRef] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const numOfItemsInCart = state.cart.length;

  const handlePageClicked = (page) => {
    navigate(page);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorRef(event.currentTarget);
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorRef(null);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const openChart = () => {
    console.log("cart is opened");
  }
  return (<AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorRef}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorRef)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => handlePageClicked(page)}> <div to={page}>{page}</div></Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to={page}>{page}</Link>
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0.05 }}>
          <Badge badgeContent={numOfItemsInCart} color="secondary" aria-label="add to cart" onClick={openChart}>
            <ShoppingCart />
          </Badge>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default TopBar;
