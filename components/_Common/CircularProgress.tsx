import React from "react";
import Image from "next/image";
import Loader from "@/assets/loading.png";
interface CircularProgressProps {
  className?: string;
}
const CircularProgress = ({
  className,
}: CircularProgressProps): JSX.Element => (
  <div className={`loader ${className}`}>
    <Image src={Loader} />
  </div>
);
export default CircularProgress;
CircularProgress.defaultProps = {
  className: "",
};
