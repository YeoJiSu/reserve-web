import React from "react";

interface CircularProgressProps {
  className: string;
}
const CircularProgress = ({
  className,
}: CircularProgressProps): JSX.Element => (
  <div className={`loader ${className}`}>
    <img src="/assets/loading.png" alt="loader" />
  </div>
);
export default CircularProgress;
CircularProgress.defaultProps = {
  className: "",
};
