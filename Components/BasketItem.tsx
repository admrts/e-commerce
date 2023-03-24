import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { BasketCart } from "@/Types/types";
import { useDispatch } from "react-redux";
import { addButton, minusButton } from "@/Redux/basketSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { increment, decrement } from "@/Redux/countSlice";
import { moneyFormat } from "@/helpers";
import Image from "next/image";

function BasketItem({
  title,
  price,
  image,
  count,
  id,
  totalPrice,
}: BasketCart) {
  const dispatch = useDispatch();

  const addItemCount = () => {
    dispatch(addButton(id));
    dispatch(increment());
  };
  const minusItemCount = () => {
    dispatch(minusButton(id));
    dispatch(decrement());
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack flexDirection="row" gap={1}>
        <Box>
          <Image src={image} alt={title} width={100} height={100} />
        </Box>

        <Stack justifyContent="space-between">
          <Box>{title}</Box>
          <Box>${price}</Box>

          <Stack flexDirection="row" alignItems="center">
            <IconButton color="success" onClick={addItemCount}>
              <AddIcon />
            </IconButton>
            <Typography>{count}pcs.</Typography>
            <IconButton color="error" onClick={minusItemCount}>
              <RemoveIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Typography
        sx={{
          backgroundColor: "#B08BBB",
          padding: "5px 10px",
          borderRadius: "7px",
        }}
        variant="body2"
      >
        ${moneyFormat(totalPrice)}
      </Typography>
    </Stack>
  );
}

export default BasketItem;
