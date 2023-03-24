import { ItemType } from "@/Types/types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { increment } from "@/Redux/countSlice";
import { addBasket } from "@/Redux/basketSlice";

const DetailItem: FC<ItemType> = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(increment());
    dispatch(addBasket({ title, image, price, id, count: 1, totalPrice: 0 }));
  };
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <CardMedia
          sx={{
            objectFit: "contain",
          }}
          component="img"
          height="250"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="h5" component="div" color="blue">
            {description}
          </Typography>
          <Typography variant="body1" component="p" color="maroon">
            ${price}
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Button
          sx={{ m: "10px" }}
          size="small"
          variant="contained"
          onClick={addCart}
        >
          Add to cart
        </Button>
      </Box>
    </Card>
  );
};

export default DetailItem;
