import React from "react";
import { Container, Stack } from "@mui/material";
import Item from "./Item";
import { ItemType } from "@/Types/types";

interface MyProps {
  items: Array<ItemType>;
}

// type ?
const ItemList = ({ items }: MyProps) => {
  // for (let i = 0; i < props.length; i++) {
  //   console.log(props[i]);
  // }
  console.log(items);

  return (
    <Container>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={1}
      >
        {items.map((item: ItemType) => {
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
