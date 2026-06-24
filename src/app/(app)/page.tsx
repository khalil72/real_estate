import Loader from "@/components/ui/loading";
import ClientModule from "@/module/client";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ClientModule />
    </Suspense>
  );
};

export default Home;
