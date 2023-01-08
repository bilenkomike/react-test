import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>

      <Typography align="center">
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.pinterest.com/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginLeft: 30 }}
        >
          <PinterestIcon />
        </Link>
        <Link
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginLeft: 30 }}
        >
          <FacebookIcon />
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
