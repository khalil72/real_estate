import Loader from "@/components/ui/loading";
import React, { Suspense } from "react";

const loading = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Loader />
    </Suspense>
  );
};

export default loading;
