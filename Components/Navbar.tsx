import { Box, Container, Stack } from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import logo from "../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const count = useSelector((state: RootState) => state.count.count);

  return (
    <Container sx={{ height: "10vh" }} className="navbar">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#ECA869"
        height={"8vh"}
        borderRadius="10px"
        padding="0 10px"
        boxShadow="0 3px 10px black"
      >
        <Box>
          <Link href="/">
            <Image src={logo} alt="logo" height={100} width={100} priority />
          </Link>
        </Box>
        <Box sx={{ position: "relative", mr: "14px" }}>
          <Link href="/basket" style={{ cursor: "pointer", color: "black" }}>
            <ShoppingBagIcon />
            {count > 0 ? (
              <div
                style={{
                  position: "absolute",
                  top: "-11px",
                  right: "-11px",
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
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}

export default Navbar;
