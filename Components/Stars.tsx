import { FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Stack, Box } from "@mui/material";

interface Props {
  rate: number;
}

const Stars: FC<Props> = ({ rate }) => {
  return (
    <Box>
      {rate === 1 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 1.5 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarHalfIcon color="primary" />
          <StarBorderIcon color="primary" />
          color="primary"color="primary"
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 2 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 2.5 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarHalfIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 3 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 3.5 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarHalfIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 4 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarBorderIcon color="primary" />
        </Stack>
      ) : rate === 4.5 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarHalfIcon color="primary" />
        </Stack>
      ) : rate === 5 ? (
        <Stack flexDirection="row">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
        </Stack>
      ) : null}
    </Box>
  );
};

export default Stars;
