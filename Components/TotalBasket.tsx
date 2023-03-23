import { Container, Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { moneyFormat } from "@/helpers";

function TotalBasket() {
  const items = useSelector((state: RootState) => state.basket.items);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].totalPrice;
    }
    setTotalPrice(total);
  }, [items]);
  return (
    <Container>
      <Stack flexDirection="row" justifyContent="space-between">
        <Box></Box>
        <Box
          sx={{
            backgroundColor: "#B08BBB",
            padding: "5px 10px",
            borderRadius: "7px",
          }}
        >
          Total Price = ${moneyFormat(totalPrice)}
        </Box>
      </Stack>
    </Container>
  );
}

export default TotalBasket;
