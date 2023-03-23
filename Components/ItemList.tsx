import React from "react";
import { Container, Stack } from "@mui/material";
import Item from "./Item";

// type ?
const ItemList = ({ items }: any) => {
  return (
    <Container>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={1}
      >
        {items.map((item: any) => {
          return (
            <Item
              key={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              id={item.id}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default ItemList;
