import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getOneItem } from "@/Network/API";
import { ItemType } from "@/Types/types";
import Navbar from "@/Components/Navbar";
import DetailItem from "@/Components/DetailItem";
import { Container, Stack } from "@mui/material";

const Index = () => {
  const router = useRouter();
  const id = router.query.id;
  const [itemData, setItemData] = useState<ItemType>();
  const getData = async () => {
    const item = await getOneItem(String(id));
    setItemData(item);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Stack justifyContent="center" alignItems="center">
          {itemData && (
            <DetailItem
              title={itemData.title}
              category={itemData.category}
              price={itemData.price}
              description={itemData.description}
              rating={itemData.rating}
              id={itemData.id}
              image={itemData.image}
            />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Index;
