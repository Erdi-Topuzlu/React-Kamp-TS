import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SingedIn from "../Login/SingedIn";
import SingedOut from "../Login/SingedOut";
import { ImageList, ImageListItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const [isAuth, setAuth] = React.useState(false);
  const history = useNavigate();


  
  function handleSignOut(params: any) {
    setAuth(false);
    history("/");
  }

  function handleSingIn(params: any) {
    setAuth(true);
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Desktop Logo */}
          <ImageList sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <ImageListItem>
              <img
                className="d-none d-sm-block"
                src="/logo.png"
                width={50}
              ></img>
            </ImageListItem>
          </ImageList>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Mobil Menu */}
              <MenuItem onClick={handleCloseNavMenu}>
              <Link style={{textDecoration:"none"}} to={"/"}>
                <Typography textAlign="center">Homepage</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Link style={{textDecoration:"none"}} to={"/categories"}>
                <Typography textAlign="center">Categories</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Link style={{textDecoration:"none"}} to={"/products"}>
                <Typography textAlign="center">Products</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobil Logo */}
          <ImageList sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <ImageListItem>
            
              <img src="/logo.png" width={100}></img>
              
            </ImageListItem>
          </ImageList>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
            <Link style={{textDecoration:"none"}} to={"/"}>
            <Button 
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Homepage
            </Button>
            </Link>
            
            <Link style={{textDecoration:"none"}} to={"/categories"}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Categories
            </Button>
            </Link>

            <Link style={{textDecoration:"none"}} to={"/products"}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>
            </Link>
          </Box>

          {isAuth ? (
            <SingedIn signOut={handleSignOut} />
          ) : (
            <SingedOut signIn={handleSingIn} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
