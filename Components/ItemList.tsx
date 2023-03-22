import React, { FC } from "react";
import { Container, Stack } from "@mui/material";
import Item from "./Item";
import { ItemType } from "@/Model/ItemModel";

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
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default ItemList;
