import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function index() {
  const router = useRouter();
  const id = router.query.id as string;
  return <div>sa {id}</div>;
}

export default index;
