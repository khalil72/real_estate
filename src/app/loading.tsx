import React, { Suspense } from "react";

const loading = () => {
  return <Suspense fallback={"loading"}>loading</Suspense>;
};

export default loading;
