import React from "react";

type DividerProps = {
  bg?: string;
  opacity?: string;
  width?: string;
  center?: boolean;
};
const Divider = ({
  width = "w-64",
  center = false,
  bg = "bg-primary",
  opacity = "opacity-100",
}: DividerProps) => {
  return (
    <div className={`w-full mb-4`}>
      <div
        className={`h-1 ${
          center ? "mx-auto" : ""
        }  ${width}  ${bg} ${opacity} my-0 py-0 rounded-t mb-10`}
      ></div>
    </div>
  );
};

export default Divider;
