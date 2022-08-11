import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const NavBar2 = () => {
  return (
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            CDF - Zambia
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/features"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/guide"
              sx={{ my: 1, mx: 1.5 }}
            >
              Guide
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default NavBar2;
