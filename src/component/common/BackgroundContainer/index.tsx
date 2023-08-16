import React from "react";
import { FC } from "react";
import { BackgroundContainerProps } from "@/component/common/type";

const BackgroundContainer: FC<BackgroundContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url("/image/background.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
