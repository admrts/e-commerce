import { Box, Container, Stack, Typography, CardMedia } from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import logo from "../assets/logo.svg";

function Navbar() {
  const count = useSelector((state: RootState) => state.basket.count);

  return (
    <Container sx={{ height: "10vh" }}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#ECA869"
        height={"8vh"}
        borderRadius="10px"
        padding="0 10px"
      >
        <Box>
          <img src={logo.src} alt="" width={100} height={100} />
        </Box>
        <Box sx={{ position: "relative" }}>
          <ShoppingBagIcon />
          {count > 0 ? (
            <div
              style={{
                position: "absolute",
                top: "-12px",
                right: "-12px",
                height: "15px",
                width: "15px",
                backgroundColor: "red",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "11px",
              }}
            >
              {count}
            </div>
          ) : null}
        </Box>
      </Stack>
    </Container>
  );
}

export default Navbar;
