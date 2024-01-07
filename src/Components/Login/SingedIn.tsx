import {
  Avatar,
  Badge,
  BadgeProps,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import CartDetail from "../../Pages/Cart/Cart-Detail";
import styled from "@emotion/styled";
import { useAppSelector } from "../../Store/AppHooks";

type Props = { signOut: any };

function SingedIn({ signOut }: Props) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const cartItemNumber = useAppSelector((state) => state.cartItem.value);
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      background: '#ffc107',
      padding: '0 4px',
    },
  }));
  

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      
      <Box sx={{ flexGrow: 0 }}>
        <Link style={{ textDecoration: 'none', color: '#ffc107' }} to={"/cart-detail/"}>
        <Button  sx={{ display: { xs: "none", md: "initial" }, mr: 1 }}
          variant="outlined"
          color="inherit"
          style={{ marginRight: "1px" }}
        >
          <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartItemNumber} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>

        
        </Button>
        </Link>
        <Tooltip title="">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              style={{ marginLeft: "5px" }}
              variant="rounded"
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/146648077?v=4"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
          <Link style={{ textDecoration: 'none', color: 'CaptionText' }} to={"/cart-detail/"}>
            <Typography textAlign="center">Sepetim</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={signOut}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
        
      </Box>
    </div>
  );
}

export default SingedIn;
