import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { ItemCart } from "@/Types/types";
import { increment } from "@/Redux/countSlice";
import { useDispatch } from "react-redux";
import { addBasket } from "@/Redux/basketSlice";
import { useRouter } from "next/router";
import { starsCount } from "@/helpers";
import Stars from "./Stars";

const Item = ({ title, image, price, id, rating }: ItemCart) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const rate = starsCount(rating.rate);

  const addClick = () => {
    dispatch(increment());
    dispatch(addBasket({ title, image, price, id, count: 1, totalPrice: 0 }));
  };
  const detailClick = () => {
    router.push(`/${id}`);
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
          <Stars rate={rate} />
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
          onClick={addClick}
        >
          Add to cart
        </Button>

        <Button
          sx={{ m: "10px" }}
          size="small"
          variant="outlined"
          onClick={detailClick}
        >
          Detail
        </Button>
      </Box>
    </Card>
  );
};

export default Item;
