import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { ItemCart } from "@/Model/ItemModel";
import { increment, decrement } from "@/Redux/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/Redux/store";

const Item = ({ title, image, price }: ItemCart) => {
  const count = useSelector((state: RootState) => state.basket.count);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increment());
  };
  return (
    <Card
      sx={{
        width: 350,
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
          <Typography variant="h6" component="div">
            {title}
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
          gap: 1,
        }}
      >
        <Button
          sx={{ m: "10px" }}
          size="small"
          variant="contained"
          onClick={handleClick}
        >
          Add to cart
        </Button>
      </Box>
    </Card>
  );
};

export default Item;
