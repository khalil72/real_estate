import React from "react";

const Container = ({ children, className }: any) => {
  return (
    <div className={`container mx-aut px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
