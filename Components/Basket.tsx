import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BasketItem from "./BasketItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/Redux/store";
import { calculateItemTotalPrice } from "@/Redux/basketSlice";
import TotalBasket from "./TotalBasket";

function Basket() {
  const items = useSelector((state: RootState) => state.basket.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateItemTotalPrice());
  }, [items, dispatch]);

  if (items.length === 0) {
    return (
      <Container>
        <Stack justifyContent="center" alignItems="center">
          <Typography>Cart is Empty</Typography>
        </Stack>
      </Container>
    );
  }

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TotalBasket />
      {items.map((item) => {
        return (
          <BasketItem
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            count={item.count}
            id={item.id}
            totalPrice={item.totalPrice}
            rating={item.rating}
          />
        );
      })}
    </Container>
  );
}

export default Basket;
