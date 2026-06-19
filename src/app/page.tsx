import ClientModule from "@/module/client";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={"loding"}>
      <ClientModule />
    </Suspense>
  );
};

export default Home;
